var mysql = require("mysql");
var connection = require("./connection.js");




// var orm = {
//   selectWhere: function(tableInput, colToSearch, valOfCol) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
//     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },
//   selectAndOrder: function(whatToSelect, table, orderCol) {
//     var queryString = "SELECT teachers FROM ?? name BY ?? DESC";
//     console.log(queryString);
//     connection.query(queryString, [teachers, table, orderCol], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },
// };

var data = [];

var orm = {
	showTeachers: function() {
		connection.query("SELECT * FROM teachers", function(err, res) {
	    if (err) throw err;
	    // var teacherArray;

	    // Log all results of the SELECT statement
	    // console.log(res);
		     for (var i = 0; i<res.length; i++) {
		    	data.push(res[i]);
		    	// var createCard = $("<div>");
		    	// createCard.addClass("card-body");
		    	// createCard.html(data);
		    	// $(".card").append(createCard);
		    }
		    console.log(data);
	  	});
	},
	showStudents: function() {
		connection.query("SELECT * FROM students", function(err, res) {
	    if (err) throw err;

	    // Log all results of the SELECT statement
	    console.log(res);
	    connection.end();
	  	});
	},
}

module.exports = orm;


// SELECT COUNT (numStudents) FROM teachers

// name
// subject
// numStudents
// description
// location
// timeOf
// dateOf

// click on