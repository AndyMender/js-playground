const numbers = [1, -1, 2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
    // The return value is fed back into the equation as 'accumulator'
    // Any operation is permitted is permitted as long as it's reductive
    // (a + b = a')
    console.log("Current accumulator:", accumulator);
    console.log("Current value:", currentValue);
    return accumulator + currentValue;
});
console.log(`The total sum of ${numbers} is: ${sum}`);

// Simplified version of the callback
console.log(`The total sum of ${numbers} is: ${numbers.reduce((accumulator, currentValue) => accumulator + currentValue)}`);
