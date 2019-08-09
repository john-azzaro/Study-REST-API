const express = require('express');                                                // P2.1 -- Load the express library
const app = express();                                                             // P2.2 -- Instantiate the app using express.

const mongoose = require('mongoose');                                              // P3.1 -- Load mongoose module.
mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true });    // P3.2 -- Connect to MongoDB database (& pass deprecation remedy for URL parser). 

const db = mongoose.connection;                                                    // P3.3 -- Connect to your database.

app.listen(3000, function() {                                                      // P2.3 -- listen on port 300 for 
    console.log('Your app is litening on Port 3000...');
});