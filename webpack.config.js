const webpack = require('webpack');

const config = {
    // mode: 'development',
    // mode: 'production',
    mode: 'none',
    entry: {
        main: './project/src/assets/scripts/main.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    output: {
        filename: '[name].bundle.js'
    }
};

module.exports = config;