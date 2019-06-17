const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const postcssPresetEnv = require('postcss-preset-env');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const env = require('./utils/env');

const NAME = 'Freezeframe';
const OUTPUT_FILENAME = NAME.toLowerCase();
const BUNDLE_SUFFIX = '.min.js';

const ENV = env.NODE_ENV;

const PUBLIC_PATH = 'examples';
const OUTPUT_PATH = ENV === 'production'
  ? 'dist'
  : 'build';

const DEVTOOL = ENV === 'production'
  ? false
  : 'cheap-module-eval-source-map';

const mode = ENV === 'test'
  ? 'development'
  : ENV;

const templates = fs.readdirSync('./examples')
  .filter((filename) => /\.ejs$/gi.test(filename));

const options = {
  mode,
  devtool: DEVTOOL,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, OUTPUT_PATH),
    publicPath: path.join(__dirname, PUBLIC_PATH),
    filename: `${OUTPUT_FILENAME}${BUNDLE_SUFFIX}`,
    library: NAME,
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  stage: 3,
                  browsers: [
                    'cover 99.5%',
                    '> 5%'
                  ]
                })
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    // clean the build folder
    new CleanWebpackPlugin(),
    // expose and write the allowed env consts on the compiled bundle
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    ...templates.map((template) => {
      const name = template.split('.ejs')[0];
      return new HtmlWebpackPlugin({
        template: path.join(__dirname, 'examples', template),
        filename: `${name}.html`,
        chunks: ['freezeframe'],
        inject: false,
        templateParameters() {
          return {
            scriptSrc: `./${OUTPUT_FILENAME}${BUNDLE_SUFFIX}`
          };
        }
      });
    }),
    new WriteFilePlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
};

module.exports = options;
