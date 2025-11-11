// ===============================
// 🔷 Confusing Type Conversions in JavaScript
// ===============================

// In JavaScript, type conversion can happen in two ways:
// 1️⃣ Explicit Conversion (done manually using functions)
// 2️⃣ Implicit Conversion (also called Type Coercion – done automatically by JS)

// ------------------------------------
// 🧩 Example 1: Number + String
// ------------------------------------
let result1 = 5 + "5"; 
console.log(result1); // "55"
// 🧠 Explanation: 
// The number 5 is converted to a string ("5"), and then concatenation happens.
// So, output is "55" (string), not 10.

// ------------------------------------
// 🧩 Example 2: Number - String
// ------------------------------------
let result2 = 5 - "2";
console.log(result2); // 3
// 🧠 Explanation:
// The "-" operator expects numbers. 
// So, "2" is converted to number (2). Hence, 5 - 2 = 3.

// ------------------------------------
// 🧩 Example 3: String * Number or String / Number
// ------------------------------------
let result3 = "10" * 2;
let result4 = "10" / 2;
console.log(result3, result4); // 20 5
// 🧠 Explanation:
// Both "*" and "/" expect numeric operands, 
// so "10" gets converted to 10 automatically.

// ------------------------------------
// 🧩 Example 4: String + Number vs Number + String
// ------------------------------------
console.log("The result is " + 10 + 20); // "The result is 1020"
console.log(10 + 20 + " is the result"); // "30 is the result"
// 🧠 Explanation:
// JS evaluates from left to right.
// First case: "The result is " + 10 → "The result is 10", then + 20 → "The result is 1020"
// Second case: 10 + 20 → 30, then + " is the result" → "30 is the result"

// ------------------------------------
// 🧩 Example 5: Boolean Conversion
// ------------------------------------
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("false")); // true (because it's a non-empty string)
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean({})); // true (empty object is truthy)

// ------------------------------------
// 🧩 Example 6: Equality vs Strict Equality
// ------------------------------------
console.log(0 == false);  // true  (coerced)
console.log(0 === false); // false (no coercion, type mismatch)
console.log(" " == 0);    // true (empty string converted to 0)
console.log("0" == 0);    // true (string "0" converted to number 0)
console.log(null == undefined);  // true (special rule in JS)
console.log(null === undefined); // false (different types)

// ------------------------------------
// 🧩 Example 7: Adding Booleans
// ------------------------------------
console.log(true + true);   // 2
console.log(true + false);  // 1
console.log(false + false); // 0
// 🧠 Explanation:
// true → 1, false → 0 when used in arithmetic context.

// ------------------------------------
// 🧩 Example 8: null and undefined in Math
// ------------------------------------
console.log(null + 1);      // 1  (null becomes 0)
console.log(undefined + 1); // NaN (undefined becomes NaN)

// ------------------------------------
// 🧩 Example 9: Objects or Arrays to Primitives
// ------------------------------------
console.log([] + []);      // ""  (empty string)
console.log([] + {});      // "[object Object]"
console.log({} + []);      // "[object Object]"
console.log([1,2,3] + [4,5]); // "1,2,34,5"
// 🧠 Explanation:
// Arrays and objects are converted to strings when using "+" with them.

// ------------------------------------
// 🧩 Example 10: NaN (Not-a-Number)
// ------------------------------------
console.log(NaN == NaN); // false
console.log(isNaN(NaN)); // true
// 🧠 Explanation:
// NaN is never equal to anything, even itself.
// Use isNaN() to check if a value is NaN.

