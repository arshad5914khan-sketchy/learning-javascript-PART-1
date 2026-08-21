let fruits = ["apple", "banana", "coconuts", "mango"];

// elements acessing through index
console.log(fruits[2]);

// pop and push of elements
console.log(fruits.pop());
console.log(fruits.push("Guava"))

// shift and unshift

console.log(fruits.shift()); // remove from front
console.log(fruits.unshift("apple")); // add at front

// length of list

console.log(fruits.length);

// REGULAR VERSION

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let j = fruits.length; j >= 0; j--){
    console.log(fruits[j]);
}

// QUICK VERSION
console.log("quick version")
for (let fruit of fruits){
    console.log(fruit)
}

// another example

let num = [1,2,3,4,452,1]

for (let n of num){
    console.log(n)
}

