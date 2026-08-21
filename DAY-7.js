/* STRING METHODS */

let username = "arshad";
// indexing - find charater with index
console.log(username.charAt(2)); // 2th - index

// finding index with character
console.log(username.indexOf("s"));

// lastindexof - used when we want to find the last repeating index
console.log(username.lastIndexOf("a"));

// length - length of the string
console.log(username.length);

// trim() - trims the excess spaces 
let username1 = "arShaD    ";
console.log(username1.trim());

// toUppercase() - uppercase the character
console.log(username.toUpperCase());

// toLowerCase() - lowercase the character
console.log(username1.toLowerCase());

// repeat - this repeats the string
console.log(username.repeat(3));

// startswith() - checks if string starts with particular character
console.log(username.startsWith("a"));

//endswith() - checks if string ends with particular character
console.log(username.endsWith("a"));

// includes() - does string contain this character
console.log(username.includes('z'));

// replaceall("old ch", "replaced with new character")
console.log(username.replaceAll('a',"A"));

// padstart() - will increase the size of string to a extent with a particular "chr" by adding infront of string
console.log(username.padStart(10,"a"))

// padend() - will increase the size of string to a extent with a particular "chr" by adding back of string
console.log(username.padEnd(10,"a"))



/* String slicing */

let name = "mohammedarshad"
console.log(`first name : ${name.slice(0,8)}`)

// in slicing(start,end). ending index : its inclusive
console.log(`middle name: ${name.slice(8,14)}`);

// find the characters though slicing
console.log(`first char: ${name.slice(0,1)}`);

// Example(1): naam = arshad khan
let naam = "arshad khan";
console.log(`first name:${naam.slice(0,naam.indexOf(" "))}`);
console.log(`last name: ${naam.slice((naam.indexOf(" ")+1))}`)


