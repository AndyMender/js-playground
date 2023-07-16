const numbers = [1, 2, 3];

// 'every()' accepts a boolean predicate. This is the JS equivalent of Python's 'all()'
console.log("Are all numbers even? ", numbers.every(number => number % 2 === 0));
console.log("Are all numbers integers? ", numbers.every(number => number - Math.floor(number) === 0));
console.log("Are all numbers positive? ", numbers.every(number => number >= 0));
numbers.push(-10);
console.log("Are all numbers STILL positive? ", numbers.every(number => number >= 0));

// 'some()' works like Python's 'any()' - returns 'true' if at least "some" elements qualify
console.log("Are some numbers positive? ", numbers.some(number => number >= 0));

// 'filter()' is self-explanatory
console.log("All numbers: ", numbers);
console.log("Only positive numbers: ", numbers.filter(number => number > 0));
console.log("Only negative numbers: ", numbers.filter(number => number < 0));

// 'map()' is self-explanatory as well
const list_blocks = numbers.map(number => ('<li>' + number + '</li>'));
console.log(list_blocks);
const html_block = '<ul>\n' + list_blocks.join("\n") + '\n</ul>';
console.log(html_block);
// NOTE: object returns in an arrow function need to be marked with ()
console.log(list_blocks.map((block, index) => ({ id: index, html: block })));

// list method calls can be stacked infinitely like in other languages
console.log(numbers
    .filter(number => number > 0)
    .map(number => ('<li>' + number + '</li>'))
    .map((block, index) => ({ id: index, html: block }))
);

