module.exports = class {
  constructor (response) {
    this.response = response;
  }

  send (content, headers = {"Content-Type": "text/html"}) {
    Object.keys(headers).forEach((item) => {
      this.response.setHeader(item, headers[item]);
    });

    this.response.end(content);
  }

  write (content, headers) {
    send(content, headers);
  }

  end (content = "") {
    this.response.end(content);
  }

  head (status, headers = {"Content-Type": "text/html"}) {
    this.response.writeHead(status, headers);
  }
}