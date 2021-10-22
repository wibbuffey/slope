/**
 * @class Object used internally as a list of routes.
 */
module.exports = class Routes {
  constructor() {
    Routes.prototype.list = {};
  }

  /**
   * @function Routes.add
   * @description Assigns a function to a URL.
   * @param {String} name - The URL to bind the function to.
   * @param {Function} callback - What to call when the page is visited.
   */
  add(name, callback) {
    Routes.prototype.list[name] = callback;
  }

  /**
   * @function Routes.remove
   * @description Removes a URL from the database of routes.
   * @param {string} name - The URL to remove from the database.
   */
  remove(name) {
    delete Routes.prototype.list[name];
  }
};
