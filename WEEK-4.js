/*
Module 5: Advanced Functions & Patterns
Topic 20: IIFE (Immediately Invoked Function Expressions)
Topic 21: Recursion
Topic 22: Pure functions & immutability basics
Topic 23: call, apply, bind
*/

// Topic 20: IIFE (Immediately Invoked Function Expressions)
/*
A function that runs immediately, the instant it's defined — no separate call needed. "IIFE" is pronounced "iffy."

(function() {
  console.log("I run immediately!");
})();
// Output: "I run immediately!" — no separate call, it just runs right away
*/

// a function inside the parenthesis which is called immediately again with ()

// 1. Write a basic IIFE that prints "IIFE executed!" immediately when the script runs.
(function(){
    console.log("IIFE executed!");
})();

// 2. Write an IIFE that takes a parameter username1 and prints "Welcome, {username}!". Call it immediately with your name baked into the invocation
let username = (function(username1){
    return `Welcome, ${username1}`;
})("arshad");
console.log(username);

// 3. Write an IIFE that declares a local variable secretCode1 = 42 inside it, and prints it — then (in a comment) confirm it's NOT accessible outside.
(function(){
    let secretCode1 = 42;
    console.log(secretCode1)
})();
// console.log(secretCode1);
// WEEK-4.js:38 Uncaught ReferenceError: secretCode1 is not defined

// 4. Edge case thinking: Predict, then verify — explain why this specific syntax is required (without the extra parentheses):

/*
function notIIFE1() {
  console.log("trying to self-invoke");
}();
*/

// Uncaught SyntaxError: Unexpected token ')' (at

// 5. Write an IIFE that returns a value (not just prints), stores that returned value in a variable result10, and prints result10 afterward. The IIFE should calculate and return the sum of two hardcoded numbers.
let result10 = (function() {
    let num1 = 10;
    let num2 = 20;

    return num1 + num2;
})();

console.log(result10);

// Topic 21: Recursion - the motherfucking piece of shit.

// this as simple as it gets and here's a thing no one can understand recursion, keep doin it
// printing 10 to 0
function countdown(num){
    if (num <= 0){
        console.log('done');
        return;
    }
    console.log(num);
    countdown(num-1);
}

countdown(10)

// print 0 to 10
function countup(num){
    if (num > 10){
        return;
    }
    console.log(num)
    countup(num+1)
}
countup(0);

// factorial
function factorial1(num){
    if (num <= 1){
        return 1;
    }
    return num*factorial1(num-1);
}

console.log(factorial1(5));

// practice problems
// 1. Write a recursive function countUp1(num, max) that prints numbers from num up to max (base case: stop when num > max). Test with countUp1(1, 5).
function countUp1(num, max = 5){
    if (num > max){
        return;
    }
    console.log(num);
    countUp1(num+1,max=5);
}

countUp1(1,5);

// 2. Write a recursive function sumUpTo1(n) that returns the sum of all numbers from 1 to n (e.g., sumUpTo1(5) = 1+2+3+4+5 = 15). Trace it by hand first (write the trace as a comment), then verify by running it.

function sumUpTo1(n){
    let sum = 0
    if (n === 1){
        return 1;
    }
    return n+sumUpTo1(n-1)
}

console.log(sumUpTo1(10));

// 3. Write a recursive function power1(base, exponent) that returns base raised to exponent (e.g., power1(2, 4) = 16). Base case: exponent === 0 returns 1 (anything to the power 0 is 1).

function power1(base,exponent){
    if (exponent === 0){
        return 1;
    }
    return base * power1(base,exponent-1);
};
console.log(power1(2,5))

// 4. Edge case thinking: Predict the output, then verify — explain what's missing:

/*
function countdownBroken1(num) {
  console.log(num);
  countdownBroken1(num - 1);
}
// countdownBroken1(3);   ← DO NOT actually run this, just reason about it
*/

// there is No base case so there will be an stack overflow

// 5. Logical thinking problem: Write a recursive function sumArray1(arr) that returns the sum of all numbers in an array WITHOUT using a loop or .reduce() — use recursion instead. Hint: the base case is an empty array (arr.length === 0 → return 0), and the recursive case adds the first element (arr[0]) to the sum of the REST of the array (arr.slice(1)). Test with sumArray1([1, 2, 3, 4, 5]) (expected: 15).

function sumArray1(arr){
    let sum = 0
    if (arr.length === 0){
        return 0;
    }
    sum += arr.pop()
    return sum+sumArray1(arr);
}

console.log(sumArray1([1,2,3,4,5]));

// EASY 
// 6. Write a recursive function countdown2(num) that prints numbers counting DOWN from num to 1, then prints "Liftoff!" (base case: num === 0). Test with countdown2(5).
function countdown2(num){
    if (num === 0){
        console.log("liftoff")
        return;
    }
    console.log(num);
    countdown2(num-1);
}

countdown2(10);

// 7. Write a recursive function multiplyBy2(n) that returns n if n <= 1, otherwise multiplies n by the result of calling itself on n - 1 — basically rewrite factorial1 yourself from scratch (without looking back), to prove you can build it independently. Test with multiplyBy2(6) (expected: 720).
function multiplyBy2(n){
    if (n <= 1){
        return n;
    }
    return n * multiplyBy2(n-1);
}
console.log(multiplyBy2(6));

// MEDIUM: 
// 8. Write a recursive function countDigits1(num) that counts how many digits a positive number has (e.g., countDigits1(4587) should return 4). Hint: base case is when num < 10 (single digit, return 1), recursive case removes the last digit using Math.floor(num / 10) and adds 1 for the digit removed.
function countDigits1(num) {
    if (num < 10) {
        return 1;
    }
    return 1 + countDigits1(Math.floor(num / 10));
}
console.log(countDigits1(4567));

