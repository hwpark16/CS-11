
var fs = require("fs");
var http = require("http");
var url = require("url");


fs.readFile("greetings.txt", function(err, buffer) {

	if (err === null) {
		http.createServer(function (req, res) {
			var data = buffer.toString();
			var greeting_array = data.split('\n');
			var greeting_array = greeting_array.filter(function(el) { return el != ''; });
			var arr_len = greeting_array.length;
			var random_index = Math.floor(Math.random() * Math.floor(arr_len));
			var greeting = greeting_array[random_index];

			var q = url.parse(req.url, true).query;

			if (q.name === undefined) {
				res.writeHead(200, {"Content-Type": "text/plain"});
				return res.end(greeting);
			}
			else {
				res.writeHead(200, {"Content-Type": "text/plain"});
				return res.end(greeting + " " + q.name);
			}
		}).listen(8080);
	}

	else {
		console.log(err);
	}

});