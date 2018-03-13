var path = require("path");


module.exports = function(app) {

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about-us.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login-page.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile-page.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup-page1.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};