const circle = {
    radius: 1,
    color: "yellow",
    center: [1, 5],
    move: function() {
        console.log("Moving circle...");
    }
}

// '...' unpacks the Object or collection into another one - quick alternative to copying
let another = { ...circle };

console.log(circle);
console.log(another);

// NOTE: Collection fields are passed by ref - unpacking is NOT equivalent to a deep copy!
// There is no built-in deep copy/clone API in Javascript.
another.center[0] += 5;         // this will modify both 'circle' and 'another'
console.log(circle);
console.log(another);

// `JSON.parse(JSON.stringify(obj))` can be used, but it doesn't preserve non-JSON types
// (for instance, 'NaN' and 'Infinity' are converted to 'null', functions are completely lost, etc.)
another = JSON.parse(JSON.stringify(another));
another.center[0] += 12;
another.center[1] -= 5;
console.log(circle);
console.log(another);
