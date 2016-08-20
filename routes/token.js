'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const { camelizeKeys } = require('humps');
const express = require('express');
const knex = require('../knex');
const jwt = require('jsonwebtoken');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/token', (req, res, next) => {
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

router.delete('/token', (req, res, _next) => {
  res.clearCookie('accessToken');
  res.clearCookie('loggedIn');
  res.sendStatus(200);
});

module.exports = router;
