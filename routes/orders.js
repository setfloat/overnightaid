/* eslint-disable camelcase */
'use strict';

const boom = require('boom');
const { camelizeKeys, decamelizeKeys } = require('humps');
const { checkAuth } = require('../middleware');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const validations = require('../validations/orders');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/orders', checkAuth, ev(validations.post), (req, res, next) => {
  const {
    addressFullName,
    addressLine1,
    addressLine2,
    addressCity,
    addressState,
    addressZip,
    items
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
  let order;

  knex('orders')
    .insert(row, '*')
    .then((rows) => {
      order = camelizeKeys(rows[0]);

      return Promise.all(items.map((item) => {
        const itemId = Number.parseInt(item.id);
        const quantity = Number.parseInt(item.quantity);

        if (Number.isNaN(itemId) || itemId < 0 || Number.isNaN(quantity) ||
          quantity < 0) {
          return knex('orders')
            .where('id', order.id)
            .first()
            .del()
            .then(() => {
              throw boom.create(400, 'An item in order is not valid');
            });
        }

        const data = {
          orders_id: order.id,
          items_id: itemId,
          item_clothing_size: item.size,
          quantity
        };

        return knex('items_orders')
          .insert(data, '*');
      }));
    })
    .then(() => {
      res.send(`${order.id}`);
    })
    .catch((err) => next(err));
});

module.exports = router;
