function main(){
    document.getElementById("clrbtn").addEventListener("click", clr);
}
function clr(){
    changeColor();
    changeColorJQ();
}
function changeBTN(){
    document.getElementById("btnCM").innerHTML = "Clicked!";
}
function changeColor(){
    document.getElementById("div1").style.backgroundColor = document.getElementById("clrinpt").value;
}  