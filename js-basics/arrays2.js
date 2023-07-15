let numbers = [...Array(5).keys()];
console.log(numbers);

// 'pop()' pops an element from the END of a list
console.log("Popped element: ", numbers.pop());
console.log(numbers);

// 'shift()' pops an element from the START of a list
console.log("Popped element: ", numbers.shift());
console.log(numbers);

// 'splice()' pops a segment of a list (replacing items are optional)

// Functional emptying of an array
// solution 1 - overwriting
numbers = [];
console.log(numbers);

// solution 2 - zeroeing the length
numbers = [...Array(5).keys()];
numbers.length = 0;
console.log(numbers);

// solution 3 - splicing till the end
numbers = [...Array(5).keys()];
numbers.splice(0, numbers.length);
console.log(numbers);

const first = [1, 2, 3];
const second = [ 4, 5, 6];

// 'concat()' has to be used to combine arrays,
// because the '+' operator is not correctly overloaded
// (using '+' on arrays will convert them into a String....)
const combined = first.concat(second);
console.log(combined);
console.log(combined + combined);       // please don't :D

// 'slice()' presents a fragment of an array
// (the original array is untouched!)
console.log("Combined index 2 to 5: ", combined.slice(2, 5));
console.log(combined);
