<h1 align="center">slope.js</h1>
<p align="center">The webserver framework you never knew you needed!</p>

## Introduction

slope is an object-oriented zero-dependency class-driven webserver library written in Node.js. It allows the user high-level access to numerous functions that allow the user to render HTML documents, send files, return JSON data, and much more.

In short, it allows you to create a webserver like this:

```javascript
const Slope = require("slope.js");
const server = new Slope.Server();

server.routes.add("/", (client, result) => {
  result.send("Hello, world!");
});

server.run();
```

Try it -- this is completely working Slope code! If you want to dynamically load routes, you can do something like what was described in discussion [#8](https://github.com/wibbuffey/slope/discussions/8):

```javascript
const Slope = require("slope.js");
const server = new Slope.Server();

server.routes.add("*", (client, result) => {
  try {
    require(`./routes/${client.url}`)();
  } catch (error) {
    Slope.raiseErrors(404);
  }
});

server.run();
```

## Install

Install and update using [npm](https://npmjs.org):

```sh
npm i slope.js
```

Alternatively, for the latest and most unstable version, clone with GitHub:

```sh
gh repo clone wibbuffey/slope # download slope
cd slope                      # enter the directory
```

## Links

If you want to follow the project or ask for help:

- Source Code: https://github.com/wibbuffey/slope
- Issue Tracker: https://github.com/wibbuffey/slope/issues
- Documentation: https://github.com/wibbuffey/slope/wiki
- Discussions: https://github.com/wibbuffey/slope/discussions
- Website: https://wibbuffey.github.io/slope

If you want to contribute:

- Security Policy: [SECURITY.md](.github/SECURITY.md)
- Contributing Guide: [CONTRIBUTING.md](.github/CONTRIBUTING.md)
- Code of Conduct: [CODE_OF_CONDUCT.md](.github/CODE_OF_CONDUCT.md)
- License (MIT): [LICENSE.md](.github/LICENSE.md)
