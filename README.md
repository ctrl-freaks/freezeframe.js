freezeframe.js
==============
v2.0.2

Documentation
=============
http://freezeframe.chrisantonellis.com/documentation/

Website
=======
http://freezeframe.chrisantonellis.com

Changelog
=========
02/09/2014 v2.0.2 Bugfix
- Added jQuery noconflict stuff

02/07/2014 v2.0.1 Bugfix
- Fixed bug with selecting images, number of classnames now not an issue

01/30/2014 v2.0.0 Overhaul
- Added license text to readme
- Removed boolean attribute, instead captures images based on class name and class name can be changed via option
- Cleaned up bracketing and comments
- Removed broken debug functions / variables
- Removed requirement to create instance of freezeframe object yourself, instead just runs on page load by just including the script

03/28/2013 v1.2.1 Bugfix
- Fixed bug with jquery conflicts on websites using a bunch of other js

03/27/2013 v1.2.0 Bugfixes and new features
- Fixed bug with touch device detection, now using isMouseEventSupported by kangax
- http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
- Fixed bug with loading cached images and .load not firing corectly, now using jQuery imagesloaded plugin v2.1.1 by desandro
- http://github.com/desandro/imagesloaded
- Fixed bug with dynamically resized images

12/07/2012 v1.1.0 New features
- Created more specific variables for loading background style
- Added icon to denote animation and supporting variables
- Added support for touch devices (click to toggle, animation duration, etc)
- Added false functionality to loading and animation icons to disable

11/30/2012 v1.0.2 Bugfix
- Fixed filename and version syntax

11/28/2012 v1.0.1 Bugfix
- Fixed image positioning bug

11/25/2012 v1.0.0 Initial Release

License
=======
This work is licensed under the Creative Commons Attribution-ShareAlike 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-sa/3.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
