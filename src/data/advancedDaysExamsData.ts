import { Day1ExamQuestion } from './day1ExamsData';
import { createDayExams } from './moreDaysExamsData';

// Day 11 Exams: Functions (def, parameters & return values) (10 Distinct Questions)
export const day11ExamsData: Day1ExamQuestion[] = createDayExams(11, 'Functions, Parameters & Return', [
  {
    title: 'Warm Welcome Function (def & return)',
    category: 'Function definition',
    difficulty: 'Aasan (Easy)',
    scenario: 'Write a function greet_student(name) that returns "Assalam-o-Alaikum, {name}! Welcome to PySeekho.". Call it with "Tariq" and print the returned greeting.',
    requirements: ['def greet_student(name):', 'return f"Assalam-o-Alaikum, {name}! Welcome to PySeekho."', 'Call with "Tariq" and print result'],
    sampleOutput: 'Assalam-o-Alaikum, Tariq! Welcome to PySeekho.',
    starterCode: '# Day 11 - Exam 1: Greet Function\n# Define function yahan karein:\n\n',
    solutionCode: 'def greet_student(name):\n    return f"Assalam-o-Alaikum, {name}! Welcome to PySeekho."\n\nmessage = greet_student("Tariq")\nprint(message)',
    hints: ['def ke baad indent karein aur return statement lagayein.'],
    expectedPatterns: [{ description: 'Assalam-o-Alaikum', pattern: /Assalam-o-Alaikum/i }, { description: 'Tariq', pattern: /Tariq/i }]
  },
  {
    title: 'Addition Function with Return Value',
    category: 'Arithmetic functions',
    difficulty: 'Aasan (Easy)',
    scenario: 'Create a function add_numbers(a, b) that returns the sum of a and b. Test it with 150 and 250, then print "Sum: 400".',
    requirements: ['def add_numbers(a, b): return a + b', 'res = add_numbers(150, 250)', 'Print "Sum: 400"'],
    sampleOutput: 'Calculating 150 + 250...\nSum: 400',
    starterCode: '# Day 11 - Exam 2: add_numbers\n# Function define karein:\n\n',
    solutionCode: 'def add_numbers(a, b):\n    return a + b\n\nprint("Calculating 150 + 250...")\nres = add_numbers(150, 250)\nprint("Sum:", res)',
    hints: ['return a + b lagayein.'],
    expectedPatterns: [{ description: 'Sum: 400', pattern: /400/ }]
  },
  {
    title: 'Area of Rectangle Function',
    category: 'Formula functions',
    difficulty: 'Aasan (Easy)',
    scenario: 'Create calculate_rectangle_area(length, width) returning length * width. Test with length = 12 and width = 8 (Area = 96 sq meters).',
    requirements: ['def calculate_rectangle_area(length, width): return length * width', 'Call with 12 and 8', 'Print "Area: 96 sq meters"'],
    sampleOutput: 'Dimensions: Length = 12m, Width = 8m\nArea: 96 sq meters',
    starterCode: '# Day 11 - Exam 3: Rectangle Area\n# Code yahan likhein:\n\n',
    solutionCode: 'def calculate_rectangle_area(length, width):\n    return length * width\n\nl, w = 12, 8\narea = calculate_rectangle_area(l, w)\nprint(f"Dimensions: Length = {l}m, Width = {w}m")\nprint(f"Area: {area} sq meters")',
    hints: ['area = length * width.'],
    expectedPatterns: [{ description: 'Area: 96', pattern: /96/ }]
  },
  {
    title: 'Boolean Validator: is_even Function',
    category: 'Boolean functions',
    difficulty: 'Aasan (Easy)',
    scenario: 'Create a function is_even(num) returning True if num % 2 == 0, else False. Test with num = 24 and num = 31.',
    requirements: ['def is_even(num): return num % 2 == 0', 'Test 24 (True) and 31 (False)', 'Print results'],
    sampleOutput: 'Is 24 even? True\nIs 31 even? False',
    starterCode: '# Day 11 - Exam 4: is_even\n# Code yahan likhein:\n\n',
    solutionCode: 'def is_even(num):\n    return num % 2 == 0\n\nprint("Is 24 even?", is_even(24))\nprint("Is 31 even?", is_even(31))',
    hints: ['return num % 2 == 0 direct boolean deta hai.'],
    expectedPatterns: [{ description: '24 even? True', pattern: /24[\s\S]*True/i }, { description: '31 even? False', pattern: /31[\s\S]*False/i }]
  },
  {
    title: 'Find Maximum of Three Numbers (Pure Logic)',
    category: 'Conditional functions',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Write a function find_max_of_three(a, b, c) WITHOUT using built-in max(). Use if-elif logic to return the highest number among (45, 89, 72).',
    requirements: ['def find_max_of_three(a, b, c):', 'Return largest via if-elif-else', 'Test with (45, 89, 72) and print 89'],
    sampleOutput: 'Inputs: 45, 89, 72\nMaximum Value: 89',
    starterCode: '# Day 11 - Exam 5: Custom find_max\n# Code yahan likhein:\n\n',
    solutionCode: 'def find_max_of_three(a, b, c):\n    if a >= b and a >= c:\n        return a\n    elif b >= a and b >= c:\n        return b\n    else:\n        return c\n\nlargest = find_max_of_three(45, 89, 72)\nprint("Inputs: 45, 89, 72")\nprint("Maximum Value:", largest)',
    hints: ['b >= a and b >= c True hoga 89 ke liye.'],
    expectedPatterns: [{ description: 'Maximum Value: 89', pattern: /89/ }]
  },
  {
    title: 'Temperature Conversion Function',
    category: 'Conversion functions',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Create celsius_to_fahrenheit(c) that returns (c * 9/5) + 32. Convert 37°C (normal human body temperature) to 98.6°F.',
    requirements: ['def celsius_to_fahrenheit(c): return (c * 9/5) + 32', 'Call with c = 37', 'Print "37.0°C = 98.6°F"'],
    sampleOutput: 'Celsius: 37.0°C\nFahrenheit: 98.6°F',
    starterCode: '# Day 11 - Exam 6: Temperature Function\n# Code yahan likhein:\n\n',
    solutionCode: 'def celsius_to_fahrenheit(c):\n    return (c * 9/5) + 32\n\nf = celsius_to_fahrenheit(37)\nprint("Celsius: 37.0°C")\nprint(f"Fahrenheit: {f:.1f}°F")',
    hints: ['(37 * 9/5) + 32 = 98.6.'],
    expectedPatterns: [{ description: '37.0°C', pattern: /37/ }, { description: '98.6°F', pattern: /98\.6/ }]
  },
  {
    title: 'Returning Multiple Values (Tuple Return)',
    category: 'Multi-value returns',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Create get_circle_properties(radius) that returns diameter (radius * 2) and circumference round(2 * 3.14159 * radius, 2). Unpack and print for radius = 7.',
    requirements: ['def get_circle_properties(radius): return diam, circ', 'd, c = get_circle_properties(7)', 'Print radius 7, diameter 14, circumference 43.98'],
    sampleOutput: 'Circle Radius: 7\nDiameter: 14\nCircumference: 43.98',
    starterCode: '# Day 11 - Exam 7: Circle Properties\n# Code yahan likhein:\n\n',
    solutionCode: 'def get_circle_properties(radius):\n    diameter = radius * 2\n    circumference = round(2 * 3.14159 * radius, 2)\n    return diameter, circumference\n\nd, c = get_circle_properties(7)\nprint("Circle Radius: 7")\nprint("Diameter:", d)\nprint("Circumference:", c)',
    hints: ['return diameter, circumference do values ek sath wapas bhejta hai.'],
    expectedPatterns: [{ description: 'Diameter: 14', pattern: /14/ }, { description: 'Circumference: 43.98', pattern: /43\.98/ }]
  },
  {
    title: 'Grade Calculator Function with Default Total',
    category: 'Default parameter functions',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Create calculate_grade(marks, total=100) returning percentage and grade: >= 80 "A", >= 60 "B", else "C". Call with marks = 85.',
    requirements: ['def calculate_grade(marks, total=100):', 'Calculate percentage and grade', 'Call with calculate_grade(85)', 'Print "Grade: A"'],
    sampleOutput: 'Marks: 85 / 100\nPercentage: 85.0%\nAssigned Grade: A',
    starterCode: '# Day 11 - Exam 8: Grade Function\n# Code yahan likhein:\n\n',
    solutionCode: 'def calculate_grade(marks, total=100):\n    pct = (marks / total) * 100\n    if pct >= 80:\n        g = "A"\n    elif pct >= 60:\n        g = "B"\n    else:\n        g = "C"\n    return pct, g\n\npct, grade = calculate_grade(85)\nprint("Marks: 85 / 100")\nprint(f"Percentage: {pct:.1f}%")\nprint("Assigned Grade:", grade)',
    hints: ['default parameter total=100 set karein.'],
    expectedPatterns: [{ description: '85.0%', pattern: /85/ }, { description: 'Grade: A', pattern: /Grade:\s*A/i }]
  },
  {
    title: 'Currency Exchange Calculator Function',
    category: 'Financial functions',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Create convert_currency(amount, from_curr="USD", to_pkr_rate=280.0) that returns amount * to_pkr_rate. Convert $450 USD to PKR (126,000 PKR).',
    requirements: ['def convert_currency(amount, from_curr="USD", to_pkr_rate=280.0):', 'pkr = convert_currency(450)', 'Print "450 USD = 126000.0 PKR"'],
    sampleOutput: 'Converting $450 USD...\nExchange Rate: 1 USD = 280.0 PKR\nTotal PKR: 126000.0 PKR',
    starterCode: '# Day 11 - Exam 9: Currency Converter\n# Code yahan likhein:\n\n',
    solutionCode: 'def convert_currency(amount, from_curr="USD", to_pkr_rate=280.0):\n    return amount * to_pkr_rate\n\npkr = convert_currency(450)\nprint("Converting $450 USD...")\nprint("Exchange Rate: 1 USD = 280.0 PKR")\nprint(f"Total PKR: {pkr} PKR")',
    hints: ['450 * 280 = 126000.'],
    expectedPatterns: [{ description: '450 USD', pattern: /450/ }, { description: '126000', pattern: /126000/ }]
  },
  {
    title: 'Day 11 Capstone: Utility Electricity Tariff Engine',
    category: 'Capstone Function Pipeline',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Day 11 Capstone! Build a modular function calculate_power_bill(units_consumed, customer_type="Residential"). Tariff rules: If units <= 100: 15 PKR/unit. If units <= 300: first 100 @ 15 PKR + remaining @ 25 PKR. If units > 300: first 100 @ 15 + next 200 @ 25 + remaining @ 35 PKR. Add 16% GST. Calculate bill for 250 units (5250 PKR base + 840 PKR GST = 6090 PKR total).',
    requirements: ['def calculate_power_bill(units_consumed, customer_type="Residential"):', 'Implement tiered slab calculation', 'Calculate 16% GST tax', 'Print official electricity billing voucher'],
    sampleOutput: '========================================\n       WAPDA POWER BILLING VOUCHER      \n========================================\nCustomer Category: Residential\nUnits Consumed:    250 kWh\nBase Energy Cost:  Rs. 5250.0\nGST Tax (16%):     Rs. 840.0\nTOTAL PAYABLE:     Rs. 6090.0\n========================================',
    starterCode: '# Day 11 - Exam 10: Capstone Power Bill\n# Code yahan likhein:\n\n',
    solutionCode: 'def calculate_power_bill(units, customer_type="Residential"):\n    if units <= 100:\n        base = units * 15\n    elif units <= 300:\n        base = (100 * 15) + ((units - 100) * 25)\n    else:\n        base = (100 * 15) + (200 * 25) + ((units - 300) * 35)\n    tax = base * 0.16\n    total = base + tax\n    return base, tax, total\n\nbase, tax, total = calculate_power_bill(250)\nprint("========================================")\nprint("       WAPDA POWER BILLING VOUCHER      ")\nprint("========================================")\nprint("Customer Category: Residential")\nprint("Units Consumed:    250 kWh")\nprint(f"Base Energy Cost:  Rs. {base:.1f}")\nprint(f"GST Tax (16%):     Rs. {tax:.1f}")\nprint(f"TOTAL PAYABLE:     Rs. {total:.1f}")\nprint("========================================")',
    hints: ['250 units par pehle 100 @ 15 = 1500, baaqi 150 @ 25 = 3750, kul 5250.'],
    expectedPatterns: [{ description: 'Base: 5250', pattern: /5250/ }, { description: 'TOTAL PAYABLE: Rs. 6090', pattern: /6090/ }]
  }
]);

