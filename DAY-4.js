// math

/*
// pi = 3.14
// euler number = E =  2.71 (used in log)

let d = Math.PI;
let e = Math.E;
console.log(d);
console.log(e);

// ROUND : rounding off the value
let x = 3.2;
let y = 3.5;
let z = 3.8;
console.log(Math.round(x)); // if value is below .5 it rounds down to 3
console.log(Math.round(y)); // if value is above and .5 its rounds up to 4
console.log(Math.round(z)); // if value is above and .5 its rounds up to 4

// FLOOR: only round's down the value

console.log(Math.floor(z)); // z = 3.8 after floor its 3

// CEIL : rounding up the values

console.log(Math.ceil(x)); // x = 3.2 after ceil its 4

// TRUNC : remove all the decimals

let a = 5.1456367654321;
console.log(Math.trunc(a)); 

// POWER : X^Y
let x1 = 3;
let x2 = 2;
console.log(Math.pow(x1,x2));

// square root: sqrt of value

let a1 = 100;
console.log(Math.sqrt(a1));

// log: applying the log

let a2 = 67;
console.log(Math.log(a));

// TRIGNOMETRIC VALUES : SIN,COS,TAN are also used

// absolute value: always gives +ve value
console.log(Math.abs(-345));

// MAX : Maximum value amongest the give set of value
console.log(Math.max(2,5,98));

// MIN : Minimum value amongest the give set of value
console.log(Math.min(2,5,-1));
*/
//--------------------------------------------------------//

// RANDOM NUMBER GENERATOR

console.log(Math.random());
// math.random provides random numbers between 0 and 1

// lets say we play a dice game. i want numbers from 1 to 6

// if we want numbers in range max and min
//let result = Math.floor(Math.random() * (max-min+1)) + min;

let max = 6;
let min = 1;


document.getElementById('button').onclick = function(){
    let dice = Math.floor(Math.random()*max)+min;
    document.getElementById('random').textContent = dice;
    console.log(dice)
}