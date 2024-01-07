let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

//Declaring a temporary variable to store one of the values.
//const varATemp = varA;

// varA = varB; // B
// varB = varC; // C
// varC = varATemp; // A

// OR

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC) // B C A


