import {
  compose,
  asyncCallback,
  normalizeElements,
  validateElements,
  imagesLoaded
} from './utils';

class Freezeframe {
  constructor(
    selectorOrNodes = '.freezeframe',
    options = {}
  ) {
    this.init(selectorOrNodes, options);
  }

  init(selectorOrNodes) {
    this.capture(selectorOrNodes);
    this.load(this.$images);
  }

  capture(selectorOrNodes) {
    this.$images = compose(
      normalizeElements,
      validateElements
    )(selectorOrNodes);
  }

  load($images) {
    $images.forEach(async ($image) => {
      const loader = await asyncCallback(imagesLoaded, $image);
      this.setup(loader.elements[0]);
    });
  }

  setup({ elements }) {
    console.log('capture', elements[0]);
  }
}

window.Freezeframe = Freezeframe;

export default Freezeframe;
