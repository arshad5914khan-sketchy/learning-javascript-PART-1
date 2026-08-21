// declaration of 2 variables
let age = 25;
let price = 12.85;
let gpa = 8.3;
let name = "arshad"
let bool = true;

document.getElementById("p").textContent = `${name}'s age is ${age} and studies at SR university with GPA of ${gpa} and shawarma at his campus is ${price}`

console.log(typeof age);
console.log(typeof name);
console.log(typeof bool);


// operations
let student = 30;
let new_entry = 5;
let left_entry = 3;
let double_it = 2;
let mod_it = 4;
let divide_it = 2;
let square_it = 2;
let s_student = student;

console.log(student+=new_entry);
console.log(student-=left_entry);
console.log(student*double_it);
console.log(s_student%mod_it);
console.log(student/=divide_it);
console.log(student**=square_it);


// How to accept the user input

// 1. EASY WAY = window prompt
//let username;
//username = window.prompt(`what's your name ?`)
//console.log(username);

// PROFESSIONAL WAY = HTML textbook

let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("p1").textContent = username
    console.log(username);
}

// TYPE CONVERSION

let a = window.prompt("how old are you ?");
a = Number(age);

a+=1;
console.log(a);