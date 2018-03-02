var mysql = require("mysql");
var connection = require("./config/connection.js");
var orm = require("./config/orm.js");

// create the connection information for the sql database
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "root",
//   database: "voled_test"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
// });


orm.showTeachers();
orm.showStudents();


// function showTeachers() {
// 	connection.query("SELECT * FROM teachers", function(err, res) {
//     if (err) throw err;

//     // Log all results of the SELECT statement
//     console.log(res);
//   });
// };

// function showStudents() {
// 	connection.query("SELECT * FROM students", function(err, res) {
//     if (err) throw err;

//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// };

