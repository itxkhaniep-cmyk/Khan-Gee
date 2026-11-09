import { Quiz } from '../types';

export const quizzesData: Quiz[] = [
  {
    id: 'quiz-1',
    lessonId: 'lesson-1-intro-print',
    passingScore: 3,
    xpReward: 30,
    title: {
      roman_urdu: 'Quiz 1: Python Basics & print() Imtehan',
      english: 'Quiz 1: Python Basics & print() Test',
      urdu: 'پہلا کوئز: بنیادی پائتھن اور پرنٹ'
    },
    questions: [
      {
        id: 'q1-1',
        question: {
          roman_urdu: 'Python mein console ya screen par text dikhane ke liye kon sa function use hota hai?',
          english: 'Which function is used to output text to the console in Python?',
          urdu: 'پائتھن میں اسکرین پر کچھ دکھانے کے لیے کون سا فنکشن استعمال ہوتا ہے؟'
        },
        options: [
          { roman_urdu: 'echo("Hello")', english: 'echo("Hello")', urdu: 'echo("Hello")' },
          { roman_urdu: 'print("Hello")', english: 'print("Hello")', urdu: 'print("Hello")' },
          { roman_urdu: 'Console.WriteLine("Hello")', english: 'Console.WriteLine("Hello")', urdu: 'Console.WriteLine("Hello")' },
          { roman_urdu: 'display("Hello")', english: 'display("Hello")', urdu: 'display("Hello")' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'Python mein `print(...)` function screen par output lane ke liye banaya gaya hai.',
          english: '`print(...)` is Python\'s built-in standard function for console output.',
          urdu: 'پائتھن میں پرنٹ فنکشن استعمال ہوتا ہے۔'
        }
      },
      {
        id: 'q1-2',
        question: {
          roman_urdu: 'Python mein comment likhne ke liye line ke shuru mein kya lagate hain?',
          english: 'What symbol denotes a single-line comment in Python?',
          urdu: 'پائتھن میں کمنٹ کے لیے کون سی علامت لگتی ہے؟'
        },
        options: [
          { roman_urdu: '// Ye comment hai', english: '// This is a comment', urdu: '// کمنٹ' },
          { roman_urdu: '/* Ye comment hai */', english: '/* This is a comment */', urdu: '/* کمنٹ */' },
          { roman_urdu: '# Ye comment hai', english: '# This is a comment', urdu: '# کمنٹ' },
          { roman_urdu: '-- Ye comment hai', english: '-- This is a comment', urdu: '-- کمنٹ' }
        ],
        correctAnswerIndex: 2,
        explanation: {
          roman_urdu: 'Python mein hash symbol `#` se single-line comment likha jata hai.',
          english: 'In Python, the hash `#` symbol starts a comment that the interpreter ignores.',
          urdu: 'ہیش (#) کی علامت کمنٹ کے لیے استعمال ہوتی ہے۔'
        }
      },
      {
        id: 'q1-3',
        question: {
          roman_urdu: 'Agar hum `print(5 + 3 * 2)` chalayein to kya jawab aayega?',
          english: 'What is the output of `print(5 + 3 * 2)`?',
          urdu: 'کوڈ print(5 + 3 * 2) کا کیا نتیجہ ہوگا؟'
        },
        codeSnippet: 'print(5 + 3 * 2)',
        options: [
          { roman_urdu: '16', english: '16', urdu: '16' },
          { roman_urdu: '11', english: '11', urdu: '11' },
          { roman_urdu: '10', english: '10', urdu: '10' },
          { roman_urdu: 'Error aayega', english: 'Syntax Error', urdu: 'غلطی آئے گی' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'PEMDAS/BODMAS rule ke mutabiq pehle multiplication hoti hai: 3 * 2 = 6, phir 5 + 6 = 11.',
          english: 'Multiplication takes precedence over addition: `3 * 2 = 6`, then `5 + 6 = 11`.',
          urdu: 'ریاضی کے اصول کے مطابق پہلے ضرب ہوگی پھر جمع، یعنی 11۔'
        }
      },
      {
        id: 'q1-4',
        question: {
          roman_urdu: 'In mein se kon sa statement Syntax Error dega?',
          english: 'Which of the following causes a SyntaxError?',
          urdu: 'ان میں سے کس لائن پر غلطی (Error) آئے گی؟'
        },
        options: [
          { roman_urdu: 'print("Ali")', english: 'print("Ali")', urdu: 'print("Ali")' },
          { roman_urdu: 'print(\'Ali\')', english: 'print(\'Ali\')', urdu: 'print(\'Ali\')' },
          { roman_urdu: 'print(Ali)', english: 'print(Ali)', urdu: 'print(Ali)' },
          { roman_urdu: 'print(123)', english: 'print(123)', urdu: 'print(123)' }
        ],
        correctAnswerIndex: 2,
        explanation: {
          roman_urdu: '`print(Ali)` mein quotes nahi hain, isliye Python samjhega ke Ali koi variable hai jo define nahi hua (NameError).',
          english: 'Without quotes, Python interprets `Ali` as an undefined variable name, throwing NameError.',
          urdu: 'کوٹس کے بغیر ٹیکسٹ لکھنے پر ایرر آتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-2',
    lessonId: 'lesson-2-variables-types',
    passingScore: 3,
    xpReward: 30,
    title: {
      roman_urdu: 'Quiz 2: Variables & Data Types',
      english: 'Quiz 2: Variables & Data Types',
      urdu: 'دوسرا کوئز: متغیرات اور اقسام'
    },
    questions: [
      {
        id: 'q2-1',
        question: {
          roman_urdu: 'Agar `x = "50"` aur `y = "50"` hon, to `print(x + y)` ka jawab kya hoga?',
          english: 'If `x = "50"` and `y = "50"`, what is `print(x + y)`?',
          urdu: 'اگر x = "50" اور y = "50" ہوں تو x + y کیا ہوگا؟'
        },
        codeSnippet: `x = "50"\ny = "50"\nprint(x + y)`,
        options: [
          { roman_urdu: '100', english: '100', urdu: '100' },
          { roman_urdu: '"5050"', english: '"5050"', urdu: '"5050"' },
          { roman_urdu: 'Error aayega', english: 'TypeError', urdu: 'غلطی آئے گی' },
          { roman_urdu: 'None', english: 'None', urdu: 'None' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'Kyunke quotes lagi hain, dono strings hain. Do strings ko jodne (concatenate) se "5050" ban jata hai!',
          english: 'Both values are strings inside quotes. The `+` operator concatenates them into `"5050"`.',
          urdu: 'کوٹس کی وجہ سے دونوں ٹیکسٹ ہیں اس لیے جڑ کر 5050 بنیں گے۔'
        }
      },
      {
        id: 'q2-2',
        question: {
          roman_urdu: 'In mein se kon sa variable ka naam GHALAT hai?',
          english: 'Which of the following is an INVALID variable name?',
          urdu: 'ان میں سے کون سا ویری ایبل کا نام غلط ہے؟'
        },
        options: [
          { roman_urdu: 'mera_score', english: 'mera_score', urdu: 'mera_score' },
          { roman_urdu: 'score_1', english: 'score_1', urdu: 'score_1' },
          { roman_urdu: '1_score', english: '1_score', urdu: '1_score' },
          { roman_urdu: '_score', english: '_score', urdu: '_score' }
        ],
        correctAnswerIndex: 2,
        explanation: {
          roman_urdu: 'Python mein variable ka naam kisi number (0-9) se shuru nahi ho sakta.',
          english: 'Variable names cannot start with a digit in Python.',
          urdu: 'ویری ایبل کا نام کبھی عدد سے شروع نہیں ہو سکتا۔'
        }
      },
      {
        id: 'q2-3',
        question: {
          roman_urdu: 'Number `3.14159` ki data type kya hai?',
          english: 'What is the data type of `3.14159` in Python?',
          urdu: 'عدد 3.14159 کی ڈیٹا ٹائپ کیا ہے؟'
        },
        options: [
          { roman_urdu: 'int', english: 'int', urdu: 'int' },
          { roman_urdu: 'float', english: 'float', urdu: 'float' },
          { roman_urdu: 'str', english: 'str', urdu: 'str' },
          { roman_urdu: 'bool', english: 'bool', urdu: 'bool' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'Ashariya (decimal point) wale tamaam numbers float kehlate hain.',
          english: 'Numbers containing a decimal point are classified as `float`.',
          urdu: 'اعشاریہ والے تمام اعداد فلوٹ (float) کہلاتے ہیں۔'
        }
      }
    ]
  },
  {
    id: 'quiz-3',
    lessonId: 'lesson-3-operators-math',
    passingScore: 3,
    xpReward: 30,
    title: {
      roman_urdu: 'Quiz 3: Operators & Math',
      english: 'Quiz 3: Operators & Math',
      urdu: 'تیسرا کوئز: آپریٹرز اور حسابی عمل'
    },
    questions: [
      {
        id: 'q3-1',
        question: {
          roman_urdu: 'Floor division (point ke baghair divide) ke liye kon sa operator hai?',
          english: 'Which operator performs floor division in Python?',
          urdu: 'بغیر اعشاریہ تقسیم کے لیے کون سا نشان ہے؟'
        },
        options: [
          { roman_urdu: '/', english: '/', urdu: '/' },
          { roman_urdu: '//', english: '//', urdu: '//' },
          { roman_urdu: '%', english: '%', urdu: '%' },
          { roman_urdu: '**', english: '**', urdu: '**' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: '`//` floor division karta hai jo sirf poora hissa (quotient) deta hai.',
          english: '`//` performs integer floor division, discarding fractional parts.',
          urdu: '// کا نشان اعشاریہ کو ختم کر دیتا ہے۔'
        }
      },
      {
        id: 'q3-2',
        question: {
          roman_urdu: 'Expression `17 % 5` ka kya nateeja aayega?',
          english: 'What is the value of `17 % 5`?',
          urdu: '17 % 5 کا کیا نتیجہ آئے گا؟'
        },
        options: [
          { roman_urdu: '3.4', english: '3.4', urdu: '3.4' },
          { roman_urdu: '3', english: '3', urdu: '3' },
          { roman_urdu: '2', english: '2', urdu: '2' },
          { roman_urdu: '0', english: '0', urdu: '0' }
        ],
        correctAnswerIndex: 2,
        explanation: {
          roman_urdu: '5 x 3 = 15. 17 mein se 15 gaye to baaqi 2 bachta hai (Remainder = 2).',
          english: '`17 = 5 * 3 + 2`. The modulus operator `%` returns the remainder `2`.',
          urdu: '17 کو 5 سے تقسیم کرنے پر 2 باقی بچتا ہے۔'
        }
      },
      {
        id: 'q3-3',
        question: {
          roman_urdu: 'Python mein power ya exponent (maslan 2 ki power 3) ke liye kya likhte hain?',
          english: 'Which operator is used for exponentiation (e.g. 2 to the power 3)?',
          urdu: 'پائتھن میں طاقت (پاور) کے لیے کیا لکھتے ہیں؟'
        },
        options: [
          { roman_urdu: '2 ^ 3', english: '2 ^ 3', urdu: '2 ^ 3' },
          { roman_urdu: '2 ** 3', english: '2 ** 3', urdu: '2 ** 3' },
          { roman_urdu: 'power(2, 3)', english: 'power(2, 3)', urdu: 'power(2, 3)' },
          { roman_urdu: '2 * 3', english: '2 * 3', urdu: '2 * 3' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'Python mein `**` power ke liye hota hai: `2 ** 3 = 8`.',
          english: '`**` is the power operator: `2 ** 3` computes `8`.',
          urdu: 'پائتھن میں ڈبل سٹار ** پاور کے لیے استعمال ہوتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-4',
    lessonId: 'lesson-4-conditionals-if-else',
    passingScore: 3,
    xpReward: 30,
    title: {
      roman_urdu: 'Quiz 4: Conditionals (if, elif, else)',
      english: 'Quiz 4: Conditionals (if, elif, else)',
      urdu: 'چوتھا کوئز: شرائط اور فیصلے'
    },
    questions: [
      {
        id: 'q4-1',
        question: {
          roman_urdu: 'Agar `x = 10` ho, to is code ka output kya hoga?',
          english: 'If `x = 10`, what will this snippet print?',
          urdu: 'اگر x = 10 ہو تو اس کوڈ کا کیا نتیجہ ہوگا؟'
        },
        codeSnippet: `x = 10\nif x > 15:\n    print("Bada")\nelif x == 10:\n    print("Barabar")\nelse:\n    print("Chota")`,
        options: [
          { roman_urdu: 'Bada', english: 'Bada', urdu: 'Bada' },
          { roman_urdu: 'Barabar', english: 'Barabar', urdu: 'Barabar' },
          { roman_urdu: 'Chota', english: 'Chota', urdu: 'Chota' },
          { roman_urdu: 'Kuch bhi nahi', english: 'Nothing', urdu: 'کچھ بھی نہیں' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'Pehli condition false hai (10 > 15 false). Doosri elif condition sach hai (10 == 10 true), isliye "Barabar" print hoga.',
          english: 'The `elif x == 10` evaluates to True, executing its block.',
          urdu: 'دوسری شرط درست ہونے کی وجہ سے "Barabar" پرنٹ ہوگا۔'
        }
      },
      {
        id: 'q4-2',
        question: {
          roman_urdu: 'Python mein code block (body) ko pehchanne ke liye kya istemal hota hai?',
          english: 'What does Python use to define code blocks inside conditionals?',
          urdu: 'پائتھن میں کوڈ بلاک کے لیے کیا استعمال ہوتا ہے؟'
        },
        options: [
          { roman_urdu: 'Curly braces { }', english: 'Curly braces { }', urdu: 'Curly braces { }' },
          { roman_urdu: 'Indentation (spaces/tabs)', english: 'Indentation (spaces/tabs)', urdu: 'Indentation (spaces/tabs)' },
          { roman_urdu: 'Parentheses ( )', english: 'Parentheses ( )', urdu: 'Parentheses ( )' },
          { roman_urdu: 'begin ... end', english: 'begin ... end', urdu: 'begin ... end' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'Python baqi languages ke bar-aks braces {} ke bajaye indentation (spaces) se code blocks banata hai.',
          english: 'Python uniquely uses 4-space whitespace indentation instead of braces to delineate blocks.',
          urdu: 'پائتھن بریکٹس کی بجائے انڈینٹیشن (اسپیسز) پر انحصار کرتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-5',
    lessonId: 'lesson-5-loops',
    passingScore: 3,
    xpReward: 30,
    title: {
      roman_urdu: 'Quiz 5: Loops (for aur while)',
      english: 'Quiz 5: Loops (for and while)',
      urdu: 'پانچواں کوئز: لوپس'
    },
    questions: [
      {
        id: 'q5-1',
        question: {
          roman_urdu: '`range(1, 5)` total kitni dafa loop chalayega?',
          english: 'How many iterations does `range(1, 5)` run?',
          urdu: 'range(1, 5) کتنی بار چلے گا؟'
        },
        options: [
          { roman_urdu: '5 dafa (1, 2, 3, 4, 5)', english: '5 times (1, 2, 3, 4, 5)', urdu: '5 بار' },
          { roman_urdu: '4 dafa (1, 2, 3, 4)', english: '4 times (1, 2, 3, 4)', urdu: '4 بار' },
          { roman_urdu: '6 dafa (0 to 5)', english: '6 times (0 to 5)', urdu: '6 بار' },
          { roman_urdu: '1 dafa', english: '1 time', urdu: '1 بار' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'Stop value shamil nahi hoti: 1, 2, 3, 4 (kul 4 dafa).',
          english: 'The stop parameter is exclusive: numbers are 1, 2, 3, 4 (4 iterations).',
          urdu: 'آخری نمبر شامل نہیں ہوتا، لہذا 4 بار چلے گا۔'
        }
      },
      {
        id: 'q5-2',
        question: {
          roman_urdu: 'Loop ko darmiyan mein foran rokne ke liye kon sa keyword use hota hai?',
          english: 'Which keyword immediately terminates a loop in Python?',
          urdu: 'لوپ کو درمیان میں روکنے کے لیے کون سا لفظ ہے؟'
        },
        options: [
          { roman_urdu: 'stop', english: 'stop', urdu: 'stop' },
          { roman_urdu: 'exit', english: 'exit', urdu: 'exit' },
          { roman_urdu: 'break', english: 'break', urdu: 'break' },
          { roman_urdu: 'continue', english: 'continue', urdu: 'continue' }
        ],
        correctAnswerIndex: 2,
        explanation: {
          roman_urdu: '`break` statement foran loop se bahar nikal deta hai.',
          english: 'The `break` keyword immediately halts the loop and jumps to the code following it.',
          urdu: 'بریک (break) لوپ کو فوراً بند کر دیتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-6',
    lessonId: 'lesson-6-lists-tuples',
    passingScore: 3,
    xpReward: 30,
    title: {
      roman_urdu: 'Quiz 6: Lists & Tuples',
      english: 'Quiz 6: Lists & Tuples',
      urdu: 'چھٹا کوئز: لسٹ اور ٹوپلز'
    },
    questions: [
      {
        id: 'q6-1',
        question: {
          roman_urdu: 'Agar `a = [10, 20, 30]`, to `a[1]` kya dega?',
          english: 'Given `a = [10, 20, 30]`, what is the value of `a[1]`?',
          urdu: 'اگر a = [10, 20, 30] ہو تو a[1] کی کیا قیمت ہوگی؟'
        },
        options: [
          { roman_urdu: '10', english: '10', urdu: '10' },
          { roman_urdu: '20', english: '20', urdu: '20' },
          { roman_urdu: '30', english: '30', urdu: '30' },
          { roman_urdu: 'Error', english: 'Error', urdu: 'Error' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'Index 0 par 10 hai, index 1 par 20 hai!',
          english: 'Because Python indices start at 0, index 1 refers to the second item: 20.',
          urdu: 'انڈیکس صفر پر 10 ہے اور انڈیکس 1 پر 20 ہے۔'
        }
      },
      {
        id: 'q6-2',
        question: {
          roman_urdu: 'List ke aakhir mein naya item jodne ke liye kon sa method use hota hai?',
          english: 'Which method appends an item to the end of a list?',
          urdu: 'لسٹ کے آخر میں نیا آئٹم شامل کرنے کے لیے کیا طریقہ ہے؟'
        },
        options: [
          { roman_urdu: 'list.add(item)', english: 'list.add(item)', urdu: 'list.add(item)' },
          { roman_urdu: 'list.push(item)', english: 'list.push(item)', urdu: 'list.push(item)' },
          { roman_urdu: 'list.append(item)', english: 'list.append(item)', urdu: 'list.append(item)' },
          { roman_urdu: 'list.insert(item)', english: 'list.insert(item)', urdu: 'list.insert(item)' }
        ],
        correctAnswerIndex: 2,
        explanation: {
          roman_urdu: 'Python list mein item add karne ke liye `.append(...)` method hota hai.',
          english: 'In Python, `append()` adds an element to the end of the list.',
          urdu: 'اپینڈ (.append) لسٹ کے آخر میں اضافہ کرتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-7',
    lessonId: 'lesson-7-dictionaries',
    passingScore: 3,
    xpReward: 30,
    title: {
      roman_urdu: 'Quiz 7: Dictionaries',
      english: 'Quiz 7: Dictionaries',
      urdu: 'ساتواں کوئز: ڈکشنری'
    },
    questions: [
      {
        id: 'q7-1',
        question: {
          roman_urdu: 'Dictionary mein data kis form mein store hota hai?',
          english: 'How is data stored inside a Python dictionary?',
          urdu: 'ڈکشنری میں ڈیٹا کس انداز میں رکھا جاتا ہے؟'
        },
        options: [
          { roman_urdu: 'Sirf numbers ki form mein', english: 'Numbers only', urdu: 'صرف نمبرز' },
          { roman_urdu: 'Key - Value pairs ki form mein', english: 'Key - Value pairs', urdu: 'کی اور ویلیو کی شکل میں' },
          { roman_urdu: 'Array indices ke zariye', english: 'Sequential array indices', urdu: 'ترتیبی نمبرز' },
          { roman_urdu: 'Rows aur Columns', english: 'Rows and Columns', urdu: 'قطاریں اور کالم' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'Dictionary hamesha `key: value` pairs banati hai, maslan `"naam": "Ali"`.',
          english: 'Dictionaries map unique keys to corresponding values.',
          urdu: 'ڈکشنری کی اور ویلیو جوڑوں پر مشتمل ہوتی ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-8',
    lessonId: 'lesson-8-functions',
    passingScore: 3,
    xpReward: 30,
    title: {
      roman_urdu: 'Quiz 8: Functions (def)',
      english: 'Quiz 8: Functions (def)',
      urdu: 'آٹھواں کوئز: فنکشنز'
    },
    questions: [
      {
        id: 'q8-1',
        question: {
          roman_urdu: 'Python mein function shuru karne ke liye kon sa keyword lagta hai?',
          english: 'Which keyword starts a function definition in Python?',
          urdu: 'فنکشن شروع کرنے کے لیے کون سا لفظ لکھا جاتا ہے؟'
        },
        options: [
          { roman_urdu: 'function', english: 'function', urdu: 'function' },
          { roman_urdu: 'func', english: 'func', urdu: 'func' },
          { roman_urdu: 'def', english: 'def', urdu: 'def' },
          { roman_urdu: 'define', english: 'define', urdu: 'define' }
        ],
        correctAnswerIndex: 2,
        explanation: {
          roman_urdu: 'Python mein `def` se function banaya jata hai: `def my_func():`.',
          english: '`def` (short for define) introduces a function definition in Python.',
          urdu: 'ڈیف (def) سے فنکشن بنتا ہے۔'
        }
      },
      {
        id: 'q8-2',
        question: {
          roman_urdu: 'Function se kisi calculation ka nateeja bahar bhejne ke liye kya use hota hai?',
          english: 'Which statement sends back the result of a function to the caller?',
          urdu: 'فنکشن کا نتیجہ باہر بھیجنے کے لیے کیا استعمال ہوتا ہے؟'
        },
        options: [
          { roman_urdu: 'send', english: 'send', urdu: 'send' },
          { roman_urdu: 'give', english: 'give', urdu: 'give' },
          { roman_urdu: 'return', english: 'return', urdu: 'return' },
          { roman_urdu: 'output', english: 'output', urdu: 'output' }
        ],
        correctAnswerIndex: 2,
        explanation: {
          roman_urdu: '`return` statement value wapas bhejti hai.',
          english: 'The `return` statement exits the function and yields the computed value.',
          urdu: 'ریٹرن (return) ویلیو واپس لوٹاتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-9',
    lessonId: 'lesson-9-strings-formatting',
    passingScore: 3,
    xpReward: 30,
    title: {
      roman_urdu: 'Quiz 9: Strings & F-Strings',
      english: 'Quiz 9: Strings & F-Strings',
      urdu: 'نواں کوئز: اسٹرنگز'
    },
    questions: [
      {
        id: 'q9-1',
        question: {
          roman_urdu: 'F-string likhne ka sahi tareeqa kon sa hai?',
          english: 'Which is the correct syntax for a formatted f-string?',
          urdu: 'ایف اسٹرنگ لکھنے کا درست طریقہ کیا ہے؟'
        },
        options: [
          { roman_urdu: 'f"Mera naam {name} hai"', english: 'f"My name is {name}"', urdu: 'f"میرا نام {name} ہے"' },
          { roman_urdu: '"Mera naam {name} hai"f', english: '"My name is {name}"f', urdu: '"میرا نام {name} ہے"f' },
          { roman_urdu: 'format("Mera naam {name}")', english: 'format("My name {name}")', urdu: 'format("نام")' },
          { roman_urdu: 'str(f"{name}")', english: 'str(f"{name}")', urdu: 'str(f"{name}")' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: 'Quotation mark se pehle `f` aur andar curly braces `{variable}` aati hain.',
          english: 'Prefix string with `f` and interpolate variables within `{curly_braces}`.',
          urdu: 'کوٹس سے پہلے چھوٹا f اور ویری ایبل کے گرد کرلی بریکٹ لگاتے ہیں۔'
        }
      }
    ]
  },
  {
    id: 'quiz-10',
    lessonId: 'lesson-10-mini-projects',
    passingScore: 3,
    xpReward: 30,
    title: {
      roman_urdu: 'Quiz 10: Mastery & Problem Solving',
      english: 'Quiz 10: Mastery & Problem Solving',
      urdu: 'دسواں کوئز: مکمل پائتھن ٹیسٹ'
    },
    questions: [
      {
        id: 'q10-1',
        question: {
          roman_urdu: 'String "radar" ko reverse karne ka sabse tezi tareeqa Python mein kya hai?',
          english: 'What is the fastest way to reverse string `s` in Python?',
          urdu: 'کسی لفظ کو الٹا کرنے کا تیز ترین طریقہ کیا ہے؟'
        },
        options: [
          { roman_urdu: 's.reverse()', english: 's.reverse()', urdu: 's.reverse()' },
          { roman_urdu: 's[::-1]', english: 's[::-1]', urdu: 's[::-1]' },
          { roman_urdu: 'reverse(s)', english: 'reverse(s)', urdu: 'reverse(s)' },
          { roman_urdu: 's[-1:0]', english: 's[-1:0]', urdu: 's[-1:0]' }
        ],
        correctAnswerIndex: 1,
        explanation: {
          roman_urdu: 'Python slicing `s[::-1]` step -1 ke sath poori string ko reverse kar deta hai.',
          english: 'Slice notation `[::-1]` with step `-1` reverses any sequence efficiently.',
          urdu: '[::-1] سلائسنگ کے ذریعے اسٹرنگ الٹ جاتی ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-11',
    lessonId: 'lesson-11-file-handling',
    passingScore: 2,
    xpReward: 35,
    title: {
      roman_urdu: 'Quiz 11: File Handling & JSON',
      english: 'Quiz 11: File Handling & JSON',
      urdu: 'گیارہواں کوئز: فائل ہینڈلنگ اور جیسن'
    },
    questions: [
      {
        id: 'q11-1',
        question: {
          roman_urdu: 'Python mein file ko automatically close karne ke liye kon sa keyword use hota hai?',
          english: 'Which statement ensures files close automatically in Python?',
          urdu: 'فائل کو خودکار بند کرنے کے لیے کون سا لفظ ہے؟'
        },
        options: [
          { roman_urdu: 'with open(...) as f:', english: 'with open(...) as f:', urdu: 'with open(...) as f:' },
          { roman_urdu: 'auto close file', english: 'auto close file', urdu: 'auto close file' },
          { roman_urdu: 'safe_open()', english: 'safe_open()', urdu: 'safe_open()' },
          { roman_urdu: 'try_file()', english: 'try_file()', urdu: 'try_file()' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`with` context manager block khatam hote hi file ko khud-ba-khud close kar deta hai.',
          english: '`with open(...)` is a context manager ensuring resource release upon block exit.',
          urdu: 'with کی مدد سے فائل محفوظ طریقے سے خودکار بند ہو جاتی ہے۔'
        }
      },
      {
        id: 'q11-2',
        question: {
          roman_urdu: 'Python dictionary ko JSON text string mein convert karne ke liye kon sa method hai?',
          english: 'Which method serializes a Python object into a JSON string?',
          urdu: 'پائتھن ڈکشنری کو جیسن اسٹرنگ میں بدلنے کا طریقہ کیا ہے؟'
        },
        options: [
          { roman_urdu: 'json.dumps(obj)', english: 'json.dumps(obj)', urdu: 'json.dumps(obj)' },
          { roman_urdu: 'json.loads(obj)', english: 'json.loads(obj)', urdu: 'json.loads(obj)' },
          { roman_urdu: 'json.parse(obj)', english: 'json.parse(obj)', urdu: 'json.parse(obj)' },
          { roman_urdu: 'json.stringify(obj)', english: 'json.stringify(obj)', urdu: 'json.stringify(obj)' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`json.dumps()` (dump string) dictionary ko JSON string banata hai. `json.loads()` string ko wapas dict banata hai.',
          english: '`json.dumps()` converts Python objects to JSON text; `loads` converts text back to objects.',
          urdu: 'json.dumps ڈکشنری کو جیسن اسٹرنگ بناتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-12',
    lessonId: 'lesson-12-error-handling',
    passingScore: 2,
    xpReward: 35,
    title: {
      roman_urdu: 'Quiz 12: Error Handling (try/except)',
      english: 'Quiz 12: Error Handling (try/except)',
      urdu: 'بارہواں کوئز: ایرر ہینڈلنگ'
    },
    questions: [
      {
        id: 'q12-1',
        question: {
          roman_urdu: 'Kon sa block error aane ya na aane dono suraton mein hamesha chalta hai?',
          english: 'Which block executes unconditionally whether an exception occurred or not?',
          urdu: 'کون سا بلاک ہر حال میں چلتا ہے؟'
        },
        options: [
          { roman_urdu: 'finally', english: 'finally', urdu: 'finally' },
          { roman_urdu: 'except', english: 'except', urdu: 'except' },
          { roman_urdu: 'else', english: 'else', urdu: 'else' },
          { roman_urdu: 'catch', english: 'catch', urdu: 'catch' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`finally` block hamesha chalta hai, clean-up operations ke liye.',
          english: 'The `finally` clause always executes before leaving the try statement.',
          urdu: 'فائنلی (finally) بلاک ہمیشہ چلتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-13',
    lessonId: 'lesson-13-oop-basics',
    passingScore: 2,
    xpReward: 40,
    title: {
      roman_urdu: 'Quiz 13: OOP Classes & Objects',
      english: 'Quiz 13: OOP Classes & Objects',
      urdu: 'تیرہواں کوئز: کلاسز اور آبجیکٹس'
    },
    questions: [
      {
        id: 'q13-1',
        question: {
          roman_urdu: 'Class ke andar instance constructor method ka sahi naam kya hai?',
          english: 'What is the correct constructor method name in Python classes?',
          urdu: 'پائتھن میں کنسٹرکٹر میتھڈ کا نام کیا ہے؟'
        },
        options: [
          { roman_urdu: '__init__', english: '__init__', urdu: '__init__' },
          { roman_urdu: 'constructor()', english: 'constructor()', urdu: 'constructor()' },
          { roman_urdu: '__new__', english: '__new__', urdu: '__new__' },
          { roman_urdu: 'create()', english: 'create()', urdu: 'create()' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: 'Python mein `__init__(self, ...)` constructor method hota hai jo naya object banne par chalta hai.',
          english: '`__init__` is Python\'s standard initializer constructor.',
          urdu: '__init__ پائتھن کا بنیادی کنسٹرکٹر ہے۔'
        }
      },
      {
        id: 'q13-2',
        question: {
          roman_urdu: 'Method ke andar `self` ka kya maqsad hota hai?',
          english: 'What does `self` represent inside class methods?',
          urdu: 'میتھڈز کے اندر self کا کیا مقصد ہے؟'
        },
        options: [
          { roman_urdu: 'Us specific object (instance) ka reference', english: 'A reference to the current instance', urdu: 'موجودہ آبجیکٹ کا حوالہ' },
          { roman_urdu: 'Poori Python language ka reference', english: 'A reference to the language module', urdu: 'زبان کا ریفرنس' },
          { roman_urdu: 'Global variables ka dabba', english: 'Global namespace container', urdu: 'گلوبل ڈبہ' },
          { roman_urdu: 'Sirf aik aam string', english: 'Just a plain string', urdu: 'ایک اسٹرنگ' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`self` us instance ko point karta hai jiske zariye method ko call kiya gaya hai.',
          english: '`self` represents the specific object instance being operated on.',
          urdu: 'self موجودہ آبجیکٹ کو ظاہر کرتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-14',
    lessonId: 'lesson-14-oop-advanced',
    passingScore: 2,
    xpReward: 40,
    title: {
      roman_urdu: 'Quiz 14: Inheritance & super()',
      english: 'Quiz 14: Inheritance & super()',
      urdu: 'چودہواں کوئز: وراثت اور پولیمورفزم'
    },
    questions: [
      {
        id: 'q14-1',
        question: {
          roman_urdu: 'Child class mein parent class ke constructor ko call karne ke liye kya likhte hain?',
          english: 'How do you invoke a parent class method in a subclass?',
          urdu: 'چائلڈ کلاس میں پیرنٹ کلاس کے میتھڈ کو کال کرنے کا طریقہ کیا ہے؟'
        },
        options: [
          { roman_urdu: 'super().__init__()', english: 'super().__init__()', urdu: 'super().__init__()' },
          { roman_urdu: 'parent.init()', english: 'parent.init()', urdu: 'parent.init()' },
          { roman_urdu: 'base.__init__()', english: 'base.__init__()', urdu: 'base.__init__()' },
          { roman_urdu: 'inherit()', english: 'inherit()', urdu: 'inherit()' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`super()` parent class ke methods ko safai se access karne ke liye built-in function hai.',
          english: '`super()` delegates method calls to the parent or sibling class.',
          urdu: 'super() کے ذریعے پیرنٹ کلاس کو کال کیا جاتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-15',
    lessonId: 'lesson-15-decorators',
    passingScore: 2,
    xpReward: 40,
    title: {
      roman_urdu: 'Quiz 15: Decorators (@)',
      english: 'Quiz 15: Decorators (@)',
      urdu: 'پندرہواں کوئز: ڈیکوریٹرز'
    },
    questions: [
      {
        id: 'q15-1',
        question: {
          roman_urdu: 'Decorator apply karne ke liye function se pehle kon sa symbol lagta hai?',
          english: 'Which symbol precedes a decorator in Python?',
          urdu: 'ڈیکوریٹر کے لیے فنکشن سے پہلے کون سا نشان لگتا ہے؟'
        },
        options: [
          { roman_urdu: '@decorator_name', english: '@decorator_name', urdu: '@decorator_name' },
          { roman_urdu: '#decorator_name', english: '#decorator_name', urdu: '#decorator_name' },
          { roman_urdu: '$decorator_name', english: '$decorator_name', urdu: '$decorator_name' },
          { roman_urdu: '&decorator_name', english: '&decorator_name', urdu: '&decorator_name' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: 'Python mein `@` symbol decorators ke liye syntax sugar hai.',
          english: 'The `@` symbol is Python\'s decorator syntax.',
          urdu: '@ کا نشان ڈیکوریٹر کے لیے استعمال ہوتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-16',
    lessonId: 'lesson-16-generators',
    passingScore: 2,
    xpReward: 40,
    title: {
      roman_urdu: 'Quiz 16: Generators & yield',
      english: 'Quiz 16: Generators & yield',
      urdu: 'سولہواں کوئز: جنریٹرز اور ییلڈ'
    },
    questions: [
      {
        id: 'q16-1',
        question: {
          roman_urdu: 'Generator function value dene ke baad rukne (pause) ke liye kon sa keyword use karta hai?',
          english: 'Which keyword turns a regular function into a lazy generator in Python?',
          urdu: 'جنریٹر فنکشن کے لیے کون سا لفظ استعمال ہوتا ہے؟'
        },
        options: [
          { roman_urdu: 'yield', english: 'yield', urdu: 'yield' },
          { roman_urdu: 'return', english: 'return', urdu: 'return' },
          { roman_urdu: 'pause', english: 'pause', urdu: 'pause' },
          { roman_urdu: 'generate', english: 'generate', urdu: 'generate' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`yield` function ko pause kar ke value deta hai aur agli dafa wahi se resume karta hai.',
          english: '`yield` produces a value and suspends function execution state.',
          urdu: 'ییلڈ (yield) کی مدد سے جنریٹر ویلیو دے کر اگلی بار کے لیے رکتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-17',
    lessonId: 'lesson-17-functional-builtins',
    passingScore: 2,
    xpReward: 40,
    title: {
      roman_urdu: 'Quiz 17: Lambda, map & filter',
      english: 'Quiz 17: Lambda, map & filter',
      urdu: 'سترہواں کوئز: لیمبڈا اور فنکشنل پائتھن'
    },
    questions: [
      {
        id: 'q17-1',
        question: {
          roman_urdu: 'Python mein anonymous (baghair naam ke) aik line ke function ko kya kehte hain?',
          english: 'What keyword defines an anonymous one-line function in Python?',
          urdu: 'بغیر نام والے ایک لائن کے فنکشن کو کیا کہتے ہیں؟'
        },
        options: [
          { roman_urdu: 'lambda', english: 'lambda', urdu: 'lambda' },
          { roman_urdu: 'arrow', english: 'arrow', urdu: 'arrow' },
          { roman_urdu: 'inline', english: 'inline', urdu: 'inline' },
          { roman_urdu: 'quick', english: 'quick', urdu: 'quick' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`lambda x: x * 2` aik anonymous function banata hai.',
          english: '`lambda` creates small anonymous inline functions.',
          urdu: 'لیمبڈا ایک لائن کا بے نام فنکشن بناتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-18',
    lessonId: 'lesson-18-production-architecture',
    passingScore: 2,
    xpReward: 50,
    title: {
      roman_urdu: 'Quiz 18: Grand Final & Enterprise Architecture',
      english: 'Quiz 18: Grand Final & Enterprise Architecture',
      urdu: 'اٹھارہواں کوئز: مکمل کورس کا حتمی امتحان'
    },
    questions: [
      {
        id: 'q18-1',
        question: {
          roman_urdu: 'Bade professional software mein clean architecture ka sabse bada faida kya hai?',
          english: 'What is the primary benefit of modular OOP architecture in enterprise systems?',
          urdu: 'بڑے سافٹ ویئر میں آبجیکٹ اورینٹڈ اصولوں کا سب سے بڑا فائدہ کیا ہے؟'
        },
        options: [
          { roman_urdu: 'Code ko samajhna, test karna aur scale karna asaan hota hai', english: 'Code is maintainable, testable, and scalable', urdu: 'کوڈ کو سمجھنا اور وسعت دینا آسان ہوتا ہے' },
          { roman_urdu: 'Code ki file size zero ho jati hai', english: 'File size becomes zero', urdu: 'فائل ختم ہو جاتی ہے' },
          { roman_urdu: 'Computer ki bijli kam lagti hai', english: 'Saves electricity', urdu: 'بجلی کم خرچ ہوتی ہے' },
          { roman_urdu: 'Python ko install nahi karna parta', english: 'No installation required', urdu: 'انسٹال نہیں کرنا پڑتا' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: 'Modular OOP design se team work, testing aur naye features add karna asaan ho jata hai.',
          english: 'Decoupled, modular code enables maintainability and long-term scaling.',
          urdu: 'بہترین ڈھانچے سے کوڈ کو سنبھالنا آسان ہوتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-19',
    lessonId: 'lesson-19-os-glob-automation',
    passingScore: 2,
    xpReward: 40,
    title: {
      roman_urdu: 'Quiz 19: os & glob File System Imtehan',
      english: 'Quiz 19: os & glob Automation Test',
      urdu: 'انیسواں کوئز: او ایس اور گلوب فائل سسٹم'
    },
    questions: [
      {
        id: 'q19-1',
        question: {
          roman_urdu: 'Folder mein mojood tamam XML files ko aik sath dhoondne ke liye kon sa function behtareen hai?',
          english: 'Which function is ideal to find all files ending with .xml in a directory?',
          urdu: 'تمام ایکس ایم ایل فائلیں تلاش کرنے کے لیے کون سا فنکشن استعمال ہوتا ہے؟'
        },
        options: [
          { roman_urdu: 'glob.glob(os.path.join(folder, "*.xml"))', english: 'glob.glob(os.path.join(folder, "*.xml"))', urdu: 'glob.glob(os.path.join(folder, "*.xml"))' },
          { roman_urdu: 'os.read_all("*.xml")', english: 'os.read_all("*.xml")', urdu: 'os.read_all("*.xml")' },
          { roman_urdu: 'open("*.xml")', english: 'open("*.xml")', urdu: 'open("*.xml")' },
          { roman_urdu: 'sys.search(".xml")', english: 'sys.search(".xml")', urdu: 'sys.search(".xml")' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`glob.glob("*.xml")` wildcard pattern matching ke liye Python ka standard aur fast tareeqa hai.',
          english: '`glob.glob` scans directories matching wildcard expressions like `*.xml`.',
          urdu: 'گلوب کے ذریعے مخصوص فارمیٹ کی فائلیں تلاش کی جاتی ہیں۔'
        }
      },
      {
        id: 'q19-2',
        question: {
          roman_urdu: 'Windows paths mein r"C:\\Users\\..." likhne mein shuru ka \'r\' kya karta hai?',
          english: 'What does the prefix `r` in raw strings like `r"C:\\path"` do?',
          urdu: 'را اسٹرنگ میں r کا کیا کام ہے؟'
        },
        options: [
          { roman_urdu: 'Backslashes ko escape character banne se rokta hai (Raw string)', english: 'Prevents backslashes from triggering escape sequences', urdu: 'بیک سلیش کو اسکیپ سیکوینس بننے سے روکتا ہے' },
          { roman_urdu: 'File ko read-only mode mein kholta hai', english: 'Opens file in read-only mode', urdu: 'صرف ریڈ اونلی موڈ بناتا ہے' },
          { roman_urdu: 'File ko recycle bin mein bhejta hai', english: 'Sends file to recycle bin', urdu: 'ری سائیکل بن میں بھیجتا ہے' },
          { roman_urdu: 'Code ki speed 10 guna barha deta hai', english: 'Boosts code speed 10x', urdu: 'اسپیڈ بڑھاتا ہے' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`r` raw string banata hai taake `\\n` ya `\\u` par error na aaye.',
          english: 'Raw strings treat backslashes as literal characters rather than escape codes.',
          urdu: 'را اسٹرنگ سے بیک سلیش عام کریکٹر رہتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-20',
    lessonId: 'lesson-20-xml-beautifulsoup',
    passingScore: 2,
    xpReward: 40,
    title: {
      roman_urdu: 'Quiz 20: BeautifulSoup & XML Extraction Imtehan',
      english: 'Quiz 20: BeautifulSoup & XML Extraction Test',
      urdu: 'بیسواں کوئز: بیوٹی فل سوپ اور ایکس ایم ایل'
    },
    questions: [
      {
        id: 'q20-1',
        question: {
          roman_urdu: '<asset id="101" label="Car"> tag se label nikalne ka sahi tareeqa kya hai?',
          english: 'How do you extract the `label` attribute from an element parsed by BeautifulSoup?',
          urdu: 'بیوٹی فل سوپ میں ایٹری بیوٹ کیسے نکالا جاتا ہے؟'
        },
        options: [
          { roman_urdu: 'asset.get("label")', english: 'asset.get("label")', urdu: 'asset.get("label")' },
          { roman_urdu: 'asset.label_value()', english: 'asset.label_value()', urdu: 'asset.label_value()' },
          { roman_urdu: 'asset.attribute["label"]', english: 'asset.attribute["label"]', urdu: 'asset.attribute["label"]' },
          { roman_urdu: 'print(asset -> label)', english: 'print(asset -> label)', urdu: 'print(asset -> label)' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`.get("label")` attribute ko safely extract karta hai aur agar na mile to None de deta hai.',
          english: '`tag.get("attribute_name")` retrieves attribute values safely without KeyError.',
          urdu: 'ٹیگ ڈاٹ گیٹ محفوظ طریقہ ہے۔'
        }
      },
      {
        id: 'q20-2',
        question: {
          roman_urdu: 'find() aur find_all() mein kya farq hai?',
          english: 'What is the key difference between find() and find_all() in bs4?',
          urdu: 'find اور find_all میں کیا بنیادی فرق ہے؟'
        },
        options: [
          { roman_urdu: 'find() pehla matching tag deta hai, find_all() tamam matching tags ki list deta hai', english: 'find() returns the first tag, find_all() returns a list of all matching tags', urdu: 'find پہلا ٹیگ لاتا ہے، find_all تمام ٹیگز کی لسٹ دیتا ہے' },
          { roman_urdu: 'Dono bilkul aik jaisay hain', english: 'They are identical', urdu: 'دونوں بالکل ایک جیسے ہیں' },
          { roman_urdu: 'find_all sirf numbers dhoondta hai', english: 'find_all only finds numbers', urdu: 'صرف نمبرز ڈھونڈتا ہے' },
          { roman_urdu: 'find() file ko delete karta hai', english: 'find() deletes the file', urdu: 'فائل ڈیلیٹ کرتا ہے' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`find()` single element ke liye aur `find_all()` loop lagane ke liye use hota hai.',
          english: '`find` gives a single element or None; `find_all` gives an iterable list.',
          urdu: 'find_all پر ہم لوپ چلا سکتے ہیں۔'
        }
      }
    ]
  },
  {
    id: 'quiz-21',
    lessonId: 'lesson-21-pandas-data-wrangling',
    passingScore: 2,
    xpReward: 40,
    title: {
      roman_urdu: 'Quiz 21: Dynamic Schemas & Pandas CSV Imtehan',
      english: 'Quiz 21: Dynamic Schemas & Pandas CSV Test',
      urdu: 'اکیسواں کوئز: ڈائنامک کالمز اور پانڈاز سی ایس وی'
    },
    questions: [
      {
        id: 'q21-1',
        question: {
          roman_urdu: 'Mukhtalif XML files se tamam unique column names collect karne ke liye Python ka kon sa data structure behtareen hai?',
          english: 'Which Python data structure guarantees collecting unique column names without duplicates?',
          urdu: 'ڈپلیکیٹ کالمز کے بغیر نام اکٹھے کرنے کے لیے کیا استعمال ہوتا ہے؟'
        },
        options: [
          { roman_urdu: 'set()', english: 'set()', urdu: 'set()' },
          { roman_urdu: 'tuple()', english: 'tuple()', urdu: 'tuple()' },
          { roman_urdu: 'integer', english: 'integer', urdu: 'integer' },
          { roman_urdu: 'float', english: 'float', urdu: 'float' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`set` mein har item unique hota hai, is liye column names duplicate nahi hotay.',
          english: 'A `set` automatically rejects duplicates, making schema accumulation simple.',
          urdu: 'سیٹ میں ڈپلیکیٹ آئٹم نہیں آ سکتا۔'
        }
      },
      {
        id: 'q21-2',
        question: {
          roman_urdu: 'df.to_csv("out.csv", index=False, encoding="utf-8-sig") mein index=False kyun lagaya jata hai?',
          english: 'Why is index=False specified when exporting a Pandas DataFrame to CSV?',
          urdu: 'سی ایس وی میں index=False کیوں لگایا جاتا ہے؟'
        },
        options: [
          { roman_urdu: 'Taake extra 0, 1, 2 row numbers CSV mein save na hon', english: 'To prevent saving unnecessary 0, 1, 2 row index numbers', urdu: 'اضافی انڈیکس نمبرز سے بچنے کے لیے' },
          { roman_urdu: 'Taake file delete ho jaye', english: 'To delete the file', urdu: 'فائل ختم کرنے کے لیے' },
          { roman_urdu: 'Kyunke computer mein jagah kam hoti hai', english: 'Due to lack of disk space', urdu: 'اسپیس بچانے کے لیے' },
          { roman_urdu: 'Excel open na ho sakay', english: 'To block Excel', urdu: 'ایکسل روکنے کے لیے' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '`index=False` na lagane se Pandas aik be-kaar pehla column 0, 1, 2 shamil kar deta hai.',
          english: '`index=False` suppresses the dataframe positional index in the output CSV.',
          urdu: 'یہ اضافی نمبرنگ کو روکتا ہے۔'
        }
      }
    ]
  },
  {
    id: 'quiz-22',
    lessonId: 'lesson-22-capstone-xml-pipeline',
    passingScore: 2,
    xpReward: 50,
    title: {
      roman_urdu: 'Quiz 22: AI Annotation Pipeline Architecture Imtehan',
      english: 'Quiz 22: AI Pipeline Architecture Test',
      urdu: 'بائیسواں کوئز: مکمل پائپ لائن آرکیٹیکچر'
    },
    questions: [
      {
        id: 'q22-1',
        question: {
          roman_urdu: 'Computer Vision tools se aane wale frame number ko `str(int(raw_frame) + 1)` kyun kiya jata hai?',
          english: 'Why does the pipeline increment the raw frame number by 1?',
          urdu: 'فریم نمبر میں ایک کا اضافہ کیوں کیا جاتا ہے؟'
        },
        options: [
          { roman_urdu: 'AI tools 0 se shuru karte hain jabke human video player 1 se shuru hota hai', english: 'AI models 0-index frames while video players start at Frame 1', urdu: 'کیونکہ کمپیوٹر 0 سے گنتا ہے اور انسان 1 سے' },
          { roman_urdu: 'Kyunke frame number hamesha even hona chahiye', english: 'Frame numbers must always be even', urdu: 'فریم نمبر جفت ہونا چاہیے' },
          { roman_urdu: 'Kyunke Python 0 ko pasand nahi karta', english: 'Python dislikes zero', urdu: 'پائتھن صفر پسند نہیں کرتا' },
          { roman_urdu: 'Frame ki speed double karne ke liye', english: 'To double playback speed', urdu: 'اسپیڈ ڈبل کرنے کے لیے' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: '0-indexed annotation ko real video player frames (1, 2, 3...) ke mutabiq match karne ke liye +1 rule lagaya jata hai.',
          english: 'Translates machine 0-indexed frame positions to human-readable 1-indexed video timestamps.',
          urdu: 'انسانوں کے دیکھنے کے لیے 1 سے شروع کیا جاتا ہے۔'
        }
      },
      {
        id: 'q22-2',
        question: {
          roman_urdu: 'Batch loop ke andar try...except lagane ka sabse bada faida kya hai?',
          english: 'What is the primary advantage of wrapping each file in try...except during batch processing?',
          urdu: 'بیچ پروسیسنگ میں ٹرائی ایکسیپٹ کا کیا فائدہ ہے؟'
        },
        options: [
          { roman_urdu: 'Agar aik file corrupted ho to baaqi files rukti nahi hain aur poora batch complete hota hai', english: 'If one file is corrupt, the program continues and processes all other files', urdu: 'اگر ایک فائل خراب ہو تو باقی تمام فائلیں کامیابی سے پراسیس ہو جاتی ہیں' },
          { roman_urdu: 'Poora computer restart ho jata hai', english: 'The entire computer restarts', urdu: 'کمپیوٹر ری اسٹارٹ ہوتا ہے' },
          { roman_urdu: 'Data encrypt ho jata hai', english: 'Data gets encrypted', urdu: 'ڈیٹا چھپ جاتا ہے' },
          { roman_urdu: 'Files internet par chali jati hain', english: 'Files upload to cloud', urdu: 'انٹرنیٹ پر چلا جاتا ہے' }
        ],
        correctAnswerIndex: 0,
        explanation: {
          roman_urdu: 'Production pipelines mein fault-tolerance zaroori hai taake 1 kharab file 1,000 files ka kaam na rokay.',
          english: 'Fault tolerance prevents a single corrupt payload from terminating long-running batch jobs.',
          urdu: 'یہ پروگرام کو حادثاتی بندش سے بچاتا ہے۔'
        }
      }
    ]
  }
];
