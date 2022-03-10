import { STYLE } from '../constants.js';
import { assignStyles, getRandomNumber } from '../utils.js';
import Template from './Template.js';
const { LAYER_COLOR } = STYLE;

class Town extends Template {
  constructor(size) {
    super();
    this.size = size;
    this.name = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 2);
    this.$child = document.createElement('div');
    this.width = getRandomNumber(size * 0.5, size);
    this.height = getRandomNumber(size * 0.5, size);
  }
  renderChild(layer) {
    const styleObj = {
      width: `${this.width}px`,
      height: `${this.height}px`,
      border: `1px solid ${LAYER_COLOR[layer]}`,
    };
    assignStyles(this.$child, styleObj);
    this.$child.classList.add('town');
    this.$child.innerHTML = `<span class="town__name">${this.name}</span>`;
    return this.$child;
  }
}
export default Town;