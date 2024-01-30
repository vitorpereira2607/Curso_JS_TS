function returnFunction(){
    const name = 'Vitor';

    return function(){
        return name;
    }
}

console.log(returnFunction()); 

// Closure its the hability that a function has to access his lexical scoped.

// Global scope
function a(msg) {
    // Lexical scope of a is accessible in b
    const name = 'Vitor';
    console.log(name);
    return function b(somethingInB) {
      // Lexical scopes of b and a are accessible in c
      return function c(somethingInC) {
        return `${msg} ${somethingInB} ${somethingInC}`;
      };
    };
  }

// Call functions to create the closure
const result = a('Hello')('From B');

// Log the result
console.log(result);