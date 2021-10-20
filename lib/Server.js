// slope.js predefined classes
const Routes = require("./Routes");
const Result = require("./Result");
const Config = require("./Config");

// node.js helper module
const http = require("http"); 

module.exports = class Server {
  constructor (config = new Config()) {
    this.routes = new Routes();
    this.config = config;
  }
  
  run () {
    http.createServer((request, result) => {
      let found = false;
      
      Object.keys(this.routes).forEach((item) => {
        if (item == request.url) {
          this.routes[item](Result);
          
          found = true;
        }
      });
      
      if (!found) {
        this.routes(this.config.errors[404])(Result);
      }
    }).listen(this.config.port);
  }
}
