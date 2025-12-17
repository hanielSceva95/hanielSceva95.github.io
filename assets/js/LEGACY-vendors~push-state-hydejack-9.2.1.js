(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~push-state"],{

/***/ "./node_modules/@hydecorp/push-state/lib/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/@hydecorp/push-state/lib/common.js ***!
  \*********************************************************/
/*! exports provided: applyMixins, subscribeWhen, unsubscribeWhen, filterWhen, bufferDebounceTime, fetchRx, fragmentFromString, createMutationObservable, getScrollHeight, getScrollLeft, getScrollTop, matches, matchesAncestors, Cause, isExternal, isHash, shouldLoadAnchor, isPushEvent, isHintEvent, isHashChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cause", function() { return Cause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExternal", function() { return isExternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHash", function() { return isHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldLoadAnchor", function() { return shouldLoadAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPushEvent", function() { return isPushEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHintEvent", function() { return isHintEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHashChange", function() { return isHashChange; });
/* harmony import */ var _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hydecorp/component */ "./node_modules/@hydecorp/component/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyMixins", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["applyMixins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeWhen", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["subscribeWhen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsubscribeWhen", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["unsubscribeWhen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterWhen", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["filterWhen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bufferDebounceTime", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["bufferDebounceTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchRx", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["fetchRx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fragmentFromString", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["fragmentFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMutationObservable", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["createMutationObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollHeight", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["getScrollHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollLeft", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["getScrollLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollTop", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["getScrollTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["matches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchesAncestors", function() { return _hydecorp_component__WEBPACK_IMPORTED_MODULE_0__["matchesAncestors"]; });


var Cause;
(function (Cause) {
  Cause["Init"] = "init";
  Cause["Hint"] = "hint";
  Cause["Push"] = "push";
  Cause["Pop"] = "pop";
})(Cause || (Cause = {}));
;
function isExternal(url) {
  var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location;
  return url != null && (url.protocol !== location.protocol || url.host !== location.host);
}
function isHash(_ref) {
  var hash = _ref.hash,
    origin = _ref.origin,
    pathname = _ref.pathname;
  var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location;
  return hash !== "" && origin === location.origin && pathname === location.pathname;
}
function shouldLoadAnchor(anchor) {
  return anchor && anchor.target === "";
}
function isPushEvent(_ref2, location) {
  var url = _ref2.url,
    anchor = _ref2.anchor,
    _ref2$event = _ref2.event,
    metaKey = _ref2$event.metaKey,
    ctrlKey = _ref2$event.ctrlKey;
  return !!(!metaKey && !ctrlKey && shouldLoadAnchor(anchor) && !isExternal(url, location));
}
function isHintEvent(_ref3, location) {
  var url = _ref3.url,
    anchor = _ref3.anchor;
  return !!(shouldLoadAnchor(anchor) && !isExternal(url, location) && !isHash(url, location));
}
function isHashChange(_ref4) {
  var cause = _ref4.cause,
    _ref4$url = _ref4.url,
    pathname = _ref4$url.pathname,
    hash = _ref4$url.hash,
    oldURL = _ref4.oldURL;
  return pathname === (oldURL === null || oldURL === void 0 ? void 0 : oldURL.pathname) && (cause === Cause.Pop || cause === Cause.Push && hash !== '');
}

/***/ }),

/***/ "./node_modules/@hydecorp/push-state/lib/event-listeners.js":
/*!******************************************************************!*\
  !*** ./node_modules/@hydecorp/push-state/lib/event-listeners.js ***!
  \******************************************************************/
/*! exports provided: EventListenersMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListenersMixin", function() { return EventListenersMixin; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/@hydecorp/push-state/lib/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var flat = function flat(x) {
  return Array.prototype.concat.apply([], x);
};
var combineRecords = function combineRecords(records) {
  return {
    addedNodes: new Set(flat(records.map(function (r) {
      return Array.from(r.addedNodes);
    }))),
    removedNodes: new Set(flat(records.map(function (r) {
      return Array.from(r.removedNodes);
    })))
  };
};
var EventListenersMixin = /*#__PURE__*/function () {
  function EventListenersMixin() {
    _classCallCheck(this, EventListenersMixin);
  }
  return _createClass(EventListenersMixin, [{
    key: "setupEventListeners",
    value:
    // LINKS 2
    function setupEventListeners() {
      var _this = this;
      var pushEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.el, "click").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
        var anchor = Object(_common__WEBPACK_IMPORTED_MODULE_1__["matchesAncestors"])(event.target, _this.linkSelector);
        if (anchor instanceof HTMLAnchorElement) {
          return [event, anchor];
        }
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) {
        return !!x;
      }));
      var matchOrQuery = function matchOrQuery(el, selector) {
        if (el.matches(selector) && el instanceof HTMLAnchorElement) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(el);
        } else {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(el.querySelectorAll(selector)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (el) {
            return el instanceof HTMLAnchorElement;
          }));
        }
      };
      var addEventListeners = function addEventListeners(link) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(link, "mouseenter", {
          passive: true
        }), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(link, "touchstart", {
          passive: true
        }), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(link, "focus", {
          passive: true
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
          return [event, link];
        }));
      };
      var hintEvent$ = this.$.linkSelector.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (linkSelector) {
        var links = new Map();
        var addLink = function addLink(link) {
          if (!links.has(link)) {
            links.set(link, addEventListeners(link));
          }
        };
        var removeLink = function removeLink(link) {
          links.delete(link);
        };
        return Object(_common__WEBPACK_IMPORTED_MODULE_1__["createMutationObservable"])(_this.el, {
          childList: true,
          subtree: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({
          addedNodes: [_this.el],
          removedNodes: []
        }), Object(_common__WEBPACK_IMPORTED_MODULE_1__["bufferDebounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(combineRecords), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_ref) {
          var addedNodes = _ref.addedNodes,
            removedNodes = _ref.removedNodes;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(removedNodes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (el) {
            return el instanceof Element;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (el) {
            return matchOrQuery(el, linkSelector);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(removeLink)).subscribe();
          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(addedNodes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (el) {
            return el instanceof Element;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (el) {
            return matchOrQuery(el, linkSelector);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(addLink)).subscribe();
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(links.values()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])());
        }), Object(_common__WEBPACK_IMPORTED_MODULE_1__["subscribeWhen"])(_this.$.prefetch));
      }));
      return {
        hintEvent$: hintEvent$,
        pushEvent$: pushEvent$
      };
    }
  }]);
}();

/***/ }),

/***/ "./node_modules/@hydecorp/push-state/lib/event.js":
/*!********************************************************!*\
  !*** ./node_modules/@hydecorp/push-state/lib/event.js ***!
  \********************************************************/
/*! exports provided: EventManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventManager", function() { return EventManager; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var timeout = function timeout(t) {
  return new Promise(function (r) {
    return setTimeout(r, t);
  });
};
var EventManager = /*#__PURE__*/function () {
  function EventManager(parent) {
    _classCallCheck(this, EventManager);
    this.parent = parent;
  }
  return _createClass(EventManager, [{
    key: "onStart",
    value: function onStart(context) {
      var _this = this;
      this.parent.animPromise = timeout(this.parent.duration);
      var transitionUntil = function transitionUntil(promise) {
        _this.parent.animPromise = Promise.all([_this.parent.animPromise, promise]);
      };
      this.parent.fireEvent('start', {
        detail: _objectSpread(_objectSpread({}, context), {}, {
          transitionUntil: transitionUntil
        })
      });
    }
  }, {
    key: "emitDOMError",
    value: function emitDOMError(error) {
      if (true) console.error(error);
      // To open the link directly, we first pop one entry off the browser history.
      // We have to do this because some browsers (Safari) won't handle the back button correctly otherwise.
      // We then wait for a short time and change the document's location.
      // TODO: If we didn't call `pushState` optimistically we wouldn't have to do this.
      // TODO: Use browser sniffing instead?
      var url = location.href;
      window.history.back();
      setTimeout(function () {
        return document.location.assign(url);
      }, 100);
    }
  }, {
    key: "emitNetworkError",
    value: function emitNetworkError(context) {
      if (true) console.error(context);
      this.parent.fireEvent('networkerror', {
        detail: context
      });
    }
  }, {
    key: "emitError",
    value: function emitError(context) {
      if (true) console.error(context);
      this.parent.fireEvent('error', {
        detail: context
      });
    }
  }, {
    key: "emitReady",
    value: function emitReady(context) {
      this.parent.fireEvent('ready', {
        detail: context
      });
    }
  }, {
    key: "emitAfter",
    value: function emitAfter(context) {
      var _this2 = this;
      this.parent.fadePromise = timeout(this.parent.duration);
      var transitionUntil = function transitionUntil(promise) {
        _this2.parent.fadePromise = Promise.all([_this2.parent.fadePromise, promise]);
      };
      this.parent.fireEvent('after', {
        detail: _objectSpread(_objectSpread({}, context), {}, {
          transitionUntil: transitionUntil
        })
      });
    }
  }, {
    key: "emitProgress",
    value: function emitProgress(context) {
      this.parent.fireEvent('progress', {
        detail: context
      });
    }
  }, {
    key: "emitLoad",
    value: function emitLoad(context) {
      this.parent.fireEvent('load', {
        detail: context
      });
    }
  }]);
}();
;

/***/ }),

