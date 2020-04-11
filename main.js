document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = resetButton;



function tempConvert() {
    
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    // parseFloat returns a string into a number
    // parseFloat used for decimals as well
  if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } 
        // TODO: displaying the numbers to from fToC 
        // without .toFixed(2) displays with multiple decimal points
        // TODO: lower the decimal points to like 14.54 instead of 14.55555555555 (example)
        // .toFixed(1) displays the to the one decimal point
        document.getElementById('celsius').value = parseFloat(celsius).toFixed(2);
        // TODO: diplays from cToF
        // document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(2);
    }
    // TODO: create a clearfunction 
    function resetButton() {
            document.getElementById('fahrenheit').value = '';
            document.getElementById('celsius').value = '';
        } 
        
        
        
        
