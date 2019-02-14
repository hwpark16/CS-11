var fs = require("fs"); 
var i;

var buffer = fs.readFileSync("greetings.txt");
var data = buffer.toString();
var greeting_array = data.split('\n');

var greeting_array = greeting_array.filter(function(el) { return el != ''; });
var arr_len = greeting_array.length;

for (i = 0; i < arr_len; i++) {
	console.log("Hello, world!");
}

