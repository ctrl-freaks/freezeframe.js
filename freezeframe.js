/* -----------------------------------------------------------------------------
 * Freezeframe
 * freezeframe.js v2.0.2
 * 2014 Chris Antonellis
 *
 * Freezeframe.js is a script that automatically pauses animated GIFs and 
 * enables them to start animating on mouse hover.
 *
 * Website: http://freezeframe.chrisantonellis.com/
 * Documentation: http://freezeframe.chrisantonellis.com/documentation/
 * 
 * Licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License
 * http://creativecommons.org/licenses/by-sa/3.0/deed.en_US
 * -------------------------------------------------------------------------- */

FreezeFrame = (function($) {

	var _ff;
	var canvas;
	var context;

	var class_name;
	var trigger_event;
	var support_touch_devices;
	var animation_play_duration;

	var loading_background_color;
	var loading_background_image;
	var loading_background_position;
	var loading_fade_in_speed;

	var animation_icon_image;
	var animation_icon_position;
	var animation_fade_out_speed;

	var is_touch_device;
	var freezeframe_count;

	function FreezeFrame( _options ) {

		_ff = this;

		_options.class_name == null ?
			this.class_name = "freezeframe" : 
			this.class_name = _options.class_name;

		_options.trigger_event == null ? 
			this.trigger_event = "hover" : 
			this.trigger_event = _options.trigger_event.toLowerCase();

		_options.support_touch_devices == null ? 
			this.support_touch_devices = true : 
			this.support_touch_devuces = _options.support_touch_devices.toLowerCase();

		_options.animation_play_duration == null ? 
			this.animation_play_duration = 10000 : 
			this.animation_play_duration = parseInt(_options.animation_play_duration);

		_options.loading_background_color == null ? 
			this.loading_background_color = "#666" : 
			this.loading_background_color = _options.loading_background_color.toLowerCase();

		_options.loading_background_image == null ? 
			this.loading_background_image = "data:image/gif;base64,R0lGODlhEAAQAPIAAGZmZv///4mJidbW1v///8PDw7CwsKampiH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQACgABACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkEAAoAAgAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkEAAoAAwAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkEAAoABAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQACgAFACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQACgAGACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAAKAAcALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" : 
			this.loading_background_image = _options.loading_background_image;

		_options.loading_background_position == null ? 
			this.loading_background_position = "center center" : 
			this.loading_background_position = _options.loading_background_position.toLowerCase();

		_options.animation_icon_image == null ? 
			this.animation_icon_image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAl9JREFUeNrs2s2K2lAUAGATb3TE2Cr+oaJQNFOh1MVsxK0OuJbSdX2V9gG67GqW3RbaB7B9gy7qgKJF8G/EarHVWGMyJj230EXLLITm6q05F44/IVw5X3JPjiGCZVkuJw/R5fCBAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAjwjyMej79MpVKP/hcAwe6boul0+p3P5/vmdruv4evbVqvVdRRALpd7HQqFpn6/XxUEwdI07UZV1ffNZvMzjwDE7gk9Hs8mGAwuYCl8hTNB32630nw+f1IqlRY8QtgOQAjRZVleJxKJ77AcVLptOBwup9PpPR4hbAcQRdGUJOk2HA5riqKokUjEgKK4GY/HKo8QhMGcv4oKIJg0+Xw+r8H7bSaT0XiEICwnhyLoCgQCptfrNSgCjxDkED8ChdGiwSMEOaQ2jxDkGOtuH4jJZHJ/Nps9LRaLi+Vy2WDVUB0FYB+IXq+36ff7P0ajURj2eQbF9EO73W6cFMBdENA8mXQbNFDier0mhULhQaVSeZzNZj+d3Bnwe+i6LkDCAqx9QmMwGJwlk8nzarV6Cf3EDHZ5DvHx5ADuSjwWiz0sl8uX8H9izjLxowLskfgL1okfBYCnxA8KwGPiBwGg9xpWq5XIY+IsAQT6stvt6BGX4Nrt4jFxZgCmaYqGYRDo4nzdbncny3KGx8SZAcCRl6CH9yuKcl6r1S6i0egXHhP/Y53aGfV6/U2n02nA5yuIC7vntzsEBo/KXkG84vaI/12w8Flhhw8EQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEcNr4KcAABsB8S2vxAV8AAAAASUVORK5CYII=" :
			this.animation_icon_image = _options.animation_icon_image;

		_options.animation_icon_position == null ? 
			this.animation_icon_position = "top left" : 
			this.animation_icon_position = _options.animation_icon_position.toLowerCase();

		_options.loading_fade_in_speed == null ? 
			this.loading_fade_in_speed = 500 :
			this.loading_fade_in_speed = parseInt(_options.loading_fade_in_speed);

		_options.animation_fade_out_speed == null ? 
			this.animation_fade_out_speed = 250 : 
			this.animation_fade_out_speed = parseInt(_options.animation_fade_out_speed);

		this.is_touch_device = isMouseEventSupported("ontouchstart");
		this.freezeframe_count = 0;
	};

	/** --------------------------------------------------------------------------
	 * @function .setup()
	 * Sets up the freezeframe instance by adding a canvas element to the 
	 * document and capturing references to the canvas and its 2D context
	 * ------------------------------------------------------------------------ */

	FreezeFrame.prototype.setup = function() {
		$("<canvas>",{id:"freezeframe-canvas"})
			.css("display", "none")
			.prependTo($("body"));
		this.canvas = $("canvas#freezeframe-canvas");
		this.context = this.canvas[0].getContext('2d');
	};

	/** --------------------------------------------------------------------------
	 * .run()
	 * Starts freezeframe processing for each image. Copies the image to 
	 * the freezeframe canvas and converts it to a data url
	 * ------------------------------------------------------------------------ */

	FreezeFrame.prototype.run = function() {
		var images = [];
		var ext;
		var figure_background = _ff.loading_background_color;

		if( _ff.loading_background_image !== false ) {
			figure_background += " url('" + _ff.loading_background_image + "') " +
				_ff.loading_background_position + " no-repeat";
		}

		// Select all images with a class matching the option class_name
		images = $('img[class*="' + _ff.class_name + '"]')
			.not('[class*="' + _ff.class_name + '_done"]');

		// Process each image by resetting the animation sequence, copying to the 
		// canvas, converting to a data url, and attaching that data url to the 
		// image itself as an attribute
		$(images).each(function(index) {
			// Change image class so it won't be reprocessed if .run() is run again
			$(this).removeClass(_ff.class_name).addClass(_ff.class_name + "_done");
			// Set cross-origin to anon to load images from remote services that send 
			// the correct header. Not working correctly, needs more testing
			$(this).crossOrigin = "anonymous";
			// Determine file extension
			ext = $(this)[0].src.split(".");
			ext = ext[ext.length - 1].toLowerCase();
			// Remove non GIF files
			if(ext !== "gif") {
				images.splice(index, 1);
			} else {

				var freezeframe_figure = $("<figure />")
					.attr("class", "freezeframe-container " + _ff.freezeframe_count)
					.css({"display": "inline-block",
						"overflow": "hidden",
						"background": figure_background});

				$(this).css({"opacity": 0,
					"display": "block"})
					.wrap(freezeframe_figure);

				freezeframe_figure = $(this).parent();

				// If an animation icon image is available, attach it
				if(_ff.animation_icon_image !== false) {
					var animation_icon = $("<div />")
						.attr("class", "freezeframe-animation-icon")
						.css({"display": "block",
							"position": "absolute",
							"background": "transparent " + "url('" + _ff.animation_icon_image + "') " +
								_ff.animation_icon_position + " no-repeat",
							"pointer-events": "none",
							"z-index": 100,
							"opacity": 0});

					$(freezeframe_figure).prepend(animation_icon);

					animation_icon = $(this).siblings($(".freezeframe-animation-icon"));
				}

				// Increment counter so each image gets a unique number
				_ff.freezeframe_count++;

				// Create a temporary refernce to the image as non-object to pass to .drawImage
				var _self = this;

				// Using imagesLoaded by Desandro because .load doesn't work on cached images
				$(this).imagesLoaded(function() {

					$(this).off("imagesLoaded");

					_ff.canvas[0].width = $(this)[0].clientWidth;
					_ff.canvas[0].height = $(this)[0].clientHeight;

					$(this).attr("animated", $(this).attr("src"))
						.attr("src", $(this).attr("src"));

					_ff.context.drawImage(_self, 0, 0, $(this)[0].clientWidth, $(this)[0].clientHeight);

					$(this).attr("src", _ff.canvas[0].toDataURL());

					// If an animation icon image is available, show it
					if(_ff.animation_icon_image !== false) {
						$(animation_icon).css({
							"width": parseInt($(this)[0].width),
							"height": parseInt($(this)[0].height)})
							.animate({"opacity": 1}, _ff.loading_fade_in_speed);
					}

					// When fade in sequence is complete, enable interaction
					$(this).animate({"opacity": 1}, _ff.loading_fade_in_speed, function() {

						$(freezeframe_figure).css("background", "url('" + $(this).attr("src") + "')");

						$(this).css("opacity", 0)
							.attr("src", $(this).attr("animated"));

						// Touch Device or Click Event
						if((_ff.support_touch_devices && _ff.is_touch_device) || _ff.trigger_event.toLowerCase() == "click") {

							var stop_animation;
							var animating = false;

							$(this).click(function() {

								// If not currently animating, start animating
								if(!animating) {
									$(this).attr("src", $(this).attr("src"))
										.css("opacity", 1);
									if(_ff.animation_icon_image !== false) {
										$(animation_icon).css("opacity", 0);
									}

									stop_animation = setInterval(function() {
										clearInterval(stop_animation);
										this.animate({"opacity": 0}, _ff.animation_fade_out_speed);
										if(_ff.animation_icon_image !== false) {
											$(animation_icon).animate({"opacity": 1}, _ff.animation_fade_out_speed);
										}
										animating = false;
									}, _ff.animation_play_duration);
									animating = true;

								// If currently animating, stop animating
								} else {
									clearInterval(stop_animation);
									$(this).animate({"opacity": 0}, _ff.animation_fade_out_speed);
									if(_ff.animation_icon_image !== false) {
										$(animation_icon).animate({"opacity": 1}, _ff.animation_fade_out_speed);
									}
									animating = false;
								}
							});

						} else {

							// Hover Event
							$(this).mouseenter(function() {
								$(this).attr("src", $(this).attr("src"))
									.css("opacity", 1);
								if(_ff.animation_icon_image !== false) {
									$(animation_icon).css("opacity", 0);
								}
							});

							$(this).mouseleave(function() {
								$(this).animate({"opacity": 0}, _ff.animation_fade_out_speed);
								if(_ff.animation_icon_image !== false) {
									$(animation_icon).animate({"opacity": 1}, _ff.animation_fade_out_speed);
								}
							});
						}
					});
				});
			}
		});
	};

	return FreezeFrame;
})(jQuery);

