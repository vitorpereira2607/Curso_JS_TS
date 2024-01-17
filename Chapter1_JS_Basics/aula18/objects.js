// Define an object 'person' with initial properties
const person = {
    name: 'Vitor',
    surname: 'Pereira',
    age: 21
};

// Define a function to create a person object with specified properties and methods
function createPerson(name, surname, age) {
    // Create a new person object using provided arguments
    const person = {
        // Shorthand property assignment for name, surname, and age, we can do like this too: (name: name, surname: surname, age: age)
        name,
        surname,
        age,

        // We can use function assign to objects
        functionInObject() {
            console.log(`${this.name} ${this.surname} has ${this.age}`);
        },

        // Method to increment the age of the person
        incrementAge() {
            this.age++;
        }
    };

    // Return the created person object
    return person;
}

// Create a new person using the createPerson function
const person1 = createPerson('Vitor', 'Pereira', 21);

// Call the 'functionInObject' method to log information about the person
person1.functionInObject(); // Output: Vitor Pereira has 21

// Call the 'incrementAge' method to increase the age of the person
person1.incrementAge();

// Call 'functionInObject' again to see the updated age
person1.functionInObject(); // Output: Vitor Pereira has 22

// Log the name property of the original 'person' object
console.log(person.name);
