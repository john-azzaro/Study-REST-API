const express = require('express');                              //  P.5  --  Load the express library for this file.
const router = express.Router();                                 //  P.5  --  Load the router part of express.
const Subscriber = require('../models/subscriber');             //  P7  --  Include your model in this main route file (note the ".." so that you go back one folder to use "models").

// GET ALL subscribers
router.get('/', async function(req, res) {                       //  P.6/8  --  Get all subscribers (on general route "/") and add the "async" modifer 
    try {                                                        //  P.8  --  Add a "try" block for your route.
        const subscribers = await Subscriber.find();             //  P.8  --  ... Await all the subscribers we have.
        res.json(subscribers);                                   //  P.8  --  ... and send a response of the subscribers if successful.
    } catch (err) {                                              //  P.8  --  Add a "catch" block incase there are any errors and pass "err" object.
        res.status(500).json( {message: err.message } );         //  P.8  --  ... send a status of 500 (error is database fault) and the json message, which will show the err object.
    }
});

// GET One subscriber                                             
router.get('/:id', function(req, res) {                          //  P.6  --  Get one subscriber (using the id parameter)
    // res.send(req.params.id);                                      P.6  --  Test GET (one) route functionality in Postman
});

// CREATE subscriber
router.post('/', function(req, res) {                            //  P.6  -- Create a subscriber 

});

// UPDATE subsrcriber
router.patch('/:id', function(req, res) {                        //  P.6  -- Update a subscriber     

});

// DELETE Subscriber
router.delete('/:id', function(req, res) {                        //  P.6  --  Delete a subscriber 

});


module.exports = router;                                          //  P.5-5  --  Export router!