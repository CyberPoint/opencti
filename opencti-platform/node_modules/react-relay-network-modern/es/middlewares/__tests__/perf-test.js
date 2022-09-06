import fetchMock from 'fetch-mock';
import RelayNetworkLayer from '../../RelayNetworkLayer';
import { mockReq } from '../../__mocks__/mockReq';
import perfMiddleware from '../perf';
describe('middlewares/perf', () => {
  beforeEach(() => {
    fetchMock.restore();
  });
  it('measure request time for request', async () => {
    fetchMock.mock({
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
    const rnl = new RelayNetworkLayer([perfMiddleware({
      logger
    })]);
    await mockReq('MyRequest').execute(rnl);
    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger.mock.calls[0][0]).toMatch(/\[\d+ms\] MyRequest/);
    expect(logger.mock.calls[0][1]).toMatchSnapshot();
  });
});