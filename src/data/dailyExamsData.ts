import { day1ExamsData, Day1ExamQuestion } from './day1ExamsData';

export interface DayExamTrack {
  dayNumber: number;
  title: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  topic: {
    roman_urdu: string;
    english: string;
    urdu: string;
  };
  totalMarks: number;
  passingMarks: number;
  questions: Day1ExamQuestion[];
}

// Day 2 Exams: Variables, Data Types (int, float, str, bool), Type Casting & Arithmetic
export const day2ExamsData: Day1ExamQuestion[] = [
  {
    id: 'd2-q1-age-calculator',
    questionNumber: 1,
    marks: 10,
    category: 'Variables & Arithmetic',
    difficulty: 'Aasan (Easy)',
    title: {
      roman_urdu: 'Exam 1: Age & Birth Year Calculator',
      english: 'Exam 1: Age & Birth Year Calculator',
      urdu: 'امتحان 1: عمر کا حساب'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Student ki paidaish ka saal (birth_year = 2004) aur mojooda saal (current_year = 2026) variables mein mehfooz karein aur student ki umar hisab karke print karein.',
        english: 'Store birth_year = 2004 and current_year = 2026 in variables. Compute the age and display.',
        urdu: 'پیدائش کے سال اور موجودہ سال کے ذریعے عمر کا حساب لگائیں۔'
      },
      requirements: {
        roman_urdu: [
          'Variable current_year = 2026 aur birth_year = 2004 banayein',
          'age = current_year - birth_year hisab karein',
          '"--- AGE REPORT ---" print karein',
          '"Birth Year: 2004" print karein',
          '"Calculated Age: 22 years" print karein'
        ],
        english: [
          'Set current_year = 2026 and birth_year = 2004',
          'Calculate age = current_year - birth_year',
          'Print report with birth year and calculated age: 22 years'
        ],
        urdu: ['عمر 22 سال کا حساب پرنٹ کریں']
      },
      sampleOutput: `--- AGE REPORT ---\nBirth Year: 2004\nCurrent Year: 2026\nCalculated Age: 22 years`,
      rules: {
        roman_urdu: ['22 direct likhne ke bajaye subtraction formula (-) se nikalein'],
        english: ['Calculate 22 using formula, do not hardcode'],
        urdu: ['تفریق کے فارمولے سے نکالیں']
      }
    },
    starterCode: `# Day 2 - Exam 1: Age Calculator
current_year = 2026
birth_year = 2004

# Yahan age calculate karein aur report print karein:

`,
    solutionCode: `current_year = 2026
birth_year = 2004
age = current_year - birth_year

print("--- AGE REPORT ---")
print("Birth Year:", birth_year)
print("Current Year:", current_year)
print("Calculated Age:", age, "years")`,
    hints: {
      roman_urdu: ['age = current_year - birth_year likhein.'],
      english: ['Write age = current_year - birth_year.'],
      urdu: ['تفریق کریں۔']
    },
    expectedPatterns: [
      { description: 'Birth year', pattern: /2004/ },
      { description: 'Current year', pattern: /2026/ },
      { description: 'Age 22 years', pattern: /22\s*years/i }
    ]
  },
  {
    id: 'd2-q2-type-casting-bill',
    questionNumber: 2,
    marks: 10,
    category: 'Type Casting (int, float, str)',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 2: Type Casting String Numbers',
      english: 'Exam 2: Type Casting String Numbers',
      urdu: 'امتحان 2: اسٹرنگ نمبرز کو نمبر بنانا'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Web forms se aane wala data hamesha string ("150", "250") hota hai. Agar aap "150" + "250" karein ge to "150250" ban jayega! Isko int() se cast karein aur sahi sum (400) nikalein.',
        english: 'Input from forms is often string ("150", "250"). Concatenating them gives "150250". Cast them using int() to get the true sum 400.',
        urdu: 'اسٹرنگز کو انٹیجر میں تبدیل کر کے درست رقم 400 حاصل کریں۔'
      },
      requirements: {
        roman_urdu: [
          'price_str1 = "150" aur price_str2 = "250" define karein',
          'int(price_str1) aur int(price_str2) se total sum nikalein',
          '"String Concatenation: 150250" print karein',
          '"Numeric Sum: 400" print karein'
        ],
        english: [
          'Define price_str1 = "150" and price_str2 = "250"',
          'Demonstrate string concatenation ("150250")',
          'Cast with int() and print "Numeric Sum: 400"'
        ],
        urdu: ['ٹائپ کاسٹنگ کا مظاہرہ کریں']
      },
      sampleOutput: `String Concatenation: 150250\nNumeric Sum: 400\nType of sum: <class 'int'>`,
      rules: {
        roman_urdu: ['int() function ka istemal laazmi hai'],
        english: ['int() function must be used'],
        urdu: ['int فنکشن کا استعمال لازمی ہے']
      }
    },
    starterCode: `# Day 2 - Exam 2: Type Casting
price_str1 = "150"
price_str2 = "250"

# Yahan type casting aur print statements likhein:

`,
    solutionCode: `price_str1 = "150"
price_str2 = "250"

print("String Concatenation:", price_str1 + price_str2)
num_sum = int(price_str1) + int(price_str2)
print("Numeric Sum:", num_sum)
print("Type of sum:", type(num_sum))`,
    hints: {
      roman_urdu: ['int(price_str1) string ko number bana deta hai.'],
      english: ['int(price_str1) converts string to integer.'],
      urdu: ['انٹ فنکشن لگائیں']
    },
    expectedPatterns: [
      { description: 'String concatenation 150250', pattern: /150250/ },
      { description: 'Numeric sum 400', pattern: /400/ },
      { description: 'Type int', pattern: /int/i }
    ]
  },
  {
    id: 'd2-q3-restaurant-tip-split',
    questionNumber: 3,
    marks: 10,
    category: 'Float Math & Splitting',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 3: Restaurant Bill & Tip Splitter',
      english: 'Exam 3: Restaurant Bill & Tip Splitter',
      urdu: 'امتحان 3: ریستوران بل اور شیئرنگ'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Char dost restaurant gaye. Bill 6000 PKR bana aur 10% tip (600 PKR) shamil karni hai. Kul 6600 PKR ko 4 doston mein barabar taqseem karein.',
        english: 'Four friends dine out. Food bill is 6000 PKR with 10% tip (600 PKR). Split the total 6600 PKR evenly among 4 friends.',
        urdu: 'چار دوستوں میں بل اور ٹپ کو برابر تقسیم کریں۔'
      },
      requirements: {
        roman_urdu: [
          'Variables: bill = 6000, friends = 4, tip_percent = 0.10',
          'tip = bill * tip_percent aur total = bill + tip hisab karein',
          'per_person = total / friends calculate karein',
          '"Total Bill with Tip: 6600.0 PKR" print karein',
          '"Each Person Pays: 1650.0 PKR" print karein'
        ],
        english: [
          'Calculate total = 6600.0 and per_person = 1650.0',
          'Print total bill with tip and amount per person'
        ],
        urdu: ['فی کس رقم 1650 پرنٹ کریں']
      },
      sampleOutput: `=== CAFE SPLIT BILL ===\nFood Bill: 6000 PKR\nTip (10%): 600.0 PKR\nTotal Bill: 6600.0 PKR\nNumber of Friends: 4\nEach Person Pays: 1650.0 PKR`,
      rules: {
        roman_urdu: ['Division / aur Multiplication * ka istemal karein'],
        english: ['Use division / and multiplication *'],
        urdu: ['تقسیم کا نشان لگائیں']
      }
    },
    starterCode: `# Day 2 - Exam 3: Bill Splitter
bill = 6000
friends = 4
tip_rate = 0.10

# Yahan hisab karein:

`,
    solutionCode: `bill = 6000
friends = 4
tip_rate = 0.10

tip = bill * tip_rate
total = bill + tip
per_person = total / friends

print("=== CAFE SPLIT BILL ===")
print("Food Bill:", bill, "PKR")
print("Tip (10%):", tip, "PKR")
print("Total Bill:", total, "PKR")
print("Number of Friends:", friends)
print("Each Person Pays:", per_person, "PKR")`,
    hints: {
      roman_urdu: ['per_person = total / friends'],
      english: ['per_person = total / friends'],
      urdu: ['ٹوٹل کو دوستوں پر تقسیم کریں۔']
    },
    expectedPatterns: [
      { description: 'Tip 600', pattern: /600/ },
      { description: 'Total 6600', pattern: /6600/ },
      { description: 'Per person 1650', pattern: /1650/ }
    ]
  },
  {
    id: 'd2-q4-bmi-calculator',
    questionNumber: 4,
    marks: 10,
    category: 'Exponents (**) & Floats',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 4: Body Mass Index (BMI) Formula',
      english: 'Exam 4: Body Mass Index (BMI) Formula',
      urdu: 'امتحان 4: بی ایم آئی فارمولا'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'BMI ka scientific formula hota hai: BMI = weight / (height ** 2). Agar weight = 70 kg aur height = 1.75 meters ho to BMI hisab karke print karein.',
        english: 'Calculate BMI = weight / (height ** 2) for weight = 70 kg and height = 1.75 meters.',
        urdu: 'وزن اور قد کے ذریعے بی ایم آئی فارمولے کا حساب لگائیں۔'
      },
      requirements: {
        roman_urdu: [
          'weight = 70 aur height = 1.75 variables banayein',
          'bmi = weight / (height ** 2) calculate karein',
          'round(bmi, 2) se 2 decimal places tak round karein',
          '"Patient Weight: 70 kg" print karein',
          '"Calculated BMI: 22.86" print karein'
        ],
        english: [
          'Set weight = 70 and height = 1.75',
          'Compute bmi = weight / (height ** 2)',
          'Print weight and "Calculated BMI: 22.86"'
        ],
        urdu: ['بی ایم آئی 22.86 پرنٹ کریں']
      },
      sampleOutput: `--- HEALTH REPORT ---\nWeight: 70 kg\nHeight: 1.75 m\nCalculated BMI: 22.86\nCategory: Healthy Weight`,
      rules: {
        roman_urdu: ['Exponent ke liye ** operator ka istemal karein'],
        english: ['Use exponent operator **'],
        urdu: ['طاقت کے لیے ** کا نشان لگائیں']
      }
    },
    starterCode: `# Day 2 - Exam 4: BMI Formula
weight = 70
height = 1.75

# Yahan BMI calculate karein:

`,
    solutionCode: `weight = 70
height = 1.75
bmi = weight / (height ** 2)

print("--- HEALTH REPORT ---")
print("Weight:", weight, "kg")
print("Height:", height, "m")
print("Calculated BMI:", round(bmi, 2))
print("Category: Healthy Weight")`,
    hints: {
      roman_urdu: ['height ** 2 height ka square hota hai.'],
      english: ['height ** 2 squares the height.'],
      urdu: ['مربع کے لیے ** 2 لکھیں۔']
    },
    expectedPatterns: [
      { description: 'Weight 70', pattern: /70/ },
      { description: 'Height 1.75', pattern: /1\.75/ },
      { description: 'BMI 22.86', pattern: /22\.86/ }
    ]
  },
  {
    id: 'd2-q5-modulo-remainder',
    questionNumber: 5,
    marks: 10,
    category: 'Modulo Operator (%) & Floor Division (//)',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 5: Minutes to Hours & Remainder Minutes',
      english: 'Exam 5: Minutes to Hours & Remainder Minutes',
      urdu: 'امتحان 5: منٹ تا گھنٹے اور باقی منٹ'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Aik movie ka runtime 145 minutes hai. Isko ghanton aur bache huye minutes mein divide karein. Floor division (145 // 60 = 2) aur Modulo (145 % 60 = 25) ka istemal karein.',
        english: 'A movie is 145 minutes long. Convert it into hours and leftover minutes using floor division (//) and modulo (%).',
        urdu: '145 منٹ کو 2 گھنٹے اور 25 منٹ میں تبدیل کریں۔'
      },
      requirements: {
        roman_urdu: [
          'total_minutes = 145 define karein',
          'hours = total_minutes // 60 (mukammal ghante)',
          'minutes = total_minutes % 60 (baqi bache minute)',
          '"Total Minutes: 145" print karein',
          '"Converted Time: 2 hours and 25 minutes" print karein'
        ],
        english: [
          'Use // for hours and % for remainder minutes',
          'Print "Converted Time: 2 hours and 25 minutes"'
        ],
        urdu: ['2 گھنٹے اور 25 منٹ پرنٹ کریں']
      },
      sampleOutput: `Total Minutes: 145\nConverted Time: 2 hours and 25 minutes`,
      rules: {
        roman_urdu: ['// aur % dono operators code mein hone chahiye'],
        english: ['Both // and % must be used'],
        urdu: ['دونوں آپریٹرز استعمال کریں']
      }
    },
    starterCode: `# Day 2 - Exam 5: Time Converter
total_minutes = 145

# Yahan // aur % se hours aur minutes nikalein:

`,
    solutionCode: `total_minutes = 145
hours = total_minutes // 60
minutes = total_minutes % 60

print("Total Minutes:", total_minutes)
print("Converted Time:", hours, "hours and", minutes, "minutes")`,
    hints: {
      roman_urdu: ['// se whole number division hoti hai aur % se remainder milta hai.'],
      english: ['// gives integer quotient, % gives remainder.'],
      urdu: ['// اور % لگائیں']
    },
    expectedPatterns: [
      { description: 'Total minutes 145', pattern: /145/ },
      { description: '2 hours', pattern: /2\s*hours/i },
      { description: '25 minutes', pattern: /25\s*minutes/i }
    ]
  },
  {
    id: 'd2-q6-f-string-badge',
    questionNumber: 6,
    marks: 10,
    category: 'f-Strings Formatting (f"...")',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 6: f-Strings Security ID Badge',
      english: 'Exam 6: f-Strings Security ID Badge',
      urdu: 'امتحان 6: جدید f-Strings کا استعمال'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Python 3.6+ mein f-strings sabse jadui aur asaan tareeqa hai variables ko text mein daalne ka. f"Hello {name}" ka istemal karke Employee Card banayein.',
        english: 'Use modern Python f-strings f"..." to generate a clean Employee ID Badge.',
        urdu: 'ایف اسٹرنگز کے ذریعے سیکیورٹی کارڈ پرنٹ کریں۔'
      },
      requirements: {
        roman_urdu: [
          'emp_name = "Hamza", emp_id = 1042, department = "AI Engineering"',
          'f-string se print karein: f"ID: #{emp_id} | Name: {emp_name} | Dept: {department}"',
          'f-string se expression print karein: f"Yearly Pass: {emp_id * 3}"'
        ],
        english: [
          'Define emp_name, emp_id, department',
          'Format using f-string syntax',
          'Embed variables directly inside curly braces {}'
        ],
        urdu: ['کرلی بریسز کے ساتھ ایف اسٹرنگز استعمال کریں']
      },
      sampleOutput: `=== SECURITY BADGE ===\nID: #1042 | Name: Hamza | Dept: AI Engineering\nAccess Level: Full Granted\nYearly Pass: 3126`,
      rules: {
        roman_urdu: ['Code mein f"..." syntax ka istemal laazmi hai'],
        english: ['Must use f"..." syntax'],
        urdu: ['f"..." کا استعمال لازمی ہے']
      }
    },
    starterCode: `# Day 2 - Exam 6: f-Strings Formatting
emp_name = "Hamza"
emp_id = 1042
department = "AI Engineering"

# Yahan f"..." se badge print karein:

`,
    solutionCode: `emp_name = "Hamza"
emp_id = 1042
department = "AI Engineering"

print("=== SECURITY BADGE ===")
print(f"ID: #{emp_id} | Name: {emp_name} | Dept: {department}")
print("Access Level: Full Granted")
print(f"Yearly Pass: {emp_id * 3}")`,
    hints: {
      roman_urdu: ['print(f"Name: {emp_name}") likhein.'],
      english: ['Write print(f"Name: {emp_name}").'],
      urdu: ['ایف لگائیں']
    },
    expectedPatterns: [
      { description: 'Emp id 1042', pattern: /1042/ },
      { description: 'Name Hamza', pattern: /Hamza/i },
      { description: 'Yearly pass 3126', pattern: /3126/ }
    ]
  },
  {
    id: 'd2-q7-boolean-logic-state',
    questionNumber: 7,
    marks: 10,
    category: 'Boolean Data Type (True / False)',
    difficulty: 'Aasan (Easy)',
    title: {
      roman_urdu: 'Exam 7: Boolean Flags & Account Status',
      english: 'Exam 7: Boolean Flags & Account Status',
      urdu: 'امتحان 7: بولین ویلیوز (True اور False)'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Boolean mein sirf do values hoti hain: True ya False. Ek user ke account status ko boolean flags mein mehfooz karein aur print karein.',
        english: 'Boolean variables hold True or False. Model a user account status using boolean flags.',
        urdu: 'بولین فلیگز کے ذریعے اکاؤنٹ کی حالت ظاہر کریں۔'
      },
      requirements: {
        roman_urdu: [
          'is_logged_in = True, is_premium = False, has_verified_email = True',
          '"Account Status Dashboard" print karein',
          'Har boolean flag ka type check karein: type(is_logged_in) -> <class \'bool\'>',
          'Dashboard par flags print karein'
        ],
        english: [
          'Set is_logged_in = True, is_premium = False, has_verified_email = True',
          'Display dashboard and type of boolean variable'
        ],
        urdu: ['بولین فلیگز پرنٹ کریں']
      },
      sampleOutput: `=== ACCOUNT DASHBOARD ===\nLogged In: True\nPremium Member: False\nEmail Verified: True\nData Type: <class 'bool'>`,
      rules: {
        roman_urdu: ['True aur False ka T aur F hamesha Capital hona chahiye'],
        english: ['True and False must have capitalized T and F'],
        urdu: ['کیپٹل ٹی اور ایف کا خیال رکھیں']
      }
    },
    starterCode: `# Day 2 - Exam 7: Boolean Data Type
is_logged_in = True
is_premium = False
has_verified_email = True

# Yahan dashboard aur type print karein:

`,
    solutionCode: `is_logged_in = True
is_premium = False
has_verified_email = True

print("=== ACCOUNT DASHBOARD ===")
print("Logged In:", is_logged_in)
print("Premium Member:", is_premium)
print("Email Verified:", has_verified_email)
print("Data Type:", type(is_logged_in))`,
    hints: {
      roman_urdu: ['Python mein true chhota nahi, True bara hota hai.'],
      english: ['In Python, booleans are True and False (capitalized).'],
      urdu: ['کیپٹل لکھیں']
    },
    expectedPatterns: [
      { description: 'Logged in True', pattern: /Logged In:\s*True/i },
      { description: 'Premium False', pattern: /Premium Member:\s*False/i },
      { description: 'Type bool', pattern: /bool/i }
    ]
  },
  {
    id: 'd2-q8-swap-variables',
    questionNumber: 8,
    marks: 10,
    category: 'Variable Swapping Without Temp',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 8: The Classic Variable Swap',
      english: 'Exam 8: The Classic Variable Swap',
      urdu: 'امتحان 8: ویری ایبلز کا تبادلہ (Swap)'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Aapke paas do cups hain: a = "Coffee" aur b = "Tea". Python ke pyare syntax (a, b = b, a) se dono ki values aapas mein badal kar print karein.',
        english: 'Swap the values of a = "Coffee" and b = "Tea" so that a becomes "Tea" and b becomes "Coffee".',
        urdu: 'پائتھن کے جدید طریقہ سے ویری ایبلز کی قدریں آپس میں بدلیں۔'
      },
      requirements: {
        roman_urdu: [
          'a = "Coffee" aur b = "Tea" define karein',
          '"Before Swap: a=Coffee, b=Tea" print karein',
          'Values swap karein: a, b = b, a',
          '"After Swap: a=Tea, b=Coffee" print karein'
        ],
        english: [
          'Define a = "Coffee", b = "Tea"',
          'Print before swap',
          'Swap using a, b = b, a',
          'Print after swap'
        ],
        urdu: ['ویری ایبلز تبدیل کر کے پرنٹ کریں']
      },
      sampleOutput: `Before Swap: a=Coffee, b=Tea\nSwapping values...\nAfter Swap: a=Tea, b=Coffee`,
      rules: {
        roman_urdu: ['Swap ke baad a ki value Tea aur b ki value Coffee honi chahiye'],
        english: ['After swap, a must equal Tea and b must equal Coffee'],
        urdu: ['تبادلہ درست ہو']
      }
    },
    starterCode: `# Day 2 - Exam 8: Variable Swap
a = "Coffee"
b = "Tea"

# Yahan swap karne se pehle aur baad print karein:

`,
    solutionCode: `a = "Coffee"
b = "Tea"

print("Before Swap: a=" + a + ", b=" + b)
print("Swapping values...")
a, b = b, a
print("After Swap: a=" + a + ", b=" + b)`,
    hints: {
      roman_urdu: ['Python mein a, b = b, a likhne se ek hi jhatke mein swap ho jata hai!'],
      english: ['In Python, a, b = b, a swaps values in a single line.'],
      urdu: ['ایک لائن میں تبادلہ کریں']
    },
    expectedPatterns: [
      { description: 'Before swap', pattern: /Before Swap:.*a=Coffee.*b=Tea/i },
      { description: 'After swap', pattern: /After Swap:.*a=Tea.*b=Coffee/i }
    ]
  },
  {
    id: 'd2-q9-simple-interest',
    questionNumber: 9,
    marks: 10,
    category: 'Financial Math Formula',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 9: Simple Interest Investment Formula',
      english: 'Exam 9: Simple Interest Investment Formula',
      urdu: 'امتحان 9: انویسٹمنٹ منافع کا حساب'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Agar koi shakhs 50,000 PKR invest kare (Principal P = 50000), saalana munafa rate 8% ho (R = 8), aur 3 saal ke liye invest kare (T = 3), to Formula: Interest = (P * R * T) / 100 hisab karein.',
        english: 'Calculate simple interest = (P * R * T) / 100 for principal P = 50000, rate R = 8, time T = 3.',
        urdu: '50000 پر 8 فیصد کے حساب سے 3 سال کا منافع نکالیں۔'
      },
      requirements: {
        roman_urdu: [
          'P = 50000, R = 8, T = 3 define karein',
          'interest = (P * R * T) / 100 calculate karein (12000.0 aayega)',
          'total_return = P + interest hisab karein (62000.0 aayega)',
          'Investment report print karein'
        ],
        english: [
          'Calculate interest = 12000.0 and total_return = 62000.0',
          'Print formatted investment certificate'
        ],
        urdu: ['کل واپسی رقم 62000 پرنٹ کریں']
      },
      sampleOutput: `=== INVESTMENT CERTIFICATE ===\nPrincipal: 50000 PKR\nAnnual Rate: 8%\nDuration: 3 Years\nTotal Profit Earned: 12000.0 PKR\nFinal Maturity Amount: 62000.0 PKR`,
      rules: {
        roman_urdu: ['Formulas P * R * T aur P + interest ka istemal karein'],
        english: ['Use standard investment formulas'],
        urdu: ['فارمولا لگائیں']
      }
    },
    starterCode: `# Day 2 - Exam 9: Investment Formula
P = 50000
R = 8
T = 3

# Yahan interest aur total return calculate karein:

`,
    solutionCode: `P = 50000
R = 8
T = 3

interest = (P * R * T) / 100
total_return = P + interest

print("=== INVESTMENT CERTIFICATE ===")
print("Principal:", P, "PKR")
print("Annual Rate:", str(R) + "%")
print("Duration:", T, "Years")
print("Total Profit Earned:", interest, "PKR")
print("Final Maturity Amount:", total_return, "PKR")`,
    hints: {
      roman_urdu: ['interest = (P * R * T) / 100'],
      english: ['interest = (P * R * T) / 100'],
      urdu: ['ضرب اور تقسیم کریں']
    },
    expectedPatterns: [
      { description: 'Profit 12000', pattern: /12000/ },
      { description: 'Total 62000', pattern: /62000/ }
    ]
  },
  {
    id: 'd2-q10-capstone-data-types',
    questionNumber: 10,
    marks: 10,
    category: 'Day 2 Capstone Master Project',
    difficulty: 'Mushkil (Hard)',
    title: {
      roman_urdu: 'Exam 10: Complete Student Database Record (Capstone)',
      english: 'Exam 10: Complete Student Database Record (Capstone)',
      urdu: 'امتحان 10: ڈیٹا بیس ریکارڈ (حتمی پروجیکٹ)'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Day 2 ka Final Master Exam! Char bunyadi data types (str, int, float, bool) ko mila kar ek student ka complete system database record tayyar karein aur formatted summary print karein.',
        english: 'Day 2 Capstone Exam! Combine all 4 fundamental data types (str, int, float, bool) into a comprehensive student record output.',
        urdu: 'چاروں بنیادی اقسام کو ملا کر مکمل اسٹوڈنٹ ریکارڈ تیار کریں۔'
      },
      requirements: {
        roman_urdu: [
          'name = "Ayesha" (str)',
          'roll_no = 101 (int)',
          'gpa = 3.85 (float)',
          'is_enrolled = True (bool)',
          'Har variable ka data type type() function se check karein',
          'Divider lines ke sath professional database card print karein'
        ],
        english: [
          'Store name (str), roll_no (int), gpa (float), is_enrolled (bool)',
          'Print type inspection for each',
          'Output a professional database card with borders'
        ],
        urdu: ['مکمل ریکارڈ اور اقسام پرنٹ کریں']
      },
      sampleOutput: `****************************************\n*   PYSEEKHO STUDENT DATABASE RECORD   *\n****************************************\nStudent Name: Ayesha (str)\nRoll Number: 101 (int)\nCurrent GPA: 3.85 (float)\nActive Status: True (bool)\n****************************************\nVerification: All 4 Fundamental Types Verified!`,
      rules: {
        roman_urdu: ['Chaar alag alag data types ka istemal laazmi hai'],
        english: ['Must utilize all 4 distinct data types'],
        urdu: ['چاروں اقسام شامل ہوں']
      }
    },
    starterCode: `# Day 2 - Exam 10: Capstone Database Record
name = "Ayesha"
roll_no = 101
gpa = 3.85
is_enrolled = True

# Yahan 4 data types ka card aur type verification banayein:

`,
    solutionCode: `name = "Ayesha"
roll_no = 101
gpa = 3.85
is_enrolled = True

print("****************************************")
print("*   PYSEEKHO STUDENT DATABASE RECORD   *")
print("****************************************")
print(f"Student Name: {name} ({type(name).__name__})")
print(f"Roll Number: {roll_no} ({type(roll_no).__name__})")
print(f"Current GPA: {gpa} ({type(gpa).__name__})")
print(f"Active Status: {is_enrolled} ({type(is_enrolled).__name__})")
print("****************************************")
print("Verification: All 4 Fundamental Types Verified!")`,
    hints: {
      roman_urdu: ['f-strings aur type().__name__ se saaf naam milta hai.'],
      english: ['Use f-strings for clear output.'],
      urdu: ['ایف اسٹرنگز استعمال کریں']
    },
    expectedPatterns: [
      { description: 'Student name Ayesha', pattern: /Ayesha/i },
      { description: 'Roll no 101', pattern: /101/ },
      { description: 'GPA 3.85', pattern: /3\.85/ },
      { description: 'Active Status True', pattern: /True/i },
      { description: 'All 4 types verified', pattern: /Verified/i }
    ]
  }
];

