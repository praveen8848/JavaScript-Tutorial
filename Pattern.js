/* 
=========================================================
 PATTERN PRINTING (VERY IMPORTANT FOR LOGIC)
=========================================================
*/

// Q11: Print a right triangle
/*
*
**
***
****
*****
*/
console.log("Print a right triangle");
let numRows = 5;
for(let i = 0; i<numRows; i++){
    let line = "";
    for(let j = 0; j<=i; j++){
        line += "*";
    }
    console.log(line);
    
}
console.log();
// Q12: Print inverted triangle
/*
*****
****
***
**
*
*/
console.log("Print inverted triangle");
for (let index = 0; index < numRows; index++) {
    line = "";
    for(let j = numRows; j>index; j--){
        line += "*";
    }
    console.log(line);
    
    
}
console.log();

// Q13: Print pyramid pattern
/*
    *
   ***
  *****
 *******
*********
*/
console.log(" Print pyramid pattern: ");

let base = 13;
let half = Math.floor(base/2);
for(let i = 1; i<=numRows+2; i++){
    line = "";
    let t = half;
    while(t>0){
        line += " ";
        t--;
    }
    for(let j = 1; j<= 2*i - 1; j++){
        line += "*";
    }
    while(t<half){
        line += " ";
        t++;
    }
    half--;
    console.log(line);
    
}
console.log();

// Q14: Reverse a string using loop
console.log("Q14: Reverse a string using loop: ");
let str = "Abhishek";
console.log("Normal String: "+ str);

let reversed = "";
for(let i = str.length-1; i>=0; i--){
    reversed += str[i];
}
console.log("Reversed String: " + reversed);
console.log();

// Q15: Count vowels in a string
let vowels = "aeiouAEIOU";
let s = "aetuwryreeweet4uiopghvb";
let count = 0;
for( let ch of s){
    if(vowels.includes(ch)){
        count++;
    }
}
console.log("Number of Vowels in s: "+ count);

