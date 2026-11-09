export type Language = 'roman_urdu' | 'english' | 'urdu';
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced' | 'professional';
export type NavigationTab = 'roadmap' | 'syllabus' | 'analytics' | 'lessons' | 'day_exams' | 'day1_exam' | 'ai_tutor' | 'web_studio' | 'workspace' | 'xml_lab' | 'practice' | 'quizzes' | 'playground' | 'notebook';

export interface CodeExample {
  title: string;
  code: string;
  explanation: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
}

export interface Lesson {
  id: string;
  moduleIndex: number;
  level: CourseLevel;
  title: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  subtitle: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  durationMinutes: number;
  xpReward: number;
  summary: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  sections: {
    heading: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
    content: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
    codeSnippet?: string;
    keyTakeaway?: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
    summaryTable?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  interactiveExample: CodeExample;
  commonMistakes: {
    mistake: string;
    fix: string;
    explanation: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
  }[];
  challengeId?: string;
  quizId?: string;
  // School-level fresh beginner pedagogy fields:
  schoolAnalogy?: {
    realLifeObject: string;
    concept: string;
    story: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
  };
  lineByLineBreakdown?: {
    line: string;
    explanation: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
    ramState?: string;
  }[];
  goldenRules?: {
    roman_urdu: string;
    english: string;
    urdu: string;
  }[];
  freshStudentFaqs?: {
    question: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
    answer: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
  }[];
  schoolHomeworkTask?: {
    prompt: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
    hint: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
    sampleSolution: string;
  };
}

export interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
  description: string;
  isHidden?: boolean;
}

export interface Challenge {
  id: string;
  level?: CourseLevel;
  title: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  difficulty: 'Aasan (Easy)' | 'Darmiyana (Medium)' | 'Mushkil (Hard)';
  category: string;
  xpReward: number;
  description: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  instructions: {
    roman_urdu: string[];
    english: string[];
    urdu: string[];
  };
  starterCode: string;
  solutionCode: string;
  hints: {
    roman_urdu: string[];
    english: string[];
    urdu: string[];
  };
  testCases: TestCase[];
}

export interface QuizQuestion {
  id: string;
  question: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  codeSnippet?: string;
  options: {
    roman_urdu: string;
    english: string;
    urdu: string;
  }[];
  correctAnswerIndex: number;
  explanation: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  questions: QuizQuestion[];
  passingScore: number;
  xpReward: number;
}

export interface DayPlan {
  dayNumber: number;
  title: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  description: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  durationMinutes: number;
  lessonId: string;
  challengeId?: string;
  quizId?: string;
  tasks: {
    roman_urdu: string[];
    english: string[];
    urdu: string[];
  };
}

export interface StudyPlanTrack {
  id: '7days' | '14days' | '30days' | 'professional_web';
  title: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  subtitle: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  dailyTime: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  totalDays: number;
  badge: string;
  recommendedFor: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  days: DayPlan[];
}

export type BackgroundTheme = 'fresh' | 'mint' | 'sky' | 'warm' | 'soft_slate' | 'sapphire' | 'forest' | 'obsidian';
export type ThemeMode = 'light' | 'dark';

export interface UserProgress {
  completedLessonIds: string[];
  completedChallengeIds: string[];
  challengeSubmissions: Record<string, { code: string; passed: boolean; completedAt: string }>;
  quizScores: Record<string, { score: number; total: number; passed: boolean; completedAt: string }>;
  userPlaygroundFiles: { id: string; name: string; code: string; updatedAt: string }[];
  activeFileId: string;
  notes: Record<string, string>; // key: lessonId or 'general'
  totalXp: number;
  streakDays: number;
  currentStreak?: number;
  lastActiveDate: string;
  language: Language;
  selectedPlanId?: '7days' | '14days' | '30days' | 'professional_web';
  completedDays?: number[];
  completedQuizIds?: string[];
  planStartDate?: string;
  themeMode?: ThemeMode;
  bgTheme?: BackgroundTheme;
  eyeComfortShield?: boolean;
  day1ExamSubmissions?: Record<string, { code: string; passed: boolean; marksObtained: number; completedAt: string }>;
  examScores?: Record<string, number>;
}