/***/ "./node_modules/@hydecorp/push-state/lib/fetch.js":
/*!********************************************************!*\
  !*** ./node_modules/@hydecorp/push-state/lib/fetch.js ***!
  \********************************************************/
/*! exports provided: FetchManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchManager", function() { return FetchManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./node_modules/@hydecorp/push-state/lib/common.js");
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



;
;
;
var FetchManager = /*#__PURE__*/function () {
  function FetchManager(parent) {
    _classCallCheck(this, FetchManager);
    this.parent = parent;
  }
  return _createClass(FetchManager, [{
    key: "fetchPage",
    value: function fetchPage(context) {
      return Object(_common__WEBPACK_IMPORTED_MODULE_2__["fetchRx"])(context.url.href, {
        method: "GET",
        mode: 'cors',
        headers: {
          Accept: "text/html"
        }
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (response) {
        return response.text();
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (responseText) {
        return _objectSpread(_objectSpread({}, context), {}, {
          responseText: responseText
        });
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_objectSpread(_objectSpread({}, context), {}, {
          error: error,
          responseText: null
        }));
      }));
    }
  }, {
    key: "selectPrefetch",
    value: function selectPrefetch(_ref, latestPrefetch, prefetch$) {
      var href = _ref.href;
      return href === latestPrefetch.url.href // && latestPrefetch.error == null
      ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(latestPrefetch) : prefetch$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    // Returns an observable that emits exactly one notice, which contains the response.
    // It will not emit until an (optional) page transition animation completes.
  }, {
    key: "getResponse",
    value: function getResponse(prefetch$, context, latestPrefetch) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["zip"])(this.selectPrefetch(context.url, latestPrefetch, prefetch$), this.parent.animPromise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
          prefetch = _ref3[0];
        return _objectSpread(_objectSpread({}, prefetch), context);
      }));
    }
  }]);
}();
;

