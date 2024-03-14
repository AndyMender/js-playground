// JS prefers camelCase for variable names and separate lines for each declaration
let firstName = 'Andy';
let lastName = 'Mender';
console.log(firstName);
console.log(lastName);

// basic constant declaration
const interestRate = 0.3;

// all primitive types are declared the same way
let age = 30;
let senseOfHumor = 0.5;
let isApproved = true;
let mainInterest = undefined;       // no value set (yet?)
let favoriteColor = null;           // setting an empty value or clearing

// Type checking
// Integers and floats both count as floats of type 'number'
console.log(typeof age);
console.log(typeof senseOfHumor === 'number');
// 'undefined' is a single-value type
console.log(typeof mainInterest);
// null counts as type 'object'
console.log(typeof favoriteColor);

// Objects
let person = {
    name: 'John',
    age: 30,
};
console.log(person);

// Object accessors
person.name = 'Alan';
console.log(person.name);
person['name'] = 'John';    // key lookup supports also variables
console.log(person['name']);

// Arrays (subtype of object)
let selectedColors = ['red', 'blue', 'green', 'yellow'];
console.log(selectedColors);
console.log("First color: " + selectedColors[0]);
console.log("Number of colors: " + selectedColors.length);
// Arrays are extended via assignement to a new cell
selectedColors[4] = 'orange';
console.log("Number of colors: " + selectedColors.length);

// Functions
function greet(person) {
    console.log(`Hello ${person.name}, dear.`);
}
greet(person);
greet('Steve');

function greetFull(firstName, lastName) {
     console.log(`Hello ${firstName} ${lastName}!`)   
}
// Nut supplied parameters are set to 'undefined' by default
greetFull(person.name);
greetFull(firstName, lastName);

function square(number) {
    return number * number;
}
let number = 5;
console.log(`${number} * ${number} is ${square(number)}.`);
