const express = require('express')
const path = require('path')
const { Client } = require('pg')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
/*
app.post("/update", function(req, res){
  var name = req.body.name;
  var excercise = req.body.excercise;
  var weight = req.body.weight;
  console.log(name);
  console.log(excercise);
  console.log(weight);
  //console.log(calculateRate(inputmethod, inputContent));
  //console.log("page2 requested");
  //res.render(path.join(__dirname+'/page2.ejs'), {key: inputContent, method: inputmethod, price: calculateRate(inputmethod, inputContent).toFixed(2)});
});

function writesql(name, excercise, weight){

}
/*
  function makerequest(name, exercise, weight){    
    alert(name);
    const server = http.createServer((req, res) => {
      const client = new Client({
        connectionString: DATABASE_URL,
      });
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      client.connect()
        .then(() => client.query('SELECT * FROM hellotable'))
        .then((result) => {
          res.end(`${result.rows[0].name}\n`);
          client.end();
        })
        .catch(() => {
          res.end('ERROR');
          client.end();
        });
    });
  }*/