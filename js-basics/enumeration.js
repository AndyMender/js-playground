const circle = {
    radius: 2,
    diameter: 4,
};

// Iterate over keys only
for (const key of Object.keys(circle)) {
    console.log(key);
}

// Iterate over values only
for (const value of Object.values(circle)) {
    console.log(value);
}

// Iterate over keys and values
for (const [key, value] of Object.entries(circle)) {
    console.log(key, value)
}

// Membership checks work on regular Objects
console.log("The circle has a radius?", "radius" in circle);
console.log("The circle has a color?", "color" in circle);