/** ----------------------------------------------------------------------------
 * Setup & Run Freezeframe
 * -------------------------------------------------------------------------- */

jQuery(document).ready(function($) {
	typeof(freezeframe_options) == 'undefined' ? freezeframe_options = {} : null;
	freezeframe = new FreezeFrame(freezeframe_options);
	freezeframe.setup();
	freezeframe.run();
});

/** ----------------------------------------------------------------------------
 * jQuery imagesLoaded plugin v2.1.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 * -------------------------------------------------------------------------- */

;(function($, undefined) {
'use strict';
var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
$.fn.imagesLoaded = function( callback ) {
	var $this = this,
		deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
		hasNotify = $.isFunction(deferred.notify),
		$images = $this.find('img').add( $this.filter('img') ),
		loaded = [],
		proper = [],
		broken = [];
	if ($.isPlainObject(callback)) {
		$.each(callback, function (key, value) {
			if (key === 'callback') {
				callback = value;
			} else if (deferred) {
				deferred[key](value);
			}
		});
	}
	function doneLoading() {
		var $proper = $(proper),
			$broken = $(broken);
		if ( deferred ) {
			if ( broken.length ) {
				deferred.reject( $images, $proper, $broken );
			} else {
				deferred.resolve( $images );
			}
		}
		if ( $.isFunction( callback ) ) {
			callback.call( $this, $images, $proper, $broken );
		}
	}
	function imgLoadedHandler( event ) {
		imgLoaded( event.target, event.type === 'error' );
	}
	function imgLoaded( img, isBroken ) {
		if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
			return;
		}
		loaded.push( img );
		if ( isBroken ) {
			broken.push( img );
		} else {
			proper.push( img );
		}
		$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );
		if ( hasNotify ) {
			deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
		}
		if ( $images.length === loaded.length ) {
			setTimeout( doneLoading );
			$images.unbind( '.imagesLoaded', imgLoadedHandler );
		}
	}
	if ( !$images.length ) {
		doneLoading();
	} else {
		$images.bind( 'load.imagesLoaded error.imagesLoaded', imgLoadedHandler )
		.each( function( i, el ) {
			var src = el.src;
			var cached = $.data( el, 'imagesLoaded' );
			if ( cached && cached.src === src ) {
				imgLoaded( el, cached.isBroken );
				return;
			}
			if ( el.complete && el.naturalWidth !== undefined ) {
				imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
				return;
			}
			if ( el.readyState || el.complete ) {
				el.src = BLANK;
				el.src = src;
			}
		});
	}
	return deferred ? deferred.promise( $this ) : $this;
};
})(jQuery);

/** ----------------------------------------------------------------------------
 * isMouseEventSupported by kangax
 * http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
 * -------------------------------------------------------------------------- */

function isMouseEventSupported(eventName) {
  var el = document.createElement('div');
  eventName = 'on' + eventName;
  var isSupported = (eventName in el);
  if (!isSupported) {
    el.setAttribute(eventName, 'return;');
    isSupported = typeof el[eventName] == 'function';
  }
  el = null;
  return isSupported;
}
