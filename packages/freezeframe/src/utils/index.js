export const compose = (...fns) => (
  fns.reduceRight((f, g) => (...args) => f(g(...args)))
);

export const formatMessage = (string) => `✨Freezeframe: ${string}✨`;

export const error = (message, ...args) => {
  console.error(formatMessage(message), ...args);
};

export const warn = (message, ...args) => {
  console.warn(formatMessage(message), ...args);
};

export const isTouch = () => {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
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

export const normalizeElements = (selectorOrNodes) => {
  const sel = selectorOrNodes;
  const type = typeof sel;
  return type === 'string'
    ? document.querySelectorAll(sel)
    : sel;
};

export const validateElements = (elements) => {
  const list = elements instanceof HTMLElement ? [elements] : elements;
  return Array.from(list).reduce((acc, image) => {
    if (!(image instanceof HTMLImageElement)) {
      const $children = image.querySelectorAll('img');
      if (!$children.length) {
        error('Invalid element', image);
      } else {
        // eslint-disable-next-line no-param-reassign
        acc = acc.concat(...$children);
      }
    } else {
      acc.push(image);
      if (!(validateFilename(image.src))) {
        warn('Image is not a gif', image);
      }
    }
    return acc;
  }, []);
};

export const dedupeImages = (images) => {
  return [...new Set(images)];
};

export const htmlToNode = (html) => {
  const $wrap = window.document.createElement('div');
  $wrap.innerHTML = html;
  const $content = $wrap.childNodes;
  return $content.length > 1
    ? $content
    : $content[0];
};

export const wrapNode = ($el, $wrapper) => {
  $el.parentNode.insertBefore($wrapper, $el);
  $wrapper.appendChild($el);
};
