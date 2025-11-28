/**************************************************************
    🟦 DOM (Document Object Model) — Complete Beginner to Intermediate
***************************************************************

📌 What is DOM?
---------------------------------------------------------------
DOM stands for **Document Object Model**.
It is a **browser-provided** programming interface that represents
a webpage (HTML) as a **TREE of objects**.

Using JavaScript, you can:
✔ Access HTML elements  
✔ Change content and styling  
✔ Add or remove elements  
✔ Handle events  
✔ Dynamically update the page without reloading  

---------------------------------------------------------------
📌 DOM Tree Structure
---------------------------------------------------------------
Every webpage = a tree-like hierarchy:

Example HTML:
<html>
  <body>
    <h1>Hello</h1>
  </body>
</html>

DOM Representation:
document
 └─ html  
     ├─ head
     └─ body
         └─ h1
             └─ "Hello"

---------------------------------------------------------------
📌 Node Types in DOM
---------------------------------------------------------------
1️⃣ **Document Node**
   - The entry point of DOM
   - In JS we access it with: `document`

2️⃣ **Element Node**
   - HTML tags: <p>, <div>, <h1>

3️⃣ **Text Node**
   - The text inside elements

4️⃣ **Attribute Node**
   - Attributes of elements: id, class, src, href

---------------------------------------------------------------
📌 Why DOM is Important?
---------------------------------------------------------------
Because DOM allows dynamic behavior:
✔ Change text  
✔ Change style  
✔ Create new HTML elements  
✔ Remove elements  
✔ Handle user actions (click, input, keypress)

---------------------------------------------------------------
📌 Selecting Elements in DOM
---------------------------------------------------------------
We have 5 important selectors:

1. document.getElementById("id")
2. document.getElementsByClassName("class")
3. document.getElementsByTagName("tag")
4. document.querySelector("selector")
5. document.querySelectorAll("selector")

---------------------------------------------------------------
📌 1. getElementById()
---------------------------------------------------------------
Used when ID is unique.

Example:
*/
let title = document.getElementById("main-title");
// console.log(title);

/*
---------------------------------------------------------------
📌 2. getElementsByClassName()
---------------------------------------------------------------
Returns HTMLCollection (NOT Array)

Example:
*/
let items = document.getElementsByClassName("item");

/*
---------------------------------------------------------------
📌 3. getElementsByTagName()
---------------------------------------------------------------
Example:
*/
let paragraphs = document.getElementsByTagName("p");

/*
---------------------------------------------------------------
📌 4. querySelector()
---------------------------------------------------------------
Selects FIRST match (CSS selector)

Examples:
document.querySelector("#id")
document.querySelector(".class")
document.querySelector("div")
document.querySelector("ul li a")
*/
let firstItem = document.querySelector(".item");

/*
---------------------------------------------------------------
📌 5. querySelectorAll()
---------------------------------------------------------------
Selects ALL matches (NodeList)
*/
let allItems = document.querySelectorAll(".item");

/**************************************************************
    🔵 Changing Content in DOM
***************************************************************/

 /*
innerHTML → returns/sets HTML inside element
textContent → returns/sets plain text
innerText → similar to textContent but respects CSS
*/

let heading = document.querySelector("h1");

// heading.innerHTML = "<i>Hello</i>";   // sets HTML
// heading.textContent = "Hello World";  // sets plain text

/**************************************************************
    🔵 Changing Style in DOM
***************************************************************/

let box = document.querySelector(".box");
// box.style.backgroundColor = "blue";
// box.style.color = "white";

/**************************************************************
    🔵 Attributes in DOM
***************************************************************/

let link = document.querySelector("a");

// Access:
let hrefValue = link.getAttribute("href");

// Set:
link.setAttribute("href", "https://google.com");

/**************************************************************
    🔵 Creating Elements in DOM
***************************************************************/

let newDiv = document.createElement("div");
newDiv.textContent = "I am a new DIV";
document.body.appendChild(newDiv);

/**************************************************************
    🔵 Removing Elements in DOM
***************************************************************/

// newDiv.remove();

/**************************************************************
    🔵 Adding / Removing Classes
***************************************************************/

let card = document.querySelector(".card");

// Add class
// card.classList.add("active");

// Remove class
// card.classList.remove("active");

// Toggle class
// card.classList.toggle("active");

/**************************************************************
    🟦 DOM EVENTS (Basic intro)
***************************************************************

Events → Actions performed by user/browser

Examples:
✔ click  
✔ mouseover  
✔ keydown  
✔ submit  
✔ input  
✔ load  

---------------------------------------------------------------
📌 Add Event Listener
---------------------------------------------------------------
element.addEventListener("event", function)
*/

let btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//     console.log("Button Clicked!");
// });

/**************************************************************
    🟦 INTERVIEW QUESTIONS (Most Asked)
***************************************************************

❓ 1. What is DOM?
✔ DOM is a browser-provided object model that represents HTML as a tree,
  allowing JavaScript to interact with and modify the page dynamically.

❓ 2. Difference between NodeList and HTMLCollection?
✔ NodeList supports forEach(), HTMLCollection does not.
✔ HTMLCollection is live (auto-updates), NodeList is static.

❓ 3. Difference between innerHTML vs textContent?
✔ innerHTML parses HTML  
✔ textContent shows plain text  

❓ 4. What is event bubbling?
✔ Event starts from the deepest element and moves UP to parent elements.

❓ 5. What is event capturing?
✔ Opposite of bubbling — event flows from parent → child.

❓ 6. What is the difference between querySelector and querySelectorAll?
✔ querySelector → returns FIRST match  
✔ querySelectorAll → returns ALL matches

***************************************************************/
/*
Why DOM Exists? (Purpose)
Practical Use of DOM (Real World Examples)
------------------------------------------
1) Showing popups when clicking a button
2) Form validation messages appearing instantly
3) Dark/Light theme switching
4) Live search suggestions (Google)
5) Animations, sliders, carousels
6) Notifications updating without reload (Facebook)
7) Shopping cart updates dynamically
8) Chat messages appearing in real-time (WhatsApp Web)




Example Code 1: Changing Text Content
-------------------------------------
*/


// Assume index.html has: <h1 id="title">Hello</h1>
//const title = document.getElementById("title");
title.textContent = "Updated using DOM!";


/*
Example Code 2: Changing Styles
-------------------------------
*/


// title.style.color = "blue";
// title.style.fontSize = "32px";


/*
Example Code 3: Handling Events
-------------------------------
*/


// Assume HTML: <button id="btn">Click Me</button>
//const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
title.textContent = "Button Clicked!";
});


/*
Example Code 4: Adding Elements Dynamically
-------------------------------------------
*/


const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically using DOM.";
document.body.appendChild(newPara);




/*
=========================================
Practical Summary (Interview Ready)
=========================================
DOM is used to:
✔ Modify HTML content
✔ Change CSS styles dynamically
✔ Handle events like click, keypress
✔ Create interactive UI
✔ Insert or remove elements
✔ Build dynamic modern webpages


Interview Answer:
"DOM is a programming interface that lets JavaScript interact with the webpage.
It allows manipulation of HTML, CSS, and structure in real-time, enabling dynamic
and interactive websites without reloading the page."


=========================================
*/