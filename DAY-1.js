// log is used to execute action in websites console
console.log(`HELLO !`);
console.log(`i like JS`);

// window.alert is used for pop notification in website
window.alert(`WASSUPPPPPPPPPPP`);
window.alert(`WASSUPPPPPPPPPPP`);

/* second way
   for commentting
*/

document.getElementById("i").textContent = `hello!`;
// VARIABLE

let x;
x = 123;
let y = 19.44;

console.log(x);
console.log(y);

// usage of (` `) and $: it is used to put string and int together
console.log(`TOTAL NO.OF STUDENT ${x} and there average is ${y}`);

// type of variable
let a = "arshad"; //string
let b = 2005; 
let c = 20.5;
let d = true; // boolean

console.log(a);
console.log(typeof a);

console.log(b);
console.log(typeof b);

console.log(c);
console.log(typeof c);

console.log(`everyone is happy: ${d}`);
console.log(typeof d);


/* text content on webpage with the help of 
   document.getElementId("id").textContent = ` `;
*/

let fullname = 'khan';
let class_room = "12";
let college = "sr university"

document.getElementById("p1").textContent = fullname;
document.getElementById("p2").textContent = class_room;
document.getElementById("p3").textContent = college;
