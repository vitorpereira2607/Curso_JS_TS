
const fruits = ['apple', 'orange', 'banana', 'grapes'];

// for in -> read the indexes or keys of an object

//Typically used for iterating over the enumerable properties of an object.
for (let i in fruits){
    console.log(fruits[i]);
}

const person = {
    name: 'Vitor',
    surname: 'Pereira',
    age: 22,
    address: {
        road: 'Av Port',
        number: 304
    }
};


for (let key in person){
    console.log(key, person[key])
}