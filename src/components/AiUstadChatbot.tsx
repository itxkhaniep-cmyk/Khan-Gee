import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { 
  Bot, 
  Send, 
  User, 
  RotateCcw, 
  Sparkles, 
  Copy, 
  Check, 
  HelpCircle, 
  BookOpen, 
  FileCode,
  X,
  MessageSquare,
  AlertCircle,
  Zap,
  RefreshCw
} from 'lucide-react';
import { findInstantAnswer } from '../data/instantAiKnowledge';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: string;
}

interface AiUstadChatbotProps {
  language: Language;
  currentContext?: string;
  initialQuery?: string;
  onNavigateToPlayground?: (codeSnippet?: string) => void;
  isFloating?: boolean;
  onCloseFloating?: () => void;
}

const STORAGE_KEY = 'pyseekho_ai_chat_history_v1';

export const AiUstadChatbot: React.FC<AiUstadChatbotProps> = ({
  language,
  currentContext,
  initialQuery,
  onNavigateToPlayground,
  isFloating = false,
  onCloseFloating
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      {
        id: 'msg-welcome',
        role: 'model',
        content: `Assalam-o-Alaikum! 🎒 Main aapka **PySeekho AI Ustad** hoon.

Agar aap programming mein bilkul **fresh student** hain aur pehli dafa coding seekh rahe hain, to dil chhota na karein!
Yahan koi bhi sawal "chhota ya ghalat" nahi hota. Main aapko school classroom ki tarah aasan rozmarrah misalon se samjhaunga:

• 📢 **print() aur Variables** ki basic logic
• ⚖️ **"=" (Dabba bharna) vs "==" (Barabari pochna)**
• 🚦 **if-else aur Loops** ka aasan tareeqa
• ❌ **Error aane par** foran code paste karein, main sahi hal bataunga
• 📝 **Daily 10 Exams** ke sawalat ki tayyari

Bataiye, aaj kis topic se shuru karein?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [lastFailedPrompt, setLastFailedPrompt] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Save conversation history
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  // Handle incoming initial query
  useEffect(() => {
    if (initialQuery && initialQuery.trim()) {
      handleSendMessage(initialQuery);
    }
  }, [initialQuery]);

  const quickChips = [
    'print() aur return mein kya farq hai?',
    'print() ke sep aur end parameters samjhayein',
    'CS-101 Academic Syllabus (Nisab-e-Taleem)',
    'Variables aur kitchen ke dabbe wali misal samjhayein',
    'IndentationError (4 spaces) kya hota hai aur kaise theek karein?',
    'if-else mein colon (:) lagana kyun zaroori hai?',
    'for loop aur while loop mein kya farq hai?',
    'Day 1 ke 10 Exams ki step-by-step tayyari karwayein'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputPrompt).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInputPrompt('');
    setIsLoading(true);
    setErrorMsg(null);
    setLastFailedPrompt(null);

    // 1. FASTEST NANOSECOND INSTANT KNOWLEDGE CHECK (Client-side, 30ms latency)
    const instantReply = findInstantAnswer(text);
    if (instantReply) {
      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: `model-${Date.now()}`,
          role: 'model',
          content: instantReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
        setTimeout(() => inputRef.current?.focus(), 50);
      }, 40);
      return;
    }

    try {
      // 2. High-speed multi-turn call to server route (powered by gemini-3.1-flash-lite)
      const historyPayload = nextMessages.slice(-6).map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: historyPayload,
          currentContext: currentContext || 'PySeekho Python Interactive Learning App',
          language
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Server error communicating with Gemini AI');
      }

      const botMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: 'model',
        content: data.reply || 'Maaf kijiye, mujhe response generate karne mein dushwari hui.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      let friendlyError = 'AI server par is waqt temporary traffic hai. Please "Dobara Bhejein" par click karein.';
      try {
        if (typeof err?.message === 'string') {
          if (err.message.includes('503') || err.message.includes('high demand') || err.message.includes('UNAVAILABLE')) {
            friendlyError = 'Cloud AI servers par temporary load spike hai. Dobara foran koshish karein:';
          } else if (err.message.startsWith('{')) {
            const p = JSON.parse(err.message);
            if (p?.error?.message) friendlyError = p.error.message;
          } else {
            friendlyError = err.message;
          }
        }
      } catch {}

      setErrorMsg(friendlyError);
      setLastFailedPrompt(text);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm('Kya aap chat history clear karna chahte hain?')) {
      const resetMessages: ChatMessage[] = [
        {
          id: `msg-reset-${Date.now()}`,
          role: 'model',
          content: 'Chat clear kar di gayi hai! Main aapki agli Python query ka muntazir hoon.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ];
      setMessages(resetMessages);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Helper to render message with formatted text and code blocks
  const renderMessageContent = (content: string, msgId: string) => {
    const parts = content.split(/(```[\s\S]*?```)/g);

    return (
      <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
        {parts.map((part, index) => {
          if (part.startsWith('```') && part.endsWith('```')) {
            const lines = part.slice(3, -3).trim().split('\n');
            const lang = lines[0].trim();
            const code = lines.slice(lang === 'python' || lang === 'py' ? 1 : 0).join('\n');
            const codeBlockId = `${msgId}-code-${index}`;

            return (
              <div key={index} className="my-2.5 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 text-slate-100 shadow-md">
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                  <span>{lang || 'python'}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyCode(code, codeBlockId)}
                      className="flex items-center gap-1 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {copiedId === codeBlockId ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    {onNavigateToPlayground && (
                      <button
                        onClick={() => onNavigateToPlayground(code)}
                        className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                        title="Code Playground mein run karein"
                      >
                        <FileCode className="w-3.5 h-3.5" />
                        <span>Run Code ➔</span>
                      </button>
                    )}
                  </div>
                </div>
                <pre className="p-3 font-mono text-xs overflow-x-auto text-emerald-300 leading-normal">
                  {code}
                </pre>
              </div>
            );
          }

          // Format basic bold and bullets
          return (
            <div key={index} className="whitespace-pre-wrap">
              {part.split('\n').map((line, lIdx) => {
                // simple bold replacement
                const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                return (
                  <span 
                    key={lIdx} 
                    dangerouslySetInnerHTML={{ __html: formattedLine }} 
                    className="block"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl ${
      isFloating 
        ? 'fixed bottom-5 right-5 w-full max-w-lg h-[620px] rounded-2xl z-50 animate-in slide-in-from-bottom-5 duration-300' 
        : 'max-w-4xl mx-auto rounded-2xl h-[740px] my-4'
    }`}>
      {/* Chat Header */}
      <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 rounded-t-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-sky-500 to-emerald-500 flex items-center justify-center text-white shadow-md shrink-0">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-slate-900 dark:text-white text-base">
                PySeekho AI Ustad
              </h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-400/40 flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>Ultra-Fast ⚡ (Zero Delay)</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-400/30 flex items-center gap-1 hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Online
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Gemini 3.8 Flash Powered · Har sawal ka wazahat bhara jawab
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleClearHistory}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Chat history clear karein"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          {isFloating && onCloseFloating && (
            <button
              onClick={onCloseFloating}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Band karein"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Context banner if opened from specific lesson or exam */}
      {currentContext && (
        <div className="px-4 py-2 bg-amber-500/10 border-b border-amber-300/30 dark:border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
          <span className="truncate">
            <strong>Context Active:</strong> {currentContext}
          </span>
        </div>
      )}

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-emerald-500 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-xs ${
                  isUser
                    ? 'bg-amber-500 text-slate-950 font-medium rounded-br-none'
                    : 'bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-700/80 rounded-bl-none'
                }`}
              >
                {renderMessageContent(msg.content, msg.id)}
                <span className={`block text-[10px] mt-1.5 text-right ${
                  isUser ? 'text-amber-950/70' : 'text-slate-400 dark:text-slate-500'
                }`}>
                  {msg.timestamp}
                </span>
              </div>

              {isUser && (
                <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0 shadow-sm mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-3 justify-start animate-pulse">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 p-3.5 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-700 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
              <span>AI Ustad soch rahe hain aur wazahat tayyar kar rahe hain...</span>
            </div>
          </div>
        )}

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="font-medium">{errorMsg}</span>
            </div>
            {lastFailedPrompt && (
              <button
                onClick={() => handleSendMessage(lastFailedPrompt)}
                className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shrink-0 transition-transform active:scale-95 shadow-xs"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Dobara Bhejein</span>
              </button>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Question Chips */}
      <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50 flex items-center gap-1.5 overflow-x-auto text-[11px] whitespace-nowrap scrollbar-none">
        <span className="text-slate-400 font-medium mr-1 flex items-center gap-1 shrink-0">
          <HelpCircle className="w-3 h-3 text-amber-500" />
          <span>Fauri Sawal:</span>
        </span>
        {quickChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(chip)}
            disabled={isLoading}
            className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer shrink-0 disabled:opacity-50"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-3 sm:p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-b-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder="Apna Python sawal ya query yahan likhein (e.g. while loop kaise kaam karta hai?)..."
            className="flex-1 bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 px-4 py-2.5 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading || !inputPrompt.trim()}
            className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Bhejein</span>
          </button>
        </form>
      </div>
    </div>
  );
};
