import { html } from 'common-tags';

export function htmlToNode(_html) {
  const $wrap = window.document.createElement('div');
  $wrap.innerHTML = html`${_html}`;
  const $content = $wrap.childNodes;
  return $content.length > 1
    ? $content
    : $content[0];
}

export const wrap = ($el, $wrapper) => {
  console.log('wrap', $el, $wrapper);
  $el.parentNode.insertBefore($wrapper, $el);
  $wrapper.appendChild($el);
};

export const remove = ($el) => {
  return $el.parentNode.removeChild($el);
};
