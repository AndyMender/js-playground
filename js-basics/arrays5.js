const numbers = [1, -1, 2, 3];

// The return value is fed back into the equation as 'accumulator'.
// A custom initial value can be set as the 2nd argument to 'reduce()'
// 
// NOTE: Any operation is permitted as long as it reduces the complexity of the array.
//       For instance, (a + b => a)
const totalSum = numbers.reduce((accumulator, currentValue) => {
    console.log("Current accumulator:", accumulator);
    console.log("Current value:", currentValue);
    return accumulator + currentValue;
});
console.log(`The total sum of ${numbers} is: ${totalSum}`);

// Simplified version of the callback
console.log(`The total sum of ${numbers} is: ${numbers.reduce((accumulator, currentValue) => accumulator + currentValue)}`);
