import React, { useState } from 'react';
import { Lesson, UserProgress, Language } from '../types';
import { lessonsData } from '../data/lessonsData';
import { pythonRunner, ExecutionResult } from '../services/pythonRunner';
import { diagnosePythonError } from '../services/errorDiagnostics';
import { SmartErrorDoctorCard } from './SmartErrorDoctorCard';
import { 
  CheckCircle2, 
  Circle, 
  Play, 
  Copy, 
  Check, 
  Clock, 
  Award, 
  AlertTriangle, 
  ChevronRight, 
  Code2, 
  BookOpen, 
  Pencil,
  Terminal,
  FileText,
  GraduationCap,
  Sparkles,
  HelpCircle,
  Layers,
  Lightbulb,
  CheckSquare,
  Eye,
  EyeOff,
  BookOpenCheck,
  Bot,
  ArrowRight
} from 'lucide-react';
import { getLessonSchoolPedagogy } from '../data/schoolPedagogyData';

interface LessonViewerProps {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  language: Language;
  onNavigateToPractice: (challengeId?: string) => void;
  onNavigateToQuiz: (quizId?: string) => void;
  onAskAi?: (context: string, initialPrompt: string) => void;
  onNavigateToDayExam?: (dayNum?: number) => void;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  progress,
  onUpdateProgress,
  language,
  onNavigateToPractice,
  onNavigateToQuiz,
  onAskAi,
  onNavigateToDayExam,
}) => {
  const [filterLevel, setFilterLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced' | 'professional'>('all');
  const [activeLessonId, setActiveLessonId] = useState<string>(
    lessonsData[0]?.id || 'lesson-1-intro-print'
  );
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const [interactiveCode, setInteractiveCode] = useState<string>('');
  const [interactiveResult, setInteractiveResult] = useState<ExecutionResult | null>(null);
  const [isRunningInteractive, setIsRunningInteractive] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);

  const filteredLessons = lessonsData.filter(l => {
    if (filterLevel === 'all') return true;
    return l.level === filterLevel;
  });

  const activeLesson = lessonsData.find(l => l.id === activeLessonId) || lessonsData[0];
  const isCompleted = progress.completedLessonIds.includes(activeLesson.id);
  const schoolData = getLessonSchoolPedagogy(activeLesson.id, activeLesson.title.roman_urdu, activeLesson.moduleIndex);

  const [activeSchoolTab, setActiveSchoolTab] = useState<'all' | 'analogy' | 'anatomy' | 'rules' | 'faqs' | 'homework'>('all');
  const [showHomeworkSolution, setShowHomeworkSolution] = useState<boolean>(false);
  const [showHomeworkHint, setShowHomeworkHint] = useState<boolean>(false);

  // When active lesson changes, load its interactive example
  React.useEffect(() => {
    setInteractiveCode(activeLesson.interactiveExample.code);
    setInteractiveResult(null);
    setShowHomeworkSolution(false);
    setShowHomeworkHint(false);
  }, [activeLessonId, activeLesson]);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleRunInteractive = async () => {
    setIsRunningInteractive(true);
    try {
      const res = await pythonRunner.runCode(interactiveCode);
      setInteractiveResult(res);
    } catch (err: any) {
      setInteractiveResult({
        stdout: '',
        stderr: err?.message || String(err),
        executionTimeMs: 0,
        isError: true,
        engineUsed: 'simulator'
      });
    } finally {
      setIsRunningInteractive(false);
    }
  };

  const handleApplyFix = async (fixedCode: string) => {
    setInteractiveCode(fixedCode);
    setIsRunningInteractive(true);
    try {
      const res = await pythonRunner.runCode(fixedCode);
      setInteractiveResult(res);
    } catch (err: any) {
      setInteractiveResult({
        stdout: '',
        stderr: err?.message || String(err),
        executionTimeMs: 0,
        isError: true,
        engineUsed: 'simulator'
      });
    } finally {
      setIsRunningInteractive(false);
    }
  };

  const handleToggleComplete = () => {
    onUpdateProgress(prev => {
      const alreadyDone = prev.completedLessonIds.includes(activeLesson.id);
      if (alreadyDone) {
        return {
          ...prev,
          completedLessonIds: prev.completedLessonIds.filter(id => id !== activeLesson.id)
        };
      } else {
        return {
          ...prev,
          completedLessonIds: [...prev.completedLessonIds, activeLesson.id],
          totalXp: prev.totalXp + activeLesson.xpReward
        };
      }
    });
  };

  const handleUpdateNotes = (text: string) => {
    onUpdateProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [activeLesson.id]: text
      }
    }));
  };

  const currentNote = progress.notes[activeLesson.id] || '';

  // Calculate overall progress percentage
  const progressPercent = Math.round((progress.completedLessonIds.length / lessonsData.length) * 100);

  const beginnerCount = lessonsData.filter(l => l.level === 'beginner').length;
  const intermediateCount = lessonsData.filter(l => l.level === 'intermediate').length;
  const advancedCount = lessonsData.filter(l => l.level === 'advanced').length;
  const professionalCount = lessonsData.filter(l => l.level === 'professional').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Overview Stats Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 mb-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-auto">
          <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
            Mukammal Course (Beginner ➔ Intermediate ➔ Advanced ➔ Professional Web & Apps)
          </span>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
            Python & Web Apps Academy: {lessonsData.length} Comprehensive Modules
          </h2>
        </div>

        <div className="w-full sm:w-72 flex items-center gap-3">
          <div className="flex-1 bg-slate-100 dark:bg-slate-950 rounded-full h-3 border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-emerald-500 via-amber-500 to-indigo-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold shrink-0">
            {progressPercent}% Complete
          </span>
        </div>
      </div>

      {/* Level Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 text-xs">
        <button
          onClick={() => setFilterLevel('all')}
          className={`px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
            filterLevel === 'all'
              ? 'bg-amber-500/15 text-amber-800 dark:text-white border border-amber-300/50 dark:border-slate-700 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40'
          }`}
        >
          All Modules ({lessonsData.length})
        </button>
        <button
          onClick={() => setFilterLevel('beginner')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
            filterLevel === 'beginner'
              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-600/70 shadow-xs'
              : 'text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>🟢 Beginner ({beginnerCount})</span>
        </button>
        <button
          onClick={() => setFilterLevel('intermediate')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
            filterLevel === 'intermediate'
              ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-600/70 shadow-xs'
              : 'text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          <span>🟡 Intermediate ({intermediateCount})</span>
        </button>
        <button
          onClick={() => setFilterLevel('advanced')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
            filterLevel === 'advanced'
              ? 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-600/70 shadow-xs'
              : 'text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/40'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          <span>🔴 Advanced ({advancedCount})</span>
        </button>
        <button
          onClick={() => setFilterLevel('professional')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
            filterLevel === 'professional'
              ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-600/70 shadow-xs'
              : 'text-indigo-700 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
          <span>🟣 Professional Web & Apps ({professionalCount})</span>
        </button>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Lesson Modules Navigation (4 cols) */}
        <div className="lg:col-span-4 space-y-2 max-h-[800px] overflow-y-auto pr-1">
          <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 px-1">
            Duroos Ki Fehrist ({filteredLessons.length} Modules)
          </h3>

          {filteredLessons.map((lesson) => {
            const completed = progress.completedLessonIds.includes(lesson.id);
            const isSelected = lesson.id === activeLessonId;

            const levelBadge = lesson.level === 'beginner' 
              ? { text: 'Beginner', color: 'text-emerald-600 dark:text-emerald-400' }
              : lesson.level === 'intermediate'
              ? { text: 'Intermediate', color: 'text-amber-600 dark:text-amber-400' }
              : lesson.level === 'professional'
              ? { text: 'Professional Web', color: 'text-indigo-600 dark:text-indigo-400' }
              : { text: 'Advanced', color: 'text-purple-600 dark:text-purple-400' };

            return (
              <div
                key={lesson.id}
                onClick={() => setActiveLessonId(lesson.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all select-none ${
                  isSelected
                    ? 'bg-amber-500/10 dark:bg-slate-800/95 border-amber-400 dark:border-amber-500/70 shadow-sm ring-1 ring-amber-300/40'
                    : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      <span className={levelBadge.color}>{levelBadge.text}</span>
                      <span>·</span>
                      <span>M{lesson.moduleIndex}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lesson.durationMinutes} min
                      </span>
                    </div>

                    <h4 className={`text-sm font-semibold leading-snug ${
                      isSelected ? 'text-amber-800 dark:text-amber-300 font-bold' : 'text-slate-900 dark:text-slate-200'
                    }`}>
                      {lesson.title[language] || lesson.title.roman_urdu}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {lesson.subtitle[language] || lesson.subtitle.roman_urdu}
                    </p>
                  </div>

                  <div className="shrink-0 mt-1">
                    {completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 dark:text-slate-600" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Selected Lesson Detail (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Lesson Header Card */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono mb-1">
                  <span className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
                    activeLesson.level === 'beginner' 
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/50' 
                      : activeLesson.level === 'intermediate'
                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700/50'
                      : activeLesson.level === 'professional'
                      ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700/50'
                      : 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-300 dark:border-purple-700/50'
                  }`}>
                    {activeLesson.level === 'professional' ? 'Professional Web' : `${activeLesson.level} Level`}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-amber-700 dark:text-amber-400 font-semibold">Module {activeLesson.moduleIndex} of {lessonsData.length}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-600 dark:text-slate-300">{activeLesson.durationMinutes} mins</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+{activeLesson.xpReward} XP</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {activeLesson.title[language] || activeLesson.title.roman_urdu}
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {activeLesson.subtitle[language] || activeLesson.subtitle.roman_urdu}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {onAskAi && (
                  <button
                    onClick={() => {
                      const context = `Lesson: ${activeLesson.title.roman_urdu}`;
                      const prompt = `Mujhe is sabaq ("${activeLesson.title.roman_urdu}") ke bunyadi concepts aur practical examples asaan Roman Urdu mein wazahat ke sath samjhayein. Agar koi beginner mistake ho to woh bhi batayein.`;
                      onAskAi(context, prompt);
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                    title="Is sabaq par AI Ustad se online query poochein"
                  >
                    <Bot className="w-4 h-4" />
                    <span>AI Ustad Se Poochein 🤖</span>
                  </button>
                )}

                {onNavigateToDayExam && (
                  <button
                    onClick={() => onNavigateToDayExam(activeLesson.moduleIndex <= 3 ? activeLesson.moduleIndex : 1)}
                    className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                    title="Is module ka 10-sawal wala Day Exam dein"
                  >
                    <FileText className="w-4 h-4 text-slate-950" />
                    <span>Day Exam (10 Qs) 📝</span>
                  </button>
                )}

                {/* Completion Toggle */}
                <button
                  onClick={handleToggleComplete}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isCompleted
                      ? 'bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700'
                  }`}
                >
                  <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`} />
                  <span>{isCompleted ? 'Mukammal' : 'Mark Complete'}</span>
                </button>
              </div>
            </div>

            {/* Summary Box */}
            <div className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                Khulasa (Lesson Summary):
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {activeLesson.summary[language] || activeLesson.summary.roman_urdu}
              </p>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 🏫 FRESH STUDENT SCHOOL CLASSROOM (Zero-Level Se A to Z Wazahat) */}
          {/* ========================================================= */}
          <div className="bg-gradient-to-br from-amber-500/10 via-sky-500/5 to-emerald-500/10 dark:from-amber-950/30 dark:via-slate-900 dark:to-emerald-950/30 rounded-2xl border-2 border-amber-400/60 dark:border-amber-500/40 p-6 shadow-md">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-amber-300/40 dark:border-amber-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                      Zero-Level Fresh Student Guide
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      <Sparkles className="w-3 h-3" />
                      School Classroom Mode
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5">
                    Har Logic & Syntax Ki Tafseeli Wazahat (A to Z)
                  </h3>
                </div>
              </div>

              {onAskAi && (
                <button
                  onClick={() => {
                    const context = `Lesson: ${activeLesson.title.roman_urdu}. Real-Life Analogy: ${schoolData.schoolAnalogy.concept}`;
                    const prompt = `Sir, main bilkul fresh student hoon jaise abhi school aaya hoon. Mujhe is sabaq ("${activeLesson.title.roman_urdu}") ka asal logic aik aam rozmarrah misal se wazahat ke sath samjhayein. Code ki har line ka matlab batayein.`;
                    onAskAi(context, prompt);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-transform active:scale-95 shadow-xs cursor-pointer"
                >
                  <Bot className="w-3.5 h-3.5 text-slate-950" />
                  <span>Sir Se Doubts Poochein 🤖</span>
                </button>
              )}
            </div>

            {/* Subtitle Info */}
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
              💡 <strong>School Student Note:</strong> Agar aap pehli dafa programming seekh rahe hain aur bilkul zero hain, to ghabrayein nahi! Neeche har concept ko rozmarrah zindagi ki aasan misalon, line-by-line computer dimaagh (RAM), aur golden rules ke sath wazeh kiya gaya hai.
            </p>

            {/* Navigation Tabs for School Pedagogy */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 mt-3 border-b border-slate-200/60 dark:border-slate-800/60 text-xs">
              <button
                onClick={() => setActiveSchoolTab('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeSchoolTab === 'all'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700'
                }`}
              >
                🌟 Sab Kuch (All in One)
              </button>
              <button
                onClick={() => setActiveSchoolTab('analogy')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeSchoolTab === 'analogy'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700'
                }`}
              >
                🎒 Rozmarrah Ki Misal
              </button>
              <button
                onClick={() => setActiveSchoolTab('anatomy')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeSchoolTab === 'anatomy'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700'
                }`}
              >
                🔍 Code Ka Aik Aik Tukra (Line Anatomy)
              </button>
              <button
                onClick={() => setActiveSchoolTab('rules')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeSchoolTab === 'rules'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700'
                }`}
              >
                📜 4 Sunahri Usool (Golden Rules)
              </button>
              <button
                onClick={() => setActiveSchoolTab('faqs')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeSchoolTab === 'faqs'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700'
                }`}
              >
                🙋‍♂️ Student Ke Sawalat (FAQs)
              </button>
              <button
                onClick={() => setActiveSchoolTab('homework')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeSchoolTab === 'homework'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700'
                }`}
              >
                ✏️ School Ka Homework (Task)
              </button>
            </div>

            {/* School Content Sections */}
            <div className="mt-4 space-y-5">
              {/* 1. Real-Life School Analogy */}
              {(activeSchoolTab === 'all' || activeSchoolTab === 'analogy') && (
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-amber-300/80 dark:border-amber-600/40 p-4 sm:p-5 shadow-xs">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/80">
                      🎒
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                          {schoolData.schoolAnalogy.realLifeObject}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                          {schoolData.schoolAnalogy.concept}
                        </span>
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-1">
                        Dimaagh Mein Tasawwur Banayein (Mental Model)
                      </h4>
                      <p className="text-sm text-slate-700 dark:text-slate-200 mt-2 leading-relaxed bg-amber-50/60 dark:bg-amber-950/20 p-3.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40 font-medium">
                        {schoolData.schoolAnalogy.story[language] || schoolData.schoolAnalogy.story.roman_urdu}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Line-by-Line Code Anatomy & RAM Visualizer */}
              {(activeSchoolTab === 'all' || activeSchoolTab === 'anatomy') && (
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-sky-300/80 dark:border-sky-600/40 p-4 sm:p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        Code Ka Aik Aik Tukra Samajhein (Line-by-Line Anatomy)
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400 font-bold">
                      Computer RAM & Execution State
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">
                    Har line ko alag alag dekhein ke computer ke dimaagh mein kya tabdeeli aati hai aur ye syntax kyun likha gaya:
                  </p>

                  <div className="space-y-3">
                    {schoolData.lineByLineBreakdown.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-950/60"
                      >
                        <div className="bg-slate-900 px-3.5 py-2 flex items-center justify-between text-xs font-mono border-b border-slate-800">
                          <code className="text-amber-300 font-bold">{item.line}</code>
                          <button
                            onClick={() => {
                              setInteractiveCode(item.line);
                              const playgroundElem = document.getElementById('lesson-interactive-lab');
                              if (playgroundElem) playgroundElem.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="text-[10px] text-sky-400 hover:text-sky-300 font-sans font-bold flex items-center gap-1 cursor-pointer"
                            title="Interactive Lab mein test karein"
                          >
                            <span>Test Karein</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="p-3.5 text-xs space-y-2">
                          <div className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                            {item.explanation[language] || item.explanation.roman_urdu}
                          </div>
                          {item.ramState && (
                            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded border border-emerald-200 dark:border-emerald-800/60">
                              <span>🧠 <strong>RAM Memory:</strong></span>
                              <span>{item.ramState}</span>
                            </div>
                          )}
                          {item.whyThisSyntax && (
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                              💡 <strong>Kyun Aise Likha:</strong> {item.whyThisSyntax}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Four Golden Rules */}
              {(activeSchoolTab === 'all' || activeSchoolTab === 'rules') && (
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-emerald-300/80 dark:border-emerald-600/40 p-4 sm:p-5 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                      Fresh Student Ke 4 Sunahri Usool (Golden Rules)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
                    In 4 usoolon ko zehan-nasheen kar lein, aapka code kabhi bhi Syntax Error nahi dega:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {schoolData.goldenRules.map((rule, idx) => (
                      <div 
                        key={idx}
                        className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex flex-col justify-between text-xs"
                      >
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-400 flex items-center justify-center font-bold text-[10px]">
                              {idx + 1}
                            </span>
                            <span>{rule.title}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium mb-3">
                            {rule.rule[language] || rule.rule.roman_urdu}
                          </p>
                        </div>

                        <div className="space-y-1.5 font-mono text-[11px]">
                          <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                            <span className="font-bold font-sans text-[10px] uppercase text-emerald-600 dark:text-emerald-400 block mb-0.5">✅ Sahi Tareeqa:</span>
                            <code>{rule.goodExample}</code>
                          </div>
                          <div className="p-2 rounded bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800/60">
                            <span className="font-bold font-sans text-[10px] uppercase text-red-600 dark:text-red-400 block mb-0.5">❌ Ghalat (Error):</span>
                            <code>{rule.badExample}</code>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Classroom Student FAQs */}
              {(activeSchoolTab === 'all' || activeSchoolTab === 'faqs') && (
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-purple-300/80 dark:border-purple-600/40 p-4 sm:p-5 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                      Classroom Ke Fresh Sawalat (Student Doubts)
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {schoolData.studentFaqs.map((faq, idx) => (
                      <div 
                        key={idx}
                        className="p-3.5 rounded-lg border border-purple-100 dark:border-purple-900/40 bg-purple-50/40 dark:bg-purple-950/20 text-xs"
                      >
                        <h5 className="font-bold text-purple-950 dark:text-purple-300 flex items-center gap-2 mb-1.5">
                          <span>🙋‍♂️</span>
                          <span>{faq.question[language] || faq.question.roman_urdu}</span>
                        </h5>
                        <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium pl-6">
                          {faq.answer[language] || faq.answer.roman_urdu}
                        </p>
                        {faq.schoolTip && (
                          <div className="mt-2 ml-6 text-[11px] font-semibold text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
                            <Lightbulb className="w-3.5 h-3.5 shrink-0" />
                            <span>Ustad Ka Mashwara: {faq.schoolTip}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. School Ka Mini Homework Task */}
              {(activeSchoolTab === 'all' || activeSchoolTab === 'homework') && (
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-amber-400 dark:border-amber-600/50 p-4 sm:p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BookOpenCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {schoolData.microHomework.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                      1-Minute Practice
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-200 font-medium leading-relaxed mb-3">
                    {schoolData.microHomework.scenario[language] || schoolData.microHomework.scenario.roman_urdu}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <button
                      onClick={() => setShowHomeworkHint(!showHomeworkHint)}
                      className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Lightbulb className="w-3 h-3 text-amber-500" />
                      <span>{showHomeworkHint ? 'Hint Chhupayein' : 'Hint Dekhein 💡'}</span>
                    </button>

                    <button
                      onClick={() => setShowHomeworkSolution(!showHomeworkSolution)}
                      className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 flex items-center gap-1 cursor-pointer"
                    >
                      {showHomeworkSolution ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                      <span>{showHomeworkSolution ? 'Hal Chhupayein' : 'Solution Dekhein 👁️'}</span>
                    </button>

                    <button
                      onClick={() => {
                        setInteractiveCode(schoolData.microHomework.solutionCode);
                        const playgroundElem = document.getElementById('lesson-interactive-lab');
                        if (playgroundElem) playgroundElem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-2.5 py-1 text-xs font-bold rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1 cursor-pointer ml-auto"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Lab Mein Run Karein ⚡</span>
                    </button>
                  </div>

                  {showHomeworkHint && (
                    <div className="p-3 mb-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg text-xs text-amber-900 dark:text-amber-200">
                      💡 <strong>Hint:</strong> {schoolData.microHomework.hint[language] || schoolData.microHomework.hint.roman_urdu}
                    </div>
                  )}

                  {showHomeworkSolution && (
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                      <div className="text-[11px] font-mono text-emerald-400 font-bold mb-1">
                        Model Solution Code:
                      </div>
                      <pre className="font-mono text-sky-300 overflow-x-auto p-2 bg-slate-950 rounded">
                        {schoolData.microHomework.solutionCode}
                      </pre>
                      <p className="text-[11px] text-slate-400 mt-2">
                        {schoolData.microHomework.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Lesson Concept Sections */}
          <div className="space-y-4">
            {activeLesson.sections.map((section, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {section.heading[language] || section.heading.roman_urdu}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  {section.content[language] || section.content.roman_urdu}
                </p>

                {/* Code Snippet if present */}
                {section.codeSnippet && (
                  <div className="mt-4 rounded-lg bg-slate-900 border border-slate-800 overflow-hidden shadow-inner">
                    <div className="bg-slate-950 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-mono text-amber-400 font-semibold">Python Example</span>
                      <div className="flex items-center gap-2">
                        {onAskAi && (
                          <button
                            onClick={() => {
                              const context = `Code in ${activeLesson.title.roman_urdu} - ${section.heading.roman_urdu}`;
                              const prompt = `Is Python code ki line-by-line wazahat asaan alfaz mein karein:\n\`\`\`python\n${section.codeSnippet}\n\`\`\``;
                              onAskAi(context, prompt);
                            }}
                            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                            title="AI Ustad se is code ki wazahat poochein"
                          >
                            <Bot className="w-3 h-3" />
                            <span>AI Wazahat</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleCopyCode(section.codeSnippet!, `sec-${idx}`)}
                          className="flex items-center gap-1 hover:text-white text-slate-400 transition-colors cursor-pointer"
                        >
                          {copiedIndex === `sec-${idx}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedIndex === `sec-${idx}` ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                    <pre className="p-3.5 font-mono-code text-xs text-sky-300 overflow-x-auto leading-relaxed">
                      {section.codeSnippet}
                    </pre>
                  </div>
                )}

                {/* Summary Table if present */}
                {section.summaryTable && (
                  <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                    <div className="bg-slate-50 dark:bg-slate-950 px-3.5 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                        📊 Summary & Comparison Table (Khulasa)
                      </span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                          <tr>
                            {section.summaryTable.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-3.5 py-2.5 font-semibold">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 font-normal">
                          {section.summaryTable.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-3.5 py-2.5 text-slate-600 dark:text-slate-300">
                                  {cIdx === 0 ? (
                                    <code className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-mono font-bold">
                                      {cell}
                                    </code>
                                  ) : cIdx === 1 ? (
                                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                                      {cell}
                                    </span>
                                  ) : (
                                    <span>{cell}</span>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Key Takeaway */}
                {section.keyTakeaway && (
                  <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-lg flex items-start gap-2.5">
                    <span className="text-amber-800 dark:text-amber-400 font-bold text-xs mt-0.5">📌 Yaad Rakhein:</span>
                    <p className="text-xs text-amber-900 dark:text-amber-200/90 leading-relaxed font-medium">
                      {section.keyTakeaway[language] || section.keyTakeaway.roman_urdu}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Live Playground inside the Lesson */}
          <div id="lesson-interactive-lab" className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm scroll-mt-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">Live Interactive Lab</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {activeLesson.interactiveExample.title}
                </h3>
              </div>
              <button
                onClick={handleRunInteractive}
                disabled={isRunningInteractive}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <Play className={`w-3.5 h-3.5 fill-current ${isRunningInteractive ? 'animate-spin' : ''}`} />
                <span>{isRunningInteractive ? 'Running...' : 'Run Code (Test Karein)'}</span>
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
              {activeLesson.interactiveExample.explanation[language] || activeLesson.interactiveExample.explanation.roman_urdu}
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Code Editor */}
              <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden flex flex-col shadow-inner">
                <div className="bg-slate-950 px-3 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  interactive.py
                </div>
                <textarea
                  value={interactiveCode}
                  onChange={(e) => setInteractiveCode(e.target.value)}
                  className="flex-1 p-3 bg-transparent text-slate-100 font-mono-code text-xs leading-6 outline-none resize-none min-h-[160px]"
                />
              </div>

              {/* Live Output */}
              <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden flex flex-col shadow-inner">
                <div className="bg-slate-950 px-3 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-emerald-400" />
                  <span>Output Console</span>
                </div>
                <div className="flex-1 p-3 font-mono-code text-xs overflow-y-auto min-h-[160px]">
                  {!interactiveResult ? (
                    <span className="text-slate-500 italic">"Run Code" dabayein nateeja dekhne ke liye...</span>
                  ) : interactiveResult.isError ? (
                    <pre className="text-rose-400 whitespace-pre-wrap">{interactiveResult.stderr}</pre>
                  ) : (
                    <pre className="text-emerald-400 whitespace-pre-wrap">{interactiveResult.stdout}</pre>
                  )}
                </div>
              </div>
            </div>

            {/* Smart Ghalti Doctor Card */}
            {interactiveResult && interactiveResult.isError && (
              <SmartErrorDoctorCard
                diagnosis={diagnosePythonError(interactiveCode, interactiveResult.stderr) || {
                  errorType: 'Python Syntax / Runtime Error',
                  title: {
                    roman_urdu: 'Code Mein Ghalti Aayi Hai!',
                    english: 'Error Detected in Code!',
                    urdu: 'کوڈ میں غلطی آئی ہے!'
                  },
                  cause: {
                    roman_urdu: 'Python interpreter is code ko chala nahi saka. Syntax ya variable name check karein.',
                    english: 'Python failed to execute the code. Check syntax and variable names.',
                    urdu: 'کوڈ نہیں چل سکا۔'
                  },
                  fixInstruction: {
                    roman_urdu: 'Error message ko ghaur se parhein aur mutaliqa sabaq ka mutala karein.',
                    english: 'Inspect the error details and review the relevant lesson.',
                    urdu: 'کونسول کا پیغام پڑھ کر درست کریں۔'
                  },
                  relatedLessonId: 'lesson-12-error-handling',
                  relatedLessonTitle: 'Sabaq 12: Errors & Exception Handling',
                  canAutoFix: false
                }}
                language={language}
                onApplyFix={handleApplyFix}
                onNavigateToLesson={(lessonId) => {
                  setActiveLessonId(lessonId);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}
          </div>

          {/* Common Mistakes & Bug Prevention */}
          {activeLesson.commonMistakes.length > 0 && (
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Aam Ghaltiyan (Common Bugs) & Solution</span>
              </h3>

              <div className="space-y-3">
                {activeLesson.commonMistakes.map((cm, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-950/80 rounded-lg border border-slate-200 dark:border-slate-800/80 p-3.5 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 font-mono-code">
                      <div className="p-2 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded text-red-800 dark:text-red-300">
                        <span className="text-[10px] uppercase font-bold text-red-600 dark:text-red-400 block mb-0.5">❌ Ghalti (Wrong):</span>
                        <code>{cm.mistake}</code>
                      </div>
                      <div className="p-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded text-emerald-800 dark:text-emerald-300">
                        <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5">✅ Sahi Code (Fix):</span>
                        <code>{cm.fix}</code>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      💡 {cm.explanation[language] || cm.explanation.roman_urdu}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Notes for this Lesson */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Pencil className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Is Lesson Ke Personal Notes (Auto-saved)</span>
              </h3>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Mehfooz hai</span>
            </div>
            <textarea
              value={currentNote}
              onChange={(e) => handleUpdateNotes(e.target.value)}
              placeholder="Yahan is sabaq se mutaliq apne points ya notes likhein..."
              className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-xs outline-none min-h-[90px] resize-y focus:border-amber-400"
            />
          </div>

          {/* Next Action Callouts (Practice & Quiz) */}
          <div className="bg-gradient-to-r from-amber-50 to-sky-50 dark:from-slate-900 dark:to-slate-800 rounded-xl border border-amber-200/80 dark:border-slate-700/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">Agla Marhala (Next Steps)</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                Practice Karein Aur Quiz Dein!
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Seekhi hui cheezon ko pakka karne ke liye practice challenge hal karein aur quiz paas karein.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {activeLesson.challengeId && (
                <button
                  onClick={() => onNavigateToPractice(activeLesson.challengeId)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Start Practice</span>
                </button>
              )}

              {activeLesson.quizId && (
                <button
                  onClick={() => onNavigateToQuiz(activeLesson.quizId)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Take Quiz</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
