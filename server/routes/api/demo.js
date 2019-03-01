import Router from 'koa-router';
import ApiControl from '../../controllers/api/demo';

let router = new Router({
    prefix: '/api'
});
router.get('/home', ApiControl.fetchHome);
router.get('/column', ApiControl.fetchColumn);
router.get('/movie/:id', ApiControl.fetchOneMovie);

export default router;