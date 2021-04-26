// ES6 and ES2015 are the same thing

// The ES6 code we write is converted by Babel into ES5 code

// It's assumed that ES5 is the standard that's safe to run in everyone's browser across the world

// CONST & LET

// Do I expact this value or varialbe to be changed in the future?
// const is not expected to change
// let is expected to change

// ES5

var name = "Jane";
var title = "Software Engineer";
var hourlyWage = 40;

// ES6

const name = "Jane";
let title = "Software Engineer";
let hourlyWage = 40;

// sometime later

title = "Senior Software Engineer";
hourlyWage = 45;
