
/*
    All objects have an internal reference to a prototype (_proto_)
    which comes from the prototype property of the constructor function that was used to
    create it. When we try to access a member of an object, first the
    engine will first try to find this member in the object itself and then the chain of
    of prototypes is used up to the top (null) until it finds (or doesn't find) that member.

*/
// Constructor -> mold (class)
function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;

    //this.fullName = () => `ORIGINAL: ${this.name} ${this.surname} is ${this.age}` 
}

//Person.prototype === person1._proto_
/*
    Using the prototype for methods is a more memory-efficient and maintainable approach, 
    especially when dealing with a large number of instances or when inheritance is involved.
*/
Person.prototype.fullName = function(){
    return `${this.name} ${this.surname} is ${this.age}`
}
const person1 = new Person('Vitor', 'Pereira', 22);
const person2 = new Person('Tiago', 'Faria', 24);

// The function now is located inside of the prototype instead 
console.log(Object.getPrototypeOf(person1)) //{ fullName: [Function (anonymous)] }

// Creating an instance of the Person Constructor function
console.log(person1)
console.log(person2.fullName())


