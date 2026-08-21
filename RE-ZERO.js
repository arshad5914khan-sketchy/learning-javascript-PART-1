// 1. Just before </body>
// 2. <script src="app.js"></script>
// 3. console.log("hello,JavaScript!")
// 4. alert("hello")

/* 5. Combined: Create an HTML page with a <h1> heading and a linked external JS file that changes the
heading text to "JS Loaded!" once the page loads.*/

document.getElementById("first").textContent = "js Loaded !";

/* 6.  Combined: Build a page with a button. Style it with basic CSS 
(padding, background color), and use JS so clicking it logs "Button clicked!" to the console. */

document.getElementById("click").onclick = function(){
    document.getElementById("clickit").textContent = "Button clicked"
}


// variables //
// 1. let
// 2. c) 2ndName
/* 3. 
let name =  'arshad';
let age = 20;
let city = "warangal"
console.log(`${name} is ${age} years old from ${city}`)
*/
/* 4.
let score = 10;
console.log(score);
score = 20;
console.log(score);
*/

/* 5.
Combined: Create a form with an input field for a name. On button click, read the input value into a 
JS variable and display "Hello, <name>!" inside a styled <p> tag.

document.getElementById("button1").onclick = function(){
    const name = document.getElementById("input1").value;
    document.getElementById("para").textContent = `hello ${name} !`;
};
*/

/* 6. Combined: Build a page with three colored boxes (divs styled via CSS). 
Store their colors in variables and set each box's background color using JS.
*/

let color1 = "red";
let color2 = "blue";
let color3 = "green";

document.getElementById("contain1").style.backgroundColor = color1;
document.getElementById("contain2").style.backgroundColor = color2;
document.getElementById("contain3").style.backgroundColor = color3;


// Arithmetic Operators
// 1. B) 1
console.log(10%3);
// 2. b) 8
console.log(2**3);
// 3. 
let a = 15;
let b = 4;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a++);
console.log(b--);
console.log(a%b);
// 4.

const input = document.getElementById("i1")
const click = document.getElementById("b1")

click.onclick = function(){
    if (input.value%2 === 0){
        console.log("even number")
    }
    else{
        console.log("odd number")
}
}

/* accept user input
let n = prompt("what's your name");
let m = prompt("what is your age");
console.log(`hi my name is ${n} and i am ${m} years old`)
// numbers
let num1 = prompt("enter the value-1");
let num2 = prompt("enter the value-2");
console.log(Number(num1)+Number(num2));
*/

// 