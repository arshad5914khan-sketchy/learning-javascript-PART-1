// 14. Arrays (creation, indexing, mutation)

// 1. Create an array groceries1 = ["milk", "eggs", "bread"]. Print the first item, the last item (using .length - 1, not a hardcoded index), and the total count.
let groceries1 = ["milk", "eggs", "bread"];
console.log(groceries1[0]);
console.log(groceries1[groceries1.length-1]);

// 2. Given numbers3 = [5, 10, 15, 20, 25], use push to add 30 to the end, unshift to add 0 to the beginning, then pop to remove the last element. Print the array after each step.
let numbers3 = [5, 10, 15, 20, 25];
numbers3.push(30);
console.log(numbers3);
numbers3.unshift(0);
console.log(numbers3);
numbers3.pop()
console.log(numbers3)

// 3. Given inventory2 = ["pen", "pencil", "eraser", "ruler"], check if "marker" exists using .includes(), find the index of "eraser" using .indexOf(), and replace "pencil" with "crayon" using direct index assignment.
let inventory2 = ["pen", "pencil", "eraser", "ruler"];
console.log(inventory2.includes("marker"));
console.log(inventory2.indexOf("eraser"));
inventory2[inventory2.indexOf("pencil")] = "crayon";
console.log(inventory2);

// 4. Edge case thinking: Predict the output, then verify — explain why:
/*
let arr3 = [1, 2, 3];
console.log(arr3[10]);
arr3[10] = 100;
console.log(arr3);
console.log(arr3.length);
*/

// undefined

// 5. Logical thinking problem: Write a loop (any type you prefer) that goes through an array temps1 = [30, 45, 22, 38, 50, 19] and builds a NEW array hotDays1 containing only the temperatures greater than 35, using .push() inside the loop. Print hotDays1 at the end.
let temps1 = [30, 45, 22, 38, 50, 19];
let hotdays1 = []
for (let temp of temps1){
    if (temp > 35){
        hotdays1.push(temp)
    }
}
console.log(hotdays1);

// 15. Array methods (map, filter, reduce, forEach, find, sort, etc.)
/*
ARYA 15 sub-topics will be:

15a: .forEach()
15b: .map()
15c: .filter()
15d: .reduce()
15e: .find() / .findIndex()
15f: .sort()
15g: Other useful methods (.slice(), .splice(), .some(), .every(), .join(), .reverse(), .concat())
*/

// 15A. forEach() - its a alternative function to replace (for..of).

// 1. Create an array subjects1 = ["Math", "Science", "History", "Art"] and use .forEach() to print each subject in the format "Subject: {subject}".
let subjects1 = ["Math", "Science", "History", "Art"];

// regular functions
subjects1.forEach(function(values,index){
    console.log(`${index}:${values}`)
});

// arrow method
subjects1.forEach((values,index) => {
    console.log(`${index}:${values}`)
});

// most i perfer the regular method.

// 2. Create an array prices2 = [100, 250, 80, 300] and use .forEach() (with the index parameter) to print "Item {index + 1}: ${price}" for each price (so numbering starts at 1, not 0).
let prices2 = [100, 250, 80, 300];
prices2.forEach(function(price,index){
    console.log(`index ${index+1}: ${price}`)
});

// 3. Create an array temps2 = [30, 45, 22, 38, 50, 19] and use .forEach() to print only the temperatures greater than 35 (use an if inside the callback — this does NOT build a new array, just prints).
let temps2 = [30, 45, 22, 38, 50, 19];
temps2.forEach(function(num){
    if (num > 35){
        console.log(num);
    }
})

// 4. Edge case thinking: Predict the output, then verify — explain why the returned value is what it is:
/*
let arr4 = [1, 2, 3];
let output1 = arr4.forEach((num) => {
  return num * 10;
});
console.log(output1);
*/

// undefined : return doesn't work.

