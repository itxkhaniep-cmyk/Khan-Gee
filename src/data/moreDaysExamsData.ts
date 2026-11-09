import { Day1ExamQuestion } from './day1ExamsData';

// Helper to generate realistic exam questions for any day with full written sheet specs
export function createDayExams(
  dayNum: number,
  dayTopicTitle: string,
  specs: {
    title: string;
    category: string;
    difficulty: 'Aasan (Easy)' | 'Darmiyana (Medium)' | 'Mushkil (Hard)';
    scenario: string;
    requirements: string[];
    sampleOutput: string;
    starterCode: string;
    solutionCode: string;
    hints: string[];
    expectedPatterns: { description: string; pattern: string | RegExp }[];
  }[]
): Day1ExamQuestion[] {
  return specs.map((spec, idx) => ({
    id: `d${dayNum}-q${idx + 1}`,
    questionNumber: idx + 1,
    marks: 10,
    category: spec.category,
    difficulty: spec.difficulty,
    title: {
      roman_urdu: `Exam ${idx + 1}: ${spec.title}`,
      english: `Exam ${idx + 1}: ${spec.title}`,
      urdu: `امتحان ${idx + 1}: ${spec.title}`
    },
    writtenSheet: {
      scenario: {
        roman_urdu: spec.scenario,
        english: spec.scenario,
        urdu: spec.scenario
      },
      requirements: {
        roman_urdu: spec.requirements,
        english: spec.requirements,
        urdu: spec.requirements
      },
      sampleOutput: spec.sampleOutput,
      rules: {
        roman_urdu: [
          'Python ke standard syntax aur indentation ka khayal rakhein',
          'Sahi output print karwayein baghair kisi runtime error ke'
        ],
        english: [
          'Maintain proper Python indentation and clean structure',
          'Ensure accurate terminal output with zero runtime errors'
        ],
        urdu: ['سنٹیکس اور انڈینٹیشن کا خیال رکھیں']
      }
    },
    starterCode: spec.starterCode,
    solutionCode: spec.solutionCode,
    hints: {
      roman_urdu: spec.hints,
      english: spec.hints,
      urdu: spec.hints
    },
    expectedPatterns: spec.expectedPatterns
  }));
}

// Day 4 Exams: Conditionals (if, elif, else) & Decision Making
export const day4ExamsData: Day1ExamQuestion[] = createDayExams(4, 'Conditionals & Branching', [
  {
    title: 'Student Grade Evaluator',
    category: 'if-elif-else',
    difficulty: 'Aasan (Easy)',
    scenario: 'Marks = 78 ke mutabiq student ka letter grade calculate karein: >= 80 par Grade A, >= 70 par Grade B, >= 60 par Grade C, warna Grade F.',
    requirements: ['marks = 78 define karein', 'if-elif-else lagayein', '"Student Marks: 78" print karein', '"Assigned Grade: B" print karein'],
    sampleOutput: 'Student Marks: 78\nAssigned Grade: B',
    starterCode: '# Day 4 - Exam 1: Grade Evaluator\nmarks = 78\n\n# Code yahan likhein:\n',
    solutionCode: 'marks = 78\nprint("Student Marks:", marks)\nif marks >= 80:\n    print("Assigned Grade: A")\nelif marks >= 70:\n    print("Assigned Grade: B")\nelif marks >= 60:\n    print("Assigned Grade: C")\nelse:\n    print("Assigned Grade: F")',
    hints: ['elif marks >= 70: branch chalegi.'],
    expectedPatterns: [{ description: 'Marks 78', pattern: /78/ }, { description: 'Grade B', pattern: /Grade:\s*B/i }]
  },
  {
    title: 'Cinema Ticket Age Checker',
    category: 'Relational Logic',
    difficulty: 'Aasan (Easy)',
    scenario: 'Cinema ticket pricing: agar age < 12 ho to 500 PKR, agar age < 60 ho to 1000 PKR, agar 60 ya barha ho (Senior Citizen) to 600 PKR. age = 25 par ticket price print karein.',
    requirements: ['age = 25 define karein', 'if-elif-else se ticket price tay karein', '"Customer Age: 25" print karein', '"Ticket Price: 1000 PKR" print karein'],
    sampleOutput: 'Customer Age: 25\nTicket Price: 1000 PKR',
    starterCode: '# Day 4 - Exam 2: Cinema Ticket\nage = 25\n\n# Code yahan likhein:\n',
    solutionCode: 'age = 25\nif age < 12:\n    price = 500\nelif age < 60:\n    price = 1000\nelse:\n    price = 600\nprint("Customer Age:", age)\nprint(f"Ticket Price: {price} PKR")',
    hints: ['age < 60 par 1000 PKR aayega.'],
    expectedPatterns: [{ description: 'Age 25', pattern: /25/ }, { description: 'Price 1000', pattern: /1000/ }]
  },
  {
    title: 'Positive, Negative or Zero Checker',
    category: 'Number Comparisons',
    difficulty: 'Aasan (Easy)',
    scenario: 'num = -15 par check karein ke number Positive hai, Negative hai ya Zero.',
    requirements: ['num = -15', 'if num > 0: Positive, elif num < 0: Negative, else: Zero', '"Number -15 is Negative" print karein'],
    sampleOutput: 'Number -15 is Negative',
    starterCode: '# Day 4 - Exam 3: Positive or Negative\nnum = -15\n\n# Code yahan likhein:\n',
    solutionCode: 'num = -15\nif num > 0:\n    print(f"Number {num} is Positive")\nelif num < 0:\n    print(f"Number {num} is Negative")\nelse:\n    print("Number is Zero")',
    hints: ['num < 0 Negative hota hai.'],
    expectedPatterns: [{ description: 'Negative', pattern: /Negative/i }, { description: '-15', pattern: /-15/ }]
  },
  {
    title: 'Driving License Eligibility Check',
    category: 'Eligibility Logic',
    difficulty: 'Aasan (Easy)',
    scenario: 'Pakistan mein driving license ke liye kam az kam 18 saal umar honi chahiye. age = 19 par check karein.',
    requirements: ['age = 19 define karein', 'if age >= 18: "Eligible for Driving License"', '"Status: Eligible for Driving License" print karein'],
    sampleOutput: 'Age: 19\nStatus: Eligible for Driving License',
    starterCode: '# Day 4 - Exam 4: License Eligibility\nage = 19\n\n# Code yahan likhein:\n',
    solutionCode: 'age = 19\nprint("Age:", age)\nif age >= 18:\n    print("Status: Eligible for Driving License")\nelse:\n    print("Status: Underage - Not Eligible")',
    hints: ['19 >= 18 True hai.'],
    expectedPatterns: [{ description: 'Age 19', pattern: /19/ }, { description: 'Eligible', pattern: /Eligible/i }]
  },
  {
    title: 'Largest of Three Numbers',
    category: 'Multi-variable Comparison',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Teen numbers: n1 = 45, n2 = 82, n3 = 60 mein se sabse bara number dhoond kar print karein.',
    requirements: ['n1 = 45, n2 = 82, n3 = 60', 'Comparison logic se largest number nikalein', '"Largest Number is: 82" print karein'],
    sampleOutput: 'Numbers: 45, 82, 60\nLargest Number is: 82',
    starterCode: '# Day 4 - Exam 5: Largest of Three\nn1 = 45\nn2 = 82\nn3 = 60\n\n# Code yahan likhein:\n',
    solutionCode: 'n1 = 45\nn2 = 82\nn3 = 60\nif n1 >= n2 and n1 >= n3:\n    largest = n1\nelif n2 >= n1 and n2 >= n3:\n    largest = n2\nelse:\n    largest = n3\nprint(f"Numbers: {n1}, {n2}, {n3}")\nprint(f"Largest Number is: {largest}")',
    hints: ['n2 >= n1 and n2 >= n3 True hoga.'],
    expectedPatterns: [{ description: '82', pattern: /82/ }, { description: 'Largest', pattern: /Largest/i }]
  },
  {
    title: 'Vowel or Consonant Character Checker',
    category: 'String Membership in Conditions',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'char = "e" par check karein ke yeh Vowel (a, e, i, o, u) hai ya Consonant.',
    requirements: ['char = "e"', 'if char in "aeiouAEIOU": "Vowel"', '"Character e is a Vowel" print karein'],
    sampleOutput: 'Character: e\nResult: Character e is a Vowel',
    starterCode: '# Day 4 - Exam 6: Vowel Checker\nchar = "e"\n\n# Code yahan likhein:\n',
    solutionCode: 'char = "e"\nif char.lower() in "aeiou":\n    print(f"Character: {char}\\nResult: Character {char} is a Vowel")\nelse:\n    print(f"Character: {char}\\nResult: Character {char} is a Consonant")',
    hints: ['in "aeiou" use karein.'],
    expectedPatterns: [{ description: 'Vowel', pattern: /Vowel/i }, { description: 'Character: e', pattern: /e/i }]
  },
  {
    title: 'Electricity Bill Slab Calculator',
    category: 'Tiered Pricing Calculations',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Units consumed = 180. Agar units <= 100 hon to 15 PKR/unit, agar <= 200 hon to 22 PKR/unit, warna 30 PKR/unit. 180 units ka bill calculate karein.',
    requirements: ['units = 180', '180 units * 22 PKR = 3960 PKR', '"Units Consumed: 180" aur "Total Bill: 3960 PKR" print karein'],
    sampleOutput: 'Units Consumed: 180\nRate per Unit: 22 PKR\nTotal Bill: 3960 PKR',
    starterCode: '# Day 4 - Exam 7: Electricity Slab\nunits = 180\n\n# Code yahan likhein:\n',
    solutionCode: 'units = 180\nif units <= 100:\n    rate = 15\nelif units <= 200:\n    rate = 22\nelse:\n    rate = 30\ntotal = units * rate\nprint("Units Consumed:", units)\nprint("Rate per Unit:", rate, "PKR")\nprint("Total Bill:", total, "PKR")',
    hints: ['180 * 22 = 3960.'],
    expectedPatterns: [{ description: 'Units 180', pattern: /180/ }, { description: 'Bill 3960', pattern: /3960/ }]
  },
  {
    title: 'Password Strength Length Checker',
    category: 'Length Function & Validation',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'password = "python_pro_2026". Agar length < 8 ho to "Weak", agar < 12 ho to "Moderate", agar 12 ya zyada ho to "Strong Password". Check karein.',
    requirements: ['password = "python_pro_2026"', 'len(password) check karein', '"Password Strength: Strong Password" print karein'],
    sampleOutput: 'Password Length: 15\nPassword Strength: Strong Password',
    starterCode: '# Day 4 - Exam 8: Password Length\npassword = "python_pro_2026"\n\n# Code yahan likhein:\n',
    solutionCode: 'password = "python_pro_2026"\nlength = len(password)\nprint("Password Length:", length)\nif length < 8:\n    print("Password Strength: Weak")\nelif length < 12:\n    print("Password Strength: Moderate")\nelse:\n    print("Password Strength: Strong Password")',
    hints: ['len() function length deta hai.'],
    expectedPatterns: [{ description: 'Length 15', pattern: /15/ }, { description: 'Strong', pattern: /Strong/i }]
  },
  {
    title: 'Triangle Validity Theorem Checker',
    category: 'Geometric Math Conditions',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Teen azla (sides): a = 7, b = 10, c = 5. Kisi triangle ki do sides ka sum teesri se bara hona chahiye (a+b>c and a+c>b and b+c>a). Check karein.',
    requirements: ['a = 7, b = 10, c = 5', 'Triangle inequality condition check karein', '"Triangle Validity: Valid Triangle" print karein'],
    sampleOutput: 'Sides: 7, 10, 5\nTriangle Validity: Valid Triangle',
    starterCode: '# Day 4 - Exam 9: Triangle Inequality\na = 7\nb = 10\nc = 5\n\n# Code yahan likhein:\n',
    solutionCode: 'a = 7\nb = 10\nc = 5\nif (a + b > c) and (a + c > b) and (b + c > a):\n    print(f"Sides: {a}, {b}, {c}\\nTriangle Validity: Valid Triangle")\nelse:\n    print("Triangle Validity: Invalid Triangle")',
    hints: ['(a + b > c) and (a + c > b) and (b + c > a)'],
    expectedPatterns: [{ description: 'Valid Triangle', pattern: /Valid Triangle/i }]
  },
  {
    title: 'Day 4 Capstone: Automated Smart Thermostat',
    category: 'Capstone Conditionals Matrix',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Smart AC controller: current_temp = 32, target_temp = 24. Agar current > target + 4 ho to "Mode: HIGH COOLING", agar current > target ho to "Mode: MILD COOLING", agar barabar ho to "Mode: MAINTAIN", warna "Mode: HEATING".',
    requirements: ['current_temp = 32, target_temp = 24', 'Complete thermostat state machine', 'Print structured thermostat card'],
    sampleOutput: '--- SMART THERMOSTAT ---\nCurrent: 32°C | Target: 24°C\nMode: HIGH COOLING (Compressor Active)',
    starterCode: '# Day 4 - Exam 10: Capstone Thermostat\ncurrent_temp = 32\ntarget_temp = 24\n\n# Code yahan likhein:\n',
    solutionCode: 'current_temp = 32\ntarget_temp = 24\nprint("--- SMART THERMOSTAT ---")\nprint(f"Current: {current_temp}°C | Target: {target_temp}°C")\nif current_temp > target_temp + 4:\n    print("Mode: HIGH COOLING (Compressor Active)")\nelif current_temp > target_temp:\n    print("Mode: MILD COOLING")\nelif current_temp == target_temp:\n    print("Mode: MAINTAIN")\nelse:\n    print("Mode: HEATING")',
    hints: ['32 > 24 + 4 HIGH COOLING trigger karega.'],
    expectedPatterns: [{ description: 'HIGH COOLING', pattern: /HIGH COOLING/i }, { description: '32', pattern: /32/ }]
  }
]);

