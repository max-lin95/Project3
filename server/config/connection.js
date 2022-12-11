const mongoose = require('mongoose');
//ODM library(mongoose) translates the objects for MongoDB-- link not for the 
mongoose.connect(process.env.MONGODB_URI || 'mongodb: //localhost:3001', {
    useCreateIndex: true,
    useNewUrlParser: true
});

module.exports = mongoose.connection;
