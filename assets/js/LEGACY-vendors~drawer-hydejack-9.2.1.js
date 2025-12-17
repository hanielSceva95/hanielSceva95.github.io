(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~drawer"],{

/***/ "./node_modules/@hydecorp/drawer/lib/calc.js":
/*!***************************************************!*\
  !*** ./node_modules/@hydecorp/drawer/lib/calc.js ***!
  \***************************************************/
/*! exports provided: CalcMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcMixin", function() { return CalcMixin; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@hydecorp/drawer/lib/constants.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// Using shorthands for common functions
var min = Math.min.bind(Math);
var max = Math.max.bind(Math);
var CalcMixin = /*#__PURE__*/function () {
  function CalcMixin() {
    _classCallCheck(this, CalcMixin);
  }
  return _createClass(CalcMixin, [{
    key: "calcIsInRange",
    value: function calcIsInRange(_ref, opened) {
      var clientX = _ref.clientX;
      // console.log(this.range, this.align);
      switch (this.side) {
        case "left":
          {
            var _this$range = _slicedToArray(this.range, 2),
              lower = _this$range[0],
              upper = _this$range[1];
            return clientX > lower && (opened || clientX < upper);
          }
        case "right":
          {
            var _upper = window.innerWidth - this.range[0];
            var _lower = window.innerWidth - this.range[1];
            return clientX < _upper && (opened || clientX > _lower);
          }
        default:
          throw Error();
      }
    }
  }, {
    key: "calcIsSwipe",
    value: function calcIsSwipe(_ref2, _ref3, translateX, drawerWidth, _) {
      var startX = _ref2.clientX;
      var endX = _ref3.clientX;
      return endX !== startX || translateX > 0 && translateX < drawerWidth;
    }
  }, {
    key: "calcWillOpen",
    value: function calcWillOpen(_, __, translateX, drawerWidth, velocity) {
      switch (this.side) {
        case "left":
          {
            if (velocity > _constants__WEBPACK_IMPORTED_MODULE_0__["VELOCITY_THRESHOLD"]) return true;else if (velocity < -_constants__WEBPACK_IMPORTED_MODULE_0__["VELOCITY_THRESHOLD"]) return false;else if (translateX >= drawerWidth / 2) return true;else return false;
          }
        case "right":
          {
            if (-velocity > _constants__WEBPACK_IMPORTED_MODULE_0__["VELOCITY_THRESHOLD"]) return true;else if (-velocity < -_constants__WEBPACK_IMPORTED_MODULE_0__["VELOCITY_THRESHOLD"]) return false;else if (translateX <= -drawerWidth / 2) return true;else return false;
          }
        default:
          throw Error();
      }
    }
  }, {
    key: "calcTranslateX",
    value: function calcTranslateX(_ref4, _ref5, startTranslateX, drawerWidth) {
      var moveX = _ref4.clientX;
      var startX = _ref5.clientX;
      switch (this.side) {
        case "left":
          {
            var deltaX = moveX - startX;
            var translateX = startTranslateX + deltaX;
            return max(0, min(drawerWidth, translateX));
          }
        case "right":
          {
            var _deltaX = moveX - startX;
            var _translateX = startTranslateX + _deltaX;
            return min(0, max(-drawerWidth, _translateX));
          }
        default:
          throw Error();
      }
    }
  }]);
}();
;

/***/ }),

/***/ "./node_modules/@hydecorp/drawer/lib/common.js":
/*!*****************************************************!*\
  !*** ./node_modules/@hydecorp/drawer/lib/common.js ***!
  \*****************************************************/
/*! exports provided: applyMixins, subscribeWhen, filterWhen, tween, easeOutSine, observeWidth, rangeConverter, rangeHasChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutSine", function() { return easeOutSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeWidth", function() { return observeWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeConverter", function() { return rangeConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeHasChanged", function() { return rangeHasChanged; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _hydecorp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hydecorp/component */ "./node_modules/@hydecorp/component/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMixins", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_2__["applyMixins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeWhen", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_2__["subscribeWhen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterWhen", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_2__["filterWhen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_2__["tween"]; });





function easeOutSine(t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
}
function observeWidth(el) {
  // This component should have at least basic support without `ResizeObserver` support,
  // so we pass a one-time measurement when it's missing. Obviously this won't update, so BYO polyfill.
  var resize$ = "ResizeObserver" in window ? Object(_hydecorp_component__WEBPACK_IMPORTED_MODULE_2__["createResizeObservable"])(el) : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
    contentRect: {
      width: el.clientWidth
    }
  });
  return resize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref) {
    var width = _ref.contentRect.width;
    return width;
  }));
}
var rangeConverter = {
  fromAttribute: function fromAttribute(attr) {
    return (attr !== null && attr !== void 0 ? attr : '').replace(/[\[\]]/g, '').split(',').map(Number);
  },
  toAttribute: function toAttribute(range) {
    return range.join(',');
  }
};
function rangeHasChanged(curr) {
  var prev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return curr.length !== prev.length || curr.some(function (v, i) {
    return v !== prev[i];
  });
}

