// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through each number in the array
for (let number of numbers) {

    // Check if the current number is equal to 2
    if (number === 2) {
        // 'continue' skips the rest of the code inside the loop for the current iteration
        continue;
    }

    // Check if the current number is equal to 7
    if (number === 7) {
        // 'break' terminates the loop when the condition is met, stopping further iterations
        break;
    }

    // If the number is not 2 or 7, print it to the console
    console.log(number);
}
