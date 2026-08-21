// constants 
// const = a variable that can't be changed

const pi = 3.14;
let circumference;

document.getElementById('mybutton').onclick = function(){
    radius = document.getElementById('myinput').value
    radius = Number(radius)
    circumference = 2*pi*radius;
    document.getElementById('display').textContent = circumference;
    console.log(circumference)
}