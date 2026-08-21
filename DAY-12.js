// Create an array colors with 5 color names. Log the first and last color using .length (not hardcoded index).
let color = ['red','blue','green','crimson','teal']
console.log(color.length)

// Given let nums = [10, 20, 30], add 40 to the end and 5 to the start — without using push or unshift (hint: think of another way, or explain why it's tricky).
let nums = [10,20,30]
nums[nums.length] = 40;
nums[0] = 5;
console.log(nums)

// Edge case: What happens when you access an index that doesn't exist, like fruits[10] on a 3-element array? Predict the output, then verify.

console.log(color[10])

// Edge case: Declare const arr = [1,2,3]. Try reassigning arr = [4,5,6]. What error do you get, and why? Then show a correct way to replace all contents of arr while keeping it const.
/*
const arr = [1,2,3]
arr = [4,5,6]
console.log(arr)
*/
// Uncaught TypeError: Assignment to constant variable.

// Logical thinking: Without using .reverse(), write code to print an array's elements in reverse order using a loop and indexing.
for (let c of color){
    console.log(c)
}

// =================================================================== //
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

// sorting
let lst = [2,6,1,89,2]
console.log(lst.sort());

console.log(lst.sort().reverse());