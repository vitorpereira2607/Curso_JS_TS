const person = {
    name: 'Vitor',
    surname: 'Pereira',
    age: 22,
    address: {
        road: 'Av Port',
        number: 304
    }
};

const { name, surname, age } = person;
const { address: { road: r, number}, address } = person;
console.log(name, surname, r);

