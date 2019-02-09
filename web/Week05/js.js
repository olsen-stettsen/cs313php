//document.onload = main();
function main(){
    document.getElementById("subbtn").addEventListener("click", prompClick);
}
function prompClick(){
    php();
    hidePrompt();
}
function php(){
    var input = document.getElementById("loginname").value;
    var date = new Date();
    var stamp = date.toUTCString();
    var visitor = {name:input, time:stamp};
    var visitorJSON = JSON.stringify(visitor);
    //alert(visitorJSON);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //alert(this.responseText)
        }
    };
    xmlhttp.open("GET", "save.php?q=" + visitorJSON, true);
    xmlhttp.send();
}
function hidePrompt(){
    document.getElementById("login").style.visibility = "hidden";
}