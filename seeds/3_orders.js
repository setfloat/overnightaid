'use strict';

exports.seed = function(knex) {
  return knex('orders').del()
    .then(() => knex('orders').insert([
      {
        id: 1,
        users_id: 1,
        address_full_name: 'Stanley Paddles',
        address_line1: '111 S Jackson Blvd',
        address_line2: '',
        address_city: 'Seattle',
        address_state: 'WA',
        address_zip: '98104',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 2,
        users_id: 1,
        address_full_name: 'Space Needle',
        address_line1: '400 Broad St',
        address_line2: '',
        address_city: 'Seattle',
        address_state: 'WA',
        address_zip: '98109',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 3,
        users_id: 1,
        address_full_name: 'Ranger Stanley',
        address_line1: 'PO Box 1727',
        address_line2: '',
        address_city: 'Seward',
        address_state: 'AK',
        address_zip: '99664',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      ])
  )
  .then(() knex.raw(
    "SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders));"
      )
    );
};
