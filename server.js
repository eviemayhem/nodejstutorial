const http = require('http');

const server =http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type
  res.setHeader('Content-Type', 'text/html');

  res.write('<head><h1>Too tired to follow the entire tutorial.</h1></head>')
  res.write("<p>Hello World</p>");
  res.end();
});

server.listen(3000, 'localhost',  () => {
  console.log("server is listening on port 3000");
});







