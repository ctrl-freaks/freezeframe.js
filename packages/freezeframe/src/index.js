import imagesLoaded from 'imagesloaded';

import {
  compose,
  normalizeElements,
  validateElements,
  dedupeImages,
  isTouch,
  wrapNode,
  htmlToNode
} from './utils';

import * as templates from './templates';
import { classes, events, defaultOptions } from './constants';

class Freezeframe {
  items = [];

  $images = [];

  eventListeners = {
    ...Object.values(events)
      .reduce((acc, item) => {
        acc[item] = [];
        return acc;
      }, {})
  };

  constructor(
    selectorOrNodes = classes.SELECTOR,
    options
  ) {
    this.options = selectorOrNodes instanceof Object && !options
      ? { ...defaultOptions, ...selectorOrNodes }
      : { ...defaultOptions, ...options };
    const target = this.options.selector || selectorOrNodes;
    this.init(target);
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
      validateElements,
      dedupeImages
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
    wrapNode($image, $container);

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
        this.ready($container);
        resolve(freeze);
      }, {
        once: true
      });
    });
  }

  ready($container) {
    $container.classList.add(classes.READY);
    $container.classList.add(classes.INACTIVE);
    $container.classList.remove(classes.LOADING_ICON);
  }

  attach(freeze) {
    const { $image } = freeze;

    if (!this.isTouch && this.options.trigger === 'hover') {
      $image.addEventListener('mouseenter', () => {
        this.toggleOn(freeze);
        this.emit(events.START, freeze, true);
        this.emit(events.TOGGLE, freeze, true);
      });

      $image.addEventListener('mouseleave', () => {
        this.toggleOff(freeze);
        this.emit(events.START, freeze, false);
        this.emit(events.TOGGLE, freeze, false);
      });
    }

    if (this.isTouch || this.options.trigger === 'click') {
      $image.addEventListener('click', () => {
        this.toggle(freeze);
      });
    }
  }

  injectStylesheet() {
    document.head.appendChild(
      htmlToNode(
        templates.stylesheet()
      )
    );
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

  emit(event, items, isPlaying) {
    this.eventListeners[event].forEach((cb) => {
      cb(items.length === 1 ? items[0] : items, isPlaying);
    });
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

  start() {
    this.items.forEach((freeze) => {
      this.toggleOn(freeze);
    });
    this.emit(events.START, this.items, true);
    this.emit(events.TOGGLE, this.items, true);
  }

  stop() {
    this.items.forEach((freeze) => {
      this.toggleOff(freeze);
    });
    this.emit(events.STOP, this.items, false);
    this.emit(events.TOGGLE, this.items, false);
  }

  on(event, cb) {
    this.eventListeners[event].push(cb);
  }
}

export default Freezeframe;
