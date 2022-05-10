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
      host: `/cloudsql/strapi-example-349303:asia-east2:strapidemo`,
      database: 'strapidemo-production',
      user: 'postgres',
      password: 'postgres',
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
  connection: getProductionConnections(env)
});
