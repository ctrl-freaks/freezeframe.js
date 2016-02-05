## freezeframe.js

freezeframe.js is a script that pauses animated .gifs and enables them to start animation 
automatically on mouse hover / mouse click / touch event, or manually with trigger / release 
functions. it also supports responsive images.

## Examples
[http://ctrl-freaks.github.io/freezeframe.js/](http://ctrl-freaks.github.io/freezeframe.js/)

## Basic Usage

1. Include the js and css from **/build**  

    ```
  <link rel="stylesheet" href="freezeframe_styles.min.css">
  <script src="freezeframe.min.js"></script>
    ```
    If you do not use a packaged version the following dependencies are required  
    ( can be found in **/src/js/vendor** ):
    * imagesLoaded Packaged v4.0.0 ( [https://github.com/desandro/imagesloaded](https://github.com/desandro/imagesloaded) )
    * jQuery

2. Add **freezeframe** as a class name on the .gifs you want processed  

    ```
  <img class="freezeframe" src="image.gif" /> 
    ```
  Add **freezeframe-responsive** as an additional class name to make the .gif responsive
    ```
  <img class="freezeframe freezeframe-responsive" src="image.gif" /> 
    ```

3. ✨ freeze those frames ✨

    ```javascript
  $(function() {
    ff = new freezeframe().freeze();
  })
    ```

## Advanced Usage

freezeframe.js exposes public methods to allow for more custom integration. These 
methods are described in detail in the [Function Reference](#function_reference)

You can manually trigger freezeframe functions to do whatever you want in whatever order you want.

You have the option of manually going through the steps with freezeframe to setup, capture images, 
process images, attach event handlers, and trigger

Capture  and manually trigger / release animation
```javascript
logo = new freezeframe('#logo'); // setup freezeframe instance with custom selector

logo.capture(); // capture images by selector
logo.setup();   // setup helper elements
logo.process(); // process images so they are paused
logo.trigger(); // trigger animation
logo.release(); // release animation
```

## Options Reference

Options can be passed to a freezeframe instance on creation in the form of an 
***object*** or a ***string***. Strings will be interpreted as the ***selector*** option.  

```javascript
// object as options
ff = new freezeframe({
  'selector': '.my_class',
  'animation_play_duration': 3000,
  'non_touch_device_trigger_event': 'hover'
})

// string as selector option
ff = new freezeframe('.my_class')
```

```selector``` ***string***  
    this is something something
    show default value

```animation_play_duration``` ***integer***  
    this is something something
    show default value

```non_touch_device_trigger_event``` ***string***  
    this is something something
    show default value

## Function Reference <a name="function_reference"></a>

these are the freezeframe public methods and how you can use them

* **freezeframe(** selector **)**  
    creates a new freezeframe object instance with image selection.  
    can be passed options object or string to act as new selector.

* **capture(** selector **)**  
    captures images by jquery reference to be operated on by freezeframe. if run 
    without selector argument, selector in freezeframe options will be used. can 
    be run multiple times with different selector to group many images, 
    unrelated by selector, in one freezeframe instance

* **setup()**   
    creates and inserts support elements.  
    before:

     ```html
  <img class="freezeframe" src="my_image.gif" />
     ```  

     after:
     ```
  <div class="ff-container">
    <canvas class="ff-canvas ff-canvas-ready" width="400" height="250"></canvas>
    <img class="freezeframe ff-setup ff-image ff-image-ready" src="my_image.gif">
  </div>
     ```

* **attach(** selector **)**  
    attaches hover / click / touch events based on freezeframe options. can be filtered by selector.

* **process(** selector **)**  
    attaches imagesloaded event listener to image and processes / pauses image 
    when ready.

* **trigger(** selector **)**  
    triggers image animation by selector. must be a part of existing image 
    selection in freezeframe instance.

* **release(** selector **)**  
    releases ( stops ) image animation by selector. must be part of existing image selection 
    in freezeframe instance.

## Development Environment
* use package.json to install npm stuff
* list gulp commands to build the project
* cleanup gulpfile