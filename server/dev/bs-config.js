module.exports = {
  port: 3000,
  injectChanges: true,
  files: ['../../client/public/build/*.{css,js}'],
  server: {baseDir: '../../client/public'}
};