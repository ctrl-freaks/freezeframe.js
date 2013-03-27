freezeframe.js
==============
v1.2.0

---------

Documentation
=============
http://freezeframe.chrisantonellis.com/documentation/

Website
=======
http://freezeframe.chrisantonellis.com

Changelog
=========
3/27/2013 v1.2.0 Bugfixes and new features, including:
 - Fixed bug with touch device detection, now using isMouseEventSupported by kangax
   + http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
 - Fixed bug with loading cached images and .load not firing corectly, now using
   jQuery imagesloaded plugin v2.1.1 by desandro
   + http://github.com/desandro/imagesloaded
 - Fixed bug with dynamically resized images
 - Adjusted fade speeds to be more 'snappy'

12/07/2012 v1.1.0 Many new features, including:
 - Created more specific variables for loading background style
 - Added icon to denote animation and supporting variables
 - Added support for touch devices (click to toggle, animation duration, etc)
 - Added false functionality to loading and animation icons to disable

11/30/2012 v1.0.2 Fixed filename and version syntax

11/28/2012 v1.0.1 Fixed image positioning bug

11/25/2012 v1.0.0 Initial Release