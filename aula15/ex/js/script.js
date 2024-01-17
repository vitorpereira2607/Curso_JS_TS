const n1 = Number(prompt('Insert a number: '));

// Getting the elements by their IDs
const numberTitle = document.getElementById('number-title');
const text = document.getElementById('text');

// Updating the content of HTML elements
const resSquareRoot = Math.sqrt(n1);
const resMinNumber = Math.floor(n1);
const resMaxNumber = Math.ceil(n1);
const resDecimalNumber = n1.toFixed(2);

numberTitle.innerHTML = n1;
text.innerHTML = ''
text.innerHTML += `<p>Square root is: ${resSquareRoot}.</p>`;
text.innerHTML += `<p>${n1} is integer: ${Number.isInteger(n1)}.</p>`;
text.innerHTML += `<p>Is NaN(Not a Number): ${Number.isNaN(n1)}.</p>`;
text.innerHTML += `<p>Number rounded down: ${resMinNumber}.</p>`;
text.innerHTML += `<p>Number rounded up: ${resMaxNumber}.</p>`;
text.innerHTML += `<p>Two decimal places: ${resDecimalNumber}.</p>`;






