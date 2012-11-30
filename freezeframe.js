/*
--------------------------
freezeframe.js version 1.1
--------------------------
Licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License
http://creativecommons.org/licenses/by-sa/3.0/deed.en_US

2012 Chris Antonellis
http://www.chrisantonellis.com
https://github.com/chrisantonellis/freezeframe
Documentation: http://freezeframe.chrisantonellis.com

---------
Changelog
---------
11/30/12 v1.0.2 Fixed filename and version syntax
11/28/12 v1.0.1 Fixed image positioning bug
11/25/12 v1.0.0 Initial Release
*/

FreezeFrame = (function()
{
	var canvas;
	var context;
	var freezeframe_count;
	var speed_fade_in;
	var speed_fade_out;
	var loading_bg_style;

	var _this;

	function FreezeFrame(_options)
	{
		_this = this;

		if(_options == undefined)
		{
			_options = {
				speed_fade_in 		: undefined,
				speed_fade_out		: undefined,
				loading_bg_style	: undefined
			};
		}

		this.speed_fade_in = typeof _options.speed_fade_in !== 'undefined' ? _options.speed_fade_in : 500;

		this.speed_fade_out = typeof _options.speed_fade_out !== 'undefined' ? _options.speed_fade_out : 300;

		this.loading_bg_style = typeof _options.loading_bg_style !== 'undefined' ? _options.loading_bg_style : "url(data:image/gif;base64,R0lGODlhEAAQAPIAAGZmZv///4mJidbW1v///8PDw7CwsKampiH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQACgABACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkEAAoAAgAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkEAAoAAwAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkEAAoABAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQACgAFACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQACgAGACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAAKAAcALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==) center center no-repeat #666";

		this.freezeframe_count = 0;

		$(document).ready(function()
		{
			_this.setup();
			_this.run();
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

		images = $('img[freezeframe]')
			.not('[freezeframe="true"]')
			.not('[src^="http"]');

		$(images).each(function(index)
		{
			ext = $(this)[0].src.split(".");
			ext = ext[ext.length - 1].toLowerCase();

			$(this).attr("freezeframe", "true");

			if(ext !== "gif")
			{
				images.splice(index, 1);
			}
			else
			{
				$(this)
					.css({
					"opacity": 0,
					"display": "block"
				}).wrap('<figure />')
					.parent()
					.attr("class", "freezeframe-container " + _this.freezeframe_count)
					.css({
						"display": "inline-block",
						"overflow": "hidden",
						"background": _this.loading_bg_style
				});

				_this.freezeframe_count++;

				$(this).load(function()
				{
					$(this).off("load");
				
					_this.canvas[0].width = $(this)[0].width;
					_this.canvas[0].height = $(this)[0].height;

					$(this)
						.attr("animated", $(this).attr("src"))
						.attr("src", $(this).attr("src"));

					_this.context.drawImage(this, 0, 0);

					$(this).attr("src", _this.canvas[0].toDataURL());

					$(this).animate({"opacity": 1}, _this.speed_fade_in, function(){

						$(this)
							.parent()
							.css("background", "url('" + $(this).attr("src") + "')");

						$(this)
							.css("opacity", 0)
							.attr("src", $(this).attr("animated"))
							.mouseenter(function(){
								$(this)
									.attr("src", $(this).attr("src"))
									.css("opacity", 1);
							}).mouseleave(function(){
								$(this)
									.animate({"opacity": 0}, _this.speed_fade_out);
							});
					});
				});
			}
		});
	};

	return FreezeFrame;
})();