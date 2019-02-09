//document.onload = main();
function main(){
    alert("hello");
    document.getElementById("userselect").onchange = dbLookup();
}
function dbLookup(){
    alert("hi");
    /*var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText == "NONE FOUND"){
                alert("Our records show no account with this information. Please verify your input.");
            }
            else{
            localStorage.setItem("member", this.responseText);
            var member = JSON.parse(this.responseText);
            populateThankYouData(member); // placed here so that page wouldn't load with wrong info
            document.getElementById("thankYouNameh1").innerHTML = "User Information";
            document.getElementById("thankYouNameh2").innerHTML = "";
            document.getElementById("newconfirm").innerHTML = "Done";
            existingMemberInfoVisible();
            }
        }
    };
    xmlhttp.open("GET", "dbLookup.php?q=" + personallicense + "&r=" + email, true); // '?' is the start and '&' is next var
    xmlhttp.send();*/
}