/***/ }),

/***/ "./node_modules/@hydecorp/drawer/lib/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/@hydecorp/drawer/lib/constants.js ***!
  \********************************************************/
/*! exports provided: BASE_DURATION, WIDTH_CONTRIBUTION, VELOCITY_THRESHOLD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_DURATION", function() { return BASE_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTH_CONTRIBUTION", function() { return WIDTH_CONTRIBUTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VELOCITY_THRESHOLD", function() { return VELOCITY_THRESHOLD; });
// The base duration of the fling animation.
var BASE_DURATION = 200;
// We adjust the duration of the animation using the width of the drawer.
// There is no physics to this, but we know from testing that the animation starts to feel bad
// when the drawer increases in size.
// From testing we know that, if we increase the duration as a fraction of the drawer width,
// the animation stays smooth across common display sizes.
var WIDTH_CONTRIBUTION = 0.15;
// Minimum velocity of the drawer (in px/ms) when releasing to make it fling to opened/closed state.
var VELOCITY_THRESHOLD = 0.15;

/***/ }),

/***/ "./node_modules/@hydecorp/drawer/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@hydecorp/drawer/lib/index.js ***!
  \****************************************************/
/*! exports provided: HyDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HyDrawer", function() { return HyDrawer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _hydecorp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hydecorp/component */ "./node_modules/@hydecorp/component/lib/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./node_modules/@hydecorp/drawer/lib/constants.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common */ "./node_modules/@hydecorp/drawer/lib/common.js");
/* harmony import */ var _observables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./observables */ "./node_modules/@hydecorp/drawer/lib/observables.js");
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calc */ "./node_modules/@hydecorp/drawer/lib/calc.js");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update */ "./node_modules/@hydecorp/drawer/lib/update.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles */ "./node_modules/@hydecorp/drawer/lib/styles.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
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
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var _HyDrawer_initialized, _HyDrawer_translateX$, _HyDrawer_startTranslateX$, _HyDrawer_tweenTranslateX$;

/**
 * Copyright (c) 2020 Florian Klampfer <https://qwtel.com/>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license
 * @nocompile
 */












