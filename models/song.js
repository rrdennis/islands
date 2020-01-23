const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: String,
    artist: String,
    year: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Song', songSchema);
