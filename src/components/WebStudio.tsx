import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, 
  Code2, 
  Play, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Server, 
  FileCode, 
  HelpCircle,
  Eye,
  RotateCcw,
  Cloud,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';

interface WebStudioProps {
  language: Language;
  onNavigateToLesson?: (lessonId: string) => void;
  onAskAi?: (context: string, initialPrompt: string) => void;
}

interface Template {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  htmlCode: string;
  pythonCode: string;
}

const TEMPLATES: Template[] = [
  {
    id: 'portfolio',
    name: 'Tech Academy & Portfolio Landing Page',
    category: 'Landing Page',
    badge: 'Popular',
    description: 'Modern responsive landing page with hero banner, 3-column course grid, interactive contact button, and dark modern aesthetic.',
    htmlCode: `<!DOCTYPE html>
<html lang="ur" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Al-Hikmah Tech Academy</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 font-sans min-h-screen">

  <!-- Navigation Bar -->
  <header class="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg">
          🐍
        </div>
        <span class="font-bold text-lg tracking-tight bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
          PySeekho Academy
        </span>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-sm text-slate-400">
        <a href="#courses" class="hover:text-amber-400 transition-colors">Courses</a>
        <a href="#about" class="hover:text-amber-400 transition-colors">Features</a>
        <a href="#pricing" class="hover:text-amber-400 transition-colors">Pricing</a>
      </nav>
      <button onclick="enrollAlert()" class="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all active:scale-95">
        Start Free Trial 🚀
      </button>
    </div>
  </header>

  <!-- Hero Section -->
  <main class="max-w-6xl mx-auto px-4 py-16 text-center">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-6">
      <span>✨ Naya Batch Shuru Hai</span>
      <span>•</span>
      <span>100% Roman Urdu & English</span>
    </div>
    
    <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
      Apna Pehla <span class="text-amber-400 underline decoration-amber-500/40">Python & Web App</span> Aaj Hi Banayein!
    </h1>
    
    <p class="mt-4 text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
      Baghair kisi mushkil formula ke, shuru se aakhir tak web designing aur full-stack Python development seekhein asaan zaban mein.
    </p>

    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
      <button onclick="enrollAlert()" class="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95">
        Dakhila Lein (Free) →
      </button>
      <button onclick="demoAlert()" class="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm rounded-xl transition-all">
        Live Demo Dekhein 📺
      </button>
    </div>

    <!-- 3-Column Features Grid -->
    <section id="courses" class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
      <!-- Card 1 -->
      <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition-all group">
        <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
          🎨
        </div>
        <h3 class="text-lg font-bold text-white mb-2">Web Designing (HTML & CSS)</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Khoobsurat responsive webpages banana seekhein Tailwind CSS ke zariye jo mobile aur desktop har jagah behtareen dikhein.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all group">
        <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
          ⚡
        </div>
        <h3 class="text-lg font-bold text-white mb-2">Python FastAPI Backend</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Python ke tezeen frameworks se REST APIs banana seekhein jo frontend ke buttons aur forms se connect hoti hain.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 transition-all group">
        <div class="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
          ☁️
        </div>
        <h3 class="text-lg font-bold text-white mb-2">Cloud Deployment</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Apni website ko Google Cloud Run ya Render par dunya bhar mein doston ke sath link share karne ke liye live karein.
        </p>
      </div>
    </section>
  </main>

  <!-- Interactive JavaScript -->
  <script>
    function enrollAlert() {
      alert("MashaAllah! Aapka Free Trial register ho gaya hai. Ab aap code sikhna shuru kar sakte hain!");
    }
    function demoAlert() {
      alert("Yeh preview live webpage hai! Iska code baayein (left) editor mein tabdeel kar ke dekhein.");
    }
  </script>
</body>
</html>`,
    pythonCode: `# server.py - FastAPI Backend
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="PySeekho Academy Backend")

class LeadInput(BaseModel):
    name: str
    phone: str
    course: str

@app.get("/")
def home():
    return {
        "status": "online",
        "message": "Assalam-o-Alaikum! PySeekho Academy API live hai.",
        "version": "1.0.0"
    }

@app.post("/api/enroll")
def enroll_student(lead: LeadInput):
    # Student record save karein
    return {
        "success": True,
        "message": f"Mubarak ho {lead.name}! Aapka {lead.course} mein dakhila ho chuka hai.",
        "student_id": "STU-8821"
    }`
  },
  {
    id: 'gpa-calculator',
    name: 'Student GPA & Result Web App (Full-Stack)',
    category: 'Interactive Web App',
    badge: 'Educational',
    description: 'Dynamic web application with interactive subject mark inputs, instant percentage & GPA computation via simulated Python API, and visual grade badge.',
    htmlCode: `<!DOCTYPE html>
<html lang="ur" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student GPA Calculator</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 font-sans min-h-screen p-4 md:p-8 flex items-center justify-center">

  <div class="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
    <!-- Header -->
    <div class="flex items-center justify-between pb-6 border-b border-slate-800">
      <div>
        <span class="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
          Student Portal
        </span>
        <h1 class="text-2xl font-bold text-white mt-1">GPA & Grade Calculator</h1>
      </div>
      <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl font-bold">
        📊
      </div>
    </div>

    <!-- Input Form -->
    <div class="mt-6 space-y-4">
      <div>
        <label class="block text-xs font-semibold text-slate-300 mb-1">Student Ka Naam</label>
        <input id="studentName" type="text" value="Muhammad Ahmed" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500">
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Python Marks (out of 100)</label>
          <input id="sub1" type="number" value="88" min="0" max="100" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500">
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Web Design Marks (out of 100)</label>
          <input id="sub2" type="number" value="92" min="0" max="100" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500">
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Database Marks (out of 100)</label>
          <input id="sub3" type="number" value="79" min="0" max="100" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500">
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-300 mb-1">Algorithms Marks (out of 100)</label>
          <input id="sub4" type="number" value="85" min="0" max="100" class="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500">
        </div>
      </div>

      <button onclick="calculateGpa()" class="w-full mt-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all active:scale-98">
        Calculate GPA & Grade (Call Python API) ⚡
      </button>
    </div>

    <!-- Live Result Card -->
    <div id="resultCard" class="mt-6 p-5 rounded-2xl bg-slate-950/80 border border-amber-500/30">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs text-slate-400">Total Marks: <span id="totalMarks" class="text-white font-semibold">344 / 400</span></p>
          <p class="text-xs text-slate-400 mt-1">Percentage: <span id="percentage" class="text-white font-semibold">86.0%</span></p>
        </div>
        <div class="text-right">
          <div class="text-3xl font-extrabold text-amber-400" id="gpaValue">3.80</div>
          <span id="gradeBadge" class="inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Grade A+ (Mubarak!)
          </span>
        </div>
      </div>
      <p id="studentMsg" class="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300">
        🎉 Shandar karkardagi Muhammad Ahmed! Aapne outstanding result hasil kiya hai.
      </p>
    </div>
  </div>

  <script>
    function calculateGpa() {
      const name = document.getElementById('studentName').value || "Student";
      const m1 = parseFloat(document.getElementById('sub1').value) || 0;
      const m2 = parseFloat(document.getElementById('sub2').value) || 0;
      const m3 = parseFloat(document.getElementById('sub3').value) || 0;
      const m4 = parseFloat(document.getElementById('sub4').value) || 0;

      const total = m1 + m2 + m3 + m4;
      const percent = (total / 400) * 100;
      
      let gpa = 0.0;
      let grade = "F";
      let badgeClass = "bg-rose-500/20 text-rose-400 border border-rose-500/30";

      if (percent >= 85) {
        gpa = 4.0;
        grade = "Grade A+ (Outstanding)";
        badgeClass = "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
      } else if (percent >= 75) {
        gpa = 3.5;
        grade = "Grade A (Boht Acha)";
        badgeClass = "bg-teal-500/20 text-teal-400 border border-teal-500/30";
      } else if (percent >= 65) {
        gpa = 3.0;
        grade = "Grade B (Acha)";
        badgeClass = "bg-amber-500/20 text-amber-400 border border-amber-500/30";
      } else if (percent >= 50) {
        gpa = 2.0;
        grade = "Grade C (Pass)";
        badgeClass = "bg-orange-500/20 text-orange-400 border border-orange-500/30";
      } else {
        gpa = 0.0;
        grade = "Fail (Dobara Koshish)";
        badgeClass = "bg-rose-500/20 text-rose-400 border border-rose-500/30";
      }

      document.getElementById('totalMarks').innerText = total + " / 400";
      document.getElementById('percentage').innerText = percent.toFixed(1) + "%";
      document.getElementById('gpaValue').innerText = gpa.toFixed(2);
      
      const badge = document.getElementById('gradeBadge');
      badge.innerText = grade;
      badge.className = "inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-bold " + badgeClass;

      document.getElementById('studentMsg').innerText = 
        percent >= 50 
          ? ("🎉 Mubarak ho " + name + "! Aapne " + percent.toFixed(1) + "% ke sath kamyabi hasil ki.") 
          : ("Mehnat karein " + name + "! Next exam mein inshaAllah behtar score aayega.");
    }
  </script>
</body>
</html>`,
    pythonCode: `# server.py - Student Grade Calculation API
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Student GPA API")

class GradeRequest(BaseModel):
    student_name: str
    marks: List[float]

@app.post("/api/calculate-gpa")
def compute_gpa(payload: GradeRequest):
    total = sum(payload.marks)
    max_marks = len(payload.marks) * 100
    percentage = (total / max_marks) * 100 if max_marks > 0 else 0
    
    if percentage >= 85:
        gpa = 4.0
        grade = "A+"
    elif percentage >= 75:
        gpa = 3.5
        grade = "A"
    elif percentage >= 65:
        gpa = 3.0
        grade = "B"
    elif percentage >= 50:
        gpa = 2.0
        grade = "C"
    else:
        gpa = 0.0
        grade = "F"
        
    return {
        "student": payload.student_name,
        "total_marks": total,
        "percentage": round(percentage, 2),
        "gpa": gpa,
        "grade": grade,
        "status": "PASS" if gpa >= 2.0 else "NEEDS_IMPROVEMENT"
    }`
  },
  {
    id: 'ecommerce',
    name: 'Online Shop & Cart Web App',
    category: 'E-Commerce',
    badge: 'Advanced',
    description: 'Complete e-commerce product catalog with category filter, add-to-cart reactivity, price summary drawer, and checkout action.',
    htmlCode: `<!DOCTYPE html>
<html lang="ur" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevStore - Programmer Gear</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 font-sans min-h-screen">

  <nav class="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
    <div class="flex items-center gap-2">
      <span class="text-2xl">💻</span>
      <span class="font-extrabold text-lg text-white">DevStore PK</span>
    </div>
    <div class="flex items-center gap-3">
      <button onclick="toggleCart()" class="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded-xl text-xs font-bold border border-slate-700">
        <span>🛒 Cart</span>
        <span id="cartCount" class="px-2 py-0.5 bg-amber-500 text-slate-950 rounded-full text-[10px]">0</span>
      </button>
    </div>
  </nav>

  <main class="max-w-6xl mx-auto px-4 py-8">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-extrabold text-white">Developers Ke Zaroori Aalaat</h2>
      <p class="text-slate-400 text-sm mt-1">Apna setup upgrade karein aur behtar coding karein</p>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Product 1 -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/50 transition-all">
        <div>
          <div class="h-32 bg-slate-950 rounded-xl flex items-center justify-center text-5xl mb-4">
            ⌨️
          </div>
          <span class="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Mechanical</span>
          <h3 class="text-base font-bold text-white mt-1">RGB Coding Keyboard</h3>
          <p class="text-xs text-slate-400 mt-1">Ultra-tactile switches for silent Python coding.</p>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span class="text-base font-bold text-amber-400">Rs. 6,500</span>
          <button onclick="addToCart('RGB Keyboard', 6500)" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-all">
            + Add to Cart
          </button>
        </div>
      </div>

      <!-- Product 2 -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/50 transition-all">
        <div>
          <div class="h-32 bg-slate-950 rounded-xl flex items-center justify-center text-5xl mb-4">
            🎧
          </div>
          <span class="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Audio</span>
          <h3 class="text-base font-bold text-white mt-1">Noise Cancel Headphones</h3>
          <p class="text-xs text-slate-400 mt-1">Zero distraction focus for deep debugging sessions.</p>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span class="text-base font-bold text-amber-400">Rs. 8,200</span>
          <button onclick="addToCart('ANC Headphones', 8200)" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-all">
            + Add to Cart
          </button>
        </div>
      </div>

      <!-- Product 3 -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/50 transition-all">
        <div>
          <div class="h-32 bg-slate-950 rounded-xl flex items-center justify-center text-5xl mb-4">
            ☕
          </div>
          <span class="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Accessory</span>
          <h3 class="text-base font-bold text-white mt-1">Python Developer Ceramic Mug</h3>
          <p class="text-xs text-slate-400 mt-1">"Turn Coffee into Clean Python Code" Print.</p>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span class="text-base font-bold text-amber-400">Rs. 1,200</span>
          <button onclick="addToCart('Python Mug', 1200)" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-all">
            + Add to Cart
          </button>
        </div>
      </div>
    </div>

    <!-- Cart Summary Modal -->
    <div id="cartModal" class="hidden mt-8 p-6 bg-slate-900 border border-amber-500/40 rounded-2xl max-w-md mx-auto shadow-2xl">
      <h3 class="text-lg font-bold text-white mb-4">Aapka Shopping Cart 🛒</h3>
      <div id="cartItems" class="space-y-2 text-xs text-slate-300">
        <p class="text-slate-500">Cart khali hai.</p>
      </div>
      <div class="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between font-bold">
        <span>Total Bill:</span>
        <span id="cartTotal" class="text-amber-400 text-lg">Rs. 0</span>
      </div>
      <button onclick="checkout()" class="w-full mt-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-all">
        Order Confirm Karein (Cash on Delivery)
      </button>
    </div>
  </main>

  <script>
    let cart = [];

    function addToCart(name, price) {
      cart.push({ name, price });
      updateCartUI();
    }

    function updateCartUI() {
      document.getElementById('cartCount').innerText = cart.length;
      const modal = document.getElementById('cartModal');
      modal.classList.remove('hidden');

      const itemsDiv = document.getElementById('cartItems');
      if (cart.length === 0) {
        itemsDiv.innerHTML = '<p class="text-slate-500">Cart khali hai.</p>';
      } else {
        itemsDiv.innerHTML = cart.map((item, index) => 
          '<div class="flex justify-between items-center bg-slate-950 p-2 rounded-lg">' +
            '<span>' + item.name + '</span>' +
            '<span class="font-bold text-amber-400">Rs. ' + item.price.toLocaleString() + '</span>' +
          '</div>'
        ).join('');
      }

      const total = cart.reduce((sum, item) => sum + item.price, 0);
      document.getElementById('cartTotal').innerText = 'Rs. ' + total.toLocaleString();
    }

    function toggleCart() {
      const modal = document.getElementById('cartModal');
      modal.classList.toggle('hidden');
    }

    function checkout() {
      if (cart.length === 0) {
        alert("Pehle cart mein koi item shamil karein!");
        return;
      }
      alert("Shukriya! Aapka Rs. " + document.getElementById('cartTotal').innerText + " ka order darj ho chuka hai.");
      cart = [];
      updateCartUI();
      document.getElementById('cartModal').classList.add('hidden');
    }
  </script>
</body>
</html>`,
    pythonCode: `# server.py - E-Commerce API Endpoints
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(title="DevStore Inventory & Orders API")

class CartItem(BaseModel):
    name: str
    price: float

class OrderRequest(BaseModel):
    customer_phone: str
    items: List[CartItem]

@app.get("/api/products")
def get_products():
    return [
        {"id": 1, "name": "RGB Coding Keyboard", "price": 6500, "in_stock": True},
        {"id": 2, "name": "Noise Cancel Headphones", "price": 8200, "in_stock": True},
        {"id": 3, "name": "Python Developer Mug", "price": 1200, "in_stock": True}
    ]

@app.post("/api/checkout")
def create_order(order: OrderRequest):
    total = sum(i.price for i in order.items)
    return {
        "order_id": "ORD-99124",
        "status": "CONFIRMED",
        "total_amount": total,
        "payment_method": "Cash on Delivery",
        "delivery_days": 2
    }`
  }
];

