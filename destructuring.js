// DESTRUCTURING

var expense = {
	type: "Business",
	amount: "$45 USD",
};

// es5 way to write code
var type = expense.type;
var amount = expense.amount;

// es6 way to write code
// we're not creating objects
const { type } = expense;
const { amount } = expense;

// destructure even more
const { type, amount } = expense;

// destructuring arguments object
var savedFiled = {
	extention: "jpg",
	name: "repost",
	size: 14040,
};

// can add an extra property from the object below
function fileSummary({ name, extention, size }, { color }) {
	return `The file ${name} is ${color}, and .${extention} is of size ${size}.`;
}

// can add an extra object
fileSummary(savedFiled, { color: "red" });

// destructuring arrays
const companies = ["Facebook", "Apple", "Netflix", "Google"];

const [fang, fang2, fang3, fang4, fang5] = companies;

fang; // Facebook
fang2; // Apple
fang3; // Netflix
fang4; // Google
fang5; // undefined -- does not throw an error

// these are the same
const [fang] = companies; // es6
const firstCompany = companies[0]; // es5

// to destructure a property we use {}
// to destructure an element from an array we use []

// the array doesn't have a 'fang' property
const { fang } = companies;

// but it does have a 'length' property
const { length } = companies;
length; // 3

// can also use ...rest and ...spread operators with destructuring
const [fang, ...fangs] = companies;
[fang, ...fangs];

// Destructuring arrays and objects *At the Same Time*

const companies = [
	{ name: "Google", location: "Mountain View" },
	{ name: "Facebook", location: "Menlo Park" },
	{ name: "Uber", location: "San Francisco" },
];

var location = companies[0].locaton; // es5

// get the first object; and the location property
// two sets of destructuring
// goes from the outside in
// first the object, then the property
const [{ location }] = companies; // es6

const Google = {
	locations: ["Mountain View", "New York", "London"],
};

// get the first array, then the first property of the array
// uncommon useage
const {
	locations: [city, ...cities],
} = Google;

// when to use destructuring

// by descructuring and creating an object, these can be in any order
function signup({ username, password, email, dateOfBirth, city }) {
	// create new user
}

const user = {
	username: "myname",
	password: "mypassword",
	email: "myemail@example.com",
	dateOfBirth: "1/1/1900",
};

signup(user);

// more destructuring

const points = [
	[4, 5],
	[10, 1],
	[0, 40],
];

points.map(function ([x, y]) {
	return { x, y };
});
