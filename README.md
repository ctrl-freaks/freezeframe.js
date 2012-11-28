freezeframe.js
==============

freezeframe.js is a script that automatically pauses animated GIFs and enables them to start animating on mouse hover.

Installation
============

1. freezeframe.js requires the jQuery framework. Include the latest version of jQuery in your page header before including freezeframe.js.

HTML Header
-----------
<script type="text/javascript" src="jquery.js"></script>

(Note: I recommend using the latest version of jQuery from Google Hosted Libraries.)

2. Download the current version of freezeframe.js.

3. Upload freezeframe.js to your webserver.

4. Include the following code in your HTML Header. This will include the script and set it to run on page load. Optionally, you can customize variables that determine how freezeframe functions and looks in the header.

HTML Header
-----------
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="freezeframe.js"></script>
<script type="text/javascript">
	ff = new FreezeFrame();
</script>

HTML Header (Optional)
----------------------
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript" src="freezeframe.js"></script>
		<script type="text/javascript">
		$(document).ready(function(){
			ff = new FreezeFrame({
				speed_fade_in	: 1000,
				speed_fade_out	: 1000,
				loading_bg_style: "url('/img/loading.gif') no-repeat #FFF"
			});
		});
		</script>

(Note: The path to freezeframe.js may need to be modified depending on where you choose to upoad the script.)

5. Add the boolean attribute freezeframe to each image you want modified.

### HTML
		<img src="whatever.gif" freezeframe />

To add CSS styling to the image, target the figure tag with the class freezeframe-container wrapped around the image and apply the styles to that element.

### CSS
		figure.freezeframe-container {
			border-radius: 3px;
		}

Use with Infinite Scroll
------------------------

Follow the steps above, and include freezeframe.run() as a new content callback function.

### JS
		$('#content').infinitescroll({
		  option: "value",
		  option: "value",
		  ...
		},function(elements){
			freezeframe.run();
		});

Features
========

+ Easy to install and implement.
+ Only 4kb in size, 3kb when minified.
+ Averages 18ms per image, or 1 second of additional page load per 55 GIFs at 0.5MB each.

Attribution
===========
While not required, I would appreciate a link back to my website if freezeframe is included in your work. Here is a suggestion:

### HTML
		Using <a href="http://freezeframe.chrisantonellis.com">FreezeFrame</a>
		 by <a href="http://www.chrisantonellis.com">Chris Antonellis</a>
		This could be included in the footer, about page, readme file or not at all.

About
=====
freezeframe.js was written by Chris Antonellis, November 2012 and is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License. You can visit my personal website at http://www.chrisantonellis.com and contact me via email at christopher.antonellis@gmail.com.