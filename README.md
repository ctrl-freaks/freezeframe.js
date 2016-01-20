##freezeframe.js 3.0.1
freezeframe.js is a script that automatically pauses animated .gifs and enables them to start animation on mouse hover or click

##usage
Get the CSS from **/build/css** and include on your page

    <link rel="stylesheet" href="freezeframe_styles.css">

Get the JS from **/build/js** and include on your page

    <link rel="stylesheet" href="freezeframe.pkgd.min.js">
> If you do not use a packaged version the following dependencies are required (can be found in **/src/js/vendor**)
> * imagesLoaded Packaged v4.0.0 ([https://github.com/desandro/imagesloaded](https://github.com/desandro/imagesloaded))
> * jQuery v2.1.4

Add **freezeframe** as a class name on the images you want processed

    <img class="freezeframe" src="image.gif" /> 

Freeze those .gifs!

    ff = new freezeframe().freeze();

##options reference

    selector
    animation_play_duration
    non_touch_device_trigger_event

##function reference

    freezeframe()
    capture()
    setup()
    process()
    filter()
    trigger()
    release()