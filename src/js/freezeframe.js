
var freezeframe = (function($) {

	var images;
	var options;
	var is_touch_device;

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
			non_touch_device_trigger_event: 'hover'
		}

		// new selector as string
		options = typeof _options == 'string' ? { 'selector': _options } : _options;

		// new options
		if(options) {
			for (attribute in options) {
				if (attribute in this.options) {
					this.options[attribute] = options[attribute]
				} else {
					console.warn('freezeframe : "' + attribute + '" not a valid option', options);
				}
			}
		}

		// is this a touch device?
		this.is_touch_device = ('ontouchstart' in window || 'onmsgesturechange' in window);

		return this;
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Capture Images                                                          //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////
	// .freezeframe set by default, case where neither are set doesn't make sense
	freezeframe.prototype.capture = function(_selector) {
		var selector;

		// passed in string or default string
		if(_selector !== undefined) {
			selector = _selector;
		} else if (this.options.selector !== undefined) {
			selector = this.options.selector;
		} else {
			console.warn('freezeframe : no selector passed to capture function or set in freezeframe options')
			return false;
		}

		// empty jquery object to add into
		if(this.images == undefined) {
			this.images = $();
		}

		// add new selection, jquery keeps it non redundant
		this.images = this.images.add( $('img' + selector) );

		// get non gifs outta there
		for (i = 0; i < this.images.length; i++) {
			if (this.images[i].src.split('.').pop().toLowerCase().substring(0, 3) !== 'gif') {
				this.images.splice(i, 1);
			}
		}

		// if nothing was found, throw a fit
		if(this.images.length == 0) {
			console.warn('freezeframe : no gifs found for selector "' + selector + '"');
			return false;
		}

		return this;
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Setup Elements                                                          //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////
	// dont run if no images found
	freezeframe.prototype.setup = function() {
		var ff = this,
			setup_required = this.images.not('.freezeframe_setup');

		setup_required.each(function(e) {
			var $image = $(this);

			$image.addClass('freezeframe_setup freezeframe_image');

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

		imagesLoaded(setup_required).on('progress', function(instance, image) {
			ff.process($(image.img));
		});

		return this;
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Process Images                                                          //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////
	// dont run if no images found
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
			// ff.attach($_image, $canvas);
		})

		return this;
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Filter Images by Selector                                               //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////
	freezeframe.prototype.filter = function(_selector) {
		var images;

		if(_selector != undefined && this.images.length > 1) {
			images = this.images.filter( $(_selector) );
			if (images.length == 0) {
				console.warn('freezeframe : no gifs found for selector "' + _selector + '"')
				return false;
			}
		} else {
			images = this.images;
		}

		return images;
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Attach Hover / Click Events                                             //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////
	// dont run if no images found
	freezeframe.prototype.attach = function(_selector) {
		var ff, click_timeout, images;

		ff = this;

		this.filter(_selector).each(function(e) {

			$image = $(this);
			$canvas = $(this).siblings('canvas');

			// hover
			if((!ff.is_touch_device && ff.options.non_touch_device_trigger_event == 'hover') || (ff.is_touch_device)) {

				$canvas.mouseenter(function() {
					(function() {
						$image.attr('src', $image[0].src);
						$canvas.removeClass('ready').addClass('active');
					})();
				})

				$canvas.mouseleave(function() {
					(function() {
						$canvas.removeClass('active').addClass('ready');
					})();
				})
			}

			// click
			if((!ff.is_touch_device && ff.options.non_touch_device_trigger_event == 'click') || (ff.is_touch_device)) {

				$canvas.click(function() {

					(function() {

						var clicked = $canvas.hasClass('active');

						if(clicked) {
							clearTimeout(click_timeout);
							$canvas.removeClass('active').addClass('ready');

						} else {
							$image.attr('src', $image[0].src);
							$canvas.removeClass('ready').addClass('active');

							click_timeout = setTimeout(function() {
								$canvas.removeClass('active').addClass('ready');
							}, ff.options.animation_play_duration);

						}
					})();
				})
			}

		})

		return this;
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Freeze Images                                                           //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////
	freezeframe.prototype.freeze = function() {
		this.capture().setup().attach(); // ✨tada✨
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Trigger Animation                                                       //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////
	// dont run if no images found
	// return false if image not done processing yet
	freezeframe.prototype.trigger = function(_selector) {

		this.filter(_selector).each(function(e) {
			$(this).attr('src', $(this)[0].src);
			$(this).siblings('canvas').removeClass('ready').addClass('active');
		});
	}

	//////////////////////////////////////////////////////////////////////////////
	//                                                                          //
	//  Release Animation                                                       //
	//                                                                          //
	//////////////////////////////////////////////////////////////////////////////
	// dont run if no images found
	// return false if image not done processing yet
	freezeframe.prototype.release = function(_selector) {

		this.filter(_selector).each(function(e) {
			$(this).siblings('canvas').removeClass('active').addClass('ready');
		});
	}

	return freezeframe;
})(jQuery);