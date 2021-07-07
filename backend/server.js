const mongoose = require('mongoose')
require('dotenv').config()

if (!process.env.MONGODB_URL) {
    throw new Error('You Must Have A MONGODB_URL In Your .env file ') 
}

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});



