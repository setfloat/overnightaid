'use strict';

const { camelizeKeys } = require('humps');
const express = require('express');
const knex = require('../knex');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/items', (req, res, next) => {
  knex('items')
    .orderby('id')
    .then((rows) => {
      const items = camelizeKeys(rows);

      res.send(items);
    })
    .catch((err) => next(err));
});

module.exports = router;
