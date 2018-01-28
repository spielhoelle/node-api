
import $ from "jquery";
import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';

const client = {
  entry: {
    js: './server.js',
  },
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'server'),
        use: { loader: 'babel-loader' }
      }
    ]
  },
  resolve: {
    extensions: [
      '.jsx',
      '.js'
    ],
    modules: [
      "node_modules"
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};

const server = {
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [ nodeExternals({ modulesFromFile: true }) ],
  entry: ["babel-polyfill", "./server/bin/www.js"],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'dist-es5.js'
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'dist'),
        use: { loader: 'babel-loader' }
      }
    ]
  }
};

export default [client, server];
