/**
 * 配置文件
 * 生产环境 production
 * 测试环境 test
 * 开发环境 development
 */

module.exports = {
    // 生产环境
    production: {
        env: 'production',                      // 环境
        api: '',                                // api 接口地址
        publicPath: '',                         // 静态资源地址
        imagePath: '',                          // 图片资源地址
        devtool: 'false',                       // devtool
    },
    // 测试环境
    test: {
        env: 'test',                            // 环境
        api: '',                                // api 接口地址
        publicPath: '',                         // 静态资源地址
        imagePath: '',                          // 图片资源地址
        devtool: 'false',                       // devtool
    },
    // 开发环境
    development: {
        env: 'development',                     // 环境
        api: '',                                // api 接口地址
        publicPath: '',                         // 静态资源地址
        imagePath: '',                          // 图片资源地址
        port: '8088',                           // 开发端口
        devtool: 'source-map',                  // devtool
    }
};
