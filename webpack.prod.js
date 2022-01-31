const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: './src/prod',
    mode: 'production',
    output: {
        publicPath: "fusely-ui-kit",
      },
});