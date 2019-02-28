import Koa from 'koa';
import Cors from 'koa-cors';
import BodyParser from 'koa-bodyparser';
import Convert from 'koa-convert';
import routes from './routes';
import Config from './config';
import templating from './templating';
import timeLogger from './middlewares/timeLogger';
import catchError from './middlewares/catchError';

const app = new Koa();

// 中间件处理
app.use(Convert(Cors()));
app.use(BodyParser());
app.use(catchError());
app.use(timeLogger());
app.use(templating('dist/views', {
    noCache: Config.noCache,
    watch: Config.watch
}));
app.use(routes.routes(), routes.allowedMethods());

app.listen(4322);
