'use strict'

const Config = require('config')

const dbConfiguration = {
  client: 'pg',
  useNullAsDefault: true,
  connection: Config.get('db.connString'),
  pool: {
    min: 2,
    max: 5,
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations',
  },
}

module.exports = {
  development: dbConfiguration,
  test: dbConfiguration,
  staging: dbConfiguration,
  production: dbConfiguration,
}
