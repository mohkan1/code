const http = require('http');

const hostname = '172.0.0.1';
const port = 4123;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hunter');
});

server.listen(port, hostname, () => {
  console.log("got it bruh");
});
