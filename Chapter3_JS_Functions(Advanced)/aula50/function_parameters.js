function myFuntion(){
    console.log(arguments);
    console.log(arguments[1]) // Output: 1
}

myFuntion('Value', 1, 2, 3, 4, 'Test') 
/*

Output: [Arguments] {
  '0': 'Value',
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 'Test'
}

*/

//'arguments' is a special object available in all function scopes
function argument(){
    let total = 0;

    for (let argument of arguments){
        total += argument;
    }

    console.log(total);
}

argument(1,2,3) // Output: 6

function sum(a, b = 2, c = 4){
    console.log(a + b + c)
}

sum(2, 10, 20);
// the only way to asume that b = 2 is to pass undefined as the argument when calling the function, this is not recommended
//sum(2, undefined(b = 2), 20) Output: 24

function destructuringObj({name, surname, age}){
    console.log(name, surname, age);
}

let obj = {name: 'Vitor', surname: 'Pereira', age: 22}

destructuringObj(obj)

// We can also do the same thing for arrays

function destructuringArray([value1, value2, value3]){
    console.log(value1, value2, value3);
}

destructuringArray(['teste1', 'teste2', 30]);

// Real example
const counter = function (operator, accumulator, ...numbers){
    for(let number of numbers){
        if(operator === '+') accumulator += number;
        if(operator === '-') accumulator -= number;
        if(operator === '*') accumulator *= number;
        if(operator === '/') accumulator /= number;
    }
    console.log(accumulator);
};

counter('+', 0, 20, 30, 40, 50)