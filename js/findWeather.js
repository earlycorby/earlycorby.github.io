// JavaScript source code
function getWeather() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("demo").innerHTML = myObj.list[0]['main']['temp_max'];
        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?id=7839548&units=metric&APPID=3ed7763e1be26a4fa0d643861ed12b7e", true);
    xhttp.send();

}