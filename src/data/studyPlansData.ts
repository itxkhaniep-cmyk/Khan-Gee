import { StudyPlanTrack } from '../types';

export const studyPlansData: StudyPlanTrack[] = [
  {
    id: '14days',
    totalDays: 14,
    badge: 'Recommended (Behtareen)',
    title: {
      roman_urdu: '14 Din Ka Balanced Plan',
      english: '14-Day Balanced Roadmap',
      urdu: '14 دن کا متوازن لائحہ عمل'
    },
    subtitle: {
      roman_urdu: 'Rozana 45-60 minute dein aur 2 hafton mein Python ke mustahkam bunyadi mahir banein.',
      english: 'Spend 45-60 mins daily to gain solid Python mastery in exactly 2 weeks.',
      urdu: 'روزانہ 45 سے 60 منٹ دیں اور 2 ہفتوں میں پائتھن کے ماہر بنیں۔'
    },
    dailyTime: {
      roman_urdu: '45 se 60 minute rozana',
      english: '45-60 mins / day',
      urdu: 'روزانہ 45 تا 60 منٹ'
    },
    recommendedFor: {
      roman_urdu: 'Begineers aur students jo baghair kisi dabao ke aahista aahista pakka seekhna chahte hain.',
      english: 'College students and absolute beginners seeking steady, stress-free retention.',
      urdu: 'طلباء اور ابتدائی سیکھنے والے جو بغیر دباؤ کے پختہ سیکھنا چاہتے ہیں۔'
    },
    days: [
      {
        dayNumber: 1,
        title: {
          roman_urdu: 'Din 1: Pehla Kadam & print()',
          english: 'Day 1: First Steps & print()',
          urdu: 'پہلا دن: پہلا قدم اور پرنٹ'
        },
        description: {
          roman_urdu: 'Python ka taaruf, screen par text print karna, comments (#) likhna aur syntax samajhna.',
          english: 'Understand Python syntax, outputting text with print(), and writing single-line comments.',
          urdu: 'پائتھن کا تعارف، اسکرین پر پرنٹ اور کمنٹس کا استعمال۔'
        },
        durationMinutes: 45,
        lessonId: 'lesson-1-intro-print',
        challengeId: 'challenge-1-hello-world',
        quizId: 'quiz-1',
        tasks: {
          roman_urdu: [
            'Lesson 1 mukammal parhein',
            'Playground mein pehla "Assalam-o-Alaikum" code run karein',
            'Challenge 1 (Hello World) test cases pass karein',
            'Day 1 Practical Exam: 10 Written Paper Tasks hal karein (100 Marks)',
            'Quiz 1 de kar 4/4 score karein'
          ],
          english: [
            'Read Lesson 1 thoroughly',
            'Run your first print statement in the Playground',
            'Complete Challenge 1 with automated tests',
            'Solve Day 1 Practical Exam: 10 Written Paper Tasks (100 Marks)',
            'Pass Quiz 1 with full marks'
          ],
          urdu: [
            'سبق نمبر 1 مکمل پڑھیں',
            'پلے گراؤنڈ میں کوڈ چلا کر دیکھیں',
            'پہلا چیلنج حل کریں',
            'پہلے دن کا پریکٹیکل امتحان: 10 تحریری سوالات حل کریں (100 نمبر)',
            'پہلا کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 2,
        title: {
          roman_urdu: 'Din 2: Variables & Data Types',
          english: 'Day 2: Variables & Data Types',
          urdu: 'دوسرا دن: ویری ایبلز اور اقسام'
        },
        description: {
          roman_urdu: 'Data ko dabbon mein mehfooz karna: int, float, str, aur boolean values.',
          english: 'Learn storing data with variables, type inference, and converting between types.',
          urdu: 'ویری ایبلز بنانا اور انٹیجر، فلوٹ، اسٹرنگ اور بولین کو سمجھنا۔'
        },
        durationMinutes: 45,
        lessonId: 'lesson-2-variables-types',
        challengeId: 'challenge-2-temperature-converter',
        quizId: 'quiz-2',
        tasks: {
          roman_urdu: [
            'Lesson 2: int, float, str aur bool ka farq samjhein',
            'Type casting: int("10") aur str(20) test karein',
            'Challenge 2: Temperature Converter hal karein',
            'Quiz 2 mukammal karein'
          ],
          english: [
            'Understand variables and data types in Lesson 2',
            'Experiment with type casting in Playground',
            'Solve Challenge 2 (Temperature Converter)',
            'Score at least 3/3 on Quiz 2'
          ],
          urdu: [
            'سبق نمبر 2 پڑھیں',
            'ٹائپ کاسٹنگ کی مشق کریں',
            'دوسرا چیلنج حل کریں',
            'دوسرا کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 3,
        title: {
          roman_urdu: 'Din 3: Math & Operators',
          english: 'Day 3: Math & Operators',
          urdu: 'تیسرا دن: ریاضی اور آپریٹرز'
        },
        description: {
          roman_urdu: 'Hisaab kitaab (+, -, *, /, //, %, **) aur muqabila (>, <, ==).',
          english: 'Master arithmetic operations, floor division, modulus remainder, and comparisons.',
          urdu: 'حسابی آپریٹرز، بقایا (%) اور برابری کا موازنہ۔'
        },
        durationMinutes: 50,
        lessonId: 'lesson-3-operators-math',
        challengeId: 'challenge-3-even-odd',
        quizId: 'quiz-3',
        tasks: {
          roman_urdu: [
            'Lesson 3: Math operators aur Modulus (%) seekhein',
            'Even/Odd logic (% 2) samjhein',
            'Challenge 3: Even ya Odd checker hal karein',
            'Quiz 3 pass karein'
          ],
          english: [
            'Study Lesson 3 arithmetic and comparisons',
            'Master modulus operator logic (% 2 == 0)',
            'Complete Challenge 3 with automated tests',
            'Pass Quiz 3'
          ],
          urdu: [
            'سبق نمبر 3 پڑھیں',
            'جفت اور طاق کی لاجک سمجھیں',
            'تیسرا چیلنج حل کریں',
            'تیسرا کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 4,
        title: {
          roman_urdu: 'Din 4: Conditionals (if, elif, else)',
          english: 'Day 4: Decision Making (if / else)',
          urdu: 'چوتھا دن: شرائط اور فیصلے'
        },
        description: {
          roman_urdu: 'Shart ki bunyaad par code chalana, 4 spaces indentation aur logical operators (and, or).',
          english: 'Branch program execution using if, elif, else, logical and/or, and indentation rules.',
          urdu: 'کنڈیشنل لاجک، انڈینٹیشن اور فیصلوں کے اصول۔'
        },
        durationMinutes: 50,
        lessonId: 'lesson-4-conditionals-if-else',
        challengeId: 'challenge-4-grade-calculator',
        quizId: 'quiz-4',
        tasks: {
          roman_urdu: [
            'Lesson 4: if, elif, else ka dhancha samjhein',
            'IndentationError se bachne ki practice karein',
            'Challenge 4: Student Grade Calculator hal karein',
            'Quiz 4 solve karein'
          ],
          english: [
            'Complete Lesson 4 on conditionals',
            'Practice proper 4-space code indentation',
            'Solve Challenge 4 (Grade Calculator)',
            'Complete Quiz 4'
          ],
          urdu: [
            'سبق نمبر 4 پڑھیں',
            'گریڈ کیلکولیٹر چیلنج حل کریں',
            'چوتھا کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 5,
        title: {
          roman_urdu: 'Din 5: Revision & Cheatsheet Session',
          english: 'Day 5: Week 1 Consolidation',
          urdu: 'پانچواں دن: پہلے ہفتے کا اعادہ'
        },
        description: {
          roman_urdu: 'Pehle 4 dino ki tamaam cheezon ka revision, notes banana aur Playground mein experiment karna.',
          english: 'Consolidate Variables, Math, and Conditionals with personal notes and playground experiments.',
          urdu: 'پچھلے چار اسباق کا اعادہ اور نوٹس تیار کرنا۔'
        },
        durationMinutes: 45,
        lessonId: 'lesson-4-conditionals-if-else',
        tasks: {
          roman_urdu: [
            'Notebook tab khol kar ahem points apne alfaaz mein likhein',
            'Cheatsheet tab mein operators aur data types review karein',
            'Playground mein ek simple mini-calculator code likhein',
            'Progress backup JSON download kar ke save karein'
          ],
          english: [
            'Write down your key learnings in the Notebook tab',
            'Review operators in the Python Cheatsheet',
            'Code a simple mini-calculator in the Playground',
            'Download your progress backup JSON'
          ],
          urdu: [
            'نوٹ بک میں اہم نکات لکھیں',
            'چیٹ شیٹ کا جائزہ لیں',
            'پلے گراؤنڈ میں پریکٹس کریں'
          ]
        }
      },
      {
        dayNumber: 6,
        title: {
          roman_urdu: 'Din 6: for Loops & range()',
          english: 'Day 6: for Loops & range()',
          urdu: 'چھٹا دن: فار لوپ اور رینج'
        },
        description: {
          roman_urdu: 'Bar bar hone wale kaam: `for i in range(1, 11)` se table aur counting chalana.',
          english: 'Automate repetition with for loops and range(). Generate counting sequences and math tables.',
          urdu: 'فار لوپ کے ذریعے بار بار کے کاموں کو خودکار بنانا۔'
        },
        durationMinutes: 50,
        lessonId: 'lesson-5-loops',
        challengeId: 'challenge-5-sum-numbers',
        quizId: 'quiz-5',
        tasks: {
          roman_urdu: [
            'Lesson 5: for loop aur range() ka kaam samjhein',
            'Playground mein 2 se 10 tak ke tables print karein',
            'Challenge 5: Sum of 1 to N numbers hal karein',
            'Quiz 5 de kar pass karein'
          ],
          english: [
            'Study for loop mechanics in Lesson 5',
            'Generate multiplication tables in Playground',
            'Pass Challenge 5 (Sum 1 to N)',
            'Pass Quiz 5'
          ],
          urdu: [
            'سبق نمبر 5 پڑھیں',
            'پہاڑے پرنٹ کر کے دیکھیں',
            'پانچواں چیلنج حل کریں',
            'پانچواں کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 7,
        title: {
          roman_urdu: 'Din 7: while Loops, break & continue',
          english: 'Day 7: while Loops & Controls',
          urdu: 'ساتواں دن: وائل لوپ اور بریک'
        },
        description: {
          roman_urdu: 'Jab tak shart sach rahe loop chalana. break aur continue se loop control karna.',
          english: 'Run code while a condition is true. Control flow with break (stop) and continue (skip).',
          urdu: 'وائل لوپ اور لوپ کنٹرول کے طریقے سیکھنا۔'
        },
        durationMinutes: 45,
        lessonId: 'lesson-5-loops',
        quizId: 'quiz-5',
        tasks: {
          roman_urdu: [
            'Lesson 5 ka while loop aur infinite loop ka khatra samjhein',
            'break aur continue statement ka farq dekhein',
            'Playground mein simple countdown timer banayein',
            'Quiz 5 dobara test karein taake 100% ho'
          ],
          english: [
            'Learn while loop conditions and infinite loop safety',
            'Differentiate between break and continue',
            'Write a countdown script in Playground',
            'Re-test Quiz 5 for a perfect score'
          ],
          urdu: [
            'وائل لوپ اور انفینیٹ لوپ کے خطرے کو سمجھیں',
            'بریک اور کنٹینیو کی مشق کریں'
          ]
        }
      },
      {
        dayNumber: 8,
        title: {
          roman_urdu: 'Din 8: Lists (Fihristein) & Slicing',
          english: 'Day 8: Lists & Indexing',
          urdu: 'آٹھواں دن: لسٹس اور انڈیکسنگ'
        },
        description: {
          roman_urdu: 'Multiple values ko square brackets [...] mein rakhna, indexing (0 se shuru), aur append/remove.',
          english: 'Store ordered items in lists. Master 0-based indexing, negative indices, append, and slice notation.',
          urdu: 'لسٹ بنانا، انڈیکس 0 کی اہمیت اور لسٹ کے میتھڈز۔'
        },
        durationMinutes: 50,
        lessonId: 'lesson-6-lists-tuples',
        challengeId: 'challenge-6-list-analyzer',
        quizId: 'quiz-6',
        tasks: {
          roman_urdu: [
            'Lesson 6: List indexing aur methods seekhein',
            'Built-ins: sum(), max(), min(), len() test karein',
            'Challenge 6: List Average Calculator hal karein',
            'Quiz 6 pass karein'
          ],
          english: [
            'Study list operations in Lesson 6',
            'Test sum, max, min, len on numeric lists',
            'Pass Challenge 6 (Find List Average)',
            'Pass Quiz 6'
          ],
          urdu: [
            'سبق نمبر 6 پڑھیں',
            'لسٹ کے تمام فنکشنز ٹیسٹ کریں',
            'چھٹا چیلنج حل کریں',
            'چھٹا کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 9,
        title: {
          roman_urdu: 'Din 9: Dictionaries (Key-Value Records)',
          english: 'Day 9: Dictionaries & Lookup',
          urdu: 'نواں دن: ڈکشنری اور کی-ویلیو'
        },
        description: {
          roman_urdu: 'Data ko labels aur chabiyon ke sath rakhna. Real-world records jaise student profile ya product catalog.',
          english: 'Map keys to values in dictionaries. Access, update, and iterate over key-value records.',
          urdu: 'ڈکشنری کے ذریعے ریکارڈز محفوظ کرنا اور سرچ کرنا۔'
        },
        durationMinutes: 50,
        lessonId: 'lesson-7-dictionaries',
        challengeId: 'challenge-7-word-counter',
        quizId: 'quiz-7',
        tasks: {
          roman_urdu: [
            'Lesson 7: Dictionary ka dhancha aur .items() loop samjhein',
            '.get() method se KeyError se bachna seekhein',
            'Challenge 7: Word Frequency Counter hal karein',
            'Quiz 7 solve karein'
          ],
          english: [
            'Learn dictionary structures and .items() in Lesson 7',
            'Avoid KeyErrors using .get() lookup',
            'Pass Challenge 7 (Word Counter)',
            'Pass Quiz 7'
          ],
          urdu: [
            'سبق نمبر 7 پڑھیں',
            'ڈکشنری کے تمام طریقے سیکھیں',
            'ساتواں چیلنج حل کریں',
            'ساتواں کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 10,
        title: {
          roman_urdu: 'Din 10: Functions (def) & Code Reuse',
          english: 'Day 10: Functions & return',
          urdu: 'دسواں دن: فنکشنز اور ریٹرن'
        },
        description: {
          roman_urdu: 'Apna reusable code block banana: `def function_name(parameters):` aur `return` se jawab wapas bhejna.',
          english: 'Create reusable logic blocks with def. Understand parameters, arguments, and return vs print.',
          urdu: 'فنکشن بنانا، ان پٹ پیرامیٹرز اور ریٹرن ویلیو۔'
        },
        durationMinutes: 55,
        lessonId: 'lesson-8-functions',
        challengeId: 'challenge-8-palindrome-checker',
        quizId: 'quiz-8',
        tasks: {
          roman_urdu: [
            'Lesson 8: def aur return ka farq pakka karein',
            'Function parameters aur default arguments samjhein',
            'Challenge 8: Palindrome Word Checker hal karein',
            'Quiz 8 pass karein'
          ],
          english: [
            'Master function definitions and return statements in Lesson 8',
            'Understand parameters vs arguments',
            'Pass Challenge 8 (Palindrome Checker)',
            'Pass Quiz 8'
          ],
          urdu: [
            'سبق نمبر 8 پڑھیں',
            'فنکشنز اور ریٹرن کی مشق کریں',
            'آٹھواں چیلنج حل کریں',
            'آٹھواں کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 11,
        title: {
          roman_urdu: 'Din 11: Strings & Modern F-Strings',
          english: 'Day 11: String Methods & Formatting',
          urdu: 'گیارہواں دن: اسٹرنگز اور فارمیٹنگ'
        },
        description: {
          roman_urdu: 'Text manipulation: .upper(), .lower(), .strip(), .replace(), .split() aur f"Hello {name}".',
          english: 'Clean and format text using string methods and modern formatted f-strings.',
          urdu: 'ٹیکسٹ پر کام کرنا اور جدید ایف اسٹرنگز۔'
        },
        durationMinutes: 45,
        lessonId: 'lesson-9-strings-formatting',
        challengeId: 'challenge-9-vowel-counter',
        quizId: 'quiz-9',
        tasks: {
          roman_urdu: [
            'Lesson 9: F-strings aur string methods parhein',
            'Challenge 9: Vowel Counter hal karein',
            'Quiz 9 solve karein',
            'Playground mein text analysis script banayein'
          ],
          english: [
            'Study string methods and f-strings in Lesson 9',
            'Pass Challenge 9 (Vowel Counter)',
            'Pass Quiz 9',
            'Build a text statistics script in Playground'
          ],
          urdu: [
            'سبق نمبر 9 پڑھیں',
            'نواں چیلنج حل کریں',
            'نواں کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 12,
        title: {
          roman_urdu: 'Din 12: Algorithms & Logic (Fibonacci)',
          english: 'Day 12: Algorithmic Thinking',
          urdu: 'بارہواں دن: الگورتھم اور لاجک'
        },
        description: {
          roman_urdu: 'Mathematical sequence aur algorithms banana: Fibonacci series aur prime numbers.',
          english: 'Develop algorithmic problem-solving skills using loops, sequences, and list building.',
          urdu: 'مسائل حل کرنے کی حسابی صلاحیت پیدا کرنا۔'
        },
        durationMinutes: 50,
        lessonId: 'lesson-10-mini-projects',
        challengeId: 'challenge-10-fibonacci',
        tasks: {
          roman_urdu: [
            'Challenge 10: Fibonacci Series Generator hal karein',
            'Prime number checker code samjhein',
            'Loop aur condition ko mila kar complex logic banayein'
          ],
          english: [
            'Complete Challenge 10 (Fibonacci Series)',
            'Explore Prime Number checking algorithm',
            'Combine loops and conditions for algorithmic problems'
          ],
          urdu: [
            'دسواں چیلنج فیبوناچی حل کریں',
            'مفرد اعداد کی لاجک سمجھیں'
          ]
        }
      },
      {
        dayNumber: 13,
        title: {
          roman_urdu: 'Din 13: Capstone Mini Projects',
          english: 'Day 13: Full Working Mini Projects',
          urdu: 'تیرہواں دن: مکمل منی پروجیکٹس'
        },
        description: {
          roman_urdu: 'Tammam seekhi hui cheezon ko mila kar mukammal software: Bank ATM Simulator aur Guessing Game.',
          english: 'Synthesize variables, conditions, loops, and functions into complete interactive programs.',
          urdu: 'تمام اصولوں کو ملا کر مکمل پروجیکٹ تیار کرنا۔'
        },
        durationMinutes: 60,
        lessonId: 'lesson-10-mini-projects',
        quizId: 'quiz-10',
        tasks: {
          roman_urdu: [
            'Lesson 10 ka ATM Simulator code parhein aur samjhein',
            'Playground mein Number Guessing game ko run karein aur tabdeel karein',
            'Quiz 10 (Mastery Exam) de kar 100% paas karein',
            'Apna custom project playground mein banayein'
          ],
          english: [
            'Study the Bank ATM Simulator in Lesson 10',
            'Run and customize the Number Guessing Game in Playground',
            'Pass Quiz 10 (Mastery Exam)',
            'Create a custom project file in Playground'
          ],
          urdu: [
            'سبق نمبر 10 کے پروجیکٹس کا جائزہ لیں',
            'پلے گراؤنڈ میں اپنا پروجیکٹ تیار کریں',
            'دسواں کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 14,
        title: {
          roman_urdu: 'Din 14: Sanad (Graduation & Certificate)',
          english: 'Day 14: Graduation & Certification',
          urdu: 'چودہواں دن: تکمیل اور سند کا حصول'
        },
        description: {
          roman_urdu: 'Aakhri jaiza, tamam challenges aur quizzes ka audit, aur Verified Learner Certificate hasil karein!',
          english: 'Review your total progress, verify all challenges and quizzes, and generate your certificate.',
          urdu: 'مکمل پیش رفت کا جائزہ اور پائتھن سرٹیفکیٹ کا حصول۔'
        },
        durationMinutes: 45,
        lessonId: 'lesson-10-mini-projects',
        tasks: {
          roman_urdu: [
            'Progress Backup Modal khol kar tamam 10 lessons aur challenges check karein',
            'Certificate of Python Achievement par apna naam likhein',
            'Apna final progress backup JSON download kar ke mehfooz karein',
            'Mubarak ho! Aapne kamyabi se Python ka bunyadi course mukammal kar liya!'
          ],
          english: [
            'Open Progress Backup modal and review all 10 modules',
            'Generate your personalized Certificate of Python Achievement',
            'Download your final progress backup JSON file',
            'Congratulations! You have mastered the Python fundamentals!'
          ],
          urdu: [
            'تمام 10 ماڈیولز کی تکمیل چیک کریں',
            'سرٹیفکیٹ پر اپنا نام لکھ کر تصدیق کریں',
            'بیک اپ فائل ڈاؤن لوڈ کریں',
            'مبارک ہو! آپ کا کورس مکمل ہوا!'
          ]
        }
      }
    ]
  },
  {
    id: '7days',
    totalDays: 7,
    badge: 'Fast Track (Taiz Tareen)',
    title: {
      roman_urdu: '7 Din Ka Fast Track (Crash Course)',
      english: '7-Day Fast-Track Intensive',
      urdu: '7 دن کا تیز رفتار کورس'
    },
    subtitle: {
      roman_urdu: 'Rozana 1.5 se 2 ghante dein aur sirf 1 hafte mein Python ke ahem tareen topics seekhein.',
      english: 'Dedicate 1.5 - 2 hours daily to conquer Python fundamentals in a single power week.',
      urdu: 'روزانہ ڈیڑھ سے 2 گھنٹے دیں اور ایک ہفتے میں بنیادی پائتھن سیکھیں۔'
    },
    dailyTime: {
      roman_urdu: '1.5 se 2 ghante rozana',
      english: '1.5 - 2 hrs / day',
      urdu: 'روزانہ 1.5 تا 2 گھنٹے'
    },
    recommendedFor: {
      roman_urdu: 'Jin ke paas waqt kam hai, interview ya exam ki tayyari kar rahe hain.',
      english: 'Fast learners with urgent deadlines, exams, or upcoming technical interviews.',
      urdu: 'جن کے پاس وقت کم ہے اور جلد از جلد سیکھنا چاہتے ہیں۔'
    },
    days: [
      {
        dayNumber: 1,
        title: {
          roman_urdu: 'Din 1: Syntax, print() & Variables',
          english: 'Day 1: Syntax, print() & Variables',
          urdu: 'پہلا دن: پرنٹ اور متغیرات'
        },
        description: {
          roman_urdu: 'Module 1 aur Module 2 aik sath: Print statement, comments, int, float, str aur bool.',
          english: 'Modules 1 & 2: Output, comments, data types, and casting.',
          urdu: 'ماڈیول 1 اور 2: پرنٹ اور ویری ایبلز۔'
        },
        durationMinutes: 90,
        lessonId: 'lesson-1-intro-print',
        challengeId: 'challenge-1-hello-world',
        quizId: 'quiz-1',
        tasks: {
          roman_urdu: [
            'Module 1 & 2 dono mukammal parhein',
            'Challenge 1 (Hello World) aur Challenge 2 (Temp) hal karein',
            'Quiz 1 aur Quiz 2 pass karein'
          ],
          english: [
            'Complete Modules 1 & 2',
            'Solve Challenge 1 & Challenge 2',
            'Pass Quiz 1 & Quiz 2'
          ],
          urdu: [
            'ماڈیول 1 اور 2 مکمل پڑھیں',
            'پہلے دو چیلنجز حل کریں',
            'کوئز پاس کریں'
          ]
        }
      },
      {
        dayNumber: 2,
        title: {
          roman_urdu: 'Din 2: Math & Conditionals (if/elif/else)',
          english: 'Day 2: Math & Decision Logic',
          urdu: 'دوسرا دن: ریاضی اور فیصلے'
        },
        description: {
          roman_urdu: 'Module 3 aur 4: Math operators, modulus, comparisons, aur if/elif/else conditionals.',
          english: 'Modules 3 & 4: Operators, remainder logic, and conditional branching.',
          urdu: 'ماڈیول 3 اور 4: حسابی عمل اور شرائط۔'
        },
        durationMinutes: 90,
        lessonId: 'lesson-3-operators-math',
        challengeId: 'challenge-3-even-odd',
        quizId: 'quiz-3',
        tasks: {
          roman_urdu: [
            'Module 3 & 4 mukammal karein',
            'Challenge 3 (Even/Odd) aur Challenge 4 (Grades) hal karein',
            'Quiz 3 aur Quiz 4 solve karein'
          ],
          english: [
            'Complete Modules 3 & 4',
            'Solve Challenge 3 & Challenge 4',
            'Pass Quiz 3 & Quiz 4'
          ],
          urdu: [
            'ماڈیول 3 اور 4 مکمل کریں',
            'چیلنج 3 اور 4 حل کریں'
          ]
        }
      },
      {
        dayNumber: 3,
        title: {
          roman_urdu: 'Din 3: Loops (for, while, range)',
          english: 'Day 3: Loops Mastery',
          urdu: 'تیسرا دن: لوپس کی مکمل مشق'
        },
        description: {
          roman_urdu: 'Module 5: Repetition, range(), while loops, break aur continue.',
          english: 'Module 5: Iteration, ranges, while loops, and loop control statements.',
          urdu: 'ماڈیول 5: فار لوپ، وائل لوپ اور بریک۔'
        },
        durationMinutes: 90,
        lessonId: 'lesson-5-loops',
        challengeId: 'challenge-5-sum-numbers',
        quizId: 'quiz-5',
        tasks: {
          roman_urdu: [
            'Module 5 for aur while loops mukammal parhein',
            'Challenge 5 (Sum 1 to N) hal karein',
            'Quiz 5 de kar pass karein',
            'Playground mein loops test karein'
          ],
          english: [
            'Master for and while loops in Module 5',
            'Pass Challenge 5 (Sum 1 to N)',
            'Pass Quiz 5',
            'Experiment with loops in Playground'
          ],
          urdu: [
            'ماڈیول 5 مکمل کریں',
            'پانچواں چیلنج حل کریں'
          ]
        }
      },
      {
        dayNumber: 4,
        title: {
          roman_urdu: 'Din 4: Lists & Dictionaries',
          english: 'Day 4: Data Collections',
          urdu: 'چوتھا دن: لسٹس اور ڈکشنری'
        },
        description: {
          roman_urdu: 'Module 6 aur 7: Sequences, list indexing/methods aur key-value dictionaries.',
          english: 'Modules 6 & 7: Ordered lists, mutable arrays, and key-value mapping.',
          urdu: 'ماڈیول 6 اور 7: لسٹ اور ڈکشنری۔'
        },
        durationMinutes: 100,
        lessonId: 'lesson-6-lists-tuples',
        challengeId: 'challenge-6-list-analyzer',
        quizId: 'quiz-6',
        tasks: {
          roman_urdu: [
            'Module 6 (Lists) aur Module 7 (Dictionaries) parhein',
            'Challenge 6 (Average) aur Challenge 7 (Word Count) hal karein',
            'Quiz 6 aur Quiz 7 pass karein'
          ],
          english: [
            'Read Modules 6 & 7',
            'Solve Challenge 6 & Challenge 7',
            'Pass Quiz 6 & Quiz 7'
          ],
          urdu: [
            'ماڈیول 6 اور 7 پڑھیں',
            'چیلنجز حل کریں'
          ]
        }
      },
      {
        dayNumber: 5,
        title: {
          roman_urdu: 'Din 5: Functions (def) & Code Reusability',
          english: 'Day 5: Functions & Modular Code',
          urdu: 'پانچواں دن: فنکشنز'
        },
        description: {
          roman_urdu: 'Module 8: def, parameters, return statements, aur local vs global scope.',
          english: 'Module 8: Writing clean reusable functions with arguments and return values.',
          urdu: 'ماڈیول 8: فنکشنز اور کوڈ کا دوبارہ استعمال۔'
        },
        durationMinutes: 90,
        lessonId: 'lesson-8-functions',
        challengeId: 'challenge-8-palindrome-checker',
        quizId: 'quiz-8',
        tasks: {
          roman_urdu: [
            'Module 8 Functions deep dive karein',
            'Challenge 8: Palindrome Checker hal karein',
            'Quiz 8 solve karein'
          ],
          english: [
            'Deep dive into functions in Module 8',
            'Pass Challenge 8 (Palindrome Checker)',
            'Pass Quiz 8'
          ],
          urdu: [
            'ماڈیول 8 فنکشنز مکمل کریں'
          ]
        }
      },
      {
        dayNumber: 6,
        title: {
          roman_urdu: 'Din 6: Strings & F-Strings Magic',
          english: 'Day 6: Strings & Formatting',
          urdu: 'چھٹا دن: اسٹرنگز'
        },
        description: {
          roman_urdu: 'Module 9: Text cleaning (.split, .upper, .strip) aur modern f-strings.',
          english: 'Module 9: String operations, slicing, methods, and formatted strings.',
          urdu: 'ماڈیول 9: اسٹرنگز اور فارمیٹنگ۔'
        },
        durationMinutes: 80,
        lessonId: 'lesson-9-strings-formatting',
        challengeId: 'challenge-9-vowel-counter',
        quizId: 'quiz-9',
        tasks: {
          roman_urdu: [
            'Module 9 String methods mukammal karein',
            'Challenge 9 (Vowel Counter) hal karein',
            'Quiz 9 pass karein'
          ],
          english: [
            'Complete string methods in Module 9',
            'Solve Challenge 9 (Vowel Counter)',
            'Pass Quiz 9'
          ],
          urdu: [
            'ماڈیول 9 مکمل کریں'
          ]
        }
      },
      {
        dayNumber: 7,
        title: {
          roman_urdu: 'Din 7: Mini Projects, Exam & Certificate',
          english: 'Day 7: Capstones & Certification',
          urdu: 'ساتواں دن: پروجیکٹس اور سند'
        },
        description: {
          roman_urdu: 'Module 10: ATM Simulator, Guessing game, Quiz 10, aur graduation certificate!',
          english: 'Module 10: Capstone projects, full logic synthesis, and graduation certification.',
          urdu: 'ماڈیول 10: مکمل پروجیکٹس اور سند۔'
        },
        durationMinutes: 100,
        lessonId: 'lesson-10-mini-projects',
        challengeId: 'challenge-10-fibonacci',
        quizId: 'quiz-10',
        tasks: {
          roman_urdu: [
            'Module 10 ke ATM aur Game projects parhein',
            'Challenge 10 (Fibonacci) pass karein',
            'Quiz 10 Mastery Exam pass karein',
            'Backup Modal se Certificate aur data download karein'
          ],
          english: [
            'Review ATM Simulator and Guessing Game in Module 10',
            'Pass Challenge 10 (Fibonacci)',
            'Pass Quiz 10',
            'Generate your completion certificate and download backup'
          ],
          urdu: [
            'ماڈیول 10 مکمل کر کے سرٹیفکیٹ حاصل کریں'
          ]
        }
      }
    ]
  },
  {
    id: '30days',
    totalDays: 30,
    badge: 'In-Depth (Aahista & Gehra)',
    title: {
      roman_urdu: '30 Din Ka Comprehensive Plan',
      english: '30-Day In-Depth Mastery',
      urdu: '30 دن کا تفصیلی پلان'
    },
    subtitle: {
      roman_urdu: 'Rozana sirf 20-30 minute dein. No rush, har topic ko gehrai se samajhein.',
      english: 'Dedicate just 20-30 mins per day for steady, deep comprehension.',
      urdu: 'روزانہ صرف 20 سے 30 منٹ دیں اور گہرائی سے سیکھیں۔'
    },
    dailyTime: {
      roman_urdu: '20 se 30 minute rozana',
      english: '20-30 mins / day',
      urdu: 'روزانہ 20 تا 30 منٹ'
    },
    recommendedFor: {
      roman_urdu: 'Working professionals aur school students jinke paas rozana thoda waqt hota hai.',
      english: 'Working professionals and school students with limited daily study windows.',
      urdu: 'ملازمت پیشہ افراد اور وہ لوگ جن کے پاس روزانہ محدود وقت ہوتا ہے۔'
    },
    days: Array.from({ length: 30 }, (_, i) => {
      const dayNum = i + 1;
      // Map 30 days across 18 modules and review checkpoints
      let modIndex = Math.min(Math.ceil((dayNum / 30) * 18), 18);
      const isReviewDay = dayNum % 5 === 0;

      const phase = dayNum <= 10 
        ? { name: '🟢 Beginner Phase', roman: 'Beginner Marhala' } 
        : dayNum <= 20 
        ? { name: '🟡 Intermediate Phase', roman: 'Intermediate Marhala' } 
        : { name: '🔴 Advanced Phase', roman: 'Advanced Marhala' };

      const lessonMap: Record<number, string> = {
        1: 'lesson-1-intro-print',
        2: 'lesson-2-variables-types',
        3: 'lesson-3-operators-math',
        4: 'lesson-4-conditionals-if-else',
        5: 'lesson-5-loops',
        6: 'lesson-6-lists-tuples',
        7: 'lesson-7-dictionaries',
        8: 'lesson-8-functions',
        9: 'lesson-9-strings-formatting',
        10: 'lesson-10-comprehensions',
        11: 'lesson-11-file-handling',
        12: 'lesson-12-error-handling',
        13: 'lesson-13-oop-basics',
        14: 'lesson-14-oop-advanced',
        15: 'lesson-15-decorators',
        16: 'lesson-16-generators',
        17: 'lesson-17-functional-builtins',
        18: 'lesson-18-production-architecture',
        19: 'lesson-19-os-glob-automation',
        20: 'lesson-20-xml-beautifulsoup',
        21: 'lesson-21-pandas-data-wrangling',
        22: 'lesson-22-capstone-xml-pipeline'
      };

      const targetLessonId = lessonMap[modIndex] || 'lesson-22-capstone-xml-pipeline';

      return {
        dayNumber: dayNum,
        title: {
          roman_urdu: isReviewDay ? `Din ${dayNum}: Revision & Practice (${phase.roman})` : `Din ${dayNum}: Module ${modIndex} (${phase.roman})`,
          english: isReviewDay ? `Day ${dayNum}: Checkpoint & Practice (${phase.name})` : `Day ${dayNum}: Module ${modIndex} (${phase.name})`,
          urdu: isReviewDay ? `دن ${dayNum}: اعادہ اور مشق` : `دن ${dayNum}: ماڈیول ${modIndex}`
        },
        description: {
          roman_urdu: `Rozana ka 25 minute target: Module ${modIndex} ke concepts parhein, samjhein aur playground me test karein.`,
          english: `Daily 25-minute focus: Study Module ${modIndex} concepts and test snippets in the playground.`,
          urdu: `روزانہ کا 25 منٹ کا ہدف: ماڈیول ${modIndex} کا مطالعہ اور پریکٹس۔`
        },
        durationMinutes: 25,
        lessonId: targetLessonId,
        tasks: {
          roman_urdu: [
            `Module ${modIndex} ke ahem points parhein`,
            'Playground mein code test karein',
            'Personal notebook mein apne notes likhein'
          ],
          english: [
            `Review key concepts of Module ${modIndex}`,
            'Run sample code in the Playground',
            'Add notes to your personal notebook'
          ],
          urdu: [
            `ماڈیول ${modIndex} پڑھیں`,
            'پلے گراؤنڈ میں کوڈ چلائیں'
          ]
        }
      };
    })
  },
  {
    id: 'professional_web',
    totalDays: 7,
    badge: 'NEW: Professional Web & Apps 🌐',
    title: {
      roman_urdu: '7 Din Ka Professional Web & App Builder Track',
      english: '7-Day Professional Web & App Builder Track',
      urdu: '7 دن کا پروفیشنل ویب اور ایپ بلڈر ٹریک'
    },
    subtitle: {
      roman_urdu: 'HTML5, Tailwind CSS styling, Python FastAPI backend, aur interactive web apps banana aur live karna seekhein!',
      english: 'Master HTML5 semantic markup, Tailwind CSS, Python FastAPI backend, and deploy live full-stack web applications!',
      urdu: 'ایچ ٹی ایم ایل، ٹیل ونڈ سی ایس ایس اور پائتھن فاسٹ اے پی آئی کے ذریعے مکمل ویب ایپس بنانا سیکھیں۔'
    },
    dailyTime: {
      roman_urdu: '60 minute rozana',
      english: '60 mins / day',
      urdu: 'روزانہ 60 منٹ'
    },
    recommendedFor: {
      roman_urdu: 'Students jo Python ke sath visual websites, interactive tools aur professional apps banana chahte hain.',
      english: 'Learners aiming to bridge Python and frontend skills into complete, deployable web products.',
      urdu: 'وہ طلباء جو پائتھن کے ساتھ حقیقی ویب سائٹس اور ٹولز بنانا چاہتے ہیں۔'
    },
    days: [
      {
        dayNumber: 1,
        title: {
          roman_urdu: 'Din 1: Web Designing Ka Taaruf (HTML5 & Tailwind CSS)',
          english: 'Day 1: Web Design Fundamentals (HTML5 & Tailwind)',
          urdu: 'پہلا دن: ویب ڈیزائننگ کا تعارف اور ایچ ٹی ایم ایل'
        },
        description: {
          roman_urdu: 'Webpage ka dhancha (Headings, Buttons, Cards) banana aur Tailwind utilities (p-4, bg-slate-900, text-white, rounded-xl) se style karna.',
          english: 'Learn semantic HTML structure, headings, buttons, and instant styling using Tailwind CSS utility classes.',
          urdu: 'ایچ ٹی ایم ایل ڈھانچہ اور ٹیل ونڈ کلاسز کے ساتھ اسٹائلنگ۔'
        },
        durationMinutes: 60,
        lessonId: 'lesson-23-web-design-fundamentals',
        tasks: {
          roman_urdu: [
            'Module 23 mukammal parhein',
            'Web & App Studio kholein aur pehla HTML card preview karein',
            'Tailwind classes (bg-gradient, rounded-2xl, shadow-lg) test karein',
            'Personal portfolio ka pehla hero card banayein'
          ],
          english: [
            'Read Module 23 completely',
            'Open Web & App Studio and preview your first HTML card',
            'Experiment with Tailwind classes in real-time preview',
            'Design a personal portfolio hero banner'
          ],
          urdu: [
            'ماڈیول 23 پڑھیں',
            'ویب اسٹوڈیو میں ایچ ٹی ایم ایل کارڈ بنائیں'
          ]
        }
      },
      {
        dayNumber: 2,
        title: {
          roman_urdu: 'Din 2: Responsive Webpages (Flexbox & Grid Layouts)',
          english: 'Day 2: Responsive Layouts (Flexbox & Grid)',
          urdu: 'دوسرا دن: ریسپانسو ویب پیجز اور گرڈ لے آؤٹ'
        },
        description: {
          roman_urdu: 'Webpage ko mobile, tablet aur computer har screen par fit banana: flex, justify-between, items-center, grid grid-cols-1 md:grid-cols-3.',
          english: 'Make webpages look great across all screens with CSS Flexbox and responsive multi-column CSS Grid.',
          urdu: 'موبائل اور لیپ ٹاپ دونوں کے لیے فلیکس باکس اور گرڈ لے آؤٹ۔'
        },
        durationMinutes: 60,
        lessonId: 'lesson-24-responsive-layouts',
        tasks: {
          roman_urdu: [
            'Module 24: Flexbox aur Grid ke usool samjhein',
            'Web Studio mein Mobile (375px) aur Desktop view toggle karein',
            '3-Column features grid design karein jo mobile par 1-column ban jaye',
            'Navigation navbar responsive banayein'
          ],
          english: [
            'Study Module 24 on Flexbox and Grid layouts',
            'Toggle between Mobile and Desktop viewport in Web Studio',
            'Build a 3-column responsive pricing or features grid',
            'Test responsive flex navbar behavior'
          ],
          urdu: [
            'ماڈیول 24 کا مطالعہ کریں',
            'ریسپانسو گرڈ اور مینو بنائیں'
          ]
        }
      },
      {
        dayNumber: 3,
        title: {
          roman_urdu: 'Din 3: Python Web Backend (FastAPI & REST APIs)',
          english: 'Day 3: Python Web Backend (FastAPI & REST APIs)',
          urdu: 'تیسرا دن: پائتھن ویب بیک اینڈ اور فاسٹ اے پی آئی'
        },
        description: {
          roman_urdu: 'Python se web server chalana: @app.get(), @app.post(), JSON data serve karna, aur client ki requests handle karna.',
          english: 'Build high-performance web servers with Python FastAPI, handle HTTP routes, and return JSON responses.',
          urdu: 'پائتھن کے ذریعے سرور اور اے پی آئی روٹس بنانا۔'
        },
        durationMinutes: 60,
        lessonId: 'lesson-25-python-fastapi-backend',
        tasks: {
          roman_urdu: [
            'Module 25: FastAPI aur REST APIs ka taaruf parhein',
            'JSON response structure (dict to json) ka concept pakka karein',
            'Web Studio ke Python Backend tab mein endpoint test karein',
            'Calculate GPA ya invoice API route design karein'
          ],
          english: [
            'Read Module 25 on modern Python web backends',
            'Understand JSON serialization and API response payloads',
            'Inspect Python endpoint logic in Web Studio backend tab',
            'Design a calculate GPA or billing API route'
          ],
          urdu: [
            'ماڈیول 25 پڑھیں',
            'پائتھن اے پی آئی اینڈ پوائنٹ تیار کریں'
          ]
        }
      },
      {
        dayNumber: 4,
        title: {
          roman_urdu: 'Din 4: Frontend & Python Backend Connect Karna',
          english: 'Day 4: Connecting Frontend UI to Python Backend',
          urdu: 'چوتھا دن: فرنٹ اینڈ اور بیک اینڈ کو باہم جوڑنا'
        },
        description: {
          roman_urdu: 'HTML buttons aur input forms ko JavaScript fetch() ke zariye Python backend se connect karna aur live screen update karna.',
          english: 'Bridge UI buttons and forms to Python API endpoints using fetch() and update DOM elements dynamically without reloading.',
          urdu: 'فارم اور بٹن کے ذریعے پائتھن سرور کو کال کرنا اور ڈیٹا دکھانا۔'
        },
        durationMinutes: 60,
        lessonId: 'lesson-26-fullstack-web-apps',
        tasks: {
          roman_urdu: [
            'Module 26: fetch() aur async/await ka tareeqa samjhein',
            'Web Studio mein Student GPA Calculator template load karein',
            'Input fields mein numbers daal kar live calculate button dabayein',
            'Result card animation aur instant feedback test karein'
          ],
          english: [
            'Master fetch() and async/await in Module 26',
            'Load the Student GPA Calculator template in Web Studio',
            'Submit user input and watch dynamic calculations render live',
            'Inspect data exchange between frontend and backend'
          ],
          urdu: [
            'ماڈیول 26 پڑھیں',
            'طلباء کا جی پی اے کیلکولیٹر ایپ چلائیں'
          ]
        }
      },
      {
        dayNumber: 5,
        title: {
          roman_urdu: 'Din 5: E-Commerce Storefront & Cart Web App',
          english: 'Day 5: E-Commerce Storefront & Cart Web App',
          urdu: 'پانچواں دن: ای کامرس اسٹور اور شاپنگ کارٹ'
        },
        description: {
          roman_urdu: 'Professional online store ka webpage: Product cards, filter category, cart drawer, aur total bill calculation.',
          english: 'Build an e-commerce storefront with product cards, category filters, interactive cart drawer, and live total calculation.',
          urdu: 'پروڈکٹ کارڈز، فلٹرز اور شاپنگ کارٹ کا ویب پیج ڈیزائن کریں۔'
        },
        durationMinutes: 60,
        lessonId: 'lesson-24-responsive-layouts',
        tasks: {
          roman_urdu: [
            'Web Studio mein Storefront template load karein',
            'Products add to cart karein aur total price update dekhein',
            'Checkout button par thank you modal display karein',
            'Google Drive par project save karein'
          ],
          english: [
            'Load the Storefront template in Web Studio',
            'Test add-to-cart logic and reactive total computation',
            'Implement an order confirmation dialog',
            'Export code and save to Google Drive'
          ],
          urdu: [
            'ای کامرس ٹیمپلیٹ لوڈ کریں',
            'شاپنگ کارٹ کا تجربہ کریں'
          ]
        }
      },
      {
        dayNumber: 6,
        title: {
          roman_urdu: 'Din 6: Web App Ko Cloud & Internet Par Live Karna',
          english: 'Day 6: Cloud Deployment & Going Live',
          urdu: 'چھٹا دن: ایپ کو انٹرنیٹ پر لائیو اور ڈپلائے کرنا'
        },
        description: {
          roman_urdu: 'Apni web app ko dunya ke samne pesh karna: Cloud Run, Vercel, Render, domain setup, aur HTTPS security.',
          english: 'Deploy your Python web applications to Google Cloud Run, Vercel, or Render with custom domains and SSL encryption.',
          urdu: 'کلاؤڈ رن یا رینڈر پر ویب ایپ کو انٹرنیٹ پر لائیو کریں۔'
        },
        durationMinutes: 60,
        lessonId: 'lesson-27-web-app-deployment',
        tasks: {
          roman_urdu: [
            'Module 27: Docker container aur Cloud Run deployment steps samjhein',
            'requirements.txt aur Procfile ka role zehen-nasheen karein',
            'Free cloud hosting platforms (Cloud Run, Render, Vercel) ka mawazna karein',
            'Production checklist verify karein'
          ],
          english: [
            'Study containerization and Cloud Run hosting in Module 27',
            'Understand requirements.txt and server entry points',
            'Compare free cloud hosting providers (Cloud Run, Render, Vercel)',
            'Review production security and deployment checklist'
          ],
          urdu: [
            'ماڈیول 27 کا مطالعہ کریں',
            'کلاؤڈ ڈپلائمنٹ کے مراحل سیکھیں'
          ]
        }
      },
      {
        dayNumber: 7,
        title: {
          roman_urdu: 'Din 7: Professional Capstone Project (Full Web App)',
          english: 'Day 7: Professional Capstone Web App Showcase',
          urdu: 'ساتواں دن: کیپ اسٹون مکمل ویب ایپلی کیشن پروجیکٹ'
        },
        description: {
          roman_urdu: 'Apna khud ka original webpage ya web app banayein, Google Drive par save karein, aur doston ke sath link share karein!',
          english: 'Build your own custom web application from scratch in Web Studio, save it to Google Drive, and share your live creation!',
          urdu: 'اپنی خود کی مکمل ویب سائٹ بنائیں اور گوگل ڈرائیو پر محفوظ کریں۔'
        },
        durationMinutes: 75,
        lessonId: 'lesson-26-fullstack-web-apps',
        tasks: {
          roman_urdu: [
            'Web Studio mein apna custom web design banayein',
            'Python API backend ke sath interact karwayein',
            'Responsive mobile preview check karein',
            'Download HTML karein ya Workspace Hub se Google Drive par backup lein',
            'Course completion certificate hasil karein 🎓'
          ],
          english: [
            'Build your original web app layout in Web Studio',
            'Connect frontend inputs with Python API calculations',
            'Verify responsive behavior on mobile and desktop viewports',
            'Export HTML or save to Google Drive via Workspace Hub',
            'Claim your course completion certificate 🎓'
          ],
          urdu: [
            'اپنی مکمل ویب ایپ ڈیزائن کریں',
            'ڈرائیو پر محفوظ کر کے شیئر کریں'
          ]
        }
      }
    ]
  }
];