// Day 3 Exams: Conditional Statements (if, elif, else), Comparison & Logical Operators
export const day3ExamsData: Day1ExamQuestion[] = [
  {
    id: 'd3-q1-pass-fail-checker',
    questionNumber: 1,
    marks: 10,
    category: 'if-else Condition',
    difficulty: 'Aasan (Easy)',
    title: {
      roman_urdu: 'Exam 1: Pass or Fail Grade Evaluator',
      english: 'Exam 1: Pass or Fail Grade Evaluator',
      urdu: 'امتحان 1: پاس یا فیل چیکر'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Agar marks 50 ya us se zyada hon to "Result: PASSED", warna "Result: FAILED" print karein. marks = 68 par test karein.',
        english: 'If marks are 50 or above, print "Result: PASSED", otherwise "Result: FAILED". Test with marks = 68.',
        urdu: 'نمبرز 50 یا زیادہ ہونے پر پاس پرنٹ کریں۔'
      },
      requirements: {
        roman_urdu: [
          'Variable marks = 68 define karein',
          'if-else condition lagayein: if marks >= 50:',
          '"Student Marks: 68" print karein',
          '"Result: PASSED" print karein'
        ],
        english: [
          'Set marks = 68',
          'Use if marks >= 50:',
          'Print "Student Marks: 68" and "Result: PASSED"'
        ],
        urdu: ['اگر اور ورنہ کی شرط لگائیں']
      },
      sampleOutput: `Student Marks: 68\nPassing Threshold: 50\nResult: PASSED\nKeep up the good work!`,
      rules: {
        roman_urdu: ['if aur else statements ka istemal karein'],
        english: ['Use if and else'],
        urdu: ['اف اور ایلس استعمال کریں']
      }
    },
    starterCode: `# Day 3 - Exam 1: Pass or Fail
marks = 68

# Yahan if-else lagayein:

`,
    solutionCode: `marks = 68

print("Student Marks:", marks)
print("Passing Threshold: 50")

if marks >= 50:
    print("Result: PASSED")
    print("Keep up the good work!")
else:
    print("Result: FAILED")
    print("Please try again!")`,
    hints: {
      roman_urdu: ['if marks >= 50: ke baad 4 spaces (indentation) dein.'],
      english: ['Indent 4 spaces after if marks >= 50:.'],
      urdu: ['چار اسپیسز دیں']
    },
    expectedPatterns: [
      { description: 'Marks 68', pattern: /68/ },
      { description: 'Result PASSED', pattern: /PASSED/i }
    ]
  },
  {
    id: 'd3-q2-even-odd-checker',
    questionNumber: 2,
    marks: 10,
    category: 'Modulo & Conditions (% 2 == 0)',
    difficulty: 'Aasan (Easy)',
    title: {
      roman_urdu: 'Exam 2: Even or Odd Number Checker (Juft / Taaq)',
      english: 'Exam 2: Even or Odd Number Checker',
      urdu: 'امتحان 2: جفت یا طاق عدد'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Agar kisi number ko 2 par divide karne se remainder 0 aaye (num % 2 == 0), to woh EVEN (Juft) hota hai, warna ODD (Taaq). number = 27 par check karein.',
        english: 'Check if number = 27 is EVEN or ODD using modulo operator num % 2 == 0.',
        urdu: '27 کا جفت یا طاق ہونا چیک کریں۔'
      },
      requirements: {
        roman_urdu: [
          'number = 27 define karein',
          'if number % 2 == 0: Juft (Even) print karein',
          'else: Taaq (Odd) print karein',
          '"Checked Number: 27 is ODD" print karein'
        ],
        english: [
          'Define number = 27',
          'Check modulo with 2',
          'Print that 27 is ODD'
        ],
        urdu: ['طاق ہونا پرنٹ کریں']
      },
      sampleOutput: `Number: 27\nCalculation: 27 % 2 = 1\nResult: 27 is an ODD number`,
      rules: {
        roman_urdu: ['Comparison operator == aur modulo % ka istemal karein'],
        english: ['Use == and %'],
        urdu: ['برابر کا نشان لگائیں']
      }
    },
    starterCode: `# Day 3 - Exam 2: Even or Odd
number = 27

# Yahan check karein:

`,
    solutionCode: `number = 27

print("Number:", number)
print("Calculation:", number, "% 2 =", number % 2)

if number % 2 == 0:
    print(f"Result: {number} is an EVEN number")
else:
    print(f"Result: {number} is an ODD number")`,
    hints: {
      roman_urdu: ['if number % 2 == 0: likhein.'],
      english: ['Use if number % 2 == 0:.'],
      urdu: ['ماڈیولو لگائیں']
    },
    expectedPatterns: [
      { description: 'Number 27', pattern: /27/ },
      { description: 'ODD number', pattern: /ODD/i }
    ]
  },
  {
    id: 'd3-q3-traffic-light-system',
    questionNumber: 3,
    marks: 10,
    category: 'elif Multi-branch Logic',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 3: Automated Traffic Light Decision',
      english: 'Exam 3: Automated Traffic Light Decision',
      urdu: 'امتحان 3: ٹریفک لائٹ سسٹم'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Traffic light signals ka decision maker banayein. Agar light "Red" ho to "STOP!", agar "Yellow" ho to "READY TO GO", aur agar "Green" ho to "GO SPEED AHEAD!". signal = "Yellow" par test karein.',
        english: 'Simulate traffic light controller using if-elif-else. When light is "Yellow", output "READY TO GO".',
        urdu: 'ٹریفک لائٹس کے لیے اف-ایلف لگائیں۔'
      },
      requirements: {
        roman_urdu: [
          'light = "Yellow" define karein',
          'if light == "Red": STOP! print karein',
          'elif light == "Yellow": READY TO GO print karein',
          'elif light == "Green": GO SPEED AHEAD! print karein',
          'else: Invalid Light signal'
        ],
        english: [
          'Set light = "Yellow"',
          'Implement if-elif-else ladder',
          'Print "READY TO GO"'
        ],
        urdu: ['ایلف کا استعمال کریں']
      },
      sampleOutput: `Signal Detected: Yellow\nAction: READY TO GO (Slow down and prepare)`,
      rules: {
        roman_urdu: ['elif keyword ka istemal zaroori hai'],
        english: ['Must use elif keyword'],
        urdu: ['ایلف لازمی لگائیں']
      }
    },
    starterCode: `# Day 3 - Exam 3: Traffic Light
light = "Yellow"

# Yahan if-elif-else ladder likhein:

`,
    solutionCode: `light = "Yellow"

print("Signal Detected:", light)

if light == "Red":
    print("Action: STOP! Danger ahead.")
elif light == "Yellow":
    print("Action: READY TO GO (Slow down and prepare)")
elif light == "Green":
    print("Action: GO SPEED AHEAD!")
else:
    print("Action: Invalid signal light")`,
    hints: {
      roman_urdu: ['elif doosri shart check karne ke liye hota hai.'],
      english: ['elif allows checking additional conditions.'],
      urdu: ['ایلف لگائیں']
    },
    expectedPatterns: [
      { description: 'Yellow detected', pattern: /Yellow/i },
      { description: 'READY TO GO', pattern: /READY\s*TO\s*GO/i }
    ]
  },
  {
    id: 'd3-q4-discount-tier-system',
    questionNumber: 4,
    marks: 10,
    category: 'Nested & Comparison Ranges',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 4: Shopping Mall Discount Tier',
      english: 'Exam 4: Shopping Mall Discount Tier',
      urdu: 'امتحان 4: شاپنگ مال رعایت'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Agar khareedari 10,000 PKR se zyada ho to 20% discount, agar 5,000 se 10,000 ke darmiyan ho to 10% discount, warna 0% discount. cart_total = 7500 par discount calculate karein.',
        english: 'Calculate discount tiers: > 10000 gets 20%, >= 5000 gets 10%, otherwise 0%. Test with cart_total = 7500.',
        urdu: '7500 پر 10 فیصد ڈسکاؤنٹ نکال کر کل رقم پرنٹ کریں۔'
      },
      requirements: {
        roman_urdu: [
          'cart_total = 7500 define karein',
          'if-elif-else se discount_rate (0.10) tay karein',
          'discount_amount = cart_total * discount_rate (750.0) calculate karein',
          'final_price = cart_total - discount_amount (6750.0) print karein'
        ],
        english: [
          'Set cart_total = 7500',
          'Compute discount_rate = 0.10 and final_price = 6750.0',
          'Print receipt with discount breakdown'
        ],
        urdu: ['ڈسکاؤنٹ 750 اور فائنل 6750 پرنٹ کریں']
      },
      sampleOutput: `Original Total: 7500 PKR\nDiscount Applied: 10% (750.0 PKR)\nFinal Payable: 6750.0 PKR`,
      rules: {
        roman_urdu: ['Comparison operators >= aur > ka durust istemal karein'],
        english: ['Use comparison operators >= and >'],
        urdu: ['موازنہ کریں']
      }
    },
    starterCode: `# Day 3 - Exam 4: Discount Tiers
cart_total = 7500

# Yahan discount aur final price calculate karein:

`,
    solutionCode: `cart_total = 7500

if cart_total > 10000:
    discount_rate = 0.20
elif cart_total >= 5000:
    discount_rate = 0.10
else:
    discount_rate = 0.0

discount_amount = cart_total * discount_rate
final_price = cart_total - discount_amount

print("Original Total:", cart_total, "PKR")
print(f"Discount Applied: {int(discount_rate * 100)}% ({discount_amount} PKR)")
print("Final Payable:", final_price, "PKR")`,
    hints: {
      roman_urdu: ['elif cart_total >= 5000: likhein.'],
      english: ['Use elif cart_total >= 5000:.'],
      urdu: ['ایلف لگائیں']
    },
    expectedPatterns: [
      { description: 'Original total 7500', pattern: /7500/ },
      { description: 'Discount 750', pattern: /750/ },
      { description: 'Final payable 6750', pattern: /6750/ }
    ]
  },
  {
    id: 'd3-q5-logical-and-login',
    questionNumber: 5,
    marks: 10,
    category: 'Logical Operator (and)',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 5: Dual Credential Login Authentication (and)',
      english: 'Exam 5: Dual Credential Login Authentication (and)',
      urdu: 'امتحان 5: پاس ورڈ اور یوزر نیم لاگ ان'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Login system mein username aur password dono ka sahi hona zaroori hota hai. Logical operator "and" ka istemal karke check karein ke username "admin" aur pin 1234 match ho rahe hain ya nahi.',
        english: 'In a login system, both username and pin must match using the "and" operator. Verify username == "admin" and pin == 1234.',
        urdu: 'and آپریٹر کا استعمال کر کے لاگ ان چیک کریں۔'
      },
      requirements: {
        roman_urdu: [
          'input_user = "admin" aur input_pin = 1234 define karein',
          'if input_user == "admin" and input_pin == 1234: "Login Successful!" print karein',
          'else: "Access Denied: Invalid Credentials" print karein'
        ],
        english: [
          'Verify input_user == "admin" and input_pin == 1234',
          'Print "Login Successful! Welcome to Dashboard"'
        ],
        urdu: ['لاگ ان کامیاب پرنٹ کریں']
      },
      sampleOutput: `Attempting Login for User: admin\nStatus: Login Successful! Welcome to Dashboard.`,
      rules: {
        roman_urdu: ['Code mein "and" operator ka laazmi istemal hona chahiye'],
        english: ['Logical operator "and" must be present'],
        urdu: ['and آپریٹر لگائیں']
      }
    },
    starterCode: `# Day 3 - Exam 5: Login with 'and'
input_user = "admin"
input_pin = 1234

# Yahan 'and' operator se authentication check karein:

`,
    solutionCode: `input_user = "admin"
input_pin = 1234

print("Attempting Login for User:", input_user)

if input_user == "admin" and input_pin == 1234:
    print("Status: Login Successful! Welcome to Dashboard.")
else:
    print("Status: Access Denied: Invalid Credentials.")`,
    hints: {
      roman_urdu: ['if input_user == "admin" and input_pin == 1234:'],
      english: ['if input_user == "admin" and input_pin == 1234:'],
      urdu: ['اینڈ لگائیں']
    },
    expectedPatterns: [
      { description: 'User admin', pattern: /admin/i },
      { description: 'Login Successful', pattern: /Login Successful/i }
    ]
  },
  {
    id: 'd3-q6-logical-or-discount',
    questionNumber: 6,
    marks: 10,
    category: 'Logical Operator (or)',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 6: Free Shipping Privilege Checker (or)',
      english: 'Exam 6: Free Shipping Privilege Checker (or)',
      urdu: 'امتحان 6: مفت شپنگ چیکر (or)'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Aik e-commerce store par Free Shipping milti hai agar customer VIP member ho (is_vip = True) YA bill 3000 PKR se zyada ho (cart_value > 3000). Logical operator "or" ka istemal karein.',
        english: 'Free shipping is granted if is_vip is True OR cart_value > 3000. Test using the "or" operator.',
        urdu: 'or آپریٹر کے ذریعے فری شپنگ کی اہلیت چیک کریں۔'
      },
      requirements: {
        roman_urdu: [
          'is_vip = False aur cart_value = 3500 define karein',
          'if is_vip == True or cart_value > 3000: "Eligible for Free Shipping!" print karein',
          'else: "Standard Shipping: 250 PKR" print karein'
        ],
        english: [
          'Set is_vip = False and cart_value = 3500',
          'Use logical "or"',
          'Print "Eligible for Free Shipping!"'
        ],
        urdu: ['فری شپنگ پرنٹ کریں']
      },
      sampleOutput: `Cart Value: 3500 PKR | VIP Status: False\nShipping Decision: Eligible for Free Shipping!`,
      rules: {
        roman_urdu: ['Code mein "or" operator ka istemal zaroori hai'],
        english: ['Logical operator "or" must be used'],
        urdu: ['or آپریٹر استعمال کریں']
      }
    },
    starterCode: `# Day 3 - Exam 6: Free Shipping with 'or'
is_vip = False
cart_value = 3500

# Yahan 'or' operator se shipping check karein:

`,
    solutionCode: `is_vip = False
cart_value = 3500

print(f"Cart Value: {cart_value} PKR | VIP Status: {is_vip}")

if is_vip or cart_value > 3000:
    print("Shipping Decision: Eligible for Free Shipping!")
else:
    print("Shipping Decision: Standard Shipping: 250 PKR")`,
    hints: {
      roman_urdu: ['if is_vip or cart_value > 3000:'],
      english: ['if is_vip or cart_value > 3000:'],
      urdu: ['or لگائیں']
    },
    expectedPatterns: [
      { description: 'Cart value 3500', pattern: /3500/ },
      { description: 'Free shipping eligible', pattern: /Free Shipping/i }
    ]
  },
  {
    id: 'd3-q7-leap-year-checker',
    questionNumber: 7,
    marks: 10,
    category: 'Complex Conditions & Modulo',
    difficulty: 'Mushkil (Hard)',
    title: {
      roman_urdu: 'Exam 7: Leap Year (Saal-e-Kabeesa) Logic',
      english: 'Exam 7: Leap Year Logic',
      urdu: 'امتحان 7: لیپ ایئر (سالِ کبیسہ)'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Leap year woh saal hota hai jo 4 par poora divide ho, lekin 100 par divide na ho, ya phir 400 par poora divide ho sake. year = 2024 par test karein.',
        english: 'A leap year is divisible by 4 and not 100, or divisible by 400. Check year = 2024.',
        urdu: '2024 کا لیپ سال ہونا فارمولے سے ثابت کریں۔'
      },
      requirements: {
        roman_urdu: [
          'year = 2024 define karein',
          'Condition: (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)',
          '"Year: 2024" print karein',
          '"Result: 2024 is a LEAP YEAR (366 days)" print karein'
        ],
        english: [
          'Use formula: (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)',
          'Print that 2024 is a LEAP YEAR'
        ],
        urdu: ['لیپ ایئر پرنٹ کریں']
      },
      sampleOutput: `Checking Year: 2024\nResult: 2024 is a LEAP YEAR (366 days in February)`,
      rules: {
        roman_urdu: ['Modulo %, and, aur or ka murakkab istemal karein'],
        english: ['Combine %, and, and or'],
        urdu: ['فارمولا لگائیں']
      }
    },
    starterCode: `# Day 3 - Exam 7: Leap Year Logic
year = 2024

# Yahan leap year condition check karein:

`,
    solutionCode: `year = 2024

print("Checking Year:", year)

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"Result: {year} is a LEAP YEAR (366 days in February)")
else:
    print(f"Result: {year} is NOT a leap year (365 days)")`,
    hints: {
      roman_urdu: ['(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)'],
      english: ['(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)'],
      urdu: ['شرط لگائیں']
    },
    expectedPatterns: [
      { description: 'Year 2024', pattern: /2024/ },
      { description: 'LEAP YEAR', pattern: /LEAP YEAR/i }
    ]
  },
  {
    id: 'd3-q8-temperature-advisory',
    questionNumber: 8,
    marks: 10,
    category: 'Multiple Threshold Conditions',
    difficulty: 'Darmiyana (Medium)',
    title: {
      roman_urdu: 'Exam 8: Weather Temperature Advisory',
      english: 'Exam 8: Weather Temperature Advisory',
      urdu: 'امتحان 8: موسم کا مشورہ'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Temperature ke mutabiq advisory system banayein. Agar temp >= 40 ho to "Extreme Heat Alert!", agar temp >= 25 ho to "Pleasant Warm Weather", agar temp >= 15 ho to "Cool Breeze", warna "Cold Alert! Wear Warm Jacket". temp = 32 par test karein.',
        english: 'Generate weather advisory for temp = 32 Celsius using if-elif-else thresholds.',
        urdu: 'درجہ حرارت کے مطابق الرٹ جاری کریں۔'
      },
      requirements: {
        roman_urdu: [
          'temp = 32 define karein',
          'if-elif-else se category check karein',
          '"Temperature: 32°C" print karein',
          '"Advisory: Pleasant Warm Weather" print karein'
        ],
        english: [
          'Set temp = 32',
          'Output "Temperature: 32°C" and "Advisory: Pleasant Warm Weather"'
        ],
        urdu: ['موسم کی رپورٹ پرنٹ کریں']
      },
      sampleOutput: `Current City Temperature: 32°C\nWeather Advisory: Pleasant Warm Weather (Stay hydrated)`,
      rules: {
        roman_urdu: ['Comparisons ka order upar se niche (>= 40, >= 25, >= 15) rakhein'],
        english: ['Maintain descending order in elif thresholds'],
        urdu: ['ترتیب کا خیال رکھیں']
      }
    },
    starterCode: `# Day 3 - Exam 8: Weather Advisory
temp = 32

# Yahan advisory system banayein:

`,
    solutionCode: `temp = 32

print(f"Current City Temperature: {temp}°C")

if temp >= 40:
    print("Weather Advisory: Extreme Heat Alert! Avoid sun exposure.")
elif temp >= 25:
    print("Weather Advisory: Pleasant Warm Weather (Stay hydrated)")
elif temp >= 15:
    print("Weather Advisory: Cool Breeze outside.")
else:
    print("Weather Advisory: Cold Alert! Wear Warm Jacket.")`,
    hints: {
      roman_urdu: ['elif temp >= 25: par match hoga.'],
      english: ['temp = 32 triggers the elif temp >= 25: branch.'],
      urdu: ['ایلف لگائیں']
    },
    expectedPatterns: [
      { description: 'Temp 32', pattern: /32/ },
      { description: 'Pleasant Warm Weather', pattern: /Pleasant Warm Weather/i }
    ]
  },
  {
    id: 'd3-q9-nested-atm-withdrawal',
    questionNumber: 9,
    marks: 10,
    category: 'Nested if-else (Andar-Dar-Andar)',
    difficulty: 'Mushkil (Hard)',
    title: {
      roman_urdu: 'Exam 9: ATM Cash Withdrawal Verification',
      english: 'Exam 9: ATM Cash Withdrawal Verification',
      urdu: 'امتحان 9: اے ٹی ایم رقم نکالنے کی تصدیق'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'ATM machine par pehle check hota hai ke pin sahi hai ya nahi. Agar pin sahi ho to check hota hai ke account mein balance kafi hai ya nahi. pin_entered = 5555 (correct: 5555), balance = 15000, withdraw = 5000 par nested if banayein.',
        english: 'Nested if check for ATM: first verify pin, then verify balance >= withdraw.',
        urdu: 'پہلے پن اور پھر بیلنس کی تصدیق کریں۔'
      },
      requirements: {
        roman_urdu: [
          'correct_pin = 5555, pin_entered = 5555, balance = 15000, withdraw = 5000',
          'Pehle if pin_entered == correct_pin check karein',
          'Andar if withdraw <= balance check karein',
          'remaining_balance = balance - withdraw calculate karein',
          '"Cash Dispensed: 5000 PKR" aur "Remaining Balance: 10000 PKR" print karein'
        ],
        english: [
          'Implement nested if condition',
          'Print "Cash Dispensed: 5000 PKR" and "Remaining Balance: 10000 PKR"'
        ],
        urdu: ['رقم نکالنا اور باقی بیلنس پرنٹ کریں']
      },
      sampleOutput: `PIN Verified Successfully.\nRequested Withdrawal: 5000 PKR\nCash Dispensed: 5000 PKR\nRemaining Balance: 10000 PKR`,
      rules: {
        roman_urdu: ['Nested if (if ke andar doosra if) ka istemal karein'],
        english: ['Must use nested if statement'],
        urdu: ['اندرونی اف لگائیں']
      }
    },
    starterCode: `# Day 3 - Exam 9: Nested ATM
correct_pin = 5555
pin_entered = 5555
balance = 15000
withdraw = 5000

# Yahan nested if structure likhein:

`,
    solutionCode: `correct_pin = 5555
pin_entered = 5555
balance = 15000
withdraw = 5000

if pin_entered == correct_pin:
    print("PIN Verified Successfully.")
    print("Requested Withdrawal:", withdraw, "PKR")
    if withdraw <= balance:
        balance = balance - withdraw
        print("Cash Dispensed:", withdraw, "PKR")
        print("Remaining Balance:", balance, "PKR")
    else:
        print("Transaction Declined: Insufficient balance.")
else:
    print("Security Alert: Incorrect PIN.")`,
    hints: {
      roman_urdu: ['Pehle outer if pin check karega, phir inner if balance check karega.'],
      english: ['Outer if verifies PIN, inner if verifies funds.'],
      urdu: ['پہلے پن چیک کریں']
    },
    expectedPatterns: [
      { description: 'PIN Verified', pattern: /PIN Verified/i },
      { description: 'Cash dispensed 5000', pattern: /5000/ },
      { description: 'Remaining balance 10000', pattern: /10000/ }
    ]
  },
  {
    id: 'd3-q10-capstone-grade-master',
    questionNumber: 10,
    marks: 10,
    category: 'Day 3 Capstone Master Project',
    difficulty: 'Mushkil (Hard)',
    title: {
      roman_urdu: 'Exam 10: Complete University Grading Matrix (Capstone)',
      english: 'Exam 10: Complete University Grading Matrix (Capstone)',
      urdu: 'امتحان 10: یونیورسٹی گریڈنگ سسٹم (حتمی پروجیکٹ)'
    },
    writtenSheet: {
      scenario: {
        roman_urdu: 'Day 3 ka Final Capstone Exam! Aik comprehensive university grade calculator banayein jo score (marks = 86) ko A+, A, B, C ya F grade mein tabdeel kare, GPA assign kare, aur distinction remarks de.',
        english: 'Day 3 Capstone: Build an end-to-end university grading system allocating Letter Grade, Grade Points, and Remarks.',
        urdu: '86 نمبر پر گریڈ A، جی پی اے اور ریمارکس کا حتمی کارڈ تیار کریں۔'
      },
      requirements: {
        roman_urdu: [
          'score = 86 define karein',
          '>= 90: Grade A+ (GPA 4.0, Gold Medal Distinction)',
          '>= 80: Grade A (GPA 3.7, Excellent Merit)',
          '>= 70: Grade B (GPA 3.0, Good Standing)',
          '>= 50: Grade C (GPA 2.0, Pass)',
          'else: Grade F (GPA 0.0, Fail)',
          'Bordered official transcript card print karein'
        ],
        english: [
          'Score = 86 falls into Grade A (GPA 3.7, Excellent Merit)',
          'Print formal transcript card with borders'
        ],
        urdu: ['گریڈ اے اور 3.7 جی پی اے پرنٹ کریں']
      },
      sampleOutput: `========================================\n       OFFICIAL GRADE TRANSCRIPT        \n========================================\nExam Marks: 86 / 100\nAssigned Grade: A\nGrade Point (GPA): 3.7\nRemarks: Excellent Merit Standing\nStatus: QUALIFIED FOR ADVANCED ADMISSION\n========================================`,
      rules: {
        roman_urdu: ['Complete if-elif-else matrix ka istemal karein'],
        english: ['Use complete if-elif-else matrix'],
        urdu: ['مکمل اف-ایلف لگائیں']
      }
    },
    starterCode: `# Day 3 - Exam 10: Capstone Grading Matrix
score = 86

# Yahan complete grading matrix aur transcript card banayein:

`,
    solutionCode: `score = 86

if score >= 90:
    grade = "A+"
    gpa = 4.0
    remarks = "Gold Medal Distinction"
elif score >= 80:
    grade = "A"
    gpa = 3.7
    remarks = "Excellent Merit Standing"
elif score >= 70:
    grade = "B"
    gpa = 3.0
    remarks = "Good Standing"
elif score >= 50:
    grade = "C"
    gpa = 2.0
    remarks = "Pass Standing"
else:
    grade = "F"
    gpa = 0.0
    remarks = "Needs Improvement"

print("========================================")
print("       OFFICIAL GRADE TRANSCRIPT        ")
print("========================================")
print("Exam Marks:", score, "/ 100")
print("Assigned Grade:", grade)
print("Grade Point (GPA):", gpa)
print("Remarks:", remarks)
print("Status: QUALIFIED FOR ADVANCED ADMISSION")
print("========================================")`,
    hints: {
      roman_urdu: ['score 86 par elif score >= 80: chalega.'],
      english: ['Score 86 triggers the elif score >= 80: branch.'],
      urdu: ['ایلف 80 لگائیں']
    },
    expectedPatterns: [
      { description: 'Marks 86', pattern: /86/ },
      { description: 'Grade A', pattern: /Grade:\s*A/i },
      { description: 'GPA 3.7', pattern: /3\.7/ },
      { description: 'Qualified status', pattern: /QUALIFIED/i }
    ]
  }
];

