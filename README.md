<h1 align="center">slope.js</h1>
<p align="center">The webserver framework you never knew you needed!</p>

## Introduction

slope is an object-oriented zero-dependency class-driven webserver library written in Node.js. It allows the user high-level access to numerous functions that allow the user to render templates, send files, return JSON data, and much more.

In short, it allows you to create a webserver like this:

```javascript
const Slope  = require("slope.js");
const server = new Slope.Server();

server.routes.add("/", (client, result) => {
  result.send("Hello, world!")
});

server.run();
```

(Try it -- this is completely working Slope code!)

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

- Source Code: https://github.com/wibbuffey/slope
- Issue Tracker: https://github.com/wibbuffey/slope/issues
- Documentation: https://github.com/wibbuffey/slope/wiki
