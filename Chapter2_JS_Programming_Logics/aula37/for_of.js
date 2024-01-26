/*
    For classic - Generaly use with iterables (array or strings)
    For in - Returns an index or a key (strings, arrays or objects)
    For off - Returns the value by itself (iterables, arrays or strings)
*/

const name = 'Vitor Pereira';

// for (let value of name){
//     console.log(value);
// }

// Introduced in ES6, used for iterating over iterable objects such as arrays, strings, maps, sets, etc.

// Using for...of loop to iterate over array values directly
const array = [1, 2, 3];
for (let value of array) {
  console.log(value); // 1 2 3
}
console.log('');
// Using traditional for loop to iterate over array indices
for (let i = 0; i < array.length; i++){
    console.log(array[i]); // 1 2 3
}
console.log('');

// Using for...in loop to iterate over array indices (not recommended for arrays)
for (let key in array){
    console.log(array[key]);
}

console.log('');

// array.forEach(element => {
//     console.log(element)
// });
