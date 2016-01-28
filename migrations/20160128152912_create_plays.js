'use strict'
exports.up = function (knex, Promise) {
  return knex.schema.createTable('plays', function (table) {
    table.increments()
    table.string('name')
    table.integer('player_id')
    table.integer('game_id')
    table.integer('score')
    table.timestamps()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('plays')
}
