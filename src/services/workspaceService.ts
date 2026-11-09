import { User } from 'firebase/auth';
import { UserProgress } from '../types';

declare global {
  interface Window {
    gapi: any;
    google: any;
  }
}

// ==========================================
// 1. GOOGLE DRIVE API
// ==========================================

export interface DriveFileItem {
  id: string;
  name: string;
  mimeType: string;
  modifiedTime?: string;
  webViewLink?: string;
  size?: string;
}

export async function listDriveFiles(accessToken: string): Promise<DriveFileItem[]> {
  try {
    const res = await fetch(
      'https://www.googleapis.com/drive/v3/files?pageSize=25&fields=files(id,name,mimeType,modifiedTime,webViewLink,size)&orderBy=modifiedTime desc',
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    );
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error?.message || 'Drive files list karne mein masla hua');
    }
    const data = await res.json();
    return data.files || [];
  } catch (err: any) {
    console.error('listDriveFiles error:', err);
    throw err;
  }
}

export async function uploadPythonFileToDrive(
  accessToken: string,
  fileName: string,
  codeContent: string
): Promise<{ id: string; name: string; webViewLink?: string }> {
  try {
    const safeName = fileName.endsWith('.py') ? fileName : `${fileName}.py`;
    
    // Multipart upload
    const metadata = {
      name: safeName,
      mimeType: 'text/x-python',
      description: 'Saved from PySeekho Python Academy'
    };

    const boundary = '-------314159265358979323846';
    const delimiter = `\r\n--${boundary}\r\n`;
    const closeDelimiter = `\r\n--${boundary}--`;

    const multipartRequestBody =
      delimiter +
      'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
      JSON.stringify(metadata) +
      delimiter +
      'Content-Type: text/x-python\r\n\r\n' +
      codeContent +
      closeDelimiter;

    const res = await fetch(
      'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': `multipart/related; boundary=${boundary}`
        },
        body: multipartRequestBody
      }
    );

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error?.message || 'File Drive par upload nahi ho saki');
    }

    return await res.json();
  } catch (err: any) {
    console.error('uploadPythonFileToDrive error:', err);
    throw err;
  }
}

export async function downloadDriveFileContent(accessToken: string, fileId: string): Promise<string> {
  const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  if (!res.ok) {
    throw new Error('Drive file download karne mein masla hua');
  }
  return await res.text();
}

// ==========================================
// 2. GOOGLE SHEETS API
// ==========================================

export async function createProgressSpreadsheet(
  accessToken: string,
  user: User,
  progress: UserProgress
): Promise<{ spreadsheetId: string; spreadsheetUrl: string }> {
  try {
    const title = `PySeekho - Python Learning Progress (${user.displayName || 'Student'})`;

    // 1. Create Spreadsheet
    const createRes = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        properties: { title },
        sheets: [
          { properties: { title: 'Overview & Summary' } },
          { properties: { title: 'Exam Scores (14 Days)' } }
        ]
      })
    });

    if (!createRes.ok) {
      const err = await createRes.json();
      throw new Error(err.error?.message || 'Google Sheet create nahi ho saki');
    }

    const created = await createRes.json();
    const spreadsheetId = created.spreadsheetId;
    const spreadsheetUrl = created.spreadsheetUrl;

    // 2. Populate Overview Data
    const overviewValues = [
      ['PySeekho Python Academy - Official Learning Progress Report'],
      ['Student Name:', user.displayName || 'Learner'],
      ['Student Email:', user.email || 'N/A'],
      ['Report Generated:', new Date().toLocaleString()],
      ['Total XP Earned:', progress.totalXp],
      ['Current Streak:', `${progress.currentStreak ?? progress.streakDays ?? 1} Days`],
      ['Completed Lessons:', `${progress.completedLessonIds.length} Lessons`],
      ['Completed Challenges:', `${progress.completedChallengeIds.length} Challenges`],
      ['Passed Quizzes:', `${progress.completedQuizIds?.length ?? Object.keys(progress.quizScores || {}).length} Quizzes`],
      ['Total Exam Questions Attempted:', Object.keys(progress.examScores || progress.day1ExamSubmissions || {}).length]
    ];

    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/'Overview & Summary'!A1:B10?valueInputOption=RAW`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values: overviewValues })
      }
    );

    // 3. Populate Exam Scores Data (Days 1 to 14)
    const examRows = [
      ['Day #', 'Exam Question ID', 'Marks Awarded (out of 10)', 'Status', 'Recorded Date']
    ];

    const scores = progress.examScores || {};
    for (let day = 1; day <= 14; day++) {
      for (let q = 1; q <= 10; q++) {
        const qId = `day${day}-exam-${q}`;
        const mark = scores[qId] !== undefined ? scores[qId] : 0;
        const status = mark >= 8 ? 'Passed (Full)' : mark > 0 ? 'Attempted' : 'Pending';
        examRows.push([`Day ${day}`, `Question ${q} (${qId})`, `${mark} / 10`, status, mark > 0 ? 'Completed' : '-']);
      }
    }

    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/'Exam Scores (14 Days)'!A1:E150?valueInputOption=RAW`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values: examRows })
      }
    );

    return { spreadsheetId, spreadsheetUrl };
  } catch (err: any) {
    console.error('createProgressSpreadsheet error:', err);
    throw err;
  }
}

