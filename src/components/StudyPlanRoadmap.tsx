import React, { useState } from 'react';
import { UserProgress, Language, StudyPlanTrack, DayPlan } from '../types';
import { studyPlansData } from '../data/studyPlansData';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  BookOpen, 
  Code2, 
  Award, 
  Flame, 
  Check, 
  Sparkles,
  Zap,
  Target,
  Compass,
  FileText
} from 'lucide-react';

interface StudyPlanRoadmapProps {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  language: Language;
  onNavigateToLesson: (lessonId: string) => void;
  onNavigateToPractice: (challengeId?: string) => void;
  onNavigateToQuiz: (quizId?: string) => void;
  onNavigateToDay1Exam?: () => void;
  onNavigateToDayExam?: (dayNum: number) => void;
  onNavigateToSyllabus?: () => void;
  onNavigateToAnalytics?: () => void;
}

export const StudyPlanRoadmap: React.FC<StudyPlanRoadmapProps> = ({
  progress,
  onUpdateProgress,
  language,
  onNavigateToLesson,
  onNavigateToPractice,
  onNavigateToQuiz,
  onNavigateToDay1Exam,
  onNavigateToDayExam,
  onNavigateToSyllabus,
  onNavigateToAnalytics,
}) => {
  const selectedPlanId = progress.selectedPlanId || '14days';
  const completedDays = progress.completedDays || [];

  const currentTrack: StudyPlanTrack = studyPlansData.find(p => p.id === selectedPlanId) || studyPlansData[0];

  const handleSelectTrack = (planId: '7days' | '14days' | '30days' | 'professional_web') => {
    onUpdateProgress(prev => ({
      ...prev,
      selectedPlanId: planId,
      // preserve completed days count if within range
      completedDays: (prev.completedDays || []).filter(d => {
        const targetTrack = studyPlansData.find(t => t.id === planId);
        return targetTrack ? d <= targetTrack.totalDays : true;
      }),
      planStartDate: prev.planStartDate || new Date().toISOString()
    }));
  };

  const handleToggleDayComplete = (dayNum: number) => {
    onUpdateProgress(prev => {
      const currentList = prev.completedDays || [];
      const isAlreadyComplete = currentList.includes(dayNum);
      const updated = isAlreadyComplete
        ? currentList.filter(d => d !== dayNum)
        : [...currentList, dayNum];
      
      const xpBonus = !isAlreadyComplete ? 25 : 0;

      return {
        ...prev,
        completedDays: updated,
        totalXp: prev.totalXp + xpBonus
      };
    });
  };

  const totalDays = currentTrack.totalDays;
  const completedCount = completedDays.filter(d => d <= totalDays).length;
  const percentComplete = Math.round((completedCount / totalDays) * 100);

  // Calculate target graduation date
  const remainingDays = Math.max(0, totalDays - completedCount);
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + remainingDays);
  const formattedTargetDate = targetDate.toLocaleDateString('ur-PK', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  // Next active day to do
  const nextActiveDay = Array.from({ length: totalDays }, (_, i) => i + 1).find(d => !completedDays.includes(d)) || 1;
  const nextDayPlan = currentTrack.days.find(d => d.dayNumber === nextActiveDay);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
            Study Schedule & Days Pattern
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 mt-0.5">
            <span>Kitne Din Mein Python Seekhein?</span>
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {language === 'roman_urdu' && "Apni raftaar ke mutabiq plan chunein: 14 Din (Recommended), 7 Din (Fast Track), ya 30 Din (Deep Learning)."}
            {language === 'english' && "Choose your learning pace: 14 Days (Balanced), 7 Days (Intensive), or 30 Days (In-depth)."}
            {language === 'urdu' && "اپنی سہولت کے مطابق لائحہ عمل منتخب کریں: 14 دن، 7 دن، یا 30 دن کا تفصیلی پلان۔"}
          </p>
        </div>

        {/* Plan Track Selector Buttons */}
        <div className="flex flex-wrap items-center gap-1 bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs shadow-xs">
          {studyPlansData.map((track) => (
            <button
              key={track.id}
              onClick={() => handleSelectTrack(track.id)}
              className={`px-3.5 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                track.id === selectedPlanId
                  ? 'bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold border border-amber-300/50 dark:border-amber-500/30 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              <span>
                {track.id === 'professional_web' ? '🌐 Web & Apps (7 Din)' : `${track.totalDays} Din Plan`}
              </span>
              {track.id === '14days' && (
                <span className="ml-1.5 text-[10px] bg-amber-500/20 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded font-mono font-bold">
                  Recommended
                </span>
              )}
              {track.id === 'professional_web' && (
                <span className="ml-1.5 text-[10px] bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 px-1.5 py-0.5 rounded font-mono font-bold">
                  New
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Track Overview & Next Goal Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 mb-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-600/50 text-amber-800 dark:text-amber-300">
                {currentTrack.badge}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {currentTrack.dailyTime[language] || currentTrack.dailyTime.roman_urdu}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {currentTrack.title[language] || currentTrack.title.roman_urdu}
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {currentTrack.subtitle[language] || currentTrack.subtitle.roman_urdu}
            </p>

            {/* Progress Bar & Forecast */}
            <div className="mt-5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-700 dark:text-slate-300">
                  Mukammal: <strong className="text-amber-600 dark:text-amber-400">{completedCount}</strong> / {totalDays} Din ({percentComplete}%)
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Target Graduation: {formattedTargetDate}
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-950 rounded-full h-3 border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 via-sky-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${percentComplete}%` }}
                />
              </div>
            </div>
          </div>

          {/* Right Action: Next Day Card */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider block font-bold">
                Aaj Ka Hadaf (Today's Mission):
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                {nextDayPlan?.title[language] || nextDayPlan?.title.roman_urdu || `Din ${nextActiveDay}`}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                {nextDayPlan?.description[language] || nextDayPlan?.description.roman_urdu}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
              {nextDayPlan && (
                <button
                  onClick={() => onNavigateToLesson(nextDayPlan.lessonId)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>Aaj Ka Sabaq Shuru Karein</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Academic Syllabus (Nisab-e-Taleem) Prospectus Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 border border-slate-700/80 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white shadow-md">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center text-xl shrink-0 shadow-sm">
            📜
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                CS-101 / PY-2026
              </span>
              <span className="text-xs text-amber-400 font-semibold">HEC & University Academic Syllabus</span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
              Mukammal Nisab-e-Taleem (Course Prospectus & Learning Outcomes)
            </h3>
            <p className="text-xs text-slate-300">
              CLO-1 se CLO-5, Theory vs Lab contact hours, key parameters (sep, end), aur grading policy.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {onNavigateToAnalytics && (
            <button
              onClick={onNavigateToAnalytics}
              className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold rounded-xl text-xs transition-all shadow-sm active:scale-95 whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>📊 Progress Analytics</span>
            </button>
          )}

          {onNavigateToSyllabus && (
            <button
              onClick={onNavigateToSyllabus}
              className="w-full sm:w-auto px-4 py-2.5 bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md active:scale-95 whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>📜 Academic Syllabus</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Day by Day Schedule Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            <span>Rozana Ka Schedule ({totalDays} Din)</span>
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Har din mukammal karne par checkbox mark karein
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentTrack.days.map((day) => {
            const isDone = completedDays.includes(day.dayNumber);
            const isCurrent = day.dayNumber === nextActiveDay;

            return (
              <div
                key={day.dayNumber}
                className={`rounded-xl border transition-all p-5 flex flex-col justify-between ${
                  isDone
                    ? 'bg-emerald-50/50 dark:bg-slate-900/60 border-emerald-300/60 dark:border-emerald-900/40 text-slate-700 dark:text-slate-300'
                    : isCurrent
                    ? 'bg-white dark:bg-slate-900 border-amber-400 dark:border-amber-500/70 shadow-md ring-1 ring-amber-300/30'
                    : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs'
                }`}
              >
                <div>
                  {/* Top Bar for each day */}
                  <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                        isDone 
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700/50' 
                          : isCurrent
                          ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-600/50'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {day.dayNumber}
                      </span>
                      <div>
                        <h4 className={`text-sm font-bold ${isCurrent ? 'text-amber-800 dark:text-amber-300' : 'text-slate-900 dark:text-white'}`}>
                          {day.title[language] || day.title.roman_urdu}
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {day.durationMinutes} minutes
                        </span>
                      </div>
                    </div>

                    {/* Completion Checkbox */}
                    <button
                      onClick={() => handleToggleDayComplete(day.dayNumber)}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                        isDone
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/50'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700'
                      }`}
                      title={isDone ? 'Mark as incomplete' : 'Mark day as complete'}
                    >
                      <Check className={`w-3.5 h-3.5 stroke-[3] ${isDone ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`} />
                      <span className="font-semibold">{isDone ? 'Done (+25 XP)' : 'Mark Done'}</span>
                    </button>
                  </div>

                  {/* Day Summary */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {day.description[language] || day.description.roman_urdu}
                  </p>

                  {/* Tasks List */}
                  <div className="mt-3 bg-slate-50 dark:bg-slate-950/60 p-3 rounded-lg border border-slate-200 dark:border-slate-800/70">
                    <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider block mb-1.5">
                      Aaj Ke Targets (Checklist):
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      {(day.tasks[language] || day.tasks.roman_urdu).map((t, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-amber-500 font-bold shrink-0">·</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Day Navigation Action Buttons */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => onNavigateToLesson(day.lessonId)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    <span>Lesson Kholein</span>
                  </button>

                  {onNavigateToDayExam ? (
                    <button
                      onClick={() => onNavigateToDayExam(day.dayNumber)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer ring-1 ring-amber-400"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-950" />
                      <span>Din {day.dayNumber} Exam (10 Qs) 📝</span>
                    </button>
                  ) : day.dayNumber === 1 && onNavigateToDay1Exam && (
                    <button
                      onClick={onNavigateToDay1Exam}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer ring-1 ring-amber-400"
                    >
                      <FileText className="w-3.5 h-3.5 text-slate-950" />
                      <span>Day 1 Exam (10 Qs) 📝</span>
                    </button>
                  )}

                  {day.challengeId && (
                    <button
                      onClick={() => onNavigateToPractice(day.challengeId)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
                    >
                      <Code2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                      <span>Practice Karein</span>
                    </button>
                  )}

                  {day.quizId && (
                    <button
                      onClick={() => onNavigateToQuiz(day.quizId)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                      <span>Quiz Dein</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Python Seekhne Ke 3 Sunheri Usool (Study Tips) */}
      <div className="mt-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          <span>Python Seekhne Ke 3 Sunheri Usool (Golden Rules)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-amber-700 dark:text-amber-400 font-bold text-sm block mb-1">
              1. Rozana Thoda Thoda (Consistency)
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Hafte mein aik din 5 ghante parhne se behtar hai ke aap rozana 45 minute regular dein. Dimaagh har din naye concepts ko pakka karta hai.
            </p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-emerald-700 dark:text-emerald-400 font-bold text-sm block mb-1">
              2. Hathon Se Code Likhein (Practice)
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Sirf video dekhne ya lesson parhne se programming nahi aati. Har example ko Playground mein khud type karein aur run karein.
            </p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
            <span className="text-sky-700 dark:text-sky-400 font-bold text-sm block mb-1">
              3. Errors Se Ghabrana Mana Hai
            </span>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Jab syntax error ya red message aaye to pareshaan na hon. Error message ko ghaur se parhein—woh bata raha hota hai ke masla kahan hai!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
