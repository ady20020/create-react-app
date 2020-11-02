const proxy = require('http-proxy-middleware');

const BACKEND = 'https://www.4humanity.ae/api/';

module.exports = function (app) {
  app.use('/register', proxy({
    target: BACKEND,
    changeOrigin: true,
    secure: false,
    ws: true,
  }));
};