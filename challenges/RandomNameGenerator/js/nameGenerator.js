
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
    var names = [];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            for (var i = 0; i < myObj.length; i++) {
                var nextGender = myObj[i].gender;
                var nextName = myObj[i].name;


                if (gender === "FEMALE" && nextGender === "FEMALE") {
                    names.push(nextName);
                } else if (gender === "MALE" && nextGender === "MALE") {
                    names.push(nextName);
                }
                else {
                    names.push(nextName);
                }

            }
            //console.log(names);
            var index = Math.floor(Math.random() * names.length) + 1;
            console.log(names[index]);
            return names;

        }
      
    };
    xhttp.open("GET", "./babynamesfromAll.json", true);
    xhttp.send();
   
}



