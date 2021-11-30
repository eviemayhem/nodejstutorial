const http = require('http');
const fs = require('fs');
const lodash = require('lodash');


const server =http.createServer((req, res) => {
  //lodash
const num = lodash.random(0,20);
console.log(num);

const greet = lodash.once(() => {
  console.log('Hello World');
});

greet();
greet();



  //set header content type
  res.setHeader('Content-Type', 'text/html');

 let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/404':
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end('404');
      } else {
        res.end(data);
      }
    })


  res.write('<head><h1>Too tired to follow the entire tutorial.</h1></head>')
  res.write("<p>Hello World</p>");
  res.end();
});

server.listen(3000, 'localhost',  () => {
  console.log("server is listening on port 3000");

});







