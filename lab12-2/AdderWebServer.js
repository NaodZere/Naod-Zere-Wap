var http = require('http');
// url > means the hole link found in the top 
var url = require('url');
var fs = require('fs');
var addmod = require('./addmod.js');

http.createServer(function (req, res) {
    // url.parse is seperating req.url which means when we call q.pathname which str
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  if (q.pathname == "/add.js")
    addmod.add(req,res,q.query)
  else 
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200);  // Content-Type not included
    res.write(data);
    return res.end();
  });
}).listen(8080);
