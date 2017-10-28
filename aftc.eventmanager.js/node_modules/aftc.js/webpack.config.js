var path = require('path');

module.exports = {
  entry: './aftc.js',
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  },
  output: {
    filename: 'aftc.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  //devtool: 'source-map'
};