// Control flow statements behave the same as in C/C++
let currentHour = 10;       // 24-hour clock

if (currentHour >= 6 && currentHour < 12) {
    console.log("Good morning!");
} else if (currentHour >= 12 && currentHour < 20) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

// switch statements support String objects!
let role = "guest";
switch (role) {
    case "manager":
        console.log("Manager");
        break;
    case "admin":
        console.log("Admin");
        break;
    case "employee":
        console.log("Employee");
    default:
        console.log(`Unknown role ${role}`);
        break;
}

// NOTE: Above could be reimplemented with capitalization assuming 'default' option is not needed
function capitalize(input) {
    const output = input.charAt(0).toUpperCase() + input.slice(1);
    return output;
}

console.log("Role:", role);
console.log("Role capitalized:", capitalize(role));

// Array iteration
// - using the array index and incrementing counter
let dogs = ["Brian", "John", "Susie"];
for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
}
// - for-in loop, using the array index directly
const colors = ['red', 'green', 'blue'];
for (let index in colors) {
    console.log(`Color at position ${index}: ${colors[index]}`);
}
// - for-of loop to access elements directly
for (const color of colors) {
    console.log(`Chosen color is: ${color}`);
}

// Object iteration
const person = {
    name: "John",
    age: 22,
}
// - for-in loop, using the object's field/key
for (let key in person) {
    console.log(`Mapping ${key}: ${person[key]}`);
}
// - unpacking objects into (key, value) arrays (since ECMAScript 2017)
for (const [key, value] of Object.entries(person)) {
    console.log(`Mapping ${key}: ${value}`);
}

// Arrays and objects share iteration syntax and each comes as a pair (index/field, value)
// The 'for-of' loop works only on "iterable" collections and requires extra logic for objects
