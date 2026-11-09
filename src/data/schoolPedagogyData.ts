export interface SchoolAnalogy {
  realLifeObject: string;
  concept: string;
  story: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
}

export interface LineByLineItem {
  line: string;
  explanation: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  ramState?: string;
  whyThisSyntax?: string;
}

export interface GoldenRuleItem {
  title: string;
  rule: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  goodExample: string;
  badExample: string;
}

export interface StudentFaq {
  question: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  answer: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  schoolTip: string;
}

export interface MicroHomework {
  title: string;
  scenario: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  hint: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  solutionCode: string;
  explanation: string;
}

export interface LessonSchoolPedagogy {
  lessonId: string;
  moduleIndex: number;
  schoolAnalogy: SchoolAnalogy;
  lineByLineBreakdown: LineByLineItem[];
  goldenRules: GoldenRuleItem[];
  studentFaqs: StudentFaq[];
  microHomework: MicroHomework;
}

export const schoolPedagogyData: Record<string, LessonSchoolPedagogy> = {
  'lesson-1-intro-print': {
    lessonId: 'lesson-1-intro-print',
    moduleIndex: 1,
    schoolAnalogy: {
      realLifeObject: '📢 School Ka Loudspeaker & Blackboard',
      concept: 'print() Statement Ka Asal Kaam',
      story: {
        roman_urdu: 'Tasawwur karein aap school ki assembly mein khare hain aur Principal sahib mike par ailan kar rahe hain. Computer ke andar jo bhi chal raha hota hai, jab tak aap `print()` ka mike istemal nahi karenge, wo baat bahar kisi ko sunai ya dikhai nahi degi! `print()` computer ka mike hai jo screen par ailan karta hai.',
        english: 'Imagine school assembly where the Principal speaks through a microphone. Inside the computer, calculations happen silently. Until you use `print()`, nothing is shown to the human outside! `print()` is the computer loudspeaker.',
        urdu: 'تصور کریں جیسے اسکول کا لاؤڈ اسپیکر یا بلیک بورڈ، پرنٹ فنکشن کمپیوٹر کی اسکرین پر اعلان کرنے کا کام کرتا ہے۔'
      }
    },
    lineByLineBreakdown: [
      {
        line: 'print("Assalam-o-Alaikum, Dunya!")',
        explanation: {
          roman_urdu: '1. `print`: Computer ko hukum diya ke bahar screen par dikhao.\n2. `(...)`: Gol brackets computer ko batati hain ke iske andar ka samaan dikhana hai.\n3. `"..."`: Quotation marks batati hain ke ye seedha text (string) hai jisko waisa hi likhna hai.',
          english: '1. `print`: The command to output.\n2. `(...)`: Parentheses holding what to display.\n3. `"..."`: Double quotes telling Python this is raw text (string).',
          urdu: 'پرنٹ اسکرین پر ظاہر کرتا ہے اور کوٹس ٹیکسٹ کی نشاندہی کرتے ہیں۔'
        },
        ramState: 'RAM Screen Buffer mein "Assalam-o-Alaikum, Dunya!" bhejti hai.',
        whyThisSyntax: 'Quotes lagana zaroori hai warna computer isko koi variable samajh kar dhoondnay lagega aur error dega.'
      },
      {
        line: 'print(100 + 50)',
        explanation: {
          roman_urdu: 'Yahan humne quotes `" "` NAHI lagaye! Iska matlab computer pehle hisaab karega (100 + 50 = 150) aur phir 150 screen par dikhayega.',
          english: 'No quotes used here! Python calculates 100 + 50 first, then outputs 150.',
          urdu: 'بغیر کوٹس کے لکھنے پر کمپیوٹر پہلے جمع کرتا ہے پھر نتیجہ دکھاتا ہے۔'
        },
        ramState: 'CPU AL-Unit: 100 + 50 = 150 calculate karta hai.',
        whyThisSyntax: 'Agar quotes lagate `print("100 + 50")`, to computer hisaab na karta balke lafz "100 + 50" likh deta!'
      },
      {
        line: 'print("Karachi", "Lahore", "Islamabad", sep=" -> ")',
        explanation: {
          roman_urdu: '1. `sep=" -> "`: Bataya ke comma se likhe shehron ke beech default space ki jagah teer (->) ka nishaan aaye.\nOutput: Karachi -> Lahore -> Islamabad',
          english: 'Custom separator `sep=" -> "` replaces the default single space between items.',
          urdu: 'سیپ کی مدد سے اشیاء کے درمیان کا فاصلہ اپنی مرضی کی علامت سے بدلا جاتا ہے۔'
        },
        ramState: 'Output buffer mein har comma item ke darmiyan " -> " inject hota hai.',
        whyThisSyntax: 'Default space hoti hai, sep likh kar hum comma wale items ka beech ka symbol badal sakte hain.'
      },
      {
        line: 'print("Day 1", end=" : ") ; print("Passed!")',
        explanation: {
          roman_urdu: '1. `end=" : "`: Bataya ke pehle print ke baad nayi line par MAT jao, balke aakhir mein " : " lagao taake agla print usi line mein aage jud jaye!\nOutput: Day 1 : Passed!',
          english: '`end=" : "` overrides default newline (\\n) so the next print statement continues on the same line.',
          urdu: 'اینڈ کی مدد سے اگلی لائن پر جانے کے بجائے اسی لائن پر پرنٹ جاری رہتا ہے۔'
        },
        ramState: 'Console pointer agli line par nahi jata balke usi line par rehta hai.',
        whyThisSyntax: 'Default newline "\\n" hoti hai, end parameter se hum closing character control karte hain.'
      }
    ],
    goldenRules: [
      {
        title: 'Rule 1: Text Ko Hamesha Chhate (Quotes) Mein Band Karein',
        rule: {
          roman_urdu: 'Har wo baat jo text ya lafz ho, uske ird gird `" "` ya \' \' lagana lazmi hai.',
          english: 'All text must be wrapped in matching quotation marks.',
          urdu: 'ہر ٹیکسٹ کے گرد کوٹس لگانا ضروری ہے۔'
        },
        goodExample: 'print("Pakistan Zindabad")',
        badExample: 'print(Pakistan Zindabad)  # ❌ NameError!'
      },
      {
        title: 'Rule 2: Chhota "p" Likhna Hai, Bara "P" Mana Hai',
        rule: {
          roman_urdu: 'Python case-sensitive hai. `print` hamesha chhotay haroof (lowercase) mein likhein.',
          english: 'Python is case-sensitive; use lowercase `print`, never `Print`.',
          urdu: 'پرنٹ ہمیشہ چھوٹے حروف میں لکھا جاتا ہے۔'
        },
        goodExample: 'print("Sahi")',
        badExample: 'Print("Ghalat")  # ❌ NameError: Print is not defined'
      },
      {
        title: 'Rule 3: Bracket Shuru Ho To Band Bhi Hogi',
        rule: {
          roman_urdu: 'Agar aik gol bracket kholi `(` to usko aakhir mein band `)` karna lazmi hai.',
          english: 'Every opening parenthesis `(` must have a closing parenthesis `)`.',
          urdu: 'بریکٹ کھولیں تو بند کرنا لازمی ہے۔'
        },
        goodExample: 'print("Salam")',
        badExample: 'print("Salam"   # ❌ SyntaxError: unclosed parenthesis'
      },
      {
        title: 'Rule 4: Hisaab Kitaab Ke Liye Quotes Mat Lagayein',
        rule: {
          roman_urdu: 'Agar 5 + 5 ka answer 10 chahiye to quotes mat lagayein.',
          english: 'Omit quotes when you want math calculations executed.',
          urdu: 'حساب کتاب کے لیے کوٹس مت لگائیں۔'
        },
        goodExample: 'print(5 + 5)   # Dikhaye ga: 10',
        badExample: 'print("5 + 5") # Dikhaye ga: 5 + 5'
      },
      {
        title: 'Rule 5: sep Items Ke Beech Aur end Line Ke Aakhir Mein Lagta Hai',
        rule: {
          roman_urdu: 'sep hamesha items ke darmiyan ka symbol badalta hai (default space). end print khatam hone ke baad nayi line aane ya na aane ko control karta hai (default \\n).',
          english: 'sep controls delimiter between items; end controls character after print ends.',
          urdu: 'سیپ درمیان کے فاصلے اور اینڈ اختتام کو سنبھالتا ہے۔'
        },
        goodExample: 'print("A", "B", sep="-", end="!")  # Output: A-B!',
        badExample: 'print("A", "B", sep=\\n)  # ❌ Quotes lagana zaroori hai sep="\\n"'
      }
    ],
    studentFaqs: [
      {
        question: {
          roman_urdu: 'Sir, print() ke andar sep aur end parameters kya kaam karte hain?',
          english: 'What do the sep and end parameters in print() do?',
          urdu: 'پرنٹ فنکشن میں sep اور end پیرامیٹرز کیا کام کرتے ہیں؟'
        },
        answer: {
          roman_urdu: '1. sep (Separator): Jab aap print() mein comma laga kar kayi cheezein likhte hain, to unke beech default space hoti hai. sep=" -> " likhne se unke beech teer ka nishaan aa jata hai.\n2. end (Ending): Pehle print ke baad Python automatic agli line par jata hai (default "\\n"). Agar aap end=" : " likhein to agla print usi line mein aage shuru hota hai!\n\nSummary Table:\n• sep | Default: " " (Space) | Items ke beech ka gap/symbol\n• end | Default: "\\n" (New Line) | Print line ke aakhir mein kya aayega',
          english: '1. sep controls delimiter between comma-separated arguments (default is " ").\n2. end controls the character after output (default is newline "\\n"). Overriding end keeps subsequent outputs on the same line.',
          urdu: 'سیپ درمیان کے نشان اور اینڈ لائن کے اختتام کو کنٹرول کرتا ہے۔'
        },
        schoolTip: 'Summary Table yaad rakhein: sep=" " aur end="\\n" default hotay hain.'
      },
      {
        question: {
          roman_urdu: 'Sir, single quotes (\') aur double quotes (") mein kya farq hai?',
          english: 'What is the difference between single and double quotes?',
          urdu: 'سنگل اور ڈبل کوٹس میں کیا فرق ہے؟'
        },
        answer: {
          roman_urdu: 'Python mein dono ka kaam 100% aik jaisa hai! Aap chahein to `print(\'Salam\')` likhein ya `print("Salam")`. Bas shart ye hai ke shuru aur aakhir mein aik jaisa hona chahiye.',
          english: 'Both work identically in Python! Just make sure opening and closing quotes match.',
          urdu: 'دونوں میں کوئی فرق نہیں ہے، بس جو شروع میں لگائیں وہی آخر میں لگائیں۔'
        },
        schoolTip: 'Aadat banayein ke hamesha double quotes (") use karein takay consistency rahe.'
      },
      {
        question: {
          roman_urdu: 'Sir, `#` se shuru hone wali line ka computer kya karta hai?',
          english: 'What does Python do with a line starting with `#`?',
          urdu: 'ہیش (#) والی لائن کا کیا ہوتا ہے؟'
        },
        answer: {
          roman_urdu: 'Isko Comment kehte hain. Computer is line ko bilkul ignore kar deta hai jaise wo wahan thi hi nahi! Ye sirf hum insano ke samajhne ke liye note hota hai.',
          english: 'It is a Comment. Python completely skips it during execution; it is solely for humans.',
          urdu: 'اسے کمنٹ کہتے ہیں، کمپیوٹر اسے نظر انداز کر دیتا ہے۔'
        },
        schoolTip: 'Apne code ke upar `#` likh kar zaroor wazahat likhein ke ye code kya karta hai.'
      }
    ],
    microHomework: {
      title: 'School Homework Task 1: Apni Class Ka Card Print Karein',
      scenario: {
        roman_urdu: 'Aik program likhein jo 3 lines print kare: Pehli line mein apna Naam, doosri line mein apni Class, aur teesri line mein 12 aur 8 ka jor (sum = 20).',
        english: 'Write a program that prints 3 lines: Your name, your class, and the sum of 12 + 8.',
        urdu: 'ایک پروگرام لکھیں جو 3 لائنیں پرنٹ کرے: نام، کلاس اور 12 جمع 8 کا جواب۔'
      },
      hint: {
        roman_urdu: '3 bar alag alag `print(...)` use karein. Math ke liye quotes na lagayein.',
        english: 'Use 3 separate print statements. Omit quotes for math.',
        urdu: 'تین الگ پرنٹ استعمال کریں اور حساب کے لیے کوٹس نہ لگائیں۔'
      },
      solutionCode: `print("Naam: Muhammad Ali")\nprint("Class: Python School Batch 1")\nprint(12 + 8)`,
      explanation: 'Pehli 2 lines mein text quotes mein gaya, jabke 12 + 8 hisaab ho kar 20 print hua.'
    }
  },

  'lesson-2-variables-types': {
    lessonId: 'lesson-2-variables-types',
    moduleIndex: 2,
    schoolAnalogy: {
      realLifeObject: '📦 Kitchen Ka Masala Dabba & Label',
      concept: 'Variable Kya Hota Hai?',
      story: {
        roman_urdu: 'Tasawwur karein kitchen mein plastic ke dabbe hain jin par bahar chitt (label) lagi hai: aik par likha hai "Cheeni", aik par likha hai "Chawal". Dabbe ka naam hai Variable, aur jo saman uske andar rakha hai wo hai Value! Barabar ka nishan `=` ka matlab hai "Dabbe ke andar saman daal do".',
        english: 'Imagine kitchen spice jars with stickers: one labeled "Sugar", another "Rice". The jar label is the Variable Name, and what is inside is the Data Value! The `=` equals sign means "put this into the jar".',
        urdu: 'کچن کے لیبل لگے ڈبے کی طرح ویری ایبل کمپیوٹر کی میموری میں معلومات محفوظ کرنے کا نام ہے۔'
      }
    },
    lineByLineBreakdown: [
      {
        line: 'roll_no = 105',
        explanation: {
          roman_urdu: 'Computer ki memory (RAM) mein aik dabba bana jiska naam `roll_no` rakha gaya, aur uske andar number `105` store kar diya gaya.',
          english: 'Allocates memory slot named `roll_no` and places integer `105` inside.',
          urdu: 'کمپیوٹر کی میموری میں roll_no کے نام سے 105 محفوظ ہو گیا۔'
        },
        ramState: 'RAM Address #0x1A: roll_no = 105 (int)',
        whyThisSyntax: 'Space nahi de sakte the isliye underscore `_` lagaya.'
      },
      {
        line: 'student_naam = "Zainab"',
        explanation: {
          roman_urdu: 'Aik naya dabba bana `student_naam` jisme text "Zainab" mehfooz ho gaya. Ye String (str) data type hai.',
          english: 'Creates a string variable containing "Zainab".',
          urdu: 'طالب علم کا نام اسٹرنگ کے طور پر محفوظ ہو گیا۔'
        },
        ramState: 'RAM Address #0x2B: student_naam = "Zainab" (str)',
        whyThisSyntax: 'Text tha isliye quotes lagana lazmi tha.'
      },
      {
        line: 'fees = 1500.50',
        explanation: {
          roman_urdu: 'Ashariya (decimal point) wala number bana. Python isko `float` kehta hai.',
          english: 'Floating point decimal number.',
          urdu: 'اعشاریہ والا عدد فلوٹ کہلاتا ہے۔'
        },
        ramState: 'RAM Address #0x3C: fees = 1500.50 (float)'
      },
      {
        line: 'print(student_naam, "ka roll number hai:", roll_no)',
        explanation: {
          roman_urdu: '`print` ke andar humne dabbe ka naam likha (baghair quotes ke). Computer dabbe ke andar se value nikaal kar screen par dikhayega.',
          english: 'Prints the contents of variables. Variables inside print do NOT have quotes.',
          urdu: 'ویری ایبل کا نام بغیر کوٹس کے لکھتے ہیں تاکہ اس کی قیمت اسکرین پر آئے۔'
        },
        ramState: 'Output: Zainab ka roll number hai: 105'
      }
    ],
    goldenRules: [
      {
        title: 'Rule 1: Barabar (=) Ka Matlab "Daal Do" (Assignment) Hai',
        rule: {
          roman_urdu: 'Maths mein x = 5 ka matlab dono barabar hain. Magar Python mein iska matlab hai right side ki value left side ke dabbe mein daal do!',
          english: 'In Python, `=` assigns the right value into the left container.',
          urdu: 'ایک برابر (=) کا مطلب قیمت کو ڈبے میں ڈالنا ہے۔'
        },
        goodExample: 'age = 15  # age mein 15 chala gaya',
        badExample: '15 = age  # ❌ SyntaxError! Left side par sirf dabba (variable) ho sakta hai'
      },
      {
        title: 'Rule 2: Naam Ke Beech Mein Space (Khali Jagah) Sakht Mana Hai',
        rule: {
          roman_urdu: 'Variable ke naam mein kabhi space mat dein. Hamesha underscore `_` lagayein.',
          english: 'Never put spaces in variable names. Use underscores.',
          urdu: 'ویری ایبل کے نام میں کبھی اسپیس مت دیں۔'
        },
        goodExample: 'my_school_name = "City School"',
        badExample: 'my school name = "City School"  # ❌ SyntaxError'
      },
      {
        title: 'Rule 3: Shuruat Number Se Nahi Ho Sakti',
        rule: {
          roman_urdu: 'Variable ka pehla harf koi Alphabet ya Underscore hona chahiye, number nahi.',
          english: 'Cannot start with a digit. Use letters or underscores.',
          urdu: 'ویری ایبل کا نام عدد سے شروع نہیں ہو سکتا۔'
        },
        goodExample: 'student1 = "Ali"',
        badExample: '1student = "Ali"  # ❌ SyntaxError'
      },
      {
        title: 'Rule 4: Dabba Print Karte Waqt Quotes Mat Lagayein',
        rule: {
          roman_urdu: 'Agar `naam = "Sara"` hai, to `print(naam)` likhein. Agar `print("naam")` likha to screen par sirf lafz "naam" aayega, Sara nahi!',
          english: 'Do NOT put quotes around variable names when printing.',
          urdu: 'ویری ایبل پرنٹ کرتے وقت کوٹس نہ لگائیں۔'
        },
        goodExample: 'print(naam)   # Dikhaye ga: Sara',
        badExample: 'print("naam") # Dikhaye ga: naam'
      }
    ],
    studentFaqs: [
      {
        question: {
          roman_urdu: 'Sir, int, float, aur str mein kya farq hai?',
          english: 'What is the difference between int, float, and str?',
          urdu: 'انٹ، فلوٹ اور اسٹرنگ میں کیا فرق ہے؟'
        },
        answer: {
          roman_urdu: '1. `int`: Poora number (jaise 5, 20, -10).\n2. `float`: Point / ashariya wala number (jaise 3.14, 99.9).\n3. `str`: Quotes ke andar ka text (jaise "Hello", "Lahore").',
          english: 'int is whole numbers, float is decimals, and str is text wrapped in quotes.',
          urdu: 'انٹ مکمل عدد، فلوٹ اعشاریہ اور اسٹرنگ ٹیکسٹ کو کہتے ہیں۔'
        },
        schoolTip: 'Kisi bhi variable ki type janne ke liye `print(type(x))` likhein.'
      },
      {
        question: {
          roman_urdu: 'Sir, kya variable ki value baad mein tabdeel ho sakti hai?',
          english: 'Can a variable value be changed later?',
          urdu: 'کیا ویری ایبل کی قیمت بعد میں بدلی جا سکتی ہے؟'
        },
        answer: {
          roman_urdu: 'Bilkul! Isiliye to iska naam "Variable" (tabdeel hone wala) hai. Agar aap pehle likhein `score = 10` aur agli line mein likhein `score = 20`, to purani value khatam ho kar nayi 20 ban jayegi.',
          english: 'Yes! That is why it is called a "variable". New assignments overwrite old values.',
          urdu: 'جی ہاں، اسی لیے اسے متغیر کہتے ہیں کیونکہ یہ بدل سکتا ہے۔'
        },
        schoolTip: 'Latest line of code hamesha purani value ko overwrite kar deti hai.'
      }
    ],
    microHomework: {
      title: 'School Homework Task 2: Apna Digital ID Card Banayein',
      scenario: {
        roman_urdu: 'Chaar variables banayein: `naam`, `class_name`, `age`, aur `marks`. Phir un sab ko achhi tarah print karein.',
        english: 'Create 4 variables: `naam`, `class_name`, `age`, and `marks`, then print them formatted.',
        urdu: 'چار متغیرات بنائیں اور ان کی قیمتیں اسکرین پر دکھائیں۔'
      },
      hint: {
        roman_urdu: 'Text ke liye quotes use karein aur age ke liye number.',
        english: 'Use quotes for strings and raw digits for age and marks.',
        urdu: 'ٹیکسٹ کے لیے کوٹس اور نمبر کے لیے بغیر کوٹس لکھیں۔'
      },
      solutionCode: `naam = "Hamza"\nclass_name = "Grade 9"\nage = 14\nmarks = 92.5\nprint("Student:", naam)\nprint("Class:", class_name)\nprint("Age:", age)\nprint("Marks:", marks)`,
      explanation: 'Har variable apni type ke mutabiq store hua aur print ho kar samne aaya.'
    }
  },

  'lesson-3-operators-math': {
    lessonId: 'lesson-3-operators-math',
    moduleIndex: 3,
    schoolAnalogy: {
      realLifeObject: '⚖️ School Ka Math Calculator & Tarazu (Scale)',
      concept: 'Math & Comparison Operators',
      story: {
        roman_urdu: 'Jab aap school ki dukan se 3 samosay aur 2 cold drinks khareedte hain, to dukandar calculator par hisaab karta hai. Python ka calculator boht tez hai! Saath hi Python ke paas aik adalat ka tarazu bhi hai: wo check karta hai ke kya do cheezein barabar hain (`==`) ya ek doosri se bari hai (`>`). Is tarazu ka jawab hamesha `True` (Sach) ya `False` (Jhoot) aata hai!',
        english: 'Like a calculator adding prices and a balance scale comparing weights. Python computes math and comparisons. A comparison always yields True or False.',
        urdu: 'اسکول کے کیلکولیٹر اور ترازو کی طرح، پائتھن حساب بھی کرتا ہے اور برابری کا موازنہ بھی۔'
      }
    },
    lineByLineBreakdown: [
      {
        line: 'kul_kharcha = 50 * 4',
        explanation: {
          roman_urdu: 'Python mein zarb (multiplication) ke liye `*` (asterisk/star) ka nishan lagate hain. 50 * 4 = 200.',
          english: '`*` represents multiplication. 50 * 4 equals 200.',
          urdu: 'ضرب کے لیے اسٹار (*) استعمال ہوتا ہے۔'
        },
        ramState: 'kul_kharcha = 200'
      },
      {
        line: 'kya_pass_hai = marks >= 50',
        explanation: {
          roman_urdu: '`>=` ka matlab hai "Bara hai ya barabar hai". Agar marks 50 ya zyada hain to result `True` aayega, warna `False`.',
          english: '`>=` checks if marks are greater than or equal to 50.',
          urdu: 'یہ چیک کرتا ہے کہ کیا نمبر 50 یا اس سے زیادہ ہیں۔'
        },
        ramState: 'kya_pass_hai = True / False (bool)'
      },
      {
        line: 'baaqi = 10 % 3',
        explanation: {
          roman_urdu: '`%` ko Modulus (Baqi / Remainder) kehte hain! 10 ko 3 se divide karein to 3 * 3 = 9 hota hai, aur 1 baaqi bachta hai. To answer 1 aayega.',
          english: '`%` Modulus returns remainder after division. 10 % 3 = 1.',
          urdu: 'ماڈیولس تقسیم کے بعد باقی بچنے والی رقم بتاتا ہے۔'
        },
        ramState: 'baaqi = 1'
      }
    ],
    goldenRules: [
      {
        title: 'Rule 1: Ek Bar (=) Dabba Bharna Hai, Do Bar (==) Sawal Poochna Hai',
        rule: {
          roman_urdu: 'Ye dunya ki sabse ahem ghalti hai: `a = 5` ka matlab a mein 5 daalo. Magar `a == 5` ka matlab hai kya a, 5 ke barabar hai?',
          english: '`=` is assignment, while `==` is equality comparison.',
          urdu: 'ایک بار برابر ویلیو ڈالتا ہے اور دو بار برابر موازنہ کرتا ہے۔'
        },
        goodExample: 'if score == 100:  # Do bar == lagayein',
        badExample: 'if score = 100:   # ❌ SyntaxError!'
      },
      {
        title: 'Rule 2: Zarb Ke Liye "x" Nahi "*" Lagayein',
        rule: {
          roman_urdu: 'School ki copy mein hum 5 x 5 likhte hain. Python mein hamesha `5 * 5` likha jata hai.',
          english: 'Use `*` for multiplication, never the letter `x`.',
          urdu: 'ضرب کے لیے ہمیشہ اسٹار لگائیں۔'
        },
        goodExample: 'area = l * w',
        badExample: 'area = l x w  # ❌ SyntaxError'
      },
      {
        title: 'Rule 3: Division (/) Hamesha Float Banata Hai',
        rule: {
          roman_urdu: 'Jab bhi aap single `/` se divide karenge, answer point mein aayega jaise 10 / 2 = 5.0.',
          english: 'Single `/` always returns a float decimal.',
          urdu: 'سنگل ڈویژن ہمیشہ اعشاریہ میں جواب دیتی ہے۔'
        },
        goodExample: '10 / 2  # Result: 5.0 (float)',
        badExample: '10 // 2 # Agar poora integer chahiye to double slash laga sakte hain'
      },
      {
        title: 'Rule 4: Barabar Nahi Hai Ke Liye (!=) Lagayein',
        rule: {
          roman_urdu: 'Agar check karna ho ke kya do cheezein barabar NAHI hain to `!=` use hota hai.',
          english: '`!=` means "Not Equal to".',
          urdu: 'برابر نہ ہونے کے لیے != استعمال ہوتا ہے۔'
        },
        goodExample: 'if status != "absent":',
        badExample: 'if status <> "absent": # ❌ Purana syntax'
      }
    ],
    studentFaqs: [
      {
        question: {
          roman_urdu: 'Sir, `%` ka matlab percentage nikalna nahi hota?',
          english: 'Does % mean percentage calculation in Python?',
          urdu: 'کیا پائتھن میں % فیصد کے لیے ہوتا ہے؟'
        },
        answer: {
          roman_urdu: 'Nahi beta! Programming mein `%` ko Modulus kehte hain, aur ye bache hue baaqi (remainder) ko batata hai. Percentage ke liye hum aam hisaab karte hain: `(obtained / total) * 100`.',
          english: 'No, in Python `%` is Modulus (remainder). For percentage, use math formula: (obtained / total) * 100.',
          urdu: 'نہیں، پائتھن میں یہ باقی بچنے والا عدد بتاتا ہے۔ فیصد کے لیے عام فارمولا استعمال کریں۔'
        },
        schoolTip: 'Even aur Odd check karne ke liye `n % 2 == 0` use hota hai!'
      }
    ],
    microHomework: {
      title: 'School Homework Task 3: Canteen Ka Bill Banayein',
      scenario: {
        roman_urdu: 'Samosay ki qeemat 30 rupay hai aur aapne 4 samosay liye. Total bill calculate karein aur check karein ke kya bill 100 rupay se zyada hai.',
        english: 'A samosa is 30 Rs and you bought 4. Compute total and check if total > 100.',
        urdu: 'سموسے کی قیمت 30 روپے ہے اور 4 سموسے لیے گئے۔ کل بل نکالیں اور چیک کریں کہ کیا 100 سے زیادہ ہے۔'
      },
      hint: {
        roman_urdu: '`*` se multiply karein aur `>` se check karein.',
        english: 'Multiply with `*` and test with `>`.',
        urdu: 'ضرب کے لیے اسٹار اور موازنے کے لیے > استعمال کریں۔'
      },
      solutionCode: `samosa_price = 30\nqty = 4\ntotal_bill = samosa_price * qty\nprint("Total Bill:", total_bill)\nprint("Kya 100 se zyada hai?", total_bill > 100)`,
      explanation: '30 * 4 = 120 hua, aur 120 > 100 ka result True aaya.'
    }
  },

  'lesson-4-conditionals-if-else': {
    lessonId: 'lesson-4-conditionals-if-else',
    moduleIndex: 4,
    schoolAnalogy: {
      realLifeObject: '🚦 Traffic Signal & Barish Ka Chhata (Umbrella)',
      concept: 'if, elif, else Ki Faisla Sazi',
      story: {
        roman_urdu: 'Subah uth kar aap khirki se bahar dekhte hain: AGAR (if) barish ho rahi hai to chhata le jao, WARNA (else) baghair chhate ke school jao! Traffic light par: AGAR light red hai to ruko, AGAR yellow hai to tayyar ho jao, WARNA (green) chalo! Programming mein computer bilkul isi tarah faislay karta hai.',
        english: 'Like deciding to carry an umbrella: IF it is raining, take it, ELSE go without it. Traffic signals: IF red stop, ELIF yellow get ready, ELSE go. That is conditional branching.',
        urdu: 'ٹریفک سگنل اور بارش میں چھتری کی طرح، اگر یہ ہو تو وہ کرو، ورنہ دوسرا راستہ اختیار کرو۔'
      }
    },
    lineByLineBreakdown: [
      {
        line: 'if marks >= 80:',
        explanation: {
          roman_urdu: '1. `if`: Computer ko bola "check karo".\n2. `marks >= 80`: Shart (condition).\n3. `:` (Colon): Boht ahem! Iska matlab hai "To phir ye karo".',
          english: '1. `if`: Check keyword.\n2. `condition`: The test.\n3. `:` (Colon): Crucial delimiter starting the indented branch block.',
          urdu: 'اگر نمبر 80 یا اس سے زیادہ ہوں تو کولن کے بعد والی لائن چلے گی۔'
        },
        ramState: 'Condition check: marks >= 80'
      },
      {
        line: '    print("A+ Grade!")',
        explanation: {
          roman_urdu: 'Ghaur karein ye line 4 spaces aagay hai! Isko Indentation kehte hain. Iska matlab ye line sirf usi waqt chalegi jab marks 80 ya zyada honge.',
          english: 'Indented by 4 spaces! Runs ONLY when the `if` condition evaluates to True.',
          urdu: 'چار اسپیس آگے لکھنے کا مطلب یہ کوڈ صرف شرط سچ ہونے پر چلے گا۔'
        },
        whyThisSyntax: 'Python mein braces `{ }` nahi hote, indentation hi block batati hai.'
      },
      {
        line: 'else:',
        explanation: {
          roman_urdu: 'Agar upar wali shart galat (False) nikli, to `else:` wali line chale gi. Iska matlab hai "Warna".',
          english: 'Fallback block when condition is False. Colons required.',
          urdu: 'ورنہ کا بلاک جب پہلی شرط غلط ہو۔'
        }
      }
    ],
    goldenRules: [
      {
        title: 'Rule 1: Shart Ke Aakhir Mein Colon (:) Lagana Farz Hai',
        rule: {
          roman_urdu: '`if`, `elif`, aur `else` ke aakhir mein hamesha do nuqtay `:` (colon) lagte hain.',
          english: 'Never forget the trailing colon `:` on if/elif/else statements.',
          urdu: 'ہر شرط کے بعد کولن (:) لگانا لازمی ہے۔'
        },
        goodExample: 'if umar >= 18:',
        badExample: 'if umar >= 18   # ❌ SyntaxError: expected \':\''
      },
      {
        title: 'Rule 2: Indentation (4 Spaces) Python Ki Jaan Hai',
        rule: {
          roman_urdu: 'Jo code if ke andar chalana hai, usko Tab ya 4 spaces aagay karein.',
          english: 'Indent the body of if statements by exactly 4 spaces (or 1 Tab).',
          urdu: 'شرط کے اندر والا کوڈ 4 اسپیس آگے ہونا چاہیے۔'
        },
        goodExample: 'if pass_hua:\n    print("Mubarak!")',
        badExample: 'if pass_hua:\nprint("Mubarak!")  # ❌ IndentationError!'
      },
      {
        title: 'Rule 3: elif Ka Matlab "Warna Agar"',
        rule: {
          roman_urdu: 'Doosri shart check karne ke liye `elif` use hota hai (else if ka mukhtasar roop).',
          english: 'Use `elif` for multiple chained conditional branches.',
          urdu: 'دوسری شرط کے لیے elif استعمال ہوتا ہے۔'
        },
        goodExample: 'if x > 10: ... elif x > 5: ... else: ...',
        badExample: 'else if x > 5:  # ❌ Python mein "else if" nahi balke "elif" likhte hain'
      },
      {
        title: 'Rule 4: Shart Hamesha Boolean (True ya False) Hoti Hai',
        rule: {
          roman_urdu: 'if ke aagay hamesha aisi shart likhi jaati hai jiska jawab haan ya na mein ho.',
          english: 'The condition must resolve to a boolean True or False.',
          urdu: 'شرط کا نتیجہ ہمیشہ سچ یا جھوٹ ہوتا ہے۔'
        },
        goodExample: 'if temperature > 40:',
        badExample: 'if temperature: # Agar temperature zero ho to False samjhega'
      }
    ],
    studentFaqs: [
      {
        question: {
          roman_urdu: 'Sir, kya else lagana hamesha zaroori hai?',
          english: 'Is an else block mandatory in Python?',
          urdu: 'کیا ہر if کے ساتھ else لگانا ضروری ہے؟'
        },
        answer: {
          roman_urdu: 'Nahi! `else` optional hota hai. Agar aapko warna mein kuch nahi karna, to sirf `if` likh kar chhor sakte hain.',
          english: 'No, `else` is completely optional. If nothing should happen on False, omit it.',
          urdu: 'نہیں، ایلس لگانا لازمی نہیں ہے اگر آپ کو کوئی کام نہ کرنا ہو۔'
        },
        schoolTip: 'Sirf tab else lagayein jab condition False hone par koi mutabadil kaam karna ho.'
      }
    ],
    microHomework: {
      title: 'School Homework Task 4: Ticket Inspector Program',
      scenario: {
        roman_urdu: 'Variable `age = 12` banayein. Agar age 18 ya zyada ho to print karein "Poori Ticket", warna print karein "Bachon Ki Half Ticket".',
        english: 'Check age: if >= 18 print full ticket, else child half ticket.',
        urdu: 'عمر چیک کریں: 18 یا زیادہ پر پوری ٹکٹ، ورنہ بچوں کی ہاف ٹکٹ پرنٹ کریں۔'
      },
      hint: {
        roman_urdu: '`if age >= 18:` aur `else:` lagayein.',
        english: 'Use if and else with colon and 4 spaces indentation.',
        urdu: 'کولن اور چار اسپیس کا خیال رکھیں۔'
      },
      solutionCode: `age = 12\nif age >= 18:\n    print("Poori Ticket")\nelse:\n    print("Bachon Ki Half Ticket")`,
      explanation: 'Kyunke age 12 hai jo 18 se kam hai, isliye else block chala aur half ticket print hua.'
    }
  },

  'lesson-5-loops': {
    lessonId: 'lesson-5-loops',
    moduleIndex: 5,
    schoolAnalogy: {
      realLifeObject: '🔄 School Assembly Attendance & Rassi Koodna (Jumping Rope)',
      concept: 'for Aur while Loops',
      story: {
        roman_urdu: 'Tasawwur karein class teacher attendance laga rahe hain: Wo Roll No 1 se shuru karte hain aur Roll No 30 tak har bache ka naam pukarte hain (ye `for loop` hai kyunke humein pata hai kul 30 bache hain). Doosri taraf, aap rassi kood rahe hain JAB TAK (while) aap thak nahi jatay (ye `while loop` hai kyunke humein pehle se nahi pata kab tak chalega).',
        english: 'Like a teacher calling roll call from 1 to 30 (for loop with known count) versus skipping rope while you have energy (while loop with unknown count).',
        urdu: 'اسکول کی حاضری کی طرح ایک ایک کر کے سب کا نام پکارنا فار لوپ ہے، اور جب تک کام نہ ہو چلتے رہنا وائل لوپ ہے۔'
      }
    },
    lineByLineBreakdown: [
      {
        line: 'for i in range(1, 6):',
        explanation: {
          roman_urdu: '1. `for i in`: Aik aik kar ke value uthao.\n2. `range(1, 6)`: 1 se shuru karo aur 6 se pehle (yaani 5 par) ruk jao!\n3. `:` Colon lagaya takay block shuru ho.',
          english: 'Loops from 1 up to 5 (stops before 6). Colons required.',
          urdu: 'ایک سے پانچ تک کا لوپ چلتا ہے۔'
        },
        ramState: 'Iteration: i = 1, phir 2, 3, 4, 5'
      },
      {
        line: '    print("Number:", i)',
        explanation: {
          roman_urdu: 'Ye line 5 dafa chalegi aur har dafa `i` ki nayi value print karegi.',
          english: 'Executes 5 times printing current index.',
          urdu: 'یہ لائن پانچ مرتبہ چلے گی۔'
        }
      }
    ],
    goldenRules: [
      {
        title: 'Rule 1: range(start, stop) Mein Aakhri Number Shamil Nahi Hota',
        rule: {
          roman_urdu: '`range(1, 5)` sirf 1, 2, 3, 4 tak chalega. 5 shamil nahi hota!',
          english: 'The stop parameter in range() is exclusive (stops one before).',
          urdu: 'رینج کا آخری عدد لوپ میں شامل نہیں ہوتا۔'
        },
        goodExample: 'range(1, 11)  # 1 se 10 tak chalega',
        badExample: 'range(1, 10)  # Ye sirf 9 tak chalega!'
      },
      {
        title: 'Rule 2: while Loop Mein Value Barhana (Increment) Mat Bhooliye',
        rule: {
          roman_urdu: 'Agar `count = 1` hai aur while loop mein `count += 1` na likhein, to loop kabhi nahi rukega aur computer hang ho jayega (Infinite Loop)!',
          english: 'Always update counter inside while loops to prevent infinite loops.',
          urdu: 'وائل لوپ میں ویلیو بڑھانا مت بھولیں ورنہ وہ ہمیشہ چلتا رہے گا۔'
        },
        goodExample: 'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1',
        badExample: 'count = 1\nwhile count <= 5:\n    print(count)  # ❌ Infinite loop!'
      },
      {
        title: 'Rule 3: break Ka Matlab Foran Loop Se Bahar Niklo',
        rule: {
          roman_urdu: 'Agar darmiyan mein kisi shart par loop rokna ho to `break` command use karein.',
          english: 'Use `break` to immediately exit a loop.',
          urdu: 'لوپ کو فوری روکنے کے لیے بریک استعمال کریں۔'
        },
        goodExample: 'if item == "roti": break',
        badExample: 'return  # Function ke bahar direct return syntax error deta hai'
      },
      {
        title: 'Rule 4: continue Ka Matlab Is Baari Ko Chhor Kar Agli Par Jao',
        rule: {
          roman_urdu: 'Agar sirf is dafa ka kaam skip karna ho to `continue` lagayein.',
          english: 'Use `continue` to skip the remainder of the current iteration.',
          urdu: 'موجودہ چکر چھوڑ کر اگلے پر جانے کے لیے کنٹینیو استعمال کریں۔'
        },
        goodExample: 'if i == 3: continue  # 3 print nahi hoga',
        badExample: 'skip  # Python mein "skip" koi keyword nahi hai'
      }
    ],
    studentFaqs: [
      {
        question: {
          roman_urdu: 'Sir, for loop aur while loop mein kya farq hai?',
          english: 'When should I use for loop vs while loop?',
          urdu: 'فار لوپ اور وائل لوپ میں کیا فرق ہے؟'
        },
        answer: {
          roman_urdu: 'Jab aapko pehle se pata ho ke kitni dafa chalana hai (jaise 10 dafa ya list ke har item par), to `for loop` lagayein. Jab kisi shart (condition) ke poora hone tak chalana ho, to `while loop` lagayein.',
          english: 'Use `for` when number of iterations is known; use `while` when repeating until a condition changes.',
          urdu: 'جب تعداد معلوم ہو تو فار لوپ، اور جب شرط پر منحصر ہو تو وائل لوپ استعمال کریں۔'
        },
        schoolTip: '90% aam kamo mein `for loop` sabse aasan aur mehfooz hota hai.'
      }
    ],
    microHomework: {
      title: 'School Homework Task 5: 2 Ka Pahara (Table of 2)',
      scenario: {
        roman_urdu: 'For loop ka istemal karte hue 2 ka pahara 1 se 5 tak print karein: "2 x 1 = 2", "2 x 2 = 4" etc.',
        english: 'Print multiplication table of 2 from 1 to 5 using a for loop.',
        urdu: 'فار لوپ کے ذریعے 2 کا پہاڑہ 1 سے 5 تک پرنٹ کریں۔'
      },
      hint: {
        roman_urdu: '`for i in range(1, 6):` use karein aur f-string mein `2 * i` calculate karein.',
        english: 'Iterate with range(1, 6) and output formatted string.',
        urdu: 'رینج 1 سے 6 استعمال کریں۔'
      },
      solutionCode: `for i in range(1, 6):\n    print(f"2 x {i} = {2 * i}")`,
      explanation: 'range(1, 6) se i ki value 1, 2, 3, 4, 5 aayi aur table print ho gaya.'
    }
  },

  'lesson-6-lists-tuples': {
    lessonId: 'lesson-6-lists-tuples',
    moduleIndex: 6,
    schoolAnalogy: {
      realLifeObject: '🎒 School Bag / Pencil Box & Shopping List',
      concept: 'Lists & Tuples',
      story: {
        roman_urdu: 'Agar aapke paas 5 pensilain hain, to har pencil ke liye alag dabba banane ke bajaye aap ek hi Pencil Box mein saari pensilain rakh dete hain! Python mein is Pencil Box ko `List` kehte hain. Isme hum square brackets `[ ... ]` lagate hain. Aur yaad rakhein: Computer ginti 1 se nahi balke ZERO (0) se shuru karta hai!',
        english: 'Like a pencil box carrying multiple pens. Instead of 5 separate variables, store them together in a single `List` using square brackets `[...]`. Computer starts counting items at index 0!',
        urdu: 'پنسل باکس کی طرح جس میں کئی چیزیں ایک ساتھ رکھی جاتی ہیں، لسٹ متعدد چیزوں کا مجموعہ ہے۔'
      }
    },
    lineByLineBreakdown: [
      {
        line: 'fruits = ["Aam", "Kela", "Seb"]',
        explanation: {
          roman_urdu: 'Square brackets `[` aur `]` mein comma laga kar 3 fruits mehfooz kiye.',
          english: 'Creates a list with 3 elements separated by commas.',
          urdu: 'مربع بریکٹ میں تین پھل محفوظ کیے۔'
        },
        ramState: 'Index 0: "Aam", Index 1: "Kela", Index 2: "Seb"'
      },
      {
        line: 'print(fruits[0])',
        explanation: {
          roman_urdu: 'Pehli cheez nikalne ke liye `[0]` likha, kyunke Python 0 se shuru karta hai! Screen par "Aam" aayega.',
          english: 'Retrieves first item at zero-index.',
          urdu: 'پہلی چیز نکالنے کے لیے صفر انڈیکس لکھا۔'
        }
      },
      {
        line: 'fruits.append("Amrood")',
        explanation: {
          roman_urdu: '`append` ka matlab hai aakhir mein ek nayi cheez shamil kar do.',
          english: 'Adds "Amrood" to the end of the list.',
          urdu: 'اپینڈ لسٹ کے آخر میں نیا آئٹم شامل کرتا ہے۔'
        }
      }
    ],
    goldenRules: [
      {
        title: 'Rule 1: Python Ginti 0 Se Shuru Karta Hai (Zero-based Indexing)',
        rule: {
          roman_urdu: 'Pehle item ka index `0`, doosre ka `1`, teesre ka `2` hota hai.',
          english: 'The first element is always at index 0, not 1.',
          urdu: 'پہلے آئٹم کا نمبر ہمیشہ 0 ہوتا ہے۔'
        },
        goodExample: 'items[0]  # Pehla item milega',
        badExample: 'items[1]  # Ye doosra item dega!'
      },
      {
        title: 'Rule 2: List Mein Square Brackets [...] Hoti Hain',
        rule: {
          roman_urdu: 'List ke liye chakor brackets `[]`, jabke Tuple ke liye gol brackets `()` lagte hain.',
          english: 'Lists use square brackets `[]`; tuples use parentheses `()`.',
          urdu: 'لسٹ کے لیے مربع بریکٹ استعمال کریں۔'
        },
        goodExample: 'friends = ["Ali", "Ahmed"]',
        badExample: 'friends = {"Ali", "Ahmed"} # ❌ Ye Set ban jayega'
      },
      {
        title: 'Rule 3: List Tabdeel Ho Sakti Hai, Tuple Tabdeel Nahi Hota',
        rule: {
          roman_urdu: 'List Mutable (tabdeel hone wali) hai, jabke Tuple Immutable (na-badalne wala) hai.',
          english: 'Lists are mutable; tuples are read-only and immutable.',
          urdu: 'لسٹ کو بعد میں بدلا جا سکتا ہے جبکہ ٹپل نہیں بدلتا۔'
        },
        goodExample: 'my_list.append("naya")',
        badExample: 'my_tuple.append("naya") # ❌ AttributeError!'
      },
      {
        title: 'Rule 4: Index Out of Range Ka Error',
        rule: {
          roman_urdu: 'Agar list mein 3 cheezein hain to index sirf 0, 1, 2 hain. Agar aap `items[5]` maangeinge to Python IndexError dega.',
          english: 'Accessing an index beyond list length triggers IndexError.',
          urdu: 'لسٹ کی لمبائی سے بڑا انڈیکس مانگنے پر ایرر آتا ہے۔'
        },
        goodExample: 'if len(items) > 3: print(items[3])',
        badExample: 'items[99]  # ❌ IndexError: list index out of range'
      }
    ],
    studentFaqs: [
      {
        question: {
          roman_urdu: 'Sir, aakhri item kaise nikaalte hain agar list boht lambi ho?',
          english: 'How to get the last item without knowing length?',
          urdu: 'آخری آئٹم کیسے نکالتے ہیں؟'
        },
        answer: {
          roman_urdu: 'Python mein manfi (negative) index lagayein! `items[-1]` hamesha sabse aakhri item dega, aur `items[-2]` aakhir se doosra item dega.',
          english: 'Use negative indexing: `items[-1]` returns the very last item.',
          urdu: 'منفی ایک [-1] لکھنے سے آخری آئٹم مل جاتا ہے۔'
        },
        schoolTip: 'Negative indexing Python ka sabse pyara aur aasan feature hai!'
      }
    ],
    microHomework: {
      title: 'School Homework Task 6: Favorite Subjects List',
      scenario: {
        roman_urdu: '3 subjects ki list banayein: "Math", "Science", "English". Phir usme "Computer" append karein aur pehla subject print karein.',
        english: 'Create a subjects list, append "Computer", and print the first element.',
        urdu: 'تین مضامین کی لسٹ بنائیں، کمپیوٹر شامل کریں اور پہلا مضمون پرنٹ کریں۔'
      },
      hint: {
        roman_urdu: '`append` method use karein aur index `[0]` print karein.',
        english: 'Use append() then access index 0.',
        urdu: 'اپینڈ استعمال کریں اور انڈیکس 0 دیکھیں۔'
      },
      solutionCode: `subjects = ["Math", "Science", "English"]\nsubjects.append("Computer")\nprint("Pehla Subject:", subjects[0])\nprint("Kul Subjects:", len(subjects))`,
      explanation: 'Pehla subject Math print hua aur kul lambai 4 ho gayi.'
    }
  },

  'lesson-7-dictionaries': {
    lessonId: 'lesson-7-dictionaries',
    moduleIndex: 7,
    schoolAnalogy: {
      realLifeObject: '🪪 School Student ID Card & Telephone Directory',
      concept: 'Dictionaries (Key-Value Pairs)',
      story: {
        roman_urdu: 'Sochein school ke student ID card par kya hota hai: "Naam": Ali, "Roll No": 105, "Class": 10. Yahan "Naam" aik Chabi (Key) hai aur "Ali" uski Value hai! Phone directory mein bhi hum Dost ka Naam dhoond kar uska Number nikaalte hain. Python mein isko Dictionary kehte hain, aur ye curly braces `{ ... }` mein banti hai.',
        english: 'Like a student ID card pairing fields: "Name": Ali, "RollNo": 105. "Name" is the Key and "Ali" is the Value! In Python, Dictionaries hold Key-Value pairs inside curly braces `{}`.',
        urdu: 'اسکول کے شناختی کارڈ اور فون ڈائریکٹری کی طرح، جہاں ہر نام کے ساتھ اس کی معلومات لکھی ہوتی ہیں۔'
      }
    },
    lineByLineBreakdown: [
      {
        line: 'student = {"naam": "Hassan", "age": 16, "city": "Lahore"}',
        explanation: {
          roman_urdu: 'Curly braces `{}` mein Key aur Value ke darmiyan colon `:` lagaya.',
          english: 'Defines a dictionary with keys and values separated by colons.',
          urdu: 'کرلی بریکٹ میں کی اور ویلیو کا جوڑا بنایا۔'
        },
        ramState: 'Hash Map: "naam" -> "Hassan", "age" -> 16'
      },
      {
        line: 'print(student["naam"])',
        explanation: {
          roman_urdu: 'Square brackets mein Chabi ka naam likha to uski value "Hassan" nikal kar aayi.',
          english: 'Accesses the value associated with key "naam".',
          urdu: 'کی کا نام لکھ کر اس کی ویلیو حاصل کی۔'
        }
      }
    ],
    goldenRules: [
      {
        title: 'Rule 1: Key Aur Value Ke Darmiyan Colon (:) Lagta Hai',
        rule: {
          roman_urdu: 'Key aur Value ke beech colon `:` aur har joray ke baad comma `,` lagta hai.',
          english: 'Separate key and value with colon `:`, and entries with commas.',
          urdu: 'کی اور ویلیو کے درمیان کولن لگانا لازمی ہے۔'
        },
        goodExample: '{"city": "Karachi", "zip": 74000}',
        badExample: '{"city" = "Karachi"}  # ❌ SyntaxError!'
      },
      {
        title: 'Rule 2: Key Hamesha Unique (Munfarid) Hoti Hai',
        rule: {
          roman_urdu: 'Aik dictionary mein do aik jaise naam ki keys nahi ho sakti, nayi wali purani ko overwrite kar degi.',
          english: 'Keys must be unique; duplicate keys overwrite earlier ones.',
          urdu: 'ایک ڈکشنری میں ایک ہی نام کی دو کیز نہیں ہو سکتیں۔'
        },
        goodExample: '{"a": 1, "b": 2}',
        badExample: '{"a": 1, "a": 2}  # "a" ki value 2 ho jayegi'
      },
      {
        title: 'Rule 3: Mehfooz Tareeqe Se get() Ka Istemal Karein',
        rule: {
          roman_urdu: 'Agar key na mile to error se bachne ke liye `dict.get("key")` use karein.',
          english: 'Use `.get(key)` to prevent KeyError when key is missing.',
          urdu: 'ایرر سے بچنے کے لیے get() استعمال کریں۔'
        },
        goodExample: 'student.get("phone", "Not Found")',
        badExample: 'student["phone"]  # ❌ KeyError if missing!'
      },
      {
        title: 'Rule 4: Curly Brackets {} Istemal Karein',
        rule: {
          roman_urdu: 'Dictionary hamesha curly brackets `{}` mein banti hai.',
          english: 'Always use curly braces `{}` for dictionaries.',
          urdu: 'ڈکشنری کے لیے ہمیشہ کرلی بریکٹ استعمال کریں۔'
        },
        goodExample: 'd = {"x": 10}',
        badExample: 'd = ["x": 10]  # ❌ SyntaxError'
      }
    ],
    studentFaqs: [
      {
        question: {
          roman_urdu: 'Sir, List aur Dictionary mein kya farq hai?',
          english: 'Difference between List and Dictionary?',
          urdu: 'لسٹ اور ڈکشنری میں کیا فرق ہے؟'
        },
        answer: {
          roman_urdu: 'List mein cheezein number index (0, 1, 2) se pehchani jaati hain. Jabke Dictionary mein cheezein unke Naam ya Chabi (Key jaise "naam", "age") se pehchani jaati hain.',
          english: 'Lists use numerical indices (0, 1, 2), while dictionaries use descriptive custom keys.',
          urdu: 'لسٹ نمبروں سے چلتی ہے اور ڈکشنری ناموں اور کیز سے۔'
        },
        schoolTip: 'Jab data structured ho (jaise user profile, product details), to hamesha Dictionary use karein.'
      }
    ],
    microHomework: {
      title: 'School Homework Task 7: School Bus Pass Record',
      scenario: {
        roman_urdu: 'Aik dictionary banayein jisme student ka `name`, `route` ("Route 4"), aur `status` ("Active") ho. Phir uska route print karein.',
        english: 'Create a bus pass dictionary with name, route, and status, and print route.',
        urdu: 'ایک بس پاس ڈکشنری بنائیں اور روٹ پرنٹ کریں۔'
      },
      hint: {
        roman_urdu: 'Curly braces `{}` mein keys quotes mein likhein.',
        english: 'Use curly braces with string keys.',
        urdu: 'کرلی بریکٹ استعمال کریں۔'
      },
      solutionCode: `bus_pass = {\n    "name": "Bilal",\n    "route": "Route 4 (Gulberg)",\n    "status": "Active"\n}\nprint("Student:", bus_pass["name"])\nprint("Route:", bus_pass["route"])`,
      explanation: 'Key-value mapping se foran data print ho gaya.'
    }
  },

  'lesson-8-functions': {
    lessonId: 'lesson-8-functions',
    moduleIndex: 8,
    schoolAnalogy: {
      realLifeObject: '🍹 Kitchen Ka Juice Blender & ATM Machine',
      concept: 'Functions (def, arguments, return)',
      story: {
        roman_urdu: 'Tasawwur karein kitchen mein juice blender machine hai. Aap usme gajar aur maalta daalte hain (ye Input ya Arguments hain), machine button dabane par ghoomti hai aur aapko fresh juice ka glass nikaal kar deti hai (ye `return` Value hai). Function aik aisi machine hai jisko aap aik dafa bana lete hain aur phir jab chahein hazaron dafa istemal kar sakte hain, baar baar wahi code likhne ki zaroorat nahi!',
        english: 'Like a juice blender: put in fruits (arguments), blender processes it, and gives back fresh juice (`return` value). A function is a reusable machine you write once and call a thousand times without duplicating code.',
        urdu: 'جوسر مشین کی طرح جس میں پھل ڈالیں تو وہ جوس نکال کر دیتی ہے، فنکشن بھی ان پٹ لے کر نتیجہ دیتا ہے۔'
      }
    },
    lineByLineBreakdown: [
      {
        line: 'def salam_karo(naam):',
        explanation: {
          roman_urdu: '1. `def`: Python ko bola "Nayi Machine Define Karo".\n2. `salam_karo`: Machine ka naam.\n3. `(naam)`: Parameter (jo samaan machine ke andar aayega).\n4. `:` Colon lagaya.',
          english: '`def` defines function, `(naam)` receives argument, colon starts body.',
          urdu: 'ڈیف سے فنکشن بنتا ہے اور بریکٹ میں ویری ایبل آتا ہے۔'
        },
        ramState: 'Function salam_karo registered in memory'
      },
      {
        line: '    paigham = f"Assalam-o-Alaikum, {naam}!"',
        explanation: {
          roman_urdu: 'Machine ke andar kaam hua aur paigham tayyar hua.',
          english: 'Prepares formatted greeting.',
          urdu: 'فنکشن کے اندر کام مکمل ہوا۔'
        }
      },
      {
        line: '    return paigham',
        explanation: {
          roman_urdu: '`return` ka matlab hai nateeja bahar bhej do jahan se bulaya gaya tha.',
          english: 'Sends result back to the caller.',
          urdu: 'ریٹرن جواب واپس بھیجتا ہے۔'
        }
      },
      {
        line: 'jawab = salam_karo("Usman")',
        explanation: {
          roman_urdu: 'Machine ko pukara gaya (Function Call). Screen par jawab store hua.',
          english: 'Calling the function with argument "Usman".',
          urdu: 'فنکشن کو کال کیا گیا۔'
        }
      }
    ],
    goldenRules: [
      {
        title: 'Rule 1: Function Hamesha def Se Shuru Hota Hai',
        rule: {
          roman_urdu: 'Function banane ke liye `def` keyword aur aakhir mein colon `:` lagana zaroori hai.',
          english: 'Functions begin with `def` keyword and require trailing colon.',
          urdu: 'فنکشن ہمیشہ def سے شروع ہوتا ہے۔'
        },
        goodExample: 'def add(a, b):',
        badExample: 'function add(a, b) {  # ❌ Ye JavaScript hai, Python nahi!'
      },
      {
        title: 'Rule 2: print Aur return Mein Zameen Aasman Ka Farq Hai',
        rule: {
          roman_urdu: '`print` sirf screen par dikhata hai, magar `return` jawab ko doosre hisab kitaab ke liye wapis bhejta hai.',
          english: '`print` merely logs to console; `return` hands data back to caller.',
          urdu: 'پرنٹ صرف دکھاتا ہے جبکہ ریٹرن نتیجہ واپس دیتا ہے۔'
        },
        goodExample: 'def square(n): return n * n',
        badExample: 'def square(n): print(n * n) # Baad mein hisaab nahi ho sakega'
      },
      {
        title: 'Rule 3: Function Ko Call Karna Zaroori Hai',
        rule: {
          roman_urdu: 'Sirf `def` likhne se code nahi chalta, jab tak aap usko naam se na pukarein (jaise `my_func()`).',
          english: 'A function only runs when explicitly called with parentheses `()`.',
          urdu: 'فنکشن کو جب تک پکارا نہ جائے وہ خود نہیں چلتا۔'
        },
        goodExample: 'greet("Ali")',
        badExample: 'greet  # Brackets na lagane par function chalega nahi'
      },
      {
        title: 'Rule 4: Default Values Dena Mumkin Hai',
        rule: {
          roman_urdu: 'Agar koi argument na de to pehle se tay shuda value rakh sakte hain: `def greet(naam="Student"):`.',
          english: 'Parameters can have default fallback values.',
          urdu: 'پہلے سے طے شدہ ویلیو دی جا سکتی ہے۔'
        },
        goodExample: 'def greet(name="Dost"):',
        badExample: 'def greet(name = "Dost", age): # ❌ Default argument non-default se pehle nahi aa sakta'
      }
    ],
    studentFaqs: [
      {
        question: {
          roman_urdu: 'Sir, agar function mein return na likhein to kya hoga?',
          english: 'What happens if a function lacks a return statement?',
          urdu: 'اگر ریٹرن نہ لکھیں تو کیا ہوگا؟'
        },
        answer: {
          roman_urdu: 'Python khud ba khud `None` (kuch nahi) wapis karta hai.',
          english: 'Python automatically returns `None`.',
          urdu: 'پائتھن خود بخود None واپس کرتا ہے۔'
        },
        schoolTip: 'Agar calculation ka answer kisi variable mein save karna ho to return lazmi likhein.'
      }
    ],
    microHomework: {
      title: 'School Homework Task 8: Area Calculator Function',
      scenario: {
        roman_urdu: 'Aik function `rectangle_area(l, w)` banayein jo lambai aur chorai ko zarb de kar area return kare. Phir 10 aur 5 ka area nikaal kar print karein.',
        english: 'Define rectangle_area(l, w) returning l * w, then test with 10 and 5.',
        urdu: 'ایک فنکشن بنائیں جو لمبائی اور چوڑائی کو ضرب دے کر رقبہ نکالے۔'
      },
      hint: {
        roman_urdu: '`def rectangle_area(l, w):` likhein aur `return l * w`.',
        english: 'Use def and return keyword.',
        urdu: 'ڈیف اور ریٹرن استعمال کریں۔'
      },
      solutionCode: `def rectangle_area(l, w):\n    return l * w\n\nans = rectangle_area(10, 5)\nprint("Area:", ans)`,
      explanation: '10 * 5 = 50 calculate ho kar return hua aur ans mein save ho gaya.'
    }
  }
};

