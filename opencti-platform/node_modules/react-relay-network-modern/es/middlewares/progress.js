/* eslint-disable no-await-in-loop */
function createProgressHandler(opts) {
  const {
    onProgress,
    sizeHeader = 'Content-Length'
  } = opts || {};
  return async res => {
    const {
      body,
      headers
    } = res;

    if (!body) {
      return;
    }

    const totalResponseSize = headers.get(sizeHeader);
    let totalSize = null;

    if (totalResponseSize !== null) {
      totalSize = parseInt(totalResponseSize, 10);
    }

    const reader = body.getReader();
    let completed = false;
    let runningTotal = 0;

    do {
      const step = await reader.read();
      const {
        done,
        value
      } = step;
      const length = value && value.length || 0;
      completed = done;

      if (!completed) {
        runningTotal += length;
        onProgress(runningTotal, totalSize);
      }
    } while (!completed);
  };
}

export default function progressMiddleware(opts) {
  const progressHandler = createProgressHandler(opts);

  const mw = next => async req => {
    const res = await next(req);
    progressHandler(res.clone());
    return res;
  };

  mw.isRawMiddleware = true;
  return mw;
}