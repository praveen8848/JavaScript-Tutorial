/* 
===========================================
   📘 JAVASCRIPT SCOPE – COMPLETE GUIDE
===========================================

🧠 What is Scope?
- Scope determines where variables, functions, and objects are accessible in your code.
- In JavaScript, scope controls the *visibility* and *lifetime* of variables.

There are mainly 3 types of scope:
    1️⃣ Global Scope
    2️⃣ Function / Local Scope
    3️⃣ Block Scope (introduced in ES6)
    
Also, we have:
    🔹 Lexical Scope (Nested scope)
    🔹 Scope Chain
*/

//------------------------------------------------
// 🟩 1️⃣ Global Scope
//------------------------------------------------

/*
- Variables declared outside any function or block are in the *global scope*.
- Accessible anywhere in the program.
*/

var globalVar = "I am global";

function printGlobal() {
    console.log(globalVar); // Accessible inside function
}
printGlobal();

console.log(globalVar); // Accessible outside function too


//------------------------------------------------
// 🟩 2️⃣ Function (Local) Scope
//------------------------------------------------

/*
- Variables declared inside a function are local to that function.
- They cannot be accessed outside.
*/

function localExample() {
    let localVar = "I am inside function";
    console.log(localVar); // Works
}
// console.log(localVar); ❌ Error – not accessible here
localExample();


//------------------------------------------------
// 🟩 3️⃣ Block Scope (ES6 - let & const)
//------------------------------------------------

/*
- Block scope means variables exist only inside { } braces.
- `let` and `const` have block scope, but `var` does NOT.
*/

{
    var a = 10;   // global (not block-scoped)
    let b = 20;   // block-scoped
    const c = 30; // block-scoped
    console.log("Inside block:", a, b, c);
}

console.log("Outside block (var):", a);
// console.log(b); // ❌ Error
// console.log(c); // ❌ Error


//------------------------------------------------
// 🟩 4️⃣ Lexical Scope (Nested Functions)
//------------------------------------------------

/*
- Lexical scope means an inner function can access variables defined in its outer function.
*/

function outer() {
    let outerVar = "I am from outer function";

    function inner() {
        console.log(outerVar); // Accessible (lexical scope)
    }
    inner();
}
outer();


//------------------------------------------------
// 🟩 5️⃣ Scope Chain
//------------------------------------------------

/*
- When JavaScript cannot find a variable in the current scope,
  it looks upward in the scope chain until it finds it or reaches global scope.
*/

let x = "Global";

function first() {
    let y = "Local to first()";

    function second() {
        let z = "Local to second()";
        console.log(x); // Found in global scope
        console.log(y); // Found in parent scope
        console.log(z); // Found in current scope
    }

    second();
}
first();


//------------------------------------------------
// 🟩 6️⃣ Variable Shadowing
//------------------------------------------------

/*
- When a local variable has the same name as a global one,
  the local one shadows (overrides) it within its scope.
*/

let shadow = "Global Value";

function shadowTest() {
    let shadow = "Local Value";
    console.log("Inside function:", shadow);
}
shadowTest();
console.log("Outside function:", shadow);


//------------------------------------------------
// 🟩 7️⃣ Illegal Shadowing
//------------------------------------------------

/*
- You can shadow `var` with `let` or `const`, but not vice versa.
*/

var m = 100;
{
    let m = 200; // ✅ allowed
    console.log("Inside block:", m);
}

let n = 10;
// {
//     var n = 20; // ❌ Error: Illegal shadowing
// }


//------------------------------------------------
// 🟩 8️⃣ Hoisting and Scope
//------------------------------------------------

/*
- Variables declared with `var` are hoisted (moved to top) and initialized with `undefined`.
- Variables with `let` and `const` are hoisted but not initialized → Temporal Dead Zone (TDZ).
*/

console.log(a1); // undefined (due to hoisting)
var a1 = 5;

// console.log(a2); // ❌ ReferenceError (TDZ)
let a2 = 10;


//------------------------------------------------
// 🟩 9️⃣ Function Scope vs Block Scope Example
//------------------------------------------------

function testScope() {
    if (true) {
        var funScoped = "var inside function";
        let blockScoped = "let inside block";
        console.log(blockScoped); // Works here
    }
    console.log(funScoped); // Works (var is function-scoped)
    // console.log(blockScoped); // ❌ Error
}
testScope();


//------------------------------------------------
// 🟩 🔟 Interview-Specific Questions
//------------------------------------------------

/*
1️⃣ What is Scope in JavaScript?
   - Scope defines where variables and functions are accessible.

2️⃣ Difference between var, let, and const in terms of scope?
   - var: function-scoped
   - let, const: block-scoped

3️⃣ What is lexical scope?
   - Inner functions can access variables of their outer functions.

4️⃣ What is scope chain?
   - The chain of scopes JS follows to find a variable (from current → parent → global).

5️⃣ What is variable shadowing?
   - When a variable in inner scope has same name as one in outer scope.

6️⃣ What is illegal shadowing?
   - Trying to declare a `var` in a block when a `let/const` of the same name exists in the outer scope.

7️⃣ What is hoisting in terms of scope?
   - JS moves declarations (not initializations) to the top of scope during compilation.

8️⃣ What is Temporal Dead Zone (TDZ)?
   - Time between variable hoisting and initialization (for let/const) where access causes an error.

9️⃣ Can functions access variables from outer scope?
   - Yes, because of lexical scoping.

10️⃣ Why is understanding scope important?
   - Prevents naming conflicts, bugs, and improves code predictability.
*/

