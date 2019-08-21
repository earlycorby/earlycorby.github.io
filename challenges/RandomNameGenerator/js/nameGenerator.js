
var string;
function getFemale() {
   document.getElementById("result").innerHTML = getName("FEMALE");
}
function getMale() {
    document.getElementById("result").innerHTML = getName("MALE");
}
function getAny() {
    document.getElementById("result").innerHTML = getName("ANY");
}

function getFile() {
   
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', './babynamesfromAll.json', true);
    xhttp.onload = function () {

        
        console.log(xhttp.responseText);

        
    }
    xhttp.send();

}  
    
function getName(gender) {

    if (gender === "FEMALE") {

    } else if (gender === "MALE") {

    }
    else {

    }

   



}