var girls = [];
var boys = [];
var all = [];

function loadfile(){
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            for (var i = 0; i < myObj.length; i++) {
                var nextGender = myObj[i].gender;
                var nextName = myObj[i].name;
                if (nextGender === "FEMALE") {
                   // console.log("Girls");
                    girls.push(nextName);
                    all.push(nextName);
                } else if (nextGender === "MALE") {
                    //console.log("boys");
                    boys.push(nextName);
                    all.push(nextName);
                } 
            }  
        }
    };
    xhttp.open("GET", "./babynamesfromAll.json", true);
    xhttp.send();


    return [girls, boys, all];
}

function getGirls() {
    //console.log(girls);
    document.getElementById("result").innerHTML = getRandomName(girls);
}
function getBoys() {
    //console.log(boys);
    document.getElementById("result").innerHTML = getRandomName(boys);
}

function getAll() {
    //console.log(all);
    document.getElementById("result").innerHTML = getRandomName(all);
}

function getRandomName(nameArray) {
    var index = Math.floor(Math.random() * names.length);
    console.log(nameArray[index]);
    return nameArray[index];
}