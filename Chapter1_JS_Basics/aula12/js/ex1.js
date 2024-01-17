
//Exercice, ask the user to insert to 2 numbers to sum.
let n1 = prompt('Insert a number:');
let n2 = prompt('Insert a number:');

console.log(typeof n1) //string
console.log(typeof n2) //string

n1 = Number(n1); //  OR n1 = parseInt(1)
n2 = Number(n2); // OR n2 = parseInt(n2)

console.log(typeof n1) //number
console.log(typeof n2) //number

const sum = n1 + n2;

console.log(typeof sum) //number
alert(`${n1} + ${n2} = ${sum}`); 


