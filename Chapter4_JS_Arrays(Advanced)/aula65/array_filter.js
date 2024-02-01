// Filter -> always return an array with the same quantity of elements or less.

const numbers = [5, 50, 80, 1, 2, 3, 4, 7, 5, 11, 16, 17]

// function callbackFilter(value, index, array){
//     return value > 10;
// }

//const filterNumbers = numbers.filter(callbackFilter);

const filterNumbers = numbers.filter(value => value > 10);

// const filterNumbers = numbers.filter((value, index, array) => {
//     console.log(value, index, array)
//     return value > 10;
// });

console.log(filterNumbers);

const persons = [
    {name: 'Vitor', age: 22},
    {name: 'Maria', age: 27},
    {name: 'Eduardo', age: 34},
    {name: 'Leticia', age: 45},
    {name: 'Alberto', age: 66},
    {name: 'José', age: 57},
]

const personsWithMoreThanSixChar = persons.filter(obj => obj.name.length >= 6);
const personsWithMoreThan50years = persons.filter(obj => obj.age > 50);
const personsEndWithLetterA = persons.filter(obj => obj.name.slice(-1) === 'a'); 
const personsEndWithLetterA2 = persons.filter(obj => obj.name.toLowerCase().endsWith('a')); 

console.log(personsWithMoreThanSixChar);
console.log(personsWithMoreThan50years);
console.log(personsEndWithLetterA);
console.log(personsEndWithLetterA2);

for(let value of personsWithMoreThanSixChar){
    console.log(value.name)
}

