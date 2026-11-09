import React, { useState } from 'react';
import { UserProgress, Language } from '../types';
import { exportProgressJson, importProgressJson, defaultUserProgress } from '../services/storage';
import { lessonsData } from '../data/lessonsData';
import { challengesData } from '../data/challengesData';
import { quizzesData } from '../data/quizzesData';
import { 
  ShieldCheck, 
  Download, 
  Upload, 
  RotateCcw, 
  X, 
  Award, 
  CheckCircle2, 
  FileCode, 
  Flame,
  Printer
} from 'lucide-react';

interface BackupAndStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  language: Language;
  onOpenAnalytics?: () => void;
}

export const BackupAndStatsModal: React.FC<BackupAndStatsModalProps> = ({
  isOpen,
  onClose,
  progress,
  onUpdateProgress,
  language,
  onOpenAnalytics
}) => {
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('Python Student');
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleExport = () => {
    exportProgressJson(progress);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const imported = importProgressJson(content);
      if (imported) {
        onUpdateProgress(() => imported);
        setImportStatus('✅ Kamyabi! Tamam progress aur files restore ho gayi hain.');
        setTimeout(() => setImportStatus(null), 3500);
      } else {
        setImportStatus('❌ Ghalti: File format durust nahi hai.');
        setTimeout(() => setImportStatus(null), 3500);
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    if (window.confirm("Kya aap waqai tamam progress reset karna chahte hain? Tamam files aur quiz records wapas shuru ho jayein ge.")) {
      onUpdateProgress(() => defaultUserProgress);
      onClose();
    }
  };

  const totalLessons = lessonsData.length;
  const completedLessons = progress.completedLessonIds.length;
  const totalChallenges = challengesData.length;
  const solvedChallenges = progress.completedChallengeIds.length;
  const totalQuizzes = quizzesData.length;
  const passedQuizzes = Object.values(progress.quizScores).filter(q => q.passed).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/50 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Tamam Detail Mehfooz Hain
              </h2>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                100% Local Auto-Save & Backup Hub
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 dark:text-slate-200">
          {/* Progress Overview Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
              <span className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400 block">
                {completedLessons}/{totalLessons}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block font-medium">Lessons Completed</span>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
              <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 block">
                {solvedChallenges}/{totalChallenges}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block font-medium">Challenges Solved</span>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
              <span className="text-2xl font-bold font-mono text-sky-600 dark:text-sky-400 block">
                {passedQuizzes}/{totalQuizzes}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block font-medium">Quizzes Passed</span>
            </div>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-center shadow-2xs">
              <span className="text-2xl font-bold font-mono text-purple-600 dark:text-purple-400 block">
                {progress.totalXp}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block font-medium">Total XP Earned</span>
            </div>
          </div>

          {onOpenAnalytics && (
            <button
              onClick={onOpenAnalytics}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>📊 Tafseeli Student Analytics & Charts (D3/Recharts) Kholein</span>
            </button>
          )}

          {/* Backup & Restore Action Box */}
          <div className="p-4 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Data Export & Backup (Download Progress)</span>
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Aapka tamam progress (completed lessons, challenges, quiz scores, playground files aur notes) aapke browser me khud-ba-khud mehfooz hai.
              Agar aap doosre computer par shift karna chahte hain ya backup rakhna chahte hain to neeche button se download karein:
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Backup JSON Download Karein</span>
              </button>

              <label className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold cursor-pointer transition-colors shadow-2xs">
                <Upload className="w-4 h-4" />
                <span>Backup Restore Karein</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>
            </div>

            {importStatus && (
              <div className="p-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200">
                {importStatus}
              </div>
            )}
          </div>

          {/* Certificate Generation */}
          <div className="p-4 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-xl space-y-3">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Sanad (Certificate of Achievement)</span>
            </h3>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Apna Naam Likhein"
                className="bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-1.5 outline-none flex-1 shadow-2xs"
              />
              <button
                onClick={() => setShowCertificate(prev => !prev)}
                className="px-4 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-sm"
              >
                {showCertificate ? 'Hide Certificate' : 'Sanad Dekhein'}
              </button>
            </div>

            {showCertificate && (
              <div className="p-6 bg-amber-50/70 dark:bg-slate-900 border-2 border-amber-400 dark:border-amber-500/80 rounded-xl text-center space-y-3 shadow-md relative">
                <div className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold font-mono">
                  Certificate of Python Programming
                </div>
                <h4 className="text-2xl font-serif text-slate-900 dark:text-white font-bold">
                  {userName}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Aapne PySeekho ke zariye Python programming ke bunyadi aur ahem tareen modules, practice challenges, aur quizzes kamyabi se mukammal kiye hain.
                </p>
                <div className="pt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-center gap-4">
                  <span>Score: {progress.totalXp} XP</span>
                  <span>·</span>
                  <span>Status: Verified Learner</span>
                </div>
              </div>
            )}
          </div>

          {/* Reset Danger Zone */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Naye siray se shuru karna chahte hain?
            </span>
            <button
              onClick={handleReset}
              className="text-xs text-rose-600 dark:text-red-400 hover:text-rose-700 dark:hover:text-red-300 font-medium px-2 py-1 rounded hover:bg-rose-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
            >
              Reset All Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
