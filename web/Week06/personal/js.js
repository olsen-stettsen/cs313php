function main(){
    document.getElementById("userselect").addEventListener("change", dbLookup);
    document.getElementById("mkpostbtn").addEventListener("click", makepost);
    getUser();
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
    var post.user = localStorage.getItem("user");
    post.message = prompt("Post:");
    dbWrite(post)
}
function dbWrite(post){
    alert(post.user);
    alert(post.message);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText);
            //document.getElementById("output").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "writeTopicStuff.php?book=" + book + "&chapter=" + chapter + "&verse=" + verse + "&content=" + content + "&topic=" + topic, true); // '?' is the start and '&' is next var
    xmlhttp.send();
    enter();
}
function enter(){
    document.getElementById("book_i").value = '';
    document.getElementById("chapter_i").value = '';
    document.getElementById("verse_i").value = '';
    document.getElementById("content_i").value = '';
    document.getElementById("topic_i").value = '';
    dbLookup();
}
