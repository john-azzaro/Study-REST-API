const express = require('express');                              //  P.5  --  Load the express library for this file.
const router = express.Router();                                 //  P.5  --  Load the router part of express.
const Subscriber = require('../models/subscriber');              //  P7  --  Include your model in this main route file (note the ".." so that you go back one folder to use "models").

                                                                 // GET ALL subscribers
router.get('/', async function(req, res) {                            //  P.6/8  --  Get all subscribers (on general route "/") and add the "async" modifer 
    try {                                                        //  P.8  --  IF the request is successful...
        const subscribers = await Subscriber.find()              //  P.8  --  ... await finding the subscribers and store as a constant...
        res.json(subscribers)                                    //  P.8  --  ... send all the subscribers to the user using json.
    } catch (err) {                                              //  P.8  --  IF the request was unsuccessful...
        res.status(500).json({ message: err.message })           //  P.8  --  ... send a response with a status of 500 (i.e. error on the server) and the message object.
    }
});

                                                                 // GET (One) subscriber                                             
router.get('/:id', getSubscriber, async function(req, res) {     //  P.6/10  --  Get one subscriber (using the id parameter) and add the getSubscriber middleware and async
    res.json(res.subscriber);                                    //  P.11  --  Send a json version of the subscriber.    
});

                                                                 // CREATE subscriber
router.post('/', async function(req, res) {                      //  P.6/9  -- Create a subscriber, and then later add an "async" modifier
    const subscriber = new Subscriber({                          //  P.9  --  Create a new "Subscriber"...
        name: req.body.name,                                     //  P.9  --  ... with a name that comes from the request json body 
        subscribedToChannel: req.body.subscribedToChannel,       //  P.9  --  ... and also the subscribedToChannel
    });
    try {                                                        //  P.9  --  Then when you have your subscriber, you want to save it to the database
        const newSubscriber = await subscriber.save();           //  P.9  --  If successful, when the Subscriber is ready (i.e. awaiting the async function to complete), then SAVE....
        res.status(201).json(newSubscriber);                     //  P.9  --  Then send "newSubscriber" as a json object with the status of 201 (this means an object was created successfully)
    } catch (err) {                                              //  P.9  --  IF the request was unsuccessful...
        res.status(400).json({ message: err.message});           //  P.9  --  ... send a response with a status of 500 (i.e. error on the server) and the message object.
    }
});

                                                                         // UPDATE subscriber
router.patch('/:id', getSubscriber, async function(req, res) {           //  P.6/10  -- Update a subscriber and add the getSubscriber middleware and async  
    
});

                                                                        // DELETE Subscriber
router.delete('/:id', getSubscriber, async function(req, res) {         //  P.6/10  --  Delete a subscriber and add the getSubscriber middleware and async
    try {
        await res.subscriber.remove();                                   // P.12  --  await the response from the database for the subscriber id to be removed.
        res.json( { message: 'subscriber removed...'})                   // P.12  --  If succussful, send the message that the subscriber has been removed.
    } catch (err) {                                                      // P.12  --  If not successful...
        res.status(500).json({ message: err.message } );                 // P.12  --  Send a 500 status code and the error message.
    } 
});

                                                                                                   // getSubscriber Middleware (so we dont have to put the same code in all the routes):
async function getSubscriber(req, res, next) {                                                     // ... is an asynchronous function (access database).
    let subscriber;                                                                                // Set subscriber as an undefined variable (will be defined below).
    try {                                                                                              
        subscriber = await Subscriber.findById(req.params.id);                                     // subscriber will equal the result of the id passed in the url aquired by req.params.id
        if (subscriber == null) {                                                                  // However, if the subscriber does NOT exist...
            return res.status(404).json( { message: 'Cannot find subscriber'});                    // Return a status of 404 (does not exist, go no further) with message.
        } 
    } catch (err) {                                                                                // And if there is an error...
        res.status(500).json( { message: err.message } );                                          // Send a status of 500 (server issue) with a message.
    }

    res.subscriber = subscriber;                                                                   // Then set res.subscriber equal to subscriber so it can be used in the routes above.
    next();                                                                                        // And lastly call next to move on to the next middleware or the route itself.
}

module.exports = router;                                          //  P.5-5  --  Export router!