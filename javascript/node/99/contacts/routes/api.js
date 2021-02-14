const express = require('express');
const router = express.Router();

//NOT FINISHED YET

let contacts = [
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

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('layout', { title: 'Express', partials: { content: 'index' } });
});
router.get('/contacts', function (req, res, next) {
    //NOT FINISHED YET

    //res.json(contacts);
    jsonContacts = JSON.stringify(contacts);
    //NOT FINISHED YET
    res.end(jsonContacts)
});

module.exports = router;
//NOT FINISHED YET