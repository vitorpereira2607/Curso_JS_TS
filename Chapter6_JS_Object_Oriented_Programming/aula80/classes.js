class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    //This method is inside of the prototype by default
    getFullName(){
        console.log(`${this.name} ${this.surname}`);
    }
}

function Person2(name, surname){
    this.name = name;
    this.surname = surname;
}

Person2.prototype.getFullName2 = function () {
    console.log(`${this.name} ${this.surname}`);
}


const p1 = new Person('Vitor', 'Pereira'); // Person { name: 'Vitor', surname: 'Pereira' }
const p2 = new Person2('Tiago', 'Pereira'); // Person2 { name: 'Tiago', surname: 'Pereira' }

console.log(p1);
p1.getFullName();
console.log(p2);
p2.getFullName2();
