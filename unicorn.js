/* Use as you please, no attribution necessary */
/* Thanks to the dudes at http://jqueryboilerplate.com/ for speeding up development time */

/* 
	"I had given up jQuery completely. But then Unicorn.js brought me back. The sweet, pulsating rainbow of joy is a part of my daily routine now."
	Many, many thanks to @paul_irish of http://www.paulirish.com/ for his gleaming review.
*/
;(function ( $, window, document, undefined ) {
		// Create the defaults once
		var pluginName = "unicorn",
				defaults = {
				saturation: 100,
				light: 50,
				speed: 10, // in ms
				ltr: false // controls "bow-flow." Set to true if you want the colors to flow from left to right.
		};
		var itv;

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		Plugin.prototype = {
		
				init: function () {	
					var elem = this.element,
						thisCache = this;
					this.saturation = Math.abs(this.settings.saturation)>100? 100: Math.abs(this.settings.saturation);
					this.light = Math.abs(this.settings.light)>100? 100: Math.abs(this.settings.light);
					
					this.wrapChars(elem);
					// get newly created spans, added by wrapChars() method
					var spans = $(elem).find("span");
					// make initial hues array, and assign it to a property of Plugin object 
					this.makeHuesArray(spans);
					
					$(elem).on({
						mouseenter: function(){thisCache.cycleColors(spans, thisCache);},
						mouseleave: function(){thisCache.stopCycle(spans);}
					});
				},
				
				
				wrapChars: function (el) {
					var txt = $(el).text(),
						len = txt.length,
						step = 360/len,
						output="";
			
					for(var i=0; i<len; i++){
						mC = Math.ceil(i*step);
						h = mC <= 360 ? mC : 360;
						output += "<span style='color:hsla("+ h +", 100%, 50%, 1); color: inherit'>"+ txt.charAt(i) +"</span>";
					}
					
					$(el).html(output);
				},
				
				
				makeHuesArray: function(spans) {
					var count = 1;
					huesArr = spans
						.map(function(){
							return $(this).attr('style').split(',')[0].split('(')[1];
						});
					var hA = $.makeArray(huesArr),
						len = hA.length-1;
					hA.shift();
					
					// how many steps per hue angle?
					// for future use:
					// for(i=0;i<len; i++) {
						// if (hA[i] == hA[i+1]) {
							// count++;
						// } else {
							// break;
						// }
					// }
					
					// this.count = count;
					this.huesArray = huesArr;
				},
				
				
				shiftHuesArray: function() {
					var hArray = $.makeArray(this.huesArray);			
					
					if (!this.settings.ltr) {
						hArray.push(hArray.shift());
					} else {
						hArray.unshift(hArray.pop());
					}
					
					this.huesArray = hArray;
				},
				
				
				cycleColors: function(spans, _thisCache) {
					var thisCache = _thisCache;
					itv = setInterval(function(){
						thisCache.shiftHuesArray();
						var hues = $.makeArray(thisCache.huesArray);
						spans.each(function(i){
							$(this).attr({style:"color:hsla("+ hues[i] +","+ thisCache.saturation +"% ,"+ thisCache.light +"%, 1)"});
						});

					}, thisCache.settings.speed);
				},
				
				
				stopCycle: function(spans){
					// stop color cycling
					clearInterval(itv);
					// return affected chars to default styling
					spans.each(function() {
						$(this).attr({style: ""})
					});
				}
		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});

				// chain jQuery functions
				return this;
		};

})( jQuery, window, document );