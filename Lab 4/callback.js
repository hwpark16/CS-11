var functions = require("./functions");
var fs = require("fs");

// Reads employees.json file
fs.readFile("employees.json", function(err, data) {
	if (err) {
		console.log(err);
	}

	// Parses JSON data into employeeInfo
	var employeeInfo = JSON.parse(data);

	// Reads bonuses.json file
	fs.readFile("bonuses.json", function(err, data) {
		if (err) {
			console.log(err);
		}

		// Parses JSON data into bonusInfo
		var bonusInfo = JSON.parse(data);

		// Converts JS object of bonused employees to string in JSON format
		var bonusedEmployees = JSON.stringify(functions.
			getBonusedEmployees(employeeInfo, bonusInfo));

		// Writes list to JSON file.
		fs.writeFile("bonusedEmployees.json", bonusedEmployees, function(err) {
			if (err) {
				console.log(err);
			}

			// Uses makeLog() function to get log string
			var log = functions.makeLog(functions.getBonusedEmployees(employeeInfo, bonusInfo));
			// Writes string to text file.
			fs.writeFile("log.txt", log, function(err) {
				if (err) {
					console.log(err);
				}
				console.log("Finished process!");
			})

		});
	});

});