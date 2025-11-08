console.log("Hello, My name is Praveen")

/* 
===================================================================
📘 INTRODUCTION TO JAVASCRIPT
===================================================================

👉 JavaScript is a high-level, interpreted programming language 
   primarily used to make web pages dynamic and interactive.

✅ It can:
   - Manipulate HTML and CSS (change content, color, style, etc.)
   - Handle user input (buttons, forms, etc.)
   - Communicate with servers (fetching data)
   - Build both front-end and back-end applications

JavaScript was originally built to run in web browsers, but now
it can also run outside browsers using Node.js.
*/


/* 
===================================================================
⚙️ HOW JAVASCRIPT RUNS (Browser + Node.js)
===================================================================

1️⃣ In the Browser:
   - Every browser has a built-in JavaScript Engine.
   - Examples:
       🔹 Chrome → V8 Engine
       🔹 Firefox → SpiderMonkey
       🔹 Safari → JavaScriptCore
   - These engines read and execute your JS code line by line.

2️⃣ In Node.js:
   - Node.js is a runtime environment that allows JavaScript to run
     outside of the browser (on servers, terminals, etc.)
   - It uses Chrome’s V8 engine internally.
   - You can run a JS file using the command:
        👉 node filename.js
*/


/* 
===================================================================
🔗 LINKING JAVASCRIPT WITH HTML
===================================================================

There are 2 ways to use JavaScript in an HTML file:

1️⃣ Inline Script (inside HTML)
--------------------------------------------------
<html>
  <body>
    <h1>Hello</h1>
    <script>
      console.log("Hello from inline JS!");
    </script>
  </body>
</html>

2️⃣ External Script (recommended)
--------------------------------------------------
<html>
  <body>
    <h1>Hello</h1>
    <script src="intro_to_js.js"></script>
  </body>
</html>

✅ The <script> tag tells the browser to load and execute JS code.
   The 'src' attribute links an external JavaScript file.
*/


/* 
===================================================================
🧰 CONSOLE AND DEBUGGING BASICS
===================================================================

The console is a built-in debugging tool in browsers and Node.js.
You can open it using:
   - Chrome / Edge: Right-click → Inspect → Console
   - Firefox: Ctrl + Shift + K
   - Node.js: It automatically shows console output in terminal.

The 'console' object provides methods for debugging.
Common ones:
   console.log()     → Print general messages or variable values
   console.warn()    → Show warnings
   console.error()   → Show error messages
   console.table()   → Display arrays/objects in table format
*/


// ------------------------------------------------------------
// 🔍 Example: Using console methods
// ------------------------------------------------------------
console.log("Hello, JavaScript!");
console.warn("This is a warning message!");
console.error("This is an error message!");

// ------------------------------------------------------------
// 💡 Example: Debugging with variables
// ------------------------------------------------------------
let name = "Alice";
let age = 20;
console.log("Name:", name);
console.log("Age:", age);

// ------------------------------------------------------------
// 🧮 Example: Doing simple operations
// ------------------------------------------------------------
let a = 10;
let b = 5;
console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Division:", a / b);

// ------------------------------------------------------------
// 🧾 Example: Displaying arrays and objects
// ------------------------------------------------------------
let fruits = ["apple", "banana", "cherry"];
let student = { name: "Bob", age: 21, course: "CS" };

console.table(fruits);
console.table(student);

/* 
===================================================================
✅ SUMMARY
===================================================================

- JavaScript makes web pages interactive.
- It can run both in the browser and on servers using Node.js.
- We link JS to HTML using the <script> tag.
- The console is your best friend for debugging and testing.
*/
