const express = require("express");
const app = express();

app.get("/", function(res, res){
    console.log("Request for root");
    res.write("This is the root");
    res.end();
});
app.get("/home", function(req, res){
    console.log("request for home");
    res.write("This is home");
    res.end();
});

app.listen(5000, function(){
    console.log("Server is listening on port 5000");
});