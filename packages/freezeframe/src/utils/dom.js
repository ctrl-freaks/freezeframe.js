export function htmlToNode(html) {
  const $wrap = window.document.createElement('div');
  $wrap.innerHTML = html;
  const $content = $wrap.childNodes;
  return $content.length > 1
    ? $content
    : $content[0];
}

export const wrap = ($el, $wrapper) => {
  $el.parentNode.insertBefore($wrapper, $el);
  $wrapper.appendChild($el);
};

export const remove = ($el) => {
  return $el.parentNode.removeChild($el);
};
