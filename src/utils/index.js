import imagesLoaded from 'imagesloaded';

export { imagesLoaded };

export const compose = (...fns) => (
  fns.reduceRight((f, g) => (...args) => f(g(...args)))
);

export const asyncCallback = (fn, ...args) => {
  return new Promise((resolve) => {
    fn(...args, (data) => (
      resolve(data)
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

export const parseFilename = (filePath) => {
  return filePath
    .split('.')
    .pop()
    .toLowerCase()
    .substring(0, 3);
};

export const validateFilename = (filePath) => {
  const ext = parseFilename(filePath);
  return ext === 'gif';
};

export const validateElements = (elements) => {
  elements.forEach((image) => {
    if (!(image instanceof HTMLImageElement)) {
      error('Invalid element', image);
    }
    if (!(validateFilename(image.src))) {
      warn('Image is not a gif', image);
    }
  });
  return elements;
};
