var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('Private route hit!');
        next();
    },
    logger: function (req, res, next) {
        // new Date().toString()
        console.log('Request: ' + 'at Date: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

module.exports = middleware;