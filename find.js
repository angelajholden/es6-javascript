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
