const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Home Page',
    multiple: res.locals.visited > 1 ? true : false,
    partials: { content: 'index' }
  });
});

router.get('/logIn', function (req, res, next) {
  res.render('layout', {
    title: 'Log In',
    partials: { content: 'name' }
  });
});

router.get('/loggedIn', function (req, res, next) {
  if (res.locals.name === 'stranger') {
    res.redirect('/logIn');
  }
  res.render('layout', {
    title: 'Logged In',
    partials: { content: 'logInToUse' }
  });
});

module.exports = router;
