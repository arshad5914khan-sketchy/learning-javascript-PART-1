/*
Easy #1 — Temperature Classifier

Create a variable tempReading = 38. Write code that:

Uses a for loop to check temperature readings from an array weekTemps = [22, 35, 40, 18, 29, 41, 33]
For each temperature, print whether it's "Cold" (< 20), "Normal" (20-32), or "Hot" (> 32)
Use if/else if/else inside the loop
*/

let tempreading = 38;
let weekTemps = [22,35,40,18,29,41,33];

for (let temp of weekTemps){
    if (temp > 32){
        console.log(`${temp}:hot`);
    }
    else if (temp >= 20 && temp <= 32){
        console.log(`${temp}:Normal`);
    }
    else if (temp < 20){
        console.log(`${temp}:cold`);
    }
    else{
        console.log('indefinate-temperature');
    };
};

/*
Easy #2 — Divisible Counter with Skip Logic

Using a for loop from 1 to 50:

Skip (using continue) any number divisible by 4
Count (using an accumulator countRemaining) how many numbers are left after skipping
Print the final count
*/

let countRemaining = 0;
for (let i = 1; i <= 50; i++){
    if (i%4 === 0){
        continue;
    }
    countRemaining+=1; 
}
console.log(countRemaining);

/*
Medium — Order Validator (arrays only)

You have three parallel arrays representing an order system:

javascript
let itemNames1 = ["Laptop", "Mouse", "InvalidItem", "Keyboard", "Monitor"];
let itemPrices1 = [55000, -200, "N/A", 1500, 8000];
let itemQty1 = [1, 2, 3, 0, 2];

(Index 0 across all three arrays belongs together: "Laptop" costs 55000, qty 1. Index 1: "Mouse" costs -200, qty 2. And so on.)

Write a classic for loop (using an index i, since you need to access all three arrays at the same position) that:

Skips any item where the price (itemPrices1[i]) is not a number (use typeof + continue)
Skips any item where the price is negative (continue)
Skips any item where quantity (itemQty1[i]) is 0 (continue)
For valid items, calculates price * qty and adds it to a running total (cartTotal)
If cartTotal ever exceeds 60000 mid-loop, break immediately and print "Spending limit reached!"
After the loop, print the final cartTotal
*/

let itemNames1 = ["Laptop", "Mouse", "InvalidItem", "Keyboard", "Monitor"];
let itemPrices1 = [55000, -200, "N/A", 1500, 8000];
let itemQty1 = [1, 2, 3, 0, 2];
let cartTotal = 0;

for (let j = 0; j <= itemNames1.length; j++){
    if (typeof itemPrices1[j] !== 'number' ){
        continue;
    }
    if (itemPrices1[j] < 0){
        continue;
    }
    if (itemQty1[j] === 0){
        continue;
    }
    cartTotal += itemPrices1[j]*itemQty1[j];

    if (cartTotal > 60000){
        console.log("spending limit reached !")
        break;
        
    }
}
console.log(cartTotal);

// SKIPPED 4TH QUESTION.

// lets jump to moudule - 3

// ================================================================================== //

/*
Module 3: Functions
8. Function basics (declarations, expressions, parameters, return)
9. Arrow functions & this differences
10. Default parameters, rest parameters, spread operator
11. Scope (global, function, block) & hoisting
12. Closures
13. Higher-order functions & callbacks
*/


// 8. Function basics (declarations, expressions, parameters, return)

// 1. Write a function squareNum1(num) that takes a number and returns its square. Call it with a few different numbers and print the results.

// method - 1
function squareNum1(num){
    return num**2
}
console.log(squareNum1(5));
// method - 2
const squarenum1 = function(num){
    console.log(num**2)
}
squarenum1(10)

// 2. Write a function isEven_odd1(num) that takes a number and returns true if it's even, false if odd (use the modulus operator, no if needed — think about what the comparison itself already gives you).
function isEven_odd1(num){
    if (num%2 === 0){
        return 'even'
    }
    else{
        return 'odd'
    }
}
console.log(isEven_odd1(90))

// 3. Write a function calculateDiscount1(price, discountPercent) that returns the final price after applying a percentage discount. Test it with calculateDiscount1(1000, 20) (expected: 800).
let discountamount = 0;
function calculateDiscount1(price, discountPercent){
    discountamount = price*(discountPercent/100)
    return price - discountamount;
}
console.log(calculateDiscount1(1000, 20));

// 4. Edge case thinking: Predict the output, then verify — explain WHY based on what you learned about return: 
function checkNumber1(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  }
  return "Zero";
  console.log("This will never print");
}

console.log(checkNumber1(5));
console.log(checkNumber1(-3));
console.log(checkNumber1(0));

// ans: return is used when the function is variablized and needs to be console.log().

// 5. Logical thinking problem: Write a function findMax1(arr) that takes an array of numbers and returns the largest value (use a loop inside the function — reuse your "track best-so-far" pattern from Topic 6). Test it with findMax1([3, 7, 2, 9, 4]) (expected: 9).
let max_value = 0
function findmax1(arr){
    for (let a of arr){
        if (a > max_value){
            max_value = a;
        };
    }
    return max_value;
}
arr = [3, 7, 2, 9, 4];
console.log(findmax1(arr));

// for function we have to create local varibales inside the function. 

// 9: Arrow Functions & this Differences

// 1. Convert this regular function into an arrow function with implicit return:
/*
function cube1(num) {
  return num ** 3;
}
*/

// without return
const cube2 = num => num**3;
console.log(cube2(3))

// 2. Write an arrow function isAdult1 that takes an age parameter and returns true if age >= 18, else false — using implicit return (no {}, no if).
const isAdult1 = age => age>= 18;
console.log(isAdult1(14))
console.log(isAdult1(20))

// 3. Write an arrow function greetPerson1 that takes a name parameter and returns the string "Hello, {name}!" using a template literal, with implicit return.
const greetPerson1 = name => `hello, ${name}!`;
console.log(greetPerson1("karen"))

