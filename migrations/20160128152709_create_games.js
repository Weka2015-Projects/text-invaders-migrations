'use strict'
exports.up = function (knex, Promise) {
  return knex.schema.createTable('games', function (table) {
    table.increments()
    table.text('content').notNullable()
    table.timestamps()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('games')
}
