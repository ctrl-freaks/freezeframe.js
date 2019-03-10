import {
  compose,
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
    this.$images = compose(
      normalizeElements,
      validateElements
    )(selectorOrNodes);
    this.loaded(this.$images);
  }

  loaded($images) {
    $images.forEach(($image) => {
      imagesLoaded($image, () => this.setup);
    });
  }

  setup($image) {
    console.log('setup', $image);
  }
}

export default Freezeframe;
