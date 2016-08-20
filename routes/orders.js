'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const boom = require('boom');
const checkAuth = require('../middleware');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const validations = require('../validations/users');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/orders', checkAuth, ev(validations.post), (req, res, next) => {
  const {
    addressFullName,
    addressLine1,
    addressLine2,
    addressCity,
    addressState,
    addressZip
  } = req.body;
  const { userId } = req.token;
  const newOrder = {
    addressFullName,
    addressLine1,
    addressLine2,
    addressCity,
    addressState,
    addressZip,
    userId
  };
  const row = decamelizeKeys(newOrder);

  knex('orders')
    .insert(row, '*')
    .then((rows) => {
      const order = camelizeKeys(rows[0]);

      res.send(order);
    })
    .catch((err) => next(err));
});

module.exports = router;
