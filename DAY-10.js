// FUNCTON - without arguments
function happy() {
    console.log("happy birthday to u")
}

happy()


// with arguments
function happybirthday(name,age){
    console.log("happy birthday, badwe")
    console.log("happy birthday,gandu")
    console.log(`happy birthday ${name}`)
    console.log(`you are ${age} old, you are getting old you lazy fuck`)
    console.log("happy birthday - chommu")
}

happybirthday("aravind",25)

// function with return statement
function add(x,y){
    let result = x+y;
    return result
}
let sum = add(4,7)


console.log(sum)
console.log(add(5,3))

// calculator 
function calculator(x,y,operator){
    if (operator === "+"){
        return x+y
    }
    else if (operator === "-"){
        return x-y
    }
    else if (operator === "*"){
        return x*y
    }
    else if (operator === "/"){
        return x/y
    }
    else{
        console.log("invaild operator")
    }
}

console.log(calculator(19,23,"+"))
console.log(calculator(19,23,"-"))
console.log(calculator(19,23,"*"))
console.log(calculator(19,23,"/"))
console.log(calculator(19,23,"&&"))

// variable scope = when a variable is recognized and accessible (local vs global)

// local variable is something which we can only create inside a function and only accessed my call that particular function
function function1(){
    let x = 1;
    console.log(x)
}
function1()

// global variable is something which we can assess outside the function

let x1 = 223;
function function2(){
    console.log(x1)
}
function2()

// which is first : local or variable
// let x1 = 223;
function function2(){
    let x1 = 2;
    console.log(x1)
}
function2()

// local variable is preferred over the global variable

