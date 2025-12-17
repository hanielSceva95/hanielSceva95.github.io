(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drawer"],{

/***/ "./_js/src/drawer.js":
/*!***************************!*\
  !*** ./_js/src/drawer.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./_js/src/common.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
  var _document$getElementB2;
  var MOBILE, DESKTOP, LARGE_DESKTOP, subscribeWhen, getRange, setupIcon, removeIcon, detectSize, drawerEl, sidebarEl, contentEl, _ref2, _ref3, tValue, oValue, updateSidebar, size$, peekWidth$, viewWidth$, distance$, t$, scrollTop, opened, opened$, drawerHeight;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        removeIcon = function _removeIcon() {
          var _svg$parentNode;
          var svg = document.getElementById('_swipe');
          svg === null || svg === void 0 || (_svg$parentNode = svg.parentNode) === null || _svg$parentNode === void 0 || _svg$parentNode.removeChild(svg);
        };
        setupIcon = function _setupIcon(drawerEl) {
          var img = document.getElementById('_hrefSwipeSVG');
          if (img) {
            var _document$getElementB;
            var svg = document.createElement('img');
            svg.id = '_swipe';
            svg.src = img.href;
            svg.alt = 'Swipe image';
            svg.addEventListener('click', function () {
              return drawerEl.close();
            });
            (_document$getElementB = document.getElementById('_sidebar')) === null || _document$getElementB === void 0 || _document$getElementB.appendChild(svg);
          }
        };
        getRange = function _getRange(drawerWidth, size) {
          if (size >= DESKTOP) return [0, drawerWidth];
          if (_common__WEBPACK_IMPORTED_MODULE_2__["isMobileSafari"]) return [35, 150];
          return [0, 150];
        };
        _context.next = 5;
        return Promise.all([].concat(_toConsumableArray('customElements' in window ? [] : [Promise.all(/*! import() | webcomponents */[__webpack_require__.e("vendors~webcomponents"), __webpack_require__.e("webcomponents")]).then(__webpack_require__.bind(null, /*! ./polyfills/webcomponents */ "./_js/src/polyfills/webcomponents.js")).then(function () {
          return Promise.all(/*! import() | shadydom */[__webpack_require__.e("vendors~shadydom"), __webpack_require__.e("shadydom")]).then(__webpack_require__.bind(null, /*! ./polyfills/shadydom */ "./_js/src/polyfills/shadydom.js"));
        })]), _toConsumableArray('ResizeObserver' in window ? [] : [Promise.all(/*! import() | resize-observer */[__webpack_require__.e("vendors~resize-observer"), __webpack_require__.e("resize-observer")]).then(__webpack_require__.bind(null, /*! ./polyfills/resize-observer */ "./_js/src/polyfills/resize-observer.js"))])));
      case 5:
        _context.next = 7;
        return _common__WEBPACK_IMPORTED_MODULE_2__["webComponentsReady"];
      case 7:
        _context.next = 9;
        return _common__WEBPACK_IMPORTED_MODULE_2__["stylesheetReady"];
      case 9:
        MOBILE = 1;
        DESKTOP = 2;
        LARGE_DESKTOP = 3;
        subscribeWhen = function subscribeWhen(p$) {
          return function (source) {
            if ( true && !p$) throw Error();
            return p$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (p) {
              return p ? source : rxjs__WEBPACK_IMPORTED_MODULE_0__["NEVER"];
            }));
          };
        }; // Determines the range from which to draw the drawer in pixels, counted from the left edge.
        // It depends on the browser, e.g. Safari has a native gesture when sliding form the side,
        // so we ignore the first 35 pixels (roughly the range for the native gesture),
        // to avoid triggering both gestures.
        // The functions below add an svg graphic to the sidebar
        // that indicate that the sidebar can be drawn using touch gestures.
        detectSize = function detectSize() {
          return window.matchMedia(_common__WEBPACK_IMPORTED_MODULE_2__["BREAK_POINT_DYNAMIC"]).matches ? LARGE_DESKTOP : window.matchMedia(_common__WEBPACK_IMPORTED_MODULE_2__["BREAK_POINT_3"]).matches ? DESKTOP : MOBILE;
        }; // First we get hold of some DOM elements.
        drawerEl = document.getElementById('_drawer');
        sidebarEl = document.getElementById('_sidebar');
        contentEl = sidebarEl === null || sidebarEl === void 0 ? void 0 : sidebarEl.querySelector('.sidebar-sticky');
        if (!(!drawerEl || !sidebarEl || !contentEl)) {
          _context.next = 19;
          break;
        }
        return _context.abrupt("return");
      case 19:
        console.log('Drawer initialized', drawerEl, sidebarEl, contentEl);
        (_document$getElementB2 = document.getElementById('_menu')) === null || _document$getElementB2 === void 0 || _document$getElementB2.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          drawerEl.toggle();
        });
        sidebarEl.querySelectorAll('a[href^="/"]:not(.external)').forEach(function (el) {
          return el.addEventListener('click', function () {
            return drawerEl.close();
          });
        });
        if (_common__WEBPACK_IMPORTED_MODULE_2__["isSafari"]) drawerEl.setAttribute('threshold', '0');
        if (!_common__WEBPACK_IMPORTED_MODULE_2__["isMobile"]) drawerEl.setAttribute('mouseevents', '');
        _ref2 = _common__WEBPACK_IMPORTED_MODULE_2__["hasCSSOM"] ? [new CSSTransformValue([new CSSTranslate(CSS.px(0), CSS.px(0))]), CSS.number(1)] : [null, null], _ref3 = _slicedToArray(_ref2, 2), tValue = _ref3[0], oValue = _ref3[1];
        updateSidebar = function updateSidebar(t, size, distance) {
          var value = distance * t;
          var opacity = size >= DESKTOP ? 1 : 1 - t;
          if (_common__WEBPACK_IMPORTED_MODULE_2__["hasCSSOM"]) {
            tValue[0].x.value = value;
            oValue.value = opacity;
            sidebarEl.attributeStyleMap.set('transform', tValue);
            contentEl.attributeStyleMap.set('opacity', oValue);
          } else {
            sidebarEl.style.transform = "translateX(".concat(value, "px)");
            contentEl.style.opacity = opacity;
          }
        }; // A flag for the 3 major viewport sizes we support
        size$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(_common__WEBPACK_IMPORTED_MODULE_2__["fromMediaQuery"])(window.matchMedia(_common__WEBPACK_IMPORTED_MODULE_2__["BREAK_POINT_3"])), Object(_common__WEBPACK_IMPORTED_MODULE_2__["fromMediaQuery"])(window.matchMedia(_common__WEBPACK_IMPORTED_MODULE_2__["BREAK_POINT_DYNAMIC"]))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(detectSize)); // An observable keeping track of the drawer (peek) width.
        peekWidth$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(drawerEl, 'peek-width-change').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (e) {
          return e.detail;
        })); // An observable keeping track the viewport width
        viewWidth$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'resize', {
          passive: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_common__WEBPACK_IMPORTED_MODULE_2__["getViewWidth"])); // An observable keeping track of the distance between
        // the middle point of the screen and the middle point of the drawer.
        distance$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])(peekWidth$, viewWidth$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
            drawerWidth = _ref5[0],
            viewWidth = _ref5[1];
          return viewWidth / 2 - drawerWidth / 2;
        }));
        t$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(distance$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
          return drawerEl.opacity !== undefined ? 1 - drawerEl.opacity : opened ? 0 : 1;
        })), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(drawerEl, 'hy-drawer-move').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref6) {
          var opacity = _ref6.detail.opacity;
          return 1 - opacity;
        })));
        drawerEl.addEventListener('hy-drawer-prepare', function () {
          sidebarEl.style.willChange = 'transform';
          contentEl.style.willChange = 'opacity';
        });
        drawerEl.addEventListener('hy-drawer-transitioned', function () {
          sidebarEl.style.willChange = '';
          contentEl.style.willChange = '';
        });

        // Save scroll position before the drawer gets initialized.
        scrollTop = Object(_common__WEBPACK_IMPORTED_MODULE_2__["getScrollTop"])(); // Start the drawer in `opened` state when the cover class is present,
        // and the user hasn't started scrolling already.
        console.log('Drawer opened state:', drawerEl.classList.contains('cover'), scrollTop, history.state);
        opened = drawerEl.classList.contains('cover') && scrollTop <= 0 && !(history.state && history.state.closedOnce);
        if (!opened) {
          if (!history.state) history.replaceState({}, document.title);
          history.state.closedOnce = true;
          drawerEl.removeAttribute('opened');
        }
        opened$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(drawerEl, 'hy-drawer-transitioned').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (e) {
          return e.detail;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (opened) {
          if (!opened) {
            removeIcon();
            if (!history.state) history.replaceState({}, document.title);
            history.state.closedOnce = true;
          }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(opened)); // We need the height of the drawer in case we need to reset the scroll position
        drawerHeight = opened ? null : drawerEl.getBoundingClientRect().height;
        drawerEl.addEventListener('hy-drawer-init', function () {
          drawerEl.classList.add('loaded');
          setupIcon(drawerEl);
          if (drawerHeight && scrollTop >= drawerHeight) {
            window.scrollTo(0, scrollTop - drawerHeight);
          }
        }, {
          once: true
        });
        _context.next = 42;
        return Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(null, /*! @hydecorp/drawer */ "./node_modules/@hydecorp/drawer/lib/index.js"));
      case 42:
        window._drawer = drawerEl;
        t$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(size$, distance$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (args) {
          return updateSidebar.apply(void 0, _toConsumableArray(args));
        })).subscribe();

        // Keeping the drawer updated.
        peekWidth$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(size$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (args) {
          return getRange.apply(void 0, _toConsumableArray(args));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (range) {
          drawerEl.range = range;
        })).subscribe();

        // Hacky way of letting the cover page close when scrolling
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, 'wheel', {
          passive: false
        }).pipe(subscribeWhen(opened$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (e) {
          return e.deltaY > 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (e) {
          if (drawerEl.translateX > 0) e.preventDefault();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
          return drawerEl.close();
        })).subscribe();
      case 46:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();

/***/ })

}]);
//# sourceMappingURL=LEGACY-drawer-hydejack-9.2.1.js.map