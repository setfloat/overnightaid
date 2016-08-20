'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments();
    table.integer('users_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE')
      .index();
    table.string('address_full_name')
      .notNullable();
    table.string('address_line1')
      .notNullable()
      .defaultTo('');
    table.string('address_line2')
      .notNullable()
      .defaultTo('');
    table.string('address_city')
      .notNullable();
    table.specificType('address_state', 'char(2)')
      .notNullable();
    table.specificType('address_zip', 'char(5)')
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