/***/ }),

/***/ "./node_modules/@hydecorp/push-state/lib/history.js":
/*!**********************************************************!*\
  !*** ./node_modules/@hydecorp/push-state/lib/history.js ***!
  \**********************************************************/
/*! exports provided: HistoryManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryManager", function() { return HistoryManager; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/@hydecorp/push-state/lib/common.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// @ts-ignore
window.HashChangeEvent = window.HashChangeEvent || function HashChangeEvent(type) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$oldURL = _ref.oldURL,
    oldURL = _ref$oldURL === void 0 ? '' : _ref$oldURL,
    _ref$newURL = _ref.newURL,
    newURL = _ref$newURL === void 0 ? '' : _ref$newURL;
  var e = new CustomEvent(type);
  // @ts-ignore
  e.oldURL = oldURL;
  // @ts-ignore
  e.newURL = newURL;
  return e;
};
function simHashChange(newURL, oldURL) {
  if (newURL.hash !== oldURL.hash) {
    window.dispatchEvent(new HashChangeEvent('hashchange', {
      newURL: newURL.href,
      oldURL: oldURL.href
    }));
  }
}
var HistoryManager = /*#__PURE__*/function () {
  function HistoryManager(parent) {
    var _this = this;
    _classCallCheck(this, HistoryManager);
    this.updateHistoryScrollPosition = function () {
      if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isExternal"])(_this.parent)) return;
      var state = _this.assignScrollPosition(history.state || {});
      history.replaceState(state, document.title);
    };
    this.parent = parent;
  }
  return _createClass(HistoryManager, [{
    key: "updateHistoryState",
    value: function updateHistoryState(_ref2) {
      var cause = _ref2.cause,
        replace = _ref2.replace,
        url = _ref2.url,
        oldURL = _ref2.oldURL;
      if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isExternal"])(this.parent)) return;
      switch (cause) {
        case _common__WEBPACK_IMPORTED_MODULE_0__["Cause"].Init:
        case _common__WEBPACK_IMPORTED_MODULE_0__["Cause"].Push:
          {
            var histId = this.parent.histId;
            if (replace || url.href === location.href) {
              var state = _objectSpread(_objectSpread({}, history.state), {}, _defineProperty({}, histId, {}));
              history.replaceState(state, document.title, url.href);
            } else {
              history.pushState(_defineProperty({}, histId, {}), document.title, url.href);
            }
            // no break
          }
        case _common__WEBPACK_IMPORTED_MODULE_0__["Cause"].Pop:
          {
            if (this.parent.simulateHashChange && oldURL) simHashChange(url, oldURL);
            break;
          }
        default:
          {
            // if (process.env.DEBUG) console.warn(`Type '${cause}' not reconginzed`);
            break;
          }
      }
    }
  }, {
    key: "updateTitle",
    value: function updateTitle(_ref3) {
      var cause = _ref3.cause,
        title = _ref3.title;
      document.title = title;
      if (!Object(_common__WEBPACK_IMPORTED_MODULE_0__["isExternal"])(this.parent) && cause === _common__WEBPACK_IMPORTED_MODULE_0__["Cause"].Push) {
        history.replaceState(history.state, title);
      }
    }
  }, {
    key: "assignScrollPosition",
    value: function assignScrollPosition(state) {
      var histId = this.parent.histId;
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, histId, _objectSpread(_objectSpread({}, state[histId]), {}, {
        scrollTop: Object(_common__WEBPACK_IMPORTED_MODULE_0__["getScrollTop"])(),
        scrollHeight: Object(_common__WEBPACK_IMPORTED_MODULE_0__["getScrollHeight"])()
      })));
    }
  }]);
}();
;

/***/ }),

/***/ "./node_modules/@hydecorp/push-state/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@hydecorp/push-state/lib/index.js ***!
  \********************************************************/
/*! exports provided: HyPushState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HyPushState", function() { return HyPushState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
/* harmony import */ var _hydecorp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hydecorp/component */ "./node_modules/@hydecorp/component/lib/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ "./node_modules/@hydecorp/push-state/lib/common.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fetch */ "./node_modules/@hydecorp/push-state/lib/fetch.js");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update */ "./node_modules/@hydecorp/push-state/lib/update.js");
/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-listeners */ "./node_modules/@hydecorp/push-state/lib/event-listeners.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event */ "./node_modules/@hydecorp/push-state/lib/event.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history */ "./node_modules/@hydecorp/push-state/lib/history.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scroll */ "./node_modules/@hydecorp/push-state/lib/scroll.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var _HyPushState_initialized, _HyPushState_scrollManager, _HyPushState_historyManager, _HyPushState_fetchManager, _HyPushState_updateManager, _HyPushState_eventManager, _HyPushState_url, _HyPushState_setLocation, _HyPushState_cacheNr, _HyPushState_reload$, _HyPushState_updateHistoryScrollPosition, _HyPushState_response$, _HyPushState_upgrade;

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











