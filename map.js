// MAP HELPER
// map is used whenever we want to modify records in some list of data
// common use of map is to collect properties off of an array of object
var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
	// numbers[i] = numbers[i] * 2; do not mutate (change) numbers array

	doubledNumbers.push(numbers[i] * 2); // create a new array
}

var doubled = numbers.map(function (number) {
	// always return a value or map will think we're ruturning undefined
	return number * 2;
});

doubled;
doubledNumbers;

var cars = [
	{ model: "Buick", price: "CHEAP" },
	{ model: "Camero", price: "expensive" },
];

// we're plucking objects off of the array, very common
var prices = cars.map(function (car) {
	return car.price;
});

console.log(prices);

// Using map, create a new array that contains the 'height' property of each object. Assign the new array to the variable 'height'. Don't forget to use the 'return' keyword.

var images = [
	{ height: "34px", width: "39px" },
	{ height: "54px", width: "19px" },
	{ height: "83px", width: "75px" },
];

var heights = images.map(function (image) {
	return image.height;
});

console.log(heights);

// Create a new array that contains the distance/time value from each trip. The new array should contain the (distance/time) value. Assign the result to the variable 'speeds'.

var trips = [
	{ distance: 34, time: 10 },
	{ distance: 90, time: 50 },
	{ distance: 59, time: 25 },
];

var speeds = trips.map(function (trip) {
	return trip.distance / trip.time;
});

console.log(speeds);

// Implement a 'pluck' function. Pluck should accept an array and a string representing a property name and return an array containing that property from each object.
var dogs = [{ name: "Risky" }, { name: "Ryan" }, { name: "Heidi" }];

function pluck(array, property) {
	var result = array.map(function (obj) {
		return obj[property];
	});

	return result;
}

pluck(dogs, "name");
