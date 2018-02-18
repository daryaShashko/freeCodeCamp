const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  entry: {
    bundle: ['react-hot-loader/patch', "./src/index.js"],
    styles: "./src/styles/includes.scss"
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app/[name].js"
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  devtool: 'inline-source-map',

  module: {

    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.jpg$|\.gif$|\.png$|\.svg$/,
        use: [
          {
            loader: 'url-loader?name=images/[name].[ext]&limit=4069'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('postcss-import')(),
                  require('postcss-cssnext')(),
                  require('postcss-nested'),
                  require('postcss-initial')({
                    reset: 'inherited' // reset only inherited rules
                  }),
                  require('postcss-mixins'),
                  require('postcss-simple-vars')({
                    unknown: function unknown(node, name, result) {
                      node.warn(result, 'Unknown variable ' + name)
                    }
                  }),
                  require('postcss-math'),
                  require('postcss-color-function'),
                  require('postcss-css-reset')({ })
                ]
              }
            },
            "sass-loader"
          ]
        })
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: __dirname + "/src/index.html",
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.ProvidePlugin({ $: "jquery" })
  ],

  devServer: {
    contentBase: "./build",
    port: 7700
  }
};
