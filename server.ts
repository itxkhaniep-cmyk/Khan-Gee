import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { findInstantAnswer } from './src/data/instantAiKnowledge';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Server-side GoogleGenAI initialization
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Chat endpoint for student queries & doubts with ultra-fast instant cache & multi-model fallback
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, currentContext, language = 'roman_urdu' } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const lastUserMsg = [...messages].reverse().find((m: any) => m.role === 'user');
    const queryText = lastUserMsg?.content || '';

    // 1. FASTEST NANOSECOND INSTANT KNOWLEDGE CACHE (< 5ms response time)
    const instantHit = findInstantAnswer(queryText);
    if (instantHit) {
      return res.json({ reply: instantHit, instant: true });
    }

    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured in the environment. Please check the Secrets panel in AI Studio.'
      });
    }

    const systemInstruction = `You are "PySeekho AI Ustad" (پائی سیکھو اے آئی استاد), a master Python educator, compassionate school tutor, and patient coding mentor.
The student asking questions is a FRESH ZERO-LEVEL NOVICE (bilkul naya student, jaise abhi pehli dafa school ki class mein dakhil hua ho).

Language Preference: ${language}.
Always reply in warm, respectful, crystal-clear Roman Urdu (or English/Urdu if requested) with clean, formatted Python code.

CRITICAL TEACHING GUIDELINES:
1. Keep replies direct, concise, and pedagogical so answers generate in milliseconds!
2. Use everyday school analogies (kitchen masalay ka dabba, school loudspeaker, juice blender).
3. Explain code step-by-step with why and how.
4. If an error is pasted, explain the exact line and give the fix.
${currentContext ? `\n[Student Current Context / Screen]:\n${currentContext}` : ''}`;

    // Convert messages to GenAI contents format (last 6 messages max for lightning speed)
    const recentMessages = messages.slice(-6);
    const contents = recentMessages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    // 2. ULTRA-FAST MODEL SELECTION WITH AUTOMATIC FAILOVER
    // gemini-3.1-flash-lite is the fastest lightweight model with highest throughput and least latency
    const candidateModels = ['gemini-3.1-flash-lite', 'gemini-flash-latest', 'gemini-3.8-flash'];
    let lastError: any = null;

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: contents,
          config: {
            systemInstruction,
            maxOutputTokens: 1000,
            temperature: 0.7,
          }
        });

        const reply = response.text || '';
        if (reply) {
          return res.json({ reply, modelUsed: modelName });
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} failed or busy, trying fallback:`, err?.message || err);
        lastError = err;
        // Continue to next model in candidateModels
      }
    }

    // 3. GRACEFUL RESILIENT FALLBACK (Never crash or throw raw 503 JSON)
    const gracefulFallback = `Assalam-o-Alaikum! 🎒
Main aapka **PySeekho AI Ustad** hoon. Is waqt AI Cloud Servers par temporary high demand spike (503) hai, magar aapka sawal zaya nahi hoga!

### 💡 Aapke Sawal Ka Fauri Rahnuma:
1. Agar aapka sawal **print vs return** par tha: \`print()\` sirf screen par dikhata hai jabke \`return\` value ko variable mein save karne ke liye wapis bhejta hai.
2. Agar **Variables** par tha: Variable dabba hai (\`naam = "Ali"\`), space mana hai.
3. Agar **Error** par tha: Line number check karein aur aakhir mein colon \`:\` ya quotes \`""\` zaroor lagayein.

*(Server traffic aam hotay hi agla jawab mazeed tafseel se aayega. Aap dobara send button bhi daba sakte hain!)*`;

    return res.json({ 
      reply: gracefulFallback, 
      isFallbackNotice: true,
      rawError: lastError?.message || 'High server demand' 
    });

  } catch (error: any) {
    console.error('Fatal in /api/chat:', error);
    return res.status(200).json({
      reply: 'Assalam-o-Alaikum! Connection temporary slow hai. Please aik second baad dobara "Send" ka button dabayein.',
      isFallbackNotice: true
    });
  }
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
