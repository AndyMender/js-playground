// Datasets
let numbersA = [240, 800, 1024, 480, 2048, 960, 128, 240];
let numbersB = [320, 600, 768, 640, 2048, 700, 128, 240];

// 1
// Pick the larger of two numbers.
function max(a, b) {
    return (a > b) ? a : b;
}
for (let i = 0; i < numbersA.length; i++) {
    console.log(`Larger of ${numbersA[i]} and ${numbersB[i]} is: ${max(numbersA[i], numbersB[i])}`);
    // Can add an assert to validate the function here
}

// 2
// Check if an image is in landscape orientation.
function isLandscape(width, length) {
    return (width > length);
}
for (let i = 0; i < numbersA.length; i++) {
    console.log(`Image of dimensions ${numbersA[i]} x ${numbersB[i]} is a landscape: ${isLandscape(numbersA[i], numbersB[i])}`);
}

// 3
/*
    Returns 'Fizz' if divisible by 3, 'Buzz' if divisible by 5 and 'FizzBuzz' if divisible by both.
    Otherwise, return the original number.
*/
function fizzBuzz(input) {
    if (typeof input !== 'number') return undefined;

    if ((input % 5 == 0) && (input % 3 == 0)) return 'FizzBuzz';
    else if (input % 3 == 0) return 'Fizz';
    else if (input % 5 == 0) return 'Buzz';

    return `${input}`;
}
for (const number of numbersA) {
    console.log(`Number ${number} is a ${fizzBuzz(number)}`);
}
for (const number of numbersB) {
    console.log(`Number ${number} is a ${fizzBuzz(number)}`);
}

// 4
/*
    Check if current speed is under the speed limit of 70 and penalize if it's not for every 5 kms.
    Suspend driving license if 12 penalty points were reached.
*/
function checkSpeed(speed, speedLimit = 70, kmPerPoint = 5) {
    // We allow an error margin (and exclude the speed - speedLimit < 0 case)
    if (speed < (speedLimit + kmPerPoint)) return 'Ok';

    const speedDifference = speed - speedLimit;
    // 'Math' is accessible directly - no need to import it!
    const penaltyPoints = Math.floor(speedDifference / kmPerPoint);
    if (penaltyPoints >= 12) return 'License suspended';

    return `${penaltyPoints}`;
}
let speeds = [52, 25, 80, 120, 150, 15, 30, 40];
for (const currentSpeed of speeds) {
    console.log(`Speed penalty? ${checkSpeed(currentSpeed)}`);
}

// 5
//Count all elements in an array which are coerced to boolean 'true'
function countTruthy(array) {
    let count = 0;
    for (const value of array) if (value) count++;

    return count;
}
let elements = [1, 2, 3, true, false, '', 'yes', 'bruh!', 0, undefined, null];
console.log(`Number of truthy values: ${countTruthy(elements)} (Should be 6)`);

// 6
// Display all fields/properties of an object
function showProperties(obj) {
    for (const [property, value] of Object.entries(obj)) {
        console.log(`${property}: ${value}`);
    }
}
const movie = {
    title: 'A Goat',
    releaseYear: 2019,
    imdbRating: 4.5,
    director: 'Maa Goatrese'
}
showProperties(movie);

// 7
// Returns a sum of the multiples of 3 or 5 up to 'limit'
function sum(limit) {
    let total = 0;

    for (let i = 0; i < limit + 1; i++) {
        if (i % 3 == 0 || i % 5 == 0) total += i;
    }

    return total;
}
console.log(`Sum of multiples: ${sum(10)}`);

// 8
// Calculate the grades of a student
function calculateGrade(marks) {
    // NOTE: JS doesn't have a standard lib 'mean' or 'average' function
    let sum = 0;
    for (const mark of marks) sum += mark;
    const averageScore = sum / marks.length;

    if (averageScore < 60) return 'F';
    else if (averageScore < 70) return 'D';
    else if (averageScore < 80) return 'C';
    else if (averageScore < 90) return 'B';
    return 'A';
}
let testScores = [80, 80, 50];
console.log(`Final grade: ${calculateGrade(testScores)}`);

// 9
// Generate a line of stars with incremental length
function showStars(rowNumber) {
    let stars = '*';
    for (let i = 0; i < rowNumber; i++) {
        console.log(stars);
        stars += '*';
    }
}
showStars(5);
showStars(10);