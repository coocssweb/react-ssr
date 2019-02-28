import demoApi from '../../api/demo.js';

// 获取主页相关
let fetchHome = async (ctx, next) => {
    let { id } = ctx.params;
    let result = await demoApi.fetchColumn();
    ctx.body = JSON.stringify(result);
    await next();
};

// 获取栏目信息
let fetchColumn = async (ctx, next) => {
    let { id } = ctx.params;
    let result = await demoApi.fetchColumn();
    ctx.body = JSON.stringify(result);
    await next();
};

// 获取一部电影
let fetchOneMovie = async (ctx, next) => {
    let { id } = ctx.params;
    let result = await demoApi.fetchOneMovie(id);
    ctx.body = JSON.stringify(result);
    await next();
};

export default {
    fetchHome,
    fetchColumn,
    fetchOneMovie
};
