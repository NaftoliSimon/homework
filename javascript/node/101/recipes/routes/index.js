const express = require('express');
const router = express.Router();
const pool = require('./pool')

/* GET home page. */
router.route('/')
  .get((req, res, next) => {
    pool.query('SELECT * FROM recipes', (error, results, fields) => {
      if (error) {
        return res.sendStatus(500);
      }
      return res.send(results);
    })
  })
  .post((req, res, next) => {
    pool.query('INSERT INTO recipes(name, ingredients, directions, picture) VALUES (?, ?, ?, ?)',
      [req.body.name, req.body.ingredients, req.body.directions, req.body.picture],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        req.body.id = results.insertId;
        res.status(201)
          .location(`${req.baseUrl}/${req.body.id}`)
          .send(req.body);
      });
  });

router.route('/:id')
  .get((req, res, next) => {
    pool.query('SELECT * FROM recipes WHERE id = ?',
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        if (!results.length) {
          return res.sendStatus(404);
        }

        res.send(results[0]);
      });
  })
  .delete((req, res, next) => {
    pool.query('DELETE FROM recipes WHERE id = ?',
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        if (!results.affectedRows) {
          return res.sendStatus(404);
        }

        res.sendStatus(204);
      });
  })
  .put((req, res, next) => {
    pool.query('UPDATE recipes SET name = ?, ingredients = ?, directions = ?,  picture = ? WHERE id = ?',
      [req.body.name, req.body.ingredients, req.body.directions, req.body.picture, req.params.id],
      (error, results, fields) => {
        if (error) {
          return res.sendStatus(500);
        }
        if (!results.affectedRows) {
          return res.sendStatus(404);
        }

        res.sendStatus(204);
      });
  })

module.exports = router;
