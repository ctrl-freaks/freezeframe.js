# Freezeframe.js

[![npm version](https://badge.fury.io/js/freezeframe.svg)](https://badge.fury.io/js/freezeframe)
[![Coverage Status](https://coveralls.io/repos/github/ctrl-freaks/freezeframe.js/badge.svg?branch=master)](https://coveralls.io/github/ctrl-freaks/freezeframe.js?branch=master)
![Size](https://img.shields.io/github/size/ctrl-freaks/freezeframe.js/packages/freezeframe/dist/freezeframe.min.js.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Freezeframe.js is a library that pauses animated .gifs and enables them to
animate on mouse hover / mouse click / touch event, or triggered manually.

http://ctrl-freaks.github.io/freezeframe.js/

## v5 - TypeScript

Freezeframe is now written in / supports TypeScript! The library will still support usage in JavaScript, but if your project uses TypeScript, you'll have access to Freezeframe's type definitions, improved input validation, and depending on your IDE/text editor, autocompletion/intellisense.

To get started using freezeframe 5:

```sh
npm install freezeframe@5.0.0
```

```sh
npm install vue-freezeframe@5.0.0
```

```sh
npm install react-freezeframe@5.0.0
```

Version 5+ is built with modern development in mind. It's transpiled from TypeScript to JavaScript, and it should
work in all modern browsers, but we are no longer supporting older browsers, or the jquery plugin.

If you need to support older browsers (and don't need TypeScript), try v4.x:

```sh
npm install freezeframe@4.1.3
```

If you want to use freezeframe as a jquery plugin, check out
[freezeframe v3.0.10](https://github.com/ctrl-freaks/freezeframe.js/tree/archived/3.0.10).

## Packages / Documentation

This is a [lerna.js](https://lerna.js.org/) monorepo, containing the following packages, each with their own docs:

- [freezeframe](./packages/freezeframe)
- [vue-freezeframe](./packages/vue-freezeframe)
- [react-freezeframe](./packages/react-freezeframe)

## How it works

For the curious, we are able to pause animated gifs by writing their data to a canvas element. Only the first frame of the animation can be written to the canvas, so we now have a frozen version of the gif.

Unfortunately, browser security prevents reading the actual data of the image if it is hosted on a different domain, which prevents us from being able to truly "pause" the gif on the true current frame. Supporting gifs on other domains is a requirement for this project, so the only frame you can pause on is the first frame.

## Contributing

- Fork or clone the repository
- Install lerna globally (optional)

```bash
npm install -g lerna
```

- Install the monorepo dependencies

```bash
npm install
```

- Install the sub-package dependencies

```bash
npm run bootstrap
```

- Run tests for all sub-packages

```bash
npm test
```

- Run build for all sub-packages

```bash
npm run build
```

Then, submit your PR for review.

## License

freezeframe.js is released under the terms of the MIT License.

## Thanks

- [Browserstack - Live, Web-Based Browser Testing](https://www.browserstack.com/)
