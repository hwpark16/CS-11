
// This function gives a bonus to employees and returns list of
// bonused employees.
function getBonusedEmployees(employeeInfo, bonusInfo) {

	var bonusedEmployees = [];

	for (i = 0; i < employeeInfo.length; i++) {
		var employee = employeeInfo[i];
		var employeeId = employee.id;

		if (bonusInfo[employeeId]) {
			var newSalary = employee.salary + 1000 * employee.yearsWorking;
			var updatedEmployee = {"id": employee.id, "fullName": employee.name.first + " " + 
				employee.name.last, "newSalary": newSalary};
			bonusedEmployees.push(updatedEmployee);
		}
	}
	return bonusedEmployees;
};

// This function generates the log information for the bonused
// employees. Returns a string.
function makeLog(bonusedEmployees) {

	var log = ""

	for (i = 0; i < bonusedEmployees.length; i++) {
		var employee = bonusedEmployees[i];
		var result = employee.fullName + " " + employee.newSalary + "\n";
		log += result;
	}

	return log
};

module.exports = {
	getBonusedEmployees: getBonusedEmployees,
	makeLog: makeLog
};