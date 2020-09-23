const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // webpack will take the files from ./src/index
  entry: './src/index.tsx',
  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
    {
        test: /\.(js|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-typescript'
            ],
            plugins: [
                'styled-components',
                '@babel/proposal-class-properties',
                '@babel/proposal-object-rest-spread'
            ]
            }
        }
    },
    // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico|pdf|ttf|otf)$/,
      exclude: /node_modules/,
      use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
    }
  ]
},
devServer: {
  historyApiFallback: true,
},
plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.png'
  })
 ]
};