var HyDrawer = /*#__PURE__*/function (_applyMixins) {
  function HyDrawer() {
    var _this;
    _classCallCheck(this, HyDrawer);
    _this = _callSuper(this, HyDrawer, arguments);
    _this.opened = false;
    _this.side = "left";
    _this.persistent = false;
    _this.threshold = 10;
    _this.noScroll = false;
    _this.mouseEvents = false;
    // @property({ type: Boolean, reflect: true }) hashChange: boolean = false;
    _this.range = [0, 100];
    _this.willChange = false;
    _HyDrawer_initialized.set(_this, Object(_hydecorp_component__WEBPACK_IMPORTED_MODULE_6__["createResolvablePromise"])());
    _HyDrawer_translateX$.set(_this, void 0);
    _HyDrawer_startTranslateX$.set(_this, void 0);
    _HyDrawer_tweenTranslateX$.set(_this, void 0);
    _this.upgrade = function () {
      var drawerWidth$ = _this.getDrawerWidth();
      var active$ = _this.$.persistent.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_) {
        return !_;
      }));
      var start$ = _this.getStartObservable().pipe(
      // takeUntil(this.subjects.disconnect),
      Object(_common__WEBPACK_IMPORTED_MODULE_8__["filterWhen"])(active$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
      var isScrimVisible$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyDrawer_translateX$, "f").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (translateX) {
          return translateX !== 0;
        }));
      });
      var isInRange$ = start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(isScrimVisible$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (args) {
        var _this2;
        return (_this2 = _this).calcIsInRange.apply(_this2, _toConsumableArray(args));
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (inRange) {
        if (inRange) {
          _this.willChange = true;
          _this.fireEvent('prepare');
        }
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
      var end$ = _this.getEndObservable().pipe(
      // takeUntil(this.subjects.disconnect),
      Object(_common__WEBPACK_IMPORTED_MODULE_8__["filterWhen"])(active$, isInRange$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
        if (_this.mouseEvents) _this.grabbing = false;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
      var move$ = _this.getMoveObservable(start$, end$).pipe(
      // takeUntil(this.subjects.disconnect),
      Object(_common__WEBPACK_IMPORTED_MODULE_8__["filterWhen"])(active$, isInRange$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
      var isSliding$ = _this.getIsSlidingObservable(move$, start$, end$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (isSliding) {
        _this.isSliding = isSliding;
        if (isSliding && _this.mouseEvents) _this.grabbing = true;
        // if (isSliding) this.fireEvent('slidestart', { detail: this.opened });
      }));
      var translateX$ = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(_this, _HyDrawer_translateX$, Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
        var jumpTranslateX$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([_this.$.opened, _this.$.side, drawerWidth$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 3),
            opened = _ref2[0],
            side = _ref2[1],
            drawerWidth = _ref2[2];
          return !opened ? 0 : drawerWidth * (side === "left" ? 1 : -1);
        }));
        var moveTranslateX$ = move$.pipe(Object(_common__WEBPACK_IMPORTED_MODULE_8__["filterWhen"])(isSliding$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
          return _this.scrimClickable = false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_ref3) {
          var event = _ref3.event;
          return event && _this.noScroll && event.preventDefault();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(start$, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyDrawer_startTranslateX$, "f"), drawerWidth$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (args) {
          var _this3;
          return (_this3 = _this).calcTranslateX.apply(_this3, _toConsumableArray(args));
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyDrawer_tweenTranslateX$, "f"), jumpTranslateX$, moveTranslateX$);
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])()), "f");
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(_this, _HyDrawer_startTranslateX$, translateX$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["sample"])(start$)), "f");
      var velocity$ = translateX$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timestamp"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          prevTime = _ref5[0].timestamp,
          time = _ref5[1].timestamp;
        return time - prevTime > 0;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          _ref7$ = _ref7[0],
          prevX = _ref7$.value,
          prevTime = _ref7$.timestamp,
          _ref7$2 = _ref7[1],
          x = _ref7$2.value,
          time = _ref7$2.timestamp;
        return (x - prevX) / (time - prevTime);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(0));
      var willOpen$ = end$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(start$, translateX$, drawerWidth$, velocity$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (args) {
        var _this4;
        return (_this4 = _this).calcIsSwipe.apply(_this4, _toConsumableArray(args));
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (args) {
        var _this5;
        return (_this5 = _this).calcWillOpen.apply(_this5, _toConsumableArray(args));
      }));
      var animateTo$ = _this.animateTo$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
        _this.willChange = true;
        _this.fireEvent('prepare');
      }));
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(_this, _HyDrawer_tweenTranslateX$, Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(willOpen$, animateTo$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(translateX$, drawerWidth$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 3),
          willOpen = _ref9[0],
          translateX = _ref9[1],
          drawerWidth = _ref9[2];
        var inv = _this.side === "left" ? 1 : -1;
        var endTranslateX = willOpen ? drawerWidth * inv : 0;
        var diffTranslateX = endTranslateX - translateX;
        var duration = Math.ceil(_constants__WEBPACK_IMPORTED_MODULE_7__["BASE_DURATION"] + drawerWidth * _constants__WEBPACK_IMPORTED_MODULE_7__["WIDTH_CONTRIBUTION"]);
        return Object(_common__WEBPACK_IMPORTED_MODULE_8__["tween"])(_common__WEBPACK_IMPORTED_MODULE_8__["easeOutSine"], translateX, diffTranslateX, duration).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
          _this.transitioned(willOpen);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(start$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.$.side.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(1))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
      })), "f");
      translateX$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(drawerWidth$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (args) {
        var _this6;
        (_this6 = _this).updateDOM.apply(_this6, _toConsumableArray(args));
        var _this7 = _this,
          translateX = _this7.translateX,
          opacity = _this7.opacity;
        _this.fireEvent('move', {
          detail: {
            translateX: translateX,
            opacity: opacity
          },
          bubbles: false
        });
      })).subscribe();
      Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(_this.scrimEl, "click").pipe(
      // takeUntil(this.subjects.disconnect),
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
        return _this.close();
      })).subscribe();
      active$.pipe(
      // takeUntil(this.subjects.disconnect),
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (active) {
        _this.scrimEl.style.display = active ? "block" : "none";
      })).subscribe();
      _this.$.mouseEvents.pipe(
      // takeUntil(this.subjects.disconnect),
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (mouseEvents) {
        return mouseEvents ? start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(isInRange$)) : rxjs__WEBPACK_IMPORTED_MODULE_4__["NEVER"];
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
          coord = _ref11[0],
          isInRange = _ref11[1];
        return isInRange && coord.event != null;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_ref12) {
        var _ref13 = _slicedToArray(_ref12, 1),
          event = _ref13[0].event;
        return event && event.preventDefault();
      })).subscribe();
      // fromEvent(window, 'hashchange').pipe(
      //   // takeUntil(this.subjects.disconnect),
      //   subscribeWhen(this.$.hashChange),
      //   tap(() => {
      //     const opened = location.hash === this.hashId;
      //     if (!history.state && opened) {
      //       history.replaceState({ [this.histId]: { backable: true } }, document.title)
      //     }
      //     // If the state doesn't match open/close the drawer
      //     if (opened !== this.opened) this.animateTo$.next(opened);
      //   }),
      // ).subscribe();
      _this.fireEvent("init", {
        detail: _this.opened
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyDrawer_initialized, "f").resolve(_this);
    };
    _this.transitioned = function (hasOpened) {
      _this.opened = _this.scrimClickable = hasOpened;
      _this.willChange = false;
      // if (this.hashChange) this.transitionedHash(hasOpened)
      _this.fireEvent('transitioned', {
        detail: hasOpened
      });
    };
    return _this;
  }
  _inherits(HyDrawer, _applyMixins);
  return _createClass(HyDrawer, [{
    key: "initialized",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyDrawer_initialized, "f");
    }
    // HyDrawer
  }, {
    key: "getDrawerWidth",
    value: function getDrawerWidth() {
      var _this8 = this;
      var content$ = Object(_common__WEBPACK_IMPORTED_MODULE_8__["observeWidth"])(this.contentEl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (px) {
        return _this8.fireEvent('content-width-change', {
          detail: px
        });
      }));
      var peek$ = Object(_common__WEBPACK_IMPORTED_MODULE_8__["observeWidth"])(this.peekEl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (px) {
        return _this8.fireEvent('peek-width-change', {
          detail: px
        });
      }));
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([content$, peek$]).pipe(
      // takeUntil(this.subjects.disconnect),
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref14) {
        var _ref15 = _slicedToArray(_ref14, 2),
          contentWidth = _ref15[0],
          peekWidth = _ref15[1];
        return contentWidth - peekWidth;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
    }
    // private consolidateState() {
    //   const hashOpened = location.hash === this.hashId;
    //   const isReload = history.state && history.state[this.histId];
    //   if (isReload) {
    //     if (hashOpened !== this.opened) {
    //       this.opened = hashOpened;
    //     }
    //   } else {
    //     const url = new URL(location.href);
    //     const newState = { ...history.state, [this.histId]: { backable: false } };
    //     if (hashOpened && !this.opened) {
    //       url.hash = '';
    //       history.replaceState(newState, document.title, url.href);
    //       url.hash = this.hashId;
    //       history.pushState({ [this.histId]: { backable: true } }, document.title, url.href);
    //       this.opened = true;
    //     }
    //     else if (!hashOpened && this.opened) {
    //       history.replaceState(newState, document.title, url.href);
    //       url.hash = this.hashId;
    //       history.pushState({ [this.histId]: { backable: true } }, document.title, url.href);
    //     }
    //     else {
    //       history.replaceState(newState, document.title, url.href);
    //     }
    //   }
    // }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet(HyDrawer, "connectedCallback", this, 3)([]);
      // if (this.hashChange) this.consolidateState()
      this.$ = {
        opened: new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.opened),
        side: new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.side),
        persistent: new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.persistent),
        preventDefault: new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.noScroll),
        mouseEvents: new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.mouseEvents)
        // hashChange: new BehaviorSubject(this.hashChange),
      };
      this.scrimClickable = this.opened;
      this.animateTo$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      this.updater = _update__WEBPACK_IMPORTED_MODULE_11__["DOMUpdater"].getUpdaterForPlatform(this);
      this.updateComplete.then(this.upgrade);
    }
    // private transitionedHash(hasOpened: boolean) {
    //   const hasClosed = !hasOpened;
    //   const { backable } = history.state && history.state[this.histId] || { backable: false }
    //   if (hasClosed && backable) {
    //     history.back()
    //   } 
    //   if (hasOpened && location.hash !== this.hashId) {
    //     location.hash = this.hashId;
    //   }
    // }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=\"peek full-height\"></div>\n      <div\n        class=\"scrim\"\n        style=", ">\n      </div>\n      ", "\n      <div\n        class=", "\n        style=", "\n      >\n        <div class=\"overflow\">\n          <slot></slot>\n        </div>\n      </div>\n    "])), Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_3__["styleMap"])({
        willChange: this.willChange ? 'opacity' : '',
        pointerEvents: this.scrimClickable ? 'all' : ''
      }), this.mouseEvents && this.grabbing && !this.scrimClickable ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<div class=\"grabbing-screen full-screen\"></div>"]))) : null, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])(_defineProperty(_defineProperty(_defineProperty({
        wrapper: true,
        'full-height': true
      }, this.side, true), "grab", this.mouseEvents), "grabbing", this.mouseEvents && this.grabbing)), Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_3__["styleMap"])({
        willChange: this.willChange ? 'transform' : ''
      }));
    }
  }, {
    key: "open",
    value: function open() {
      this.animateTo$.next(true);
    }
  }, {
    key: "close",
    value: function close() {
      this.animateTo$.next(false);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.animateTo$.next(!this.opened);
    }
  }]);
}(Object(_common__WEBPACK_IMPORTED_MODULE_8__["applyMixins"])(_hydecorp_component__WEBPACK_IMPORTED_MODULE_6__["RxLitElement"], [_observables__WEBPACK_IMPORTED_MODULE_9__["ObservablesMixin"], _update__WEBPACK_IMPORTED_MODULE_11__["UpdateMixin"], _calc__WEBPACK_IMPORTED_MODULE_10__["CalcMixin"]]));
_HyDrawer_initialized = new WeakMap(), _HyDrawer_translateX$ = new WeakMap(), _HyDrawer_startTranslateX$ = new WeakMap(), _HyDrawer_tweenTranslateX$ = new WeakMap();
HyDrawer.styles = _styles__WEBPACK_IMPORTED_MODULE_12__["styles"];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])('.scrim')], HyDrawer.prototype, "scrimEl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])('.wrapper')], HyDrawer.prototype, "contentEl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])('.peek')], HyDrawer.prototype, "peekEl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean,
  reflect: true
})], HyDrawer.prototype, "opened", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: String,
  reflect: true
})], HyDrawer.prototype, "side", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean,
  reflect: true
})], HyDrawer.prototype, "persistent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Number,
  reflect: true
})], HyDrawer.prototype, "threshold", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean,
  reflect: true
})], HyDrawer.prototype, "noScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean,
  reflect: true
})], HyDrawer.prototype, "mouseEvents", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  reflect: true,
  converter: _common__WEBPACK_IMPORTED_MODULE_8__["rangeConverter"],
  hasChanged: _common__WEBPACK_IMPORTED_MODULE_8__["rangeHasChanged"]
})], HyDrawer.prototype, "range", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()], HyDrawer.prototype, "scrimClickable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()], HyDrawer.prototype, "grabbing", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()], HyDrawer.prototype, "willChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()], HyDrawer.prototype, "open", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()], HyDrawer.prototype, "close", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()], HyDrawer.prototype, "toggle", null);
HyDrawer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('hy-drawer')], HyDrawer);


