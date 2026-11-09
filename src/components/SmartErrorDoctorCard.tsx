import React from 'react';
import { ErrorDiagnosis } from '../services/errorDiagnostics';
import { Language } from '../types';
import { 
  Stethoscope, 
  Wand2, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  HelpCircle,
  Lightbulb,
  Sparkles,
  Check
} from 'lucide-react';

interface SmartErrorDoctorCardProps {
  diagnosis: ErrorDiagnosis;
  language: Language;
  onApplyFix?: (fixedCode: string) => void;
  onNavigateToLesson: (lessonId: string) => void;
}

export const SmartErrorDoctorCard: React.FC<SmartErrorDoctorCardProps> = ({
  diagnosis,
  language,
  onApplyFix,
  onNavigateToLesson,
}) => {
  const title = diagnosis.title[language] || diagnosis.title.roman_urdu;
  const cause = diagnosis.cause[language] || diagnosis.cause.roman_urdu;
  const fix = diagnosis.fixInstruction[language] || diagnosis.fixInstruction.roman_urdu;

  return (
    <div className="mt-4 bg-gradient-to-br from-rose-500/10 via-amber-500/10 to-emerald-500/10 rounded-2xl border-2 border-rose-300 dark:border-rose-900/80 p-5 shadow-md animate-fadeIn text-slate-800 dark:text-slate-100">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3.5 border-b border-rose-200/80 dark:border-rose-900/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-600 text-white flex items-center justify-center shadow-md shrink-0">
            <Stethoscope className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1">
                <span>PySeekho Ghalti Doctor</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block"></span>
                <span>Diagnosis</span>
              </span>
              {diagnosis.lineNumber && (
                <span className="text-[11px] font-mono bg-rose-200 dark:bg-rose-950 text-rose-800 dark:text-rose-300 px-2 py-0.5 rounded-md font-bold">
                  Line {diagnosis.lineNumber} Par Ghalti
                </span>
              )}
            </div>
            <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {title}
            </h4>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          {diagnosis.canAutoFix && diagnosis.suggestedFullCode && onApplyFix && (
            <button
              onClick={() => onApplyFix(diagnosis.suggestedFullCode!)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer ring-2 ring-emerald-400/30"
              title="Aapka code khud theek karke run karein"
            >
              <Wand2 className="w-4 h-4" />
              <span>⚡ Jaadui Auto-Fix (Abhi Theek Karein)</span>
            </button>
          )}

          <button
            onClick={() => onNavigateToLesson(diagnosis.relatedLessonId)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Sabaq Parhein</span>
          </button>
        </div>
      </div>

      {/* 3 Clear Sections answering the User's exact questions */}
      <div className="mt-4 space-y-3.5 text-xs">
        {/* Section 1: Ghalti Ki Wajah */}
        <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-rose-200/80 dark:border-rose-900/40 shadow-xs">
          <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold mb-1">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span className="text-xs font-extrabold uppercase tracking-wide">1. Ghalti Kis Wajah Se Aayi? (The Cause)</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed pl-6 text-xs font-medium">
            {cause}
          </p>
        </div>

        {/* Section 2: Isko Kaise Theek Karein & Kya Hona Chahiye Tha */}
        <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-amber-200/80 dark:border-amber-900/40 shadow-xs">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold mb-1">
            <Lightbulb className="w-4 h-4 shrink-0" />
            <span className="text-xs font-extrabold uppercase tracking-wide">2. Kya Hona Chahiye Tha & Kaise Theek Karein? (The Solution)</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed pl-6 text-xs font-medium">
            {fix}
          </p>
        </div>

        {/* Section 3: Visual Comparison: Wrong vs Correct */}
        {(diagnosis.wrongExample || diagnosis.correctExample) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {diagnosis.wrongExample && (
              <div className="p-3 rounded-xl bg-rose-50/90 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900/60 shadow-xs">
                <span className="text-[11px] font-mono font-bold text-rose-700 dark:text-rose-400 block mb-1 flex items-center gap-1.5">
                  <span>❌ Aapne Yeh Likha (Wrong Code):</span>
                </span>
                <pre className="font-mono-code text-xs text-rose-900 dark:text-rose-200 whitespace-pre-wrap p-2 rounded bg-rose-100/50 dark:bg-rose-900/30">
                  {diagnosis.wrongExample}
                </pre>
              </div>
            )}

            {diagnosis.correctExample && (
              <div className="p-3 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 shadow-xs">
                <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 block mb-1 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>✅ Aese Theek Karein (Correct Code):</span>
                </span>
                <pre className="font-mono-code text-xs text-emerald-900 dark:text-emerald-200 whitespace-pre-wrap p-2 rounded bg-emerald-100/50 dark:bg-emerald-900/30 font-bold">
                  {diagnosis.correctExample}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Footer Breadcrumb Link with direct lesson badge */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-2">
            <span>📚 Is Topic Ka Sabaq:</span>
            <span className="font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
              {diagnosis.relatedLessonTitle}
            </span>
          </div>

          <button
            onClick={() => onNavigateToLesson(diagnosis.relatedLessonId)}
            className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 flex items-center gap-1 font-bold cursor-pointer"
          >
            <span>Is Sabaq Ka Mutala Karein</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