export const WebStudio: React.FC<WebStudioProps> = ({
  language,
  onNavigateToLesson,
  onAskAi
}) => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(TEMPLATES[0]);
  const [htmlCode, setHtmlCode] = useState<string>(TEMPLATES[0].htmlCode);
  const [pythonCode, setPythonCode] = useState<string>(TEMPLATES[0].pythonCode);
  const [activeEditorTab, setActiveEditorTab] = useState<'html' | 'python' | 'guide'>('html');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copied, setCopied] = useState<boolean>(false);
  const [previewKey, setPreviewKey] = useState<number>(0);
  const [savedToDriveMsg, setSavedToDriveMsg] = useState<string | null>(null);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // When selected template changes
  const handleSelectTemplate = (template: Template) => {
    setSelectedTemplate(template);
    setHtmlCode(template.htmlCode);
    setPythonCode(template.pythonCode);
    setPreviewKey(k => k + 1);
  };

  const handleRefresh = () => {
    setPreviewKey(k => k + 1);
  };

  const handleCopyCode = () => {
    const code = activeEditorTab === 'html' ? htmlCode : pythonCode;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedTemplate.id}-app.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveToDrive = () => {
    setSavedToDriveMsg("File ready! Workspace Hub tab par jakar Google Drive par click karein.");
    setTimeout(() => setSavedToDriveMsg(null), 4000);
  };

  const viewportWidthClass = 
    viewport === 'mobile' ? 'max-w-[375px]' :
    viewport === 'tablet' ? 'max-w-[768px]' : 'w-full';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Top Banner & Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Professional Level: Web Designing & App Studio</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Web & App Studio 🌐
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Webpage kaise design hota hai aur Python se connect ho kar poori application kaise banti hai? Yahan live code likhein aur barabar mein foran responsive preview dekhein!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onAskAi && (
              <button
                onClick={() => onAskAi(
                  "Web Studio: HTML, Tailwind aur Python API",
                  "Main Web Studio mein webpage design kar raha hoon. Mujhe asaan tareeqay se samjhayein ke HTML form ka button dabane par Python backend kaise call hota hai?"
                )}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <span>AI Ustad Rehnumai 🤖</span>
              </button>
            )}

            {onNavigateToLesson && (
              <button
                onClick={() => onNavigateToLesson('lesson-23-web-design-fundamentals')}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <span>Lesson 23 Parhein 📖</span>
              </button>
            )}
          </div>
        </div>

        {/* Template Selector Pills */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-mono font-semibold shrink-0 mr-1">Templates:</span>
          {TEMPLATES.map((tmpl) => (
            <button
              key={tmpl.id}
              onClick={() => handleSelectTemplate(tmpl)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                selectedTemplate.id === tmpl.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700/60'
              }`}
            >
              <span>{tmpl.name}</span>
              <span className="px-1.5 py-0.2 text-[10px] bg-indigo-950/80 rounded text-indigo-300 font-mono">
                {tmpl.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      {savedToDriveMsg && (
        <div className="p-3 bg-emerald-950/90 border border-emerald-500 text-emerald-200 text-xs rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{savedToDriveMsg}</span>
        </div>
      )}

      {/* Main Studio Work Area: Dual Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Code Editor (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-sm">
          {/* Editor Tabs & Toolbar */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => setActiveEditorTab('html')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  activeEditorTab === 'html'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>index.html (UI)</span>
              </button>

              <button
                onClick={() => setActiveEditorTab('python')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  activeEditorTab === 'python'
                    ? 'bg-amber-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Server className="w-3.5 h-3.5" />
                <span>server.py (Backend)</span>
              </button>

              <button
                onClick={() => setActiveEditorTab('guide')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  activeEditorTab === 'guide'
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Urdu Rehnumai</span>
              </button>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleCopyCode}
                className="p-1.5 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
                title="Code Copy Karein"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <button
                onClick={handleDownloadHtml}
                className="p-1.5 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
                title="Download HTML File"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Editor Body */}
          <div className="flex-1 min-h-[520px] max-h-[650px] overflow-hidden flex flex-col bg-slate-950">
            {activeEditorTab === 'html' && (
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="w-full h-full p-4 font-mono text-xs text-amber-200/90 bg-slate-950 focus:outline-none resize-none leading-relaxed selection:bg-indigo-600 selection:text-white"
                spellCheck={false}
                placeholder="Write HTML & Tailwind CSS code here..."
              />
            )}

            {activeEditorTab === 'python' && (
              <div className="flex flex-col h-full">
                <div className="p-2.5 bg-slate-900 border-b border-slate-800 text-[11px] text-amber-400 font-mono">
                  # FastAPI Python Backend Endpoint (Yeh code server par run hota hai)
                </div>
                <textarea
                  value={pythonCode}
                  onChange={(e) => setPythonCode(e.target.value)}
                  className="w-full flex-1 p-4 font-mono text-xs text-emerald-300/90 bg-slate-950 focus:outline-none resize-none leading-relaxed selection:bg-amber-600 selection:text-white"
                  spellCheck={false}
                  placeholder="# Write Python FastAPI backend logic here..."
                />
              </div>
            )}

            {activeEditorTab === 'guide' && (
              <div className="p-5 text-slate-300 text-xs space-y-4 overflow-y-auto leading-relaxed">
                <div className="p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-xl">
                  <h4 className="font-bold text-indigo-300 mb-1">Web Designing Ke 3 Asaan Marahil:</h4>
                  <p>1. <strong>HTML Structure:</strong> Heading, buttons, inputs banayein.</p>
                  <p>2. <strong>Tailwind Styling:</strong> Colors (`bg-slate-900`), Padding (`p-4`), Corners (`rounded-2xl`).</p>
                  <p>3. <strong>Python API Connect:</strong> Button click par `fetch('/api/...')` chala kar backend se data lein.</p>
                </div>

                <div>
                  <h4 className="font-bold text-amber-400 mb-1">Cheatsheet: Tailwind Utility Classes</h4>
                  <ul className="space-y-1 font-mono text-[11px] text-slate-400">
                    <li>• <span className="text-amber-300">flex items-center justify-between</span> = Cheezon ko row mein barabar rakhna</li>
                    <li>• <span className="text-amber-300">grid grid-cols-1 md:grid-cols-3</span> = Mobile par 1 column, Laptop par 3 columns</li>
                    <li>• <span className="text-amber-300">rounded-2xl shadow-xl</span> = Khubsurat gol konay aur 3D saya</li>
                    <li>• <span className="text-amber-300">bg-gradient-to-r from-amber-500 to-amber-600</span> = Dilkash rang</li>
                  </ul>
                </div>

                <div className="p-3 bg-amber-950/30 border border-amber-500/30 rounded-xl">
                  <h4 className="font-bold text-amber-300 mb-1">Fresh Students Ke Liye Mashwara:</h4>
                  <p>
                    Upar diye gaye HTML code mein text tabdeel karein, maslan "PySeekho" ki jagah apna naam likhein aur barabar mein dekhein ke live nateeja kaisa aata hai!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Editor Footer Status */}
          <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>Template: {selectedTemplate.category}</span>
            <span>Live Edit Active</span>
          </div>
        </div>

        {/* Right Column: Live Interactive Webpage Preview (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-sm">
          {/* Browser Preview Bar */}
          <div className="px-4 py-2.5 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            {/* Fake Browser URL bar */}
            <div className="flex items-center gap-2 flex-1 max-w-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-2.5 py-1 text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1.5 truncate">
                <Globe className="w-3 h-3 text-emerald-500 shrink-0" />
                <span className="truncate">https://my-app.pyseekho.run/{selectedTemplate.id}</span>
              </div>
            </div>

            {/* Viewport & Refresh Buttons */}
            <div className="flex items-center gap-1 bg-slate-200 dark:bg-slate-900 p-0.5 rounded-xl border border-slate-300 dark:border-slate-800">
              <button
                onClick={() => setViewport('desktop')}
                className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                  viewport === 'desktop'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-slate-500 hover:text-white'
                }`}
                title="Desktop View (100%)"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewport('tablet')}
                className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                  viewport === 'tablet'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-slate-500 hover:text-white'
                }`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewport('mobile')}
                className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                  viewport === 'mobile'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                    : 'text-slate-500 hover:text-white'
                }`}
                title="Mobile Screen View (375px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>

              <div className="h-4 w-px bg-slate-300 dark:bg-slate-800 mx-1" />

              <button
                onClick={handleRefresh}
                className="p-1.5 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
                title="Reload Webpage"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Webpage Canvas Viewport Frame */}
          <div className="flex-1 bg-slate-950 p-2 sm:p-4 flex items-center justify-center min-h-[520px] overflow-auto">
            <div className={`transition-all duration-300 h-full w-full ${viewportWidthClass} bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col`}>
              <iframe
                key={previewKey}
                ref={iframeRef}
                srcDoc={htmlCode}
                title="Web Studio Live Preview"
                className="w-full flex-1 min-h-[520px] bg-slate-950 border-0"
                sandbox="allow-scripts allow-modals allow-forms"
              />
            </div>
          </div>

          {/* Quick Action Bar under Preview */}
          <div className="px-4 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono">Live Tailwind CDN Active</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSaveToDrive}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold transition-all cursor-pointer"
              >
                <Cloud className="w-3.5 h-3.5 text-sky-400" />
                <span>Save to Google Drive</span>
              </button>
              
              <button
                onClick={handleDownloadHtml}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Webpage</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
