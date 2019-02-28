import demoApi from '../api/demo';

// 首页
let home = async function (ctx, next) {
    let result = await demoApi.fetchHome();
    await ctx.render('index.html', {
        seo: result.seo,
        data: {
            home: result.data
        }
    });

    await next();
};

// 栏目
let column = async  function (ctx, next) {
    let result = await demoApi.fetchColumn();
    await ctx.render('index.html', {
        seo: result.seo,
        data: {
            column: result.data
        }
    });

    await next();
};

// 详细
let detail = async  function (ctx, next) {
    const { id } = ctx.params;
    let result = await demoApi.fetchOneMovie(id);
    await ctx.render('index.html', {
        ...result
    });

    await next();
};

module.exports = {
    home,
    column,
    detail
};