// Day 5 Exams: Logic & Consolidation
export const day5ExamsData: Day1ExamQuestion[] = createDayExams(5, 'Logic & Consolidation', [
  {
    title: 'Boolean Truth Table Verification',
    category: 'Boolean Tables',
    difficulty: 'Aasan (Easy)',
    scenario: 'Print the evaluation of (True and False), (True or False), and (not False).',
    requirements: ['Print result of True and False (False)', 'Print result of True or False (True)', 'Print result of not False (True)'],
    sampleOutput: 'True and False: False\nTrue or False: True\nnot False: True',
    starterCode: '# Day 5 - Exam 1: Boolean Logic\n# Print evaluations:\n',
    solutionCode: 'print("True and False:", True and False)\nprint("True or False:", True or False)\nprint("not False:", not False)',
    hints: ['Direct print karein.'],
    expectedPatterns: [{ description: 'False', pattern: /False/ }, { description: 'True', pattern: /True/ }]
  },
  {
    title: 'Job Candidate Qualification Filter',
    category: 'Multiple Logic Flags',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Candidate evaluation: has_degree = True, experience_years = 3, passed_test = True. Eligibility: has_degree and (experience_years >= 2 or passed_test).',
    requirements: ['Check candidate eligibility', 'Print "Candidate Status: Shortlisted for Interview"'],
    sampleOutput: 'Degree: True | Experience: 3 yrs | Test: True\nCandidate Status: Shortlisted for Interview',
    starterCode: '# Day 5 - Exam 2: Candidate Filter\nhas_degree = True\nexperience_years = 3\npassed_test = True\n\n# Code yahan likhein:\n',
    solutionCode: 'has_degree = True\nexperience_years = 3\npassed_test = True\nprint(f"Degree: {has_degree} | Experience: {experience_years} yrs | Test: {passed_test}")\nif has_degree and (experience_years >= 2 or passed_test):\n    print("Candidate Status: Shortlisted for Interview")\nelse:\n    print("Candidate Status: Not Shortlisted")',
    hints: ['Both degree and experience match.'],
    expectedPatterns: [{ description: 'Shortlisted', pattern: /Shortlisted/i }]
  },
  {
    title: 'Bank Loan Eligibility Engine',
    category: 'Financial Logic Matrix',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Applicant: salary = 85000, credit_score = 720. Eligibility: salary >= 50000 and credit_score >= 650.',
    requirements: ['salary = 85000, credit_score = 720', 'Check eligibility with and', 'Print "Loan Approval: APPROVED"'],
    sampleOutput: 'Salary: 85000 PKR | Credit Score: 720\nLoan Approval: APPROVED (Low Risk Tier)',
    starterCode: '# Day 5 - Exam 3: Loan Eligibility\nsalary = 85000\ncredit_score = 720\n\n# Code yahan likhein:\n',
    solutionCode: 'salary = 85000\ncredit_score = 720\nprint(f"Salary: {salary} PKR | Credit Score: {credit_score}")\nif salary >= 50000 and credit_score >= 650:\n    print("Loan Approval: APPROVED (Low Risk Tier)")\nelse:\n    print("Loan Approval: REJECTED")',
    hints: ['salary >= 50000 and credit_score >= 650.'],
    expectedPatterns: [{ description: 'APPROVED', pattern: /APPROVED/i }]
  },
  {
    title: 'Username Length and Character Checker',
    category: 'String Validation',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'username = "ali_coder". Length 5 se 15 ke darmiyan honi chahiye aur space nahi honi chahiye.',
    requirements: ['username = "ali_coder"', 'Check 5 <= len(username) <= 15 and " " not in username', 'Print "Username Validation: Valid Username"'],
    sampleOutput: 'Username: ali_coder\nUsername Validation: Valid Username',
    starterCode: '# Day 5 - Exam 4: Username Validation\nusername = "ali_coder"\n\n# Code yahan likhein:\n',
    solutionCode: 'username = "ali_coder"\nif 5 <= len(username) <= 15 and " " not in username:\n    print(f"Username: {username}\\nUsername Validation: Valid Username")\nelse:\n    print("Username Validation: Invalid Username")',
    hints: ['5 <= len(username) <= 15 and " " not in username.'],
    expectedPatterns: [{ description: 'Valid Username', pattern: /Valid Username/i }]
  },
  {
    title: 'Quadratic Equation Discriminant Analysis',
    category: 'Math Conditionals',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Equation ax^2 + bx + c = 0 ke liye discriminant D = b**2 - 4*a*c. Agar a=1, b=5, c=6 ho to D calculate karein (25 - 24 = 1) aur roots type print karein (D > 0: Two Real Roots).',
    requirements: ['a = 1, b = 5, c = 6', 'D = b**2 - 4*a*c', 'Print "Discriminant D: 1" aur "Roots: Two Real & Distinct Roots"'],
    sampleOutput: 'Equation: 1x^2 + 5x + 6 = 0\nDiscriminant D: 1\nRoots: Two Real & Distinct Roots',
    starterCode: '# Day 5 - Exam 5: Quadratic Discriminant\na = 1\nb = 5\nc = 6\n\n# Code yahan likhein:\n',
    solutionCode: 'a = 1\nb = 5\nc = 6\nD = b**2 - 4*a*c\nprint(f"Equation: {a}x^2 + {b}x + {c} = 0")\nprint("Discriminant D:", D)\nif D > 0:\n    print("Roots: Two Real & Distinct Roots")\nelif D == 0:\n    print("Roots: One Repeated Real Root")\nelse:\n    print("Roots: Complex Roots")',
    hints: ['b**2 - 4*a*c calculate karein.'],
    expectedPatterns: [{ description: 'D: 1', pattern: /1/ }, { description: 'Two Real', pattern: /Two Real/i }]
  },
  {
    title: 'Discount Code Promo Validator',
    category: 'Case-Insensitive Match',
    difficulty: 'Aasan (Easy)',
    scenario: 'promo = "PAK50". Agar promo.upper() == "PAK50" ho to "50% Discount Applied!", warna "Invalid Promo Code".',
    requirements: ['promo = "PAK50"', 'Check promo code', 'Print "50% Discount Applied!"'],
    sampleOutput: 'Entered Promo: PAK50\nStatus: 50% Discount Applied!',
    starterCode: '# Day 5 - Exam 6: Promo Code\npromo = "PAK50"\n\n# Code yahan likhein:\n',
    solutionCode: 'promo = "PAK50"\nprint("Entered Promo:", promo)\nif promo.upper() == "PAK50":\n    print("Status: 50% Discount Applied!")\nelse:\n    print("Status: Invalid Promo Code")',
    hints: ['Check promo.upper() == "PAK50".'],
    expectedPatterns: [{ description: '50% Discount Applied', pattern: /50% Discount Applied/i }]
  },
  {
    title: 'Blood Donation Donor Eligibility',
    category: 'Multi-criteria Health Logic',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Donor: age = 22, weight = 55, hemoglobin = 13.5. Sharaait: age >= 18 and weight >= 50 and hemoglobin >= 12.5.',
    requirements: ['Check donor eligibility', 'Print "Donor Status: Eligible to Donate Blood"'],
    sampleOutput: 'Age: 22 | Weight: 55 kg | Hb: 13.5\nDonor Status: Eligible to Donate Blood',
    starterCode: '# Day 5 - Exam 7: Blood Donor\nage = 22\nweight = 55\nhemoglobin = 13.5\n\n# Code yahan likhein:\n',
    solutionCode: 'age = 22\nweight = 55\nhemoglobin = 13.5\nprint(f"Age: {age} | Weight: {weight} kg | Hb: {hemoglobin}")\nif age >= 18 and weight >= 50 and hemoglobin >= 12.5:\n    print("Donor Status: Eligible to Donate Blood")\nelse:\n    print("Donor Status: Ineligible")',
    hints: ['All 3 conditions are satisfied.'],
    expectedPatterns: [{ description: 'Eligible to Donate', pattern: /Eligible to Donate/i }]
  },
  {
    title: 'Tax Slabs Calculation Engine',
    category: 'Financial Tiered Deductions',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Annual income = 1,200,000 PKR. First 600,000 tax-free. Amount above 600,000 is taxed at 5%. Calculate tax (30,000 PKR).',
    requirements: ['income = 1200000', 'taxable = income - 600000', 'tax = taxable * 0.05', 'Print "Tax Payable: 30000.0 PKR"'],
    sampleOutput: 'Annual Income: 1200000 PKR\nTax-free Allowance: 600000 PKR\nTax Payable: 30000.0 PKR',
    starterCode: '# Day 5 - Exam 8: Tax Slabs\nincome = 1200000\n\n# Code yahan likhein:\n',
    solutionCode: 'income = 1200000\nallowance = 600000\nif income > allowance:\n    taxable = income - allowance\n    tax = taxable * 0.05\nelse:\n    tax = 0.0\nprint("Annual Income:", income, "PKR")\nprint("Tax-free Allowance:", allowance, "PKR")\nprint("Tax Payable:", tax, "PKR")',
    hints: ['(1200000 - 600000) * 0.05 = 30000.'],
    expectedPatterns: [{ description: 'Income 1200000', pattern: /1200000/ }, { description: 'Tax 30000', pattern: /30000/ }]
  },
  {
    title: 'E-commerce Free Gift Threshold',
    category: 'Reward Matrix',
    difficulty: 'Aasan (Easy)',
    scenario: 'cart_val = 5500. Agar cart_val >= 5000 ho to "Congratulations! Free Gift Card Unlocked!", warna "Add items worth X PKR for free gift".',
    requirements: ['cart_val = 5500', 'Check threshold', 'Print "Free Gift Card Unlocked!"'],
    sampleOutput: 'Cart Value: 5500 PKR\nReward: Congratulations! Free Gift Card Unlocked!',
    starterCode: '# Day 5 - Exam 9: Free Gift\ncart_val = 5500\n\n# Code yahan likhein:\n',
    solutionCode: 'cart_val = 5500\nprint("Cart Value:", cart_val, "PKR")\nif cart_val >= 5000:\n    print("Reward: Congratulations! Free Gift Card Unlocked!")\nelse:\n    print("Reward: No gift available")',
    hints: ['5500 >= 5000 True.'],
    expectedPatterns: [{ description: 'Free Gift Card Unlocked', pattern: /Free Gift Card Unlocked/i }]
  },
  {
    title: 'Day 5 Capstone: Complete Banking Security Guard',
    category: 'Capstone Comprehensive Logic',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Comprehensive bank transaction: account_active = True, balance = 50000, withdraw = 20000, daily_limit = 25000. All must pass for successful withdrawal.',
    requirements: ['Verify account_active, balance >= withdraw, and withdraw <= daily_limit', 'Compute remaining balance: 30000', 'Print formatted transaction receipt'],
    sampleOutput: '--- BANK TRANSACTION ---\nAccount Active: True\nRequested: 20000 PKR | Daily Limit: 25000 PKR\nTransaction: APPROVED\nNew Balance: 30000 PKR',
    starterCode: '# Day 5 - Exam 10: Capstone Bank Guard\naccount_active = True\nbalance = 50000\nwithdraw = 20000\ndaily_limit = 25000\n\n# Code yahan likhein:\n',
    solutionCode: 'account_active = True\nbalance = 50000\nwithdraw = 20000\ndaily_limit = 25000\nprint("--- BANK TRANSACTION ---")\nprint(f"Account Active: {account_active}")\nprint(f"Requested: {withdraw} PKR | Daily Limit: {daily_limit} PKR")\nif account_active and withdraw <= balance and withdraw <= daily_limit:\n    balance -= withdraw\n    print("Transaction: APPROVED")\n    print(f"New Balance: {balance} PKR")\nelse:\n    print("Transaction: DECLINED")',
    hints: ['Check all 3 conditions with and.'],
    expectedPatterns: [{ description: 'APPROVED', pattern: /APPROVED/i }, { description: 'New Balance: 30000', pattern: /30000/ }]
  }
]);

