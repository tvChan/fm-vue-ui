const path = require('path');
const webpack = require('webpack');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const os = require('os');

const config = require('./config');

module.exports = {
    entry: path.join(__dirname, '../src/index'),
    output: {
        path: path.join(__dirname, '../lib'),
        filename: 'fm-vue-ui.common.js',
        library: 'FMUI',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    externals: config.externals,
    resolve: {
        alias: config.alias
    },
    plugins: [
        // new ParallelUglifyPlugin({
        //     workerCount: os.cpus().length,
        //     cacheDir: '.cache/',
        //     uglifyJS: {
        //         compress: {
        //             warnings: false,
        //             /* eslint-disable */
        //             drop_debugger: true,
        //             drop_console: true
        //         },
        //         comments: false,
        //         sourceMap: true,
        //         mangle: true
        //     }
        // }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
