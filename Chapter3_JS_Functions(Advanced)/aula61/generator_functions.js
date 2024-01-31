function* generator1(){
    yield 'Value 1';
    yield 'Value 2';
    yield 'Value 3';
}

const g1 = generator1();

console.log(g1); // Output: Object [Generator] {}
console.log(g1.next()); // Output: { value: 'Value 1', done: false }
console.log(g1.next().value); // Output: value: 'Value 2'
console.log(g1.next().value); // Output: value: 'Value 3'
console.log(g1.next()); // { value: undefined, done: true }


function* generator2(){
    yield 1;
    yield 2;
    yield 3;
}


function* generator3(){
    yield* generator2();
    yield 4;
    yield 5;
    yield 6;
}

const g3 = generator3();

for(let value of g3){
    console.log(value)
}

function* generator4(){
    yield function() {
        console.log('Came from y1');
    }

    return function(){
        console.log('Came from the return')
    }

    // If we use return the functions end where return is being executed, so the function down cant be detected
    yield function() {
        console.log('Came from y2');
    }
}

const g4 = generator4();
const func1 = g4.next().value;
const func2 = g4.next().value;
const func3 = g4.next().value;

func1()
func2()
func3() // Output: TypeError: func3 is not a function