import { 
  day4ExamsData, 
  day5ExamsData, 
  day6ExamsData, 
  day7ExamsData, 
  day8ExamsData, 
  day9ExamsData, 
  day10ExamsData 
} from './moreDaysExamsData';
import { 
  day11ExamsData, 
  day12ExamsData, 
  day13ExamsData, 
  day14ExamsData 
} from './advancedDaysExamsData';

// All 14 Days Registry
export const allDaysExamsList: DayExamTrack[] = [
  {
    dayNumber: 1,
    title: {
      roman_urdu: 'Din 1: Basic Python & print() Output',
      english: 'Day 1: Basic Python & print() Output',
      urdu: 'پہلا دن: بنیادی پائتھن اور پرنٹ'
    },
    topic: {
      roman_urdu: 'print(), Quotes, Escape Characters (\\n, \\t), ASCII Art, Math in print & Syntax',
      english: 'print(), Quotes, Escape Characters, ASCII Art, Math in print & Syntax',
      urdu: 'پرنٹ، کوٹس، ایسکیپ کیریکٹرز اور سنٹیکس'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day1ExamsData
  },
  {
    dayNumber: 2,
    title: {
      roman_urdu: 'Din 2: Variables, Data Types & Type Casting',
      english: 'Day 2: Variables, Data Types & Type Casting',
      urdu: 'دوسرا دن: ویری ایبلز اور اقسام'
    },
    topic: {
      roman_urdu: 'int, float, str, bool, Type Casting, Arithmetic (+, -, *, /, //, %, **), f-strings',
      english: 'int, float, str, bool, Type Casting, Arithmetic, f-strings',
      urdu: 'انٹیجر، فلوٹ، اسٹرنگ، بولین اور حساب کتاب'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day2ExamsData
  },
  {
    dayNumber: 3,
    title: {
      roman_urdu: 'Din 3: Math & Operators (+, -, *, %, comparisons)',
      english: 'Day 3: Math & Operators (+, -, *, %, comparisons)',
      urdu: 'تیسرا دن: ریاضی اور آپریٹرز'
    },
    topic: {
      roman_urdu: 'Arithmetic expressions, modulo remainder, comparisons (==, !=, >, <)',
      english: 'Arithmetic expressions, modulo remainder, comparisons',
      urdu: 'حسابی آپریٹرز اور برابری کا موازنہ'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day3ExamsData
  },
  {
    dayNumber: 4,
    title: {
      roman_urdu: 'Din 4: Conditionals (if, elif, else) & Decision Making',
      english: 'Day 4: Decision Making (if, elif, else)',
      urdu: 'چوتھا دن: شرائط اور فیصلے'
    },
    topic: {
      roman_urdu: 'if, elif, else, grading, ticket checking, temperature advisory',
      english: 'if, elif, else, grading, ticket checking, temperature advisory',
      urdu: 'کنڈیشنل بیانات اور فیصلے'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day4ExamsData
  },
  {
    dayNumber: 5,
    title: {
      roman_urdu: 'Din 5: Logic, Truth Values & Dual Conditions',
      english: 'Day 5: Logic & Truth Values',
      urdu: 'پانچواں دن: منطق اور حقائق'
    },
    topic: {
      roman_urdu: 'Logical and, or, not, candidate filtering, loan approvals, banking',
      english: 'Logical and, or, not, candidate filtering, loan approvals, banking',
      urdu: 'منطقی آپریٹرز اور پیچیدہ شرائط'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day5ExamsData
  },
  {
    dayNumber: 6,
    title: {
      roman_urdu: 'Din 6: for Loops & range() Repetition',
      english: 'Day 6: for Loops & range() Repetition',
      urdu: 'چھٹا دن: فار لوپ اور رینج'
    },
    topic: {
      roman_urdu: 'range(), multiplication tables, accumulator patterns, prime checking',
      english: 'range(), multiplication tables, accumulator patterns, prime checking',
      urdu: 'فار لوپ، تکرار اور پہاڑے'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day6ExamsData
  },
  {
    dayNumber: 7,
    title: {
      roman_urdu: 'Din 7: while Loops, break & continue Controls',
      english: 'Day 7: while Loops & Controls',
      urdu: 'ساتواں دن: وائل لوپ اور کنٹرول'
    },
    topic: {
      roman_urdu: 'while loops, break, continue, countdowns, infinite loop safety',
      english: 'while loops, break, continue, countdowns, infinite loop safety',
      urdu: 'وائل لوپ، بریک اور کنٹینیو'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day7ExamsData
  },
  {
    dayNumber: 8,
    title: {
      roman_urdu: 'Din 8: Lists (Fihristein) & Slicing Operations',
      english: 'Day 8: Lists & Slicing Operations',
      urdu: 'آٹھواں دن: لسٹس اور سلائسنگ'
    },
    topic: {
      roman_urdu: 'Lists creation, indexing, negative slicing, append(), pop(), list math',
      english: 'Lists creation, indexing, negative slicing, append(), pop(), list math',
      urdu: 'لسٹ انڈیکسنگ، سلائسنگ اور طریقے'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day8ExamsData
  },
  {
    dayNumber: 9,
    title: {
      roman_urdu: 'Din 9: Tuples & Sets (Immutable Data & Unique Sets)',
      english: 'Day 9: Tuples & Sets',
      urdu: 'نواں دن: ٹپلز اور سیٹس'
    },
    topic: {
      roman_urdu: 'Tuples (immutable), tuple unpacking, sets (unique values), union & intersection',
      english: 'Tuples, unpacking, sets, union & intersection',
      urdu: 'غیر متغیر ٹپلز اور منفرد سیٹس'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day9ExamsData
  },
  {
    dayNumber: 10,
    title: {
      roman_urdu: 'Din 10: Dictionaries & Key-Value Pair Data',
      english: 'Day 10: Dictionaries & Key-Value',
      urdu: 'دسواں دن: لغت (ڈکشنری)'
    },
    topic: {
      roman_urdu: 'Dictionaries, key lookup, .get(), updating keys, looping dicts',
      english: 'Dictionaries, key lookup, .get(), updating keys, looping dicts',
      urdu: 'کی اور ویلیو پر مبنی ڈیٹا بیس'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day10ExamsData
  },
  {
    dayNumber: 11,
    title: {
      roman_urdu: 'Din 11: Functions (def, parameters & return)',
      english: 'Day 11: Functions & Reusable Code',
      urdu: 'گیارھواں دن: فنکشنز اور واپسی'
    },
    topic: {
      roman_urdu: 'def keyword, parameters, arguments, return values, modular code',
      english: 'def keyword, parameters, arguments, return values, modular code',
      urdu: 'فنکشن بنانا، پیرامیٹرز اور ریٹرن'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day11ExamsData
  },
  {
    dayNumber: 12,
    title: {
      roman_urdu: 'Din 12: Advanced Functions, Scope & Docstrings',
      english: 'Day 12: Advanced Functions & Scope',
      urdu: 'بارھواں دن: جدید فنکشنز اور اسکوپ'
    },
    topic: {
      roman_urdu: 'Default arguments, multiple returns, local vs global scope, docstrings',
      english: 'Default arguments, multiple returns, local vs global scope, docstrings',
      urdu: 'ڈیفالٹ پیرامیٹرز اور اسکوپ'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day12ExamsData
  },
  {
    dayNumber: 13,
    title: {
      roman_urdu: 'Din 13: Defensive Coding & Error Handling (try-except)',
      english: 'Day 13: Error Handling (try-except)',
      urdu: 'تیرھواں دن: غلطیوں کا دفاع (try/except)'
    },
    topic: {
      roman_urdu: 'try, except, ValueError, ZeroDivisionError, finally, bug prevention',
      english: 'try, except, ValueError, ZeroDivisionError, finally, bug prevention',
      urdu: 'غلطیوں کو سنبھالنا اور محفوظ کوڈ'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day13ExamsData
  },
  {
    dayNumber: 14,
    title: {
      roman_urdu: 'Din 14: Final Capstone Project & Grand Graduation Exam',
      english: 'Day 14: Final Capstone & Automation Exam',
      urdu: 'چودھواں دن: حتمی پروجیکٹ اور گریجویشن'
    },
    topic: {
      roman_urdu: 'Full-stack automation, CSV/data processing, student record synthesis, final test',
      english: 'Full-stack automation, data processing, graduation exam',
      urdu: 'مکمل پائتھن کا حتمی پروجیکٹ اور سرٹیفکیٹ'
    },
    totalMarks: 100,
    passingMarks: 60,
    questions: day14ExamsData
  }
];
