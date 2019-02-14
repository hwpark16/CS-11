var functions = require("./functions");
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));

var bonusInfo = fs.readFileAsync("bonuses.json").then(JSON.parse);
var employeeInfo = fs.readFileAsync("employees.json").then(JSON.parse);

Promise.all([bonusInfo, employeeInfo]).spread(function(bonusInfo, employeeInfo) {

	var bonusedEmployees = JSON.stringify(functions.
		getBonusedEmployees(employeeInfo, bonusInfo));

	var log = functions.makeLog(functions.getBonusedEmployees(employeeInfo, bonusInfo));

	fs.writeFileAsync("bonusedEmployees.json", bonusedEmployees);

	fs.writeFileAsync("log.txt", log);

});