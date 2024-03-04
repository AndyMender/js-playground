// Exercise 1 - extended implementation
class Location {
    constructor(street, city, zipCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
        this.address = `${street}, ${zipCode} ${city}`
    }

    showAddress() {
        console.log(this.address);
    }
};

const location = new Location("Downson Street 5/1", "London", 1020);
location.showAddress();

// Exercise 2 - simplified version
// NOTE: We could return an instance of 'Location' instead of an anonymous object
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
console.log(createAddress("Downson Street 5/1", "London", 1020));

// Exercise 3 - extended implementation
const location1 = new Location("Downson Street 5/1", "London", 1020);
const location2 = new Location("Downson Street 5/1", "London", 1020);

// Regular equality won't work and there is no method to overload for classes
console.log("Are the locations equal?", location1 == location2);

function areEqual(loc1, loc2) {
    for (const key in loc1) {
        console.debug(`Checking ${key} in objects: ${loc1[key]}, ${loc2[key]}`);
        // NOTE: Look-up of a missing key returns 'undefined'
        if (loc1[key] != loc2[key]) return false;
    }
    return true;
}

console.log("Are the locations equal?", areEqual(location1, { street: "Downson Street 5/1", city: "London" }));
console.log("Is a location equal to itself?", areEqual(location1, location2));

// Exercise 6 - simple implementation
let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
];
console.log(priceRanges);

let restaurants = [
    { averagePerPerson: 5 }
];
