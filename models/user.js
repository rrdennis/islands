const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
}, {
  timestamps: true
});

//Export the model
module.exports = mongoose.model('User', userSchema);
