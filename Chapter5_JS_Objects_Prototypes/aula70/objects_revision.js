const person = {
    name: 'Vitor',
    surname: 'Pereira'
};

//console.log(person.name)
//console.log(person['name'])

const person1 = new Object();

person1.name = 'Vitor';
person1.surname = 'Pereira';
person1.age = 22;
person1.getName = function (){
    console.log(`${this.name} is talking`);
}
person1.getBirthDate = function () {
    const currentData = new Date();

    return currentData.getFullYear() - this.age;
}

for (let keys in person1){
    console.log(person1[keys]);
}

person1.getName();
console.log(person1.getBirthDate());
//console.log(person1.name, person1.surname);

//delete person1.name
