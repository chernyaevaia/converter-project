const { override, addBabelPlugin } = require('customize-cra');
const { pluginsBabel } = require('./pluginsBabel');

module.exports = {
  webpack: override(...pluginsBabel.map(addBabelPlugin)),
};
