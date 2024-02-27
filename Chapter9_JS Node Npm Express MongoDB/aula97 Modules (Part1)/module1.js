class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const name = 'Vitor';
const surname = 'Pereira';

const getFullName = () => {
    console.log(name, surname);
};

// Method 1 to export the content from the module
// module.exports.name = name;
// module.exports.surname = surname;
// module.exports.getFullName = getFullName;

// Method 2 to export the content from the module
exports.name = name;
exports.surname = surname;
exports.getFullName = getFullName;
exports.Person = Person;

// Method 3 to export the content from the module
this.anything = 'Anything we want to export';

//console.log(module.exports)