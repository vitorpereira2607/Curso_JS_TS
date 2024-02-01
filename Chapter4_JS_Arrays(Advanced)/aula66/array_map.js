// map returns an array with changed values ​​of the same size as the original array
// double numbers
const numbers = [5, 50, 80, 1, 2, 3, 4, 7, 5, 11, 16, 17];

const doubleNumbers = numbers.map(value => `${value * 2}`);

console.log(doubleNumbers)

const persons = [
    {name: 'Vitor', age: 22},
    {name: 'Maria', age: 27},
    {name: 'Eduardo', age: 34},
    {name: 'Leticia', age: 45},
    {name: 'Alberto', age: 66},
    {name: 'José', age: 57},
]

const personsNames = persons.map(obj =>  obj.name);
const personsAges = persons.map(obj => ({age: obj.age}));

const personsIDs = persons.map((obj, index) => ({id : index + 1, name: obj.name}))
//OR teachers resolution
const personsIDs2 = persons.map(function(obj, index){
    // for safe reasons its better to create a copy of the original array 
    const newObj =  {...obj}
    newObj.id = (index + 1);
    return newObj;
});

console.log(personsNames);
console.log(personsAges);
console.log(personsIDs);
console.log(personsIDs2);

console.log(persons);
