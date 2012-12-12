/*
--------------
freezeframe.js
--------------
v1.1.0

Licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License
http://creativecommons.org/licenses/by-sa/3.0/deed.en_US

2012 Chris Antonellis
http://www.chrisantonellis.com
https://github.com/chrisantonellis/freezeframe
Documentation: http://freezeframe.chrisantonellis.com

---------
Changelog
---------
12/07/2012 v1.1.0 Many new features, including:
	- Created more specific variables for loading background style
	- Added icon to denote animation and supporting variables
	- Added support for touch devices (click to toggle, animation duration, etc)
	- Added false functionality to loading and animation icons to disable
11/30/2012 v1.0.2 Fixed filename and version syntax
11/28/2012 v1.0.1 Fixed image positioning bug
11/25/2012 v1.0.0 Initial Release
*/

FreezeFrame = (function()
{
	var _ff;
	var canvas;
	var context;

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

	function FreezeFrame(_options)
	{
		_ff = this;

		_options == null ? _options = {} : null;

		_options.debug == null ?
			this.debug = false : 
			this.debug = _options.debug;

		_options.trigger_event == null ? 
			this.trigger_event = "hover" : 
			this.trigger_event = _options.trigger_event;

		_options.support_touch_devices == null ? 
			this.support_touch_devices = true : 
			this.support_touch_devuces = _options.support_touch_devices;

		_options.animation_play_duration == null ? 
			this.animation_play_duration = 10000 : 
			this.animation_play_duration = parseInt(_options.animation_play_duration);

		_options.loading_background_color == null ? 
			this.loading_background_color = "#666" : 
			this.loading_background_color = _options.loading_background_color;

		_options.loading_background_image == null ? 
			this.loading_background_image = "data:image/gif;base64,R0lGODlhEAAQAPIAAGZmZv///4mJidbW1v///8PDw7CwsKampiH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQACgABACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkEAAoAAgAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkEAAoAAwAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkEAAoABAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQACgAFACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQACgAGACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAAKAAcALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" : 
			this.loading_background_image = _options.loading_background_image;

		_options.loading_background_position == null ? 
			this.loading_background_position = "center center" : 
			this.loading_background_position = _options.loading_background_position;

		_options.animation_icon_image == null ? 
			this.animation_icon_image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAl9JREFUeNrs2s2K2lAUAGATb3TE2Cr+oaJQNFOh1MVsxK0OuJbSdX2V9gG67GqW3RbaB7B9gy7qgKJF8G/EarHVWGMyJj230EXLLITm6q05F44/IVw5X3JPjiGCZVkuJw/R5fCBAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAjwjyMej79MpVKP/hcAwe6boul0+p3P5/vmdruv4evbVqvVdRRALpd7HQqFpn6/XxUEwdI07UZV1ffNZvMzjwDE7gk9Hs8mGAwuYCl8hTNB32630nw+f1IqlRY8QtgOQAjRZVleJxKJ77AcVLptOBwup9PpPR4hbAcQRdGUJOk2HA5riqKokUjEgKK4GY/HKo8QhMGcv4oKIJg0+Xw+r8H7bSaT0XiEICwnhyLoCgQCptfrNSgCjxDkED8ChdGiwSMEOaQ2jxDkGOtuH4jJZHJ/Nps9LRaLi+Vy2WDVUB0FYB+IXq+36ff7P0ajURj2eQbF9EO73W6cFMBdENA8mXQbNFDier0mhULhQaVSeZzNZj+d3Bnwe+i6LkDCAqx9QmMwGJwlk8nzarV6Cf3EDHZ5DvHx5ADuSjwWiz0sl8uX8H9izjLxowLskfgL1okfBYCnxA8KwGPiBwGg9xpWq5XIY+IsAQT6stvt6BGX4Nrt4jFxZgCmaYqGYRDo4nzdbncny3KGx8SZAcCRl6CH9yuKcl6r1S6i0egXHhP/Y53aGfV6/U2n02nA5yuIC7vntzsEBo/KXkG84vaI/12w8Flhhw8EQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEcNr4KcAABsB8S2vxAV8AAAAASUVORK5CYII=" : 
			this.animation_icon_image = _options.animation_icon_image;

		_options.animation_icon_position == null ? 
			this.animation_icon_position = "top left" : 
			this.animation_icon_position = _options.animation_icon_position;

		_options.loading_fade_in_speed == null ? 
			this.loading_fade_in_speed = 500 :
			this.loading_fade_in_speed = parseInt(_options.loading_fade_in_speed);

		_options.animation_fade_out_speed == null ? 
			this.animation_fade_out_speed = 300 : 
			this.animation_fade_out_speed = parseInt(_options.animation_fade_out_speed);

		this.is_touch_device = "ontouchstart" in document.documentElement;

		this.freezeframe_count = 0;

		$(document).ready(function()
		{
			_ff.setup();
			_ff.run();
		});
	};

	FreezeFrame.prototype.setup = function()
	{
		$("<canvas>", { id:"freezeframe-canvas" })
			.css("display", "none")
			.prependTo($("body"));

		this.canvas		= $("canvas#freezeframe-canvas");
		this.context	= this.canvas[0].getContext('2d');
	};

	FreezeFrame.prototype.run = function()
	{
		var images = [];
		var ext;

		var figure_background = _ff.loading_background_color;
		if(_ff.loading_background_image !== false)
		{
			figure_background += " url('" + _ff.loading_background_image + "') "
												+ _ff.loading_background_position
												+ " no-repeat";
		}

		images = $('img[freezeframe]')
			.not('[freezeframe="true"]')
			.not('[src^="http"]');

		$(images).each(function(index)
		{
			$(this).attr("freezeframe", "true");

			ext = $(this)[0].src.split(".");
			ext = ext[ext.length - 1].toLowerCase();

			if(ext !== "gif")
			{
				images.splice(index, 1);
			}
			else
			{
				var freezeframe_figure = $("<figure />")
					.attr("class", "freezeframe-container " + _ff.freezeframe_count)
					.css({
						"display": "inline-block",
						"overflow": "hidden",
						"background": figure_background
				});
				$(this)
					.css({
					"opacity": 0,
					"display": "block"
				}).wrap(freezeframe_figure);
				freezeframe_figure = $(this).parent();

				if(_ff.animation_icon_image !== false)
				{
					var animation_icon = $("<div />")
						.attr("class", "freezeframe-animation-icon")
						.css({
							"display": "block",
							"position": "absolute",
							"background": "transparent "
														+ "url('" + _ff.animation_icon_image + "') "
														+ _ff.animation_icon_position
														+ " no-repeat",
							"pointer-events": "none",
							"z-index": 100,
							"opacity": 0
						});
					$(freezeframe_figure).prepend(animation_icon);
					animation_icon = $(this).siblings($(".freezeframe-animation-icon"));
				}

				_ff.freezeframe_count++;

				$(this).load(function()
				{
					$(this).off("load");
				
					_ff.canvas[0].width = $(this)[0].width;
					_ff.canvas[0].height = $(this)[0].height;

					$(this)
						.attr("animated", $(this).attr("src"))
						.attr("src", $(this).attr("src"));

					_ff.context.drawImage(this, 0, 0);

					$(this).attr("src", _ff.canvas[0].toDataURL());

					if(_ff.animation_icon_image !== false)
					{
						$(animation_icon)
							.css({
								"width": parseInt($(this)[0].width),
								"height": parseInt($(this)[0].height)
							}).animate({"opacity": 1}, _ff.loading_fade_in_speed);
					}

					$(this).animate({"opacity": 1}, _ff.loading_fade_in_speed, function(){

						$(freezeframe_figure)
							.css("background", "url('" + $(this).attr("src") + "')");

						$(this)
							.css("opacity", 0)
							.attr("src", $(this).attr("animated"));

						if((_ff.support_touch_devices && _ff.is_touch_device) || 
						   _ff.trigger_event.toLowerCase() == "click")
						{
							var animating = false;
							var image = this;

							var stop_animation;

							$(this).click(function()
							{
								if(!animating)
								{
									$(this)
										.attr("src", $(this).attr("src"))
										.css("opacity", 1);

									if(_ff.animation_icon_image !== false)
									{
										$(animation_icon)
											.css("opacity", 0);
									}

									stop_animation = setInterval(function()
									{
										clearInterval(stop_animation);
										$(image).animate({"opacity": 0}, _ff.animation_fade_out_speed);
										if(_ff.animation_icon_image !== false)
										{
											$(animation_icon).animate({"opacity": 1}, _ff.animation_fade_out_speed);
										}
										animating = false;

									}, _ff.animation_play_duration);
									animating = true;
								}
								else
								{
									clearInterval(stop_animation);

									$(this).animate({"opacity": 0}, _ff.animation_fade_out_speed);
									if(_ff.animation_icon_image !== false)
									{
										$(animation_icon).animate({"opacity": 1}, _ff.animation_fade_out_speed);
									}

									animating = false;
								}
							});
						}
						else
						{

							$(this).mouseenter(function(){
								$(this)
									.attr("src", $(this).attr("src"))
									.css("opacity", 1);
								if(_ff.animation_icon_image !== false)
								{
									$(animation_icon).css("opacity", 0);
								}
							}).mouseleave(function(){
								$(this).animate({"opacity": 0}, _ff.animation_fade_out_speed);
								if(_ff.animation_icon_image !== false)
								{
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
})();