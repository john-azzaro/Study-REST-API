require('dotenv').config();                                                        // P3-5 --  Load "dotenv" to read data from your ".env" file (best to load this as early as possible) 

                                                                                   // Load modules //
const express = require('express');                                                // P2.1 -- Load the express library
const app = express();                                                             // P2.2 -- Instantiate the app using express.
const mongoose = require('mongoose');                                              // P3.1 -- Load mongoose module.

                                                                                   // Database connections //
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });             // P3.2 -- Connect to MongoDB database (& pass deprecation remedy for URL parser). 
const db = mongoose.connection;                                                    // P3.3 -- Connect to your database.
db.on('error', function(error) {                                                   // P3.4-1 -- ... IF there is an ERROR connecting to database, log the error object.
    console.error(error);
});
db.once('open', function() {                                                       // P3.4-2 -- ... IF the connection is successful, log "Connected to Mongoose..." which is your database.
    console.log('Connected to Mongoose...');
});

                                                                                   // Middlewares //
app.use(express.json());                                                           //P4-1  --  This middleware allows the server to accept incoming requests as a JSON body.                                            

                                                                                   // Routers //
const subscriberRouter = require('./routes/subscribers');                          // P5 --  Since this application has a subscriber api, we need to setup a Router to route subscriber information.
app.use('/subscribers', subscriberRouter);                                         // P5 --  Then, tell the app to use the "subscribersRouter" each time there is a request to the subscribers endpoint. 



                                                                                   // Server connection //
app.listen(3000, function() {                                                      // P2.3 -- listen on port 300 for 
    console.log('Your app is litening on Port 3000...');
});