// 4. Edge case thinking: Convert this multi-line function into an arrow function, and explain WHY you can't use implicit return here (hint: think about how many statements are in the body):
/*
function processScore1(score) {
  let bonus = 10;
  let finalScore = score + bonus;
  return finalScore;
}
*/

const processScore1 = (score) =>{
    let bonus = 10;
    return score + bonus;
}
console.log(processScore1(25));

// 5. Logical thinking problem: Write an arrow function getGrade1(score) that returns "A" if score >= 90, "B" if score >= 75, "C" if score >= 50, else "F" — using a ternary chain with implicit return (no {}, no if/else, just nested ternaries). This forces you to combine Topic 3 (ternary operator) with arrow function syntax.
const getGrade1 = score =>
    score >= 90 ? "A" :
    score >= 75 ? "B" :
    score >= 50 ? "C" :
    "F";
console.log(getGrade1(34))

// 6. Write an arrow function celsiusToFahrenheit1(celsius) using implicit return that converts Celsius to Fahrenheit (formula: (celsius * 9/5) + 32). Test with celsiusToFahrenheit1(0) (expected: 32) and celsiusToFahrenheit1(100) (expected: 212).
const celsiusToFahrenheit1 = (celsius) => (celsius * 9/5) + 32;
console.log(celsiusToFahrenheit1(0));
console.log(celsiusToFahrenheit1(100))

// 7. Write an arrow function isPositive1(num) using implicit return that returns true if the number is greater than 0, else false. Test with a positive, negative, and zero value — think about what zero should return.
const isPositive1 = num => num > 0;
console.log(isPositive1(-8))

// 8. Write an arrow function getAbsoluteDiff1(a, b) (two parameters) using implicit return that returns the absolute (non-negative) difference between two numbers — hint: use Math.abs(a - b). Test with getAbsoluteDiff1(10, 3) (expected: 7) and getAbsoluteDiff1(3, 10) (expected also: 7).
const getAbsoluteDiff1 = (a,b) => Math.abs(a-b);
console.log(getAbsoluteDiff1(3,10))
console.log(getAbsoluteDiff1(10,3))

// 9. Edge case thinking: Convert this to an arrow function, and predict whether it needs {}/return or can use implicit return — explain why:
/*
function validateInput1(value) {
  if (typeof value !== "number") {
    return "Invalid input";
  }
  return value * 2;
}
*/

const validateInput1 = value => typeof value === "number" ? value*2 : "invalid input";
console.log(validateInput1("2"))
console.log(validateInput1(2))

// 10. Logical thinking problem: Write an arrow function classifyTriangle1(a, b, c) (three side lengths) using {} and explicit return (multi-statement logic needed) that returns "Equilateral" if all three sides are equal, "Isosceles" if exactly two sides are equal, or "Scalene" if all sides are different. Think through the comparison logic carefully — this requires combining multiple === checks with &&/||.
const classifyTriangle1 = (a,b,c) => {
    if (a === b && b === c){
        return "Equilateral";
    }
    else if (a === b || a === c || b === c ){
        return "Isosceles";
    }
    else{
        return "scalene";
    }
}
console.log(classifyTriangle1(1,1,4))
console.log(classifyTriangle1(1,2,3))
console.log(classifyTriangle1(1,1,1))

// 10. Default parameters, rest parameters, spread operator
// i have already good idea about parameters. rest and spread have't really thought of it.


// 11. Scope (global, function, block) & hoisting

// 1. Write a function scopeTest1() that declares a local variable insideVal1 = "local" inside it, prints it, then try (in a comment) to print it outside the function — explain what error you'd expect and why.
const scopeTest1 = function(){
    let insideVal1 = "local";
    console.log(insideVal1);
}

scopeTest1()
//console.log(insideVal1)
// insideval1 is a local variable of function which cannot be accessed outside of function. 

// 2. Write code demonstrating the difference between let and var inside an if block — declare let blockLet1 and var blockVar2 both inside an if (true) {} block, then try accessing both outside the block. Show which one works and which throws an error
/*
if (true) {
    let blockLet1 = "I am let";
    var blockVar2 = "I am var";
}

console.log(blockVar2); // I am var

console.log(blockLet1); // ReferenceError
*/

// not only function but also varibles have global and local perferences in if else/ for loop and other shit !!

// 3. Write a nested function example: an outer function outerTest1() containing a variable outerData1, and an inner function innerTest1() (defined inside it) that can access outerData1. Call the inner function from inside the outer one and print the result.
function outerTest(){
    let outerData1 = "outer";
    function innerTest1(){
        console.log(outerData1);
    }
    innerTest1()
}
outerTest()

// 4. Edge case thinking: Predict the output, then verify, explaining the hoisting behavior at play:


console.log(typeof mysteryVar1);
var mysteryVar1 = "I exist";

// it prints undefined

// 5. Logical thinking problem: Predict what happens with this code (will it work, or throw an error, and specifically what kind?) — explain using the Temporal Dead Zone concept:

/*
function testTDZ1() {
  console.log(tdzVar1);
  let tdzVar1 = "value";
}
testTDZ1();
*/

// it doesn't work. we are using let or const which is temporal dead zone. and if weuse let and const after hositing. it gives error. 

// 13. callbacks, promises, and async/await

// Asynchronous programming
/*
console.log("hello")
setTimeout(function timeout(){
    console.log("hello,assholes!!")
}, 100)

console.log("end")
*/

// setTimeout is a function which call another function inside it after a particular time period.

// callbacks - a function that is passed as an argument to another function


// example - 1
function hello(callback){
    console.log(`hello karen`);
    callback();
}

function wait(){
    console.log("wait karen")
}

hello(wait)

// example - 2: argument inside the callback

function sum(callback, x,y){
    let call_result = x+y;
    callback(call_result);
}

function show_sum(call_result){
    console.log(call_result);
}

sum(show_sum,3,2);

// call back is used when 2 function need to interact. where 1st function needs 2nd function. 

