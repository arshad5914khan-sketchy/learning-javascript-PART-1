//Countdown: Print numbers from 10 down to 1 using a while loop.
let num = 10;

while (num > 0){
    console.log(num)
    num--;
}

//  while - loop
/*
let loggedin = false;
let username;
let password;

while (!loggedin){
    username = window.prompt(`enter the username`);
    password = window.prompt(`enter the password:`);

    if (username === "arshad@2005" && password === '5914'){
        loggedin = true
        console.log("welcome, you have logged in")
        
    }
    else{
        console.log("incorrect username or password")
    }
};
*/
console.log("top - bottom")
// for loop: 1 -> 2 -> 3 -> 4 -> 5
for (let i = 1; i <= 5; i++){
    console.log(i)
}

console.log("bottom - top")
// for loop: 5 -> 4 -> 3 -> 2 -> 1
for (let j = 5; j >= 1; j--){
    console.log(j)
};

console.log("even number")
for (let k = 0; k <= 20; k++){
    if (k%2 === 0){
        console.log(k)
    }
};

console.log("odd number")
for (let l = 20; l >= 1; l-=1){
    if (l%2 !== 0){
        console.log(l)
    }
};


// number guessing game PREP
// 0 to 100
let num1 = Math.floor(Math.random()*100)+1;
console.log(num1);

// max and min range
let max = 50;
let min = 25;

console.log(Math.floor(Math.random()*(max-min+1))+min);

