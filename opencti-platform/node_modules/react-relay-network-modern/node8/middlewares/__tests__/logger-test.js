"use strict";

var _fetchMock = _interopRequireDefault(require("fetch-mock"));

var _RelayNetworkLayer = _interopRequireDefault(require("../../RelayNetworkLayer"));

var _mockReq = require("../../__mocks__/mockReq");

var _logger = _interopRequireDefault(require("../logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('middlewares/logger', () => {
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
    const rnl = new _RelayNetworkLayer.default([(0, _logger.default)({
      logger
    })]);
    await (0, _mockReq.mockReq)('MyRequest').execute(rnl);
    expect(logger).toHaveBeenCalledTimes(2); // fix changing text `in 12ms` for snapshot

    logger.mock.calls[1][0] = logger.mock.calls[1][0].replace(/in \d+ms/, 'in XXXms');
    logger.mock.calls[1][1].req = 'RelayRequest object';
    logger.mock.calls[1][1].res = 'RelayResponse object';
    expect(logger.mock.calls).toMatchSnapshot();
  });
});