// 5. Logical thinking problem: Using .forEach(), calculate the sum of an array values1 = [10, 20, 30, 40] by using an external accumulator variable (declared outside the .forEach() call, updated inside the callback). Print the final sum. Think about why this works even though .forEach() itself doesn't return anything.
let final_sum = 0
let values1 = [10, 20, 30, 40];
values1.forEach(function(value){
    final_sum+= value;
});
console.log(final_sum);

// 15B. .map(): .map() loops through every element of an array, applies a callback to each one, and returns a brand new array containing the transformed results. Unlike .forEach(), .map() is built specifically for transforming data, not just side effects.

// i think foreach() function doesn't want to be variable. 

// i think .map() want a variable which represents new array. 

/*
let nums8 = [1, 2, 3];

// forEach — for side effects, returns undefined
let result4 = nums8.forEach((n) => n * 2);
console.log(result4);   // undefined

// map — for transforming, returns a usable new array
let result5 = nums8.map((n) => n * 2);
console.log(result5);   // [2, 4, 6]
*/

// 1. Create an array nums10 = [1, 2, 3, 4, 5] and use .map() to return a new array squaredNums1 where each number is squared. Print both nums10 (to confirm it's unchanged) and squaredNums1.
let nums10 = [1, 2, 3, 4, 5];
const squaredNums1 = nums10.map(function(num){
    return num**2
});

console.log(nums10);
console.log(squaredNums1);

// arrow function
const squarednums = nums10.map((num) => num**2);
console.log(squarednums)

// 2. Create an array names2 = ["arshad", "sara", "kabir"] and use .map() to return a new array capitalizedNames1 where each name has its first letter capitalized (hint: you'll need .charAt(0).toUpperCase() combined with .slice(1) — look up how to combine these, since string methods haven't been formally covered yet, this is a small preview/challenge).
let names2 = ["arshad", "sara", "kabir"];
let capitalizedNames1 = names2.map((captial) => captial[0].toUpperCase() + captial.slice(1));
console.log(capitalizedNames1)

// 3. Create an array prices4 = [50, 100, 150] and use .map() to return a new array discountedPrices1 where each price has a 10% discount applied (multiply by 0.9).
let prices4 = [50, 100, 150];
let discountedPrices1 = prices4.map(function(discount){
    return discount*0.9
})

console.log(discountedPrices1);

// 4. Edge case thinking: Predict the output, then verify — explain why the LENGTH stays the same even with conditional logic inside:
/*
let nums11 = [1, 2, 3, 4, 5];
let mapped2 = nums11.map((num) => {
  if (num % 2 === 0) {
    return num;
  }
  return null;
});
console.log(mapped2);
console.log(mapped2.length);
*/

// [null, 2, null, 4, null]
// length : 5
// how do we fix it. real answer : [2,4] and length : 2

// 5. Logical thinking problem: Create an array students2 = ["Aisha", "Rohan", "Meera"] and an array scores4 = [85, 45, 92] (matched by index, like in the Module 3 grand test). Use .map() on students2 (with the index parameter) to build a new array reportCards1 where each entry is a string like "Aisha: 85 (Pass)" or "Rohan: 45 (Fail)" — pass if score >= 50, fail otherwise. This combines .map() with index-based cross-referencing between two arrays, plus a ternary.

let students2 = ["Aisha", "Rohan", "Meera"];
let scores4 = [85, 45, 92];
let reportCards1 = students2.map(function(names,index){
    return ` ${names} : ${scores4[index]}  ${(scores4[index] >= 50 ? "pass":"fail")}`
})

console.log(reportCards1);

// 15C. .filter(): it provides the filtered list based on the conditions 

// 1. Create an array nums16 = [12, 5, 8, 30, 17, 22, 3] and use .filter() to return a new array bigNums2 containing only numbers greater than 15.
let nums16 = [12, 5, 8, 30, 17, 22, 3];
let bigNums2 = nums16.filter((num) => num > 15);
console.log(bigNums2);

// 2. Create an array words1 = ["cat", "elephant", "dog", "hippopotamus", "ant"] and use .filter() to return a new array longWords1 containing only words with more than 4 characters (hint: .length works on strings too).
let words1 = ["cat", "elephant", "dog", "hippopotamus", "ant"];
let longWords1 = words1.filter((word) => word.length > 4);
console.log(longWords1);

