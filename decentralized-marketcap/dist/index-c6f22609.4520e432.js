// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/use-wallet/dist/index-c6f22609.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.AuthereumSigner = exports.AuthereumProvider = exports.Authereum = exports.default = void 0;

var _indexD3bd = require("./index-d3bd4678.js");

require("react");

require("@aragon/provided-connector");

require("events");

require("buffer");

var _crypto_commonjsExternal1a = require("./_crypto_commonjs-external-1a228943.js");

var _subscriptionManager0493518a = require("./subscriptionManager-0493518a.js");

require("stream");

require("string_decoder");

var _util_commonjsExternal6c = require("./_util_commonjs-external-6c254708.js");

require("crypto");

require("assert");

require("util");

require("./index-77f376c4.js");

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var E = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.DATA_CLONE_ERROR = e.MESSAGE = e.REJECTED = e.FULFILLED = e.REPLY = e.CALL = e.HANDSHAKE_REPLY = e.HANDSHAKE = void 0;
  e.HANDSHAKE = "handshake";
  e.HANDSHAKE_REPLY = "handshake-reply";
  e.CALL = "call";
  e.REPLY = "reply";
  e.FULFILLED = "fulfilled";
  e.REJECTED = "rejected";
  e.MESSAGE = "message";
  e.DATA_CLONE_ERROR = "DataCloneError";
});
(0, _indexD3bd.e)(E);
E.DATA_CLONE_ERROR, E.MESSAGE, E.REJECTED, E.FULFILLED, E.REPLY, E.CALL, E.HANDSHAKE_REPLY, E.HANDSHAKE;
var k = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ERR_NO_IFRAME_SRC = e.ERR_NOT_IN_IFRAME = e.ERR_CONNECTION_TIMEOUT = e.ERR_CONNECTION_DESTROYED = void 0;
  e.ERR_CONNECTION_DESTROYED = "ConnectionDestroyed";
  e.ERR_CONNECTION_TIMEOUT = "ConnectionTimeout";
  e.ERR_NOT_IN_IFRAME = "NotInIframe";
  e.ERR_NO_IFRAME_SRC = "NoIframeSrc";
});
(0, _indexD3bd.e)(k);
k.ERR_NO_IFRAME_SRC, k.ERR_NOT_IN_IFRAME, k.ERR_CONNECTION_TIMEOUT, k.ERR_CONNECTION_DESTROYED;
var A = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  e.default = () => {
    const t = [];
    let e = !1;
    return {
      destroy() {
        e = !0, t.forEach(t => {
          t();
        });
      },

      onDestroy(r) {
        e ? r() : t.push(r);
      }

    };
  }, t.exports = e.default;
});
(0, _indexD3bd.e)(A);
var x = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  const r = {
    "http:": "80",
    "https:": "443"
  },
        n = /^(https?:)?\/\/([^/:]+)?(:(\d+))?/,
        i = ["file:", "data:"];
  e.default = t => {
    if (t && i.find(e => t.startsWith(e))) return "null";
    const e = document.location,
          o = n.exec(t);
    let s, a, u;
    return o ? (s = o[1] ? o[1] : e.protocol, a = o[2], u = o[4]) : (s = e.protocol, a = e.hostname, u = e.port), `${s}//${a}${u && u !== r[s] ? `:${u}` : ""}`;
  }, t.exports = e.default;
});
(0, _indexD3bd.e)(x);
var T = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  e.default = t => function () {
    if (t) {
      for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];

      console.log("[Penpal]", ...r);
    }
  }, t.exports = e.default;
});
(0, _indexD3bd.e)(T);
var N = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.deserializeError = e.serializeError = void 0;

  e.serializeError = t => ({
    name: t.name,
    message: t.message,
    stack: t.stack
  });

  e.deserializeError = t => {
    const e = new Error();
    return Object.keys(t).forEach(r => e[r] = t[r]), e;
  };
});
(0, _indexD3bd.e)(N);
N.deserializeError, N.serializeError;
var P = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  e.default = (t, e, r) => {
    const n = t.localName,
          i = t.local,
          o = t.remote,
          s = t.originForSending,
          a = t.originForReceiving;
    let u = !1;
    r(`${n}: Connecting call receiver`);

    const h = t => {
      if (t.source !== o || t.data.penpal !== E.CALL) return;
      if (t.origin !== a) return void r(`${n} received message from origin ${t.origin} which did not match expected origin ${a}`);
      const i = t.data,
            h = i.methodName,
            l = i.args,
            f = i.id;
      r(`${n}: Received ${h}() call`);

      const c = t => e => {
        if (r(`${n}: Sending ${h}() reply`), u) return void r(`${n}: Unable to send ${h}() reply due to destroyed connection`);
        const i = {
          penpal: E.REPLY,
          id: f,
          resolution: t,
          returnValue: e
        };
        t === E.REJECTED && e instanceof Error && (i.returnValue = (0, N.serializeError)(e), i.returnValueIsError = !0);

        try {
          o.postMessage(i, s);
        } catch (t) {
          throw t.name === E.DATA_CLONE_ERROR && o.postMessage({
            penpal: E.REPLY,
            id: f,
            resolution: E.REJECTED,
            returnValue: (0, N.serializeError)(t),
            returnValueIsError: !0
          }, s), t;
        }
      };

      new Promise(t => t(e[h].apply(e, l))).then(c(E.FULFILLED), c(E.REJECTED));
    };

    return i.addEventListener(E.MESSAGE, h), () => {
      u = !0, i.removeEventListener(E.MESSAGE, h);
    };
  }, t.exports = e.default;
});
(0, _indexD3bd.e)(P);
var R = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  let r = 0;
  e.default = () => ++r, t.exports = e.default;
});
(0, _indexD3bd.e)(R);
var O = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r,
      n = (r = R) && r.__esModule ? r : {
    default: r
  };
  e.default = (t, e, r, i, o) => {
    const s = e.localName,
          a = e.local,
          u = e.remote,
          h = e.originForSending,
          l = e.originForReceiving;
    let f = !1;
    o(`${s}: Connecting call sender`);
    return r.reduce((t, e) => (t[e] = (t => function () {
      for (var e = arguments.length, r = new Array(e), c = 0; c < e; c++) r[c] = arguments[c];

      let d;
      o(`${s}: Sending ${t}() call`);

      try {
        u.closed && (d = !0);
      } catch (t) {
        d = !0;
      }

      if (d && i(), f) {
        const e = new Error(`Unable to send ${t}() call due ` + "to destroyed connection");
        throw e.code = k.ERR_CONNECTION_DESTROYED, e;
      }

      return new Promise((e, i) => {
        const f = (0, n.default)(),
              c = r => {
          if (r.source !== u || r.data.penpal !== E.REPLY || r.data.id !== f) return;
          if (r.origin !== l) return void o(`${s} received message from origin ${r.origin} which did not match expected origin ${l}`);
          o(`${s}: Received ${t}() reply`), a.removeEventListener(E.MESSAGE, c);
          let n = r.data.returnValue;
          r.data.returnValueIsError && (n = (0, N.deserializeError)(n)), (r.data.resolution === E.FULFILLED ? e : i)(n);
        };

        a.addEventListener(E.MESSAGE, c), u.postMessage({
          penpal: E.CALL,
          id: f,
          methodName: t,
          args: r
        }, h);
      });
    })(e), t), t), () => {
      f = !0;
    };
  }, t.exports = e.default;
});
(0, _indexD3bd.e)(O);
var I = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = a(A),
      n = a(x),
      i = a(T),
      o = a(P),
      s = a(O);

  function a(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }

  e.default = t => {
    let e = t.iframe,
        a = t.methods,
        u = void 0 === a ? {} : a,
        h = t.childOrigin,
        l = t.timeout,
        f = t.debug;
    const c = (0, i.default)(f),
          d = window,
          p = (0, r.default)(),
          m = p.destroy,
          v = p.onDestroy;

    if (!h) {
      if (!e.src && !e.srcdoc) {
        const t = new Error("Iframe must have src or srcdoc property defined.");
        throw t.code = k.ERR_NO_IFRAME_SRC, t;
      }

      h = (0, n.default)(e.src);
    }

    const g = "null" === h ? "*" : h;
    return {
      promise: new Promise((t, r) => {
        let n;
        void 0 !== l && (n = setTimeout(() => {
          const t = new Error(`Connection to child timed out after ${l}ms`);
          t.code = k.ERR_CONNECTION_TIMEOUT, r(t), m();
        }, l));
        const i = {};
        let a, f;

        const p = r => {
          const l = e.contentWindow;
          if (r.source !== l || r.data.penpal !== E.HANDSHAKE) return;
          if (r.origin !== h) return void c(`Parent received handshake from origin ${r.origin} which did not match expected origin ${h}`);
          c("Parent: Received handshake, sending reply"), r.source.postMessage({
            penpal: E.HANDSHAKE_REPLY,
            methodNames: Object.keys(u)
          }, g);
          const p = {
            localName: "Parent",
            local: d,
            remote: l,
            originForSending: g,
            originForReceiving: h
          };
          f && f(), f = (0, o.default)(p, u, c), v(f), a && a.forEach(t => {
            delete i[t];
          }), a = r.data.methodNames;
          const y = (0, s.default)(i, p, a, m, c);
          v(y), clearTimeout(n), t(i);
        };

        d.addEventListener(E.MESSAGE, p), c("Parent: Awaiting handshake");
        var y = setInterval(() => {
          document.contains(e) || (clearInterval(y), m());
        }, 6e4);
        v(() => {
          d.removeEventListener(E.MESSAGE, p), clearInterval(y);
          const t = new Error("Connection destroyed");
          t.code = k.ERR_CONNECTION_DESTROYED, r(t);
        });
      }),
      destroy: m
    };
  }, t.exports = e.default;
});
(0, _indexD3bd.e)(I);
var C = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = s(A),
      n = s(P),
      i = s(O),
      o = s(T);

  function s(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }

  e.default = function () {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.parentOrigin,
        s = void 0 === e ? "*" : e,
        a = t.methods,
        u = void 0 === a ? {} : a,
        h = t.timeout,
        l = t.debug;
    const f = (0, o.default)(l);

    if (window === window.top) {
      const t = new Error("connectToParent() must be called within an iframe");
      throw t.code = k.ERR_NOT_IN_IFRAME, t;
    }

    const c = (0, r.default)(),
          d = c.destroy,
          p = c.onDestroy,
          m = window,
          v = m.parent,
          g = new Promise((t, e) => {
      let r;
      void 0 !== h && (r = setTimeout(() => {
        const t = new Error(`Connection to parent timed out after ${h}ms`);
        t.code = k.ERR_CONNECTION_TIMEOUT, e(t), d();
      }, h));

      const o = e => {
        try {
          clearTimeout();
        } catch (t) {
          return;
        }

        if (e.source !== v || e.data.penpal !== E.HANDSHAKE_REPLY) return;
        if ("*" !== s && s !== e.origin) return void f(`Child received handshake reply from origin ${e.origin} which did not match expected origin ${s}`);
        f("Child: Received handshake reply"), m.removeEventListener(E.MESSAGE, o);
        const a = {
          localName: "Child",
          local: m,
          remote: v,
          originForSending: "null" === e.origin ? "*" : e.origin,
          originForReceiving: e.origin
        },
              h = {},
              l = (0, n.default)(a, u, f);
        p(l);
        const c = (0, i.default)(h, a, e.data.methodNames, d, f);
        p(c), clearTimeout(r), t(h);
      };

      m.addEventListener(E.MESSAGE, o), p(() => {
        m.removeEventListener(E.MESSAGE, o);
        const t = new Error("Connection destroyed");
        t.code = k.ERR_CONNECTION_DESTROYED, e(t);
      }), f("Child: Sending handshake"), v.postMessage({
        penpal: E.HANDSHAKE,
        methodNames: Object.keys(u)
      }, s);
    });
    return {
      promise: g,
      destroy: d
    };
  }, t.exports = e.default;
});
(0, _indexD3bd.e)(C);
var D = (0, _indexD3bd.e)((0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0;
  var r = i(I),
      n = i(C);

  function i(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }

  var o = {
    ERR_CONNECTION_DESTROYED: k.ERR_CONNECTION_DESTROYED,
    ERR_CONNECTION_TIMEOUT: k.ERR_CONNECTION_TIMEOUT,
    ERR_NOT_IN_IFRAME: k.ERR_NOT_IN_IFRAME,
    ERR_NO_IFRAME_SRC: k.ERR_NO_IFRAME_SRC,
    connectToChild: r.default,
    connectToParent: n.default
  };
  e.default = o, t.exports = e.default;
})),
    L = (0, _indexD3bd.d)(function (t) {
  var e = Object.prototype.hasOwnProperty,
      r = "~";

  function n() {}

  function i(t, e, r) {
    this.fn = t, this.context = e, this.once = r || !1;
  }

  function o(t, e, n, o, s) {
    if ("function" != typeof n) throw new TypeError("The listener must be a function");
    var a = new i(n, o || t, s),
        u = r ? r + e : e;
    return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], a] : t._events[u].push(a) : (t._events[u] = a, t._eventsCount++), t;
  }

  function s(t, e) {
    0 == --t._eventsCount ? t._events = new n() : delete t._events[e];
  }

  function a() {
    this._events = new n(), this._eventsCount = 0;
  }

  Object.create && (n.prototype = Object.create(null), new n().__proto__ || (r = !1)), a.prototype.eventNames = function () {
    var t,
        n,
        i = [];
    if (0 === this._eventsCount) return i;

    for (n in t = this._events) e.call(t, n) && i.push(r ? n.slice(1) : n);

    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i;
  }, a.prototype.listeners = function (t) {
    var e = r ? r + t : t,
        n = this._events[e];
    if (!n) return [];
    if (n.fn) return [n.fn];

    for (var i = 0, o = n.length, s = new Array(o); i < o; i++) s[i] = n[i].fn;

    return s;
  }, a.prototype.listenerCount = function (t) {
    var e = r ? r + t : t,
        n = this._events[e];
    return n ? n.fn ? 1 : n.length : 0;
  }, a.prototype.emit = function (t, e, n, i, o, s) {
    var a = r ? r + t : t;
    if (!this._events[a]) return !1;
    var u,
        h,
        l = this._events[a],
        f = arguments.length;

    if (l.fn) {
      switch (l.once && this.removeListener(t, l.fn, void 0, !0), f) {
        case 1:
          return l.fn.call(l.context), !0;

        case 2:
          return l.fn.call(l.context, e), !0;

        case 3:
          return l.fn.call(l.context, e, n), !0;

        case 4:
          return l.fn.call(l.context, e, n, i), !0;

        case 5:
          return l.fn.call(l.context, e, n, i, o), !0;

        case 6:
          return l.fn.call(l.context, e, n, i, o, s), !0;
      }

      for (h = 1, u = new Array(f - 1); h < f; h++) u[h - 1] = arguments[h];

      l.fn.apply(l.context, u);
    } else {
      var c,
          d = l.length;

      for (h = 0; h < d; h++) switch (l[h].once && this.removeListener(t, l[h].fn, void 0, !0), f) {
        case 1:
          l[h].fn.call(l[h].context);
          break;

        case 2:
          l[h].fn.call(l[h].context, e);
          break;

        case 3:
          l[h].fn.call(l[h].context, e, n);
          break;

        case 4:
          l[h].fn.call(l[h].context, e, n, i);
          break;

        default:
          if (!u) for (c = 1, u = new Array(f - 1); c < f; c++) u[c - 1] = arguments[c];
          l[h].fn.apply(l[h].context, u);
      }
    }

    return !0;
  }, a.prototype.on = function (t, e, r) {
    return o(this, t, e, r, !1);
  }, a.prototype.once = function (t, e, r) {
    return o(this, t, e, r, !0);
  }, a.prototype.removeListener = function (t, e, n, i) {
    var o = r ? r + t : t;
    if (!this._events[o]) return this;
    if (!e) return s(this, o), this;
    var a = this._events[o];
    if (a.fn) a.fn !== e || i && !a.once || n && a.context !== n || s(this, o);else {
      for (var u = 0, h = [], l = a.length; u < l; u++) (a[u].fn !== e || i && !a[u].once || n && a[u].context !== n) && h.push(a[u]);

      h.length ? this._events[o] = 1 === h.length ? h[0] : h : s(this, o);
    }
    return this;
  }, a.prototype.removeAllListeners = function (t) {
    var e;
    return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a;
}),
    U = (0, _indexD3bd.d)(function (t, e) {
  t.exports = function () {
    var e, r;

    function i() {
      return e.apply(null, arguments);
    }

    function o(t) {
      return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t);
    }

    function s(t) {
      return null != t && "[object Object]" === Object.prototype.toString.call(t);
    }

    function a(t) {
      return void 0 === t;
    }

    function u(t) {
      return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t);
    }

    function h(t) {
      return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
    }

    function l(t, e) {
      var r,
          n = [];

      for (r = 0; r < t.length; ++r) n.push(e(t[r], r));

      return n;
    }

    function f(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }

    function c(t, e) {
      for (var r in e) f(e, r) && (t[r] = e[r]);

      return f(e, "toString") && (t.toString = e.toString), f(e, "valueOf") && (t.valueOf = e.valueOf), t;
    }

    function d(t, e, r, n) {
      return Ee(t, e, r, n, !0).utc();
    }

    function p(t) {
      return null == t._pf && (t._pf = {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
      }), t._pf;
    }

    function m(t) {
      if (null == t._isValid) {
        var e = p(t),
            n = r.call(e.parsedDateParts, function (t) {
          return null != t;
        }),
            i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
        if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
        t._isValid = i;
      }

      return t._isValid;
    }

    function v(t) {
      var e = d(NaN);
      return null != t ? c(p(e), t) : p(e).userInvalidated = !0, e;
    }

    r = Array.prototype.some ? Array.prototype.some : function (t) {
      for (var e = Object(this), r = e.length >>> 0, n = 0; n < r; n++) if (n in e && t.call(this, e[n], n, e)) return !0;

      return !1;
    };
    var g = i.momentProperties = [];

    function y(t, e) {
      var r, n, i;
      if (a(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), a(e._i) || (t._i = e._i), a(e._f) || (t._f = e._f), a(e._l) || (t._l = e._l), a(e._strict) || (t._strict = e._strict), a(e._tzm) || (t._tzm = e._tzm), a(e._isUTC) || (t._isUTC = e._isUTC), a(e._offset) || (t._offset = e._offset), a(e._pf) || (t._pf = p(e)), a(e._locale) || (t._locale = e._locale), g.length > 0) for (r = 0; r < g.length; r++) a(i = e[n = g[r]]) || (t[n] = i);
      return t;
    }

    var w = !1;

    function b(t) {
      y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === w && (w = !0, i.updateOffset(this), w = !1);
    }

    function _(t) {
      return t instanceof b || null != t && null != t._isAMomentObject;
    }

    function M(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    }

    function S(t) {
      var e = +t,
          r = 0;
      return 0 !== e && isFinite(e) && (r = M(e)), r;
    }

    function E(t, e, r) {
      var n,
          i = Math.min(t.length, e.length),
          o = Math.abs(t.length - e.length),
          s = 0;

      for (n = 0; n < i; n++) (r && t[n] !== e[n] || !r && S(t[n]) !== S(e[n])) && s++;

      return s + o;
    }

    function k(t) {
      !1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t);
    }

    function A(t, e) {
      var r = !0;
      return c(function () {
        if (null != i.deprecationHandler && i.deprecationHandler(null, t), r) {
          for (var n, o = [], s = 0; s < arguments.length; s++) {
            if (n = "", "object" == typeof arguments[s]) {
              for (var a in n += "\n[" + s + "] ", arguments[0]) n += a + ": " + arguments[0][a] + ", ";

              n = n.slice(0, -2);
            } else n = arguments[s];

            o.push(n);
          }

          k(t + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + new Error().stack), r = !1;
        }

        return e.apply(this, arguments);
      }, e);
    }

    var x,
        T = {};

    function N(t, e) {
      null != i.deprecationHandler && i.deprecationHandler(t, e), T[t] || (k(e), T[t] = !0);
    }

    function P(t) {
      return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t);
    }

    function R(t, e) {
      var r,
          n = c({}, t);

      for (r in e) f(e, r) && (s(t[r]) && s(e[r]) ? (n[r] = {}, c(n[r], t[r]), c(n[r], e[r])) : null != e[r] ? n[r] = e[r] : delete n[r]);

      for (r in t) f(t, r) && !f(e, r) && s(t[r]) && (n[r] = c({}, n[r]));

      return n;
    }

    function O(t) {
      null != t && this.set(t);
    }

    i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, x = Object.keys ? Object.keys : function (t) {
      var e,
          r = [];

      for (e in t) f(t, e) && r.push(e);

      return r;
    };
    var I = {};

    function C(t, e) {
      var r = t.toLowerCase();
      I[r] = I[r + "s"] = I[e] = t;
    }

    function D(t) {
      return "string" == typeof t ? I[t] || I[t.toLowerCase()] : void 0;
    }

    function L(t) {
      var e,
          r,
          n = {};

      for (r in t) f(t, r) && (e = D(r)) && (n[e] = t[r]);

      return n;
    }

    var U = {};

    function j(t, e) {
      U[t] = e;
    }

    function B(t, e, r) {
      var n = "" + Math.abs(t),
          i = e - n.length;
      return (t >= 0 ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + n;
    }

    var F = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        H = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        G = {},
        W = {};

    function z(t, e, r, n) {
      var i = n;
      "string" == typeof n && (i = function () {
        return this[n]();
      }), t && (W[t] = i), e && (W[e[0]] = function () {
        return B(i.apply(this, arguments), e[1], e[2]);
      }), r && (W[r] = function () {
        return this.localeData().ordinal(i.apply(this, arguments), t);
      });
    }

    function q(t, e) {
      return t.isValid() ? (e = K(e, t.localeData()), G[e] = G[e] || function (t) {
        var e,
            r,
            n,
            i = t.match(F);

        for (e = 0, r = i.length; e < r; e++) W[i[e]] ? i[e] = W[i[e]] : i[e] = (n = i[e]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");

        return function (e) {
          var n,
              o = "";

          for (n = 0; n < r; n++) o += P(i[n]) ? i[n].call(e, t) : i[n];

          return o;
        };
      }(e), G[e](t)) : t.localeData().invalidDate();
    }

    function K(t, e) {
      var r = 5;

      function n(t) {
        return e.longDateFormat(t) || t;
      }

      for (H.lastIndex = 0; r >= 0 && H.test(t);) t = t.replace(H, n), H.lastIndex = 0, r -= 1;

      return t;
    }

    var Y = /\d/,
        V = /\d\d/,
        Z = /\d{3}/,
        J = /\d{4}/,
        $ = /[+-]?\d{6}/,
        X = /\d\d?/,
        Q = /\d\d\d\d?/,
        tt = /\d\d\d\d\d\d?/,
        et = /\d{1,3}/,
        rt = /\d{1,4}/,
        nt = /[+-]?\d{1,6}/,
        it = /\d+/,
        ot = /[+-]?\d+/,
        st = /Z|[+-]\d\d:?\d\d/gi,
        at = /Z|[+-]\d\d(?::?\d\d)?/gi,
        ut = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        ht = {};

    function lt(t, e, r) {
      ht[t] = P(e) ? e : function (t, n) {
        return t && r ? r : e;
      };
    }

    function ft(t, e) {
      return f(ht, t) ? ht[t](e._strict, e._locale) : new RegExp(ct(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, r, n, i) {
        return e || r || n || i;
      })));
    }

    function ct(t) {
      return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }

    var dt = {};

    function pt(t, e) {
      var r,
          n = e;

      for ("string" == typeof t && (t = [t]), u(e) && (n = function (t, r) {
        r[e] = S(t);
      }), r = 0; r < t.length; r++) dt[t[r]] = n;
    }

    function mt(t, e) {
      pt(t, function (t, r, n, i) {
        n._w = n._w || {}, e(t, n._w, n, i);
      });
    }

    function vt(t, e, r) {
      null != e && f(dt, t) && dt[t](e, r._a, r, t);
    }

    function gt(t) {
      return yt(t) ? 366 : 365;
    }

    function yt(t) {
      return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
    }

    z("Y", 0, 0, function () {
      var t = this.year();
      return t <= 9999 ? "" + t : "+" + t;
    }), z(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    }), z(0, ["YYYY", 4], 0, "year"), z(0, ["YYYYY", 5], 0, "year"), z(0, ["YYYYYY", 6, !0], 0, "year"), C("year", "y"), j("year", 1), lt("Y", ot), lt("YY", X, V), lt("YYYY", rt, J), lt("YYYYY", nt, $), lt("YYYYYY", nt, $), pt(["YYYYY", "YYYYYY"], 0), pt("YYYY", function (t, e) {
      e[0] = 2 === t.length ? i.parseTwoDigitYear(t) : S(t);
    }), pt("YY", function (t, e) {
      e[0] = i.parseTwoDigitYear(t);
    }), pt("Y", function (t, e) {
      e[0] = parseInt(t, 10);
    }), i.parseTwoDigitYear = function (t) {
      return S(t) + (S(t) > 68 ? 1900 : 2e3);
    };

    var wt,
        bt = _t("FullYear", !0);

    function _t(t, e) {
      return function (r) {
        return null != r ? (St(this, t, r), i.updateOffset(this, e), this) : Mt(this, t);
      };
    }

    function Mt(t, e) {
      return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
    }

    function St(t, e, r) {
      t.isValid() && !isNaN(r) && ("FullYear" === e && yt(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](r, t.month(), Et(r, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](r));
    }

    function Et(t, e) {
      if (isNaN(t) || isNaN(e)) return NaN;
      var r,
          n = (e % (r = 12) + r) % r;
      return t += (e - n) / 12, 1 === n ? yt(t) ? 29 : 28 : 31 - n % 7 % 2;
    }

    wt = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
      var e;

      for (e = 0; e < this.length; ++e) if (this[e] === t) return e;

      return -1;
    }, z("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    }), z("MMM", 0, 0, function (t) {
      return this.localeData().monthsShort(this, t);
    }), z("MMMM", 0, 0, function (t) {
      return this.localeData().months(this, t);
    }), C("month", "M"), j("month", 8), lt("M", X), lt("MM", X, V), lt("MMM", function (t, e) {
      return e.monthsShortRegex(t);
    }), lt("MMMM", function (t, e) {
      return e.monthsRegex(t);
    }), pt(["M", "MM"], function (t, e) {
      e[1] = S(t) - 1;
    }), pt(["MMM", "MMMM"], function (t, e, r, n) {
      var i = r._locale.monthsParse(t, n, r._strict);

      null != i ? e[1] = i : p(r).invalidMonth = t;
    });
    var kt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        At = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        xt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function Tt(t, e, r) {
      var n,
          i,
          o,
          s = t.toLocaleLowerCase();
      if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) o = d([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase();
      return r ? "MMM" === e ? -1 !== (i = wt.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = wt.call(this._longMonthsParse, s)) ? i : null : "MMM" === e ? -1 !== (i = wt.call(this._shortMonthsParse, s)) || -1 !== (i = wt.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = wt.call(this._longMonthsParse, s)) || -1 !== (i = wt.call(this._shortMonthsParse, s)) ? i : null;
    }

    function Nt(t, e) {
      var r;
      if (!t.isValid()) return t;
      if ("string" == typeof e) if (/^\d+$/.test(e)) e = S(e);else if (!u(e = t.localeData().monthsParse(e))) return t;
      return r = Math.min(t.date(), Et(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, r), t;
    }

    function Pt(t) {
      return null != t ? (Nt(this, t), i.updateOffset(this, !0), this) : Mt(this, "Month");
    }

    var Rt = ut,
        Ot = ut;

    function It() {
      function t(t, e) {
        return e.length - t.length;
      }

      var e,
          r,
          n = [],
          i = [],
          o = [];

      for (e = 0; e < 12; e++) r = d([2e3, e]), n.push(this.monthsShort(r, "")), i.push(this.months(r, "")), o.push(this.months(r, "")), o.push(this.monthsShort(r, ""));

      for (n.sort(t), i.sort(t), o.sort(t), e = 0; e < 12; e++) n[e] = ct(n[e]), i[e] = ct(i[e]);

      for (e = 0; e < 24; e++) o[e] = ct(o[e]);

      this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i");
    }

    function Ct(t, e, r, n, i, o, s) {
      var a;
      return t < 100 && t >= 0 ? (a = new Date(t + 400, e, r, n, i, o, s), isFinite(a.getFullYear()) && a.setFullYear(t)) : a = new Date(t, e, r, n, i, o, s), a;
    }

    function Dt(t) {
      var e;

      if (t < 100 && t >= 0) {
        var r = Array.prototype.slice.call(arguments);
        r[0] = t + 400, e = new Date(Date.UTC.apply(null, r)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t);
      } else e = new Date(Date.UTC.apply(null, arguments));

      return e;
    }

    function Lt(t, e, r) {
      var n = 7 + e - r;
      return -(7 + Dt(t, 0, n).getUTCDay() - e) % 7 + n - 1;
    }

    function Ut(t, e, r, n, i) {
      var o,
          s,
          a = 1 + 7 * (e - 1) + (7 + r - n) % 7 + Lt(t, n, i);
      return a <= 0 ? s = gt(o = t - 1) + a : a > gt(t) ? (o = t + 1, s = a - gt(t)) : (o = t, s = a), {
        year: o,
        dayOfYear: s
      };
    }

    function jt(t, e, r) {
      var n,
          i,
          o = Lt(t.year(), e, r),
          s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
      return s < 1 ? n = s + Bt(i = t.year() - 1, e, r) : s > Bt(t.year(), e, r) ? (n = s - Bt(t.year(), e, r), i = t.year() + 1) : (i = t.year(), n = s), {
        week: n,
        year: i
      };
    }

    function Bt(t, e, r) {
      var n = Lt(t, e, r),
          i = Lt(t + 1, e, r);
      return (gt(t) - n + i) / 7;
    }

    function Ft(t, e) {
      return t.slice(e, 7).concat(t.slice(0, e));
    }

    z("w", ["ww", 2], "wo", "week"), z("W", ["WW", 2], "Wo", "isoWeek"), C("week", "w"), C("isoWeek", "W"), j("week", 5), j("isoWeek", 5), lt("w", X), lt("ww", X, V), lt("W", X), lt("WW", X, V), mt(["w", "ww", "W", "WW"], function (t, e, r, n) {
      e[n.substr(0, 1)] = S(t);
    }), z("d", 0, "do", "day"), z("dd", 0, 0, function (t) {
      return this.localeData().weekdaysMin(this, t);
    }), z("ddd", 0, 0, function (t) {
      return this.localeData().weekdaysShort(this, t);
    }), z("dddd", 0, 0, function (t) {
      return this.localeData().weekdays(this, t);
    }), z("e", 0, 0, "weekday"), z("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), C("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), lt("d", X), lt("e", X), lt("E", X), lt("dd", function (t, e) {
      return e.weekdaysMinRegex(t);
    }), lt("ddd", function (t, e) {
      return e.weekdaysShortRegex(t);
    }), lt("dddd", function (t, e) {
      return e.weekdaysRegex(t);
    }), mt(["dd", "ddd", "dddd"], function (t, e, r, n) {
      var i = r._locale.weekdaysParse(t, n, r._strict);

      null != i ? e.d = i : p(r).invalidWeekday = t;
    }), mt(["d", "e", "E"], function (t, e, r, n) {
      e[n] = S(t);
    });
    var Ht = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Gt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Wt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

    function zt(t, e, r) {
      var n,
          i,
          o,
          s = t.toLocaleLowerCase();
      if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) o = d([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase();
      return r ? "dddd" === e ? -1 !== (i = wt.call(this._weekdaysParse, s)) ? i : null : "ddd" === e ? -1 !== (i = wt.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = wt.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === e ? -1 !== (i = wt.call(this._weekdaysParse, s)) || -1 !== (i = wt.call(this._shortWeekdaysParse, s)) || -1 !== (i = wt.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === e ? -1 !== (i = wt.call(this._shortWeekdaysParse, s)) || -1 !== (i = wt.call(this._weekdaysParse, s)) || -1 !== (i = wt.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = wt.call(this._minWeekdaysParse, s)) || -1 !== (i = wt.call(this._weekdaysParse, s)) || -1 !== (i = wt.call(this._shortWeekdaysParse, s)) ? i : null;
    }

    var qt = ut,
        Kt = ut,
        Yt = ut;

    function Vt() {
      function t(t, e) {
        return e.length - t.length;
      }

      var e,
          r,
          n,
          i,
          o,
          s = [],
          a = [],
          u = [],
          h = [];

      for (e = 0; e < 7; e++) r = d([2e3, 1]).day(e), n = this.weekdaysMin(r, ""), i = this.weekdaysShort(r, ""), o = this.weekdays(r, ""), s.push(n), a.push(i), u.push(o), h.push(n), h.push(i), h.push(o);

      for (s.sort(t), a.sort(t), u.sort(t), h.sort(t), e = 0; e < 7; e++) a[e] = ct(a[e]), u[e] = ct(u[e]), h[e] = ct(h[e]);

      this._weekdaysRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
    }

    function Zt() {
      return this.hours() % 12 || 12;
    }

    function Jt(t, e) {
      z(t, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), e);
      });
    }

    function $t(t, e) {
      return e._meridiemParse;
    }

    z("H", ["HH", 2], 0, "hour"), z("h", ["hh", 2], 0, Zt), z("k", ["kk", 2], 0, function () {
      return this.hours() || 24;
    }), z("hmm", 0, 0, function () {
      return "" + Zt.apply(this) + B(this.minutes(), 2);
    }), z("hmmss", 0, 0, function () {
      return "" + Zt.apply(this) + B(this.minutes(), 2) + B(this.seconds(), 2);
    }), z("Hmm", 0, 0, function () {
      return "" + this.hours() + B(this.minutes(), 2);
    }), z("Hmmss", 0, 0, function () {
      return "" + this.hours() + B(this.minutes(), 2) + B(this.seconds(), 2);
    }), Jt("a", !0), Jt("A", !1), C("hour", "h"), j("hour", 13), lt("a", $t), lt("A", $t), lt("H", X), lt("h", X), lt("k", X), lt("HH", X, V), lt("hh", X, V), lt("kk", X, V), lt("hmm", Q), lt("hmmss", tt), lt("Hmm", Q), lt("Hmmss", tt), pt(["H", "HH"], 3), pt(["k", "kk"], function (t, e, r) {
      var n = S(t);
      e[3] = 24 === n ? 0 : n;
    }), pt(["a", "A"], function (t, e, r) {
      r._isPm = r._locale.isPM(t), r._meridiem = t;
    }), pt(["h", "hh"], function (t, e, r) {
      e[3] = S(t), p(r).bigHour = !0;
    }), pt("hmm", function (t, e, r) {
      var n = t.length - 2;
      e[3] = S(t.substr(0, n)), e[4] = S(t.substr(n)), p(r).bigHour = !0;
    }), pt("hmmss", function (t, e, r) {
      var n = t.length - 4,
          i = t.length - 2;
      e[3] = S(t.substr(0, n)), e[4] = S(t.substr(n, 2)), e[5] = S(t.substr(i)), p(r).bigHour = !0;
    }), pt("Hmm", function (t, e, r) {
      var n = t.length - 2;
      e[3] = S(t.substr(0, n)), e[4] = S(t.substr(n));
    }), pt("Hmmss", function (t, e, r) {
      var n = t.length - 4,
          i = t.length - 2;
      e[3] = S(t.substr(0, n)), e[4] = S(t.substr(n, 2)), e[5] = S(t.substr(i));
    });

    var Xt,
        Qt = _t("Hours", !0),
        te = {
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      months: At,
      monthsShort: xt,
      week: {
        dow: 0,
        doy: 6
      },
      weekdays: Ht,
      weekdaysMin: Wt,
      weekdaysShort: Gt,
      meridiemParse: /[ap]\.?m?\.?/i
    },
        ee = {},
        re = {};

    function ne(t) {
      return t ? t.toLowerCase().replace("_", "-") : t;
    }

    function ie(e) {
      var r = null;
      if (!ee[e] && t && t.exports) try {
        r = Xt._abbr, (0, _indexD3bd.g)("./locale/" + e), oe(r);
      } catch (t) {}
      return ee[e];
    }

    function oe(t, e) {
      var r;
      return t && ((r = a(e) ? ae(t) : se(t, e)) ? Xt = r : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Xt._abbr;
    }

    function se(t, e) {
      if (null !== e) {
        var r,
            n = te;
        if (e.abbr = t, null != ee[t]) N("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = ee[t]._config;else if (null != e.parentLocale) if (null != ee[e.parentLocale]) n = ee[e.parentLocale]._config;else {
          if (null == (r = ie(e.parentLocale))) return re[e.parentLocale] || (re[e.parentLocale] = []), re[e.parentLocale].push({
            name: t,
            config: e
          }), null;
          n = r._config;
        }
        return ee[t] = new O(R(n, e)), re[t] && re[t].forEach(function (t) {
          se(t.name, t.config);
        }), oe(t), ee[t];
      }

      return delete ee[t], null;
    }

    function ae(t) {
      var e;
      if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Xt;

      if (!o(t)) {
        if (e = ie(t)) return e;
        t = [t];
      }

      return function (t) {
        for (var e, r, n, i, o = 0; o < t.length;) {
          for (e = (i = ne(t[o]).split("-")).length, r = (r = ne(t[o + 1])) ? r.split("-") : null; e > 0;) {
            if (n = ie(i.slice(0, e).join("-"))) return n;
            if (r && r.length >= e && E(i, r, !0) >= e - 1) break;
            e--;
          }

          o++;
        }

        return Xt;
      }(t);
    }

    function ue(t) {
      var e,
          r = t._a;
      return r && -2 === p(t).overflow && (e = r[1] < 0 || r[1] > 11 ? 1 : r[2] < 1 || r[2] > Et(r[0], r[1]) ? 2 : r[3] < 0 || r[3] > 24 || 24 === r[3] && (0 !== r[4] || 0 !== r[5] || 0 !== r[6]) ? 3 : r[4] < 0 || r[4] > 59 ? 4 : r[5] < 0 || r[5] > 59 ? 5 : r[6] < 0 || r[6] > 999 ? 6 : -1, p(t)._overflowDayOfYear && (e < 0 || e > 2) && (e = 2), p(t)._overflowWeeks && -1 === e && (e = 7), p(t)._overflowWeekday && -1 === e && (e = 8), p(t).overflow = e), t;
    }

    function he(t, e, r) {
      return null != t ? t : null != e ? e : r;
    }

    function le(t) {
      var e,
          r,
          n,
          o,
          s,
          a = [];

      if (!t._d) {
        for (n = function (t) {
          var e = new Date(i.now());
          return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()];
        }(t), t._w && null == t._a[2] && null == t._a[1] && function (t) {
          var e, r, n, i, o, s, a, u;
          if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, s = 4, r = he(e.GG, t._a[0], jt(ke(), 1, 4).year), n = he(e.W, 1), ((i = he(e.E, 1)) < 1 || i > 7) && (u = !0);else {
            o = t._locale._week.dow, s = t._locale._week.doy;
            var h = jt(ke(), o, s);
            r = he(e.gg, t._a[0], h.year), n = he(e.w, h.week), null != e.d ? ((i = e.d) < 0 || i > 6) && (u = !0) : null != e.e ? (i = e.e + o, (e.e < 0 || e.e > 6) && (u = !0)) : i = o;
          }
          n < 1 || n > Bt(r, o, s) ? p(t)._overflowWeeks = !0 : null != u ? p(t)._overflowWeekday = !0 : (a = Ut(r, n, i, o, s), t._a[0] = a.year, t._dayOfYear = a.dayOfYear);
        }(t), null != t._dayOfYear && (s = he(t._a[0], n[0]), (t._dayOfYear > gt(s) || 0 === t._dayOfYear) && (p(t)._overflowDayOfYear = !0), r = Dt(s, 0, t._dayOfYear), t._a[1] = r.getUTCMonth(), t._a[2] = r.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = a[e] = n[e];

        for (; e < 7; e++) t._a[e] = a[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];

        24 === t._a[3] && 0 === t._a[4] && 0 === t._a[5] && 0 === t._a[6] && (t._nextDay = !0, t._a[3] = 0), t._d = (t._useUTC ? Dt : Ct).apply(null, a), o = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[3] = 24), t._w && void 0 !== t._w.d && t._w.d !== o && (p(t).weekdayMismatch = !0);
      }
    }

    var fe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        ce = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        de = /Z|[+-]\d\d(?::?\d\d)?/,
        pe = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
        me = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        ve = /^\/?Date\((\-?\d+)/i;

    function ge(t) {
      var e,
          r,
          n,
          i,
          o,
          s,
          a = t._i,
          u = fe.exec(a) || ce.exec(a);

      if (u) {
        for (p(t).iso = !0, e = 0, r = pe.length; e < r; e++) if (pe[e][1].exec(u[1])) {
          i = pe[e][0], n = !1 !== pe[e][2];
          break;
        }

        if (null == i) return void (t._isValid = !1);

        if (u[3]) {
          for (e = 0, r = me.length; e < r; e++) if (me[e][1].exec(u[3])) {
            o = (u[2] || " ") + me[e][0];
            break;
          }

          if (null == o) return void (t._isValid = !1);
        }

        if (!n && null != o) return void (t._isValid = !1);

        if (u[4]) {
          if (!de.exec(u[4])) return void (t._isValid = !1);
          s = "Z";
        }

        t._f = i + (o || "") + (s || ""), Me(t);
      } else t._isValid = !1;
    }

    var ye = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function we(t) {
      var e = parseInt(t, 10);
      return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
    }

    var be = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480
    };

    function _e(t) {
      var e,
          r,
          n,
          i,
          o,
          s,
          a,
          u = ye.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));

      if (u) {
        var h = (e = u[4], r = u[3], n = u[2], i = u[5], o = u[6], s = u[7], a = [we(e), xt.indexOf(r), parseInt(n, 10), parseInt(i, 10), parseInt(o, 10)], s && a.push(parseInt(s, 10)), a);
        if (!function (t, e, r) {
          return !t || Gt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() || (p(r).weekdayMismatch = !0, r._isValid = !1, !1);
        }(u[1], h, t)) return;
        t._a = h, t._tzm = function (t, e, r) {
          if (t) return be[t];
          if (e) return 0;
          var n = parseInt(r, 10),
              i = n % 100;
          return (n - i) / 100 * 60 + i;
        }(u[8], u[9], u[10]), t._d = Dt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), p(t).rfc2822 = !0;
      } else t._isValid = !1;
    }

    function Me(t) {
      if (t._f !== i.ISO_8601) {
        if (t._f !== i.RFC_2822) {
          t._a = [], p(t).empty = !0;
          var e,
              r,
              n,
              o,
              s,
              a = "" + t._i,
              u = a.length,
              h = 0;

          for (n = K(t._f, t._locale).match(F) || [], e = 0; e < n.length; e++) o = n[e], (r = (a.match(ft(o, t)) || [])[0]) && ((s = a.substr(0, a.indexOf(r))).length > 0 && p(t).unusedInput.push(s), a = a.slice(a.indexOf(r) + r.length), h += r.length), W[o] ? (r ? p(t).empty = !1 : p(t).unusedTokens.push(o), vt(o, r, t)) : t._strict && !r && p(t).unusedTokens.push(o);

          p(t).charsLeftOver = u - h, a.length > 0 && p(t).unusedInput.push(a), t._a[3] <= 12 && !0 === p(t).bigHour && t._a[3] > 0 && (p(t).bigHour = void 0), p(t).parsedDateParts = t._a.slice(0), p(t).meridiem = t._meridiem, t._a[3] = function (t, e, r) {
            var n;
            return null == r ? e : null != t.meridiemHour ? t.meridiemHour(e, r) : null != t.isPM ? ((n = t.isPM(r)) && e < 12 && (e += 12), n || 12 !== e || (e = 0), e) : e;
          }(t._locale, t._a[3], t._meridiem), le(t), ue(t);
        } else _e(t);
      } else ge(t);
    }

    function Se(t) {
      var e = t._i,
          r = t._f;
      return t._locale = t._locale || ae(t._l), null === e || void 0 === r && "" === e ? v({
        nullInput: !0
      }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), _(e) ? new b(ue(e)) : (h(e) ? t._d = e : o(r) ? function (t) {
        var e, r, n, i, o;
        if (0 === t._f.length) return p(t).invalidFormat = !0, void (t._d = new Date(NaN));

        for (i = 0; i < t._f.length; i++) o = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[i], Me(e), m(e) && (o += p(e).charsLeftOver, o += 10 * p(e).unusedTokens.length, p(e).score = o, (null == n || o < n) && (n = o, r = e));

        c(t, r || e);
      }(t) : r ? Me(t) : function (t) {
        var e = t._i;
        a(e) ? t._d = new Date(i.now()) : h(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? function (t) {
          var e = ve.exec(t._i);
          null === e ? (ge(t), !1 === t._isValid && (delete t._isValid, _e(t), !1 === t._isValid && (delete t._isValid, i.createFromInputFallback(t)))) : t._d = new Date(+e[1]);
        }(t) : o(e) ? (t._a = l(e.slice(0), function (t) {
          return parseInt(t, 10);
        }), le(t)) : s(e) ? function (t) {
          if (!t._d) {
            var e = L(t._i);
            t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
              return t && parseInt(t, 10);
            }), le(t);
          }
        }(t) : u(e) ? t._d = new Date(e) : i.createFromInputFallback(t);
      }(t), m(t) || (t._d = null), t));
    }

    function Ee(t, e, r, n, i) {
      var a,
          u = {};
      return !0 !== r && !1 !== r || (n = r, r = void 0), (s(t) && function (t) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
        var e;

        for (e in t) if (t.hasOwnProperty(e)) return !1;

        return !0;
      }(t) || o(t) && 0 === t.length) && (t = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = i, u._l = r, u._i = t, u._f = e, u._strict = n, (a = new b(ue(Se(u))))._nextDay && (a.add(1, "d"), a._nextDay = void 0), a;
    }

    function ke(t, e, r, n) {
      return Ee(t, e, r, n, !1);
    }

    i.createFromInputFallback = A("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
      t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
    }), i.ISO_8601 = function () {}, i.RFC_2822 = function () {};
    var Ae = A("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
      var t = ke.apply(null, arguments);
      return this.isValid() && t.isValid() ? t < this ? this : t : v();
    }),
        xe = A("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
      var t = ke.apply(null, arguments);
      return this.isValid() && t.isValid() ? t > this ? this : t : v();
    });

    function Te(t, e) {
      var r, n;
      if (1 === e.length && o(e[0]) && (e = e[0]), !e.length) return ke();

      for (r = e[0], n = 1; n < e.length; ++n) e[n].isValid() && !e[n][t](r) || (r = e[n]);

      return r;
    }

    var Ne = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Pe(t) {
      var e = L(t),
          r = e.year || 0,
          n = e.quarter || 0,
          i = e.month || 0,
          o = e.week || e.isoWeek || 0,
          s = e.day || 0,
          a = e.hour || 0,
          u = e.minute || 0,
          h = e.second || 0,
          l = e.millisecond || 0;
      this._isValid = function (t) {
        for (var e in t) if (-1 === wt.call(Ne, e) || null != t[e] && isNaN(t[e])) return !1;

        for (var r = !1, n = 0; n < Ne.length; ++n) if (t[Ne[n]]) {
          if (r) return !1;
          parseFloat(t[Ne[n]]) !== S(t[Ne[n]]) && (r = !0);
        }

        return !0;
      }(e), this._milliseconds = +l + 1e3 * h + 6e4 * u + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +i + 3 * n + 12 * r, this._data = {}, this._locale = ae(), this._bubble();
    }

    function Re(t) {
      return t instanceof Pe;
    }

    function Oe(t) {
      return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
    }

    function Ie(t, e) {
      z(t, 0, 0, function () {
        var t = this.utcOffset(),
            r = "+";
        return t < 0 && (t = -t, r = "-"), r + B(~~(t / 60), 2) + e + B(~~t % 60, 2);
      });
    }

    Ie("Z", ":"), Ie("ZZ", ""), lt("Z", at), lt("ZZ", at), pt(["Z", "ZZ"], function (t, e, r) {
      r._useUTC = !0, r._tzm = De(at, t);
    });
    var Ce = /([\+\-]|\d\d)/gi;

    function De(t, e) {
      var r = (e || "").match(t);
      if (null === r) return null;
      var n = ((r[r.length - 1] || []) + "").match(Ce) || ["-", 0, 0],
          i = 60 * n[1] + S(n[2]);
      return 0 === i ? 0 : "+" === n[0] ? i : -i;
    }

    function Le(t, e) {
      var r, n;
      return e._isUTC ? (r = e.clone(), n = (_(t) || h(t) ? t.valueOf() : ke(t).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), i.updateOffset(r, !1), r) : ke(t).local();
    }

    function Ue(t) {
      return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
    }

    function je() {
      return !!this.isValid() && this._isUTC && 0 === this._offset;
    }

    i.updateOffset = function () {};

    var Be = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Fe = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function He(t, e) {
      var r,
          n,
          i,
          o,
          s,
          a,
          h = t,
          l = null;
      return Re(t) ? h = {
        ms: t._milliseconds,
        d: t._days,
        M: t._months
      } : u(t) ? (h = {}, e ? h[e] = t : h.milliseconds = t) : (l = Be.exec(t)) ? (r = "-" === l[1] ? -1 : 1, h = {
        y: 0,
        d: S(l[2]) * r,
        h: S(l[3]) * r,
        m: S(l[4]) * r,
        s: S(l[5]) * r,
        ms: S(Oe(1e3 * l[6])) * r
      }) : (l = Fe.exec(t)) ? (r = "-" === l[1] ? -1 : 1, h = {
        y: Ge(l[2], r),
        M: Ge(l[3], r),
        w: Ge(l[4], r),
        d: Ge(l[5], r),
        h: Ge(l[6], r),
        m: Ge(l[7], r),
        s: Ge(l[8], r)
      }) : null == h ? h = {} : "object" == typeof h && ("from" in h || "to" in h) && (o = ke(h.from), s = ke(h.to), i = o.isValid() && s.isValid() ? (s = Le(s, o), o.isBefore(s) ? a = We(o, s) : ((a = We(s, o)).milliseconds = -a.milliseconds, a.months = -a.months), a) : {
        milliseconds: 0,
        months: 0
      }, (h = {}).ms = i.milliseconds, h.M = i.months), n = new Pe(h), Re(t) && f(t, "_locale") && (n._locale = t._locale), n;
    }

    function Ge(t, e) {
      var r = t && parseFloat(t.replace(",", "."));
      return (isNaN(r) ? 0 : r) * e;
    }

    function We(t, e) {
      var r = {};
      return r.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(r.months, "M").isAfter(e) && --r.months, r.milliseconds = +e - +t.clone().add(r.months, "M"), r;
    }

    function ze(t, e) {
      return function (r, n) {
        var i;
        return null === n || isNaN(+n) || (N(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = r, r = n, n = i), qe(this, He(r = "string" == typeof r ? +r : r, n), t), this;
      };
    }

    function qe(t, e, r, n) {
      var o = e._milliseconds,
          s = Oe(e._days),
          a = Oe(e._months);
      t.isValid() && (n = null == n || n, a && Nt(t, Mt(t, "Month") + a * r), s && St(t, "Date", Mt(t, "Date") + s * r), o && t._d.setTime(t._d.valueOf() + o * r), n && i.updateOffset(t, s || a));
    }

    He.fn = Pe.prototype, He.invalid = function () {
      return He(NaN);
    };
    var Ke = ze(1, "add"),
        Ye = ze(-1, "subtract");

    function Ve(t, e) {
      var r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
          n = t.clone().add(r, "months");
      return -(r + (e - n < 0 ? (e - n) / (n - t.clone().add(r - 1, "months")) : (e - n) / (t.clone().add(r + 1, "months") - n))) || 0;
    }

    function Ze(t) {
      var e;
      return void 0 === t ? this._locale._abbr : (null != (e = ae(t)) && (this._locale = e), this);
    }

    i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Je = A("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
      return void 0 === t ? this.localeData() : this.locale(t);
    });

    function $e() {
      return this._locale;
    }

    function Xe(t, e) {
      return (t % e + e) % e;
    }

    function Qe(t, e, r) {
      return t < 100 && t >= 0 ? new Date(t + 400, e, r) - 126227808e5 : new Date(t, e, r).valueOf();
    }

    function tr(t, e, r) {
      return t < 100 && t >= 0 ? Date.UTC(t + 400, e, r) - 126227808e5 : Date.UTC(t, e, r);
    }

    function er(t, e) {
      z(0, [t, t.length], 0, e);
    }

    function rr(t, e, r, n, i) {
      var o;
      return null == t ? jt(this, n, i).year : (e > (o = Bt(t, n, i)) && (e = o), nr.call(this, t, e, r, n, i));
    }

    function nr(t, e, r, n, i) {
      var o = Ut(t, e, r, n, i),
          s = Dt(o.year, 0, o.dayOfYear);
      return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
    }

    z(0, ["gg", 2], 0, function () {
      return this.weekYear() % 100;
    }), z(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    }), er("gggg", "weekYear"), er("ggggg", "weekYear"), er("GGGG", "isoWeekYear"), er("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), j("weekYear", 1), j("isoWeekYear", 1), lt("G", ot), lt("g", ot), lt("GG", X, V), lt("gg", X, V), lt("GGGG", rt, J), lt("gggg", rt, J), lt("GGGGG", nt, $), lt("ggggg", nt, $), mt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, r, n) {
      e[n.substr(0, 2)] = S(t);
    }), mt(["gg", "GG"], function (t, e, r, n) {
      e[n] = i.parseTwoDigitYear(t);
    }), z("Q", 0, "Qo", "quarter"), C("quarter", "Q"), j("quarter", 7), lt("Q", Y), pt("Q", function (t, e) {
      e[1] = 3 * (S(t) - 1);
    }), z("D", ["DD", 2], "Do", "date"), C("date", "D"), j("date", 9), lt("D", X), lt("DD", X, V), lt("Do", function (t, e) {
      return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
    }), pt(["D", "DD"], 2), pt("Do", function (t, e) {
      e[2] = S(t.match(X)[0]);
    });

    var ir = _t("Date", !0);

    z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), j("dayOfYear", 4), lt("DDD", et), lt("DDDD", Z), pt(["DDD", "DDDD"], function (t, e, r) {
      r._dayOfYear = S(t);
    }), z("m", ["mm", 2], 0, "minute"), C("minute", "m"), j("minute", 14), lt("m", X), lt("mm", X, V), pt(["m", "mm"], 4);

    var or = _t("Minutes", !1);

    z("s", ["ss", 2], 0, "second"), C("second", "s"), j("second", 15), lt("s", X), lt("ss", X, V), pt(["s", "ss"], 5);

    var sr,
        ar = _t("Seconds", !1);

    for (z("S", 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }), z(0, ["SS", 2], 0, function () {
      return ~~(this.millisecond() / 10);
    }), z(0, ["SSS", 3], 0, "millisecond"), z(0, ["SSSS", 4], 0, function () {
      return 10 * this.millisecond();
    }), z(0, ["SSSSS", 5], 0, function () {
      return 100 * this.millisecond();
    }), z(0, ["SSSSSS", 6], 0, function () {
      return 1e3 * this.millisecond();
    }), z(0, ["SSSSSSS", 7], 0, function () {
      return 1e4 * this.millisecond();
    }), z(0, ["SSSSSSSS", 8], 0, function () {
      return 1e5 * this.millisecond();
    }), z(0, ["SSSSSSSSS", 9], 0, function () {
      return 1e6 * this.millisecond();
    }), C("millisecond", "ms"), j("millisecond", 16), lt("S", et, Y), lt("SS", et, V), lt("SSS", et, Z), sr = "SSSS"; sr.length <= 9; sr += "S") lt(sr, it);

    function ur(t, e) {
      e[6] = S(1e3 * ("0." + t));
    }

    for (sr = "S"; sr.length <= 9; sr += "S") pt(sr, ur);

    var hr = _t("Milliseconds", !1);

    z("z", 0, 0, "zoneAbbr"), z("zz", 0, 0, "zoneName");
    var lr = b.prototype;

    function fr(t) {
      return t;
    }

    lr.add = Ke, lr.calendar = function (t, e) {
      var r = t || ke(),
          n = Le(r, this).startOf("day"),
          o = i.calendarFormat(this, n) || "sameElse",
          s = e && (P(e[o]) ? e[o].call(this, r) : e[o]);
      return this.format(s || this.localeData().calendar(o, this, ke(r)));
    }, lr.clone = function () {
      return new b(this);
    }, lr.diff = function (t, e, r) {
      var n, i, o;
      if (!this.isValid()) return NaN;
      if (!(n = Le(t, this)).isValid()) return NaN;

      switch (i = 6e4 * (n.utcOffset() - this.utcOffset()), e = D(e)) {
        case "year":
          o = Ve(this, n) / 12;
          break;

        case "month":
          o = Ve(this, n);
          break;

        case "quarter":
          o = Ve(this, n) / 3;
          break;

        case "second":
          o = (this - n) / 1e3;
          break;

        case "minute":
          o = (this - n) / 6e4;
          break;

        case "hour":
          o = (this - n) / 36e5;
          break;

        case "day":
          o = (this - n - i) / 864e5;
          break;

        case "week":
          o = (this - n - i) / 6048e5;
          break;

        default:
          o = this - n;
      }

      return r ? o : M(o);
    }, lr.endOf = function (t) {
      var e;
      if (void 0 === (t = D(t)) || "millisecond" === t || !this.isValid()) return this;
      var r = this._isUTC ? tr : Qe;

      switch (t) {
        case "year":
          e = r(this.year() + 1, 0, 1) - 1;
          break;

        case "quarter":
          e = r(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
          break;

        case "month":
          e = r(this.year(), this.month() + 1, 1) - 1;
          break;

        case "week":
          e = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;

        case "isoWeek":
          e = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
          break;

        case "day":
        case "date":
          e = r(this.year(), this.month(), this.date() + 1) - 1;
          break;

        case "hour":
          e = this._d.valueOf(), e += 36e5 - Xe(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
          break;

        case "minute":
          e = this._d.valueOf(), e += 6e4 - Xe(e, 6e4) - 1;
          break;

        case "second":
          e = this._d.valueOf(), e += 1e3 - Xe(e, 1e3) - 1;
      }

      return this._d.setTime(e), i.updateOffset(this, !0), this;
    }, lr.format = function (t) {
      t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
      var e = q(this, t);
      return this.localeData().postformat(e);
    }, lr.from = function (t, e) {
      return this.isValid() && (_(t) && t.isValid() || ke(t).isValid()) ? He({
        to: this,
        from: t
      }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
    }, lr.fromNow = function (t) {
      return this.from(ke(), t);
    }, lr.to = function (t, e) {
      return this.isValid() && (_(t) && t.isValid() || ke(t).isValid()) ? He({
        from: this,
        to: t
      }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
    }, lr.toNow = function (t) {
      return this.to(ke(), t);
    }, lr.get = function (t) {
      return P(this[t = D(t)]) ? this[t]() : this;
    }, lr.invalidAt = function () {
      return p(this).overflow;
    }, lr.isAfter = function (t, e) {
      var r = _(t) ? t : ke(t);
      return !(!this.isValid() || !r.isValid()) && ("millisecond" === (e = D(e) || "millisecond") ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(e).valueOf());
    }, lr.isBefore = function (t, e) {
      var r = _(t) ? t : ke(t);
      return !(!this.isValid() || !r.isValid()) && ("millisecond" === (e = D(e) || "millisecond") ? this.valueOf() < r.valueOf() : this.clone().endOf(e).valueOf() < r.valueOf());
    }, lr.isBetween = function (t, e, r, n) {
      var i = _(t) ? t : ke(t),
          o = _(e) ? e : ke(e);
      return !!(this.isValid() && i.isValid() && o.isValid()) && ("(" === (n = n || "()")[0] ? this.isAfter(i, r) : !this.isBefore(i, r)) && (")" === n[1] ? this.isBefore(o, r) : !this.isAfter(o, r));
    }, lr.isSame = function (t, e) {
      var r,
          n = _(t) ? t : ke(t);
      return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = D(e) || "millisecond") ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(e).valueOf() <= r && r <= this.clone().endOf(e).valueOf()));
    }, lr.isSameOrAfter = function (t, e) {
      return this.isSame(t, e) || this.isAfter(t, e);
    }, lr.isSameOrBefore = function (t, e) {
      return this.isSame(t, e) || this.isBefore(t, e);
    }, lr.isValid = function () {
      return m(this);
    }, lr.lang = Je, lr.locale = Ze, lr.localeData = $e, lr.max = xe, lr.min = Ae, lr.parsingFlags = function () {
      return c({}, p(this));
    }, lr.set = function (t, e) {
      if ("object" == typeof t) for (var r = function (t) {
        var e = [];

        for (var r in t) e.push({
          unit: r,
          priority: U[r]
        });

        return e.sort(function (t, e) {
          return t.priority - e.priority;
        }), e;
      }(t = L(t)), n = 0; n < r.length; n++) this[r[n].unit](t[r[n].unit]);else if (P(this[t = D(t)])) return this[t](e);
      return this;
    }, lr.startOf = function (t) {
      var e;
      if (void 0 === (t = D(t)) || "millisecond" === t || !this.isValid()) return this;
      var r = this._isUTC ? tr : Qe;

      switch (t) {
        case "year":
          e = r(this.year(), 0, 1);
          break;

        case "quarter":
          e = r(this.year(), this.month() - this.month() % 3, 1);
          break;

        case "month":
          e = r(this.year(), this.month(), 1);
          break;

        case "week":
          e = r(this.year(), this.month(), this.date() - this.weekday());
          break;

        case "isoWeek":
          e = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
          break;

        case "day":
        case "date":
          e = r(this.year(), this.month(), this.date());
          break;

        case "hour":
          e = this._d.valueOf(), e -= Xe(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
          break;

        case "minute":
          e = this._d.valueOf(), e -= Xe(e, 6e4);
          break;

        case "second":
          e = this._d.valueOf(), e -= Xe(e, 1e3);
      }

      return this._d.setTime(e), i.updateOffset(this, !0), this;
    }, lr.subtract = Ye, lr.toArray = function () {
      var t = this;
      return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()];
    }, lr.toObject = function () {
      var t = this;
      return {
        years: t.year(),
        months: t.month(),
        date: t.date(),
        hours: t.hours(),
        minutes: t.minutes(),
        seconds: t.seconds(),
        milliseconds: t.milliseconds()
      };
    }, lr.toDate = function () {
      return new Date(this.valueOf());
    }, lr.toISOString = function (t) {
      if (!this.isValid()) return null;
      var e = !0 !== t,
          r = e ? this.clone().utc() : this;
      return r.year() < 0 || r.year() > 9999 ? q(r, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : P(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", q(r, "Z")) : q(r, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
    }, lr.inspect = function () {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var t = "moment",
          e = "";
      this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
      var r = "[" + t + '("]',
          n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
          i = e + '[")]';
      return this.format(r + n + "-MM-DD[T]HH:mm:ss.SSS" + i);
    }, lr.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }, lr.toString = function () {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }, lr.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }, lr.valueOf = function () {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }, lr.creationData = function () {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }, lr.year = bt, lr.isLeapYear = function () {
      return yt(this.year());
    }, lr.weekYear = function (t) {
      return rr.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }, lr.isoWeekYear = function (t) {
      return rr.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
    }, lr.quarter = lr.quarters = function (t) {
      return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
    }, lr.month = Pt, lr.daysInMonth = function () {
      return Et(this.year(), this.month());
    }, lr.week = lr.weeks = function (t) {
      var e = this.localeData().week(this);
      return null == t ? e : this.add(7 * (t - e), "d");
    }, lr.isoWeek = lr.isoWeeks = function (t) {
      var e = jt(this, 1, 4).week;
      return null == t ? e : this.add(7 * (t - e), "d");
    }, lr.weeksInYear = function () {
      var t = this.localeData()._week;

      return Bt(this.year(), t.dow, t.doy);
    }, lr.isoWeeksInYear = function () {
      return Bt(this.year(), 1, 4);
    }, lr.date = ir, lr.day = lr.days = function (t) {
      if (!this.isValid()) return null != t ? this : NaN;
      var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != t ? (t = function (t, e) {
        return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10);
      }(t, this.localeData()), this.add(t - e, "d")) : e;
    }, lr.weekday = function (t) {
      if (!this.isValid()) return null != t ? this : NaN;
      var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == t ? e : this.add(t - e, "d");
    }, lr.isoWeekday = function (t) {
      if (!this.isValid()) return null != t ? this : NaN;

      if (null != t) {
        var e = function (t, e) {
          return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
        }(t, this.localeData());

        return this.day(this.day() % 7 ? e : e - 7);
      }

      return this.day() || 7;
    }, lr.dayOfYear = function (t) {
      var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
      return null == t ? e : this.add(t - e, "d");
    }, lr.hour = lr.hours = Qt, lr.minute = lr.minutes = or, lr.second = lr.seconds = ar, lr.millisecond = lr.milliseconds = hr, lr.utcOffset = function (t, e, r) {
      var n,
          o = this._offset || 0;
      if (!this.isValid()) return null != t ? this : NaN;

      if (null != t) {
        if ("string" == typeof t) {
          if (null === (t = De(at, t))) return this;
        } else Math.abs(t) < 16 && !r && (t *= 60);

        return !this._isUTC && e && (n = Ue(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), o !== t && (!e || this._changeInProgress ? qe(this, He(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this;
      }

      return this._isUTC ? o : Ue(this);
    }, lr.utc = function (t) {
      return this.utcOffset(0, t);
    }, lr.local = function (t) {
      return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ue(this), "m")), this;
    }, lr.parseZone = function () {
      if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
        var t = De(st, this._i);
        null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
      }
      return this;
    }, lr.hasAlignedHourOffset = function (t) {
      return !!this.isValid() && (t = t ? ke(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0);
    }, lr.isDST = function () {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }, lr.isLocal = function () {
      return !!this.isValid() && !this._isUTC;
    }, lr.isUtcOffset = function () {
      return !!this.isValid() && this._isUTC;
    }, lr.isUtc = je, lr.isUTC = je, lr.zoneAbbr = function () {
      return this._isUTC ? "UTC" : "";
    }, lr.zoneName = function () {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }, lr.dates = A("dates accessor is deprecated. Use date instead.", ir), lr.months = A("months accessor is deprecated. Use month instead", Pt), lr.years = A("years accessor is deprecated. Use year instead", bt), lr.zone = A("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
      return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
    }), lr.isDSTShifted = A("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
      if (!a(this._isDSTShifted)) return this._isDSTShifted;
      var t = {};

      if (y(t, this), (t = Se(t))._a) {
        var e = t._isUTC ? d(t._a) : ke(t._a);
        this._isDSTShifted = this.isValid() && E(t._a, e.toArray()) > 0;
      } else this._isDSTShifted = !1;

      return this._isDSTShifted;
    });
    var cr = O.prototype;

    function dr(t, e, r, n) {
      var i = ae(),
          o = d().set(n, e);
      return i[r](o, t);
    }

    function pr(t, e, r) {
      if (u(t) && (e = t, t = void 0), t = t || "", null != e) return dr(t, e, r, "month");
      var n,
          i = [];

      for (n = 0; n < 12; n++) i[n] = dr(t, n, r, "month");

      return i;
    }

    function mr(t, e, r, n) {
      "boolean" == typeof t ? (u(e) && (r = e, e = void 0), e = e || "") : (r = e = t, t = !1, u(e) && (r = e, e = void 0), e = e || "");
      var i,
          o = ae(),
          s = t ? o._week.dow : 0;
      if (null != r) return dr(e, (r + s) % 7, n, "day");
      var a = [];

      for (i = 0; i < 7; i++) a[i] = dr(e, (i + s) % 7, n, "day");

      return a;
    }

    cr.calendar = function (t, e, r) {
      var n = this._calendar[t] || this._calendar.sameElse;
      return P(n) ? n.call(e, r) : n;
    }, cr.longDateFormat = function (t) {
      var e = this._longDateFormat[t],
          r = this._longDateFormat[t.toUpperCase()];

      return e || !r ? e : (this._longDateFormat[t] = r.replace(/MMMM|MM|DD|dddd/g, function (t) {
        return t.slice(1);
      }), this._longDateFormat[t]);
    }, cr.invalidDate = function () {
      return this._invalidDate;
    }, cr.ordinal = function (t) {
      return this._ordinal.replace("%d", t);
    }, cr.preparse = fr, cr.postformat = fr, cr.relativeTime = function (t, e, r, n) {
      var i = this._relativeTime[r];
      return P(i) ? i(t, e, r, n) : i.replace(/%d/i, t);
    }, cr.pastFuture = function (t, e) {
      var r = this._relativeTime[t > 0 ? "future" : "past"];
      return P(r) ? r(e) : r.replace(/%s/i, e);
    }, cr.set = function (t) {
      var e, r;

      for (r in t) P(e = t[r]) ? this[r] = e : this["_" + r] = e;

      this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
    }, cr.months = function (t, e) {
      return t ? o(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || kt).test(e) ? "format" : "standalone"][t.month()] : o(this._months) ? this._months : this._months.standalone;
    }, cr.monthsShort = function (t, e) {
      return t ? o(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[kt.test(e) ? "format" : "standalone"][t.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }, cr.monthsParse = function (t, e, r) {
      var n, i, o;
      if (this._monthsParseExact) return Tt.call(this, t, e, r);

      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
        if (i = d([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), r || this._monthsParse[n] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), r && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
        if (r && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
        if (!r && this._monthsParse[n].test(t)) return n;
      }
    }, cr.monthsRegex = function (t) {
      return this._monthsParseExact ? (f(this, "_monthsRegex") || It.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = Ot), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
    }, cr.monthsShortRegex = function (t) {
      return this._monthsParseExact ? (f(this, "_monthsRegex") || It.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = Rt), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }, cr.week = function (t) {
      return jt(t, this._week.dow, this._week.doy).week;
    }, cr.firstDayOfYear = function () {
      return this._week.doy;
    }, cr.firstDayOfWeek = function () {
      return this._week.dow;
    }, cr.weekdays = function (t, e) {
      var r = o(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
      return !0 === t ? Ft(r, this._week.dow) : t ? r[t.day()] : r;
    }, cr.weekdaysMin = function (t) {
      return !0 === t ? Ft(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
    }, cr.weekdaysShort = function (t) {
      return !0 === t ? Ft(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
    }, cr.weekdaysParse = function (t, e, r) {
      var n, i, o;
      if (this._weekdaysParseExact) return zt.call(this, t, e, r);

      for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
        if (i = d([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i")), r && "dddd" === e && this._fullWeekdaysParse[n].test(t)) return n;
        if (r && "ddd" === e && this._shortWeekdaysParse[n].test(t)) return n;
        if (r && "dd" === e && this._minWeekdaysParse[n].test(t)) return n;
        if (!r && this._weekdaysParse[n].test(t)) return n;
      }
    }, cr.weekdaysRegex = function (t) {
      return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Vt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = qt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }, cr.weekdaysShortRegex = function (t) {
      return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Vt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }, cr.weekdaysMinRegex = function (t) {
      return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Vt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Yt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }, cr.isPM = function (t) {
      return "p" === (t + "").toLowerCase().charAt(0);
    }, cr.meridiem = function (t, e, r) {
      return t > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
    }, oe("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (t) {
        var e = t % 10;
        return t + (1 === S(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
      }
    }), i.lang = A("moment.lang is deprecated. Use moment.locale instead.", oe), i.langData = A("moment.langData is deprecated. Use moment.localeData instead.", ae);
    var vr = Math.abs;

    function gr(t, e, r, n) {
      var i = He(e, r);
      return t._milliseconds += n * i._milliseconds, t._days += n * i._days, t._months += n * i._months, t._bubble();
    }

    function yr(t) {
      return t < 0 ? Math.floor(t) : Math.ceil(t);
    }

    function wr(t) {
      return 4800 * t / 146097;
    }

    function br(t) {
      return 146097 * t / 4800;
    }

    function _r(t) {
      return function () {
        return this.as(t);
      };
    }

    var Mr = _r("ms"),
        Sr = _r("s"),
        Er = _r("m"),
        kr = _r("h"),
        Ar = _r("d"),
        xr = _r("w"),
        Tr = _r("M"),
        Nr = _r("Q"),
        Pr = _r("y");

    function Rr(t) {
      return function () {
        return this.isValid() ? this._data[t] : NaN;
      };
    }

    var Or = Rr("milliseconds"),
        Ir = Rr("seconds"),
        Cr = Rr("minutes"),
        Dr = Rr("hours"),
        Lr = Rr("days"),
        Ur = Rr("months"),
        jr = Rr("years"),
        Br = Math.round,
        Fr = {
      ss: 44,
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      M: 11
    };

    function Hr(t, e, r, n, i) {
      return i.relativeTime(e || 1, !!r, t, n);
    }

    var Gr = Math.abs;

    function Wr(t) {
      return (t > 0) - (t < 0) || +t;
    }

    function zr() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t,
          e,
          r = Gr(this._milliseconds) / 1e3,
          n = Gr(this._days),
          i = Gr(this._months);
      t = M(r / 60), e = M(t / 60), r %= 60, t %= 60;
      var o = M(i / 12),
          s = i %= 12,
          a = n,
          u = e,
          h = t,
          l = r ? r.toFixed(3).replace(/\.?0+$/, "") : "",
          f = this.asSeconds();
      if (!f) return "P0D";
      var c = f < 0 ? "-" : "",
          d = Wr(this._months) !== Wr(f) ? "-" : "",
          p = Wr(this._days) !== Wr(f) ? "-" : "",
          m = Wr(this._milliseconds) !== Wr(f) ? "-" : "";
      return c + "P" + (o ? d + o + "Y" : "") + (s ? d + s + "M" : "") + (a ? p + a + "D" : "") + (u || h || l ? "T" : "") + (u ? m + u + "H" : "") + (h ? m + h + "M" : "") + (l ? m + l + "S" : "");
    }

    var qr = Pe.prototype;
    return qr.isValid = function () {
      return this._isValid;
    }, qr.abs = function () {
      var t = this._data;
      return this._milliseconds = vr(this._milliseconds), this._days = vr(this._days), this._months = vr(this._months), t.milliseconds = vr(t.milliseconds), t.seconds = vr(t.seconds), t.minutes = vr(t.minutes), t.hours = vr(t.hours), t.months = vr(t.months), t.years = vr(t.years), this;
    }, qr.add = function (t, e) {
      return gr(this, t, e, 1);
    }, qr.subtract = function (t, e) {
      return gr(this, t, e, -1);
    }, qr.as = function (t) {
      if (!this.isValid()) return NaN;
      var e,
          r,
          n = this._milliseconds;
      if ("month" === (t = D(t)) || "quarter" === t || "year" === t) switch (e = this._days + n / 864e5, r = this._months + wr(e), t) {
        case "month":
          return r;

        case "quarter":
          return r / 3;

        case "year":
          return r / 12;
      } else switch (e = this._days + Math.round(br(this._months)), t) {
        case "week":
          return e / 7 + n / 6048e5;

        case "day":
          return e + n / 864e5;

        case "hour":
          return 24 * e + n / 36e5;

        case "minute":
          return 1440 * e + n / 6e4;

        case "second":
          return 86400 * e + n / 1e3;

        case "millisecond":
          return Math.floor(864e5 * e) + n;

        default:
          throw new Error("Unknown unit " + t);
      }
    }, qr.asMilliseconds = Mr, qr.asSeconds = Sr, qr.asMinutes = Er, qr.asHours = kr, qr.asDays = Ar, qr.asWeeks = xr, qr.asMonths = Tr, qr.asQuarters = Nr, qr.asYears = Pr, qr.valueOf = function () {
      return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * S(this._months / 12) : NaN;
    }, qr._bubble = function () {
      var t,
          e,
          r,
          n,
          i,
          o = this._milliseconds,
          s = this._days,
          a = this._months,
          u = this._data;
      return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * yr(br(a) + s), s = 0, a = 0), u.milliseconds = o % 1e3, t = M(o / 1e3), u.seconds = t % 60, e = M(t / 60), u.minutes = e % 60, r = M(e / 60), u.hours = r % 24, s += M(r / 24), i = M(wr(s)), a += i, s -= yr(br(i)), n = M(a / 12), a %= 12, u.days = s, u.months = a, u.years = n, this;
    }, qr.clone = function () {
      return He(this);
    }, qr.get = function (t) {
      return t = D(t), this.isValid() ? this[t + "s"]() : NaN;
    }, qr.milliseconds = Or, qr.seconds = Ir, qr.minutes = Cr, qr.hours = Dr, qr.days = Lr, qr.weeks = function () {
      return M(this.days() / 7);
    }, qr.months = Ur, qr.years = jr, qr.humanize = function (t) {
      if (!this.isValid()) return this.localeData().invalidDate();

      var e = this.localeData(),
          r = function (t, e, r) {
        var n = He(t).abs(),
            i = Br(n.as("s")),
            o = Br(n.as("m")),
            s = Br(n.as("h")),
            a = Br(n.as("d")),
            u = Br(n.as("M")),
            h = Br(n.as("y")),
            l = i <= Fr.ss && ["s", i] || i < Fr.s && ["ss", i] || o <= 1 && ["m"] || o < Fr.m && ["mm", o] || s <= 1 && ["h"] || s < Fr.h && ["hh", s] || a <= 1 && ["d"] || a < Fr.d && ["dd", a] || u <= 1 && ["M"] || u < Fr.M && ["MM", u] || h <= 1 && ["y"] || ["yy", h];
        return l[2] = e, l[3] = +t > 0, l[4] = r, Hr.apply(null, l);
      }(this, !t, e);

      return t && (r = e.pastFuture(+this, r)), e.postformat(r);
    }, qr.toISOString = zr, qr.toString = zr, qr.toJSON = zr, qr.locale = Ze, qr.localeData = $e, qr.toIsoString = A("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", zr), qr.lang = Je, z("X", 0, 0, "unix"), z("x", 0, 0, "valueOf"), lt("x", ot), lt("X", /[+-]?\d+(\.\d{1,3})?/), pt("X", function (t, e, r) {
      r._d = new Date(1e3 * parseFloat(t, 10));
    }), pt("x", function (t, e, r) {
      r._d = new Date(S(t));
    }), i.version = "2.24.0", e = ke, i.fn = lr, i.min = function () {
      var t = [].slice.call(arguments, 0);
      return Te("isBefore", t);
    }, i.max = function () {
      var t = [].slice.call(arguments, 0);
      return Te("isAfter", t);
    }, i.now = function () {
      return Date.now ? Date.now() : +new Date();
    }, i.utc = d, i.unix = function (t) {
      return ke(1e3 * t);
    }, i.months = function (t, e) {
      return pr(t, e, "months");
    }, i.isDate = h, i.locale = oe, i.invalid = v, i.duration = He, i.isMoment = _, i.weekdays = function (t, e, r) {
      return mr(t, e, r, "weekdays");
    }, i.parseZone = function () {
      return ke.apply(null, arguments).parseZone();
    }, i.localeData = ae, i.isDuration = Re, i.monthsShort = function (t, e) {
      return pr(t, e, "monthsShort");
    }, i.weekdaysMin = function (t, e, r) {
      return mr(t, e, r, "weekdaysMin");
    }, i.defineLocale = se, i.updateLocale = function (t, e) {
      if (null != e) {
        var r,
            n,
            i = te;
        null != (n = ie(t)) && (i = n._config), e = R(i, e), (r = new O(e)).parentLocale = ee[t], ee[t] = r, oe(t);
      } else null != ee[t] && (null != ee[t].parentLocale ? ee[t] = ee[t].parentLocale : null != ee[t] && delete ee[t]);

      return ee[t];
    }, i.locales = function () {
      return x(ee);
    }, i.weekdaysShort = function (t, e, r) {
      return mr(t, e, r, "weekdaysShort");
    }, i.normalizeUnits = D, i.relativeTimeRounding = function (t) {
      return void 0 === t ? Br : "function" == typeof t && (Br = t, !0);
    }, i.relativeTimeThreshold = function (t, e) {
      return void 0 !== Fr[t] && (void 0 === e ? Fr[t] : (Fr[t] = e, "s" === t && (Fr.ss = e - 1), !0));
    }, i.calendarFormat = function (t, e) {
      var r = t.diff(e, "days", !0);
      return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
    }, i.prototype = lr, i.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      DATE: "YYYY-MM-DD",
      TIME: "HH:mm",
      TIME_SECONDS: "HH:mm:ss",
      TIME_MS: "HH:mm:ss.SSS",
      WEEK: "GGGG-[W]WW",
      MONTH: "YYYY-MM"
    }, i;
  }();
}),
    j = "0.0.4-beta.157",
    B = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function (t) {
    function e(...e) {
      if (null !== t) {
        var r = t;
        t = null, r.apply(this, e);
      }
    }

    return Object.assign(e, t), e;
  }, t.exports = e.default;
});
exports.version = j;
(0, _indexD3bd.e)(B);
var F = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function (t) {
    return function (...e) {
      if (null === t) throw new Error("Callback was already called.");
      var r = t;
      t = null, r.apply(this, e);
    };
  }, t.exports = e.default;
});
(0, _indexD3bd.e)(F);
var H = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function (t) {
    return function (...e) {
      var r = e.pop();
      return t.call(this, e, r);
    };
  }, t.exports = e.default;
});
(0, _indexD3bd.e)(H);
var G = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.fallback = o, e.wrap = s;
  var r,
      n = e.hasSetImmediate = "function" == typeof setImmediate && setImmediate,
      i = e.hasNextTick = "object" == typeof process && "function" == typeof process.nextTick;

  function o(t) {
    setTimeout(t, 0);
  }

  function s(t) {
    return (e, ...r) => t(() => e(...r));
  }

  r = n ? setImmediate : i ? process.nextTick : o, e.default = s(r);
});
(0, _indexD3bd.e)(G);
G.fallback, G.wrap, G.hasSetImmediate, G.hasNextTick;
var W = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function (t) {
    if ((0, z.isAsync)(t)) return function (...e) {
      const r = e.pop();
      return o(t.apply(this, e), r);
    };
    return (0, r.default)(function (e, r) {
      var n;

      try {
        n = t.apply(this, e);
      } catch (t) {
        return r(t);
      }

      if (n && "function" == typeof n.then) return o(n, r);
      r(null, n);
    });
  };
  var r = i(H),
      n = i(G);

  function i(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }

  function o(t, e) {
    return t.then(t => {
      s(e, null, t);
    }, t => {
      s(e, t && t.message ? t : new Error(t));
    });
  }

  function s(t, e, r) {
    try {
      t(e, r);
    } catch (t) {
      (0, n.default)(t => {
        throw t;
      }, t);
    }
  }

  t.exports = e.default;
});
(0, _indexD3bd.e)(W);
var z = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.isAsyncIterable = e.isAsyncGenerator = e.isAsync = void 0;
  var r,
      n = (r = W) && r.__esModule ? r : {
    default: r
  };

  function i(t) {
    return "AsyncFunction" === t[Symbol.toStringTag];
  }

  e.default = function (t) {
    if ("function" != typeof t) throw new Error("expected a function");
    return i(t) ? (0, n.default)(t) : t;
  }, e.isAsync = i, e.isAsyncGenerator = function (t) {
    return "AsyncGenerator" === t[Symbol.toStringTag];
  }, e.isAsyncIterable = function (t) {
    return "function" == typeof t[Symbol.asyncIterator];
  };
});
(0, _indexD3bd.e)(z);
z.isAsyncIterable, z.isAsyncGenerator, z.isAsync;
var q = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function (t, e = t.length) {
    if (!e) throw new Error("arity is undefined");
    return function (...r) {
      return "function" == typeof r[e - 1] ? t.apply(this, r) : new Promise((n, i) => {
        r[e - 1] = (t, ...e) => {
          if (t) return i(t);
          n(e.length > 1 ? e : e[0]);
        }, t.apply(this, r);
      });
    };
  }, t.exports = e.default;
});
(0, _indexD3bd.e)(q);
var K = (0, _indexD3bd.e)((0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = s(B),
      n = s(F),
      i = s(z),
      o = s(q);

  function s(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }

  e.default = (0, o.default)(function (t, e) {
    if (e = (0, r.default)(e), !Array.isArray(t)) return e(new Error("First argument to waterfall must be an array of functions"));
    if (!t.length) return e();
    var o = 0;

    function s(e) {
      (0, i.default)(t[o++])(...e, (0, n.default)(a));
    }

    function a(r, ...n) {
      if (!1 !== r) return r || o === t.length ? e(r, ...n) : void s(n);
    }

    s([]);
  }), t.exports = e.default;
}));
const Y = _indexD3bd.r.EventEmitter,
      V = _util_commonjsExternal6c.r.inherits;
var Z = J;

function J() {
  Y.call(this), this.isLocked = !0;
}

V(J, Y), J.prototype.go = function () {
  this.isLocked = !1, this.emit("unlock");
}, J.prototype.stop = function () {
  this.isLocked = !0, this.emit("lock");
}, J.prototype.await = function (t) {
  const e = this;
  e.isLocked ? e.once("unlock", t) : setTimeout(t);
};

var $ = function () {
  var t = new Date().getTime() * Math.pow(10, 3),
      e = Math.floor(Math.random() * Math.pow(10, 3));
  return t + e;
};

var X = function (t) {
  return (0, _subscriptionManager0493518a.e)({
    id: $(),
    jsonrpc: "2.0",
    params: []
  }, t);
};

const Q = _indexD3bd.r.EventEmitter,
      tt = _util_commonjsExternal6c.r.inherits,
      et = function () {};

var rt = nt;

function nt(t) {
  Q.call(this), this.setMaxListeners(30), t = t || {};
  const e = {
    sendAsync: this._handleAsync.bind(this)
  },
        r = t.blockTrackerProvider || e;
  this._blockTracker = t.blockTracker || new _subscriptionManager0493518a.E({
    provider: r,
    pollingInterval: t.pollingInterval || 4e3,
    setSkipCacheFlag: !0
  }), this._ready = new Z(), this.currentBlock = null, this._providers = [];
}

tt(nt, Q), nt.prototype.start = function (t = et) {
  const e = this;
  e._ready.go(), e._blockTracker.on("latest", t => {
    e._getBlockByNumber(t, (t, r) => {
      if (t) return void this.emit("error", t);
      if (!r) return void this.emit("error", new Error("Could not find block"));
      const n = (i = r, {
        number: _subscriptionManager0493518a.a.toBuffer(i.number),
        hash: _subscriptionManager0493518a.a.toBuffer(i.hash),
        parentHash: _subscriptionManager0493518a.a.toBuffer(i.parentHash),
        nonce: _subscriptionManager0493518a.a.toBuffer(i.nonce),
        mixHash: _subscriptionManager0493518a.a.toBuffer(i.mixHash),
        sha3Uncles: _subscriptionManager0493518a.a.toBuffer(i.sha3Uncles),
        logsBloom: _subscriptionManager0493518a.a.toBuffer(i.logsBloom),
        transactionsRoot: _subscriptionManager0493518a.a.toBuffer(i.transactionsRoot),
        stateRoot: _subscriptionManager0493518a.a.toBuffer(i.stateRoot),
        receiptsRoot: _subscriptionManager0493518a.a.toBuffer(i.receiptRoot || i.receiptsRoot),
        miner: _subscriptionManager0493518a.a.toBuffer(i.miner),
        difficulty: _subscriptionManager0493518a.a.toBuffer(i.difficulty),
        totalDifficulty: _subscriptionManager0493518a.a.toBuffer(i.totalDifficulty),
        size: _subscriptionManager0493518a.a.toBuffer(i.size),
        extraData: _subscriptionManager0493518a.a.toBuffer(i.extraData),
        gasLimit: _subscriptionManager0493518a.a.toBuffer(i.gasLimit),
        gasUsed: _subscriptionManager0493518a.a.toBuffer(i.gasUsed),
        timestamp: _subscriptionManager0493518a.a.toBuffer(i.timestamp),
        transactions: i.transactions
      });
      var i;
      e._setCurrentBlock(n), e.emit("rawBlock", r), e.emit("latest", r);
    });
  }), e._blockTracker.on("sync", e.emit.bind(e, "sync")), e._blockTracker.on("error", e.emit.bind(e, "error")), e._running = !0, e.emit("start");
}, nt.prototype.stop = function () {
  this._blockTracker.removeAllListeners(), this._running = !1, this.emit("stop");
}, nt.prototype.isRunning = function () {
  return this._running;
}, nt.prototype.addProvider = function (t, e) {
  const r = this;
  "number" == typeof e ? r._providers.splice(e, 0, t) : r._providers.push(t), t.setEngine(this);
}, nt.prototype.removeProvider = function (t) {
  const e = this._providers.indexOf(t);

  if (e < 0) throw new Error("Provider not found.");

  this._providers.splice(e, 1);
}, nt.prototype.send = function (t) {
  throw new Error("Web3ProviderEngine does not support synchronous requests.");
}, nt.prototype.sendAsync = function (t, e) {
  const r = this;

  r._ready.await(function () {
    Array.isArray(t) ? (0, _subscriptionManager0493518a.m)(t, r._handleAsync.bind(r), e) : r._handleAsync(t, e);
  });
}, nt.prototype._getBlockByNumber = function (t, e) {
  const r = X({
    method: "eth_getBlockByNumber",
    params: [t, !1],
    skipCache: !0
  });

  this._handleAsync(r, (t, r) => t ? e(t) : e(null, r.result));
}, nt.prototype._handleAsync = function (t, e) {
  var r = this,
      n = -1,
      i = null,
      o = null,
      s = [];

  function a(r, n) {
    o = r, i = n, (0, _subscriptionManager0493518a.b)(s, function (t, e) {
      t ? t(o, i, e) : e();
    }, function () {
      var r = {
        id: t.id,
        jsonrpc: t.jsonrpc,
        result: i
      };
      null != o ? (r.error = {
        message: o.stack || o.message || o,
        code: -32e3
      }, e(o, r)) : e(null, r);
    });
  }

  !function e(i) {
    if (n += 1, s.unshift(i), n >= r._providers.length) a(new Error('Request for method "' + t.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));else try {
      r._providers[n].handleRequest(t, e, a);
    } catch (t) {
      a(t);
    }
  }();
}, nt.prototype._setCurrentBlock = function (t) {
  this.currentBlock = t, this.emit("block", t);
};
var it = ot;

function ot() {}

ot.prototype.setEngine = function (t) {
  const e = this;
  e.engine || (e.engine = t, t.on("block", function (t) {
    e.currentBlock = t;
  }), t.on("start", function () {
    e.start();
  }), t.on("stop", function () {
    e.stop();
  }));
}, ot.prototype.handleRequest = function (t, e, r) {
  throw new Error("Subproviders should override `handleRequest`.");
}, ot.prototype.emitPayload = function (t, e) {
  this.engine.sendAsync(X(t), e);
}, ot.prototype.stop = function () {}, ot.prototype.start = function () {};

var st = function (t, e, r) {
  t.sendAsync(X({
    method: "eth_estimateGas",
    params: [e]
  }), function (t, e) {
    if (t) return "no contract code at given address" === t.message ? r(null, "0xcf08") : r(t);
    r(null, e.result);
  });
};

const at = _util_commonjsExternal6c.r.inherits,
      ut = /^[0-9A-Fa-f]+$/g;
var ht = lt;

function lt(t) {
  this.nonceLock = (0, _subscriptionManager0493518a.S)(1), t.getAccounts && (this.getAccounts = t.getAccounts), t.processTransaction && (this.processTransaction = t.processTransaction), t.processSignTransaction && (this.processSignTransaction = t.processSignTransaction), t.processMessage && (this.processMessage = t.processMessage), t.processPersonalMessage && (this.processPersonalMessage = t.processPersonalMessage), t.processTypedMessage && (this.processTypedMessage = t.processTypedMessage), this.approveTransaction = t.approveTransaction || this.autoApprove, this.approveMessage = t.approveMessage || this.autoApprove, this.approvePersonalMessage = t.approvePersonalMessage || this.autoApprove, this.approveTypedMessage = t.approveTypedMessage || this.autoApprove, this.signTransaction = t.signTransaction || dt("signTransaction"), this.signMessage = t.signMessage || dt("signMessage"), this.signPersonalMessage = t.signPersonalMessage || dt("signPersonalMessage"), this.signTypedMessage = t.signTypedMessage || dt("signTypedMessage"), t.recoverPersonalSignature && (this.recoverPersonalSignature = t.recoverPersonalSignature), t.publishTransaction && (this.publishTransaction = t.publishTransaction), this.estimateGas = t.estimateGas || this.estimateGas, this.getGasPrice = t.getGasPrice || this.getGasPrice;
}

function ft(t) {
  return t.toLowerCase();
}

function ct(t) {
  return "string" == typeof t && "0x" === t.slice(0, 2) && t.slice(2).match(ut);
}

function dt(t) {
  return function (e, r) {
    r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + t + '" fn in constructor options'));
  };
}

at(lt, it), lt.prototype.handleRequest = function (t, e, r) {
  const n = this;
  let i, o, s, u, l;

  switch (n._parityRequests = {}, n._parityRequestCount = 0, t.method) {
    case "eth_coinbase":
      return void n.getAccounts(function (t, e) {
        if (t) return r(t);
        let n = e[0] || null;
        r(null, n);
      });

    case "eth_accounts":
      return void n.getAccounts(function (t, e) {
        if (t) return r(t);
        r(null, e);
      });

    case "eth_sendTransaction":
      return i = t.params[0], void (0, _subscriptionManager0493518a.w)([t => n.validateTransaction(i, t), t => n.processTransaction(i, t)], r);

    case "eth_signTransaction":
      return i = t.params[0], void (0, _subscriptionManager0493518a.w)([t => n.validateTransaction(i, t), t => n.processSignTransaction(i, t)], r);

    case "eth_sign":
      return l = t.params[0], u = t.params[1], s = t.params[2] || {}, o = (0, _subscriptionManager0493518a.e)(s, {
        from: l,
        data: u
      }), void (0, _subscriptionManager0493518a.w)([t => n.validateMessage(o, t), t => n.processMessage(o, t)], r);

    case "personal_sign":
      return function () {
        const e = t.params[0];

        if (function (t) {
          const e = _subscriptionManager0493518a.a.addHexPrefix(t);

          return !_subscriptionManager0493518a.a.isValidAddress(e) && ct(t);
        }(t.params[1]) && function (t) {
          const e = _subscriptionManager0493518a.a.addHexPrefix(t);

          return _subscriptionManager0493518a.a.isValidAddress(e);
        }(e)) {
          let e = "The eth_personalSign method requires params ordered ";
          e += "[message, address]. This was previously handled incorrectly, ", e += "and has been corrected automatically. ", e += "Please switch this param order for smooth behavior in the future.", console.warn(e), l = t.params[0], u = t.params[1];
        } else u = t.params[0], l = t.params[1];

        s = t.params[2] || {}, o = (0, _subscriptionManager0493518a.e)(s, {
          from: l,
          data: u
        }), (0, _subscriptionManager0493518a.w)([t => n.validatePersonalMessage(o, t), t => n.processPersonalMessage(o, t)], r);
      }();

    case "personal_ecRecover":
      return function () {
        u = t.params[0];
        let e = t.params[1];
        s = t.params[2] || {}, o = (0, _subscriptionManager0493518a.e)(s, {
          sig: e,
          data: u
        }), n.recoverPersonalSignature(o, r);
      }();

    case "eth_signTypedData":
      return u = t.params[0], l = t.params[1], s = t.params[2] || {}, o = (0, _subscriptionManager0493518a.e)(s, {
        from: l,
        data: u
      }), void (0, _subscriptionManager0493518a.w)([t => n.validateTypedMessage(o, t), t => n.processTypedMessage(o, t)], r);

    case "parity_postTransaction":
      return i = t.params[0], void n.parityPostTransaction(i, r);

    case "parity_postSign":
      return l = t.params[0], u = t.params[1], void n.parityPostSign(l, u, r);

    case "parity_checkRequest":
      return function () {
        const e = t.params[0];
        n.parityCheckRequest(e, r);
      }();

    case "parity_defaultAccount":
      return void n.getAccounts(function (t, e) {
        if (t) return r(t);
        const n = e[0] || null;
        r(null, n);
      });

    default:
      return void e();
  }
}, lt.prototype.getAccounts = function (t) {
  t(null, []);
}, lt.prototype.processTransaction = function (t, e) {
  const r = this;
  (0, _subscriptionManager0493518a.w)([e => r.approveTransaction(t, e), (t, e) => r.checkApproval("transaction", t, e), e => r.finalizeAndSubmitTx(t, e)], e);
}, lt.prototype.processSignTransaction = function (t, e) {
  const r = this;
  (0, _subscriptionManager0493518a.w)([e => r.approveTransaction(t, e), (t, e) => r.checkApproval("transaction", t, e), e => r.finalizeTx(t, e)], e);
}, lt.prototype.processMessage = function (t, e) {
  const r = this;
  (0, _subscriptionManager0493518a.w)([e => r.approveMessage(t, e), (t, e) => r.checkApproval("message", t, e), e => r.signMessage(t, e)], e);
}, lt.prototype.processPersonalMessage = function (t, e) {
  const r = this;
  (0, _subscriptionManager0493518a.w)([e => r.approvePersonalMessage(t, e), (t, e) => r.checkApproval("message", t, e), e => r.signPersonalMessage(t, e)], e);
}, lt.prototype.processTypedMessage = function (t, e) {
  const r = this;
  (0, _subscriptionManager0493518a.w)([e => r.approveTypedMessage(t, e), (t, e) => r.checkApproval("message", t, e), e => r.signTypedMessage(t, e)], e);
}, lt.prototype.autoApprove = function (t, e) {
  e(null, !0);
}, lt.prototype.checkApproval = function (t, e, r) {
  r(e ? null : new Error("User denied " + t + " signature."));
}, lt.prototype.parityPostTransaction = function (t, e) {
  const r = this,
        n = `0x${r._parityRequestCount.toString(16)}`;
  r._parityRequestCount++, r.emitPayload({
    method: "eth_sendTransaction",
    params: [t]
  }, function (t, e) {
    if (t) return void (r._parityRequests[n] = {
      error: t
    });
    const i = e.result;
    r._parityRequests[n] = i;
  }), e(null, n);
}, lt.prototype.parityPostSign = function (t, e, r) {
  const n = this,
        i = `0x${n._parityRequestCount.toString(16)}`;
  n._parityRequestCount++, n.emitPayload({
    method: "eth_sign",
    params: [t, e]
  }, function (t, e) {
    if (t) return void (n._parityRequests[i] = {
      error: t
    });
    const r = e.result;
    n._parityRequests[i] = r;
  }), r(null, i);
}, lt.prototype.parityCheckRequest = function (t, e) {
  const r = this._parityRequests[t] || null;
  return r ? r.error ? e(r.error) : void e(null, r) : e(null, null);
}, lt.prototype.recoverPersonalSignature = function (t, e) {
  let r;

  try {
    r = _subscriptionManager0493518a.s.recoverPersonalSignature(t);
  } catch (t) {
    return e(t);
  }

  e(null, r);
}, lt.prototype.validateTransaction = function (t, e) {
  if (void 0 === t.from) return e(new Error("Undefined address - from address required to sign transaction."));
  this.validateSender(t.from, function (r, n) {
    return r ? e(r) : n ? void e() : e(new Error(`Unknown address - unable to sign transaction for this address: "${t.from}"`));
  });
}, lt.prototype.validateMessage = function (t, e) {
  if (void 0 === t.from) return e(new Error("Undefined address - from address required to sign message."));
  this.validateSender(t.from, function (r, n) {
    return r ? e(r) : n ? void e() : e(new Error(`Unknown address - unable to sign message for this address: "${t.from}"`));
  });
}, lt.prototype.validatePersonalMessage = function (t, e) {
  return void 0 === t.from ? e(new Error("Undefined address - from address required to sign personal message.")) : void 0 === t.data ? e(new Error("Undefined message - message required to sign personal message.")) : ct(t.data) ? void this.validateSender(t.from, function (r, n) {
    return r ? e(r) : n ? void e() : e(new Error(`Unknown address - unable to sign message for this address: "${t.from}"`));
  }) : e(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."));
}, lt.prototype.validateTypedMessage = function (t, e) {
  return void 0 === t.from ? e(new Error("Undefined address - from address required to sign typed data.")) : void 0 === t.data ? e(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(t.from, function (r, n) {
    return r ? e(r) : n ? void e() : e(new Error(`Unknown address - unable to sign message for this address: "${t.from}"`));
  });
}, lt.prototype.validateSender = function (t, e) {
  if (!t) return e(null, !1);
  this.getAccounts(function (r, n) {
    if (r) return e(r);
    const i = -1 !== n.map(ft).indexOf(t.toLowerCase());
    e(null, i);
  });
}, lt.prototype.finalizeAndSubmitTx = function (t, e) {
  const r = this;
  r.nonceLock.take(function () {
    (0, _subscriptionManager0493518a.w)([r.fillInTxExtras.bind(r, t), r.signTransaction.bind(r), r.publishTransaction.bind(r)], function (t, n) {
      if (r.nonceLock.leave(), t) return e(t);
      e(null, n);
    });
  });
}, lt.prototype.finalizeTx = function (t, e) {
  const r = this;
  r.nonceLock.take(function () {
    (0, _subscriptionManager0493518a.w)([r.fillInTxExtras.bind(r, t), r.signTransaction.bind(r)], function (n, i) {
      if (r.nonceLock.leave(), n) return e(n);
      e(null, {
        raw: i,
        tx: t
      });
    });
  });
}, lt.prototype.publishTransaction = function (t, e) {
  this.emitPayload({
    method: "eth_sendRawTransaction",
    params: [t]
  }, function (t, r) {
    if (t) return e(t);
    e(null, r.result);
  });
}, lt.prototype.estimateGas = function (t, e) {
  st(this.engine, t, e);
}, lt.prototype.getGasPrice = function (t) {
  this.emitPayload({
    method: "eth_gasPrice",
    params: []
  }, function (e, r) {
    if (e) return t(e);
    t(null, r.result);
  });
}, lt.prototype.fillInTxExtras = function (t, e) {
  const r = this,
        n = t.from,
        i = {};
  void 0 === t.gasPrice && (i.gasPrice = r.getGasPrice.bind(r)), void 0 === t.nonce && (i.nonce = r.emitPayload.bind(r, {
    method: "eth_getTransactionCount",
    params: [n, "pending"]
  })), void 0 === t.gas && (i.gas = r.estimateGas.bind(r, function (t) {
    return {
      from: t.from,
      to: t.to,
      value: t.value,
      data: t.data,
      gas: t.gas,
      gasPrice: t.gasPrice,
      nonce: t.nonce
    };
  }(t))), (0, _subscriptionManager0493518a.p)(i, function (r, n) {
    if (r) return e(r);
    const i = {};
    n.gasPrice && (i.gasPrice = n.gasPrice), n.nonce && (i.nonce = n.nonce.result), n.gas && (i.gas = n.gas), e(null, (0, _subscriptionManager0493518a.e)(t, i));
  });
};

var pt = "undefined" != typeof window ? window : void 0 !== _indexD3bd.f ? _indexD3bd.f : "undefined" != typeof self ? self : {},
    mt = function (t) {
  var e = vt.call(t);
  return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt);
},
    vt = Object.prototype.toString;

var gt = function (t) {
  return t.replace(/^\s+|\s+$/g, "");
},
    yt = _t,
    wt = _t;

function bt(t, e, r) {
  var n = t;
  return mt(e) ? (r = e, "string" == typeof t && (n = {
    uri: t
  })) : n = (0, _subscriptionManager0493518a.e)(e, {
    uri: t
  }), n.callback = r, n;
}

function _t(t, e, r) {
  return Mt(e = bt(t, e, r));
}

function Mt(t) {
  if (void 0 === t.callback) throw new Error("callback argument missing");

  var e = !1,
      r = function (r, n, i) {
    e || (e = !0, t.callback(r, n, i));
  };

  function n() {
    var t = void 0;
    if (t = u.response ? u.response : u.responseText || function (t) {
      try {
        if ("document" === t.responseType) return t.responseXML;
        var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
        if ("" === t.responseType && !e) return t.responseXML;
      } catch (t) {}

      return null;
    }(u), m) try {
      t = JSON.parse(t);
    } catch (t) {}
    return t;
  }

  function i(t) {
    return clearTimeout(h), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, r(t, v);
  }

  function o() {
    if (!a) {
      var e;
      clearTimeout(h), e = t.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
      var i = v,
          o = null;
      return 0 !== e ? (i = {
        body: n(),
        statusCode: e,
        method: f,
        headers: {},
        url: l,
        rawRequest: u
      }, u.getAllResponseHeaders && (i.headers = function (t) {
        if (!t) return {};

        for (var e, r = {}, n = gt(t).split("\n"), i = 0; i < n.length; i++) {
          var o = n[i],
              s = o.indexOf(":"),
              a = gt(o.slice(0, s)).toLowerCase(),
              u = gt(o.slice(s + 1));
          void 0 === r[a] ? r[a] = u : (e = r[a], "[object Array]" === Object.prototype.toString.call(e) ? r[a].push(u) : r[a] = [r[a], u]);
        }

        return r;
      }(u.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"), r(o, i, i.body);
    }
  }

  var s,
      a,
      u = t.xhr || null;
  u || (u = t.cors || t.useXDR ? new _t.XDomainRequest() : new _t.XMLHttpRequest());
  var h,
      l = u.url = t.uri || t.url,
      f = u.method = t.method || "GET",
      c = t.body || t.data,
      d = u.headers = t.headers || {},
      p = !!t.sync,
      m = !1,
      v = {
    body: void 0,
    headers: {},
    statusCode: 0,
    method: f,
    url: l,
    rawRequest: u
  };
  if ("json" in t && !1 !== t.json && (m = !0, d.accept || d.Accept || (d.Accept = "application/json"), "GET" !== f && "HEAD" !== f && (d["content-type"] || d["Content-Type"] || (d["Content-Type"] = "application/json"), c = JSON.stringify(!0 === t.json ? c : t.json))), u.onreadystatechange = function () {
    4 === u.readyState && setTimeout(o, 0);
  }, u.onload = o, u.onerror = i, u.onprogress = function () {}, u.onabort = function () {
    a = !0;
  }, u.ontimeout = i, u.open(f, l, !p, t.username, t.password), p || (u.withCredentials = !!t.withCredentials), !p && t.timeout > 0 && (h = setTimeout(function () {
    if (!a) {
      a = !0, u.abort("timeout");
      var t = new Error("XMLHttpRequest timeout");
      t.code = "ETIMEDOUT", i(t);
    }
  }, t.timeout)), u.setRequestHeader) for (s in d) d.hasOwnProperty(s) && u.setRequestHeader(s, d[s]);else if (t.headers && !function (t) {
    for (var e in t) if (t.hasOwnProperty(e)) return !1;

    return !0;
  }(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
  return "responseType" in t && (u.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(u), u.send(c || null), u;
}

_t.XMLHttpRequest = pt.XMLHttpRequest || function () {}, _t.XDomainRequest = "withCredentials" in new _t.XMLHttpRequest() ? _t.XMLHttpRequest : pt.XDomainRequest, function (t, e) {
  for (var r = 0; r < t.length; r++) e(t[r]);
}(["get", "put", "post", "patch", "head", "delete"], function (t) {
  _t["delete" === t ? "del" : t] = function (e, r, n) {
    return (r = bt(e, r, n)).method = t.toUpperCase(), Mt(r);
  };
}), yt.default = wt;
var St = Object.freeze({
  __proto__: null,
  default: {}
}),
    Et = xt;
xt.default = xt, xt.stable = Nt, xt.stableStringify = Nt;
var kt = [],
    At = [];

function xt(t, e, r) {
  var n;

  for (!function t(e, r, n, i) {
    var o;

    if ("object" == typeof e && null !== e) {
      for (o = 0; o < n.length; o++) if (n[o] === e) {
        var s = Object.getOwnPropertyDescriptor(i, r);
        return void (void 0 !== s.get ? s.configurable ? (Object.defineProperty(i, r, {
          value: "[Circular]"
        }), kt.push([i, r, e, s])) : At.push([e, r]) : (i[r] = "[Circular]", kt.push([i, r, e])));
      }

      if (n.push(e), Array.isArray(e)) for (o = 0; o < e.length; o++) t(e[o], o, n, e);else {
        var a = Object.keys(e);

        for (o = 0; o < a.length; o++) {
          var u = a[o];
          t(e[u], u, n, e);
        }
      }
      n.pop();
    }
  }(t, "", [], void 0), n = 0 === At.length ? JSON.stringify(t, e, r) : JSON.stringify(t, Pt(e), r); 0 !== kt.length;) {
    var i = kt.pop();
    4 === i.length ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2];
  }

  return n;
}

function Tt(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}

function Nt(t, e, r) {
  var n,
      i = function t(e, r, n, i) {
    var o;

    if ("object" == typeof e && null !== e) {
      for (o = 0; o < n.length; o++) if (n[o] === e) {
        var s = Object.getOwnPropertyDescriptor(i, r);
        return void (void 0 !== s.get ? s.configurable ? (Object.defineProperty(i, r, {
          value: "[Circular]"
        }), kt.push([i, r, e, s])) : At.push([e, r]) : (i[r] = "[Circular]", kt.push([i, r, e])));
      }

      if ("function" == typeof e.toJSON) return;
      if (n.push(e), Array.isArray(e)) for (o = 0; o < e.length; o++) t(e[o], o, n, e);else {
        var a = {},
            u = Object.keys(e).sort(Tt);

        for (o = 0; o < u.length; o++) {
          var h = u[o];
          t(e[h], h, n, e), a[h] = e[h];
        }

        if (void 0 === i) return a;
        kt.push([i, r, e]), i[r] = a;
      }
      n.pop();
    }
  }(t, "", [], void 0) || t;

  for (n = 0 === At.length ? JSON.stringify(i, e, r) : JSON.stringify(i, Pt(e), r); 0 !== kt.length;) {
    var o = kt.pop();
    4 === o.length ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2];
  }

  return n;
}

function Pt(t) {
  return t = void 0 !== t ? t : function (t, e) {
    return e;
  }, function (e, r) {
    if (At.length > 0) for (var n = 0; n < At.length; n++) {
      var i = At[n];

      if (i[1] === e && i[0] === r) {
        r = "[Circular]", At.splice(n, 1);
        break;
      }
    }
    return t.call(this, e, r);
  };
}

class Rt extends Error {
  constructor(t, e, r) {
    if (!Number.isInteger(t)) throw new Error('"code" must be an integer.');
    if (!e || "string" != typeof e) throw new Error('"message" must be a nonempty string.');
    super(e), this.code = t, void 0 !== r && (this.data = r);
  }

  serialize() {
    const t = {
      code: this.code,
      message: this.message
    };
    return void 0 !== this.data && (t.data = this.data), this.stack && (t.stack = this.stack), t;
  }

  toString() {
    return Et(this.serialize(), Ot, 2);
  }

}

function Ot(t, e) {
  if ("[Circular]" !== e) return e;
}

var It = {
  JsonRpcError: Rt,
  EthJsonRpcError: class extends Rt {
    constructor(t, e, r) {
      if (!function (t) {
        return Number.isInteger(t) && t >= 1e3 && t <= 4999;
      }(t)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
      super(t, e, r);
    }

  }
},
    Ct = Object.freeze({
  __proto__: null,
  default: {
    4001: {
      standard: "EIP 1193",
      message: "User rejected the request."
    },
    4100: {
      standard: "EIP 1193",
      message: "The requested account and/or method has not been authorized by the user."
    },
    4200: {
      standard: "EIP 1193",
      message: "The requested method is not supported by this Ethereum provider."
    },
    "-32700": {
      standard: "JSON RPC 2.0",
      message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
      standard: "JSON RPC 2.0",
      message: "The JSON sent is not a valid Request object."
    },
    "-32601": {
      standard: "JSON RPC 2.0",
      message: "The method does not exist / is not available."
    },
    "-32602": {
      standard: "JSON RPC 2.0",
      message: "Invalid method parameter(s)."
    },
    "-32603": {
      standard: "JSON RPC 2.0",
      message: "Internal JSON-RPC error."
    }
  }
}),
    Dt = {
  parse: -32700,
  invalidRequest: -32600,
  methodNotFound: -32601,
  invalidParams: -32602,
  internal: -32603
},
    Lt = {
  userRejectedRequest: 4001,
  unauthorized: 4100,
  unsupportedMethod: 4200
},
    Ut = {
  jsonRpc: Dt,
  eth: Lt
},
    jt = Object.freeze({
  __proto__: null,
  jsonRpc: Dt,
  eth: Lt,
  default: Ut
}),
    Bt = (0, _indexD3bd.h)(Ct),
    Ft = (0, _indexD3bd.h)(jt);
const Ht = Ft.jsonRpc.internal,
      {
  JsonRpcError: Gt
} = It,
      Wt = {
  code: Ht,
  message: zt(Ht)
};

function zt(t, e = "Unspecified error message. This is  bug, please report it.") {
  if (Number.isInteger(t)) {
    const e = t.toString();
    if (Bt[e]) return Bt[e].message;
    if (Kt(t)) return "Unspecified server error.";
  }

  return e;
}

function qt(t) {
  if (!Number.isInteger(t)) return !1;
  const e = t.toString();
  return !!Bt[e] || !!Kt(t);
}

function Kt(t) {
  return t >= -32099 && t <= -32e3;
}

function Yt(t) {
  return t && "object" == typeof t && !Array.isArray(t) ? Object.assign({}, t) : t;
}

var Vt = {
  getMessageFromCode: zt,
  isValidCode: qt,
  serializeError: function (t, e = Wt) {
    if (!e || !Number.isInteger(e.code) || "string" != typeof e.message) throw new Error("fallbackError must contain integer number code and string message.");
    if ("object" == typeof t && t instanceof Gt) return t.serialize();
    const r = {};
    return t && qt(t.code) ? (r.code = t.code, t.message && "string" == typeof t.message ? (r.message = t.message, t.hasOwnProperty("data") && (r.data = t.data)) : (r.message = zt(r.code), r.data = {
      originalError: Yt(t)
    })) : (r.code = e.code, r.message = t && t.message ? t.message : e.message, r.data = {
      originalError: Yt(t)
    }), t && t.stack && (r.stack = t.stack), r;
  },
  JSON_RPC_SERVER_ERROR_MESSAGE: "Unspecified server error."
};
const {
  JsonRpcError: Zt,
  EthJsonRpcError: Jt
} = It,
      {
  getMessageFromCode: $t
} = Vt;
var Xt = {
  parse: (t, e) => Qt(Ft.jsonRpc.parse, t, e),
  invalidRequest: (t, e) => Qt(Ft.jsonRpc.invalidRequest, t, e),
  invalidParams: (t, e) => Qt(Ft.jsonRpc.invalidParams, t, e),
  methodNotFound: (t, e) => Qt(Ft.jsonRpc.methodNotFound, t, e),
  internal: (t, e) => Qt(Ft.jsonRpc.internal, t, e),
  server: (t, e, r) => {
    if (!Number.isInteger(t) || t > -32e3 || t < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32000');
    return Qt(t, e, r);
  },
  eth: {
    userRejectedRequest: (t, e) => te(Ft.eth.userRejectedRequest, t, e),
    unauthorized: (t, e) => te(Ft.eth.unauthorized, t, e),
    unsupportedMethod: (t, e) => te(Ft.eth.unsupportedMethod, t, e),
    custom: (t, e, r) => {
      if (!e || "string" != typeof e) throw new Error('"message" must be a nonempty string');
      return new Jt(t, e, r);
    }
  }
};

function Qt(t, e, r) {
  return new Zt(t, e || $t(t), r);
}

function te(t, e, r) {
  return new Jt(t, e || $t(t), r);
}

const {
  JsonRpcError: ee,
  EthJsonRpcError: re
} = It,
      {
  serializeError: ne,
  getMessageFromCode: ie
} = Vt;
var oe = {
  errors: Xt,
  JsonRpcError: ee,
  EthJsonRpcError: re,
  serializeError: ne,
  getMessageFromCode: ie,
  ERROR_CODES: Ft
},
    se = (0, _indexD3bd.h)(St);
const ae = true ? yt : se,
      ue = _util_commonjsExternal6c.r.inherits,
      {
  errors: he
} = oe;
var le = fe;

function fe(t) {
  this.rpcUrl = t.rpcUrl;
}

ue(fe, it), fe.prototype.handleRequest = function (t, e, r) {
  const n = this.rpcUrl;
  let i = X(t);
  ae({
    uri: n,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(i),
    rejectUnauthorized: !1,
    timeout: 2e4
  }, function (t, e, n) {
    if (t) return r(he.internal(t));

    switch (e.statusCode) {
      case 405:
        return r(he.methodNotFound());

      case 504:
        return function () {
          let t = "Gateway timeout. The request took too long to process. ";
          return t += "This can happen when querying logs over too wide a block range.", r(he.internal("Gateway timeout. The request took too long to process. This can happen when querying logs over too wide a block range."));
        }();

      case 429:
        return function () {
          const t = new Error("Too Many Requests");
          return r(he.internal(t));
        }();

      default:
        if (200 != e.statusCode) return r(he.internal(e.body));
    }

    let i;

    try {
      i = JSON.parse(n);
    } catch (t) {
      return console.error(t.stack), r(he.internal(t));
    }

    if (i.error) return r(i.error);
    r(null, i.result);
  });
};
var ce = class extends it {
  constructor(t) {
    if (super(), !t) throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");
    this._constructorFn = t;
  }

  setEngine(t) {
    if (this.middleware) throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");

    const e = t._blockTracker,
          r = this._constructorFn({
      engine: t,
      provider: t,
      blockTracker: e
    });

    if (!r) throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");
    if ("function" != typeof r) throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");
    this.middleware = r;
  }

  handleRequest(t, e, r) {
    const n = {
      id: t.id
    };
    this.middleware(t, n, function (t) {
      e((e, r, i) => {
        e ? (delete n.result, n.error = {
          message: e.message || e
        }) : n.result = r, t ? t(i) : i();
      });
    }, function (t) {
      if (t) return r(t);
      r(null, n.result);
    });
  }

};
var de = class extends ce {
  constructor() {
    super(({
      blockTracker: t,
      provider: e,
      engine: r
    }) => {
      const {
        events: n,
        middleware: i
      } = (0, _subscriptionManager0493518a.c)({
        blockTracker: t,
        provider: e
      });
      return n.on("notification", t => r.emit("data", null, t)), i;
    });
  }

};
var pe = class extends ce {
  constructor() {
    super(({
      blockTracker: t,
      provider: e,
      engine: r
    }) => (0, _subscriptionManager0493518a.d)({
      blockTracker: t,
      provider: e
    }));
  }

};

const me = (t, e) => function (...r) {
  return new (0, e.promiseModule)((n, i) => {
    e.multiArgs ? r.push((...t) => {
      e.errorFirst ? t[0] ? i(t) : (t.shift(), n(t)) : n(t);
    }) : e.errorFirst ? r.push((t, e) => {
      t ? i(t) : n(e);
    }) : r.push(n), t.apply(this, r);
  });
};

var ve = (t, e) => {
  e = Object.assign({
    exclude: [/.+(Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise
  }, e);
  const r = typeof t;
  if (null === t || "object" !== r && "function" !== r) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null === t ? "null" : r}\``);

  const n = t => {
    const r = e => "string" == typeof e ? t === e : e.test(t);

    return e.include ? e.include.some(r) : !e.exclude.some(r);
  };

  let i;
  i = "function" === r ? function (...r) {
    return e.excludeMain ? t(...r) : me(t, e).apply(this, r);
  } : Object.create(Object.getPrototypeOf(t));

  for (const r in t) {
    const o = t[r];
    i[r] = "function" == typeof o && n(r) ? me(o, e) : o;
  }

  return i;
},
    ge = (0, _indexD3bd.d)(function (t, e) {
  !function () {
    var n = "object" == typeof self && self.self === self && self || "object" == typeof _indexD3bd.f && _indexD3bd.f.global === _indexD3bd.f && _indexD3bd.f || this || {},
        i = n._,
        o = Array.prototype,
        s = Object.prototype,
        a = "undefined" != typeof Symbol ? Symbol.prototype : null,
        u = o.push,
        h = o.slice,
        l = s.toString,
        f = s.hasOwnProperty,
        c = Array.isArray,
        d = Object.keys,
        p = Object.create,
        m = function () {},
        v = function (t) {
      return t instanceof v ? t : this instanceof v ? void (this._wrapped = t) : new v(t);
    };

    e.nodeType ? n._ = v : (!t.nodeType && t.exports && (e = t.exports = v), e._ = v), v.VERSION = "1.9.1";

    var g,
        y = function (t, e, r) {
      if (void 0 === e) return t;

      switch (null == r ? 3 : r) {
        case 1:
          return function (r) {
            return t.call(e, r);
          };

        case 3:
          return function (r, n, i) {
            return t.call(e, r, n, i);
          };

        case 4:
          return function (r, n, i, o) {
            return t.call(e, r, n, i, o);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    },
        w = function (t, e, r) {
      return v.iteratee !== g ? v.iteratee(t, e) : null == t ? v.identity : v.isFunction(t) ? y(t, e, r) : v.isObject(t) && !v.isArray(t) ? v.matcher(t) : v.property(t);
    };

    v.iteratee = g = function (t, e) {
      return w(t, e, 1 / 0);
    };

    var b = function (t, e) {
      return e = null == e ? t.length - 1 : +e, function () {
        for (var r = Math.max(arguments.length - e, 0), n = Array(r), i = 0; i < r; i++) n[i] = arguments[i + e];

        switch (e) {
          case 0:
            return t.call(this, n);

          case 1:
            return t.call(this, arguments[0], n);

          case 2:
            return t.call(this, arguments[0], arguments[1], n);
        }

        var o = Array(e + 1);

        for (i = 0; i < e; i++) o[i] = arguments[i];

        return o[e] = n, t.apply(this, o);
      };
    },
        _ = function (t) {
      if (!v.isObject(t)) return {};
      if (p) return p(t);
      m.prototype = t;
      var e = new m();
      return m.prototype = null, e;
    },
        M = function (t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    },
        S = function (t, e) {
      return null != t && f.call(t, e);
    },
        E = function (t, e) {
      for (var r = e.length, n = 0; n < r; n++) {
        if (null == t) return;
        t = t[e[n]];
      }

      return r ? t : void 0;
    },
        k = Math.pow(2, 53) - 1,
        A = M("length"),
        x = function (t) {
      var e = A(t);
      return "number" == typeof e && e >= 0 && e <= k;
    };

    v.each = v.forEach = function (t, e, r) {
      var n, i;
      if (e = y(e, r), x(t)) for (n = 0, i = t.length; n < i; n++) e(t[n], n, t);else {
        var o = v.keys(t);

        for (n = 0, i = o.length; n < i; n++) e(t[o[n]], o[n], t);
      }
      return t;
    }, v.map = v.collect = function (t, e, r) {
      e = w(e, r);

      for (var n = !x(t) && v.keys(t), i = (n || t).length, o = Array(i), s = 0; s < i; s++) {
        var a = n ? n[s] : s;
        o[s] = e(t[a], a, t);
      }

      return o;
    };

    var T = function (t) {
      var e = function (e, r, n, i) {
        var o = !x(e) && v.keys(e),
            s = (o || e).length,
            a = t > 0 ? 0 : s - 1;

        for (i || (n = e[o ? o[a] : a], a += t); a >= 0 && a < s; a += t) {
          var u = o ? o[a] : a;
          n = r(n, e[u], u, e);
        }

        return n;
      };

      return function (t, r, n, i) {
        var o = arguments.length >= 3;
        return e(t, y(r, i, 4), n, o);
      };
    };

    v.reduce = v.foldl = v.inject = T(1), v.reduceRight = v.foldr = T(-1), v.find = v.detect = function (t, e, r) {
      var n = (x(t) ? v.findIndex : v.findKey)(t, e, r);
      if (void 0 !== n && -1 !== n) return t[n];
    }, v.filter = v.select = function (t, e, r) {
      var n = [];
      return e = w(e, r), v.each(t, function (t, r, i) {
        e(t, r, i) && n.push(t);
      }), n;
    }, v.reject = function (t, e, r) {
      return v.filter(t, v.negate(w(e)), r);
    }, v.every = v.all = function (t, e, r) {
      e = w(e, r);

      for (var n = !x(t) && v.keys(t), i = (n || t).length, o = 0; o < i; o++) {
        var s = n ? n[o] : o;
        if (!e(t[s], s, t)) return !1;
      }

      return !0;
    }, v.some = v.any = function (t, e, r) {
      e = w(e, r);

      for (var n = !x(t) && v.keys(t), i = (n || t).length, o = 0; o < i; o++) {
        var s = n ? n[o] : o;
        if (e(t[s], s, t)) return !0;
      }

      return !1;
    }, v.contains = v.includes = v.include = function (t, e, r, n) {
      return x(t) || (t = v.values(t)), ("number" != typeof r || n) && (r = 0), v.indexOf(t, e, r) >= 0;
    }, v.invoke = b(function (t, e, r) {
      var n, i;
      return v.isFunction(e) ? i = e : v.isArray(e) && (n = e.slice(0, -1), e = e[e.length - 1]), v.map(t, function (t) {
        var o = i;

        if (!o) {
          if (n && n.length && (t = E(t, n)), null == t) return;
          o = t[e];
        }

        return null == o ? o : o.apply(t, r);
      });
    }), v.pluck = function (t, e) {
      return v.map(t, v.property(e));
    }, v.where = function (t, e) {
      return v.filter(t, v.matcher(e));
    }, v.findWhere = function (t, e) {
      return v.find(t, v.matcher(e));
    }, v.max = function (t, e, r) {
      var n,
          i,
          o = -1 / 0,
          s = -1 / 0;
      if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) for (var a = 0, u = (t = x(t) ? t : v.values(t)).length; a < u; a++) null != (n = t[a]) && n > o && (o = n);else e = w(e, r), v.each(t, function (t, r, n) {
        ((i = e(t, r, n)) > s || i === -1 / 0 && o === -1 / 0) && (o = t, s = i);
      });
      return o;
    }, v.min = function (t, e, r) {
      var n,
          i,
          o = 1 / 0,
          s = 1 / 0;
      if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) for (var a = 0, u = (t = x(t) ? t : v.values(t)).length; a < u; a++) null != (n = t[a]) && n < o && (o = n);else e = w(e, r), v.each(t, function (t, r, n) {
        ((i = e(t, r, n)) < s || i === 1 / 0 && o === 1 / 0) && (o = t, s = i);
      });
      return o;
    }, v.shuffle = function (t) {
      return v.sample(t, 1 / 0);
    }, v.sample = function (t, e, r) {
      if (null == e || r) return x(t) || (t = v.values(t)), t[v.random(t.length - 1)];
      var n = x(t) ? v.clone(t) : v.values(t),
          i = A(n);
      e = Math.max(Math.min(e, i), 0);

      for (var o = i - 1, s = 0; s < e; s++) {
        var a = v.random(s, o),
            u = n[s];
        n[s] = n[a], n[a] = u;
      }

      return n.slice(0, e);
    }, v.sortBy = function (t, e, r) {
      var n = 0;
      return e = w(e, r), v.pluck(v.map(t, function (t, r, i) {
        return {
          value: t,
          index: n++,
          criteria: e(t, r, i)
        };
      }).sort(function (t, e) {
        var r = t.criteria,
            n = e.criteria;

        if (r !== n) {
          if (r > n || void 0 === r) return 1;
          if (r < n || void 0 === n) return -1;
        }

        return t.index - e.index;
      }), "value");
    };

    var N = function (t, e) {
      return function (r, n, i) {
        var o = e ? [[], []] : {};
        return n = w(n, i), v.each(r, function (e, i) {
          var s = n(e, i, r);
          t(o, e, s);
        }), o;
      };
    };

    v.groupBy = N(function (t, e, r) {
      S(t, r) ? t[r].push(e) : t[r] = [e];
    }), v.indexBy = N(function (t, e, r) {
      t[r] = e;
    }), v.countBy = N(function (t, e, r) {
      S(t, r) ? t[r]++ : t[r] = 1;
    });
    var P = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    v.toArray = function (t) {
      return t ? v.isArray(t) ? h.call(t) : v.isString(t) ? t.match(P) : x(t) ? v.map(t, v.identity) : v.values(t) : [];
    }, v.size = function (t) {
      return null == t ? 0 : x(t) ? t.length : v.keys(t).length;
    }, v.partition = N(function (t, e, r) {
      t[r ? 0 : 1].push(e);
    }, !0), v.first = v.head = v.take = function (t, e, r) {
      return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || r ? t[0] : v.initial(t, t.length - e);
    }, v.initial = function (t, e, r) {
      return h.call(t, 0, Math.max(0, t.length - (null == e || r ? 1 : e)));
    }, v.last = function (t, e, r) {
      return null == t || t.length < 1 ? null == e ? void 0 : [] : null == e || r ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - e));
    }, v.rest = v.tail = v.drop = function (t, e, r) {
      return h.call(t, null == e || r ? 1 : e);
    }, v.compact = function (t) {
      return v.filter(t, Boolean);
    };

    var R = function (t, e, r, n) {
      for (var i = (n = n || []).length, o = 0, s = A(t); o < s; o++) {
        var a = t[o];
        if (x(a) && (v.isArray(a) || v.isArguments(a))) {
          if (e) for (var u = 0, h = a.length; u < h;) n[i++] = a[u++];else R(a, e, r, n), i = n.length;
        } else r || (n[i++] = a);
      }

      return n;
    };

    v.flatten = function (t, e) {
      return R(t, e, !1);
    }, v.without = b(function (t, e) {
      return v.difference(t, e);
    }), v.uniq = v.unique = function (t, e, r, n) {
      v.isBoolean(e) || (n = r, r = e, e = !1), null != r && (r = w(r, n));

      for (var i = [], o = [], s = 0, a = A(t); s < a; s++) {
        var u = t[s],
            h = r ? r(u, s, t) : u;
        e && !r ? (s && o === h || i.push(u), o = h) : r ? v.contains(o, h) || (o.push(h), i.push(u)) : v.contains(i, u) || i.push(u);
      }

      return i;
    }, v.union = b(function (t) {
      return v.uniq(R(t, !0, !0));
    }), v.intersection = function (t) {
      for (var e = [], r = arguments.length, n = 0, i = A(t); n < i; n++) {
        var o = t[n];

        if (!v.contains(e, o)) {
          var s;

          for (s = 1; s < r && v.contains(arguments[s], o); s++);

          s === r && e.push(o);
        }
      }

      return e;
    }, v.difference = b(function (t, e) {
      return e = R(e, !0, !0), v.filter(t, function (t) {
        return !v.contains(e, t);
      });
    }), v.unzip = function (t) {
      for (var e = t && v.max(t, A).length || 0, r = Array(e), n = 0; n < e; n++) r[n] = v.pluck(t, n);

      return r;
    }, v.zip = b(v.unzip), v.object = function (t, e) {
      for (var r = {}, n = 0, i = A(t); n < i; n++) e ? r[t[n]] = e[n] : r[t[n][0]] = t[n][1];

      return r;
    };

    var O = function (t) {
      return function (e, r, n) {
        r = w(r, n);

        for (var i = A(e), o = t > 0 ? 0 : i - 1; o >= 0 && o < i; o += t) if (r(e[o], o, e)) return o;

        return -1;
      };
    };

    v.findIndex = O(1), v.findLastIndex = O(-1), v.sortedIndex = function (t, e, r, n) {
      for (var i = (r = w(r, n, 1))(e), o = 0, s = A(t); o < s;) {
        var a = Math.floor((o + s) / 2);
        r(t[a]) < i ? o = a + 1 : s = a;
      }

      return o;
    };

    var I = function (t, e, r) {
      return function (n, i, o) {
        var s = 0,
            a = A(n);
        if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;else if (r && o && a) return n[o = r(n, i)] === i ? o : -1;
        if (i != i) return (o = e(h.call(n, s, a), v.isNaN)) >= 0 ? o + s : -1;

        for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t) if (n[o] === i) return o;

        return -1;
      };
    };

    v.indexOf = I(1, v.findIndex, v.sortedIndex), v.lastIndexOf = I(-1, v.findLastIndex), v.range = function (t, e, r) {
      null == e && (e = t || 0, t = 0), r || (r = e < t ? -1 : 1);

      for (var n = Math.max(Math.ceil((e - t) / r), 0), i = Array(n), o = 0; o < n; o++, t += r) i[o] = t;

      return i;
    }, v.chunk = function (t, e) {
      if (null == e || e < 1) return [];

      for (var r = [], n = 0, i = t.length; n < i;) r.push(h.call(t, n, n += e));

      return r;
    };

    var C = function (t, e, r, n, i) {
      if (!(n instanceof e)) return t.apply(r, i);

      var o = _(t.prototype),
          s = t.apply(o, i);

      return v.isObject(s) ? s : o;
    };

    v.bind = b(function (t, e, r) {
      if (!v.isFunction(t)) throw new TypeError("Bind must be called on a function");
      var n = b(function (i) {
        return C(t, n, e, this, r.concat(i));
      });
      return n;
    }), v.partial = b(function (t, e) {
      var r = v.partial.placeholder,
          n = function () {
        for (var i = 0, o = e.length, s = Array(o), a = 0; a < o; a++) s[a] = e[a] === r ? arguments[i++] : e[a];

        for (; i < arguments.length;) s.push(arguments[i++]);

        return C(t, n, this, this, s);
      };

      return n;
    }), v.partial.placeholder = v, v.bindAll = b(function (t, e) {
      var r = (e = R(e, !1, !1)).length;
      if (r < 1) throw new Error("bindAll must be passed function names");

      for (; r--;) {
        var n = e[r];
        t[n] = v.bind(t[n], t);
      }
    }), v.memoize = function (t, e) {
      var r = function (n) {
        var i = r.cache,
            o = "" + (e ? e.apply(this, arguments) : n);
        return S(i, o) || (i[o] = t.apply(this, arguments)), i[o];
      };

      return r.cache = {}, r;
    }, v.delay = b(function (t, e, r) {
      return setTimeout(function () {
        return t.apply(null, r);
      }, e);
    }), v.defer = v.partial(v.delay, v, 1), v.throttle = function (t, e, r) {
      var n,
          i,
          o,
          s,
          a = 0;
      r || (r = {});

      var u = function () {
        a = !1 === r.leading ? 0 : v.now(), n = null, s = t.apply(i, o), n || (i = o = null);
      },
          h = function () {
        var h = v.now();
        a || !1 !== r.leading || (a = h);
        var l = e - (h - a);
        return i = this, o = arguments, l <= 0 || l > e ? (n && (clearTimeout(n), n = null), a = h, s = t.apply(i, o), n || (i = o = null)) : n || !1 === r.trailing || (n = setTimeout(u, l)), s;
      };

      return h.cancel = function () {
        clearTimeout(n), a = 0, n = i = o = null;
      }, h;
    }, v.debounce = function (t, e, r) {
      var n,
          i,
          o = function (e, r) {
        n = null, r && (i = t.apply(e, r));
      },
          s = b(function (s) {
        if (n && clearTimeout(n), r) {
          var a = !n;
          n = setTimeout(o, e), a && (i = t.apply(this, s));
        } else n = v.delay(o, e, this, s);

        return i;
      });

      return s.cancel = function () {
        clearTimeout(n), n = null;
      }, s;
    }, v.wrap = function (t, e) {
      return v.partial(e, t);
    }, v.negate = function (t) {
      return function () {
        return !t.apply(this, arguments);
      };
    }, v.compose = function () {
      var t = arguments,
          e = t.length - 1;
      return function () {
        for (var r = e, n = t[e].apply(this, arguments); r--;) n = t[r].call(this, n);

        return n;
      };
    }, v.after = function (t, e) {
      return function () {
        if (--t < 1) return e.apply(this, arguments);
      };
    }, v.before = function (t, e) {
      var r;
      return function () {
        return --t > 0 && (r = e.apply(this, arguments)), t <= 1 && (e = null), r;
      };
    }, v.once = v.partial(v.before, 2), v.restArguments = b;

    var D = !{
      toString: null
    }.propertyIsEnumerable("toString"),
        L = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        U = function (t, e) {
      var r = L.length,
          n = t.constructor,
          i = v.isFunction(n) && n.prototype || s,
          o = "constructor";

      for (S(t, o) && !v.contains(e, o) && e.push(o); r--;) (o = L[r]) in t && t[o] !== i[o] && !v.contains(e, o) && e.push(o);
    };

    v.keys = function (t) {
      if (!v.isObject(t)) return [];
      if (d) return d(t);
      var e = [];

      for (var r in t) S(t, r) && e.push(r);

      return D && U(t, e), e;
    }, v.allKeys = function (t) {
      if (!v.isObject(t)) return [];
      var e = [];

      for (var r in t) e.push(r);

      return D && U(t, e), e;
    }, v.values = function (t) {
      for (var e = v.keys(t), r = e.length, n = Array(r), i = 0; i < r; i++) n[i] = t[e[i]];

      return n;
    }, v.mapObject = function (t, e, r) {
      e = w(e, r);

      for (var n = v.keys(t), i = n.length, o = {}, s = 0; s < i; s++) {
        var a = n[s];
        o[a] = e(t[a], a, t);
      }

      return o;
    }, v.pairs = function (t) {
      for (var e = v.keys(t), r = e.length, n = Array(r), i = 0; i < r; i++) n[i] = [e[i], t[e[i]]];

      return n;
    }, v.invert = function (t) {
      for (var e = {}, r = v.keys(t), n = 0, i = r.length; n < i; n++) e[t[r[n]]] = r[n];

      return e;
    }, v.functions = v.methods = function (t) {
      var e = [];

      for (var r in t) v.isFunction(t[r]) && e.push(r);

      return e.sort();
    };

    var j = function (t, e) {
      return function (r) {
        var n = arguments.length;
        if (e && (r = Object(r)), n < 2 || null == r) return r;

        for (var i = 1; i < n; i++) for (var o = arguments[i], s = t(o), a = s.length, u = 0; u < a; u++) {
          var h = s[u];
          e && void 0 !== r[h] || (r[h] = o[h]);
        }

        return r;
      };
    };

    v.extend = j(v.allKeys), v.extendOwn = v.assign = j(v.keys), v.findKey = function (t, e, r) {
      e = w(e, r);

      for (var n, i = v.keys(t), o = 0, s = i.length; o < s; o++) if (e(t[n = i[o]], n, t)) return n;
    };

    var B,
        F,
        H = function (t, e, r) {
      return e in r;
    };

    v.pick = b(function (t, e) {
      var r = {},
          n = e[0];
      if (null == t) return r;
      v.isFunction(n) ? (e.length > 1 && (n = y(n, e[1])), e = v.allKeys(t)) : (n = H, e = R(e, !1, !1), t = Object(t));

      for (var i = 0, o = e.length; i < o; i++) {
        var s = e[i],
            a = t[s];
        n(a, s, t) && (r[s] = a);
      }

      return r;
    }), v.omit = b(function (t, e) {
      var r,
          n = e[0];
      return v.isFunction(n) ? (n = v.negate(n), e.length > 1 && (r = e[1])) : (e = v.map(R(e, !1, !1), String), n = function (t, r) {
        return !v.contains(e, r);
      }), v.pick(t, n, r);
    }), v.defaults = j(v.allKeys, !0), v.create = function (t, e) {
      var r = _(t);

      return e && v.extendOwn(r, e), r;
    }, v.clone = function (t) {
      return v.isObject(t) ? v.isArray(t) ? t.slice() : v.extend({}, t) : t;
    }, v.tap = function (t, e) {
      return e(t), t;
    }, v.isMatch = function (t, e) {
      var r = v.keys(e),
          n = r.length;
      if (null == t) return !n;

      for (var i = Object(t), o = 0; o < n; o++) {
        var s = r[o];
        if (e[s] !== i[s] || !(s in i)) return !1;
      }

      return !0;
    }, B = function (t, e, r, n) {
      if (t === e) return 0 !== t || 1 / t == 1 / e;
      if (null == t || null == e) return !1;
      if (t != t) return e != e;
      var i = typeof t;
      return ("function" === i || "object" === i || "object" == typeof e) && F(t, e, r, n);
    }, F = function (t, e, r, n) {
      t instanceof v && (t = t._wrapped), e instanceof v && (e = e._wrapped);
      var i = l.call(t);
      if (i !== l.call(e)) return !1;

      switch (i) {
        case "[object RegExp]":
        case "[object String]":
          return "" + t == "" + e;

        case "[object Number]":
          return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;

        case "[object Date]":
        case "[object Boolean]":
          return +t == +e;

        case "[object Symbol]":
          return a.valueOf.call(t) === a.valueOf.call(e);
      }

      var o = "[object Array]" === i;

      if (!o) {
        if ("object" != typeof t || "object" != typeof e) return !1;
        var s = t.constructor,
            u = e.constructor;
        if (s !== u && !(v.isFunction(s) && s instanceof s && v.isFunction(u) && u instanceof u) && "constructor" in t && "constructor" in e) return !1;
      }

      n = n || [];

      for (var h = (r = r || []).length; h--;) if (r[h] === t) return n[h] === e;

      if (r.push(t), n.push(e), o) {
        if ((h = t.length) !== e.length) return !1;

        for (; h--;) if (!B(t[h], e[h], r, n)) return !1;
      } else {
        var f,
            c = v.keys(t);
        if (h = c.length, v.keys(e).length !== h) return !1;

        for (; h--;) if (f = c[h], !S(e, f) || !B(t[f], e[f], r, n)) return !1;
      }

      return r.pop(), n.pop(), !0;
    }, v.isEqual = function (t, e) {
      return B(t, e);
    }, v.isEmpty = function (t) {
      return null == t || (x(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t)) ? 0 === t.length : 0 === v.keys(t).length);
    }, v.isElement = function (t) {
      return !(!t || 1 !== t.nodeType);
    }, v.isArray = c || function (t) {
      return "[object Array]" === l.call(t);
    }, v.isObject = function (t) {
      var e = typeof t;
      return "function" === e || "object" === e && !!t;
    }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function (t) {
      v["is" + t] = function (e) {
        return l.call(e) === "[object " + t + "]";
      };
    }), v.isArguments(arguments) || (v.isArguments = function (t) {
      return S(t, "callee");
    });
    var G = n.document && n.document.childNodes;
    "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof G && (v.isFunction = function (t) {
      return "function" == typeof t || !1;
    }), v.isFinite = function (t) {
      return !v.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t));
    }, v.isNaN = function (t) {
      return v.isNumber(t) && isNaN(t);
    }, v.isBoolean = function (t) {
      return !0 === t || !1 === t || "[object Boolean]" === l.call(t);
    }, v.isNull = function (t) {
      return null === t;
    }, v.isUndefined = function (t) {
      return void 0 === t;
    }, v.has = function (t, e) {
      if (!v.isArray(e)) return S(t, e);

      for (var r = e.length, n = 0; n < r; n++) {
        var i = e[n];
        if (null == t || !f.call(t, i)) return !1;
        t = t[i];
      }

      return !!r;
    }, v.noConflict = function () {
      return n._ = i, this;
    }, v.identity = function (t) {
      return t;
    }, v.constant = function (t) {
      return function () {
        return t;
      };
    }, v.noop = function () {}, v.property = function (t) {
      return v.isArray(t) ? function (e) {
        return E(e, t);
      } : M(t);
    }, v.propertyOf = function (t) {
      return null == t ? function () {} : function (e) {
        return v.isArray(e) ? E(t, e) : t[e];
      };
    }, v.matcher = v.matches = function (t) {
      return t = v.extendOwn({}, t), function (e) {
        return v.isMatch(e, t);
      };
    }, v.times = function (t, e, r) {
      var n = Array(Math.max(0, t));
      e = y(e, r, 1);

      for (var i = 0; i < t; i++) n[i] = e(i);

      return n;
    }, v.random = function (t, e) {
      return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
    }, v.now = Date.now || function () {
      return new Date().getTime();
    };

    var W = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    },
        z = v.invert(W),
        q = function (t) {
      var e = function (e) {
        return t[e];
      },
          r = "(?:" + v.keys(t).join("|") + ")",
          n = RegExp(r),
          i = RegExp(r, "g");

      return function (t) {
        return t = null == t ? "" : "" + t, n.test(t) ? t.replace(i, e) : t;
      };
    };

    v.escape = q(W), v.unescape = q(z), v.result = function (t, e, r) {
      v.isArray(e) || (e = [e]);
      var n = e.length;
      if (!n) return v.isFunction(r) ? r.call(t) : r;

      for (var i = 0; i < n; i++) {
        var o = null == t ? void 0 : t[e[i]];
        void 0 === o && (o = r, i = n), t = v.isFunction(o) ? o.call(t) : o;
      }

      return t;
    };
    var K = 0;
    v.uniqueId = function (t) {
      var e = ++K + "";
      return t ? t + e : e;
    }, v.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };

    var Y = /(.)^/,
        V = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
        Z = /\\|'|\r|\n|\u2028|\u2029/g,
        J = function (t) {
      return "\\" + V[t];
    };

    v.template = function (t, e, r) {
      !e && r && (e = r), e = v.defaults({}, e, v.templateSettings);
      var n,
          i = RegExp([(e.escape || Y).source, (e.interpolate || Y).source, (e.evaluate || Y).source].join("|") + "|$", "g"),
          o = 0,
          s = "__p+='";
      t.replace(i, function (e, r, n, i, a) {
        return s += t.slice(o, a).replace(Z, J), o = a + e.length, r ? s += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : n ? s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (s += "';\n" + i + "\n__p+='"), e;
      }), s += "';\n", e.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";

      try {
        n = new Function(e.variable || "obj", "_", s);
      } catch (t) {
        throw t.source = s, t;
      }

      var a = function (t) {
        return n.call(this, t, v);
      },
          u = e.variable || "obj";

      return a.source = "function(" + u + "){\n" + s + "}", a;
    }, v.chain = function (t) {
      var e = v(t);
      return e._chain = !0, e;
    };

    var $ = function (t, e) {
      return t._chain ? v(e).chain() : e;
    };

    v.mixin = function (t) {
      return v.each(v.functions(t), function (e) {
        var r = v[e] = t[e];

        v.prototype[e] = function () {
          var t = [this._wrapped];
          return u.apply(t, arguments), $(this, r.apply(v, t));
        };
      }), v;
    }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
      var e = o[t];

      v.prototype[t] = function () {
        var r = this._wrapped;
        return e.apply(r, arguments), "shift" !== t && "splice" !== t || 0 !== r.length || delete r[0], $(this, r);
      };
    }), v.each(["concat", "join", "slice"], function (t) {
      var e = o[t];

      v.prototype[t] = function () {
        return $(this, e.apply(this._wrapped, arguments));
      };
    }), v.prototype.value = function () {
      return this._wrapped;
    }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function () {
      return String(this._wrapped);
    };
  }();
}),
    ye = (ge._, (0, _indexD3bd.d)(function (t) {
  !function (t, e) {
    function r(t, e) {
      if (!t) throw new Error(e || "Assertion failed");
    }

    function i(t, e) {
      t.super_ = e;

      var r = function () {};

      r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
    }

    function o(t, e, r) {
      if (o.isBN(t)) return t;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"));
    }

    var s;
    "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;

    try {
      s = (0, _indexD3bd.g)("buffer").Buffer;
    } catch (t) {}

    function a(t, e, r) {
      for (var n = 0, i = Math.min(t.length, r), o = e; o < i; o++) {
        var s = t.charCodeAt(o) - 48;
        n <<= 4, n |= s >= 49 && s <= 54 ? s - 49 + 10 : s >= 17 && s <= 22 ? s - 17 + 10 : 15 & s;
      }

      return n;
    }

    function u(t, e, r, n) {
      for (var i = 0, o = Math.min(t.length, r), s = e; s < o; s++) {
        var a = t.charCodeAt(s) - 48;
        i *= n, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a;
      }

      return i;
    }

    o.isBN = function (t) {
      return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
    }, o.max = function (t, e) {
      return t.cmp(e) > 0 ? t : e;
    }, o.min = function (t, e) {
      return t.cmp(e) < 0 ? t : e;
    }, o.prototype._init = function (t, e, n) {
      if ("number" == typeof t) return this._initNumber(t, e, n);
      if ("object" == typeof t) return this._initArray(t, e, n);
      "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
      var i = 0;
      "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++, 16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i), "-" === t[0] && (this.negative = 1), this.strip(), "le" === n && this._initArray(this.toArray(), e, n);
    }, o.prototype._initNumber = function (t, e, n) {
      t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), e, n);
    }, o.prototype._initArray = function (t, e, n) {
      if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) this.words[i] = 0;

      var o,
          s,
          a = 0;
      if ("be" === n) for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);else if ("le" === n) for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
      return this.strip();
    }, o.prototype._parseHex = function (t, e) {
      this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);

      for (var r = 0; r < this.length; r++) this.words[r] = 0;

      var n,
          i,
          o = 0;

      for (r = t.length - 6, n = 0; r >= e; r -= 6) i = a(t, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);

      r + 6 !== e && (i = a(t, e, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip();
    }, o.prototype._parseBase = function (t, e, r) {
      this.words = [0], this.length = 1;

      for (var n = 0, i = 1; i <= 67108863; i *= e) n++;

      n--, i = i / e | 0;

      for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, h = 0, l = r; l < a; l += n) h = u(t, l, l + n, e), this.imuln(i), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);

      if (0 !== s) {
        var f = 1;

        for (h = u(t, l, t.length, e), l = 0; l < s; l++) f *= e;

        this.imuln(f), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
      }
    }, o.prototype.copy = function (t) {
      t.words = new Array(this.length);

      for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];

      t.length = this.length, t.negative = this.negative, t.red = this.red;
    }, o.prototype.clone = function () {
      var t = new o(null);
      return this.copy(t), t;
    }, o.prototype._expand = function (t) {
      for (; this.length < t;) this.words[this.length++] = 0;

      return this;
    }, o.prototype.strip = function () {
      for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;

      return this._normSign();
    }, o.prototype._normSign = function () {
      return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
    }, o.prototype.inspect = function () {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
        l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

    function c(t, e, r) {
      r.negative = e.negative ^ t.negative;
      var n = t.length + e.length | 0;
      r.length = n, n = n - 1 | 0;
      var i = 0 | t.words[0],
          o = 0 | e.words[0],
          s = i * o,
          a = 67108863 & s,
          u = s / 67108864 | 0;
      r.words[0] = a;

      for (var h = 1; h < n; h++) {
        for (var l = u >>> 26, f = 67108863 & u, c = Math.min(h, e.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
          var p = h - d | 0;
          l += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + f) / 67108864 | 0, f = 67108863 & s;
        }

        r.words[h] = 0 | f, u = 0 | l;
      }

      return 0 !== u ? r.words[h] = 0 | u : r.length--, r.strip();
    }

    o.prototype.toString = function (t, e) {
      var n;

      if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
        n = "";

        for (var i = 0, o = 0, s = 0; s < this.length; s++) {
          var a = this.words[s],
              u = (16777215 & (a << i | o)).toString(16);
          n = 0 !== (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? h[6 - u.length] + u + n : u + n, (i += 2) >= 26 && (i -= 26, s--);
        }

        for (0 !== o && (n = o.toString(16) + n); n.length % e != 0;) n = "0" + n;

        return 0 !== this.negative && (n = "-" + n), n;
      }

      if (t === (0 | t) && t >= 2 && t <= 36) {
        var c = l[t],
            d = f[t];
        n = "";
        var p = this.clone();

        for (p.negative = 0; !p.isZero();) {
          var m = p.modn(d).toString(t);
          n = (p = p.idivn(d)).isZero() ? m + n : h[c - m.length] + m + n;
        }

        for (this.isZero() && (n = "0" + n); n.length % e != 0;) n = "0" + n;

        return 0 !== this.negative && (n = "-" + n), n;
      }

      r(!1, "Base should be between 2 and 36");
    }, o.prototype.toNumber = function () {
      var t = this.words[0];
      return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t;
    }, o.prototype.toJSON = function () {
      return this.toString(16);
    }, o.prototype.toBuffer = function (t, e) {
      return r(void 0 !== s), this.toArrayLike(s, t, e);
    }, o.prototype.toArray = function (t, e) {
      return this.toArrayLike(Array, t, e);
    }, o.prototype.toArrayLike = function (t, e, n) {
      var i = this.byteLength(),
          o = n || Math.max(1, i);
      r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0"), this.strip();
      var s,
          a,
          u = "le" === e,
          h = new t(o),
          l = this.clone();

      if (u) {
        for (a = 0; !l.isZero(); a++) s = l.andln(255), l.iushrn(8), h[a] = s;

        for (; a < o; a++) h[a] = 0;
      } else {
        for (a = 0; a < o - i; a++) h[a] = 0;

        for (a = 0; !l.isZero(); a++) s = l.andln(255), l.iushrn(8), h[o - a - 1] = s;
      }

      return h;
    }, Math.clz32 ? o.prototype._countBits = function (t) {
      return 32 - Math.clz32(t);
    } : o.prototype._countBits = function (t) {
      var e = t,
          r = 0;
      return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e;
    }, o.prototype._zeroBits = function (t) {
      if (0 === t) return 26;
      var e = t,
          r = 0;
      return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
    }, o.prototype.bitLength = function () {
      var t = this.words[this.length - 1],
          e = this._countBits(t);

      return 26 * (this.length - 1) + e;
    }, o.prototype.zeroBits = function () {
      if (this.isZero()) return 0;

      for (var t = 0, e = 0; e < this.length; e++) {
        var r = this._zeroBits(this.words[e]);

        if (t += r, 26 !== r) break;
      }

      return t;
    }, o.prototype.byteLength = function () {
      return Math.ceil(this.bitLength() / 8);
    }, o.prototype.toTwos = function (t) {
      return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
    }, o.prototype.fromTwos = function (t) {
      return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
    }, o.prototype.isNeg = function () {
      return 0 !== this.negative;
    }, o.prototype.neg = function () {
      return this.clone().ineg();
    }, o.prototype.ineg = function () {
      return this.isZero() || (this.negative ^= 1), this;
    }, o.prototype.iuor = function (t) {
      for (; this.length < t.length;) this.words[this.length++] = 0;

      for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];

      return this.strip();
    }, o.prototype.ior = function (t) {
      return r(0 == (this.negative | t.negative)), this.iuor(t);
    }, o.prototype.or = function (t) {
      return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
    }, o.prototype.uor = function (t) {
      return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
    }, o.prototype.iuand = function (t) {
      var e;
      e = this.length > t.length ? t : this;

      for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];

      return this.length = e.length, this.strip();
    }, o.prototype.iand = function (t) {
      return r(0 == (this.negative | t.negative)), this.iuand(t);
    }, o.prototype.and = function (t) {
      return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
    }, o.prototype.uand = function (t) {
      return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
    }, o.prototype.iuxor = function (t) {
      var e, r;
      this.length > t.length ? (e = this, r = t) : (e = t, r = this);

      for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];

      if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n];
      return this.length = e.length, this.strip();
    }, o.prototype.ixor = function (t) {
      return r(0 == (this.negative | t.negative)), this.iuxor(t);
    }, o.prototype.xor = function (t) {
      return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
    }, o.prototype.uxor = function (t) {
      return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
    }, o.prototype.inotn = function (t) {
      r("number" == typeof t && t >= 0);
      var e = 0 | Math.ceil(t / 26),
          n = t % 26;
      this._expand(e), n > 0 && e--;

      for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];

      return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip();
    }, o.prototype.notn = function (t) {
      return this.clone().inotn(t);
    }, o.prototype.setn = function (t, e) {
      r("number" == typeof t && t >= 0);
      var n = t / 26 | 0,
          i = t % 26;
      return this._expand(n + 1), this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this.strip();
    }, o.prototype.iadd = function (t) {
      var e, r, n;
      if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
      if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
      this.length > t.length ? (r = this, n = t) : (r = t, n = this);

      for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;

      for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;

      if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o];
      return this;
    }, o.prototype.add = function (t) {
      var e;
      return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
    }, o.prototype.isub = function (t) {
      if (0 !== t.negative) {
        t.negative = 0;
        var e = this.iadd(t);
        return t.negative = 1, e._normSign();
      }

      if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
      var r,
          n,
          i = this.cmp(t);
      if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      i > 0 ? (r = this, n = t) : (r = t, n = this);

      for (var o = 0, s = 0; s < n.length; s++) o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;

      for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;

      if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
      return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip();
    }, o.prototype.sub = function (t) {
      return this.clone().isub(t);
    };

    var d = function (t, e, r) {
      var n,
          i,
          o,
          s = t.words,
          a = e.words,
          u = r.words,
          h = 0,
          l = 0 | s[0],
          f = 8191 & l,
          c = l >>> 13,
          d = 0 | s[1],
          p = 8191 & d,
          m = d >>> 13,
          v = 0 | s[2],
          g = 8191 & v,
          y = v >>> 13,
          w = 0 | s[3],
          b = 8191 & w,
          _ = w >>> 13,
          M = 0 | s[4],
          S = 8191 & M,
          E = M >>> 13,
          k = 0 | s[5],
          A = 8191 & k,
          x = k >>> 13,
          T = 0 | s[6],
          N = 8191 & T,
          P = T >>> 13,
          R = 0 | s[7],
          O = 8191 & R,
          I = R >>> 13,
          C = 0 | s[8],
          D = 8191 & C,
          L = C >>> 13,
          U = 0 | s[9],
          j = 8191 & U,
          B = U >>> 13,
          F = 0 | a[0],
          H = 8191 & F,
          G = F >>> 13,
          W = 0 | a[1],
          z = 8191 & W,
          q = W >>> 13,
          K = 0 | a[2],
          Y = 8191 & K,
          V = K >>> 13,
          Z = 0 | a[3],
          J = 8191 & Z,
          $ = Z >>> 13,
          X = 0 | a[4],
          Q = 8191 & X,
          tt = X >>> 13,
          et = 0 | a[5],
          rt = 8191 & et,
          nt = et >>> 13,
          it = 0 | a[6],
          ot = 8191 & it,
          st = it >>> 13,
          at = 0 | a[7],
          ut = 8191 & at,
          ht = at >>> 13,
          lt = 0 | a[8],
          ft = 8191 & lt,
          ct = lt >>> 13,
          dt = 0 | a[9],
          pt = 8191 & dt,
          mt = dt >>> 13;

      r.negative = t.negative ^ e.negative, r.length = 19;
      var vt = (h + (n = Math.imul(f, H)) | 0) + ((8191 & (i = (i = Math.imul(f, G)) + Math.imul(c, H) | 0)) << 13) | 0;
      h = ((o = Math.imul(c, G)) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(p, H), i = (i = Math.imul(p, G)) + Math.imul(m, H) | 0, o = Math.imul(m, G);
      var gt = (h + (n = n + Math.imul(f, z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, q) | 0) + Math.imul(c, z) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, q) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(g, H), i = (i = Math.imul(g, G)) + Math.imul(y, H) | 0, o = Math.imul(y, G), n = n + Math.imul(p, z) | 0, i = (i = i + Math.imul(p, q) | 0) + Math.imul(m, z) | 0, o = o + Math.imul(m, q) | 0;
      var yt = (h + (n = n + Math.imul(f, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, V) | 0) + Math.imul(c, Y) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, V) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(b, H), i = (i = Math.imul(b, G)) + Math.imul(_, H) | 0, o = Math.imul(_, G), n = n + Math.imul(g, z) | 0, i = (i = i + Math.imul(g, q) | 0) + Math.imul(y, z) | 0, o = o + Math.imul(y, q) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(m, Y) | 0, o = o + Math.imul(m, V) | 0;
      var wt = (h + (n = n + Math.imul(f, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, $) | 0) + Math.imul(c, J) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, $) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(S, H), i = (i = Math.imul(S, G)) + Math.imul(E, H) | 0, o = Math.imul(E, G), n = n + Math.imul(b, z) | 0, i = (i = i + Math.imul(b, q) | 0) + Math.imul(_, z) | 0, o = o + Math.imul(_, q) | 0, n = n + Math.imul(g, Y) | 0, i = (i = i + Math.imul(g, V) | 0) + Math.imul(y, Y) | 0, o = o + Math.imul(y, V) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, $) | 0;
      var bt = (h + (n = n + Math.imul(f, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tt) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, tt) | 0) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(A, H), i = (i = Math.imul(A, G)) + Math.imul(x, H) | 0, o = Math.imul(x, G), n = n + Math.imul(S, z) | 0, i = (i = i + Math.imul(S, q) | 0) + Math.imul(E, z) | 0, o = o + Math.imul(E, q) | 0, n = n + Math.imul(b, Y) | 0, i = (i = i + Math.imul(b, V) | 0) + Math.imul(_, Y) | 0, o = o + Math.imul(_, V) | 0, n = n + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, $) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, $) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0;

      var _t = (h + (n = n + Math.imul(f, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, nt) | 0) + Math.imul(c, rt) | 0)) << 13) | 0;

      h = ((o = o + Math.imul(c, nt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(N, H), i = (i = Math.imul(N, G)) + Math.imul(P, H) | 0, o = Math.imul(P, G), n = n + Math.imul(A, z) | 0, i = (i = i + Math.imul(A, q) | 0) + Math.imul(x, z) | 0, o = o + Math.imul(x, q) | 0, n = n + Math.imul(S, Y) | 0, i = (i = i + Math.imul(S, V) | 0) + Math.imul(E, Y) | 0, o = o + Math.imul(E, V) | 0, n = n + Math.imul(b, J) | 0, i = (i = i + Math.imul(b, $) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, $) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, tt) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, nt) | 0;
      var Mt = (h + (n = n + Math.imul(f, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, st) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, H), i = (i = Math.imul(O, G)) + Math.imul(I, H) | 0, o = Math.imul(I, G), n = n + Math.imul(N, z) | 0, i = (i = i + Math.imul(N, q) | 0) + Math.imul(P, z) | 0, o = o + Math.imul(P, q) | 0, n = n + Math.imul(A, Y) | 0, i = (i = i + Math.imul(A, V) | 0) + Math.imul(x, Y) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(S, J) | 0, i = (i = i + Math.imul(S, $) | 0) + Math.imul(E, J) | 0, o = o + Math.imul(E, $) | 0, n = n + Math.imul(b, Q) | 0, i = (i = i + Math.imul(b, tt) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, tt) | 0, n = n + Math.imul(g, rt) | 0, i = (i = i + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0;
      var St = (h + (n = n + Math.imul(f, ut) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ht) | 0) + Math.imul(c, ut) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, ht) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(D, H), i = (i = Math.imul(D, G)) + Math.imul(L, H) | 0, o = Math.imul(L, G), n = n + Math.imul(O, z) | 0, i = (i = i + Math.imul(O, q) | 0) + Math.imul(I, z) | 0, o = o + Math.imul(I, q) | 0, n = n + Math.imul(N, Y) | 0, i = (i = i + Math.imul(N, V) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, V) | 0, n = n + Math.imul(A, J) | 0, i = (i = i + Math.imul(A, $) | 0) + Math.imul(x, J) | 0, o = o + Math.imul(x, $) | 0, n = n + Math.imul(S, Q) | 0, i = (i = i + Math.imul(S, tt) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, tt) | 0, n = n + Math.imul(b, rt) | 0, i = (i = i + Math.imul(b, nt) | 0) + Math.imul(_, rt) | 0, o = o + Math.imul(_, nt) | 0, n = n + Math.imul(g, ot) | 0, i = (i = i + Math.imul(g, st) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, n = n + Math.imul(p, ut) | 0, i = (i = i + Math.imul(p, ht) | 0) + Math.imul(m, ut) | 0, o = o + Math.imul(m, ht) | 0;
      var Et = (h + (n = n + Math.imul(f, ft) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ct) | 0) + Math.imul(c, ft) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, ct) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(j, H), i = (i = Math.imul(j, G)) + Math.imul(B, H) | 0, o = Math.imul(B, G), n = n + Math.imul(D, z) | 0, i = (i = i + Math.imul(D, q) | 0) + Math.imul(L, z) | 0, o = o + Math.imul(L, q) | 0, n = n + Math.imul(O, Y) | 0, i = (i = i + Math.imul(O, V) | 0) + Math.imul(I, Y) | 0, o = o + Math.imul(I, V) | 0, n = n + Math.imul(N, J) | 0, i = (i = i + Math.imul(N, $) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, $) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(S, rt) | 0, i = (i = i + Math.imul(S, nt) | 0) + Math.imul(E, rt) | 0, o = o + Math.imul(E, nt) | 0, n = n + Math.imul(b, ot) | 0, i = (i = i + Math.imul(b, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, n = n + Math.imul(g, ut) | 0, i = (i = i + Math.imul(g, ht) | 0) + Math.imul(y, ut) | 0, o = o + Math.imul(y, ht) | 0, n = n + Math.imul(p, ft) | 0, i = (i = i + Math.imul(p, ct) | 0) + Math.imul(m, ft) | 0, o = o + Math.imul(m, ct) | 0;
      var kt = (h + (n = n + Math.imul(f, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, mt) | 0) + Math.imul(c, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(j, z), i = (i = Math.imul(j, q)) + Math.imul(B, z) | 0, o = Math.imul(B, q), n = n + Math.imul(D, Y) | 0, i = (i = i + Math.imul(D, V) | 0) + Math.imul(L, Y) | 0, o = o + Math.imul(L, V) | 0, n = n + Math.imul(O, J) | 0, i = (i = i + Math.imul(O, $) | 0) + Math.imul(I, J) | 0, o = o + Math.imul(I, $) | 0, n = n + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, tt) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, tt) | 0, n = n + Math.imul(A, rt) | 0, i = (i = i + Math.imul(A, nt) | 0) + Math.imul(x, rt) | 0, o = o + Math.imul(x, nt) | 0, n = n + Math.imul(S, ot) | 0, i = (i = i + Math.imul(S, st) | 0) + Math.imul(E, ot) | 0, o = o + Math.imul(E, st) | 0, n = n + Math.imul(b, ut) | 0, i = (i = i + Math.imul(b, ht) | 0) + Math.imul(_, ut) | 0, o = o + Math.imul(_, ht) | 0, n = n + Math.imul(g, ft) | 0, i = (i = i + Math.imul(g, ct) | 0) + Math.imul(y, ft) | 0, o = o + Math.imul(y, ct) | 0;
      var At = (h + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(j, Y), i = (i = Math.imul(j, V)) + Math.imul(B, Y) | 0, o = Math.imul(B, V), n = n + Math.imul(D, J) | 0, i = (i = i + Math.imul(D, $) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, $) | 0, n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, tt) | 0, n = n + Math.imul(N, rt) | 0, i = (i = i + Math.imul(N, nt) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(A, ot) | 0, i = (i = i + Math.imul(A, st) | 0) + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, n = n + Math.imul(S, ut) | 0, i = (i = i + Math.imul(S, ht) | 0) + Math.imul(E, ut) | 0, o = o + Math.imul(E, ht) | 0, n = n + Math.imul(b, ft) | 0, i = (i = i + Math.imul(b, ct) | 0) + Math.imul(_, ft) | 0, o = o + Math.imul(_, ct) | 0;
      var xt = (h + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(y, mt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(j, J), i = (i = Math.imul(j, $)) + Math.imul(B, J) | 0, o = Math.imul(B, $), n = n + Math.imul(D, Q) | 0, i = (i = i + Math.imul(D, tt) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, tt) | 0, n = n + Math.imul(O, rt) | 0, i = (i = i + Math.imul(O, nt) | 0) + Math.imul(I, rt) | 0, o = o + Math.imul(I, nt) | 0, n = n + Math.imul(N, ot) | 0, i = (i = i + Math.imul(N, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, n = n + Math.imul(A, ut) | 0, i = (i = i + Math.imul(A, ht) | 0) + Math.imul(x, ut) | 0, o = o + Math.imul(x, ht) | 0, n = n + Math.imul(S, ft) | 0, i = (i = i + Math.imul(S, ct) | 0) + Math.imul(E, ft) | 0, o = o + Math.imul(E, ct) | 0;
      var Tt = (h + (n = n + Math.imul(b, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(b, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(j, Q), i = (i = Math.imul(j, tt)) + Math.imul(B, Q) | 0, o = Math.imul(B, tt), n = n + Math.imul(D, rt) | 0, i = (i = i + Math.imul(D, nt) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, nt) | 0, n = n + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, n = n + Math.imul(N, ut) | 0, i = (i = i + Math.imul(N, ht) | 0) + Math.imul(P, ut) | 0, o = o + Math.imul(P, ht) | 0, n = n + Math.imul(A, ft) | 0, i = (i = i + Math.imul(A, ct) | 0) + Math.imul(x, ft) | 0, o = o + Math.imul(x, ct) | 0;
      var Nt = (h + (n = n + Math.imul(S, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, mt) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(E, mt) | 0) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(j, rt), i = (i = Math.imul(j, nt)) + Math.imul(B, rt) | 0, o = Math.imul(B, nt), n = n + Math.imul(D, ot) | 0, i = (i = i + Math.imul(D, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, n = n + Math.imul(O, ut) | 0, i = (i = i + Math.imul(O, ht) | 0) + Math.imul(I, ut) | 0, o = o + Math.imul(I, ht) | 0, n = n + Math.imul(N, ft) | 0, i = (i = i + Math.imul(N, ct) | 0) + Math.imul(P, ft) | 0, o = o + Math.imul(P, ct) | 0;
      var Pt = (h + (n = n + Math.imul(A, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(x, mt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(j, ot), i = (i = Math.imul(j, st)) + Math.imul(B, ot) | 0, o = Math.imul(B, st), n = n + Math.imul(D, ut) | 0, i = (i = i + Math.imul(D, ht) | 0) + Math.imul(L, ut) | 0, o = o + Math.imul(L, ht) | 0, n = n + Math.imul(O, ft) | 0, i = (i = i + Math.imul(O, ct) | 0) + Math.imul(I, ft) | 0, o = o + Math.imul(I, ct) | 0;
      var Rt = (h + (n = n + Math.imul(N, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(P, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(j, ut), i = (i = Math.imul(j, ht)) + Math.imul(B, ut) | 0, o = Math.imul(B, ht), n = n + Math.imul(D, ft) | 0, i = (i = i + Math.imul(D, ct) | 0) + Math.imul(L, ft) | 0, o = o + Math.imul(L, ct) | 0;
      var Ot = (h + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(I, mt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(j, ft), i = (i = Math.imul(j, ct)) + Math.imul(B, ft) | 0, o = Math.imul(B, ct);
      var It = (h + (n = n + Math.imul(D, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(D, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863;
      var Ct = (h + (n = Math.imul(j, pt)) | 0) + ((8191 & (i = (i = Math.imul(j, mt)) + Math.imul(B, pt) | 0)) << 13) | 0;
      return h = ((o = Math.imul(B, mt)) + (i >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, u[0] = vt, u[1] = gt, u[2] = yt, u[3] = wt, u[4] = bt, u[5] = _t, u[6] = Mt, u[7] = St, u[8] = Et, u[9] = kt, u[10] = At, u[11] = xt, u[12] = Tt, u[13] = Nt, u[14] = Pt, u[15] = Rt, u[16] = Ot, u[17] = It, u[18] = Ct, 0 !== h && (u[19] = h, r.length++), r;
    };

    function p(t, e, r) {
      return new m().mulp(t, e, r);
    }

    function m(t, e) {
      this.x = t, this.y = e;
    }

    Math.imul || (d = c), o.prototype.mulTo = function (t, e) {
      var r = this.length + t.length;
      return 10 === this.length && 10 === t.length ? d(this, t, e) : r < 63 ? c(this, t, e) : r < 1024 ? function (t, e, r) {
        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;

        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
          var s = i;
          i = 0;

          for (var a = 67108863 & n, u = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= u; h++) {
            var l = o - h,
                f = (0 | t.words[l]) * (0 | e.words[h]),
                c = 67108863 & f;
            a = 67108863 & (c = c + a | 0), i += (s = (s = s + (f / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863;
          }

          r.words[o] = a, n = s, s = i;
        }

        return 0 !== n ? r.words[o] = n : r.length--, r.strip();
      }(this, t, e) : p(this, t, e);
    }, m.prototype.makeRBT = function (t) {
      for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);

      return e;
    }, m.prototype.revBin = function (t, e, r) {
      if (0 === t || t === r - 1) return t;

      for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;

      return n;
    }, m.prototype.permute = function (t, e, r, n, i, o) {
      for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]];
    }, m.prototype.transform = function (t, e, r, n, i, o) {
      this.permute(o, t, e, r, n, i);

      for (var s = 1; s < i; s <<= 1) for (var a = s << 1, u = Math.cos(2 * Math.PI / a), h = Math.sin(2 * Math.PI / a), l = 0; l < i; l += a) for (var f = u, c = h, d = 0; d < s; d++) {
        var p = r[l + d],
            m = n[l + d],
            v = r[l + d + s],
            g = n[l + d + s],
            y = f * v - c * g;
        g = f * g + c * v, v = y, r[l + d] = p + v, n[l + d] = m + g, r[l + d + s] = p - v, n[l + d + s] = m - g, d !== a && (y = u * f - h * c, c = u * c + h * f, f = y);
      }
    }, m.prototype.guessLen13b = function (t, e) {
      var r = 1 | Math.max(e, t),
          n = 1 & r,
          i = 0;

      for (r = r / 2 | 0; r; r >>>= 1) i++;

      return 1 << i + 1 + n;
    }, m.prototype.conjugate = function (t, e, r) {
      if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
        var i = t[n];
        t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i;
      }
    }, m.prototype.normalize13b = function (t, e) {
      for (var r = 0, n = 0; n < e / 2; n++) {
        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
      }

      return t;
    }, m.prototype.convert13b = function (t, e, n, i) {
      for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], n[2 * s] = 8191 & o, o >>>= 13, n[2 * s + 1] = 8191 & o, o >>>= 13;

      for (s = 2 * e; s < i; ++s) n[s] = 0;

      r(0 === o), r(0 == (-8192 & o));
    }, m.prototype.stub = function (t) {
      for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;

      return e;
    }, m.prototype.mulp = function (t, e, r) {
      var n = 2 * this.guessLen13b(t.length, e.length),
          i = this.makeRBT(n),
          o = this.stub(n),
          s = new Array(n),
          a = new Array(n),
          u = new Array(n),
          h = new Array(n),
          l = new Array(n),
          f = new Array(n),
          c = r.words;
      c.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, h, n), this.transform(s, o, a, u, n, i), this.transform(h, o, l, f, n, i);

      for (var d = 0; d < n; d++) {
        var p = a[d] * l[d] - u[d] * f[d];
        u[d] = a[d] * f[d] + u[d] * l[d], a[d] = p;
      }

      return this.conjugate(a, u, n), this.transform(a, u, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip();
    }, o.prototype.mul = function (t) {
      var e = new o(null);
      return e.words = new Array(this.length + t.length), this.mulTo(t, e);
    }, o.prototype.mulf = function (t) {
      var e = new o(null);
      return e.words = new Array(this.length + t.length), p(this, t, e);
    }, o.prototype.imul = function (t) {
      return this.clone().mulTo(t, this);
    }, o.prototype.imuln = function (t) {
      r("number" == typeof t), r(t < 67108864);

      for (var e = 0, n = 0; n < this.length; n++) {
        var i = (0 | this.words[n]) * t,
            o = (67108863 & i) + (67108863 & e);
        e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[n] = 67108863 & o;
      }

      return 0 !== e && (this.words[n] = e, this.length++), this;
    }, o.prototype.muln = function (t) {
      return this.clone().imuln(t);
    }, o.prototype.sqr = function () {
      return this.mul(this);
    }, o.prototype.isqr = function () {
      return this.imul(this.clone());
    }, o.prototype.pow = function (t) {
      var e = function (t) {
        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
          var n = r / 26 | 0,
              i = r % 26;
          e[r] = (t.words[n] & 1 << i) >>> i;
        }

        return e;
      }(t);

      if (0 === e.length) return new o(1);

      for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());

      if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
      return r;
    }, o.prototype.iushln = function (t) {
      r("number" == typeof t && t >= 0);
      var e,
          n = t % 26,
          i = (t - n) / 26,
          o = 67108863 >>> 26 - n << 26 - n;

      if (0 !== n) {
        var s = 0;

        for (e = 0; e < this.length; e++) {
          var a = this.words[e] & o,
              u = (0 | this.words[e]) - a << n;
          this.words[e] = u | s, s = a >>> 26 - n;
        }

        s && (this.words[e] = s, this.length++);
      }

      if (0 !== i) {
        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];

        for (e = 0; e < i; e++) this.words[e] = 0;

        this.length += i;
      }

      return this.strip();
    }, o.prototype.ishln = function (t) {
      return r(0 === this.negative), this.iushln(t);
    }, o.prototype.iushrn = function (t, e, n) {
      var i;
      r("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
      var o = t % 26,
          s = Math.min((t - o) / 26, this.length),
          a = 67108863 ^ 67108863 >>> o << o,
          u = n;

      if (i -= s, i = Math.max(0, i), u) {
        for (var h = 0; h < s; h++) u.words[h] = this.words[h];

        u.length = s;
      }

      if (0 === s) ;else if (this.length > s) for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s];else this.words[0] = 0, this.length = 1;
      var l = 0;

      for (h = this.length - 1; h >= 0 && (0 !== l || h >= i); h--) {
        var f = 0 | this.words[h];
        this.words[h] = l << 26 - o | f >>> o, l = f & a;
      }

      return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
    }, o.prototype.ishrn = function (t, e, n) {
      return r(0 === this.negative), this.iushrn(t, e, n);
    }, o.prototype.shln = function (t) {
      return this.clone().ishln(t);
    }, o.prototype.ushln = function (t) {
      return this.clone().iushln(t);
    }, o.prototype.shrn = function (t) {
      return this.clone().ishrn(t);
    }, o.prototype.ushrn = function (t) {
      return this.clone().iushrn(t);
    }, o.prototype.testn = function (t) {
      r("number" == typeof t && t >= 0);
      var e = t % 26,
          n = (t - e) / 26,
          i = 1 << e;
      return !(this.length <= n) && !!(this.words[n] & i);
    }, o.prototype.imaskn = function (t) {
      r("number" == typeof t && t >= 0);
      var e = t % 26,
          n = (t - e) / 26;
      if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;

      if (0 !== e && n++, this.length = Math.min(n, this.length), 0 !== e) {
        var i = 67108863 ^ 67108863 >>> e << e;
        this.words[this.length - 1] &= i;
      }

      return this.strip();
    }, o.prototype.maskn = function (t) {
      return this.clone().imaskn(t);
    }, o.prototype.iaddn = function (t) {
      return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
    }, o.prototype._iaddn = function (t) {
      this.words[0] += t;

      for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;

      return this.length = Math.max(this.length, e + 1), this;
    }, o.prototype.isubn = function (t) {
      if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
      if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
      if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
      return this.strip();
    }, o.prototype.addn = function (t) {
      return this.clone().iaddn(t);
    }, o.prototype.subn = function (t) {
      return this.clone().isubn(t);
    }, o.prototype.iabs = function () {
      return this.negative = 0, this;
    }, o.prototype.abs = function () {
      return this.clone().iabs();
    }, o.prototype._ishlnsubmul = function (t, e, n) {
      var i,
          o,
          s = t.length + n;

      this._expand(s);

      var a = 0;

      for (i = 0; i < t.length; i++) {
        o = (0 | this.words[i + n]) + a;
        var u = (0 | t.words[i]) * e;
        a = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + n] = 67108863 & o;
      }

      for (; i < this.length - n; i++) a = (o = (0 | this.words[i + n]) + a) >> 26, this.words[i + n] = 67108863 & o;

      if (0 === a) return this.strip();

      for (r(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;

      return this.negative = 1, this.strip();
    }, o.prototype._wordDiv = function (t, e) {
      var r = (this.length, t.length),
          n = this.clone(),
          i = t,
          s = 0 | i.words[i.length - 1];
      0 !== (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
      var a,
          u = n.length - i.length;

      if ("mod" !== e) {
        (a = new o(null)).length = u + 1, a.words = new Array(a.length);

        for (var h = 0; h < a.length; h++) a.words[h] = 0;
      }

      var l = n.clone()._ishlnsubmul(i, 1, u);

      0 === l.negative && (n = l, a && (a.words[u] = 1));

      for (var f = u - 1; f >= 0; f--) {
        var c = 67108864 * (0 | n.words[i.length + f]) + (0 | n.words[i.length + f - 1]);

        for (c = Math.min(c / s | 0, 67108863), n._ishlnsubmul(i, c, f); 0 !== n.negative;) c--, n.negative = 0, n._ishlnsubmul(i, 1, f), n.isZero() || (n.negative ^= 1);

        a && (a.words[f] = c);
      }

      return a && a.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), {
        div: a || null,
        mod: n
      };
    }, o.prototype.divmod = function (t, e, n) {
      return r(!t.isZero()), this.isZero() ? {
        div: new o(0),
        mod: new o(0)
      } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (i = a.div.neg()), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.iadd(t)), {
        div: i,
        mod: s
      }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (i = a.div.neg()), {
        div: i,
        mod: a.mod
      }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.isub(t)), {
        div: a.div,
        mod: s
      }) : t.length > this.length || this.cmp(t) < 0 ? {
        div: new o(0),
        mod: this
      } : 1 === t.length ? "div" === e ? {
        div: this.divn(t.words[0]),
        mod: null
      } : "mod" === e ? {
        div: null,
        mod: new o(this.modn(t.words[0]))
      } : {
        div: this.divn(t.words[0]),
        mod: new o(this.modn(t.words[0]))
      } : this._wordDiv(t, e);
      var i, s, a;
    }, o.prototype.div = function (t) {
      return this.divmod(t, "div", !1).div;
    }, o.prototype.mod = function (t) {
      return this.divmod(t, "mod", !1).mod;
    }, o.prototype.umod = function (t) {
      return this.divmod(t, "mod", !0).mod;
    }, o.prototype.divRound = function (t) {
      var e = this.divmod(t);
      if (e.mod.isZero()) return e.div;
      var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
          n = t.ushrn(1),
          i = t.andln(1),
          o = r.cmp(n);
      return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
    }, o.prototype.modn = function (t) {
      r(t <= 67108863);

      for (var e = (1 << 26) % t, n = 0, i = this.length - 1; i >= 0; i--) n = (e * n + (0 | this.words[i])) % t;

      return n;
    }, o.prototype.idivn = function (t) {
      r(t <= 67108863);

      for (var e = 0, n = this.length - 1; n >= 0; n--) {
        var i = (0 | this.words[n]) + 67108864 * e;
        this.words[n] = i / t | 0, e = i % t;
      }

      return this.strip();
    }, o.prototype.divn = function (t) {
      return this.clone().idivn(t);
    }, o.prototype.egcd = function (t) {
      r(0 === t.negative), r(!t.isZero());
      var e = this,
          n = t.clone();
      e = 0 !== e.negative ? e.umod(t) : e.clone();

      for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), h = 0; e.isEven() && n.isEven();) e.iushrn(1), n.iushrn(1), ++h;

      for (var l = n.clone(), f = e.clone(); !e.isZero();) {
        for (var c = 0, d = 1; 0 == (e.words[0] & d) && c < 26; ++c, d <<= 1);

        if (c > 0) for (e.iushrn(c); c-- > 0;) (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(f)), i.iushrn(1), s.iushrn(1);

        for (var p = 0, m = 1; 0 == (n.words[0] & m) && p < 26; ++p, m <<= 1);

        if (p > 0) for (n.iushrn(p); p-- > 0;) (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(f)), a.iushrn(1), u.iushrn(1);
        e.cmp(n) >= 0 ? (e.isub(n), i.isub(a), s.isub(u)) : (n.isub(e), a.isub(i), u.isub(s));
      }

      return {
        a: a,
        b: u,
        gcd: n.iushln(h)
      };
    }, o.prototype._invmp = function (t) {
      r(0 === t.negative), r(!t.isZero());
      var e = this,
          n = t.clone();
      e = 0 !== e.negative ? e.umod(t) : e.clone();

      for (var i, s = new o(1), a = new o(0), u = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0;) {
        for (var h = 0, l = 1; 0 == (e.words[0] & l) && h < 26; ++h, l <<= 1);

        if (h > 0) for (e.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);

        for (var f = 0, c = 1; 0 == (n.words[0] & c) && f < 26; ++f, c <<= 1);

        if (f > 0) for (n.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
        e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s));
      }

      return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i;
    }, o.prototype.gcd = function (t) {
      if (this.isZero()) return t.abs();
      if (t.isZero()) return this.abs();
      var e = this.clone(),
          r = t.clone();
      e.negative = 0, r.negative = 0;

      for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);

      for (;;) {
        for (; e.isEven();) e.iushrn(1);

        for (; r.isEven();) r.iushrn(1);

        var i = e.cmp(r);

        if (i < 0) {
          var o = e;
          e = r, r = o;
        } else if (0 === i || 0 === r.cmpn(1)) break;

        e.isub(r);
      }

      return r.iushln(n);
    }, o.prototype.invm = function (t) {
      return this.egcd(t).a.umod(t);
    }, o.prototype.isEven = function () {
      return 0 == (1 & this.words[0]);
    }, o.prototype.isOdd = function () {
      return 1 == (1 & this.words[0]);
    }, o.prototype.andln = function (t) {
      return this.words[0] & t;
    }, o.prototype.bincn = function (t) {
      r("number" == typeof t);
      var e = t % 26,
          n = (t - e) / 26,
          i = 1 << e;
      if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;

      for (var o = i, s = n; 0 !== o && s < this.length; s++) {
        var a = 0 | this.words[s];
        o = (a += o) >>> 26, a &= 67108863, this.words[s] = a;
      }

      return 0 !== o && (this.words[s] = o, this.length++), this;
    }, o.prototype.isZero = function () {
      return 1 === this.length && 0 === this.words[0];
    }, o.prototype.cmpn = function (t) {
      var e,
          n = t < 0;
      if (0 !== this.negative && !n) return -1;
      if (0 === this.negative && n) return 1;
      if (this.strip(), this.length > 1) e = 1;else {
        n && (t = -t), r(t <= 67108863, "Number is too big");
        var i = 0 | this.words[0];
        e = i === t ? 0 : i < t ? -1 : 1;
      }
      return 0 !== this.negative ? 0 | -e : e;
    }, o.prototype.cmp = function (t) {
      if (0 !== this.negative && 0 === t.negative) return -1;
      if (0 === this.negative && 0 !== t.negative) return 1;
      var e = this.ucmp(t);
      return 0 !== this.negative ? 0 | -e : e;
    }, o.prototype.ucmp = function (t) {
      if (this.length > t.length) return 1;
      if (this.length < t.length) return -1;

      for (var e = 0, r = this.length - 1; r >= 0; r--) {
        var n = 0 | this.words[r],
            i = 0 | t.words[r];

        if (n !== i) {
          n < i ? e = -1 : n > i && (e = 1);
          break;
        }
      }

      return e;
    }, o.prototype.gtn = function (t) {
      return 1 === this.cmpn(t);
    }, o.prototype.gt = function (t) {
      return 1 === this.cmp(t);
    }, o.prototype.gten = function (t) {
      return this.cmpn(t) >= 0;
    }, o.prototype.gte = function (t) {
      return this.cmp(t) >= 0;
    }, o.prototype.ltn = function (t) {
      return -1 === this.cmpn(t);
    }, o.prototype.lt = function (t) {
      return -1 === this.cmp(t);
    }, o.prototype.lten = function (t) {
      return this.cmpn(t) <= 0;
    }, o.prototype.lte = function (t) {
      return this.cmp(t) <= 0;
    }, o.prototype.eqn = function (t) {
      return 0 === this.cmpn(t);
    }, o.prototype.eq = function (t) {
      return 0 === this.cmp(t);
    }, o.red = function (t) {
      return new M(t);
    }, o.prototype.toRed = function (t) {
      return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t);
    }, o.prototype.fromRed = function () {
      return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o.prototype._forceRed = function (t) {
      return this.red = t, this;
    }, o.prototype.forceRed = function (t) {
      return r(!this.red, "Already a number in reduction context"), this._forceRed(t);
    }, o.prototype.redAdd = function (t) {
      return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
    }, o.prototype.redIAdd = function (t) {
      return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
    }, o.prototype.redSub = function (t) {
      return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
    }, o.prototype.redISub = function (t) {
      return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
    }, o.prototype.redShl = function (t) {
      return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
    }, o.prototype.redMul = function (t) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
    }, o.prototype.redIMul = function (t) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
    }, o.prototype.redSqr = function () {
      return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o.prototype.redISqr = function () {
      return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o.prototype.redSqrt = function () {
      return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o.prototype.redInvm = function () {
      return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o.prototype.redNeg = function () {
      return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o.prototype.redPow = function (t) {
      return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
    };
    var v = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };

    function g(t, e) {
      this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }

    function y() {
      g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }

    function w() {
      g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }

    function b() {
      g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }

    function _() {
      g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }

    function M(t) {
      if ("string" == typeof t) {
        var e = o._prime(t);

        this.m = e.p, this.prime = e;
      } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null;
    }

    function S(t) {
      M.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }

    g.prototype._tmp = function () {
      var t = new o(null);
      return t.words = new Array(Math.ceil(this.n / 13)), t;
    }, g.prototype.ireduce = function (t) {
      var e,
          r = t;

      do {
        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
      } while (e > this.n);

      var n = e < this.n ? -1 : r.ucmp(this.p);
      return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r;
    }, g.prototype.split = function (t, e) {
      t.iushrn(this.n, 0, e);
    }, g.prototype.imulK = function (t) {
      return t.imul(this.k);
    }, i(y, g), y.prototype.split = function (t, e) {
      for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n];

      if (e.length = r, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
      var i = t.words[9];

      for (e.words[e.length++] = 4194303 & i, n = 10; n < t.length; n++) {
        var o = 0 | t.words[n];
        t.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o;
      }

      i >>>= 22, t.words[n - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9;
    }, y.prototype.imulK = function (t) {
      t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;

      for (var e = 0, r = 0; r < t.length; r++) {
        var n = 0 | t.words[r];
        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
      }

      return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
    }, i(w, g), i(b, g), i(_, g), _.prototype.imulK = function (t) {
      for (var e = 0, r = 0; r < t.length; r++) {
        var n = 19 * (0 | t.words[r]) + e,
            i = 67108863 & n;
        n >>>= 26, t.words[r] = i, e = n;
      }

      return 0 !== e && (t.words[t.length++] = e), t;
    }, o._prime = function (t) {
      if (v[t]) return v[t];
      var e;
      if ("k256" === t) e = new y();else if ("p224" === t) e = new w();else if ("p192" === t) e = new b();else {
        if ("p25519" !== t) throw new Error("Unknown prime " + t);
        e = new _();
      }
      return v[t] = e, e;
    }, M.prototype._verify1 = function (t) {
      r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers");
    }, M.prototype._verify2 = function (t, e) {
      r(0 == (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers");
    }, M.prototype.imod = function (t) {
      return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
    }, M.prototype.neg = function (t) {
      return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
    }, M.prototype.add = function (t, e) {
      this._verify2(t, e);

      var r = t.add(e);
      return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
    }, M.prototype.iadd = function (t, e) {
      this._verify2(t, e);

      var r = t.iadd(e);
      return r.cmp(this.m) >= 0 && r.isub(this.m), r;
    }, M.prototype.sub = function (t, e) {
      this._verify2(t, e);

      var r = t.sub(e);
      return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
    }, M.prototype.isub = function (t, e) {
      this._verify2(t, e);

      var r = t.isub(e);
      return r.cmpn(0) < 0 && r.iadd(this.m), r;
    }, M.prototype.shl = function (t, e) {
      return this._verify1(t), this.imod(t.ushln(e));
    }, M.prototype.imul = function (t, e) {
      return this._verify2(t, e), this.imod(t.imul(e));
    }, M.prototype.mul = function (t, e) {
      return this._verify2(t, e), this.imod(t.mul(e));
    }, M.prototype.isqr = function (t) {
      return this.imul(t, t.clone());
    }, M.prototype.sqr = function (t) {
      return this.mul(t, t);
    }, M.prototype.sqrt = function (t) {
      if (t.isZero()) return t.clone();
      var e = this.m.andln(3);

      if (r(e % 2 == 1), 3 === e) {
        var n = this.m.add(new o(1)).iushrn(2);
        return this.pow(t, n);
      }

      for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);

      r(!i.isZero());
      var a = new o(1).toRed(this),
          u = a.redNeg(),
          h = this.m.subn(1).iushrn(1),
          l = this.m.bitLength();

      for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, h).cmp(u);) l.redIAdd(u);

      for (var f = this.pow(l, i), c = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s; 0 !== d.cmp(a);) {
        for (var m = d, v = 0; 0 !== m.cmp(a); v++) m = m.redSqr();

        r(v < p);
        var g = this.pow(f, new o(1).iushln(p - v - 1));
        c = c.redMul(g), f = g.redSqr(), d = d.redMul(f), p = v;
      }

      return c;
    }, M.prototype.invm = function (t) {
      var e = t._invmp(this.m);

      return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
    }, M.prototype.pow = function (t, e) {
      if (e.isZero()) return new o(1);
      if (0 === e.cmpn(1)) return t.clone();
      var r = new Array(16);
      r[0] = new o(1).toRed(this), r[1] = t;

      for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);

      var i = r[0],
          s = 0,
          a = 0,
          u = e.bitLength() % 26;

      for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
        for (var h = e.words[n], l = u - 1; l >= 0; l--) {
          var f = h >> l & 1;
          i !== r[0] && (i = this.sqr(i)), 0 !== f || 0 !== s ? (s <<= 1, s |= f, (4 === ++a || 0 === n && 0 === l) && (i = this.mul(i, r[s]), a = 0, s = 0)) : a = 0;
        }

        u = 26;
      }

      return i;
    }, M.prototype.convertTo = function (t) {
      var e = t.umod(this.m);
      return e === t ? e.clone() : e;
    }, M.prototype.convertFrom = function (t) {
      var e = t.clone();
      return e.red = null, e;
    }, o.mont = function (t) {
      return new S(t);
    }, i(S, M), S.prototype.convertTo = function (t) {
      return this.imod(t.ushln(this.shift));
    }, S.prototype.convertFrom = function (t) {
      var e = this.imod(t.mul(this.rinv));
      return e.red = null, e;
    }, S.prototype.imul = function (t, e) {
      if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
      var r = t.imul(e),
          n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          i = r.isub(n).iushrn(this.shift),
          o = i;
      return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
    }, S.prototype.mul = function (t, e) {
      if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
      var r = t.mul(e),
          n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          i = r.isub(n).iushrn(this.shift),
          s = i;
      return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this);
    }, S.prototype.invm = function (t) {
      return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
    };
  }(t, _indexD3bd.f);
})),
    we = (0, _indexD3bd.d)(function (t) {
  !function (t, e) {
    function r(t, e) {
      if (!t) throw new Error(e || "Assertion failed");
    }

    function i(t, e) {
      t.super_ = e;

      var r = function () {};

      r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
    }

    function o(t, e, r) {
      if (o.isBN(t)) return t;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"));
    }

    var s;
    "object" == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;

    try {
      s = (0, _indexD3bd.g)("buffer").Buffer;
    } catch (t) {}

    function a(t, e, r) {
      for (var n = 0, i = Math.min(t.length, r), o = e; o < i; o++) {
        var s = t.charCodeAt(o) - 48;
        n <<= 4, n |= s >= 49 && s <= 54 ? s - 49 + 10 : s >= 17 && s <= 22 ? s - 17 + 10 : 15 & s;
      }

      return n;
    }

    function u(t, e, r, n) {
      for (var i = 0, o = Math.min(t.length, r), s = e; s < o; s++) {
        var a = t.charCodeAt(s) - 48;
        i *= n, i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a;
      }

      return i;
    }

    o.isBN = function (t) {
      return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
    }, o.max = function (t, e) {
      return t.cmp(e) > 0 ? t : e;
    }, o.min = function (t, e) {
      return t.cmp(e) < 0 ? t : e;
    }, o.prototype._init = function (t, e, n) {
      if ("number" == typeof t) return this._initNumber(t, e, n);
      if ("object" == typeof t) return this._initArray(t, e, n);
      "hex" === e && (e = 16), r(e === (0 | e) && e >= 2 && e <= 36);
      var i = 0;
      "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++, 16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i), "-" === t[0] && (this.negative = 1), this.strip(), "le" === n && this._initArray(this.toArray(), e, n);
    }, o.prototype._initNumber = function (t, e, n) {
      t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (r(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), e, n);
    }, o.prototype._initArray = function (t, e, n) {
      if (r("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);

      for (var i = 0; i < this.length; i++) this.words[i] = 0;

      var o,
          s,
          a = 0;
      if ("be" === n) for (i = t.length - 1, o = 0; i >= 0; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);else if ("le" === n) for (i = 0, o = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, (a += 24) >= 26 && (a -= 26, o++);
      return this.strip();
    }, o.prototype._parseHex = function (t, e) {
      this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);

      for (var r = 0; r < this.length; r++) this.words[r] = 0;

      var n,
          i,
          o = 0;

      for (r = t.length - 6, n = 0; r >= e; r -= 6) i = a(t, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);

      r + 6 !== e && (i = a(t, e, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip();
    }, o.prototype._parseBase = function (t, e, r) {
      this.words = [0], this.length = 1;

      for (var n = 0, i = 1; i <= 67108863; i *= e) n++;

      n--, i = i / e | 0;

      for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, h = 0, l = r; l < a; l += n) h = u(t, l, l + n, e), this.imuln(i), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);

      if (0 !== s) {
        var f = 1;

        for (h = u(t, l, t.length, e), l = 0; l < s; l++) f *= e;

        this.imuln(f), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
      }
    }, o.prototype.copy = function (t) {
      t.words = new Array(this.length);

      for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];

      t.length = this.length, t.negative = this.negative, t.red = this.red;
    }, o.prototype.clone = function () {
      var t = new o(null);
      return this.copy(t), t;
    }, o.prototype._expand = function (t) {
      for (; this.length < t;) this.words[this.length++] = 0;

      return this;
    }, o.prototype.strip = function () {
      for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;

      return this._normSign();
    }, o.prototype._normSign = function () {
      return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
    }, o.prototype.inspect = function () {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
        l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

    function c(t, e, r) {
      r.negative = e.negative ^ t.negative;
      var n = t.length + e.length | 0;
      r.length = n, n = n - 1 | 0;
      var i = 0 | t.words[0],
          o = 0 | e.words[0],
          s = i * o,
          a = 67108863 & s,
          u = s / 67108864 | 0;
      r.words[0] = a;

      for (var h = 1; h < n; h++) {
        for (var l = u >>> 26, f = 67108863 & u, c = Math.min(h, e.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
          var p = h - d | 0;
          l += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + f) / 67108864 | 0, f = 67108863 & s;
        }

        r.words[h] = 0 | f, u = 0 | l;
      }

      return 0 !== u ? r.words[h] = 0 | u : r.length--, r.strip();
    }

    o.prototype.toString = function (t, e) {
      var n;

      if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
        n = "";

        for (var i = 0, o = 0, s = 0; s < this.length; s++) {
          var a = this.words[s],
              u = (16777215 & (a << i | o)).toString(16);
          n = 0 !== (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? h[6 - u.length] + u + n : u + n, (i += 2) >= 26 && (i -= 26, s--);
        }

        for (0 !== o && (n = o.toString(16) + n); n.length % e != 0;) n = "0" + n;

        return 0 !== this.negative && (n = "-" + n), n;
      }

      if (t === (0 | t) && t >= 2 && t <= 36) {
        var c = l[t],
            d = f[t];
        n = "";
        var p = this.clone();

        for (p.negative = 0; !p.isZero();) {
          var m = p.modn(d).toString(t);
          n = (p = p.idivn(d)).isZero() ? m + n : h[c - m.length] + m + n;
        }

        for (this.isZero() && (n = "0" + n); n.length % e != 0;) n = "0" + n;

        return 0 !== this.negative && (n = "-" + n), n;
      }

      r(!1, "Base should be between 2 and 36");
    }, o.prototype.toNumber = function () {
      var t = this.words[0];
      return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t;
    }, o.prototype.toJSON = function () {
      return this.toString(16);
    }, o.prototype.toBuffer = function (t, e) {
      return r(void 0 !== s), this.toArrayLike(s, t, e);
    }, o.prototype.toArray = function (t, e) {
      return this.toArrayLike(Array, t, e);
    }, o.prototype.toArrayLike = function (t, e, n) {
      var i = this.byteLength(),
          o = n || Math.max(1, i);
      r(i <= o, "byte array longer than desired length"), r(o > 0, "Requested array length <= 0"), this.strip();
      var s,
          a,
          u = "le" === e,
          h = new t(o),
          l = this.clone();

      if (u) {
        for (a = 0; !l.isZero(); a++) s = l.andln(255), l.iushrn(8), h[a] = s;

        for (; a < o; a++) h[a] = 0;
      } else {
        for (a = 0; a < o - i; a++) h[a] = 0;

        for (a = 0; !l.isZero(); a++) s = l.andln(255), l.iushrn(8), h[o - a - 1] = s;
      }

      return h;
    }, Math.clz32 ? o.prototype._countBits = function (t) {
      return 32 - Math.clz32(t);
    } : o.prototype._countBits = function (t) {
      var e = t,
          r = 0;
      return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, e >>>= 2), r + e;
    }, o.prototype._zeroBits = function (t) {
      if (0 === t) return 26;
      var e = t,
          r = 0;
      return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
    }, o.prototype.bitLength = function () {
      var t = this.words[this.length - 1],
          e = this._countBits(t);

      return 26 * (this.length - 1) + e;
    }, o.prototype.zeroBits = function () {
      if (this.isZero()) return 0;

      for (var t = 0, e = 0; e < this.length; e++) {
        var r = this._zeroBits(this.words[e]);

        if (t += r, 26 !== r) break;
      }

      return t;
    }, o.prototype.byteLength = function () {
      return Math.ceil(this.bitLength() / 8);
    }, o.prototype.toTwos = function (t) {
      return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
    }, o.prototype.fromTwos = function (t) {
      return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
    }, o.prototype.isNeg = function () {
      return 0 !== this.negative;
    }, o.prototype.neg = function () {
      return this.clone().ineg();
    }, o.prototype.ineg = function () {
      return this.isZero() || (this.negative ^= 1), this;
    }, o.prototype.iuor = function (t) {
      for (; this.length < t.length;) this.words[this.length++] = 0;

      for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];

      return this.strip();
    }, o.prototype.ior = function (t) {
      return r(0 == (this.negative | t.negative)), this.iuor(t);
    }, o.prototype.or = function (t) {
      return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
    }, o.prototype.uor = function (t) {
      return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
    }, o.prototype.iuand = function (t) {
      var e;
      e = this.length > t.length ? t : this;

      for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];

      return this.length = e.length, this.strip();
    }, o.prototype.iand = function (t) {
      return r(0 == (this.negative | t.negative)), this.iuand(t);
    }, o.prototype.and = function (t) {
      return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
    }, o.prototype.uand = function (t) {
      return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
    }, o.prototype.iuxor = function (t) {
      var e, r;
      this.length > t.length ? (e = this, r = t) : (e = t, r = this);

      for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];

      if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n];
      return this.length = e.length, this.strip();
    }, o.prototype.ixor = function (t) {
      return r(0 == (this.negative | t.negative)), this.iuxor(t);
    }, o.prototype.xor = function (t) {
      return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
    }, o.prototype.uxor = function (t) {
      return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
    }, o.prototype.inotn = function (t) {
      r("number" == typeof t && t >= 0);
      var e = 0 | Math.ceil(t / 26),
          n = t % 26;
      this._expand(e), n > 0 && e--;

      for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];

      return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip();
    }, o.prototype.notn = function (t) {
      return this.clone().inotn(t);
    }, o.prototype.setn = function (t, e) {
      r("number" == typeof t && t >= 0);
      var n = t / 26 | 0,
          i = t % 26;
      return this._expand(n + 1), this.words[n] = e ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this.strip();
    }, o.prototype.iadd = function (t) {
      var e, r, n;
      if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
      if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
      this.length > t.length ? (r = this, n = t) : (r = t, n = this);

      for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;

      for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;

      if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o];
      return this;
    }, o.prototype.add = function (t) {
      var e;
      return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
    }, o.prototype.isub = function (t) {
      if (0 !== t.negative) {
        t.negative = 0;
        var e = this.iadd(t);
        return t.negative = 1, e._normSign();
      }

      if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
      var r,
          n,
          i = this.cmp(t);
      if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      i > 0 ? (r = this, n = t) : (r = t, n = this);

      for (var o = 0, s = 0; s < n.length; s++) o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;

      for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;

      if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
      return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip();
    }, o.prototype.sub = function (t) {
      return this.clone().isub(t);
    };

    var d = function (t, e, r) {
      var n,
          i,
          o,
          s = t.words,
          a = e.words,
          u = r.words,
          h = 0,
          l = 0 | s[0],
          f = 8191 & l,
          c = l >>> 13,
          d = 0 | s[1],
          p = 8191 & d,
          m = d >>> 13,
          v = 0 | s[2],
          g = 8191 & v,
          y = v >>> 13,
          w = 0 | s[3],
          b = 8191 & w,
          _ = w >>> 13,
          M = 0 | s[4],
          S = 8191 & M,
          E = M >>> 13,
          k = 0 | s[5],
          A = 8191 & k,
          x = k >>> 13,
          T = 0 | s[6],
          N = 8191 & T,
          P = T >>> 13,
          R = 0 | s[7],
          O = 8191 & R,
          I = R >>> 13,
          C = 0 | s[8],
          D = 8191 & C,
          L = C >>> 13,
          U = 0 | s[9],
          j = 8191 & U,
          B = U >>> 13,
          F = 0 | a[0],
          H = 8191 & F,
          G = F >>> 13,
          W = 0 | a[1],
          z = 8191 & W,
          q = W >>> 13,
          K = 0 | a[2],
          Y = 8191 & K,
          V = K >>> 13,
          Z = 0 | a[3],
          J = 8191 & Z,
          $ = Z >>> 13,
          X = 0 | a[4],
          Q = 8191 & X,
          tt = X >>> 13,
          et = 0 | a[5],
          rt = 8191 & et,
          nt = et >>> 13,
          it = 0 | a[6],
          ot = 8191 & it,
          st = it >>> 13,
          at = 0 | a[7],
          ut = 8191 & at,
          ht = at >>> 13,
          lt = 0 | a[8],
          ft = 8191 & lt,
          ct = lt >>> 13,
          dt = 0 | a[9],
          pt = 8191 & dt,
          mt = dt >>> 13;

      r.negative = t.negative ^ e.negative, r.length = 19;
      var vt = (h + (n = Math.imul(f, H)) | 0) + ((8191 & (i = (i = Math.imul(f, G)) + Math.imul(c, H) | 0)) << 13) | 0;
      h = ((o = Math.imul(c, G)) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(p, H), i = (i = Math.imul(p, G)) + Math.imul(m, H) | 0, o = Math.imul(m, G);
      var gt = (h + (n = n + Math.imul(f, z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, q) | 0) + Math.imul(c, z) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, q) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(g, H), i = (i = Math.imul(g, G)) + Math.imul(y, H) | 0, o = Math.imul(y, G), n = n + Math.imul(p, z) | 0, i = (i = i + Math.imul(p, q) | 0) + Math.imul(m, z) | 0, o = o + Math.imul(m, q) | 0;
      var yt = (h + (n = n + Math.imul(f, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, V) | 0) + Math.imul(c, Y) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, V) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(b, H), i = (i = Math.imul(b, G)) + Math.imul(_, H) | 0, o = Math.imul(_, G), n = n + Math.imul(g, z) | 0, i = (i = i + Math.imul(g, q) | 0) + Math.imul(y, z) | 0, o = o + Math.imul(y, q) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(m, Y) | 0, o = o + Math.imul(m, V) | 0;
      var wt = (h + (n = n + Math.imul(f, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, $) | 0) + Math.imul(c, J) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, $) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(S, H), i = (i = Math.imul(S, G)) + Math.imul(E, H) | 0, o = Math.imul(E, G), n = n + Math.imul(b, z) | 0, i = (i = i + Math.imul(b, q) | 0) + Math.imul(_, z) | 0, o = o + Math.imul(_, q) | 0, n = n + Math.imul(g, Y) | 0, i = (i = i + Math.imul(g, V) | 0) + Math.imul(y, Y) | 0, o = o + Math.imul(y, V) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, $) | 0;
      var bt = (h + (n = n + Math.imul(f, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tt) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, tt) | 0) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(A, H), i = (i = Math.imul(A, G)) + Math.imul(x, H) | 0, o = Math.imul(x, G), n = n + Math.imul(S, z) | 0, i = (i = i + Math.imul(S, q) | 0) + Math.imul(E, z) | 0, o = o + Math.imul(E, q) | 0, n = n + Math.imul(b, Y) | 0, i = (i = i + Math.imul(b, V) | 0) + Math.imul(_, Y) | 0, o = o + Math.imul(_, V) | 0, n = n + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, $) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, $) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0;

      var _t = (h + (n = n + Math.imul(f, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, nt) | 0) + Math.imul(c, rt) | 0)) << 13) | 0;

      h = ((o = o + Math.imul(c, nt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(N, H), i = (i = Math.imul(N, G)) + Math.imul(P, H) | 0, o = Math.imul(P, G), n = n + Math.imul(A, z) | 0, i = (i = i + Math.imul(A, q) | 0) + Math.imul(x, z) | 0, o = o + Math.imul(x, q) | 0, n = n + Math.imul(S, Y) | 0, i = (i = i + Math.imul(S, V) | 0) + Math.imul(E, Y) | 0, o = o + Math.imul(E, V) | 0, n = n + Math.imul(b, J) | 0, i = (i = i + Math.imul(b, $) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, $) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, tt) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, nt) | 0;
      var Mt = (h + (n = n + Math.imul(f, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, st) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, H), i = (i = Math.imul(O, G)) + Math.imul(I, H) | 0, o = Math.imul(I, G), n = n + Math.imul(N, z) | 0, i = (i = i + Math.imul(N, q) | 0) + Math.imul(P, z) | 0, o = o + Math.imul(P, q) | 0, n = n + Math.imul(A, Y) | 0, i = (i = i + Math.imul(A, V) | 0) + Math.imul(x, Y) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(S, J) | 0, i = (i = i + Math.imul(S, $) | 0) + Math.imul(E, J) | 0, o = o + Math.imul(E, $) | 0, n = n + Math.imul(b, Q) | 0, i = (i = i + Math.imul(b, tt) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, tt) | 0, n = n + Math.imul(g, rt) | 0, i = (i = i + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0;
      var St = (h + (n = n + Math.imul(f, ut) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ht) | 0) + Math.imul(c, ut) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, ht) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(D, H), i = (i = Math.imul(D, G)) + Math.imul(L, H) | 0, o = Math.imul(L, G), n = n + Math.imul(O, z) | 0, i = (i = i + Math.imul(O, q) | 0) + Math.imul(I, z) | 0, o = o + Math.imul(I, q) | 0, n = n + Math.imul(N, Y) | 0, i = (i = i + Math.imul(N, V) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, V) | 0, n = n + Math.imul(A, J) | 0, i = (i = i + Math.imul(A, $) | 0) + Math.imul(x, J) | 0, o = o + Math.imul(x, $) | 0, n = n + Math.imul(S, Q) | 0, i = (i = i + Math.imul(S, tt) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, tt) | 0, n = n + Math.imul(b, rt) | 0, i = (i = i + Math.imul(b, nt) | 0) + Math.imul(_, rt) | 0, o = o + Math.imul(_, nt) | 0, n = n + Math.imul(g, ot) | 0, i = (i = i + Math.imul(g, st) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, n = n + Math.imul(p, ut) | 0, i = (i = i + Math.imul(p, ht) | 0) + Math.imul(m, ut) | 0, o = o + Math.imul(m, ht) | 0;
      var Et = (h + (n = n + Math.imul(f, ft) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ct) | 0) + Math.imul(c, ft) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, ct) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(j, H), i = (i = Math.imul(j, G)) + Math.imul(B, H) | 0, o = Math.imul(B, G), n = n + Math.imul(D, z) | 0, i = (i = i + Math.imul(D, q) | 0) + Math.imul(L, z) | 0, o = o + Math.imul(L, q) | 0, n = n + Math.imul(O, Y) | 0, i = (i = i + Math.imul(O, V) | 0) + Math.imul(I, Y) | 0, o = o + Math.imul(I, V) | 0, n = n + Math.imul(N, J) | 0, i = (i = i + Math.imul(N, $) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, $) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(S, rt) | 0, i = (i = i + Math.imul(S, nt) | 0) + Math.imul(E, rt) | 0, o = o + Math.imul(E, nt) | 0, n = n + Math.imul(b, ot) | 0, i = (i = i + Math.imul(b, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, n = n + Math.imul(g, ut) | 0, i = (i = i + Math.imul(g, ht) | 0) + Math.imul(y, ut) | 0, o = o + Math.imul(y, ht) | 0, n = n + Math.imul(p, ft) | 0, i = (i = i + Math.imul(p, ct) | 0) + Math.imul(m, ft) | 0, o = o + Math.imul(m, ct) | 0;
      var kt = (h + (n = n + Math.imul(f, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, mt) | 0) + Math.imul(c, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(c, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(j, z), i = (i = Math.imul(j, q)) + Math.imul(B, z) | 0, o = Math.imul(B, q), n = n + Math.imul(D, Y) | 0, i = (i = i + Math.imul(D, V) | 0) + Math.imul(L, Y) | 0, o = o + Math.imul(L, V) | 0, n = n + Math.imul(O, J) | 0, i = (i = i + Math.imul(O, $) | 0) + Math.imul(I, J) | 0, o = o + Math.imul(I, $) | 0, n = n + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, tt) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, tt) | 0, n = n + Math.imul(A, rt) | 0, i = (i = i + Math.imul(A, nt) | 0) + Math.imul(x, rt) | 0, o = o + Math.imul(x, nt) | 0, n = n + Math.imul(S, ot) | 0, i = (i = i + Math.imul(S, st) | 0) + Math.imul(E, ot) | 0, o = o + Math.imul(E, st) | 0, n = n + Math.imul(b, ut) | 0, i = (i = i + Math.imul(b, ht) | 0) + Math.imul(_, ut) | 0, o = o + Math.imul(_, ht) | 0, n = n + Math.imul(g, ft) | 0, i = (i = i + Math.imul(g, ct) | 0) + Math.imul(y, ft) | 0, o = o + Math.imul(y, ct) | 0;
      var At = (h + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(j, Y), i = (i = Math.imul(j, V)) + Math.imul(B, Y) | 0, o = Math.imul(B, V), n = n + Math.imul(D, J) | 0, i = (i = i + Math.imul(D, $) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, $) | 0, n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, tt) | 0, n = n + Math.imul(N, rt) | 0, i = (i = i + Math.imul(N, nt) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(A, ot) | 0, i = (i = i + Math.imul(A, st) | 0) + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, n = n + Math.imul(S, ut) | 0, i = (i = i + Math.imul(S, ht) | 0) + Math.imul(E, ut) | 0, o = o + Math.imul(E, ht) | 0, n = n + Math.imul(b, ft) | 0, i = (i = i + Math.imul(b, ct) | 0) + Math.imul(_, ft) | 0, o = o + Math.imul(_, ct) | 0;
      var xt = (h + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(y, mt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(j, J), i = (i = Math.imul(j, $)) + Math.imul(B, J) | 0, o = Math.imul(B, $), n = n + Math.imul(D, Q) | 0, i = (i = i + Math.imul(D, tt) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, tt) | 0, n = n + Math.imul(O, rt) | 0, i = (i = i + Math.imul(O, nt) | 0) + Math.imul(I, rt) | 0, o = o + Math.imul(I, nt) | 0, n = n + Math.imul(N, ot) | 0, i = (i = i + Math.imul(N, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, n = n + Math.imul(A, ut) | 0, i = (i = i + Math.imul(A, ht) | 0) + Math.imul(x, ut) | 0, o = o + Math.imul(x, ht) | 0, n = n + Math.imul(S, ft) | 0, i = (i = i + Math.imul(S, ct) | 0) + Math.imul(E, ft) | 0, o = o + Math.imul(E, ct) | 0;
      var Tt = (h + (n = n + Math.imul(b, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(b, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(j, Q), i = (i = Math.imul(j, tt)) + Math.imul(B, Q) | 0, o = Math.imul(B, tt), n = n + Math.imul(D, rt) | 0, i = (i = i + Math.imul(D, nt) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, nt) | 0, n = n + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, n = n + Math.imul(N, ut) | 0, i = (i = i + Math.imul(N, ht) | 0) + Math.imul(P, ut) | 0, o = o + Math.imul(P, ht) | 0, n = n + Math.imul(A, ft) | 0, i = (i = i + Math.imul(A, ct) | 0) + Math.imul(x, ft) | 0, o = o + Math.imul(x, ct) | 0;
      var Nt = (h + (n = n + Math.imul(S, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, mt) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(E, mt) | 0) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(j, rt), i = (i = Math.imul(j, nt)) + Math.imul(B, rt) | 0, o = Math.imul(B, nt), n = n + Math.imul(D, ot) | 0, i = (i = i + Math.imul(D, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, n = n + Math.imul(O, ut) | 0, i = (i = i + Math.imul(O, ht) | 0) + Math.imul(I, ut) | 0, o = o + Math.imul(I, ht) | 0, n = n + Math.imul(N, ft) | 0, i = (i = i + Math.imul(N, ct) | 0) + Math.imul(P, ft) | 0, o = o + Math.imul(P, ct) | 0;
      var Pt = (h + (n = n + Math.imul(A, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(x, mt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(j, ot), i = (i = Math.imul(j, st)) + Math.imul(B, ot) | 0, o = Math.imul(B, st), n = n + Math.imul(D, ut) | 0, i = (i = i + Math.imul(D, ht) | 0) + Math.imul(L, ut) | 0, o = o + Math.imul(L, ht) | 0, n = n + Math.imul(O, ft) | 0, i = (i = i + Math.imul(O, ct) | 0) + Math.imul(I, ft) | 0, o = o + Math.imul(I, ct) | 0;
      var Rt = (h + (n = n + Math.imul(N, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(P, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(j, ut), i = (i = Math.imul(j, ht)) + Math.imul(B, ut) | 0, o = Math.imul(B, ht), n = n + Math.imul(D, ft) | 0, i = (i = i + Math.imul(D, ct) | 0) + Math.imul(L, ft) | 0, o = o + Math.imul(L, ct) | 0;
      var Ot = (h + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(I, mt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(j, ft), i = (i = Math.imul(j, ct)) + Math.imul(B, ft) | 0, o = Math.imul(B, ct);
      var It = (h + (n = n + Math.imul(D, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(D, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
      h = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863;
      var Ct = (h + (n = Math.imul(j, pt)) | 0) + ((8191 & (i = (i = Math.imul(j, mt)) + Math.imul(B, pt) | 0)) << 13) | 0;
      return h = ((o = Math.imul(B, mt)) + (i >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, u[0] = vt, u[1] = gt, u[2] = yt, u[3] = wt, u[4] = bt, u[5] = _t, u[6] = Mt, u[7] = St, u[8] = Et, u[9] = kt, u[10] = At, u[11] = xt, u[12] = Tt, u[13] = Nt, u[14] = Pt, u[15] = Rt, u[16] = Ot, u[17] = It, u[18] = Ct, 0 !== h && (u[19] = h, r.length++), r;
    };

    function p(t, e, r) {
      return new m().mulp(t, e, r);
    }

    function m(t, e) {
      this.x = t, this.y = e;
    }

    Math.imul || (d = c), o.prototype.mulTo = function (t, e) {
      var r = this.length + t.length;
      return 10 === this.length && 10 === t.length ? d(this, t, e) : r < 63 ? c(this, t, e) : r < 1024 ? function (t, e, r) {
        r.negative = e.negative ^ t.negative, r.length = t.length + e.length;

        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
          var s = i;
          i = 0;

          for (var a = 67108863 & n, u = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= u; h++) {
            var l = o - h,
                f = (0 | t.words[l]) * (0 | e.words[h]),
                c = 67108863 & f;
            a = 67108863 & (c = c + a | 0), i += (s = (s = s + (f / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863;
          }

          r.words[o] = a, n = s, s = i;
        }

        return 0 !== n ? r.words[o] = n : r.length--, r.strip();
      }(this, t, e) : p(this, t, e);
    }, m.prototype.makeRBT = function (t) {
      for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);

      return e;
    }, m.prototype.revBin = function (t, e, r) {
      if (0 === t || t === r - 1) return t;

      for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;

      return n;
    }, m.prototype.permute = function (t, e, r, n, i, o) {
      for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]];
    }, m.prototype.transform = function (t, e, r, n, i, o) {
      this.permute(o, t, e, r, n, i);

      for (var s = 1; s < i; s <<= 1) for (var a = s << 1, u = Math.cos(2 * Math.PI / a), h = Math.sin(2 * Math.PI / a), l = 0; l < i; l += a) for (var f = u, c = h, d = 0; d < s; d++) {
        var p = r[l + d],
            m = n[l + d],
            v = r[l + d + s],
            g = n[l + d + s],
            y = f * v - c * g;
        g = f * g + c * v, v = y, r[l + d] = p + v, n[l + d] = m + g, r[l + d + s] = p - v, n[l + d + s] = m - g, d !== a && (y = u * f - h * c, c = u * c + h * f, f = y);
      }
    }, m.prototype.guessLen13b = function (t, e) {
      var r = 1 | Math.max(e, t),
          n = 1 & r,
          i = 0;

      for (r = r / 2 | 0; r; r >>>= 1) i++;

      return 1 << i + 1 + n;
    }, m.prototype.conjugate = function (t, e, r) {
      if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
        var i = t[n];
        t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i;
      }
    }, m.prototype.normalize13b = function (t, e) {
      for (var r = 0, n = 0; n < e / 2; n++) {
        var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
        t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
      }

      return t;
    }, m.prototype.convert13b = function (t, e, n, i) {
      for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], n[2 * s] = 8191 & o, o >>>= 13, n[2 * s + 1] = 8191 & o, o >>>= 13;

      for (s = 2 * e; s < i; ++s) n[s] = 0;

      r(0 === o), r(0 == (-8192 & o));
    }, m.prototype.stub = function (t) {
      for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;

      return e;
    }, m.prototype.mulp = function (t, e, r) {
      var n = 2 * this.guessLen13b(t.length, e.length),
          i = this.makeRBT(n),
          o = this.stub(n),
          s = new Array(n),
          a = new Array(n),
          u = new Array(n),
          h = new Array(n),
          l = new Array(n),
          f = new Array(n),
          c = r.words;
      c.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, h, n), this.transform(s, o, a, u, n, i), this.transform(h, o, l, f, n, i);

      for (var d = 0; d < n; d++) {
        var p = a[d] * l[d] - u[d] * f[d];
        u[d] = a[d] * f[d] + u[d] * l[d], a[d] = p;
      }

      return this.conjugate(a, u, n), this.transform(a, u, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip();
    }, o.prototype.mul = function (t) {
      var e = new o(null);
      return e.words = new Array(this.length + t.length), this.mulTo(t, e);
    }, o.prototype.mulf = function (t) {
      var e = new o(null);
      return e.words = new Array(this.length + t.length), p(this, t, e);
    }, o.prototype.imul = function (t) {
      return this.clone().mulTo(t, this);
    }, o.prototype.imuln = function (t) {
      r("number" == typeof t), r(t < 67108864);

      for (var e = 0, n = 0; n < this.length; n++) {
        var i = (0 | this.words[n]) * t,
            o = (67108863 & i) + (67108863 & e);
        e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[n] = 67108863 & o;
      }

      return 0 !== e && (this.words[n] = e, this.length++), this;
    }, o.prototype.muln = function (t) {
      return this.clone().imuln(t);
    }, o.prototype.sqr = function () {
      return this.mul(this);
    }, o.prototype.isqr = function () {
      return this.imul(this.clone());
    }, o.prototype.pow = function (t) {
      var e = function (t) {
        for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
          var n = r / 26 | 0,
              i = r % 26;
          e[r] = (t.words[n] & 1 << i) >>> i;
        }

        return e;
      }(t);

      if (0 === e.length) return new o(1);

      for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());

      if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
      return r;
    }, o.prototype.iushln = function (t) {
      r("number" == typeof t && t >= 0);
      var e,
          n = t % 26,
          i = (t - n) / 26,
          o = 67108863 >>> 26 - n << 26 - n;

      if (0 !== n) {
        var s = 0;

        for (e = 0; e < this.length; e++) {
          var a = this.words[e] & o,
              u = (0 | this.words[e]) - a << n;
          this.words[e] = u | s, s = a >>> 26 - n;
        }

        s && (this.words[e] = s, this.length++);
      }

      if (0 !== i) {
        for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];

        for (e = 0; e < i; e++) this.words[e] = 0;

        this.length += i;
      }

      return this.strip();
    }, o.prototype.ishln = function (t) {
      return r(0 === this.negative), this.iushln(t);
    }, o.prototype.iushrn = function (t, e, n) {
      var i;
      r("number" == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
      var o = t % 26,
          s = Math.min((t - o) / 26, this.length),
          a = 67108863 ^ 67108863 >>> o << o,
          u = n;

      if (i -= s, i = Math.max(0, i), u) {
        for (var h = 0; h < s; h++) u.words[h] = this.words[h];

        u.length = s;
      }

      if (0 === s) ;else if (this.length > s) for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s];else this.words[0] = 0, this.length = 1;
      var l = 0;

      for (h = this.length - 1; h >= 0 && (0 !== l || h >= i); h--) {
        var f = 0 | this.words[h];
        this.words[h] = l << 26 - o | f >>> o, l = f & a;
      }

      return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
    }, o.prototype.ishrn = function (t, e, n) {
      return r(0 === this.negative), this.iushrn(t, e, n);
    }, o.prototype.shln = function (t) {
      return this.clone().ishln(t);
    }, o.prototype.ushln = function (t) {
      return this.clone().iushln(t);
    }, o.prototype.shrn = function (t) {
      return this.clone().ishrn(t);
    }, o.prototype.ushrn = function (t) {
      return this.clone().iushrn(t);
    }, o.prototype.testn = function (t) {
      r("number" == typeof t && t >= 0);
      var e = t % 26,
          n = (t - e) / 26,
          i = 1 << e;
      return !(this.length <= n) && !!(this.words[n] & i);
    }, o.prototype.imaskn = function (t) {
      r("number" == typeof t && t >= 0);
      var e = t % 26,
          n = (t - e) / 26;
      if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;

      if (0 !== e && n++, this.length = Math.min(n, this.length), 0 !== e) {
        var i = 67108863 ^ 67108863 >>> e << e;
        this.words[this.length - 1] &= i;
      }

      return this.strip();
    }, o.prototype.maskn = function (t) {
      return this.clone().imaskn(t);
    }, o.prototype.iaddn = function (t) {
      return r("number" == typeof t), r(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
    }, o.prototype._iaddn = function (t) {
      this.words[0] += t;

      for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;

      return this.length = Math.max(this.length, e + 1), this;
    }, o.prototype.isubn = function (t) {
      if (r("number" == typeof t), r(t < 67108864), t < 0) return this.iaddn(-t);
      if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
      if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
      return this.strip();
    }, o.prototype.addn = function (t) {
      return this.clone().iaddn(t);
    }, o.prototype.subn = function (t) {
      return this.clone().isubn(t);
    }, o.prototype.iabs = function () {
      return this.negative = 0, this;
    }, o.prototype.abs = function () {
      return this.clone().iabs();
    }, o.prototype._ishlnsubmul = function (t, e, n) {
      var i,
          o,
          s = t.length + n;

      this._expand(s);

      var a = 0;

      for (i = 0; i < t.length; i++) {
        o = (0 | this.words[i + n]) + a;
        var u = (0 | t.words[i]) * e;
        a = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + n] = 67108863 & o;
      }

      for (; i < this.length - n; i++) a = (o = (0 | this.words[i + n]) + a) >> 26, this.words[i + n] = 67108863 & o;

      if (0 === a) return this.strip();

      for (r(-1 === a), a = 0, i = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;

      return this.negative = 1, this.strip();
    }, o.prototype._wordDiv = function (t, e) {
      var r = (this.length, t.length),
          n = this.clone(),
          i = t,
          s = 0 | i.words[i.length - 1];
      0 !== (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
      var a,
          u = n.length - i.length;

      if ("mod" !== e) {
        (a = new o(null)).length = u + 1, a.words = new Array(a.length);

        for (var h = 0; h < a.length; h++) a.words[h] = 0;
      }

      var l = n.clone()._ishlnsubmul(i, 1, u);

      0 === l.negative && (n = l, a && (a.words[u] = 1));

      for (var f = u - 1; f >= 0; f--) {
        var c = 67108864 * (0 | n.words[i.length + f]) + (0 | n.words[i.length + f - 1]);

        for (c = Math.min(c / s | 0, 67108863), n._ishlnsubmul(i, c, f); 0 !== n.negative;) c--, n.negative = 0, n._ishlnsubmul(i, 1, f), n.isZero() || (n.negative ^= 1);

        a && (a.words[f] = c);
      }

      return a && a.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), {
        div: a || null,
        mod: n
      };
    }, o.prototype.divmod = function (t, e, n) {
      return r(!t.isZero()), this.isZero() ? {
        div: new o(0),
        mod: new o(0)
      } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (i = a.div.neg()), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.iadd(t)), {
        div: i,
        mod: s
      }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (i = a.div.neg()), {
        div: i,
        mod: a.mod
      }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), n && 0 !== s.negative && s.isub(t)), {
        div: a.div,
        mod: s
      }) : t.length > this.length || this.cmp(t) < 0 ? {
        div: new o(0),
        mod: this
      } : 1 === t.length ? "div" === e ? {
        div: this.divn(t.words[0]),
        mod: null
      } : "mod" === e ? {
        div: null,
        mod: new o(this.modn(t.words[0]))
      } : {
        div: this.divn(t.words[0]),
        mod: new o(this.modn(t.words[0]))
      } : this._wordDiv(t, e);
      var i, s, a;
    }, o.prototype.div = function (t) {
      return this.divmod(t, "div", !1).div;
    }, o.prototype.mod = function (t) {
      return this.divmod(t, "mod", !1).mod;
    }, o.prototype.umod = function (t) {
      return this.divmod(t, "mod", !0).mod;
    }, o.prototype.divRound = function (t) {
      var e = this.divmod(t);
      if (e.mod.isZero()) return e.div;
      var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
          n = t.ushrn(1),
          i = t.andln(1),
          o = r.cmp(n);
      return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
    }, o.prototype.modn = function (t) {
      r(t <= 67108863);

      for (var e = (1 << 26) % t, n = 0, i = this.length - 1; i >= 0; i--) n = (e * n + (0 | this.words[i])) % t;

      return n;
    }, o.prototype.idivn = function (t) {
      r(t <= 67108863);

      for (var e = 0, n = this.length - 1; n >= 0; n--) {
        var i = (0 | this.words[n]) + 67108864 * e;
        this.words[n] = i / t | 0, e = i % t;
      }

      return this.strip();
    }, o.prototype.divn = function (t) {
      return this.clone().idivn(t);
    }, o.prototype.egcd = function (t) {
      r(0 === t.negative), r(!t.isZero());
      var e = this,
          n = t.clone();
      e = 0 !== e.negative ? e.umod(t) : e.clone();

      for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), h = 0; e.isEven() && n.isEven();) e.iushrn(1), n.iushrn(1), ++h;

      for (var l = n.clone(), f = e.clone(); !e.isZero();) {
        for (var c = 0, d = 1; 0 == (e.words[0] & d) && c < 26; ++c, d <<= 1);

        if (c > 0) for (e.iushrn(c); c-- > 0;) (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(f)), i.iushrn(1), s.iushrn(1);

        for (var p = 0, m = 1; 0 == (n.words[0] & m) && p < 26; ++p, m <<= 1);

        if (p > 0) for (n.iushrn(p); p-- > 0;) (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(f)), a.iushrn(1), u.iushrn(1);
        e.cmp(n) >= 0 ? (e.isub(n), i.isub(a), s.isub(u)) : (n.isub(e), a.isub(i), u.isub(s));
      }

      return {
        a: a,
        b: u,
        gcd: n.iushln(h)
      };
    }, o.prototype._invmp = function (t) {
      r(0 === t.negative), r(!t.isZero());
      var e = this,
          n = t.clone();
      e = 0 !== e.negative ? e.umod(t) : e.clone();

      for (var i, s = new o(1), a = new o(0), u = n.clone(); e.cmpn(1) > 0 && n.cmpn(1) > 0;) {
        for (var h = 0, l = 1; 0 == (e.words[0] & l) && h < 26; ++h, l <<= 1);

        if (h > 0) for (e.iushrn(h); h-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);

        for (var f = 0, c = 1; 0 == (n.words[0] & c) && f < 26; ++f, c <<= 1);

        if (f > 0) for (n.iushrn(f); f-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
        e.cmp(n) >= 0 ? (e.isub(n), s.isub(a)) : (n.isub(e), a.isub(s));
      }

      return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i;
    }, o.prototype.gcd = function (t) {
      if (this.isZero()) return t.abs();
      if (t.isZero()) return this.abs();
      var e = this.clone(),
          r = t.clone();
      e.negative = 0, r.negative = 0;

      for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);

      for (;;) {
        for (; e.isEven();) e.iushrn(1);

        for (; r.isEven();) r.iushrn(1);

        var i = e.cmp(r);

        if (i < 0) {
          var o = e;
          e = r, r = o;
        } else if (0 === i || 0 === r.cmpn(1)) break;

        e.isub(r);
      }

      return r.iushln(n);
    }, o.prototype.invm = function (t) {
      return this.egcd(t).a.umod(t);
    }, o.prototype.isEven = function () {
      return 0 == (1 & this.words[0]);
    }, o.prototype.isOdd = function () {
      return 1 == (1 & this.words[0]);
    }, o.prototype.andln = function (t) {
      return this.words[0] & t;
    }, o.prototype.bincn = function (t) {
      r("number" == typeof t);
      var e = t % 26,
          n = (t - e) / 26,
          i = 1 << e;
      if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;

      for (var o = i, s = n; 0 !== o && s < this.length; s++) {
        var a = 0 | this.words[s];
        o = (a += o) >>> 26, a &= 67108863, this.words[s] = a;
      }

      return 0 !== o && (this.words[s] = o, this.length++), this;
    }, o.prototype.isZero = function () {
      return 1 === this.length && 0 === this.words[0];
    }, o.prototype.cmpn = function (t) {
      var e,
          n = t < 0;
      if (0 !== this.negative && !n) return -1;
      if (0 === this.negative && n) return 1;
      if (this.strip(), this.length > 1) e = 1;else {
        n && (t = -t), r(t <= 67108863, "Number is too big");
        var i = 0 | this.words[0];
        e = i === t ? 0 : i < t ? -1 : 1;
      }
      return 0 !== this.negative ? 0 | -e : e;
    }, o.prototype.cmp = function (t) {
      if (0 !== this.negative && 0 === t.negative) return -1;
      if (0 === this.negative && 0 !== t.negative) return 1;
      var e = this.ucmp(t);
      return 0 !== this.negative ? 0 | -e : e;
    }, o.prototype.ucmp = function (t) {
      if (this.length > t.length) return 1;
      if (this.length < t.length) return -1;

      for (var e = 0, r = this.length - 1; r >= 0; r--) {
        var n = 0 | this.words[r],
            i = 0 | t.words[r];

        if (n !== i) {
          n < i ? e = -1 : n > i && (e = 1);
          break;
        }
      }

      return e;
    }, o.prototype.gtn = function (t) {
      return 1 === this.cmpn(t);
    }, o.prototype.gt = function (t) {
      return 1 === this.cmp(t);
    }, o.prototype.gten = function (t) {
      return this.cmpn(t) >= 0;
    }, o.prototype.gte = function (t) {
      return this.cmp(t) >= 0;
    }, o.prototype.ltn = function (t) {
      return -1 === this.cmpn(t);
    }, o.prototype.lt = function (t) {
      return -1 === this.cmp(t);
    }, o.prototype.lten = function (t) {
      return this.cmpn(t) <= 0;
    }, o.prototype.lte = function (t) {
      return this.cmp(t) <= 0;
    }, o.prototype.eqn = function (t) {
      return 0 === this.cmpn(t);
    }, o.prototype.eq = function (t) {
      return 0 === this.cmp(t);
    }, o.red = function (t) {
      return new M(t);
    }, o.prototype.toRed = function (t) {
      return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t);
    }, o.prototype.fromRed = function () {
      return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, o.prototype._forceRed = function (t) {
      return this.red = t, this;
    }, o.prototype.forceRed = function (t) {
      return r(!this.red, "Already a number in reduction context"), this._forceRed(t);
    }, o.prototype.redAdd = function (t) {
      return r(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
    }, o.prototype.redIAdd = function (t) {
      return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
    }, o.prototype.redSub = function (t) {
      return r(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
    }, o.prototype.redISub = function (t) {
      return r(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
    }, o.prototype.redShl = function (t) {
      return r(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
    }, o.prototype.redMul = function (t) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
    }, o.prototype.redIMul = function (t) {
      return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
    }, o.prototype.redSqr = function () {
      return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, o.prototype.redISqr = function () {
      return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, o.prototype.redSqrt = function () {
      return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, o.prototype.redInvm = function () {
      return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, o.prototype.redNeg = function () {
      return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, o.prototype.redPow = function (t) {
      return r(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
    };
    var v = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };

    function g(t, e) {
      this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }

    function y() {
      g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
    }

    function w() {
      g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
    }

    function b() {
      g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
    }

    function _() {
      g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
    }

    function M(t) {
      if ("string" == typeof t) {
        var e = o._prime(t);

        this.m = e.p, this.prime = e;
      } else r(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null;
    }

    function S(t) {
      M.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }

    g.prototype._tmp = function () {
      var t = new o(null);
      return t.words = new Array(Math.ceil(this.n / 13)), t;
    }, g.prototype.ireduce = function (t) {
      var e,
          r = t;

      do {
        this.split(r, this.tmp), e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
      } while (e > this.n);

      var n = e < this.n ? -1 : r.ucmp(this.p);
      return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r;
    }, g.prototype.split = function (t, e) {
      t.iushrn(this.n, 0, e);
    }, g.prototype.imulK = function (t) {
      return t.imul(this.k);
    }, i(y, g), y.prototype.split = function (t, e) {
      for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n];

      if (e.length = r, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
      var i = t.words[9];

      for (e.words[e.length++] = 4194303 & i, n = 10; n < t.length; n++) {
        var o = 0 | t.words[n];
        t.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o;
      }

      i >>>= 22, t.words[n - 10] = i, 0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9;
    }, y.prototype.imulK = function (t) {
      t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;

      for (var e = 0, r = 0; r < t.length; r++) {
        var n = 0 | t.words[r];
        e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
      }

      return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
    }, i(w, g), i(b, g), i(_, g), _.prototype.imulK = function (t) {
      for (var e = 0, r = 0; r < t.length; r++) {
        var n = 19 * (0 | t.words[r]) + e,
            i = 67108863 & n;
        n >>>= 26, t.words[r] = i, e = n;
      }

      return 0 !== e && (t.words[t.length++] = e), t;
    }, o._prime = function (t) {
      if (v[t]) return v[t];
      var e;
      if ("k256" === t) e = new y();else if ("p224" === t) e = new w();else if ("p192" === t) e = new b();else {
        if ("p25519" !== t) throw new Error("Unknown prime " + t);
        e = new _();
      }
      return v[t] = e, e;
    }, M.prototype._verify1 = function (t) {
      r(0 === t.negative, "red works only with positives"), r(t.red, "red works only with red numbers");
    }, M.prototype._verify2 = function (t, e) {
      r(0 == (t.negative | e.negative), "red works only with positives"), r(t.red && t.red === e.red, "red works only with red numbers");
    }, M.prototype.imod = function (t) {
      return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
    }, M.prototype.neg = function (t) {
      return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
    }, M.prototype.add = function (t, e) {
      this._verify2(t, e);

      var r = t.add(e);
      return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
    }, M.prototype.iadd = function (t, e) {
      this._verify2(t, e);

      var r = t.iadd(e);
      return r.cmp(this.m) >= 0 && r.isub(this.m), r;
    }, M.prototype.sub = function (t, e) {
      this._verify2(t, e);

      var r = t.sub(e);
      return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
    }, M.prototype.isub = function (t, e) {
      this._verify2(t, e);

      var r = t.isub(e);
      return r.cmpn(0) < 0 && r.iadd(this.m), r;
    }, M.prototype.shl = function (t, e) {
      return this._verify1(t), this.imod(t.ushln(e));
    }, M.prototype.imul = function (t, e) {
      return this._verify2(t, e), this.imod(t.imul(e));
    }, M.prototype.mul = function (t, e) {
      return this._verify2(t, e), this.imod(t.mul(e));
    }, M.prototype.isqr = function (t) {
      return this.imul(t, t.clone());
    }, M.prototype.sqr = function (t) {
      return this.mul(t, t);
    }, M.prototype.sqrt = function (t) {
      if (t.isZero()) return t.clone();
      var e = this.m.andln(3);

      if (r(e % 2 == 1), 3 === e) {
        var n = this.m.add(new o(1)).iushrn(2);
        return this.pow(t, n);
      }

      for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);

      r(!i.isZero());
      var a = new o(1).toRed(this),
          u = a.redNeg(),
          h = this.m.subn(1).iushrn(1),
          l = this.m.bitLength();

      for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, h).cmp(u);) l.redIAdd(u);

      for (var f = this.pow(l, i), c = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s; 0 !== d.cmp(a);) {
        for (var m = d, v = 0; 0 !== m.cmp(a); v++) m = m.redSqr();

        r(v < p);
        var g = this.pow(f, new o(1).iushln(p - v - 1));
        c = c.redMul(g), f = g.redSqr(), d = d.redMul(f), p = v;
      }

      return c;
    }, M.prototype.invm = function (t) {
      var e = t._invmp(this.m);

      return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
    }, M.prototype.pow = function (t, e) {
      if (e.isZero()) return new o(1);
      if (0 === e.cmpn(1)) return t.clone();
      var r = new Array(16);
      r[0] = new o(1).toRed(this), r[1] = t;

      for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);

      var i = r[0],
          s = 0,
          a = 0,
          u = e.bitLength() % 26;

      for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
        for (var h = e.words[n], l = u - 1; l >= 0; l--) {
          var f = h >> l & 1;
          i !== r[0] && (i = this.sqr(i)), 0 !== f || 0 !== s ? (s <<= 1, s |= f, (4 === ++a || 0 === n && 0 === l) && (i = this.mul(i, r[s]), a = 0, s = 0)) : a = 0;
        }

        u = 26;
      }

      return i;
    }, M.prototype.convertTo = function (t) {
      var e = t.umod(this.m);
      return e === t ? e.clone() : e;
    }, M.prototype.convertFrom = function (t) {
      var e = t.clone();
      return e.red = null, e;
    }, o.mont = function (t) {
      return new S(t);
    }, i(S, M), S.prototype.convertTo = function (t) {
      return this.imod(t.ushln(this.shift));
    }, S.prototype.convertFrom = function (t) {
      var e = this.imod(t.mul(this.rinv));
      return e.red = null, e;
    }, S.prototype.imul = function (t, e) {
      if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
      var r = t.imul(e),
          n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          i = r.isub(n).iushrn(this.shift),
          o = i;
      return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
    }, S.prototype.mul = function (t, e) {
      if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
      var r = t.mul(e),
          n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          i = r.isub(n).iushrn(this.shift),
          s = i;
      return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this);
    }, S.prototype.invm = function (t) {
      return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
    };
  }(t, _indexD3bd.f);
}),
    be = function (t) {
  if ("string" == typeof t || "number" == typeof t) {
    var e = new we(1),
        r = String(t).toLowerCase().trim(),
        n = "0x" === r.substr(0, 2) || "-0x" === r.substr(0, 3),
        i = (0, _subscriptionManager0493518a.f)(r);
    if ("-" === i.substr(0, 1) && (i = (0, _subscriptionManager0493518a.f)(i.slice(1)), e = new we(-1, 10)), !(i = "" === i ? "0" : i).match(/^-?[0-9]+$/) && i.match(/^[0-9A-Fa-f]+$/) || i.match(/^[a-fA-F]+$/) || !0 === n && i.match(/^[0-9A-Fa-f]+$/)) return new we(i, 16).mul(e);
    if ((i.match(/^-?[0-9]+$/) || "" === i) && !1 === n) return new we(i, 10).mul(e);
  } else if ("object" == typeof t && t.toString && !t.pop && !t.push && t.toString(10).match(/^-?[0-9]+$/) && (t.mul || t.dividedToIntegerBy)) return new we(t.toString(10), 10);

  throw new Error("[number-to-bn] while converting number " + JSON.stringify(t) + " to BN.js instance, error: invalid number value. Value must be an integer, hex string, BN or BigNumber instance. Note, decimals are not supported.");
},
    _e = new ye(0),
    Me = new ye(-1),
    Se = {
  noether: "0",
  wei: "1",
  kwei: "1000",
  Kwei: "1000",
  babbage: "1000",
  femtoether: "1000",
  mwei: "1000000",
  Mwei: "1000000",
  lovelace: "1000000",
  picoether: "1000000",
  gwei: "1000000000",
  Gwei: "1000000000",
  shannon: "1000000000",
  nanoether: "1000000000",
  nano: "1000000000",
  szabo: "1000000000000",
  microether: "1000000000000",
  micro: "1000000000000",
  finney: "1000000000000000",
  milliether: "1000000000000000",
  milli: "1000000000000000",
  ether: "1000000000000000000",
  kether: "1000000000000000000000",
  grand: "1000000000000000000000",
  mether: "1000000000000000000000000",
  gether: "1000000000000000000000000000",
  tether: "1000000000000000000000000000000"
};

function Ee(t) {
  var e = t ? t.toLowerCase() : "ether",
      r = Se[e];
  if ("string" != typeof r) throw new Error("[ethjs-unit] the unit provided " + t + " doesn't exists, please use the one of the following units " + JSON.stringify(Se, null, 2));
  return new ye(r, 10);
}

function ke(t) {
  if ("string" == typeof t) {
    if (!t.match(/^-?[0-9.]+$/)) throw new Error("while converting number to string, invalid number value '" + t + "', should be a number matching (^-?[0-9.]+).");
    return t;
  }

  if ("number" == typeof t) return String(t);
  if ("object" == typeof t && t.toString && (t.toTwos || t.dividedToIntegerBy)) return t.toPrecision ? String(t.toPrecision()) : t.toString(10);
  throw new Error("while converting number to string, invalid number value '" + t + "' type " + typeof t + ".");
}

var Ae = {
  unitMap: Se,
  numberToString: ke,
  getValueOfUnit: Ee,
  fromWei: function (t, e, r) {
    var n = be(t),
        i = n.lt(_e),
        o = Ee(e),
        s = Se[e].length - 1 || 1,
        a = r || {};
    i && (n = n.mul(Me));

    for (var u = n.mod(o).toString(10); u.length < s;) u = "0" + u;

    a.pad || (u = u.match(/^([0-9]*[1-9]|0)(0*)/)[1]);
    var h = n.div(o).toString(10);
    a.commify && (h = h.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    var l = h + ("0" == u ? "" : "." + u);
    return i && (l = "-" + l), l;
  },
  toWei: function (t, e) {
    var r = ke(t),
        n = Ee(e),
        i = Se[e].length - 1 || 1,
        o = "-" === r.substring(0, 1);
    if (o && (r = r.substring(1)), "." === r) throw new Error("[ethjs-unit] while converting number " + t + " to wei, invalid value");
    var s = r.split(".");
    if (s.length > 2) throw new Error("[ethjs-unit] while converting number " + t + " to wei,  too many decimal points");
    var a = s[0],
        u = s[1];
    if (a || (a = "0"), u || (u = "0"), u.length > i) throw new Error("[ethjs-unit] while converting number " + t + " to wei, too many decimal places");

    for (; u.length < i;) u += "0";

    a = new ye(a), u = new ye(u);
    var h = a.mul(n).add(u);
    return o && (h = h.mul(Me)), new ye(h.toString(10), 10);
  }
},
    xe = (0, _indexD3bd.d)(function (t, e) {
  !function (t) {
    var e,
        r,
        n,
        i = String.fromCharCode;

    function o(t) {
      for (var e, r, n = [], i = 0, o = t.length; i < o;) (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o ? 56320 == (64512 & (r = t.charCodeAt(i++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), i--) : n.push(e);

      return n;
    }

    function s(t) {
      if (t >= 55296 && t <= 57343) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
    }

    function a(t, e) {
      return i(t >> e & 63 | 128);
    }

    function u(t) {
      if (0 == (4294967168 & t)) return i(t);
      var e = "";
      return 0 == (4294965248 & t) ? e = i(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (s(t), e = i(t >> 12 & 15 | 224), e += a(t, 6)) : 0 == (4292870144 & t) && (e = i(t >> 18 & 7 | 240), e += a(t, 12), e += a(t, 6)), e += i(63 & t | 128);
    }

    function h() {
      if (n >= r) throw Error("Invalid byte index");
      var t = 255 & e[n];
      if (n++, 128 == (192 & t)) return 63 & t;
      throw Error("Invalid continuation byte");
    }

    function l() {
      var t, i;
      if (n > r) throw Error("Invalid byte index");
      if (n == r) return !1;
      if (t = 255 & e[n], n++, 0 == (128 & t)) return t;

      if (192 == (224 & t)) {
        if ((i = (31 & t) << 6 | h()) >= 128) return i;
        throw Error("Invalid continuation byte");
      }

      if (224 == (240 & t)) {
        if ((i = (15 & t) << 12 | h() << 6 | h()) >= 2048) return s(i), i;
        throw Error("Invalid continuation byte");
      }

      if (240 == (248 & t) && (i = (7 & t) << 18 | h() << 12 | h() << 6 | h()) >= 65536 && i <= 1114111) return i;
      throw Error("Invalid UTF-8 detected");
    }

    t.version = "3.0.0", t.encode = function (t) {
      for (var e = o(t), r = e.length, n = -1, i = ""; ++n < r;) i += u(e[n]);

      return i;
    }, t.decode = function (t) {
      e = o(t), r = e.length, n = 0;

      for (var s, a = []; !1 !== (s = l());) a.push(s);

      return function (t) {
        for (var e, r = t.length, n = -1, o = ""; ++n < r;) (e = t[n]) > 65535 && (o += i((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += i(e);

        return o;
      }(a);
    };
  }(e);
}),
    Te = "0123456789abcdef".split(""),
    Ne = [1, 256, 65536, 16777216],
    Pe = [0, 8, 16, 24],
    Re = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
    Oe = function (t) {
  var e, r, n, i, o, s, a, u, h, l, f, c, d, p, m, v, g, y, w, b, _, M, S, E, k, A, x, T, N, P, R, O, I, C, D, L, U, j, B, F, H, G, W, z, q, K, Y, V, Z, J, $, X, Q, tt, et, rt, nt, it, ot, st, at, ut, ht;

  for (n = 0; n < 48; n += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], h = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], f = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (c = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (s << 1 | a >>> 31), r = (d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (a << 1 | s >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = i ^ (u << 1 | h >>> 31), r = o ^ (h << 1 | u >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = s ^ (l << 1 | f >>> 31), r = a ^ (f << 1 | l >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = u ^ (c << 1 | d >>> 31), r = h ^ (d << 1 | c >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = l ^ (i << 1 | o >>> 31), r = f ^ (o << 1 | i >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, p = t[0], m = t[1], K = t[11] << 4 | t[10] >>> 28, Y = t[10] << 4 | t[11] >>> 28, T = t[20] << 3 | t[21] >>> 29, N = t[21] << 3 | t[20] >>> 29, st = t[31] << 9 | t[30] >>> 23, at = t[30] << 9 | t[31] >>> 23, G = t[40] << 18 | t[41] >>> 14, W = t[41] << 18 | t[40] >>> 14, C = t[2] << 1 | t[3] >>> 31, D = t[3] << 1 | t[2] >>> 31, v = t[13] << 12 | t[12] >>> 20, g = t[12] << 12 | t[13] >>> 20, V = t[22] << 10 | t[23] >>> 22, Z = t[23] << 10 | t[22] >>> 22, P = t[33] << 13 | t[32] >>> 19, R = t[32] << 13 | t[33] >>> 19, ut = t[42] << 2 | t[43] >>> 30, ht = t[43] << 2 | t[42] >>> 30, tt = t[5] << 30 | t[4] >>> 2, et = t[4] << 30 | t[5] >>> 2, L = t[14] << 6 | t[15] >>> 26, U = t[15] << 6 | t[14] >>> 26, y = t[25] << 11 | t[24] >>> 21, w = t[24] << 11 | t[25] >>> 21, J = t[34] << 15 | t[35] >>> 17, $ = t[35] << 15 | t[34] >>> 17, O = t[45] << 29 | t[44] >>> 3, I = t[44] << 29 | t[45] >>> 3, E = t[6] << 28 | t[7] >>> 4, k = t[7] << 28 | t[6] >>> 4, rt = t[17] << 23 | t[16] >>> 9, nt = t[16] << 23 | t[17] >>> 9, j = t[26] << 25 | t[27] >>> 7, B = t[27] << 25 | t[26] >>> 7, b = t[36] << 21 | t[37] >>> 11, _ = t[37] << 21 | t[36] >>> 11, X = t[47] << 24 | t[46] >>> 8, Q = t[46] << 24 | t[47] >>> 8, z = t[8] << 27 | t[9] >>> 5, q = t[9] << 27 | t[8] >>> 5, A = t[18] << 20 | t[19] >>> 12, x = t[19] << 20 | t[18] >>> 12, it = t[29] << 7 | t[28] >>> 25, ot = t[28] << 7 | t[29] >>> 25, F = t[38] << 8 | t[39] >>> 24, H = t[39] << 8 | t[38] >>> 24, M = t[48] << 14 | t[49] >>> 18, S = t[49] << 14 | t[48] >>> 18, t[0] = p ^ ~v & y, t[1] = m ^ ~g & w, t[10] = E ^ ~A & T, t[11] = k ^ ~x & N, t[20] = C ^ ~L & j, t[21] = D ^ ~U & B, t[30] = z ^ ~K & V, t[31] = q ^ ~Y & Z, t[40] = tt ^ ~rt & it, t[41] = et ^ ~nt & ot, t[2] = v ^ ~y & b, t[3] = g ^ ~w & _, t[12] = A ^ ~T & P, t[13] = x ^ ~N & R, t[22] = L ^ ~j & F, t[23] = U ^ ~B & H, t[32] = K ^ ~V & J, t[33] = Y ^ ~Z & $, t[42] = rt ^ ~it & st, t[43] = nt ^ ~ot & at, t[4] = y ^ ~b & M, t[5] = w ^ ~_ & S, t[14] = T ^ ~P & O, t[15] = N ^ ~R & I, t[24] = j ^ ~F & G, t[25] = B ^ ~H & W, t[34] = V ^ ~J & X, t[35] = Z ^ ~$ & Q, t[44] = it ^ ~st & ut, t[45] = ot ^ ~at & ht, t[6] = b ^ ~M & p, t[7] = _ ^ ~S & m, t[16] = P ^ ~O & E, t[17] = R ^ ~I & k, t[26] = F ^ ~G & C, t[27] = H ^ ~W & D, t[36] = J ^ ~X & z, t[37] = $ ^ ~Q & q, t[46] = st ^ ~ut & tt, t[47] = at ^ ~ht & et, t[8] = M ^ ~p & v, t[9] = S ^ ~m & g, t[18] = O ^ ~E & A, t[19] = I ^ ~k & x, t[28] = G ^ ~C & L, t[29] = W ^ ~D & U, t[38] = X ^ ~z & K, t[39] = Q ^ ~q & Y, t[48] = ut ^ ~tt & rt, t[49] = ht ^ ~et & nt, t[0] ^= Re[n], t[1] ^= Re[n + 1];
},
    Ie = function (t) {
  return function (e) {
    var r;

    if ("0x" === e.slice(0, 2)) {
      r = [];

      for (var n = 2, i = e.length; n < i; n += 2) r.push(parseInt(e.slice(n, n + 2), 16));
    } else r = e;

    return function (t, e) {
      for (var r, n = e.length, i = t.blocks, o = t.blockCount << 2, s = t.blockCount, a = t.outputBlocks, u = t.s, h = 0; h < n;) {
        if (t.reset) for (t.reset = !1, i[0] = t.block, c = 1; c < s + 1; ++c) i[c] = 0;
        if ("string" != typeof e) for (c = t.start; h < n && c < o; ++h) i[c >> 2] |= e[h] << Pe[3 & c++];else for (c = t.start; h < n && c < o; ++h) (r = e.charCodeAt(h)) < 128 ? i[c >> 2] |= r << Pe[3 & c++] : r < 2048 ? (i[c >> 2] |= (192 | r >> 6) << Pe[3 & c++], i[c >> 2] |= (128 | 63 & r) << Pe[3 & c++]) : r < 55296 || r >= 57344 ? (i[c >> 2] |= (224 | r >> 12) << Pe[3 & c++], i[c >> 2] |= (128 | r >> 6 & 63) << Pe[3 & c++], i[c >> 2] |= (128 | 63 & r) << Pe[3 & c++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++h)), i[c >> 2] |= (240 | r >> 18) << Pe[3 & c++], i[c >> 2] |= (128 | r >> 12 & 63) << Pe[3 & c++], i[c >> 2] |= (128 | r >> 6 & 63) << Pe[3 & c++], i[c >> 2] |= (128 | 63 & r) << Pe[3 & c++]);

        if (t.lastByteIndex = c, c >= o) {
          for (t.start = c - o, t.block = i[s], c = 0; c < s; ++c) u[c] ^= i[c];

          Oe(u), t.reset = !0;
        } else t.start = c;
      }

      if (i[(c = t.lastByteIndex) >> 2] |= Ne[3 & c], t.lastByteIndex === o) for (i[0] = i[s], c = 1; c < s + 1; ++c) i[c] = 0;

      for (i[s - 1] |= 2147483648, c = 0; c < s; ++c) u[c] ^= i[c];

      Oe(u);

      for (var l, f = "", c = 0, d = 0; d < a;) {
        for (c = 0; c < s && d < a; ++c, ++d) l = u[c], f += Te[l >> 4 & 15] + Te[15 & l] + Te[l >> 12 & 15] + Te[l >> 8 & 15] + Te[l >> 20 & 15] + Te[l >> 16 & 15] + Te[l >> 28 & 15] + Te[l >> 24 & 15];

        d % s == 0 && (Oe(u), c = 0);
      }

      return "0x" + f;
    }(function (t) {
      return {
        blocks: [],
        reset: !0,
        block: 0,
        start: 0,
        blockCount: 1600 - (t << 1) >> 5,
        outputBlocks: t >> 5,
        s: (e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [].concat(e, e, e, e, e))
      };
      var e;
    }(t), r);
  };
},
    Ce = {
  keccak256: Ie(256),
  keccak512: Ie(512),
  keccak256s: Ie(256),
  keccak512s: Ie(512)
},
    De = function (t) {
  return t instanceof _subscriptionManager0493518a.B || t && t.constructor && "BN" === t.constructor.name;
},
    Le = function (t) {
  return t && t.constructor && "BigNumber" === t.constructor.name;
},
    Ue = function (t) {
  try {
    return be.apply(null, arguments);
  } catch (e) {
    throw new Error(e + ' Given value: "' + t + '"');
  }
},
    je = function (t) {
  return !!/^(0x)?[0-9a-f]{40}$/i.test(t) && (!(!/^(0x|0X)?[0-9a-f]{40}$/.test(t) && !/^(0x|0X)?[0-9A-F]{40}$/.test(t)) || Be(t));
},
    Be = function (t) {
  t = t.replace(/^0x/i, "");

  for (var e = ze(t.toLowerCase()).replace(/^0x/i, ""), r = 0; r < 40; r++) if (parseInt(e[r], 16) > 7 && t[r].toUpperCase() !== t[r] || parseInt(e[r], 16) <= 7 && t[r].toLowerCase() !== t[r]) return !1;

  return !0;
},
    Fe = function (t) {
  var e = "";
  t = (t = (t = (t = (t = xe.encode(t)).replace(/^(?:\u0000)*/, "")).split("").reverse().join("")).replace(/^(?:\u0000)*/, "")).split("").reverse().join("");

  for (var r = 0; r < t.length; r++) {
    var n = t.charCodeAt(r).toString(16);
    e += n.length < 2 ? "0" + n : n;
  }

  return "0x" + e;
},
    He = function (t) {
  if (ge.isNull(t) || ge.isUndefined(t)) return t;
  if (!isFinite(t) && !We(t)) throw new Error('Given input "' + t + '" is not a number.');
  var e = Ue(t),
      r = e.toString(16);
  return e.lt(new _subscriptionManager0493518a.B(0)) ? "-0x" + r.substr(1) : "0x" + r;
},
    Ge = function (t) {
  if (t = t.toString(16), !We(t)) throw new Error('Given value "' + t + '" is not a valid hex string.');
  t = t.replace(/^0x/i, "");

  for (var e = [], r = 0; r < t.length; r += 2) e.push(parseInt(t.substr(r, 2), 16));

  return e;
},
    We = function (t) {
  return (ge.isString(t) || ge.isNumber(t)) && /^(-)?0x[0-9a-f]*$/i.test(t);
},
    ze = function (t) {
  De(t) && (t = t.toString()), We(t) && /^0x/i.test(t.toString()) && (t = Ge(t));
  var e = Ce.keccak256(t);
  return "0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470" === e ? null : e;
};

ze._Hash = Ce;

var qe = {
  BN: _subscriptionManager0493518a.B,
  isBN: De,
  isBigNumber: Le,
  toBN: Ue,
  isAddress: je,
  isBloom: function (t) {
    return !!/^(0x)?[0-9a-f]{512}$/i.test(t) && !(!/^(0x)?[0-9a-f]{512}$/.test(t) && !/^(0x)?[0-9A-F]{512}$/.test(t));
  },
  isTopic: function (t) {
    return !!/^(0x)?[0-9a-f]{64}$/i.test(t) && !(!/^(0x)?[0-9a-f]{64}$/.test(t) && !/^(0x)?[0-9A-F]{64}$/.test(t));
  },
  checkAddressChecksum: Be,
  utf8ToHex: Fe,
  hexToUtf8: function (t) {
    if (!We(t)) throw new Error('The parameter "' + t + '" must be a valid HEX string.');

    for (var e = "", r = 0, n = (t = (t = (t = (t = (t = t.replace(/^0x/i, "")).replace(/^(?:00)*/, "")).split("").reverse().join("")).replace(/^(?:00)*/, "")).split("").reverse().join("")).length, i = 0; i < n; i += 2) r = parseInt(t.substr(i, 2), 16), e += String.fromCharCode(r);

    return xe.decode(e);
  },
  hexToNumber: function (t) {
    return t ? Ue(t).toNumber() : t;
  },
  hexToNumberString: function (t) {
    return t ? Ue(t).toString(10) : t;
  },
  numberToHex: He,
  toHex: function (t, e) {
    if (je(t)) return e ? "address" : "0x" + t.toLowerCase().replace(/^0x/i, "");
    if (ge.isBoolean(t)) return e ? "bool" : t ? "0x01" : "0x00";
    if (ge.isObject(t) && !Le(t) && !De(t)) return e ? "string" : Fe(JSON.stringify(t));

    if (ge.isString(t)) {
      if (0 === t.indexOf("-0x") || 0 === t.indexOf("-0X")) return e ? "int256" : He(t);
      if (0 === t.indexOf("0x") || 0 === t.indexOf("0X")) return e ? "bytes" : t;
      if (!isFinite(t)) return e ? "string" : Fe(t);
    }

    return e ? t < 0 ? "int256" : "uint256" : He(t);
  },
  hexToBytes: Ge,
  bytesToHex: function (t) {
    for (var e = [], r = 0; r < t.length; r++) e.push((t[r] >>> 4).toString(16)), e.push((15 & t[r]).toString(16));

    return "0x" + e.join("");
  },
  isHex: function (t) {
    return (ge.isString(t) || ge.isNumber(t)) && /^(-0x|0x)?[0-9a-f]*$/i.test(t);
  },
  isHexStrict: We,
  leftPad: function (t, e, r) {
    var n = /^0x/i.test(t) || "number" == typeof t,
        i = e - (t = t.toString(16).replace(/^0x/i, "")).length + 1 >= 0 ? e - t.length + 1 : 0;
    return (n ? "0x" : "") + new Array(i).join(r || "0") + t;
  },
  rightPad: function (t, e, r) {
    var n = /^0x/i.test(t) || "number" == typeof t,
        i = e - (t = t.toString(16).replace(/^0x/i, "")).length + 1 >= 0 ? e - t.length + 1 : 0;
    return (n ? "0x" : "") + t + new Array(i).join(r || "0");
  },
  toTwosComplement: function (t) {
    return "0x" + Ue(t).toTwos(256).toString(16, 64);
  },
  sha3: ze
},
    Ke = function (t) {
  var e = typeof t;
  if ("string" === e) return qe.isHexStrict(t) ? new _subscriptionManager0493518a.B(t.replace(/0x/i, ""), 16) : new _subscriptionManager0493518a.B(t, 10);
  if ("number" === e) return new _subscriptionManager0493518a.B(t);
  if (qe.isBigNumber(t)) return new _subscriptionManager0493518a.B(t.toString(10));
  if (qe.isBN(t)) return t;
  throw new Error(t + " is not a number");
},
    Ye = function (t, e, r) {
  var n, i, o;

  if ("bytes" === (t = (o = t).startsWith("int[") ? "int256" + o.slice(3) : "int" === o ? "int256" : o.startsWith("uint[") ? "uint256" + o.slice(4) : "uint" === o ? "uint256" : o.startsWith("fixed[") ? "fixed128x128" + o.slice(5) : "fixed" === o ? "fixed128x128" : o.startsWith("ufixed[") ? "ufixed128x128" + o.slice(6) : "ufixed" === o ? "ufixed128x128" : o)) {
    if (e.replace(/^0x/i, "").length % 2 != 0) throw new Error("Invalid bytes characters " + e.length);
    return e;
  }

  if ("string" === t) return qe.utf8ToHex(e);
  if ("bool" === t) return e ? "01" : "00";

  if (t.startsWith("address")) {
    if (n = r ? 64 : 40, !qe.isAddress(e)) throw new Error(e + " is not a valid address, or the checksum is invalid.");
    return qe.leftPad(e.toLowerCase(), n);
  }

  if (n = function (t) {
    var e = /^\D+(\d+).*$/.exec(t);
    return e ? parseInt(e[1], 10) : null;
  }(t), t.startsWith("bytes")) {
    if (!n) throw new Error("bytes[] not yet supported in solidity");
    if (r && (n = 32), n < 1 || n > 32 || n < e.replace(/^0x/i, "").length / 2) throw new Error("Invalid bytes" + n + " for " + e);
    return qe.rightPad(e, 2 * n);
  }

  if (t.startsWith("uint")) {
    if (n % 8 || n < 8 || n > 256) throw new Error("Invalid uint" + n + " size");
    if ((i = Ke(e)).bitLength() > n) throw new Error("Supplied uint exceeds width: " + n + " vs " + i.bitLength());
    if (i.lt(new _subscriptionManager0493518a.B(0))) throw new Error("Supplied uint " + i.toString() + " is negative");
    return n ? qe.leftPad(i.toString("hex"), n / 8 * 2) : i;
  }

  if (t.startsWith("int")) {
    if (n % 8 || n < 8 || n > 256) throw new Error("Invalid int" + n + " size");
    if ((i = Ke(e)).bitLength() > n) throw new Error("Supplied int exceeds width: " + n + " vs " + i.bitLength());
    return i.lt(new _subscriptionManager0493518a.B(0)) ? i.toTwos(n).toString("hex") : n ? qe.leftPad(i.toString("hex"), n / 8 * 2) : i;
  }

  throw new Error("Unsupported or invalid type: " + t);
},
    Ve = function (t) {
  if (ge.isArray(t)) throw new Error("Autodetection of array types is not supported.");
  var e,
      r,
      n = "";

  if (ge.isObject(t) && (t.hasOwnProperty("v") || t.hasOwnProperty("t") || t.hasOwnProperty("value") || t.hasOwnProperty("type")) ? (e = t.hasOwnProperty("t") ? t.t : t.type, n = t.hasOwnProperty("v") ? t.v : t.value) : (e = qe.toHex(t, !0), n = qe.toHex(t), e.startsWith("int") || e.startsWith("uint") || (e = "bytes")), !e.startsWith("int") && !e.startsWith("uint") || "string" != typeof n || /^(-)?0x/i.test(n) || (n = new _subscriptionManager0493518a.B(n)), ge.isArray(n)) {
    if ((r = function (t) {
      var e = /^\D+\d*\[(\d+)\]$/.exec(t);
      return e ? parseInt(e[1], 10) : null;
    }(e)) && n.length !== r) throw new Error(e + " is not matching the given array " + JSON.stringify(n));
    r = n.length;
  }

  return ge.isArray(n) ? n.map(function (t) {
    return Ye(e, t, r).toString("hex").replace("0x", "");
  }).join("") : Ye(e, n, r).toString("hex").replace("0x", "");
},
    Ze = function () {
  var t = Array.prototype.slice.call(arguments),
      e = ge.map(t, Ve);
  return qe.sha3("0x" + e.join(""));
},
    Je = _crypto_commonjsExternal1a.r,
    $e = function (t, e) {
  var r = [];
  return e.forEach(function (e) {
    if ("object" == typeof e.components) {
      if ("tuple" !== e.type.substring(0, 5)) throw new Error("components found but type is not tuple; report on GitHub");
      var n = "",
          i = e.type.indexOf("[");
      i >= 0 && (n = e.type.substring(i));
      var o = $e(t, e.components);
      ge.isArray(o) && t ? r.push("tuple(" + o.join(",") + ")" + n) : t ? r.push("(" + o + ")") : r.push("(" + o.join(",") + ")" + n);
    } else r.push(e.type);
  }), r;
},
    Xe = function (t) {
  if (!qe.isHexStrict(t)) throw new Error("The parameter must be a valid HEX string.");
  var e = "",
      r = 0,
      n = t.length;

  for ("0x" === t.substring(0, 2) && (r = 2); r < n; r += 2) {
    var i = parseInt(t.substr(r, 2), 16);
    e += String.fromCharCode(i);
  }

  return e;
},
    Qe = function (t) {
  if (!t) return "0x00";

  for (var e = "", r = 0; r < t.length; r++) {
    var n = t.charCodeAt(r).toString(16);
    e += n.length < 2 ? "0" + n : n;
  }

  return "0x" + e;
},
    tr = function (t) {
  if (t = t ? t.toLowerCase() : "ether", !Ae.unitMap[t]) throw new Error('This unit "' + t + "\" doesn't exist, please use the one of the following units" + JSON.stringify(Ae.unitMap, null, 2));
  return t;
},
    er = {
  _fireError: function (t, e, r, n) {
    return !ge.isObject(t) || t instanceof Error || !t.data || ((ge.isObject(t.data) || ge.isArray(t.data)) && (t.data = JSON.stringify(t.data, null, 2)), t = t.message + "\n" + t.data), ge.isString(t) && (t = new Error(t)), ge.isFunction(n) && n(t), ge.isFunction(r) && ((e && ge.isFunction(e.listeners) && e.listeners("error").length || ge.isFunction(n)) && e.catch(function () {}), setTimeout(function () {
      r(t);
    }, 1)), e && ge.isFunction(e.emit) && setTimeout(function () {
      e.emit("error", t), e.removeAllListeners();
    }, 1), e;
  },
  _jsonInterfaceMethodToString: function (t) {
    return ge.isObject(t) && t.name && -1 !== t.name.indexOf("(") ? t.name : t.name + "(" + $e(!1, t.inputs).join(",") + ")";
  },
  _flattenTypes: $e,
  randomHex: function (t, e) {
    var r = Je,
        n = "function" == typeof e;

    if (t > 65536) {
      if (!n) throw new Error("Requested too many random bytes.");
      e(new Error("Requested too many random bytes."));
    }

    if (void 0 !== r && r.randomBytes) {
      if (!n) return "0x" + r.randomBytes(t).toString("hex");
      r.randomBytes(t, function (t, r) {
        t ? e(a) : e(null, "0x" + r.toString("hex"));
      });
    } else {
      var i;

      if (void 0 !== r ? i = r : "undefined" != typeof msCrypto && (i = msCrypto), i && i.getRandomValues) {
        var o = i.getRandomValues(new Uint8Array(t)),
            s = "0x" + Array.from(o).map(function (t) {
          return t.toString(16);
        }).join("");
        if (!n) return s;
        e(null, s);
      } else {
        var a = new Error('No "crypto" object available. This Browser doesn\'t support generating secure random bytes.');
        if (!n) throw a;
        e(a);
      }
    }
  },
  _: ge,
  BN: qe.BN,
  isBN: qe.isBN,
  isBigNumber: qe.isBigNumber,
  isHex: qe.isHex,
  isHexStrict: qe.isHexStrict,
  sha3: qe.sha3,
  keccak256: qe.sha3,
  soliditySha3: Ze,
  isAddress: qe.isAddress,
  checkAddressChecksum: qe.checkAddressChecksum,
  toChecksumAddress: function (t) {
    if (void 0 === t) return "";
    if (!/^(0x)?[0-9a-f]{40}$/i.test(t)) throw new Error('Given address "' + t + '" is not a valid Ethereum address.');
    t = t.toLowerCase().replace(/^0x/i, "");

    for (var e = qe.sha3(t).replace(/^0x/i, ""), r = "0x", n = 0; n < t.length; n++) parseInt(e[n], 16) > 7 ? r += t[n].toUpperCase() : r += t[n];

    return r;
  },
  toHex: qe.toHex,
  toBN: qe.toBN,
  bytesToHex: qe.bytesToHex,
  hexToBytes: qe.hexToBytes,
  hexToNumberString: qe.hexToNumberString,
  hexToNumber: qe.hexToNumber,
  toDecimal: qe.hexToNumber,
  numberToHex: qe.numberToHex,
  fromDecimal: qe.numberToHex,
  hexToUtf8: qe.hexToUtf8,
  hexToString: qe.hexToUtf8,
  toUtf8: qe.hexToUtf8,
  utf8ToHex: qe.utf8ToHex,
  stringToHex: qe.utf8ToHex,
  fromUtf8: qe.utf8ToHex,
  hexToAscii: Xe,
  toAscii: Xe,
  asciiToHex: Qe,
  fromAscii: Qe,
  unitMap: Ae.unitMap,
  toWei: function (t, e) {
    if (e = tr(e), !qe.isBN(t) && !ge.isString(t)) throw new Error("Please pass numbers as strings or BigNumber objects to avoid precision errors.");
    return qe.isBN(t) ? Ae.toWei(t, e) : Ae.toWei(t, e).toString(10);
  },
  fromWei: function (t, e) {
    if (e = tr(e), !qe.isBN(t) && !ge.isString(t)) throw new Error("Please pass numbers as strings or BigNumber objects to avoid precision errors.");
    return qe.isBN(t) ? Ae.fromWei(t, e) : Ae.fromWei(t, e).toString(10);
  },
  padLeft: qe.leftPad,
  leftPad: qe.leftPad,
  padRight: qe.rightPad,
  rightPad: qe.rightPad,
  toTwosComplement: qe.toTwosComplement
}.sha3;

(0, _indexD3bd.e)((0, _indexD3bd.d)(function (t, e) {
  t.exports = function t(e, r, i) {
    function o(a, u) {
      if (!r[a]) {
        if (!e[a]) {
          var h = "function" == typeof _indexD3bd.g && _indexD3bd.g;
          if (!u && h) return h(a, !0);
          if (s) return s(a, !0);
          var l = new Error("Cannot find module '" + a + "'");
          throw l.code = "MODULE_NOT_FOUND", l;
        }

        var f = r[a] = {
          exports: {}
        };
        e[a][0].call(f.exports, function (t) {
          return o(e[a][1][t] || t);
        }, f, f.exports, t, e, r, i);
      }

      return r[a].exports;
    }

    for (var s = "function" == typeof _indexD3bd.g && _indexD3bd.g, a = 0; a < i.length; a++) o(i[a]);

    return o;
  }({
    1: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.version = "4.0.47";
    }, {}],
    2: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("./utils/properties"),
          i = (o.isSigner = function (t) {
        return n.isType(t, "Signer");
      }, o);

      function o() {
        n.setType(this, "Signer");
      }

      r.Signer = i;
    }, {
      "./utils/properties": 74
    }],
    3: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("./utils/bignumber");
      r.AddressZero = "0x0000000000000000000000000000000000000000", r.HashZero = "0x0000000000000000000000000000000000000000000000000000000000000000", r.EtherSymbol = "Ξ";
      var i = n.bigNumberify(-1);
      r.NegativeOne = i;
      var o = n.bigNumberify(0);
      r.Zero = o;
      var s = n.bigNumberify(1);
      r.One = s;
      var a = n.bigNumberify(2);
      r.Two = a;
      var u = n.bigNumberify("1000000000000000000");
      r.WeiPerEther = u;
      var h = n.bigNumberify("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
      r.MaxUint256 = h;
    }, {
      "./utils/bignumber": 63
    }],
    4: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
          o = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var s,
          a = t("./constants"),
          u = o(t("./errors")),
          h = t("./utils/abi-coder"),
          l = t("./utils/address"),
          f = t("./utils/bignumber"),
          c = t("./utils/bytes"),
          d = t("./utils/interface"),
          p = t("./utils/properties"),
          m = t("./providers/abstract-provider"),
          v = t("./abstract-signer"),
          g = (i(y, s = v.Signer), y.prototype.getAddress = function () {
        return Promise.resolve(this.address);
      }, y.prototype._fail = function (t, e) {
        return Promise.resolve().then(function () {
          u.throwError(t, u.UNSUPPORTED_OPERATION, {
            operation: e
          });
        });
      }, y.prototype.signMessage = function (t) {
        return this._fail("VoidSigner cannot sign messages", "signMessage");
      }, y.prototype.sendTransaction = function (t) {
        return this._fail("VoidSigner cannot sign transactions", "sendTransaction");
      }, y.prototype.connect = function (t) {
        return new y(this.address, t);
      }, y);

      function y(t, e) {
        var r = s.call(this) || this;
        return p.defineReadOnly(r, "address", t), p.defineReadOnly(r, "provider", e), r;
      }

      r.VoidSigner = g;
      var w = {
        chainId: !0,
        data: !0,
        from: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0
      };

      function b(t, e, r) {
        var n = t.interface.functions[e];
        return function () {
          for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];

          var o = {},
              s = null;
          if (e.length === n.inputs.length + 1 && "object" == typeof e[e.length - 1]) for (var l in null != (o = p.shallowCopy(e.pop())).blockTag && (s = o.blockTag), delete o.blockTag, o) if (!w[l]) throw new Error("unknown transaction override " + l);
          if (e.length != n.inputs.length) throw new Error("incorrect number of arguments");
          return ["data", "to"].forEach(function (t) {
            null != o[t] && u.throwError("cannot override " + t, u.UNSUPPORTED_OPERATION, {
              operation: t
            });
          }), o.to = t._deployed(s).then(function () {
            return t.addressPromise;
          }), function t(e, r, n) {
            if (Array.isArray(n)) {
              var i = [];
              return n.forEach(function (n, o) {
                var s;
                s = Array.isArray(r) ? r[o] : r[n.name], i.push(t(e, s, n));
              }), Promise.all(i);
            }

            if ("address" === n.type) return e.resolveName(r);
            if ("tuple" === n.type) return t(e, r, n.components);
            var o = n.type.match(/(.*)(\[[0-9]*\]$)/);

            if (o) {
              if (!Array.isArray(r)) throw new Error("invalid value for array");
              var s = [],
                  a = {
                components: n.components,
                type: o[1]
              };
              return r.forEach(function (r) {
                s.push(t(e, r, a));
              }), Promise.all(s);
            }

            return Promise.resolve(r);
          }(t.provider, e, n.inputs).then(function (e) {
            if (o.data = n.encode(e), "call" === n.type) return r ? Promise.resolve(a.Zero) : (t.provider || u.throwError("call (constant functions) require a provider or a signer with a provider", u.UNSUPPORTED_OPERATION, {
              operation: "call"
            }), ["gasLimit", "gasPrice", "value"].forEach(function (t) {
              if (null != o[t]) throw new Error("call cannot override " + t);
            }), null == o.from && t.signer && (o.from = t.signer.getAddress()), t.provider.call(o, s).then(function (r) {
              if (c.hexDataLength(r) % 32 == 4 && "0x08c379a0" === c.hexDataSlice(r, 0, 4)) {
                var i = h.defaultAbiCoder.decode(["string"], c.hexDataSlice(r, 4));
                u.throwError("call revert exception", u.CALL_EXCEPTION, {
                  address: t.address,
                  args: e,
                  method: n.signature,
                  errorSignature: "Error(string)",
                  errorArgs: [i],
                  reason: i,
                  transaction: o
                });
              }

              try {
                var s = n.decode(r);
                return 1 === n.outputs.length && (s = s[0]), s;
              } catch (i) {
                throw "0x" === r && 0 < n.outputs.length && u.throwError("call exception", u.CALL_EXCEPTION, {
                  address: t.address,
                  method: n.signature,
                  args: e
                }), i;
              }
            }));
            if ("transaction" === n.type) return r ? (t.provider || u.throwError("estimate gas require a provider or a signer with a provider", u.UNSUPPORTED_OPERATION, {
              operation: "estimateGas"
            }), null == o.from && t.signer && (o.from = t.signer.getAddress()), t.provider.estimateGas(o)) : (null == o.gasLimit && null != n.gas && (o.gasLimit = f.bigNumberify(n.gas).add(21e3)), t.signer || u.throwError("sending a transaction requires a signer", u.UNSUPPORTED_OPERATION, {
              operation: "sendTransaction"
            }), null != o.from && u.throwError("cannot override from in a transaction", u.UNSUPPORTED_OPERATION, {
              operation: "sendTransaction"
            }), t.signer.sendTransaction(o).then(function (e) {
              var r = e.wait.bind(e);
              return e.wait = function (e) {
                return r(e).then(function (e) {
                  return e.events = e.logs.map(function (r) {
                    var n = p.deepCopy(r),
                        i = t.interface.parseLog(r);
                    return i && (n.args = i.values, n.decode = i.decode, n.event = i.name, n.eventSignature = i.signature), n.removeListener = function () {
                      return t.provider;
                    }, n.getBlock = function () {
                      return t.provider.getBlock(e.blockHash);
                    }, n.getTransaction = function () {
                      return t.provider.getTransaction(e.transactionHash);
                    }, n.getTransactionReceipt = function () {
                      return Promise.resolve(e);
                    }, n;
                  }), e;
                });
              }, e;
            }));
            throw new Error("invalid type - " + n.type);
          });
        };
      }

      function _(t) {
        return !t.address || null != t.topics && 0 !== t.topics.length ? (t.address || "*") + "@" + (t.topics ? t.topics.join(":") : "") : "*";
      }

      var M = (S.prototype.deployed = function () {
        return this._deployed();
      }, S.prototype._deployed = function (t) {
        var e = this;
        return this._deployedPromise || (this.deployTransaction ? this._deployedPromise = this.deployTransaction.wait().then(function () {
          return e;
        }) : this._deployedPromise = this.provider.getCode(this.address, t).then(function (t) {
          return "0x" === t && u.throwError("contract not deployed", u.UNSUPPORTED_OPERATION, {
            contractAddress: e.address,
            operation: "getDeployed"
          }), e;
        })), this._deployedPromise;
      }, S.prototype.fallback = function (t) {
        var e = this;
        this.signer || u.throwError("sending a transaction requires a signer", u.UNSUPPORTED_OPERATION, {
          operation: "sendTransaction(fallback)"
        });
        var r = p.shallowCopy(t || {});
        return ["from", "to"].forEach(function (t) {
          null != r[t] && u.throwError("cannot override " + t, u.UNSUPPORTED_OPERATION, {
            operation: t
          });
        }), r.to = this.addressPromise, this.deployed().then(function () {
          return e.signer.sendTransaction(r);
        });
      }, S.prototype.connect = function (t) {
        "string" == typeof t && (t = new g(t, this.provider));
        var e = new S(this.address, this.interface, t);
        return this.deployTransaction && p.defineReadOnly(e, "deployTransaction", this.deployTransaction), e;
      }, S.prototype.attach = function (t) {
        return new S(t, this.interface, this.signer || this.provider);
      }, S.isIndexed = function (t) {
        return d.Interface.isIndexed(t);
      }, S.prototype._getEventFilter = function (t) {
        var e = this;

        if ("string" == typeof t) {
          if ("*" === t) return {
            prepareEvent: function (t) {
              var r = e.interface.parseLog(t);
              return r && (t.args = r.values, t.decode = r.decode, t.event = r.name, t.eventSignature = r.signature), [t];
            },
            eventTag: "*",
            filter: {
              address: this.address
            }
          };
          -1 !== t.indexOf("(") && (t = h.formatSignature(h.parseSignature("event " + t)));
          var r = this.interface.events[t];
          r || u.throwError("unknown event - " + t, u.INVALID_ARGUMENT, {
            argumnet: "eventName",
            value: t
          });
          var n = {
            address: this.address,
            topics: [r.topic]
          };
          return {
            prepareEvent: function (t) {
              var e = r.decode(t.data, t.topics);
              t.args = e;
              var n = Array.prototype.slice.call(e);
              return n.push(t), n;
            },
            event: r,
            eventTag: _(n),
            filter: n
          };
        }

        var i = {
          address: this.address
        },
            o = null;
        if (t.topics && t.topics[0]) for (var s in i.topics = t.topics, this.interface.events) if (-1 !== s.indexOf("(")) {
          var a = this.interface.events[s];

          if (a.topic === t.topics[0].toLowerCase()) {
            o = a;
            break;
          }
        }
        return {
          prepareEvent: function (t) {
            if (!o) return [t];
            var e = o.decode(t.data, t.topics);
            t.args = e;
            var r = Array.prototype.slice.call(e);
            return r.push(t), r;
          },
          event: o,
          eventTag: _(i),
          filter: i
        };
      }, S.prototype._addEventListener = function (t, e, r) {
        var n = this;

        function i(r) {
          var i = p.deepCopy(r),
              o = t.prepareEvent(i);
          t.event && (i.decode = t.event.decode, i.event = t.event.name, i.eventSignature = t.event.signature), i.removeListener = function () {
            n.removeListener(t.filter, e);
          }, i.getBlock = function () {
            return n.provider.getBlock(r.blockHash);
          }, i.getTransaction = function () {
            return n.provider.getTransaction(r.transactionHash);
          }, i.getTransactionReceipt = function () {
            return n.provider.getTransactionReceipt(r.transactionHash);
          }, n.emit.apply(n, [t.filter].concat(o));
        }

        this.provider || u.throwError("events require a provider or a signer with a provider", u.UNSUPPORTED_OPERATION, {
          operation: "once"
        }), this.provider.on(t.filter, i), this._events.push({
          eventFilter: t,
          listener: e,
          wrappedListener: i,
          once: r
        });
      }, S.prototype.on = function (t, e) {
        return this._addEventListener(this._getEventFilter(t), e, !1), this;
      }, S.prototype.once = function (t, e) {
        return this._addEventListener(this._getEventFilter(t), e, !0), this;
      }, S.prototype.addListener = function (t, e) {
        return this.on(t, e);
      }, S.prototype.emit = function (t) {
        for (var e = this, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];

        if (!this.provider) return !1;

        var i = !1,
            o = this._getEventFilter(t);

        return this._events = this._events.filter(function (t) {
          return t.eventFilter.eventTag !== o.eventTag || (setTimeout(function () {
            t.listener.apply(e, r);
          }, 0), i = !0, !t.once);
        }), i;
      }, S.prototype.listenerCount = function (t) {
        if (!this.provider) return 0;

        var e = this._getEventFilter(t);

        return this._events.filter(function (t) {
          return t.eventFilter.eventTag === e.eventTag;
        }).length;
      }, S.prototype.listeners = function (t) {
        if (!this.provider) return [];

        var e = this._getEventFilter(t);

        return this._events.filter(function (t) {
          return t.eventFilter.eventTag === e.eventTag;
        }).map(function (t) {
          return t.listener;
        });
      }, S.prototype.removeAllListeners = function (t) {
        var e = this;
        if (!this.provider) return this;

        var r = this._getEventFilter(t);

        return this._events = this._events.filter(function (t) {
          return t.eventFilter.eventTag !== r.eventTag || (e.provider.removeListener(t.eventFilter.filter, t.wrappedListener), !1);
        }), this;
      }, S.prototype.removeListener = function (t, e) {
        var r = this;
        if (!this.provider) return this;

        var n = !1,
            i = this._getEventFilter(t);

        return this._events = this._events.filter(function (t) {
          return t.eventFilter.eventTag !== i.eventTag || t.listener !== e || (r.provider.removeListener(t.eventFilter.filter, t.wrappedListener), !!n || !(n = !0));
        }), this;
      }, S);

      function S(t, e, r) {
        var n = this;
        if (u.checkNew(this, S), d.Interface.isInterface(e) ? p.defineReadOnly(this, "interface", e) : p.defineReadOnly(this, "interface", new d.Interface(e)), v.Signer.isSigner(r) ? (p.defineReadOnly(this, "provider", r.provider), p.defineReadOnly(this, "signer", r)) : m.Provider.isProvider(r) ? (p.defineReadOnly(this, "provider", r), p.defineReadOnly(this, "signer", null)) : u.throwError("invalid signer or provider", u.INVALID_ARGUMENT, {
          arg: "signerOrProvider",
          value: r
        }), p.defineReadOnly(this, "estimate", {}), p.defineReadOnly(this, "functions", {}), p.defineReadOnly(this, "filters", {}), Object.keys(this.interface.events).forEach(function (t) {
          var e = n.interface.events[t];
          p.defineReadOnly(n.filters, t, function () {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];

            return {
              address: n.address,
              topics: e.encodeTopics(t)
            };
          });
        }), this._events = [], p.defineReadOnly(this, "address", t), this.provider) p.defineReadOnly(this, "addressPromise", this.provider.resolveName(t).then(function (t) {
          if (null == t) throw new Error("name not found");
          return t;
        }).catch(function (t) {
          throw t;
        }));else try {
          p.defineReadOnly(this, "addressPromise", Promise.resolve(l.getAddress(t)));
        } catch (e) {
          u.throwError("provider is required to use non-address contract address", u.INVALID_ARGUMENT, {
            argument: "addressOrName",
            value: t
          });
        }
        Object.keys(this.interface.functions).forEach(function (t) {
          var e = b(n, t, !1);
          null == n[t] ? p.defineReadOnly(n, t, e) : u.warn("WARNING: Multiple definitions for " + t), null == n.functions[t] && (p.defineReadOnly(n.functions, t, e), p.defineReadOnly(n.estimate, t, b(n, t, !0)));
        });
      }

      r.Contract = M;
      var E = (k.prototype.getDeployTransaction = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        var r = {};
        if (t.length === this.interface.deployFunction.inputs.length + 1) for (var n in r = p.shallowCopy(t.pop())) if (!w[n]) throw new Error("unknown transaction override " + n);
        return ["data", "from", "to"].forEach(function (t) {
          null != r[t] && u.throwError("cannot override " + t, u.UNSUPPORTED_OPERATION, {
            operation: t
          });
        }), u.checkArgumentCount(t.length, this.interface.deployFunction.inputs.length, " in Contract constructor"), r.data = this.interface.deployFunction.encode(this.bytecode, t), r;
      }, k.prototype.deploy = function () {
        for (var t = this, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];

        var n = this.getDeployTransaction.apply(this, e);
        return this.signer.sendTransaction(n).then(function (e) {
          var r = new M(l.getContractAddress(e), t.interface, t.signer);
          return p.defineReadOnly(r, "deployTransaction", e), r;
        });
      }, k.prototype.attach = function (t) {
        return new M(t, this.interface, this.signer);
      }, k.prototype.connect = function (t) {
        return new k(this.interface, this.bytecode, t);
      }, k.fromSolidity = function (t, e) {
        null == t && u.throwError("missing compiler output", u.MISSING_ARGUMENT, {
          argument: "compilerOutput"
        }), "string" == typeof t && (t = JSON.parse(t));
        var r = t.abi,
            n = null;
        return t.bytecode ? n = t.bytecode : t.evm && t.evm.bytecode && (n = t.evm.bytecode), new k(r, n, e);
      }, k);

      function k(t, e, r) {
        var n = null;
        "string" == typeof e ? n = e : c.isArrayish(e) ? n = c.hexlify(e) : "string" == typeof e.object ? n = e.object : u.throwError("bytecode must be a valid hex string", u.INVALID_ARGUMENT, {
          arg: "bytecode",
          value: e
        }), "0x" !== n.substring(0, 2) && (n = "0x" + n), c.isHexString(n) || u.throwError("bytecode must be a valid hex string", u.INVALID_ARGUMENT, {
          arg: "bytecode",
          value: e
        }), n.length % 2 != 0 && u.throwError("bytecode must be valid data (even length)", u.INVALID_ARGUMENT, {
          arg: "bytecode",
          value: e
        }), p.defineReadOnly(this, "bytecode", n), d.Interface.isInterface(t) ? p.defineReadOnly(this, "interface", t) : p.defineReadOnly(this, "interface", new d.Interface(t)), r && !v.Signer.isSigner(r) && u.throwError("invalid signer", u.INVALID_ARGUMENT, {
          arg: "signer",
          value: null
        }), p.defineReadOnly(this, "signer", r || null);
      }

      r.ContractFactory = E;
    }, {
      "./abstract-signer": 2,
      "./constants": 3,
      "./errors": 5,
      "./providers/abstract-provider": 50,
      "./utils/abi-coder": 59,
      "./utils/address": 60,
      "./utils/bignumber": 63,
      "./utils/bytes": 64,
      "./utils/interface": 69,
      "./utils/properties": 74
    }],
    5: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("./_version");
      r.UNKNOWN_ERROR = "UNKNOWN_ERROR", r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", r.MISSING_NEW = "MISSING_NEW", r.CALL_EXCEPTION = "CALL_EXCEPTION", r.INVALID_ARGUMENT = "INVALID_ARGUMENT", r.MISSING_ARGUMENT = "MISSING_ARGUMENT", r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", r.NUMERIC_FAULT = "NUMERIC_FAULT", r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", r.NONCE_EXPIRED = "NONCE_EXPIRED", r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED";
      var i = !(r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
          o = !1;

      function s(t, e, i) {
        if (o) throw new Error("unknown error");
        e = e || r.UNKNOWN_ERROR, i = i || {};
        var s = [];
        Object.keys(i).forEach(function (t) {
          try {
            s.push(t + "=" + JSON.stringify(i[t]));
          } catch (e) {
            s.push(t + "=" + JSON.stringify(i[t].toString()));
          }
        }), s.push("version=" + n.version);
        var a = t;
        s.length && (t += " (" + s.join(", ") + ")");
        var u = new Error(t);
        throw u.reason = a, u.code = e, Object.keys(i).forEach(function (t) {
          u[t] = i[t];
        }), u;
      }

      r.throwError = s, r.checkNew = function (t, e) {
        t instanceof e || s("missing new", r.MISSING_NEW, {
          name: e.name
        });
      }, r.checkArgumentCount = function (t, e, n) {
        n = n || "", t < e && s("missing argument" + n, r.MISSING_ARGUMENT, {
          count: t,
          expectedCount: e
        }), e < t && s("too many arguments" + n, r.UNEXPECTED_ARGUMENT, {
          count: t,
          expectedCount: e
        });
      }, r.setCensorship = function (t, e) {
        i && s("error censorship permanent", r.UNSUPPORTED_OPERATION, {
          operation: "setCensorship"
        }), o = !!t, i = !!e;
      }, r.checkNormalize = function () {
        try {
          if (["NFD", "NFC", "NFKD", "NFKC"].forEach(function (t) {
            try {
              "test".normalize(t);
            } catch (e) {
              throw new Error("missing " + t);
            }
          }), String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
        } catch (t) {
          s("platform missing String.prototype.normalize", r.UNSUPPORTED_OPERATION, {
            operation: "String.prototype.normalize",
            form: t.message
          });
        }
      };
      var a = {
        debug: 1,
        default: 2,
        info: 2,
        warn: 3,
        error: 4,
        off: 5
      },
          u = a.default;

      function h(t, e) {
        u > a[t] || console.log.apply(console, e);
      }

      function l() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        h("warn", t);
      }

      r.setLogLevel = function (t) {
        var e = a[t];
        null != e ? u = e : l("invliad log level - " + t);
      }, r.warn = l, r.info = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];

        h("info", t);
      };
    }, {
      "./_version": 1
    }],
    6: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = t("./contract");
      r.Contract = i.Contract, r.ContractFactory = i.ContractFactory, r.VoidSigner = i.VoidSigner;
      var o = t("./abstract-signer");
      r.Signer = o.Signer;
      var s = t("./wallet");
      r.Wallet = s.Wallet;
      var a = n(t("./constants"));
      r.constants = a;
      var u = n(t("./errors"));
      r.errors = u;
      var h = n(t("./providers"));
      r.providers = h;
      var l = n(t("./utils"));
      r.utils = l;
      var f = n(t("./wordlists"));
      r.wordlists = f;
      var c = t("./utils/shims");
      r.platform = c.platform;
      var d = t("./_version");
      r.version = d.version, r.getDefaultProvider = function (t) {
        null == t && (t = "homestead");
        var e = l.getNetwork(t);
        return e && e._defaultProvider || u.throwError("unsupported getDefaultProvider network", u.UNSUPPORTED_OPERATION, {
          operation: "getDefaultProvider",
          network: t
        }), e._defaultProvider(h);
      };
    }, {
      "./_version": 1,
      "./abstract-signer": 2,
      "./constants": 3,
      "./contract": 4,
      "./errors": 5,
      "./providers": 54,
      "./utils": 68,
      "./utils/shims": 80,
      "./wallet": 88,
      "./wordlists": 89
    }],
    7: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = n(t("./ethers"));
      r.ethers = i, function (t) {
        for (var e in t) r.hasOwnProperty(e) || (r[e] = t[e]);
      }(t("./ethers"));
    }, {
      "./ethers": 6
    }],
    8: [function (t, e, r) {
      !function (t) {
        function n(t) {
          return parseInt(t) === t;
        }

        function i(t) {
          if (!n(t.length)) return !1;

          for (var e = 0; e < t.length; e++) if (!n(t[e]) || t[e] < 0 || 255 < t[e]) return !1;

          return !0;
        }

        function o(t, e) {
          if (t.buffer && ArrayBuffer.isView(t) && "Uint8Array" === t.name) return e && (t = t.slice ? t.slice() : Array.prototype.slice.call(t)), t;

          if (Array.isArray(t)) {
            if (!i(t)) throw new Error("Array contains invalid value: " + t);
            return new Uint8Array(t);
          }

          if (n(t.length) && i(t)) return new Uint8Array(t);
          throw new Error("unsupported array-like object");
        }

        function s(t) {
          return new Uint8Array(t);
        }

        function a(t, e, r, n, i) {
          null == n && null == i || (t = t.slice ? t.slice(n, i) : Array.prototype.slice.call(t, n, i)), e.set(t, r);
        }

        var u,
            h = {
          toBytes: function (t) {
            var e = [],
                r = 0;

            for (t = encodeURI(t); r < t.length;) {
              var n = t.charCodeAt(r++);
              37 === n ? (e.push(parseInt(t.substr(r, 2), 16)), r += 2) : e.push(n);
            }

            return o(e);
          },
          fromBytes: function (t) {
            for (var e = [], r = 0; r < t.length;) {
              var n = t[r];
              n < 128 ? (e.push(String.fromCharCode(n)), r++) : 191 < n && n < 224 ? (e.push(String.fromCharCode((31 & n) << 6 | 63 & t[r + 1])), r += 2) : (e.push(String.fromCharCode((15 & n) << 12 | (63 & t[r + 1]) << 6 | 63 & t[r + 2])), r += 3);
            }

            return e.join("");
          }
        },
            l = (u = "0123456789abcdef", {
          toBytes: function (t) {
            for (var e = [], r = 0; r < t.length; r += 2) e.push(parseInt(t.substr(r, 2), 16));

            return e;
          },
          fromBytes: function (t) {
            for (var e = [], r = 0; r < t.length; r++) {
              var n = t[r];
              e.push(u[(240 & n) >> 4] + u[15 & n]);
            }

            return e.join("");
          }
        }),
            f = {
          16: 10,
          24: 12,
          32: 14
        },
            c = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
            d = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
            p = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
            m = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
            v = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
            g = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
            y = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
            w = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
            b = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
            _ = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
            M = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
            S = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
            E = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
            k = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
            A = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

        function x(t) {
          for (var e = [], r = 0; r < t.length; r += 4) e.push(t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]);

          return e;
        }

        var T = function (t) {
          if (!(this instanceof T)) throw Error("AES must be instanitated with `new`");
          Object.defineProperty(this, "key", {
            value: o(t, !0)
          }), this._prepare();
        };

        T.prototype._prepare = function () {
          var t = f[this.key.length];
          if (null == t) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
          this._Ke = [], this._Kd = [];

          for (var e = 0; e <= t; e++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);

          var r,
              n = 4 * (t + 1),
              i = this.key.length / 4,
              o = x(this.key);

          for (e = 0; e < i; e++) r = e >> 2, this._Ke[r][e % 4] = o[e], this._Kd[t - r][e % 4] = o[e];

          for (var s, a = 0, u = i; u < n;) {
            if (s = o[i - 1], o[0] ^= d[s >> 16 & 255] << 24 ^ d[s >> 8 & 255] << 16 ^ d[255 & s] << 8 ^ d[s >> 24 & 255] ^ c[a] << 24, a += 1, 8 != i) for (e = 1; e < i; e++) o[e] ^= o[e - 1];else {
              for (e = 1; e < i / 2; e++) o[e] ^= o[e - 1];

              for (s = o[i / 2 - 1], o[i / 2] ^= d[255 & s] ^ d[s >> 8 & 255] << 8 ^ d[s >> 16 & 255] << 16 ^ d[s >> 24 & 255] << 24, e = i / 2 + 1; e < i; e++) o[e] ^= o[e - 1];
            }

            for (e = 0; e < i && u < n;) h = u >> 2, l = u % 4, this._Ke[h][l] = o[e], this._Kd[t - h][l] = o[e++], u++;
          }

          for (var h = 1; h < t; h++) for (var l = 0; l < 4; l++) s = this._Kd[h][l], this._Kd[h][l] = S[s >> 24 & 255] ^ E[s >> 16 & 255] ^ k[s >> 8 & 255] ^ A[255 & s];
        }, T.prototype.encrypt = function (t) {
          if (16 != t.length) throw new Error("invalid plaintext size (must be 16 bytes)");

          for (var e = this._Ke.length - 1, r = [0, 0, 0, 0], n = x(t), i = 0; i < 4; i++) n[i] ^= this._Ke[0][i];

          for (var o = 1; o < e; o++) {
            for (i = 0; i < 4; i++) r[i] = m[n[i] >> 24 & 255] ^ v[n[(i + 1) % 4] >> 16 & 255] ^ g[n[(i + 2) % 4] >> 8 & 255] ^ y[255 & n[(i + 3) % 4]] ^ this._Ke[o][i];

            n = r.slice();
          }

          var a,
              u = s(16);

          for (i = 0; i < 4; i++) a = this._Ke[e][i], u[4 * i] = 255 & (d[n[i] >> 24 & 255] ^ a >> 24), u[4 * i + 1] = 255 & (d[n[(i + 1) % 4] >> 16 & 255] ^ a >> 16), u[4 * i + 2] = 255 & (d[n[(i + 2) % 4] >> 8 & 255] ^ a >> 8), u[4 * i + 3] = 255 & (d[255 & n[(i + 3) % 4]] ^ a);

          return u;
        }, T.prototype.decrypt = function (t) {
          if (16 != t.length) throw new Error("invalid ciphertext size (must be 16 bytes)");

          for (var e = this._Kd.length - 1, r = [0, 0, 0, 0], n = x(t), i = 0; i < 4; i++) n[i] ^= this._Kd[0][i];

          for (var o = 1; o < e; o++) {
            for (i = 0; i < 4; i++) r[i] = w[n[i] >> 24 & 255] ^ b[n[(i + 3) % 4] >> 16 & 255] ^ _[n[(i + 2) % 4] >> 8 & 255] ^ M[255 & n[(i + 1) % 4]] ^ this._Kd[o][i];

            n = r.slice();
          }

          var a,
              u = s(16);

          for (i = 0; i < 4; i++) a = this._Kd[e][i], u[4 * i] = 255 & (p[n[i] >> 24 & 255] ^ a >> 24), u[4 * i + 1] = 255 & (p[n[(i + 3) % 4] >> 16 & 255] ^ a >> 16), u[4 * i + 2] = 255 & (p[n[(i + 2) % 4] >> 8 & 255] ^ a >> 8), u[4 * i + 3] = 255 & (p[255 & n[(i + 1) % 4]] ^ a);

          return u;
        };

        var N = function (t) {
          if (!(this instanceof N)) throw Error("AES must be instanitated with `new`");
          this.description = "Electronic Code Block", this.name = "ecb", this._aes = new T(t);
        };

        N.prototype.encrypt = function (t) {
          if ((t = o(t)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");

          for (var e = s(t.length), r = s(16), n = 0; n < t.length; n += 16) a(t, r, 0, n, n + 16), a(r = this._aes.encrypt(r), e, n);

          return e;
        }, N.prototype.decrypt = function (t) {
          if ((t = o(t)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");

          for (var e = s(t.length), r = s(16), n = 0; n < t.length; n += 16) a(t, r, 0, n, n + 16), a(r = this._aes.decrypt(r), e, n);

          return e;
        };

        var P = function (t, e) {
          if (!(this instanceof P)) throw Error("AES must be instanitated with `new`");

          if (this.description = "Cipher Block Chaining", this.name = "cbc", e) {
            if (16 != e.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
          } else e = s(16);

          this._lastCipherblock = o(e, !0), this._aes = new T(t);
        };

        P.prototype.encrypt = function (t) {
          if ((t = o(t)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");

          for (var e = s(t.length), r = s(16), n = 0; n < t.length; n += 16) {
            a(t, r, 0, n, n + 16);

            for (var i = 0; i < 16; i++) r[i] ^= this._lastCipherblock[i];

            this._lastCipherblock = this._aes.encrypt(r), a(this._lastCipherblock, e, n);
          }

          return e;
        }, P.prototype.decrypt = function (t) {
          if ((t = o(t)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");

          for (var e = s(t.length), r = s(16), n = 0; n < t.length; n += 16) {
            a(t, r, 0, n, n + 16), r = this._aes.decrypt(r);

            for (var i = 0; i < 16; i++) e[n + i] = r[i] ^ this._lastCipherblock[i];

            a(t, this._lastCipherblock, 0, n, n + 16);
          }

          return e;
        };

        var R = function (t, e, r) {
          if (!(this instanceof R)) throw Error("AES must be instanitated with `new`");

          if (this.description = "Cipher Feedback", this.name = "cfb", e) {
            if (16 != e.length) throw new Error("invalid initialation vector size (must be 16 size)");
          } else e = s(16);

          r = r || 1, this.segmentSize = r, this._shiftRegister = o(e, !0), this._aes = new T(t);
        };

        R.prototype.encrypt = function (t) {
          if (t.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");

          for (var e, r = o(t, !0), n = 0; n < r.length; n += this.segmentSize) {
            e = this._aes.encrypt(this._shiftRegister);

            for (var i = 0; i < this.segmentSize; i++) r[n + i] ^= e[i];

            a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize);
          }

          return r;
        }, R.prototype.decrypt = function (t) {
          if (t.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");

          for (var e, r = o(t, !0), n = 0; n < r.length; n += this.segmentSize) {
            e = this._aes.encrypt(this._shiftRegister);

            for (var i = 0; i < this.segmentSize; i++) r[n + i] ^= e[i];

            a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(t, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize);
          }

          return r;
        };

        var O = function (t, e) {
          if (!(this instanceof O)) throw Error("AES must be instanitated with `new`");

          if (this.description = "Output Feedback", this.name = "ofb", e) {
            if (16 != e.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
          } else e = s(16);

          this._lastPrecipher = o(e, !0), this._lastPrecipherIndex = 16, this._aes = new T(t);
        };

        O.prototype.encrypt = function (t) {
          for (var e = o(t, !0), r = 0; r < e.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), e[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];

          return e;
        }, O.prototype.decrypt = O.prototype.encrypt;

        var I = function (t) {
          if (!(this instanceof I)) throw Error("Counter must be instanitated with `new`");
          0 === t || t || (t = 1), "number" == typeof t ? (this._counter = s(16), this.setValue(t)) : this.setBytes(t);
        };

        I.prototype.setValue = function (t) {
          if ("number" != typeof t || parseInt(t) != t) throw new Error("invalid counter value (must be an integer)");

          for (var e = 15; 0 <= e; --e) this._counter[e] = t % 256, t >>= 8;
        }, I.prototype.setBytes = function (t) {
          if (16 != (t = o(t, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
          this._counter = t;
        }, I.prototype.increment = function () {
          for (var t = 15; 0 <= t; t--) {
            if (255 !== this._counter[t]) {
              this._counter[t]++;
              break;
            }

            this._counter[t] = 0;
          }
        };

        var C = function (t, e) {
          if (!(this instanceof C)) throw Error("AES must be instanitated with `new`");
          this.description = "Counter", this.name = "ctr", e instanceof I || (e = new I(e)), this._counter = e, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new T(t);
        };

        C.prototype.encrypt = function (t) {
          for (var e = o(t, !0), r = 0; r < e.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), e[r] ^= this._remainingCounter[this._remainingCounterIndex++];

          return e;
        }, C.prototype.decrypt = C.prototype.encrypt;
        var D = {
          AES: T,
          Counter: I,
          ModeOfOperation: {
            ecb: N,
            cbc: P,
            cfb: R,
            ofb: O,
            ctr: C
          },
          utils: {
            hex: l,
            utf8: h
          },
          padding: {
            pkcs7: {
              pad: function (t) {
                var e = 16 - (t = o(t, !0)).length % 16,
                    r = s(t.length + e);
                a(t, r);

                for (var n = t.length; n < r.length; n++) r[n] = e;

                return r;
              },
              strip: function (t) {
                if ((t = o(t, !0)).length < 16) throw new Error("PKCS#7 invalid length");
                var e = t[t.length - 1];
                if (16 < e) throw new Error("PKCS#7 padding byte out of range");

                for (var r = t.length - e, n = 0; n < e; n++) if (t[r + n] !== e) throw new Error("PKCS#7 invalid padding byte");

                var i = s(r);
                return a(t, i, 0, 0, r), i;
              }
            }
          },
          _arrayTest: {
            coerceArray: o,
            createArray: s,
            copyArray: a
          }
        };
        void 0 !== r ? e.exports = D : (t.aesjs && (D._aesjs = t.aesjs), t.aesjs = D);
      }(this);
    }, {}],
    9: [function (t, e, r) {
      !function (e, r) {
        function n(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }

        function i(t, e) {
          function r() {}

          t.super_ = e, r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
        }

        function o(t, e, r) {
          if (o.isBN(t)) return t;
          this.negative = 0, this.words = null, this.length = 0, (this.red = null) !== t && ("le" !== e && "be" !== e || (r = e, e = 10), this._init(t || 0, e || 10, r || "be"));
        }

        var s;
        "object" == typeof e ? e.exports = o : r.BN = o, (o.BN = o).wordSize = 26;

        try {
          s = t("buffer").Buffer;
        } catch (e) {}

        function a(t, e, r) {
          for (var n = 0, i = Math.min(t.length, r), o = e; o < i; o++) {
            var s = t.charCodeAt(o) - 48;
            n <<= 4, n |= 49 <= s && s <= 54 ? s - 49 + 10 : 17 <= s && s <= 22 ? s - 17 + 10 : 15 & s;
          }

          return n;
        }

        function u(t, e, r, n) {
          for (var i = 0, o = Math.min(t.length, r), s = e; s < o; s++) {
            var a = t.charCodeAt(s) - 48;
            i *= n, i += 49 <= a ? a - 49 + 10 : 17 <= a ? a - 17 + 10 : a;
          }

          return i;
        }

        o.isBN = function (t) {
          return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
        }, o.max = function (t, e) {
          return 0 < t.cmp(e) ? t : e;
        }, o.min = function (t, e) {
          return t.cmp(e) < 0 ? t : e;
        }, o.prototype._init = function (t, e, r) {
          if ("number" == typeof t) return this._initNumber(t, e, r);
          if ("object" == typeof t) return this._initArray(t, e, r);
          "hex" === e && (e = 16), n(e === (0 | e) && 2 <= e && e <= 36);
          var i = 0;
          "-" === (t = t.toString().replace(/\s+/g, ""))[0] && i++, 16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i), "-" === t[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), e, r);
        }, o.prototype._initNumber = function (t, e, r) {
          t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [67108863 & t], this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [67108863 & t, t / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), e, r);
        }, o.prototype._initArray = function (t, e, r) {
          if (n("number" == typeof t.length), t.length <= 0) return this.words = [0], this.length = 1, this;
          this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);

          for (var i = 0; i < this.length; i++) this.words[i] = 0;

          var o,
              s,
              a = 0;
          if ("be" === r) for (i = t.length - 1, o = 0; 0 <= i; i -= 3) s = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, 26 <= (a += 24) && (a -= 26, o++);else if ("le" === r) for (o = i = 0; i < t.length; i += 3) s = t[i] | t[i + 1] << 8 | t[i + 2] << 16, this.words[o] |= s << a & 67108863, this.words[o + 1] = s >>> 26 - a & 67108863, 26 <= (a += 24) && (a -= 26, o++);
          return this.strip();
        }, o.prototype._parseHex = function (t, e) {
          this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);

          for (var r = 0; r < this.length; r++) this.words[r] = 0;

          var n,
              i,
              o = 0;

          for (r = t.length - 6, n = 0; e <= r; r -= 6) i = a(t, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, 26 <= (o += 24) && (o -= 26, n++);

          r + 6 !== e && (i = a(t, e, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip();
        }, o.prototype._parseBase = function (t, e, r) {
          this.words = [0];

          for (var n = 0, i = this.length = 1; i <= 67108863; i *= e) n++;

          n--, i = i / e | 0;

          for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, h = 0, l = r; l < a; l += n) h = u(t, l, l + n, e), this.imuln(i), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);

          if (0 != s) {
            var f = 1;

            for (h = u(t, l, t.length, e), l = 0; l < s; l++) f *= e;

            this.imuln(f), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
          }
        }, o.prototype.copy = function (t) {
          t.words = new Array(this.length);

          for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];

          t.length = this.length, t.negative = this.negative, t.red = this.red;
        }, o.prototype.clone = function () {
          var t = new o(null);
          return this.copy(t), t;
        }, o.prototype._expand = function (t) {
          for (; this.length < t;) this.words[this.length++] = 0;

          return this;
        }, o.prototype.strip = function () {
          for (; 1 < this.length && 0 === this.words[this.length - 1];) this.length--;

          return this._normSign();
        }, o.prototype._normSign = function () {
          return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
        }, o.prototype.inspect = function () {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        };
        var h = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            f = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

        function c(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = t.length + e.length | 0;
          n = (r.length = n) - 1 | 0;
          var i = 0 | t.words[0],
              o = 0 | e.words[0],
              s = i * o,
              a = 67108863 & s,
              u = s / 67108864 | 0;
          r.words[0] = a;

          for (var h = 1; h < n; h++) {
            for (var l = u >>> 26, f = 67108863 & u, c = Math.min(h, e.length - 1), d = Math.max(0, h - t.length + 1); d <= c; d++) {
              var p = h - d | 0;
              l += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + f) / 67108864 | 0, f = 67108863 & s;
            }

            r.words[h] = 0 | f, u = 0 | l;
          }

          return 0 !== u ? r.words[h] = 0 | u : r.length--, r.strip();
        }

        o.prototype.toString = function (t, e) {
          var r;

          if (e = 0 | e || 1, 16 === (t = t || 10) || "hex" === t) {
            r = "";

            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                  u = (16777215 & (a << i | o)).toString(16);
              r = 0 != (o = a >>> 24 - i & 16777215) || s !== this.length - 1 ? h[6 - u.length] + u + r : u + r, 26 <= (i += 2) && (i -= 26, s--);
            }

            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0;) r = "0" + r;

            return 0 !== this.negative && (r = "-" + r), r;
          }

          if (t === (0 | t) && 2 <= t && t <= 36) {
            var c = l[t],
                d = f[t];
            r = "";
            var p = this.clone();

            for (p.negative = 0; !p.isZero();) {
              var m = p.modn(d).toString(t);
              r = (p = p.idivn(d)).isZero() ? m + r : h[c - m.length] + m + r;
            }

            for (this.isZero() && (r = "0" + r); r.length % e != 0;) r = "0" + r;

            return 0 !== this.negative && (r = "-" + r), r;
          }

          n(!1, "Base should be between 2 and 36");
        }, o.prototype.toNumber = function () {
          var t = this.words[0];
          return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : 2 < this.length && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -t : t;
        }, o.prototype.toJSON = function () {
          return this.toString(16);
        }, o.prototype.toBuffer = function (t, e) {
          return n(void 0 !== s), this.toArrayLike(s, t, e);
        }, o.prototype.toArray = function (t, e) {
          return this.toArrayLike(Array, t, e);
        }, o.prototype.toArrayLike = function (t, e, r) {
          var i = this.byteLength(),
              o = r || Math.max(1, i);
          n(i <= o, "byte array longer than desired length"), n(0 < o, "Requested array length <= 0"), this.strip();
          var s,
              a,
              u = "le" === e,
              h = new t(o),
              l = this.clone();

          if (u) {
            for (a = 0; !l.isZero(); a++) s = l.andln(255), l.iushrn(8), h[a] = s;

            for (; a < o; a++) h[a] = 0;
          } else {
            for (a = 0; a < o - i; a++) h[a] = 0;

            for (a = 0; !l.isZero(); a++) s = l.andln(255), l.iushrn(8), h[o - a - 1] = s;
          }

          return h;
        }, o.prototype._countBits = Math.clz32 ? function (t) {
          return 32 - Math.clz32(t);
        } : function (t) {
          var e = t,
              r = 0;
          return 4096 <= e && (r += 13, e >>>= 13), 64 <= e && (r += 7, e >>>= 7), 8 <= e && (r += 4, e >>>= 4), 2 <= e && (r += 2, e >>>= 2), r + e;
        }, o.prototype._zeroBits = function (t) {
          if (0 === t) return 26;
          var e = t,
              r = 0;
          return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
        }, o.prototype.bitLength = function () {
          var t = this.words[this.length - 1],
              e = this._countBits(t);

          return 26 * (this.length - 1) + e;
        }, o.prototype.zeroBits = function () {
          if (this.isZero()) return 0;

          for (var t = 0, e = 0; e < this.length; e++) {
            var r = this._zeroBits(this.words[e]);

            if (t += r, 26 !== r) break;
          }

          return t;
        }, o.prototype.byteLength = function () {
          return Math.ceil(this.bitLength() / 8);
        }, o.prototype.toTwos = function (t) {
          return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
        }, o.prototype.fromTwos = function (t) {
          return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
        }, o.prototype.isNeg = function () {
          return 0 !== this.negative;
        }, o.prototype.neg = function () {
          return this.clone().ineg();
        }, o.prototype.ineg = function () {
          return this.isZero() || (this.negative ^= 1), this;
        }, o.prototype.iuor = function (t) {
          for (; this.length < t.length;) this.words[this.length++] = 0;

          for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];

          return this.strip();
        }, o.prototype.ior = function (t) {
          return n(0 == (this.negative | t.negative)), this.iuor(t);
        }, o.prototype.or = function (t) {
          return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
        }, o.prototype.uor = function (t) {
          return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
        }, o.prototype.iuand = function (t) {
          var e;
          e = this.length > t.length ? t : this;

          for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];

          return this.length = e.length, this.strip();
        }, o.prototype.iand = function (t) {
          return n(0 == (this.negative | t.negative)), this.iuand(t);
        }, o.prototype.and = function (t) {
          return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
        }, o.prototype.uand = function (t) {
          return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
        }, o.prototype.iuxor = function (t) {
          var e, r;
          r = this.length > t.length ? (e = this, t) : (e = t, this);

          for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];

          if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n];
          return this.length = e.length, this.strip();
        }, o.prototype.ixor = function (t) {
          return n(0 == (this.negative | t.negative)), this.iuxor(t);
        }, o.prototype.xor = function (t) {
          return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
        }, o.prototype.uxor = function (t) {
          return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
        }, o.prototype.inotn = function (t) {
          n("number" == typeof t && 0 <= t);
          var e = 0 | Math.ceil(t / 26),
              r = t % 26;
          this._expand(e), 0 < r && e--;

          for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];

          return 0 < r && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip();
        }, o.prototype.notn = function (t) {
          return this.clone().inotn(t);
        }, o.prototype.setn = function (t, e) {
          n("number" == typeof t && 0 <= t);
          var r = t / 26 | 0,
              i = t % 26;
          return this._expand(1 + r), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip();
        }, o.prototype.iadd = function (t) {
          var e, r, n;
          if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
          if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
          n = this.length > t.length ? (r = this, t) : (r = t, this);

          for (var i = 0, o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;

          for (; 0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;

          if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o];
          return this;
        }, o.prototype.add = function (t) {
          var e;
          return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
        }, o.prototype.isub = function (t) {
          if (0 !== t.negative) {
            t.negative = 0;
            var e = this.iadd(t);
            return t.negative = 1, e._normSign();
          }

          if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
          var r,
              n,
              i = this.cmp(t);
          if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
          n = 0 < i ? (r = this, t) : (r = t, this);

          for (var o = 0, s = 0; s < n.length; s++) o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26, this.words[s] = 67108863 & e;

          for (; 0 !== o && s < r.length; s++) o = (e = (0 | r.words[s]) + o) >> 26, this.words[s] = 67108863 & e;

          if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
          return this.length = Math.max(this.length, s), r !== this && (this.negative = 1), this.strip();
        }, o.prototype.sub = function (t) {
          return this.clone().isub(t);
        };

        var d = function (t, e, r) {
          var n,
              i,
              o,
              s = t.words,
              a = e.words,
              u = r.words,
              h = 0,
              l = 0 | s[0],
              f = 8191 & l,
              c = l >>> 13,
              d = 0 | s[1],
              p = 8191 & d,
              m = d >>> 13,
              v = 0 | s[2],
              g = 8191 & v,
              y = v >>> 13,
              w = 0 | s[3],
              b = 8191 & w,
              _ = w >>> 13,
              M = 0 | s[4],
              S = 8191 & M,
              E = M >>> 13,
              k = 0 | s[5],
              A = 8191 & k,
              x = k >>> 13,
              T = 0 | s[6],
              N = 8191 & T,
              P = T >>> 13,
              R = 0 | s[7],
              O = 8191 & R,
              I = R >>> 13,
              C = 0 | s[8],
              D = 8191 & C,
              L = C >>> 13,
              U = 0 | s[9],
              j = 8191 & U,
              B = U >>> 13,
              F = 0 | a[0],
              H = 8191 & F,
              G = F >>> 13,
              W = 0 | a[1],
              z = 8191 & W,
              q = W >>> 13,
              K = 0 | a[2],
              Y = 8191 & K,
              V = K >>> 13,
              Z = 0 | a[3],
              J = 8191 & Z,
              $ = Z >>> 13,
              X = 0 | a[4],
              Q = 8191 & X,
              tt = X >>> 13,
              et = 0 | a[5],
              rt = 8191 & et,
              nt = et >>> 13,
              it = 0 | a[6],
              ot = 8191 & it,
              st = it >>> 13,
              at = 0 | a[7],
              ut = 8191 & at,
              ht = at >>> 13,
              lt = 0 | a[8],
              ft = 8191 & lt,
              ct = lt >>> 13,
              dt = 0 | a[9],
              pt = 8191 & dt,
              mt = dt >>> 13;

          r.negative = t.negative ^ e.negative, r.length = 19;
          var vt = (h + (n = Math.imul(f, H)) | 0) + ((8191 & (i = (i = Math.imul(f, G)) + Math.imul(c, H) | 0)) << 13) | 0;
          h = ((o = Math.imul(c, G)) + (i >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, n = Math.imul(p, H), i = (i = Math.imul(p, G)) + Math.imul(m, H) | 0, o = Math.imul(m, G);
          var gt = (h + (n = n + Math.imul(f, z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, q) | 0) + Math.imul(c, z) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(c, q) | 0) + (i >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, n = Math.imul(g, H), i = (i = Math.imul(g, G)) + Math.imul(y, H) | 0, o = Math.imul(y, G), n = n + Math.imul(p, z) | 0, i = (i = i + Math.imul(p, q) | 0) + Math.imul(m, z) | 0, o = o + Math.imul(m, q) | 0;
          var yt = (h + (n = n + Math.imul(f, Y) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, V) | 0) + Math.imul(c, Y) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(c, V) | 0) + (i >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, n = Math.imul(b, H), i = (i = Math.imul(b, G)) + Math.imul(_, H) | 0, o = Math.imul(_, G), n = n + Math.imul(g, z) | 0, i = (i = i + Math.imul(g, q) | 0) + Math.imul(y, z) | 0, o = o + Math.imul(y, q) | 0, n = n + Math.imul(p, Y) | 0, i = (i = i + Math.imul(p, V) | 0) + Math.imul(m, Y) | 0, o = o + Math.imul(m, V) | 0;
          var wt = (h + (n = n + Math.imul(f, J) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, $) | 0) + Math.imul(c, J) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(c, $) | 0) + (i >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, n = Math.imul(S, H), i = (i = Math.imul(S, G)) + Math.imul(E, H) | 0, o = Math.imul(E, G), n = n + Math.imul(b, z) | 0, i = (i = i + Math.imul(b, q) | 0) + Math.imul(_, z) | 0, o = o + Math.imul(_, q) | 0, n = n + Math.imul(g, Y) | 0, i = (i = i + Math.imul(g, V) | 0) + Math.imul(y, Y) | 0, o = o + Math.imul(y, V) | 0, n = n + Math.imul(p, J) | 0, i = (i = i + Math.imul(p, $) | 0) + Math.imul(m, J) | 0, o = o + Math.imul(m, $) | 0;
          var bt = (h + (n = n + Math.imul(f, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tt) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(c, tt) | 0) + (i >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, n = Math.imul(A, H), i = (i = Math.imul(A, G)) + Math.imul(x, H) | 0, o = Math.imul(x, G), n = n + Math.imul(S, z) | 0, i = (i = i + Math.imul(S, q) | 0) + Math.imul(E, z) | 0, o = o + Math.imul(E, q) | 0, n = n + Math.imul(b, Y) | 0, i = (i = i + Math.imul(b, V) | 0) + Math.imul(_, Y) | 0, o = o + Math.imul(_, V) | 0, n = n + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, $) | 0) + Math.imul(y, J) | 0, o = o + Math.imul(y, $) | 0, n = n + Math.imul(p, Q) | 0, i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, Q) | 0, o = o + Math.imul(m, tt) | 0;

          var _t = (h + (n = n + Math.imul(f, rt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, nt) | 0) + Math.imul(c, rt) | 0)) << 13) | 0;

          h = ((o = o + Math.imul(c, nt) | 0) + (i >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, n = Math.imul(N, H), i = (i = Math.imul(N, G)) + Math.imul(P, H) | 0, o = Math.imul(P, G), n = n + Math.imul(A, z) | 0, i = (i = i + Math.imul(A, q) | 0) + Math.imul(x, z) | 0, o = o + Math.imul(x, q) | 0, n = n + Math.imul(S, Y) | 0, i = (i = i + Math.imul(S, V) | 0) + Math.imul(E, Y) | 0, o = o + Math.imul(E, V) | 0, n = n + Math.imul(b, J) | 0, i = (i = i + Math.imul(b, $) | 0) + Math.imul(_, J) | 0, o = o + Math.imul(_, $) | 0, n = n + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, tt) | 0) + Math.imul(y, Q) | 0, o = o + Math.imul(y, tt) | 0, n = n + Math.imul(p, rt) | 0, i = (i = i + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, o = o + Math.imul(m, nt) | 0;
          var Mt = (h + (n = n + Math.imul(f, ot) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, st) | 0) + Math.imul(c, ot) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(c, st) | 0) + (i >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, n = Math.imul(O, H), i = (i = Math.imul(O, G)) + Math.imul(I, H) | 0, o = Math.imul(I, G), n = n + Math.imul(N, z) | 0, i = (i = i + Math.imul(N, q) | 0) + Math.imul(P, z) | 0, o = o + Math.imul(P, q) | 0, n = n + Math.imul(A, Y) | 0, i = (i = i + Math.imul(A, V) | 0) + Math.imul(x, Y) | 0, o = o + Math.imul(x, V) | 0, n = n + Math.imul(S, J) | 0, i = (i = i + Math.imul(S, $) | 0) + Math.imul(E, J) | 0, o = o + Math.imul(E, $) | 0, n = n + Math.imul(b, Q) | 0, i = (i = i + Math.imul(b, tt) | 0) + Math.imul(_, Q) | 0, o = o + Math.imul(_, tt) | 0, n = n + Math.imul(g, rt) | 0, i = (i = i + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, o = o + Math.imul(y, nt) | 0, n = n + Math.imul(p, ot) | 0, i = (i = i + Math.imul(p, st) | 0) + Math.imul(m, ot) | 0, o = o + Math.imul(m, st) | 0;
          var St = (h + (n = n + Math.imul(f, ut) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ht) | 0) + Math.imul(c, ut) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(c, ht) | 0) + (i >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, n = Math.imul(D, H), i = (i = Math.imul(D, G)) + Math.imul(L, H) | 0, o = Math.imul(L, G), n = n + Math.imul(O, z) | 0, i = (i = i + Math.imul(O, q) | 0) + Math.imul(I, z) | 0, o = o + Math.imul(I, q) | 0, n = n + Math.imul(N, Y) | 0, i = (i = i + Math.imul(N, V) | 0) + Math.imul(P, Y) | 0, o = o + Math.imul(P, V) | 0, n = n + Math.imul(A, J) | 0, i = (i = i + Math.imul(A, $) | 0) + Math.imul(x, J) | 0, o = o + Math.imul(x, $) | 0, n = n + Math.imul(S, Q) | 0, i = (i = i + Math.imul(S, tt) | 0) + Math.imul(E, Q) | 0, o = o + Math.imul(E, tt) | 0, n = n + Math.imul(b, rt) | 0, i = (i = i + Math.imul(b, nt) | 0) + Math.imul(_, rt) | 0, o = o + Math.imul(_, nt) | 0, n = n + Math.imul(g, ot) | 0, i = (i = i + Math.imul(g, st) | 0) + Math.imul(y, ot) | 0, o = o + Math.imul(y, st) | 0, n = n + Math.imul(p, ut) | 0, i = (i = i + Math.imul(p, ht) | 0) + Math.imul(m, ut) | 0, o = o + Math.imul(m, ht) | 0;
          var Et = (h + (n = n + Math.imul(f, ft) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ct) | 0) + Math.imul(c, ft) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(c, ct) | 0) + (i >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, n = Math.imul(j, H), i = (i = Math.imul(j, G)) + Math.imul(B, H) | 0, o = Math.imul(B, G), n = n + Math.imul(D, z) | 0, i = (i = i + Math.imul(D, q) | 0) + Math.imul(L, z) | 0, o = o + Math.imul(L, q) | 0, n = n + Math.imul(O, Y) | 0, i = (i = i + Math.imul(O, V) | 0) + Math.imul(I, Y) | 0, o = o + Math.imul(I, V) | 0, n = n + Math.imul(N, J) | 0, i = (i = i + Math.imul(N, $) | 0) + Math.imul(P, J) | 0, o = o + Math.imul(P, $) | 0, n = n + Math.imul(A, Q) | 0, i = (i = i + Math.imul(A, tt) | 0) + Math.imul(x, Q) | 0, o = o + Math.imul(x, tt) | 0, n = n + Math.imul(S, rt) | 0, i = (i = i + Math.imul(S, nt) | 0) + Math.imul(E, rt) | 0, o = o + Math.imul(E, nt) | 0, n = n + Math.imul(b, ot) | 0, i = (i = i + Math.imul(b, st) | 0) + Math.imul(_, ot) | 0, o = o + Math.imul(_, st) | 0, n = n + Math.imul(g, ut) | 0, i = (i = i + Math.imul(g, ht) | 0) + Math.imul(y, ut) | 0, o = o + Math.imul(y, ht) | 0, n = n + Math.imul(p, ft) | 0, i = (i = i + Math.imul(p, ct) | 0) + Math.imul(m, ft) | 0, o = o + Math.imul(m, ct) | 0;
          var kt = (h + (n = n + Math.imul(f, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, mt) | 0) + Math.imul(c, pt) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(c, mt) | 0) + (i >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, n = Math.imul(j, z), i = (i = Math.imul(j, q)) + Math.imul(B, z) | 0, o = Math.imul(B, q), n = n + Math.imul(D, Y) | 0, i = (i = i + Math.imul(D, V) | 0) + Math.imul(L, Y) | 0, o = o + Math.imul(L, V) | 0, n = n + Math.imul(O, J) | 0, i = (i = i + Math.imul(O, $) | 0) + Math.imul(I, J) | 0, o = o + Math.imul(I, $) | 0, n = n + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, tt) | 0) + Math.imul(P, Q) | 0, o = o + Math.imul(P, tt) | 0, n = n + Math.imul(A, rt) | 0, i = (i = i + Math.imul(A, nt) | 0) + Math.imul(x, rt) | 0, o = o + Math.imul(x, nt) | 0, n = n + Math.imul(S, ot) | 0, i = (i = i + Math.imul(S, st) | 0) + Math.imul(E, ot) | 0, o = o + Math.imul(E, st) | 0, n = n + Math.imul(b, ut) | 0, i = (i = i + Math.imul(b, ht) | 0) + Math.imul(_, ut) | 0, o = o + Math.imul(_, ht) | 0, n = n + Math.imul(g, ft) | 0, i = (i = i + Math.imul(g, ct) | 0) + Math.imul(y, ft) | 0, o = o + Math.imul(y, ct) | 0;
          var At = (h + (n = n + Math.imul(p, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(m, mt) | 0) + (i >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, n = Math.imul(j, Y), i = (i = Math.imul(j, V)) + Math.imul(B, Y) | 0, o = Math.imul(B, V), n = n + Math.imul(D, J) | 0, i = (i = i + Math.imul(D, $) | 0) + Math.imul(L, J) | 0, o = o + Math.imul(L, $) | 0, n = n + Math.imul(O, Q) | 0, i = (i = i + Math.imul(O, tt) | 0) + Math.imul(I, Q) | 0, o = o + Math.imul(I, tt) | 0, n = n + Math.imul(N, rt) | 0, i = (i = i + Math.imul(N, nt) | 0) + Math.imul(P, rt) | 0, o = o + Math.imul(P, nt) | 0, n = n + Math.imul(A, ot) | 0, i = (i = i + Math.imul(A, st) | 0) + Math.imul(x, ot) | 0, o = o + Math.imul(x, st) | 0, n = n + Math.imul(S, ut) | 0, i = (i = i + Math.imul(S, ht) | 0) + Math.imul(E, ut) | 0, o = o + Math.imul(E, ht) | 0, n = n + Math.imul(b, ft) | 0, i = (i = i + Math.imul(b, ct) | 0) + Math.imul(_, ft) | 0, o = o + Math.imul(_, ct) | 0;
          var xt = (h + (n = n + Math.imul(g, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(y, mt) | 0) + (i >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, n = Math.imul(j, J), i = (i = Math.imul(j, $)) + Math.imul(B, J) | 0, o = Math.imul(B, $), n = n + Math.imul(D, Q) | 0, i = (i = i + Math.imul(D, tt) | 0) + Math.imul(L, Q) | 0, o = o + Math.imul(L, tt) | 0, n = n + Math.imul(O, rt) | 0, i = (i = i + Math.imul(O, nt) | 0) + Math.imul(I, rt) | 0, o = o + Math.imul(I, nt) | 0, n = n + Math.imul(N, ot) | 0, i = (i = i + Math.imul(N, st) | 0) + Math.imul(P, ot) | 0, o = o + Math.imul(P, st) | 0, n = n + Math.imul(A, ut) | 0, i = (i = i + Math.imul(A, ht) | 0) + Math.imul(x, ut) | 0, o = o + Math.imul(x, ht) | 0, n = n + Math.imul(S, ft) | 0, i = (i = i + Math.imul(S, ct) | 0) + Math.imul(E, ft) | 0, o = o + Math.imul(E, ct) | 0;
          var Tt = (h + (n = n + Math.imul(b, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(b, mt) | 0) + Math.imul(_, pt) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(_, mt) | 0) + (i >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, n = Math.imul(j, Q), i = (i = Math.imul(j, tt)) + Math.imul(B, Q) | 0, o = Math.imul(B, tt), n = n + Math.imul(D, rt) | 0, i = (i = i + Math.imul(D, nt) | 0) + Math.imul(L, rt) | 0, o = o + Math.imul(L, nt) | 0, n = n + Math.imul(O, ot) | 0, i = (i = i + Math.imul(O, st) | 0) + Math.imul(I, ot) | 0, o = o + Math.imul(I, st) | 0, n = n + Math.imul(N, ut) | 0, i = (i = i + Math.imul(N, ht) | 0) + Math.imul(P, ut) | 0, o = o + Math.imul(P, ht) | 0, n = n + Math.imul(A, ft) | 0, i = (i = i + Math.imul(A, ct) | 0) + Math.imul(x, ft) | 0, o = o + Math.imul(x, ct) | 0;
          var Nt = (h + (n = n + Math.imul(S, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(S, mt) | 0) + Math.imul(E, pt) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(E, mt) | 0) + (i >>> 13) | 0) + (Nt >>> 26) | 0, Nt &= 67108863, n = Math.imul(j, rt), i = (i = Math.imul(j, nt)) + Math.imul(B, rt) | 0, o = Math.imul(B, nt), n = n + Math.imul(D, ot) | 0, i = (i = i + Math.imul(D, st) | 0) + Math.imul(L, ot) | 0, o = o + Math.imul(L, st) | 0, n = n + Math.imul(O, ut) | 0, i = (i = i + Math.imul(O, ht) | 0) + Math.imul(I, ut) | 0, o = o + Math.imul(I, ht) | 0, n = n + Math.imul(N, ft) | 0, i = (i = i + Math.imul(N, ct) | 0) + Math.imul(P, ft) | 0, o = o + Math.imul(P, ct) | 0;
          var Pt = (h + (n = n + Math.imul(A, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(x, mt) | 0) + (i >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863, n = Math.imul(j, ot), i = (i = Math.imul(j, st)) + Math.imul(B, ot) | 0, o = Math.imul(B, st), n = n + Math.imul(D, ut) | 0, i = (i = i + Math.imul(D, ht) | 0) + Math.imul(L, ut) | 0, o = o + Math.imul(L, ht) | 0, n = n + Math.imul(O, ft) | 0, i = (i = i + Math.imul(O, ct) | 0) + Math.imul(I, ft) | 0, o = o + Math.imul(I, ct) | 0;
          var Rt = (h + (n = n + Math.imul(N, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(P, mt) | 0) + (i >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, n = Math.imul(j, ut), i = (i = Math.imul(j, ht)) + Math.imul(B, ut) | 0, o = Math.imul(B, ht), n = n + Math.imul(D, ft) | 0, i = (i = i + Math.imul(D, ct) | 0) + Math.imul(L, ft) | 0, o = o + Math.imul(L, ct) | 0;
          var Ot = (h + (n = n + Math.imul(O, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(O, mt) | 0) + Math.imul(I, pt) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(I, mt) | 0) + (i >>> 13) | 0) + (Ot >>> 26) | 0, Ot &= 67108863, n = Math.imul(j, ft), i = (i = Math.imul(j, ct)) + Math.imul(B, ft) | 0, o = Math.imul(B, ct);
          var It = (h + (n = n + Math.imul(D, pt) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(D, mt) | 0) + Math.imul(L, pt) | 0)) << 13) | 0;
          h = ((o = o + Math.imul(L, mt) | 0) + (i >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863;
          var Ct = (h + (n = Math.imul(j, pt)) | 0) + ((8191 & (i = (i = Math.imul(j, mt)) + Math.imul(B, pt) | 0)) << 13) | 0;
          return h = ((o = Math.imul(B, mt)) + (i >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, u[0] = vt, u[1] = gt, u[2] = yt, u[3] = wt, u[4] = bt, u[5] = _t, u[6] = Mt, u[7] = St, u[8] = Et, u[9] = kt, u[10] = At, u[11] = xt, u[12] = Tt, u[13] = Nt, u[14] = Pt, u[15] = Rt, u[16] = Ot, u[17] = It, u[18] = Ct, 0 !== h && (u[19] = h, r.length++), r;
        };

        function p(t, e, r) {
          return new m().mulp(t, e, r);
        }

        function m(t, e) {
          this.x = t, this.y = e;
        }

        Math.imul || (d = c), o.prototype.mulTo = function (t, e) {
          var r = this.length + t.length;
          return 10 === this.length && 10 === t.length ? d(this, t, e) : r < 63 ? c(this, t, e) : r < 1024 ? function (t, e, r) {
            r.negative = e.negative ^ t.negative, r.length = t.length + e.length;

            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var s = i;
              i = 0;

              for (var a = 67108863 & n, u = Math.min(o, e.length - 1), h = Math.max(0, o - t.length + 1); h <= u; h++) {
                var l = o - h,
                    f = (0 | t.words[l]) * (0 | e.words[h]),
                    c = 67108863 & f;
                a = 67108863 & (c = c + a | 0), i += (s = (s = s + (f / 67108864 | 0) | 0) + (c >>> 26) | 0) >>> 26, s &= 67108863;
              }

              r.words[o] = a, n = s, s = i;
            }

            return 0 !== n ? r.words[o] = n : r.length--, r.strip();
          }(this, t, e) : p(this, t, e);
        }, m.prototype.makeRBT = function (t) {
          for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);

          return e;
        }, m.prototype.revBin = function (t, e, r) {
          if (0 === t || t === r - 1) return t;

          for (var n = 0, i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;

          return n;
        }, m.prototype.permute = function (t, e, r, n, i, o) {
          for (var s = 0; s < o; s++) n[s] = e[t[s]], i[s] = r[t[s]];
        }, m.prototype.transform = function (t, e, r, n, i, o) {
          this.permute(o, t, e, r, n, i);

          for (var s = 1; s < i; s <<= 1) for (var a = s << 1, u = Math.cos(2 * Math.PI / a), h = Math.sin(2 * Math.PI / a), l = 0; l < i; l += a) for (var f = u, c = h, d = 0; d < s; d++) {
            var p = r[l + d],
                m = n[l + d],
                v = r[l + d + s],
                g = n[l + d + s],
                y = f * v - c * g;
            g = f * g + c * v, v = y, r[l + d] = p + v, n[l + d] = m + g, r[l + d + s] = p - v, n[l + d + s] = m - g, d !== a && (y = u * f - h * c, c = u * c + h * f, f = y);
          }
        }, m.prototype.guessLen13b = function (t, e) {
          var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;

          for (r = r / 2 | 0; r; r >>>= 1) i++;

          return 1 << i + 1 + n;
        }, m.prototype.conjugate = function (t, e, r) {
          if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
            var i = t[n];
            t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i;
          }
        }, m.prototype.normalize13b = function (t, e) {
          for (var r = 0, n = 0; n < e / 2; n++) {
            var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
            t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
          }

          return t;
        }, m.prototype.convert13b = function (t, e, r, i) {
          for (var o = 0, s = 0; s < e; s++) o += 0 | t[s], r[2 * s] = 8191 & o, o >>>= 13, r[2 * s + 1] = 8191 & o, o >>>= 13;

          for (s = 2 * e; s < i; ++s) r[s] = 0;

          n(0 === o), n(0 == (-8192 & o));
        }, m.prototype.stub = function (t) {
          for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;

          return e;
        }, m.prototype.mulp = function (t, e, r) {
          var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = new Array(n),
              a = new Array(n),
              u = new Array(n),
              h = new Array(n),
              l = new Array(n),
              f = new Array(n),
              c = r.words;
          c.length = n, this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, h, n), this.transform(s, o, a, u, n, i), this.transform(h, o, l, f, n, i);

          for (var d = 0; d < n; d++) {
            var p = a[d] * l[d] - u[d] * f[d];
            u[d] = a[d] * f[d] + u[d] * l[d], a[d] = p;
          }

          return this.conjugate(a, u, n), this.transform(a, u, c, o, n, i), this.conjugate(c, o, n), this.normalize13b(c, n), r.negative = t.negative ^ e.negative, r.length = t.length + e.length, r.strip();
        }, o.prototype.mul = function (t) {
          var e = new o(null);
          return e.words = new Array(this.length + t.length), this.mulTo(t, e);
        }, o.prototype.mulf = function (t) {
          var e = new o(null);
          return e.words = new Array(this.length + t.length), p(this, t, e);
        }, o.prototype.imul = function (t) {
          return this.clone().mulTo(t, this);
        }, o.prototype.imuln = function (t) {
          n("number" == typeof t), n(t < 67108864);

          for (var e = 0, r = 0; r < this.length; r++) {
            var i = (0 | this.words[r]) * t,
                o = (67108863 & i) + (67108863 & e);
            e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o;
          }

          return 0 !== e && (this.words[r] = e, this.length++), this;
        }, o.prototype.muln = function (t) {
          return this.clone().imuln(t);
        }, o.prototype.sqr = function () {
          return this.mul(this);
        }, o.prototype.isqr = function () {
          return this.imul(this.clone());
        }, o.prototype.pow = function (t) {
          var e = function (t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var n = r / 26 | 0,
                  i = r % 26;
              e[r] = (t.words[n] & 1 << i) >>> i;
            }

            return e;
          }(t);

          if (0 === e.length) return new o(1);

          for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());

          if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
          return r;
        }, o.prototype.iushln = function (t) {
          n("number" == typeof t && 0 <= t);
          var e,
              r = t % 26,
              i = (t - r) / 26,
              o = 67108863 >>> 26 - r << 26 - r;

          if (0 != r) {
            var s = 0;

            for (e = 0; e < this.length; e++) {
              var a = this.words[e] & o,
                  u = (0 | this.words[e]) - a << r;
              this.words[e] = u | s, s = a >>> 26 - r;
            }

            s && (this.words[e] = s, this.length++);
          }

          if (0 != i) {
            for (e = this.length - 1; 0 <= e; e--) this.words[e + i] = this.words[e];

            for (e = 0; e < i; e++) this.words[e] = 0;

            this.length += i;
          }

          return this.strip();
        }, o.prototype.ishln = function (t) {
          return n(0 === this.negative), this.iushln(t);
        }, o.prototype.iushrn = function (t, e, r) {
          var i;
          n("number" == typeof t && 0 <= t), i = e ? (e - e % 26) / 26 : 0;
          var o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ 67108863 >>> o << o,
              u = r;

          if (i -= s, i = Math.max(0, i), u) {
            for (var h = 0; h < s; h++) u.words[h] = this.words[h];

            u.length = s;
          }

          if (0 === s) ;else if (this.length > s) for (this.length -= s, h = 0; h < this.length; h++) this.words[h] = this.words[h + s];else this.words[0] = 0, this.length = 1;
          var l = 0;

          for (h = this.length - 1; 0 <= h && (0 !== l || i <= h); h--) {
            var f = 0 | this.words[h];
            this.words[h] = l << 26 - o | f >>> o, l = f & a;
          }

          return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
        }, o.prototype.ishrn = function (t, e, r) {
          return n(0 === this.negative), this.iushrn(t, e, r);
        }, o.prototype.shln = function (t) {
          return this.clone().ishln(t);
        }, o.prototype.ushln = function (t) {
          return this.clone().iushln(t);
        }, o.prototype.shrn = function (t) {
          return this.clone().ishrn(t);
        }, o.prototype.ushrn = function (t) {
          return this.clone().iushrn(t);
        }, o.prototype.testn = function (t) {
          n("number" == typeof t && 0 <= t);
          var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
          return !(this.length <= r || !(this.words[r] & i));
        }, o.prototype.imaskn = function (t) {
          n("number" == typeof t && 0 <= t);
          var e = t % 26,
              r = (t - e) / 26;
          if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;

          if (0 != e && r++, this.length = Math.min(r, this.length), 0 != e) {
            var i = 67108863 ^ 67108863 >>> e << e;
            this.words[this.length - 1] &= i;
          }

          return this.strip();
        }, o.prototype.maskn = function (t) {
          return this.clone().imaskn(t);
        }, o.prototype.iaddn = function (t) {
          return n("number" == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(t), this.negative = 1), this) : this._iaddn(t);
        }, o.prototype._iaddn = function (t) {
          this.words[0] += t;

          for (var e = 0; e < this.length && 67108864 <= this.words[e]; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;

          return this.length = Math.max(this.length, e + 1), this;
        }, o.prototype.isubn = function (t) {
          if (n("number" == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
          if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
          if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, this.words[e + 1] -= 1;
          return this.strip();
        }, o.prototype.addn = function (t) {
          return this.clone().iaddn(t);
        }, o.prototype.subn = function (t) {
          return this.clone().isubn(t);
        }, o.prototype.iabs = function () {
          return this.negative = 0, this;
        }, o.prototype.abs = function () {
          return this.clone().iabs();
        }, o.prototype._ishlnsubmul = function (t, e, r) {
          var i,
              o,
              s = t.length + r;

          this._expand(s);

          var a = 0;

          for (i = 0; i < t.length; i++) {
            o = (0 | this.words[i + r]) + a;
            var u = (0 | t.words[i]) * e;
            a = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o;
          }

          for (; i < this.length - r; i++) a = (o = (0 | this.words[i + r]) + a) >> 26, this.words[i + r] = 67108863 & o;

          if (0 === a) return this.strip();

          for (n(-1 === a), i = a = 0; i < this.length; i++) a = (o = -(0 | this.words[i]) + a) >> 26, this.words[i] = 67108863 & o;

          return this.negative = 1, this.strip();
        }, o.prototype._wordDiv = function (t, e) {
          var r = (this.length, t.length),
              n = this.clone(),
              i = t,
              s = 0 | i.words[i.length - 1];
          0 != (r = 26 - this._countBits(s)) && (i = i.ushln(r), n.iushln(r), s = 0 | i.words[i.length - 1]);
          var a,
              u = n.length - i.length;

          if ("mod" !== e) {
            (a = new o(null)).length = 1 + u, a.words = new Array(a.length);

            for (var h = 0; h < a.length; h++) a.words[h] = 0;
          }

          var l = n.clone()._ishlnsubmul(i, 1, u);

          0 === l.negative && (n = l, a && (a.words[u] = 1));

          for (var f = u - 1; 0 <= f; f--) {
            var c = 67108864 * (0 | n.words[i.length + f]) + (0 | n.words[i.length + f - 1]);

            for (c = Math.min(c / s | 0, 67108863), n._ishlnsubmul(i, c, f); 0 !== n.negative;) c--, n.negative = 0, n._ishlnsubmul(i, 1, f), n.isZero() || (n.negative ^= 1);

            a && (a.words[f] = c);
          }

          return a && a.strip(), n.strip(), "div" !== e && 0 != r && n.iushrn(r), {
            div: a || null,
            mod: n
          };
        }, o.prototype.divmod = function (t, e, r) {
          return n(!t.isZero()), this.isZero() ? {
            div: new o(0),
            mod: new o(0)
          } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e), "mod" !== e && (i = a.div.neg()), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.iadd(t)), {
            div: i,
            mod: s
          }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e), "mod" !== e && (i = a.div.neg()), {
            div: i,
            mod: a.mod
          }) : 0 != (this.negative & t.negative) ? (a = this.neg().divmod(t.neg(), e), "div" !== e && (s = a.mod.neg(), r && 0 !== s.negative && s.isub(t)), {
            div: a.div,
            mod: s
          }) : t.length > this.length || this.cmp(t) < 0 ? {
            div: new o(0),
            mod: this
          } : 1 === t.length ? "div" === e ? {
            div: this.divn(t.words[0]),
            mod: null
          } : "mod" === e ? {
            div: null,
            mod: new o(this.modn(t.words[0]))
          } : {
            div: this.divn(t.words[0]),
            mod: new o(this.modn(t.words[0]))
          } : this._wordDiv(t, e);
          var i, s, a;
        }, o.prototype.div = function (t) {
          return this.divmod(t, "div", !1).div;
        }, o.prototype.mod = function (t) {
          return this.divmod(t, "mod", !1).mod;
        }, o.prototype.umod = function (t) {
          return this.divmod(t, "mod", !0).mod;
        }, o.prototype.divRound = function (t) {
          var e = this.divmod(t);
          if (e.mod.isZero()) return e.div;
          var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
          return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
        }, o.prototype.modn = function (t) {
          n(t <= 67108863);

          for (var e = (1 << 26) % t, r = 0, i = this.length - 1; 0 <= i; i--) r = (e * r + (0 | this.words[i])) % t;

          return r;
        }, o.prototype.idivn = function (t) {
          n(t <= 67108863);

          for (var e = 0, r = this.length - 1; 0 <= r; r--) {
            var i = (0 | this.words[r]) + 67108864 * e;
            this.words[r] = i / t | 0, e = i % t;
          }

          return this.strip();
        }, o.prototype.divn = function (t) {
          return this.clone().idivn(t);
        }, o.prototype.egcd = function (t) {
          n(0 === t.negative), n(!t.isZero());
          var e = this,
              r = t.clone();
          e = 0 !== e.negative ? e.umod(t) : e.clone();

          for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), h = 0; e.isEven() && r.isEven();) e.iushrn(1), r.iushrn(1), ++h;

          for (var l = r.clone(), f = e.clone(); !e.isZero();) {
            for (var c = 0, d = 1; 0 == (e.words[0] & d) && c < 26; ++c, d <<= 1);

            if (0 < c) for (e.iushrn(c); 0 < c--;) (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(f)), i.iushrn(1), s.iushrn(1);

            for (var p = 0, m = 1; 0 == (r.words[0] & m) && p < 26; ++p, m <<= 1);

            if (0 < p) for (r.iushrn(p); 0 < p--;) (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(f)), a.iushrn(1), u.iushrn(1);
            0 <= e.cmp(r) ? (e.isub(r), i.isub(a), s.isub(u)) : (r.isub(e), a.isub(i), u.isub(s));
          }

          return {
            a: a,
            b: u,
            gcd: r.iushln(h)
          };
        }, o.prototype._invmp = function (t) {
          n(0 === t.negative), n(!t.isZero());
          var e = this,
              r = t.clone();
          e = 0 !== e.negative ? e.umod(t) : e.clone();

          for (var i, s = new o(1), a = new o(0), u = r.clone(); 0 < e.cmpn(1) && 0 < r.cmpn(1);) {
            for (var h = 0, l = 1; 0 == (e.words[0] & l) && h < 26; ++h, l <<= 1);

            if (0 < h) for (e.iushrn(h); 0 < h--;) s.isOdd() && s.iadd(u), s.iushrn(1);

            for (var f = 0, c = 1; 0 == (r.words[0] & c) && f < 26; ++f, c <<= 1);

            if (0 < f) for (r.iushrn(f); 0 < f--;) a.isOdd() && a.iadd(u), a.iushrn(1);
            0 <= e.cmp(r) ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s));
          }

          return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i;
        }, o.prototype.gcd = function (t) {
          if (this.isZero()) return t.abs();
          if (t.isZero()) return this.abs();
          var e = this.clone(),
              r = t.clone();
          e.negative = 0;

          for (var n = r.negative = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);

          for (;;) {
            for (; e.isEven();) e.iushrn(1);

            for (; r.isEven();) r.iushrn(1);

            var i = e.cmp(r);

            if (i < 0) {
              var o = e;
              e = r, r = o;
            } else if (0 === i || 0 === r.cmpn(1)) break;

            e.isub(r);
          }

          return r.iushln(n);
        }, o.prototype.invm = function (t) {
          return this.egcd(t).a.umod(t);
        }, o.prototype.isEven = function () {
          return 0 == (1 & this.words[0]);
        }, o.prototype.isOdd = function () {
          return 1 == (1 & this.words[0]);
        }, o.prototype.andln = function (t) {
          return this.words[0] & t;
        }, o.prototype.bincn = function (t) {
          n("number" == typeof t);
          var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
          if (this.length <= r) return this._expand(1 + r), this.words[r] |= i, this;

          for (var o = i, s = r; 0 !== o && s < this.length; s++) {
            var a = 0 | this.words[s];
            o = (a += o) >>> 26, a &= 67108863, this.words[s] = a;
          }

          return 0 !== o && (this.words[s] = o, this.length++), this;
        }, o.prototype.isZero = function () {
          return 1 === this.length && 0 === this.words[0];
        }, o.prototype.cmpn = function (t) {
          var e,
              r = t < 0;
          if (0 !== this.negative && !r) return -1;
          if (0 === this.negative && r) return 1;
          if (this.strip(), 1 < this.length) e = 1;else {
            r && (t = -t), n(t <= 67108863, "Number is too big");
            var i = 0 | this.words[0];
            e = i === t ? 0 : i < t ? -1 : 1;
          }
          return 0 !== this.negative ? 0 | -e : e;
        }, o.prototype.cmp = function (t) {
          if (0 !== this.negative && 0 === t.negative) return -1;
          if (0 === this.negative && 0 !== t.negative) return 1;
          var e = this.ucmp(t);
          return 0 !== this.negative ? 0 | -e : e;
        }, o.prototype.ucmp = function (t) {
          if (this.length > t.length) return 1;
          if (this.length < t.length) return -1;

          for (var e = 0, r = this.length - 1; 0 <= r; r--) {
            var n = 0 | this.words[r],
                i = 0 | t.words[r];

            if (n != i) {
              n < i ? e = -1 : i < n && (e = 1);
              break;
            }
          }

          return e;
        }, o.prototype.gtn = function (t) {
          return 1 === this.cmpn(t);
        }, o.prototype.gt = function (t) {
          return 1 === this.cmp(t);
        }, o.prototype.gten = function (t) {
          return 0 <= this.cmpn(t);
        }, o.prototype.gte = function (t) {
          return 0 <= this.cmp(t);
        }, o.prototype.ltn = function (t) {
          return -1 === this.cmpn(t);
        }, o.prototype.lt = function (t) {
          return -1 === this.cmp(t);
        }, o.prototype.lten = function (t) {
          return this.cmpn(t) <= 0;
        }, o.prototype.lte = function (t) {
          return this.cmp(t) <= 0;
        }, o.prototype.eqn = function (t) {
          return 0 === this.cmpn(t);
        }, o.prototype.eq = function (t) {
          return 0 === this.cmp(t);
        }, o.red = function (t) {
          return new M(t);
        }, o.prototype.toRed = function (t) {
          return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t);
        }, o.prototype.fromRed = function () {
          return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, o.prototype._forceRed = function (t) {
          return this.red = t, this;
        }, o.prototype.forceRed = function (t) {
          return n(!this.red, "Already a number in reduction context"), this._forceRed(t);
        }, o.prototype.redAdd = function (t) {
          return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
        }, o.prototype.redIAdd = function (t) {
          return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
        }, o.prototype.redSub = function (t) {
          return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
        }, o.prototype.redISub = function (t) {
          return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
        }, o.prototype.redShl = function (t) {
          return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
        }, o.prototype.redMul = function (t) {
          return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
        }, o.prototype.redIMul = function (t) {
          return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
        }, o.prototype.redSqr = function () {
          return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, o.prototype.redISqr = function () {
          return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, o.prototype.redSqrt = function () {
          return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, o.prototype.redInvm = function () {
          return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, o.prototype.redNeg = function () {
          return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, o.prototype.redPow = function (t) {
          return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
        };
        var v = {
          k256: null,
          p224: null,
          p192: null,
          p25519: null
        };

        function g(t, e) {
          this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }

        function y() {
          g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }

        function w() {
          g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }

        function b() {
          g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }

        function _() {
          g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }

        function M(t) {
          if ("string" == typeof t) {
            var e = o._prime(t);

            this.m = e.p, this.prime = e;
          } else n(t.gtn(1), "modulus must be greater than 1"), this.m = t, this.prime = null;
        }

        function S(t) {
          M.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }

        g.prototype._tmp = function () {
          var t = new o(null);
          return t.words = new Array(Math.ceil(this.n / 13)), t;
        }, g.prototype.ireduce = function (t) {
          for (var e, r = t; this.split(r, this.tmp), (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()) > this.n;);

          var n = e < this.n ? -1 : r.ucmp(this.p);
          return 0 === n ? (r.words[0] = 0, r.length = 1) : 0 < n ? r.isub(this.p) : r.strip(), r;
        }, g.prototype.split = function (t, e) {
          t.iushrn(this.n, 0, e);
        }, g.prototype.imulK = function (t) {
          return t.imul(this.k);
        }, i(y, g), y.prototype.split = function (t, e) {
          for (var r = Math.min(t.length, 9), n = 0; n < r; n++) e.words[n] = t.words[n];

          if (e.length = r, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
          var i = t.words[9];

          for (e.words[e.length++] = 4194303 & i, n = 10; n < t.length; n++) {
            var o = 0 | t.words[n];
            t.words[n - 10] = (4194303 & o) << 4 | i >>> 22, i = o;
          }

          i >>>= 22, 0 === (t.words[n - 10] = i) && 10 < t.length ? t.length -= 10 : t.length -= 9;
        }, y.prototype.imulK = function (t) {
          t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;

          for (var e = 0, r = 0; r < t.length; r++) {
            var n = 0 | t.words[r];
            e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
          }

          return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
        }, i(w, g), i(b, g), i(_, g), _.prototype.imulK = function (t) {
          for (var e = 0, r = 0; r < t.length; r++) {
            var n = 19 * (0 | t.words[r]) + e,
                i = 67108863 & n;
            n >>>= 26, t.words[r] = i, e = n;
          }

          return 0 !== e && (t.words[t.length++] = e), t;
        }, o._prime = function (t) {
          if (v[t]) return v[t];
          var e;
          if ("k256" === t) e = new y();else if ("p224" === t) e = new w();else if ("p192" === t) e = new b();else {
            if ("p25519" !== t) throw new Error("Unknown prime " + t);
            e = new _();
          }
          return v[t] = e;
        }, M.prototype._verify1 = function (t) {
          n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers");
        }, M.prototype._verify2 = function (t, e) {
          n(0 == (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers");
        }, M.prototype.imod = function (t) {
          return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
        }, M.prototype.neg = function (t) {
          return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
        }, M.prototype.add = function (t, e) {
          this._verify2(t, e);

          var r = t.add(e);
          return 0 <= r.cmp(this.m) && r.isub(this.m), r._forceRed(this);
        }, M.prototype.iadd = function (t, e) {
          this._verify2(t, e);

          var r = t.iadd(e);
          return 0 <= r.cmp(this.m) && r.isub(this.m), r;
        }, M.prototype.sub = function (t, e) {
          this._verify2(t, e);

          var r = t.sub(e);
          return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
        }, M.prototype.isub = function (t, e) {
          this._verify2(t, e);

          var r = t.isub(e);
          return r.cmpn(0) < 0 && r.iadd(this.m), r;
        }, M.prototype.shl = function (t, e) {
          return this._verify1(t), this.imod(t.ushln(e));
        }, M.prototype.imul = function (t, e) {
          return this._verify2(t, e), this.imod(t.imul(e));
        }, M.prototype.mul = function (t, e) {
          return this._verify2(t, e), this.imod(t.mul(e));
        }, M.prototype.isqr = function (t) {
          return this.imul(t, t.clone());
        }, M.prototype.sqr = function (t) {
          return this.mul(t, t);
        }, M.prototype.sqrt = function (t) {
          if (t.isZero()) return t.clone();
          var e = this.m.andln(3);

          if (n(e % 2 == 1), 3 === e) {
            var r = this.m.add(new o(1)).iushrn(2);
            return this.pow(t, r);
          }

          for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1);) s++, i.iushrn(1);

          n(!i.isZero());
          var a = new o(1).toRed(this),
              u = a.redNeg(),
              h = this.m.subn(1).iushrn(1),
              l = this.m.bitLength();

          for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, h).cmp(u);) l.redIAdd(u);

          for (var f = this.pow(l, i), c = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s; 0 !== d.cmp(a);) {
            for (var m = d, v = 0; 0 !== m.cmp(a); v++) m = m.redSqr();

            n(v < p);
            var g = this.pow(f, new o(1).iushln(p - v - 1));
            c = c.redMul(g), f = g.redSqr(), d = d.redMul(f), p = v;
          }

          return c;
        }, M.prototype.invm = function (t) {
          var e = t._invmp(this.m);

          return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
        }, M.prototype.pow = function (t, e) {
          if (e.isZero()) return new o(1).toRed(this);
          if (0 === e.cmpn(1)) return t.clone();
          var r = new Array(16);
          r[0] = new o(1).toRed(this), r[1] = t;

          for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);

          var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26;

          for (0 === u && (u = 26), n = e.length - 1; 0 <= n; n--) {
            for (var h = e.words[n], l = u - 1; 0 <= l; l--) {
              var f = h >> l & 1;
              i !== r[0] && (i = this.sqr(i)), 0 != f || 0 !== s ? (s <<= 1, s |= f, (4 == ++a || 0 === n && 0 === l) && (i = this.mul(i, r[s]), s = a = 0)) : a = 0;
            }

            u = 26;
          }

          return i;
        }, M.prototype.convertTo = function (t) {
          var e = t.umod(this.m);
          return e === t ? e.clone() : e;
        }, M.prototype.convertFrom = function (t) {
          var e = t.clone();
          return e.red = null, e;
        }, o.mont = function (t) {
          return new S(t);
        }, i(S, M), S.prototype.convertTo = function (t) {
          return this.imod(t.ushln(this.shift));
        }, S.prototype.convertFrom = function (t) {
          var e = this.imod(t.mul(this.rinv));
          return e.red = null, e;
        }, S.prototype.imul = function (t, e) {
          if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
          var r = t.imul(e),
              n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
          return 0 <= i.cmp(this.m) ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
        }, S.prototype.mul = function (t, e) {
          if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
          var r = t.mul(e),
              n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
          return 0 <= i.cmp(this.m) ? s = i.isub(this.m) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this);
        }, S.prototype.invm = function (t) {
          return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
        };
      }(void 0 === e || e, this);
    }, {
      buffer: 11
    }],
    10: [function (t, e, n) {
      (function (t) {
        e.exports = function (e) {
          var r = new Uint8Array(e);
          return (t.crypto || t.msCrypto).getRandomValues(r), r;
        };
      }).call(this, void 0 !== _indexD3bd.f ? _indexD3bd.f : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    11: [function (t, e, r) {}, {}],
    12: [function (t, e, r) {
      var n = r;
      n.version = t("../package.json").version, n.utils = t("./elliptic/utils"), n.rand = t("brorand"), n.curve = t("./elliptic/curve"), n.curves = t("./elliptic/curves"), n.ec = t("./elliptic/ec"), n.eddsa = t("./elliptic/eddsa");
    }, {
      "../package.json": 25,
      "./elliptic/curve": 15,
      "./elliptic/curves": 18,
      "./elliptic/ec": 19,
      "./elliptic/eddsa": 22,
      "./elliptic/utils": 24,
      brorand: 10
    }],
    13: [function (t, e, r) {
      var n = t("bn.js"),
          i = t("../utils"),
          o = i.getNAF,
          s = i.getJSF,
          a = i.assert;

      function u(t, e) {
        this.type = t, this.p = new n(e.p, 16), this.red = e.prime ? n.red(e.prime) : n.mont(this.p), this.zero = new n(0).toRed(this.red), this.one = new n(1).toRed(this.red), this.two = new n(2).toRed(this.red), this.n = e.n && new n(e.n, 16), this.g = e.g && this.pointFromJSON(e.g, e.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
        var r = this.n && this.p.div(this.n);
        !r || 0 < r.cmpn(100) ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
      }

      function h(t, e) {
        this.curve = t, this.type = e, this.precomputed = null;
      }

      (e.exports = u).prototype.point = function () {
        throw new Error("Not implemented");
      }, u.prototype.validate = function () {
        throw new Error("Not implemented");
      }, u.prototype._fixedNafMul = function (t, e) {
        a(t.precomputed);

        var r = t._getDoubles(),
            n = o(e, 1, this._bitLength),
            i = (1 << r.step + 1) - (r.step % 2 == 0 ? 2 : 1);

        i /= 3;

        for (var s = [], u = 0; u < n.length; u += r.step) {
          var h = 0;

          for (e = u + r.step - 1; u <= e; e--) h = (h << 1) + n[e];

          s.push(h);
        }

        for (var l = this.jpoint(null, null, null), f = this.jpoint(null, null, null), c = i; 0 < c; c--) {
          for (u = 0; u < s.length; u++) (h = s[u]) === c ? f = f.mixedAdd(r.points[u]) : h === -c && (f = f.mixedAdd(r.points[u].neg()));

          l = l.add(f);
        }

        return l.toP();
      }, u.prototype._wnafMul = function (t, e) {
        var r = 4,
            n = t._getNAFPoints(r);

        r = n.wnd;

        for (var i = n.points, s = o(e, r, this._bitLength), u = this.jpoint(null, null, null), h = s.length - 1; 0 <= h; h--) {
          for (e = 0; 0 <= h && 0 === s[h]; h--) e++;

          if (0 <= h && e++, u = u.dblp(e), h < 0) break;
          var l = s[h];
          a(0 !== l), u = "affine" === t.type ? 0 < l ? u.mixedAdd(i[l - 1 >> 1]) : u.mixedAdd(i[-l - 1 >> 1].neg()) : 0 < l ? u.add(i[l - 1 >> 1]) : u.add(i[-l - 1 >> 1].neg());
        }

        return "affine" === t.type ? u.toP() : u;
      }, u.prototype._wnafMulAdd = function (t, e, r, n, i) {
        for (var a = this._wnafT1, u = this._wnafT2, h = this._wnafT3, l = 0, f = 0; f < n; f++) {
          var c = (k = e[f])._getNAFPoints(t);

          a[f] = c.wnd, u[f] = c.points;
        }

        for (f = n - 1; 1 <= f; f -= 2) {
          var d = f - 1,
              p = f;

          if (1 === a[d] && 1 === a[p]) {
            var m = [e[d], null, null, e[p]];
            0 === e[d].y.cmp(e[p].y) ? (m[1] = e[d].add(e[p]), m[2] = e[d].toJ().mixedAdd(e[p].neg())) : 0 === e[d].y.cmp(e[p].y.redNeg()) ? (m[1] = e[d].toJ().mixedAdd(e[p]), m[2] = e[d].add(e[p].neg())) : (m[1] = e[d].toJ().mixedAdd(e[p]), m[2] = e[d].toJ().mixedAdd(e[p].neg()));
            var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                g = s(r[d], r[p]);
            l = Math.max(g[0].length, l), h[d] = new Array(l), h[p] = new Array(l);

            for (var y = 0; y < l; y++) {
              var w = 0 | g[0][y],
                  b = 0 | g[1][y];
              h[d][y] = v[3 * (1 + w) + (1 + b)], h[p][y] = 0, u[d] = m;
            }
          } else h[d] = o(r[d], a[d], this._bitLength), h[p] = o(r[p], a[p], this._bitLength), l = Math.max(h[d].length, l), l = Math.max(h[p].length, l);
        }

        var _ = this.jpoint(null, null, null),
            M = this._wnafT4;

        for (f = l; 0 <= f; f--) {
          for (var S = 0; 0 <= f;) {
            var E = !0;

            for (y = 0; y < n; y++) M[y] = 0 | h[y][f], 0 !== M[y] && (E = !1);

            if (!E) break;
            S++, f--;
          }

          if (0 <= f && S++, _ = _.dblp(S), f < 0) break;

          for (y = 0; y < n; y++) {
            var k,
                A = M[y];
            0 !== A && (0 < A ? k = u[y][A - 1 >> 1] : A < 0 && (k = u[y][-A - 1 >> 1].neg()), _ = "affine" === k.type ? _.mixedAdd(k) : _.add(k));
          }
        }

        for (f = 0; f < n; f++) u[f] = null;

        return i ? _ : _.toP();
      }, (u.BasePoint = h).prototype.eq = function () {
        throw new Error("Not implemented");
      }, h.prototype.validate = function () {
        return this.curve.validate(this);
      }, u.prototype.decodePoint = function (t, e) {
        t = i.toArray(t, e);
        var r = this.p.byteLength();
        if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r) return 6 === t[0] ? a(t[t.length - 1] % 2 == 0) : 7 === t[0] && a(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
        if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
        throw new Error("Unknown point format");
      }, h.prototype.encodeCompressed = function (t) {
        return this.encode(t, !0);
      }, h.prototype._encode = function (t) {
        var e = this.curve.p.byteLength(),
            r = this.getX().toArray("be", e);
        return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e));
      }, h.prototype.encode = function (t, e) {
        return i.encode(this._encode(e), t);
      }, h.prototype.precompute = function (t) {
        if (this.precomputed) return this;
        var e = {
          doubles: null,
          naf: null,
          beta: null
        };
        return e.naf = this._getNAFPoints(8), e.doubles = this._getDoubles(4, t), e.beta = this._getBeta(), this.precomputed = e, this;
      }, h.prototype._hasDoubles = function (t) {
        if (!this.precomputed) return !1;
        var e = this.precomputed.doubles;
        return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step);
      }, h.prototype._getDoubles = function (t, e) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;

        for (var r = [this], n = this, i = 0; i < e; i += t) {
          for (var o = 0; o < t; o++) n = n.dbl();

          r.push(n);
        }

        return {
          step: t,
          points: r
        };
      }, h.prototype._getNAFPoints = function (t) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;

        for (var e = [this], r = (1 << t) - 1, n = 1 == r ? null : this.dbl(), i = 1; i < r; i++) e[i] = e[i - 1].add(n);

        return {
          wnd: t,
          points: e
        };
      }, h.prototype._getBeta = function () {
        return null;
      }, h.prototype.dblp = function (t) {
        for (var e = this, r = 0; r < t; r++) e = e.dbl();

        return e;
      };
    }, {
      "../utils": 24,
      "bn.js": 9
    }],
    14: [function (t, e, r) {
      e.exports = {};
    }, {}],
    15: [function (t, e, r) {
      var n = r;
      n.base = t("./base"), n.short = t("./short"), n.mont = t("./mont"), n.edwards = t("./edwards");
    }, {
      "./base": 13,
      "./edwards": 14,
      "./mont": 16,
      "./short": 17
    }],
    16: [function (t, e, r) {
      arguments[4][14][0].apply(r, arguments);
    }, {
      dup: 14
    }],
    17: [function (t, e, r) {
      var n = t("../utils"),
          i = t("bn.js"),
          o = t("inherits"),
          s = t("./base"),
          a = n.assert;

      function u(t) {
        s.call(this, "short", t), this.a = new i(t.a, 16).toRed(this.red), this.b = new i(t.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(t), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
      }

      function h(t, e, r, n) {
        s.BasePoint.call(this, t, "affine"), null === e && null === r ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(e, 16), this.y = new i(r, 16), n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
      }

      function l(t, e, r, n) {
        s.BasePoint.call(this, t, "jacobian"), null === e && null === r && null === n ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(e, 16), this.y = new i(r, 16), this.z = new i(n, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
      }

      o(u, s), (e.exports = u).prototype._getEndomorphism = function (t) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var e, r;
          if (t.beta) e = new i(t.beta, 16).toRed(this.red);else {
            var n = this._getEndoRoots(this.p);

            e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
          }
          if (t.lambda) r = new i(t.lambda, 16);else {
            var o = this._getEndoRoots(this.n);

            0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1], a(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
          }
          return {
            beta: e,
            lambda: r,
            basis: t.basis ? t.basis.map(function (t) {
              return {
                a: new i(t.a, 16),
                b: new i(t.b, 16)
              };
            }) : this._getEndoBasis(r)
          };
        }
      }, u.prototype._getEndoRoots = function (t) {
        var e = t === this.p ? this.red : i.mont(t),
            r = new i(2).toRed(e).redInvm(),
            n = r.redNeg(),
            o = new i(3).toRed(e).redNeg().redSqrt().redMul(r);
        return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
      }, u.prototype._getEndoBasis = function (t) {
        for (var e, r, n, o, s, a, u, h, l, f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), c = t, d = this.n.clone(), p = new i(1), m = new i(0), v = new i(0), g = new i(1), y = 0; 0 !== c.cmpn(0);) {
          var w = d.div(c);
          h = d.sub(w.mul(c)), l = v.sub(w.mul(p));
          var b = g.sub(w.mul(m));
          if (!n && h.cmp(f) < 0) e = u.neg(), r = p, n = h.neg(), o = l;else if (n && 2 == ++y) break;
          d = c, c = u = h, v = p, p = l, g = m, m = b;
        }

        s = h.neg(), a = l;

        var _ = n.sqr().add(o.sqr());

        return 0 <= s.sqr().add(a.sqr()).cmp(_) && (s = e, a = r), n.negative && (n = n.neg(), o = o.neg()), s.negative && (s = s.neg(), a = a.neg()), [{
          a: n,
          b: o
        }, {
          a: s,
          b: a
        }];
      }, u.prototype._endoSplit = function (t) {
        var e = this.endo.basis,
            r = e[0],
            n = e[1],
            i = n.b.mul(t).divRound(this.n),
            o = r.b.neg().mul(t).divRound(this.n),
            s = i.mul(r.a),
            a = o.mul(n.a),
            u = i.mul(r.b),
            h = o.mul(n.b);
        return {
          k1: t.sub(s).sub(a),
          k2: u.add(h).neg()
        };
      }, u.prototype.pointFromX = function (t, e) {
        (t = new i(t, 16)).red || (t = t.toRed(this.red));
        var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
            n = r.redSqrt();
        if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
        var o = n.fromRed().isOdd();
        return (e && !o || !e && o) && (n = n.redNeg()), this.point(t, n);
      }, u.prototype.validate = function (t) {
        if (t.inf) return !0;
        var e = t.x,
            r = t.y,
            n = this.a.redMul(e),
            i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
        return 0 === r.redSqr().redISub(i).cmpn(0);
      }, u.prototype._endoWnafMulAdd = function (t, e, r) {
        for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
          var s = this._endoSplit(e[o]),
              a = t[o],
              u = a._getBeta();

          s.k1.negative && (s.k1.ineg(), a = a.neg(!0)), s.k2.negative && (s.k2.ineg(), u = u.neg(!0)), n[2 * o] = a, n[2 * o + 1] = u, i[2 * o] = s.k1, i[2 * o + 1] = s.k2;
        }

        for (var h = this._wnafMulAdd(1, n, i, 2 * o, r), l = 0; l < 2 * o; l++) n[l] = null, i[l] = null;

        return h;
      }, o(h, s.BasePoint), u.prototype.point = function (t, e, r) {
        return new h(this, t, e, r);
      }, u.prototype.pointFromJSON = function (t, e) {
        return h.fromJSON(this, t, e);
      }, h.prototype._getBeta = function () {
        if (this.curve.endo) {
          var t = this.precomputed;
          if (t && t.beta) return t.beta;
          var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);

          if (t) {
            var r = this.curve,
                n = function (t) {
              return r.point(t.x.redMul(r.endo.beta), t.y);
            };

            (t.beta = e).precomputed = {
              beta: null,
              naf: t.naf && {
                wnd: t.naf.wnd,
                points: t.naf.points.map(n)
              },
              doubles: t.doubles && {
                step: t.doubles.step,
                points: t.doubles.points.map(n)
              }
            };
          }

          return e;
        }
      }, h.prototype.toJSON = function () {
        return this.precomputed ? [this.x, this.y, this.precomputed && {
          doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1)
          },
          naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1)
          }
        }] : [this.x, this.y];
      }, h.fromJSON = function (t, e, r) {
        "string" == typeof e && (e = JSON.parse(e));
        var n = t.point(e[0], e[1], r);
        if (!e[2]) return n;

        function i(e) {
          return t.point(e[0], e[1], r);
        }

        var o = e[2];
        return n.precomputed = {
          beta: null,
          doubles: o.doubles && {
            step: o.doubles.step,
            points: [n].concat(o.doubles.points.map(i))
          },
          naf: o.naf && {
            wnd: o.naf.wnd,
            points: [n].concat(o.naf.points.map(i))
          }
        }, n;
      }, h.prototype.inspect = function () {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
      }, h.prototype.isInfinity = function () {
        return this.inf;
      }, h.prototype.add = function (t) {
        if (this.inf) return t;
        if (t.inf) return this;
        if (this.eq(t)) return this.dbl();
        if (this.neg().eq(t)) return this.curve.point(null, null);
        if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
        var e = this.y.redSub(t.y);
        0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
        var r = e.redSqr().redISub(this.x).redISub(t.x),
            n = e.redMul(this.x.redSub(r)).redISub(this.y);
        return this.curve.point(r, n);
      }, h.prototype.dbl = function () {
        if (this.inf) return this;
        var t = this.y.redAdd(this.y);
        if (0 === t.cmpn(0)) return this.curve.point(null, null);
        var e = this.curve.a,
            r = this.x.redSqr(),
            n = t.redInvm(),
            i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            s = i.redMul(this.x.redSub(o)).redISub(this.y);
        return this.curve.point(o, s);
      }, h.prototype.getX = function () {
        return this.x.fromRed();
      }, h.prototype.getY = function () {
        return this.y.fromRed();
      }, h.prototype.mul = function (t) {
        return t = new i(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
      }, h.prototype.mulAdd = function (t, e, r) {
        var n = [this, e],
            i = [t, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2);
      }, h.prototype.jmulAdd = function (t, e, r) {
        var n = [this, e],
            i = [t, r];
        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0);
      }, h.prototype.eq = function (t) {
        return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y));
      }, h.prototype.neg = function (t) {
        if (this.inf) return this;
        var e = this.curve.point(this.x, this.y.redNeg());

        if (t && this.precomputed) {
          var r = this.precomputed,
              n = function (t) {
            return t.neg();
          };

          e.precomputed = {
            naf: r.naf && {
              wnd: r.naf.wnd,
              points: r.naf.points.map(n)
            },
            doubles: r.doubles && {
              step: r.doubles.step,
              points: r.doubles.points.map(n)
            }
          };
        }

        return e;
      }, h.prototype.toJ = function () {
        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
      }, o(l, s.BasePoint), u.prototype.jpoint = function (t, e, r) {
        return new l(this, t, e, r);
      }, l.prototype.toP = function () {
        if (this.isInfinity()) return this.curve.point(null, null);
        var t = this.z.redInvm(),
            e = t.redSqr(),
            r = this.x.redMul(e),
            n = this.y.redMul(e).redMul(t);
        return this.curve.point(r, n);
      }, l.prototype.neg = function () {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
      }, l.prototype.add = function (t) {
        if (this.isInfinity()) return t;
        if (t.isInfinity()) return this;
        var e = t.z.redSqr(),
            r = this.z.redSqr(),
            n = this.x.redMul(e),
            i = t.x.redMul(r),
            o = this.y.redMul(e.redMul(t.z)),
            s = t.y.redMul(r.redMul(this.z)),
            a = n.redSub(i),
            u = o.redSub(s);
        if (0 === a.cmpn(0)) return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var h = a.redSqr(),
            l = h.redMul(a),
            f = n.redMul(h),
            c = u.redSqr().redIAdd(l).redISub(f).redISub(f),
            d = u.redMul(f.redISub(c)).redISub(o.redMul(l)),
            p = this.z.redMul(t.z).redMul(a);
        return this.curve.jpoint(c, d, p);
      }, l.prototype.mixedAdd = function (t) {
        if (this.isInfinity()) return t.toJ();
        if (t.isInfinity()) return this;
        var e = this.z.redSqr(),
            r = this.x,
            n = t.x.redMul(e),
            i = this.y,
            o = t.y.redMul(e).redMul(this.z),
            s = r.redSub(n),
            a = i.redSub(o);
        if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
        var u = s.redSqr(),
            h = u.redMul(s),
            l = r.redMul(u),
            f = a.redSqr().redIAdd(h).redISub(l).redISub(l),
            c = a.redMul(l.redISub(f)).redISub(i.redMul(h)),
            d = this.z.redMul(s);
        return this.curve.jpoint(f, c, d);
      }, l.prototype.dblp = function (t) {
        if (0 === t) return this;
        if (this.isInfinity()) return this;
        if (!t) return this.dbl();

        if (this.curve.zeroA || this.curve.threeA) {
          for (var e = this, r = 0; r < t; r++) e = e.dbl();

          return e;
        }

        var n = this.curve.a,
            i = this.curve.tinv,
            o = this.x,
            s = this.y,
            a = this.z,
            u = a.redSqr().redSqr(),
            h = s.redAdd(s);

        for (r = 0; r < t; r++) {
          var l = o.redSqr(),
              f = h.redSqr(),
              c = f.redSqr(),
              d = l.redAdd(l).redIAdd(l).redIAdd(n.redMul(u)),
              p = o.redMul(f),
              m = d.redSqr().redISub(p.redAdd(p)),
              v = p.redISub(m),
              g = d.redMul(v);
          g = g.redIAdd(g).redISub(c);
          var y = h.redMul(a);
          r + 1 < t && (u = u.redMul(c)), o = m, a = y, h = g;
        }

        return this.curve.jpoint(o, h.redMul(i), a);
      }, l.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
      }, l.prototype._zeroDbl = function () {
        var t, e, r;

        if (this.zOne) {
          var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
          s = s.redIAdd(s);
          var a = n.redAdd(n).redIAdd(n),
              u = a.redSqr().redISub(s).redISub(s),
              h = o.redIAdd(o);
          h = (h = h.redIAdd(h)).redIAdd(h), t = u, e = a.redMul(s.redISub(u)).redISub(h), r = this.y.redAdd(this.y);
        } else {
          var l = this.x.redSqr(),
              f = this.y.redSqr(),
              c = f.redSqr(),
              d = this.x.redAdd(f).redSqr().redISub(l).redISub(c);
          d = d.redIAdd(d);
          var p = l.redAdd(l).redIAdd(l),
              m = p.redSqr(),
              v = c.redIAdd(c);
          v = (v = v.redIAdd(v)).redIAdd(v), t = m.redISub(d).redISub(d), e = p.redMul(d.redISub(t)).redISub(v), r = (r = this.y.redMul(this.z)).redIAdd(r);
        }

        return this.curve.jpoint(t, e, r);
      }, l.prototype._threeDbl = function () {
        var t, e, r;

        if (this.zOne) {
          var n = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
          s = s.redIAdd(s);
          var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
              u = a.redSqr().redISub(s).redISub(s);
          t = u;
          var h = o.redIAdd(o);
          h = (h = h.redIAdd(h)).redIAdd(h), e = a.redMul(s.redISub(u)).redISub(h), r = this.y.redAdd(this.y);
        } else {
          var l = this.z.redSqr(),
              f = this.y.redSqr(),
              c = this.x.redMul(f),
              d = this.x.redSub(l).redMul(this.x.redAdd(l));
          d = d.redAdd(d).redIAdd(d);
          var p = c.redIAdd(c),
              m = (p = p.redIAdd(p)).redAdd(p);
          t = d.redSqr().redISub(m), r = this.y.redAdd(this.z).redSqr().redISub(f).redISub(l);
          var v = f.redSqr();
          v = (v = (v = v.redIAdd(v)).redIAdd(v)).redIAdd(v), e = d.redMul(p.redISub(t)).redISub(v);
        }

        return this.curve.jpoint(t, e, r);
      }, l.prototype._dbl = function () {
        var t = this.curve.a,
            e = this.x,
            r = this.y,
            n = this.z,
            i = n.redSqr().redSqr(),
            o = e.redSqr(),
            s = r.redSqr(),
            a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
            u = e.redAdd(e),
            h = (u = u.redIAdd(u)).redMul(s),
            l = a.redSqr().redISub(h.redAdd(h)),
            f = h.redISub(l),
            c = s.redSqr();
        c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
        var d = a.redMul(f).redISub(c),
            p = r.redAdd(r).redMul(n);
        return this.curve.jpoint(l, d, p);
      }, l.prototype.trpl = function () {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var t = this.x.redSqr(),
            e = this.y.redSqr(),
            r = this.z.redSqr(),
            n = e.redSqr(),
            i = t.redAdd(t).redIAdd(t),
            o = i.redSqr(),
            s = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
            u = n.redIAdd(n);
        u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
        var h = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
            l = e.redMul(h);
        l = (l = l.redIAdd(l)).redIAdd(l);
        var f = this.x.redMul(a).redISub(l);
        f = (f = f.redIAdd(f)).redIAdd(f);
        var c = this.y.redMul(h.redMul(u.redISub(h)).redISub(s.redMul(a)));
        c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
        var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
        return this.curve.jpoint(f, c, d);
      }, l.prototype.mul = function (t, e) {
        return t = new i(t, e), this.curve._wnafMul(this, t);
      }, l.prototype.eq = function (t) {
        if ("affine" === t.type) return this.eq(t.toJ());
        if (this === t) return !0;
        var e = this.z.redSqr(),
            r = t.z.redSqr();
        if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
        var n = e.redMul(this.z),
            i = r.redMul(t.z);
        return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
      }, l.prototype.eqXToP = function (t) {
        var e = this.z.redSqr(),
            r = t.toRed(this.curve.red).redMul(e);
        if (0 === this.x.cmp(r)) return !0;

        for (var n = t.clone(), i = this.curve.redN.redMul(e);;) {
          if (n.iadd(this.curve.n), 0 <= n.cmp(this.curve.p)) return !1;
          if (r.redIAdd(i), 0 === this.x.cmp(r)) return !0;
        }
      }, l.prototype.inspect = function () {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
      }, l.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
      };
    }, {
      "../utils": 24,
      "./base": 13,
      "bn.js": 9,
      inherits: 39
    }],
    18: [function (t, e, r) {
      var n,
          i = r,
          o = t("hash.js"),
          s = t("./curve"),
          a = t("./utils").assert;

      function u(t) {
        "short" === t.type ? this.curve = new s.short(t) : "edwards" === t.type ? this.curve = new s.edwards(t) : this.curve = new s.mont(t), this.g = this.curve.g, this.n = this.curve.n, this.hash = t.hash, a(this.g.validate(), "Invalid curve"), a(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
      }

      function h(t, e) {
        Object.defineProperty(i, t, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var r = new u(e);
            return Object.defineProperty(i, t, {
              configurable: !0,
              enumerable: !0,
              value: r
            }), r;
          }
        });
      }

      i.PresetCurve = u, h("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: o.sha256,
        gRed: !1,
        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
      }), h("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: o.sha256,
        gRed: !1,
        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
      }), h("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: o.sha256,
        gRed: !1,
        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
      }), h("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: o.sha384,
        gRed: !1,
        g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
      }), h("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: o.sha512,
        gRed: !1,
        g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
      }), h("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: o.sha256,
        gRed: !1,
        g: ["9"]
      }), h("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: o.sha256,
        gRed: !1,
        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
      });

      try {
        n = t("./precomputed/secp256k1");
      } catch (t) {
        n = void 0;
      }

      h("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: o.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [{
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3"
        }, {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15"
        }],
        gRed: !1,
        g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n]
      });
    }, {
      "./curve": 15,
      "./precomputed/secp256k1": 23,
      "./utils": 24,
      "hash.js": 26
    }],
    19: [function (t, e, r) {
      var n = t("bn.js"),
          i = t("hmac-drbg"),
          o = t("../utils"),
          s = t("../curves"),
          a = t("brorand"),
          u = o.assert,
          h = t("./key"),
          l = t("./signature");

      function f(t) {
        if (!(this instanceof f)) return new f(t);
        "string" == typeof t && (u(s.hasOwnProperty(t), "Unknown curve " + t), t = s[t]), t instanceof s.PresetCurve && (t = {
          curve: t
        }), this.curve = t.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = t.curve.g, this.g.precompute(t.curve.n.bitLength() + 1), this.hash = t.hash || t.curve.hash;
      }

      (e.exports = f).prototype.keyPair = function (t) {
        return new h(this, t);
      }, f.prototype.keyFromPrivate = function (t, e) {
        return h.fromPrivate(this, t, e);
      }, f.prototype.keyFromPublic = function (t, e) {
        return h.fromPublic(this, t, e);
      }, f.prototype.genKeyPair = function (t) {
        t = t || {};

        for (var e = new i({
          hash: this.hash,
          pers: t.pers,
          persEnc: t.persEnc || "utf8",
          entropy: t.entropy || a(this.hash.hmacStrength),
          entropyEnc: t.entropy && t.entropyEnc || "utf8",
          nonce: this.n.toArray()
        }), r = this.n.byteLength(), o = this.n.sub(new n(2));;) {
          var s = new n(e.generate(r));
          if (!(0 < s.cmp(o))) return s.iaddn(1), this.keyFromPrivate(s);
        }
      }, f.prototype._truncateToN = function (t, e) {
        var r = 8 * t.byteLength() - this.n.bitLength();
        return 0 < r && (t = t.ushrn(r)), !e && 0 <= t.cmp(this.n) ? t.sub(this.n) : t;
      }, f.prototype.sign = function (t, e, r, o) {
        "object" == typeof r && (o = r, r = null), o = o || {}, e = this.keyFromPrivate(e, r), t = this._truncateToN(new n(t, 16));

        for (var s = this.n.byteLength(), a = e.getPrivate().toArray("be", s), u = t.toArray("be", s), h = new i({
          hash: this.hash,
          entropy: a,
          nonce: u,
          pers: o.pers,
          persEnc: o.persEnc || "utf8"
        }), f = this.n.sub(new n(1)), c = 0;; c++) {
          var d = o.k ? o.k(c) : new n(h.generate(this.n.byteLength()));

          if (!((d = this._truncateToN(d, !0)).cmpn(1) <= 0 || 0 <= d.cmp(f))) {
            var p = this.g.mul(d);

            if (!p.isInfinity()) {
              var m = p.getX(),
                  v = m.umod(this.n);

              if (0 !== v.cmpn(0)) {
                var g = d.invm(this.n).mul(v.mul(e.getPrivate()).iadd(t));

                if (0 !== (g = g.umod(this.n)).cmpn(0)) {
                  var y = (p.getY().isOdd() ? 1 : 0) | (0 !== m.cmp(v) ? 2 : 0);
                  return o.canonical && 0 < g.cmp(this.nh) && (g = this.n.sub(g), y ^= 1), new l({
                    r: v,
                    s: g,
                    recoveryParam: y
                  });
                }
              }
            }
          }
        }
      }, f.prototype.verify = function (t, e, r, i) {
        t = this._truncateToN(new n(t, 16)), r = this.keyFromPublic(r, i);
        var o = (e = new l(e, "hex")).r,
            s = e.s;
        if (o.cmpn(1) < 0 || 0 <= o.cmp(this.n)) return !1;
        if (s.cmpn(1) < 0 || 0 <= s.cmp(this.n)) return !1;
        var a,
            u = s.invm(this.n),
            h = u.mul(t).umod(this.n),
            f = u.mul(o).umod(this.n);
        return this.curve._maxwellTrick ? !(a = this.g.jmulAdd(h, r.getPublic(), f)).isInfinity() && a.eqXToP(o) : !(a = this.g.mulAdd(h, r.getPublic(), f)).isInfinity() && 0 === a.getX().umod(this.n).cmp(o);
      }, f.prototype.recoverPubKey = function (t, e, r, i) {
        u((3 & r) === r, "The recovery param is more than two bits"), e = new l(e, i);
        var o = this.n,
            s = new n(t),
            a = e.r,
            h = e.s,
            f = 1 & r,
            c = r >> 1;
        if (0 <= a.cmp(this.curve.p.umod(this.curve.n)) && c) throw new Error("Unable to find sencond key candinate");
        a = c ? this.curve.pointFromX(a.add(this.curve.n), f) : this.curve.pointFromX(a, f);
        var d = e.r.invm(o),
            p = o.sub(s).mul(d).umod(o),
            m = h.mul(d).umod(o);
        return this.g.mulAdd(p, a, m);
      }, f.prototype.getKeyRecoveryParam = function (t, e, r, n) {
        if (null !== (e = new l(e, n)).recoveryParam) return e.recoveryParam;

        for (var i = 0; i < 4; i++) {
          var o;

          try {
            o = this.recoverPubKey(t, e, i);
          } catch (t) {
            continue;
          }

          if (o.eq(r)) return i;
        }

        throw new Error("Unable to find valid recovery factor");
      };
    }, {
      "../curves": 18,
      "../utils": 24,
      "./key": 20,
      "./signature": 21,
      "bn.js": 9,
      brorand: 10,
      "hmac-drbg": 38
    }],
    20: [function (t, e, r) {
      var n = t("bn.js"),
          i = t("../utils").assert;

      function o(t, e) {
        this.ec = t, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
      }

      (e.exports = o).fromPublic = function (t, e, r) {
        return e instanceof o ? e : new o(t, {
          pub: e,
          pubEnc: r
        });
      }, o.fromPrivate = function (t, e, r) {
        return e instanceof o ? e : new o(t, {
          priv: e,
          privEnc: r
        });
      }, o.prototype.validate = function () {
        var t = this.getPublic();
        return t.isInfinity() ? {
          result: !1,
          reason: "Invalid public key"
        } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
          result: !0,
          reason: null
        } : {
          result: !1,
          reason: "Public key * N != O"
        } : {
          result: !1,
          reason: "Public key is not a point"
        };
      }, o.prototype.getPublic = function (t, e) {
        return "string" == typeof t && (e = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub;
      }, o.prototype.getPrivate = function (t) {
        return "hex" === t ? this.priv.toString(16, 2) : this.priv;
      }, o.prototype._importPrivate = function (t, e) {
        this.priv = new n(t, e || 16), this.priv = this.priv.umod(this.ec.curve.n);
      }, o.prototype._importPublic = function (t, e) {
        if (t.x || t.y) return "mont" === this.ec.curve.type ? i(t.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(t.x && t.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(t.x, t.y));
        this.pub = this.ec.curve.decodePoint(t, e);
      }, o.prototype.derive = function (t) {
        return t.mul(this.priv).getX();
      }, o.prototype.sign = function (t, e, r) {
        return this.ec.sign(t, this, e, r);
      }, o.prototype.verify = function (t, e) {
        return this.ec.verify(t, e, this);
      }, o.prototype.inspect = function () {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
      };
    }, {
      "../utils": 24,
      "bn.js": 9
    }],
    21: [function (t, e, r) {
      var n = t("bn.js"),
          i = t("../utils"),
          o = i.assert;

      function s(t, e) {
        if (t instanceof s) return t;
        this._importDER(t, e) || (o(t.r && t.s, "Signature without r or s"), this.r = new n(t.r, 16), this.s = new n(t.s, 16), void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam);
      }

      function a() {
        this.place = 0;
      }

      function u(t, e) {
        var r = t[e.place++];
        if (!(128 & r)) return r;

        for (var n = 15 & r, i = 0, o = 0, s = e.place; o < n; o++, s++) i <<= 8, i |= t[s];

        return e.place = s, i;
      }

      function h(t) {
        for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r;) e++;

        return 0 === e ? t : t.slice(e);
      }

      function l(t, e) {
        if (e < 128) t.push(e);else {
          var r = 1 + (Math.log(e) / Math.LN2 >>> 3);

          for (t.push(128 | r); --r;) t.push(e >>> (r << 3) & 255);

          t.push(e);
        }
      }

      (e.exports = s).prototype._importDER = function (t, e) {
        t = i.toArray(t, e);
        var r = new a();
        if (48 !== t[r.place++]) return !1;
        if (u(t, r) + r.place !== t.length) return !1;
        if (2 !== t[r.place++]) return !1;
        var o = u(t, r),
            s = t.slice(r.place, o + r.place);
        if (r.place += o, 2 !== t[r.place++]) return !1;
        var h = u(t, r);
        if (t.length !== h + r.place) return !1;
        var l = t.slice(r.place, h + r.place);
        return 0 === s[0] && 128 & s[1] && (s = s.slice(1)), 0 === l[0] && 128 & l[1] && (l = l.slice(1)), this.r = new n(s), this.s = new n(l), !(this.recoveryParam = null);
      }, s.prototype.toDER = function (t) {
        var e = this.r.toArray(),
            r = this.s.toArray();

        for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = h(e), r = h(r); !(r[0] || 128 & r[1]);) r = r.slice(1);

        var n = [2];
        l(n, e.length), (n = n.concat(e)).push(2), l(n, r.length);
        var o = n.concat(r),
            s = [48];
        return l(s, o.length), s = s.concat(o), i.encode(s, t);
      };
    }, {
      "../utils": 24,
      "bn.js": 9
    }],
    22: [function (t, e, r) {
      arguments[4][14][0].apply(r, arguments);
    }, {
      dup: 14
    }],
    23: [function (t, e, r) {
      e.exports = void 0;
    }, {}],
    24: [function (t, e, r) {
      var n = r,
          i = t("bn.js"),
          o = t("minimalistic-assert"),
          s = t("minimalistic-crypto-utils");
      n.assert = o, n.toArray = s.toArray, n.zero2 = s.zero2, n.toHex = s.toHex, n.encode = s.encode, n.getNAF = function (t, e, r) {
        var n = new Array(Math.max(t.bitLength(), r) + 1);
        n.fill(0);

        for (var i = 1 << e + 1, o = t.clone(), s = 0; s < n.length; s++) {
          var a,
              u = o.andln(i - 1);
          o.isOdd() ? (a = (i >> 1) - 1 < u ? (i >> 1) - u : u, o.isubn(a)) : a = 0, n[s] = a, o.iushrn(1);
        }

        return n;
      }, n.getJSF = function (t, e) {
        var r = [[], []];
        t = t.clone(), e = e.clone();

        for (var n = 0, i = 0; 0 < t.cmpn(-n) || 0 < e.cmpn(-i);) {
          var o,
              s,
              a,
              u = t.andln(3) + n & 3,
              h = e.andln(3) + i & 3;
          3 === u && (u = -1), 3 === h && (h = -1), o = 0 == (1 & u) ? 0 : 3 != (a = t.andln(7) + n & 7) && 5 !== a || 2 !== h ? u : -u, r[0].push(o), s = 0 == (1 & h) ? 0 : 3 != (a = e.andln(7) + i & 7) && 5 !== a || 2 !== u ? h : -h, r[1].push(s), 2 * n === o + 1 && (n = 1 - n), 2 * i === s + 1 && (i = 1 - i), t.iushrn(1), e.iushrn(1);
        }

        return r;
      }, n.cachedProperty = function (t, e, r) {
        var n = "_" + e;

        t.prototype[e] = function () {
          return void 0 !== this[n] ? this[n] : this[n] = r.call(this);
        };
      }, n.parseBytes = function (t) {
        return "string" == typeof t ? n.toArray(t, "hex") : t;
      }, n.intFromLE = function (t) {
        return new i(t, "hex", "le");
      };
    }, {
      "bn.js": 9,
      "minimalistic-assert": 41,
      "minimalistic-crypto-utils": 42
    }],
    25: [function (t, e, r) {
      e.exports = {
        version: "6.5.2"
      };
    }, {}],
    26: [function (t, e, r) {
      var n = r;
      n.utils = t("./hash/utils"), n.common = t("./hash/common"), n.sha = t("./hash/sha"), n.ripemd = t("./hash/ripemd"), n.hmac = t("./hash/hmac"), n.sha1 = n.sha.sha1, n.sha256 = n.sha.sha256, n.sha224 = n.sha.sha224, n.sha384 = n.sha.sha384, n.sha512 = n.sha.sha512, n.ripemd160 = n.ripemd.ripemd160;
    }, {
      "./hash/common": 27,
      "./hash/hmac": 28,
      "./hash/ripemd": 29,
      "./hash/sha": 30,
      "./hash/utils": 37
    }],
    27: [function (t, e, r) {
      var n = t("./utils"),
          i = t("minimalistic-assert");

      function o() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
      }

      (r.BlockHash = o).prototype.update = function (t, e) {
        if (t = n.toArray(t, e), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
          var r = (t = this.pending).length % this._delta8;
          this.pending = t.slice(t.length - r, t.length), 0 === this.pending.length && (this.pending = null), t = n.join32(t, 0, t.length - r, this.endian);

          for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32);
        }

        return this;
      }, o.prototype.digest = function (t) {
        return this.update(this._pad()), i(null === this.pending), this._digest(t);
      }, o.prototype._pad = function () {
        var t = this.pendingTotal,
            e = this._delta8,
            r = e - (t + this.padLength) % e,
            n = new Array(r + this.padLength);
        n[0] = 128;

        for (var i = 1; i < r; i++) n[i] = 0;

        if (t <<= 3, "big" === this.endian) {
          for (var o = 8; o < this.padLength; o++) n[i++] = 0;

          n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = t >>> 24 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 8 & 255, n[i++] = 255 & t;
        } else for (n[i++] = 255 & t, n[i++] = t >>> 8 & 255, n[i++] = t >>> 16 & 255, n[i++] = t >>> 24 & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;

        return n;
      };
    }, {
      "./utils": 37,
      "minimalistic-assert": 41
    }],
    28: [function (t, e, r) {
      var n = t("./utils"),
          i = t("minimalistic-assert");

      function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r);
        this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(n.toArray(e, r));
      }

      (e.exports = o).prototype._init = function (t) {
        t.length > this.blockSize && (t = new this.Hash().update(t).digest()), i(t.length <= this.blockSize);

        for (var e = t.length; e < this.blockSize; e++) t.push(0);

        for (e = 0; e < t.length; e++) t[e] ^= 54;

        for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++) t[e] ^= 106;

        this.outer = new this.Hash().update(t);
      }, o.prototype.update = function (t, e) {
        return this.inner.update(t, e), this;
      }, o.prototype.digest = function (t) {
        return this.outer.update(this.inner.digest()), this.outer.digest(t);
      };
    }, {
      "./utils": 37,
      "minimalistic-assert": 41
    }],
    29: [function (t, e, r) {
      var n = t("./utils"),
          i = t("./common"),
          o = n.rotl32,
          s = n.sum32,
          a = n.sum32_3,
          u = n.sum32_4,
          h = i.BlockHash;

      function l() {
        if (!(this instanceof l)) return new l();
        h.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
      }

      function f(t, e, r, n) {
        return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n);
      }

      function c(t) {
        return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
      }

      function d(t) {
        return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
      }

      n.inherits(l, h), (r.ripemd160 = l).blockSize = 512, l.outSize = 160, l.hmacStrength = 192, l.padLength = 64, l.prototype._update = function (t, e) {
        for (var r = this.h[0], n = this.h[1], i = this.h[2], h = this.h[3], l = this.h[4], y = r, w = n, b = i, _ = h, M = l, S = 0; S < 80; S++) {
          var E = s(o(u(r, f(S, n, i, h), t[p[S] + e], c(S)), v[S]), l);
          r = l, l = h, h = o(i, 10), i = n, n = E, E = s(o(u(y, f(79 - S, w, b, _), t[m[S] + e], d(S)), g[S]), M), y = M, M = _, _ = o(b, 10), b = w, w = E;
        }

        E = a(this.h[1], i, _), this.h[1] = a(this.h[2], h, M), this.h[2] = a(this.h[3], l, y), this.h[3] = a(this.h[4], r, w), this.h[4] = a(this.h[0], n, b), this.h[0] = E;
      }, l.prototype._digest = function (t) {
        return "hex" === t ? n.toHex32(this.h, "little") : n.split32(this.h, "little");
      };
      var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
          m = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
          v = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
          g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
    }, {
      "./common": 27,
      "./utils": 37
    }],
    30: [function (t, e, r) {
      r.sha1 = t("./sha/1"), r.sha224 = t("./sha/224"), r.sha256 = t("./sha/256"), r.sha384 = t("./sha/384"), r.sha512 = t("./sha/512");
    }, {
      "./sha/1": 31,
      "./sha/224": 32,
      "./sha/256": 33,
      "./sha/384": 34,
      "./sha/512": 35
    }],
    31: [function (t, e, r) {
      arguments[4][14][0].apply(r, arguments);
    }, {
      dup: 14
    }],
    32: [function (t, e, r) {
      arguments[4][14][0].apply(r, arguments);
    }, {
      dup: 14
    }],
    33: [function (t, e, r) {
      var n = t("../utils"),
          i = t("../common"),
          o = t("./common"),
          s = t("minimalistic-assert"),
          a = n.sum32,
          u = n.sum32_4,
          h = n.sum32_5,
          l = o.ch32,
          f = o.maj32,
          c = o.s0_256,
          d = o.s1_256,
          p = o.g0_256,
          m = o.g1_256,
          v = i.BlockHash,
          g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

      function y() {
        if (!(this instanceof y)) return new y();
        v.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = g, this.W = new Array(64);
      }

      n.inherits(y, v), (e.exports = y).blockSize = 512, y.outSize = 256, y.hmacStrength = 192, y.padLength = 64, y.prototype._update = function (t, e) {
        for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];

        for (; n < r.length; n++) r[n] = u(m(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);

        var i = this.h[0],
            o = this.h[1],
            v = this.h[2],
            g = this.h[3],
            y = this.h[4],
            w = this.h[5],
            b = this.h[6],
            _ = this.h[7];

        for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
          var M = h(_, d(y), l(y, w, b), this.k[n], r[n]),
              S = a(c(i), f(i, o, v));
          _ = b, b = w, w = y, y = a(g, M), g = v, v = o, o = i, i = a(M, S);
        }

        this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], v), this.h[3] = a(this.h[3], g), this.h[4] = a(this.h[4], y), this.h[5] = a(this.h[5], w), this.h[6] = a(this.h[6], b), this.h[7] = a(this.h[7], _);
      }, y.prototype._digest = function (t) {
        return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
      };
    }, {
      "../common": 27,
      "../utils": 37,
      "./common": 36,
      "minimalistic-assert": 41
    }],
    34: [function (t, e, r) {
      arguments[4][14][0].apply(r, arguments);
    }, {
      dup: 14
    }],
    35: [function (t, e, r) {
      var n = t("../utils"),
          i = t("../common"),
          o = t("minimalistic-assert"),
          s = n.rotr64_hi,
          a = n.rotr64_lo,
          u = n.shr64_hi,
          h = n.shr64_lo,
          l = n.sum64,
          f = n.sum64_hi,
          c = n.sum64_lo,
          d = n.sum64_4_hi,
          p = n.sum64_4_lo,
          m = n.sum64_5_hi,
          v = n.sum64_5_lo,
          g = i.BlockHash,
          y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

      function w() {
        if (!(this instanceof w)) return new w();
        g.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = y, this.W = new Array(160);
      }

      function b(t, e, r, n, i) {
        var o = t & r ^ ~t & i;
        return o < 0 && (o += 4294967296), o;
      }

      function _(t, e, r, n, i, o) {
        var s = e & n ^ ~e & o;
        return s < 0 && (s += 4294967296), s;
      }

      function M(t, e, r, n, i) {
        var o = t & r ^ t & i ^ r & i;
        return o < 0 && (o += 4294967296), o;
      }

      function S(t, e, r, n, i, o) {
        var s = e & n ^ e & o ^ n & o;
        return s < 0 && (s += 4294967296), s;
      }

      function E(t, e) {
        var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }

      function k(t, e) {
        var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
        return r < 0 && (r += 4294967296), r;
      }

      function A(t, e) {
        var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }

      function x(t, e) {
        var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
        return r < 0 && (r += 4294967296), r;
      }

      function T(t, e) {
        var r = s(t, e, 1) ^ s(t, e, 8) ^ u(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }

      function N(t, e) {
        var r = a(t, e, 1) ^ a(t, e, 8) ^ h(t, e, 7);
        return r < 0 && (r += 4294967296), r;
      }

      function P(t, e) {
        var r = s(t, e, 19) ^ s(e, t, 29) ^ u(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }

      function R(t, e) {
        var r = a(t, e, 19) ^ a(e, t, 29) ^ h(t, e, 6);
        return r < 0 && (r += 4294967296), r;
      }

      n.inherits(w, g), (e.exports = w).blockSize = 1024, w.outSize = 512, w.hmacStrength = 192, w.padLength = 128, w.prototype._prepareBlock = function (t, e) {
        for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];

        for (; n < r.length; n += 2) {
          var i = P(r[n - 4], r[n - 3]),
              o = R(r[n - 4], r[n - 3]),
              s = r[n - 14],
              a = r[n - 13],
              u = T(r[n - 30], r[n - 29]),
              h = N(r[n - 30], r[n - 29]),
              l = r[n - 32],
              f = r[n - 31];
          r[n] = d(i, o, s, a, u, h, l, f), r[n + 1] = p(i, o, s, a, u, h, l, f);
        }
      }, w.prototype._update = function (t, e) {
        this._prepareBlock(t, e);

        var r = this.W,
            n = this.h[0],
            i = this.h[1],
            s = this.h[2],
            a = this.h[3],
            u = this.h[4],
            h = this.h[5],
            d = this.h[6],
            p = this.h[7],
            g = this.h[8],
            y = this.h[9],
            w = this.h[10],
            T = this.h[11],
            N = this.h[12],
            P = this.h[13],
            R = this.h[14],
            O = this.h[15];
        o(this.k.length === r.length);

        for (var I = 0; I < r.length; I += 2) {
          var C = R,
              D = O,
              L = A(g, y),
              U = x(g, y),
              j = b(g, 0, w, 0, N),
              B = _(0, y, 0, T, 0, P),
              F = this.k[I],
              H = this.k[I + 1],
              G = r[I],
              W = r[I + 1],
              z = m(C, D, L, U, j, B, F, H, G, W),
              q = v(C, D, L, U, j, B, F, H, G, W);

          C = E(n, i), D = k(n, i), L = M(n, 0, s, 0, u), U = S(0, i, 0, a, 0, h);
          var K = f(C, D, L, U),
              Y = c(C, D, L, U);
          R = N, O = P, N = w, P = T, w = g, T = y, g = f(d, p, z, q), y = c(p, p, z, q), d = u, p = h, u = s, h = a, s = n, a = i, n = f(z, q, K, Y), i = c(z, q, K, Y);
        }

        l(this.h, 0, n, i), l(this.h, 2, s, a), l(this.h, 4, u, h), l(this.h, 6, d, p), l(this.h, 8, g, y), l(this.h, 10, w, T), l(this.h, 12, N, P), l(this.h, 14, R, O);
      }, w.prototype._digest = function (t) {
        return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
      };
    }, {
      "../common": 27,
      "../utils": 37,
      "minimalistic-assert": 41
    }],
    36: [function (t, e, r) {
      var n = t("../utils").rotr32;

      function i(t, e, r) {
        return t & e ^ ~t & r;
      }

      function o(t, e, r) {
        return t & e ^ t & r ^ e & r;
      }

      function s(t, e, r) {
        return t ^ e ^ r;
      }

      r.ft_1 = function (t, e, r, n) {
        return 0 === t ? i(e, r, n) : 1 === t || 3 === t ? s(e, r, n) : 2 === t ? o(e, r, n) : void 0;
      }, r.ch32 = i, r.maj32 = o, r.p32 = s, r.s0_256 = function (t) {
        return n(t, 2) ^ n(t, 13) ^ n(t, 22);
      }, r.s1_256 = function (t) {
        return n(t, 6) ^ n(t, 11) ^ n(t, 25);
      }, r.g0_256 = function (t) {
        return n(t, 7) ^ n(t, 18) ^ t >>> 3;
      }, r.g1_256 = function (t) {
        return n(t, 17) ^ n(t, 19) ^ t >>> 10;
      };
    }, {
      "../utils": 37
    }],
    37: [function (t, e, r) {
      var n = t("minimalistic-assert"),
          i = t("inherits");

      function o(t) {
        return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0;
      }

      function s(t) {
        return 1 === t.length ? "0" + t : t;
      }

      function a(t) {
        return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t;
      }

      r.inherits = i, r.toArray = function (t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var r = [];
        if ("string" == typeof t) {
          if (e) {
            if ("hex" === e) for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16));
          } else for (var n = 0; n < t.length; n++) {
            var i = t.charCodeAt(n),
                o = i >> 8,
                s = 255 & i;
            o ? r.push(o, s) : r.push(s);
          }
        } else for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
        return r;
      }, r.toHex = function (t) {
        for (var e = "", r = 0; r < t.length; r++) e += s(t[r].toString(16));

        return e;
      }, r.htonl = o, r.toHex32 = function (t, e) {
        for (var r = "", n = 0; n < t.length; n++) {
          var i = t[n];
          "little" === e && (i = o(i)), r += a(i.toString(16));
        }

        return r;
      }, r.zero2 = s, r.zero8 = a, r.join32 = function (t, e, r, i) {
        var o = r - e;
        n(o % 4 == 0);

        for (var s = new Array(o / 4), a = 0, u = e; a < s.length; a++, u += 4) {
          var h;
          h = "big" === i ? t[u] << 24 | t[u + 1] << 16 | t[u + 2] << 8 | t[u + 3] : t[u + 3] << 24 | t[u + 2] << 16 | t[u + 1] << 8 | t[u], s[a] = h >>> 0;
        }

        return s;
      }, r.split32 = function (t, e) {
        for (var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
          var o = t[n];
          "big" === e ? (r[i] = o >>> 24, r[i + 1] = o >>> 16 & 255, r[i + 2] = o >>> 8 & 255, r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24, r[i + 2] = o >>> 16 & 255, r[i + 1] = o >>> 8 & 255, r[i] = 255 & o);
        }

        return r;
      }, r.rotr32 = function (t, e) {
        return t >>> e | t << 32 - e;
      }, r.rotl32 = function (t, e) {
        return t << e | t >>> 32 - e;
      }, r.sum32 = function (t, e) {
        return t + e >>> 0;
      }, r.sum32_3 = function (t, e, r) {
        return t + e + r >>> 0;
      }, r.sum32_4 = function (t, e, r, n) {
        return t + e + r + n >>> 0;
      }, r.sum32_5 = function (t, e, r, n, i) {
        return t + e + r + n + i >>> 0;
      }, r.sum64 = function (t, e, r, n) {
        var i = t[e],
            o = n + t[e + 1] >>> 0,
            s = (o < n ? 1 : 0) + r + i;
        t[e] = s >>> 0, t[e + 1] = o;
      }, r.sum64_hi = function (t, e, r, n) {
        return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0;
      }, r.sum64_lo = function (t, e, r, n) {
        return e + n >>> 0;
      }, r.sum64_4_hi = function (t, e, r, n, i, o, s, a) {
        var u = 0,
            h = e;
        return u += (h = h + n >>> 0) < e ? 1 : 0, u += (h = h + o >>> 0) < o ? 1 : 0, t + r + i + s + (u += (h = h + a >>> 0) < a ? 1 : 0) >>> 0;
      }, r.sum64_4_lo = function (t, e, r, n, i, o, s, a) {
        return e + n + o + a >>> 0;
      }, r.sum64_5_hi = function (t, e, r, n, i, o, s, a, u, h) {
        var l = 0,
            f = e;
        return l += (f = f + n >>> 0) < e ? 1 : 0, l += (f = f + o >>> 0) < o ? 1 : 0, l += (f = f + a >>> 0) < a ? 1 : 0, t + r + i + s + u + (l += (f = f + h >>> 0) < h ? 1 : 0) >>> 0;
      }, r.sum64_5_lo = function (t, e, r, n, i, o, s, a, u, h) {
        return e + n + o + a + h >>> 0;
      }, r.rotr64_hi = function (t, e, r) {
        return (e << 32 - r | t >>> r) >>> 0;
      }, r.rotr64_lo = function (t, e, r) {
        return (t << 32 - r | e >>> r) >>> 0;
      }, r.shr64_hi = function (t, e, r) {
        return t >>> r;
      }, r.shr64_lo = function (t, e, r) {
        return (t << 32 - r | e >>> r) >>> 0;
      };
    }, {
      inherits: 39,
      "minimalistic-assert": 41
    }],
    38: [function (t, e, r) {
      var n = t("hash.js"),
          i = t("minimalistic-crypto-utils"),
          o = t("minimalistic-assert");

      function s(t) {
        if (!(this instanceof s)) return new s(t);
        this.hash = t.hash, this.predResist = !!t.predResist, this.outLen = this.hash.outSize, this.minEntropy = t.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var e = i.toArray(t.entropy, t.entropyEnc || "hex"),
            r = i.toArray(t.nonce, t.nonceEnc || "hex"),
            n = i.toArray(t.pers, t.persEnc || "hex");
        o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n);
      }

      (e.exports = s).prototype._init = function (t, e, r) {
        var n = t.concat(e).concat(r);
        this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);

        for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;

        this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656;
      }, s.prototype._hmac = function () {
        return new n.hmac(this.hash, this.K);
      }, s.prototype._update = function (t) {
        var e = this._hmac().update(this.V).update([0]);

        t && (e = e.update(t)), this.K = e.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
      }, s.prototype.reseed = function (t, e, r, n) {
        "string" != typeof e && (n = r, r = e, e = null), t = i.toArray(t, e), r = i.toArray(r, n), o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(r || [])), this._reseed = 1;
      }, s.prototype.generate = function (t, e, r, n) {
        if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
        "string" != typeof e && (n = r, r = e, e = null), r && (r = i.toArray(r, n || "hex"), this._update(r));

        for (var o = []; o.length < t;) this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);

        var s = o.slice(0, t);
        return this._update(r), this._reseed++, i.encode(s, e);
      };
    }, {
      "hash.js": 26,
      "minimalistic-assert": 41,
      "minimalistic-crypto-utils": 42
    }],
    39: [function (t, e, r) {
      "function" == typeof Object.create ? e.exports = function (t, e) {
        e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }));
      } : e.exports = function (t, e) {
        if (e) {
          function r() {}

          t.super_ = e, r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
        }
      };
    }, {}],
    40: [function (t, e, n) {
      (function (t, r) {
        !function () {
          var n = "object" == typeof window ? window : {};
          !n.JS_SHA3_NO_NODE_JS && "object" == typeof t && t.versions && t.versions.node && (n = r);

          for (var i = !n.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports, o = "0123456789abcdef".split(""), s = [0, 8, 16, 24], a = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648], u = [224, 256, 384, 512], h = ["hex", "buffer", "arrayBuffer", "array"], l = function (t, e, r) {
            return function (n) {
              return new _(t, e, t).update(n)[r]();
            };
          }, f = function (t, e, r) {
            return function (n, i) {
              return new _(t, e, i).update(n)[r]();
            };
          }, c = function (t, e) {
            var r = l(t, e, "hex");
            r.create = function () {
              return new _(t, e, t);
            }, r.update = function (t) {
              return r.create().update(t);
            };

            for (var n = 0; n < h.length; ++n) {
              var i = h[n];
              r[i] = l(t, e, i);
            }

            return r;
          }, d = [{
            name: "keccak",
            padding: [1, 256, 65536, 16777216],
            bits: u,
            createMethod: c
          }, {
            name: "sha3",
            padding: [6, 1536, 393216, 100663296],
            bits: u,
            createMethod: c
          }, {
            name: "shake",
            padding: [31, 7936, 2031616, 520093696],
            bits: [128, 256],
            createMethod: function (t, e) {
              var r = f(t, e, "hex");
              r.create = function (r) {
                return new _(t, e, r);
              }, r.update = function (t, e) {
                return r.create(e).update(t);
              };

              for (var n = 0; n < h.length; ++n) {
                var i = h[n];
                r[i] = f(t, e, i);
              }

              return r;
            }
          }], p = {}, m = [], v = 0; v < d.length; ++v) for (var g = d[v], y = g.bits, w = 0; w < y.length; ++w) {
            var b = g.name + "_" + y[w];
            m.push(b), p[b] = g.createMethod(y[w], g.padding);
          }

          function _(t, e, r) {
            this.blocks = [], this.s = [], this.padding = e, this.outputBits = r, this.reset = !0, this.block = 0, this.start = 0, this.blockCount = 1600 - (t << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;

            for (var n = 0; n < 50; ++n) this.s[n] = 0;
          }

          _.prototype.update = function (t) {
            var e = "string" != typeof t;
            e && t.constructor === ArrayBuffer && (t = new Uint8Array(t));

            for (var r, n, i = t.length, o = this.blocks, a = this.byteCount, u = this.blockCount, h = 0, l = this.s; h < i;) {
              if (this.reset) for (this.reset = !1, o[0] = this.block, r = 1; r < u + 1; ++r) o[r] = 0;
              if (e) for (r = this.start; h < i && r < a; ++h) o[r >> 2] |= t[h] << s[3 & r++];else for (r = this.start; h < i && r < a; ++h) (n = t.charCodeAt(h)) < 128 ? o[r >> 2] |= n << s[3 & r++] : (n < 2048 ? o[r >> 2] |= (192 | n >> 6) << s[3 & r++] : (n < 55296 || 57344 <= n ? o[r >> 2] |= (224 | n >> 12) << s[3 & r++] : (n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++h)), o[r >> 2] |= (240 | n >> 18) << s[3 & r++], o[r >> 2] |= (128 | n >> 12 & 63) << s[3 & r++]), o[r >> 2] |= (128 | n >> 6 & 63) << s[3 & r++]), o[r >> 2] |= (128 | 63 & n) << s[3 & r++]);

              if (a <= (this.lastByteIndex = r)) {
                for (this.start = r - a, this.block = o[u], r = 0; r < u; ++r) l[r] ^= o[r];

                M(l), this.reset = !0;
              } else this.start = r;
            }

            return this;
          }, _.prototype.finalize = function () {
            var t = this.blocks,
                e = this.lastByteIndex,
                r = this.blockCount,
                n = this.s;
            if (t[e >> 2] |= this.padding[3 & e], this.lastByteIndex === this.byteCount) for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;

            for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];

            M(n);
          }, _.prototype.toString = _.prototype.hex = function () {
            this.finalize();

            for (var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, s = 0, a = 0, u = ""; a < n;) {
              for (s = 0; s < e && a < n; ++s, ++a) t = r[s], u += o[t >> 4 & 15] + o[15 & t] + o[t >> 12 & 15] + o[t >> 8 & 15] + o[t >> 20 & 15] + o[t >> 16 & 15] + o[t >> 28 & 15] + o[t >> 24 & 15];

              a % e == 0 && (M(r), s = 0);
            }

            return i && (t = r[s], 0 < i && (u += o[t >> 4 & 15] + o[15 & t]), 1 < i && (u += o[t >> 12 & 15] + o[t >> 8 & 15]), 2 < i && (u += o[t >> 20 & 15] + o[t >> 16 & 15])), u;
          }, _.prototype.buffer = _.prototype.arrayBuffer = function () {
            this.finalize();
            var t,
                e = this.blockCount,
                r = this.s,
                n = this.outputBlocks,
                i = this.extraBytes,
                o = 0,
                s = 0,
                a = this.outputBits >> 3;
            t = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(a);

            for (var u = new Uint32Array(t); s < n;) {
              for (o = 0; o < e && s < n; ++o, ++s) u[s] = r[o];

              s % e == 0 && M(r);
            }

            return i && (u[o] = r[o], t = t.slice(0, a)), t;
          }, _.prototype.digest = _.prototype.array = function () {
            this.finalize();

            for (var t, e, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, u = []; a < i;) {
              for (s = 0; s < r && a < i; ++s, ++a) t = a << 2, e = n[s], u[t] = 255 & e, u[t + 1] = e >> 8 & 255, u[t + 2] = e >> 16 & 255, u[t + 3] = e >> 24 & 255;

              a % r == 0 && M(n);
            }

            return o && (t = a << 2, e = n[s], 0 < o && (u[t] = 255 & e), 1 < o && (u[t + 1] = e >> 8 & 255), 2 < o && (u[t + 2] = e >> 16 & 255)), u;
          };

          var M = function (t) {
            var e, r, n, i, o, s, u, h, l, f, c, d, p, m, v, g, y, w, b, _, M, S, E, k, A, x, T, N, P, R, O, I, C, D, L, U, j, B, F, H, G, W, z, q, K, Y, V, Z, J, $, X, Q, tt, et, rt, nt, it, ot, st, at, ut, ht, lt;

            for (n = 0; n < 48; n += 2) i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], u = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], h = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], l = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], f = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], e = (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ (s << 1 | u >>> 31), r = (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ (u << 1 | s >>> 31), t[0] ^= e, t[1] ^= r, t[10] ^= e, t[11] ^= r, t[20] ^= e, t[21] ^= r, t[30] ^= e, t[31] ^= r, t[40] ^= e, t[41] ^= r, e = i ^ (h << 1 | l >>> 31), r = o ^ (l << 1 | h >>> 31), t[2] ^= e, t[3] ^= r, t[12] ^= e, t[13] ^= r, t[22] ^= e, t[23] ^= r, t[32] ^= e, t[33] ^= r, t[42] ^= e, t[43] ^= r, e = s ^ (f << 1 | c >>> 31), r = u ^ (c << 1 | f >>> 31), t[4] ^= e, t[5] ^= r, t[14] ^= e, t[15] ^= r, t[24] ^= e, t[25] ^= r, t[34] ^= e, t[35] ^= r, t[44] ^= e, t[45] ^= r, e = h ^ (d << 1 | p >>> 31), r = l ^ (p << 1 | d >>> 31), t[6] ^= e, t[7] ^= r, t[16] ^= e, t[17] ^= r, t[26] ^= e, t[27] ^= r, t[36] ^= e, t[37] ^= r, t[46] ^= e, t[47] ^= r, e = f ^ (i << 1 | o >>> 31), r = c ^ (o << 1 | i >>> 31), t[8] ^= e, t[9] ^= r, t[18] ^= e, t[19] ^= r, t[28] ^= e, t[29] ^= r, t[38] ^= e, t[39] ^= r, t[48] ^= e, t[49] ^= r, m = t[0], v = t[1], Y = t[11] << 4 | t[10] >>> 28, V = t[10] << 4 | t[11] >>> 28, N = t[20] << 3 | t[21] >>> 29, P = t[21] << 3 | t[20] >>> 29, at = t[31] << 9 | t[30] >>> 23, ut = t[30] << 9 | t[31] >>> 23, W = t[40] << 18 | t[41] >>> 14, z = t[41] << 18 | t[40] >>> 14, D = t[2] << 1 | t[3] >>> 31, L = t[3] << 1 | t[2] >>> 31, g = t[13] << 12 | t[12] >>> 20, y = t[12] << 12 | t[13] >>> 20, Z = t[22] << 10 | t[23] >>> 22, J = t[23] << 10 | t[22] >>> 22, R = t[33] << 13 | t[32] >>> 19, O = t[32] << 13 | t[33] >>> 19, ht = t[42] << 2 | t[43] >>> 30, lt = t[43] << 2 | t[42] >>> 30, et = t[5] << 30 | t[4] >>> 2, rt = t[4] << 30 | t[5] >>> 2, U = t[14] << 6 | t[15] >>> 26, j = t[15] << 6 | t[14] >>> 26, w = t[25] << 11 | t[24] >>> 21, b = t[24] << 11 | t[25] >>> 21, $ = t[34] << 15 | t[35] >>> 17, X = t[35] << 15 | t[34] >>> 17, I = t[45] << 29 | t[44] >>> 3, C = t[44] << 29 | t[45] >>> 3, k = t[6] << 28 | t[7] >>> 4, A = t[7] << 28 | t[6] >>> 4, nt = t[17] << 23 | t[16] >>> 9, it = t[16] << 23 | t[17] >>> 9, B = t[26] << 25 | t[27] >>> 7, F = t[27] << 25 | t[26] >>> 7, _ = t[36] << 21 | t[37] >>> 11, M = t[37] << 21 | t[36] >>> 11, Q = t[47] << 24 | t[46] >>> 8, tt = t[46] << 24 | t[47] >>> 8, q = t[8] << 27 | t[9] >>> 5, K = t[9] << 27 | t[8] >>> 5, x = t[18] << 20 | t[19] >>> 12, T = t[19] << 20 | t[18] >>> 12, ot = t[29] << 7 | t[28] >>> 25, st = t[28] << 7 | t[29] >>> 25, H = t[38] << 8 | t[39] >>> 24, G = t[39] << 8 | t[38] >>> 24, S = t[48] << 14 | t[49] >>> 18, E = t[49] << 14 | t[48] >>> 18, t[0] = m ^ ~g & w, t[1] = v ^ ~y & b, t[10] = k ^ ~x & N, t[11] = A ^ ~T & P, t[20] = D ^ ~U & B, t[21] = L ^ ~j & F, t[30] = q ^ ~Y & Z, t[31] = K ^ ~V & J, t[40] = et ^ ~nt & ot, t[41] = rt ^ ~it & st, t[2] = g ^ ~w & _, t[3] = y ^ ~b & M, t[12] = x ^ ~N & R, t[13] = T ^ ~P & O, t[22] = U ^ ~B & H, t[23] = j ^ ~F & G, t[32] = Y ^ ~Z & $, t[33] = V ^ ~J & X, t[42] = nt ^ ~ot & at, t[43] = it ^ ~st & ut, t[4] = w ^ ~_ & S, t[5] = b ^ ~M & E, t[14] = N ^ ~R & I, t[15] = P ^ ~O & C, t[24] = B ^ ~H & W, t[25] = F ^ ~G & z, t[34] = Z ^ ~$ & Q, t[35] = J ^ ~X & tt, t[44] = ot ^ ~at & ht, t[45] = st ^ ~ut & lt, t[6] = _ ^ ~S & m, t[7] = M ^ ~E & v, t[16] = R ^ ~I & k, t[17] = O ^ ~C & A, t[26] = H ^ ~W & D, t[27] = G ^ ~z & L, t[36] = $ ^ ~Q & q, t[37] = X ^ ~tt & K, t[46] = at ^ ~ht & et, t[47] = ut ^ ~lt & rt, t[8] = S ^ ~m & g, t[9] = E ^ ~v & y, t[18] = I ^ ~k & x, t[19] = C ^ ~A & T, t[28] = W ^ ~D & U, t[29] = z ^ ~L & j, t[38] = Q ^ ~q & Y, t[39] = tt ^ ~K & V, t[48] = ht ^ ~et & nt, t[49] = lt ^ ~rt & it, t[0] ^= a[n], t[1] ^= a[n + 1];
          };

          if (i) e.exports = p;else for (v = 0; v < m.length; ++v) n[m[v]] = p[m[v]];
        }();
      }).call(this, t("_process"), void 0 !== _indexD3bd.f ? _indexD3bd.f : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      _process: 43
    }],
    41: [function (t, e, r) {
      (e.exports = function (t, e) {
        if (!t) throw new Error(e || "Assertion failed");
      }).equal = function (t, e, r) {
        if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e);
      };
    }, {}],
    42: [function (t, e, r) {
      var n = r;

      function i(t) {
        return 1 === t.length ? "0" + t : t;
      }

      function o(t) {
        for (var e = "", r = 0; r < t.length; r++) e += i(t[r].toString(16));

        return e;
      }

      n.toArray = function (t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var r = [];

        if ("string" != typeof t) {
          for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];

          return r;
        }

        if ("hex" === e) for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16));else for (n = 0; n < t.length; n++) {
          var i = t.charCodeAt(n),
              o = i >> 8,
              s = 255 & i;
          o ? r.push(o, s) : r.push(s);
        }
        return r;
      }, n.zero2 = i, n.toHex = o, n.encode = function (t, e) {
        return "hex" === e ? o(t) : t;
      };
    }, {}],
    43: [function (t, e, r) {
      e.exports = {
        browser: !0
      };
    }, {}],
    44: [function (t, e, r) {
      (function (t) {
        function n(t) {
          var e = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
              r = 1779033703,
              n = 3144134277,
              i = 1013904242,
              o = 2773480762,
              s = 1359893119,
              a = 2600822924,
              u = 528734635,
              h = 1541459225,
              l = new Array(64);

          function f(t) {
            for (var f = 0, c = t.length; 64 <= c;) {
              var d,
                  p,
                  m,
                  v,
                  g,
                  y = r,
                  w = n,
                  b = i,
                  _ = o,
                  M = s,
                  S = a,
                  E = u,
                  k = h;

              for (p = 0; p < 16; p++) m = f + 4 * p, l[p] = (255 & t[m]) << 24 | (255 & t[m + 1]) << 16 | (255 & t[m + 2]) << 8 | 255 & t[m + 3];

              for (p = 16; p < 64; p++) v = ((d = l[p - 2]) >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10, g = ((d = l[p - 15]) >>> 7 | d << 25) ^ (d >>> 18 | d << 14) ^ d >>> 3, l[p] = (v + l[p - 7] | 0) + (g + l[p - 16] | 0) | 0;

              for (p = 0; p < 64; p++) v = (((M >>> 6 | M << 26) ^ (M >>> 11 | M << 21) ^ (M >>> 25 | M << 7)) + (M & S ^ ~M & E) | 0) + (k + (e[p] + l[p] | 0) | 0) | 0, g = ((y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) + (y & w ^ y & b ^ w & b) | 0, k = E, E = S, S = M, M = _ + v | 0, _ = b, b = w, w = y, y = v + g | 0;

              r = r + y | 0, n = n + w | 0, i = i + b | 0, o = o + _ | 0, s = s + M | 0, a = a + S | 0, u = u + E | 0, h = h + k | 0, f += 64, c -= 64;
            }
          }

          f(t);
          var c,
              d = t.length % 64,
              p = t.length / 536870912 | 0,
              m = t.length << 3,
              v = d < 56 ? 56 : 120,
              g = t.slice(t.length - d, t.length);

          for (g.push(128), c = 1 + d; c < v; c++) g.push(0);

          return g.push(p >>> 24 & 255), g.push(p >>> 16 & 255), g.push(p >>> 8 & 255), g.push(p >>> 0 & 255), g.push(m >>> 24 & 255), g.push(m >>> 16 & 255), g.push(m >>> 8 & 255), g.push(m >>> 0 & 255), f(g), [r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r >>> 0 & 255, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, n >>> 0 & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i >>> 0 & 255, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, o >>> 0 & 255, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s >>> 0 & 255, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, a >>> 0 & 255, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, u >>> 0 & 255, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, h >>> 0 & 255];
        }

        function i(t, e, r) {
          var i;
          t = t.length <= 64 ? t : n(t);
          var o = 64 + e.length + 4,
              s = new Array(o),
              a = new Array(64),
              u = [];

          for (i = 0; i < 64; i++) s[i] = 54;

          for (i = 0; i < t.length; i++) s[i] ^= t[i];

          for (i = 0; i < e.length; i++) s[64 + i] = e[i];

          for (i = o - 4; i < o; i++) s[i] = 0;

          for (i = 0; i < 64; i++) a[i] = 92;

          for (i = 0; i < t.length; i++) a[i] ^= t[i];

          function h() {
            for (var t = o - 1; o - 4 <= t; t--) {
              if (s[t]++, s[t] <= 255) return;
              s[t] = 0;
            }
          }

          for (; 32 <= r;) h(), u = u.concat(n(a.concat(n(s)))), r -= 32;

          return 0 < r && (h(), u = u.concat(n(a.concat(n(s))).slice(0, r))), u;
        }

        function o(t, e, r, n, i) {
          var o;

          for (h(t, 16 * (2 * r - 1), i, 0, 16), o = 0; o < 2 * r; o++) u(t, 16 * o, i, 16), a(i, n), h(i, 0, t, e + 16 * o, 16);

          for (o = 0; o < r; o++) h(t, e + 2 * o * 16, t, 16 * o, 16);

          for (o = 0; o < r; o++) h(t, e + 16 * (2 * o + 1), t, 16 * (o + r), 16);
        }

        function s(t, e) {
          return t << e | t >>> 32 - e;
        }

        function a(t, e) {
          h(t, 0, e, 0, 16);

          for (var r = 8; 0 < r; r -= 2) e[4] ^= s(e[0] + e[12], 7), e[8] ^= s(e[4] + e[0], 9), e[12] ^= s(e[8] + e[4], 13), e[0] ^= s(e[12] + e[8], 18), e[9] ^= s(e[5] + e[1], 7), e[13] ^= s(e[9] + e[5], 9), e[1] ^= s(e[13] + e[9], 13), e[5] ^= s(e[1] + e[13], 18), e[14] ^= s(e[10] + e[6], 7), e[2] ^= s(e[14] + e[10], 9), e[6] ^= s(e[2] + e[14], 13), e[10] ^= s(e[6] + e[2], 18), e[3] ^= s(e[15] + e[11], 7), e[7] ^= s(e[3] + e[15], 9), e[11] ^= s(e[7] + e[3], 13), e[15] ^= s(e[11] + e[7], 18), e[1] ^= s(e[0] + e[3], 7), e[2] ^= s(e[1] + e[0], 9), e[3] ^= s(e[2] + e[1], 13), e[0] ^= s(e[3] + e[2], 18), e[6] ^= s(e[5] + e[4], 7), e[7] ^= s(e[6] + e[5], 9), e[4] ^= s(e[7] + e[6], 13), e[5] ^= s(e[4] + e[7], 18), e[11] ^= s(e[10] + e[9], 7), e[8] ^= s(e[11] + e[10], 9), e[9] ^= s(e[8] + e[11], 13), e[10] ^= s(e[9] + e[8], 18), e[12] ^= s(e[15] + e[14], 7), e[13] ^= s(e[12] + e[15], 9), e[14] ^= s(e[13] + e[12], 13), e[15] ^= s(e[14] + e[13], 18);

          for (r = 0; r < 16; ++r) t[r] += e[r];
        }

        function u(t, e, r, n) {
          for (var i = 0; i < n; i++) r[i] ^= t[e + i];
        }

        function h(t, e, r, n, i) {
          for (; i--;) r[n++] = t[e++];
        }

        function l(t) {
          if (!t || "number" != typeof t.length) return !1;

          for (var e = 0; e < t.length; e++) {
            if ("number" != typeof t[e]) return !1;
            var r = parseInt(t[e]);
            if (r != t[e] || r < 0 || 256 <= r) return !1;
          }

          return !0;
        }

        function f(t, e) {
          var r = parseInt(t);
          if (t != r) throw new Error("invalid " + e);
          return r;
        }

        function c(e, r, n, s, a, c, d) {
          if (!d) throw new Error("missing callback");
          if (n = f(n, "N"), s = f(s, "r"), a = f(a, "p"), c = f(c, "dkLen"), 0 === n || 0 != (n & n - 1)) throw new Error("N must be power of 2");
          if (p / 128 / s < n) throw new Error("N too large");
          if (p / 128 / a < s) throw new Error("r too large");
          if (!l(e)) throw new Error("password must be an array or buffer");
          if (e = Array.prototype.slice.call(e), !l(r)) throw new Error("salt must be an array or buffer");
          r = Array.prototype.slice.call(r);

          for (var m = i(e, r, 128 * a * s), v = new Uint32Array(32 * a * s), g = 0; g < v.length; g++) {
            var y = 4 * g;
            v[g] = (255 & m[3 + y]) << 24 | (255 & m[2 + y]) << 16 | (255 & m[1 + y]) << 8 | (255 & m[0 + y]) << 0;
          }

          var w,
              b,
              _ = new Uint32Array(64 * s),
              M = new Uint32Array(32 * s * n),
              S = 32 * s,
              E = new Uint32Array(16),
              k = new Uint32Array(16),
              A = a * n * 2,
              x = 0,
              T = null,
              N = !1,
              P = 0,
              R = 0,
              O = parseInt(1e3 / s),
              I = void 0 !== t ? t : setTimeout,
              C = function () {
            if (N) return d(new Error("cancelled"), x / A);

            switch (P) {
              case 0:
                h(v, b = 32 * R * s, _, 0, S), P = 1, w = 0;

              case 1:
                O < (r = n - w) && (r = O);

                for (var t = 0; t < r; t++) h(_, 0, M, (w + t) * S, S), o(_, S, s, E, k);

                if (w += r, x += r, (l = parseInt(1e3 * x / A)) !== T) {
                  if (N = d(null, x / A)) break;
                  T = l;
                }

                if (w < n) break;
                w = 0, P = 2;

              case 2:
                var r, l;

                for (O < (r = n - w) && (r = O), t = 0; t < r; t++) {
                  var f = _[16 * (2 * s - 1)] & n - 1;
                  u(M, f * S, _, S), o(_, S, s, E, k);
                }

                if (w += r, x += r, (l = parseInt(1e3 * x / A)) !== T) {
                  if (N = d(null, x / A)) break;
                  T = l;
                }

                if (w < n) break;

                if (h(_, 0, v, b, S), ++R < a) {
                  P = 0;
                  break;
                }

                for (m = [], t = 0; t < v.length; t++) m.push(v[t] >> 0 & 255), m.push(v[t] >> 8 & 255), m.push(v[t] >> 16 & 255), m.push(v[t] >> 24 & 255);

                var p = i(e, m, c);
                return d(null, 1, p);
            }

            I(C);
          };

          C();
        }

        var d, p;
        d = this, p = 2147483647, void 0 !== r ? e.exports = c : d && (d.scrypt && (d._scrypt = d.scrypt), d.scrypt = c);
      }).call(this, t("timers").setImmediate);
    }, {
      timers: 46
    }],
    45: [function (t, e, n) {
      (function (t, e, r) {
        !function (e, r) {
          if (!e.setImmediate) {
            var n,
                i,
                o,
                s,
                a = 1,
                u = {},
                h = !1,
                l = e.document,
                f = Object.getPrototypeOf && Object.getPrototypeOf(e);
            f = f && f.setTimeout ? f : e, n = "[object process]" === {}.toString.call(e.process) ? function () {
              var e = c(arguments);
              return t.nextTick(d(p, e)), e;
            } : function () {
              if (e.postMessage && !e.importScripts) {
                var t = !0,
                    r = e.onmessage;
                return e.onmessage = function () {
                  t = !1;
                }, e.postMessage("", "*"), e.onmessage = r, t;
              }
            }() ? (s = "setImmediate$" + Math.random() + "$", e.addEventListener ? e.addEventListener("message", v, !1) : e.attachEvent("onmessage", v), function () {
              var t = c(arguments);
              return e.postMessage(s + t, "*"), t;
            }) : e.MessageChannel ? ((o = new MessageChannel()).port1.onmessage = function (t) {
              p(t.data);
            }, function () {
              var t = c(arguments);
              return o.port2.postMessage(t), t;
            }) : l && "onreadystatechange" in l.createElement("script") ? (i = l.documentElement, function () {
              var t = c(arguments),
                  e = l.createElement("script");
              return e.onreadystatechange = function () {
                p(t), e.onreadystatechange = null, i.removeChild(e), e = null;
              }, i.appendChild(e), t;
            }) : function () {
              var t = c(arguments);
              return setTimeout(d(p, t), 0), t;
            }, f.setImmediate = n, f.clearImmediate = m;
          }

          function c(t) {
            return u[a] = d.apply(r, t), a++;
          }

          function d(t) {
            var e = [].slice.call(arguments, 1);
            return function () {
              "function" == typeof t ? t.apply(r, e) : new Function("" + t)();
            };
          }

          function p(t) {
            if (h) setTimeout(d(p, t), 0);else {
              var e = u[t];

              if (e) {
                h = !0;

                try {
                  e();
                } finally {
                  m(t), h = !1;
                }
              }
            }
          }

          function m(t) {
            delete u[t];
          }

          function v(t) {
            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && p(+t.data.slice(s.length));
          }
        }("undefined" == typeof self ? void 0 === e ? this : e : self);
      }).call(this, t("_process"), void 0 !== _indexD3bd.f ? _indexD3bd.f : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("timers").clearImmediate);
    }, {
      _process: 43,
      timers: 46
    }],
    46: [function (t, e, n) {
      (function (t) {
        e.exports = {
          setImmediate: t.setImmediate
        };
      }).call(this, void 0 !== _indexD3bd.f ? _indexD3bd.f : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    47: [function (t, e, n) {
      (function (t) {
        var r;

        if (t.crypto && crypto.getRandomValues) {
          var n = new Uint8Array(16);

          r = function () {
            return crypto.getRandomValues(n), n;
          };
        }

        if (!r) {
          var i = new Array(16);

          r = function () {
            for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), i[e] = t >>> ((3 & e) << 3) & 255;

            return i;
          };
        }

        e.exports = r;
      }).call(this, void 0 !== _indexD3bd.f ? _indexD3bd.f : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    48: [function (t, e, r) {
      for (var n = t("./rng"), i = [], o = {}, s = 0; s < 256; s++) i[s] = (s + 256).toString(16).substr(1), o[i[s]] = s;

      function a(t, e) {
        var r = e || 0,
            n = i;
        return n[t[r++]] + n[t[r++]] + n[t[r++]] + n[t[r++]] + "-" + n[t[r++]] + n[t[r++]] + "-" + n[t[r++]] + n[t[r++]] + "-" + n[t[r++]] + n[t[r++]] + "-" + n[t[r++]] + n[t[r++]] + n[t[r++]] + n[t[r++]] + n[t[r++]] + n[t[r++]];
      }

      var u = n(),
          h = [1 | u[0], u[1], u[2], u[3], u[4], u[5]],
          l = 16383 & (u[6] << 8 | u[7]),
          f = 0,
          c = 0;

      function d(t, e, r) {
        var i = e && r || 0;
        "string" == typeof t && (e = "binary" == t ? new Array(16) : null, t = null);
        var o = (t = t || {}).random || (t.rng || n)();
        if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e) for (var s = 0; s < 16; s++) e[i + s] = o[s];
        return e || a(o);
      }

      var p = d;
      p.v1 = function (t, e, r) {
        var n = e && r || 0,
            i = e || [],
            o = void 0 !== (t = t || {}).clockseq ? t.clockseq : l,
            s = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
            u = void 0 !== t.nsecs ? t.nsecs : c + 1,
            d = s - f + (u - c) / 1e4;
        if (d < 0 && void 0 === t.clockseq && (o = o + 1 & 16383), (d < 0 || f < s) && void 0 === t.nsecs && (u = 0), 1e4 <= u) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        f = s, l = o;
        var p = (1e4 * (268435455 & (s += 122192928e5)) + (c = u)) % 4294967296;
        i[n++] = p >>> 24 & 255, i[n++] = p >>> 16 & 255, i[n++] = p >>> 8 & 255, i[n++] = 255 & p;
        var m = s / 4294967296 * 1e4 & 268435455;
        i[n++] = m >>> 8 & 255, i[n++] = 255 & m, i[n++] = m >>> 24 & 15 | 16, i[n++] = m >>> 16 & 255, i[n++] = o >>> 8 | 128, i[n++] = 255 & o;

        for (var v = t.node || h, g = 0; g < 6; g++) i[n + g] = v[g];

        return e || a(i);
      }, p.v4 = d, p.parse = function (t, e, r) {
        var n = e && r || 0,
            i = 0;

        for (e = e || [], t.toLowerCase().replace(/[0-9a-f]{2}/g, function (t) {
          i < 16 && (e[n + i++] = o[t]);
        }); i < 16;) e[n + i++] = 0;

        return e;
      }, p.unparse = a, e.exports = p;
    }, {
      "./rng": 47
    }],
    49: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      try {
        e.exports.XMLHttpRequest = XMLHttpRequest;
      } catch (t) {
        console.log("Warning: XMLHttpRequest is not defined"), e.exports.XMLHttpRequest = null;
      }
    }, {}],
    50: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("../utils/properties"),
          i = (o.isProvider = function (t) {
        return n.isType(t, "Provider");
      }, o);

      function o() {
        n.setType(this, "Provider");
      }

      r.Provider = i;
    }, {
      "../utils/properties": 74
    }],
    51: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
          o = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var s = t("../utils/address"),
          a = t("../utils/bignumber"),
          u = t("../utils/bytes"),
          h = t("../constants"),
          l = t("../utils/hash"),
          f = t("../utils/networks"),
          c = t("../utils/properties"),
          d = t("../utils/rlp"),
          p = t("../utils/transaction"),
          m = t("../utils/utf8"),
          v = t("../utils/web"),
          g = o(t("../errors")),
          y = t("./abstract-provider");

      function w(t, e) {
        var r = {};

        for (var n in t) try {
          var i = t[n](e[n]);
          void 0 !== i && (r[n] = i);
        } catch (t) {
          throw t.checkKey = n, t.checkValue = e[n], t;
        }

        return r;
      }

      function b(t, e) {
        return function (r) {
          return null == r ? e : t(r);
        };
      }

      function _(t) {
        return function (e) {
          if (!Array.isArray(e)) throw new Error("not an array");
          var r = [];
          return e.forEach(function (e) {
            r.push(t(e));
          }), r;
        };
      }

      function M(t, e) {
        return "string" == typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t), 32 === u.hexDataLength(t)) ? t.toLowerCase() : (g.throwError("invalid hash", g.INVALID_ARGUMENT, {
          arg: "hash",
          value: t
        }), null);
      }

      function S(t) {
        return a.bigNumberify(t).toNumber();
      }

      function E(t) {
        if (!u.isHexString(t)) throw new Error("invalid uint256");

        for (; t.length < 66;) t = "0x0" + t.substring(2);

        return t;
      }

      function k(t) {
        if (null == t) return "latest";
        if ("earliest" === t) return "0x0";
        if ("latest" === t || "pending" === t) return t;
        if ("number" == typeof t) return u.hexStripZeros(u.hexlify(t));
        if (u.isHexString(t)) return u.hexStripZeros(t);
        throw new Error("invalid blockTag");
      }

      var A = {
        hash: M,
        blockHash: b(M, null),
        blockNumber: b(S, null),
        transactionIndex: b(S, null),
        confirmations: b(S, null),
        from: s.getAddress,
        gasPrice: a.bigNumberify,
        gasLimit: a.bigNumberify,
        to: b(s.getAddress, null),
        value: a.bigNumberify,
        nonce: S,
        data: u.hexlify,
        r: b(E),
        s: b(E),
        v: b(S),
        creates: b(s.getAddress, null),
        raw: b(u.hexlify)
      };

      function x(t) {
        if (null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas), t.to && a.bigNumberify(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"), null != t.input && null == t.data && (t.data = t.input), null == t.to && null == t.creates && (t.creates = s.getContractAddress(t)), !t.raw && t.v && t.r && t.s) {
          var e = [u.stripZeros(u.hexlify(t.nonce)), u.stripZeros(u.hexlify(t.gasPrice)), u.stripZeros(u.hexlify(t.gasLimit)), t.to || "0x", u.stripZeros(u.hexlify(t.value || "0x")), u.hexlify(t.data || "0x"), u.stripZeros(u.hexlify(t.v || "0x")), u.stripZeros(u.hexlify(t.r)), u.stripZeros(u.hexlify(t.s))];
          t.raw = d.encode(e);
        }

        var r = w(A, t),
            n = t.networkId;
        return null != t.chainId && null == n && null == r.v && (n = t.chainId), u.isHexString(n) && (n = a.bigNumberify(n).toNumber()), "number" != typeof n && null != r.v && ((n = (r.v - 35) / 2) < 0 && (n = 0), n = parseInt(n)), "number" != typeof n && (n = 0), r.networkId = n, null == r.chainId && null != n && (r.chainId = n), r.blockHash && "x" === r.blockHash.replace(/0/g, "") && (r.blockHash = null), r;
      }

      var T = {
        hash: M,
        parentHash: M,
        number: S,
        timestamp: S,
        nonce: b(u.hexlify),
        difficulty: function (t) {
          var e = a.bigNumberify(t);

          try {
            return e.toNumber();
          } catch (t) {}

          return null;
        },
        gasLimit: a.bigNumberify,
        gasUsed: a.bigNumberify,
        miner: s.getAddress,
        extraData: u.hexlify,
        transactions: b(_(M))
      },
          N = c.shallowCopy(T);

      function P(t, e) {
        return null != t.author && null == t.miner && (t.miner = t.author), w(e ? N : T, t);
      }

      N.transactions = b(_(x));
      var R = {
        from: b(s.getAddress),
        nonce: b(S),
        gasLimit: b(a.bigNumberify),
        gasPrice: b(a.bigNumberify),
        to: b(s.getAddress),
        value: b(a.bigNumberify),
        data: b(u.hexlify)
      };

      function O(t) {
        return w(R, t);
      }

      var I = {
        transactionLogIndex: b(S),
        transactionIndex: S,
        blockNumber: S,
        transactionHash: M,
        address: s.getAddress,
        topics: _(M),
        data: u.hexlify,
        logIndex: S,
        blockHash: M
      },
          C = {
        to: b(s.getAddress, null),
        from: b(s.getAddress, null),
        contractAddress: b(s.getAddress, null),
        transactionIndex: S,
        root: b(M),
        gasUsed: a.bigNumberify,
        logsBloom: b(u.hexlify),
        blockHash: M,
        transactionHash: M,
        logs: _(function (t) {
          return w(I, t);
        }),
        blockNumber: S,
        confirmations: b(S, null),
        cumulativeGasUsed: a.bigNumberify,
        status: b(S)
      };

      function D(t) {
        return Array.isArray(t) ? t.forEach(function (t) {
          D(t);
        }) : null != t && M(t), t;
      }

      var L,
          U = {
        fromBlock: b(k, void 0),
        toBlock: b(k, void 0),
        address: b(s.getAddress, void 0),
        topics: b(D, void 0)
      },
          j = {
        blockHash: b(M, void 0),
        address: b(s.getAddress, void 0),
        topics: b(D, void 0)
      },
          B = {
        blockNumber: b(S),
        blockHash: b(M),
        transactionIndex: S,
        removed: b(function (t) {
          if ("boolean" == typeof t) return t;

          if ("string" == typeof t) {
            if ("true" === t) return !0;
            if ("false" === t) return !1;
          }

          throw new Error("invaid boolean - " + t);
        }),
        address: s.getAddress,
        data: (L = u.hexlify, function (t) {
          return t ? L(t) : "0x";
        }),
        topics: _(M),
        transactionHash: M,
        logIndex: S
      };

      function F(t) {
        return w(B, t);
      }

      function H(t) {
        return t.map(function (t) {
          return "string" == typeof t ? t : Array.isArray(t) ? (t.forEach(function (t) {
            null !== t && 32 !== u.hexDataLength(t) && g.throwError("invalid topic", g.INVALID_ARGUMENT, {
              argument: "topic",
              value: t
            });
          }), t.join(",")) : null === t ? "" : g.throwError("invalid topic value", g.INVALID_ARGUMENT, {
            argument: "topic",
            value: t
          });
        }).join("&");
      }

      function G(t) {
        if ("string" == typeof t) {
          if (20 === u.hexDataLength(t)) return "address:" + s.getAddress(t);
          if (t = t.toLowerCase(), 32 === u.hexDataLength(t)) return "tx:" + t;
          if (-1 === t.indexOf(":")) return t;
        } else {
          if (Array.isArray(t)) return "filter::" + H(t);
          if (t && "object" == typeof t) return "filter:" + (t.address || "") + ":" + H(t.topics || []);
        }

        throw new Error("invalid event - " + t);
      }

      function W() {
        return new Date().getTime();
      }

      var z,
          q = (i(K, z = y.Provider), K.prototype._doPoll = function () {
        var t = this;
        this.getBlockNumber().then(function (e) {
          if (t.polling && (t._setFastBlockNumber(e), e !== t._lastBlockNumber)) {
            -2 === t._emitted.block && (t._emitted.block = e - 1);

            for (var r = t._emitted.block + 1; r <= e; r++) t.emit("block", r);

            t._emitted.block !== e && (t._emitted.block = e, Object.keys(t._emitted).forEach(function (r) {
              if ("block" !== r) {
                var n = t._emitted[r];
                "pending" !== n && 12 < e - n && delete t._emitted[r];
              }
            })), -2 === t._lastBlockNumber && (t._lastBlockNumber = e - 1);
            var n = {},
                i = {};
            return t._events.forEach(function (t) {
              i[t.tag] = !0;
            }), Object.keys(i).forEach(function (r) {
              var i = r.split(":");

              switch (i[0]) {
                case "tx":
                  var o = i[1];
                  t.getTransactionReceipt(o).then(function (e) {
                    return e && null != e.blockNumber && (t._emitted["t:" + o] = e.blockNumber, t.emit(o, e)), null;
                  }).catch(function (e) {
                    t.emit("error", e);
                  });
                  break;

                case "address":
                  var s = i[1];
                  t._balances[s] && (n[s] = t._balances[s]), t.getBalance(s, "latest").then(function (e) {
                    var r = t._balances[s];
                    if (!r || !e.eq(r)) return t._balances[s] = e, t.emit(s, e), null;
                  }).catch(function (e) {
                    t.emit("error", e);
                  });
                  break;

                case "filter":
                  var a = function (t) {
                    return t.split(/&/g).map(function (t) {
                      var e = t.split(",");
                      return 1 === e.length ? "" === e[0] ? null : t : e.map(function (t) {
                        return "" === t ? null : t;
                      });
                    });
                  }(i[2]),
                      u = {
                    address: i[1],
                    fromBlock: t._lastBlockNumber + 1,
                    toBlock: e,
                    topics: a
                  };

                  u.address || delete u.address, t.getLogs(u).then(function (e) {
                    if (0 !== e.length) return e.forEach(function (e) {
                      t._emitted["b:" + e.blockHash] = e.blockNumber, t._emitted["t:" + e.transactionHash] = e.blockNumber, t.emit(u, e);
                    }), null;
                  }).catch(function (e) {
                    t.emit("error", e);
                  });
              }
            }), t._lastBlockNumber = e, t._balances = n, null;
          }
        }).catch(function (t) {}), this.doPoll();
      }, K.prototype.resetEventsBlock = function (t) {
        this._lastBlockNumber = t - 1, this.polling && this._doPoll();
      }, Object.defineProperty(K.prototype, "network", {
        get: function () {
          return this._network;
        },
        enumerable: !0,
        configurable: !0
      }), K.prototype.getNetwork = function () {
        return this.ready;
      }, Object.defineProperty(K.prototype, "blockNumber", {
        get: function () {
          return this._fastBlockNumber;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(K.prototype, "polling", {
        get: function () {
          return null != this._poller;
        },
        set: function (t) {
          var e = this;
          setTimeout(function () {
            t && !e._poller ? (e._poller = setInterval(e._doPoll.bind(e), e.pollingInterval), e._doPoll()) : !t && e._poller && (clearInterval(e._poller), e._poller = null);
          }, 0);
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(K.prototype, "pollingInterval", {
        get: function () {
          return this._pollingInterval;
        },
        set: function (t) {
          var e = this;
          if ("number" != typeof t || t <= 0 || parseInt(String(t)) != t) throw new Error("invalid polling interval");
          this._pollingInterval = t, this._poller && (clearInterval(this._poller), this._poller = setInterval(function () {
            e._doPoll();
          }, this._pollingInterval));
        },
        enumerable: !0,
        configurable: !0
      }), K.prototype._getFastBlockNumber = function () {
        var t = this,
            e = W();
        return e - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = e, this._fastBlockNumberPromise = this.getBlockNumber().then(function (e) {
          return (null == t._fastBlockNumber || e > t._fastBlockNumber) && (t._fastBlockNumber = e), t._fastBlockNumber;
        })), this._fastBlockNumberPromise;
      }, K.prototype._setFastBlockNumber = function (t) {
        null != this._fastBlockNumber && t < this._fastBlockNumber || (this._fastQueryDate = W(), (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t, this._fastBlockNumberPromise = Promise.resolve(t)));
      }, K.prototype.waitForTransaction = function (t, e) {
        var r = this;
        return null == e && (e = 1), this.getTransactionReceipt(t).then(function (n) {
          return 0 === e || n && n.confirmations >= e ? n : new Promise(function (n) {
            var i = function (o) {
              o.confirmations < e || (r.removeListener(t, i), n(o));
            };

            r.on(t, i);
          });
        });
      }, K.prototype.getBlockNumber = function () {
        var t = this;
        return this.ready.then(function () {
          return t.perform("getBlockNumber", {}).then(function (e) {
            var r = parseInt(e);
            if (r != e) throw new Error("invalid response - getBlockNumber");
            return t._setFastBlockNumber(r), r;
          });
        });
      }, K.prototype.getGasPrice = function () {
        var t = this;
        return this.ready.then(function () {
          return t.perform("getGasPrice", {}).then(function (t) {
            return a.bigNumberify(t);
          });
        });
      }, K.prototype.getBalance = function (t, e) {
        var r = this;
        return this.ready.then(function () {
          return c.resolveProperties({
            addressOrName: t,
            blockTag: e
          }).then(function (t) {
            var e = t.addressOrName,
                n = t.blockTag;
            return r._getAddress(e).then(function (t) {
              var e = {
                address: t,
                blockTag: k(n)
              };
              return r.perform("getBalance", e).then(function (t) {
                return a.bigNumberify(t);
              });
            });
          });
        });
      }, K.prototype.getTransactionCount = function (t, e) {
        var r = this;
        return this.ready.then(function () {
          return c.resolveProperties({
            addressOrName: t,
            blockTag: e
          }).then(function (t) {
            var e = t.addressOrName,
                n = t.blockTag;
            return r._getAddress(e).then(function (t) {
              var e = {
                address: t,
                blockTag: k(n)
              };
              return r.perform("getTransactionCount", e).then(function (t) {
                return a.bigNumberify(t).toNumber();
              });
            });
          });
        });
      }, K.prototype.getCode = function (t, e) {
        var r = this;
        return this.ready.then(function () {
          return c.resolveProperties({
            addressOrName: t,
            blockTag: e
          }).then(function (t) {
            var e = t.addressOrName,
                n = t.blockTag;
            return r._getAddress(e).then(function (t) {
              var e = {
                address: t,
                blockTag: k(n)
              };
              return r.perform("getCode", e).then(function (t) {
                return u.hexlify(t);
              });
            });
          });
        });
      }, K.prototype.getStorageAt = function (t, e, r) {
        var n = this;
        return this.ready.then(function () {
          return c.resolveProperties({
            addressOrName: t,
            position: e,
            blockTag: r
          }).then(function (t) {
            var e = t.addressOrName,
                r = t.position,
                i = t.blockTag;
            return n._getAddress(e).then(function (t) {
              var e = {
                address: t,
                blockTag: k(i),
                position: u.hexStripZeros(u.hexlify(r))
              };
              return n.perform("getStorageAt", e).then(function (t) {
                return u.hexlify(t);
              });
            });
          });
        });
      }, K.prototype.sendTransaction = function (t) {
        var e = this;
        return this.ready.then(function () {
          return c.resolveProperties({
            signedTransaction: t
          }).then(function (t) {
            var r = t.signedTransaction,
                n = {
              signedTransaction: u.hexlify(r)
            };
            return e.perform("sendTransaction", n).then(function (t) {
              return e._wrapTransaction(p.parse(r), t);
            }, function (t) {
              throw t.transaction = p.parse(r), t.transaction.hash && (t.transactionHash = t.transaction.hash), t;
            });
          });
        });
      }, K.prototype._wrapTransaction = function (t, e) {
        var r = this;
        if (null != e && 32 !== u.hexDataLength(e)) throw new Error("invalid response - sendTransaction");
        var n = t;
        return null != e && t.hash !== e && g.throwError("Transaction hash mismatch from Provider.sendTransaction.", g.UNKNOWN_ERROR, {
          expectedHash: t.hash,
          returnedHash: e
        }), n.wait = function (e) {
          return 0 !== e && (r._emitted["t:" + t.hash] = "pending"), r.waitForTransaction(t.hash, e).then(function (n) {
            return null == n && 0 === e ? null : (r._emitted["t:" + t.hash] = n.blockNumber, 0 === n.status && g.throwError("transaction failed", g.CALL_EXCEPTION, {
              transactionHash: t.hash,
              transaction: t
            }), n);
          });
        }, n;
      }, K.prototype.call = function (t, e) {
        var r = this,
            n = c.shallowCopy(t);
        return this.ready.then(function () {
          return c.resolveProperties({
            blockTag: e,
            tx: n
          }).then(function (t) {
            var e = t.blockTag,
                n = t.tx;
            return r._resolveNames(n, ["to", "from"]).then(function (t) {
              var n = {
                blockTag: k(e),
                transaction: O(t)
              };
              return r.perform("call", n).then(function (t) {
                return u.hexlify(t);
              });
            });
          });
        });
      }, K.prototype.estimateGas = function (t) {
        var e = this,
            r = {
          to: t.to,
          from: t.from,
          data: t.data,
          gasPrice: t.gasPrice,
          value: t.value
        };
        return this.ready.then(function () {
          return c.resolveProperties(r).then(function (t) {
            return e._resolveNames(t, ["to", "from"]).then(function (t) {
              var r = {
                transaction: O(t)
              };
              return e.perform("estimateGas", r).then(function (t) {
                return a.bigNumberify(t);
              });
            });
          });
        });
      }, K.prototype.getBlock = function (t, e) {
        var r = this;
        return this.ready.then(function () {
          return c.resolveProperties({
            blockHashOrBlockTag: t
          }).then(function (t) {
            var n = t.blockHashOrBlockTag;

            try {
              var i = u.hexlify(n);
              if (32 === u.hexDataLength(i)) return v.poll(function () {
                return r.perform("getBlock", {
                  blockHash: i,
                  includeTransactions: !!e
                }).then(function (t) {
                  return null == t ? null == r._emitted["b:" + i] ? null : void 0 : P(t, e);
                });
              }, {
                onceBlock: r
              });
            } catch (t) {}

            try {
              var o = -128,
                  s = k(n);
              return u.isHexString(s) && (o = parseInt(s.substring(2), 16)), v.poll(function () {
                return r.perform("getBlock", {
                  blockTag: s,
                  includeTransactions: !!e
                }).then(function (t) {
                  return null != t ? P(t, e) : o <= r._emitted.block ? void 0 : null;
                });
              }, {
                onceBlock: r
              });
            } catch (t) {}

            throw new Error("invalid block hash or block tag");
          });
        });
      }, K.prototype.getTransaction = function (t) {
        var e = this;
        return this.ready.then(function () {
          return c.resolveProperties({
            transactionHash: t
          }).then(function (t) {
            var r = t.transactionHash,
                n = {
              transactionHash: M(r, !0)
            };
            return v.poll(function () {
              return e.perform("getTransaction", n).then(function (t) {
                if (null == t) return null == e._emitted["t:" + r] ? null : void 0;
                var n = K.checkTransactionResponse(t);
                if (null == n.blockNumber) n.confirmations = 0;else if (null == n.confirmations) return e._getFastBlockNumber().then(function (t) {
                  var r = t - n.blockNumber + 1;
                  return r <= 0 && (r = 1), n.confirmations = r, e._wrapTransaction(n);
                });
                return e._wrapTransaction(n);
              });
            }, {
              onceBlock: e
            });
          });
        });
      }, K.prototype.getTransactionReceipt = function (t) {
        var e = this;
        return this.ready.then(function () {
          return c.resolveProperties({
            transactionHash: t
          }).then(function (t) {
            var r = t.transactionHash,
                n = {
              transactionHash: M(r, !0)
            };
            return v.poll(function () {
              return e.perform("getTransactionReceipt", n).then(function (t) {
                if (null == t) return null == e._emitted["t:" + r] ? null : void 0;

                if (null != t.blockHash) {
                  var n = function (t) {
                    var e = w(C, t);
                    return e.logs.forEach(function (t, e) {
                      null == t.transactionLogIndex && (t.transactionLogIndex = e);
                    }), null != t.status && (e.byzantium = !0), e;
                  }(t);

                  if (null == n.blockNumber) n.confirmations = 0;else if (null == n.confirmations) return e._getFastBlockNumber().then(function (t) {
                    var e = t - n.blockNumber + 1;
                    return e <= 0 && (e = 1), n.confirmations = e, n;
                  });
                  return n;
                }
              });
            }, {
              onceBlock: e
            });
          });
        });
      }, K.prototype.getLogs = function (t) {
        var e = this;
        return this.ready.then(function () {
          return c.resolveProperties(t).then(function (t) {
            return e._resolveNames(t, ["address"]).then(function (t) {
              var r = {
                filter: function (t) {
                  return t && t.blockHash ? w(j, t) : w(U, t);
                }(t)
              };
              return e.perform("getLogs", r).then(function (t) {
                return _(F)(t);
              });
            });
          });
        });
      }, K.prototype.getEtherPrice = function () {
        var t = this;
        return this.ready.then(function () {
          return t.perform("getEtherPrice", {}).then(function (t) {
            return t;
          });
        });
      }, K.prototype._getAddress = function (t) {
        return this.resolveName(t).then(function (e) {
          return null == e && g.throwError("ENS name not configured", g.UNSUPPORTED_OPERATION, {
            operation: "resolveName(" + JSON.stringify(t) + ")"
          }), e;
        });
      }, K.prototype._resolveNames = function (t, e) {
        var r = [],
            n = c.shallowCopy(t);
        return e.forEach(function (t) {
          null != n[t] && r.push(this._getAddress(n[t]).then(function (e) {
            n[t] = e;
          }));
        }, this), Promise.all(r).then(function () {
          return n;
        });
      }, K.prototype._getResolver = function (t) {
        var e = this;
        return this.getNetwork().then(function (r) {
          r.ensAddress || g.throwError("network does not support ENS", g.UNSUPPORTED_OPERATION, {
            operation: "ENS",
            network: r.name
          });
          var n = "0x0178b8bf" + l.namehash(t).substring(2),
              i = {
            to: r.ensAddress,
            data: n
          };
          return e.call(i).then(function (t) {
            if (32 !== u.hexDataLength(t)) return null;
            var e = s.getAddress(u.hexDataSlice(t, 12));
            return e === h.AddressZero ? null : e;
          });
        });
      }, K.prototype.resolveName = function (t) {
        var e = this;
        if (t instanceof Promise) return t.then(function (t) {
          return e.resolveName(t);
        });

        try {
          return Promise.resolve(s.getAddress(t));
        } catch (e) {
          if (u.isHexString(t)) throw e;
        }

        var r = this,
            n = l.namehash(t);
        return this._getResolver(t).then(function (t) {
          if (null == t) return null;
          var e = {
            to: t,
            data: "0x3b3b57de" + n.substring(2)
          };
          return r.call(e);
        }).then(function (t) {
          if (32 !== u.hexDataLength(t)) return null;
          var e = s.getAddress(u.hexDataSlice(t, 12));
          return e === h.AddressZero ? null : e;
        });
      }, K.prototype.lookupAddress = function (t) {
        var e = this;
        if (t instanceof Promise) return t.then(function (t) {
          return e.lookupAddress(t);
        });
        var r = (t = s.getAddress(t)).substring(2) + ".addr.reverse",
            n = l.namehash(r),
            i = this;
        return this._getResolver(r).then(function (t) {
          if (!t) return null;
          var e = {
            to: t,
            data: "0x691f3431" + n.substring(2)
          };
          return i.call(e);
        }).then(function (e) {
          if (null == e) return null;
          if ((e = e.substring(2)).length < 64) return null;
          if ((e = e.substring(64)).length < 64) return null;
          var r = a.bigNumberify("0x" + e.substring(0, 64)).toNumber();
          if (2 * r > (e = e.substring(64)).length) return null;
          var n = m.toUtf8String("0x" + e.substring(0, 2 * r));
          return i.resolveName(n).then(function (e) {
            return e != t ? null : n;
          });
        });
      }, K.checkTransactionResponse = function (t) {
        return x(t);
      }, K.prototype.doPoll = function () {}, K.prototype.perform = function (t, e) {
        return g.throwError(t + " not implemented", g.NOT_IMPLEMENTED, {
          operation: t
        }), null;
      }, K.prototype._startPending = function () {
        g.warn("WARNING: this provider does not support pending events");
      }, K.prototype._stopPending = function () {}, K.prototype._addEventListener = function (t, e, r) {
        this._events.push({
          tag: G(t),
          listener: e,
          once: r
        }), "pending" === t && this._startPending(), this.polling = !0;
      }, K.prototype.on = function (t, e) {
        return this._addEventListener(t, e, !1), this;
      }, K.prototype.once = function (t, e) {
        return this._addEventListener(t, e, !0), this;
      }, K.prototype.addEventListener = function (t, e) {
        return this.on(t, e);
      }, K.prototype.emit = function (t) {
        for (var e = this, r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];

        var i = !1,
            o = G(t);
        return this._events = this._events.filter(function (t) {
          return t.tag !== o || (setTimeout(function () {
            t.listener.apply(e, r);
          }, 0), i = !0, !t.once);
        }), 0 === this.listenerCount() && (this.polling = !1), i;
      }, K.prototype.listenerCount = function (t) {
        if (!t) return this._events.length;
        var e = G(t);
        return this._events.filter(function (t) {
          return t.tag === e;
        }).length;
      }, K.prototype.listeners = function (t) {
        var e = G(t);
        return this._events.filter(function (t) {
          return t.tag === e;
        }).map(function (t) {
          return t.listener;
        });
      }, K.prototype.removeAllListeners = function (t) {
        if (null == t) this._events = [], this._stopPending();else {
          var e = G(t);
          this._events = this._events.filter(function (t) {
            return t.tag !== e;
          }), "pending" === t && this._stopPending();
        }
        return 0 === this._events.length && (this.polling = !1), this;
      }, K.prototype.removeListener = function (t, e) {
        var r = !1,
            n = G(t);
        return this._events = this._events.filter(function (t) {
          return t.tag !== n || t.listener != e || !!r || !(r = !0);
        }), "pending" === t && 0 === this.listenerCount("pending") && this._stopPending(), 0 === this.listenerCount() && (this.polling = !1), this;
      }, K);

      function K(t) {
        var e = z.call(this) || this;
        if (g.checkNew(e, y.Provider), t instanceof Promise) c.defineReadOnly(e, "ready", t.then(function (t) {
          return c.defineReadOnly(e, "_network", t), t;
        })), e.ready.catch(function (t) {});else {
          var r = f.getNetwork(null == t ? "homestead" : t);
          r ? (c.defineReadOnly(e, "_network", r), c.defineReadOnly(e, "ready", Promise.resolve(e._network))) : g.throwError("invalid network", g.INVALID_ARGUMENT, {
            arg: "network",
            value: t
          });
        }
        return e._lastBlockNumber = -2, e._balances = {}, e._events = [], e._pollingInterval = 4e3, e._emitted = {
          block: -2
        }, e._fastQueryDate = 0, e;
      }

      r.BaseProvider = q, c.defineReadOnly(y.Provider, "inherits", c.inheritable(y.Provider));
    }, {
      "../constants": 3,
      "../errors": 5,
      "../utils/address": 60,
      "../utils/bignumber": 63,
      "../utils/bytes": 64,
      "../utils/hash": 65,
      "../utils/networks": 72,
      "../utils/properties": 74,
      "../utils/rlp": 76,
      "../utils/transaction": 83,
      "../utils/utf8": 85,
      "../utils/web": 86,
      "./abstract-provider": 50
    }],
    52: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
          o = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var s = t("./base-provider"),
          a = t("../utils/bytes"),
          u = t("../utils/properties"),
          h = t("../utils/web"),
          l = o(t("../errors"));

      function f(t) {
        var e = [];

        for (var r in t) if (null != t[r]) {
          var n = a.hexlify(t[r]);
          !{
            gasLimit: !0,
            gasPrice: !0,
            nonce: !0,
            value: !0
          }[r] || (n = a.hexStripZeros(n)), e.push(r + "=" + n);
        }

        return e.join("&");
      }

      function c(t) {
        if (0 == t.status && ("No records found" === t.message || "No transactions found" === t.message)) return t.result;
        if (1 == t.status && "OK" == t.message) return t.result;
        var e = new Error("invalid response");
        throw e.result = JSON.stringify(t), e;
      }

      function d(t) {
        if ("2.0" != t.jsonrpc) throw (e = new Error("invalid response")).result = JSON.stringify(t), e;

        if (t.error) {
          var e = new Error(t.error.message || "unknown error");
          throw t.error.code && (e.code = t.error.code), t.error.data && (e.data = t.error.data), e;
        }

        return t.result;
      }

      function p(t) {
        if ("pending" === t) throw new Error("pending not supported");
        return "latest" === t ? t : parseInt(t.substring(2), 16);
      }

      var m,
          v = (i(g, m = s.BaseProvider), g.prototype.perform = function (t, e) {
        var r = this,
            n = this.baseUrl,
            i = "";

        function o(t, e) {
          return h.fetchJson(t, null, e || d).then(function (e) {
            return r.emit("debug", {
              action: "perform",
              request: t,
              response: e,
              provider: r
            }), e;
          });
        }

        switch (this.apiKey && (i += "&apikey=" + this.apiKey), t) {
          case "getBlockNumber":
            return o(n += "/api?module=proxy&action=eth_blockNumber" + i);

          case "getGasPrice":
            return o(n += "/api?module=proxy&action=eth_gasPrice" + i);

          case "getBalance":
            return n += "/api?module=account&action=balance&address=" + e.address, o(n += "&tag=" + e.blockTag + i, c);

          case "getTransactionCount":
            return n += "/api?module=proxy&action=eth_getTransactionCount&address=" + e.address, o(n += "&tag=" + e.blockTag + i);

          case "getCode":
            return n += "/api?module=proxy&action=eth_getCode&address=" + e.address, o(n += "&tag=" + e.blockTag + i, d);

          case "getStorageAt":
            return n += "/api?module=proxy&action=eth_getStorageAt&address=" + e.address, n += "&position=" + e.position, o(n += "&tag=" + e.blockTag + i, d);

          case "sendTransaction":
            return n += "/api?module=proxy&action=eth_sendRawTransaction&hex=" + e.signedTransaction, o(n += i).catch(function (t) {
              throw t.responseText && (0 <= t.responseText.toLowerCase().indexOf("insufficient funds") && l.throwError("insufficient funds", l.INSUFFICIENT_FUNDS, {}), 0 <= t.responseText.indexOf("same hash was already imported") && l.throwError("nonce has already been used", l.NONCE_EXPIRED, {}), 0 <= t.responseText.indexOf("another transaction with same nonce") && l.throwError("replacement fee too low", l.REPLACEMENT_UNDERPRICED, {})), t;
            });

          case "getBlock":
            return e.blockTag ? (n += "/api?module=proxy&action=eth_getBlockByNumber&tag=" + e.blockTag, e.includeTransactions ? n += "&boolean=true" : n += "&boolean=false", o(n += i)) : Promise.reject(new Error("getBlock by blockHash not implemeneted"));

          case "getTransaction":
            return n += "/api?module=proxy&action=eth_getTransactionByHash&txhash=" + e.transactionHash, o(n += i);

          case "getTransactionReceipt":
            return n += "/api?module=proxy&action=eth_getTransactionReceipt&txhash=" + e.transactionHash, o(n += i);

          case "call":
            return n += "/api?module=proxy&action=eth_call" + (s = (s = f(e.transaction)) && "&" + s), "latest" !== e.blockTag ? Promise.reject(new Error("EtherscanProvider does not support blockTag for call")) : o(n += i);

          case "estimateGas":
            var s;
            return n += "/api?module=proxy&action=eth_estimateGas&" + (s = (s = f(e.transaction)) && "&" + s), o(n += i);

          case "getLogs":
            n += "/api?module=logs&action=getLogs";

            try {
              if (e.filter.fromBlock && (n += "&fromBlock=" + p(e.filter.fromBlock)), e.filter.toBlock && (n += "&toBlock=" + p(e.filter.toBlock)), e.filter.blockHash) try {
                l.throwError("Etherscan does not support blockHash filters", l.UNSUPPORTED_OPERATION, {
                  operation: "getLogs(blockHash)"
                });
              } catch (t) {
                return Promise.reject(t);
              }

              if (e.filter.address && (n += "&address=" + e.filter.address), e.filter.topics && 0 < e.filter.topics.length) {
                if (1 < e.filter.topics.length) throw new Error("unsupported topic format");
                var a = e.filter.topics[0];
                if ("string" != typeof a || 66 !== a.length) throw new Error("unsupported topic0 format");
                n += "&topic0=" + a;
              }
            } catch (t) {
              return Promise.reject(t);
            }

            var u = this;
            return o(n += i, c).then(function (t) {
              var e = {},
                  r = Promise.resolve();
              return t.forEach(function (t) {
                r = r.then(function () {
                  return null != t.blockHash ? null : (t.blockHash = e[t.transactionHash], null == t.blockHash ? u.getTransaction(t.transactionHash).then(function (r) {
                    return e[t.transactionHash] = r.blockHash, t.blockHash = r.blockHash, null;
                  }) : null);
                });
              }), r.then(function () {
                return t;
              });
            });

          case "getEtherPrice":
            return "homestead" !== this.network.name ? Promise.resolve(0) : (n += "/api?module=stats&action=ethprice", o(n += i, c).then(function (t) {
              return parseFloat(t.ethusd);
            }));
        }

        return m.prototype.perform.call(this, t, e);
      }, g.prototype.getHistory = function (t, e, r) {
        var n = this,
            i = this.baseUrl,
            o = "";
        return this.apiKey && (o += "&apikey=" + this.apiKey), null == e && (e = 0), null == r && (r = 99999999), this.resolveName(t).then(function (t) {
          return i += "/api?module=account&action=txlist&address=" + t, i += "&startblock=" + e, i += "&endblock=" + r, i += "&sort=asc" + o, h.fetchJson(i, null, c).then(function (t) {
            n.emit("debug", {
              action: "getHistory",
              request: i,
              response: t,
              provider: n
            });
            var e = [];
            return t.forEach(function (t) {
              ["contractAddress", "to"].forEach(function (e) {
                "" == t[e] && delete t[e];
              }), null == t.creates && null != t.contractAddress && (t.creates = t.contractAddress);
              var r = s.BaseProvider.checkTransactionResponse(t);
              t.timeStamp && (r.timestamp = parseInt(t.timeStamp)), e.push(r);
            }), e;
          });
        });
      }, g);

      function g(t, e) {
        var r = m.call(this, t) || this;
        l.checkNew(r, g);
        var n = "invalid";
        r.network && (n = r.network.name);
        var i = null;

        switch (n) {
          case "homestead":
            i = "https://api.etherscan.io";
            break;

          case "ropsten":
            i = "https://api-ropsten.etherscan.io";
            break;

          case "rinkeby":
            i = "https://api-rinkeby.etherscan.io";
            break;

          case "kovan":
            i = "https://api-kovan.etherscan.io";
            break;

          case "goerli":
            i = "https://api-goerli.etherscan.io";
            break;

          default:
            throw new Error("unsupported network");
        }

        return u.defineReadOnly(r, "baseUrl", i), u.defineReadOnly(r, "apiKey", e || "8FG3JMZ9USS4NTA6YKEKHINU56SEPPVBJR"), r;
      }

      r.EtherscanProvider = v;
    }, {
      "../errors": 5,
      "../utils/bytes": 64,
      "../utils/properties": 74,
      "../utils/web": 86,
      "./base-provider": 51
    }],
    53: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
          o = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var s = t("./base-provider"),
          a = o(t("../errors"));

      function u(t) {
        var e = !0,
            r = null;
        return t.forEach(function (n) {
          null != n ? null != r ? r.name === n.name && r.chainId === n.chainId && (r.ensAddress === n.ensAddress || null == r.ensAddress && null == n.ensAddress) || a.throwError("provider mismatch", a.INVALID_ARGUMENT, {
            arg: "networks",
            value: t
          }) : r = n : e = !1;
        }), e;
      }

      var h,
          l = (i(f, h = s.BaseProvider), Object.defineProperty(f.prototype, "providers", {
        get: function () {
          return this._providers.slice(0);
        },
        enumerable: !0,
        configurable: !0
      }), f.prototype.perform = function (t, e) {
        var r = this.providers;
        return new Promise(function (n, i) {
          var o = null;
          !function s() {
            r.length ? r.shift().perform(t, e).then(function (t) {
              return n(t);
            }).catch(function (t) {
              o = o || t, setTimeout(s, 0);
            }) : i(o);
          }();
        });
      }, f);

      function f(t) {
        var e = this;
        if (0 === t.length) throw new Error("no providers");
        if (u(t.map(function (t) {
          return t.network;
        }))) e = h.call(this, t[0].network) || this;else {
          var r = Promise.all(t.map(function (t) {
            return t.getNetwork();
          })).then(function (t) {
            return u(t) || a.throwError("getNetwork returned null", a.UNKNOWN_ERROR, {}), t[0];
          });
          e = h.call(this, r) || this;
        }
        return a.checkNew(e, f), e._providers = t.slice(0), e;
      }

      r.FallbackProvider = l;
    }, {
      "../errors": 5,
      "./base-provider": 51
    }],
    54: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("./abstract-provider");
      r.Provider = n.Provider;
      var i = t("./base-provider");
      r.BaseProvider = i.BaseProvider;
      var o = t("./etherscan-provider");
      r.EtherscanProvider = o.EtherscanProvider;
      var s = t("./fallback-provider");
      r.FallbackProvider = s.FallbackProvider;
      var a = t("./ipc-provider");
      r.IpcProvider = a.IpcProvider;
      var u = t("./infura-provider");
      r.InfuraProvider = u.InfuraProvider;
      var h = t("./json-rpc-provider");
      r.JsonRpcProvider = h.JsonRpcProvider, r.JsonRpcSigner = h.JsonRpcSigner;
      var l = t("./web3-provider");
      r.Web3Provider = l.Web3Provider;
    }, {
      "./abstract-provider": 50,
      "./base-provider": 51,
      "./etherscan-provider": 52,
      "./fallback-provider": 53,
      "./infura-provider": 55,
      "./ipc-provider": 56,
      "./json-rpc-provider": 57,
      "./web3-provider": 58
    }],
    55: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
          o = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var s,
          a = t("./json-rpc-provider"),
          u = t("../utils/bytes"),
          h = t("../utils/networks"),
          l = t("../utils/properties"),
          f = o(t("../errors")),
          c = (i(d, s = a.JsonRpcProvider), d.prototype._startPending = function () {
        f.warn("WARNING: INFURA does not support pending filters");
      }, d.prototype.getSigner = function (t) {
        return f.throwError("INFURA does not support signing", f.UNSUPPORTED_OPERATION, {
          operation: "getSigner"
        });
      }, d.prototype.listAccounts = function () {
        return Promise.resolve([]);
      }, d);

      function d(t, e) {
        var r = this,
            n = h.getNetwork(null == t ? "homestead" : t);
        null == e && (e = "7d0d81d0919f4f05b9ab6634be01ee73");
        var i = null;

        switch (n.name) {
          case "homestead":
            i = "mainnet.infura.io";
            break;

          case "ropsten":
            i = "ropsten.infura.io";
            break;

          case "rinkeby":
            i = "rinkeby.infura.io";
            break;

          case "goerli":
            i = "goerli.infura.io";
            break;

          case "kovan":
            i = "kovan.infura.io";
            break;

          default:
            f.throwError("unsupported network", f.INVALID_ARGUMENT, {
              argument: "network",
              value: t
            });
        }

        return u.isHexString("0x" + e, 16) ? (r = s.call(this, "https://" + i + "/v3/" + e, n) || this, l.defineReadOnly(r, "apiAccessToken", null), l.defineReadOnly(r, "projectId", e)) : (f.warn("The legacy INFURA apiAccesToken API is deprecated; please upgrade to a Project ID instead (see INFURA dshboard; https://infura.io)"), r = s.call(this, "https://" + i + "/" + e, n) || this, l.defineReadOnly(r, "apiAccessToken", e), l.defineReadOnly(r, "projectId", null)), f.checkNew(r, d), r;
      }

      r.InfuraProvider = c;
    }, {
      "../errors": 5,
      "../utils/bytes": 64,
      "../utils/networks": 72,
      "../utils/properties": 74,
      "./json-rpc-provider": 57
    }],
    56: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
    }, {}],
    57: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
          o = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var s = t("./base-provider"),
          a = t("../abstract-signer"),
          u = o(t("../errors")),
          h = t("../utils/address"),
          l = t("../utils/bytes"),
          f = t("../utils/networks"),
          c = t("../utils/properties"),
          d = t("../utils/utf8"),
          p = t("../utils/web");

      function m(t) {
        if (t.error) {
          var e = new Error(t.error.message);
          throw e.code = t.error.code, e.data = t.error.data, e;
        }

        return t.result;
      }

      function v(t) {
        return t ? t.toLowerCase() : t;
      }

      var g,
          y = {},
          w = 42,
          b = (i(_, g = a.Signer), _.prototype.getAddress = function () {
        var t = this;
        return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then(function (e) {
          return e.length <= t._index && u.throwError("unknown account #" + t._index, u.UNSUPPORTED_OPERATION, {
            operation: "getAddress"
          }), t._address = h.getAddress(e[t._index]), t._address;
        });
      }, _.prototype.getBalance = function (t) {
        return this.provider.getBalance(this.getAddress(), t);
      }, _.prototype.getTransactionCount = function (t) {
        return this.provider.getTransactionCount(this.getAddress(), t);
      }, _.prototype.sendUncheckedTransaction = function (t) {
        var e = this;
        t = c.shallowCopy(t);
        var r = this.getAddress().then(function (t) {
          return t && t.toLowerCase();
        });

        if (null == t.gasLimit) {
          var n = c.shallowCopy(t);
          n.from = r, t.gasLimit = this.provider.estimateGas(n);
        }

        return Promise.all([c.resolveProperties(t), r]).then(function (t) {
          var r = t[0],
              n = E.hexlifyTransaction(r);
          return n.from = t[1], e.provider.send("eth_sendTransaction", [n]).then(function (t) {
            return t;
          }, function (t) {
            throw t.responseText && (0 <= t.responseText.indexOf("insufficient funds") && u.throwError("insufficient funds", u.INSUFFICIENT_FUNDS, {
              transaction: r
            }), 0 <= t.responseText.indexOf("nonce too low") && u.throwError("nonce has already been used", u.NONCE_EXPIRED, {
              transaction: r
            }), 0 <= t.responseText.indexOf("replacement transaction underpriced") && u.throwError("replacement fee too low", u.REPLACEMENT_UNDERPRICED, {
              transaction: r
            })), t;
          });
        });
      }, _.prototype.sendTransaction = function (t) {
        var e = this;
        return this.sendUncheckedTransaction(t).then(function (t) {
          return p.poll(function () {
            return e.provider.getTransaction(t).then(function (r) {
              if (null !== r) return e.provider._wrapTransaction(r, t);
            });
          }, {
            fastRetry: 250,
            onceBlock: e.provider
          }).catch(function (e) {
            throw e.transactionHash = t, e;
          });
        });
      }, _.prototype.signMessage = function (t) {
        var e = this,
            r = "string" == typeof t ? d.toUtf8Bytes(t) : t;
        return this.getAddress().then(function (t) {
          return e.provider.send("eth_sign", [t.toLowerCase(), l.hexlify(r)]);
        });
      }, _.prototype.unlock = function (t) {
        var e = this.provider;
        return this.getAddress().then(function (r) {
          return e.send("personal_unlockAccount", [r.toLowerCase(), t, null]);
        });
      }, _);

      function _(t, e, r) {
        var n = g.call(this) || this;
        if (u.checkNew(n, _), t !== y) throw new Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
        return c.defineReadOnly(n, "provider", e), r ? "string" == typeof r ? c.defineReadOnly(n, "_address", h.getAddress(r)) : "number" == typeof r ? c.defineReadOnly(n, "_index", r) : u.throwError("invalid address or index", u.INVALID_ARGUMENT, {
          argument: "addressOrIndex",
          value: r
        }) : c.defineReadOnly(n, "_index", 0), n;
      }

      r.JsonRpcSigner = b;
      var M,
          S = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0
      },
          E = (i(k, M = s.BaseProvider), k.prototype.getSigner = function (t) {
        return new b(y, this, t);
      }, k.prototype.listAccounts = function () {
        return this.send("eth_accounts", []).then(function (t) {
          return t.map(function (t) {
            return h.getAddress(t);
          });
        });
      }, k.prototype.send = function (t, e) {
        var r = this,
            n = {
          method: t,
          params: e,
          id: w++,
          jsonrpc: "2.0"
        };
        return p.fetchJson(this.connection, JSON.stringify(n), m).then(function (t) {
          return r.emit("debug", {
            action: "send",
            request: n,
            response: t,
            provider: r
          }), t;
        });
      }, k.prototype.perform = function (t, e) {
        switch (t) {
          case "getBlockNumber":
            return this.send("eth_blockNumber", []);

          case "getGasPrice":
            return this.send("eth_gasPrice", []);

          case "getBalance":
            return this.send("eth_getBalance", [v(e.address), e.blockTag]);

          case "getTransactionCount":
            return this.send("eth_getTransactionCount", [v(e.address), e.blockTag]);

          case "getCode":
            return this.send("eth_getCode", [v(e.address), e.blockTag]);

          case "getStorageAt":
            return this.send("eth_getStorageAt", [v(e.address), e.position, e.blockTag]);

          case "sendTransaction":
            return this.send("eth_sendRawTransaction", [e.signedTransaction]).catch(function (t) {
              throw t.responseText && (0 < t.responseText.indexOf("insufficient funds") && u.throwError("insufficient funds", u.INSUFFICIENT_FUNDS, {}), 0 < t.responseText.indexOf("nonce too low") && u.throwError("nonce has already been used", u.NONCE_EXPIRED, {}), 0 < t.responseText.indexOf("replacement transaction underpriced") && u.throwError("replacement fee too low", u.REPLACEMENT_UNDERPRICED, {})), t;
            });

          case "getBlock":
            return e.blockTag ? this.send("eth_getBlockByNumber", [e.blockTag, !!e.includeTransactions]) : e.blockHash ? this.send("eth_getBlockByHash", [e.blockHash, !!e.includeTransactions]) : Promise.reject(new Error("invalid block tag or block hash"));

          case "getTransaction":
            return this.send("eth_getTransactionByHash", [e.transactionHash]);

          case "getTransactionReceipt":
            return this.send("eth_getTransactionReceipt", [e.transactionHash]);

          case "call":
            return this.send("eth_call", [k.hexlifyTransaction(e.transaction, {
              from: !0
            }), e.blockTag]);

          case "estimateGas":
            return this.send("eth_estimateGas", [k.hexlifyTransaction(e.transaction, {
              from: !0
            })]);

          case "getLogs":
            return e.filter && null != e.filter.address && (e.filter.address = v(e.filter.address)), this.send("eth_getLogs", [e.filter]);
        }

        return u.throwError(t + " not implemented", u.NOT_IMPLEMENTED, {
          operation: t
        }), null;
      }, k.prototype._startPending = function () {
        if (null == this._pendingFilter) {
          var t = this,
              e = this.send("eth_newPendingTransactionFilter", []);
          (this._pendingFilter = e).then(function (r) {
            return function n() {
              t.send("eth_getFilterChanges", [r]).then(function (r) {
                if (t._pendingFilter != e) return null;
                var n = Promise.resolve();
                return r.forEach(function (e) {
                  t._emitted["t:" + e.toLowerCase()] = "pending", n = n.then(function () {
                    return t.getTransaction(e).then(function (e) {
                      return t.emit("pending", e), null;
                    });
                  });
                }), n.then(function () {
                  return new Promise(function (t) {
                    setTimeout(function () {
                      t();
                    }, 1e3);
                  });
                });
              }).then(function () {
                if (t._pendingFilter == e) return setTimeout(function () {
                  n();
                }, 0), null;
                t.send("eth_uninstallFilter", [r]);
              }).catch(function (t) {});
            }(), r;
          }).catch(function (t) {});
        }
      }, k.prototype._stopPending = function () {
        this._pendingFilter = null;
      }, k.hexlifyTransaction = function (t, e) {
        var r = c.shallowCopy(S);
        if (e) for (var n in e) e[n] && (r[n] = !0);
        c.checkProperties(t, r);
        var i = {};
        return ["gasLimit", "gasPrice", "nonce", "value"].forEach(function (e) {
          if (null != t[e]) {
            var r = l.hexStripZeros(l.hexlify(t[e]));
            "gasLimit" === e && (e = "gas"), i[e] = r;
          }
        }), ["from", "to", "data"].forEach(function (e) {
          null != t[e] && (i[e] = l.hexlify(t[e]));
        }), i;
      }, k);

      function k(t, e) {
        var r = this;
        if ("string" == typeof t && null === e && f.getNetwork(t) && (e = t, t = null), e) r = M.call(this, e) || this;else {
          var n = new Promise(function (t, e) {
            setTimeout(function () {
              r.send("net_version", []).then(function (e) {
                return t(f.getNetwork(parseInt(e)));
              }).catch(function (t) {
                e(t);
              });
            });
          });
          r = M.call(this, n) || this;
        }
        return u.checkNew(r, k), t = t || "http://localhost:8545", r.connection = "string" == typeof t ? {
          url: t
        } : t, r;
      }

      r.JsonRpcProvider = E;
    }, {
      "../abstract-signer": 2,
      "../errors": 5,
      "../utils/address": 60,
      "../utils/bytes": 64,
      "../utils/networks": 72,
      "../utils/properties": 74,
      "../utils/utf8": 85,
      "../utils/web": 86,
      "./base-provider": 51
    }],
    58: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
          o = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var s,
          a = t("./json-rpc-provider"),
          u = t("../utils/properties"),
          h = o(t("../errors")),
          l = 42,
          f = (i(c, s = a.JsonRpcProvider), c.prototype.send = function (t, e) {
        var r = this;
        return "eth_sign" == t && this._web3Provider.isMetaMask && (t = "personal_sign", e = [e[1], e[0]]), new Promise(function (n, i) {
          var o = {
            method: t,
            params: e,
            id: l++,
            jsonrpc: "2.0"
          };

          r._sendAsync(o, function (t, e) {
            if (t) i(t);else {
              if (e.error) {
                var r = new Error(e.error.message);
                return r.code = e.error.code, r.data = e.error.data, void i(r);
              }

              n(e.result);
            }
          });
        });
      }, c);

      function c(t, e) {
        var r = s.call(this, t.host || t.path || "", e) || this;
        return h.checkNew(r, c), t && (t.sendAsync ? r._sendAsync = t.sendAsync.bind(t) : t.send && (r._sendAsync = t.send.bind(t))), t && r._sendAsync || h.throwError("invalid web3Provider", h.INVALID_ARGUMENT, {
          arg: "web3Provider",
          value: t
        }), u.defineReadOnly(r, "_web3Provider", t), u.defineReadOnly(r, "provider", t), r;
      }

      r.Web3Provider = f;
    }, {
      "../errors": 5,
      "../utils/properties": 74,
      "./json-rpc-provider": 57
    }],
    59: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
          o = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var s = t("../constants"),
          a = o(t("../errors")),
          u = t("./address"),
          h = t("./bignumber"),
          l = t("./bytes"),
          f = t("./utf8"),
          c = t("./properties"),
          d = new RegExp(/^bytes([0-9]*)$/),
          p = new RegExp(/^(u?int)([0-9]*)$/),
          m = new RegExp(/^(.*)\[([0-9]*)\]$/);

      r.defaultCoerceFunc = function (t, e) {
        var r = t.match(p);
        return r && parseInt(r[2]) <= 48 ? e.toNumber() : e;
      };

      var v = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$"),
          g = new RegExp("^[A-Za-z_][A-Za-z0-9_]*$");

      function y(t) {
        return t.match(/^uint($|[^1-9])/) ? t = "uint256" + t.substring(4) : t.match(/^int($|[^1-9])/) && (t = "int256" + t.substring(3)), t;
      }

      function w(t, e) {
        var r = t;

        function n(t) {
          throw new Error('unexpected character "' + r[t] + '" at position ' + t + ' in "' + r + '"');
        }

        t = t.replace(/\s/g, " ");

        for (var i = {
          type: "",
          name: "",
          state: {
            allowType: !0
          }
        }, o = i, s = 0; s < t.length; s++) {
          var a = t[s];

          switch (a) {
            case "(":
              o.state.allowParams || n(s), o.state.allowType = !1, o.type = y(o.type), o.components = [{
                type: "",
                name: "",
                parent: o,
                state: {
                  allowType: !0
                }
              }], o = o.components[0];
              break;

            case ")":
              delete o.state, e && "indexed" === o.name && (o.indexed = !0, o.name = ""), o.type = y(o.type);
              var u = o;
              (o = o.parent) || n(s), delete u.parent, o.state.allowParams = !1, o.state.allowName = !0, o.state.allowArray = !0;
              break;

            case ",":
              delete o.state, e && "indexed" === o.name && (o.indexed = !0, o.name = ""), o.type = y(o.type);
              var h = {
                type: "",
                name: "",
                parent: o.parent,
                state: {
                  allowType: !0
                }
              };
              o.parent.components.push(h), delete o.parent, o = h;
              break;

            case " ":
              o.state.allowType && "" !== o.type && (o.type = y(o.type), delete o.state.allowType, o.state.allowName = !0, o.state.allowParams = !0), o.state.allowName && "" !== o.name && (e && "indexed" === o.name ? (o.indexed = !0, o.name = "") : o.state.allowName = !1);
              break;

            case "[":
              o.state.allowArray || n(s), o.type += a, o.state.allowArray = !1, o.state.allowName = !1, o.state.readArray = !0;
              break;

            case "]":
              o.state.readArray || n(s), o.type += a, o.state.readArray = !1, o.state.allowArray = !0, o.state.allowName = !0;
              break;

            default:
              o.state.allowType ? (o.type += a, o.state.allowParams = !0, o.state.allowArray = !0) : o.state.allowName ? (o.name += a, delete o.state.allowArray) : o.state.readArray ? o.type += a : n(s);
          }
        }

        if (o.parent) throw new Error("unexpected eof");
        return delete i.state, e && "indexed" === o.name && (o.indexed = !0, o.name = ""), i.type = y(i.type), i;
      }

      function b(t) {
        return st(r.defaultCoerceFunc, t).type;
      }

      function _(t, e, r, n, i) {
        this.coerceFunc = t, this.name = e, this.type = r, this.localName = n, this.dynamic = i;
      }

      r.parseParamType = function (t) {
        return w(t, !0);
      }, r.formatParamType = b, r.formatSignature = function (t) {
        return t.name + "(" + t.inputs.map(function (t) {
          return b(t);
        }).join(",") + ")";
      }, r.parseSignature = function (t) {
        if ("string" == typeof t) return "event " === (t = (t = (t = t.replace(/\s/g, " ")).replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ")).trim()).substring(0, 6) ? function (t) {
          var e = {
            anonymous: !1,
            inputs: [],
            name: "",
            type: "event"
          },
              r = t.match(v);
          if (!r) throw new Error("invalid event: " + t);
          if (e.name = r[1].trim(), it(r[2]).forEach(function (t) {
            (t = w(t, !0)).indexed = !!t.indexed, e.inputs.push(t);
          }), r[3].split(" ").forEach(function (t) {
            switch (t) {
              case "anonymous":
                e.anonymous = !0;
                break;

              case "":
                break;

              default:
                a.info("unknown modifier: " + t);
            }
          }), e.name && !e.name.match(g)) throw new Error('invalid identifier: "' + e.name + '"');
          return e;
        }(t.substring(6).trim()) : ("function " === t.substring(0, 9) && (t = t.substring(9)), function (t) {
          var e = {
            constant: !1,
            gas: null,
            inputs: [],
            name: "",
            outputs: [],
            payable: !1,
            stateMutability: null,
            type: "function"
          },
              r = t.split("@");

          if (1 !== r.length) {
            if (2 < r.length) throw new Error("invalid signature");
            if (!r[1].match(/^[0-9]+$/)) throw new Error("invalid signature gas");
            e.gas = h.bigNumberify(r[1]), t = r[0];
          }

          var n = (r = t.split(" returns "))[0].match(v);
          if (!n) throw new Error("invalid signature");
          if (e.name = n[1].trim(), !e.name.match(g)) throw new Error('invalid identifier: "' + n[1] + '"');

          if (it(n[2]).forEach(function (t) {
            e.inputs.push(w(t));
          }), n[3].split(" ").forEach(function (t) {
            switch (t) {
              case "constant":
                e.constant = !0;
                break;

              case "payable":
                e.payable = !0, e.stateMutability = "payable";
                break;

              case "pure":
                e.constant = !0, e.stateMutability = "pure";
                break;

              case "view":
                e.constant = !0, e.stateMutability = "view";
                break;

              case "external":
              case "public":
              case "":
                break;

              default:
                a.info("unknown modifier: " + t);
            }
          }), 1 < r.length) {
            var i = r[1].match(v);
            if ("" != i[1].trim() || "" != i[3].trim()) throw new Error("unexpected tokens");
            it(i[2]).forEach(function (t) {
              e.outputs.push(w(t));
            });
          }

          if ("constructor" === e.name) {
            if (e.type = "constructor", e.outputs.length) throw new Error("constructor may not have outputs");
            delete e.name, delete e.outputs;
          }

          return e;
        }(t.trim()));
        throw new Error("unknown signature");
      };
      var M,
          S = (i(E, M = _), E.prototype.encode = function (t) {
        return this.coder.encode(t);
      }, E.prototype.decode = function (t, e) {
        return this.coder.decode(t, e);
      }, E);

      function E(t) {
        var e = M.call(this, t.coerceFunc, t.name, t.type, void 0, t.dynamic) || this;
        return c.defineReadOnly(e, "coder", t), e;
      }

      var k,
          A = (i(x, k = _), x.prototype.encode = function (t) {
        return l.arrayify([]);
      }, x.prototype.decode = function (t, e) {
        if (e > t.length) throw new Error("invalid null");
        return {
          consumed: 0,
          value: this.coerceFunc("null", void 0)
        };
      }, x);

      function x(t, e) {
        return k.call(this, t, "null", "", e, !1) || this;
      }

      var T,
          N = (i(P, T = _), P.prototype.encode = function (t) {
        try {
          var e = h.bigNumberify(t);

          if (this.signed) {
            var r = s.MaxUint256.maskn(8 * this.size - 1);
            if (e.gt(r)) throw new Error("out-of-bounds");
            if (r = r.add(s.One).mul(s.NegativeOne), e.lt(r)) throw new Error("out-of-bounds");
          } else if (e.lt(s.Zero) || e.gt(s.MaxUint256.maskn(8 * this.size))) throw new Error("out-of-bounds");

          return e = e.toTwos(8 * this.size).maskn(8 * this.size), this.signed && (e = e.fromTwos(8 * this.size).toTwos(256)), l.padZeros(l.arrayify(e), 32);
        } catch (e) {
          a.throwError("invalid number value", a.INVALID_ARGUMENT, {
            arg: this.localName,
            coderType: this.name,
            value: t
          });
        }

        return null;
      }, P.prototype.decode = function (t, e) {
        t.length < e + 32 && a.throwError("insufficient data for " + this.name + " type", a.INVALID_ARGUMENT, {
          arg: this.localName,
          coderType: this.name,
          value: l.hexlify(t.slice(e, e + 32))
        });
        var r = 32 - this.size,
            n = h.bigNumberify(t.slice(e + r, e + 32));
        return n = this.signed ? n.fromTwos(8 * this.size) : n.maskn(8 * this.size), {
          consumed: 32,
          value: this.coerceFunc(this.name, n)
        };
      }, P);

      function P(t, e, r, n) {
        var i = this,
            o = (r ? "int" : "uint") + 8 * e;
        return (i = T.call(this, t, o, o, n, !1) || this).size = e, i.signed = r, i;
      }

      var R,
          O = new N(function (t, e) {
        return e;
      }, 32, !1, "none"),
          I = (i(C, R = _), C.prototype.encode = function (t) {
        return O.encode(t ? 1 : 0);
      }, C.prototype.decode = function (t, e) {
        try {
          var r = O.decode(t, e);
        } catch (t) {
          throw "insufficient data for uint256 type" === t.reason && a.throwError("insufficient data for boolean type", a.INVALID_ARGUMENT, {
            arg: this.localName,
            coderType: "boolean",
            value: t.value
          }), t;
        }

        return {
          consumed: r.consumed,
          value: this.coerceFunc("bool", !r.value.isZero())
        };
      }, C);

      function C(t, e) {
        return R.call(this, t, "bool", "bool", e, !1) || this;
      }

      var D,
          L = (i(U, D = _), U.prototype.encode = function (t) {
        var e = new Uint8Array(32);

        try {
          var r = l.arrayify(t);
          if (r.length !== this.length) throw new Error("incorrect data length");
          e.set(r);
        } catch (e) {
          a.throwError("invalid " + this.name + " value", a.INVALID_ARGUMENT, {
            arg: this.localName,
            coderType: this.name,
            value: e.value || t
          });
        }

        return e;
      }, U.prototype.decode = function (t, e) {
        return t.length < e + 32 && a.throwError("insufficient data for " + this.name + " type", a.INVALID_ARGUMENT, {
          arg: this.localName,
          coderType: this.name,
          value: l.hexlify(t.slice(e, e + 32))
        }), {
          consumed: 32,
          value: this.coerceFunc(this.name, l.hexlify(t.slice(e, e + this.length)))
        };
      }, U);

      function U(t, e, r) {
        var n = this,
            i = "bytes" + e;
        return (n = D.call(this, t, i, i, r, !1) || this).length = e, n;
      }

      var j,
          B = (i(F, j = _), F.prototype.encode = function (t) {
        var e = new Uint8Array(32);

        try {
          e.set(l.arrayify(u.getAddress(t)), 12);
        } catch (e) {
          a.throwError("invalid address", a.INVALID_ARGUMENT, {
            arg: this.localName,
            coderType: "address",
            value: t
          });
        }

        return e;
      }, F.prototype.decode = function (t, e) {
        return t.length < e + 32 && a.throwError("insufficient data for address type", a.INVALID_ARGUMENT, {
          arg: this.localName,
          coderType: "address",
          value: l.hexlify(t.slice(e, e + 32))
        }), {
          consumed: 32,
          value: this.coerceFunc("address", u.getAddress(l.hexlify(t.slice(e + 12, e + 32))))
        };
      }, F);

      function F(t, e) {
        return j.call(this, t, "address", "address", e, !1) || this;
      }

      function H(t) {
        var e = 32 * Math.ceil(t.length / 32),
            r = new Uint8Array(e - t.length);
        return l.concat([O.encode(t.length), t, r]);
      }

      function G(t, e, r) {
        t.length < e + 32 && a.throwError("insufficient data for dynamicBytes length", a.INVALID_ARGUMENT, {
          arg: r,
          coderType: "dynamicBytes",
          value: l.hexlify(t.slice(e, e + 32))
        });
        var n = O.decode(t, e).value;

        try {
          n = n.toNumber();
        } catch (t) {
          a.throwError("dynamic bytes count too large", a.INVALID_ARGUMENT, {
            arg: r,
            coderType: "dynamicBytes",
            value: n.toString()
          });
        }

        return t.length < e + 32 + n && a.throwError("insufficient data for dynamicBytes type", a.INVALID_ARGUMENT, {
          arg: r,
          coderType: "dynamicBytes",
          value: l.hexlify(t.slice(e, e + 32 + n))
        }), {
          consumed: 32 + 32 * Math.ceil(n / 32),
          value: t.slice(e + 32, e + 32 + n)
        };
      }

      var W,
          z = (i(q, W = _), q.prototype.encode = function (t) {
        try {
          return H(l.arrayify(t));
        } catch (t) {
          a.throwError("invalid bytes value", a.INVALID_ARGUMENT, {
            arg: this.localName,
            coderType: "bytes",
            value: t.value
          });
        }

        return null;
      }, q.prototype.decode = function (t, e) {
        var r = G(t, e, this.localName);
        return r.value = this.coerceFunc("bytes", l.hexlify(r.value)), r;
      }, q);

      function q(t, e) {
        return W.call(this, t, "bytes", "bytes", e, !0) || this;
      }

      var K,
          Y = (i(V, K = _), V.prototype.encode = function (t) {
        return "string" != typeof t && a.throwError("invalid string value", a.INVALID_ARGUMENT, {
          arg: this.localName,
          coderType: "string",
          value: t
        }), H(f.toUtf8Bytes(t));
      }, V.prototype.decode = function (t, e) {
        var r = G(t, e, this.localName);
        return r.value = this.coerceFunc("string", f.toUtf8String(r.value)), r;
      }, V);

      function V(t, e) {
        return K.call(this, t, "string", "string", e, !0) || this;
      }

      function Z(t) {
        return 32 * Math.ceil(t / 32);
      }

      function J(t, e) {
        if (Array.isArray(e)) ;else if (e && "object" == typeof e) {
          var r = [];
          t.forEach(function (t) {
            r.push(e[t.localName]);
          }), e = r;
        } else a.throwError("invalid tuple value", a.INVALID_ARGUMENT, {
          coderType: "tuple",
          value: e
        });
        t.length !== e.length && a.throwError("types/value length mismatch", a.INVALID_ARGUMENT, {
          coderType: "tuple",
          value: e
        });
        var n = [];
        t.forEach(function (t, r) {
          n.push({
            dynamic: t.dynamic,
            value: t.encode(e[r])
          });
        });
        var i = 0,
            o = 0;
        n.forEach(function (t) {
          t.dynamic ? (i += 32, o += Z(t.value.length)) : i += Z(t.value.length);
        });
        var s = 0,
            u = i,
            h = new Uint8Array(i + o);
        return n.forEach(function (t) {
          t.dynamic ? (h.set(O.encode(u), s), s += 32, h.set(t.value, u), u += Z(t.value.length)) : (h.set(t.value, s), s += Z(t.value.length));
        }), h;
      }

      function $(t, e, r) {
        var n = r,
            i = 0,
            o = [];
        return t.forEach(function (t) {
          if (t.dynamic) {
            var s = O.decode(e, r);
            (a = t.decode(e, n + s.value.toNumber())).consumed = s.consumed;
          } else var a = t.decode(e, r);

          null != a.value && o.push(a.value), r += a.consumed, i += a.consumed;
        }), t.forEach(function (t, e) {
          var r = t.localName;
          r && ("length" === r && (r = "_length"), null == o[r] && (o[r] = o[e]));
        }), {
          value: o,
          consumed: i
        };
      }

      var X,
          Q = (i(tt, X = _), tt.prototype.encode = function (t) {
        Array.isArray(t) || a.throwError("expected array value", a.INVALID_ARGUMENT, {
          arg: this.localName,
          coderType: "array",
          value: t
        });
        var e = this.length,
            r = new Uint8Array(0);
        -1 === e && (e = t.length, r = O.encode(e)), a.checkArgumentCount(e, t.length, " in coder array" + (this.localName ? " " + this.localName : ""));

        for (var n = [], i = 0; i < t.length; i++) n.push(this.coder);

        return l.concat([r, J(n, t)]);
      }, tt.prototype.decode = function (t, e) {
        var r = 0,
            n = this.length;

        if (-1 === n) {
          try {
            var i = O.decode(t, e);
          } catch (t) {
            a.throwError("insufficient data for dynamic array length", a.INVALID_ARGUMENT, {
              arg: this.localName,
              coderType: "array",
              value: t.value
            });
          }

          try {
            n = i.value.toNumber();
          } catch (t) {
            a.throwError("array count too large", a.INVALID_ARGUMENT, {
              arg: this.localName,
              coderType: "array",
              value: i.value.toString()
            });
          }

          r += i.consumed, e += i.consumed;
        }

        for (var o = [], s = 0; s < n; s++) o.push(new S(this.coder));

        var u = $(o, t, e);
        return u.consumed += r, u.value = this.coerceFunc(this.type, u.value), u;
      }, tt);

      function tt(t, e, r, n) {
        var i = this,
            o = e.type + "[" + (0 <= r ? r : "") + "]",
            s = -1 === r || e.dynamic;
        return (i = X.call(this, t, "array", o, n, s) || this).coder = e, i.length = r, i;
      }

      var et,
          rt = (i(nt, et = _), nt.prototype.encode = function (t) {
        return J(this.coders, t);
      }, nt.prototype.decode = function (t, e) {
        var r = $(this.coders, t, e);
        return r.value = this.coerceFunc(this.type, r.value), r;
      }, nt);

      function nt(t, e, r) {
        var n = this,
            i = !1,
            o = [];
        e.forEach(function (t) {
          t.dynamic && (i = !0), o.push(t.type);
        });
        var s = "tuple(" + o.join(",") + ")";
        return (n = et.call(this, t, "tuple", s, r, i) || this).coders = e, n;
      }

      function it(t) {
        t = t.trim();

        for (var e = [], r = "", n = 0, i = 0; i < t.length; i++) {
          var o = t[i];
          if ("," === o && 0 === n) e.push(r), r = "";else if (r += o, "(" === o) n++;else if (")" === o && -1 == --n) throw new Error("unbalanced parenthsis");
        }

        return r && e.push(r), e;
      }

      var ot = {
        address: B,
        bool: I,
        string: Y,
        bytes: z
      };

      function st(t, e) {
        var r,
            n = ot[e.type];
        if (n) return new n(t, e.name);
        if (r = e.type.match(p)) return (0 === (i = parseInt(r[2] || "256")) || 256 < i || i % 8 != 0) && a.throwError("invalid " + r[1] + " bit length", a.INVALID_ARGUMENT, {
          arg: "param",
          value: e
        }), new N(t, i / 8, "int" === r[1], e.name);
        if (r = e.type.match(d)) return (0 === (i = parseInt(r[1])) || 32 < i) && a.throwError("invalid bytes length", a.INVALID_ARGUMENT, {
          arg: "param",
          value: e
        }), new L(t, i, e.name);

        if (r = e.type.match(m)) {
          var i = parseInt(r[2] || "-1");
          return (e = c.shallowCopy(e)).type = r[1], e = c.deepCopy(e), new Q(t, st(t, e), i, e.name);
        }

        return "tuple" === e.type.substring(0, 5) ? function (t, e, r) {
          var n = [];
          return (e = e || []).forEach(function (e) {
            n.push(st(t, e));
          }), new rt(t, n, r);
        }(t, e.components, e.name) : "" === e.type ? new A(t, e.name) : (a.throwError("invalid type", a.INVALID_ARGUMENT, {
          arg: "type",
          value: e.type
        }), null);
      }

      var at = (ut.prototype.encode = function (t, e) {
        t.length !== e.length && a.throwError("types/values length mismatch", a.INVALID_ARGUMENT, {
          count: {
            types: t.length,
            values: e.length
          },
          value: {
            types: t,
            values: e
          }
        });
        var r = [];
        return t.forEach(function (t) {
          var e;
          e = "string" == typeof t ? w(t) : t, r.push(st(this.coerceFunc, e));
        }, this), l.hexlify(new rt(this.coerceFunc, r, "_").encode(e));
      }, ut.prototype.decode = function (t, e) {
        var r = [];
        return t.forEach(function (t) {
          var e;
          e = "string" == typeof t ? w(t) : c.deepCopy(t), r.push(st(this.coerceFunc, e));
        }, this), new rt(this.coerceFunc, r, "_").decode(l.arrayify(e), 0).value;
      }, ut);

      function ut(t) {
        a.checkNew(this, ut), t = t || r.defaultCoerceFunc, c.defineReadOnly(this, "coerceFunc", t);
      }

      r.AbiCoder = at, r.defaultAbiCoder = new at();
    }, {
      "../constants": 3,
      "../errors": 5,
      "./address": 60,
      "./bignumber": 63,
      "./bytes": 64,
      "./properties": 74,
      "./utf8": 85
    }],
    60: [function (t, e, r) {
      var n = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {
          default: t
        };
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = n(t("bn.js")),
          o = t("./bytes"),
          s = t("./keccak256"),
          a = t("./rlp"),
          u = t("../errors");

      function h(t) {
        "string" == typeof t && t.match(/^0x[0-9A-Fa-f]{40}$/) || u.throwError("invalid address", u.INVALID_ARGUMENT, {
          arg: "address",
          value: t
        });

        for (var e = (t = t.toLowerCase()).substring(2).split(""), r = new Uint8Array(40), n = 0; n < 40; n++) r[n] = e[n].charCodeAt(0);

        r = o.arrayify(s.keccak256(r));

        for (var i = 0; i < 40; i += 2) 8 <= r[i >> 1] >> 4 && (e[i] = e[i].toUpperCase()), 8 <= (15 & r[i >> 1]) && (e[i + 1] = e[i + 1].toUpperCase());

        return "0x" + e.join("");
      }

      for (var l = {}, f = 0; f < 10; f++) l[String(f)] = String(f);

      for (f = 0; f < 26; f++) l[String.fromCharCode(65 + f)] = String(10 + f);

      var c,
          d = Math.floor((c = 9007199254740991, Math.log10 ? Math.log10(c) : Math.log(c) / Math.LN10));

      function p(t) {
        t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00";
        var e = "";

        for (t.split("").forEach(function (t) {
          e += l[t];
        }); e.length >= d;) {
          var r = e.substring(0, d);
          e = parseInt(r, 10) % 97 + e.substring(r.length);
        }

        for (var n = String(98 - parseInt(e, 10) % 97); n.length < 2;) n = "0" + n;

        return n;
      }

      function m(t) {
        var e = null;
        if ("string" != typeof t && u.throwError("invalid address", u.INVALID_ARGUMENT, {
          arg: "address",
          value: t
        }), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) "0x" !== t.substring(0, 2) && (t = "0x" + t), e = h(t), t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && u.throwError("bad address checksum", u.INVALID_ARGUMENT, {
          arg: "address",
          value: t
        });else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          for (t.substring(2, 4) !== p(t) && u.throwError("bad icap checksum", u.INVALID_ARGUMENT, {
            arg: "address",
            value: t
          }), e = new i.default.BN(t.substring(4), 36).toString(16); e.length < 40;) e = "0" + e;

          e = h("0x" + e);
        } else u.throwError("invalid address", u.INVALID_ARGUMENT, {
          arg: "address",
          value: t
        });
        return e;
      }

      r.getAddress = m, r.getIcapAddress = function (t) {
        for (var e = new i.default.BN(m(t).substring(2), 16).toString(36).toUpperCase(); e.length < 30;) e = "0" + e;

        return "XE" + p("XE00" + e) + e;
      }, r.getContractAddress = function (t) {
        if (!t.from) throw new Error("missing from address");
        var e = t.nonce;
        return m("0x" + s.keccak256(a.encode([m(t.from), o.stripZeros(o.hexlify(e))])).substring(26));
      }, r.getCreate2Address = function (t) {
        var e = t.initCodeHash;
        t.initCode && (e ? s.keccak256(t.initCode) !== e && u.throwError("initCode/initCodeHash mismatch", u.INVALID_ARGUMENT, {
          arg: "options",
          value: t
        }) : e = s.keccak256(t.initCode)), e || u.throwError("missing initCode or initCodeHash", u.INVALID_ARGUMENT, {
          arg: "options",
          value: t
        });
        var r = m(t.from),
            n = o.arrayify(t.salt);
        return 32 !== n.length && u.throwError("invalid salt", u.INVALID_ARGUMENT, {
          arg: "options",
          value: t
        }), m("0x" + s.keccak256(o.concat(["0xff", r, n, e])).substring(26));
      };
    }, {
      "../errors": 5,
      "./bytes": 64,
      "./keccak256": 71,
      "./rlp": 76,
      "bn.js": 9
    }],
    61: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("../utils/bytes");
      e.exports = {
        decode: function (t) {
          t = atob(t);

          for (var e = [], r = 0; r < t.length; r++) e.push(t.charCodeAt(r));

          return n.arrayify(e);
        },
        encode: function (t) {
          t = n.arrayify(t);

          for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);

          return btoa(e);
        }
      };
    }, {
      "../utils/bytes": 64
    }],
    62: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("./bytes"),
          i = t("./properties"),
          o = (s.prototype.encode = function (t) {
        var e = n.arrayify(t);
        if (0 === e.length) return "";

        for (var r = [0], i = 0; i < e.length; ++i) {
          for (var o = e[i], s = 0; s < r.length; ++s) o += r[s] << 8, r[s] = o % this.base, o = o / this.base | 0;

          for (; 0 < o;) r.push(o % this.base), o = o / this.base | 0;
        }

        for (var a = "", u = 0; 0 === e[u] && u < e.length - 1; ++u) a += this._leader;

        for (var h = r.length - 1; 0 <= h; --h) a += this.alphabet[r[h]];

        return a;
      }, s.prototype.decode = function (t) {
        if ("string" != typeof t) throw new TypeError("Expected String");
        var e = [];
        if (0 === t.length) return new Uint8Array(e);
        e.push(0);

        for (var r = 0; r < t.length; r++) {
          var i = this._alphabetMap[t[r]];
          if (void 0 === i) throw new Error("Non-base" + this.base + " character");

          for (var o = i, s = 0; s < e.length; ++s) o += e[s] * this.base, e[s] = 255 & o, o >>= 8;

          for (; 0 < o;) e.push(255 & o), o >>= 8;
        }

        for (var a = 0; t[a] === this._leader && a < t.length - 1; ++a) e.push(0);

        return n.arrayify(new Uint8Array(e.reverse()));
      }, s);

      function s(t) {
        i.defineReadOnly(this, "alphabet", t), i.defineReadOnly(this, "base", t.length), i.defineReadOnly(this, "_alphabetMap", {}), i.defineReadOnly(this, "_leader", t.charAt(0));

        for (var e = 0; e < t.length; e++) this._alphabetMap[t.charAt(e)] = e;
      }

      var a = new (r.BaseX = o)("abcdefghijklmnopqrstuvwxyz234567");
      r.Base32 = a;
      var u = new o("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
      r.Base58 = u;
    }, {
      "./bytes": 64,
      "./properties": 74
    }],
    63: [function (t, e, r) {
      var n = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {
          default: t
        };
      },
          i = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var o = n(t("bn.js")),
          s = t("./bytes"),
          a = t("./properties"),
          u = i(t("../errors")),
          h = new o.default.BN(-1);

      function l(t) {
        var e = t.toString(16);
        return "-" === e[0] ? e.length % 2 == 0 ? "-0x0" + e.substring(1) : "-0x" + e.substring(1) : e.length % 2 == 1 ? "0x0" + e : "0x" + e;
      }

      function f(t) {
        return d(v(t));
      }

      function c(t) {
        return new p(l(t));
      }

      function d(t) {
        var e = t._hex;
        return "-" === e[0] ? new o.default.BN(e.substring(3), 16).mul(h) : new o.default.BN(e.substring(2), 16);
      }

      var p = (m.prototype.fromTwos = function (t) {
        return c(d(this).fromTwos(t));
      }, m.prototype.toTwos = function (t) {
        return c(d(this).toTwos(t));
      }, m.prototype.abs = function () {
        return "-" === this._hex[0] ? c(d(this).mul(h)) : this;
      }, m.prototype.add = function (t) {
        return c(d(this).add(f(t)));
      }, m.prototype.sub = function (t) {
        return c(d(this).sub(f(t)));
      }, m.prototype.div = function (t) {
        return v(t).isZero() && u.throwError("division by zero", u.NUMERIC_FAULT, {
          operation: "divide",
          fault: "division by zero"
        }), c(d(this).div(f(t)));
      }, m.prototype.mul = function (t) {
        return c(d(this).mul(f(t)));
      }, m.prototype.mod = function (t) {
        return c(d(this).mod(f(t)));
      }, m.prototype.pow = function (t) {
        return c(d(this).pow(f(t)));
      }, m.prototype.maskn = function (t) {
        return c(d(this).maskn(t));
      }, m.prototype.eq = function (t) {
        return d(this).eq(f(t));
      }, m.prototype.lt = function (t) {
        return d(this).lt(f(t));
      }, m.prototype.lte = function (t) {
        return d(this).lte(f(t));
      }, m.prototype.gt = function (t) {
        return d(this).gt(f(t));
      }, m.prototype.gte = function (t) {
        return d(this).gte(f(t));
      }, m.prototype.isZero = function () {
        return d(this).isZero();
      }, m.prototype.toNumber = function () {
        try {
          return d(this).toNumber();
        } catch (t) {
          u.throwError("overflow", u.NUMERIC_FAULT, {
            operation: "setValue",
            fault: "overflow",
            details: t.message
          });
        }

        return null;
      }, m.prototype.toString = function () {
        return d(this).toString(10);
      }, m.prototype.toHexString = function () {
        return this._hex;
      }, m.isBigNumber = function (t) {
        return a.isType(t, "BigNumber");
      }, m);

      function m(t) {
        if (u.checkNew(this, m), a.setType(this, "BigNumber"), "string" == typeof t) s.isHexString(t) ? ("0x" == t && (t = "0x0"), a.defineReadOnly(this, "_hex", t)) : "-" === t[0] && s.isHexString(t.substring(1)) ? a.defineReadOnly(this, "_hex", t) : t.match(/^-?[0-9]*$/) ? ("" == t && (t = "0"), a.defineReadOnly(this, "_hex", l(new o.default.BN(t)))) : u.throwError("invalid BigNumber string value", u.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        });else if ("number" == typeof t) {
          parseInt(String(t)) !== t && u.throwError("underflow", u.NUMERIC_FAULT, {
            operation: "setValue",
            fault: "underflow",
            value: t,
            outputValue: parseInt(String(t))
          });

          try {
            a.defineReadOnly(this, "_hex", l(new o.default.BN(t)));
          } catch (t) {
            u.throwError("overflow", u.NUMERIC_FAULT, {
              operation: "setValue",
              fault: "overflow",
              details: t.message
            });
          }
        } else t instanceof m ? a.defineReadOnly(this, "_hex", t._hex) : t.toHexString ? a.defineReadOnly(this, "_hex", l(f(t.toHexString()))) : t._hex && s.isHexString(t._hex) ? a.defineReadOnly(this, "_hex", t._hex) : s.isArrayish(t) ? a.defineReadOnly(this, "_hex", l(new o.default.BN(s.hexlify(t).substring(2), 16))) : u.throwError("invalid BigNumber value", u.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        });
      }

      function v(t) {
        return p.isBigNumber(t) ? t : new p(t);
      }

      r.BigNumber = p, r.bigNumberify = v;
    }, {
      "../errors": 5,
      "./bytes": 64,
      "./properties": 74,
      "bn.js": 9
    }],
    64: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = n(t("../errors"));

      function o(t) {
        return !!t.toHexString;
      }

      function s(t) {
        return t.slice || (t.slice = function () {
          var e = Array.prototype.slice.call(arguments);
          return s(new Uint8Array(Array.prototype.slice.apply(t, e)));
        }), t;
      }

      function a(t) {
        if (!t || parseInt(String(t.length)) != t.length || "string" == typeof t) return !1;

        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          if (r < 0 || 256 <= r || parseInt(String(r)) != r) return !1;
        }

        return !0;
      }

      function u(t) {
        if (null == t && i.throwError("cannot convert null value to array", i.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        }), o(t) && (t = t.toHexString()), "string" != typeof t) return a(t) ? s(new Uint8Array(t)) : (i.throwError("invalid arrayify value", null, {
          arg: "value",
          value: t,
          type: typeof t
        }), null);
        var e = t.match(/^(0x)?[0-9a-fA-F]*$/);
        e || i.throwError("invalid hexidecimal string", i.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        }), "0x" !== e[1] && i.throwError("hex string must have 0x prefix", i.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        }), (t = t.substring(2)).length % 2 && (t = "0" + t);

        for (var r = [], n = 0; n < t.length; n += 2) r.push(parseInt(t.substr(n, 2), 16));

        return s(new Uint8Array(r));
      }

      function h(t) {
        for (var e = [], r = 0, n = 0; n < t.length; n++) {
          var i = u(t[n]);
          e.push(i), r += i.length;
        }

        var o = new Uint8Array(r),
            a = 0;

        for (n = 0; n < e.length; n++) o.set(e[n], a), a += e[n].length;

        return s(o);
      }

      function l(t, e) {
        return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/) || e && t.length !== 2 + 2 * e);
      }

      r.isHexable = o, r.isArrayish = a, r.arrayify = u, r.concat = h, r.stripZeros = function (t) {
        var e = u(t);
        if (0 === e.length) return e;

        for (var r = 0; 0 === e[r];) r++;

        return r && (e = e.slice(r)), e;
      }, r.padZeros = function (t, e) {
        if (e < (t = u(t)).length) throw new Error("cannot pad");
        var r = new Uint8Array(e);
        return r.set(t, e - t.length), s(r);
      }, r.isHexString = l;
      var f = "0123456789abcdef";

      function c(t) {
        if (o(t)) return t.toHexString();

        if ("number" == typeof t) {
          t < 0 && i.throwError("cannot hexlify negative value", i.INVALID_ARGUMENT, {
            arg: "value",
            value: t
          }), 9007199254740991 <= t && i.throwError("out-of-range", i.NUMERIC_FAULT, {
            operartion: "hexlify",
            fault: "out-of-safe-range"
          });

          for (var e = ""; t;) e = f[15 & t] + e, t = Math.floor(t / 16);

          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }

        if ("string" == typeof t) {
          var r = t.match(/^(0x)?[0-9a-fA-F]*$/);
          return r || i.throwError("invalid hexidecimal string", i.INVALID_ARGUMENT, {
            arg: "value",
            value: t
          }), "0x" !== r[1] && i.throwError("hex string must have 0x prefix", i.INVALID_ARGUMENT, {
            arg: "value",
            value: t
          }), t.length % 2 && (t = "0x0" + t.substring(2)), t;
        }

        if (a(t)) {
          for (var n = [], s = 0; s < t.length; s++) {
            var u = t[s];
            n.push(f[(240 & u) >> 4] + f[15 & u]);
          }

          return "0x" + n.join("");
        }

        return i.throwError("invalid hexlify value", null, {
          arg: "value",
          value: t
        }), "never";
      }

      function d(t, e) {
        for (l(t) || i.throwError("invalid hex string", i.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        }); t.length < 2 * e + 2;) t = "0x0" + t.substring(2);

        return t;
      }

      function p(t) {
        var e = 0,
            r = "0x",
            n = "0x";

        if (function (t) {
          return t && null != t.r && null != t.s;
        }(t)) {
          null == t.v && null == t.recoveryParam && i.throwError("at least on of recoveryParam or v must be specified", i.INVALID_ARGUMENT, {
            argument: "signature",
            value: t
          }), r = d(t.r, 32), n = d(t.s, 32), "string" == typeof (e = t.v) && (e = parseInt(e, 16));
          var o = t.recoveryParam;
          null == o && null != t.v && (o = 1 - e % 2), e = 27 + o;
        } else {
          var s = u(t);
          if (65 !== s.length) throw new Error("invalid signature");
          r = c(s.slice(0, 32)), n = c(s.slice(32, 64)), 27 !== (e = s[64]) && 28 !== e && (e = 27 + e % 2);
        }

        return {
          r: r,
          s: n,
          recoveryParam: e - 27,
          v: e
        };
      }

      r.hexlify = c, r.hexDataLength = function (t) {
        return l(t) && t.length % 2 == 0 ? (t.length - 2) / 2 : null;
      }, r.hexDataSlice = function (t, e, r) {
        return l(t) || i.throwError("invalid hex data", i.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        }), t.length % 2 != 0 && i.throwError("hex data length must be even", i.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        }), e = 2 + 2 * e, null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e);
      }, r.hexStripZeros = function (t) {
        for (l(t) || i.throwError("invalid hex string", i.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        }); 3 < t.length && "0x0" === t.substring(0, 3);) t = "0x" + t.substring(3);

        return t;
      }, r.hexZeroPad = d, r.splitSignature = p, r.joinSignature = function (t) {
        return c(h([(t = p(t)).r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]));
      };
    }, {
      "../errors": 5
    }],
    65: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = n(t("../errors")),
          o = t("./bytes"),
          s = t("./utf8"),
          a = t("./keccak256"),
          u = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
          h = new RegExp("^((.*)\\.)?([^.]+)$"),
          l = new RegExp("^[a-z0-9.-]*$");
      r.namehash = function (t) {
        "string" != typeof t && i.throwError("invalid address - " + String(t), i.INVALID_ARGUMENT, {
          argument: "name",
          value: t
        }), (t = t.toLowerCase()).match(l) || i.throwError("contains invalid UseSTD3ASCIIRules characters", i.INVALID_ARGUMENT, {
          argument: "name",
          value: t
        });

        for (var e = u; t.length;) {
          var r = t.match(h),
              n = s.toUtf8Bytes(r[3]);
          e = a.keccak256(o.concat([e, a.keccak256(n)])), t = r[2] || "";
        }

        return o.hexlify(e);
      }, r.id = function (t) {
        return a.keccak256(s.toUtf8Bytes(t));
      }, r.hashMessage = function (t) {
        return a.keccak256(o.concat([s.toUtf8Bytes("Ethereum Signed Message:\n"), s.toUtf8Bytes(String(t.length)), "string" == typeof t ? s.toUtf8Bytes(t) : t]));
      };
    }, {
      "../errors": 5,
      "./bytes": 64,
      "./keccak256": 71,
      "./utf8": 85
    }],
    66: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = n(t("../errors")),
          o = t("../wordlists/lang-en"),
          s = t("./basex"),
          a = t("./bytes"),
          u = t("./bignumber"),
          h = t("./utf8"),
          l = t("./pbkdf2"),
          f = t("./hmac"),
          c = t("./properties"),
          d = t("./secp256k1"),
          p = t("./sha2"),
          m = u.bigNumberify("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
          v = h.toUtf8Bytes("Bitcoin seed"),
          g = 2147483648;

      function y(t) {
        return (1 << t) - 1 << 8 - t;
      }

      function w(t) {
        return a.hexZeroPad(a.hexlify(t), 32);
      }

      function b(t) {
        var e = a.hexDataSlice(p.sha256(p.sha256(t)), 0, 4);
        return s.Base58.encode(a.concat([t, e]));
      }

      var _ = {};
      r.defaultPath = "m/44'/60'/0'/0/0";
      var M = (Object.defineProperty(S.prototype, "extendedKey", {
        get: function () {
          if (256 <= this.depth) throw new Error("Depth too large!");
          return b(a.concat([null != this.privateKey ? "0x0488ADE4" : "0x0488B21E", a.hexlify(this.depth), this.parentFingerprint, a.hexZeroPad(a.hexlify(this.index), 4), this.chainCode, null != this.privateKey ? a.concat(["0x00", this.privateKey]) : this.publicKey]));
        },
        enumerable: !0,
        configurable: !0
      }), S.prototype.neuter = function () {
        return new S(_, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, null, this.path);
      }, S.prototype._derive = function (t) {
        if (4294967295 < t) throw new Error("invalid index - " + String(t));
        var e = this.path;
        e && (e += "/" + (t & ~g));
        var r = new Uint8Array(37);

        if (t & g) {
          if (!this.privateKey) throw new Error("cannot derive child of neutered node");
          r.set(a.arrayify(this.privateKey), 1), e && (e += "'");
        } else r.set(a.arrayify(this.publicKey));

        for (var n = 24; 0 <= n; n -= 8) r[33 + (n >> 3)] = t >> 24 - n & 255;

        var i = f.computeHmac(f.SupportedAlgorithms.sha512, this.chainCode, r),
            o = i.slice(0, 32),
            s = i.slice(32),
            h = null,
            l = null;
        return this.privateKey ? h = w(u.bigNumberify(o).add(this.privateKey).mod(m)) : l = new d.KeyPair(a.hexlify(o))._addPoint(this.publicKey), new S(_, h, l, this.fingerprint, w(s), t, this.depth + 1, this.mnemonic, e);
      }, S.prototype.derivePath = function (t) {
        var e = t.split("/");
        if (0 === e.length || "m" === e[0] && 0 !== this.depth) throw new Error("invalid path - " + t);
        "m" === e[0] && e.shift();

        for (var r = this, n = 0; n < e.length; n++) {
          var i = e[n];

          if (i.match(/^[0-9]+'$/)) {
            var o = parseInt(i.substring(0, i.length - 1));
            if (g <= o) throw new Error("invalid path index - " + i);
            r = r._derive(g + o);
          } else {
            if (!i.match(/^[0-9]+$/)) throw new Error("invalid path component - " + i);
            if (o = parseInt(i), g <= o) throw new Error("invalid path index - " + i);
            r = r._derive(o);
          }
        }

        return r;
      }, S.isHDNode = function (t) {
        return c.isType(t, "HDNode");
      }, S);

      function S(t, e, r, n, o, s, u, h, l) {
        if (i.checkNew(this, S), t !== _) throw new Error("HDNode constructor cannot be called directly");

        if (e) {
          var f = new d.KeyPair(e);
          c.defineReadOnly(this, "privateKey", f.privateKey), c.defineReadOnly(this, "publicKey", f.compressedPublicKey);
        } else c.defineReadOnly(this, "privateKey", null), c.defineReadOnly(this, "publicKey", a.hexlify(r));

        c.defineReadOnly(this, "parentFingerprint", n), c.defineReadOnly(this, "fingerprint", a.hexDataSlice(p.ripemd160(p.sha256(this.publicKey)), 0, 4)), c.defineReadOnly(this, "address", d.computeAddress(this.publicKey)), c.defineReadOnly(this, "chainCode", o), c.defineReadOnly(this, "index", s), c.defineReadOnly(this, "depth", u), c.defineReadOnly(this, "mnemonic", h), c.defineReadOnly(this, "path", l), c.setType(this, "HDNode");
      }

      function E(t, e) {
        var r = a.arrayify(t);
        if (r.length < 16 || 64 < r.length) throw new Error("invalid seed");
        var n = a.arrayify(f.computeHmac(f.SupportedAlgorithms.sha512, v, r));
        return new M(_, w(n.slice(0, 32)), null, "0x00000000", w(n.slice(32)), 0, 0, e, "m");
      }

      function k(t, e) {
        e = e || "";
        var r = h.toUtf8Bytes("mnemonic" + e, h.UnicodeNormalizationForm.NFKD);
        return a.hexlify(l.pbkdf2(h.toUtf8Bytes(t, h.UnicodeNormalizationForm.NFKD), r, 2048, 64, "sha512"));
      }

      function A(t, e) {
        e = e || o.langEn, i.checkNormalize();
        var r = e.split(t);
        if (r.length % 3 != 0) throw new Error("invalid mnemonic");

        for (var n = a.arrayify(new Uint8Array(Math.ceil(11 * r.length / 8))), s = 0, u = 0; u < r.length; u++) {
          var h = e.getWordIndex(r[u].normalize("NFKD"));
          if (-1 === h) throw new Error("invalid mnemonic");

          for (var l = 0; l < 11; l++) h & 1 << 10 - l && (n[s >> 3] |= 1 << 7 - s % 8), s++;
        }

        var f = 32 * r.length / 3,
            c = y(r.length / 3),
            d = a.arrayify(p.sha256(n.slice(0, f / 8)))[0];
        if ((d &= c) != (n[n.length - 1] & c)) throw new Error("invalid checksum");
        return a.hexlify(n.slice(0, f / 8));
      }

      function x(t, e) {
        if ((t = a.arrayify(t)).length % 4 != 0 || t.length < 16 || 32 < t.length) throw new Error("invalid entropy");

        for (var r = [0], n = 11, i = 0; i < t.length; i++) 8 < n ? (r[r.length - 1] <<= 8, r[r.length - 1] |= t[i], n -= 8) : (r[r.length - 1] <<= n, r[r.length - 1] |= t[i] >> 8 - n, r.push(t[i] & (1 << 8 - n) - 1), n += 3);

        var s = a.arrayify(p.sha256(t))[0],
            u = t.length / 4;
        return s &= y(u), r[r.length - 1] <<= u, r[r.length - 1] |= s >> 8 - u, (e = e || o.langEn).join(r.map(function (t) {
          return e.getWord(t);
        }));
      }

      r.HDNode = M, r.fromExtendedKey = function (t) {
        var e = s.Base58.decode(t);
        82 === e.length && b(e.slice(0, 78)) === t || i.throwError("invalid extended key", i.INVALID_ARGUMENT, {
          argument: "extendedKey",
          value: "[REDACTED]"
        });
        var r = e[4],
            n = a.hexlify(e.slice(5, 9)),
            o = parseInt(a.hexlify(e.slice(9, 13)).substring(2), 16),
            u = a.hexlify(e.slice(13, 45)),
            h = e.slice(45, 78);

        switch (a.hexlify(e.slice(0, 4))) {
          case "0x0488b21e":
          case "0x043587cf":
            return new M(_, null, a.hexlify(h), n, u, o, r, null, null);

          case "0x0488ade4":
          case "0x04358394":
            if (0 !== h[0]) break;
            return new M(_, a.hexlify(h.slice(1)), null, n, u, o, r, null, null);
        }

        return i.throwError("invalid extended key", i.INVALID_ARGUMENT, {
          argument: "extendedKey",
          value: "[REDACTED]"
        });
      }, r.fromMnemonic = function (t, e, r) {
        return E(k(t = x(A(t, e), e), r), t);
      }, r.fromSeed = function (t) {
        return E(t, null);
      }, r.mnemonicToSeed = k, r.mnemonicToEntropy = A, r.entropyToMnemonic = x, r.isValidMnemonic = function (t, e) {
        try {
          return A(t, e), !0;
        } catch (t) {}

        return !1;
      };
    }, {
      "../errors": 5,
      "../wordlists/lang-en": 90,
      "./basex": 62,
      "./bignumber": 63,
      "./bytes": 64,
      "./hmac": 67,
      "./pbkdf2": 73,
      "./properties": 74,
      "./secp256k1": 77,
      "./sha2": 79,
      "./utf8": 85
    }],
    67: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i,
          o,
          s = n(t("hash.js")),
          a = t("../utils/bytes"),
          u = n(t("../errors"));
      (o = i = r.SupportedAlgorithms || (r.SupportedAlgorithms = {})).sha256 = "sha256", o.sha512 = "sha512", r.computeHmac = function (t, e, r) {
        return i[t] || u.throwError("unsupported algorithm " + t, u.UNSUPPORTED_OPERATION, {
          operation: "hmac",
          algorithm: t
        }), a.arrayify(s.hmac(s[t], a.arrayify(e)).update(a.arrayify(r)).digest());
      };
    }, {
      "../errors": 5,
      "../utils/bytes": 64,
      "hash.js": 26
    }],
    68: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = t("./abi-coder");
      r.AbiCoder = i.AbiCoder, r.defaultAbiCoder = i.defaultAbiCoder, r.formatSignature = i.formatSignature, r.formatParamType = i.formatParamType, r.parseSignature = i.parseSignature, r.parseParamType = i.parseParamType;
      var o = t("./address");
      r.getAddress = o.getAddress, r.getContractAddress = o.getContractAddress, r.getCreate2Address = o.getCreate2Address, r.getIcapAddress = o.getIcapAddress;
      var s = n(t("./base64"));
      r.base64 = s;
      var a = t("./bignumber");
      r.BigNumber = a.BigNumber, r.bigNumberify = a.bigNumberify;
      var u = t("./bytes");
      r.arrayify = u.arrayify, r.concat = u.concat, r.hexDataSlice = u.hexDataSlice, r.hexDataLength = u.hexDataLength, r.hexlify = u.hexlify, r.hexStripZeros = u.hexStripZeros, r.hexZeroPad = u.hexZeroPad, r.isHexString = u.isHexString, r.joinSignature = u.joinSignature, r.padZeros = u.padZeros, r.splitSignature = u.splitSignature, r.stripZeros = u.stripZeros;
      var h = t("./hash");
      r.hashMessage = h.hashMessage, r.id = h.id, r.namehash = h.namehash;
      var l = n(t("./hdnode"));
      r.HDNode = l;
      var f = t("./interface");
      r.Interface = f.Interface;
      var c = t("./json-wallet");
      r.getJsonWalletAddress = c.getJsonWalletAddress;
      var d = t("./keccak256");
      r.keccak256 = d.keccak256;
      var p = t("./sha2");
      r.sha256 = p.sha256;
      var m = t("./solidity");
      r.solidityKeccak256 = m.keccak256, r.solidityPack = m.pack, r.soliditySha256 = m.sha256;
      var v = t("./random-bytes");
      r.randomBytes = v.randomBytes;
      var g = t("./networks");
      r.getNetwork = g.getNetwork;
      var y = t("./properties");
      r.checkProperties = y.checkProperties, r.deepCopy = y.deepCopy, r.defineReadOnly = y.defineReadOnly, r.resolveProperties = y.resolveProperties, r.shallowCopy = y.shallowCopy;
      var w = n(t("./rlp"));
      r.RLP = w;
      var b = t("./secp256k1");
      r.computeAddress = b.computeAddress, r.computePublicKey = b.computePublicKey, r.recoverAddress = b.recoverAddress, r.recoverPublicKey = b.recoverPublicKey, r.verifyMessage = b.verifyMessage;

      var _ = t("./signing-key");

      r.SigningKey = _.SigningKey;
      var M = t("./transaction");
      r.populateTransaction = M.populateTransaction;
      var S = t("./transaction");
      r.parseTransaction = S.parse, r.serializeTransaction = S.serialize;
      var E = t("./utf8");
      r.formatBytes32String = E.formatBytes32String, r.parseBytes32String = E.parseBytes32String, r.toUtf8Bytes = E.toUtf8Bytes, r.toUtf8String = E.toUtf8String;
      var k = t("./units");
      r.commify = k.commify, r.formatEther = k.formatEther, r.parseEther = k.parseEther, r.formatUnits = k.formatUnits, r.parseUnits = k.parseUnits;
      var A = t("./web");
      r.fetchJson = A.fetchJson, r.poll = A.poll;
      var x = t("./hmac");
      r.SupportedAlgorithms = x.SupportedAlgorithms;
      var T = t("./utf8");
      r.UnicodeNormalizationForm = T.UnicodeNormalizationForm;
      var N = t("./wordlist");
      r.Wordlist = N.Wordlist;
    }, {
      "./abi-coder": 59,
      "./address": 60,
      "./base64": 61,
      "./bignumber": 63,
      "./bytes": 64,
      "./hash": 65,
      "./hdnode": 66,
      "./hmac": 67,
      "./interface": 69,
      "./json-wallet": 70,
      "./keccak256": 71,
      "./networks": 72,
      "./properties": 74,
      "./random-bytes": 75,
      "./rlp": 76,
      "./secp256k1": 77,
      "./sha2": 79,
      "./signing-key": 81,
      "./solidity": 82,
      "./transaction": 83,
      "./units": 84,
      "./utf8": 85,
      "./web": 86,
      "./wordlist": 87
    }],
    69: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
          o = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      function s(t) {
        for (var e in p.setType(this, "Description"), t) p.defineReadOnly(this, e, p.deepCopy(t[e], !0));

        Object.freeze(this);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      });

      var a,
          u = t("./address"),
          h = t("./abi-coder"),
          l = t("./bignumber"),
          f = t("./bytes"),
          c = t("./hash"),
          d = t("./keccak256"),
          p = t("./properties"),
          m = o(t("../errors")),
          v = function (t) {
        p.setType(this, "Indexed"), p.defineReadOnly(this, "hash", t);
      },
          g = (i(y, a = s), y.prototype.encode = function (t, e) {
        f.isHexString(t) || m.throwError("invalid contract bytecode", m.INVALID_ARGUMENT, {
          arg: "bytecode",
          value: t
        }), m.checkArgumentCount(e.length, this.inputs.length, " in Interface constructor");

        try {
          return t + h.defaultAbiCoder.encode(this.inputs, e).substring(2);
        } catch (t) {
          m.throwError("invalid constructor argument", m.INVALID_ARGUMENT, {
            arg: t.arg,
            reason: t.reason,
            value: t.value
          });
        }

        return null;
      }, y);

      function y() {
        return null !== a && a.apply(this, arguments) || this;
      }

      var w,
          b = (i(_, w = s), _.prototype.encode = function (t) {
        m.checkArgumentCount(t.length, this.inputs.length, " in interface function " + this.name);

        try {
          return this.sighash + h.defaultAbiCoder.encode(this.inputs, t).substring(2);
        } catch (t) {
          m.throwError("invalid input argument", m.INVALID_ARGUMENT, {
            arg: t.arg,
            reason: t.reason,
            value: t.value
          });
        }

        return null;
      }, _.prototype.decode = function (t) {
        try {
          return h.defaultAbiCoder.decode(this.outputs, f.arrayify(t));
        } catch (e) {
          m.throwError("invalid data for function output", m.INVALID_ARGUMENT, {
            arg: "data",
            errorArg: e.arg,
            errorValue: e.value,
            value: t,
            reason: e.reason
          });
        }
      }, _);

      function _() {
        return null !== w && w.apply(this, arguments) || this;
      }

      var M,
          S = (i(E, M = s), E);

      function E() {
        return null !== M && M.apply(this, arguments) || this;
      }

      var k,
          A = (i(x, k = s), x.prototype.encodeTopics = function (t) {
        var e = this;
        t.length > this.inputs.length && m.throwError("too many arguments for " + this.name, m.UNEXPECTED_ARGUMENT, {
          maxCount: t.length,
          expectedCount: this.inputs.length
        });
        var r = [];

        for (this.anonymous || r.push(this.topic), t.forEach(function (t, n) {
          var i = e.inputs[n];
          i.indexed ? null == t ? r.push(null) : "string" === i.type ? r.push(c.id(t)) : "bytes" === i.type ? r.push(d.keccak256(t)) : -1 !== i.type.indexOf("[") || "tuple" === i.type.substring(0, 5) ? m.throwError("filtering with tuples or arrays not implemented yet; bug us on GitHub", m.NOT_IMPLEMENTED, {
            operation: "filter(array|tuple)"
          }) : ("address" === i.type && u.getAddress(t), r.push(f.hexZeroPad(f.hexlify(t), 32).toLowerCase())) : null != t && m.throwError("cannot filter non-indexed parameters; must be null", m.INVALID_ARGUMENT, {
            argument: i.name || n,
            value: t
          });
        }); r.length && null === r[r.length - 1];) r.pop();

        return r;
      }, x.prototype.decode = function (t, e) {
        null == e || this.anonymous || (e = e.slice(1));
        var r = [],
            n = [],
            i = [];
        if (this.inputs.forEach(function (t, e) {
          t.indexed ? "string" === t.type || "bytes" === t.type || 0 <= t.type.indexOf("[") || "tuple" === t.type.substring(0, 5) ? (r.push({
            type: "bytes32",
            name: t.name || ""
          }), i.push(!0)) : (r.push(t), i.push(!1)) : (n.push(t), i.push(!1));
        }), null != e) var o = h.defaultAbiCoder.decode(r, f.concat(e));
        var s = h.defaultAbiCoder.decode(n, f.arrayify(t)),
            a = {},
            u = 0,
            l = 0;
        return this.inputs.forEach(function (t, r) {
          t.indexed ? null == e ? a[r] = new v(null) : i[r] ? a[r] = new v(o[l++]) : a[r] = o[l++] : a[r] = s[u++], t.name && (a[t.name] = a[r]);
        }), a.length = this.inputs.length, new S(a);
      }, x);

      function x() {
        return null !== k && k.apply(this, arguments) || this;
      }

      var T,
          N = (i(P, T = s), P);

      function P() {
        return null !== T && T.apply(this, arguments) || this;
      }

      var R,
          O = (i(I, R = s), I);

      function I() {
        return null !== R && R.apply(this, arguments) || this;
      }

      function C(t) {
        switch (t.type) {
          case "constructor":
            var e = new g({
              inputs: t.inputs,
              payable: null == t.payable || !!t.payable
            });
            this.deployFunction || (this.deployFunction = e);
            break;

          case "function":
            var r = h.formatSignature(t).replace(/tuple/g, ""),
                n = c.id(r).substring(0, 10),
                i = !1;
            null != t.constant ? i = t.constant : null != t.stateMutability && (i = "view" == t.stateMutability || "pure" == t.stateMutability), e = new b({
              inputs: t.inputs,
              outputs: t.outputs,
              gas: t.gas,
              payable: null == t.payable || !!t.payable,
              type: i ? "call" : "transaction",
              name: t.name,
              signature: r,
              sighash: n
            }), t.name && (null == this.functions[t.name] ? p.defineReadOnly(this.functions, t.name, e) : m.warn("WARNING: Multiple definitions for " + t.name)), null == this.functions[e.signature] && p.defineReadOnly(this.functions, e.signature, e);
            break;

          case "event":
            r = h.formatSignature(t).replace(/tuple/g, ""), e = new A({
              name: t.name,
              signature: r,
              inputs: t.inputs,
              topic: c.id(r),
              anonymous: !!t.anonymous
            }), t.name && null == this.events[t.name] && p.defineReadOnly(this.events, t.name, e), null == this.events[e.signature] && p.defineReadOnly(this.events, e.signature, e);
            break;

          case "receive":
          case "fallback":
            break;

          default:
            m.warn("WARNING: unsupported ABI type - " + t.type);
        }
      }

      var D = (L.prototype.parseTransaction = function (t) {
        var e = t.data.substring(0, 10).toLowerCase();

        for (var r in this.functions) if (-1 !== r.indexOf("(")) {
          var n = this.functions[r];

          if (n.sighash === e) {
            var i = h.defaultAbiCoder.decode(n.inputs, "0x" + t.data.substring(10));
            return new N({
              args: i,
              decode: n.decode,
              name: n.name,
              signature: n.signature,
              sighash: n.sighash,
              value: l.bigNumberify(t.value || "0")
            });
          }
        }

        return null;
      }, L.prototype.parseLog = function (t) {
        for (var e in this.events) if (-1 !== e.indexOf("(")) {
          var r = this.events[e];
          if (!r.anonymous && r.topic === t.topics[0]) return new O({
            decode: r.decode,
            name: r.name,
            signature: r.signature,
            topic: r.topic,
            values: r.decode(t.data, t.topics)
          });
        }

        return null;
      }, L.isInterface = function (t) {
        return p.isType(t, "Interface");
      }, L.isIndexed = function (t) {
        return p.isType(t, "Indexed");
      }, L);

      function L(t) {
        if (m.checkNew(this, L), "string" == typeof t) {
          try {
            t = JSON.parse(t);
          } catch (e) {
            m.throwError("could not parse ABI JSON", m.INVALID_ARGUMENT, {
              arg: "abi",
              errorMessage: e.message,
              value: t
            });
          }

          if (!Array.isArray(t)) return m.throwError("invalid abi", m.INVALID_ARGUMENT, {
            arg: "abi",
            value: t
          }), null;
        }

        p.defineReadOnly(this, "functions", {}), p.defineReadOnly(this, "events", {});
        var e = [];
        t.forEach(function (t) {
          "string" == typeof t && (t = h.parseSignature(t)), e.push(t);
        }), p.defineReadOnly(this, "abi", p.deepCopy(e, !0)), e.forEach(C, this), this.deployFunction || C.call(this, {
          type: "constructor",
          inputs: []
        }), p.setType(this, "Interface");
      }

      r.Interface = D;
    }, {
      "../errors": 5,
      "./abi-coder": 59,
      "./address": 60,
      "./bignumber": 63,
      "./bytes": 64,
      "./hash": 65,
      "./keccak256": 71,
      "./properties": 74
    }],
    70: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("./address");

      function i(t) {
        try {
          var e = JSON.parse(t);
        } catch (t) {
          return !1;
        }

        return e.encseed && e.ethaddr;
      }

      function o(t) {
        try {
          var e = JSON.parse(t);
        } catch (t) {
          return !1;
        }

        return !(!e.version || parseInt(e.version) !== e.version || 3 !== parseInt(e.version));
      }

      r.isCrowdsaleWallet = i, r.isSecretStorageWallet = o, r.getJsonWalletAddress = function (t) {
        if (i(t)) try {
          return n.getAddress(JSON.parse(t).ethaddr);
        } catch (t) {
          return null;
        }
        if (o(t)) try {
          return n.getAddress(JSON.parse(t).address);
        } catch (t) {
          return null;
        }
        return null;
      };
    }, {
      "./address": 60
    }],
    71: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("js-sha3"),
          i = t("./bytes");

      r.keccak256 = function (t) {
        return "0x" + n.keccak_256(i.arrayify(t));
      };
    }, {
      "./bytes": 64,
      "js-sha3": 40
    }],
    72: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = n(t("../errors"));

      function o(t) {
        return function (e) {
          var r = [];
          return e.InfuraProvider && r.push(new e.InfuraProvider(t)), e.EtherscanProvider && r.push(new e.EtherscanProvider(t)), 0 === r.length ? null : e.FallbackProvider ? new e.FallbackProvider(r) : r[0];
        };
      }

      function s(t, e) {
        return function (r) {
          return r.JsonRpcProvider ? new r.JsonRpcProvider(t, e) : null;
        };
      }

      var a = {
        chainId: 1,
        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        name: "homestead",
        _defaultProvider: o("homestead")
      },
          u = {
        chainId: 3,
        ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        name: "ropsten",
        _defaultProvider: o("ropsten")
      },
          h = {
        unspecified: {
          chainId: 0,
          name: "unspecified"
        },
        homestead: a,
        mainnet: a,
        morden: {
          chainId: 2,
          name: "morden"
        },
        ropsten: u,
        testnet: u,
        rinkeby: {
          chainId: 4,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "rinkeby",
          _defaultProvider: o("rinkeby")
        },
        goerli: {
          chainId: 5,
          ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          name: "goerli",
          _defaultProvider: o("goerli")
        },
        kovan: {
          chainId: 42,
          name: "kovan",
          _defaultProvider: o("kovan")
        },
        classic: {
          chainId: 61,
          name: "classic",
          _defaultProvider: s("https://web3.gastracker.io", "classic")
        },
        classicTestnet: {
          chainId: 62,
          name: "classicTestnet",
          _defaultProvider: s("https://web3.gastracker.io/morden", "classicTestnet")
        }
      };

      r.getNetwork = function (t) {
        if (null == t) return null;

        if ("number" == typeof t) {
          for (var e in h) {
            var r = h[e];
            if (r.chainId === t) return {
              name: r.name,
              chainId: r.chainId,
              ensAddress: r.ensAddress || null,
              _defaultProvider: r._defaultProvider || null
            };
          }

          return {
            chainId: t,
            name: "unknown"
          };
        }

        if ("string" == typeof t) {
          var n = h[t];
          return null == n ? null : {
            name: n.name,
            chainId: n.chainId,
            ensAddress: n.ensAddress,
            _defaultProvider: n._defaultProvider || null
          };
        }

        var o = h[t.name];
        return o ? (0 !== t.chainId && t.chainId !== o.chainId && i.throwError("network chainId mismatch", i.INVALID_ARGUMENT, {
          arg: "network",
          value: t
        }), {
          name: t.name,
          chainId: o.chainId,
          ensAddress: t.ensAddress || o.ensAddress || null,
          _defaultProvider: t._defaultProvider || o._defaultProvider || null
        }) : ("number" != typeof t.chainId && i.throwError("invalid network chainId", i.INVALID_ARGUMENT, {
          arg: "network",
          value: t
        }), t);
      };
    }, {
      "../errors": 5
    }],
    73: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("../utils/bytes"),
          i = t("./hmac");

      r.pbkdf2 = function (t, e, r, o, s) {
        var a;
        t = n.arrayify(t), e = n.arrayify(e);
        var u,
            h,
            l = 1,
            f = new Uint8Array(o),
            c = new Uint8Array(e.length + 4);
        c.set(e);

        for (var d = 1; d <= l; d++) {
          c[e.length] = d >> 24 & 255, c[e.length + 1] = d >> 16 & 255, c[e.length + 2] = d >> 8 & 255, c[e.length + 3] = 255 & d;
          var p = i.computeHmac(s, t, c);
          a || (a = p.length, h = new Uint8Array(a), u = o - ((l = Math.ceil(o / a)) - 1) * a), h.set(p);

          for (var m = 1; m < r; m++) {
            p = i.computeHmac(s, t, p);

            for (var v = 0; v < a; v++) h[v] ^= p[v];
          }

          var g = (d - 1) * a,
              y = d === l ? u : a;
          f.set(n.arrayify(h).slice(0, y), g);
        }

        return n.arrayify(f);
      };
    }, {
      "../utils/bytes": 64,
      "./hmac": 67
    }],
    74: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = n(t("../errors"));

      function o(t, e, r) {
        Object.defineProperty(t, e, {
          enumerable: !0,
          value: r,
          writable: !1
        });
      }

      function s(t, e) {
        return t && t._ethersType === e;
      }

      r.defineReadOnly = o, r.setType = function (t, e) {
        Object.defineProperty(t, "_ethersType", {
          configurable: !1,
          value: e,
          writable: !1
        });
      }, r.isType = s, r.resolveProperties = function (t) {
        var e = {},
            r = [];
        return Object.keys(t).forEach(function (n) {
          var i = t[n];
          i instanceof Promise ? r.push(i.then(function (t) {
            return e[n] = t, null;
          })) : e[n] = i;
        }), Promise.all(r).then(function () {
          return e;
        });
      }, r.checkProperties = function (t, e) {
        t && "object" == typeof t || i.throwError("invalid object", i.INVALID_ARGUMENT, {
          argument: "object",
          value: t
        }), Object.keys(t).forEach(function (r) {
          e[r] || i.throwError("invalid object key - " + r, i.INVALID_ARGUMENT, {
            argument: "transaction",
            value: t,
            key: r
          });
        });
      }, r.shallowCopy = function (t) {
        var e = {};

        for (var r in t) e[r] = t[r];

        return e;
      };
      var a = {
        boolean: !0,
        number: !0,
        string: !0
      };
      r.deepCopy = function t(e, r) {
        if (null == e || a[typeof e]) return e;

        if (Array.isArray(e)) {
          var n = e.map(function (e) {
            return t(e, r);
          });
          return r && Object.freeze(n), n;
        }

        if ("object" == typeof e) {
          if (s(e, "BigNumber")) return e;
          if (s(e, "Description")) return e;
          if (s(e, "Indexed")) return e;

          for (var i in n = {}, e) {
            var u = e[i];
            void 0 !== u && o(n, i, t(u, r));
          }

          return r && Object.freeze(n), n;
        }

        if ("function" == typeof e) return e;
        throw new Error("Cannot deepCopy " + typeof e);
      }, r.inheritable = function t(e) {
        return function (r) {
          !function (t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            });
          }(r, e), o(r, "inherits", t(r));
        };
      };
    }, {
      "../errors": 5
    }],
    75: [function (t, e, n) {
      (function (e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        });
        var r = t("../utils/bytes"),
            i = t("../utils/properties"),
            o = e.crypto || e.msCrypto;

        function s(t) {
          if (t <= 0 || 1024 < t || parseInt(String(t)) != t) throw new Error("invalid length");
          var e = new Uint8Array(t);
          return o.getRandomValues(e), r.arrayify(e);
        }

        o && o.getRandomValues || (console.log("WARNING: Missing strong random number source; using weak randomBytes"), o = {
          getRandomValues: function (t) {
            for (var e = 0; e < 20; e++) for (var r = 0; r < t.length; r++) e ? t[r] ^= Math.trunc(256 * Math.random()) : t[r] = Math.trunc(256 * Math.random());

            return t;
          },
          _weakCrypto: !0
        }), n.randomBytes = s, !0 === o._weakCrypto && i.defineReadOnly(s, "_weakCrypto", !0);
      }).call(this, void 0 !== _indexD3bd.f ? _indexD3bd.f : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../utils/bytes": 64,
      "../utils/properties": 74
    }],
    76: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("./bytes");

      function i(t) {
        for (var e = []; t;) e.unshift(255 & t), t >>= 8;

        return e;
      }

      function o(t, e, r) {
        for (var n = 0, i = 0; i < r; i++) n = 256 * n + t[e + i];

        return n;
      }

      function s(t, e, r, n) {
        for (var i = []; r < e + 1 + n;) {
          var o = a(t, r);
          if (i.push(o.result), e + 1 + n < (r += o.consumed)) throw new Error("invalid rlp");
        }

        return {
          consumed: 1 + n,
          result: i
        };
      }

      function a(t, e) {
        if (0 === t.length) throw new Error("invalid rlp data");

        if (248 <= t[e]) {
          if (e + 1 + (r = t[e] - 247) > t.length) throw new Error("too short");
          if (e + 1 + r + (i = o(t, e + 1, r)) > t.length) throw new Error("to short");
          return s(t, e, e + 1 + r, r + i);
        }

        if (192 <= t[e]) {
          if (e + 1 + (i = t[e] - 192) > t.length) throw new Error("invalid rlp data");
          return s(t, e, e + 1, i);
        }

        if (184 <= t[e]) {
          var r;
          if (e + 1 + (r = t[e] - 183) > t.length) throw new Error("invalid rlp data");
          if (e + 1 + r + (i = o(t, e + 1, r)) > t.length) throw new Error("invalid rlp data");
          return {
            consumed: 1 + r + i,
            result: n.hexlify(t.slice(e + 1 + r, e + 1 + r + i))
          };
        }

        if (128 <= t[e]) {
          var i;
          if (e + 1 + (i = t[e] - 128) > t.length) throw new Error("invalid rlp data");
          return {
            consumed: 1 + i,
            result: n.hexlify(t.slice(e + 1, e + 1 + i))
          };
        }

        return {
          consumed: 1,
          result: n.hexlify(t[e])
        };
      }

      r.encode = function (t) {
        return n.hexlify(function t(e) {
          if (Array.isArray(e)) {
            var r = [];
            return e.forEach(function (e) {
              r = r.concat(t(e));
            }), r.length <= 55 ? (r.unshift(192 + r.length), r) : ((o = i(r.length)).unshift(247 + o.length), o.concat(r));
          }

          var o,
              s = Array.prototype.slice.call(n.arrayify(e));
          return 1 === s.length && s[0] <= 127 ? s : s.length <= 55 ? (s.unshift(128 + s.length), s) : ((o = i(s.length)).unshift(183 + o.length), o.concat(s));
        }(t));
      }, r.decode = function (t) {
        var e = n.arrayify(t),
            r = a(e, 0);
        if (r.consumed !== e.length) throw new Error("invalid rlp data");
        return r.result;
      };
    }, {
      "./bytes": 64
    }],
    77: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = t("elliptic"),
          o = t("./address"),
          s = t("./bytes"),
          a = t("./hash"),
          u = t("./keccak256"),
          h = t("./properties"),
          l = n(t("../errors")),
          f = null;

      function c() {
        return f = f || new i.ec("secp256k1");
      }

      var d = (p.prototype.sign = function (t) {
        var e = c().keyFromPrivate(s.arrayify(this.privateKey)).sign(s.arrayify(t), {
          canonical: !0
        });
        return {
          recoveryParam: e.recoveryParam,
          r: s.hexZeroPad("0x" + e.r.toString(16), 32),
          s: s.hexZeroPad("0x" + e.s.toString(16), 32),
          v: 27 + e.recoveryParam
        };
      }, p.prototype.computeSharedSecret = function (t) {
        var e = c().keyFromPrivate(s.arrayify(this.privateKey)),
            r = c().keyFromPublic(s.arrayify(m(t)));
        return s.hexZeroPad("0x" + e.derive(r.getPublic()).toString(16), 32);
      }, p.prototype._addPoint = function (t) {
        var e = c().keyFromPublic(s.arrayify(this.publicKey)),
            r = c().keyFromPublic(s.arrayify(t));
        return "0x" + e.pub.add(r.pub).encodeCompressed("hex");
      }, p);

      function p(t) {
        var e = c().keyFromPrivate(s.arrayify(t));
        h.defineReadOnly(this, "privateKey", s.hexlify(e.priv.toArray("be", 32))), h.defineReadOnly(this, "publicKey", "0x" + e.getPublic(!1, "hex")), h.defineReadOnly(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")), h.defineReadOnly(this, "publicKeyBytes", e.getPublic().encode(null, !0));
      }

      function m(t, e) {
        var r = s.arrayify(t);
        if (32 !== r.length) return 33 === r.length ? e ? s.hexlify(r) : "0x" + c().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? e ? "0x" + c().keyFromPublic(r).getPublic(!0, "hex") : s.hexlify(r) : (l.throwError("invalid public or private key", l.INVALID_ARGUMENT, {
          arg: "key",
          value: "[REDACTED]"
        }), null);
        var n = new d(r);
        return e ? n.compressedPublicKey : n.publicKey;
      }

      function v(t) {
        var e = "0x" + m(t).slice(4);
        return o.getAddress("0x" + u.keccak256(e).substring(26));
      }

      function g(t, e) {
        var r = s.splitSignature(e),
            n = {
          r: s.arrayify(r.r),
          s: s.arrayify(r.s)
        };
        return "0x" + c().recoverPubKey(s.arrayify(t), n, r.recoveryParam).encode("hex", !1);
      }

      function y(t, e) {
        return v(g(s.arrayify(t), e));
      }

      r.KeyPair = d, r.computePublicKey = m, r.computeAddress = v, r.recoverPublicKey = g, r.recoverAddress = y, r.verifyMessage = function (t, e) {
        return y(a.hashMessage(t), e);
      };
    }, {
      "../errors": 5,
      "./address": 60,
      "./bytes": 64,
      "./hash": 65,
      "./keccak256": 71,
      "./properties": 74,
      elliptic: 12
    }],
    78: [function (t, e, r) {
      var n = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {
          default: t
        };
      },
          i = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var o = n(t("aes-js")),
          s = n(t("scrypt-js")),
          a = n(t("uuid")),
          u = t("./signing-key"),
          h = i(t("./hdnode")),
          l = t("./address"),
          f = t("./bytes"),
          c = t("./pbkdf2"),
          d = t("./keccak256"),
          p = t("./utf8"),
          m = t("./random-bytes");

      function v(t) {
        return "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t), f.arrayify(t);
      }

      function g(t, e) {
        for (t = String(t); t.length < e;) t = "0" + t;

        return t;
      }

      function y(t) {
        return "string" == typeof t ? p.toUtf8Bytes(t, p.UnicodeNormalizationForm.NFKC) : f.arrayify(t);
      }

      function w(t, e) {
        for (var r = t, n = e.toLowerCase().split("/"), i = 0; i < n.length; i++) {
          var o = null;

          for (var s in r) if (s.toLowerCase() === n[i]) {
            o = r[s];
            break;
          }

          if (null === o) return null;
          r = o;
        }

        return r;
      }

      r.decryptCrowdsale = function (t, e) {
        var r = JSON.parse(t);
        e = y(e);
        var n = l.getAddress(w(r, "ethaddr")),
            i = v(w(r, "encseed"));
        if (!i || i.length % 16 != 0) throw new Error("invalid encseed");
        var s = c.pbkdf2(e, e, 2e3, 32, "sha256").slice(0, 16),
            a = i.slice(0, 16),
            h = i.slice(16),
            m = new o.default.ModeOfOperation.cbc(s, a),
            g = f.arrayify(m.decrypt(h));
        g = o.default.padding.pkcs7.strip(g);

        for (var b = "", _ = 0; _ < g.length; _++) b += String.fromCharCode(g[_]);

        var M = p.toUtf8Bytes(b),
            S = new u.SigningKey(d.keccak256(M));
        if (S.address !== n) throw new Error("corrupt crowdsale wallet");
        return S;
      }, r.decrypt = function (t, e, r) {
        function n(t, e) {
          var r = v(w(i, "crypto/ciphertext"));
          if (f.hexlify(function (t, e) {
            return d.keccak256(f.concat([t, e]));
          }(t.slice(16, 32), r)).substring(2) !== w(i, "crypto/mac").toLowerCase()) return e(new Error("invalid password")), null;

          var n = function (t, e) {
            if ("aes-128-ctr" !== w(i, "crypto/cipher")) return null;
            var r = v(w(i, "crypto/cipherparams/iv")),
                n = new o.default.Counter(r),
                s = new o.default.ModeOfOperation.ctr(t, n);
            return f.arrayify(s.decrypt(e));
          }(t.slice(0, 16), r),
              s = t.slice(32, 64);

          if (!n) return e(new Error("unsupported cipher")), null;
          var a = new u.SigningKey(n);
          if (i.address && a.address !== l.getAddress(i.address)) return e(new Error("address mismatch")), null;
          var c = w(i, "x-ethers/locale");

          if ("0.1" === w(i, "x-ethers/version") && (null == c || "en" === c)) {
            var p = v(w(i, "x-ethers/mnemonicCiphertext")),
                m = v(w(i, "x-ethers/mnemonicCounter")),
                g = new o.default.Counter(m),
                y = new o.default.ModeOfOperation.ctr(s, g),
                b = w(i, "x-ethers/path") || h.defaultPath,
                _ = f.arrayify(y.decrypt(p)),
                M = h.entropyToMnemonic(_),
                S = h.fromMnemonic(M).derivePath(b);

            if (S.privateKey != f.hexlify(n)) return e(new Error("mnemonic mismatch")), null;
            a = new u.SigningKey(S);
          }

          return a;
        }

        var i = JSON.parse(t),
            a = y(e);
        return new Promise(function (t, e) {
          var o = w(i, "crypto/kdf");
          if (o && "string" == typeof o) {
            if ("scrypt" === o.toLowerCase()) {
              var u = v(w(i, "crypto/kdfparams/salt")),
                  h = parseInt(w(i, "crypto/kdfparams/n")),
                  l = parseInt(w(i, "crypto/kdfparams/r")),
                  d = parseInt(w(i, "crypto/kdfparams/p"));
              if (!h || !l || !d) return void e(new Error("unsupported key-derivation function parameters"));
              if (0 != (h & h - 1)) return void e(new Error("unsupported key-derivation function parameter value for N"));
              if (32 !== (g = parseInt(w(i, "crypto/kdfparams/dklen")))) return void e(new Error("unsupported key-derivation derived-key length"));
              r && r(0), s.default(a, u, h, l, d, 64, function (i, o, s) {
                if (i) i.progress = o, e(i);else if (s) {
                  var a = n(s = f.arrayify(s), e);
                  if (!a) return;
                  r && r(1), t(a);
                } else if (r) return r(o);
              });
            } else if ("pbkdf2" === o.toLowerCase()) {
              u = v(w(i, "crypto/kdfparams/salt"));
              var p = null,
                  m = w(i, "crypto/kdfparams/prf");
              if ("hmac-sha256" === m) p = "sha256";else {
                if ("hmac-sha512" !== m) return void e(new Error("unsupported prf"));
                p = "sha512";
              }
              var g,
                  y = parseInt(w(i, "crypto/kdfparams/c"));
              if (32 !== (g = parseInt(w(i, "crypto/kdfparams/dklen")))) return void e(new Error("unsupported key-derivation derived-key length"));
              var b = n(c.pbkdf2(a, u, y, g, p), e);
              if (!b) return;
              t(b);
            } else e(new Error("unsupported key-derivation function"));
          } else e(new Error("unsupported key-derivation function"));
        });
      }, r.encrypt = function (t, e, r, n) {
        var i;
        if ("function" != typeof r || n || (n = r, r = {}), r = r || {}, 32 !== (i = u.SigningKey.isSigningKey(t) ? f.arrayify(t.privateKey) : f.arrayify(t)).length) throw new Error("invalid private key");
        var l = y(e),
            c = null;
        if (r.entropy && (c = f.arrayify(r.entropy)), r.mnemonic) if (c) {
          if (h.entropyToMnemonic(c) !== r.mnemonic) throw new Error("entropy and mnemonic mismatch");
        } else c = f.arrayify(h.mnemonicToEntropy(r.mnemonic, r.wordlist));
        var p = r.path;
        c && !p && (p = h.defaultPath);
        var v,
            w = r.client;
        w = w || "ethers.js", v = r.salt ? f.arrayify(r.salt) : m.randomBytes(32);
        var b = null;

        if (r.iv) {
          if (16 !== (b = f.arrayify(r.iv)).length) throw new Error("invalid iv");
        } else b = m.randomBytes(16);

        var _ = null;

        if (r.uuid) {
          if (16 !== (_ = f.arrayify(r.uuid)).length) throw new Error("invalid uuid");
        } else _ = m.randomBytes(16);

        var M = 1 << 17,
            S = 8,
            E = 1;
        return r.scrypt && (r.scrypt.N && (M = r.scrypt.N), r.scrypt.r && (S = r.scrypt.r), r.scrypt.p && (E = r.scrypt.p)), new Promise(function (t, e) {
          n && n(0), s.default(l, v, M, S, E, 64, function (s, h, l) {
            if (s) s.progress = h, e(s);else if (l) {
              var y = (l = f.arrayify(l)).slice(0, 16),
                  k = l.slice(16, 32),
                  A = l.slice(32, 64),
                  x = new u.SigningKey(i).address,
                  T = new o.default.Counter(b),
                  N = new o.default.ModeOfOperation.ctr(y, T),
                  P = f.arrayify(N.encrypt(i)),
                  R = d.keccak256(f.concat([k, P])),
                  O = {
                address: x.substring(2).toLowerCase(),
                id: a.default.v4({
                  random: _
                }),
                version: 3,
                Crypto: {
                  cipher: "aes-128-ctr",
                  cipherparams: {
                    iv: f.hexlify(b).substring(2)
                  },
                  ciphertext: f.hexlify(P).substring(2),
                  kdf: "scrypt",
                  kdfparams: {
                    salt: f.hexlify(v).substring(2),
                    n: M,
                    dklen: 32,
                    p: E,
                    r: S
                  },
                  mac: R.substring(2)
                }
              };

              if (c) {
                var I = m.randomBytes(16),
                    C = new o.default.Counter(I),
                    D = new o.default.ModeOfOperation.ctr(A, C),
                    L = f.arrayify(D.encrypt(c)),
                    U = new Date(),
                    j = U.getUTCFullYear() + "-" + g(U.getUTCMonth() + 1, 2) + "-" + g(U.getUTCDate(), 2) + "T" + g(U.getUTCHours(), 2) + "-" + g(U.getUTCMinutes(), 2) + "-" + g(U.getUTCSeconds(), 2) + ".0Z";
                O["x-ethers"] = {
                  client: w,
                  gethFilename: "UTC--" + j + "--" + O.address,
                  mnemonicCounter: f.hexlify(I).substring(2),
                  mnemonicCiphertext: f.hexlify(L).substring(2),
                  path: p,
                  version: "0.1"
                }, r.wordlist && "string" == typeof r.wordlist.locale && (O["x-ethers"].locale = r.wordlist.locale);
              }

              n && n(1), t(JSON.stringify(O));
            } else if (n) return n(h);
          });
        });
      };
    }, {
      "./address": 60,
      "./bytes": 64,
      "./hdnode": 66,
      "./keccak256": 71,
      "./pbkdf2": 73,
      "./random-bytes": 75,
      "./signing-key": 81,
      "./utf8": 85,
      "aes-js": 8,
      "scrypt-js": 44,
      uuid: 48
    }],
    79: [function (t, e, r) {
      var n = this && this.__importDefault || function (t) {
        return t && t.__esModule ? t : {
          default: t
        };
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = n(t("hash.js")),
          o = t("./bytes");
      r.ripemd160 = function (t) {
        return "0x" + i.default.ripemd160().update(o.arrayify(t)).digest("hex");
      }, r.sha256 = function (t) {
        return "0x" + i.default.sha256().update(o.arrayify(t)).digest("hex");
      }, r.sha512 = function (t) {
        return "0x" + i.default.sha512().update(o.arrayify(t)).digest("hex");
      };
    }, {
      "./bytes": 64,
      "hash.js": 26
    }],
    80: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      }), t("setimmediate"), r.platform = "browser";
    }, {
      setimmediate: 45
    }],
    81: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = t("./hdnode"),
          o = t("./bytes"),
          s = t("./properties"),
          a = t("./secp256k1"),
          u = n(t("../errors")),
          h = (l.prototype.signDigest = function (t) {
        return this.keyPair.sign(t);
      }, l.prototype.computeSharedSecret = function (t) {
        return this.keyPair.computeSharedSecret(o.arrayify(t));
      }, l.isSigningKey = function (t) {
        return s.isType(t, "SigningKey");
      }, l);

      function l(t) {
        var e;
        u.checkNew(this, l), e = i.HDNode.isHDNode(t) ? (s.defineReadOnly(this, "mnemonic", t.mnemonic), s.defineReadOnly(this, "path", t.path), o.arrayify(t.privateKey)) : ("string" == typeof t && t.match(/^[0-9a-f]*$/i) && 64 === t.length && (t = "0x" + t), o.arrayify(t));

        try {
          32 !== e.length && u.throwError("exactly 32 bytes required", u.INVALID_ARGUMENT, {
            arg: "privateKey",
            value: "[REDACTED]"
          });
        } catch (t) {
          var r = {
            arg: "privateKey",
            reason: t.reason,
            value: "[REDACTED]"
          };
          t.value && ("number" == typeof t.value.length && (r.length = t.value.length), r.type = typeof t.value), u.throwError("invalid private key", t.code, r);
        }

        s.defineReadOnly(this, "privateKey", o.hexlify(e)), s.defineReadOnly(this, "keyPair", new a.KeyPair(e)), s.defineReadOnly(this, "publicKey", this.keyPair.publicKey), s.defineReadOnly(this, "address", a.computeAddress(this.keyPair.publicKey)), s.setType(this, "SigningKey");
      }

      r.SigningKey = h;
    }, {
      "../errors": 5,
      "./bytes": 64,
      "./hdnode": 66,
      "./properties": 74,
      "./secp256k1": 77
    }],
    82: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("./bignumber"),
          i = t("./bytes"),
          o = t("./utf8"),
          s = t("./keccak256"),
          a = t("./sha2"),
          u = new RegExp("^bytes([0-9]+)$"),
          h = new RegExp("^(u?int)([0-9]*)$"),
          l = new RegExp("^(.*)\\[([0-9]*)\\]$");

      function f(t, e) {
        if (t.length != e.length) throw new Error("type/value count mismatch");
        var r = [];
        return t.forEach(function (t, s) {
          r.push(function t(e, r, s) {
            switch (e) {
              case "address":
                return s ? i.padZeros(r, 32) : i.arrayify(r);

              case "string":
                return o.toUtf8Bytes(r);

              case "bytes":
                return i.arrayify(r);

              case "bool":
                return r = r ? "0x01" : "0x00", s ? i.padZeros(r, 32) : i.arrayify(r);
            }

            var a = e.match(h);

            if (a) {
              if ((f = parseInt(a[2] || "256")) % 8 != 0 || 0 === f || 256 < f) throw new Error("invalid number type - " + e);
              return s && (f = 256), r = n.bigNumberify(r).toTwos(f), i.padZeros(r, f / 8);
            }

            if (a = e.match(u)) {
              var f = parseInt(a[1]);
              if (String(f) != a[1] || 0 === f || 32 < f) throw new Error("invalid number type - " + e);
              if (i.arrayify(r).byteLength !== f) throw new Error("invalid value for " + e);
              return s ? i.arrayify((r + "0000000000000000000000000000000000000000000000000000000000000000").substring(0, 66)) : r;
            }

            if ((a = e.match(l)) && Array.isArray(r)) {
              var c = a[1];
              if (parseInt(a[2] || String(r.length)) != r.length) throw new Error("invalid value for " + e);
              var d = [];
              return r.forEach(function (e) {
                d.push(t(c, e, !0));
              }), i.concat(d);
            }

            throw new Error("unknown type - " + e);
          }(t, e[s]));
        }), i.hexlify(i.concat(r));
      }

      r.pack = f, r.keccak256 = function (t, e) {
        return s.keccak256(f(t, e));
      }, r.sha256 = function (t, e) {
        return a.sha256(f(t, e));
      };
    }, {
      "./bignumber": 63,
      "./bytes": 64,
      "./keccak256": 71,
      "./sha2": 79,
      "./utf8": 85
    }],
    83: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = t("../constants"),
          o = n(t("../errors")),
          s = t("./secp256k1"),
          a = t("./address"),
          u = t("./bignumber"),
          h = t("./bytes"),
          l = t("./keccak256"),
          f = t("./properties"),
          c = n(t("./rlp")),
          d = t("../providers/abstract-provider");

      function p(t) {
        return "0x" === t ? i.Zero : u.bigNumberify(t);
      }

      var m = [{
        name: "nonce",
        maxLength: 32
      }, {
        name: "gasPrice",
        maxLength: 32
      }, {
        name: "gasLimit",
        maxLength: 32
      }, {
        name: "to",
        length: 20
      }, {
        name: "value",
        maxLength: 32
      }, {
        name: "data"
      }],
          v = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0
      };
      r.serialize = function (t, e) {
        f.checkProperties(t, v);
        var r = [];
        m.forEach(function (e) {
          var n = t[e.name] || [];
          n = h.arrayify(h.hexlify(n)), e.length && n.length !== e.length && 0 < n.length && o.throwError("invalid length for " + e.name, o.INVALID_ARGUMENT, {
            arg: "transaction" + e.name,
            value: n
          }), e.maxLength && (n = h.stripZeros(n)).length > e.maxLength && o.throwError("invalid length for " + e.name, o.INVALID_ARGUMENT, {
            arg: "transaction" + e.name,
            value: n
          }), r.push(h.hexlify(n));
        }), null != t.chainId && 0 !== t.chainId && (r.push(h.hexlify(t.chainId)), r.push("0x"), r.push("0x"));
        var n = c.encode(r);
        if (!e) return n;
        var i = h.splitSignature(e),
            s = 27 + i.recoveryParam;
        return 9 === r.length && (r.pop(), r.pop(), r.pop(), s += 2 * t.chainId + 8), r.push(h.hexlify(s)), r.push(h.stripZeros(h.arrayify(i.r))), r.push(h.stripZeros(h.arrayify(i.s))), c.encode(r);
      }, r.parse = function (t) {
        var e = c.decode(t);
        9 !== e.length && 6 !== e.length && o.throwError("invalid raw transaction", o.INVALID_ARGUMENT, {
          arg: "rawTransactin",
          value: t
        });
        var r = {
          nonce: p(e[0]).toNumber(),
          gasPrice: p(e[1]),
          gasLimit: p(e[2]),
          to: function (t) {
            return "0x" === t ? null : a.getAddress(t);
          }(e[3]),
          value: p(e[4]),
          data: e[5],
          chainId: 0
        };
        if (6 === e.length) return r;

        try {
          r.v = u.bigNumberify(e[6]).toNumber();
        } catch (t) {
          return o.info(t), r;
        }

        if (r.r = h.hexZeroPad(e[7], 32), r.s = h.hexZeroPad(e[8], 32), u.bigNumberify(r.r).isZero() && u.bigNumberify(r.s).isZero()) r.chainId = r.v, r.v = 0;else {
          r.chainId = Math.floor((r.v - 35) / 2), r.chainId < 0 && (r.chainId = 0);
          var n = r.v - 27,
              i = e.slice(0, 6);
          0 !== r.chainId && (i.push(h.hexlify(r.chainId)), i.push("0x"), i.push("0x"), n -= 2 * r.chainId + 8);
          var f = l.keccak256(c.encode(i));

          try {
            r.from = s.recoverAddress(f, {
              r: h.hexlify(r.r),
              s: h.hexlify(r.s),
              recoveryParam: n
            });
          } catch (t) {
            o.info(t);
          }

          r.hash = l.keccak256(t);
        }
        return r;
      }, r.populateTransaction = function (t, e, r) {
        d.Provider.isProvider(e) || o.throwError("missing provider", o.INVALID_ARGUMENT, {
          argument: "provider",
          value: e
        }), f.checkProperties(t, v);
        var n = f.shallowCopy(t);

        if (null != n.to && (n.to = e.resolveName(n.to)), null == n.gasPrice && (n.gasPrice = e.getGasPrice()), null == n.nonce && (n.nonce = e.getTransactionCount(r)), null == n.gasLimit) {
          var i = f.shallowCopy(n);
          i.from = r, n.gasLimit = e.estimateGas(i);
        }

        return null == n.chainId && (n.chainId = e.getNetwork().then(function (t) {
          return t.chainId;
        })), f.resolveProperties(n);
      };
    }, {
      "../constants": 3,
      "../errors": 5,
      "../providers/abstract-provider": 50,
      "./address": 60,
      "./bignumber": 63,
      "./bytes": 64,
      "./keccak256": 71,
      "./properties": 74,
      "./rlp": 76,
      "./secp256k1": 77
    }],
    84: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i,
          o = t("../constants"),
          s = n(t("../errors")),
          a = t("./bignumber"),
          u = {};

      function h(t) {
        return {
          decimals: t.length - 1,
          tenPower: a.bigNumberify(t)
        };
      }

      function l(t) {
        var e = u[String(t).toLowerCase()];

        if (!e && "number" == typeof t && parseInt(String(t)) == t && 0 <= t && t <= 256) {
          for (var r = "1", n = 0; n < t; n++) r += "0";

          e = h(r);
        }

        return e || s.throwError("invalid unitType", s.INVALID_ARGUMENT, {
          argument: "name",
          value: t
        }), e;
      }

      function f(t, e) {
        var r = l(e),
            n = (t = a.bigNumberify(t)).lt(o.Zero);
        n && (t = t.mul(o.NegativeOne));

        for (var i = t.mod(r.tenPower).toString(); i.length < r.decimals;) i = "0" + i;

        return i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1], t = t.div(r.tenPower).toString() + "." + i, n && (t = "-" + t), t;
      }

      function c(t, e) {
        null == e && (e = 18);
        var r = l(e);
        if ("string" == typeof t && t.match(/^-?[0-9.,]+$/) || s.throwError("invalid decimal value", s.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        }), 0 === r.decimals) return a.bigNumberify(t);
        var n = "-" === t.substring(0, 1);
        n && (t = t.substring(1)), "." === t && s.throwError("missing value", s.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        });
        var i = t.split(".");
        2 < i.length && s.throwError("too many decimal points", s.INVALID_ARGUMENT, {
          arg: "value",
          value: t
        });
        var u = i[0],
            h = i[1];

        for (u = u || "0", (h = h || "0").length > r.decimals && s.throwError("underflow occurred", s.NUMERIC_FAULT, {
          operation: "division",
          fault: "underflow"
        }); h.length < r.decimals;) h += "0";

        var f = a.bigNumberify(u),
            c = a.bigNumberify(h),
            d = f.mul(r.tenPower).add(c);
        return n && (d = d.mul(o.NegativeOne)), d;
      }

      i = "1", ["wei", "kwei", "Mwei", "Gwei", "szabo", "finney", "ether"].forEach(function (t) {
        var e = h(i);
        u[t.toLowerCase()] = e, u[String(e.decimals)] = e, i += "000";
      }), r.commify = function (t) {
        var e = String(t).split(".");
        (2 < e.length || !e[0].match(/^-?[0-9]*$/) || e[1] && !e[1].match(/^[0-9]*$/) || "." === t || "-." === t) && s.throwError("invalid value", s.INVALID_ARGUMENT, {
          argument: "value",
          value: t
        });
        var r = e[0],
            n = "";

        for ("-" === r.substring(0, 1) && (n = "-", r = r.substring(1)); "0" === r.substring(0, 1);) r = r.substring(1);

        "" === r && (r = "0");
        var i = "";
        2 === e.length && (i = "." + (e[1] || "0"));

        for (var o = []; r.length;) {
          if (r.length <= 3) {
            o.unshift(r);
            break;
          }

          var a = r.length - 3;
          o.unshift(r.substring(a)), r = r.substring(0, a);
        }

        return n + o.join(",") + i;
      }, r.formatUnits = f, r.parseUnits = c, r.formatEther = function (t) {
        return f(t, 18);
      }, r.parseEther = function (t) {
        return c(t, 18);
      };
    }, {
      "../constants": 3,
      "../errors": 5,
      "./bignumber": 63
    }],
    85: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n,
          i,
          o = t("../constants"),
          s = t("../errors"),
          a = t("./bytes");

      function u(t, e) {
        void 0 === e && (e = n.current), e != n.current && (s.checkNormalize(), t = t.normalize(e));

        for (var r = [], i = 0; i < t.length; i++) {
          var o = t.charCodeAt(i);
          if (o < 128) r.push(o);else if (o < 2048) r.push(o >> 6 | 192), r.push(63 & o | 128);else if (55296 == (64512 & o)) {
            i++;
            var u = t.charCodeAt(i);
            if (i >= t.length || 56320 != (64512 & u)) throw new Error("invalid utf-8 string");
            o = 65536 + ((1023 & o) << 10) + (1023 & u), r.push(o >> 18 | 240), r.push(o >> 12 & 63 | 128), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128);
          } else r.push(o >> 12 | 224), r.push(o >> 6 & 63 | 128), r.push(63 & o | 128);
        }

        return a.arrayify(r);
      }

      function h(t, e) {
        t = a.arrayify(t);

        for (var r = "", n = 0; n < t.length;) {
          var i = t[n++];

          if (i >> 7 != 0) {
            var o = null,
                s = null;
            if (192 == (224 & i)) o = 1, s = 127;else if (224 == (240 & i)) o = 2, s = 2047;else {
              if (240 != (248 & i)) {
                if (e) continue;
                if (128 == (192 & i)) throw new Error("invalid utf8 byte sequence; unexpected continuation byte");
                throw new Error("invalid utf8 byte sequence; invalid prefix");
              }

              o = 3, s = 65535;
            }

            if (n + o > t.length) {
              if (!e) throw new Error("invalid utf8 byte sequence; too short");

              for (; n < t.length && t[n] >> 6 == 2; n++);
            } else {
              for (var u = i & (1 << 8 - o - 1) - 1, h = 0; h < o; h++) {
                var l = t[n];

                if (128 != (192 & l)) {
                  u = null;
                  break;
                }

                u = u << 6 | 63 & l, n++;
              }

              if (null !== u) {
                if (u <= s) {
                  if (!e) throw new Error("invalid utf8 byte sequence; overlong");
                } else if (1114111 < u) {
                  if (!e) throw new Error("invalid utf8 byte sequence; out-of-range");
                } else if (55296 <= u && u <= 57343) {
                  if (!e) throw new Error("invalid utf8 byte sequence; utf-16 surrogate");
                } else u <= 65535 ? r += String.fromCharCode(u) : (u -= 65536, r += String.fromCharCode(55296 + (u >> 10 & 1023), 56320 + (1023 & u)));
              } else if (!e) throw new Error("invalid utf8 byte sequence; invalid continuation byte");
            }
          } else r += String.fromCharCode(i);
        }

        return r;
      }

      (i = n = r.UnicodeNormalizationForm || (r.UnicodeNormalizationForm = {})).current = "", i.NFC = "NFC", i.NFD = "NFD", i.NFKC = "NFKC", i.NFKD = "NFKD", r.toUtf8Bytes = u, r.toUtf8String = h, r.formatBytes32String = function (t) {
        var e = u(t);
        if (31 < e.length) throw new Error("bytes32 string must be less than 32 bytes");
        return a.hexlify(a.concat([e, o.HashZero]).slice(0, 32));
      }, r.parseBytes32String = function (t) {
        var e = a.arrayify(t);
        if (32 !== e.length) throw new Error("invalid bytes32 - not 32 bytes long");
        if (0 !== e[31]) throw new Error("invalid bytes32 string - no null terminator");

        for (var r = 31; 0 === e[r - 1];) r--;

        return h(e.slice(0, r));
      };
    }, {
      "../constants": 3,
      "../errors": 5,
      "./bytes": 64
    }],
    86: [function (t, e, r) {
      var n = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var i = t("xmlhttprequest"),
          o = t("./base64"),
          s = t("./properties"),
          a = t("./utf8"),
          u = n(t("../errors"));
      r.fetchJson = function (t, e, r) {
        var n = {},
            s = null,
            h = 12e4;
        if ("string" == typeof t) s = t;else if ("object" == typeof t) {
          if (null == t.url && u.throwError("missing URL", u.MISSING_ARGUMENT, {
            arg: "url"
          }), s = t.url, "number" == typeof t.timeout && 0 < t.timeout && (h = t.timeout), t.headers) for (var l in t.headers) n[l.toLowerCase()] = {
            key: l,
            value: String(t.headers[l])
          };

          if (null != t.user && null != t.password) {
            "https:" !== s.substring(0, 6) && !0 !== t.allowInsecure && u.throwError("basic authentication requires a secure https url", u.INVALID_ARGUMENT, {
              arg: "url",
              url: s,
              user: t.user,
              password: "[REDACTED]"
            });
            var f = t.user + ":" + t.password;
            n.authorization = {
              key: "Authorization",
              value: "Basic " + o.encode(a.toUtf8Bytes(f))
            };
          }
        }
        return new Promise(function (t, o) {
          var a = new i.XMLHttpRequest(),
              u = null;

          function l() {
            null != u && (clearTimeout(u), u = null);
          }

          u = setTimeout(function () {
            null != u && (u = null, o(new Error("timeout")), setTimeout(function () {
              a.abort();
            }, 0));
          }, h), e ? (a.open("POST", s, !0), n["content-type"] = {
            key: "Content-Type",
            value: "application/json"
          }) : a.open("GET", s, !0), Object.keys(n).forEach(function (t) {
            var e = n[t];
            a.setRequestHeader(e.key, e.value);
          }), a.onreadystatechange = function () {
            if (4 === a.readyState) {
              if (200 != a.status) {
                l();
                var n = new Error("invalid response - " + a.status);
                return n.statusCode = a.status, a.responseText && (n.responseText = a.responseText), void o(n);
              }

              var i = null;

              try {
                i = JSON.parse(a.responseText);
              } catch (n) {
                l();
                var u = new Error("invalid json response");
                return u.orginialError = n, u.responseText = a.responseText, null != e && (u.requestBody = e), u.url = s, void o(u);
              }

              if (r) try {
                i = r(i);
              } catch (n) {
                return l(), n.url = s, n.body = e, n.responseText = a.responseText, void o(n);
              }
              l(), t(i);
            }
          }, a.onerror = function (t) {
            l(), o(t);
          };

          try {
            null != e ? a.send(e) : a.send();
          } catch (u) {
            l();
            var f = new Error("connection error");
            f.error = u, o(f);
          }
        });
      }, r.poll = function (t, e) {
        return e = e || {}, null == (e = s.shallowCopy(e)).floor && (e.floor = 0), null == e.ceiling && (e.ceiling = 1e4), null == e.interval && (e.interval = 250), new Promise(function (r, n) {
          var i = null,
              o = !1,
              s = function () {
            return !o && (o = !0, i && clearTimeout(i), !0);
          };

          e.timeout && (i = setTimeout(function () {
            s() && n(new Error("timeout"));
          }, e.timeout));
          var a = e.fastRetry || null,
              u = 0;
          !function i() {
            return t().then(function (t) {
              if (void 0 !== t) s() && r(t);else if (e.onceBlock) e.onceBlock.once("block", i);else if (!o) {
                u++;
                var n = e.interval * parseInt(String(Math.random() * Math.pow(2, u)));
                n < e.floor && (n = e.floor), n > e.ceiling && (n = e.ceiling), a && (u--, n = a, a = null), setTimeout(i, n);
              }
              return null;
            }, function (t) {
              s() && n(t);
            });
          }();
        });
      };
    }, {
      "../errors": 5,
      "./base64": 61,
      "./properties": 74,
      "./utf8": 85,
      xmlhttprequest: 49
    }],
    87: [function (t, e, n) {
      (function (e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        });
        var r = t("../utils/hash"),
            i = t("../utils/properties");

        n.check = function (t) {
          for (var e = [], n = 0; n < 2048; n++) {
            var i = t.getWord(n);
            if (n !== t.getWordIndex(i)) return "0x";
            e.push(i);
          }

          return r.id(e.join("\n") + "\n");
        };

        var o = (s.prototype.split = function (t) {
          return t.toLowerCase().split(/ +/g);
        }, s.prototype.join = function (t) {
          return t.join(" ");
        }, s);

        function s(t) {
          i.defineReadOnly(this, "locale", t);
        }

        n.Wordlist = o, n.register = function (t, e) {
          e = e || t.locale;
        };
      }).call(this, void 0 !== _indexD3bd.f ? _indexD3bd.f : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../utils/hash": 65,
      "../utils/properties": 74
    }],
    88: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }),
          o = this && this.__importStar || function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e.default = t, e;
      };

      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var s,
          a = t("./utils/bytes"),
          u = t("./utils/hash"),
          h = t("./utils/hdnode"),
          l = t("./utils/json-wallet"),
          f = t("./utils/keccak256"),
          c = t("./utils/properties"),
          d = t("./utils/random-bytes"),
          p = o(t("./utils/secret-storage")),
          m = t("./utils/signing-key"),
          v = t("./utils/transaction"),
          g = t("./abstract-signer"),
          y = t("./providers/abstract-provider"),
          w = o(t("./errors")),
          b = (i(_, s = g.Signer), Object.defineProperty(_.prototype, "address", {
        get: function () {
          return this.signingKey.address;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(_.prototype, "mnemonic", {
        get: function () {
          return this.signingKey.mnemonic;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(_.prototype, "path", {
        get: function () {
          return this.signingKey.path;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(_.prototype, "privateKey", {
        get: function () {
          return this.signingKey.privateKey;
        },
        enumerable: !0,
        configurable: !0
      }), _.prototype.connect = function (t) {
        return y.Provider.isProvider(t) || w.throwError("invalid provider", w.INVALID_ARGUMENT, {
          argument: "provider",
          value: t
        }), new _(this.signingKey, t);
      }, _.prototype.getAddress = function () {
        return Promise.resolve(this.address);
      }, _.prototype.sign = function (t) {
        var e = this;
        return c.resolveProperties(t).then(function (t) {
          var r = v.serialize(t),
              n = e.signingKey.signDigest(f.keccak256(r));
          return v.serialize(t, n);
        });
      }, _.prototype.signMessage = function (t) {
        return Promise.resolve(a.joinSignature(this.signingKey.signDigest(u.hashMessage(t))));
      }, _.prototype.getBalance = function (t) {
        if (!this.provider) throw new Error("missing provider");
        return this.provider.getBalance(this.address, t);
      }, _.prototype.getTransactionCount = function (t) {
        if (!this.provider) throw new Error("missing provider");
        return this.provider.getTransactionCount(this.address, t);
      }, _.prototype.sendTransaction = function (t) {
        var e = this;
        if (!this.provider) throw new Error("missing provider");
        return null == t.nonce && ((t = c.shallowCopy(t)).nonce = this.getTransactionCount("pending")), v.populateTransaction(t, this.provider, this.address).then(function (t) {
          return e.sign(t).then(function (t) {
            return e.provider.sendTransaction(t);
          });
        });
      }, _.prototype.encrypt = function (t, e, r) {
        if ("function" != typeof e || r || (r = e, e = {}), r && "function" != typeof r) throw new Error("invalid callback");
        return e = e || {}, this.mnemonic && ((e = c.shallowCopy(e)).mnemonic = this.mnemonic, e.path = this.path), p.encrypt(this.privateKey, t, e, r);
      }, _.createRandom = function (t) {
        var e = d.randomBytes(16);
        (t = t || {}).extraEntropy && (e = a.arrayify(f.keccak256(a.concat([e, t.extraEntropy])).substring(0, 34)));
        var r = h.entropyToMnemonic(e, t.locale);
        return _.fromMnemonic(r, t.path, t.locale);
      }, _.fromEncryptedJson = function (t, e, r) {
        if (l.isCrowdsaleWallet(t)) try {
          r && r(0);
          var n = p.decryptCrowdsale(t, e);
          return r && r(1), Promise.resolve(new _(n));
        } catch (t) {
          return Promise.reject(t);
        } else if (l.isSecretStorageWallet(t)) return p.decrypt(t, e, r).then(function (t) {
          return new _(t);
        });
        return Promise.reject("invalid wallet JSON");
      }, _.fromMnemonic = function (t, e, r) {
        return e = e || h.defaultPath, new _(h.fromMnemonic(t, r).derivePath(e));
      }, _);

      function _(t, e) {
        var r = s.call(this) || this;
        return w.checkNew(r, _), m.SigningKey.isSigningKey(t) ? c.defineReadOnly(r, "signingKey", t) : c.defineReadOnly(r, "signingKey", new m.SigningKey(t)), c.defineReadOnly(r, "provider", e), r;
      }

      r.Wallet = b;
    }, {
      "./abstract-signer": 2,
      "./errors": 5,
      "./providers/abstract-provider": 50,
      "./utils/bytes": 64,
      "./utils/hash": 65,
      "./utils/hdnode": 66,
      "./utils/json-wallet": 70,
      "./utils/keccak256": 71,
      "./utils/properties": 74,
      "./utils/random-bytes": 75,
      "./utils/secret-storage": 78,
      "./utils/signing-key": 81,
      "./utils/transaction": 83
    }],
    89: [function (t, e, r) {
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var n = t("../wordlists/lang-en").langEn;
      r.en = n;
    }, {
      "../wordlists/lang-en": 90
    }],
    90: [function (t, e, r) {
      var n,
          i = this && this.__extends || (n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, function (t, e) {
        function r() {
          this.constructor = t;
        }

        n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      });
      Object.defineProperty(r, "__esModule", {
        value: !0
      });
      var o,
          s = t("../utils/wordlist"),
          a = null;

      function u(t) {
        if (null == a && (a = "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo".replace(/([A-Z])/g, " $1").toLowerCase().substring(1).split(" "), "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !== s.check(t))) throw a = null, new Error("BIP39 Wordlist for en (English) FAILED");
      }

      function h() {
        return o.call(this, "en") || this;
      }

      var l = new (i(h, o = s.Wordlist), h.prototype.getWord = function (t) {
        return u(this), a[t];
      }, h.prototype.getWordIndex = function (t) {
        return u(this), a.indexOf(t);
      }, h)();
      r.langEn = l, s.register(l);
    }, {
      "../utils/wordlist": 87
    }]
  }, {}, [7])(7);
}));
var rr = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
    nr = new Uint8Array(16);

function ir() {
  if (!rr) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return rr(nr);
}

for (var or, sr, ar = [], ur = 0; ur < 256; ++ur) ar[ur] = (ur + 256).toString(16).substr(1);

function hr(t, e) {
  var r = e || 0,
      n = ar;
  return [n[t[r++]], n[t[r++]], n[t[r++]], n[t[r++]], "-", n[t[r++]], n[t[r++]], "-", n[t[r++]], n[t[r++]], "-", n[t[r++]], n[t[r++]], "-", n[t[r++]], n[t[r++]], n[t[r++]], n[t[r++]], n[t[r++]], n[t[r++]]].join("");
}

var lr = 0,
    fr = 0;

function cr(t, e, r) {
  var n = function (t, n, i, o) {
    var s = i && o || 0;
    if ("string" == typeof t && (t = function (t) {
      t = unescape(encodeURIComponent(t));

      for (var e = new Array(t.length), r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);

      return e;
    }(t)), "string" == typeof n && (n = function (t) {
      var e = [];
      return t.replace(/[a-fA-F0-9]{2}/g, function (t) {
        e.push(parseInt(t, 16));
      }), e;
    }(n)), !Array.isArray(t)) throw TypeError("value must be an array of bytes");
    if (!Array.isArray(n) || 16 !== n.length) throw TypeError("namespace must be uuid string or an Array of 16 byte values");
    var a = r(n.concat(t));
    if (a[6] = 15 & a[6] | e, a[8] = 63 & a[8] | 128, i) for (var u = 0; u < 16; ++u) i[s + u] = a[u];
    return i || hr(a);
  };

  try {
    n.name = t;
  } catch (t) {}

  return n.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", n.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", n;
}

function dr(t, e) {
  var r = (65535 & t) + (65535 & e);
  return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r;
}

function pr(t, e, r, n, i, o) {
  return dr((s = dr(dr(e, t), dr(n, o))) << (a = i) | s >>> 32 - a, r);
  var s, a;
}

function mr(t, e, r, n, i, o, s) {
  return pr(e & r | ~e & n, t, e, i, o, s);
}

function vr(t, e, r, n, i, o, s) {
  return pr(e & n | r & ~n, t, e, i, o, s);
}

function gr(t, e, r, n, i, o, s) {
  return pr(e ^ r ^ n, t, e, i, o, s);
}

function yr(t, e, r, n, i, o, s) {
  return pr(r ^ (e | ~n), t, e, i, o, s);
}

var wr = cr("v3", 48, function (t) {
  if ("string" == typeof t) {
    var e = unescape(encodeURIComponent(t));
    t = new Array(e.length);

    for (var r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
  }

  return function (t) {
    var e,
        r,
        n,
        i = [],
        o = 32 * t.length;

    for (e = 0; e < o; e += 8) r = t[e >> 5] >>> e % 32 & 255, n = parseInt("0123456789abcdef".charAt(r >>> 4 & 15) + "0123456789abcdef".charAt(15 & r), 16), i.push(n);

    return i;
  }(function (t, e) {
    var r, n, i, o, s;
    t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
    var a = 1732584193,
        u = -271733879,
        h = -1732584194,
        l = 271733878;

    for (r = 0; r < t.length; r += 16) n = a, i = u, o = h, s = l, a = mr(a, u, h, l, t[r], 7, -680876936), l = mr(l, a, u, h, t[r + 1], 12, -389564586), h = mr(h, l, a, u, t[r + 2], 17, 606105819), u = mr(u, h, l, a, t[r + 3], 22, -1044525330), a = mr(a, u, h, l, t[r + 4], 7, -176418897), l = mr(l, a, u, h, t[r + 5], 12, 1200080426), h = mr(h, l, a, u, t[r + 6], 17, -1473231341), u = mr(u, h, l, a, t[r + 7], 22, -45705983), a = mr(a, u, h, l, t[r + 8], 7, 1770035416), l = mr(l, a, u, h, t[r + 9], 12, -1958414417), h = mr(h, l, a, u, t[r + 10], 17, -42063), u = mr(u, h, l, a, t[r + 11], 22, -1990404162), a = mr(a, u, h, l, t[r + 12], 7, 1804603682), l = mr(l, a, u, h, t[r + 13], 12, -40341101), h = mr(h, l, a, u, t[r + 14], 17, -1502002290), u = mr(u, h, l, a, t[r + 15], 22, 1236535329), a = vr(a, u, h, l, t[r + 1], 5, -165796510), l = vr(l, a, u, h, t[r + 6], 9, -1069501632), h = vr(h, l, a, u, t[r + 11], 14, 643717713), u = vr(u, h, l, a, t[r], 20, -373897302), a = vr(a, u, h, l, t[r + 5], 5, -701558691), l = vr(l, a, u, h, t[r + 10], 9, 38016083), h = vr(h, l, a, u, t[r + 15], 14, -660478335), u = vr(u, h, l, a, t[r + 4], 20, -405537848), a = vr(a, u, h, l, t[r + 9], 5, 568446438), l = vr(l, a, u, h, t[r + 14], 9, -1019803690), h = vr(h, l, a, u, t[r + 3], 14, -187363961), u = vr(u, h, l, a, t[r + 8], 20, 1163531501), a = vr(a, u, h, l, t[r + 13], 5, -1444681467), l = vr(l, a, u, h, t[r + 2], 9, -51403784), h = vr(h, l, a, u, t[r + 7], 14, 1735328473), u = vr(u, h, l, a, t[r + 12], 20, -1926607734), a = gr(a, u, h, l, t[r + 5], 4, -378558), l = gr(l, a, u, h, t[r + 8], 11, -2022574463), h = gr(h, l, a, u, t[r + 11], 16, 1839030562), u = gr(u, h, l, a, t[r + 14], 23, -35309556), a = gr(a, u, h, l, t[r + 1], 4, -1530992060), l = gr(l, a, u, h, t[r + 4], 11, 1272893353), h = gr(h, l, a, u, t[r + 7], 16, -155497632), u = gr(u, h, l, a, t[r + 10], 23, -1094730640), a = gr(a, u, h, l, t[r + 13], 4, 681279174), l = gr(l, a, u, h, t[r], 11, -358537222), h = gr(h, l, a, u, t[r + 3], 16, -722521979), u = gr(u, h, l, a, t[r + 6], 23, 76029189), a = gr(a, u, h, l, t[r + 9], 4, -640364487), l = gr(l, a, u, h, t[r + 12], 11, -421815835), h = gr(h, l, a, u, t[r + 15], 16, 530742520), u = gr(u, h, l, a, t[r + 2], 23, -995338651), a = yr(a, u, h, l, t[r], 6, -198630844), l = yr(l, a, u, h, t[r + 7], 10, 1126891415), h = yr(h, l, a, u, t[r + 14], 15, -1416354905), u = yr(u, h, l, a, t[r + 5], 21, -57434055), a = yr(a, u, h, l, t[r + 12], 6, 1700485571), l = yr(l, a, u, h, t[r + 3], 10, -1894986606), h = yr(h, l, a, u, t[r + 10], 15, -1051523), u = yr(u, h, l, a, t[r + 1], 21, -2054922799), a = yr(a, u, h, l, t[r + 8], 6, 1873313359), l = yr(l, a, u, h, t[r + 15], 10, -30611744), h = yr(h, l, a, u, t[r + 6], 15, -1560198380), u = yr(u, h, l, a, t[r + 13], 21, 1309151649), a = yr(a, u, h, l, t[r + 4], 6, -145523070), l = yr(l, a, u, h, t[r + 11], 10, -1120210379), h = yr(h, l, a, u, t[r + 2], 15, 718787259), u = yr(u, h, l, a, t[r + 9], 21, -343485551), a = dr(a, n), u = dr(u, i), h = dr(h, o), l = dr(l, s);

    return [a, u, h, l];
  }(function (t) {
    var e,
        r = [];

    for (r[(t.length >> 2) - 1] = void 0, e = 0; e < r.length; e += 1) r[e] = 0;

    var n = 8 * t.length;

    for (e = 0; e < n; e += 8) r[e >> 5] |= (255 & t[e / 8]) << e % 32;

    return r;
  }(t), 8 * t.length));
});

function br(t, e, r, n) {
  switch (t) {
    case 0:
      return e & r ^ ~e & n;

    case 1:
      return e ^ r ^ n;

    case 2:
      return e & r ^ e & n ^ r & n;

    case 3:
      return e ^ r ^ n;
  }
}

function _r(t, e) {
  return t << e | t >>> 32 - e;
}

var Mr = cr("v5", 80, function (t) {
  var e = [1518500249, 1859775393, 2400959708, 3395469782],
      r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];

  if ("string" == typeof t) {
    var n = unescape(encodeURIComponent(t));
    t = new Array(n.length);

    for (var i = 0; i < n.length; i++) t[i] = n.charCodeAt(i);
  }

  t.push(128);
  var o = t.length / 4 + 2,
      s = Math.ceil(o / 16),
      a = new Array(s);

  for (i = 0; i < s; i++) {
    a[i] = new Array(16);

    for (var u = 0; u < 16; u++) a[i][u] = t[64 * i + 4 * u] << 24 | t[64 * i + 4 * u + 1] << 16 | t[64 * i + 4 * u + 2] << 8 | t[64 * i + 4 * u + 3];
  }

  for (a[s - 1][14] = 8 * (t.length - 1) / Math.pow(2, 32), a[s - 1][14] = Math.floor(a[s - 1][14]), a[s - 1][15] = 8 * (t.length - 1) & 4294967295, i = 0; i < s; i++) {
    for (var h = new Array(80), l = 0; l < 16; l++) h[l] = a[i][l];

    for (l = 16; l < 80; l++) h[l] = _r(h[l - 3] ^ h[l - 8] ^ h[l - 14] ^ h[l - 16], 1);

    var f = r[0],
        c = r[1],
        d = r[2],
        p = r[3],
        m = r[4];

    for (l = 0; l < 80; l++) {
      var v = Math.floor(l / 20),
          g = _r(f, 5) + br(v, c, d, p) + m + e[v] + h[l] >>> 0;
      m = p, p = d, d = _r(c, 30) >>> 0, c = f, f = g;
    }

    r[0] = r[0] + f >>> 0, r[1] = r[1] + c >>> 0, r[2] = r[2] + d >>> 0, r[3] = r[3] + p >>> 0, r[4] = r[4] + m >>> 0;
  }

  return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, 255 & r[0], r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, 255 & r[1], r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, 255 & r[2], r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, 255 & r[3], r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, 255 & r[4]];
}),
    Sr = Object.freeze({
  __proto__: null,
  v1: function (t, e, r) {
    var n = e && r || 0,
        i = e || [],
        o = (t = t || {}).node || or,
        s = void 0 !== t.clockseq ? t.clockseq : sr;

    if (null == o || null == s) {
      var a = t.random || (t.rng || ir)();
      null == o && (o = or = [1 | a[0], a[1], a[2], a[3], a[4], a[5]]), null == s && (s = sr = 16383 & (a[6] << 8 | a[7]));
    }

    var u = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
        h = void 0 !== t.nsecs ? t.nsecs : fr + 1,
        l = u - lr + (h - fr) / 1e4;
    if (l < 0 && void 0 === t.clockseq && (s = s + 1 & 16383), (l < 0 || u > lr) && void 0 === t.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    lr = u, fr = h, sr = s;
    var f = (1e4 * (268435455 & (u += 122192928e5)) + h) % 4294967296;
    i[n++] = f >>> 24 & 255, i[n++] = f >>> 16 & 255, i[n++] = f >>> 8 & 255, i[n++] = 255 & f;
    var c = u / 4294967296 * 1e4 & 268435455;
    i[n++] = c >>> 8 & 255, i[n++] = 255 & c, i[n++] = c >>> 24 & 15 | 16, i[n++] = c >>> 16 & 255, i[n++] = s >>> 8 | 128, i[n++] = 255 & s;

    for (var d = 0; d < 6; ++d) i[n + d] = o[d];

    return e || hr(i);
  },
  v3: wr,
  v4: function (t, e, r) {
    var n = e && r || 0;
    "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
    var i = (t = t || {}).random || (t.rng || ir)();
    if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, e) for (var o = 0; o < 16; ++o) e[n + o] = i[o];
    return e || hr(i);
  },
  v5: Mr
}),
    Er = (0, _indexD3bd.d)(function (t, e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  e.uuid = function () {
    return Sr.v4();
  };

  const r = {
    v4: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u,
    v5: /(?:^[a-f0-9]{8}-[a-f0-9]{4}-5[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
  };
  e.regex = r;

  e.isUuid = function (t) {
    return r.v4.test(t) || r.v5.test(t);
  };

  e.empty = function () {
    return "00000000-0000-0000-0000-000000000000";
  };

  e.fromString = function (t) {
    return Sr.v5(t, "bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45");
  };
}),
    kr = (0, _indexD3bd.e)(Er),
    Ar = Er.uuid,
    xr = Er.regex,
    Tr = Er.isUuid,
    Nr = Er.empty,
    Pr = Er.fromString,
    Rr = Object.freeze({
  __proto__: null,
  default: kr,
  __moduleExports: Er,
  uuid: Ar,
  regex: xr,
  isUuid: Tr,
  empty: Nr,
  fromString: Pr
}),
    Or = window && window.__awaiter || function (t, e, r, n) {
  return new (r || (r = Promise))(function (i, o) {
    function s(t) {
      try {
        u(n.next(t));
      } catch (t) {
        o(t);
      }
    }

    function a(t) {
      try {
        u(n.throw(t));
      } catch (t) {
        o(t);
      }
    }

    function u(t) {
      var e;
      t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function (t) {
        t(e);
      })).then(s, a);
    }

    u((n = n.apply(t, e || [])).next());
  });
};

const {
  uuid: Ir
} = Rr,
      Cr = Ir,
      Dr = t => Or(void 0, void 0, void 0, function* () {
  return new Promise(e => setTimeout(() => e(), t));
}),
      Lr = (t, e, r = 1) => {
  const n = new Map();
  let i = 0;
  return function (...r) {
    let o;
    return new Promise((s, a) => {
      const u = () => {
        s(t.apply(this, r)), n.delete(o);
      },
            h = Date.now();

      h - i > e && (i = h, o = setTimeout(u, i - h)), n.set(o, a);
    });
  };
};

var Ur = window && window.__awaiter || function (t, e, r, n) {
  return new (r || (r = Promise))(function (i, o) {
    function s(t) {
      try {
        u(n.next(t));
      } catch (t) {
        o(t);
      }
    }

    function a(t) {
      try {
        u(n.throw(t));
      } catch (t) {
        o(t);
      }
    }

    function u(t) {
      var e;
      t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function (t) {
        t(e);
      })).then(s, a);
    }

    u((n = n.apply(t, e || [])).next());
  });
};

class jr extends rt {
  constructor(t) {
    super(), this.isAuthereum = !0, this.lastSignTx = "", this.lastSignTxTimeout = null, this.lastTx = "", this.lastTxTimeout = null, this.lastMsg = "", this.lastMsgTimeout = null, this.lastTypedMsg = "", this.lastTypedMsgTimeout = null, this.concatAuthKeySig = t => Ur(this, void 0, void 0, function* () {
      let e = yield this.authereum.getLoginKeyAuthSignature();
      return e = e.slice(2), t.concat(e);
    });
    let e = null;
    t instanceof Kr && (e = t, t = e.config), this.config = t || {}, this.authereum = e || new Kr(this.config), this.initSubprovider(), this.isAuthereum = !0;
  }

  initSubprovider() {
    return Ur(this, void 0, void 0, function* () {
      yield this.authereum._tilReady(), this.rpcUri = this.config.rpcUri || (yield this.authereum.getRpcUri());
      const t = new ht({
        getAccounts: t => Ur(this, void 0, void 0, function* () {
          if (!(yield this.authereum.isAuthenticated())) return t && t(null, []), [];
          const e = yield this.authereum.getAccountAddress();
          return e ? (t && t(null, [e]), [e]) : (t && t(null, []), []);
        }),
        approveTransaction: (t, e) => Ur(this, void 0, void 0, function* () {
          return e && e(null, !0), !0;
        }),
        approveMessage: (t, e) => Ur(this, void 0, void 0, function* () {
          return e && e(null, !0), !0;
        }),
        approveTypedMessage: (t, e) => Ur(this, void 0, void 0, function* () {
          return e && e(null, !0), !0;
        }),
        signMessage: (t, e) => Ur(this, void 0, void 0, function* () {
          let r = t;

          try {
            r = JSON.stringify(t);
          } catch (t) {}

          if (clearTimeout(this.lastMsgTimeout), this.lastMsg === r) return this._throttledSignMessage(t, e);
          const n = !this.lastMsg;
          return this.lastMsg = r, this.lastMsgTimeout = setTimeout(() => {
            this.lastMsg = "";
          }, 2e3), n ? this._throttledSignMessage(t, e) : this._signMessage(t, e);
        }),
        signTransaction: (t, e) => Ur(this, void 0, void 0, function* () {
          const r = Object.assign({}, t);
          r.nonce = null;
          const n = JSON.stringify(r);
          if (clearTimeout(this.lastSignTxTimeout), this.lastSignTx === n) return this._throttledSignTransaction(t, e);
          const i = !this.lastSignTx;
          return this.lastSignTx = n, this.lastSignTxTimeout = setTimeout(() => {
            this.lastSignTx = "";
          }, 2e3), i ? this._throttledSignTransaction(t, e) : this._signTransaction(t, e);
        }),
        processTransaction: (t, e) => Ur(this, void 0, void 0, function* () {
          const r = Object.assign({}, t);
          r.nonce = null;
          const n = JSON.stringify(r);
          if (clearTimeout(this.lastTxTimeout), this.lastTx === n) return this._throttledProcessTransaction(t, e);
          const i = !this.lastTx;
          return this.lastTx = n, this.lastTxTimeout = setTimeout(() => {
            this.lastTx = "";
          }, 2e3), i ? this._throttledProcessTransaction(t, e) : this._processTransaction(t, e);
        }),
        approvePersonalMessage: (t, e) => Ur(this, void 0, void 0, function* () {
          return e && e(null, !0), !0;
        }),
        signPersonalMessage: (e, r) => Ur(this, void 0, void 0, function* () {
          return t.signMessage(e, r);
        }),
        signTypedMessage: (t, e) => Ur(this, void 0, void 0, function* () {
          let r = t;

          try {
            r = JSON.stringify(t);
          } catch (t) {}

          if (clearTimeout(this.lastTypedMsgTimeout), this.lastTypedMsg === r) return this._throttledSignTypedMessage(t, e);
          const n = !this.lastTypedMsg;
          return this.lastTypedMsg = r, this.lastTypedMsgTimeout = setTimeout(() => {
            this.lastTypedMsg = "";
          }, 2e3), n ? this._throttledSignTypedMessage(t, e) : this._signTypedMessage(t, e);
        })
      });
      this.walletSubprovider = t, this._processTransaction = (e, r) => Ur(this, void 0, void 0, function* () {
        try {
          const n = yield ve(t.signTransaction.bind(t))(e),
                i = er(n);
          return r && r(null, i), i;
        } catch (t) {
          if (r) return void r(t);
          throw t;
        }
      }), this._throttledProcessTransaction = Lr((t, e) => Ur(this, void 0, void 0, function* () {
        return this._processTransaction(t, e);
      }), 2e3), this._signMessage = (t, e) => Ur(this, void 0, void 0, function* () {
        try {
          const r = yield this.authereum.signWithDappKey(t.data);
          let n = yield this.authereum.getLoginKeyAuthSignature(),
              i = yield this.authereum.getLoginKeyRestrictionsData();
          n = n.slice(2), i = i.slice(2);
          const o = r.concat(n, i);
          return e && e(null, o), o;
        } catch (t) {
          e && e(t);
        }
      }), this._throttledSignMessage = Lr((t, e) => Ur(this, void 0, void 0, function* () {
        return this._signMessage(t, e);
      }), 2e3), this._signTypedMessage = (t, e) => Ur(this, void 0, void 0, function* () {
        try {
          const r = yield this.authereum.signTypedMessageWithDappKey(t.data),
                n = yield this.concatAuthKeySig(r);
          return e && e(null, n), n;
        } catch (t) {
          e && e(t);
        }
      }), this._throttledSignTypedMessage = Lr((t, e) => Ur(this, void 0, void 0, function* () {
        return this._signTypedMessage(t, e);
      }), 2e3), this._signTransaction = (t, e) => Ur(this, void 0, void 0, function* () {
        try {
          const r = yield this.authereum.signTransactionWithLoginKey(t);
          if (!r) throw new Error("Error signing transaction");
          return e && e(null, r.signedTransactionData), r.signedTransactionData;
        } catch (t) {
          e(t);
        }
      }), this._throttledSignTransaction = Lr((t, e) => Ur(this, void 0, void 0, function* () {
        return this._signTransaction(t, e);
      }), 2e3), this._sendAsync = this.sendAsync, this.sendAsync = (t, e) => Ur(this, void 0, void 0, function* () {
        return new Promise((r, n) => {
          e || (e = (t, e) => {
            t ? n(t) : r(e);
          }), this._sendAsync(t, e);
        });
      }), this.send = (t, e) => {
        if ("string" == typeof t) return new Promise((r, n) => {
          this.sendAsync({
            jsonrpc: "2.0",
            id: 42,
            method: t,
            params: e || []
          }, (t, e) => {
            t ? n(t) : r(e.result);
          });
        });
        if (e) return void this.sendAsync(t, e);
        let r = null;

        switch (t.method) {
          case "eth_uninstallFilter":
            this.sendAsync(t, () => {}), r = !0;
            break;

          default:
            let e = `The Authereum Web3 object does not support synchronous methods like ${t.method} without a callback parameter.`;
            throw new Error(e);
        }

        return {
          id: t.id,
          jsonrpc: t.jsonrpc,
          result: r
        };
      }, t.handleRequest = function (t, e, r) {
        const n = this;
        let i, o, s, u, h;

        switch (n._parityRequests = {}, n._parityRequestCount = 0, t.method) {
          case "eth_coinbase":
            return void n.getAccounts(function (t, e) {
              if (t) return r(t);
              let n = e[0] || null;
              r(null, n);
            });

          case "eth_accounts":
            return void n.getAccounts(function (t, e) {
              if (t) return r(t);
              r(null, e);
            });

          case "eth_sendTransaction":
            return i = t.params[0], void K([t => n.processTransaction(i, t)], r);

          case "eth_signTransaction":
            return i = t.params[0], void K([t => n.processSignTransaction(i, t)], r);

          case "eth_sign":
            return h = t.params[0], u = t.params[1], s = t.params[2] || {}, o = (0, _subscriptionManager0493518a.e)(s, {
              from: h,
              data: u
            }), void K([t => n.processMessage(o, t)], r);

          case "personal_sign":
            return function () {
              const e = t.params[0];

              if (Fr(t.params[1]) && Br(e)) {
                let e = "The eth_personalSign method requires params ordered ";
                e += "[message, address]. This was previously handled incorrectly, ", e += "and has been corrected automatically. ", e += "Please switch this param order for smooth behavior in the future.", console.warn(e), h = t.params[0], u = t.params[1];
              } else u = t.params[0], h = t.params[1];

              s = t.params[2] || {}, o = (0, _subscriptionManager0493518a.e)(s, {
                from: h,
                data: u
              }), K([t => n.processPersonalMessage(o, t)], r);
            }();

          case "eth_decryptMessage":
            return function () {
              const e = t.params[0];

              if (Fr(t.params[1]) && Br(e)) {
                let e = "The eth_decryptMessage method requires params ordered ";
                e += "[message, address]. This was previously handled incorrectly, ", e += "and has been corrected automatically. ", e += "Please switch this param order for smooth behavior in the future.", console.warn(e), h = t.params[0], u = t.params[1];
              } else u = t.params[0], h = t.params[1];

              s = t.params[2] || {}, o = (0, _subscriptionManager0493518a.e)(s, {
                from: h,
                data: u
              }), K([t => n.validateDecryptMessage(o, t), t => n.processDecryptMessage(o, t)], r);
            }();

          case "encryption_public_key":
            return h = t.params[0], void K([t => n.validateEncryptionPublicKey(h, t), t => n.processEncryptionPublicKey(h, t)], r);

          case "personal_ecRecover":
            return function () {
              u = t.params[0];
              let e = t.params[1];
              s = t.params[2] || {}, o = (0, _subscriptionManager0493518a.e)(s, {
                sig: e,
                data: u
              }), n.recoverPersonalSignature(o, r);
            }();

          case "eth_signTypedData":
            return u = t.params[0], h = t.params[1], s = t.params[2] || {}, o = (0, _subscriptionManager0493518a.e)(s, {
              from: h,
              data: u
            }), void K([t => n.processTypedMessage(o, t)], r);

          case "eth_signTypedData_v3":
            return h = t.params[0], u = t.params[1], s = t.params[2] || {}, o = (0, _subscriptionManager0493518a.e)(s, {
              from: h,
              data: u
            }), void K([t => n.processTypedMessage(o, t)], r);

          case "parity_postTransaction":
            return i = t.params[0], void n.parityPostTransaction(i, r);

          case "parity_postSign":
            return h = t.params[0], u = t.params[1], void n.parityPostSign(h, u, r);

          case "parity_checkRequest":
            return function () {
              const e = t.params[0];
              n.parityCheckRequest(e, r);
            }();

          case "parity_defaultAccount":
            return void n.getAccounts(function (t, e) {
              if (t) return r(t);
              const n = e[0] || null;
              r(null, n);
            });

          default:
            return void e();
        }
      }, t.validatePersonalMessage = (t, e) => Ur(this, void 0, void 0, function* () {
        return e && e(null, !0), !0;
      }), t.validateMessage = (t, e) => Ur(this, void 0, void 0, function* () {
        return e && e(null, !0), !0;
      }), t.validateTypedMessage = (t, e) => Ur(this, void 0, void 0, function* () {
        return e && e(null, !0), !0;
      }), this.addProvider(t), this.rpcSubProvider = new le({
        rpcUrl: this.rpcUri
      }), this.addProvider(new de()), this.addProvider(new pe()), this.addProvider({
        setEngine: t => t,
        handleRequest: (t, e, r) => Ur(this, void 0, void 0, function* () {
          this.rpcSubProvider.handleRequest(t, e, r);
        })
      }), this.on("error", t => {
        console.error(t.stack);
      }), this.start(), this._blockTracker.removeAllListeners();
    });
  }

  getAccounts(t) {
    return Ur(this, void 0, void 0, function* () {
      if (!(yield this.authereum.isAuthenticated())) return t && t(null, []), [];
      const e = yield this.authereum.getAccountAddress();
      return e ? (t && t(null, [e]), [e]) : (t && t(null, []), []);
    });
  }

  isConnected() {
    return this.authereum.isAuthenticatedSync();
  }

  enable() {
    return Ur(this, void 0, void 0, function* () {
      yield this.authereum.login();
      const t = yield this.authereum.getAccountAddress();
      return t ? [t] : [];
    });
  }

  disable() {
    return Ur(this, void 0, void 0, function* () {
      return this.authereum.logout();
    });
  }

  tilDomReady() {
    return new Promise(t => {
      "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", () => t());
    });
  }

  sendTransaction(t) {
    return Ur(this, void 0, void 0, function* () {
      return this.sendTransactionBatch([t]);
    });
  }

  sendTransactionBatch(t) {
    return Ur(this, void 0, void 0, function* () {
      return this.authereum.sendTransactionBatch(t);
    });
  }

  estimateGasBatch(t) {
    return Ur(this, void 0, void 0, function* () {
      return this.authereum.estimateGasBatch(t);
    });
  }

  sign(t) {
    return this._signMessage(t);
  }

  signMessageWithAdminKey(t) {
    return this.authereum.signMessageWithAdminKey(t);
  }

  signMessageWithSigningKey(t) {
    return this.authereum.signMessageWithSigningKey(t);
  }

  showWidget(t = !0) {
    return this.authereum.showWidget(t);
  }

  widgetEnabled() {
    return this.authereum.widgetEnabled();
  }

  getTransactionReceipt(t) {
    return this.authereum.getTransactionReceipt(t);
  }

  waitForTransactionReceipt(t) {
    return this.authereum.waitForTransactionReceipt(t);
  }

  isContractDeployed(t) {
    return this.authereum.isContractDeployed(t);
  }

}

exports.AuthereumProvider = jr;

function Br(t) {
  const e = (0, _subscriptionManager0493518a.h)(t);
  return (0, _subscriptionManager0493518a.i)(e);
}

function Fr(t) {
  const e = (0, _subscriptionManager0493518a.h)(t);
  return !(0, _subscriptionManager0493518a.i)(e) && function (t) {
    if ("string" != typeof t) return !1;
    if ("0x" !== t.slice(0, 2)) return !1;
    const e = t.slice(2);
    return e.match(/^[0-9A-Fa-f]+$/g);
  }(t);
}

const Hr = {
  xsUri: t => `https://${"mainnet" === t ? "" : `${t}.`}x.authereum.com`
};

var Gr = window && window.__awaiter || function (t, e, r, n) {
  return new (r || (r = Promise))(function (i, o) {
    function s(t) {
      try {
        u(n.next(t));
      } catch (t) {
        o(t);
      }
    }

    function a(t) {
      try {
        u(n.throw(t));
      } catch (t) {
        o(t);
      }
    }

    function u(t) {
      var e;
      t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function (t) {
        t(e);
      })).then(s, a);
    }

    u((n = n.apply(t, e || [])).next());
  });
};

const Wr = t => {
  const e = {};

  for (let r in t) {
    let n = t[r];
    "object" == typeof n && "function" === n.toString && (n = n.toString("hex")), e[r] = n;
  }

  return e;
},
      zr = {
  width: 0,
  height: 0,
  top: 0,
  left: 0
},
      qr = {
  notify: (t, e) => (console.log(t, e), {
    dismiss: () => {}
  })
};

class Kr extends L {
  constructor(t) {
    super(), this._notifier = qr, this._iframeReady = !1, this._configReady = !1, this._iframeConnecting = null, this._cacheReady = !1, this._readyEmitted = !1, this._widgetEnabled = !1, this._iframeStyle = zr, this._blockedPopupRedirect = !0, this._notificationsMap = {}, this._heartbeatStarted = !1, this._backoffTimeout = 1, this._userConfig = null, this._asymmetricEncryptionKey = null, this._authereumQueryParams = {}, this._injectedElements = [], this._destroyed = !1, this._init = t => {
      if ("string" == typeof t) {
        let e = t;
        if (this._networkName = (e || "").trim().toLowerCase(), ["mainnet", "ropsten", "rinkeby", "kovan", "goerli"].includes(this._networkName)) this._xsUri = Hr.xsUri(this._networkName);else {
          if ("localhost" !== t) throw new Error("Unsupported network");
          this._xsUri = "http://localhost:3002", this._networkName = "kovan";
        }
      } else t = t || {}, this._networkName = t.networkName || "mainnet", this._xsUri = t.xsUri || Hr.xsUri(this._networkName), this._apiKey = t.apiKey;

      t.redirectUri ? this._redirectUri = t.redirectUri : this._redirectUri = window.location.href, this._iframeStyle = {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      }, this._redirectUri = this._redirectUri || window.location.href, this._provider = new jr(this), this._setupNotifier(), this._connectToChildIframe().catch(() => {
        this._startHeartbeat(!0);
      }), this._setupCache(), this._cacheAuthereumQueryParams(), this._setupSigningKey(), this._setupResizeListener(), this._setupFocusListener(), this._setupActionKeyListener(), this._emitReadyEvent();
    }, this._setConfig = t => {
      if ("string" == typeof this._userConfig) {
        let t = this._userConfig;
        this._networkName = (t || "").trim().toLowerCase(), this._userConfig = {
          networkName: this._networkName,
          xsUri: Hr.xsUri(this._networkName)
        };
      }

      const {
        apiKey: e,
        apiUri: r,
        rpcUri: n,
        webUri: i,
        notifierUri: o,
        networkName: s,
        networkId: a,
        disableNotifications: u,
        blockedPopupRedirect: h
      } = this._userConfig || {};
      e && (this._apiKey = e), r ? this._apiUri = r : t.apiUri && (this._apiUri = t.apiUri), this._rpcUri = n || t.rpcUri, i ? this._webUri = i : t.webUri && (this._webUri = t.webUri), o ? this._notifierUri = o : t.notifierUri && (this._notifierUri = t.notifierUri), s ? this._networkName = s : t.networkName && (this._networkName = t.networkName), a ? this._networkId = a : t.networkId && (this._networkId = t.networkId), "boolean" == typeof u ? this._disableNotifications = u : "boolean" == typeof t.disableNotifications && (this._disableNotifications = t.disableNotifications), "boolean" == typeof h ? this._blockedPopupRedirect = h : "boolean" == typeof t.blockedPopupRedirect && (this._blockedPopupRedirect = t.blockedPopupRedirect);
    }, this._setupCache = () => Gr(this, void 0, void 0, function* () {
      yield Promise.all([this._cacheLoginKeyAddress(), this._cacheIsAuthenticated(), this._cacheAccountAddress()]), this._cacheReady = !0;
    }), this._handleWindowFocus = () => {
      if (!this._destroyed) return this._postMessageToChild({
        method: "onWindowFocus"
      });
    }, this._resetCache = () => Gr(this, void 0, void 0, function* () {
      return this._setupCache();
    }), this._setupNotifier = () => Gr(this, void 0, void 0, function* () {
      yield this._tilConfigReady(), this._notifierUri && (yield this._injectScript(this._notifierUri, "authereum-notifier"), window.AuthereumNotifier && (this._notifier = new window.AuthereumNotifier({
        networkId: this._networkId,
        disableNotifications: this._disableNotifications,
        context: this
      })));
    }), this._injectScript = (t, e = "") => Gr(this, void 0, void 0, function* () {
      return yield this._tilDomReady(), new Promise((r, n) => {
        if (!t) throw new Error("sourceUrl is required");
        if (document.getElementById(e)) return void r();
        const i = document.createElement("script");
        i.id = e, i.type = "text/javascript", i.async = !0, i.onload = () => {
          r();
        }, i.onerror = t => {
          n(t);
        }, i.src = t, this._injectedElements.push(i), document.getElementsByTagName("head")[0].appendChild(i);
      });
    }), this._setupResizeListener = () => Gr(this, void 0, void 0, function* () {
      window.addEventListener("resize", this._handleResizeThrottled, !1), window.addEventListener("resize", this._handleResizeDebounced, !1);
    }), this._handleActionKeyPress = t => {
      if (this._destroyed) return;
      let e = "";
      return "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode ? e = "escape" : "Enter" === t.key || 13 === t.keyCode ? e = "enter" : "ArrowLeft" === t.key || 37 === t.keyCode ? e = "left" : "ArrowUp" === t.key || 38 === t.keyCode ? e = "up" : "ArrowRight" === t.key || 39 === t.keyCode ? e = "right" : "ArrowDown" !== t.key && 40 !== t.keyCode || (e = "down"), e ? this._postMessageToChild({
        method: "actionKeyPress",
        params: e
      }) : void 0;
    }, this._handleResize = t => Gr(this, void 0, void 0, function* () {
      if (this._destroyed) return;
      const t = yield this._getWindowSize();
      return this._postMessageToChild({
        method: "onResize",
        params: t
      });
    }), this._handleResizeThrottled = Lr(t => this._handleResize(t), 10), this._handleResizeDebounced = ((t, e) => {
      let r;
      return (...n) => {
        clearTimeout(r), r = setTimeout(() => {
          r = null, t(...n);
        }, e);
      };
    })(t => this._handleResize(t), 10), this._cacheLoginKeyAddress = () => Gr(this, void 0, void 0, function* () {
      const t = yield this._postMessageToChild({
        method: "getOrCreateLoginKey"
      });
      this._cachedLoginKeyAddress = t.publicAddress;
    }), this._cacheAccountAddress = () => Gr(this, void 0, void 0, function* () {
      const t = yield this._postMessageToChild({
        method: "getAccountAddress"
      });
      this._cachedAccountAddress = t;
    }), this._cacheIsAuthenticated = () => Gr(this, void 0, void 0, function* () {
      const t = yield this._postMessageToChild({
        method: "isAuthenticated"
      });
      this._cachedIsAuthenticated = t;
    }), this.login = Lr(() => Gr(this, void 0, void 0, function* () {
      if (yield this._tilConfigReady(), yield this._tilReady(), !this._cachedIsAuthenticated) return yield this._signLoginKeyRequest(this._cachedLoginKeyAddress), this.getAuthenticatedAccount();

      if (!this._notificationsMap.loggedIn) {
        const t = this._notifier.notify({
          type: "success",
          message: "You are logged into Authereum",
          timeout: 5e3
        });

        this._notificationsMap.loggedIn = t, setTimeout(() => {
          this._notificationsMap.loggedIn = null;
        }, 5e3);
      }

      return yield this.getAuthenticatedAccount();
    }), 250), this.authenticate = () => Gr(this, void 0, void 0, function* () {
      return console.warn("Deprecation notice: `authereum.authenticate()` is deprecated. Use `authereum.login()` instead."), this.login();
    }), this.isAuthenticated = () => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "isAuthenticated"
      }));
    }), this.logout = () => Gr(this, void 0, void 0, function* () {
      const t = yield this._postMessageToChild({
        method: "logout"
      });
      return yield this._resetCache(), this.emit("logout", {}), t;
    }), this.getAuthenticatedAccount = () => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "getAuthenticatedAccount"
      }));
    }), this.getDappKey = () => this._handleError(this._postMessageToChild({
      method: "getLoginKey"
    })), this.getLoginKey = () => (console.warn("Deprecation notice: `authereum.getLoginKey()` is deprecated. Use `authereum.getDappKey()` instead."), this.getDappKey()), this.signWithDappKey = Lr(t => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "signWithLoginKey",
        params: t
      }));
    }), 250), this.signWithLoginKey = Lr(t => Gr(this, void 0, void 0, function* () {
      return console.warn("Deprecation notice: `authereum.signWithLoginKey()` is deprecated. Use `authereum.signWithDappKey()` instead."), this.signWithDappKey(t);
    }), 250), this.signTypedMessageWithDappKey = Lr(t => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "signTypedMessageWithLoginKey",
        params: t
      }));
    }), 250), this.signMessageWithAdminKey = Lr(t => Gr(this, void 0, void 0, function* () {
      return console.warn("Deprecated: `authereum.signMessageWithAdminKey()` is deprecated. Use `authereum.signMessageWithSigningKey()` instead."), null;
    }), 250), this.signMessageWithSigningKey = Lr(t => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "signMessageWithSigningKey",
        params: t
      }));
    }), 250), this.getLoginKeyAuthSignature = () => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "getLoginKeyAuthSignature"
      }));
    }), this.getLoginKeyRestrictionsData = () => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "getLoginKeyRestrictionsData"
      }));
    }), this.getAccountAddress = () => Gr(this, void 0, void 0, function* () {
      return yield this._tilReady(), this._handleError(this._postMessageToChild({
        method: "getAccountAddress"
      }));
    }), this.getBalance = () => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "getBalance"
      }));
    }), this.getRpcUri = () => Gr(this, void 0, void 0, function* () {
      return yield this._tilConfigReady(), this._rpcUri;
    }), this.getNetworkId = () => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "getNetworkId"
      }));
    }), this.getNetworkName = () => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "getNetworkName"
      }));
    }), this.getProvider = () => this._provider, this._handleError = t => Gr(this, void 0, void 0, function* () {
      return t.catch(t => {
        throw this.emit("error", t), t;
      });
    }), this.signTransactionWithLoginKey = Lr(t => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "signTransactionWithLoginKey",
        params: Wr(t)
      }));
    }), 250), this.sendTransaction = Lr(t => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "sendTransaction",
        params: Wr(t)
      }));
    }), 250), this.sendTransactionBatch = Lr(t => Gr(this, void 0, void 0, function* () {
      return yield this._tilReady(), this._handleError(this._postMessageToChild({
        method: "sendTransactionBatch",
        params: t.map(Wr)
      }));
    }), 250), this.estimateGasBatch = Lr(t => Gr(this, void 0, void 0, function* () {
      return yield this._tilReady(), this._handleError(this._postMessageToChild({
        method: "estimateGasBatch",
        params: t.map(Wr)
      }));
    }), 250), this.isReady = () => this._iframeReady && this._cacheReady, this.updateConfig = t => {
      this._userConfig = t, this._setConfig(t);
    }, this.getConfig = () => ({
      apiUri: this._apiUri,
      rpcUri: this._rpcUri,
      webUri: this._webUri,
      xsUri: this._xsUri,
      networkName: this._networkName,
      networkId: this._networkId,
      disableNotifications: this._disableNotifications
    }), this.showWidget = (t = !0) => t ? (this._widgetEnabled = !0, this._refreshWidget(), !0) : this.hideWidget(), this.hideWidget = () => (this._widgetEnabled = !1, this._setIframeWidth(0), this._setIframeHeight(0), !0), this.widgetEnabled = () => this._widgetEnabled, this.addFunds = t => (this._widgetEnabled = !0, this._postMessageToChild({
      method: "addFunds",
      params: t
    })), this._openUrl = (t = {}) => {
      const {
        url: e,
        newWindow: r
      } = t;
      r ? window.open(e, "_blank") : window.location.href = e;
    }, this._tilIframeReady = () => Gr(this, void 0, void 0, function* () {
      return this._iframeReady ? (yield Dr(100), !0) : (yield Dr(100), this._tilIframeReady());
    }), this._tilConfigReady = () => Gr(this, void 0, void 0, function* () {
      return this._configReady ? (yield Dr(100), !0) : (yield Dr(100), this._tilConfigReady());
    }), this._tilReady = () => Gr(this, void 0, void 0, function* () {
      return this.isReady() ? (yield Dr(100), !0) : (yield Dr(100), this._tilReady());
    }), this._emitReadyEvent = () => Gr(this, void 0, void 0, function* () {
      yield this._tilReady(), this._readyEmitted || (this._readyEmitted = !0, this.emit("ready", {}));
    }), this._connectToChildIframe = () => Gr(this, void 0, void 0, function* () {
      if (this._iframeConnecting) return this._iframeConnecting;
      this._iframeReady = !1, this._iframeConnecting = !0;
      const t = yield this._getOrCreateIframe();
      return this._iframeConnection = D.connectToChild({
        iframe: t,
        timeout: 6e4,
        methods: {
          postMessage: t => this._handlePostMessage(t)
        }
      }), this._iframeConnecting = new Promise((t, e) => {
        let r = !1;
        const n = setTimeout(() => {
          this._iframeReady || (r = !0, this._iframeConnecting = null, e(new Error("timedout")));
        }, 3e3);

        this._iframeConnection.promise.then(e => {
          clearTimeout(n), r || (this._iframeReady = !0, this._childIframeConnection = e, this._startHeartbeat(), this._iframeConnecting = null, t());
        }).catch(t => {
          clearTimeout(n), r || e(t);
        });
      }), this._iframeConnecting;
    }), this._startHeartbeat = (t = !1) => {
      this._heartbeatStarted || (this._heartbeat(t), this._heartbeatStarted = !0);
    }, this._heartbeat = (t = !1) => Gr(this, void 0, void 0, function* () {
      if (!this._destroyed) {
        yield Dr(2e3);

        try {
          if (t) return yield this._connectToChildIframe(), this._backoffTimeout = 1, this._heartbeat();
          yield this._ping();
        } catch (t) {
          if (/destroy|timedout/gi.test(t.message)) return yield Dr(1e3 * this._backoffTimeout), this._backoffTimeout = this._backoffTimeout << 1, this._heartbeat(!0);
        }

        return this._heartbeat();
      }
    }), this._ping = () => Gr(this, void 0, void 0, function* () {
      return new Promise((t, e) => {
        let r = !1;
        const n = setTimeout(() => {
          r = !0;
        }, 5e3);

        this._postMessageToChild({
          method: "ping"
        }).then(i => {
          clearTimeout(n), r ? e(new Error("timedout")) : "pong" === i ? t(i) : e(new Error("Invalid response"));
        }).catch(t => {
          e(t);
        });
      });
    }), this._getConfigFromChild = () => Gr(this, void 0, void 0, function* () {
      return this._postMessageToChild({
        method: "getConfig"
      });
    }), this._postVersionToChild = () => Gr(this, void 0, void 0, function* () {
      return this._postMessageToChild({
        method: "version",
        params: this.version()
      });
    }), this._postApiKeyToChild = () => Gr(this, void 0, void 0, function* () {
      if (this._apiKey) return this._postMessageToChild({
        method: "apiKey",
        params: this._apiKey
      });
    }), this._loadAsymmetricEncryptionKeyFromChild = () => Gr(this, void 0, void 0, function* () {
      this._asymmetricEncryptionKey = yield this._postMessageToChild({
        method: "getAsymmetricEncryptionKey"
      });
    }), this._postMessageToChild = t => Gr(this, void 0, void 0, function* () {
      if (this._destroyed) throw new Error("Authereum instance destroyed.");
      return yield this._tilIframeReady(), this._handleError(this._childIframeConnection.postMessage(t));
    }), this._handleChildLogoutEvent = () => Gr(this, void 0, void 0, function* () {
      yield this._resetCache(), this.emit("logout", {});
    }), this._handleChildDappKeyExpired = t => Gr(this, void 0, void 0, function* () {
      t === this._cachedLoginKeyAddress && (yield this._resetCache(), this.emit("dappKeyExpired", t), this.emit("logout"));
    }), this._handlePostMessage = t => {
      try {
        const {
          method: e,
          params: r
        } = t;

        switch (e) {
          case "onError":
            const t = r;
            return this.emit("error", t), void this._notifier.notify({
              type: "error",
              message: t.message
            });

          case "onLogout":
            return this._handleChildLogoutEvent();

          case "onDappKeyExpired":
            return this._handleChildDappKeyExpired(r);

          case "login":
            return this.login();

          case "setWidgetPosition":
            return;

          case "setWidgetSize":
            const e = r,
                  {
              width: n,
              height: i
            } = e;
            return this._iframeStyle.width = n, this._iframeStyle.height = i, this._refreshWidget();

          case "getWindowSize":
            return this._getWindowSize();

          case "hideWidget":
            return this.hideWidget();

          case "notification":
            return this._handlePostMessageNotification(r);

          case "updateNotificationId":
            return this._handlePostMessageUpdateNotificationId(r);

          case "updateNotification":
            return this._handlePostMessageUpdateNotification(r);

          case "dismissNotification":
            return this._handlePostMessageDismissNotification(r);

          case "log":
            return this._handlePostMessageLog(r);

          case "openUrl":
            return this._openUrl(r);
        }
      } catch (t) {}
    }, this._handlePostMessageNotification = t => {
      const e = this._notifier.notify(t);

      t.id && (this._notificationsMap[t.id] = e);
    }, this._handlePostMessageUpdateNotificationId = t => {
      let {
        id: e,
        newId: r
      } = t;
      this._notificationsMap[r] = this._notificationsMap[e], this._notificationsMap[e] = null;
    }, this._handlePostMessageUpdateNotification = t => {
      const e = this._notificationsMap[t.id];
      e && e.update(t);
    }, this._handlePostMessageDismissNotification = t => {
      const e = this._notificationsMap[t.id];
      e && e.dismiss();
    }, this._handlePostMessageLog = t => {
      let {
        type: e,
        message: r
      } = t;
      e || (e = "log"), console[e](r);
    }, this._getWindowSize = () => ({
      width: this._getWindowWidth(),
      height: this._getWindowHeight()
    }), this._getWindowWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, this._getWindowHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, this._setIframePositionLeft = t => {
      this._iframe && (this._iframe.style.left = `${t}px`);
    }, this._setIframeWidth = t => {
      this._iframe && (this._iframe.style.width = `${t}px`);
    }, this._setIframeHeight = t => {
      this._iframe && (this._iframe.style.height = `${t}px`);
    }, this._refreshWidget = () => {
      if (!this._widgetEnabled) return;
      const {
        top: t,
        left: e,
        width: r,
        height: n
      } = this._iframeStyle;
      this._setIframeWidth(r), this._setIframeHeight(n);
    }, this._loginKeyExists = () => Gr(this, void 0, void 0, function* () {
      return !!(yield this.getLoginKey());
    }), this._accountAddressExists = () => Gr(this, void 0, void 0, function* () {
      return !!(yield this.getAccountAddress());
    }), this._getAccountAdminKeyNonce = () => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "getAccountAuthKeyNonce"
      }));
    }), this._getAccountAuthKeyNonce = () => Gr(this, void 0, void 0, function* () {
      return console.warn("Deprecation notice: `authereum._getAccountAuthKeyNonce()` is deprecated. Use `authereum._getAccountAdminKeyNonce()` instead."), this._getAccountAdminKeyNonce();
    }), this._executeLoginKeyMetaTx = t => Gr(this, void 0, void 0, function* () {
      return this._handleError(this._postMessageToChild({
        method: "executeLoginKeyMetaTx",
        params: Wr(t)
      }));
    }), this._loadLoginKey = t => Gr(this, void 0, void 0, function* () {
      return yield this._tilReady(), this._handleError(this._postMessageToChild({
        method: "loadLoginKey",
        params: t
      }));
    }), this._getOrCreateLoginKey = () => Gr(this, void 0, void 0, function* () {
      return yield this._tilReady(), this._handleError(this._postMessageToChild({
        method: "getOrCreateLoginKey"
      }));
    }), this._getAuthenticateUri = t => {
      const e = this._asymmetricEncryptionKey;
      return this._webUri + "/?slk=" + encodeURIComponent(JSON.stringify({
        loginKey: {
          publicAddress: t,
          expiresAt: U().add(1, "month").utc().unix()
        },
        encryptionKey: e
      })) + "&redirect_uri=" + this._redirectUri;
    }, this._getSignWithAdminKeyUri = t => {
      var e;
      return null != (e = t) && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) && (t = `0x${t.toString("hex")}`), this._webUri + "/?sm=" + encodeURIComponent(JSON.stringify({
        message: t
      })) + "&redirect_uri=" + this._redirectUri;
    }, this._openPopupOrRedirect = t => Gr(this, void 0, void 0, function* () {
      this.emit("openPopup", {});
      const e = window.open(t, "Authereum", "toolbar=no,\n      location=no,\n      status=no,\n      menubar=no,\n      scrollbars=no,\n      resizable=no,\n      width=470,\n      height=640"),
            r = null == e;

      if (r && !this._blockedPopupRedirect) {
        const t = new Error("Disable popup blocker and try again");
        throw this._notifier.notify({
          type: "error",
          message: t.message,
          timeout: 5e3
        }), t;
      }

      return r ? (this.emit("popupBlocked"), void (window.location.href = t)) : (e.focus(), new Promise((t, r) => {
        const n = setInterval(() => Gr(this, void 0, void 0, function* () {
          if (e.closed) {
            o();
            const t = new Error("Window closed");
            this.emit("error", t), this.emit("closePopup", {}), r(t);
          }
        }), 250),
              i = setTimeout(() => {
          o(), e.close(), s(new Error("Timedout"));
        }, 6e5),
              o = () => {
          clearInterval(n), clearTimeout(i), this.emit("closePopup", {});
        },
              s = t => {
          o(), this.emit("error", t), r(t);
        },
              a = (e = {}) => {
          o(), t(e);
        };

        window.addEventListener("message", t => Gr(this, void 0, void 0, function* () {
          t.origin.includes(this._webUri) && (t.data.close && (e.close(), a()), t.data.login && (a({
            success: !0
          }), this.emit("login", {}), this._cachedIsAuthenticated = !0, t.data.encryptedSigningKey && (yield this._loadSigningKey(t.data.encryptedSigningKey)), this._logAnalyticsEvent({
            eventType: "logged_in_dapp",
            properties: {
              dapp_url: window.location.href
            }
          }), this._redirectUri !== window.location.href && (window.location.href = this._redirectUri)), t.data.result && (a(t.data.result), this._redirectUri !== window.location.href && (window.location.href = this._redirectUri)), t.data.error && (s(new Error(t.data.error)), this._redirectUri !== window.location.href && (window.location.href = this._redirectUri)));
        }));
      }));
    }), this._signLoginKeyRequest = t => Gr(this, void 0, void 0, function* () {
      const e = this._getAuthenticateUri(t);

      return this._openPopupOrRedirect(e);
    }), this._tilDomReady = () => Gr(this, void 0, void 0, function* () {
      return new Promise(t => {
        "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", () => t());
      });
    }), this.version = () => j, this.isAuthenticatedSync = () => this._cachedIsAuthenticated, this.getTransactionReceipt = t => this._handleError(this._postMessageToChild({
      method: "getTransactionReceipt",
      params: t
    })), this.waitForTransactionReceipt = t => this._handleError(this._postMessageToChild({
      method: "waitForTransactionReceipt",
      params: t
    })), this.hasRecoveryEnabled = () => this._handleError(this._postMessageToChild({
      method: "hasRecoveryEnabled"
    })), this.isContractDeployed = t => this._handleError(this._postMessageToChild({
      method: "isContractDeployed",
      params: t
    })), this._loadSigningKey = t => Gr(this, void 0, void 0, function* () {
      return this._postMessageToChild({
        method: "loadSigningKey",
        params: t
      });
    }), this._logAnalyticsEvent = t => Gr(this, void 0, void 0, function* () {
      return this._postMessageToChild({
        method: "logAnalyticsEvent",
        params: t
      });
    }), this._setupSigningKey = () => Gr(this, void 0, void 0, function* () {
      yield this._tilReady();
      const t = this._authereumQueryParams.encryptedSigningKey;

      if (t) {
        if (yield this._loadSigningKey(t)) try {
          localStorage.removeItem("_authereum");
        } catch (t) {}
      }
    }), this._cacheAuthereumQueryParams = () => Gr(this, void 0, void 0, function* () {
      try {
        const t = (t => {
          const e = window.location.search.substr(1),
                r = _querystring.default.parse(e);

          return r[t] ? r[t] : null;
        })("_authereum");

        if (t) {
          this._authereumQueryParams = JSON.parse(t);

          try {
            localStorage.setItem("_authereum", btoa(JSON.stringify(this._authereumQueryParams)));
          } catch (t) {}

          (t => {
            try {
              window.history.replaceState({}, document.title, t);
            } catch (t) {}
          })(((t, e = window.location.href) => {
            try {
              const r = new URL(e);

              if ("URLSearchParams" in window) {
                const e = new URLSearchParams(r.search);
                return e.delete(t), r.search = e.toString(), r.toString();
              }
            } catch (t) {}

            return e;
          })("_authereum"));
        } else try {
          let t = localStorage.getItem("_authereum");
          t && (this._authereumQueryParams = JSON.parse(atob(t)));
        } catch (t) {}
      } catch (t) {}
    }), this.destroy = () => Gr(this, void 0, void 0, function* () {
      if (this._destroyed) return console.warn("Authereum instance already destroyed."), !0;

      try {
        this._iframeReady && (yield this._postMessageToChild({
          method: "destroy"
        }));
      } catch (t) {
        console.error(t);
      }

      for (let t = 0; t < this._injectedElements.length; t++) {
        const e = this._injectedElements[t];

        try {
          e.remove();
        } catch (t) {
          console.error(t);
        }
      }

      const t = document.querySelectorAll('[id*="authereum"]');

      for (let e = 0; e < t.length; e++) {
        const r = t[e];

        try {
          r.remove();
        } catch (t) {
          console.error(t);
        }
      }

      return this._iframeReady = !1, this._destroyed = !0, console.warn("Authereum instance destroyed."), this._teardownEventListeners(), this.emit("destroy", {}), !0;
    }), this.isDestroyed = () => this._destroyed, this.getAddressQrCodeDataUri = t => Gr(this, void 0, void 0, function* () {
      return this._postMessageToChild({
        method: "getAddressQrCodeDataUri",
        params: {
          address: t
        }
      });
    }), this._userConfig = t, this._init(t);
  }

  _setupFocusListener() {
    window.addEventListener("focus", this._handleWindowFocus, !1);
  }

  _setupActionKeyListener() {
    window.addEventListener("keydown", this._handleActionKeyPress, !1);
  }

  _teardownEventListeners() {
    window.removeEventListener("resize", this._handleResizeThrottled, !1), window.removeEventListener("resize", this._handleResizeDebounced, !1), window.removeEventListener("focus", this._handleWindowFocus, !1), window.removeEventListener("keydown", this._handleActionKeyPress, !1);
  }

  _getOrCreateIframe() {
    return Gr(this, void 0, void 0, function* () {
      return this._iframe && (this._iframeConnection && this._iframeConnection.destroy(), this._iframe.remove()), new Promise(t => Gr(this, void 0, void 0, function* () {
        let e = window.location.href;

        try {
          e = parent.document.URL;
        } catch (t) {}

        const r = `authereum__x-iframe--${Cr()}`,
              n = document.createElement("iframe");
        n.id = r, n.src = ((t = {}, e = window.location.href) => {
          try {
            const r = new URL(e);

            if ("URLSearchParams" in window) {
              const e = new URLSearchParams(r.search);

              for (let r in t) e.set(r, t[r]);

              return r.search = e.toString(), r.toString();
            }
          } catch (t) {}

          return e;
        })({
          url: e
        }, this._xsUri), ["Safari", "Firefox"].includes((() => {
          let t,
              e,
              r = navigator.userAgent,
              n = r.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
          /trident/i.test(n[1]) && (e = /\brv[ :]+(\d+)/g.exec(r) || [], t = "IE " + (e[1] || "")), "Chrome" === n[1] && (e = r.match(/\b(OPR|Edge?)\/(\d+)/), null != e && (t = e.slice(1).join(" ").replace("OPR", "Opera").replace("Edg ", "Edge "))), n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = r.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), t = n.join(" ");
          let i = t.split(" ");
          return {
            browser: i[0],
            version: i[1]
          };
        })().browser) && n.setAttribute("sandbox", "allow-storage-access-by-user-activation allow-scripts allow-same-origin"), n.style.position = "fixed", n.style.bottom = "0", n.style.right = "0", n.style.width = "0", n.style.height = "0", n.style.border = "0", n.style.background = "transparent", n.style.zIndex = "1", n.setAttribute("frameborder", "0"), n.setAttribute("scrolling", "no"), this._iframe = n, t(this._iframe), yield this._tilDomReady(), document.body.appendChild(n), this._injectedElements.push(n), n.onload = () => {
          this._postVersionToChild(), this._postApiKeyToChild(), this._loadAsymmetricEncryptionKeyFromChild(), this._getConfigFromChild().then(t => {
            this._setConfig(t), this._configReady = !0, this.emit("iframeReady", {});
          });
        };
      }));
    });
  }

}

exports.Authereum = Kr;
Kr.version = () => j, "undefined" != typeof window && (window.Authereum = Kr);

var Yr = window && window.__awaiter || function (t, e, r, n) {
  return new (r || (r = Promise))(function (i, o) {
    function s(t) {
      try {
        u(n.next(t));
      } catch (t) {
        o(t);
      }
    }

    function a(t) {
      try {
        u(n.throw(t));
      } catch (t) {
        o(t);
      }
    }

    function u(t) {
      var e;
      t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function (t) {
        t(e);
      })).then(s, a);
    }

    u((n = n.apply(t, e || [])).next());
  });
};

const Vr = require("ethers");

class Zr extends Vr.Signer {
  constructor(t) {
    super(), this.config = t || {}, this.authereum = new Kr(this.config), this.provider = this.authereum.getProvider();
  }

  getAddress() {
    return Yr(this, void 0, void 0, function* () {
      return this.authereum.getAccountAddress();
    });
  }

  signMessage(t) {
    return Yr(this, void 0, void 0, function* () {
      return this.provider.sign(t);
    });
  }

  sign(t) {
    return Yr(this, void 0, void 0, function* () {
      return this.provider.sign(t);
    });
  }

  sendTransaction(t) {
    return Yr(this, void 0, void 0, function* () {
      return this.provider.sendTransaction(t);
    });
  }

  sendTransactionBatch(t) {
    return Yr(this, void 0, void 0, function* () {
      return this.provider.sendTransactionBatch(t);
    });
  }

  estimateGasBatch(t) {
    return Yr(this, void 0, void 0, function* () {
      return this.provider.estimateGasBatch(t);
    });
  }

}

exports.AuthereumSigner = Zr;
var _default = Kr;
exports.default = _default;
},{"./index-d3bd4678.js":"../node_modules/use-wallet/dist/index-d3bd4678.js","react":"../node_modules/react/index.js","@aragon/provided-connector":"../node_modules/@aragon/provided-connector/dist/provided-connector.esm.js","events":"../../../../../AppData/Local/Yarn/Data/global/node_modules/events/events.js","buffer":"../../../../../AppData/Local/Yarn/Data/global/node_modules/buffer/index.js","./_crypto_commonjs-external-1a228943.js":"../node_modules/use-wallet/dist/_crypto_commonjs-external-1a228943.js","./subscriptionManager-0493518a.js":"../node_modules/use-wallet/dist/subscriptionManager-0493518a.js","stream":"../../../../../AppData/Local/Yarn/Data/global/node_modules/stream-browserify/index.js","string_decoder":"../../../../../AppData/Local/Yarn/Data/global/node_modules/node-libs-browser/node_modules/string_decoder/lib/string_decoder.js","./_util_commonjs-external-6c254708.js":"../node_modules/use-wallet/dist/_util_commonjs-external-6c254708.js","crypto":"../../../../../AppData/Local/Yarn/Data/global/node_modules/crypto-browserify/index.js","assert":"../../../../../AppData/Local/Yarn/Data/global/node_modules/assert/assert.js","util":"../../../../../AppData/Local/Yarn/Data/global/node_modules/util/util.js","./index-77f376c4.js":"../node_modules/use-wallet/dist/index-77f376c4.js","querystring":"../../../../../AppData/Local/Yarn/Data/global/node_modules/querystring-es3/index.js","ethers":"../node_modules/ethers/lib.esm/index.js","process":"../../../../../AppData/Local/Yarn/Data/global/node_modules/process/browser.js"}],"../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64623" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/index-c6f22609.4520e432.js.map