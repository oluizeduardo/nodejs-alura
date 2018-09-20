var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "mysql",
  password: "mysql"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
