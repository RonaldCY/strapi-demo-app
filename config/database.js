const path = require('path');

function getDevConnections(env) {
  return {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  }
}

function getProductionConnections(env) {
  return {
    client: 'postgres',
    connection: {
      host: `/cloudsql/${env("INSTANCE_CONNECTION_NAME")}`,
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
    },
    pool: {
      min: 0,
      max: 15,
      idleTimeoutMillis: 30000,
      createTimeoutMillis: 30000,
      acquireTimeoutMillis: 30000,
    },
  }
}

module.exports = ({ env }) => ({
  connection: env('NODE_ENV') === 'development' ? getDevConnections(env) : getProductionConnections(env)
});
