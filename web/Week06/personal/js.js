function main(){
    document.getElementById("userselect").addEventListener("change", dbLookup);
    document.getElementById("mkpostbtn").addEventListener("click", makepost);
    getUser();
    dbLookup();
}
function getUser(){
    var user = prompt("What is your name?");
    localStorage.setItem("user", user);
}
function dbLookup(){
    var user = document.getElementById("userselect").value;
    //alert(user);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "getUserStuff.php?q=" + user, true); // '?' is the start and '&' is next var
    xmlhttp.send();
}
function makepost(){
    var post = {user:localStorage.getItem("user")};
    post.message = prompt("Post:"); //just to test
    dbWrite(post);
}
function dbWrite(post){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            //document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "writePostStuff.php?user=" + post.user + "&message=" + post.message); // '?' is the start and '&' is next var
    xmlhttp.send();
    dbLookup();
}
function deletemessage(e){
    alert(e.parentElement.parentElement.children[0].innerHTML);
}