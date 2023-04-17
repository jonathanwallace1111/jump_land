var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

resolvePaths = [
    fs.realpathSync(__dirname + '/src'),
];

module.exports = {
    entry: '/src/index.js',
    resolve: {
        symlinks: false,
        extensions: [".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        publicPath: '/wwwroot/',
        filename: "jumpland.min.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: resolvePaths,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                include: resolvePaths,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                include: resolvePaths,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.module\.scss$/,
                include: resolvePaths,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            exportLocalsConvention: 'camelCaseOnly'
                        },
                        sourceMap: true,
                    }
                }, 'sass-loader'],
            },
            {
                test: /\.html$/,
                include: resolvePaths,
                use: ['html-loader']
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react'
        })
    ]
};
