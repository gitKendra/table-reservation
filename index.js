var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var tables = require('./api/tables.json');
var waitlist = require('./api/waitlist.json');

var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
	res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
	res.json(waitlist);
});

app.post("/api/tables", function(req, res){
	var newTable = req.body;
	if(tables.length < 5){
		tables.push(newTable);
	}
	else{
		waitlist.push(newTable);
	}
	res.json(newTable);
});

app.listen(PORT,function(){
    console.log("listening to port %s",PORT);
});