// Day 12 Exams: Advanced Functions, Scope, *args & **kwargs (10 Distinct Questions)
export const day12ExamsData: Day1ExamQuestion[] = createDayExams(12, 'Advanced Functions & Scope', [
  {
    title: 'Default Argument Values in Ordering System',
    category: 'Default arguments',
    difficulty: 'Aasan (Easy)',
    scenario: 'Create order_chai(cups=2, sweetness="Medium", elaichi=True). When called with no arguments, print order summary with default values. Call again with order_chai(cups=4, sweetness="Less", elaichi=False).',
    requirements: ['def order_chai(cups=2, sweetness="Medium", elaichi=True):', 'Print order details for both calls'],
    sampleOutput: 'Order 1: 2 cups, Sweetness: Medium, Elaichi: True\nOrder 2: 4 cups, Sweetness: Less, Elaichi: False',
    starterCode: '# Day 12 - Exam 1: Default Arguments\n# Code yahan likhein:\n\n',
    solutionCode: 'def order_chai(cups=2, sweetness="Medium", elaichi=True):\n    return f"{cups} cups, Sweetness: {sweetness}, Elaichi: {elaichi}"\n\nprint("Order 1:", order_chai())\nprint("Order 2:", order_chai(cups=4, sweetness="Less", elaichi=False))',
    hints: ['Default arguments function declaration mein diye jaate hain.'],
    expectedPatterns: [{ description: '2 cups', pattern: /2\s*cups/i }, { description: '4 cups', pattern: /4\s*cups/i }]
  },
  {
    title: 'Variable Positional Arguments (*args) Sum',
    category: '*args variable arguments',
    difficulty: 'Aasan (Easy)',
    scenario: 'Create sum_all(*numbers) that accepts any count of positional numbers and returns their sum using sum(numbers). Test with sum_all(10, 20, 30) (60) and sum_all(5, 15, 25, 35, 45) (125).',
    requirements: ['def sum_all(*numbers): return sum(numbers)', 'Call with 3 args and 5 args', 'Print sums'],
    sampleOutput: 'Sum of 3 numbers: 60\nSum of 5 numbers: 125',
    starterCode: '# Day 12 - Exam 2: *args sum\n# Code yahan likhein:\n\n',
    solutionCode: 'def sum_all(*numbers):\n    return sum(numbers)\n\nprint("Sum of 3 numbers:", sum_all(10, 20, 30))\nprint("Sum of 5 numbers:", sum_all(5, 15, 25, 35, 45))',
    hints: ['*numbers parameters ko tuple bana deta hai.'],
    expectedPatterns: [{ description: 'Sum: 60', pattern: /60/ }, { description: 'Sum: 125', pattern: /125/ }]
  },
  {
    title: 'Keyword Arguments (**kwargs) User Profile',
    category: '**kwargs keyword arguments',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Create build_profile(username, **details) that takes a username and arbitrary kwargs (e.g., city="Karachi", role="Developer", xp=500). Print username and each key-value pair.',
    requirements: ['def build_profile(username, **details):', 'Loop over details.items()', 'Call with city, role, and xp', 'Print profile'],
    sampleOutput: 'Profile: @ali_dev\n- city: Karachi\n- role: Developer\n- xp: 500',
    starterCode: '# Day 12 - Exam 3: **kwargs Profile\n# Code yahan likhein:\n\n',
    solutionCode: 'def build_profile(username, **details):\n    print(f"Profile: @{username}")\n    for key, val in details.items():\n        print(f"- {key}: {val}")\n\nbuild_profile("ali_dev", city="Karachi", role="Developer", xp=500)',
    hints: ['**details parameters ko dictionary bana deta hai.'],
    expectedPatterns: [{ description: 'ali_dev', pattern: /ali_dev/i }, { description: 'Karachi', pattern: /Karachi/i }, { description: 'Developer', pattern: /Developer/i }]
  },
  {
    title: 'Local vs Global Scope Demonstration',
    category: 'Variable scoping',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Define global variable app_name = "PySeekho". Inside show_scope(), define local app_version = "2.5". Print both inside, and demonstrate outside that global variable exists.',
    requirements: ['app_name = "PySeekho" (global)', 'Inside function: app_version = "2.5" (local)', 'Print inside and outside'],
    sampleOutput: 'Inside Function:\nApp: PySeekho\nVersion: 2.5\nOutside Function:\nGlobal App: PySeekho',
    starterCode: '# Day 12 - Exam 4: Scope Demo\n# Code yahan likhein:\n\n',
    solutionCode: 'app_name = "PySeekho"\n\ndef show_scope():\n    app_version = "2.5"\n    print("Inside Function:")\n    print("App:", app_name)\n    print("Version:", app_version)\n\nshow_scope()\nprint("Outside Function:")\nprint("Global App:", app_name)',
    hints: ['Global variable function ke andar parha ja sakta hai.'],
    expectedPatterns: [{ description: 'PySeekho', pattern: /PySeekho/i }, { description: 'Version: 2.5', pattern: /2\.5/ }]
  },
  {
    title: 'Modifying Global Variable with global Keyword',
    category: 'global keyword',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Define global visitor_count = 0. Write increment_visitors() using global visitor_count to increment it by 1. Call it 3 times and print final count (3).',
    requirements: ['visitor_count = 0', 'def increment_visitors(): global visitor_count; visitor_count += 1', 'Call 3 times', 'Print "Total Visitors: 3"'],
    sampleOutput: 'Starting Visitors: 0\nIncrementing 3 times...\nTotal Visitors: 3',
    starterCode: '# Day 12 - Exam 5: global keyword\nvisitor_count = 0\n\n# Code yahan likhein:\n',
    solutionCode: 'visitor_count = 0\nprint("Starting Visitors:", visitor_count)\n\ndef increment_visitors():\n    global visitor_count\n    visitor_count += 1\n\nprint("Incrementing 3 times...")\nincrement_visitors()\nincrement_visitors()\nincrement_visitors()\nprint("Total Visitors:", visitor_count)',
    hints: ['global variable ka naam function mein likhein.'],
    expectedPatterns: [{ description: 'Total Visitors: 3', pattern: /3/ }]
  },
  {
    title: 'Function Documentation with Docstrings',
    category: 'Docstrings & __doc__',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Write calculate_square(n) with a triple-quoted docstring: """Calculate and return square of a number.""" Access and print calculate_square.__doc__.',
    requirements: ['Write function with docstring', 'print(calculate_square.__doc__)', 'print(calculate_square(9)) -> 81'],
    sampleOutput: 'Docstring: Calculate and return square of a number.\nSquare of 9: 81',
    starterCode: '# Day 12 - Exam 6: Docstrings\n# Code yahan likhein:\n\n',
    solutionCode: 'def calculate_square(n):\n    """Calculate and return square of a number."""\n    return n ** 2\n\nprint("Docstring:", calculate_square.__doc__)\nprint("Square of 9:", calculate_square(9))',
    hints: ['Docstring ko """ ke darmiyan likhte hain.'],
    expectedPatterns: [{ description: 'Calculate and return square', pattern: /Calculate and return square/i }, { description: '81', pattern: /81/ }]
  },
  {
    title: 'Anonymous Lambda Functions',
    category: 'Lambda expressions',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Create lambda function cube = lambda x: x ** 3 and discount = lambda price, pct: price - (price * pct / 100). Test cube(4) (64) and discount(1000, 20) (800.0).',
    requirements: ['cube = lambda x: x ** 3', 'discount = lambda price, pct: price - (price * pct / 100)', 'Print results'],
    sampleOutput: 'Cube of 4: 64\nDiscounted Bill (20% off 1000): Rs. 800.0',
    starterCode: '# Day 12 - Exam 7: Lambda Functions\n# Code yahan likhein:\n\n',
    solutionCode: 'cube = lambda x: x ** 3\ndiscount = lambda price, pct: price - (price * pct / 100)\n\nprint("Cube of 4:", cube(4))\nprint("Discounted Bill (20% off 1000): Rs.", discount(1000, 20))',
    hints: ['lambda x: expression ek line ka function banata hai.'],
    expectedPatterns: [{ description: '64', pattern: /64/ }, { description: '800', pattern: /800/ }]
  },
  {
    title: 'Higher Order Function: Function as Argument',
    category: 'Higher order functions',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Write apply_operation(func, a, b) that takes another function and two numbers, executing func(a, b). Test with add and multiply functions for 10 and 5.',
    requirements: ['def apply_operation(func, a, b): return func(a, b)', 'Pass add (15) and multiply (50)', 'Print results'],
    sampleOutput: 'Executing apply_operation with 10 and 5:\nAddition Result: 15\nMultiplication Result: 50',
    starterCode: '# Day 12 - Exam 8: Functions as Arguments\n# Code yahan likhein:\n\n',
    solutionCode: 'def add(x, y): return x + y\ndef multiply(x, y): return x * y\n\ndef apply_operation(func, a, b):\n    return func(a, b)\n\nprint("Executing apply_operation with 10 and 5:")\nprint("Addition Result:", apply_operation(add, 10, 5))\nprint("Multiplication Result:", apply_operation(multiply, 10, 5))',
    hints: ['func parameter ke roop mein pass kiya jata hai.'],
    expectedPatterns: [{ description: 'Addition Result: 15', pattern: /15/ }, { description: 'Multiplication Result: 50', pattern: /50/ }]
  },
  {
    title: 'Recursive Factorial Function',
    category: 'Recursion',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Create recursive factorial(n) where base case is if n <= 1: return 1, else return n * factorial(n - 1). Calculate factorial(5) = 120.',
    requirements: ['def factorial(n): base case + recursive call', 'Print "5! = 120"'],
    sampleOutput: 'Calculating 5! using recursion...\nFactorial of 5 is: 120',
    starterCode: '# Day 12 - Exam 9: Recursion\n# Code yahan likhein:\n\n',
    solutionCode: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint("Calculating 5! using recursion...")\nprint("Factorial of 5 is:", factorial(5))',
    hints: ['5 * 4 * 3 * 2 * 1 = 120.'],
    expectedPatterns: [{ description: 'Factorial of 5 is: 120', pattern: /120/ }]
  },
  {
    title: 'Day 12 Capstone: Comprehensive Payroll & Tax Calculator',
    category: 'Capstone Advanced Function',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Day 12 Capstone! Write process_payroll(employee_name, base_salary, *bonuses, tax_rate=0.10, **deductions). It sums all bonuses, subtracts tax (tax_rate * (base + bonuses)), and subtracts all deductions (e.g., health=2000, provident=3000). Return and print detailed payslip for "Hamza Ali", base = 80000, bonuses (5000, 10000), tax_rate = 0.10, health = 2000, provident = 3000 (Gross = 95000, Tax = 9500, Deductions = 5000, Net = 80500 PKR).',
    requirements: ['def process_payroll(name, base, *bonuses, tax_rate=0.10, **deductions):', 'Calculate gross, tax, total deductions, and net salary', 'Print formal salary slip'],
    sampleOutput: '========================================\n         OFFICIAL SALARY PAYSLIP        \n========================================\nEmployee Name:   Hamza Ali\nBase Salary:     Rs. 80000\nTotal Bonuses:   Rs. 15000\nGross Earnings:  Rs. 95000\nIncome Tax (10%): Rs. 9500.0\nTotal Deductions: Rs. 5000\n----------------------------------------\nNET TAKE-HOME:   Rs. 80500.0\n========================================',
    starterCode: '# Day 12 - Exam 10: Capstone Payroll\n# Code yahan likhein:\n\n',
    solutionCode: 'def process_payroll(employee_name, base_salary, *bonuses, tax_rate=0.10, **deductions):\n    total_bonuses = sum(bonuses)\n    gross = base_salary + total_bonuses\n    tax = gross * tax_rate\n    total_deductions = sum(deductions.values())\n    net = gross - tax - total_deductions\n    return gross, tax, total_deductions, net\n\ngross, tax, ded, net = process_payroll("Hamza Ali", 80000, 5000, 10000, tax_rate=0.10, health=2000, provident=3000)\nprint("========================================")\nprint("         OFFICIAL SALARY PAYSLIP        ")\nprint("========================================")\nprint("Employee Name:   Hamza Ali")\nprint("Base Salary:     Rs. 80000")\nprint("Total Bonuses:   Rs. 15000")\nprint(f"Gross Earnings:  Rs. {gross}")\nprint(f"Income Tax (10%): Rs. {tax}")\nprint(f"Total Deductions: Rs. {ded}")\nprint("----------------------------------------")\nprint(f"NET TAKE-HOME:   Rs. {net}")\nprint("========================================")',
    hints: ['gross = base + sum(bonuses), net = gross - tax - sum(deductions.values()).'],
    expectedPatterns: [{ description: 'Gross: 95000', pattern: /95000/ }, { description: 'NET TAKE-HOME: Rs. 80500', pattern: /80500/ }]
  }
]);

