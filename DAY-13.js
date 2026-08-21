// spread operator:unpacking of element (instead of long as for loop)
// its mostly used for expand the array and assigning in other variables
const arr1 = [1,2,4];
const arr2 = [...arr1];
console.log(arr1);
console.log(arr2);

let number = [1,2,3,4,5];
console.log(Math.max(...number));
console.log(Math.min(...number));
// instead of using for loop we can do this way. 
// in python we use = max(number) = 5

// also possible with strings - > turn the string into list and do the task
let username_list = []
let username = "arshad";
let user = [...username];
for (let name of user){
    if (name == "a"){
        continue
    }
    else{
        username_list.push(name)
    }
}
console.log(username_list);
console.log(username_list.join(""));

// merging the array
let array1 = [1,3,5,7,9];
let array2 = [0,2,4,6,8];
let array3 = [...array1, ...array2] // appending new value in array3
array4 = [...array3,10]
console.log(array3) // merged 
console.log(array4) // 10 append in array3

/* ---------------------------------------------------------------------------------- */
// Callback
function hello(Callback){
    console.log("hello")
    Callback();
}
function bye(){
    console.log("good-bye")
}

hello(bye);

function sum(Callback, x, y){
    let result = x+y;
    Callback(result);
}

function sum_display(result){
    document.getElementById("display").textContent = result;
    console.log(result)
}

sum(sum_display, 2, 5);

/* ============================================= */
// forEach()
let arr = [1,2,3,4,6];
let arr11 = [...arr];

// doubling the elements
function double_elements(element,index,array){
    array[index] = element*2;
}
arr.forEach(double_elements);
console.log(arr)

// tripling elements
function triple_element(element,index,array){
    array[index] = element*3
}
arr11.forEach(triple_element);
console.log(arr11)

// list of strings
fruit_lst = ['apple','banana','mango','kiwi'];

// uppercase
function uppercase(element,index,array){
    array[index] = element.toUpperCase();
}
fruit_lst.forEach(uppercase);
console.log(fruit_lst)

//lowercase
function lowercase(element,index,array){
    array[index] = element.toLowerCase();
}
fruit_lst.forEach(lowercase);
console.log(fruit_lst);

// =============================================================== //
// .map(): The map() method creates a brand new array by executing a provided callback function on every single element of the original array. It does not change the original array (non-mutating)

let num_lst = [1,2,3,4,5,6];
let first_lst = num_lst.map(element => element*10);
console.log(first_lst)

let cube_lst =  num_lst.map(element => Math.pow(element,3));
console.log(cube_lst);

//captialize first letter
value_lst = ['arshad','tabras','aravind','vamshi','siddharth']
let captial = value_lst.map(element => element.charAt(0).toUpperCase() + element.slice(1))
console.log(captial);

// ======================================================================= //
// .fliter() : fliter out the require values are 
// even and odd


let filter_num = [1,2,3,4,5,6,7,8,9,10];
let even_number = filter_num.filter(x => x%2 === 0);
console.log(even_number)

// combine filter and map
let result = filter_num
        .filter(x => x%2 === 0)
        .filter(x => x > 5);
console.log(result)

// ======================================================================= //
// .reduce : 