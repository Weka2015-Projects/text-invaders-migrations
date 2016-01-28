# text-invaders-migrations

Database works 

 Schema |      Name       | Type  | Owner
--------+-----------------+-------+-------
 public | games           | table | nkula
 public | knex_migrations | table | nkula
 public | players         | table | nkula
 public | plays           | table | nkula
 
 text_invaders_dev=# SELECT * FROM players
 
 id |  name   | high_score |         created_at         |         updated_at
----+---------+------------+----------------------------+----------------------------
  7 | katie   |          0 | 2016-01-28 04:35:28.869+00 | 2016-01-28 04:35:28.869+00
  8 | jason   |          5 | 2016-01-28 04:35:28.869+00 | 2016-01-28 04:35:28.869+00
  9 | charles |         10 | 2016-01-28 04:35:28.869+00 | 2016-01-28 04:35:28.869+00
  
text_invaders_dev=# select * FROM games

 id |                     content                      |         created_at         |         updated_at
----+--------------------------------------------------+----------------------------+----------------------------
  7 | the square is a bottle, otherwise it is a circle | 2016-01-28 04:35:28.801+00 | 2016-01-28 04:35:28.801+00
  8 | if (x == 0) return false                         | 2016-01-28 04:35:28.801+00 | 2016-01-28 04:35:28.801+00
  9 | this aint a scene, its an arms race              | 2016-01-28 04:35:28.801+00 | 2016-01-28 04:35:28.801+00
  
text_invaders_dev=# SELECT * FROM plays;

|                                                                                              | 
|----------------------------------------------------------------------------------------------| 
| id | player_id | game_id | score |         created_at         |         updated_at           | 
| ----+-----------+---------+-------+----------------------------+---------------------------- | 
|   1 |         7 |       7 |     0 | 2016-01-28 04:35:28.885+00 | 2016-01-28 04:35:28.885+00  | 
|   2 |         8 |       8 |     0 | 2016-01-28 04:35:28.885+00 | 2016-01-28 04:35:28.885+00  | 
|   3 |         9 |       9 |     0 | 2016-01-28 04:35:28.885+00 | 2016-01-28 04:35:28.885+00  | 

