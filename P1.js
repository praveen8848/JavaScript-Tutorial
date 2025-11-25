
let a = 10;
var b = 20;
const c = 30;
console.log("Sum pf three numbers: " , a + b + c);


// Comparison operators example
console.log(5 == "5");   // true  (value check)
console.log(5 === "5");  // false (value + type check)
console.log(10 > 2);     // true
console.log(10 != 10);   // false

// Ternary Operator
let age = 17;
let isAdult = age>=18 ? "Adult" : "minor";
console.log("Ternary Operator");

console.log(isAdult);

// Q1: Print Fibonacci series up to N terms
console.log(" Q1: Print Fibonacci series up to N terms ");
let v1 = 0;
let N = 10;
let v2 = 1;
console.log(0);
console.log(1);
let i = 2;
while(i<N){
    let temp = v2;
    v2  = v1 + v2;
    console.log(v2);
    v1 = temp;
    i++;
}
let v3 = 0;
let v4 = 1;
for(let i = 1; i<=N; i++){
    let t = v4+ v3;
    console.log(t);
    v3 = v4;
    v4 = t;
    
}
console.log();
console.log("Printing Nth fibonacci number by Recursion: ");


function fibo(N){
    if(N == 0){
        return 0;
    }
    if(N == 1){
        return 1;
    }
    return fibo(N-1) + fibo(N-2);

}
console.log(fibo(10));


console.log();



// Q2: Check if a number is Armstrong Number (153 = 1³+5³+3³)
let number = 370;
console.log("Check if a number is Armstrong Number (153 = 1³+5³+3³)");
let t2 = number;
let sum = 0;
while(t2 != 0){
    let r = t2%10;
    r =  r*r*r;
    sum += r;
    t2 = Math.floor(t2/10);
}
console.log("Is "+number+ " Armstrong Number: ");
console.log(number == sum);

console.log();
// Q3: Print prime numbers between 1 to 100
console.log("Print prime numbers between 1 to 100");
let flag = true;
for(let i = 2; i<=100; i++){
    for(let j = 2; j*j <= i; j++){
        if(i%j == 0){
            flag = false;
        }
    }
    if(flag){
        console.log(i);
        
    }
    flag = true;
}

console.log();


// Q4: Find GCD of two numbers using loop
console.log("// Q4: Find GCD of two numbers using loop");

function gcd(x , y){
    while(x%y != 0){
        let tt = y;
        y = x%y;
        x = tt;
    }
    return y;
}
let p = 48;
let q = 18;
let Gcd = gcd(p, q);
console.log("GCD of "+p+ " and " + q + " is " + Gcd );

console.log();

// Q6: Find SECOND largest number in array (no sorting)
console.log("Q6: Find SECOND largest number in array (no sorting)");
let arr  = [10, 20, 30, 40];
let first = -Infinity;
let second = -Infinity;
for(let i = 0; i<arr.length; i++){
    let num = arr[i];
    if(num>first){
        second = first;
        first = num;
    }
    if(num> second && num< first){
        second = num;
    }
}
console.log(arr);
console.log("Largest "+first );

console.log("Second Largest:  "+second);




// Q7: Reverse an array manually (without reverse())
console.log();
console.log("Q7: Reverse an array manually (without reverse())");
let s = 0;
console.log("Nomal Array: "+ arr);

let e = arr.length -1;
while(s<e){
    let t = arr[e];
    arr[e] = arr[s];
    arr[s] = t;
    s++;
    e--;
}
console.log("Reversed array: " +arr);

console.log();
// Q8: Remove duplicates from array (using loops only)
console.log("Q8: Remove duplicates from array (using loops only)");

let arr1 = [1,2,2,3,1,4,7,5,6,7,6,4,9,9,1,3,10,11,10,8,2];
let unique = [];
for(let val of arr1){
    let flag = true;
    for(let u of unique){
        if(u == val){
            flag = false;
            break;
        }
    }
    if(flag){
        unique.push(val);
    }
}
console.log("Duplcate Array " + arr1);
console.log("This Method is not efficient for large length of Array.");

console.log("After removing duplicate elements: "+unique);







