import { Lesson } from '../types';

export const professionalWebLessonsData: Lesson[] = [
  {
    id: 'lesson-23-web-design-fundamentals',
    moduleIndex: 23,
    level: 'professional',
    title: {
      roman_urdu: '23. Web Designing Ka Taaruf (HTML5 & Modern CSS)',
      english: '23. Web Design Fundamentals (HTML5 & Modern CSS)',
      urdu: '23۔ ویب ڈیزائننگ کا تعارف (HTML5 اور جدید CSS)'
    },
    subtitle: {
      roman_urdu: 'Webpage kaise banta hai? Structure, Tags, aur Tailwind Styling',
      english: 'How webpages are structured and styled with HTML5 and Tailwind CSS',
      urdu: 'ویب پیج کیسے بنتا ہے اور اسٹائل کیسے کیا جاتا ہے'
    },
    durationMinutes: 20,
    xpReward: 60,
    summary: {
      roman_urdu: 'Web designing ka matlab hai internet par nazar aane wale safhaat (webpages) ko design karna. HTML webpage ka kankaal (skeleton) banata hai, jabke CSS aur Tailwind usay khoobsurat rang, font aur layout dete hain.',
      english: 'Web design creates visual layouts for the internet. HTML provides structure, while modern CSS and Tailwind add colors, typography, spacing, and elegance.',
      urdu: 'ویب ڈیزائننگ میں HTML ساخت بناتی ہے اور CSS رنگ و خوبصورتی فراہم کرتی ہے۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Webpage Ke 3 Bunyadi Sutoon (HTML, CSS, JS)',
          english: 'The 3 Pillars of Web Design',
          urdu: 'ویب کے تین بنیادی ستون'
        },
        content: {
          roman_urdu: 'Har professional website teen cheezon se mil kar banti hai:\n1. **HTML (HyperText Markup Language):** Webpage ka dhancha (Headings, Buttons, Text, Images).\n2. **CSS / Tailwind CSS:** Rang, padding, borders, shadows, aur animations.\n3. **JavaScript / Python:** Button dabane par hone wala action aur server ka logic.',
          english: 'Every website relies on HTML for markup, CSS/Tailwind for visual presentation, and JavaScript/Python for interactivity.',
          urdu: 'ایچ ٹی ایم ایل ساخت بناتی ہے، سی ایس ایس ڈیزائن دیتی ہے اور پائتھن یا جاوا اسکرپٹ ایکشن کنٹرول کرتے ہیں۔'
        },
        codeSnippet: `<!-- HTML Ka Bunyadi Dhancha -->
<div class="p-6 bg-slate-900 text-white rounded-2xl shadow-xl">
  <h1 class="text-2xl font-bold text-amber-400">Khush Amdeed PySeekho Web!</h1>
  <p class="text-sm text-slate-300 mt-2">Yeh hamara pehla modern webpage card hai.</p>
  <button class="mt-4 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all">
    Click Karein 🚀
  </button>
</div>`,
        keyTakeaway: {
          roman_urdu: 'HTML tags (<tag>...</tag>) structure banate hain aur classes styling karti hain.',
          english: 'HTML tags define semantic structure and CSS utility classes provide instant styling.',
          urdu: 'ٹیگز ڈھانچہ بناتے ہیں اور کلاسز ڈیزائن سنبھالتی ہیں۔'
        }
      },
      {
        heading: {
          roman_urdu: 'Tailwind CSS: Fast & Modern Styling',
          english: 'Tailwind CSS Utility Styling',
          urdu: 'ٹیل ونڈ کے ذریعے تیز ترین اسٹائلنگ'
        },
        content: {
          roman_urdu: 'Pehle zamane mein lambi lambi CSS files likhni parti theen. Modern developers **Tailwind CSS** istemal karte hain jahan aap direct class mein styling likhte hain:\n• `p-4` = 16px Padding (andar ki khali jagah)\n• `bg-sky-500` = Neela background\n• `text-white` = Safaid rang ka text\n• `rounded-xl` = Gol khubsurat konay (rounded corners)\n• `shadow-lg` = 3D saya (depth)',
          english: 'Tailwind CSS utilities eliminate separate CSS files: p-4 adds padding, bg-sky-500 sets background, rounded-xl rounds corners, and shadow-lg provides realistic depth.',
          urdu: 'ٹیل ونڈ میں الگ فائل بنانے کے بجائے براہ راست کلاسز سے ڈیزائن کیا جاتا ہے۔'
        },
        codeSnippet: `<div class="max-w-md mx-auto p-5 bg-white border border-slate-200 rounded-2xl shadow-md">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 font-bold">
      Py
    </div>
    <div>
      <h3 class="font-bold text-slate-900">Student Profile</h3>
      <p class="text-xs text-slate-500">Python Web Developer</p>
    </div>
  </div>
</div>`
      }
    ],
    interactiveExample: {
      title: 'Webpage Card Test Karein',
      code: `# Python string mein HTML store kar ke template banana
html_card = """
<div style="padding: 20px; background: #0f172a; color: white; border-radius: 12px; font-family: sans-serif;">
  <h2 style="color: #f59e0b; margin: 0;">Python Web Designer</h2>
  <p style="color: #94a3b8; font-size: 14px;">Mera pehla web app card tayyar hai!</p>
  <button style="background: #10b981; color: black; border: none; padding: 8px 16px; border-radius: 8px; font-weight: bold; cursor: pointer;">
    Visit Site
  </button>
</div>
"""
print("Generated HTML Card:\\n")
print(html_card)`,
      explanation: {
        roman_urdu: 'Python code se HTML generate karna web development ka bunyadi usool hai!',
        english: 'Generating dynamic HTML strings via Python is the core mechanism of web templating.',
        urdu: 'پائتھن کے ذریعے ایچ ٹی ایم ایل بنانا ویب ڈویلپمنٹ کی بنیاد ہے۔'
      }
    },
    commonMistakes: [
      {
        mistake: '<button>Click Here  # ❌ Tag band nahi kiya',
        fix: '<button>Click Here</button>  # ✅ Har opening tag ka closing tag hota hai',
        explanation: {
          roman_urdu: 'HTML mein jo tag shuru hota hai (jaise <p>, <div>, <button>) usko </tag> se band karna zaroori hai.',
          english: 'Always close HTML tags with matching </tag> closing syntax.',
          urdu: 'ٹیگ کو بند کرنا لازمی ہے۔'
        }
      }
    ],
    schoolAnalogy: {
      realLifeObject: '🏠 Ghar Ki Tameer (House Construction)',
      concept: 'HTML = Eent aur Saria, CSS = Paint aur Furniture',
      story: {
        roman_urdu: 'Tasawwur karein aap naya ghar bana rahe hain: Pehle mazdoor eentain, saria aur cement laga kar deewarain khari karte hain (ye HTML hai). Phir painter aakar rang karta hai, tiles lagti hain aur parde lagte hain (ye CSS/Tailwind hai). Aur jab darwaze ki ghanti bajti hai to awaz aati hai (ye JavaScript/Python Logic hai)!',
        english: 'Like constructing a building: bricks and concrete walls form the structure (HTML), paint, tiles, and lighting provide interior aesthetics (CSS), and electrical appliances perform actions (Python/JS).',
        urdu: 'گھر کی اینٹوں کی طرح ایچ ٹی ایم ایل ڈھانچہ ہے اور رنگ و روغن سی ایس ایس ہے۔'
      }
    }
  },

  {
    id: 'lesson-24-designing-modern-webpages',
    moduleIndex: 24,
    level: 'professional',
    title: {
      roman_urdu: '24. Responsive Webpages Design Karna (Flexbox & Grid)',
      english: '24. Designing Modern Webpages (Flexbox & Grid Layouts)',
      urdu: '24۔ جدید ویب پیجز ڈیزائن کرنا (فلیکس باکس اور گرڈ)'
    },
    subtitle: {
      roman_urdu: 'Mobile aur Desktop par fit aane wala webpage kaise banayein?',
      english: 'Creating responsive web layouts that look stunning on mobile and desktop',
      urdu: 'موبائل اور کمپیوٹر اسکرین کے مطابق رسپانسو ویب پیج بنانا'
    },
    durationMinutes: 25,
    xpReward: 65,
    summary: {
      roman_urdu: 'Aaj ke daur mein 70% users mobile par websites dekhte hain. Responsive Web Design ka matlab hai ke aapka webpage mobile, tablet aur desktop har screen par khud ba khud khoobsurat tareeqe se adjust ho jaye.',
      english: 'Over 70% of web traffic is mobile. Responsive web design ensures fluid visual layouts that adapt dynamically to phones, tablets, and wide desktop screens.',
      urdu: 'رسپانسو ویب ڈیزائننگ سے ویب سائٹ موبائل اور کمپیوٹر دونوں پر بہترین نظر آتی ہے۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Flexbox: Cheezon Ko Barabar Qataar Mein Lagana',
          english: 'Flexbox Alignment System',
          urdu: 'فلیکس باکس کے ذریعے قطار بندی'
        },
        content: {
          roman_urdu: 'Jab aapko buttons, logo aur links ko ek hi line mein seedha rakhna ho to `flex` use karte hain:\n• `flex`: Cheezon ko sath sath bitha deta hai.\n• `items-center`: Ooper neeche se darmiyan (vertical center) karta hai.\n• `justify-between`: Aik cheez ko baayein (left) aur doosri ko daayein (right) phenk deta hai.\n• `gap-4`: Darmiyan mein 16px ka fasla deta hai.',
          english: 'Flexbox arranges elements along a single row or column: `flex` aligns items horizontally, `items-center` centers vertically, and `justify-between` spreads items across available width.',
          urdu: 'فلیکس باکس عناصر کو ایک ہی لائن میں خوبصورتی سے ترتیب دیتا ہے۔'
        },
        codeSnippet: `<!-- Modern Navigation Bar with Flexbox -->
<nav class="flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 text-white">
  <div class="text-xl font-extrabold text-amber-400">MyWebApp</div>
  <div class="flex items-center gap-4 text-sm font-medium">
    <a href="#" class="hover:text-amber-400 transition-colors">Home</a>
    <a href="#" class="hover:text-amber-400 transition-colors">Courses</a>
    <a href="#" class="px-3 py-1.5 bg-amber-500 text-slate-950 font-bold rounded-lg">Sign In</a>
  </div>
</nav>`
      },
      {
        heading: {
          roman_urdu: 'CSS Grid: Cards Ka Jaal (2 ya 3 Columns)',
          english: 'CSS Grid for Multi-Column Cards',
          urdu: 'سی ایس ایس گرڈ کے ذریعے کارڈز کی ترتیب'
        },
        content: {
          roman_urdu: 'Jab aapko dukan ke products ya courses ke dher saray cards 3 columns mein dikhane hon, to Grid sabse behtareen hai:\n• `grid`: Grid mode active karta hai.\n• `grid-cols-1 md:grid-cols-3`: Mobile par 1 column, jabke desktop par 3 columns!\n• `gap-6`: Cards ke darmiyan 24px ka khoobsurat fasla.',
          english: 'CSS Grid arranges cards in multi-column layouts: `grid-cols-1 md:grid-cols-3` displays single column on mobile and three columns on desktops.',
          urdu: 'گرڈ سسٹم کے ذریعے کارڈز کو خوبصورت کالمز میں تقسیم کیا جاتا ہے۔'
        },
        codeSnippet: `<!-- Responsive 3-Card Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
  <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <h4 class="font-bold text-slate-900">Python Basics</h4>
    <p class="text-xs text-slate-500 mt-1">Variables, loops aur logic</p>
  </div>
  <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <h4 class="font-bold text-slate-900">Web Designing</h4>
    <p class="text-xs text-slate-500 mt-1">HTML5, Tailwind & UI</p>
  </div>
  <div class="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <h4 class="font-bold text-slate-900">Full-Stack Apps</h4>
    <p class="text-xs text-slate-500 mt-1">FastAPI + Frontend Connect</p>
  </div>
</div>`
      }
    ],
    interactiveExample: {
      title: 'Responsive Grid Layout Generator',
      code: `# Python script generating dynamic course cards
courses = [
    {"title": "HTML5 & UI", "level": "Beginner", "lessons": 10},
    {"title": "Tailwind Magic", "level": "Intermediate", "lessons": 15},
    {"title": "FastAPI Web Apps", "level": "Professional", "lessons": 20}
]

print("=== GENERATED CARDS HTML ===")
for c in courses:
    card = f'<div class="card"><h3>{c["title"]}</h3><span>{c["level"]} - {c["lessons"]} Duroos</span></div>'
    print(card)`,
      explanation: {
        roman_urdu: 'Real-world websites mein Python database se data nikaal kar aise hi cards generate karta hai!',
        english: 'In production systems, backend Python loops over database records to generate responsive frontend cards.',
        urdu: 'پائتھن ڈیٹا بیس سے معلومات لا کر اسی طرح کارڈز تیار کرتا ہے۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'class="w-[1200px]"  # ❌ Fixed width mobile par screen se bahar nikal jayegi',
        fix: 'class="max-w-6xl w-full mx-auto"  # ✅ Responsive width jo screen ke mutabiq adjust ho',
        explanation: {
          roman_urdu: 'Kabhi bhi screen ki fixed width pixels mein mat dein warna mobile par horizontal scroll bar aa jayega.',
          english: 'Never use hardcoded pixel widths; use max-w containers with w-full for fluid responsiveness.',
          urdu: 'کبھی بھی فکسڈ چوڑائی نہ دیں تاکہ موبائل پر اسکرین کٹ نہ جائے۔'
        }
      }
    ],
    schoolAnalogy: {
      realLifeObject: '🍱 School Ka Lunch Box (Compartments)',
      concept: 'Flexbox aur Grid Layouts',
      story: {
        roman_urdu: 'Tasawwur karein school ka modern lunch box jisme alag alag khane (compartments) bane hain: aik mein roti, aik mein phal, aik mein chamach. Agar khana na hota to sab aapas mein mil jata! Grid aur Flexbox webpage ke lunch box compartments hain jo har cheez ko apni sahi jagah par saja kar rakhte hain.',
        english: 'Like a bento lunch box with neat compartments keeping sandwiches, fruit, and utensils organized. Grid and Flexbox provide geometric compartments that keep web UI elements impeccably organized.',
        urdu: 'لنچ باکس کے خانوں کی طرح فلیکس باکس اور گرڈ ہر چیز کو اس کی جگہ پر رکھتے ہیں۔'
      }
    }
  },

  {
    id: 'lesson-25-python-backend-apis',
    moduleIndex: 25,
    level: 'professional',
    title: {
      roman_urdu: '25. Python Web Backend (FastAPI & Web APIs)',
      english: '25. Python Web Backend (FastAPI & REST APIs)',
      urdu: '25۔ پائتھن ویب بیک اینڈ (FastAPI اور اے پی آئیز)'
    },
    subtitle: {
      roman_urdu: 'Python se web server kaise banate hain aur browser ko data kaise dete hain?',
      english: 'Building modern web backends and serving JSON data with Python',
      urdu: 'پائتھن کے ذریعے ویب سرور اور بیک اینڈ بنانا'
    },
    durationMinutes: 25,
    xpReward: 70,
    summary: {
      roman_urdu: 'Webpage sirf ek kholi (shell) hota hai. Asal dimaagh Python backend mein hota hai jo hisaab kitaab karta hai, database se data lata hai aur secure APIs banata hai. Is sabaq mein hum seekhenge ke Python web server kaise banta hai.',
      english: 'Webpages are interactive visual frontends; Python backends are the brain that authenticates users, executes calculations, queries databases, and serves JSON APIs.',
      urdu: 'ویب پیج سامنے کا چہرہ ہے جبکہ پائتھن بیک اینڈ اصل دماغ ہے جو ڈیٹا پروسیس کرتا ہے۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'API Kya Hoti Hai? (Waiter Ki Misal)',
          english: 'What is an API? (The Restaurant Waiter)',
          urdu: 'اے پی آئی کیا ہوتی ہے؟'
        },
        content: {
          roman_urdu: 'Tasawwur karein aap restaurant mein bethe hain:\n• Aap **Frontend (Customer)** hain.\n• Kitchen jahan khana banta hai wo **Python Backend / Database** hai.\n• Aur jo **Waiter** aapka order kitchen le jata hai aur khana la kar deta hai, usko **API (Application Programming Interface)** kehte hain!\n\nBrowser Python ko request bhejta hai (`GET /api/students`), Python jawab mein data (JSON) wapis deta hai.',
          english: 'An API acts like a restaurant waiter: the browser (customer) places a request, the waiter delivers it to the Python backend (kitchen), and returns the computed JSON data.',
          urdu: 'اے پی آئی ویٹر کی طرح ہے جو یوزر کی درخواست لے جا کر پائتھن سرور سے جواب واپس لاتی ہے۔'
        },
        codeSnippet: `# Modern Python Web Backend with FastAPI style router
from typing import Dict, List

# In-memory student database
students_db = [
    {"id": 1, "name": "Ali Khan", "grade": "A+", "xp": 450},
    {"id": 2, "name": "Zainab Fatima", "grade": "A", "xp": 380}
]

# API Handler function
def get_students_api() -> Dict:
    return {
        "status": "success",
        "total": len(students_db),
        "data": students_db
    }

# API Call Test
response = get_students_api()
print("API Response for Browser:\\n", response)`
      },
      {
        heading: {
          roman_urdu: 'HTTP Methods: GET aur POST Ka Farq',
          english: 'HTTP Methods: GET vs POST',
          urdu: 'گیٹ اور پوسٹ میں فرق'
        },
        content: {
          roman_urdu: 'Web par Python se baat karne ke 2 sabse ahem tareeqay hain:\n1. **GET Request:** Data maangna (jaise student profile dekhna, list nikaalna).\n2. **POST Request:** Naya data bhejna (jaise admission form submit karna, login karna, nayi post banana).',
          english: 'GET retrieves information from the server; POST submits new data payload (like form submissions or authentication).',
          urdu: 'ڈیٹا دیکھنے کے لیے GET اور نیا فارم بھیجنے کے لیے POST استعمال ہوتا ہے۔'
        },
        codeSnippet: `# POST Request Handler: Naya student add karna
def add_student_api(name: str, grade: str) -> Dict:
    new_student = {
        "id": len(students_db) + 1,
        "name": name,
        "grade": grade,
        "xp": 50
    }
    students_db.append(new_student)
    return {"message": "Student kamyabi se add ho gaya!", "student": new_student}

# Test adding a new student
result = add_student_api("Hamza Tariq", "A")
print(result)`
      }
    ],
    interactiveExample: {
      title: 'Python REST API Server Simulate Karein',
      code: `# Complete Python Web API Route Dispatcher
routes = {}

def route(path, method="GET"):
    def decorator(func):
        routes[(path, method)] = func
        return func
    return decorator

@route("/api/hello", "GET")
def hello_handler():
    return {"greeting": "Assalam-o-Alaikum from Python Server!", "time": "2026-11"}

@route("/api/calculate-fee", "POST")
def fee_handler(base_fee=1500, discount=200):
    total = base_fee - discount
    return {"total_payable": total, "discount_applied": discount}

# Simulating incoming browser requests
print("Request 1:", routes[("/api/hello", "GET")]())
print("Request 2:", routes[("/api/calculate-fee", "POST")](2000, 500))`,
      explanation: {
        roman_urdu: 'FastAPI aur Flask bilkul isi tarah decorators (@route) se web APIs banate hain!',
        english: 'Modern Python web frameworks like FastAPI and Flask leverage decorators to bind URLs to backend handler functions.',
        urdu: 'فاسٹ اے پی آئی اسی طرح ڈیکوریٹرز کے ذریعے راستے بناتی ہے۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'return "Ali, 15, A+"  # ❌ Raw comma text bhejna',
        fix: 'return {"name": "Ali", "age": 15, "grade": "A+"}  # ✅ Hamesha JSON (Dictionary) return karein',
        explanation: {
          roman_urdu: 'Web APIs hamesha JSON (Python Dictionary) format mein data bhejti hain taakay browser asaani se padh sakay.',
          english: 'Always return structured dictionaries (JSON) from web APIs for seamless frontend parsing.',
          urdu: 'اے پی آئی سے ہمیشہ ڈکشنری یا جیسن واپس کریں تاکہ براؤزر سمجھ سکے۔'
        }
      }
    ],
    schoolAnalogy: {
      realLifeObject: '🍽️ Restaurant Ka Waiter Aur Kitchen',
      concept: 'REST APIs Ka Asal Tareeqa-e-Kar',
      story: {
        roman_urdu: 'Customer (browser) table par baith kar menu card se order deta hai. Waiter (API) kitchen ke chef (Python backend) ke paas jata hai. Chef khana pakata hai aur waiter plate saja kar customer ko deta hai. Agar waiter na hota to customer ko khud kitchen mein jaana parta jo ke unsafe hota!',
        english: 'Like a dining experience: customer (frontend) never enters the hot kitchen (backend/database). The waiter (API) safely ferries orders and dishes back and forth.',
        urdu: 'ریستوران کے ویٹر کی طرح اے پی آئی کسٹمر اور باورچی خانے کے درمیان رابطہ قائم کرتی ہے۔'
      }
    }
  },

  {
    id: 'lesson-26-building-complete-web-apps',
    moduleIndex: 26,
    level: 'professional',
    title: {
      roman_urdu: '26. Mukammal Web App Banana (Frontend + Backend Connect)',
      english: '26. Building Complete Web Apps (Full-Stack Connection)',
      urdu: '26۔ مکمل ویب ایپ بنانا (فرنٹ اینڈ اور بیک اینڈ کا ملاپ)'
    },
    subtitle: {
      roman_urdu: 'Webpage ke button dabane par Python code kaise chalate hain?',
      english: 'Connecting frontend HTML forms and buttons to Python backend logic',
      urdu: 'ویب پیج کے بٹن دبانے پر پائتھن کوڈ چلانا'
    },
    durationMinutes: 30,
    xpReward: 80,
    summary: {
      roman_urdu: 'Full-Stack Web Development ka matlab hai frontend (jo user dekhta hai) aur backend (jo computer dimaagh hai) dono ko aapas mein jodna. Jab user form bharta hai, to JavaScript `fetch()` ke zariye Python backend ko data bhejti hai aur foran screen par live result dikhati hai.',
      english: 'Full-stack development fuses client-facing UI with server-authoritative Python computation using modern fetch() asynchronous requests for seamless interactive experiences.',
      urdu: 'فل اسٹیک ڈویلپمنٹ میں سامنے نظر آنے والا پیج اور بیک اینڈ کا پائتھن کوڈ آپس میں مل کر کام کرتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Asynchronous fetch() Se Data Bhejna',
          english: 'Sending Data with fetch()',
          urdu: 'فیچ کے ذریعے ڈیٹا کا تبادلہ'
        },
        content: {
          roman_urdu: 'Purane zamane mein form submit karne par poora page reload hota tha. Aaj kal `fetch()` API se page reload hue baghair background mein Python ko data chala jata hai:\n```javascript\nconst res = await fetch("/api/calculate-gpa", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ marks: 85 })\n});\nconst data = await res.json();\nconsole.log(data.gpa); // Live result!\n```',
          english: 'Modern web apps use asynchronous `fetch()` to communicate with backend APIs without refreshing the page, ensuring snappy native-app responsiveness.',
          urdu: 'جدید ایپس میں صفحہ ریفریش کیے بغیر بیک اینڈ سے فوری جواب حاصل کیا جاتا ہے۔'
        },
        codeSnippet: `<!-- Full-Stack Interactive GPA Calculator HTML Form -->
<div class="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white shadow-xl">
  <h3 class="text-lg font-bold text-amber-400">Student GPA Calculator</h3>
  
  <div class="mt-4 space-y-3">
    <div>
      <label class="block text-xs font-semibold text-slate-300 mb-1">Marks (0 to 100):</label>
      <input id="student-marks" type="number" placeholder="e.g. 88" 
        class="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-sm outline-none focus:border-amber-400" />
    </div>

    <button onclick="calculateGpa()" 
      class="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-md active:scale-95">
      Calculate Result Live ⚡
    </button>
  </div>

  <div id="result-box" class="mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs hidden">
    <!-- Dynamic Python Result will appear here -->
  </div>
</div>`
      },
      {
        heading: {
          roman_urdu: 'Python Backend Calculation Logic',
          english: 'Python Backend Processing',
          urdu: 'پائتھن بیک اینڈ کا حسابی عمل'
        },
        content: {
          roman_urdu: 'Backend par Python function marks check karega aur GPA aur Grade calculate karega:',
          english: 'The Python server validates incoming scores and returns structured grade results.',
          urdu: 'پائتھن سرور نمبروں کی جانچ کر کے گریڈ کا حساب لگاتا ہے۔'
        },
        codeSnippet: `def compute_grade_api(marks: float) -> dict:
    if marks >= 85:
        return {"gpa": 4.0, "grade": "A+", "remarks": "Shaandar Kamyabi! 🌟"}
    elif marks >= 75:
        return {"gpa": 3.5, "grade": "A", "remarks": "Boht Acha! 👍"}
    elif marks >= 65:
        return {"gpa": 3.0, "grade": "B", "remarks": "Acha Nateeja 🙂"}
    elif marks >= 50:
        return {"gpa": 2.0, "grade": "C", "remarks": "Pass, Mazeed Mehnat Karein 📚"}
    else:
        return {"gpa": 0.0, "grade": "F", "remarks": "Fail, Dobara Koshish Karein ⚠️"}

# Test
print(compute_grade_api(88))`
      }
    ],
    interactiveExample: {
      title: 'Full-Stack Web App Pipeline Test',
      code: `# Complete Python Full-Stack App Pipeline
class StudentWebApp:
    def __init__(self):
        self.submissions = []
        
    def submit_application(self, name: str, course: str, fee_paid: bool):
        app_id = f"APP-{len(self.submissions) + 101}"
        record = {
            "app_id": app_id,
            "name": name,
            "course": course,
            "status": "Approved" if fee_paid else "Pending Payment"
        }
        self.submissions.append(record)
        return {"status": "success", "record": record}

app = StudentWebApp()
res1 = app.submit_application("Ali Raza", "Python Web Master", True)
res2 = app.submit_application("Sara Ahmed", "FastAPI Cloud", False)

print("Form 1 Result:", res1)
print("Form 2 Result:", res2)`,
      explanation: {
        roman_urdu: 'Aapne dekha kaise Python backend records ko manage kar ke frontend ko instant status deta hai.',
        english: 'Notice how the server-authoritative Python state manages records and yields instant confirmation payloads.',
        urdu: 'دیکھیں کس طرح پائتھن بیک اینڈ ریکارڈ محفوظ کر کے جواب دیتا ہے۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'Frontend par saari calculation karna (e.g. price, password verify)  # ❌ Insecure',
        fix: 'Calculation aur validation hamesha Python Backend par karein  # ✅ Secure',
        explanation: {
          roman_urdu: 'Frontend ka code koi bhi browser mein dekh sakta hai aur badal sakta hai. Tamam ahem hisaab kitaab hamesha Python backend par hona chahiye.',
          english: 'Never trust client-side validation alone; sensitive computations must reside server-side in Python.',
          urdu: 'سیکیورٹی کے لیے اہم حساب کتاب ہمیشہ پائتھن بیک اینڈ پر ہونا چاہیے۔'
        }
      }
    ],
    schoolAnalogy: {
      realLifeObject: '🏦 Bank Ka ATM Machine',
      concept: 'Frontend Screen Aur Backend Vault',
      story: {
        roman_urdu: 'ATM machine ki touch screen sirf Frontend hai jahan aap button dabate hain. Magar paise ginne wali machine aur aapke account ka balance peeche band kamre ke computer (Python Backend) mein hota hai. Screen sirf hukm leti hai, asal paisa aur faisla backend par hota hai!',
        english: 'Like an ATM: the touch screen is the frontend collecting user input, but the vault and account ledger remain securely locked behind the bank backend server.',
        urdu: 'اے ٹی ایم اسکرین کی طرح فرنٹ اینڈ صرف بٹن لیتا ہے، اصل رقم اور حساب اندرونی تجوری میں ہوتا ہے۔'
      }
    }
  },

  {
    id: 'lesson-27-app-deployment-hosting',
    moduleIndex: 27,
    level: 'professional',
    title: {
      roman_urdu: '27. Web App Ko Internet Par Live Karna (Deployment & Cloud)',
      english: '27. Web App Deployment & Cloud Hosting',
      urdu: '27۔ ویب ایپ کو انٹرنیٹ پر لائیو کرنا (ڈپلائمنٹ اور کلاؤڈ)'
    },
    subtitle: {
      roman_urdu: 'Apni banayi hui app ko dunya ke doston tak link se kaise pohchayein?',
      english: 'Hosting web apps on the cloud with custom URLs and production environments',
      urdu: 'اپنی ایپ کو انٹرنیٹ پر ڈالنا تاکہ دنیا بھر کے لوگ لنک کے ذریعے دیکھ سکیں'
    },
    durationMinutes: 25,
    xpReward: 85,
    summary: {
      roman_urdu: 'App bana lena aadhi manzil hai; usay internet par live (deploy) karna asali kamyabi hai! Is sabaq mein hum seekhenge ke cloud servers (Google Cloud Run, Vercel, Render) par app kaise deploy hoti hai aur link kaise banta hai.',
      english: 'Building an application is half the battle; deploying it to high-availability cloud platforms (Google Cloud Run, Vercel, Docker) makes it globally accessible via public links.',
      urdu: 'ایپ بنانے کے بعد اسے کلاؤڈ سرور پر ڈال کر پبلک لنک بنانا ڈپلائمنٹ کہلاتا ہے۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Localhost vs Live Internet Cloud',
          english: 'Localhost vs Production Cloud',
          urdu: 'لوکل ہوسٹ اور پبلک کلاؤڈ کا فرق'
        },
        content: {
          roman_urdu: 'Jab aap computer par code chalate hain to wo `http://localhost:3000` par hota hai jo sirf aapke laptop par chalta hai. Internet par sab ko dikhane ke liye hum usay **Cloud Server** par host karte hain jo 24 ghante on rehta hai:\n• **Google Cloud Run:** Serverless container hosting.\n• **Vercel / Render:** One-click automated web deployment.\n• **Environment Variables (.env):** API Keys ko mehfooz rakhna.',
          english: 'Localhost runs strictly on your machine. Production cloud deployment (Google Cloud Run, Vercel, Docker) packages code into containers running 24/7 on global CDN networks.',
          urdu: 'لوکل ہوسٹ صرف آپ کے کمپیوٹر پر چلتا ہے جبکہ کلاؤڈ سرور پر ڈالنے سے دنیا میں کوئی بھی دیکھ سکتا ہے۔'
        },
        codeSnippet: `# Production Health Check & Metadata Endpoint
def health_check():
    return {
        "status": "online",
        "service": "PySeekho Full-Stack Python App",
        "region": "asia-southeast1",
        "uptime": "99.9%",
        "version": "2.5.0"
    }

print(health_check())`
      }
    ],
    interactiveExample: {
      title: 'Production Config Simulator',
      code: `# Simulating Production Environment Loader
import json

app_config = {
    "app_name": "PySeekho Pro Web App",
    "environment": "production",
    "port": 3000,
    "ssl_enabled": True,
    "cloud_provider": "Google Cloud Run",
    "features": ["HTML_UI", "Tailwind_CSS", "FastAPI_Backend", "Firestore_DB"]
}

print("=== SERVER READY FOR DEPLOYMENT ===")
print(json.dumps(app_config, indent=2))`,
      explanation: {
        roman_urdu: 'Yeh configuration batati hai ke aapka web app professional cloud standard par tayyar hai.',
        english: 'This production configuration confirms readiness for enterprise cloud deployment.',
        urdu: 'یہ کنفیگریشن ثابت کرتی ہے کہ آپ کی ایپ کلاؤڈ پر چلنے کے لیے تیار ہے۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'Code mein direct secret passwords ya API keys likh dena  # ❌ Security Risk',
        fix: 'Hamesha Environment Variables (.env) use karein  # ✅ Secure Standard',
        explanation: {
          roman_urdu: 'Kabhi bhi API key ya password code ke andar mat likhein; hamesha process.env ya os.environ se uthayein.',
          english: 'Never hardcode credentials in code repositories; always read from environment secrets.',
          urdu: 'پاس ورڈ یا اے پی آئی کی کبھی بھی کوڈ میں براہ راست نہ لکھیں۔'
        }
      }
    ],
    schoolAnalogy: {
      realLifeObject: '📻 Radio Station Ka Tower',
      concept: 'Deployment Aur Broadcast',
      story: {
        roman_urdu: 'Agar aap apne kamre mein akele gaana gayein to sirf aapko awaz aayegi (ye Localhost hai). Magar jab aap radio station ke transmission tower se broadcast karte hain, to poore mulk ki gaariyon aur gharon mein awaz pohanchti hai (ye Cloud Deployment hai)!',
        english: 'Singing in your room only reaches your ears (localhost). Broadcasting from a radio tower reaches every car and home across the country (cloud deployment).',
        urdu: 'ریڈیو ٹاور کی طرح کلاؤڈ ڈپلائمنٹ آپ کی ایپ کو پوری دنیا تک نشر کر دیتی ہے۔'
      }
    }
  }
];
