import imagesLoaded from 'imagesloaded';

import {
  compose,
  normalizeElements,
  validateElements,
  isTouch
} from './utils';

import {
  wrap,
  htmlToNode
} from './utils/dom';

import * as templates from './templates';
import { classes, defaultOptions } from './constants';

class Freezeframe {
  constructor(
    selectorOrNodes = classes.SELECTOR,
    options
  ) {
    this.items = [];
    this.options = Object.assign({}, defaultOptions, options);
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
    imagesLoaded($images)
      .on('progress', (instance, { img }) => {
        this.setup(img);
      });
  }

  async setup($image) {
    const freeze = this.wrap($image);
    this.items.push(freeze);
    await this.process(freeze);
    this.attach(freeze);
  }

  wrap($image) {
    const $container = htmlToNode(templates.container());
    const $canvas = htmlToNode(templates.canvas());

    if (this.options.responsive) {
      $container.classList.add(classes.RESPONSIVE);
    }
    if (this.options.overlay) {
      $container.appendChild(htmlToNode(templates.overlay()));
    }
    $image.classList.add(classes.IMAGE);
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
        $container.classList.add(classes.READY);
        $container.classList.add(classes.INACTIVE);
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
    const { $container } = freeze;
    const isActive = $container.classList.contains(classes.ACTIVE);

    if (isActive) {
      this.toggleOff(freeze);
    } else {
      this.toggleOn(freeze);
    }
  }

  toggleOff(freeze) {
    const { $container } = freeze;

    if ($container.classList.contains(classes.READY)) {
      $container.classList.add(classes.INACTIVE);
      $container.classList.remove(classes.ACTIVE);
    }
  }

  toggleOn(freeze) {
    const { $container, $image } = freeze;

    if ($container.classList.contains(classes.READY)) {
      $image.setAttribute('src', $image.src);
      $container.classList.remove(classes.INACTIVE);
      $container.classList.add(classes.ACTIVE);
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
