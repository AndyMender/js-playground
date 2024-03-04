// 'let' and 'const' limit scope to the current { } block (including if-else if-else blocks!)
// NOTE: 'var' was the OLD way (pre ES6/ES2015!) of declaring variables
{
    const message = "I'm lost...";
    console.log(message);
}

// Will throw ReferenceError
// console.log(message);

function printFavoriteColor() {
    console.log(`My favorite color is ${color}.`);
}

// Global scope - can be used anywhere AFTER definition
/// printColor();
const color = 'blue';
printFavoriteColor();
