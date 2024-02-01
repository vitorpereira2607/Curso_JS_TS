// Factory functions / Constructor functions / Classes

// Factory

function createPerson(name, surname){
    return{
        name,
        surname,
        get getFullName (){
            return `${this.name} ${this.surname}`
        }
    }
}

const p1 = createPerson('Vitor', 'Pereira');

console.log(p1.getFullName); // Output: Vitor Pereira


// Constructor

function Person(name, surname){
    this.name = name;
    this.surname = surname;
}

const p2 = new Person('Vitor', 'Pereira');

console.log(p2); // Output: Person { name: 'Vitor', surname: 'Pereira' }


