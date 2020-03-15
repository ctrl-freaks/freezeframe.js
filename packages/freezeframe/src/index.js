import imagesLoaded from 'imagesloaded';

import {
  pipe,
  normalizeElements,
  validateElements,
  dedupeImages,
  isTouch,
  wrapNode,
  htmlToNode
} from './utils';

import * as templates from './templates';
import {
  classes,
  events,
  defaultOptions,
  styleId
} from './constants';

class Freezeframe {
  items = [];

  $images = [];

  _eventListeners = {
    ...Object.values(events)
      .reduce((acc, item) => {
        acc[item] = [];
        return acc;
      }, {})
  };

  get _stylesInjected() {
    return !!document.querySelector(`style#${styleId}`);
  }

  constructor(
    selectorOrNodes = classes.SELECTOR,
    options
  ) {
    this.options = selectorOrNodes instanceof Object && !options
      ? { ...defaultOptions, ...selectorOrNodes }
      : { ...defaultOptions, ...options };
    const target = this.options.selector || selectorOrNodes;
    this._init(target);
  }

  _init(selectorOrNodes) {
    this._injectStylesheet();
    this.isTouch = isTouch();
    this._capture(selectorOrNodes);
    this._load(this.$images);
  }

  _capture(selectorOrNodes) {
    this.$images = pipe(
      normalizeElements,
      validateElements,
      dedupeImages
    )(selectorOrNodes, this.options);
  }

  _load($images) {
    imagesLoaded($images)
      .on('progress', (instance, { img }) => {
        this._setup(img);
      });
  }

  async _setup($image) {
    const freeze = this._wrap($image);
    this.items.push(freeze);
    await this._process(freeze);
    this._attach(freeze);
  }

  _wrap($image) {
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

  _process(freeze) {
    return new Promise((resolve) => {
      const { $canvas, $image, $container } = freeze;
      const { clientWidth, clientHeight } = $image;

      $canvas.setAttribute('width', clientWidth);
      $canvas.setAttribute('height', clientHeight);

      const context = $canvas.getContext('2d');
      context.drawImage($image, 0, 0, clientWidth, clientHeight);

      $canvas.classList.add(classes.CANVAS_READY);

      $canvas.addEventListener('transitionend', () => {
        this._ready($container);
        resolve(freeze);
      }, {
        once: true
      });
    });
  }

  _ready($container) {
    $container.classList.add(classes.READY);
    $container.classList.add(classes.INACTIVE);
    $container.classList.remove(classes.LOADING_ICON);
  }

  _attach(freeze) {
    const { $image } = freeze;

    if (!this.isTouch && this.options.trigger === 'hover') {
      const onMouseEnter = () => {
        this._toggleOn(freeze);
        this._emit(events.START, freeze, true);
        this._emit(events.TOGGLE, freeze, true);
      };
      const onMouseLeave = () => {
        this._toggleOff(freeze);
        this._emit(events.START, freeze, false);
        this._emit(events.TOGGLE, freeze, false);
      };
      this._addEventListener($image, 'mouseleave', onMouseLeave);
      this._addEventListener($image, 'mouseenter', onMouseEnter);
    }

    if (this.isTouch || this.options.trigger === 'click') {
      const onClick = () => {
        this._toggle(freeze);
      };
      this._addEventListener($image, 'click', onClick);
    }
  }

  _internalEvents = [];

  _addEventListener($image, event, listener) {
    this._internalEvents.push({ $image, event, listener });
    $image.addEventListener(event, listener);
  }

  _removeEventListener($image, event, listener) {
    $image.removeEventListener(event, listener);
  }

  _injectStylesheet() {
    if (this._stylesInjected) return;
    document.head.appendChild(
      htmlToNode(
        templates.stylesheet()
      )
    );
  }

  _emit(event, items, isPlaying) {
    this._eventListeners[event].forEach((cb) => {
      cb(items.length === 1 ? items[0] : items, isPlaying);
    });
  }

  _toggleOn(freeze) {
    const { $container, $image } = freeze;

    if ($container.classList.contains(classes.READY)) {
      $image.setAttribute('src', $image.src);
      $container.classList.remove(classes.INACTIVE);
      $container.classList.add(classes.ACTIVE);
    }
  }

  _toggleOff(freeze) {
    const { $container } = freeze;

    if ($container.classList.contains(classes.READY)) {
      $container.classList.add(classes.INACTIVE);
      $container.classList.remove(classes.ACTIVE);
    }
  }

  _toggle(freeze) {
    const { $container } = freeze;
    const isActive = $container.classList.contains(classes.ACTIVE);

    if (isActive) {
      this._toggleOff(freeze);
    } else {
      this._toggleOn(freeze);
    }
    return !isActive;
  }

  // public methods

  start() {
    this.items.forEach((freeze) => {
      this._toggleOn(freeze);
    });
    this._emit(events.START, this.items, true);
    this._emit(events.TOGGLE, this.items, true);
  }

  stop() {
    this.items.forEach((freeze) => {
      this._toggleOff(freeze);
    });
    this._emit(events.STOP, this.items, false);
    this._emit(events.TOGGLE, this.items, false);
  }

  toggle() {
    this.items.forEach((freeze) => {
      const isPlaying = this._toggle(freeze);
      if (isPlaying) {
        this._emit(events.START, this.items, false);
      } else {
        this._emit(events.STOP, this.items, false);
      }
      this._emit(events.TOGGLE, this.items, isPlaying);
    });
  }

  on(event, cb) {
    this._eventListeners[event].push(cb);
  }

  destroy() {
    this._internalEvents.forEach(({ $image, event, listener }) => {
      this._removeEventListener($image, event, listener);
    });
  }
}

export default Freezeframe;
