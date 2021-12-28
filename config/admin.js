module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cde5e5a49f974854b81c1b19b682ec33'),
  },
});
