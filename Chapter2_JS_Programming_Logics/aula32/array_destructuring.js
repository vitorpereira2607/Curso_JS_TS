// Example array
const myArray = [1, 2, 3, 4, 5];


// Destructuring assignment
const [first, second, third, ...rest] = myArray;


// Now, variables have the corresponding values from the array
console.log(first);    // Output: 1
console.log(second);   // Output: 2
console.log(third);    // Output: 3
console.log(rest);     // Output: [4, 5]


//Additionally, you can skip values that are not needed using commas. For example:
const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one, , three, , five] = myArray2;

console.log(one, three, five);  // Output: 1 3 5