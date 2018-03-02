var teacherData = require("../data/data");

module.exports = function(app) {

	app.get("/api/table", function(req, res) {
    	res.json(teacherData);
    });

    // app.post("/api/table", function(req, res) {
    // 	teacherData.push(req.body);
    // })

};