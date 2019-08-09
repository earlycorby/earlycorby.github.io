// JavaScript source code
function getWeather() {
    var temperature = -1;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            for (var i = 0; i < 7; i++) {
                //intermediateTemp = myObj.list[0]['main']['temp'];
                intermediateTemp = myObj.list[i]['main']['temp'];
                if (intermediateTemp > temperature) {
                    temperature = intermediateTemp;
                }
                document.getElementById("demo").innerHTML = temperature;
                whatClothing(temperature);
                //document.getElementById("demo").innerHTML = myObj.list[i]['main']['temp'];
                //if (intermediateTemp > temperature){
                //    temperature = intermediateTemp;
 
                //}
            }
            //document.getElementById("demo").innerHTML = temperature;
            //document.getElementById("demo").innerHTML = myObj.list.main.temp;
        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?id=7839548&units=metric&APPID=3ed7763e1be26a4fa0d643861ed12b7e", true);
    xhttp.send();

}