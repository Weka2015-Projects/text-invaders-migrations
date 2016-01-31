'use strict'
exports.up = function (knex, Promise) {
  return knex.schema.createTable('plays', function (table) {
    table.increments()
    table.string('name').notNullable()
    table.integer('player_id').notNullable()
    table.integer('game_id').notNullable()
    table.integer('score').notNullable()
    table.timestamps()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('plays')
}
