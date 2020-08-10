// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "rnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "nb61312l6frlbnql",
  password: "t4zdnmxvufjij7he",
  database: "qensr3z8ucby97tq"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
