// =======================================================
// 🔷 STRINGS IN JAVASCRIPT – Complete Guide + Interview Questions
// =======================================================

// A String is a sequence of characters enclosed in quotes.
// You can use single quotes '', double quotes "", or backticks `` (template literals).

let str1 = "Hello";
let str2 = 'World';
let str3 = `JavaScript`;

console.log(str1, str2, str3);

// =======================================================
// 🧩 1️⃣ String Basics
// =======================================================

let greeting = "Hello, JavaScript!";
console.log(greeting.length); // returns number of characters

// Access characters
console.log(greeting[0]); // "H"
console.log(greeting.charAt(1)); // "e"

// Strings are immutable → cannot be changed directly
greeting[0] = "h"; // ❌ No effect
console.log(greeting); // "Hello, JavaScript!"

// =======================================================
// 🧩 2️⃣ Important String Methods
// =======================================================

// ----- toUpperCase() / toLowerCase()
console.log(greeting.toUpperCase()); // "HELLO, JAVASCRIPT!"
console.log(greeting.toLowerCase()); // "hello, javascript!"

// ----- indexOf() / lastIndexOf()
console.log(greeting.indexOf("Java")); // 7
console.log(greeting.lastIndexOf("a")); // 13

// ----- includes() → checks if substring exists
console.log(greeting.includes("Hello")); // true

// ----- startsWith() / endsWith()
console.log(greeting.startsWith("Hello")); // true
console.log(greeting.endsWith("!")); // true

// ----- slice(start, end)
console.log(greeting.slice(0, 5)); // "Hello"

// ----- substring(start, end) → similar to slice, but can't take negative indexes
console.log(greeting.substring(7, 17)); // "JavaScript"

// ----- substr(start, length) → old method
console.log(greeting.substr(7, 4)); // "Java"

// ----- replace() → replaces first match
console.log(greeting.replace("Hello", "Hi")); // "Hi, JavaScript!"

// ----- replaceAll() → replaces all matches (ES2021+)
console.log("aabbcc".replaceAll("a", "z")); // "zzbbcc"

// ----- trim(), trimStart(), trimEnd()
let messy = "   spaced text   ";
console.log(messy.trim()); // "spaced text"

// ----- split() → splits into array
let words = greeting.split(" ");
console.log(words); // ["Hello,", "JavaScript!"]

// ----- concat() → joins strings
console.log(str1.concat(" ", str2)); // "Hello World"

// ----- repeat(n)
console.log("Hi!".repeat(3)); // "Hi!Hi!Hi!"

// ----- charCodeAt() → returns ASCII code
console.log("A".charCodeAt(0)); // 65

// ----- fromCharCode() → converts ASCII to character
console.log(String.fromCharCode(66)); // "B"

// =======================================================
// 🧩 3️⃣ Template Literals (Backticks ``)
// =======================================================

let name = "Alice";
let age = 22;

let info = `My name is ${name} and I am ${age} years old.`;
console.log(info);

// You can also use multi-line strings
let multiLine = `This is
a multi-line
string.`;
console.log(multiLine);

// =======================================================
// 🧩 4️⃣ String Conversion
// =======================================================
let num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"

// =======================================================
// 🧩 5️⃣ Common INTERVIEW QUESTIONS
// =======================================================

// 🔸 Q1. Reverse a string
let strQ1 = "hello";
let reversed = strQ1.split("").reverse().join("");
console.log("Reversed:", reversed);

// 🔸 Q2. Check if string is palindrome
let strQ2 = "madam";
let isPalindrome = strQ2 === strQ2.split("").reverse().join("");
console.log("Is Palindrome:", isPalindrome);

// 🔸 Q3. Count vowels in a string
let strQ3 = "JavaScript";
let vowels = strQ3.match(/[aeiou]/gi);
console.log("Vowel Count:", vowels ? vowels.length : 0);

// 🔸 Q4. Find the first non-repeating character
let strQ4 = "aabbcde";
for (let ch of strQ4) {
  if (strQ4.indexOf(ch) === strQ4.lastIndexOf(ch)) {
    console.log("First Non-Repeating:", ch);
    break;
  }
}

// 🔸 Q5. Check if two strings are anagrams
let s1 = "listen";
let s2 = "silent";
let isAnagram = s1.split("").sort().join("") === s2.split("").sort().join("");
console.log("Are Anagrams:", isAnagram);

// 🔸 Q6. Count frequency of characters
let strQ6 = "banana";
let freq = {};
for (let ch of strQ6) {
  freq[ch] = (freq[ch] || 0) + 1;
}
console.log("Frequencies:", freq);

// 🔸 Q7. Capitalize first letter of each word
let strQ7 = "hello world from javascript";
let capitalized = strQ7
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log("Capitalized:", capitalized);

// 🔸 Q8. Remove duplicates from a string
let strQ8 = "aabbccdde";
let uniqueChars = [...new Set(strQ8)].join("");
console.log("Unique:", uniqueChars);

// 🔸 Q9. Find longest word in a sentence
let sentence = "JavaScript is an interesting language";
let longest = sentence.split(" ").reduce((a, b) => (a.length > b.length ? a : b));
console.log("Longest Word:", longest);

// 🔸 Q10. Count occurrence of a particular character
let strQ10 = "hello world";
let target = "l";
let count = strQ10.split(target).length - 1;
console.log(`'${target}' occurs ${count} times.`);

// =======================================================
// ✅ SUMMARY
// =======================================================
// 🔹 Common String Methods:
// length, toUpperCase(), toLowerCase(), indexOf(), includes(), slice(), substring(),
// replace(), trim(), split(), concat(), repeat(), startsWith(), endsWith()
//
// 🔹 Common Interview Topics:
// - Reverse string
// - Palindrome check
// - Count vowels
// - Anagram check
// - Frequency count
// - Capitalize words
// - Longest word in sentence
