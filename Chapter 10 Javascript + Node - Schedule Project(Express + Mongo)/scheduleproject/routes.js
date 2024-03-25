const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');



// Home routes
route.get('/', homeController.index);

// Login routes

route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)

module.exports = route;
