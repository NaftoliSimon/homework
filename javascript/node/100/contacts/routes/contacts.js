const express = require('express');
const router = express.Router();

let contact;
/*let contacts = [
  {
    firstName: 'Joe',
    lastName: 'Biden',
    phone: '1234567890',
    email: 'jbiden@whitehouse.gov',
    id: 1
  },
  {
    firstName: 'Kamala',
    lastName: 'Harris',
    phone: '9876543210',
    email: 'kharris@whitehouse.gov',
    id: 2
  },
  {
    firstName: 'Paul',
    lastName: 'Rank',
    phone: '7654321098',
    email: 'prank@gmail.com',
    id: 3
  },
  {
    firstName: 'Jane',
    lastName: 'Oke',
    phone: '3876459210',
    email: 'joke@gmail.com',
    id: 4
  },
  {
    firstName: 'Phil',
    lastName: 'Art',
    phone: '7876543210',
    email: 'part@gmail.com',
    id: 5
  }
];
maxId = getMaxId(contacts) */
//console.log(maxId);

function getMaxId(contactsArr) {
  let idArr = [];
  contactsArr.forEach(contact => idArr.push(contact.id));
  return maxId = Math.max(...idArr);
}
function getSelectedContact(urlId, contactsArr) {
  let [selectedContact] = contactsArr.filter(contact => contact.id === Number(urlId));
  return selectedContact;
}
function update(contact) {
  const updatedContact = JSON.parse(JSON.stringify(contact)); //parsing removes [Object: null prototype] from req.body
  updatedContact.id = Number(updatedContact.id);
  return updatedContact;
}

/* GET home page. */
router.get('/', function (req, res, next) {
  db.query('SELECT * FROM contacts', (error, results, fields) => {
    if (error) {
      return next(new Error(`Can't insert contact - ${error.message}`));
    }
    //console.log('The solution is: ', results);
    res.render('layout', {
      title: 'Contacts',
      contacts: results,
      noContacts: !results.length,
      // css: ['contacts'],
      partials: { content: 'contacts' }
    });
  });
});

router.get('/addContact', function (req, res, next) {
  /*db.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
    (error, results, fields) => {
      if (error) {
        console.log('error of error');
      }
      
    });*/
    res.render('layout', {
      title: 'Add Contact',
      id: req.body.id,
      partials: { content: 'addContact' }
    });
});
router.get('/deleteContact/:id', function (req, res, next) {
 // contacts = contacts.filter(contact => contact.id !== Number(req.params.id));
  res.redirect('/contacts');
});

router.get('/editContact/:id', function (req, res, next) {
  // contact = getSelectedContact(req.params.id, contacts);
  // res.render('layout', {
  //   title: 'Edit Contact',
  //   contact,
  //   partials: { content: 'editContact' }
  // })
});

router.post('/editContact/:id', function (req, res, next) {
  // updatedContact = update(req.body);
  // contact = getSelectedContact(req.params.id, contacts);
  // let index = contacts.indexOf(contact);
  // contacts.splice(index, 1, updatedContact);

  res.redirect('/contacts');
});

router.post('/addContact', function (req, res, next) {
  db.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
    [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
    (error, results, fields) => {
      if (error) {
        return next(new Error(`Can't insert contact - ${error.message}`));
      }
      res.redirect('/contacts');
    });
});

module.exports = router;
/*
TODO: part 3 from hw
*/