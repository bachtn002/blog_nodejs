
const mongoose = require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_nodejs_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