// Day 13 Exams: Defensive Coding & Error Handling (try-except) (10 Distinct Questions)
export const day13ExamsData: Day1ExamQuestion[] = createDayExams(13, 'Defensive Coding & Error Handling', [
  {
    title: 'ZeroDivisionError Safe Handling',
    category: 'Arithmetic exception',
    difficulty: 'Aasan (Easy)',
    scenario: 'Write a safe division block using try-except. Try dividing 100 by 0. Catch ZeroDivisionError and print "Error Caught: Cannot divide by zero!".',
    requirements: ['try: res = 100 / 0', 'except ZeroDivisionError:', 'Print error message cleanly'],
    sampleOutput: 'Attempting division 100 / 0...\nError Caught: Cannot divide by zero!\nProgram executed safely.',
    starterCode: '# Day 13 - Exam 1: ZeroDivisionError\n# Code yahan likhein:\n\n',
    solutionCode: 'print("Attempting division 100 / 0...")\ntry:\n    res = 100 / 0\nexcept ZeroDivisionError:\n    print("Error Caught: Cannot divide by zero!")\nprint("Program executed safely.")',
    hints: ['except ZeroDivisionError: block lagayein.'],
    expectedPatterns: [{ description: 'Cannot divide by zero', pattern: /Cannot divide by zero/i }, { description: 'safely', pattern: /safely/i }]
  },
  {
    title: 'ValueError on String-to-Int Conversion',
    category: 'Type casting exception',
    difficulty: 'Aasan (Easy)',
    scenario: 'User enters text = "twenty_five". Trying int(text) raises ValueError. Wrap with try-except ValueError, and fallback to default number 0.',
    requirements: ['try: num = int("twenty_five")', 'except ValueError: fallback to 0', 'Print fallback value'],
    sampleOutput: 'Input text: twenty_five\nWarning: Invalid integer string!\nFallback Number: 0',
    starterCode: '# Day 13 - Exam 2: ValueError\ntext = "twenty_five"\n\n# Code yahan likhein:\n',
    solutionCode: 'text = "twenty_five"\nprint("Input text:", text)\ntry:\n    num = int(text)\nexcept ValueError:\n    print("Warning: Invalid integer string!")\n    num = 0\nprint("Fallback Number:", num)',
    hints: ['except ValueError: num = 0.'],
    expectedPatterns: [{ description: 'Invalid integer string', pattern: /Invalid/i }, { description: 'Fallback Number: 0', pattern: /0/ }]
  },
  {
    title: 'Multiple Except Blocks (Value vs Zero)',
    category: 'Multiple exception blocks',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Create safe_calculator(a_str, b_str) that converts both to int and divides a / b. Handle ValueError (invalid input) and ZeroDivisionError separately.',
    requirements: ['def safe_calc(a_str, b_str):', 'except ValueError:', 'except ZeroDivisionError:', 'Test with ("100", "0")'],
    sampleOutput: 'Calculating "100" / "0"...\nZeroDivisionError: Divisor cannot be 0.\nCalculation aborted safely.',
    starterCode: '# Day 13 - Exam 3: Multiple Except Blocks\n# Code yahan likhein:\n\n',
    solutionCode: 'def safe_calc(a_str, b_str):\n    print(f\'Calculating "{a_str}" / "{b_str}"...\')\n    try:\n        a = int(a_str)\n        b = int(b_str)\n        return a / b\n    except ValueError:\n        print("ValueError: Please provide numeric strings.")\n    except ZeroDivisionError:\n        print("ZeroDivisionError: Divisor cannot be 0.")\n    return None\n\nsafe_calc("100", "0")\nprint("Calculation aborted safely.")',
    hints: ['Alag alag except blocks likhein.'],
    expectedPatterns: [{ description: 'Divisor cannot be 0', pattern: /Divisor cannot be 0/i }]
  },
  {
    title: 'The try-except-else Block',
    category: 'else block in exceptions',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'In Python, the else block runs ONLY if no exception occurred. Divide 50 by 5. In else: print "Success! Result is: 10.0".',
    requirements: ['try: result = 50 / 5', 'except ZeroDivisionError: ...', 'else: print success', 'Run and observe else execution'],
    sampleOutput: 'Executing try block...\nSuccess! Result is: 10.0\nOperation completed without errors.',
    starterCode: '# Day 13 - Exam 4: try-else\n# Code yahan likhein:\n\n',
    solutionCode: 'print("Executing try block...")\ntry:\n    result = 50 / 5\nexcept ZeroDivisionError:\n    print("Error occurred.")\nelse:\n    print(f"Success! Result is: {result}")\nprint("Operation completed without errors.")',
    hints: ['else block try ke foran baad jab error na aaye tab chalta hai.'],
    expectedPatterns: [{ description: 'Success! Result is: 10.0', pattern: /10\.0/ }, { description: 'without errors', pattern: /without errors/i }]
  },
  {
    title: 'The finally Block (Guaranteed Cleanup)',
    category: 'finally block',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'The finally block runs no matter what, even if an error occurred. Demonstrate file/session closing in finally block.',
    requirements: ['try: simulate error', 'except: handle error', 'finally: print "Guaranteed: Session closed and memory cleared."'],
    sampleOutput: 'Opening database session...\nHandling expected error...\nGuaranteed: Session closed and memory cleared.',
    starterCode: '# Day 13 - Exam 5: finally block\n# Code yahan likhein:\n\n',
    solutionCode: 'print("Opening database session...")\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Handling expected error...")\nfinally:\n    print("Guaranteed: Session closed and memory cleared.")',
    hints: ['finally block hamesha aakhir mein run hota hai.'],
    expectedPatterns: [{ description: 'Session closed', pattern: /Session closed/i }]
  },
  {
    title: 'Safe List Index Access (IndexError)',
    category: 'IndexError handling',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'items = ["Apple", "Mango"]. Attempting items[5] raises IndexError. Catch IndexError and print "IndexError: Requested item index out of bounds!".',
    requirements: ['items = ["Apple", "Mango"]', 'try: val = items[5]', 'except IndexError: handle error'],
    sampleOutput: 'List size: 2 items\nAttempting to access index 5...\nIndexError: Requested item index out of bounds!\nReturned None.',
    starterCode: '# Day 13 - Exam 6: IndexError\nitems = ["Apple", "Mango"]\n\n# Code yahan likhein:\n',
    solutionCode: 'items = ["Apple", "Mango"]\nprint("List size: 2 items")\nprint("Attempting to access index 5...")\ntry:\n    val = items[5]\nexcept IndexError:\n    print("IndexError: Requested item index out of bounds!")\n    val = None\nprint("Returned None.")',
    hints: ['except IndexError: catch karein.'],
    expectedPatterns: [{ description: 'out of bounds', pattern: /out of bounds/i }, { description: 'IndexError', pattern: /IndexError/i }]
  },
  {
    title: 'Safe Dictionary Key Access (KeyError)',
    category: 'KeyError handling',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'user = {"name": "Hamza"}. Accessing user["email"] raises KeyError. Wrap in try-except KeyError, print friendly warning, and assign "no-email@domain.com".',
    requirements: ['try: email = user["email"]', 'except KeyError: assign fallback', 'Print fallback email'],
    sampleOutput: 'Accessing user profile...\nKeyError caught: "email" key does not exist.\nFallback Email: no-email@domain.com',
    starterCode: '# Day 13 - Exam 7: KeyError\nuser = {"name": "Hamza"}\n\n# Code yahan likhein:\n',
    solutionCode: 'user = {"name": "Hamza"}\nprint("Accessing user profile...")\ntry:\n    email = user["email"]\nexcept KeyError:\n    print(\'KeyError caught: "email" key does not exist.\')\n    email = "no-email@domain.com"\nprint("Fallback Email:", email)',
    hints: ['except KeyError: fallback assign karein.'],
    expectedPatterns: [{ description: 'KeyError caught', pattern: /KeyError/i }, { description: 'no-email@domain.com', pattern: /no-email@domain\.com/i }]
  },
  {
    title: 'Raising Custom Exceptions with raise',
    category: 'raise keyword validation',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Write validate_age(age). If age < 0 or age > 120, raise ValueError("Invalid Age: Age must be between 0 and 120."). Test with age = -5 inside try-except.',
    requirements: ['def validate_age(age): if age < 0: raise ValueError(...)', 'try: validate_age(-5)', 'except ValueError as e: print(e)'],
    sampleOutput: 'Validating age -5...\nCaught Validation Error: Invalid Age: Age must be between 0 and 120.',
    starterCode: '# Day 13 - Exam 8: raise Exception\n# Code yahan likhein:\n\n',
    solutionCode: 'def validate_age(age):\n    if age < 0 or age > 120:\n        raise ValueError("Invalid Age: Age must be between 0 and 120.")\n    return True\n\nprint("Validating age -5...")\ntry:\n    validate_age(-5)\nexcept ValueError as e:\n    print("Caught Validation Error:", e)',
    hints: ['raise ValueError("message") error trigger karta hai.'],
    expectedPatterns: [{ description: 'Invalid Age', pattern: /Invalid Age/i }]
  },
  {
    title: 'Generic Exception Inspection (except Exception as e)',
    category: 'Exception inspection',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Catch unexpected exceptions with except Exception as e. Print type(e).__name__ and str(e) so you understand exactly what failed.',
    requirements: ['try: simulate error', 'except Exception as e:', 'print(f"Error Type: {type(e).__name__}, Message: {e}")'],
    sampleOutput: 'Running risky operation...\nError Type: TypeError\nError Details: unsupported operand type(s) for +: \'int\' and \'str\'\nProgram survived crash.',
    starterCode: '# Day 13 - Exam 9: Exception as e\n# Code yahan likhein:\n\n',
    solutionCode: 'print("Running risky operation...")\ntry:\n    res = 5 + "10"\nexcept Exception as e:\n    print("Error Type:", type(e).__name__)\n    print("Error Details:", e)\nprint("Program survived crash.")',
    hints: ['except Exception as e har kisam ka error capture karta hai.'],
    expectedPatterns: [{ description: 'TypeError', pattern: /TypeError/i }, { description: 'Program survived crash', pattern: /Program survived crash/i }]
  },
  {
    title: 'Day 13 Capstone: Bulletproof Bank ATM Withdrawal Gateway',
    category: 'Capstone Error Handling',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Day 13 Capstone! Build a production-grade atm_withdraw(account_balance, requested_amount). It must handle:\n1. Non-numeric amount -> raise TypeError\n2. Negative or zero amount -> raise ValueError("Amount must be positive")\n3. Insufficient funds (amount > balance) -> raise ValueError("Insufficient Funds")\n4. Success -> deduct and return new balance.\nTest all 3 failure cases and 1 success case in a clean loop without crashing the application!',
    requirements: ['def atm_withdraw(balance, amount):', 'Validate type, range, and sufficient funds with raise', 'Test cases in loop with try-except', 'Print comprehensive ATM transaction log'],
    sampleOutput: '========================================\n       SECURE ATM DEFENSIVE GATEWAY     \n========================================\nTest #1 ($ -500): REJECTED - Amount must be positive.\nTest #2 ($ 25000): REJECTED - Insufficient Funds (Balance: $10000).\nTest #3 ($ 4000): APPROVED! New Balance: $6000\n========================================\nATM Gateway: 0 Unhandled Crashes.',
    starterCode: '# Day 13 - Exam 10: Capstone ATM Gateway\n# Code yahan likhein:\n\n',
    solutionCode: 'def atm_withdraw(balance, amount):\n    if not isinstance(amount, (int, float)):\n        raise TypeError("Amount must be a valid number.")\n    if amount <= 0:\n        raise ValueError("Amount must be positive.")\n    if amount > balance:\n        raise ValueError(f"Insufficient Funds (Balance: ${balance}).")\n    return balance - amount\n\nprint("========================================")\nprint("       SECURE ATM DEFENSIVE GATEWAY     ")\nprint("========================================")\nbalance = 10000\ntests = [-500, 25000, 4000]\nfor i, amt in enumerate(tests, 1):\n    try:\n        balance = atm_withdraw(balance, amt)\n        print(f"Test #{i} ($ {amt}): APPROVED! New Balance: ${balance}")\n    except ValueError as e:\n        print(f"Test #{i} ($ {amt}): REJECTED - {e}")\nprint("========================================")\nprint("ATM Gateway: 0 Unhandled Crashes.")',
    hints: ['Har test case ko try-except block ke andar call karein.'],
    expectedPatterns: [{ description: 'Amount must be positive', pattern: /Amount must be positive/i }, { description: 'Insufficient Funds', pattern: /Insufficient Funds/i }, { description: 'APPROVED! New Balance: $6000', pattern: /6000/ }]
  }
]);

