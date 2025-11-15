/* 
=====================================================
        📘 JAVASCRIPT: map(), filter(), reduce()
=====================================================

These three functions are called **Higher-Order Array Methods**.
They DO NOT modify the original array (except reduce when used to mutate externally).

They are used in:
- Data transformation
- Searching / filtering UI data
- Aggregation (sum, average, total)
- Real-world apps (React, Node, Backend, DB processing)

=====================================================
 1️⃣ map()
=====================================================

🧠 WHAT IT DOES:
- Creates a **new array**
- Applies a function to each element
- Returns the transformed array

Syntax:
    array.map((value, index, array) => { ... });

Real use:
- Convert values
- Extract specific fields
- Modify objects
*/

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(num => num * num);
console.log("Squares:", squares);  // [1,4,9,16,25]

// Example: Extracting property from objects
const users = [
    { name: "Rahul", age: 21 },
    { name: "Aman", age: 25 },
    { name: "Sara", age: 20 }
];

const names = users.map(user => user.name);
console.log("Names:", names); // ["Rahul", "Aman", "Sara"]


/*
=====================================================
 2️⃣ filter()
=====================================================

🧠 WHAT IT DOES:
- Returns a **new array**
- Keeps only elements that pass the given condition

Syntax:
    array.filter((value, index, array) => condition);

Real use:
- Filter active users
- Filter even numbers
- Search results
*/

const even = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", even); // [2,4]

// Example: Filter adults
const adults = users.filter(user => user.age >= 21);
console.log("Adults:", adults);


/*
=====================================================
 3️⃣ reduce()
=====================================================

🧠 WHAT IT DOES:
- Reduces array → SINGLE VALUE (number, array, object)
- Useful for:
  → total sum  
  → max/min  
  → new object  
  → new array  
  → counting occurrences

Syntax:
    array.reduce((accumulator, currentValue) => { ... }, initialValue);

*/

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 15

// Example: Find maximum
const maxVal = numbers.reduce((max, val) => val > max ? val : max, -Infinity);
console.log("Max:", maxVal);

// Example: Counting occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log("Count:", count);
// { apple: 3, banana: 2, orange: 1 }


// Example: Reduce to build an array
const doubled = numbers.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
}, []);
console.log("Doubled using reduce:", doubled);


/*
=====================================================
 📌 map vs filter vs reduce (SUPER IMPORTANT)
=====================================================

map     → transform each value → returns array
filter  → select values → returns array
reduce  → gather/accumulate → returns single value (or obj)

=====================================================
 REAL-LIFE USE CASES
=====================================================

1️⃣ map → Display list of items on UI (React)
2️⃣ filter → Search/filter products
3️⃣ reduce → Total cart amount
*/

// Example: Shopping cart
const cart = [
    { item: "Book", price: 200 },
    { item: "Pen", price: 20 },
    { item: "Bag", price: 600 }
];

// Total cart value using reduce
const totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log("Total Cart Price:", totalPrice);


/*
=====================================================
 🔥 INTERVIEW QUESTIONS
=====================================================

1️⃣ Difference between map() and forEach()?
→ map returns a new array  
→ forEach does NOT return anything (undefined)

2️⃣ Does map() modify original array?
→ No. It returns a NEW array.

3️⃣ When to use filter()?
→ When you want ONLY values that satisfy a condition.

4️⃣ Why initialValue is important in reduce()?
→ Prevents errors when array is empty  
→ Controls accumulator data type

5️⃣ Can reduce return an array/object?
→ YES. Very common.

6️⃣ What is accumulator in reduce()?
→ The value that stores intermediate results.

7️⃣ Can we chain map → filter → reduce?
→ YES (used in real apps)
*/

// Example: chaining
const final = numbers
    .filter(n => n % 2 === 0) // even
    .map(n => n * 10)         // multiply
    .reduce((acc, n) => acc + n, 0);

console.log("Chained Result:", final);

