// classes
const Routes = require("./Routes");
const Result = require("./Result");
const Config = require("./Config");
const Client = require("./Client");

// utilities
const RaiseErrors = require("../utils/RaiseErrors");

// module
const http = require("http");

/**
 * @class Server
 * @classdesc The object used to create a web server.
 */
module.exports = class Server {
  constructor(config = new Config()) {
    this.routes = new Routes();
    this.config = config;
  }

  /**
   * @function Server.run
   * @description Run the web server.
   */
  run() {
    http
      .createServer((request, response) => {
        try {
          let found = false;

          Object.keys(this.routes.list).forEach((item) => {
            if (item == request.url) {
              this.routes.list[item](new Client(request), new Result(response));
              found = true;
            }
          });

          if (!found) {
            if (this.routes.list["*"]) {
              this.routes.list["*"](new Client(request), new Result(response));
            } else {
              RaiseErrors(404, this.config, request, response);
            }
          }
        } catch (error) {
          RaiseErrors(500, this.config, request, response);
          console.log(error);
        }
      })
      .listen(this.config.port);
  }
};
