import Router from 'koa-router';
import demo from './demo';
import demoApi from './api/demo';

let router = Router();
router.use(demo.routes(), demo.allowedMethods());
router.use(demoApi.routes(), demoApi.allowedMethods());
export default router;
