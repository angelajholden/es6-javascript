// REDUCE HELPER

// classic for loop example to sum numbers in an array

var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

console.log(sum);

// Reduce way to sum an array of numbers

numbers.reduce(function (sum, number) {
	return sum + number;
}, 0); // needs an initial value -- can be anything we want it to be

// Using reduce to make a new array

var primaryColors = [{ color: "red" }, { color: "yellow" }, { color: "blue" }];

// first argument in fuction represents the thing that keeps getting carried through; 'previous', 'acc', 'accumulator', etc.,
// it's the previous value when we last went through this loop
// second argument is the object in the array; 'primaryColor'
// initial value of function is empty array, since we're building a new array
primaryColors.reduce(function (previous, primaryColor) {
	// We are violating the rule to not mutate an array. By using previous.push(), we are clearly changing the array into something we are trying to build.
	previous.push(primaryColor.color);
	// By returning previous, we have returned a new, mutated array
	return previous;
}, []);

// Example of reduce helper: Balanced Parens

// ()()()() -- these are balanced
// (((()))) -- these are balanced
// )()()()( -- not balanced
// (((( -- not balanced
// ())))) -- not balanced

// create a function that accepts a string
function balancedParens(string) {
	// ! to flips the truthy/falsey values
	// 0 = true; flips to falsey
	// + is true; flips to falsey
	// - is false; flips to truthy
	// converts a -/+ number to boolen; truthy or falsey
	return !string.split("").reduce(function (previous, char) {
		// parens may be equal but still unbalanced, i.e. ')('
		// if previous less than 0, just return previous; don't do anything to it
		if (previous < 0) {
			return previous;
		}
		if (char === "(") {
			return ++previous;
		}
		if (char === ")") {
			return --previous;
		}
		return previous;
	}, 0);
}

balancedParens("(((("); // false

// Distance Traveled

// Use the 'reduce' helper to find the sum of all the distances traveled.
// Assign the result to the variable 'totalDistance'.

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function (previous, trip) {
	return previous + trip.distance;
}, 0);

// Reducing Properties

// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.
// The object returned should have the form '{sitting: 3, standing: 2}'.
// The initial value has been provided to us.
// Hint: Don't forget to return the accumulator object (the first argument to the iterator function).

var desks = [{ type: "sitting" }, { type: "standing" }, { type: "sitting" }, { type: "sitting" }, { type: "standing" }];

var deskTypes = desks.reduce(
	function (previous, desk) {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
		previous[Object.values(desk)]++;

		// if (desk.type === 'sitting') {
		// 	return previous(desk)++;
		// }
		// if (desk.type === 'standing') {
		// 	return previous(desk)++;
		// }
		return previous;
	},
	{ sitting: 0, standing: 0 }
);

deskTypes;

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
	// iterate through array
	return array.reduce(function (previous, current) {
		// check if number coming into array exists previously in the accumulator, and if so do nothing, if not add to accumulator
		previous.find((previousValue) => current === previousValue) ? previous : previous.push(current);

		// previous.find(function (previousValue) {
		// 	if (current === previousValue) {
		// 		return true;
		// 	} else if (previous) {
		// 		return previous.push(current);
		// 	}
		// });

		return previous;
	}, []);
}
unique(numbers);

// without comments
// function unique(array) {
// 	return array.reduce(function (acc, number) {
// 		acc.find((previousValue) => number === previousValue) ? acc : acc.push(number);
// 		return acc;
// 	}, []);
// }
