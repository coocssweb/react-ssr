import demoApi from '../api/demo';

// 首页
let home = async function (ctx, next) {
    let result = await demoApi.fetchHome();
    await ctx.render('index.html', {
        ...result
    });

    await next();
};

let demo = async function (ctx, next) {
    let result = await demoApi.fetchDemo();
    await ctx.render('index.html', {
        ...result
    });

    await next();
};

module.exports = {
    home,
    demo
};
