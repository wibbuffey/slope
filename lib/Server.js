// slope.js predefined classes
const Routes = require("./Routes");
const Result = require("./Result");
const Config = require("./Config");
const Client = require("./Client");

// node.js helper module
const http = require("http"); 

module.exports = class Server {
  constructor (config = new Config()) {
    this.routes = new Routes();
    this.config = config;
  }
  
  run () {
    http.createServer((request, response) => {
      let found = false;
      
      Object.keys(this.routes.list).forEach((item) => {
        if (item == request.url) {
          this.routes[item](new Client(request), new Result(response));
          
          found = true;
        }
      });
      
      if (!found) {
        if (this.config.errors[404]) {
          this.routes(this.config.errors[404])(new Client(request), new Result(response));
        } else {
          ((Result) => {
            Result.head(404);
            Result.send("404 Not Found")
          })(new Client(request), new Result(response))
        }
      }
    }).listen(this.config.port);
  }
}
