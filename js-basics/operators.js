// arithmetics
let x = 10;
let y = 3;
// 'double' logic works
console.log(`${x} / ${y} gives ${x / y}.`);
// power operator
console.log(`${x} to the power of ${y} is ${x ** y}`);
// NOTE: The other operators (including increment/decrement) behave as expected

// assignement operators behave as expected
console.log(`The value of x is ${x}.`);
x += 5;
console.log(`Now the value of x is ${x}.`);

// comparison operators
console.log(x > 2);         // true
console.log(x > 'whatcha tryin to do, huh?');    // please don't do math with strings!

// strict equality operators (type + value comparison!)
console.log(x === 1);       // false
console.log(x !== 2);       // true
console.log('1' === 1);     // false
// NOTE: weak equality operators automatically cast across types
// 1 == '1' == true
// 0 == '0' == false

// C/C++-style ternary operator
let currentPoints = 100;
let customerType = currentPoints > 100 ? 'gold' : 'silver';
console.log(customerType);

// Logical operators behave the same as in C/C++, and can be directly assigned to variables
let hasIncome = true;
let hasHouse = false;
let eligibleForFunding = hasHouse && !hasIncome;
console.log(eligibleForFunding);

// Logical operators can be used on non-boolean expressions like in Python,
// relying on the truthy/falsey value of a variable,
// f.e. '' - false, 'non-empty string' - true
console.log(`Hello my ${false || 'dude!'}`);

let userColor = undefined;
let defaultColor = 'blue';
let chosenColor = userColor || defaultColor;
console.log(chosenColor);

// Bitwise operators behave the same way as in other languages
let currentPermissions = 7;
let writePermissions = 4;
let readPermissions = 2;
let execPermissions = 1;

console.log(currentPermissions)
// toggle OFF
currentPermissions ^= writePermissions;
console.log(currentPermissions);
// toggle ON again
currentPermissions ^= writePermissions;
console.log(currentPermissions);
