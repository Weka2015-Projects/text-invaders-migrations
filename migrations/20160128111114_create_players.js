'use strict'
exports.up = function (knex, Promise) {
  return knex.schema.createTable('players', function (table) {
    table.increments()
    table.string('name').notNullable()
    table.integer('high_score').notNullable()
    table.timestamps()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('players')
}
