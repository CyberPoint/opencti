/* eslint-disable no-console */
export default function performanceMiddleware(opts) {
  const logger = opts && opts.logger || console.log.bind(console, '[RELAY-NETWORK]');
  return next => req => {
    const start = new Date().getTime();
    return next(req).then(res => {
      const end = new Date().getTime();
      logger(`[${end - start}ms] ${req.getID()}`, req, res);
      return res;
    });
  };
}