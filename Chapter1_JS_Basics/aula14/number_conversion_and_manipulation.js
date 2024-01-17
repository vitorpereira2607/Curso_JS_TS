
let num1 = 1;
let num2 = 2.542165732176532571532165;

console.log(num1.toString() + num2); //in this line we are temporarly converting num1 variable to a string

console.log(typeof num1); // its still a number 

//to permantly convert a number to a string we can do the following
num1 = num1.toString();

console.log(typeof num1); // string

console.log(num2.toFixed(2)) //2.54

console.log(Number.isInteger(num1)); //Checks if the variable is a Integer or not, return true if its INT or false otherwise

//====================================

let n1 = 0.7;
let n2 = 0.1;

n1 += n2; // 0.8
n1 += n2; // 0.9
n1 += n2; //


console.log(n1); // 0.9999999999999999

//n1 = n1.toFixed(2); // 1.00

console.log(Number.isInteger(n1)); //false

n1 = Number(n1.toFixed(2)); //1, doing this fixes the problem above

console.log(n1); //1.00 

 
console.log(Number.isInteger(n1)); //true