// 1. Write a function calculate1(a, b, operation) that takes two numbers and a callback function operation, then returns operation(a, b). Test it by passing in an add arrow function and a multiply arrow function separately.
// i will use regular function, no arrow function
function calculate1(a,b,operation){
    let cal_result = a*b;
    operation(cal_result);
}

function show_calculation(cal_result){
    console.log(cal_result);
}

calculate1(10,4,show_calculation)

// ========================================================================================================================================================================================================================================== //

// Module 4: Data Structures
/*
14. Arrays (creation, indexing, mutation)
15. Array methods (map, filter, reduce, forEach, find, sort, etc.)
16. Objects (properties, methods, this)
17. Object methods (Object.keys, values, entries, destructuring)
18. Nested objects/arrays & deep vs shallow copy
19. Sets and Maps
*/

// 14. Arrays (creation, indexing, mutation)

// 1. Create an array groceries1 = ["milk", "eggs", "bread"]. Print the first item, the last item (using .length - 1, not a hardcoded index), and the total count.
let groceries1 = ["milk", "eggs", "bread"];
console.log(groceries1[0]);
console.log(groceries1[groceries1.length-1]);

// 2. Given numbers3 = [5, 10, 15, 20, 25], use push to add 30 to the end, unshift to add 0 to the beginning, then pop to remove the last element. Print the array after each step.
let numbers3 = [5, 10, 15, 20, 25];
numbers3.push(30);
console.log(numbers3);
numbers3.unshift(0);
console.log(numbers3);
numbers3.pop()
console.log(numbers3)

// 3. Given inventory2 = ["pen", "pencil", "eraser", "ruler"], check if "marker" exists using .includes(), find the index of "eraser" using .indexOf(), and replace "pencil" with "crayon" using direct index assignment.
let inventory2 = ["pen", "pencil", "eraser", "ruler"];
console.log(inventory2.includes("marker"));
console.log(inventory2.indexOf("eraser"));
inventory2[inventory2.indexOf("pencil")] = "crayon";
console.log(inventory2);

// 4. Edge case thinking: Predict the output, then verify — explain why:
/*
let arr3 = [1, 2, 3];
console.log(arr3[10]);
arr3[10] = 100;
console.log(arr3);
console.log(arr3.length);
*/

// undefined

// 5. Logical thinking problem: Write a loop (any type you prefer) that goes through an array temps1 = [30, 45, 22, 38, 50, 19] and builds a NEW array hotDays1 containing only the temperatures greater than 35, using .push() inside the loop. Print hotDays1 at the end.
let temps1 = [30, 45, 22, 38, 50, 19];
let hotdays1 = []
for (let temp of temps1){
    if (temp > 35){
        hotdays1.push(temp)
    }
}
console.log(hotdays1);

// 15. Array methods (map, filter, reduce, forEach, find, sort, etc.)
/*
ARYA 15 sub-topics will be:

15a: .forEach()
15b: .map()
15c: .filter()
15d: .reduce()
15e: .find() / .findIndex()
15f: .sort()
15g: Other useful methods (.slice(), .splice(), .some(), .every(), .join(), .reverse(), .concat())
*/

// 15A. forEach() - its a alternative function to replace (for..of).

// 1. Create an array subjects1 = ["Math", "Science", "History", "Art"] and use .forEach() to print each subject in the format "Subject: {subject}".
let subjects1 = ["Math", "Science", "History", "Art"];

// regular functions
subjects1.forEach(function(values,index){
    console.log(`${index}:${values}`)
});

// arrow method
subjects1.forEach((values,index) => {
    console.log(`${index}:${values}`)
});

// most i perfer the regular method.

// 2. Create an array prices2 = [100, 250, 80, 300] and use .forEach() (with the index parameter) to print "Item {index + 1}: ${price}" for each price (so numbering starts at 1, not 0).
let prices2 = [100, 250, 80, 300];
prices2.forEach(function(price,index){
    console.log(`index ${index+1}: ${price}`)
});

// 3. Create an array temps2 = [30, 45, 22, 38, 50, 19] and use .forEach() to print only the temperatures greater than 35 (use an if inside the callback — this does NOT build a new array, just prints).
let temps2 = [30, 45, 22, 38, 50, 19];
temps2.forEach(function(num){
    if (num > 35){
        console.log(num);
    }
})

// 4. Edge case thinking: Predict the output, then verify — explain why the returned value is what it is:
/*
let arr4 = [1, 2, 3];
let output1 = arr4.forEach((num) => {
  return num * 10;
});
console.log(output1);
*/

// undefined : return doesn't work.

// 5. Logical thinking problem: Using .forEach(), calculate the sum of an array values1 = [10, 20, 30, 40] by using an external accumulator variable (declared outside the .forEach() call, updated inside the callback). Print the final sum. Think about why this works even though .forEach() itself doesn't return anything.
let final_sum = 0
let values1 = [10, 20, 30, 40];
values1.forEach(function(value){
    final_sum+= value;
});
console.log(final_sum);

// 15B. .map(): .map() loops through every element of an array, applies a callback to each one, and returns a brand new array containing the transformed results. Unlike .forEach(), .map() is built specifically for transforming data, not just side effects.

// i think foreach() function doesn't want to be variable. 

// i think .map() want a variable which represents new array. 

/*
let nums8 = [1, 2, 3];

// forEach — for side effects, returns undefined
let result4 = nums8.forEach((n) => n * 2);
console.log(result4);   // undefined

// map — for transforming, returns a usable new array
let result5 = nums8.map((n) => n * 2);
console.log(result5);   // [2, 4, 6]
*/

// 1. Create an array nums10 = [1, 2, 3, 4, 5] and use .map() to return a new array squaredNums1 where each number is squared. Print both nums10 (to confirm it's unchanged) and squaredNums1.
let nums10 = [1, 2, 3, 4, 5];
const squaredNums1 = nums10.map(function(num){
    return num**2
});

console.log(nums10);
console.log(squaredNums1);

// arrow function
const squarednums = nums10.map((num) => num**2);
console.log(squarednums)

