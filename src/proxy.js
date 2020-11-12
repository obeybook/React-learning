const proxy = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        proxy('/red', {
            target: 'http://175.211.13.196:3001'
        })
    )
}