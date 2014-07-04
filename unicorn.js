(function(ˉºnnר){
  /*\
  |*| Unicorn.js -- v2, bitches.
  |*| Copyright (C) 6/24/2014 toddpress
  |*| Licence: WTFPL http://en.wikipedia.org/wiki/WTFPL#Version_2
  |*| Terms: Everyone is permitted to copy and distribute verbatim or modified
  |*| 	copies of this license document, and changing it is allowed as long
  |*| 	as the name is changed. Or light it on fire.
  |*| Admissions: the ns bears semblance to, well... you know.
  |*| Implications: *
  |*|
  |*| ## Suggestions? ## -- I'm always open to improvements, so learn me a thing or two.
  \*/

  /*\
  |*| Accolades:
  |*| 	@paul_irish: "I had given up jQuery completely. But then Unicorn.js brought me back.
  |*| 		The sweet, pulsating rainbow of joy is a part of my daily routine now."
  |*| 		web: http://www.paulirish.com/
  |*|
  |*| 	@chriscoyier: "[Todd feels] this is truly a harbinger of future web development."
  |*|		Note: I wrote the entirety of this code on codepen.io, so you can thank CC for
  |*|			that awesome tool.
  |*| 		web: http://codepen.io AND http://css-tricks.com/
  |*|
  |*| 	@desandro: "Unicorn.js is the next evolutionary step to make the web the magical realm of
  |*| 		sparkly beings made of light and whip cream."
  |*|		web: http://v3.desandro.com/ AND https://twitter.com/desandro
  \*/

  	// Thanks, DW. http://davidwalsh.name/vendor-prefix
	// Read @davidwalshblog, advert $++! Plus it's awesome.
	var computed = window.getComputedStyle(document.documentElement, ''),
		pfx = ([].slice.call(computed).join('').match(/-(moz|webkit|ms)-/) ||
				(computed.Olink === '' && ['', 'o']))[1],
		prefix = '-' + pfx + '-';

	var sheet = (function() {
		var style = document.createElement('style');

		style.appendChild(document.createTextNode(''));
		document.head.appendChild(style);

		return style.sheet;
	})();

	ˉºnnר.patronum = function(patronus, options){
		var opts = {
			patronus: (patronus || '')
				? patronus+''
				: (options.patronus || '')
					? options['patronus']+'' : '.unicorn',  // My patronus is the majestimythical unicorn
			cursor: options.cursor+'' || 'default', // faux pas? IDGaF: Text cursor sucks.
			duration: +options.duration || 1.5,
			bowFlow: options.bowFlow+'' || 'rtl'
		};

		var styles = [
			{
				selector: opts.patronus + ' span',
				rules: [prefix + 'animation: default_text 1.5s linear infinite;',
						prefix + 'animation-play-state: running, paused;']
			},
			{
				selector: opts.patronus + ':hover span',
				rules: [prefix + 'animation-name: unicorn;',
				'cursor: ' + opts.cursor]
			},
			{
				selector: '@' + prefix + 'keyframes unicorn',
				rules: ['from {color: rgb(255, 0, 0);}','16.6% {color: rgb(255, 0, 255);}',
					'33.3% {color: rgb(0, 0, 255);}','50% {color: rgb(0, 255, 255);}',
					'66.6% {color: rgb(0, 255, 0);}','83.3% {color: rgb(255, 255, 0);}',
					'to {color: rgb(255, 0, 0);}']
			},
			{
				selector: '@' + prefix + 'keyframes default_text',
				rules: ['to {color: rgb(102, 102, 102);}']
			}
		];

		for (var i = 0; i < styles.length; i++) {
		  sheet.insertRule(styles[i].selector + '{' + styles[i].rules.join('') + '}', i);
		}

		[].map.call(document.querySelectorAll(opts.patronus+''), function(el) {
			var stepSize = 360/el.innerText.length,
				animationTime = opts.duration,
				ltr = (opts.bowFlow === 'ltr');

			el.innerHTML = el.innerText.split('').map(function(char, i) {

				var delay = (animationTime * ((i * stepSize) % 360) / 360) -
						(-(~-ltr|~-ltr) * animationTime),
					delayTime = Math.abs(delay).toFixed(3);

				var attrStyle = 'style="'+ prefix + 'animation-delay: ' + delayTime + 's; ' +
						prefix + 'animation-duration: ' + animationTime + 's;"';

				var mark = /^\S/gi.test(char) &&
						'<span ' + attrStyle + '>' + char + '</span>' || char;

				return mark;
			}).join('');
		});
	};
}(this.Expecto = this.Expecto || {}));

// Demo-entors!
// Expecto.patronum('.unicorn', {
// 	'duration': '.2',
// 	'bowFlow':'ltr',
// 	'cursor':'pointer'
// });
