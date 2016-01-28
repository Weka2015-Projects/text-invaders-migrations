var playerIds, gameIds, playsData

exports.seed = function(knex, Promise) {
  return Promise.join(
   knex('games').del(),
   knex('players').del(), 
   knex('plays').del(),
   knex('games').insert([
   {
    content: 'the square is a bottle, otherwise it is a circle',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    content: 'if (x == 0) return false',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    content: 'this aint a scene, its an arms race',
    created_at: new Date(),
    updated_at: new Date()
  }], 'id'))
  .then(function(data) {
    console.log(data)
    gameIds = data[data.length-1]
    return knex('players').insert([
    {
      name: "katie",
      high_score: 0,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: "jason",
      high_score: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: "charles",
      high_score: 10,
      created_at: new Date(),
      updated_at: new Date()
    }
    ], ['id', 'name'])
  }) 
   .then(function(data) {
    console.log(data)
    playerIds = data
    playsData = [ {
      score: 0,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      score: 0,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      score: 0,
      created_at: new Date(),
      updated_at: new Date()
    }]
    playsData.map(function (data, index) {
      data.player_id = playerIds[index].id
      data.game_id = gameIds[index].id
      data.name = playerIds[index].name
    })
    return knex('plays').insert(playsData)
  })
 }

