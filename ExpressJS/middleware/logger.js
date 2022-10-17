const moment = require('moment');


const logger = (req, res, next) => {
    console.log(
        `${req.protocol}://${req.get('host')}${
            req.originalUrl
        }: ${moment().format()}`
    );// This is a middleware function that logs the request protocol, host, and original url
    next();
};

module.exports = logger;