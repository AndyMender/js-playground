const first = [1, 2, 3];
const second = [4, 5, 6];

// Instead of 'concat()', one can unpack collections into each other
const combined = [...first, ...second];
console.log(combined);

// Simple iteration
for (const number of combined) {
    console.log(number);
}

// For-each loop with predicate
// TODO: How to modify an array in place using 'forEach()'? Is it possible?
combined.forEach((number, index) => console.log(`${number} at index ${index}`));
combined.forEach(number => number * 2);
console.log(combined);

// Stringifying an array a la Python's '' '.join(array)'
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
courses.sort();             // nothing changes - refs can't be sorted!
console.log(courses);

// NOTE: The -1, 1, 0 scoring is critical
function sort_cources(first, second) {
    // first < second => -1
    // first > second => 1
    // first === second => 0

    // NOTE: For 'name' sorting, one has to use 'toLowerCase()',
    // because character order comparison is done using the ASCII table
    if (first.id < second.id) return -1;
    else if (first.id > second.id) return 1;
    return 0;
}

courses.sort(sort_cources);
console.log(courses);

// Add an element and resort
courses.push({ id: 4, name: 'ReactJS' });
console.log(courses);
courses.sort(sort_cources);
console.log(courses);
