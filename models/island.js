const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const islandSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    songs: String,
    notes: {
        type: String
    },
    password:{
        type: String,
        required: true,
        index: true,
    }
}, {
  timestamps: true
});

//Export the model
module.exports = mongoose.model('Island', islandSchema);
