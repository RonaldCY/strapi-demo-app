module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f641ea8a302fe4af371d42e956b91d6a'),
  },
});
