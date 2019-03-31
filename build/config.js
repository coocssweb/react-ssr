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
        noHash: false,
    },
    // 测试环境
    test: {
        env: 'test',                            // 环境
        api: '',                                // api 接口地址
        publicPath: '',                         // 静态资源地址
        imagePath: '',                          // 图片资源地址
        devtool: 'false',                       // devtool
        noHash: false,
    },
    // 开发环境构建，用于做ssr
    local: {
        env: 'local',                           // 环境
        api: 'https://www.shuxia123.com/',          // api 接口地址
        publicPath: '/dev/',   // 静态资源地址
        imagePath: '',                          // 图片资源地址
        devtool: 'false',                       // devtool,
        noHash: true,
    },
    // 开发环境
    development: {
        env: 'development',                     // 环境
        api: 'https://www.shuxia123.com/',          // api 接口地址
        publicPath: '/dev/',                         // 静态资源地址
        imagePath: '',                          // 图片资源地址
        port: '8088',                           // 开发端口
        devtool: 'source-map',                  // devtool
        noHash: true,
    }
};
