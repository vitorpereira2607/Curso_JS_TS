// More about Var, Let and Const

// const truth = true;

// let name1 = 'Vitor';  // Creating a variable with let, block-scoped
// var name2 = 'Tiago'; // Creating a variable with var, funtion-scoped


// if (truth) {
//     let name1 = 'Faria';  // This is a different variable than the outer name1
//     var name2 = 'Test123'; // Redeclaring
//     console.log(name1, name2); // Faria Tiago

//     if (truth) {
//         let name1 = 'Pereira'; 
//         var name2 = 'Test'; // Redeclaring
//         console.log(name1, name2);  // Pereira Tiago
//     }  
// }

// console.log(name1, name2);  // Outputs 'Vitor'

// var hello = 'Hello'; 

// function sayHello() {
//     //var hello = 'Hello'; // This variable is function-scoped

//     console.log(hello);
// }

// //console.log(hello); ReferenceError: hello is not defined

// console.log(hello); 

// sayHello();


console.log(surname)
var surname = 'Pereira'; // undefined

/*
    JavaScript interprets it as if it were written like this due to hoisting:
        var surname;
        console.log(surname); // Outputs 'undefined'
        surname = 'Pereira';
*/

console.log(name3)

let name3 = 'Vitor'; //Cannot access 'name3' before initialization


