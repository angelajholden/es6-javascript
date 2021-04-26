// EVERY AND SOME HELPERS

var computers = [
	{ name: "Apple", ram: 24 },
	{ name: "Compaq", ram: 4 },
	{ name: "Acer", ram: 32 },
];

// true by default
var allComputersCanRunProgram = true;

// false by default
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
	var computer = computers[i];

	if (computer.ram < 16) {
		// if less than 16 ram, false
		allComputersCanRunProgram = false;
	} else {
		// if anything over 16 ram, true
		onlySomeComputersCanRunProgram = true;
	}
}

// EVERY HELPER

// check to see if every computer has at least 16 ram
// if not all, then returns false
computers.every(function (computer) {
	return computer.ram > 16; // false
});

// SOME HELPER
// Do any values in the array satisfy the criteria?
// If yes to at least one, returns true

computers.some(function (computer) {
	return computer.ram > 16; // true
});

var names = ["Alexandria", "Matthew", "Joe"];

names.every(function (name) {
	return name.length > 4; // false
});

names.some(function (name) {
	return name.length > 4; // true
});

// Every helper example

var fields = [username, password, birthdate];

var formIsValid = fields.every(function (field) {
	return field.validate;
});

if (formIsValid) {
	// allow user to submit
} else {
	// show an error
}

// Finding Submitted Users

// Given an array of users, return 'true' if every user has submitted a request form.
// Assign the result to the variable 'hasSubmitted'.

var users = [
	{ id: 21, hasSubmitted: true },
	{ id: 62, hasSubmitted: false },
	{ id: 4, hasSubmitted: true },
];

var hasSubmitted = users.every(function (user) {
	return user.hasSubmitted;
});

// In Progress Network Requests

// Given an array of network objects representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' off 'pending'.

var requests = [
	{ url: "/photos", status: "complete" },
	{ url: "/albums", status: "pending" },
	{ url: "/users", status: "failed" },
];

var inProgress = requests.some(function (request) {
	return request.status === "pending";
});
