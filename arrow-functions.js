// ARROW FUNCTIONS

// full meal deal
const add = function (a, b) {
	return a + b;
};
add(1, 2);

// fat arrow; remove the function keyword
const add = (a, b) => {
	return a + b;
};
add(1, 2);

// remove {} and return keyword; implicit return of the function
// one expression - we do not have to use {}
const add = (a, b) => a + b;
add(1, 2);

// more fat arrow functions
const double = function (number) {
	return 2 * number;
};

double(8);

// if function has single argument, can also remove ()
// const double = number => 2 * number;

// when to use fat arrow functions
// this is not equal to team in this case

const team = {
	members: ["Jane", "Bill"],
	teamName: "Super Squad",
	teamSummary: function () {
		// without fat arrow function
		return this.members.map(function (member) {
			return `${member} is on team ${this.teamName}`;
		});
	},
};
team.teamSummary(); // TypeError: Cannot read property 'teamName' of undefined

// fat arrow functions make use of 'lexial this'
// this === team

const team = {
	members: ["Jane", "Bill"],
	teamName: "Super Squad",
	teamSummary: function () {
		// with fat arrow function
		return this.members.map((member) => {
			return `${member} is on team ${this.teamName}`;
		});
	},
};
team.teamSummary();
