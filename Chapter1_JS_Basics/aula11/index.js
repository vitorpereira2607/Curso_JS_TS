/*
    
        -> + sum & concatenation
        -> - / *     
        -> ** potency
        -> % rest of division
    
    Increment = ++
    Decrement = --

    ++count -> when the (++) sign is at the BEGIN of the variable it means that he is doing the already doing calculation and procedes to returns the value incremented
    count++ -> when the sign is at the END of the variable it means that is doing the action that we ask for but it only returns the value incremented when we call the variable 

    Assignment Operators
    +=
    *=
    -=

    NaN -> Not a number
*/ 

const n1 = 1;
const n2 = parseInt('2'); // parseInt -> Converts a string to a integer

console.log(typeof n2) //number
console.log(n1 + n2) //3

const txt1 = 'Hello';
const txt2 = 'World';

console.log(txt1 + txt2)

let count = 2;
console.log(++count) //3
console.log(count++) //3
console.log(count) //4
console.log(++count) //5
console.log(count--) //5
console.log(--count) //3

let count2 = 3;

count2 += 2; // count2 = count2 + 2;

count2 *= 2; // count2 = count2 * 2;
