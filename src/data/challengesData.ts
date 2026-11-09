import { Challenge } from '../types';

export const challengesData: Challenge[] = [
  {
    id: 'challenge-1-hello-world',
    category: 'Basics & Print',
    difficulty: 'Aasan (Easy)',
    xpReward: 30,
    title: {
      roman_urdu: 'Challenge 1: Pehla Salaam (Hello World)',
      english: 'Challenge 1: Hello World Greeting',
      urdu: 'پہلا چیلنج: پہلا سلام'
    },
    description: {
      roman_urdu: 'Screen par theek "Assalam-o-Alaikum, Python!" print karein.',
      english: 'Print exact text "Assalam-o-Alaikum, Python!" to the console.',
      urdu: 'اسکرین پر "Assalam-o-Alaikum, Python!" پرنٹ کریں۔'
    },
    instructions: {
      roman_urdu: [
        '`print()` function ka istemal karein.',
        'Spelling aur punctuation ka dhyan rakhein: "Assalam-o-Alaikum, Python!"'
      ],
      english: [
        'Use the `print()` function.',
        'Match exact string including exclamation mark: "Assalam-o-Alaikum, Python!"'
      ],
      urdu: [
        'پرنٹ فنکشن استعمال کریں۔',
        'کوما اور نشان کا خاص خیال رکھیں۔'
      ]
    },
    starterCode: `# Yahan apna code likhein aur 'Test Run Karein' par click karein:
print("Assalam-o-Alaikum, Python!")
`,
    solutionCode: `print("Assalam-o-Alaikum, Python!")`,
    hints: {
      roman_urdu: [
        'print("...") likhein.',
        'Quotes ke andar wahi text likhein jo sawal me manga hai.'
      ],
      english: [
        'Use `print(...)` with quotation marks.',
        'Double check spelling: Assalam-o-Alaikum, Python!'
      ],
      urdu: [
        'پرنٹ فنکشن میں درست جملہ لکھیں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-1-1',
        description: 'Check exact output',
        input: '',
        expectedOutput: 'Assalam-o-Alaikum, Python!'
      }
    ]
  },
  {
    id: 'challenge-2-temperature-converter',
    category: 'Variables & Math',
    difficulty: 'Aasan (Easy)',
    xpReward: 35,
    title: {
      roman_urdu: 'Challenge 2: Celsius se Fahrenheit Converter',
      english: 'Challenge 2: Celsius to Fahrenheit Converter',
      urdu: 'دوسرا چیلنج: درجہ حرارت کنورٹر'
    },
    description: {
      roman_urdu: 'Aik function `celsius_to_fahrenheit(c)` likhein jo Celsius temperature lekar Fahrenheit return kare. Formula: (c * 9/5) + 32',
      english: 'Write a function `celsius_to_fahrenheit(c)` that converts Celsius to Fahrenheit using formula: `(c * 9/5) + 32`.',
      urdu: 'سیلسیس کو فارن ہائٹ میں تبدیل کرنے کا فنکشن بنائیں۔'
    },
    instructions: {
      roman_urdu: [
        'Function ka naam `celsius_to_fahrenheit(c)` hona chahiye.',
        'Formula: `(c * 9/5) + 32` return karein.'
      ],
      english: [
        'Function name must be `celsius_to_fahrenheit(c)`.',
        'Return the computed Fahrenheit value.'
      ],
      urdu: [
        'فنکشن کی مدد سے فارمولا لاگو کر کے ویلیو واپس کریں۔'
      ]
    },
    starterCode: `def celsius_to_fahrenheit(c):
    # Yahan apna formula return karein:
    return (c * 9/5) + 32

# Test checking:
print("0 C =", celsius_to_fahrenheit(0))
print("100 C =", celsius_to_fahrenheit(100))
`,
    solutionCode: `def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32
`,
    hints: {
      roman_urdu: [
        '`return (c * 9 / 5) + 32` likhein.'
      ],
      english: [
        'Make sure to multiply c by 9/5 and add 32.'
      ],
      urdu: [
        'سیلسیس کو 9 بٹا 5 سے ضرب دے کر 32 جمع کریں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-2-1',
        description: 'Freezing point 0 C -> 32 F',
        input: '0',
        expectedOutput: '32.0'
      },
      {
        id: 'tc-2-2',
        description: 'Boiling point 100 C -> 212 F',
        input: '100',
        expectedOutput: '212.0'
      },
      {
        id: 'tc-2-3',
        description: 'Room temp 25 C -> 77 F',
        input: '25',
        expectedOutput: '77.0'
      }
    ]
  },
  {
    id: 'challenge-3-even-odd',
    category: 'Operators & Conditions',
    difficulty: 'Aasan (Easy)',
    xpReward: 35,
    title: {
      roman_urdu: 'Challenge 3: Even ya Odd (Juft ya Taaq) Checker',
      english: 'Challenge 3: Even or Odd Checker',
      urdu: 'تیسرا چیلنج: جفت یا طاق جانچنا'
    },
    description: {
      roman_urdu: 'Function `check_even_odd(n)` banayein. Agar number even ho to "Even" return kare, warna "Odd" return kare.',
      english: 'Write `check_even_odd(n)`. Return "Even" if divisible by 2 with no remainder, otherwise return "Odd".',
      urdu: 'اگر عدد 2 پر پورا تقسیم ہو تو Even اور نہ ہو تو Odd لوٹائیں۔'
    },
    instructions: {
      roman_urdu: [
        'Modulus operator `%` istemal karein: `if n % 2 == 0`',
        'Text "Even" ya "Odd" return karein.'
      ],
      english: [
        'Use `n % 2 == 0` to check evenness.',
        'Return exact strings "Even" or "Odd".'
      ],
      urdu: [
        'فیصد کی علامت % کی مدد سے بقایا دیکھیں۔'
      ]
    },
    starterCode: `def check_even_odd(n):
    # Apna code yahan likhein:
    if n % 2 == 0:
        return "Even"
    else:
        return "Odd"

print(check_even_odd(4))  # Should print Even
print(check_even_odd(7))  # Should print Odd
`,
    solutionCode: `def check_even_odd(n):
    return "Even" if n % 2 == 0 else "Odd"
`,
    hints: {
      roman_urdu: [
        'Agar remainder 0 ho: `n % 2 == 0`, to Even.'
      ],
      english: [
        'Check `if n % 2 == 0: return "Even" else: return "Odd"`.'
      ],
      urdu: [
        'اگر n % 2 صفر کے برابر ہو تو ایون ہے۔'
      ]
    },
    testCases: [
      {
        id: 'tc-3-1',
        description: '4 is Even',
        input: '4',
        expectedOutput: 'Even'
      },
      {
        id: 'tc-3-2',
        description: '9 is Odd',
        input: '9',
        expectedOutput: 'Odd'
      },
      {
        id: 'tc-3-3',
        description: '0 is Even',
        input: '0',
        expectedOutput: 'Even'
      }
    ]
  },
  {
    id: 'challenge-4-grade-calculator',
    category: 'Conditionals (if/elif)',
    difficulty: 'Darmiyana (Medium)',
    xpReward: 40,
    title: {
      roman_urdu: 'Challenge 4: Student Ka Grade Maloom Karein',
      english: 'Challenge 4: Student Grade Calculator',
      urdu: 'چوتھا چیلنج: گریڈ معلوم کرنا'
    },
    description: {
      roman_urdu: 'Function `get_grade(marks)` likhein: 90 ya zyada par "A+", 80-89 par "A", 70-79 par "B", 60-69 par "C", 50-59 par "D", aur 50 se kam par "F".',
      english: 'Write `get_grade(marks)` returning "A+" (>=90), "A" (>=80), "B" (>=70), "C" (>=60), "D" (>=50), or "F" (<50).',
      urdu: 'نمبروں کی بنیاد پر طالب علم کا گریڈ معلوم کرنے کا فنکشن۔'
    },
    instructions: {
      roman_urdu: [
        '`if`, `elif`, aur `else` ka sahi istemal karein.',
        'Grade string ("A+", "A", "B", "C", "D", "F") return karein.'
      ],
      english: [
        'Use conditional chain `if / elif / else`.',
        'Return matching grade string.'
      ],
      urdu: [
        'کنڈیشنز کی درست ترتیب کا خیال رکھیں۔'
      ]
    },
    starterCode: `def get_grade(marks):
    # Yahan if/elif conditions likhein:
    if marks >= 90:
        return "A+"
    elif marks >= 80:
        return "A"
    elif marks >= 70:
        return "B"
    elif marks >= 60:
        return "C"
    elif marks >= 50:
        return "D"
    else:
        return "F"

print("Grade for 95:", get_grade(95))
print("Grade for 72:", get_grade(72))
print("Grade for 40:", get_grade(40))
`,
    solutionCode: `def get_grade(marks):
    if marks >= 90:
        return "A+"
    elif marks >= 80:
        return "A"
    elif marks >= 70:
        return "B"
    elif marks >= 60:
        return "C"
    elif marks >= 50:
        return "D"
    return "F"
`,
    hints: {
      roman_urdu: [
        'Upar se neechay order mein check karein: 90 se shuru karein.'
      ],
      english: [
        'Order your conditions from highest score to lowest.'
      ],
      urdu: [
        'سب سے بڑے نمبر سے جانچ شروع کریں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-4-1',
        description: 'Marks 92 -> A+',
        input: '92',
        expectedOutput: 'A+'
      },
      {
        id: 'tc-4-2',
        description: 'Marks 85 -> A',
        input: '85',
        expectedOutput: 'A'
      },
      {
        id: 'tc-4-3',
        description: 'Marks 64 -> C',
        input: '64',
        expectedOutput: 'C'
      },
      {
        id: 'tc-4-4',
        description: 'Marks 45 -> F',
        input: '45',
        expectedOutput: 'F'
      }
    ]
  },
  {
    id: 'challenge-5-sum-numbers',
    category: 'Loops',
    difficulty: 'Aasan (Easy)',
    xpReward: 35,
    title: {
      roman_urdu: 'Challenge 5: 1 se N Tak Numbers Ka Sum',
      english: 'Challenge 5: Sum of 1 to N Numbers',
      urdu: 'پانچواں چیلنج: 1 سے N تک کا مجموعہ'
    },
    description: {
      roman_urdu: 'Function `sum_up_to(n)` likhein jo 1 se lekar n tak ke tamam numbers ko jama kar ke total return kare.',
      english: 'Write `sum_up_to(n)` that returns the sum of all integers from 1 up to n.',
      urdu: 'ایک سے لے کر دیئے گئے نمبر تک تمام اعداد کا مجموعہ نکالیں۔'
    },
    instructions: {
      roman_urdu: [
        '`for i in range(1, n + 1)` ya while loop istemal karein.',
        'Ek `total = 0` variable rakhein aur har number usme jama karein.'
      ],
      english: [
        'Iterate from 1 to n with a loop or formula.',
        'Accumulate total and return.'
      ],
      urdu: [
        'لوپ کی مدد سے تمام نمبرز کو جمع کریں۔'
      ]
    },
    starterCode: `def sum_up_to(n):
    total = 0
    # Yahan for loop chalayein:
    for i in range(1, n + 1):
        total += i
    return total

print("Sum 1 to 5:", sum_up_to(5))   # 15
print("Sum 1 to 10:", sum_up_to(10)) # 55
`,
    solutionCode: `def sum_up_to(n):
    return sum(range(1, n + 1))
`,
    hints: {
      roman_urdu: [
        'range mein `n + 1` lagana mat bhoolein taake n bhi shamil ho!'
      ],
      english: [
        'Remember that `range(1, n + 1)` includes n.'
      ],
      urdu: [
        'رینج میں n + 1 لکھیں تاکہ آخری نمبر بھی شامل ہو۔'
      ]
    },
    testCases: [
      {
        id: 'tc-5-1',
        description: '1 to 5 sum is 15',
        input: '5',
        expectedOutput: '15'
      },
      {
        id: 'tc-5-2',
        description: '1 to 10 sum is 55',
        input: '10',
        expectedOutput: '55'
      },
      {
        id: 'tc-5-3',
        description: '1 to 100 sum is 5050',
        input: '100',
        expectedOutput: '5050'
      }
    ]
  },
  {
    id: 'challenge-6-list-analyzer',
    category: 'Lists',
    difficulty: 'Darmiyana (Medium)',
    xpReward: 40,
    title: {
      roman_urdu: 'Challenge 6: List Ka Average (Ausat) Maloom Karein',
      english: 'Challenge 6: Find List Average',
      urdu: 'چھٹا چیلنج: لسٹ کی اوسط نکالنا'
    },
    description: {
      roman_urdu: 'Function `find_average(nums)` banayein jo di gayi list ka average return kare. Agar list khali ho to 0 return kare.',
      english: 'Write `find_average(nums)`. Return the average (sum / length) of numbers in the list. If empty, return 0.',
      urdu: 'لسٹ کے تمام نمبرز کی اوسط (ایوریج) معلوم کریں۔'
    },
    instructions: {
      roman_urdu: [
        '`sum(nums)` aur `len(nums)` ka istemal karein.',
        'Khali list ke case ko check karein taake ZeroDivisionError na aaye.'
      ],
      english: [
        'Divide total sum by total count.',
        'Guard against empty lists.'
      ],
      urdu: [
        'مجموعہ کو کل تعداد پر تقسیم کریں۔'
      ]
    },
    starterCode: `def find_average(nums):
    if len(nums) == 0:
        return 0
    return sum(nums) / len(nums)

print("Average [10, 20, 30]:", find_average([10, 20, 30]))
print("Average [5, 15]:", find_average([5, 15]))
`,
    solutionCode: `def find_average(nums):
    return sum(nums) / len(nums) if nums else 0
`,
    hints: {
      roman_urdu: [
        '`sum(nums) / len(nums)` lagayein.'
      ],
      english: [
        'Use `sum(nums) / len(nums)`.'
      ],
      urdu: [
        'سم کو لینتھ پر ڈیوائیڈ کریں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-6-1',
        description: 'List [10, 20, 30] -> 20.0',
        input: '[10, 20, 30]',
        expectedOutput: '20.0'
      },
      {
        id: 'tc-6-2',
        description: 'List [2, 4, 6, 8] -> 5.0',
        input: '[2, 4, 6, 8]',
        expectedOutput: '5.0'
      }
    ]
  },
  {
    id: 'challenge-7-word-counter',
    category: 'Dictionaries & Strings',
    difficulty: 'Darmiyana (Medium)',
    xpReward: 40,
    title: {
      roman_urdu: 'Challenge 7: Alfaaz Ka Shummar (Word Frequency)',
      english: 'Challenge 7: Word Frequency Counter',
      urdu: 'ساتواں چیلنج: الفاظ کی گنتی'
    },
    description: {
      roman_urdu: 'Function `count_words(sentence)` banayein jo sentence ke har lafz ki tadad dictionary mein gin kar return kare.',
      english: 'Write `count_words(sentence)` returning a dictionary with the occurrence count of each lowercase word.',
      urdu: 'جملے میں موجود ہر لفظ کی تعداد ڈکشنری میں لوٹائیں۔'
    },
    instructions: {
      roman_urdu: [
        'Sentence ko `.lower().split()` se tukron mein torein.',
        'Dictionary mein har lafz ka count jama karte jayein.'
      ],
      english: [
        'Convert to lowercase and split by spaces.',
        'Tally counts inside a dictionary.'
      ],
      urdu: [
        'الفاظ کو الگ کر کے ڈکشنری میں گنتے جائیں۔'
      ]
    },
    starterCode: `def count_words(sentence):
    counts = {}
    words = sentence.lower().split()
    for w in words:
        counts[w] = counts.get(w, 0) + 1
    return counts

test_sentence = "python seekhein python practice karein"
print(count_words(test_sentence))
`,
    solutionCode: `def count_words(sentence):
    counts = {}
    for word in sentence.lower().split():
        counts[word] = counts.get(word, 0) + 1
    return counts
`,
    hints: {
      roman_urdu: [
        '`.get(w, 0) + 1` se agar lafz pehle na ho to 0 assume hota hai.'
      ],
      english: [
        'Use `counts.get(w, 0) + 1` to increment counts safely.'
      ],
      urdu: [
        'ڈکشنری میں get میتھڈ کا استعمال کریں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-7-1',
        description: 'Count "apple banana apple" -> {"apple": 2, "banana": 1}',
        input: '"apple banana apple"',
        expectedOutput: "{'apple': 2, 'banana': 1}"
      }
    ]
  },
  {
    id: 'challenge-8-palindrome-checker',
    category: 'Functions & Strings',
    difficulty: 'Mushkil (Hard)',
    xpReward: 45,
    title: {
      roman_urdu: 'Challenge 8: Palindrome Word Checker',
      english: 'Challenge 8: Palindrome Word Checker',
      urdu: 'آٹھواں چیلنج: پیلنڈروم جانچنا'
    },
    description: {
      roman_urdu: 'Function `is_palindrome(s)` banayein. Agar lafz agay aur peeche se barabar parha ja sake (jaise "radar", "level", "madam") to True return kare, warna False.',
      english: 'Write `is_palindrome(s)`. Return True if the word reads identical backwards (case-insensitive), otherwise False.',
      urdu: 'جانچیں کہ کیا لفظ الٹا پڑھنے پر بھی وہی رہتا ہے یا نہیں۔'
    },
    instructions: {
      roman_urdu: [
        'String ko lowercase karein: `s = s.lower()`',
        'Python slicing se reverse karein: `s[::-1]`',
        'Dono barabar hon to `True`, warna `False`.'
      ],
      english: [
        'Convert to lowercase.',
        'Compare string against its reverse `s[::-1]`.'
      ],
      urdu: [
        'اسٹرنگ کو الٹا کر کے موازنہ کریں۔'
      ]
    },
    starterCode: `def is_palindrome(s):
    cleaned = s.lower()
    # Yahan reverse check karein:
    return cleaned == cleaned[::-1]

print("radar:", is_palindrome("radar"))      # True
print("python:", is_palindrome("python"))    # False
print("Madam:", is_palindrome("Madam"))      # True
`,
    solutionCode: `def is_palindrome(s):
    cleaned = s.lower()
    return cleaned == cleaned[::-1]
`,
    hints: {
      roman_urdu: [
        '`s[::-1]` kisi bhi string ko reverse karne ka sabse tezi tareeqa hai!'
      ],
      english: [
        'In Python, `string[::-1]` reverses the string efficiently.'
      ],
      urdu: [
        'اسٹرنگ کو الٹا کرنے کے لیے [::-1] استعمال کریں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-8-1',
        description: '"racecar" is palindrome',
        input: '"racecar"',
        expectedOutput: 'True'
      },
      {
        id: 'tc-8-2',
        description: '"hello" is NOT palindrome',
        input: '"hello"',
        expectedOutput: 'False'
      },
      {
        id: 'tc-8-3',
        description: '"Level" is palindrome (case-insensitive)',
        input: '"Level"',
        expectedOutput: 'True'
      }
    ]
  },
  {
    id: 'challenge-9-vowel-counter',
    category: 'Strings & Loops',
    difficulty: 'Aasan (Easy)',
    xpReward: 35,
    title: {
      roman_urdu: 'Challenge 9: Vowels (a, e, i, o, u) Ganna',
      english: 'Challenge 9: Count Vowels',
      urdu: 'نواں چیلنج: حروف علت (واولز) گننا'
    },
    description: {
      roman_urdu: 'Function `count_vowels(text)` likhein jo kisi bhi text mein mojood vowels (a, e, i, o, u) ki kul tadad count kare.',
      english: 'Write `count_vowels(text)` returning total count of vowels (a, e, i, o, u) case-insensitively.',
      urdu: 'ٹیکسٹ میں موجود تمام واولز کی گنتی کریں۔'
    },
    instructions: {
      roman_urdu: [
        'Vowels ki list rakhein: `"aeiou"`',
        'Har harf par loop chalayein aur agar wo vowel ho to count barhayein.'
      ],
      english: [
        'Check each character against vowel set `aeiou`.',
        'Case-insensitive comparison.'
      ],
      urdu: [
        'حروف پر لوپ چلا کر واولز گنیں۔'
      ]
    },
    starterCode: `def count_vowels(text):
    vowels = "aeiou"
    count = 0
    # Yahan harf check karein:
    for char in text.lower():
        if char in vowels:
            count += 1
    return count

print("Vowels in 'Pakistan':", count_vowels("Pakistan"))  # 3 (a, i, a)
`,
    solutionCode: `def count_vowels(text):
    return sum(1 for c in text.lower() if c in "aeiou")
`,
    hints: {
      roman_urdu: [
        '`if char in "aeiou": count += 1`'
      ],
      english: [
        'Use `if char in "aeiou"` inside your loop.'
      ],
      urdu: [
        'اگر حرف واولز میں ہو تو گنتی ایک بڑھائیں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-9-1',
        description: '"Pakistan" has 3 vowels',
        input: '"Pakistan"',
        expectedOutput: '3'
      },
      {
        id: 'tc-9-2',
        description: '"Python" has 1 vowel',
        input: '"Python"',
        expectedOutput: '1'
      },
      {
        id: 'tc-9-3',
        description: '"Sky" has 0 vowels',
        input: '"Sky"',
        expectedOutput: '0'
      }
    ]
  },
  {
    id: 'challenge-10-fibonacci',
    category: 'Algorithms & Logic',
    difficulty: 'Mushkil (Hard)',
    xpReward: 50,
    title: {
      roman_urdu: 'Challenge 10: Fibonacci Series Generator',
      english: 'Challenge 10: Fibonacci Generator',
      urdu: 'دسواں چیلنج: فیبوناچی سیریز'
    },
    description: {
      roman_urdu: 'Function `generate_fibonacci(n)` banayein jo pehle n Fibonacci numbers ki list return kare. (0, 1, 1, 2, 3, 5, 8...)',
      english: 'Write `generate_fibonacci(n)` that returns a list of first n Fibonacci numbers (e.g. n=5 -> [0, 1, 1, 2, 3]).',
      urdu: 'پہلے n فیبوناچی نمبرز کی فہرست تیار کریں۔'
    },
    instructions: {
      roman_urdu: [
        'Agar n <= 0 ho to khali list `[]` dein.',
        'Agar n == 1 ho to `[0]` dein.',
        'Har naya number pichlay do numbers ka majmooa hota hai.'
      ],
      english: [
        'Handle n=0 and n=1 base cases.',
        'Each subsequent number is sum of previous two.'
      ],
      urdu: [
        'ہر نیا نمبر پچھلے دو نمبرز کا مجموعہ ہوتا ہے۔'
      ]
    },
    starterCode: `def generate_fibonacci(n):
    if n <= 0:
        return []
    if n == 1:
        return [0]
    
    fib = [0, 1]
    while len(fib) < n:
        fib.append(fib[-1] + fib[-2])
    return fib

print("First 6 Fibonacci:", generate_fibonacci(6))
`,
    solutionCode: `def generate_fibonacci(n):
    if n <= 0: return []
    if n == 1: return [0]
    fib = [0, 1]
    for _ in range(n - 2):
        fib.append(fib[-1] + fib[-2])
    return fib
`,
    hints: {
      roman_urdu: [
        '`fib[-1] + fib[-2]` se aakhri do numbers mil jate hain.'
      ],
      english: [
        'Access the last two elements via `fib[-1]` and `fib[-2]`.'
      ],
      urdu: [
        'آخری دو نمبرز کو جمع کر کے لسٹ میں شامل کریں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-10-1',
        description: 'First 5 Fibonacci -> [0, 1, 1, 2, 3]',
        input: '5',
        expectedOutput: '[0, 1, 1, 2, 3]'
      },
      {
        id: 'tc-10-2',
        description: 'First 1 Fibonacci -> [0]',
        input: '1',
        expectedOutput: '[0]'
      },
      {
        id: 'tc-10-3',
        description: 'First 7 Fibonacci -> [0, 1, 1, 2, 3, 5, 8]',
        input: '7',
        expectedOutput: '[0, 1, 1, 2, 3, 5, 8]'
      }
    ]
  },
  {
    id: 'challenge-11-coordinates-parser',
    category: 'Automation & Strings',
    difficulty: 'Darmiyana (Medium)',
    xpReward: 50,
    title: {
      roman_urdu: 'Challenge 11: GPS Coordinates Parser',
      english: 'Challenge 11: GPS Coordinates Parser',
      urdu: 'گیارہواں چیلنج: جی پی ایس کوآرڈینیٹ پارسر'
    },
    description: {
      roman_urdu: 'GPS LineString format (jaise "31.5204,74.3587;31.5210,74.3592") se pehle point ka Latitude aur Longitude alag karein.',
      english: 'Extract the first Latitude and Longitude pair from a GIS LineString.',
      urdu: 'جی پی ایس اسٹرنگ سے عرض بلد اور طول بلد کو الگ کریں۔'
    },
    instructions: {
      roman_urdu: [
        'Aik function `parse_coordinates(coords_str)` banayein.',
        'Pehle `;` se split karein taake pehla waypoint mil jaye: `.split(";")[0]`',
        'Phir `,` se split karke lat aur lon ko strip karein.',
        'Agar input `"-"` ho ya comma na ho to `("-", "-")` return karein.',
        'Result tuple `(lat, lon)` ki shakal mein return karein.'
      ],
      english: [
        'Create a function `parse_coordinates(coords_str)`.',
        'Split by `;` to isolate the first waypoint.',
        'Split by `,` to separate latitude and longitude.',
        'If coords_str is `"-"` or has no comma, return `("-", "-")`.',
        'Return a tuple `(lat, lon)`.'
      ],
      urdu: [
        'کوآرڈینیٹ اسٹرنگ کو تقسیم کر کے ٹیوپل کی شکل میں واپس کریں۔'
      ]
    },
    starterCode: `def parse_coordinates(coords_str):
    # Yahan logic likhein:
    if coords_str == "-" or "," not in coords_str:
        return ("-", "-")
    
    first_pt = coords_str.split(";")[0]
    parts = first_pt.split(",")
    return (parts[0].strip(), parts[1].strip())

# Test:
print(parse_coordinates("31.5204,74.3587;31.5210,74.3590"))
`,
    solutionCode: `def parse_coordinates(coords_str):
    if coords_str == "-" or "," not in coords_str:
        return ("-", "-")
    first_pt = coords_str.split(";")[0]
    parts = first_pt.split(",")
    return (parts[0].strip(), parts[1].strip())
`,
    hints: {
      roman_urdu: [
        '`.split(";")[0]` pehla hissa nikalta hai.',
        '`.split(",")` se lat aur lon alag hotay hain.'
      ],
      english: [
        'Use `.split(";")[0]` to obtain the first coordinate pair.',
        'Use `.split(",")` to extract lat and lon.'
      ],
      urdu: [
        'سیمی کولن اور کوما کی مدد سے اسٹرنگ الگ کریں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-11-1',
        description: 'Multi-point LineString',
        input: '31.5204,74.3587;31.5210,74.3590',
        expectedOutput: "('31.5204', '74.3587')"
      },
      {
        id: 'tc-11-2',
        description: 'Single point',
        input: '24.8607, 67.0011',
        expectedOutput: "('24.8607', '67.0011')"
      },
      {
        id: 'tc-11-3',
        description: 'Missing coordinates',
        input: '-',
        expectedOutput: "('-', '-')"
      }
    ]
  },
  {
    id: 'challenge-12-dynamic-attributes',
    category: 'Data Structures & Sets',
    difficulty: 'Darmiyana (Medium)',
    xpReward: 50,
    title: {
      roman_urdu: 'Challenge 12: Dynamic Attribute Row Aligner',
      english: 'Challenge 12: Dynamic Attribute Row Aligner',
      urdu: 'بارہواں چیلنج: ڈائنامک کالمز اور ڈکشنری'
    },
    description: {
      roman_urdu: 'Tamam dynamic column names ki list lein aur kisi row ke data ko match karte hue missing columns mein "-" daalein.',
      english: 'Given a list of column names, build a dictionary where all missing keys default to "-".',
      urdu: 'کالمز کی بنیاد پر مکمل ڈکشنری تیار کریں جہاں غیر موجود جگہوں پر ڈیش آئے۔'
    },
    instructions: {
      roman_urdu: [
        'Aik function `align_row(columns, asset_attrs)` banayein.',
        'Dictionary comprehension se pehle `{col: "-" for col in columns}` banayein.',
        'Phir `.update(asset_attrs)` se asli data merge kar dein.',
        'Dictionary return karein.'
      ],
      english: [
        'Define `align_row(columns, asset_attrs)`.',
        'Initialize `{col: "-" for col in columns}`.',
        'Merge the real attributes using `.update(asset_attrs)`.',
        'Return the aligned dictionary.'
      ],
      urdu: [
        'ڈکشنری کمپری ہینشن کے بعد اپ ڈیٹ کا طریقہ استعمال کریں۔'
      ]
    },
    starterCode: `def align_row(columns, asset_attrs):
    # Default row with "-"
    row = {col: "-" for col in columns}
    # Asli data update karein
    row.update(asset_attrs)
    return row

cols = ["color", "speed", "weather"]
attrs = {"color": "Red", "speed": "90kmh"}
print(align_row(cols, attrs))
`,
    solutionCode: `def align_row(columns, asset_attrs):
    row = {col: "-" for col in columns}
    row.update(asset_attrs)
    return row
`,
    hints: {
      roman_urdu: [
        '`{k: "-" for k in columns}` tamam keys ko default "-" deta hai.',
        '`row.update(...)` naye keys ko merge kar deta hai.'
      ],
      english: [
        'Use dict comprehension `{k: "-" for k in columns}`.',
        'Call `row.update(...)` to overwrite with actual values.'
      ],
      urdu: [
        'ڈکشنری کمپری ہینشن کا استعمال کریں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-12-1',
        description: 'Single missing attribute (weather)',
        input: '{"columns": ["color", "speed", "weather"], "attrs": {"color": "Red", "speed": "90kmh"}}',
        expectedOutput: "{'color': 'Red', 'speed': '90kmh', 'weather': '-'}"
      }
    ]
  },
  {
    id: 'challenge-13-frame-increment',
    category: 'Computer Vision Logic',
    difficulty: 'Aasan (Easy)',
    xpReward: 35,
    title: {
      roman_urdu: 'Challenge 13: Frame Number +1 Rule',
      english: 'Challenge 13: Frame Number +1 Rule',
      urdu: 'تیرہواں چیلنج: فریم نمبر ایڈجسٹر'
    },
    description: {
      roman_urdu: 'Agar raw_frame aik number (digit) hai to usme 1 jama karke string return karein. Warna jaisa hai waisa hi return karein.',
      english: 'If raw_frame is digits, convert 0-indexed frame to 1-indexed (str(int(f)+1)), else return as-is.',
      urdu: 'اگر فریم نمبر ڈیجٹ ہو تو ایک کا اضافہ کریں ورنہ ویسا ہی واپس کریں۔'
    },
    instructions: {
      roman_urdu: [
        'Function `adjust_frame(raw_frame)` banayein.',
        'Check karein: `if raw_frame.isdigit():`',
        'Agar true ho to `str(int(raw_frame) + 1)` return karein.',
        'Warna `raw_frame` hi return karein.'
      ],
      english: [
        'Implement `adjust_frame(raw_frame)`.',
        'Check `if raw_frame.isdigit():`.',
        'If so, return `str(int(raw_frame) + 1)`.',
        'Otherwise return `raw_frame`.'
      ],
      urdu: [
        'اسٹرنگ کے isdigit میتھڈ کا استعمال کریں۔'
      ]
    },
    starterCode: `def adjust_frame(raw_frame):
    # Yahan code likhein:
    if raw_frame.isdigit():
        return str(int(raw_frame) + 1)
    return raw_frame

print(adjust_frame("0"))   # 1 aana chahiye
print(adjust_frame("12"))  # 13 aana chahiye
print(adjust_frame("-"))   # - aana chahiye
`,
    solutionCode: `def adjust_frame(raw_frame):
    if raw_frame.isdigit():
        return str(int(raw_frame) + 1)
    return raw_frame
`,
    hints: {
      roman_urdu: [
        '`raw_frame.isdigit()` check karta hai ke kya string mein sirf numbers hain.'
      ],
      english: [
        'Use `.isdigit()` to safely test if the frame string represents an integer.'
      ],
      urdu: [
        'isdigit فنکشن چیک کرتا ہے کہ کیا تمام کریکٹرز نمبرز ہیں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-13-1',
        description: 'Frame 0 -> Frame 1',
        input: '0',
        expectedOutput: '1'
      },
      {
        id: 'tc-13-2',
        description: 'Frame 24 -> Frame 25',
        input: '24',
        expectedOutput: '25'
      },
      {
        id: 'tc-13-3',
        description: 'Hyphen unchanged',
        input: '-',
        expectedOutput: '-'
      }
    ]
  },
  {
    id: 'challenge-14-path-extractor',
    category: 'File System & OS',
    difficulty: 'Aasan (Easy)',
    xpReward: 35,
    title: {
      roman_urdu: 'Challenge 14: XML to CSV Name Generator',
      english: 'Challenge 14: XML to CSV Name Generator',
      urdu: 'چودہواں چیلنج: سی ایس وی فائل نیم جنریٹر'
    },
    description: {
      roman_urdu: 'Kisi bhi XML file name (jaise "check 1.xml") ka extension hata kar ".csv" lagayein.',
      english: 'Strip the .xml extension from a filename and return the corresponding .csv filename.',
      urdu: 'ایکس ایم ایل فائل کو سی ایس وی نام میں بدلیں۔'
    },
    instructions: {
      roman_urdu: [
        'Function `xml_to_csv_name(filename)` banayein.',
        '`os.path.splitext(filename)[0]` ya `.replace(".xml", ".csv")` use karein.',
        'Target filename return karein.'
      ],
      english: [
        'Define `xml_to_csv_name(filename)`.',
        'Separate the extension and append `.csv`.',
        'Return the resulting string.'
      ],
      urdu: [
        'ایکسٹینشن الگ کر کے سی ایس وی جوڑیں۔'
      ]
    },
    starterCode: `import os

def xml_to_csv_name(filename):
    # Yahan code likhein:
    base = os.path.splitext(filename)[0]
    return f"{base}.csv"

print(xml_to_csv_name("check 1.xml"))
`,
    solutionCode: `import os

def xml_to_csv_name(filename):
    base = os.path.splitext(filename)[0]
    return f"{base}.csv"
`,
    hints: {
      roman_urdu: [
        '`os.path.splitext("file.xml")` returns `("file", ".xml")`.'
      ],
      english: [
        '`os.path.splitext(f)[0]` extracts the base filename without extension.'
      ],
      urdu: [
        'splitext کا استعمال کریں۔'
      ]
    },
    testCases: [
      {
        id: 'tc-14-1',
        description: 'check 1.xml -> check 1.csv',
        input: 'check 1.xml',
        expectedOutput: 'check 1.csv'
      },
      {
        id: 'tc-14-2',
        description: 'drone_feed_09.xml -> drone_feed_09.csv',
        input: 'drone_feed_09.xml',
        expectedOutput: 'drone_feed_09.csv'
      }
    ]
  }
];
