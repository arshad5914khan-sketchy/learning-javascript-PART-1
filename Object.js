// TOPIC 16: Objects (Properties, Methods, this)
/*
ARYA 16 sub-topics:

16a: Creating objects & accessing properties (dot vs bracket notation)
16b: Modifying objects (add, update, delete properties)
16c: Methods & this
16d: Checking property existence + nested objects (preview)
*/

// 16a: Creating Objects & Accessing Properties

// 1. Create an object book1 = { title: "1984", author: "George Orwell", year: 1949 }. Print all three properties using dot notation.
let book1 = { title: "1984", 
    author: "George Orwell", 
    year: 1949 };
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
// for .notion we don't need " " for key names

/*
for (let key in book1){
    console.log(book1[key])
}
*/

// 2. Using the same book1 object, print title and author using bracket notation instead.
console.log(book1["title"]);
console.log(book1["author"]);
// for [] notion we need " " for key names

// 3. Create a variable propName1 = "year" and use it with bracket notation to print book1's year — this demonstrates WHY bracket notation exists (dot notation can't do this).
let propName1 = "year";
console.log(book1[propName1]);

// 4.Edge case thinking: Predict the output, then verify — explain why one line works and the other doesn't:
/*
let car3 = { brand: "Toyota", model: "Corolla" };
let field1 = "brand";

console.log(car3[field1]);  // for [] notion we need " " for key names 
console.log(car3.field1);  // . notion understand hardcoded word directly. 
*/

// 5. Logical thinking problem: Create an object prices6 = { apple: 50, banana: 20, cherry: 100 } and a variable fruitToCheck1 = "banana". Use bracket notation to dynamically fetch the price, then print "The price of {fruit} is {price}" using a template literal. Explain why this specific task would be impossible (or very awkward) using only dot notation.
let prices6 = { apple: 50, banana: 20, cherry: 100 }
let fruitToCheck1 = "banana";
console.log(`the price of ${fruitToCheck1} is ${prices6[fruitToCheck1]}`)
// . notion need the hardcoded key name to get the value

// ARYA 16b: Modifying Objects (Add, Update, Delete)


// 1. Create an object laptop1 = { brand: "Dell", ram: 8 }. Update ram to 16, then add a new property storage: 512. Print the object after each change.
let laptop1 = { brand: "Dell", ram: 8 };
laptop1['ram'] = 16; // [] notion
laptop1.storage = 512; // . notion
console.log(laptop1);

// 2. Create an object employee1 = { name: "Riya", department: "Sales", salary: 40000 }. Give the employee a raise by updating salary to 45000, then delete the department property (they've decided to keep it private). Print the final object.
let employee1 = { name: "Riya", department: "Sales", salary: 40000 };
employee1.salary = 45000;
delete employee1.department;
console.log(employee1);

// 3. Create an empty object settings2 = {}, then use a loop with an array of keys keysToAdd1 = ["volume", "brightness", "contrast"] and a matching array of values valuesToAdd1 = [70, 80, 60] to dynamically build the object using bracket notation (you'll need a classic indexed for loop, combining Topic 6a + Topic 16 concepts).
let settings2 = {};
let keysToAdd1 = ["volume", "brightness", "contrast"];
let valuesToAdd1 = [70, 80, 60];

for (let i = 0; i < keysToAdd1.length; i++){
    settings2[keysToAdd1[i]] = valuesToAdd1[i];
}
console.log(settings2);

// 4. Edge case thinking: Predict the output, then verify — explain what happens when you try to delete a property that doesn't exist:
/*
let obj2 = { a: 1, b: 2 };
let deleteResult1 = delete obj2.c;   // "c" doesn't exist
console.log(deleteResult1);
console.log(obj2);
*/

// undefined
// { a: 1, b: 2 }

// 5. Logical thinking problem: Create a const object config1 = { mode: "light", fontSize: 14 }. Write code that attempts to update config1.fontSize to 16 (should work fine), then write a commented-out line showing what would happen if you tried config1 = { mode: "dark" } (should fail) — explain WHY one works and the other doesn't, connecting it back to what you learned about const with arrays in Topic 14.
const config1 = { mode: "light", fontSize: 14 };
config1.fontSize = 16; // upadating the object is acceptable.
console.log(config1)
// config1 = {mode:"dark"}; // reassignment is not possible
// this might work.
delete config1.fontSize;
config1.mode = "dark"
console.log(config1); // told ye 

// ARYA 16c: Methods & this