// 2. Create an array names2 = ["arshad", "sara", "kabir"] and use .map() to return a new array capitalizedNames1 where each name has its first letter capitalized (hint: you'll need .charAt(0).toUpperCase() combined with .slice(1) — look up how to combine these, since string methods haven't been formally covered yet, this is a small preview/challenge).
let names2 = ["arshad", "sara", "kabir"];
let capitalizedNames1 = names2.map((captial) => captial[0].toUpperCase() + captial.slice(1));
console.log(capitalizedNames1)

// 3. Create an array prices4 = [50, 100, 150] and use .map() to return a new array discountedPrices1 where each price has a 10% discount applied (multiply by 0.9).
let prices4 = [50, 100, 150];
let discountedPrices1 = prices4.map(function(discount){
    return discount*0.9
})

console.log(discountedPrices1);

// 4. Edge case thinking: Predict the output, then verify — explain why the LENGTH stays the same even with conditional logic inside:
/*
let nums11 = [1, 2, 3, 4, 5];
let mapped2 = nums11.map((num) => {
  if (num % 2 === 0) {
    return num;
  }
  return null;
});
console.log(mapped2);
console.log(mapped2.length);
*/

// [null, 2, null, 4, null]
// length : 5
// how do we fix it. real answer : [2,4] and length : 2

// 5. Logical thinking problem: Create an array students2 = ["Aisha", "Rohan", "Meera"] and an array scores4 = [85, 45, 92] (matched by index, like in the Module 3 grand test). Use .map() on students2 (with the index parameter) to build a new array reportCards1 where each entry is a string like "Aisha: 85 (Pass)" or "Rohan: 45 (Fail)" — pass if score >= 50, fail otherwise. This combines .map() with index-based cross-referencing between two arrays, plus a ternary.

let students2 = ["Aisha", "Rohan", "Meera"];
let scores4 = [85, 45, 92];
let reportCards1 = students2.map(function(names,index){
    return ` ${names} : ${scores4[index]}  ${(scores4[index] >= 50 ? "pass":"fail")}`
})

console.log(reportCards1);

// 15C. .filter(): it provides the filtered list based on the conditions 

// 1. Create an array nums16 = [12, 5, 8, 30, 17, 22, 3] and use .filter() to return a new array bigNums2 containing only numbers greater than 15.
let nums16 = [12, 5, 8, 30, 17, 22, 3];
let bigNums2 = nums16.filter((num) => num > 15);
console.log(bigNums2);

// 2. Create an array words1 = ["cat", "elephant", "dog", "hippopotamus", "ant"] and use .filter() to return a new array longWords1 containing only words with more than 4 characters (hint: .length works on strings too).
let words1 = ["cat", "elephant", "dog", "hippopotamus", "ant"];
let longWords1 = words1.filter((word) => word.length > 4);
console.log(longWords1);

// 3. Create an array people1 = ["Alice", "bob", "Charlie", "dave", "Eve"] and use .filter() to return a new array capitalizedNames2 containing only names that start with an uppercase letter (hint: compare name[0] to name[0].toUpperCase() — if they're equal, it was already uppercase).
let people1 = ["Alice", "bob", "Charlie", "dave", "Eve"];
let capitalizedNames2 = people1.filter((people) => people[0] === people[0].toUpperCase());

console.log(capitalizedNames2);

// 4. Edge case thinking: Predict the output, then verify — explain what happens when the callback DOESN'T explicitly return a boolean, but something else "truthy/falsy" instead:
/*
let mixedVals1 = [0, 1, "", "hello", null, "world", undefined, 42];
let truthyOnly1 = mixedVals1.filter((val) => val);
console.log(truthyOnly1);
*/

// [1, 'hello', 'world', 42]

// 5. Logical thinking problem: Chain .filter() and .map() together: given products1 = [45, 120, 15, 300, 60, 8], first .filter() to keep only prices between 20 and 200 (inclusive), THEN .map() to add a 18% tax to each surviving price (round the result using Math.round()). Store the final result in finalPrices1 and print it.
let products1 = [45, 120, 15, 300, 60, 8];
let finalPrices1 = products1.filter((product) => product >= 20 && product <= 200).map((product) => product*1.18).map((product) => Math.round(product));
console.log(finalPrices1);

// 15D. .reduce() : reduces the elements from list to single value.
// 1. Create an array nums23 = [10, 20, 30, 40, 50] and use .reduce() to calculate the total sum, storing it in totalSum1. Use an explicit initialValue of 0.
let nums23 = [10, 20, 30, 40, 50];
let totalSum1 = nums23.reduce((acc , val) => acc+=val, 0);
console.log(totalSum1);

// 2. Create an array nums24 = [4, 2, 9, 1, 7] and use .reduce() to find the maximum value (use the pattern shown above, with nums24[0] as the initial value).
let nums24 = [4, 2, 9, 1, 7];
let max2_value = nums24.reduce((acc,curr) => (curr > acc ? curr:acc), nums24[0]);
console.log(max2_value);

// 3. Create an array cart2 = [250, 100, 75, 300] and use .reduce() to calculate the total, but only count items with a price above 80 (combine a conditional check inside the reduce callback — similar to the "counting occurrences" pattern shown above).
let cart2 = [250, 100, 75, 300];
let cart2_total = cart2.reduce((acc,val) => val > 80 ? acc+val:acc,0);
console.log(cart2_total);

// 4. Edge case thinking: Predict what happens, then verify — explain the error (if any):

/*
let emptyArr2 = [];
let result6 = emptyArr2.reduce((acc, curr) => acc + curr);
console.log(result6);
*/

// ANS: undefined or []

/*
let result7 = emptyArr2.reduce((acc, curr) => acc + curr, 0);
console.log(result7);
*/

// ANS: 0 or []

// 5. Logical thinking problem: Create an array words2 = ["the", "quick", "brown", "fox"] and use .reduce() to combine them into a single sentence string "the quick brown fox" (accumulate by concatenating with spaces — think carefully about how to avoid a leading/trailing space, this requires careful accumulator logic).
let words2 = ["the", "quick", "brown", "fox"];
let word_sentence = words2.reduce((acc,curr) => acc+" " + curr)
console.log(word_sentence)

