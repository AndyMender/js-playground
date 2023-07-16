// Exercise 4 - regular implementation
const numbers = [1, 2, 3, 4];

console.log(numbers);
let output = move(numbers, 0, 0);
console.log(output);
output = move(output, 1, 2);
console.log(output);

function move(array, index, offset) {
    // 1. Make a copy of the array
    const output = [...array];

    // 2. Remove element from a given position
    const element = output.splice(index, 1).pop();
    
    // 3. Put element back in at the offsetted position
    const newIndex = index + offset;
    output.splice(newIndex, 0, element);

    return output;
};

// Exercise 5 - custom implementation
const numbers1 = [1, 2, 3, 4, 1];

let count = countOccurrences(numbers1, -1);
console.log(count);
count = countOccurrences(numbers1, 1);
console.log(count);

function countOccurrences(array, searchElement) {
    // Using '+' on a number and a boolean is so-so, but in JS it works as intended
    // (true == 1, false == 0)
    // NOTE: The 'map()' step is mostly for clarity; one can embed the condition in 'reduce()'
    return array
        .map(element => element === searchElement)
        .reduce((accumulator, element) => accumulator + element);
};

// Exercise 6 - custom implementation
let numbers2 = [1, 2, 0, 3, 5, 10, -1];

const max = getMax(numbers2);
const min = getMin(numbers2);
console.log("Max of numbers:", max);
console.log("Min of numbers:", min);

function getMax(array) {
    // NOTE: A selector based on a ternary operator is still reductive, so 'reduce()' is fine
    return array
        .reduce(((accumulator, current) => (current > accumulator) ? current : accumulator));
}

function getMin(array) {
    // NOTE: A selector based on a ternary operator is still reductive, so 'reduce()' is fine
    return array
        .reduce(((accumulator, current) => (current < accumulator) ? current : accumulator));
}

