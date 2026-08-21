// Topic 8 — Part 1: Basics, Parameters, Return

/*
Module 3: Functions
Topic 8: Function basics (declarations, expressions, parameters, return)
Topic 9: Arrow functions & this differences
Topic 10: Default parameters, rest parameters, spread operator
Topic 11: Scope (global, function, block) & hoisting
Topic 12: Closures
Topic 13: Higher-order functions & callbacks
*/

// 1. Write a function introduceYourself1(name, hobby) that takes two parameters and returns the string "My name is {name} and I enjoy {hobby}". Call it with your own name/hobby and print the result.
function introduceYourself1(name, hobby){
    console.log(`My name is ${name} and I enjoy ${hobby}`)
}
introduceYourself1('arshad','fiction writing')

// 2. Write a function multiplyTwo1(a, b) that returns the product of two numbers (do NOT use console.log inside the function). Then, outside the function, store the result in a variable and print it.
let multiplyTwo1 = function(a,b){
    return a*b;
};
multiplication = multiplyTwo1(3,7)
console.log(multiplication);

// 3. Write a function printSquare1(num) that uses console.log INSIDE the function to print the square of a number (do NOT use return). Then try storing its result in a variable and print that variable — observe and explain what you get and why.
function printSquare1(num){
    console.log(num**2);
}
let square = printSquare1(5);
console.log(square);

// when we use return inside the function we have to use console.log to print otherwise just writing the function with argument is enough. 

// 4. Edge case thinking: Predict the output, then verify:


function addThree2(a, b, c) {
  return a + b + c;
}
console.log(addThree2(5, 10));

// they are missing an argument so its "NaN"
console.log(addThree2(5, 10,10)); // this works
console.log(addThree2(5, 10,10,5)); // there is an extra argument and it doesn't give any errors

// 5. Logical thinking problem: Write a function isTeenager1(age) that returns true if the age is between 13 and 19 (inclusive), otherwise false — using a single comparison expression with &&, no if statement needed. Test it with a few different ages (a young child, a teenager, an adult).
function isTeenager1(age){
    let status = age > 13 && age < 19 ? true:false;
    console.log(status);
}

isTeenager1(20);

// PART - 2

// 6. Convert this declaration into a function expression stored in calculateTax1, keeping the same logic:

calculateTax1 = function(price) {
  return price * 0.18;
};

console.log(calculateTax1(59));

// 7. Write a function getStatus1(score) that returns "Pass" if score >= 40, else "Fail" — using if/return (not ternary this time, to practice the exit-on-return behavior).
function getStatus1(score){
    if (score >= 40 && score < 100){
        return "Pass";
    }
    else if (score > 100 || score < 0) {
        return "undefined";
    }
    else{
        return "Fail";
    };
};

console.log(getStatus1(105));
console.log(getStatus1(-5));
console.log(getStatus1(50));

// 8. Write a function validateAge1(age) with THREE return paths: return "Invalid" if age is negative, "Minor" if age < 18, "Adult" otherwise. Test with -5, 10, 25.
function validateAge1(age){
    if (age >= 18) {
        return "Adult";
    }
    else if (age >= 1 && age < 18){
        return "minor"
    }
    else{
        return "Invaild";
    }
}

console.log(validateAge1(-5));
console.log(validateAge1(10));
console.log(validateAge1(25));

// 9. Edge case thinking: Predict output, then verify:

function testFlow1(x) {
  if (x > 10) {
    return "big";
  }
  console.log("checking further...");
  if (x > 5) {
    return "medium";
  }
  return "small";
}
console.log(testFlow1(15)); // big
console.log(testFlow1(7));  // checking further, medium
console.log(testFlow1(2));  // small

// 10. Write a function noReturnTest1() that declares a variable but has no return. Call it, store result in a variable, print that variable.
function noReturnTest1(){
    let x;
}
let noresult = noReturnTest1();
console.log(noresult);

// undefined

// Topic 9: Arrow Functions & this (Re-taught)

// 1. Convert this to full arrow syntax with {}/return kept (Step 1 style — don't shorten further yet)
/*
const cube4 = function(num) {
  return num ** 3;
};
*/
// arrow version
let cube4 = (num) =>{
    return num**3;
};
console.log(cube4(2))

// 2. Now convert your Step 1 answer above into the shortest possible implicit-return form.
let cube5 = num => num**3;
console.log(cube5(3))

// 3. Write an arrow function isEven2(num) using implicit return (single expression, no {}) that returns true/false based on evenness.

let isEven2 = num => num%2 === 0 ? true:false;
console.log(isEven2(23))

// 4. Edge case thinking: Convert this to an arrow function — decide whether it can use implicit return or needs {}/return, and explain briefly why:

/*
function calculateBonus1(salary) {
  let bonus = salary * 0.1;
  return salary + bonus;
}
*/

// it needs {} and return beacause we are using inner variable.

// 5. Logical thinking problem: Predict the output, then verify — explain briefly using the this rule above:

