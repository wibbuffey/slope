# Slope.js Guide

**WARNING:** This guide is still a work in progress. Please feel free to report errors on the [issue tracker](https://wibbuffey.github.io/#links).

## Introduction

Welcome to slope.js! Slope.js (first letter lowercase unless at the start of a sentence) is an open-source library for Node.js that allows you to easily create web servers.

It requires _no_ advanced functions, _no_ dependencies, and is generally easy-to-use while still maintaining its advanced features.

## Installing

There are three ways to install slope.

1. ...with [NPM](https://npmjs.org):

   ```shell
   npm i slope.js
   ```

2. ...with [Git](https://git-scm.com):

   ```shell
   git clone "https://github.com/wibbuffey/slope.git"
   ```

3. ...with [GitHub CLI](https://github.com/cli/cli):

   ```sh
   gh repo clone wibbuffey/slope
   ```

The first (installing with NPM) is recommended, as the other two give the most bleeding-edge (and perhaps buggy) version.

## Getting Started

In slope, a web server is created using the `server` class.

```javascript
const Slope = require("slope.js");
const server = new Slope.Server();
```

In slope, pages are created using "routes". A route is a connection between a URL and a function which displays the page. Routes can be specified as strings for direct URLs, with `"*"` to act as a fallback/wildcard when no page is found, or with a `RegEx` to have variables in the URL.

> Tip: Slope also supports RegExes in the form of strings, such as `"/example/test."` instead of `/\/example\/test./`

Routes are specified with `Server.Routes`. It has two methods: `.add()` and `.remove()`.

```javascript
server.routes.add("/test", (Client, Server) => {
  Server.send(`I'm viewing ${Client.url}!`);
});
```

> Note: We'll explain the callback function **later**.

Finally, we need to _run_ the web server:

```js
server.run();
```

And now, if you look at `localhost:8080/test`, you should see "I'm viewing /test!"

## Callback Functions

Let's explain this callback function a little bit.

```js
server.routes.add("/test", (Client, Server) => {
```

Already, we see that slope gives the function two parameters: `Client` and `Server`.

- The `Client` deals with GETTING values that the user has given, such as the URL or request type.
- The `Server` deals with SETTING values that the user needs to complete the response, such as headers, response code, and content.

```javascript
Server.send(`I'm viewing ${client.url}!`);
```

This line sends a message and ends the response.

> In order to write text without ending the response or ending the response without writing text, see `Server.write()` and `Server.end()`.

It formats in `Client.url`, the URL that the user visits.

## Configuration

Suppose that you want to show a different page when your user gets a 404. Or perhaps you want to run the server on port 5000.

Both of these problems have one solution: `Config`! When creating a `Server`, there is one optional parameter containing a `Config` class.

The `Config` constructor requires an `Object` with two properties.

### Port

This option is a `Number` that specifies the port at which the server will be ran on.

```javascript
const Slope = require("slope.js");
const server = new Slope.Server({
  port: 5000,
});
```

### Errors

This option is an `Object` that specifies functions for slope to call when an error page must be displayed.

```javascript
const Slope = require("slope.js");
const server = new Slope.Server({
  errors: {
    // It's probably best if you specify both of these,
    // as 404 occurs when no page was found, and 500
    // occurs when slope or a callback function runs into
    // an error.
    404: (Client, Server) => {
      /* ... */
    },
    500: (Client, Server) => {
      /* ... */
    },
  },
});
```

## Going Forward

There are so many topics that weren't covered here, like functions (such as `getMIMEType` and `raiseErrors`), so to continue, consider [reading the documentation](https://wibbuffey.github.io/slope).
