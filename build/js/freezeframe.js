
// capture new collection of images
// images = new freezeframe('.freezeframe');
// has to happen on page load...

// process images, add canvas / container div
// images.process();
// has to happen on page load...

// attach event handlers for hover / click based on variables
// images.attach();

// capture and process one image
// logo = new freezeframe('#my_logo');
// logo.process();

// trigger and stop animation with custom handler
// my_event_handler = function() {
// 	logo.trigger();

// 	setTimeout(function() {
// 		logo.release();
// 	}, 500)
// }

var freezeframe = (function($) {

	var images;
	var image_count;

	var options;
	var is_touch_device;

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Constructor                                                             //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////

	function freezeframe(_selector, _options) {

		this.is_touch_device = ('ontouchstart' in window || 'onmsgesturechange' in window);

		this.options = {
			animation_play_duration: 5000,
			non_touch_device_trigger_event: 'hover'
		}

		if(_options) {
			if(_options.constructor === Object) {
				for (attribute in _options) {
					if (attribute in this.options) {
						this.options[attribute] = _options[attribute]
					} else {
						console.warn('freezeframe : "' + attribute + '" not a valid option', _options);
					}
				}
			} else {
				console.warn('freezeframe : options submitted not an object', _options);
			}
		}

		// this.capture();
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Capture Images                                                          //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////

	freezeframe.prototype.capture = function() {

		this.images = $('img[class*="' + this.options.class_name + '"]').not('[class*="' + this.options.class_name + '_done"]');

		for (i = 0; i < this.images.length; i++) {
			if (this.images[i].src.split('.').pop().toLowerCase().substring(0, 3) !== 'gif') {
				this.images.splice(i, 1);
			}
		}

		// this.setup();
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Setup Elements                                                          //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////

	freezeframe.prototype.setup = function() {
		var ff = this;

		this.images.each(function(e) {
			var $image = $(this);

			// check for freezeframe-processed data attribute and don't change class
			$image.removeClass(ff.options.class_name);
			$image.addClass(ff.options.class_name + '_done freezeframe_image');

			$canvas = $('<canvas />', {
				class: 'freezeframe_canvas'
			}).attr({
				width: 0,
				height: 0
			}).insertBefore($image);

			$image.add($canvas).wrapAll(
				$('<div />', {
					class: 'freezeframe_container'
				})
			);
		});

		// imagesLoaded(this.images).on('progress', function(instance, image) {
		// 	ff.process($(image.img));
		// });
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Process Images                                                          //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////

	freezeframe.prototype.process = function($_image) {
		var ff = this,
			$canvas = $_image.siblings('canvas'),
			transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';

		$canvas.css({
			'margin-right': '-' + $_image[0].clientWidth + 'px',
		}).attr({
			'width': $_image[0].clientWidth,
			'height': $_image[0].clientHeight
		});

		context = $canvas[0].getContext('2d');
		context.mozImageSmoothingEnabled = false;
		context.imageSmoothingEnabled = false;
		context.drawImage($_image[0], 0, 0, $_image[0].clientWidth, $_image[0].clientHeight);

		$canvas.addClass('ready').on(transitionEnd, function() {
			$(this).off(transitionEnd);
			$_image.addClass('ready');
			ff.attach($_image, $canvas);
		})
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Attach Hover / Click Events                                             //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////

	freezeframe.prototype.attach = function($_image, $_canvas) {
		var ff = this,
			click_timeout;

		if((!this.is_touch_device && this.options.non_touch_device_trigger_event == 'hover') ||
			 (this.is_touch_device)) {

			$_canvas.mouseenter(function() {
				(function() {
					$_image.attr('src', $_image[0].src);
					$_canvas.removeClass('ready').addClass('active');
				})();
			})

			$_canvas.mouseleave(function() {
				(function() {
					$_canvas.removeClass('active').addClass('ready');
				})();
			})

		}

		if((!this.is_touch_device && this.options.non_touch_device_trigger_event == 'click') ||
			 (this.is_touch_device)) {

			$_canvas.click(function() {

				(function() {

					var clicked = $_canvas.hasClass('active');

					if(clicked) {
						clearTimeout(click_timeout);
						$_canvas.removeClass('active').addClass('ready');

					} else {
						$_image.attr('src', $_image[0].src);
						$_canvas.removeClass('ready').addClass('active');

						click_timeout = setTimeout(function() {
							$_canvas.removeClass('active').addClass('ready');
						}, ff.options.animation_play_duration);

					}
				})();

			})

		}
	}

	return freezeframe;
})(jQuery);

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Run on Page Load                                                          //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

$(function() {
	ff = freezeframe();
});