// 15E. .find() / .findIndex()

// .find(): searches through an array and returns the first element that satisfies a test condition (callback returns true)
// .findIndex(): same idea, but returns the INDEX instead of the value.
// .includes(): it check if the required value is existing on array,string or number.

// 1. Create an array nums31 = [3, 7, 11, 18, 25, 30] and use .find() to get the first number greater than 15, storing it in firstMatch1.
let nums31 =  [3, 7, 11, 18, 25, 30];
let firstMatch1 = nums31.find((n) => n>15);
console.log(firstMatch1);

// 2. Create an array products2 = ["pen", "notebook", "eraser", "sharpener"] and use .findIndex() to get the index of the first word longer than 6 characters.
let products2 = ["pen", "notebook", "eraser", "sharpener"];
let product_index = products2.findIndex((product) => product.length > 6);
console.log(product_index);

// 3. Create an array nums32 = [2, 4, 6, 8] and use .find() to search for the first ODD number. Print the result and explain what value you'd expect since there are no odd numbers in this array
let nums32 = [2,4,6,8];
let odd_number = nums32.find((n) => n%2 != 0);
console.log(odd_number);

// 4. Edge case thinking: Predict the output, then verify — explain the difference in return type between the two methods when nothing matches:

/*
let nums33 = [1, 2, 3];
console.log(nums33.find((n) => n > 100));
console.log(nums33.findIndex((n) => n > 100));
*/

// 1. undefined
// 2. -1

// 5. Logical thinking problem: Create an array accounts1 = [{}, {}, {}] — actually, skip that (objects aren't covered yet). Instead: create an array balances1 = [500, -50, 1200, -200, 800] and use .find() to locate the first negative balance (representing an account in debt). Then use .findIndex() to get its position. Print both, and explain a real-world scenario where knowing the INDEX (not just the value) would be useful (e.g., what would you do with that index in a real banking app?).
balances1 = [500, -50, 1200, -200, 800]
let acc_balance = balances1.find((balance) => balance < 0);
let acc_index = balances1.findIndex((balance) => balance < 0);

console.log(`the first negitive balance: ${acc_balance} and its index: ${acc_index} `)

// TOPIC 15F : .sort(): we can do regular sorting for string but for numbers there is a catch.
// num.sorted((a,b)=> a-b) : for ascending order
// num.sorted((a,b) => b-a) : for decending order

// 1. Create an array nums36 = [45, 3, 89, 12, 6] and sort it in ascending numeric order using a compare function. Print the result.
let nums36 = [45, 3, 89, 12, 6];
let ascending_arr = [...nums36].sort((a,b)=>a-b)
console.log(ascending_arr);

// 2. Using the same array (or a fresh copy), sort it in descending numeric order.
let decending_arr = [...nums36].sort((a,b)=>b-a);
console.log(decending_arr);

// 3. Create an array cities1 = ["Mumbai", "Delhi", "Bangalore", "Chennai"] and sort it alphabetically (default .sort() — no compare function needed for strings).
let cities1 = ["Mumbai", "Delhi", "Bangalore", "Chennai"]
console.log(cities1.sort())

// 4. Edge case thinking: Predict the output, then verify — explain WHY this happens using what you learned about default string-based sorting:
/*
let nums37 = [10, 1, 21, 2];
nums37.sort();
console.log(nums37);
*/

//  [1, 10, 2, 21]
// when we apply the sort to a numbers list, it convert elements to strings and mess up the numerical sorting thats why we use compare function for number sorting

// 5. Logical thinking problem: Create an array of ages ages2 = [34, 12, 56, 8, 23, 45]. Use spread (...) to create a sorted COPY in descending order called sortedAgesDesc1, while keeping the original ages2 array completely unchanged. Print both ages2 and sortedAgesDesc1 to confirm the original wasn't mutated.
let ages2 = [34, 12, 56, 8, 23, 45];
let sortedAgesDesc1 = [...ages2].sort((a,b)=>b-a);
console.log(sortedAgesDesc1);
console.log(ages2);

// TOPIC 15G: 
// 1) .slice(staring,end-1): get the sliced numbers without mutating originals array
let a = [1,2,4,4,5,342];
console.log(a.slice(2,5));
console.log(a) // original untouched

// .end(start,till the end of array): .slice(x)
console.log(a.slice(3));
// original untouched

// 2) .splice: .splice(removing_for_index_first,total elements removed from that point on, x_inserted at the point)
// .splice(start, deleteCount, ...itemsToAdd) — remove/insert, MUTATES the original
// highly mutatable

let b = [445,23,67,12,78];
b.splice(2,2,34,14); // 67 and 12 removed
console.log(b); // remaning element printed and inserted  34 and 14 at removed index

// not mutating the original
let b1 = [...b];
let un_mutated = [...b1].splice(2,2,34,14);
console.log(un_mutated)
console.log(b1); 

// 3) .some() — does AT LEAST ONE element pass a test? Returns boolean
let c = [2,3,5,6,10];
console.log(c.some((c1) => c1%2 === 0)); // prints true if any one element is even(condition is meet)

// 4) .every() — do ALL elements pass a test? Returns boolean
let c1 = [...c];
console.log(c1.every((c2) => c2%2 === 0)); // prints true if all elements are even (conditon is meet)

// 5) .join(separator) — combine array elements into a single STRING
let words4 = ["Hello", "world", "from", "JS"];
console.log(words4.join(" ")); 
console.log(words4.join("^"));

// 6) .reverse : flips the array order, MUTATES original
words5 = [...words4];
console.log(words5.reverse());
console.log(words5); // original is also mutated

// not not mutated the original list we have to use variable.

words6 = [...words4];
let w = [...words6].reverse();
console.log(w);
console.log(words6);

// .concat() — combine arrays, returns a NEW array (non-mutating, similar to spread)
// method 1
let arrA2 = [1, 2, 3];
let arrB2 = [4, 5, 6];

