var express = require('express');
var router = express.Router();

const contactsData = [
  { name: 'Joe', email: 'joe@gmail.com', phone: '123-456-7890' },
  { name: 'Bob', email: 'bob@gmail.com', phone: '987-654-3210' },
  { name: 'Tom', email: 'tom@gmail.com', phone: '012-345-6789' }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/contacts')
})
router.get('/contacts', function (req, res, next) {
  res.render('layout', {
    title: 'Contacts',
    contacts: contactsData,
    isEmpty: false,
    partials: { content: 'index' }
  });
});

router.get('/api/contacts', function (req, res, next) {
  res.render(contactsData)
})

module.exports = router;
