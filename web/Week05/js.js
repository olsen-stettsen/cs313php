//document.onload = main();
function main(){
    document.getElementById("userselect").addEventListener("change", dbLookup);
}
function dbLookup(){
    var user = document.getElementById("userselect").value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xmlhttp.open("GET", "getUserStuff.php?q=" + user, true); // '?' is the start and '&' is next var
    xmlhttp.send();
}
