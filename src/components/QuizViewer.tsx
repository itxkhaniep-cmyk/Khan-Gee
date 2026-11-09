import React, { useState } from 'react';
import { Quiz, UserProgress, Language } from '../types';
import { quizzesData } from '../data/quizzesData';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ArrowRight, 
  Check, 
  BookOpen, 
  Flame,
  HelpCircle
} from 'lucide-react';

interface QuizViewerProps {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  language: Language;
  initialQuizId?: string;
  onNavigateToLesson: (lessonId: string) => void;
}

export const QuizViewer: React.FC<QuizViewerProps> = ({
  progress,
  onUpdateProgress,
  language,
  initialQuizId,
  onNavigateToLesson
}) => {
  const [selectedQuizId, setSelectedQuizId] = useState<string>(
    initialQuizId || quizzesData[0]?.id || 'quiz-1'
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const currentQuiz = quizzesData.find(q => q.id === selectedQuizId) || quizzesData[0];
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const userQuizRecord = progress.quizScores[currentQuiz.id];

  const handleSelectQuiz = (quizId: string) => {
    setSelectedQuizId(quizId);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCorrectCount(0);
    setIsQuizCompleted(false);
  };

  const handleOptionClick = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedOption === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Quiz finished!
      setIsQuizCompleted(true);
      const finalScore = correctCount + (selectedOption === currentQuestion.correctAnswerIndex ? 1 : 0);
      const passed = finalScore >= (currentQuiz.passingScore || Math.ceil(currentQuiz.questions.length * 0.7));

      // Save to progress
      onUpdateProgress(prev => {
        const oldRecord = prev.quizScores[currentQuiz.id];
        const prevPassed = oldRecord?.passed || false;
        const xpBonus = !prevPassed && passed ? currentQuiz.xpReward : 0;

        return {
          ...prev,
          totalXp: prev.totalXp + xpBonus,
          quizScores: {
            ...prev.quizScores,
            [currentQuiz.id]: {
              score: Math.max(finalScore, oldRecord?.score || 0),
              total: currentQuiz.questions.length,
              passed: passed || prevPassed,
              completedAt: new Date().toISOString()
            }
          }
        };
      });
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCorrectCount(0);
    setIsQuizCompleted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Quiz Header Banner */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
            <span>Python Imtehanaat & Quizzes</span>
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            {language === 'roman_urdu' && "Har module ke baad apna knowledge test karein aur XP earn karein. Score hamesha mehfooz rehta hai."}
            {language === 'english' && "Validate your understanding with comprehensive topic-by-topic quizzes and explanations."}
            {language === 'urdu' && "ہر سبق کے بعد اپنے علم کا امتحان لیں اور اپنی سمجھ کو پختہ کریں۔"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Quiz Selector (4 cols) */}
        <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1">
          <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 px-1">
            Available Quizzes ({quizzesData.length})
          </h3>

          {quizzesData.map((quiz, idx) => {
            const isSelected = quiz.id === selectedQuizId;
            const record = progress.quizScores[quiz.id];

            return (
              <div
                key={quiz.id}
                onClick={() => handleSelectQuiz(quiz.id)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all select-none ${
                  isSelected
                    ? 'bg-amber-500/10 dark:bg-slate-800/95 border-amber-400 dark:border-amber-500/70 shadow-sm ring-1 ring-amber-300/40'
                    : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      <span className="font-bold text-amber-600 dark:text-amber-400">Quiz #{idx + 1}</span>
                      <span>·</span>
                      <span>{quiz.questions.length} Sawalaat</span>
                    </div>

                    <h4 className={`text-sm font-semibold leading-snug ${
                      isSelected ? 'text-amber-800 dark:text-amber-300 font-bold' : 'text-slate-900 dark:text-slate-200'
                    }`}>
                      {quiz.title[language] || quiz.title.roman_urdu}
                    </h4>
                  </div>

                  <div className="shrink-0 mt-1">
                    {record?.passed ? (
                      <span className="flex items-center gap-1 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-600/40">
                        <Check className="w-3 h-3 stroke-[3]" />
                        {record.score}/{record.total}
                      </span>
                    ) : record ? (
                      <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {record.score}/{record.total}
                      </span>
                    ) : (
                      <span className="text-xs font-mono font-semibold text-amber-600 dark:text-slate-500">
                        +{quiz.xpReward} XP
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Quiz Active Runner (8 cols) */}
        <div className="lg:col-span-8">
          {!isQuizCompleted ? (
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col min-h-[500px]">
              {/* Question Progress Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 text-xs">
                <div>
                  <span className="text-amber-600 dark:text-amber-400 font-mono font-bold">
                    Sawal {currentQuestionIndex + 1} of {currentQuiz.questions.length}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                    {currentQuiz.title[language] || currentQuiz.title.roman_urdu}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-slate-600 dark:text-slate-400 font-mono font-semibold">
                    Score: {correctCount}/{currentQuestionIndex}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 dark:bg-slate-950 rounded-full h-1.5 my-4 overflow-hidden border border-slate-200 dark:border-slate-800">
                <div 
                  className="bg-amber-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100}%` }}
                />
              </div>

              {/* Question Body */}
              <div className="my-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
                  {currentQuestion.question[language] || currentQuestion.question.roman_urdu}
                </h3>

                {/* Optional Code Snippet */}
                {currentQuestion.codeSnippet && (
                  <pre className="mt-3 p-3 bg-slate-900 border border-slate-800 rounded-lg font-mono-code text-xs text-sky-300 overflow-x-auto shadow-inner leading-relaxed">
                    {currentQuestion.codeSnippet}
                  </pre>
                )}
              </div>

              {/* Options List */}
              <div className="space-y-2.5 my-2 flex-1">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctAnswerIndex;

                  let optionStyle = 'bg-slate-50 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-500 text-emerald-900 dark:text-emerald-200 font-medium';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'bg-rose-50 dark:bg-red-950/60 border-rose-400 dark:border-red-500 text-rose-900 dark:text-red-200';
                    } else {
                      optionStyle = 'bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-900 text-slate-400 dark:text-slate-500 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyle = 'bg-amber-50 dark:bg-slate-800 border-amber-400 dark:border-amber-500 text-amber-900 dark:text-amber-300 font-semibold shadow-xs ring-1 ring-amber-300/40';
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => handleOptionClick(idx)}
                      className={`p-3.5 rounded-xl border cursor-pointer select-none transition-all flex items-center justify-between text-xs sm:text-sm ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 flex items-center justify-center font-mono text-xs font-bold shrink-0 text-slate-700 dark:text-slate-300 shadow-xs">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="font-medium">{opt[language] || opt.roman_urdu}</span>
                      </div>

                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 dark:text-red-400 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation Reveal */}
              {isAnswerSubmitted && (
                <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-2 mb-1.5 font-bold text-amber-700 dark:text-amber-400">
                    <HelpCircle className="w-4 h-4" />
                    <span>Wazahat (Explanation):</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    {currentQuestion.explanation[language] || currentQuestion.explanation.roman_urdu}
                  </p>
                </div>
              )}

              {/* Footer Controls */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={handleRestartQuiz}
                  className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors cursor-pointer font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restart Quiz</span>
                </button>

                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className={`px-5 py-2 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer ${
                      selectedOption !== null
                        ? 'bg-amber-600 hover:bg-amber-500 text-white active:scale-95'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    Submit Jawab
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="flex items-center gap-1.5 px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                  >
                    <span>
                      {currentQuestionIndex < currentQuiz.questions.length - 1 ? 'Agla Sawal (Next)' : 'Nateeja Dekhein (Results)'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/40 flex items-center justify-center mx-auto mb-4 text-amber-600 dark:text-amber-400">
                <Award className="w-8 h-8" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Imtehan Mukammal!
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {currentQuiz.title[language] || currentQuiz.title.roman_urdu}
              </p>

              <div className="my-6 inline-block bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="text-4xl font-extrabold font-mono text-slate-900 dark:text-white">
                  {correctCount} / {currentQuiz.questions.length}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {correctCount >= currentQuiz.passingScore ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      🎉 Mubarak ho! Aapne ye quiz paas kar liya! (+{currentQuiz.xpReward} XP)
                    </span>
                  ) : (
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">
                      Paas hone ke liye {currentQuiz.passingScore} sahi jawab zaroori hain. Dobara koshish karein!
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleRestartQuiz}
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retry Quiz</span>
                </button>

                <button
                  onClick={() => onNavigateToLesson(currentQuiz.lessonId)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors shadow-sm cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Wapas Lesson Dekhein</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
