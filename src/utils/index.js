export { imagesLoaded } from 'imagesloaded';

export const compose = (...fns) => (
  fns.reduceRight((f, g) => (...args) => f(g(...args)))
);

export const asyncCallback = (fn, ...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (error, data) => (
      error
        ? reject(error)
        : resolve(data)
    ));
  });
};

export const formatMessage = (string) => `✨Freezeframe: ${string}✨`;

export const error = (message, ...args) => {
  console.error(formatMessage(message), ...args);
};

export const warn = (message, ...args) => {
  console.warn(formatMessage(message), ...args);
};

export const normalizeElements = (selectorOrNodes) => {
  const sel = selectorOrNodes;
  const type = typeof sel;
  return type === 'string'
    ? document.querySelectorAll(sel)
    : sel;
};

export const validateElements = (elements) => {
  elements.forEach((image) => {
    if (!(image instanceof HTMLImageElement)) {
      error('Invalid element', image);
    }
    if (!(image.src.test(/.*\.gif$/i))) {
      warn('Image is not a gif', image);
    }
  });
};
