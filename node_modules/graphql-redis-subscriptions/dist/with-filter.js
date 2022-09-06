"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withFilter = void 0;
var iterall_1 = require("iterall");
var withFilter = function (asyncIteratorFn, filterFn) {
    return function (rootValue, args, context, info) {
        var _a;
        var asyncIterator = asyncIteratorFn();
        var getNextPromise = function () {
            return asyncIterator
                .next()
                .then(function (payload) { return Promise.all([
                payload,
                Promise.resolve(filterFn(payload.value, args, context, info)).catch(function () { return false; }),
            ]); })
                .then(function (_a) {
                var payload = _a[0], filterResult = _a[1];
                if (filterResult === true) {
                    return payload;
                }
                return getNextPromise();
            });
        };
        return _a = {
                next: function () {
                    return getNextPromise();
                },
                return: function () {
                    return asyncIterator.return();
                },
                throw: function (error) {
                    return asyncIterator.throw(error);
                }
            },
            _a[iterall_1.$$asyncIterator] = function () {
                return this;
            },
            _a;
    };
};
exports.withFilter = withFilter;
//# sourceMappingURL=with-filter.js.map