/* eslint-disable camelcase */
'use strict';

const { camelizeKeys, decamelizeKeys } = require('humps');
const { checkAuth } = require('../middleware');
const ev = require('express-validation');
const express = require('express');
const knex = require('../knex');
const validations = require('../validations/orders');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('orders', checkAuth, ev(validations.post), (req, res, next) => {
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

  knex('orders')
    .insert(row, '*')
    .then((rows) => {
      const order = camelizeKeys(rows[0]);

      for (const item of items) {
        const itemId = Number.parseInt(item.id);
        const quantity = Number.parseInt(item.quantity);

        if ((itemId.isNaN() || itemId < 0) ||
          (quantity.isNaN() || quantity < 0)) {
          return knex('orders')
            .where('id', order.id)
            .first()
            .del();
        }

        knex('items_orders')
          .insert({
            orders_id: order.id,
            items_id: itemId,
            item_clothing_size: item.size,
            quantity
          })
          .catch((err) => next(err));
      }
      res.send(order.id);
    })
    .catch((err) => next(err));
});

module.exports = router;
