function main(){
    //document.getElementById("userselect").addEventListener("change", dbLookup);
    document.getElementById("mkpostbtn").addEventListener("click", makepost);
    getUser();
    dbLookup();
}
function getUser(){
    var user = prompt("What is your name?");
    localStorage.setItem("user", user);
    if (userLookup() == "false"){
        alert("Your account is now being created");
    }
}
function userLookup(){
    var user = localStorage.getItem("user");
    //alert(user);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            if (this.responseText == "false"){
                alert("I can't find an account with that name. Your account is now being created");
                userWrite(user);
            }
        }
    };
    xmlhttp.open("GET", "lookupuser.php?q=" + user, true); // '?' is the start and '&' is next var
    xmlhttp.send();
    optionvisible();
}
function userWrite(user){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            //document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "writeuser.php?user=" + user); // '?' is the start and '&' is next var
    xmlhttp.send();
    dbLookup();
}
function dbLookup(){
    //alert(user);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "getUserStuff.php?", true); // '?' is the start and '&' is next var
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
    var user = e.parentElement.parentElement.children[0].innerHTML;
    var message = e.parentElement.parentElement.parentElement.children[1].innerHTML;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            //document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "deletepost.php?user=" + user + "&message=" + message); // '?' is the start and '&' is next var
    xmlhttp.send();
    dbLookup();
}
function updatemessage(e){
    var user = e.parentElement.parentElement.children[0].innerHTML;
    var message = e.parentElement.parentElement.parentElement.children[1].innerHTML;
    var newmessage = prompt("Edit:", message);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            //document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "updatepost.php?user=" + user + "&message=" + message + "&newmessage=" + newmessage); // '?' is the start and '&' is next var
    xmlhttp.send();
    dbLookup();
}
function replymessage(e){
    var user = localStorage.getItem("user");
    var message = e.parentElement.children[1].innerHTML;
    var reply = prompt("Reply:");

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            //document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "replypost.php?user=" + user + "&message=" + message + "&reply=" + reply); // '?' is the start and '&' is next var
    xmlhttp.send();
    dbLookup();
}
function optionvisible(){
    var postlist = document.getElementsByClassName("messageoptions");
    //alert(localStorage.getItem("user"));
    for (var i = 0; i < postlist.length; i++){
        if (postlist[i].parentElement.children[0].innerHTML  == localStorage.getItem("user")){
            //alert("u");
            postlist[i].style.display = "block";
        }
    }
}