/***/ }),

/***/ "./node_modules/@hydecorp/drawer/lib/observables.js":
/*!**********************************************************!*\
  !*** ./node_modules/@hydecorp/drawer/lib/observables.js ***!
  \**********************************************************/
/*! exports provided: ObservablesMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservablesMixin", function() { return ObservablesMixin; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./node_modules/@hydecorp/drawer/lib/common.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var abs = Math.abs.bind(Math);
var ObservablesMixin = /*#__PURE__*/function () {
  function ObservablesMixin() {
    _classCallCheck(this, ObservablesMixin);
  }
  return _createClass(ObservablesMixin, [{
    key: "getStartObservable",
    value: function getStartObservable() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([this.$.mouseEvents]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
          mouseEvents = _ref2[0];
        var touchstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, "touchstart", {
          passive: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_ref3) {
          var touches = _ref3.touches;
          return touches.length === 1;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref4) {
          var touches = _ref4.touches;
          return touches[0];
        }));
        var mousedown$ = !mouseEvents ? rxjs__WEBPACK_IMPORTED_MODULE_0__["NEVER"] : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, "mousedown").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (e) {
          return e.event = e, e;
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(touchstart$, mousedown$);
      }));
    }
  }, {
    key: "getMoveObservable",
    value: function getMoveObservable(start$, end$) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([this.$.mouseEvents, this.$.preventDefault]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          mouseEvents = _ref6[0],
          preventDefault = _ref6[1];
        var touchmove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, "touchmove", {
          passive: !preventDefault
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (e) {
          return e.touches[0].event = e, e.touches[0];
        }));
        var mousemove$ = !mouseEvents ? rxjs__WEBPACK_IMPORTED_MODULE_0__["NEVER"] : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, "mousemove", {
          passive: !preventDefault
        }).pipe(Object(_common__WEBPACK_IMPORTED_MODULE_2__["subscribeWhen"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(true)), end$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(false)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (e) {
          return e.event = e, e;
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(touchmove$, mousemove$);
      }));
    }
  }, {
    key: "getEndObservable",
    value: function getEndObservable() {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([this.$.mouseEvents]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
          mouseEvents = _ref8[0];
        var touchend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, "touchend", {
          passive: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_ref9) {
          var touches = _ref9.touches;
          return touches.length === 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (event) {
          return event.changedTouches[0];
        }));
        var mouseup$ = !mouseEvents ? rxjs__WEBPACK_IMPORTED_MODULE_0__["NEVER"] : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(document, "mouseup", {
          passive: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (e) {
          return e.event = e, e;
        }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(touchend$, mouseup$);
      }));
    }
  }, {
    key: "getIsSlidingObservable",
    value: function getIsSlidingObservable(move$, start$, end$) {
      return this.getIsSlidingObservableInner(move$, start$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["repeatWhen"])(function () {
        return end$;
      }));
    }
  }, {
    key: "getIsSlidingObservableInner",
    value: function getIsSlidingObservableInner(move$, start$) {
      var _this = this;
      if (this.threshold) {
        return move$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(start$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["skipWhile"])(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
            _ref11$ = _ref11[0],
            clientX = _ref11$.clientX,
            clientY = _ref11$.clientY,
            _ref11$2 = _ref11[1],
            startX = _ref11$2.clientX,
            startY = _ref11$2.clientY;
          return abs(startY - clientY) < _this.threshold && abs(startX - clientX) < _this.threshold;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref12) {
          var _ref13 = _slicedToArray(_ref12, 2),
            _ref13$ = _ref13[0],
            clientX = _ref13$.clientX,
            clientY = _ref13$.clientY,
            _ref13$2 = _ref13[1],
            startX = _ref13$2.clientX,
            startY = _ref13$2.clientY;
          return abs(startX - clientX) >= abs(startY - clientY);
        }));
      } else {
        return move$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(start$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
            _ref15$ = _ref15[0],
            clientX = _ref15$.clientX,
            clientY = _ref15$.clientY,
            event = _ref15$.event,
            _ref15$2 = _ref15[1],
            startX = _ref15$2.clientX,
            startY = _ref15$2.clientY;
          var isSliding = abs(startX - clientX) >= abs(startY - clientY);
          if (_this.noScroll && isSliding && event) event.preventDefault();
          return isSliding;
        }));
      }
    }
  }]);
}();

