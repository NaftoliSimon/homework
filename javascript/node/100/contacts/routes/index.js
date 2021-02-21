const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', { title: 'Express', partials: { content: 'index' } });
});

module.exports = router;
