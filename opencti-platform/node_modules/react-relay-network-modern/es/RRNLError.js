export default class RRNLError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'RRNLError';
  }

}