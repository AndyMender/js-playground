// Sponsored by the 'Math' standard library package
// Essentially everything, including angle calculations is there

for (let i = 0; i < 10; i++) {
    // floats in the range 0 < x < 1 (the seed is set internally)
    console.log(Math.random());
}

// Returns NaN for any invalid input...
console.log(Math.min(...[1, 2, 3, 4]));

// Returns '-1' if there is a sign and '1' otherwise
console.log(Math.sign(-5));
console.log(Math.sign(2));
console.log(Math.sign(3));

// The first version doesn't work, because all values are passed to 'parseInt()'
// as arguments at the same time.
console.log(["10", "10", "10"].map(parseInt));
// This version works, because it provides a predicate which works on each value separately
console.log(["10", "10", "10"].map(v => parseInt(v)));
