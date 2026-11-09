import React, { useState, useEffect } from 'react';
import { UserProgress, Language } from '../types';
import { allDaysExamsList, DayExamTrack } from '../data/dailyExamsData';
import { Day1ExamQuestion } from '../data/day1ExamsData';
import { pythonRunner } from '../services/pythonRunner';
import { diagnosePythonError } from '../services/errorDiagnostics';
import { SmartErrorDoctorCard } from './SmartErrorDoctorCard';
import { 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Play, 
  Award, 
  Printer, 
  RotateCcw, 
  Sparkles, 
  AlertCircle, 
  ChevronRight, 
  Eye, 
  HelpCircle, 
  X, 
  Clock, 
  Check, 
  BookOpen, 
  Share2,
  Bot,
  Calendar,
  Layers
} from 'lucide-react';

interface Day1ExamHallProps {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  language: Language;
  onNavigateToRoadmap?: () => void;
  onNavigateToLessons?: () => void;
  onAskAi?: (context: string, initialPrompt: string) => void;
  initialDay?: number;
}

interface EvaluationResult {
  passed: boolean;
  marksObtained: number;
  stdout: string;
  stderr: string;
  criteriaResults: {
    description: string;
    passed: boolean;
  }[];
}

export const Day1ExamHall: React.FC<Day1ExamHallProps> = ({
  progress,
  onUpdateProgress,
  language,
  onNavigateToRoadmap,
  onNavigateToLessons,
  onAskAi,
  initialDay = 1
}) => {
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(initialDay);
  const currentDayTrack: DayExamTrack = allDaysExamsList.find(d => d.dayNumber === selectedDayNumber) || allDaysExamsList[0];
  const questionsList = currentDayTrack.questions;

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const currentExam: Day1ExamQuestion = questionsList[selectedQuestionIndex] || questionsList[0];

  // User code per question
  const savedSubmissions = progress.day1ExamSubmissions || {};
  const [userCode, setUserCode] = useState<string>(
    savedSubmissions[currentExam?.id]?.code || currentExam?.starterCode || ''
  );

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [showPaperModal, setShowPaperModal] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('Python Student');

  // Sync when initialDay prop changes
  useEffect(() => {
    if (initialDay && initialDay !== selectedDayNumber) {
      setSelectedDayNumber(initialDay);
      setSelectedQuestionIndex(0);
    }
  }, [initialDay]);

  // Update editor when switching day or question
  useEffect(() => {
    if (!currentExam) return;
    const saved = progress.day1ExamSubmissions?.[currentExam.id];
    setUserCode(saved ? saved.code : currentExam.starterCode);
    setEvaluation(null);
    setShowHint(false);
    setShowSolution(false);
  }, [selectedQuestionIndex, selectedDayNumber, currentExam?.id]);

  // Overall Exam calculations for current selected day
  const submissions = progress.day1ExamSubmissions || {};
  const passedQuestions = questionsList.filter(q => submissions[q.id]?.passed);
  const totalScore = passedQuestions.reduce((sum, q) => sum + (submissions[q.id]?.marksObtained || 10), 0);
  const isExamPassed = totalScore >= currentDayTrack.passingMarks;

  // Run and evaluate code against test criteria
  const handleRunAndEvaluate = async () => {
    if (!currentExam) return;
    setIsRunning(true);
    setEvaluation(null);

    try {
      const result = await pythonRunner.runCode(userCode);
      const outputText = result.stdout || '';

      // Test each pattern criteria
      const criteriaResults = currentExam.expectedPatterns.map(patternObj => {
        let isMatch = false;
        if (typeof patternObj.pattern === 'string') {
          isMatch = outputText.toLowerCase().includes(patternObj.pattern.toLowerCase());
        } else {
          isMatch = patternObj.pattern.test(outputText);
        }
        return {
          description: patternObj.description,
          passed: isMatch
        };
      });

      const allCriteriaPassed = criteriaResults.every(c => c.passed) && !result.isError;
      const marksObtained = allCriteriaPassed ? currentExam.marks : 0;

      const evalResult: EvaluationResult = {
        passed: allCriteriaPassed,
        marksObtained,
        stdout: result.stdout,
        stderr: result.stderr,
        criteriaResults
      };

      setEvaluation(evalResult);

      // Save submission & award XP
      onUpdateProgress(prev => {
        const prevSubs = prev.day1ExamSubmissions || {};
        const wasAlreadyPassed = prevSubs[currentExam.id]?.passed;
        const newSubs = {
          ...prevSubs,
          [currentExam.id]: {
            code: userCode,
            passed: allCriteriaPassed,
            marksObtained,
            completedAt: new Date().toISOString()
          }
        };

        const xpReward = allCriteriaPassed && !wasAlreadyPassed ? 20 : 0;

        return {
          ...prev,
          day1ExamSubmissions: newSubs,
          totalXp: prev.totalXp + xpReward
        };
      });
    } catch (err: any) {
      setEvaluation({
        passed: false,
        marksObtained: 0,
        stdout: '',
        stderr: err.message || 'Execution error',
        criteriaResults: currentExam.expectedPatterns.map(c => ({ description: c.description, passed: false }))
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleResetStarter = () => {
    if (currentExam) {
      setUserCode(currentExam.starterCode);
      setEvaluation(null);
    }
  };

  const handleAskAiAboutExam = () => {
    if (!onAskAi || !currentExam) return;
    const context = `Day ${selectedDayNumber} Exam Q${currentExam.questionNumber}: ${currentExam.title.roman_urdu}`;
    const prompt = `Main Day ${selectedDayNumber} ka Exam Sawal Q${currentExam.questionNumber} hal kar raha hoon:
Sawal: "${currentExam.writtenSheet.scenario.roman_urdu}"
Mera mojooda code yeh hai:
\`\`\`python
${userCode}
\`\`\`
Mujhe samjhayein ke is sawal ko Python se kaise step-by-step solve karna hai aur agar koi ghalti hai to wazahat karein.`;
    onAskAi(context, prompt);
  };

  if (!currentExam) {
    return <div className="p-8 text-center text-slate-500">Exams load ho rahe hain...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Banner: Exam Hall Status */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-800/40 rounded-2xl p-6 text-white shadow-xl mb-6 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30">
                OFFICIAL PRACTICAL EXAMS
              </span>
              <span className="text-xs text-slate-300">
                {currentDayTrack.title[language] || currentDayTrack.title.roman_urdu}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2.5">
              <span>{currentDayTrack.title.roman_urdu} - 10 Written Exam Sheets</span>
              <Award className="w-7 h-7 text-amber-400" />
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {currentDayTrack.topic[language] || currentDayTrack.topic.roman_urdu}
            </p>
          </div>

          {/* Marks, Print Paper & AI Assistance Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-2 text-center shrink-0">
              <span className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold block">
                Day {selectedDayNumber} Marks
              </span>
              <span className="text-2xl font-extrabold text-amber-400 font-mono">
                {totalScore} <span className="text-xs text-slate-300">/ 100</span>
              </span>
              <span className="text-[10px] block text-emerald-400 font-medium">
                {passedQuestions.length} / 10 Passed
              </span>
            </div>

            <button
              onClick={() => setShowPaperModal(true)}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
              title="Poora Written Exam Paper dekhein aur print karein"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>Written Paper Sheet 📄</span>
            </button>

            {onAskAi && (
              <button
                onClick={handleAskAiAboutExam}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
                title="AI Ustad se sawal ki wazahat poochein"
              >
                <Bot className="w-4 h-4 text-white" />
                <span>AI Ustad Se Poochein 🤖</span>
              </button>
            )}
          </div>
        </div>

        {/* Passing Grade Bar */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-slate-300">Pass Shart: 60/100 Marks (6 Sawal Sahi)</span>
            <div className="w-32 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
              <div 
                className={`h-full transition-all duration-500 ${isExamPassed ? 'bg-emerald-400' : 'bg-amber-400'}`}
                style={{ width: `${Math.min(100, (totalScore / 100) * 100)}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isExamPassed ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                Mubarak ho! Aapne Day {selectedDayNumber} Exam Pass Kar Liya 🏆
              </span>
            ) : (
              <span className="text-amber-300/90 font-medium">
                Mazeed {Math.max(0, currentDayTrack.passingMarks - totalScore)} Marks chahiye pass hone ke liye
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Day Selector Tabs (Day 1, Day 2, Day 3) */}
      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1 shrink-0 mr-1">
          <Calendar className="w-4 h-4 text-amber-500" />
          <span>Din Chunein:</span>
        </span>
        {allDaysExamsList.map((dayTrack) => {
          const isSelected = dayTrack.dayNumber === selectedDayNumber;
          return (
            <button
              key={dayTrack.dayNumber}
              onClick={() => {
                setSelectedDayNumber(dayTrack.dayNumber);
                setSelectedQuestionIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md ring-2 ring-amber-400/50'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <span>Din {dayTrack.dayNumber}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
              }`}>
                10 Exams
              </span>
            </button>
          );
        })}
      </div>

      {/* 10-Question Selector Strip */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
            Day {selectedDayNumber} Exam Sawalaat (1 se 10):
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Har sawal = 10 Marks (Total: 100)
          </span>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {questionsList.map((exam, idx) => {
            const isPassed = submissions[exam.id]?.passed;
            const isCurrent = idx === selectedQuestionIndex;
            return (
              <button
                key={exam.id}
                onClick={() => setSelectedQuestionIndex(idx)}
                className={`py-2 px-1 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center cursor-pointer border ${
                  isCurrent
                    ? 'ring-2 ring-amber-500 bg-amber-500/15 border-amber-400 text-amber-800 dark:text-amber-300 shadow-sm'
                    : isPassed
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700/60 text-emerald-700 dark:text-emerald-300'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span>Q{exam.questionNumber}</span>
                  {isPassed && <CheckCircle2 className="w-3 h-3 text-emerald-500" />}
                </div>
                <span className="text-[10px] font-mono mt-0.5">
                  {isPassed ? '10/10' : '0/10'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split: Left = Written Sheet & Instructions, Right = Code & Evaluation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Written Sheet (Paper Brief) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-xs">
                  {currentExam.questionNumber}
                </span>
                <div>
                  <h2 className="font-bold text-slate-900 dark:text-white text-base">
                    {currentExam.title[language] || currentExam.title.roman_urdu}
                  </h2>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Category: {currentExam.category}
                  </span>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold border border-amber-300/40">
                10 Marks
              </span>
            </div>

            {/* Written Sheet Scenario */}
            <div className="space-y-4">
              <div className="bg-amber-500/5 dark:bg-amber-950/20 border border-amber-300/40 dark:border-amber-500/20 rounded-xl p-3.5">
                <h3 className="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 mb-1.5">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span>Written Paper Scenario (Masla):</span>
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {currentExam.writtenSheet.scenario[language] || currentExam.writtenSheet.scenario.roman_urdu}
                </p>
              </div>

              {/* Exact Requirements */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  📌 Kaise Banana Hai Python Se (Task Points):
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {(currentExam.writtenSheet.requirements[language] || currentExam.writtenSheet.requirements.roman_urdu).map((req, i) => (
                    <li key={i} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-slate-200/60 dark:border-slate-800">
                      <span className="w-4 h-4 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sample Expected Output */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  🖥️ Sample Expected Output:
                </h3>
                <pre className="bg-slate-950 text-emerald-400 p-3 rounded-xl font-mono text-[11px] leading-relaxed overflow-x-auto border border-slate-800 shadow-inner">
                  {currentExam.writtenSheet.sampleOutput}
                </pre>
              </div>

              {/* Exam Rules & Constraints */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  ⚠️ Imtihani Qawaid (Rules):
                </h3>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {(currentExam.writtenSheet.rules[language] || currentExam.writtenSheet.rules.roman_urdu).map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ask AI Ustad Quick Query Button */}
              {onAskAi && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={handleAskAiAboutExam}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                  >
                    <Bot className="w-4 h-4" />
                    <span>Is Sawal Ki Online Wazahat AI Ustad Se Poochein 🤖</span>
                  </button>
                </div>
              )}

              {/* Hint Accordion */}
              <div className="pt-1 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer py-1"
                >
                  <span className="flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                    <span>Madad / Hint Chahiye?</span>
                  </span>
                  <span>{showHint ? 'Chhupayein' : 'Dekhein'}</span>
                </button>
                {showHint && (
                  <div className="mt-2 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700/50 rounded-xl text-xs space-y-1 text-slate-700 dark:text-slate-300">
                    {(currentExam.hints[language] || currentExam.hints.roman_urdu).map((h, i) => (
                      <p key={i}>• {h}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* Model Solution Accordion */}
              <div>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 cursor-pointer py-1"
                >
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-sky-500" />
                    <span>Namona Hal (Model Solution)</span>
                  </span>
                  <span>{showSolution ? 'Chhupayein' : 'Dekhein'}</span>
                </button>
                {showSolution && (
                  <div className="mt-2">
                    <pre className="bg-slate-950 text-sky-300 p-3 rounded-xl font-mono text-[11px] leading-relaxed overflow-x-auto border border-slate-800">
                      {currentExam.solutionCode}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Code Workspace & Automated Evaluation */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
            {/* Editor Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 ml-2">
                  day{selectedDayNumber}_q{currentExam.questionNumber}.py
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetStarter}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Code ko dubara starter state par le jayein"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Code Input Area */}
            <div className="relative">
              <textarea
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                rows={12}
                placeholder="# Yahan apna Python code likhein..."
                className="w-full bg-slate-950 text-slate-100 p-4 font-mono text-xs sm:text-sm rounded-xl border border-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 leading-relaxed resize-y select-text shadow-inner"
                spellCheck={false}
              />
            </div>

            {/* Submit & Run Button */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Code run karke check karein ke sab requirements poori hain ya nahi.
              </span>

              <button
                onClick={handleRunAndEvaluate}
                disabled={isRunning}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 transition-all shadow-md active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>{isRunning ? 'Checking & Testing...' : 'Test Karein & Marks Lein ⚡'}</span>
              </button>
            </div>
          </div>

          {/* Test Evaluation & Output Panel */}
          {evaluation && (
            <div className={`border rounded-2xl p-5 shadow-sm transition-all duration-300 ${
              evaluation.passed
                ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-700/60'
                : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-700/60'
            }`}>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  {evaluation.passed ? (
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center">
                      <XCircle className="w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {evaluation.passed ? 'Zabardast! Sawal Mukammal Sahi Hai' : 'Imtehani Jaiza: Mazeed Behtari Chahiye'}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {evaluation.passed 
                        ? 'Aapko is sawal ke pooray 10 Marks mil gaye hain!' 
                        : 'Niche criteria check karein aur output ko durust karein.'}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-lg font-bold font-mono text-slate-900 dark:text-white">
                    {evaluation.marksObtained} / 10 Marks
                  </span>
                </div>
              </div>

              {/* Requirement Checkpoints */}
              <div className="mb-4">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
                  Automated Test Checkpoints:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {evaluation.criteriaResults.map((crit, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-center gap-2 p-2 rounded-lg text-xs border ${
                        crit.passed
                          ? 'bg-emerald-100/70 dark:bg-emerald-900/30 border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-200'
                          : 'bg-rose-100/70 dark:bg-rose-900/30 border-rose-300 dark:border-rose-700/60 text-rose-800 dark:text-rose-200'
                      }`}
                    >
                      {crit.passed ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      <span className="font-medium truncate">{crit.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actual Program Output */}
              {evaluation.stdout && (
                <div className="mb-3">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Terminal Output:
                  </h4>
                  <pre className="bg-slate-950 text-slate-200 p-3 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800">
                    {evaluation.stdout}
                  </pre>
                </div>
              )}

              {/* Error diagnostic doctor if failed */}
              {evaluation.stderr && (() => {
                const diag = diagnosePythonError(evaluation.stderr, userCode);
                return diag ? (
                  <div className="mt-3">
                    <SmartErrorDoctorCard
                      diagnosis={diag}
                      language={language}
                      onNavigateToLesson={onNavigateToLessons || (() => {})}
                    />
                  </div>
                ) : null;
              })()}

              {/* Next Question Navigation */}
              {evaluation.passed && selectedQuestionIndex < questionsList.length - 1 && (
                <div className="mt-4 pt-3 border-t border-emerald-200 dark:border-emerald-800 flex justify-end">
                  <button
                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex + 1)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span>Agla Sawal (Q{selectedQuestionIndex + 2}) Hal Karein</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* FULL WRITTEN EXAM PAPER MODAL (Aik Sheet Written Mein) */}
      {showPaperModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div 
            className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-amber-500" />
                <span className="font-bold text-slate-900 dark:text-white text-base">
                  Day {selectedDayNumber} Written Question Paper (Imtihani Parchah)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Paper</span>
                </button>
                <button
                  onClick={() => setShowPaperModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Paper Header */}
            <div className="border-2 border-slate-800 dark:border-slate-400 rounded-xl p-5 mb-6 text-center space-y-2 bg-slate-50 dark:bg-slate-800/40">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
                PySeekho Board of Python Learning
              </h2>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {currentDayTrack.title.roman_urdu} - Official Practical Examination
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-300 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300">
                <div><strong>Total Marks:</strong> 100</div>
                <div><strong>Passing Marks:</strong> {currentDayTrack.passingMarks}</div>
                <div><strong>Total Questions:</strong> 10</div>
                <div><strong>Time:</strong> Open Practical</div>
              </div>
            </div>

            {/* Candidate Name Input */}
            <div className="flex items-center gap-3 bg-amber-50 dark:bg-amber-950/30 p-3 rounded-xl border border-amber-300 dark:border-amber-700 mb-6 text-xs">
              <span className="font-bold text-amber-900 dark:text-amber-300">Candidate / Student Name:</span>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1 font-semibold text-slate-900 dark:text-white focus:outline-none"
              />
            </div>

            {/* All 10 Written Exam Questions List */}
            <div className="space-y-6">
              {questionsList.map((q) => (
                <div 
                  key={q.id}
                  className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-800/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      Question {q.questionNumber}: {q.title.roman_urdu}
                    </h3>
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      [10 Marks]
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                    <strong>Problem Statement:</strong> {q.writtenSheet.scenario.roman_urdu}
                  </p>

                  <div className="text-xs space-y-1 mb-3">
                    <strong>Specifications (Kaise banana hai):</strong>
                    <ul className="list-disc pl-5 space-y-0.5 text-slate-600 dark:text-slate-400">
                      {q.writtenSheet.requirements.roman_urdu.map((r, rIdx) => (
                        <li key={rIdx}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Expected Output:
                    </span>
                    <pre className="bg-slate-950 text-emerald-400 p-2.5 rounded-lg font-mono text-[11px] overflow-x-auto">
                      {q.writtenSheet.sampleOutput}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowPaperModal(false)}
                className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs rounded-xl cursor-pointer hover:bg-slate-800"
              >
                Paper Band Karein & Imtihan Shuru Karein
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
