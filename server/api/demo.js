import Base from './base';
class Demo extends Base {
    fetchHome () {
        return new Promise((resolve, reject) => {
            resolve({
                title: 'Home Title',
                keywords: 'Home Keywords',
                description: 'Home Description'
            });
        });
    }
    fetchDemo () {
        return new Promise((resolve, reject) => {
            resolve({
                title: 'Demo Title',
                keywords: 'Demo Keywords',
                description: 'Demo Description'
            });
        });
    }
}

export default new Demo();
