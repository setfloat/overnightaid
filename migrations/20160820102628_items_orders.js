'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('items_orders', (table) => {
    table.increments();
    table.integer('users_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .notNullable()
      .index();
    table.integer('items_id')
      .references('id')
      .inTable('items')
      .onDelete('CASCADE')
      .notNullable()
      .index();
    table.string('item_clothing_size')
      .defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('items_orders');
};
