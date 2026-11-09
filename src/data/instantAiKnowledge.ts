export interface InstantAnswer {
  keywords: string[];
  title: string;
  response: string;
}

export const instantKnowledgeBase: InstantAnswer[] = [
  {
    keywords: ['print() aur return', 'print aur return', 'print vs return', 'print return farq', 'print aur return mein kya farq hai', 'print return'],
    title: 'print() Aur return Mein Farq',
    response: `Assalam-o-Alaikum! 🎒 Boht zabardast aur ahem sawal pucha aapne!

### 📢 \`print()\` vs \`return\` Ka Asal Farq:

1. **\`print()\` (School Ka Loudspeaker / Screen Par Dikhana):**
• Ye sirf aur sirf **screen par insano ko dikhane** ke liye hota hai.
• Computer is result ko dimaagh (RAM) mein save **nahi** karta.
• Example: Agar aap assembly mein loudspeaker par ailan karein to sab sun lete hain, lekin register mein kuch likha nahi jata.

\`\`\`python
def dikhao(a, b):
    print(a + b)  # Screen par 15 nazar aayega

jawab = dikhao(10, 5)
print(jawab)  # ❌ Yahan "None" aayega! Kyunke dikhao ne kuch wapis nahi bheja
\`\`\`

---

2. **\`return\` (Juice Machine Ka Glass / Value Wapis Bhejna):**
• Ye calculation ka **asal jawab program ko wapis** deta hai taakay aap usko aagay kisi aur hisaab mein istemal kar sakein.
• Example: Juice machine fruit lekar glass mein juice deti hai, jisko aap pee sakte hain ya fridge mein mehfooz kar sakte hain.

\`\`\`python
def hisaab(a, b):
    return a + b  # Asal nateeja 15 wapis bheja

jawab = hisaab(10, 5)
kul_bill = jawab * 2  # ✅ Ab hum 15 ko aagay multiply kar sakte hain!
print("Kul Bill:", kul_bill)  # Output: 30
\`\`\`

📌 **Golden Rule:** Agar nateeja kisi variable mein store karna hai ya aagay calculate karna hai to **\`return\`** karein; agar sirf user ko dikhana hai to **\`print()\`** karein!`
  },

  {
    keywords: ['sep', 'end', 'separator', 'ending character', 'sep aur end', 'sep and end', 'sep parameter', 'end parameter'],
    title: 'print() Ke sep Aur end Parameters Ka Mukammal Concept',
    response: `Assalam-o-Alaikum! 🖨️ Boht ahem sawal! Python ke \`print()\` function mein \`sep\` aur \`end\` do boht taqatwar options hain:

### 1. \`sep\` Parameter (Separator)
• **Kia karta hai:** Jab aap \`print()\` ke andar 1 se zyada cheezein coma (\`,\`) se alag kar ke likhte hain, to Python unke darmiyan by-default aik space rakhta hai. \`sep\` use kar ke aap bata sakte hain ke unke beech mein kya aana chahiye.
• **Example:**
\`\`\`python
print("Karachi", "Lahore", "Islamabad", "Peshawar", sep=" -> ")
# Output: Karachi -> Lahore -> Islamabad -> Peshawar
\`\`\`
*(Yahan default space ki jagah " -> " aagaya).*

---

### 2. \`end\` Parameter (Ending Character)
• **Kia karta hai:** Normally jab 1 \`print()\` statement khatam hota hai, to Python automatic agli nayi line par chala jata hai (\`\\n\`). \`end\` parameter se aap is default behavior ko badal sakte hain taakay agla text usi line mein aage jure.
• **Example:**
\`\`\`python
print("Day 1", end=" : ")
print("Passed Successfully!")
# Output: Day 1 : Passed Successfully!
\`\`\`
*(Dono print statements aik hi line mein jurr gaye kyunke pehle wale ke end mein humne " : " diya tha).*

---

### 📊 Summary Table
| Parameter | Default Value | Kaam (Operational Purpose) |
| :--- | :--- | :--- |
| **\`sep\`** | \`" "\` (Space) | Items ke beech ka gap/symbol control karta hai |
| **\`end\`** | \`"\\n"\` (New Line) | Print line ke aakhir mein kya aayega wo control karta hai |`
  },

  {
    keywords: ['syllabus', 'nisab', 'cs101', 'curriculum', 'prospectus', 'clos', 'credit hours'],
    title: 'CS-101 / PY-2026 Academic Syllabus (Nisab-e-Taleem)',
    response: `Assalam-o-Alaikum! 📜 Hamara mukammal Academic Syllabus (Nisab-e-Taleem) live hai:

### 🎓 Course Specifications:
• **Course Code:** CS-101 / PY-2026
• **Title:** Complete Python Programming & Full-Stack Web Development
• **Credit Hours:** 4 Credit Hours (3 Theory + 1 Daily Practical Lab)
• **Total Modules:** 27 Structured Academic Units (85 Contact Hours)
• **Prerequisite:** Zero (Fresh Students Welcome)
• **Passing Criteria:** Minimum 60% Overall Score (60/100 Marks)

### 📚 Structure:
1. **Q1: Foundations (Modules 1-7)** - Syntax, sep/end, type casting, if/else, loops, lists, dictionaries.
2. **Q2: Modular & Defensive Logic (Modules 8-18)** - Functions, args/kwargs, try-except-finally.
3. **Q3: Advanced Data & XML Pipeline (Modules 19-22)** - File parsing, CSV automation, capstones.
4. **Q4: Web & App Studio (Modules 23-27)** - Semantic HTML5, Tailwind CSS, Python FastAPI, Cloud Deployment.

💡 Header mein **"📜 Syllabus"** tab par click karein ya Print / PDF save karein!`
  },

  {
    keywords: ['variable', 'data type', 'masala dabba', 'int', 'float', 'str', 'shuru kahan se'],
    title: 'Variables Aur Data Types (Kitchen Ke Dabbe)',
    response: `Assalam-o-Alaikum! 📦 Aaiye Variables ko bilkul asaan tareeqe se samajhte hain:

### 🏷️ Variable Kya Hai? (Masala Dabba Analogy)
Tasawwur karein kitchen mein plastic ka aik dabba hai jis par bahar chitt (label) lagi hai: **\`cheeni\`**.
Dabbe ka naam hai **Variable**, aur jo cheeni andar dali hai wo hai **Value**!

\`\`\`python
# 1. Integer (int) -> Poora number (koi ashariya nahi)
roll_no = 25

# 2. Float (float) -> Ashariya / Point wala number
marks_percentage = 88.5

# 3. String (str) -> Har wo cheez jo quotes "..." mein band ho
student_naam = "Zainab Khan"

# 4. Boolean (bool) -> Sirf True (Sach) ya False (Jhoot)
pass_hai = True
\`\`\`

### ⭐ Fresh Student Ke 3 Usool:
1. **Space Mana Hai:** \`roll no = 25\` ❌ ghalat hai. Hamesha \`roll_no = 25\` ✅ likhein.
2. **Number Se Shuru Nahi:** \`1student\` ❌ ghalat hai, \`student1\` ✅ sahi hai.
3. **Ek Bar (=) Ka Matlab:** Right side ki value left side ke dabbe mein daal do!`
  },

  {
    keywords: ['indentation', 'indentationerror', '4 space', 'space error'],
    title: 'IndentationError (4 Spaces Ka Usool)',
    response: `Assalam-o-Alaikum! ⚠️ Ghabrayein nahi, dunya ka har Python student sabse pehle isi ghalati se guzarta hai!

### 📏 Indentation Kya Hai?
Doosri languages (C++, Java) mein code ko dabbe mein band karne ke liye curly braces \`{ ... }\` lagate hain. Magar **Python braces nahi use karta balke "4 Spaces" (Tab) use karta hai!**

Jab bhi aap \`if\`, \`else\`, \`for\`, ya \`def\` likhein, to uske andar wali agli line **4 spaces aagay** honi chahiye.

\`\`\`python
# ❌ GHALAT (IndentationError aayega):
if age >= 18:
print("Adult")  # Error! Ye line if ke barabar khari hai!

# ✅ BILKUL SAHI (4 Spaces aagay):
if age >= 18:
    print("Adult")  # Keyboard par Tab ya 4 spaces dabayein!
\`\`\`

💡 **Quick Fix:** Jis line par error aaye, wahan cursor le ja kar aik bar **\`Tab\`** ka button daba dein!`
  },

  {
    keywords: ['if', 'elif', 'else', 'colon', 'traffic signal', 'shart'],
    title: 'if, elif, else Aur Colon (:) Ka Usool',
    response: `Assalam-o-Alaikum! 🚦 Faisla saazi (Conditionals) ka boht aasan tareeqa:

### 🚦 Traffic Light Ki Misal:
• **\`if\` (Agar):** AGAR light RED hai to ruko.
• **\`elif\` (Warna Agar):** WARNA AGAR light YELLOW hai to tayyar ho jao.
• **\`else\` (Warna):** WARNA (Green) gaari chalao!

\`\`\`python
signal = "yellow"

if signal == "red":
    print("Ruk jayein!")
elif signal == "yellow":
    print("Tayyar ho jayein!")
else:
    print("Chalein!")
\`\`\`

### 📌 2 Zaroori Batain:
1. **Colon (\`:\`) Lagana Farz Hai:** Har \`if\`, \`elif\`, aur \`else\` ke aakhir mein \`:\` lagana lazmi hai, iska matlab hai "To phir ye karo".
2. **Do Bar (\`==\`):** Barabari check karne ke liye do bar \`==\` lagate hain, aik bar \`=\` nahi!`
  },

  {
    keywords: ['loop', 'for loop', 'while loop', 'range', 'attendance'],
    title: 'for Loop Aur while Loop Ki Wazahat',
    response: `Assalam-o-Alaikum! 🔄 Loops ka matlab hai ek hi kaam baar baar dohrana:

### 1. \`for loop\` (Classroom Attendance):
Jab aapko pehle se pata ho ke kitni dafa kaam karna hai (jaise 1 se 5 tak ginti):

\`\`\`python
for i in range(1, 6):  # 1 se shuru, 6 se pehle (yaani 5) tak
    print("Student Roll Number:", i)
\`\`\`

### 2. \`while loop\` (Rassi Koodna):
Jab tak condition True rahe, tab tak kaam karte raho:

\`\`\`python
battery = 3
while battery > 0:
    print(f"Mobile chal raha hai... Battery: {battery}")
    battery -= 1  # Aik kam kiya taakay loop kabhi ruk sakay
print("Mobile band ho gaya!")
\`\`\`

📌 **Yaad Rakhein:** \`range(1, 10)\` sirf 1 se 9 tak chalega, 10 shamil nahi hota!`
  },

  {
    keywords: ['exam', 'day 1 exam', 'day 1', 'tayyari', '10 exam', 'paper'],
    title: 'Day 1 Ke 10 Practical Exams Ki Tayyari',
    response: `Assalam-o-Alaikum! 📝 Day 1 Exam boht aasan aur maze-daar hai:

### 📋 Day 1 Ke 10 Sawalat Ki Checklist:
1. **Q1:** \`print("Hello, Python!")\` print karna.
2. **Q2:** Do variables \`naam\` aur \`city\` bana kar unko print karna.
3. **Q3:** Math addition: \`num1 + num2\` ka sum screen par dikhana.
4. **Q4:** F-string formatting: \`f"Mera naam {naam} hai"\`.
5. **Q5:** Data types check karna: \`type(x)\`.
6. **Q6:** String concatenation (\`+\` se do lafz jodna).
7. **Q7:** Basic math operations (\`*\`, \`/\`, \`-\`).
8. **Q8:** Modulus remainder (\`%\`) se baaqi nikalna.
9. **Q9:** Boolean check (\`True\` / \`False\`).
10. **Q10:** Mini Bio Data Card program.

💡 **Tips:**
• Header mein **"Daily Exams (14 Days)"** par click karein.
• Har sawal ke neeche starter code mojood hai, usme apna code likhein aur **"Run Code & Submit Test"** dabayein. 10 mein se 10 sawal sahi hone par 100/100 marks milenge!`
  },

  {
    keywords: ['syntaxerror', 'nameerror', 'typeerror', 'indexerror', 'error'],
    title: 'Python Ke Aam Errors Aur Unka Hal',
    response: `Assalam-o-Alaikum! 🩺 Error se ghabrayein nahi, ye programming ka hissa hain:

1. **\`SyntaxError: invalid syntax\`:**
• Wajah: Quotes band karna bhool gaye, colon \`:\` chhoot gaya, ya variable ke naam mein space de di.
• Hal: Line ke aakhir mein colon aur quotes check karein.

2. **\`NameError: name '...' is not defined\`:**
• Wajah: Variable banane se pehle use kar liya, ya text ke ird gird quotes nahi lagaye.
• Hal: Text ko \`"text"\` mein likhein aur spelling check karein.

3. **\`TypeError: can only concatenate str to str\`:**
• Wajah: String ke sath direct integer number jod diya jaise \`"Age: " + 20\`.
• Hal: \`str(20)\` use karein ya f-string likhein: \`f"Age: {20}"\`.

4. **\`IndexError: list index out of range\`:**
• Wajah: List mein sirf 3 cheezein theen (index 0, 1, 2) aur aapne \`items[5]\` maang liya.`
  }
];

