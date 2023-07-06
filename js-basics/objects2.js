const circle = {
    radius: 1,
    color: "yellow"
}

// '...' unpacks the Object or collection into another one
const another = { ...circle };

console.log(circle);
console.log(another);