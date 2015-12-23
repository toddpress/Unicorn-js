(function(window, document, undefined){

	let sheet = (() => {
		let style = document.createElement('style');
		style.appendChild(document.createTextNode(''));
		document.head.appendChild(style);
		return style.sheet;
	})();

	class Unicorn {
		constructor(element, {
				patronus = 'unicorn',
				rtl = true,
				duration = 1.4
			} = {}) {
			Object.assign(this, { element, options: { patronus, rtl, duration } });
			this.wrapTextContent();
			this.defineStyles();
			this.element.classList.add(this.options.patronus);
		}
		defineStyles() {
			let { patronus, duration } = this.options;
			let rules = [
				`.${patronus} span {
					animation-name: unicorn__, default__;
					animation-duration: ${duration}s;
					animation-iteration-count: infinite;
					animation-fill-mode: forwards, forwards;
					animation-direction: normal;
				}`,
				`.${patronus}:hover span {
					cursor: pointer;
					animation: unicorn__ ${duration}s linear infinite;
				}`,
				`@keyframes unicorn__ {
					0%    {  color: rgb(255, 0, 0);     }
					16.6% {  color: rgb(255, 0, 255);   }
					33.3% {  color: rgb(0, 0, 255);     }
					50%   {  color: rgb(0, 255, 255);   }
					66.6% {  color: rgb(0, 255, 0);     }
					83.3% {  color: rgb(255, 255, 0);   }
					100%  {  color: rgb(255, 255, 255); }
				}`,
				`@keyframes default__ {
					to { color: inherit; }
				}`];

			[for (i of rules) if (!~sheet.ownerNode.textContent.indexOf(i)) sheet.insertRule(i)];
		}
		wrapTextContent() {
			let content = this.element.textContent,
				stepSize = 360 / content.length,
				duration = this.options.duration,
				delay = (index) => {
					let delay = (duration * ((index * stepSize) % 360) / 360) - duration;
					return Math.abs(delay).toFixed(3);
				};

			this.element.innerHTML = Array.from(content, (char, i) => {
				return `<span style="animation-delay: ${delay(i)}s; animation-duration: ${duration}s">${char}</span>`;
			}).join('');
		}
	}

	window.Unicorn = function(nodes, options) {
		return Array.from(nodes, node => new Unicorn(node, options));
	};
})(window, document, undefined);