/***/ }),

/***/ "./node_modules/@hydecorp/drawer/lib/styles.js":
/*!*****************************************************!*\
  !*** ./node_modules/@hydecorp/drawer/lib/styles.js ***!
  \*****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

var styles = Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @media screen {\n    :host {\n      touch-action: pan-x;\n    }\n\n    .full-screen {\n      position: fixed;\n      top: 0;\n      left: 0;\n      height: 100vh;\n      width: 100vw;\n    }\n\n    .full-height {\n      position: fixed;\n      top: 0;\n      height: 100vh;\n    }\n\n    .peek {\n      left: 0;\n      width: var(--hy-drawer-peek-width, 0px);\n      visibility: hidden;\n      z-index: calc(var(--hy-drawer-z-index, 100) - 1);\n    }\n\n    .scrim {\n      position: fixed;\n      top: 0;\n      left: 0;\n      height: 10vh;\n      width: 10vw;\n      transform: scale(10);\n      transform-origin: top left;\n      opacity: 0;\n      pointer-events: none;\n      background: var(--hy-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      z-index: var(--hy-drawer-z-index, 100);\n      -webkit-tap-highlight-color: transparent;\n    }\n\n    .range {\n      position: fixed;\n      top: 0;\n      height: 100vh;\n      z-index: calc(var(--hy-drawer-z-index, 100) + 1);\n    }\n\n    .grabbing-screen {\n      cursor: grabbing;\n      z-index: calc(var(--hy-drawer-z-index, 100) + 2);\n    }\n\n    .wrapper {\n      width: var(--hy-drawer-width, 300px);\n      background: var(--hy-drawer-background, inherit);\n      box-shadow: var(--hy-drawer-box-shadow, 0 0 15px rgba(0, 0, 0, 0.25));\n      z-index: calc(var(--hy-drawer-z-index, 100) + 3);\n      contain: strict;\n    }\n\n    .wrapper.left {\n      left:  calc(-1 * var(--hy-drawer-width, 300px) + var(--hy-drawer-peek-width, 0px));\n    }\n\n    .wrapper.right {\n      right:  calc(-1 * var(--hy-drawer-width, 300px) + var(--hy-drawer-peek-width, 0px));\n    }\n\n    .wrapper > .overflow {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n      overscroll-behavior: contain;\n      -webkit-overflow-scrolling: touch;\n    }\n\n    .grab {\n      cursor: move;\n      cursor: grab;\n    }\n\n    .grabbing {\n      cursor: grabbing;\n    }\n  }\n\n  @media print {\n    .scrim {\n      display: none !important;\n    }\n\n    .wrapper {\n      transform: none !important;\n    }\n  }\n"])));

/***/ }),

