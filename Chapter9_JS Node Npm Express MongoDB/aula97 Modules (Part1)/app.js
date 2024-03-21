const path = require('path');
const axios = require('axios');

// Importing content from a module in Node.js
// Method 1: Importing the entire module
const module1 = require('./module1');

// Method 2: Importing a specific content (variable, object, function, etc.) from a module
const importFunctionFullName = require('./module1').getFullName;

// Method 3: Destructuring assignment to import specific exports directly
const { name, surname, getFullName } = require('./module1');

console.log(name, surname, getFullName);

importFunctionFullName();

const { Person } = require('./module1');

const p1 = new Person('Vitor', 21);

console.log(p1);

axios.get('https://json.link/hQsdTRDBQh.json')
    .then(response => console.log(response.data))
    .catch( err => console.error(err));
