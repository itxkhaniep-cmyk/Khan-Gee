import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signOut,
  User 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  query, 
  where, 
  getDocs, 
  getDocFromServer,
  serverTimestamp 
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { UserProgress } from '../types';

// Initialize Firebase App instance singleton
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth
export const auth = getAuth(app);

// Initialize Firestore with specific database ID if configured
export const db = firebaseConfig.firestoreDatabaseId 
  ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
  : getFirestore(app);

// Configure Google Auth Provider with requested Google Workspace scopes
export const googleProvider = new GoogleAuthProvider();

// Scopes matching OAuth configuration:
googleProvider.addScope('https://www.googleapis.com/auth/drive');
googleProvider.addScope('https://www.googleapis.com/auth/drive.file');
googleProvider.addScope('https://www.googleapis.com/auth/drive.readonly');
googleProvider.addScope('https://www.googleapis.com/auth/spreadsheets');
googleProvider.addScope('https://www.googleapis.com/auth/spreadsheets.readonly');
googleProvider.addScope('https://mail.google.com/');
googleProvider.addScope('https://www.googleapis.com/auth/gmail.send');
googleProvider.addScope('https://www.googleapis.com/auth/gmail.readonly');

// In-Memory Token Cache (MANDATORY: Never store in localStorage/sessionStorage)
let isSigningIn = false;
let cachedAccessToken: string | null = null;

// Validate connection to Firestore on initialization
export async function testFirestoreConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline. Check connection or project settings.');
    }
  }
}
testFirestoreConnection();

// Initialize auth state listener. Clears cached token when signed out.
export const initAuth = (
  onAuthSuccess?: (user: User, token: string | null) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
      if (cachedAccessToken) {
        if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // User logged in via session, but access token is in-memory only.
        // Prompt will refresh token on user interaction or next signIn.
        if (onAuthSuccess) onAuthSuccess(user, null);
      }
    } else {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

// Sign in with Google (Popup) & retrieve access token
export const googleSignIn = async (): Promise<{ user: User; accessToken: string }> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    if (!credential?.accessToken) {
      throw new Error('Google OAuth Access Token nahi mil saka.');
    }

    cachedAccessToken = credential.accessToken;

    // Sync user profile to Firestore
    try {
      const userRef = doc(db, 'users', result.user.uid);
      await setDoc(userRef, {
        id: result.user.uid,
        email: result.user.email || '',
        displayName: result.user.displayName || 'Learner',
        photoURL: result.user.photoURL || '',
        updatedAt: new Date().toISOString()
      }, { merge: true });
    } catch (e) {
      console.warn('Could not update user record in Firestore:', e);
    }

    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Google Sign In error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

// Get in-memory access token
export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

// Set token in memory
export const setCachedToken = (token: string | null) => {
  cachedAccessToken = token;
};

// Logout
export const logoutUser = async () => {
  await signOut(auth);
  cachedAccessToken = null;
};

// Cloud Firestore Progress Sync
export const syncUserProgressToFirestore = async (userId: string, progress: UserProgress) => {
  if (!userId) return;
  try {
    const progressRef = doc(db, 'userProgress', userId);
    await setDoc(progressRef, {
      userId,
      totalXp: progress.totalXp,
      completedLessonIds: progress.completedLessonIds || [],
      completedChallengeIds: progress.completedChallengeIds || [],
      completedQuizIds: progress.completedQuizIds || Object.keys(progress.quizScores || {}),
      examScores: progress.examScores || {},
      currentStreak: progress.currentStreak ?? progress.streakDays ?? 1,
      lastActiveDate: progress.lastActiveDate,
      updatedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.error('Error saving progress to Firestore:', err);
  }
};

export const loadUserProgressFromFirestore = async (userId: string): Promise<Partial<UserProgress> | null> => {
  if (!userId) return null;
  try {
    const progressRef = doc(db, 'userProgress', userId);
    const snap = await getDoc(progressRef);
    if (snap.exists()) {
      return snap.data() as Partial<UserProgress>;
    }
  } catch (err) {
    console.error('Error loading progress from Firestore:', err);
  }
  return null;
};
