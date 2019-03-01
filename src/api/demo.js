/**
 * Created by coocss on 2019/2/26.
 */
import Base from './base';

class Demo extends Base {
    fetchHome () {
        return this.request({ path: 'api/home' });
    }
    fetchDetail (id) {
        return this.request({ path: `api/movie/${id}` });
    }
}

export default new Demo();
