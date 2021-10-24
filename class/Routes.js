/**
 * @class Routes
 * @classdesc Object used internally as a list of routes.
 */
module.exports = class Routes {
  constructor() {
    Routes.prototype.list = {};
  }

  /**
   * @function Routes.add
   * @description Assigns a function to a URL.
   * @param {String | RegExp} name - The URL/RegExp to bind the function to, or "*" as a fallback. 
   * @param {Function} callback - What to call when the page is visited.
   */
  add(name, callback) {
    Routes.prototype.list[name] = callback;
  }

  /**
   * @function Routes.remove
   * @description Removes a URL from the database of routes.
   * @param {String | RegExp} name - The URL to remove from the database.
   */
  remove(name) {
    delete Routes.prototype.list[name];
  }
};
