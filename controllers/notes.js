const User = require('../models/user');
const Song = require('../models/song');

const newNote = (req, res) => {
  Song.findById(req.params.id, (err, song) =>{
    res.render('notes/new', {
      user: req.user,
      title: 'Add A Note',
      song
    });
  });
};

module.exports = {
  newNote
};