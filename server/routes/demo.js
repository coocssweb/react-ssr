import Router from 'koa-router';
import demoControl from '../controllers/demo';

let router = new Router({
    prefix: '/'
});

router.get('/', demoControl.home);
router.get('column', demoControl.column);
router.get('detail/:id', demoControl.detail);

export default router;
