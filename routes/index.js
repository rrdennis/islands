const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
  '/',
  (req, res) => {
    res.render('index', {
      title: 'Islands'
    });
  }
);

router.get(
  '/auth/google',
  passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  )
);

router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/islands',
    failureRedirect: '/islands'
  })
);

router.get(
  '/logout',
  (req, res) => {
    req.logout();
    res.redirect('/');
  }
);

module.exports = router;
