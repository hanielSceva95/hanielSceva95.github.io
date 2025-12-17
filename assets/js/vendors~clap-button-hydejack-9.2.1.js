(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~clap-button"],{

/***/ "./node_modules/@getclaps/button/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@getclaps/button/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(() => {
  var wt = Object.defineProperty;
  var vt = Object.prototype.hasOwnProperty;
  var Sn = Object.getOwnPropertyDescriptor,
    Se = Object.getOwnPropertySymbols,
    xt = Object.prototype.propertyIsEnumerable;
  var St = (t, e, n) => e in t ? wt(t, e, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }) : t[e] = n,
    ee = (t, e) => {
      for (var n in e || (e = {})) vt.call(e, n) && St(t, n, e[n]);
      if (Se) for (var n of Se(e)) xt.call(e, n) && St(t, n, e[n]);
      return t;
    };
  var _t = (t, e) => {
    var n = {};
    for (var r in t) vt.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && Se) for (var r of Se(t)) e.indexOf(r) < 0 && xt.call(t, r) && (n[r] = t[r]);
    return n;
  };
  var v = (t, e, n, r) => {
    for (var s = r > 1 ? void 0 : r ? Sn(e, n) : e, o = t.length - 1, i; o >= 0; o--) (i = t[o]) && (s = (r ? i(e, n, s) : i(s)) || s);
    return r && s && wt(e, n, s), s;
  };
  var Ct = (t, e, n) => {
      if (!e.has(t)) throw TypeError("Cannot " + n);
    },
    g = (t, e, n) => (Ct(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
    te = (t, e, n, r) => (Ct(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n);
  var Pt = function () {
    function t() {}
    return t.prototype.then = function (e, n) {
      var r = new t(),
        s = this.s;
      if (s) {
        var o = 1 & s ? e : n;
        if (o) {
          try {
            C(r, 1, o(this.v));
          } catch (i) {
            C(r, 2, i);
          }
          return r;
        }
        return this;
      }
      return this.o = function (o) {
        try {
          var i = o.v;
          1 & o.s ? C(r, 1, e ? e(i) : i) : n ? C(r, 1, n(i)) : C(r, 2, i);
        } catch (i) {
          C(r, 2, i);
        }
      }, r;
    }, t;
  }();
  function C(t, e, n) {
    if (!t.s) {
      if (n instanceof Pt) {
        if (!n.s) return void (n.o = C.bind(null, t, e));
        1 & e && (e = n.s), n = n.v;
      }
      if (n && n.then) return void n.then(C.bind(null, t, e), C.bind(null, t, 2));
      t.s = e, t.v = n;
      var r = t.o;
      r && r(t);
    }
  }
  var _n = 0,
    ne = typeof WeakMap == "function" ? WeakMap : function () {
      var t = typeof Symbol == "function" ? Symbol(0) : "__weak$" + ++_n;
      this.set = function (e, n) {
        e[t] = n;
      }, this.get = function (e) {
        return e[t];
      };
    };
  function ze(t, e) {
    return new Promise(function (n, r) {
      t.onsuccess = function () {
        var s = t.result;
        e && (s = e(s)), n(s);
      }, t.onerror = function () {
        r(t.error);
      };
    });
  }
  function At(t, e) {
    return ze(t.openCursor(e), function (n) {
      return n ? [n.key, n.value] : [];
    });
  }
  function Tt(t) {
    return new Promise(function (e, n) {
      t.oncomplete = function () {
        e();
      }, t.onabort = function () {
        n(t.error);
      }, t.onerror = function () {
        n(t.error);
      };
    });
  }
  function Fe(t) {
    if (!function (e) {
      return !!(typeof e == "number" || typeof e == "string" || typeof e == "object" && e && (Array.isArray(e) || "setUTCFullYear" in e || typeof ArrayBuffer == "function" && ArrayBuffer.isView(e) || "byteLength" in e && "length" in e));
    }(t)) throw Error("kv-storage: The given value is not allowed as a key");
  }
  var kt = {};
  function Et(t, e) {
    return At(t, Lt(e));
  }
  function Lt(t) {
    return t === kt ? IDBKeyRange.lowerBound(-Infinity) : IDBKeyRange.lowerBound(t, !0);
  }
  var Nt = new ne(),
    _e = new ne(),
    Ce = new ne(),
    Ut = new ne(),
    Pe = function Pe() {};
  function Mt(t, e) {
    return e(function (n, r) {
      try {
        var u = function u() {
          return _e.set(t, o), Ce.set(t, void 0), {
            value: a,
            done: o === void 0
          };
        };
        var s = _e.get(t);
        if (s === void 0) return Promise.resolve({
          value: void 0,
          done: !0
        });
        var o,
          i,
          a,
          l = function (d, c) {
            var b,
              p = -1;
            e: {
              for (var f = 0; f < c.length; f++) {
                var h = c[f][0];
                if (h) {
                  var m = h();
                  if (m && m.then) break e;
                  if (m === d) {
                    p = f;
                    break;
                  }
                } else p = f;
              }
              if (p !== -1) {
                do {
                  for (var y = c[p][1]; !y;) y = c[++p][1];
                  var x = y();
                  if (x && x.then) {
                    b = !0;
                    break e;
                  }
                  var S = c[p][2];
                  p++;
                } while (S && !S());
                return x;
              }
            }
            var ue = new Pt(),
              xe = C.bind(null, ue, 2);
            return (b ? x.then(qe) : m.then(function Q($) {
              for (;;) {
                if ($ === d) {
                  p = f;
                  break;
                }
                if (++f === c.length) {
                  if (p !== -1) break;
                  return void C(ue, 1, de);
                }
                if (h = c[f][0]) {
                  if (($ = h()) && $.then) return void $.then(Q).then(void 0, xe);
                } else p = f;
              }
              do {
                for (var H = c[p][1]; !H;) H = c[++p][1];
                var de = H();
                if (de && de.then) return void de.then(qe).then(void 0, xe);
                var bt = c[p][2];
                p++;
              } while (bt && !bt());
              C(ue, 1, de);
            })).then(void 0, xe), ue;
            function qe(Q) {
              for (;;) {
                var $ = c[p][2];
                if (!$ || $()) break;
                for (var H = c[++p][1]; !H;) H = c[++p][1];
                if ((Q = H()) && Q.then) return void Q.then(qe).then(void 0, xe);
              }
              C(ue, 1, Q);
            }
          }(Ut.get(t), [[function () {
            return "keys";
          }, function () {
            return Promise.resolve(function (d, c) {
              return At(d, Lt(c)).then(function (b) {
                return b[0];
              });
            }(r, s)).then(function (d) {
              a = o = d;
            });
          }], [function () {
            return "values";
          }, function () {
            return Promise.resolve(Et(r, s)).then(function (d) {
              var c;
              o = (c = d)[0], a = i = c[1];
            });
          }], [function () {
            return "entries";
          }, function () {
            return Promise.resolve(Et(r, s)).then(function (d) {
              var c;
              i = (c = d)[1], a = (o = c[0]) === void 0 ? void 0 : [o, i];
            });
          }]]);
        return Promise.resolve(l && l.then ? l.then(u) : u());
      } catch (u) {
        return Promise.reject(u);
      }
    });
  }
  function We(t, e) {
    var n = new Pe();
    return Ut.set(n, t), Nt.set(n, e), _e.set(n, kt), Ce.set(n, void 0), n;
  }
  Pe.prototype.return = function () {
    _e.set(this, void 0);
  }, Pe.prototype.next = function () {
    var t = this,
      e = Nt.get(this);
    if (!e) return Promise.reject(new TypeError("Invalid this value"));
    var n,
      r = Ce.get(this);
    return n = r !== void 0 ? r.then(function () {
      return Mt(t, e);
    }) : Mt(this, e), Ce.set(this, n), n;
  }, typeof Symbol == "function" && Symbol.asyncIterator && (Pe.prototype[Symbol.asyncIterator] = function () {
    return this;
  });
  var re = function re(t, e, n) {
      try {
        return R.get(t) === null && function (r) {
          var s = Ye.get(r);
          R.set(r, new Promise(function (o, i) {
            var a = self.indexedDB.open(s, 1);
            a.onsuccess = function () {
              var l = a.result;
              (function (u, d, c) {
                if (u.objectStoreNames.length !== 1 || u.objectStoreNames[0] !== q) return c(Ke(d)), !1;
                var b = u.transaction(q, "readonly").objectStore(q);
                return !(b.autoIncrement || b.keyPath || b.indexNames.length) || (c(Ke(d)), !1);
              })(l, s, i) && (l.onclose = function () {
                R.set(r, null);
              }, l.onversionchange = function () {
                l.close(), R.set(r, null);
              }, o(l));
            }, a.onerror = function () {
              return i(a.error);
            }, a.onupgradeneeded = function () {
              try {
                a.result.createObjectStore(q);
              } catch (l) {
                i(l);
              }
            };
          }));
        }(t), Promise.resolve(R.get(t)).then(function (r) {
          var s = r.transaction(q, e),
            o = s.objectStore(q);
          return n(s, o);
        });
      } catch (r) {
        return Promise.reject(r);
      }
    },
    Ye = new ne(),
    R = new ne(),
    q = "store",
    k = function k(t) {
      var e = "kv-storage:" + t;
      R.set(this, null), Ye.set(this, e), this.backingStore = {
        database: e,
        store: q,
        version: 1
      };
    };
  function Ke(t) {
    return new Error('kv-storage: database "' + t + '" corrupted');
  }
  k.prototype.set = function (t, e) {
    try {
      return Fe(t), re(this, "readwrite", function (n, r) {
        return e === void 0 ? r.delete(t) : r.put(e, t), Tt(n);
      });
    } catch (n) {
      return Promise.reject(n);
    }
  }, k.prototype.get = function (t) {
    try {
      return Fe(t), re(this, "readonly", function (e, n) {
        return ze(n.get(t));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }, k.prototype.delete = function (t) {
    try {
      return Fe(t), re(this, "readwrite", function (e, n) {
        return n.delete(t), Tt(e);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }, k.prototype.clear = function () {
    try {
      var s = function s() {
        function o() {
          return ze(self.indexedDB.deleteDatabase(Ye.get(t)));
        }
        var i = function () {
          if (e) {
            try {
              e.close();
            } catch (a) {}
            return Promise.resolve(new Promise(setTimeout)).then(function () {});
          }
        }();
        return i && i.then ? i.then(o) : o();
      };
      var t = this,
        e,
        n = R.get(t),
        r = function () {
          if (n !== null) {
            var i = function i() {
              R.set(t, null);
            };
            var o = function (a, l) {
              try {
                var u = Promise.resolve(n).then(function (d) {
                  e = d;
                });
              } catch (d) {
                return;
              }
              return u && u.then ? u.then(void 0, function () {}) : u;
            }();
            return o && o.then ? o.then(i) : i();
          }
        }();
      return r && r.then ? r.then(s) : s();
    } catch (s) {
      return Promise.reject(s);
    }
  }, k.prototype.keys = function () {
    var t = this;
    return We("keys", function (e) {
      return re(t, "readonly", e);
    });
  }, k.prototype.values = function () {
    var t = this;
    return We("values", function (e) {
      return re(t, "readonly", e);
    });
  }, k.prototype.entries = function () {
    var t = this;
    return We("entries", function (e) {
      return re(t, "readonly", e);
    });
  }, typeof Symbol == "function" && Symbol.asyncIterator && (k.prototype[Symbol.asyncIterator] = k.prototype.entries);
  var lr = new k("default");
  var Ge = typeof window != "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0,
    pe = function pe(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      for (; e !== n;) {
        var s = e.nextSibling;
        t.insertBefore(e, r), e = s;
      }
    },
    N = function N(t, e) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      for (; e !== n;) {
        var r = e.nextSibling;
        t.removeChild(e), e = r;
      }
    };
  var L = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
    Je = "<!--".concat(L, "-->"),
    jt = new RegExp("".concat(L, "|").concat(Je)),
    se = "$lit$",
    oe = class {
      constructor(e, n) {
        this.parts = [], this.element = n;
        var r = [],
          s = [],
          o = document.createTreeWalker(n.content, 133, null, !1),
          i = 0,
          a = -1,
          l = 0,
          {
            strings: u,
            values: {
              length: d
            }
          } = e;
        for (; l < d;) {
          var c = o.nextNode();
          if (c === null) {
            o.currentNode = s.pop();
            continue;
          }
          if (a++, c.nodeType === 1) {
            if (c.hasAttributes()) {
              var b = c.attributes,
                {
                  length: p
                } = b,
                f = 0;
              for (var h = 0; h < p; h++) Rt(b[h].name, se) && f++;
              for (; f-- > 0;) {
                var _h = u[l],
                  m = Ae.exec(_h)[2],
                  y = m.toLowerCase() + se,
                  x = c.getAttribute(y);
                c.removeAttribute(y);
                var S = x.split(jt);
                this.parts.push({
                  type: "attribute",
                  index: a,
                  name: m,
                  strings: S
                }), l += S.length - 1;
              }
            }
            c.tagName === "TEMPLATE" && (s.push(c), o.currentNode = c.content);
          } else if (c.nodeType === 3) {
            var _b = c.data;
            if (_b.indexOf(L) >= 0) {
              var _p = c.parentNode,
                _f = _b.split(jt),
                _h2 = _f.length - 1;
              for (var _m = 0; _m < _h2; _m++) {
                var _y = void 0,
                  _x = _f[_m];
                if (_x === "") _y = P();else {
                  var _S = Ae.exec(_x);
                  _S !== null && Rt(_S[2], se) && (_x = _x.slice(0, _S.index) + _S[1] + _S[2].slice(0, -se.length) + _S[3]), _y = document.createTextNode(_x);
                }
                _p.insertBefore(_y, c), this.parts.push({
                  type: "node",
                  index: ++a
                });
              }
              _f[_h2] === "" ? (_p.insertBefore(P(), c), r.push(c)) : c.data = _f[_h2], l += _h2;
            }
          } else if (c.nodeType === 8) if (c.data === L) {
            var _b2 = c.parentNode;
            (c.previousSibling === null || a === i) && (a++, _b2.insertBefore(P(), c)), i = a, this.parts.push({
              type: "node",
              index: a
            }), c.nextSibling === null ? c.data = "" : (r.push(c), a--), l++;
          } else {
            var _b3 = -1;
            for (; (_b3 = c.data.indexOf(L, _b3 + 1)) !== -1;) this.parts.push({
              type: "node",
              index: -1
            }), l++;
          }
        }
        for (var _c of r) _c.parentNode.removeChild(_c);
      }
    },
    Rt = (t, e) => {
      var n = t.length - e.length;
      return n >= 0 && t.slice(n) === e;
    },
    he = t => t.index !== -1,
    P = () => document.createComment(""),
    Ae = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  var Xe = 133;
  function Ze(t, e) {
    var {
        element: {
          content: n
        },
        parts: r
      } = t,
      s = document.createTreeWalker(n, Xe, null, !1),
      o = fe(r),
      i = r[o],
      a = -1,
      l = 0,
      u = [],
      d = null;
    for (; s.nextNode();) {
      a++;
      var c = s.currentNode;
      for (c.previousSibling === d && (d = null), e.has(c) && (u.push(c), d === null && (d = c)), d !== null && l++; i !== void 0 && i.index === a;) i.index = d !== null ? -1 : i.index - l, o = fe(r, o), i = r[o];
    }
    u.forEach(c => c.parentNode.removeChild(c));
  }
  var Cn = t => {
      var e = t.nodeType === 11 ? 0 : 1,
        n = document.createTreeWalker(t, Xe, null, !1);
      for (; n.nextNode();) e++;
      return e;
    },
    fe = function fe(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      for (var n = e + 1; n < t.length; n++) {
        var r = t[n];
        if (he(r)) return n;
      }
      return -1;
    };
  function It(t, e) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var {
      element: {
        content: r
      },
      parts: s
    } = t;
    if (n == null) {
      r.appendChild(e);
      return;
    }
    var o = document.createTreeWalker(r, Xe, null, !1),
      i = fe(s),
      a = 0,
      l = -1;
    for (; o.nextNode();) for (l++, o.currentNode === n && (a = Cn(e), n.parentNode.insertBefore(e, n)); i !== -1 && s[i].index === l;) {
      if (a > 0) {
        for (; i !== -1;) s[i].index += a, i = fe(s, i);
        return;
      }
      i = fe(s, i);
    }
  }
  var Vt = new WeakMap(),
    U = t => function () {
      var n = t(...arguments);
      return Vt.set(n, !0), n;
    },
    z = t => typeof t == "function" && Vt.has(t);
  var A = {},
    Te = {};
  var F = class {
    constructor(e, n, r) {
      this.__parts = [], this.template = e, this.processor = n, this.options = r;
    }
    update(e) {
      var n = 0;
      for (var r of this.__parts) r !== void 0 && r.setValue(e[n]), n++;
      for (var _r of this.__parts) _r !== void 0 && _r.commit();
    }
    _clone() {
      var e = Ge ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
        n = [],
        r = this.template.parts,
        s = document.createTreeWalker(e, 133, null, !1),
        o = 0,
        i = 0,
        a,
        l = s.nextNode();
      for (; o < r.length;) {
        if (a = r[o], !he(a)) {
          this.__parts.push(void 0), o++;
          continue;
        }
        for (; i < a.index;) i++, l.nodeName === "TEMPLATE" && (n.push(l), s.currentNode = l.content), (l = s.nextNode()) === null && (s.currentNode = n.pop(), l = s.nextNode());
        if (a.type === "node") {
          var u = this.processor.handleTextExpression(this.options);
          u.insertAfterNode(l.previousSibling), this.__parts.push(u);
        } else this.__parts.push(...this.processor.handleAttributeExpressions(l, a.name, a.strings, this.options));
        o++;
      }
      return Ge && (document.adoptNode(e), customElements.upgrade(e)), e;
    }
  };
  var Ot = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
      createHTML: t => t
    }),
    Pn = " ".concat(L, " "),
    M = class {
      constructor(e, n, r, s) {
        this.strings = e, this.values = n, this.type = r, this.processor = s;
      }
      getHTML() {
        var e = this.strings.length - 1,
          n = "",
          r = !1;
        for (var s = 0; s < e; s++) {
          var o = this.strings[s],
            i = o.lastIndexOf("<!--");
          r = (i > -1 || r) && o.indexOf("-->", i + 1) === -1;
          var a = Ae.exec(o);
          a === null ? n += o + (r ? Pn : Je) : n += o.substr(0, a.index) + a[1] + a[2] + se + a[3] + L;
        }
        return n += this.strings[e], n;
      }
      getTemplateElement() {
        var e = document.createElement("template"),
          n = this.getHTML();
        return Ot !== void 0 && (n = Ot.createHTML(n)), e.innerHTML = n, e;
      }
    },
    me = class extends M {
      getHTML() {
        return "<svg>".concat(super.getHTML(), "</svg>");
      }
      getTemplateElement() {
        var e = super.getTemplateElement(),
          n = e.content,
          r = n.firstChild;
        return n.removeChild(r), pe(n, r.firstChild), e;
      }
    };
  var ie = t => t === null || !(typeof t == "object" || typeof t == "function"),
    ke = t => Array.isArray(t) || !!(t && t[Symbol.iterator]),
    ye = class {
      constructor(e, n, r) {
        this.dirty = !0, this.element = e, this.name = n, this.strings = r, this.parts = [];
        for (var s = 0; s < r.length - 1; s++) this.parts[s] = this._createPart();
      }
      _createPart() {
        return new I(this);
      }
      _getValue() {
        var e = this.strings,
          n = e.length - 1,
          r = this.parts;
        if (n === 1 && e[0] === "" && e[1] === "") {
          var o = r[0].value;
          if (typeof o == "symbol") return String(o);
          if (typeof o == "string" || !ke(o)) return o;
        }
        var s = "";
        for (var _o = 0; _o < n; _o++) {
          s += e[_o];
          var i = r[_o];
          if (i !== void 0) {
            var a = i.value;
            if (ie(a) || !ke(a)) s += typeof a == "string" ? a : String(a);else for (var l of a) s += typeof l == "string" ? l : String(l);
          }
        }
        return s += e[n], s;
      }
      commit() {
        this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
      }
    },
    I = class {
      constructor(e) {
        this.value = void 0, this.committer = e;
      }
      setValue(e) {
        e !== A && (!ie(e) || e !== this.value) && (this.value = e, z(e) || (this.committer.dirty = !0));
      }
      commit() {
        for (; z(this.value);) {
          var e = this.value;
          this.value = A, e(this);
        }
        this.value !== A && this.committer.commit();
      }
    },
    T = class {
      constructor(e) {
        this.value = void 0, this.__pendingValue = void 0, this.options = e;
      }
      appendInto(e) {
        this.startNode = e.appendChild(P()), this.endNode = e.appendChild(P());
      }
      insertAfterNode(e) {
        this.startNode = e, this.endNode = e.nextSibling;
      }
      appendIntoPart(e) {
        e.__insert(this.startNode = P()), e.__insert(this.endNode = P());
      }
      insertAfterPart(e) {
        e.__insert(this.startNode = P()), this.endNode = e.endNode, e.endNode = this.startNode;
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        if (this.startNode.parentNode === null) return;
        for (; z(this.__pendingValue);) {
          var n = this.__pendingValue;
          this.__pendingValue = A, n(this);
        }
        var e = this.__pendingValue;
        e !== A && (ie(e) ? e !== this.value && this.__commitText(e) : e instanceof M ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : ke(e) ? this.__commitIterable(e) : e === Te ? (this.value = Te, this.clear()) : this.__commitText(e));
      }
      __insert(e) {
        this.endNode.parentNode.insertBefore(e, this.endNode);
      }
      __commitNode(e) {
        this.value !== e && (this.clear(), this.__insert(e), this.value = e);
      }
      __commitText(e) {
        var n = this.startNode.nextSibling;
        e = e == null ? "" : e;
        var r = typeof e == "string" ? e : String(e);
        n === this.endNode.previousSibling && n.nodeType === 3 ? n.data = r : this.__commitNode(document.createTextNode(r)), this.value = e;
      }
      __commitTemplateResult(e) {
        var n = this.options.templateFactory(e);
        if (this.value instanceof F && this.value.template === n) this.value.update(e.values);else {
          var r = new F(n, e.processor, this.options),
            s = r._clone();
          r.update(e.values), this.__commitNode(s), this.value = r;
        }
      }
      __commitIterable(e) {
        Array.isArray(this.value) || (this.value = [], this.clear());
        var n = this.value,
          r = 0,
          s;
        for (var o of e) s = n[r], s === void 0 && (s = new T(this.options), n.push(s), r === 0 ? s.appendIntoPart(this) : s.insertAfterPart(n[r - 1])), s.setValue(o), s.commit(), r++;
        r < n.length && (n.length = r, this.clear(s && s.endNode));
      }
      clear() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        N(this.startNode.parentNode, e.nextSibling, this.endNode);
      }
    },
    Le = class {
      constructor(e, n, r) {
        if (this.value = void 0, this.__pendingValue = void 0, r.length !== 2 || r[0] !== "" || r[1] !== "") throw new Error("Boolean attributes can only contain a single expression");
        this.element = e, this.name = n, this.strings = r;
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        for (; z(this.__pendingValue);) {
          var n = this.__pendingValue;
          this.__pendingValue = A, n(this);
        }
        if (this.__pendingValue === A) return;
        var e = !!this.__pendingValue;
        this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = A;
      }
    },
    Ee = class extends ye {
      constructor(e, n, r) {
        super(e, n, r);
        this.single = r.length === 2 && r[0] === "" && r[1] === "";
      }
      _createPart() {
        return new W(this);
      }
      _getValue() {
        return this.single ? this.parts[0].value : super._getValue();
      }
      commit() {
        this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
      }
    },
    W = class extends I {},
    Dt = !1;
  (() => {
    try {
      var t = {
        get capture() {
          return Dt = !0, !1;
        }
      };
      window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
    } catch (t) {}
  })();
  var Ne = class {
      constructor(e, n, r) {
        this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = n, this.eventContext = r, this.__boundHandleEvent = s => this.handleEvent(s);
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        for (; z(this.__pendingValue);) {
          var o = this.__pendingValue;
          this.__pendingValue = A, o(this);
        }
        if (this.__pendingValue === A) return;
        var e = this.__pendingValue,
          n = this.value,
          r = e == null || n != null && (e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive),
          s = e != null && (n == null || r);
        r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), s && (this.__options = An(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = A;
      }
      handleEvent(e) {
        typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
      }
    },
    An = t => t && (Dt ? {
      capture: t.capture,
      passive: t.passive,
      once: t.once
    } : t.capture);
  function Qe(t) {
    var e = Y.get(t.type);
    e === void 0 && (e = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    }, Y.set(t.type, e));
    var n = e.stringsArray.get(t.strings);
    if (n !== void 0) return n;
    var r = t.strings.join(L);
    return n = e.keyString.get(r), n === void 0 && (n = new oe(t, t.getTemplateElement()), e.keyString.set(r, n)), e.stringsArray.set(t.strings, n), n;
  }
  var Y = new Map();
  var V = new WeakMap(),
    et = (t, e, n) => {
      var r = V.get(e);
      r === void 0 && (N(e, e.firstChild), V.set(e, r = new T(Object.assign({
        templateFactory: Qe
      }, n))), r.appendInto(e)), r.setValue(t), r.commit();
    };
  var tt = class {
      handleAttributeExpressions(e, n, r, s) {
        var o = n[0];
        return o === "." ? new Ee(e, n.slice(1), r).parts : o === "@" ? [new Ne(e, n.slice(1), s.eventContext)] : o === "?" ? [new Le(e, n.slice(1), r)] : new ye(e, n, r).parts;
      }
      handleTextExpression(e) {
        return new T(e);
      }
    },
    Ue = new tt();
  typeof window != "undefined" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");
  var O = function O(t) {
      for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }
      return new M(t, e, "html", Ue);
    },
    K = function K(t) {
      for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }
      return new me(t, e, "svg", Ue);
    };
  var Bt = (t, e) => "".concat(t, "--").concat(e),
    Me = !0;
  typeof window.ShadyCSS == "undefined" ? Me = !1 : typeof window.ShadyCSS.prepareTemplateDom == "undefined" && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), Me = !1);
  var Tn = t => e => {
      var n = Bt(e.type, t),
        r = Y.get(n);
      r === void 0 && (r = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      }, Y.set(n, r));
      var s = r.stringsArray.get(e.strings);
      if (s !== void 0) return s;
      var o = e.strings.join(L);
      if (s = r.keyString.get(o), s === void 0) {
        var i = e.getTemplateElement();
        Me && window.ShadyCSS.prepareTemplateDom(i, t), s = new oe(e, i), r.keyString.set(o, s);
      }
      return r.stringsArray.set(e.strings, s), s;
    },
    kn = ["html", "svg"],
    Ln = t => {
      kn.forEach(e => {
        var n = Y.get(Bt(e, t));
        n !== void 0 && n.keyString.forEach(r => {
          var {
              element: {
                content: s
              }
            } = r,
            o = new Set();
          Array.from(s.querySelectorAll("style")).forEach(i => {
            o.add(i);
          }), Ze(r, o);
        });
      });
    },
    $t = new Set(),
    En = (t, e, n) => {
      $t.add(t);
      var r = n ? n.element : document.createElement("template"),
        s = e.querySelectorAll("style"),
        {
          length: o
        } = s;
      if (o === 0) {
        window.ShadyCSS.prepareTemplateStyles(r, t);
        return;
      }
      var i = document.createElement("style");
      for (var u = 0; u < o; u++) {
        var d = s[u];
        d.parentNode.removeChild(d), i.textContent += d.textContent;
      }
      Ln(t);
      var a = r.content;
      n ? It(n, i, a.firstChild) : a.insertBefore(i, a.firstChild), window.ShadyCSS.prepareTemplateStyles(r, t);
      var l = a.querySelector("style");
      if (window.ShadyCSS.nativeShadow && l !== null) e.insertBefore(l.cloneNode(!0), e.firstChild);else if (n) {
        a.insertBefore(i, a.firstChild);
        var _u = new Set();
        _u.add(i), Ze(n, _u);
      }
    },
    Ht = (t, e, n) => {
      if (!n || typeof n != "object" || !n.scopeName) throw new Error("The `scopeName` option is required.");
      var r = n.scopeName,
        s = V.has(e),
        o = Me && e.nodeType === 11 && !!e.host,
        i = o && !$t.has(r),
        a = i ? document.createDocumentFragment() : e;
      if (et(t, a, Object.assign({
        templateFactory: Tn(r)
      }, n)), i) {
        var l = V.get(a);
        V.delete(a);
        var u = l.value instanceof F ? l.value.template : void 0;
        En(r, a, u), N(e, e.firstChild), e.appendChild(a), V.set(e, l);
      }
      !s && o && window.ShadyCSS.styleElement(e.host);
    };
  var qt;
  window.JSCompiler_renameProperty = (t, e) => t;
  var nt = {
      toAttribute(t, e) {
        switch (e) {
          case Boolean:
            return t ? "" : null;
          case Object:
          case Array:
            return t == null ? t : JSON.stringify(t);
        }
        return t;
      },
      fromAttribute(t, e) {
        switch (e) {
          case Boolean:
            return t !== null;
          case Number:
            return t === null ? null : Number(t);
          case Object:
          case Array:
            return JSON.parse(t);
        }
        return t;
      }
    },
    zt = (t, e) => e !== t && (e === e || t === t),
    rt = {
      attribute: !0,
      type: String,
      converter: nt,
      reflect: !1,
      hasChanged: zt
    },
    st = 1,
    ot = 1 << 2,
    it = 1 << 3,
    at = 1 << 4,
    ct = "finalized",
    je = class extends HTMLElement {
      constructor() {
        super();
        this.initialize();
      }
      static get observedAttributes() {
        this.finalize();
        var e = [];
        return this._classProperties.forEach((n, r) => {
          var s = this._attributeNameForProperty(r, n);
          s !== void 0 && (this._attributeToPropertyMap.set(s, r), e.push(s));
        }), e;
      }
      static _ensureClassProperties() {
        if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
          this._classProperties = new Map();
          var e = Object.getPrototypeOf(this)._classProperties;
          e !== void 0 && e.forEach((n, r) => this._classProperties.set(r, n));
        }
      }
      static createProperty(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : rt;
        if (this._ensureClassProperties(), this._classProperties.set(e, n), n.noAccessor || this.prototype.hasOwnProperty(e)) return;
        var r = typeof e == "symbol" ? Symbol() : "__".concat(e),
          s = this.getPropertyDescriptor(e, r, n);
        s !== void 0 && Object.defineProperty(this.prototype, e, s);
      }
      static getPropertyDescriptor(e, n, r) {
        return {
          get() {
            return this[n];
          },
          set(s) {
            var o = this[e];
            this[n] = s, this.requestUpdateInternal(e, o, r);
          },
          configurable: !0,
          enumerable: !0
        };
      }
      static getPropertyOptions(e) {
        return this._classProperties && this._classProperties.get(e) || rt;
      }
      static finalize() {
        var e = Object.getPrototypeOf(this);
        if (e.hasOwnProperty(ct) || e.finalize(), this[ct] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
          var n = this.properties,
            r = [...Object.getOwnPropertyNames(n), ...(typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(n) : [])];
          for (var s of r) this.createProperty(s, n[s]);
        }
      }
      static _attributeNameForProperty(e, n) {
        var r = n.attribute;
        return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
      }
      static _valueHasChanged(e, n) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : zt;
        return r(e, n);
      }
      static _propertyValueFromAttribute(e, n) {
        var r = n.type,
          s = n.converter || nt,
          o = typeof s == "function" ? s : s.fromAttribute;
        return o ? o(e, r) : e;
      }
      static _propertyValueToAttribute(e, n) {
        if (n.reflect === void 0) return;
        var r = n.type,
          s = n.converter;
        return (s && s.toAttribute || nt.toAttribute)(e, r);
      }
      initialize() {
        this._updateState = 0, this._updatePromise = new Promise(e => this._enableUpdatingResolver = e), this._changedProperties = new Map(), this._saveInstanceProperties(), this.requestUpdateInternal();
      }
      _saveInstanceProperties() {
        this.constructor._classProperties.forEach((e, n) => {
          if (this.hasOwnProperty(n)) {
            var r = this[n];
            delete this[n], this._instanceProperties || (this._instanceProperties = new Map()), this._instanceProperties.set(n, r);
          }
        });
      }
      _applyInstanceProperties() {
        this._instanceProperties.forEach((e, n) => this[n] = e), this._instanceProperties = void 0;
      }
      connectedCallback() {
        this.enableUpdating();
      }
      enableUpdating() {
        this._enableUpdatingResolver !== void 0 && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
      }
      disconnectedCallback() {}
      attributeChangedCallback(e, n, r) {
        n !== r && this._attributeToProperty(e, r);
      }
      _propertyToAttribute(e, n) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : rt;
        var s = this.constructor,
          o = s._attributeNameForProperty(e, r);
        if (o !== void 0) {
          var i = s._propertyValueToAttribute(n, r);
          if (i === void 0) return;
          this._updateState = this._updateState | it, i == null ? this.removeAttribute(o) : this.setAttribute(o, i), this._updateState = this._updateState & ~it;
        }
      }
      _attributeToProperty(e, n) {
        if (this._updateState & it) return;
        var r = this.constructor,
          s = r._attributeToPropertyMap.get(e);
        if (s !== void 0) {
          var o = r.getPropertyOptions(s);
          this._updateState = this._updateState | at, this[s] = r._propertyValueFromAttribute(n, o), this._updateState = this._updateState & ~at;
        }
      }
      requestUpdateInternal(e, n, r) {
        var s = !0;
        if (e !== void 0) {
          var o = this.constructor;
          r = r || o.getPropertyOptions(e), o._valueHasChanged(this[e], n, r.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, n), r.reflect === !0 && !(this._updateState & at) && (this._reflectingProperties === void 0 && (this._reflectingProperties = new Map()), this._reflectingProperties.set(e, r))) : s = !1;
        }
        !this._hasRequestedUpdate && s && (this._updatePromise = this._enqueueUpdate());
      }
      requestUpdate(e, n) {
        return this.requestUpdateInternal(e, n), this.updateComplete;
      }
      _enqueueUpdate() {
        var _this = this;
        return _asyncToGenerator(function* () {
          _this._updateState = _this._updateState | ot;
          try {
            yield _this._updatePromise;
          } catch (n) {}
          var e = _this.performUpdate();
          return e != null && (yield e), !_this._hasRequestedUpdate;
        })();
      }
      get _hasRequestedUpdate() {
        return this._updateState & ot;
      }
      get hasUpdated() {
        return this._updateState & st;
      }
      performUpdate() {
        if (!this._hasRequestedUpdate) return;
        this._instanceProperties && this._applyInstanceProperties();
        var e = !1,
          n = this._changedProperties;
        try {
          e = this.shouldUpdate(n), e ? this.update(n) : this._markUpdated();
        } catch (r) {
          throw e = !1, this._markUpdated(), r;
        }
        e && (this._updateState & st || (this._updateState = this._updateState | st, this.firstUpdated(n)), this.updated(n));
      }
      _markUpdated() {
        this._changedProperties = new Map(), this._updateState = this._updateState & ~ot;
      }
      get updateComplete() {
        return this._getUpdateComplete();
      }
      _getUpdateComplete() {
        return this._updatePromise;
      }
      shouldUpdate(e) {
        return !0;
      }
      update(e) {
        this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((n, r) => this._propertyToAttribute(r, this[r], n)), this._reflectingProperties = void 0), this._markUpdated();
      }
      updated(e) {}
      firstUpdated(e) {}
    };
  qt = ct;
  je[qt] = !0;
  var Nn = (t, e) => (window.customElements.define(t, e), e),
    Un = (t, e) => {
      var {
        kind: n,
        elements: r
      } = e;
      return {
        kind: n,
        elements: r,
        finisher(s) {
          window.customElements.define(t, s);
        }
      };
    },
    Re = t => e => typeof e == "function" ? Nn(t, e) : Un(t, e),
    Mn = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), {
      finisher(n) {
        n.createProperty(e.key, t);
      }
    }) : {
      kind: "field",
      key: Symbol(),
      placement: "own",
      descriptor: {},
      initializer() {
        typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
      },
      finisher(n) {
        n.createProperty(e.key, t);
      }
    },
    jn = (t, e, n) => {
      e.constructor.createProperty(n, t);
    };
  function _(t) {
    return (e, n) => n !== void 0 ? jn(t, e, n) : Mn(t, e);
  }
  function Ft(t, e) {
    return (n, r) => {
      var s = {
        get() {
          return this.renderRoot.querySelector(t);
        },
        enumerable: !0,
        configurable: !0
      };
      if (e) {
        var o = typeof r == "symbol" ? Symbol() : "__".concat(r);
        s.get = function () {
          return this[o] === void 0 && (this[o] = this.renderRoot.querySelector(t)), this[o];
        };
      }
      return r !== void 0 ? Rn(s, n, r) : In(s, n);
    };
  }
  var Rn = (t, e, n) => {
      Object.defineProperty(e, n, t);
    },
    In = (t, e) => ({
      kind: "method",
      placement: "prototype",
      key: e.key,
      descriptor: t
    });
  var Wt = Element.prototype,
    is = Wt.msMatchesSelector || Wt.webkitMatchesSelector;
  var Ie = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    lt = Symbol(),
    Ve = class {
      constructor(e, n) {
        if (n !== lt) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = e;
      }
      get styleSheet() {
        return this._styleSheet === void 0 && (Ie ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
      }
      toString() {
        return this.cssText;
      }
    },
    Yt = t => new Ve(String(t), lt),
    Vn = t => {
      if (t instanceof Ve) return t.cssText;
      if (typeof t == "number") return t;
      throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(t, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
    },
    Kt = function Kt(t) {
      for (var _len3 = arguments.length, e = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }
      var n = e.reduce((r, s, o) => r + Vn(s) + t[o + 1], t[0]);
      return new Ve(n, lt);
    };
  (window.litElementVersions || (window.litElementVersions = [])).push("2.4.0");
  var Gt = {},
    D = class extends je {
      static getStyles() {
        return this.styles;
      }
      static _getUniqueStyles() {
        if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
        var e = this.getStyles();
        if (Array.isArray(e)) {
          var n = (o, i) => o.reduceRight((a, l) => Array.isArray(l) ? n(l, a) : (a.add(l), a), i),
            r = n(e, new Set()),
            s = [];
          r.forEach(o => s.unshift(o)), this._styles = s;
        } else this._styles = e === void 0 ? [] : [e];
        this._styles = this._styles.map(n => {
          if (n instanceof CSSStyleSheet && !Ie) {
            var _r2 = Array.prototype.slice.call(n.cssRules).reduce((s, o) => s + o.cssText, "");
            return Yt(_r2);
          }
          return n;
        });
      }
      initialize() {
        super.initialize(), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
      }
      createRenderRoot() {
        return this.attachShadow({
          mode: "open"
        });
      }
      adoptStyles() {
        var e = this.constructor._styles;
        e.length !== 0 && (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow ? window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(n => n.cssText), this.localName) : Ie ? this.renderRoot.adoptedStyleSheets = e.map(n => n instanceof CSSStyleSheet ? n : n.styleSheet) : this._needsShimAdoptedStyleSheets = !0);
      }
      connectedCallback() {
        super.connectedCallback(), this.hasUpdated && window.ShadyCSS !== void 0 && window.ShadyCSS.styleElement(this);
      }
      update(e) {
        var n = this.render();
        super.update(e), n !== Gt && this.constructor.render(n, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(r => {
          var s = document.createElement("style");
          s.textContent = r.cssText, this.renderRoot.appendChild(s);
        }));
      }
      render() {
        return Gt;
      }
    };
  D.finalized = !0;
  D.render = Ht;
  var Jt = class {
      constructor(e) {
        this.classes = new Set(), this.changed = !1, this.element = e;
        var n = (e.getAttribute("class") || "").split(/\s+/);
        for (var r of n) this.classes.add(r);
      }
      add(e) {
        this.classes.add(e), this.changed = !0;
      }
      remove(e) {
        this.classes.delete(e), this.changed = !0;
      }
      commit() {
        if (this.changed) {
          var e = "";
          this.classes.forEach(n => e += n + " "), this.element.setAttribute("class", e);
        }
      }
    },
    Xt = new WeakMap(),
    Oe = U(t => e => {
      if (!(e instanceof I) || e instanceof W || e.committer.name !== "class" || e.committer.parts.length > 1) throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
      var {
          committer: n
        } = e,
        {
          element: r
        } = n,
        s = Xt.get(e);
      s === void 0 && (r.setAttribute("class", n.strings.join(" ")), Xt.set(e, s = new Set()));
      var o = r.classList || new Jt(r);
      s.forEach(i => {
        i in t || (o.remove(i), s.delete(i));
      });
      for (var i in t) {
        var a = t[i];
        a != s.has(i) && (a ? (o.add(i), s.add(i)) : (o.remove(i), s.delete(i)));
      }
      typeof o.commit == "function" && o.commit();
    });
  var Zt = new WeakMap(),
    De = U(t => e => {
      if (!(e instanceof I) || e instanceof W || e.committer.name !== "style" || e.committer.parts.length > 1) throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
      var {
          committer: n
        } = e,
        {
          style: r
        } = n.element,
        s = Zt.get(e);
      s === void 0 && (r.cssText = n.strings.join(" "), Zt.set(e, s = new Set())), s.forEach(o => {
        o in t || (s.delete(o), o.indexOf("-") === -1 ? r[o] = null : r.removeProperty(o));
      });
      for (var o in t) s.add(o), o.indexOf("-") === -1 ? r[o] = t[o] : r.setProperty(o, t[o]);
    });
  var Qt = (t, e) => {
      var n = t.startNode.parentNode,
        r = e === void 0 ? t.endNode : e.startNode,
        s = n.insertBefore(P(), r);
      n.insertBefore(P(), r);
      var o = new T(t.options);
      return o.insertAfterNode(s), o;
    },
    G = (t, e) => (t.setValue(e), t.commit(), t),
    ut = (t, e, n) => {
      var r = t.startNode.parentNode,
        s = n ? n.startNode : t.endNode,
        o = e.endNode.nextSibling;
      o !== s && pe(r, e.startNode, o, s);
    },
    dt = t => {
      N(t.startNode.parentNode, t.startNode, t.endNode.nextSibling);
    },
    en = (t, e, n) => {
      var r = new Map();
      for (var s = e; s <= n; s++) r.set(t[s], s);
      return r;
    },
    tn = new WeakMap(),
    nn = new WeakMap(),
    rn = U((t, e, n) => {
      var r;
      return n === void 0 ? n = e : e !== void 0 && (r = e), s => {
        if (!(s instanceof T)) throw new Error("repeat can only be used in text bindings");
        var o = tn.get(s) || [],
          i = nn.get(s) || [],
          a = [],
          l = [],
          u = [],
          d = 0;
        for (var y of t) u[d] = r ? r(y, d) : d, l[d] = n(y, d), d++;
        var c,
          b,
          p = 0,
          f = o.length - 1,
          h = 0,
          m = l.length - 1;
        for (; p <= f && h <= m;) if (o[p] === null) p++;else if (o[f] === null) f--;else if (i[p] === u[h]) a[h] = G(o[p], l[h]), p++, h++;else if (i[f] === u[m]) a[m] = G(o[f], l[m]), f--, m--;else if (i[p] === u[m]) a[m] = G(o[p], l[m]), ut(s, o[p], a[m + 1]), p++, m--;else if (i[f] === u[h]) a[h] = G(o[f], l[h]), ut(s, o[f], o[p]), f--, h++;else if (c === void 0 && (c = en(u, h, m), b = en(i, p, f)), !c.has(i[p])) dt(o[p]), p++;else if (!c.has(i[f])) dt(o[f]), f--;else {
          var _y2 = b.get(u[h]),
            x = _y2 !== void 0 ? o[_y2] : null;
          if (x === null) {
            var S = Qt(s, o[p]);
            G(S, l[h]), a[h] = S;
          } else a[h] = G(x, l[h]), ut(s, x, o[p]), o[_y2] = null;
          h++;
        }
        for (; h <= m;) {
          var _y3 = Qt(s, a[m + 1]);
          G(_y3, l[h]), a[h++] = _y3;
        }
        for (; p <= f;) {
          var _y4 = o[p++];
          _y4 !== null && dt(_y4);
        }
        tn.set(s, a), nn.set(s, u);
      };
    });
  var sn = new WeakMap(),
    on = U(t => e => {
      if (!(e instanceof T)) throw new Error("unsafeHTML can only be used in text bindings");
      var n = sn.get(e);
      if (n !== void 0 && ie(t) && t === n.value && e.value === n.fragment) return;
      var r = document.createElement("template");
      r.innerHTML = t;
      var s = document.importNode(r.content, !0);
      e.setValue(s), sn.set(e, {
        value: t,
        fragment: s
      });
    });
  var an = Kt(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n:host {\n  display: block;\n  position: relative;\n  width: 5em;\n  height: 5em;\n  margin: 5em auto;\n}\n.style-root {\n  position: absolute;\n  fill: var(--clap-button-color, var(--theme-color, rgb(79,177,186)));\n  stroke: var(--clap-button-color, var(--theme-color, rgb(79,177,186)));\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n  .style-root .error { color: indianred }\n  .style-root button {\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer; \n    border: none;\n    background: none;\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .style-root button:disabled {\n    cursor: default; }\n  .style-root .shockwave {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    color: var(--clap-button-color, var(--theme-color, rgb(79,177,186)));\n    border-radius: 50%; }\n  .style-root svg {\n    position: absolute;\n    width: 60%;\n    height: 60%;\n    margin: 20%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0.8;\n    stroke: none;\n    overflow: visible !important; }\n    .style-root svg g.flat {\n      visibility: hidden; }\n    .style-root svg g.outline {\n      visibility: visible; }\n  .style-root.clapped:not(.loading) svg g.flat {\n    visibility: visible; }\n  .style-root.clapped svg g.outline {\n    visibility: hidden; }\n  .style-root.loading svg g.outline {\n    visibility: visible; }\n  .style-root .count-container {\n    position: absolute;\n    width: 100%;\n    color: inherit;\n    user-select: none; }\n  .style-root .count-container.container-top {\n    top: -2.5em; }\n  .style-root .count-container.container-bottom {\n    bottom: -2.5em; }\n    .style-root .count-container > div {\n      width: 300%;\n      margin-left: -100%;\n      text-align: center; }\n  .style-root g.sparkle circle {\n    opacity: 0;\n    stroke-width: 0; }\n  .style-root:not(.clapped):not(.no-shockwave):not(.no-animation) .shockwave {\n    animation-name: shockwave;\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in; }\n  .style-root.clap {\n    animation-name: pulse;\n    animation-duration: 0.5s;\n    animation-iteration-count: 1; \n    animation-timing-function: ease-out; }\n    .style-root.clap .sparkle circle {\n      animation-name: explode;\n      animation-duration: 0.5s;\n      animation-iteration-count: 1; }\n    .style-root.clap .container-top .count {\n      animation-name: hide-then-show;\n      animation-duration: 0.5s;\n      animation-iteration-count: 1; }\n    .style-root.clap .container-bottom .count {\n      animation-name: hide-then-show-inverse;\n      animation-duration: 0.5s;\n      animation-iteration-count: 1; }\n\n#hand-svg {\n  margin-top: 22%;\n  margin-left: 22%;\n}\n\n#countdown-svg {\n  width: 100%;\n  height: 100%;\n  stroke: var(--clap-button-color, var(--theme-color, rgb(79,177,186)));\n  margin: 0;\n}\n\n.countdown {\n  fill: none; \n  transform: rotateZ(0deg);\n  transform-origin: center;\n}\n\n.countdown circle {\n  stroke-width: 2px;\n  opacity: 1;\n  stroke-linecap: round;\n  stroke-dasharray: 308 308;\n  transform: rotate(-90deg);\n  transform-origin: center;\n}\n\n.style-root.ticking .countdown circle {\n  animation-timing-function: ease;\n  animation-name: countdown;\n  animation-duration: 3s; \n}\n\n.style-root.loading:not(.no-animation) .countdown {\n  animation: 2s linear infinite svg-animation; \n}\n\n.style-root.loading:not(.no-animation) .countdown circle {\n  animation: 1.4s ease-in-out infinite both circle-animation;\n  stroke-dasharray: 308;\n  stroke-dashoffset: 302; \n}\n\n@keyframes svg-animation {\n  0% { \n    transform: rotateZ(-90deg);\n  }\n  100% { \n    transform: rotateZ(270deg);\n  }\n}\n\n@keyframes circle-animation {\n  0%,\n  15% {\n    stroke-dashoffset: 280;\n    transform: rotate(0); \n  }\n  50%,\n  65% {\n    stroke-dashoffset: 75;\n    transform: rotate(45deg); \n  }\n  100% {\n    stroke-dashoffset: 280;\n    transform: rotate(360deg); \n  }\n}\n\n@keyframes countdown {\n  0% {\n    stroke-dasharray: 308 308;\n  }\n  50% {\n    stroke-dasharray: 308 308;\n  }\n  100% {\n    stroke-dasharray: 0 308;\n  }\n}\n\n@keyframes explode {\n  0% {\n    transform: translateX(10px);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(25px);\n  }\n}\n\n@keyframes shockwave {\n  0% {\n    transform: scale(1);\n    opacity: 1; \n    box-shadow: 0 0 2px, inset 0 0 1px;\n  }\n  89.99% {\n    transform: scale(1);\n    opacity: 0;\n    box-shadow: 0 0 50px, inset 0 0 10px;\n  }\n  90%, 100% {\n    transform: scale(1);\n    opacity: 0;\n    box-shadow: 0 0 2px, inset 0 0 1px;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes hide-then-show {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  20% {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  50% {\n    transform: translateY(10px);\n  }\n  80% {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0); \n  }\n}\n\n@keyframes hide-then-show-inverse {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  20% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n  80% {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n"])));
  var pt = t => t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  var On = pt;
  var Dn = t => t.toString(16).padStart(2, "0"),
    Bn = t => parseInt(t, 16),
    cn = t => new Uint8Array(t.match(/[0-9a-f]{1,2}/ig).map(Bn));
  var ln = t => Array.from(On(t), e => Dn(e));
  function un() {
    for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      t[_key4] = arguments[_key4];
    }
    var e = t.reduce((s, o) => s + o.length, 0),
      n = new Uint8Array(e),
      r = 0;
    for (var s of t) n.set(s, r), r += s.length;
    return n;
  }
  function Be(t) {
    var e = ln(t);
    return e.splice(4, 0, "-"), e.splice(7, 0, "-"), e.splice(10, 0, "-"), e.splice(13, 0, "-"), e.join("");
  }
  function dn() {
    var t = crypto.getRandomValues(new Uint8Array(16));
    return t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128, t.buffer;
  }
  function $n(t) {
    var e = t.replace(/[^0-9a-f]/gi, "").slice(0, 32);
    if (e.length < 32) throw Error("UUID too short");
    return cn(e).buffer;
  }
  function Hn(t) {
    return t = unescape(encodeURIComponent(t)), new TextEncoder().encode(t);
  }
  function qn(_x2, _x3) {
    return _qn.apply(this, arguments);
  }
  function _qn() {
    _qn = _asyncToGenerator(function* (t, e) {
      var n = typeof t == "string" ? Hn(t) : pt(t),
        r = typeof e == "string" ? new E(e) : e,
        s = new Uint8Array(yield crypto.subtle.digest("SHA-1", un(r, n)));
      return s[6] = s[6] & 15 | 80, s[8] = s[8] & 63 | 128, s.buffer.slice(0, 16);
    });
    return _qn.apply(this, arguments);
  }
  var E = class extends Uint8Array {
      static v4() {
        return new E(dn());
      }
      static v5(e, n) {
        return _asyncToGenerator(function* () {
          return new E(yield qn(e, n));
        })();
      }
      constructor(e, n) {
        if (e == null) super(dn());else if (typeof e == "string") super($n(e));else if (e instanceof E) super(e.buffer.slice(0));else {
          var r = e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? new Uint8Array(e, n != null ? n : 0, 16) : "length" in e ? new Uint8Array(e) : new Uint8Array(e);
          if (r.length < 16) throw Error("UUID too short");
          super(r.buffer.slice(0, 16));
        }
      }
      get id() {
        return Be(this);
      }
      get uuid() {
        return Be(this);
      }
      toString() {
        return Be(this);
      }
      toJSON() {
        return Be(this);
      }
      static get [Symbol.species]() {
        return Uint8Array;
      }
    },
    zn = Symbol.for("nodejs.util.inspect.custom"),
    Fn = typeof Deno != "undefined" ? "symbols" in Deno ? Deno.symbols.customInspect : Deno.customInspect : Symbol();
  E.prototype[zn] = function () {
    return "UUID [ ".concat(this.uuid, " ]");
  };
  E.prototype[Fn] = function () {
    return "UUID [ ".concat(this.uuid, " ]");
  };
  var Wn = t => t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  var Yn = Wn;
  function Kn() {
    for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      t[_key5] = arguments[_key5];
    }
    var e = t.reduce((s, o) => s + o.length, 0),
      n = new Uint8Array(e),
      r = 0;
    for (var s of t) n.set(s, r), r += s.length;
    return n;
  }
  function pn() {
    for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      t[_key6] = arguments[_key6];
    }
    return Kn(...t.map(Yn));
  }
  var Gn = 8,
    Jn = 15,
    ht = t => crypto.subtle.digest("SHA-256", t),
    Xn = t => ht(new TextEncoder().encode(t));
  function Zn(_x4) {
    return _Zn.apply(this, arguments);
  }
  function _Zn() {
    _Zn = _asyncToGenerator(function* (_ref) {
      var {
        url: t,
        id: e,
        claps: n,
        nonce: r
      } = _ref;
      return pn(yield Xn(t.toString()), new E(e.toString()), new Uint32Array([n]), new Uint32Array([r])).buffer;
    });
    return _Zn.apply(this, arguments);
  }
  function Qn(t, e) {
    var n = new Uint8Array(t),
      r = Math.ceil(e / 8);
    for (var s = 0; s < r; s++) {
      var o = Math.min(8, e - s * 8);
      for (var i = 0; i < o; i++) if ((n[s] >> 7 - i & 1) != 0) return !1;
    }
    return !0;
  }
  var er = t => Gn + Math.round(Math.log2(Jn + t));
  function hn(_x5) {
    return _hn.apply(this, arguments);
  }
  function _hn() {
    _hn = _asyncToGenerator(function* (_ref2) {
      var {
        url: t,
        claps: e,
        id: n
      } = _ref2;
      var r = er(e),
        s = 0,
        o = new Uint32Array(yield Zn({
          url: t,
          id: n,
          claps: e,
          nonce: s
        })),
        i = yield ht(o);
      for (; !Qn(i, r);) s++, o[o.length - 1] = s, i = yield ht(o);
      return s;
    });
    return _hn.apply(this, arguments);
  }
  var fn = Reflect.get(window, "GET_CLAPS_API") || "https://worker.getclaps.app";
  function mn(t, e, n) {
    var r = new URL(t, n);
    for (var [s, o] of Object.entries(e || {})) r.searchParams.append(s, o);
    return r.href;
  }
  var ae = new Map(),
    yn = !1,
    gn = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* (t, e, n) {
        var r = ae.get(e);
        return r || ae.set(e, r = ae.get(e) || _asyncToGenerator(function* () {
          var a;
          var o = mn("/views", ee({
              href: e
            }, n && !yn ? {
              referrer: n
            } : {}), fn),
            i = yield fetch(o, {
              method: "POST",
              body: null,
              mode: "cors",
              credentials: "include",
              headers: {
                accept: "application/json"
              }
            });
          if (yn = !0, i.ok && ((a = i.headers.get("Content-Type")) == null ? void 0 : a.includes("json"))) return yield i.json();
          if (i.status === 404) return {};
          throw i.status === 402 ? i : (ae.delete(e), Error());
        })()), (yield r)[t] || {
          claps: 0
        };
      });
      return function gn(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }(),
    bn = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* (t, e) {
        var n = new URL(e);
        n.search = "";
        var r = new E(),
          s = yield hn({
            url: n,
            claps: t,
            id: r
          });
        return {
          href: n.href,
          id: r,
          nonce: s
        };
      });
      return function bn(_x9, _x10) {
        return _ref5.apply(this, arguments);
      };
    }(),
    wn = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* (t, e, n, r, s) {
        var a;
        var o = mn("/claps", {
            href: e
          }, fn),
          i = yield fetch(o, {
            method: "POST",
            body: JSON.stringify({
              claps: t,
              id: r,
              nonce: s
            }),
            mode: "cors",
            credentials: "include",
            headers: {
              accept: "application/json",
              "content-type": "application/json;charset=UTF-8"
            }
          });
        if (i.ok && ((a = i.headers.get("Content-Type")) == null ? void 0 : a.includes("json"))) return ae.delete(n), i.clone().json();
        throw Error();
      });
      return function wn(_x11, _x12, _x13, _x14, _x15) {
        return _ref6.apply(this, arguments);
      };
    }(),
    vn = t => {
      ae.delete(t);
    };
  var J = new Map(),
    j,
    ft = class extends D {
      constructor() {
        super(...arguments);
        j.set(this, void 0);
      }
      get connectedCountKey() {}
      allDisconnectedCallback() {}
      connectedCallback() {
        var e;
        super.connectedCallback(), te(this, j, (e = this.connectedCountKey) != null ? e : this), J.set(g(this, j), 1 + (J.get(g(this, j)) || 0));
      }
      disconnectedCallback() {
        var n;
        super.disconnectedCallback();
        var e = ((J == null ? void 0 : J.get(g(this, j))) || 0) - 1;
        e > 0 ? J.set(g(this, j), e) : (J.delete(g(this, j)), (n = this.allDisconnectedCallback) == null || n.call(this));
      }
    };
  j = new WeakMap();
  var X;
  (function (t) {
    t.Top = "top", t.Bottom = "bottom";
  })(X || (X = {}));
  var B;
  (function (t) {
    t[t.PaymentRequired = 1] = "PaymentRequired", t[t.CryptoRequired = 2] = "CryptoRequired", t[t.Generic = 3] = "Generic";
  })(B || (B = {}));
  var tr = "https://getclaps.app",
    nr = 3e3,
    rr = 250,
    mt = new k("clap-button"),
    sr = t => [...new Array(t).keys()],
    or = t => t != null ? t.toLocaleString("en") : "",
    yt = function yt(t) {
      for (var _len7 = arguments.length, e = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        e[_key7 - 1] = arguments[_key7];
      }
      t.classList.remove(...e), t.offsetWidth, t.classList.add(...e);
    },
    ir = (t, e) => {
      var n;
      return function () {
        for (var _len8 = arguments.length, r = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          r[_key8] = arguments[_key8];
        }
        clearTimeout(n), n = setTimeout(() => t(...r), e);
      };
    },
    xn = t => {
      var e = new URL(t);
      return e.hash = "", e.search = "", e.href;
    },
    gt = class extends D {};
  gt = v([Re("clap-config")], gt);
  var $e = class extends D {
    constructor() {
      super(...arguments);
      this.at = 1;
    }
  };
  v([_({
    type: Number,
    reflect: !0
  })], $e.prototype, "at", 2), $e = v([Re("clap-text")], $e);
  var ce,
    ge,
    be,
    Z,
    we,
    ve,
    He,
    le,
    w = class extends ft {
      constructor() {
        var _this2;
        super(...arguments);
        _this2 = this;
        ce.set(this, void 0);
        this.textPlacement = X.Bottom;
        this.noWave = !1;
        this.messages = !1;
        this.uiClaps = 0;
        this.bufferedClaps = 0;
        this.loading = !1;
        this.clapped = !1;
        this.clicking = !1;
        this.ready = !1;
        this.error = null;
        this.isIntersecting = !1;
        ge.set(this, void 0);
        be.set(this, void 0);
        Z.set(this, "BroadcastChannel" in window ? new BroadcastChannel("clap-button") : null);
        we.set(this, Math.trunc(Math.random() * 1e9));
        ve.set(this, e => {
          e.button === 0 && (e.preventDefault(), this.clapped = !0, this.clicking = !0, this.bufferedClaps++, yt(this.styleRoot, "clap", "ticking"), g(this, He).call(this), this.uiClaps = this.bufferedClaps);
        });
        He.set(this, ir(/*#__PURE__*/_asyncToGenerator(function* () {
          var u;
          var e = _this2.bufferedClaps;
          _this2.bufferedClaps = 0, _this2.loading = !0;
          var {
              href: n,
              id: r,
              nonce: s
            } = yield bn(e, _this2.canonical),
            {
              claps: o
            } = yield wn(e, n, _this2.parentHref, r, s);
          _this2.loading = !1, _this2.clicking = !1, _this2.styleRoot.classList.remove("ticking"), yt(_this2.styleRoot, "clap");
          var i = {
            btnId: g(_this2, we),
            claps: e,
            totalClaps: o,
            href: n
          };
          g(_this2, Z) ? g(_this2, Z).postMessage(i) : g(_this2, le).call(_this2, {
            data: i
          }), setTimeout(() => {
            _this2.uiClaps = o;
          }, rr);
          var d = (u = yield mt.get(n)) != null ? u : {
              claps: 0
            },
            {
              claps: a
            } = d,
            l = _t(d, ["claps"]);
          yield mt.set(n, ee(ee({}, l), {
            claps: a + e
          }));
        }), nr));
        le.set(this, _ref8 => {
          var {
            data: {
              href: e,
              claps: n,
              btnId: r
            }
          } = _ref8;
          r !== g(this, we) && [e, xn(e)].includes(this.canonical) && (this.clapped = !0, this.uiClaps += n, yt(this.styleRoot, "clap"));
        });
      }
      get canonical() {
        var e = this.href || this.url || "",
          n = te(this, ge, g(this, ge) || this.ownerDocument.head.querySelector("link[rel=canonical]")),
          r = n != null ? new URL(n.href) : this.ownerDocument.location;
        return new URL(e, r.href).href;
      }
      get parentHref() {
        return xn(this.canonical);
      }
      get referrer() {
        var e = new URLSearchParams(this.ownerDocument.location.search);
        return e.get("referrer") || e.get("referer") || this.ownerDocument.referrer;
      }
      connectedCallback() {
        var _this3 = this;
        var n;
        if (super.connectedCallback(), !("crypto" in window && "subtle" in window.crypto && "digest" in window.crypto.subtle)) {
          this.error = 2;
          return;
        }
        (n = g(this, Z)) == null || n.addEventListener("message", g(this, le)), w.intersectionObserver.observe(this);
        var e = this.ownerDocument.querySelector("clap-config");
        te(this, ce, new MutationObserver(() => {
          var s;
          var r = Array.from((s = e == null ? void 0 : e.querySelectorAll("clap-text")) != null ? s : []);
          te(this, be, new Map(r == null ? void 0 : r.map(o => [o.at, o.innerHTML]).sort((_ref9, _ref10) => {
            var [o] = _ref9;
            var [i] = _ref10;
            return i - o;
          })));
        })), e && g(this, ce).observe(e, {
          subtree: !0,
          childList: !0,
          attributes: !0,
          characterData: !0
        }), _asyncToGenerator(function* () {
          _this3.loading = !0, _this3.clapped = (yield mt.get(_this3.canonical)) != null;
          try {
            var {
              claps: r
            } = yield gn(_this3.canonical, _this3.parentHref, _this3.referrer);
            _this3.loading = !1, _this3.ready = !0, _this3.uiClaps = r;
          } catch (r) {
            _this3.loading = !1, _this3.ready = !1, _this3.error = r.status === 402 ? 1 : 3;
          }
        })();
      }
      disconnectedCallback() {
        var e;
        super.disconnectedCallback(), w.intersectionObserver.unobserve(this), g(this, ce).disconnect(), (e = g(this, Z)) == null || e.removeEventListener("message", g(this, le));
      }
      get connectedCountKey() {
        return this.parentHref;
      }
      allDisconnectedCallback() {
        vn(this.parentHref);
      }
      render() {
        var l, u;
        var e = K(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\" id=\"hand-svg\">\n        <g class=\"flat\">\n          <path d=\"M57.0443547 6.86206897C57.6058817 6.46227795 57.7389459 5.67962382 57.3416215 5.11431557 56.9442971 4.54900731 56.1672933 4.41483804 55.6055588 4.81504702L52.4950525 7.030721C51.9335255 7.43051202 51.8004613 8.21316614 52.1977857 8.7784744 52.4404567 9.12371996 52.8251182 9.30825496 53.2153846 9.30825496 53.4640757 9.30825496 53.7152578 9.23343783 53.9338485 9.07753396L57.0443547 6.86206897zM48.8035059 6.1414838C48.94778 6.19623824 49.0959982 6.22215256 49.2415177 6.22215256 49.7455426 6.22215256 50.2198824 5.91201672 50.4075424 5.40898642L51.7485642 1.81818182C51.9906124 1.17011494 51.664906.447021944 51.0209664.203343783 50.3772345-.0405433647 49.6587706.287774295 49.4167224.93584117L48.0757006 4.52664577C47.83386 5.17471264 48.1595664 5.89780564 48.8035059 6.1414838zM58.5931726 11.6219436C58.5846615 11.6219436 58.5761504 11.6219436 58.5674317 11.6219436L54.7579749 11.6541275C54.0702341 11.6681296 53.5240687 12.1985371 53.5379772 12.8909091 53.551678 13.5745037 54.1065621 14.1297806 54.7828855 14.1297806 54.7913966 14.1297806 54.7999077 14.1297806 54.8086265 14.1297806L58.6180833 14.0643678C59.305824 14.0501567 59.8519894 13.4934169 59.838081 12.8010449 59.8243801 12.1174504 59.269496 11.6219436 58.5931726 11.6219436z\"/>\n          <path d=\"M37.1910045 6.68944619C37.7313574 6.14566353 38.4431784 5.8737722 39.155207 5.8737722 39.967916 5.8737722 40.7808327 6.22800418 41.3380002 6.93667712 42.2214969 8.06039707 42.0666359 9.69111808 41.0600392 10.7042842L39.777765 11.9949843C39.5801407 12.1276907 39.3877061 12.2695925 39.2075193 12.430303 39.0619998 11.5985371 38.7167801 10.7954023 38.1668781 10.0961338 37.4907623 9.23636364 36.588375 8.62424242 35.5772114 8.31410658L37.1910045 6.68944619zM28.5289586 3.66394984C29.0691039 3.12016719 29.7811325 2.84827586 30.4931611 2.84827586 31.3060777 2.84848485 32.1187868 3.20271682 32.6759543 3.91138976 33.559451 5.03510972 33.40459 6.66562173 32.3979933 7.67878788L17.6760235 22.3467085 17.6276554 20.6499478C17.6149925 19.014629 16.8595779 17.554441 15.6854573 16.5945664L28.5289586 3.66394984zM.624996757 36.9889537C.491717597 36.554099.508245877 35.7327064.906400646 35.2666667L3.45579518 32.2829676C3.45662553 32.2819923 4.33763118 25.8376176 6.09881213 12.9498433 6.09881213 11.4271682 7.33624726 10.1814002 8.84873717 10.1814002 10.3612271 10.1814002 11.5988698 11.4271682 11.5988698 12.9498433L11.6704878 15.4649948C9.18191673 15.8089864 7.24428555 17.9170324 7.14921001 20.492581L4.62804751 38.9475444 3.8946373 39.8060606C3.04504924 39.4926018 2.3776139 39.1458968 1.89233128 38.7659456 1.16440735 38.1960189.758275917 37.4238085.624996757 36.9889537z\"/>\n          <path d=\"M49.6070811,36.8942529 L42.4182909,44.1316614 C36.2784454,50.3128527 29.8604313,55.2743992 24.2225349,56.5113898 C24.0512744,56.5492163 23.8901857,56.6217346 23.7511014,56.7293626 L20.5013032,59.2417973 C20.2908084,59.4045977 20.1673015,59.6181154 19.5026647,59.6181154 C18.8380279,59.6181154 13.0160695,55.8303982 10.3595306,53.2846814 C7.96626306,50.9912532 3.77432047,43.9549368 4.44453927,43.0079415 L6.99372621,40.0244514 C6.99469496,40.0233368 7.87570061,33.578962 9.63674317,20.6913271 C9.63674317,19.168652 10.8743859,17.922675 12.3868758,17.922675 C13.8993657,17.922675 15.1368008,19.168652 15.1368008,20.6913271 L15.2667512,25.2522466 C15.2883404,26.0100313 15.907577,26.5034483 16.5519317,26.5034483 C16.8662207,26.5034483 17.1867374,26.3857889 17.4464306,26.1245559 L32.0670972,11.4054336 C32.6074501,10.861442 33.3190635,10.5897597 34.0312997,10.5897597 C34.8440088,10.5897597 35.6569254,10.9439916 36.214093,11.6526646 C37.0975897,12.7763845 36.942521,14.4071055 35.9359243,15.4202717 L25.8641449,25.5598746 C25.3412294,26.0865204 25.3412294,26.9398119 25.8641449,27.4660397 C26.1288202,27.7324974 26.4757006,27.8658307 26.822581,27.8658307 C27.1694614,27.8658307 27.5165494,27.7324974 27.7810172,27.4660397 L40.7291431,14.43093 C41.2692884,13.8869383 41.9811094,13.615256 42.6933456,13.615256 C43.5060547,13.615465 44.3189713,13.969697 44.8761389,14.6783699 C45.7596356,15.8018809 45.6045669,17.4326019 44.5979702,18.445768 L31.7106677,31.4198537 C31.1806943,31.953605 31.1806943,32.8183908 31.7106677,33.3521421 C31.9718141,33.615047 32.31392,33.7464995 32.656441,33.7464995 C32.9985469,33.7464995 33.3408603,33.615047 33.6020067,33.3521421 L43.7346096,23.1515152 C44.2749625,22.6075235 44.9867835,22.3358412 45.6988121,22.3358412 C46.5115212,22.3358412 47.3244378,22.6900731 47.8816054,23.3989551 C48.7651021,24.522466 48.6100334,26.153187 47.6034367,27.1663532 L37.5667397,37.2708464 C37.0245185,37.8165099 37.0245185,38.7017764 37.5667397,39.2474399 C37.8334909,39.5161964 38.161896,39.6422153 38.4900934,39.6422153 C38.8184984,39.6422153 39.1469035,39.5161964 39.3972552,39.2639498 L45.6195133,32.999791 C46.1802099,32.4353187 46.93085,32.1368861 47.678999,32.1368861 C48.2741552,32.1368861 48.8676508,32.3258098 49.361919,32.7197492 C50.682182,33.7717868 50.7639719,35.7297806 49.6070811,36.8942529 Z\"/>\n        </g>\n        <g class=\"outline\">\n          <path d=\"M57.1428763 6.63333333C57.6856856 6.24686869 57.8143144 5.49030303 57.4302341 4.94383838 57.0461538 4.39737374 56.2950502 4.26767677 55.7520401 4.65454545L52.7452174 6.79636364C52.202408 7.18282828 52.0737793 7.93939394 52.4578595 8.48585859 52.6924415 8.81959596 53.0642809 8.9979798 53.4415385 8.9979798 53.6819398 8.9979798 53.9247492 8.92565657 54.1360535 8.77494949L57.1428763 6.63333333zM49.1767224 5.93676768C49.3161873 5.98969697 49.4594649 6.01474747 49.6001338 6.01474747 50.0873579 6.01474747 50.5458863 5.71494949 50.727291 5.22868687L52.023612 1.75757576C52.257592 1.13111111 51.9427425.432121212 51.3202676.196565657 50.6979933-.0391919192 50.0034783.278181818 49.7694983.904646465L48.4731773 4.37575758C48.239398 5.00222222 48.5542475 5.70121212 49.1767224 5.93676768zM58.6400669 11.2345455C58.6318395 11.2345455 58.623612 11.2345455 58.6151839 11.2345455L54.932709 11.2656566C54.267893 11.2791919 53.7399331 11.7919192 53.7533779 12.4612121 53.7666221 13.1220202 54.30301 13.6587879 54.9567893 13.6587879 54.9650167 13.6587879 54.9732441 13.6587879 54.9816722 13.6587879L58.6641472 13.5955556C59.3289632 13.5818182 59.8569231 13.0436364 59.8434783 12.3743434 59.8302341 11.7135354 59.2938462 11.2345455 58.6400669 11.2345455zM51.2107023 29.7280808C50.5940468 29.2365657 49.8640134 28.9020202 49.0922408 28.7448485 49.1432107 28.6519192 49.1907692 28.5573737 49.2357191 28.4614141L49.7189298 27.9749495C51.5799331 26.1012121 51.7753846 23.1519192 50.1732441 21.1141414 49.4169231 20.1523232 48.3670234 19.5131313 47.2009365 19.2745455 47.284214 19.120202 47.3580602 18.9624242 47.4250836 18.8022222 48.6925084 16.9539394 48.6718395 14.469899 47.2681605 12.6844444 46.5116388 11.7220202 45.4613378 11.0808081 44.2946488 10.8426263 45.2578595 9.05959596 45.1348495 6.83737374 43.8481605 5.20121212 42.8753177 3.96383838 41.4182609 3.25393939 39.8502341 3.25393939 38.5946488 3.25393939 37.4101003 3.70565657 36.480602 4.53272727 36.3399331 3.72888889 36.0064214 2.95252525 35.4748495 2.27636364 34.501806 1.0389899 33.0447492.329292929 31.4767224.329090909 30.1141806.329090909 28.8351171.861414141 27.8753177 1.82767677L15.6666221 14.1185859 15.6200669 12.4781818C15.5985953 9.68424242 13.3340468 7.41777778 10.5537793 7.41777778 7.8238796 7.41777778 5.59143813 9.60262626 5.49110368 12.3264646L3.05377926 30.1660606 1.05050167 32.510303C-.150100334 33.9157576.751318148 36.4103164 1.05050167 37.002855 1.3496852 37.5953936 1.66593319 37.9666982 2.51271962 38.8651283 2.8050341 39.1752704 3.3712736 39.6680391 4.21143813 40.3434343 3.2935786 41.7335354 4.72327715 47.298456 9.51045561 52.4226263 15.4436869 58.7735254 20.1888963 59.9262626 21.1316388 59.9262626 21.9056187 59.9262626 22.6703679 59.6646465 23.2846154 59.189899L26.2031438 56.9337374C29.0107023 56.2660606 32.1060201 54.7492929 35.4086288 52.4226263 38.2924415 50.3907071 41.4210702 47.6832323 44.7070234 44.3749495L51.656388 37.3787879C52.681204 36.3470707 53.220602 34.9165657 53.1363211 33.4541414 53.0520401 31.9941414 52.350301 30.6361616 51.2107023 29.7280808zM37.9513043 6.46646465C38.4736455 5.94080808 39.1617391 5.6779798 39.8500334 5.6779798 40.6356522 5.6779798 41.4214716 6.02040404 41.9600669 6.70545455 42.8141137 7.79171717 42.6644147 9.36808081 41.6913712 10.3474747L40.4518395 11.5951515C40.2608027 11.7234343 40.0747826 11.8606061 39.900602 12.0159596 39.7599331 11.2119192 39.4262207 10.4355556 38.8946488 9.75959596 38.2410702 8.92848485 37.3687625 8.33676768 36.3913043 8.0369697L37.9513043 6.46646465zM29.5779933 3.54181818C30.1001338 3.01616162 30.7884281 2.75333333 31.4767224 2.75333333 32.2625418 2.75353535 33.0481605 3.0959596 33.5867559 3.7810101 34.4408027 4.86727273 34.2911037 6.44343434 33.3180602 7.42282828L19.0868227 21.6018182 19.0400669 19.9616162C19.0278261 18.3808081 18.297592 16.9692929 17.1626087 16.0414141L29.5779933 3.54181818zM2.60416353 35.7559886C2.47532701 35.335629 2.49130435 34.5416162 2.87618729 34.0911111L5.34060201 31.2068687C5.34140468 31.2059259 6.19304348 24.9763636 7.89551839 12.5181818 7.89551839 11.0462626 9.09170569 9.8420202 10.5537793 9.8420202 12.0158528 9.8420202 13.2122408 11.0462626 13.2122408 12.5181818L13.2814716 14.9494949C10.8758528 15.2820202 9.00280936 17.319798 8.91090301 19.8094949L6.47377926 37.6492929 5.76481605 38.4791919C4.9435476 38.1761817 4.2983601 37.8410335 3.82925357 37.4737474 3.12559377 36.9228183 2.73300005 36.1763482 2.60416353 35.7559886zM49.9535117 35.6644444L43.0043478 42.6606061C37.0691639 48.6357576 30.8650836 53.4319192 25.4151171 54.6276768 25.2495652 54.6642424 25.0938462 54.7343434 24.959398 54.8383838L21.8179264 57.2670707C21.6144482 57.4244444 21.4950582 57.6308449 20.8525759 57.6308449 20.2100936 57.6308449 14.5822005 53.9693849 12.0142129 51.5085254 9.70072096 49.2915447 5.64850979 42.4897722 6.29638796 41.5743434L8.76060201 38.690303C8.76153846 38.6892256 9.61317726 32.4596633 11.3155184 20.0016162 11.3155184 18.529697 12.5119064 17.3252525 13.9739799 17.3252525 15.4360535 17.3252525 16.6322408 18.529697 16.6322408 20.0016162L16.7578595 24.4105051C16.7787291 25.1430303 17.3773244 25.62 18.0002007 25.62 18.3040134 25.62 18.6138462 25.5062626 18.8648829 25.2537374L32.998194 11.0252525C33.5205351 10.4993939 34.2084281 10.2367677 34.8969231 10.2367677 35.6825418 10.2367677 36.4683612 10.5791919 37.0069565 11.2642424 37.8610033 12.3505051 37.7111037 13.9268687 36.7380602 14.9062626L27.0020067 24.7078788C26.4965217 25.2169697 26.4965217 26.0418182 27.0020067 26.5505051 27.2578595 26.8080808 27.5931773 26.9369697 27.928495 26.9369697 28.2638127 26.9369697 28.5993311 26.8080808 28.8549833 26.5505051L41.371505 13.949899C41.8936455 13.4240404 42.5817391 13.1614141 43.2702341 13.1614141 44.0558528 13.1616162 44.8416722 13.5040404 45.3802676 14.1890909 46.2343144 15.2751515 46.0844147 16.8515152 45.1113712 17.8309091L32.6536455 30.3725253C32.1413378 30.8884848 32.1413378 31.7244444 32.6536455 32.240404 32.906087 32.4945455 33.2367893 32.6216162 33.567893 32.6216162 33.8985953 32.6216162 34.2294983 32.4945455 34.4819398 32.240404L44.2767893 22.379798C44.7991304 21.8539394 45.4872241 21.5913131 46.1755184 21.5913131 46.9611371 21.5913131 47.7469565 21.9337374 48.2855518 22.6189899 49.1395987 23.7050505 48.989699 25.2814141 48.0166555 26.2608081L38.3145151 36.0284848C37.7903679 36.5559596 37.7903679 37.4117172 38.3145151 37.9391919 38.5723746 38.1989899 38.8898328 38.3208081 39.2070903 38.3208081 39.5245485 38.3208081 39.8420067 38.1989899 40.0840134 37.9551515L46.0988629 31.899798C46.6408696 31.3541414 47.3664883 31.0656566 48.089699 31.0656566 48.6650167 31.0656566 49.2387291 31.2482828 49.7165217 31.6290909 50.9927759 32.6460606 51.0718395 34.5387879 49.9535117 35.6644444z\"/>\n        </g>\n      </svg>"]))),
          n = K(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" id=\"countdown-svg\">\n      <g class=\"countdown\">\n        <circle cx=\"50\" cy=\"50\" r=\"49\"/>\n      </g>\n    </svg>\n    "]))),
          r = this.bufferedClaps,
          s = 5 + r,
          i = 300 * (1 - Math.E ** (-r / 15)),
          a = K(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-10 -10 20 20\">\n        <g class=\"sparkle\">\n          ", "\n        </g>\n      </svg>"])), rn(sr(s), d => d, d => K(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<g style=", ">\n            <circle style=", " cx=\"0\" cy=\"0\" r=\"1\"/>\n          </g>"])), De({
            transform: "rotate(".concat(Math.floor(360 / s * d), "deg) translateX(10px)")
          }), De({
            animationDelay: "".concat(Math.floor(Math.random() * i), "ms")
          }))));
        return O(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      <div \n        class=", "\n        style=", "\n      >\n        <div class=\"shockwave\"></div>\n        <div class=", ">\n          <div class=\"count\">\n            ", "", "\n            ", "\n            ", "\n            ", "\n          </div>\n        </div>\n        <div class=", ">\n          ", "\n        </div>\n        ", "\n        ", "\n        ", "\n        <button\n          ?disabled=", "\n          @mousedown=", "\n          @touchstart=", "\n        ></button>\n      </div>\n      "])), Oe({
          "style-root": !0,
          loading: this.loading,
          clapped: this.clapped,
          "no-shockwave": this.noWave || !this.ready,
          "no-animation": !this.isIntersecting
        }), De(ee({}, this.error != null ? {
          "--clap-button-color": "indianred"
        } : {})), Oe({
          "count-container": !0,
          "container-top": this.textPlacement === X.Top,
          "container-bottom": this.textPlacement === X.Bottom
        }), this.clicking ? "+" : "", this.ready ? or(this.uiClaps) : "", this.error === 1 ? O(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<a class=\"error\" href=\"", "\">Payment required</a>"])), tr) : null, this.error === 2 ? O(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["<span class=\"error\">Crypto required</span>"]))) : null, this.error === 3 ? O(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["<span class=\"error\">Error</span>"]))) : null, Oe({
          "count-container": !0,
          "container-top": this.textPlacement === X.Bottom,
          "container-bottom": this.textPlacement === X.Top
        }), this.messages ? O(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["<div style=\"font-size:smaller\">\n            ", "\n          </div>"])), this.clicking ? on((u = (l = [...g(this, be)].find(_ref12 => {
          var [d] = _ref12;
          return this.uiClaps >= d;
        })) == null ? void 0 : l[1]) != null ? u : "") : "") : null, e, a, n, this.loading || !this.ready, this.loading || !this.ready ? null : g(this, ve), this.loading || !this.ready ? null : g(this, ve));
      }
    };
  ce = new WeakMap(), ge = new WeakMap(), be = new WeakMap(), Z = new WeakMap(), we = new WeakMap(), ve = new WeakMap(), He = new WeakMap(), le = new WeakMap(), w.styles = an, w.intersectionObserver = new IntersectionObserver(e => {
    e.forEach(n => n.target.isIntersecting = n.isIntersecting);
  }), v([Ft(".style-root")], w.prototype, "styleRoot", 2), v([_({
    type: String,
    reflect: !0,
    attribute: "text-placement"
  })], w.prototype, "textPlacement", 2), v([_({
    type: Boolean,
    reflect: !0
  })], w.prototype, "noWave", 2), v([_({
    type: Boolean,
    reflect: !0
  })], w.prototype, "messages", 2), v([_({
    type: String,
    reflect: !1
  })], w.prototype, "href", 2), v([_({
    type: String,
    reflect: !1
  })], w.prototype, "url", 2), v([_()], w.prototype, "uiClaps", 2), v([_()], w.prototype, "bufferedClaps", 2), v([_()], w.prototype, "loading", 2), v([_()], w.prototype, "clapped", 2), v([_()], w.prototype, "clicking", 2), v([_()], w.prototype, "ready", 2), v([_()], w.prototype, "error", 2), v([_()], w.prototype, "isIntersecting", 2), w = v([Re("clap-button")], w);
})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/***/ }),

