const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('layout', { title: 'Express', partials: { content: 'index' } });
});
router.get('/contacts', function (req, res, next) {
    db.query('SELECT * FROM contacts', (error, results, fields) => {
        if (error) {
            // res.statusCode = 500;
            // res.end();
           return res.sendStatus(500);
        }
        return res.send(results);
    });
});
//TODO: part 2 of hw:   Add a post handler to allow for adding a contact (to the db)
router.post('/contacts', function (req, res, next) {
    db.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
        [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
        (error, results, fields) => {
            if (error) {
                return res.sendStatus(500);
            }
            // res.statusCode = 201;
            // res.write('results:', results);
           res.sendStatus(201);
        });
    res.end('end of post')
});

module.exports = router;
