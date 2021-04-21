// FOREACH HELPER

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

//  Create a variable to hold the sum
var sum = 0;

// Can also create a function to run with forEach
function adder(number) {
	sum += number;
}
numbers.forEach(adder);

// Loop over the array, incrementing the sum variable
numbers.forEach(function (number) {
	sum += number;
});
//  Print the sum variable
sum;

// Rewrite the for loop with a forEach loop
function handlePosts() {
	var posts = [
		{ id: 23, title: "Daily JS News" },
		{ id: 52, title: "Code Refactor City" },
		{ id: 105, title: "The Brightest Ruby" },
	];

	// old
	for (var i = 0; i < posts.length; i++) {
		savePost(posts[i]);
	}
	// new
	posts.forEach(function (post) {
		savePost(post);
	});
}

// Using the forEach helper, calulate the area of each image and store it in a new array called 'areas'. The area of an image can be calulated as 'image.height * image.width'.

var images = [
	{ height: 10, width: 30 },
	{ height: 20, width: 90 },
	{ height: 54, width: 32 },
];
var areas = [];

images.forEach(function (image) {
	areas.push(image.height * image.width);
});

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

// FILTER HELPER

// don't forget the 'return' keyword
// filters always return truthy or falsey values

var products = [
	{ name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
	{ name: "banana", type: "fruit", quantity: 10, price: 15 },
	{ name: "celery", type: "vegetable", quantity: 30, price: 9 },
	{ name: "orange", type: "fruit", quantity: 3, price: 5 },
];

// never mutate the original array
// always create a new array
var filteredProducts = [];

// OG for loop
for (var i = 0; i < products.length; i++) {
	if (products[i].type === "fruit") {
		filteredProducts.push(products[i]);
	}
}

console.log(filteredProducts);

// use the filter helper instead
products.filter(function (product) {
	return products.type === "fruit"; // this already returns a truthy value

	// this is not necessary
	if (product.type === "fruit") {
		return true;
	}
});

// Type is 'vegetable', quantity is greater than 0, price is less than 10

products.filter(function (product) {
	return product.type === "vegetable" && product.quantity > 0 && product.price < 10;
});

// Given a particular post (id = 4), return the comments associated with that post

var post = { id: 4, title: "New Post" };
var comments = [
	{ postId: 4, content: "awesome post" },
	{ postId: 3, conetnt: "it was ok" },
	{ postId: 4, content: "neat" },
];

function commentsForPost(post, comments) {
	return comments.filter(function (comment) {
		return comment.postId === post.id;
	});
}

console.log(commentsForPost(post, comments));

// Create a new array of numbers that only contain numbers greater than 50 using the filter helper

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function (number) {
	return number > 50;
});

// Filter the array of users, only returning users who have admin level access. Assign the result to the variable 'filteredUsers'.

var users = [
	{ id: 1, admin: true },
	{ id: 2, admin: false },
	{ id: 3, admin: false },
	{ id: 4, admin: false },
	{ id: 5, admin: true },
];

var filteredUsers = users.filter(function (user) {
	return user.admin === true;
});

// Create a function called 'reject'. Reject should work in the opposite way of 'filter'.
// If a function returns 'true', the item should not be included in the new array.
// Hint: we can reuse filter.

var numbers = [5, 10, 15, 25, 66, 89];

// create the function
function reject(array, iteratorFunction) {
	return array.filter(function (element) {
		return !iteratorFunction(element);
	});
}

// call the function
var lessThanFifteen = reject(numbers, function (number) {
	return number > 15;
});

// print the result
console.log(lessThanFifteen);
