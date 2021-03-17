import imagesLoaded from 'imagesloaded';
import {
  SelectorOrNodes,
  Freeze,
  FreezeframeEvent,
  FreezeframeOptions,
  FreezeframeEventTypes,
  RequireProps
} from '../types';
import {
  pipe,
  normalizeElements,
  validateElements,
  dedupeImages,
  isTouch,
  wrapNode,
  htmlToNode,
  error
} from './utils/index';
import * as templates from './templates';
import {
  classes,
  defaultOptions,
  styleId
} from './constants';

class Freezeframe {
  options: FreezeframeOptions;

  items: Freeze[] = [];

  $images: HTMLImageElement[] = [];

  #target: SelectorOrNodes;

  #isTouch: boolean;

  private _eventListeners = {
    ...Object.values(FreezeframeEventTypes)
      .reduce<any>((acc, item) => {
        acc[item] = [];
        return acc;
      }, {})
  };

  private get _stylesInjected(): boolean {
    return !!document.querySelector(`style#${styleId}`);
  }

  constructor(
    target: SelectorOrNodes | RequireProps<FreezeframeOptions, 'selector'> = classes.SELECTOR,
    options?: FreezeframeOptions
  ) {
    if (
      typeof target === 'string'
        || target instanceof Element
        || target instanceof HTMLCollection
        || target instanceof NodeList
    ) {
      this.options = { ...defaultOptions, ...options };
      this.#target = target;
    } else if (typeof target === 'object' && !options) {
      this.options = { ...defaultOptions, ...target };
      this.#target = this.options.selector;
    } else {
      error(
        'Invalid Freezeframe.js configuration:',
        ...[target, options].filter((arg) => arg !== undefined)
      );
    }
    this._init(this.#target);
  }

  private _init(selectorOrNodes: SelectorOrNodes): void {
    this._injectStylesheet();
    this.#isTouch = isTouch();
    this._capture(selectorOrNodes);
    this._load(this.$images);
  }

  private _capture(selectorOrNodes: SelectorOrNodes): void {
    this.$images = pipe(
      normalizeElements,
      validateElements,
      dedupeImages
    )(selectorOrNodes, this.options) as HTMLImageElement[];
  }

  private _load($images: HTMLImageElement[]): void {
    imagesLoaded($images)
      .on('progress', (instance, { img }) => {
        this._setup(img);
      });
  }

  private async _setup($image: HTMLImageElement): Promise<void> {
    const freeze = this._wrap($image);
    this.items.push(freeze);
    await this._process(freeze);
    this._attach(freeze);
  }

  private _wrap($image: HTMLImageElement): Freeze {
    const $container = htmlToNode(templates.container());
    const $canvas = htmlToNode(templates.canvas()) as HTMLCanvasElement;

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

  private _process(freeze: Freeze): Promise<Freeze> {
    return new Promise((resolve) => {
      const { $canvas, $image, $container } = freeze;
      const { width, height } = $image.getClientRects()[0];
      const clientWidth = Math.ceil(width);
      const clientHeight = Math.ceil(height);

      $canvas.style.width =  `${width}px`;
      $canvas.style.height = `${height}px`;
      $canvas.setAttribute('width', clientWidth.toString());
      $canvas.setAttribute('height', clientHeight.toString());

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

  private _ready($container: HTMLElement): void {
    $container.classList.add(classes.READY);
    $container.classList.add(classes.INACTIVE);
    $container.classList.remove(classes.LOADING_ICON);
  }

  private _attach(freeze: Freeze): void {
    const { $image } = freeze;

    if (!this.#isTouch && this.options.trigger === 'hover') {
      const onMouseEnter = (): void => {
        this._toggleOn(freeze);
        this._emit(FreezeframeEventTypes.START, freeze, true);
        this._emit(FreezeframeEventTypes.TOGGLE, freeze, true);
      };
      const onMouseLeave = (): void => {
        this._toggleOff(freeze);
        this._emit(FreezeframeEventTypes.START, freeze, false);
        this._emit(FreezeframeEventTypes.TOGGLE, freeze, false);
      };
      this._addEventListener($image, 'mouseleave', onMouseLeave);
      this._addEventListener($image, 'mouseenter', onMouseEnter);
    }

    if (this.#isTouch || this.options.trigger === 'click') {
      const onClick = (): void => {
        this._toggle(freeze);
      };
      this._addEventListener($image, 'click', onClick);
    }
  }

  #internalEvents: FreezeframeEvent[] = [];

  private _addEventListener(
    $image: HTMLImageElement,
    event: string,
    listener: EventListenerOrEventListenerObject
  ): void {
    this.#internalEvents.push({ $image, event, listener });
    $image.addEventListener(event, listener);
  }

  private _removeEventListener(
    $image: HTMLImageElement,
    event: string,
    listener: EventListenerOrEventListenerObject
  ): void {
    $image.removeEventListener(event, listener);
  }

  private _injectStylesheet(): void {
    if (this._stylesInjected) return;
    document.head.appendChild(
      htmlToNode(
        templates.stylesheet()
      )
    );
  }

  private _emit(
    event: string,
    items: Freeze | Freeze[],
    isPlaying: boolean
  ): void {
    this._eventListeners[event].forEach((cb: Function) => {
      cb(Array.isArray(items) && items.length === 1 ? items[0] : items, isPlaying);
    });
  }

  private _toggleOn(freeze: Freeze): void {
    const { $container, $image } = freeze;

    if ($container.classList.contains(classes.READY)) {
      $image.setAttribute('src', $image.src);
      $container.classList.remove(classes.INACTIVE);
      $container.classList.add(classes.ACTIVE);
    }
  }

  private _toggleOff(freeze: Freeze): void {
    const { $container } = freeze;

    if ($container.classList.contains(classes.READY)) {
      $container.classList.add(classes.INACTIVE);
      $container.classList.remove(classes.ACTIVE);
    }
  }

  private _toggle(freeze: Freeze): boolean {
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
    this._emit(FreezeframeEventTypes.START, this.items, true);
    this._emit(FreezeframeEventTypes.TOGGLE, this.items, true);
    return this;
  }

  stop() {
    this.items.forEach((freeze) => {
      this._toggleOff(freeze);
    });
    this._emit(FreezeframeEventTypes.STOP, this.items, false);
    this._emit(FreezeframeEventTypes.TOGGLE, this.items, false);
    return this;
  }

  toggle() {
    this.items.forEach((freeze) => {
      const isPlaying = this._toggle(freeze);
      if (isPlaying) {
        this._emit(FreezeframeEventTypes.START, this.items, false);
      } else {
        this._emit(FreezeframeEventTypes.STOP, this.items, false);
      }
      this._emit(FreezeframeEventTypes.TOGGLE, this.items, isPlaying);
    });
    return this;
  }

  on(event: string, cb: Function) {
    this._eventListeners[event].push(cb);
    return this;
  }

  destroy(): void {
    this.#internalEvents.forEach(({ $image, event, listener }) => {
      this._removeEventListener($image, event, listener);
    });
  }
}

export default Freezeframe;
