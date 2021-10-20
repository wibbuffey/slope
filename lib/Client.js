module.exports = class Client {
  constructor (request) {
    this.request = request;
    
    this.http = {
      version: request.httpVersion,
      headers: request.headers
    };
    
    this.url = request.url;
  }
}
