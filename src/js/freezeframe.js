/*!
 * freezeframe.js v3.0.10
 * MIT License
 */

var freezeframe = (function($) {

  var images, options, is_touch_device;

  //////////////////////////////////////////////////////////////////////////////
  //                                                                          //
  //  Private Methods                                                         //
  //                                                                          //
  //////////////////////////////////////////////////////////////////////////////

  // decorated console.warn message
  var warn = function(_message) {
    console.warn('✨ freezeframe.js ✨ : ' + _message);
  }

  // does freezeframe instance have any captured images?
  var has_images = function() {
    return this.images.length > 0;
  }

  // filter captured images by selector and warn if none found
  var filter = function(_selector, _images) {
    var filtered_images;

    if (_selector != undefined && _images.length > 1) {
      filtered_images = _images.filter($(_selector));
      if (filtered_images.length == 0) {
        warn('no images found for selector "' + _selector + '"');
        return false;
      }
    } else {
      filtered_images = _images;
    }

    return filtered_images;
  }

  // reset .gif to first frame and write to canvas
  var process = function ($_image) {
    var ff = this,
      $canvas = $_image.siblings('canvas'),
      transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend',
      image_width = $_image[0].clientWidth,
      image_height = $_image[0].clientHeight;

    $canvas.attr({
      'width': image_width,
      'height': image_height
    });

    context = $canvas[0].getContext('2d');
    context.drawImage($_image[0], 0, 0, image_width, image_height);

    $canvas.addClass('ff-canvas-ready').on(transitionEnd, function() {
      $(this).off(transitionEnd);
      $_image.addClass('ff-image-ready');

      // remove the loading icon style from the container
      $_image.parent().removeClass('ff-loading-icon');
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  //                                                                          //
  //  Constructor                                                             //
  //                                                                          //
  //////////////////////////////////////////////////////////////////////////////
  function freezeframe(_options) {
    var options;

    // default options
    this.options = {
      selector : '.freezeframe',
      animation_play_duration: 5000,
      non_touch_device_trigger_event: 'hover',
	    overlay: false
    }

    // new selector as string
    options = typeof _options == 'string' ? { 'selector': _options } : _options;

    // new options
    if (options) {
      for (attribute in options) {
        if (attribute in this.options) {
          this.options[attribute] = options[attribute];
        } else {
          warn(attribute + ' not a valid option');
        }
      }
    }

    // is this a touch device?
    this.is_touch_device = ('ontouchstart' in window || 'onmsgesturechange' in window);
  }

  //////////////////////////////////////////////////////////////////////////////
  //                                                                          //
  //  Capture Images                                                          //
  //                                                                          //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.capture = function(_selector) {
    var selector;

    // Passed in string or default string
    if (_selector !== undefined) {
      selector = _selector;
    } else if (this.options.selector !== undefined) {
      selector = this.options.selector;
    } else {
      warn('no selector passed to capture function or set in options');
      return false;
    }

    // Empty jQuery/Zepto object to add into
    if (this.images == undefined) {
      this.images = $();
    }

    // Add new selection, jQuery/Zepto keeps it non redundant
    this.images = this.images.add($('img' + selector));

    // Get non gifs outta there
    for (i = 0; i < this.images.length; i++) {
      if (this.images[i].src.split('.').pop().toLowerCase().substring(0, 3) !== 'gif') {
        this.images.splice(i, 1);
      }
    }

    // If nothing was found, throw a fit
    if (this.images.length == 0) {
      warn("no gifs found for selector '" + selector + "'");
      return false;
    }

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  //                                                                          //
  //  Setup Elements                                                          //
  //                                                                          //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.setup = function(_setupOptions) {
    if (!(_setupOptions == undefined)) {
      var _selector = _setupOptions.selector;
      var _overlay = _setupOptions.overlay;
    }
	
    var ff = this,
      setup_required = this.images.not('.ff-setup'),
      container_classnames = ['ff-container', 'ff-loading-icon'];

    if (!has_images.call(ff)) {
      warn('unable to run setup(), no images captured');
      return this;
    }
    
    if (setup_required.length == 0) {
      warn('unable to run setup(), no images require setup');
      return this;
    }

    filter.call(ff, _selector, setup_required).each(function(e) {
      var $image = $(this);

      $image.addClass('ff-setup ff-image');

      if ($image.hasClass('freezeframe-responsive')) {
        container_classnames.push('ff-responsive');
      }

      $canvas = $('<canvas />', {
        class: 'ff-canvas'
      }).attr({
        width: 0,
        height: 0
      });

      var $group = $image.add($canvas);

      $group.wrapAll(
        $('<div />', {
          class: container_classnames.join(' ')
        })
      );
	  
	    if (ff.options.overlay) {
        $overlay = $('<div />', {
          class: 'ff-overlay'
        }).insertAfter($image);
  	  }
	  
      $canvas.insertBefore($image);

    });

    imagesLoaded(setup_required).on('progress', function(instance, image) {
      process.call(ff, $(image.img));
    });

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  //                                                                          //
  //  Attach Hover / Click Events                                             //
  //                                                                          //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.attach = function(_selector) {
    var ff = this,
      click_timeout,
      images;

    if (!has_images.call(ff)) {
      warn('unable to run attach(), no images captured');
      return this; 
    }

    filter.call(ff, _selector, ff.images).each(function(e) {

      var $image = $(this);
      var $canvas = $(this).siblings('canvas');
      var $overlay = $(this).siblings('.ff-overlay');

      // hover
      if ((!ff.is_touch_device && ff.options.non_touch_device_trigger_event == 'hover')) {

        $image.on('mouseenter', function() {
          if ($image.hasClass('ff-image-ready')) {
            $image.attr('src', $image[0].src);
            $canvas.removeClass('ff-canvas-ready').addClass('ff-canvas-active');
            
            if (ff.options.overlay) {
              $overlay.addClass('ff-overlay-active');
            }
          }
        })

        $image.on('mouseleave', function() {
          if ($image.hasClass('ff-image-ready')) {
            $canvas.removeClass('ff-canvas-active').addClass('ff-canvas-ready');
            if (ff.options.overlay) {
              $overlay.removeClass('ff-overlay-active');
            }
          }
        })
      }

      // click
      if ((!ff.is_touch_device && ff.options.non_touch_device_trigger_event == 'click') || (ff.is_touch_device)) {

        var click_timeout;

        $image.on('click', function() {

          var clicked = $canvas.hasClass('ff-canvas-active');

          if ($image.hasClass('ff-image-ready')) {

            if (clicked) {

              if (ff.options.animation_play_duration != Infinity) {
                clearTimeout(click_timeout);
              }

              $canvas.removeClass('ff-canvas-active').addClass('ff-canvas-ready');

              if (ff.options.overlay) {
                $overlay.removeClass('ff-overlay-active');
              }

            } else {
              $image.attr('src', $image[0].src);
              $canvas.removeClass('ff-canvas-ready').addClass('ff-canvas-active');

              if (ff.options.overlay) {
                $overlay.addClass('ff-overlay-active');
              }

              if (ff.options.animation_play_duration != Infinity) {
                click_timeout = setTimeout(function() {
                  $canvas.removeClass('ff-canvas-active').addClass('ff-canvas-ready');
                }, ff.options.animation_play_duration);
              }
            }
          }
        })
      }
    })

    return this;
  }

  //////////////////////////////////////////////////////////////////////////////
  //                                                                          //
  //  Trigger Animation                                                       //
  //                                                                          //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.trigger = function(_selector) {
    var ff = this,
      errors = 0;

    filter.call(ff, _selector, ff.images).each(function(e) {

      if ($(this).hasClass('ff-image-ready')) {
        $(this).attr('src', $(this)[0].src);
        $(this).siblings('canvas').removeClass('ff-canvas-ready').addClass('ff-canvas-active');
      } else {
        warn('image not done processing ! ' + $(this).attr('src'));
        errors ++;
      }

    });

    return errors == 0;
  }

  //////////////////////////////////////////////////////////////////////////////
  //                                                                          //
  //  Release Animation                                                       //
  //                                                                          //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.release = function(_selector) {
    var ff = this,
      errors = 0;

    filter.call(ff, _selector, ff.images).each(function(e) {
      if ($(this).hasClass('ff-image-ready')) {
        $(this).siblings('canvas').removeClass('ff-canvas-active').addClass('ff-canvas-ready');
      } else {
        warn('image not done processing ! ' + $(this).attr('src'));
        errors ++;
      }
    });

    return errors == 0 ? true : false;
  }

  //////////////////////////////////////////////////////////////////////////////
  //                                                                          //
  //  Freeze Images                                                           //
  //                                                                          //
  //////////////////////////////////////////////////////////////////////////////
  freezeframe.prototype.freeze = function() {
    this.capture().setup().attach(); // ✨ tada ✨
    return this;
  }

  return freezeframe;
})($);

// jQuery/Zepto plugin
$.fn.freezeframe = function(_options) {

  if (this.length == 0) {
    console.warn('✨ freezeframe.js ✨ : no images found for selector ' + this.selector);
    return false;
  }

  var ff = new freezeframe(_options);

  ff.images = this;
  
  var setup = ff.setup();
  
  if(typeof setup.attach !== 'undefined')
  {
      ff.setup().attach();
    
      var self = this;
      var methods = ['trigger', 'release'];
      methods.forEach(function(method) {
        self[method] = function() {
          ff[method](self.selector);
          return self;
        };
      });
  }
  
  return this;
};
