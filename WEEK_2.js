/* ======================================================================================== Module 1: Foundations ======================================================================================== //

1. What is JavaScript & how it runs (browser vs Node.js, <script> tag, console)
2. Variables (var, let, const) and data types (string, number, boolean, null, undefined, symbol, bigint)
3. Operators (arithmetic, comparison, logical, assignment, ternary)
4. Type conversion & coercion (implicit vs explicit)

*/
// Topic 1: What is JavaScript & How It Runs
// 1. Print "I am learning JavaScript" to the console.
console.log("I am learning JavaScript")

// 2. Print the result of 12 * 4 and separately print the result of 100 / 3 — observe how JS handles division of numbers that don't divide evenly.
console.log(`mulitplication: ${12*4} and division: ${100/3} `)

// 3. Write three console.log() statements that print your name, your age, and your favorite hobby — each on a separate line.
console.log("Mohammed Arshad Khan");
console.log(20);
console.log("maladaptive daydreaming")

// 4. edge case thinking: What do you think happens if you write console.log(Hello World) (WITHOUT quotes around the text)? Try it and explain in your own words why it behaves that way.
console.log("hello")
//console.log(hello) : uncaught ReferenceError: hello is not defined

// 5. Logical thinking problem: Without running it, predict the exact output order of this code, then run it to verify:
/*
console.log("A");
console.log("B");
console.log("C");
console.log(1 + 1);
console.log("D");
*/
// answer: 
/*
A
B
C
2
D*/

// ================================================================================================================================================================================================ //
// Topic 2: Variables & Data Types
// 1. Declare a const variable called country and assign it your country name. Then try to reassign it to a different value and observe/report the error.
const country = "india";
console.log(country);
// country = "afghanistan" -> WEEK_2.js:36 Uncaught TypeError: Assignment to constant variable.

// 2. Declare a let variable called temperature with value 30. Change it to 35 later in the code, then print both the type and value using typeof.
let temperature = 30;
temperature = 35;
console.log(typeof temperature);

// 3. Create one variable of each primitive type (string, number, boolean, undefined, null) and print each one along with its typeof.
console.log(typeof 12);
console.log(typeof 'arshad');
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

// 4. Edge case thinking: What is the output of this, and why?

let a = 5;
// let a = 10;
console.log(a);
// i think its a = 10. 

// 5. Logical thinking problem: Predict the output of each line without running it first, then verify:

console.log(typeof (10 > 5)); // -> 10 is greater than 5 and that means it becomes true and it will print "boolean"
console.log(typeof "10" + 5); // -> undefined or error
console.log(typeof (10 + 5)); // -> Number

// ================================================================================================================================================//
// Topic 3: Operators

// 1. Write code that checks if the number 15 (store it in a variable called num3) is even or odd using the modulus operator, and print "Even" or "Odd" using a ternary operator.
let num3 = 15;
let result = num3%2 === 0 ? 'EVEN' : "ODD";
console.log(result)

// 2. Predict and then verify the output of:

console.log(7 == "7"); // loosely True
console.log(7 === "7");  // strictly false
console.log(null == undefined); // loosely true
console.log(null === undefined); // strictly false

// 3. Write code using logical operators to check: a person can vote if age >= 18 AND they are a citizen (true/false). Test it with two different value combinations.
let age = 23;
let citizen = true;
let vote = age >= 18 && citizen === true ? "Eligible to vote" : "Not - eligible to vote";
console.log(vote)

// 4. Edge case thinking: Predict the output, then verify:
let x = 5;
console.log(x++ + ++x);
// x++ -> will only increase the value by 1 and only when we console.log(x) we get the increment value
// ++x -> prints incremented value.

// 5. Logical thinking problem: Without running it, determine what this prints and explain your reasoning:
console.log(10 % 3 === 1 && 20 / 4 === 5);
// answer : true

// =======================================================================================================//

// 4. Type conversion & coercion (implicit vs explicit)
// while interacting with different types. 
// Case-1: + (applicable if string is number or word)
console.log("5"+5); // we expect it to be error but js does implict correction of number to string. and joins em both. -> 55. this happens if we apply +.
console.log("string"+5)

