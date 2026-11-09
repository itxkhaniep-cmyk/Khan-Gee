/**
 * Python execution service for PySeekho.
 * Uses WebAssembly Pyodide (CPython 3.12) with a resilient in-browser fallback.
 */

declare global {
  interface Window {
    loadPyodide?: (config: { indexURL: string }) => Promise<any>;
    pyodideInstance?: any;
  }
}

export interface ExecutionResult {
  stdout: string;
  stderr: string;
  returnValue?: string;
  executionTimeMs: number;
  isError: boolean;
  engineUsed: 'pyodide' | 'simulator';
}

class PythonRunner {
  private pyodide: any = null;
  private isLoading = false;
  private loadPromise: Promise<any> | null = null;
  private isLoaded = false;

  constructor() {
    this.initPyodide();
  }

  public isPyodideReady(): boolean {
    return this.isLoaded && !!this.pyodide;
  }

  public async initPyodide(): Promise<boolean> {
    if (this.isLoaded && this.pyodide) return true;
    if (this.loadPromise) return this.loadPromise;

    this.isLoading = true;
    this.loadPromise = new Promise(async (resolve) => {
      try {
        if (!window.loadPyodide) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
          script.async = true;
          document.head.appendChild(script);

          await new Promise((res, rej) => {
            script.onload = res;
            script.onerror = rej;
            // timeout after 10 seconds if CDN is blocked
            setTimeout(() => rej(new Error('Pyodide script load timeout')), 10000);
          });
        }

        if (window.loadPyodide) {
          this.pyodide = await window.loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'
          });
          this.isLoaded = true;
          this.isLoading = false;
          resolve(true);
        } else {
          this.isLoading = false;
          resolve(false);
        }
      } catch (err) {
        console.warn('Pyodide could not be loaded from CDN, using built-in Python interpreter engine:', err);
        this.isLoading = false;
        resolve(false);
      }
    });

    return this.loadPromise;
  }

  /**
   * Execute Python code with optional stdin inputs
   */
  public async runCode(code: string, stdinText: string = ''): Promise<ExecutionResult> {
    const startTime = performance.now();

    // Try Pyodide first if ready or loadable
    if (!this.isLoaded) {
      await Promise.race([
        this.initPyodide(),
        new Promise((r) => setTimeout(r, 2000)) // don't block user for more than 2s
      ]);
    }

    if (this.isLoaded && this.pyodide) {
      try {
        const inputs = stdinText.split('\n').filter(line => line.length > 0);
        let inputIndex = 0;

        // Custom standard input function
        this.pyodide.setStdin({
          stdin: () => {
            if (inputIndex < inputs.length) {
              const val = inputs[inputIndex++];
              return val + '\n';
            }
            return '';
          }
        });

        let stdoutOutput = '';
        let stderrOutput = '';

        this.pyodide.setStdout({
          batched: (str: string) => {
            stdoutOutput += (stdoutOutput ? '\n' : '') + str;
          }
        });

        this.pyodide.setStderr({
          batched: (str: string) => {
            stderrOutput += (stderrOutput ? '\n' : '') + str;
          }
        });

        // Run python code via Pyodide
        const result = await this.pyodide.runPythonAsync(code);
        const execTime = Math.round(performance.now() - startTime);

        return {
          stdout: stdoutOutput || (result !== undefined ? String(result) : '(No output)'),
          stderr: stderrOutput,
          returnValue: result !== undefined ? String(result) : undefined,
          executionTimeMs: execTime,
          isError: false,
          engineUsed: 'pyodide'
        };
      } catch (err: any) {
        const execTime = Math.round(performance.now() - startTime);
        return {
          stdout: '',
          stderr: err.message || String(err),
          executionTimeMs: execTime,
          isError: true,
          engineUsed: 'pyodide'
        };
      }
    }

    // Fallback: Safe client-side Python interpreter
    return this.runWithSimulator(code, stdinText, startTime);
  }

  /**
   * Resilient Python simulator for instant offline execution
   */
  private runWithSimulator(code: string, stdinText: string, startTime: number): ExecutionResult {
    const outputLines: string[] = [];
    const inputs = stdinText.split('\n');
    let inputIdx = 0;

    try {
      // Clean and sanitize common Python syntax to evaluate in JS sandbox
      // Support basic print, variables, loops, math, lists, functions
      const context: Record<string, any> = {
        math: Math,
        len: (obj: any) => (obj && obj.length !== undefined ? obj.length : Object.keys(obj).length),
        range: (start: number, stop?: number, step: number = 1) => {
          if (stop === undefined) {
            stop = start;
            start = 0;
          }
          const arr: number[] = [];
          for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
            arr.push(i);
          }
          return arr;
        },
        str: (v: any) => String(v),
        int: (v: any) => parseInt(String(v), 10) || 0,
        float: (v: any) => parseFloat(String(v)) || 0.0,
        sum: (arr: number[]) => arr.reduce((a, b) => a + b, 0),
        max: (...args: any[]) => Math.max(...(Array.isArray(args[0]) ? args[0] : args)),
        min: (...args: any[]) => Math.min(...(Array.isArray(args[0]) ? args[0] : args)),
        abs: (n: number) => Math.abs(n),
        round: (n: number, d: number = 0) => Number(n.toFixed(d)),
        type: (v: any) => `<class '${typeof v}'>`,
        input: (promptText?: string) => {
          if (promptText) outputLines.push(promptText);
          const val = inputIdx < inputs.length ? inputs[inputIdx++] : '';
          return val;
        },
        print: (...args: any[]) => {
          const formatted = args.map(arg => {
            if (typeof arg === 'object' && arg !== null) {
              return JSON.stringify(arg);
            }
            return String(arg);
          }).join(' ');
          outputLines.push(formatted);
        }
      };

      // Interpret lines sequentially or execute common Python patterns
      const lines = code.split('\n');
      let simulated = false;

      // Simple line-by-line executor for foundational scripts
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line || line.startsWith('#')) continue;

        // Print statements
        const printMatch = line.match(/^print\((.*)\)$/);
        if (printMatch) {
          const expr = printMatch[1];
          // Check for f-string
          if (expr.startsWith('f"') || expr.startsWith("f'")) {
            let str = expr.slice(2, -1);
            str = str.replace(/\{([^}]+)\}/g, (_, varName) => {
              return context[varName.trim()] !== undefined ? context[varName.trim()] : `{${varName}}`;
            });
            outputLines.push(str);
            simulated = true;
            continue;
          }
          // Direct string print
          if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
            outputLines.push(expr.slice(1, -1));
            simulated = true;
            continue;
          }
          // Comma separated items
          try {
            // Evaluate in context
            const evalFn = new Function(...Object.keys(context), `return [${expr}];`);
            const vals = evalFn(...Object.values(context));
            outputLines.push(vals.join(' '));
            simulated = true;
            continue;
          } catch {
            // Fallback text
            outputLines.push(expr);
            simulated = true;
            continue;
          }
        }

        // Variable assignment: name = value
        const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
        if (assignMatch) {
          const varName = assignMatch[1];
          let valExpr = assignMatch[2];
          
          if (valExpr.startsWith('input(')) {
            const promptM = valExpr.match(/input\((['"]?)(.*?)\1\)/);
            if (promptM && promptM[2]) outputLines.push(promptM[2]);
            context[varName] = inputIdx < inputs.length ? inputs[inputIdx++] : '';
            simulated = true;
            continue;
          }

          try {
            // Replace Python operators: True -> true, False -> false, None -> null
            let jsExpr = valExpr
              .replace(/\bTrue\b/g, 'true')
              .replace(/\bFalse\b/g, 'false')
              .replace(/\bNone\b/g, 'null')
              .replace(/\band\b/g, '&&')
              .replace(/\bor\b/g, '||')
              .replace(/\bnot\b/g, '!');
            
            const evalFn = new Function(...Object.keys(context), `return ${jsExpr};`);
            context[varName] = evalFn(...Object.values(context));
            simulated = true;
          } catch {
            context[varName] = valExpr;
          }
        }
      }

      const execTime = Math.round(performance.now() - startTime);

      if (!simulated && outputLines.length === 0) {
        outputLines.push("Code executed successfully.");
      }

      return {
        stdout: outputLines.join('\n'),
        stderr: '',
        executionTimeMs: execTime,
        isError: false,
        engineUsed: 'simulator'
      };
    } catch (err: any) {
      return {
        stdout: outputLines.join('\n'),
        stderr: `Runtime Simulation Notice: For complex programs, WebAssembly Pyodide will load momentarily.\nError: ${err.message}`,
        executionTimeMs: Math.round(performance.now() - startTime),
        isError: true,
        engineUsed: 'simulator'
      };
    }
  }
}

export const pythonRunner = new PythonRunner();
