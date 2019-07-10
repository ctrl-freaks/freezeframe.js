module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "5233":
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/Users/nford/Sites/freezeframe.js/packages/freezeframe/examples",e(e.s=109)}([function(t,n,e){var r=e(27)("wks"),i=e(20),o=e(1).Symbol,c="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=c&&o[t]||(c?o:i)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(2),i=e(43),o=e(44),c=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(1),i=e(8),o=e(11),c=e(20)("src"),a=e(69),u=(""+a).split("toString");e(13).inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,e,a){var s="function"==typeof e;s&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(s&&(o(e,c)||i(e,c,t[n]?""+t[n]:u.join(String(n)))),t===r?t[n]=e:a?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||a.call(this)})},function(t,n,e){var r=e(18);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(5),i=e(21);t.exports=e(4)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(1),i=e(13),o=e(8),c=e(6),a=e(7),u=function(t,n,e){var s,f,l,h,p=t&u.F,v=t&u.G,d=t&u.S,y=t&u.P,m=t&u.B,g=v?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,b=v?i:i[n]||(i[n]={}),I=b.prototype||(b.prototype={});for(s in v&&(e=n),e)l=((f=!p&&g&&void 0!==g[s])?g:e)[s],h=m&&f?a(l,r):y&&"function"==typeof l?a(Function.call,l):l,g&&c(g,s,l,t&u.U),b[s]!=l&&o(b,s,h),y&&I[s]!=l&&(I[s]=l)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports={}},function(t,n,e){var r=e(78),i=e(24);t.exports=function(t){return r(i(t))}},function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},function(t,n){t.exports=function(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(12),i=e(0)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(31),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n,e){var r=e(5).f,i=e(11),o=e(0)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(16);t.exports=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(n){r(t,n,e[n])})}return t}},function(t,n){t.exports=!1},function(t,n,e){var r=e(13),i=e(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(26)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(3),i=e(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(7),i=e(45),o=e(46),c=e(2),a=e(22),u=e(47),s={},f={};(n=t.exports=function(t,n,e,l,h){var p,v,d,y,m=h?function(){return t}:u(t),g=r(e,l,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(o(m)){for(p=a(t.length);p>b;b++)if((y=n?g(c(v=t[b])[0],v[1]):g(t[b]))===s||y===f)return y}else for(d=m.call(t);!(v=d.next()).done;)if((y=i(d,g,v.value,n))===s||y===f)return y}).BREAK=s,n.RETURN=f},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(6);t.exports=function(t,n,e){for(var i in n)r(t,i,n[i],e);return t}},function(t,n,e){var r=e(0)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],c=o[r]();c.next=function(){return{done:e=!0}},o[r]=function(){return c},t(o)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(77),i=e(54),o=e(14),c=e(15);t.exports=e(35)(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,n,e){"use strict";var r=e(26),i=e(10),o=e(6),c=e(8),a=e(14),u=e(79),s=e(23),f=e(84),l=e(0)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,n,e,v,d,y,m){u(e,n,v);var g,b,I,w=function(t){if(!h&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},x=n+" Iterator",j="values"==d,S=!1,E=t.prototype,Z=E[l]||E["@@iterator"]||d&&E[d],P=Z||w(d),G=d?j?w("entries"):P:void 0,R="Array"==n&&E.entries||Z;if(R&&(I=f(R.call(new t)))!==Object.prototype&&I.next&&(s(I,x,!0),r||"function"==typeof I[l]||c(I,l,p)),j&&Z&&"values"!==Z.name&&(S=!0,P=function(){return Z.call(this)}),r&&!m||!h&&!S&&E[l]||c(E,l,P),a[n]=P,a[x]=p,d)if(g={values:j?P:w("values"),keys:y?P:w("keys"),entries:G},m)for(b in g)b in E||o(E,b,g[b]);else i(i.P+i.F*(h||S),n,g);return g}},function(t,n,e){var r=e(81),i=e(56);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){var r=e(27)("keys"),i=e(20);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n,e){"use strict";var r=e(19),i={};i[e(0)("toStringTag")]="z",i+""!="[object z]"&&e(6)(Object.prototype,"toString",function(){return"[object "+r(this)+"]"},!0)},function(t,n,e){"use strict";var r,i,o=e(40),c=RegExp.prototype.exec,a=String.prototype.replace,u=c,s=(r=/a/,i=/b*/g,c.call(r,"a"),c.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(u=function(t){var n,e,r,i,u=this;return f&&(e=new RegExp("^"+u.source+"$(?!\\s)",o.call(u))),s&&(n=u.lastIndex),r=c.call(u,t),s&&r&&(u.lastIndex=u.global?r.index+r[0].length:n),f&&r&&r.length>1&&a.call(r[0],e,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=u},function(t,n,e){"use strict";var r=e(2);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){t.exports=e(75)},function(t,n,e){var r=e(94),i=e(95),o=e(96);t.exports=function(t){return r(t)||i(t)||o()}},function(t,n,e){t.exports=!e(4)&&!e(9)(function(){return 7!=Object.defineProperty(e(28)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(2);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},function(t,n,e){var r=e(14),i=e(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,n,e){var r=e(19),i=e(0)("iterator"),o=e(14);t.exports=e(13).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(2),i=e(18),o=e(0)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[o])?n:i(e)}},function(t,n,e){var r,i,o,c=e(7),a=e(70),u=e(50),s=e(28),f=e(1),l=f.process,h=f.setImmediate,p=f.clearImmediate,v=f.MessageChannel,d=f.Dispatch,y=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},b=function(t){g.call(t.data)};h&&p||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){a("function"==typeof t?t:Function(t),n)},r(y),y},p=function(t){delete m[t]},"process"==e(12)(l)?r=function(t){l.nextTick(c(g,t,1))}:d&&d.now?r=function(t){d.now(c(g,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=b,r=c(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in s("script")?function(t){u.appendChild(s("script")).onreadystatechange=function(){u.removeChild(this),g.call(t)}}:function(t){setTimeout(c(g,t,1),0)}),t.exports={set:h,clear:p}},function(t,n,e){var r=e(1).document;t.exports=r&&r.documentElement},function(t,n,e){"use strict";var r=e(18);function i(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new i(t)}},function(t,n,e){"use strict";var r=e(1),i=e(5),o=e(4),c=e(0)("species");t.exports=function(t){var n=r[t];o&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){for(var r=e(34),i=e(36),o=e(6),c=e(1),a=e(8),u=e(14),s=e(0),f=s("iterator"),l=s("toStringTag"),h=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),d=0;d<v.length;d++){var y,m=v[d],g=p[m],b=c[m],I=b&&b.prototype;if(I&&(I[f]||a(I,f,h),I[l]||a(I,l,m),u[m]=h,g))for(y in r)I[y]||o(I,y,r[y],!0)}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(2),i=e(80),o=e(56),c=e(37)("IE_PROTO"),a=function(){},u=function(){var t,n=e(28)("iframe"),r=o.length;for(n.style.display="none",e(50).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]];return u()};t.exports=Object.create||function(t,n){var e;return null!==t?(a.prototype=r(t),e=new a,a.prototype=null,e[c]=t):e=u(),void 0===n?e:i(e,n)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(24);t.exports=function(t){return Object(r(t))}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(20)("meta"),i=e(3),o=e(11),c=e(5).f,a=0,u=Object.isExtensible||function(){return!0},s=!e(9)(function(){return u(Object.preventExtensions({}))}),f=function(t){c(t,r,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!n)return"E";f(t)}return t[r].i},getWeak:function(t,n){if(!o(t,r)){if(!u(t))return!0;if(!n)return!1;f(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&u(t)&&!o(t,r)&&f(t),t}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,e){var r=e(31),i=e(24);t.exports=function(t){return function(n,e){var o,c,a=String(i(n)),u=r(e),s=a.length;return u<0||u>=s?t?"":void 0:(o=a.charCodeAt(u))<55296||o>56319||u+1===s||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):o:t?a.slice(u,u+2):c-56320+(o-55296<<10)+65536}}},function(t,n){function e(t,n,e,r,i,o,c){try{var a=t[o](c),u=a.value}catch(t){return void e(t)}a.done?n(u):Promise.resolve(u).then(r,i)}t.exports=function(t){return function(){var n=this,r=arguments;return new Promise(function(i,o){var c=t.apply(n,r);function a(t){e(c,i,o,a,u,"next",t)}function u(t){e(c,i,o,a,u,"throw",t)}a(void 0)})}}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n,e){var r,i;!function(o,c){"use strict";r=[e(87)],void 0===(i=function(t){return function(t,n){var e=t.jQuery,r=t.console;function i(t,n){for(var e in n)t[e]=n[e];return t}var o=Array.prototype.slice;function c(t,n,a){if(!(this instanceof c))return new c(t,n,a);var u=t;"string"==typeof t&&(u=document.querySelectorAll(t)),u?(this.elements=function(t){if(Array.isArray(t))return t;if("object"==typeof t&&"number"==typeof t.length)return o.call(t);return[t]}(u),this.options=i({},this.options),"function"==typeof n?a=n:i(this.options,n),a&&this.on("always",a),this.getImages(),e&&(this.jqDeferred=new e.Deferred),setTimeout(this.check.bind(this))):r.error("Bad element for imagesLoaded "+(u||t))}c.prototype=Object.create(n.prototype),c.prototype.options={},c.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},c.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var n=t.nodeType;if(n&&a[n]){for(var e=t.querySelectorAll("img"),r=0;r<e.length;r++){var i=e[r];this.addImage(i)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(r=0;r<o.length;r++){var c=o[r];this.addElementBackgroundImages(c)}}}};var a={1:!0,9:!0,11:!0};function u(t){this.img=t}function s(t,n){this.url=t,this.element=n,this.img=new Image}return c.prototype.addElementBackgroundImages=function(t){var n=getComputedStyle(t);if(n)for(var e=/url\((['"])?(.*?)\1\)/gi,r=e.exec(n.backgroundImage);null!==r;){var i=r&&r[2];i&&this.addBackground(i,t),r=e.exec(n.backgroundImage)}},c.prototype.addImage=function(t){var n=new u(t);this.images.push(n)},c.prototype.addBackground=function(t,n){var e=new s(t,n);this.images.push(e)},c.prototype.check=function(){var t=this;function n(n,e,r){setTimeout(function(){t.progress(n,e,r)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",n),t.check()}):this.complete()},c.prototype.progress=function(t,n,e){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,n]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+e,t,n)},c.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var n=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[n](this)}},u.prototype=Object.create(n.prototype),u.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(t,n){this.isLoaded=t,this.emitEvent("progress",[this,this.img,n])},u.prototype.handleEvent=function(t){var n="on"+t.type;this[n]&&this[n](t)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(u.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,n){this.isLoaded=t,this.emitEvent("progress",[this,this.element,n])},c.makeJQueryPlugin=function(n){(n=n||t.jQuery)&&((e=n).fn.imagesLoaded=function(t,n){return new c(this,t,n).jqDeferred.promise(e(this))})},c.makeJQueryPlugin(),c}(o,t)}.apply(n,r))||(t.exports=i)}("undefined"!=typeof window?window:this)},function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(n){return"function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?t.exports=r=function(t){return e(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},r(n)}t.exports=r},function(t,n,e){(t.exports=e(108)(!1)).push([t.i,'.ff-container {\n  display: inline-block;\n  position: relative; }\n  .ff-container .ff-image {\n    z-index: 0;\n    vertical-align: top;\n    opacity: 0; }\n  .ff-container .ff-canvas {\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    z-index: 1;\n    vertical-align: top;\n    opacity: 0; }\n    .ff-container .ff-canvas.ff-canvas-ready {\n      -webkit-transition: opacity 300ms;\n      -o-transition: opacity 300ms;\n      -moz-transition: opacity 300ms;\n      transition: opacity 300ms;\n      opacity: 1; }\n  .ff-container.ff-active .ff-image {\n    opacity: 1; }\n  .ff-container.ff-active .ff-canvas.ff-canvas-ready {\n    -webkit-transition: none;\n    -o-transition: none;\n    -moz-transition: none;\n    transition: none;\n    opacity: 0; }\n  .ff-container.ff-active .ff-overlay {\n    display: none; }\n  .ff-container.ff-inactive .ff-canvas.ff-canvas-ready {\n    -webkit-transition: opacity 300ms;\n    -o-transition: opacity 300ms;\n    -moz-transition: opacity 300ms;\n    transition: opacity 300ms;\n    opacity: 1; }\n  .ff-container.ff-inactive .ff-image {\n    -webkit-transition: opacity 300ms;\n    -o-transition: opacity 300ms;\n    -moz-transition: opacity 300ms;\n    transition: opacity 300ms;\n    -webkit-transition-delay: 170ms;\n       -moz-transition-delay: 170ms;\n         -o-transition-delay: 170ms;\n            transition-delay: 170ms;\n    opacity: 0; }\n  .ff-container.ff-responsive {\n    width: 100%; }\n    .ff-container.ff-responsive .ff-image, .ff-container.ff-responsive .ff-canvas {\n      width: 100%; }\n  .ff-container.ff-loading-icon {\n    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc1MHB4JyBoZWlnaHQ9JzUwcHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXNwaW4iPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiPjxnIHRyYW5zZm9ybT0icm90YXRlKDApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwcyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMHMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4xMnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMTJzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuMjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTM1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4zN3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMzdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxODApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyMjUpIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiNmZmZmZmYiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjYycyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC42MnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iI2ZmZmZmZiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuNzVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjc1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzE1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjZmZmZmZmIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC44N3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuODdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48L2c+PC9zdmc+");\n    background-position: center center;\n    background-repeat: no-repeat; }\n  .ff-container .ff-overlay {\n    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEVDRTVCRkQ1NDk3MTFFODhDMTBCMjQzOUUxRjExMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEVDRTVCRkU1NDk3MTFFODhDMTBCMjQzOUUxRjExMDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRUNFNUJGQjU0OTcxMUU4OEMxMEIyNDM5RTFGMTEwNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRUNFNUJGQzU0OTcxMUU4OEMxMEIyNDM5RTFGMTEwNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhPiVEwAAAoLSURBVHja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");\n    background-repeat: no-repeat;\n    max-width: 94px;\n    max-height: 94px;\n    position: absolute;\n    left: 0%;\n    right: 0%;\n    top: 0%;\n    bottom: 0%;\n    margin: auto;\n    -webkit-background-size: contain;\n       -moz-background-size: contain;\n            background-size: contain;\n    background-position: center;\n    pointer-events: none;\n    z-index: 100; }\n',""])},function(t,n,e){"use strict";var r,i,o,c,a=e(26),u=e(1),s=e(7),f=e(19),l=e(10),h=e(3),p=e(18),v=e(29),d=e(30),y=e(48),m=e(49).set,g=e(71)(),b=e(51),I=e(72),w=e(73),x=e(74),j=u.TypeError,S=u.process,E=S&&S.versions,Z=E&&E.v8||"",P=u.Promise,G="process"==f(S),R=function(){},L=i=b.f,O=!!function(){try{var t=P.resolve(1),n=(t.constructor={})[e(0)("species")]=function(t){t(R,R)};return(G||"function"==typeof PromiseRejectionEvent)&&t.then(R)instanceof n&&0!==Z.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),A=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},k=function(t,n){if(!t._n){t._n=!0;var e=t._c;g(function(){for(var r=t._v,i=1==t._s,o=0,c=function(n){var e,o,c,a=i?n.ok:n.fail,u=n.resolve,s=n.reject,f=n.domain;try{a?(i||(2==t._h&&M(t),t._h=1),!0===a?e=r:(f&&f.enter(),e=a(r),f&&(f.exit(),c=!0)),e===n.promise?s(j("Promise-chain cycle")):(o=A(e))?o.call(e,u,s):u(e)):s(r)}catch(t){f&&!c&&f.exit(),s(t)}};e.length>o;)c(e[o++]);t._c=[],t._n=!1,n&&!t._h&&W(t)})}},W=function(t){m.call(u,function(){var n,e,r,i=t._v,o=N(t);if(o&&(n=I(function(){G?S.emit("unhandledRejection",i,t):(e=u.onunhandledrejection)?e({promise:t,reason:i}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=G||N(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},M=function(t){m.call(u,function(){var n;G?S.emit("rejectionHandled",t):(n=u.onrejectionhandled)&&n({promise:t,reason:t._v})})},F=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),k(n,!0))},T=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw j("Promise can't be resolved itself");(n=A(t))?g(function(){var r={_w:e,_d:!1};try{n.call(t,s(T,r,1),s(F,r,1))}catch(t){F.call(r,t)}}):(e._v=t,e._s=1,k(e,!1))}catch(t){F.call({_w:e,_d:!1},t)}}};O||(P=function(t){v(this,P,"Promise","_h"),p(t),r.call(this);try{t(s(T,this,1),s(F,this,1))}catch(t){F.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(32)(P.prototype,{then:function(t,n){var e=L(y(this,P));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=G?S.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&k(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=s(T,t,1),this.reject=s(F,t,1)},b.f=L=function(t){return t===P||t===c?new o(t):i(t)}),l(l.G+l.W+l.F*!O,{Promise:P}),e(23)(P,"Promise"),e(52)("Promise"),c=e(13).Promise,l(l.S+l.F*!O,"Promise",{reject:function(t){var n=L(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(a||!O),"Promise",{resolve:function(t){return x(a&&this===c?P:this,t)}}),l(l.S+l.F*!(O&&e(33)(function(t){P.all(t).catch(R)})),"Promise",{all:function(t){var n=this,e=L(n),r=e.resolve,i=e.reject,o=I(function(){var e=[],o=0,c=1;d(t,!1,function(t){var a=o++,u=!1;e.push(void 0),c++,n.resolve(t).then(function(t){u||(u=!0,e[a]=t,--c||r(e))},i)}),--c||r(e)});return o.e&&i(o.v),e.promise},race:function(t){var n=this,e=L(n),r=e.reject,i=I(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return i.e&&r(i.v),e.promise}})},function(t,n,e){t.exports=e(27)("native-function-to-string",Function.toString)},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(1),i=e(49).set,o=r.MutationObserver||r.WebKitMutationObserver,c=r.process,a=r.Promise,u="process"==e(12)(c);t.exports=function(){var t,n,e,s=function(){var r,i;for(u&&(r=c.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(u)e=function(){c.nextTick(s)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);e=function(){f.then(s)}}else e=function(){i.call(r,s)};else{var l=!0,h=document.createTextNode("");new o(s).observe(h,{characterData:!0}),e=function(){h.data=l=!l}}return function(r){var i={fn:r,next:void 0};n&&(n.next=i),t||(t=i,e()),n=i}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(1).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){var r=e(2),i=e(3),o=e(51);t.exports=function(t,n){if(r(t),i(n)&&n.constructor===t)return n;var e=o.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function u(t,n,e,r){var i=n&&n.prototype instanceof d?n:d,o=Object.create(i.prototype),c=new P(r||[]);return o._invoke=function(t,n,e){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return R()}for(e.method=i,e.arg=o;;){var c=e.delegate;if(c){var a=S(c,e);if(a){if(a===v)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var u=s(t,n,e);if("normal"===u.type){if(r=e.done?p:l,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=p,e.method="throw",e.arg=u.arg)}}}(t,e,c),o}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",v={};function d(){}function y(){}function m(){}var g={};g[o]=function(){return this};var b=Object.getPrototypeOf,I=b&&b(b(G([])));I&&I!==e&&r.call(I,o)&&(g=I);var w=m.prototype=d.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function j(t){var n;this._invoke=function(e,i){function o(){return new Promise(function(n,o){!function n(e,i,o,c){var a=s(t[e],t,i);if("throw"!==a.type){var u=a.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){n("next",t,o,c)},function(t){n("throw",t,o,c)}):Promise.resolve(f).then(function(t){u.value=t,o(u)},function(t){return n("throw",t,o,c)})}c(a.arg)}(e,i,n,o)})}return n=n?n.then(o,o):o()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=s(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function Z(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function G(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,c=function e(){for(;++i<t.length;)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return c.next=c}}return{next:R}}function R(){return{value:n,done:!0}}return y.prototype=w.constructor=m,m.constructor=y,m[a]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(j.prototype),j.prototype[c]=function(){return this},t.AsyncIterator=j,t.async=function(n,e,r,i){var o=new j(u(n,e,r,i));return t.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(w),w[a]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(r,i){return a.type="throw",a.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return i("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return i(c.catchLoc,!0);if(this.prev<c.finallyLoc)return i(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return i(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return i(c.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=n,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;Z(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:G(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function u(t,n,e,r){var i=n&&n.prototype instanceof d?n:d,o=Object.create(i.prototype),c=new P(r||[]);return o._invoke=function(t,n,e){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return R()}for(e.method=i,e.arg=o;;){var c=e.delegate;if(c){var a=S(c,e);if(a){if(a===v)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var u=s(t,n,e);if("normal"===u.type){if(r=e.done?p:l,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=p,e.method="throw",e.arg=u.arg)}}}(t,e,c),o}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",v={};function d(){}function y(){}function m(){}var g={};g[o]=function(){return this};var b=Object.getPrototypeOf,I=b&&b(b(G([])));I&&I!==e&&r.call(I,o)&&(g=I);var w=m.prototype=d.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function j(t){var n;this._invoke=function(e,i){function o(){return new Promise(function(n,o){!function n(e,i,o,c){var a=s(t[e],t,i);if("throw"!==a.type){var u=a.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){n("next",t,o,c)},function(t){n("throw",t,o,c)}):Promise.resolve(f).then(function(t){u.value=t,o(u)},function(t){return n("throw",t,o,c)})}c(a.arg)}(e,i,n,o)})}return n=n?n.then(o,o):o()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=s(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function Z(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function G(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,c=function e(){for(;++i<t.length;)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return c.next=c}}return{next:R}}function R(){return{value:n,done:!0}}return y.prototype=w.constructor=m,m.constructor=y,m[a]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(j.prototype),j.prototype[c]=function(){return this},t.AsyncIterator=j,t.async=function(n,e,r,i){var o=new j(u(n,e,r,i));return t.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(w),w[a]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=G,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(r,i){return a.type="throw",a.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return i("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return i(c.catchLoc,!0);if(this.prev<c.finallyLoc)return i(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return i(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return i(c.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=n,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),Z(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;Z(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:G(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,n,e){var r=e(0)("unscopables"),i=Array.prototype;null==i[r]&&e(8)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,n,e){var r=e(12);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){"use strict";var r=e(55),i=e(21),o=e(23),c={};e(8)(c,e(0)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(c,{next:i(1,e)}),o(t,n+" Iterator")}},function(t,n,e){var r=e(5),i=e(2),o=e(36);t.exports=e(4)?Object.defineProperties:function(t,n){i(t);for(var e,c=o(n),a=c.length,u=0;a>u;)r.f(t,e=c[u++],n[e]);return t}},function(t,n,e){var r=e(11),i=e(15),o=e(82)(!1),c=e(37)("IE_PROTO");t.exports=function(t,n){var e,a=i(t),u=0,s=[];for(e in a)e!=c&&r(a,e)&&s.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~o(s,e)||s.push(e));return s}},function(t,n,e){var r=e(15),i=e(22),o=e(83);t.exports=function(t){return function(n,e,c){var a,u=r(n),s=i(u.length),f=o(c,s);if(t&&e!=e){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(31),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(11),i=e(57),o=e(37)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,n,e){var r=e(10),i=e(86)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},function(t,n,e){var r=e(36),i=e(15),o=e(58).f;t.exports=function(t){return function(n){for(var e,c=i(n),a=r(c),u=a.length,s=0,f=[];u>s;)o.call(c,e=a[s++])&&f.push(t?[e,c[e]]:c[e]);return f}}},function(t,n,e){var r,i;"undefined"!=typeof window&&window,void 0===(i="function"==typeof(r=function(){"use strict";function t(){}var n=t.prototype;return n.on=function(t,n){if(t&&n){var e=this._events=this._events||{},r=e[t]=e[t]||[];return-1==r.indexOf(n)&&r.push(n),this}},n.once=function(t,n){if(t&&n){this.on(t,n);var e=this._onceEvents=this._onceEvents||{};return(e[t]=e[t]||{})[n]=!0,this}},n.off=function(t,n){var e=this._events&&this._events[t];if(e&&e.length){var r=e.indexOf(n);return-1!=r&&e.splice(r,1),this}},n.emitEvent=function(t,n){var e=this._events&&this._events[t];if(e&&e.length){e=e.slice(0),n=n||[];for(var r=this._onceEvents&&this._onceEvents[t],i=0;i<e.length;i++){var o=e[i];r&&r[o]&&(this.off(t,o),delete r[o]),o.apply(this,n)}return this}},n.allOff=function(){delete this._events,delete this._onceEvents},t})?r.call(n,e,n,t):r)||(t.exports=i)},function(t,n,e){"use strict";var r=e(89),i=e(60);t.exports=e(90)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},function(t,n,e){"use strict";var r=e(5).f,i=e(55),o=e(32),c=e(7),a=e(29),u=e(30),s=e(35),f=e(54),l=e(52),h=e(4),p=e(59).fastKey,v=e(60),d=h?"_s":"size",y=function(t,n){var e,r=p(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,s){var f=t(function(t,r){a(t,f,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,null!=r&&u(r,e,t[s],t)});return o(f.prototype,{clear:function(){for(var t=v(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var e=v(this,n),r=y(e,t);if(r){var i=r.n,o=r.p;delete e._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),e._f==r&&(e._f=i),e._l==r&&(e._l=o),e[d]--}return!!r},forEach:function(t){v(this,n);for(var e,r=c(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(v(this,n),t)}}),h&&r(f.prototype,"size",{get:function(){return v(this,n)[d]}}),f},def:function(t,n,e){var r,i,o=y(t,n);return o?o.v=e:(t._l=o={i:i=p(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,n,e){s(t,n,function(t,e){this._t=v(t,n),this._k=e,this._l=void 0},function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))},e?"entries":"values",!e,!0),l(n)}}},function(t,n,e){"use strict";var r=e(1),i=e(10),o=e(6),c=e(32),a=e(59),u=e(30),s=e(29),f=e(3),l=e(9),h=e(33),p=e(23),v=e(91);t.exports=function(t,n,e,d,y,m){var g=r[t],b=g,I=y?"set":"add",w=b&&b.prototype,x={},j=function(t){var n=w[t];o(w,t,"delete"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!f(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof b&&(m||w.forEach&&!l(function(){(new b).entries().next()}))){var S=new b,E=S[I](m?{}:-0,1)!=S,Z=l(function(){S.has(1)}),P=h(function(t){new b(t)}),G=!m&&l(function(){for(var t=new b,n=5;n--;)t[I](n,n);return!t.has(-0)});P||((b=n(function(n,e){s(n,b,t);var r=v(new g,n,b);return null!=e&&u(e,y,r[I],r),r})).prototype=w,w.constructor=b),(Z||G)&&(j("delete"),j("has"),y&&j("get")),(G||E)&&j(I),m&&w.clear&&delete w.clear}else b=d.getConstructor(n,t,y,I),c(b.prototype,e),a.NEED=!0;return p(b,t),x[t]=b,i(i.G+i.W+i.F*(b!=g),x),m||d.setStrong(b,t,y),b}},function(t,n,e){var r=e(3),i=e(92).set;t.exports=function(t,n,e){var o,c=n.constructor;return c!==e&&"function"==typeof c&&(o=c.prototype)!==e.prototype&&r(o)&&i&&i(t,o),t}},function(t,n,e){var r=e(3),i=e(2),o=function(t,n){if(i(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(7)(Function.call,e(93).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},function(t,n,e){var r=e(58),i=e(21),o=e(15),c=e(44),a=e(11),u=e(43),s=Object.getOwnPropertyDescriptor;n.f=e(4)?s:function(t,n){if(t=o(t),n=c(n,!0),u)try{return s(t,n)}catch(t){}if(a(t,n))return i(!r.f.call(t,n),t[n])}},function(t,n){t.exports=function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}},function(t,n){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,n,e){"use strict";var r=e(61)(!0);e(35)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(7),i=e(10),o=e(57),c=e(45),a=e(46),u=e(22),s=e(99),f=e(47);i(i.S+i.F*!e(33)(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,i,l,h=o(t),p="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,m=0,g=f(h);if(y&&(d=r(d,v>2?arguments[2]:void 0,2)),null==g||p==Array&&a(g))for(e=new p(n=u(h.length));n>m;m++)s(e,m,y?d(h[m],m):h[m]);else for(l=g.call(h),e=new p;!(i=l.next()).done;m++)s(e,m,y?c(l,d,[i.value,m],!0):i.value);return e.length=m,e}})},function(t,n,e){"use strict";var r=e(5),i=e(21);t.exports=function(t,n,e){n in t?r.f(t,n,i(0,e)):t[n]=e}},function(t,n,e){"use strict";var r=e(101),i=e(2),o=e(48),c=e(102),a=e(22),u=e(103),s=e(39),f=e(9),l=Math.min,h=[].push,p=!f(function(){RegExp(4294967295,"y")});e(104)("split",2,function(t,n,e,f){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);for(var o,c,a,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,p=void 0===n?4294967295:n>>>0,v=new RegExp(t.source,f+"g");(o=s.call(v,i))&&!((c=v.lastIndex)>l&&(u.push(i.slice(l,o.index)),o.length>1&&o.index<i.length&&h.apply(u,o.slice(1)),a=o[0].length,l=c,u.length>=p));)v.lastIndex===o.index&&v.lastIndex++;return l===i.length?!a&&v.test("")||u.push(""):u.push(i.slice(l)),u.length>p?u.slice(0,p):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i,r):v.call(String(i),e,r)},function(t,n){var r=f(v,t,this,n,v!==e);if(r.done)return r.value;var s=i(t),h=String(this),d=o(s,RegExp),y=s.unicode,m=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(p?"y":"g"),g=new d(p?s:"^(?:"+s.source+")",m),b=void 0===n?4294967295:n>>>0;if(0===b)return[];if(0===h.length)return null===u(g,h)?[h]:[];for(var I=0,w=0,x=[];w<h.length;){g.lastIndex=p?w:0;var j,S=u(g,p?h:h.slice(w));if(null===S||(j=l(a(g.lastIndex+(p?0:w)),h.length))===I)w=c(h,w,y);else{if(x.push(h.slice(I,w)),x.length===b)return x;for(var E=1;E<=S.length-1;E++)if(x.push(S[E]),x.length===b)return x;w=I=j}}return x.push(h.slice(I)),x}]})},function(t,n,e){var r=e(3),i=e(12),o=e(0)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},function(t,n,e){"use strict";var r=e(61)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){"use strict";var r=e(19),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},function(t,n,e){"use strict";e(105);var r=e(6),i=e(8),o=e(9),c=e(24),a=e(0),u=e(39),s=a("species"),f=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var h=a(t),p=!o(function(){var n={};return n[h]=function(){return 7},7!=""[t](n)}),v=p?!o(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[s]=function(){return e}),e[h](""),!n}):void 0;if(!p||!v||"replace"===t&&!f||"split"===t&&!l){var d=/./[h],y=e(c,h,""[t],function(t,n,e,r,i){return n.exec===u?p&&!i?{done:!0,value:d.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),m=y[0],g=y[1];r(String.prototype,t,m),i(RegExp.prototype,h,2==n?function(t,n){return g.call(t,this,n)}:function(t){return g.call(t,this)})}}},function(t,n,e){"use strict";var r=e(39);e(10)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,n,e){"use strict";e(107);var r=e(2),i=e(40),o=e(4),c=/./.toString,a=function(t){e(6)(RegExp.prototype,"toString",t,!0)};e(9)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?a(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=c.name&&a(function(){return c.call(this)})},function(t,n,e){e(4)&&"g"!=/./g.flags&&e(5).f(RegExp.prototype,"flags",{configurable:!0,get:e(40)})},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var i=(c=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(o).concat([i]).join("\n")}var c;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var c=t[i];null!=c[0]&&r[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="("+c[2]+") and ("+e+")"),n.push(c))}},n}},function(t,n,e){"use strict";e.r(n);e(68);var r,i,o=e(41),c=e.n(o),a=(e(76),e(62)),u=e.n(a),s=(e(53),e(34),e(38),e(85),e(25)),f=e.n(s),l=e(63),h=e.n(l),p=e(64),v=e.n(p),d=e(16),y=e.n(d),m=e(65),g=e.n(m),b=(e(88),e(42)),I=e.n(b),w=(e(97),e(98),e(66)),x=e.n(w),j=(e(100),function(t){return"✨Freezeframe: ".concat(t,"✨")}),S=function(t){var n=t;return"string"===x()(n)?document.querySelectorAll(n):n},E=function(t){var n=t instanceof HTMLElement?[t]:t;return Array.from(n).reduce(function(t,n){if(n instanceof HTMLImageElement)t.push(n),"gif"!==function(t){return t.split(".").pop().toLowerCase().substring(0,3)}(n.src)&&function(t){for(var n,e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];(n=console).warn.apply(n,[j(t)].concat(r))}("Image is not a gif",n);else{var e,r=n.querySelectorAll("img");if(r.length)t=(e=t).concat.apply(e,I()(r));else!function(t){for(var n,e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];(n=console).error.apply(n,[j(t)].concat(r))}("Invalid element",n)}return t},[])},Z=function(t){return I()(new Set(t))},P=function(t){var n=window.document.createElement("div");n.innerHTML=t;var e=n.childNodes;return e.length>1?e:e[0]},G=(e(106),e(17)),R=e.n(G),L=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),O=(r=["",""],i=["",""],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}})));var A=function(){function t(){for(var n=this,e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.tag=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return"function"==typeof t?n.interimTag.bind(n,t):"string"==typeof t?n.transformEndResult(t):(t=t.map(n.transformString.bind(n)),n.transformEndResult(t.reduce(n.processSubstitutions.bind(n,r))))},r.length>0&&Array.isArray(r[0])&&(r=r[0]),this.transformers=r.map(function(t){return"function"==typeof t?t():t}),this.tag}return L(t,[{key:"interimTag",value:function(t,n){for(var e=arguments.length,r=Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];return this.tag(O,t.apply(void 0,[n].concat(r)))}},{key:"processSubstitutions",value:function(t,n,e){var r=this.transformSubstitution(t.shift(),n);return"".concat(n,r,e)}},{key:"transformString",value:function(t){return this.transformers.reduce(function(t,n){return n.onString?n.onString(t):t},t)}},{key:"transformSubstitution",value:function(t,n){return this.transformers.reduce(function(t,e){return e.onSubstitution?e.onSubstitution(t,n):t},t)}},{key:"transformEndResult",value:function(t){return this.transformers.reduce(function(t,n){return n.onEndResult?n.onEndResult(t):t},t)}}]),t}(),k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(n){if(""===t)return n.trim();if("start"===(t=t.toLowerCase())||"left"===t)return n.replace(/^\s*/,"");if("end"===t||"right"===t)return n.replace(/\s*$/,"");throw new Error("Side not supported: "+t)}}};function W(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}var N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(n){if("initial"===t){var e=n.match(/^[^\S\n]*(?=\S)/gm),r=e&&Math.min.apply(Math,W(e.map(function(t){return t.length})));if(r){var i=new RegExp("^.{"+r+"}","gm");return n.replace(i,"")}return n}if("all"===t)return n.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+t)}}},M=function(t,n){return{onEndResult:function(e){if(null==t||null==n)throw new Error("replaceResultTransformer requires at least 2 arguments.");return e.replace(t,n)}}},F=function(t,n){return{onSubstitution:function(e,r){if(null==t||null==n)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==e?e:e.toString().replace(t,n)}}},T={separator:"",conjunction:"",serial:!1},Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return{onSubstitution:function(n,e){if(Array.isArray(n)){var r=n.length,i=t.separator,o=t.conjunction,c=t.serial,a=e.match(/(\n?[^\S\n]+)$/);if(n=a?n.join(i+a[1]):n.join(i+" "),o&&r>1){var u=n.lastIndexOf(i);n=n.slice(0,u)+(c?i:"")+" "+o+n.slice(u+1)}}return n}}},_=function(t){return{onSubstitution:function(n,e){if(null==t||"string"!=typeof t)throw new Error("You need to specify a string character to split by.");return"string"==typeof n&&n.includes(t)&&(n=n.split(t)),n}}},z=function(t){return null!=t&&!Number.isNaN(t)&&"boolean"!=typeof t},C=function(){return{onSubstitution:function(t){return Array.isArray(t)?t.filter(z):z(t)?t:""}}},B=(new A(Y({separator:","}),N,k),new A(Y({separator:",",conjunction:"and"}),N,k),new A(Y({separator:",",conjunction:"or"}),N,k),new A(_("\n"),C,Y,N,k)),D=(new A(_("\n"),Y,N,k,F(/&/g,"&amp;"),F(/</g,"&lt;"),F(/>/g,"&gt;"),F(/"/g,"&quot;"),F(/'/g,"&#x27;"),F(/`/g,"&#x60;")),new A(M(/(?:\n(?:\s*))+/g," "),k),new A(M(/(?:\n\s*)/g,""),k),new A(Y({separator:","}),M(/(?:\s+)/g," "),k),new A(Y({separator:",",conjunction:"or"}),M(/(?:\s+)/g," "),k),new A(Y({separator:",",conjunction:"and"}),M(/(?:\s+)/g," "),k),new A(Y,N,k),new A(Y,M(/(?:\s+)/g," "),k),new A(N,k),new A(N("all"),k),{SELECTOR:".freezeframe",CONTAINER:"ff-container",LOADING_ICON:"ff-loading-icon",IMAGE:"ff-image",CANVAS:"ff-canvas",READY:"ff-ready",INACTIVE:"ff-inactive",ACTIVE:"ff-active",CANVAS_READY:"ff-canvas-ready",RESPONSIVE:"ff-responsive",OVERLAY:"ff-overlay"}),V={responsive:!0,trigger:"hover",overlay:!1},H={START:"start",STOP:"stop",TOGGLE:"toggle"},X=e(67),J=e.n(X);function U(){var t=R()(['\n    <div class="','">\n    </div>\n  ']);return U=function(){return t},t}function q(){var t=R()(['\n    <canvas class="','" width="0" height="0">\n    </canvas>\n  ']);return q=function(){return t},t}function Q(){var t=R()(['\n    <div class="'," ",'">\n    </div>\n  ']);return Q=function(){return t},t}function K(){var t=R()(["\n    <style>\n      ","\n    </style>\n  "]);return K=function(){return t},t}var $=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.SELECTOR,e=arguments.length>1?arguments[1]:void 0;h()(this,t),y()(this,"items",[]),y()(this,"$images",[]),y()(this,"eventListeners",f()({},Object.values(H).reduce(function(t,n){return t[n]=[],t},{}))),this.options=n instanceof Object&&!e?f()({},V,n):f()({},V,e);var r=this.options.selector||n;this.init(r)}return v()(t,[{key:"init",value:function(t){this.injectStylesheet(),this.isTouch="ontouchstart"in window||"onmsgesturechange"in window,this.capture(t),this.load(this.$images)}},{key:"capture",value:function(t){this.$images=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.reduceRight(function(t,n){return function(){return t(n.apply(void 0,arguments))}})}(S,E,Z)(t)}},{key:"load",value:function(t){var n=this;g()(t).on("progress",function(t,e){var r=e.img;n.setup(r)})}},{key:"setup",value:function(){var t=u()(c.a.mark(function t(n){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.wrap(n),this.items.push(e),t.next=4,this.process(e);case 4:this.attach(e);case 5:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}()},{key:"wrap",value:function(t){var n,e,r=P(B(Q(),D.CONTAINER,D.LOADING_ICON)),i=P(B(q(),D.CANVAS));return this.options.responsive&&r.classList.add(D.RESPONSIVE),this.options.overlay&&r.appendChild(P(B(U(),D.OVERLAY))),t.classList.add(D.IMAGE),r.appendChild(i),e=r,(n=t).parentNode.insertBefore(e,n),e.appendChild(n),{$container:r,$canvas:i,$image:t}}},{key:"process",value:function(t){var n=this;return new Promise(function(e){var r=t.$canvas,i=t.$image,o=t.$container,c=i.clientWidth,a=i.clientHeight;r.setAttribute("width",c),r.setAttribute("height",a),r.getContext("2d").drawImage(i,0,0,c,a),r.classList.add(D.CANVAS_READY),r.addEventListener("transitionend",function(){n.ready(o),e(t)},{once:!0})})}},{key:"ready",value:function(t){t.classList.add(D.READY),t.classList.add(D.INACTIVE),t.classList.remove(D.LOADING_ICON)}},{key:"attach",value:function(t){var n=this,e=t.$image;this.isTouch||"hover"!==this.options.trigger||(e.addEventListener("mouseenter",function(){n.toggleOn(t),n.emit(H.START,t,!0),n.emit(H.TOGGLE,t,!0)}),e.addEventListener("mouseleave",function(){n.toggleOff(t),n.emit(H.START,t,!1),n.emit(H.TOGGLE,t,!1)})),(this.isTouch||"click"===this.options.trigger)&&e.addEventListener("click",function(){n.toggle(t)})}},{key:"injectStylesheet",value:function(){document.head.appendChild(P(B(K(),J.a.toString())))}},{key:"toggleOff",value:function(t){var n=t.$container;n.classList.contains(D.READY)&&(n.classList.add(D.INACTIVE),n.classList.remove(D.ACTIVE))}},{key:"toggleOn",value:function(t){var n=t.$container,e=t.$image;n.classList.contains(D.READY)&&(e.setAttribute("src",e.src),n.classList.remove(D.INACTIVE),n.classList.add(D.ACTIVE))}},{key:"emit",value:function(t,n,e){this.eventListeners[t].forEach(function(t){t(1===n.length?n[0]:n,e)})}},{key:"toggle",value:function(t){t.$container.classList.contains(D.ACTIVE)?this.toggleOff(t):this.toggleOn(t)}},{key:"start",value:function(){var t=this;this.items.forEach(function(n){t.toggleOn(n)}),this.emit(H.START,this.items,!0),this.emit(H.TOGGLE,this.items,!0)}},{key:"stop",value:function(){var t=this;this.items.forEach(function(n){t.toggleOff(n)}),this.emit(H.STOP,this.items,!1),this.emit(H.TOGGLE,this.items,!1)}},{key:"on",value:function(t,n){this.eventListeners[t].push(n)}}]),t}();n.default=$}]).default});

/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2dbb5e58-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Freezeframe.vue?vue&type=template&id=a9915d00&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-freezeframe"},[(_vm.$slots.default)?_vm._t("default"):(_vm.src)?_c('img',{ref:"img",attrs:{"src":_vm.src}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Freezeframe.vue?vue&type=template&id=a9915d00&

// EXTERNAL MODULE: ./node_modules/freezeframe/dist/freezeframe.min.js
var freezeframe_min = __webpack_require__("5233");
var freezeframe_min_default = /*#__PURE__*/__webpack_require__.n(freezeframe_min);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Freezeframe.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Freezeframevue_type_script_lang_js_ = ({
  name: 'freezeframe',
  props: {
    src: {
      type: String,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted: function mounted() {
    if (this.$slots.default) {
      this.$freezeframe = new freezeframe_min_default.a(this.$el, this.options);
    } else if (this.src) {
      this.$freezeframe = new freezeframe_min_default.a(this.$refs.img, this.options);
    }

    this.addEventListeners();
  },
  methods: {
    start: function start() {
      this.$freezeframe.start();
    },
    stop: function stop() {
      this.$freezeframe.stop();
    },
    addEventListeners: function addEventListeners() {
      var _this = this;

      if (this.$freezeframe) {
        this.$freezeframe.on('toggle', function (items, isPlaying) {
          var event = isPlaying ? 'start' : 'stop';

          _this.$emit(event, items, isPlaying);

          _this.$emit('toggle', items, isPlaying);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Freezeframe.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Freezeframevue_type_script_lang_js_ = (Freezeframevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Freezeframe.vue





/* normalize component */

var component = normalizeComponent(
  components_Freezeframevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Freezeframe = (component.exports);
// CONCATENATED MODULE: ./src/lib.js


/* harmony default export */ var lib = ({
  name: 'vue-freezeframe',
  install: function install(Vue) {
    Vue.component(this.name, Freezeframe);
  }
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport VueFreezeframe */__webpack_require__.d(__webpack_exports__, "VueFreezeframe", function() { return Freezeframe; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ })

/******/ });
//# sourceMappingURL=freezeframe.common.js.map