// 9. Write a recursive function reverseString1(str) that reverses a string using recursion (no loops, no .reverse()). Hint: base case is an empty string ("" → return ""), recursive case combines the LAST character with the reversed REST of the string (str[str.length - 1] + reverseString1(str.slice(0, -1))). Test with reverseString1("hello") (expected: "olleh").
function reverseString1(str) {
    // Base case
    if (str === "") {
        return "";
    }
    // Recursive case
    return str[str.length - 1] + reverseString1(str.slice(0, -1));
}
console.log(reverseString1("hello"));

// hard
// 10. Write a recursive function fibonacci1(n) that returns the nth number in the Fibonacci sequence (where each number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8, 13, ...). Base cases: fibonacci1(0) returns 0, fibonacci1(1) returns 1. Recursive case: fibonacci1(n) = fibonacci1(n-1) + fibonacci1(n-2). Test with fibonacci1(7) (expected: 13). Before coding it, try tracing fibonacci1(4) by hand as a comment — this one branches into TWO recursive calls per step instead of just one, which is what makes it genuinely harder to trace than everything before it.
function fibonacci1(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci1(n - 1) + fibonacci1(n - 2);
}
console.log(fibonacci1(7));

// Topic 22: Pure functions & immutability basics

// 1. Identify (in a comment) whether each of these is PURE or IMPURE, and briefly say why:

function square9(n) { return n * n; } // pure function
function logSquare1(n) { console.log(n * n); } // impure function, but i have a feeling that using console.log() will make it impure
let counter3 = 0;
function increment1() { counter3++; } // impure function
function getCurrentYear1() { return new Date().getFullYear(); } // impure function

// 2. Write a PURE function doubleArray1(arr) that returns a NEW array with every element doubled, without mutating the original. Test and print both the original and new array to confirm.
function doubleArray1(arr10){
    return arr10.map(a => a*2);
}
let arr10 = [1,2,3,4,5];
let double = doubleArray1(arr10);
console.log(arr10);
console.log(double);

// 3. Rewrite this MUTATING function to be immutable instead:

function removeLastMutate1(arr) {
    let a1 = [...arr]
    a1.pop();
    console.log(arr) // immutable 
    return a1;
}
console.log(removeLastMutate1([1,2,3,4,5]))

// 4. Edge case thinking: Predict the output, then verify — explain what went wrong:

function updateScoreMutate1(scores, index, newScore) {
  scores[index] = newScore;
  return scores;
}

let originalScores1 = [10, 20, 30];
let updatedScores1 = updateScoreMutate1(originalScores1, 1, 999);

console.log(originalScores1); // [10, 999, 30]
console.log(updatedScores1); // [10, 999, 30]
console.log(originalScores1 === updatedScores1); // false

// array and list are mutable.

// 5. Write a PURE function updateNestedPure1(obj, newCity) that takes an object like { name: "Sara", address: { city: "Mumbai" } } and returns a NEW object with the city updated, WITHOUT mutating the original nested object (hint: you'll need to spread at BOTH levels — the outer object AND the nested address object).
function updateNestedPure1(obj,newCity){
    let obj2 = structuredClone(obj);
    obj2.address.city = newCity
    return obj2;
}

let obj = { name: "Sara", address: { city: "Mumbai" } }
console.log(obj)
console.log(updateNestedPure1(obj,"warangal"))

// Topic 23: call, apply, bind

// 1. Create two objects dog1 = { name: "Rex" } and cat1 = { name: "Whiskers" }, and a standalone function makeSound1(sound) that logs "{name} says {sound}". Use .call() to make it work for both objects.
let dog1 = { name: "Rex" } 
let cat1 = { name: "Whiskers" }

function makeSound1(sound){
    console.log(`${this.name} says ${sound}`);
}

makeSound1.call(dog1,'uff');
makeSound1.call(cat1,'meow');

// 2. Using the same makeSound1 function, call it using .apply() instead, passing the sound as part of an array argument.
makeSound1.apply(dog1,['uff']);
makeSound1.apply(cat1,['meow']);

// 3. Create a function showProfile1() that logs this.username. Create an object user8 = { username: "arshad_k" }. Use .bind() to create boundProfile1, then call boundProfile1() twice to confirm it works repeatedly.
function showProfile1(){
    console.log(`${this.username} is a student`);
}
let user8 = { username: "arshad_k" };
boundProfile1 = showProfile1.bind(user8)
boundProfile1();
boundProfile1();

// 4. Edge case thinking: Predict the output, then verify — explain the difference in WHEN each executes:


function sayHello2() {
  console.log(`Hello, ${this.name}`);
}
let obj9 = { name: "Test" };

console.log("Before call");
sayHello2.call(obj9); // Hello, Test
let bound1 = sayHello2.bind(obj9);
console.log("After bind, before calling bound1");
bound1(); // Hello, {Test} -> has been binded to the function.

// 5. Logical thinking problem: Create a function calculateTotal3(taxRate) that returns this.price + (this.price * taxRate). Create an object product3 = { price: 100 }. Use .call() to calculate the total with a 0.18 tax rate, then use .bind() to create a reusable function getProductTotal1 bound to product3, and call it separately with the same tax rate to confirm both approaches give the same result.
function calculateTotal3(taxRate){
    return this.price + (this.price * taxRate);
}

// call
let product3 = { price: 100 };
console.log(calculateTotal3.call(product3,0.18));
// bind
let getProductTotal1 = calculateTotal3.bind(product3,0.18);
console.log(getProductTotal1());