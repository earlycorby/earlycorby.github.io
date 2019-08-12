// JavaScript source code

function getWeather() {
    
    var temperature = -1;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);

            
            for (var i = 0; i < 7; i++) {
                intermediateTemp = myObj.list[i]['main']['temp'];
                if (intermediateTemp > temperature) {
                    temperature = intermediateTemp;
                }
                document.getElementById("demo").innerHTML = temperature;
                if (temperature < 5.00) {
                    document.body.style.background = '#66ccff';
                }
                else if (5.00 <= temperature < 10.00) {
                    document.body.style.background = '#66ffff';
                }
                else if (10.00 <= temperature < 15.00) {
                    document.body.style.background = '#66ffcc';
                }
                else if (15.00 <= temperature < 20.00) {
                    document.body.style.background = '#66ff99';
                }
                else if (20.00 <= temperature < 25.00) {
                    document.body.style.background = '#ffff99';
                }
                else if (25 <= temperature < 30.00) {
                    document.body.style.background = '#ffcc66';
                }
                else if (30.00 < temperature < 35.00) {
                    document.body.style.background = '#ff9933';
                }
                else if (35.00 < temperature < 40.00) {
                    document.body.style.background = '#ff6600';
                }
                else {
                    document.body.style.background = '#ff0000';
                }
               
                whatClothing(temperature);
               
            }
            
        }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/forecast?id=7839548&units=metric&APPID=3ed7763e1be26a4fa0d643861ed12b7e", true);
    xhttp.send();

}

function whatClothing(temperature) {
    if (temperature < 20) {
        clothing = "longs and longs";
        document.getElementById("clothes").innerHTML = clothing;

    }
    else if (20 <= temperature < 25) {
        clothing = "shorts and longs";
        document.getElementById("clothes").innerHTML = clothing;
    }
    else if (temperature >= 25) {
        clothing = "shorts and shorts";
        document.getElementById("clothes").innerHTML = clothing;
    }

}