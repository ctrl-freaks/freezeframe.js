## freezeframe.js
---
freezeframe.js is a script that automatically pauses animated .gifs and enables them to start animation on mouse hover or click.

----
## Usage

Include the script and stylesheet in your header:

    <script type="text/javascript" src="freezeframe.js"></script>
    <link rel="stylesheet" href="freezeframe_styles.css">
> If you do not use the packaged version, the following dependencies are also required
>
* jQuery
* imagesLoaded

Add **freezeframe** as a class name on the images you want processed:

    <img class="freezeframe" src="image.gif" />
> Non **.gif** files will be skipped

If you need to process more / new images, run the capture function from the freezeframe global:

    ff.capture();

Example use with [Infinite-Scroll](http://www.infinite-scroll.com/):

    $('#content').infinitescroll({
      option: "value",
      option: "value",
      ...
    },function(elements){
      ff.capture();
    });


---
## markdown quick reference
# headers

*emphasis*

**strong**

* list

>block quote

    code (4 spaces indent)
[links](http://wikipedia.org)

----
## changelog
* 17-Feb-2013 re-design