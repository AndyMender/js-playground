// Custom exception types
class ValueTypeError extends Error {};
class NameCompositionError extends Error {};

// Utilizes get/set to create a dynamic attribute
const person = {
    firstName: 'John',
    secondName: 'Smith',
    get fullName() {
        return `${this.firstName} ${this.secondName}`;
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new ValueTypeError('Value is not a string');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new NameCompositionError('The value should contain a first and last name, separated with a space.');

        [this.firstName, this.secondName] = parts;
    }
};

// Should throw!
try {
    console.log("Trying to assign incorrect value type to 'fullName'...")
    person.fullName = null;
} catch (err) {
    console.error('Wrong input, error triggered:', err);
} finally {
    console.log("Clean-up done.")
}
