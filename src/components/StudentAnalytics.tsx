import React, { useState, useMemo } from 'react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell, 
  RadarChart, 
  Radar, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  PieChart, 
  Pie
} from 'recharts';
import { UserProgress, Language } from '../types';
import { lessonsData } from '../data/lessonsData';
import { 
  BarChart3, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Award, 
  Zap, 
  ArrowRight, 
  BookOpen, 
  Code2, 
  HelpCircle, 
  FileText, 
  ShieldAlert, 
  Sparkles,
  Filter,
  Printer,
  ChevronRight,
  Compass
} from 'lucide-react';

interface StudentAnalyticsProps {
  progress: UserProgress;
  language: Language;
  onNavigateToLesson: (lessonId: string) => void;
  onNavigateToPractice: (challengeId?: string) => void;
  onNavigateToQuiz: (quizId?: string) => void;
  onNavigateToDayExam?: (dayNum?: number) => void;
  onNavigateToSyllabus?: () => void;
}

export interface ModuleAnalyticsData {
  id: string;
  moduleIndex: number;
  shortCode: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  title: string;
  urduTitle: string;
  isLessonCompleted: boolean;
  hasChallenge: boolean;
  isChallengeCompleted: boolean;
  challengeId?: string;
  hasQuiz: boolean;
  isQuizCompleted: boolean;
  quizScore?: number;
  quizTotal?: number;
  quizPercentage?: number;
  quizId?: string;
  completionRate: number; // 0 to 100%
  status: 'mastered' | 'in_progress' | 'needs_attention' | 'not_started';
  weaknessReasons: string[];
  recommendedAction: {
    type: 'lesson' | 'challenge' | 'quiz' | 'exam';
    label: string;
    targetId?: string;
    dayNum?: number;
  };
}

