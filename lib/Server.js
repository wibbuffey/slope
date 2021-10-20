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
      
      Object.keys(this.routes.list).forEach((item) => {
        if (item == request.url) {
          this.routes[item](Result);
          
          found = true;
        }
      });
      
      if (!found) {
        if (this.config.errors[404]) {
          this.routes(this.config.errors[404])(Result);
        } else {
          ((Result) => {
            Result.head(404);
            Result.send("404 Not Found")
          })(Result)
        }
      }
    }).listen(this.config.port);
  }
}
