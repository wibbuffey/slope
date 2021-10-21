module.exports = class Client {
  constructor(request) {
    this.request = request;

    this.http = {
      version: request.httpVersion,
      headers: request.headers,
    };

    this.url = request.url;
    this.method = request.method;
    this.params = new http.URL(
      request.url,
      `http://${request.headers.host}`
    ).searchParams;
  }
};
