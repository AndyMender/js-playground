const first = [1, 2, 3];
const second = [4, 5, 6];

// Instead of 'concat()', one can unpack collections into each other - useful for multiple arrays!
const combined = [...first, ...second];
console.log(combined);

// Simple iteration
for (const number of combined) {
    console.log(number);
}

// For-each read-only loop with predicate
// (index is always in 2nd position)
combined.forEach((number, index) => console.log(`${number} at index ${index}`));
// NOTE: `forEach` is only for triggering side effects. It doesn't return anything, nor modify the collection in-place
combined.forEach(number => number * 2);     // returns 'undefined'
console.log(combined);

// Stringifying an array a la Python's `' '.join(array)`
const message = combined.join('-');
console.log(message);
// Split an array a la Python's 'split(array, ' ')'
console.log(message.split('-'));

// Array sorting and reverse sorting of primitives
const numbers = [2, 3, 1, 5, 0];
console.log(numbers)
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);

// Array sorting of objects
const courses = [
    { id: 2, name: 'node.js' },
    { id: 1, name: 'JavaScript' },
    { id: 3, name: 'Python' },
    { id: 5, name: 'C++' }
];
console.log(courses);
console.log("Trying to sort array of objects with default approach...")
courses.sort();             // nothing changes - object refs can't be sorted!
console.log(courses);

// NOTE: The -1, 1, 0 scoring is critical
// first < second => -1
// first > second => 1
// first === second => 0

function sortById(first, second) {
   return (first.id < second.id) ? -1
        : (first.id > second.id) ? 1
        : 0;
}

function sortByName(first, second) {
    // For 'name' sorting, one has to use 'toLowerCase()',
    // because character order comparison is done using the ASCII table
    // WARNING: 'name' parameter should probably be checked if not 'undefined'
    const firstNameLower = first.name.toLowerCase();
    const secondNameLower = second.name.toLowerCase();

    return (firstNameLower < secondNameLower) ? -1
        : (firstNameLower > secondNameLower) ? 1
        : 0;
}

console.log("Trying to sort an array of objects by id...")
courses.sort(sortById);
console.log(courses);

// Add an element and resort
console.log("Adding a new element...")
courses.push({ id: 4, name: 'ReactJS' });
console.log(courses);

console.log("Sorting by id again...")
courses.sort(sortById);
console.log(courses);

console.log("Sorting array of objects by name...");
courses.sort(sortByName);
console.log(courses);
