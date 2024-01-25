// i - index
for (let i = 0; i <= 10; i++) {

    // Check if i is even
    const even = i % 2 === 0;
    
    if (even) {
        console.log(`${i} is even.`);
    } else {
        console.log(`${i} is odd.`);
    }
}

console.log('');

// Loop with a step of 2
for (let i = 0; i <= 5; i += 2) {
    console.log('Line', i);
}

console.log('');

// Array iteration
const fruits = ['apple', 'orange', 'banana', 'grapes'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
