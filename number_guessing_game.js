let max = 100;
let min = 0;
let random_number = Math.floor(Math.random()*(max-min+1)+min);
let check = document.getElementById("button");
let display = document.getElementById("display");

check.onclick = function(){
    let guess = document.getElementById("input").value;
    guess = Number(guess)
    if (guess === random_number){
        display.textContent = "YOUR GUESS IS CORRECT"
    }
    else if (guess < random_number){
        display.textContent = "OHH, YOUR GUESS IS SMALLER "
    }
    else if (guess > random_number){
        display.textContent = "OPPS,YOUR GUESS IS LARGER"
    }
    if (guess > 100){
        display.textContent = "number exceeded above 100, try again"
    }
};
