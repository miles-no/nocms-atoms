const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');

const host = '0.0.0.0';
const port = '9000';

const config = {
  entry: './example/src',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/example/build'),
    filename: 'app.js',
    publicPath: path.join(__dirname, '/example'),
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      'nocms-atoms': '../../src',
    },
  },
};

/* eslint no-console: off */
new WebpackDevServer(webpack(config), {
  contentBase: path.resolve(__dirname, './example'),
  hot: true,
}).listen(port, host, (err) => {
  if (err) {
    console.log(err);
  }
});
console.log('-------------------------');
console.log(`Local web server runs at http://${host}:${port}`);
console.log('-------------------------');

module.exports = config;
