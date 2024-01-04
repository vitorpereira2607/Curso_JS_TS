/*
    - We cannot create constants with reserved words
    - Contants need to have important names
    - You cannot start a contants name with a number
    - Cannot contain spaces or dashes
    - We use camelCase
    - Upper and lowercase
    - Case-sensitive
    - We cannot modify the value of a constant 
    - DO NOT USE VAR, USE LET.
*/

const firstNumber = 5;
const secondNumber = 10;
const res = firstNumber * secondNumber;
const resDupl = res * 2;

let resTrip = res * 3;
resTrip = resTrip + 5;

console.log(resDupl, resTrip) // 100, 155

/*
    Typeof in JavaScript is an operator used for type checking and returns the data type of the operand passed to it. 
    The operand can be any variable, function, or object whose type you want to find out using the typeof operator.
*/

const name = 'Vitor';

console.log(typeof(firstNumber), typeof (name)) // number, string