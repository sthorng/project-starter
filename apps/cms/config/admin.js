module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b2355525537ded0166a80658a0d7a699'),
  },
});
