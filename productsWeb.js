// require() is a function to import everything I need.
var http = require('http');
var port = 3000;
var IP = "localhost";

// Creates a new server.
var server = http.createServer(function(req,res){
  console.log("Received a new request");
  res.writeHead(200, {'Content-Type': 'text/html'});
  if(req.url === "/products"){
    res.end("<html><body><h1>Listing the products.</h1></body></html>");
  } else {
    res.end("<html><body><h1>Homepage.</h1></body></html>");
  }
});

// sets the listener.
server.listen(port, IP);

// Show the message server is running.
console.log("Server is Running at http://"+IP+":"+port+"/");
