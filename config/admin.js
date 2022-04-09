module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a45f5a132220b1c87e0112a3e54a0eec'),
  },
});
