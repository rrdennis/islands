const Island = require('../models/island');

const index = (req, res) => {
  res.render('islands/index', {
    user: req.user,
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
