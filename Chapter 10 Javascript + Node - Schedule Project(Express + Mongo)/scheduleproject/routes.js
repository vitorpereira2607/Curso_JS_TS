const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contactController = require('./src/controllers/contactController');

// Home routes
route.get('/', homeController.index);

// Login routes

route.get('/login/index', loginController.loginIndex)
route.get('/register/index', loginController.registerIndex)
route.get('/logout', loginController.logout);
route.get('/logged', loginController.logged);
route.post('/login/register', loginController.register)
route.post('/login/login', loginController.login)

// Contact routes

route.get('/contact/index', contactController.contactIndex);

module.exports = route;
