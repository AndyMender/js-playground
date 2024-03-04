// Javascript doesn't care about the type or number of variables.
// Missing values are set to 'undefined', excess values are ignored
// NOTE: An explicit arglist is treated as an Array
function sum(...args) {
    // NOTE: The initial value is only to distinguish between 'string' and 'number'
    let total = (typeof args[0] === 'number') ? 0 : '';
    return args.reduce((a, b) => a + b, total);
}

console.log(sum(1, 2));
console.log(sum('a', 'b'));

function sum2() {
    let total = 0;
    // 'arguments' contains all args passed to the function
    // NOTE: 'arguments' is iterable, but not an Array so array methods can't be used
    for (let value of arguments) {
        total += value;
    }
    return total;
}

console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 5));

// NOTE: The arglist parameter must always be last!
function discount_sum(total_discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - total_discount);
}
console.log(discount_sum(0.1, 20, 30));

// NOTE: All parameters after the 1st default parameters also need default values,
//       the same as keyword arguments in Python
function calculate_interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log(calculate_interest(10000));
console.log(calculate_interest(10000, 2.5, 15));