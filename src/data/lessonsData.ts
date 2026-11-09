import { Lesson } from '../types';
import { professionalWebLessonsData } from './professionalWebLessonsData';

const baseLessonsData: Lesson[] = [
  // ==========================================
  // LEVEL 1: BEGINNER (IBTIDAI) - MODULES 1 to 7
  // ==========================================
  {
    id: 'lesson-1-intro-print',
    moduleIndex: 1,
    level: 'beginner',
    title: {
      roman_urdu: '1. Python Ka Taaruf & print()',
      english: '1. Python Intro & print() Statement',
      urdu: '1۔ ازگر (پائتھن) کا تعارف اور پرنٹ'
    },
    subtitle: {
      roman_urdu: 'Python kya hai aur apna pehla program kaise chalayein?',
      english: 'What is Python and how to write your first program?',
      urdu: 'پائتھن کیا ہے اور اپنا پہلا پروگرام کیسے لکھیں؟'
    },
    durationMinutes: 10,
    xpReward: 30,
    summary: {
      roman_urdu: 'Python seekhna boht asaan hai kyunke iska syntax aam angrezi jaisa hota hai. `print()` function se hum screen par text ya numbers display karte hain.',
      english: 'Python is a modern, readable programming language. The `print()` function outputs text, numbers, and calculations to the screen.',
      urdu: 'پائتھن ایک انتہائی آسان اور طاقتور زبان ہے۔ پرنٹ فنکشن کی مدد سے ہم اسکرین پر کچھ بھی دکھا سکتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Python Kyun Seekhein?',
          english: 'Why Learn Python?',
          urdu: 'پائتھن کیوں سیکھیں؟'
        },
        content: {
          roman_urdu: 'Python dunya ki sabse mashhoor programming language hai. Isko Web Development, Artificial Intelligence (AI), Data Science, Automation aur Games banane ke liye istemal kiya jata hai.',
          english: 'Python is the world\'s most popular language used for Web Apps, AI, Data Science, and Automation due to its clean and readable syntax.',
          urdu: 'پائتھن مصنوعی ذہانت (AI)، ویب ڈویلپمنٹ اور ڈیٹا سائنس کے لیے دنیا کی سب سے زیادہ استعمال ہونے والی زبان ہے۔'
        },
        keyTakeaway: {
          roman_urdu: 'Python ka code readable aur short hota hai.',
          english: 'Python syntax is concise and easy to read.',
          urdu: 'پائتھن کا کوڈ صاف اور آسان ہوتا ہے۔'
        }
      },
      {
        heading: {
          roman_urdu: 'print() Function Ka Istemal',
          english: 'Using the print() Function',
          urdu: 'پرنٹ فنکشن کا استعمال'
        },
        content: {
          roman_urdu: 'Jab bhi aapko koi cheez screen par dikhani ho, to `print(...)` likhte hain. Text ko quotation marks ("..." ya \'...\') ke andar likhte hain.',
          english: 'To output anything to the console, pass it into `print()`. Text (strings) must be wrapped in quotes.',
          urdu: 'جب بھی اسکرین پر کچھ دکھانا ہو تو ہم پرنٹ فنکشن استعمال کرتے ہیں۔ ٹیکسٹ کو کوٹس میں لکھا جاتا ہے۔'
        },
        codeSnippet: `# Pehla program
print("Assalam-o-Alaikum, Dunya!")
print('Python boht mazedaar hai!')
print(100 + 50)  # Hisaab kitaab (150 aayega)`,
        keyTakeaway: {
          roman_urdu: 'Strings ko quotes mein aur numbers ko baghair quotes ke likhte hain.',
          english: 'Text needs quotes, while numbers do not.',
          urdu: 'ٹیکسٹ کو کوٹس میں جبکہ اعداد کو بغیر کوٹس لکھتے ہیں۔'
        }
      },
      {
        heading: {
          roman_urdu: 'Comments (#) Kya Hote Hain?',
          english: 'What are Comments (#)?',
          urdu: 'تبصرے (Comments) کیا ہیں؟'
        },
        content: {
          roman_urdu: '`#` se shuru hone wali line ko computer run nahi karta. Ye sirf programmer ke samajhne ke liye note hota hai.',
          english: 'Lines starting with `#` are comments. Python ignores them, making them perfect for notes and explanations.',
          urdu: 'ہیش (#) سے شروع ہونے والی لائن کمپیوٹر نہیں پڑھتا، یہ صرف وضاحت کے لیے ہوتی ہے۔'
        },
        codeSnippet: `# Ye aik comment hai, computer isko run nahi karega
print("Sirf ye print hoga!")`
      },
      {
        heading: {
          roman_urdu: 'print() Ke 2 Ahem Options: sep aur end Parameters',
          english: 'print() Advanced Options: sep and end Parameters',
          urdu: 'پرنٹ فنکشن کے دو اہم پیرامیٹرز: sep اور end'
        },
        content: {
          roman_urdu: `Yeh do options Python mein print() function ki output ko customize aur professional banane ke liye intehai zaroori hain:

1. sep Parameter (Separator)
Kia karta hai: Jab aap print() ke andar 1 se zyada cheezein comma (,) se separate karke likhte hain, to Python unke beech me by-default space (" ") rakhta hai. sep use karke aap bata sakte hain ke unke beech me kia symbol ya faasla hona chahiye.

Misaal (sep=" -> "):
print("Karachi", "Lahore", "Islamabad", "Peshawar", sep=" -> ")
Output: Karachi -> Lahore -> Islamabad -> Peshawar
(Yahan space ki jagah " -> " aagaya).

2. end Parameter (Ending Character)
Kia karta hai: Normally jab 1 print() statement khatam hota hai, to Python automatic agli nayi line par chala jata hai (newline \\n). end parameter se aap us default behavior ko change kar sakte hain taake agla text usi line me aage print ho.

Misaal (end=" : "):
print("Day 1", end=" : ")
print("Passed Successfully!")
Output: Day 1 : Passed Successfully!
(Dono print statements ek hi line me jurr gaye kyunke pehle wale ke end me humne " : " diya tha).`,
          english: `Mastering print() parameters:
1. sep (Separator): Controls what delimiter appears between comma-separated arguments (default is single space " ").
2. end (Ending Character): Controls what character is appended after printing (default is newline \\n). Overriding end allows subsequent prints to stay on the same line.`,
          urdu: 'پرنٹ فنکشن میں sep اشیاء کے درمیان کا فاصلہ طے کرتا ہے اور end لائن کے اختتام پر آنے والی علامت طے کرتا ہے۔'
        },
        codeSnippet: `# 1. sep parameter ki misaal (Space ki jagah -> aayega):
print("Karachi", "Lahore", "Islamabad", "Peshawar", sep=" -> ")

# 2. end parameter ki misaal (Dono print ek hi line mein jurr jayenge):
print("Day 1", end=" : ")
print("Passed Successfully!")

# 3. Dono ko mila kar:
print("Score", 100, "XP", 50, sep=" = ", end=" | Mubarak!\\n")`,
        summaryTable: {
          headers: ['Parameter', 'Default Value', 'Asal Kaam (Function / Purpose)', 'Example Output'],
          rows: [
            ['sep', '" " (Space)', 'Items ke beech ka gap/symbol control karta hai', 'sep=" -> " (Karachi -> Lahore)'],
            ['end', '"\\n" (New Line)', 'Print line ke aakhir me kia aaye ga wo control karta hai', 'end=" : " (Dono prints ek line mein)']
          ]
        },
        keyTakeaway: {
          roman_urdu: 'sep items ke darmiyan ka symbol badalta hai, jabke end print khatam hone ke baad agli line par jane ya na jane ko control karta hai.',
          english: 'sep formats between comma items; end formats after the full print statement.',
          urdu: 'سیپ اشیاء کے درمیان اور اینڈ لائن کے اختتام کو سنبھالتا ہے۔'
        }
      }
    ],
    interactiveExample: {
      title: 'print() sep aur end Test Lab',
      code: `# 1. sep parameter test karein:
print("Karachi", "Lahore", "Islamabad", "Peshawar", sep=" -> ")

# 2. end parameter test karein (Same line output):
print("Day 1", end=" : ")
print("Passed Successfully!")

# 3. Numbers aur Calculation:
print("Total", 50 + 50, "Marks", sep=" = ")`,
      explanation: {
        roman_urdu: 'Run Code par click karein aur dekhein ke "->" aur ":" kaise print ko ek hi line mein jurr dete hain!',
        english: 'Click Run Code to see sep and end in action with custom delimiters and continuous line printing.',
        urdu: 'رن کوڈ پر کلک کر کے sep اور end کا مشاہدہ کریں۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'print(Hello World)  # Missing quotes',
        fix: 'print("Hello World")',
        explanation: {
          roman_urdu: 'Har text ko hamesha " " ya \' \' quotation marks mein band karna zaroori hai.',
          english: 'Text without quotes throws a NameError.',
          urdu: 'ٹیکسٹ کے گرد کوٹس لگانا لازمی ہے۔'
        }
      },
      {
        mistake: 'Print("Salam")  # Capital P',
        fix: 'print("Salam")',
        explanation: {
          roman_urdu: 'Python case-sensitive hai; "print" chotay haroof (lowercase) mein hona chahiye.',
          english: 'Python is case-sensitive; `print` must be lowercase.',
          urdu: 'پائتھن میں چھوٹے اور بڑے حروف کا فرق ہوتا ہے۔'
        }
      }
    ],
    challengeId: 'challenge-1-hello-world',
    quizId: 'quiz-1'
  },
  {
    id: 'lesson-2-variables-types',
    moduleIndex: 2,
    level: 'beginner',
    title: {
      roman_urdu: '2. Variables & Core Data Types',
      english: '2. Variables & Core Data Types',
      urdu: '2۔ متغیرات اور بنیادی ڈیٹا ٹائپس'
    },
    subtitle: {
      roman_urdu: 'Data ko store karna aur mukhtalif types (int, float, str, bool)',
      english: 'Storing data and understanding int, float, str, and bool',
      urdu: 'ڈیٹا کو محفوظ کرنا اور اس کی بنیادی اقسام'
    },
    durationMinutes: 12,
    xpReward: 35,
    summary: {
      roman_urdu: 'Variable aik dabbe ki tarah hai jisme hum koi bhi value mehfooz kar sakte hain. Python mein int (poore number), float (ashariya), str (text) aur bool (True/False) hotay hain.',
      english: 'Variables are labeled containers for data. Key types: integers (whole numbers), floats (decimals), strings (text), and booleans (True/False).',
      urdu: 'ویری ایبل ایک ڈبے کی طرح ہے جس میں معلومات محفوظ کی جاتی ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Variable Banana (Assignment)',
          english: 'Creating Variables',
          urdu: 'ویری ایبل بنانا'
        },
        content: {
          roman_urdu: 'Python mein variable banane ke liye sirf naam likhein aur `=` ke baad value de dein. Type batane ki zaroorat nahi hoti, Python khud samajh jata hai!',
          english: 'Just use `variable_name = value`. Python automatically infers the data type.',
          urdu: 'پائتھن میں ویری ایبل بنانے کے لیے بس نام لکھ کر برابر (=) کا نشان لگائیں۔'
        },
        codeSnippet: `umar = 21           # int (Integer)
qeemat = 99.50      # float (Decimal)
naam = "Ali Khan"   # str (String)
student_hai = True  # bool (Boolean: True ya False)`,
        summaryTable: {
          headers: ['Data Type', 'Python Keyword', 'Misaal (Example)', 'Asal Kaam (Real Purpose)'],
          rows: [
            ['Integer', 'int', '21, -5, 100', 'Poore adad (umar, roll number, count)'],
            ['Float', 'float', '99.50, 3.14', 'Ashariya / decimal wale adad (prices, GPA, weights)'],
            ['String', 'str', '"Ali", \'Python\'', 'Text ya lafz (hamesha quotes mein band)'],
            ['Boolean', 'bool', 'True, False', 'Sach ya Jhoot (shart check karne ke liye)']
          ]
        },
        keyTakeaway: {
          roman_urdu: 'Variable ka naam number se shuru nahi ho sakta aur beech mein space nahi aati.',
          english: 'Variable names cannot start with numbers and cannot contain spaces.',
          urdu: 'ویری ایبل کا نام عدد سے شروع نہیں ہو سکتا۔'
        }
      },
      {
        heading: {
          roman_urdu: 'Type Conversion (Casting)',
          english: 'Type Casting',
          urdu: 'ڈیٹا ٹائپ تبدیل کرنا'
        },
        content: {
          roman_urdu: 'Kabhi kabhar humein text ko number mein convert karna parta hai. Iske liye `int()`, `float()`, aur `str()` functions istemal hotay hain.',
          english: 'Convert between types using `int("5")`, `float("3.14")`, or `str(100)`.',
          urdu: 'ٹیکسٹ کو نمبر میں بدلنے کے لیے int() اور str() استعمال ہوتے ہیں۔'
        },
        codeSnippet: `x = "15"          # Ye filhal string hai
y = int(x)        # Ab ye integer ban gaya: 15
print(y + 5)      # Output: 20`
      },
      {
        heading: {
          roman_urdu: 'Variable Name Likhne Ke 4 Zaroori Usool',
          english: '4 Essential Variable Naming Rules',
          urdu: 'ویری ایبل نام لکھنے کے 4 ضروری اصول'
        },
        content: {
          roman_urdu: 'Python mein variable ka naam likhte waqt in 4 cheezon ka dhyan lazmi rakhein:\n1. **Khali Jagah (Space) Mana Hai**: `Roll No = 125` ghalat hai. Space ki jagah underscore `_` lagayein jaise `roll_no = 125`.\n2. **Number Se Shuru Nahi Ho Sakta**: `1student = "Ali"` ghalat hai, `student1` sahi hai.\n3. **Python Case-Sensitive Hai**: `Naam`, `naam` aur `NAAM` teen alag alag variables hain. Hamesha chotay haroof (lowercase) use karein.\n4. **Reserved Words Mana Hain**: `print`, `for`, `if`, `class` ko variable ka naam nahi bana sakte.',
          english: 'Four fundamental naming rules: 1) NO spaces (use underscores like roll_no), 2) Cannot begin with numbers, 3) Python is case-sensitive, 4) Reserved keywords cannot be variable names.',
          urdu: 'ویری ایبل نام میں اسپیس دینا منع ہے، عدد سے شروع نہیں ہو سکتا، اور پائتھن بڑے چھوٹے حروف میں فرق کرتا ہے۔'
        },
        codeSnippet: `# ❌ GHALAT (SyntaxError aayega):
# Roll No = 125     <- Space nahi aa sakti!
# Print("Hello")    <- P capital nahi ho sakta!

# ✅ SAHI TAREEQA:
roll_no = 125       # Underscore lagayein
naam = "Tariq"
age = 24
print(f"Student: {naam}, Roll #{roll_no}, Age: {age}")`,
        keyTakeaway: {
          roman_urdu: 'Variable ke naam mein space ki jagah hamesha underscore "_" lagayein.',
          english: 'Always use underscores instead of spaces in variable names.',
          urdu: 'اسپیس کی جگہ انڈر اسکور کا استعمال کریں۔'
        }
      }
    ],
    interactiveExample: {
      title: 'Variables Test Karein',
      code: `pehla_naam = "Muhammad"
aakhri_naam = "Ali"
umar = 22
kamyab = True

poora_naam = pehla_naam + " " + aakhri_naam
print("Naam:", poora_naam)
print("Umar:", umar)
print("Type of umar:", type(umar))`,
      explanation: {
        roman_urdu: 'Code run karein aur dekhein kaise string aur integer alag alag behave karte hain.',
        english: 'Run the code to see how different data types work together.',
        urdu: 'کوڈ چلا کر متغیرات کی اقسام کا مشاہدہ کریں۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'Roll No = 125  # ❌ SyntaxError: invalid syntax (space in variable name)',
        fix: 'roll_no = 125  # ✅ Underscore lagayein ya rollNo likhein',
        explanation: {
          roman_urdu: 'Variable ke naam mein space (khali jagah) aane par Python SyntaxError deta hai. Hamesha `roll_no` ya `rollNo` likhein.',
          english: 'Variable names cannot have spaces. Use snake_case (roll_no) or camelCase (rollNo).',
          urdu: 'ویری ایبل نام میں اسپیس نہیں آ سکتی۔'
        }
      },
      {
        mistake: 'Print("Assalam-o-Alaikum")  # ❌ NameError: name "Print" is not defined',
        fix: 'print("Assalam-o-Alaikum")  # ✅ Hamesha chota "p" likhein',
        explanation: {
          roman_urdu: 'Python case-sensitive hai! Function ka naam hamesha chotay "p" se `print()` hota hai, capital `Print` nahi.',
          english: 'Python is case-sensitive. The function is lowercase print(), not Print().',
          urdu: 'پائتھن میں پرنٹ ہمیشہ چھوٹے حروف میں ہوتا ہے۔'
        }
      },
      {
        mistake: 'print("Mera score hai: " + 95)  # ❌ Can\'t add string to int directly',
        fix: 'print("Mera score hai: " + str(95))  # ✅ ya print(f"Mera score hai: {95}")',
        explanation: {
          roman_urdu: 'String ke sath number jodnay ke liye pehle number ko `str()` mein convert karein ya f-string use karein.',
          english: 'You cannot concatenate string and integer with `+` directly.',
          urdu: 'ٹیکسٹ اور نمبر کو جوڑنے سے پہلے نمبر کو ٹیکسٹ بنائیں یا کوما استعمال کریں۔'
        }
      }
    ],
    challengeId: 'challenge-2-temperature-converter',
    quizId: 'quiz-2'
  },
  {
    id: 'lesson-3-operators-math',
    moduleIndex: 3,
    level: 'beginner',
    title: {
      roman_urdu: '3. Math & Comparison Operators',
      english: '3. Math & Comparison Operators',
      urdu: '3۔ حسابی اور موازنہ کے آپریٹرز'
    },
    subtitle: {
      roman_urdu: 'Hisaab kitaab (+, -, *, /, //, %, **) aur muqabila (>, <, ==)',
      english: 'Arithmetic and logical comparison operations',
      urdu: 'ریاضی کے حسابات اور تقابل'
    },
    durationMinutes: 12,
    xpReward: 35,
    summary: {
      roman_urdu: 'Python mein math karna bohat asaan hai. Addition (+), Subtraction (-), Multiplication (*), Division (/), Floor Division (//), Modulus / Remainder (%), aur Power (**).',
      english: 'Python provides operators for basic math as well as floor division (`//`), remainder (`%`), power (`**`), and comparisons (`==`, `!=`, `<`, `>`).',
      urdu: 'پائتھن میں ریاضی اور برابری کے اصول بہت کارآمد ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Khas Math Operators',
          english: 'Special Math Operators',
          urdu: 'خاص حسابی علامات'
        },
        content: {
          roman_urdu: 'Aam divide `/` hamesha decimal (float) deta hai. Lekin `//` sirf poora number deta hai, aur `%` baaqi bacha hua (remainder) deta hai.',
          english: '`/` returns a float. `//` truncates decimals (floor division). `%` returns the remainder.',
          urdu: 'تقسیم کے بعد بچ جانے والی رقم کے لیے فیصد (%) کی علامت استعمال ہوتی ہے۔'
        },
        codeSnippet: `print(10 / 3)   # 3.3333333333333335
print(10 // 3)  # 3 (Point ke baad ka hissa khatam)
print(10 % 3)   # 1 (Baaqi bacha: Remainder)
print(2 ** 3)   # 8 (2 ki power 3: 2 * 2 * 2)`,
        summaryTable: {
          headers: ['Operator', 'Naam', 'Math Misaal', 'Result & Farq'],
          rows: [
            ['+', 'Addition', '10 + 5', '15 (Jama karna)'],
            ['-', 'Subtraction', '10 - 5', '5 (Tafreeq karna)'],
            ['*', 'Multiplication', '10 * 5', '50 (Zarb dena)'],
            ['/', 'Normal Division', '10 / 3', '3.3333 (Hamesha float decimal deta hai)'],
            ['//', 'Floor Division', '10 // 3', '3 (Point ke baad ka hissa kaat deta hai)'],
            ['%', 'Modulus (Remainder)', '10 % 3', '1 (Taqseem ke baad bacha hua baaqi)'],
            ['**', 'Power / Exponent', '2 ** 3', '8 (2 x 2 x 2)']
          ]
        },
        keyTakeaway: {
          roman_urdu: 'Even ya Odd check karne ke liye `% 2` bohat kaam aata hai!',
          english: 'Use `number % 2 == 0` to check for even numbers.',
          urdu: 'جفت یا طاق جانچنے کے لیے % 2 استعمال ہوتا ہے۔'
        }
      },
      {
        heading: {
          roman_urdu: 'Comparison (Muqabila) Operators',
          english: 'Comparison Operators',
          urdu: 'موازنہ کے آپریٹرز'
        },
        content: {
          roman_urdu: 'Do cheezon ko check karne ke liye: `==` (Barabar hai?), `!=` (Barabar nahi hai?), `>`, `<`, `>=`, `<=`. Inka jawab hamesha `True` ya `False` aata hai.',
          english: 'Comparisons return booleans: `==` (equal), `!=` (not equal), `>`, `<`, `>=`, `<=`.',
          urdu: 'دو مقداروں کے موازنے کا نتیجہ ہمیشہ ٹرو (True) یا فالس (False) ہوتا ہے۔'
        },
        codeSnippet: `print(10 == 10)  # True
print(5 > 8)     # False
print(7 != 3)    # True (7, 3 ke barabar nahi hai)`
      }
    ],
    interactiveExample: {
      title: 'Operators Ka Nateeja Dekhein',
      code: `a = 15
b = 4

print("Addition:", a + b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Remainder (Modulus):", a % b)
print("a, b se bada hai?", a > b)`,
      explanation: {
        roman_urdu: 'Check karein ke har operator ka jawab kya aata hai.',
        english: 'Run and observe how integer and floor operations work.',
        urdu: 'مختلف آپریٹرز کے نتائج ملاحظہ کریں۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'if a = 10:  # Single = is assignment, not comparison',
        fix: 'if a == 10:  # Double == checks equality',
        explanation: {
          roman_urdu: 'Value assign karne ke liye aik `=` aur check karne ke liye do `==` lagate hain.',
          english: 'Use `=` to assign a value and `==` to compare two values.',
          urdu: 'ویلیو رکھنے کے لیے ایک = اور برابری جانچنے کے لیے دو == لگاتے ہیں۔'
        }
      }
    ],
    challengeId: 'challenge-3-even-odd',
    quizId: 'quiz-3'
  },
  {
    id: 'lesson-4-conditionals-if-else',
    moduleIndex: 4,
    level: 'beginner',
    title: {
      roman_urdu: '4. Faislay Lena: if, elif, else',
      english: '4. Decision Making: if, elif, else',
      urdu: '4۔ فیصلے کرنا: if, elif, else'
    },
    subtitle: {
      roman_urdu: 'Condition ki bunyaad par code chalana aur Indentation ki ahmiyat',
      english: 'Executing code conditionally and mastering indentation',
      urdu: 'شرائط کی بنیاد پر فیصلے اور انڈینٹیشن'
    },
    durationMinutes: 14,
    xpReward: 40,
    summary: {
      roman_urdu: 'Agar koi shart poori ho to aik rasta, warna doosra rasta. Iske liye `if`, `elif` (else if), aur `else` istemal hotay hain. Python mein colon `:` aur indentation (space) zaroori hoti hai.',
      english: 'Conditionals control program execution flow using `if`, `elif`, and `else`. Proper 4-space indentation defines code blocks.',
      urdu: 'شرط صحیح ہونے کی صورت میں مخصوص کوڈ چلانے کے لیے اف (if) اور ایلس (else) استعمال ہوتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'if aur else Ka Bunyadi Dhancha',
          english: 'Basic if/else Structure',
          urdu: 'بنیادی ڈھانچہ'
        },
        content: {
          roman_urdu: 'Har `if` ke aakhir mein colon `:` lagta hai, aur agali line thodi aagay (4 spaces) hoti hai. Is aagay hone ko "Indentation" kehte hain.',
          english: 'Every condition ends with a colon `:`. The code inside must be indented by 4 spaces.',
          urdu: 'ہر شرط کے بعد کولن (:) لگانا اور اگلی لائن کو آگے سے شروع کرنا لازمی ہے۔'
        },
        codeSnippet: `umar = 18

if umar >= 18:
    print("Aap Vote de sakte hain!")
else:
    print("Aap abhi chhotay hain.")`,
        keyTakeaway: {
          roman_urdu: 'Indentation (spaces) ghalat hon to Python "IndentationError" deta hai.',
          english: 'Wrong indentation leads to IndentationError.',
          urdu: 'انڈینٹیشن کی غلطی سے پروگرام رک جاتا ہے۔'
        }
      },
      {
        heading: {
          roman_urdu: 'Kayi Shartein: elif aur and/or',
          english: 'Multiple Conditions: elif and and/or',
          urdu: 'متعدد شرائط'
        },
        content: {
          roman_urdu: 'Agar aik se zyada checks karne hon to `elif` lagate hain. Do sharton ko jodne ke liye `and` (dono sach hon) ya `or` (koi aik sach ho) lagate hain.',
          english: 'Chain multiple checks with `elif`. Combine criteria using `and`, `or`, and `not`.',
          urdu: 'ایک سے زیادہ جانچ کے لیے elif اور and/or استعمال کریں۔'
        },
        codeSnippet: `marks = 85

if marks >= 90:
    grade = "A+"
elif marks >= 80:
    grade = "A"
elif marks >= 70:
    grade = "B"
else:
    grade = "Fail"

print("Aapka Grade:", grade)`
      }
    ],
    interactiveExample: {
      title: 'Grade Calculator Check',
      code: `score = 78

if score >= 80:
    print("MashaAllah! Boht shandar karkardagi (Grade A).")
elif score >= 60:
    print("Acha score hai (Grade B). Aur mehnat karein!")
elif score >= 50:
    print("Pass ho gaye (Grade C).")
else:
    print("Fail! Dobara koshish karein.")`,
      explanation: {
        roman_urdu: 'score ki value badal kar (maslan 45 ya 92) Run karein aur nateeja dekhein.',
        english: 'Try modifying the score to 45 or 92 and click Run Code.',
        urdu: 'اسکور کی قیمت تبدیل کر کے رزلٹ دیکھیں۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'if x > 5\nprint("Big")  # Missing colon and indentation',
        fix: 'if x > 5:\n    print("Big")',
        explanation: {
          roman_urdu: 'Colon `:` lagana aur 4 spaces aagay karna kabhi na bhoolein!',
          english: 'Never forget the colon `:` and 4-space indentation.',
          urdu: 'کولن اور چار اسپیسز آگے کرنا یاد رکھیں۔'
        }
      }
    ],
    challengeId: 'challenge-4-grade-calculator',
    quizId: 'quiz-4'
  },
  {
    id: 'lesson-5-loops',
    moduleIndex: 5,
    level: 'beginner',
    title: {
      roman_urdu: '5. Loops: for aur while',
      english: '5. Loops: for and while',
      urdu: '5۔ تکرار (Loops): for اور while'
    },
    subtitle: {
      roman_urdu: 'Aik hi kaam baar baar karwana baghair code dohraye',
      english: 'Automating repetitive tasks with for, while, and range()',
      urdu: 'ایک ہی کام بار بار دہرانا'
    },
    durationMinutes: 15,
    xpReward: 40,
    summary: {
      roman_urdu: 'Loops programming ki asli taqat hain. Agar aapko 100 baar koi kaam karna ho to 100 lines likhne ke bajaye 2 line ka loop chalate hain!',
      english: 'Loops repeat code blocks efficiently. `for` loops iterate over ranges or sequences; `while` loops run while a condition stays True.',
      urdu: 'لوپس کی مدد سے ہم بغیر بار بار کوڈ لکھے سینکڑوں کام پلک جھپکتے میں کر سکتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'for Loop aur range() Function',
          english: 'for Loop and range()',
          urdu: 'فار لوپ اور رینج'
        },
        content: {
          roman_urdu: '`range(1, 6)` ka matlab hai 1 se lekar 5 tak (aakhri number shamil nahi hota).',
          english: '`range(start, stop)` generates numbers up to, but not including, `stop`.',
          urdu: 'range(1, 6) ایک سے پانچ تک گنتی کرے گا۔'
        },
        codeSnippet: `# 1 se 5 tak ginti
for i in range(1, 6):
    print("Number:", i)

# 2 ka pahara (table)
print("--- 2 Ka Table ---")
for i in range(1, 11):
    print(f"2 x {i} = {2 * i}")`,
        keyTakeaway: {
          roman_urdu: '`range(n)` 0 se shuru karta hai aur n-1 par rukta hai.',
          english: '`range(n)` counts from 0 to n-1.',
          urdu: 'رینج صفر سے شروع ہو کر آخری نمبر سے ایک پہلے رک جاتی ہے۔'
        }
      },
      {
        heading: {
          roman_urdu: 'while Loop aur break / continue',
          english: 'while Loop and break/continue',
          urdu: 'وائل لوپ اور بریک'
        },
        content: {
          roman_urdu: '`while` loop tab tak chalta rehta hai jab tak shart `True` rahe. Loop ko foran rokne ke liye `break` aur aglay step par jane ke liye `continue` lagate hain.',
          english: '`while` runs until a condition turns False. Use `break` to exit early, and `continue` to skip to the next iteration.',
          urdu: 'وائل لوپ اس وقت تک چلتا ہے جب تک شرط درست رہے۔ لوپ توڑنے کے لیے break استعمال ہوتا ہے۔'
        },
        codeSnippet: `count = 1
while count <= 5:
    print("Count hai:", count)
    count = count + 1  # Count badhana zaroori hai!`
      }
    ],
    interactiveExample: {
      title: 'Sum of Numbers with Loop',
      code: `kul_jama = 0
for n in range(1, 11):
    kul_jama = kul_jama + n
print("1 to 10 Total:", kul_jama)`,
      explanation: {
        roman_urdu: 'Dekhein loop har dafa purani value mein naya number jama kar raha hai.',
        english: 'Notice how the loop accumulates the sum in each pass.',
        urdu: 'لوپ کی مدد سے مجموعہ نکالنا۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'while count < 5:\n    print(count)  # Infinite loop!',
        fix: 'while count < 5:\n    print(count)\n    count += 1',
        explanation: {
          roman_urdu: 'while loop mein counter badhana zaroori hai warna loop rukega nahi.',
          english: 'Always increment the while loop counter to prevent infinite freeze.',
          urdu: 'لوپ متغیر کو آگے بڑھانا لازمی ہے۔'
        }
      }
    ],
    challengeId: 'challenge-5-sum-numbers',
    quizId: 'quiz-5'
  },
  {
    id: 'lesson-6-lists-tuples',
    moduleIndex: 6,
    level: 'beginner',
    title: {
      roman_urdu: '6. Lists & Tuples: Collections',
      english: '6. Lists & Tuples: Collections',
      urdu: '6۔ فہرستیں (Lists) اور ٹوپلز'
    },
    subtitle: {
      roman_urdu: 'Aik sath kayi values ko tarteeb se rakhna aur badalna',
      english: 'Storing multiple items in ordered, modifiable sequences',
      urdu: 'متعدد اشیاء کو فہرست میں محفوظ کرنا'
    },
    durationMinutes: 15,
    xpReward: 40,
    summary: {
      roman_urdu: 'List aik aisi container hoti hai jisme square brackets `[...]` ke andar boht si cheezein comma laga kar rakhi ja sakti hain. Index hamesha 0 se shuru hota hai.',
      english: 'Lists store ordered items in `[...]`. Lists are mutable (can add, remove, change items). Indexing is 0-based.',
      urdu: 'لسٹ میں ہم ایک ساتھ متعدد چیزیں رکھ سکتے ہیں اور ان میں ردوبدل کر سکتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'List Banana aur Indexing (0 se shuru)',
          english: 'Creating Lists and Indexing',
          urdu: 'لسٹ بنانا اور انڈیکسنگ'
        },
        content: {
          roman_urdu: 'Pehli item ka index `0`, doosri ka `1`, aur aakhri item ka `-1` hota hai!',
          english: 'The first item is index `0`, second is `1`, and `-1` accesses the last element.',
          urdu: 'پہلا آئٹم انڈیکس 0 پر ہوتا ہے، جبکہ آخری آئٹم -1 سے ملتا ہے۔'
        },
        codeSnippet: `phal = ["Aam", "Saib", "Kela"]
print("Pehla phal:", phal[0])
print("Aakhri phal:", phal[-1])`,
        keyTakeaway: {
          roman_urdu: 'Python mein index hamesha 0 se shuru hota hai!',
          english: 'Python list indexing starts at 0, not 1.',
          urdu: 'پائتھن میں گنتی صفر سے شروع ہوتی ہے۔'
        }
      }
    ],
    interactiveExample: {
      title: 'List Functions Demo',
      code: `marks = [85, 92, 78, 90, 88]
print("Max:", max(marks))
print("Min:", min(marks))
print("Average:", sum(marks) / len(marks))`,
      explanation: {
        roman_urdu: 'Built-in functions list par foran apply ho jate hain.',
        english: 'Built-in methods process list data directly.',
        urdu: 'لسٹ پر بنیادی فنکشنز کا استعمال۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'nums = [1, 2, 3]\nprint(nums[3])  # IndexError!',
        fix: 'print(nums[2])  # 3 items mean indices are 0, 1, 2',
        explanation: {
          roman_urdu: '3 items par aakhri index 2 hota hai.',
          english: '3 items have valid indices 0, 1, and 2.',
          urdu: 'تین آئٹمز کے انڈیکس 0، 1 اور 2 ہوتے ہیں۔'
        }
      }
    ],
    challengeId: 'challenge-6-list-analyzer',
    quizId: 'quiz-6'
  },
  {
    id: 'lesson-7-dictionaries',
    moduleIndex: 7,
    level: 'beginner',
    title: {
      roman_urdu: '7. Dictionaries & Key-Value Pairs',
      english: '7. Dictionaries & Key-Value Pairs',
      urdu: '7۔ لغت (Dictionaries)'
    },
    subtitle: {
      roman_urdu: 'Data ko labels aur chabiyon (keys) ke zariye store karna',
      english: 'Mapping keys to values like real-world records',
      urdu: 'کی اور ویلیو کی بنیاد پر معلومات رکھنا'
    },
    durationMinutes: 14,
    xpReward: 40,
    summary: {
      roman_urdu: 'Dictionary curly brackets `{...}` mein banti hai. Isme har item ka aik naam (Key) hota hai aur uski value hoti hai.',
      english: 'Dictionaries store data in `key: value` pairs enclosed in curly braces `{}`. Perfect for real-world records.',
      urdu: 'ڈکشنری میں معلومات کی اور ویلیو کی شکل میں محفوظ ہوتی ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Dictionary Ka Istemal',
          english: 'Using Dictionaries',
          urdu: 'ڈکشنری کا استعمال'
        },
        content: {
          roman_urdu: 'Student ki details ya kisi bhi cheez ka record rakhne ke liye keys istemal hoti hain.',
          english: 'Store structured objects using meaningful keys rather than numerical indices.',
          urdu: 'طالب علم کا ڈیٹا کی اور ویلیو میں محفوظ کریں۔'
        },
        codeSnippet: `student = {"naam": "Zubair", "umar": 20, "city": "Lahore"}
print(student["naam"])
student["grade"] = "A+"  # Nayi key add`,
        keyTakeaway: {
          roman_urdu: '`.get("key")` safe tareeqa hai taake KeyError na aaye.',
          english: 'Use `.get(key)` to avoid KeyError when accessing dictionary elements.',
          urdu: '.get() میتھڈ محفوظ طریقہ ہے۔'
        }
      }
    ],
    interactiveExample: {
      title: 'Dictionary Iteration',
      code: `menu = {"Chaye": 50, "Samosa": 40, "Biryani": 250}
for item, price in menu.items():
    print(f"{item} -> Rs. {price}")`,
      explanation: {
        roman_urdu: '`.items()` se key aur value dono milte hain.',
        english: '`.items()` yields key and value simultaneously.',
        urdu: 'کی اور ویلیو پر لوپ چلانا۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'user = {"name": "Sara"}\nprint(user["email"])  # KeyError!',
        fix: 'print(user.get("email", "Not found"))',
        explanation: {
          roman_urdu: 'Ghaib key par direct square bracket lagane se crash hota hai.',
          english: 'Direct bracket indexing on missing keys raises KeyError.',
          urdu: 'موجود نہ ہونے پر ایرر سے بچنے کے لیے .get استعمال کریں۔'
        }
      }
    ],
    challengeId: 'challenge-7-word-counter',
    quizId: 'quiz-7'
  },

  // ==========================================
  // LEVEL 2: INTERMEDIATE (DARMIYANA) - MODULES 8 to 13
  // ==========================================
  {
    id: 'lesson-8-functions',
    moduleIndex: 8,
    level: 'intermediate',
    title: {
      roman_urdu: '8. Functions Masterclass (def, *args, **kwargs)',
      english: '8. Functions Masterclass (def, *args, **kwargs)',
      urdu: '8۔ فنکشنز اور پیرامیٹرز کی مکمل مہارت'
    },
    subtitle: {
      roman_urdu: 'Reusable code blocks, default values, variable arguments aur scope',
      english: 'Deep dive into functions, variable arguments, returning values, and variable scope',
      urdu: 'فنکشنز بنانا، پیرامیٹرز اور اسکوپ کو سمجھنا'
    },
    durationMinutes: 16,
    xpReward: 45,
    summary: {
      roman_urdu: 'Functions modular software development ki bunyaad hain. `*args` se aap ghair-mehdood positional arguments aur `**kwargs` se keyword arguments bhej sakte hain.',
      english: 'Functions bundle reusable logic with `def`. Master default arguments, variable positional `*args`, and keyword `**kwargs`.',
      urdu: 'فنکشنز کے ذریعے کوڈ کو بار بار استعمال کرنے اور لچکدار بنانے کا طریقہ۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Default Parameters aur return Statement',
          english: 'Default Parameters and return',
          urdu: 'ڈیفالٹ پیرامیٹرز اور ریٹرن'
        },
        content: {
          roman_urdu: 'Agar user value na de to default value khud-ba-khud lag jati hai. Function se hamesha value bahar nikalne ke liye `return` likhte hain.',
          english: 'Default values provide fallbacks. `return` sends computation results back to callers.',
          urdu: 'اگر کوئی ویلیو نہ دی جائے تو ڈیفالٹ ویلیو خودکار لاگو ہوتی ہے۔'
        },
        codeSnippet: `def greet(name, salam="Assalam-o-Alaikum"):
    return f"{salam}, {name}!"

print(greet("Ali"))              # Assalam-o-Alaikum, Ali!
print(greet("John", "Hello"))     # Hello, John!`
      },
      {
        heading: {
          roman_urdu: '*args aur **kwargs Kya Hain?',
          english: 'Understanding *args and **kwargs',
          urdu: '*args اور **kwargs کا استعمال'
        },
        content: {
          roman_urdu: 'Agar aapko pehle se pata na ho ke kitne arguments aane hain, to `*args` (tuple) aur `**kwargs` (dictionary) lagate hain.',
          english: 'Use `*args` to accept any number of positional arguments and `**kwargs` for arbitrary keyword arguments.',
          urdu: 'غیر معین تعداد میں دلائل قبول کرنے کے لیے *args اور **kwargs استعمال ہوتے ہیں۔'
        },
        codeSnippet: `def kul_jama(*numbers):
    return sum(numbers)

print(kul_jama(2, 4, 6))          # 12
print(kul_jama(10, 20, 30, 40))   # 100`
      }
    ],
    interactiveExample: {
      title: 'Discount Calculator with Kwargs',
      code: `def calculate_invoice(price, discount=0, tax=0.15):
    discounted = price - (price * (discount / 100))
    final_bill = discounted + (discounted * tax)
    return round(final_bill, 2)

print("Standard Bill (Rs. 1000):", calculate_invoice(1000))
print("20% Off Bill (Rs. 1000):", calculate_invoice(1000, discount=20))`,
      explanation: {
        roman_urdu: 'Parameters ki flexibility dekhein.',
        english: 'Notice how optional parameters provide dynamic calculations.',
        urdu: 'لچکدار پیرامیٹرز کے ساتھ انوائس کیلکولیٹر۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'def add(a, b):\n    print(a + b)\n\nres = add(2, 3)\nprint(res * 2)  # TypeError NoneType!',
        fix: 'def add(a, b):\n    return a + b',
        explanation: {
          roman_urdu: 'Sirf print karne se function `None` deta hai. Hamesha `return` karein.',
          english: 'Printing inside a function without `return` yields None to the caller.',
          urdu: 'فنکشن سے نتیجہ حاصل کرنے کے لیے return لکھنا ضروری ہے۔'
        }
      }
    ],
    challengeId: 'challenge-8-palindrome-checker',
    quizId: 'quiz-8'
  },
  {
    id: 'lesson-9-strings-formatting',
    moduleIndex: 9,
    level: 'intermediate',
    title: {
      roman_urdu: '9. Strings & Modern F-Strings Mastery',
      english: '9. Strings & Modern F-Strings Mastery',
      urdu: '9۔ اسٹرنگز اور ایف اسٹرنگز کی مہارت'
    },
    subtitle: {
      roman_urdu: 'Text manipulation, methods (.split, .join, .replace) aur advanced formatting',
      english: 'Mastering string slicing, cleaning, formatting numbers, and f-string expressions',
      urdu: 'ٹیکسٹ پر کام کرنا اور جدید فارمیٹنگ'
    },
    durationMinutes: 12,
    xpReward: 35,
    summary: {
      roman_urdu: 'F-strings `f"Hello {name}"` Python ka sabse pasandeeda feature hai. Iske ilawa strings ke methods jaise `.upper()`, `.lower()`, `.strip()`, `.replace()`, aur `.split()` text par kaam asaan banate hain.',
      english: 'F-strings provide elegant interpolation: `f"Result: {val:.2f}"`. String methods help clean, format, and parse text effortlessly.',
      urdu: 'ایف اسٹرنگز کے ذریعے ہم باآسانی متغیرات کو جملے کے اندر لکھ سکتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'F-Strings Ke Khas Features',
          english: 'Advanced F-String Formatting',
          urdu: 'ایف اسٹرنگ کے خاص فیچرز'
        },
        content: {
          roman_urdu: 'Number ko decimal places tak round karna: `{price:.2f}`, hazaron mein comma lagana: `{amount:,}`.',
          english: 'Format numbers with precision `{val:.2f}` and thousands separators `{val:,}` directly in f-strings.',
          urdu: 'اعداد کو اعشاریہ اور کوما کے ساتھ فارمیٹ کرنا۔'
        },
        codeSnippet: `balance = 1250000.758
print(f"Kul Raqam: Rs. {balance:,.2f}")  # Rs. 1,250,000.76`
      }
    ],
    interactiveExample: {
      title: 'String Cleaning Script',
      code: `raw_data = "  lahore,karachi,islamabad,peshawar  "
cleaned_cities = [c.strip().title() for c in raw_data.split(",")]
print("Cleaned List:", cleaned_cities)
print("Joined back:", " -> ".join(cleaned_cities))`,
      explanation: {
        roman_urdu: 'Dekhein kaise `.split()` aur `.join()` text ko parse karte hain.',
        english: 'Notice how split and join transform raw delimiter strings into structured arrays.',
        urdu: 'ٹیکسٹ کو کلین اور جوڑنے کا طریقہ۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'name = "Ali"\nprint("Salam {name}")  # Forgot f in front',
        fix: 'print(f"Salam {name}")',
        explanation: {
          roman_urdu: 'Quotation mark se pehle `f` lagana zaroori hai.',
          english: 'Always prefix string with `f` for interpolation.',
          urdu: 'ایف اسٹرنگ کے لیے پہلے چھوٹا f لکھنا لازمی ہے۔'
        }
      }
    ],
    challengeId: 'challenge-9-vowel-counter',
    quizId: 'quiz-9'
  },
  {
    id: 'lesson-10-comprehensions',
    moduleIndex: 10,
    level: 'intermediate',
    title: {
      roman_urdu: '10. List & Dict Comprehensions (Pythonic Code)',
      english: '10. List & Dict Comprehensions (Pythonic Code)',
      urdu: '10۔ لسٹ اور ڈکشنری کمپری ہینشنز'
    },
    subtitle: {
      roman_urdu: '4 lines ke loops ko 1 khoobsurat aur tezi line mein likhna',
      english: 'Write elegant, idiomatic, and high-performance one-line data transformations',
      urdu: 'ایک لائن میں طاقتور لوپس لکھنا'
    },
    durationMinutes: 15,
    xpReward: 45,
    summary: {
      roman_urdu: 'List comprehension `[x for x in list if condition]` Python ko doosri languages se boht aage rakhta hai. Ye loops se zyada tez aur saaf hota hai.',
      english: 'List and dictionary comprehensions construct new collections by transforming existing iterables in a single concise statement.',
      urdu: 'کمپری ہینشنز کی مدد سے طویل لوپس کو ایک صاف ستھری لائن میں تبدیل کیا جا سکتا ہے۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'List Comprehension Ka Formula',
          english: 'List Comprehension Formula',
          urdu: 'لسٹ کمپری ہینشن کا فارمولا'
        },
        content: {
          roman_urdu: 'Formula: `[Expression for Item in Iterable if Shart]`',
          english: 'Syntax: `[expression for item in iterable if condition]`',
          urdu: 'فارمولا: بریکٹ کے اندر ایکسپریشن، لوپ اور شرط۔'
        },
        codeSnippet: `# Purana tareeqa:
squares = []
for x in range(1, 6):
    squares.append(x ** 2)

# Pythonic Comprehension tareeqa (1 Line!):
squares_fast = [x ** 2 for x in range(1, 6)]
even_squares = [x ** 2 for x in range(1, 11) if x % 2 == 0]

print("Squares:", squares_fast)      # [1, 4, 9, 16, 25]
print("Even Squares:", even_squares) # [4, 16, 36, 64, 100]`
      }
    ],
    interactiveExample: {
      title: 'Dictionary Comprehension',
      code: `fruits = ["Aam", "Kela", "Amrood", "Angoor"]
# Har phal ki length ki dictionary:
fruit_lengths = {f: len(f) for f in fruits}
print("Length Map:", fruit_lengths)`,
      explanation: {
        roman_urdu: 'Dictionary comprehension se har item ka key-value mapping ek line me ban gaya.',
        english: 'Construct a key-value dictionary dynamically in one clean line.',
        urdu: 'ایک لائن میں ڈکشنری تیار کرنا۔'
      }
    },
    commonMistakes: [
      {
        mistake: '# Overcomplicating 5 nested loops inside one comprehension',
        fix: '# Keep comprehensions simple (max 1 or 2 clauses) for readability',
        explanation: {
          roman_urdu: 'Agar comprehension boht lambi ho jaye to standard for loop behtar hota hai.',
          english: 'Overly complex comprehensions hurt readability; favor normal loops if multi-nested.',
          urdu: 'بہت زیادہ پیچیدہ کمپری ہینشن لکھنے کی بجائے سادہ لوپ ترجیح دیں۔'
        }
      }
    ],
    challengeId: 'challenge-10-fibonacci',
    quizId: 'quiz-10'
  },
  {
    id: 'lesson-11-file-handling',
    moduleIndex: 11,
    level: 'intermediate',
    title: {
      roman_urdu: '11. File Handling & JSON Data',
      english: '11. File Handling & JSON Data',
      urdu: '11۔ فائل ہینڈلنگ اور جیسن (JSON) ڈیٹا'
    },
    subtitle: {
      roman_urdu: 'Files parhna, likhna (read, write) aur JSON APIs se data parse karna',
      english: 'Reading and writing text files with context managers and encoding/decoding JSON',
      urdu: 'فائلوں کو پڑھنا، لکھنا اور محفوظ کرنا'
    },
    durationMinutes: 18,
    xpReward: 45,
    summary: {
      roman_urdu: 'Software data ko disk par save karne ke liye file handling use karta hai. Python mein `with open(...) as f` context manager se files automatically close ho jati hain.',
      english: 'Manage persistent file storage with `with open(..., mode) as f:`. Parse web data structures with Python\'s standard `json` library.',
      urdu: 'فائل ہینڈلنگ کے ذریعے ہم ڈیٹا کو مستقل طور پر محفوظ کرتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'with open(...) Context Manager',
          english: 'with open(...) Context Manager',
          urdu: 'محفوظ فائل ہینڈلنگ'
        },
        content: {
          roman_urdu: 'Hamesha `with` keyword use karein taake file crash hone par bhi khud-ba-khud band ho jaye aur memory leak na ho.',
          english: 'Always use `with open(...)` to ensure file descriptors close safely even if errors occur.',
          urdu: 'with کی مدد سے فائل محفوظ طریقے سے بند ہو جاتی ہے۔'
        },
        codeSnippet: `# File mein likhna ('w' mode)
# with open('notes.txt', 'w') as f:
#     f.write("Salam, Python!")

# JSON Library
import json
data = {"user": "Ali", "score": 95, "skills": ["Python", "Git"]}
json_text = json.dumps(data)  # Python dict -> JSON string
print("JSON Text:", json_text)

parsed = json.loads(json_text) # JSON string -> Python dict
print("Parsed User:", parsed["user"])`
      }
    ],
    interactiveExample: {
      title: 'JSON Serialization Simulation',
      code: `import json

student_record = {
    "id": 101,
    "name": "Hamza Khan",
    "courses": ["Intro to Python", "Data Structures"],
    "is_enrolled": True
}

# Stringify
json_output = json.dumps(student_record, indent=2)
print("Formatted JSON:\\n" + json_output)`,
      explanation: {
        roman_urdu: 'Dekhein kaise Python dictionary standard JSON text format mein convert hoti hai.',
        english: 'See how native Python structures cleanly serialize into JSON.',
        urdu: 'پائتھن سے جیسن فارمیٹ تیار کرنا۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'f = open("data.txt", "w")\nf.write("Hello")  # Forgot f.close()!',
        fix: 'with open("data.txt", "w") as f:\n    f.write("Hello")',
        explanation: {
          roman_urdu: 'File ko open karne ke baad manually band karna bhool jane se data corrupt ho sakta hai. `with` use karein.',
          english: 'Use `with` to guarantee automatic file closure.',
          urdu: 'فائل کھلا چھوڑنے سے ڈیٹا ضائع ہو سکتا ہے اس لیے with استعمال کریں۔'
        }
      }
    ],
    challengeId: 'challenge-7-word-counter',
    quizId: 'quiz-7'
  },
  {
    id: 'lesson-12-error-handling',
    moduleIndex: 12,
    level: 'intermediate',
    title: {
      roman_urdu: '12. Error & Exception Handling (try, except)',
      english: '12. Error & Exception Handling (try, except)',
      urdu: '12۔ غلطیوں کو سنبھالنا (ایکسپشن ہینڈلنگ)'
    },
    subtitle: {
      roman_urdu: 'Program ko crash hone se bachana: try, except, finally aur raise',
      english: 'Gracefully handling runtime errors, defensive programming, and raising exceptions',
      urdu: 'پروگرام کو کریش ہونے سے بچانا'
    },
    durationMinutes: 16,
    xpReward: 45,
    summary: {
      roman_urdu: 'Professional software kabhi achanak band (crash) nahi hota. `try` aur `except` se hum errors ko pakad kar user ko wazeh message dete hain.',
      english: 'Defensive programming wraps hazardous operations in `try/except` blocks to handle errors without terminating execution.',
      urdu: 'غلط ان پٹ یا مسلوں کے باوجود پروگرام کو رواں رکھنے کے لیے ٹرائی اور ایکسپٹ استعمال ہوتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'try, except, else aur finally',
          english: 'try, except, else, and finally',
          urdu: 'ٹرائی، ایکسپٹ اور فائنلی'
        },
        content: {
          roman_urdu: '`try` mein code check hota hai, `except` mein error pakda jata hai, aur `finally` hamesha chalta hai chahay error aaye ya na aaye.',
          english: 'Code in `try` executes; on error, `except` catches it; `finally` runs unconditionally.',
          urdu: 'ٹرائی میں کوڈ ٹیسٹ ہوتا ہے اور خرابی آنے پر ایکسپٹ سنبھالتا ہے۔'
        },
        codeSnippet: `def divide_safe(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        return "Ghalti: 0 se divide nahi kar sakte!"
    except TypeError:
        return "Ghalti: Numbers hona zaroori hain!"
    else:
        return f"Kamyabi: Result = {result}"
    finally:
        print("--- Calculation khatam ---")

print(divide_safe(10, 2))
print(divide_safe(10, 0))`
      }
    ],
    interactiveExample: {
      title: 'Input Conversion with Error Catch',
      code: `inputs = ["25", "abc", "100", "0"]
for item in inputs:
    try:
        num = int(item)
        print(f"Valid Integer: {num} -> 100 / {num} = {100 / num:.1f}")
    except ValueError:
        print(f"Skipping '{item}': Ye number nahi hai!")
    except ZeroDivisionError:
        print("Skipping 0: Zero se divide nahi ho sakta!")`,
      explanation: {
        roman_urdu: 'Error aane par bhi loop ruka nahi, balke sab items process ho gayein.',
        english: 'Notice how the loop continues smoothly despite invalid values.',
        urdu: 'غلطیوں کے باوجود لوپ بغیر رکے چلتا رہا۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'try:\n    # code\nexcept:\n    pass  # Bare except hides all bugs including typos!',
        fix: 'except ValueError as e:\n    print("Specific error:", e)',
        explanation: {
          roman_urdu: 'Hamesha specific error (maslan ValueError, KeyError) pakdein. Khali `except:` sari ghaltiyan chupa deta hai.',
          english: 'Never use bare `except:` without catching specific exception types.',
          urdu: 'ہمیشہ مخصوص خرابی کا نام لکھیں تاکہ اصل کیڑے نہ چھپیں۔'
        }
      }
    ],
    challengeId: 'challenge-2-temperature-converter',
    quizId: 'quiz-2'
  },
  {
    id: 'lesson-13-oop-basics',
    moduleIndex: 13,
    level: 'intermediate',
    title: {
      roman_urdu: '13. OOP Part 1: Classes, Objects & self',
      english: '13. OOP Part 1: Classes, Objects & self',
      urdu: '13۔ آبجیکٹ اورینٹڈ پروگرامنگ: کلاسز اور آبجیکٹس'
    },
    subtitle: {
      roman_urdu: 'Real-world cheezon ka blueprint banana: class, __init__, self aur methods',
      english: 'Object-Oriented Programming foundations: blueprints, constructors, attributes, and methods',
      urdu: 'کلاسز، کنسٹرکٹر اور آبجیکٹس کا بنیادی تصور'
    },
    durationMinutes: 20,
    xpReward: 50,
    summary: {
      roman_urdu: 'Object-Oriented Programming (OOP) badi applications banane ka ahem tareen tareeqa hai. Class aik naksha (blueprint) hota hai aur Object asal imarat.',
      english: 'OOP models domain entities as Classes. Instances (Objects) possess attributes (state) and methods (behavior) tied together via `self`.',
      urdu: 'کلاس ایک نقشہ ہے جس سے ہم حقیقت پسندانہ آبجیکٹس تخلیق کرتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Class aur __init__ Constructor',
          english: 'Classes and the __init__ Constructor',
          urdu: 'کلاس اور انٹ کنسٹرکٹر'
        },
        content: {
          roman_urdu: 'Jab bhi naya object banta hai, `__init__` method khud-ba-khud chalta hai. `self` us specific object ko refer karta hai.',
          english: '`__init__` initializes object attributes upon instantiation. `self` references the instance.',
          urdu: 'جب بھی نیا آبجیکٹ بنے تو __init__ خودکار چلتا ہے۔'
        },
        codeSnippet: `class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.speed = 0

    def accelerate(self, amount):
        self.speed += amount
        return f"{self.brand} ki speed ab {self.speed} km/h hai."

# Objects banana (Instances)
car1 = Car("Honda", "Civic", 2024)
car2 = Car("Toyota", "Corolla", 2023)

print(car1.accelerate(50))
print(car2.accelerate(30))`
      }
    ],
    interactiveExample: {
      title: 'Bank Account Class Simulation',
      code: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return f"Rs. {amount} jama ho gaye. Naya balance: Rs. {self.balance}"

    def withdraw(self, amount):
        if amount > self.balance:
            return "Nakaafi balance!"
        self.balance -= amount
        return f"Rs. {amount} nikal liye. Baaqi: Rs. {self.balance}"

acc = BankAccount("Ali Ahmed", 5000)
print(acc.deposit(2000))
print(acc.withdraw(1500))`,
      explanation: {
        roman_urdu: 'Class ne data (balance) aur actions (deposit, withdraw) ko aik jagah bandh diya.',
        english: 'Encapsulating data and behavior inside a single cohesive class.',
        urdu: 'بینک اکاؤنٹ کلاس کی مدد سے رقم کا لین دین۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'class Person:\n    def say_hi():  # Missing self!\n        print("Hi")',
        fix: 'class Person:\n    def say_hi(self):\n        print("Hi")',
        explanation: {
          roman_urdu: 'Class ke har instance method mein pehla parameter `self` hona lazmi hai.',
          english: 'All instance methods must take `self` as their first parameter.',
          urdu: 'کلاس کے اندر ہر میتھڈ میں self لکھنا لازمی ہے۔'
        }
      }
    ],
    challengeId: 'challenge-10-fibonacci',
    quizId: 'quiz-10'
  },

  // ==========================================
  // LEVEL 3: ADVANCED (AALA / EXPERT) - MODULES 14 to 18
  // ==========================================
  {
    id: 'lesson-14-oop-advanced',
    moduleIndex: 14,
    level: 'advanced',
    title: {
      roman_urdu: '14. OOP Part 2: Inheritance, Polymorphism & Encapsulation',
      english: '14. OOP Part 2: Inheritance, Polymorphism & Encapsulation',
      urdu: '14۔ وراثت، پولیمورفزم اور انکیپسولیشن'
    },
    subtitle: {
      roman_urdu: 'Parent-child classes, super(), method overriding aur private variables',
      english: 'Subclassing with inheritance, overriding methods with super(), and data encapsulation',
      urdu: 'پیرنٹ اور چائلڈ کلاسز کا تعلق اور جدید اصول'
    },
    durationMinutes: 22,
    xpReward: 55,
    summary: {
      roman_urdu: 'Inheritance (virasat) se hum purani class ke features nayi class mein baghair code dohraye shamil kar lete hain. `super()` se parent class ke methods call hotay hain.',
      english: 'Inheritance derives subclasses from parent classes. Method overriding adapts behavior while `super()` invokes parent logic.',
      urdu: 'وراثت کی مدد سے چائلڈ کلاس پیرنٹ کلاس کی تمام صلاحیتیں حاصل کر لیتی ہے۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Inheritance aur super() Ka Istemal',
          english: 'Inheritance and super()',
          urdu: 'وراثت اور super()'
        },
        content: {
          roman_urdu: 'Parent class `Employee` hai aur child classes `Developer` aur `Manager` hain jo basic salary aur naam parent se leti hain.',
          english: 'Child classes extend parent functionality without rewriting shared properties.',
          urdu: 'ایک عام کلاس سے مخصوص نئی کلاسز بنانا۔'
        },
        codeSnippet: `class Employee:
    def __init__(self, name, base_salary):
        self.name = name
        self.base_salary = base_salary

    def get_salary(self):
        return self.base_salary

class Developer(Employee):
    def __init__(self, name, base_salary, language):
        super().__init__(name, base_salary)
        self.language = language

    # Method Overriding
    def get_salary(self):
        bonus = 15000  # Tech bonus
        return self.base_salary + bonus

dev = Developer("Zain", 80000, "Python")
print(f"{dev.name} ({dev.language}) ki salary: Rs. {dev.get_salary()}")`
      }
    ],
    interactiveExample: {
      title: 'Polymorphism in Action',
      code: `class Dog:
    def speak(self):
        return "Bhow Bhow!"

class Cat:
    def speak(self):
        return "Meow Meow!"

animals = [Dog(), Cat(), Dog()]
for a in animals:
    print(a.speak())`,
      explanation: {
        roman_urdu: 'Do alag classes ke pass aik hi naam ka method hai lekin nateeja mukhtalif hai (Polymorphism).',
        english: 'Different objects respond to the same method interface in their own way.',
        urdu: 'پولیمورفزم کے تحت ایک جیسے میتھڈ کا الگ جواب۔'
      }
    },
    commonMistakes: [
      {
        mistake: '# Calling parent without super():\n# Employee.__init__(self, name)',
        fix: '# Clean modern way:\nsuper().__init__(name, base_salary)',
        explanation: {
          roman_urdu: 'Parent class ko initialize karne ke liye hamesha `super()` use karein.',
          english: 'Prefer `super()` over hardcoding parent class names.',
          urdu: 'پیرنٹ کلاس کے لیے super() استعمال کرنا بہترین طریقہ ہے۔'
        }
      }
    ],
    challengeId: 'challenge-8-palindrome-checker',
    quizId: 'quiz-8'
  },
  {
    id: 'lesson-15-decorators',
    moduleIndex: 15,
    level: 'advanced',
    title: {
      roman_urdu: '15. Decorators (@) & Closures',
      english: '15. Decorators (@) & Closures',
      urdu: '15۔ ڈیکوریٹرز اور کلوزرز'
    },
    subtitle: {
      roman_urdu: 'Function ke functionality ko baghair code chhede badalna ya enhance karna',
      english: 'Higher-order functions, wrapping behavior, execution timers, and authentication checks',
      urdu: 'فنکشنز کی صلاحیتوں میں بغیر چھیڑے اضافہ کرنا'
    },
    durationMinutes: 20,
    xpReward: 55,
    summary: {
      roman_urdu: 'Decorators `@decorator_name` Python ka aik powerful feature hai. Ye aik function ko input lekar uske gird nayi functionality (jaise execution timer, logging ya security check) wrap kar deta hai.',
      english: 'Decorators accept a function as an argument, wrap behavior around it, and return the enhanced callable without altering its source.',
      urdu: 'ڈیکوریٹر فنکشن کے گرد لاگنگ یا وقت جانچنے کا خول چڑھا دیتا ہے۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Pehla Custom Decorator Banana',
          english: 'Building Your First Decorator',
          urdu: 'پہلا ڈیکوریٹر بنانا'
        },
        content: {
          roman_urdu: 'Dekhein kaise `@salam_decorator` kisi bhi function se pehle aur baad mein message lagata hai.',
          english: 'A wrapper function executes code before and after the wrapped target.',
          urdu: 'ریپر فنکشن کے ذریعے اصل کوڈ کے آگے پیچھے لاگ لگانا۔'
        },
        codeSnippet: `def logger(func):
    def wrapper(*args, **kwargs):
        print(f"[START] Function '{func.__name__}' shuru ho raha hai...")
        result = func(*args, **kwargs)
        print(f"[END] Function '{func.__name__}' mukammal hua.")
        return result
    return wrapper

@logger
def say_hello(name):
    print(f"Assalam-o-Alaikum, {name}!")

say_hello("Usman")`
      }
    ],
    interactiveExample: {
      title: 'Execution Timer Decorator',
      code: `import time

def measure_time(func):
    def wrapper(*args, **kwargs):
        t1 = time.time()
        res = func(*args, **kwargs)
        t2 = time.time()
        print(f"{func.__name__} took {(t2 - t1)*1000:.3f} milliseconds")
        return res
    return wrapper

@measure_time
def count_to_million():
    return sum(range(100000))

print("Total Sum:", count_to_million())`,
      explanation: {
        roman_urdu: 'Decorator ne function ka waqt khud calculate kar ke print kar diya.',
        english: 'The decorator automatically timestamps execution without polluting function logic.',
        urdu: 'فنکشن کے چلنے کا وقت خودکار معلوم کرنا۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'def my_dec(func):\n    def wrapper():\n        func()  # Lost return value!',
        fix: 'def my_dec(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)',
        explanation: {
          roman_urdu: 'Wrapper se return value wapas bhejna zaroori hai warna function `None` dega.',
          english: 'Always return the result of `func(*args, **kwargs)` inside the wrapper.',
          urdu: 'ریپر کے اندر فنکشن کا رزلٹ ریٹرن کرنا ضروری ہے۔'
        }
      }
    ],
    challengeId: 'challenge-5-sum-numbers',
    quizId: 'quiz-5'
  },
  {
    id: 'lesson-16-generators',
    moduleIndex: 16,
    level: 'advanced',
    title: {
      roman_urdu: '16. Generators, Iterators & yield (Memory Magic)',
      english: '16. Generators, Iterators & yield (Memory Magic)',
      urdu: '16۔ جنریٹرز، ایٹریٹرز اور میموری کی بچت'
    },
    subtitle: {
      roman_urdu: 'Karodon records ko baghair RAM bhare process karna: yield keyword',
      english: 'Lazy evaluation, generator functions with yield, and handling huge streams of data',
      urdu: 'کم سے کم میموری میں کروڑوں اعداد پر کام کرنا'
    },
    durationMinutes: 20,
    xpReward: 55,
    summary: {
      roman_urdu: 'Normal function `return` se foran khatam ho jata hai. Lekin Generator `yield` se aik value deta hai aur pause ho jata hai. Jab agli value maangi jaye tabhi calculate karta hai (Lazy Evaluation).',
      english: 'Generators produce sequence values on demand using `yield` rather than allocating entire lists in memory at once.',
      urdu: 'جنریٹرز تمام ڈیٹا ایک ساتھ ریم میں لانے کی بجائے ضرورت پڑنے پر ایک ایک کر کے دیتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'return vs yield Ka Asal Farq',
          english: 'return vs yield',
          urdu: 'ریٹرن اور ییلڈ کا فرق'
        },
        content: {
          roman_urdu: 'Agar aap 1 karor numbers ki list banayein to computer hang ho jayega. Lekin generator 1 byte bhi faltu RAM nahi leta!',
          english: 'Yield preserves function execution state between calls, ideal for infinite or large streams.',
          urdu: 'ییلڈ پچھلی حالت یاد رکھتا ہے اور اگلا نمبر مانگنے پر دیتا ہے۔'
        },
        codeSnippet: `def infinite_counter(start=1):
    num = start
    while True:
        yield num
        num += 1

gen = infinite_counter(10)
print(next(gen))  # 10
print(next(gen))  # 11
print(next(gen))  # 12`
      }
    ],
    interactiveExample: {
      title: 'Fibonacci Generator Function',
      code: `def fib_generator(limit):
    a, b = 0, 1
    count = 0
    while count < limit:
        yield a
        a, b = b, a + b
        count += 1

print("First 8 Fibonacci via Generator:")
for num in fib_generator(8):
    print(num, end=" ")
print()`,
      explanation: {
        roman_urdu: 'Dekhein har pass par sirf aik number generate ho raha hai baghair list banaye.',
        english: 'Generates each Fibonacci number lazily without holding a list in memory.',
        urdu: 'بغیر لسٹ بنائے ایک ایک کر کے فیبوناچی نمبرز کا حصول۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'gen = my_generator()\nprint(gen[0])  # TypeError: object is not subscriptable',
        fix: 'first = next(gen)  # ya list(gen)[0]',
        explanation: {
          roman_urdu: 'Generator list nahi hota isliye square brackets [0] se index nahi nikal sakte. `next()` lagayein.',
          english: 'Generators do not support indexing; use `next()` or iterate over them.',
          urdu: 'جنریٹر کو لسٹ کی طرح انڈیکس نہیں کیا جا سکتا۔'
        }
      }
    ],
    challengeId: 'challenge-10-fibonacci',
    quizId: 'quiz-10'
  },
  {
    id: 'lesson-17-functional-builtins',
    moduleIndex: 17,
    level: 'advanced',
    title: {
      roman_urdu: '17. Functional Python: map, filter, zip & lambda',
      english: '17. Functional Python: map, filter, zip & lambda',
      urdu: '17۔ فنکشنل پائتھن: میپ، فلٹر اور لیمبڈا'
    },
    subtitle: {
      roman_urdu: 'Anonymous functions (lambda), parallel lists jorna (zip) aur data filtering',
      english: 'One-line lambda functions, transforming with map(), filtering, and paired iteration with zip()',
      urdu: 'لیمبڈا فنکشنز اور ڈیٹا پر تیز رفتار پروسیسنگ'
    },
    durationMinutes: 18,
    xpReward: 50,
    summary: {
      roman_urdu: 'Python mein functions first-class citizens hain. `lambda` chotay aik line ke functions hote hain, aur `map()`, `filter()`, `zip()` data transformation ko boht tezi se anjaam dete hain.',
      english: 'Functional programming patterns in Python treat functions as arguments. Compose clean data pipelines with lambda expressions, map, and filter.',
      urdu: 'لیمبڈا کی مدد سے نام کے بغیر مختصر فنکشنز بنائے جاتے ہیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Lambda aur zip() Ka Jadu',
          english: 'Lambda and zip() in Action',
          urdu: 'لیمبڈا اور زپ کا استعمال'
        },
        content: {
          roman_urdu: '`lambda a, b: a + b` se baghair def likhe function ban jata hai. `zip()` do alag lists ko aamne saamne jod deta hai.',
          english: '`zip(list_a, list_b)` pairs matching elements from multiple sequences.',
          urdu: 'زپ فنکشن دو الگ فہرستوں کو جوڑ کر جوڑے بناتا ہے۔'
        },
        codeSnippet: `names = ["Ali", "Sara", "Zubair"]
scores = [90, 85, 95]

# Parallel pair with zip:
for name, score in zip(names, scores):
    print(f"{name} -> {score} marks")

# Quick filtering:
evens = list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5, 6]))
print("Evens:", evens) # [2, 4, 6]`
      }
    ],
    interactiveExample: {
      title: 'Custom Sorting with Lambda',
      code: `products = [
    {"name": "Laptop", "price": 90000},
    {"name": "Mouse", "price": 1200},
    {"name": "Keyboard", "price": 3500}
]

# Sort by price ascending using lambda:
sorted_by_price = sorted(products, key=lambda p: p["price"])
for p in sorted_by_price:
    print(f"{p['name']}: Rs. {p['price']}")`,
      explanation: {
        roman_urdu: 'Lambda function ne sorted() ko bataya ke sorting kis key par karni hai.',
        english: 'Lambda serves as the sorting key cleanly without defining a standalone function.',
        urdu: 'قیمت کی بنیاد پر مصنوعات کی ترتیب۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'm = map(lambda x: x*2, [1, 2])\nprint(m)  # <map object at 0x...>',
        fix: 'print(list(m))  # [2, 4]',
        explanation: {
          roman_urdu: 'map() aur filter() generator object return karte hain. List dekhne ke liye `list(...)` karein.',
          english: 'map and filter return iterator objects; wrap them in `list()` to inspect.',
          urdu: 'میپ اور فلٹر کا رزلٹ دیکھنے کے لیے list() میں بدلیں۔'
        }
      }
    ],
    challengeId: 'challenge-6-list-analyzer',
    quizId: 'quiz-6'
  },
  {
    id: 'lesson-18-production-architecture',
    moduleIndex: 18,
    level: 'advanced',
    title: {
      roman_urdu: '18. Production Architecture & Real Enterprise Projects',
      english: '18. Production Architecture & Real Enterprise Projects',
      urdu: '18۔ پروفیشنل پراجیکٹس اور حتمی نظام'
    },
    subtitle: {
      roman_urdu: 'Complete Object-Oriented Banking & E-Commerce Engine banana',
      english: 'Putting it all together: designing multi-class architecture, business rules, and error protection',
      urdu: 'تمام اصولوں کو ملا کر مکمل انٹرپرائز سسٹم تیار کرنا'
    },
    durationMinutes: 25,
    xpReward: 60,
    summary: {
      roman_urdu: 'Mubarak ho! Ab aap Beginner se lekar Advanced tak tamam concepts (Variables, Loops, Data Structures, OOP, Decorators aur Error Handling) seekh chuke hain. Is aakhri module mein hum aik mukammal Enterprise Banking Engine banate hain.',
      english: 'Cap off your journey from Beginner to Advanced by synthesizing all paradigms into an enterprise multi-tier architecture.',
      urdu: 'ابتدائی سے اعلیٰ سطح تک کے تمام اصولوں پر مبنی مکمل پراجیکٹ۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: 'Enterprise Bank Architecture',
          english: 'Enterprise Bank Architecture',
          urdu: 'بینکنگ نظام کا ڈھانچہ'
        },
        content: {
          roman_urdu: 'Is project mein multiple classes, transactions logging, exception handling aur user accounts shamil hain.',
          english: 'Integrates customer state, transaction history logs, account validation, and balance checks.',
          urdu: 'مکمل اکاؤنٹس اور ٹرانزیکشن لاگز کا نظام۔'
        },
        codeSnippet: `class Transaction:
    def __init__(self, t_type, amount, balance_after):
        self.t_type = t_type
        self.amount = amount
        self.balance_after = balance_after

class BankSystem:
    def __init__(self, bank_name):
        self.bank_name = bank_name
        self.accounts = {}

    def create_account(self, acc_num, name, initial_deposit=0):
        if acc_num in self.accounts:
            return "Error: Account number pehle se mojood hai!"
        self.accounts[acc_num] = {
            "name": name,
            "balance": initial_deposit,
            "history": []
        }
        return f"Account #{acc_num} ({name}) kamyabi se khul gaya."`
      }
    ],
    interactiveExample: {
      title: 'Full Working Banking Simulation',
      code: `class SmartAccount:
    def __init__(self, title, balance=1000):
        self.title = title
        self.balance = balance
        self.log = []

    def transfer(self, amount, receiver_title):
        if amount <= 0:
            return "Invalid Amount!"
        if amount > self.balance:
            return "Nakaafi balance!"
        
        self.balance -= amount
        self.log.append(f"Sent Rs. {amount} to {receiver_title}")
        return f"Kamyabi! Rs. {amount} bhej diye. Baaqi balance: Rs. {self.balance}"

my_acc = SmartAccount("Muhammad Ali", 15000)
print(my_acc.transfer(3500, "Hamza Electronics"))
print(my_acc.transfer(2000, "Internet Bill"))
print("Statement:", my_acc.log)`,
      explanation: {
        roman_urdu: 'Ye simulation real-world production level code ka namoona hai.',
        english: 'Real-world production logic with state tracking and safety checks.',
        urdu: 'حقیقی دنیا کے سافٹ ویئر کا پریکٹیکل نمونہ۔'
      }
    },
    commonMistakes: [
      {
        mistake: '# Putting everything in global scope without architecture',
        fix: '# Encapsulate state inside dedicated domain classes with validations',
        explanation: {
          roman_urdu: 'Bade programs mein hamesha classes aur functions use karein taake code manage karna asaan ho.',
          english: 'Always modularize large software with domain classes rather than global variables.',
          urdu: 'بڑے سسٹمز کو ہمیشہ کلاسز میں تقسیم کریں۔'
        }
      }
    ],
    challengeId: 'challenge-10-fibonacci',
    quizId: 'quiz-10'
  },
  // ==========================================
  // LEVEL 3 (ADVANCED CONTINUED): REAL-WORLD AUTOMATION & DATA PIPELINES
  // ==========================================
  {
    id: 'lesson-19-os-glob-automation',
    moduleIndex: 19,
    level: 'advanced',
    title: {
      roman_urdu: '19. File System Automation (os, glob & Paths)',
      english: '19. File System Automation (os, glob & Paths)',
      urdu: '19۔ فائل سسٹم آٹومیشن اور پاتھس'
    },
    subtitle: {
      roman_urdu: 'Computer ke folders scan karna, files dhoondna aur batch processing',
      english: 'Scanning folders, matching file extensions, and path manipulation',
      urdu: 'کمپیوٹر کے فولڈرز اسکین کرنا اور بیچ پروسیسنگ'
    },
    durationMinutes: 20,
    xpReward: 55,
    summary: {
      roman_urdu: 'Real-world Python projects mein files ko aik aik karke open karne ki bajaye hazaron files ko khud-kaar (automatic) tareeqay se process kiya jata hai. `os` aur `glob` modules se hum folders scan karte hain, extension filter karte hain, aur output directories banate hain.',
      english: 'In production automation, scripts scan folders and process thousands of files automatically. The `os` and `glob` standard libraries provide cross-platform path handling, folder creation, and wildcard pattern matching.',
      urdu: 'پائتھن کے `os` اور `glob` ماڈیولز کے ذریعے ہزاروں فائلوں کو ایک ساتھ اسکین اور پروسیس کیا جاتا ہے۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: '1. glob.glob() Se Files Filter Karna',
          english: '1. Matching Files with glob.glob()',
          urdu: 'فائلیں فلٹر کرنا'
        },
        content: {
          roman_urdu: '`glob` module wildcard patterns (jaise `*.xml` ya `*.csv`) ko support karta hai. `glob.glob(os.path.join(folder, "*.xml"))` se folder mein mojood tamam XML files ki list aik second mein mil jati hai.',
          english: 'The `glob` module finds all file paths matching a wildcard pattern like `*.xml` or `*.csv`, returning a list of paths.',
          urdu: 'گلوب کے ذریعے مخصوص فارمیٹ کی تمام فائلیں تلاش کی جاتی ہیں۔'
        },
        codeSnippet: `import glob
import os

folder_path = "./my_data"
# Tamam XML files dhoondein:
xml_files = glob.glob(os.path.join(folder_path, "*.xml"))
print(f"Total XML files: {len(xml_files)}")
for f in xml_files:
    print("Found file:", f)`
      },
      {
        heading: {
          roman_urdu: '2. os.path Tools (join, basename, splitext)',
          english: '2. Essential os.path Utilities',
          urdu: 'او ایس پاتھ ٹولز'
        },
        content: {
          roman_urdu: 'Windows par `\\` aur Linux/Mac par `/` hota hai. Is liye manual slash lagane ki bajaye hamesha `os.path.join()` use karein. `os.path.basename()` file ka naam nikalta hai, aur `os.path.splitext()` extension alag karta hai.',
          english: 'Never hardcode slashes. Use `os.path.join()` for cross-platform paths. Use `os.path.basename()` to get the file name, and `os.path.splitext()` to separate name and extension.',
          urdu: 'کراس پلیٹ فارم محفوظ پاتھس بنانے کے لیے os.path کا استعمال کریں۔'
        },
        codeSnippet: `import os

file_path = r"C:\\Users\\Data\\annotation_01.xml"

# File name nikalna: "annotation_01.xml"
file_name = os.path.basename(file_path)

# Name aur extension alag karna: ("annotation_01", ".xml")
base_name, ext = os.path.splitext(file_name)

print("Base Name:", base_name)  # annotation_01
print("Extension:", ext)        # .xml

# Naya CSV path banana:
output_csv = os.path.join("./output", f"{base_name}.csv")
print("Output CSV Path:", output_csv)`
      },
      {
        heading: {
          roman_urdu: '3. Raw Strings r"..." aur os.makedirs()',
          english: '3. Raw Strings and os.makedirs()',
          urdu: 'را اسٹرنگز اور ڈائریکٹری بنانا'
        },
        content: {
          roman_urdu: 'Windows paths mein `\\Users` ya `\\new` likhte waqt Python `\\n` (newline) ya `\\u` (unicode) samajh kar error de deta hai. Is liye path ke shuru mein `r` lagayein (e.g. `r"C:\\Users\\..."`). Agar output folder mojood na ho to `os.makedirs(folder, exist_ok=True)` usay foran create kar deta hai.',
          english: 'Prefix Windows paths with `r` (raw string) to prevent backslashes from triggering escape sequences like \\n or \\t. Use `os.makedirs(folder, exist_ok=True)` to safely ensure folders exist.',
          urdu: 'را اسٹرنگ سے ونڈوز پاتھ میں غلطی نہیں ہوتی اور makedirs خود بخود فولڈر بنا دیتا ہے۔'
        },
        codeSnippet: `import os

# Safe Windows Path with 'r'
folder = r"C:\\Users\\deo.2\\Downloads\\xml_folder"

if not os.path.exists(folder):
    print("Folder nahi mila!")
else:
    # Output folder agar nahi hai to bana do
    output_folder = r"C:\\Users\\deo.2\\Downloads\\csv_output"
    os.makedirs(output_folder, exist_ok=True)
    print("Folder tayar hai!")`
      }
    ],
    interactiveExample: {
      title: 'Batch File Renamer & Path Generator Simulation',
      code: `import os

mock_files = [
    "cam1_frame001.xml",
    "cam1_frame002.xml",
    "cam2_night_run.xml"
]

output_dir = "csv_reports"
print(f"Target Directory: {output_dir}/")

for f in mock_files:
    base, ext = os.path.splitext(f)
    csv_name = f"{base}.csv"
    full_path = os.path.join(output_dir, csv_name)
    print(f"XML: {f:20} -> CSV Target: {full_path}")`,
      explanation: {
        roman_urdu: 'Yeh code har XML file ka naam parh kar uske mutabiq naya CSV target path generate kar raha hai.',
        english: 'Demonstrates splitting extensions and dynamically mapping input XMLs to target CSV destinations.',
        urdu: 'یہ کوڈ ہر فائل کا نام پڑھ کر نیا پاتھ تیار کر رہا ہے۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'path = "C:\\Users\\test\\new"  # SyntaxError: (unicode error)',
        fix: 'path = r"C:\\Users\\test\\new"  # Raw string prefix r prevents escape',
        explanation: {
          roman_urdu: 'Windows paths ke sath hamesha raw string `r"..."` use karein taake `\\` ka masla na bane.',
          english: 'Always use raw strings `r"..."` for Windows file paths containing backslashes.',
          urdu: 'ہمیشہ را اسٹرنگ استعمال کریں تاکہ اسکیپ سیکوینس ایرر نہ آئے۔'
        }
      }
    ],
    challengeId: 'challenge-11-coordinates-parser',
    quizId: 'quiz-19'
  },
  {
    id: 'lesson-20-xml-beautifulsoup',
    moduleIndex: 20,
    level: 'advanced',
    title: {
      roman_urdu: '20. XML Parsing & BeautifulSoup (bs4)',
      english: '20. XML Parsing & BeautifulSoup (bs4)',
      urdu: '20۔ ایکس ایم ایل اور بیوٹی فل سوپ'
    },
    subtitle: {
      roman_urdu: 'XML files se tags, attributes aur coordinates nikalna',
      english: 'Parsing XML hierarchies, tags, attributes, and text nodes with bs4',
      urdu: 'ایکس ایم ایل سے ڈیٹا اور اینوٹیشنز نکالنا'
    },
    durationMinutes: 25,
    xpReward: 60,
    summary: {
      roman_urdu: 'AI Annotation tools (CVAT, Roboflow, Label Studio) XML files mein labels, bounding boxes, aur custom properties store karte hain. `BeautifulSoup` (bs4 library) se hum is XML tree ko asani se traverse karte hain.',
      english: 'Computer Vision annotation tools format labeled bounding boxes and metadata in XML. BeautifulSoup provides an intuitive Python API to navigate hierarchical tags, read attributes with `.get()`, and extract text.',
      urdu: 'بیوٹی فل سوپ کے ذریعے پیچیدہ ایکس ایم ایل ٹیگز اور ایٹری بیوٹس کو آسانی سے فلٹر کیا جاتا ہے۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: '1. XML Tree Ka Structure: Tag, Attribute aur Text',
          english: '1. Anatomy of XML: Tags, Attributes, and Text',
          urdu: 'ایکس ایم ایل کا بنیادی ڈھانچہ'
        },
        content: {
          roman_urdu: 'XML mein teen ahem cheezain hoti hain:\n1. **Tag Name**: jaise `<asset>`, `<coordinates>`, `<annotation>`\n2. **Attributes**: Tag ke andar likhi values jaise `id="101"` ya `label="Car"`. Inhe `tag.get("id")` se parha jata hai.\n3. **Inner Text**: `<coordinates>31.5,74.3</coordinates>` ke darmiyan likha text. Isay `tag.text` se nikala jata hai.',
          english: 'XML elements consist of tag names, attributes (accessed via `tag.get("key")`), and textual children (accessed via `tag.text`).',
          urdu: 'ٹیگ نیم، ایٹری بیوٹس اور انر ٹیکسٹ کا باہمی تعلق۔'
        },
        codeSnippet: `from bs4 import BeautifulSoup

xml_data = """
<asset id="A1" label="Vehicle" type="car">
    <coordinates type="GPS">31.5204, 74.3587</coordinates>
</asset>
"""

soup = BeautifulSoup(xml_data, "html.parser")
asset = soup.find("asset")

# Attribute parhna:
print("Asset ID:", asset.get("id"))      # A1
print("Label:", asset.get("label"))        # Vehicle

# Inner text parhna:
coords = asset.find("coordinates")
print("Coordinates:", coords.text.strip()) # 31.5204, 74.3587`
      },
      {
        heading: {
          roman_urdu: '2. find() vs find_all()',
          english: '2. Difference Between find() and find_all()',
          urdu: 'فائنڈ اور فائنڈ آل میں فرق'
        },
        content: {
          roman_urdu: '`soup.find("asset")` sirf pehla matching tag return karta hai (ya None). Jabke `soup.find_all("asset")` aik Python List return karta hai jisme tamam assets hotay hain. Phir hum loop laga kar sab ko baari baari process karte hain.',
          english: '`find()` returns the first matching node, while `find_all()` returns a list of all matching nodes suitable for iterating in a loop.',
          urdu: 'find پہلا ٹیگ لاتا ہے جبکہ find_all تمام ٹیگز کی لسٹ دیتا ہے۔'
        },
        codeSnippet: `from bs4 import BeautifulSoup

xml_snippet = """
<data>
    <asset id="101" label="Pedestrian" />
    <asset id="102" label="Traffic_Light" />
    <asset id="103" label="Bus" />
</data>
"""
soup = BeautifulSoup(xml_snippet, "html.parser")

# Tamam assets par loop:
for asset in soup.find_all("asset"):
    print(f"Found ID: {asset.get('id')} with Label: {asset.get('label')}")`
      },
      {
        heading: {
          roman_urdu: '3. Malformed XML Ko Repair Karna',
          english: '3. Healing Broken or Truncated XML',
          urdu: 'خراب ایکس ایم ایل کو خود بخود ٹھیک کرنا'
        },
        content: {
          roman_urdu: 'Baaz dafa annotation export adhoora download hota hai aur aakhri closing tag `</data>` missing hota hai. Aapke script mein dekhein kitni aqalmandi se isay handle kiya gaya hai:\n`if not content.strip().endswith("</data>"): content = content.strip() + "</data>"`\nYeh tareeqa parser ko crash hone se bacha leta hai!',
          english: 'Network dropouts or incomplete exports often truncate closing tags. Pre-validating `.endswith("</data>")` and appending the closing tag ensures resilient parsing.',
          urdu: 'بند ہونے والے ٹیگ کو خود بخود جوڑ کر کریش ہونے سے بچایا جاتا ہے۔'
        },
        codeSnippet: `content = "<data><asset id='1'></asset>" # Adhoori XML

# Check karein ke closing tag mojood hai ya nahi:
if not content.strip().endswith("</data>"):
    content = content.strip() + "</data>"

print("Repaired XML:", content)`
      }
    ],
    interactiveExample: {
      title: 'BeautifulSoup Extraction of Nested Annotations',
      code: `from bs4 import BeautifulSoup

sample_xml = """
<data>
  <asset id="car_01" label="Sedan" type="vehicle">
    <attributes>
      <attribute name="color">Silver</attribute>
      <attribute name="speed">60kmh</attribute>
    </attributes>
    <annotation frame_number="4" type="bbox" points="10,20,100,200" />
  </asset>
</data>
"""

soup = BeautifulSoup(sample_xml, "html.parser")
asset = soup.find("asset")
print("Asset:", asset.get("id"), "-", asset.get("label"))

# Dynamic attributes extract karein:
attrs = asset.find("attributes")
if attrs:
    for a in attrs.find_all("attribute"):
        print(f"  Attr [{a.get('name')}]: {a.text.strip()}")

# Annotation details:
anno = asset.find("annotation")
if anno:
    frame = anno.get("frame_number")
    print(f"  Annotation at Frame {frame}: Points={anno.get('points')}")`,
      explanation: {
        roman_urdu: 'Is example mein asset, uske custom attributes, aur bounding box points teenon ko ba-asaani extract kar liya gaya.',
        english: 'Extracts nested asset details, dynamic custom properties, and bounding boxes using standard bs4 traversal.',
        urdu: 'ایکس ایم ایل سے تمام بنیادی پراپرٹیز اور باکس پوائنٹس حاصل کیے گئے۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'coords = asset.find("coordinates").text  # AttributeError agar coordinates tag mojood na ho!',
        fix: 'coords_el = asset.find("coordinates")\ncoords_text = coords_el.text.strip() if (coords_el and coords_el.text) else "-"',
        explanation: {
          roman_urdu: 'Tag parhnay se pehle hamesha check karein ke tag mojood bhi hai ya nahi, warna program crash ho jayega.',
          english: 'Always null-check parsed tags before accessing `.text` to avoid AttributeError on missing tags.',
          urdu: 'ٹیگ کو چیک کیے بغیر ٹیکسٹ پڑھنے سے ایرر آتا ہے۔'
        }
      }
    ],
    challengeId: 'challenge-12-dynamic-attributes',
    quizId: 'quiz-20'
  },
  {
    id: 'lesson-21-pandas-data-wrangling',
    moduleIndex: 21,
    level: 'advanced',
    title: {
      roman_urdu: '21. Dynamic Columns & Pandas Export',
      english: '21. Dynamic Columns & Pandas Export',
      urdu: '21۔ ڈائنامک کالمز اور پانڈاز برآمد'
    },
    subtitle: {
      roman_urdu: 'Set(), dictionary comprehension aur clean CSV banana',
      english: 'Using sets for dynamic schemas, dict comprehension, and Pandas DataFrame exports',
      urdu: 'ڈائنامک کالمز اکٹھے کرنا اور سی ایس وی محفوظ کرنا'
    },
    durationMinutes: 25,
    xpReward: 60,
    summary: {
      roman_urdu: 'Mukhtalif XML files mein mukhtalif attributes hoti hain (kisi me "color" hai to kisi me "weather"). Agar columns pehle se tay na hon, to `set()` se tamam unique naam collect kiye jaate hain, phir dictionary comprehension se missing values ko `"-"` se fill kiya jata hai.',
      english: 'Real-world data schemas are often irregular. By gathering unique attribute keys into a Python `set`, building default rows via dictionary comprehension, and exporting through `pandas.DataFrame.to_csv`, we ensure perfectly aligned tabular CSV datasets.',
      urdu: 'پانڈاز کے ذریعے غیر منظم ڈیٹا کو ایک بہترین اور خوبصورت ٹیبل میں بدل دیا جاتا ہے۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: '1. set() Ka Kamal: Dynamic Columns Dhoondna',
          english: '1. Dynamic Schema Discovery with set()',
          urdu: 'سیٹ کے ذریعے کالمز اکٹھے کرنا'
        },
        content: {
          roman_urdu: '`set` mein duplicate cheezain nahi aati. Jab hum 500 XML files scan karte hain, to har asset ke attributes ke naam `all_attr_names.add(name)` karte jate hain. Aakhir mein hamare paas saare unique column names aa jaate hain.',
          english: 'A Python `set` guarantees uniqueness. Traversing all XML assets and adding attribute names into a set automatically extracts all present property names without duplication.',
          urdu: 'سیٹ ڈپلیکیٹ کالمز کے بغیر تمام یونیک نام فراہم کرتا ہے۔'
        },
        codeSnippet: `all_attr_names = set()

# Multiple files se attributes collect ho rahi hain:
file1_attrs = ["color", "speed", "make"]
file2_attrs = ["color", "weather", "camera_id"]

for a in file1_attrs + file2_attrs:
    all_attr_names.add(a)

# Sorted list bana lein:
dynamic_cols = sorted(list(all_attr_names))
print("Final Columns:", dynamic_cols)
# Output: ['camera_id', 'color', 'make', 'speed', 'weather']`
      },
      {
        heading: {
          roman_urdu: '2. Dictionary Comprehension Se Default "-" Lagana',
          english: '2. Filling Defaults with Dict Comprehension',
          urdu: 'خالی جگہوں پر ڈیش لگانا'
        },
        content: {
          roman_urdu: 'Agar kisi file me "weather" attribute na ho, to wahan khali ya crash hone ki bajaye hum pehle hi `"-"` daal dete hain:\n`attr_dict = {name: "-" for name in dynamic_cols}`\nIske baad jo attribute mile, uski value overwrite kar dete hain.',
          english: 'Dictionary comprehensions allow initializing all known columns with a standard missing placeholder (e.g. `"-"`), ensuring uniform rectangular matrices for Pandas.',
          urdu: 'ڈکشنری کمپری ہینشن کے ذریعے تمام کالمز میں پہلے سے ڈیش لگا دی جاتی ہے۔'
        },
        codeSnippet: `dynamic_cols = ['color', 'speed', 'weather']

# Pehle sab me "-" fill karein:
attr_dict = {name: "-" for name in dynamic_cols}
print("Initialized:", attr_dict)

# File se jo mila usay update karein:
attr_dict["color"] = "Red"
attr_dict["speed"] = "80km/h"
# weather "-" hi rahega!
print("Updated:", attr_dict)`
      },
      {
        heading: {
          roman_urdu: '3. Pandas DataFrame & utf-8-sig CSV Export',
          english: '3. Pandas DataFrame & utf-8-sig CSV Export',
          urdu: 'پانڈاز میں محفوظ کرنا'
        },
        content: {
          roman_urdu: 'Jab rows tayar ho jayein to `pd.DataFrame(all_rows, columns=final_columns)` se tabular data banta hai. Aur `df.to_csv(path, index=False, encoding="utf-8-sig")` likhna zaroori hai taake Microsoft Excel mein Urdu ya special characters kharab na dikhein (BOM marker add hota hai).',
          english: 'Pass the list of dictionaries and explicit column order to `pd.DataFrame`. Exporting with `encoding="utf-8-sig"` includes the UTF-8 Byte Order Mark (BOM) needed by Microsoft Excel.',
          urdu: 'ایکسل کی مطابقت کے لیے utf-8-sig میں محفوظ کیا جاتا ہے۔'
        },
        codeSnippet: `import pandas as pd

rows = [
    {"ID": "101", "Label": "Car", "Color": "White"},
    {"ID": "102", "Label": "Bus", "Color": "Blue"}
]

# DataFrame banana:
df = pd.DataFrame(rows)
print(df)

# CSV save karna:
# df.to_csv("output.csv", index=False, encoding="utf-8-sig")`
      }
    ],
    interactiveExample: {
      title: 'Dynamic Dictionary Row Generator',
      code: `all_cols = ["ID", "Label", "Latitude", "Longitude", "Weather"]

# Raw data jisme weather missing hai
asset_data = {"ID": "A-99", "Label": "Van", "Latitude": "31.52", "Longitude": "74.35"}

# Default row generator
row = {col: "-" for col in all_cols}
row.update(asset_data)

print("Unified Row Data:")
for k, v in row.items():
    print(f"  {k:12} : {v}")`,
      explanation: {
        roman_urdu: 'Har missing column mein khud-ba-khud "-" aa gaya aur jo data mojood tha wo successfully merge ho gaya.',
        english: 'Ensures structured consistency across all rows even with sparse or irregular source data.',
        urdu: 'ہر رو میں یکساں کالمز کو یقینی بنایا گیا۔'
      }
    },
    commonMistakes: [
      {
        mistake: 'df.to_csv("out.csv")  # Default index=True saves unnecessary 0, 1, 2... numbers in CSV',
        fix: 'df.to_csv("out.csv", index=False, encoding="utf-8-sig")  # Clean and Excel-friendly',
        explanation: {
          roman_urdu: 'Hamesha `index=False` lagayein taake extra 0, 1, 2 numbering CSV mein na aaye.',
          english: 'Always pass `index=False` to prevent pandas from exporting the auto-increment row index as a column.',
          urdu: 'اضافی انڈیکس نمبرز سے بچنے کے لیے index=False لگائیں۔'
        }
      }
    ],
    challengeId: 'challenge-13-frame-increment',
    quizId: 'quiz-21'
  },
  {
    id: 'lesson-22-capstone-xml-pipeline',
    moduleIndex: 22,
    level: 'advanced',
    title: {
      roman_urdu: '22. Capstone: AI XML ➔ CSV Production Pipeline',
      english: '22. Capstone: AI XML ➔ CSV Production Pipeline',
      urdu: '22۔ کیپ اسٹون: مکمل ایکس ایم ایل سے سی ایس وی انجن'
    },
    subtitle: {
      roman_urdu: 'Aapke AI automation code ka lafz ba lafz tajziya aur masterclass',
      english: 'Deep-dive masterclass into the complete Computer Vision XML to CSV pipeline',
      urdu: 'آپ کے اپنے پائتھن آٹومیشن کوڈ کا مکمل تجریہ'
    },
    durationMinutes: 30,
    xpReward: 80,
    summary: {
      roman_urdu: 'Yeh aapka asal production script hai jo AI annotation tools ki XML files ko professional CSVs mein convert karta hai. Is sabaq mein hum iske har hissay (GPS split, Frame Number +1 logic, try-except safety) ko tafseel se samajhte hain taake aap khud is tarah ke scripts likh sakein.',
      english: 'Synthesizes all paradigms into the exact real-world production pipeline you shared. Deconstructs GIS coordinate splitting, frame number normalization, dynamic schema alignment, and fault-tolerant batch loops.',
      urdu: 'آپ کے اپنے حقیقی آٹومیشن اسکرپٹ کا جامع مطالعہ تاکہ آپ خود ایسا کوڈ لکھنے کے قابل بن جائیں۔'
    },
    sections: [
      {
        heading: {
          roman_urdu: '1. Frame Number +1 Rule Kyun Hota Hai?',
          english: '1. The Frame Number +1 Rule Explained',
          urdu: 'فریم نمبر میں ایک کا اضافہ کیوں؟'
        },
        content: {
          roman_urdu: 'Computer Vision tools (jaise CVAT ya OpenCV) frames ko 0 se ginna shuru karte hain (Frame 0, Frame 1, Frame 2). Lekin aam insaan ya video editors pehle frame ko 1 samajhte hain. Is liye script check karta hai:\n`if raw_frame.isdigit():\n    frame_num = str(int(raw_frame) + 1)`\nYeh check karta hai ke agar frame number digit hai to 1 barha do, warna wahi rehne do!',
          english: 'AI video labeling tools count video frames starting at index 0. Humans and video editing suites identify the opening frame as Frame 1. The `isdigit()` check safely casts to int, increments by 1, and converts back to string.',
          urdu: 'ویڈیو اینوٹیشن میں زیرو انڈیکس کو ون انڈیکس میں بدلنے کا بہترین فارمولا۔'
        },
        codeSnippet: `def normalize_frame(raw_frame):
    # Agar digit hai to +1 karo:
    if raw_frame.isdigit():
        return str(int(raw_frame) + 1)
    return raw_frame  # Agar "-" ya string hai to waisa hi rakhein

print(normalize_frame("0"))   # "1"
print(normalize_frame("15"))  # "16"
print(normalize_frame("-"))   # "-"`
      },
      {
        heading: {
          roman_urdu: '2. GPS Coordinates Parsing (.split(";")[0].split(","))',
          english: '2. Parsing Geographic Coordinates',
          urdu: 'جی پی ایس کوآرڈینیٹس الگ کرنا'
        },
        content: {
          roman_urdu: 'LineString format mein multiple points semicolon `;` se separated hotay hain (e.g. `"31.52,74.35;31.53,74.36"`). Script pehle `.split(";")[0]` se pehla point nikalta hai, phir `.split(",")` se Latitude aur Longitude alag kar leta hai.',
          english: 'GIS strings often chain waypoints with semicolons and coordinate pairs with commas. Chaining `.split(";")[0].split(",")` extracts the primary latitude and longitude pair.',
          urdu: 'سیمی کولن اور کوما کے ذریعے عرض بلد اور طول بلد کو الگ کرنا۔'
        },
        codeSnippet: `coords_text = "31.5204, 74.3587; 31.5210, 74.3592"

lat, lon = "-", "-"
if coords_text != "-" and "," in coords_text:
    first_point = coords_text.split(";")[0]
    parts = first_point.split(",")
    if len(parts) >= 2:
        lat = parts[0].strip()
        lon = parts[1].strip()

print(f"Latitude: {lat} | Longitude: {lon}")`
      },
      {
        heading: {
          roman_urdu: '3. Batch Processing Mein try...except Ka Kirdar',
          english: '3. Why try...except is Essential in Batch Jobs',
          urdu: 'بیچ پروسیسنگ میں ٹرائی ایکسیپٹ کی اہمیت'
        },
        content: {
          roman_urdu: 'Agar aapke folder mein 1,000 files hain aur 450th file corrupted hai, to poora program band nahi hona chahiye! Script har file ko `try: ... except Exception as e:` ke andar rakhta hai. Is se error wali file print ho jati hai aur baaqi 999 files successfully convert ho jati hain.',
          english: 'In enterprise batch pipelines, wrap file conversions in `try...except` so that a single malformed file outputs an alert while permitting the remaining 999 files to complete processing.',
          urdu: 'اگر کوئی ایک فائل خراب ہو تو سارا پروگرام بند نہیں ہوتا بلکہ باقی کام جاری رہتا ہے۔'
        },
        codeSnippet: `files = ["file1.xml", "corrupt.xml", "file3.xml"]

for f in files:
    try:
        if f == "corrupt.xml":
            raise ValueError("Invalid XML bytes!")
        print(f"✅ Successfully converted: {f}")
    except Exception as e:
        print(f"❌ Error in {f}: {e}") # Program rukega nahi!`
      }
    ],
    interactiveExample: {
      title: 'Full Pipeline Logic Mini-Runner',
      code: `def simulate_pipeline():
    print("⏳ Dynamic XML → CSV Engine Starting...\\n")
    
    # Mock data representing parsed asset
    asset = {
        "id": "A-101",
        "label": "Delivery_Truck",
        "coords": "33.6844,73.0479",
        "frame_raw": "0",
        "attributes": {"color": "White", "loaded": "Yes"}
    }
    
    # 1. Parse coords
    lat, lon = asset["coords"].split(",")
    
    # 2. Normalize Frame
    frame_num = str(int(asset["frame_raw"]) + 1)
    
    # 3. Assemble Row
    row = {
        "Frame Number": frame_num,
        "Asset ID": asset["id"],
        "Label": asset["label"],
        "Latitude": lat.strip(),
        "Longitude": lon.strip()
    }
    row.update(asset["attributes"])
    
    print("✅ Generated Row for CSV Export:")
    for k, v in row.items():
        print(f"   {k:15}: {v}")

simulate_pipeline()`,
      explanation: {
        roman_urdu: 'Yeh aapke poore script ki markazi logic ko choti aur saaf shakal mein dikha raha hai.',
        english: 'Encapsulates the core transformation logic of your production XML pipeline.',
        urdu: 'آپ کے مکمل انجن کا سادہ اور مؤثر خلاصہ۔'
      }
    },
    commonMistakes: [
      {
        mistake: '# Hardcoding static columns when different files have different tags',
        fix: '# Dynamically collect all attribute names with set() before building rows',
        explanation: {
          roman_urdu: 'Kabhi bhi columns ko hardcode na karein agar files mein naye attributes aa sakte hain. Hamesha `set()` se collect karein.',
          english: 'Dynamic sets prevent data loss when upstream annotation teams introduce new labeling tags.',
          urdu: 'ہمیشہ سیٹ کے ذریعے کالمز اکٹھے کریں تاکہ کوئی ڈیٹا ضائع نہ ہو۔'
        }
      }
    ],
    challengeId: 'challenge-14-path-extractor',
  }
];

export const lessonsData: Lesson[] = [
  ...baseLessonsData,
  ...professionalWebLessonsData
];
