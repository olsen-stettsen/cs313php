function main(){
    document.getElementById("userselect").addEventListener("change", dbLookup);
    alert("1");
    getUser();
}
function getUser(){
    alert("2");
    var user = prompt("What is your name?");
    localStorage.setItem("user", user);
    alert(localStorage.getItem("user"));
}
function dbLookup(){
    //alert(document.getElementById("userselect").value);
    var user = document.getElementById("userselect").value;
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
function dbWrite(){
    var book = document.getElementById("book_i").value;
    var chapter = document.getElementById("chapter_i").value;
    var verse = document.getElementById("verse_i").value;
    var content = document.getElementById("content_i").value;
    var topic = document.getElementById("topic_i").value;

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
