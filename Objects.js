/* 
===========================================
   📘 JAVASCRIPT OBJECTS – COMPLETE GUIDE
===========================================

🧠 What is an Object?
- In JavaScript, an object is a collection of key-value pairs.
- Keys are called *properties* or *methods* (if value is a function).
- Everything in JS (except primitive types) is an object.

Example: 
    const person = {
        name: "John",
        age: 25
    };
*/

//------------------------------------------------
// 🟩 1️⃣ Object Creation Methods
//------------------------------------------------

// ✅ Method 1: Object Literal (most common)
const person1 = {
    name: "Alice",
    age: 22,
    isStudent: true
};
console.log(person1);

// ✅ Method 2: Using `new Object()`
const person2 = new Object();
person2.name = "Bob";
person2.age = 30;
console.log(person2);

// ✅ Method 3: Using a Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const p1 = new Person("Charlie", 27);
console.log(p1);

// ✅ Method 4: Using Class Syntax (ES6+)
class Student {
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
    }
}
const s1 = new Student("David", "CSE");
console.log(s1);

// ✅ Method 5: Using `Object.create()`
const prototypePerson = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const person3 = Object.create(prototypePerson);
person3.name = "Emma";
person3.greet();


//------------------------------------------------
// 🟩 2️⃣ Accessing and Modifying Object Properties
//------------------------------------------------

const user = {
    name: "Ravi",
    age: 20,
    country: "India"
};

// Access values:
console.log(user.name);       // Dot notation
console.log(user["country"]); // Bracket notation

// Modify values:
user.age = 21;
console.log(user.age); // 21

// Add new property:
user.email = "ravi@example.com";
console.log(user);

// Delete property:
delete user.country;
console.log(user);


//------------------------------------------------
// 🟩 3️⃣ Object Methods (Functions inside objects)
//------------------------------------------------

const car = {
    brand: "Tesla",
    model: "Model X",
    start: function() {
        console.log(`${this.brand} ${this.model} is starting...`);
    }
};
car.start();


//------------------------------------------------
// 🟩 4️⃣ Nested Objects
//------------------------------------------------

const student = {
    name: "Rohit",
    marks: {
        math: 95,
        science: 90
    }
};
console.log(student.marks.math); // Access nested property


//------------------------------------------------
// 🟩 5️⃣ Looping through Objects
//------------------------------------------------

// Using `for...in` loop
const person = { name: "Amit", age: 24, city: "Delhi" };
for (let key in person) {
    console.log(key + " → " + person[key]);
}

// Using Object methods
console.log(Object.keys(person));   // Returns all keys as array
console.log(Object.values(person)); // Returns all values as array
console.log(Object.entries(person)); // Returns [key, value] pairs


//------------------------------------------------
// 🟩 6️⃣ Object Destructuring (ES6 feature)
//------------------------------------------------

const employee = { id: 1, empName: "Karan", salary: 50000 };
const { empName, salary } = employee;
console.log(empName); // Karan
console.log(salary);  // 50000


//------------------------------------------------
// 🟩 7️⃣ Object Spread & Rest Operator
//------------------------------------------------

// Spread (...) – Copy or merge objects
const obj1 = { a: 10, b: 20 };
const obj2 = { b: 30, c: 40 };
const merged = { ...obj1, ...obj2 }; // b is overwritten
console.log(merged); // { a: 10, b: 30, c: 40 }

// Rest (...) – Extract remaining properties
const { a, ...rest } = merged;
console.log(rest); // { b: 30, c: 40 }


//------------------------------------------------
// 🟩 8️⃣ Object.freeze() and Object.seal()
//------------------------------------------------

// freeze() → prevents adding, deleting or modifying properties
const objFreeze = { lang: "JS" };
Object.freeze(objFreeze);
objFreeze.lang = "Python"; // No effect
console.log(objFreeze);

// seal() → prevents adding/deleting but allows modifying existing properties
const objSeal = { lang: "Java" };
Object.seal(objSeal);
objSeal.lang = "C++"; // Allowed
objSeal.newProp = "Oops"; // Not allowed
console.log(objSeal);


//------------------------------------------------
// 🟩 9️⃣ Shallow vs Deep Copy (Important Interview Topic)
//------------------------------------------------

// Shallow Copy using Spread
const user1 = { name: "Arya", address: { city: "Delhi" } };
const copy1 = { ...user1 };
copy1.address.city = "Mumbai"; // changes original!
console.log(user1.address.city); // "Mumbai" – both refer to same object

// Deep Copy (solves above problem)
const deepCopy = JSON.parse(JSON.stringify(user1));
deepCopy.address.city = "Pune";
console.log(user1.address.city); // "Mumbai"
console.log(deepCopy.address.city); // "Pune"



//------------------------------------------------
// 🟩 🔥 INTERVIEW QUESTIONS
//------------------------------------------------

/*
1️⃣ What is the difference between == and === in JS?
   - `==` checks only value (performs type conversion)
   - `===` checks value + type (strict equality)

2️⃣ How are objects different from arrays?
   - Objects store data as key-value pairs (unordered)
   - Arrays store data as ordered lists (index-based)

3️⃣ How do you clone an object?
   - Shallow: {...obj} or Object.assign({}, obj)
   - Deep: JSON.parse(JSON.stringify(obj))

4️⃣ What is `this` keyword in objects?
   - Refers to the current object calling the method.

5️⃣ What is the difference between Object.freeze() and Object.seal()?
   - freeze(): No add, no delete, no modify
   - seal(): No add/delete, but can modify

6️⃣ How can you check if a property exists in an object?
   - 'key' in obj     → returns true/false
   - obj.hasOwnProperty('key')

7️⃣ Difference between null and undefined?
   - null → intentional absence of value
   - undefined → variable declared but not assigned

8️⃣ How to iterate through an object?
   - Using `for...in` or `Object.keys()`, `Object.values()`, `Object.entries()`

9️⃣ Why is deep copy needed?
   - To avoid changing nested objects in original data accidentally.

10️⃣ What are prototype and inheritance in JS?
   - Every object has a hidden [[Prototype]] linking it to another object.
   - Used for property/method inheritance.
*/

