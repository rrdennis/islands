const Island = require('../models/island');

const index = (req, res) => {
  res.render('islands/index', {
    title: 'Your Islands'
  });
};

const newIsland = (req, res) => {
  res.render('islands/new', {
    title: 'Create Island'
  });
};

module.exports = {
  index,
  newIsland
};
// mongoose, passport, passport-google-oauth20, cookie-parser, dotenv, express-session