// case - 2: rest of operators
console.log("5"-1); 
console.log('10'-9);
console.log('20'*3);
console.log("12"/3);
console.log("4"%2);
console.log("7"**2);
// we expect it to be error but js does implict correction of string to number. and does the operators. this happens if we apply other operators.

// case - 3: (string and number with other operators)
console.log("arshad"-5);
// we can only do + operation if its a string and number remaining is operators provide the NaN.


// 1. Store the string "25" in a variable strNum and convert it to a Number explicitly, storing the result in convertedNum. Print both the value and typeof of convertedNum.
let strNum = "25";
let convertedNum = Number(strNum);
console.log(convertedNum);
console.log(typeof convertedNum);

// 2. Predict, then verify:

console.log("100" - "50"); // 50
console.log("100" + "50"); // "10050"
console.log("100" - 50 + "5"); // "505"
console.log(5 + 5 + "5"); // "105"

// 3. Create a variable emptyStr = "" and a variable zeroVal = 0. Use Boolean() on both and print results. Then explain why both are falsy despite being "different" types.
let emptyStr = "";
let zeroval = 0;
emptyStr = Boolean(emptyStr);
zeroval = Boolean(zeroval);
console.log(emptyStr);
console.log(zeroval);
// they are naturally turned to false after convertion.

// 4. Edge case thinking: Predict the output, then verify:
console.log([] + []); // True
console.log([] + {}); // True
console.log({} + []); // True

// 5. Logical thinking problem: Without running it, determine the output and explain your reasoning:
let val1 = "0";
let val2 = 0;
console.log(val1 == val2); // loosely true
console.log(Boolean(val1)); // true
console.log(Boolean(val2)); // false

// ================================================== MODULE - 2 =========================================================================== //
/*
5. Conditionals (if/else, switch)
6. Loops (for, while, do-while, for...of, for...in)
7. Loop control (break, continue)
*/

// 5. Conditionals (if/else, switch)

// 1. Write an if/else if/else chain that assigns letter grades based on a variable examScore (0-100): >=90 → "A", >=75 → "B", >=50 → "C", else "Fail". Test it with examScore = 82.
let examscore = 82;

if (examscore >= 90){
    console.log(`${examscore}:A`)
}
else if (examscore >= 75){
    console.log(`${examscore}:B`)
}
else if (examscore >= 50){
    console.log(`${examscore}:C`)
}
else{
    console.log(`${examscore}:FAIL`)
}

// 2. Write a switch statement that takes a variable fruitCode (1, 2, or 3) and prints "Apple", "Banana", or "Cherry" respectively, and "Unknown fruit" for anything else.
let fruitCode = 2;
switch (fruitCode){
    case 1:
        console.log("Apple");
        break;
    case 2:
        console.log("Banana");
        break;
    case 3:
        console.log("Cherry");
        break;
    default:
        console.log("Unknown fruits")

}

// 3. Write nested if conditions to check movie ticket eligibility: variables viewerAge and hasParentConsent (boolean). Rule: if viewerAge >= 18, allow entry. If viewerAge < 18 but hasParentConsent is true, allow entry. Otherwise, deny entry.
let viewerAge = 17;
let hasParentConsent = false;
if (viewerAge >= 18){
    console.log("allowed to enter")
}
else{
    if (hasParentConsent){
        console.log("allowed to enter");
    }
    else{
    console.log("entry denied")
    }
}

// 4. Edge case thinking: Predict the output, then verify — explain WHY based on fall-through:
/*
let gradeLevel = 2;

switch (gradeLevel) {
  case 1:
    console.log("Beginner");
  case 2:
    console.log("Intermediate");
  case 3:
    console.log("Advanced");
    break;
  default:
    console.log("Unknown");
}
*/
// Answer: without the break the console.log prints regardless the case. 

// 5. Logical thinking problem: Without running it, determine the output and explain the reasoning behind why the ORDER of conditions matters:
/*
let temperature2 = 105;

if (temperature2 > 0) {
  console.log("Above freezing");
} else if (temperature2 > 100) {
  console.log("Very hot");
} else {
  console.log("Freezing");
}
*/

// ans : 'very hot'. order keeps the track of the condition in either ascending or descending order. 

// ======================================================================================================================== //

