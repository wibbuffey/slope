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
  constructor(config = {}) {
    this.routes = new Routes();
    this.config = new Config(config);
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
            routes = Object.keys(this.routes.list).filter((element) => {
              /**
               * @wibbuffey, 11.02.21
               *
               * The reason why we use && instead of an if statement is because
               * if the first element evaluates to false, then the statement
               * short-circuits and therefore we don't have to worry about
               * request.url.match(element) returning an error as element will
               * never be a string.
               */
              return element instanceof RegExp && request.url.match(element);
            });

            let route = routes.split(-1);

            if (route) {
              route();
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
