const path = require('path');


module.exports = {
    entry: {
        activate: './src/activate.js',
        background: './src/background.js',
    },
    mode: 'development',
    output: {
        path: null, // set by gulp
        filename: '[name].js',
    },
    devtool: 'cheap-module-source-map',
};
