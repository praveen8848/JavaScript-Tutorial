// =======================================================
// 🔷 ARRAYS IN JAVASCRIPT – Complete Guide for Beginners + Interview Topics
// =======================================================

// An Array is a special object used to store multiple values in a single variable.
let arr = [10, 20, 30, 40, 50];
console.log(arr);

// =======================================================
// 🧩 1️⃣ Creating Arrays
// =======================================================

// Method 1: Literal syntax (recommended)
let fruits = ["apple", "banana", "mango"];

// Method 2: Using new keyword
let numbers = new Array(1, 2, 3, 4);

// Method 3: Empty array + adding elements
let colors = [];
colors[0] = "red";
colors[1] = "green";

console.log(fruits, numbers, colors);

// =======================================================
// 🧩 2️⃣ Basic Properties
// =======================================================
console.log(fruits.length); // number of elements

// =======================================================
// 🧩 3️⃣ Important Array Methods
// =======================================================

// ----- push() → adds element at the end
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "mango", "orange"]

// ----- pop() → removes last element
fruits.pop();
console.log(fruits); // ["apple", "banana", "mango"]

// ----- unshift() → adds element at the beginning
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "apple", "banana", "mango"]

// ----- shift() → removes first element
fruits.shift();
console.log(fruits); // ["apple", "banana", "mango"]

// ----- indexOf() → finds index of an element
console.log(fruits.indexOf("banana")); // 1

// ----- includes() → checks if element exists
console.log(fruits.includes("apple")); // true

// ----- slice(start, end) → returns shallow copy without modifying
let sliced = fruits.slice(0, 2);
console.log(sliced); // ["apple", "banana"]
console.log(fruits); // unchanged

// ----- splice(start, deleteCount, ...items) → add/remove elements
fruits.splice(1, 1, "grape", "pear");
console.log(fruits); // ["apple", "grape", "pear", "mango"]

// ----- concat() → merges arrays
let moreFruits = ["papaya", "melon"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

// ----- join() → joins all elements into a string
console.log(fruits.join(", ")); // "apple, grape, pear, mango"

// ----- reverse() → reverses array in-place
fruits.reverse();
console.log(fruits);

// ----- sort() → sorts alphabetically (as strings)
let nums = [4, 10, 1, 20];
nums.sort();
console.log(nums); // [1,10,20,4] ❌ wrong numeric order (because it's lexicographic)

// ✅ Correct numeric sort:
nums.sort((a, b) => a - b);
console.log(nums); // [1, 4, 10, 20]

// =======================================================
// 🧩 4️⃣ Advanced and Modern Methods (ES6+)
// =======================================================

let numbersArr = [1, 2, 3, 4, 5];

// ----- map() → returns new array after applying a function
let squares = numbersArr.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// ----- filter() → returns array with elements passing condition
let evens = numbersArr.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// ----- reduce() → reduces array to a single value
let sum = numbersArr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// ----- forEach() → executes a function for each element (no return)
numbersArr.forEach(num => console.log(num * 2)); // 2, 4, 6, 8, 10

// ----- find() → returns first element that matches condition
let found = numbersArr.find(num => num > 3);
console.log(found); // 4

// ----- findIndex() → returns index of first match
console.log(numbersArr.findIndex(num => num > 3)); // 3

// ----- some() → checks if any element satisfies condition
console.log(numbersArr.some(num => num > 4)); // true

// ----- every() → checks if all elements satisfy condition
console.log(numbersArr.every(num => num > 0)); // true

// ----- flat() → flattens nested arrays
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

// ----- from() → converts iterable to array
console.log(Array.from("HELLO")); // ["H","E","L","L","O"]

// ----- isArray() → checks if value is array
console.log(Array.isArray(fruits)); // true

// ----- fill(value, start, end)
let filled = new Array(5).fill(0);
console.log(filled); // [0, 0, 0, 0, 0]

// =======================================================
// 🧩 5️⃣ Commonly Asked INTERVIEW QUESTIONS
// =======================================================

// 🔸 Q1. Reverse an array without using reverse()
let arrQ1 = [1, 2, 3, 4];
let reversed = [];
for (let i = arrQ1.length - 1; i >= 0; i--) {
  reversed.push(arrQ1[i]);
}
console.log("Reversed:", reversed);

// 🔸 Q2. Find maximum and minimum in array
let arrQ2 = [10, 5, 20, 8];
console.log("Max:", Math.max(...arrQ2));
console.log("Min:", Math.min(...arrQ2));

// 🔸 Q3. Remove duplicates from an array
let arrQ3 = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arrQ3)];
console.log("Unique:", unique);

// 🔸 Q4. Sum of all elements
let arrQ4 = [5, 10, 15];
let total = arrQ4.reduce((acc, val) => acc + val, 0);
console.log("Sum:", total);

// 🔸 Q5. Flatten nested arrays
let arrQ5 = [1, [2, 3], [4, [5, 6]]];
console.log("Flattened:", arrQ5.flat(Infinity));

// 🔸 Q6. Check if array is palindrome
let arrQ6 = [1, 2, 3, 2, 1];
let isPalindrome = arrQ6.join("") === arrQ6.slice().reverse().join("");
console.log("Is Palindrome:", isPalindrome);

// 🔸 Q7. Find second largest number
let arrQ7 = [10, 5, 20, 8, 15];
let sortedDesc = [...arrQ7].sort((a, b) => b - a);
console.log("Second Largest:", sortedDesc[1]);

// 🔸 Q8. Count frequency of elements
let arrQ8 = ["apple", "banana", "apple", "orange"];
let freq = {};
arrQ8.forEach(item => freq[item] = (freq[item] || 0) + 1);
console.log("Frequencies:", freq);

// 🔸 Q9. Merge and remove duplicates
let arrQ9a = [1, 2, 3];
let arrQ9b = [3, 4, 5];
let mergedUnique = [...new Set([...arrQ9a, ...arrQ9b])];
console.log("Merged Unique:", mergedUnique);

// 🔸 Q10. Rotate an array by k positions
let arrQ10 = [1, 2, 3, 4, 5];
let k = 2;
let rotated = arrQ10.slice(k).concat(arrQ10.slice(0, k));
console.log("Rotated:", rotated);

// =======================================================
// ✅ SUMMARY
// =======================================================
// push / pop / shift / unshift → Add or remove elements
// slice / splice → Copy or modify parts
// map / filter / reduce → Transform, filter, or aggregate
// find / some / every → Search or test elements
// concat / flat / join → Combine or flatten arrays
// Set / spread (...) → Useful for removing duplicates

