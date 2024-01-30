// IIFE -> Immediately invoked function expression

// This function is protected from global scoped
(function(age, weight, height) {

    const surname = 'Pereira';

    function createName(name){
        return name + ' ' + surname;
    }
    
    function setName(){
        console.log(createName('Vitor'));
    }

    setName();
    console.log(age, weight, height);
})(22, 80, 1.75);

// This is a different variable
const name = 'Tiago';

console.log(name); // Output: Vitor Pereira 22 80 1.75 Tiago
//console.log(setName()); // ReferenceError: setName is not defined

