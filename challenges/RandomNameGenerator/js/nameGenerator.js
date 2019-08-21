
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

        var nameArray = xhttp.responseText();
        console.log(nameArray);

        
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