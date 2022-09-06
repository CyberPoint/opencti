"use strict";

var _fetchMock = _interopRequireDefault(require("fetch-mock"));

var _RelayNetworkLayer = _interopRequireDefault(require("../../RelayNetworkLayer"));

var _mockReq = require("../../__mocks__/mockReq");

var _url = _interopRequireDefault(require("../url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('middlewares/url', () => {
  beforeEach(() => {
    _fetchMock.default.restore();
  });
  it('`url` option as string', async () => {
    _fetchMock.default.mock({
      matcher: '/some_url',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD'
        }
      },
      method: 'POST'
    });

    const rnl = new _RelayNetworkLayer.default([(0, _url.default)({
      url: '/some_url'
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toBe('PAYLOAD');
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('`url` option as thunk', async () => {
    _fetchMock.default.mock({
      matcher: '/thunk_url',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD2'
        }
      },
      method: 'POST'
    });

    const rnl = new _RelayNetworkLayer.default([(0, _url.default)({
      url: () => '/thunk_url'
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toBe('PAYLOAD2');
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('`url` option as thunk with Promise', async () => {
    _fetchMock.default.mock({
      matcher: '/thunk_url_promise',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD promise'
        }
      },
      method: 'POST'
    });

    const rnl = new _RelayNetworkLayer.default([(0, _url.default)({
      url: () => Promise.resolve('/thunk_url_promise')
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toBe('PAYLOAD promise');
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('`method` option', async () => {
    _fetchMock.default.mock({
      matcher: '/get_url',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD3'
        }
      },
      method: 'GET'
    });

    const rnl = new _RelayNetworkLayer.default([(0, _url.default)({
      url: '/get_url',
      method: 'GET'
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toBe('PAYLOAD3');
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('`headers` option as Object', async () => {
    _fetchMock.default.mock({
      matcher: '/headers_url',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD4'
        }
      },
      method: 'POST'
    });

    const rnl = new _RelayNetworkLayer.default([(0, _url.default)({
      url: '/headers_url',
      headers: {
        'custom-header': '123'
      }
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toBe('PAYLOAD4');
    expect(_fetchMock.default.lastOptions().headers).toEqual(expect.objectContaining({
      'custom-header': '123'
    }));
  });
  it('`headers` option as thunk', async () => {
    _fetchMock.default.mock({
      matcher: '/headers_thunk',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD5'
        }
      },
      method: 'POST'
    });

    const rnl = new _RelayNetworkLayer.default([(0, _url.default)({
      url: '/headers_thunk',
      headers: () => ({
        'thunk-header': '333'
      })
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toBe('PAYLOAD5');
    expect(_fetchMock.default.lastOptions().headers).toEqual(expect.objectContaining({
      'thunk-header': '333'
    }));
  });
  it('`headers` option as thunk with Promise', async () => {
    _fetchMock.default.mock({
      matcher: '/headers_thunk_promise',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD5'
        }
      },
      method: 'POST'
    });

    const rnl = new _RelayNetworkLayer.default([(0, _url.default)({
      url: '/headers_thunk_promise',
      headers: () => Promise.resolve({
        'thunk-header': 'as promise'
      })
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toBe('PAYLOAD5');
    expect(_fetchMock.default.lastOptions().headers).toEqual(expect.objectContaining({
      'thunk-header': 'as promise'
    }));
  });
  it('`credentials` option', async () => {
    _fetchMock.default.mock({
      matcher: '/credentials_url',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD6'
        }
      },
      method: 'POST'
    });

    const rnl = new _RelayNetworkLayer.default([(0, _url.default)({
      url: '/credentials_url',
      credentials: 'same-origin'
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toBe('PAYLOAD6');
    expect(_fetchMock.default.lastOptions()).toEqual(expect.objectContaining({
      credentials: 'same-origin'
    }));
  });
  it('other fetch options', async () => {
    _fetchMock.default.mock({
      matcher: '/fetch',
      response: {
        status: 200,
        body: {
          data: 'PAYLOAD7'
        }
      },
      method: 'POST'
    });

    const rnl = new _RelayNetworkLayer.default([(0, _url.default)({
      url: '/fetch',
      credentials: 'include',
      mode: 'cors',
      cache: 'no-store',
      redirect: 'follow'
    })]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toBe('PAYLOAD7');
    expect(_fetchMock.default.lastOptions()).toEqual(expect.objectContaining({
      credentials: 'include',
      mode: 'cors',
      cache: 'no-store',
      redirect: 'follow'
    }));
  });
});