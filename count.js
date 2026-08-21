// MICRO PROJECT: JAVASCRIPT TALLY COUNTER



//const decrease = document.getElementById('d');
//const reset = document.getElementById('r');
//const increase = document.getElementById('i');
//const countl = document.getElementById('countlabel');

let count=0;

// decrease
document.getElementById('d').onclick = function(){
    count--;
    document.getElementById('countlabel').textContent = count;
    console.log(count)
}

//reset
document.getElementById('r').onclick = function(){
    count*=0;
    document.getElementById('countlabel').textContent = count;
    console.log(count)
}

//increase
document.getElementById('i').onclick = function(){
    count++;
    document.getElementById('countlabel').textContent = count;
    console.log(count)
}