// 3. Create an array people1 = ["Alice", "bob", "Charlie", "dave", "Eve"] and use .filter() to return a new array capitalizedNames2 containing only names that start with an uppercase letter (hint: compare name[0] to name[0].toUpperCase() — if they're equal, it was already uppercase).
let people1 = ["Alice", "bob", "Charlie", "dave", "Eve"];
let capitalizedNames2 = people1.filter((people) => people[0] === people[0].toUpperCase());

console.log(capitalizedNames2);

// 4. Edge case thinking: Predict the output, then verify — explain what happens when the callback DOESN'T explicitly return a boolean, but something else "truthy/falsy" instead:
/*
let mixedVals1 = [0, 1, "", "hello", null, "world", undefined, 42];
let truthyOnly1 = mixedVals1.filter((val) => val);
console.log(truthyOnly1);
*/

// [1, 'hello', 'world', 42]

// 5. Logical thinking problem: Chain .filter() and .map() together: given products1 = [45, 120, 15, 300, 60, 8], first .filter() to keep only prices between 20 and 200 (inclusive), THEN .map() to add a 18% tax to each surviving price (round the result using Math.round()). Store the final result in finalPrices1 and print it.
let products1 = [45, 120, 15, 300, 60, 8];
let finalPrices1 = products1.filter((product) => product >= 20 && product <= 200).map((product) => product*1.18).map((product) => Math.round(product));
console.log(finalPrices1);

// 15D. .reduce() : reduces the elements from list to single value.
// 1. Create an array nums23 = [10, 20, 30, 40, 50] and use .reduce() to calculate the total sum, storing it in totalSum1. Use an explicit initialValue of 0.
let nums23 = [10, 20, 30, 40, 50];
let totalSum1 = nums23.reduce((acc , val) => acc+=val, 0);
console.log(totalSum1);

// 2. Create an array nums24 = [4, 2, 9, 1, 7] and use .reduce() to find the maximum value (use the pattern shown above, with nums24[0] as the initial value).
let nums24 = [4, 2, 9, 1, 7];
let max2_value = nums24.reduce((acc,curr) => (curr > acc ? curr:acc), nums24[0]);
console.log(max2_value);

// 3. Create an array cart2 = [250, 100, 75, 300] and use .reduce() to calculate the total, but only count items with a price above 80 (combine a conditional check inside the reduce callback — similar to the "counting occurrences" pattern shown above).
let cart2 = [250, 100, 75, 300];
let cart2_total = cart2.reduce((acc,val) => val > 80 ? acc+val:acc,0);
console.log(cart2_total);

// 4. Edge case thinking: Predict what happens, then verify — explain the error (if any):

/*
let emptyArr2 = [];
let result6 = emptyArr2.reduce((acc, curr) => acc + curr);
console.log(result6);
*/

// ANS: undefined or []

/*
let result7 = emptyArr2.reduce((acc, curr) => acc + curr, 0);
console.log(result7);
*/

// ANS: 0 or []

// 5. Logical thinking problem: Create an array words2 = ["the", "quick", "brown", "fox"] and use .reduce() to combine them into a single sentence string "the quick brown fox" (accumulate by concatenating with spaces — think carefully about how to avoid a leading/trailing space, this requires careful accumulator logic).
let words2 = ["the", "quick", "brown", "fox"];
let word_sentence = words2.reduce((acc,curr) => acc+" " + curr)
console.log(word_sentence)

// 15E. .find() / .findIndex()

// .find(): searches through an array and returns the first element that satisfies a test condition (callback returns true)
// .findIndex(): same idea, but returns the INDEX instead of the value.
// .includes(): it check if the required value is existing on array,string or number.

// 1. Create an array nums31 = [3, 7, 11, 18, 25, 30] and use .find() to get the first number greater than 15, storing it in firstMatch1.
let nums31 =  [3, 7, 11, 18, 25, 30];
let firstMatch1 = nums31.find((n) => n>15);
console.log(firstMatch1);

