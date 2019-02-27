import log4js from 'log4js';
const loggerTime = log4js.getLogger('timeFile');
export default () => {
    return async (ctx, next) => {
        let url = ctx.request.url;
        if (url.indexOf('/api/') !== -1) {
            await next();
        } else {
            let timestamp1 = (new Date()).valueOf();
            let index_sq = `request: ${timestamp1}`;
            loggerTime.trace(`${index_sq} start ${url}`);
            await next();
            loggerTime.trace(`${index_sq}，${(new Date()).valueOf() - timestamp1}ms，${url}`);
        }
    };
};
