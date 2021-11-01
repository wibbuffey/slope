// classes
const Client = require("../class/Client");
const Result = require("../class/Result");

// utilities
const { name, version } = require("./VersionInfo")();
const versionString =
  version.major.toString() + version.minor.toString + version.patch.toString();

/**
 * @function raiseErrors
 * @description Used internally to raise HTTP errors.
 * @param {Number} error
 * @param {Config} config
 * @param {http.IncomingMessage} request
 * @param {http.ServerResponse} response
 */
module.exports = (error, config, request, response) => {
  if (config.errors[error]) {
    try {
      config.errors[error](new Client(request), new Result(response));
    } catch {
      try {
        require("./RaiseErrors")(500, config, request, response);
      } catch (error) {
        require("./RaiseErrors")(500, {}, request, response);
      }
    }
  } else {
    client = new Client(request);
    result = new Result(response);

    // 10.31.21: temporary error page, likely to be changed later on
    result.send(`<h1>Error: ${error}</h1>Running ${name} ${version}`);
  }
};
