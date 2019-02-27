if (process.env.NODE_ENV === 'development') {
    module.exports = require('./route.dev');
} else {
    module.exports = require('./route.prod');
}
