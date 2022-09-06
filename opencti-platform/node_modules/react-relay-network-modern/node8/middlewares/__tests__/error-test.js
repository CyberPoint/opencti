"use strict";

var _fetchMock = _interopRequireDefault(require("fetch-mock"));

var _RelayNetworkLayer = _interopRequireDefault(require("../../RelayNetworkLayer"));

var _mockReq = require("../../__mocks__/mockReq");

var _error = _interopRequireDefault(require("../error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('middlewares/error', () => {
  beforeEach(() => {
    _fetchMock.default.restore();
  });
  it('should display graphql errors', async () => {
    _fetchMock.default.mock({
      matcher: '/graphql',
      response: {
        status: 200,
        body: {
          errors: [{
            message: 'Wow!',
            stack: ['Error: Wow!', '    at resolve (/Volumes/npm_ram_disk/build/development/webpack:/src/schema/cabinet/cabinet.js:492:1)', '    at resolveFieldValueOrError (/Volumes/npm_ram_disk/node_modules/graphql/execution/execute.js:498:12)', '    at resolveField (/Volumes/npm_ram_disk/node_modules/graphql/execution/execute.js:462:16)', '    at /Volumes/npm_ram_disk/node_modules/graphql/execution/execute.js:311:18', '    at Array.reduce (<anonymous>)', '    at executeFields (/Volumes/npm_ram_disk/node_modules/graphql/execution/execute.js:308:42)', '    at collectAndExecuteSubfields (/Volumes/npm_ram_disk/node_modules/graphql/execution/execute.js:746:10)', '    at completeObjectValue (/Volumes/npm_ram_disk/node_modules/graphql/execution/execute.js:728:10)', '    at completeValue (/Volumes/npm_ram_disk/node_modules/graphql/execution/execute.js:625:12)', '    at /Volumes/npm_ram_disk/node_modules/graphql/execution/execute.js:582:14', '    at <anonymous>', '    at process._tickDomainCallback (internal/process/next_tick.js:228:7)']
          }]
        }
      },
      method: 'POST'
    });

    const logger = jest.fn();
    const rnl = new _RelayNetworkLayer.default([(0, _error.default)({
      logger
    })]);
    await (0, _mockReq.mockReq)('MyRequest').execute(rnl).catch(() => {});
    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger.mock.calls[0][0]).toMatchSnapshot();
  });
});