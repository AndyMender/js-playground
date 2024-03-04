// 1 - Sum function which works on arrays and arglists at the same time
function sum(...items) {
    // Consider a value can be an array, but don't recurse
    const total = items.reduce((a, b) => {
        if (Array.isArray(b)) {
            for (let element of b) a += element;
        } else {
            a += b;
        }
        return a;
    }, 0);
    return total;
}

// Output: should return 10
console.log(sum(...Array(5).keys()));

// Output: should return 22 (10 + 2 + 10)
console.log(sum([...Array(5).keys()], 2, 10));

// 2 - circle object with a read/write and a read-only property
const circle = {
    radius: 1,
    // NOTE: Without a dedicated setter, the getter will always compute the 'area'
    // even if the 'area' field is being explicitly set
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

console.log(`Circle radius: ${circle.radius}, area: ${circle.area}`);
circle.radius += 2;
console.log(`Circle radius: ${circle.radius}, area: ${circle.area}`);

// 3 - Add error handling to an earlier function
function countOccurrences(values, searchElement) {
    // Other options are either more verbose or unclear
    // NOTE: The incrementor needs to precede the 'accumulator'!
    if (!Array.isArray(values))
        throw Error(`The passed value is not an array: ${values}`);
    return values
        .reduce(((accumulator, item) => (item === searchElement) ? ++accumulator : accumulator), 0);
};

const numbers = [...Array(4).keys()].map(x => ++x);
console.log(numbers);

try {
    countOccurrences(null, 2);
} catch(err) {
    console.error(err);
} 