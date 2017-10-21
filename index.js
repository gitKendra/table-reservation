var app = require('express')();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

// boilerplate for app.use
app.use(bodyParser.urlencoded({ extended: false }]));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send("Some text");
});


app.listen(PORT, function(){
	console.log("listening on port " + PORT);
});