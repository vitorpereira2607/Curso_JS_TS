const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// Route to display a form to input client name
route.get('/', homeController.homePage);

// Route to handle form submission (POST request)
route.post('/', homeController.postForm);

route.get('/contact', contactController.contactPage);

module.exports = route;
