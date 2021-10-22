module.exports = class Routes {
  constructor() {
    Routes.prototype.list = {};
  }

  add(name, callback) {
    Routes.prototype.list[name] = callback;
  }

  remove(name) {
    delete Routes.prototype.list[name];
  }
};
