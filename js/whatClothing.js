// JavaScript source code
function whatClothing(temperature) {
    if (temperature < 20) {
        clothing = "longs and longs";
        document.getElementById("clothes").innerHTML = clothing;

    }
    else if (20 <= temperature < 25) {
        clothing = "shorts and longs";
        document.getElementById("clothes").innerHTML = clothing;
    }
    else if (temperature >= 25) {
        clothing = "shorts and shorts";
        document.getElementById("clothes").innerHTML = clothing;
    }
   
}