/**
 * 测试环境webpack配置文件
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const config = require('./config');
const mode = config.test;

module.exports = merge(baseConfig(mode.env), {
    devtool: mode.devtool,
    mode: mode.env
});
