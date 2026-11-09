import React, { useState } from 'react';
import { UserProgress, Language } from '../types';
import { Download, Copy, Check, BookOpen, Code, Terminal, Sparkles } from 'lucide-react';

interface NotebookViewProps {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  language: Language;
}

export const NotebookView: React.FC<NotebookViewProps> = ({
  progress,
  onUpdateProgress,
  language
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'notes' | 'cheatsheet'>('notes');
  const [copied, setCopied] = useState<boolean>(false);

  const notesContent = progress.notes['general'] || '';

  const handleNotesChange = (text: string) => {
    onUpdateProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        'general': text
      }
    }));
  };

  const handleDownloadNotes = () => {
    const blob = new Blob([notesContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `python_notes_${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleCopyNotes = () => {
    navigator.clipboard.writeText(notesContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <span>Python Notebook & Cheatsheet</span>
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            {language === 'roman_urdu' && "Apne personal notes likhein aur Python ke ahem tareen formulas dekhein. Sab auto-save hota hai."}
            {language === 'english' && "Personal auto-saved notebook and quick Python reference cheatsheet."}
            {language === 'urdu' && "اپنے ذاتی نوٹس محفوظ کریں اور پائتھن کے اہم فارمولے دیکھیں۔"}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs shadow-xs">
          <button
            onClick={() => setActiveSubTab('notes')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              activeSubTab === 'notes' ? 'bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold border border-amber-300/50 dark:border-transparent' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            My Notes
          </button>
          <button
            onClick={() => setActiveSubTab('cheatsheet')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              activeSubTab === 'cheatsheet' ? 'bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold border border-amber-300/50 dark:border-transparent' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Python Cheatsheet
          </button>
        </div>
      </div>

      {activeSubTab === 'notes' ? (
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col min-h-[500px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
            <span className="font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Auto-saved (Har harf mehfooz ho raha hai)
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyNotes}
                className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer shadow-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handleDownloadNotes}
                className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Notes (.md)</span>
              </button>
            </div>
          </div>

          <textarea
            value={notesContent}
            onChange={(e) => handleNotesChange(e.target.value)}
            placeholder="# Meri Python Notes&#10;&#10;Yahan apne tamam ahem points, tips aur code snippets likhein..."
            className="flex-1 w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 p-4 outline-none resize-none min-h-[420px] font-mono-code text-sm leading-relaxed border border-slate-200 dark:border-slate-800 rounded-lg mt-3"
          />
        </div>
      ) : (
        /* Python Cheatsheet View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Print & Types */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Print & Variables</span>
            </h3>
            <pre className="font-mono-code text-xs text-sky-300 bg-slate-900 p-3 rounded-lg leading-relaxed overflow-x-auto shadow-inner">
{`# Output
print("Text", 123)
print(f"Name: {name}")

# Data types
x = 10        # int
y = 3.14      # float
s = "Hello"   # str
b = True      # bool (True/False)`}
            </pre>
          </div>

          {/* Card 2: Operators */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Math & Comparisons</span>
            </h3>
            <pre className="font-mono-code text-xs text-sky-300 bg-slate-900 p-3 rounded-lg leading-relaxed overflow-x-auto shadow-inner">
{`# Math operators
+   -   *   /    # Basic math
//               # Floor division
%                # Modulus (Remainder)
**               # Power (Exponent)

# Comparisons
==  !=           # Equal / Not equal
>   <   >=  <=   # Greater/Less`}
            </pre>
          </div>

          {/* Card 3: Conditions & Loops */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Conditions & Loops</span>
            </h3>
            <pre className="font-mono-code text-xs text-sky-300 bg-slate-900 p-3 rounded-lg leading-relaxed overflow-x-auto shadow-inner">
{`# Conditionals
if condition:
    # 4 spaces indent
elif other_condition:
    pass
else:
    pass

# Loops
for i in range(1, 6):
    print(i) # 1 to 5

while condition:
    break # exit loop`}
            </pre>
          </div>

          {/* Card 4: Lists & Tuples */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>List Methods</span>
            </h3>
            <pre className="font-mono-code text-xs text-sky-300 bg-slate-900 p-3 rounded-lg leading-relaxed overflow-x-auto shadow-inner">
{`lst = [10, 20, 30]
lst.append(40)     # Add item
lst.remove(20)     # Remove item
lst[0]             # First item
lst[-1]            # Last item
len(lst)           # Total count
sum(lst)           # Total sum
lst[::-1]          # Reverse list`}
            </pre>
          </div>

          {/* Card 5: Dictionaries */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Dictionaries</span>
            </h3>
            <pre className="font-mono-code text-xs text-sky-300 bg-slate-900 p-3 rounded-lg leading-relaxed overflow-x-auto shadow-inner">
{`person = {
    "name": "Ali",
    "age": 22
}
person["name"]          # Access
person.get("key", 0)    # Safe get
person["city"] = "LHR"  # Add/Update
for k, v in person.items():
    print(k, v)`}
            </pre>
          </div>

          {/* Card 6: Functions */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Functions (def)</span>
            </h3>
            <pre className="font-mono-code text-xs text-sky-300 bg-slate-900 p-3 rounded-lg leading-relaxed overflow-x-auto shadow-inner">
{`def calculate_bill(total, tax=0.15):
    final_amt = total + (total * tax)
    return round(final_amt, 2)

ans = calculate_bill(1000)
print(ans)`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
