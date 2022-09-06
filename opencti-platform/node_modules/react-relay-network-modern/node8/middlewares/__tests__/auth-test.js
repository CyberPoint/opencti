"use strict";

var _fetchMock = _interopRequireDefault(require("fetch-mock"));

var _2 = require("../..");

var _mockReq = require("../../__mocks__/mockReq");

var _auth = _interopRequireDefault(require("../auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('middlewares/auth', () => {
  beforeEach(() => {
    _fetchMock.default.restore();
  });
  it('`token` option as string (with default `prefix` and `header`)', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD'
        }
      },
      method: 'POST'
    });

    const rnl = new _2.RelayNetworkLayer([(0, _auth.default)({
      token: '123',
      tokenRefreshPromise: () => '345'
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toEqual('PAYLOAD');

    const reqs = _fetchMock.default.calls('/graphql');

    expect(reqs).toHaveLength(1);
    expect(reqs[0][1].headers.Authorization).toBe('Bearer 123');
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('`token` option as thunk (with custom `prefix` and `header`)', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD'
        }
      },
      method: 'POST'
    });

    const rnl = new _2.RelayNetworkLayer([(0, _auth.default)({
      token: () => Promise.resolve('333'),
      tokenRefreshPromise: () => '345',
      prefix: 'MyBearer ',
      header: 'MyAuthorization'
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toEqual('PAYLOAD');

    const reqs = _fetchMock.default.calls('/graphql');

    expect(reqs).toHaveLength(1);
    expect(reqs[0][1].headers.MyAuthorization).toBe('MyBearer 333');
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('`tokenRefreshPromise` should be called on 401 response', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql',
      response: (_, opts) => {
        if (opts.headers.Authorization === 'Bearer ValidToken') {
          return {
            status: 200,
            body: {
              data: 'PAYLOAD'
            }
          };
        }

        return {
          status: 401,
          body: ''
        };
      },
      method: 'POST'
    });

    const rnl = new _2.RelayNetworkLayer([(0, _auth.default)({
      token: '123',
      tokenRefreshPromise: () => Promise.resolve('ValidToken')
    })]);
    const req = (0, _mockReq.mockReq)(1);
    await req.execute(rnl);

    const reqs = _fetchMock.default.calls('/graphql');

    expect(reqs).toHaveLength(2);
    expect(reqs[0][1].headers.Authorization).toBe('Bearer 123');
    expect(reqs[1][1].headers.Authorization).toBe('Bearer ValidToken');
    expect(_fetchMock.default.calls('/graphql')).toMatchSnapshot();
  });
  it('`tokenRefreshPromise` reset refresh token state', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql',
      response: (_, opts) => {
        if (opts.headers.Authorization === 'Bearer ValidToken') {
          return {
            status: 200,
            body: {
              data: 'PAYLOAD'
            }
          };
        }

        return {
          status: 401,
          body: ''
        };
      },
      method: 'POST'
    });

    let refershTokenSwitch = false;
    const rnl = new _2.RelayNetworkLayer([(0, _auth.default)({
      token: '',
      tokenRefreshPromise: () => {
        if (!refershTokenSwitch) {
          return Promise.reject(new Error('refresh token failed'));
        }

        return Promise.resolve('ValidToken');
      }
    })]);
    const req = (0, _mockReq.mockReq)(1);

    try {
      await req.execute(rnl);
    } catch (error) {
      expect(error.message).toBe('refresh token failed');
    }

    refershTokenSwitch = true;
    await req.execute(rnl);

    const reqs = _fetchMock.default.calls('/graphql');

    expect(reqs).toHaveLength(1);
  });
});