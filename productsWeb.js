// require() is a function to import everything I need.
var http = require('http');

// Creates a new server.
var server = http.createServer(function(req,res){
    res.end("<html><body><h1>Listing products</h1></body></html>");
});

// sets the port.
server.listen(3000);

// Show the message server is running.
console.log("Server is Running!");
