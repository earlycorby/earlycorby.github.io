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
    var myObj; 
    var fileOpen = new XMLHttpRequest();
   
    fileOpen.onreadystatechange = function () {
        // alert(fileOpen.responseText);
        var text = this.responseText;
        console.log(text);
        myObj = JSON.parse(text);
    };
    fileOpen.open('GET', './babynamesfromAll.json', true);
    fileOpen.send();
    
    

    if (gender === "FEMALE") {

    } else if (gender === "MALE") {

    }
    else {

    }

    return myObj[0][0];



}