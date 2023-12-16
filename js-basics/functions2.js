// Javascript doesn't care about the type or number of variables.
// Missing values are set to 'undefined', excess values are ignored
function sum(...args) {
    // NOTE: '.reduce()' can be used also without the 'total' parameter
    let total = (typeof args[0] === 'number') ? 0 : '';
    return args.reduce((a, b) => a + b, total);
}

console.log(sum(1, 2));
console.log(sum('a', 'b'));

function sum2() {
    let total = 0;
    // 'arguments' contains all args passed to the function
    for (let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 5));

function discount_sum(total_discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - total_discount);
}
console.log(discount_sum(0.1, 20, 30));
