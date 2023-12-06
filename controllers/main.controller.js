// controllers/main.controller.js
const { mainService } = require('../services');

// Controller function for handling a route
const handleMainRoute = (req, res) => {
    // Call the service function to get a greeting
    const greeting = mainService.getGreeting();

    // Send the greeting as the response
    res.send(greeting);
};

module.exports = {
    handleMainRoute,
};