// method - 1: key: function()
let cal = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b
    },
    intro: function(){
        console.log(`the addition ${this.add(3,5)} and subtraction ${this.sub(9,5)}`)
    }
}
console.log(cal["add(3,5)"]); // [] notion doesn't work for it. we use .notion for functions inside objects.
console.log(cal.add(3,5));
console.log(cal.sub(3,5));
cal.intro();
// intro wouldn't work, but here's a thing. (this is a function or any built-in something which modifies the value of object within. when we applied this.add-> it won't provide anything beacause we still haven't given any arguments to work with so we give this.add(3,5) now its possible to get the print of statement.)

// (this) with regular key-value is predictable
let person10 = {
  name: "Kabir",
  age: 30,
  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
};

person10.introduce();   // "Hi, I'm Kabir and I'm 30 years old" — SAME method code, different result, because `this` adapts

// (this) used mostly modifiing the values inside the object itself

// NOTE: Arrow function breaks (this) better use normal function in objects. 

// this.function inside this.function
let rectangle2 = {
  width: 10,
  height: 5,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    console.log(`This rectangle has an area of ${this.calculateArea()}`);   // calling another method via this
  }
};

rectangle2.describe();   // "This rectangle has an area of 50"

// 1. Create an object rectangle3 with width: 8 and height: 4, plus a method calculateArea() using this that returns width * height. Call it and print the result.
let rectangle3 = {
    width:8,
    height:4,
    calculateArea(){
        return this.width*this.height
    }
};
console.log(rectangle3.height);
console.log(rectangle3.width);
console.log(rectangle3.calculateArea());

// 2. Create an object bankAccount4 with owner: "Meera" and balance: 2000, plus methods deposit(amount) and withdraw(amount) that modify this.balance. Perform a deposit of 500 and a withdrawal of 300, printing the balance after each operation.
let bankAccount4 ={
    owner:"Meera",
    balance:2000,
    deposit(amount){
        this.balance+=amount;
    },
    withdraw(amount){
        this.balance-=amount
    }
}

// depositing
bankAccount4.deposit(500);
console.log(bankAccount4.balance)

// withdrawal
bankAccount4.withdraw(300);
console.log(bankAccount4.balance);

