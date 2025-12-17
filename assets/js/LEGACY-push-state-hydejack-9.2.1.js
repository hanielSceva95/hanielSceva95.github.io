(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["push-state"],{

/***/ "./_js/src/cross-fader.js":
/*!********************************!*\
  !*** ./_js/src/cross-fader.js ***!
  \********************************/
/*! exports provided: CrossFader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossFader", function() { return CrossFader; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./_js/src/common.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Copyright (c) 2019 Florian Klampfer <https://qwtel.com/>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.




var RE_CSS_URL = /url[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\(["']?(((?:[\0-!#-&\(-\[\]-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|\\(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))*)["']?\)/;

/** @param {Document} doc */
var calcHash = function calcHash(doc) {
  var _pageStyle$innerText;
  var sidebar = doc.getElementById('_sidebar');
  var sidebarBg = sidebar === null || sidebar === void 0 ? void 0 : sidebar.querySelector('.sidebar-bg');
  var pageStyle = doc.getElementById('_pageStyle');
  // const rule = Array.from(pageStyle?.sheet?.rules ?? []).find(r => r.selectorText === 'html');
  // const accentColor = rule?.style.getPropertyValue('--accent-color') ?? '';
  // const themeColor = rule?.style.getPropertyValue('--theme-color') ?? '';
  return [pageStyle === null || pageStyle === void 0 || (_pageStyle$innerText = pageStyle.innerText) === null || _pageStyle$innerText === void 0 ? void 0 : _pageStyle$innerText.trim(), sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList, sidebarBg === null || sidebarBg === void 0 ? void 0 : sidebarBg.classList, sidebarBg === null || sidebarBg === void 0 ? void 0 : sidebarBg.style.backgroundImage].join('\n');
};

/**
 * Consider a URL external if either the protocol, hostname or port is different.
 * @param {URL} param0
 * @param {Location=} location
 */
function isExternal(_ref) {
  var protocol = _ref.protocol,
    host = _ref.host;
  var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location;
  return protocol !== location.protocol || host !== location.host;
}
var objectURLs = new WeakMap();
var CrossFader = /*#__PURE__*/function () {
  /** @param {number} fadeDuration */
  function CrossFader(fadeDuration) {
    _classCallCheck(this, CrossFader);
    this.sidebar = document.getElementById('_sidebar');
    this.fadeDuration = fadeDuration;
    this.prevHash = calcHash(document);
    this.themeColorEl = document.querySelector('meta[name="theme-color"]');
  }

  /** @param {Document} newDocument */
  return _createClass(CrossFader, [{
    key: "fetchImage2",
    value: function fetchImage2(newDocument) {
      var _newDocument$querySel, _newDocument$querySel2;
      var _ref2 = (_newDocument$querySel = (_newDocument$querySel2 = newDocument.querySelector('.sidebar-bg')) === null || _newDocument$querySel2 === void 0 ? void 0 : _newDocument$querySel2.style) !== null && _newDocument$querySel !== void 0 ? _newDocument$querySel : {},
        _ref2$backgroundImage = _ref2.backgroundImage,
        backgroundImage = _ref2$backgroundImage === void 0 ? '' : _ref2$backgroundImage;
      var result = RE_CSS_URL.exec(backgroundImage);
      if (!result) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])('');
      }
      var url = new URL(result[1], window.location.origin);
      return Object(_common__WEBPACK_IMPORTED_MODULE_2__["fetchRx"])(url.href, _objectSpread({
        method: 'GET',
        headers: {
          Accept: 'image/*'
        }
      }, isExternal(url) ? {
        mode: 'cors'
      } : {})).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (r) {
        return r.blob();
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (blob) {
        return URL.createObjectURL(blob);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(url.href);
      }));
    }

    /** @param {Document} newDocument */
  }, {
    key: "fetchImage",
    value: function fetchImage(newDocument) {
      var hash = calcHash(newDocument);
      if (hash === this.prevHash) return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
      return this.fetchImage2(newDocument).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (objectURL) {
        var _newDocument$querySel3;
        /** @type {HTMLDivElement} */
        var div = (_newDocument$querySel3 = newDocument.querySelector('.sidebar-bg')) !== null && _newDocument$querySel3 !== void 0 ? _newDocument$querySel3 : document.createElement('div');
        if (objectURL) {
          div.style.backgroundImage = "url(".concat(objectURL, ")");
          objectURLs.set(div, objectURL);
        }
        return [div, hash, newDocument];
      }));
    }

    /** @param {Document} newDocument */
  }, {
    key: "updateStyle",
    value: function updateStyle(newDocument) {
      var _newDocument$getEleme,
        _this = this;
      var classList = (_newDocument$getEleme = newDocument.getElementById('_sidebar')) === null || _newDocument$getEleme === void 0 ? void 0 : _newDocument$getEleme.classList;
      if (classList) this.sidebar.setAttribute('class', classList);
      if (this.themeColorEl) {
        var _newDocument$head$que;
        var themeColor = (_newDocument$head$que = newDocument.head.querySelector('meta[name="theme-color"]')) === null || _newDocument$head$que === void 0 ? void 0 : _newDocument$head$que.content;
        if (themeColor) {
          window.setTimeout(function () {
            if (_this.themeColorEl) {
              _this.themeColorEl.content = themeColor;
            }
          }, 250);
        }
      }
      try {
        var _pageStyle$parentNode;
        var pageStyle = document.getElementById('_pageStyle');
        var newPageStyle = newDocument.getElementById('_pageStyle');
        if (!newPageStyle) return;
        pageStyle === null || pageStyle === void 0 || (_pageStyle$parentNode = pageStyle.parentNode) === null || _pageStyle$parentNode === void 0 || _pageStyle$parentNode.replaceChild(newPageStyle, pageStyle);
      } catch (e) {
        if (true) console.error(e);
      }
    }

    /**
     * @param {[HTMLDivElement]} param0
     * @param {[HTMLDListElement, string, Document]} param1
     */
  }, {
    key: "fade",
    value: function fade(_ref3, _ref4) {
      var _prevDiv$parentNode;
      var _ref5 = _slicedToArray(_ref3, 1),
        prevDiv = _ref5[0];
      var _ref6 = _slicedToArray(_ref4, 3),
        div = _ref6[0],
        hash = _ref6[1],
        newDocument = _ref6[2];
      prevDiv === null || prevDiv === void 0 || (_prevDiv$parentNode = prevDiv.parentNode) === null || _prevDiv$parentNode === void 0 || _prevDiv$parentNode.insertBefore(div, prevDiv.nextElementSibling);
      this.updateStyle(newDocument);

      // Only update the prev hash after we're actually in the fade stage
      this.prevHash = hash;
      return Object(_common__WEBPACK_IMPORTED_MODULE_2__["animate"])(div, [{
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: this.fadeDuration,
        easing: 'ease'
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
        var _prevDiv$parentNode2;
        if (objectURLs.has(prevDiv)) URL.revokeObjectURL(objectURLs.get(prevDiv));
        prevDiv === null || prevDiv === void 0 || (_prevDiv$parentNode2 = prevDiv.parentNode) === null || _prevDiv$parentNode2 === void 0 || _prevDiv$parentNode2.removeChild(prevDiv);
      }));
    }
  }]);
}();

