// routes/main.routes.js
const express = require('express');
const { mainController } = require('../controllers');

// Create an instance of the Express router
const router = express.Router();

// Define a route that invokes the controller function
router.get('/', mainController.handleMainRoute);

module.exports = router;
