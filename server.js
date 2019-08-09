                                                                                   // Load modules //
const express = require('express');                                                // P2.1 -- Load the express library
const app = express();                                                             // P2.2 -- Instantiate the app using express.
const mongoose = require('mongoose');                                              // P3.1 -- Load mongoose module.

                                                                                   // Database connections //
mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true });    // P3.2 -- Connect to MongoDB database (& pass deprecation remedy for URL parser). 
const db = mongoose.connection;                                                    // P3.3 -- Connect to your database.
db.on('error', function(error) {                                                   // P3.4-1 -- ... IF there is an ERROR connecting to database, log the error object.
    console.error(error);
});
db.once('open', function() {                                                       // P3.4-2 -- ... IF the connection is successful, log "Connected to Database..."
    console.log('Connected to Database...');
});

                                                                                   // Server connection //
app.listen(3000, function() {                                                      // P2.3 -- listen on port 300 for 
    console.log('Your app is litening on Port 3000...');
});