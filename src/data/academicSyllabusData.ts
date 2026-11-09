export interface CourseLearningOutcome {
  id: string;
  code: string;
  title: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  description: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  bloomLevel: string;
}

export interface SyllabusModuleUnit {
  unitCode: string;
  moduleIndex: number;
  lessonId: string;
  examDayNumber?: number;
  level: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  title: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  contactHours: {
    theoryHours: number;
    labHours: number;
    totalHours: number;
  };
  cloMapping: string[];
  theorySyllabus: {
    roman_urdu: string[];
    english: string[];
  };
  labPracticalSyllabus: {
    roman_urdu: string[];
    english: string[];
  };
  keyParametersAndSyntax: {
    name: string;
    description: string;
    defaultOrType: string;
  }[];
  assessmentMilestone: {
    type: string;
    target: string;
    marks: number;
  };
}

export interface AcademicSyllabusData {
  courseCode: string;
  courseTitle: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  academicDepartment: string;
  creditHours: string;
  prerequisites: string;
  totalModules: number;
  totalContactHours: number;
  passingCriteria: string;
  clos: CourseLearningOutcome[];
  gradingPolicy: {
    component: string;
    weight: string;
    description: string;
  }[];
  syllabusUnits: SyllabusModuleUnit[];
}

export const academicSyllabusData: AcademicSyllabusData = {
  courseCode: 'CS-101 / PY-2026',
  courseTitle: {
    roman_urdu: 'Complete Python Programming & Full-Stack Web Development',
    english: 'Complete Python Programming & Full-Stack Web Development',
    urdu: 'مکمل پائتھن پروگرامنگ اور فل اسٹیک ویب ڈویلپمنٹ'
  },
  academicDepartment: 'Department of Computer Science & Software Engineering - PySeekho Academy',
  creditHours: '4 Credit Hours (3 Theory + 1 Hands-on Lab Daily)',
  prerequisites: 'Zero (No Prior Programming Background Required - Fresh Students Welcome)',
  totalModules: 27,
  totalContactHours: 85,
  passingCriteria: 'Minimum 60% Overall Score (60/100 Marks in Daily Exams & Quizzes)',
  clos: [
    {
      id: 'clo-1',
      code: 'CLO-1',
      title: {
        roman_urdu: 'Core Syntactic & Algorithmic Foundations',
        english: 'Core Syntactic & Algorithmic Foundations',
        urdu: 'بنیادی سنٹیکس اور الگورتھمک لاجک'
      },
      description: {
        roman_urdu: 'Python syntax, print() statement with sep/end parameters, type casting, mathematical operators, and conditional branching (if/elif/else).',
        english: 'Master foundational Python syntax, I/O parameters, type conversions, arithmetic formulas, and branching control flow.',
        urdu: 'پائتھن کے بنیادی اصول، ان پٹ آؤٹ پٹ اور شرائط پر مکمل مہارت۔'
      },
      bloomLevel: 'Level 1-2 (Remember & Understand)'
    },
    {
      id: 'clo-2',
      code: 'CLO-2',
      title: {
        roman_urdu: 'Iterative Controls & Structured Collections',
        english: 'Iterative Controls & Structured Collections',
        urdu: 'لوپس اور ڈیٹا اسٹرکچرز'
      },
      description: {
        roman_urdu: 'for and while loops, break/continue controls, and data structures: Lists, Tuples, Sets, and Key-Value Dictionaries.',
        english: 'Implement loop control flows and manipulate core Python collections (Lists, Tuples, Sets, and Dictionaries).',
        urdu: 'فار اور وائل لوپس، لسٹس، ٹپلز اور ڈکشنری ڈیٹا اسٹرکچرز کا استعمال۔'
      },
      bloomLevel: 'Level 3 (Apply)'
    },
    {
      id: 'clo-3',
      code: 'CLO-3',
      title: {
        roman_urdu: 'Modular Functions & Error Resilience',
        english: 'Modular Functions & Error Resilience',
        urdu: 'فنکشنز اور ڈیفینسو کوڈنگ'
      },
      description: {
        roman_urdu: 'Writing reusable modular functions with def, parameters (*args, **kwargs), return values, and bulletproof error handling with try-except.',
        english: 'Design modular programs using functions, variable arguments, scope resolution, and exception handling.',
        urdu: 'فنکشنز کے ذریعے کوڈ کو منظم کرنا اور غلطیوں کا باحفاظت دفاع کرنا۔'
      },
      bloomLevel: 'Level 4 (Analyze)'
    },
    {
      id: 'clo-4',
      code: 'CLO-4',
      title: {
        roman_urdu: 'Advanced Data Wrangling & Automation',
        english: 'Advanced Data Wrangling & Automation',
        urdu: 'ایڈوانس ڈیٹا پروسیسنگ اور آٹومیشن'
      },
      description: {
        roman_urdu: 'Object-Oriented Programming (Classes/Objects), File handling, JSON/CSV parsing, and XML data pipelines.',
        english: 'Engineer production-grade pipelines for parsing files, serializing JSON, and automating real-world datasets.',
        urdu: 'او او پی، فائل ہینڈلنگ اور ڈیٹا پائپ لائنز بنانا۔'
      },
      bloomLevel: 'Level 5 (Evaluate)'
    },
    {
      id: 'clo-5',
      code: 'CLO-5',
      title: {
        roman_urdu: 'Professional Web Designing & Cloud Deployment',
        english: 'Professional Web Designing & Cloud Deployment',
        urdu: 'پروفیشنل ویب ڈیزائننگ اور کلاؤڈ ڈپلائمنٹ'
      },
      description: {
        roman_urdu: 'Semantic HTML5, Tailwind CSS modern layouts (Flexbox & Grid), Python FastAPI backend, REST APIs, and Google Cloud Run deployment.',
        english: 'Build full-stack web applications with modern frontend UI, connect to Python FastAPI APIs, and deploy to live cloud servers.',
        urdu: 'مکمل ویب سائٹس اور ایپس بنا کر انٹرنیٹ پر لائیو کرنا۔'
      },
      bloomLevel: 'Level 6 (Create)'
    }
  ],
  gradingPolicy: [
    {
      component: 'Daily Practical Written Exams (14 Days x 10 Qs = 140 Qs)',
      weight: '40%',
      description: 'Rozana ka 10-sawal wala practical exam jisme student scenario solve kar ke test cases pass karta hai.'
    },
    {
      component: 'Interactive Module Quizzes (22 Quizzes)',
      weight: '20%',
      description: 'Multiple choice conceptual questions covering syntax, memory models, and core logic.'
    },
    {
      component: 'Coding Playground Lab Challenges',
      weight: '15%',
      description: 'Algorithmic practice challenges with automated test suites in the Python runner.'
    },
    {
      component: 'Final Capstone & Web App Studio Project',
      weight: '25%',
      description: 'Full-stack enterprise Python pipeline and live deployed web application created in Web Studio.'
    }
  ],
  syllabusUnits: [
    // Semester / Quarter 1: Foundation (Modules 1 - 7)
    {
      unitCode: 'MOD-01',
      moduleIndex: 1,
      lessonId: 'lesson-1-intro-print',
      examDayNumber: 1,
      level: 'beginner',
      title: {
        roman_urdu: '1. Python Ka Taaruf & print() Function Masterclass',
        english: '1. Python Introduction & print() Function Masterclass',
        urdu: '1۔ پائتھن کا تعارف اور پرنٹ فنکشن کی مکمل مہارت'
      },
      contactHours: { theoryHours: 2, labHours: 1, totalHours: 3 },
      cloMapping: ['CLO-1'],
      theorySyllabus: {
        roman_urdu: [
          'Python ka taaruf, history aur modern applications (AI, Web, Automation)',
          'print() statement ka maqsad: Computer screen par text aur numbers display karna',
          'Quotation marks ka farq: Single quotes (\') vs Double quotes (")',
          'Math expressions inside print(): baghair quotes ke numbers calculate karna',
          'Comments (#): Computer kiyun ignore karta hai aur documentation kiyun zaroori hai',
          'sep Parameter (Separator): Default value " " (space) ko tabdeel karna (sep=" -> ")',
          'end Parameter (Ending Character): Default value "\\n" (newline) ko tabdeel kar ke agla print usi line mein jodna (end=" : ")'
        ],
        english: [
          'Introduction to Python language, execution model, and ecosystem',
          'Using the print() function for standard output streams',
          'Text strings vs numerical mathematical expressions',
          'Single-line comments (#) for clean documentation',
          'Overriding the sep parameter for custom delimiters between items',
          'Overriding the end parameter to preserve terminal cursor position'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Pehla "Assalam-o-Alaikum, Dunya!" program run karna',
          'Cities connection print karna: sep=" -> "',
          'Multi-line print statements ko aik line mein jodna: end=" : "',
          'Day 1 Practical Written Exam ke 10 Tasks hal karna (100 Marks)'
        ],
        english: [
          'Run first "Hello World" program in the integrated runner',
          'Format lists with custom arrow separators (sep=" -> ")',
          'Combine successive prints on a single terminal line with end parameter',
          'Complete Day 1 Exam Paper (10 written tasks, 100 marks)'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'print(*args)', description: 'Terminal console par text ya values display karta hai', defaultOrType: 'Built-in Function' },
        { name: 'sep=" "', description: 'Comma separated items ke beech ka symbol control karta hai', defaultOrType: 'Default: " " (Space)' },
        { name: 'end="\\n"', description: 'Print line ke aakhir mein aane wala character control karta hai', defaultOrType: 'Default: "\\n" (New Line)' }
      ],
      assessmentMilestone: { type: 'Daily Exam', target: 'Day 1 Exam (10 Questions)', marks: 100 }
    },
    {
      unitCode: 'MOD-02',
      moduleIndex: 2,
      lessonId: 'lesson-2-variables-types',
      examDayNumber: 2,
      level: 'beginner',
      title: {
        roman_urdu: '2. Variables, Core Data Types & Type Casting',
        english: '2. Variables, Core Data Types & Type Casting',
        urdu: '2۔ متغیرات، بنیادی ڈیٹا ٹائپس اور ٹائپ کاسٹنگ'
      },
      contactHours: { theoryHours: 2, labHours: 1, totalHours: 3 },
      cloMapping: ['CLO-1'],
      theorySyllabus: {
        roman_urdu: [
          'Variables ka concept: Computer memory (RAM) mein labeled dabbe',
          'Python dynamic typing: Type batane ki zaroorat nahi, Python khud samajhta hai',
          'Char bunyadi data types: int (integer), float (decimal), str (string), bool (boolean)',
          'Variable name likhne ke 4 sunahri usool (No spaces, no number starts, case-sensitivity)',
          'Type Casting functions: int(), float(), str() se string numbers ko number banana'
        ],
        english: [
          'Variable assignment model and memory allocation in RAM',
          'Dynamic type inference and type() introspection',
          'Primitive data types: int, float, str, bool',
          'Identifier naming rules and PEP-8 conventions (snake_case)',
          'Explicit type casting with int(), float(), and str()'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Age calculator program: birth_year aur current_year se age nikalna',
          'String number concatenation vs numeric addition test karna ("150" + "250" vs 400)',
          'Temperature converter formula: Celsius to Fahrenheit'
        ],
        english: [
          'Build an Age Calculator from birth and current year',
          'Demonstrate string concatenation versus numeric summation with type casting',
          'Implement temperature conversion challenge'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'int(val)', description: 'String ya float ko poore number mein convert karta hai', defaultOrType: 'Integer Class' },
        { name: 'float(val)', description: 'Ashariya wale number mein convert karta hai', defaultOrType: 'Float Class' },
        { name: 'str(val)', description: 'Kisi bhi value ko text mein convert karta hai', defaultOrType: 'String Class' },
        { name: 'bool(val)', description: 'True ya False boolean value deta hai', defaultOrType: 'Boolean Class' }
      ],
      assessmentMilestone: { type: 'Daily Exam', target: 'Day 2 Exam (10 Questions)', marks: 100 }
    },
    {
      unitCode: 'MOD-03',
      moduleIndex: 3,
      lessonId: 'lesson-3-operators-math',
      examDayNumber: 3,
      level: 'beginner',
      title: {
        roman_urdu: '3. Math, Modulo & Comparison Operators',
        english: '3. Math, Modulo & Comparison Operators',
        urdu: '3۔ حسابی، موڈیولو اور موازنہ کے آپریٹرز'
      },
      contactHours: { theoryHours: 2, labHours: 1, totalHours: 3 },
      cloMapping: ['CLO-1'],
      theorySyllabus: {
        roman_urdu: [
          'Basic arithmetic: +, -, *',
          'Division ka farq: Normal division (/) vs Floor division (//)',
          'Modulo Remainder (%): Taqseem ke baad bacha hua hissa aur Even/Odd logic',
          'Power operator (**): 2 ** 3 = 8',
          'Comparison operators: ==, !=, >, <, >=, <= aur inka True/False nateeja'
        ],
        english: [
          'Arithmetic evaluation order and operator precedence',
          'Floating-point true division (/) vs integer floor division (//)',
          'Modulus operator (%) for remainders and parity algorithms',
          'Exponentiation with **',
          'Relational equality and comparison operators returning booleans'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Even/Odd number tester (% 2 == 0)',
          'ATM currency note dispenser simulation (// aur % ka istemal)',
          'Day 3 Exam: 10 Practical Math Tasks hal karna'
        ],
        english: [
          'Implement even/odd parity detector',
          'Build ATM denomination calculator using // and %',
          'Complete Day 3 Exam on mathematical operators'
        ]
      },
      keyParametersAndSyntax: [
        { name: '//', description: 'Floor division: point ke baad ka hissa truncate karta hai', defaultOrType: 'Integer result' },
        { name: '%', description: 'Modulus: taqseem ke baad bacha hua remainder nikalta hai', defaultOrType: 'Remainder value' },
        { name: '==', description: 'Dono values barabar hain ya nahi check karta hai', defaultOrType: 'Boolean (True/False)' }
      ],
      assessmentMilestone: { type: 'Daily Exam', target: 'Day 3 Exam (10 Questions)', marks: 100 }
    },
    {
      unitCode: 'MOD-04',
      moduleIndex: 4,
      lessonId: 'lesson-4-conditionals-if-else',
      examDayNumber: 4,
      level: 'beginner',
      title: {
        roman_urdu: '4. Decision Making: if, elif, else & Indentation',
        english: '4. Decision Making: if, elif, else & Indentation',
        urdu: '4۔ فیصلے کرنا: if, elif, else اور انڈینٹیشن'
      },
      contactHours: { theoryHours: 2, labHours: 1, totalHours: 3 },
      cloMapping: ['CLO-1'],
      theorySyllabus: {
        roman_urdu: [
          'Conditional branching: Program ko shart ki bunyaad par rasta dikhana',
          'Indentation (4 Spaces) ki sakht pabandi aur colon (:) ka istemal',
          'elif (Else If) ka istemal aik se zyada checks ke liye',
          'else block: Jab koi shart sach na ho to aakhri rasta',
          'Nested if conditions: Condition ke andar doosri condition'
        ],
        english: [
          'Conditional execution flow with if, elif, and else statements',
          'Block structure enforcement through 4-space indentation and colon (:)',
          'Chaining multi-way decision trees',
          'Fallback default execution via else clauses',
          'Nested decision structures'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Student university grade calculator (Marks to A+, A, B, C, F)',
          'Cinema ticket pricing calculator based on age',
          'Day 4 Exam: 10 Branching Scenarios hal karna'
        ],
        english: [
          'Build university letter grade calculator',
          'Implement cinema ticketing pricing matrix',
          'Complete Day 4 Practical Exam'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'if condition:', description: 'Pehli shart check karta hai; sach ho to indent code chalata hai', defaultOrType: 'Keyword' },
        { name: 'elif condition:', description: 'Pehli galat hone par doosri shart check karta hai', defaultOrType: 'Keyword' },
        { name: 'else:', description: 'Agar koi bhi shart sach na ho to default code chalata hai', defaultOrType: 'Keyword' }
      ],
      assessmentMilestone: { type: 'Daily Exam', target: 'Day 4 Exam (10 Questions)', marks: 100 }
    },
    {
      unitCode: 'MOD-05',
      moduleIndex: 5,
      lessonId: 'lesson-5-loops',
      examDayNumber: 6,
      level: 'beginner',
      title: {
        roman_urdu: '5. Iteration: for Loops, while Loops & range()',
        english: '5. Iteration: for Loops, while Loops & range()',
        urdu: '5۔ تکرار: فار لوپ، وائل لوپ اور رینج'
      },
      contactHours: { theoryHours: 3, labHours: 1, totalHours: 4 },
      cloMapping: ['CLO-2'],
      theorySyllabus: {
        roman_urdu: [
          'Loops ka maqsad: Baghair code dohraye hazaron dafa kaam karwana',
          'for loop aur range(start, stop, step) ka mukammal istemal',
          'while loop: Shart sach rehne tak chalne wala loop',
          'break statement: Loop ko beech mein foran rokna',
          'continue statement: Agla step skip kar ke foran wapas upar jana',
          'Infinite loops se bachne ke usool (counter increment zaroori hai)'
        ],
        english: [
          'Looping paradigms: definite iteration (for) vs indefinite iteration (while)',
          'range() sequence generator: start, stop (exclusive), and step parameters',
          'Loop flow controls: break (immediate exit) and continue (skip iteration)',
          'Infinite loop hazards and termination condition invariants'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Paharay (Multiplication tables) generate karna (2 se 10 tak)',
          '1 se 100 tak tamam numbers ka sum nikalna',
          'ATM PIN security retry limit: 3 koshishon ke baad break lagana',
          'Prime number detector with loop'
        ],
        english: [
          'Generate dynamic math multiplication tables',
          'Compute accumulator sum from 1 to 100',
          'Simulate ATM PIN retry threshold with break',
          'Build prime number detection algorithm'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'range(start, stop, step)', description: 'Numbers ki tarteeb banata hai (stop shamil nahi hota)', defaultOrType: 'Sequence' },
        { name: 'break', description: 'Loop ko foran terminate kar ke bahar nikal deta hai', defaultOrType: 'Control Statement' },
        { name: 'continue', description: 'Maujooda iteration skip kar ke agli iteration par jata hai', defaultOrType: 'Control Statement' }
      ],
      assessmentMilestone: { type: 'Daily Exam', target: 'Day 6 & 7 Exams (20 Questions)', marks: 200 }
    },
    {
      unitCode: 'MOD-06',
      moduleIndex: 6,
      lessonId: 'lesson-6-lists-tuples',
      examDayNumber: 8,
      level: 'beginner',
      title: {
        roman_urdu: '6. Collections: Lists, Slicing & Operations',
        english: '6. Collections: Lists, Slicing & Operations',
        urdu: '6۔ فہرستیں (Lists)، سلائسنگ اور طریقے'
      },
      contactHours: { theoryHours: 2, labHours: 1, totalHours: 3 },
      cloMapping: ['CLO-2'],
      theorySyllabus: {
        roman_urdu: [
          'List ka dhancha: Square brackets [...] ke andar tarteeb se data rakhna',
          'Zero-based indexing: Pehla item [0], aakhri item [-1]',
          'List slicing [start:stop:step]: beech ke items nikalna aur list ulti karna [::-1]',
          'List methods: .append(), .insert(), .remove(), .pop(), .sort(), .count()',
          'Built-in functions: len(), sum(), min(), max()'
        ],
        english: [
          'List sequence data structure and zero-indexed ordering',
          'Positive and negative indexing conventions',
          'Slice syntax [start:stop:step] and reverse slicing [::-1]',
          'In-place mutation methods: append, insert, remove, pop, sort',
          'Sequence aggregations: len, min, max, sum'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Student marks analyzer: Highest, Lowest aur Average mark nikalna',
          'Gaming leaderboard sorter: Top 3 Gold, Silver, Bronze podium nikalna',
          'Grocery cart management: items add karna aur pop karna'
        ],
        english: [
          'Analyze student exam marks (max, min, avg)',
          'Sort gaming leaderboard and extract top 3 podium winners',
          'Implement cart queue management'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'list.append(x)', description: 'List ke bilkul aakhir mein naya item shamil karta hai', defaultOrType: 'Method' },
        { name: 'list.pop(index)', description: 'Specified index ka item nikaal kar return karta hai', defaultOrType: 'Method' },
        { name: 'list[::-1]', description: 'Poori list ko ulti tarteeb (reverse) mein badal deta hai', defaultOrType: 'Slice Syntax' }
      ],
      assessmentMilestone: { type: 'Daily Exam', target: 'Day 8 Exam (10 Questions)', marks: 100 }
    },
    {
      unitCode: 'MOD-07',
      moduleIndex: 7,
      lessonId: 'lesson-7-dictionaries',
      examDayNumber: 10,
      level: 'beginner',
      title: {
        roman_urdu: '7. Key-Value Mapping: Dictionaries & Lookup Records',
        english: '7. Key-Value Mapping: Dictionaries & Lookup Records',
        urdu: '7۔ لغت (Dictionaries) اور کی-ویلیو ڈیٹا'
      },
      contactHours: { theoryHours: 2, labHours: 1, totalHours: 3 },
      cloMapping: ['CLO-2'],
      theorySyllabus: {
        roman_urdu: [
          'Dictionary ka concept: Curly braces {...} mein key: value pairs',
          'Key se direct lookup: index number ke bajaye meaningful naam se data nikalna',
          '.get(key, default) ka safe tareeqa: KeyError crash se bachna',
          'Dictionary methods: .keys(), .values(), .items()',
          'Looping through dictionaries: for k, v in dict.items():',
          'Dictionary merging and nested dictionaries'
        ],
        english: [
          'Associative mapping structure with hash tables ({key: value})',
          'Key immutability requirements and O(1) average lookup complexity',
          'Safe element retrieval via dict.get(key, fallback) to prevent KeyError',
          'View objects: keys(), values(), and items()',
          'Dictionary iteration, nested records, and merging operators'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Student profile database with nested grades',
          'Word frequency counter: jumlay mein har lafz kitni dafa aaya',
          'Supermarket cashier system: prices aur quantities se bill aur tax calculate karna'
        ],
        english: [
          'Construct nested student profile database',
          'Build word frequency counting engine',
          'Develop supermarket itemized cashier receipt generator'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'dict.get(k, default)', description: 'Key dhoondta hai; agar na mile to default value deta hai (no crash)', defaultOrType: 'Safe Access Method' },
        { name: 'dict.items()', description: 'Loop ke liye key aur value dono ka joda return karta hai', defaultOrType: 'View Method' },
        { name: 'dict1 | dict2', description: 'Do dictionaries ko aapas mein merge kar deta hai', defaultOrType: 'Merge Operator' }
      ],
      assessmentMilestone: { type: 'Daily Exam', target: 'Day 10 Exam (10 Questions)', marks: 100 }
    },

    // Semester / Quarter 2: Modular Programming & Defensive Logic (Modules 8 - 14)
    {
      unitCode: 'MOD-08',
      moduleIndex: 8,
      lessonId: 'lesson-8-functions',
      examDayNumber: 11,
      level: 'intermediate',
      title: {
        roman_urdu: '8. Modular Programming: Functions, Parameters & return',
        english: '8. Modular Programming: Functions, Parameters & return',
        urdu: '8۔ ماڈیولر پروگرامنگ: فنکشنز، پیرامیٹرز اور ریٹرن'
      },
      contactHours: { theoryHours: 3, labHours: 1, totalHours: 4 },
      cloMapping: ['CLO-3'],
      theorySyllabus: {
        roman_urdu: [
          'def keyword: Code ko chhotay reusable hisson mein taqseem karna',
          'Parameters vs Arguments: Function ki definition vs call',
          'return statement: Function se hisaab kitaab ka nateeja bahar bhejna',
          'Default parameters: agar user value na de to default lagna (def f(tax=0.15):)',
          'Variable positional arguments (*args) aur keyword arguments (**kwargs)',
          'Scope rules: Local variable vs Global variable'
        ],
        english: [
          'Function definitions using def and encapsulation principles',
          'Parameters versus positional/keyword arguments',
          'Returning values vs printing within functions',
          'Optional default parameter evaluation',
          'Arbitrary positional (*args) and keyword (**kwargs) argument lists',
          'LEGB variable scope resolution rules'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Calculate invoice function with discount and GST tax parameters',
          'WAPDA tiered electricity tariff calculation engine',
          'Multi-return function: Circle diameter aur circumference ek sath wapas bhejna'
        ],
        english: [
          'Build parameterized billing calculation engine',
          'Develop tiered electricity tariff algorithm',
          'Implement multi-value return functions'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'def func(param=default):', description: 'Naya reusable function define karta hai', defaultOrType: 'Declaration' },
        { name: 'return val1, val2', description: 'Function se results bahar bhejta hai (tuple return)', defaultOrType: 'Statement' },
        { name: '*args, **kwargs', description: 'Ghair-mehdood positional aur keyword arguments leta hai', defaultOrType: 'Packer Syntax' }
      ],
      assessmentMilestone: { type: 'Daily Exam', target: 'Day 11 & 12 Exams (20 Questions)', marks: 200 }
    },
    {
      unitCode: 'MOD-13',
      moduleIndex: 13,
      lessonId: 'lesson-13-error-handling',
      examDayNumber: 13,
      level: 'intermediate',
      title: {
        roman_urdu: '13. Defensive Coding: Exception Handling (try, except, finally)',
        english: '13. Defensive Coding: Exception Handling (try, except, finally)',
        urdu: '13۔ ڈیفینسو کوڈنگ: ایرر ہینڈلنگ (try, except, finally)'
      },
      contactHours: { theoryHours: 3, labHours: 1, totalHours: 4 },
      cloMapping: ['CLO-3'],
      theorySyllabus: {
        roman_urdu: [
          'Exceptions kya hain: Runtime crash vs Syntax error',
          'try-except block: Program ko crash hone se bachana',
          'Common exceptions: ZeroDivisionError, ValueError, TypeError, IndexError, KeyError',
          'Multiple except blocks alag alag error ke liye',
          'else block: sirf tab chalta hai jab koi error na aaye',
          'finally block: chahe error aaye ya na aaye, hamesha aakhir mein chalna (cleanup)',
          'Custom exceptions raise karna: raise ValueError("Age must be positive")'
        ],
        english: [
          'Runtime exceptions versus static syntax errors',
          'Guarding critical blocks with try-except constructs',
          'Specific exception hierarchy: ZeroDivisionError, ValueError, TypeError, IndexError, KeyError',
          'try-except-else-finally complete control flow',
          'Explicit error triggers using raise'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Safe calculator: ZeroDivisionError aur ValueError ko gracefully handle karna',
          'Production-grade ATM withdrawal gateway: negative amount aur insufficient funds validate karna',
          'Day 13 Exam: 10 Bulletproof Defensive Tasks hal karna'
        ],
        english: [
          'Build safe division calculator with dual exception traps',
          'Engineer production-grade ATM withdrawal gateway with custom raises',
          'Complete Day 13 Practical Exam on exception handling'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'try / except', description: 'Code ko chala kar dekhta hai aur crash ko capture karta hai', defaultOrType: 'Trap Block' },
        { name: 'finally:', description: 'Hamesha aakhir mein guaranteed execute hota hai (cleanup)', defaultOrType: 'Guaranteed Block' },
        { name: 'raise Exception()', description: 'Ghalat data aane par custom error trigger karta hai', defaultOrType: 'Trigger Statement' }
      ],
      assessmentMilestone: { type: 'Daily Exam', target: 'Day 13 Exam (10 Questions)', marks: 100 }
    },

    // Semester / Quarter 3: Advanced Automation & XML/CSV Pipeline (Modules 19 - 22)
    {
      unitCode: 'MOD-22',
      moduleIndex: 22,
      lessonId: 'lesson-22-capstone-xml-pipeline',
      examDayNumber: 14,
      level: 'advanced',
      title: {
        roman_urdu: '22. Advanced Capstone: XML, Beautiful Soup & CSV Automation Pipeline',
        english: '22. Advanced Capstone: XML, Beautiful Soup & CSV Pipeline',
        urdu: '22۔ حتمی کیپ اسٹون: ایکس ایم ایل، بیوٹی فل سوپ اور سی ایس وی پائپ لائن'
      },
      contactHours: { theoryHours: 3, labHours: 2, totalHours: 5 },
      cloMapping: ['CLO-4'],
      theorySyllabus: {
        roman_urdu: [
          'Real-world automation: Unstructured XML files ko structured tabular data banana',
          'BeautifulSoup / xml.etree se tags, attributes aur coordinates parse karna',
          'CSV writer pipeline: Dynamic headers aur rows build karna',
          'Day 14 Grand Graduation Exam synthesis: Variables se lekar Classes aur Automation tak'
        ],
        english: [
          'Industrial data engineering: Parsing unstructured XML streams into tabular CSVs',
          'Tag inspection, attribute extraction, and coordinate normalizations',
          'Automated data pipeline architecture and file I/O streams',
          'Grand Capstone synthesis covering complete Python fundamentals'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'XML to CSV pipeline live run karna',
          'Day 14 Grand Graduation Exam: 10 Final Capstone Projects hal karna (100 Marks)',
          'Academic Certificate of Completion claim karna'
        ],
        english: [
          'Execute end-to-end XML to CSV data transformation',
          'Solve Day 14 Grand Capstone Exam (10 comprehensive projects)',
          'Qualify for official Course Completion Certificate'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'soup.find_all(tag)', description: 'XML/HTML document mein se tamam matching tags nikalta hai', defaultOrType: 'Parser Method' },
        { name: 'csv.DictWriter()', description: 'Dictionary data ko directly CSV file ki rows banata hai', defaultOrType: 'Export Pipeline' }
      ],
      assessmentMilestone: { type: 'Graduation Exam', target: 'Day 14 Final Capstone (10 Projects)', marks: 100 }
    },

    // Semester / Quarter 4: Professional Web & App Studio (Modules 23 - 27)
    {
      unitCode: 'MOD-23',
      moduleIndex: 23,
      lessonId: 'lesson-23-web-design-fundamentals',
      level: 'professional',
      title: {
        roman_urdu: '23. Web Designing Ka Taaruf: HTML5 & Modern Tailwind CSS',
        english: '23. Web Design Fundamentals: HTML5 & Modern Tailwind CSS',
        urdu: '23۔ ویب ڈیزائننگ کا تعارف: HTML5 اور جدید ٹیل ونڈ سی ایس ایس'
      },
      contactHours: { theoryHours: 3, labHours: 2, totalHours: 5 },
      cloMapping: ['CLO-5'],
      theorySyllabus: {
        roman_urdu: [
          'Web designing ke 3 sutoon: HTML (Skeleton), CSS/Tailwind (Design), JavaScript/Python (Brain)',
          'HTML5 semantic tags: <header>, <main>, <section>, <div>, <h1>, <button>, <input>',
          'Tailwind CSS utility-first architecture: Separated CSS files likhne ki zaroorat nahi',
          'Padding aur Margin: p-4, px-6, py-3, m-2, mt-6',
          'Colors & Gradients: bg-slate-950, text-white, bg-gradient-to-r from-amber-500 to-emerald-500',
          'Depth & Corners: rounded-2xl, shadow-xl, border border-slate-800'
        ],
        english: [
          'Three pillars of modern web architecture: HTML markup, Tailwind presentation, Python/JS logic',
          'Semantic HTML5 structure and tag hierarchy',
          'Utility-first CSS styling using Tailwind CDN',
          'Box model spacing: padding, margin, borders',
          'Modern color scales, gradients, rounded geometry, and elevation shadows'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Web & App Studio mein pehla interactive HTML5 landing card design karna',
          'Dark mode theme styling banana (bg-slate-950 text-white)',
          'Live browser preview mein responsive buttons aur cards test karna'
        ],
        english: [
          'Design first HTML5 card banner in Web Studio',
          'Implement dark mode visual theme using Tailwind utilities',
          'Verify instant hot-reloading in responsive iframe canvas'
        ]
      },
      keyParametersAndSyntax: [
        { name: '<div class="...">', description: 'Semantic container jisme Tailwind classes lagti hain', defaultOrType: 'HTML Tag' },
        { name: 'bg-slate-950 p-6', description: 'Dark background aur 24px padding utility', defaultOrType: 'Tailwind Class' },
        { name: 'rounded-2xl shadow-xl', description: 'Khubsurat gol konay aur 3D depth saya', defaultOrType: 'Tailwind Class' }
      ],
      assessmentMilestone: { type: 'Studio Lab', target: 'Design Portfolio Hero Banner in Web Studio', marks: 50 }
    },
    {
      unitCode: 'MOD-24',
      moduleIndex: 24,
      lessonId: 'lesson-24-responsive-layouts',
      level: 'professional',
      title: {
        roman_urdu: '24. Responsive Webpages Design Karna (Flexbox & Grid Layouts)',
        english: '24. Responsive Layout Engineering (Flexbox & Grid)',
        urdu: '24۔ ریسپانسو لے آؤٹس: فلیکس باکس اور گرڈ'
      },
      contactHours: { theoryHours: 3, labHours: 2, totalHours: 5 },
      cloMapping: ['CLO-5'],
      theorySyllabus: {
        roman_urdu: [
          'Responsiveness ka matlab: Webpage ka mobile, tablet aur laptop har screen par fit aana',
          'CSS Flexbox: flex items-center justify-between (Row ya Column mein barabar faasla)',
          'CSS Grid: grid grid-cols-1 md:grid-cols-3 (Mobile par 1 column, laptop par 3 columns)',
          'Breakpoints: sm (640px), md (768px), lg (1024px)',
          'Navigation navbar: Logo baayein (left) aur buttons daayein (right) rakhna'
        ],
        english: [
          'Responsive design principles across mobile, tablet, and wide desktop viewports',
          'CSS Flexbox alignment: flex-direction, justify-content, align-items',
          'Responsive multi-column CSS Grid: grid-cols-1 md:grid-cols-3',
          'Tailwind responsive breakpoint prefixes (sm, md, lg)',
          'Engineering responsive sticky navigation bars'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Web Studio mein Viewport toggle karein (Desktop 100%, Tablet 768px, Mobile 375px)',
          '3-Column features grid design karein jo mobile par automatically 1-column ban jaye',
          'E-Commerce products catalog grid banana'
        ],
        english: [
          'Test responsive behavior using Web Studio viewport switchers',
          'Construct 3-column features showcase grid responsive to mobile devices',
          'Build e-commerce product catalog responsive layout'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'flex justify-between', description: 'Children items ko dono kinaron par barabar phenlata hai', defaultOrType: 'Flexbox' },
        { name: 'grid md:grid-cols-3', description: 'Laptop par 3 columns aur mobile par 1 column banata hai', defaultOrType: 'Responsive Grid' }
      ],
      assessmentMilestone: { type: 'Studio Lab', target: 'Build Responsive 3-Column Product Grid', marks: 50 }
    },
    {
      unitCode: 'MOD-25',
      moduleIndex: 25,
      lessonId: 'lesson-25-python-fastapi-backend',
      level: 'professional',
      title: {
        roman_urdu: '25. Python Web Backend: FastAPI & REST APIs',
        english: '25. Python Web Backend: FastAPI & REST APIs',
        urdu: '25۔ پائتھن ویب بیک اینڈ: فاسٹ اے پی آئی اور ریسٹ سرور'
      },
      contactHours: { theoryHours: 3, labHours: 2, totalHours: 5 },
      cloMapping: ['CLO-5'],
      theorySyllabus: {
        roman_urdu: [
          'FastAPI ka taaruf: Python ka sabse tez aur modern web framework',
          'HTTP Methods: GET (data mangwana) aur POST (data bhejna)',
          'API Routes: @app.get("/") aur @app.post("/api/calculate-gpa")',
          'Pydantic Models: Input data ko validate karna (BaseModel)',
          'JSON Response payloads: Python dictionaries ko internet par JSON bana kar bhejna'
        ],
        english: [
          'FastAPI architecture, asynchronous execution, and OpenAPI specs',
          'HTTP verb semantics: GET, POST, PUT, DELETE',
          'Route decorators and endpoint registration (@app.get, @app.post)',
          'Data validation and serialization using Pydantic BaseModel',
          'Constructing structured JSON responses for web clients'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Web Studio ke "server.py" tab mein FastAPI endpoint ka code parhna aur test karna',
          'Student GPA calculation API route banana jo JSON marks lekar GPA return kare',
          'E-Commerce order checkout API endpoint design karna'
        ],
        english: [
          'Inspect server.py backend code in Web Studio',
          'Build GPA computation REST endpoint accepting JSON payloads',
          'Implement order checkout backend handler'
        ]
      },
      keyParametersAndSyntax: [
        { name: '@app.get("/path")', description: 'GET HTTP request handle karne wala route decorator', defaultOrType: 'FastAPI Decorator' },
        { name: '@app.post("/path")', description: 'POST data submit accept karne wala route decorator', defaultOrType: 'FastAPI Decorator' },
        { name: 'class Input(BaseModel):', description: 'Incoming JSON body ki type validation karta hai', defaultOrType: 'Pydantic Schema' }
      ],
      assessmentMilestone: { type: 'Backend Lab', target: 'Implement FastAPI Calculate Endpoint', marks: 50 }
    },
    {
      unitCode: 'MOD-26',
      moduleIndex: 26,
      lessonId: 'lesson-26-fullstack-web-apps',
      level: 'professional',
      title: {
        roman_urdu: '26. Mukammal Web App: Frontend + Python Backend Connect Karna',
        english: '26. Full-Stack Web Apps: Connecting Frontend UI to Python API',
        urdu: '26۔ مکمل ویب ایپ: فرنٹ اینڈ اور پائتھن بیک اینڈ کا باہم رابطہ'
      },
      contactHours: { theoryHours: 3, labHours: 2, totalHours: 5 },
      cloMapping: ['CLO-5'],
      theorySyllabus: {
        roman_urdu: [
          'Client-Server architecture: Browser frontend aur Python server ka aapas mein rabta',
          'JavaScript fetch() API: Button click par baghair page reload kiye server ko call karna',
          'async / await ka tareeqa: Server ka response aane tak intizar karna',
          'DOM Update: Server se aane wale JSON result ko HTML cards mein live dikhana',
          'Student GPA Calculator web app ka mukammal flow'
        ],
        english: [
          'Client-Server request-response cycle and async communication',
          'Browser fetch() API for dispatching asynchronous HTTP requests',
          'Managing asynchronous state with async/await and promises',
          'Dynamic DOM updates based on returned JSON payloads without page reloads',
          'End-to-end full-stack app architecture'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'Web Studio mein "Student GPA & Result Web App" template run karna',
          'Input fields mein marks enter kar ke "Calculate GPA" button dabana',
          'Live result card par instant Grade A+ aur GPA calculation ka mushahida karna',
          'Export Webpage kar ke apne computer par live HTML run karna'
        ],
        english: [
          'Load Student GPA & Result Web App template in Web Studio',
          'Enter custom subject marks and trigger dynamic calculation',
          'Observe live DOM update with animated grade badge and GPA score',
          'Export and download standalone HTML bundle'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'fetch("/api/path", {method: "POST"})', description: 'Browser se Python server ko data bhejta hai', defaultOrType: 'Async Request' },
        { name: 'document.getElementById("id").innerText', description: 'Webpage ke text ko dynamic tabdeel karta hai', defaultOrType: 'DOM Manipulation' }
      ],
      assessmentMilestone: { type: 'Capstone App', target: 'Run Full-Stack GPA Calculator in Web Studio', marks: 100 }
    },
    {
      unitCode: 'MOD-27',
      moduleIndex: 27,
      lessonId: 'lesson-27-web-app-deployment',
      level: 'professional',
      title: {
        roman_urdu: '27. Web App Ko Internet Par Live Karna: Cloud Deployment',
        english: '27. Cloud Deployment: Taking Web Applications Live',
        urdu: '27۔ ویب ایپ کو انٹرنیٹ پر لائیو کرنا اور کلاؤڈ ڈپلائمنٹ'
      },
      contactHours: { theoryHours: 2, labHours: 2, totalHours: 4 },
      cloMapping: ['CLO-5'],
      theorySyllabus: {
        roman_urdu: [
          'Local development vs Production cloud server ka farq',
          'requirements.txt: App ke zaroori packages (fastapi, uvicorn) ki list',
          'Docker containerization ka taaruf: App ko aik portable dabbe mein pack karna',
          'Cloud hosting platforms: Google Cloud Run, Render, Vercel, Railway',
          'Domain aur HTTPS SSL security certificate ka taaruf',
          'Production security checklist: Debug mode off rakhna aur API keys secure karna'
        ],
        english: [
          'Distinction between localhost development and cloud production hosting',
          'Dependency specification with requirements.txt',
          'Containerization concepts with Docker',
          'Deploying web backends to Google Cloud Run, Render, or Vercel',
          'Custom domain routing and automated SSL encryption',
          'Production hardening checklist and environment variables'
        ]
      },
      labPracticalSyllabus: {
        roman_urdu: [
          'requirements.txt aur Dockerfile banana',
          'Google Workspace Hub se Google Drive par project export aur backup lena',
          'Share Modal se app ka live URL copy kar ke doston ke sath link share karna 🚀'
        ],
        english: [
          'Generate requirements.txt and container deployment descriptors',
          'Backup full project to Google Drive via Workspace Hub',
          'Copy public live URL from Share Modal to showcase completed application'
        ]
      },
      keyParametersAndSyntax: [
        { name: 'requirements.txt', description: 'App ke packages ki list (pip install -r requirements.txt)', defaultOrType: 'Config File' },
        { name: 'Google Cloud Run', description: 'Serverless container hosting platform jo app ko live URL deta hai', defaultOrType: 'Cloud Platform' }
      ],
      assessmentMilestone: { type: 'Final Project', target: 'Deploy Live Web App & Claim Certificate', marks: 100 }
    }
  ]
};
