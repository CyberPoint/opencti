"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = performanceMiddleware;

/* eslint-disable no-console */
function performanceMiddleware(opts) {
  var logger = opts && opts.logger || console.log.bind(console, '[RELAY-NETWORK]');
  return function (next) {
    return function (req) {
      var start = new Date().getTime();
      return next(req).then(function (res) {
        var end = new Date().getTime();
        logger("[".concat(end - start, "ms] ").concat(req.getID()), req, res);
        return res;
      });
    };
  };
}