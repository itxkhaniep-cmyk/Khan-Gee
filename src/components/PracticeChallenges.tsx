import React, { useState, useEffect } from 'react';
import { Challenge, TestCase, UserProgress, Language } from '../types';
import { challengesData } from '../data/challengesData';
import { pythonRunner } from '../services/pythonRunner';
import { 
  CheckCircle2, 
  XCircle, 
  Play, 
  RotateCcw, 
  HelpCircle, 
  Eye, 
  Award, 
  ChevronRight,
  Filter,
  Check
} from 'lucide-react';
import { diagnosePythonError } from '../services/errorDiagnostics';
import { SmartErrorDoctorCard } from './SmartErrorDoctorCard';

interface PracticeChallengesProps {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  language: Language;
  initialChallengeId?: string;
  onNavigateToLesson?: (lessonId: string) => void;
}

interface TestRunResult {
  testCaseId: string;
  passed: boolean;
  actualOutput: string;
  expectedOutput: string;
  error?: string;
}

export const PracticeChallenges: React.FC<PracticeChallengesProps> = ({
  progress,
  onUpdateProgress,
  language,
  initialChallengeId,
  onNavigateToLesson
}) => {
  const [selectedChallengeId, setSelectedChallengeId] = useState<string>(
    initialChallengeId || challengesData[0]?.id || 'challenge-1-hello-world'
  );
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [filterLevel, setFilterLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [userCode, setUserCode] = useState<string>('');
  const [isRunningTests, setIsRunningTests] = useState<boolean>(false);
  const [testResults, setTestResults] = useState<TestRunResult[] | null>(null);
  const [showHintIndex, setShowHintIndex] = useState<number>(-1);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const currentChallenge = challengesData.find(c => c.id === selectedChallengeId) || challengesData[0];
  const isSolved = progress.completedChallengeIds.includes(currentChallenge.id);

  // When selected challenge changes, load saved user code or starter code
  useEffect(() => {
    const saved = progress.challengeSubmissions[selectedChallengeId];
    if (saved?.code) {
      setUserCode(saved.code);
    } else {
      setUserCode(currentChallenge.starterCode);
    }
    setTestResults(null);
    setShowHintIndex(-1);
    setShowSolution(false);
  }, [selectedChallengeId, currentChallenge]);

  const filteredChallenges = challengesData.filter(c => {
    if (filterLevel !== 'all' && c.level && c.level !== filterLevel) return false;
    if (filterDifficulty === 'solved') return progress.completedChallengeIds.includes(c.id);
    if (filterDifficulty === 'aasan') return c.difficulty.includes('Aasan');
    if (filterDifficulty === 'medium') return c.difficulty.includes('Darmiyana');
    if (filterDifficulty === 'mushkil') return c.difficulty.includes('Mushkil');
    return true;
  });

  // Automated test runner
  const handleRunTests = async () => {
    setIsRunningTests(true);
    setTestResults(null);

    const results: TestRunResult[] = [];
    let allPassed = true;

    for (const tc of currentChallenge.testCases) {
      try {
        // Prepare execution: append a test call if needed
        let testScript = userCode;

        // If challenge uses functions (e.g. celsius_to_fahrenheit(0)) and tc.input has arguments
        if (currentChallenge.id === 'challenge-2-temperature-converter') {
          testScript += `\nprint(celsius_to_fahrenheit(${tc.input}))`;
        } else if (currentChallenge.id === 'challenge-3-even-odd') {
          testScript += `\nprint(check_even_odd(${tc.input}))`;
        } else if (currentChallenge.id === 'challenge-4-grade-calculator') {
          testScript += `\nprint(get_grade(${tc.input}))`;
        } else if (currentChallenge.id === 'challenge-5-sum-numbers') {
          testScript += `\nprint(sum_up_to(${tc.input}))`;
        } else if (currentChallenge.id === 'challenge-6-list-analyzer') {
          testScript += `\nprint(find_average(${tc.input}))`;
        } else if (currentChallenge.id === 'challenge-7-word-counter') {
          testScript += `\nprint(count_words(${tc.input}))`;
        } else if (currentChallenge.id === 'challenge-8-palindrome-checker') {
          testScript += `\nprint(is_palindrome(${tc.input}))`;
        } else if (currentChallenge.id === 'challenge-9-vowel-counter') {
          testScript += `\nprint(count_vowels(${tc.input}))`;
        } else if (currentChallenge.id === 'challenge-10-fibonacci') {
          testScript += `\nprint(generate_fibonacci(${tc.input}))`;
        }

        const runRes = await pythonRunner.runCode(testScript, tc.input);

        // Normalize output for clean comparison
        const stdoutLines = runRes.stdout.trim().split('\n');
        const lastLine = stdoutLines[stdoutLines.length - 1]?.trim() || '';
        const expected = tc.expectedOutput.trim();

        // Check if output matches expected (or contains expected)
        const passed = !runRes.isError && (lastLine === expected || runRes.stdout.trim() === expected);

        if (!passed) allPassed = false;

        results.push({
          testCaseId: tc.id,
          passed,
          actualOutput: runRes.isError ? (runRes.stderr || 'Execution Error') : lastLine,
          expectedOutput: expected,
          error: runRes.isError ? runRes.stderr : undefined
        });
      } catch (err: any) {
        allPassed = false;
        results.push({
          testCaseId: tc.id,
          passed: false,
          actualOutput: 'Crash',
          expectedOutput: tc.expectedOutput,
          error: err.message
        });
      }
    }

    setTestResults(results);
    setIsRunningTests(false);

    // If all passed and not already solved, reward XP & record submission
    if (allPassed) {
      onUpdateProgress(prev => {
        const alreadySolved = prev.completedChallengeIds.includes(currentChallenge.id);
        const newCompleted = alreadySolved 
          ? prev.completedChallengeIds 
          : [...prev.completedChallengeIds, currentChallenge.id];
        
        const xpBonus = alreadySolved ? 0 : currentChallenge.xpReward;

        return {
          ...prev,
          completedChallengeIds: newCompleted,
          totalXp: prev.totalXp + xpBonus,
          challengeSubmissions: {
            ...prev.challengeSubmissions,
            [currentChallenge.id]: {
              code: userCode,
              passed: true,
              completedAt: new Date().toISOString()
            }
          }
        };
      });
    }
  };

  const handleResetCode = () => {
    setUserCode(currentChallenge.starterCode);
    setTestResults(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Banner */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <span>Python Practice Challenges (Mushaq)</span>
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            {language === 'roman_urdu' && "Code likhein aur automated test cases run kar ke check karein. Sub progress mehfooz hai."}
            {language === 'english' && "Solve real coding challenges with automated unit tests and instant grading."}
            {language === 'urdu' && "کوڈ لکھیں اور خودکار ٹیسٹ رن کر کے اپنا حل جانچیں۔"}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs shadow-xs">
          <button
            onClick={() => setFilterDifficulty('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              filterDifficulty === 'all' ? 'bg-amber-500/15 text-amber-800 dark:text-white font-bold border border-amber-300/50 dark:border-transparent' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All ({challengesData.length})
          </button>
          <button
            onClick={() => setFilterDifficulty('aasan')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              filterDifficulty === 'aasan' ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Aasan
          </button>
          <button
            onClick={() => setFilterDifficulty('medium')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              filterDifficulty === 'medium' ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => setFilterDifficulty('mushkil')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              filterDifficulty === 'mushkil' ? 'bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Mushkil
          </button>
          <button
            onClick={() => setFilterDifficulty('solved')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              filterDifficulty === 'solved' ? 'bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-300 font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Solved ({progress.completedChallengeIds.length})
          </button>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Challenge Selector List (4 cols) */}
        <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          {filteredChallenges.map((c) => {
            const completed = progress.completedChallengeIds.includes(c.id);
            const isCurrent = c.id === selectedChallengeId;

            return (
              <div
                key={c.id}
                onClick={() => setSelectedChallengeId(c.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all select-none ${
                  isCurrent
                    ? 'bg-amber-500/10 dark:bg-slate-800/95 border-amber-400 dark:border-amber-500/70 shadow-sm ring-1 ring-amber-300/40'
                    : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-semibold">
                        {c.category}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className={`text-[11px] font-bold ${
                        c.difficulty.includes('Aasan') ? 'text-emerald-600 dark:text-emerald-400' :
                        c.difficulty.includes('Darmiyana') ? 'text-amber-600 dark:text-amber-400' : 'text-purple-600 dark:text-purple-400'
                      }`}>
                        {c.difficulty.split(' ')[0]}
                      </span>
                    </div>

                    <h3 className={`text-sm font-semibold leading-snug ${
                      isCurrent ? 'text-amber-800 dark:text-amber-300 font-bold' : 'text-slate-900 dark:text-slate-200'
                    }`}>
                      {c.title[language] || c.title.roman_urdu}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {completed ? (
                      <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-400 dark:border-emerald-500/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400" title="Solved!">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                        +{c.xpReward} XP
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Challenge Workspace (8 cols) */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          {/* Challenge Description Card */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                  {currentChallenge.category}
                </span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {currentChallenge.title[language] || currentChallenge.title.roman_urdu}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber-100 dark:bg-slate-800 rounded-md text-xs font-mono font-bold text-amber-800 dark:text-slate-300 border border-amber-300 dark:border-slate-700">
                  +{currentChallenge.xpReward} XP
                </span>
                {isSolved && (
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-700/60 rounded-md text-xs font-bold text-emerald-800 dark:text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Solved
                  </span>
                )}
              </div>
            </div>

            {/* Description Text */}
            <p className="text-sm text-slate-700 dark:text-slate-200 mt-3 leading-relaxed">
              {currentChallenge.description[language] || currentChallenge.description.roman_urdu}
            </p>

            {/* Step-by-Step Instructions */}
            <div className="mt-4 bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-lg border border-slate-200 dark:border-slate-800/80">
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Instructions (Hidayat):
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                {(currentChallenge.instructions[language] || currentChallenge.instructions.roman_urdu).map((ins, i) => (
                  <li key={i} className="leading-relaxed">{ins}</li>
                ))}
              </ul>
            </div>

            {/* Hints & Solution Toggle bar */}
            <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs">
              <button
                onClick={() => setShowHintIndex(prev => prev >= 0 ? -1 : 0)}
                className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-bold transition-colors cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showHintIndex >= 0 ? 'Hide Hint' : 'Need a Hint? (Madad)'}</span>
              </button>

              <button
                onClick={() => setShowSolution(prev => !prev)}
                className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-pointer font-medium"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{showSolution ? 'Hide Solution' : 'View Solution (Hall)'}</span>
              </button>
            </div>

            {/* Hint Box */}
            {showHintIndex >= 0 && (
              <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-lg text-xs text-amber-900 dark:text-amber-200 font-medium">
                <span className="font-bold block mb-1">💡 Ishara (Hint):</span>
                <p>
                  {(currentChallenge.hints[language] || currentChallenge.hints.roman_urdu)[0]}
                </p>
              </div>
            )}

            {/* Solution Box */}
            {showSolution && (
              <div className="mt-3 p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-100">
                <span className="text-slate-300 font-semibold block mb-1">✅ Sahi Solution Code:</span>
                <pre className="font-mono-code text-emerald-400 bg-slate-950 p-2.5 rounded overflow-x-auto leading-relaxed">
                  {currentChallenge.solutionCode}
                </pre>
              </div>
            )}
          </div>

          {/* Code Editor for Challenge */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="font-mono text-slate-300 ml-2">solution.py</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetCode}
                  className="flex items-center gap-1 text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Reset to starter code"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Code</span>
                </button>

                <button
                  onClick={handleRunTests}
                  disabled={isRunningTests}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer ${
                    isRunningTests 
                      ? 'bg-amber-600 text-white cursor-wait' 
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95'
                  }`}
                >
                  <Play className={`w-3.5 h-3.5 fill-current ${isRunningTests ? 'animate-spin' : ''}`} />
                  <span>{isRunningTests ? 'Testing...' : 'Test Run Karein (Run Tests)'}</span>
                </button>
              </div>
            </div>

            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              spellCheck={false}
              autoCapitalize="off"
              className="w-full bg-transparent text-slate-100 p-4 outline-none resize-none min-h-[220px] font-mono-code text-sm leading-6 selection:bg-slate-700"
            />
          </div>

          {/* Test Results Section */}
          {testResults && (
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Automated Test Results</span>
                </h3>
                {testResults.every(r => r.passed) ? (
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-600/60 rounded-full text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Mubarak Ho! Tamam Tests Pass Ho Gaye! 🎉 (+{currentChallenge.xpReward} XP)
                  </span>
                ) : (
                  <span className="px-3 py-1 bg-red-100 dark:bg-red-950 border border-red-300 dark:border-red-800/60 rounded-full text-xs font-semibold text-red-800 dark:text-red-300 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
                    Kuch Tests Fail Huay. Dobara koshish karein!
                  </span>
                )}
              </div>

              {/* Individual Test Cases Cards */}
              <div className="mt-3 space-y-2">
                {testResults.map((tr, idx) => (
                  <div
                    key={tr.testCaseId}
                    className={`p-3 rounded-lg border text-xs font-mono-code ${
                      tr.passed 
                        ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 text-slate-800 dark:text-slate-200' 
                        : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/40 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-slate-800 dark:text-slate-300">
                        Test Case #{idx + 1}: {currentChallenge.testCases[idx]?.description}
                      </span>
                      <span className={`flex items-center gap-1 font-bold ${
                        tr.passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {tr.passed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {tr.passed ? 'PASSED' : 'FAILED'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] mt-2 pt-2 border-t border-slate-200/80 dark:border-slate-800/60">
                      <div>
                        <span className="text-slate-500 block">Expected Output:</span>
                        <span className="text-emerald-700 dark:text-emerald-300 bg-emerald-100/60 dark:bg-slate-950/80 px-2 py-0.5 rounded inline-block mt-0.5">
                          {tr.expectedOutput}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Aapka Output:</span>
                        <span className={`px-2 py-0.5 rounded inline-block mt-0.5 ${
                          tr.passed ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-100/60 dark:bg-slate-950/80' : 'text-rose-700 dark:text-red-300 bg-rose-100/60 dark:bg-red-950/80'
                        }`}>
                          {tr.actualOutput || '(No output)'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ghalti Doctor Diagnostics */}
              {(() => {
                const firstErrorTest = testResults.find(r => !r.passed && r.error);
                if (!firstErrorTest || !firstErrorTest.error) return null;
                const diag = diagnosePythonError(userCode, firstErrorTest.error);
                if (!diag) return null;
                return (
                  <SmartErrorDoctorCard
                    diagnosis={diag}
                    language={language}
                    onApplyFix={(fixedCode) => setUserCode(fixedCode)}
                    onNavigateToLesson={(lessonId) => {
                      if (onNavigateToLesson) onNavigateToLesson(lessonId);
                    }}
                  />
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
