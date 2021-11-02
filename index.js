/**
 * @file Exports all functions and classes from slope.
 */
module.exports = {
  // Classes
  Client: require("./class/client"),
  Config: require("./class/config"),
  Routes: require("./class/routes"),
  Server: require("./class/server"),
  Header: require("./class/Header"),
  Result: require("./class/Result"),

  // Utilities
  raiseErrors: require("./utils/RaiseErrors"),
  getMIMEType: require("./utils/GetMIMEType"),
};
