// Import the necessary modules
const express = require('express'); 
const app = express(); 
const routes = require('./routes'); 
const path = require('path'); 
const { globalMiddleware } = require('./src/middlewares/middleware')

// Middleware to parse incoming request bodies with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.resolve(__dirname, 'public')));

// Setting up views directory and view engine
app.set('views', path.resolve(__dirname, 'src', 'views')); 
app.set('view engine', 'ejs'); 

// Middlewares
app.use(globalMiddleware);
app.use(routes);

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Access port: http://localhost:3000');
    console.log('Server running on port: 3000');
});
