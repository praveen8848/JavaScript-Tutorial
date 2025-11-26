/* 
============================================================
                DAY–2 PRACTICE SET (JS)
       Objects • Functions • Scope • Map/Filter/Reduce
       Closure • Recursion • Interviews • Tricky Qs
============================================================
*/

// ---------------------------------------------------------
// Q1. Output? (Shadowing + Temporal Dead Zone)
// ---------------------------------------------------------

/*
var a = 10;

function test() {
    console.log(a);  // ❌ ReferenceError
    let a = 20;
}

test();

Explanation:
- `let a` inside the function creates a separate variable.
- It enters Temporal Dead Zone (TDZ) until initialized.
- So printing `a` before its initialization → ReferenceError.
*/


// ---------------------------------------------------------
// Q2. Convert array of students to percentage (map)
// ---------------------------------------------------------


const students = [
    { name: "A", marks: 400 },
    { name: "B", marks: 350 },
    { name: "C", marks: 480 }
];
console.log(typeof students);

const percentageResult = students.map(s => ({
    name: s.name,
    percentage: (s.marks / 500) * 100
}));

console.log("Q2:", percentageResult);