// TOPIC 6: Loops (for, while, do-while, for...of, for...in)
// 6A) for loop: for ( START ; CONDITION ; STEP ) { CODE TO REPEAT }

// 1. Write a for loop that prints numbers from 1 to 10.
for (let i = 1; i <=10; i++){
    console.log(i)
}

// 2. Write a for loop that prints all even numbers from 2 to 20.
for (let j = 2; j <= 20; j+=2){
    console.log(j)
}

// 3. Write a for loop that calculates and prints the sum of numbers from 1 to 100 (use an accumulator variable, e.g. sumTotal, starting at 0, adding i each iteration).
let sumTotal = 0;
for (let k = 0; k <= 100; k++){
    sumTotal += k;  
}
console.log(sumTotal);

// 4. Edge case thinking: What happens if the starting condition is already false, like this?
for (let p = 10; p <= 5; p++) {
  console.log(p);
}
// nothing happens beacause itself is false.

// 5. Logical thinking problem: Write a for loop that prints numbers 1 to 20, but for multiples of 3, print "Fizz" instead of the number (this is a simplified taste of the classic "FizzBuzz" problem — don't worry about multiples of 5 yet, we'll build the full version later with more logic).
for (let l = 1; l <= 20; l++){
    if (l%3 === 0){
        console.log("fizz")
    }
    else{
        console.log(l)
    }
}

// 6. Write a for loop that prints numbers from 10 down to 1 (counting backwards).
for (let m = 10; m >= 1; m--){
    console.log(m);
}

// 7. Write a for loop that prints all odd numbers from 1 to 15.
for (let n = 1; n <= 15; n+=2){
    console.log(n);
}

// 8. Write a for loop that calculates and prints the sum of all even numbers from 1 to 50 (use an accumulator variable, e.g. evenSum, starting at 0).
let evensum = 0;
for (let o = 1; o <= 50; o++){
    if (o%2 === 0){
        evensum+=o;
    }
}
console.log(evensum);

// 9. Write a for loop that prints the multiplication table of 7 (i.e., 7 x 1 = 7, 7 x 2 = 14, ... up to 7 x 10 = 70), using template literals for clean output.
for (let q = 1; q <= 10; q++){
    console.log(`7x${q}=${7*q}`);
}

// 10. Write a for loop that counts how many numbers between 1 and 50 are divisible by both 3 and 5 (use an accumulator variable, e.g. divisibleCount, and the modulus operator with &&).
let divisibleCount = 0;
for (let r = 1; r <= 50; r++){
    if (r%3 === 0 && r%5 === 0){
        divisibleCount += 1;
    }
}
console.log(divisibleCount);

// 6B) THE while loop
console.log('while loop')
/*
INITIALIZE counter (before loop)
while (CONDITION) {
  CODE
  UPDATE counter (inside loop, manually!)
}
*/

// 1. Write a while loop that prints numbers 1 to 10.
let s = 1;
while (s <= 10){
    console.log(s);
    s++;
}

// 2. Write a while loop that prints all multiples of 4 from 4 to 40.
let t = 4;
while (t <= 40){
    console.log(t);
    t+=4;
}

// 3. Write a while loop that keeps dividing a number startValue = 256 by 2 until it becomes 1 or less, printing the value at each step, and count how many divisions it took (variable stepCount).
let divide_value = 256;
let count_divide_value = 0
while (divide_value > 1){
    divide_value = divide_value/2;
    console.log(divide_value);
    count_divide_value+=1;
}
console.log(count_divide_value);

// 4. Edge case thinking: What happens with this code? Predict first, then (carefully — be ready to stop execution if needed) reason through why, WITHOUT actually running it if you suspect it's infinite:
/*
let counter5 = 10;
while (counter5 > 0) {
  console.log(counter5);
  counter5++;
}
*/ 
// its going to crash. while stops when condition is true, but the code is written wrong istead of counter5++ we have to write counter--;

// 5. Logical thinking problem: Write a while loop that finds and prints the first number greater than 100 that is divisible by 7 (start checking from 101 upward, use a variable checkNum).
let u = 100;
while (true){
    if (u%7 === 0){
        console.log(u)
        break
    }
    u++;
}

