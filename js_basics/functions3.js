// Utilizes get/set to create a dynamic attribute
const person = {
    firstName: 'John',
    secondName: 'Smith',
    get fullName() {
        return `${this.firstName} ${this.secondName}`;
    },
    set fullName(value) {
        [this.firstName, this.secondName] = value.split(' ');
    }
};

// Get, set and get again
console.log(`My name is ${person.fullName}.`);
person.fullName = 'Brian Smith';
console.log(`And my name is ${person.fullName}!`);

// Output: all fields and their values except for 'fullName' which is a Getter/Setter pair
console.log(person);
