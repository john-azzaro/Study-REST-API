const mongoose = require('mongoose');                            // P7  --  Load mongoose so that we can interact with the database.
 
const subscriberSchema = new mongoose.Schema({                   // P7  --  For the subscriberSchema, 
    name: {                                                      // P7  --  The name must...
        type: String,                                            // P7  --  ... the name must be a string
        required: true                                           // P7  --  ... the name MUST be required (i.e. you must have a name)
    },
    subscribedToChannel: {                                       // P7  --  For the channel,
        type: String,                                            // P7  --  ... the subscriberChannel must be a string
        required: true                                           // P7  --  ... the subscriber MUST be required
    },
    subscriberDate: {                                            // P7  --  For subscriber date,
        type: Date,                                              // P7  --  ... the subscriber date must be a string
        required: true,                                          // P7  --  ... the subscriber date must be required
        default: Date.now                                        // P7  --  ... and the date of subscrption is the current date of subscription
    }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);  // P7  --  Export the schema above to interact directly with the database.


