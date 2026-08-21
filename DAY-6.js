// checked property
const visa = document.getElementById("visa")
const paypal = document.getElementById("paypal")
const submit = document.getElementById("submit")

submit.onclick = function(){

    if (document.getElementById("checkbox").checked){
        document.getElementById("sub").textContent = "you are subscribed"
    }
    else{
        document.getElementById("sub").textContent = "you are not subscribed"
    }
    if (visa.checked){
        document.getElementById("circle").textContent = "selected Visa"
    }
    else if (paypal.checked){
        document.getElementById("circle").textContent = "selected Paypal"
    }
    else if (visa.checked == false && paypal.checked == false){
        document.getElementById("circle").textContent = "selected neither"
    }
};

// TERNARY OPERATOR: short cut for if - else

const age = document.getElementById("age")
const age_submit = document.getElementById("age_submit")

age_submit.onclick = function(){
    let answer = age.value >= 18 ? "ADULT" : "MINOR"
    console.log(answer)
}


// SWITCHES

// regular if else and else if work
const day = 5;
if (day == 1){
    console.log("monday")
}
else if (day == 2){
    console.log("tuesday")
}
else if (day == 3){
    console.log("wednesday")
}
else if (day == 4){
    console.log("thrusday")
}
else if (day == 5){
    console.log("friday")
}
else if (day == 6){
    console.log("saturaday")
}
else if (day == 7){
    console.log("sunday")
}
else{
    console.log("error")
}
// this method is time taking and day is checked 
// and compared multiple times and space is taken

// switch

const dayy = 1;

switch(dayy){
    case 1:
        console.log('monday')
        break
    case 2:
        console.log("tuesday")
        break
    case 3:
        console.log("wednesday")
        break
    case 4:
        console.log("thurday")
        break
    case 5:
        console.log("friday")
        break
    case 6:
        console.log("saturday")
        break
    case 7:
        console.log("sunday")
        break
    default:
        console.log("unknown number")
}


let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);