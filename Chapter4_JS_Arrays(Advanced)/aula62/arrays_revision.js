// Arrays are references types
const names = ['Maria', 'Vitor', 'José', 'Eduardo'];
// const names = new Array('Vitor', 'José', 'Eduardo'); We can use constructor as well

// Creating a reference to the original array
const newArray = names; 
/*
const newArray = names;
    Here we are creating a reference to the original array, 
    this means every manipulation that we do to the newArray it will affect the original array(names)
*/

/*
    const spreadArray = [...names];
        Here we are creating a copy of the array using rest/spread operator. 
        This means the changes on the original array will not affect on this array.
*/
const spreadArray = [...names];



// This works for Strings, Objects, Functions, Numbers
newArray[2] = 'João';
/*
    delete newArray[2]; // Output: [ 'Vitor', 'José', <1 empty item> ]
        Using delete creates a sparse array with an undefined value at index 2. 
        If you want to completely remove the element from the array, consider using splice or creating a new array without the element.
*/

console.log(names); // Output: [ 'Maria', 'Vitor', 'João', 'Eduardo' ]
// Using pop to remove the last element of the copy array
const removedLastItem = spreadArray.pop() 
console.log(spreadArray); // Output: [ 'Maria', 'Vitor', 'José' ]
console.log(names); // Output: [ 'Vitor', 'José', 'João' ]

// Using pop to add a new element to the end of the original array 
names.push('Alberto');

// Its not that common to use but we can use unshift(names.unshift) to add a new element in the start of the array

console.log(names); // Output: [ 'Maria', 'Vitor', 'João', 'Eduardo', 'Alberto' ]

// Using shift to remove the first element of the original array
const removeFirstItem = names.shift();

console.log(spreadArray, removedLastItem); // Output: [ 'Maria', 'Vitor', 'José' ] Eduardo
console.log(names, removeFirstItem); // Output: [ 'Vitor', 'João', 'Eduardo', 'Alberto' ] Maria
console.log(names.length)

// Creating a new array (slicedArray) by excluding the last element from the original array (names)
const slicedArray = names.slice(0, -1);

// Creating a new array (slicedArray) by extracting elements from the original array (names) starting from index 0 up to, but not including, index 3
//const slicedArray = names.slice(0, 3);

console.log(slicedArray);

// Creating an array (students) by splitting the 'student' string into elements using space as the separator
const student = 'Vitor Tiago Faria Pereira';
const students = student.split(' ');

console.log(students); // Output: [ 'Vitor', 'Tiago', 'Faria', 'Pereira' ]


//Add all elements of an array into a string
const studentsBackToAString = students.join(' ');

console.log(studentsBackToAString);


