// ES6 and ES2015 are the same thing

// The ES6 code we write is converted by Babel into ES5 code

// It's assumed that ES5 is the standard that's safe to run in everyone's browser across the world

// Array helper Methods (higher order functions) are meant to replace the old school for loops

var colors = ["red", "blue", "green"];

// These are the same!
// Same number of characters, but less logic and easier to read and understand

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

colors.forEach(function (color) {
	console.log(color);
});

// Create an array of numbers

// Create a variable to hold the sum

// Loop over the array, incrementing the sum varialbe

// print the sum variable

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

// FIND HELPER

var users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

var user;

for (var i = 0; i > users.length; i++) {
	if (users[i].name === "Alex") {
		user = users[i];
		// once we find our user, stop the loop
		break;
	}
}

console.log(user);

// using the find helper instead of the for loop
// don't forget to return or result is undefined
// find the first instance in the iteration
users.find(function (user) {
	return user.name === "Alex";
});

// example of using the find helper

function Car(model) {
	this.model = model;
}

var cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")];

cars.find(function (car) {
	return car.model === "Focus";
});

// more complex example of using the find helper

var posts = [
	{ id: 1, title: "New Post" },
	{ id: 2, title: "Old Post" },
];

var comment = { postId: 1, content: "Great Post" };

function postForComment(posts, comment) {
	return posts.find(function (post) {
		return post.id === comment.postId;
	});
}

postForComment(posts, comment);

// Find the user in the user's array who is an admin. Assign this userr to the variable 'admin'.

var users = [
	{ id: 1, admin: false },
	{ id: 2, admin: false },
	{ id: 3, admin: true },
];

var admin = users.find(function (user) {
	return user.admin === true;
});

// Find the account with a balance of 12 and assign it to the variable 'account'.

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account = accounts.find(function (account) {
	return account.balance === 12;
});

// The most common find operation is to find an object that has a given property.
// Rather than writing out a full function every time, it would be great if we had a shorthand syntax to find an object like this:

findWhere(ladders, { height: "20 feet" });

// The object:

{
	height: "20 feet";
}

// should be used as the search criteria - we would want to find a ladder whose 'height' property was '20 feet'.
// The goal: Write a 'findWhere' function that achieves this shorthand approach.
// 'findWhere' should return the found object.
// In summary:

var ladders = [
	{ id: 1, height: 20 },
	{ id: 3, height: 25 },
];

findWhere(ladders, { height: 25 }); // result: {id:3, height:25}

// Hint: the hard part of this is figuring out the name of the property on the criteria.
// You can use

Object.keys(criteria)[0];

// to figure out the name of the property on the object.
// For example,

Object.keys({ height: "20 feets" });

// would return 'height'.
// You could then check to see if a given element in the array had a property equal to the criteria's value with something like

element[property] === criteria[property];

// Solution

var ladders = [
	{ id: 1, height: 20 },
	{ id: 3, height: 25 },
];

function findWhere(array, criteria) {
	var propertyName = Object.keys(criteria)[0];
	return array.find(function (item) {
		return item[propertyName] === criteria[propertyName];
	});
}

findWhere(ladders, { height: 20 });

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