/*
let counter2 = {
  count: 0,
  incrementRegular: function() {
    this.count++;
    console.log(this.count);
  },
  incrementArrow: () => {
    this.count++;
    console.log(this.count);
  }
};

counter2.incrementRegular();
counter2.incrementArrow();
*/

// the arrow functions are not really suitable for objects. its my simple and clear way of thinking. 

// Topic 10: Default Parameters, Rest Parameters & Spread Operator (Re-taught)

// 1. Write orderPizza1(size = "medium", toppings = "cheese") that returns a string using both defaults. Test with 0, 1, and 2 arguments.
function orderPizza1(size = "medium", toppings = "cheese"){
    return `i want a ${size} pizza with ${toppings} toppings`
};

console.log(orderPizza1());
console.log(orderPizza1("large","mushrooms"));
console.log(orderPizza1("large"));


// 2. Write sumAll4(...nums) using rest params that returns the total sum (use a loop or .reduce()).

// reduce()
function sumAll4(...nums1){
    let sum = nums1.reduce((arr,value) => arr+value,0);
    return sum;
}
console.log(sumAll4(10,20,30,40));

// 3. Given arrA3 = [1,2,3] and arrB3 = [4,5,6], use spread to combine into merged1.
function merged1(arrA3,arrB3){
    let combined = [...arrA3,...arrB3];
    return combined;
};
let arrA3 = [1,2,3] 
let arrB3 = [4,5,6]
console.log(merged1(arrA3,arrB3))

// 4. Edge case: Predict, then verify:

function test1(a = 5, b = 10) {
  console.log(a, b);
}
test1(0, undefined);


// ans : 0,10

// 5. Write findMax2(...nums) using rest params that returns the largest number (reuse "track best-so-far").
function findMax2(...nums2){
    let max_value = 0;
    for (let n of nums2){
        if (n > max_value){
            max_value = n;
        }
    }
    return max_value;
}

console.log(findMax2(1,45,2,76,67,11));

// Topic 11: Scope & Hoisting (Re-taught)

// 1. Write a function with a local variable, print it inside, then (commented) show what happens accessing it outside.
function local_function(){
    let variable1 = "chatgpt sucks"
    console.log(variable1)
}

local_function();
// console.log(variable1) 
// Uncaught ReferenceError: variable1 is not defined

// 2. Demo let vs var inside an if(true){} block — show which leaks out.

// var - older version and avoidable.
if (true){
    var variable3 = "gemini sucks"
}
console.log(variable3)


// let
/*
if (true){
    let variable2 = "gemini sucks"
}
console.log(variable2)
*/

// Uncaught ReferenceError: variable2 is not defined

// 3. Write nested functions where the inner one accesses the outer's variable.
let outer2 = "outer";
function outerFn2() {
  let middle2 = "middle";
  function innerFn2() {
    console.log(outer2, middle2);   // sees both
  }
  innerFn2();
}
outerFn2();


// 4. Edge case: Predict, then verify:

/*
console.log(typeof mysteryVar2);
var mysteryVar2 = "exists";
*/

// undefined

// 5. Edge case: Predict, then verify (TDZ):

/*
function testTDZ2() {
  console.log(tdzVar2);
  let tdzVar2 = "value";
}
testTDZ2();
*/

// Uncaught ReferenceError: Cannot access 'tdzVar2' before initialization


// Topic 12: Closures (Re-taught)

// closure is a combination of function and its surrounding states/lexcial scope/ required argument or data
// to understand closure i have to understand nested functions and scopes. 

/*
let global_var = "arshad khan is in space";
function outer_func(){
    // let global_var1 = "arshad khan is in outer function"
    function inner_func(){
        console.log(global_var);
    }
    return inner_func();
}
outer_func();
*/
// global_var is a string outside the entire function space. 


// i were to put the new variable inside the outer function it will be printed. 
/*
let global_var = "arshad khan is in space";
function outer_func(){
    let global_var = "arshad khan is in outer function"
    function inner_func(){
        console.log(global_var);
    }
    return inner_func();
}
outer_func();
*/

// // i were to put the variable inside the inner function it will be printed. 

let global_var = "arshad khan is in space";
function outer_func(){
    let global_var = "arshad khan is in outer function"
    function inner_func(){
        let global_var = "arshad khan is in inner function"
        console.log(global_var);
    }
    return inner_func();
}
outer_func();

// so you see there is a invisible scope called lexcial scope when an function is called it prints the the variable in its lexical scope. 

// Topic 13: Higher-Order Functions & Callbacks (Re-taught)
// callbacks is an argument which does multiple operation inside an single function 
function calculate2(a, b, operation) {
  return operation(a, b);
}

const add7 = (x, y) => x + y;
const multiply4 = (x, y) => x * y;
const subtract1 = (x, y) => x - y;

console.log(calculate2(10, 5, add7));         // 15
console.log(calculate2(10, 5, multiply4));    // 50
console.log(calculate2(10, 5, subtract1));    // 5
