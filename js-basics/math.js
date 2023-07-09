// Sponsored by the 'Math' standard library package
// Essentially everything, including angle calculations is there

for (let i = 0; i < 10; i++) {
    // floats in the range 0 < x < 1 (the seed is set internally)
    console.log(Math.random());
}

// Returns NaN for any invalid input...
console.log(Math.min(...[1, 2, 3, 4]));

console.log(Math.sign(-5));
console.log(Math.sign(2));
console.log(Math.sign(3));

console.log(["10", "10", "10"].map(parseInt));
console.log(["10", "10", "10"].map(v => parseInt(v)));