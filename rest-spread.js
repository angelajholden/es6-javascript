// REST AND SPREAD

// first, sum the numbers using reduce
// ...rest -- rest operator; used whenever we want to capture a list of arguments
function addNumbers(...numbers) {
	return (
		numbers,
		// use fat arrow to replace function keyword
		reduce((sum, number) => {
			return sum + number;
		}, 0)
	);
}

// what if 5 arguments instead of array of 5 numbers
addNumbers(1, 2, 3, 4, 5);

// two arrays of colors
const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];

// concat method
defaultColors.concat(userFavoriteColors);

// spread operator
[...defaultColors, ...userFavoriteColors];

// result is the same for both
["red", "green", "orange", "yellow"];

// spread operator with extra item
["blue", ...defaultColors, ...userFavoriteColors];

// result with extra item
["blue", "red", "green", "orange", "yellow"];

// make a shopping list that always includes milk
function validateShoppingList(...items) {
	if (items.indexOf("milk") < 0) {
		return ["milk", ...items];
	}
	return items;
}
validateShoppingList("oranges", "bread", "eggs");

// another example of using the rest operator
// changing the name of a method without dupilicating code or deleting the original method

// this has duplicate code
const MathLibrary = {
	calculateProduct(a, b) {
		return a * b;
	},
	multiply(a, b) {
		return a * b;
	},
};

// using the rest operator
const MathLibrary = {
	// this can be deleted once fully deprecated
	// ...rest handles pass-through of code very easily
	calculateProduct(...rest) {
		console.log("Please use the multiply method instead");
		return this.multiply(...rest);
	},
	multiply(a, b) {
		return a * b;
	},
};

// Mixing Rest and Spread
function unshift(array, a, b, c, d, e) {
	return [a, b, c, d, e].concat(array);
}

function unshift(array, ...rest) {
	return [...rest, ...array];
}
