# Freezeframe.js

[![npm version](https://badge.fury.io/js/freezeframe.svg)](https://badge.fury.io/js/freezeframe)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Freezeframe.js is a library that pauses animated .gifs and enables them to
animate on mouse hover / mouse click / touch event, or manually via class methods.

Version 4.x no longer requires or supports jQuery. If you want to use freezeframe as a jQuery
plugin, check out [freezeframe v3.0.10](https://github.com/ctrl-freaks/freezeframe.js/tree/archived/3.0.10).

- [Freezeframe.js](#Freezeframejs)
  - [Examples](#Examples)
  - [Installation](#Installation)
    - [npm](#npm)
    - [yarn](#yarn)
    - [CDN](#CDN)
  - [Setup](#Setup)
  - [Usage](#Usage)
  - [Advanced Usage](#Advanced-Usage)
  - [Options Reference](#Options-Reference)
  - [Function Reference](#Function-Reference)
  - [License](#License)
  - [Thanks](#Thanks)

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
( You can optionally specify a custom selector as shown in [Advanced Usage](#advanced_usage). )

```html
<img class="freezeframe" src="image.gif" />
```

Add **freezeframe-responsive** as an additional class name to make the .gif responsive.

```html
<img class="freezeframe freezeframe-responsive" src="image.gif" />
```

## Usage

If your environment supports commonjs modules (`require`) or es6 module imports (`import`), you can import freezeframe like so:

```js
// es6 modules
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
described in detail in the [Function Reference](#function_reference).

*Example: trigger logo .gif and manually trigger / release animation:*

```js
// setup freezeframe instance with custom selector and options

const logo = new Freezeframe('#logo', {
  trigger: false
});

logo.start(); // start animation
logo.stop(); // stop animation
```

## Options Reference

<!-- Options can be passed to a freezeframe instance on creation in the form of an 
**object** or a **string**. Strings will be interpreted as the **selector** option.  

```javascript
// Options passed to jQuery plugin
$('.my_class').freezeframe({'animation_play_duration': 2500})

// String as selector option
var ff = new freezeframe('.my_class');

// Object as options
var ff = new freezeframe({
  'selector': '.my_class',
  'animation_play_duration': 3000,
  'non_touch_device_trigger_event': 'hover'
})
``` -->

- ### ```selector```

    <code><b>type:</b> string|DOM object</code>  
    <code><b>default</b>: ".freezeframe"</code>  

    The selector used to search for .gifs when the ```trigger()``` function is run.

<!-- * ### ```animation_play_duration```  

    <code><b>type:</b> integer</code>  
    <code><b>default</b>: 5000</code>  
    <code><b>options</b>: Infinity</code>  

    The number of milliseconds a .gif will animate for when triggered by click / 
    touch event.  
    Use ```Infinity``` to make the .gif play *forever.* -->

- ### ```trigger```  

    <code><b>type:</b> string | boolean</code>  
    <code><b>default</b>: "hover"</code>  
    <code><b>options</b>: "hover", "click", false</code>  

    The trigger event to start animation for non-touch devices.

## Function Reference

- ### ```Freezeframe(options)```  

    Create a new freezeframe object instance.  
    Can be passed options. Strings will be interpreted as the **selector** option.

  ```js
  // Default options
  new Freezeframe();

  // String as selector option
  new Freezeframe('.my-class');

  // Object as options
  const ff = new Freezeframe({
    'selector': '.my-class',
    'trigger': 'hover'
  })
  ```

<!-- * ### ```trigger(selector)```

    trigger images to be paused by freezeframe. If run without selector
    argument, selector in freezeframe options will be used. Can be run multiple
    times with different selector to group many images, unrelated by selector,
    in one freezeframe instance.

  ```js
  ff.trigger();               // use selector in freezeframe options
  ff.trigger('.my_class');    // use custom selector
  ``` -->

<!-- * ### ```setup()```

    Creates and inserts support elements. Can be filtered by selector.  

  ```js
  ff.setup();                 // all images in freezeframe instance
  ff.setup('.my_class');      // filter images by selector
  ```

    HTML image before:

  ```html
  <img class="freezeframe" src="my_image.gif" />
  ```  

  ...and after:

  ```html
  <div class="ff-container">
    <canvas class="ff-canvas ff-canvas-ready" width="400" height="250"></canvas>
    <img class="freezeframe ff-setup ff-image ff-image-ready" src="my_image.gif">
  </div>
  ``` -->

<!-- * ### ```attach(selector)```
  
    Attaches hover / click / touch events based on freezeframe options. Can be filtered by selector.

  ```js
  ff.attach();                // all images in freezeframe instance
  ff.attach('.my_class');     // filter images by selector
  ``` -->

- ### ```start(selector)```

    Start animation, or restarts animation from the first frame if
    the .gif is already animating. Can be filtered by selector.

  ```js
  ff.start();
  ```

- ### ```stop(selector)```

    Stops animation.

  ```js
  ff.stop();
  ```

## License

freezeframe.js is released under the terms of the MIT License.

## Thanks

- [Browserstack - Live, Web-Based Browser Testing](https://www.browserstack.com/)
