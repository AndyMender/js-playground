const message = 'This is my message';

// Strings are indexable
// Output: 'T h i s'
console.log(message[0], message[1], message[2], message[3]);

// And membership tests work, too
// Output: 'true'
console.log(message.includes('This'));

// And other common checks and accessors
// Output: 'true'
console.log(message.startsWith('This'));
// Output: 'true'
console.log(message.includes("is"));
// Output: 'false'
console.log(message.endsWith('Sparta'));
// Output: complete regex expression with .index defining the beginning of the match
const regexMatch = message.match('my')
console.log(`Regex expression: ${regexMatch}, input: ${regexMatch.input}, found at position: ${regexMatch.index}`);
console.log(message.length);
// Output: THIS IS MY MESSAGE
console.log(message.toUpperCase());
// Output: this is my message
console.log(message.toLowerCase());
// Output: array containing the individual words
console.log(message.split(' '));

// Remove whitespace
const another = " " + message + " ";
console.log(another);
// Output: Removes leading and trailing whitespace
console.log(another.trim());
// Output: Removes only leading whitespace
console.log(another.trimStart());
// Output: Removes only trailing whitespace
console.log(another.trimEnd());

// Multi-line strings support templating 
// support all other quote types in the body
const personName = 'John';
const multiLine = 
`Hello ${personName},

Thank for being so considerate and supportive the last ${2 * 5 + 1} years.

Toodles,
Mariano`;
console.log(multiLine);