// 6. Write a while loop that prints numbers from 20 down to 1 (counting backwards), using a variable countdown.
let countdown = 20;
while (countdown >= 1){
    console.log(countdown);
    countdown--;
}

// 7. Write a while loop that sums all numbers from 1 to 30 (accumulator variable runningSum), and prints the final sum after the loop ends.
let running_sum_value = 1;
let running_value = 0;
while (running_sum_value <= 30){
    running_value+=running_sum_value;
    running_sum_value++;
}
console.log(running_value)

// 8. Write a while loop that finds the first power of 2 greater than 500 (start from powerVal = 1, keep doubling — powerVal *= 2 — until the condition is met, use break to stop once found).
let powerval = 1
while (powerval){
    if (2**powerval > 500){
        break
    }
    powerval++;
}
console.log(2**powerval)

// 9. Edge case thinking: Write a while loop using a variable attempts = 0 that simulates a login system — it should print "Trying login..." and increment attempts each time, but must stop after exactly 5 attempts using a condition (not break). Predict what would happen if you accidentally wrote the condition as attempts <= 5 instead of attempts < 5 — how many times would it print?
// ANS: 6 times

// 10. Logical thinking problem: Write a while loop that finds the sum of digits of a number numToSum = 4587 (hint: use numToSum % 10 to get the last digit, add it to a digitSum accumulator, then use numToSum = Math.floor(numToSum / 10) to remove the last digit — loop until numToSum becomes 0). This is a classic loop pattern used constantly in real coding interviews.
let numToSum = "4587";
let split = 0;
let sum = 0;

while (split < numToSum.length) {
    sum += Number(numToSum[split]);
    split++;
}

console.log(sum);

// ================================================================================================================================================================================================================================= //

// 6C) DO WHILE LOOP

/*
do {
  // code runs at least once
} while (condition);   // note the semicolon at the end — required!
*/

// ====================================================================================================================================================================================================================================== //

// FOR... of loop
// 1. Create an array numbers1 = [10, 20, 30, 40, 50] and use for...of to print each value.
let numbers1 = [10,20,30,40,50];
for (let number1 of numbers1){
    console.log(number1);
}

// 2. Create a string sentence1 = "JavaScript is fun" and use for...of to count how many vowels (a, e, i, o, u — case-insensitive) it contains (accumulator variable vowelCount).
let sentence1 = "JavaScript is fun"
let vowelCount = 0
for (let sentence of sentence1){
    if (sentence === "a" || sentence === "e" || sentence ==="i" || sentence ==="o" || sentence ==="u"){
        vowelCount+=1
    }
}
console.log(vowelCount);

// 3. Create an array prices1 = [100, 250, 80, 300, 150] and use for...of to calculate the total sum (accumulator totalPrice) and separately find the maximum value (variable maxPrice, initialize it smartly — think about what a safe starting value would be).
let prices1 = [100, 250, 80, 300, 150]
let totalprice = 0;
let maxprice = prices1[0];

for (let price of prices1){
    totalprice+=price;
    if (price > maxprice){
        maxprice = price;
    }
}
console.log(totalprice)
console.log(maxprice);

// 4. Edge case thinking: What happens when you run for...of on an empty array? Predict, then verify:

/*
let emptyArr1 = [];
for (let item of emptyArr1) {
  console.log(item);
}
console.log("Loop finished");
*/

// ans: "loop finished" will print.

// 5. Logical thinking problem: Create an array mixedArr1 = [5, "10", 15, "20", 25] (a mix of numbers and strings). Use for...of to print ONLY the actual numbers (not strings), and explain how you check the type of each item during iteration.
let mixedArr1 = [5, "10", 15, "20", 25]
for (let mix of mixedArr1){
    if (typeof mix === "number"){
        console.log(mix)
    }
}

// 6. Create a string word2 = "CODE" and use for...in to print each index (not the character) — observe what type of value each index actually is (hint: check with typeof).
// 7. Using the same string word2 = "CODE", use for...in to print each character by using the index to access it (word2[index]), and compare this output to what a for...of loop would give you directly — note which one required more steps to get the same result.
let word2 = "CODE";
for (let index = 0; index < word2.length; index++){
    console.log(index,word2[index], (typeof word2[index]));
}

