const proxy = require('http-proxy-middleware');

module.exports = function(app)
{
    app.use(proxy('/api/customers', {target: 'https://localhost:5000'}));
};

/*
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app)
{
    app.use('/api/customers',
    createProxyMiddleware({
        target: 'https://localhost:5000',
        changeOrigin: true
    })
    );
};
*/