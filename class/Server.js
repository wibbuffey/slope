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
          if (request.url in this.routes.list) {
            this.routes.list[request.url](
              new Client(request),
              new Result(response)
            );
          } else {
            let matched = Object.keys(this.routes.list).find((value) => {
              return request.url.slice(1).match(new RegExp(value.slice(1)));
            });

            if (matched) {
              this.routes.list[matched](
                new Client(request),
                new Result(response)
              );
            } else if (this.routes.list["*"]) {
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
