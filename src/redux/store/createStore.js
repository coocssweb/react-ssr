if (process.env.NODE_ENV === 'development') {
    module.exports = require('./createStore.dev');
} else {
    module.exports = require('./createStore.prod');
}
