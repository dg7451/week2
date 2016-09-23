

$(function () {

    var zipCode = 41635;

    var googleurl="https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyDMzCizTxJbFhlR9kiyIWS_8GT_Nc8yV3Q";
    var long =
    var lat=

    var  DarkSkyKey = "8bd2541890ff80a0cfa7628955f6de1b ";
   $.ajax("https://api.darksky.net/forecast/" + "DarkSkyKey" + "/37.8267,-122.4233", { dataType: "jsonp"}).done(function(data) {
       console.log(data); 
     });

      //alternative: $("button#add").on("click", function(ev) {
    $("button#add").click(function(ev /*event*/) {
        var zip-code = $("#zipcode").val();




    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
}




