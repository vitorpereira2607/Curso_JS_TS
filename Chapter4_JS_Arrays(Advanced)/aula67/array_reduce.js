// Used to reduce the array in an unique element

const numbers = [5, 50, 80, 1, 2, 3, 4, 7, 5, 11, 16, 17];

// Here we are summing the values from the array to return an unique value
const total = numbers.reduce((accumulator, value, index, array) => {
    accumulator += value;
    return accumulator;
}, )

console.log(total) // 201

// Recommend use filter to do this
const evenNumbers = numbers.reduce((accumulator, value) => {
    if(value % 2 === 0){
        accumulator.push(value);
    }
    return accumulator;
}, [])

console.log(evenNumbers) // Output: [ 50, 80, 2, 4, 16 ]

const doubleNumbers = numbers.reduce((accumulator, value) => {
    accumulator.push(value * 2)
    return accumulator;
}, [])

console.log(doubleNumbers)

const persons = [
    {name: 'Vitor', age: 22},
    {name: 'Maria', age: 27},
    {name: 'Eduardo', age: 34},
    {name: 'Leticia', age: 45},
    {name: 'Alberto', age: 66},
    {name: 'José', age: 57},
]

// Return the most aged people

// const agedPerson = persons.reduce(function (accumulator, value) {
//     return (accumulator.age > value.age) ? accumulator : value;
// }, persons[0])


const agedPerson = persons.reduce(function (accumulator, value) {
    if (accumulator.age > value.age) return accumulator;
    return value;
} )

console.log(agedPerson)