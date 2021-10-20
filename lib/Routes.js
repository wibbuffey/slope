module.exports = class Routes {
  constructor () {
    this.list = {}
  }
  
  add (name, callback) {
    this.list[name] == callback;
  }
  
  remove (name) {
    delete this.list[name];
  }
}