// combined both the questions


// ================================================================================================================================================================================ //
// 6E) LOOP... in 
// 1. Create an object car1 = { brand: "Toyota", model: "Corolla", year: 2022 } and use for...in to print each key and its value in the format "brand: Toyota".
let car1 = { brand: "Toyota",
            model: "Corolla", 
            year: 2022 };

for (let key in car1){
    console.log(`${key}:${car1[key]}`)
}

// 2. Create an object marks1 = { physics: 88, chemistry: 76, biology: 95 } and use for...in to calculate the total and average of all subject marks (accumulators totalMarks, avgMarks).
let marks1 = { physics: 88, chemistry: 76, biology: 95 }
let totalmarks = 0;
let avgmarks = 0;
let avg_dividend = 0

for (let subject in marks1){
    totalmarks+= marks1[subject];
    avg_dividend++;
}
avgmarks = totalmarks/avg_dividend;

console.log(`total marks combined: ${totalmarks}`);
console.log(`average of total marks: ${avgmarks}`);

// 3. Create an object inventory1 = { apples: 50, bananas: 30, oranges: 0, grapes: 20 } and use for...in to print only the items that are out of stock (value equals 0).
let inventory1 = { apples: 50, bananas: 30, oranges: 0, grapes: 20 }
for (let key in inventory1){
    if (inventory1[key] === 0){
        console.log(key);
    }
}

// 4. Edge case thinking: What happens when you run for...in on an empty object? Predict, then verify:
/*
let emptyObj1 = {};
for (let key in emptyObj1) {
  console.log(key);
}
console.log("Done checking empty object");
*/

// ANS: it prints Done checking empty object

// Logical thinking problem: Create an object scores1 = { alice: 78, bob: 92, charlie: 65, dave: 88 }. Use for...in to find the key with the highest value (i.e., figure out who scored the highest) — print both the name and the score. Think about what variables you need to track as you loop (hint: you'll need to store both the best key AND best value seen so far).
let scores1 = { alice: 78, bob: 92, charlie: 65, dave: 88 }
let highest_value = 0;
let name_of_highscorer;

for (let score in scores1){
    if (scores1[score] > highest_value){
        highest_value = scores1[score]
        name_of_highscorer = score
    }
}
console.log(`${name_of_highscorer}:${highest_value}`)

// ========================================================================================================================================================================================================================================================================== //
// Topic 7: Loop control

// 1. Write a for loop from 1 to 20 that stops completely (break) as soon as it finds a number divisible by 7.
for (let z1 = 1; z1 <= 20; z1++){
    if (z1%7 === 0){
        break  
    }
    console.log(z1)
}

// 2. Write a for loop from 1 to 20 that prints all numbers EXCEPT multiples of 3 (use continue to skip them).
for (let y1 = 1; y1 <= 20; y1++){
    if (y1%3 === 0) continue;
    console.log(y1)
}

// 3. Given an array passwords1 = ["abc123", "hello", "pass1234", "qwerty", "letmein9"], use a loop and break to find and print the first password with length greater than 8, then stop searching immediately.
let passwords1 = ["abc123", "hello", "pass1234", "qwerty", "letmein9"];
for (let password of passwords1){
    if (password.length === 8){
        console.log(password)
        break;
    } 
}

// 4. Edge case thinking: Predict the output, then verify — explain what's different here vs a normal break:
/*
let total2 = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  total2 += i;
}
console.log(total2);
*/

/* ans = if we use break: total2 = 1
        if we use continue: total2 = 9
*/

// 5. Logical thinking problem: Write a loop over the array transactions1 = [200, -50, 300, "invalid", 150, -1000, 400] that sums only the valid positive numbers (skip anything that's not a number using continue, and skip/stop entirely — using break — the moment you encounter a negative number less than -500, treating it as a critical error that halts processing). This combines both continue and break in one loop.
let transactions1 = [200, -50, 300, "invalid", 150, -1000, 400];
trans_sum = 0
for (let trans of transactions1){
    if ((typeof trans) === "string" || trans < 0){
        continue;
        if (trans < -500){
            break;
        }trans_sum+=trans;
    }
}
console.log(trans_sum);
//