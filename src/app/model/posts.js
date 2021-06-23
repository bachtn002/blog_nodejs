const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const posts = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    createdUtcDate: { type: Date, default: Date.now },
    modifiedUtcDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('posts',posts,'postsblog');