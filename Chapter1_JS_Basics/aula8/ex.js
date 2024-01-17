const name = 'Vitor Tiago';
const surname = 'Faria Pereira';
const age = 22;
const weight = 84;
const height = 1.73;
const currentyear = 2024;

let BMI;
let birthYear;

BMI = weight / (height * height);
birthYear = currentyear - age;

console.log(BMI);
console.log(birthYear);

console.log(name , surname, 'has', age, 'years, weights', weight, 'Kg', '\nhas', height, 'tall and has a BMI of', BMI + ".\n" + name, "were born in", birthYear);

//OR
console.log('\n')
console.log(name , surname, 'has', age, 'years, weights', weight, 'Kg');
console.log('has', height, 'tall and has a BMI of', BMI);
console.log(name, "were born in", birthYear);

// using a Template String -> ``

console.log('\n')
console.log(`${name} ${surname} has ${age} years weights ${weight} Kg`);
console.log(`has ${height} tall and has a BMI of ${BMI}`);
console.log(`${name} were born in ${birthYear}`);

// using a Template string in a single log 

console.log('\n')
console.log(`${name} ${surname} has ${age} years weights ${weight} Kg
has ${height} tall and has a BMI of ${BMI}.
${name} were born in ${birthYear}`);


/*
    VERY IMPORTANT NOTE:
    Each method achieves the same goal, but using a template string in a single console.log() statement often provides a more concise and readable way to display complex information.
*/