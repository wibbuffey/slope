// classes
const Client = require("../class/Client");
const Result = require("../class/Result");

// utilities
const { name, version } = require("./VersionInfo")();
const versionString =
  version.major.toString() + version.minor.toString + version.patch.toString();

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

    result.send(`<h1>Error: ${error}</h1>Running ${name} ${version}`);
  }
};
