/**
 * @class Header
 * @classdesc Class used internally as a list of headers.
 */
module.exports = class Header {
  constructor(response) {
    this.response = response;
  }

  /**
   * @function Header.get
   * @description Retrieves a header from the object.
   * @param {String} header - The header's name.
   * @returns
   */
  get(header) {
    return this.response.getHeader(header);
  }

  /**
   * @function Header.set
   * @description Adds or replaces a header in the object.
   * @param {String} header - The header's name.
   * @param {String} value - The value the header will be set to.
   * @returns
   */
  set(header, value) {
    return this.response.setHeader(header, value);
  }

  /**
   * @function Header.remove
   * @description Removes a header from the object.
   * @param {String} header - The header's name.
   * @returns
   */
  remove(header) {
    return this.response.removeHeader(header);
  }
};
