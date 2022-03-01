module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d1b968d834a42512d538df44ca9f9d9'),
  },
});
