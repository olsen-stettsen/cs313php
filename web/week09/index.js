const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

function calculateRate(type, amount){
    var r_amount;
    switch(type) {
        case 'flat':
          r_amount = 12.53
          break;
        case 'premium':
          r_amount = amount * 2;
          break;
        case 'platinum':
          r_amount = amount * 1.6;
          break;
        case 'economic':
          r_amount = amount * 1.15;
          break;
      } 
      return r_amount;
}

app.use(express.static("public")); // serve files in this folder
app.post("/getRate", function(req, res){
    var inputContent = req.body.inputF;
    var inputmethod = req.body.method;
    console.log(inputContent);
    console.log(inputmethod);
    console.log(calculateRate(inputmethod, inputContent));
    console.log("page2 requested");
    //res.write("This page2");
    //res.end();
    res.render(path.join(__dirname+'/page2.ejs'), {key: inputContent, method: inputmethod, price: calculateRate(inputmethod, inputContent).toFixed(2)});
});
app.get("/", function(req, res){
    console.log("Request for root");
    res.sendFile(path.join(__dirname+'/index.html'));
});
app.get("/home", function(req, res){
    console.log("request for home");
    res.write("This is home");
    res.end();
});

app.listen(5000, function(){
    console.log("Server is listening on port 5000");
});