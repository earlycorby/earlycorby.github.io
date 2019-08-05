// JavaScript source code
function loadXMLDoc(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "/test_data/IDV10752.xml", true);
    xmlhttp.send();
}

function myFunction(xml){
    var xmlDoc = xml.responseXML;
    var x = document.getElementsByTagName("aac");
    document.getElementById("VIC_PT043").innerHTML = x[0].childNodes[0].nodeValue;
}