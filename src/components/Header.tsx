import React from 'react';
import { UserProgress, Language, BackgroundTheme, NavigationTab } from '../types';
import { Play, BookOpen, Code2, Award, Notebook, ShieldCheck, Globe, Eye, Palette, Sun, Moon, Sparkles, Share2, FileText, Bot, Cloud, BarChart3 } from 'lucide-react';

interface HeaderProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  progress: UserProgress;
  onLanguageChange: (lang: Language) => void;
  onThemeModeToggle: () => void;
  onThemeChange: (theme: BackgroundTheme) => void;
  onToggleEyeShield: () => void;
  onOpenBackupModal: () => void;
  onOpenShareModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  progress,
  onLanguageChange,
  onThemeModeToggle,
  onThemeChange,
  onToggleEyeShield,
  onOpenBackupModal,
  onOpenShareModal,
}) => {
  const currentTheme = progress.bgTheme || 'fresh';
  const isEyeShieldActive = progress.eyeComfortShield || false;
  const isDarkMode = progress.themeMode === 'dark';

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <div 
          onClick={() => setActiveTab('roadmap')}
          className="flex items-center gap-2.5 cursor-pointer select-none shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-sky-500 to-emerald-500 flex items-center justify-center shadow-md">
            <span className="font-mono-code font-extrabold text-white text-xl tracking-tighter drop-shadow-sm">Py</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
            PySeekho
          </span>
        </div>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 text-sm font-medium">
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'roadmap'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-300/40 dark:border-amber-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <span>📅 Study Plan</span>
            <span className="text-[10px] bg-amber-500/20 text-amber-700 dark:text-amber-300 px-1 py-0.2 rounded font-mono font-bold">
              Roadmap
            </span>
          </button>

          <button
            onClick={() => setActiveTab('syllabus')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'syllabus'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-300/40 dark:border-amber-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <span>📜 Syllabus</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-1 py-0.2 rounded font-mono font-bold">
              CS-101
            </span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-300/40 dark:border-emerald-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Analytics</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-1 py-0.2 rounded font-mono font-bold">
              D3 / Charts
            </span>
          </button>

          <button
            onClick={() => setActiveTab('lessons')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'lessons'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-300/40 dark:border-amber-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>Lessons</span>
          </button>

          <button
            onClick={() => setActiveTab('day1_exam')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'day1_exam' || activeTab === 'day_exams'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-300/40 dark:border-amber-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>Daily Exams</span>
            <span className="text-[10px] bg-red-500/15 text-red-600 dark:text-red-400 px-1 py-0.2 rounded font-mono font-bold">
              14 Days (140 Qs)
            </span>
          </button>

          <button
            onClick={() => setActiveTab('ai_tutor')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'ai_tutor'
                ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-300/40 dark:border-emerald-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Bot className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>AI Ustad</span>
            <span className="text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-1 py-0.2 rounded font-mono font-bold">
              Online Doubts
            </span>
          </button>

          <button
            onClick={() => setActiveTab('workspace')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'workspace'
                ? 'bg-sky-500/15 text-sky-700 dark:text-sky-400 font-semibold border border-sky-300/40 dark:border-sky-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Cloud className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            <span>Google Workspace</span>
            <span className="text-[10px] bg-sky-500/15 text-sky-600 dark:text-sky-400 px-1 py-0.2 rounded font-mono font-bold">
              Drive / Sheets
            </span>
          </button>

          <button
            onClick={() => setActiveTab('web_studio')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'web_studio'
                ? 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 font-semibold border border-indigo-300/40 dark:border-indigo-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Web & App Studio</span>
            <span className="text-[10px] bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-1 py-0.2 rounded font-mono font-bold">
              Live HTML / API
            </span>
          </button>

          <button
            onClick={() => setActiveTab('xml_lab')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'xml_lab'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-300/40 dark:border-amber-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>XML ➔ CSV Lab</span>
            <span className="text-[10px] bg-amber-500/20 text-amber-700 dark:text-amber-300 px-1 py-0.2 rounded font-mono font-bold">
              AI Code
            </span>
          </button>

          <button
            onClick={() => setActiveTab('practice')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'practice'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-300/40 dark:border-amber-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Practice</span>
            {progress.completedChallengeIds.length > 0 && (
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                ({progress.completedChallengeIds.length})
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('quizzes')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'quizzes'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-300/40 dark:border-amber-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Quizzes</span>
          </button>

          <button
            onClick={() => setActiveTab('playground')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'playground'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-300/40 dark:border-amber-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Play className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Playground</span>
          </button>

          <button
            onClick={() => setActiveTab('notebook')}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'notebook'
                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-300/40 dark:border-amber-500/20 shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Notebook className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Notebook</span>
          </button>
        </nav>

        {/* Zone 3: Actions & Theme Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Light / Dark Quick Toggle (Roshan vs Sham) */}
          <button
            onClick={onThemeModeToggle}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all cursor-pointer shadow-xs active:scale-95"
            title={isDarkMode ? 'Roshan (Light) mode chunein' : 'Sham (Dark) mode chunein'}
          >
            {isDarkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Roshan</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-600" />
                <span className="hidden sm:inline">Sham</span>
              </>
            )}
          </button>

          {/* Theme Mood Selector */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700/80 rounded-lg p-0.5 text-xs" title="Ankhon ke liye fit background">
            <Palette className="w-3.5 h-3.5 ml-2 text-slate-500 dark:text-slate-400 shrink-0" />
            <select
              value={currentTheme}
              onChange={(e) => onThemeChange(e.target.value as BackgroundTheme)}
              className="bg-transparent text-slate-800 dark:text-slate-200 px-2 py-1 pr-6 font-medium focus:outline-none cursor-pointer appearance-none text-[11px]"
              title="Aankhon ke liye pasandeeda background rang chunein"
            >
              <option value="fresh" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">☀️ Fresh Pearl (Roshan)</option>
              <option value="mint" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">🌿 Mint Sage (Aankhon Ka Sukoon)</option>
              <option value="sky" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">🌊 Sky Breeze (Neela & Taza)</option>
              <option value="warm" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">☕ Warm Cream (Kitabi Paper)</option>
              <option value="soft_slate" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">🌙 Soft Twilight (Mild Dark)</option>
            </select>
          </div>

          {/* Eye Shield Toggle */}
          <button
            onClick={onToggleEyeShield}
            className={`hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer ${
              isEyeShieldActive
                ? 'bg-amber-100 dark:bg-amber-950/80 border-amber-400 dark:border-amber-600/70 text-amber-900 dark:text-amber-300 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800/80 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
            title="Aankhon ki hifazat ke liye blue-light shield toggle karein"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{isEyeShieldActive ? 'Eye Shield: ON' : 'Eye Shield'}</span>
          </button>

          {/* Language Switcher */}
          <div className="relative flex items-center bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700/80 rounded-lg p-0.5 text-xs">
            <Globe className="w-3.5 h-3.5 ml-2 text-slate-500 dark:text-slate-400 shrink-0" />
            <select
              value={progress.language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-transparent text-slate-800 dark:text-slate-200 px-2 py-1 pr-5 font-medium focus:outline-none cursor-pointer appearance-none text-[11px]"
              title="Zabaan tabdeel karein"
            >
              <option value="roman_urdu" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Roman Urdu</option>
              <option value="english" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">English</option>
              <option value="urdu" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">اردو</option>
            </select>
          </div>

          {/* Backup & Progress button */}
          <button
            onClick={onOpenBackupModal}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors whitespace-nowrap shadow-sm active:scale-95 cursor-pointer"
            title="Aapka data mehfooz hai"
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="hidden sm:inline">Progress Mehfooz</span>
            <span className="sm:hidden">Mehfooz</span>
          </button>

          {/* Share App Link Button */}
          <button
            onClick={onOpenShareModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 rounded-lg transition-all whitespace-nowrap shadow-sm hover:shadow-md active:scale-95 cursor-pointer ring-1 ring-amber-400/50"
            title="PySeekho ka public link doston aur groups ke sath share karein"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Karein</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="flex md:hidden border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 justify-around items-center bg-slate-50 dark:bg-slate-900/90 text-xs overflow-x-auto">
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'roadmap' ? 'text-amber-600 dark:text-amber-400 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Plan
        </button>
        <button
          onClick={() => setActiveTab('syllabus')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'syllabus' ? 'text-amber-600 dark:text-amber-400 font-bold bg-amber-500/15' : 'text-slate-600 dark:text-slate-400'}`}
        >
          📜 Syllabus
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'analytics' ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/15' : 'text-slate-600 dark:text-slate-400'}`}
        >
          📊 Analytics
        </button>
        <button
          onClick={() => setActiveTab('lessons')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'lessons' ? 'text-amber-600 dark:text-amber-400 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Lessons
        </button>
        <button
          onClick={() => setActiveTab('day1_exam')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'day1_exam' ? 'text-amber-600 dark:text-amber-400 font-bold bg-amber-500/15' : 'text-slate-600 dark:text-slate-400'}`}
        >
          📝 14 Days Exam
        </button>
        <button
          onClick={() => setActiveTab('ai_tutor')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'ai_tutor' ? 'text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/15' : 'text-slate-600 dark:text-slate-400'}`}
        >
          🤖 AI Ustad
        </button>
        <button
          onClick={() => setActiveTab('workspace')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'workspace' ? 'text-sky-600 dark:text-sky-400 font-bold bg-sky-500/15' : 'text-slate-600 dark:text-slate-400'}`}
        >
          ☁️ Workspace
        </button>
        <button
          onClick={() => setActiveTab('web_studio')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'web_studio' ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-500/15' : 'text-slate-600 dark:text-slate-400'}`}
        >
          🌐 Web Studio
        </button>
        <button
          onClick={() => setActiveTab('xml_lab')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'xml_lab' ? 'text-amber-600 dark:text-amber-400 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          ⚡ XML Lab
        </button>
        <button
          onClick={() => setActiveTab('practice')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'practice' ? 'text-amber-600 dark:text-amber-400 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Practice ({progress.completedChallengeIds.length})
        </button>
        <button
          onClick={() => setActiveTab('quizzes')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'quizzes' ? 'text-amber-600 dark:text-amber-400 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Quizzes
        </button>
        <button
          onClick={() => setActiveTab('playground')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'playground' ? 'text-amber-600 dark:text-amber-400 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Runner
        </button>
        <button
          onClick={() => setActiveTab('notebook')}
          className={`px-2 py-1 rounded whitespace-nowrap cursor-pointer ${activeTab === 'notebook' ? 'text-amber-600 dark:text-amber-400 font-bold' : 'text-slate-600 dark:text-slate-400'}`}
        >
          Notes
        </button>
        <button
          onClick={onOpenShareModal}
          className="px-2 py-1 rounded font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 flex items-center gap-1 whitespace-nowrap cursor-pointer"
        >
          <Share2 className="w-3 h-3" />
          <span>Share</span>
        </button>
      </div>
    </header>
  );
};