// Day 6 Exams: for Loops & range()
export const day6ExamsData: Day1ExamQuestion[] = createDayExams(6, 'for Loops & range()', [
  {
    title: 'Multiplication Table of 7',
    category: 'for loop & range()',
    difficulty: 'Aasan (Easy)',
    scenario: 'for loop aur range(1, 11) ka istemal karke 7 ka table 7 x 1 se 7 x 10 tak print karein.',
    requirements: ['Use for i in range(1, 11):', 'Print "7 x i = result"', 'Output must include 7 x 10 = 70'],
    sampleOutput: '7 x 1 = 7\n7 x 2 = 14\n...\n7 x 10 = 70',
    starterCode: '# Day 6 - Exam 1: Table of 7\n# Yahan for loop se table print karein:\n',
    solutionCode: 'for i in range(1, 11):\n    print(f"7 x {i} = {7 * i}")',
    hints: ['range(1, 11) generates 1 to 10.'],
    expectedPatterns: [{ description: '7 x 1 = 7', pattern: /7\s*x\s*1\s*=\s*7/i }, { description: '7 x 10 = 70', pattern: /7\s*x\s*10\s*=\s*70/i }]
  },
  {
    title: 'Sum of First 10 Natural Numbers',
    category: 'Accumulator Pattern',
    difficulty: 'Aasan (Easy)',
    scenario: '1 se 10 tak ke tamam numbers ka sum nikalain accumulator variable total = 0 aur for loop ke zariye (1+2+...+10 = 55).',
    requirements: ['total = 0', 'for i in range(1, 11): total += i', 'Print "Sum of 1 to 10: 55"'],
    sampleOutput: 'Sum of 1 to 10: 55',
    starterCode: '# Day 6 - Exam 2: Sum 1 to 10\ntotal = 0\n\n# Code yahan likhein:\n',
    solutionCode: 'total = 0\nfor i in range(1, 11):\n    total += i\nprint("Sum of 1 to 10:", total)',
    hints: ['total += i accumulator pattern hai.'],
    expectedPatterns: [{ description: '55', pattern: /55/ }]
  },
  {
    title: 'Print Even Numbers from 2 to 20',
    category: 'range step parameter',
    difficulty: 'Aasan (Easy)',
    scenario: 'range(2, 21, 2) ka istemal karke tamam even numbers (2, 4, 6, ..., 20) print karein.',
    requirements: ['Use range(2, 21, 2)', 'Print even numbers on single line with space or comma'],
    sampleOutput: '2 4 6 8 10 12 14 16 18 20',
    starterCode: '# Day 6 - Exam 3: Even numbers range\n# Code yahan likhein:\n',
    solutionCode: 'for num in range(2, 21, 2):\n    print(num, end=" ")\nprint()',
    hints: ['range step 2 rakhein.'],
    expectedPatterns: [{ description: '2 and 20', pattern: /2.*4.*20/ }]
  },
  {
    title: 'Factorial of 5 Calculator',
    category: 'Multiplication Accumulator',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Factorial 5! = 5 * 4 * 3 * 2 * 1 = 120 hisab karein for loop se.',
    requirements: ['fact = 1', 'for i in range(1, 6): fact *= i', 'Print "Factorial of 5 is: 120"'],
    sampleOutput: 'Factorial of 5 is: 120',
    starterCode: '# Day 6 - Exam 4: Factorial 5\nfact = 1\n\n# Code yahan likhein:\n',
    solutionCode: 'fact = 1\nfor i in range(1, 6):\n    fact *= i\nprint("Factorial of 5 is:", fact)',
    hints: ['fact *= i multiplication accumulator hai.'],
    expectedPatterns: [{ description: '120', pattern: /120/ }]
  },
  {
    title: 'Print Star Pyramid Pattern',
    category: 'Nested Loops / String Multiplication',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'for loop se 5 lines ka star triangle print karein: * to *****.',
    requirements: ['for i in range(1, 6):', 'print("*" * i)'],
    sampleOutput: '*\n**\n***\n****\n*****',
    starterCode: '# Day 6 - Exam 5: Star Pattern\n# Code yahan likhein:\n',
    solutionCode: 'for i in range(1, 6):\n    print("*" * i)',
    hints: ['"*" * i string repeat karta hai.'],
    expectedPatterns: [{ description: '5 stars', pattern: /\*{5}/ }]
  },
  {
    title: 'Count Down from 10 to 1',
    category: 'Negative Step in range',
    difficulty: 'Aasan (Easy)',
    scenario: 'range(10, 0, -1) se reverse countdown print karein aur aakhir mein "Blast Off!" print karein.',
    requirements: ['Use range(10, 0, -1)', 'Print countdown', 'Print "Blast Off!"'],
    sampleOutput: '10 9 8 7 6 5 4 3 2 1 Blast Off!',
    starterCode: '# Day 6 - Exam 6: Reverse countdown\n# Code yahan likhein:\n',
    solutionCode: 'for i in range(10, 0, -1):\n    print(i, end=" ")\nprint("Blast Off!")',
    hints: ['Step -1 negative counting karta hai.'],
    expectedPatterns: [{ description: '10 and 1', pattern: /10.*1/ }, { description: 'Blast Off', pattern: /Blast Off/i }]
  },
  {
    title: 'Calculate Squares of Numbers 1 to 5',
    category: 'Exponents in Loops',
    difficulty: 'Aasan (Easy)',
    scenario: '1 se 5 tak har number ka square (i ** 2) print karein: 1: 1, 2: 4, 3: 9, 4: 16, 5: 25.',
    requirements: ['for i in range(1, 6):', 'Print "Square of i: i**2"'],
    sampleOutput: 'Square of 1: 1\nSquare of 2: 4\nSquare of 3: 9\nSquare of 4: 16\nSquare of 5: 25',
    starterCode: '# Day 6 - Exam 7: Squares table\n# Code yahan likhein:\n',
    solutionCode: 'for i in range(1, 6):\n    print(f"Square of {i}: {i ** 2}")',
    hints: ['i ** 2 square nikalta hai.'],
    expectedPatterns: [{ description: '25', pattern: /25/ }, { description: '16', pattern: /16/ }]
  },
  {
    title: 'Looping Through String Characters',
    category: 'String Iteration',
    difficulty: 'Aasan (Easy)',
    scenario: 'word = "PYTHON". for char in word: se har letter ko nayi line par uppercase mein print karein.',
    requirements: ['Iterate through "PYTHON"', 'Print each letter'],
    sampleOutput: 'P\nY\nT\nH\nO\nN',
    starterCode: '# Day 6 - Exam 8: Character Loop\nword = "PYTHON"\n\n# Code yahan likhein:\n',
    solutionCode: 'word = "PYTHON"\nfor char in word:\n    print(char)',
    hints: ['for char in word:'],
    expectedPatterns: [{ description: 'P and N', pattern: /P[\s\S]*N/ }]
  },
  {
    title: 'Count Vowels in a Sentence',
    category: 'Counter in Loop',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'sentence = "Python is awesome". for loop se count karein ke isme kul kitne vowels (a, e, i, o, u) hain (6 vowels).',
    requirements: ['vowel_count = 0', 'Loop over sentence', 'Print "Total Vowels: 6"'],
    sampleOutput: 'Sentence: Python is awesome\nTotal Vowels: 6',
    starterCode: '# Day 6 - Exam 9: Vowel Counter\nsentence = "Python is awesome"\nvowel_count = 0\n\n# Code yahan likhein:\n',
    solutionCode: 'sentence = "Python is awesome"\nvowel_count = 0\nfor ch in sentence.lower():\n    if ch in "aeiou":\n        vowel_count += 1\nprint("Sentence:", sentence)\nprint("Total Vowels:", vowel_count)',
    hints: ['vowel_count += 1 when ch in "aeiou".'],
    expectedPatterns: [{ description: 'Total Vowels: 6', pattern: /6/ }]
  },
  {
    title: 'Day 6 Capstone: Prime Number Checker with for loop',
    category: 'Capstone Prime Algorithm',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Check if n = 29 is a Prime Number (sirf 1 aur apne aap par divide hota hai) using for loop and flag is_prime.',
    requirements: ['n = 29', 'Check divisibility from 2 to int(n**0.5) + 1', 'Print "29 is a PRIME number"'],
    sampleOutput: 'Checking Number: 29\nResult: 29 is a PRIME number',
    starterCode: '# Day 6 - Exam 10: Capstone Prime Check\nn = 29\nis_prime = True\n\n# Code yahan likhein:\n',
    solutionCode: 'n = 29\nis_prime = True\nfor i in range(2, int(n**0.5) + 1):\n    if n % i == 0:\n        is_prime = False\n        break\nprint("Checking Number:", n)\nif is_prime and n > 1:\n    print(f"Result: {n} is a PRIME number")\nelse:\n    print(f"Result: {n} is NOT prime")',
    hints: ['29 prime number hai.'],
    expectedPatterns: [{ description: '29', pattern: /29/ }, { description: 'PRIME', pattern: /PRIME/i }]
  }
]);

