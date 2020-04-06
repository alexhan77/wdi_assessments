var x = document.getElementById('number').value
var y = document.getElementById('results').value


function displayNumber()
{
    var z = document.getElementById('results').innerHTML;
    document.getElementById('results').innerHTML = 0;
}

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 0);
    // value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    // document.getElementById('number').addEventListener('click', incrementValue)
    
    // console.log(value) 
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 0);
    // value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
    // document.getElementById('number').addEventListener('click', decrementValue)
    // console.log(value)
}
// decrementValue();
// incrementValue();
displayNumber();
