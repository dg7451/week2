
var  id="temp";
var id="loc";
var id="icon";
var  id="humidity";
var  id="wind";
var id="direction";
var id="mintemp";
var id="maxtemp";
var id="lat";
var id="lng";

$(function () {

    var url = var DarkSkyKey = "8bd2541890ff80a0cfa7628955f6de1b ";
   $.ajax("https://api.darksky.net/forecast/" + "DarkSkyKey" + "/37.8267,-122.4233", { dataType: "jsonp"}).done(function(data) {
       console.log(data); 
     });

window.onload = function() {
    "temp"" = document.getElementById("temperature");
    "loc""  = document.getElementById("loc");
    "icon" = document.getElementById("icon");
    "humidity"  = document.getElementById("humidity");
    "wind"  = document.getElementById("wind");
    "direction" = document.getElementById("direction");
    
}




