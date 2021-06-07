var express = require("express");
var app = express();
var data = require("./data/sampleData.json");
var newData = data;

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/scripts"));

// use res.render to load up an ejs view file

// index page

app.get("/", function(req, res) {
  //Getting fresh data
  newData = data;
  if (typeof req.query.name !== "undefined") {
    let name = req.query.name;
    newData = newData.filter(d => d.name.search(name) !== -1);
  }
  res.render("./index", { clientList: newData });
});

app.listen(8080);
console.log("Server is listening on port 8080");
