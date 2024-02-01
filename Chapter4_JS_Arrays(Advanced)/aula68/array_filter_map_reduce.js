const numbers = [5, 50, 80, 1, 2, 3, 4, 7, 5, 11, 16, 17];

const evenNumbers = numbers
    .filter(value => value % 2 === 0) // Even numbers [ 50, 80, 2, 4, 16 ]
    .map(value => value * 2) // Double using map [ 100, 160, 4, 8, 32 ]
    .reduce((accumulator, value) => accumulator + value) // Sum double numbers 304


console.log(evenNumbers) 