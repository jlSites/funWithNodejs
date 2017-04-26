const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });

  response.write('<h1>hello, world</h1>');

  response.end();
}).listen(1337, function() {
  console.log("hello is listening at %s", 1337);
});
