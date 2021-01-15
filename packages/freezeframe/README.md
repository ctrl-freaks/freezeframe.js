# Freezeframe.js

[![npm version](https://badge.fury.io/js/freezeframe.svg)](https://badge.fury.io/js/freezeframe)
[![Coverage Status](https://coveralls.io/repos/github/ctrl-freaks/freezeframe.js/badge.svg?branch=master)](https://coveralls.io/github/ctrl-freaks/freezeframe.js?branch=master)
![Size](https://img.shields.io/github/size/ctrl-freaks/freezeframe.js/packages/freezeframe/dist/freezeframe.min.js.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Freezeframe.js is a library that pauses animated .gifs and enables them to
animate on mouse hover / mouse click / touch event, or manually via class methods.

Version 4.x no longer requires or supports jQuery. If you want to use freezeframe as a jQuery
plugin, check out [freezeframe v3.0.10](https://github.com/ctrl-freaks/freezeframe.js/tree/archived/3.0.10).

## TypeScript

Freezeframe is now built in TypeScript! The library will still support usage in JavaScript, but if your project uses TypeScript, you'll have access to Freezeframe's type definitions, improved input validation, and depending on your IDE/text editor, autocompletion/intellisense.

- [Freezeframe.js](#freezeframejs)
  - [TypeScript](#typescript)
  - [Examples](#examples)
  - [Installation](#installation)
    - [npm](#npm)
    - [yarn](#yarn)
    - [CDN](#cdn)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Advanced Usage](#advanced-usage)
  - [Options](#options)
  - [Constructor](#constructor)
  - [Methods](#methods)
  - [Contributing](#contributing)
  - [License](#license)
  - [Thanks](#thanks)

## Examples

[http://ctrl-freaks.github.io/freezeframe.js/](http://ctrl-freaks.github.io/freezeframe.js/)

## Installation

If your project supports ES6 modules or commonjs modules, install via npm or yarn:

### npm

```bash
npm install freezeframe
```

### yarn

```bash
yarn add freezeframe
```

### CDN

If not, you can pull in the library from a CDN:

```html
<script src="https://unpkg.com/freezeframe/dist/freezeframe.min.js"></script>
```

## Setup

Add **freezeframe** as a class name on the .gifs you want processed.  
( You can optionally use a custom selector as shown in [Advanced Usage](#advanced-usage). )

```html
<img class="freezeframe" src="image.gif" />
```

It is also possible to put the `.freezeframe` class on a parent element containing as many gifs as you want:

```html
<div class="freezeframe">
  <img src="image1.gif">
  <img src="image2.gif">
  <img src="image3.gif">
</div>
```

## Usage

If your environment supports commonjs modules (`require`) or es6 module imports (`import`), you can import freezeframe like so:

```js
// es/ts modules
import Freezeframe from 'freezeframe';

// or commonjs
const Freezeframe = require('freezeframe');
```

However, if you are using the CDN version, you can just access the global variable, `Freezeframe`.

✨ Now time to Freeze those frames ✨

```js
new Freezeframe();
```

## Advanced Usage

freezeframe.js exposes public methods to allow for more custom integration. You
have the option of manually controlling when freezeframe triggers images, adds
support elements, and attaches event handlers. You can also manually trigger
and release animation on one image or a group of images. These methods are
described in detail in the [Methods section](#methods).

*Example: trigger logo .gif and manually trigger / release animation:*

```js
// setup freezeframe instance with custom selector and options

const logo = new Freezeframe('#logo', {
  trigger: false
});

logo.start(); // start animation
logo.stop(); // stop animation
logo.toggle(); // toggle animation
```

## Options

- ### ```selector```

    <code><b>type:</b> string | Element | HTMLCollectionOf<Element> | NodeListOf<Element></code>  
    <code><b>default</b>: ".freezeframe"</code>  

    The selector used to search for .gifs to freeze.
    Selector may either be passed as the first argument of the Freezeframe constructor, or as a
    property of the options object. You may pass a string selector or a DOM object. If a string
    is passed, we use `querySelectorAll` to query for the elements.

- ### ```trigger```  

    <code><b>type:</b> string | boolean</code>  
    <code><b>default</b>: "hover"</code>  
    <code><b>options</b>: "hover", "click", false</code>  

    The trigger event to start animation for non-touch devices.

- ### ```overlay```  

    <code><b>type:</b> boolean</code>  
    <code><b>default</b>: false</code>  

    Whether or not to display a play icon on top of the paused image.

- ### ```responsive```  

    <code><b>type:</b> boolean</code>  
    <code><b>default</b>: true</code>  

    Whether or not to make the image responsive (100% width)

- ### ```warnings```  

    <code><b>type:</b> boolean</code>  
    <code><b>default</b>: true</code>  

    Whether or not to `console.warn` if image doesn't appear to be a gif. When using gifs that don't end in `.gif`, or animated pngs, you may want to disable these.

## Constructor

- ### ```Freezeframe(options)```  

    Create a new freezeframe object instance.  
    Can be passed options. Strings will be interpreted as the **selector** option.

  ```js
  // Default options
  new Freezeframe();

  // String as selector
  new Freezeframe('.foo');

  // DOM object as selector
  new Freezeframe(document.querySelector('.foo'));

  // Custom options
  new Freezeframe({
    selector: '.foo',
    trigger: 'click',
    overlay: true,
    responsive: false,
    warnings: false
  });

  // Also valid syntax
  new Freezeframe('.foo', {
    trigger: 'click',
    overlay: true,
    responsive: false,
    warnings: false
  });
  ```

## Methods

- ### ```start()```

    Start animation, or restarts animation from the first frame if
    the .gif is already animating.

  ```js
  // first, save a reference to your freezeframe instance

  const ff = new Freezeframe({
    trigger: false
  });

  ff.start();
  ```

- ### ```stop()```

    Stops animation.

  ```js
  ff.stop();
  ```

- ### ```toggle()```

    Toggles animation based on its current state.

  ```js
  ff.toggle();
  ```

- ### ```on(event, callback)```

    Add event listeners to a freezeframe instance.

  - event

    <code><b>type:</b> string</code>  
    <code><b>options</b>: start|stop|toggle</code>  

  - callback

    <code><b>type:</b> function</code>  
    <code><b>params</b>:</code>
      - <code><b>items</b>: array&lt;freezeframe&gt; | freezeframe</code>
      - <code><b>isPlaying</b>: boolean</code>

  For example:

  ```js
  ff.on('start', (items) => {
    // do something on start
  };

  ff.on('stop', (items) => {
    // do something on stop
  };

  ff.on('toggle', (items, isPlaying) => {
    if (isPlaying) {
      // do something on start
    } else {
      // do something on stop
    }
  };
  ```
  
  And in TypeScript:

  ```ts
  import { Freeze } from 'freezeframe/types';
  
  ff.on('start', (items: Freeze[]) => {
    // do something on start
  };

  ff.on('stop', (items: Freeze[]) => {
    // do something on stop
  };

  ff.on('toggle', (items: Freeze[], isPlaying: boolean) => {
    if (isPlaying) {
      // do something on start
    } else {
      // do something on stop
    }
  };
  ```

- ### ```destroy()```

    Removes all event listeners, but leaves DOM intact.

    Use if you are concerned about memory leaks on your event listeners.

  ```js
  ff.destroy();
  ```

## Contributing

Assuming you have already read the [instructions](../../README.md#contributing) in the project root:

- First, `cd` into the appropriate package directory

```bash
# start webpack dev server
npm start
```

```bash
# build the project and examples for gh-pages
npm run build
```

```bash
# run unit tests
npm test
```

Then commit your changes and submit your PR for review.

## License

freezeframe.js is released under the terms of the MIT License.

## Thanks

- [Browserstack - Live, Web-Based Browser Testing](https://www.browserstack.com/)
