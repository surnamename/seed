/**
 * browser sync (lite-server) config file
 * */

module.exports = {
  port: 3000,
  injectChanges: true,
  files: ['../../client/build/*.{css,js}'],
  server: {baseDir: '../../client'}
};