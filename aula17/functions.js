function greet (name) {
    //console.log(`My name is ${name}!`);
    return `My name is ${name}!`;
}

const functionResult = greet('Vitor');
console.log(functionResult) // undefined, is logged when a function doesn't explicitly return a value

function sum(x, y){
    const res = x + y;
    return res;
}

console.log(sum(2,2));

const squareRoot = function (n1){
    return Math.sqrt(n1);
};

console.log(squareRoot(9)) 

//  Arrow Function =>
const arrowFunction = (n2) => {
    return n2 + n2;
}

console.log(arrowFunction(2));
