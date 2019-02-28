import Config from '../config';
export default () => {
    return async (ctx, next) => {
        try {
            await next();
            if (ctx.status === 404) {
                ctx.throw(404);
            }
        } catch (err) {
            const status = err.status || 500;
            ctx.status = status;
            if (status === 404) {
                // ctx.response.redirect(`${ctx.request.protocol}://${Config.host}/h5/404.html`);
            } else if (status === 500) {
                // ctx.response.redirect(`${ctx.request.protocol}://${Config.host}/h5/500.html`);
            }
        }
    };
};