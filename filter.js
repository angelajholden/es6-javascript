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
