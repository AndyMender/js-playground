// Control flow statements behave the same as in C/C++
let currentHour = 10;       // 24-hour clock

if (currentHour >= 6 && currentHour < 12) {
    console.log("Good morning!");
} else if (currentHour >= 12 && currentHour < 20) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

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
    console.log(`Value of ${key}: ${person[key]}`);
}
const colors = ['red', 'green', 'blue'];
// array elements are still accessed by index
for (let index in colors) {
    console.log(`Value of colors at position ${index}: ${colors[index]}`);
}

// for-of
// array elements can be accessed directly
for (let color of colors) {
    console.log(`Chosen color is: ${color}`);
}
