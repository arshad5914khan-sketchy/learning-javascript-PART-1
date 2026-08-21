// ========================= SECTION - A ======================== //

/* MULTIPLE CHOICE 


// 1. Which keyword declares a variable that CANNOT be reassigned? a) var b) let c) const d) static
// ANS. const

// 2. What is the result of 10 % 3 in JavaScript? a) 3.33 b) 1 c) 3 d) 0
console.log(10 % 3);
// 1

// 3. Which function is used to get input from a user in a browser popup? a) console.log() b) prompt() c) input() d) getUserInput()
// window.prompt("enter?");
// prompt() : its used for pop-up on browser page

// 4. What does Number("42") return? a) "42" (string) b) 42 (number) c) NaN d) undefined
console.log(Number("42"))

// 5. What will console.log(typeof "5" + 5) print? a) 10 b) "55" c) "string5" d) "undefined5"
console.log(typeof "5" + 5)
console.log(typeof (typeof "5"+5)) // this answer is also string 
// the addition of values is all that matters here, typeof "5" = string and 5 makes string5

// 6. Which Math object method rounds a number DOWN to the nearest integer? a) Math.round() b) Math.ceil() c) Math.floor() d) Math.trunc()
const a = 2.44;
console.log(Math.floor(a));
// math.floor rounds down to lower integer

// 7. Which expression generates a random decimal number between 0 (inclusive) and 1 (exclusive)? a) Math.random() b) Math.rand() c) Math.randomNumber() d) random()
console.log(Math.random());

// 8. What is the correct syntax for an if-else statement in JavaScript? a) if x > 5 then {...} else {...} b) if (x > 5) {...} else {...} c) if x > 5: {...} else: {...} d) when (x > 5) {...} otherwise {...}
age = window.prompt('enter the age ?');
age = Number(age)

if (age < 18){
    console.log("minor")
}
else{
    console.log("major")
}

// OPTION - 2: if (x > 5) {...} else {...}

// 9. In an HTML checkbox, which JavaScript property tells you whether it is ticked? a) .selected b) .value c) .checked d) .active
// c) .checked

// 10. What is the general syntax of the ternary operator? a) condition ? valueIfTrue : valueIfFalse b) condition : valueIfTrue ? valueIfFalse c) if condition ? true : false d) condition => valueIfTrue, valueIfFalse
let answer = (age < 18) ? console.log("minor") : console.log("major");
console.log(answer);

// a) condition ? valueIfTrue : valueIfFalse

// 11. In a switch statement, what keyword prevents "fall-through" to the next case? a) stop b) exit c) break d) end
// c). break - statement will help pausing fall - through

// 12. Which string method returns a portion of a string given a start and end index WITHOUT modifying the original string? a) .split() b) .slice() c) .concat() d) .replace()
// b) .slice

// 13. What does "Hello World".toUpperCase() return? a) "hello world" b) "HELLO WORLD" c) "Hello World" d) An error
console.log("helo world".toUpperCase());

// 14. What is the difference between let and const? a) let is for numbers, const is for strings b) const variables can be reassigned, let cannot c) let variables can be reassigned, const cannot d) There is no difference
// c) let variables can be reassigned, const cannot

// 15. What will "5" == 5 return in JavaScript (loose equality)? a) true b) false c) undefined d) It throws an error
// it will return A) True because of loose equalitity 



*/

/*
// ===================== SECTION - B ============================== //
// 16. Declare a variable called age using let and assign it the value 20. Then declare a constant called PI and assign it 3.14159.
let age = 20;
const pi = 3.14434353;
console.log(age);
console.log(pi);

// 17. Write a program that takes two numbers using prompt(), converts them to numbers, and prints their sum, difference, product, and quotient.
let a = window.prompt("value-1:");
let b = window.prompt("value-2:");
a = Number(a)
b = Number(b)
console.log(`add:${a+b}`);
console.log(`sub:${a-b}`);
console.log(`multiple:${a*b}`);
console.log(`quotient:${a/b}`);

// 18. Write a function isEven(num) that returns true if a number is even and false if it is odd (use the modulus operator).
const even_odd = document.getElementById("input1");
const submit = document.getElementById("submit1");

submit.onclick = function() {
    const value = even_odd.value;
    if (value%2 === 0){
        document.getElementById("display").textContent = "even number"
    }
    else{
        document.getElementById("display").textContent = "odd number"
    }
}

// 19. Write code that takes a string input from the user using prompt() and prints out its length.
d = window.prompt("enter the word:")
console.log(d.length)

// 20. Use Math.floor() and Math.random() to generate a random whole number between 1 and 100 (inclusive). Print the result.
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

*/
/*
// ================================== SECTION - B(2) ========================= //
// 21. Write an if-else chain that takes a numeric grade (0–100) and prints the letter grade: 90+ = "A", 80–89 = "B", 70–79 = "C", 60–69 = "D", below 60 = "F".
let submit = document.getElementById("submit")
let display = document.getElementById("display")
submit.onclick = function() {
    const marks = Number(document.getElementById("marks").value);
    if (marks >= 90){
        display.textContent = "A"
    }
    else if (marks >= 80){
        display.textContent = "B"
    }
    else if (marks >= 70){
        display.textContent = "C"
    }
    else if (marks >= 60){
        display.textContent = "D"
    }
    else if (marks < 60){
        display.textContent = "E"
    }
};

// 22. Rewrite the following if-else statement using a ternary operator:

let message;
if (age >= 18) {
  message = "Adult";
} else {
  message = "Minor";
}

let age = 15;
let message = (age < 18) ? "minor" : "major"
console.log(message)


// 23. Write a switch statement that takes a variable day (1–7) and prints the name of the day of the week (1 = "Monday", 2 = "Tuesday", etc.). Include a default case for invalid input.
let day = 10;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break
    case 4:
        console.log("thrusday");
        break
    case 5:
        console.log("friday");
        break
    case 6:
        console.log("saturday");
        break
    case 7:
        console.log("sunday");
        break
    default:
        console.log("unknown number")
}

// 24. Given the string let name = "JavaScript Developer";, write code using string slicing to extract just the word "JavaScript" (without using .split()).
let name = "JavaScript Developer";
console.log(name.slice(0, name.indexOf(" ")));

// 25. Write a program that converts a string like "true" 
// (boolean stored as a string) into an actual boolean value, and explain in a comment why simple Boolean() conversion can be tricky here.
let word = "true";
console.log(Boolean(word))
*/

// ================================ SECTION - C ================================== //
// 26. Create an HTML button and a <p> element. 
// When the button is clicked, use JavaScript to change the paragraph's text to 
// "Button was clicked!" 
// and style it with CSS so the text turns red.

let click1 = document.getElementById("button1")

click1.onclick = function(){
    let para1 = document.getElementById("text1")
    para1.textContent = "YOU CLICKED !"
}
// DONE