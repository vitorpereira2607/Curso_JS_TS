const a = {
    name: 'Vitor',
    surname: 'Pereira'
};

const b = a; // Both variables reference the same object

a.name = 'Tiago';
console.log(a, b); // Output: { name: 'Tiago', surname: 'Pereira' } { name: 'Tiago', surname: 'Pereira' }

const c = { ...a }; // Creating a copy of the object

a.surname = 'Faria';
console.log(a, c); // Output: { name: 'Tiago', surname: 'Faria' } { name: 'Tiago', surname: 'Pereira' }