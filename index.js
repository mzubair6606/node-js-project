// index.js
const express = require('express');
const { mainRoutes } = require('./routes');

// Create an instance of the Express application
const app = express();

// Use the mainRoutes for the root path
app.use('/', mainRoutes);

// Make the server listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
