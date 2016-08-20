'use strict';

exports.seed = function(knex) {
  return knex('items_orders').del()
    .then(() => knex('items_orders').insert([
      {
        id: 1,
        orders_id: 1,
        items_id: 1,
        item_clothing_size: 'small',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 2,
        orders_id: 1,
        items_id: 2,
        item_clothing_size: 'large',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 3,
        orders_id: 2,
        items_id: 1,
        item_clothing_size: 'medium',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      }
      ])
  )
  .then(() knex.raw(
    "SELECT setval('items_orders_id_seq', (SELECT MAX(id) FROM items_orders));"
      )
    );
};