/***/ }),

/***/ "./_js/src/flip/index.js":
/*!*******************************!*\
  !*** ./_js/src/flip/index.js ***!
  \*******************************/
/*! exports provided: setupFLIP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupFLIP", function() { return setupFLIP; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title */ "./_js/src/flip/title.js");
// Copyright (c) 2019 Florian Klampfer <https://qwtel.com/>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.




var FLIP_TYPES = ['title'];
function setupFLIP(start$, ready$, fadeIn$, options) {
  var other$ = start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_ref) {
    var flipType = _ref.flipType;
    return !FLIP_TYPES.includes(flipType);
  }));
  return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(_title__WEBPACK_IMPORTED_MODULE_2__["setupFLIPTitle"])(start$, ready$, fadeIn$, options), other$);
}

/***/ }),

/***/ "./_js/src/flip/title.js":
/*!*******************************!*\
  !*** ./_js/src/flip/title.js ***!
  \*******************************/
/*! exports provided: setupFLIPTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupFLIPTitle", function() { return setupFLIPTitle; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./_js/src/common.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Copyright (c) 2019 Florian Klampfer <https://qwtel.com/>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.




var TITLE_SELECTOR = '.page-title, .post-title';

/**
 * @param {Observable<any>} start$
 * @param {Observable<any>} ready$
 * @param {Observable<any>} fadeIn$
 * @param {any} opts
 */
