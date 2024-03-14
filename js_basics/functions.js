// Regular function
// NOTE: It is HOISTED to the top of the script when the JS engine loads the code
function walk() {
    console.log('walking...');
}

// Lambda function
// NOTE: Scoping is treated like variable scope,
//       while 'function' declarations are global and can be called before the declaration
// NOTE: 'let' would also work
const run = function(meters) {
    if (meters == undefined) {
        console.log(`running...`);
    } else {
        console.log(`running ${meters} meters...`);
    }
};

walk();
run();
run(2);

// 'arguments' is an object of parameter values passed
// (it works even if a function does not take any arguments by default)
function sum() {
    console.log(arguments);
    let total = 0;
    // 'arguments' is iterable!
    for (const value of arguments) {
        total += value;
    }
    return total;
}
console.log(sum(1, 0, 5, 6, 7));

