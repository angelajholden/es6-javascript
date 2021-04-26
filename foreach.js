// FOREACH HELPER
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
