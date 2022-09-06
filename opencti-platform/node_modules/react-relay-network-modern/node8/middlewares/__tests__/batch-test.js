"use strict";

var _fetchMock = _interopRequireDefault(require("fetch-mock"));

var _formData = _interopRequireDefault(require("form-data"));

var _ = require("../..");

var _mockReq = require("../../__mocks__/mockReq");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.FormData = _formData.default;
describe('middlewares/batch', () => {
  beforeEach(() => {
    _fetchMock.default.restore();
  });
  it('should make a successfull single request', async () => {
    _fetchMock.default.post('/graphql', {
      data: {
        ok: 1
      }
    });

    const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)()]);
    const req = (0, _mockReq.mockReq)(1);
    const res = await req.execute(rnl);
    expect(res.data).toEqual({
      ok: 1
    });
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('should make a successfully batch request', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql/batch',
      response: {
        status: 200,
        body: [{
          data: {
            ok: 1
          }
        }, {
          data: {
            ok: 2
          }
        }]
      },
      method: 'POST'
    });

    const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)()]);
    const req1 = (0, _mockReq.mockReq)(1);
    const req2 = (0, _mockReq.mockReq)(2);
    const [res1, res2] = await Promise.all([req1.execute(rnl), req2.execute(rnl)]);
    expect(res1.data).toEqual({
      ok: 1
    });
    expect(res2.data).toEqual({
      ok: 2
    });
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('should make a successfully batch request with duplicate request payloads', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql/batch',
      response: {
        status: 200,
        body: [{
          data: {
            ok: 1
          }
        }, {
          data: {
            ok: 2
          }
        }]
      },
      method: 'POST'
    });

    const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)()]);
    const req1 = (0, _mockReq.mockReq)(2);
    const req2 = (0, _mockReq.mockReq)(2, {
      query: 'duplicate',
      variables: {
        duplicate: true
      }
    });
    const req3 = (0, _mockReq.mockReq)(2, {
      query: 'duplicate',
      variables: {
        duplicate: true
      }
    });
    const [res1, res2, res3] = await Promise.all([req1.execute(rnl), req2.execute(rnl), req3.execute(rnl)]);
    expect(res1.data).toEqual({
      ok: 1
    });
    expect(res2.data).toEqual({
      ok: 2
    });
    expect(res3.data).toEqual({
      ok: 2
    });
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('should reject if server does not return response for duplicate request payloads', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql/batch',
      response: {
        status: 200,
        body: [{
          data: {
            ok: 1
          }
        }]
      },
      method: 'POST'
    });

    const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)()]);
    const req1 = (0, _mockReq.mockReq)(1);
    const req2 = (0, _mockReq.mockReq)(2);
    const req3 = (0, _mockReq.mockReq)(3);
    const [res1, res2, res3] = await Promise.all([req1.execute(rnl), req2.execute(rnl).catch(e => e), req3.execute(rnl).catch(e => e)]);
    expect(res1.data).toEqual({
      ok: 1
    });
    expect(res2).toBeInstanceOf(Error);
    expect(res2.toString()).toMatch('Server does not return response for request');
    expect(res3).toBeInstanceOf(Error);
    expect(res3.toString()).toMatch('Server does not return response for request');
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('should handle network failure', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql/batch',
      response: {
        throws: new Error('Network connection error')
      },
      method: 'POST'
    });

    const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)()]);
    const req1 = (0, _mockReq.mockReq)(1);
    const req2 = (0, _mockReq.mockReq)(2);
    const [res1, res2] = await Promise.all([req1.execute(rnl).catch(e => e), req2.execute(rnl).catch(e => e)]);
    expect(res1).toBeInstanceOf(Error);
    expect(res1.toString()).toMatch('Network connection error');
    expect(res2).toBeInstanceOf(Error);
    expect(res2.toString()).toMatch('Network connection error');
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('should handle server errors for one request', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql/batch',
      response: {
        status: 200,
        body: [{
          payload: {
            errors: [{
              location: 1,
              message: 'major error'
            }]
          }
        }, {
          payload: {
            data: {
              ok: 2
            }
          }
        }]
      },
      method: 'POST'
    });

    const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)()]);
    const req1 = (0, _mockReq.mockReq)(1);
    const req2 = (0, _mockReq.mockReq)(2); // prettier-ignore

    const [res1, res2] = await Promise.all([req1.execute(rnl).catch(e => e), req2.execute(rnl)]);
    expect(res1).toBeInstanceOf(Error);
    expect(res1.toString()).toMatch('major error');
    expect(res2.data).toEqual({
      ok: 2
    });
    expect(res2.errors).toBeUndefined();
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('should handle server errors for all requests', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql/batch',
      response: {
        status: 200,
        body: {
          errors: [{
            location: 1,
            message: 'major error'
          }]
        }
      },
      method: 'POST'
    });

    const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)()]);
    const req1 = (0, _mockReq.mockReq)(1);
    const req2 = (0, _mockReq.mockReq)(2);
    const req3 = (0, _mockReq.mockReq)(3);
    const [res1, res2, res3] = await Promise.all([req1.execute(rnl).catch(e => e), req2.execute(rnl).catch(e => e), req3.execute(rnl).catch(e => e)]);
    expect(res1.toString()).toMatch('Wrong response');
    expect(res2.toString()).toMatch('Wrong response');
    expect(res3.toString()).toMatch('Wrong response');
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('should handle responses without payload wrapper', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql/batch',
      response: {
        status: 200,
        body: [{
          errors: [{
            location: 1,
            message: 'major error'
          }]
        }, {
          data: {
            ok: 2
          }
        }]
      },
      method: 'POST'
    });

    const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)()]);
    const req1 = (0, _mockReq.mockReq)(1);
    const req2 = (0, _mockReq.mockReq)(2); // prettier-ignore

    const [res1, res2] = await Promise.all([req1.execute(rnl).catch(e => e), req2.execute(rnl)]);
    expect(res1).toBeInstanceOf(Error);
    expect(res1.toString()).toMatch('major error');
    expect(res2.data).toEqual({
      ok: 2
    });
    expect(res2.errors).toBeUndefined();
    expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
  });
  it('should not batch requests cacheConfig `skipBatch=true`', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql',
      response: {
        status: 200,
        body: {
          data: {
            ok: 1
          }
        }
      },
      method: 'POST'
    });

    _fetchMock.default.mock({
      matcher: '/graphql/batch',
      response: {
        status: 200,
        body: [{
          data: {
            ok: 2
          }
        }, {
          data: {
            ok: 3
          }
        }]
      },
      method: 'POST'
    });

    const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)()]);
    const req1 = (0, _mockReq.mockReq)(1, {
      cacheConfig: {
        skipBatch: true
      }
    });
    const req2 = (0, _mockReq.mockReq)(2);
    const req3 = (0, _mockReq.mockReq)(3);
    const [res1, res2, res3] = await Promise.all([req1.execute(rnl), req2.execute(rnl), req3.execute(rnl)]);
    expect(res1.data).toEqual({
      ok: 1
    });
    expect(res2.data).toEqual({
      ok: 2
    });
    expect(res3.data).toEqual({
      ok: 3
    });
  });
  describe('option `batchTimeout`', () => {
    beforeEach(() => {
      _fetchMock.default.restore();
    });
    it('should gather different requests into one batch request', async () => {
      _fetchMock.default.mock({
        matcher: '/graphql/batch',
        response: {
          status: 200,
          body: [{
            data: {}
          }, {
            data: {}
          }, {
            data: {}
          }]
        },
        method: 'POST'
      });

      const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
        batchTimeout: 50
      })]);
      (0, _mockReq.mockReq)(1).execute(rnl);
      setTimeout(() => (0, _mockReq.mockReq)(2).execute(rnl), 30);
      await (0, _mockReq.mockReq)(3).execute(rnl);

      const reqs = _fetchMock.default.calls('/graphql/batch');

      expect(reqs).toHaveLength(1);
      expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
    });
    it('should gather different requests into two batch request', async () => {
      _fetchMock.default.mock({
        matcher: '/graphql/batch',
        response: {
          status: 200,
          body: [{
            data: {}
          }, {
            data: {}
          }, {
            data: {}
          }, {
            data: {}
          }]
        },
        method: 'POST'
      });

      const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
        batchTimeout: 100
      })]);
      (0, _mockReq.mockReq)(1).execute(rnl);
      setTimeout(() => (0, _mockReq.mockReq)(2).execute(rnl), 160);
      setTimeout(() => (0, _mockReq.mockReq)(3).execute(rnl), 170);
      (0, _mockReq.mockReq)(4).execute(rnl);
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            const reqs = _fetchMock.default.calls('/graphql/batch');

            expect(reqs).toHaveLength(2);
            expect(_fetchMock.default.calls('/graphql/batch')).toMatchSnapshot();
            resolve();
          } catch (e) {
            reject(e);
          }
        }, 300);
      });
    });
  });
  describe('option `maxBatchSize`', () => {
    beforeEach(() => {
      _fetchMock.default.restore();
    });
    it('should split large batched requests into multiple requests', async () => {
      _fetchMock.default.mock({
        matcher: '/graphql',
        response: {
          status: 200,
          body: {
            data: {}
          }
        },
        method: 'POST'
      });

      _fetchMock.default.mock({
        matcher: '/graphql/batch',
        response: {
          status: 200,
          body: [{
            data: {}
          }, {
            data: {}
          }, {
            data: {}
          }, {
            data: {}
          }]
        },
        method: 'POST'
      });

      const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
        maxBatchSize: 1024 * 10
      })]);
      const req1 = (0, _mockReq.mockReqWithSize)(1, 1024 * 7);
      const req2 = (0, _mockReq.mockReqWithSize)(2, 1024 * 2);
      const req3 = (0, _mockReq.mockReqWithSize)(3, 1024 * 5);
      const req4 = (0, _mockReq.mockReqWithSize)(4, 1024 * 4);
      const req5 = (0, _mockReq.mockReqWithSize)(5, 1024 * 11);
      await Promise.all([req1.execute(rnl), req2.execute(rnl), req3.execute(rnl), req4.execute(rnl), req5.execute(rnl)]);

      const batchReqs = _fetchMock.default.calls('/graphql/batch');

      const singleReqs = _fetchMock.default.calls('/graphql');

      expect(batchReqs).toHaveLength(2);
      expect(singleReqs).toHaveLength(1);
    });
  });
  describe('option `allowMutations`', () => {
    beforeEach(() => {
      _fetchMock.default.restore();
    });
    it('should not batch mutations by default', async () => {
      _fetchMock.default.mock({
        matcher: '/graphql',
        response: {
          status: 200,
          body: {
            data: {}
          }
        },
        method: 'POST'
      });

      const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
        batchTimeout: 20
      })]);
      (0, _mockReq.mockMutationReq)(1).execute(rnl);
      await (0, _mockReq.mockMutationReq)(1).execute(rnl);

      const singleReqs = _fetchMock.default.calls('/graphql');

      expect(singleReqs).toHaveLength(2);
      expect(_fetchMock.default.calls('/graphql')).toMatchSnapshot();
    });
    it('should not batch requests with FormData', async () => {
      _fetchMock.default.mock({
        matcher: '/graphql',
        response: {
          status: 200,
          body: {
            data: {}
          }
        },
        method: 'POST'
      });

      const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
        batchTimeout: 20
      })]);
      (0, _mockReq.mockReqWithFiles)(1).execute(rnl);
      await (0, _mockReq.mockReqWithFiles)(1).execute(rnl);

      const singleReqs = _fetchMock.default.calls('/graphql');

      expect(singleReqs).toHaveLength(2);
    });
    it('should batch mutations if `allowMutations=true`', async () => {
      _fetchMock.default.mock({
        matcher: '/graphql/batch',
        response: {
          status: 200,
          body: [{
            data: {}
          }, {
            data: {}
          }]
        },
        method: 'POST'
      });

      const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
        batchTimeout: 20,
        allowMutations: true
      })]);
      const req1 = (0, _mockReq.mockMutationReq)(1);
      req1.execute(rnl);
      const req2 = (0, _mockReq.mockMutationReq)(2);
      await req2.execute(rnl);

      const batchReqs = _fetchMock.default.calls('/graphql/batch');

      expect(batchReqs).toHaveLength(1);
      expect(_fetchMock.default.lastOptions()).toMatchSnapshot();
    });
    it('should not batch mutations with files if `allowMutations=true`', async () => {
      _fetchMock.default.mock({
        matcher: '/graphql',
        response: {
          status: 200,
          body: {
            data: {}
          }
        },
        method: 'POST'
      });

      const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
        batchTimeout: 20,
        allowMutations: true
      })]);
      const req1 = (0, _mockReq.mockMutationReq)(1, {
        files: {
          file1: 'data'
        }
      });
      req1.execute(rnl);
      const req2 = (0, _mockReq.mockMutationReq)(2, {
        files: {
          file1: 'data'
        }
      });
      await req2.execute(rnl);

      const singleReqs = _fetchMock.default.calls('/graphql');

      expect(singleReqs).toHaveLength(2);
    });
  });
  it('should pass fetch options', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql/batch',
      response: {
        status: 200,
        body: [{
          data: {}
        }, {
          data: {}
        }]
      },
      method: 'POST'
    });

    const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
      batchTimeout: 20,
      credentials: 'include',
      mode: 'cors',
      cache: 'no-store',
      redirect: 'follow'
    })]);
    const req1 = (0, _mockReq.mockReq)(1);
    req1.execute(rnl);
    const req2 = (0, _mockReq.mockReq)(2);
    await req2.execute(rnl);

    const batchReqs = _fetchMock.default.calls('/graphql/batch');

    expect(batchReqs).toHaveLength(1);
    expect(_fetchMock.default.lastOptions()).toEqual(expect.objectContaining({
      credentials: 'include',
      mode: 'cors',
      cache: 'no-store',
      redirect: 'follow'
    }));
  });
  describe('headers option', () => {
    it('`headers` option as Object', async () => {
      _fetchMock.default.mock({
        matcher: '/graphql/batch',
        response: {
          status: 200,
          body: [{
            data: {}
          }, {
            data: {}
          }]
        },
        method: 'POST'
      });

      const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
        headers: {
          'custom-header': '123'
        }
      })]);
      const req1 = (0, _mockReq.mockReq)(1);
      const req2 = (0, _mockReq.mockReq)(2);
      await Promise.all([req1.execute(rnl), req2.execute(rnl)]);
      expect(_fetchMock.default.lastOptions().headers).toEqual(expect.objectContaining({
        'custom-header': '123'
      }));
    });
    it('`headers` option as thunk', async () => {
      _fetchMock.default.mock({
        matcher: '/graphql/batch',
        response: {
          status: 200,
          body: [{
            data: {}
          }, {
            data: {}
          }]
        },
        method: 'POST'
      });

      const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
        headers: () => ({
          'thunk-header': '333'
        })
      })]);
      const req1 = (0, _mockReq.mockReq)(1);
      const req2 = (0, _mockReq.mockReq)(2);
      await Promise.all([req1.execute(rnl), req2.execute(rnl)]);
      expect(_fetchMock.default.lastOptions().headers).toEqual(expect.objectContaining({
        'thunk-header': '333'
      }));
    });
    it('`headers` option as thunk with Promise', async () => {
      _fetchMock.default.mock({
        matcher: '/graphql/batch',
        response: {
          status: 200,
          body: [{
            data: {}
          }, {
            data: {}
          }]
        },
        method: 'POST'
      });

      const rnl = new _.RelayNetworkLayer([(0, _.batchMiddleware)({
        headers: () => Promise.resolve({
          'thunk-header': 'as promise'
        })
      })]);
      const req1 = (0, _mockReq.mockReq)(1);
      const req2 = (0, _mockReq.mockReq)(2);
      await Promise.all([req1.execute(rnl), req2.execute(rnl)]);
      expect(_fetchMock.default.lastOptions().headers).toEqual(expect.objectContaining({
        'thunk-header': 'as promise'
      }));
    });
  });
});