/***/ "./node_modules/@hydecorp/drawer/lib/update.js":
/*!*****************************************************!*\
  !*** ./node_modules/@hydecorp/drawer/lib/update.js ***!
  \*****************************************************/
/*! exports provided: UpdateMixin, DOMUpdater, StyleUpdater, AttributeStyleMapUpdater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMixin", function() { return UpdateMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMUpdater", function() { return DOMUpdater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleUpdater", function() { return StyleUpdater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeStyleMapUpdater", function() { return AttributeStyleMapUpdater; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var UpdateMixin = /*#__PURE__*/function () {
  function UpdateMixin() {
    _classCallCheck(this, UpdateMixin);
  }
  return _createClass(UpdateMixin, [{
    key: "updateDOM",
    value: function updateDOM(translateX, drawerWidth) {
      var inv = this.side === "left" ? 1 : -1;
      var opacity = translateX / drawerWidth * inv || 0;
      this.translateX = translateX;
      this.opacity = opacity;
      this.updater.updateDOM(translateX, opacity);
    }
  }]);
}();
var DOMUpdater = /*#__PURE__*/function () {
  function DOMUpdater(parent) {
    _classCallCheck(this, DOMUpdater);
    this.parent = parent;
  }
  return _createClass(DOMUpdater, [{
    key: "contentEl",
    get: function get() {
      return this.parent.contentEl;
    }
  }, {
    key: "scrimEl",
    get: function get() {
      return this.parent.scrimEl;
    }
  }], [{
    key: "getUpdaterForPlatform",
    value: function getUpdaterForPlatform(parent) {
      var hasCSSOM = "attributeStyleMap" in Element.prototype && "CSS" in window && "number" in CSS;
      return hasCSSOM ? new AttributeStyleMapUpdater(parent) : new StyleUpdater(parent);
    }
  }]);
}();
var StyleUpdater = /*#__PURE__*/function (_DOMUpdater) {
  function StyleUpdater(parent) {
    _classCallCheck(this, StyleUpdater);
    return _callSuper(this, StyleUpdater, [parent]);
  }
  _inherits(StyleUpdater, _DOMUpdater);
  return _createClass(StyleUpdater, [{
    key: "updateDOM",
    value: function updateDOM(translateX, opacity) {
      this.contentEl.style.transform = "translate(".concat(translateX, "px, 0px)");
      this.scrimEl.style.opacity = "".concat(opacity);
    }
  }]);
}(DOMUpdater);
var AttributeStyleMapUpdater = /*#__PURE__*/function (_DOMUpdater2) {
  function AttributeStyleMapUpdater(parent) {
    var _this;
    _classCallCheck(this, AttributeStyleMapUpdater);
    _this = _callSuper(this, AttributeStyleMapUpdater, [parent]);
    _this.tvalue = new CSSTransformValue([new CSSTranslate(CSS.px(0), CSS.px(0))]);
    _this.ovalue = CSS.number(1);
    return _this;
  }
  _inherits(AttributeStyleMapUpdater, _DOMUpdater2);
  return _createClass(AttributeStyleMapUpdater, [{
    key: "updateDOM",
    value: function updateDOM(translateX, opacity) {
      this.tvalue[0].x.value = translateX;
      this.ovalue.value = opacity;
      this.contentEl.attributeStyleMap.set("transform", this.tvalue);
      this.scrimEl.attributeStyleMap.set("opacity", this.ovalue);
    }
  }]);
}(DOMUpdater);

