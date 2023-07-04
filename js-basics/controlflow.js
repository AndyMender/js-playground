// Control flow statements behave the same as in C/C++
let currentHour = 10;       // 24-hour clock

if (currentHour >= 6 && currentHour < 12) {
    console.log("Good morning!");
} else if (currentHour >= 12 && currentHour < 20) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

// switch statements support strings!
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

let dogs = ["Brian", "John", "Susie"];
for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
}

// Some loop definitions are specific to JavaScript
// for-in
const person = {
    name: "John",
    age: 22,
}
// object properties/fields can be accessed by name
for (let key in person) {
    console.log(`Mapping ${key}: ${person[key]}`);
}

// ECMAScript 2017 and later supports key,value lists
for (const [key, value] of Object.entries(person)) {
    console.log(`Mapping ${key}: ${value}`);
}

const colors = ['red', 'green', 'blue'];
// array elements are still accessed by index
for (let index in colors) {
    console.log(`Color at position ${index}: ${colors[index]}`);
}

// for-of
// array elements can be accessed directly
for (const color of colors) {
    console.log(`Chosen color is: ${color}`);
}
