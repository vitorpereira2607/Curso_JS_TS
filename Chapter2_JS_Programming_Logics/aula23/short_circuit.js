/*
&& -> false && true -> false 
|| -> true || false -> will return true value

Falsy
false
0
'' "" ``
null / undefined
NaN
*/

// Examples for && (logical AND) operator
console.log('Vitor' && true && 42); // Output: 42
console.log('Vitor' && undefined && 'Pereira'); // Output: undefined
console.log(true && null && 'Pereira'); // Output: null
console.log(true && 'Vitor' && ''); // Output: ''

// Examples for || (logical OR) operator
console.log('Vitor' || false || 0); // Output: 'Vitor'
console.log(undefined || null || ''); // Output: ''
console.log(false || 'Pereira' || 42); // Output: 'Pereira'
console.log('' || null || 'John'); // Output: 'John'
