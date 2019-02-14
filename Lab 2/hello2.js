
var fs = require("fs"); 
var readline = require("readline");

var buffer = fs.readFileSync("greetings.txt");
var data = buffer.toString();
var greeting_array = data.split('\n');

var r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
var greeting_array = greeting_array.filter(function(el) { return el != ''; });
var arr_len = greeting_array.length;

r1.question("What is your name? ", function(data) {
	var i;

	for (i = 0; i < arr_len; i++) {
		var random_index = Math.floor(Math.random() * Math.floor(arr_len));
		var greeting = greeting_array[random_index];
		console.log(greeting + " " + data);
	}

	r1.close();
});

