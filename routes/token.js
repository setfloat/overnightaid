'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const { camelizeKeys } = require('humps');
const ev = require('express-validation');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const validations = require('../validations/users');

// eslint-disable-next-line new-cap
const router = express.Router();

// Creates JWT for user authentication
router.post('/token', ev(validations.post), (req, res, next) => {
  let user;

  knex('users')
    .where('email', req.body.email)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(401, 'User could not be logged in');
      }

      user = camelizeKeys(row);

      return bcrypt.compare(req.body.password, user.hashedPassword);
    })
    .then(() => {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

      res.cookie('accessToken', token, {
        httpOnly: true,
        secure: router.get('env') === 'production'
      });

      res.cookie('loggedIn', true, {
        secure: router.get('env') === 'production'
      });

      res.sendStatus(200);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(401, 'User could not be logged in');
    })
    .catch((err) => {
      next(err);
    });
});

// Deletes JWT
router.delete('/token', (req, res, _next) => {
  res.clearCookie('accessToken');
  res.clearCookie('loggedIn');
  res.sendStatus(200);
});

module.exports = router;
