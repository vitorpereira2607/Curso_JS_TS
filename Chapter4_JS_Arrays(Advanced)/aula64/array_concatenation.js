const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const newArray = array1.concat(array2, [7, 8, 9], 'Vitor');
console.log(newArray); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Vitor' ]

const spreadArray = [...array1, 'Vitor', ...array2, ...[7, 8, 9]];

console.log(spreadArray) // Output: [ 1, 2, 3, 'Vitor', 4, 5, 6, 7, 8, 9 ]