/***/ }),

/***/ "./node_modules/lit-html/directives/class-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/class-map.js ***!
  \*******************************************************/
/*! exports provided: classMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return classMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

// IE11 doesn't support classList on SVG elements, so we emulate it with a Set
var ClassList = /*#__PURE__*/function () {
  function ClassList(element) {
    _classCallCheck(this, ClassList);
    this.classes = new Set();
    this.changed = false;
    this.element = element;
    var classList = (element.getAttribute('class') || '').split(/\s+/);
    var _iterator = _createForOfIteratorHelper(classList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var cls = _step.value;
        this.classes.add(cls);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return _createClass(ClassList, [{
    key: "add",
    value: function add(cls) {
      this.classes.add(cls);
      this.changed = true;
    }
  }, {
    key: "remove",
    value: function remove(cls) {
      this.classes.delete(cls);
      this.changed = true;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.changed) {
        var classString = '';
        this.classes.forEach(function (cls) {
          return classString += cls + ' ';
        });
        this.element.setAttribute('class', classString);
      }
    }
  }]);
}();
/**
 * Stores the ClassInfo object applied to a given AttributePart.
 * Used to unset existing values when a new ClassInfo object is applied.
 */
var previousClassesCache = new WeakMap();
/**
 * A directive that applies CSS classes. This must be used in the `class`
 * attribute and must be the only part used in the attribute. It takes each
 * property in the `classInfo` argument and adds the property name to the
 * element's `class` if the property value is truthy; if the property value is
 * falsey, the property name is removed from the element's `class`. For example
 * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
 * @param classInfo {ClassInfo}
 */
var classMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (classInfo) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'class' || part.committer.parts.length > 1) {
      throw new Error('The `classMap` directive must be used in the `class` attribute ' + 'and must be the only part in the attribute.');
    }
    var committer = part.committer;
    var element = committer.element;
    var previousClasses = previousClassesCache.get(part);
    if (previousClasses === undefined) {
      // Write static classes once
      // Use setAttribute() because className isn't a string on SVG elements
      element.setAttribute('class', committer.strings.join(' '));
      previousClassesCache.set(part, previousClasses = new Set());
    }
    var classList = element.classList || new ClassList(element);
    // Remove old classes that no longer apply
    // We use forEach() instead of for-of so that re don't require down-level
    // iteration.
    previousClasses.forEach(function (name) {
      if (!(name in classInfo)) {
        classList.remove(name);
        previousClasses.delete(name);
      }
    });
    // Add or remove classes based on their classMap value
    for (var name in classInfo) {
      var value = classInfo[name];
      if (value != previousClasses.has(name)) {
        // We explicitly want a loose truthy check of `value` because it seems
        // more convenient that '' and 0 are skipped.
        if (value) {
          classList.add(name);
          previousClasses.add(name);
        } else {
          classList.remove(name);
          previousClasses.delete(name);
        }
      }
    }
    if (typeof classList.commit === 'function') {
      classList.commit();
    }
  };
});

