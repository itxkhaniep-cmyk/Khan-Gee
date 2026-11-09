import React, { useState } from 'react';
import { 
  Share2, 
  Copy, 
  Check, 
  MessageCircle, 
  Send, 
  QrCode, 
  Globe, 
  X, 
  Smartphone, 
  CheckCircle2, 
  ExternalLink,
  Users,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  if (!isOpen) return null;

  // The permanent shared link for people to access without dev credentials
  const defaultShareUrl = 'https://ais-pre-pcsj2kaxxdnm7afd6q737r-512695213859.asia-southeast1.run.app';
  
  // Use current origin if it's already on pre/preview domain, otherwise use the shared URL
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : defaultShareUrl;
  const publicShareUrl = currentOrigin.includes('localhost') || currentOrigin.includes('127.0.0.1')
    ? defaultShareUrl
    : currentOrigin.includes('ais-dev')
      ? defaultShareUrl
      : currentOrigin;

  const invitationMessageUrdu = `Salam! 🐍 Python asaan Roman Urdu aur English mein seekhne ke liye yeh zabardast web app check karein: PySeekho!

Is mein:
✨ 7 Modules ke Interactive Lessons
⚡ Live Python Code Runner (Bina install kiye code run karein)
🛠️ XML Automation Lab (Billiards/Sports file to CSV automation)
🎯 Automated Test Challenges & Quizzes
📱 Mobile aur Laptop dono par chalti hai

Apne browser mein kholiye aur seekhna shuru karein:
👉 ${publicShareUrl}`;

  const invitationMessageEnglish = `Hello! 🐍 Check out PySeekho - an interactive Python learning platform with:
✨ Step-by-step interactive lessons with Roman Urdu & English
⚡ Live Python runner in the browser
🛠️ XML Automation Lab & real-world tasks
🎯 Interactive coding challenges & quizzes

Start learning now for free:
👉 ${publicShareUrl}`;

  const currentMessage = language === 'english' ? invitationMessageEnglish : invitationMessageUrdu;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(publicShareUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = publicShareUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    } catch {
      // fallback
    }
  };

  const handleCopyMessage = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentMessage);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = currentMessage;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 3000);
    } catch {
      // fallback
    }
  };

  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(currentMessage);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const handleTelegramShare = () => {
    const encodedUrl = encodeURIComponent(publicShareUrl);
    const encodedText = encodeURIComponent(
      language === 'english'
        ? 'Learn Python interactively with PySeekho!'
        : 'PySeekho: Asaan Roman Urdu mein Python seekhein aur practice karein!'
    );
    window.open(`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`, '_blank');
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(publicShareUrl)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Band karein"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-sky-500 to-emerald-500 flex items-center justify-center shadow-md shrink-0">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>{language === 'english' ? 'Share PySeekho with Others' : 'PySeekho Ka Link Doston Ko Bhejein'}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {language === 'english' 
                ? 'Send this link so anyone can open and learn Python directly in their browser!'
                : 'Yeh link WhatsApp, doston, ya group mein bhejein taake baqi sab bhi seekh sakein!'}
            </p>
          </div>
        </div>

        {/* Primary Public Link Box */}
        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-sky-500" />
              <span>{language === 'english' ? 'Direct Public Link (Works on any device)' : 'Public Link (Har mobile aur laptop par chalta hai)'}</span>
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
              Live & Public
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-slate-800 dark:text-slate-200 truncate select-all">
              {publicShareUrl}
            </div>
            <button
              onClick={handleCopyLink}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer shadow-sm active:scale-95 ${
                copiedLink
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold'
              }`}
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{language === 'english' ? 'Copied!' : 'Copy Ho Gaya!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{language === 'english' ? 'Copy Link' : 'Link Copy Karein'}</span>
                </>
              )}
            </button>
          </div>
          {copiedLink && (
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Link clipboard mein copy ho gaya hai! Kisi bhi chat ya group mein paste kar dein.</span>
            </p>
          )}
        </div>

        {/* 1-Click Social Sharing Buttons */}
        <div className="space-y-3 mb-6">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
            {language === 'english' ? 'Quick 1-Click Share' : 'Fauri Share Karein:'}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* WhatsApp Share */}
            <button
              onClick={handleWhatsAppShare}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Par Bhejein</span>
            </button>

            {/* Telegram Share */}
            <button
              onClick={handleTelegramShare}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Telegram Par Bhejein</span>
            </button>

            {/* Copy Full Urdu Invite Message */}
            <button
              onClick={handleCopyMessage}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                copiedMessage
                  ? 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-400 text-emerald-800 dark:text-emerald-300'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200'
              }`}
            >
              {copiedMessage ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedMessage ? 'Message Copy Ho Gaya!' : 'Mukammal Dawat Message Copy'}</span>
            </button>

            {/* QR Code Toggle */}
            <button
              onClick={() => setShowQrCode(!showQrCode)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 transition-all cursor-pointer"
            >
              <QrCode className="w-4 h-4 text-amber-500" />
              <span>{showQrCode ? 'QR Code Chhupayein' : 'Mobile Scan QR Code'}</span>
            </button>
          </div>
        </div>

        {/* QR Code Scanner Display */}
        {showQrCode && (
          <div className="bg-slate-100 dark:bg-slate-800/80 rounded-xl p-4 mb-6 text-center border border-slate-300 dark:border-slate-700 animate-in fade-in duration-200">
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center justify-center gap-1.5">
              <Smartphone className="w-4 h-4 text-sky-500" />
              <span>Apne Mobile Ke Camera Se Scan Karein:</span>
            </p>
            <div className="inline-block p-3 bg-white rounded-xl shadow-md border border-slate-200">
              <img 
                src={qrImageUrl} 
                alt="PySeekho QR Code" 
                className="w-44 h-44 mx-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
              Mobile camera is code par rakhein, link tap karte hi mobile par khul jayega!
            </p>
          </div>
        )}

        {/* Helpful Explanation Cards: How it works for others */}
        <div className="bg-amber-500/10 border border-amber-300/40 dark:border-amber-500/20 rounded-xl p-4 space-y-2 text-xs">
          <h4 className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Kamyabi Se Share Karne Ke 3 Ahem Nukat:</span>
          </h4>
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11.5px] leading-relaxed">
            <li className="flex items-start gap-1.5">
              <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">1.</span>
              <span><strong>Kisi Login Ki Zaroorat Nahi:</strong> Jisko bhi aap yeh link bhejenge, unhein koi account banane ya software install karne ki zaroorat nahi. Link tap karte hi Python runner aur lessons khul jayenge.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">2.</span>
              <span><strong>Har User Ki Progress Mehfooz:</strong> Jab koi doosra user challenge solve karega ya lesson mukammal karega, unka record unke apne phone/browser mein save hoga. Aapka apna progress mutasir nahi hoga.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-amber-600 dark:text-amber-400 font-bold shrink-0">3.</span>
              <span><strong>WhatsApp Status & Groups:</strong> Yeh link aap apne doston ke WhatsApp group, Facebook, ya status par laga sakte hain taake zyada se zyada log muft Python seekh sakein!</span>
            </li>
          </ul>
        </div>

        {/* Test Open Link In New Tab */}
        <div className="mt-5 flex justify-end gap-2.5">
          <a
            href={publicShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>Naye tab mein check karein</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Band Karein (Done)
          </button>
        </div>
      </div>
    </div>
  );
};
