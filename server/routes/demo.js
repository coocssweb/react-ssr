import Router from 'koa-router';
import demoControl from '../controllers/demo';

let router = new Router({
    prefix: '/'
});

router.get('/', demoControl.home);
router.get('demo', demoControl.demo);

export default router;