// Day 7 Exams: while Loops, break, continue & Flow Control (10 Distinct Questions)
export const day7ExamsData: Day1ExamQuestion[] = createDayExams(7, 'while Loops & Controls', [
  {
    title: 'Rocket Countdown Timer (5 to 1)',
    category: 'while loop countdown',
    difficulty: 'Aasan (Easy)',
    scenario: 'Count down from 5 to 1 using while loop (count = count - 1), and then print "BLAST OFF! 🚀".',
    requirements: ['count = 5 se shuru karein', 'while count > 0: print count', 'Loop ke baad "BLAST OFF! 🚀" print karein'],
    sampleOutput: '5\n4\n3\n2\n1\nBLAST OFF! 🚀',
    starterCode: '# Day 7 - Exam 1: Rocket Countdown\ncount = 5\n\n# Code yahan likhein:\n',
    solutionCode: 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1\nprint("BLAST OFF! 🚀")',
    hints: ['count -= 1 decrement karein.'],
    expectedPatterns: [{ description: 'Count 5 and 1', pattern: /5[\s\S]*1/ }, { description: 'BLAST OFF', pattern: /BLAST OFF/i }]
  },
  {
    title: 'Accumulator Pattern: Sum of 1 to 10',
    category: 'while loop accumulator',
    difficulty: 'Aasan (Easy)',
    scenario: 'Calculate the sum of all numbers from 1 to 10 using while loop. Result must be 55.',
    requirements: ['total = 0, n = 1', 'while n <= 10: total += n, n += 1', '"Total Sum (1 to 10): 55" print karein'],
    sampleOutput: 'Calculating sum 1 to 10...\nTotal Sum (1 to 10): 55',
    starterCode: '# Day 7 - Exam 2: Sum 1 to 10\ntotal = 0\nn = 1\n\n# Code yahan likhein:\n',
    solutionCode: 'total = 0\nn = 1\nwhile n <= 10:\n    total += n\n    n += 1\nprint("Calculating sum 1 to 10...")\nprint("Total Sum (1 to 10):", total)',
    hints: ['total += n har dafa jama karein.'],
    expectedPatterns: [{ description: 'Total Sum 55', pattern: /55/ }]
  },
  {
    title: 'Even Numbers Between 2 and 12',
    category: 'while loop step',
    difficulty: 'Aasan (Easy)',
    scenario: 'Print even numbers starting from 2 up to and including 12 using while loop.',
    requirements: ['num = 2', 'while num <= 12:', 'num += 2 increment karein'],
    sampleOutput: 'Even Numbers:\n2\n4\n6\n8\n10\n12',
    starterCode: '# Day 7 - Exam 3: Even Numbers\nnum = 2\n\n# Code yahan likhein:\n',
    solutionCode: 'num = 2\nprint("Even Numbers:")\nwhile num <= 12:\n    print(num)\n    num += 2',
    hints: ['num += 2 step lagayein.'],
    expectedPatterns: [{ description: '2 and 12', pattern: /2[\s\S]*12/ }]
  },
  {
    title: 'Multiplication Table of 7 with while Loop',
    category: 'while loop arithmetic',
    difficulty: 'Aasan (Easy)',
    scenario: 'Generate the multiplication table of 7 from 1 to 5: 7 x 1 = 7 up to 7 x 5 = 35 using while loop.',
    requirements: ['multiplier = 1', 'while multiplier <= 5:', 'Format: 7 x {i} = {7*i}'],
    sampleOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35',
    starterCode: '# Day 7 - Exam 4: Table of 7\nmultiplier = 1\n\n# Code yahan likhein:\n',
    solutionCode: 'multiplier = 1\nwhile multiplier <= 5:\n    print(f"7 x {multiplier} = {7 * multiplier}")\n    multiplier += 1',
    hints: ['multiplier += 1 increment karein.'],
    expectedPatterns: [{ description: '7 x 1 = 7', pattern: /7\s*x\s*1\s*=\s*7/i }, { description: '35', pattern: /35/ }]
  },
  {
    title: 'ATM PIN Security: Max 3 Retries with break',
    category: 'while loop break',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'A student tries entering ATM PINs [8888, 4321, 1234]. Loop over attempts; when PIN is 1234, print "PIN Correct! Access Granted" and break immediately.',
    requirements: ['attempts = [8888, 4321, 1234]', 'while index < len(attempts):', 'If pin == 1234: break', '"Access Granted" print karein'],
    sampleOutput: 'Attempt 1 (PIN 8888): Incorrect\nAttempt 2 (PIN 4321): Incorrect\nAttempt 3 (PIN 1234): PIN Correct! Access Granted',
    starterCode: '# Day 7 - Exam 5: ATM PIN Security\nattempts = [8888, 4321, 1234]\ni = 0\n\n# Code yahan likhein:\n',
    solutionCode: 'attempts = [8888, 4321, 1234]\ni = 0\nwhile i < len(attempts):\n    pin = attempts[i]\n    if pin == 1234:\n        print(f"Attempt {i+1} (PIN {pin}): PIN Correct! Access Granted")\n        break\n    else:\n        print(f"Attempt {i+1} (PIN {pin}): Incorrect")\n    i += 1',
    hints: ['if pin == 1234: break'],
    expectedPatterns: [{ description: 'Access Granted', pattern: /Access Granted/i }, { description: '1234', pattern: /1234/ }]
  },
  {
    title: 'Using continue to Skip Odd Numbers',
    category: 'while loop continue',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Loop numbers 1 to 6. If the number is odd (n % 2 != 0), use continue to skip it. Only print even numbers.',
    requirements: ['n = 0', 'while n < 6: n += 1', 'if n % 2 != 0: continue', 'print(n)'],
    sampleOutput: 'Filtered Even Numbers:\n2\n4\n6',
    starterCode: '# Day 7 - Exam 6: Skip with continue\nn = 0\nprint("Filtered Even Numbers:")\n\n# Code yahan likhein:\n',
    solutionCode: 'n = 0\nprint("Filtered Even Numbers:")\nwhile n < 6:\n    n += 1\n    if n % 2 != 0:\n        continue\n    print(n)',
    hints: ['if n % 2 != 0: continue'],
    expectedPatterns: [{ description: '2, 4, 6', pattern: /2[\s\S]*4[\s\S]*6/ }]
  },
  {
    title: 'Digit Sum Extraction (% 10 and // 10)',
    category: 'while loop math algorithm',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Given num = 458, use while loop with modulo % 10 (last digit) and integer division // 10 (remove last digit) to calculate the sum of its digits (4 + 5 + 8 = 17).',
    requirements: ['num = 458, digit_sum = 0', 'while num > 0: digit_sum += num % 10, num = num // 10', '"Sum of digits of 458 is: 17" print karein'],
    sampleOutput: 'Original Number: 458\nSum of digits of 458 is: 17',
    starterCode: '# Day 7 - Exam 7: Digit Sum\noriginal = 458\nnum = original\ndigit_sum = 0\n\n# Code yahan likhein:\n',
    solutionCode: 'original = 458\nnum = original\ndigit_sum = 0\nwhile num > 0:\n    digit_sum += num % 10\n    num = num // 10\nprint("Original Number:", original)\nprint(f"Sum of digits of {original} is: {digit_sum}")',
    hints: ['num % 10 aakhri digit deta hai, num // 10 aakhri digit hata deta hai.'],
    expectedPatterns: [{ description: 'Original 458', pattern: /458/ }, { description: 'Sum 17', pattern: /17/ }]
  },
  {
    title: 'Compound Savings: Years to Double Money',
    category: 'while loop simulation',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Initial savings = 1000 PKR. Target = 8000 PKR. Every year, money doubles (savings = savings * 2). Calculate how many years it takes to reach target.',
    requirements: ['savings = 1000, target = 8000, years = 0', 'while savings < target: savings *= 2, years += 1', '"Target reached in 3 years" print karein'],
    sampleOutput: 'Starting: 1000 PKR\nYear 1: 2000 PKR\nYear 2: 4000 PKR\nYear 3: 8000 PKR\nTarget reached in 3 years!',
    starterCode: '# Day 7 - Exam 8: Savings Doubler\nsavings = 1000\ntarget = 8000\nyears = 0\n\n# Code yahan likhein:\n',
    solutionCode: 'savings = 1000\ntarget = 8000\nyears = 0\nprint("Starting:", savings, "PKR")\nwhile savings < target:\n    savings *= 2\n    years += 1\n    print(f"Year {years}: {savings} PKR")\nprint(f"Target reached in {years} years!")',
    hints: ['savings *= 2 aur years += 1.'],
    expectedPatterns: [{ description: '8000 PKR', pattern: /8000/ }, { description: '3 years', pattern: /3\s*years/i }]
  },
  {
    title: 'Finding the Smallest Divisor Above 1',
    category: 'while loop search',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Find the smallest divisor of number = 49 greater than 1 using while loop (divisor = 2, while number % divisor != 0: divisor += 1).',
    requirements: ['number = 49, divisor = 2', 'while number % divisor != 0: divisor += 1', '"Smallest divisor of 49 is: 7" print karein'],
    sampleOutput: 'Checking Number: 49\nSmallest divisor of 49 is: 7',
    starterCode: '# Day 7 - Exam 9: Smallest Divisor\nnumber = 49\ndivisor = 2\n\n# Code yahan likhein:\n',
    solutionCode: 'number = 49\ndivisor = 2\nwhile number % divisor != 0:\n    divisor += 1\nprint("Checking Number:", number)\nprint(f"Smallest divisor of {number} is: {divisor}")',
    hints: ['49 ka divisor 7 hai.'],
    expectedPatterns: [{ description: '49', pattern: /49/ }, { description: 'divisor is: 7', pattern: /7/ }]
  },
  {
    title: 'Day 7 Capstone: Guessing Game Simulation',
    category: 'Capstone Game Loop',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Day 7 Capstone! Secret number is 42. A player makes guesses [15, 60, 30, 42]. While loop checks each guess: if guess < secret: "Too Low!", elif guess > secret: "Too High!", else: "BINGO! Found 42 in X attempts" and break.',
    requirements: ['secret = 42, guesses = [15, 60, 30, 42]', 'while loop over guesses', 'Break on match', 'Print comprehensive game summary'],
    sampleOutput: '--- NUMBER GUESSING GAME ---\nGuess #1 (15): Too Low!\nGuess #2 (60): Too High!\nGuess #3 (30): Too Low!\nGuess #4 (42): BINGO! Secret 42 found in 4 attempts!',
    starterCode: '# Day 7 - Exam 10: Capstone Guessing Game\nsecret = 42\nguesses = [15, 60, 30, 42]\nidx = 0\n\n# Code yahan likhein:\n',
    solutionCode: 'secret = 42\nguesses = [15, 60, 30, 42]\nidx = 0\nprint("--- NUMBER GUESSING GAME ---")\nwhile idx < len(guesses):\n    g = guesses[idx]\n    attempt = idx + 1\n    if g == secret:\n        print(f"Guess #{attempt} ({g}): BINGO! Secret {secret} found in {attempt} attempts!")\n        break\n    elif g < secret:\n        print(f"Guess #{attempt} ({g}): Too Low!")\n    else:\n        print(f"Guess #{attempt} ({g}): Too High!")\n    idx += 1',
    hints: ['idx += 1 loop ke aakhir mein lagayein aur match par break karein.'],
    expectedPatterns: [{ description: 'BINGO', pattern: /BINGO/i }, { description: '4 attempts', pattern: /4\s*attempts/i }, { description: '42', pattern: /42/ }]
  }
]);

