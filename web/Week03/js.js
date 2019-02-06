/****************************
 * Program
 ***************************/
function main(mode){
    if(mode == "main"){
        hardcodeload();
    }
    else{
        listen();
        addtohtml(JSON.parse(localStorage.getItem("cart")), "review");
    }    
}
function hardcodeload(){
    var store = createstoreitems();
    addtohtml(store, "main");
}
function listen(){
    document.getElementById("plcobtn").addEventListener("click", addressfieldvis);   
    document.getElementById("subbtn").addEventListener("click", clearcart); 
}
function clearcart(){
    document.getElementById("JSON").value = localStorage.getItem("cart");
    var cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updatesession();
}
function addressfieldvis(){
    document.getElementById("login").style.display = "block";
}
function createstoreitems(){
    var store = [];
    var test = JSON.parse(localStorage.getItem("cart"));
    if(test.length == 0){
    var cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    }

    var item1 = new item();
    item1.name ="T-Rex Push-up Shirt";
    item1.picture = "https://images-na.ssl-images-amazon.com/images/I/71h2CAAHEVL._UX466_.jpg";
    item1.price = "13.99";
    store.push(item1);

    var item2 = new item();
    item2.name ="Importanter T-Shirt";
    item2.picture = "https://images-na.ssl-images-amazon.com/images/I/81pPPWqCkUL._UX466_.jpg";
    item2.price = "13.99";
    store.push(item2);

    var item3 = new item();
    item3.name ="Cloud T-Shirt";
    item3.picture = "https://vangogh.teespring.com/v3/image/3YdT2c7FqHJ2gLfom6EJviLnKdI/480/560.jpg";
    item3.price = "17.99";
    store.push(item3);

    var item4 = new item();
    item4.name ="Cloud T-Shirt";
    item4.picture = "https://cdn.shopify.com/s/files/1/0537/1501/products/TSHIRT_03_there_is_no_cloud_1024x1024.jpg?v=1492440443";
    item4.price = "17.99";
    store.push(item4);

    localStorage.setItem("store", JSON.stringify(store));

    return store;

}
function addtohtml(store, mode){
    var pic = "cart.png";
    var func = "addtocart"
    var param = "this";
    if(mode != "main"){
        pic = "x.png";
        func = "removefromcart";
    }
    storeitems = document.getElementById("storeitems");
    for(var count = 0; count < store.length / 3; count++){
        var row = storeitems.insertRow();
        var position = count * 3;
        for(var i = 0; i < 3; i++){
            if (mode == "main"){
                param = (position + i);
            }
            var cell = row.insertCell();
            cell.classList.add("itemcell");
            cell.innerHTML = "<h6 class='itemlabel'><span class='itemname' id='itemname" + (position + i) + "'>" + store[position + i].name +"</span><button onclick='"+ func + "(" + param +")' class='addtocart' id='btn" + (position + i) + "'><img class='addtocartimg' src='" + pic + "' alt=''></button><br><span class='itemprice" + (position) + i + "'>" + store[position + i].price + "</span></h6>";
            cell.style.backgroundImage = "url(" + store[position + i].picture + ")";
        }    
    }  
}
function addtocart(number){
    var cart = JSON.parse(localStorage.getItem("cart"));
    var store = JSON.parse(localStorage.getItem("store"));
    cart.push(store[number]);
    localStorage.setItem("cart", JSON.stringify(cart));
    updatesession();
}
function removefromcart(x){
    var str = x.id + "";
    var index = parseInt(str.slice(3));
    var cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    storeitems = document.getElementById("storeitems");
    storeitems.innerHTML = "";
    addtohtml(JSON.parse(localStorage.getItem("cart"), "review"));    
}
function updatesession() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var sessionneeded = false;
    if (cart.length == 0) {
        return
    }
    if (cart.length == 1) {
        sessionneeded = true;
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //alert(this.responseText)
        }
    };
    xmlhttp.open("GET", "index.php?q=" + localStorage.getItem("cart") + "&s=" + sessionneeded, true);
    xmlhttp.send();
}
/****************************
 * Objects
 ***************************/
function customer(){
    this.name;
    this.email;
    this.password;
}
function cart(){
    this.items;
}
 function item(){
    this.name;
    this.picture;
    this.price;
    this.description;
}
function inventory(){
    this.items;
}
/**********************
 * onInputValidate
 *********************/
function onInputValidate(){
    document.getElementById("street").oninput = function(){ validationCSS(validateBusinessAddress(), "businessAddress"); };
    document.getElementById("zipcode").oninput = function(){ validationCSS(validateZip(), "zipcode"); };
    document.getElementById("state").oninput = function(){ validationCSS(validateState(), "state"); };
    document.getElementById("businesslicense").oninput = function(){ validationCSS(validateBusinesslicense(), "businesslicense"); };
    document.getElementById("personallicense").oninput = function(){ validationCSS(validatePersonallicense(), "personallicense"); };
    document.getElementById("personallicense2").oninput = function(){ validationCSS(validatePersonallicense2(), "personallicense2"); };
    document.getElementById("email").oninput = function(){ validationCSS(validateEmail(), "email"); };
    document.getElementById("email2").oninput = function(){ validationCSS(validateEmail2(), "email2"); };
}
/**********************
 * Validation Methods
 *********************/
function validateBusinessAddress() {
    var address = document.getElementById("street").value;
    var regularEx = /^[a-z0-9 ,.'-]+$/i;
    return regularEx.test(address);
}
function validateCity() {
    var name = document.getElementById("city").value;
    var regularEx = /^[a-z ,.'-]+$/i;
    return regularEx.test(name);
}
function validateZip() {
    var zip = document.getElementById("zipcode").value;
    var regularEx = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return regularEx.test(zip);
}
function validateState() {
    var s = document.getElementById("state").value;
    var state = s.toUpperCase()
    document.getElementById("state").value = state;
    var regularEx = /^\s?\b([A-Z][A-Z])\b\s?$/;
    var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
                  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
                  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
                  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
                  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
    var isState = false;
    for(var count = 0; count < states.length; count++){
        if(state == states[count]){
            isState = true;
        }
    }
    return regularEx.test(state) && isState;
}
/**********************
 * check Before Submit
 *********************/
function checkBeforeSubmit(){
    if( validateBusinessAddress() && validateZip() && validateState() && validateCity()){
        return true;
    }
    else{
        alert("Uh-oh, Please validate your information before submitting");
        return false;
    }
}