// 3. Create an object circle1 with radius: 7, plus two methods: calculateArea() (returns Math.PI * radius * radius, use this.radius) and calculateCircumference() (returns 2 * Math.PI * radius, use this.radius). Call both and print the results.
let circle1 = {
    radius : 7,
    calculateArea(){
        return Math.PI*this.radius*this.radius;
    },
    calculateCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

console.log(circle1.calculateArea());
console.log(circle1.calculateCircumference());

// 4. Edge case thinking: Predict the output, then verify — explain precisely why the arrow method fails:

/*
let obj4 = {
  value: 100,
  getValueRegular: function() {
    return this.value;
  },
  getValueArrow: () => {
    return this.value;
  }
};

console.log(obj4.getValueRegular());
console.log(obj4.getValueArrow());
*/

// arrow function breaks the (this)

// 5. Logical thinking problem: Create an object student4 with name: "Zara", scores: [85, 90, 78], and a method getAverage() that uses this.scores combined with .reduce() (from Topic 15d!) to calculate and return the average score. Call the method and print the result — this combines object methods with array methods you already know.
let student4 = {
    name: "zara",
    score: [85,90,78],
    getaverage(){
        let average =  this.score.reduce((acc,value) => acc+value,0)
        return average/this.score.length;
    }
};
console.log(student4.getaverage())

// ARYA 16d: Checking Property Existence & Nested Objects

// 1. Create an object laptop2 = { brand: "Apple", price: 1200 }. Use in, .hasOwnProperty(), and the !== undefined check to verify "price" exists and "warranty" does not — print all results.
let laptop2 = { brand: "Apple", price: 1200 };

// undefined
console.log(laptop2.price !== undefined);
console.log(laptop2.warranty !== undefined);

// in 
console.log("price" in laptop2);
console.log("warranty" in laptop2);

// hasownproperty()
console.log(laptop2.hasOwnProperty("price"));
console.log(laptop2.hasOwnProperty("warranty"));

// 2. Create a nested object student5 = { name: "Aisha", grades: { math: 90, science: 85 } }. Print student5.grades.math, then update student5.grades.science to 95, then print the whole grades object.
let students5 = { name: "Aisha",
                 grades: { math: 90, science: 85 }
                }

console.log(students5.grades.math);
students5.grades.science = 95;
console.log(students5.grades);

// 3. Create an object company2 = { name: "StartupX", ceo: { name: "Rohan", age: 35 } }. Print the CEO's name using dot notation, then add a new nested property ceo.email = "rohan@startupx.com". Print the final ceo object.
let company2 = { name: "StartupX", 
                 ceo: { name: "Rohan", age: 35 } 
                }

console.log(company2.ceo.name);
company2.ceo.email = "rohan@startupx.com";
console.log(company2.ceo);

// 4. Edge case thinking: Predict the output, then verify — explain the error and how you'd prevent it:

/*
let profile1 = { username: "arshad_k" };
console.log(profile1.settings.theme);
*/

// undefined and error 
// prevention: create a nested object named settings and inside it place an key named theme.

// 5. Logical thinking problem: Create an array of objects employees1 = [{ name: "Ravi", dept: "IT", salary: 50000 }, { name: "Meera", dept: "HR", salary: 45000 }, { name: "Kabir", dept: "IT", salary: 55000 }]. Use .filter() (Topic 15c!) to get only employees in the "IT" department, then use .map() (Topic 15b!) to extract just their names into a new array itEmployeeNames1. This combines nested object access with array methods you already know.
let employees1 = [
    { name: "Ravi", dept: "IT", salary: 50000 },
    { name: "Meera", dept: "HR", salary: 45000 }, 
    { name: "Kabir", dept: "IT", salary: 55000 }
]

let IT_filter = employees1.filter(filter => filter.dept === "IT")
                          .map(filter => filter.name);

console.log(IT_filter);

// TOPIC 17. Object methods (Object.keys, values, entries)

// 1. Create an object movie1 = { title: "Inception", director: "Nolan", year: 2010, rating: 8.8 }. Use Object.keys(), Object.values(), and Object.entries() on it, printing all three results.

let movie1 = { title: "Inception", director: "Nolan", year: 2010, rating: 8.8 };
console.log(Object.keys(movie1));
console.log(Object.values(movie1));
console.log(Object.entries(movie1));

// TOPIC - 18: Nested Objects/Arrays & Deep vs Shallow Copy
// 1. Create an object settings4 = { volume: 50, brightness: 70 } (flat, no nesting). Create a shallow copy using spread, modify a property on the copy, and confirm the original is unaffected. Print both.
let settings4 = { volume: 50, brightness: 70 };
let settings5 = {...settings4};
settings5.volume = 10;
settings5.brightness = 20;
console.log(settings5);
console.log(settings4);

// 2. Create a nested object company3 = { name: "TechCorp", ceo: { name: "Rohan" } }. Create a shallow copy using spread, then modify copy.ceo.name. Print both company3.ceo.name and the copy's ceo.name — observe and explain why the original was affected.
let company3 = { name: "TechCorp", ceo: { name: "Rohan" } }
let company4 = {...company3};
// company4.ceo.name = "rishi";
// console.log(company3);
// console.log(company4);

// in shallow copy the surface level key and value is copied to do modification on nested level we need to apply sturcturedcopy()

// 3. Redo problem 2, but this time use structuredClone() to create a proper deep copy. Modify the deep copy's nested ceo.name, then confirm the original company3.ceo.name remains unchanged.
company5 = structuredClone(company3);
company5.ceo.name = "rishi"
console.log(company5);
console.log(company3);

// 4. Edge case thinking: Predict the output, then verify — explain why arrays of objects have the same shallow-copy pitfall:
/*
let team1 = [{ name: "Alice", score: 10 }, { name: "Bob", score: 20 }];
let teamCopy1 = [...team1];
teamCopy1[0].score = 999;
console.log(team1[0].score); // 999
console.log(teamCopy1[0].score); // 999
*/

// then again its same. shallow copy only copies surface level

// fixed it
let team1 = [{ name: "Alice", score: 10 }, { name: "Bob", score: 20 }];
let teamCopy1 = structuredClone(team1);
teamCopy1[0].score = 999;
console.log(team1[0].score);
console.log(teamCopy1[0].score);

// 5. Logical thinking problem: Create a nested object gameState1 = { player: "Hero", stats: { health: 100, mana: 50 } }. Write code that creates a deep copy called gameStateBackup1, then simulates "damage" by reducing gameState1.stats.health by 30. Print both objects to prove the backup retained the original health value of 100, demonstrating why deep copies are essential for things like save states/backups/undo systems.
let gameState1 = { player: "Hero", stats: { health: 100, mana: 50 } }
let gameStateBackup1 = structuredClone(gameState1);
gameStateBackup1.stats.health -= 30;
// reduced by 30 while securing original object
console.log(gameState1.stats.health);
console.log(gameStateBackup1.stats.health);
