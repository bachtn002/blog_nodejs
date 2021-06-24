
const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true, min: 6 },
    mobile: { type: String, required: true, min: 10 },
    email: { type: String, required: true, max: 255 },
    password: { type: String, required: true, min: 8, max: 32 },
    //createdDate: { type: Date, required: true, default: new Date(Date.UTC) },
})

module.exports = mongoose.model('users', userSchema, 'auth');