function compareContext(p, q) {
  return p.url.href === q.url.href && p.error === q.error && p.cacheNr === q.cacheNr;
}
var HyPushState = /*#__PURE__*/function (_applyMixins) {
  function HyPushState() {
    var _this;
    _classCallCheck(this, HyPushState);
    _this = _callSuper(this, HyPushState, arguments);
    _this.el = _this;
    _this.linkSelector = "a[href]:not([data-no-push])";
    _this.prefetch = false;
    _this.duration = 0;
    // @property({ type: Boolean, reflect: true, attribute: 'simulate-load' }) simulateLoad: boolean = false;
    _this.simulateHashChange = false;
    _this.baseURL = window.location.href;
    _HyPushState_initialized.set(_this, Object(_hydecorp_component__WEBPACK_IMPORTED_MODULE_4__["createResolvablePromise"])());
    _this.animPromise = Promise.resolve(null);
    _this.fadePromise = Promise.resolve(null);
    _HyPushState_scrollManager.set(_this, new _scroll__WEBPACK_IMPORTED_MODULE_11__["ScrollManager"](_this));
    _HyPushState_historyManager.set(_this, new _history__WEBPACK_IMPORTED_MODULE_10__["HistoryManager"](_this));
    _HyPushState_fetchManager.set(_this, new _fetch__WEBPACK_IMPORTED_MODULE_6__["FetchManager"](_this));
    _HyPushState_updateManager.set(_this, new _update__WEBPACK_IMPORTED_MODULE_7__["UpdateManager"](_this));
    _HyPushState_eventManager.set(_this, new _event__WEBPACK_IMPORTED_MODULE_9__["EventManager"](_this));
    _HyPushState_url.set(_this, new URL(_this.baseURL));
    _HyPushState_setLocation.set(_this, function (key, value) {
      var u = new URL(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_url, "f").href);
      u[key] = value;
      _this.assign(u.href);
    }
    // Implement Location
    );
    _HyPushState_cacheNr.set(_this, 0);
    _HyPushState_reload$.set(_this, new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]());
    _HyPushState_updateHistoryScrollPosition.set(_this, function (event) {
      var anchor = Object(_hydecorp_component__WEBPACK_IMPORTED_MODULE_4__["matchesAncestors"])(event.target, 'a[href]');
      if (Object(_common__WEBPACK_IMPORTED_MODULE_5__["isExternal"])(anchor)) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_historyManager, "f").updateHistoryScrollPosition();
      }
    });
    _HyPushState_response$.set(_this, void 0);
    _HyPushState_upgrade.set(_this, function () {
      var _this$setupEventListe = _this.setupEventListeners(),
        pushEvent$ = _this$setupEventListe.pushEvent$,
        hintEvent$ = _this$setupEventListe.hintEvent$;
      var push$ = pushEvent$.pipe(
      // takeUntil(this.subjects.disconnect),
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          event = _ref2[0],
          anchor = _ref2[1];
        return {
          cause: _common__WEBPACK_IMPORTED_MODULE_5__["Cause"].Push,
          url: new URL(anchor.href, _this.href),
          anchor: anchor,
          event: event,
          cacheNr: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_cacheNr, "f")
        };
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) {
        return Object(_common__WEBPACK_IMPORTED_MODULE_5__["isPushEvent"])(x, _this);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_ref3) {
        var event = _ref3.event;
        event.preventDefault();
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_historyManager, "f").updateHistoryScrollPosition();
      }));
      var pop$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, "popstate").pipe(
      // takeUntil(this.subjects.disconnect),
      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
        return window.history.state && window.history.state[_this.histId];
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
        return {
          cause: _common__WEBPACK_IMPORTED_MODULE_5__["Cause"].Pop,
          url: new URL(window.location.href),
          cacheNr: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_cacheNr, "f"),
          event: event
        };
      }));
      var reload$ = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_reload$, "f"); // .pipe(takeUntil(this.subjects.disconnect));
      var merged$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(push$, pop$, reload$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
        url: new URL(window.location.href)
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          old = _ref5[0],
          current = _ref5[1];
        return Object.assign(current, {
          oldURL: old.url
        });
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
      var page$ = merged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (p) {
        return !Object(_common__WEBPACK_IMPORTED_MODULE_5__["isHashChange"])(p);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
      var hash$ = merged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (p) {
        return Object(_common__WEBPACK_IMPORTED_MODULE_5__["isHashChange"])(p);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
        return history.state && history.state[_this.histId];
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (context) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_historyManager, "f").updateHistoryState(context);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_scrollManager, "f").manageScrollPosition(context);
      }));
      var pauser$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(page$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_response$, "f").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false)));
      }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(false));
      var hint$ = hintEvent$.pipe(
      // takeUntil(this.subjects.disconnect),
      Object(_common__WEBPACK_IMPORTED_MODULE_5__["filterWhen"])(pauser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
        return !x;
      }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          event = _ref7[0],
          anchor = _ref7[1];
        return {
          cause: _common__WEBPACK_IMPORTED_MODULE_5__["Cause"].Hint,
          url: new URL(anchor.href, _this.href),
          anchor: anchor,
          event: event,
          cacheNr: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_cacheNr, "f")
        };
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) {
        return Object(_common__WEBPACK_IMPORTED_MODULE_5__["isHintEvent"])(x, _this);
      }));
      var prefetchResponse$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(hint$, page$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
        return compareContext(x, y);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (x) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_fetchManager, "f").fetchPage(x);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
        url: {}
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
      var response$ = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(_this, _HyPushState_response$, page$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (context) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_eventManager, "f").onStart(context);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_historyManager, "f").updateHistoryState(context);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(_this, _HyPushState_url, context.url, "f");
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(prefetchResponse$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (args) {
        var _classPrivateFieldGe;
        return (_classPrivateFieldGe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_fetchManager, "f")).getResponse.apply(_classPrivateFieldGe, [prefetchResponse$].concat(_toConsumableArray(args)));
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()), "f");
      var responseOk$ = response$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (ctx) {
        return !ctx.error;
      }));
      var responseErr$ = response$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (ctx) {
        return !!ctx.error;
      }));
      var main$ = responseOk$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (context) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_updateManager, "f").responseToContent(context);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (context) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_eventManager, "f").emitReady(context);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (context) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_updateManager, "f").updateDOM(context);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_historyManager, "f").updateTitle(context);
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_eventManager, "f").emitAfter(context);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
        cause: _common__WEBPACK_IMPORTED_MODULE_5__["Cause"].Init,
        url: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_url, "f"),
        scripts: []
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (context) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_scrollManager, "f").manageScrollPosition(context);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])({
        error: function error(e) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_eventManager, "f").emitDOMError(e);
        }
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_, c) {
        return c;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (x) {
        return _this.fadePromise.then(function () {
          return x;
        });
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (x) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_updateManager, "f").reinsertScriptTags(x);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])({
        error: function error(e) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_eventManager, "f").emitError(e);
        }
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (_, c) {
        return c;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (context) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_eventManager, "f").emitLoad(context);
      }));
      var error$ = responseErr$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_eventManager, "f").emitNetworkError(e);
      }));
      var progress$ = page$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (context) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["defer"])(function () {
          return _this.animPromise;
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(response$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(context));
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (context) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_eventManager, "f").emitProgress(context);
      }));
      // Subscriptions
      main$.subscribe();
      hash$.subscribe();
      error$.subscribe();
      progress$.subscribe();
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(_this, _HyPushState_initialized, "f").resolve(_this);
      _this.fireEvent('init');
    });
    return _this;
  }
  _inherits(HyPushState, _applyMixins);
  return _createClass(HyPushState, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }, {
    key: "initialized",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_initialized, "f");
    }
    // Implement Location
  }, {
    key: "hash",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_url, "f").hash;
    },
    set: function set(value) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_setLocation, "f").call(this, 'hash', value);
    }
  }, {
    key: "host",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_url, "f").host;
    },
    set: function set(value) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_setLocation, "f").call(this, 'host', value);
    }
  }, {
    key: "hostname",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_url, "f").hostname;
    },
    set: function set(value) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_setLocation, "f").call(this, 'hostname', value);
    }
  }, {
    key: "href",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_url, "f").href;
    },
    set: function set(value) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_setLocation, "f").call(this, 'href', value);
    }
  }, {
    key: "pathname",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_url, "f").pathname;
    },
    set: function set(value) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_setLocation, "f").call(this, 'pathname', value);
    }
  }, {
    key: "port",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_url, "f").port;
    },
    set: function set(value) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_setLocation, "f").call(this, 'port', value);
    }
  }, {
    key: "protocol",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_url, "f").protocol;
    },
    set: function set(value) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_setLocation, "f").call(this, 'protocol', value);
    }
  }, {
    key: "search",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_url, "f").search;
    },
    set: function set(value) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_setLocation, "f").call(this, 'search', value);
    }
  }, {
    key: "origin",
    get: function get() {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_url, "f").origin;
    }
  }, {
    key: "ancestorOrigins",
    get: function get() {
      return window.location.ancestorOrigins;
    }
  }, {
    key: "histId",
    get: function get() {
      return this.id || this.tagName;
    }
  }, {
    key: "assign",
    value: function assign(url) {
      var _a;
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_reload$, "f").next({
        cause: _common__WEBPACK_IMPORTED_MODULE_5__["Cause"].Push,
        url: new URL(url, this.href),
        cacheNr: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(this, _HyPushState_cacheNr, (_a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_cacheNr, "f"), ++_a), "f")
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _a;
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_reload$, "f").next({
        cause: _common__WEBPACK_IMPORTED_MODULE_5__["Cause"].Push,
        url: new URL(this.href),
        cacheNr: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(this, _HyPushState_cacheNr, (_a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_cacheNr, "f"), ++_a), "f"),
        replace: true
      });
    }
  }, {
    key: "replace",
    value: function replace(url) {
      var _a;
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_reload$, "f").next({
        cause: _common__WEBPACK_IMPORTED_MODULE_5__["Cause"].Push,
        url: new URL(url, this.href),
        cacheNr: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldSet"])(this, _HyPushState_cacheNr, (_a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_cacheNr, "f"), ++_a), "f"),
        replace: true
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet(HyPushState, "connectedCallback", this, 3)([]);
      this.$ = {
        linkSelector: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.linkSelector),
        prefetch: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.prefetch)
      };
      // Remember the current scroll position (for F5/reloads).
      window.addEventListener("beforeunload", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_historyManager, "f").updateHistoryScrollPosition);
      // Remember scroll position for backward/forward navigation cache.
      // Technically, this is only necessary for Safari, because other browsers will not use the BFN cache
      // when a beforeunload event is registered...
      document.documentElement.addEventListener('click', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_updateHistoryScrollPosition, "f"));
      this.updateComplete.then(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_upgrade, "f"));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener("beforeunload", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_historyManager, "f").updateHistoryScrollPosition);
      document.documentElement.removeEventListener('click', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__classPrivateFieldGet"])(this, _HyPushState_updateHistoryScrollPosition, "f"));
    }
  }]);
}(Object(_common__WEBPACK_IMPORTED_MODULE_5__["applyMixins"])(_hydecorp_component__WEBPACK_IMPORTED_MODULE_4__["RxLitElement"], [_event_listeners__WEBPACK_IMPORTED_MODULE_8__["EventListenersMixin"]]));
_HyPushState_initialized = new WeakMap(), _HyPushState_scrollManager = new WeakMap(), _HyPushState_historyManager = new WeakMap(), _HyPushState_fetchManager = new WeakMap(), _HyPushState_updateManager = new WeakMap(), _HyPushState_eventManager = new WeakMap(), _HyPushState_url = new WeakMap(), _HyPushState_setLocation = new WeakMap(), _HyPushState_cacheNr = new WeakMap(), _HyPushState_reload$ = new WeakMap(), _HyPushState_updateHistoryScrollPosition = new WeakMap(), _HyPushState_response$ = new WeakMap(), _HyPushState_upgrade = new WeakMap();
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: String,
  reflect: true,
  attribute: 'replace-selector'
})], HyPushState.prototype, "replaceSelector", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: String,
  reflect: true,
  attribute: 'link-selector'
})], HyPushState.prototype, "linkSelector", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: String,
  reflect: true,
  attribute: 'script-selector'
})], HyPushState.prototype, "scriptSelector", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean,
  reflect: true
})], HyPushState.prototype, "prefetch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Number,
  reflect: true
})], HyPushState.prototype, "duration", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean,
  reflect: true,
  attribute: 'hashchange'
})], HyPushState.prototype, "simulateHashChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: String
})], HyPushState.prototype, "baseURL", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()], HyPushState.prototype, "assign", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()], HyPushState.prototype, "reload", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()], HyPushState.prototype, "replace", null);
HyPushState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('hy-push-state')], HyPushState);


