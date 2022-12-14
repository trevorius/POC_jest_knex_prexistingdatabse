require('dotenv').config()
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_NAME
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './config/db/migrations'
    }
  },
  test: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
      database: `testingenv_database`
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './config/db/migrations'
    }
  },



};
