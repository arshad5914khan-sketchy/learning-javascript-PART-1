// METHOD CHAINING //

let username = 'brocodE'
// turn this word into Brocode
// without method chaining
username.trim();

let first_letter = username.charAt(0);
first_letter = first_letter.toUpperCase();
let second_letter = username.charAt(username.indexOf("c"));
second_letter = second_letter.toUpperCase();
let first_lower = username.slice(1,username.indexOf('c'));
first_lower = first_lower.toLowerCase();
let second_lower = username.slice(username.indexOf('c')+1);
second_lower = second_lower.toLowerCase()

let name = first_letter + first_lower + second_letter + second_lower;
console.log(name);


// method chaining
username = username.trim().charAt(0).toUpperCase() + username.slice(1,username.indexOf("c")).toLowerCase() + username.charAt(username.indexOf("c")).toUpperCase() + username.slice(username.indexOf("c")+1).toLowerCase();
console.log(username);

// this way we can implement method inside method 