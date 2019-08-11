const express = require('express');                              //  P.5-5  --  Load the express library for this file.
const router = express.Router();                                 //  P.5-5  --  Load the router part of express.

// GET ALL subscribers
router.get('/', function(req, res) {                             //  P.6  --  Get all subscribers (on general route "/")  
    res.send('This is a test of the get all route...');
});

// GET One subscriber                                             
router.get('/:id', function(req, res) {                          //  P.6  --  Get one subscriber (using the id parameter)
    
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