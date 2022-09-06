"use strict";

var _fetchMock = _interopRequireDefault(require("fetch-mock"));

var _RelayNetworkLayer = _interopRequireDefault(require("../../RelayNetworkLayer"));

var _mockReq = require("../../__mocks__/mockReq");

var _perf = _interopRequireDefault(require("../perf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('middlewares/perf', () => {
  beforeEach(() => {
    _fetchMock.default.restore();
  });
  it('measure request time for request', async () => {
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

    const logger = jest.fn();
    const rnl = new _RelayNetworkLayer.default([(0, _perf.default)({
      logger
    })]);
    await (0, _mockReq.mockReq)('MyRequest').execute(rnl);
    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger.mock.calls[0][0]).toMatch(/\[\d+ms\] MyRequest/);
    expect(logger.mock.calls[0][1]).toMatchSnapshot();
  });
});