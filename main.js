var sub = document.getElementById('subtract')
var add = document.getElementById('add')
var num = document.getElementById('input')

var display = document.getElementById('display')
var total = 0
// displayNumber functions 

// subtract button function
// subtract the input number from the display number 
// add button function

function subtract() {

    total = total - num.value
    // console.log(total)
    display.innerHTML = total

}
sub.addEventListener('click', subtract)

function addition() {

    total = total + parseInt(num.value)
    // console.log(total)
    display.innerHTML = total
}
add.addEventListener('click', addition)

// function displayNumber()
// {
//     var z = document.getElementById('results').innerHTML;
//     document.getElementById('results').innerHTML = 0;
// }

// function incrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 0);
//     // value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
//     // document.getElementById('number').addEventListener('click', incrementValue)

//     // console.log(value) 
// }
// function decrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 0);
//     // value = isNaN(value) ? 0 : value;
//     value--;
//     document.getElementById('number').value = value;
//     // document.getElementById('number').addEventListener('click', decrementValue)
//     // console.log(value)
// }
// // decrementValue();
// // incrementValue();
// displayNumber();

