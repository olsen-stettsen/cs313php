const http = require('http');

const hostname = '127.0.0.1';
const port = 8888;
function onRequest(req, res){
  console.log("request");
  if (req.url == '/home'){
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('../index.html', (err, html) =>{
      if(err){
        console.log("no html");
      }
      res.write(html);
    });
    //res.write("<h1>Welcome to the Home Page</h1>");
  }
  else if (req.url == '/getData'){
    res.setHeader('Content-Type', 'application/json');
    res.write("{'name':'Br. Burton','class':'cs313'}");
  }
  else{
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Page Not Found</h1>");
    res.statusCode = 404;
  }
}
const server = http.createServer(onRequest);
/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});*/
server.listen(port);
/*
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  onRequest();
});*/