export function getLessonSchoolPedagogy(lessonId: string, defaultTitle: string, moduleIndex: number): LessonSchoolPedagogy {
  if (schoolPedagogyData[lessonId]) {
    return schoolPedagogyData[lessonId];
  }

  // Generative high-quality fallback for other lessons
  return {
    lessonId,
    moduleIndex,
    schoolAnalogy: {
      realLifeObject: `🏫 School Classroom & Real-Life Model (Module ${moduleIndex})`,
      concept: `${defaultTitle} Ka Asal Maqsad`,
      story: {
        roman_urdu: `Tasawwur karein jaise school ki class mein har rule aur tool ka aik maqsad hota hai, wese hi Python mein "${defaultTitle}" programmer ka ahem hathyar hai. Isko samajhne ke baad aapka code professional aur bug-free ban jata hai.`,
        english: `Just like every school tool has a purpose, in Python "${defaultTitle}" empowers you to write clean, professional, and automated code.`,
        urdu: `اسکول کی کلاس کی طرح پائتھن کا یہ سبق کوڈ کو پختہ اور غلطیوں سے پاک بنانے کے لیے بنیادی حیثیت رکھتا ہے۔`
      }
    },
    lineByLineBreakdown: [
      {
        line: '# Sahi aur Saaf Syntax',
        explanation: {
          roman_urdu: 'Har line ko upar se neeche ghaur se parhein. Python pehle pehli line run karta hai, phir doosri line par aata hai.',
          english: 'Python executes step-by-step from top to bottom.',
          urdu: 'پائتھن ایک ایک کر کے اوپر سے نیچے لائنیں چلاتا ہے۔'
        },
        ramState: 'CPU Instruction Pipeline: Step-by-step execution'
      }
    ],
    goldenRules: [
      {
        title: 'Rule 1: Indentation Ka Khas Khayal Rakhein',
        rule: {
          roman_urdu: 'Har block ke andar 4 spaces zaroor dein.',
          english: 'Always maintain 4-space indentation.',
          urdu: 'چار اسپیس کا فاصلہ لازمی رکھیں۔'
        },
        goodExample: '    # 4 spaces aagay',
        badExample: '# Baghair space ke block likhna'
      },
      {
        title: 'Rule 2: Naming Conventions Sahi Rakhein',
        rule: {
          roman_urdu: 'Chotay haroof aur underscore `_` ka istemal karein.',
          english: 'Use lowercase snake_case naming.',
          urdu: 'چھوٹے حروف اور انڈر اسکور استعمال کریں۔'
        },
        goodExample: 'user_score = 100',
        badExample: 'User Score = 100'
      },
      {
        title: 'Rule 3: Chhoti Chhoti Misalon Se Test Karein',
        rule: {
          roman_urdu: 'Bara program likhne se pehle 2 lines likh kar Run Code button se check karein.',
          english: 'Test incrementally in small 2-line steps.',
          urdu: 'چھوٹے ٹکڑوں میں کوڈ چیک کریں۔'
        },
        goodExample: 'print("Testing 123")',
        badExample: 'Baghair test kiye 100 lines likhna'
      },
      {
        title: 'Rule 4: Ghalati Aane Par Ghabrayein Nahi',
        rule: {
          roman_urdu: 'Error message Python ka dostana mashwara hai jo batata hai ke kis line par kya theek karna hai.',
          english: 'Errors are helpful diagnostic signposts.',
          urdu: 'ایرر میسج کو پڑھ کر درست کریں۔'
        },
        goodExample: 'Line number check karna',
        badExample: 'Error parhe baghair band kar dena'
      }
    ],
    studentFaqs: [
      {
        question: {
          roman_urdu: 'Sir, agar mujhe is lesson mein koi cheez samajh na aaye to kya karun?',
          english: 'What should I do if I get stuck in this lesson?',
          urdu: 'اگر کچھ سمجھ نہ آئے تو کیا کروں؟'
        },
        answer: {
          roman_urdu: 'Upar right side par "AI Ustad Se Poochein 🤖" button dabayein! AI Ustad foran Roman Urdu mein asaan tareeqe se wazahat karega.',
          english: 'Click "AI Ustad Se Poochein" button to get immediate guidance in simple Roman Urdu.',
          urdu: 'اوپر اے آئی استاد کا بٹن دبائیں اور فوری رہنمائی حاصل کریں۔'
        },
        schoolTip: 'Kabhi bhi sawal puchnay mein jhijhak mehsoos na karein!'
      }
    ],
    microHomework: {
      title: `School Homework Task: ${defaultTitle} Practice`,
      scenario: {
        roman_urdu: 'Is sabaq ke interactive code ko thora sa tabdeel karein aur apne naam ya pasandeeda values ke sath run karein.',
        english: 'Modify the interactive example with your own custom values and run it.',
        urdu: 'کوڈ میں اپنی پسند کی قیمتیں درج کر کے رن کریں۔'
      },
      hint: {
        roman_urdu: 'Run Code ka button dabayein aur console mein output dekhein.',
        english: 'Hit Run Code and inspect console output.',
        urdu: 'رن کوڈ پر کلک کریں۔'
      },
      solutionCode: `# Test your custom code here\nprint("Alhamdulillah, Sabaq Samajh Aa Gaya!")`,
      explanation: 'Apne haath se code likhne se confidence barhta hai.'
    }
  };
}
