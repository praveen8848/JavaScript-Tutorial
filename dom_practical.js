/* ************************************************************
   DOM MODIFYING + SELECTING METHODS — COMPLETE PRACTICE FILE
***************************************************************

📌 ADDED: document.getElementById, getElementsByClassName, getElementsByTagName,
         querySelector, querySelectorAll

************************************************************************************************************************
   DOM MODIFYING METHODS — COMPLETE PRACTICE FILE
   (Use this file in browser console along with dom_practice.html)
***************************************************************

This file contains ALL important DOM modification methods:
✔ Changing content
✔ Changing styles
✔ Attributes
✔ Classes
✔ Creating / Removing elements
✔ Insert methods
✔ Clone methods
✔ Replace methods
✔ Event-based modifications

---------------------------------------------------------------
0️⃣ SELECTING ELEMENTS (VERY IMPORTANT)
---------------------------------------------------------------

// 1. By ID (returns single element)
// const title = document.getElementById("main-title");

// 2. By ClassName (returns HTMLCollection)
// const items = document.getElementsByClassName("item");

// 3. By TagName (returns HTMLCollection)
// const paras = document.getElementsByTagName("p");

// 4. querySelector (returns FIRST match)
// const firstItem = document.querySelector(".item");

// 5. querySelectorAll (returns NodeList)
// const allItems = document.querySelectorAll(".item");


---------------------------------------------------------------
1️⃣ CHANGE CONTENT
---------------------------------------------------------------*/

// innerHTML → sets/gets HTML
// element.innerHTML = "<b>Bold Text</b>";

// textContent → sets/gets plain text
// element.textContent = "Hello World";

// innerText → similar to textContent but respects CSS
// element.innerText = "Updated Text";


/* -------------------------------------------------------------
2️⃣ CHANGE STYLES
--------------------------------------------------------------- */

// element.style.property = value
// element.style.color = "red";
// element.style.backgroundColor = "black";
// element.style.fontSize = "24px";


/* -------------------------------------------------------------
3️⃣ ATTRIBUTES
--------------------------------------------------------------- */

// Get attribute
// element.getAttribute("href");

// Set attribute
// element.setAttribute("href", "https://google.com");

// Remove attribute
// element.removeAttribute("id");

// Check attribute
// element.hasAttribute("class");


/* -------------------------------------------------------------
4️⃣ CLASS METHODS (classList)
--------------------------------------------------------------- */

// Add a class
// element.classList.add("active");

// Remove class
// element.classList.remove("active");

// Toggle class
// element.classList.toggle("active");

// Check if class exists
// element.classList.contains("active");


/* -------------------------------------------------------------
5️⃣ CREATING ELEMENTS
--------------------------------------------------------------- */

// const div = document.createElement("div");
// div.textContent = "I was created dynamically";

// Append to body
// document.body.appendChild(div);

// Append before specific element
// parent.insertBefore(newElement, referenceElement);


/* -------------------------------------------------------------
6️⃣ REMOVING ELEMENTS
--------------------------------------------------------------- */

// element.remove();

// OR (older method): parent.removeChild(element);


/* -------------------------------------------------------------
7️⃣ INSERT METHODS (MODERN)
--------------------------------------------------------------- */

// element.before(newElement);
// element.after(newElement);
// element.prepend(newElement);
// element.append(newElement);


/* -------------------------------------------------------------
8️⃣ REPLACE METHODS
--------------------------------------------------------------- */

// element.replaceWith(newElement);


/* -------------------------------------------------------------
9️⃣ CLONE ELEMENTS
--------------------------------------------------------------- */

// const clone = element.cloneNode(true); // deep clone
// document.body.appendChild(clone);


/* -------------------------------------------------------------
🔟 EVENT-BASED DOM MODIFICATION
--------------------------------------------------------------- */

// const btn = document.getElementById("btn");
// const title = document.getElementById("main-title");

// btn.addEventListener("click", () => {
//     title.textContent = "Button Clicked: DOM Updated!";
//     title.style.color = "purple";
// });


/* -------------------------------------------------------------
📌 INTERVIEW QUESTIONS (IMPORTANT)
---------------------------------------------------------------

❓ 1. Difference between innerHTML, textContent, innerText?
✔ innerHTML → parses HTML
✔ textContent → plain text only
✔ innerText → respects CSS (hidden text not shown)

❓ 2. Difference between append vs appendChild?
✔ append() → accepts strings + multiple nodes
✔ appendChild() → accepts only ONE Node

❓ 3. What is cloneNode()? Types?
✔ cloneNode(false) → shallow clone
✔ cloneNode(true) → deep clone (children included)

❓ 4. What does classList.toggle() do?
✔ Adds class if missing, removes if present

❓ 5. replaceWith() vs innerHTML?
✔ replaceWith() replaces element itself
✔ innerHTML replaces ONLY inside content

*************************************************************** */