let combined2 = arrA2.concat(arrB2);
console.log(combined2);   // [1, 2, 3, 4, 5, 6]
console.log(arrA2);        // [1, 2, 3]  ← unchanged

// method 2
let combined3 = [...arrA2, ...arrB2];
console.log(combined3);

// 1. Create an array letters1 = ["a", "b", "c", "d", "e", "f"] and use .slice() to extract just ["c", "d"] into a variable middleLetters1, without modifying the original.
let letters1 = ["a", "b", "c", "d", "e", "f"];
let middleLetters1 = letters1.slice(letters1.indexOf("c"),letters1.indexOf("d")+1);
console.log(middleLetters1);

// 2. Create an array queue1 = ["Alice", "Bob", "Charlie", "Dave", "Eve"] and use .splice() to remove "Bob" and "Charlie" from the array (find their positions first, or hardcode the correct index/count). Print the modified array.
let queue1 = ["Alice", "Bob", "Charlie", "Dave", "Eve"]
queue1.splice(queue1.indexOf("Bob"),1);
queue1.splice(queue1.indexOf("Charlie"),1);
console.log(queue1);

// 3. Create an array scores5 = [45, 78, 92, 30, 65] and use .some() to check if any score is above 90, and .every() to check if all scores are above 40. Print both results.
let scores5 = [45, 78, 92, 30, 65];
console.log(scores5.some((score) => score > 90));
console.log(scores5.every((score) => score > 40));

// 4. Edge case thinking: Predict the output, then verify — explain why the array looks different after this runs:

/*
let nums44 = [1, 2, 3, 4, 5];
let removed1 = nums44.splice(1, 0, 99);
console.log(nums44);
console.log(removed1);
*/

//  [1, 99, 2, 3, 4, 5]
// []

// 5. Logical thinking problem: Create an array teamA1 = ["Alice", "Bob"] and teamB1 = ["Charlie", "Dave"]. Combine them into allPlayers1 using .concat(), then use .join(", ") to create a readable string like "Alice, Bob, Charlie, Dave". Finally, use .reverse() on a COPY of allPlayers1 (using spread, so the original order is preserved) to get the reversed order, and print all relevant variables to confirm nothing was mutated incorrectly.
let teamA1 = ["Alice", "Bob"];
let teamB1 = ["Charlie", "Dave"];
let allPlayers1 = teamA1.concat(teamB1);
console.log(allPlayers1);
console.log(allPlayers1.join(", "));
reverse_players = [...allPlayers1];
console.log(reverse_players.reverse())
console.log(allPlayers1);

// TOPIC 16: Objects (Properties, Methods, this)
/*
ARYA 16 sub-topics:

16a: Creating objects & accessing properties (dot vs bracket notation)
16b: Modifying objects (add, update, delete properties)
16c: Methods & this
16d: Checking property existence + nested objects (preview)
*/

// 16a: Creating Objects & Accessing Properties

// 1. Create an object book1 = { title: "1984", author: "George Orwell", year: 1949 }. Print all three properties using dot notation.
let book1 = { title: "1984", 
    author: "George Orwell", 
    year: 1949 };
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
// for .notion we don't need " " for key names

/*
for (let key in book1){
    console.log(book1[key])
}
*/

// 2. Using the same book1 object, print title and author using bracket notation instead.
console.log(book1["title"]);
console.log(book1["author"]);
// for [] notion we need " " for key names

// 3. Create a variable propName1 = "year" and use it with bracket notation to print book1's year — this demonstrates WHY bracket notation exists (dot notation can't do this).
let propName1 = "year";
console.log(book1[propName1]);

// 4.Edge case thinking: Predict the output, then verify — explain why one line works and the other doesn't:
/*
let car3 = { brand: "Toyota", model: "Corolla" };
let field1 = "brand";

console.log(car3[field1]);  // for [] notion we need " " for key names 
console.log(car3.field1);  // . notion understand hardcoded word directly. 
*/

// 5. Logical thinking problem: Create an object prices6 = { apple: 50, banana: 20, cherry: 100 } and a variable fruitToCheck1 = "banana". Use bracket notation to dynamically fetch the price, then print "The price of {fruit} is {price}" using a template literal. Explain why this specific task would be impossible (or very awkward) using only dot notation.
let prices6 = { apple: 50, banana: 20, cherry: 100 }
let fruitToCheck1 = "banana";
console.log(`the price of ${fruitToCheck1} is ${prices6[fruitToCheck1]}`)
// . notion need the hardcoded key name to get the value

// ARYA 16b: Modifying Objects (Add, Update, Delete)


// 1. Create an object laptop1 = { brand: "Dell", ram: 8 }. Update ram to 16, then add a new property storage: 512. Print the object after each change.
let laptop1 = { brand: "Dell", ram: 8 };
laptop1['ram'] = 16; // [] notion
laptop1.storage = 512; // . notion
console.log(laptop1);

// 2. Create an object employee1 = { name: "Riya", department: "Sales", salary: 40000 }. Give the employee a raise by updating salary to 45000, then delete the department property (they've decided to keep it private). Print the final object.
let employee1 = { name: "Riya", department: "Sales", salary: 40000 };
employee1.salary = 45000;
delete employee1.department;
console.log(employee1);

// 3. Create an empty object settings2 = {}, then use a loop with an array of keys keysToAdd1 = ["volume", "brightness", "contrast"] and a matching array of values valuesToAdd1 = [70, 80, 60] to dynamically build the object using bracket notation (you'll need a classic indexed for loop, combining Topic 6a + Topic 16 concepts).
let settings2 = {};
let keysToAdd1 = ["volume", "brightness", "contrast"];
let valuesToAdd1 = [70, 80, 60];

for (let i = 0; i < keysToAdd1.length; i++){
    settings2[keysToAdd1[i]] = valuesToAdd1[i];
}
console.log(settings2);

// 4. Edge case thinking: Predict the output, then verify — explain what happens when you try to delete a property that doesn't exist:
/*
let obj2 = { a: 1, b: 2 };
let deleteResult1 = delete obj2.c;   // "c" doesn't exist
console.log(deleteResult1);
console.log(obj2);
*/

