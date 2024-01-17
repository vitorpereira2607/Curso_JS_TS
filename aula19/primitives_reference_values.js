/*
    Primitives (immutables) -> string, number, boolean, undefined, null, (bigint, symbol) - Values

    References (mutables) -> array, object, function (Passed by reference)
*/

// Example with string (primitive)
let name = 'Vitor'; // Primitive value assignment
name = 'Tiago'; // Modifying a primitive does not affect other variables with the same value
console.log(name); // Output: Tiago

// Example with array (reference)
console.log('---Example with Arrays---');
let a = [1, 2, 3]; // Array is a reference type
let b = a; // 'b' now references the same array as 'a'
let c = [...a]; // Creating a copy using spread operator

console.log(a, b); // Output: a = [1, 2, 3] b = [1, 2, 3]

a.push(4); // Modifying the array through one reference affects the other reference

console.log(a, b); // Output: a = [1, 2, 3, 4] b = [1, 2, 3, 4]

b.pop(); // Modifying the array through one reference affects the other reference

console.log(a, b); // Output: a = [1, 2, 3] b = [1, 2, 3]

a.push('Vitor'); // Modifying the array through one reference

console.log(c, a, b); // Output: c = [1, 2, 3] a = [1, 2, 3, 4, 'Vitor'] b = [1, 2, 3, 4, 'Vitor']

// 
console.log('');
console.log('---Example with Objects---');

const person = {
    name: 'Vitor',
    surname: 'Pereira'
};

const referenceObject = person; // Both variables reference the same object

person.name = 'Tiago';
console.log(person, referenceObject); // Output: { name: 'Tiago', surname: 'Pereira' } { name: 'Tiago', surname: 'Pereira' }

const copyReferenceObject = { ...person }; // Creating a copy of the object


