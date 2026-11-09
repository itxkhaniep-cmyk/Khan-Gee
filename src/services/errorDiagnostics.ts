/**
 * Smart Python Error Diagnostics Engine for PySeekho
 * Analyzes Python errors and code to provide precise, friendly Roman Urdu explanations,
 * instant 1-click auto-fixes, and direct links to lessons.
 */

export interface ErrorDiagnosis {
  errorType: string;
  lineNumber?: number;
  highlightSnippet?: string;
  title: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  cause: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  fixInstruction: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  wrongExample?: string;
  correctExample?: string;
  suggestedFullCode?: string;
  relatedLessonId: string;
  relatedLessonTitle: string;
  canAutoFix: boolean;
}

/**
 * Accurately extracts the user's code line number from the traceback,
 * strictly ignoring internal runtime files (e.g., Pyodide's /lib/python312.zip/_pyodide/_base.py line 597).
 */
function extractUserLineNumber(stderr: string, code: string): number | undefined {
  const lines = code.split('\n');
  const totalLines = lines.length;

  // Pattern 1: Look specifically for <exec>, <stdin>, <string>, main.py, interactive.py
  const userExecRegex = /File\s+["'](?:<exec>|<stdin>|<string>|main\.py|interactive\.py)["'],\s+line\s+(\d+)/gi;
  let match;
  let lastExecLine: number | undefined = undefined;

  while ((match = userExecRegex.exec(stderr)) !== null) {
    const lineNum = parseInt(match[1], 10);
    if (lineNum >= 1 && lineNum <= totalLines) {
      lastExecLine = lineNum; // Take the latest frame inside user's exec
    }
  }

  if (lastExecLine !== undefined) {
    return lastExecLine;
  }

  // Pattern 2: Search for any "line X" that specifically is within 1 to totalLines
  const allLinesMatches = [...stderr.matchAll(/line\s+(\d+)/gi)];
  for (let i = allLinesMatches.length - 1; i >= 0; i--) {
    const candidate = parseInt(allLinesMatches[i][1], 10);
    // Ignore internal Pyodide line numbers (like 597, 285, 149) unless user actually has that many lines
    if (candidate >= 1 && candidate <= totalLines) {
      return candidate;
    }
  }

  // Default to line 1 if code is single line or short
  return totalLines === 1 ? 1 : undefined;
}

export function diagnosePythonError(code: string, stderr: string): ErrorDiagnosis | null {
  if (!stderr && !code) return null;

  const rawCode = code.trim();
  const lines = code.split('\n');
  const lineNumber = extractUserLineNumber(stderr, code);
  const errorLine = (lineNumber && lineNumber <= lines.length) ? lines[lineNumber - 1] : (lines[0] || '');

  // =========================================================================
  // CASE 1: Missing Quotation Marks inside print(...) -> e.g. print( hellow to everyone )
  // This is the EXACT error from the user's screenshot!
  // Python output: SyntaxError: invalid syntax. Perhaps you forgot a comma? (or NameError)
  // =========================================================================
  const unquotedPrintMatch = code.match(/print\s*\(\s*([^"'\d\s][^()]*)\s*\)/i);
  if (unquotedPrintMatch) {
    const rawInner = unquotedPrintMatch[1].trim();
    // Check if inner is not a clean single variable name or boolean or calculation
    // e.g., "hellow to everyone", "hello world", "assalam o alaikum"
    const isMultipleWords = /\s+/.test(rawInner);
    const hasNoQuotes = !rawInner.startsWith('"') && !rawInner.startsWith("'");

    if (hasNoQuotes && (isMultipleWords || stderr.includes('SyntaxError') || stderr.includes('Perhaps you forgot a comma') || stderr.includes('NameError'))) {
      const fixedCode = code.replace(/print\s*\(\s*([^"'\s][^()]*?)\s*\)/g, (m, inner) => {
        const trimmed = inner.trim();
        return `print("${trimmed}")`;
      });

      return {
        errorType: 'SyntaxError: Quotes ("...") Missing Hain',
        lineNumber: lineNumber || 1,
        highlightSnippet: unquotedPrintMatch[0],
        title: {
          roman_urdu: 'print() Ke Andar Text Par Quotation Marks ("...") Nahi Lagaye!',
          english: 'Missing Quotation Marks ("...") Inside print()!',
          urdu: 'پرنٹ میں ٹیکسٹ کے گرد کوٹس ("...") نہیں لگائے گئے!'
        },
        cause: {
          roman_urdu: `Aapne print ke andar "${rawInner}" likha hai lekin iske dono taraf quotes ("...") nahi lagaye. Python mein kisi bhi jumlay ya text ko print karne ke liye usay quotation marks ke andar band karna lazmi hota hai. Quotes ke baghair Python isay code ke alag alag lafz samajh kar SyntaxError de deta hai.`,
          english: `You wrote print( ${rawInner} ) without quotation marks. In Python, any text or sentence must be enclosed in quotes like print("${rawInner}").`,
          urdu: `پائتھن میں کسی بھی جملے یا ٹیکسٹ کو اسکرین پر پرنٹ کرنے کے لیے دونوں طرف کوٹس ("...") لگانا لازمی ہے۔`
        },
        fixInstruction: {
          roman_urdu: `Text ke dono taraf double quotes lagayein: print("${rawInner}"). Neche "Jaadui Auto-Fix" button dabayein yeh khud theek ho jayega!`,
          english: `Wrap the text in quotation marks: print("${rawInner}"). Click the Auto-Fix button below to fix it automatically.`,
          urdu: `ٹیکسٹ کے دونوں اطراف ڈبل کوٹس لگائیں: print("${rawInner}")۔`
        },
        wrongExample: `print( ${rawInner} )  # ❌ Quotes ke baghair (SyntaxError)`,
        correctExample: `print("${rawInner}")  # ✅ Quotes ke andar (Sahi Tareeqa)`,
        suggestedFullCode: fixedCode,
        relatedLessonId: 'lesson-1-intro-print',
        relatedLessonTitle: 'Sabaq 1: Python Ka Taaruf & print() Statement',
        canAutoFix: true
      };
    }
  }

  // =========================================================================
  // CASE 2: Variable Name with Space (e.g., "Roll No = 125") -> SyntaxError
  // =========================================================================
  const spaceVarRegex = /^\s*([a-zA-Z_]\w*)\s+([a-zA-Z_]\w*)\s*=/m;
  const spaceVarMatch = errorLine ? errorLine.match(spaceVarRegex) : code.match(spaceVarRegex);
  
  if (spaceVarMatch && (stderr.includes('SyntaxError') || stderr.includes('invalid syntax'))) {
    const word1 = spaceVarMatch[1];
    const word2 = spaceVarMatch[2];
    const fixedVarName = `${word1.toLowerCase()}_${word2.toLowerCase()}`;

    let fixedCode = code.replace(new RegExp(`\\b${word1}\\s+${word2}\\s*=`, 'g'), `${fixedVarName} =`);
    fixedCode = fixedCode.replace(/\bPrint\s*\(/g, 'print(').replace(/\bPRINT\s*\(/g, 'print(');

    return {
      errorType: 'SyntaxError: Variable Name Mein Space',
      lineNumber: lineNumber || 1,
      highlightSnippet: spaceVarMatch[0],
      title: {
        roman_urdu: 'Variable Ke Naam Mein Space (Khali Jagah) Hai!',
        english: 'Variable Name Contains a Space!',
        urdu: 'متغیر کے نام میں اسپیس نہیں آ سکتی!'
      },
      cause: {
        roman_urdu: `Aapne "${word1} ${word2} = ..." likha hai. Python mein kisi bhi variable ke naam ke darmiyan space nahi aa sakti. Python isay do alag cheezain samajh kar confuse ho jata hai.`,
        english: `You wrote "${word1} ${word2} = ...". Python variable names cannot contain spaces.`,
        urdu: `پائتھن میں کسی متغیر کے نام کے درمیان اسپیس دینا منع ہے۔`
      },
      fixInstruction: {
        roman_urdu: `Space ki jagah underscore "_" lagayein: "${fixedVarName} = ...". Agar print ka "P" bada hai to usay bhi chota "print()" karein.`,
        english: `Use an underscore "_" between words like "${fixedVarName} = ...". Also ensure print() is lowercase.`,
        urdu: `اسپیس کی جگہ انڈر اسکور لگائیں اور پرنٹ کو چھوٹے حروف میں لکھیں۔`
      },
      wrongExample: `${word1} ${word2} = 125  # ❌ Space hai (SyntaxError)`,
      correctExample: `${fixedVarName} = 125  # ✅ Underscore lagayein`,
      suggestedFullCode: fixedCode,
      relatedLessonId: 'lesson-2-variables-types',
      relatedLessonTitle: 'Sabaq 2: Variables & Core Data Types (Usool)',
      canAutoFix: true
    };
  }

  // =========================================================================
  // CASE 3: Capital "Print(" instead of lowercase "print(" -> NameError
  // =========================================================================
  if (code.match(/\bPrint\s*\(/) || code.match(/\bPRINT\s*\(/) || stderr.includes("name 'Print' is not defined") || stderr.includes("name 'PRINT' is not defined")) {
    const fixedCode = code.replace(/\bPrint\s*\(/g, 'print(').replace(/\bPRINT\s*\(/g, 'print(');

    return {
      errorType: "NameError: 'Print' Define Nahi Hai",
      lineNumber: lineNumber || 1,
      highlightSnippet: 'Print(...)',
      title: {
        roman_urdu: 'Print Ka "P" Bada Hai (Capital Letter)!',
        english: 'Print is Capitalized!',
        urdu: 'پرنٹ بڑے حروف میں لکھا گیا ہے!'
      },
      cause: {
        roman_urdu: 'Python case-sensitive language hai (yani baday aur chotay haroof mein farq karti hai). Isme "print" aur "Print" do bilkul alag cheezain hain. Python ka built-in function hamesha chotay haroof mein "print()" hota hai.',
        english: 'Python is strictly case-sensitive. The standard output function is lowercase "print()", not "Print()".',
        urdu: 'پائتھن میں فنکشن ہمیشہ چھوٹے حروف (print) میں ہوتا ہے۔'
      },
      fixInstruction: {
        roman_urdu: '"Print(" ko badal kar chota "print(" likhein.',
        english: 'Change "Print(" to lowercase "print(".',
        urdu: 'پرنٹ کو چھوٹے حروف میں لکھیں۔'
      },
      wrongExample: 'Print("Hello Dunya")  # ❌ Bada "P" (NameError)',
      correctExample: 'print("Hello Dunya")  # ✅ Chota "p" (Sahi)',
      suggestedFullCode: fixedCode,
      relatedLessonId: 'lesson-1-intro-print',
      relatedLessonTitle: 'Sabaq 1: Python Ka Taaruf & print() Statement',
      canAutoFix: true
    };
  }

  // =========================================================================
  // CASE 4: Unclosed Parentheses or Brackets -> SyntaxError: '(' was never closed
  // =========================================================================
  if (stderr.includes("was never closed") || stderr.includes("unexpected EOF while parsing") || (code.includes('(') && !code.includes(')'))) {
    // Attempt auto fix: append missing closing parenthesis
    const openCount = (code.match(/\(/g) || []).length;
    const closeCount = (code.match(/\)/g) || []).length;
    let fixedCode = code;
    if (openCount > closeCount) {
      fixedCode = code + ')'.repeat(openCount - closeCount);
    }

    return {
      errorType: "SyntaxError: Bracket ')' Band Nahi Kiya",
      lineNumber: lineNumber || lines.length,
      title: {
        roman_urdu: "Bracket '(' Shuru Kiya Lekin Band ')' Nahi Kiya!",
        english: "Parenthesis '(' Was Never Closed!",
        urdu: "بریکٹ بند کرنا بھول گئے!"
      },
      cause: {
        roman_urdu: 'Python mein jab bhi koi bracket "(" ya quotes shuru karein to aakhir mein usay band ")" karna lazmi hota hai. Bracket khula chhodne se program adhoora reh jata hai.',
        english: 'Every opening bracket "(" must have a matching closing bracket ")".',
        urdu: 'ہر کھلنے والے بریکٹ کو بند کرنا ضروری ہے۔'
      },
      fixInstruction: {
        roman_urdu: 'Line ke aakhir mein closing bracket ")" lagayein.',
        english: 'Add a closing parenthesis ")" at the end of the line.',
        urdu: 'لائن کے آخر میں بند بریکٹ لگائیں۔'
      },
      wrongExample: 'print("Assalam-o-Alaikum"  # ❌ Bracket missing',
      correctExample: 'print("Assalam-o-Alaikum") # ✅ Bracket band hai',
      suggestedFullCode: fixedCode !== code ? fixedCode : undefined,
      relatedLessonId: 'lesson-1-intro-print',
      relatedLessonTitle: 'Sabaq 1: Python Ka Taaruf & print()',
      canAutoFix: fixedCode !== code
    };
  }

  // =========================================================================
  // CASE 5: Unterminated string literal / Unclosed quotes -> SyntaxError
  // =========================================================================
  if (stderr.includes('unterminated string literal') || stderr.includes('EOL while scanning string literal')) {
    // Attempt auto fix: close the quote
    const fixedCode = code.split('\n').map(line => {
      const doubleQuotes = (line.match(/"/g) || []).length;
      if (doubleQuotes % 2 !== 0) return line + '"';
      const singleQuotes = (line.match(/'/g) || []).length;
      if (singleQuotes % 2 !== 0) return line + "'";
      return line;
    }).join('\n');

    return {
      errorType: 'SyntaxError: Quotes Band Nahi Kiye',
      lineNumber: lineNumber || 1,
      title: {
        roman_urdu: 'Quotation Marks (" ya \') Khula Chhod Diya!',
        english: 'Unterminated String Literal (Missing Closing Quote)!',
        urdu: 'کوٹس بند نہیں کیے گئے!'
      },
      cause: {
        roman_urdu: 'Aapne text ke shuru mein quote lagaya lekin aakhir mein band karna bhool gaye. String ke shuru aur aakhir dono taraf quote hona chahiye.',
        english: 'You started a string with a quote mark but forgot to close it before the line ended.',
        urdu: 'اسٹرنگ کا کوٹ کھلا رہ گیا ہے۔'
      },
      fixInstruction: {
        roman_urdu: 'Jumlay ke aakhir mein matching quotation mark (" ya \') lagayein.',
        english: 'Close the string literal with the same quote mark you opened it with.',
        urdu: 'آخر میں کوٹ بند کریں۔'
      },
      wrongExample: 'print("Hello Dunya)  # ❌ Aakhri quote missing',
      correctExample: 'print("Hello Dunya") # ✅ Dono taraf quotes',
      suggestedFullCode: fixedCode !== code ? fixedCode : undefined,
      relatedLessonId: 'lesson-1-intro-print',
      relatedLessonTitle: 'Sabaq 1: Python Ka Taaruf & print()',
      canAutoFix: fixedCode !== code
    };
  }

  // =========================================================================
  // CASE 6: Missing quotes around string in assignment -> NameError (e.g. name = Ali)
  // =========================================================================
  const nameErrorMatch = stderr.match(/name '(\w+)' is not defined/i);
  if (nameErrorMatch) {
    const undefinedName = nameErrorMatch[1];
    const unquotedRegex = new RegExp(`=\\s*${undefinedName}\\b`, 'g');
    let fixedCode = code;
    let isLikelyUnquotedString = false;

    if (unquotedRegex.test(code)) {
      fixedCode = code.replace(new RegExp(`=\\s*${undefinedName}\\b`, 'g'), `= "${undefinedName}"`);
      isLikelyUnquotedString = true;
    }

    return {
      errorType: `NameError: '${undefinedName}' Define Nahi Hai`,
      lineNumber: lineNumber || 1,
      highlightSnippet: undefinedName,
      title: {
        roman_urdu: `'${undefinedName}' Ka Matlab Python Ko Nahi Pata!`,
        english: `'${undefinedName}' is Not Defined!`,
        urdu: `'${undefinedName}' ڈیفائن نہیں ہے!`
      },
      cause: {
        roman_urdu: isLikelyUnquotedString
          ? `Aapne "${undefinedName}" ke ird-gird quotation marks ("...") nahi lagaye. Python isay koi variable samajh raha hai jo pehle se mojood nahi.`
          : `Python ko '${undefinedName}' ka matlab nahi mila. Kya aapne spelling theek likhi hai ya isay pehle define kiya tha?`,
        english: isLikelyUnquotedString
          ? `Text must be wrapped in quotation marks ("..."). Python treats unquoted words as variables.`
          : `'${undefinedName}' was used before being assigned or has a typo.`,
        urdu: `متن کو ہمیشہ کوٹس میں لکھا جاتا ہے۔`
      },
      fixInstruction: {
        roman_urdu: isLikelyUnquotedString
          ? `Text ko double quotes mein likhein: "${undefinedName}"`
          : `Check karein ke kya variable ka naam pehle declare kiya gaya hai aur spelling sahi hai.`,
        english: isLikelyUnquotedString
          ? `Wrap the word in quotation marks: "${undefinedName}"`
          : `Ensure the variable is initialized before use and check spelling.`,
        urdu: `الفاظ کو کوٹس میں لکھیں۔`
      },
      wrongExample: isLikelyUnquotedString ? `Naam = ${undefinedName}  # ❌ Quotes nahi hain` : `${undefinedName} + 10  # ❌ Pehle define nahi kiya`,
      correctExample: isLikelyUnquotedString ? `Naam = "${undefinedName}"  # ✅ Quotes lagayein` : `${undefinedName} = 5\n${undefinedName} + 10  # ✅ Pehle value dein`,
      suggestedFullCode: isLikelyUnquotedString ? fixedCode : undefined,
      relatedLessonId: isLikelyUnquotedString ? 'lesson-2-variables-types' : 'lesson-12-error-handling',
      relatedLessonTitle: isLikelyUnquotedString ? 'Sabaq 2: Variables & Data Types' : 'Sabaq 12: Errors & Exceptions',
      canAutoFix: isLikelyUnquotedString
    };
  }

  // =========================================================================
  // CASE 7: Missing Colon in if/for/def/while/class -> SyntaxError
  // =========================================================================
  if (stderr.includes('SyntaxError') && (stderr.includes("expected ':'") || /^\s*(if|elif|else|for|while|def|class)\b.*[^:]\s*$/m.test(code))) {
    const fixedCode = code.split('\n').map(line => {
      if (/^\s*(if|elif|else|for|while|def|class)\b/.test(line) && !line.trim().endsWith(':') && !line.trim().endsWith('\\')) {
        return line + ':';
      }
      return line;
    }).join('\n');

    return {
      errorType: 'SyntaxError: Colon (:) Missing Hai',
      lineNumber: lineNumber || 1,
      title: {
        roman_urdu: 'Condition Ya Loop Ke Aakhir Mein Colon (:) Lagana Bhool Gaye!',
        english: 'Missing Colon (:) at End of Statement!',
        urdu: 'کولن (:) لگانا ضروری ہے!'
      },
      cause: {
        roman_urdu: 'Python mein if, for, while, def aur class statements ke aakhir mein hamesha colon ":" lagaya jata hai taake Python ko pata chalay ke iske baad ka block shuru ho raha hai.',
        english: 'Compound statements (if, for, while, def, class) must end with a colon (:).',
        urdu: 'اسٹیٹمنٹ کے آخر میں کولن لگانا لازمی ہے۔'
      },
      fixInstruction: {
        roman_urdu: 'Line ke aakhir mein do nuqtay (colon ":") lagayein.',
        english: 'Add a colon (:) at the end of the line.',
        urdu: 'لائن کے آخر میں کولن لگائیں۔'
      },
      wrongExample: 'if age > 18  # ❌ Missing colon',
      correctExample: 'if age > 18: # ✅ Colon lazmi hai',
      suggestedFullCode: fixedCode !== code ? fixedCode : undefined,
      relatedLessonId: 'lesson-4-conditionals-if-else',
      relatedLessonTitle: 'Sabaq 4: Conditionals (if, elif, else)',
      canAutoFix: fixedCode !== code
    };
  }

  // =========================================================================
  // CASE 8: IndentationError -> Expected an indented block
  // =========================================================================
  if (stderr.includes('IndentationError')) {
    return {
      errorType: 'IndentationError: Spacing / Margins Ki Ghalti',
      lineNumber: lineNumber || 1,
      title: {
        roman_urdu: 'Code Ki Alignment (Indentation / 4 Spaces) Kharab Hai!',
        english: 'Indentation Error (Improper Spacing)!',
        urdu: 'انڈینٹیشن (اسپیسنگ) کی خرابی!'
      },
      cause: {
        roman_urdu: 'Python mein doosri zabanon ki tarah curly braces "{}" nahi hotay. Python blocks ko pehchanne ke liye 4 spaces (ya Tab) ki alignment use karta hai. If ya For loop ke andar wala code 4 spaces aagay hona chahiye.',
        english: 'Python uses 4 spaces of indentation instead of curly braces to denote code blocks.',
        urdu: 'پائتھن میں بلاکس کے لیے 4 اسپیسز ضروری ہیں۔'
      },
      fixInstruction: {
        roman_urdu: 'Colon ":" ke baad wali line ko 4 spaces (ya aik baar Tab button) daba kar aagay karein.',
        english: 'Indent the code lines inside the block with 4 spaces or one Tab key press.',
        urdu: 'کوڈ کو چار اسپیس آگے کریں۔'
      },
      wrongExample: 'if age > 18:\nprint("Adult")  # ❌ Block aagay nahi hai',
      correctExample: 'if age > 18:\n    print("Adult")  # ✅ 4 spaces aagay',
      relatedLessonId: 'lesson-4-conditionals-if-else',
      relatedLessonTitle: 'Sabaq 4: Conditionals & Indentation Rules',
      canAutoFix: false
    };
  }

  // =========================================================================
  // CASE 9: Single '=' instead of '==' in if statement -> SyntaxError
  // =========================================================================
  if (stderr.includes('SyntaxError') && /if\s+[\w\s]+=[^=]/.test(code)) {
    const fixedCode = code.replace(/if\s+([\w\s]+)=([^=])/g, 'if $1==$2');
    return {
      errorType: "SyntaxError: '=' Ki Jagah '==' Chahiye",
      lineNumber: lineNumber || 1,
      title: {
        roman_urdu: "If Condition Mein Barabari Check Karne Ke Liye '==' Lagayein!",
        english: "Use '==' for Comparison, Not '='!",
        urdu: 'موازنے کے لیے ڈبل برابر (==) استعمال کریں!'
      },
      cause: {
        roman_urdu: 'Single equal "=" value store karne (assign) ke liye hota hai. Barabari check karne ke liye double equal "==" use hota hai.',
        english: 'Single "=" is assignment. Comparison for equality requires double "==".',
        urdu: 'برابری جانچنے کے لیے ڈبل برابر استعمال ہوتا ہے۔'
      },
      fixInstruction: {
        roman_urdu: 'Single "=" ko badal kar double "==" likhein.',
        english: 'Change single "=" to double "==".',
        urdu: 'ڈبل برابر استعمال کریں۔'
      },
      wrongExample: 'if score = 100:  # ❌ SyntaxError',
      correctExample: 'if score == 100: # ✅ Comparison',
      suggestedFullCode: fixedCode !== code ? fixedCode : undefined,
      relatedLessonId: 'lesson-4-conditionals-if-else',
      relatedLessonTitle: 'Sabaq 4: Conditionals & Comparison Operators',
      canAutoFix: fixedCode !== code
    };
  }

  // =========================================================================
  // CASE 10: TypeError: can only concatenate str (not "int") to str
  // =========================================================================
  if (stderr.includes('TypeError') && (stderr.includes('can only concatenate str') || stderr.includes('unsupported operand type(s) for +:'))) {
    return {
      errorType: 'TypeError: Text Aur Number Direct Jama Nahi Ho Sakte',
      lineNumber: lineNumber || 1,
      title: {
        roman_urdu: 'Text (String) Aur Number Ko "+" Se Direct Joda Nahi Ja Sakta!',
        english: 'Cannot Concatenate String and Integer Directly!',
        urdu: 'ٹیکسٹ اور نمبر براہ راست جمع نہیں ہو سکتے!'
      },
      cause: {
        roman_urdu: 'Python mein aap "Age: " + 25 direct nahi likh sakte kyunke aik text hai aur doosra number. Dono alag data types hain.',
        english: 'Python does not automatically convert numbers to strings when using the + operator.',
        urdu: 'پائتھن اسٹرنگ اور نمبر کو خود بخود نہیں جوڑتا۔'
      },
      fixInstruction: {
        roman_urdu: 'F-string use karein: `print(f"Age: {25}")` ya number ko `str(25)` mein convert karein.',
        english: 'Use f-strings: `print(f"Age: {25}")` or wrap with `str(...)`.',
        urdu: 'ایف اسٹرنگ یا str فنکشن استعمال کریں۔'
      },
      wrongExample: 'print("Roll No: " + 125)  # ❌ TypeError',
      correctExample: 'print(f"Roll No: {125}")  # ✅ F-String (Behtareen)',
      relatedLessonId: 'lesson-9-strings-formatting',
      relatedLessonTitle: 'Sabaq 9: Strings & F-String Formatting',
      canAutoFix: false
    };
  }

  // =========================================================================
  // CASE 11: ZeroDivisionError
  // =========================================================================
  if (stderr.includes('ZeroDivisionError')) {
    return {
      errorType: 'ZeroDivisionError: Zero Se Taqseem',
      lineNumber: lineNumber || 1,
      title: {
        roman_urdu: 'Kisi Bhi Number Ko 0 Se Divide Nahi Kiya Ja Sakta!',
        english: 'Division by Zero is Mathematically Impossible!',
        urdu: 'کسی عدد کو صفر سے تقسیم نہیں کیا جا سکتا!'
      },
      cause: {
        roman_urdu: 'Riazi (Math) mein zero se taqseem karna na-mumkin hai, is liye Python error deta hai.',
        english: 'Division by zero is undefined in mathematics.',
        urdu: 'صفر سے تقسیم ممکن نہیں۔'
      },
      fixInstruction: {
        roman_urdu: 'Taqseem karne se pehle check karein ke denominator 0 na ho.',
        english: 'Ensure the denominator is non-zero before dividing.',
        urdu: 'تقسیم کرنے سے پہلے صفر کی جانچ کریں۔'
      },
      wrongExample: 'result = 100 / 0  # ❌ ZeroDivisionError',
      correctExample: 'if divisor != 0:\n    result = 100 / divisor',
      relatedLessonId: 'lesson-3-operators-math',
      relatedLessonTitle: 'Sabaq 3: Operators & Math',
      canAutoFix: false
    };
  }

  // =========================================================================
  // GENERAL SYNTAX ERROR FALLBACK (Always with accurate line number)
  // =========================================================================
  if (stderr.includes('SyntaxError')) {
    const validLine = (lineNumber && lineNumber <= lines.length) ? lineNumber : 1;
    return {
      errorType: 'SyntaxError: Python Ka Qawaid (Grammar) Theek Nahi',
      lineNumber: validLine,
      title: {
        roman_urdu: `Line ${validLine} Par Likhne Ke Usool (Syntax) Mein Ghalti Hai!`,
        english: `Syntax Error on Line ${validLine}!`,
        urdu: `لائن ${validLine} پر سینٹیکس کی خرابی!`
      },
      cause: {
        roman_urdu: `Python aapke likhe hue code ko samajh nahi pa raha. Line ${validLine} par quotes ("..."), brackets (), ya spelling mein koi ghalti mojood hai.`,
        english: `Python encountered an unexpected token at line ${validLine}. Check quotes, brackets, or commas.`,
        urdu: `کوڈ کے قواعد میں غلطی ہے۔`
      },
      fixInstruction: {
        roman_urdu: 'Check karein: 1) Kya text quotes ("...") mein hai? 2) Kya brackets band hain? 3) Kya variable ke naam mein space to nahi?',
        english: 'Check: 1) Are text strings in quotes? 2) Are brackets closed? 3) No spaces in variable names.',
        urdu: 'کوٹس اور بریکٹس کی تصدیق کریں۔'
      },
      wrongExample: lines[validLine - 1] ? `${lines[validLine - 1]}  # ❌ SyntaxError` : undefined,
      relatedLessonId: 'lesson-1-intro-print',
      relatedLessonTitle: 'Sabaq 1: Python Ka Taaruf & Pehla Program',
      canAutoFix: false
    };
  }

  return null;
}
