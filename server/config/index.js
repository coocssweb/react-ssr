export default {
    // 正式环境
    production: {
        api: 'http://mallapi.m.com/',
        host: 'mall.meitu.com',
        watch: false,
        noCache: false
    },
    // 测试环境
    test: {
        api: 'http://testmallapi.meitu.com/',
        host: 'testmall.meitu.com',
        watch: true,
        noCache: true
    },
    // 开发环境
    development: {
        api: 'http://testmallapi.meitu.com/',
        host: 'localmall.meitu.com',
        watch: true,
        noCache: true
    }
}[process.env.NODE_ENV];
