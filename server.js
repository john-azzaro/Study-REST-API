const express = require('express');                       // load the express library
const app = express();                                    // instantiate the app using express.

app.listen(3000, function() {                             // listen on port 300 for 
    console.log('Your app is litening on Port 3000...')
});