// Day 8 Exams: Lists (Fihristein) & Slicing Operations (10 Distinct Questions)
export const day8ExamsData: Day1ExamQuestion[] = createDayExams(8, 'Lists & Slicing', [
  {
    title: 'Grocery List Creation & Indexing',
    category: 'List indexing',
    difficulty: 'Aasan (Easy)',
    scenario: 'Create a list items = ["Rice", "Sugar", "Milk", "Tea", "Oil"]. Print the first item, last item using negative index [-1], and total length len(items).',
    requirements: ['items = ["Rice", "Sugar", "Milk", "Tea", "Oil"]', 'Print items[0], items[-1], len(items)'],
    sampleOutput: 'Grocery List: 5 items\nFirst Item: Rice\nLast Item: Oil',
    starterCode: '# Day 8 - Exam 1: List Indexing\nitems = ["Rice", "Sugar", "Milk", "Tea", "Oil"]\n\n# Code yahan likhein:\n',
    solutionCode: 'items = ["Rice", "Sugar", "Milk", "Tea", "Oil"]\nprint(f"Grocery List: {len(items)} items")\nprint("First Item:", items[0])\nprint("Last Item:", items[-1])',
    hints: ['items[0] pehla item aur items[-1] aakhri item deta hai.'],
    expectedPatterns: [{ description: '5 items', pattern: /5/ }, { description: 'Rice', pattern: /Rice/i }, { description: 'Oil', pattern: /Oil/i }]
  },
  {
    title: 'Adding Items (.append and .insert)',
    category: 'List modification',
    difficulty: 'Aasan (Easy)',
    scenario: 'skills = ["HTML", "CSS"]. Use skills.append("Python") to add at the end, and skills.insert(0, "Git") to add at index 0. Print final list.',
    requirements: ['skills = ["HTML", "CSS"]', '.append("Python") aur .insert(0, "Git")', 'Print final skills list'],
    sampleOutput: 'Initial: [\'HTML\', \'CSS\']\nUpdated Skills: [\'Git\', \'HTML\', \'CSS\', \'Python\']',
    starterCode: '# Day 8 - Exam 2: Append & Insert\nskills = ["HTML", "CSS"]\n\n# Code yahan likhein:\n',
    solutionCode: 'skills = ["HTML", "CSS"]\nprint("Initial:", skills)\nskills.append("Python")\nskills.insert(0, "Git")\nprint("Updated Skills:", skills)',
    hints: ['skills.append("Python") aakhir mein shamil karega.'],
    expectedPatterns: [{ description: 'Git', pattern: /Git/i }, { description: 'Python', pattern: /Python/i }]
  },
  {
    title: 'List Slicing [1:4]',
    category: 'List slicing',
    difficulty: 'Aasan (Easy)',
    scenario: 'cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Multan"]. Slice the middle cities from index 1 to 4 (index 4 excluded).',
    requirements: ['cities list define karein', 'middle = cities[1:4]', 'Print sliced list'],
    sampleOutput: 'All Cities: 6\nMiddle Cities (1 to 4): [\'Lahore\', \'Islamabad\', \'Peshawar\']',
    starterCode: '# Day 8 - Exam 3: List Slicing\ncities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Multan"]\n\n# Code yahan likhein:\n',
    solutionCode: 'cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Multan"]\nmiddle = cities[1:4]\nprint("All Cities:", len(cities))\nprint("Middle Cities (1 to 4):", middle)',
    hints: ['cities[1:4] teen shehar nikalega.'],
    expectedPatterns: [{ description: 'Lahore', pattern: /Lahore/i }, { description: 'Peshawar', pattern: /Peshawar/i }]
  },
  {
    title: 'Reversing a List with Step [::-1]',
    category: 'Negative step slicing',
    difficulty: 'Aasan (Easy)',
    scenario: 'numbers = [10, 20, 30, 40, 50]. Reverse this list using slicing syntax [::-1] and print reversed result.',
    requirements: ['numbers = [10, 20, 30, 40, 50]', 'reversed_nums = numbers[::-1]', 'Print reversed list'],
    sampleOutput: 'Original: [10, 20, 30, 40, 50]\nReversed: [50, 40, 30, 20, 10]',
    starterCode: '# Day 8 - Exam 4: Reverse with [::-1]\nnumbers = [10, 20, 30, 40, 50]\n\n# Code yahan likhein:\n',
    solutionCode: 'numbers = [10, 20, 30, 40, 50]\nreversed_nums = numbers[::-1]\nprint("Original:", numbers)\nprint("Reversed:", reversed_nums)',
    hints: ['numbers[::-1] se poori list ulti ho jati hai.'],
    expectedPatterns: [{ description: '50, 40', pattern: /50,\s*40/ }]
  },
  {
    title: 'Removing Elements (.remove and .pop)',
    category: 'List removal methods',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'queue = ["Tariq", "Hamza", "Sara", "Zain"]. First served customer leaves via queue.pop(0). "Sara" cancels appointment via queue.remove("Sara"). Print final queue.',
    requirements: ['queue list define karein', 'served = queue.pop(0)', 'queue.remove("Sara")', 'Print served customer and final queue'],
    sampleOutput: 'Served Customer: Tariq\nCancelled: Sara\nRemaining Queue: [\'Hamza\', \'Zain\']',
    starterCode: '# Day 8 - Exam 5: pop and remove\nqueue = ["Tariq", "Hamza", "Sara", "Zain"]\n\n# Code yahan likhein:\n',
    solutionCode: 'queue = ["Tariq", "Hamza", "Sara", "Zain"]\nserved = queue.pop(0)\nqueue.remove("Sara")\nprint("Served Customer:", served)\nprint("Cancelled: Sara")\nprint("Remaining Queue:", queue)',
    hints: ['pop(0) index 0 nikalta hai, remove("Sara") value remove karta hai.'],
    expectedPatterns: [{ description: 'Served Tariq', pattern: /Tariq/i }, { description: 'Hamza, Zain', pattern: /Hamza[\s\S]*Zain/i }]
  },
  {
    title: 'Student Marks Analysis (max, min, sum, avg)',
    category: 'List aggregations',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'marks = [75, 88, 92, 60, 85]. Find Highest mark using max(), Lowest mark using min(), Total using sum(), and Average (sum / len).',
    requirements: ['Calculate max, min, sum, and avg', 'Print formatted statistics card'],
    sampleOutput: 'Marks: [75, 88, 92, 60, 85]\nHighest Mark: 92\nLowest Mark: 60\nTotal Marks: 400\nAverage Mark: 80.0',
    starterCode: '# Day 8 - Exam 6: Marks Analysis\nmarks = [75, 88, 92, 60, 85]\n\n# Code yahan likhein:\n',
    solutionCode: 'marks = [75, 88, 92, 60, 85]\nprint("Marks:", marks)\nprint("Highest Mark:", max(marks))\nprint("Lowest Mark:", min(marks))\nprint("Total Marks:", sum(marks))\nprint("Average Mark:", sum(marks) / len(marks))',
    hints: ['sum(marks) / len(marks) = 80.0.'],
    expectedPatterns: [{ description: 'Highest 92', pattern: /92/ }, { description: 'Lowest 60', pattern: /60/ }, { description: 'Average 80.0', pattern: /80/ }]
  },
  {
    title: 'Filtering Even Numbers into New List',
    category: 'List filtering loop',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'raw_numbers = [12, 7, 19, 24, 30, 15, 8]. Loop over numbers and append only even numbers (num % 2 == 0) to evens list. Print evens.',
    requirements: ['raw_numbers define karein', 'evens = []', 'for num in raw_numbers: if even: append', 'Print evens list'],
    sampleOutput: 'Raw: [12, 7, 19, 24, 30, 15, 8]\nFiltered Evens: [12, 24, 30, 8]',
    starterCode: '# Day 8 - Exam 7: Filter Evens\nraw_numbers = [12, 7, 19, 24, 30, 15, 8]\nevens = []\n\n# Code yahan likhein:\n',
    solutionCode: 'raw_numbers = [12, 7, 19, 24, 30, 15, 8]\nevens = []\nfor num in raw_numbers:\n    if num % 2 == 0:\n        evens.append(num)\nprint("Raw:", raw_numbers)\nprint("Filtered Evens:", evens)',
    hints: ['if num % 2 == 0: evens.append(num).'],
    expectedPatterns: [{ description: '12, 24, 30, 8', pattern: /12[\s\S]*24[\s\S]*30[\s\S]*8/ }]
  },
  {
    title: 'List Concatenation (+) and Frequency (.count)',
    category: 'List math & counting',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'batch_a = ["Ali", "Sara", "Hamza"] and batch_b = ["Sara", "Zain", "Sara"]. Combine them into all_students. Use .count("Sara") to find how many times Sara appears (3).',
    requirements: ['all_students = batch_a + batch_b', 'sara_count = all_students.count("Sara")', 'Print combined list and count'],
    sampleOutput: 'Combined Roster: 6 students\nOccurrences of Sara: 3',
    starterCode: '# Day 8 - Exam 8: Concatenation and count\nbatch_a = ["Ali", "Sara", "Hamza"]\nbatch_b = ["Sara", "Zain", "Sara"]\n\n# Code yahan likhein:\n',
    solutionCode: 'batch_a = ["Ali", "Sara", "Hamza"]\nbatch_b = ["Sara", "Zain", "Sara"]\nall_students = batch_a + batch_b\nsara_count = all_students.count("Sara")\nprint(f"Combined Roster: {len(all_students)} students")\nprint("Occurrences of Sara:", sara_count)',
    hints: ['batch_a + batch_b dono lists jod deta hai.'],
    expectedPatterns: [{ description: '6 students', pattern: /6/ }, { description: 'Sara: 3', pattern: /3/ }]
  },
  {
    title: 'Finding Index of Value with Error Check',
    category: 'List .index() and in keyword',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'fruits = ["Mango", "Apple", "Banana", "Orange"]. Check if "Banana" is in fruits. If yes, print its index position using fruits.index("Banana") (index 2).',
    requirements: ['fruits list define karein', 'if "Banana" in fruits:', 'pos = fruits.index("Banana")', 'Print "Banana found at index 2"'],
    sampleOutput: 'Fruit Catalog: [\'Mango\', \'Apple\', \'Banana\', \'Orange\']\nBanana found at index 2 (Item #3)',
    starterCode: '# Day 8 - Exam 9: Find Index\nfruits = ["Mango", "Apple", "Banana", "Orange"]\n\n# Code yahan likhein:\n',
    solutionCode: 'fruits = ["Mango", "Apple", "Banana", "Orange"]\nprint("Fruit Catalog:", fruits)\nif "Banana" in fruits:\n    idx = fruits.index("Banana")\n    print(f"Banana found at index {idx} (Item #{idx+1})")',
    hints: ['fruits.index("Banana") index 2 dega.'],
    expectedPatterns: [{ description: 'index 2', pattern: /index\s*2/i }]
  },
  {
    title: 'Day 8 Capstone: Leaderboard Sorter & Top 3 Winners',
    category: 'Capstone List Algorithm',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Day 8 Capstone! Player scores: scores = [240, 890, 510, 950, 720, 630]. Sort them descending using scores.sort(reverse=True). Extract top 3 scores via slicing [:3]. Print Gold, Silver, Bronze podium.',
    requirements: ['scores.sort(reverse=True)', 'top3 = scores[:3]', 'Print Gold (1st: 950), Silver (2nd: 890), Bronze (3rd: 720)'],
    sampleOutput: '--- GAMING LEADERBOARD ---\nGold Medal (1st): 950 points\nSilver Medal (2nd): 890 points\nBronze Medal (3rd): 720 points\nAll Scores Sorted: [950, 890, 720, 630, 510, 240]',
    starterCode: '# Day 8 - Exam 10: Capstone Leaderboard\nscores = [240, 890, 510, 950, 720, 630]\n\n# Code yahan likhein:\n',
    solutionCode: 'scores = [240, 890, 510, 950, 720, 630]\nscores.sort(reverse=True)\ntop3 = scores[:3]\nprint("--- GAMING LEADERBOARD ---")\nprint(f"Gold Medal (1st): {top3[0]} points")\nprint(f"Silver Medal (2nd): {top3[1]} points")\nprint(f"Bronze Medal (3rd): {top3[2]} points")\nprint("All Scores Sorted:", scores)',
    hints: ['scores.sort(reverse=True) descending sort karta hai.'],
    expectedPatterns: [{ description: 'Gold 950', pattern: /950/ }, { description: 'Silver 890', pattern: /890/ }, { description: 'Bronze 720', pattern: /720/ }]
  }
]);

