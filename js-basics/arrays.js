const numbers = [3, 4];

// Basic array operations
// NOTE: 'push()' (to the end of the array) is allowed even though the array is 'const'.
//       'const' refers only to the pointer to the array!
numbers.push(5, 6);
numbers.push(...[7, 8]);
console.log(numbers);

// 'unshift()' (to the start of the array)
numbers.unshift(...[0, 1, 2]);
console.log(numbers);

// 'splice()' (remove 'N' elements from position 'x')
// NOTE: This is an in-place operation!
const x = 2;
const N = 3;
console.log(numbers.splice(x, N));              // the removed elements
console.log(numbers);                           // the rest of the array
numbers.splice(x, N, ...[0, 0, 0]);;            // replaces the splice region with 3 x 0
console.log(numbers);

// Find primitive types in an array
const numbers2 = [1, 2, 3, 4];
console.log(numbers2.indexOf('a'));                             // -1 because it's not there, duh!
console.log(numbers2.indexOf(2));                               // the actual index
console.log(numbers2.indexOf('1'));                             // here, JS disambiguates between a String and Number
console.log(numbers2.includes(1) && numbers2.indexOf(1) != -1);

// Find reference types in an array
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
    { id: 3, name: 'a' }
 ];

// Same composition, but different refs - different object!
console.log("Comparing different refs of the 'same' object?", courses.includes({ id: 1, name: 'a' }));

// 'find()' returns 'undefined' if the predicate is not satisfied
// old notation using a nameless function
let found_item = courses.find(function(course) {
    return course.id == 1 && course.name == 'a';
});
console.log(found_item);

// arrow function
found_item = courses.find(course => course.id == 1 && course.name === 'a');
console.log(found_item);

// 'find()' returns only the first element satisfying the predicate
found_item = courses.find(course => course.name === 'a');
console.log(found_item);
