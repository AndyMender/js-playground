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