// Day 9 Exams: Tuples & Sets (Immutable Data & Unique Sets) (10 Distinct Questions)
export const day9ExamsData: Day1ExamQuestion[] = createDayExams(9, 'Tuples & Sets', [
  {
    title: 'GPS Coordinates Tuple',
    category: 'Tuple fundamentals',
    difficulty: 'Aasan (Easy)',
    scenario: 'Define immutable coordinates tuple karachi_gps = (24.8607, 67.0011). Print latitude, longitude, and data type type(karachi_gps).',
    requirements: ['karachi_gps = (24.8607, 67.0011)', 'Print lat karachi_gps[0] and lon karachi_gps[1]'],
    sampleOutput: 'Karachi GPS: (24.8607, 67.0011)\nLatitude: 24.8607\nLongitude: 67.0011\nType: <class \'tuple\'>',
    starterCode: '# Day 9 - Exam 1: GPS Tuple\nkarachi_gps = (24.8607, 67.0011)\n\n# Code yahan likhein:\n',
    solutionCode: 'karachi_gps = (24.8607, 67.0011)\nprint("Karachi GPS:", karachi_gps)\nprint("Latitude:", karachi_gps[0])\nprint("Longitude:", karachi_gps[1])\nprint("Type:", type(karachi_gps))',
    hints: ['Tuple round brackets () mein banta hai.'],
    expectedPatterns: [{ description: '24.8607', pattern: /24\.8607/ }, { description: '67.0011', pattern: /67\.0011/ }, { description: 'tuple', pattern: /tuple/i }]
  },
  {
    title: 'Tuple Unpacking in One Statement',
    category: 'Tuple unpacking',
    difficulty: 'Aasan (Easy)',
    scenario: 'student = ("Muhammad Ahmed", 22, "Computer Science", 3.85). Unpack into name, age, major, gpa in a single line. Print formatted report.',
    requirements: ['Unpack: name, age, major, gpa = student', 'Print student details'],
    sampleOutput: 'Student: Muhammad Ahmed\nAge: 22 years\nMajor: Computer Science\nGPA: 3.85',
    starterCode: '# Day 9 - Exam 2: Tuple Unpacking\nstudent = ("Muhammad Ahmed", 22, "Computer Science", 3.85)\n\n# Code yahan likhein:\n',
    solutionCode: 'student = ("Muhammad Ahmed", 22, "Computer Science", 3.85)\nname, age, major, gpa = student\nprint("Student:", name)\nprint(f"Age: {age} years")\nprint("Major:", major)\nprint(f"GPA: {gpa}")',
    hints: ['name, age, major, gpa = student ek hi line mein charon variables bhar deta hai.'],
    expectedPatterns: [{ description: 'Muhammad Ahmed', pattern: /Muhammad Ahmed/i }, { description: 'GPA: 3.85', pattern: /3\.85/ }]
  },
  {
    title: 'Tuple Immutability & Methods (.count, .index)',
    category: 'Tuple methods',
    difficulty: 'Aasan (Easy)',
    scenario: 'grades = ("A", "B", "A", "C", "A", "B"). Use grades.count("A") to find how many As were scored (3), and grades.index("C") to find where C is (index 3).',
    requirements: ['count As and find index of C', 'Print report'],
    sampleOutput: 'Grades Tuple: (\'A\', \'B\', \'A\', \'C\', \'A\', \'B\')\nCount of Grade A: 3\nFirst Grade C at Index: 3',
    starterCode: '# Day 9 - Exam 3: Tuple Methods\ngrades = ("A", "B", "A", "C", "A", "B")\n\n# Code yahan likhein:\n',
    solutionCode: 'grades = ("A", "B", "A", "C", "A", "B")\nprint("Grades Tuple:", grades)\nprint("Count of Grade A:", grades.count("A"))\nprint("First Grade C at Index:", grades.index("C"))',
    hints: ['grades.count("A") 3 dega.'],
    expectedPatterns: [{ description: 'Count 3', pattern: /3/ }, { description: 'Index: 3', pattern: /3/ }]
  },
  {
    title: 'Deduplicating Lists with set()',
    category: 'Set unique items',
    difficulty: 'Aasan (Easy)',
    scenario: 'raw_ids = [101, 102, 101, 105, 102, 108, 105]. Convert to set unique_ids = set(raw_ids). Print length difference showing duplicates removed.',
    requirements: ['unique_ids = set(raw_ids)', 'Calculate removed = len(raw_ids) - len(unique_ids)', 'Print unique count (4) and duplicates removed (3)'],
    sampleOutput: 'Raw IDs: 7 records\nUnique IDs: {101, 102, 105, 108} (4 unique)\nDuplicates Filtered: 3 records removed',
    starterCode: '# Day 9 - Exam 4: Remove Duplicates with Set\nraw_ids = [101, 102, 101, 105, 102, 108, 105]\n\n# Code yahan likhein:\n',
    solutionCode: 'raw_ids = [101, 102, 101, 105, 102, 108, 105]\nunique_ids = set(raw_ids)\nprint(f"Raw IDs: {len(raw_ids)} records")\nprint(f"Unique IDs: {unique_ids} ({len(unique_ids)} unique)")\nprint(f"Duplicates Filtered: {len(raw_ids) - len(unique_ids)} records removed")',
    hints: ['set() duplicates ko khud-ba-khud filter kar deta hai.'],
    expectedPatterns: [{ description: '4 unique', pattern: /4/ }, { description: '3 records removed', pattern: /3/ }]
  },
  {
    title: 'Adding and Discarding in Sets (.add, .discard)',
    category: 'Set modification',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'skills = {"Python", "SQL", "Excel"}. Add "FastAPI" using skills.add("FastAPI"). Discard "Excel" using skills.discard("Excel"). Verify "FastAPI" in skills.',
    requirements: ['skills.add("FastAPI")', 'skills.discard("Excel")', 'Check "FastAPI" in skills', 'Print final set'],
    sampleOutput: 'Added FastAPI and removed Excel.\nIs FastAPI present? True\nUpdated Skills: 3 skills',
    starterCode: '# Day 9 - Exam 5: Add and Discard\nskills = {"Python", "SQL", "Excel"}\n\n# Code yahan likhein:\n',
    solutionCode: 'skills = {"Python", "SQL", "Excel"}\nskills.add("FastAPI")\nskills.discard("Excel")\nprint("Added FastAPI and removed Excel.")\nprint("Is FastAPI present?", "FastAPI" in skills)\nprint(f"Updated Skills: {len(skills)} skills")',
    hints: ['.add() element daalta hai, .discard() safe tarike se nikalta hai.'],
    expectedPatterns: [{ description: 'True', pattern: /True/i }, { description: '3 skills', pattern: /3/ }]
  },
  {
    title: 'Set Union (|): Combined Academy Roster',
    category: 'Set union operation',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'python_class = {"Ali", "Bilal", "Sara"}. web_class = {"Sara", "Hamza", "Zain"}. Calculate all unique students in academy using union python_class | web_class (5 total).',
    requirements: ['all_students = python_class | web_class', 'Print unique roster count (5)'],
    sampleOutput: 'Python Students: 3\nWeb Students: 3\nCombined Unique Academy Roster: 5 students',
    starterCode: '# Day 9 - Exam 6: Set Union\npython_class = {"Ali", "Bilal", "Sara"}\nweb_class = {"Sara", "Hamza", "Zain"}\n\n# Code yahan likhein:\n',
    solutionCode: 'python_class = {"Ali", "Bilal", "Sara"}\nweb_class = {"Sara", "Hamza", "Zain"}\nall_students = python_class | web_class\nprint("Python Students:", len(python_class))\nprint("Web Students:", len(web_class))\nprint(f"Combined Unique Academy Roster: {len(all_students)} students")',
    hints: ['Union operator | hai.'],
    expectedPatterns: [{ description: '5 students', pattern: /5/ }]
  },
  {
    title: 'Set Intersection (&): Dual-Course Students',
    category: 'Set intersection',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Find students enrolled in BOTH Python AND Web development classes using intersection python_class & web_class ("Sara").',
    requirements: ['dual = python_class & web_class', 'Print dual enrolled student'],
    sampleOutput: 'Dual-Enrolled Students (In Both Classes): {\'Sara\'}\nCount: 1 student',
    starterCode: '# Day 9 - Exam 7: Set Intersection\npython_class = {"Ali", "Bilal", "Sara"}\nweb_class = {"Sara", "Hamza", "Zain"}\n\n# Code yahan likhein:\n',
    solutionCode: 'python_class = {"Ali", "Bilal", "Sara"}\nweb_class = {"Sara", "Hamza", "Zain"}\ndual = python_class & web_class\nprint("Dual-Enrolled Students (In Both Classes):", dual)\nprint(f"Count: {len(dual)} student")',
    hints: ['Intersection operator & hai.'],
    expectedPatterns: [{ description: 'Sara', pattern: /Sara/i }, { description: '1 student', pattern: /1/ }]
  },
  {
    title: 'Set Difference (-): Python-Only Students',
    category: 'Set difference',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Find students who take Python but do NOT take Web development using difference python_only = python_class - web_class (Ali, Bilal).',
    requirements: ['python_only = python_class - web_class', 'Print python-only students (2)'],
    sampleOutput: 'Python-Only Students: 2 students\nNames: Ali and Bilal',
    starterCode: '# Day 9 - Exam 8: Set Difference\npython_class = {"Ali", "Bilal", "Sara"}\nweb_class = {"Sara", "Hamza", "Zain"}\n\n# Code yahan likhein:\n',
    solutionCode: 'python_class = {"Ali", "Bilal", "Sara"}\nweb_class = {"Sara", "Hamza", "Zain"}\npython_only = python_class - web_class\nprint(f"Python-Only Students: {len(python_only)} students")\nprint("Names: Ali and Bilal")',
    hints: ['Difference operator - hai.'],
    expectedPatterns: [{ description: '2 students', pattern: /2/ }, { description: 'Ali', pattern: /Ali/i }]
  },
  {
    title: 'Subset Check (.issubset): Job Skill Requirements',
    category: 'Set subset verification',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'job_required = {"Python", "Git"}. applicant_skills = {"Python", "Git", "SQL", "Docker", "Linux"}. Check if job_required.issubset(applicant_skills). If True, print "Candidate Qualified for Interview!".',
    requirements: ['job_required.issubset(applicant_skills)', 'Print qualification status'],
    sampleOutput: 'Required: {\'Git\', \'Python\'}\nApplicant Skills: 5 total\nQualified? True\nStatus: Candidate Qualified for Interview!',
    starterCode: '# Day 9 - Exam 9: Subset Check\njob_required = {"Python", "Git"}\napplicant_skills = {"Python", "Git", "SQL", "Docker", "Linux"}\n\n# Code yahan likhein:\n',
    solutionCode: 'job_required = {"Python", "Git"}\napplicant_skills = {"Python", "Git", "SQL", "Docker", "Linux"}\nis_qualified = job_required.issubset(applicant_skills)\nprint("Required:", job_required)\nprint(f"Applicant Skills: {len(applicant_skills)} total")\nprint("Qualified?", is_qualified)\nif is_qualified:\n    print("Status: Candidate Qualified for Interview!")',
    hints: ['.issubset() check karta hai ke kya required skills applicant ke pas mojood hain.'],
    expectedPatterns: [{ description: 'True', pattern: /True/i }, { description: 'Qualified', pattern: /Qualified/i }]
  },
  {
    title: 'Day 9 Capstone: Multi-Campus Sports Roster Audit',
    category: 'Capstone Set Analysis',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Day 9 Capstone! Three campus teams: campus_a = {"Tariq", "Omar", "Sara"}, campus_b = {"Sara", "Omar", "Zain"}, campus_c = {"Omar", "Sara", "Ali"}. Calculate total unique athletes across all three campuses, and find all-star athletes present in all three campuses.',
    requirements: ['all_athletes = campus_a | campus_b | campus_c', 'all_star = campus_a & campus_b & campus_c', 'Print detailed audit summary'],
    sampleOutput: '--- MULTI-CAMPUS ATHLETICS AUDIT ---\nTotal Unique Athletes: 5\nAll-Star Athletes (In All 3 Campuses): {\'Omar\', \'Sara\'} (2 athletes)\nSingle-Campus Only: Tariq, Zain, Ali',
    starterCode: '# Day 9 - Exam 10: Capstone Sports Audit\ncampus_a = {"Tariq", "Omar", "Sara"}\ncampus_b = {"Sara", "Omar", "Zain"}\ncampus_c = {"Omar", "Sara", "Ali"}\n\n# Code yahan likhein:\n',
    solutionCode: 'campus_a = {"Tariq", "Omar", "Sara"}\ncampus_b = {"Sara", "Omar", "Zain"}\ncampus_c = {"Omar", "Sara", "Ali"}\nall_athletes = campus_a | campus_b | campus_c\nall_star = campus_a & campus_b & campus_c\nprint("--- MULTI-CAMPUS ATHLETICS AUDIT ---")\nprint("Total Unique Athletes:", len(all_athletes))\nprint(f"All-Star Athletes (In All 3 Campuses): {all_star} ({len(all_star)} athletes)")\nprint("Single-Campus Only: Tariq, Zain, Ali")',
    hints: ['campus_a | campus_b | campus_c sabko jodega, campus_a & campus_b & campus_c common nikalega.'],
    expectedPatterns: [{ description: '5 unique', pattern: /5/ }, { description: 'Omar and Sara', pattern: /Omar[\s\S]*Sara|Sara[\s\S]*Omar/i }]
  }
]);

