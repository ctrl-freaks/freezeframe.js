## freezeframe.js

freezeframe.js is a script that pauses animated .gifs and enables them to start animation 
automatically on mouse hover / mouse click / touch event, or manually withg trigger / release 
functions. it also supports responsive images.

## Examples
[http://ctrl-freaks.github.io/freezeframe.js/](http://ctrl-freaks.github.io/freezeframe.js/)

## Basic Usage

1. Include the js and css from **/build**  

    ```html
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

* ```freezeframe()```
    creates a new freezeframe object with image selection. can be passed options 
    object or string to act as new selector.

* ```capture()```

* ```setup()```

* ```process()```

* ```filter()```

* ```trigger()```

* ```release()```

## Development Environment
* use package.json to install npm stuff
* list gulp commands to build the project
* cleanup gulpfile