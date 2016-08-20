'use strict';
exports.up = function(knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments();
    table.string('item_name').notNullable().defaultTo('').unique();
    table.string('display_name').notNullable().defaultTo('').unique();
    table.text('description').notNullable().defaultTo('');
    table.string('category').notNullable().defaultTo('');
    table.string('img_url').notNullable().defaultTo();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('items');
};