/***/ }),

/***/ "./node_modules/@hydecorp/push-state/lib/rewrite-urls.js":
/*!***************************************************************!*\
  !*** ./node_modules/@hydecorp/push-state/lib/rewrite-urls.js ***!
  \***************************************************************/
/*! exports provided: rewriteURLs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewriteURLs", function() { return rewriteURLs; });
// When fetching documents from an external source,
// relative URLs will be resolved relative to the current `window.location`.
// We can rewrite URL to absolute urls
function rewriteURLs(replaceEls, base) {
  replaceEls.forEach(function (el) {
    if (!el) return;
    el.querySelectorAll("[href]").forEach(rewriteURL("href", base));
    el.querySelectorAll("[src]").forEach(rewriteURL("src", base));
    el.querySelectorAll("img[srcset]").forEach(rewriteURLSrcSet("srcset", base));
    el.querySelectorAll("blockquote[cite]").forEach(rewriteURL("cite", base));
    el.querySelectorAll("del[cite]").forEach(rewriteURL("cite", base));
    el.querySelectorAll("ins[cite]").forEach(rewriteURL("cite", base));
    el.querySelectorAll("q[cite]").forEach(rewriteURL("cite", base));
    el.querySelectorAll("img[longdesc]").forEach(rewriteURL("longdesc", base));
    el.querySelectorAll("frame[longdesc]").forEach(rewriteURL("longdesc", base));
    el.querySelectorAll("iframe[longdesc]").forEach(rewriteURL("longdesc", base));
    el.querySelectorAll("img[usemap]").forEach(rewriteURL("usemap", base));
    el.querySelectorAll("input[usemap]").forEach(rewriteURL("usemap", base));
    el.querySelectorAll("object[usemap]").forEach(rewriteURL("usemap", base));
    el.querySelectorAll("form[action]").forEach(rewriteURL("action", base));
    el.querySelectorAll("button[formaction]").forEach(rewriteURL("formaction", base));
    el.querySelectorAll("input[formaction]").forEach(rewriteURL("formaction", base));
    el.querySelectorAll("video[poster]").forEach(rewriteURL("poster", base));
    el.querySelectorAll("object[data]").forEach(rewriteURL("data", base));
    el.querySelectorAll("object[codebase]").forEach(rewriteURL("codebase", base));
    el.querySelectorAll("object[archive]").forEach(rewriteURLList("archive", base));
    /* el.querySelectorAll("command[icon]").forEach(this.rewriteURL("icon")); */ // obsolte
  });
}
function rewriteURL(attr, base) {
  return function (el) {
    try {
      var attrVal = el.getAttribute(attr);
      if (attrVal == null) return;
      el.setAttribute(attr, new URL(attrVal, base).href);
    } catch (e) {
      // if (process.env.DEBUG) console.warn(`Couldn't rewrite URL in attribute ${attr} on element`, el);
    }
  };
}
function rewriteURLSrcSet(attr, base) {
  return function (el) {
    try {
      var attrVal = el.getAttribute(attr);
      if (attrVal == null) return;
      el.setAttribute(attr, attrVal.split(/\s*,\s*/).map(function (str) {
        var pair = str.split(/\s+/);
        pair[0] = new URL(pair[0], base).href;
        return pair.join(" ");
      }).join(", "));
    } catch (e) {
      // if (process.env.DEBUG) console.warn(`Couldn't rewrite URLs in attribute ${attr} on element`, el);
    }
  };
}
function rewriteURLList(attr, base) {
  return function (el) {
    try {
      var attrVal = el.getAttribute(attr);
      if (attrVal == null) return;
      el.setAttribute(attr, attrVal.split(/[\s,]+/).map(function (str) {
        return new URL(str, base).href;
      }).join(", "));
    } catch (e) {
      // if (process.env.DEBUG) console.warn(`Couldn't rewrite URLs in attribute ${attr} on element`, el);
    }
  };
}

