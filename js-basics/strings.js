const message = 'This is my message';

// Strings are indexable
console.log(message[0], message[1], message[2], message[3]);

// And membership tests work, too
console.log(message.includes('This'));

// And other common checks and accessors
console.log(message.startsWith('This'));
console.log(message.includes("is"));
console.log(message.endsWith('Sparta'));
console.log(message.match('my'));
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.capi)
console.log(message.split(' '));

// Remove whitespace
const another = " " + message + " ";
console.log(another.trim());
console.log(another.trimStart());
console.log(another.trimEnd());

// Multi-line strings use the template literal format
// and support all other quote types in the body
const personName = 'John';
const multiLine = 
`Hello ${personName},

Thank for being so considerate and supportive the last ${2 * 5 + 1} years.

Toodles,
Mariano`;
console.log(multiLine);