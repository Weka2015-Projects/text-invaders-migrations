'use strict'
exports.up = function (knex, Promise) {
  return knex.schema.createTable('players', function (table) {
    table.increments()
    table.string('name')
    table.integer('high_score')
    table.timestamps()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('players')
}
