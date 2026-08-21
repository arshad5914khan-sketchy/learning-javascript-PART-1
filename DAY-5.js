// VOTER ID ELIGIBILITY
document.getElementById("submit1").onclick = function(){
    const age = document.getElementById('input').value;
    
    if (age >= 18){
        document.getElementById('eligibe').textContent = "YOU ARE ELIGIBLE TO VOTE";
    }
    else{
        document.getElementById('eligibe').textContent = "YOU ARE NOT ELIGIBLE TO VOTE";
    }
};

//IF/ELSE - problem
//PROBLEM-1
let num = 33;
if (num%2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

//PROBLEM-2
let num1 = 23;
if (num1 > 0){
    console.log('Positive')
}
else if (num1 == 0){
    console.log('Zero')
}
else{
    console.log('Negitive')
}

//PROBLEM - 3
// console.log(Math.max(12,45,-1))
let a = 12;
let b = 45;
let c = -1;
if (a > b && a > c) {
    console.log(Math.log(a))
}
else if (b > a && b > c){
    console.log(Math.log(b))
}
else{
    console.log(Math.log(c))
}

// PROBLEM - 4
let grades = 45;
if (grades >= 90){
    console.log("A")
}
else if (grades >= 80 && grades <= 89){
    console.log("B")
}
else if (grades >= 70 && grades <= 79){
    console.log("C")
}
else if (grades >= 60 && grades <= 69){
    console.log("D")
}
else{
    console.log("F")
}

// PROBLEM - 5
let fizz = 29;
if (fizz%3 == 0 && fizz%5 == 0) {
    console.log("FizzBuzz")
}
else if (fizz%3 == 0){
    console.log("Fizz")
}
else if (fizz%5 == 0){
    console.log("Buzz")
}
else{
    console.log(fizz)
}

// PROBLEM - 6
let ticket = 70;
if (ticket < 5){
    console.log("Free")
}
else if (ticket >= 5 && ticket <= 17){
    console.log("$10")
}
else if (ticket >= 18 && ticket <= 64){
    console.log("$20")
}
else if (ticket >= 65){
    console.log("$12")
}

// PROBLEM - 7: Login Validator
document.getElementById("submit").onclick = function(){
    const username = document.getElementById("username1").value;
    const password = document.getElementById("password1").value;

    if (username == "admin" && password == "1234"){
        document.getElementById("afterlogin").textContent = "LOGIN SUCCESSFULL";
    }
    else if (username != "admin" && password == "1234"){
        document.getElementById("afterlogin").textContent = "INVALID USERNAME";
    }
    else if (username == "admin" && password != "1234"){
        document.getElementById("afterlogin").textContent = "INVALID PASSWORD";
    }
    else{
        document.getElementById("afterlogin").textContent = "INVALID CREDITAIALS";
    }
    
};