/***/ }),

/***/ "./node_modules/@hydecorp/push-state/lib/script.js":
/*!*********************************************************!*\
  !*** ./node_modules/@hydecorp/push-state/lib/script.js ***!
  \*********************************************************/
/*! exports provided: ScriptManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptManager", function() { return ScriptManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/operators/index.js");
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


function cloneScript(script) {
  var newScript = document.createElement('script');
  Array.from(script.attributes).forEach(function (attr) {
    return newScript.setAttributeNode(attr.cloneNode());
  });
  newScript.innerHTML = script.innerHTML;
  return newScript;
}
var ScriptManager = /*#__PURE__*/function () {
  function ScriptManager(parent) {
    _classCallCheck(this, ScriptManager);
    this.parent = parent;
  }
  return _createClass(ScriptManager, [{
    key: "scriptSelector",
    get: function get() {
      return this.parent.scriptSelector;
    }
  }, {
    key: "removeScriptTags",
    value: function removeScriptTags(replaceEls) {
      var _this = this;
      var scripts = [];
      replaceEls.forEach(function (el) {
        if (el && _this.scriptSelector) {
          el.querySelectorAll(_this.scriptSelector).forEach(function (script) {
            if (script instanceof HTMLScriptElement) {
              var newScript = cloneScript(script);
              var pair = [newScript, script];
              scripts.push(pair);
            }
          });
        }
      });
      return scripts;
    }
  }, {
    key: "reinsertScriptTags",
    value: function reinsertScriptTags(context) {
      var _this2 = this;
      if (!this.scriptSelector) return Promise.resolve(context);
      var scripts = context.scripts;
      var originalWrite = document.write;
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(scripts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (script) {
        return _this2.insertScript(script);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(_objectSpread(_objectSpread({}, context), {}, {
          error: error
        }));
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
        return document.write = originalWrite;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(context)).toPromise();
    }
  }, {
    key: "insertScript",
    value: function insertScript(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        script = _ref2[0],
        ref = _ref2[1];
      document.write = function () {
        var temp = document.createElement("div");
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        temp.innerHTML = args.join();
        Array.from(temp.childNodes).forEach(function (node) {
          var _a;
          return (_a = ref.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(node, ref);
        });
      };
      return new Promise(function (resolve, reject) {
        var _a, _b;
        if (script.src !== "") {
          script.addEventListener("load", resolve);
          script.addEventListener("error", reject);
          (_a = ref.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(script, ref);
        } else {
          (_b = ref.parentNode) === null || _b === void 0 ? void 0 : _b.replaceChild(script, ref);
          resolve({});
        }
      });
    }
  }]);
}();

/***/ }),

/***/ "./node_modules/@hydecorp/push-state/lib/scroll.js":
/*!*********************************************************!*\
  !*** ./node_modules/@hydecorp/push-state/lib/scroll.js ***!
  \*********************************************************/
/*! exports provided: ScrollManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollManager", function() { return ScrollManager; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/@hydecorp/push-state/lib/common.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ScrollManager = /*#__PURE__*/function () {
  function ScrollManager(parent) {
    _classCallCheck(this, ScrollManager);
    this.parent = parent;
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }
  return _createClass(ScrollManager, [{
    key: "manageScrollPosition",
    value: function manageScrollPosition(_ref) {
      var cause = _ref.cause,
        hash = _ref.url.hash;
      switch (cause) {
        case _common__WEBPACK_IMPORTED_MODULE_0__["Cause"].Push:
          {
            // FIXME: make configurable
            this.scrollHashIntoView(hash, {
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
            break;
          }
        case _common__WEBPACK_IMPORTED_MODULE_0__["Cause"].Pop:
          {
            this.restoreScrollPosition();
            break;
          }
        case _common__WEBPACK_IMPORTED_MODULE_0__["Cause"].Init:
          {
            this.restoreScrollPositionOnReload();
            break;
          }
      }
    }
  }, {
    key: "elementFromHash",
    value: function elementFromHash(hash) {
      return document.getElementById(decodeURIComponent(hash.substr(1)));
    }
  }, {
    key: "scrollHashIntoView",
    value: function scrollHashIntoView(hash, options) {
      if (hash) {
        var el = this.elementFromHash(hash);
        if (el) el.scrollIntoView(options);
      } else {
        window.scroll(window.pageXOffset, 0);
      }
    }
  }, {
    key: "restoreScrollPosition",
    value: function restoreScrollPosition() {
      var histId = this.parent.histId;
      var _ref2 = history.state && history.state[histId] || {},
        scrollTop = _ref2.scrollTop;
      if (scrollTop != null) {
        window.scroll(window.pageXOffset, scrollTop);
      }
    }
  }, {
    key: "restoreScrollPositionOnReload",
    value: function restoreScrollPositionOnReload() {
      var _this = this;
      var histId = this.parent.histId;
      var scrollState = history.state && history.state[histId];
      // FIXME: As far as I can tell there is no better way of figuring out if the user has scrolled
      //        and it doesn't work on hash links b/c the scroll position is going to be non-null by definition
      if (scrollState && Object(_common__WEBPACK_IMPORTED_MODULE_0__["getScrollTop"])() === 0) {
        this.restoreScrollPosition();
      } else if (location.hash) {
        requestAnimationFrame(function () {
          return _this.scrollHashIntoView(location.hash, true);
        });
      }
    }
  }]);
}();
;

/***/ }),

/***/ "./node_modules/@hydecorp/push-state/lib/update.js":
/*!*********************************************************!*\
  !*** ./node_modules/@hydecorp/push-state/lib/update.js ***!
  \*********************************************************/
/*! exports provided: UpdateManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateManager", function() { return UpdateManager; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/@hydecorp/push-state/lib/common.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script */ "./node_modules/@hydecorp/push-state/lib/script.js");
/* harmony import */ var _rewrite_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rewrite-urls */ "./node_modules/@hydecorp/push-state/lib/rewrite-urls.js");
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