// undefined
// { a: 1, b: 2 }

// 5. Logical thinking problem: Create a const object config1 = { mode: "light", fontSize: 14 }. Write code that attempts to update config1.fontSize to 16 (should work fine), then write a commented-out line showing what would happen if you tried config1 = { mode: "dark" } (should fail) — explain WHY one works and the other doesn't, connecting it back to what you learned about const with arrays in Topic 14.
const config1 = { mode: "light", fontSize: 14 };
config1.fontSize = 16; // upadating the object is acceptable.
console.log(config1)
// config1 = {mode:"dark"}; // reassignment is not possible
// this might work.
delete config1.fontSize;
config1.mode = "dark"
console.log(config1); // told ye 

// ARYA 16c: Methods & this

// method - 1: key: function()
let cal = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b
    },
    intro: function(){
        console.log(`the addition ${this.add(3,5)} and subtraction ${this.sub(9,5)}`)
    }
}
console.log(cal["add(3,5)"]); // [] notion doesn't work for it. we use .notion for functions inside objects.
console.log(cal.add(3,5));
console.log(cal.sub(3,5));
cal.intro();
// intro wouldn't work, but here's a thing. (this is a function or any built-in something which modifies the value of object within. when we applied this.add-> it won't provide anything beacause we still haven't given any arguments to work with so we give this.add(3,5) now its possible to get the print of statement.)

// (this) with regular key-value is predictable
let person10 = {
  name: "Kabir",
  age: 30,
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
};

person10.introduce();   // "Hi, I'm Kabir and I'm 30 years old" — SAME method code, different result, because `this` adapts

// (this) used mostly modifiing the values inside the object itself

// NOTE: Arrow function breaks (this) better use normal function in objects. 

// this.function inside this.function
let rectangle2 = {
  width: 10,
  height: 5,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    console.log(`This rectangle has an area of ${this.calculateArea()}`);   // calling another method via this
  }
};

rectangle2.describe();   // "This rectangle has an area of 50"

// 1. Create an object rectangle3 with width: 8 and height: 4, plus a method calculateArea() using this that returns width * height. Call it and print the result.
let rectangle3 = {
    width:8,
    height:4,
    calculateArea(){
        return this.width*this.height
    }
};
console.log(rectangle3.height);
console.log(rectangle3.width);
console.log(rectangle3.calculateArea());

// 2. Create an object bankAccount4 with owner: "Meera" and balance: 2000, plus methods deposit(amount) and withdraw(amount) that modify this.balance. Perform a deposit of 500 and a withdrawal of 300, printing the balance after each operation.
let bankAccount4 ={
    owner:"Meera",
    balance:2000,
    deposit(amount){
        this.balance+=amount;
    },
    withdraw(amount){
        this.balance-=amount
    }
}

// depositing
bankAccount4.deposit(500);
console.log(bankAccount4.balance)

// withdrawal
bankAccount4.withdraw(300);
console.log(bankAccount4.balance);

