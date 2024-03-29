// Object definition with a function attribute
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('Drawing a circle...!');
    }
};
// It looks like a class, but is still just an object
console.log(typeof circle);

circle.draw();

// Factory Function
function createCircle(radius, location) {
    // Can also be returned directly without assignment
    // TODO: Is returning a const ref here problematic for client code?
    const circle = {
        radius: radius,
        location: location,
        isVisible: true,
        draw: function() {
            console.log('Drawing a circle...!');
        }
    };
    return circle;
}

// 'radius' and 'location' are left undefined
console.log(createCircle());

// regular call - 'location' will accept any type, though
console.log(createCircle(5, {x: 5, y: 10}));

function createCircle2(radius) {
    return {
        // 'radius' will automatically be assigned as a field name and its value!
        radius,
        // 'draw' is a Function here
        draw() {
            console.log(`Drawing a circle of radius ${radius}...`);
        }
    }
}

createCircle2(1).draw();
createCircle2(2).draw();

// Constructor Function (can be converted to a class definition nowadays)
function Circle(radius) {
    this.radius = radius;

    // anonymous Function
    this.draw = function() {
        console.log(`Drawing a circle of radius ${radius}...`);
    }
    return this;
}
console.log(Circle(2));
// 'new' is needed to immediately allocate resources - especially relevant in an async/await context
const another = new Circle(3);
another.draw();


// The 'constructor' method is called implicitly when creating a new instance of an Object,
// constructor Function or Class
console.log(another.constructor);
console.log(circle.constructor);

console.log(new Boolean());     // 'false' by default
console.log(new Number());      // '0' by default

let x = { value: 10 };
console.log(x);

// 'y' is just a reference to 'x'
let y = x;
console.log(y);

// both 'x' and 'y' get changed
x.value = 20
console.log(x);
console.log(y);

// Objects and collections are pass-by-ref
// Everything else (including Strings!) is pass-by-value