// JavaScript source code
function getFemale() {
   document.getElementById("result").innerHTML = getName("FEMALE");
}
function getMale() {
    document.getElementById("result").innerHTML = getName("MALE");
}
function getAny() {
    document.getElementById("result").innerHTML = getName("ANY");
}

function getName(gender) {
    var myObj = new JSON;
    var fileOpen = new XMLHttpRequest();
    fileOpen.open('GET', './babynamesfromAll.json');
    fileOpen.onreadystatechange = function () {
        // alert(fileOpen.responseText);
        myObj = JSON.parse(this.responseText);
    }
    fileOpen.send();
    
    

    if (gender === "FEMALE") {

    } else if (gender === "MALE") {

    }
    else {

    }

    return myObj[0][0];



}