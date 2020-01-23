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

const showSong = (req, res) => {
  Song.findById(req.params.id, (err, song) => {
    res.render('islands/show', {
      title: 'View Song',
      song
    });  
  });
};

const showUpdate = (req, res) => {
  Song.findById(req.params.id, (err, song) => {
    res.render('islands/update', {
      title: 'Update Song',
      song
    });  
  });
};

const updateSong = (req, res) => {
  Song.findById(req.params.id, (err, song) => {
    if (req.body.name) song.name = req.body.name;
    if (req.body.artist) song.artist = req.body.artist;
    if (req.body.year) song.year = Number(req.body.year);
    song.save(err => {
      if (err) return res.render('error');
      res.render('islands/show', {
        song
      });
    });
  });
};

module.exports = {
  index,
  newSong,
  createSong,
  showSong,
  updateSong,
  showUpdate
};
