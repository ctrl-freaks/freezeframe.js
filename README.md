# Freezeframe.js

[![npm version](https://badge.fury.io/js/freezeframe.svg)](https://badge.fury.io/js/freezeframe)
[![Coverage Status](https://coveralls.io/repos/github/ctrl-freaks/freezeframe.js/badge.svg?branch=master)](https://coveralls.io/github/ctrl-freaks/freezeframe.js?branch=master)
![Size](https://img.shields.io/github/size/ctrl-freaks/freezeframe.js/packages/freezeframe/dist/freezeframe.min.js.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Freezeframe.js is a library that pauses animated .gifs and enables them to
animate on mouse hover / mouse click / touch event, or triggered manually.

## 4.x

Version 4+ is built with modern javascript in mind. It's transpiled with webpack/babel, so it should
work in most environments, but we are no longer supporting the jquery plugin.

If you want to use freezeframe as a jquery plugin, check out
[freezeframe v3.0.10](https://github.com/ctrl-freaks/freezeframe.js/tree/archived/3.0.10).

## Packages

This is a [lerna.js](https://lerna.js.org/) monorepo, containing the following packages:

- [freezeframe](./packages/freezeframe)
- [vue-freezeframe](./packages/vue-freezeframe)

## Documentation

To get started with freezeframe, head over to the core [freezeframe](./packages/freezeframe) package.

To use freezeframe with Vue.js, check out [vue-freezeframe](./packages/vue-freezeframe).

## How it works

For the curious, we are able to pause animated gifs by writing their data to a canvas element. Only the first frame of the animation can be written to the canvas, so we now have a frozen version of the gif.

## Contributing

- Fork or clone the repository.
- Install lerna

```bash
npm install -g lerna
```

- Install the monorepo dependencies

```bash
npm install
```

- Install the sub-package dependencies

```bash
lerna bootstrap
```

- Run tests for all sub-packages

```bash
npm test
```

- If you are part of the ctrl-freakz organization, you can publish directly to npm:
  
```bash
lerna publish
```

Otherwise, submit your PR for review.

## License

freezeframe.js is released under the terms of the MIT License.

## Thanks

- [Browserstack - Live, Web-Based Browser Testing](https://www.browserstack.com/)
