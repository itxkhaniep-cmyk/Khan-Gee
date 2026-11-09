import React, { useState, useMemo } from 'react';
import { 
  academicSyllabusData, 
  SyllabusModuleUnit, 
  CourseLearningOutcome 
} from '../data/academicSyllabusData';
import { UserProgress } from '../types';

interface AcademicSyllabusViewProps {
  progress: UserProgress;
  onSelectLesson: (lessonId: string) => void;
  onSelectDayExam?: (dayNumber: number) => void;
  onOpenWebStudio?: () => void;
  onOpenAnalytics?: () => void;
}

export const AcademicSyllabusView: React.FC<AcademicSyllabusViewProps> = ({
  progress,
  onSelectLesson,
  onSelectDayExam,
  onOpenWebStudio,
  onOpenAnalytics
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuarter, setSelectedQuarter] = useState<'all' | 'q1' | 'q2' | 'q3' | 'q4'>('all');
  const [languageMode, setLanguageMode] = useState<'bilingual' | 'roman_urdu' | 'english'>('bilingual');
  const [showCloModal, setShowCloModal] = useState(false);
  const [selectedClo, setSelectedClo] = useState<CourseLearningOutcome | null>(null);

  // Filter modules by search and quarter
  const filteredUnits = useMemo(() => {
    return academicSyllabusData.syllabusUnits.filter((unit) => {
      // Quarter filter
      if (selectedQuarter === 'q1' && (unit.moduleIndex < 1 || unit.moduleIndex > 7)) return false;
      if (selectedQuarter === 'q2' && (unit.moduleIndex < 8 || unit.moduleIndex > 18)) return false;
      if (selectedQuarter === 'q3' && (unit.moduleIndex < 19 || unit.moduleIndex > 22)) return false;
      if (selectedQuarter === 'q4' && unit.moduleIndex < 23) return false;

      // Search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();

      const inTitle = 
        unit.title.roman_urdu.toLowerCase().includes(q) ||
        unit.title.english.toLowerCase().includes(q) ||
        unit.unitCode.toLowerCase().includes(q);

      const inTheory = 
        unit.theorySyllabus.roman_urdu.some(t => t.toLowerCase().includes(q)) ||
        unit.theorySyllabus.english.some(t => t.toLowerCase().includes(q));

      const inLab = 
        unit.labPracticalSyllabus.roman_urdu.some(l => l.toLowerCase().includes(q)) ||
        unit.labPracticalSyllabus.english.some(l => l.toLowerCase().includes(q));

      const inParams = unit.keyParametersAndSyntax?.some(
        p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );

      return inTitle || inTheory || inLab || inParams;
    });
  }, [searchQuery, selectedQuarter]);

  const handlePrint = () => {
    window.print();
  };

  const completedCount = useMemo(() => {
    return academicSyllabusData.syllabusUnits.filter(u => 
      progress.completedLessonIds?.includes(u.lessonId)
    ).length;
  }, [progress.completedLessonIds]);

  const progressPercent = Math.round((completedCount / academicSyllabusData.totalModules) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Official Academic Prospectus Header */}
      <div className="bg-slate-900 border-2 border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white">
        {/* Subtle decorative watermark */}
        <div className="absolute -right-12 -top-12 text-slate-800/40 text-9xl font-black select-none pointer-events-none">
          CS101
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center text-2xl shadow-lg">
                📜
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                  {academicSyllabusData.academicDepartment}
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-sm font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    {academicSyllabusData.courseCode}
                  </span>
                  <span className="text-xs text-slate-400">Academic Year 2026</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-sm font-semibold text-slate-200 transition-all flex items-center gap-2 shadow-sm"
                title="Syllabus print karein ya PDF save karein"
              >
                <span>🖨️</span> Print Syllabus (PDF)
              </button>
              {onOpenAnalytics && (
                <button
                  onClick={onOpenAnalytics}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl text-sm font-semibold text-slate-200 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>📊</span> Student Analytics
                </button>
              )}
              {onOpenWebStudio && (
                <button
                  onClick={onOpenWebStudio}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-xl text-sm font-semibold text-white transition-all flex items-center gap-2 shadow-lg shadow-emerald-900/30"
                >
                  <span>🌐</span> Web Studio
                </button>
              )}
            </div>
          </div>

          {/* Course Main Title */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {languageMode === 'english'
                ? academicSyllabusData.courseTitle.english
                : languageMode === 'roman_urdu'
                ? academicSyllabusData.courseTitle.roman_urdu
                : `${academicSyllabusData.courseTitle.english} / ${academicSyllabusData.courseTitle.urdu}`}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              A comprehensive university-grade academic curriculum structured for zero-background fresh students. 
              Covers core syntax, algorithmic logic, defensive exception handling, data engineering pipelines, 
              modern responsive web design (Tailwind CSS), Python FastAPI REST APIs, and full cloud deployment.
            </p>
          </div>

          {/* Key Course Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800/80">
            <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block font-medium">Credit Scheme</span>
              <span className="text-sm font-bold text-amber-300 mt-1 block">
                {academicSyllabusData.creditHours}
              </span>
            </div>
            <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block font-medium">Total Contact Hours</span>
              <span className="text-sm font-bold text-emerald-300 mt-1 block">
                {academicSyllabusData.totalContactHours} Hours (55 Theory + 30 Lab)
              </span>
            </div>
            <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block font-medium">Curriculum Modules</span>
              <span className="text-sm font-bold text-sky-300 mt-1 block">
                {academicSyllabusData.totalModules} Structured Units
              </span>
            </div>
            <div className="bg-slate-800/60 p-3.5 rounded-2xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block font-medium">Passing Threshold</span>
              <span className="text-sm font-bold text-purple-300 mt-1 block">
                60% (60/100 Marks Daily Exams)
              </span>
            </div>
          </div>

          {/* Student Progress Bar */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Syllabus Coverage:
              </div>
              <div className="w-full sm:w-64 h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-xs font-bold font-mono text-emerald-400">
                {completedCount}/{academicSyllabusData.totalModules} ({progressPercent}%)
              </span>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
              <span className="text-slate-400 font-medium">Prerequisite:</span>
              <span className="text-slate-200 font-semibold bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
                Zero Prior Coding Required
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Learning Outcomes (CLOs) Accordion / Matrix */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-lg space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Accreditation & Standards
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-0.5">
              Course Learning Outcomes (CLOs)
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguageMode('bilingual')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                languageMode === 'bilingual'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              Bilingual (English + اردو)
            </button>
            <button
              onClick={() => setLanguageMode('roman_urdu')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                languageMode === 'roman_urdu'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              Roman Urdu
            </button>
            <button
              onClick={() => setLanguageMode('english')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                languageMode === 'english'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              English
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {academicSyllabusData.clos.map((clo) => (
            <div
              key={clo.id}
              onClick={() => {
                setSelectedClo(clo);
                setShowCloModal(true);
              }}
              className="bg-slate-50 dark:bg-slate-800/70 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 p-4 rounded-2xl cursor-pointer transition-all hover:shadow-md group"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {clo.code}
                </span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  {clo.bloomLevel}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {languageMode === 'english'
                  ? clo.title.english
                  : languageMode === 'roman_urdu'
                  ? clo.title.roman_urdu
                  : clo.title.english}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                {languageMode === 'english'
                  ? clo.description.english
                  : clo.description.roman_urdu}
              </p>
              {languageMode === 'bilingual' && (
                <p className="text-xs text-emerald-600/90 dark:text-emerald-400/90 mt-2 font-urdu text-right" dir="rtl">
                  {clo.title.urdu}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Assessment & Grading Policy Breakdown */}
        <div className="pt-5 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
            <span>⚖️</span> Academic Assessment & Grading Policy
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {academicSyllabusData.gradingPolicy.map((item, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {item.component.split('(')[0]}
                  </span>
                  <span className="font-mono text-sm font-black text-amber-500">
                    {item.weight}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Controls & Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search syllabus topics, keywords (e.g. sep, end, while loop, fastapi, exceptions, csv)..."
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕ Clear
              </button>
            )}
          </div>

          {/* Quarter / Semester Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setSelectedQuarter('all')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedQuarter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Units ({academicSyllabusData.syllabusUnits.length})
            </button>
            <button
              onClick={() => setSelectedQuarter('q1')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedQuarter === 'q1'
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Q1: Foundations
            </button>
            <button
              onClick={() => setSelectedQuarter('q2')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedQuarter === 'q2'
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Q2: Modular & Defensive
            </button>
            <button
              onClick={() => setSelectedQuarter('q3')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedQuarter === 'q3'
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Q3: Advanced Data & XML
            </button>
            <button
              onClick={() => setSelectedQuarter('q4')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedQuarter === 'q4'
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Q4: Web & App Studio
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
          <span>Showing {filteredUnits.length} of {academicSyllabusData.syllabusUnits.length} academic syllabus units</span>
          {searchQuery && (
            <span>Filtered by "{searchQuery}"</span>
          )}
        </div>
      </div>

      {/* Syllabus Module Units List */}
      <div className="space-y-6">
        {filteredUnits.map((unit) => {
          const isCompleted = progress.completedLessonIds?.includes(unit.lessonId);

          return (
            <div
              key={unit.unitCode}
              className={`bg-white dark:bg-slate-900 border-2 rounded-3xl p-6 sm:p-7 shadow-lg transition-all ${
                isCompleted 
                  ? 'border-emerald-500/40 bg-emerald-500/5' 
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              {/* Unit Card Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      {unit.unitCode}
                    </span>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      unit.level === 'beginner' 
                        ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                        : unit.level === 'intermediate'
                        ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300'
                        : unit.level === 'advanced'
                        ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                        : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300'
                    }`}>
                      {unit.level}
                    </span>
                    {unit.cloMapping.map((cloTag) => (
                      <span 
                        key={cloTag}
                        className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      >
                        {cloTag}
                      </span>
                    ))}
                    {isCompleted && (
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <span>✓</span> Completed
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mt-1">
                    {languageMode === 'english'
                      ? unit.title.english
                      : languageMode === 'roman_urdu'
                      ? unit.title.roman_urdu
                      : `${unit.title.english} (${unit.title.urdu})`}
                  </h3>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectLesson(unit.lessonId)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold text-white transition-all shadow-md shadow-emerald-700/20 flex items-center gap-1.5"
                  >
                    <span>📖</span> Open Lesson
                  </button>

                  {unit.examDayNumber && onSelectDayExam && (
                    <button
                      onClick={() => onSelectDayExam(unit.examDayNumber!)}
                      className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 rounded-xl text-xs font-bold text-slate-900 transition-all shadow-md shadow-amber-600/20 flex items-center gap-1.5"
                    >
                      <span>📝</span> Day {unit.examDayNumber} Exam (10 Qs)
                    </button>
                  )}
                </div>
              </div>

              {/* Theory Topics & Lab Practicals 2-Column Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
                {/* Left: Formal Theory Syllabus */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📘</span> Theory Syllabus ({unit.contactHours.theoryHours} Contact Hours)
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {(languageMode === 'english'
                      ? unit.theorySyllabus.english
                      : unit.theorySyllabus.roman_urdu
                    ).map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Hands-on Laboratory Practicals */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                      <span>🧪</span> Hands-on Laboratory Practicals ({unit.contactHours.labHours} Lab Hour)
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {(languageMode === 'english'
                      ? unit.labPracticalSyllabus.english
                      : unit.labPracticalSyllabus.roman_urdu
                    ).map((practical, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-amber-500 font-bold mt-0.5">✓</span>
                        <span>{practical}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Parameters & Syntax Quick-Reference Table */}
              {unit.keyParametersAndSyntax && unit.keyParametersAndSyntax.length > 0 && (
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block mb-2">
                    Key Parameters, Syntax & Options Reference:
                  </span>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                      <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-bold">
                        <tr>
                          <th className="py-2 px-3 border-b border-slate-200 dark:border-slate-800">Parameter / Syntax</th>
                          <th className="py-2 px-3 border-b border-slate-200 dark:border-slate-800">Type / Default Value</th>
                          <th className="py-2 px-3 border-b border-slate-200 dark:border-slate-800">Operational Function (Kaam)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        {unit.keyParametersAndSyntax.map((param, pIdx) => (
                          <tr key={pIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <td className="py-2 px-3 font-mono font-bold text-amber-600 dark:text-amber-400">{param.name}</td>
                            <td className="py-2 px-3 font-mono text-slate-500 dark:text-slate-400">{param.defaultOrType}</td>
                            <td className="py-2 px-3">{param.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Assessment Milestone Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Target Assessment:</span>
                  <span className="font-medium bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-800 dark:text-slate-200">
                    {unit.assessmentMilestone.type} - {unit.assessmentMilestone.target}
                  </span>
                </div>
                <span className="font-mono font-bold text-amber-500">
                  Weight: {unit.assessmentMilestone.marks} Marks
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* CLO Detail Modal */}
      {showCloModal && selectedClo && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  {selectedClo.code}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {selectedClo.bloomLevel}
                </span>
              </div>
              <button
                onClick={() => setShowCloModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {selectedClo.title.english}
              </h3>
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-urdu text-right" dir="rtl">
                {selectedClo.title.urdu}
              </p>
            </div>

            <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p><strong>English Description:</strong> {selectedClo.description.english}</p>
              <p><strong>Roman Urdu:</strong> {selectedClo.description.roman_urdu}</p>
              <p className="font-urdu text-right" dir="rtl"><strong>اردو تفصیل:</strong> {selectedClo.description.urdu}</p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowCloModal(false)}
                className="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-xl"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
