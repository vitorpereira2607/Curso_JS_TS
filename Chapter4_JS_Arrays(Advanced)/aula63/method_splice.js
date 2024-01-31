//              -5        -4      -3       -2         -1
//               0         1       2        3          4
const names = ['Maria', 'Vitor', 'José', 'Eduardo', 'Alberto'];

// Using splice to remove elements from the array
// Syntax: names.splice(startIndex, deleteCount, elem1, elem2, ...)

const removedFromStart = names.splice(3, 2); // Removes 2 elements starting from index 3

console.log(names, removedFromStart); // Output: [ 'Maria', 'Vitor', 'José' ] [ 'Eduardo', 'Alberto' ]

const removedFromEnd = names.splice(-1, 2); // Removes 2 elements starting from the last index

console.log(names, removedFromEnd) // Output: [ 'Maria', 'Vitor' ] [ 'José' ]

// Removing all elements from the array starting at index 0
//const removedMaxValue = names.splice(0, Number.MAX_VALUE)

const addElements = names.splice(-1, 1, 'Luis', 'Otávio')

console.log(names, addElements) // Output: [ 'Luis', 'Otávio', 'Vitor' ] [ 'Maria' ]

// simulating pop() with splice: name.splice(-1, 1) returns an array with the last element removed

// simulating shift() with splice: name.splice(0,1) returns an array with the first element removed

// simulating push() with splice: names.splice(names.lenght, 0, 'Miranda' ) 