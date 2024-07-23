// loggerMiddleware.js
const logger = require('../utils/eventLogger');

const loggerMiddleware = (req, res, next) => {
  const { method, url } = req;
  const start = new Date();
  
  res.on('finish', () => {
    const duration = new Date() - start;
    const { statusCode } = res;
    logger.info(`${method} ${url} ${statusCode} - ${duration}ms`);
  });

  next();
};

module.exports = loggerMiddleware;
