const accountId = 125622;
let accountName = "Pankaj";
var accountpassword = "Password23456"
accountAddress = "Delhi"
let accountBalance;

console.log(accountId);
console.log(accountName)
console.log(accountpassword)
console.log(accountAddress)

console.table([accountId, accountName, accountpassword, accountAddress, accountBalance])


// Self Learning:---------------------------------------

console.log("Self Learning:---------------------------------------")
console.log();


/* 
===================================================================
📘 VARIABLES & DATA TYPES
===================================================================

Variables store data values. In JavaScript, you can declare variables using:
   🔹 var
   🔹 let
   🔹 const

👉 Difference:
   var   → Function-scoped, can be redeclared and updated
   let   → Block-scoped, can be updated but not redeclared in same scope
   const → Block-scoped, cannot be updated or redeclared (constant value)
*/


// Example:

var Name = "Pankaj"
var city = "Delhi"
let country = "India"
const age = 19;


console.log("City: ", city);
console.log("Country: ", country);
console.log("Name: ", Name);
console.log("Age: ", age);
console.log();


/* 
===================================================================
📘 PRIMITIVE DATA TYPES
===================================================================

Primitive data types are the simplest data values (not objects).

1️⃣ Number     → Numeric values
2️⃣ String     → Text
3️⃣ Boolean    → true or false
4️⃣ null       → Intentional absence of value
5️⃣ undefined  → Declared but no value assigned
6️⃣ Symbol     → Unique and immutable value (used for identifiers)
*/

let Age = 20;              // number
let name = "Alice";        // String
let Pronoun = "She";       // String
let isStudent = true;      // Boolean
let grade = null;          // null
let course = "B.tech"      // String
let marks;                 // undefined
let uniqueId = Symbol("id"); // symbol

console.log("Data Types: ");

console.log(20 ,  typeof age);
console.log("Alice " ,typeof name);
console.log("She ", typeof Pronoun);
console.log(typeof isStudent);
console.log(typeof grade);
console.log(typeof course);
console.log(typeof marks);
console.log(typeof uniqueId);

/* 
===================================================================
📘 TYPE CONVERSION & COERCION
===================================================================

👉 Type Conversion: Manual conversion (by developer)
👉 Type Coercion: Automatic conversion (by JavaScript)

*/

// Manual Conversion
console.log();
console.log("Manual Data Type Conversion.");
console.log();


let n = 12;
let string = String(n);
console.log(n);
console.log(String(n));
console.log(typeof String(n));
console.log(string);
console.log(typeof string);

console.log();

let str = "78";
let number = Number(str);
console.log(str);
console.log(number);
console.log(typeof number);
console.log(typeof str);
let s = "AB";
let nm = Number(s);
console.log("Critical Testing");
console.log(nm);
console.log(typeof nm);





let numStr = "50";
console.log(Number(numStr) + 10);  // String -> Number (50 + 10 = 60)
console.log(String(123));          // Number -> String

// Automatic Coercion
console.log();
console.log("Automatic Conversion: ");

console.log("5" + 2);  // "5" + "2" = "52"  (number → string)
console.log("5" - 2);  // 5 - 2 = 3  (string → number)
console.log(true + 1); // 1 + 1 = 2
console.log(false + 1);// 0 + 1 = 1





