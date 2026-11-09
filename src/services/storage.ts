import { UserProgress, Language } from '../types';

const STORAGE_KEY = 'pyseekho_user_progress_v1';

const DEFAULT_FILES = [
  {
    id: 'main.py',
    name: 'main.py',
    code: `# Welcome to PySeekho Python Playground!
# Yahan aap apna Python code likhein aur 'Run Code' dabayein.

print("Assalam-o-Alaikum, Python Seekhein!")

# Variable example
naam = "Student"
umar = 20
print(f"Khush Amdeed {naam}! Aapki umar {umar} saal hai.")

# Simple loop
print("\\nCounting 1 to 5:")
for i in range(1, 6):
    print(f"Number: {i} | Square: {i**2}")

# Function example
def salam(person):
    return f"Boht khoob, {person}! Python seekhna boht asaan hai."

print("\\n" + salam(naam))
`,
    updatedAt: new Date().toISOString()
  },
  {
    id: 'calculator.py',
    name: 'calculator.py',
    code: `# Simple Python Calculator
def jama(a, b):
    return a + b

def manfi(a, b):
    return a - b

def zarb(a, b):
    return a * b

def taqseem(a, b):
    if b == 0:
        return "Ghalti: 0 se divide nahi kar sakte!"
    return a / b

num1 = 20
num2 = 5

print("--- Calculator Nateeja ---")
print(f"{num1} + {num2} =", jama(num1, num2))
print(f"{num1} - {num2} =", manfi(num1, num2))
print(f"{num1} * {num2} =", zarb(num1, num2))
print(f"{num1} / {num2} =", taqseem(num1, num2))
`,
    updatedAt: new Date().toISOString()
  }
];

export const defaultUserProgress: UserProgress = {
  completedLessonIds: [],
  completedChallengeIds: [],
  challengeSubmissions: {},
  quizScores: {},
  userPlaygroundFiles: DEFAULT_FILES,
  activeFileId: 'main.py',
  notes: {
    'general': '# Meri Python Notes\n\n- Python aik high-level aur readable programming language hai.\n- `print()` se hum screen par output dekhte hain.\n- Indentation (4 spaces) Python me block of code define karne ke liye zaroori hai!'
  },
  totalXp: 50,
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  language: 'roman_urdu',
  themeMode: 'light',
  bgTheme: 'fresh'
};

export const loadUserProgress = (): UserProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultUserProgress;
    const parsed = JSON.parse(raw);
    
    // Check daily streak
    const today = new Date().toISOString().split('T')[0];
    if (parsed.lastActiveDate !== today) {
      const lastDate = new Date(parsed.lastActiveDate);
      const currDate = new Date(today);
      const diffDays = Math.floor((currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
      
      if (diffDays === 1) {
        parsed.streakDays = (parsed.streakDays || 1) + 1;
      } else if (diffDays > 1) {
        parsed.streakDays = 1;
      }
      parsed.lastActiveDate = today;
      saveUserProgress(parsed);
    }

    return {
      ...defaultUserProgress,
      ...parsed,
      themeMode: parsed.themeMode || 'light',
      bgTheme: parsed.bgTheme && ['fresh', 'mint', 'sky', 'warm', 'soft_slate', 'sapphire', 'forest', 'obsidian'].includes(parsed.bgTheme) ? parsed.bgTheme : 'fresh',
      userPlaygroundFiles: parsed.userPlaygroundFiles?.length ? parsed.userPlaygroundFiles : DEFAULT_FILES
    };
  } catch (err) {
    console.error('Failed to load progress from localStorage:', err);
    return defaultUserProgress;
  }
};

export const saveUserProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save progress to localStorage:', err);
  }
};

export const exportProgressJson = (progress: UserProgress): void => {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(progress, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `pyseekho_backup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};

export const importProgressJson = (jsonString: string): UserProgress | null => {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || typeof parsed !== 'object') return null;
    const merged: UserProgress = {
      ...defaultUserProgress,
      ...parsed
    };
    saveUserProgress(merged);
    return merged;
  } catch (err) {
    console.error('Failed to import progress JSON:', err);
    return null;
  }
};
