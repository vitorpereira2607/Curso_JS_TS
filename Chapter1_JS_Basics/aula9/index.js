



//In this example i redeclare the variable 'name' because variables declared with var are function-scoped or globally scoped.
//This means that their scope is contained within the function they are declared in, or they are global if declared outside any function.
var name = 'Vitor';
var name = 'Tiago';

console.log(name);

//with let we can't redeclare de same variable because let variable are blocked-scoped, this means that They only exist within the block ({}) they are declared in, such as loops or conditional statements.
let surname = 'Pereira' 
//let surname = 'Oi' //SyntaxError: Identifier 'surname' has already been declared

function myFunction() {
    let x = 10; // x exists only within this function block
    console.log(x); // Can access x here
  }
  
  console.log(myFunction()); // ReferenceError: x is not defined because x is not accessible here
  