function setupFLIPTitle(start$, ready$, fadeIn$, _ref) {
  var animationMain = _ref.animationMain,
    settings = _ref.settings;
  if (!animationMain) return start$;
  var flip$ = start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_ref2) {
    var flipType = _ref2.flipType;
    return flipType === 'title';
  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref3) {
    var anchor = _ref3.anchor;
    if (!anchor) return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({});
    var title = document.createElement('h1');
    title.classList.add('page-title');
    title.textContent = anchor.textContent;
    title.style.transformOrigin = 'left top';
    var page = animationMain.querySelector('.page');
    if (!page) return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({});
    _common__WEBPACK_IMPORTED_MODULE_2__["empty"].call(page);
    page.appendChild(title);
    animationMain.style.position = 'fixed';
    animationMain.style.opacity = 1;
    var first = anchor.getBoundingClientRect();
    var last = title.getBoundingClientRect();
    var firstFontSize = parseInt(getComputedStyle(anchor).fontSize, 10);
    var lastFontSize = parseInt(getComputedStyle(title).fontSize, 10);
    var invertX = first.left - last.left;
    var invertY = first.top - last.top;
    var invertScale = firstFontSize / lastFontSize;
    anchor.style.opacity = 0;
    var transform = [{
      transform: "translate3d(".concat(invertX, "px, ").concat(invertY, "px, 0) scale(").concat(invertScale, ")")
    }, {
      transform: 'translate3d(0, 0, 0) scale(1)'
    }];
    return Object(_common__WEBPACK_IMPORTED_MODULE_2__["animate"])(title, transform, settings).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])({
      complete: function complete() {
        animationMain.style.position = 'absolute';
      }
    }));
  }));
  start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref4) {
    var flipType = _ref4.flipType;
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(ready$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function () {
      return flipType === 'title';
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref5) {
      var _ref5$replaceEls = _slicedToArray(_ref5.replaceEls, 1),
        main = _ref5$replaceEls[0];
      var title = main.querySelector(TITLE_SELECTOR);
      if (title) title.style.opacity = 0;
      return title;
    })), fadeIn$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 1),
        x = _ref7[0];
      return x;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (title) {
      if (title) title.style.opacity = 1;
      animationMain.style.opacity = 0;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
      animationMain.style.opacity = 0;
      var page = animationMain.querySelector('.page');
      _common__WEBPACK_IMPORTED_MODULE_2__["empty"].call(page);
    }));
  })).subscribe();
  return flip$;
}

/***/ }),

/***/ "./_js/src/push-state.js":
/*!*******************************!*\
  !*** ./_js/src/push-state.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./_js/src/common.js");
/* harmony import */ var _cross_fader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cross-fader */ "./_js/src/cross-fader.js");
/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip */ "./_js/src/flip/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Copyright (c) 2019 Florian Klampfer <https://qwtel.com/>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.






