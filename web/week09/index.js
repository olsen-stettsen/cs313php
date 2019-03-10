const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("public"));
app.get("/", function(res, res){
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