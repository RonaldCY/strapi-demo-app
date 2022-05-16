module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'WYXX1J+63wn+P5UzkZT+rA=='),
  },
  apiToken: {
    secret: env('API_TOKEN_SALT', '3pkkB1LOlAuqW8oc9eSkpw=='),
  },
});
