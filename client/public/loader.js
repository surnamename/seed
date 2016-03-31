(function () {
  'use strict';
  var production = location.hostname === 'via-site.github.io';
  var headEl = document.getElementsByTagName('head')[0],
      head = false, body = true;

  if (production) addTag('base', {href: "/"});
  else addTag('base', {href: "/"});

  if (navigator.userAgent.indexOf("MSIE 10") === -1
    && navigator.userAgent.indexOf("MSIE 9") === -1
    && navigator.userAgent.indexOf("MSIE 8") === -1
    && navigator.userAgent.indexOf("MSIE 7") === -1
    && navigator.userAgent.indexOf("MSIE 6") === -1) {
    addTag('link', {rel: 'stylesheet', href: 'build/all.min.css', type: 'text/css'}, head);
    addTag('script', {src: 'build/all.min.js', type: 'text/javascript'}, head);
  }

  function addTag(name, attributes, sync) {
    var el = document.createElement(name);
    for (var attrName in attributes) {
      el.setAttribute(attrName, attributes[attrName]);
    }
    sync ? document.write(outerHTML(el)) : headEl.appendChild(el);
  }

  function outerHTML(node) {
    return node.outerHTML || (function (n) {
        var div = document.createElement('div'), h;
        div.appendChild(n);
        h = div.innerHTML;
        div = null;
        return h;
      })(node);
  }
})();