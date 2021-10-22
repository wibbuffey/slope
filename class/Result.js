/**
 * @class Result
 * @classdesc Class passed as the second parameter to route callbacks.
 */
module.exports = class {
  constructor(response) {
    this.response = response;
  }

  /**
   * @function Result.send
   * @description Sends text with provided headers and ends the response.
   * @param {String} content - Content to write/return.
   * @param {Object} [headers={"Content-Type": "text/html"}] - Headers to send.
   */
  send(content, headers = { "Content-Type": "text/html" }) {
    Object.keys(headers).forEach((item) => {
      this.response.setHeader(item, headers[item]);
    });

    this.response.end(content);
  }

  /**
   * @function Result.write
   * @description Sends text WITHOUT headers and DOES NOT end the response.
   * @param {String} content - Content to write.
   */
  write(content) {
    this.response.write(content);
  }

  /**
   * @function Result.end
   * @description Ends the response (with an optional message).
   * @param {String} [content=""] - Content to write/return.
   */
  end(content = "") {
    this.response.end(content);
  }

  /**
   * @function Result.head
   * @description Sets status and headers.
   * @param {Number} status - Status code to return.
   * @param {Object} [headers={"Content-Type": "text/html"}] - Headers to send.
   */
  head(status, headers = { "Content-Type": "text/html" }) {
    this.response.writeHead(status, headers);
  }
};
