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
})({"../node_modules/bnc-onboard/dist/esm/liquality-8276ac8b.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contentEeaca1cc = require("./content-eeaca1cc.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var img = "data:image/png;base64,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";
var img$1 = "data:image/png;base64,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";

function liquality(options) {
  var preferred = options.preferred,
      label = options.label,
      iconSrc = options.iconSrc,
      svg = options.svg;
  return {
    name: label || 'Liquality',
    iconSrc: iconSrc || img,
    iconSrcSet: iconSrc || img$1,
    svg: svg,
    wallet: function () {
      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {
        var getProviderName, createModernProviderInterface, provider;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getProviderName = helpers.getProviderName, createModernProviderInterface = helpers.createModernProviderInterface;
                provider = window.ethereum || window.web3 && window.web3.currentProvider;
                return _context.abrupt("return", {
                  provider: provider,
                  "interface": getProviderName(provider) === 'Liquality' && createModernProviderInterface(provider) || null
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function wallet(_x) {
        return _wallet.apply(this, arguments);
      }

      return wallet;
    }(),
    type: 'injected',
    link: 'https://liquality.io',
    installMessage: _contentEeaca1cc.e,
    desktop: true,
    mobile: false,
    preferred: preferred
  };
}

var _default = liquality;
exports.default = _default;
},{"./content-eeaca1cc.js":"../node_modules/bnc-onboard/dist/esm/content-eeaca1cc.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53843" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/liquality-8276ac8b.9e9ddc98.js.map