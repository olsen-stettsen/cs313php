const http = require('http');
const hostname = '127.0.0.1';
const port = 8888;
function onRequest(req, res){
  console.log("request");
  if (req.url == '/home'){
    //res.setHeader('Content-Type', 'text/html');
    //res.write("<h1>Welcome to the Home Page</h1>");
  }
  else if (req.url == '/getData'){
    res.setHeader('Content-Type', 'application/json');
    res.write("{'name':'Br. Burton','class':'cs313'}");
  }
  else if(req.url == './style.css'){
    const fs = require('fs');
    fs.readFile('../style.css', (err, css) => {
      if(err){
        console.log("no css");
      }
      res.setHeader('Content-Type', 'text/css');
      res.write(css);
    });
  }
  else{
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Page Not Found</h1>");
    res.statusCode = 404;
  }
}
//const server = http.createServer(onRequest);
//server.listen(port);

const fs = require('fs');
fs.readFile('../index.html', function (err, html) {
  if (err) {
      throw err; 
  }       
  http.createServer(function(request, response) {  
      response.writeHeader(200, {"Content-Type": "text/html"});  
      response.write(html);  
      response.end();
  }).listen(8888);
});
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});*/
/*
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  onRequest();
});*/