/***/ }),

/***/ "./node_modules/lit-html/directives/style-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/style-map.js ***!
  \*******************************************************/
/*! exports provided: styleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleMap", function() { return styleMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */
var previousStylePropertyCache = new WeakMap();
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS properties. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */
var styleMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (styleInfo) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'style' || part.committer.parts.length > 1) {
      throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
    }
    var committer = part.committer;
    var style = committer.element.style;
    var previousStyleProperties = previousStylePropertyCache.get(part);
    if (previousStyleProperties === undefined) {
      // Write static styles once
      style.cssText = committer.strings.join(' ');
      previousStylePropertyCache.set(part, previousStyleProperties = new Set());
    }
    // Remove old properties that no longer exist in styleInfo
    // We use forEach() instead of for-of so that re don't require down-level
    // iteration.
    previousStyleProperties.forEach(function (name) {
      if (!(name in styleInfo)) {
        previousStyleProperties.delete(name);
        if (name.indexOf('-') === -1) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style[name] = null;
        } else {
          style.removeProperty(name);
        }
      }
    });
    // Add or update properties
    for (var name in styleInfo) {
      previousStyleProperties.add(name);
      if (name.indexOf('-') === -1) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style[name] = styleInfo[name];
      } else {
        style.setProperty(name, styleInfo[name]);
      }
    }
  };
});

/***/ })

}]);
//# sourceMappingURL=LEGACY-vendors~drawer-hydejack-9.2.1.js.map