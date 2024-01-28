function sum(a, b){
    return a + b
}

console.log(sum(1,3));

function createPerson(name, surname){
    return {name, surname};
}

const p1 = createPerson('Vitor', 'Pereira');
const p2 = {
    name: 'Tiago',
    surname: 'Faria'
};

console.log(p1);
console.log(p2);

function writePhrase(start){
    function writeRest(rest){
        return start + ' ' + rest;
    }

    return writeRest;
}

const helloWorld = writePhrase('Hello');

console.log(helloWorld) // Output: [Function: writeRest]
console.log(helloWorld('World!')) // Output: Hello World!

// Original Example

function createMultiplier(multiplicator){

    function multiplication(n){
        return n * multiplicator;
    }

    return multiplication;
}

const duplicate = createMultiplier(2)
const triplicate = createMultiplier(3)
const quadriplicate = createMultiplier(4)


console.log(duplicate(2));
console.log(triplicate(2));
console.log(quadriplicate(2));


