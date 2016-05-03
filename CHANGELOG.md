
# Change Log
All notable changes to this project will be documented in this file.  
This project adheres to [Semantic Versioning](http://semver.org/).

## [3.0.8] - 2016-05-03
### Added
- Semver versioning re-introduced
- Changelog updated to match format propsed by [http://keepachangelog.com/](http://keepachangelog.com/)

## [3.0.7] - 2016-04-27
### Fixed
- Core methods are now exposed to the jQuery object

## [3.0.6] - 2016-04-11
### Changed
- Attribution-ShareAlike 3.0 to MIT License

## [3.0.5] - 2016-03-17
### Added
- Thanks to [Browserstack](http://www.browserstack.com/) to the readme for their sponshorship!

## [3.0.4] - 2016-02-11
### Added
- Infinity as a value for animation duration

## [3.0.3] - 2016-02-07
### Added
- Private methods to protect some parts the user shouldnt be touching
### Fixed
- Trigger / release functions so they don't fire if the selector doesn't match 
any captured images

## [3.0.2] - 2016-02-01
### Added
- Responsive image support

## [3.0.1] - 2016-01-23
### Fixed
- Documentation updated and general code cleanup

## [3.0.0] - 2016-01-09
### Added
- Totally new code! Complete rewrite
### Removed
- All the old code!
### Fixed
- Broke the script down into smaller functions
- Simplified input options

## [2.0.4] - 2015-01-15
### Fixed
- Added '?' to extension when filtering out non .gif files to allow for images 
with file extensions that prevent caching such as my_image.gif?2384792384723

## [2.0.3] - 2014-09-10
### Fixed
- Typo in support_touch_devices variable

## [2.0.2] - 2014-08-29
### Added
- Bower.json file

## [2.0.1] - 2014-02-09
### Fixed
- More jQuery no conflict issues

## [2.0.1] - 2014-01-07
### Fixed
- Bug wth selecting images, number of classnames is no longer an issue

## [2.0.0] - 2014-30-1
### Added
- Attribution-ShareAlike 3.0 License
### Changed
- Boolean ```freezeframe``` attribute to classname
### Removed
- Broken debug functions and variables
- Ability to create freezeframe instance yourself, instead freezeframe just 
runs on page load

## [1.2.1] - 2013-08-17
### Added
- Cross origin image support

## [1.2.0] - 2013-03-27
### Fixed
- Bug with touch device detection
- Bug with jQuery .load not firing correctly for cached images
- Bug with jQuery conflicts
- Bug with dynamically resized images

### Added
- Using [isMouseEventSupported by kangax](http://perfectionkills.com/detecting-event-support-without-browser-sniffing/) 
for feature testing
- Using [imagesLoaded by desandro](https://github.com/desandro/imagesloaded)

## [1.1.0] - 2012-12-07
### Added
- Icon to represent animation and supporting variables
- Support for touch devices and supporting variables
- Ability to disable loading and animation icons

### Changed
- Variables for loading background style

## [1.0.2] - 2012-11-30
### Fixed
- Filename and version syntax

## [1.0.1] - 2012-11-28
### Fixed
- Image positioning bug

## [1.0.0] - 2012-11-25
### Added
- Initial release