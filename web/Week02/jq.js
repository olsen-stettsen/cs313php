$(document).ready(function () {
    $('#clrbtn').click(function () {
        $('#div2').html("<div><h1>JQuery</h1></div>");
        $('#div2').css("background-color", $('#clrinpt').val());
    })
    $('#toggle').click(function () {
        $('#div3').fadeToggle("slow");
    })
});