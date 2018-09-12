// import mongoose
const mongoose = require('mongoose');

// connection status report
mongoose.connect('mongodb://localhost:27017/hr_db',
    (err) => {
        if (!err){
            console.log("Successfully tapped with mongo");
        } else {
            console.log("Error in connecting with mongo /n" + JSON.stringify(err,undefined,2));
        }
    }
);

// to establish connection outside of this js
module.exports = mongoose;