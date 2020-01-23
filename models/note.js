const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  song: {
    type: Schema.Types.ObjectId,
    ref: 'Song'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);