// 2. Create an array products2 = ["pen", "notebook", "eraser", "sharpener"] and use .findIndex() to get the index of the first word longer than 6 characters.
let products2 = ["pen", "notebook", "eraser", "sharpener"];
let product_index = products2.findIndex((product) => product.length > 6);
console.log(product_index);

// 3. Create an array nums32 = [2, 4, 6, 8] and use .find() to search for the first ODD number. Print the result and explain what value you'd expect since there are no odd numbers in this array
let nums32 = [2,4,6,8];
let odd_number = nums32.find((n) => n%2 != 0);
console.log(odd_number);

// 4. Edge case thinking: Predict the output, then verify — explain the difference in return type between the two methods when nothing matches:

/*
let nums33 = [1, 2, 3];
console.log(nums33.find((n) => n > 100));
console.log(nums33.findIndex((n) => n > 100));
*/

// 1. undefined
// 2. -1

// 5. Logical thinking problem: Create an array accounts1 = [{}, {}, {}] — actually, skip that (objects aren't covered yet). Instead: create an array balances1 = [500, -50, 1200, -200, 800] and use .find() to locate the first negative balance (representing an account in debt). Then use .findIndex() to get its position. Print both, and explain a real-world scenario where knowing the INDEX (not just the value) would be useful (e.g., what would you do with that index in a real banking app?).
balances1 = [500, -50, 1200, -200, 800]
let acc_balance = balances1.find((balance) => balance < 0);
let acc_index = balances1.findIndex((balance) => balance < 0);

console.log(`the first negitive balance: ${acc_balance} and its index: ${acc_index} `)

// TOPIC 15F : .sort(): we can do regular sorting for string but for numbers there is a catch.
// num.sorted((a,b)=> a-b) : for ascending order
// num.sorted((a,b) => b-a) : for decending order

// 1. Create an array nums36 = [45, 3, 89, 12, 6] and sort it in ascending numeric order using a compare function. Print the result.
let nums36 = [45, 3, 89, 12, 6];
let ascending_arr = [...nums36].sort((a,b)=>a-b)
console.log(ascending_arr);

// 2. Using the same array (or a fresh copy), sort it in descending numeric order.
let decending_arr = [...nums36].sort((a,b)=>b-a);
console.log(decending_arr);

// 3. Create an array cities1 = ["Mumbai", "Delhi", "Bangalore", "Chennai"] and sort it alphabetically (default .sort() — no compare function needed for strings).
let cities1 = ["Mumbai", "Delhi", "Bangalore", "Chennai"]
console.log(cities1.sort())

// 4. Edge case thinking: Predict the output, then verify — explain WHY this happens using what you learned about default string-based sorting:
/*
let nums37 = [10, 1, 21, 2];
nums37.sort();
console.log(nums37);
*/

//  [1, 10, 2, 21]
// when we apply the sort to a numbers list, it convert elements to strings and mess up the numerical sorting thats why we use compare function for number sorting

// 5. Logical thinking problem: Create an array of ages ages2 = [34, 12, 56, 8, 23, 45]. Use spread (...) to create a sorted COPY in descending order called sortedAgesDesc1, while keeping the original ages2 array completely unchanged. Print both ages2 and sortedAgesDesc1 to confirm the original wasn't mutated.
let ages2 = [34, 12, 56, 8, 23, 45];
let sortedAgesDesc1 = [...ages2].sort((a,b)=>b-a);
console.log(sortedAgesDesc1);
console.log(ages2);

// TOPIC 15G: 
// 1) .slice(staring,end-1): get the sliced numbers without mutating originals array
let a = [1,2,4,4,5,342];
console.log(a.slice(2,5));
console.log(a) // original untouched

// .end(start,till the end of array): .slice(x)
console.log(a.slice(3));
// original untouched

// 2) .splice: .splice(removing_for_index_first,total elements removed from that point on, x_inserted at the point)
// .splice(start, deleteCount, ...itemsToAdd) — remove/insert, MUTATES the original
// highly mutatable

