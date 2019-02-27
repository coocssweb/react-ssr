import Router from 'koa-router';
import ApiControl from '../../controllers/api/demo';

let router = new Router({
    prefix: '/api/demo'
});

router.get('/list', ApiControl.fetchOne);

export default router;