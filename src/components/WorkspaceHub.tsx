import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { UserProgress, Language } from '../types';
import { 
  initAuth, 
  googleSignIn, 
  logoutUser, 
  getAccessToken, 
  syncUserProgressToFirestore, 
  loadUserProgressFromFirestore 
} from '../services/firebase';
import { 
  listDriveFiles, 
  uploadPythonFileToDrive, 
  downloadDriveFileContent, 
  createProgressSpreadsheet, 
  sendEmailViaGmail, 
  openGooglePicker, 
  DriveFileItem 
} from '../services/workspaceService';
import { 
  Cloud, 
  HardDrive, 
  FileSpreadsheet, 
  Mail, 
  FolderOpen, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Upload, 
  Download, 
  Send, 
  LogOut, 
  Sparkles, 
  ShieldCheck, 
  FileCode, 
  RefreshCw,
  FileText
} from 'lucide-react';

interface WorkspaceHubProps {
  progress: UserProgress;
  onUpdateProgress: (updater: (prev: UserProgress) => UserProgress) => void;
  language: Language;
  onNavigateToPlayground?: (code?: string) => void;
}

export const WorkspaceHub: React.FC<WorkspaceHubProps> = ({
  progress,
  onUpdateProgress,
  language,
  onNavigateToPlayground
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Drive state
  const [driveFiles, setDriveFiles] = useState<DriveFileItem[]>([]);
  const [isLoadingDrive, setIsLoadingDrive] = useState<boolean>(false);
  const [saveFileName, setSaveFileName] = useState<string>('my_python_code.py');
  const [scriptToSave, setScriptToSave] = useState<string>(
    '# PySeekho Python Script\nprint("Assalam-o-Alaikum from Google Drive!")\nfor i in range(1, 6):\n    print(f"Step {i}: Python seekhna asaan hai!")\n'
  );
  const [driveSaveStatus, setDriveSaveStatus] = useState<{ success?: string; error?: string } | null>(null);

  // Sheets state
  const [isCreatingSheet, setIsCreatingSheet] = useState<boolean>(false);
  const [createdSheetUrl, setCreatedSheetUrl] = useState<string | null>(null);
  const [sheetError, setSheetError] = useState<string | null>(null);

  // Gmail state
  const [recipientEmail, setRecipientEmail] = useState<string>('');
  const [emailSubject, setEmailSubject] = useState<string>('PySeekho Python Learning Report & Progress');
  const [isSendingEmail, setIsSendingEmail] = useState<boolean>(false);
  const [emailStatus, setEmailStatus] = useState<{ success?: string; error?: string } | null>(null);
  const [showEmailConfirm, setShowEmailConfirm] = useState<boolean>(false);

  // Picker state
  const [pickedFile, setPickedFile] = useState<{ name: string; content?: string } | null>(null);

  // Initialize auth state
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, currentToken) => {
        setUser(currentUser);
        if (currentToken) {
          setToken(currentToken);
        } else {
          getAccessToken().then(t => setToken(t));
        }
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    setIsLoggingIn(true);
    setSyncStatus(null);
    try {
      const res = await googleSignIn();
      setUser(res.user);
      setToken(res.accessToken);
      setRecipientEmail(res.user.email || '');

      // Automatically sync progress to Firestore on sign in
      await syncUserProgressToFirestore(res.user.uid, progress);
      setSyncStatus('Progress Firebase Firestore par mehfooz ho gaya hai!');
    } catch (err: any) {
      console.error('Login error:', err);
      setSyncStatus(`Sign in masla: ${err?.message || 'Authentication fail ho gayi'}`);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    setToken(null);
    setDriveFiles([]);
    setCreatedSheetUrl(null);
    setSyncStatus('Aap log out ho gaye hain.');
  };

  // Firestore Sync handlers
  const handleCloudSync = async () => {
    if (!user) return;
    setIsSyncing(true);
    setSyncStatus(null);
    try {
      await syncUserProgressToFirestore(user.uid, progress);
      setSyncStatus(`Kamyab! Firebase Firestore par ${new Date().toLocaleTimeString()} par sync ho gaya.`);
    } catch (err: any) {
      setSyncStatus(`Sync error: ${err.message}`);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleCloudRestore = async () => {
    if (!user) return;
    setIsSyncing(true);
    try {
      const cloudData = await loadUserProgressFromFirestore(user.uid);
      if (cloudData) {
        onUpdateProgress(prev => ({
          ...prev,
          ...cloudData,
          totalXp: cloudData.totalXp ?? prev.totalXp,
          completedLessonIds: cloudData.completedLessonIds ?? prev.completedLessonIds,
          completedChallengeIds: cloudData.completedChallengeIds ?? prev.completedChallengeIds
        }));
        setSyncStatus('Firebase se aapka data restore ho gaya hai!');
      } else {
        setSyncStatus('Cloud par koi purana record nahi mila.');
      }
    } catch (err: any) {
      setSyncStatus(`Restore error: ${err.message}`);
    } finally {
      setIsSyncing(false);
    }
  };

  // Google Drive Handlers
  const handleLoadDriveFiles = async () => {
    if (!token) return;
    setIsLoadingDrive(true);
    try {
      const files = await listDriveFiles(token);
      setDriveFiles(files);
    } catch (err: any) {
      setDriveSaveStatus({ error: err.message || 'Drive files nahi mil sakein' });
    } finally {
      setIsLoadingDrive(false);
    }
  };

  const handleSaveToDrive = async () => {
    if (!token) return;
    setDriveSaveStatus(null);
    try {
      const res = await uploadPythonFileToDrive(token, saveFileName, scriptToSave);
      setDriveSaveStatus({
        success: `File "${res.name}" Google Drive par save ho gayi hai!`
      });
      handleLoadDriveFiles();
    } catch (err: any) {
      setDriveSaveStatus({ error: err.message || 'File save karne mein error' });
    }
  };

  const handleOpenDriveFileInPlayground = async (file: DriveFileItem) => {
    if (!token) return;
    try {
      const content = await downloadDriveFileContent(token, file.id);
      if (onNavigateToPlayground) {
        onNavigateToPlayground(content);
      }
    } catch (err: any) {
      alert(`File open nahi ho saki: ${err.message}`);
    }
  };

  // Google Sheets Handler
  const handleExportToSheets = async () => {
    if (!token || !user) return;
    setIsCreatingSheet(true);
    setSheetError(null);
    setCreatedSheetUrl(null);
    try {
      const res = await createProgressSpreadsheet(token, user, progress);
      setCreatedSheetUrl(res.spreadsheetUrl);
    } catch (err: any) {
      setSheetError(err.message || 'Sheet create karne mein masla hua.');
    } finally {
      setIsCreatingSheet(false);
    }
  };

  // Gmail Handler with Mandatory Confirmation Dialog
  const handleConfirmSendEmail = async () => {
    if (!token || !user || !recipientEmail) return;
    setIsSendingEmail(true);
    setShowEmailConfirm(false);
    setEmailStatus(null);
    try {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0f172a; margin-top: 0;">🐍 PySeekho - Student Progress Report</h2>
          <p>Assalam-o-Alaikum,</p>
          <p>Yeh <strong>${user.displayName || 'Student'}</strong> (${user.email}) ka official Python learning progress report hai:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #f8fafc;"><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Total XP:</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${progress.totalXp} XP</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Completed Lessons:</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${progress.completedLessonIds.length}</td></tr>
            <tr style="background: #f8fafc;"><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Passed Quizzes:</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${progress.completedQuizIds?.length ?? Object.keys(progress.quizScores || {}).length}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Daily Streak:</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${progress.currentStreak ?? progress.streakDays ?? 1} Days</td></tr>
            <tr style="background: #f8fafc;"><td style="padding: 8px; border: 1px solid #cbd5e1;"><strong>Exam Questions Completed:</strong></td><td style="padding: 8px; border: 1px solid #cbd5e1;">${Object.keys(progress.examScores || progress.day1ExamSubmissions || {}).length}</td></tr>
          </table>

          <p style="color: #475569; font-size: 13px;">Sent securely via PySeekho with Google Workspace Gmail API.</p>
        </div>
      `;

      await sendEmailViaGmail(token, recipientEmail, emailSubject, emailHtml);
      setEmailStatus({ success: `Email kamyabi se ${recipientEmail} ko bhej di gayi hai!` });
    } catch (err: any) {
      setEmailStatus({ error: err.message || 'Gmail se email bhejna fail ho gaya.' });
    } finally {
      setIsSendingEmail(false);
    }
  };

  // Google Picker Handler
  const handleLaunchPicker = () => {
    if (!token) return;
    openGooglePicker(
      token,
      async (picked) => {
        setPickedFile({ name: picked.name });
        try {
          const content = await downloadDriveFileContent(token, picked.id);
          setPickedFile({ name: picked.name, content });
          if (onNavigateToPlayground) {
            onNavigateToPlayground(content);
          }
        } catch (e: any) {
          alert(`File content load nahi ho saka: ${e.message}`);
        }
      },
      (err) => {
        alert(`Google Picker error: ${err?.message || err}`);
      }
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-400 text-slate-950 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Google Workspace & Firebase Hub
              </span>
              <span className="text-xs text-sky-300 font-mono">
                Project: gen-lang-client-0248093749
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Google Drive, Sheets, Gmail, Picker & Firebase Cloud
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Apna Python code Google Drive par save karein, progress ki Google Sheet banayein, teacher ko Gmail se report bhejein, aur Firebase Firestore par mukammal data mehfooz karein.
            </p>
          </div>

          {/* User Sign-In Action */}
          <div className="shrink-0">
            {!user ? (
              <button
                onClick={handleGoogleLogin}
                disabled={isLoggingIn}
                className="flex items-center gap-3 px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer border border-slate-200"
              >
                {/* Official Google SVG icon */}
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <span>{isLoggingIn ? 'Connecting...' : 'Sign in with Google'}</span>
              </button>
            ) : (
              <div className="flex items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className="w-10 h-10 rounded-full border border-sky-400" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold">
                    {user.displayName?.[0] || 'U'}
                  </div>
                )}
                <div className="text-left text-xs">
                  <div className="font-bold text-white line-clamp-1">{user.displayName || 'Google User'}</div>
                  <div className="text-slate-400 line-clamp-1">{user.email}</div>
                  <div className="text-emerald-400 font-mono text-[10px] mt-0.5">● Connected</div>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {syncStatus && (
          <div className="mt-4 p-3 bg-sky-900/50 border border-sky-700/60 rounded-xl text-xs text-sky-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{syncStatus}</span>
          </div>
        )}
      </div>

      {!user ? (
        <div className="p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Google Workspace Features Istemal Karne Ke Liye Login Karein
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
            Google Drive, Google Sheets, Gmail aur Firebase Firestore cloud sync ke liye upar <strong>"Sign in with Google"</strong> button dabayein.
          </p>
          <button
            onClick={handleGoogleLogin}
            disabled={isLoggingIn}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Sign in with Google Account</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. FIREBASE FIRESTORE SYNC CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400 font-bold text-sm mb-1">
                <Cloud className="w-5 h-5 text-amber-500" />
                <span>Firebase Firestore Cloud Database</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Persistent Data & Progress Backup
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Aapka learning progress (XP, 14 Dino ke 140 exams, completed lessons) Firestore database par real-time save rehta hai taakay kisi bhi device se login karne par data mehfooz rahe.
              </p>

              <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-[11px] space-y-1">
                <div className="text-slate-500">Region: asia-southeast1</div>
                <div className="text-slate-500">Database: ai-studio-remixpyseekhopyt-...</div>
                <div className="text-emerald-600 dark:text-emerald-400 font-bold">Status: Online & Ready</div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handleCloudSync}
                disabled={isSyncing}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>Cloud Par Sync Karein</span>
              </button>

              <button
                onClick={handleCloudRestore}
                disabled={isSyncing}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Cloud Se Restore Karein</span>
              </button>
            </div>
          </div>

          {/* 2. GOOGLE DRIVE CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-sky-600 dark:text-sky-400 font-bold text-sm mb-1">
                <HardDrive className="w-5 h-5 text-sky-500" />
                <span>Google Drive Integration</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Python Scripts (.py) Save & Load
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Apne banaye hue Python programs ko direct apne Google Drive par .py file bana kar mehfooz karein.
              </p>

              <div className="mt-3 space-y-2">
                <input
                  type="text"
                  value={saveFileName}
                  onChange={(e) => setSaveFileName(e.target.value)}
                  placeholder="File name (e.g. solution.py)"
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-mono outline-none"
                />
                <textarea
                  value={scriptToSave}
                  onChange={(e) => setScriptToSave(e.target.value)}
                  rows={3}
                  className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-sky-400 outline-none"
                />
              </div>

              {driveSaveStatus?.success && (
                <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{driveSaveStatus.success}</span>
                </div>
              )}
              {driveSaveStatus?.error && (
                <div className="mt-2 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{driveSaveStatus.error}</span>
                </div>
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handleSaveToDrive}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Drive Par Save Karein</span>
              </button>

              <button
                onClick={handleLoadDriveFiles}
                disabled={isLoadingDrive}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                <span>{isLoadingDrive ? 'Loading...' : 'Drive Files Dekhein'}</span>
              </button>
            </div>
          </div>

          {/* 3. GOOGLE PICKER CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-1">
                <FolderOpen className="w-5 h-5 text-indigo-500" />
                <span>Google Picker API</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Interactive Google Drive File Picker
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Google ka official interactive file picker widget kholen aur apne Drive se kisi bhi Python ya Text file ko aik click mein PySeekho Playground mein load karein.
              </p>

              {pickedFile && (
                <div className="mt-3 p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 rounded-xl text-xs">
                  <span className="font-bold text-indigo-950 dark:text-indigo-300">Muntakhib Karda File:</span>
                  <div className="font-mono text-indigo-700 dark:text-indigo-400 mt-0.5">{pickedFile.name}</div>
                  <div className="text-[11px] text-slate-500 mt-1">Playground mein load kar di gayi hai!</div>
                </div>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handleLaunchPicker}
                className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <FolderOpen className="w-4 h-4" />
                <span>Google Drive Picker Kholein 📂</span>
              </button>
            </div>
          </div>

          {/* 4. GOOGLE SHEETS CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-1">
                <FileSpreadsheet className="w-5 h-5 text-emerald-500" />
                <span>Google Sheets Integration</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                14 Days Exam Report Spreadsheet
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Apne tamam 14 Dino ke 140 exams ke marks, student progress, aur completion details ki nayi Google Sheet banayein.
              </p>

              {createdSheetUrl && (
                <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 rounded-xl text-xs space-y-1.5">
                  <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Google Sheet Ban Gayi Hai!</span>
                  </div>
                  <a
                    href={createdSheetUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-bold underline hover:text-emerald-600"
                  >
                    <span>Open in Google Sheets</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {sheetError && (
                <div className="mt-2 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{sheetError}</span>
                </div>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handleExportToSheets}
                disabled={isCreatingSheet}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>{isCreatingSheet ? 'Spreadsheet Ban Rahi Hai...' : 'Google Sheet Export Karein 📊'}</span>
              </button>
            </div>
          </div>

          {/* 5. GMAIL CARD (With Mandatory User Confirmation Dialog) */}
          <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400 font-bold text-sm mb-1">
              <Mail className="w-5 h-5 text-rose-500" />
              <span>Gmail API Integration</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Progress & Scorecard Email Bhejein (Official Gmail API)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              Apne teacher, dost ya apne email address par mukammal PySeekho report aur scores email karein.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Recipient Email:
                </label>
                <input
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="teacher@school.edu ya apna email"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Subject:
                </label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-xs outline-none"
                />
              </div>
            </div>

            {emailStatus?.success && (
              <div className="mt-3 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 rounded-xl text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{emailStatus.success}</span>
              </div>
            )}

            {emailStatus?.error && (
              <div className="mt-3 p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-700 rounded-xl text-xs text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-rose-500" />
                <span>{emailStatus.error}</span>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowEmailConfirm(true)}
                disabled={!recipientEmail || isSendingEmail}
                className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-all shadow-xs cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>Gmail Se Send Karein</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Drive File List Preview if loaded */}
      {driveFiles.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <HardDrive className="w-4 h-4 text-sky-500" />
            <span>Google Drive Files ({driveFiles.length})</span>
          </h4>
          <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-60 overflow-y-auto text-xs">
            {driveFiles.map((f) => (
              <div key={f.id} className="py-2.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="font-medium text-slate-800 dark:text-slate-200">{f.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenDriveFileInPlayground(f)}
                    className="px-2.5 py-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 font-bold rounded cursor-pointer text-[11px]"
                  >
                    Playground Mein Kholein
                  </button>
                  {f.webViewLink && (
                    <a
                      href={f.webViewLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-slate-200"
                      title="Drive par dekhein"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MANDATORY USER CONFIRMATION MODAL FOR GMAIL SENDING */}
      {showEmailConfirm && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Email Bhejne Ki Tasdeeq (Confirmation)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Google Workspace Security Policy
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
              <div><strong>Recipient:</strong> {recipientEmail}</div>
              <div><strong>Subject:</strong> {emailSubject}</div>
              <div className="text-slate-500 mt-2">
                Yeh email aapke Gmail account ({user?.email}) ke zariye send ki jayegi aur isme aapka PySeekho progress report shamil hoga.
              </div>
            </div>

            <p className="text-xs text-amber-800 dark:text-amber-300 font-medium">
              Kya aap waqai yeh email bhejna chahte hain?
            </p>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                onClick={() => setShowEmailConfirm(false)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Mansookh Karein (Cancel)
              </button>
              <button
                onClick={handleConfirmSendEmail}
                disabled={isSendingEmail}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                {isSendingEmail ? 'Sending...' : 'Haan, Send Karein (Confirm)'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
