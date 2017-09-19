const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname,
    devtool: 'cheap-module-eval-source-map',
    entry: {
        browse: './src/components/index.tsx',
        item: './src/entries/item.js'
    },
    output: {
        path: path.join(__dirname, '..'),
        publicPath: '/bundle/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.tsx']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
          options: {
            context: __dirname,
            postcss: [
              autoprefixer
            ]
          }
        })
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js?$/,
          loader: 'babel-loader',
          query: { presets: ['es2015'] }
        },
        {
          test: /\.(js|jsx)$/,
          loaders: [{ loader: 'babel-loader' }]
        },
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
        {
          test: /\.scss$/,
          loaders: [
            { loader: "style-loader" },
            { loader: "css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]" },
            { loader: "sass-loader" },
            { loader: "postcss-loader" }
          ]
        }
      ],
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "cheerio": 'window',
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true
    },
    stats: { colors: true }
};
