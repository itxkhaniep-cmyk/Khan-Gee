export interface Day1ExamQuestion {
  id: string;
  questionNumber: number;
  marks: number;
  category: string;
  difficulty: 'Aasan (Easy)' | 'Darmiyana (Medium)' | 'Mushkil (Hard)';
  title: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  writtenSheet: {
    scenario: {
      roman_urdu: string;
      english: string;
      urdu: string;
    };
    requirements: {
      roman_urdu: string[];
      english: string[];
      urdu: string[];
    };
    sampleOutput: string;
    rules: {
      roman_urdu: string[];
      english: string[];
      urdu: string[];
    };
  };
  starterCode: string;
  solutionCode: string;
  hints: {
    roman_urdu: string[];
    english: string[];
    urdu: string[];
  };
  expectedPatterns: {
    description: string;
    pattern: string | RegExp;
  }[];
}

export const day1ExamsData: Day1ExamQuestion[] = [
  {
    id: 'exam-1-bio-card',
    questionNumber: 1,
    marks: 10,
    category: 'Basic Output & print()',
    difficulty: 'Aasan (Easy)',
    title: {
      roman_urdu: 'Exam 1: Student Profile Bio-Card',
      english: 'Exam 1: Student Profile Bio-Card',
      urdu: 'امتحان 1: طالب علم کا پروفائل کارڈ'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Aapko ek Python script likhni hai jo terminal par ek saaf aur khubsurat Student Bio-Card print kare. Card ke upar aur niche double line border ("====================") honi chahiye.',
        english: 'Write a Python script that prints a clean, formatted Student Profile Card with top and bottom divider lines ("====================").',
        urdu: 'ایک پائتھن اسکرپٹ لکھیں جو اسکرین پر طالب علم کا پروفائل کارڈ اور باؤنڈری لائنیں پرنٹ کرے۔'
      },
      requirements: {
        roman_urdu: [
          'Upar "====================" print karein (kam az kam 15 bar "=")',
          '"Name: Ali Khan" (ya apna naam) print karein',
          '"Role: Python Student" print karein',
          '"City: Lahore" (ya apna shehar) print karein',
          'Niche dobara "====================" print karein'
        ],
        english: [
          'Print top divider "====================" (at least 15 "=")',
          'Print "Name: Ali Khan" (or any student name)',
          'Print "Role: Python Student"',
          'Print "City: Lahore" (or any city)',
          'Print bottom divider "===================="'
        ],
        urdu: [
          'اوپر اور نیچے بارڈر لائن پرنٹ کریں',
          'نام، رول اور شہر کی تفصیلات پرنٹ کریں'
        ]
      },
      sampleOutput: `====================\nName: Ali Khan\nRole: Python Student\nCity: Lahore\n====================`,
      rules: {
        roman_urdu: [
          'print() function ka sahi syntax istemal karein',
          'Har maloomat nayi line par aani chahiye'
        ],
        english: [
          'Use valid print() statements',
          'Each piece of info must be on a new line'
        ],
        urdu: ['ہر سطر پرنٹ فنکشن کے ذریعے دکھائیں']
      }
    },
    starterCode: `# Exam 1: Student Profile Bio-Card
# Yahan apna code likhein:

`,
    solutionCode: `print("====================")
print("Name: Ali Khan")
print("Role: Python Student")
print("City: Lahore")
print("====================")`,
    hints: {
      roman_urdu: [
        '5 alag alag print() statements likhein.',
        'Strings ko double quotes "..." ya single quotes \'...\' mein band karein.'
      ],
      english: [
        'Use 5 separate print() statements.',
        'Wrap strings in matching quotes.'
      ],
      urdu: ['پانچ پرنٹ بیانات کا استعمال کریں۔']
    },
    expectedPatterns: [
      { description: 'Divider line present', pattern: /={10,}/ },
      { description: 'Name field present', pattern: /name:/i },
      { description: 'Role or Student present', pattern: /(role|student)/i },
      { description: 'City field present', pattern: /city:/i }
    ]
  },
  {
    id: 'exam-2-supermarket-receipt',
    questionNumber: 2,
    marks: 10,
    category: 'Escape Characters (\\n, \\t)',
    difficulty: 'Aasan (Easy)',
    title: {
      roman_urdu: 'Exam 2: Supermarket Cash Bill Receipt',
      english: 'Exam 2: Supermarket Cash Bill Receipt',
      urdu: 'امتحان 2: سپر مارکیٹ کیش رسید'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Ek retail store ka computerized bill print karein jisme kam az kam 3 items (Milk, Bread, Eggs) aur unki prices aligned columns mein hon, aur aakhir mein "Total: 500" print ho.',
        english: 'Print a retail store cash receipt with at least 3 items (Milk, Bread, Eggs) with prices, and the grand total.',
        urdu: 'ایک سپر مارکیٹ کی رسید پرنٹ کریں جس میں اشیاء کی قیمتیں اور کل رقم شامل ہو۔'
      },
      requirements: {
        roman_urdu: [
          'Header mein "--- AL-MADINA STORE ---" print karein',
          'Kam az kam 3 items aur unki qeematein print karein (maslan Milk 200, Bread 150, Eggs 150)',
          'Divider line "----------------------" print karein',
          '"Total: 500" (ya aapka jama shuda total) print karein',
          'Aakhri line par "Thank you for shopping!" print karein'
        ],
        english: [
          'Print store header: "--- AL-MADINA STORE ---"',
          'Print 3 items with prices (e.g. Milk: 200, Bread: 150, Eggs: 150)',
          'Print divider line "----------------------"',
          'Print "Total: 500" (or your sum)',
          'Print closing message "Thank you for shopping!"'
        ],
        urdu: [
          'دکان کا نام، تین اشیاء کی قیمتیں، کل ٹوٹل اور شکریہ کا پیغام پرنٹ کریں۔'
        ]
      },
      sampleOutput: `--- AL-MADINA STORE ---\nMilk: 200\nBread: 150\nEggs: 150\n----------------------\nTotal: 500\nThank you for shopping!`,
      rules: {
        roman_urdu: [
          'Aap chahein to \\n ya \\t ka istemal kar sakte hain',
          'Output parhney mein saaf aur seedhi honi chahiye'
        ],
        english: [
          'You may use \\n or \\t for neat spacing',
          'Output must be clearly legible and structured'
        ],
        urdu: ['صاف اور واضح رسید پرنٹ کریں']
      }
    },
    starterCode: `# Exam 2: Supermarket Cash Bill Receipt
# Yahan receipt print karne ka code likhein:

`,
    solutionCode: `print("--- AL-MADINA STORE ---")
print("Milk:\\t200")
print("Bread:\\t150")
print("Eggs:\\t150")
print("----------------------")
print("Total:\\t500")
print("Thank you for shopping!")`,
    hints: {
      roman_urdu: [
        '\\t se columns barabar space par aate hain.',
        'Aap ek hi print("Line 1\\nLine 2\\nLine 3") se bhi kar sakte hain ya alag alag print se.'
      ],
      english: [
        '\\t creates neat tab spacing between item name and price.',
        'You can use separate print() or a single multiline print.'
      ],
      urdu: ['ٹیب اور نئی لائن کے حروف کا استعمال کر سکتے ہیں۔']
    },
    expectedPatterns: [
      { description: 'Store header present', pattern: /(store|market|shop)/i },
      { description: 'Items listed', pattern: /(milk|bread|eggs|item)/i },
      { description: 'Total line present', pattern: /total:\s*\d+/i },
      { description: 'Thank you message', pattern: /thank\s*you/i }
    ]
  },
  {
    id: 'exam-3-quotes-dialogue',
    questionNumber: 3,
    marks: 10,
    category: 'Quotes & Syntax Discipline',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 3: Dialogue With Inner Quotes',
      english: 'Exam 3: Dialogue With Inner Quotes',
      urdu: 'امتحان 3: مکالمہ اور کوٹیشن مارکس'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Python mein jab string ke andar double quotes (") ya apostrophe (\') aa jaye to aam tor par SyntaxError aa jata hai. Aapko Guido van Rossum ka dialogue bilkul sahi print karna hai.',
        english: 'In Python, printing double quotes inside a string often causes SyntaxError if not handled properly. Print the quote accurately without errors.',
        urdu: 'پائتھن میں کوٹیشن کے اندر کوٹیشن مارکس پرنٹ کرنے کا امتحان۔'
      },
      requirements: {
        roman_urdu: [
          'Yeh jumla print karein: Teacher said, "Python is easy to learn!"',
          'Agli line par yeh print karein: Student replied, "It\'s truly amazing!"',
          'Dono lines mein double quotes aur apostrophe sahi display hone chahiye'
        ],
        english: [
          'Print line 1: Teacher said, "Python is easy to learn!"',
          'Print line 2: Student replied, "It\'s truly amazing!"',
          'Double quotes and apostrophe must render exactly as shown'
        ],
        urdu: [
          'دونوں مکالمے کوٹیشن مارکس کے ساتھ بغیر ایرر پرنٹ کریں۔'
        ]
      },
      sampleOutput: `Teacher said, "Python is easy to learn!"\nStudent replied, "It's truly amazing!"`,
      rules: {
        roman_urdu: [
          'Koi SyntaxError nahi aana chahiye',
          'Escape sequence \\" ya single/double quotes ka behtareen istemal karein'
        ],
        english: [
          'No SyntaxError allowed',
          'Use \\" escape or alternating quote boundaries'
        ],
        urdu: ['سنٹیکس ایرر نہیں آنا چاہیے']
      }
    },
    starterCode: `# Exam 3: Quotes Dialogue
# Yahan apna code likhein:

`,
    solutionCode: `print('Teacher said, "Python is easy to learn!"')
print('Student replied, "It\\'s truly amazing!"')`,
    hints: {
      roman_urdu: [
        'Agar bahar single quote \'...\' ho to andar "..." asani se likha ja sakta hai.',
        'Agar andar \' chahiye to \\\' likhein taake syntax crash na ho.'
      ],
      english: [
        'If you wrap string in single quotes \'...\', inner "..." works naturally.',
        'Use \\\' to escape apostrophe when needed.'
      ],
      urdu: ['ایسکیپ کیریکٹر بیک سلیش کا استعمال کریں۔']
    },
    expectedPatterns: [
      { description: 'Teacher quote with inner quotes', pattern: /Teacher said,\s*"Python is easy to learn!"/i },
      { description: 'Student quote with inner quotes', pattern: /Student replied,\s*"It'?s truly amazing!"/i }
    ]
  },
  {
    id: 'exam-4-ascii-art',
    questionNumber: 4,
    marks: 10,
    category: 'ASCII Art & Multiline Output',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 4: ASCII Robot Mascot',
      english: 'Exam 4: ASCII Robot Mascot',
      urdu: 'امتحان 4: کمپیوٹر روبوٹ آرٹ'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Python ke print statements se terminal par graphics aur ASCII art banti hai. Ek 4-line robot ya computer monitor draw karein.',
        english: 'Draw a 4-line terminal robot face or monitor using ASCII characters in Python.',
        urdu: 'پائتھن پرنٹ فنکشن کے ذریعے چار سطروں کا روبوٹ بنائیں'
      },
      requirements: {
        roman_urdu: [
          'Line 1: Robot ke kaan / antenna:   o   o',
          'Line 2: Robot ki aankhein:       [o . o]',
          'Line 3: Robot ka munh / body:    |  _  |',
          'Line 4: Robot ka base:           +-----+'
        ],
        english: [
          'Line 1: Antenna:   o   o',
          'Line 2: Eyes:    [o . o]',
          'Line 3: Mouth:   |  _  |',
          'Line 4: Base:    +-----+'
        ],
        urdu: [
          'چار سطروں کا منظم روبوٹ پرنٹ کریں۔'
        ]
      },
      sampleOutput: `  o   o\n [o . o]\n |  _  |\n +-----+`,
      rules: {
        roman_urdu: [
          'Har line mein spaces ka dhyan rakhein taake shakal seedhi lage',
          'Triple quotes """ ya 4 print() use karein'
        ],
        english: [
          'Maintain spacing so the face is aligned',
          'Use triple quotes or 4 print statements'
        ],
        urdu: ['اسپیسنگ کا خیال رکھیں']
      }
    },
    starterCode: `# Exam 4: ASCII Robot Mascot
# Yahan 4 lines ka robot print karein:

`,
    solutionCode: `print("  o   o")
print(" [o . o]")
print(" |  _  |")
print(" +-----+")`,
    hints: {
      roman_urdu: [
        'Aap triple quotes """...""" se pura multi-line art ek hi print mein bhi bana sakte hain!',
        'Check karein ke braces [] aur plus + sahi band hain.'
      ],
      english: [
        'You can use triple quotes """...""" to print multiple lines at once.',
        'Check that all brackets and signs align.'
      ],
      urdu: ['ٹرپل کوٹس کا استعمال بھی کیا جا سکتا ہے۔']
    },
    expectedPatterns: [
      { description: 'Antenna line', pattern: /o\s+o/ },
      { description: 'Face with eyes', pattern: /\[.*o.*\]/ },
      { description: 'Base line', pattern: /\+[-=]+\+/ }
    ]
  },
  {
    id: 'exam-5-sep-and-end',
    questionNumber: 5,
    marks: 10,
    category: 'print() sep & end Parameters',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 5: Custom Separator (sep) & Ending (end)',
      english: 'Exam 5: Custom Separator (sep) & Ending (end)',
      urdu: 'امتحان 5: پرنٹ پیرامیٹرز sep اور end'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'print() function ke do ahem jadui parameters hain: sep (values ke darmiyan separator) aur end (line ke aakhir mein kya aaye). Inka amli imtehan dein.',
        english: 'Test your understanding of print() parameters: sep (separator between arguments) and end (string appended at the end).',
        urdu: 'پرنٹ فنکشن کے خصوصی پیرامیٹرز sep اور end کی مشق کریں۔'
      },
      requirements: {
        roman_urdu: [
          'Pehle print() mein 4 shehron ke naam dein: "Karachi", "Lahore", "Islamabad", "Peshawar" aur sep=" -> " lagayein',
          'Doosre print() mein "Day 1" print karein lekin end=" : "\' lagayein taake agli line na bane',
          'Teesre print() mein "Passed Successfully!" print karein'
        ],
        english: [
          'Print 4 cities: "Karachi", "Lahore", "Islamabad", "Peshawar" using sep=" -> "',
          'Print "Day 1" with end=" : " so it stays on the same line',
          'Immediately print "Passed Successfully!" on the same line'
        ],
        urdu: [
          'شہروں کے درمیان تیر کا نشان لائیں اور آخری دو بیانات کو ایک سطر پر رکھیں۔'
        ]
      },
      sampleOutput: `Karachi -> Lahore -> Islamabad -> Peshawar\nDay 1 : Passed Successfully!`,
      rules: {
        roman_urdu: [
          'Code mein sep aur end parameters ka laazmi istemal hona chahiye'
        ],
        english: [
          'Code must explicitly use sep and end parameters'
        ],
        urdu: ['کوڈ میں sep اور end لازماً موجود ہوں']
      }
    },
    starterCode: `# Exam 5: sep & end Parameters
# Yahan sep=" -> " aur end=" : " ka code likhein:

`,
    solutionCode: `print("Karachi", "Lahore", "Islamabad", "Peshawar", sep=" -> ")
print("Day 1", end=" : ")
print("Passed Successfully!")`,
    hints: {
      roman_urdu: [
        'print("A", "B", sep=" -> ") likhein.',
        'end=" : " lagane se Python newline character \\n nahi lagata.'
      ],
      english: [
        'Write print("Karachi", "Lahore", ..., sep=" -> ").',
        'Using end=" : " prevents the default newline.'
      ],
      urdu: ['پہلے بیان میں sep اور دوسرے میں end شامل کریں۔']
    },
    expectedPatterns: [
      { description: 'Arrow separator output', pattern: /Karachi\s*->\s*Lahore\s*->\s*Islamabad\s*->\s*Peshawar/i },
      { description: 'Same line joined output', pattern: /Day 1\s*:\s*Passed Successfully!/i }
    ]
  },
  {
    id: 'exam-6-math-in-print',
    questionNumber: 6,
    marks: 10,
    category: 'Math Expressions Inside print()',
    difficulty: 'Aasan (Easy)',
    title: {
      roman_urdu: 'Exam 6: Room Area & Perimeter Calculator',
      english: 'Exam 6: Room Area & Perimeter Calculator',
      urdu: 'امتحان 6: رقبہ اور احاطہ کا حساب'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Ek kamre ki lambai (Length = 12 meters) aur chorai (Width = 8 meters) hai. Python se direct hisab kitab karwayein aur natija screen par print karein.',
        english: 'A room has Length = 12 meters and Width = 8 meters. Calculate and print the Area and Perimeter.',
        urdu: 'کمرے کی لمبائی 12 اور چوڑائی 8 ہے۔ رقبہ اور احاطہ پرنٹ کریں۔'
      },
      requirements: {
        roman_urdu: [
          '"Room Dimensions: 12m by 8m" print karein',
          '"Area: 96 sq meters" print karein (12 * 8 ka result)',
          '"Perimeter: 40 meters" print karein (2 * (12 + 8) ka result)'
        ],
        english: [
          'Print "Room Dimensions: 12m by 8m"',
          'Print "Area: 96 sq meters" (result of 12 * 8)',
          'Print "Perimeter: 40 meters" (result of 2 * (12 + 8))'
        ],
        urdu: [
          'رقبہ (96) اور احاطہ (40) پرنٹ کریں۔'
        ]
      },
      sampleOutput: `Room Dimensions: 12m by 8m\nArea: 96 sq meters\nPerimeter: 40 meters`,
      rules: {
        roman_urdu: [
          'Direct print() ke andar 12 * 8 aur 2 * (12 + 8) hisab karein ya variables use karein',
          'Output mein 96 aur 40 aana chahiye'
        ],
        english: [
          'Calculate math in print or via variables',
          'Output must contain 96 and 40'
        ],
        urdu: ['حساب کتاب درست ہونا چاہیے۔']
      }
    },
    starterCode: `# Exam 6: Room Area & Perimeter Calculator
length = 12
width = 8

# Yahan calculations aur print statements likhein:

`,
    solutionCode: `length = 12
width = 8
area = length * width
perimeter = 2 * (length + width)

print("Room Dimensions: 12m by 8m")
print("Area:", area, "sq meters")
print("Perimeter:", perimeter, "meters")`,
    hints: {
      roman_urdu: [
        'Area = length * width hota hai.',
        'Perimeter = 2 * (length + width) hota hai.',
        'print("Area:", length * width, "sq meters") bhi likh sakte hain.'
      ],
      english: [
        'Area is length * width.',
        'Perimeter is 2 * (length + width).',
        'You can pass calculations directly to print().'
      ],
      urdu: ['ضرب اور جمع کے نشانات استعمال کریں۔']
    },
    expectedPatterns: [
      { description: 'Dimensions line', pattern: /12m\s+by\s+8m/i },
      { description: 'Area 96 sq meters', pattern: /area:\s*96(\s*sq\s*meters)?/i },
      { description: 'Perimeter 40 meters', pattern: /perimeter:\s*40(\s*meters)?/i }
    ]
  },
  {
    id: 'exam-7-error-doctor',
    questionNumber: 7,
    marks: 10,
    category: 'Debugging & Error Correction',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 7: Syntax Error Detective (5 Broken Lines)',
      english: 'Exam 7: Syntax Error Detective (5 Broken Lines)',
      urdu: 'امتحان 7: سنٹیکس کی غلطیاں درست کریں'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Niche diye gaye starter code mein 4 aisi lines hain jinme beginners ki aam galtiyan hain (Capital "Print", mismatched quotes, missing parenthesis). In galtiyon ko theek karein taake program baghair crash huye chale.',
        english: 'The starter code has 4 broken lines with common beginner mistakes (Capital Print, mismatched quotes, missing closing bracket). Fix all errors so it executes cleanly.',
        urdu: 'غلطیوں سے بھرا کوڈ درست کریں تاکہ پروگرام بغیر رکاوٹ چلے۔'
      },
      requirements: {
        roman_urdu: [
          'Line 1 theek karein: Print("Hello World") -> Capital P theek karein',
          'Line 2 theek karein: print("Python is cool\') -> Quotes match karein',
          'Line 3 theek karein: print("Learning every day" -> Akhri bracket ) lagayein',
          'Line 4 theek karein: print("I love coding!") sahi print ho',
          'Program successfully execute hona chahiye'
        ],
        english: [
          'Fix Line 1: Change Print(...) to lowercase print(...)',
          'Fix Line 2: Match double quotes',
          'Fix Line 3: Add missing closing parenthesis )',
          'Ensure Line 4 runs cleanly'
        ],
        urdu: [
          'کیپٹل پرنٹ، کوٹس اور بریکٹ کی غلطیاں درست کریں۔'
        ]
      },
      sampleOutput: `Hello World\nPython is cool\nLearning every day\nI love coding!`,
      rules: {
        roman_urdu: [
          'Terminal mein koi bhi SyntaxError ya NameError nahi aana chahiye'
        ],
        english: [
          'Zero runtime errors or syntax errors'
        ],
        urdu: ['کوئی ایرر نہ آئے']
      }
    },
    starterCode: `# Exam 7: Fix the 4 broken lines below!
Print("Hello World")
print("Python is cool')
print("Learning every day"
print("I love coding!")
`,
    solutionCode: `print("Hello World")
print("Python is cool")
print("Learning every day")
print("I love coding!")`,
    hints: {
      roman_urdu: [
        'Python case-sensitive hai, is liye "print" hamesha lowercase mein hota hai.',
        'Shuru mein " ho to aakhir mein bhi " hona chahiye.',
        'Har shuru hone wali bracket ( ka band hona ) laazmi hai.'
      ],
      english: [
        'Python is case sensitive: use lowercase print.',
        'Quotes must match: start with " and end with ".',
        'Every open parenthesis must have a closing parenthesis.'
      ],
      urdu: ['حروف کی ترتیب اور بریکٹس کا خیال رکھیں۔']
    },
    expectedPatterns: [
      { description: 'Hello World', pattern: /Hello World/i },
      { description: 'Python is cool', pattern: /Python is cool/i },
      { description: 'Learning every day', pattern: /Learning every day/i },
      { description: 'I love coding', pattern: /I love coding!/i }
    ]
  },
  {
    id: 'exam-8-student-marksheet',
    questionNumber: 8,
    marks: 10,
    category: 'Variables & Math Operations',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 8: Student Marksheet & Percentage',
      english: 'Exam 8: Student Marksheet & Percentage',
      urdu: 'امتحان 8: رزلٹ کارڈ اور فیصد'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Variables ka istemal karte huye ek student ka Marksheet Report Card banayein. 3 mazameen ke marks variables mein store karein, unka Total aur Average (Percentage) calculate karein aur print karein.',
        english: 'Create a student marksheet report card using variables. Store marks for 3 subjects, compute total and percentage, and display.',
        urdu: 'ویری ایبلز کا استعمال کرتے ہوئے تین مضامین کے نمبر اور فیصد پرنٹ کریں۔'
      },
      requirements: {
        roman_urdu: [
          'Student name variable: student_name = "Zainab"',
          'Marks variables: math = 80, science = 90, english = 70',
          'total = math + science + english',
          'percentage = total / 3',
          'Report card print karein jisme Total: 240 aur Percentage: 80.0 saaf dikhe'
        ],
        english: [
          'Variable student_name = "Zainab" (or any name)',
          'Subject marks: math = 80, science = 90, english = 70',
          'Compute total and percentage',
          'Print report card showing Total: 240 and Percentage: 80.0'
        ],
        urdu: [
          'طالب علم کا نام، ٹوٹل 240 اور فیصد 80 پرنٹ کریں۔'
        ]
      },
      sampleOutput: `--- STUDENT MARKSHEET ---\nStudent: Zainab\nMath: 80 | Science: 90 | English: 70\nTotal Marks: 240 / 300\nPercentage: 80.0%\nStatus: PASSED`,
      rules: {
        roman_urdu: [
          'Calculations manually likhne ke bajaye variables aur formula se karein'
        ],
        english: [
          'Use variables and formulas rather than hardcoding results'
        ],
        urdu: ['ویری ایبلز کا استعمال لازمی ہے']
      }
    },
    starterCode: `# Exam 8: Student Marksheet & Percentage
student_name = "Zainab"
math = 80
science = 90
english = 70

# Yahan total, percentage aur report card print karein:

`,
    solutionCode: `student_name = "Zainab"
math = 80
science = 90
english = 70

total = math + science + english
percentage = total / 3

print("--- STUDENT MARKSHEET ---")
print("Student:", student_name)
print("Math:", math, "| Science:", science, "| English:", english)
print("Total Marks:", total, "/ 300")
print("Percentage:", percentage, "%")
print("Status: PASSED")`,
    hints: {
      roman_urdu: [
        'total = math + science + english',
        'percentage = total / 3 ya (total / 300) * 100',
        'print mein comma lagane se automatically space aati hai.'
      ],
      english: [
        'total = math + science + english',
        'percentage = total / 3',
        'Commas in print() automatically separate with spaces.'
      ],
      urdu: ['ٹوٹل اور فیصد کا فارمولا استعمال کریں۔']
    },
    expectedPatterns: [
      { description: 'Total 240 present', pattern: /240/ },
      { description: 'Percentage 80.0 present', pattern: /80(\.0)?\s*%/i },
      { description: 'Passed status present', pattern: /pass(ed)?/i }
    ]
  },
  {
    id: 'exam-9-currency-converter',
    questionNumber: 9,
    marks: 10,
    category: 'Float Calculations & Formatted String',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 9: Currency Converter (USD to PKR)',
      english: 'Exam 9: Currency Converter (USD to PKR)',
      urdu: 'امتحان 9: کرنسی کنورٹر (ڈالر تا روپے)'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Ek bank ya money exchange system ka conversion slip banayein. Agar 1 USD = 280 PKR ho, to $75 USD kitne Pakistani Rupees baneinge? Formula se calculate karke print karein.',
        english: 'Build an exchange slip. If 1 USD = 280 PKR, calculate how much $75 USD is in PKR using Python formulas.',
        urdu: '75 ڈالرز کو 280 کے ریٹ پر پاکستانی روپے میں تبدیل کر کے رسید پرنٹ کریں۔'
      },
      requirements: {
        roman_urdu: [
          'Variable usd = 75 aur exchange_rate = 280 banayein',
          'pkr_amount = usd * exchange_rate calculate karein',
          '"EXCHANGE RECEIPT" header print karein',
          '"Amount in USD: $75" print karein',
          '"Conversion Rate: 280 PKR" print karein',
          '"Total in PKR: 21000 PKR" print karein'
        ],
        english: [
          'Set usd = 75 and exchange_rate = 280',
          'Calculate pkr_amount = usd * exchange_rate',
          'Print receipt with amount, rate, and total 21000 PKR'
        ],
        urdu: [
          '75 ڈالرز اور کل رقم 21000 روپے پرنٹ کریں۔'
        ]
      },
      sampleOutput: `=== EXCHANGE RECEIPT ===\nAmount in USD: $75\nExchange Rate: 280 PKR\nTotal in PKR: 21000 PKR\nStatus: Converted Successfully`,
      rules: {
        roman_urdu: [
          '21000 ka hisab multiply (*) se hona chahiye'
        ],
        english: [
          'Multiplication operator * must be used for conversion'
        ],
        urdu: ['ضرب کے فارمولے سے حساب کریں۔']
      }
    },
    starterCode: `# Exam 9: Currency Converter (USD to PKR)
usd = 75
exchange_rate = 280

# Yahan calculation aur receipt print karein:

`,
    solutionCode: `usd = 75
exchange_rate = 280
pkr_amount = usd * exchange_rate

print("=== EXCHANGE RECEIPT ===")
print("Amount in USD: $" + str(usd))
print("Exchange Rate:", exchange_rate, "PKR")
print("Total in PKR:", pkr_amount, "PKR")
print("Status: Converted Successfully")`,
    hints: {
      roman_urdu: [
        'pkr_amount = usd * exchange_rate',
        'print("Total in PKR:", pkr_amount, "PKR") likhein.'
      ],
      english: [
        'Calculate pkr_amount = usd * exchange_rate',
        'Use print("Total in PKR:", pkr_amount, "PKR").'
      ],
      urdu: ['ضرب کا نشان استعمال کریں۔']
    },
    expectedPatterns: [
      { description: 'Receipt header', pattern: /EXCHANGE\s+RECEIPT/i },
      { description: 'USD amount 75', pattern: /75/ },
      { description: 'PKR total 21000', pattern: /21000/ }
    ]
  },
  {
    id: 'exam-10-capstone-system-boot',
    questionNumber: 10,
    marks: 10,
    category: 'Day 1 Final Capstone Master Project',
    difficulty: 'Mushkil (Hard)',
    title: {
      roman_urdu: 'Exam 10: PySeekho System Boot Banner (Capstone)',
      english: 'Exam 10: PySeekho System Boot Banner (Capstone)',
      urdu: 'امتحان 10: سسٹم بوٹ اسکرین (حتمی پروجیکٹ)'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Yeh Day 1 ka aakhri aur sab se ahem imtehan hai! Aapko ek complete 7-line System Boot Screen banani hai jo Python terminal par system start hone ki maloomat de. Isme dividers, escape sequences, aur variables sab ka murakkab shamil hoga.',
        english: 'The Day 1 Final Capstone exam! Build a complete 7-line System Boot Console that welcomes users with clean borders, software versions, and status indicators.',
        urdu: 'پہلے دن کا حتمی امتحان: مکمل سسٹم بوٹ اسکرین پرنٹ کریں۔'
      },
      requirements: {
        roman_urdu: [
          'Line 1: Border line: "########################################"',
          'Line 2: Title: "#  PySeekho Python Engine v1.0         #"',
          'Line 3: Subtitle: "#  Status: ONLINE | Mode: LEARNING     #"',
          'Line 4: Border line: "########################################"',
          'Line 5: Welcome line with student name (maslan: "Welcome Cadet: Bilal!")',
          'Line 6: Tabbed info line: "\\t* Day 1 Exams Completed: 10/10"',
          'Line 7: Ready line: "System Ready! Ready for Day 2 adventures."'
        ],
        english: [
          'Line 1: Border line: "########################################"',
          'Line 2: Title: "#  PySeekho Python Engine v1.0         #"',
          'Line 3: Subtitle: "#  Status: ONLINE | Mode: LEARNING     #"',
          'Line 4: Border line: "########################################"',
          'Line 5: Welcome greeting with student name',
          'Line 6: Indented/tabbed status line',
          'Line 7: Closing ready message: "System Ready!"'
        ],
        urdu: [
          'سات سطروں پر مشتمل بوٹ اسکرین بارڈرز اور نام کے ساتھ پرنٹ کریں۔'
        ]
      },
      sampleOutput: `########################################\n#  PySeekho Python Engine v1.0         #\n#  Status: ONLINE | Mode: LEARNING     #\n########################################\nWelcome Cadet: Bilal!\n\t* Day 1 Exams Completed: 10/10\nSystem Ready! Ready for Day 2 adventures.`,
      rules: {
        roman_urdu: [
          'Poora boot message professional aur clean lagna chahiye',
          'Comments (#) ka istemal karke code samjhayein'
        ],
        english: [
          'Output must look professional and well structured',
          'Include code comments explaining the sections'
        ],
        urdu: ['صاف اور مکمل اسکرین تیار کریں']
      }
    },
    starterCode: `# Exam 10: PySeekho System Boot Banner (Day 1 Capstone)
# Student ka naam ek variable mein rakhein:
student = "Bilal"

# Yahan 7-line system boot console banayein:

`,
    solutionCode: `# Exam 10: PySeekho System Boot Banner
student = "Bilal"

print("########################################")
print("#  PySeekho Python Engine v1.0         #")
print("#  Status: ONLINE | Mode: LEARNING     #")
print("########################################")
print("Welcome Cadet:", student + "!")
print("\\t* Day 1 Exams Completed: 10/10")
print("System Ready! Ready for Day 2 adventures.")`,
    hints: {
      roman_urdu: [
        'Hash # symbols ko border ke taur par use karein.',
        'student variable ko print mein pass karein.',
        '\\t se tab indentation dekar list item banayein.'
      ],
      english: [
        'Use # symbols for the top and bottom borders.',
        'Pass the student variable to the greeting line.',
        'Use \\t to create the tabbed bullet point.'
      ],
      urdu: ['ہیش سائنز اور ٹیب کیریکٹر کا استعمال کریں۔']
    },
    expectedPatterns: [
      { description: 'Hash borders', pattern: /#{15,}/ },
      { description: 'Engine title', pattern: /PySeekho Python Engine/i },
      { description: 'Status online', pattern: /ONLINE/i },
      { description: 'Welcome cadet greeting', pattern: /Welcome Cadet/i },
      { description: 'System Ready', pattern: /System Ready/i }
    ]
  }
];
