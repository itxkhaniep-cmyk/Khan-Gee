import React, { useState, useEffect, useRef } from 'react';
import { UserProgress, Language } from '../types';
import { pythonRunner, ExecutionResult } from '../services/pythonRunner';
import { 
  Play, 
  RotateCcw, 
  Download, 
  Copy, 
  Check, 
  Terminal, 
  FileCode, 
  Plus, 
  Trash2, 
  Sparkles,
  Cpu,
  Clock
} from 'lucide-react';
import { diagnosePythonError } from '../services/errorDiagnostics';
import { SmartErrorDoctorCard } from './SmartErrorDoctorCard';

interface CodePlaygroundProps {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  language: Language;
  onNavigateToLesson?: (lessonId: string) => void;
  initialCode?: string;
}

const TEMPLATES: Record<string, { name: string; code: string }> = {
  'hello': {
    name: '1. Hello World',
    code: `# Welcome to PySeekho!
print("Assalam-o-Alaikum, Dunya!")
naam = "Muhammad"
print(f"Khush Amdeed, {naam}!")
`
  },
  'even_odd': {
    name: '2. Even ya Odd Checker',
    code: `# Even ya Odd number check karna
def check(n):
    if n % 2 == 0:
        return f"{n} is EVEN (Juft)"
    else:
        return f"{n} is ODD (Taaq)"

for num in [2, 5, 8, 11, 24]:
    print(check(num))
`
  },
  'table': {
    name: '3. Multiplication Table',
    code: `# Pahara (Math Table) print karein:
number = 7
print(f"=== {number} Ka Pahara ===")
for i in range(1, 11):
    print(f"{number} x {i} = {number * i}")
`
  },
  'functions': {
    name: '4. Functions & Returns',
    code: `# Functions demo
def calculate_area(length, width):
    area = length * width
    perimeter = 2 * (length + width)
    return area, perimeter

a, p = calculate_area(10, 5)
print("Area (Raqba):", a)
print("Perimeter (Ihata):", p)
`
  },
  'prime': {
    name: '5. Prime Number Checker',
    code: `# Prime number (Mufrad adad) checker
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

test_numbers = [2, 3, 4, 7, 10, 13, 17, 20]
for num in test_numbers:
    status = "Prime" if is_prime(num) else "Not Prime"
    print(f"{num}: {status}")
`
  },
  'lists_dict': {
    name: '6. Lists & Dictionaries',
    code: `# Students Data Record
students = [
    {"name": "Ali", "marks": 88, "grade": "A"},
    {"name": "Sara", "marks": 94, "grade": "A+"},
    {"name": "Zubair", "marks": 72, "grade": "B"}
]

print("--- Student Report ---")
for s in students:
    print(f"Naam: {s['name']} | Marks: {s['marks']} | Grade: {s['grade']}")

average = sum(s['marks'] for s in students) / len(students)
print(f"\\nClass Average: {average:.1f}")
`
  },
  'xml_automation': {
    name: '⚡ 7. Real AI XML ➔ CSV Pipeline',
    code: `# Real-World Dynamic XML -> CSV Pipeline Simulation
# Concepts: set() for dynamic columns, Frame +1 rule, GPS coordinate split

mock_assets = [
    {
        "id": "A-101",
        "label": "Vehicle_Car",
        "coords": "31.5204,74.3587;31.5210,74.3592",
        "frame_raw": "0",
        "attributes": {"color": "White", "speed": "65km/h"}
    },
    {
        "id": "A-102",
        "label": "Pedestrian",
        "coords": "-",
        "frame_raw": "14",
        "attributes": {"color": "Dark_Blue", "weather": "Rainy"}
    }
]

# 1. Dynamic Attribute Collection with set()
all_attrs = set()
for a in mock_assets:
    for k in a["attributes"].keys():
        all_attrs.add(k)

dynamic_cols = sorted(list(all_attrs))
print(f"🔍 Discovered Dynamic Columns: {dynamic_cols}\\n")

# 2. Process Rows
final_rows = []
for a in mock_assets:
    frame = str(int(a["frame_raw"]) + 1) if a["frame_raw"].isdigit() else a["frame_raw"]
    
    lat, lon = "-", "-"
    if a["coords"] != "-" and "," in a["coords"]:
        first_pt = a["coords"].split(";")[0]
        parts = first_pt.split(",")
        lat, lon = parts[0].strip(), parts[1].strip()
        
    row = {
        "Frame": frame,
        "ID": a["id"],
        "Label": a["label"],
        "Lat": lat,
        "Lon": lon
    }
    
    for col in dynamic_cols:
        row[col] = a["attributes"].get(col, "-")
        
    final_rows.append(row)

# 3. Display Tabular Output
print(f"{'Frame':<8} {'ID':<8} {'Label':<14} {'Lat':<10} {'Lon':<10} {'color':<12} {'speed':<10} {'weather':<10}")
print("-" * 80)
for r in final_rows:
    print(f"{r['Frame']:<8} {r['ID']:<8} {r['Label']:<14} {r['Lat']:<10} {r['Lon']:<10} {r['color']:<12} {r['speed']:<10} {r['weather']:<10}")
`
  }
};

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
  progress,
  onUpdateProgress,
  language,
  onNavigateToLesson,
  initialCode
}) => {
  const [activeFileId, setActiveFileId] = useState<string>(
    progress.activeFileId || progress.userPlaygroundFiles[0]?.id || 'main.py'
  );
  const [currentCode, setCurrentCode] = useState<string>(initialCode || '');
  const [stdinText, setStdinText] = useState<string>('');
  const [activeRightTab, setActiveRightTab] = useState<'output' | 'stdin'>('output');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<ExecutionResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [newFileName, setNewFileName] = useState<string>('');
  const [showNewFileInput, setShowNewFileInput] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Sync current code when initialCode or active file changes
  useEffect(() => {
    if (initialCode) {
      setCurrentCode(initialCode);
      return;
    }
    const file = progress.userPlaygroundFiles.find(f => f.id === activeFileId);
    if (file) {
      setCurrentCode(file.code);
    } else if (progress.userPlaygroundFiles.length > 0) {
      setActiveFileId(progress.userPlaygroundFiles[0].id);
      setCurrentCode(progress.userPlaygroundFiles[0].code);
    }
  }, [activeFileId, progress.userPlaygroundFiles, initialCode]);

  const handleCodeChange = (newCode: string) => {
    setCurrentCode(newCode);
    // Update in progress state
    onUpdateProgress(prev => ({
      ...prev,
      activeFileId,
      userPlaygroundFiles: prev.userPlaygroundFiles.map(f => 
        f.id === activeFileId ? { ...f, code: newCode, updatedAt: new Date().toISOString() } : f
      )
    }));
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setActiveRightTab('output');
    try {
      const res = await pythonRunner.runCode(currentCode, stdinText);
      setLastResult(res);
    } catch (err: any) {
      setLastResult({
        stdout: '',
        stderr: err?.message || String(err),
        executionTimeMs: 0,
        isError: true,
        engineUsed: 'simulator'
      });
    } finally {
      setIsRunning(false);
    }
  };

  // Keyboard shortcut Ctrl+Enter or Cmd+Enter to run
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRunCode();
      return;
    }

    // Tab key inserts 4 spaces
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const spaces = '    ';
      const updated = currentCode.substring(0, start) + spaces + currentCode.substring(end);
      handleCodeChange(updated);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + spaces.length;
      }, 0);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const currentFile = progress.userPlaygroundFiles.find(f => f.id === activeFileId);
    const fileName = currentFile ? currentFile.name : 'script.py';
    const blob = new Blob([currentCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName.endsWith('.py') ? fileName : `${fileName}.py`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleCreateFile = () => {
    if (!newFileName.trim()) return;
    let name = newFileName.trim();
    if (!name.endsWith('.py')) name += '.py';
    const id = `file_${Date.now()}`;
    const newFile = {
      id,
      name,
      code: `# File: ${name}\nprint("Hello from ${name}!")\n`,
      updatedAt: new Date().toISOString()
    };
    onUpdateProgress(prev => ({
      ...prev,
      userPlaygroundFiles: [...prev.userPlaygroundFiles, newFile],
      activeFileId: id
    }));
    setActiveFileId(id);
    setNewFileName('');
    setShowNewFileInput(false);
  };

  const handleDeleteFile = (idToDelete: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (progress.userPlaygroundFiles.length <= 1) {
      alert("Aap kam az kam aik file zaroor rakhein.");
      return;
    }
    const remaining = progress.userPlaygroundFiles.filter(f => f.id !== idToDelete);
    const nextActive = remaining[0]?.id || '';
    onUpdateProgress(prev => ({
      ...prev,
      userPlaygroundFiles: remaining,
      activeFileId: nextActive
    }));
    setActiveFileId(nextActive);
  };

  const handleSelectTemplate = (templateKey: string) => {
    const t = TEMPLATES[templateKey];
    if (t) {
      handleCodeChange(t.code);
    }
  };

  // Line numbers calculation
  const lineCount = Math.max(currentCode.split('\n').length, 18);
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Playground Header & File Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <span>Python Live Code Playground</span>
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            {language === 'roman_urdu' && "Yahan koi bhi Python program likhein aur foran run karein. Sab code mehfooz rehta hai."}
            {language === 'english' && "Write and execute any Python code interactively in the browser. Auto-saved."}
            {language === 'urdu' && "یہاں آپ کوئی بھی پائتھن کوڈ لکھ کر چلا سکتے ہیں، تمام کوڈ خودکار طور پر محفوظ رہتا ہے۔"}
          </p>
        </div>

        {/* Action Controls & Templates */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Templates Dropdown */}
          <div className="relative">
            <select
              onChange={(e) => {
                if (e.target.value) handleSelectTemplate(e.target.value);
                e.target.value = '';
              }}
              className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 text-xs font-medium focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-700/80 cursor-pointer shadow-xs"
              defaultValue=""
            >
              <option value="" disabled>Examples / Templates...</option>
              {Object.entries(TEMPLATES).map(([k, v]) => (
                <option key={k} value={k}>{v.name}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer shadow-xs"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer shadow-xs"
            title="Download .py file"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .py</span>
          </button>

          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className={`flex items-center gap-2 px-5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer ${
              isRunning 
                ? 'bg-amber-600 text-white cursor-wait' 
                : 'bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95'
            }`}
          >
            <Play className={`w-4 h-4 fill-current ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Running...' : 'Run Code (Ctrl+Enter)'}</span>
          </button>
        </div>
      </div>

      {/* File Tabs Strip */}
      <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 mb-3 text-xs">
        {progress.userPlaygroundFiles.map((file) => (
          <div
            key={file.id}
            onClick={() => setActiveFileId(file.id)}
            className={`group flex items-center gap-2 px-3 py-1.5 rounded-t-lg border cursor-pointer select-none transition-colors ${
              file.id === activeFileId
                ? 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 border-b-transparent text-amber-700 dark:text-amber-400 font-semibold shadow-xs'
                : 'bg-slate-100 dark:bg-slate-900/60 border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/40'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>{file.name}</span>
            {progress.userPlaygroundFiles.length > 1 && (
              <button
                onClick={(e) => handleDeleteFile(file.id, e)}
                className="opacity-0 group-hover:opacity-100 hover:text-red-500 p-0.5 rounded transition-opacity cursor-pointer"
                title="Delete file"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            )}
          </div>
        ))}

        {showNewFileInput ? (
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-300 dark:border-slate-700 shadow-xs">
            <input
              type="text"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              placeholder="e.g. test.py"
              className="bg-transparent text-xs text-slate-900 dark:text-white outline-none w-24"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCreateFile();
                if (e.key === 'Escape') setShowNewFileInput(false);
              }}
            />
            <button 
              onClick={handleCreateFile}
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 font-bold px-1 cursor-pointer"
            >
              ✓
            </button>
            <button 
              onClick={() => setShowNewFileInput(false)}
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 px-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowNewFileInput(true)}
            className="flex items-center gap-1 px-2.5 py-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded transition-colors cursor-pointer"
            title="Create new Python file"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New File</span>
          </button>
        )}
      </div>

      {/* Editor & Terminal Split (2-Column Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column: Code Editor (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
          {/* Editor Top Bar */}
          <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-slate-300">{activeFileId}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 font-mono">Python 3.12</span>
              <span className="text-emerald-400 text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Auto-saved
              </span>
            </div>
          </div>

          {/* Line Numbers + Textarea Container */}
          <div className="relative flex flex-1 min-h-[460px] font-mono-code text-sm">
            {/* Gutter (Line Numbers) */}
            <div className="w-12 bg-slate-950/80 text-slate-600 select-none py-3 pr-2 text-right text-xs border-r border-slate-900/80 leading-6 shrink-0">
              {lineNumbers.map(n => (
                <div key={n}>{n}</div>
              ))}
            </div>

            {/* Code Input */}
            <textarea
              ref={textareaRef}
              value={currentCode}
              onChange={(e) => handleCodeChange(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              className="flex-1 bg-transparent text-slate-100 p-3 outline-none resize-none leading-6 font-mono-code text-sm selection:bg-slate-700 selection:text-white"
              placeholder="# Python code yahan likhein..."
            />
          </div>
        </div>

        {/* Right Column: Execution Console & Stdin (5 cols) */}
        <div className="lg:col-span-5 flex flex-col bg-slate-950 rounded-xl border border-slate-800 shadow-xl overflow-hidden min-h-[460px]">
          {/* Terminal Tabs */}
          <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => setActiveRightTab('output')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded transition-colors font-medium ${
                  activeRightTab === 'output'
                    ? 'bg-slate-800 text-slate-100'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Console Output</span>
              </button>

              <button
                onClick={() => setActiveRightTab('stdin')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded transition-colors font-medium ${
                  activeRightTab === 'stdin'
                    ? 'bg-slate-800 text-slate-100'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>Standard Input (stdin)</span>
                {stdinText.trim() && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2">
              {lastResult && (
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{lastResult.executionTimeMs}ms</span>
                </div>
              )}
              <button
                onClick={() => setLastResult(null)}
                className="text-xs text-slate-400 hover:text-slate-200 px-2 py-0.5 rounded hover:bg-slate-800"
                title="Clear console"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Console Body */}
          <div className="flex-1 p-4 font-mono-code text-xs overflow-y-auto bg-slate-950">
            {activeRightTab === 'output' ? (
              <div>
                {!lastResult ? (
                  <div className="text-slate-500 py-12 text-center select-none">
                    <Terminal className="w-8 h-8 mx-auto text-slate-600 mb-2 opacity-50" />
                    <p className="text-slate-400">Console tayyar hai.</p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Upar diye gaye <span className="text-emerald-400">"Run Code"</span> button par click karein ya Ctrl+Enter dabayein.
                    </p>
                  </div>
                ) : (
                  <div>
                    {/* Execution Engine note */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-900 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Cpu className="w-3 h-3 text-sky-400" />
                        Engine: {lastResult.engineUsed === 'pyodide' ? 'CPython 3.12 (WASM)' : 'Fast Python Engine'}
                      </span>
                      <span className={lastResult.isError ? 'text-red-400' : 'text-emerald-400'}>
                        {lastResult.isError ? 'Execution Error' : 'Success'}
                      </span>
                    </div>

                    {/* Standard Out */}
                    {lastResult.stdout && (
                      <pre className="text-emerald-300 whitespace-pre-wrap leading-relaxed">
                        {lastResult.stdout}
                      </pre>
                    )}

                    {/* Standard Error & Ghalti Doctor */}
                    {lastResult.stderr && (
                      <div className="space-y-3">
                        <div className="mt-2 p-2.5 rounded bg-red-950/40 border border-red-900/60 text-red-300 whitespace-pre-wrap leading-relaxed">
                          {lastResult.stderr}
                        </div>

                        {lastResult.isError && (
                          <SmartErrorDoctorCard
                            diagnosis={diagnosePythonError(currentCode, lastResult.stderr) || {
                              errorType: 'Python Syntax / Runtime Error',
                              title: { roman_urdu: 'Code Mein Ghalti Aayi Hai!', english: 'Error Detected in Code!', urdu: 'کوڈ میں غلطی آئی ہے!' },
                              cause: { roman_urdu: 'Python interpreter is code ko chala nahi saka.', english: 'Python failed to execute the code.', urdu: 'کوڈ نہیں چل سکا۔' },
                              fixInstruction: { roman_urdu: 'Error line aur syntax ko ghaur se check karein.', english: 'Inspect the line and syntax.', urdu: 'لائن اور سینٹیکس کی جانچ کریں۔' },
                              relatedLessonId: 'lesson-12-error-handling',
                              relatedLessonTitle: 'Sabaq 12: Errors & Exception Handling',
                              canAutoFix: false
                            }}
                            language={language}
                            onApplyFix={(fixedCode) => {
                              handleCodeChange(fixedCode);
                            }}
                            onNavigateToLesson={(lessonId) => {
                              if (onNavigateToLesson) {
                                onNavigateToLesson(lessonId);
                              }
                            }}
                          />
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col">
                <p className="text-slate-400 text-xs mb-2">
                  Agar aapke code mein <code className="text-amber-300">input()</code> istemal ho raha hai, to yahan har input nayi line par pehle se likh dein:
                </p>
                <textarea
                  value={stdinText}
                  onChange={(e) => setStdinText(e.target.value)}
                  placeholder="Line 1: Pehla input&#10;Line 2: Doosra input..."
                  className="flex-1 min-h-[220px] bg-slate-900/80 text-slate-200 border border-slate-800 rounded-lg p-3 outline-none font-mono-code text-xs resize-none"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
