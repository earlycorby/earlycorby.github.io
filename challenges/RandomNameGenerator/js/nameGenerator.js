
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

/*function getFile() {
   
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', './babynamesfromAll.json', true);
    xhttp.onload = function () {

        
        console.log(type(xhttp.responseText));

        
    }
    xhttp.send();

}  */
    
function getName(gender) {
    fetch('babynamesfromAll.json')
        .then(function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            // Examine the text in the response
            response.json().then(function (data) {
                console.log(type(data));
              
            });
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
   // console.log(data);
    //getFile();

    if (gender === "FEMALE") {

    } else if (gender === "MALE") {

    }
    else {

    }

   



}