// 3. Create an object circle1 with radius: 7, plus two methods: calculateArea() (returns Math.PI * radius * radius, use this.radius) and calculateCircumference() (returns 2 * Math.PI * radius, use this.radius). Call both and print the results.
let circle1 = {
    radius : 7,
    calculateArea(){
        return Math.PI*this.radius*this.radius;
    },
    calculateCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

console.log(circle1.calculateArea());
console.log(circle1.calculateCircumference());

// 4. Edge case thinking: Predict the output, then verify — explain precisely why the arrow method fails:

/*
let obj4 = {
  value: 100,
  getValueRegular: function() {
    return this.value;
  },
  getValueArrow: () => {
    return this.value;
  }
};

console.log(obj4.getValueRegular());
console.log(obj4.getValueArrow());
*/

// arrow function breaks the (this)

// 5. Logical thinking problem: Create an object student4 with name: "Zara", scores: [85, 90, 78], and a method getAverage() that uses this.scores combined with .reduce() (from Topic 15d!) to calculate and return the average score. Call the method and print the result — this combines object methods with array methods you already know.
let student4 = {
    name: "zara",
    score: [85,90,78],
    getaverage(){
        let average =  this.score.reduce((acc,value) => acc+value,0)
        return average/this.score.length;
    }
};
console.log(student4.getaverage())

// ARYA 16d: Checking Property Existence & Nested Objects

// 1. Create an object laptop2 = { brand: "Apple", price: 1200 }. Use in, .hasOwnProperty(), and the !== undefined check to verify "price" exists and "warranty" does not — print all results.
let laptop2 = { brand: "Apple", price: 1200 };

// undefined
console.log(laptop2.price !== undefined);
console.log(laptop2.warranty !== undefined);

// in 
console.log("price" in laptop2);
console.log("warranty" in laptop2);

// hasownproperty()
console.log(laptop2.hasOwnProperty("price"));
console.log(laptop2.hasOwnProperty("warranty"));

// 2. Create a nested object student5 = { name: "Aisha", grades: { math: 90, science: 85 } }. Print student5.grades.math, then update student5.grades.science to 95, then print the whole grades object.
let students5 = { name: "Aisha",
                 grades: { math: 90, science: 85 }
                }

console.log(students5.grades.math);
students5.grades.science = 95;
console.log(students5.grades);

// 3. Create an object company2 = { name: "StartupX", ceo: { name: "Rohan", age: 35 } }. Print the CEO's name using dot notation, then add a new nested property ceo.email = "rohan@startupx.com". Print the final ceo object.
let company2 = { name: "StartupX", 
                 ceo: { name: "Rohan", age: 35 } 
                }

console.log(company2.ceo.name);
company2.ceo.email = "rohan@startupx.com";
console.log(company2.ceo);

// 4. Edge case thinking: Predict the output, then verify — explain the error and how you'd prevent it:

/*
let profile1 = { username: "arshad_k" };
console.log(profile1.settings.theme);
*/

// undefined and error 
// prevention: create a nested object named settings and inside it place an key named theme.

// 5. Logical thinking problem: Create an array of objects employees1 = [{ name: "Ravi", dept: "IT", salary: 50000 }, { name: "Meera", dept: "HR", salary: 45000 }, { name: "Kabir", dept: "IT", salary: 55000 }]. Use .filter() (Topic 15c!) to get only employees in the "IT" department, then use .map() (Topic 15b!) to extract just their names into a new array itEmployeeNames1. This combines nested object access with array methods you already know.
let employees1 = [
    { name: "Ravi", dept: "IT", salary: 50000 },
    { name: "Meera", dept: "HR", salary: 45000 }, 
    { name: "Kabir", dept: "IT", salary: 55000 }
]

let IT_filter = employees1.filter(filter => filter.dept === "IT")
                          .map(filter => filter.name);

console.log(IT_filter);

// TOPIC 17. Object methods (Object.keys, values, entries)

// 1. Create an object movie1 = { title: "Inception", director: "Nolan", year: 2010, rating: 8.8 }. Use Object.keys(), Object.values(), and Object.entries() on it, printing all three results.

let movie1 = { title: "Inception", director: "Nolan", year: 2010, rating: 8.8 };
console.log(Object.keys(movie1));
console.log(Object.values(movie1));
console.log(Object.entries(movie1));

// TOPIC - 18: Nested Objects/Arrays & Deep vs Shallow Copy
// 1. Create an object settings4 = { volume: 50, brightness: 70 } (flat, no nesting). Create a shallow copy using spread, modify a property on the copy, and confirm the original is unaffected. Print both.
let settings4 = { volume: 50, brightness: 70 };
let settings5 = {...settings4};
settings5.volume = 10;
settings5.brightness = 20;
console.log(settings5);
console.log(settings4);

// 2. Create a nested object company3 = { name: "TechCorp", ceo: { name: "Rohan" } }. Create a shallow copy using spread, then modify copy.ceo.name. Print both company3.ceo.name and the copy's ceo.name — observe and explain why the original was affected.
let company3 = { name: "TechCorp", ceo: { name: "Rohan" } }
let company4 = {...company3};
// company4.ceo.name = "rishi";
// console.log(company3);
// console.log(company4);

// in shallow copy the surface level key and value is copied to do modification on nested level we need to apply sturcturedcopy()

// 3. Redo problem 2, but this time use structuredClone() to create a proper deep copy. Modify the deep copy's nested ceo.name, then confirm the original company3.ceo.name remains unchanged.
company5 = structuredClone(company3);
company5.ceo.name = "rishi"
console.log(company5);
console.log(company3);

// 4. Edge case thinking: Predict the output, then verify — explain why arrays of objects have the same shallow-copy pitfall:
/*
let team1 = [{ name: "Alice", score: 10 }, { name: "Bob", score: 20 }];
let teamCopy1 = [...team1];
teamCopy1[0].score = 999;
console.log(team1[0].score); // 999
console.log(teamCopy1[0].score); // 999
*/

// then again its same. shallow copy only copies surface level

// fixed it
let team1 = [{ name: "Alice", score: 10 }, { name: "Bob", score: 20 }];
let teamCopy1 = structuredClone(team1);
teamCopy1[0].score = 999;
console.log(team1[0].score);
console.log(teamCopy1[0].score);

// 5. Logical thinking problem: Create a nested object gameState1 = { player: "Hero", stats: { health: 100, mana: 50 } }. Write code that creates a deep copy called gameStateBackup1, then simulates "damage" by reducing gameState1.stats.health by 30. Print both objects to prove the backup retained the original health value of 100, demonstrating why deep copies are essential for things like save states/backups/undo systems.
let gameState1 = { player: "Hero", stats: { health: 100, mana: 50 } }
let gameStateBackup1 = structuredClone(gameState1);
gameStateBackup1.stats.health -= 30;
// reduced by 30 while securing original object
console.log(gameState1.stats.health);
console.log(gameStateBackup1.stats.health);


// Topic 19: Sets and Maps

// 1. Create an array numsWithDupes2 = [5, 3, 5, 8, 3, 9, 8, 1] and use a Set (with spread) to create a deduplicated array uniqueNums2. Print the result.
let numsWithDupes2 = [5, 3, 5, 8, 3, 9, 8, 1];
let set_dupes = new Set(numsWithDupes2);
console.log(set_dupes);
console.log([...set_dupes]);

// 2. Create a Set called visitedCities1, add "Mumbai", "Delhi", "Mumbai" (duplicate), and "Chennai". Print the Set's .size, then check with .has() whether "Bangalore" is in it.
let visitedCities1= new Set(["mumbai","delhi",'mumbai','chennai']);
console.log(visitedCities1);
console.log(visitedCities1.size)
console.log(visitedCities1.has("bangalore"))

// 3. Create a Map called userRoles1 and add three entries: "Arshad" → "Admin", "Sara" → "Editor", "Kabir" → "Viewer". Loop through it using for...of and print each "{name} is a {role}".
let userRoles1 = new Map();

userRoles1.set("Arshad", "Admin");
userRoles1.set("Sara", "Editor");
userRoles1.set("Kabir", "Viewer");

console.log(userRoles1);

for (let [key, value] of userRoles1) {
    console.log(`${key} is a ${value}`);
}

// 4. Edge case thinking: Predict the output, then verify — explain why this matters for real-world data cleaning:

/*
let mixedArr2 = [1, "1", 1, "1", 2, "2"];
let uniqueMixed1 = [...new Set(mixedArr2)];
console.log(uniqueMixed1);
*/

// set removes multiple numbers and strings also. 

// 5. Logical thinking problem: You have an array of email addresses with duplicates: emails1 = ["a@x.com", "b@x.com", "a@x.com", "c@x.com", "b@x.com"]. Use a Set to get unique emails, then use .map() to count total unique senders by printing uniqueEmails1.length. Separately, build a Map called emailCounts1 that tracks how many times EACH email appears (hint: loop through the original array with duplicates, and for each email, use .has() to check if it's already a key in the Map — if yes, increment its count using .get()/.set(); if no, set it to 1).


