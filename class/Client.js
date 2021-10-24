const url = require("url");

/**
 * @class Client
 * @classdesc Used as a parameter for function calls.
 */
module.exports = class Client {
  constructor(request) {
    this.request = request;

    this.http = {
      version: request.httpVersion,
      headers: request.headers,
    };

    this.url = request.url;
    this.method = request.method;
    this.params = new url.URL(
      request.url,
      `http://${request.headers.host}`
    ).searchParams;
  }
};
