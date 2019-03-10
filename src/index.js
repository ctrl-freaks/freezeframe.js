import {
  compose,
  asyncCallback,
  normalizeElements,
  validateElements,
  imagesLoaded,
  isTouch
} from './utils';

import {
  wrap,
  htmlToNode
} from './utils/dom';

import * as templates from './templates';
import classes from './constants';

const DEFAULT_OPTIONS = {
  responsive: true,
  trigger: 'hover'
};

class Freezeframe {
  constructor(
    selectorOrNodes = classes.SELECTOR,
    options
  ) {
    this.items = [];
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);
    this.init(selectorOrNodes);
  }

  init(selectorOrNodes) {
    this.injectStylesheet();
    this.isTouch = isTouch();
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
    // TODO use imagesLoaded.progress instead of forEach
    $images.forEach(async ($image) => {
      const { elements } = await asyncCallback(imagesLoaded, $image);
      this.setup(elements[0]);
    });
  }

  async setup($image) {
    const freeze = this.wrap($image);
    this.items.push(freeze);
    await this.process(freeze);
    this.attach(freeze);
    // $image.classList.add('ff-setup');
  }

  wrap($image) {
    const $container = htmlToNode(templates.container());
    const $canvas = htmlToNode(templates.canvas());

    if (this.options.response) {
      $container.classList.add(classes.RESPONSIVE);
    }
    $container.appendChild($canvas);
    wrap($image, $container);

    return {
      $container,
      $canvas,
      $image
    };
  }

  process(freeze) {
    return new Promise((resolve) => {
      const { $canvas, $image, $container } = freeze;
      const { clientWidth, clientHeight } = $image;

      $canvas.setAttribute('width', clientWidth);
      $canvas.setAttribute('height', clientHeight);

      const context = $canvas.getContext('2d');
      context.drawImage($image, 0, 0, clientWidth, clientHeight);

      $canvas.classList.add(classes.CANVAS_READY);

      $canvas.addEventListener('transitionend', () => {
        $image.classList.add(classes.IMAGE_READY);
        $container.classList.remove(classes.LOADING_ICON);
        resolve(freeze);
      }, {
        once: true
      });
    });
  }

  attach(freeze) {
    const { $image } = freeze;

    if (!this.isTouch && this.options.trigger === 'hover') {
      $image.addEventListener('mouseenter', () => {
        this.toggleOn(freeze);
      });

      $image.addEventListener('mouseleave', () => {
        this.toggleOff(freeze);
      });
    }

    if (this.isTouch || this.options.trigger === 'click') {
      $image.addEventListener('click', () => {
        this.toggle(freeze);
      });
    }
  }

  toggle(freeze) {
    const { $canvas } = freeze;
    const isActive = $canvas.classList.contains(classes.CANVAS_ACTIVE);

    if (isActive) {
      this.toggleOff(freeze);
    } else {
      this.toggleOn(freeze);
    }
  }

  toggleOff(freeze) {
    const { $image, $canvas } = freeze;

    if ($image.classList.contains(classes.IMAGE_READY)) {
      $canvas.classList.add(classes.CANVAS_READY);
      $canvas.classList.remove(classes.CANVAS_ACTIVE);
    }
  }

  toggleOn(freeze) {
    const { $image, $canvas } = freeze;

    if ($image.classList.contains(classes.IMAGE_READY)) {
      $image.setAttribute('src', $image.src);
      $canvas.classList.remove(classes.CANVAS_READY);
      $canvas.classList.add(classes.CANVAS_ACTIVE);
    }
  }

  start() {
    this.items.forEach((freeze) => {
      this.toggleOn(freeze);
    });
  }

  stop() {
    this.items.forEach((freeze) => {
      this.toggleOff(freeze);
    });
  }

  injectStylesheet() {
    document.head.appendChild(
      htmlToNode(
        templates.stylesheet()
      )
    );
  }
}

window.Freezeframe = Freezeframe;

export default Freezeframe;
