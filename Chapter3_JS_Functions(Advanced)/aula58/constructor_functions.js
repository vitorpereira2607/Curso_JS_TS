// Constructor Function -> objects
// Factory Function -> objects

// Constructor -> Always starts with UpperCase -> Person (new)

function Person (name, surname){


    const id = 1;
    // This is a private method it cant be acce
    const internalMethod = () => {
        console.log(id + ': Im a private method')
    };

    internalMethod();

    // The following lines means that the attributes are now public
    this.name = name;
    this.surname = surname;

    this.method = function () {
        console.log(this.name + ': im public Method')
    }
}

const p1 = new Person('Vitor', 'Pereira');

console.log(p1) //  Output: Person { name: 'Vitor', surname: 'Pereira' }
console.log(p1.name, p1.surname)
// internalMethod is not defined