var CANONICAL_SEL = 'link[rel=canonical]';
var META_DESC_SEL = 'meta[name=description]';
;
var UpdateManager = /*#__PURE__*/function () {
  function UpdateManager(parent) {
    _classCallCheck(this, UpdateManager);
    this.parent = parent;
    this.scriptManager = new _script__WEBPACK_IMPORTED_MODULE_1__["ScriptManager"](parent);
  }
  return _createClass(UpdateManager, [{
    key: "el",
    get: function get() {
      return this.parent;
    }
  }, {
    key: "replaceSelector",
    get: function get() {
      return this.parent.replaceSelector;
    }
  }, {
    key: "scriptSelector",
    get: function get() {
      return this.parent.scriptSelector;
    }
    // Extracts the elements to be replaced
  }, {
    key: "getReplaceElements",
    value: function getReplaceElements(doc) {
      if (this.replaceSelector) {
        return this.replaceSelector.split(',').map(function (sel) {
          return doc.querySelector(sel);
        });
      } else if (this.el.id) {
        return [doc.getElementById(this.el.id)];
      } else {
        var index = Array.from(document.getElementsByTagName(this.el.tagName)).indexOf(this.el);
        return [doc.getElementsByTagName(this.el.tagName)[index]];
      }
    }
    // Takes the response string and turns it into document fragments
    // that can be inserted into the DOM.
  }, {
    key: "responseToContent",
    value: function responseToContent(context) {
      var responseText = context.responseText;
      var doc = new DOMParser().parseFromString(responseText, 'text/html');
      var _doc$title = doc.title,
        title = _doc$title === void 0 ? '' : _doc$title;
      var replaceEls = this.getReplaceElements(doc);
      if (replaceEls.every(function (el) {
        return el == null;
      })) {
        throw new Error("Couldn't find any element in the document at '".concat(location, "'."));
      }
      var scripts = this.scriptSelector ? this.scriptManager.removeScriptTags(replaceEls) : [];
      return _objectSpread(_objectSpread({}, context), {}, {
        document: doc,
        title: title,
        replaceEls: replaceEls,
        scripts: scripts
      });
    }
    // Replaces the old elements with the new one, one-by-one.
  }, {
    key: "replaceContentWithSelector",
    value: function replaceContentWithSelector(replaceSelector, elements) {
      replaceSelector.split(',').map(function (sel) {
        return document.querySelector(sel);
      }).forEach(function (oldElement, i) {
        var _a;
        var el = elements[i];
        if (el) (_a = oldElement === null || oldElement === void 0 ? void 0 : oldElement.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(el, oldElement);
      });
    }
    // When no `replaceIds` are set, replace the entire content of the component (slow).
  }, {
    key: "replaceContentWholesale",
    value: function replaceContentWholesale(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        el = _ref2[0];
      if (el) this.el.innerHTML = el.innerHTML;
    }
  }, {
    key: "replaceContent",
    value: function replaceContent(replaceEls) {
      if (this.replaceSelector) {
        this.replaceContentWithSelector(this.replaceSelector, replaceEls);
      } else {
        this.replaceContentWholesale(replaceEls);
      }
    }
  }, {
    key: "replaceHead",
    value: function replaceHead(doc) {
      var head = this.el.ownerDocument.head;
      var canonicalEl = head.querySelector(CANONICAL_SEL);
      var cEl = doc.head.querySelector(CANONICAL_SEL);
      if (canonicalEl && cEl) canonicalEl.href = cEl.href;
      var metaDescEl = head.querySelector(META_DESC_SEL);
      var mEl = doc.head.querySelector(META_DESC_SEL);
      if (metaDescEl && mEl) metaDescEl.content = mEl.content;
    }
  }, {
    key: "updateDOM",
    value: function updateDOM(context) {
      try {
        var replaceEls = context.replaceEls,
          _document = context.document;
        if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isExternal"])(this.parent)) Object(_rewrite_urls__WEBPACK_IMPORTED_MODULE_2__["rewriteURLs"])(replaceEls, this.parent.href);
        this.replaceHead(_document);
        this.replaceContent(replaceEls);
      } catch (error) {
        throw _objectSpread(_objectSpread({}, context), {}, {
          error: error
        });
      }
    }
  }, {
    key: "reinsertScriptTags",
    value: function reinsertScriptTags(context) {
      return this.scriptManager.reinsertScriptTags(context);
    }
  }]);
}();

/***/ })

}]);
//# sourceMappingURL=LEGACY-vendors~push-state-hydejack-9.2.1.js.map