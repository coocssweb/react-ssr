import demoApi from '../../api/demo.js';

// 创建订单
let fetchOne = async (ctx, next) => {
    let result = await demoApi.fetchOne();
    ctx.body = JSON.stringify(result);
    await next();
};

export default {
    fetchOne
};
