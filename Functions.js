/* 
===========================================
    📘 JAVASCRIPT FUNCTIONS – COMPLETE GUIDE
===========================================

🧠 What is a Function?
- A function is a reusable block of code that performs a specific task.
- It helps avoid repetition and makes code modular and readable.

Syntax:
    function functionName(parameters) {
        // code to execute
        return value; // optional
    }

*/

//------------------------------------------------
// 🟩 1️⃣ Function Declaration
//------------------------------------------------
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");


//------------------------------------------------
// 🟩 2️⃣ Function Expression
//------------------------------------------------
// A function can be assigned to a variable
const add = function(a, b) {
    return a + b;
};
console.log("Sum:", add(5, 3));


//------------------------------------------------
// 🟩 3️⃣ Arrow Function (ES6)
//------------------------------------------------
const multiply = (x, y) => x * y;
console.log("Product:", multiply(4, 2));

// For single parameter, parentheses are optional:
const square = n => n * n;
console.log("Square:", square(5));


//------------------------------------------------
// 🟩 4️⃣ Default Parameters
//------------------------------------------------
function sayHello(name = "Guest") {
    console.log("Hello, " + name);
}
sayHello();         // uses default
sayHello("Bob");    // overrides default


//------------------------------------------------
// 🟩 5️⃣ Returning Values
//------------------------------------------------
function divide(a, b) {
    if (b === 0) return "Cannot divide by zero!";
    return a / b;
}
console.log(divide(10, 2));


//------------------------------------------------
// 🟩 6️⃣ Function Scope and Hoisting
//------------------------------------------------
/*
- Functions declared with `function` keyword are hoisted (can be used before definition).
- Variables inside a function are local (block-scoped when declared with let/const).
*/
test();
function test() {
    console.log("Function hoisting works!");
}


//------------------------------------------------
// 🟩 7️⃣ Function Inside Object (Method)
//------------------------------------------------
const person = {
    name: "Rahul",
    age: 21,
    greet: function() {
        console.log(`Hi, I am ${this.name}, and I am ${this.age} years old.`);
    }
};
person.greet();


//------------------------------------------------
// 🟩 8️⃣ Function as Argument (Callback Function)
//------------------------------------------------
function processUserInput(callback) {
    const name = "Ravi";
    callback(name);
}

function greetUser(name) {
    console.log("Welcome, " + name);
}
processUserInput(greetUser);  // Passing function as argument


//------------------------------------------------
// 🟩 9️⃣ Function Returning Another Function
//------------------------------------------------
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplier(2);
console.log("Double of 5:", double(5));


//------------------------------------------------
// 🟩 🔟 Immediately Invoked Function Expression (IIFE)
//------------------------------------------------
(function() {
    console.log("IIFE runs automatically when defined!");
})();


//------------------------------------------------
// 🟩 11️⃣ Functions and Arrays
//------------------------------------------------

// Passing array as argument
function printArray(arr) {
    for (let item of arr) {
        console.log(item);
    }
}
const fruits = ["apple", "banana", "cherry"];
printArray(fruits);

// Returning array from function
function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// Higher-order functions with arrays
const marks = [85, 90, 78];
const increased = marks.map(mark => mark + 5);
console.log(increased); // [90, 95, 83]


//------------------------------------------------
// 🟩 12️⃣ Functions and Objects
//------------------------------------------------

// Passing object to function
function printDetails(personObj) {
    console.log(`Name: ${personObj.name}, Age: ${personObj.age}`);
}
const student = { name: "Sonia", age: 19 };
printDetails(student);

// Returning object from function
function createUser(username, email) {
    return {
        username,
        email,
        isActive: true
    };
}
const user1 = createUser("Karan", "karan@example.com");
console.log(user1);

// Destructuring object parameter
function display({ username, email }) {
    console.log(`User: ${username}, Email: ${email}`);
}
display(user1);


//------------------------------------------------
// 🟩 13️⃣ Arrow Function with Objects and Arrays
//------------------------------------------------

// Returning object directly from arrow function
const makePerson = (name, age) => ({ name, age });
console.log(makePerson("Aman", 25));

// Using arrow function with array methods
const nums = [1, 2, 3, 4, 5];
const squares = nums.map(n => n * n);
console.log("Squares:", squares);


//------------------------------------------------
// 🟩 14️⃣ Rest and Spread in Functions
//------------------------------------------------

// Rest Parameter → Collects multiple arguments into an array
function sumAll(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4));

// Spread Operator → Expands an array into individual values
function show(a, b, c) {
    console.log(a, b, c);
}
const arr = [10, 20, 30];
show(...arr);


//------------------------------------------------
// 🟩 15️⃣ Interview-Specific Questions
//------------------------------------------------

/*
1️⃣ Difference between function declaration and function expression?
   - Declaration: hoisted and can be called before definition.
   - Expression: not hoisted, defined as variable.

2️⃣ What is an arrow function? 
   - Shorter syntax introduced in ES6.
   - Does NOT have its own `this`, takes from surrounding scope.

3️⃣ What is a callback function?
   - A function passed as an argument to another function, executed later.

4️⃣ What is the difference between arguments and parameters?
   - Parameters: placeholders in function definition.
   - Arguments: actual values passed during function call.

5️⃣ What is an IIFE (Immediately Invoked Function Expression)?
   - A function that executes as soon as it is defined.

6️⃣ What is the difference between call(), apply(), and bind()?
   - call(): invokes a function with a given `this` and arguments (comma-separated).
   - apply(): similar but arguments are passed as an array.
   - bind(): returns a new function with permanently bound `this`.

7️⃣ What is higher-order function?
   - A function that takes another function as argument or returns a function.

8️⃣ Can functions be treated as objects in JS?
   - Yes, functions are first-class citizens (can be assigned, passed, or returned).

9️⃣ What is recursion?
   - A function calling itself to solve smaller parts of a problem.

10️⃣ Difference between regular function and arrow function in `this` context?
   - Regular function: `this` refers to the calling object.
   - Arrow function: `this` is inherited from surrounding lexical scope.
*/

