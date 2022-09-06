"use strict";

var _fetchMock = _interopRequireDefault(require("fetch-mock"));

var _RelayNetworkLayer = _interopRequireDefault(require("../RelayNetworkLayer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fetchMock.default.mock({
  matcher: '*',
  response: {
    data: {}
  }
});

const mockOperation = {
  kind: 'Batch',
  fragment: {}
};
describe('RelayNetworkLayer', () => {
  it('should call middlewares', async () => {
    const mw1 = jest.fn(next => next);
    const mw2 = jest.fn(next => next);
    const network = new _RelayNetworkLayer.default([null, mw1, undefined, mw2]);
    await network.execute(mockOperation, {}, {}).toPromise();
    expect(mw1).toHaveBeenCalled();
    expect(mw2).toHaveBeenCalled();
  });
  describe('sync middleware', () => {
    it('should return payload from sync middleware, without calling async middlewares', async () => {
      const asyncMW = jest.fn(next => next);
      const syncMW = {
        execute: () => ({
          data: {}
        })
      };
      const network = new _RelayNetworkLayer.default([syncMW, asyncMW]);
      await network.execute(mockOperation, {}, {}).toPromise();
      expect(asyncMW).not.toHaveBeenCalled();
    });
    it('should call async middlewares, if sync middleware returns undefined', async () => {
      const asyncMW = jest.fn(next => next);
      const syncMW = {
        execute: () => undefined
      };
      const network = new _RelayNetworkLayer.default([syncMW, asyncMW]);
      await network.execute(mockOperation, {}, {}).toPromise();
      expect(asyncMW).toHaveBeenCalled();
    });
  });
  describe('beforeFetch option', () => {
    it('should return payload from beforeFetch, without calling async middlewares', async () => {
      const asyncMW = jest.fn(next => next);
      const network = new _RelayNetworkLayer.default([asyncMW], {
        beforeFetch: () => ({
          data: {}
        })
      });
      await network.execute(mockOperation, {}, {}).toPromise();
      expect(asyncMW).not.toHaveBeenCalled();
    });
    it('should call async middlewares, if beforeFetch returns undefined', async () => {
      const asyncMW = jest.fn(next => next);
      const network = new _RelayNetworkLayer.default([asyncMW], {
        beforeFetch: () => undefined
      });
      await network.execute(mockOperation, {}, {}).toPromise();
      expect(asyncMW).toHaveBeenCalled();
    });
  });
  it('should correctly call raw middlewares', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql',
      response: {
        status: 200,
        body: {
          data: {
            text: 'response'
          }
        },
        sendAsJson: true
      },
      method: 'POST'
    });

    const regularMiddleware = next => async req => {
      req.fetchOpts.headers.reqId += ':regular';
      const res = await next(req);
      res.data.text += ':regular';
      return res;
    };

    const createRawMiddleware = id => {
      const rawMiddleware = next => async req => {
        req.fetchOpts.headers.reqId += `:raw${id}`;
        const res = await next(req);
        const parentJsonFN = res.json;

        res.json = async () => {
          const json = await parentJsonFN.bind(res)();
          json.data.text += `:raw${id}`;
          return json;
        };

        return res;
      };

      rawMiddleware.isRawMiddleware = true;
      return rawMiddleware;
    }; // rawMiddlewares should be called the last


    const network = new _RelayNetworkLayer.default([createRawMiddleware(1), createRawMiddleware(2), regularMiddleware]);
    const observable = network.execute(mockOperation, {}, {});
    const result = await observable.toPromise();
    expect(_fetchMock.default.lastOptions().headers.reqId).toEqual('undefined:regular:raw1:raw2');
    expect(result.data).toEqual({
      text: 'undefined:raw2:raw1:regular'
    });
  });
});