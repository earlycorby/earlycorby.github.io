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

function getFile() {
   
    var fileOpen = new XMLHttpRequest();
    fileOpen.open('GET', './babynamesfromAll.json', true);
    //fileOpen.onload = function () {
        // alert(fileOpen.responseText);
        //var text = this.responseText;
        //console.log(typeof(text));
        //return JSON.parse(text);
        //return this.responseText;
    //};
    console.log(fileOpen.responseText());

    fileOpen.send();
}  
    
function getName(gender) {

    var myObj = getFile();
    if (gender === "FEMALE") {

    } else if (gender === "MALE") {

    }
    else {

    }

   // console.log(type(myObj));



}