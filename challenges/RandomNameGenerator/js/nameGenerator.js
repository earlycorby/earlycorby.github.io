
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

    
function getName(gender) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            name = myObj.gender[0];
            console.log(myObj);


            if (gender === "FEMALE") {

            } else if (gender === "MALE") {

            }
            else {

            }

        }
    };
    xhttp.open("GET", "./babynamesfromAll.json", true);
    xhttp.send();
}