// Day 10 Exams: Dictionaries & Key-Value Pair Data (10 Distinct Questions)
export const day10ExamsData: Day1ExamQuestion[] = createDayExams(10, 'Dictionaries & Lookups', [
  {
    title: 'Student Profile Dictionary Creation',
    category: 'Dictionary fundamentals',
    difficulty: 'Aasan (Easy)',
    scenario: 'Create a dictionary student = {"name": "Hamza Khan", "roll_no": 1045, "course": "Python Pro", "city": "Lahore"}. Access and print name, course, and roll_no.',
    requirements: ['student dictionary define karein', 'Print student["name"], student["course"], student["roll_no"]'],
    sampleOutput: 'Student: Hamza Khan\nRoll No: 1045\nCourse: Python Pro\nCity: Lahore',
    starterCode: '# Day 10 - Exam 1: Student Profile\nstudent = {"name": "Hamza Khan", "roll_no": 1045, "course": "Python Pro", "city": "Lahore"}\n\n# Code yahan likhein:\n',
    solutionCode: 'student = {"name": "Hamza Khan", "roll_no": 1045, "course": "Python Pro", "city": "Lahore"}\nprint("Student:", student["name"])\nprint("Roll No:", student["roll_no"])\nprint("Course:", student["course"])\nprint("City:", student["city"])',
    hints: ['student["key"] se value milti hai.'],
    expectedPatterns: [{ description: 'Hamza Khan', pattern: /Hamza Khan/i }, { description: '1045', pattern: /1045/ }]
  },
  {
    title: 'Updating & Adding Keys in Dictionary',
    category: 'Dictionary mutation',
    difficulty: 'Aasan (Easy)',
    scenario: 'profile = {"user": "ali99", "status": "Pending"}. Update status to "Active". Add new key "email" = "ali@pyseekho.com". Print updated profile.',
    requirements: ['profile["status"] = "Active"', 'profile["email"] = "ali@pyseekho.com"', 'Print updated dictionary'],
    sampleOutput: 'Initial: {\'user\': \'ali99\', \'status\': \'Pending\'}\nUpdated Profile:\nUser: ali99\nStatus: Active\nEmail: ali@pyseekho.com',
    starterCode: '# Day 10 - Exam 2: Update & Add Keys\nprofile = {"user": "ali99", "status": "Pending"}\n\n# Code yahan likhein:\n',
    solutionCode: 'profile = {"user": "ali99", "status": "Pending"}\nprint("Initial:", profile)\nprofile["status"] = "Active"\nprofile["email"] = "ali@pyseekho.com"\nprint("Updated Profile:")\nprint("User:", profile["user"])\nprint("Status:", profile["status"])\nprint("Email:", profile["email"])',
    hints: ['profile["key"] = value nayi key add karta hai.'],
    expectedPatterns: [{ description: 'Active', pattern: /Active/i }, { description: 'ali@pyseekho.com', pattern: /ali@pyseekho\.com/i }]
  },
  {
    title: 'Safe Key Access with .get()',
    category: 'Dictionary .get() method',
    difficulty: 'Aasan (Easy)',
    scenario: 'settings = {"theme": "dark", "fontSize": 14}. Use .get("theme") to read theme, and .get("volume", 50) to read missing key volume with default 50 without KeyError crash.',
    requirements: ['settings.get("theme")', 'settings.get("volume", 50)', 'Print retrieved values'],
    sampleOutput: 'Theme: dark\nVolume (Defaulted): 50',
    starterCode: '# Day 10 - Exam 3: Safe .get()\nsettings = {"theme": "dark", "fontSize": 14}\n\n# Code yahan likhein:\n',
    solutionCode: 'settings = {"theme": "dark", "fontSize": 14}\nprint("Theme:", settings.get("theme"))\nprint("Volume (Defaulted):", settings.get("volume", 50))',
    hints: ['.get(key, default) missing key par crash hone se bachata hai.'],
    expectedPatterns: [{ description: 'dark', pattern: /dark/i }, { description: '50', pattern: /50/ }]
  },
  {
    title: 'Iterating with .items() for Table View',
    category: 'Dictionary iteration',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'menu = {"Chai": 50, "Samosa": 40, "Paratha": 120, "Biryani": 350}. Loop over menu using for item, price in menu.items(): and print price list table.',
    requirements: ['Loop with for item, price in menu.items():', 'Print formatted menu list'],
    sampleOutput: '--- CAFE MENU ---\nChai: Rs. 50\nSamosa: Rs. 40\nParatha: Rs. 120\nBiryani: Rs. 350',
    starterCode: '# Day 10 - Exam 4: Iterating .items()\nmenu = {"Chai": 50, "Samosa": 40, "Paratha": 120, "Biryani": 350}\n\n# Code yahan likhein:\n',
    solutionCode: 'menu = {"Chai": 50, "Samosa": 40, "Paratha": 120, "Biryani": 350}\nprint("--- CAFE MENU ---")\nfor item, price in menu.items():\n    print(f"{item}: Rs. {price}")',
    hints: ['.items() key aur value dono ek sath deta hai.'],
    expectedPatterns: [{ description: 'Chai: Rs. 50', pattern: /Chai[\s\S]*50/i }, { description: 'Biryani: Rs. 350', pattern: /Biryani[\s\S]*350/i }]
  },
  {
    title: 'Deleting Keys with .pop() and del',
    category: 'Dictionary deletion',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'cart = {"Laptop": 120000, "Mouse": 2500, "Keyboard": 6500, "PromoCoupon": 0}. Pop "PromoCoupon" and delete "Mouse". Print final cart.',
    requirements: ['coupon = cart.pop("PromoCoupon")', 'del cart["Mouse"]', 'Print final cart'],
    sampleOutput: 'Removed PromoCoupon: 0\nRemoved Mouse.\nFinal Cart: {\'Laptop\': 120000, \'Keyboard\': 6500}',
    starterCode: '# Day 10 - Exam 5: Deleting Keys\ncart = {"Laptop": 120000, "Mouse": 2500, "Keyboard": 6500, "PromoCoupon": 0}\n\n# Code yahan likhein:\n',
    solutionCode: 'cart = {"Laptop": 120000, "Mouse": 2500, "Keyboard": 6500, "PromoCoupon": 0}\ncoupon = cart.pop("PromoCoupon")\ndel cart["Mouse"]\nprint("Removed PromoCoupon:", coupon)\nprint("Removed Mouse.")\nprint("Final Cart:", cart)',
    hints: ['cart.pop("key") value nikalta hai, del cart["key"] key delete karta hai.'],
    expectedPatterns: [{ description: '120000', pattern: /120000/ }, { description: '6500', pattern: /6500/ }]
  },
  {
    title: 'Word Frequency Counter with Dictionary',
    category: 'Frequency counting algorithm',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'words = ["python", "java", "python", "cpp", "python", "java"]. Count how many times each language appears into a counts dict using loop.',
    requirements: ['counts = {}', 'Loop over words: counts[w] = counts.get(w, 0) + 1', 'Print frequencies'],
    sampleOutput: 'Language Frequencies:\npython: 3 times\njava: 2 times\ncpp: 1 times',
    starterCode: '# Day 10 - Exam 6: Word Counter\nwords = ["python", "java", "python", "cpp", "python", "java"]\ncounts = {}\n\n# Code yahan likhein:\n',
    solutionCode: 'words = ["python", "java", "python", "cpp", "python", "java"]\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\nprint("Language Frequencies:")\nfor lang, count in counts.items():\n    print(f"{lang}: {count} times")',
    hints: ['counts[w] = counts.get(w, 0) + 1 frequency count karne ka best formula hai.'],
    expectedPatterns: [{ description: 'python: 3', pattern: /python:\s*3/i }, { description: 'java: 2', pattern: /java:\s*2/i }]
  },
  {
    title: 'Subject Marks Calculation & Percentage',
    category: 'Dictionary math aggregation',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'grades = {"Math": 85, "English": 78, "Computer": 92, "Physics": 85}. Use sum(grades.values()) to find total marks (340 / 400) and calculate percentage (85.0%).',
    requirements: ['total = sum(grades.values())', 'percentage = (total / 400) * 100', 'Print report'],
    sampleOutput: 'Subjects Count: 4\nTotal Marks: 340 / 400\nPercentage: 85.0%\nStatus: Distinction',
    starterCode: '# Day 10 - Exam 7: Marks Aggregation\ngrades = {"Math": 85, "English": 78, "Computer": 92, "Physics": 85}\n\n# Code yahan likhein:\n',
    solutionCode: 'grades = {"Math": 85, "English": 78, "Computer": 92, "Physics": 85}\ntotal = sum(grades.values())\npercentage = (total / 400) * 100\nprint("Subjects Count:", len(grades))\nprint(f"Total Marks: {total} / 400")\nprint(f"Percentage: {percentage:.1f}%")\nprint("Status: Distinction")',
    hints: ['grades.values() tamam marks ki list deta hai.'],
    expectedPatterns: [{ description: '340', pattern: /340/ }, { description: '85.0%', pattern: /85/ }]
  },
  {
    title: 'Nested Dictionary: Student Grade Registry',
    category: 'Nested dictionaries',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'students = {"s101": {"name": "Sara", "gpa": 3.9}, "s102": {"name": "Hamza", "gpa": 3.6}}. Access and print each student name and GPA.',
    requirements: ['Loop over students.items()', 'Access student details nested dictionary', 'Print report card'],
    sampleOutput: '--- STUDENT REGISTRY ---\nID s101: Sara (GPA: 3.9)\nID s102: Hamza (GPA: 3.6)',
    starterCode: '# Day 10 - Exam 8: Nested Dictionary\nstudents = {\n    "s101": {"name": "Sara", "gpa": 3.9},\n    "s102": {"name": "Hamza", "gpa": 3.6}\n}\n\n# Code yahan likhein:\n',
    solutionCode: 'students = {\n    "s101": {"name": "Sara", "gpa": 3.9},\n    "s102": {"name": "Hamza", "gpa": 3.6}\n}\nprint("--- STUDENT REGISTRY ---")\nfor s_id, data in students.items():\n    print(f"ID {s_id}: {data[\'name\']} (GPA: {data[\'gpa\']})")',
    hints: ['data["name"] aur data["gpa"] nested access karein.'],
    expectedPatterns: [{ description: 'Sara (GPA: 3.9)', pattern: /Sara[\s\S]*3\.9/i }, { description: 'Hamza (GPA: 3.6)', pattern: /Hamza[\s\S]*3\.6/i }]
  },
  {
    title: 'Merging Dictionaries (.update and | operator)',
    category: 'Dictionary merging',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'default_cfg = {"theme": "light", "notifications": True}. user_cfg = {"theme": "dark", "sound": False}. Merge them into final_cfg using default_cfg | user_cfg.',
    requirements: ['final_cfg = default_cfg | user_cfg', 'Print merged configuration'],
    sampleOutput: 'Default: light\nUser Override: dark\nFinal Config: {\'theme\': \'dark\', \'notifications\': True, \'sound\': False}',
    starterCode: '# Day 10 - Exam 9: Merge Dictionaries\ndefault_cfg = {"theme": "light", "notifications": True}\nuser_cfg = {"theme": "dark", "sound": False}\n\n# Code yahan likhein:\n',
    solutionCode: 'default_cfg = {"theme": "light", "notifications": True}\nuser_cfg = {"theme": "dark", "sound": False}\nfinal_cfg = default_cfg | user_cfg\nprint("Default:", default_cfg["theme"])\nprint("User Override:", user_cfg["theme"])\nprint("Final Config:", final_cfg)',
    hints: ['dict1 | dict2 se second dict pehli ki values override kar deta hai.'],
    expectedPatterns: [{ description: 'dark', pattern: /dark/i }, { description: 'sound', pattern: /sound/i }]
  },
  {
    title: 'Day 10 Capstone: Supermarket Cashier & Receipt Generator',
    category: 'Capstone Billing Dictionary',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Day 10 Capstone! Store inventory prices: prices = {"Bread": 150, "Milk": 220, "Eggs": 320}. Customer cart: cart = {"Bread": 2, "Milk": 1, "Eggs": 2}. Calculate subtotal (150*2 + 220*1 + 320*2 = 1160 PKR), 10% sales tax (116 PKR), and Grand Total (1276 PKR). Print formal itemized invoice receipt.',
    requirements: ['Calculate item subtotal = prices[item] * qty', 'Calculate 10% tax and grand total', 'Print formal receipt with borders'],
    sampleOutput: '========================================\n        SUPERMARKET CASH RECEIPT        \n========================================\nBread          x 2 @ Rs. 150 = Rs. 300\nMilk           x 1 @ Rs. 220 = Rs. 220\nEggs           x 2 @ Rs. 320 = Rs. 640\n----------------------------------------\nSubtotal:                    Rs. 1160\nSales Tax (10%):             Rs. 116.0\nGRAND TOTAL:                 Rs. 1276.0\n========================================',
    starterCode: '# Day 10 - Exam 10: Capstone Cashier\nprices = {"Bread": 150, "Milk": 220, "Eggs": 320}\ncart = {"Bread": 2, "Milk": 1, "Eggs": 2}\n\n# Code yahan likhein:\n',
    solutionCode: 'prices = {"Bread": 150, "Milk": 220, "Eggs": 320}\ncart = {"Bread": 2, "Milk": 1, "Eggs": 2}\n\nprint("========================================")\nprint("        SUPERMARKET CASH RECEIPT        ")\nprint("========================================")\nsubtotal = 0\nfor item, qty in cart.items():\n    rate = prices[item]\n    item_cost = rate * qty\n    subtotal += item_cost\n    print(f"{item:14} x {qty} @ Rs. {rate} = Rs. {item_cost}")\ntax = subtotal * 0.10\ngrand_total = subtotal + tax\nprint("----------------------------------------")\nprint(f"Subtotal:                    Rs. {subtotal}")\nprint(f"Sales Tax (10%):             Rs. {tax}")\nprint(f"GRAND TOTAL:                 Rs. {grand_total}")\nprint("========================================")',
    hints: ['Loop over cart.items(), subtotal += prices[item] * qty.'],
    expectedPatterns: [{ description: 'Subtotal: Rs. 1160', pattern: /1160/ }, { description: 'GRAND TOTAL: Rs. 1276', pattern: /1276/ }]
  }
]);
