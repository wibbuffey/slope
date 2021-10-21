module.exports = class Header {
  constructor(response) {
    this.response = response;
  }

  get(header) {
    return this.response.getHeader(header);
  }

  set(header, value) {
    return this.response.setHeader(header, value);
  }

  remove(header) {
    return this.response.removeHeader(header);
  }
};
