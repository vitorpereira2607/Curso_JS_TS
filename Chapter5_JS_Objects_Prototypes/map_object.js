const persons = [
    { id: 3, name: 'Vitor' },
    { id: 2, name: 'Tiago' },
    { id: 1, name: 'José' },
];

// const newPersons = {};

// for (const person of persons){
//     const { id } = person;
//     newPersons[id] = {...person}
// }

const newPersons = new Map();

for (const person of persons) {
    const { id } = person;
    newPersons.set(id, { ...person })
}
/*
Map(3) {
  3 => { id: 3, name: 'Vitor' }, 
  2 => { id: 2, name: 'Tiago' },
  1 => { id: 1, name: 'José' }
}
*/

//console.log(newPersons.get(2)); // { id: 2, name: 'Tiago' }

for (const person of newPersons.values()){
    console.log(person)
}