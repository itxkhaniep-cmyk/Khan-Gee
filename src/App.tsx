import React, { useState } from 'react';
import { UserProgress, Language, BackgroundTheme, NavigationTab } from './types';
import { loadUserProgress, saveUserProgress } from './services/storage';
import { Header } from './components/Header';
import { StudyPlanRoadmap } from './components/StudyPlanRoadmap';
import { LessonViewer } from './components/LessonViewer';
import { PracticeChallenges } from './components/PracticeChallenges';
import { QuizViewer } from './components/QuizViewer';
import { CodePlayground } from './components/CodePlayground';
import { NotebookView } from './components/NotebookView';
import { BackupAndStatsModal } from './components/BackupAndStatsModal';
import { XmlAutomationLab } from './components/XmlAutomationLab';
import { ShareModal } from './components/ShareModal';
import { Day1ExamHall } from './components/Day1ExamHall';
import { AiUstadChatbot } from './components/AiUstadChatbot';
import { WorkspaceHub } from './components/WorkspaceHub';
import { WebStudio } from './components/WebStudio';
import { AcademicSyllabusView } from './components/AcademicSyllabusView';
import { StudentAnalytics } from './components/StudentAnalytics';
import { Bot, MessageCircle } from 'lucide-react';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [activeTab, setActiveTab] = useState<NavigationTab>('roadmap');
  const [selectedChallengeId, setSelectedChallengeId] = useState<string | undefined>(undefined);
  const [selectedQuizId, setSelectedQuizId] = useState<string | undefined>(undefined);
  const [selectedExamDay, setSelectedExamDay] = useState<number>(1);
  const [isBackupModalOpen, setIsBackupModalOpen] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isFloatingAiOpen, setIsFloatingAiOpen] = useState<boolean>(false);
  const [aiContext, setAiContext] = useState<string>('PySeekho Python Interactive Learning App');
  const [aiInitialQuery, setAiInitialQuery] = useState<string>('');
  const [playgroundPreloadCode, setPlaygroundPreloadCode] = useState<string | undefined>(undefined);

  // Auto-save whenever progress updates
  const handleUpdateProgress = (updater: (prev: UserProgress) => UserProgress) => {
    setProgress(prev => {
      const next = updater(prev);
      saveUserProgress(next);
      return next;
    });
  };

  const handleThemeModeToggle = () => {
    handleUpdateProgress(prev => {
      const nextMode = prev.themeMode === 'dark' ? 'light' : 'dark';
      // Sync with body element
      if (nextMode === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      return {
        ...prev,
        themeMode: nextMode
      };
    });
  };

  const handleLanguageChange = (lang: Language) => {
    handleUpdateProgress(prev => ({
      ...prev,
      language: lang
    }));
  };

  const handleThemeChange = (theme: BackgroundTheme) => {
    handleUpdateProgress(prev => ({
      ...prev,
      bgTheme: theme
    }));
  };

  const handleToggleEyeShield = () => {
    handleUpdateProgress(prev => ({
      ...prev,
      eyeComfortShield: !prev.eyeComfortShield
    }));
  };

  // Cross navigation handlers
  const handleNavigateToPractice = (challengeId?: string) => {
    if (challengeId) setSelectedChallengeId(challengeId);
    setActiveTab('practice');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToQuiz = (quizId?: string) => {
    if (quizId) setSelectedQuizId(quizId);
    setActiveTab('quizzes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToLesson = (lessonId: string) => {
    // Navigate to lessons tab and focus on this lesson
    setActiveTab('lessons');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToDayExam = (dayNum: number = 1) => {
    setSelectedExamDay(dayNum);
    setActiveTab('day1_exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAskAi = (context: string, initialPrompt: string) => {
    setAiContext(context);
    setAiInitialQuery(initialPrompt);
    setIsFloatingAiOpen(true);
  };

  const currentTheme: BackgroundTheme = progress.bgTheme || 'fresh';
  const isDark = progress.themeMode === 'dark';

  const themeClassMap: Record<BackgroundTheme, string> = {
    fresh: 'theme-fresh',
    mint: 'theme-mint',
    sky: 'theme-sky',
    warm: 'theme-warm',
    soft_slate: 'theme-soft_slate',
    sapphire: 'theme-sky',
    forest: 'theme-mint',
    obsidian: 'theme-soft_slate'
  };

  const ambientGlows: Record<BackgroundTheme, { top: string; right: string; bottom: string }> = {
    fresh: {
      top: isDark ? 'bg-sky-600/15' : 'bg-sky-400/10',
      right: isDark ? 'bg-indigo-600/10' : 'bg-amber-400/15',
      bottom: isDark ? 'bg-cyan-600/10' : 'bg-emerald-400/10'
    },
    mint: {
      top: isDark ? 'bg-emerald-600/15' : 'bg-emerald-400/12',
      right: isDark ? 'bg-teal-600/10' : 'bg-teal-400/10',
      bottom: isDark ? 'bg-lime-600/10' : 'bg-lime-400/10'
    },
    sky: {
      top: isDark ? 'bg-sky-600/15' : 'bg-sky-400/15',
      right: isDark ? 'bg-blue-600/10' : 'bg-indigo-400/10',
      bottom: isDark ? 'bg-cyan-600/10' : 'bg-cyan-400/10'
    },
    warm: {
      top: isDark ? 'bg-amber-600/15' : 'bg-amber-400/15',
      right: isDark ? 'bg-orange-600/10' : 'bg-orange-400/10',
      bottom: isDark ? 'bg-rose-600/10' : 'bg-yellow-400/10'
    },
    soft_slate: {
      top: isDark ? 'bg-violet-600/10' : 'bg-slate-400/10',
      right: isDark ? 'bg-slate-700/10' : 'bg-indigo-400/10',
      bottom: isDark ? 'bg-blue-600/10' : 'bg-sky-400/10'
    },
    sapphire: {
      top: 'bg-sky-600/15',
      right: 'bg-indigo-600/10',
      bottom: 'bg-cyan-600/10'
    },
    forest: {
      top: 'bg-emerald-600/15',
      right: 'bg-teal-600/10',
      bottom: 'bg-lime-600/10'
    },
    obsidian: {
      top: 'bg-violet-600/10',
      right: 'bg-slate-700/10',
      bottom: 'bg-blue-600/10'
    }
  };

  const activeGlow = ambientGlows[currentTheme] || ambientGlows.fresh;

  return (
    <div className={`min-h-screen relative text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 ${isDark ? 'dark' : ''} ${themeClassMap[currentTheme]} ${progress.eyeComfortShield ? 'eye-comfort-shield' : ''} ${progress.language === 'urdu' ? 'font-urdu-text' : ''}`}>
      {/* Eye-Pleasing Subtle Blueprint Dot Grid */}
      <div className="fixed inset-0 bg-mesh-grid pointer-events-none opacity-60 z-0" />

      {/* Soothing Ambient Radial Glows (Designed for Eye Comfort and Focus) */}
      <div className={`fixed -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none z-0 transition-colors duration-700 ${activeGlow.top}`} />
      <div className={`fixed top-1/4 -right-36 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none z-0 transition-colors duration-700 ${activeGlow.right}`} />
      <div className={`fixed -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none z-0 transition-colors duration-700 ${activeGlow.bottom}`} />

      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        progress={progress}
        onLanguageChange={handleLanguageChange}
        onThemeModeToggle={handleThemeModeToggle}
        onThemeChange={handleThemeChange}
        onToggleEyeShield={handleToggleEyeShield}
        onOpenBackupModal={() => setIsBackupModalOpen(true)}
        onOpenShareModal={() => setIsShareModalOpen(true)}
      />

      {/* Main Body Content based on Tab */}
      <main className="flex-1 pb-16 relative z-10">
        {activeTab === 'roadmap' && (
          <StudyPlanRoadmap
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            language={progress.language}
            onNavigateToLesson={handleNavigateToLesson}
            onNavigateToPractice={handleNavigateToPractice}
            onNavigateToQuiz={handleNavigateToQuiz}
            onNavigateToDay1Exam={() => handleNavigateToDayExam(1)}
            onNavigateToDayExam={handleNavigateToDayExam}
            onNavigateToSyllabus={() => {
              setActiveTab('syllabus');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToAnalytics={() => {
              setActiveTab('analytics');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'syllabus' && (
          <AcademicSyllabusView
            progress={progress}
            onSelectLesson={handleNavigateToLesson}
            onSelectDayExam={handleNavigateToDayExam}
            onOpenWebStudio={() => {
              setActiveTab('web_studio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAnalytics={() => {
              setActiveTab('analytics');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'analytics' && (
          <StudentAnalytics
            progress={progress}
            language={progress.language}
            onNavigateToLesson={handleNavigateToLesson}
            onNavigateToPractice={handleNavigateToPractice}
            onNavigateToQuiz={handleNavigateToQuiz}
            onNavigateToDayExam={handleNavigateToDayExam}
            onNavigateToSyllabus={() => {
              setActiveTab('syllabus');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'lessons' && (
          <LessonViewer
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            language={progress.language}
            onNavigateToPractice={handleNavigateToPractice}
            onNavigateToQuiz={handleNavigateToQuiz}
            onAskAi={handleAskAi}
            onNavigateToDayExam={handleNavigateToDayExam}
          />
        )}

        {(activeTab === 'day1_exam' || activeTab === 'day_exams') && (
          <Day1ExamHall
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            language={progress.language}
            initialDay={selectedExamDay}
            onAskAi={handleAskAi}
            onNavigateToRoadmap={() => { setActiveTab('roadmap'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            onNavigateToLessons={() => { setActiveTab('lessons'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          />
        )}

        {activeTab === 'ai_tutor' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <AiUstadChatbot
              language={progress.language}
              currentContext={aiContext}
              initialQuery={aiInitialQuery}
              onNavigateToPlayground={() => {
                setActiveTab('playground');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'workspace' && (
          <WorkspaceHub
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            language={progress.language}
            onNavigateToPlayground={(code) => {
              if (code) setPlaygroundPreloadCode(code);
              setActiveTab('playground');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'web_studio' && (
          <WebStudio
            language={progress.language}
            onNavigateToLesson={handleNavigateToLesson}
            onAskAi={handleAskAi}
          />
        )}

        {activeTab === 'xml_lab' && (
          <XmlAutomationLab
            progress={progress}
            onNavigateToLesson={handleNavigateToLesson}
            onNavigateToPractice={handleNavigateToPractice}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeChallenges
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            language={progress.language}
            initialChallengeId={selectedChallengeId}
            onNavigateToLesson={handleNavigateToLesson}
          />
        )}

        {activeTab === 'quizzes' && (
          <QuizViewer
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            language={progress.language}
            initialQuizId={selectedQuizId}
            onNavigateToLesson={handleNavigateToLesson}
          />
        )}

        {activeTab === 'playground' && (
          <CodePlayground
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            language={progress.language}
            onNavigateToLesson={handleNavigateToLesson}
            initialCode={playgroundPreloadCode}
          />
        )}

        {activeTab === 'notebook' && (
          <NotebookView
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            language={progress.language}
          />
        )}
      </main>

      {/* Persistent Backup & Progress Overview Modal */}
      <BackupAndStatsModal
        isOpen={isBackupModalOpen}
        onClose={() => setIsBackupModalOpen(false)}
        progress={progress}
        onUpdateProgress={handleUpdateProgress}
        language={progress.language}
        onOpenAnalytics={() => {
          setIsBackupModalOpen(false);
          setActiveTab('analytics');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Share with Friends / Public Link Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        language={progress.language}
      />

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/80 backdrop-blur-md py-6 px-4 text-center text-xs text-slate-600 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
            <span className="font-medium">PySeekho · Python Seekhein, Practice Karein, Test Karein aur Kamyab Banein</span>
          </p>
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
            <button onClick={() => setIsShareModalOpen(true)} className="text-amber-600 dark:text-amber-400 font-bold hover:underline transition-colors cursor-pointer flex items-center gap-1">
              <span>🚀 Link Share Karein</span>
            </button>
            <span>·</span>
            <button onClick={() => setIsBackupModalOpen(true)} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer font-medium">
              Data Backup & Status
            </button>
            <span>·</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">Browser Auto-Save Active</span>
            <span>·</span>
            <button onClick={() => { setActiveTab('playground'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer font-medium">
              Interactive Python Runner
            </button>
          </div>
        </div>
      </footer>
      {/* Floating AI Ustad Chatbot Drawer */}
      {isFloatingAiOpen && (
        <AiUstadChatbot
          language={progress.language}
          currentContext={aiContext}
          initialQuery={aiInitialQuery}
          isFloating={true}
          onCloseFloating={() => setIsFloatingAiOpen(false)}
          onNavigateToPlayground={() => {
            setIsFloatingAiOpen(false);
            setActiveTab('playground');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* Floating Launcher Button for AI Ustad */}
      {!isFloatingAiOpen && (
        <button
          onClick={() => {
            setAiContext('General Python Help');
            setAiInitialQuery('');
            setIsFloatingAiOpen(true);
          }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-2xl shadow-xl hover:shadow-2xl active:scale-95 transition-all cursor-pointer ring-2 ring-emerald-400/50 group"
          title="Python ka koi bhi sawal ya doubt AI Ustad se poochein"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white animate-bounce" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          </div>
          <span className="font-extrabold tracking-wide">AI Ustad Se Poochein</span>
        </button>
      )}
    </div>
  );
}
