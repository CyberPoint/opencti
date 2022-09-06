/* eslint-disable no-param-reassign */
import { isFunction } from '../utils';
export default function urlMiddleware(opts) {
  const {
    url,
    headers,
    method = 'POST',
    credentials,
    mode,
    cache,
    redirect
  } = opts || {};
  const urlOrThunk = url || '/graphql';
  const headersOrThunk = headers;
  return next => async req => {
    req.fetchOpts.url = await (isFunction(urlOrThunk) ? urlOrThunk(req) : urlOrThunk);

    if (headersOrThunk) {
      req.fetchOpts.headers = await (isFunction(headersOrThunk) ? headersOrThunk(req) : headersOrThunk);
    }

    if (method) req.fetchOpts.method = method;
    if (credentials) req.fetchOpts.credentials = credentials;
    if (mode) req.fetchOpts.mode = mode;
    if (cache) req.fetchOpts.cache = cache;
    if (redirect) req.fetchOpts.redirect = redirect;
    return next(req);
  };
}