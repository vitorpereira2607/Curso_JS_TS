require('dotenv').config();

// Import the necessary modules
const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
const connectionString = process.env.CONNECTIONSTRING


mongoose.connect(connectionString)
    .then(() => {
        //console.log('Getting the connection from BD first before starting the server');
        app.emit('start')
    })
    .catch(err => console.error(err));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flashMessage = require('connect-flash');
const routes = require('./routes'); 
const path = require('path'); 
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
const helmet = require('helmet');
const csrf = require('csurf');

app.use(helmet());
// Middleware to parse incoming request bodies with urlencoded payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware to serve static files from the 'public' directory
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'secret',
    store: new MongoStore({ mongoUrl: connectionString}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
    },  
});

app.use(sessionOptions);
app.use(flashMessage());

// Setting up views directory and view engine
app.set('views', path.resolve(__dirname, 'src', 'views')); 
app.set('view engine', 'ejs'); 

app.use(csrf());
// Middlewares
app.use(globalMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

// Start the server and listen on port 3000
app.on('start', () => {
    app.listen(3000, () => {
        console.log('Access port: http://localhost:3000');
        console.log('Server running on port: 3000');
    });
})

