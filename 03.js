/* 
1️⃣ Arithmetic Operators
   +  -  *  /  %  ** (exponentiation)
*/
let a = 10, b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);


/* 
2️⃣ Assignment Operators
   =, +=, -=, *=, /=, %=
*/
let x = 5;
x += 2;  // x = x + 2
console.log("After += :", x);


/* 
3️⃣ Comparison Operators
   >, <, >=, <=, ==, ===, !=, !==
*/
console.log(10 > 5);   // true
console.log(10 == "10");   // true (only checks value)
console.log(10 === "10");  // false (checks value + type)
console.log(10 != "10");   // false
console.log(10 !== "10");  // true


/* 
4️⃣ Logical Operators
   && (AND), || (OR), ! (NOT)
*/
let p = true, q = false;
console.log(p && q);  // false
console.log(p || q);  // true
console.log(!p);      // false


/* 
5️⃣ Ternary Operator
   condition ? value_if_true : value_if_false
*/
let age2 = 18;
let result = (age2 >= 18) ? "Adult" : "Minor";
console.log(result);


/* 
===================================================================
📘 CONTROL FLOW
===================================================================
*/

/* 
1️⃣ if, else, else if
*/
let marksScored = 85;

if (marksScored >= 90) {
  console.log("Grade: A");
} else if (marksScored >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}


/* 
2️⃣ switch Statement
   Used when you have multiple fixed values to check.
*/
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid Day");
}

