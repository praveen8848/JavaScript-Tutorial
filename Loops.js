/* 
===================================================================
📘 LOOPS
===================================================================
*/

/* 
1️⃣ for Loop
   Syntax:
     for(initialization; condition; update) {
         // code
     }
*/
console.log("for loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


/* 
2️⃣ while Loop
   Syntax:
     while(condition) {
         // code
     }
*/
console.log("while loop:");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}


/* 
3️⃣ do...while Loop
   Executes at least once even if condition is false.
*/
console.log("do...while loop:");
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);


/* 
4️⃣ for...of Loop
   Used to iterate through iterable objects like arrays, strings, etc.
*/
let fruits = ["apple", "banana", "mango"];
console.log("for...of loop:");
for (let fruit of fruits) {
  console.log(fruit);
}


/* 
5️⃣ for...in Loop
   Used to iterate over object properties (keys)
*/
let student = { name: "John", age: 22, course: "CSE" };
console.log("for...in loop:");
for (let key in student) {
  console.log(key, ":", student[key]);
}


/* 
===================================================================
📘 break and continue
===================================================================

- break: Stops the loop immediately.
- continue: Skips current iteration and continues with the next.
*/
console.log("Using break:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

console.log("Using continue:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}


/* 
===================================================================
✅ SUMMARY
===================================================================

- var, let, const are used for variable declarations.
- JS has 6 primitive types: Number, String, Boolean, null, undefined, Symbol.
- Type conversion (manual) and coercion (automatic) change data types.
- Operators handle arithmetic, logic, comparison, and assignment.
- == compares value only, === compares both value & type.
- Control flow: if-else, switch for conditions.
- Loops: for, while, do-while, for...of, for...in for repetitions.
- break stops the loop; continue skips one iteration.
*/