export function findInstantAnswer(query: string): string | null {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  // Clean version without punctuation (e.g. "print() aur return mein kya farq hai?" -> "print aur return mein kya farq hai")
  const qClean = q.replace(/[^a-z0-9\s]/gi, ' ').replace(/\s+/g, ' ').trim();

  for (const item of instantKnowledgeBase) {
    const isMatch = item.keywords.some(kw => {
      const kwLower = kw.toLowerCase();
      const kwClean = kwLower.replace(/[^a-z0-9\s]/gi, ' ').replace(/\s+/g, ' ').trim();
      return q.includes(kwLower) || qClean.includes(kwLower) || (kwClean.length > 0 && qClean.includes(kwClean));
    });
    if (isMatch) {
      return item.response;
    }
  }

  // Special multi-token intents for ultra-fast instant answers
  if (qClean.includes('print') && qClean.includes('return')) {
    const item = instantKnowledgeBase.find(i => i.title.includes('print() Aur return'));
    if (item) return item.response;
  }

  if (qClean.includes('sep') || qClean.includes('separator') || (qClean.includes('end') && (qClean.includes('parameter') || qClean.includes('print')))) {
    const item = instantKnowledgeBase.find(i => i.title.includes('sep Aur end'));
    if (item) return item.response;
  }

  if (qClean.includes('syllabus') || qClean.includes('nisab') || qClean.includes('cs101') || qClean.includes('prospectus')) {
    const item = instantKnowledgeBase.find(i => i.title.includes('Academic Syllabus'));
    if (item) return item.response;
  }

  return null;
}
