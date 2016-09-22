
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

    var url = "http://rest.learncode.academy/api/learncode/friends"
    $.ajax("http://rest.learncode.academy/api/learncode/friends/57e116b91f6147010025553b").done(function (data) 
    {
        $("#me").html(data.name + data.drink );
        
    });
    });

window.onload = function() {
    "temp"" = document.getElementById("temperature");
    "loc""  = document.getElementById("loc");
    "icon" = document.getElementById("icon");
    "humidity"  = document.getElementById("humidity");
    "wind"  = document.getElementById("wind");
    "direction" = document.getElementById("direction");
    
}