// Day 14 Exams: Final Capstone Project & Grand Graduation Exam (10 Distinct Questions)
export const day14ExamsData: Day1ExamQuestion[] = createDayExams(14, 'Final Capstone & Full Automation', [
  {
    title: 'Student Gradebook Synthesis & Class Statistics',
    category: 'Full-stack aggregation',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Given roster = [{"name": "Sara", "marks": 92}, {"name": "Ali", "marks": 78}, {"name": "Hamza", "marks": 85}, {"name": "Zain", "marks": 65}]. Calculate average marks (80.0), top student ("Sara"), and pass count (4).',
    requirements: ['Calculate average, max scorer, pass count', 'Print academic summary report'],
    sampleOutput: 'Total Students: 4\nClass Average: 80.0 Marks\nTop Scorer: Sara (92 Marks)\nPassing Rate: 4 / 4 (100.0%)',
    starterCode: '# Day 14 - Exam 1: Gradebook Synthesis\nroster = [\n    {"name": "Sara", "marks": 92},\n    {"name": "Ali", "marks": 78},\n    {"name": "Hamza", "marks": 85},\n    {"name": "Zain", "marks": 65}\n]\n\n# Code yahan likhein:\n',
    solutionCode: 'roster = [\n    {"name": "Sara", "marks": 92},\n    {"name": "Ali", "marks": 78},\n    {"name": "Hamza", "marks": 85},\n    {"name": "Zain", "marks": 65}\n]\nmarks_list = [s["marks"] for s in roster]\navg = sum(marks_list) / len(marks_list)\ntop_student = max(roster, key=lambda s: s["marks"])\nprint("Total Students:", len(roster))\nprint(f"Class Average: {avg:.1f} Marks")\nprint(f"Top Scorer: {top_student[\'name\']} ({top_student[\'marks\']} Marks)")\nprint(f"Passing Rate: {len(roster)} / {len(roster)} (100.0%)")',
    hints: ['sum(marks_list) / len(marks_list) average deta hai.'],
    expectedPatterns: [{ description: 'Class Average: 80.0', pattern: /80/ }, { description: 'Sara (92 Marks)', pattern: /Sara[\s\S]*92/i }]
  },
  {
    title: 'E-Commerce Invoice & GST Pipeline',
    category: 'Business pipeline',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Process cart = [{"item": "Keyboard", "price": 4500, "qty": 2}, {"item": "Mouse", "price": 1800, "qty": 1}]. Calculate subtotal (10800 PKR), 15% GST (1620 PKR), and total bill (12420 PKR).',
    requirements: ['Calculate subtotal and 15% GST', 'Print itemized order summary'],
    sampleOutput: 'Subtotal: Rs. 10800\nGST Tax (15%): Rs. 1620.0\nTotal Invoice: Rs. 12420.0',
    starterCode: '# Day 14 - Exam 2: E-Commerce Invoice\ncart = [\n    {"item": "Keyboard", "price": 4500, "qty": 2},\n    {"item": "Mouse", "price": 1800, "qty": 1}\n]\n\n# Code yahan likhein:\n',
    solutionCode: 'cart = [\n    {"item": "Keyboard", "price": 4500, "qty": 2},\n    {"item": "Mouse", "price": 1800, "qty": 1}\n]\nsubtotal = sum(i["price"] * i["qty"] for i in cart)\ntax = subtotal * 0.15\ntotal = subtotal + tax\nprint("Subtotal: Rs.", subtotal)\nprint("GST Tax (15%): Rs.", tax)\nprint("Total Invoice: Rs.", total)',
    hints: ['4500 * 2 + 1800 = 10800, 15% tax = 1620, Total = 12420.'],
    expectedPatterns: [{ description: 'Subtotal: Rs. 10800', pattern: /10800/ }, { description: 'Total Invoice: Rs. 12420', pattern: /12420/ }]
  },
  {
    title: 'Text Analytics: Word Frequency & Longest Word',
    category: 'Text processing algorithm',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Given paragraph = "python is powerful and python is fast and python is friendly". Find total words, unique words count, most frequent word ("python" 3 times), and longest word ("powerful").',
    requirements: ['Split words with .split()', 'Calculate unique count and longest word', 'Print text analysis report'],
    sampleOutput: 'Total Words: 10\nUnique Words: 5\nMost Frequent: python (3 times)\nLongest Word: powerful',
    starterCode: '# Day 14 - Exam 3: Text Analytics\nparagraph = "python is powerful and python is fast and python is friendly"\n\n# Code yahan likhein:\n',
    solutionCode: 'paragraph = "python is powerful and python is fast and python is friendly"\nwords = paragraph.split()\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\nlongest = max(words, key=len)\nmost_freq = max(counts.items(), key=lambda x: x[1])\nprint("Total Words:", len(words))\nprint("Unique Words:", len(counts))\nprint(f"Most Frequent: {most_freq[0]} ({most_freq[1]} times)")\nprint("Longest Word:", longest)',
    hints: ['counts[w] = counts.get(w, 0) + 1 frequency count karta hai.'],
    expectedPatterns: [{ description: 'Total Words: 10', pattern: /10/ }, { description: 'python (3 times)', pattern: /python[\s\S]*3/i }, { description: 'powerful', pattern: /powerful/i }]
  },
  {
    title: 'Mini Banking Ledger with Running Balance',
    category: 'Financial ledger loop',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Starting balance = 5000 PKR. Transactions: txs = [("Deposit", 3000), ("Withdraw", 1500), ("Deposit", 4000), ("Withdraw", 2000)]. Process each transaction and calculate final running balance (8500 PKR).',
    requirements: ['Loop through txs', 'Update balance based on action', 'Print audit statement and final balance 8500'],
    sampleOutput: 'Initial Balance: Rs. 5000\n+ Deposit:  Rs. 3000 -> Balance: Rs. 8000\n- Withdraw: Rs. 1500 -> Balance: Rs. 6500\n+ Deposit:  Rs. 4000 -> Balance: Rs. 10500\n- Withdraw: Rs. 2000 -> Balance: Rs. 8500\nFinal Closing Balance: Rs. 8500',
    starterCode: '# Day 14 - Exam 4: Banking Ledger\nbalance = 5000\ntxs = [("Deposit", 3000), ("Withdraw", 1500), ("Deposit", 4000), ("Withdraw", 2000)]\n\n# Code yahan likhein:\n',
    solutionCode: 'balance = 5000\ntxs = [("Deposit", 3000), ("Withdraw", 1500), ("Deposit", 4000), ("Withdraw", 2000)]\nprint("Initial Balance: Rs.", balance)\nfor kind, amt in txs:\n    if kind == "Deposit":\n        balance += amt\n        print(f"+ Deposit:  Rs. {amt} -> Balance: Rs. {balance}")\n    else:\n        balance -= amt\n        print(f"- Withdraw: Rs. {amt} -> Balance: Rs. {balance}")\nprint("Final Closing Balance: Rs.", balance)',
    hints: ['Deposit par jama (+) karein, Withdraw par minus (-) karein.'],
    expectedPatterns: [{ description: 'Final Closing Balance: Rs. 8500', pattern: /8500/ }]
  },
  {
    title: 'CSV String Data Parser & Normalizer',
    category: 'Data parsing & cleaning',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'raw_csv = "id,name,role\\n1,Ali,Developer\\n2,Sara,Designer\\n3,Hamza,Manager". Parse lines and print formatted records table.',
    requirements: ['Split lines with .split("\\n")', 'Parse header and row values with .split(",")', 'Print formatted tabular output'],
    sampleOutput: 'Parsed 3 Records:\n- [ID 1] Ali: Developer\n- [ID 2] Sara: Designer\n- [ID 3] Hamza: Manager',
    starterCode: '# Day 14 - Exam 5: CSV Parser\nraw_csv = "id,name,role\\n1,Ali,Developer\\n2,Sara,Designer\\n3,Hamza,Manager"\n\n# Code yahan likhein:\n',
    solutionCode: 'raw_csv = "id,name,role\\n1,Ali,Developer\\n2,Sara,Designer\\n3,Hamza,Manager"\nlines = raw_csv.strip().split("\\n")\nrows = [line.split(",") for line in lines[1:]]\nprint(f"Parsed {len(rows)} Records:")\nfor emp_id, name, role in rows:\n    print(f"- [ID {emp_id}] {name}: {role}")',
    hints: ['lines[1:] pehli header line skip karta hai.'],
    expectedPatterns: [{ description: 'Parsed 3 Records', pattern: /3/ }, { description: 'Ali: Developer', pattern: /Ali[\s\S]*Developer/i }]
  },
  {
    title: 'Multi-Criteria Catalog Search & Filter Engine',
    category: 'Filtering engine',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'products = [{"name": "Laptop", "cat": "Tech", "price": 120000}, {"name": "Book", "cat": "Edu", "price": 1500}, {"name": "Monitor", "cat": "Tech", "price": 35000}]. Filter products where cat == "Tech" and price <= 50000 ("Monitor").',
    requirements: ['Filter list using list comprehension or loop', 'Match cat == "Tech" and price <= 50000', 'Print matching product'],
    sampleOutput: 'Search Criteria: Category="Tech", Max Price=50000\nFound 1 Match:\n- Monitor: Rs. 35000',
    starterCode: '# Day 14 - Exam 6: Search Engine\nproducts = [\n    {"name": "Laptop", "cat": "Tech", "price": 120000},\n    {"name": "Book", "cat": "Edu", "price": 1500},\n    {"name": "Monitor", "cat": "Tech", "price": 35000}\n]\n\n# Code yahan likhein:\n',
    solutionCode: 'products = [\n    {"name": "Laptop", "cat": "Tech", "price": 120000},\n    {"name": "Book", "cat": "Edu", "price": 1500},\n    {"name": "Monitor", "cat": "Tech", "price": 35000}\n]\nmatches = [p for p in products if p["cat"] == "Tech" and p["price"] <= 50000]\nprint(\'Search Criteria: Category="Tech", Max Price=50000\')\nprint(f"Found {len(matches)} Match:")\nfor m in matches:\n    print(f"- {m[\'name\']}: Rs. {m[\'price\']}")',
    hints: ['p["cat"] == "Tech" and p["price"] <= 50000 sirf Monitor ko match karega.'],
    expectedPatterns: [{ description: 'Found 1 Match', pattern: /1/ }, { description: 'Monitor: Rs. 35000', pattern: /Monitor[\s\S]*35000/i }]
  },
  {
    title: 'Password Security Rule Auditor',
    category: 'String validation rules',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Verify password = "Secure@Python2026" satisfies: 1) len >= 8, 2) has digit (any(c.isdigit())), 3) has uppercase (any(c.isupper())), 4) has special char in "@#$%". If all True, print "Password Validated: Strong & Compliant".',
    requirements: ['Check length, digits, uppercase, special chars', 'Print compliance status'],
    sampleOutput: 'Auditing: Secure@Python2026\nLength (17 >= 8): True\nHas Digit: True\nHas Uppercase: True\nHas Special Char: True\nPassword Validated: Strong & Compliant',
    starterCode: '# Day 14 - Exam 7: Password Auditor\npwd = "Secure@Python2026"\n\n# Code yahan likhein:\n',
    solutionCode: 'pwd = "Secure@Python2026"\nhas_len = len(pwd) >= 8\nhas_digit = any(c.isdigit() for c in pwd)\nhas_upper = any(c.isupper() for c in pwd)\nhas_special = any(c in "@#$%" for c in pwd)\n\nprint("Auditing:", pwd)\nprint(f"Length ({len(pwd)} >= 8):", has_len)\nprint("Has Digit:", has_digit)\nprint("Has Uppercase:", has_upper)\nprint("Has Special Char:", has_special)\nif all([has_len, has_digit, has_upper, has_special]):\n    print("Password Validated: Strong & Compliant")',
    hints: ['any(c.isdigit() for c in pwd) digit check karta hai.'],
    expectedPatterns: [{ description: 'Strong & Compliant', pattern: /Strong & Compliant/i }, { description: 'Has Digit: True', pattern: /True/i }]
  },
  {
    title: 'Automated Academic Report Card Generator',
    category: 'Report formatting',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Generate an official ASCII bordered transcript for student = "Muhammad Bilal", roll_no = 1088, marks = {"Programming": 94, "Math": 88, "English": 86}. Print total (268/300), percentage (89.3%), and Distinction status.',
    requirements: ['Calculate total and percentage', 'Format bordered report card with ASCII borders'],
    sampleOutput: '========================================\n       PYSEEKHO OFFICIAL REPORT CARD    \n========================================\nStudent:   Muhammad Bilal (Roll: 1088)\nTotal:     268 / 300\nPercentage: 89.3%\nStatus:    PASSED WITH DISTINCTION 🏅\n========================================',
    starterCode: '# Day 14 - Exam 8: Report Card\nstudent = "Muhammad Bilal"\nroll = 1088\nmarks = {"Programming": 94, "Math": 88, "English": 86}\n\n# Code yahan likhein:\n',
    solutionCode: 'student = "Muhammad Bilal"\nroll = 1088\nmarks = {"Programming": 94, "Math": 88, "English": 86}\ntotal = sum(marks.values())\npct = (total / 300) * 100\nprint("========================================")\nprint("       PYSEEKHO OFFICIAL REPORT CARD    ")\nprint("========================================")\nprint(f"Student:   {student} (Roll: {roll})")\nprint(f"Total:     {total} / 300")\nprint(f"Percentage: {pct:.1f}%")\nprint("Status:    PASSED WITH DISTINCTION 🏅")\nprint("========================================")',
    hints: ['sum(marks.values()) total 268 nikalega.'],
    expectedPatterns: [{ description: 'Muhammad Bilal', pattern: /Muhammad Bilal/i }, { description: '268 / 300', pattern: /268/ }, { description: '89.3%', pattern: /89/ }]
  },
  {
    title: 'JSON Data Serialization Simulation',
    category: 'Serialization logic',
    difficulty: 'Darmiyana (Medium)',
    scenario: 'Convert dictionary payload = {"app": "PySeekho", "version": 2.0, "active": True, "modules": 27} into simulated formatted key-value string. Verify data integrity.',
    requirements: ['Loop over payload.items()', 'Format output string', 'Print serialized configuration payload'],
    sampleOutput: '--- SERIALIZED APP CONFIG ---\napp: "PySeekho"\nversion: 2.0\nactive: True\nmodules: 27\nStatus: Verified & Ready for Cloud Deployment',
    starterCode: '# Day 14 - Exam 9: JSON Simulation\npayload = {"app": "PySeekho", "version": 2.0, "active": True, "modules": 27}\n\n# Code yahan likhein:\n',
    solutionCode: 'payload = {"app": "PySeekho", "version": 2.0, "active": True, "modules": 27}\nprint("--- SERIALIZED APP CONFIG ---")\nfor k, v in payload.items():\n    if isinstance(v, str):\n        print(f\'{k}: "{v}"\')\n    else:\n        print(f"{k}: {v}")\nprint("Status: Verified & Ready for Cloud Deployment")',
    hints: ['Loop over payload.items().'],
    expectedPatterns: [{ description: 'PySeekho', pattern: /PySeekho/i }, { description: 'modules: 27', pattern: /27/ }]
  },
  {
    title: 'Day 14 Grand Graduation Capstone: Full-Stack Enterprise Automation Suite',
    category: 'Grand Capstone Masterpiece',
    difficulty: 'Mushkil (Hard)',
    scenario: 'Day 14 GRAND GRADUATION EXAM! Combine A to Z Python concepts:\n1. Process multi-item inventory orders\n2. Defensive checks for out-of-stock items with try-except\n3. Calculate net revenue, profit margins, and discounts\n4. Generate graduation certificate audit: "CONGRATULATIONS! Python Full-Stack Curriculum 100% Mastered!"\nRun the master suite and verify 0 runtime crashes.',
    requirements: ['Define orders list and inventory dictionary', 'Loop with defensive error handling', 'Compute total revenue and profit', 'Print grand graduation summary and certificate status'],
    sampleOutput: '==================================================\n   PYSEEKHO ENTERPRISE AUTOMATION & GRADUATION    \n==================================================\nOrders Processed: 3 successful, 0 failed\nTotal Enterprise Revenue: Rs. 185000\nSystem Status: 100% OPERATIONAL\n--------------------------------------------------\n🎓 CONGRATULATIONS! GRADUATED AS CERTIFIED PYTHON DEV\n==================================================',
    starterCode: '# Day 14 - Exam 10: Grand Graduation Capstone\n# Yahan apna mukammal capstone code likhein:\n\n',
    solutionCode: 'orders = [\n    {"id": 101, "item": "Cloud Server", "revenue": 85000},\n    {"id": 102, "item": "Web App Design", "revenue": 65000},\n    {"id": 103, "item": "API Integration", "revenue": 35000}\n]\n\nprint("==================================================")\nprint("   PYSEEKHO ENTERPRISE AUTOMATION & GRADUATION    ")\nprint("==================================================")\ntotal_revenue = sum(o["revenue"] for o in orders)\nprint(f"Orders Processed: {len(orders)} successful, 0 failed")\nprint(f"Total Enterprise Revenue: Rs. {total_revenue}")\nprint("System Status: 100% OPERATIONAL")\nprint("--------------------------------------------------")\nprint("🎓 CONGRATULATIONS! GRADUATED AS CERTIFIED PYTHON DEV")\nprint("==================================================")',
    hints: ['sum(o["revenue"] for o in orders) total 185000 banayega.'],
    expectedPatterns: [{ description: '185000', pattern: /185000/ }, { description: 'CONGRATULATIONS', pattern: /CONGRATULATIONS/i }]
  }
]);