let b = [445,23,67,12,78];
b.splice(2,2,34,14); // 67 and 12 removed
console.log(b); // remaning element printed and inserted  34 and 14 at removed index

// not mutating the original
let b1 = [...b];
let un_mutated = [...b1].splice(2,2,34,14);
console.log(un_mutated)
console.log(b1); 

// 3) .some() — does AT LEAST ONE element pass a test? Returns boolean
let c = [2,3,5,6,10];
console.log(c.some((c1) => c1%2 === 0)); // prints true if any one element is even(condition is meet)

// 4) .every() — do ALL elements pass a test? Returns boolean
let c1 = [...c];
console.log(c1.every((c2) => c2%2 === 0)); // prints true if all elements are even (conditon is meet)

// 5) .join(separator) — combine array elements into a single STRING
let words4 = ["Hello", "world", "from", "JS"];
console.log(words4.join(" ")); 
console.log(words4.join("^"));

// 6) .reverse : flips the array order, MUTATES original
words5 = [...words4];
console.log(words5.reverse());
console.log(words5); // original is also mutated

// not not mutated the original list we have to use variable.

words6 = [...words4];
let w = [...words6].reverse();
console.log(w);
console.log(words6);

// .concat() — combine arrays, returns a NEW array (non-mutating, similar to spread)
// method 1
let arrA2 = [1, 2, 3];
let arrB2 = [4, 5, 6];

let combined2 = arrA2.concat(arrB2);
console.log(combined2);   // [1, 2, 3, 4, 5, 6]
console.log(arrA2);        // [1, 2, 3]  ← unchanged

// method 2
let combined3 = [...arrA2, ...arrB2];
console.log(combined3);

// 1. Create an array letters1 = ["a", "b", "c", "d", "e", "f"] and use .slice() to extract just ["c", "d"] into a variable middleLetters1, without modifying the original.
let letters1 = ["a", "b", "c", "d", "e", "f"];
let middleLetters1 = letters1.slice(letters1.indexOf("c"),letters1.indexOf("d")+1);
console.log(middleLetters1);

// 2. Create an array queue1 = ["Alice", "Bob", "Charlie", "Dave", "Eve"] and use .splice() to remove "Bob" and "Charlie" from the array (find their positions first, or hardcode the correct index/count). Print the modified array.
let queue1 = ["Alice", "Bob", "Charlie", "Dave", "Eve"]
queue1.splice(queue1.indexOf("Bob"),1);
queue1.splice(queue1.indexOf("Charlie"),1);
console.log(queue1);

// 3. Create an array scores5 = [45, 78, 92, 30, 65] and use .some() to check if any score is above 90, and .every() to check if all scores are above 40. Print both results.
let scores5 = [45, 78, 92, 30, 65];
console.log(scores5.some((score) => score > 90));
console.log(scores5.every((score) => score > 40));

// 4. Edge case thinking: Predict the output, then verify — explain why the array looks different after this runs:

/*
let nums44 = [1, 2, 3, 4, 5];
let removed1 = nums44.splice(1, 0, 99);
console.log(nums44);
console.log(removed1);
*/

//  [1, 99, 2, 3, 4, 5]
// []

// 5. Logical thinking problem: Create an array teamA1 = ["Alice", "Bob"] and teamB1 = ["Charlie", "Dave"]. Combine them into allPlayers1 using .concat(), then use .join(", ") to create a readable string like "Alice, Bob, Charlie, Dave". Finally, use .reverse() on a COPY of allPlayers1 (using spread, so the original order is preserved) to get the reversed order, and print all relevant variables to confirm nothing was mutated incorrectly.
let teamA1 = ["Alice", "Bob"];
let teamB1 = ["Charlie", "Dave"];
let allPlayers1 = teamA1.concat(teamB1);
console.log(allPlayers1);
console.log(allPlayers1.join(", "));
reverse_players = [...allPlayers1];
console.log(reverse_players.reverse())
console.log(allPlayers1);