export const StudentAnalytics: React.FC<StudentAnalyticsProps> = ({
  progress,
  language,
  onNavigateToLesson,
  onNavigateToPractice,
  onNavigateToQuiz,
  onNavigateToDayExam,
  onNavigateToSyllabus
}) => {
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<'all' | 'beginner' | 'intermediate' | 'advanced' | 'professional'>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<'all' | 'needs_improvement' | 'mastered'>('all');
  const [activeChartTab, setActiveChartTab] = useState<'barchart' | 'radar' | 'breakdown'>('barchart');

  // Compute analytics for each module
  const modulesAnalytics: ModuleAnalyticsData[] = useMemo(() => {
    return lessonsData.map((lesson) => {
      const isLessonCompleted = (progress.completedLessonIds || []).includes(lesson.id);
      
      const hasChallenge = Boolean(lesson.challengeId);
      const isChallengeCompleted = hasChallenge 
        ? (progress.completedChallengeIds || []).includes(lesson.challengeId!)
        : false;

      const hasQuiz = Boolean(lesson.quizId);
      const quizResult = hasQuiz && lesson.quizId ? progress.quizScores?.[lesson.quizId] : undefined;
      const isQuizCompleted = Boolean(
        quizResult?.passed || (progress.completedQuizIds || []).includes(lesson.quizId || '')
      );
      const quizPercentage = quizResult && quizResult.total > 0
        ? Math.round((quizResult.score / quizResult.total) * 100)
        : undefined;

      // Weight calculation:
      // If both challenge and quiz exist: Lesson 40%, Challenge 35%, Quiz 25%
      // If only challenge: Lesson 55%, Challenge 45%
      // If only quiz: Lesson 60%, Quiz 40%
      // If neither: Lesson 100%
      let rate = 0;
      if (hasChallenge && hasQuiz) {
        if (isLessonCompleted) rate += 40;
        if (isChallengeCompleted) rate += 35;
        if (isQuizCompleted) rate += 25;
      } else if (hasChallenge) {
        if (isLessonCompleted) rate += 55;
        if (isChallengeCompleted) rate += 45;
      } else if (hasQuiz) {
        if (isLessonCompleted) rate += 60;
        if (isQuizCompleted) rate += 40;
      } else {
        if (isLessonCompleted) rate += 100;
      }

      const weaknesses: string[] = [];
      let status: 'mastered' | 'in_progress' | 'needs_attention' | 'not_started' = 'not_started';

      if (rate === 100) {
        status = 'mastered';
      } else if (rate > 0) {
        status = 'in_progress';
      } else {
        status = 'not_started';
      }

      // Check specific weakness triggers
      if (!isLessonCompleted) {
        weaknesses.push('Nazriyaat / Theory lesson abhi tak nahi parha');
      }
      if (hasChallenge && !isChallengeCompleted) {
        weaknesses.push('Practical coding challenge hal nahi kiya');
      }
      if (hasQuiz && !isQuizCompleted) {
        weaknesses.push('Conceptual quiz attempt nahi kiya');
      } else if (quizPercentage !== undefined && quizPercentage < 70) {
        weaknesses.push(`Quiz score kam hai (${quizPercentage}% < 70%)`);
        status = 'needs_attention';
      }

      // Determine recommended action
      let recommendedAction: ModuleAnalyticsData['recommendedAction'] = {
        type: 'lesson',
        label: 'Sabaq Shuru Karein',
        targetId: lesson.id
      };

      if (!isLessonCompleted) {
        recommendedAction = { type: 'lesson', label: 'Theory Sabaq Parhein', targetId: lesson.id };
      } else if (hasChallenge && !isChallengeCompleted) {
        recommendedAction = { type: 'challenge', label: 'Coding Challenge Hal Karein', targetId: lesson.challengeId };
      } else if (hasQuiz && (!isQuizCompleted || (quizPercentage !== undefined && quizPercentage < 70))) {
        recommendedAction = { type: 'quiz', label: 'Quiz Mein Behtari Layein', targetId: lesson.quizId };
      } else {
        recommendedAction = { type: 'lesson', label: 'Dohrayein (Review)', targetId: lesson.id };
      }

      return {
        id: lesson.id,
        moduleIndex: lesson.moduleIndex,
        shortCode: `M${lesson.moduleIndex}`,
        level: lesson.level,
        title: lesson.title[language] || lesson.title.roman_urdu,
        urduTitle: lesson.title.urdu,
        isLessonCompleted,
        hasChallenge,
        isChallengeCompleted,
        challengeId: lesson.challengeId,
        hasQuiz,
        isQuizCompleted,
        quizScore: quizResult?.score,
        quizTotal: quizResult?.total,
        quizPercentage,
        quizId: lesson.quizId,
        completionRate: rate,
        status,
        weaknessReasons: weaknesses,
        recommendedAction
      };
    });
  }, [progress, language]);

  // Filtered list for bar chart & table
  const filteredModules = useMemo(() => {
    return modulesAnalytics.filter((m) => {
      if (selectedLevelFilter !== 'all' && m.level !== selectedLevelFilter) return false;
      if (selectedStatusFilter === 'mastered' && m.completionRate < 100) return false;
      if (selectedStatusFilter === 'needs_improvement' && m.completionRate === 100) return false;
      return true;
    });
  }, [modulesAnalytics, selectedLevelFilter, selectedStatusFilter]);

  // Overall KPI aggregates
  const kpis = useMemo(() => {
    const totalModules = modulesAnalytics.length;
    const fullyMastered = modulesAnalytics.filter(m => m.completionRate === 100).length;
    const inProgress = modulesAnalytics.filter(m => m.completionRate > 0 && m.completionRate < 100).length;
    const notStarted = modulesAnalytics.filter(m => m.completionRate === 0).length;
    const avgCompletion = totalModules > 0
      ? Math.round(modulesAnalytics.reduce((acc, m) => acc + m.completionRate, 0) / totalModules)
      : 0;

    const challengesWithReq = modulesAnalytics.filter(m => m.hasChallenge);
    const challengesDone = modulesAnalytics.filter(m => m.isChallengeCompleted).length;
    const challengeRate = challengesWithReq.length > 0
      ? Math.round((challengesDone / challengesWithReq.length) * 100)
      : 0;

    const quizzesAttempted = Object.values(progress.quizScores || {});
    const avgQuizScore = quizzesAttempted.length > 0
      ? Math.round(
          quizzesAttempted.reduce((acc, q) => acc + (q.total > 0 ? (q.score / q.total) * 100 : 0), 0) / quizzesAttempted.length
        )
      : 0;

    const dailyExamsCompleted = Object.values(progress.day1ExamSubmissions || {}).filter(s => s.passed).length;

    return {
      totalModules,
      fullyMastered,
      inProgress,
      notStarted,
      avgCompletion,
      challengesDone,
      totalChallenges: challengesWithReq.length,
      challengeRate,
      quizzesAttemptedCount: quizzesAttempted.length,
      avgQuizScore,
      dailyExamsCompleted
    };
  }, [modulesAnalytics, progress]);

  // Top Areas Needing Improvement (Ranked by priority: Foundational modules first, then low quiz scores)
  const areasNeedingImprovement = useMemo(() => {
    return modulesAnalytics
      .filter(m => m.completionRate < 100)
      .sort((a, b) => {
        // High priority for Modules 1-7 (core foundations)
        const aIsFoundation = a.moduleIndex <= 7 ? 1 : 0;
        const bIsFoundation = b.moduleIndex <= 7 ? 1 : 0;
        if (aIsFoundation !== bIsFoundation) return bIsFoundation - aIsFoundation;

        // Partially completed comes before untouched
        if (a.completionRate > 0 && b.completionRate === 0) return -1;
        if (b.completionRate > 0 && a.completionRate === 0) return 1;

        return a.moduleIndex - b.moduleIndex;
      })
      .slice(0, 5);
  }, [modulesAnalytics]);

  // Radar chart data for 6 Core Competency Domains
  const radarData = useMemo(() => {
    const getAvg = (indices: number[]) => {
      const match = modulesAnalytics.filter(m => indices.includes(m.moduleIndex));
      if (match.length === 0) return 0;
      return Math.round(match.reduce((a, b) => a + b.completionRate, 0) / match.length);
    };

    return [
      { domain: 'I/O & Syntax', score: getAvg([1, 2, 3]), fullMark: 100 },
      { domain: 'Control Flow', score: getAvg([4, 5]), fullMark: 100 },
      { domain: 'Collections', score: getAvg([6, 7]), fullMark: 100 },
      { domain: 'Functions & Logic', score: getAvg([8, 9, 10, 11, 12]), fullMark: 100 },
      { domain: 'Defensive Coding', score: getAvg([13, 14, 15, 16]), fullMark: 100 },
      { domain: 'Web & Studio', score: getAvg([23, 24, 25, 26, 27]), fullMark: 100 }
    ];
  }, [modulesAnalytics]);

  // Donut chart data for Level Mastery
  const pieData = useMemo(() => {
    const levels = ['beginner', 'intermediate', 'advanced', 'professional'] as const;
    const colors = ['#3B82F6', '#F59E0B', '#A855F7', '#10B981'];

    return levels.map((lvl, idx) => {
      const lvlModules = modulesAnalytics.filter(m => m.level === lvl);
      const completed = lvlModules.filter(m => m.completionRate === 100).length;
      return {
        name: lvl.charAt(0).toUpperCase() + lvl.slice(1),
        value: completed,
        total: lvlModules.length,
        color: colors[idx]
      };
    });
  }, [modulesAnalytics]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-slate-900 border-2 border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-white relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 text-slate-800/40 text-8xl font-black select-none pointer-events-none">
          📊
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center text-xl shadow-lg">
                📈
              </span>
              <div>
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-400">
                  Student Learning Analytics
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">PySeekho Progress Intelligence Engine</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Aapki Kamyabi Ka Tajziya (Progress Overview & Diagnostics)
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              D3 & Recharts visual models ke zariye har module ka completion rate dekhein, 
              apni taqat aur kamzoriyon (areas needing improvement) ki nishandahi karein, 
              aur agla behtareen sabaq chun kar 100% mastery haasil karein.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-xs font-semibold text-slate-200 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
              title="Analytics report print ya save karein"
            >
              <Printer className="w-4 h-4 text-slate-300" />
              <span>Print Report (PDF)</span>
            </button>
            {onNavigateToSyllabus && (
              <button
                onClick={onNavigateToSyllabus}
                className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-slate-950 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
              >
                <span>📜 Academic Syllabus</span>
              </button>
            )}
          </div>
        </div>

        {/* Top 4 KPI Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800/80">
          {/* KPI 1 */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Curriculum Completion</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-white">{kpis.avgCompletion}%</span>
                <span className="text-[11px] text-emerald-400 font-semibold">Overall</span>
              </div>
            </div>
          </div>

          {/* KPI 2 */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Mastered Modules</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-white">{kpis.fullyMastered}</span>
                <span className="text-xs text-slate-400 font-normal">/ {kpis.totalModules}</span>
              </div>
            </div>
          </div>

          {/* KPI 3 */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center shrink-0">
              <Code2 className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Practical Challenges</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-white">{kpis.challengesDone}</span>
                <span className="text-xs text-slate-400 font-normal">/ {kpis.totalChallenges} ({kpis.challengeRate}%)</span>
              </div>
            </div>
          </div>

          {/* KPI 4 */}
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <span className="text-xs text-slate-400 block font-medium">Earned Experience</span>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-amber-400">{progress.totalXp}</span>
                <span className="text-xs text-slate-400 font-normal">XP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Areas Needing Improvement Priority Section (Direct Diagnosis & Action) */}
      <div className="bg-amber-500/5 dark:bg-amber-950/20 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/20 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                Areas Needing Improvement (Fauri Tavajja Talab Topics)
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                PySeekho Diagnostic Engine ne in topics par kamzoriyan detect ki hain jinhein pehle hal karna zaroori hai.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold bg-amber-500/20 text-amber-700 dark:text-amber-300 px-3 py-1 rounded-full self-start sm:self-auto">
            {areasNeedingImprovement.length} Priorities Identified
          </span>
        </div>

        {areasNeedingImprovement.length === 0 ? (
          <div className="text-center py-8 space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center text-2xl">
              🎉
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Shabash! Koi bari kamzori mojood nahi hai!
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Aapne tamam shurooati modules 100% mukammal kar liye hain. Aglay advanced topics shuru karein!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {areasNeedingImprovement.map((item) => (
              <div 
                key={item.id}
                className="bg-white dark:bg-slate-900 border border-amber-300/40 dark:border-amber-500/20 rounded-2xl p-4.5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      Module {item.moduleIndex}
                    </span>
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-400">
                      {item.completionRate}% Done
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Weakness tags */}
                  <div className="space-y-1">
                    {item.weaknessReasons.map((w, wIdx) => (
                      <div key={wIdx} className="flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span className="line-clamp-1">{w}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  {item.recommendedAction.type === 'lesson' && (
                    <button
                      onClick={() => onNavigateToLesson(item.recommendedAction.targetId || item.id)}
                      className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{item.recommendedAction.label}</span>
                    </button>
                  )}

                  {item.recommendedAction.type === 'challenge' && (
                    <button
                      onClick={() => onNavigateToPractice(item.recommendedAction.targetId)}
                      className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>{item.recommendedAction.label}</span>
                    </button>
                  )}

                  {item.recommendedAction.type === 'quiz' && (
                    <button
                      onClick={() => onNavigateToQuiz(item.recommendedAction.targetId)}
                      className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>{item.recommendedAction.label}</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Charts Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-lg space-y-6">
        {/* Navigation Tabs for Chart View */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-500" />
              <span>Module-by-Module Completion Rates</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Har module ka completion score (Theory + Coding Lab + Quiz)
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setActiveChartTab('barchart')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeChartTab === 'barchart'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              📊 Bar Chart
            </button>
            <button
              onClick={() => setActiveChartTab('radar')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeChartTab === 'radar'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              🕸️ Skill Radar
            </button>
            <button
              onClick={() => setActiveChartTab('breakdown')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeChartTab === 'breakdown'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              🍩 Level Donut
            </button>
          </div>
        </div>

        {/* Level Filters for Bar Chart */}
        {activeChartTab === 'barchart' && (
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-500 font-medium mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter Level:
              </span>
              <button
                onClick={() => setSelectedLevelFilter('all')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedLevelFilter === 'all'
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                All (27)
              </button>
              <button
                onClick={() => setSelectedLevelFilter('beginner')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedLevelFilter === 'beginner'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                Beginner (1-7)
              </button>
              <button
                onClick={() => setSelectedLevelFilter('intermediate')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedLevelFilter === 'intermediate'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                Intermediate (8-18)
              </button>
              <button
                onClick={() => setSelectedLevelFilter('advanced')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedLevelFilter === 'advanced'
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                Advanced (19-22)
              </button>
              <button
                onClick={() => setSelectedLevelFilter('professional')}
                className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  selectedLevelFilter === 'professional'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                Web & Studio (23-27)
              </button>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> 100% Mastered
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> In Progress
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" /> Not Started
              </span>
            </div>
          </div>
        )}

        {/* 1. Bar Chart View */}
        {activeChartTab === 'barchart' && (
          <div className="w-full h-80 sm:h-96 pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredModules} margin={{ top: 20, right: 10, left: -20, bottom: 25 }}>
                <XAxis 
                  dataKey="shortCode" 
                  stroke="#94a3b8" 
                  fontSize={11} 
                  tickLine={false}
                />
                <YAxis 
                  stroke="#94a3b8" 
                  fontSize={11} 
                  domain={[0, 100]} 
                  tickFormatter={(v) => `${v}%`}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(245, 158, 11, 0.08)' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload as ModuleAnalyticsData;
                      return (
                        <div className="bg-slate-900 border border-slate-700 text-white p-3 rounded-xl shadow-xl text-xs space-y-1.5 max-w-xs">
                          <div className="font-bold text-amber-400">
                            Module {data.moduleIndex}: {data.title}
                          </div>
                          <div className="flex items-center justify-between border-t border-slate-800 pt-1">
                            <span className="text-slate-400">Completion Rate:</span>
                            <span className="font-mono font-bold text-emerald-400">{data.completionRate}%</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">Theory Lesson:</span>
                            <span>{data.isLessonCompleted ? '✅ Mukammal' : '⏳ Baaqi'}</span>
                          </div>
                          {data.hasChallenge && (
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-slate-400">Lab Challenge:</span>
                              <span>{data.isChallengeCompleted ? '✅ Passed' : '⏳ Pending'}</span>
                            </div>
                          )}
                          {data.hasQuiz && (
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="text-slate-400">Quiz Score:</span>
                              <span>{data.quizPercentage !== undefined ? `${data.quizPercentage}%` : '⏳ Not attempted'}</span>
                            </div>
                          )}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="completionRate" radius={[6, 6, 0, 0]}>
                  {filteredModules.map((entry, index) => {
                    let fillColor = '#64748b'; // not started
                    if (entry.completionRate === 100) fillColor = '#10b981'; // emerald
                    else if (entry.completionRate >= 50) fillColor = '#f59e0b'; // amber
                    else if (entry.completionRate > 0) fillColor = '#6366f1'; // indigo
                    return <Cell key={`cell-${index}`} fill={fillColor} />;
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* 2. Radar Chart View (Competencies) */}
        {activeChartTab === 'radar' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
            <div className="lg:col-span-7 h-80 sm:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#cbd5e1" strokeOpacity={0.4} />
                  <PolarAngleAxis dataKey="domain" stroke="#64748b" fontSize={11} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" fontSize={10} />
                  <Radar
                    name="Mastery Score"
                    dataKey="score"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.45}
                  />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="bg-slate-900 text-white p-2.5 rounded-lg border border-slate-700 text-xs">
                            <span className="font-bold text-emerald-400">{d.domain}:</span> {d.score}% Mastery
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="lg:col-span-5 space-y-3 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-500" />
                <span>6 Core Skill Domains</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                PySeekho ka radar model aapke programming skills ko 6 ahem shobon mein divide karta hai:
              </p>
              <div className="space-y-2 pt-1 text-xs">
                {radarData.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item.domain}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full" 
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                      <span className="font-mono font-bold text-slate-900 dark:text-white w-8 text-right">
                        {item.score}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. Level Donut View */}
        {activeChartTab === 'breakdown' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-2">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`pie-cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const d = payload[0].payload;
                        return (
                          <div className="bg-slate-900 text-white p-2.5 rounded-lg border border-slate-700 text-xs">
                            <span className="font-bold" style={{ color: d.color }}>{d.name}:</span> {d.value} of {d.total} Modules Mastered
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                Curriculum Level Distribution
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Har category ke andar mukammal kiye gaye modules ki tadad:
              </p>
              <div className="space-y-2.5 pt-1">
                {pieData.map((lvl) => (
                  <div key={lvl.name} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: lvl.color }} />
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{lvl.name}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      {lvl.value} / {lvl.total} ({lvl.total > 0 ? Math.round((lvl.value / lvl.total) * 100) : 0}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Complete Module Breakdown Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Tafseeli Module Audit Record (27 Modules)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Har sabaq ka detailed status, lab results aur recommended action
            </p>
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <button
              onClick={() => setSelectedStatusFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedStatusFilter === 'all'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedStatusFilter('needs_improvement')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedStatusFilter === 'needs_improvement'
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              ⚠️ Needs Action ({modulesAnalytics.filter(m => m.completionRate < 100).length})
            </button>
            <button
              onClick={() => setSelectedStatusFilter('mastered')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedStatusFilter === 'mastered'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              ✅ Mastered ({modulesAnalytics.filter(m => m.completionRate === 100).length})
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3 px-4">Module</th>
                <th className="py-3 px-4">Level</th>
                <th className="py-3 px-4">Theory</th>
                <th className="py-3 px-4">Lab Challenge</th>
                <th className="py-3 px-4">Quiz Score</th>
                <th className="py-3 px-4">Completion %</th>
                <th className="py-3 px-4 text-right">Fauri Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredModules.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900 dark:text-white">
                      M{m.moduleIndex}: {m.title}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`uppercase font-bold text-[10px] px-2 py-0.5 rounded ${
                      m.level === 'beginner' 
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : m.level === 'intermediate'
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                        : m.level === 'advanced'
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                        : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                    }`}>
                      {m.level}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {m.isLessonCompleted ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Done
                      </span>
                    ) : (
                      <span className="text-slate-400">Pending</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {m.hasChallenge ? (
                      m.isChallengeCompleted ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Passed
                        </span>
                      ) : (
                        <span className="text-amber-600 dark:text-amber-400 font-semibold">Pending</span>
                      )
                    ) : (
                      <span className="text-slate-400 italic">None</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {m.hasQuiz ? (
                      m.quizPercentage !== undefined ? (
                        <span className={`font-mono font-bold ${
                          m.quizPercentage >= 70 
                            ? 'text-emerald-600 dark:text-emerald-400' 
                            : 'text-rose-600 dark:text-rose-400'
                        }`}>
                          {m.quizPercentage}%
                        </span>
                      ) : (
                        <span className="text-slate-400">Not taken</span>
                      )
                    ) : (
                      <span className="text-slate-400 italic">None</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            m.completionRate === 100 
                              ? 'bg-emerald-500' 
                              : m.completionRate >= 50 
                              ? 'bg-amber-500' 
                              : 'bg-slate-400'
                          }`}
                          style={{ width: `${m.completionRate}%` }}
                        />
                      </div>
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                        {m.completionRate}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => onNavigateToLesson(m.id)}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>Open</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
