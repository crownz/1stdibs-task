const path = require('path');
const webpack = require('webpack');

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
        root: path.resolve(__dirname + '/../src'),
        extensions: ['', '.js', '.jsx', '.css', '.tsx']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.s?css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'sass-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    },
    stats: { colors: true }
};
