// JavaScript source code
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

        var nameArray = xhttp.responseText;
        console.log(type(nameArray));
    }
    xhttp.send();
    
    
    //fileOpen.onload = function () {
        // alert(fileOpen.responseText);
        //var text = this.responseText;
        //console.log(typeof(text));
        //return JSON.parse(text);
       // string = this.responseText;
        //console.log(string);
       // return string;
   //};
    //console.log(string);

    ////fileOpen.send();
    //return string;
}  
    
function getName(gender) {

    var myObj = getFile();
    if (gender === "FEMALE") {

    } else if (gender === "MALE") {

    }
    else {

    }

    console.log(type(myObj));



}