_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var NAVBAR_SEL, CROSS_FADE_DURATION, FADE_OUT, FADE_IN, setupAnimationMain, setupLoading, setupErrorPage, getFlipType, pushStateEl, duration, settings, animateFadeOut, animateFadeIn, drawerEl, navbarEl, animationMain, loadingEl, fromEventX, start$, ready$, after$, progress$, error$, fadeOut$, fadeIn$, flip$, sidebarBg, crossFader;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        getFlipType = function _getFlipType(el) {
          var _el$getAttribute;
          if (el !== null && el !== void 0 && el.classList.contains('flip-title')) return 'title';
          if (el !== null && el !== void 0 && el.classList.contains('flip-project')) return 'project';
          return el === null || el === void 0 || (_el$getAttribute = el.getAttribute) === null || _el$getAttribute === void 0 ? void 0 : _el$getAttribute.call(el, 'data-flip');
        };
        setupErrorPage = function _setupErrorPage(main, url) {
          var pathname = url.pathname;
          var error = Object(_common__WEBPACK_IMPORTED_MODULE_2__["importTemplate"])('_error-template');
          var anchor = error === null || error === void 0 ? void 0 : error.querySelector('.this-link');
          if (anchor) {
            anchor.href = pathname;
            anchor.textContent = pathname;
          }
          main === null || main === void 0 || main.appendChild(error);
          return main === null || main === void 0 ? void 0 : main.lastElementChild;
        };
        setupLoading = function _setupLoading(navbarEl) {
          navbarEl === null || navbarEl === void 0 || navbarEl.appendChild(Object(_common__WEBPACK_IMPORTED_MODULE_2__["importTemplate"])('_loading-template'));
          return navbarEl === null || navbarEl === void 0 ? void 0 : navbarEl.lastElementChild;
        };
        setupAnimationMain = function _setupAnimationMain(pushStateEl) {
          var _pushStateEl$parentNo;
          pushStateEl === null || pushStateEl === void 0 || (_pushStateEl$parentNo = pushStateEl.parentNode) === null || _pushStateEl$parentNo === void 0 || _pushStateEl$parentNo.insertBefore(Object(_common__WEBPACK_IMPORTED_MODULE_2__["importTemplate"])('_animation-template'), pushStateEl);
          return pushStateEl === null || pushStateEl === void 0 ? void 0 : pushStateEl.previousElementSibling;
        };
        _context.next = 6;
        return Promise.all([].concat(_toConsumableArray('fetch' in window ? [] : [Promise.all(/*! import() | fetch */[__webpack_require__.e("vendors~fetch"), __webpack_require__.e("fetch")]).then(__webpack_require__.bind(null, /*! ./polyfills/fetch */ "./_js/src/polyfills/fetch.js"))]), _toConsumableArray('customElements' in window ? [] : [Promise.all(/*! import() | webcomponents */[__webpack_require__.e("vendors~webcomponents"), __webpack_require__.e("webcomponents")]).then(__webpack_require__.bind(null, /*! ./polyfills/webcomponents */ "./_js/src/polyfills/webcomponents.js"))]), _toConsumableArray('animate' in Element.prototype ? [] : [__webpack_require__.e(/*! import() | webanimations */ "vendors~webanimations").then(__webpack_require__.t.bind(null, /*! web-animations-js */ "./node_modules/web-animations-js/web-animations.min.js", 7))]), _toConsumableArray('IntersectionObserver' in window ? [] : [__webpack_require__.e(/*! import() | intersection-observer */ "vendors~intersection-observer").then(__webpack_require__.t.bind(null, /*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js", 7))])));
      case 6:
        _context.next = 8;
        return _common__WEBPACK_IMPORTED_MODULE_2__["webComponentsReady"];
      case 8:
        NAVBAR_SEL = '#_navbar > .content > .nav-btn-bar';
        CROSS_FADE_DURATION = 2000;
        FADE_OUT = [{
          opacity: 1
        }, {
          opacity: 0
        }];
        FADE_IN = [{
          opacity: 0,
          transform: 'translateY(-3rem)'
        }, {
          opacity: 1,
          transform: 'translateY(0)'
        }];
        pushStateEl = document.querySelector('hy-push-state');
        if (pushStateEl) {
          _context.next = 15;
          break;
        }
        return _context.abrupt("return");
      case 15:
        duration = Number(pushStateEl.getAttribute('duration')) || 350;
        settings = {
          duration: duration,
          easing: 'ease'
        };
        animateFadeOut = function animateFadeOut(_ref2) {
          var main = _ref2.main;
          return Object(_common__WEBPACK_IMPORTED_MODULE_2__["animate"])(main, FADE_OUT, _objectSpread(_objectSpread({}, settings), {}, {
            fill: 'forwards'
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])({
            main: main
          }));
        };
        animateFadeIn = function animateFadeIn(_ref3) {
          var _ref3$replaceEls = _slicedToArray(_ref3.replaceEls, 1),
            main = _ref3$replaceEls[0],
            flipType = _ref3.flipType;
          return Object(_common__WEBPACK_IMPORTED_MODULE_2__["animate"])(main, FADE_IN, settings).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])({
            main: main,
            flipType: flipType
          }));
        };
        drawerEl = document.querySelector('hy-drawer');
        navbarEl = document.querySelector(NAVBAR_SEL);
        animationMain = setupAnimationMain(pushStateEl);
        loadingEl = setupLoading(navbarEl);
        fromEventX = function fromEventX(eventName, mapFn) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(pushStateEl, eventName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref4) {
            var detail = _ref4.detail;
            return detail;
          }), mapFn ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(mapFn) : function (_) {
            return _;
          }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
        };
        start$ = fromEventX('hy-push-state-start', function (detail) {
          return Object.assign(detail, {
            flipType: getFlipType(detail.anchor)
          });
        });
        ready$ = fromEventX('hy-push-state-ready');
        after$ = fromEventX('hy-push-state-after');
        progress$ = fromEventX('hy-push-state-progress');
        error$ = fromEventX('hy-push-state-networkerror');
        fadeOut$ = start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (context) {
          return Object.assign(context, {
            main: document.getElementById('_main')
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_ref5) {
          var main = _ref5.main;
          main.style.pointerEvents = 'none';
        }), window._noDrawer && drawerEl !== null && drawerEl !== void 0 && drawerEl.classList.contains('cover') ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
          var _drawerEl$parentNode;
          drawerEl.classList.remove('cover');
          (_drawerEl$parentNode = drawerEl.parentNode) === null || _drawerEl$parentNode === void 0 || _drawerEl$parentNode.appendChild(drawerEl);
        }) : function (_) {
          return _;
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(animateFadeOut), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_ref6) {
          var main = _ref6.main;
          return _common__WEBPACK_IMPORTED_MODULE_2__["empty"].call(main);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
        if (loadingEl) {
          progress$.subscribe(function () {
            loadingEl.style.display = 'flex';
          });
          ready$.subscribe(function () {
            loadingEl.style.display = 'none';
          });
        }
        fadeIn$ = after$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (context) {
          var p = animateFadeIn(context).toPromise();
          context.transitionUntil(p);
          return p;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
        flip$ = Object(_flip__WEBPACK_IMPORTED_MODULE_4__["setupFLIP"])(start$, ready$, Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(fadeIn$, error$), {
          animationMain: animationMain,
          settings: settings
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
        start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (context) {
          var promise = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(duration), fadeOut$, flip$).toPromise();
          context.transitionUntil(promise);
          return promise;
        })).subscribe();

        // FIXME: Keeping permanent subscription? turn into hot observable?
        fadeOut$.subscribe();
        flip$.subscribe();
        sidebarBg = document.querySelector('.sidebar-bg');
        if (sidebarBg) {
          crossFader = new _cross_fader__WEBPACK_IMPORTED_MODULE_3__["CrossFader"](CROSS_FADE_DURATION);
          after$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref7) {
            var document = _ref7.document;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(crossFader.fetchImage(document), fadeIn$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref8) {
              var _ref9 = _slicedToArray(_ref8, 1),
                x = _ref9[0];
              return x;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(start$));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])([sidebarBg]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_ref10) {
            var _ref11 = _slicedToArray(_ref10, 2),
              prev = _ref11[0],
              curr = _ref11[1];
            return crossFader.fade(prev, curr);
          })).subscribe();
        }
        error$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref12) {
          var url = _ref12.url;
          if (loadingEl) loadingEl.style.display = 'none';
          var main = document.getElementById('_main');
          if (main) main.style.pointerEvents = '';
          _common__WEBPACK_IMPORTED_MODULE_2__["empty"].call(animationMain === null || animationMain === void 0 ? void 0 : animationMain.querySelector('.page'));
          _common__WEBPACK_IMPORTED_MODULE_2__["empty"].call(main);
          setupErrorPage(main, url);
          return Object(_common__WEBPACK_IMPORTED_MODULE_2__["animate"])(main, FADE_IN, _objectSpread(_objectSpread({}, settings), {}, {
            fill: 'forwards'
          }));
        })).subscribe();
        Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(null, /*! @hydecorp/push-state */ "./node_modules/@hydecorp/push-state/lib/index.js"));
        window._pushState = pushStateEl;
      case 41:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();

/***/ })

}]);
//# sourceMappingURL=LEGACY-push-state-hydejack-9.2.1.js.map