/*

Function declaring (function hoisting)

You can call the function here because of hoisting. 
This means that the JavaScript engine, when being executed, elevates all declared functions to the top of the file.
sayHello(); 
*/

function sayHello(){
    console.log('Hello')
}

sayHello();

/*
    First-class objects:
        Assigned to a variable.
        Passed as an argument to a function.
        Returned from a function.
        Stored in data structures like arrays or objects.

        Function expression
*/

const imData = function() {
    console.log('I am data.')
}

//imData();

function execFunction(functions) {
    console.log('im going to execute the function above');
    functions();
}

execFunction(imData);

// Arrow function

const arrowFunction = () => {
    console.log('Im an arrow function');
}

arrowFunction();

// Inside of an object

const obj = {
    talk() {
        console.log('HelloWorld');
    }
}

obj.talk();