let temperature = document.getElementById("input1");
let celsius = document.getElementById("radio1");
let fahrenheit = document.getElementById("radio2");
let submit = document.getElementById("submit");
let display = document.getElementById("display")


submit.onclick = function(){
    if (temperature.value === "") {
        display.textContent = "Please enter a valid number";
        return;
    }

    if (celsius.checked){
    // convert celsius to farhrenheit
        let farh = ((Number(temperature.value) * 1.8)+32).toFixed(2);
        display.textContent = `${farh} F`
    }
    else if (fahrenheit.checked){
        //convert farhrenheit to celsius
        let cel = ((Number(temperature.value)-32)/1.8).toFixed(2);
        display.textContent = `${cel} C`
    }
    else{
        display.textContent = `please select a unit`
    }


};
