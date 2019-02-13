//document.onload = main();
function main(){
    //document.getElementById("topicselect").addEventListener("change", dbLookup);
    dbLookup(); //hardcoded
}
function dbLookup(){
    //alert(document.getElementById("topicselect").value);
    //var topic = document.getElementById("topicselect").value;
    var topic = 'all';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "getTopicStuff.php?q=" + topic, true); // '?' is the start and '&' is next var
    xmlhttp.send();
}
