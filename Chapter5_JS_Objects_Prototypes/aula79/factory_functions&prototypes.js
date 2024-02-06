const talk = {
    talk() {
        console.log(`${this.name} is talking.`);
    }
}

const eat = {
    eat() {
        console.log(`${this.name} is eating.`);
    },
}

const drink = {
    drink() {
        console.log(`${this.name} is drinking.`);
    }
}


const personPrototype = Object.assign({}, talk, eat, drink)
//OR using spread operator -> const personPrototype = {...talk, ...eat, ...drink}


function createPerson(name, surname) {
    return Object.create(personPrototype, {
        name: {value: name},
        surname: {value: surname}
    })
}


const p1 = createPerson('Vrqwe', 'hjedwqk')
console.log(p1)