/***/ "./node_modules/broadcastchannel-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/broadcastchannel-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global) {
  var channels = [];
  function BroadcastChannel(channel) {
    var $this = this;
    channel = String(channel);
    var id = '$BroadcastChannel$' + channel + '$';
    channels[id] = channels[id] || [];
    channels[id].push(this);
    this._name = channel;
    this._id = id;
    this._closed = false;
    this._mc = new MessageChannel();
    this._mc.port1.start();
    this._mc.port2.start();
    global.addEventListener('storage', function (e) {
      if (e.storageArea !== global.localStorage) return;
      if (e.newValue == null || e.newValue === '') return;
      if (e.key.substring(0, id.length) !== id) return;
      var data = JSON.parse(e.newValue);
      $this._mc.port2.postMessage(data);
    });
  }
  BroadcastChannel.prototype = {
    // BroadcastChannel API
    get name() {
      return this._name;
    },
    postMessage: function postMessage(message) {
      var $this = this;
      if (this._closed) {
        var e = new Error();
        e.name = 'InvalidStateError';
        throw e;
      }
      var value = JSON.stringify(message);

      // Broadcast to other contexts via storage events...
      var key = this._id + String(Date.now()) + '$' + String(Math.random());
      global.localStorage.setItem(key, value);
      setTimeout(function () {
        global.localStorage.removeItem(key);
      }, 500);

      // Broadcast to current context via ports
      channels[this._id].forEach(function (bc) {
        if (bc === $this) return;
        bc._mc.port2.postMessage(JSON.parse(value));
      });
    },
    close: function close() {
      if (this._closed) return;
      this._closed = true;
      this._mc.port1.close();
      this._mc.port2.close();
      var index = channels[this._id].indexOf(this);
      channels[this._id].splice(index, 1);
    },
    // EventTarget API
    get onmessage() {
      return this._mc.port1.onmessage;
    },
    set onmessage(value) {
      this._mc.port1.onmessage = value;
    },
    addEventListener: function addEventListener(/*type, listener , useCapture*/
    ) {
      return this._mc.port1.addEventListener.apply(this._mc.port1, arguments);
    },
    removeEventListener: function removeEventListener(/*type, listener , useCapture*/
    ) {
      return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments);
    },
    dispatchEvent: function dispatchEvent(/*event*/
    ) {
      return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments);
    }
  };
  global.BroadcastChannel = global.BroadcastChannel || BroadcastChannel;
})(self);

/***/ })

}]);
//# sourceMappingURL=vendors~clap-button-hydejack-9.2.1.js.map