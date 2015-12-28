document.addEventListener('DOMContentLoaded', (e) => {
  u('.unicorn');
});

class Unicorn {
  constructor(element, {
    duration = 1.2,
    rtl = true
  } = {}) {
    Object.assign(this, { element, options: { rtl, duration } });
    this.element.classList.add('ˉºnnר__');
    this.wrapTextContent();
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

let sheet = () => {
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(''));
  document.head.appendChild(style);
  return style.sheet;
}();

let rules = [
  `.ˉºnnר__ span {
    animation-name: unicorn__, default__;
    animation-duration: 0s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards, forwards;
    animation-direction: normal;
  }`,
  `.ˉºnnר__:hover span {
    cursor: pointer;
    animation: unicorn__ 0s linear infinite;
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
  }`
];

rules.forEach(r => sheet.insertRule(r));

let u = (nodes, options) => {
  typeof nodes == 'string' && (nodes = document.querySelectorAll(nodes));
  return Array.from(nodes, node => new Unicorn(node, options));
};

// export { u as default };
