/**
 * 开发环境webpack配置文件
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const config = require('./config');
const {resolve} = require('./utils');
const mode = config.local;

module.exports = merge(baseConfig(mode.env), {
    devtool: mode.devtool,
    mode: mode.env,
    devServer: {
        contentBase: resolve('dist'),
        hot: true,
        port: mode.port
    }
});
