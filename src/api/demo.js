/**
 * Created by coocss on 2019/2/26.
 */
import Base from './base';
class Demo extends Base {
    fetchOne () {
        return this.request({ path: '' });
    }
}

export default new Demo();
