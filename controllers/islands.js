const User = require('../models/user');
const Song = require('../models/song');

const index = (req, res) => {
  Song.find({}, (err, songs) => {
    res.render('islands/index', {
      user: req.user,
      title: 'Islands',
      songs
    });
  });
};

const newSong = (req, res) => {
  res.render('islands/new', {
    title: 'Add A Song'
  });
};

const createSong = (req, res) => {
  req.body.year = Number(req.body.year);
  Song.create(req.body, (err, song) => {
    res.redirect('/islands');
  });
};

module.exports = {
  index,
  newSong,
  createSong
};
