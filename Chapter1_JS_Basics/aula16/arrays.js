// Initializing an array named 'students' with initial values
const students = ['Vitor', 'Tiago', 'João'];

// Modifying the first element of the 'students' array
students[0] = 'Maria';

// Adding 'José' to the end of the 'students' array
students.push('José');

// Adding 'Fábio' at the end of the 'students' array using array length
students[students.length] = 'Fábio';

// Adding 'Sara' to the beginning of the 'students' array
students.unshift('Sara');

// Removing the last element from the 'students' array
const removedStudent = students.pop();

// Removing the first element from the 'students' array
const removeFirstStudent = students.shift();

// Displaying the first two elements of the 'students' array
console.log(students.slice(0, 2));

// Displaying the type of the 'students' array (object)
console.log(typeof students); //object

// Displaying the element that was removed using pop() method
console.log(removedStudent);

// Displaying the modified 'students' array
console.log(students);
