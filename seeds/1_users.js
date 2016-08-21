/* eslint-disable camelcase */

'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => knex('users').insert([
      {
        id: 1,
        email: 'barkatdogs@stanleypaddles.com',

        // eslint-disable-next-line max-len
        hashed_password: '$2a$12$e1rLWAJmEOhD/6uBZ.IME.NOH3ezqu86YIClih.6UewqBRUNP/QyS',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 2,
        email: 'dog@stanley.com',

        // eslint-disable-next-line max-len
        hashed_password: '$2a$12$e1rLWAJmEOhD/6uBZ.IME.NOezqu86H3YIClih.6UewqBRUNP/QyS',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 3,
        email: 'stanley@dog.com',

        // eslint-disable-next-line max-len
        hashed_password: '$2a$12$e1rLWAJmEOhD/6uBZ.IME.NO6YICH3ezqu8lih.6UewqBRUNP/QyS',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 4,
        email: 'paddles@bark.com',

        // eslint-disable-next-line max-len
        hashed_password: '$2a$12$e1rLWAJmEOhD/6uBZ.IME.NOzqu86YIH3eClih.6UewqBRUNP/QyS',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 5,
        email: 'stanley@paddles.net',

        // eslint-disable-next-line max-len
        hashed_password: '$2a$12$oUMS2tVk4HT3MX5L5f31oOJHzyOgKwShyeXXKw.5cvNJC.TjZ3XI.',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      }
    ])
  )
  .then(() => {
    return knex.raw(
      "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
    );
  });
};