// ==========================================
// 3. GMAIL API
// ==========================================

export async function sendEmailViaGmail(
  accessToken: string,
  toEmail: string,
  subject: string,
  bodyHtml: string
): Promise<{ id: string; threadId: string }> {
  try {
    const utf8Subject = `=?utf-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`;
    const messageParts = [
      `To: ${toEmail}`,
      'Content-Type: text/html; charset=utf-8',
      'MIME-Version: 1.0',
      `Subject: ${utf8Subject}`,
      '',
      bodyHtml
    ];
    const message = messageParts.join('\r\n');

    // Base64url encode
    const encodedMessage = btoa(unescape(encodeURIComponent(message)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ raw: encodedMessage })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error?.message || 'Gmail se email bhejna kamyab nahi ho saka');
    }

    return await res.json();
  } catch (err: any) {
    console.error('sendEmailViaGmail error:', err);
    throw err;
  }
}

// ==========================================
// 4. GOOGLE PICKER API
// ==========================================

export function openGooglePicker(
  accessToken: string,
  onFilePicked: (file: { id: string; name: string; url?: string; mimeType: string }) => void,
  onError?: (err: any) => void
) {
  if (!window.gapi) {
    onError?.(new Error('Google API Client (gapi) script load nahi hua. Page refresh karein.'));
    return;
  }

  window.gapi.load('picker', {
    callback: () => {
      try {
        if (!window.google?.picker) {
          throw new Error('Google Picker library initialize nahi ho saki');
        }

        // Determine ancestor origin safely per references/picker.md
        const pickerOrigin =
          window.location.ancestorOrigins && window.location.ancestorOrigins.length > 0
            ? window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1]
            : window.location.origin;

        const docsView = new window.google.picker.DocsView(window.google.picker.ViewId.DOCS)
          .setIncludeFolders(true)
          .setMimeTypes('text/x-python,text/plain,application/json,application/vnd.google-apps.spreadsheet');

        const picker = new window.google.picker.PickerBuilder()
          .addView(docsView)
          .setOAuthToken(accessToken)
          .setOrigin(pickerOrigin)
          .setCallback((data: any) => {
            if (data.action === window.google.picker.Action.PICKED) {
              const doc = data.docs[0];
              onFilePicked({
                id: doc.id,
                name: doc.name,
                url: doc.url,
                mimeType: doc.mimeType
              });
            }
          })
          .build();

        picker.setVisible(true);
      } catch (err) {
        console.error('Picker error:', err);
        onError?.(err);
      }
    }
  });
}
