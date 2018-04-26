/* eslint-disable */

const webpack = require('webpack');
const path = require('path');
const rupture = require('rupture');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    config.plugin('stylus-settings').use(webpack.LoaderOptionsPlugin, [
      {
        options: {
          stylus: {
            use: [rupture()],
            import: [resolve('src/style/variables.styl')],
          },
        },
      },
    ]);
  },
};
