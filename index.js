// index.js
const express = require('express');
const morgan = require('morgan');
const { mainRoutes } = require('./routes');

// Create an instance of the Express application
const app = express();

app.use(morgan('dev'));
// Use the mainRoutes for the root path
app.use('/main', mainRoutes);

// Make the server listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
