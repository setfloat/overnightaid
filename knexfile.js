'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/overnightaid_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/overnightaid_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
