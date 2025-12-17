(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clap-button"],{

/***/ "./_js/src/clap-button.js":
/*!********************************!*\
  !*** ./_js/src/clap-button.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var broadcastchannel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! broadcastchannel-polyfill */ "./node_modules/broadcastchannel-polyfill/index.js");
/* harmony import */ var broadcastchannel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(broadcastchannel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./_js/src/common.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Copyright (c) 2020 Florian Klampfer <https://qwtel.com/>
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



_asyncToGenerator(function* () {
  yield Promise.all([...('customElements' in window ? [] : [Promise.all(/*! import() | webcomponents */[__webpack_require__.e("vendors~webcomponents"), __webpack_require__.e("webcomponents")]).then(__webpack_require__.bind(null, /*! ./polyfills/webcomponents */ "./_js/src/polyfills/webcomponents.js")).then(() => Promise.all(/*! import() | shadydom */[__webpack_require__.e("vendors~shadydom"), __webpack_require__.e("shadydom")]).then(__webpack_require__.bind(null, /*! ./polyfills/shadydom */ "./_js/src/polyfills/shadydom.js")))])]);
  yield _common__WEBPACK_IMPORTED_MODULE_1__["webComponentsReady"];
  yield _common__WEBPACK_IMPORTED_MODULE_1__["stylesheetReady"];
  if ( true && !window.GET_CLAPS_API) window.GET_CLAPS_API = "https://worker.getclaps.dev";
  Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(null, /*! @getclaps/button */ "./node_modules/@getclaps/button/dist/index.js", 7));
})();

/***/ })

}]);
//# sourceMappingURL=clap-button-hydejack-9.2.1.js.map