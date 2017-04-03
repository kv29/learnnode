var http = require('http');
exports.serverstart = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3001, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3001/');

exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

