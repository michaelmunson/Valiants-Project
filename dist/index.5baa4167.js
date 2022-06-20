// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d5kvp":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"igcvL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webAppMjs = require("./src/webApp.mjs");
var _webAppMjsDefault = parcelHelpers.interopDefault(_webAppMjs);
const webApp = new _webAppMjsDefault.default();
webApp.render(); // const app = express();
 // app.get('/', (req, res) => {
 //     res.status(200).send('Hello, world!').end();
 // });
 // // Start the server
 // const PORT = parseInt(process.env.PORT) || 8080;
 // app.listen(PORT, () => {
 //     console.log(`App listening on port ${PORT}`);
 //     console.log('Press Ctrl+C to quit.');
 // });
 // export {app};

},{"./src/webApp.mjs":"1iowv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1iowv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oxidizer = require("oxidizer");
var _componentsMjs = require("./components.mjs");
var _cssMjs = require("./css.mjs");
var _dataMjs = require("./data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
const { NavBar , PageRouter  } = _componentsMjs;
class WebApp {
    get pageRouter() {
        return _oxidizer.$('page-router')[0];
    }
    constructor(config = {}){
        this.config = config;
        this.sheet = _cssMjs.styles.sheet;
        this.data = _dataMjsDefault.default;
        this.body = new _oxidizer.BODY([
            new NavBar(),
            new PageRouter({
                route: 'home'
            })
        ]);
    }
    switch(route) {
        this.pageRouter.switch(route);
    }
    render() {
        this.sheet.adopt();
        document.body.replaceWith(this.body);
        return this;
    }
}
exports.default = WebApp;

},{"oxidizer":"4sMFI","./components.mjs":"kpOhz","./css.mjs":"lFuFL","./data.mjs":"fxPPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4sMFI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Oxidizer", ()=>_oxidizerMjsDefault.default
);
parcelHelpers.export(exports, "Component", ()=>_oxidizerMjs.Component
);
parcelHelpers.export(exports, "Root", ()=>_oxidizerMjs.Root
);
parcelHelpers.export(exports, "$", ()=>_oxidizerMjs.$
);
parcelHelpers.export(exports, "html", ()=>_oxidizerMjs.html
);
parcelHelpers.export(exports, "css", ()=>_oxidizerMjs.css
);
parcelHelpers.export(exports, "A", ()=>_oxidizerMjs.A
);
parcelHelpers.export(exports, "ABBR", ()=>_oxidizerMjs.ABBR
);
parcelHelpers.export(exports, "ACRONYM", ()=>_oxidizerMjs.ACRONYM
);
parcelHelpers.export(exports, "ADDRESS", ()=>_oxidizerMjs.ADDRESS
);
parcelHelpers.export(exports, "APPLET", ()=>_oxidizerMjs.APPLET
);
parcelHelpers.export(exports, "AREA", ()=>_oxidizerMjs.AREA
);
parcelHelpers.export(exports, "ARTICLE", ()=>_oxidizerMjs.ARTICLE
);
parcelHelpers.export(exports, "ASIDE", ()=>_oxidizerMjs.ASIDE
);
parcelHelpers.export(exports, "AUDIO", ()=>_oxidizerMjs.AUDIO
);
parcelHelpers.export(exports, "B", ()=>_oxidizerMjs.B
);
parcelHelpers.export(exports, "BASE", ()=>_oxidizerMjs.BASE
);
parcelHelpers.export(exports, "BASEFONT", ()=>_oxidizerMjs.BASEFONT
);
parcelHelpers.export(exports, "BDI", ()=>_oxidizerMjs.BDI
);
parcelHelpers.export(exports, "BDO", ()=>_oxidizerMjs.BDO
);
parcelHelpers.export(exports, "BIG", ()=>_oxidizerMjs.BIG
);
parcelHelpers.export(exports, "BLOCKQUOTE", ()=>_oxidizerMjs.BLOCKQUOTE
);
parcelHelpers.export(exports, "BODY", ()=>_oxidizerMjs.BODY
);
parcelHelpers.export(exports, "BR", ()=>_oxidizerMjs.BR
);
parcelHelpers.export(exports, "BUTTON", ()=>_oxidizerMjs.BUTTON
);
parcelHelpers.export(exports, "CANVAS", ()=>_oxidizerMjs.CANVAS
);
parcelHelpers.export(exports, "CAPTION", ()=>_oxidizerMjs.CAPTION
);
parcelHelpers.export(exports, "CENTER", ()=>_oxidizerMjs.CENTER
);
parcelHelpers.export(exports, "CITE", ()=>_oxidizerMjs.CITE
);
parcelHelpers.export(exports, "CODE", ()=>_oxidizerMjs.CODE
);
parcelHelpers.export(exports, "COL", ()=>_oxidizerMjs.COL
);
parcelHelpers.export(exports, "COLGROUP", ()=>_oxidizerMjs.COLGROUP
);
parcelHelpers.export(exports, "DATA", ()=>_oxidizerMjs.DATA
);
parcelHelpers.export(exports, "DATALIST", ()=>_oxidizerMjs.DATALIST
);
parcelHelpers.export(exports, "DD", ()=>_oxidizerMjs.DD
);
parcelHelpers.export(exports, "DEL", ()=>_oxidizerMjs.DEL
);
parcelHelpers.export(exports, "DETAILS", ()=>_oxidizerMjs.DETAILS
);
parcelHelpers.export(exports, "DFN", ()=>_oxidizerMjs.DFN
);
parcelHelpers.export(exports, "DIALOG", ()=>_oxidizerMjs.DIALOG
);
parcelHelpers.export(exports, "DIR", ()=>_oxidizerMjs.DIR
);
parcelHelpers.export(exports, "DIV", ()=>_oxidizerMjs.DIV
);
parcelHelpers.export(exports, "DL", ()=>_oxidizerMjs.DL
);
parcelHelpers.export(exports, "DT", ()=>_oxidizerMjs.DT
);
parcelHelpers.export(exports, "EM", ()=>_oxidizerMjs.EM
);
parcelHelpers.export(exports, "EMBED", ()=>_oxidizerMjs.EMBED
);
parcelHelpers.export(exports, "FIELDSET", ()=>_oxidizerMjs.FIELDSET
);
parcelHelpers.export(exports, "FIGCAPTION", ()=>_oxidizerMjs.FIGCAPTION
);
parcelHelpers.export(exports, "FIGURE", ()=>_oxidizerMjs.FIGURE
);
parcelHelpers.export(exports, "FONT", ()=>_oxidizerMjs.FONT
);
parcelHelpers.export(exports, "FOOTER", ()=>_oxidizerMjs.FOOTER
);
parcelHelpers.export(exports, "FORM", ()=>_oxidizerMjs.FORM
);
parcelHelpers.export(exports, "FRAME", ()=>_oxidizerMjs.FRAME
);
parcelHelpers.export(exports, "FRAMESET", ()=>_oxidizerMjs.FRAMESET
);
parcelHelpers.export(exports, "H1", ()=>_oxidizerMjs.H1
);
parcelHelpers.export(exports, "H2", ()=>_oxidizerMjs.H2
);
parcelHelpers.export(exports, "H3", ()=>_oxidizerMjs.H3
);
parcelHelpers.export(exports, "H4", ()=>_oxidizerMjs.H4
);
parcelHelpers.export(exports, "H5", ()=>_oxidizerMjs.H5
);
parcelHelpers.export(exports, "H6", ()=>_oxidizerMjs.H6
);
parcelHelpers.export(exports, "HEAD", ()=>_oxidizerMjs.HEAD
);
parcelHelpers.export(exports, "HEADER", ()=>_oxidizerMjs.HEADER
);
parcelHelpers.export(exports, "HR", ()=>_oxidizerMjs.HR
);
parcelHelpers.export(exports, "HTML", ()=>_oxidizerMjs.HTML
);
parcelHelpers.export(exports, "I", ()=>_oxidizerMjs.I
);
parcelHelpers.export(exports, "IFRAME", ()=>_oxidizerMjs.IFRAME
);
parcelHelpers.export(exports, "IMG", ()=>_oxidizerMjs.IMG
);
parcelHelpers.export(exports, "INPUT", ()=>_oxidizerMjs.INPUT
);
parcelHelpers.export(exports, "INS", ()=>_oxidizerMjs.INS
);
parcelHelpers.export(exports, "KBD", ()=>_oxidizerMjs.KBD
);
parcelHelpers.export(exports, "LABEL", ()=>_oxidizerMjs.LABEL
);
parcelHelpers.export(exports, "LEGEND", ()=>_oxidizerMjs.LEGEND
);
parcelHelpers.export(exports, "LI", ()=>_oxidizerMjs.LI
);
parcelHelpers.export(exports, "LINK", ()=>_oxidizerMjs.LINK
);
parcelHelpers.export(exports, "MAIN", ()=>_oxidizerMjs.MAIN
);
parcelHelpers.export(exports, "MAP", ()=>_oxidizerMjs.MAP
);
parcelHelpers.export(exports, "MARK", ()=>_oxidizerMjs.MARK
);
parcelHelpers.export(exports, "META", ()=>_oxidizerMjs.META
);
parcelHelpers.export(exports, "METER", ()=>_oxidizerMjs.METER
);
parcelHelpers.export(exports, "NAV", ()=>_oxidizerMjs.NAV
);
parcelHelpers.export(exports, "NOFRAMES", ()=>_oxidizerMjs.NOFRAMES
);
parcelHelpers.export(exports, "NOSCRIPT", ()=>_oxidizerMjs.NOSCRIPT
);
parcelHelpers.export(exports, "OBJECT", ()=>_oxidizerMjs.OBJECT
);
parcelHelpers.export(exports, "OL", ()=>_oxidizerMjs.OL
);
parcelHelpers.export(exports, "OPTGROUP", ()=>_oxidizerMjs.OPTGROUP
);
parcelHelpers.export(exports, "OPTION", ()=>_oxidizerMjs.OPTION
);
parcelHelpers.export(exports, "OUTPUT", ()=>_oxidizerMjs.OUTPUT
);
parcelHelpers.export(exports, "P", ()=>_oxidizerMjs.P
);
parcelHelpers.export(exports, "PARAM", ()=>_oxidizerMjs.PARAM
);
parcelHelpers.export(exports, "PICTURE", ()=>_oxidizerMjs.PICTURE
);
parcelHelpers.export(exports, "PRE", ()=>_oxidizerMjs.PRE
);
parcelHelpers.export(exports, "PROGRESS", ()=>_oxidizerMjs.PROGRESS
);
parcelHelpers.export(exports, "Q", ()=>_oxidizerMjs.Q
);
parcelHelpers.export(exports, "RP", ()=>_oxidizerMjs.RP
);
parcelHelpers.export(exports, "RT", ()=>_oxidizerMjs.RT
);
parcelHelpers.export(exports, "RUBY", ()=>_oxidizerMjs.RUBY
);
parcelHelpers.export(exports, "S", ()=>_oxidizerMjs.S
);
parcelHelpers.export(exports, "SAMP", ()=>_oxidizerMjs.SAMP
);
parcelHelpers.export(exports, "SCRIPT", ()=>_oxidizerMjs.SCRIPT
);
parcelHelpers.export(exports, "SECTION", ()=>_oxidizerMjs.SECTION
);
parcelHelpers.export(exports, "SELECT", ()=>_oxidizerMjs.SELECT
);
parcelHelpers.export(exports, "SMALL", ()=>_oxidizerMjs.SMALL
);
parcelHelpers.export(exports, "SOURCE", ()=>_oxidizerMjs.SOURCE
);
parcelHelpers.export(exports, "SPAN", ()=>_oxidizerMjs.SPAN
);
parcelHelpers.export(exports, "STRIKE", ()=>_oxidizerMjs.STRIKE
);
parcelHelpers.export(exports, "STRONG", ()=>_oxidizerMjs.STRONG
);
parcelHelpers.export(exports, "STYLE", ()=>_oxidizerMjs.STYLE
);
parcelHelpers.export(exports, "SUB", ()=>_oxidizerMjs.SUB
);
parcelHelpers.export(exports, "SUMMARY", ()=>_oxidizerMjs.SUMMARY
);
parcelHelpers.export(exports, "SUP", ()=>_oxidizerMjs.SUP
);
parcelHelpers.export(exports, "SVG", ()=>_oxidizerMjs.SVG
);
parcelHelpers.export(exports, "TABLE", ()=>_oxidizerMjs.TABLE
);
parcelHelpers.export(exports, "TBODY", ()=>_oxidizerMjs.TBODY
);
parcelHelpers.export(exports, "TD", ()=>_oxidizerMjs.TD
);
parcelHelpers.export(exports, "TEMPLATE", ()=>_oxidizerMjs.TEMPLATE
);
parcelHelpers.export(exports, "TEXTAREA", ()=>_oxidizerMjs.TEXTAREA
);
parcelHelpers.export(exports, "TFOOT", ()=>_oxidizerMjs.TFOOT
);
parcelHelpers.export(exports, "TH", ()=>_oxidizerMjs.TH
);
parcelHelpers.export(exports, "THEAD", ()=>_oxidizerMjs.THEAD
);
parcelHelpers.export(exports, "TIME", ()=>_oxidizerMjs.TIME
);
parcelHelpers.export(exports, "TITLE", ()=>_oxidizerMjs.TITLE
);
parcelHelpers.export(exports, "TR", ()=>_oxidizerMjs.TR
);
parcelHelpers.export(exports, "TRACK", ()=>_oxidizerMjs.TRACK
);
parcelHelpers.export(exports, "TT", ()=>_oxidizerMjs.TT
);
parcelHelpers.export(exports, "U", ()=>_oxidizerMjs.U
);
parcelHelpers.export(exports, "UL", ()=>_oxidizerMjs.UL
);
parcelHelpers.export(exports, "VAR", ()=>_oxidizerMjs.VAR
);
parcelHelpers.export(exports, "VIDEO", ()=>_oxidizerMjs.VIDEO
);
parcelHelpers.export(exports, "WBR", ()=>_oxidizerMjs.WBR
);
var _oxidizerMjs = require("./src/oxidizer.mjs");
var _oxidizerMjsDefault = parcelHelpers.interopDefault(_oxidizerMjs);
exports.default = _oxidizerMjsDefault.default;

},{"./src/oxidizer.mjs":"8f37K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8f37K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Oxidizer", ()=>Oxidizer
);
parcelHelpers.export(exports, "Component", ()=>_componentMjsDefault.default
);
parcelHelpers.export(exports, "Root", ()=>_rootMjsDefault.default
);
parcelHelpers.export(exports, "$", ()=>_queryMjs.$
);
parcelHelpers.export(exports, "css", ()=>_cssMjsDefault.default
);
parcelHelpers.export(exports, "html", ()=>_htmlMjsDefault.default
);
parcelHelpers.export(exports, "A", ()=>_intrinsicsMjs.A
);
parcelHelpers.export(exports, "ABBR", ()=>_intrinsicsMjs.ABBR
);
parcelHelpers.export(exports, "ACRONYM", ()=>_intrinsicsMjs.ACRONYM
);
parcelHelpers.export(exports, "ADDRESS", ()=>_intrinsicsMjs.ADDRESS
);
parcelHelpers.export(exports, "APPLET", ()=>_intrinsicsMjs.APPLET
);
parcelHelpers.export(exports, "AREA", ()=>_intrinsicsMjs.AREA
);
parcelHelpers.export(exports, "ARTICLE", ()=>_intrinsicsMjs.ARTICLE
);
parcelHelpers.export(exports, "ASIDE", ()=>_intrinsicsMjs.ASIDE
);
parcelHelpers.export(exports, "AUDIO", ()=>_intrinsicsMjs.AUDIO
);
parcelHelpers.export(exports, "B", ()=>_intrinsicsMjs.B
);
parcelHelpers.export(exports, "BASE", ()=>_intrinsicsMjs.BASE
);
parcelHelpers.export(exports, "BASEFONT", ()=>_intrinsicsMjs.BASEFONT
);
parcelHelpers.export(exports, "BDI", ()=>_intrinsicsMjs.BDI
);
parcelHelpers.export(exports, "BDO", ()=>_intrinsicsMjs.BDO
);
parcelHelpers.export(exports, "BIG", ()=>_intrinsicsMjs.BIG
);
parcelHelpers.export(exports, "BLOCKQUOTE", ()=>_intrinsicsMjs.BLOCKQUOTE
);
parcelHelpers.export(exports, "BODY", ()=>_intrinsicsMjs.BODY
);
parcelHelpers.export(exports, "BR", ()=>_intrinsicsMjs.BR
);
parcelHelpers.export(exports, "BUTTON", ()=>_intrinsicsMjs.BUTTON
);
parcelHelpers.export(exports, "CANVAS", ()=>_intrinsicsMjs.CANVAS
);
parcelHelpers.export(exports, "CAPTION", ()=>_intrinsicsMjs.CAPTION
);
parcelHelpers.export(exports, "CENTER", ()=>_intrinsicsMjs.CENTER
);
parcelHelpers.export(exports, "CITE", ()=>_intrinsicsMjs.CITE
);
parcelHelpers.export(exports, "CODE", ()=>_intrinsicsMjs.CODE
);
parcelHelpers.export(exports, "COL", ()=>_intrinsicsMjs.COL
);
parcelHelpers.export(exports, "COLGROUP", ()=>_intrinsicsMjs.COLGROUP
);
parcelHelpers.export(exports, "DATA", ()=>_intrinsicsMjs.DATA
);
parcelHelpers.export(exports, "DATALIST", ()=>_intrinsicsMjs.DATALIST
);
parcelHelpers.export(exports, "DD", ()=>_intrinsicsMjs.DD
);
parcelHelpers.export(exports, "DEL", ()=>_intrinsicsMjs.DEL
);
parcelHelpers.export(exports, "DETAILS", ()=>_intrinsicsMjs.DETAILS
);
parcelHelpers.export(exports, "DFN", ()=>_intrinsicsMjs.DFN
);
parcelHelpers.export(exports, "DIALOG", ()=>_intrinsicsMjs.DIALOG
);
parcelHelpers.export(exports, "DIR", ()=>_intrinsicsMjs.DIR
);
parcelHelpers.export(exports, "DIV", ()=>_intrinsicsMjs.DIV
);
parcelHelpers.export(exports, "DL", ()=>_intrinsicsMjs.DL
);
parcelHelpers.export(exports, "DT", ()=>_intrinsicsMjs.DT
);
parcelHelpers.export(exports, "EM", ()=>_intrinsicsMjs.EM
);
parcelHelpers.export(exports, "EMBED", ()=>_intrinsicsMjs.EMBED
);
parcelHelpers.export(exports, "FIELDSET", ()=>_intrinsicsMjs.FIELDSET
);
parcelHelpers.export(exports, "FIGCAPTION", ()=>_intrinsicsMjs.FIGCAPTION
);
parcelHelpers.export(exports, "FIGURE", ()=>_intrinsicsMjs.FIGURE
);
parcelHelpers.export(exports, "FONT", ()=>_intrinsicsMjs.FONT
);
parcelHelpers.export(exports, "FOOTER", ()=>_intrinsicsMjs.FOOTER
);
parcelHelpers.export(exports, "FORM", ()=>_intrinsicsMjs.FORM
);
parcelHelpers.export(exports, "FRAME", ()=>_intrinsicsMjs.FRAME
);
parcelHelpers.export(exports, "FRAMESET", ()=>_intrinsicsMjs.FRAMESET
);
parcelHelpers.export(exports, "H1", ()=>_intrinsicsMjs.H1
);
parcelHelpers.export(exports, "H2", ()=>_intrinsicsMjs.H2
);
parcelHelpers.export(exports, "H3", ()=>_intrinsicsMjs.H3
);
parcelHelpers.export(exports, "H4", ()=>_intrinsicsMjs.H4
);
parcelHelpers.export(exports, "H5", ()=>_intrinsicsMjs.H5
);
parcelHelpers.export(exports, "H6", ()=>_intrinsicsMjs.H6
);
parcelHelpers.export(exports, "HEAD", ()=>_intrinsicsMjs.HEAD
);
parcelHelpers.export(exports, "HEADER", ()=>_intrinsicsMjs.HEADER
);
parcelHelpers.export(exports, "HR", ()=>_intrinsicsMjs.HR
);
parcelHelpers.export(exports, "HTML", ()=>_intrinsicsMjs.HTML
);
parcelHelpers.export(exports, "I", ()=>_intrinsicsMjs.I
);
parcelHelpers.export(exports, "IFRAME", ()=>_intrinsicsMjs.IFRAME
);
parcelHelpers.export(exports, "IMG", ()=>_intrinsicsMjs.IMG
);
parcelHelpers.export(exports, "INPUT", ()=>_intrinsicsMjs.INPUT
);
parcelHelpers.export(exports, "INS", ()=>_intrinsicsMjs.INS
);
parcelHelpers.export(exports, "KBD", ()=>_intrinsicsMjs.KBD
);
parcelHelpers.export(exports, "LABEL", ()=>_intrinsicsMjs.LABEL
);
parcelHelpers.export(exports, "LEGEND", ()=>_intrinsicsMjs.LEGEND
);
parcelHelpers.export(exports, "LI", ()=>_intrinsicsMjs.LI
);
parcelHelpers.export(exports, "LINK", ()=>_intrinsicsMjs.LINK
);
parcelHelpers.export(exports, "MAIN", ()=>_intrinsicsMjs.MAIN
);
parcelHelpers.export(exports, "MAP", ()=>_intrinsicsMjs.MAP
);
parcelHelpers.export(exports, "MARK", ()=>_intrinsicsMjs.MARK
);
parcelHelpers.export(exports, "META", ()=>_intrinsicsMjs.META
);
parcelHelpers.export(exports, "METER", ()=>_intrinsicsMjs.METER
);
parcelHelpers.export(exports, "NAV", ()=>_intrinsicsMjs.NAV
);
parcelHelpers.export(exports, "NOFRAMES", ()=>_intrinsicsMjs.NOFRAMES
);
parcelHelpers.export(exports, "NOSCRIPT", ()=>_intrinsicsMjs.NOSCRIPT
);
parcelHelpers.export(exports, "OBJECT", ()=>_intrinsicsMjs.OBJECT
);
parcelHelpers.export(exports, "OL", ()=>_intrinsicsMjs.OL
);
parcelHelpers.export(exports, "OPTGROUP", ()=>_intrinsicsMjs.OPTGROUP
);
parcelHelpers.export(exports, "OPTION", ()=>_intrinsicsMjs.OPTION
);
parcelHelpers.export(exports, "OUTPUT", ()=>_intrinsicsMjs.OUTPUT
);
parcelHelpers.export(exports, "P", ()=>_intrinsicsMjs.P
);
parcelHelpers.export(exports, "PARAM", ()=>_intrinsicsMjs.PARAM
);
parcelHelpers.export(exports, "PICTURE", ()=>_intrinsicsMjs.PICTURE
);
parcelHelpers.export(exports, "PRE", ()=>_intrinsicsMjs.PRE
);
parcelHelpers.export(exports, "PROGRESS", ()=>_intrinsicsMjs.PROGRESS
);
parcelHelpers.export(exports, "Q", ()=>_intrinsicsMjs.Q
);
parcelHelpers.export(exports, "RP", ()=>_intrinsicsMjs.RP
);
parcelHelpers.export(exports, "RT", ()=>_intrinsicsMjs.RT
);
parcelHelpers.export(exports, "RUBY", ()=>_intrinsicsMjs.RUBY
);
parcelHelpers.export(exports, "S", ()=>_intrinsicsMjs.S
);
parcelHelpers.export(exports, "SAMP", ()=>_intrinsicsMjs.SAMP
);
parcelHelpers.export(exports, "SCRIPT", ()=>_intrinsicsMjs.SCRIPT
);
parcelHelpers.export(exports, "SECTION", ()=>_intrinsicsMjs.SECTION
);
parcelHelpers.export(exports, "SELECT", ()=>_intrinsicsMjs.SELECT
);
parcelHelpers.export(exports, "SMALL", ()=>_intrinsicsMjs.SMALL
);
parcelHelpers.export(exports, "SOURCE", ()=>_intrinsicsMjs.SOURCE
);
parcelHelpers.export(exports, "SPAN", ()=>_intrinsicsMjs.SPAN
);
parcelHelpers.export(exports, "STRIKE", ()=>_intrinsicsMjs.STRIKE
);
parcelHelpers.export(exports, "STRONG", ()=>_intrinsicsMjs.STRONG
);
parcelHelpers.export(exports, "STYLE", ()=>_intrinsicsMjs.STYLE
);
parcelHelpers.export(exports, "SUB", ()=>_intrinsicsMjs.SUB
);
parcelHelpers.export(exports, "SUMMARY", ()=>_intrinsicsMjs.SUMMARY
);
parcelHelpers.export(exports, "SUP", ()=>_intrinsicsMjs.SUP
);
parcelHelpers.export(exports, "SVG", ()=>_intrinsicsMjs.SVG
);
parcelHelpers.export(exports, "TABLE", ()=>_intrinsicsMjs.TABLE
);
parcelHelpers.export(exports, "TBODY", ()=>_intrinsicsMjs.TBODY
);
parcelHelpers.export(exports, "TD", ()=>_intrinsicsMjs.TD
);
parcelHelpers.export(exports, "TEMPLATE", ()=>_intrinsicsMjs.TEMPLATE
);
parcelHelpers.export(exports, "TEXTAREA", ()=>_intrinsicsMjs.TEXTAREA
);
parcelHelpers.export(exports, "TFOOT", ()=>_intrinsicsMjs.TFOOT
);
parcelHelpers.export(exports, "TH", ()=>_intrinsicsMjs.TH
);
parcelHelpers.export(exports, "THEAD", ()=>_intrinsicsMjs.THEAD
);
parcelHelpers.export(exports, "TIME", ()=>_intrinsicsMjs.TIME
);
parcelHelpers.export(exports, "TITLE", ()=>_intrinsicsMjs.TITLE
);
parcelHelpers.export(exports, "TR", ()=>_intrinsicsMjs.TR
);
parcelHelpers.export(exports, "TRACK", ()=>_intrinsicsMjs.TRACK
);
parcelHelpers.export(exports, "TT", ()=>_intrinsicsMjs.TT
);
parcelHelpers.export(exports, "U", ()=>_intrinsicsMjs.U
);
parcelHelpers.export(exports, "UL", ()=>_intrinsicsMjs.UL
);
parcelHelpers.export(exports, "VAR", ()=>_intrinsicsMjs.VAR
);
parcelHelpers.export(exports, "VIDEO", ()=>_intrinsicsMjs.VIDEO
);
parcelHelpers.export(exports, "WBR", ()=>_intrinsicsMjs.WBR
);
var _configMjs = require("./config.mjs");
var _configMjsDefault = parcelHelpers.interopDefault(_configMjs);
var _cssMjs = require("./css.mjs");
var _cssMjsDefault = parcelHelpers.interopDefault(_cssMjs);
var _htmlMjs = require("./html.mjs");
var _htmlMjsDefault = parcelHelpers.interopDefault(_htmlMjs);
var _intrinsicsMjs = require("./intrinsics.mjs");
var _componentMjs = require("./component.mjs");
var _componentMjsDefault = parcelHelpers.interopDefault(_componentMjs);
var _queryMjs = require("./html/query.mjs");
var _rootMjs = require("./root.mjs");
var _rootMjsDefault = parcelHelpers.interopDefault(_rootMjs);
class Oxidizer {
    static get css() {
        return _cssMjsDefault.default;
    }
    static get html() {
        return _htmlMjsDefault.default;
    }
    static get config() {
        return _configMjsDefault.default;
    }
    static set config(o) {
        Oxidizer.configure(o);
    }
    static configure(o) {
        for(const c in o)_configMjsDefault.default[c] = o[c];
    }
    static get Component() {
        return _componentMjsDefault.default;
    }
    static get Root() {
        return _rootMjsDefault.default;
    }
    static get Intrinsics() {
        return _intrinsicsMjs;
    }
}
exports.default = Oxidizer;

},{"./config.mjs":"8LnqG","./css.mjs":"4KkEW","./html.mjs":"WIeNu","./intrinsics.mjs":"1xSZE","./component.mjs":"ihQFB","./html/query.mjs":"knqMK","./root.mjs":"fPJ3m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LnqG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cssMjs = require("./css.mjs");
var _cssMjsDefault = parcelHelpers.interopDefault(_cssMjs);
const config = {
    props: {
        setAttributes: true
    },
    intrinsics: {
        methods: {},
        body: {
            createNew: true
        }
    },
    component: {
        /**
         * @property customElement <boolean> - whether or not to define customElements from components
         * @property useClass <boolean> - use class name for element tag name
         * @property defaultName <string> - tag name to use if useClass is false
         * @property append <string> - string to append tag name
         * @property append <string> - string to prepend tag name
         */ isCustomElement: true,
        isTagConstructor: true,
        tagName: "ox-component"
    },
    css: _cssMjsDefault.default.config
};
exports.default = config;

},{"./css.mjs":"4KkEW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4KkEW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "css", ()=>css
);
var _utilsMjs = require("../utils/utils.mjs");
var _cssUtilsMjs = require("./css/cssUtils.mjs");
function css(strings, ...values) {
    let cssText;
    if (_utilsMjs.isObj(strings)) cssText = _cssUtilsMjs.stringify(strings);
    else {
        cssText = [
            ...strings
        ];
        for(const i in values)cssText[i] += values[i];
        cssText = cssText.join("");
    }
    return {
        cssText,
        strings,
        values,
        sheet: new _cssUtilsMjs.Sheet(cssText),
        csslit: true
    };
}
Object.assign(css, {
    config: _cssUtilsMjs.config,
    defaultCSS: _cssUtilsMjs.defaultCSS,
    cssData: _cssUtilsMjs.cssData,
    configure: _cssUtilsMjs.configure,
    toDashed: _cssUtilsMjs.toDashed,
    toCamel: _cssUtilsMjs.toCamel,
    formatSelector: _cssUtilsMjs.formatSelector,
    formatProperty: _cssUtilsMjs.formatProperty,
    formatValue: _cssUtilsMjs.formatValue,
    supports: _cssUtilsMjs.supports,
    supportsProp: _cssUtilsMjs.supportsProp,
    flatten: _cssUtilsMjs.flatten,
    stringify: _cssUtilsMjs.stringify,
    parse: _cssUtilsMjs.parse,
    generateStyleElement: _cssUtilsMjs.generateStyleElement,
    unit: _cssUtilsMjs.unit,
    compile: _cssUtilsMjs.compile,
    CSSRuleError: _cssUtilsMjs.CSSRuleError,
    CSSStyleSheetError: _cssUtilsMjs.CSSStyleSheetError,
    CSSUnsupportedError: _cssUtilsMjs.CSSUnsupportedError,
    Sheet: _cssUtilsMjs.Sheet
});
exports.default = css; /*
css.config = config;
css.defaultCSS = defaultCSS;
css.cssData = cssData;
css.configure = configure;
css.toDashed = toDashed;
css.toCamel = toCamel;
css.formatSelector = formatSelector;
css.formatProperty = formatProperty;
css.formatValue = formatValue;
css.supports = supports;
css.supportsProp = supportsProp;
css.flatten = flatten;
css.stringify = stringify;
css.parse = parse;
css.generateStyleElement = generateStyleElement;
css.unit = unit;
css.compile = compile;
css.CSSRuleError = CSSRuleError;
css.CSSUnsupportedError = CSSUnsupportedError;
css.CSSStyleSheetError = CSSStyleSheetError;
css.Sheet = Sheet;
*/ 

},{"../utils/utils.mjs":"dPNBH","./css/cssUtils.mjs":"lQONk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dPNBH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Global", ()=>_assignMjs.Global
);
parcelHelpers.export(exports, "analyzer", ()=>_analyzeMjs.analyzer
);
parcelHelpers.export(exports, "objEnforcer", ()=>_typeMjs.objEnforcer
);
parcelHelpers.export(exports, "strEnforcer", ()=>_typeMjs.strEnforcer
);
parcelHelpers.export(exports, "nodeConverter", ()=>_typeMjs.nodeConverter
);
parcelHelpers.export(exports, "nodeEnforcer", ()=>_typeMjs.nodeEnforcer
);
parcelHelpers.export(exports, "arrEnforcer", ()=>_typeMjs.arrEnforcer
);
parcelHelpers.export(exports, "arrConverter", ()=>_typeMjs.arrConverter
);
parcelHelpers.export(exports, "consoleStrs", ()=>_terminalMjs.consoleStrs
);
parcelHelpers.export(exports, "Attempt", ()=>_attemptMjsDefault.default
);
parcelHelpers.export(exports, "Obj", ()=>_objectMjs.Obj
);
parcelHelpers.export(exports, "Arr", ()=>_arrayMjs.Arr
);
parcelHelpers.export(exports, "Assignee", ()=>_assignMjs.Assignee
);
parcelHelpers.export(exports, "Str", ()=>_strMjs.Str
);
parcelHelpers.export(exports, "Argvout", ()=>_argvoutMjs.Argvout
);
parcelHelpers.export(exports, "Typevout", ()=>_typeMjs.Typevout
);
parcelHelpers.export(exports, "Assigner", ()=>_assignMjs.Assigner
);
parcelHelpers.export(exports, "DeepProxy", ()=>_deepProxyMjsDefault.default
);
parcelHelpers.export(exports, "Type", ()=>_typeMjsDefault.default
);
parcelHelpers.export(exports, "TypeEnforcer", ()=>_typeMjs.TypeEnforcer
);
parcelHelpers.export(exports, "TypeConverter", ()=>_typeMjs.TypeConverter
);
parcelHelpers.export(exports, "$Map", ()=>_mapMjsDefault.default
);
parcelHelpers.export(exports, "assign", ()=>_assignMjs.assign
);
parcelHelpers.export(exports, "$obj", ()=>_objectMjs.$obj
);
parcelHelpers.export(exports, "$arr", ()=>_arrayMjs.$arr
);
parcelHelpers.export(exports, "$str", ()=>_strMjs.$str
);
parcelHelpers.export(exports, "isNode", ()=>_analyzeMjs.isNode
);
parcelHelpers.export(exports, "isArr", ()=>_analyzeMjs.isArr
);
parcelHelpers.export(exports, "isBool", ()=>_analyzeMjs.isBool
);
parcelHelpers.export(exports, "isFn", ()=>_analyzeMjs.isFn
);
parcelHelpers.export(exports, "isInt", ()=>_analyzeMjs.isInt
);
parcelHelpers.export(exports, "isNan", ()=>_analyzeMjs.isNan
);
parcelHelpers.export(exports, "isNum", ()=>_analyzeMjs.isNum
);
parcelHelpers.export(exports, "isObj", ()=>_analyzeMjs.isObj
);
parcelHelpers.export(exports, "isStr", ()=>_analyzeMjs.isStr
);
parcelHelpers.export(exports, "isWeakStr", ()=>_analyzeMjs.isWeakStr
);
parcelHelpers.export(exports, "enforce", ()=>_analyzeMjs.enforce
);
parcelHelpers.export(exports, "evaluator", ()=>_evaluatorMjsDefault.default
);
parcelHelpers.export(exports, "print", ()=>_terminalMjs.print
);
parcelHelpers.export(exports, "printf", ()=>_terminalMjs.printf
);
parcelHelpers.export(exports, "println", ()=>_terminalMjs.println
);
parcelHelpers.export(exports, "log", ()=>_terminalMjs.log
);
parcelHelpers.export(exports, "methods", ()=>_analyzeMjs.methods
);
parcelHelpers.export(exports, "isDef", ()=>_analyzeMjs.isDef
);
parcelHelpers.export(exports, "isUndef", ()=>_analyzeMjs.isUndef
);
var _arrayMjs = require("./extensions/array.mjs");
var _mapMjs = require("./extensions/map.mjs");
var _mapMjsDefault = parcelHelpers.interopDefault(_mapMjs);
var _objectMjs = require("./extensions/object.mjs");
var _strMjs = require("./extensions/str.mjs");
var _analyzeMjs = require("./misc/analyze.mjs");
var _argvoutMjs = require("./misc/argvout.mjs");
var _assignMjs = require("./misc/assign.mjs");
var _attemptMjs = require("./misc/attempt.mjs");
var _attemptMjsDefault = parcelHelpers.interopDefault(_attemptMjs);
var _deepProxyMjs = require("./misc/deepProxy.mjs");
var _deepProxyMjsDefault = parcelHelpers.interopDefault(_deepProxyMjs);
var _evaluatorMjs = require("./misc/evaluator.mjs");
var _evaluatorMjsDefault = parcelHelpers.interopDefault(_evaluatorMjs);
var _terminalMjs = require("./misc/terminal.mjs");
var _typeMjs = require("./misc/type.mjs");
var _typeMjsDefault = parcelHelpers.interopDefault(_typeMjs);

},{"./extensions/array.mjs":"6amDc","./extensions/map.mjs":"feCpD","./extensions/object.mjs":"8LJiF","./extensions/str.mjs":"9yv3A","./misc/analyze.mjs":"bmTXV","./misc/argvout.mjs":"2CXRC","./misc/assign.mjs":"1yiXL","./misc/attempt.mjs":"biQsx","./misc/deepProxy.mjs":"lPzUp","./misc/evaluator.mjs":"1Ts7N","./misc/terminal.mjs":"f5y0g","./misc/type.mjs":"47jmE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6amDc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$arr", ()=>$arr
);
parcelHelpers.export(exports, "Arr", ()=>Arr
);
class Arr extends Array {
    constructor(...elems){
        super();
        if (elems.length > 0) elems.forEach((elem)=>this.push(elem)
        );
    }
    replace(el, handler) {
        let truth = false;
        this.forEach((e, index)=>{
            if (handler.call(this, e, index)) {
                truth = true;
                this[index] = el;
            }
        });
        if (!truth) this.push(el);
        return this;
    }
    get(filter) {
        for(let i in this){
            if (filter(this[i])) return this[i];
        }
    }
    last() {
        return this[this.length - 1];
    }
}
const $arr = (arr)=>{
    if (arr != null) return new Arr(arr);
    return new Arr();
};
exports.default = Arr;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"feCpD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class $Map extends Map {
    constructor(){
        super();
    }
    toArray() {
        return [
            ...this.entries()
        ];
    }
    valueAt(i) {
        return Array.from(this.values())[i];
    }
    keyAt(i) {
        return Array.from(this.keys())[i];
    }
    entryAt(i) {
        return Array.from(this.entries())[i];
    }
}
exports.default = $Map;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LJiF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Obj", ()=>Obj
);
parcelHelpers.export(exports, "$obj", ()=>$obj
);
parcelHelpers.export(exports, "walk", ()=>walk
);
var _analyzeMjs = require("../misc/analyze.mjs");
var _deepProxyMjs = require("../misc/deepProxy.mjs");
var _deepProxyMjsDefault = parcelHelpers.interopDefault(_deepProxyMjs);
var _typeMjs = require("../misc/type.mjs");
const walk = function(obj, callback) {
    for(const key in obj){
        const value = obj[key];
        if (_analyzeMjs.isObj(value)) {
            obj[key] = walk(value, callback);
            continue;
        }
        obj[key] = callback(key, value) ? callback(key, value) : value;
    }
    return obj;
};
class Obj extends Object {
    constructor(object){
        _typeMjs.objEnforcer(object);
        super(object);
        for(let i in object)this[i] = object[i];
    }
    keys(callback) {
        if (callback) {
            this.keys().forEach((key, index, array)=>{
                callback.call(this, key, index, array);
            });
            return this.keys();
        }
        return Object.keys(this);
    }
    values(callback) {
        if (callback) {
            this.values().forEach((value, index, array)=>{
                callback.call(this, value, index, array);
            });
            return this.values();
        }
        return Object.values(this);
    }
    entries(callback) {
        if (callback) {
            this.entries().forEach((entry, index, array)=>{
                callback.call(this, entry, index, array);
            });
            return this.entries();
        }
        return Object.entries(this);
    }
    walk(callback) {
        return walk(this, callback);
    }
    proxy(handler) {
        return new Proxy(this, handler);
    }
    deepProxy(handler) {
        return new _deepProxyMjsDefault.default(this, handler);
    }
    static test(object) {
        return _analyzeMjs.isObj(object);
    }
    static enforce(object) {
        return _typeMjs.objEnforcer(object);
    }
    static create(a, b) {
        const o = {};
        o[a] = b;
        return o;
    }
}
const $obj = (obj)=>new Obj(obj)
;
exports.default = Obj;

},{"../misc/analyze.mjs":"bmTXV","../misc/deepProxy.mjs":"lPzUp","../misc/type.mjs":"47jmE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmTXV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "analyzer", ()=>analyzer
);
parcelHelpers.export(exports, "typev", ()=>typev
);
parcelHelpers.export(exports, "isArr", ()=>isArr
);
parcelHelpers.export(exports, "isBool", ()=>isBool
);
parcelHelpers.export(exports, "isFn", ()=>isFn
);
parcelHelpers.export(exports, "isInt", ()=>isInt
);
parcelHelpers.export(exports, "isNan", ()=>isNan
);
parcelHelpers.export(exports, "isNum", ()=>isNum
);
parcelHelpers.export(exports, "isObj", ()=>isObj
);
parcelHelpers.export(exports, "isStr", ()=>isStr
);
parcelHelpers.export(exports, "isWeakStr", ()=>isWeakStr
);
parcelHelpers.export(exports, "isNode", ()=>isNode
);
parcelHelpers.export(exports, "enforce", ()=>enforce
);
parcelHelpers.export(exports, "methods", ()=>methods
);
parcelHelpers.export(exports, "isDef", ()=>isDef
);
parcelHelpers.export(exports, "isUndef", ()=>isUndef
);
var _strMjs = require("../extensions/str.mjs");
function analyzer(toAnalyze) {
    return {
        toAnalyze,
        type: function(...types) {
            try {
                if (types.length === 0) {
                    const types = {
                        number: this.toAnalyze instanceof Number,
                        HTMLElement: this.toAnalyze instanceof HTMLElement,
                        string: typeof this.toAnalyze === 'string' || this.toAnalyze instanceof String,
                        number: typeof this.toAnalyze === 'number',
                        undefined: typeof this.toAnalyze === 'undefined',
                        function: typeof this.toAnalyze === 'function',
                        null: this.toAnalyze === null,
                        array: Array.isArray(this.toAnalyze),
                        boolean: typeof this.toAnalyze === "boolean"
                    };
                    const type = Object.entries(types).filter((e)=>e[1] == true
                    );
                    if (type.length == 0) try {
                        const str = this.toAnalyze.toString();
                        return str.slice(str.indexOf(' ') + 1).replace(']', '');
                    } catch (e) {}
                    return type[0][0];
                } else {
                    const t = analyzer(this.toAnalyze).type();
                    for (const type of types)if (typeof type === "string") {
                        if (type === t) return true;
                    } else {
                        if (this.toAnalyze instanceof type) return true;
                    }
                    return false;
                }
            } catch (e) {
                try {
                    return toAnalyze.__proto__.constructor.name;
                } catch (e) {}
            }
        },
        functionType: function(...types) {
            if (types.length === 0) {
                // Ian Carter -> https://stackoverflow.com/a/69316645
                const x = this.toAnalyze;
                return typeof x !== 'function' ? '' : x.hasOwnProperty('arguments') ? 'function' : x.prototype ? 'class' : x.constructor.name === 'AsyncFunction' ? 'async' : 'arrow';
            } else {
                const t = analyzer(this.toAnalyze).functionType();
                for (const type of types){
                    if (type === t) return true;
                }
                return false;
            }
        },
        functionParameters: function(fn = this.toAnalyze, fnString = this.toAnalyze.toString()) {
            let parameters = "";
            const head = fnString.slice(0, fnString.indexOf("{"));
            if (this.functionType("arrow")) {
                parameters = head.split("=>", 1)[0].trim();
                if (parameters.charAt(0) === "(") parameters = parameters.slice(1, -1);
            } else parameters = _strMjs.$str(head).stack("(", ")").str;
            return parameters;
        },
        functionBody: function(fn = this.toAnalyze) {
            return _strMjs.$str(fn).stack("{", "}").str;
        },
        get isObj () {
            try {
                return this.constructor.name === "Object";
            } catch (e) {
                return false;
            }
        },
        get isStr () {
            return this.type("string");
        },
        get isWeakStr () {
            return this.type("string") || this.toAnalyze instanceof String;
        },
        get isArr () {
            return this.type("array");
        },
        get isFn () {
            return this.type("function");
        },
        get isStrictObj () {
            try {
                const str = this.toAnalyze.toString();
                return str.slice(str.indexOf(' ') + 1).replace(']', '') === 'Object';
            } catch (e) {
                return false;
            }
        },
        get methods () {
            const ignore = [
                "__defineGetter__",
                "__defineSetter__",
                "hasOwnProperty",
                "__lookupGetter__",
                "__lookupSetter__",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toString",
                "valueOf",
                "toLocaleString"
            ];
            const properties = new Set();
            let currentObj = this.toAnalyze;
            do Object.getOwnPropertyNames(currentObj).map((item)=>properties.add(item)
            );
            while (currentObj = Object.getPrototypeOf(currentObj))
            return [
                ...properties.keys()
            ].filter((item)=>typeof this.toAnalyze[item] === 'function' && !ignore.includes(item)
            );
        },
        enforce (ObjectType, messageHandler = (expected, actual)=>{
            return `Expected type '${expected}', got '${actual}'`;
        }) {
            const type = this.type();
            const message = messageHandler(ObjectType, type);
            if (type !== ObjectType && type.toLowerCase() !== ObjectType.toLowerCase()) throw new TypeError(message);
        }
    };
}
analyzer.type = (o, t)=>t ? analyzer(o).type(t) : analyzer(o).type()
;
analyzer.typev = (arr)=>arr.map((a)=>analyzer.type(a)
    )
;
analyzer.str = (o)=>typeof o === 'string'
;
analyzer.weakStr = (o)=>analyzer.str(o) || o instanceof String
;
analyzer.arr = (o)=>Array.isArray(o)
;
analyzer.obj = (o)=>analyzer(o).isStrictObj
;
analyzer.fn = (o)=>typeof o === 'function'
;
analyzer.int = (o)=>typeof o === Number.isInteger(o)
;
analyzer.nan = (o)=>isNaN(o)
;
analyzer.num = (o)=>typeof o === 'number'
;
analyzer.bool = (o)=>typeof o === 'boolean'
;
analyzer.enforce = (enforceObj = {}, messageHandler)=>{
    for(const type in enforceObj){
        const object = enforceObj[type];
        analyzer(object).enforce(type, messageHandler);
    }
};
const typev = analyzer.typev;
const isStr = (o)=>typeof o === 'string'
;
const isWeakStr = (o)=>analyzer.str(o) || o instanceof String
;
const isArr = (o)=>Array.isArray(o)
;
const isObj = (o)=>analyzer(o).isStrictObj
;
const isFn = (o)=>typeof o === 'function'
;
const isInt = (o)=>Number.isInteger(o)
;
const isNan = (o)=>isNaN(o)
;
const isNum = (o)=>typeof o === 'number'
;
const isBool = (o)=>typeof o === 'boolean'
;
const isNode = (o)=>o instanceof HTMLElement
;
const isDef = (o)=>o !== undefined
;
const isUndef = (o)=>o === undefined
;
const enforce = (enforceObj = {}, messageHandler)=>{
    for(const type in enforceObj){
        const object = enforceObj[type];
        analyzer(object).enforce(type, messageHandler);
    }
};
const methods = (obj)=>{
    const ignore = [
        "__defineGetter__",
        "__defineSetter__",
        "hasOwnProperty",
        "__lookupGetter__",
        "__lookupSetter__",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toString",
        "valueOf",
        "toLocaleString"
    ];
    const properties = new Set();
    let currentObj = obj;
    do Object.getOwnPropertyNames(currentObj).map((item)=>properties.add(item)
    );
    while (currentObj = Object.getPrototypeOf(currentObj))
    return [
        ...properties.keys()
    ].filter((item)=>typeof obj[item] === 'function' && !ignore.includes(item)
    );
};
exports.default = analyzer;

},{"../extensions/str.mjs":"9yv3A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yv3A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Str", ()=>Str
) /*
class Str extends String {
    constructor(string){
        super(string);
    }
    stack(ch1="(",ch2){
        if (ch2 == null){
            if (ch1 === "(") ch2 = ")";
            else if (ch1 === "[") ch2 = "]";
            else if (ch1 === "{") ch2 = "}";
            else throw new Error("Str.stack requires char of (,[,{")
        }
        const str = this.slice(this.indexOf(ch1)+1); 
        let stk = 1; let ind = -1;
        for (let i in str){
            if (str.charAt(i) == ch1){
                stk += 1;
            }
            if (str.charAt(i) == ch2){
                stk -= 1; 
            }
            if (stk == 0){
                ind = i;
                break; 
            }
        }
        return new Str(str.slice(0,ind));
    }
    camelCaseToDashed(){
        let str = this.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
        str = str.startsWith("-") ? str.slice(1) : str; 
        return new Str(str);
    }
    dashedToCamelCase(){
        return new Str(this.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }).replaceAll("-",""));
    } 
    noSpace(){ 
        return new Str(this.replace(/  +/g, ' ').replaceAll(' ',''));
    }
    oneSpace(){
        return new Str(this.replace(/  +/g, ' '));
    }
    noDuplicateWords(){
        return this.replaceAll(/\b(\w+)\b(?=.*?\b\1\b)/ig,'')
    }
    map(obj,replaceAll = true){
        let str = this;
        for (let char in obj){
            str = replaceAll ? str.replaceAll(char,obj[char]) : str.replace(char,obj[char]); 
        }
        return str; 
    }
    removeDup(toRemove){
            this.split(toRemove);
            this[0] = this[0] + toRemove;  
            return new Str(this.join('')); 
    }
    remove(...rest){
        let newStr = this; 
        for (const s of rest){
            newStr = newStr.replaceAll(s,"")
        }
        return new Str(newStr); 
    }
    findAndRemove(arr,toRemove){
        for (let s of arr){
            const newArr = s.replace(toRemove,'');
            this.replaceAll(s,newArr); 
        }
        return new Str(this); 
    }
    findAndReplace(arr,replacement){
        for (let s of arr){
            this.replace(s,replacement);  
        }
        return new Str(this);
    }
    substr(start,end){
        if (typeof start === 'number'){
            if (!this.includes(end)){
                return this; 
            }
            return new Str(this.slice(start,this.indexOf(end))+1);
        }
        else if (typeof end === 'number'){
            if (!this.includes(start)){
                return this; 
            }
            return new Str(this.slice(this.indexOf(start),end)+1); 
        }
        else {
            if (!this.includes(start)){
                return new Str(this); 
            }
            else if (!this.includes(end)){
                return new Str(this); 
            }
            return new Str(this.slice(this.indexOf(start),this.indexOf(end)+1)); 
        }
    }
    between(start,end){
        if (!end) end = start; 
        const i0 = (typeof start==="string") ? this.indexOf(start) : start; 
        const i1 = (typeof end==="string") ? this.slice(i0+1).indexOf(end) : end; 
        return new Str(this.slice(i0+1,i1+1));  
    }

    innerStack(ch1,ch2){
        if (ch2 == null){
            ch2 = (ch1=="(") ? ")" : (ch1=="[") ? "]" : (ch1=="{") ? "}" : ")";
        }
        while (this.includes(ch1)){
            new Str(this).stack(ch1,ch2).this; 
        }
        return new Str(this); 
    }
    capitalizeSentence(){
        let str = this._;
        let sentences = str.split('.');
        let updated = [];
        sentences.map( function (sentence) {
        if ( sentence ) {
            if ( sentence[0] !== ' ' ) {
            let output = sentence.charAt(0).toUpperCase() + sentence.slice(1);
            updated.push( output );
            }
            else {
            let output = sentence.charAt(1).toUpperCase() + sentence.slice(2);
            updated.push( ' ' + output );
            }
        }
        });
        let final = updated.join('.');
        if ( str.endsWith('.') ) {
        final += '.';
        }
        return new Str(final);
    }
// NUMBER returners
    numOf(char){
        return this.split(char).length - 1; 
    }
// ARR returners
    stackToList(char1,char2){

            const strArr = [this.slice(0,this.indexOf(char1)),
            this.slice(this.indexOf(char1)+1,this.indexOf(char2)),
            this.slice(this.indexOf(char2)+1)]
        
        return thisArr; 
    }
// BOOL returners
    equals(...rest){
        if (Array.isArray(rest[0])){
            rest = rest[0];
        }
        for (let i in rest){
            if(s === rest[i]){
                return true;
            }
        }
        return false;
    }

    hasAny(...rest){
        for (const subStr of rest){
            if (this.includes(subStr)){
                return true;
            }
        }
        return false; 
    }
    hasAll(...rest){
        for (const subStr of rest){
            if (!this.includes(subStr)){
                return false; 
            }
        }
        return true;
    }
    hasNone(...rest){
        for (const subStr of rest){
            if (this.includes(subStr)){
                return false; 
            }
        }
        return true;
    }
    validate(){
        const v = {
            email : s => new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/).test(s),
            passwordComplex :  s =>   new RegExp(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ ).test(s),
            passwordModerate : s =>  new RegExp(/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/).test(s),
            username :  s =>  new RegExp(/^[a-z0-9_-]{3,16}$/).test(s),
            url :  s =>  new RegExp(/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).test(s),
            phone :  s =>  new RegExp(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/igm).test(s),
            num : s =>  !isNaN(s),
            int : s =>  !isNaN(s) && Number.isInteger(parseFloat(s)),
            float : s =>  !isNaN(s) && !Number.isInteger(parseFloat(s)),
            array : s =>  Array.isArray(s),
        }
        for (const i in v){
            v[i] = v[i](this); 
        }
        return v; 
    }

}

const $str = (s) => new Str(s);

export { Str, $str };
export default Str; 

*/ ;
parcelHelpers.export(exports, "$str", ()=>$str
);
class Str extends String {
    constructor(string){
        super(string);
    }
    stack(ch1, ch2) {
        if (ch2 == null) ch2 = ch1 == "(" ? ")" : ch1 == "[" ? "]" : ch1 == "{" ? "}" : ")";
        let stk = 1;
        let ind = -1;
        const str = this.slice(this.indexOf(ch1) + 1);
        for(let i in str){
            if (str.charAt(i) == ch1) stk += 1;
            if (str.charAt(i) == ch2) stk -= 1;
            if (stk == 0) {
                ind = i;
                break;
            }
        }
        return new Str(str.slice(0, ind - 1));
    }
    stackAnalysis(ch1, ch2) {
        if (ch2 == null) ch2 = ch1 == "(" ? ")" : ch1 == "[" ? "]" : ch1 == "{" ? "}" : ")";
        let stk = 1;
        let ind = -1;
        const start = this.indexOf(ch1) + 1;
        const str = this.slice(start);
        for(let i in str){
            if (str.charAt(i) == ch1) stk += 1;
            if (str.charAt(i) == ch2) stk -= 1;
            if (stk == 0) {
                ind = i;
                break;
            }
        }
        ind -= 1;
        const end = start + ind;
        let after = this.slice(end);
        after = after.slice(after.indexOf(ch2) + 1);
        return {
            inner: new Str(str.slice(0, ind)),
            ind,
            start,
            end,
            after
        };
    }
    camelCaseToDashed() {
        let str = this.replace(/[A-Z]/g, (m)=>"-" + m.toLowerCase()
        );
        // str = str.startsWith("-") ? str.slice(1) : str; 
        return new Str(str);
    }
    dashedToCamelCase() {
        return new Str(this.replace(/-([a-z])/g, function(g) {
            return g[1].toUpperCase();
        }).replaceAll("-", ""));
    }
    noSpace() {
        return new Str(this.replace(/  +/g, ' ').replaceAll(' ', ''));
    }
    oneSpace() {
        return new Str(this.replace(/  +/g, ' '));
    }
    noDuplicateWords() {
        return this.replaceAll(/\b(\w+)\b(?=.*?\b\1\b)/ig, '');
    }
    map(obj, replaceAll = true) {
        let str = this;
        for(let char in obj)str = replaceAll ? str.replaceAll(char, obj[char]) : str.replace(char, obj[char]);
        return str;
    }
    removeDup(toRemove) {
        this.split(toRemove);
        this[0] = this[0] + toRemove;
        return new Str(this.join(''));
    }
    remove(...rest) {
        for(let i in rest)this.replaceAll(rest[i], '');
        return new Str(this);
    }
    findAndRemove(arr, toRemove) {
        for (let s of arr){
            const newArr = s.replace(toRemove, '');
            this.replaceAll(s, newArr);
        }
        return new Str(this);
    }
    findAndReplace(arr, replacement) {
        for (let s of arr)this.replace(s, replacement);
        return new Str(this);
    }
    substr(start, end) {
        if (typeof start === 'number') {
            if (!this.includes(end)) return this;
            return new Str(this.slice(start, this.indexOf(end)) + 1);
        } else if (typeof end === 'number') {
            if (!this.includes(start)) return this;
            return new Str(this.slice(this.indexOf(start), end) + 1);
        } else {
            if (!this.includes(start)) return new Str(this);
            else if (!this.includes(end)) return new Str(this);
            return new Str(this.slice(this.indexOf(start), this.indexOf(end) + 1));
        }
    }
    between(start, end) {
        if (typeof start === 'number') {
            if (!this.includes(end)) return this;
            return new Str(this.slice(start + 1, this.indexOf(end)));
        } else if (typeof end === 'number') {
            if (!this.includes(start)) return this;
            return new Str(this.slice(this.indexOf(start) + 1, end));
        } else {
            if (!this.includes(start)) return new Str(this);
            else if (!this.includes(end)) return new Str(this);
            return new Str(this.slice(this.indexOf(start) + 1, this.indexOf(end)));
        }
    }
    innerStack(ch1, ch2) {
        if (ch2 == null) ch2 = ch1 == "(" ? ")" : ch1 == "[" ? "]" : ch1 == "{" ? "}" : ")";
        while(this.includes(ch1))new Str(this).stack(ch1, ch2).this;
        return new Str(this);
    }
    capitalizeSentence() {
        let str = this._;
        let sentences = str.split('.');
        let updated = [];
        sentences.map(function(sentence) {
            if (sentence) {
                if (sentence[0] !== ' ') {
                    let output = sentence.charAt(0).toUpperCase() + sentence.slice(1);
                    updated.push(output);
                } else {
                    let output = sentence.charAt(1).toUpperCase() + sentence.slice(2);
                    updated.push(' ' + output);
                }
            }
        });
        let final = updated.join('.');
        if (str.endsWith('.')) final += '.';
        return new Str(final);
    }
    // NUMBER returners
    numOf(char) {
        return this.split(char).length - 1;
    }
    // ARR returners
    stackToList(char1, char2) {
        const strArr = [
            this.slice(0, this.indexOf(char1)),
            this.slice(this.indexOf(char1) + 1, this.indexOf(char2)),
            this.slice(this.indexOf(char2) + 1)
        ];
        return thisArr;
    }
    // BOOL returners
    equals(...rest) {
        if (Array.isArray(rest[0])) rest = rest[0];
        for(let i in rest){
            if (s === rest[i]) return true;
        }
        return false;
    }
    hasAny(...rest) {
        for (const subStr of rest){
            if (this.includes(subStr)) return true;
        }
        return false;
    }
    hasAll(...rest) {
        for (const subStr of rest){
            if (!this.includes(subStr)) return false;
        }
        return true;
    }
    hasNone(...rest) {
        for (const subStr of rest){
            if (this.includes(subStr)) return false;
        }
        return true;
    }
    hasStart(...rest) {
        for(let i in rest){
            if (this.startsWith(rest[i])) return true;
        }
        return false;
    }
    hasEnd(...rest) {
        for(let i in rest){
            if (this.endsWith(rest[i])) return true;
        }
        return false;
    }
    validate() {
        const v = {
            email: (s)=>new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/).test(s)
            ,
            passwordComplex: (s)=>new RegExp(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/).test(s)
            ,
            passwordModerate: (s)=>new RegExp(/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/).test(s)
            ,
            username: (s)=>new RegExp(/^[a-z0-9_-]{3,16}$/).test(s)
            ,
            url: (s)=>new RegExp(/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).test(s)
            ,
            phone: (s)=>new RegExp(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/igm).test(s)
            ,
            num: (s)=>!isNaN(s)
            ,
            int: (s)=>!isNaN(s) && Number.isInteger(parseFloat(s))
            ,
            float: (s)=>!isNaN(s) && !Number.isInteger(parseFloat(s))
            ,
            array: (s)=>Array.isArray(s)
        };
        for(const i in v)v[i] = v[i](this);
        return v;
    }
}
const $str = (s)=>new Str(s)
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPzUp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DeepProxy", ()=>DeepProxy
);
var _analyzeMjs = require("./analyze.mjs");
class DeepProxy {
    constructor(object, handler){
        _analyzeMjs.enforce({
            object: handler
        });
        for(let key in object)if (_analyzeMjs.isObj(object[key])) object[key] = new DeepProxy(object[key], handler);
        return new Proxy(object, handler);
    }
}
exports.default = DeepProxy;

},{"./analyze.mjs":"bmTXV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47jmE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param types string[] of types
*/ parcelHelpers.export(exports, "Type", ()=>Type
);
parcelHelpers.export(exports, "Typevout", ()=>Typevout
);
parcelHelpers.export(exports, "TypeEnforcer", ()=>TypeEnforcer
);
parcelHelpers.export(exports, "TypeConverter", ()=>TypeConverter
);
parcelHelpers.export(exports, "objEnforcer", ()=>objEnforcer
);
parcelHelpers.export(exports, "arrEnforcer", ()=>arrEnforcer
);
parcelHelpers.export(exports, "strEnforcer", ()=>strEnforcer
);
parcelHelpers.export(exports, "nodeEnforcer", ()=>nodeEnforcer
);
parcelHelpers.export(exports, "nodeConverter", ()=>nodeConverter
);
parcelHelpers.export(exports, "arrConverter", ()=>arrConverter
);
parcelHelpers.export(exports, "isType", ()=>isType
);
var _analyzeMjs = require("./analyze.mjs");
const mapTypeName = (str)=>{
    const keyMap = {
        '[]': 'array',
        '{}': 'Object',
        $: 'function',
        fn: 'function',
        object: 'Object',
        obj: 'Object',
        Array: 'array',
        node: 'HTMLElement'
    };
    for(const key in keyMap)str = str.replaceAll(key, keyMap[key]);
    return str;
};
const mapTypeNames = (obj)=>{
    const newObj = {};
    const keyMap = {
        '[]': 'array',
        '{}': 'Object',
        $: 'function',
        fn: 'function',
        object: 'Object',
        obj: 'Object',
        node: 'HTMLElement',
        Array: 'array'
    };
    Object.entries(obj).forEach((entry)=>{
        let [key, val] = entry;
        for(const k in keyMap)key = key.replaceAll(k, keyMap[k]);
        newObj[key.replaceAll(' ', '')] = val;
    });
    return newObj;
};
class Type {
    constructor(...types){
        this.types = types.map((type)=>mapTypeName(_analyzeMjs.isFn(type) ? type.name : type)
        );
    }
    /**
     * @deprecated
    */ isType(...objects) {
        let passes = false;
        for (const type of this.types){
            for (const object of objects)if (_analyzeMjs.analyzer.type(object) === type) passes = true;
        }
        return passes;
    }
    test(object) {
        for (const type of this.types){
            if (_analyzeMjs.analyzer.type(object) === type) return true;
        }
        return false;
    }
    enforce(...objects) {
        for (const object of objects){
            const passed = this.test(object);
            if (!passed) throw new TypeError(`Expected type ${this.types}; got ${_analyzeMjs.analyzer.type(object)}`);
        }
    }
    static isType(toTest, ...types) {
        return new Type(...types).test(toTest);
    }
}
class Typevout {
    constructor(argMap){
        this.mapper = mapTypeNames(argMap);
        return this.map.bind(this);
    }
    map(args) {
        const argmap = this.mapper;
        new TypeEnforcer(Array)(args);
        if (args.length === 0) args = [
            null
        ];
        const tv = _analyzeMjs.typev(args);
        for(const v in argmap){
            const vs = v.split(',');
            for(const i in vs){
                if (vs[i] === "*") vs[i] = tv[i];
                else if (vs[i] === "...*") vs[i].push(tv.slice(i));
            }
            argmap[vs] = argmap[v];
        }
        const tvs = tv.join(",");
        if (tvs in argmap) return argmap[tvs](args);
        else if (tvs + "," in argmap) return argmap[tvs + ','](args);
        return argmap["?"](args);
    }
}
class TypeEnforcer extends Type {
    constructor(...types){
        super(...types);
        return this.enforce.bind(this);
    }
}
class TypeConverter {
    constructor(converterObject){
        this.converter = mapTypeNames(converterObject);
        return this.convert.bind(this);
    }
    convert(obj) {
        const type = _analyzeMjs.analyzer.type(obj);
        if (type in this.converter) return this.converter[type](obj);
        else if ('?' in this.converter) return this.converter['?'](obj);
        else throw new TypeError('preconversion type not provided for.');
    }
}
const objEnforcer = new TypeEnforcer('object');
const arrEnforcer = new TypeEnforcer('array');
const strEnforcer = new TypeEnforcer('string');
const nodeEnforcer = new TypeEnforcer('node');
const nodeConverter = new TypeConverter({
    string: (o)=>document.createElement(o)
    ,
    node: (o)=>o
});
const arrConverter = new TypeConverter({
    array: (o)=>o
    ,
    '?': (o)=>[
            o
        ]
});
const isType = Type.isType;
exports.default = Type;

},{"./analyze.mjs":"bmTXV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2CXRC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Argvout", ()=>Argvout
);
var _analyzeMjs = require("./analyze.mjs");
var _analyzeMjsDefault = parcelHelpers.interopDefault(_analyzeMjs);
var _typeMjs = require("./type.mjs");
var _typeMjsDefault = parcelHelpers.interopDefault(_typeMjs);
const mapTypeNames = (obj)=>{
    const newObj = {};
    const keyMap = {
        '[]': 'array',
        '{}': 'Object',
        '$': 'function',
        'fn': 'function',
        'object': 'Object',
        'obj': 'Object',
        'node': 'HTMLElement'
    };
    Object.entries(obj).forEach((entry)=>{
        let [key, val] = entry;
        for(const k in keyMap)key = key.replaceAll(k, keyMap[k]);
        newObj[key.replaceAll(' ', '')] = val;
    });
    return newObj;
};
class Argvout {
    constructor(converter){
        this.converter = converter;
        return this.out.bind(this);
    }
    out(args) {
        _typeMjs.arrEnforcer(args);
        return this.converter[args.length](args);
    }
}
exports.default = Argvout;

},{"./analyze.mjs":"bmTXV","./type.mjs":"47jmE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1yiXL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assign", ()=>assign
);
parcelHelpers.export(exports, "Global", ()=>Global
);
parcelHelpers.export(exports, "Assignee", ()=>Assignee
);
parcelHelpers.export(exports, "Assigner", ()=>Assigner
);
var global = arguments[3];
/* eslint-disable prefer-reflect */ const assign = (assignee = {}, assigner = {}, filter = (o)=>true
)=>{
    function getMethods(obj = assigner) {
        const properties = new Set();
        let currentObj = obj;
        do Object.getOwnPropertyNames(currentObj).map((item)=>properties.add(item)
        );
        while (currentObj = Object.getPrototypeOf(currentObj))
        return [
            ...properties.keys()
        ].filter((item)=>typeof obj[item] === 'function'
        );
    }
    const force = Assignee.config.force;
    const assignerMethods = getMethods(assigner);
    const assignmentKeys = Reflect.ownKeys(assigner).filter(filter);
    if (Assignee.config.includeMethods) for(const methodName in assignerMethods)assignee[methodName] = assigner[methodName];
    for(const a in assignmentKeys)assignee[assignmentKeys[a]] = assignee[assignmentKeys[a]] === null && !force ? assignee[assignmentKeys[a]] : assigner[assignmentKeys[a]];
    return assignee;
};
class Assigner {
    constructor(assigner){
        this.assigner = assigner;
        return this.assign.bind(this);
    }
    assign(assignee, filter = (o)=>true
    ) {
        return assign(assignee, this.assigner, filter);
    }
}
class Assignee {
    static map(assignee = {}, assigner = {}, filter = (o)=>true
    ) {
        return assign(assignee, assigner, filter);
    }
    static config(object) {
        for(const key in object)Assignee.config[key] = object[key];
        return {
            ...Assignee.config
        };
    }
    constructor(object = {}, config = {
        force: false
    }){
        this.assignee = object;
        Assignee.config(config);
        return this.assign.bind(this);
    }
    assign(assigner, filter = (o)=>true
    ) {
        return Assignee.map(this.assignee, assigner, filter);
    }
    keys(each = (key, index)=>{}) {
        Object.keys(this.assignee).forEach((key, index)=>{
            Reflect.apply(each, this, [
                key,
                index
            ]);
        });
        return this;
    }
    values(each = (value, index)=>{}) {
        Object.values(this.assignee).forEach((value, index)=>{
            Reflect.apply(each, this, [
                value,
                index
            ]);
        });
        return this;
    }
    entries(each = (key, value, index)=>{}) {
        Object.values(this.assignee).forEach((key, value, index)=>{
            Reflect.apply(each, this, [
                key,
                value,
                index
            ]);
        });
        return this;
    }
}
Assignee.config({
    force: false,
    methods: false
});
Assignee.assign = assign;
const Global = new Assignee(global);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"biQsx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _analyzeMjs = require("./analyze.mjs");
var _arrayMjs = require("../extensions/array.mjs");
class Attempt {
    [Symbol.toPrimitive](hint) {
        return this.out();
    }
    constructor(...attempters){
        this.attempters = attempters;
        this.attempts = _arrayMjs.Arr();
        this.failed = _arrayMjs.Arr();
        this.worked = _arrayMjs.Arr();
        this.config = {
            halter () {},
            onError () {}
        };
        if (this.attempters.filter((f)=>typeof f !== 'function'
        ).length > 0) this.config = {
            ...this.config,
            ...this.attempters.filter((f)=>typeof f !== 'function'
            )[0]
        };
        const halterVal = this.run();
        if (halterVal) return halterVal;
    }
    run() {
        console.log(this.config);
        let lastOut = null;
        for (let fn of this.attempters){
            try {
                const a = fn(lastOut);
                this.attempts.push({
                    output: a,
                    attempt: fn
                });
                this.worked.push({
                    output: a,
                    attempt: fn
                });
                lastOut = this.worked.last().output;
            } catch (e) {
                this.attempts.push({
                    output: e,
                    attempt: fn
                });
                this.failed.push({
                    error: e,
                    attempt: fn
                });
                this.config.onError(lastOut);
                lastOut = null;
            }
            if (this.config.halter(lastOut) != null) return lastOut;
        }
    }
    out(n = 0) {
        if (n < 0) n = length + n;
        return this.worked[n].output;
    }
}
exports.default = Attempt;

},{"./analyze.mjs":"bmTXV","../extensions/array.mjs":"6amDc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Ts7N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function evaluator(toEvaluate, ...parameters) {
    const evaluator1 = new Function(parameters, "return " + toEvaluate);
    return {
        toEvaluate,
        evaluator: evaluator1,
        evaluate: function($this = globalThis, ...args) {
            try {
                return this.evaluator.apply($this, args);
            } catch (e) {
                console.error(e);
                return null;
            }
        },
        eval: this.eval
    };
}
exports.default = evaluator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f5y0g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "consoleStrs", ()=>consoleStrs
);
/**
 * 
 * @param {String} strs - %fgColor,bgColor,other% string
 * @description Example: printf("%red,blue% foreground will be red, background will be blue", "%dim% text will be dimmed")
*/ parcelHelpers.export(exports, "printf", ()=>printf
);
/**
 * 
 * @param {String} strs - strings to print in terminal
 * */ parcelHelpers.export(exports, "print", ()=>print
);
/**
 * 
 * @param {String} strs - strings to print in terminal separated by newline
 * */ parcelHelpers.export(exports, "println", ()=>println
);
/**
 * 
 * @param  {...string} strs - list of strs to print, to style, use array [string,styles]
 * @description Example: log(["red",{color:"red"}],"normal") 
 */ parcelHelpers.export(exports, "log", ()=>log
) // const print = function(...toPrint){
 //     if (toPrint.filter(l => Array.isArray(l)).length === 0){
 //         toPrint = [toPrint]
 //     }   
 //     const msg = 
 //         toPrint
 //             .map(e => (!Array.isArray(e))?[e,ft.reset]:e)
 //             .map(e => (e.length === 1)?[e[0],ft.reset]:e)
 //             .map(e => (e.slice(1).join(""))+e[0]+ft.reset).join(" ");
 //     console.log(msg);
 // }
 // print.error = msg => print(msg,fg.red);
 // print.warn = msg => print(msg,fg.yellow);
 // print.success = msg => print(msg,fg.green);
 // print.invert = {
 //     error : msg => print(msg,bg.red), 
 //     warn : msg => print(msg,fg.yellow), 
 //     success:msg => print(msg,fg.green),
 // }
 // const terminal = {print,styleStrings:terminalStyleStrings,}
 // export { print, terminalStyleStrings, fg, bg, ft, sym, itl,terminal};
 // export default terminal
;
var _strMjs = require("../extensions/str.mjs");
const ft = {
    "reset": "\x1b[0m",
    "bold": "\x1b[1m",
    "dim": "\x1b[2m",
    "underscore": "\x1b[4m",
    "blink": "\x1b[5m",
    "reverse": "\x1b[7m",
    "hidden": "\x1b[8m"
};
const fg = {
    "black": "\x1b[30m",
    "red": "\x1b[31m",
    "green": "\x1b[32m",
    "yellow": "\x1b[33m",
    "blue": "\x1b[34m",
    "magenta": "\x1b[35m",
    "cyan": "\x1b[36m",
    "white": "\x1b[37m"
};
const bg = {
    "black": "\x1b[40m",
    "red": "\x1b[41m",
    "green": "\x1b[42m",
    "yellow": "\x1b[43m",
    "blue": "\x1b[44m",
    "magenta": "\x1b[45m",
    "cyan": "\x1b[46m",
    "white": "\x1b[47m"
};
const symbols = {
    "mult": "×",
    "div": "÷",
    "plusmin": "±",
    "star": "★",
    "check": "✔︎",
    "x": "✘",
    "arrow": "→",
    "dblArrow": "⇒",
    "finger": "☞",
    "squareFilled": "◼︎",
    "square": "◻︎",
    "triUp": "▲",
    "triRight": "►",
    "triLeft": "◀︎",
    "triDown": "▼",
    "smile": "☺︎",
    "frown": "☹︎",
    "cloud": "☁︎",
    "spade": "♠︎",
    "club": "♣︎",
    "heart": "♥︎",
    "diamond": "♦︎",
    "crown": "♛",
    "knight": "♞",
    "dice1": "⚀",
    "dice2": "⚁",
    "dice3": "⚂",
    "dice4": "⚃",
    "dice5": "⚄",
    "dice6": "⚅",
    "plane": "✈︎",
    "sword": "⚔︎",
    "flagFilled": "⚑",
    "flag": "⚐",
    "peace": "☮︎",
    "peaceHand": "✌︎",
    "yinyang": "☯︎",
    "coffee": "☕︎"
};
const italic = {
    "a": "𝘢",
    "b": "𝘣",
    "c": "𝘤",
    "d": "𝘥",
    "e": "𝘦",
    "f": "𝘧",
    "g": "𝘨",
    "h": "𝘩",
    "i": "𝘪",
    "j": "𝘫",
    "k": "𝘬",
    "l": "𝘭",
    "m": "𝘮",
    "n": "𝘯",
    "o": "𝘰",
    "p": "𝘱",
    "q": "𝘲",
    "r": "𝘳",
    "s": "𝘴",
    "t": "𝘵",
    "u": "𝘶",
    "v": "𝘷",
    "w": "𝘸",
    "x": "𝘹",
    "y": "𝘺",
    "z": "𝘻",
    "A": "𝘼",
    "B": "𝘽",
    "C": "𝘾",
    "D": "𝘿",
    "E": "𝙀",
    "F": "𝙁",
    "G": "𝙂",
    "H": "𝙃",
    "I": "𝙄",
    "J": "𝙅",
    "K": "𝙆",
    "L": "𝙇",
    "M": "𝙈",
    "N": "𝙉",
    "O": "𝙊",
    "P": "𝙋",
    "Q": "𝙌",
    "R": "𝙍",
    "S": "𝙎",
    "T": "𝙏",
    "U": "𝙐",
    "V": "𝙑",
    "W": "𝙒",
    "X": "𝙓",
    "Y": "𝙔",
    "Z": "𝙕",
    map (str) {
        let newStr = "";
        for (const i of str)newStr += i in this ? this[i] : i;
        return newStr;
    }
};
const consoleStrs = {
    ft,
    fg,
    bg,
    symbols,
    italic
};
function printf(...strs) {
    const getf = (str)=>{
        let fbool = false;
        let stystr = "";
        let pstr = str;
        const s = new _strMjs.Str(str);
        if (s.hasAny("%") && s.numOf("%") === 2) {
            const stys = s.between("%");
            pstr = str.replace("%" + stys + "%", "");
            if (pstr.startsWith(" ")) pstr = pstr.slice(1);
            const styarr = stys.replaceAll(" ", "").split(",");
            for (const st of styarr){
                if (st in ft) stystr += ft[st];
                else if (st in fg) {
                    if (fbool) stystr += bg[st];
                    else {
                        stystr += fg[st];
                        fbool = true;
                    }
                }
            }
        }
        return stystr + pstr;
    };
    let out = "";
    for (const str1 of strs)out += getf(str1) + ft.reset;
    console.log(out);
}
function print(...strs) {
    let newStr = "";
    for (const str of strs)newStr += str;
    console.log(newStr + ft.reset);
}
function println(...strs) {
    for (const str of strs)console.log(str);
}
function log(...strs) {
    const logarr = [];
    for (const str of strs){
        if (Array.isArray(str)) {
            const s = "%c" + str[0];
            const obj = str[1];
            let sty = typeof obj === "string" ? obj : "";
            if (typeof obj !== "string") for(const o in obj)sty += new _strMjs.Str(o).camelCaseToDashed().toString() + ":" + obj[o] + ";";
            logarr.push(...[
                s,
                sty
            ]);
        } else if (typeof str === "string") logarr.push(str);
    }
    console.log(...logarr);
}

},{"../extensions/str.mjs":"9yv3A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lQONk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultCSS", ()=>defaultCSS
);
parcelHelpers.export(exports, "cssData", ()=>cssData
);
parcelHelpers.export(exports, "toDashed", ()=>toDashed
);
parcelHelpers.export(exports, "toCamel", ()=>toCamel
);
parcelHelpers.export(exports, "formatSelector", ()=>formatSelector
);
parcelHelpers.export(exports, "formatProperty", ()=>formatProperty
);
parcelHelpers.export(exports, "formatValue", ()=>formatValue
);
parcelHelpers.export(exports, "supports", ()=>supports
);
parcelHelpers.export(exports, "supportsProp", ()=>supportsProp
);
parcelHelpers.export(exports, "flatten", ()=>flatten
);
parcelHelpers.export(exports, "stringify", ()=>stringify
);
parcelHelpers.export(exports, "parse", ()=>parse
);
parcelHelpers.export(exports, "generateStyleElement", ()=>generateStyleElement
);
parcelHelpers.export(exports, "unit", ()=>unit
);
parcelHelpers.export(exports, "configure", ()=>configure
);
parcelHelpers.export(exports, "inspect", ()=>inspect
);
parcelHelpers.export(exports, "formatDeclarations", ()=>formatDeclarations
);
parcelHelpers.export(exports, "compile", ()=>compile
);
parcelHelpers.export(exports, "Sheet", ()=>Sheet
);
parcelHelpers.export(exports, "config", ()=>config
);
parcelHelpers.export(exports, "Unit", ()=>_cssUnitsMjsDefault.default
) /*
export class Declarations {
    constructor (decObject) {
        Object.assign(this, formatDeclarations(decObject));
    }

    append (prop, val) {
        if (prop in cssConfig.properties) {
            const out = cssConfig.properties[prop](val)
            for (const o in out) this[formatProperty(o)] = formatValue(out[o])
        } else this[formatProperty(prop)] = formatValue(val)
        this.clean()
        this.inspect()
    }

    clean () {
        for (const i in this) {
            if (i in cssConfig.unitDefaults) {
                if (!isNaN(this[i])) this[i] += cssConfig.unitDefaults[i]
            } else if (toCamel(i) in cssConfig.unitDefaults) {
                if (!isNaN(this[i])) this[i] += cssConfig.unitDefaults[toCamel(i)]
            }
        }
    }

    inspect () {
        for (const p in this) {
            const dec = p + ':' + this[p]
            if (!supports(dec)) cssConfig.onUnsupported(new CSSUnsupportedError(dec))
        }
    }

    toObject () {
        const o = {}
        for (const i in this) o[i] = this[i]
        return o
    }

    toString () {
        return Object.entries(this).map(e => toDashed(e[0]) + ':' + e[1]).join(';')
    }

    stringify (type = 'string') {
        type = type.toLowerCase()
        if (type.startsWith('str')) return this.toString()
        else if (type.startsWith('arr')) return this.toString().split(';')
        else if (type.startsWith('obj')) return parse(this.toString())
    }
}
export class Rule {

    #__selector__;
    #__declarations__;
    constructor (selector, declarations) {
        this.selector = selector;
        this.declarations = declarations;
    }

    get selector () {
        return this.#__selector__;
    }

    set selector (selector) {
        if (!isNaN(selector)) selector = selector + "%"
        this.#__selector__ = selector;
    }

    get declarations () {
        return this.#__declarations__;
    }

    set declarations (declarations) {
        this.#__declarations__ = new Declarations(declarations);
    }

    get sheet () {
        return this.__sheet__;
    }

    set sheet (sheet) {
        if (this.sheet != null) {
            cssConfig.onError(new CSSStyleSheetError("cannot redefine sheet property"))
        }
        if (!(sheet instanceof CSSStyleSheet)) {
            cssConfig.onError(new CSSStyleSheetError("cannot redefine sheet property"))
        }
        this.__sheet__ = sheet
    }

    toString () {
        return (this.selector + "{" + this.declarations.toString() + "}")
    }

    get cssText () { return this.toString() }
}
export class RuleMap extends Map {
    constructor (cssObject) {
        super();
        if (isStr(cssObject)) cssObject = parse(cssObject);
        const styles = flatten(cssObject)
        for (const sel in styles) {
            if (sel === '@media' || sel === '@keyframes') continue
            else if (sel.includes('@media') || sel.includes('@keyframes')) {
                const inrMap = new RuleMap();
                for (const sel1 in styles[sel]) {
                    inrMap.set(inrMap.size, new Rule(sel1, styles[sel][sel1]))
                }
                this.set(sel, inrMap)
            } else {
                if (isObj(styles[sel]) || isArr(styles[sel])) {
                    this.set(this.size, new Rule(sel, styles[sel]))
                }
            }
        }
    }

    get sheet () {
        return this.__sheet__;
    }

    set sheet (sheet) {
        if (this.sheet != null) {
            cssConfig.onError(new CSSStyleSheetError("cannot redefine sheet property"))
        }
        if (!(sheet instanceof CSSStyleSheet)) {
            cssConfig.onError(new CSSStyleSheetError("cannot redefine sheet property"))
        }
        this.__sheet__ = sheet
    }

    toString () {
        let cssText = ""
        this.forEach(rule => { cssText += rule.toString() });
        return cssText;
    }

    render () {
        this.forEach((rule, key) => {
            rule = rule.toString();
            if (rule.includes("@import")) this.sheet.insertRule(rule, 0);
            else this.sheet.insertRule(rule, key);
        })
    }
}
export class RuleList extends Array {
    constructor (cssObject) {
        super()
        if (isStr(cssObject)) cssObject = parse(cssObject);
        const styles = compile(cssObject)
        for (const sel in styles) {
            if (sel === '@media' || sel === '@keyframes') continue
            else if (sel.includes('@media') || sel.includes('@keyframes')) {
                for (const sel1 in styles[sel]) {
                    this.push(new Rule(sel1, styles[sel][sel1]))
                }
            } else {
                if (isObj(styles[sel]) || isArr(styles[sel])) {
                    this.push(new Rule(sel, styles[sel]))
                }
            }
        }
    }

    get sheet () {
        return this.__sheet__;
    }

    set sheet (sheet) {
        if (this.sheet != null) {
            cssConfig.onError(new CSSStyleSheetError("cannot redefine sheet property"))
        }
        if (!(sheet instanceof CSSStyleSheet)) {
            cssConfig.onError(new CSSStyleSheetError("cannot redefine sheet property"))
        }
        this.__sheet__ = sheet
    }

    // set (index, value) {
    //     if (value instanceof RuleMap || value instanceof Rule) this.__set__(index, value);
    //     else this.__set__(index, new Rule(value));
    //     return this;
    // }

    toString () {
        let cssText = ""
        this.forEach(rule => { cssText += rule.toString() });
        return cssText;
    }

    render () {
        this.forEach((rule, key) => {
            rule = rule.toString();
            if (rule.includes("@import")) this.sheet.insertRule(rule, 0);
            else this.sheet.insertRule(rule, key);
        })
    }
}
export const HTMLStyleMethods = {

    get onError () {
        return cssConfig.ruleError
    },
    getRules () {
        return [...this.sheet.rules]
    },
     addByHTML (obj) {
        obj = stringify(obj)
        this.innerHTML = obj
        return this
    },
    add (r) {
        try {
            if (isObj(r)) r = stringify(r, 'array')
            if (isStr(r)) r = [r]
            r.forEach(s => this.insert(s))
        } catch (e) {
            cssConfig.ruleError(new CSSRuleError(e))
        }
        return this
    },
    insert (r, i) {
        if (isObj(r)) r = new Declarations(r).toString();
        if (isObj(r)) r = stringify(r, 'array');
        if (i) this.sheet.insertRule(r, i)
        else this.sheet.insertRule(r)
        return this
    },
    clear () {
        while (this.sheet.cssRules.length > 0) {
            this.sheet.deleteRule(0)
        }
        return this
    },
    delete (rule) {
        if (isStr(rule)) {
            for (const i in this.getRules()) {
                if (this.getRules()[i].selectorText === rule) return this.delete(parseInt(i))
            }
        }
        if (isNum(rule)) this.sheet.deleteRule(rule)
        return this
    },
    replace (selector, rule) {
        this.delete(selector)
        this.add(rule)
        return this
    },
    getRule (selector) {
        return this.getRules().find(rule => rule.selectorText === selector)
    },
    getRuleDecs (rule, type) {
        const decs = {}
        rule = this.getRule(rule)
        const styles = [...rule.styles]
        for (const r of styles) {
            const rd = toCamel(r)
            decs[rd] = rule.styles[rd]
        }
        if (type === 'string') return stringify(decs)
        else if (type === 'array') return stringify(decs, 'array')
        return decs
    },
    getRuleStyleMap (rule) {
        return this.getRule(rule).styleMap
    },
    getRuleText (rule) {
        // FIXME
        return rule
    },
    addRuleDecs (rule, decs) {
        rule = this.getRule(rule)
        const txt = rule.cssText.replace('}', '')
        if (isStr(decs)) decs = parse(txt + decs + ' }')
        else if (isArr(decs)) decs = parse(decs)
        for (const dec in decs) {
            this.addRuleDec(dec, decs[dec])
        }
    },
    setRuleDec (rule, prop, val) {
        this.getRuleStyleMap(rule).set(prop, val)
        return this
    },
    appendToHead () {
        if (this.sheet == null) {
            document.head.append(this)
        }
        return this
    },

    compile (cssObject) {
        this.ruleMap = new RuleMap(cssObject);
        this.eventHandlers = this.ruleMap.eventHandlers;
    },
    stringify (type = 'array') {
        type = type.toLowerCase()
        const strArr = []
        const obj = {}
        for (const e of this.ruleMap.entries()) {
            const [sel, val] = e
            if (isArr(val)) val.forEach(v => strArr.push(sel + ' ' + v))
            else if (val instanceof Map) {
                for (const vale of val.entries()) {
                    const [sel1, val1] = vale
                    strArr.push(sel + ' { ' + sel1 + ' { ' + val1.toString() + ' } } ')
                    obj[sel] = sel1 + ' { ' + val1.toString() + ' } '
                }
            } else if (val instanceof Declarations) {
                strArr.push(sel + ' { ' + val.toString() + ' } ')
                obj[sel] = val.toString()
            }
        }
        if (type.startsWith('arr')) return strArr
        else if (type.startsWith('str')) return strArr.join('\n')
        else if (type.startsWith('obj')) return obj
        else return strArr
    },
    render (factoryArgs = []) {
        if (this.sheet == null) {
            document.head.append(this);
        }
        this.clear()
        if (this.factory) this.compile(this.factory.call(this, factoryArgs));
        if (typeof factoryArgs === "string") {
            this.compile(this.router.get(factoryArgs).call(this, factoryArgs));
        }
        if (this.ruleMap) {
            try {
                if (this.ruleMap.sheet == null) this.ruleMap.sheet = this.sheet;
                this.ruleMap.render();
                // const imps = []
                // const stringed = this.stringify()
                // stringed.forEach(str => {
                //     if (str.includes('@import')) {
                //         imps.push(str)
                //         return
                //     }
                //     this.sheet.insertRule(str)
                // })
                // imps.forEach(i => {
                //     this.insert(i, 0)
                // })
                // this.attachMethods()
                return this
            } catch (e) {
                cssConfig.ruleError(new CSSRuleError(e))
            }
        }
        return this
    }
}
*/ ;
parcelHelpers.export(exports, "CSSRuleError", ()=>_cssErrorsMjs.CSSRuleError
);
parcelHelpers.export(exports, "CSSStyleSheetError", ()=>_cssErrorsMjs.CSSStyleSheetError
);
parcelHelpers.export(exports, "CSSUnsupportedError", ()=>_cssErrorsMjs.CSSUnsupportedError
);
var _utilsMjs = require("../../utils/utils.mjs");
var _bsJson = require("./bs.json");
var _bsJsonDefault = parcelHelpers.interopDefault(_bsJson);
var _cssConfigMjs = require("./cssConfig.mjs");
var _cssConfigMjsDefault = parcelHelpers.interopDefault(_cssConfigMjs);
var _cssDataJson = require("./cssData.json");
var _cssDataJsonDefault = parcelHelpers.interopDefault(_cssDataJson);
var _cssErrorsMjs = require("./cssErrors.mjs");
var _cssUnitsMjs = require("./cssUnits.mjs");
var _cssUnitsMjsDefault = parcelHelpers.interopDefault(_cssUnitsMjs);
const isCSSOM = (()=>{
    try {
        return CSS !== undefined;
    } catch (e) {
        return false;
    }
})();
const defaultCSS = {};
const cssData = {
    ..._cssDataJsonDefault.default,
    bootstrap: _bsJsonDefault.default
};
const toDashed = function(str) {
    return new _utilsMjs.Str(str).camelCaseToDashed().toString();
};
const toCamel = function(str) {
    return new _utilsMjs.Str(str).dashedToCamelCase().toString();
};
const formatSelector = function(selectorString, implicit) {
    const selectorFormatters = [
        // camelCase => camel-case
        [
            /(?!^[A-Z])([A-Z])/g,
            (m)=>'-' + m.toLowerCase()
        ],
        // $class => .class
        [
            /(\$(?=[A-Za-z]))/g,
            (m, ...args)=>{
                return '.';
            }
        ],
        // _div => > div
        [
            /(\_)/g,
            (m)=>'>'
        ],
        // space before everything not :
        [
            /(^[^:])/g,
            (m)=>' ' + m
        ],
        // '&' used to connect classes, psuedo-selectors etc...
        [
            /(\s*\&\s*)/g,
            (m)=>''
        ]
    ];
    for (const rs of selectorFormatters)selectorString = selectorString.replace(rs[0], rs[1]);
    if (implicit) return formatSelector(implicit + selectorString);
    return selectorString.replaceAll(/[\s]+/g, ' ').trim();
};
const formatProperty = function(prop) {
    if (prop in _cssConfigMjsDefault.default.properties) prop = _cssConfigMjsDefault.default.properties[prop](prop);
    else if (prop.includes("-") && toDashed(prop) in _cssConfigMjsDefault.default.properties) prop = _cssConfigMjsDefault.default.properties[toDashed(prop)](prop);
    return prop.trim();
};
const formatValue = function(value, property) {
    const valueFormatters = [
        // any value ending with "!" => value+'!important'
        [
            /([!][\s]*$)/g,
            (m)=>'!important'
        ]
    ];
    if (_utilsMjs.isStr(value)) for (const rs of valueFormatters)value = value.toString().replace(rs[0], rs[1]);
    if (property) {
        if (property in _cssConfigMjsDefault.default.unitDefaults) {
            if (!isNaN(value)) value += _cssConfigMjsDefault.default.unitDefaults[property];
        } else if (toCamel(property) in _cssConfigMjsDefault.default.unitDefaults) {
            if (!isNaN(value)) value += _cssConfigMjsDefault.default.unitDefaults[toCamel(property)];
        }
    }
    return value;
};
const supports = function(dec) {
    if (isCSSOM) return CSS.supports(dec);
    dec = stringify(dec);
    const tester = document.createElement('div');
    tester.style = dec;
    if (tester.getAttribute('style').length === 0) return false;
    return true;
};
const supportsProp = function(prop) {
    const tester = document.createElement('div');
    return prop in tester.style;
};
const flatten = function(object, path = '', acc = {}) {
    /* Flatten */ for(const key in object){
        const val = object[key];
        if (_utilsMjs.isObj(val)) {
            if (path.includes('@')) {
                acc[path + ' ' + key] = val;
                continue;
            }
            const accPath = formatSelector(key, path);
            acc[accPath] = val;
            flatten(val, accPath, acc);
        }
        if (_utilsMjs.isArr(val)) {
            const accPath = formatSelector(key, path);
            acc[accPath] = val;
        }
    }
    return acc;
};
const stringify = function(o) {
    if (_utilsMjs.isStr(o)) return o;
    let s = "";
    for(const sel in o)if (_utilsMjs.isObj(o[sel])) s += sel + " { " + stringify(o[sel]) + " } ";
    else s += sel + ":" + o[sel] + ";";
    return s;
};
const parse = function(str, parseObj = {}) {
    if (_utilsMjs.isObj(str)) {
        const ents = Object.entries(str);
        if (_utilsMjs.isStr(ents[0][1])) str = ents.map((ent)=>ent.join('{') + '}'
        );
        else return str;
    }
    try {
        if (_utilsMjs.isArr(str)) {
            if (str[0].includes('{')) str = str.join('');
            else if (str[0].includes(':')) str = str.join(';');
            else {
                let newstr = '';
                for(const s in str){
                    const ch = parseInt(s) % 2 === 1 ? ';' : ':';
                    newstr += str[s] + ch;
                }
                str = newstr;
            }
            str = str.replace(';;', ';');
        }
        if (str.includes('{')) {
            const sel = str.slice(0, str.indexOf('{'));
            const { inner , after  } = new _utilsMjs.Str(str).stackAnalysis('{', '}');
            parseObj[sel.trim().replaceAll('\n', '')] = parse(inner, {});
            parse(after, parseObj);
        } else {
            const decs = str.split(';');
            decs.forEach((dec)=>{
                if (dec.includes(':')) {
                    const [p, v] = dec.split(':');
                    parseObj[formatProperty(p)] = v.trim();
                }
            });
        }
        return parseObj;
    } catch (e) {
        _cssConfigMjsDefault.default.ruleError(e);
    }
};
const generateStyleElement = function(id) {
    if (id == null) id = 'stylesheet-' + document.querySelectorAll('style').length;
    const ss = document.createElement('style');
    ss.setAttribute('id', id);
    return ss;
};
const unit = function(number, unit1) {
    return new _cssUnitsMjsDefault.default(number, unit1);
};
const configure = function(object) {
    if (!object) return _cssConfigMjsDefault.default;
    else for(const key in object)_cssConfigMjsDefault.default[key] = object[key];
};
const inspect = (declarationObject)=>{
    for(const p in declarationObject){
        const dec = p + ':' + declarationObject[p];
        if (!supports(dec)) _cssConfigMjsDefault.default.onUnsupported(new _cssErrorsMjs.CSSUnsupportedError(dec));
    }
};
const formatDeclarations = (declarationObject)=>{
    for(const e in declarationObject){
        const [prop, val] = [
            e,
            declarationObject[e]
        ];
        delete declarationObject[prop];
        if (typeof val === "function") continue;
        if (prop in _cssConfigMjsDefault.default.properties) {
            const out = _cssConfigMjsDefault.default.properties[prop](val);
            for(const o in out)declarationObject[formatProperty(o)] = formatValue(out[o]);
        } else if (typeof val === "string" || typeof val === "number") declarationObject[formatProperty(prop)] = formatValue(val);
    }
    return declarationObject;
};
const compile = (cssObject)=>{
    const styles = flatten(cssObject);
    const rules = {};
    for(const sel in styles){
        if (sel === '@media' || sel === '@keyframes') continue;
        else if (sel.includes('@media') || sel.includes('@keyframes')) {
            const atrules = {};
            for(const sel1 in styles[sel]){
                const selector = isNaN(sel1) ? sel1 : sel1 + '%';
                const styDec = formatDeclarations(styles[sel][sel1]);
                atrules[selector] = styDec;
            }
            rules[sel] = atrules;
        } else {
            if (_utilsMjs.isObj(styles[sel])) {
                const fns = {};
                for(const sel1 in styles[sel])if (_utilsMjs.isFn(styles[sel][sel1])) fns[sel1] = styles[sel][sel1];
                const stydec = formatDeclarations(styles[sel]);
                rules[sel] = stydec;
            } else if (_utilsMjs.isArr(styles[sel])) rules[sel] = styles[sel];
        }
    }
    return rules;
};
class Sheet {
    *[Symbol.iterator]() {
        for (const rule of this.cssRules)yield rule;
    }
    constructor(rules, options = null){
        this.rules = rules;
        if (_utilsMjs.isObj(rules)) this.rules = stringify(compile(rules));
        this.stylesheet = document.createElement('style');
        this.stylesheet.innerHTML = this.rules;
    // this.sheet = this.stylesheet.sheet;
    }
    static get adopted() {
        const sheets = [
            ...document.querySelectorAll('style')
        ].map((s)=>s.sheet
        );
        return sheets;
    }
    static get elements() {
        const elements = [
            ...document.querySelectorAll('style')
        ];
        return elements;
    }
    get cssText() {
        let str = "";
        for (const rule of this)str += rule.cssText;
        return str;
    }
    adopt(checkForDuplicates = false) {
        if (checkForDuplicates) for (const a of Sheet.elements){
            if (a.innerHTML === this.rules) return;
        }
        document.querySelector('head').append(this.stylesheet);
    }
}
const config = _cssConfigMjsDefault.default;

},{"../../utils/utils.mjs":"dPNBH","./bs.json":"rozc0","./cssConfig.mjs":"aEwYV","./cssData.json":"6PMpg","./cssErrors.mjs":"9kqnM","./cssUnits.mjs":"6bxk2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rozc0":[function(require,module,exports) {
module.exports = JSON.parse("{\"css\":{\":root\":{\"--blue\":\"#007bff\",\"--indigo\":\"#6610f2\",\"--purple\":\"#6f42c1\",\"--pink\":\"#e83e8c\",\"--red\":\"#dc3545\",\"--orange\":\"#fd7e14\",\"--yellow\":\"#ffc107\",\"--green\":\"#28a745\",\"--teal\":\"#20c997\",\"--cyan\":\"#17a2b8\",\"--white\":\"#fff\",\"--gray\":\"#6c757d\",\"--gray-dark\":\"#343a40\",\"--primary\":\"#007bff\",\"--secondary\":\"#6c757d\",\"--success\":\"#28a745\",\"--info\":\"#17a2b8\",\"--warning\":\"#ffc107\",\"--danger\":\"#dc3545\",\"--light\":\"#f8f9fa\",\"--dark\":\"#343a40\",\"--breakpoint-xs\":\"0\",\"--breakpoint-sm\":\"576px\",\"--breakpoint-md\":\"768px\",\"--breakpoint-lg\":\"992px\",\"--breakpoint-xl\":\"1200px\",\"--font-family-sans-serif\":\"-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"\",\"--font-family-monospace\":\"SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace\"},\"*,*::before,*::after\":{\"box-sizing\":\"border-box\"},\"html\":{\"font-family\":\"sans-serif\",\"line-height\":\"1.15\",\"-webkit-text-size-adjust\":\"100%\",\"-webkit-tap-highlight-color\":\"rgba(0, 0, 0, 0)\"},\"article, aside, figcaption, figure, footer, header, hgroup, main, nav, section\":{\"display\":\"block\"},\"body\":{\"margin\":\"0\",\"font-family\":\"-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"\",\"font-size\":\"1rem\",\"font-weight\":\"400\",\"line-height\":\"1.5\",\"color\":\"#212529\",\"text-align\":\"left\",\"background-color\":\"#fff\"},\"[tabindex=\\\"-1\\\"]:focus:not(:focus-visible)\":{\"outline\":\"0 !important\"},\"hr\":{\"margin-top\":\"1rem\",\"margin-bottom\":\"1rem\",\"border\":\"0\",\"border-top\":\"1px solid rgba(0, 0, 0, 0.1)\"},\"h1, h2, h3, h4, h5, h6\":{\"margin-top\":\"0\",\"margin-bottom\":\"0.5rem\"},\"p\":{\"margin-top\":\"0\",\"margin-bottom\":\"1rem\"},\"abbr[title],abbr[data-original-title]\":{\"text-decoration\":\"underline dotted\",\"-webkit-text-decoration\":\"underline dotted\",\"cursor\":\"help\",\"border-bottom\":\"0\",\"-webkit-text-decoration-skip-ink\":\"none\",\"text-decoration-skip-ink\":\"none\"},\"address\":{\"margin-bottom\":\"1rem\",\"font-style\":\"normal\",\"line-height\":\"inherit\"},\"ol,ul,dl\":{\"margin-top\":\"0\",\"margin-bottom\":\"1rem\"},\"ol ol,ul ul,ol ul,ul ol\":{\"margin-bottom\":\"0\"},\"dt\":{\"font-weight\":\"700\"},\"dd\":{\"margin-bottom\":\".5rem\",\"margin-left\":\"0\"},\"blockquote\":{\"margin\":\"0 0 1rem\"},\"b,strong\":{\"font-weight\":\"bolder\"},\"small\":{\"font-size\":\"80%\"},\"sub,sup\":{\"position\":\"relative\",\"font-size\":\"75%\",\"line-height\":\"0\",\"vertical-align\":\"baseline\"},\"sub\":{\"bottom\":\"-.25em\"},\"sup\":{\"top\":\"-.5em\"},\"a\":{\"color\":\"#007bff\",\"text-decoration\":\"none\",\"background-color\":\"transparent\"},\"a:hover\":{\"color\":\"#0056b3\",\"text-decoration\":\"underline\"},\"a:not([href]):not([class])\":{\"color\":\"inherit\",\"text-decoration\":\"none\"},\"a:not([href]):not([class]):hover\":{\"color\":\"inherit\",\"text-decoration\":\"none\"},\"pre,code,kbd,samp\":{\"font-family\":\"SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace\",\"font-size\":\"1em\"},\"pre\":{\"display\":\"block\",\"font-size\":\"87.5%\",\"color\":\"#212529\"},\"figure\":{\"margin\":\"0 0 1rem\"},\"img\":{\"vertical-align\":\"middle\",\"border-style\":\"none\"},\"svg\":{\"overflow\":\"hidden\",\"vertical-align\":\"middle\"},\"table\":{\"border-collapse\":\"collapse\"},\"caption\":{\"padding-top\":\"0.75rem\",\"padding-bottom\":\"0.75rem\",\"color\":\"#6c757d\",\"text-align\":\"left\",\"caption-side\":\"bottom\"},\"th\":{\"text-align\":\"inherit\"},\"label\":{\"display\":\"inline-block\",\"margin-bottom\":\"0.5rem\"},\"button\":{\"border-radius\":\"0\"},\"button:focus\":{\"outline\":\"5px auto -webkit-focus-ring-color\"},\"input,button,select,optgroup,textarea\":{\"margin\":\"0\",\"font-family\":\"inherit\",\"font-size\":\"inherit\",\"line-height\":\"inherit\"},\"button,input\":{\"overflow\":\"visible\"},\"button,select\":{\"text-transform\":\"none\"},\"[role=\\\"button\\\"]\":{\"cursor\":\"pointer\"},\"select\":{\"word-wrap\":\"normal\"},\"button,[type=\\\"button\\\"],[type=\\\"reset\\\"],[type=\\\"submit\\\"]\":{\"-webkit-appearance\":\"button\"},\"button:not(:disabled),[type=\\\"button\\\"]:not(:disabled),[type=\\\"reset\\\"]:not(:disabled),[type=\\\"submit\\\"]:not(:disabled)\":{\"cursor\":\"pointer\"},\"button::-moz-focus-inner,[type=\\\"button\\\"]::-moz-focus-inner,[type=\\\"reset\\\"]::-moz-focus-inner,[type=\\\"submit\\\"]::-moz-focus-inner\":{\"padding\":\"0\",\"border-style\":\"none\"},\"input[type=\\\"radio\\\"],input[type=\\\"checkbox\\\"]\":{\"box-sizing\":\"border-box\",\"padding\":\"0\"},\"textarea\":{\"overflow\":\"auto\",\"resize\":\"vertical\"},\"fieldset\":{\"min-width\":\"0\",\"padding\":\"0\",\"margin\":\"0\",\"border\":\"0\"},\"legend\":{\"display\":\"block\",\"width\":\"100%\",\"max-width\":\"100%\",\"padding\":\"0\",\"margin-bottom\":\".5rem\",\"font-size\":\"1.5rem\",\"line-height\":\"inherit\",\"color\":\"inherit\",\"white-space\":\"normal\"},\"progress\":{\"vertical-align\":\"baseline\"},\"[type=\\\"number\\\"]::-webkit-inner-spin-button,[type=\\\"number\\\"]::-webkit-outer-spin-button\":{\"height\":\"auto\"},\"[type=\\\"search\\\"]\":{\"outline-offset\":\"-2px\",\"-webkit-appearance\":\"none\"},\"[type=\\\"search\\\"]::-webkit-search-decoration\":{\"-webkit-appearance\":\"none\"},\"::-webkit-file-upload-button\":{\"font\":\"inherit\",\"-webkit-appearance\":\"button\"},\"output\":{\"display\":\"inline-block\"},\"summary\":{\"display\":\"list-item\",\"cursor\":\"pointer\"},\"template\":{\"display\":\"none\"},\"[hidden]\":{\"display\":\"none !important\"},\"h1, h2, h3, h4, h5, h6,.h1, .h2, .h3, .h4, .h5, .h6\":{\"margin-bottom\":\"0.5rem\",\"font-weight\":\"500\",\"line-height\":\"1.2\"},\"h1, .h1\":{\"font-size\":\"2.5rem\"},\"h2, .h2\":{\"font-size\":\"2rem\"},\"h3, .h3\":{\"font-size\":\"1.75rem\"},\"h4, .h4\":{\"font-size\":\"1.5rem\"},\"h5, .h5\":{\"font-size\":\"1.25rem\"},\"h6, .h6\":{\"font-size\":\"1rem\"},\".lead\":{\"font-size\":\"1.25rem\",\"font-weight\":\"300\"},\".display-1\":{\"font-size\":\"6rem\",\"font-weight\":\"300\",\"line-height\":\"1.2\"},\".display-2\":{\"font-size\":\"5.5rem\",\"font-weight\":\"300\",\"line-height\":\"1.2\"},\".display-3\":{\"font-size\":\"4.5rem\",\"font-weight\":\"300\",\"line-height\":\"1.2\"},\".display-4\":{\"font-size\":\"3.5rem\",\"font-weight\":\"300\",\"line-height\":\"1.2\"},\"small,.small\":{\"font-size\":\"80%\",\"font-weight\":\"400\"},\"mark,.mark\":{\"padding\":\"0.2em\",\"background-color\":\"#fcf8e3\"},\".list-unstyled\":{\"padding-left\":\"0\",\"list-style\":\"none\"},\".list-inline\":{\"padding-left\":\"0\",\"list-style\":\"none\"},\".list-inline-item\":{\"display\":\"inline-block\"},\".list-inline-item:not(:last-child)\":{\"margin-right\":\"0.5rem\"},\".initialism\":{\"font-size\":\"90%\",\"text-transform\":\"uppercase\"},\".blockquote\":{\"margin-bottom\":\"1rem\",\"font-size\":\"1.25rem\"},\".blockquote-footer\":{\"display\":\"block\",\"font-size\":\"80%\",\"color\":\"#6c757d\"},\".img-fluid\":{\"max-width\":\"100%\",\"height\":\"auto\"},\".img-thumbnail\":{\"padding\":\"0.25rem\",\"background-color\":\"#fff\",\"border\":\"1px solid #dee2e6\",\"border-radius\":\"0.25rem\",\"max-width\":\"100%\",\"height\":\"auto\"},\".figure\":{\"display\":\"inline-block\"},\".figure-img\":{\"margin-bottom\":\"0.5rem\",\"line-height\":\"1\"},\".figure-caption\":{\"font-size\":\"90%\",\"color\":\"#6c757d\"},\"code\":{\"font-size\":\"87.5%\",\"color\":\"#e83e8c\",\"word-wrap\":\"break-word\"},\"a > code\":{\"color\":\"inherit\"},\"kbd\":{\"padding\":\"0.2rem 0.4rem\",\"font-size\":\"87.5%\",\"color\":\"#fff\",\"background-color\":\"#212529\",\"border-radius\":\"0.2rem\"},\"kbd kbd\":{\"padding\":\"0\",\"font-size\":\"100%\",\"font-weight\":\"700\"},\"pre code\":{\"font-size\":\"inherit\",\"color\":\"inherit\",\"word-break\":\"normal\"},\".pre-scrollable\":{\"max-height\":\"340px\",\"overflow-y\":\"scroll\"},\".container,.container-fluid,.container-sm,.container-md,.container-lg,.container-xl\":{\"width\":\"100%\",\"padding-right\":\"15px\",\"padding-left\":\"15px\",\"margin-right\":\"auto\",\"margin-left\":\"auto\"},\"@media (min-width: 576px)\":{\".text-sm-left\":{\"text-align\":\"left !important\"},\".text-sm-right\":{\"text-align\":\"right !important\"},\".text-sm-center\":{\"text-align\":\"center !important\"}},\"@media (min-width: 768px)\":{\".text-md-left\":{\"text-align\":\"left !important\"},\".text-md-right\":{\"text-align\":\"right !important\"},\".text-md-center\":{\"text-align\":\"center !important\"}},\"@media (min-width: 992px)\":{\".text-lg-left\":{\"text-align\":\"left !important\"},\".text-lg-right\":{\"text-align\":\"right !important\"},\".text-lg-center\":{\"text-align\":\"center !important\"}},\"@media (min-width: 1200px)\":{\".text-xl-left\":{\"text-align\":\"left !important\"},\".text-xl-right\":{\"text-align\":\"right !important\"},\".text-xl-center\":{\"text-align\":\"center !important\"}},\".row\":{\"display\":\"flex\",\"-ms-flex-wrap\":\"wrap\",\"flex-wrap\":\"wrap\",\"margin-right\":\"-15px\",\"margin-left\":\"-15px\"},\".no-gutters\":{\"margin-right\":\"0\",\"margin-left\":\"0\"},\".no-gutters > .col,.no-gutters > [class*=\\\"col-\\\"]\":{\"padding-right\":\"0\",\"padding-left\":\"0\"},\".col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,.col-xl-auto\":{\"position\":\"relative\",\"width\":\"100%\",\"padding-right\":\"15px\",\"padding-left\":\"15px\"},\".col\":{\"-ms-flex-preferred-size\":\"0\",\"flex-basis\":\"0\",\"-ms-flex-positive\":\"1\",\"flex-grow\":\"1\",\"max-width\":\"100%\"},\".row-cols-1 > *\":{\"-ms-flex\":\"0 0 100%\",\"flex\":\"0 0 100%\",\"max-width\":\"100%\"},\".row-cols-2 > *\":{\"-ms-flex\":\"0 0 50%\",\"flex\":\"0 0 50%\",\"max-width\":\"50%\"},\".row-cols-3 > *\":{\"-ms-flex\":\"0 0 33.333333%\",\"flex\":\"0 0 33.333333%\",\"max-width\":\"33.333333%\"},\".row-cols-4 > *\":{\"-ms-flex\":\"0 0 25%\",\"flex\":\"0 0 25%\",\"max-width\":\"25%\"},\".row-cols-5 > *\":{\"-ms-flex\":\"0 0 20%\",\"flex\":\"0 0 20%\",\"max-width\":\"20%\"},\".row-cols-6 > *\":{\"-ms-flex\":\"0 0 16.666667%\",\"flex\":\"0 0 16.666667%\",\"max-width\":\"16.666667%\"},\".col-auto\":{\"-ms-flex\":\"0 0 auto\",\"flex\":\"0 0 auto\",\"width\":\"auto\",\"max-width\":\"100%\"},\".col-1\":{\"-ms-flex\":\"0 0 8.333333%\",\"flex\":\"0 0 8.333333%\",\"max-width\":\"8.333333%\"},\".col-2\":{\"-ms-flex\":\"0 0 16.666667%\",\"flex\":\"0 0 16.666667%\",\"max-width\":\"16.666667%\"},\".col-3\":{\"-ms-flex\":\"0 0 25%\",\"flex\":\"0 0 25%\",\"max-width\":\"25%\"},\".col-4\":{\"-ms-flex\":\"0 0 33.333333%\",\"flex\":\"0 0 33.333333%\",\"max-width\":\"33.333333%\"},\".col-5\":{\"-ms-flex\":\"0 0 41.666667%\",\"flex\":\"0 0 41.666667%\",\"max-width\":\"41.666667%\"},\".col-6\":{\"-ms-flex\":\"0 0 50%\",\"flex\":\"0 0 50%\",\"max-width\":\"50%\"},\".col-7\":{\"-ms-flex\":\"0 0 58.333333%\",\"flex\":\"0 0 58.333333%\",\"max-width\":\"58.333333%\"},\".col-8\":{\"-ms-flex\":\"0 0 66.666667%\",\"flex\":\"0 0 66.666667%\",\"max-width\":\"66.666667%\"},\".col-9\":{\"-ms-flex\":\"0 0 75%\",\"flex\":\"0 0 75%\",\"max-width\":\"75%\"},\".col-10\":{\"-ms-flex\":\"0 0 83.333333%\",\"flex\":\"0 0 83.333333%\",\"max-width\":\"83.333333%\"},\".col-11\":{\"-ms-flex\":\"0 0 91.666667%\",\"flex\":\"0 0 91.666667%\",\"max-width\":\"91.666667%\"},\".col-12\":{\"-ms-flex\":\"0 0 100%\",\"flex\":\"0 0 100%\",\"max-width\":\"100%\"},\".order-first\":{\"-ms-flex-order\":\"-1\",\"order\":\"-1\"},\".order-last\":{\"-ms-flex-order\":\"13\",\"order\":\"13\"},\".order-0\":{\"-ms-flex-order\":\"0\",\"order\":\"0\"},\".order-1\":{\"-ms-flex-order\":\"1\",\"order\":\"1\"},\".order-2\":{\"-ms-flex-order\":\"2\",\"order\":\"2\"},\".order-3\":{\"-ms-flex-order\":\"3\",\"order\":\"3\"},\".order-4\":{\"-ms-flex-order\":\"4\",\"order\":\"4\"},\".order-5\":{\"-ms-flex-order\":\"5\",\"order\":\"5\"},\".order-6\":{\"-ms-flex-order\":\"6\",\"order\":\"6\"},\".order-7\":{\"-ms-flex-order\":\"7\",\"order\":\"7\"},\".order-8\":{\"-ms-flex-order\":\"8\",\"order\":\"8\"},\".order-9\":{\"-ms-flex-order\":\"9\",\"order\":\"9\"},\".order-10\":{\"-ms-flex-order\":\"10\",\"order\":\"10\"},\".order-11\":{\"-ms-flex-order\":\"11\",\"order\":\"11\"},\".order-12\":{\"-ms-flex-order\":\"12\",\"order\":\"12\"},\".offset-1\":{\"margin-left\":\"8.333333%\"},\".offset-2\":{\"margin-left\":\"16.666667%\"},\".offset-3\":{\"margin-left\":\"25%\"},\".offset-4\":{\"margin-left\":\"33.333333%\"},\".offset-5\":{\"margin-left\":\"41.666667%\"},\".offset-6\":{\"margin-left\":\"50%\"},\".offset-7\":{\"margin-left\":\"58.333333%\"},\".offset-8\":{\"margin-left\":\"66.666667%\"},\".offset-9\":{\"margin-left\":\"75%\"},\".offset-10\":{\"margin-left\":\"83.333333%\"},\".offset-11\":{\"margin-left\":\"91.666667%\"},\".table\":{\"width\":\"100%\",\"margin-bottom\":\"1rem\",\"color\":\"#212529\"},\".table th,.table td\":{\"padding\":\"0.75rem\",\"vertical-align\":\"top\",\"border-top\":\"1px solid #dee2e6\"},\".table thead th\":{\"vertical-align\":\"bottom\",\"border-bottom\":\"2px solid #dee2e6\"},\".table tbody + tbody\":{\"border-top\":\"2px solid #dee2e6\"},\".table-sm th,.table-sm td\":{\"padding\":\"0.3rem\"},\".table-bordered\":{\"border\":\"1px solid #dee2e6\"},\".table-bordered th,.table-bordered td\":{\"border\":\"1px solid #dee2e6\"},\".table-bordered thead th,.table-bordered thead td\":{\"border-bottom-width\":\"2px\"},\".table-borderless th,.table-borderless td,.table-borderless thead th,.table-borderless tbody + tbody\":{\"border\":\"0\"},\".table-striped tbody tr:nth-of-type(odd)\":{\"background-color\":\"rgba(0, 0, 0, 0.05)\"},\".table-hover tbody tr:hover\":{\"color\":\"#212529\",\"background-color\":\"rgba(0, 0, 0, 0.075)\"},\".table-primary,.table-primary > th,.table-primary > td\":{\"background-color\":\"#b8daff\"},\".table-primary th,.table-primary td,.table-primary thead th,.table-primary tbody + tbody\":{\"border-color\":\"#7abaff\"},\".table-hover .table-primary:hover\":{\"background-color\":\"#9fcdff\"},\".table-hover .table-primary:hover > td,.table-hover .table-primary:hover > th\":{\"background-color\":\"#9fcdff\"},\".table-secondary,.table-secondary > th,.table-secondary > td\":{\"background-color\":\"#d6d8db\"},\".table-secondary th,.table-secondary td,.table-secondary thead th,.table-secondary tbody + tbody\":{\"border-color\":\"#b3b7bb\"},\".table-hover .table-secondary:hover\":{\"background-color\":\"#c8cbcf\"},\".table-hover .table-secondary:hover > td,.table-hover .table-secondary:hover > th\":{\"background-color\":\"#c8cbcf\"},\".table-success,.table-success > th,.table-success > td\":{\"background-color\":\"#c3e6cb\"},\".table-success th,.table-success td,.table-success thead th,.table-success tbody + tbody\":{\"border-color\":\"#8fd19e\"},\".table-hover .table-success:hover\":{\"background-color\":\"#b1dfbb\"},\".table-hover .table-success:hover > td,.table-hover .table-success:hover > th\":{\"background-color\":\"#b1dfbb\"},\".table-info,.table-info > th,.table-info > td\":{\"background-color\":\"#bee5eb\"},\".table-info th,.table-info td,.table-info thead th,.table-info tbody + tbody\":{\"border-color\":\"#86cfda\"},\".table-hover .table-info:hover\":{\"background-color\":\"#abdde5\"},\".table-hover .table-info:hover > td,.table-hover .table-info:hover > th\":{\"background-color\":\"#abdde5\"},\".table-warning,.table-warning > th,.table-warning > td\":{\"background-color\":\"#ffeeba\"},\".table-warning th,.table-warning td,.table-warning thead th,.table-warning tbody + tbody\":{\"border-color\":\"#ffdf7e\"},\".table-hover .table-warning:hover\":{\"background-color\":\"#ffe8a1\"},\".table-hover .table-warning:hover > td,.table-hover .table-warning:hover > th\":{\"background-color\":\"#ffe8a1\"},\".table-danger,.table-danger > th,.table-danger > td\":{\"background-color\":\"#f5c6cb\"},\".table-danger th,.table-danger td,.table-danger thead th,.table-danger tbody + tbody\":{\"border-color\":\"#ed969e\"},\".table-hover .table-danger:hover\":{\"background-color\":\"#f1b0b7\"},\".table-hover .table-danger:hover > td,.table-hover .table-danger:hover > th\":{\"background-color\":\"#f1b0b7\"},\".table-light,.table-light > th,.table-light > td\":{\"background-color\":\"#fdfdfe\"},\".table-light th,.table-light td,.table-light thead th,.table-light tbody + tbody\":{\"border-color\":\"#fbfcfc\"},\".table-hover .table-light:hover\":{\"background-color\":\"#ececf6\"},\".table-hover .table-light:hover > td,.table-hover .table-light:hover > th\":{\"background-color\":\"#ececf6\"},\".table-dark,.table-dark > th,.table-dark > td\":{\"background-color\":\"#c6c8ca\"},\".table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody + tbody\":{\"border-color\":\"#95999c\"},\".table-hover .table-dark:hover\":{\"background-color\":\"#b9bbbe\"},\".table-hover .table-dark:hover > td,.table-hover .table-dark:hover > th\":{\"background-color\":\"#b9bbbe\"},\".table-active,.table-active > th,.table-active > td\":{\"background-color\":\"rgba(0, 0, 0, 0.075)\"},\".table-hover .table-active:hover\":{\"background-color\":\"rgba(0, 0, 0, 0.075)\"},\".table-hover .table-active:hover > td,.table-hover .table-active:hover > th\":{\"background-color\":\"rgba(0, 0, 0, 0.075)\"},\".table .thead-dark th\":{\"color\":\"#fff\",\"background-color\":\"#343a40\",\"border-color\":\"#454d55\"},\".table .thead-light th\":{\"color\":\"#495057\",\"background-color\":\"#e9ecef\",\"border-color\":\"#dee2e6\"},\".table-dark\":{\"color\":\"#fff\",\"background-color\":\"#343a40\"},\".table-dark th,.table-dark td,.table-dark thead th\":{\"border-color\":\"#454d55\"},\".table-dark.table-bordered\":{\"border\":\"0\"},\".table-dark.table-striped tbody tr:nth-of-type(odd)\":{\"background-color\":\"rgba(255, 255, 255, 0.05)\"},\".table-dark.table-hover tbody tr:hover\":{\"color\":\"#fff\",\"background-color\":\"rgba(255, 255, 255, 0.075)\"},\"@media (max-width: 575.98px)\":{\".navbar-expand-sm > .container,  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl\":{\"padding-right\":\"0\",\"padding-left\":\"0\"}},\"@media (max-width: 767.98px)\":{\".navbar-expand-md > .container,  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl\":{\"padding-right\":\"0\",\"padding-left\":\"0\"}},\"@media (max-width: 991.98px)\":{\".navbar-expand-lg > .container,  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl\":{\"padding-right\":\"0\",\"padding-left\":\"0\"}},\"@media (max-width: 1199.98px)\":{\".navbar-expand-xl > .container,  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl\":{\"padding-right\":\"0\",\"padding-left\":\"0\"}},\".table-responsive\":{\"display\":\"block\",\"width\":\"100%\",\"overflow-x\":\"auto\",\"-webkit-overflow-scrolling\":\"touch\"},\".table-responsive > .table-bordered\":{\"border\":\"0\"},\".form-control\":{\"display\":\"block\",\"width\":\"100%\",\"height\":\"calc(1.5em + 0.75rem + 2px)\",\"padding\":\"0.375rem 0.75rem\",\"font-size\":\"1rem\",\"font-weight\":\"400\",\"line-height\":\"1.5\",\"color\":\"#495057\",\"background-color\":\"#fff\",\"background-clip\":\"padding-box\",\"border\":\"1px solid #ced4da\",\"border-radius\":\"0.25rem\",\"transition\":\"border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\"},\"@media (prefers-reduced-motion: reduce)\":{\".carousel-indicators li\":{\"transition\":\"none\"}},\".form-control::-ms-expand\":{\"background-color\":\"transparent\",\"border\":\"0\"},\".form-control:-moz-focusring\":{\"color\":\"transparent\",\"text-shadow\":\"0 0 0 #495057\"},\".form-control:focus\":{\"color\":\"#495057\",\"background-color\":\"#fff\",\"border-color\":\"#80bdff\",\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(0, 123, 255, 0.25)\"},\".form-control::-webkit-input-placeholder\":{\"color\":\"#6c757d\",\"opacity\":\"1\"},\".form-control::-moz-placeholder\":{\"color\":\"#6c757d\",\"opacity\":\"1\"},\".form-control:-ms-input-placeholder\":{\"color\":\"#6c757d\",\"opacity\":\"1\"},\".form-control::-ms-input-placeholder\":{\"color\":\"#6c757d\",\"opacity\":\"1\"},\".form-control::placeholder\":{\"color\":\"#6c757d\",\"opacity\":\"1\"},\".form-control:disabled, .form-control[readonly]\":{\"background-color\":\"#e9ecef\",\"opacity\":\"1\"},\"input[type=\\\"date\\\"].form-control,input[type=\\\"time\\\"].form-control,input[type=\\\"datetime-local\\\"].form-control,input[type=\\\"month\\\"].form-control\":{\"-webkit-appearance\":\"none\",\"-moz-appearance\":\"none\",\"appearance\":\"none\"},\"select.form-control:focus::-ms-value\":{\"color\":\"#495057\",\"background-color\":\"#fff\"},\".form-control-file,.form-control-range\":{\"display\":\"block\",\"width\":\"100%\"},\".col-form-label\":{\"padding-top\":\"calc(0.375rem + 1px)\",\"padding-bottom\":\"calc(0.375rem + 1px)\",\"margin-bottom\":\"0\",\"font-size\":\"inherit\",\"line-height\":\"1.5\"},\".col-form-label-lg\":{\"padding-top\":\"calc(0.5rem + 1px)\",\"padding-bottom\":\"calc(0.5rem + 1px)\",\"font-size\":\"1.25rem\",\"line-height\":\"1.5\"},\".col-form-label-sm\":{\"padding-top\":\"calc(0.25rem + 1px)\",\"padding-bottom\":\"calc(0.25rem + 1px)\",\"font-size\":\"0.875rem\",\"line-height\":\"1.5\"},\".form-control-plaintext\":{\"display\":\"block\",\"width\":\"100%\",\"padding\":\"0.375rem 0\",\"margin-bottom\":\"0\",\"font-size\":\"1rem\",\"line-height\":\"1.5\",\"color\":\"#212529\",\"background-color\":\"transparent\",\"border\":\"solid transparent\",\"border-width\":\"1px 0\"},\".form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg\":{\"padding-right\":\"0\",\"padding-left\":\"0\"},\".form-control-sm\":{\"height\":\"calc(1.5em + 0.5rem + 2px)\",\"padding\":\"0.25rem 0.5rem\",\"font-size\":\"0.875rem\",\"line-height\":\"1.5\",\"border-radius\":\"0.2rem\"},\".form-control-lg\":{\"height\":\"calc(1.5em + 1rem + 2px)\",\"padding\":\"0.5rem 1rem\",\"font-size\":\"1.25rem\",\"line-height\":\"1.5\",\"border-radius\":\"0.3rem\"},\"select.form-control[size], select.form-control[multiple]\":{\"height\":\"auto\"},\"textarea.form-control\":{\"height\":\"auto\"},\".form-group\":{\"margin-bottom\":\"1rem\"},\".form-text\":{\"display\":\"block\",\"margin-top\":\"0.25rem\"},\".form-row\":{\"display\":\"flex\",\"-ms-flex-wrap\":\"wrap\",\"flex-wrap\":\"wrap\",\"margin-right\":\"-5px\",\"margin-left\":\"-5px\"},\".form-row > .col,.form-row > [class*=\\\"col-\\\"]\":{\"padding-right\":\"5px\",\"padding-left\":\"5px\"},\".form-check\":{\"position\":\"relative\",\"display\":\"block\",\"padding-left\":\"1.25rem\"},\".form-check-input\":{\"position\":\"absolute\",\"margin-top\":\"0.3rem\",\"margin-left\":\"-1.25rem\"},\".form-check-input[disabled] ~ .form-check-label,.form-check-input:disabled ~ .form-check-label\":{\"color\":\"#6c757d\"},\".form-check-label\":{\"margin-bottom\":\"0\"},\".form-check-inline\":{\"display\":\"inline-flex\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\",\"padding-left\":\"0\",\"margin-right\":\"0.75rem\"},\".form-check-inline .form-check-input\":{\"position\":\"static\",\"margin-top\":\"0\",\"margin-right\":\"0.3125rem\",\"margin-left\":\"0\"},\".valid-feedback\":{\"display\":\"none\",\"width\":\"100%\",\"margin-top\":\"0.25rem\",\"font-size\":\"80%\",\"color\":\"#28a745\"},\".valid-tooltip\":{\"position\":\"absolute\",\"top\":\"100%\",\"left\":\"0\",\"z-index\":\"5\",\"display\":\"none\",\"max-width\":\"100%\",\"padding\":\"0.25rem 0.5rem\",\"margin-top\":\".1rem\",\"font-size\":\"0.875rem\",\"line-height\":\"1.5\",\"color\":\"#fff\",\"background-color\":\"rgba(40, 167, 69, 0.9)\",\"border-radius\":\"0.25rem\"},\".was-validated :valid ~ .valid-feedback,.was-validated :valid ~ .valid-tooltip,.is-valid ~ .valid-feedback,.is-valid ~ .valid-tooltip\":{\"display\":\"block\"},\".was-validated .form-control:valid, .form-control.is-valid\":{\"border-color\":\"#28a745\",\"padding-right\":\"calc(1.5em + 0.75rem)\",\"background-image\":\"url(\\\"data\",\"background-repeat\":\"no-repeat\",\"background-position\":\"right calc(0.375em + 0.1875rem) center\",\"background-size\":\"calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)\"},\".was-validated .form-control:valid:focus, .form-control.is-valid:focus\":{\"border-color\":\"#28a745\",\"box-shadow\":\"0 0 0 0.2rem rgba(40, 167, 69, 0.25)\"},\".was-validated textarea.form-control:valid, textarea.form-control.is-valid\":{\"padding-right\":\"calc(1.5em + 0.75rem)\",\"background-position\":\"top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)\"},\".was-validated .custom-select:valid, .custom-select.is-valid\":{\"border-color\":\"#28a745\",\"padding-right\":\"calc(0.75em + 2.3125rem)\",\"background\":\"url(\\\"data\"},\".was-validated .custom-select:valid:focus, .custom-select.is-valid:focus\":{\"border-color\":\"#28a745\",\"box-shadow\":\"0 0 0 0.2rem rgba(40, 167, 69, 0.25)\"},\".was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label\":{\"color\":\"#28a745\"},\".was-validated .form-check-input:valid ~ .valid-feedback,.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,.form-check-input.is-valid ~ .valid-tooltip\":{\"display\":\"block\"},\".was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label\":{\"color\":\"#28a745\"},\".was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before\":{\"border-color\":\"#28a745\"},\".was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before\":{\"border-color\":\"#34ce57\",\"background-color\":\"#34ce57\"},\".was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before\":{\"box-shadow\":\"0 0 0 0.2rem rgba(40, 167, 69, 0.25)\"},\".was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before\":{\"border-color\":\"#28a745\"},\".was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label\":{\"border-color\":\"#28a745\"},\".was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label\":{\"border-color\":\"#28a745\",\"box-shadow\":\"0 0 0 0.2rem rgba(40, 167, 69, 0.25)\"},\".invalid-feedback\":{\"display\":\"none\",\"width\":\"100%\",\"margin-top\":\"0.25rem\",\"font-size\":\"80%\",\"color\":\"#dc3545\"},\".invalid-tooltip\":{\"position\":\"absolute\",\"top\":\"100%\",\"left\":\"0\",\"z-index\":\"5\",\"display\":\"none\",\"max-width\":\"100%\",\"padding\":\"0.25rem 0.5rem\",\"margin-top\":\".1rem\",\"font-size\":\"0.875rem\",\"line-height\":\"1.5\",\"color\":\"#fff\",\"background-color\":\"rgba(220, 53, 69, 0.9)\",\"border-radius\":\"0.25rem\"},\".was-validated :invalid ~ .invalid-feedback,.was-validated :invalid ~ .invalid-tooltip,.is-invalid ~ .invalid-feedback,.is-invalid ~ .invalid-tooltip\":{\"display\":\"block\"},\".was-validated .form-control:invalid, .form-control.is-invalid\":{\"border-color\":\"#dc3545\",\"padding-right\":\"calc(1.5em + 0.75rem)\",\"background-image\":\"url(\\\"data\",\"background-repeat\":\"no-repeat\",\"background-position\":\"right calc(0.375em + 0.1875rem) center\",\"background-size\":\"calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)\"},\".was-validated .form-control:invalid:focus, .form-control.is-invalid:focus\":{\"border-color\":\"#dc3545\",\"box-shadow\":\"0 0 0 0.2rem rgba(220, 53, 69, 0.25)\"},\".was-validated textarea.form-control:invalid, textarea.form-control.is-invalid\":{\"padding-right\":\"calc(1.5em + 0.75rem)\",\"background-position\":\"top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)\"},\".was-validated .custom-select:invalid, .custom-select.is-invalid\":{\"border-color\":\"#dc3545\",\"padding-right\":\"calc(0.75em + 2.3125rem)\",\"background\":\"url(\\\"data\"},\".was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus\":{\"border-color\":\"#dc3545\",\"box-shadow\":\"0 0 0 0.2rem rgba(220, 53, 69, 0.25)\"},\".was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label\":{\"color\":\"#dc3545\"},\".was-validated .form-check-input:invalid ~ .invalid-feedback,.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,.form-check-input.is-invalid ~ .invalid-tooltip\":{\"display\":\"block\"},\".was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label\":{\"color\":\"#dc3545\"},\".was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before\":{\"border-color\":\"#dc3545\"},\".was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before\":{\"border-color\":\"#e4606d\",\"background-color\":\"#e4606d\"},\".was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before\":{\"box-shadow\":\"0 0 0 0.2rem rgba(220, 53, 69, 0.25)\"},\".was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before\":{\"border-color\":\"#dc3545\"},\".was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label\":{\"border-color\":\"#dc3545\"},\".was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label\":{\"border-color\":\"#dc3545\",\"box-shadow\":\"0 0 0 0.2rem rgba(220, 53, 69, 0.25)\"},\".form-inline\":{\"display\":\"flex\",\"-ms-flex-flow\":\"row wrap\",\"flex-flow\":\"row wrap\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\"},\".form-inline .form-check\":{\"width\":\"100%\"},\".btn\":{\"display\":\"inline-block\",\"font-weight\":\"400\",\"color\":\"#212529\",\"text-align\":\"center\",\"vertical-align\":\"middle\",\"-webkit-user-select\":\"none\",\"-moz-user-select\":\"none\",\"-ms-user-select\":\"none\",\"user-select\":\"none\",\"background-color\":\"transparent\",\"border\":\"1px solid transparent\",\"padding\":\"0.375rem 0.75rem\",\"font-size\":\"1rem\",\"line-height\":\"1.5\",\"border-radius\":\"0.25rem\",\"transition\":\"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\"},\".btn:hover\":{\"color\":\"#212529\",\"text-decoration\":\"none\"},\".btn:focus, .btn.focus\":{\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(0, 123, 255, 0.25)\"},\".btn.disabled, .btn:disabled\":{\"opacity\":\"0.65\"},\".btn:not(:disabled):not(.disabled)\":{\"cursor\":\"pointer\"},\"a.btn.disabled,fieldset:disabled a.btn\":{\"pointer-events\":\"none\"},\".btn-primary\":{\"color\":\"#fff\",\"background-color\":\"#007bff\",\"border-color\":\"#007bff\"},\".btn-primary:hover\":{\"color\":\"#fff\",\"background-color\":\"#0069d9\",\"border-color\":\"#0062cc\"},\".btn-primary:focus, .btn-primary.focus\":{\"color\":\"#fff\",\"background-color\":\"#0069d9\",\"border-color\":\"#0062cc\",\"box-shadow\":\"0 0 0 0.2rem rgba(38, 143, 255, 0.5)\"},\".btn-primary.disabled, .btn-primary:disabled\":{\"color\":\"#fff\",\"background-color\":\"#007bff\",\"border-color\":\"#007bff\"},\".btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,.show > .btn-primary.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#0062cc\",\"border-color\":\"#005cbf\"},\".btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,.show > .btn-primary.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(38, 143, 255, 0.5)\"},\".btn-secondary\":{\"color\":\"#fff\",\"background-color\":\"#6c757d\",\"border-color\":\"#6c757d\"},\".btn-secondary:hover\":{\"color\":\"#fff\",\"background-color\":\"#5a6268\",\"border-color\":\"#545b62\"},\".btn-secondary:focus, .btn-secondary.focus\":{\"color\":\"#fff\",\"background-color\":\"#5a6268\",\"border-color\":\"#545b62\",\"box-shadow\":\"0 0 0 0.2rem rgba(130, 138, 145, 0.5)\"},\".btn-secondary.disabled, .btn-secondary:disabled\":{\"color\":\"#fff\",\"background-color\":\"#6c757d\",\"border-color\":\"#6c757d\"},\".btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,.show > .btn-secondary.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#545b62\",\"border-color\":\"#4e555b\"},\".btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,.show > .btn-secondary.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(130, 138, 145, 0.5)\"},\".btn-success\":{\"color\":\"#fff\",\"background-color\":\"#28a745\",\"border-color\":\"#28a745\"},\".btn-success:hover\":{\"color\":\"#fff\",\"background-color\":\"#218838\",\"border-color\":\"#1e7e34\"},\".btn-success:focus, .btn-success.focus\":{\"color\":\"#fff\",\"background-color\":\"#218838\",\"border-color\":\"#1e7e34\",\"box-shadow\":\"0 0 0 0.2rem rgba(72, 180, 97, 0.5)\"},\".btn-success.disabled, .btn-success:disabled\":{\"color\":\"#fff\",\"background-color\":\"#28a745\",\"border-color\":\"#28a745\"},\".btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,.show > .btn-success.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#1e7e34\",\"border-color\":\"#1c7430\"},\".btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,.show > .btn-success.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(72, 180, 97, 0.5)\"},\".btn-info\":{\"color\":\"#fff\",\"background-color\":\"#17a2b8\",\"border-color\":\"#17a2b8\"},\".btn-info:hover\":{\"color\":\"#fff\",\"background-color\":\"#138496\",\"border-color\":\"#117a8b\"},\".btn-info:focus, .btn-info.focus\":{\"color\":\"#fff\",\"background-color\":\"#138496\",\"border-color\":\"#117a8b\",\"box-shadow\":\"0 0 0 0.2rem rgba(58, 176, 195, 0.5)\"},\".btn-info.disabled, .btn-info:disabled\":{\"color\":\"#fff\",\"background-color\":\"#17a2b8\",\"border-color\":\"#17a2b8\"},\".btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,.show > .btn-info.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#117a8b\",\"border-color\":\"#10707f\"},\".btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,.show > .btn-info.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(58, 176, 195, 0.5)\"},\".btn-warning\":{\"color\":\"#212529\",\"background-color\":\"#ffc107\",\"border-color\":\"#ffc107\"},\".btn-warning:hover\":{\"color\":\"#212529\",\"background-color\":\"#e0a800\",\"border-color\":\"#d39e00\"},\".btn-warning:focus, .btn-warning.focus\":{\"color\":\"#212529\",\"background-color\":\"#e0a800\",\"border-color\":\"#d39e00\",\"box-shadow\":\"0 0 0 0.2rem rgba(222, 170, 12, 0.5)\"},\".btn-warning.disabled, .btn-warning:disabled\":{\"color\":\"#212529\",\"background-color\":\"#ffc107\",\"border-color\":\"#ffc107\"},\".btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,.show > .btn-warning.dropdown-toggle\":{\"color\":\"#212529\",\"background-color\":\"#d39e00\",\"border-color\":\"#c69500\"},\".btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,.show > .btn-warning.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(222, 170, 12, 0.5)\"},\".btn-danger\":{\"color\":\"#fff\",\"background-color\":\"#dc3545\",\"border-color\":\"#dc3545\"},\".btn-danger:hover\":{\"color\":\"#fff\",\"background-color\":\"#c82333\",\"border-color\":\"#bd2130\"},\".btn-danger:focus, .btn-danger.focus\":{\"color\":\"#fff\",\"background-color\":\"#c82333\",\"border-color\":\"#bd2130\",\"box-shadow\":\"0 0 0 0.2rem rgba(225, 83, 97, 0.5)\"},\".btn-danger.disabled, .btn-danger:disabled\":{\"color\":\"#fff\",\"background-color\":\"#dc3545\",\"border-color\":\"#dc3545\"},\".btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,.show > .btn-danger.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#bd2130\",\"border-color\":\"#b21f2d\"},\".btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,.show > .btn-danger.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(225, 83, 97, 0.5)\"},\".btn-light\":{\"color\":\"#212529\",\"background-color\":\"#f8f9fa\",\"border-color\":\"#f8f9fa\"},\".btn-light:hover\":{\"color\":\"#212529\",\"background-color\":\"#e2e6ea\",\"border-color\":\"#dae0e5\"},\".btn-light:focus, .btn-light.focus\":{\"color\":\"#212529\",\"background-color\":\"#e2e6ea\",\"border-color\":\"#dae0e5\",\"box-shadow\":\"0 0 0 0.2rem rgba(216, 217, 219, 0.5)\"},\".btn-light.disabled, .btn-light:disabled\":{\"color\":\"#212529\",\"background-color\":\"#f8f9fa\",\"border-color\":\"#f8f9fa\"},\".btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,.show > .btn-light.dropdown-toggle\":{\"color\":\"#212529\",\"background-color\":\"#dae0e5\",\"border-color\":\"#d3d9df\"},\".btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,.show > .btn-light.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(216, 217, 219, 0.5)\"},\".btn-dark\":{\"color\":\"#fff\",\"background-color\":\"#343a40\",\"border-color\":\"#343a40\"},\".btn-dark:hover\":{\"color\":\"#fff\",\"background-color\":\"#23272b\",\"border-color\":\"#1d2124\"},\".btn-dark:focus, .btn-dark.focus\":{\"color\":\"#fff\",\"background-color\":\"#23272b\",\"border-color\":\"#1d2124\",\"box-shadow\":\"0 0 0 0.2rem rgba(82, 88, 93, 0.5)\"},\".btn-dark.disabled, .btn-dark:disabled\":{\"color\":\"#fff\",\"background-color\":\"#343a40\",\"border-color\":\"#343a40\"},\".btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,.show > .btn-dark.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#1d2124\",\"border-color\":\"#171a1d\"},\".btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,.show > .btn-dark.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(82, 88, 93, 0.5)\"},\".btn-outline-primary\":{\"color\":\"#007bff\",\"border-color\":\"#007bff\"},\".btn-outline-primary:hover\":{\"color\":\"#fff\",\"background-color\":\"#007bff\",\"border-color\":\"#007bff\"},\".btn-outline-primary:focus, .btn-outline-primary.focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(0, 123, 255, 0.5)\"},\".btn-outline-primary.disabled, .btn-outline-primary:disabled\":{\"color\":\"#007bff\",\"background-color\":\"transparent\"},\".btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,.show > .btn-outline-primary.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#007bff\",\"border-color\":\"#007bff\"},\".btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show > .btn-outline-primary.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(0, 123, 255, 0.5)\"},\".btn-outline-secondary\":{\"color\":\"#6c757d\",\"border-color\":\"#6c757d\"},\".btn-outline-secondary:hover\":{\"color\":\"#fff\",\"background-color\":\"#6c757d\",\"border-color\":\"#6c757d\"},\".btn-outline-secondary:focus, .btn-outline-secondary.focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(108, 117, 125, 0.5)\"},\".btn-outline-secondary.disabled, .btn-outline-secondary:disabled\":{\"color\":\"#6c757d\",\"background-color\":\"transparent\"},\".btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,.show > .btn-outline-secondary.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#6c757d\",\"border-color\":\"#6c757d\"},\".btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show > .btn-outline-secondary.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(108, 117, 125, 0.5)\"},\".btn-outline-success\":{\"color\":\"#28a745\",\"border-color\":\"#28a745\"},\".btn-outline-success:hover\":{\"color\":\"#fff\",\"background-color\":\"#28a745\",\"border-color\":\"#28a745\"},\".btn-outline-success:focus, .btn-outline-success.focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(40, 167, 69, 0.5)\"},\".btn-outline-success.disabled, .btn-outline-success:disabled\":{\"color\":\"#28a745\",\"background-color\":\"transparent\"},\".btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,.show > .btn-outline-success.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#28a745\",\"border-color\":\"#28a745\"},\".btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,.show > .btn-outline-success.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(40, 167, 69, 0.5)\"},\".btn-outline-info\":{\"color\":\"#17a2b8\",\"border-color\":\"#17a2b8\"},\".btn-outline-info:hover\":{\"color\":\"#fff\",\"background-color\":\"#17a2b8\",\"border-color\":\"#17a2b8\"},\".btn-outline-info:focus, .btn-outline-info.focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(23, 162, 184, 0.5)\"},\".btn-outline-info.disabled, .btn-outline-info:disabled\":{\"color\":\"#17a2b8\",\"background-color\":\"transparent\"},\".btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,.show > .btn-outline-info.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#17a2b8\",\"border-color\":\"#17a2b8\"},\".btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,.show > .btn-outline-info.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(23, 162, 184, 0.5)\"},\".btn-outline-warning\":{\"color\":\"#ffc107\",\"border-color\":\"#ffc107\"},\".btn-outline-warning:hover\":{\"color\":\"#212529\",\"background-color\":\"#ffc107\",\"border-color\":\"#ffc107\"},\".btn-outline-warning:focus, .btn-outline-warning.focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(255, 193, 7, 0.5)\"},\".btn-outline-warning.disabled, .btn-outline-warning:disabled\":{\"color\":\"#ffc107\",\"background-color\":\"transparent\"},\".btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,.show > .btn-outline-warning.dropdown-toggle\":{\"color\":\"#212529\",\"background-color\":\"#ffc107\",\"border-color\":\"#ffc107\"},\".btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show > .btn-outline-warning.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(255, 193, 7, 0.5)\"},\".btn-outline-danger\":{\"color\":\"#dc3545\",\"border-color\":\"#dc3545\"},\".btn-outline-danger:hover\":{\"color\":\"#fff\",\"background-color\":\"#dc3545\",\"border-color\":\"#dc3545\"},\".btn-outline-danger:focus, .btn-outline-danger.focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(220, 53, 69, 0.5)\"},\".btn-outline-danger.disabled, .btn-outline-danger:disabled\":{\"color\":\"#dc3545\",\"background-color\":\"transparent\"},\".btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,.show > .btn-outline-danger.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#dc3545\",\"border-color\":\"#dc3545\"},\".btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show > .btn-outline-danger.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(220, 53, 69, 0.5)\"},\".btn-outline-light\":{\"color\":\"#f8f9fa\",\"border-color\":\"#f8f9fa\"},\".btn-outline-light:hover\":{\"color\":\"#212529\",\"background-color\":\"#f8f9fa\",\"border-color\":\"#f8f9fa\"},\".btn-outline-light:focus, .btn-outline-light.focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(248, 249, 250, 0.5)\"},\".btn-outline-light.disabled, .btn-outline-light:disabled\":{\"color\":\"#f8f9fa\",\"background-color\":\"transparent\"},\".btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,.show > .btn-outline-light.dropdown-toggle\":{\"color\":\"#212529\",\"background-color\":\"#f8f9fa\",\"border-color\":\"#f8f9fa\"},\".btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,.show > .btn-outline-light.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(248, 249, 250, 0.5)\"},\".btn-outline-dark\":{\"color\":\"#343a40\",\"border-color\":\"#343a40\"},\".btn-outline-dark:hover\":{\"color\":\"#fff\",\"background-color\":\"#343a40\",\"border-color\":\"#343a40\"},\".btn-outline-dark:focus, .btn-outline-dark.focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(52, 58, 64, 0.5)\"},\".btn-outline-dark.disabled, .btn-outline-dark:disabled\":{\"color\":\"#343a40\",\"background-color\":\"transparent\"},\".btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,.show > .btn-outline-dark.dropdown-toggle\":{\"color\":\"#fff\",\"background-color\":\"#343a40\",\"border-color\":\"#343a40\"},\".btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show > .btn-outline-dark.dropdown-toggle:focus\":{\"box-shadow\":\"0 0 0 0.2rem rgba(52, 58, 64, 0.5)\"},\".btn-link\":{\"font-weight\":\"400\",\"color\":\"#007bff\",\"text-decoration\":\"none\"},\".btn-link:hover\":{\"color\":\"#0056b3\",\"text-decoration\":\"underline\"},\".btn-link:focus, .btn-link.focus\":{\"text-decoration\":\"underline\"},\".btn-link:disabled, .btn-link.disabled\":{\"color\":\"#6c757d\",\"pointer-events\":\"none\"},\".btn-lg, .btn-group-lg > .btn\":{\"padding\":\"0.5rem 1rem\",\"font-size\":\"1.25rem\",\"line-height\":\"1.5\",\"border-radius\":\"0.3rem\"},\".btn-sm, .btn-group-sm > .btn\":{\"padding\":\"0.25rem 0.5rem\",\"font-size\":\"0.875rem\",\"line-height\":\"1.5\",\"border-radius\":\"0.2rem\"},\".btn-block\":{\"display\":\"block\",\"width\":\"100%\"},\".btn-block + .btn-block\":{\"margin-top\":\"0.5rem\"},\"input[type=\\\"submit\\\"].btn-block,input[type=\\\"reset\\\"].btn-block,input[type=\\\"button\\\"].btn-block\":{\"width\":\"100%\"},\".fade\":{\"transition\":\"opacity 0.15s linear\"},\".fade:not(.show)\":{\"opacity\":\"0\"},\".collapse:not(.show)\":{\"display\":\"none\"},\".collapsing\":{\"position\":\"relative\",\"height\":\"0\",\"overflow\":\"hidden\",\"transition\":\"height 0.35s ease\"},\".dropup,.dropright,.dropdown,.dropleft\":{\"position\":\"relative\"},\".dropdown-toggle\":{\"white-space\":\"nowrap\"},\".dropdown-toggle::after\":{\"display\":\"inline-block\",\"margin-left\":\"0.255em\",\"vertical-align\":\"0.255em\",\"content\":\"\\\"\\\"\",\"border-top\":\"0.3em solid\",\"border-right\":\"0.3em solid transparent\",\"border-bottom\":\"0\",\"border-left\":\"0.3em solid transparent\"},\".dropdown-toggle:empty::after\":{\"margin-left\":\"0\"},\".dropdown-menu\":{\"position\":\"absolute\",\"top\":\"100%\",\"left\":\"0\",\"z-index\":\"1000\",\"display\":\"none\",\"float\":\"left\",\"min-width\":\"10rem\",\"padding\":\"0.5rem 0\",\"margin\":\"0.125rem 0 0\",\"font-size\":\"1rem\",\"color\":\"#212529\",\"text-align\":\"left\",\"list-style\":\"none\",\"background-color\":\"#fff\",\"background-clip\":\"padding-box\",\"border\":\"1px solid rgba(0, 0, 0, 0.15)\",\"border-radius\":\"0.25rem\"},\".dropdown-menu-left\":{\"right\":\"auto\",\"left\":\"0\"},\".dropdown-menu-right\":{\"right\":\"0\",\"left\":\"auto\"},\".dropup .dropdown-menu\":{\"top\":\"auto\",\"bottom\":\"100%\",\"margin-top\":\"0\",\"margin-bottom\":\"0.125rem\"},\".dropup .dropdown-toggle::after\":{\"display\":\"inline-block\",\"margin-left\":\"0.255em\",\"vertical-align\":\"0.255em\",\"content\":\"\\\"\\\"\",\"border-top\":\"0\",\"border-right\":\"0.3em solid transparent\",\"border-bottom\":\"0.3em solid\",\"border-left\":\"0.3em solid transparent\"},\".dropup .dropdown-toggle:empty::after\":{\"margin-left\":\"0\"},\".dropright .dropdown-menu\":{\"top\":\"0\",\"right\":\"auto\",\"left\":\"100%\",\"margin-top\":\"0\",\"margin-left\":\"0.125rem\"},\".dropright .dropdown-toggle::after\":{\"vertical-align\":\"0\"},\".dropright .dropdown-toggle:empty::after\":{\"margin-left\":\"0\"},\".dropleft .dropdown-menu\":{\"top\":\"0\",\"right\":\"100%\",\"left\":\"auto\",\"margin-top\":\"0\",\"margin-right\":\"0.125rem\"},\".dropleft .dropdown-toggle::after\":{\"display\":\"none\"},\".dropleft .dropdown-toggle::before\":{\"vertical-align\":\"0\"},\".dropleft .dropdown-toggle:empty::after\":{\"margin-left\":\"0\"},\".dropdown-menu[x-placement^=\\\"top\\\"], .dropdown-menu[x-placement^=\\\"right\\\"], .dropdown-menu[x-placement^=\\\"bottom\\\"], .dropdown-menu[x-placement^=\\\"left\\\"]\":{\"right\":\"auto\",\"bottom\":\"auto\"},\".dropdown-divider\":{\"height\":\"0\",\"margin\":\"0.5rem 0\",\"overflow\":\"hidden\",\"border-top\":\"1px solid #e9ecef\"},\".dropdown-item\":{\"display\":\"block\",\"width\":\"100%\",\"padding\":\"0.25rem 1.5rem\",\"clear\":\"both\",\"font-weight\":\"400\",\"color\":\"#212529\",\"text-align\":\"inherit\",\"white-space\":\"nowrap\",\"background-color\":\"transparent\",\"border\":\"0\"},\".dropdown-item:hover, .dropdown-item:focus\":{\"color\":\"#16181b\",\"text-decoration\":\"none\",\"background-color\":\"#f8f9fa\"},\".dropdown-item.active, .dropdown-item:active\":{\"color\":\"#fff\",\"text-decoration\":\"none\",\"background-color\":\"#007bff\"},\".dropdown-item.disabled, .dropdown-item:disabled\":{\"color\":\"#6c757d\",\"pointer-events\":\"none\",\"background-color\":\"transparent\"},\".dropdown-menu.show\":{\"display\":\"block\"},\".dropdown-header\":{\"display\":\"block\",\"padding\":\"0.5rem 1.5rem\",\"margin-bottom\":\"0\",\"font-size\":\"0.875rem\",\"color\":\"#6c757d\",\"white-space\":\"nowrap\"},\".dropdown-item-text\":{\"display\":\"block\",\"padding\":\"0.25rem 1.5rem\",\"color\":\"#212529\"},\".btn-group,.btn-group-vertical\":{\"position\":\"relative\",\"display\":\"inline-flex\",\"vertical-align\":\"middle\"},\".btn-group > .btn,.btn-group-vertical > .btn\":{\"position\":\"relative\",\"-ms-flex\":\"1 1 auto\",\"flex\":\"1 1 auto\"},\".btn-group > .btn:hover,.btn-group-vertical > .btn:hover\":{\"z-index\":\"1\"},\".btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,.btn-group-vertical > .btn:focus,.btn-group-vertical > .btn:active,.btn-group-vertical > .btn.active\":{\"z-index\":\"1\"},\".btn-toolbar\":{\"display\":\"flex\",\"-ms-flex-wrap\":\"wrap\",\"flex-wrap\":\"wrap\",\"-ms-flex-pack\":\"start\",\"justify-content\":\"flex-start\"},\".btn-toolbar .input-group\":{\"width\":\"auto\"},\".btn-group > .btn:not(:first-child),.btn-group > .btn-group:not(:first-child)\":{\"margin-left\":\"-1px\"},\".btn-group > .btn:not(:last-child):not(.dropdown-toggle),.btn-group > .btn-group:not(:last-child) > .btn\":{\"border-top-right-radius\":\"0\",\"border-bottom-right-radius\":\"0\"},\".btn-group > .btn:not(:first-child),.btn-group > .btn-group:not(:first-child) > .btn\":{\"border-top-left-radius\":\"0\",\"border-bottom-left-radius\":\"0\"},\".dropdown-toggle-split\":{\"padding-right\":\"0.5625rem\",\"padding-left\":\"0.5625rem\"},\".dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after\":{\"margin-left\":\"0\"},\".dropleft .dropdown-toggle-split::before\":{\"margin-right\":\"0\"},\".btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split\":{\"padding-right\":\"0.375rem\",\"padding-left\":\"0.375rem\"},\".btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split\":{\"padding-right\":\"0.75rem\",\"padding-left\":\"0.75rem\"},\".btn-group-vertical\":{\"-ms-flex-direction\":\"column\",\"flex-direction\":\"column\",\"-ms-flex-align\":\"start\",\"align-items\":\"flex-start\",\"-ms-flex-pack\":\"center\",\"justify-content\":\"center\"},\".btn-group-vertical > .btn,.btn-group-vertical > .btn-group\":{\"width\":\"100%\"},\".btn-group-vertical > .btn:not(:first-child),.btn-group-vertical > .btn-group:not(:first-child)\":{\"margin-top\":\"-1px\"},\".btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical > .btn-group:not(:last-child) > .btn\":{\"border-bottom-right-radius\":\"0\",\"border-bottom-left-radius\":\"0\"},\".btn-group-vertical > .btn:not(:first-child),.btn-group-vertical > .btn-group:not(:first-child) > .btn\":{\"border-top-left-radius\":\"0\",\"border-top-right-radius\":\"0\"},\".btn-group-toggle > .btn,.btn-group-toggle > .btn-group > .btn\":{\"margin-bottom\":\"0\"},\".btn-group-toggle > .btn input[type=\\\"radio\\\"],.btn-group-toggle > .btn input[type=\\\"checkbox\\\"],.btn-group-toggle > .btn-group > .btn input[type=\\\"radio\\\"],.btn-group-toggle > .btn-group > .btn input[type=\\\"checkbox\\\"]\":{\"position\":\"absolute\",\"clip\":\"rect(0, 0, 0, 0)\",\"pointer-events\":\"none\"},\".input-group\":{\"position\":\"relative\",\"display\":\"flex\",\"-ms-flex-wrap\":\"wrap\",\"flex-wrap\":\"wrap\",\"-ms-flex-align\":\"stretch\",\"align-items\":\"stretch\",\"width\":\"100%\"},\".input-group > .form-control,.input-group > .form-control-plaintext,.input-group > .custom-select,.input-group > .custom-file\":{\"position\":\"relative\",\"-ms-flex\":\"1 1 auto\",\"flex\":\"1 1 auto\",\"width\":\"1%\",\"min-width\":\"0\",\"margin-bottom\":\"0\"},\".input-group > .form-control + .form-control,.input-group > .form-control + .custom-select,.input-group > .form-control + .custom-file,.input-group > .form-control-plaintext + .form-control,.input-group > .form-control-plaintext + .custom-select,.input-group > .form-control-plaintext + .custom-file,.input-group > .custom-select + .form-control,.input-group > .custom-select + .custom-select,.input-group > .custom-select + .custom-file,.input-group > .custom-file + .form-control,.input-group > .custom-file + .custom-select,.input-group > .custom-file + .custom-file\":{\"margin-left\":\"-1px\"},\".input-group > .form-control:focus,.input-group > .custom-select:focus,.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label\":{\"z-index\":\"3\"},\".input-group > .custom-file .custom-file-input:focus\":{\"z-index\":\"4\"},\".input-group > .form-control:not(:last-child),.input-group > .custom-select:not(:last-child)\":{\"border-top-right-radius\":\"0\",\"border-bottom-right-radius\":\"0\"},\".input-group > .form-control:not(:first-child),.input-group > .custom-select:not(:first-child)\":{\"border-top-left-radius\":\"0\",\"border-bottom-left-radius\":\"0\"},\".input-group > .custom-file\":{\"display\":\"flex\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\"},\".input-group > .custom-file:not(:last-child) .custom-file-label,.input-group > .custom-file:not(:last-child) .custom-file-label::after\":{\"border-top-right-radius\":\"0\",\"border-bottom-right-radius\":\"0\"},\".input-group > .custom-file:not(:first-child) .custom-file-label\":{\"border-top-left-radius\":\"0\",\"border-bottom-left-radius\":\"0\"},\".input-group-prepend,.input-group-append\":{\"display\":\"flex\"},\".input-group-prepend .btn,.input-group-append .btn\":{\"position\":\"relative\",\"z-index\":\"2\"},\".input-group-prepend .btn:focus,.input-group-append .btn:focus\":{\"z-index\":\"3\"},\".input-group-prepend .btn + .btn,.input-group-prepend .btn + .input-group-text,.input-group-prepend .input-group-text + .input-group-text,.input-group-prepend .input-group-text + .btn,.input-group-append .btn + .btn,.input-group-append .btn + .input-group-text,.input-group-append .input-group-text + .input-group-text,.input-group-append .input-group-text + .btn\":{\"margin-left\":\"-1px\"},\".input-group-prepend\":{\"margin-right\":\"-1px\"},\".input-group-append\":{\"margin-left\":\"-1px\"},\".input-group-text\":{\"display\":\"flex\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\",\"padding\":\"0.375rem 0.75rem\",\"margin-bottom\":\"0\",\"font-size\":\"1rem\",\"font-weight\":\"400\",\"line-height\":\"1.5\",\"color\":\"#495057\",\"text-align\":\"center\",\"white-space\":\"nowrap\",\"background-color\":\"#e9ecef\",\"border\":\"1px solid #ced4da\",\"border-radius\":\"0.25rem\"},\".input-group-text input[type=\\\"radio\\\"],.input-group-text input[type=\\\"checkbox\\\"]\":{\"margin-top\":\"0\"},\".input-group-lg > .form-control:not(textarea),.input-group-lg > .custom-select\":{\"height\":\"calc(1.5em + 1rem + 2px)\"},\".input-group-lg > .form-control,.input-group-lg > .custom-select,.input-group-lg > .input-group-prepend > .input-group-text,.input-group-lg > .input-group-append > .input-group-text,.input-group-lg > .input-group-prepend > .btn,.input-group-lg > .input-group-append > .btn\":{\"padding\":\"0.5rem 1rem\",\"font-size\":\"1.25rem\",\"line-height\":\"1.5\",\"border-radius\":\"0.3rem\"},\".input-group-sm > .form-control:not(textarea),.input-group-sm > .custom-select\":{\"height\":\"calc(1.5em + 0.5rem + 2px)\"},\".input-group-sm > .form-control,.input-group-sm > .custom-select,.input-group-sm > .input-group-prepend > .input-group-text,.input-group-sm > .input-group-append > .input-group-text,.input-group-sm > .input-group-prepend > .btn,.input-group-sm > .input-group-append > .btn\":{\"padding\":\"0.25rem 0.5rem\",\"font-size\":\"0.875rem\",\"line-height\":\"1.5\",\"border-radius\":\"0.2rem\"},\".input-group-lg > .custom-select,.input-group-sm > .custom-select\":{\"padding-right\":\"1.75rem\"},\".input-group > .input-group-prepend > .btn,.input-group > .input-group-prepend > .input-group-text,.input-group > .input-group-append:not(:last-child) > .btn,.input-group > .input-group-append:not(:last-child) > .input-group-text,.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),.input-group > .input-group-append:last-child > .input-group-text:not(:last-child)\":{\"border-top-right-radius\":\"0\",\"border-bottom-right-radius\":\"0\"},\".input-group > .input-group-append > .btn,.input-group > .input-group-append > .input-group-text,.input-group > .input-group-prepend:not(:first-child) > .btn,.input-group > .input-group-prepend:not(:first-child) > .input-group-text,.input-group > .input-group-prepend:first-child > .btn:not(:first-child),.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child)\":{\"border-top-left-radius\":\"0\",\"border-bottom-left-radius\":\"0\"},\".custom-control\":{\"position\":\"relative\",\"z-index\":\"1\",\"display\":\"block\",\"min-height\":\"1.5rem\",\"padding-left\":\"1.5rem\"},\".custom-control-inline\":{\"display\":\"inline-flex\",\"margin-right\":\"1rem\"},\".custom-control-input\":{\"position\":\"absolute\",\"left\":\"0\",\"z-index\":\"-1\",\"width\":\"1rem\",\"height\":\"1.25rem\",\"opacity\":\"0\"},\".custom-control-input:checked ~ .custom-control-label::before\":{\"color\":\"#fff\",\"border-color\":\"#007bff\",\"background-color\":\"#007bff\"},\".custom-control-input:focus ~ .custom-control-label::before\":{\"box-shadow\":\"0 0 0 0.2rem rgba(0, 123, 255, 0.25)\"},\".custom-control-input:focus:not(:checked) ~ .custom-control-label::before\":{\"border-color\":\"#80bdff\"},\".custom-control-input:not(:disabled):active ~ .custom-control-label::before\":{\"color\":\"#fff\",\"background-color\":\"#b3d7ff\",\"border-color\":\"#b3d7ff\"},\".custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label\":{\"color\":\"#6c757d\"},\".custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before\":{\"background-color\":\"#e9ecef\"},\".custom-control-label\":{\"position\":\"relative\",\"margin-bottom\":\"0\",\"vertical-align\":\"top\"},\".custom-control-label::before\":{\"position\":\"absolute\",\"top\":\"0.25rem\",\"left\":\"-1.5rem\",\"display\":\"block\",\"width\":\"1rem\",\"height\":\"1rem\",\"pointer-events\":\"none\",\"content\":\"\\\"\\\"\",\"background-color\":\"#fff\",\"border\":\"#adb5bd solid 1px\"},\".custom-control-label::after\":{\"position\":\"absolute\",\"top\":\"0.25rem\",\"left\":\"-1.5rem\",\"display\":\"block\",\"width\":\"1rem\",\"height\":\"1rem\",\"content\":\"\\\"\\\"\",\"background\":\"no-repeat 50% / 50% 50%\"},\".custom-checkbox .custom-control-label::before\":{\"border-radius\":\"0.25rem\"},\".custom-checkbox .custom-control-input:checked ~ .custom-control-label::after\":{\"background-image\":\"url(\\\"data\"},\".custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before\":{\"border-color\":\"#007bff\",\"background-color\":\"#007bff\"},\".custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after\":{\"background-image\":\"url(\\\"data\"},\".custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before\":{\"background-color\":\"rgba(0, 123, 255, 0.5)\"},\".custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before\":{\"background-color\":\"rgba(0, 123, 255, 0.5)\"},\".custom-radio .custom-control-label::before\":{\"border-radius\":\"50%\"},\".custom-radio .custom-control-input:checked ~ .custom-control-label::after\":{\"background-image\":\"url(\\\"data\"},\".custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before\":{\"background-color\":\"rgba(0, 123, 255, 0.5)\"},\".custom-switch\":{\"padding-left\":\"2.25rem\"},\".custom-switch .custom-control-label::before\":{\"left\":\"-2.25rem\",\"width\":\"1.75rem\",\"pointer-events\":\"all\",\"border-radius\":\"0.5rem\"},\".custom-switch .custom-control-label::after\":{\"top\":\"calc(0.25rem + 2px)\",\"left\":\"calc(-2.25rem + 2px)\",\"width\":\"calc(1rem - 4px)\",\"height\":\"calc(1rem - 4px)\",\"background-color\":\"#adb5bd\",\"border-radius\":\"0.5rem\",\"transition\":\"transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out\"},\".custom-switch .custom-control-input:checked ~ .custom-control-label::after\":{\"background-color\":\"#fff\",\"-webkit-transform\":\"translateX(0.75rem)\",\"transform\":\"translateX(0.75rem)\"},\".custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before\":{\"background-color\":\"rgba(0, 123, 255, 0.5)\"},\".custom-select\":{\"display\":\"inline-block\",\"width\":\"100%\",\"height\":\"calc(1.5em + 0.75rem + 2px)\",\"padding\":\"0.375rem 1.75rem 0.375rem 0.75rem\",\"font-size\":\"1rem\",\"font-weight\":\"400\",\"line-height\":\"1.5\",\"color\":\"#495057\",\"vertical-align\":\"middle\",\"background\":\"#fff url(\\\"data\",\"border\":\"1px solid #ced4da\",\"border-radius\":\"0.25rem\",\"-webkit-appearance\":\"none\",\"-moz-appearance\":\"none\",\"appearance\":\"none\"},\".custom-select:focus\":{\"border-color\":\"#80bdff\",\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(0, 123, 255, 0.25)\"},\".custom-select:focus::-ms-value\":{\"color\":\"#495057\",\"background-color\":\"#fff\"},\".custom-select[multiple], .custom-select[size]:not([size=\\\"1\\\"])\":{\"height\":\"auto\",\"padding-right\":\"0.75rem\",\"background-image\":\"none\"},\".custom-select:disabled\":{\"color\":\"#6c757d\",\"background-color\":\"#e9ecef\"},\".custom-select::-ms-expand\":{\"display\":\"none\"},\".custom-select:-moz-focusring\":{\"color\":\"transparent\",\"text-shadow\":\"0 0 0 #495057\"},\".custom-select-sm\":{\"height\":\"calc(1.5em + 0.5rem + 2px)\",\"padding-top\":\"0.25rem\",\"padding-bottom\":\"0.25rem\",\"padding-left\":\"0.5rem\",\"font-size\":\"0.875rem\"},\".custom-select-lg\":{\"height\":\"calc(1.5em + 1rem + 2px)\",\"padding-top\":\"0.5rem\",\"padding-bottom\":\"0.5rem\",\"padding-left\":\"1rem\",\"font-size\":\"1.25rem\"},\".custom-file\":{\"position\":\"relative\",\"display\":\"inline-block\",\"width\":\"100%\",\"height\":\"calc(1.5em + 0.75rem + 2px)\",\"margin-bottom\":\"0\"},\".custom-file-input\":{\"position\":\"relative\",\"z-index\":\"2\",\"width\":\"100%\",\"height\":\"calc(1.5em + 0.75rem + 2px)\",\"margin\":\"0\",\"opacity\":\"0\"},\".custom-file-input:focus ~ .custom-file-label\":{\"border-color\":\"#80bdff\",\"box-shadow\":\"0 0 0 0.2rem rgba(0, 123, 255, 0.25)\"},\".custom-file-input[disabled] ~ .custom-file-label,.custom-file-input:disabled ~ .custom-file-label\":{\"background-color\":\"#e9ecef\"},\".custom-file-input:lang(en) ~ .custom-file-label::after\":{\"content\":\"\\\"Browse\\\"\"},\".custom-file-input ~ .custom-file-label[data-browse]::after\":{\"content\":\"attr(data-browse)\"},\".custom-file-label\":{\"position\":\"absolute\",\"top\":\"0\",\"right\":\"0\",\"left\":\"0\",\"z-index\":\"1\",\"height\":\"calc(1.5em + 0.75rem + 2px)\",\"padding\":\"0.375rem 0.75rem\",\"font-weight\":\"400\",\"line-height\":\"1.5\",\"color\":\"#495057\",\"background-color\":\"#fff\",\"border\":\"1px solid #ced4da\",\"border-radius\":\"0.25rem\"},\".custom-file-label::after\":{\"position\":\"absolute\",\"top\":\"0\",\"right\":\"0\",\"bottom\":\"0\",\"z-index\":\"3\",\"display\":\"block\",\"height\":\"calc(1.5em + 0.75rem)\",\"padding\":\"0.375rem 0.75rem\",\"line-height\":\"1.5\",\"color\":\"#495057\",\"content\":\"\\\"Browse\\\"\",\"background-color\":\"#e9ecef\",\"border-left\":\"inherit\",\"border-radius\":\"0 0.25rem 0.25rem 0\"},\".custom-range\":{\"width\":\"100%\",\"height\":\"1.4rem\",\"padding\":\"0\",\"background-color\":\"transparent\",\"-webkit-appearance\":\"none\",\"-moz-appearance\":\"none\",\"appearance\":\"none\"},\".custom-range:focus\":{\"outline\":\"none\"},\".custom-range:focus::-webkit-slider-thumb\":{\"box-shadow\":\"0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25)\"},\".custom-range:focus::-moz-range-thumb\":{\"box-shadow\":\"0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25)\"},\".custom-range:focus::-ms-thumb\":{\"box-shadow\":\"0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25)\"},\".custom-range::-moz-focus-outer\":{\"border\":\"0\"},\".custom-range::-webkit-slider-thumb\":{\"width\":\"1rem\",\"height\":\"1rem\",\"margin-top\":\"-0.25rem\",\"background-color\":\"#007bff\",\"border\":\"0\",\"border-radius\":\"1rem\",\"-webkit-transition\":\"background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\",\"transition\":\"background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\",\"-webkit-appearance\":\"none\",\"appearance\":\"none\"},\".custom-range::-webkit-slider-thumb:active\":{\"background-color\":\"#b3d7ff\"},\".custom-range::-webkit-slider-runnable-track\":{\"width\":\"100%\",\"height\":\"0.5rem\",\"color\":\"transparent\",\"cursor\":\"pointer\",\"background-color\":\"#dee2e6\",\"border-color\":\"transparent\",\"border-radius\":\"1rem\"},\".custom-range::-moz-range-thumb\":{\"width\":\"1rem\",\"height\":\"1rem\",\"background-color\":\"#007bff\",\"border\":\"0\",\"border-radius\":\"1rem\",\"-moz-transition\":\"background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\",\"transition\":\"background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\",\"-moz-appearance\":\"none\",\"appearance\":\"none\"},\".custom-range::-moz-range-thumb:active\":{\"background-color\":\"#b3d7ff\"},\".custom-range::-moz-range-track\":{\"width\":\"100%\",\"height\":\"0.5rem\",\"color\":\"transparent\",\"cursor\":\"pointer\",\"background-color\":\"#dee2e6\",\"border-color\":\"transparent\",\"border-radius\":\"1rem\"},\".custom-range::-ms-thumb\":{\"width\":\"1rem\",\"height\":\"1rem\",\"margin-top\":\"0\",\"margin-right\":\"0.2rem\",\"margin-left\":\"0.2rem\",\"background-color\":\"#007bff\",\"border\":\"0\",\"border-radius\":\"1rem\",\"-ms-transition\":\"background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\",\"transition\":\"background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\",\"appearance\":\"none\"},\".custom-range::-ms-thumb:active\":{\"background-color\":\"#b3d7ff\"},\".custom-range::-ms-track\":{\"width\":\"100%\",\"height\":\"0.5rem\",\"color\":\"transparent\",\"cursor\":\"pointer\",\"background-color\":\"transparent\",\"border-color\":\"transparent\",\"border-width\":\"0.5rem\"},\".custom-range::-ms-fill-lower\":{\"background-color\":\"#dee2e6\",\"border-radius\":\"1rem\"},\".custom-range::-ms-fill-upper\":{\"margin-right\":\"15px\",\"background-color\":\"#dee2e6\",\"border-radius\":\"1rem\"},\".custom-range:disabled::-webkit-slider-thumb\":{\"background-color\":\"#adb5bd\"},\".custom-range:disabled::-webkit-slider-runnable-track\":{\"cursor\":\"default\"},\".custom-range:disabled::-moz-range-thumb\":{\"background-color\":\"#adb5bd\"},\".custom-range:disabled::-moz-range-track\":{\"cursor\":\"default\"},\".custom-range:disabled::-ms-thumb\":{\"background-color\":\"#adb5bd\"},\".custom-control-label::before,.custom-file-label,.custom-select\":{\"transition\":\"background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\"},\".nav\":{\"display\":\"flex\",\"-ms-flex-wrap\":\"wrap\",\"flex-wrap\":\"wrap\",\"padding-left\":\"0\",\"margin-bottom\":\"0\",\"list-style\":\"none\"},\".nav-link\":{\"display\":\"block\",\"padding\":\"0.5rem 1rem\"},\".nav-link:hover, .nav-link:focus\":{\"text-decoration\":\"none\"},\".nav-link.disabled\":{\"color\":\"#6c757d\",\"pointer-events\":\"none\",\"cursor\":\"default\"},\".nav-tabs\":{\"border-bottom\":\"1px solid #dee2e6\"},\".nav-tabs .nav-item\":{\"margin-bottom\":\"-1px\"},\".nav-tabs .nav-link\":{\"border\":\"1px solid transparent\",\"border-top-left-radius\":\"0.25rem\",\"border-top-right-radius\":\"0.25rem\"},\".nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus\":{\"border-color\":\"#e9ecef #e9ecef #dee2e6\"},\".nav-tabs .nav-link.disabled\":{\"color\":\"#6c757d\",\"background-color\":\"transparent\",\"border-color\":\"transparent\"},\".nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link\":{\"color\":\"#495057\",\"background-color\":\"#fff\",\"border-color\":\"#dee2e6 #dee2e6 #fff\"},\".nav-tabs .dropdown-menu\":{\"margin-top\":\"-1px\",\"border-top-left-radius\":\"0\",\"border-top-right-radius\":\"0\"},\".nav-pills .nav-link\":{\"border-radius\":\"0.25rem\"},\".nav-pills .nav-link.active,.nav-pills .show > .nav-link\":{\"color\":\"#fff\",\"background-color\":\"#007bff\"},\".nav-fill > .nav-link,.nav-fill .nav-item\":{\"-ms-flex\":\"1 1 auto\",\"flex\":\"1 1 auto\",\"text-align\":\"center\"},\".nav-justified > .nav-link,.nav-justified .nav-item\":{\"-ms-flex-preferred-size\":\"0\",\"flex-basis\":\"0\",\"-ms-flex-positive\":\"1\",\"flex-grow\":\"1\",\"text-align\":\"center\"},\".tab-content > .tab-pane\":{\"display\":\"none\"},\".tab-content > .active\":{\"display\":\"block\"},\".navbar\":{\"position\":\"relative\",\"display\":\"flex\",\"-ms-flex-wrap\":\"wrap\",\"flex-wrap\":\"wrap\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\",\"-ms-flex-pack\":\"justify\",\"justify-content\":\"space-between\",\"padding\":\"0.5rem 1rem\"},\".navbar .container,.navbar .container-fluid, .navbar .container-sm, .navbar .container-md, .navbar .container-lg, .navbar .container-xl\":{\"display\":\"flex\",\"-ms-flex-wrap\":\"wrap\",\"flex-wrap\":\"wrap\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\",\"-ms-flex-pack\":\"justify\",\"justify-content\":\"space-between\"},\".navbar-brand\":{\"display\":\"inline-block\",\"padding-top\":\"0.3125rem\",\"padding-bottom\":\"0.3125rem\",\"margin-right\":\"1rem\",\"font-size\":\"1.25rem\",\"line-height\":\"inherit\",\"white-space\":\"nowrap\"},\".navbar-brand:hover, .navbar-brand:focus\":{\"text-decoration\":\"none\"},\".navbar-nav\":{\"display\":\"flex\",\"-ms-flex-direction\":\"column\",\"flex-direction\":\"column\",\"padding-left\":\"0\",\"margin-bottom\":\"0\",\"list-style\":\"none\"},\".navbar-nav .nav-link\":{\"padding-right\":\"0\",\"padding-left\":\"0\"},\".navbar-nav .dropdown-menu\":{\"position\":\"static\",\"float\":\"none\"},\".navbar-text\":{\"display\":\"inline-block\",\"padding-top\":\"0.5rem\",\"padding-bottom\":\"0.5rem\"},\".navbar-collapse\":{\"-ms-flex-preferred-size\":\"100%\",\"flex-basis\":\"100%\",\"-ms-flex-positive\":\"1\",\"flex-grow\":\"1\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\"},\".navbar-toggler\":{\"padding\":\"0.25rem 0.75rem\",\"font-size\":\"1.25rem\",\"line-height\":\"1\",\"background-color\":\"transparent\",\"border\":\"1px solid transparent\",\"border-radius\":\"0.25rem\"},\".navbar-toggler:hover, .navbar-toggler:focus\":{\"text-decoration\":\"none\"},\".navbar-toggler-icon\":{\"display\":\"inline-block\",\"width\":\"1.5em\",\"height\":\"1.5em\",\"vertical-align\":\"middle\",\"content\":\"\\\"\\\"\",\"background\":\"no-repeat center center\",\"background-size\":\"100% 100%\"},\".navbar-expand\":{\"-ms-flex-flow\":\"row nowrap\",\"flex-flow\":\"row nowrap\",\"-ms-flex-pack\":\"start\",\"justify-content\":\"flex-start\"},\".navbar-expand > .container,.navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl\":{\"-ms-flex-wrap\":\"nowrap\",\"flex-wrap\":\"nowrap\"},\".navbar-expand .navbar-nav\":{\"-ms-flex-direction\":\"row\",\"flex-direction\":\"row\"},\".navbar-expand .navbar-nav .dropdown-menu\":{\"position\":\"absolute\"},\".navbar-expand .navbar-nav .nav-link\":{\"padding-right\":\"0.5rem\",\"padding-left\":\"0.5rem\"},\".navbar-expand .navbar-collapse\":{\"display\":\"flex !important\",\"-ms-flex-preferred-size\":\"auto\",\"flex-basis\":\"auto\"},\".navbar-expand .navbar-toggler\":{\"display\":\"none\"},\".navbar-light .navbar-brand\":{\"color\":\"rgba(0, 0, 0, 0.9)\"},\".navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus\":{\"color\":\"rgba(0, 0, 0, 0.9)\"},\".navbar-light .navbar-nav .nav-link\":{\"color\":\"rgba(0, 0, 0, 0.5)\"},\".navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus\":{\"color\":\"rgba(0, 0, 0, 0.7)\"},\".navbar-light .navbar-nav .nav-link.disabled\":{\"color\":\"rgba(0, 0, 0, 0.3)\"},\".navbar-light .navbar-nav .show > .nav-link,.navbar-light .navbar-nav .active > .nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .nav-link.active\":{\"color\":\"rgba(0, 0, 0, 0.9)\"},\".navbar-light .navbar-toggler\":{\"color\":\"rgba(0, 0, 0, 0.5)\",\"border-color\":\"rgba(0, 0, 0, 0.1)\"},\".navbar-light .navbar-toggler-icon\":{\"background-image\":\"url(\\\"data\"},\".navbar-light .navbar-text\":{\"color\":\"rgba(0, 0, 0, 0.5)\"},\".navbar-light .navbar-text a\":{\"color\":\"rgba(0, 0, 0, 0.9)\"},\".navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus\":{\"color\":\"rgba(0, 0, 0, 0.9)\"},\".navbar-dark .navbar-brand\":{\"color\":\"#fff\"},\".navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus\":{\"color\":\"#fff\"},\".navbar-dark .navbar-nav .nav-link\":{\"color\":\"rgba(255, 255, 255, 0.5)\"},\".navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus\":{\"color\":\"rgba(255, 255, 255, 0.75)\"},\".navbar-dark .navbar-nav .nav-link.disabled\":{\"color\":\"rgba(255, 255, 255, 0.25)\"},\".navbar-dark .navbar-nav .show > .nav-link,.navbar-dark .navbar-nav .active > .nav-link,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .nav-link.active\":{\"color\":\"#fff\"},\".navbar-dark .navbar-toggler\":{\"color\":\"rgba(255, 255, 255, 0.5)\",\"border-color\":\"rgba(255, 255, 255, 0.1)\"},\".navbar-dark .navbar-toggler-icon\":{\"background-image\":\"url(\\\"data\"},\".navbar-dark .navbar-text\":{\"color\":\"rgba(255, 255, 255, 0.5)\"},\".navbar-dark .navbar-text a\":{\"color\":\"#fff\"},\".navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus\":{\"color\":\"#fff\"},\".card\":{\"position\":\"relative\",\"display\":\"flex\",\"-ms-flex-direction\":\"column\",\"flex-direction\":\"column\",\"min-width\":\"0\",\"word-wrap\":\"break-word\",\"background-color\":\"#fff\",\"background-clip\":\"border-box\",\"border\":\"1px solid rgba(0, 0, 0, 0.125)\",\"border-radius\":\"0.25rem\"},\".card > hr\":{\"margin-right\":\"0\",\"margin-left\":\"0\"},\".card > .list-group\":{\"border-top\":\"inherit\",\"border-bottom\":\"inherit\"},\".card > .list-group:first-child\":{\"border-top-width\":\"0\",\"border-top-left-radius\":\"calc(0.25rem - 1px)\",\"border-top-right-radius\":\"calc(0.25rem - 1px)\"},\".card > .list-group:last-child\":{\"border-bottom-width\":\"0\",\"border-bottom-right-radius\":\"calc(0.25rem - 1px)\",\"border-bottom-left-radius\":\"calc(0.25rem - 1px)\"},\".card > .card-header + .list-group,.card > .list-group + .card-footer\":{\"border-top\":\"0\"},\".card-body\":{\"-ms-flex\":\"1 1 auto\",\"flex\":\"1 1 auto\",\"min-height\":\"1px\",\"padding\":\"1.25rem\"},\".card-title\":{\"margin-bottom\":\"0.75rem\"},\".card-subtitle\":{\"margin-top\":\"-0.375rem\",\"margin-bottom\":\"0\"},\".card-text:last-child\":{\"margin-bottom\":\"0\"},\".card-link:hover\":{\"text-decoration\":\"none\"},\".card-link + .card-link\":{\"margin-left\":\"1.25rem\"},\".card-header\":{\"padding\":\"0.75rem 1.25rem\",\"margin-bottom\":\"0\",\"background-color\":\"rgba(0, 0, 0, 0.03)\",\"border-bottom\":\"1px solid rgba(0, 0, 0, 0.125)\"},\".card-header:first-child\":{\"border-radius\":\"calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0\"},\".card-footer\":{\"padding\":\"0.75rem 1.25rem\",\"background-color\":\"rgba(0, 0, 0, 0.03)\",\"border-top\":\"1px solid rgba(0, 0, 0, 0.125)\"},\".card-footer:last-child\":{\"border-radius\":\"0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)\"},\".card-header-tabs\":{\"margin-right\":\"-0.625rem\",\"margin-bottom\":\"-0.75rem\",\"margin-left\":\"-0.625rem\",\"border-bottom\":\"0\"},\".card-header-pills\":{\"margin-right\":\"-0.625rem\",\"margin-left\":\"-0.625rem\"},\".card-img-overlay\":{\"position\":\"absolute\",\"top\":\"0\",\"right\":\"0\",\"bottom\":\"0\",\"left\":\"0\",\"padding\":\"1.25rem\",\"border-radius\":\"calc(0.25rem - 1px)\"},\".card-img,.card-img-top,.card-img-bottom\":{\"-ms-flex-negative\":\"0\",\"flex-shrink\":\"0\",\"width\":\"100%\"},\".card-img,.card-img-top\":{\"border-top-left-radius\":\"calc(0.25rem - 1px)\",\"border-top-right-radius\":\"calc(0.25rem - 1px)\"},\".card-img,.card-img-bottom\":{\"border-bottom-right-radius\":\"calc(0.25rem - 1px)\",\"border-bottom-left-radius\":\"calc(0.25rem - 1px)\"},\".card-deck .card\":{\"margin-bottom\":\"15px\"},\".card-group > .card\":{\"margin-bottom\":\"15px\"},\".card-columns .card\":{\"margin-bottom\":\"0.75rem\"},\".accordion\":{\"overflow-anchor\":\"none\"},\".accordion > .card\":{\"overflow\":\"hidden\"},\".accordion > .card:not(:last-of-type)\":{\"border-bottom\":\"0\",\"border-bottom-right-radius\":\"0\",\"border-bottom-left-radius\":\"0\"},\".accordion > .card:not(:first-of-type)\":{\"border-top-left-radius\":\"0\",\"border-top-right-radius\":\"0\"},\".accordion > .card > .card-header\":{\"border-radius\":\"0\",\"margin-bottom\":\"-1px\"},\".breadcrumb\":{\"display\":\"flex\",\"-ms-flex-wrap\":\"wrap\",\"flex-wrap\":\"wrap\",\"padding\":\"0.75rem 1rem\",\"margin-bottom\":\"1rem\",\"list-style\":\"none\",\"background-color\":\"#e9ecef\",\"border-radius\":\"0.25rem\"},\".breadcrumb-item\":{\"display\":\"flex\"},\".breadcrumb-item + .breadcrumb-item\":{\"padding-left\":\"0.5rem\"},\".breadcrumb-item + .breadcrumb-item::before\":{\"display\":\"inline-block\",\"padding-right\":\"0.5rem\",\"color\":\"#6c757d\",\"content\":\"\\\"/\\\"\"},\".breadcrumb-item + .breadcrumb-item:hover::before\":{\"text-decoration\":\"none\"},\".breadcrumb-item.active\":{\"color\":\"#6c757d\"},\".pagination\":{\"display\":\"flex\",\"padding-left\":\"0\",\"list-style\":\"none\",\"border-radius\":\"0.25rem\"},\".page-link\":{\"position\":\"relative\",\"display\":\"block\",\"padding\":\"0.5rem 0.75rem\",\"margin-left\":\"-1px\",\"line-height\":\"1.25\",\"color\":\"#007bff\",\"background-color\":\"#fff\",\"border\":\"1px solid #dee2e6\"},\".page-link:hover\":{\"z-index\":\"2\",\"color\":\"#0056b3\",\"text-decoration\":\"none\",\"background-color\":\"#e9ecef\",\"border-color\":\"#dee2e6\"},\".page-link:focus\":{\"z-index\":\"3\",\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(0, 123, 255, 0.25)\"},\".page-item:first-child .page-link\":{\"margin-left\":\"0\",\"border-top-left-radius\":\"0.25rem\",\"border-bottom-left-radius\":\"0.25rem\"},\".page-item:last-child .page-link\":{\"border-top-right-radius\":\"0.25rem\",\"border-bottom-right-radius\":\"0.25rem\"},\".page-item.active .page-link\":{\"z-index\":\"3\",\"color\":\"#fff\",\"background-color\":\"#007bff\",\"border-color\":\"#007bff\"},\".page-item.disabled .page-link\":{\"color\":\"#6c757d\",\"pointer-events\":\"none\",\"cursor\":\"auto\",\"background-color\":\"#fff\",\"border-color\":\"#dee2e6\"},\".pagination-lg .page-link\":{\"padding\":\"0.75rem 1.5rem\",\"font-size\":\"1.25rem\",\"line-height\":\"1.5\"},\".pagination-lg .page-item:first-child .page-link\":{\"border-top-left-radius\":\"0.3rem\",\"border-bottom-left-radius\":\"0.3rem\"},\".pagination-lg .page-item:last-child .page-link\":{\"border-top-right-radius\":\"0.3rem\",\"border-bottom-right-radius\":\"0.3rem\"},\".pagination-sm .page-link\":{\"padding\":\"0.25rem 0.5rem\",\"font-size\":\"0.875rem\",\"line-height\":\"1.5\"},\".pagination-sm .page-item:first-child .page-link\":{\"border-top-left-radius\":\"0.2rem\",\"border-bottom-left-radius\":\"0.2rem\"},\".pagination-sm .page-item:last-child .page-link\":{\"border-top-right-radius\":\"0.2rem\",\"border-bottom-right-radius\":\"0.2rem\"},\".badge\":{\"display\":\"inline-block\",\"padding\":\"0.25em 0.4em\",\"font-size\":\"75%\",\"font-weight\":\"700\",\"line-height\":\"1\",\"text-align\":\"center\",\"white-space\":\"nowrap\",\"vertical-align\":\"baseline\",\"border-radius\":\"0.25rem\",\"transition\":\"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\"},\"a.badge:hover, a.badge:focus\":{\"text-decoration\":\"none\"},\".badge:empty\":{\"display\":\"none\"},\".btn .badge\":{\"position\":\"relative\",\"top\":\"-1px\"},\".badge-pill\":{\"padding-right\":\"0.6em\",\"padding-left\":\"0.6em\",\"border-radius\":\"10rem\"},\".badge-primary\":{\"color\":\"#fff\",\"background-color\":\"#007bff\"},\"a.badge-primary:hover, a.badge-primary:focus\":{\"color\":\"#fff\",\"background-color\":\"#0062cc\"},\"a.badge-primary:focus, a.badge-primary.focus\":{\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(0, 123, 255, 0.5)\"},\".badge-secondary\":{\"color\":\"#fff\",\"background-color\":\"#6c757d\"},\"a.badge-secondary:hover, a.badge-secondary:focus\":{\"color\":\"#fff\",\"background-color\":\"#545b62\"},\"a.badge-secondary:focus, a.badge-secondary.focus\":{\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(108, 117, 125, 0.5)\"},\".badge-success\":{\"color\":\"#fff\",\"background-color\":\"#28a745\"},\"a.badge-success:hover, a.badge-success:focus\":{\"color\":\"#fff\",\"background-color\":\"#1e7e34\"},\"a.badge-success:focus, a.badge-success.focus\":{\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(40, 167, 69, 0.5)\"},\".badge-info\":{\"color\":\"#fff\",\"background-color\":\"#17a2b8\"},\"a.badge-info:hover, a.badge-info:focus\":{\"color\":\"#fff\",\"background-color\":\"#117a8b\"},\"a.badge-info:focus, a.badge-info.focus\":{\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(23, 162, 184, 0.5)\"},\".badge-warning\":{\"color\":\"#212529\",\"background-color\":\"#ffc107\"},\"a.badge-warning:hover, a.badge-warning:focus\":{\"color\":\"#212529\",\"background-color\":\"#d39e00\"},\"a.badge-warning:focus, a.badge-warning.focus\":{\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(255, 193, 7, 0.5)\"},\".badge-danger\":{\"color\":\"#fff\",\"background-color\":\"#dc3545\"},\"a.badge-danger:hover, a.badge-danger:focus\":{\"color\":\"#fff\",\"background-color\":\"#bd2130\"},\"a.badge-danger:focus, a.badge-danger.focus\":{\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(220, 53, 69, 0.5)\"},\".badge-light\":{\"color\":\"#212529\",\"background-color\":\"#f8f9fa\"},\"a.badge-light:hover, a.badge-light:focus\":{\"color\":\"#212529\",\"background-color\":\"#dae0e5\"},\"a.badge-light:focus, a.badge-light.focus\":{\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(248, 249, 250, 0.5)\"},\".badge-dark\":{\"color\":\"#fff\",\"background-color\":\"#343a40\"},\"a.badge-dark:hover, a.badge-dark:focus\":{\"color\":\"#fff\",\"background-color\":\"#1d2124\"},\"a.badge-dark:focus, a.badge-dark.focus\":{\"outline\":\"0\",\"box-shadow\":\"0 0 0 0.2rem rgba(52, 58, 64, 0.5)\"},\".jumbotron\":{\"padding\":\"2rem 1rem\",\"margin-bottom\":\"2rem\",\"background-color\":\"#e9ecef\",\"border-radius\":\"0.3rem\"},\".jumbotron-fluid\":{\"padding-right\":\"0\",\"padding-left\":\"0\",\"border-radius\":\"0\"},\".alert\":{\"position\":\"relative\",\"padding\":\"0.75rem 1.25rem\",\"margin-bottom\":\"1rem\",\"border\":\"1px solid transparent\",\"border-radius\":\"0.25rem\"},\".alert-heading\":{\"color\":\"inherit\"},\".alert-link\":{\"font-weight\":\"700\"},\".alert-dismissible\":{\"padding-right\":\"4rem\"},\".alert-dismissible .close\":{\"position\":\"absolute\",\"top\":\"0\",\"right\":\"0\",\"padding\":\"0.75rem 1.25rem\",\"color\":\"inherit\"},\".alert-primary\":{\"color\":\"#004085\",\"background-color\":\"#cce5ff\",\"border-color\":\"#b8daff\"},\".alert-primary hr\":{\"border-top-color\":\"#9fcdff\"},\".alert-primary .alert-link\":{\"color\":\"#002752\"},\".alert-secondary\":{\"color\":\"#383d41\",\"background-color\":\"#e2e3e5\",\"border-color\":\"#d6d8db\"},\".alert-secondary hr\":{\"border-top-color\":\"#c8cbcf\"},\".alert-secondary .alert-link\":{\"color\":\"#202326\"},\".alert-success\":{\"color\":\"#155724\",\"background-color\":\"#d4edda\",\"border-color\":\"#c3e6cb\"},\".alert-success hr\":{\"border-top-color\":\"#b1dfbb\"},\".alert-success .alert-link\":{\"color\":\"#0b2e13\"},\".alert-info\":{\"color\":\"#0c5460\",\"background-color\":\"#d1ecf1\",\"border-color\":\"#bee5eb\"},\".alert-info hr\":{\"border-top-color\":\"#abdde5\"},\".alert-info .alert-link\":{\"color\":\"#062c33\"},\".alert-warning\":{\"color\":\"#856404\",\"background-color\":\"#fff3cd\",\"border-color\":\"#ffeeba\"},\".alert-warning hr\":{\"border-top-color\":\"#ffe8a1\"},\".alert-warning .alert-link\":{\"color\":\"#533f03\"},\".alert-danger\":{\"color\":\"#721c24\",\"background-color\":\"#f8d7da\",\"border-color\":\"#f5c6cb\"},\".alert-danger hr\":{\"border-top-color\":\"#f1b0b7\"},\".alert-danger .alert-link\":{\"color\":\"#491217\"},\".alert-light\":{\"color\":\"#818182\",\"background-color\":\"#fefefe\",\"border-color\":\"#fdfdfe\"},\".alert-light hr\":{\"border-top-color\":\"#ececf6\"},\".alert-light .alert-link\":{\"color\":\"#686868\"},\".alert-dark\":{\"color\":\"#1b1e21\",\"background-color\":\"#d6d8d9\",\"border-color\":\"#c6c8ca\"},\".alert-dark hr\":{\"border-top-color\":\"#b9bbbe\"},\".alert-dark .alert-link\":{\"color\":\"#040505\"},\"@-webkit-keyframes progress-bar-stripes\":{\"from\":{\"background-position\":\"1rem 0\"},\"to\":{\"background-position\":\"0 0\"}},\"@keyframes progress-bar-stripes\":{\"from\":{\"background-position\":\"1rem 0\"},\"to\":{\"background-position\":\"0 0\"}},\".progress\":{\"display\":\"flex\",\"height\":\"1rem\",\"overflow\":\"hidden\",\"line-height\":\"0\",\"font-size\":\"0.75rem\",\"background-color\":\"#e9ecef\",\"border-radius\":\"0.25rem\"},\".progress-bar\":{\"display\":\"flex\",\"-ms-flex-direction\":\"column\",\"flex-direction\":\"column\",\"-ms-flex-pack\":\"center\",\"justify-content\":\"center\",\"overflow\":\"hidden\",\"color\":\"#fff\",\"text-align\":\"center\",\"white-space\":\"nowrap\",\"background-color\":\"#007bff\",\"transition\":\"width 0.6s ease\"},\".progress-bar-striped\":{\"background-image\":\"linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)\",\"background-size\":\"1rem 1rem\"},\".progress-bar-animated\":{\"-webkit-animation\":\"progress-bar-stripes 1s linear infinite\",\"animation\":\"progress-bar-stripes 1s linear infinite\"},\".media\":{\"display\":\"flex\",\"-ms-flex-align\":\"start\",\"align-items\":\"flex-start\"},\".media-body\":{\"-ms-flex\":\"1\",\"flex\":\"1\"},\".list-group\":{\"display\":\"flex\",\"-ms-flex-direction\":\"column\",\"flex-direction\":\"column\",\"padding-left\":\"0\",\"margin-bottom\":\"0\",\"border-radius\":\"0.25rem\"},\".list-group-item-action\":{\"width\":\"100%\",\"color\":\"#495057\",\"text-align\":\"inherit\"},\".list-group-item-action:hover, .list-group-item-action:focus\":{\"z-index\":\"1\",\"color\":\"#495057\",\"text-decoration\":\"none\",\"background-color\":\"#f8f9fa\"},\".list-group-item-action:active\":{\"color\":\"#212529\",\"background-color\":\"#e9ecef\"},\".list-group-item\":{\"position\":\"relative\",\"display\":\"block\",\"padding\":\"0.75rem 1.25rem\",\"background-color\":\"#fff\",\"border\":\"1px solid rgba(0, 0, 0, 0.125)\"},\".list-group-item:first-child\":{\"border-top-left-radius\":\"inherit\",\"border-top-right-radius\":\"inherit\"},\".list-group-item:last-child\":{\"border-bottom-right-radius\":\"inherit\",\"border-bottom-left-radius\":\"inherit\"},\".list-group-item.disabled, .list-group-item:disabled\":{\"color\":\"#6c757d\",\"pointer-events\":\"none\",\"background-color\":\"#fff\"},\".list-group-item.active\":{\"z-index\":\"2\",\"color\":\"#fff\",\"background-color\":\"#007bff\",\"border-color\":\"#007bff\"},\".list-group-item + .list-group-item\":{\"border-top-width\":\"0\"},\".list-group-item + .list-group-item.active\":{\"margin-top\":\"-1px\",\"border-top-width\":\"1px\"},\".list-group-horizontal\":{\"-ms-flex-direction\":\"row\",\"flex-direction\":\"row\"},\".list-group-horizontal > .list-group-item:first-child\":{\"border-bottom-left-radius\":\"0.25rem\",\"border-top-right-radius\":\"0\"},\".list-group-horizontal > .list-group-item:last-child\":{\"border-top-right-radius\":\"0.25rem\",\"border-bottom-left-radius\":\"0\"},\".list-group-horizontal > .list-group-item.active\":{\"margin-top\":\"0\"},\".list-group-horizontal > .list-group-item + .list-group-item\":{\"border-top-width\":\"1px\",\"border-left-width\":\"0\"},\".list-group-horizontal > .list-group-item + .list-group-item.active\":{\"margin-left\":\"-1px\",\"border-left-width\":\"1px\"},\".list-group-flush\":{\"border-radius\":\"0\"},\".list-group-flush > .list-group-item\":{\"border-width\":\"0 0 1px\"},\".list-group-flush > .list-group-item:last-child\":{\"border-bottom-width\":\"0\"},\".list-group-item-primary\":{\"color\":\"#004085\",\"background-color\":\"#b8daff\"},\".list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus\":{\"color\":\"#004085\",\"background-color\":\"#9fcdff\"},\".list-group-item-primary.list-group-item-action.active\":{\"color\":\"#fff\",\"background-color\":\"#004085\",\"border-color\":\"#004085\"},\".list-group-item-secondary\":{\"color\":\"#383d41\",\"background-color\":\"#d6d8db\"},\".list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus\":{\"color\":\"#383d41\",\"background-color\":\"#c8cbcf\"},\".list-group-item-secondary.list-group-item-action.active\":{\"color\":\"#fff\",\"background-color\":\"#383d41\",\"border-color\":\"#383d41\"},\".list-group-item-success\":{\"color\":\"#155724\",\"background-color\":\"#c3e6cb\"},\".list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus\":{\"color\":\"#155724\",\"background-color\":\"#b1dfbb\"},\".list-group-item-success.list-group-item-action.active\":{\"color\":\"#fff\",\"background-color\":\"#155724\",\"border-color\":\"#155724\"},\".list-group-item-info\":{\"color\":\"#0c5460\",\"background-color\":\"#bee5eb\"},\".list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus\":{\"color\":\"#0c5460\",\"background-color\":\"#abdde5\"},\".list-group-item-info.list-group-item-action.active\":{\"color\":\"#fff\",\"background-color\":\"#0c5460\",\"border-color\":\"#0c5460\"},\".list-group-item-warning\":{\"color\":\"#856404\",\"background-color\":\"#ffeeba\"},\".list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus\":{\"color\":\"#856404\",\"background-color\":\"#ffe8a1\"},\".list-group-item-warning.list-group-item-action.active\":{\"color\":\"#fff\",\"background-color\":\"#856404\",\"border-color\":\"#856404\"},\".list-group-item-danger\":{\"color\":\"#721c24\",\"background-color\":\"#f5c6cb\"},\".list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus\":{\"color\":\"#721c24\",\"background-color\":\"#f1b0b7\"},\".list-group-item-danger.list-group-item-action.active\":{\"color\":\"#fff\",\"background-color\":\"#721c24\",\"border-color\":\"#721c24\"},\".list-group-item-light\":{\"color\":\"#818182\",\"background-color\":\"#fdfdfe\"},\".list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus\":{\"color\":\"#818182\",\"background-color\":\"#ececf6\"},\".list-group-item-light.list-group-item-action.active\":{\"color\":\"#fff\",\"background-color\":\"#818182\",\"border-color\":\"#818182\"},\".list-group-item-dark\":{\"color\":\"#1b1e21\",\"background-color\":\"#c6c8ca\"},\".list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus\":{\"color\":\"#1b1e21\",\"background-color\":\"#b9bbbe\"},\".list-group-item-dark.list-group-item-action.active\":{\"color\":\"#fff\",\"background-color\":\"#1b1e21\",\"border-color\":\"#1b1e21\"},\".close\":{\"float\":\"right\",\"font-size\":\"1.5rem\",\"font-weight\":\"700\",\"line-height\":\"1\",\"color\":\"#000\",\"text-shadow\":\"0 1px 0 #fff\",\"opacity\":\".5\"},\".close:hover\":{\"color\":\"#000\",\"text-decoration\":\"none\"},\".close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus\":{\"opacity\":\".75\"},\"button.close\":{\"padding\":\"0\",\"background-color\":\"transparent\",\"border\":\"0\"},\"a.close.disabled\":{\"pointer-events\":\"none\"},\".toast\":{\"-ms-flex-preferred-size\":\"350px\",\"flex-basis\":\"350px\",\"max-width\":\"350px\",\"font-size\":\"0.875rem\",\"background-color\":\"rgba(255, 255, 255, 0.85)\",\"background-clip\":\"padding-box\",\"border\":\"1px solid rgba(0, 0, 0, 0.1)\",\"box-shadow\":\"0 0.25rem 0.75rem rgba(0, 0, 0, 0.1)\",\"opacity\":\"0\",\"border-radius\":\"0.25rem\"},\".toast:not(:last-child)\":{\"margin-bottom\":\"0.75rem\"},\".toast.showing\":{\"opacity\":\"1\"},\".toast.show\":{\"display\":\"block\",\"opacity\":\"1\"},\".toast.hide\":{\"display\":\"none\"},\".toast-header\":{\"display\":\"flex\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\",\"padding\":\"0.25rem 0.75rem\",\"color\":\"#6c757d\",\"background-color\":\"rgba(255, 255, 255, 0.85)\",\"background-clip\":\"padding-box\",\"border-bottom\":\"1px solid rgba(0, 0, 0, 0.05)\",\"border-top-left-radius\":\"calc(0.25rem - 1px)\",\"border-top-right-radius\":\"calc(0.25rem - 1px)\"},\".toast-body\":{\"padding\":\"0.75rem\"},\".modal-open\":{\"overflow\":\"hidden\"},\".modal-open .modal\":{\"overflow-x\":\"hidden\",\"overflow-y\":\"auto\"},\".modal\":{\"position\":\"fixed\",\"top\":\"0\",\"left\":\"0\",\"z-index\":\"1050\",\"display\":\"none\",\"width\":\"100%\",\"height\":\"100%\",\"overflow\":\"hidden\",\"outline\":\"0\"},\".modal-dialog\":{\"position\":\"relative\",\"width\":\"auto\",\"margin\":\"0.5rem\",\"pointer-events\":\"none\"},\".modal.fade .modal-dialog\":{\"transition\":\"transform 0.3s ease-out, -webkit-transform 0.3s ease-out\",\"-webkit-transform\":\"translate(0, -50px)\",\"transform\":\"translate(0, -50px)\"},\".modal.show .modal-dialog\":{\"-webkit-transform\":\"none\",\"transform\":\"none\"},\".modal.modal-static .modal-dialog\":{\"-webkit-transform\":\"scale(1.02)\",\"transform\":\"scale(1.02)\"},\".modal-dialog-scrollable\":{\"display\":\"flex\",\"max-height\":\"calc(100% - 1rem)\"},\".modal-dialog-scrollable .modal-content\":{\"max-height\":\"calc(100vh - 1rem)\",\"overflow\":\"hidden\"},\".modal-dialog-scrollable .modal-header,.modal-dialog-scrollable .modal-footer\":{\"-ms-flex-negative\":\"0\",\"flex-shrink\":\"0\"},\".modal-dialog-scrollable .modal-body\":{\"overflow-y\":\"auto\"},\".modal-dialog-centered\":{\"display\":\"flex\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\",\"min-height\":\"calc(100% - 1rem)\"},\".modal-dialog-centered::before\":{\"display\":\"block\",\"height\":\"min-content\",\"content\":\"\\\"\\\"\"},\".modal-dialog-centered.modal-dialog-scrollable\":{\"-ms-flex-direction\":\"column\",\"flex-direction\":\"column\",\"-ms-flex-pack\":\"center\",\"justify-content\":\"center\",\"height\":\"100%\"},\".modal-dialog-centered.modal-dialog-scrollable .modal-content\":{\"max-height\":\"none\"},\".modal-dialog-centered.modal-dialog-scrollable::before\":{\"content\":\"none\"},\".modal-content\":{\"position\":\"relative\",\"display\":\"flex\",\"-ms-flex-direction\":\"column\",\"flex-direction\":\"column\",\"width\":\"100%\",\"pointer-events\":\"auto\",\"background-color\":\"#fff\",\"background-clip\":\"padding-box\",\"border\":\"1px solid rgba(0, 0, 0, 0.2)\",\"border-radius\":\"0.3rem\",\"outline\":\"0\"},\".modal-backdrop\":{\"position\":\"fixed\",\"top\":\"0\",\"left\":\"0\",\"z-index\":\"1040\",\"width\":\"100vw\",\"height\":\"100vh\",\"background-color\":\"#000\"},\".modal-backdrop.fade\":{\"opacity\":\"0\"},\".modal-backdrop.show\":{\"opacity\":\"0.5\"},\".modal-header\":{\"display\":\"flex\",\"-ms-flex-align\":\"start\",\"align-items\":\"flex-start\",\"-ms-flex-pack\":\"justify\",\"justify-content\":\"space-between\",\"padding\":\"1rem 1rem\",\"border-bottom\":\"1px solid #dee2e6\",\"border-top-left-radius\":\"calc(0.3rem - 1px)\",\"border-top-right-radius\":\"calc(0.3rem - 1px)\"},\".modal-header .close\":{\"padding\":\"1rem 1rem\",\"margin\":\"-1rem -1rem -1rem auto\"},\".modal-title\":{\"margin-bottom\":\"0\",\"line-height\":\"1.5\"},\".modal-body\":{\"position\":\"relative\",\"-ms-flex\":\"1 1 auto\",\"flex\":\"1 1 auto\",\"padding\":\"1rem\"},\".modal-footer\":{\"display\":\"flex\",\"-ms-flex-wrap\":\"wrap\",\"flex-wrap\":\"wrap\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\",\"-ms-flex-pack\":\"end\",\"justify-content\":\"flex-end\",\"padding\":\"0.75rem\",\"border-top\":\"1px solid #dee2e6\",\"border-bottom-right-radius\":\"calc(0.3rem - 1px)\",\"border-bottom-left-radius\":\"calc(0.3rem - 1px)\"},\".modal-footer > *\":{\"margin\":\"0.25rem\"},\".modal-scrollbar-measure\":{\"position\":\"absolute\",\"top\":\"-9999px\",\"width\":\"50px\",\"height\":\"50px\",\"overflow\":\"scroll\"},\".tooltip\":{\"position\":\"absolute\",\"z-index\":\"1070\",\"display\":\"block\",\"margin\":\"0\",\"font-family\":\"-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"\",\"font-style\":\"normal\",\"font-weight\":\"400\",\"line-height\":\"1.5\",\"text-align\":\"start\",\"text-decoration\":\"none\",\"text-shadow\":\"none\",\"text-transform\":\"none\",\"letter-spacing\":\"normal\",\"word-break\":\"normal\",\"word-spacing\":\"normal\",\"white-space\":\"normal\",\"line-break\":\"auto\",\"font-size\":\"0.875rem\",\"word-wrap\":\"break-word\",\"opacity\":\"0\"},\".tooltip.show\":{\"opacity\":\"0.9\"},\".tooltip .arrow\":{\"position\":\"absolute\",\"display\":\"block\",\"width\":\"0.8rem\",\"height\":\"0.4rem\"},\".tooltip .arrow::before\":{\"position\":\"absolute\",\"content\":\"\\\"\\\"\",\"border-color\":\"transparent\",\"border-style\":\"solid\"},\".bs-tooltip-top, .bs-tooltip-auto[x-placement^=\\\"top\\\"]\":{\"padding\":\"0.4rem 0\"},\".bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\\\"top\\\"] .arrow\":{\"bottom\":\"0\"},\".bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\\\"top\\\"] .arrow::before\":{\"top\":\"0\",\"border-width\":\"0.4rem 0.4rem 0\",\"border-top-color\":\"#000\"},\".bs-tooltip-right, .bs-tooltip-auto[x-placement^=\\\"right\\\"]\":{\"padding\":\"0 0.4rem\"},\".bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\\\"right\\\"] .arrow\":{\"left\":\"0\",\"width\":\"0.4rem\",\"height\":\"0.8rem\"},\".bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\\\"right\\\"] .arrow::before\":{\"right\":\"0\",\"border-width\":\"0.4rem 0.4rem 0.4rem 0\",\"border-right-color\":\"#000\"},\".bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\\\"bottom\\\"]\":{\"padding\":\"0.4rem 0\"},\".bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\\\"bottom\\\"] .arrow\":{\"top\":\"0\"},\".bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\\\"bottom\\\"] .arrow::before\":{\"bottom\":\"0\",\"border-width\":\"0 0.4rem 0.4rem\",\"border-bottom-color\":\"#000\"},\".bs-tooltip-left, .bs-tooltip-auto[x-placement^=\\\"left\\\"]\":{\"padding\":\"0 0.4rem\"},\".bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\\\"left\\\"] .arrow\":{\"right\":\"0\",\"width\":\"0.4rem\",\"height\":\"0.8rem\"},\".bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\\\"left\\\"] .arrow::before\":{\"left\":\"0\",\"border-width\":\"0.4rem 0 0.4rem 0.4rem\",\"border-left-color\":\"#000\"},\".tooltip-inner\":{\"max-width\":\"200px\",\"padding\":\"0.25rem 0.5rem\",\"color\":\"#fff\",\"text-align\":\"center\",\"background-color\":\"#000\",\"border-radius\":\"0.25rem\"},\".popover\":{\"position\":\"absolute\",\"top\":\"0\",\"left\":\"0\",\"z-index\":\"1060\",\"display\":\"block\",\"max-width\":\"276px\",\"font-family\":\"-apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"\",\"font-style\":\"normal\",\"font-weight\":\"400\",\"line-height\":\"1.5\",\"text-align\":\"start\",\"text-decoration\":\"none\",\"text-shadow\":\"none\",\"text-transform\":\"none\",\"letter-spacing\":\"normal\",\"word-break\":\"normal\",\"word-spacing\":\"normal\",\"white-space\":\"normal\",\"line-break\":\"auto\",\"font-size\":\"0.875rem\",\"word-wrap\":\"break-word\",\"background-color\":\"#fff\",\"background-clip\":\"padding-box\",\"border\":\"1px solid rgba(0, 0, 0, 0.2)\",\"border-radius\":\"0.3rem\"},\".popover .arrow\":{\"position\":\"absolute\",\"display\":\"block\",\"width\":\"1rem\",\"height\":\"0.5rem\",\"margin\":\"0 0.3rem\"},\".popover .arrow::before, .popover .arrow::after\":{\"position\":\"absolute\",\"display\":\"block\",\"content\":\"\\\"\\\"\",\"border-color\":\"transparent\",\"border-style\":\"solid\"},\".bs-popover-top, .bs-popover-auto[x-placement^=\\\"top\\\"]\":{\"margin-bottom\":\"0.5rem\"},\".bs-popover-top > .arrow, .bs-popover-auto[x-placement^=\\\"top\\\"] > .arrow\":{\"bottom\":\"calc(-0.5rem - 1px)\"},\".bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^=\\\"top\\\"] > .arrow::before\":{\"bottom\":\"0\",\"border-width\":\"0.5rem 0.5rem 0\",\"border-top-color\":\"rgba(0, 0, 0, 0.25)\"},\".bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^=\\\"top\\\"] > .arrow::after\":{\"bottom\":\"1px\",\"border-width\":\"0.5rem 0.5rem 0\",\"border-top-color\":\"#fff\"},\".bs-popover-right, .bs-popover-auto[x-placement^=\\\"right\\\"]\":{\"margin-left\":\"0.5rem\"},\".bs-popover-right > .arrow, .bs-popover-auto[x-placement^=\\\"right\\\"] > .arrow\":{\"left\":\"calc(-0.5rem - 1px)\",\"width\":\"0.5rem\",\"height\":\"1rem\",\"margin\":\"0.3rem 0\"},\".bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^=\\\"right\\\"] > .arrow::before\":{\"left\":\"0\",\"border-width\":\"0.5rem 0.5rem 0.5rem 0\",\"border-right-color\":\"rgba(0, 0, 0, 0.25)\"},\".bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^=\\\"right\\\"] > .arrow::after\":{\"left\":\"1px\",\"border-width\":\"0.5rem 0.5rem 0.5rem 0\",\"border-right-color\":\"#fff\"},\".bs-popover-bottom, .bs-popover-auto[x-placement^=\\\"bottom\\\"]\":{\"margin-top\":\"0.5rem\"},\".bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^=\\\"bottom\\\"] > .arrow\":{\"top\":\"calc(-0.5rem - 1px)\"},\".bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^=\\\"bottom\\\"] > .arrow::before\":{\"top\":\"0\",\"border-width\":\"0 0.5rem 0.5rem 0.5rem\",\"border-bottom-color\":\"rgba(0, 0, 0, 0.25)\"},\".bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^=\\\"bottom\\\"] > .arrow::after\":{\"top\":\"1px\",\"border-width\":\"0 0.5rem 0.5rem 0.5rem\",\"border-bottom-color\":\"#fff\"},\".bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\\\"bottom\\\"] .popover-header::before\":{\"position\":\"absolute\",\"top\":\"0\",\"left\":\"50%\",\"display\":\"block\",\"width\":\"1rem\",\"margin-left\":\"-0.5rem\",\"content\":\"\\\"\\\"\",\"border-bottom\":\"1px solid #f7f7f7\"},\".bs-popover-left, .bs-popover-auto[x-placement^=\\\"left\\\"]\":{\"margin-right\":\"0.5rem\"},\".bs-popover-left > .arrow, .bs-popover-auto[x-placement^=\\\"left\\\"] > .arrow\":{\"right\":\"calc(-0.5rem - 1px)\",\"width\":\"0.5rem\",\"height\":\"1rem\",\"margin\":\"0.3rem 0\"},\".bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^=\\\"left\\\"] > .arrow::before\":{\"right\":\"0\",\"border-width\":\"0.5rem 0 0.5rem 0.5rem\",\"border-left-color\":\"rgba(0, 0, 0, 0.25)\"},\".bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^=\\\"left\\\"] > .arrow::after\":{\"right\":\"1px\",\"border-width\":\"0.5rem 0 0.5rem 0.5rem\",\"border-left-color\":\"#fff\"},\".popover-header\":{\"padding\":\"0.5rem 0.75rem\",\"margin-bottom\":\"0\",\"font-size\":\"1rem\",\"background-color\":\"#f7f7f7\",\"border-bottom\":\"1px solid #ebebeb\",\"border-top-left-radius\":\"calc(0.3rem - 1px)\",\"border-top-right-radius\":\"calc(0.3rem - 1px)\"},\".popover-header:empty\":{\"display\":\"none\"},\".popover-body\":{\"padding\":\"0.5rem 0.75rem\",\"color\":\"#212529\"},\".carousel\":{\"position\":\"relative\"},\".carousel.pointer-event\":{\"-ms-touch-action\":\"pan-y\",\"touch-action\":\"pan-y\"},\".carousel-inner\":{\"position\":\"relative\",\"width\":\"100%\",\"overflow\":\"hidden\"},\".carousel-inner::after\":{\"display\":\"block\",\"clear\":\"both\",\"content\":\"\\\"\\\"\"},\".carousel-item\":{\"position\":\"relative\",\"display\":\"none\",\"float\":\"left\",\"width\":\"100%\",\"margin-right\":\"-100%\",\"-webkit-backface-visibility\":\"hidden\",\"backface-visibility\":\"hidden\",\"transition\":\"transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out\"},\".carousel-item.active,.carousel-item-next,.carousel-item-prev\":{\"display\":\"block\"},\".carousel-item-next:not(.carousel-item-left),.active.carousel-item-right\":{\"-webkit-transform\":\"translateX(100%)\",\"transform\":\"translateX(100%)\"},\".carousel-item-prev:not(.carousel-item-right),.active.carousel-item-left\":{\"-webkit-transform\":\"translateX(-100%)\",\"transform\":\"translateX(-100%)\"},\".carousel-fade .carousel-item\":{\"opacity\":\"0\",\"transition-property\":\"opacity\",\"-webkit-transform\":\"none\",\"transform\":\"none\"},\".carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right\":{\"z-index\":\"1\",\"opacity\":\"1\"},\".carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right\":{\"z-index\":\"0\",\"opacity\":\"0\",\"transition\":\"opacity 0s 0.6s\"},\".carousel-control-prev,.carousel-control-next\":{\"position\":\"absolute\",\"top\":\"0\",\"bottom\":\"0\",\"z-index\":\"1\",\"display\":\"flex\",\"-ms-flex-align\":\"center\",\"align-items\":\"center\",\"-ms-flex-pack\":\"center\",\"justify-content\":\"center\",\"width\":\"15%\",\"color\":\"#fff\",\"text-align\":\"center\",\"opacity\":\"0.5\",\"transition\":\"opacity 0.15s ease\"},\".carousel-control-prev:hover, .carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus\":{\"color\":\"#fff\",\"text-decoration\":\"none\",\"outline\":\"0\",\"opacity\":\"0.9\"},\".carousel-control-prev\":{\"left\":\"0\"},\".carousel-control-next\":{\"right\":\"0\"},\".carousel-control-prev-icon,.carousel-control-next-icon\":{\"display\":\"inline-block\",\"width\":\"20px\",\"height\":\"20px\",\"background\":\"no-repeat 50% / 100% 100%\"},\".carousel-control-prev-icon\":{\"background-image\":\"url(\\\"data\"},\".carousel-control-next-icon\":{\"background-image\":\"url(\\\"data\"},\".carousel-indicators\":{\"position\":\"absolute\",\"right\":\"0\",\"bottom\":\"0\",\"left\":\"0\",\"z-index\":\"15\",\"display\":\"flex\",\"-ms-flex-pack\":\"center\",\"justify-content\":\"center\",\"padding-left\":\"0\",\"margin-right\":\"15%\",\"margin-left\":\"15%\",\"list-style\":\"none\"},\".carousel-indicators li\":{\"box-sizing\":\"content-box\",\"-ms-flex\":\"0 1 auto\",\"flex\":\"0 1 auto\",\"width\":\"30px\",\"height\":\"3px\",\"margin-right\":\"3px\",\"margin-left\":\"3px\",\"text-indent\":\"-999px\",\"cursor\":\"pointer\",\"background-color\":\"#fff\",\"background-clip\":\"padding-box\",\"border-top\":\"10px solid transparent\",\"border-bottom\":\"10px solid transparent\",\"opacity\":\".5\",\"transition\":\"opacity 0.6s ease\"},\".carousel-indicators .active\":{\"opacity\":\"1\"},\".carousel-caption\":{\"position\":\"absolute\",\"right\":\"15%\",\"bottom\":\"20px\",\"left\":\"15%\",\"z-index\":\"10\",\"padding-top\":\"20px\",\"padding-bottom\":\"20px\",\"color\":\"#fff\",\"text-align\":\"center\"},\"@-webkit-keyframes spinner-border\":{\"to\":{\"-webkit-transform\":\"rotate(360deg)\",\"transform\":\"rotate(360deg)\"}},\"@keyframes spinner-border\":{\"to\":{\"-webkit-transform\":\"rotate(360deg)\",\"transform\":\"rotate(360deg)\"}},\".spinner-border\":{\"display\":\"inline-block\",\"width\":\"2rem\",\"height\":\"2rem\",\"vertical-align\":\"text-bottom\",\"border\":\"0.25em solid currentColor\",\"border-right-color\":\"transparent\",\"border-radius\":\"50%\",\"-webkit-animation\":\"spinner-border .75s linear infinite\",\"animation\":\"spinner-border .75s linear infinite\"},\".spinner-border-sm\":{\"width\":\"1rem\",\"height\":\"1rem\",\"border-width\":\"0.2em\"},\"@-webkit-keyframes spinner-grow\":{\"0%\":{\"-webkit-transform\":\"scale(0)\",\"transform\":\"scale(0)\"},\"50%\":{\"opacity\":\"1\",\"-webkit-transform\":\"none\",\"transform\":\"none\"}},\"@keyframes spinner-grow\":{\"0%\":{\"-webkit-transform\":\"scale(0)\",\"transform\":\"scale(0)\"},\"50%\":{\"opacity\":\"1\",\"-webkit-transform\":\"none\",\"transform\":\"none\"}},\".spinner-grow\":{\"display\":\"inline-block\",\"width\":\"2rem\",\"height\":\"2rem\",\"vertical-align\":\"text-bottom\",\"background-color\":\"currentColor\",\"border-radius\":\"50%\",\"opacity\":\"0\",\"-webkit-animation\":\"spinner-grow .75s linear infinite\",\"animation\":\"spinner-grow .75s linear infinite\"},\".spinner-grow-sm\":{\"width\":\"1rem\",\"height\":\"1rem\"},\".align-baseline\":{\"vertical-align\":\"baseline !important\"},\".align-top\":{\"vertical-align\":\"top !important\"},\".align-middle\":{\"vertical-align\":\"middle !important\"},\".align-bottom\":{\"vertical-align\":\"bottom !important\"},\".align-text-bottom\":{\"vertical-align\":\"text-bottom !important\"},\".align-text-top\":{\"vertical-align\":\"text-top !important\"},\".bg-primary\":{\"background-color\":\"#007bff !important\"},\"a.bg-primary:hover, a.bg-primary:focus,button.bg-primary:hover,button.bg-primary:focus\":{\"background-color\":\"#0062cc !important\"},\".bg-secondary\":{\"background-color\":\"#6c757d !important\"},\"a.bg-secondary:hover, a.bg-secondary:focus,button.bg-secondary:hover,button.bg-secondary:focus\":{\"background-color\":\"#545b62 !important\"},\".bg-success\":{\"background-color\":\"#28a745 !important\"},\"a.bg-success:hover, a.bg-success:focus,button.bg-success:hover,button.bg-success:focus\":{\"background-color\":\"#1e7e34 !important\"},\".bg-info\":{\"background-color\":\"#17a2b8 !important\"},\"a.bg-info:hover, a.bg-info:focus,button.bg-info:hover,button.bg-info:focus\":{\"background-color\":\"#117a8b !important\"},\".bg-warning\":{\"background-color\":\"#ffc107 !important\"},\"a.bg-warning:hover, a.bg-warning:focus,button.bg-warning:hover,button.bg-warning:focus\":{\"background-color\":\"#d39e00 !important\"},\".bg-danger\":{\"background-color\":\"#dc3545 !important\"},\"a.bg-danger:hover, a.bg-danger:focus,button.bg-danger:hover,button.bg-danger:focus\":{\"background-color\":\"#bd2130 !important\"},\".bg-light\":{\"background-color\":\"#f8f9fa !important\"},\"a.bg-light:hover, a.bg-light:focus,button.bg-light:hover,button.bg-light:focus\":{\"background-color\":\"#dae0e5 !important\"},\".bg-dark\":{\"background-color\":\"#343a40 !important\"},\"a.bg-dark:hover, a.bg-dark:focus,button.bg-dark:hover,button.bg-dark:focus\":{\"background-color\":\"#1d2124 !important\"},\".bg-white\":{\"background-color\":\"#fff !important\"},\".bg-transparent\":{\"background-color\":\"transparent !important\"},\".border\":{\"border\":\"1px solid #dee2e6 !important\"},\".border-top\":{\"border-top\":\"1px solid #dee2e6 !important\"},\".border-right\":{\"border-right\":\"1px solid #dee2e6 !important\"},\".border-bottom\":{\"border-bottom\":\"1px solid #dee2e6 !important\"},\".border-left\":{\"border-left\":\"1px solid #dee2e6 !important\"},\".border-0\":{\"border\":\"0 !important\"},\".border-top-0\":{\"border-top\":\"0 !important\"},\".border-right-0\":{\"border-right\":\"0 !important\"},\".border-bottom-0\":{\"border-bottom\":\"0 !important\"},\".border-left-0\":{\"border-left\":\"0 !important\"},\".border-primary\":{\"border-color\":\"#007bff !important\"},\".border-secondary\":{\"border-color\":\"#6c757d !important\"},\".border-success\":{\"border-color\":\"#28a745 !important\"},\".border-info\":{\"border-color\":\"#17a2b8 !important\"},\".border-warning\":{\"border-color\":\"#ffc107 !important\"},\".border-danger\":{\"border-color\":\"#dc3545 !important\"},\".border-light\":{\"border-color\":\"#f8f9fa !important\"},\".border-dark\":{\"border-color\":\"#343a40 !important\"},\".border-white\":{\"border-color\":\"#fff !important\"},\".rounded-sm\":{\"border-radius\":\"0.2rem !important\"},\".rounded\":{\"border-radius\":\"0.25rem !important\"},\".rounded-top\":{\"border-top-left-radius\":\"0.25rem !important\",\"border-top-right-radius\":\"0.25rem !important\"},\".rounded-right\":{\"border-top-right-radius\":\"0.25rem !important\",\"border-bottom-right-radius\":\"0.25rem !important\"},\".rounded-bottom\":{\"border-bottom-right-radius\":\"0.25rem !important\",\"border-bottom-left-radius\":\"0.25rem !important\"},\".rounded-left\":{\"border-top-left-radius\":\"0.25rem !important\",\"border-bottom-left-radius\":\"0.25rem !important\"},\".rounded-lg\":{\"border-radius\":\"0.3rem !important\"},\".rounded-circle\":{\"border-radius\":\"50% !important\"},\".rounded-pill\":{\"border-radius\":\"50rem !important\"},\".rounded-0\":{\"border-radius\":\"0 !important\"},\".clearfix::after\":{\"display\":\"block\",\"clear\":\"both\",\"content\":\"\\\"\\\"\"},\".d-none\":{\"display\":\"none !important\"},\".d-inline\":{\"display\":\"inline !important\"},\".d-inline-block\":{\"display\":\"inline-block !important\"},\".d-block\":{\"display\":\"block !important\"},\".d-table\":{\"display\":\"table !important\"},\".d-table-row\":{\"display\":\"table-row !important\"},\".d-table-cell\":{\"display\":\"table-cell !important\"},\".d-flex\":{\"display\":\"flex !important\"},\".d-inline-flex\":{\"display\":\"inline-flex !important\"},\"@media print\":{\"*,  *::before,  *::after\":{\"text-shadow\":\"none !important\",\"box-shadow\":\"none !important\"},\"a:not(.btn)\":{\"text-decoration\":\"underline\"},\"abbr[title]::after\":{\"content\":\"\\\" (\\\" attr(title) \\\")\\\"\"},\"pre\":{\"white-space\":\"pre-wrap !important\"},\"pre,  blockquote\":{\"border\":\"1px solid #adb5bd\",\"page-break-inside\":\"avoid\"},\"thead\":{\"display\":\"table-header-group\"},\"tr,  img\":{\"page-break-inside\":\"avoid\"},\"p,  h2,  h3\":{\"orphans\":\"3\",\"widows\":\"3\"},\"h2,  h3\":{\"page-break-after\":\"avoid\"},\"@page\":{\"size\":\"a3\"},\"body\":{\"min-width\":\"992px !important\"},\".container\":{\"min-width\":\"992px !important\"},\".navbar\":{\"display\":\"none\"},\".badge\":{\"border\":\"1px solid #000\"},\".table\":{\"border-collapse\":\"collapse !important\"},\".table td,  .table th\":{\"background-color\":\"#fff !important\"},\".table-bordered th,  .table-bordered td\":{\"border\":\"1px solid #dee2e6 !important\"},\".table-dark\":{\"color\":\"inherit\"},\".table-dark th,  .table-dark td,  .table-dark thead th,  .table-dark tbody + tbody\":{\"border-color\":\"#dee2e6\"},\".table .thead-dark th\":{\"color\":\"inherit\",\"border-color\":\"#dee2e6\"}},\".embed-responsive\":{\"position\":\"relative\",\"display\":\"block\",\"width\":\"100%\",\"padding\":\"0\",\"overflow\":\"hidden\"},\".embed-responsive::before\":{\"display\":\"block\",\"content\":\"\\\"\\\"\"},\".embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video\":{\"position\":\"absolute\",\"top\":\"0\",\"bottom\":\"0\",\"left\":\"0\",\"width\":\"100%\",\"height\":\"100%\",\"border\":\"0\"},\".embed-responsive-21by9::before\":{\"padding-top\":\"42.857143%\"},\".embed-responsive-16by9::before\":{\"padding-top\":\"56.25%\"},\".embed-responsive-4by3::before\":{\"padding-top\":\"75%\"},\".embed-responsive-1by1::before\":{\"padding-top\":\"100%\"},\".flex-row\":{\"-ms-flex-direction\":\"row !important\",\"flex-direction\":\"row !important\"},\".flex-column\":{\"-ms-flex-direction\":\"column !important\",\"flex-direction\":\"column !important\"},\".flex-row-reverse\":{\"-ms-flex-direction\":\"row-reverse !important\",\"flex-direction\":\"row-reverse !important\"},\".flex-column-reverse\":{\"-ms-flex-direction\":\"column-reverse !important\",\"flex-direction\":\"column-reverse !important\"},\".flex-wrap\":{\"-ms-flex-wrap\":\"wrap !important\",\"flex-wrap\":\"wrap !important\"},\".flex-nowrap\":{\"-ms-flex-wrap\":\"nowrap !important\",\"flex-wrap\":\"nowrap !important\"},\".flex-wrap-reverse\":{\"-ms-flex-wrap\":\"wrap-reverse !important\",\"flex-wrap\":\"wrap-reverse !important\"},\".flex-fill\":{\"-ms-flex\":\"1 1 auto !important\",\"flex\":\"1 1 auto !important\"},\".flex-grow-0\":{\"-ms-flex-positive\":\"0 !important\",\"flex-grow\":\"0 !important\"},\".flex-grow-1\":{\"-ms-flex-positive\":\"1 !important\",\"flex-grow\":\"1 !important\"},\".flex-shrink-0\":{\"-ms-flex-negative\":\"0 !important\",\"flex-shrink\":\"0 !important\"},\".flex-shrink-1\":{\"-ms-flex-negative\":\"1 !important\",\"flex-shrink\":\"1 !important\"},\".justify-content-start\":{\"-ms-flex-pack\":\"start !important\",\"justify-content\":\"flex-start !important\"},\".justify-content-end\":{\"-ms-flex-pack\":\"end !important\",\"justify-content\":\"flex-end !important\"},\".justify-content-center\":{\"-ms-flex-pack\":\"center !important\",\"justify-content\":\"center !important\"},\".justify-content-between\":{\"-ms-flex-pack\":\"justify !important\",\"justify-content\":\"space-between !important\"},\".justify-content-around\":{\"-ms-flex-pack\":\"distribute !important\",\"justify-content\":\"space-around !important\"},\".align-items-start\":{\"-ms-flex-align\":\"start !important\",\"align-items\":\"flex-start !important\"},\".align-items-end\":{\"-ms-flex-align\":\"end !important\",\"align-items\":\"flex-end !important\"},\".align-items-center\":{\"-ms-flex-align\":\"center !important\",\"align-items\":\"center !important\"},\".align-items-baseline\":{\"-ms-flex-align\":\"baseline !important\",\"align-items\":\"baseline !important\"},\".align-items-stretch\":{\"-ms-flex-align\":\"stretch !important\",\"align-items\":\"stretch !important\"},\".align-content-start\":{\"-ms-flex-line-pack\":\"start !important\",\"align-content\":\"flex-start !important\"},\".align-content-end\":{\"-ms-flex-line-pack\":\"end !important\",\"align-content\":\"flex-end !important\"},\".align-content-center\":{\"-ms-flex-line-pack\":\"center !important\",\"align-content\":\"center !important\"},\".align-content-between\":{\"-ms-flex-line-pack\":\"justify !important\",\"align-content\":\"space-between !important\"},\".align-content-around\":{\"-ms-flex-line-pack\":\"distribute !important\",\"align-content\":\"space-around !important\"},\".align-content-stretch\":{\"-ms-flex-line-pack\":\"stretch !important\",\"align-content\":\"stretch !important\"},\".align-self-auto\":{\"-ms-flex-item-align\":\"auto !important\",\"align-self\":\"auto !important\"},\".align-self-start\":{\"-ms-flex-item-align\":\"start !important\",\"align-self\":\"flex-start !important\"},\".align-self-end\":{\"-ms-flex-item-align\":\"end !important\",\"align-self\":\"flex-end !important\"},\".align-self-center\":{\"-ms-flex-item-align\":\"center !important\",\"align-self\":\"center !important\"},\".align-self-baseline\":{\"-ms-flex-item-align\":\"baseline !important\",\"align-self\":\"baseline !important\"},\".align-self-stretch\":{\"-ms-flex-item-align\":\"stretch !important\",\"align-self\":\"stretch !important\"},\".float-left\":{\"float\":\"left !important\"},\".float-right\":{\"float\":\"right !important\"},\".float-none\":{\"float\":\"none !important\"},\".user-select-all\":{\"-webkit-user-select\":\"all !important\",\"-moz-user-select\":\"all !important\",\"-ms-user-select\":\"all !important\",\"user-select\":\"all !important\"},\".user-select-auto\":{\"-webkit-user-select\":\"auto !important\",\"-moz-user-select\":\"auto !important\",\"-ms-user-select\":\"auto !important\",\"user-select\":\"auto !important\"},\".user-select-none\":{\"-webkit-user-select\":\"none !important\",\"-moz-user-select\":\"none !important\",\"-ms-user-select\":\"none !important\",\"user-select\":\"none !important\"},\".overflow-auto\":{\"overflow\":\"auto !important\"},\".overflow-hidden\":{\"overflow\":\"hidden !important\"},\".position-static\":{\"position\":\"static !important\"},\".position-relative\":{\"position\":\"relative !important\"},\".position-absolute\":{\"position\":\"absolute !important\"},\".position-fixed\":{\"position\":\"fixed !important\"},\".position-sticky\":{\"position\":\"sticky !important\"},\".fixed-top\":{\"position\":\"fixed\",\"top\":\"0\",\"right\":\"0\",\"left\":\"0\",\"z-index\":\"1030\"},\".fixed-bottom\":{\"position\":\"fixed\",\"right\":\"0\",\"bottom\":\"0\",\"left\":\"0\",\"z-index\":\"1030\"},\"@supports ((position: -webkit-sticky) or (position: sticky))\":{\".sticky-top\":{\"position\":\"sticky\",\"top\":\"0\",\"z-index\":\"1020\"}},\".sr-only\":{\"position\":\"absolute\",\"width\":\"1px\",\"height\":\"1px\",\"padding\":\"0\",\"margin\":\"-1px\",\"overflow\":\"hidden\",\"clip\":\"rect(0, 0, 0, 0)\",\"white-space\":\"nowrap\",\"border\":\"0\"},\".sr-only-focusable:active, .sr-only-focusable:focus\":{\"position\":\"static\",\"width\":\"auto\",\"height\":\"auto\",\"overflow\":\"visible\",\"clip\":\"auto\",\"white-space\":\"normal\"},\".shadow-sm\":{\"box-shadow\":\"0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important\"},\".shadow\":{\"box-shadow\":\"0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important\"},\".shadow-lg\":{\"box-shadow\":\"0 1rem 3rem rgba(0, 0, 0, 0.175) !important\"},\".shadow-none\":{\"box-shadow\":\"none !important\"},\".w-25\":{\"width\":\"25% !important\"},\".w-50\":{\"width\":\"50% !important\"},\".w-75\":{\"width\":\"75% !important\"},\".w-100\":{\"width\":\"100% !important\"},\".w-auto\":{\"width\":\"auto !important\"},\".h-25\":{\"height\":\"25% !important\"},\".h-50\":{\"height\":\"50% !important\"},\".h-75\":{\"height\":\"75% !important\"},\".h-100\":{\"height\":\"100% !important\"},\".h-auto\":{\"height\":\"auto !important\"},\".mw-100\":{\"max-width\":\"100% !important\"},\".mh-100\":{\"max-height\":\"100% !important\"},\".min-vw-100\":{\"min-width\":\"100vw !important\"},\".min-vh-100\":{\"min-height\":\"100vh !important\"},\".vw-100\":{\"width\":\"100vw !important\"},\".vh-100\":{\"height\":\"100vh !important\"},\".m-0\":{\"margin\":\"0 !important\"},\".mt-0,.my-0\":{\"margin-top\":\"0 !important\"},\".mr-0,.mx-0\":{\"margin-right\":\"0 !important\"},\".mb-0,.my-0\":{\"margin-bottom\":\"0 !important\"},\".ml-0,.mx-0\":{\"margin-left\":\"0 !important\"},\".m-1\":{\"margin\":\"0.25rem !important\"},\".mt-1,.my-1\":{\"margin-top\":\"0.25rem !important\"},\".mr-1,.mx-1\":{\"margin-right\":\"0.25rem !important\"},\".mb-1,.my-1\":{\"margin-bottom\":\"0.25rem !important\"},\".ml-1,.mx-1\":{\"margin-left\":\"0.25rem !important\"},\".m-2\":{\"margin\":\"0.5rem !important\"},\".mt-2,.my-2\":{\"margin-top\":\"0.5rem !important\"},\".mr-2,.mx-2\":{\"margin-right\":\"0.5rem !important\"},\".mb-2,.my-2\":{\"margin-bottom\":\"0.5rem !important\"},\".ml-2,.mx-2\":{\"margin-left\":\"0.5rem !important\"},\".m-3\":{\"margin\":\"1rem !important\"},\".mt-3,.my-3\":{\"margin-top\":\"1rem !important\"},\".mr-3,.mx-3\":{\"margin-right\":\"1rem !important\"},\".mb-3,.my-3\":{\"margin-bottom\":\"1rem !important\"},\".ml-3,.mx-3\":{\"margin-left\":\"1rem !important\"},\".m-4\":{\"margin\":\"1.5rem !important\"},\".mt-4,.my-4\":{\"margin-top\":\"1.5rem !important\"},\".mr-4,.mx-4\":{\"margin-right\":\"1.5rem !important\"},\".mb-4,.my-4\":{\"margin-bottom\":\"1.5rem !important\"},\".ml-4,.mx-4\":{\"margin-left\":\"1.5rem !important\"},\".m-5\":{\"margin\":\"3rem !important\"},\".mt-5,.my-5\":{\"margin-top\":\"3rem !important\"},\".mr-5,.mx-5\":{\"margin-right\":\"3rem !important\"},\".mb-5,.my-5\":{\"margin-bottom\":\"3rem !important\"},\".ml-5,.mx-5\":{\"margin-left\":\"3rem !important\"},\".p-0\":{\"padding\":\"0 !important\"},\".pt-0,.py-0\":{\"padding-top\":\"0 !important\"},\".pr-0,.px-0\":{\"padding-right\":\"0 !important\"},\".pb-0,.py-0\":{\"padding-bottom\":\"0 !important\"},\".pl-0,.px-0\":{\"padding-left\":\"0 !important\"},\".p-1\":{\"padding\":\"0.25rem !important\"},\".pt-1,.py-1\":{\"padding-top\":\"0.25rem !important\"},\".pr-1,.px-1\":{\"padding-right\":\"0.25rem !important\"},\".pb-1,.py-1\":{\"padding-bottom\":\"0.25rem !important\"},\".pl-1,.px-1\":{\"padding-left\":\"0.25rem !important\"},\".p-2\":{\"padding\":\"0.5rem !important\"},\".pt-2,.py-2\":{\"padding-top\":\"0.5rem !important\"},\".pr-2,.px-2\":{\"padding-right\":\"0.5rem !important\"},\".pb-2,.py-2\":{\"padding-bottom\":\"0.5rem !important\"},\".pl-2,.px-2\":{\"padding-left\":\"0.5rem !important\"},\".p-3\":{\"padding\":\"1rem !important\"},\".pt-3,.py-3\":{\"padding-top\":\"1rem !important\"},\".pr-3,.px-3\":{\"padding-right\":\"1rem !important\"},\".pb-3,.py-3\":{\"padding-bottom\":\"1rem !important\"},\".pl-3,.px-3\":{\"padding-left\":\"1rem !important\"},\".p-4\":{\"padding\":\"1.5rem !important\"},\".pt-4,.py-4\":{\"padding-top\":\"1.5rem !important\"},\".pr-4,.px-4\":{\"padding-right\":\"1.5rem !important\"},\".pb-4,.py-4\":{\"padding-bottom\":\"1.5rem !important\"},\".pl-4,.px-4\":{\"padding-left\":\"1.5rem !important\"},\".p-5\":{\"padding\":\"3rem !important\"},\".pt-5,.py-5\":{\"padding-top\":\"3rem !important\"},\".pr-5,.px-5\":{\"padding-right\":\"3rem !important\"},\".pb-5,.py-5\":{\"padding-bottom\":\"3rem !important\"},\".pl-5,.px-5\":{\"padding-left\":\"3rem !important\"},\".m-n1\":{\"margin\":\"-0.25rem !important\"},\".mt-n1,.my-n1\":{\"margin-top\":\"-0.25rem !important\"},\".mr-n1,.mx-n1\":{\"margin-right\":\"-0.25rem !important\"},\".mb-n1,.my-n1\":{\"margin-bottom\":\"-0.25rem !important\"},\".ml-n1,.mx-n1\":{\"margin-left\":\"-0.25rem !important\"},\".m-n2\":{\"margin\":\"-0.5rem !important\"},\".mt-n2,.my-n2\":{\"margin-top\":\"-0.5rem !important\"},\".mr-n2,.mx-n2\":{\"margin-right\":\"-0.5rem !important\"},\".mb-n2,.my-n2\":{\"margin-bottom\":\"-0.5rem !important\"},\".ml-n2,.mx-n2\":{\"margin-left\":\"-0.5rem !important\"},\".m-n3\":{\"margin\":\"-1rem !important\"},\".mt-n3,.my-n3\":{\"margin-top\":\"-1rem !important\"},\".mr-n3,.mx-n3\":{\"margin-right\":\"-1rem !important\"},\".mb-n3,.my-n3\":{\"margin-bottom\":\"-1rem !important\"},\".ml-n3,.mx-n3\":{\"margin-left\":\"-1rem !important\"},\".m-n4\":{\"margin\":\"-1.5rem !important\"},\".mt-n4,.my-n4\":{\"margin-top\":\"-1.5rem !important\"},\".mr-n4,.mx-n4\":{\"margin-right\":\"-1.5rem !important\"},\".mb-n4,.my-n4\":{\"margin-bottom\":\"-1.5rem !important\"},\".ml-n4,.mx-n4\":{\"margin-left\":\"-1.5rem !important\"},\".m-n5\":{\"margin\":\"-3rem !important\"},\".mt-n5,.my-n5\":{\"margin-top\":\"-3rem !important\"},\".mr-n5,.mx-n5\":{\"margin-right\":\"-3rem !important\"},\".mb-n5,.my-n5\":{\"margin-bottom\":\"-3rem !important\"},\".ml-n5,.mx-n5\":{\"margin-left\":\"-3rem !important\"},\".m-auto\":{\"margin\":\"auto !important\"},\".mt-auto,.my-auto\":{\"margin-top\":\"auto !important\"},\".mr-auto,.mx-auto\":{\"margin-right\":\"auto !important\"},\".mb-auto,.my-auto\":{\"margin-bottom\":\"auto !important\"},\".ml-auto,.mx-auto\":{\"margin-left\":\"auto !important\"},\".stretched-link::after\":{\"position\":\"absolute\",\"top\":\"0\",\"right\":\"0\",\"bottom\":\"0\",\"left\":\"0\",\"z-index\":\"1\",\"pointer-events\":\"auto\",\"content\":\"\\\"\\\"\",\"background-color\":\"rgba(0, 0, 0, 0)\"},\".text-monospace\":{\"font-family\":\"SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace !important\"},\".text-justify\":{\"text-align\":\"justify !important\"},\".text-wrap\":{\"white-space\":\"normal !important\"},\".text-nowrap\":{\"white-space\":\"nowrap !important\"},\".text-truncate\":{\"overflow\":\"hidden\",\"text-overflow\":\"ellipsis\",\"white-space\":\"nowrap\"},\".text-left\":{\"text-align\":\"left !important\"},\".text-right\":{\"text-align\":\"right !important\"},\".text-center\":{\"text-align\":\"center !important\"},\".text-lowercase\":{\"text-transform\":\"lowercase !important\"},\".text-uppercase\":{\"text-transform\":\"uppercase !important\"},\".text-capitalize\":{\"text-transform\":\"capitalize !important\"},\".font-weight-light\":{\"font-weight\":\"300 !important\"},\".font-weight-lighter\":{\"font-weight\":\"lighter !important\"},\".font-weight-normal\":{\"font-weight\":\"400 !important\"},\".font-weight-bold\":{\"font-weight\":\"700 !important\"},\".font-weight-bolder\":{\"font-weight\":\"bolder !important\"},\".font-italic\":{\"font-style\":\"italic !important\"},\".text-white\":{\"color\":\"#fff !important\"},\".text-primary\":{\"color\":\"#007bff !important\"},\"a.text-primary:hover, a.text-primary:focus\":{\"color\":\"#0056b3 !important\"},\".text-secondary\":{\"color\":\"#6c757d !important\"},\"a.text-secondary:hover, a.text-secondary:focus\":{\"color\":\"#494f54 !important\"},\".text-success\":{\"color\":\"#28a745 !important\"},\"a.text-success:hover, a.text-success:focus\":{\"color\":\"#19692c !important\"},\".text-info\":{\"color\":\"#17a2b8 !important\"},\"a.text-info:hover, a.text-info:focus\":{\"color\":\"#0f6674 !important\"},\".text-warning\":{\"color\":\"#ffc107 !important\"},\"a.text-warning:hover, a.text-warning:focus\":{\"color\":\"#ba8b00 !important\"},\".text-danger\":{\"color\":\"#dc3545 !important\"},\"a.text-danger:hover, a.text-danger:focus\":{\"color\":\"#a71d2a !important\"},\".text-light\":{\"color\":\"#f8f9fa !important\"},\"a.text-light:hover, a.text-light:focus\":{\"color\":\"#cbd3da !important\"},\".text-dark\":{\"color\":\"#343a40 !important\"},\"a.text-dark:hover, a.text-dark:focus\":{\"color\":\"#121416 !important\"},\".text-body\":{\"color\":\"#212529 !important\"},\".text-muted\":{\"color\":\"#6c757d !important\"},\".text-black-50\":{\"color\":\"rgba(0, 0, 0, 0.5) !important\"},\".text-white-50\":{\"color\":\"rgba(255, 255, 255, 0.5) !important\"},\".text-hide\":{\"font\":\"0/0 a\",\"color\":\"transparent\",\"text-shadow\":\"none\",\"background-color\":\"transparent\",\"border\":\"0\"},\".text-decoration-none\":{\"text-decoration\":\"none !important\"},\".text-break\":{\"word-break\":\"break-word !important\",\"overflow-wrap\":\"break-word !important\"},\".text-reset\":{\"color\":\"inherit !important\"},\".visible\":{\"visibility\":\"visible !important\"},\".invisible\":{\"visibility\":\"hidden !important\"}},\"icons\":{\"123\":\"123\",\"activity\":\"activity\",\"alarm\":\"alarm\",\"alarmFill\":\"alarm-fill\",\"alignBottom\":\"align-bottom\",\"alignCenter\":\"align-center\",\"alignEnd\":\"align-end\",\"alignMiddle\":\"align-middle\",\"alignStart\":\"align-start\",\"alignTop\":\"align-top\",\"alt\":\"alt\",\"app\":\"app\",\"appIndicator\":\"app-indicator\",\"apple\":\"apple\",\"archive\":\"archive\",\"archiveFill\":\"archive-fill\",\"arrow90degDown\":\"arrow-90deg-down\",\"arrow90degLeft\":\"arrow-90deg-left\",\"arrow90degRight\":\"arrow-90deg-right\",\"arrow90degUp\":\"arrow-90deg-up\",\"arrowBarDown\":\"arrow-bar-down\",\"arrowBarLeft\":\"arrow-bar-left\",\"arrowBarRight\":\"arrow-bar-right\",\"arrowBarUp\":\"arrow-bar-up\",\"arrowClockwise\":\"arrow-clockwise\",\"arrowCounterclockwise\":\"arrow-counterclockwise\",\"arrowDown\":\"arrow-down\",\"arrowDownCircle\":\"arrow-down-circle\",\"arrowDownCircleFill\":\"arrow-down-circle-fill\",\"arrowDownLeftCircle\":\"arrow-down-left-circle\",\"arrowDownLeftCircleFill\":\"arrow-down-left-circle-fill\",\"arrowDownLeftSquare\":\"arrow-down-left-square\",\"arrowDownLeftSquareFill\":\"arrow-down-left-square-fill\",\"arrowDownRightCircle\":\"arrow-down-right-circle\",\"arrowDownRightCircleFill\":\"arrow-down-right-circle-fill\",\"arrowDownRightSquare\":\"arrow-down-right-square\",\"arrowDownRightSquareFill\":\"arrow-down-right-square-fill\",\"arrowDownSquare\":\"arrow-down-square\",\"arrowDownSquareFill\":\"arrow-down-square-fill\",\"arrowDownLeft\":\"arrow-down-left\",\"arrowDownRight\":\"arrow-down-right\",\"arrowDownShort\":\"arrow-down-short\",\"arrowDownUp\":\"arrow-down-up\",\"arrowLeft\":\"arrow-left\",\"arrowLeftCircle\":\"arrow-left-circle\",\"arrowLeftCircleFill\":\"arrow-left-circle-fill\",\"arrowLeftSquare\":\"arrow-left-square\",\"arrowLeftSquareFill\":\"arrow-left-square-fill\",\"arrowLeftRight\":\"arrow-left-right\",\"arrowLeftShort\":\"arrow-left-short\",\"arrowRepeat\":\"arrow-repeat\",\"arrowReturnLeft\":\"arrow-return-left\",\"arrowReturnRight\":\"arrow-return-right\",\"arrowRight\":\"arrow-right\",\"arrowRightCircle\":\"arrow-right-circle\",\"arrowRightCircleFill\":\"arrow-right-circle-fill\",\"arrowRightSquare\":\"arrow-right-square\",\"arrowRightSquareFill\":\"arrow-right-square-fill\",\"arrowRightShort\":\"arrow-right-short\",\"arrowThroughHeart\":\"arrow-through-heart\",\"arrowThroughHeartFill\":\"arrow-through-heart-fill\",\"arrowUp\":\"arrow-up\",\"arrowUpCircle\":\"arrow-up-circle\",\"arrowUpCircleFill\":\"arrow-up-circle-fill\",\"arrowUpLeftCircle\":\"arrow-up-left-circle\",\"arrowUpLeftCircleFill\":\"arrow-up-left-circle-fill\",\"arrowUpLeftSquare\":\"arrow-up-left-square\",\"arrowUpLeftSquareFill\":\"arrow-up-left-square-fill\",\"arrowUpRightCircle\":\"arrow-up-right-circle\",\"arrowUpRightCircleFill\":\"arrow-up-right-circle-fill\",\"arrowUpRightSquare\":\"arrow-up-right-square\",\"arrowUpRightSquareFill\":\"arrow-up-right-square-fill\",\"arrowUpSquare\":\"arrow-up-square\",\"arrowUpSquareFill\":\"arrow-up-square-fill\",\"arrowUpLeft\":\"arrow-up-left\",\"arrowUpRight\":\"arrow-up-right\",\"arrowUpShort\":\"arrow-up-short\",\"arrowsAngleContract\":\"arrows-angle-contract\",\"arrowsAngleExpand\":\"arrows-angle-expand\",\"arrowsCollapse\":\"arrows-collapse\",\"arrowsExpand\":\"arrows-expand\",\"arrowsFullscreen\":\"arrows-fullscreen\",\"arrowsMove\":\"arrows-move\",\"aspectRatio\":\"aspect-ratio\",\"aspectRatioFill\":\"aspect-ratio-fill\",\"asterisk\":\"asterisk\",\"at\":\"at\",\"award\":\"award\",\"awardFill\":\"award-fill\",\"back\":\"back\",\"backspace\":\"backspace\",\"backspaceFill\":\"backspace-fill\",\"backspaceReverse\":\"backspace-reverse\",\"backspaceReverseFill\":\"backspace-reverse-fill\",\"badge3d\":\"badge-3d\",\"badge3dFill\":\"badge-3d-fill\",\"badge4k\":\"badge-4k\",\"badge4kFill\":\"badge-4k-fill\",\"badge8k\":\"badge-8k\",\"badge8kFill\":\"badge-8k-fill\",\"badgeAd\":\"badge-ad\",\"badgeAdFill\":\"badge-ad-fill\",\"badgeAr\":\"badge-ar\",\"badgeArFill\":\"badge-ar-fill\",\"badgeCc\":\"badge-cc\",\"badgeCcFill\":\"badge-cc-fill\",\"badgeHd\":\"badge-hd\",\"badgeHdFill\":\"badge-hd-fill\",\"badgeSd\":\"badge-sd\",\"badgeSdFill\":\"badge-sd-fill\",\"badgeTm\":\"badge-tm\",\"badgeTmFill\":\"badge-tm-fill\",\"badgeVo\":\"badge-vo\",\"badgeVoFill\":\"badge-vo-fill\",\"badgeVr\":\"badge-vr\",\"badgeVrFill\":\"badge-vr-fill\",\"badgeWc\":\"badge-wc\",\"badgeWcFill\":\"badge-wc-fill\",\"bag\":\"bag\",\"bagCheck\":\"bag-check\",\"bagCheckFill\":\"bag-check-fill\",\"bagDash\":\"bag-dash\",\"bagDashFill\":\"bag-dash-fill\",\"bagFill\":\"bag-fill\",\"bagHeart\":\"bag-heart\",\"bagHeartFill\":\"bag-heart-fill\",\"bagPlus\":\"bag-plus\",\"bagPlusFill\":\"bag-plus-fill\",\"bagX\":\"bag-x\",\"bagXFill\":\"bag-x-fill\",\"balloon\":\"balloon\",\"balloonFill\":\"balloon-fill\",\"balloonHeart\":\"balloon-heart\",\"balloonHeartFill\":\"balloon-heart-fill\",\"bandaid\":\"bandaid\",\"bandaidFill\":\"bandaid-fill\",\"bank\":\"bank\",\"bank2\":\"bank2\",\"barChart\":\"bar-chart\",\"barChartFill\":\"bar-chart-fill\",\"barChartLine\":\"bar-chart-line\",\"barChartLineFill\":\"bar-chart-line-fill\",\"barChartSteps\":\"bar-chart-steps\",\"basket\":\"basket\",\"basketFill\":\"basket-fill\",\"basket2\":\"basket2\",\"basket2Fill\":\"basket2-fill\",\"basket3\":\"basket3\",\"basket3Fill\":\"basket3-fill\",\"battery\":\"battery\",\"batteryCharging\":\"battery-charging\",\"batteryFull\":\"battery-full\",\"batteryHalf\":\"battery-half\",\"behance\":\"behance\",\"bell\":\"bell\",\"bellFill\":\"bell-fill\",\"bellSlash\":\"bell-slash\",\"bellSlashFill\":\"bell-slash-fill\",\"bezier\":\"bezier\",\"bezier2\":\"bezier2\",\"bicycle\":\"bicycle\",\"binoculars\":\"binoculars\",\"binocularsFill\":\"binoculars-fill\",\"blockquoteLeft\":\"blockquote-left\",\"blockquoteRight\":\"blockquote-right\",\"bluetooth\":\"bluetooth\",\"bodyText\":\"body-text\",\"book\":\"book\",\"bookFill\":\"book-fill\",\"bookHalf\":\"book-half\",\"bookmark\":\"bookmark\",\"bookmarkCheck\":\"bookmark-check\",\"bookmarkCheckFill\":\"bookmark-check-fill\",\"bookmarkDash\":\"bookmark-dash\",\"bookmarkDashFill\":\"bookmark-dash-fill\",\"bookmarkFill\":\"bookmark-fill\",\"bookmarkHeart\":\"bookmark-heart\",\"bookmarkHeartFill\":\"bookmark-heart-fill\",\"bookmarkPlus\":\"bookmark-plus\",\"bookmarkPlusFill\":\"bookmark-plus-fill\",\"bookmarkStar\":\"bookmark-star\",\"bookmarkStarFill\":\"bookmark-star-fill\",\"bookmarkX\":\"bookmark-x\",\"bookmarkXFill\":\"bookmark-x-fill\",\"bookmarks\":\"bookmarks\",\"bookmarksFill\":\"bookmarks-fill\",\"bookshelf\":\"bookshelf\",\"boombox\":\"boombox\",\"boomboxFill\":\"boombox-fill\",\"bootstrap\":\"bootstrap\",\"bootstrapFill\":\"bootstrap-fill\",\"bootstrapReboot\":\"bootstrap-reboot\",\"border\":\"border\",\"borderAll\":\"border-all\",\"borderBottom\":\"border-bottom\",\"borderCenter\":\"border-center\",\"borderInner\":\"border-inner\",\"borderLeft\":\"border-left\",\"borderMiddle\":\"border-middle\",\"borderOuter\":\"border-outer\",\"borderRight\":\"border-right\",\"borderStyle\":\"border-style\",\"borderTop\":\"border-top\",\"borderWidth\":\"border-width\",\"boundingBox\":\"bounding-box\",\"boundingBoxCircles\":\"bounding-box-circles\",\"box\":\"box\",\"boxArrowDownLeft\":\"box-arrow-down-left\",\"boxArrowDownRight\":\"box-arrow-down-right\",\"boxArrowDown\":\"box-arrow-down\",\"boxArrowInDown\":\"box-arrow-in-down\",\"boxArrowInDownLeft\":\"box-arrow-in-down-left\",\"boxArrowInDownRight\":\"box-arrow-in-down-right\",\"boxArrowInLeft\":\"box-arrow-in-left\",\"boxArrowInRight\":\"box-arrow-in-right\",\"boxArrowInUp\":\"box-arrow-in-up\",\"boxArrowInUpLeft\":\"box-arrow-in-up-left\",\"boxArrowInUpRight\":\"box-arrow-in-up-right\",\"boxArrowLeft\":\"box-arrow-left\",\"boxArrowRight\":\"box-arrow-right\",\"boxArrowUp\":\"box-arrow-up\",\"boxArrowUpLeft\":\"box-arrow-up-left\",\"boxArrowUpRight\":\"box-arrow-up-right\",\"boxSeam\":\"box-seam\",\"box2\":\"box2\",\"box2Fill\":\"box2-fill\",\"box2Heart\":\"box2-heart\",\"box2HeartFill\":\"box2-heart-fill\",\"boxes\":\"boxes\",\"braces\":\"braces\",\"bracesAsterisk\":\"braces-asterisk\",\"bricks\":\"bricks\",\"briefcase\":\"briefcase\",\"briefcaseFill\":\"briefcase-fill\",\"brightnessAltHigh\":\"brightness-alt-high\",\"brightnessAltHighFill\":\"brightness-alt-high-fill\",\"brightnessAltLow\":\"brightness-alt-low\",\"brightnessAltLowFill\":\"brightness-alt-low-fill\",\"brightnessHigh\":\"brightness-high\",\"brightnessHighFill\":\"brightness-high-fill\",\"brightnessLow\":\"brightness-low\",\"brightnessLowFill\":\"brightness-low-fill\",\"broadcast\":\"broadcast\",\"broadcastPin\":\"broadcast-pin\",\"brush\":\"brush\",\"brushFill\":\"brush-fill\",\"bucket\":\"bucket\",\"bucketFill\":\"bucket-fill\",\"bug\":\"bug\",\"bugFill\":\"bug-fill\",\"building\":\"building\",\"bullseye\":\"bullseye\",\"calculator\":\"calculator\",\"calculatorFill\":\"calculator-fill\",\"calendar\":\"calendar\",\"calendarCheck\":\"calendar-check\",\"calendarCheckFill\":\"calendar-check-fill\",\"calendarDate\":\"calendar-date\",\"calendarDateFill\":\"calendar-date-fill\",\"calendarDay\":\"calendar-day\",\"calendarDayFill\":\"calendar-day-fill\",\"calendarEvent\":\"calendar-event\",\"calendarEventFill\":\"calendar-event-fill\",\"calendarFill\":\"calendar-fill\",\"calendarHeart\":\"calendar-heart\",\"calendarHeartFill\":\"calendar-heart-fill\",\"calendarMinus\":\"calendar-minus\",\"calendarMinusFill\":\"calendar-minus-fill\",\"calendarMonth\":\"calendar-month\",\"calendarMonthFill\":\"calendar-month-fill\",\"calendarPlus\":\"calendar-plus\",\"calendarPlusFill\":\"calendar-plus-fill\",\"calendarRange\":\"calendar-range\",\"calendarRangeFill\":\"calendar-range-fill\",\"calendarWeek\":\"calendar-week\",\"calendarWeekFill\":\"calendar-week-fill\",\"calendarX\":\"calendar-x\",\"calendarXFill\":\"calendar-x-fill\",\"calendar2\":\"calendar2\",\"calendar2Check\":\"calendar2-check\",\"calendar2CheckFill\":\"calendar2-check-fill\",\"calendar2Date\":\"calendar2-date\",\"calendar2DateFill\":\"calendar2-date-fill\",\"calendar2Day\":\"calendar2-day\",\"calendar2DayFill\":\"calendar2-day-fill\",\"calendar2Event\":\"calendar2-event\",\"calendar2EventFill\":\"calendar2-event-fill\",\"calendar2Fill\":\"calendar2-fill\",\"calendar2Heart\":\"calendar2-heart\",\"calendar2HeartFill\":\"calendar2-heart-fill\",\"calendar2Minus\":\"calendar2-minus\",\"calendar2MinusFill\":\"calendar2-minus-fill\",\"calendar2Month\":\"calendar2-month\",\"calendar2MonthFill\":\"calendar2-month-fill\",\"calendar2Plus\":\"calendar2-plus\",\"calendar2PlusFill\":\"calendar2-plus-fill\",\"calendar2Range\":\"calendar2-range\",\"calendar2RangeFill\":\"calendar2-range-fill\",\"calendar2Week\":\"calendar2-week\",\"calendar2WeekFill\":\"calendar2-week-fill\",\"calendar2X\":\"calendar2-x\",\"calendar2XFill\":\"calendar2-x-fill\",\"calendar3\":\"calendar3\",\"calendar3Event\":\"calendar3-event\",\"calendar3EventFill\":\"calendar3-event-fill\",\"calendar3Fill\":\"calendar3-fill\",\"calendar3Range\":\"calendar3-range\",\"calendar3RangeFill\":\"calendar3-range-fill\",\"calendar3Week\":\"calendar3-week\",\"calendar3WeekFill\":\"calendar3-week-fill\",\"calendar4\":\"calendar4\",\"calendar4Event\":\"calendar4-event\",\"calendar4Range\":\"calendar4-range\",\"calendar4Week\":\"calendar4-week\",\"camera\":\"camera\",\"camera2\":\"camera2\",\"cameraFill\":\"camera-fill\",\"cameraReels\":\"camera-reels\",\"cameraReelsFill\":\"camera-reels-fill\",\"cameraVideo\":\"camera-video\",\"cameraVideoFill\":\"camera-video-fill\",\"cameraVideoOff\":\"camera-video-off\",\"cameraVideoOffFill\":\"camera-video-off-fill\",\"capslock\":\"capslock\",\"capslockFill\":\"capslock-fill\",\"cardChecklist\":\"card-checklist\",\"cardHeading\":\"card-heading\",\"cardImage\":\"card-image\",\"cardList\":\"card-list\",\"cardText\":\"card-text\",\"caretDown\":\"caret-down\",\"caretDownFill\":\"caret-down-fill\",\"caretDownSquare\":\"caret-down-square\",\"caretDownSquareFill\":\"caret-down-square-fill\",\"caretLeft\":\"caret-left\",\"caretLeftFill\":\"caret-left-fill\",\"caretLeftSquare\":\"caret-left-square\",\"caretLeftSquareFill\":\"caret-left-square-fill\",\"caretRight\":\"caret-right\",\"caretRightFill\":\"caret-right-fill\",\"caretRightSquare\":\"caret-right-square\",\"caretRightSquareFill\":\"caret-right-square-fill\",\"caretUp\":\"caret-up\",\"caretUpFill\":\"caret-up-fill\",\"caretUpSquare\":\"caret-up-square\",\"caretUpSquareFill\":\"caret-up-square-fill\",\"cart\":\"cart\",\"cartCheck\":\"cart-check\",\"cartCheckFill\":\"cart-check-fill\",\"cartDash\":\"cart-dash\",\"cartDashFill\":\"cart-dash-fill\",\"cartFill\":\"cart-fill\",\"cartPlus\":\"cart-plus\",\"cartPlusFill\":\"cart-plus-fill\",\"cartX\":\"cart-x\",\"cartXFill\":\"cart-x-fill\",\"cart2\":\"cart2\",\"cart3\":\"cart3\",\"cart4\":\"cart4\",\"cash\":\"cash\",\"cashCoin\":\"cash-coin\",\"cashStack\":\"cash-stack\",\"cast\":\"cast\",\"chat\":\"chat\",\"chatDots\":\"chat-dots\",\"chatDotsFill\":\"chat-dots-fill\",\"chatFill\":\"chat-fill\",\"chatHeart\":\"chat-heart\",\"chatHeartFill\":\"chat-heart-fill\",\"chatLeft\":\"chat-left\",\"chatLeftDots\":\"chat-left-dots\",\"chatLeftDotsFill\":\"chat-left-dots-fill\",\"chatLeftFill\":\"chat-left-fill\",\"chatLeftHeart\":\"chat-left-heart\",\"chatLeftHeartFill\":\"chat-left-heart-fill\",\"chatLeftQuote\":\"chat-left-quote\",\"chatLeftQuoteFill\":\"chat-left-quote-fill\",\"chatLeftText\":\"chat-left-text\",\"chatLeftTextFill\":\"chat-left-text-fill\",\"chatQuote\":\"chat-quote\",\"chatQuoteFill\":\"chat-quote-fill\",\"chatRight\":\"chat-right\",\"chatRightDots\":\"chat-right-dots\",\"chatRightDotsFill\":\"chat-right-dots-fill\",\"chatRightFill\":\"chat-right-fill\",\"chatRightHeart\":\"chat-right-heart\",\"chatRightHeartFill\":\"chat-right-heart-fill\",\"chatRightQuote\":\"chat-right-quote\",\"chatRightQuoteFill\":\"chat-right-quote-fill\",\"chatRightText\":\"chat-right-text\",\"chatRightTextFill\":\"chat-right-text-fill\",\"chatSquare\":\"chat-square\",\"chatSquareDots\":\"chat-square-dots\",\"chatSquareDotsFill\":\"chat-square-dots-fill\",\"chatSquareFill\":\"chat-square-fill\",\"chatSquareHeart\":\"chat-square-heart\",\"chatSquareHeartFill\":\"chat-square-heart-fill\",\"chatSquareQuote\":\"chat-square-quote\",\"chatSquareQuoteFill\":\"chat-square-quote-fill\",\"chatSquareText\":\"chat-square-text\",\"chatSquareTextFill\":\"chat-square-text-fill\",\"chatText\":\"chat-text\",\"chatTextFill\":\"chat-text-fill\",\"check\":\"check\",\"checkAll\":\"check-all\",\"checkCircle\":\"check-circle\",\"checkCircleFill\":\"check-circle-fill\",\"checkLg\":\"check-lg\",\"checkSquare\":\"check-square\",\"checkSquareFill\":\"check-square-fill\",\"check2\":\"check2\",\"check2All\":\"check2-all\",\"check2Circle\":\"check2-circle\",\"check2Square\":\"check2-square\",\"chevronBarContract\":\"chevron-bar-contract\",\"chevronBarDown\":\"chevron-bar-down\",\"chevronBarExpand\":\"chevron-bar-expand\",\"chevronBarLeft\":\"chevron-bar-left\",\"chevronBarRight\":\"chevron-bar-right\",\"chevronBarUp\":\"chevron-bar-up\",\"chevronCompactDown\":\"chevron-compact-down\",\"chevronCompactLeft\":\"chevron-compact-left\",\"chevronCompactRight\":\"chevron-compact-right\",\"chevronCompactUp\":\"chevron-compact-up\",\"chevronContract\":\"chevron-contract\",\"chevronDoubleDown\":\"chevron-double-down\",\"chevronDoubleLeft\":\"chevron-double-left\",\"chevronDoubleRight\":\"chevron-double-right\",\"chevronDoubleUp\":\"chevron-double-up\",\"chevronDown\":\"chevron-down\",\"chevronExpand\":\"chevron-expand\",\"chevronLeft\":\"chevron-left\",\"chevronRight\":\"chevron-right\",\"chevronUp\":\"chevron-up\",\"circle\":\"circle\",\"circleFill\":\"circle-fill\",\"circleHalf\":\"circle-half\",\"slashCircle\":\"slash-circle\",\"circleSquare\":\"circle-square\",\"clipboard\":\"clipboard\",\"clipboardCheck\":\"clipboard-check\",\"clipboardCheckFill\":\"clipboard-check-fill\",\"clipboardData\":\"clipboard-data\",\"clipboardDataFill\":\"clipboard-data-fill\",\"clipboardFill\":\"clipboard-fill\",\"clipboardHeart\":\"clipboard-heart\",\"clipboardHeartFill\":\"clipboard-heart-fill\",\"clipboardMinus\":\"clipboard-minus\",\"clipboardMinusFill\":\"clipboard-minus-fill\",\"clipboardPlus\":\"clipboard-plus\",\"clipboardPlusFill\":\"clipboard-plus-fill\",\"clipboardPulse\":\"clipboard-pulse\",\"clipboardX\":\"clipboard-x\",\"clipboardXFill\":\"clipboard-x-fill\",\"clipboard2\":\"clipboard2\",\"clipboard2Check\":\"clipboard2-check\",\"clipboard2CheckFill\":\"clipboard2-check-fill\",\"clipboard2Data\":\"clipboard2-data\",\"clipboard2DataFill\":\"clipboard2-data-fill\",\"clipboard2Fill\":\"clipboard2-fill\",\"clipboard2Heart\":\"clipboard2-heart\",\"clipboard2HeartFill\":\"clipboard2-heart-fill\",\"clipboard2Minus\":\"clipboard2-minus\",\"clipboard2MinusFill\":\"clipboard2-minus-fill\",\"clipboard2Plus\":\"clipboard2-plus\",\"clipboard2PlusFill\":\"clipboard2-plus-fill\",\"clipboard2Pulse\":\"clipboard2-pulse\",\"clipboard2PulseFill\":\"clipboard2-pulse-fill\",\"clipboard2X\":\"clipboard2-x\",\"clipboard2XFill\":\"clipboard2-x-fill\",\"clock\":\"clock\",\"clockFill\":\"clock-fill\",\"clockHistory\":\"clock-history\",\"cloud\":\"cloud\",\"cloudArrowDown\":\"cloud-arrow-down\",\"cloudArrowDownFill\":\"cloud-arrow-down-fill\",\"cloudArrowUp\":\"cloud-arrow-up\",\"cloudArrowUpFill\":\"cloud-arrow-up-fill\",\"cloudCheck\":\"cloud-check\",\"cloudCheckFill\":\"cloud-check-fill\",\"cloudDownload\":\"cloud-download\",\"cloudDownloadFill\":\"cloud-download-fill\",\"cloudDrizzle\":\"cloud-drizzle\",\"cloudDrizzleFill\":\"cloud-drizzle-fill\",\"cloudFill\":\"cloud-fill\",\"cloudFog\":\"cloud-fog\",\"cloudFogFill\":\"cloud-fog-fill\",\"cloudFog2\":\"cloud-fog2\",\"cloudFog2Fill\":\"cloud-fog2-fill\",\"cloudHail\":\"cloud-hail\",\"cloudHailFill\":\"cloud-hail-fill\",\"cloudHaze\":\"cloud-haze\",\"cloudHazeFill\":\"cloud-haze-fill\",\"cloudHaze2\":\"cloud-haze2\",\"cloudHaze2Fill\":\"cloud-haze2-fill\",\"cloudLightning\":\"cloud-lightning\",\"cloudLightningFill\":\"cloud-lightning-fill\",\"cloudLightningRain\":\"cloud-lightning-rain\",\"cloudLightningRainFill\":\"cloud-lightning-rain-fill\",\"cloudMinus\":\"cloud-minus\",\"cloudMinusFill\":\"cloud-minus-fill\",\"cloudMoon\":\"cloud-moon\",\"cloudMoonFill\":\"cloud-moon-fill\",\"cloudPlus\":\"cloud-plus\",\"cloudPlusFill\":\"cloud-plus-fill\",\"cloudRain\":\"cloud-rain\",\"cloudRainFill\":\"cloud-rain-fill\",\"cloudRainHeavy\":\"cloud-rain-heavy\",\"cloudRainHeavyFill\":\"cloud-rain-heavy-fill\",\"cloudSlash\":\"cloud-slash\",\"cloudSlashFill\":\"cloud-slash-fill\",\"cloudSleet\":\"cloud-sleet\",\"cloudSleetFill\":\"cloud-sleet-fill\",\"cloudSnow\":\"cloud-snow\",\"cloudSnowFill\":\"cloud-snow-fill\",\"cloudSun\":\"cloud-sun\",\"cloudSunFill\":\"cloud-sun-fill\",\"cloudUpload\":\"cloud-upload\",\"cloudUploadFill\":\"cloud-upload-fill\",\"clouds\":\"clouds\",\"cloudsFill\":\"clouds-fill\",\"cloudy\":\"cloudy\",\"cloudyFill\":\"cloudy-fill\",\"code\":\"code\",\"codeSlash\":\"code-slash\",\"codeSquare\":\"code-square\",\"coin\":\"coin\",\"collection\":\"collection\",\"collectionFill\":\"collection-fill\",\"collectionPlay\":\"collection-play\",\"collectionPlayFill\":\"collection-play-fill\",\"columns\":\"columns\",\"columnsGap\":\"columns-gap\",\"command\":\"command\",\"compass\":\"compass\",\"compassFill\":\"compass-fill\",\"cone\":\"cone\",\"coneStriped\":\"cone-striped\",\"controller\":\"controller\",\"cpu\":\"cpu\",\"cpuFill\":\"cpu-fill\",\"creditCard\":\"credit-card\",\"creditCard2Back\":\"credit-card-2-back\",\"creditCard2BackFill\":\"credit-card-2-back-fill\",\"creditCard2Front\":\"credit-card-2-front\",\"creditCard2FrontFill\":\"credit-card-2-front-fill\",\"creditCardFill\":\"credit-card-fill\",\"crop\":\"crop\",\"cup\":\"cup\",\"cupFill\":\"cup-fill\",\"cupStraw\":\"cup-straw\",\"currencyBitcoin\":\"currency-bitcoin\",\"currencyDollar\":\"currency-dollar\",\"currencyEuro\":\"currency-euro\",\"currencyExchange\":\"currency-exchange\",\"currencyPound\":\"currency-pound\",\"currencyYen\":\"currency-yen\",\"cursor\":\"cursor\",\"cursorFill\":\"cursor-fill\",\"cursorText\":\"cursor-text\",\"dash\":\"dash\",\"dashCircle\":\"dash-circle\",\"dashCircleDotted\":\"dash-circle-dotted\",\"dashCircleFill\":\"dash-circle-fill\",\"dashLg\":\"dash-lg\",\"dashSquare\":\"dash-square\",\"dashSquareDotted\":\"dash-square-dotted\",\"dashSquareFill\":\"dash-square-fill\",\"deviceHdd\":\"device-hdd\",\"deviceHddFill\":\"device-hdd-fill\",\"deviceSsd\":\"device-ssd\",\"deviceSsdFill\":\"device-ssd-fill\",\"diagram2\":\"diagram-2\",\"diagram2Fill\":\"diagram-2-fill\",\"diagram3\":\"diagram-3\",\"diagram3Fill\":\"diagram-3-fill\",\"diamond\":\"diamond\",\"diamondFill\":\"diamond-fill\",\"diamondHalf\":\"diamond-half\",\"dice1\":\"dice-1\",\"dice1Fill\":\"dice-1-fill\",\"dice2\":\"dice-2\",\"dice2Fill\":\"dice-2-fill\",\"dice3\":\"dice-3\",\"dice3Fill\":\"dice-3-fill\",\"dice4\":\"dice-4\",\"dice4Fill\":\"dice-4-fill\",\"dice5\":\"dice-5\",\"dice5Fill\":\"dice-5-fill\",\"dice6\":\"dice-6\",\"dice6Fill\":\"dice-6-fill\",\"disc\":\"disc\",\"discFill\":\"disc-fill\",\"discord\":\"discord\",\"display\":\"display\",\"displayFill\":\"display-fill\",\"displayport\":\"displayport\",\"displayportFill\":\"displayport-fill\",\"distributeHorizontal\":\"distribute-horizontal\",\"distributeVertical\":\"distribute-vertical\",\"doorClosed\":\"door-closed\",\"doorClosedFill\":\"door-closed-fill\",\"doorOpen\":\"door-open\",\"doorOpenFill\":\"door-open-fill\",\"dot\":\"dot\",\"download\":\"download\",\"dpad\":\"dpad\",\"dpadFill\":\"dpad-fill\",\"dribbble\":\"dribbble\",\"droplet\":\"droplet\",\"dropletFill\":\"droplet-fill\",\"dropletHalf\":\"droplet-half\",\"ear\":\"ear\",\"earFill\":\"ear-fill\",\"earbuds\":\"earbuds\",\"easel\":\"easel\",\"easelFill\":\"easel-fill\",\"easel2\":\"easel2\",\"easel2Fill\":\"easel2-fill\",\"easel3\":\"easel3\",\"easel3Fill\":\"easel3-fill\",\"egg\":\"egg\",\"eggFill\":\"egg-fill\",\"eggFried\":\"egg-fried\",\"eject\":\"eject\",\"ejectFill\":\"eject-fill\",\"emojiAngry\":\"emoji-angry\",\"emojiAngryFill\":\"emoji-angry-fill\",\"emojiDizzy\":\"emoji-dizzy\",\"emojiDizzyFill\":\"emoji-dizzy-fill\",\"emojiExpressionless\":\"emoji-expressionless\",\"emojiExpressionlessFill\":\"emoji-expressionless-fill\",\"emojiFrown\":\"emoji-frown\",\"emojiFrownFill\":\"emoji-frown-fill\",\"emojiHeartEyes\":\"emoji-heart-eyes\",\"emojiHeartEyesFill\":\"emoji-heart-eyes-fill\",\"emojiKiss\":\"emoji-kiss\",\"emojiKissFill\":\"emoji-kiss-fill\",\"emojiLaughing\":\"emoji-laughing\",\"emojiLaughingFill\":\"emoji-laughing-fill\",\"emojiNeutral\":\"emoji-neutral\",\"emojiNeutralFill\":\"emoji-neutral-fill\",\"emojiSmile\":\"emoji-smile\",\"emojiSmileFill\":\"emoji-smile-fill\",\"emojiSmileUpsideDown\":\"emoji-smile-upside-down\",\"emojiSmileUpsideDownFill\":\"emoji-smile-upside-down-fill\",\"emojiSunglasses\":\"emoji-sunglasses\",\"emojiSunglassesFill\":\"emoji-sunglasses-fill\",\"emojiWink\":\"emoji-wink\",\"emojiWinkFill\":\"emoji-wink-fill\",\"envelope\":\"envelope\",\"envelopeCheck\":\"envelope-check\",\"envelopeCheckFill\":\"envelope-check-fill\",\"envelopeDash\":\"envelope-dash\",\"envelopeDashFill\":\"envelope-dash-fill\",\"envelopeExclamation\":\"envelope-exclamation\",\"envelopeExclamationFill\":\"envelope-exclamation-fill\",\"envelopeFill\":\"envelope-fill\",\"envelopeHeart\":\"envelope-heart\",\"envelopeHeartFill\":\"envelope-heart-fill\",\"envelopeOpen\":\"envelope-open\",\"envelopeOpenFill\":\"envelope-open-fill\",\"envelopeOpenHeart\":\"envelope-open-heart\",\"envelopeOpenHeartFill\":\"envelope-open-heart-fill\",\"envelopePaper\":\"envelope-paper\",\"envelopePaperFill\":\"envelope-paper-fill\",\"envelopePaperHeart\":\"envelope-paper-heart\",\"envelopePaperHeartFill\":\"envelope-paper-heart-fill\",\"envelopePlus\":\"envelope-plus\",\"envelopePlusFill\":\"envelope-plus-fill\",\"envelopeSlash\":\"envelope-slash\",\"envelopeSlashFill\":\"envelope-slash-fill\",\"envelopeX\":\"envelope-x\",\"envelopeXFill\":\"envelope-x-fill\",\"eraser\":\"eraser\",\"eraserFill\":\"eraser-fill\",\"ethernet\":\"ethernet\",\"exclamation\":\"exclamation\",\"exclamationCircle\":\"exclamation-circle\",\"exclamationCircleFill\":\"exclamation-circle-fill\",\"exclamationDiamond\":\"exclamation-diamond\",\"exclamationDiamondFill\":\"exclamation-diamond-fill\",\"exclamationLg\":\"exclamation-lg\",\"exclamationOctagon\":\"exclamation-octagon\",\"exclamationOctagonFill\":\"exclamation-octagon-fill\",\"exclamationSquare\":\"exclamation-square\",\"exclamationSquareFill\":\"exclamation-square-fill\",\"exclamationTriangle\":\"exclamation-triangle\",\"exclamationTriangleFill\":\"exclamation-triangle-fill\",\"exclude\":\"exclude\",\"explicit\":\"explicit\",\"explicitFill\":\"explicit-fill\",\"eye\":\"eye\",\"eyeFill\":\"eye-fill\",\"eyeSlash\":\"eye-slash\",\"eyeSlashFill\":\"eye-slash-fill\",\"eyedropper\":\"eyedropper\",\"eyeglasses\":\"eyeglasses\",\"facebook\":\"facebook\",\"fan\":\"fan\",\"file\":\"file\",\"fileArrowDown\":\"file-arrow-down\",\"fileArrowDownFill\":\"file-arrow-down-fill\",\"fileArrowUp\":\"file-arrow-up\",\"fileArrowUpFill\":\"file-arrow-up-fill\",\"fileBarGraph\":\"file-bar-graph\",\"fileBarGraphFill\":\"file-bar-graph-fill\",\"fileBinary\":\"file-binary\",\"fileBinaryFill\":\"file-binary-fill\",\"fileBreak\":\"file-break\",\"fileBreakFill\":\"file-break-fill\",\"fileCheck\":\"file-check\",\"fileCheckFill\":\"file-check-fill\",\"fileCode\":\"file-code\",\"fileCodeFill\":\"file-code-fill\",\"fileDiff\":\"file-diff\",\"fileDiffFill\":\"file-diff-fill\",\"fileEarmark\":\"file-earmark\",\"fileEarmarkArrowDown\":\"file-earmark-arrow-down\",\"fileEarmarkArrowDownFill\":\"file-earmark-arrow-down-fill\",\"fileEarmarkArrowUp\":\"file-earmark-arrow-up\",\"fileEarmarkArrowUpFill\":\"file-earmark-arrow-up-fill\",\"fileEarmarkBarGraph\":\"file-earmark-bar-graph\",\"fileEarmarkBarGraphFill\":\"file-earmark-bar-graph-fill\",\"fileEarmarkBinary\":\"file-earmark-binary\",\"fileEarmarkBinaryFill\":\"file-earmark-binary-fill\",\"fileEarmarkBreak\":\"file-earmark-break\",\"fileEarmarkBreakFill\":\"file-earmark-break-fill\",\"fileEarmarkCheck\":\"file-earmark-check\",\"fileEarmarkCheckFill\":\"file-earmark-check-fill\",\"fileEarmarkCode\":\"file-earmark-code\",\"fileEarmarkCodeFill\":\"file-earmark-code-fill\",\"fileEarmarkDiff\":\"file-earmark-diff\",\"fileEarmarkDiffFill\":\"file-earmark-diff-fill\",\"fileEarmarkEasel\":\"file-earmark-easel\",\"fileEarmarkEaselFill\":\"file-earmark-easel-fill\",\"fileEarmarkExcel\":\"file-earmark-excel\",\"fileEarmarkExcelFill\":\"file-earmark-excel-fill\",\"fileEarmarkFill\":\"file-earmark-fill\",\"fileEarmarkFont\":\"file-earmark-font\",\"fileEarmarkFontFill\":\"file-earmark-font-fill\",\"fileEarmarkImage\":\"file-earmark-image\",\"fileEarmarkImageFill\":\"file-earmark-image-fill\",\"fileEarmarkLock\":\"file-earmark-lock\",\"fileEarmarkLockFill\":\"file-earmark-lock-fill\",\"fileEarmarkLock2\":\"file-earmark-lock2\",\"fileEarmarkLock2Fill\":\"file-earmark-lock2-fill\",\"fileEarmarkMedical\":\"file-earmark-medical\",\"fileEarmarkMedicalFill\":\"file-earmark-medical-fill\",\"fileEarmarkMinus\":\"file-earmark-minus\",\"fileEarmarkMinusFill\":\"file-earmark-minus-fill\",\"fileEarmarkMusic\":\"file-earmark-music\",\"fileEarmarkMusicFill\":\"file-earmark-music-fill\",\"fileEarmarkPdf\":\"file-earmark-pdf\",\"fileEarmarkPdfFill\":\"file-earmark-pdf-fill\",\"fileEarmarkPerson\":\"file-earmark-person\",\"fileEarmarkPersonFill\":\"file-earmark-person-fill\",\"fileEarmarkPlay\":\"file-earmark-play\",\"fileEarmarkPlayFill\":\"file-earmark-play-fill\",\"fileEarmarkPlus\":\"file-earmark-plus\",\"fileEarmarkPlusFill\":\"file-earmark-plus-fill\",\"fileEarmarkPost\":\"file-earmark-post\",\"fileEarmarkPostFill\":\"file-earmark-post-fill\",\"fileEarmarkPpt\":\"file-earmark-ppt\",\"fileEarmarkPptFill\":\"file-earmark-ppt-fill\",\"fileEarmarkRichtext\":\"file-earmark-richtext\",\"fileEarmarkRichtextFill\":\"file-earmark-richtext-fill\",\"fileEarmarkRuled\":\"file-earmark-ruled\",\"fileEarmarkRuledFill\":\"file-earmark-ruled-fill\",\"fileEarmarkSlides\":\"file-earmark-slides\",\"fileEarmarkSlidesFill\":\"file-earmark-slides-fill\",\"fileEarmarkSpreadsheet\":\"file-earmark-spreadsheet\",\"fileEarmarkSpreadsheetFill\":\"file-earmark-spreadsheet-fill\",\"fileEarmarkText\":\"file-earmark-text\",\"fileEarmarkTextFill\":\"file-earmark-text-fill\",\"fileEarmarkWord\":\"file-earmark-word\",\"fileEarmarkWordFill\":\"file-earmark-word-fill\",\"fileEarmarkX\":\"file-earmark-x\",\"fileEarmarkXFill\":\"file-earmark-x-fill\",\"fileEarmarkZip\":\"file-earmark-zip\",\"fileEarmarkZipFill\":\"file-earmark-zip-fill\",\"fileEasel\":\"file-easel\",\"fileEaselFill\":\"file-easel-fill\",\"fileExcel\":\"file-excel\",\"fileExcelFill\":\"file-excel-fill\",\"fileFill\":\"file-fill\",\"fileFont\":\"file-font\",\"fileFontFill\":\"file-font-fill\",\"fileImage\":\"file-image\",\"fileImageFill\":\"file-image-fill\",\"fileLock\":\"file-lock\",\"fileLockFill\":\"file-lock-fill\",\"fileLock2\":\"file-lock2\",\"fileLock2Fill\":\"file-lock2-fill\",\"fileMedical\":\"file-medical\",\"fileMedicalFill\":\"file-medical-fill\",\"fileMinus\":\"file-minus\",\"fileMinusFill\":\"file-minus-fill\",\"fileMusic\":\"file-music\",\"fileMusicFill\":\"file-music-fill\",\"filePdf\":\"file-pdf\",\"filePdfFill\":\"file-pdf-fill\",\"filePerson\":\"file-person\",\"filePersonFill\":\"file-person-fill\",\"filePlay\":\"file-play\",\"filePlayFill\":\"file-play-fill\",\"filePlus\":\"file-plus\",\"filePlusFill\":\"file-plus-fill\",\"filePost\":\"file-post\",\"filePostFill\":\"file-post-fill\",\"filePpt\":\"file-ppt\",\"filePptFill\":\"file-ppt-fill\",\"fileRichtext\":\"file-richtext\",\"fileRichtextFill\":\"file-richtext-fill\",\"fileRuled\":\"file-ruled\",\"fileRuledFill\":\"file-ruled-fill\",\"fileSlides\":\"file-slides\",\"fileSlidesFill\":\"file-slides-fill\",\"fileSpreadsheet\":\"file-spreadsheet\",\"fileSpreadsheetFill\":\"file-spreadsheet-fill\",\"fileText\":\"file-text\",\"fileTextFill\":\"file-text-fill\",\"fileWord\":\"file-word\",\"fileWordFill\":\"file-word-fill\",\"fileX\":\"file-x\",\"fileXFill\":\"file-x-fill\",\"fileZip\":\"file-zip\",\"fileZipFill\":\"file-zip-fill\",\"files\":\"files\",\"filesAlt\":\"files-alt\",\"filetypeAac\":\"filetype-aac\",\"filetypeAi\":\"filetype-ai\",\"filetypeBmp\":\"filetype-bmp\",\"filetypeCs\":\"filetype-cs\",\"filetypeCss\":\"filetype-css\",\"filetypeCsv\":\"filetype-csv\",\"filetypeDoc\":\"filetype-doc\",\"filetypeDocx\":\"filetype-docx\",\"filetypeExe\":\"filetype-exe\",\"filetypeGif\":\"filetype-gif\",\"filetypeHeic\":\"filetype-heic\",\"filetypeHtml\":\"filetype-html\",\"filetypeJava\":\"filetype-java\",\"filetypeJpg\":\"filetype-jpg\",\"filetypeJs\":\"filetype-js\",\"filetypeJson\":\"filetype-json\",\"filetypeJsx\":\"filetype-jsx\",\"filetypeKey\":\"filetype-key\",\"filetypeM4p\":\"filetype-m4p\",\"filetypeMd\":\"filetype-md\",\"filetypeMdx\":\"filetype-mdx\",\"filetypeMov\":\"filetype-mov\",\"filetypeMp3\":\"filetype-mp3\",\"filetypeMp4\":\"filetype-mp4\",\"filetypeOtf\":\"filetype-otf\",\"filetypePdf\":\"filetype-pdf\",\"filetypePhp\":\"filetype-php\",\"filetypePng\":\"filetype-png\",\"filetypePpt\":\"filetype-ppt\",\"filetypePptx\":\"filetype-pptx\",\"filetypePsd\":\"filetype-psd\",\"filetypePy\":\"filetype-py\",\"filetypeRaw\":\"filetype-raw\",\"filetypeRb\":\"filetype-rb\",\"filetypeSass\":\"filetype-sass\",\"filetypeScss\":\"filetype-scss\",\"filetypeSh\":\"filetype-sh\",\"filetypeSvg\":\"filetype-svg\",\"filetypeTiff\":\"filetype-tiff\",\"filetypeTsx\":\"filetype-tsx\",\"filetypeTtf\":\"filetype-ttf\",\"filetypeTxt\":\"filetype-txt\",\"filetypeWav\":\"filetype-wav\",\"filetypeWoff\":\"filetype-woff\",\"filetypeXls\":\"filetype-xls\",\"filetypeXlsx\":\"filetype-xlsx\",\"filetypeXml\":\"filetype-xml\",\"filetypeYml\":\"filetype-yml\",\"film\":\"film\",\"filter\":\"filter\",\"filterCircle\":\"filter-circle\",\"filterCircleFill\":\"filter-circle-fill\",\"filterLeft\":\"filter-left\",\"filterRight\":\"filter-right\",\"filterSquare\":\"filter-square\",\"filterSquareFill\":\"filter-square-fill\",\"fingerprint\":\"fingerprint\",\"flag\":\"flag\",\"flagFill\":\"flag-fill\",\"flower1\":\"flower1\",\"flower2\":\"flower2\",\"flower3\":\"flower3\",\"folder\":\"folder\",\"folderCheck\":\"folder-check\",\"folderFill\":\"folder-fill\",\"folderMinus\":\"folder-minus\",\"folderPlus\":\"folder-plus\",\"folderSymlink\":\"folder-symlink\",\"folderSymlinkFill\":\"folder-symlink-fill\",\"folderX\":\"folder-x\",\"folder2\":\"folder2\",\"folder2Open\":\"folder2-open\",\"fonts\":\"fonts\",\"forward\":\"forward\",\"forwardFill\":\"forward-fill\",\"front\":\"front\",\"fullscreen\":\"fullscreen\",\"fullscreenExit\":\"fullscreen-exit\",\"funnel\":\"funnel\",\"funnelFill\":\"funnel-fill\",\"gear\":\"gear\",\"gearFill\":\"gear-fill\",\"gearWide\":\"gear-wide\",\"gearWideConnected\":\"gear-wide-connected\",\"gem\":\"gem\",\"genderAmbiguous\":\"gender-ambiguous\",\"genderFemale\":\"gender-female\",\"genderMale\":\"gender-male\",\"genderTrans\":\"gender-trans\",\"geo\":\"geo\",\"geoAlt\":\"geo-alt\",\"geoAltFill\":\"geo-alt-fill\",\"geoFill\":\"geo-fill\",\"gift\":\"gift\",\"giftFill\":\"gift-fill\",\"git\":\"git\",\"github\":\"github\",\"globe\":\"globe\",\"globe2\":\"globe2\",\"google\":\"google\",\"gpuCard\":\"gpu-card\",\"graphDown\":\"graph-down\",\"graphDownArrow\":\"graph-down-arrow\",\"graphUp\":\"graph-up\",\"graphUpArrow\":\"graph-up-arrow\",\"grid\":\"grid\",\"grid1x2\":\"grid-1x2\",\"grid1x2Fill\":\"grid-1x2-fill\",\"grid3x2\":\"grid-3x2\",\"grid3x2Gap\":\"grid-3x2-gap\",\"grid3x2GapFill\":\"grid-3x2-gap-fill\",\"grid3x3\":\"grid-3x3\",\"grid3x3Gap\":\"grid-3x3-gap\",\"grid3x3GapFill\":\"grid-3x3-gap-fill\",\"gridFill\":\"grid-fill\",\"gripHorizontal\":\"grip-horizontal\",\"gripVertical\":\"grip-vertical\",\"hammer\":\"hammer\",\"handIndex\":\"hand-index\",\"handIndexFill\":\"hand-index-fill\",\"handIndexThumb\":\"hand-index-thumb\",\"handIndexThumbFill\":\"hand-index-thumb-fill\",\"handThumbsDown\":\"hand-thumbs-down\",\"handThumbsDownFill\":\"hand-thumbs-down-fill\",\"handThumbsUp\":\"hand-thumbs-up\",\"handThumbsUpFill\":\"hand-thumbs-up-fill\",\"handbag\":\"handbag\",\"handbagFill\":\"handbag-fill\",\"hash\":\"hash\",\"hdd\":\"hdd\",\"hddFill\":\"hdd-fill\",\"hddNetwork\":\"hdd-network\",\"hddNetworkFill\":\"hdd-network-fill\",\"hddRack\":\"hdd-rack\",\"hddRackFill\":\"hdd-rack-fill\",\"hddStack\":\"hdd-stack\",\"hddStackFill\":\"hdd-stack-fill\",\"hdmi\":\"hdmi\",\"hdmiFill\":\"hdmi-fill\",\"headphones\":\"headphones\",\"headset\":\"headset\",\"headsetVr\":\"headset-vr\",\"heart\":\"heart\",\"heartArrow\":\"heart-arrow\",\"heartFill\":\"heart-fill\",\"heartHalf\":\"heart-half\",\"heartPulse\":\"heart-pulse\",\"heartPulseFill\":\"heart-pulse-fill\",\"heartbreak\":\"heartbreak\",\"heartbreakFill\":\"heartbreak-fill\",\"hearts\":\"hearts\",\"heptagon\":\"heptagon\",\"heptagonFill\":\"heptagon-fill\",\"heptagonHalf\":\"heptagon-half\",\"hexagon\":\"hexagon\",\"hexagonFill\":\"hexagon-fill\",\"hexagonHalf\":\"hexagon-half\",\"hospital\":\"hospital\",\"hospitalFill\":\"hospital-fill\",\"hourglass\":\"hourglass\",\"hourglassBottom\":\"hourglass-bottom\",\"hourglassSplit\":\"hourglass-split\",\"hourglassTop\":\"hourglass-top\",\"house\":\"house\",\"houseDoor\":\"house-door\",\"houseDoorFill\":\"house-door-fill\",\"houseFill\":\"house-fill\",\"houseHeart\":\"house-heart\",\"houseHeartFill\":\"house-heart-fill\",\"hr\":\"hr\",\"hurricane\":\"hurricane\",\"hypnotize\":\"hypnotize\",\"image\":\"image\",\"imageAlt\":\"image-alt\",\"imageFill\":\"image-fill\",\"images\":\"images\",\"inbox\":\"inbox\",\"inboxFill\":\"inbox-fill\",\"inboxesFill\":\"inboxes-fill\",\"inboxes\":\"inboxes\",\"incognito\":\"incognito\",\"infinity\":\"infinity\",\"info\":\"info\",\"infoCircle\":\"info-circle\",\"infoCircleFill\":\"info-circle-fill\",\"infoLg\":\"info-lg\",\"infoSquare\":\"info-square\",\"infoSquareFill\":\"info-square-fill\",\"inputCursor\":\"input-cursor\",\"inputCursorText\":\"input-cursor-text\",\"instagram\":\"instagram\",\"intersect\":\"intersect\",\"journal\":\"journal\",\"journalAlbum\":\"journal-album\",\"journalArrowDown\":\"journal-arrow-down\",\"journalArrowUp\":\"journal-arrow-up\",\"journalBookmark\":\"journal-bookmark\",\"journalBookmarkFill\":\"journal-bookmark-fill\",\"journalCheck\":\"journal-check\",\"journalCode\":\"journal-code\",\"journalMedical\":\"journal-medical\",\"journalMinus\":\"journal-minus\",\"journalPlus\":\"journal-plus\",\"journalRichtext\":\"journal-richtext\",\"journalText\":\"journal-text\",\"journalX\":\"journal-x\",\"journals\":\"journals\",\"joystick\":\"joystick\",\"justify\":\"justify\",\"justifyLeft\":\"justify-left\",\"justifyRight\":\"justify-right\",\"kanban\":\"kanban\",\"kanbanFill\":\"kanban-fill\",\"key\":\"key\",\"keyFill\":\"key-fill\",\"keyboard\":\"keyboard\",\"keyboardFill\":\"keyboard-fill\",\"ladder\":\"ladder\",\"lamp\":\"lamp\",\"lampFill\":\"lamp-fill\",\"laptop\":\"laptop\",\"laptopFill\":\"laptop-fill\",\"layerBackward\":\"layer-backward\",\"layerForward\":\"layer-forward\",\"layers\":\"layers\",\"layersFill\":\"layers-fill\",\"layersHalf\":\"layers-half\",\"layoutSidebar\":\"layout-sidebar\",\"layoutSidebarInsetReverse\":\"layout-sidebar-inset-reverse\",\"layoutSidebarInset\":\"layout-sidebar-inset\",\"layoutSidebarReverse\":\"layout-sidebar-reverse\",\"layoutSplit\":\"layout-split\",\"layoutTextSidebar\":\"layout-text-sidebar\",\"layoutTextSidebarReverse\":\"layout-text-sidebar-reverse\",\"layoutTextWindow\":\"layout-text-window\",\"layoutTextWindowReverse\":\"layout-text-window-reverse\",\"layoutThreeColumns\":\"layout-three-columns\",\"layoutWtf\":\"layout-wtf\",\"lifePreserver\":\"life-preserver\",\"lightbulb\":\"lightbulb\",\"lightbulbFill\":\"lightbulb-fill\",\"lightbulbOff\":\"lightbulb-off\",\"lightbulbOffFill\":\"lightbulb-off-fill\",\"lightning\":\"lightning\",\"lightningCharge\":\"lightning-charge\",\"lightningChargeFill\":\"lightning-charge-fill\",\"lightningFill\":\"lightning-fill\",\"line\":\"line\",\"link\":\"link\",\"link45deg\":\"link-45deg\",\"linkedin\":\"linkedin\",\"list\":\"list\",\"listCheck\":\"list-check\",\"listColumns\":\"list-columns\",\"listColumnsReverse\":\"list-columns-reverse\",\"listNested\":\"list-nested\",\"listOl\":\"list-ol\",\"listStars\":\"list-stars\",\"listTask\":\"list-task\",\"listUl\":\"list-ul\",\"lock\":\"lock\",\"lockFill\":\"lock-fill\",\"magic\":\"magic\",\"magnet\":\"magnet\",\"magnetFill\":\"magnet-fill\",\"mailbox\":\"mailbox\",\"mailbox2\":\"mailbox2\",\"map\":\"map\",\"mapFill\":\"map-fill\",\"markdown\":\"markdown\",\"markdownFill\":\"markdown-fill\",\"mask\":\"mask\",\"mastodon\":\"mastodon\",\"medium\":\"medium\",\"megaphone\":\"megaphone\",\"megaphoneFill\":\"megaphone-fill\",\"memory\":\"memory\",\"menuApp\":\"menu-app\",\"menuAppFill\":\"menu-app-fill\",\"menuButton\":\"menu-button\",\"menuButtonFill\":\"menu-button-fill\",\"menuButtonWide\":\"menu-button-wide\",\"menuButtonWideFill\":\"menu-button-wide-fill\",\"menuDown\":\"menu-down\",\"menuUp\":\"menu-up\",\"messenger\":\"messenger\",\"meta\":\"meta\",\"mic\":\"mic\",\"micFill\":\"mic-fill\",\"micMute\":\"mic-mute\",\"micMuteFill\":\"mic-mute-fill\",\"microsoft\":\"microsoft\",\"minecart\":\"minecart\",\"minecartLoaded\":\"minecart-loaded\",\"modem\":\"modem\",\"modemFill\":\"modem-fill\",\"moisture\":\"moisture\",\"moon\":\"moon\",\"moonFill\":\"moon-fill\",\"moonStars\":\"moon-stars\",\"moonStarsFill\":\"moon-stars-fill\",\"mortarboard\":\"mortarboard\",\"mortarboardFill\":\"mortarboard-fill\",\"motherboard\":\"motherboard\",\"motherboardFill\":\"motherboard-fill\",\"mouse\":\"mouse\",\"mouseFill\":\"mouse-fill\",\"mouse2\":\"mouse2\",\"mouse2Fill\":\"mouse2-fill\",\"mouse3\":\"mouse3\",\"mouse3Fill\":\"mouse3-fill\",\"musicNote\":\"music-note\",\"musicNoteBeamed\":\"music-note-beamed\",\"musicNoteList\":\"music-note-list\",\"musicPlayer\":\"music-player\",\"musicPlayerFill\":\"music-player-fill\",\"newspaper\":\"newspaper\",\"nintendoSwitch\":\"nintendo-switch\",\"nodeMinus\":\"node-minus\",\"nodeMinusFill\":\"node-minus-fill\",\"nodePlus\":\"node-plus\",\"nodePlusFill\":\"node-plus-fill\",\"nut\":\"nut\",\"nutFill\":\"nut-fill\",\"octagon\":\"octagon\",\"octagonFill\":\"octagon-fill\",\"octagonHalf\":\"octagon-half\",\"opticalAudio\":\"optical-audio\",\"opticalAudioFill\":\"optical-audio-fill\",\"option\":\"option\",\"outlet\":\"outlet\",\"paintBucket\":\"paint-bucket\",\"palette\":\"palette\",\"paletteFill\":\"palette-fill\",\"palette2\":\"palette2\",\"paperclip\":\"paperclip\",\"paragraph\":\"paragraph\",\"patchCheck\":\"patch-check\",\"patchCheckFill\":\"patch-check-fill\",\"patchExclamation\":\"patch-exclamation\",\"patchExclamationFill\":\"patch-exclamation-fill\",\"patchMinus\":\"patch-minus\",\"patchMinusFill\":\"patch-minus-fill\",\"patchPlus\":\"patch-plus\",\"patchPlusFill\":\"patch-plus-fill\",\"patchQuestion\":\"patch-question\",\"patchQuestionFill\":\"patch-question-fill\",\"pause\":\"pause\",\"pauseBtn\":\"pause-btn\",\"pauseBtnFill\":\"pause-btn-fill\",\"pauseCircle\":\"pause-circle\",\"pauseCircleFill\":\"pause-circle-fill\",\"pauseFill\":\"pause-fill\",\"paypal\":\"paypal\",\"pc\":\"pc\",\"pcDisplay\":\"pc-display\",\"pcDisplayHorizontal\":\"pc-display-horizontal\",\"pcHorizontal\":\"pc-horizontal\",\"pciCard\":\"pci-card\",\"peace\":\"peace\",\"peaceFill\":\"peace-fill\",\"pen\":\"pen\",\"penFill\":\"pen-fill\",\"pencil\":\"pencil\",\"pencilFill\":\"pencil-fill\",\"pencilSquare\":\"pencil-square\",\"pentagon\":\"pentagon\",\"pentagonFill\":\"pentagon-fill\",\"pentagonHalf\":\"pentagon-half\",\"people\":\"people\",\"personCircle\":\"person-circle\",\"peopleFill\":\"people-fill\",\"percent\":\"percent\",\"person\":\"person\",\"personBadge\":\"person-badge\",\"personBadgeFill\":\"person-badge-fill\",\"personBoundingBox\":\"person-bounding-box\",\"personCheck\":\"person-check\",\"personCheckFill\":\"person-check-fill\",\"personDash\":\"person-dash\",\"personDashFill\":\"person-dash-fill\",\"personFill\":\"person-fill\",\"personHeart\":\"person-heart\",\"personHearts\":\"person-hearts\",\"personLinesFill\":\"person-lines-fill\",\"personPlus\":\"person-plus\",\"personPlusFill\":\"person-plus-fill\",\"personRolodex\":\"person-rolodex\",\"personSquare\":\"person-square\",\"personVideo\":\"person-video\",\"personVideo2\":\"person-video2\",\"personVideo3\":\"person-video3\",\"personWorkspace\":\"person-workspace\",\"personX\":\"person-x\",\"personXFill\":\"person-x-fill\",\"phone\":\"phone\",\"phoneFill\":\"phone-fill\",\"phoneFlip\":\"phone-flip\",\"phoneLandscape\":\"phone-landscape\",\"phoneLandscapeFill\":\"phone-landscape-fill\",\"phoneVibrate\":\"phone-vibrate\",\"phoneVibrateFill\":\"phone-vibrate-fill\",\"pieChart\":\"pie-chart\",\"pieChartFill\":\"pie-chart-fill\",\"piggyBank\":\"piggy-bank\",\"piggyBankFill\":\"piggy-bank-fill\",\"pin\":\"pin\",\"pinAngle\":\"pin-angle\",\"pinAngleFill\":\"pin-angle-fill\",\"pinFill\":\"pin-fill\",\"pinMap\":\"pin-map\",\"pinMapFill\":\"pin-map-fill\",\"pinterest\":\"pinterest\",\"pip\":\"pip\",\"pipFill\":\"pip-fill\",\"play\":\"play\",\"playBtn\":\"play-btn\",\"playBtnFill\":\"play-btn-fill\",\"playCircle\":\"play-circle\",\"playCircleFill\":\"play-circle-fill\",\"playFill\":\"play-fill\",\"playstation\":\"playstation\",\"plug\":\"plug\",\"plugFill\":\"plug-fill\",\"plugin\":\"plugin\",\"plus\":\"plus\",\"plusCircle\":\"plus-circle\",\"plusCircleDotted\":\"plus-circle-dotted\",\"plusCircleFill\":\"plus-circle-fill\",\"plusLg\":\"plus-lg\",\"plusSlashMinus\":\"plus-slash-minus\",\"plusSquare\":\"plus-square\",\"plusSquareDotted\":\"plus-square-dotted\",\"plusSquareFill\":\"plus-square-fill\",\"postage\":\"postage\",\"postageFill\":\"postage-fill\",\"postageHeart\":\"postage-heart\",\"postageHeartFill\":\"postage-heart-fill\",\"postcard\":\"postcard\",\"postcardFill\":\"postcard-fill\",\"postcardHeart\":\"postcard-heart\",\"postcardHeartFill\":\"postcard-heart-fill\",\"power\":\"power\",\"printer\":\"printer\",\"printerFill\":\"printer-fill\",\"projector\":\"projector\",\"projectorFill\":\"projector-fill\",\"puzzle\":\"puzzle\",\"puzzleFill\":\"puzzle-fill\",\"qrCode\":\"qr-code\",\"qrCodeScan\":\"qr-code-scan\",\"question\":\"question\",\"questionCircle\":\"question-circle\",\"questionDiamond\":\"question-diamond\",\"questionDiamondFill\":\"question-diamond-fill\",\"questionCircleFill\":\"question-circle-fill\",\"questionLg\":\"question-lg\",\"questionOctagon\":\"question-octagon\",\"questionOctagonFill\":\"question-octagon-fill\",\"questionSquare\":\"question-square\",\"questionSquareFill\":\"question-square-fill\",\"quora\":\"quora\",\"quote\":\"quote\",\"radioactive\":\"radioactive\",\"rainbow\":\"rainbow\",\"receipt\":\"receipt\",\"receiptCutoff\":\"receipt-cutoff\",\"reception0\":\"reception-0\",\"reception1\":\"reception-1\",\"reception2\":\"reception-2\",\"reception3\":\"reception-3\",\"reception4\":\"reception-4\",\"record\":\"record\",\"recordBtn\":\"record-btn\",\"recordBtnFill\":\"record-btn-fill\",\"recordCircle\":\"record-circle\",\"recordCircleFill\":\"record-circle-fill\",\"recordFill\":\"record-fill\",\"record2\":\"record2\",\"record2Fill\":\"record2-fill\",\"recycle\":\"recycle\",\"reddit\":\"reddit\",\"reply\":\"reply\",\"replyAll\":\"reply-all\",\"replyAllFill\":\"reply-all-fill\",\"replyFill\":\"reply-fill\",\"robot\":\"robot\",\"router\":\"router\",\"routerFill\":\"router-fill\",\"rss\":\"rss\",\"rssFill\":\"rss-fill\",\"rulers\":\"rulers\",\"safe\":\"safe\",\"safeFill\":\"safe-fill\",\"safe2\":\"safe2\",\"safe2Fill\":\"safe2-fill\",\"save\":\"save\",\"saveFill\":\"save-fill\",\"save2\":\"save2\",\"save2Fill\":\"save2-fill\",\"scissors\":\"scissors\",\"screwdriver\":\"screwdriver\",\"sdCard\":\"sd-card\",\"sdCardFill\":\"sd-card-fill\",\"search\":\"search\",\"searchHeart\":\"search-heart\",\"searchHeartFill\":\"search-heart-fill\",\"segmentedNav\":\"segmented-nav\",\"send\":\"send\",\"sendCheck\":\"send-check\",\"sendCheckFill\":\"send-check-fill\",\"sendDash\":\"send-dash\",\"sendDashFill\":\"send-dash-fill\",\"sendExclamation\":\"send-exclamation\",\"sendExclamationFill\":\"send-exclamation-fill\",\"sendFill\":\"send-fill\",\"sendPlus\":\"send-plus\",\"sendPlusFill\":\"send-plus-fill\",\"sendSlash\":\"send-slash\",\"sendSlashFill\":\"send-slash-fill\",\"sendX\":\"send-x\",\"sendXFill\":\"send-x-fill\",\"server\":\"server\",\"share\":\"share\",\"shareFill\":\"share-fill\",\"shield\":\"shield\",\"shieldCheck\":\"shield-check\",\"shieldExclamation\":\"shield-exclamation\",\"shieldFill\":\"shield-fill\",\"shieldFillCheck\":\"shield-fill-check\",\"shieldFillExclamation\":\"shield-fill-exclamation\",\"shieldFillMinus\":\"shield-fill-minus\",\"shieldFillPlus\":\"shield-fill-plus\",\"shieldFillX\":\"shield-fill-x\",\"shieldLock\":\"shield-lock\",\"shieldLockFill\":\"shield-lock-fill\",\"shieldMinus\":\"shield-minus\",\"shieldPlus\":\"shield-plus\",\"shieldShaded\":\"shield-shaded\",\"shieldSlash\":\"shield-slash\",\"shieldSlashFill\":\"shield-slash-fill\",\"shieldX\":\"shield-x\",\"shift\":\"shift\",\"shiftFill\":\"shift-fill\",\"shop\":\"shop\",\"shopWindow\":\"shop-window\",\"shuffle\":\"shuffle\",\"signal\":\"signal\",\"signpost\":\"signpost\",\"signpost2\":\"signpost-2\",\"signpost2Fill\":\"signpost-2-fill\",\"signpostFill\":\"signpost-fill\",\"signpostSplit\":\"signpost-split\",\"signpostSplitFill\":\"signpost-split-fill\",\"sim\":\"sim\",\"simFill\":\"sim-fill\",\"skipBackward\":\"skip-backward\",\"skipBackwardBtn\":\"skip-backward-btn\",\"skipBackwardBtnFill\":\"skip-backward-btn-fill\",\"skipBackwardCircle\":\"skip-backward-circle\",\"skipBackwardCircleFill\":\"skip-backward-circle-fill\",\"skipBackwardFill\":\"skip-backward-fill\",\"skipEnd\":\"skip-end\",\"skipEndBtn\":\"skip-end-btn\",\"skipEndBtnFill\":\"skip-end-btn-fill\",\"skipEndCircle\":\"skip-end-circle\",\"skipEndCircleFill\":\"skip-end-circle-fill\",\"skipEndFill\":\"skip-end-fill\",\"skipForward\":\"skip-forward\",\"skipForwardBtn\":\"skip-forward-btn\",\"skipForwardBtnFill\":\"skip-forward-btn-fill\",\"skipForwardCircle\":\"skip-forward-circle\",\"skipForwardCircleFill\":\"skip-forward-circle-fill\",\"skipForwardFill\":\"skip-forward-fill\",\"skipStart\":\"skip-start\",\"skipStartBtn\":\"skip-start-btn\",\"skipStartBtnFill\":\"skip-start-btn-fill\",\"skipStartCircle\":\"skip-start-circle\",\"skipStartCircleFill\":\"skip-start-circle-fill\",\"skipStartFill\":\"skip-start-fill\",\"skype\":\"skype\",\"slack\":\"slack\",\"slash\":\"slash\",\"slashCircleFill\":\"slash-circle-fill\",\"slashLg\":\"slash-lg\",\"slashSquare\":\"slash-square\",\"slashSquareFill\":\"slash-square-fill\",\"sliders\":\"sliders\",\"sliders2\":\"sliders2\",\"sliders2Vertical\":\"sliders2-vertical\",\"smartwatch\":\"smartwatch\",\"snapchat\":\"snapchat\",\"snow\":\"snow\",\"snow2\":\"snow2\",\"snow3\":\"snow3\",\"sortAlphaDown\":\"sort-alpha-down\",\"sortAlphaDownAlt\":\"sort-alpha-down-alt\",\"sortAlphaUp\":\"sort-alpha-up\",\"sortAlphaUpAlt\":\"sort-alpha-up-alt\",\"sortDown\":\"sort-down\",\"sortDownAlt\":\"sort-down-alt\",\"sortNumericDown\":\"sort-numeric-down\",\"sortNumericDownAlt\":\"sort-numeric-down-alt\",\"sortNumericUp\":\"sort-numeric-up\",\"sortNumericUpAlt\":\"sort-numeric-up-alt\",\"sortUp\":\"sort-up\",\"sortUpAlt\":\"sort-up-alt\",\"soundwave\":\"soundwave\",\"speaker\":\"speaker\",\"speakerFill\":\"speaker-fill\",\"speedometer\":\"speedometer\",\"speedometer2\":\"speedometer2\",\"spellcheck\":\"spellcheck\",\"spotify\":\"spotify\",\"square\":\"square\",\"squareFill\":\"square-fill\",\"squareHalf\":\"square-half\",\"stack\":\"stack\",\"stackOverflow\":\"stack-overflow\",\"star\":\"star\",\"starFill\":\"star-fill\",\"starHalf\":\"star-half\",\"stars\":\"stars\",\"steam\":\"steam\",\"stickies\":\"stickies\",\"stickiesFill\":\"stickies-fill\",\"sticky\":\"sticky\",\"stickyFill\":\"sticky-fill\",\"stop\":\"stop\",\"stopBtn\":\"stop-btn\",\"stopBtnFill\":\"stop-btn-fill\",\"stopCircle\":\"stop-circle\",\"stopCircleFill\":\"stop-circle-fill\",\"stopFill\":\"stop-fill\",\"stoplights\":\"stoplights\",\"stoplightsFill\":\"stoplights-fill\",\"stopwatch\":\"stopwatch\",\"stopwatchFill\":\"stopwatch-fill\",\"strava\":\"strava\",\"subtract\":\"subtract\",\"suitClub\":\"suit-club\",\"suitClubFill\":\"suit-club-fill\",\"suitDiamond\":\"suit-diamond\",\"suitDiamondFill\":\"suit-diamond-fill\",\"suitHeart\":\"suit-heart\",\"suitHeartFill\":\"suit-heart-fill\",\"suitSpade\":\"suit-spade\",\"suitSpadeFill\":\"suit-spade-fill\",\"sun\":\"sun\",\"sunFill\":\"sun-fill\",\"sunglasses\":\"sunglasses\",\"sunrise\":\"sunrise\",\"sunriseFill\":\"sunrise-fill\",\"sunset\":\"sunset\",\"sunsetFill\":\"sunset-fill\",\"symmetryHorizontal\":\"symmetry-horizontal\",\"symmetryVertical\":\"symmetry-vertical\",\"table\":\"table\",\"tablet\":\"tablet\",\"tabletFill\":\"tablet-fill\",\"tabletLandscape\":\"tablet-landscape\",\"tabletLandscapeFill\":\"tablet-landscape-fill\",\"tag\":\"tag\",\"tagFill\":\"tag-fill\",\"tags\":\"tags\",\"tagsFill\":\"tags-fill\",\"telegram\":\"telegram\",\"telephone\":\"telephone\",\"telephoneFill\":\"telephone-fill\",\"telephoneForward\":\"telephone-forward\",\"telephoneForwardFill\":\"telephone-forward-fill\",\"telephoneInbound\":\"telephone-inbound\",\"telephoneInboundFill\":\"telephone-inbound-fill\",\"telephoneMinus\":\"telephone-minus\",\"telephoneMinusFill\":\"telephone-minus-fill\",\"telephoneOutbound\":\"telephone-outbound\",\"telephoneOutboundFill\":\"telephone-outbound-fill\",\"telephonePlus\":\"telephone-plus\",\"telephonePlusFill\":\"telephone-plus-fill\",\"telephoneX\":\"telephone-x\",\"telephoneXFill\":\"telephone-x-fill\",\"terminal\":\"terminal\",\"terminalDash\":\"terminal-dash\",\"terminalFill\":\"terminal-fill\",\"terminalPlus\":\"terminal-plus\",\"terminalSplit\":\"terminal-split\",\"terminalX\":\"terminal-x\",\"textCenter\":\"text-center\",\"textIndentLeft\":\"text-indent-left\",\"textIndentRight\":\"text-indent-right\",\"textLeft\":\"text-left\",\"textParagraph\":\"text-paragraph\",\"textRight\":\"text-right\",\"textarea\":\"textarea\",\"textareaResize\":\"textarea-resize\",\"textareaT\":\"textarea-t\",\"thermometer\":\"thermometer\",\"thermometerHalf\":\"thermometer-half\",\"thermometerHigh\":\"thermometer-high\",\"thermometerLow\":\"thermometer-low\",\"thermometerSnow\":\"thermometer-snow\",\"thermometerSun\":\"thermometer-sun\",\"threeDots\":\"three-dots\",\"threeDotsVertical\":\"three-dots-vertical\",\"thunderbolt\":\"thunderbolt\",\"thunderboltFill\":\"thunderbolt-fill\",\"ticket\":\"ticket\",\"ticketDetailed\":\"ticket-detailed\",\"ticketDetailedFill\":\"ticket-detailed-fill\",\"ticketFill\":\"ticket-fill\",\"ticketPerforated\":\"ticket-perforated\",\"ticketPerforatedFill\":\"ticket-perforated-fill\",\"tiktok\":\"tiktok\",\"toggleOff\":\"toggle-off\",\"toggleOn\":\"toggle-on\",\"toggle2Off\":\"toggle2-off\",\"toggle2On\":\"toggle2-on\",\"toggles\":\"toggles\",\"toggles2\":\"toggles2\",\"tools\":\"tools\",\"tornado\":\"tornado\",\"translate\":\"translate\",\"trash\":\"trash\",\"trashFill\":\"trash-fill\",\"trash2\":\"trash2\",\"trash2Fill\":\"trash2-fill\",\"trash3\":\"trash3\",\"trash3Fill\":\"trash3-fill\",\"tree\":\"tree\",\"treeFill\":\"tree-fill\",\"triangle\":\"triangle\",\"triangleFill\":\"triangle-fill\",\"triangleHalf\":\"triangle-half\",\"trophy\":\"trophy\",\"trophyFill\":\"trophy-fill\",\"tropicalStorm\":\"tropical-storm\",\"truck\":\"truck\",\"truckFlatbed\":\"truck-flatbed\",\"tsunami\":\"tsunami\",\"tv\":\"tv\",\"tvFill\":\"tv-fill\",\"twitch\":\"twitch\",\"twitter\":\"twitter\",\"type\":\"type\",\"typeBold\":\"type-bold\",\"typeH1\":\"type-h1\",\"typeH2\":\"type-h2\",\"typeH3\":\"type-h3\",\"typeItalic\":\"type-italic\",\"typeStrikethrough\":\"type-strikethrough\",\"typeUnderline\":\"type-underline\",\"uiChecks\":\"ui-checks\",\"uiChecksGrid\":\"ui-checks-grid\",\"uiRadios\":\"ui-radios\",\"uiRadiosGrid\":\"ui-radios-grid\",\"umbrella\":\"umbrella\",\"umbrellaFill\":\"umbrella-fill\",\"union\":\"union\",\"unlock\":\"unlock\",\"unlockFill\":\"unlock-fill\",\"upc\":\"upc\",\"upcScan\":\"upc-scan\",\"upload\":\"upload\",\"usb\":\"usb\",\"usbC\":\"usb-c\",\"usbCFill\":\"usb-c-fill\",\"usbDrive\":\"usb-drive\",\"usbDriveFill\":\"usb-drive-fill\",\"usbFill\":\"usb-fill\",\"usbMicro\":\"usb-micro\",\"usbMicroFill\":\"usb-micro-fill\",\"usbMini\":\"usb-mini\",\"usbMiniFill\":\"usb-mini-fill\",\"usbPlug\":\"usb-plug\",\"usbPlugFill\":\"usb-plug-fill\",\"usbSymbol\":\"usb-symbol\",\"valentine\":\"valentine\",\"valentine2\":\"valentine2\",\"vectorPen\":\"vector-pen\",\"viewList\":\"view-list\",\"viewStacked\":\"view-stacked\",\"vimeo\":\"vimeo\",\"vinyl\":\"vinyl\",\"vinylFill\":\"vinyl-fill\",\"voicemail\":\"voicemail\",\"volumeDown\":\"volume-down\",\"volumeDownFill\":\"volume-down-fill\",\"volumeMute\":\"volume-mute\",\"volumeMuteFill\":\"volume-mute-fill\",\"volumeOff\":\"volume-off\",\"volumeOffFill\":\"volume-off-fill\",\"volumeUp\":\"volume-up\",\"volumeUpFill\":\"volume-up-fill\",\"vr\":\"vr\",\"wallet\":\"wallet\",\"walletFill\":\"wallet-fill\",\"wallet2\":\"wallet2\",\"watch\":\"watch\",\"water\":\"water\",\"webcam\":\"webcam\",\"webcamFill\":\"webcam-fill\",\"whatsapp\":\"whatsapp\",\"wifi\":\"wifi\",\"wifi1\":\"wifi-1\",\"wifi2\":\"wifi-2\",\"wifiOff\":\"wifi-off\",\"wind\":\"wind\",\"window\":\"window\",\"windowDash\":\"window-dash\",\"windowDesktop\":\"window-desktop\",\"windowDock\":\"window-dock\",\"windowFullscreen\":\"window-fullscreen\",\"windowPlus\":\"window-plus\",\"windowSidebar\":\"window-sidebar\",\"windowSplit\":\"window-split\",\"windowStack\":\"window-stack\",\"windowX\":\"window-x\",\"windows\":\"windows\",\"wordpress\":\"wordpress\",\"wrench\":\"wrench\",\"wrenchAdjustable\":\"wrench-adjustable\",\"wrenchAdjustableCircle\":\"wrench-adjustable-circle\",\"wrenchAdjustableCircleFill\":\"wrench-adjustable-circle-fill\",\"x\":\"x\",\"xCircle\":\"x-circle\",\"xCircleFill\":\"x-circle-fill\",\"xDiamond\":\"x-diamond\",\"xDiamondFill\":\"x-diamond-fill\",\"xLg\":\"x-lg\",\"xOctagon\":\"x-octagon\",\"xOctagonFill\":\"x-octagon-fill\",\"xSquare\":\"x-square\",\"xSquareFill\":\"x-square-fill\",\"xbox\":\"xbox\",\"yinYang\":\"yin-yang\",\"youtube\":\"youtube\",\"zoomIn\":\"zoom-in\",\"zoomOut\":\"zoom-out\"},\"iconsImportUrl\":\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css\",\"colors\":{\"primary\":\"#007bff\",\"secondary\":\"#6c757d\",\"success\":\"#28a745\",\"danger\":\"#dc3545\",\"warning\":\"#ffc107\",\"info\":\"#17a2b8\",\"light\":\"#f8f9fa\",\"dark\":\"#343a40\"}}");

},{}],"aEwYV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const cssConfig = {
    properties: {},
    unitDefaults: {},
    handleEvents: false,
    declarationError: function(e) {
        console.warn(e);
    },
    ruleError: function(e) {
        console.warn(e);
    },
    styleSheetError: function(e) {
        console.warn(e);
    }
};
exports.default = cssConfig;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6PMpg":[function(require,module,exports) {
module.exports = JSON.parse("{\"properties\":{\"msAccelerator\":{\"name\":\"msAccelerator\",\"property\":\"-ms-accelerator\",\"native\":true},\"-ms-accelerator\":{\"name\":\"msAccelerator\",\"property\":\"-ms-accelerator\",\"native\":true},\"msBlockProgression\":{\"name\":\"msBlockProgression\",\"property\":\"-ms-block-progression\",\"native\":true},\"-ms-block-progression\":{\"name\":\"msBlockProgression\",\"property\":\"-ms-block-progression\",\"native\":true},\"msContentZoomChaining\":{\"name\":\"msContentZoomChaining\",\"property\":\"-ms-content-zoom-chaining\",\"native\":true},\"-ms-content-zoom-chaining\":{\"name\":\"msContentZoomChaining\",\"property\":\"-ms-content-zoom-chaining\",\"native\":true},\"msContentZooming\":{\"name\":\"msContentZooming\",\"property\":\"-ms-content-zooming\",\"native\":true},\"-ms-content-zooming\":{\"name\":\"msContentZooming\",\"property\":\"-ms-content-zooming\",\"native\":true},\"msContentZoomLimit\":{\"name\":\"msContentZoomLimit\",\"property\":\"-ms-content-zoom-limit\",\"native\":true},\"-ms-content-zoom-limit\":{\"name\":\"msContentZoomLimit\",\"property\":\"-ms-content-zoom-limit\",\"native\":true},\"msContentZoomLimitMax\":{\"name\":\"msContentZoomLimitMax\",\"property\":\"-ms-content-zoom-limit-max\",\"native\":true},\"-ms-content-zoom-limit-max\":{\"name\":\"msContentZoomLimitMax\",\"property\":\"-ms-content-zoom-limit-max\",\"native\":true},\"msContentZoomLimitMin\":{\"name\":\"msContentZoomLimitMin\",\"property\":\"-ms-content-zoom-limit-min\",\"native\":true},\"-ms-content-zoom-limit-min\":{\"name\":\"msContentZoomLimitMin\",\"property\":\"-ms-content-zoom-limit-min\",\"native\":true},\"msContentZoomSnap\":{\"name\":\"msContentZoomSnap\",\"property\":\"-ms-content-zoom-snap\",\"native\":true},\"-ms-content-zoom-snap\":{\"name\":\"msContentZoomSnap\",\"property\":\"-ms-content-zoom-snap\",\"native\":true},\"msContentZoomSnapPoints\":{\"name\":\"msContentZoomSnapPoints\",\"property\":\"-ms-content-zoom-snap-points\",\"native\":true},\"-ms-content-zoom-snap-points\":{\"name\":\"msContentZoomSnapPoints\",\"property\":\"-ms-content-zoom-snap-points\",\"native\":true},\"msContentZoomSnapType\":{\"name\":\"msContentZoomSnapType\",\"property\":\"-ms-content-zoom-snap-type\",\"native\":true},\"-ms-content-zoom-snap-type\":{\"name\":\"msContentZoomSnapType\",\"property\":\"-ms-content-zoom-snap-type\",\"native\":true},\"msFilter\":{\"name\":\"msFilter\",\"property\":\"-ms-filter\",\"native\":true},\"-ms-filter\":{\"name\":\"msFilter\",\"property\":\"-ms-filter\",\"native\":true},\"msFlowFrom\":{\"name\":\"msFlowFrom\",\"property\":\"-ms-flow-from\",\"native\":true},\"-ms-flow-from\":{\"name\":\"msFlowFrom\",\"property\":\"-ms-flow-from\",\"native\":true},\"msFlowInto\":{\"name\":\"msFlowInto\",\"property\":\"-ms-flow-into\",\"native\":true},\"-ms-flow-into\":{\"name\":\"msFlowInto\",\"property\":\"-ms-flow-into\",\"native\":true},\"msGridColumns\":{\"name\":\"msGridColumns\",\"property\":\"-ms-grid-columns\",\"native\":true},\"-ms-grid-columns\":{\"name\":\"msGridColumns\",\"property\":\"-ms-grid-columns\",\"native\":true},\"msGridRows\":{\"name\":\"msGridRows\",\"property\":\"-ms-grid-rows\",\"native\":true},\"-ms-grid-rows\":{\"name\":\"msGridRows\",\"property\":\"-ms-grid-rows\",\"native\":true},\"msHighContrastAdjust\":{\"name\":\"msHighContrastAdjust\",\"property\":\"-ms-high-contrast-adjust\",\"native\":true},\"-ms-high-contrast-adjust\":{\"name\":\"msHighContrastAdjust\",\"property\":\"-ms-high-contrast-adjust\",\"native\":true},\"msHyphenateLimitChars\":{\"name\":\"msHyphenateLimitChars\",\"property\":\"-ms-hyphenate-limit-chars\",\"native\":true},\"-ms-hyphenate-limit-chars\":{\"name\":\"msHyphenateLimitChars\",\"property\":\"-ms-hyphenate-limit-chars\",\"native\":true},\"msHyphenateLimitLines\":{\"name\":\"msHyphenateLimitLines\",\"property\":\"-ms-hyphenate-limit-lines\",\"native\":true},\"-ms-hyphenate-limit-lines\":{\"name\":\"msHyphenateLimitLines\",\"property\":\"-ms-hyphenate-limit-lines\",\"native\":true},\"msHyphenateLimitZone\":{\"name\":\"msHyphenateLimitZone\",\"property\":\"-ms-hyphenate-limit-zone\",\"native\":true},\"-ms-hyphenate-limit-zone\":{\"name\":\"msHyphenateLimitZone\",\"property\":\"-ms-hyphenate-limit-zone\",\"native\":true},\"msImeAlign\":{\"name\":\"msImeAlign\",\"property\":\"-ms-ime-align\",\"native\":true},\"-ms-ime-align\":{\"name\":\"msImeAlign\",\"property\":\"-ms-ime-align\",\"native\":true},\"msOverflowStyle\":{\"name\":\"msOverflowStyle\",\"property\":\"-ms-overflow-style\",\"native\":true},\"-ms-overflow-style\":{\"name\":\"msOverflowStyle\",\"property\":\"-ms-overflow-style\",\"native\":true},\"msScrollbar3dlightColor\":{\"name\":\"msScrollbar3dlightColor\",\"property\":\"-ms-scrollbar-3dlight-color\",\"native\":true},\"-ms-scrollbar-3dlight-color\":{\"name\":\"msScrollbar3dlightColor\",\"property\":\"-ms-scrollbar-3dlight-color\",\"native\":true},\"msScrollbarArrowColor\":{\"name\":\"msScrollbarArrowColor\",\"property\":\"-ms-scrollbar-arrow-color\",\"native\":true},\"-ms-scrollbar-arrow-color\":{\"name\":\"msScrollbarArrowColor\",\"property\":\"-ms-scrollbar-arrow-color\",\"native\":true},\"msScrollbarBaseColor\":{\"name\":\"msScrollbarBaseColor\",\"property\":\"-ms-scrollbar-base-color\",\"native\":true},\"-ms-scrollbar-base-color\":{\"name\":\"msScrollbarBaseColor\",\"property\":\"-ms-scrollbar-base-color\",\"native\":true},\"msScrollbarDarkshadowColor\":{\"name\":\"msScrollbarDarkshadowColor\",\"property\":\"-ms-scrollbar-darkshadow-color\",\"native\":true},\"-ms-scrollbar-darkshadow-color\":{\"name\":\"msScrollbarDarkshadowColor\",\"property\":\"-ms-scrollbar-darkshadow-color\",\"native\":true},\"msScrollbarFaceColor\":{\"name\":\"msScrollbarFaceColor\",\"property\":\"-ms-scrollbar-face-color\",\"native\":true},\"-ms-scrollbar-face-color\":{\"name\":\"msScrollbarFaceColor\",\"property\":\"-ms-scrollbar-face-color\",\"native\":true},\"msScrollbarHighlightColor\":{\"name\":\"msScrollbarHighlightColor\",\"property\":\"-ms-scrollbar-highlight-color\",\"native\":true},\"-ms-scrollbar-highlight-color\":{\"name\":\"msScrollbarHighlightColor\",\"property\":\"-ms-scrollbar-highlight-color\",\"native\":true},\"msScrollbarShadowColor\":{\"name\":\"msScrollbarShadowColor\",\"property\":\"-ms-scrollbar-shadow-color\",\"native\":true},\"-ms-scrollbar-shadow-color\":{\"name\":\"msScrollbarShadowColor\",\"property\":\"-ms-scrollbar-shadow-color\",\"native\":true},\"msScrollbarTrackColor\":{\"name\":\"msScrollbarTrackColor\",\"property\":\"-ms-scrollbar-track-color\",\"native\":true},\"-ms-scrollbar-track-color\":{\"name\":\"msScrollbarTrackColor\",\"property\":\"-ms-scrollbar-track-color\",\"native\":true},\"msScrollChaining\":{\"name\":\"msScrollChaining\",\"property\":\"-ms-scroll-chaining\",\"native\":true},\"-ms-scroll-chaining\":{\"name\":\"msScrollChaining\",\"property\":\"-ms-scroll-chaining\",\"native\":true},\"msScrollLimit\":{\"name\":\"msScrollLimit\",\"property\":\"-ms-scroll-limit\",\"native\":true},\"-ms-scroll-limit\":{\"name\":\"msScrollLimit\",\"property\":\"-ms-scroll-limit\",\"native\":true},\"msScrollLimitXMax\":{\"name\":\"msScrollLimitXMax\",\"property\":\"-ms-scroll-limit-x-max\",\"native\":true},\"-ms-scroll-limit-x-max\":{\"name\":\"msScrollLimitXMax\",\"property\":\"-ms-scroll-limit-x-max\",\"native\":true},\"msScrollLimitXMin\":{\"name\":\"msScrollLimitXMin\",\"property\":\"-ms-scroll-limit-x-min\",\"native\":true},\"-ms-scroll-limit-x-min\":{\"name\":\"msScrollLimitXMin\",\"property\":\"-ms-scroll-limit-x-min\",\"native\":true},\"msScrollLimitYMax\":{\"name\":\"msScrollLimitYMax\",\"property\":\"-ms-scroll-limit-y-max\",\"native\":true},\"-ms-scroll-limit-y-max\":{\"name\":\"msScrollLimitYMax\",\"property\":\"-ms-scroll-limit-y-max\",\"native\":true},\"msScrollLimitYMin\":{\"name\":\"msScrollLimitYMin\",\"property\":\"-ms-scroll-limit-y-min\",\"native\":true},\"-ms-scroll-limit-y-min\":{\"name\":\"msScrollLimitYMin\",\"property\":\"-ms-scroll-limit-y-min\",\"native\":true},\"msScrollRails\":{\"name\":\"msScrollRails\",\"property\":\"-ms-scroll-rails\",\"native\":true},\"-ms-scroll-rails\":{\"name\":\"msScrollRails\",\"property\":\"-ms-scroll-rails\",\"native\":true},\"msScrollSnapPointsX\":{\"name\":\"msScrollSnapPointsX\",\"property\":\"-ms-scroll-snap-points-x\",\"native\":true},\"-ms-scroll-snap-points-x\":{\"name\":\"msScrollSnapPointsX\",\"property\":\"-ms-scroll-snap-points-x\",\"native\":true},\"msScrollSnapPointsY\":{\"name\":\"msScrollSnapPointsY\",\"property\":\"-ms-scroll-snap-points-y\",\"native\":true},\"-ms-scroll-snap-points-y\":{\"name\":\"msScrollSnapPointsY\",\"property\":\"-ms-scroll-snap-points-y\",\"native\":true},\"msScrollSnapType\":{\"name\":\"msScrollSnapType\",\"property\":\"-ms-scroll-snap-type\",\"native\":true},\"-ms-scroll-snap-type\":{\"name\":\"msScrollSnapType\",\"property\":\"-ms-scroll-snap-type\",\"native\":true},\"msScrollSnapX\":{\"name\":\"msScrollSnapX\",\"property\":\"-ms-scroll-snap-x\",\"native\":true},\"-ms-scroll-snap-x\":{\"name\":\"msScrollSnapX\",\"property\":\"-ms-scroll-snap-x\",\"native\":true},\"msScrollSnapY\":{\"name\":\"msScrollSnapY\",\"property\":\"-ms-scroll-snap-y\",\"native\":true},\"-ms-scroll-snap-y\":{\"name\":\"msScrollSnapY\",\"property\":\"-ms-scroll-snap-y\",\"native\":true},\"msScrollTranslation\":{\"name\":\"msScrollTranslation\",\"property\":\"-ms-scroll-translation\",\"native\":true},\"-ms-scroll-translation\":{\"name\":\"msScrollTranslation\",\"property\":\"-ms-scroll-translation\",\"native\":true},\"msTextAutospace\":{\"name\":\"msTextAutospace\",\"property\":\"-ms-text-autospace\",\"native\":true},\"-ms-text-autospace\":{\"name\":\"msTextAutospace\",\"property\":\"-ms-text-autospace\",\"native\":true},\"msTouchSelect\":{\"name\":\"msTouchSelect\",\"property\":\"-ms-touch-select\",\"native\":true},\"-ms-touch-select\":{\"name\":\"msTouchSelect\",\"property\":\"-ms-touch-select\",\"native\":true},\"msUserSelect\":{\"name\":\"msUserSelect\",\"property\":\"-ms-user-select\",\"native\":true},\"-ms-user-select\":{\"name\":\"msUserSelect\",\"property\":\"-ms-user-select\",\"native\":true},\"msWrapFlow\":{\"name\":\"msWrapFlow\",\"property\":\"-ms-wrap-flow\",\"native\":true},\"-ms-wrap-flow\":{\"name\":\"msWrapFlow\",\"property\":\"-ms-wrap-flow\",\"native\":true},\"msWrapMargin\":{\"name\":\"msWrapMargin\",\"property\":\"-ms-wrap-margin\",\"native\":true},\"-ms-wrap-margin\":{\"name\":\"msWrapMargin\",\"property\":\"-ms-wrap-margin\",\"native\":true},\"msWrapThrough\":{\"name\":\"msWrapThrough\",\"property\":\"-ms-wrap-through\",\"native\":true},\"-ms-wrap-through\":{\"name\":\"msWrapThrough\",\"property\":\"-ms-wrap-through\",\"native\":true},\"mozAppearance\":{\"name\":\"mozAppearance\",\"property\":\"-moz-appearance\",\"native\":true},\"-moz-appearance\":{\"name\":\"mozAppearance\",\"property\":\"-moz-appearance\",\"native\":true},\"mozBinding\":{\"name\":\"mozBinding\",\"property\":\"-moz-binding\",\"native\":true},\"-moz-binding\":{\"name\":\"mozBinding\",\"property\":\"-moz-binding\",\"native\":true},\"mozBorderBottomColors\":{\"name\":\"mozBorderBottomColors\",\"property\":\"-moz-border-bottom-colors\",\"native\":true},\"-moz-border-bottom-colors\":{\"name\":\"mozBorderBottomColors\",\"property\":\"-moz-border-bottom-colors\",\"native\":true},\"mozBorderLeftColors\":{\"name\":\"mozBorderLeftColors\",\"property\":\"-moz-border-left-colors\",\"native\":true},\"-moz-border-left-colors\":{\"name\":\"mozBorderLeftColors\",\"property\":\"-moz-border-left-colors\",\"native\":true},\"mozBorderRightColors\":{\"name\":\"mozBorderRightColors\",\"property\":\"-moz-border-right-colors\",\"native\":true},\"-moz-border-right-colors\":{\"name\":\"mozBorderRightColors\",\"property\":\"-moz-border-right-colors\",\"native\":true},\"mozBorderTopColors\":{\"name\":\"mozBorderTopColors\",\"property\":\"-moz-border-top-colors\",\"native\":true},\"-moz-border-top-colors\":{\"name\":\"mozBorderTopColors\",\"property\":\"-moz-border-top-colors\",\"native\":true},\"mozContextProperties\":{\"name\":\"mozContextProperties\",\"property\":\"-moz-context-properties\",\"native\":true},\"-moz-context-properties\":{\"name\":\"mozContextProperties\",\"property\":\"-moz-context-properties\",\"native\":true},\"mozFloatEdge\":{\"name\":\"mozFloatEdge\",\"property\":\"-moz-float-edge\",\"native\":true},\"-moz-float-edge\":{\"name\":\"mozFloatEdge\",\"property\":\"-moz-float-edge\",\"native\":true},\"mozForceBrokenImageIcon\":{\"name\":\"mozForceBrokenImageIcon\",\"property\":\"-moz-force-broken-image-icon\",\"native\":true},\"-moz-force-broken-image-icon\":{\"name\":\"mozForceBrokenImageIcon\",\"property\":\"-moz-force-broken-image-icon\",\"native\":true},\"mozImageRegion\":{\"name\":\"mozImageRegion\",\"property\":\"-moz-image-region\",\"native\":true},\"-moz-image-region\":{\"name\":\"mozImageRegion\",\"property\":\"-moz-image-region\",\"native\":true},\"mozOrient\":{\"name\":\"mozOrient\",\"property\":\"-moz-orient\",\"native\":true},\"-moz-orient\":{\"name\":\"mozOrient\",\"property\":\"-moz-orient\",\"native\":true},\"mozOutlineRadius\":{\"name\":\"mozOutlineRadius\",\"property\":\"-moz-outline-radius\",\"native\":true},\"-moz-outline-radius\":{\"name\":\"mozOutlineRadius\",\"property\":\"-moz-outline-radius\",\"native\":true},\"mozOutlineRadiusBottomleft\":{\"name\":\"mozOutlineRadiusBottomleft\",\"property\":\"-moz-outline-radius-bottomleft\",\"native\":true},\"-moz-outline-radius-bottomleft\":{\"name\":\"mozOutlineRadiusBottomleft\",\"property\":\"-moz-outline-radius-bottomleft\",\"native\":true},\"mozOutlineRadiusBottomright\":{\"name\":\"mozOutlineRadiusBottomright\",\"property\":\"-moz-outline-radius-bottomright\",\"native\":true},\"-moz-outline-radius-bottomright\":{\"name\":\"mozOutlineRadiusBottomright\",\"property\":\"-moz-outline-radius-bottomright\",\"native\":true},\"mozOutlineRadiusTopleft\":{\"name\":\"mozOutlineRadiusTopleft\",\"property\":\"-moz-outline-radius-topleft\",\"native\":true},\"-moz-outline-radius-topleft\":{\"name\":\"mozOutlineRadiusTopleft\",\"property\":\"-moz-outline-radius-topleft\",\"native\":true},\"mozOutlineRadiusTopright\":{\"name\":\"mozOutlineRadiusTopright\",\"property\":\"-moz-outline-radius-topright\",\"native\":true},\"-moz-outline-radius-topright\":{\"name\":\"mozOutlineRadiusTopright\",\"property\":\"-moz-outline-radius-topright\",\"native\":true},\"mozStackSizing\":{\"name\":\"mozStackSizing\",\"property\":\"-moz-stack-sizing\",\"native\":true},\"-moz-stack-sizing\":{\"name\":\"mozStackSizing\",\"property\":\"-moz-stack-sizing\",\"native\":true},\"mozTextBlink\":{\"name\":\"mozTextBlink\",\"property\":\"-moz-text-blink\",\"native\":true},\"-moz-text-blink\":{\"name\":\"mozTextBlink\",\"property\":\"-moz-text-blink\",\"native\":true},\"mozUserFocus\":{\"name\":\"mozUserFocus\",\"property\":\"-moz-user-focus\",\"native\":true},\"-moz-user-focus\":{\"name\":\"mozUserFocus\",\"property\":\"-moz-user-focus\",\"native\":true},\"mozUserInput\":{\"name\":\"mozUserInput\",\"property\":\"-moz-user-input\",\"native\":true},\"-moz-user-input\":{\"name\":\"mozUserInput\",\"property\":\"-moz-user-input\",\"native\":true},\"mozUserModify\":{\"name\":\"mozUserModify\",\"property\":\"-moz-user-modify\",\"native\":true},\"-moz-user-modify\":{\"name\":\"mozUserModify\",\"property\":\"-moz-user-modify\",\"native\":true},\"mozWindowDragging\":{\"name\":\"mozWindowDragging\",\"property\":\"-moz-window-dragging\",\"native\":true},\"-moz-window-dragging\":{\"name\":\"mozWindowDragging\",\"property\":\"-moz-window-dragging\",\"native\":true},\"mozWindowShadow\":{\"name\":\"mozWindowShadow\",\"property\":\"-moz-window-shadow\",\"native\":true},\"-moz-window-shadow\":{\"name\":\"mozWindowShadow\",\"property\":\"-moz-window-shadow\",\"native\":true},\"webkitAppearance\":{\"name\":\"webkitAppearance\",\"property\":\"-webkit-appearance\",\"native\":true},\"-webkit-appearance\":{\"name\":\"webkitAppearance\",\"property\":\"-webkit-appearance\",\"native\":true},\"webkitBorderBefore\":{\"name\":\"webkitBorderBefore\",\"property\":\"-webkit-border-before\",\"native\":true},\"-webkit-border-before\":{\"name\":\"webkitBorderBefore\",\"property\":\"-webkit-border-before\",\"native\":true},\"webkitBorderBeforeColor\":{\"name\":\"webkitBorderBeforeColor\",\"property\":\"-webkit-border-before-color\",\"native\":true},\"-webkit-border-before-color\":{\"name\":\"webkitBorderBeforeColor\",\"property\":\"-webkit-border-before-color\",\"native\":true},\"webkitBorderBeforeStyle\":{\"name\":\"webkitBorderBeforeStyle\",\"property\":\"-webkit-border-before-style\",\"native\":true},\"-webkit-border-before-style\":{\"name\":\"webkitBorderBeforeStyle\",\"property\":\"-webkit-border-before-style\",\"native\":true},\"webkitBorderBeforeWidth\":{\"name\":\"webkitBorderBeforeWidth\",\"property\":\"-webkit-border-before-width\",\"native\":true},\"-webkit-border-before-width\":{\"name\":\"webkitBorderBeforeWidth\",\"property\":\"-webkit-border-before-width\",\"native\":true},\"webkitBoxReflect\":{\"name\":\"webkitBoxReflect\",\"property\":\"-webkit-box-reflect\",\"native\":true},\"-webkit-box-reflect\":{\"name\":\"webkitBoxReflect\",\"property\":\"-webkit-box-reflect\",\"native\":true},\"webkitLineClamp\":{\"name\":\"webkitLineClamp\",\"property\":\"-webkit-line-clamp\",\"native\":true},\"-webkit-line-clamp\":{\"name\":\"webkitLineClamp\",\"property\":\"-webkit-line-clamp\",\"native\":true},\"webkitMask\":{\"name\":\"webkitMask\",\"property\":\"-webkit-mask\",\"native\":true},\"-webkit-mask\":{\"name\":\"webkitMask\",\"property\":\"-webkit-mask\",\"native\":true},\"webkitMaskAttachment\":{\"name\":\"webkitMaskAttachment\",\"property\":\"-webkit-mask-attachment\",\"native\":true},\"-webkit-mask-attachment\":{\"name\":\"webkitMaskAttachment\",\"property\":\"-webkit-mask-attachment\",\"native\":true},\"webkitMaskClip\":{\"name\":\"webkitMaskClip\",\"property\":\"-webkit-mask-clip\",\"native\":true},\"-webkit-mask-clip\":{\"name\":\"webkitMaskClip\",\"property\":\"-webkit-mask-clip\",\"native\":true},\"webkitMaskComposite\":{\"name\":\"webkitMaskComposite\",\"property\":\"-webkit-mask-composite\",\"native\":true},\"-webkit-mask-composite\":{\"name\":\"webkitMaskComposite\",\"property\":\"-webkit-mask-composite\",\"native\":true},\"webkitMaskImage\":{\"name\":\"webkitMaskImage\",\"property\":\"-webkit-mask-image\",\"native\":true},\"-webkit-mask-image\":{\"name\":\"webkitMaskImage\",\"property\":\"-webkit-mask-image\",\"native\":true},\"webkitMaskOrigin\":{\"name\":\"webkitMaskOrigin\",\"property\":\"-webkit-mask-origin\",\"native\":true},\"-webkit-mask-origin\":{\"name\":\"webkitMaskOrigin\",\"property\":\"-webkit-mask-origin\",\"native\":true},\"webkitMaskPosition\":{\"name\":\"webkitMaskPosition\",\"property\":\"-webkit-mask-position\",\"native\":true},\"-webkit-mask-position\":{\"name\":\"webkitMaskPosition\",\"property\":\"-webkit-mask-position\",\"native\":true},\"webkitMaskPositionX\":{\"name\":\"webkitMaskPositionX\",\"property\":\"-webkit-mask-position-x\",\"native\":true},\"-webkit-mask-position-x\":{\"name\":\"webkitMaskPositionX\",\"property\":\"-webkit-mask-position-x\",\"native\":true},\"webkitMaskPositionY\":{\"name\":\"webkitMaskPositionY\",\"property\":\"-webkit-mask-position-y\",\"native\":true},\"-webkit-mask-position-y\":{\"name\":\"webkitMaskPositionY\",\"property\":\"-webkit-mask-position-y\",\"native\":true},\"webkitMaskRepeat\":{\"name\":\"webkitMaskRepeat\",\"property\":\"-webkit-mask-repeat\",\"native\":true},\"-webkit-mask-repeat\":{\"name\":\"webkitMaskRepeat\",\"property\":\"-webkit-mask-repeat\",\"native\":true},\"webkitMaskRepeatX\":{\"name\":\"webkitMaskRepeatX\",\"property\":\"-webkit-mask-repeat-x\",\"native\":true},\"-webkit-mask-repeat-x\":{\"name\":\"webkitMaskRepeatX\",\"property\":\"-webkit-mask-repeat-x\",\"native\":true},\"webkitMaskRepeatY\":{\"name\":\"webkitMaskRepeatY\",\"property\":\"-webkit-mask-repeat-y\",\"native\":true},\"-webkit-mask-repeat-y\":{\"name\":\"webkitMaskRepeatY\",\"property\":\"-webkit-mask-repeat-y\",\"native\":true},\"webkitMaskSize\":{\"name\":\"webkitMaskSize\",\"property\":\"-webkit-mask-size\",\"native\":true},\"-webkit-mask-size\":{\"name\":\"webkitMaskSize\",\"property\":\"-webkit-mask-size\",\"native\":true},\"webkitOverflowScrolling\":{\"name\":\"webkitOverflowScrolling\",\"property\":\"-webkit-overflow-scrolling\",\"native\":true},\"-webkit-overflow-scrolling\":{\"name\":\"webkitOverflowScrolling\",\"property\":\"-webkit-overflow-scrolling\",\"native\":true},\"webkitTapHighlightColor\":{\"name\":\"webkitTapHighlightColor\",\"property\":\"-webkit-tap-highlight-color\",\"native\":true},\"-webkit-tap-highlight-color\":{\"name\":\"webkitTapHighlightColor\",\"property\":\"-webkit-tap-highlight-color\",\"native\":true},\"webkitTextFillColor\":{\"name\":\"webkitTextFillColor\",\"property\":\"-webkit-text-fill-color\",\"native\":true},\"-webkit-text-fill-color\":{\"name\":\"webkitTextFillColor\",\"property\":\"-webkit-text-fill-color\",\"native\":true},\"webkitTextStroke\":{\"name\":\"webkitTextStroke\",\"property\":\"-webkit-text-stroke\",\"native\":true},\"-webkit-text-stroke\":{\"name\":\"webkitTextStroke\",\"property\":\"-webkit-text-stroke\",\"native\":true},\"webkitTextStrokeColor\":{\"name\":\"webkitTextStrokeColor\",\"property\":\"-webkit-text-stroke-color\",\"native\":true},\"-webkit-text-stroke-color\":{\"name\":\"webkitTextStrokeColor\",\"property\":\"-webkit-text-stroke-color\",\"native\":true},\"webkitTextStrokeWidth\":{\"name\":\"webkitTextStrokeWidth\",\"property\":\"-webkit-text-stroke-width\",\"native\":true},\"-webkit-text-stroke-width\":{\"name\":\"webkitTextStrokeWidth\",\"property\":\"-webkit-text-stroke-width\",\"native\":true},\"webkitTouchCallout\":{\"name\":\"webkitTouchCallout\",\"property\":\"-webkit-touch-callout\",\"native\":true},\"-webkit-touch-callout\":{\"name\":\"webkitTouchCallout\",\"property\":\"-webkit-touch-callout\",\"native\":true},\"webkitUserModify\":{\"name\":\"webkitUserModify\",\"property\":\"-webkit-user-modify\",\"native\":true},\"-webkit-user-modify\":{\"name\":\"webkitUserModify\",\"property\":\"-webkit-user-modify\",\"native\":true},\"accentColor\":{\"name\":\"accentColor\",\"property\":\"accent-color\",\"native\":true},\"accent-color\":{\"name\":\"accentColor\",\"property\":\"accent-color\",\"native\":true},\"alignContent\":{\"name\":\"alignContent\",\"property\":\"align-content\",\"native\":true},\"align-content\":{\"name\":\"alignContent\",\"property\":\"align-content\",\"native\":true},\"alignItems\":{\"name\":\"alignItems\",\"property\":\"align-items\",\"native\":true},\"align-items\":{\"name\":\"alignItems\",\"property\":\"align-items\",\"native\":true},\"alignSelf\":{\"name\":\"alignSelf\",\"property\":\"align-self\",\"native\":true},\"align-self\":{\"name\":\"alignSelf\",\"property\":\"align-self\",\"native\":true},\"alignTracks\":{\"name\":\"alignTracks\",\"property\":\"align-tracks\",\"native\":true},\"align-tracks\":{\"name\":\"alignTracks\",\"property\":\"align-tracks\",\"native\":true},\"all\":{\"name\":\"all\",\"property\":\"all\",\"native\":true},\"animation\":{\"name\":\"animation\",\"property\":\"animation\",\"native\":true},\"animationDelay\":{\"name\":\"animationDelay\",\"property\":\"animation-delay\",\"native\":true},\"animation-delay\":{\"name\":\"animationDelay\",\"property\":\"animation-delay\",\"native\":true},\"animationDirection\":{\"name\":\"animationDirection\",\"property\":\"animation-direction\",\"native\":true},\"animation-direction\":{\"name\":\"animationDirection\",\"property\":\"animation-direction\",\"native\":true},\"animationDuration\":{\"name\":\"animationDuration\",\"property\":\"animation-duration\",\"native\":true},\"animation-duration\":{\"name\":\"animationDuration\",\"property\":\"animation-duration\",\"native\":true},\"animationFillMode\":{\"name\":\"animationFillMode\",\"property\":\"animation-fill-mode\",\"native\":true},\"animation-fill-mode\":{\"name\":\"animationFillMode\",\"property\":\"animation-fill-mode\",\"native\":true},\"animationIterationCount\":{\"name\":\"animationIterationCount\",\"property\":\"animation-iteration-count\",\"native\":true},\"animation-iteration-count\":{\"name\":\"animationIterationCount\",\"property\":\"animation-iteration-count\",\"native\":true},\"animationName\":{\"name\":\"animationName\",\"property\":\"animation-name\",\"native\":true},\"animation-name\":{\"name\":\"animationName\",\"property\":\"animation-name\",\"native\":true},\"animationPlayState\":{\"name\":\"animationPlayState\",\"property\":\"animation-play-state\",\"native\":true},\"animation-play-state\":{\"name\":\"animationPlayState\",\"property\":\"animation-play-state\",\"native\":true},\"animationTimingFunction\":{\"name\":\"animationTimingFunction\",\"property\":\"animation-timing-function\",\"native\":true},\"animation-timing-function\":{\"name\":\"animationTimingFunction\",\"property\":\"animation-timing-function\",\"native\":true},\"appearance\":{\"name\":\"appearance\",\"property\":\"appearance\",\"native\":true},\"aspectRatio\":{\"name\":\"aspectRatio\",\"property\":\"aspect-ratio\",\"native\":true},\"aspect-ratio\":{\"name\":\"aspectRatio\",\"property\":\"aspect-ratio\",\"native\":true},\"azimuth\":{\"name\":\"azimuth\",\"property\":\"azimuth\",\"native\":true},\"backdropFilter\":{\"name\":\"backdropFilter\",\"property\":\"backdrop-filter\",\"native\":true},\"backdrop-filter\":{\"name\":\"backdropFilter\",\"property\":\"backdrop-filter\",\"native\":true},\"backfaceVisibility\":{\"name\":\"backfaceVisibility\",\"property\":\"backface-visibility\",\"native\":true},\"backface-visibility\":{\"name\":\"backfaceVisibility\",\"property\":\"backface-visibility\",\"native\":true},\"background\":{\"name\":\"background\",\"property\":\"background\",\"native\":true},\"backgroundAttachment\":{\"name\":\"backgroundAttachment\",\"property\":\"background-attachment\",\"native\":true},\"background-attachment\":{\"name\":\"backgroundAttachment\",\"property\":\"background-attachment\",\"native\":true},\"backgroundBlendMode\":{\"name\":\"backgroundBlendMode\",\"property\":\"background-blend-mode\",\"native\":true},\"background-blend-mode\":{\"name\":\"backgroundBlendMode\",\"property\":\"background-blend-mode\",\"native\":true},\"backgroundClip\":{\"name\":\"backgroundClip\",\"property\":\"background-clip\",\"native\":true},\"background-clip\":{\"name\":\"backgroundClip\",\"property\":\"background-clip\",\"native\":true},\"backgroundColor\":{\"name\":\"backgroundColor\",\"property\":\"background-color\",\"native\":true},\"background-color\":{\"name\":\"backgroundColor\",\"property\":\"background-color\",\"native\":true},\"backgroundImage\":{\"name\":\"backgroundImage\",\"property\":\"background-image\",\"native\":true},\"background-image\":{\"name\":\"backgroundImage\",\"property\":\"background-image\",\"native\":true},\"backgroundOrigin\":{\"name\":\"backgroundOrigin\",\"property\":\"background-origin\",\"native\":true},\"background-origin\":{\"name\":\"backgroundOrigin\",\"property\":\"background-origin\",\"native\":true},\"backgroundPosition\":{\"name\":\"backgroundPosition\",\"property\":\"background-position\",\"native\":true},\"background-position\":{\"name\":\"backgroundPosition\",\"property\":\"background-position\",\"native\":true},\"backgroundPositionX\":{\"name\":\"backgroundPositionX\",\"property\":\"background-position-x\",\"native\":true},\"background-position-x\":{\"name\":\"backgroundPositionX\",\"property\":\"background-position-x\",\"native\":true},\"backgroundPositionY\":{\"name\":\"backgroundPositionY\",\"property\":\"background-position-y\",\"native\":true},\"background-position-y\":{\"name\":\"backgroundPositionY\",\"property\":\"background-position-y\",\"native\":true},\"backgroundRepeat\":{\"name\":\"backgroundRepeat\",\"property\":\"background-repeat\",\"native\":true},\"background-repeat\":{\"name\":\"backgroundRepeat\",\"property\":\"background-repeat\",\"native\":true},\"backgroundSize\":{\"name\":\"backgroundSize\",\"property\":\"background-size\",\"native\":true},\"background-size\":{\"name\":\"backgroundSize\",\"property\":\"background-size\",\"native\":true},\"blockOverflow\":{\"name\":\"blockOverflow\",\"property\":\"block-overflow\",\"native\":true},\"block-overflow\":{\"name\":\"blockOverflow\",\"property\":\"block-overflow\",\"native\":true},\"blockSize\":{\"name\":\"blockSize\",\"property\":\"block-size\",\"native\":true},\"block-size\":{\"name\":\"blockSize\",\"property\":\"block-size\",\"native\":true},\"border\":{\"name\":\"border\",\"property\":\"border\",\"native\":true},\"borderBlock\":{\"name\":\"borderBlock\",\"property\":\"border-block\",\"native\":true},\"border-block\":{\"name\":\"borderBlock\",\"property\":\"border-block\",\"native\":true},\"borderBlockColor\":{\"name\":\"borderBlockColor\",\"property\":\"border-block-color\",\"native\":true},\"border-block-color\":{\"name\":\"borderBlockColor\",\"property\":\"border-block-color\",\"native\":true},\"borderBlockStyle\":{\"name\":\"borderBlockStyle\",\"property\":\"border-block-style\",\"native\":true},\"border-block-style\":{\"name\":\"borderBlockStyle\",\"property\":\"border-block-style\",\"native\":true},\"borderBlockWidth\":{\"name\":\"borderBlockWidth\",\"property\":\"border-block-width\",\"native\":true},\"border-block-width\":{\"name\":\"borderBlockWidth\",\"property\":\"border-block-width\",\"native\":true},\"borderBlockEnd\":{\"name\":\"borderBlockEnd\",\"property\":\"border-block-end\",\"native\":true},\"border-block-end\":{\"name\":\"borderBlockEnd\",\"property\":\"border-block-end\",\"native\":true},\"borderBlockEndColor\":{\"name\":\"borderBlockEndColor\",\"property\":\"border-block-end-color\",\"native\":true},\"border-block-end-color\":{\"name\":\"borderBlockEndColor\",\"property\":\"border-block-end-color\",\"native\":true},\"borderBlockEndStyle\":{\"name\":\"borderBlockEndStyle\",\"property\":\"border-block-end-style\",\"native\":true},\"border-block-end-style\":{\"name\":\"borderBlockEndStyle\",\"property\":\"border-block-end-style\",\"native\":true},\"borderBlockEndWidth\":{\"name\":\"borderBlockEndWidth\",\"property\":\"border-block-end-width\",\"native\":true},\"border-block-end-width\":{\"name\":\"borderBlockEndWidth\",\"property\":\"border-block-end-width\",\"native\":true},\"borderBlockStart\":{\"name\":\"borderBlockStart\",\"property\":\"border-block-start\",\"native\":true},\"border-block-start\":{\"name\":\"borderBlockStart\",\"property\":\"border-block-start\",\"native\":true},\"borderBlockStartColor\":{\"name\":\"borderBlockStartColor\",\"property\":\"border-block-start-color\",\"native\":true},\"border-block-start-color\":{\"name\":\"borderBlockStartColor\",\"property\":\"border-block-start-color\",\"native\":true},\"borderBlockStartStyle\":{\"name\":\"borderBlockStartStyle\",\"property\":\"border-block-start-style\",\"native\":true},\"border-block-start-style\":{\"name\":\"borderBlockStartStyle\",\"property\":\"border-block-start-style\",\"native\":true},\"borderBlockStartWidth\":{\"name\":\"borderBlockStartWidth\",\"property\":\"border-block-start-width\",\"native\":true},\"border-block-start-width\":{\"name\":\"borderBlockStartWidth\",\"property\":\"border-block-start-width\",\"native\":true},\"borderBottom\":{\"name\":\"borderBottom\",\"property\":\"border-bottom\",\"native\":true},\"border-bottom\":{\"name\":\"borderBottom\",\"property\":\"border-bottom\",\"native\":true},\"borderBottomColor\":{\"name\":\"borderBottomColor\",\"property\":\"border-bottom-color\",\"native\":true},\"border-bottom-color\":{\"name\":\"borderBottomColor\",\"property\":\"border-bottom-color\",\"native\":true},\"borderBottomLeftRadius\":{\"name\":\"borderBottomLeftRadius\",\"property\":\"border-bottom-left-radius\",\"native\":true},\"border-bottom-left-radius\":{\"name\":\"borderBottomLeftRadius\",\"property\":\"border-bottom-left-radius\",\"native\":true},\"borderBottomRightRadius\":{\"name\":\"borderBottomRightRadius\",\"property\":\"border-bottom-right-radius\",\"native\":true},\"border-bottom-right-radius\":{\"name\":\"borderBottomRightRadius\",\"property\":\"border-bottom-right-radius\",\"native\":true},\"borderBottomStyle\":{\"name\":\"borderBottomStyle\",\"property\":\"border-bottom-style\",\"native\":true},\"border-bottom-style\":{\"name\":\"borderBottomStyle\",\"property\":\"border-bottom-style\",\"native\":true},\"borderBottomWidth\":{\"name\":\"borderBottomWidth\",\"property\":\"border-bottom-width\",\"native\":true},\"border-bottom-width\":{\"name\":\"borderBottomWidth\",\"property\":\"border-bottom-width\",\"native\":true},\"borderCollapse\":{\"name\":\"borderCollapse\",\"property\":\"border-collapse\",\"native\":true},\"border-collapse\":{\"name\":\"borderCollapse\",\"property\":\"border-collapse\",\"native\":true},\"borderColor\":{\"name\":\"borderColor\",\"property\":\"border-color\",\"native\":true},\"border-color\":{\"name\":\"borderColor\",\"property\":\"border-color\",\"native\":true},\"borderEndEndRadius\":{\"name\":\"borderEndEndRadius\",\"property\":\"border-end-end-radius\",\"native\":true},\"border-end-end-radius\":{\"name\":\"borderEndEndRadius\",\"property\":\"border-end-end-radius\",\"native\":true},\"borderEndStartRadius\":{\"name\":\"borderEndStartRadius\",\"property\":\"border-end-start-radius\",\"native\":true},\"border-end-start-radius\":{\"name\":\"borderEndStartRadius\",\"property\":\"border-end-start-radius\",\"native\":true},\"borderImage\":{\"name\":\"borderImage\",\"property\":\"border-image\",\"native\":true},\"border-image\":{\"name\":\"borderImage\",\"property\":\"border-image\",\"native\":true},\"borderImageOutset\":{\"name\":\"borderImageOutset\",\"property\":\"border-image-outset\",\"native\":true},\"border-image-outset\":{\"name\":\"borderImageOutset\",\"property\":\"border-image-outset\",\"native\":true},\"borderImageRepeat\":{\"name\":\"borderImageRepeat\",\"property\":\"border-image-repeat\",\"native\":true},\"border-image-repeat\":{\"name\":\"borderImageRepeat\",\"property\":\"border-image-repeat\",\"native\":true},\"borderImageSlice\":{\"name\":\"borderImageSlice\",\"property\":\"border-image-slice\",\"native\":true},\"border-image-slice\":{\"name\":\"borderImageSlice\",\"property\":\"border-image-slice\",\"native\":true},\"borderImageSource\":{\"name\":\"borderImageSource\",\"property\":\"border-image-source\",\"native\":true},\"border-image-source\":{\"name\":\"borderImageSource\",\"property\":\"border-image-source\",\"native\":true},\"borderImageWidth\":{\"name\":\"borderImageWidth\",\"property\":\"border-image-width\",\"native\":true},\"border-image-width\":{\"name\":\"borderImageWidth\",\"property\":\"border-image-width\",\"native\":true},\"borderInline\":{\"name\":\"borderInline\",\"property\":\"border-inline\",\"native\":true},\"border-inline\":{\"name\":\"borderInline\",\"property\":\"border-inline\",\"native\":true},\"borderInlineEnd\":{\"name\":\"borderInlineEnd\",\"property\":\"border-inline-end\",\"native\":true},\"border-inline-end\":{\"name\":\"borderInlineEnd\",\"property\":\"border-inline-end\",\"native\":true},\"borderInlineColor\":{\"name\":\"borderInlineColor\",\"property\":\"border-inline-color\",\"native\":true},\"border-inline-color\":{\"name\":\"borderInlineColor\",\"property\":\"border-inline-color\",\"native\":true},\"borderInlineStyle\":{\"name\":\"borderInlineStyle\",\"property\":\"border-inline-style\",\"native\":true},\"border-inline-style\":{\"name\":\"borderInlineStyle\",\"property\":\"border-inline-style\",\"native\":true},\"borderInlineWidth\":{\"name\":\"borderInlineWidth\",\"property\":\"border-inline-width\",\"native\":true},\"border-inline-width\":{\"name\":\"borderInlineWidth\",\"property\":\"border-inline-width\",\"native\":true},\"borderInlineEndColor\":{\"name\":\"borderInlineEndColor\",\"property\":\"border-inline-end-color\",\"native\":true},\"border-inline-end-color\":{\"name\":\"borderInlineEndColor\",\"property\":\"border-inline-end-color\",\"native\":true},\"borderInlineEndStyle\":{\"name\":\"borderInlineEndStyle\",\"property\":\"border-inline-end-style\",\"native\":true},\"border-inline-end-style\":{\"name\":\"borderInlineEndStyle\",\"property\":\"border-inline-end-style\",\"native\":true},\"borderInlineEndWidth\":{\"name\":\"borderInlineEndWidth\",\"property\":\"border-inline-end-width\",\"native\":true},\"border-inline-end-width\":{\"name\":\"borderInlineEndWidth\",\"property\":\"border-inline-end-width\",\"native\":true},\"borderInlineStart\":{\"name\":\"borderInlineStart\",\"property\":\"border-inline-start\",\"native\":true},\"border-inline-start\":{\"name\":\"borderInlineStart\",\"property\":\"border-inline-start\",\"native\":true},\"borderInlineStartColor\":{\"name\":\"borderInlineStartColor\",\"property\":\"border-inline-start-color\",\"native\":true},\"border-inline-start-color\":{\"name\":\"borderInlineStartColor\",\"property\":\"border-inline-start-color\",\"native\":true},\"borderInlineStartStyle\":{\"name\":\"borderInlineStartStyle\",\"property\":\"border-inline-start-style\",\"native\":true},\"border-inline-start-style\":{\"name\":\"borderInlineStartStyle\",\"property\":\"border-inline-start-style\",\"native\":true},\"borderInlineStartWidth\":{\"name\":\"borderInlineStartWidth\",\"property\":\"border-inline-start-width\",\"native\":true},\"border-inline-start-width\":{\"name\":\"borderInlineStartWidth\",\"property\":\"border-inline-start-width\",\"native\":true},\"borderLeft\":{\"name\":\"borderLeft\",\"property\":\"border-left\",\"native\":true},\"border-left\":{\"name\":\"borderLeft\",\"property\":\"border-left\",\"native\":true},\"borderLeftColor\":{\"name\":\"borderLeftColor\",\"property\":\"border-left-color\",\"native\":true},\"border-left-color\":{\"name\":\"borderLeftColor\",\"property\":\"border-left-color\",\"native\":true},\"borderLeftStyle\":{\"name\":\"borderLeftStyle\",\"property\":\"border-left-style\",\"native\":true},\"border-left-style\":{\"name\":\"borderLeftStyle\",\"property\":\"border-left-style\",\"native\":true},\"borderLeftWidth\":{\"name\":\"borderLeftWidth\",\"property\":\"border-left-width\",\"native\":true},\"border-left-width\":{\"name\":\"borderLeftWidth\",\"property\":\"border-left-width\",\"native\":true},\"borderRadius\":{\"name\":\"borderRadius\",\"property\":\"border-radius\",\"native\":true},\"border-radius\":{\"name\":\"borderRadius\",\"property\":\"border-radius\",\"native\":true},\"borderRight\":{\"name\":\"borderRight\",\"property\":\"border-right\",\"native\":true},\"border-right\":{\"name\":\"borderRight\",\"property\":\"border-right\",\"native\":true},\"borderRightColor\":{\"name\":\"borderRightColor\",\"property\":\"border-right-color\",\"native\":true},\"border-right-color\":{\"name\":\"borderRightColor\",\"property\":\"border-right-color\",\"native\":true},\"borderRightStyle\":{\"name\":\"borderRightStyle\",\"property\":\"border-right-style\",\"native\":true},\"border-right-style\":{\"name\":\"borderRightStyle\",\"property\":\"border-right-style\",\"native\":true},\"borderRightWidth\":{\"name\":\"borderRightWidth\",\"property\":\"border-right-width\",\"native\":true},\"border-right-width\":{\"name\":\"borderRightWidth\",\"property\":\"border-right-width\",\"native\":true},\"borderSpacing\":{\"name\":\"borderSpacing\",\"property\":\"border-spacing\",\"native\":true},\"border-spacing\":{\"name\":\"borderSpacing\",\"property\":\"border-spacing\",\"native\":true},\"borderStartEndRadius\":{\"name\":\"borderStartEndRadius\",\"property\":\"border-start-end-radius\",\"native\":true},\"border-start-end-radius\":{\"name\":\"borderStartEndRadius\",\"property\":\"border-start-end-radius\",\"native\":true},\"borderStartStartRadius\":{\"name\":\"borderStartStartRadius\",\"property\":\"border-start-start-radius\",\"native\":true},\"border-start-start-radius\":{\"name\":\"borderStartStartRadius\",\"property\":\"border-start-start-radius\",\"native\":true},\"borderStyle\":{\"name\":\"borderStyle\",\"property\":\"border-style\",\"native\":true},\"border-style\":{\"name\":\"borderStyle\",\"property\":\"border-style\",\"native\":true},\"borderTop\":{\"name\":\"borderTop\",\"property\":\"border-top\",\"native\":true},\"border-top\":{\"name\":\"borderTop\",\"property\":\"border-top\",\"native\":true},\"borderTopColor\":{\"name\":\"borderTopColor\",\"property\":\"border-top-color\",\"native\":true},\"border-top-color\":{\"name\":\"borderTopColor\",\"property\":\"border-top-color\",\"native\":true},\"borderTopLeftRadius\":{\"name\":\"borderTopLeftRadius\",\"property\":\"border-top-left-radius\",\"native\":true},\"border-top-left-radius\":{\"name\":\"borderTopLeftRadius\",\"property\":\"border-top-left-radius\",\"native\":true},\"borderTopRightRadius\":{\"name\":\"borderTopRightRadius\",\"property\":\"border-top-right-radius\",\"native\":true},\"border-top-right-radius\":{\"name\":\"borderTopRightRadius\",\"property\":\"border-top-right-radius\",\"native\":true},\"borderTopStyle\":{\"name\":\"borderTopStyle\",\"property\":\"border-top-style\",\"native\":true},\"border-top-style\":{\"name\":\"borderTopStyle\",\"property\":\"border-top-style\",\"native\":true},\"borderTopWidth\":{\"name\":\"borderTopWidth\",\"property\":\"border-top-width\",\"native\":true},\"border-top-width\":{\"name\":\"borderTopWidth\",\"property\":\"border-top-width\",\"native\":true},\"borderWidth\":{\"name\":\"borderWidth\",\"property\":\"border-width\",\"native\":true},\"border-width\":{\"name\":\"borderWidth\",\"property\":\"border-width\",\"native\":true},\"bottom\":{\"name\":\"bottom\",\"property\":\"bottom\",\"native\":true},\"boxAlign\":{\"name\":\"boxAlign\",\"property\":\"box-align\",\"native\":true},\"box-align\":{\"name\":\"boxAlign\",\"property\":\"box-align\",\"native\":true},\"boxDecorationBreak\":{\"name\":\"boxDecorationBreak\",\"property\":\"box-decoration-break\",\"native\":true},\"box-decoration-break\":{\"name\":\"boxDecorationBreak\",\"property\":\"box-decoration-break\",\"native\":true},\"boxDirection\":{\"name\":\"boxDirection\",\"property\":\"box-direction\",\"native\":true},\"box-direction\":{\"name\":\"boxDirection\",\"property\":\"box-direction\",\"native\":true},\"boxFlex\":{\"name\":\"boxFlex\",\"property\":\"box-flex\",\"native\":true},\"box-flex\":{\"name\":\"boxFlex\",\"property\":\"box-flex\",\"native\":true},\"boxFlexGroup\":{\"name\":\"boxFlexGroup\",\"property\":\"box-flex-group\",\"native\":true},\"box-flex-group\":{\"name\":\"boxFlexGroup\",\"property\":\"box-flex-group\",\"native\":true},\"boxLines\":{\"name\":\"boxLines\",\"property\":\"box-lines\",\"native\":true},\"box-lines\":{\"name\":\"boxLines\",\"property\":\"box-lines\",\"native\":true},\"boxOrdinalGroup\":{\"name\":\"boxOrdinalGroup\",\"property\":\"box-ordinal-group\",\"native\":true},\"box-ordinal-group\":{\"name\":\"boxOrdinalGroup\",\"property\":\"box-ordinal-group\",\"native\":true},\"boxOrient\":{\"name\":\"boxOrient\",\"property\":\"box-orient\",\"native\":true},\"box-orient\":{\"name\":\"boxOrient\",\"property\":\"box-orient\",\"native\":true},\"boxPack\":{\"name\":\"boxPack\",\"property\":\"box-pack\",\"native\":true},\"box-pack\":{\"name\":\"boxPack\",\"property\":\"box-pack\",\"native\":true},\"boxShadow\":{\"name\":\"boxShadow\",\"property\":\"box-shadow\",\"native\":true},\"box-shadow\":{\"name\":\"boxShadow\",\"property\":\"box-shadow\",\"native\":true},\"boxSizing\":{\"name\":\"boxSizing\",\"property\":\"box-sizing\",\"native\":true},\"box-sizing\":{\"name\":\"boxSizing\",\"property\":\"box-sizing\",\"native\":true},\"breakAfter\":{\"name\":\"breakAfter\",\"property\":\"break-after\",\"native\":true},\"break-after\":{\"name\":\"breakAfter\",\"property\":\"break-after\",\"native\":true},\"breakBefore\":{\"name\":\"breakBefore\",\"property\":\"break-before\",\"native\":true},\"break-before\":{\"name\":\"breakBefore\",\"property\":\"break-before\",\"native\":true},\"breakInside\":{\"name\":\"breakInside\",\"property\":\"break-inside\",\"native\":true},\"break-inside\":{\"name\":\"breakInside\",\"property\":\"break-inside\",\"native\":true},\"captionSide\":{\"name\":\"captionSide\",\"property\":\"caption-side\",\"native\":true},\"caption-side\":{\"name\":\"captionSide\",\"property\":\"caption-side\",\"native\":true},\"caretColor\":{\"name\":\"caretColor\",\"property\":\"caret-color\",\"native\":true},\"caret-color\":{\"name\":\"caretColor\",\"property\":\"caret-color\",\"native\":true},\"clear\":{\"name\":\"clear\",\"property\":\"clear\",\"native\":true},\"clip\":{\"name\":\"clip\",\"property\":\"clip\",\"native\":true},\"clipPath\":{\"name\":\"clipPath\",\"property\":\"clip-path\",\"native\":true},\"clip-path\":{\"name\":\"clipPath\",\"property\":\"clip-path\",\"native\":true},\"color\":{\"name\":\"color\",\"property\":\"color\",\"native\":true},\"colorAdjust\":{\"name\":\"colorAdjust\",\"property\":\"color-adjust\",\"native\":true},\"color-adjust\":{\"name\":\"colorAdjust\",\"property\":\"color-adjust\",\"native\":true},\"colorScheme\":{\"name\":\"colorScheme\",\"property\":\"color-scheme\",\"native\":true},\"color-scheme\":{\"name\":\"colorScheme\",\"property\":\"color-scheme\",\"native\":true},\"columnCount\":{\"name\":\"columnCount\",\"property\":\"column-count\",\"native\":true},\"column-count\":{\"name\":\"columnCount\",\"property\":\"column-count\",\"native\":true},\"columnFill\":{\"name\":\"columnFill\",\"property\":\"column-fill\",\"native\":true},\"column-fill\":{\"name\":\"columnFill\",\"property\":\"column-fill\",\"native\":true},\"columnGap\":{\"name\":\"columnGap\",\"property\":\"column-gap\",\"native\":true},\"column-gap\":{\"name\":\"columnGap\",\"property\":\"column-gap\",\"native\":true},\"columnRule\":{\"name\":\"columnRule\",\"property\":\"column-rule\",\"native\":true},\"column-rule\":{\"name\":\"columnRule\",\"property\":\"column-rule\",\"native\":true},\"columnRuleColor\":{\"name\":\"columnRuleColor\",\"property\":\"column-rule-color\",\"native\":true},\"column-rule-color\":{\"name\":\"columnRuleColor\",\"property\":\"column-rule-color\",\"native\":true},\"columnRuleStyle\":{\"name\":\"columnRuleStyle\",\"property\":\"column-rule-style\",\"native\":true},\"column-rule-style\":{\"name\":\"columnRuleStyle\",\"property\":\"column-rule-style\",\"native\":true},\"columnRuleWidth\":{\"name\":\"columnRuleWidth\",\"property\":\"column-rule-width\",\"native\":true},\"column-rule-width\":{\"name\":\"columnRuleWidth\",\"property\":\"column-rule-width\",\"native\":true},\"columnSpan\":{\"name\":\"columnSpan\",\"property\":\"column-span\",\"native\":true},\"column-span\":{\"name\":\"columnSpan\",\"property\":\"column-span\",\"native\":true},\"columnWidth\":{\"name\":\"columnWidth\",\"property\":\"column-width\",\"native\":true},\"column-width\":{\"name\":\"columnWidth\",\"property\":\"column-width\",\"native\":true},\"columns\":{\"name\":\"columns\",\"property\":\"columns\",\"native\":true},\"contain\":{\"name\":\"contain\",\"property\":\"contain\",\"native\":true},\"content\":{\"name\":\"content\",\"property\":\"content\",\"native\":true},\"contentVisibility\":{\"name\":\"contentVisibility\",\"property\":\"content-visibility\",\"native\":true},\"content-visibility\":{\"name\":\"contentVisibility\",\"property\":\"content-visibility\",\"native\":true},\"counterIncrement\":{\"name\":\"counterIncrement\",\"property\":\"counter-increment\",\"native\":true},\"counter-increment\":{\"name\":\"counterIncrement\",\"property\":\"counter-increment\",\"native\":true},\"counterReset\":{\"name\":\"counterReset\",\"property\":\"counter-reset\",\"native\":true},\"counter-reset\":{\"name\":\"counterReset\",\"property\":\"counter-reset\",\"native\":true},\"counterSet\":{\"name\":\"counterSet\",\"property\":\"counter-set\",\"native\":true},\"counter-set\":{\"name\":\"counterSet\",\"property\":\"counter-set\",\"native\":true},\"cursor\":{\"name\":\"cursor\",\"property\":\"cursor\",\"native\":true},\"direction\":{\"name\":\"direction\",\"property\":\"direction\",\"native\":true},\"display\":{\"name\":\"display\",\"property\":\"display\",\"native\":true},\"emptyCells\":{\"name\":\"emptyCells\",\"property\":\"empty-cells\",\"native\":true},\"empty-cells\":{\"name\":\"emptyCells\",\"property\":\"empty-cells\",\"native\":true},\"filter\":{\"name\":\"filter\",\"property\":\"filter\",\"native\":true},\"flex\":{\"name\":\"flex\",\"property\":\"flex\",\"native\":true},\"flexBasis\":{\"name\":\"flexBasis\",\"property\":\"flex-basis\",\"native\":true},\"flex-basis\":{\"name\":\"flexBasis\",\"property\":\"flex-basis\",\"native\":true},\"flexDirection\":{\"name\":\"flexDirection\",\"property\":\"flex-direction\",\"native\":true},\"flex-direction\":{\"name\":\"flexDirection\",\"property\":\"flex-direction\",\"native\":true},\"flexFlow\":{\"name\":\"flexFlow\",\"property\":\"flex-flow\",\"native\":true},\"flex-flow\":{\"name\":\"flexFlow\",\"property\":\"flex-flow\",\"native\":true},\"flexGrow\":{\"name\":\"flexGrow\",\"property\":\"flex-grow\",\"native\":true},\"flex-grow\":{\"name\":\"flexGrow\",\"property\":\"flex-grow\",\"native\":true},\"flexShrink\":{\"name\":\"flexShrink\",\"property\":\"flex-shrink\",\"native\":true},\"flex-shrink\":{\"name\":\"flexShrink\",\"property\":\"flex-shrink\",\"native\":true},\"flexWrap\":{\"name\":\"flexWrap\",\"property\":\"flex-wrap\",\"native\":true},\"flex-wrap\":{\"name\":\"flexWrap\",\"property\":\"flex-wrap\",\"native\":true},\"float\":{\"name\":\"float\",\"property\":\"float\",\"native\":true},\"font\":{\"name\":\"font\",\"property\":\"font\",\"native\":true},\"fontFamily\":{\"name\":\"fontFamily\",\"property\":\"font-family\",\"native\":true},\"font-family\":{\"name\":\"fontFamily\",\"property\":\"font-family\",\"native\":true},\"fontFeatureSettings\":{\"name\":\"fontFeatureSettings\",\"property\":\"font-feature-settings\",\"native\":true},\"font-feature-settings\":{\"name\":\"fontFeatureSettings\",\"property\":\"font-feature-settings\",\"native\":true},\"fontKerning\":{\"name\":\"fontKerning\",\"property\":\"font-kerning\",\"native\":true},\"font-kerning\":{\"name\":\"fontKerning\",\"property\":\"font-kerning\",\"native\":true},\"fontLanguageOverride\":{\"name\":\"fontLanguageOverride\",\"property\":\"font-language-override\",\"native\":true},\"font-language-override\":{\"name\":\"fontLanguageOverride\",\"property\":\"font-language-override\",\"native\":true},\"fontOpticalSizing\":{\"name\":\"fontOpticalSizing\",\"property\":\"font-optical-sizing\",\"native\":true},\"font-optical-sizing\":{\"name\":\"fontOpticalSizing\",\"property\":\"font-optical-sizing\",\"native\":true},\"fontVariationSettings\":{\"name\":\"fontVariationSettings\",\"property\":\"font-variation-settings\",\"native\":true},\"font-variation-settings\":{\"name\":\"fontVariationSettings\",\"property\":\"font-variation-settings\",\"native\":true},\"fontSize\":{\"name\":\"fontSize\",\"property\":\"font-size\",\"native\":true},\"font-size\":{\"name\":\"fontSize\",\"property\":\"font-size\",\"native\":true},\"fontSizeAdjust\":{\"name\":\"fontSizeAdjust\",\"property\":\"font-size-adjust\",\"native\":true},\"font-size-adjust\":{\"name\":\"fontSizeAdjust\",\"property\":\"font-size-adjust\",\"native\":true},\"fontSmooth\":{\"name\":\"fontSmooth\",\"property\":\"font-smooth\",\"native\":true},\"font-smooth\":{\"name\":\"fontSmooth\",\"property\":\"font-smooth\",\"native\":true},\"fontStretch\":{\"name\":\"fontStretch\",\"property\":\"font-stretch\",\"native\":true},\"font-stretch\":{\"name\":\"fontStretch\",\"property\":\"font-stretch\",\"native\":true},\"fontStyle\":{\"name\":\"fontStyle\",\"property\":\"font-style\",\"native\":true},\"font-style\":{\"name\":\"fontStyle\",\"property\":\"font-style\",\"native\":true},\"fontSynthesis\":{\"name\":\"fontSynthesis\",\"property\":\"font-synthesis\",\"native\":true},\"font-synthesis\":{\"name\":\"fontSynthesis\",\"property\":\"font-synthesis\",\"native\":true},\"fontVariant\":{\"name\":\"fontVariant\",\"property\":\"font-variant\",\"native\":true},\"font-variant\":{\"name\":\"fontVariant\",\"property\":\"font-variant\",\"native\":true},\"fontVariantAlternates\":{\"name\":\"fontVariantAlternates\",\"property\":\"font-variant-alternates\",\"native\":true},\"font-variant-alternates\":{\"name\":\"fontVariantAlternates\",\"property\":\"font-variant-alternates\",\"native\":true},\"fontVariantCaps\":{\"name\":\"fontVariantCaps\",\"property\":\"font-variant-caps\",\"native\":true},\"font-variant-caps\":{\"name\":\"fontVariantCaps\",\"property\":\"font-variant-caps\",\"native\":true},\"fontVariantEastAsian\":{\"name\":\"fontVariantEastAsian\",\"property\":\"font-variant-east-asian\",\"native\":true},\"font-variant-east-asian\":{\"name\":\"fontVariantEastAsian\",\"property\":\"font-variant-east-asian\",\"native\":true},\"fontVariantLigatures\":{\"name\":\"fontVariantLigatures\",\"property\":\"font-variant-ligatures\",\"native\":true},\"font-variant-ligatures\":{\"name\":\"fontVariantLigatures\",\"property\":\"font-variant-ligatures\",\"native\":true},\"fontVariantNumeric\":{\"name\":\"fontVariantNumeric\",\"property\":\"font-variant-numeric\",\"native\":true},\"font-variant-numeric\":{\"name\":\"fontVariantNumeric\",\"property\":\"font-variant-numeric\",\"native\":true},\"fontVariantPosition\":{\"name\":\"fontVariantPosition\",\"property\":\"font-variant-position\",\"native\":true},\"font-variant-position\":{\"name\":\"fontVariantPosition\",\"property\":\"font-variant-position\",\"native\":true},\"fontWeight\":{\"name\":\"fontWeight\",\"property\":\"font-weight\",\"native\":true},\"font-weight\":{\"name\":\"fontWeight\",\"property\":\"font-weight\",\"native\":true},\"forcedColorAdjust\":{\"name\":\"forcedColorAdjust\",\"property\":\"forced-color-adjust\",\"native\":true},\"forced-color-adjust\":{\"name\":\"forcedColorAdjust\",\"property\":\"forced-color-adjust\",\"native\":true},\"gap\":{\"name\":\"gap\",\"property\":\"gap\",\"native\":true},\"grid\":{\"name\":\"grid\",\"property\":\"grid\",\"native\":true},\"gridArea\":{\"name\":\"gridArea\",\"property\":\"grid-area\",\"native\":true},\"grid-area\":{\"name\":\"gridArea\",\"property\":\"grid-area\",\"native\":true},\"gridAutoColumns\":{\"name\":\"gridAutoColumns\",\"property\":\"grid-auto-columns\",\"native\":true},\"grid-auto-columns\":{\"name\":\"gridAutoColumns\",\"property\":\"grid-auto-columns\",\"native\":true},\"gridAutoFlow\":{\"name\":\"gridAutoFlow\",\"property\":\"grid-auto-flow\",\"native\":true},\"grid-auto-flow\":{\"name\":\"gridAutoFlow\",\"property\":\"grid-auto-flow\",\"native\":true},\"gridAutoRows\":{\"name\":\"gridAutoRows\",\"property\":\"grid-auto-rows\",\"native\":true},\"grid-auto-rows\":{\"name\":\"gridAutoRows\",\"property\":\"grid-auto-rows\",\"native\":true},\"gridColumn\":{\"name\":\"gridColumn\",\"property\":\"grid-column\",\"native\":true},\"grid-column\":{\"name\":\"gridColumn\",\"property\":\"grid-column\",\"native\":true},\"gridColumnEnd\":{\"name\":\"gridColumnEnd\",\"property\":\"grid-column-end\",\"native\":true},\"grid-column-end\":{\"name\":\"gridColumnEnd\",\"property\":\"grid-column-end\",\"native\":true},\"gridColumnGap\":{\"name\":\"gridColumnGap\",\"property\":\"grid-column-gap\",\"native\":true},\"grid-column-gap\":{\"name\":\"gridColumnGap\",\"property\":\"grid-column-gap\",\"native\":true},\"gridColumnStart\":{\"name\":\"gridColumnStart\",\"property\":\"grid-column-start\",\"native\":true},\"grid-column-start\":{\"name\":\"gridColumnStart\",\"property\":\"grid-column-start\",\"native\":true},\"gridGap\":{\"name\":\"gridGap\",\"property\":\"grid-gap\",\"native\":true},\"grid-gap\":{\"name\":\"gridGap\",\"property\":\"grid-gap\",\"native\":true},\"gridRow\":{\"name\":\"gridRow\",\"property\":\"grid-row\",\"native\":true},\"grid-row\":{\"name\":\"gridRow\",\"property\":\"grid-row\",\"native\":true},\"gridRowEnd\":{\"name\":\"gridRowEnd\",\"property\":\"grid-row-end\",\"native\":true},\"grid-row-end\":{\"name\":\"gridRowEnd\",\"property\":\"grid-row-end\",\"native\":true},\"gridRowGap\":{\"name\":\"gridRowGap\",\"property\":\"grid-row-gap\",\"native\":true},\"grid-row-gap\":{\"name\":\"gridRowGap\",\"property\":\"grid-row-gap\",\"native\":true},\"gridRowStart\":{\"name\":\"gridRowStart\",\"property\":\"grid-row-start\",\"native\":true},\"grid-row-start\":{\"name\":\"gridRowStart\",\"property\":\"grid-row-start\",\"native\":true},\"gridTemplate\":{\"name\":\"gridTemplate\",\"property\":\"grid-template\",\"native\":true},\"grid-template\":{\"name\":\"gridTemplate\",\"property\":\"grid-template\",\"native\":true},\"gridTemplateAreas\":{\"name\":\"gridTemplateAreas\",\"property\":\"grid-template-areas\",\"native\":true},\"grid-template-areas\":{\"name\":\"gridTemplateAreas\",\"property\":\"grid-template-areas\",\"native\":true},\"gridTemplateColumns\":{\"name\":\"gridTemplateColumns\",\"property\":\"grid-template-columns\",\"native\":true},\"grid-template-columns\":{\"name\":\"gridTemplateColumns\",\"property\":\"grid-template-columns\",\"native\":true},\"gridTemplateRows\":{\"name\":\"gridTemplateRows\",\"property\":\"grid-template-rows\",\"native\":true},\"grid-template-rows\":{\"name\":\"gridTemplateRows\",\"property\":\"grid-template-rows\",\"native\":true},\"hangingPunctuation\":{\"name\":\"hangingPunctuation\",\"property\":\"hanging-punctuation\",\"native\":true},\"hanging-punctuation\":{\"name\":\"hangingPunctuation\",\"property\":\"hanging-punctuation\",\"native\":true},\"height\":{\"name\":\"height\",\"property\":\"height\",\"native\":true},\"hyphens\":{\"name\":\"hyphens\",\"property\":\"hyphens\",\"native\":true},\"imageOrientation\":{\"name\":\"imageOrientation\",\"property\":\"image-orientation\",\"native\":true},\"image-orientation\":{\"name\":\"imageOrientation\",\"property\":\"image-orientation\",\"native\":true},\"imageRendering\":{\"name\":\"imageRendering\",\"property\":\"image-rendering\",\"native\":true},\"image-rendering\":{\"name\":\"imageRendering\",\"property\":\"image-rendering\",\"native\":true},\"imageResolution\":{\"name\":\"imageResolution\",\"property\":\"image-resolution\",\"native\":true},\"image-resolution\":{\"name\":\"imageResolution\",\"property\":\"image-resolution\",\"native\":true},\"imeMode\":{\"name\":\"imeMode\",\"property\":\"ime-mode\",\"native\":true},\"ime-mode\":{\"name\":\"imeMode\",\"property\":\"ime-mode\",\"native\":true},\"initialLetter\":{\"name\":\"initialLetter\",\"property\":\"initial-letter\",\"native\":true},\"initial-letter\":{\"name\":\"initialLetter\",\"property\":\"initial-letter\",\"native\":true},\"initialLetterAlign\":{\"name\":\"initialLetterAlign\",\"property\":\"initial-letter-align\",\"native\":true},\"initial-letter-align\":{\"name\":\"initialLetterAlign\",\"property\":\"initial-letter-align\",\"native\":true},\"inlineSize\":{\"name\":\"inlineSize\",\"property\":\"inline-size\",\"native\":true},\"inline-size\":{\"name\":\"inlineSize\",\"property\":\"inline-size\",\"native\":true},\"inputSecurity\":{\"name\":\"inputSecurity\",\"property\":\"input-security\",\"native\":true},\"input-security\":{\"name\":\"inputSecurity\",\"property\":\"input-security\",\"native\":true},\"inset\":{\"name\":\"inset\",\"property\":\"inset\",\"native\":true},\"insetBlock\":{\"name\":\"insetBlock\",\"property\":\"inset-block\",\"native\":true},\"inset-block\":{\"name\":\"insetBlock\",\"property\":\"inset-block\",\"native\":true},\"insetBlockEnd\":{\"name\":\"insetBlockEnd\",\"property\":\"inset-block-end\",\"native\":true},\"inset-block-end\":{\"name\":\"insetBlockEnd\",\"property\":\"inset-block-end\",\"native\":true},\"insetBlockStart\":{\"name\":\"insetBlockStart\",\"property\":\"inset-block-start\",\"native\":true},\"inset-block-start\":{\"name\":\"insetBlockStart\",\"property\":\"inset-block-start\",\"native\":true},\"insetInline\":{\"name\":\"insetInline\",\"property\":\"inset-inline\",\"native\":true},\"inset-inline\":{\"name\":\"insetInline\",\"property\":\"inset-inline\",\"native\":true},\"insetInlineEnd\":{\"name\":\"insetInlineEnd\",\"property\":\"inset-inline-end\",\"native\":true},\"inset-inline-end\":{\"name\":\"insetInlineEnd\",\"property\":\"inset-inline-end\",\"native\":true},\"insetInlineStart\":{\"name\":\"insetInlineStart\",\"property\":\"inset-inline-start\",\"native\":true},\"inset-inline-start\":{\"name\":\"insetInlineStart\",\"property\":\"inset-inline-start\",\"native\":true},\"isolation\":{\"name\":\"isolation\",\"property\":\"isolation\",\"native\":true},\"justifyContent\":{\"name\":\"justifyContent\",\"property\":\"justify-content\",\"native\":true},\"justify-content\":{\"name\":\"justifyContent\",\"property\":\"justify-content\",\"native\":true},\"justifyItems\":{\"name\":\"justifyItems\",\"property\":\"justify-items\",\"native\":true},\"justify-items\":{\"name\":\"justifyItems\",\"property\":\"justify-items\",\"native\":true},\"justifySelf\":{\"name\":\"justifySelf\",\"property\":\"justify-self\",\"native\":true},\"justify-self\":{\"name\":\"justifySelf\",\"property\":\"justify-self\",\"native\":true},\"justifyTracks\":{\"name\":\"justifyTracks\",\"property\":\"justify-tracks\",\"native\":true},\"justify-tracks\":{\"name\":\"justifyTracks\",\"property\":\"justify-tracks\",\"native\":true},\"left\":{\"name\":\"left\",\"property\":\"left\",\"native\":true},\"letterSpacing\":{\"name\":\"letterSpacing\",\"property\":\"letter-spacing\",\"native\":true},\"letter-spacing\":{\"name\":\"letterSpacing\",\"property\":\"letter-spacing\",\"native\":true},\"lineBreak\":{\"name\":\"lineBreak\",\"property\":\"line-break\",\"native\":true},\"line-break\":{\"name\":\"lineBreak\",\"property\":\"line-break\",\"native\":true},\"lineClamp\":{\"name\":\"lineClamp\",\"property\":\"line-clamp\",\"native\":true},\"line-clamp\":{\"name\":\"lineClamp\",\"property\":\"line-clamp\",\"native\":true},\"lineHeight\":{\"name\":\"lineHeight\",\"property\":\"line-height\",\"native\":true},\"line-height\":{\"name\":\"lineHeight\",\"property\":\"line-height\",\"native\":true},\"lineHeightStep\":{\"name\":\"lineHeightStep\",\"property\":\"line-height-step\",\"native\":true},\"line-height-step\":{\"name\":\"lineHeightStep\",\"property\":\"line-height-step\",\"native\":true},\"listStyle\":{\"name\":\"listStyle\",\"property\":\"list-style\",\"native\":true},\"list-style\":{\"name\":\"listStyle\",\"property\":\"list-style\",\"native\":true},\"listStyleImage\":{\"name\":\"listStyleImage\",\"property\":\"list-style-image\",\"native\":true},\"list-style-image\":{\"name\":\"listStyleImage\",\"property\":\"list-style-image\",\"native\":true},\"listStylePosition\":{\"name\":\"listStylePosition\",\"property\":\"list-style-position\",\"native\":true},\"list-style-position\":{\"name\":\"listStylePosition\",\"property\":\"list-style-position\",\"native\":true},\"listStyleType\":{\"name\":\"listStyleType\",\"property\":\"list-style-type\",\"native\":true},\"list-style-type\":{\"name\":\"listStyleType\",\"property\":\"list-style-type\",\"native\":true},\"margin\":{\"name\":\"margin\",\"property\":\"margin\",\"native\":true},\"marginBlock\":{\"name\":\"marginBlock\",\"property\":\"margin-block\",\"native\":true},\"margin-block\":{\"name\":\"marginBlock\",\"property\":\"margin-block\",\"native\":true},\"marginBlockEnd\":{\"name\":\"marginBlockEnd\",\"property\":\"margin-block-end\",\"native\":true},\"margin-block-end\":{\"name\":\"marginBlockEnd\",\"property\":\"margin-block-end\",\"native\":true},\"marginBlockStart\":{\"name\":\"marginBlockStart\",\"property\":\"margin-block-start\",\"native\":true},\"margin-block-start\":{\"name\":\"marginBlockStart\",\"property\":\"margin-block-start\",\"native\":true},\"marginBottom\":{\"name\":\"marginBottom\",\"property\":\"margin-bottom\",\"native\":true},\"margin-bottom\":{\"name\":\"marginBottom\",\"property\":\"margin-bottom\",\"native\":true},\"marginInline\":{\"name\":\"marginInline\",\"property\":\"margin-inline\",\"native\":true},\"margin-inline\":{\"name\":\"marginInline\",\"property\":\"margin-inline\",\"native\":true},\"marginInlineEnd\":{\"name\":\"marginInlineEnd\",\"property\":\"margin-inline-end\",\"native\":true},\"margin-inline-end\":{\"name\":\"marginInlineEnd\",\"property\":\"margin-inline-end\",\"native\":true},\"marginInlineStart\":{\"name\":\"marginInlineStart\",\"property\":\"margin-inline-start\",\"native\":true},\"margin-inline-start\":{\"name\":\"marginInlineStart\",\"property\":\"margin-inline-start\",\"native\":true},\"marginLeft\":{\"name\":\"marginLeft\",\"property\":\"margin-left\",\"native\":true},\"margin-left\":{\"name\":\"marginLeft\",\"property\":\"margin-left\",\"native\":true},\"marginRight\":{\"name\":\"marginRight\",\"property\":\"margin-right\",\"native\":true},\"margin-right\":{\"name\":\"marginRight\",\"property\":\"margin-right\",\"native\":true},\"marginTop\":{\"name\":\"marginTop\",\"property\":\"margin-top\",\"native\":true},\"margin-top\":{\"name\":\"marginTop\",\"property\":\"margin-top\",\"native\":true},\"marginTrim\":{\"name\":\"marginTrim\",\"property\":\"margin-trim\",\"native\":true},\"margin-trim\":{\"name\":\"marginTrim\",\"property\":\"margin-trim\",\"native\":true},\"mask\":{\"name\":\"mask\",\"property\":\"mask\",\"native\":true},\"maskBorder\":{\"name\":\"maskBorder\",\"property\":\"mask-border\",\"native\":true},\"mask-border\":{\"name\":\"maskBorder\",\"property\":\"mask-border\",\"native\":true},\"maskBorderMode\":{\"name\":\"maskBorderMode\",\"property\":\"mask-border-mode\",\"native\":true},\"mask-border-mode\":{\"name\":\"maskBorderMode\",\"property\":\"mask-border-mode\",\"native\":true},\"maskBorderOutset\":{\"name\":\"maskBorderOutset\",\"property\":\"mask-border-outset\",\"native\":true},\"mask-border-outset\":{\"name\":\"maskBorderOutset\",\"property\":\"mask-border-outset\",\"native\":true},\"maskBorderRepeat\":{\"name\":\"maskBorderRepeat\",\"property\":\"mask-border-repeat\",\"native\":true},\"mask-border-repeat\":{\"name\":\"maskBorderRepeat\",\"property\":\"mask-border-repeat\",\"native\":true},\"maskBorderSlice\":{\"name\":\"maskBorderSlice\",\"property\":\"mask-border-slice\",\"native\":true},\"mask-border-slice\":{\"name\":\"maskBorderSlice\",\"property\":\"mask-border-slice\",\"native\":true},\"maskBorderSource\":{\"name\":\"maskBorderSource\",\"property\":\"mask-border-source\",\"native\":true},\"mask-border-source\":{\"name\":\"maskBorderSource\",\"property\":\"mask-border-source\",\"native\":true},\"maskBorderWidth\":{\"name\":\"maskBorderWidth\",\"property\":\"mask-border-width\",\"native\":true},\"mask-border-width\":{\"name\":\"maskBorderWidth\",\"property\":\"mask-border-width\",\"native\":true},\"maskClip\":{\"name\":\"maskClip\",\"property\":\"mask-clip\",\"native\":true},\"mask-clip\":{\"name\":\"maskClip\",\"property\":\"mask-clip\",\"native\":true},\"maskComposite\":{\"name\":\"maskComposite\",\"property\":\"mask-composite\",\"native\":true},\"mask-composite\":{\"name\":\"maskComposite\",\"property\":\"mask-composite\",\"native\":true},\"maskImage\":{\"name\":\"maskImage\",\"property\":\"mask-image\",\"native\":true},\"mask-image\":{\"name\":\"maskImage\",\"property\":\"mask-image\",\"native\":true},\"maskMode\":{\"name\":\"maskMode\",\"property\":\"mask-mode\",\"native\":true},\"mask-mode\":{\"name\":\"maskMode\",\"property\":\"mask-mode\",\"native\":true},\"maskOrigin\":{\"name\":\"maskOrigin\",\"property\":\"mask-origin\",\"native\":true},\"mask-origin\":{\"name\":\"maskOrigin\",\"property\":\"mask-origin\",\"native\":true},\"maskPosition\":{\"name\":\"maskPosition\",\"property\":\"mask-position\",\"native\":true},\"mask-position\":{\"name\":\"maskPosition\",\"property\":\"mask-position\",\"native\":true},\"maskRepeat\":{\"name\":\"maskRepeat\",\"property\":\"mask-repeat\",\"native\":true},\"mask-repeat\":{\"name\":\"maskRepeat\",\"property\":\"mask-repeat\",\"native\":true},\"maskSize\":{\"name\":\"maskSize\",\"property\":\"mask-size\",\"native\":true},\"mask-size\":{\"name\":\"maskSize\",\"property\":\"mask-size\",\"native\":true},\"maskType\":{\"name\":\"maskType\",\"property\":\"mask-type\",\"native\":true},\"mask-type\":{\"name\":\"maskType\",\"property\":\"mask-type\",\"native\":true},\"masonryAutoFlow\":{\"name\":\"masonryAutoFlow\",\"property\":\"masonry-auto-flow\",\"native\":true},\"masonry-auto-flow\":{\"name\":\"masonryAutoFlow\",\"property\":\"masonry-auto-flow\",\"native\":true},\"mathStyle\":{\"name\":\"mathStyle\",\"property\":\"math-style\",\"native\":true},\"math-style\":{\"name\":\"mathStyle\",\"property\":\"math-style\",\"native\":true},\"maxBlockSize\":{\"name\":\"maxBlockSize\",\"property\":\"max-block-size\",\"native\":true},\"max-block-size\":{\"name\":\"maxBlockSize\",\"property\":\"max-block-size\",\"native\":true},\"maxHeight\":{\"name\":\"maxHeight\",\"property\":\"max-height\",\"native\":true},\"max-height\":{\"name\":\"maxHeight\",\"property\":\"max-height\",\"native\":true},\"maxInlineSize\":{\"name\":\"maxInlineSize\",\"property\":\"max-inline-size\",\"native\":true},\"max-inline-size\":{\"name\":\"maxInlineSize\",\"property\":\"max-inline-size\",\"native\":true},\"maxLines\":{\"name\":\"maxLines\",\"property\":\"max-lines\",\"native\":true},\"max-lines\":{\"name\":\"maxLines\",\"property\":\"max-lines\",\"native\":true},\"maxWidth\":{\"name\":\"maxWidth\",\"property\":\"max-width\",\"native\":true},\"max-width\":{\"name\":\"maxWidth\",\"property\":\"max-width\",\"native\":true},\"minBlockSize\":{\"name\":\"minBlockSize\",\"property\":\"min-block-size\",\"native\":true},\"min-block-size\":{\"name\":\"minBlockSize\",\"property\":\"min-block-size\",\"native\":true},\"minHeight\":{\"name\":\"minHeight\",\"property\":\"min-height\",\"native\":true},\"min-height\":{\"name\":\"minHeight\",\"property\":\"min-height\",\"native\":true},\"minInlineSize\":{\"name\":\"minInlineSize\",\"property\":\"min-inline-size\",\"native\":true},\"min-inline-size\":{\"name\":\"minInlineSize\",\"property\":\"min-inline-size\",\"native\":true},\"minWidth\":{\"name\":\"minWidth\",\"property\":\"min-width\",\"native\":true},\"min-width\":{\"name\":\"minWidth\",\"property\":\"min-width\",\"native\":true},\"mixBlendMode\":{\"name\":\"mixBlendMode\",\"property\":\"mix-blend-mode\",\"native\":true},\"mix-blend-mode\":{\"name\":\"mixBlendMode\",\"property\":\"mix-blend-mode\",\"native\":true},\"objectFit\":{\"name\":\"objectFit\",\"property\":\"object-fit\",\"native\":true},\"object-fit\":{\"name\":\"objectFit\",\"property\":\"object-fit\",\"native\":true},\"objectPosition\":{\"name\":\"objectPosition\",\"property\":\"object-position\",\"native\":true},\"object-position\":{\"name\":\"objectPosition\",\"property\":\"object-position\",\"native\":true},\"offset\":{\"name\":\"offset\",\"property\":\"offset\",\"native\":true},\"offsetAnchor\":{\"name\":\"offsetAnchor\",\"property\":\"offset-anchor\",\"native\":true},\"offset-anchor\":{\"name\":\"offsetAnchor\",\"property\":\"offset-anchor\",\"native\":true},\"offsetDistance\":{\"name\":\"offsetDistance\",\"property\":\"offset-distance\",\"native\":true},\"offset-distance\":{\"name\":\"offsetDistance\",\"property\":\"offset-distance\",\"native\":true},\"offsetPath\":{\"name\":\"offsetPath\",\"property\":\"offset-path\",\"native\":true},\"offset-path\":{\"name\":\"offsetPath\",\"property\":\"offset-path\",\"native\":true},\"offsetPosition\":{\"name\":\"offsetPosition\",\"property\":\"offset-position\",\"native\":true},\"offset-position\":{\"name\":\"offsetPosition\",\"property\":\"offset-position\",\"native\":true},\"offsetRotate\":{\"name\":\"offsetRotate\",\"property\":\"offset-rotate\",\"native\":true},\"offset-rotate\":{\"name\":\"offsetRotate\",\"property\":\"offset-rotate\",\"native\":true},\"opacity\":{\"name\":\"opacity\",\"property\":\"opacity\",\"native\":true},\"order\":{\"name\":\"order\",\"property\":\"order\",\"native\":true},\"orphans\":{\"name\":\"orphans\",\"property\":\"orphans\",\"native\":true},\"outline\":{\"name\":\"outline\",\"property\":\"outline\",\"native\":true},\"outlineColor\":{\"name\":\"outlineColor\",\"property\":\"outline-color\",\"native\":true},\"outline-color\":{\"name\":\"outlineColor\",\"property\":\"outline-color\",\"native\":true},\"outlineOffset\":{\"name\":\"outlineOffset\",\"property\":\"outline-offset\",\"native\":true},\"outline-offset\":{\"name\":\"outlineOffset\",\"property\":\"outline-offset\",\"native\":true},\"outlineStyle\":{\"name\":\"outlineStyle\",\"property\":\"outline-style\",\"native\":true},\"outline-style\":{\"name\":\"outlineStyle\",\"property\":\"outline-style\",\"native\":true},\"outlineWidth\":{\"name\":\"outlineWidth\",\"property\":\"outline-width\",\"native\":true},\"outline-width\":{\"name\":\"outlineWidth\",\"property\":\"outline-width\",\"native\":true},\"overflow\":{\"name\":\"overflow\",\"property\":\"overflow\",\"native\":true},\"overflowAnchor\":{\"name\":\"overflowAnchor\",\"property\":\"overflow-anchor\",\"native\":true},\"overflow-anchor\":{\"name\":\"overflowAnchor\",\"property\":\"overflow-anchor\",\"native\":true},\"overflowBlock\":{\"name\":\"overflowBlock\",\"property\":\"overflow-block\",\"native\":true},\"overflow-block\":{\"name\":\"overflowBlock\",\"property\":\"overflow-block\",\"native\":true},\"overflowClipBox\":{\"name\":\"overflowClipBox\",\"property\":\"overflow-clip-box\",\"native\":true},\"overflow-clip-box\":{\"name\":\"overflowClipBox\",\"property\":\"overflow-clip-box\",\"native\":true},\"overflowClipMargin\":{\"name\":\"overflowClipMargin\",\"property\":\"overflow-clip-margin\",\"native\":true},\"overflow-clip-margin\":{\"name\":\"overflowClipMargin\",\"property\":\"overflow-clip-margin\",\"native\":true},\"overflowInline\":{\"name\":\"overflowInline\",\"property\":\"overflow-inline\",\"native\":true},\"overflow-inline\":{\"name\":\"overflowInline\",\"property\":\"overflow-inline\",\"native\":true},\"overflowWrap\":{\"name\":\"overflowWrap\",\"property\":\"overflow-wrap\",\"native\":true},\"overflow-wrap\":{\"name\":\"overflowWrap\",\"property\":\"overflow-wrap\",\"native\":true},\"overflowX\":{\"name\":\"overflowX\",\"property\":\"overflow-x\",\"native\":true},\"overflow-x\":{\"name\":\"overflowX\",\"property\":\"overflow-x\",\"native\":true},\"overflowY\":{\"name\":\"overflowY\",\"property\":\"overflow-y\",\"native\":true},\"overflow-y\":{\"name\":\"overflowY\",\"property\":\"overflow-y\",\"native\":true},\"overscrollBehavior\":{\"name\":\"overscrollBehavior\",\"property\":\"overscroll-behavior\",\"native\":true},\"overscroll-behavior\":{\"name\":\"overscrollBehavior\",\"property\":\"overscroll-behavior\",\"native\":true},\"overscrollBehaviorBlock\":{\"name\":\"overscrollBehaviorBlock\",\"property\":\"overscroll-behavior-block\",\"native\":true},\"overscroll-behavior-block\":{\"name\":\"overscrollBehaviorBlock\",\"property\":\"overscroll-behavior-block\",\"native\":true},\"overscrollBehaviorInline\":{\"name\":\"overscrollBehaviorInline\",\"property\":\"overscroll-behavior-inline\",\"native\":true},\"overscroll-behavior-inline\":{\"name\":\"overscrollBehaviorInline\",\"property\":\"overscroll-behavior-inline\",\"native\":true},\"overscrollBehaviorX\":{\"name\":\"overscrollBehaviorX\",\"property\":\"overscroll-behavior-x\",\"native\":true},\"overscroll-behavior-x\":{\"name\":\"overscrollBehaviorX\",\"property\":\"overscroll-behavior-x\",\"native\":true},\"overscrollBehaviorY\":{\"name\":\"overscrollBehaviorY\",\"property\":\"overscroll-behavior-y\",\"native\":true},\"overscroll-behavior-y\":{\"name\":\"overscrollBehaviorY\",\"property\":\"overscroll-behavior-y\",\"native\":true},\"padding\":{\"name\":\"padding\",\"property\":\"padding\",\"native\":true},\"paddingBlock\":{\"name\":\"paddingBlock\",\"property\":\"padding-block\",\"native\":true},\"padding-block\":{\"name\":\"paddingBlock\",\"property\":\"padding-block\",\"native\":true},\"paddingBlockEnd\":{\"name\":\"paddingBlockEnd\",\"property\":\"padding-block-end\",\"native\":true},\"padding-block-end\":{\"name\":\"paddingBlockEnd\",\"property\":\"padding-block-end\",\"native\":true},\"paddingBlockStart\":{\"name\":\"paddingBlockStart\",\"property\":\"padding-block-start\",\"native\":true},\"padding-block-start\":{\"name\":\"paddingBlockStart\",\"property\":\"padding-block-start\",\"native\":true},\"paddingBottom\":{\"name\":\"paddingBottom\",\"property\":\"padding-bottom\",\"native\":true},\"padding-bottom\":{\"name\":\"paddingBottom\",\"property\":\"padding-bottom\",\"native\":true},\"paddingInline\":{\"name\":\"paddingInline\",\"property\":\"padding-inline\",\"native\":true},\"padding-inline\":{\"name\":\"paddingInline\",\"property\":\"padding-inline\",\"native\":true},\"paddingInlineEnd\":{\"name\":\"paddingInlineEnd\",\"property\":\"padding-inline-end\",\"native\":true},\"padding-inline-end\":{\"name\":\"paddingInlineEnd\",\"property\":\"padding-inline-end\",\"native\":true},\"paddingInlineStart\":{\"name\":\"paddingInlineStart\",\"property\":\"padding-inline-start\",\"native\":true},\"padding-inline-start\":{\"name\":\"paddingInlineStart\",\"property\":\"padding-inline-start\",\"native\":true},\"paddingLeft\":{\"name\":\"paddingLeft\",\"property\":\"padding-left\",\"native\":true},\"padding-left\":{\"name\":\"paddingLeft\",\"property\":\"padding-left\",\"native\":true},\"paddingRight\":{\"name\":\"paddingRight\",\"property\":\"padding-right\",\"native\":true},\"padding-right\":{\"name\":\"paddingRight\",\"property\":\"padding-right\",\"native\":true},\"paddingTop\":{\"name\":\"paddingTop\",\"property\":\"padding-top\",\"native\":true},\"padding-top\":{\"name\":\"paddingTop\",\"property\":\"padding-top\",\"native\":true},\"pageBreakAfter\":{\"name\":\"pageBreakAfter\",\"property\":\"page-break-after\",\"native\":true},\"page-break-after\":{\"name\":\"pageBreakAfter\",\"property\":\"page-break-after\",\"native\":true},\"pageBreakBefore\":{\"name\":\"pageBreakBefore\",\"property\":\"page-break-before\",\"native\":true},\"page-break-before\":{\"name\":\"pageBreakBefore\",\"property\":\"page-break-before\",\"native\":true},\"pageBreakInside\":{\"name\":\"pageBreakInside\",\"property\":\"page-break-inside\",\"native\":true},\"page-break-inside\":{\"name\":\"pageBreakInside\",\"property\":\"page-break-inside\",\"native\":true},\"paintOrder\":{\"name\":\"paintOrder\",\"property\":\"paint-order\",\"native\":true},\"paint-order\":{\"name\":\"paintOrder\",\"property\":\"paint-order\",\"native\":true},\"perspective\":{\"name\":\"perspective\",\"property\":\"perspective\",\"native\":true},\"perspectiveOrigin\":{\"name\":\"perspectiveOrigin\",\"property\":\"perspective-origin\",\"native\":true},\"perspective-origin\":{\"name\":\"perspectiveOrigin\",\"property\":\"perspective-origin\",\"native\":true},\"placeContent\":{\"name\":\"placeContent\",\"property\":\"place-content\",\"native\":true},\"place-content\":{\"name\":\"placeContent\",\"property\":\"place-content\",\"native\":true},\"placeItems\":{\"name\":\"placeItems\",\"property\":\"place-items\",\"native\":true},\"place-items\":{\"name\":\"placeItems\",\"property\":\"place-items\",\"native\":true},\"placeSelf\":{\"name\":\"placeSelf\",\"property\":\"place-self\",\"native\":true},\"place-self\":{\"name\":\"placeSelf\",\"property\":\"place-self\",\"native\":true},\"pointerEvents\":{\"name\":\"pointerEvents\",\"property\":\"pointer-events\",\"native\":true},\"pointer-events\":{\"name\":\"pointerEvents\",\"property\":\"pointer-events\",\"native\":true},\"position\":{\"name\":\"position\",\"property\":\"position\",\"native\":true},\"quotes\":{\"name\":\"quotes\",\"property\":\"quotes\",\"native\":true},\"resize\":{\"name\":\"resize\",\"property\":\"resize\",\"native\":true},\"right\":{\"name\":\"right\",\"property\":\"right\",\"native\":true},\"rotate\":{\"name\":\"rotate\",\"property\":\"rotate\",\"native\":true},\"rowGap\":{\"name\":\"rowGap\",\"property\":\"row-gap\",\"native\":true},\"row-gap\":{\"name\":\"rowGap\",\"property\":\"row-gap\",\"native\":true},\"rubyAlign\":{\"name\":\"rubyAlign\",\"property\":\"ruby-align\",\"native\":true},\"ruby-align\":{\"name\":\"rubyAlign\",\"property\":\"ruby-align\",\"native\":true},\"rubyMerge\":{\"name\":\"rubyMerge\",\"property\":\"ruby-merge\",\"native\":true},\"ruby-merge\":{\"name\":\"rubyMerge\",\"property\":\"ruby-merge\",\"native\":true},\"rubyPosition\":{\"name\":\"rubyPosition\",\"property\":\"ruby-position\",\"native\":true},\"ruby-position\":{\"name\":\"rubyPosition\",\"property\":\"ruby-position\",\"native\":true},\"scale\":{\"name\":\"scale\",\"property\":\"scale\",\"native\":true},\"scrollbarColor\":{\"name\":\"scrollbarColor\",\"property\":\"scrollbar-color\",\"native\":true},\"scrollbar-color\":{\"name\":\"scrollbarColor\",\"property\":\"scrollbar-color\",\"native\":true},\"scrollbarGutter\":{\"name\":\"scrollbarGutter\",\"property\":\"scrollbar-gutter\",\"native\":true},\"scrollbar-gutter\":{\"name\":\"scrollbarGutter\",\"property\":\"scrollbar-gutter\",\"native\":true},\"scrollbarWidth\":{\"name\":\"scrollbarWidth\",\"property\":\"scrollbar-width\",\"native\":true},\"scrollbar-width\":{\"name\":\"scrollbarWidth\",\"property\":\"scrollbar-width\",\"native\":true},\"scrollBehavior\":{\"name\":\"scrollBehavior\",\"property\":\"scroll-behavior\",\"native\":true},\"scroll-behavior\":{\"name\":\"scrollBehavior\",\"property\":\"scroll-behavior\",\"native\":true},\"scrollMargin\":{\"name\":\"scrollMargin\",\"property\":\"scroll-margin\",\"native\":true},\"scroll-margin\":{\"name\":\"scrollMargin\",\"property\":\"scroll-margin\",\"native\":true},\"scrollMarginBlock\":{\"name\":\"scrollMarginBlock\",\"property\":\"scroll-margin-block\",\"native\":true},\"scroll-margin-block\":{\"name\":\"scrollMarginBlock\",\"property\":\"scroll-margin-block\",\"native\":true},\"scrollMarginBlockStart\":{\"name\":\"scrollMarginBlockStart\",\"property\":\"scroll-margin-block-start\",\"native\":true},\"scroll-margin-block-start\":{\"name\":\"scrollMarginBlockStart\",\"property\":\"scroll-margin-block-start\",\"native\":true},\"scrollMarginBlockEnd\":{\"name\":\"scrollMarginBlockEnd\",\"property\":\"scroll-margin-block-end\",\"native\":true},\"scroll-margin-block-end\":{\"name\":\"scrollMarginBlockEnd\",\"property\":\"scroll-margin-block-end\",\"native\":true},\"scrollMarginBottom\":{\"name\":\"scrollMarginBottom\",\"property\":\"scroll-margin-bottom\",\"native\":true},\"scroll-margin-bottom\":{\"name\":\"scrollMarginBottom\",\"property\":\"scroll-margin-bottom\",\"native\":true},\"scrollMarginInline\":{\"name\":\"scrollMarginInline\",\"property\":\"scroll-margin-inline\",\"native\":true},\"scroll-margin-inline\":{\"name\":\"scrollMarginInline\",\"property\":\"scroll-margin-inline\",\"native\":true},\"scrollMarginInlineStart\":{\"name\":\"scrollMarginInlineStart\",\"property\":\"scroll-margin-inline-start\",\"native\":true},\"scroll-margin-inline-start\":{\"name\":\"scrollMarginInlineStart\",\"property\":\"scroll-margin-inline-start\",\"native\":true},\"scrollMarginInlineEnd\":{\"name\":\"scrollMarginInlineEnd\",\"property\":\"scroll-margin-inline-end\",\"native\":true},\"scroll-margin-inline-end\":{\"name\":\"scrollMarginInlineEnd\",\"property\":\"scroll-margin-inline-end\",\"native\":true},\"scrollMarginLeft\":{\"name\":\"scrollMarginLeft\",\"property\":\"scroll-margin-left\",\"native\":true},\"scroll-margin-left\":{\"name\":\"scrollMarginLeft\",\"property\":\"scroll-margin-left\",\"native\":true},\"scrollMarginRight\":{\"name\":\"scrollMarginRight\",\"property\":\"scroll-margin-right\",\"native\":true},\"scroll-margin-right\":{\"name\":\"scrollMarginRight\",\"property\":\"scroll-margin-right\",\"native\":true},\"scrollMarginTop\":{\"name\":\"scrollMarginTop\",\"property\":\"scroll-margin-top\",\"native\":true},\"scroll-margin-top\":{\"name\":\"scrollMarginTop\",\"property\":\"scroll-margin-top\",\"native\":true},\"scrollPadding\":{\"name\":\"scrollPadding\",\"property\":\"scroll-padding\",\"native\":true},\"scroll-padding\":{\"name\":\"scrollPadding\",\"property\":\"scroll-padding\",\"native\":true},\"scrollPaddingBlock\":{\"name\":\"scrollPaddingBlock\",\"property\":\"scroll-padding-block\",\"native\":true},\"scroll-padding-block\":{\"name\":\"scrollPaddingBlock\",\"property\":\"scroll-padding-block\",\"native\":true},\"scrollPaddingBlockStart\":{\"name\":\"scrollPaddingBlockStart\",\"property\":\"scroll-padding-block-start\",\"native\":true},\"scroll-padding-block-start\":{\"name\":\"scrollPaddingBlockStart\",\"property\":\"scroll-padding-block-start\",\"native\":true},\"scrollPaddingBlockEnd\":{\"name\":\"scrollPaddingBlockEnd\",\"property\":\"scroll-padding-block-end\",\"native\":true},\"scroll-padding-block-end\":{\"name\":\"scrollPaddingBlockEnd\",\"property\":\"scroll-padding-block-end\",\"native\":true},\"scrollPaddingBottom\":{\"name\":\"scrollPaddingBottom\",\"property\":\"scroll-padding-bottom\",\"native\":true},\"scroll-padding-bottom\":{\"name\":\"scrollPaddingBottom\",\"property\":\"scroll-padding-bottom\",\"native\":true},\"scrollPaddingInline\":{\"name\":\"scrollPaddingInline\",\"property\":\"scroll-padding-inline\",\"native\":true},\"scroll-padding-inline\":{\"name\":\"scrollPaddingInline\",\"property\":\"scroll-padding-inline\",\"native\":true},\"scrollPaddingInlineStart\":{\"name\":\"scrollPaddingInlineStart\",\"property\":\"scroll-padding-inline-start\",\"native\":true},\"scroll-padding-inline-start\":{\"name\":\"scrollPaddingInlineStart\",\"property\":\"scroll-padding-inline-start\",\"native\":true},\"scrollPaddingInlineEnd\":{\"name\":\"scrollPaddingInlineEnd\",\"property\":\"scroll-padding-inline-end\",\"native\":true},\"scroll-padding-inline-end\":{\"name\":\"scrollPaddingInlineEnd\",\"property\":\"scroll-padding-inline-end\",\"native\":true},\"scrollPaddingLeft\":{\"name\":\"scrollPaddingLeft\",\"property\":\"scroll-padding-left\",\"native\":true},\"scroll-padding-left\":{\"name\":\"scrollPaddingLeft\",\"property\":\"scroll-padding-left\",\"native\":true},\"scrollPaddingRight\":{\"name\":\"scrollPaddingRight\",\"property\":\"scroll-padding-right\",\"native\":true},\"scroll-padding-right\":{\"name\":\"scrollPaddingRight\",\"property\":\"scroll-padding-right\",\"native\":true},\"scrollPaddingTop\":{\"name\":\"scrollPaddingTop\",\"property\":\"scroll-padding-top\",\"native\":true},\"scroll-padding-top\":{\"name\":\"scrollPaddingTop\",\"property\":\"scroll-padding-top\",\"native\":true},\"scrollSnapAlign\":{\"name\":\"scrollSnapAlign\",\"property\":\"scroll-snap-align\",\"native\":true},\"scroll-snap-align\":{\"name\":\"scrollSnapAlign\",\"property\":\"scroll-snap-align\",\"native\":true},\"scrollSnapCoordinate\":{\"name\":\"scrollSnapCoordinate\",\"property\":\"scroll-snap-coordinate\",\"native\":true},\"scroll-snap-coordinate\":{\"name\":\"scrollSnapCoordinate\",\"property\":\"scroll-snap-coordinate\",\"native\":true},\"scrollSnapDestination\":{\"name\":\"scrollSnapDestination\",\"property\":\"scroll-snap-destination\",\"native\":true},\"scroll-snap-destination\":{\"name\":\"scrollSnapDestination\",\"property\":\"scroll-snap-destination\",\"native\":true},\"scrollSnapPointsX\":{\"name\":\"scrollSnapPointsX\",\"property\":\"scroll-snap-points-x\",\"native\":true},\"scroll-snap-points-x\":{\"name\":\"scrollSnapPointsX\",\"property\":\"scroll-snap-points-x\",\"native\":true},\"scrollSnapPointsY\":{\"name\":\"scrollSnapPointsY\",\"property\":\"scroll-snap-points-y\",\"native\":true},\"scroll-snap-points-y\":{\"name\":\"scrollSnapPointsY\",\"property\":\"scroll-snap-points-y\",\"native\":true},\"scrollSnapStop\":{\"name\":\"scrollSnapStop\",\"property\":\"scroll-snap-stop\",\"native\":true},\"scroll-snap-stop\":{\"name\":\"scrollSnapStop\",\"property\":\"scroll-snap-stop\",\"native\":true},\"scrollSnapType\":{\"name\":\"scrollSnapType\",\"property\":\"scroll-snap-type\",\"native\":true},\"scroll-snap-type\":{\"name\":\"scrollSnapType\",\"property\":\"scroll-snap-type\",\"native\":true},\"scrollSnapTypeX\":{\"name\":\"scrollSnapTypeX\",\"property\":\"scroll-snap-type-x\",\"native\":true},\"scroll-snap-type-x\":{\"name\":\"scrollSnapTypeX\",\"property\":\"scroll-snap-type-x\",\"native\":true},\"scrollSnapTypeY\":{\"name\":\"scrollSnapTypeY\",\"property\":\"scroll-snap-type-y\",\"native\":true},\"scroll-snap-type-y\":{\"name\":\"scrollSnapTypeY\",\"property\":\"scroll-snap-type-y\",\"native\":true},\"shapeImageThreshold\":{\"name\":\"shapeImageThreshold\",\"property\":\"shape-image-threshold\",\"native\":true},\"shape-image-threshold\":{\"name\":\"shapeImageThreshold\",\"property\":\"shape-image-threshold\",\"native\":true},\"shapeMargin\":{\"name\":\"shapeMargin\",\"property\":\"shape-margin\",\"native\":true},\"shape-margin\":{\"name\":\"shapeMargin\",\"property\":\"shape-margin\",\"native\":true},\"shapeOutside\":{\"name\":\"shapeOutside\",\"property\":\"shape-outside\",\"native\":true},\"shape-outside\":{\"name\":\"shapeOutside\",\"property\":\"shape-outside\",\"native\":true},\"tabSize\":{\"name\":\"tabSize\",\"property\":\"tab-size\",\"native\":true},\"tab-size\":{\"name\":\"tabSize\",\"property\":\"tab-size\",\"native\":true},\"tableLayout\":{\"name\":\"tableLayout\",\"property\":\"table-layout\",\"native\":true},\"table-layout\":{\"name\":\"tableLayout\",\"property\":\"table-layout\",\"native\":true},\"textAlign\":{\"name\":\"textAlign\",\"property\":\"text-align\",\"native\":true},\"text-align\":{\"name\":\"textAlign\",\"property\":\"text-align\",\"native\":true},\"textAlignLast\":{\"name\":\"textAlignLast\",\"property\":\"text-align-last\",\"native\":true},\"text-align-last\":{\"name\":\"textAlignLast\",\"property\":\"text-align-last\",\"native\":true},\"textCombineUpright\":{\"name\":\"textCombineUpright\",\"property\":\"text-combine-upright\",\"native\":true},\"text-combine-upright\":{\"name\":\"textCombineUpright\",\"property\":\"text-combine-upright\",\"native\":true},\"textDecoration\":{\"name\":\"textDecoration\",\"property\":\"text-decoration\",\"native\":true},\"text-decoration\":{\"name\":\"textDecoration\",\"property\":\"text-decoration\",\"native\":true},\"textDecorationColor\":{\"name\":\"textDecorationColor\",\"property\":\"text-decoration-color\",\"native\":true},\"text-decoration-color\":{\"name\":\"textDecorationColor\",\"property\":\"text-decoration-color\",\"native\":true},\"textDecorationLine\":{\"name\":\"textDecorationLine\",\"property\":\"text-decoration-line\",\"native\":true},\"text-decoration-line\":{\"name\":\"textDecorationLine\",\"property\":\"text-decoration-line\",\"native\":true},\"textDecorationSkip\":{\"name\":\"textDecorationSkip\",\"property\":\"text-decoration-skip\",\"native\":true},\"text-decoration-skip\":{\"name\":\"textDecorationSkip\",\"property\":\"text-decoration-skip\",\"native\":true},\"textDecorationSkipInk\":{\"name\":\"textDecorationSkipInk\",\"property\":\"text-decoration-skip-ink\",\"native\":true},\"text-decoration-skip-ink\":{\"name\":\"textDecorationSkipInk\",\"property\":\"text-decoration-skip-ink\",\"native\":true},\"textDecorationStyle\":{\"name\":\"textDecorationStyle\",\"property\":\"text-decoration-style\",\"native\":true},\"text-decoration-style\":{\"name\":\"textDecorationStyle\",\"property\":\"text-decoration-style\",\"native\":true},\"textDecorationThickness\":{\"name\":\"textDecorationThickness\",\"property\":\"text-decoration-thickness\",\"native\":true},\"text-decoration-thickness\":{\"name\":\"textDecorationThickness\",\"property\":\"text-decoration-thickness\",\"native\":true},\"textEmphasis\":{\"name\":\"textEmphasis\",\"property\":\"text-emphasis\",\"native\":true},\"text-emphasis\":{\"name\":\"textEmphasis\",\"property\":\"text-emphasis\",\"native\":true},\"textEmphasisColor\":{\"name\":\"textEmphasisColor\",\"property\":\"text-emphasis-color\",\"native\":true},\"text-emphasis-color\":{\"name\":\"textEmphasisColor\",\"property\":\"text-emphasis-color\",\"native\":true},\"textEmphasisPosition\":{\"name\":\"textEmphasisPosition\",\"property\":\"text-emphasis-position\",\"native\":true},\"text-emphasis-position\":{\"name\":\"textEmphasisPosition\",\"property\":\"text-emphasis-position\",\"native\":true},\"textEmphasisStyle\":{\"name\":\"textEmphasisStyle\",\"property\":\"text-emphasis-style\",\"native\":true},\"text-emphasis-style\":{\"name\":\"textEmphasisStyle\",\"property\":\"text-emphasis-style\",\"native\":true},\"textIndent\":{\"name\":\"textIndent\",\"property\":\"text-indent\",\"native\":true},\"text-indent\":{\"name\":\"textIndent\",\"property\":\"text-indent\",\"native\":true},\"textJustify\":{\"name\":\"textJustify\",\"property\":\"text-justify\",\"native\":true},\"text-justify\":{\"name\":\"textJustify\",\"property\":\"text-justify\",\"native\":true},\"textOrientation\":{\"name\":\"textOrientation\",\"property\":\"text-orientation\",\"native\":true},\"text-orientation\":{\"name\":\"textOrientation\",\"property\":\"text-orientation\",\"native\":true},\"textOverflow\":{\"name\":\"textOverflow\",\"property\":\"text-overflow\",\"native\":true},\"text-overflow\":{\"name\":\"textOverflow\",\"property\":\"text-overflow\",\"native\":true},\"textRendering\":{\"name\":\"textRendering\",\"property\":\"text-rendering\",\"native\":true},\"text-rendering\":{\"name\":\"textRendering\",\"property\":\"text-rendering\",\"native\":true},\"textShadow\":{\"name\":\"textShadow\",\"property\":\"text-shadow\",\"native\":true},\"text-shadow\":{\"name\":\"textShadow\",\"property\":\"text-shadow\",\"native\":true},\"textSizeAdjust\":{\"name\":\"textSizeAdjust\",\"property\":\"text-size-adjust\",\"native\":true},\"text-size-adjust\":{\"name\":\"textSizeAdjust\",\"property\":\"text-size-adjust\",\"native\":true},\"textTransform\":{\"name\":\"textTransform\",\"property\":\"text-transform\",\"native\":true},\"text-transform\":{\"name\":\"textTransform\",\"property\":\"text-transform\",\"native\":true},\"textUnderlineOffset\":{\"name\":\"textUnderlineOffset\",\"property\":\"text-underline-offset\",\"native\":true},\"text-underline-offset\":{\"name\":\"textUnderlineOffset\",\"property\":\"text-underline-offset\",\"native\":true},\"textUnderlinePosition\":{\"name\":\"textUnderlinePosition\",\"property\":\"text-underline-position\",\"native\":true},\"text-underline-position\":{\"name\":\"textUnderlinePosition\",\"property\":\"text-underline-position\",\"native\":true},\"top\":{\"name\":\"top\",\"property\":\"top\",\"native\":true},\"touchAction\":{\"name\":\"touchAction\",\"property\":\"touch-action\",\"native\":true},\"touch-action\":{\"name\":\"touchAction\",\"property\":\"touch-action\",\"native\":true},\"transform\":{\"name\":\"transform\",\"property\":\"transform\",\"native\":true},\"transformBox\":{\"name\":\"transformBox\",\"property\":\"transform-box\",\"native\":true},\"transform-box\":{\"name\":\"transformBox\",\"property\":\"transform-box\",\"native\":true},\"transformOrigin\":{\"name\":\"transformOrigin\",\"property\":\"transform-origin\",\"native\":true},\"transform-origin\":{\"name\":\"transformOrigin\",\"property\":\"transform-origin\",\"native\":true},\"transformStyle\":{\"name\":\"transformStyle\",\"property\":\"transform-style\",\"native\":true},\"transform-style\":{\"name\":\"transformStyle\",\"property\":\"transform-style\",\"native\":true},\"transition\":{\"name\":\"transition\",\"property\":\"transition\",\"native\":true},\"transitionDelay\":{\"name\":\"transitionDelay\",\"property\":\"transition-delay\",\"native\":true},\"transition-delay\":{\"name\":\"transitionDelay\",\"property\":\"transition-delay\",\"native\":true},\"transitionDuration\":{\"name\":\"transitionDuration\",\"property\":\"transition-duration\",\"native\":true},\"transition-duration\":{\"name\":\"transitionDuration\",\"property\":\"transition-duration\",\"native\":true},\"transitionProperty\":{\"name\":\"transitionProperty\",\"property\":\"transition-property\",\"native\":true},\"transition-property\":{\"name\":\"transitionProperty\",\"property\":\"transition-property\",\"native\":true},\"transitionTimingFunction\":{\"name\":\"transitionTimingFunction\",\"property\":\"transition-timing-function\",\"native\":true},\"transition-timing-function\":{\"name\":\"transitionTimingFunction\",\"property\":\"transition-timing-function\",\"native\":true},\"translate\":{\"name\":\"translate\",\"property\":\"translate\",\"native\":true},\"unicodeBidi\":{\"name\":\"unicodeBidi\",\"property\":\"unicode-bidi\",\"native\":true},\"unicode-bidi\":{\"name\":\"unicodeBidi\",\"property\":\"unicode-bidi\",\"native\":true},\"userSelect\":{\"name\":\"userSelect\",\"property\":\"user-select\",\"native\":true},\"user-select\":{\"name\":\"userSelect\",\"property\":\"user-select\",\"native\":true},\"verticalAlign\":{\"name\":\"verticalAlign\",\"property\":\"vertical-align\",\"native\":true},\"vertical-align\":{\"name\":\"verticalAlign\",\"property\":\"vertical-align\",\"native\":true},\"visibility\":{\"name\":\"visibility\",\"property\":\"visibility\",\"native\":true},\"whiteSpace\":{\"name\":\"whiteSpace\",\"property\":\"white-space\",\"native\":true},\"white-space\":{\"name\":\"whiteSpace\",\"property\":\"white-space\",\"native\":true},\"widows\":{\"name\":\"widows\",\"property\":\"widows\",\"native\":true},\"width\":{\"name\":\"width\",\"property\":\"width\",\"native\":true},\"willChange\":{\"name\":\"willChange\",\"property\":\"will-change\",\"native\":true},\"will-change\":{\"name\":\"willChange\",\"property\":\"will-change\",\"native\":true},\"wordBreak\":{\"name\":\"wordBreak\",\"property\":\"word-break\",\"native\":true},\"word-break\":{\"name\":\"wordBreak\",\"property\":\"word-break\",\"native\":true},\"wordSpacing\":{\"name\":\"wordSpacing\",\"property\":\"word-spacing\",\"native\":true},\"word-spacing\":{\"name\":\"wordSpacing\",\"property\":\"word-spacing\",\"native\":true},\"wordWrap\":{\"name\":\"wordWrap\",\"property\":\"word-wrap\",\"native\":true},\"word-wrap\":{\"name\":\"wordWrap\",\"property\":\"word-wrap\",\"native\":true},\"writingMode\":{\"name\":\"writingMode\",\"property\":\"writing-mode\",\"native\":true},\"writing-mode\":{\"name\":\"writingMode\",\"property\":\"writing-mode\",\"native\":true},\"zIndex\":{\"name\":\"zIndex\",\"property\":\"z-index\",\"native\":true},\"z-index\":{\"name\":\"zIndex\",\"property\":\"z-index\",\"native\":true},\"zoom\":{\"name\":\"zoom\",\"property\":\"zoom\",\"native\":true}},\"colors\":{\"aliceblue\":\"#f0f8ff\",\"antiquewhite\":\"#faebd7\",\"aqua\":\"#00ffff\",\"aquamarine\":\"#7fffd4\",\"azure\":\"#f0ffff\",\"beige\":\"#f5f5dc\",\"bisque\":\"#ffe4c4\",\"black\":\"#000000\",\"blanchedalmond\":\"#ffebcd\",\"blue\":\"#0000ff\",\"blueviolet\":\"#8a2be2\",\"brown\":\"#a52a2a\",\"burlywood\":\"#deb887\",\"cadetblue\":\"#5f9ea0\",\"chartreuse\":\"#7fff00\",\"chocolate\":\"#d2691e\",\"coral\":\"#ff7f50\",\"cornflowerblue\":\"#6495ed\",\"cornsilk\":\"#fff8dc\",\"crimson\":\"#dc143c\",\"cyan\":\"#00ffff\",\"darkblue\":\"#00008b\",\"darkcyan\":\"#008b8b\",\"darkgoldenrod\":\"#b8860b\",\"darkgray\":\"#a9a9a9\",\"darkgrey\":\"#a9a9a9\",\"darkgreen\":\"#006400\",\"darkkhaki\":\"#bdb76b\",\"darkmagenta\":\"#8b008b\",\"darkolivegreen\":\"#556b2f\",\"darkorange\":\"#ff8c00\",\"darkorchid\":\"#9932cc\",\"darkred\":\"#8b0000\",\"darksalmon\":\"#e9967a\",\"darkseagreen\":\"#8fbc8f\",\"darkslateblue\":\"#483d8b\",\"darkslategray\":\"#2f4f4f\",\"darkslategrey\":\"#2f4f4f\",\"darkturquoise\":\"#00ced1\",\"darkviolet\":\"#9400d3\",\"deeppink\":\"#ff1493\",\"deepskyblue\":\"#00bfff\",\"dimgray\":\"#696969\",\"dimgrey\":\"#696969\",\"dodgerblue\":\"#1e90ff\",\"firebrick\":\"#b22222\",\"floralwhite\":\"#fffaf0\",\"forestgreen\":\"#228b22\",\"fuchsia\":\"#ff00ff\",\"gainsboro\":\"#dcdcdc\",\"ghostwhite\":\"#f8f8ff\",\"gold\":\"#ffd700\",\"goldenrod\":\"#daa520\",\"gray\":\"#808080\",\"grey\":\"#808080\",\"green\":\"#008000\",\"greenyellow\":\"#adff2f\",\"honeydew\":\"#f0fff0\",\"hotpink\":\"#ff69b4\",\"indianred\":\"#cd5c5c\",\"indigo\":\"#4b0082\",\"ivory\":\"#fffff0\",\"khaki\":\"#f0e68c\",\"lavender\":\"#e6e6fa\",\"lavenderblush\":\"#fff0f5\",\"lawngreen\":\"#7cfc00\",\"lemonchiffon\":\"#fffacd\",\"lightblue\":\"#add8e6\",\"lightcoral\":\"#f08080\",\"lightcyan\":\"#e0ffff\",\"lightgoldenrodyellow\":\"#fafad2\",\"lightgray\":\"#d3d3d3\",\"lightgrey\":\"#d3d3d3\",\"lightgreen\":\"#90ee90\",\"lightpink\":\"#ffb6c1\",\"lightsalmon\":\"#ffa07a\",\"lightseagreen\":\"#20b2aa\",\"lightskyblue\":\"#87cefa\",\"lightslategray\":\"#778899\",\"lightslategrey\":\"#778899\",\"lightsteelblue\":\"#b0c4de\",\"lightyellow\":\"#ffffe0\",\"lime\":\"#00ff00\",\"limegreen\":\"#32cd32\",\"linen\":\"#faf0e6\",\"magenta\":\"#ff00ff\",\"maroon\":\"#800000\",\"mediumaquamarine\":\"#66cdaa\",\"mediumblue\":\"#0000cd\",\"mediumorchid\":\"#ba55d3\",\"mediumpurple\":\"#9370d8\",\"mediumseagreen\":\"#3cb371\",\"mediumslateblue\":\"#7b68ee\",\"mediumspringgreen\":\"#00fa9a\",\"mediumturquoise\":\"#48d1cc\",\"mediumvioletred\":\"#c71585\",\"midnightblue\":\"#191970\",\"mintcream\":\"#f5fffa\",\"mistyrose\":\"#ffe4e1\",\"moccasin\":\"#ffe4b5\",\"navajowhite\":\"#ffdead\",\"navy\":\"#000080\",\"oldlace\":\"#fdf5e6\",\"olive\":\"#808000\",\"olivedrab\":\"#6b8e23\",\"orange\":\"#ffa500\",\"orangered\":\"#ff4500\",\"orchid\":\"#da70d6\",\"palegoldenrod\":\"#eee8aa\",\"palegreen\":\"#98fb98\",\"paleturquoise\":\"#afeeee\",\"palevioletred\":\"#d87093\",\"papayawhip\":\"#ffefd5\",\"peachpuff\":\"#ffdab9\",\"peru\":\"#cd853f\",\"pink\":\"#ffc0cb\",\"plum\":\"#dda0dd\",\"powderblue\":\"#b0e0e6\",\"purple\":\"#800080\",\"red\":\"#ff0000\",\"rebeccapurple\":\"#663399\",\"rosybrown\":\"#bc8f8f\",\"royalblue\":\"#4169e1\",\"saddlebrown\":\"#8b4513\",\"salmon\":\"#fa8072\",\"sandybrown\":\"#f4a460\",\"seagreen\":\"#2e8b57\",\"seashell\":\"#fff5ee\",\"sienna\":\"#a0522d\",\"silver\":\"#c0c0c0\",\"skyblue\":\"#87ceeb\",\"slateblue\":\"#6a5acd\",\"slategray\":\"#708090\",\"slategrey\":\"#708090\",\"snow\":\"#fffafa\",\"springgreen\":\"#00ff7f\",\"steelblue\":\"#4682b4\",\"tan\":\"#d2b48c\",\"teal\":\"#008080\",\"thistle\":\"#d8bfd8\",\"tomato\":\"#ff6347\",\"turquoise\":\"#40e0d0\",\"violet\":\"#ee82ee\",\"wheat\":\"#f5deb3\",\"white\":\"#ffffff\",\"whitesmoke\":\"#f5f5f5\",\"yellow\":\"#ffff00\",\"yellowgreen\":\"#9acd32\",\"primary\":\"#007bff\",\"secondary\":\"#6c757d\",\"success\":\"#28a745\",\"danger\":\"#dc3545\",\"warning\":\"#ffc107\",\"info\":\"#17a2b8\",\"light\":\"#f8f9fa\",\"dark\":\"#343a40\"},\"units\":{\"Hz\":{\"Hz\":\"1hz\",\"kHz\":\"0.001khz\"},\"Q\":{\"Q\":\"1q\",\"cm\":\"0.025cm\",\"in\":\"0.00984252in\",\"mm\":\"0.25mm\",\"pc\":\"0.0590551pc\",\"pt\":\"0.708661pt\",\"px\":\"0.944882px\"},\"ch\":{\"ch\":\"1ch\"},\"cm\":{\"Q\":\"40q\",\"cm\":\"1cm\",\"in\":\"0.393701in\",\"mm\":\"10mm\",\"pc\":\"2.3622pc\",\"pt\":\"28.3465pt\",\"px\":\"37.7953px\"},\"deg\":{\"deg\":\"1deg\",\"grad\":\"1.11111grad\",\"rad\":\"0.0174533rad\",\"turn\":\"0.00277778turn\"},\"dpcm\":{\"dpcm\":\"1dpcm\",\"dpi\":\"2.54dpi\",\"dppx\":\"0.0264583dppx\"},\"dpi\":{\"dpcm\":\"0.393701dpcm\",\"dpi\":\"1dpi\",\"dppx\":\"0.0104167dppx\"},\"dppx\":{\"dpcm\":\"37.7953dpcm\",\"dpi\":\"96dpi\",\"dppx\":\"1dppx\"},\"em\":{\"em\":\"1em\"},\"ex\":{\"ex\":\"1ex\"},\"fr\":{\"fr\":\"1fr\"},\"grad\":{\"deg\":\"0.9deg\",\"grad\":\"1grad\",\"rad\":\"0.015708rad\",\"turn\":\"0.0025turn\"},\"in\":{\"Q\":\"101.6q\",\"cm\":\"2.54cm\",\"in\":\"1in\",\"mm\":\"25.4mm\",\"pc\":\"6pc\",\"pt\":\"72pt\",\"px\":\"96px\"},\"kHz\":{\"Hz\":\"1000hz\",\"kHz\":\"1khz\"},\"mm\":{\"Q\":\"4q\",\"cm\":\"0.1cm\",\"in\":\"0.0393701in\",\"mm\":\"1mm\",\"pc\":\"0.23622pc\",\"pt\":\"2.83465pt\",\"px\":\"3.77953px\"},\"ms\":{\"ms\":\"1ms\",\"s\":\"0.001s\"},\"number\":{\"number\":\"1\"},\"pc\":{\"Q\":\"16.9333q\",\"cm\":\"0.423333cm\",\"in\":\"0.166667in\",\"mm\":\"4.23333mm\",\"pc\":\"1pc\",\"pt\":\"12pt\",\"px\":\"16px\"},\"percent\":{\"percent\":\"1%\"},\"pt\":{\"Q\":\"1.41111q\",\"cm\":\"0.0352778cm\",\"in\":\"0.0138889in\",\"mm\":\"0.352778mm\",\"pc\":\"0.0833333pc\",\"pt\":\"1pt\",\"px\":\"1.33333px\"},\"px\":{\"Q\":\"1.05833q\",\"cm\":\"0.0264583cm\",\"in\":\"0.0104167in\",\"mm\":\"0.264583mm\",\"pc\":\"0.0625pc\",\"pt\":\"0.75pt\",\"px\":\"1px\"},\"rad\":{\"deg\":\"57.2958deg\",\"grad\":\"63.662grad\",\"rad\":\"1rad\",\"turn\":\"0.159155turn\"},\"rem\":{\"rem\":\"1rem\"},\"s\":{\"ms\":\"1000ms\",\"s\":\"1s\"},\"turn\":{\"deg\":\"360deg\",\"grad\":\"400grad\",\"rad\":\"6.28319rad\",\"turn\":\"1turn\"},\"vh\":{\"vh\":\"1vh\"},\"vmax\":{\"vmax\":\"1vmax\"},\"vmin\":{\"vmin\":\"1vmin\"},\"vw\":{\"vw\":\"1vw\"}},\"keyFrameOptions\":[\"delay\",\"direction\",\"duration\",\"easing\",\"endDelay\",\"fill\",\"iterations\",\"iterationStart\"],\"atRule\":[\"layer\",\"charset\",\"import\",\"media\",\"supports\",\"document\",\"page\",\"viewport\",\"counter-style\",\"font-feature-values\",\"font-variant-alternates\",\"property\",\"color-profile\",\"fontFeatureValues\",\"fontVariantAlternates\",\"colorProfile\"],\"functions\":{\"matrix\":\"transform\",\"matrix3d\":\"transform\",\"perspective\":\"transform\",\"rotate\":\"transform\",\"rotate3d\":\"transform\",\"rotateX\":\"transform\",\"rotateY\":\"transform\",\"rotateZ\":\"transform\",\"scale\":\"transform\",\"scale3d\":\"transform\",\"scaleX\":\"transform\",\"scaleY\":\"transform\",\"scaleZ\":\"transform\",\"skew\":\"transform\",\"skewX\":\"transform\",\"skewY\":\"transform\",\"translate\":\"transform\",\"translate3d\":\"transform\",\"translateX\":\"transform\",\"translateY\":\"transform\",\"translateZ\":\"transform\",\"calc\":\"math\",\"clamp\":\"math\",\"max\":\"math\",\"min\":\"math\",\"abs\":\"math\",\"acos\":\"math\",\"asin\":\"math\",\"atan\":\"math\",\"atan2\":\"math\",\"cos\":\"math\",\"exp\":\"math\",\"hypot\":\"math\",\"log\":\"math\",\"mod\":\"math\",\"pow\":\"math\",\"rem\":\"math\",\"round\":\"math\",\"sign\":\"math\",\"sin\":\"math\",\"sqrt\":\"math\",\"tan\":\"math\",\"blur\":\"filter\",\"brightness\":\"filter\",\"contrast\":\"filter\",\"drop-shadow\":\"filter\",\"grayscale\":\"filter\",\"hue-rotate\":\"filter\",\"invert\":\"filter\",\"opacity\":\"filter\",\"saturate\":\"filter\",\"sepia\":\"filter\",\"color\":\"color\",\"color-mix\":\"color\",\"color-contrast\":\"color\",\"device-cmyk\":\"color\",\"hsl\":\"color\",\"hsla\":\"color\",\"hwb\":\"color\",\"lab\":\"color\",\"lch\":\"color\",\"rgb\":\"color\",\"rgba\":\"color\",\"conic-gradient\":\"image\",\"image\":\"image\",\"image-set\":\"image\",\"linear-gradient\":\"image\",\"radial-gradient\":\"image\",\"repeating-linear-gradiant\":\"image\",\"repeating-radial-gradient\":\"image\",\"repeat-conic-gradiant\":\"image\",\"counter\":\"counter\",\"counters\":\"counter\",\"stylistic\":\"font\",\"styleset\":\"font\",\"character-variant\":\"font\",\"swash\":\"font\",\"ornaments\":\"font\",\"annotation\":\"font\",\"circle\":\"shape\",\"ellipse\":\"shape\",\"inset\":\"shape\",\"polygon\":\"shape\"},\"selectors\":{\":active\":\"psedo-class\",\":any-link\":\"psedo-class\",\":autofill\":\"psedo-class\",\":blank\":\"psedo-class\",\":checked\":\"psedo-class\",\":current\":\"psedo-class\",\":default\":\"psedo-class\",\":defined\":\"psedo-class\",\":dir\":\"psedo-class\",\":disabled\":\"psedo-class\",\":empty\":\"psedo-class\",\":enabled\":\"psedo-class\",\":first\":\"psedo-class\",\":first-child\":\"psedo-class\",\":first-of-type\":\"psedo-class\",\":fullscreen\":\"psedo-class\",\":future\":\"psedo-class\",\":focus\":\"psedo-class\",\":focus-visible\":\"psedo-class\",\":focus-within\":\"psedo-class\",\":has()\":\"psedo-class\",\":host\":\"psedo-class\",\":host()\":\"psedo-class\",\":host-context()\":\"psedo-class\",\":hover\":\"psedo-class\",\":indeterminate\":\"psedo-class\",\":in-range\":\"psedo-class\",\":invalid\":\"psedo-class\",\":is\":\"psedo-class\",\":lang\":\"psedo-class\",\":last-child\":\"psedo-class\",\":last-of-type\":\"psedo-class\",\":left\":\"psedo-class\",\":link\":\"psedo-class\",\":local-link\":\"psedo-class\",\":not\":\"psedo-class\",\":nth-child\":\"psedo-class\",\":nth-col\":\"psedo-class\",\":nth-last-child()\":\"psedo-class\",\":nth-last-col\":\"psedo-class\",\":nth-last-of-type\":\"psedo-class\",\":nth-of-type()\":\"psedo-class\",\":only-child\":\"psedo-class\",\":only-of-type\":\"psedo-class\",\":optional\":\"psedo-class\",\":out-of-range\":\"psedo-class\",\":past\":\"psedo-class\",\":picture-in-picture\":\"psedo-class\",\":placeholder-shown\":\"psedo-class\",\":paused\":\"psedo-class\",\":playing\":\"psedo-class\",\":read-only\":\"psedo-class\",\":read-write\":\"psedo-class\",\":required\":\"psedo-class\",\":right\":\"psedo-class\",\":root\":\"psedo-class\",\":scope\":\"psedo-class\",\":state\":\"psedo-class\",\":target\":\"psedo-class\",\":target-within\":\"psedo-class\",\":user-invalid\":\"psedo-class\",\":valid\":\"psedo-class\",\":visited\":\"psedo-class\",\":where\":\"psedo-class\",\"::after\":\"psedo-element\",\"::backdrop\":\"psedo-element\",\"::before\":\"psedo-element\",\"::cue\":\"psedo-element\",\"::cue-region\":\"psedo-element\",\"::first-letter\":\"psedo-element\",\"::first-line\":\"psedo-element\",\"::file-selector-button\":\"psedo-element\",\"::grammar-error\":\"psedo-element\",\"::marker\":\"psedo-element\",\"::part\":\"psedo-element\",\"::placeholder\":\"psedo-element\",\"::selection\":\"psedo-element\",\"::slotted\":\"psedo-element\",\"::spelling-error\":\"psedo-element\",\"::target-text\":\"psedo-element\"},\"events\":[\"abort\",\"ended\",\"addtrack\",\"change\",\"removetrack\",\"messageerror\",\"message\",\"messageerror\",\"message\",\"animationcancel\",\"animationend\",\"animationiteration\",\"animationstart\",\"copy\",\"cut\",\"DOMContentLoaded\",\"dragend\",\"dragenter\",\"dragleave\",\"dragover\",\"dragstart\",\"drag\",\"drop\",\"fullscreenchange\",\"fullscreenerror\",\"gotpointercapture\",\"keydown\",\"keypress\",\"keyup\",\"lostpointercapture\",\"paste\",\"pointercancel\",\"pointerdown\",\"pointerenter\",\"pointerleave\",\"pointerlockchange\",\"pointerlockerror\",\"pointermove\",\"pointerout\",\"pointerover\",\"pointerup\",\"readystatechange\",\"scroll\",\"selectionchange\",\"selectstart\",\"touchcancel\",\"touchend\",\"touchmove\",\"touchstart\",\"transitioncancel\",\"transitionend\",\"transitionrun\",\"transitionstart\",\"visibilitychange\",\"wheel\",\"afterscriptexecute\",\"auxclick\",\"beforescriptexecute\",\"blur\",\"click\",\"compositionend\",\"compositionstart\",\"compositionupdate\",\"contextmenu\",\"copy\",\"cut\",\"dblclick\",\"DOMActivate\",\"DOMMouseScroll\",\"error\",\"focusin\",\"focusout\",\"focus\",\"fullscreenchange\",\"fullscreenerror\",\"gesturechange\",\"gestureend\",\"gesturestart\",\"keydown\",\"keypress\",\"keyup\",\"mousedown\",\"mouseenter\",\"mouseleave\",\"mousemove\",\"mouseout\",\"mouseover\",\"mouseup\",\"mousewheel\",\"msContentZoom\",\"MSGestureChange\",\"MSGestureEnd\",\"MSGestureHold\",\"MSGestureStart\",\"MSGestureTap\",\"MSInertiaStart\",\"MSManipulationStateChanged\",\"paste\",\"scroll\",\"select\",\"show\",\"touchcancel\",\"touchend\",\"touchmove\",\"touchstart\",\"webkitmouseforcechanged\",\"webkitmouseforcedown\",\"webkitmouseforceup\",\"webkitmouseforcewillbegin\",\"wheel\",\"error\",\"message\",\"open\",\"abort\",\"error\",\"loadend\",\"loadstart\",\"load\",\"progress\",\"webglcontextcreationerror\",\"webglcontextlost\",\"webglcontextrestored\",\"toggle\",\"cancel\",\"close\",\"animationcancel\",\"animationend\",\"animationiteration\",\"animationstart\",\"beforeinput\",\"change\",\"gotpointercapture\",\"input\",\"lostpointercapture\",\"pointercancel\",\"pointerdown\",\"pointerenter\",\"pointerleave\",\"pointermove\",\"pointerout\",\"pointerover\",\"pointerup\",\"transitioncancel\",\"transitionend\",\"transitionrun\",\"transitionstart\",\"formdata\",\"reset\",\"submit\",\"invalid\",\"search\",\"abort\",\"canplaythrough\",\"canplay\",\"durationchange\",\"emptied\",\"ended\",\"error\",\"loadeddata\",\"loadedmetadata\",\"loadstart\",\"pause\",\"playing\",\"play\",\"progress\",\"ratechange\",\"seeked\",\"seeking\",\"stalled\",\"suspend\",\"timeupdate\",\"volumechange\",\"waiting\",\"slotchange\",\"cuechange\",\"enterpictureinpicture\",\"leavepictureinpicture\",\"abort\",\"close\",\"error\",\"versionchange\",\"blocked\",\"upgradeneeded\",\"error\",\"success\",\"abort\",\"complete\",\"error\",\"devicechange\",\"error\",\"addtrack\",\"removetrack\",\"ended\",\"mute\",\"unmute\",\"messageerror\",\"message\",\"complete\",\"merchantvalidation\",\"paymentmethodchange\",\"shippingaddresschange\",\"shippingoptionchange\",\"payerdetailchange\",\"resourcetimingbufferfull\",\"resize\",\"bufferedamountlow\",\"close\",\"closing\",\"error\",\"message\",\"open\",\"error\",\"tonechange\",\"gatheringstatechange\",\"selectedcandidatepairchange\",\"statechange\",\"addstream\",\"connectionstatechange\",\"datachannel\",\"icecandidateerror\",\"icecandidate\",\"iceconnectionstatechange\",\"icegatheringstatechange\",\"negotiationneeded\",\"removestream\",\"signalingstatechange\",\"track\",\"audioprocess\",\"message\",\"activate\",\"contentdelete\",\"install\",\"message\",\"notificationclick\",\"pushsubscriptionchange\",\"push\",\"connect\",\"audioend\",\"audiostart\",\"end\",\"error\",\"nomatch\",\"result\",\"soundend\",\"soundstart\",\"speechend\",\"speechstart\",\"start\",\"voiceschanged\",\"boundary\",\"end\",\"error\",\"mark\",\"pause\",\"resume\",\"start\",\"beginEvent\",\"endEvent\",\"repeatEvent\",\"abort\",\"error\",\"load\",\"resize\",\"scroll\",\"unload\",\"copy\",\"cut\",\"paste\",\"cuechange\",\"addtrack\",\"change\",\"removeTrack\",\"addtrack\",\"change\",\"removetrack\",\"resize\",\"scroll\",\"close\",\"error\",\"message\",\"open\",\"afterprint\",\"animationcancel\",\"animationend\",\"animationiteration\",\"animationstart\",\"appinstalled\",\"beforeprint\",\"beforeunload\",\"blur\",\"copy\",\"cut\",\"devicemotion\",\"deviceorientation\",\"DOMContentLoaded\",\"error\",\"focus\",\"gamepadconnected\",\"gamepaddisconnected\",\"hashchange\",\"languagechange\",\"load\",\"messageerror\",\"message\",\"offline\",\"online\",\"orientationchange\",\"pagehide\",\"pageshow\",\"paste\",\"popstate\",\"rejectionhandled\",\"resize\",\"storage\",\"transitioncancel\",\"transitionend\",\"transitionrun\",\"transitionstart\",\"unhandledrejection\",\"unload\",\"vrdisplayactivate\",\"vrdisplayblur\",\"vrdisplayconnect\",\"vrdisplaydeactivate\",\"vrdisplaydisconnect\",\"vrdisplayfocus\",\"vrdisplaypointerrestricted\",\"vrdisplaypointerunrestricted\",\"vrdisplaypresentchange\",\"messageerror\",\"message\",\"languagechange\",\"abort\",\"error\",\"loadend\",\"loadstart\",\"load\",\"progress\",\"timeout\",\"reset\",\"end\",\"inputsourceschange\",\"selectend\",\"selectstart\",\"select\",\"squeezeend\",\"squeezestart\",\"squeeze\",\"visibilitychange\",\"devicechange\"],\"bootstrap\":{}}");

},{}],"9kqnM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSUnsupportedError", ()=>CSSUnsupportedError
);
parcelHelpers.export(exports, "CSSRuleError", ()=>CSSRuleError
);
parcelHelpers.export(exports, "CSSStyleSheetError", ()=>CSSStyleSheetError
);
class CSSUnsupportedError extends Error {
    constructor(declaration){
        super(declaration);
        const name = 'CSSDeclarationError';
        const message = `"${declaration}" is not a supported CSS Declaration`;
        // super(message);
        this.name = name;
        this.message = message;
    }
}
class CSSRuleError extends Error {
    constructor(message){
        super(message);
        this.name = 'CSSRuleError';
        this.message = message;
    }
}
class CSSStyleSheetError extends Error {
    constructor(message){
        super(message);
        this.name = 'CSSStyleSheetError';
        this.message = message;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6bxk2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Unit", ()=>Unit
);
var _cssDataJson = require("./cssData.json");
class Unit {
    [Symbol.toPrimitive](hint) {
        return this.value;
    }
    static units = _cssDataJson.units;
    static types = {
        flex: [
            'fr'
        ],
        angle: [
            'deg',
            'grad',
            'rad',
            'turn'
        ],
        frequency: [
            'Hz',
            'kHz'
        ],
        lengthRelative: [
            'vh',
            'vw',
            'vb',
            'vmin',
            'vmax',
            'em',
            'ch',
            'rem',
            'ex',
            'ic',
            'lh',
            'cap'
        ],
        lengthAbsolute: [
            'px',
            'cm',
            'mm',
            'Q',
            'in',
            'pc',
            'pt'
        ],
        percent: [
            '%',
            'percent'
        ],
        time: [
            's',
            'ms'
        ],
        resolution: [
            'dpi',
            'dpcm',
            'dppx'
        ]
    };
    static #UnitNameError = class InvalidUnitError extends Error {
        constructor(message){
            super(message); // (1)
            this.name = "InvalidUnitError"; // (2)
        }
    };
    static #UnitConversionError = class UnitConversionError extends Error {
        constructor(message){
            super(message); // (1)
            this.name = "UnitConversionError"; // (2)
        }
    };
    constructor(value, unit = ""){
        const unitStr = value.toString() + unit;
        this.value = Unit.parseValue(unitStr);
        this.unit = Unit.parseUnit(unitStr);
        const conversions = Unit.units[this.unit];
        for(let i in conversions){
            const newUnitValue = this.value * Unit.parseValue(conversions[i]);
            Object.defineProperty(this, i, {
                get: function() {
                    return new Unit(newUnitValue, i);
                }
            });
        }
    }
    add(value) {
        if (typeof value === 'number') {
            this.value = this.value + value;
            return this;
        } else if (typeof value === 'string') {
            const u = new Unit(value);
            return this.add(u);
        } else if (value instanceof Unit) {
            if (value.type(this.type())) {
                value = value[this.unit].value;
                return this.add(value);
            } else throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${value.unit}"`);
        }
    }
    div(value) {
        if (typeof value === 'number') this.value = this.value / value;
        else if (typeof value === 'string') {
            const u = new Unit(value);
            return this.div(u);
        } else if (value instanceof Unit) {
            if (value.type(this.type())) {
                value = value[this.unit].value;
                return this.div(value);
            } else throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${value.unit}"`);
        }
    }
    mul(value) {
        if (typeof value === 'number') this.value = this.value * value;
        else if (typeof value === 'string') {
            const u = new Unit(value);
            return this.mul(u);
        } else if (value instanceof Unit) {
            if (value.type(this.type())) {
                value = value[this.unit].value;
                return this.mul(value);
            } else throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${value.unit}"`);
        }
    }
    sub(value) {
        if (typeof value === 'number') this.value = this.value - value;
        else if (typeof value === 'string') {
            const u = new Unit(value);
            return this.sub(u);
        } else if (value instanceof Unit) {
            if (value.type(this.type())) {
                value = value[this.unit].value;
                return this.sub(value);
            } else throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${value.unit}"`);
        }
    }
    to(unit) {
        if (Unit.types[this.type()].includes(unit)) return this[unit];
        else throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${unit}"`);
    }
    compare(unit) {
        unit = new Unit(unit.toString());
        if (Unit.types[this.type()].includes(unit.unit)) {
            const otherValue = unit[this.unit].value;
            if (this.value > otherValue) return 1;
            else if (this.value === otherValue) return 0;
            else return -1;
        } else throw new Unit.#UnitConversionError(`"${this.unit}" cannot be converted to "${unit}"`);
    }
    equals(unit) {
        return this.compare(unit) === 0;
    }
    gt(unit) {
        return this.compare(unit) === 1;
    }
    lt(unit) {
        return this.compare(unit) === -1;
    }
    calc(fn, set = false) {
        const val = fn.call(this, this.value);
        const value = new Unit(val, this.unit);
        if (set) this.value = value;
        return value;
    }
    toString() {
        return this.value + this.unit;
    }
    valueOf() {
        return this.toString();
    }
    type(someType = null) {
        if (someType) return this.type() === someType;
        for(let i in Unit.types){
            if (Unit.types[i].includes(this.unit)) return i;
        }
    }
    static parseValue(unitString) {
        return parseFloat(unitString.toString().replace(/[a-zA-Z]/g, ''));
    }
    static parseUnit(unitString) {
        const unit = unitString.toString().replace(/[0-9]/g, '').replaceAll('.', '').trim();
        if (!(unit in Unit.units)) throw new Error(`Invalid Unit: ${unit} is not a recognized CSS Unit.`);
        return unit;
    }
    static parse(unitString) {
        unitString = unitString.replaceAll('%', 'percent').toString();
        return {
            value: Unit.parseValue(unitString),
            unit: Unit.parseUnit(unitString)
        };
    }
    static extract(str = "") {
        return [
            ...str.matchAll(/[0-9]+\s*(Hz|Q|ch|cm|deg|dpcm|dpi|dppx|em|ex|fr|grad|in|kHz|mm|ms|number|pc|percent|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw)/g)
        ].map((f)=>new Unit(f[0])
        );
    }
}
Object.assign(Unit, _cssDataJson.units);
exports.default = Unit;

},{"./cssData.json":"6PMpg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WIeNu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _htmlUtilsMjs = require("./html/htmlUtils.mjs");
function html(strings, ...values) {
    let DOMString = [
        ...strings
    ];
    for(const i in values)DOMString[i] += values[i];
    DOMString = DOMString.join("");
    return {
        DOMString,
        strings,
        values,
        nodes: _htmlUtilsMjs.parseDOMString(DOMString),
        htmlit: true
    };
}
exports.default = html;
Object.assign(html, {
    properties: _htmlUtilsMjs.nodeProperties,
    methods: _htmlUtilsMjs.nodeMethods,
    create: _htmlUtilsMjs.createNode,
    assign: _htmlUtilsMjs.assignToNode,
    parse: _htmlUtilsMjs.parseDOMString,
    formatTag: _htmlUtilsMjs.formatTag,
    assignMethods: _htmlUtilsMjs.assignMethods,
    assignPrimitives: _htmlUtilsMjs.assignPrimitives,
    assignProperties: _htmlUtilsMjs.assignProperties,
    createCustomElement: _htmlUtilsMjs.createCustomElement
}); /*
html.properties = nodeProperties;
html.methods = nodeMethods;

html.create = createNode;
html.assign = assignToNode;

html.assignProperties = assignProperties;
html.assignMethods = assignMethods;
html.assignPrimitives = assignPrimitives;
html.parseDOMString = parseDOMString;
html.formatTag = formatTag;
*/ 

},{"./html/htmlUtils.mjs":"8bcc7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8bcc7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nodeProperties", ()=>nodeProperties
);
parcelHelpers.export(exports, "nodeMethods", ()=>nodeMethods
);
parcelHelpers.export(exports, "createNode", ()=>createNode
);
parcelHelpers.export(exports, "assignToNode", ()=>assignToNode
);
parcelHelpers.export(exports, "assignProperties", ()=>assignProperties
);
parcelHelpers.export(exports, "assignMethods", ()=>assignMethods
);
parcelHelpers.export(exports, "assignPrimitives", ()=>assignPrimitives
);
parcelHelpers.export(exports, "parseDOMString", ()=>parseDOMString
);
parcelHelpers.export(exports, "formatTag", ()=>formatTag
);
var _utilsMjs = require("../../utils/utils.mjs");
var _configMjs = require("../config.mjs");
var _configMjsDefault = parcelHelpers.interopDefault(_configMjs);
var _propsMjs = require("./props.mjs");
var _propsMjsDefault = parcelHelpers.interopDefault(_propsMjs);
var _queryMjs = require("./query.mjs");
const nodeProperties = {
    props: {
        get () {
            return this['-props'];
        },
        set (props) {
            this['-props'] = new _propsMjsDefault.default(this, props);
            this.setProperties(props);
        }
    },
    subtree: {
        get () {
            return this['-subtree'];
        },
        set (subtree) {
            this['-subtree'] = subtree;
            this.renderSubtree(subtree);
        }
    },
    template: {
        get () {
            return this['-template'];
        },
        set (template) {
            this['-template'] = template;
        }
    },
    '-isAssigned': {
        get () {
            return true;
        }
    }
};
const nodeMethods = {
    ..._configMjsDefault.default.intrinsics.methods,
    attachTo (selector, position = "beforeend") {
        _queryMjs.$(selector, 0).insert(position, this);
        return this;
    },
    replaceSubtree (children) {
        children = _utilsMjs.isFn(children) ? children.call(this, this.props) : children;
        children = _utilsMjs.isNode(children) ? [
            children
        ] : children;
        if (_utilsMjs.isDef(children.htmlit)) this.innerHTML = children.DOMString;
        else if (_utilsMjs.isArr(children)) {
            const childArr = [];
            for(const i in children)if (children[i].htmlit) childArr.push(...children[i].nodes);
            else childArr.push(children[i]);
            this.replaceChildren(...childArr);
        } else if (_utilsMjs.isStr(children)) this.innerHTML = children;
        return this;
    },
    replaceSelf (template) {
        template = _utilsMjs.isFn(template) ? template.call(this, this.props) : template;
        template = _utilsMjs.isNode(template) ? [
            template
        ] : template;
        if (_utilsMjs.isStr(template)) this.outerHTML = template;
        else if (_utilsMjs.isDef(template.htmlit)) this.outerHTML = template.DOMString;
        else if (_utilsMjs.isArr(template)) {
            const childArr = [];
            for(const i in template)if (template[i].htmlit) childArr.push(...template[i].nodes);
            else childArr.push(template[i]);
            this.replaceWith(...childArr);
        }
        return this;
    },
    setProperty (key, val) {
        if (_configMjsDefault.default.props.setAttributes) {
            if (this[key] === undefined && typeof val === 'string') this.setAttribute(key, val);
            else this[key] = val;
        } else this[key] = val;
        return this;
    },
    setProperties (props) {
        if (!props) props = this.props;
        for(const propKey in props){
            const propVal = props[propKey];
            this.setProperty(propKey, propVal);
        }
        return this;
    },
    renderSubtree (subtree) {
        const props = this.props;
        if (!subtree) subtree = this.subtree;
        subtree = _utilsMjs.isFn(subtree) ? subtree.call(this, props) : _utilsMjs.isNode(subtree) || _utilsMjs.isStr(subtree) ? [
            subtree
        ] : subtree.htmlit ? [
            subtree.DOMString
        ] : subtree;
        if (_utilsMjs.isDef(subtree.htmlit)) subtree = [
            subtree.DOMString
        ];
        if (_utilsMjs.isArr(subtree)) for (let node of subtree){
            if (_utilsMjs.isFn(node)) {
                const fn = node;
                node = node.call(this, props);
                node.template = fn;
            }
            if (_utilsMjs.isStr(node)) this.insertAdjacentHTML('beforeend', node);
            if (_utilsMjs.isNode(node)) this.append(node);
        }
    },
    rerender () {
        const props = this.props;
        if (_utilsMjs.isDef(this.render)) {
            const children = this.render(props);
            this.replaceSubtree(children);
        } else if (_utilsMjs.isDef(this.template)) {
            const template = this.template.call(this, props);
            this.replaceSelf(template);
        } else if (_utilsMjs.isFn(this.subtree)) this.replaceChildren(this.subtree);
        else {
            for (const node of [
                ...this.children
            ])if (_utilsMjs.isDef(node.rerender)) node.rerender();
        }
    }
};
const createNode = function(tagName, props = {}, subtree = []) {
    if (!_utilsMjs.isObj(props)) {
        if (_utilsMjs.isArr(props) || _utilsMjs.isFn(props) || _utilsMjs.isNode(props) || _utilsMjs.isStr(props)) {
            subtree = props;
            props = {};
        }
    }
    if (_utilsMjs.isDef(props.DOMString) && _utilsMjs.isDef(props.nodes)) {
        subtree = props.DOMString;
        props = {};
    }
    if (_utilsMjs.isDef(subtree.DOMString) && _utilsMjs.isDef(subtree.nodes)) subtree = subtree.DOMString;
    const node = document.createElement(tagName);
    assignToNode(node);
    node.props = props;
    node.subtree = subtree;
    return node;
};
const assignToNode = function(node) {
    if (node['-assigned']) return node;
    assignProperties(node);
    assignMethods(node);
    assignPrimitives(node);
    return node;
};
const assignProperties = function(node) {
    Object.defineProperties(node, nodeProperties);
};
const assignMethods = function(node) {
    Object.assign(node, nodeMethods);
};
const assignPrimitives = function(node) {
    node[Symbol.toPrimitive] = function(hint) {
        if (hint === "number") {
            const all = document.querySelectorAll("*");
            for(const i in all){
                if (all[i] === this) return parseInt(i);
            }
        }
        if (hint === "string" || hint === "default") return this.outerHTML;
    };
    node[Symbol.search] = function(string) {
        return string.indexOf(this.outerHTML);
    };
    node[Symbol.iterator] = function*() {
        const childNodes = this.childNodes;
        for(const i in childNodes)if (_utilsMjs.isNode(childNodes[i])) yield childNodes[i];
    };
};
const parseDOMString = function(DOMString) {
    const template = createNode('template');
    template.innerHTML = DOMString;
    return template.content;
};
const formatTag = function(tag) {
    const name = new _utilsMjs.Str(tag).dashedToCamelCase().toString();
    return name.startsWith("-") ? name.slice(1) : name;
};

},{"../../utils/utils.mjs":"dPNBH","../config.mjs":"8LnqG","./props.mjs":"bAnio","./query.mjs":"knqMK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bAnio":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Props", ()=>Props
);
var _utilsMjs = require("../../utils/utils.mjs");
class Props {
    constructor(node, object){
        if (!_utilsMjs.isObj(object)) return;
        _utilsMjs.nodeEnforcer(node);
        const handler = {
            node,
            set (target, key, value) {
                if (JSON.stringify(target[key]) === JSON.stringify(value)) return true;
                if (_utilsMjs.isObj(value) || _utilsMjs.isArr(value)) value = new _utilsMjs.DeepProxy(value, handler);
                target[key] = value;
                node.setProperty(key, value);
                this.node.rerender();
                return true;
            }
        };
        const props = new _utilsMjs.DeepProxy(object, handler);
        return props;
    }
}
exports.default = Props;

},{"../../utils/utils.mjs":"dPNBH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knqMK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$
);
parcelHelpers.export(exports, "Query", ()=>Query
);
var _utilsMjs = require("../../utils/utils.mjs");
var _cssMjs = require("../css.mjs");
var _cssMjsDefault = parcelHelpers.interopDefault(_cssMjs);
function insert(position, nodes) {
    const positionMap = {
        beforeend: append,
        afterend: after,
        beforebegin: before,
        afterbegin: prepend
    };
    if (nodes == null) {
        nodes = position;
        position = 'beforeend';
    }
    if (!_utilsMjs.isArr(nodes)) nodes = [
        nodes
    ];
    for (const node of nodes){
        const fn = positionMap[position];
        fn.call(this, node);
    }
}
function on(event, callback, options = {}) {
    event = event.split(' ');
    for (const e of event)this.addEventListener(e, callback, options);
    return this;
}
function observe(callbacks = {}) {
    const config = {
        attributes: 'attributes' in callbacks,
        childList: 'childList' in callbacks,
        subtree: 'subtree' in callbacks ? callbacks.subtree : false
    };
    const targetNode = this;
    const callback = function(mutationsList, observer) {
        for (const mutation of mutationsList){
            if ('childList' in callbacks && mutation.type === 'childList') callbacks.childList(mutation);
            if ('attributes' in callbacks && mutation.type === 'attributes') callbacks.attributes(mutation);
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    if (this.observers) this.observers.push(observer);
    else this.observers = [
        observer
    ];
    return this;
}
function clearListeners(clearChildren = false) {
    if (clearChildren) this.parentNode.replaceChild(this.cloneNode(true), this);
    else {
        const clone = this.cloneNode(false);
        while(this.hasChildNodes())this.appendChild(this.firstChild);
        this.parentNode.replaceChild(clone, this);
    }
    return this;
}
function addClass(...classes1) {
    const cleaned = [];
    for (const cls of classes1)cleaned.push(...cls.split(' '));
    this.classList.add(...cleaned);
    return this;
}
function removeClass(...classes2) {
    const cleaned = [];
    for (const cls of classes2)cleaned.push(...cls.split(' '));
    this.classList.remove(...cleaned);
    return this;
}
function replaceClass(classOld, classNew) {
    this.classList.replace(classOld, classNew);
    return this;
}
function toggleClass(...classes3) {
    const cleaned = [];
    for (const cls of classes3)cleaned.push(...cls.split(' '));
    for (const cls1 of cleaned)this.classList.toggle(cls1);
    return this;
}
function shiftClass(classes4, from = '*') {
    classes4 = classes4.split(' ');
    if (from === '*') {
        document.querySelectorAll('*').forEach((node)=>node.classList.remove(...classes4)
        );
        this.addClass(...classes4);
    }
    if (_utilsMjs.isNum(from)) {
        let node = this;
        if (from < 0) from *= -1;
        for(let i = from; i > 0; i--)node = node.parentNode;
        node.classList.remove(...classes4);
        this.addClass(...classes4);
    }
    return this;
}
function classes(...classes5) {
    if (classes5.length === 0) return this.classList;
    const cleaned = [];
    for (const cls of classes5)cleaned.push(...cls.split(' '));
    for (const cls2 of cleaned){
        if (cls2.startsWith('+')) this.addClass(cls2.slice(1));
        else if (cls2.startsWith('-')) this.removeClass(cls2.slice(1));
        else if (cls2.startsWith('?')) this.toggleClass(cls2.slice(1));
        else if (cls2.startsWith('!')) this.shiftClass(cls2.slice(1));
    }
    return this;
}
function html(...DOMStrings) {
    if (DOMStrings.length === 0) return this.innerHTML;
    this.innerHTML = DOMStrings.join('');
    return this;
}
function append(...nodes) {
    for (const node of nodes){
        if (node == null) continue;
        if (_utilsMjs.isStr(node)) this.insertAdjacentHTML('beforeend', node);
        else if (_utilsMjs.isArr(node)) node.forEach((n)=>this.insertAdjacentElement('beforeend', n)
        );
        else this.insertAdjacentElement('beforeend', node);
    }
    return this;
}
function prepend(...nodes) {
    for (const node of nodes){
        if (_utilsMjs.isStr(node)) this.insertAdjacentHTML('afterbegin', node);
        else if (_utilsMjs.isArr(node)) node.forEach((n)=>this.insertAdjacentElement('afterbegin', n)
        );
        else this.insertAdjacentElement('afterbegin', node);
    }
    return this;
}
function before(...nodes) {
    for (const node of nodes){
        if (_utilsMjs.isStr(node)) this.insertAdjacentHTML('beforebegin', node);
        else if (_utilsMjs.isArr(node)) node.forEach((n)=>this.insertAdjacentElement('beforebegin', n)
        );
        else this.insertAdjacentElement('beforebegin', node);
    }
    return this;
}
function after(nodes) {
    for (const node of nodes){
        if (_utilsMjs.isStr(node)) this.insertAdjacentHTML('afterend', node);
        else if (_utilsMjs.isArr(node)) node.forEach((n)=>this.insertAdjacentElement('afterend', n)
        );
        else this.insertAdjacentElement('afterend', node);
    }
    return this;
}
function txt(...text) {
    if (text.length === 0) return this.textContent;
    this.textContent = text.join('');
    return this;
}
function attr(name, value) {
    if (name == null && value == null) return this.attributes;
    if (name && value == null) return this.getAttribute(name);
    if (name && value) this.setAttribute(name, value);
    return this;
}
function toggleAttr(name, force = true) {
    this.toggleAttribute(name, force);
    return this;
}
function removeAttr(name) {
    this.removeAttribute(name);
    return this;
}
function val(value) {
    if (value == null) return this.getAttribute('value');
    this.setAttribute('value', value);
    return this;
}
function x(xPosition) {
    if (!xPosition) return this.offsetLeft;
    this.style.left = xPosition;
    return this;
}
function y(yPosition) {
    if (!yPosition) return this.offsetLeft;
    this.style.top = yPosition;
    return this;
}
function height(height1) {
    if (!height1) return this.offsetHeight;
    this.style.height = height1;
    return this;
}
function width(width1) {
    if (!width1) return this.offsetWidth;
    this.style.width = width1;
    return this;
}
function offset() {
    return {
        top: this.offsetTop,
        left: this.offsetLeft,
        height: this.offsetHeight,
        width: this.offsetWidth
    };
}
function find(selectorString) {
    return new Query(this.querySelector(selectorString));
}
function findAll(selectorString, filter = (a)=>true
) {
    if (_utilsMjs.isStr(filter)) filter = (q)=>q.matches(filter)
    ;
    return $(this.querySelectorAll(selectorString));
}
function parent() {
    return new Query(this.parentNode);
}
function ancestors(filter = (a)=>true
) {
    const fn = typeof filter === 'string' ? (a)=>a.matches(filter)
     : filter;
    const ancestorNodes = [];
    let currNode = this;
    while(!(currNode instanceof Document)){
        ancestorNodes.push(currNode.parentNode);
        currNode = currNode.parentNode;
    }
    return ancestorNodes.filter(fn);
}
function childs(filter = ()=>true
) {
    if (_utilsMjs.isStr(filter)) filter = (node)=>node.matches(filter)
    ;
    let children = [
        ...this.childNodes
    ];
    children = children.filter((node)=>node.nodeName !== '#text'
    );
    return children.filter((node)=>filter.call(node, node)
    ).map((n)=>$(n, 0)
    );
}
function inView() {
    const rect = this.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return vertInView && horInView;
}
class Query extends Array {
    constructor(query, position){
        super();
        if (query instanceof HTMLElement) query = [
            query
        ];
        if (_utilsMjs.isStr(query)) query = document.querySelectorAll(query);
        for (const node of query)this.push(node);
        if (typeof position === 'number') return new Query(this[position]);
    }
    static exists(tagName) {
        return document.querySelectorAll(tagName).length > 0;
    }
    static get head() {
        return $('head');
    }
    static get body() {
        return $('body');
    }
    insert(position, toInsert) {
        this.forEach((node)=>{
            insert.apply(node, [
                position,
                toInsert
            ]);
        });
    }
    css(styles) {
        const c = _cssMjsDefault.default(styles);
        this.forEach((node)=>{
            for(const p in c)node[p] = c[p];
        });
        return this;
    }
    shiftClass(...clses) {
        this.forEach((node)=>{
            shiftClass.apply(node, clses);
        });
        return this;
    }
    /**
     * @param {string} event - event string (i.e. "click")
     * @param {function} callback - event string (i.e. "click")
     * @param {object} options - listener options
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * @returns {HTMLElement}
    */ on(event, callback, options) {
        this.forEach((node)=>on.apply(node, [
                event,
                callback,
                options
            ])
        );
        return this;
    }
    /**
     * @param {object} callbacks - Functions for MutationObserver
     * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
     * @returns {HTMLElement}
    */ observe(observerConfig = {
        attributes: (mutation)=>mutation
        ,
        childList: (mutation)=>mutation
        ,
        subtree: (mutation)=>mutation
    }) {
        this.forEach((node)=>observe.apply(node, [
                observerConfig
            ])
        );
        return this;
    }
    /**
     * @param {boolean} clearChildren - remove listeners from children ?
     * @returns {HTMLElement}
    */ clearListeners(clearChildren = false) {
        this.forEach((node)=>clearListeners.apply(node, [])
        );
        return this;
    }
    /**
     * @param {string | array } classes - string or list of strings to add
     * @returns {HTMLElement}
    */ addClass(...classes6) {
        this.forEach((node)=>addClass.apply(node, [
                ...classes6
            ])
        );
        return this;
    }
    /**
     * @param {string | array } classes - string or list of strings to add
     * @returns {HTMLElement | Map}
    */ classes(...classes7) {
        this.forEach((node)=>classes7.apply(node, [
                ...classes7
            ])
        );
        return this;
    }
    /**
     * @param {...string | array } classes - string or list of strings to remove
     * @returns {HTMLElement}
    */ removeClass(...classes8) {
        this.forEach((node)=>removeClass.apply(node, [
                ...classes8
            ])
        );
        return this;
    }
    /**
     * @param {string | array } classOld - String or list of strings to replace
     * @param {string} classNew - String to replace classOld
     * @returns {HTMLElement}
    */ replaceClass(...classes9) {
        this.forEach((node)=>replaceClass.apply(node, [
                ...classes9
            ])
        );
        return this;
    }
    /**
     * @param {string | array } - String or list of strings to toggle
     * @returns {HTMLElement}
    */ toggleClass(...classes10) {
        this.forEach((node)=>toggleClass.apply(node, [
                ...classes10
            ])
        );
        return this;
    }
    /**
     * @description - this.insertAdjacentHTML("beforeend",DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */ html(...DOMStrings) {
        if (DOMStrings.length > 0) {
            this.forEach((node)=>html.apply(node, [
                    ...DOMStrings
                ])
            );
            return this;
        }
        const m = new Map();
        this.forEach((node)=>m.set(node, html.call(node))
        );
        return m;
    }
    /**
     * @description - this.insertAdjacentHTML("beforeend",DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */ append(...nodes) {
        this.forEach((node)=>append.apply(node, [
                ...nodes
            ])
        );
        return this;
    }
    /**
     * @description - this.insertAdjacentHTML("afterbegin",DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */ prepend(...nodes) {
        this.forEach((node)=>prepend.apply(node, [
                ...nodes
            ])
        );
        return this;
    }
    /**
     * @description - this.insertAdjacentHTML("beforebegin",DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */ before(...nodes) {
        this.forEach((node)=>before.apply(node, [
                ...nodes
            ])
        );
        return this;
    }
    /**
     * @description - this.insertAdjacentHTML("afterend",DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */ after(...nodes) {
        this.forEach((node)=>after.apply(node, [
                ...nodes
            ])
        );
        return this;
    }
    /**
     * @description - this.textContent = (DOMStrings)
     * @param {...string} DOMStrings
     * @returns {HTMLElement}
    */ txt(...text) {
        if (text.length > 0) {
            this.forEach((node)=>txt.apply(node, [
                    ...text
                ])
            );
            return this;
        }
        const m = new Map();
        this.forEach((node)=>m.set(node, txt.call(node))
        );
        return m;
    }
    /**
     * @description - this.setAttribute(name,value)
     * @param {string} name - attribute name (optional)
     * @param {string} value - attribute value (optional)
     * @returns {NamedNodeMap | String | HTMLElement} - NamedNodeMap if 0 args, attribute value if 1 arg, this if 2 args
    */ attr(name, value) {
        if (!name) {
            const m = new Map();
            this.forEach((node)=>m.set(node, attr.call(node, []))
            );
            return m;
        }
        if (!value) {
            const m = new Map();
            this.forEach((node)=>m.set(node, attr.call(node, [
                    name
                ]))
            );
            return m;
        }
        this.forEach((node)=>attr.apply(node, [
                name,
                value
            ])
        );
        return this;
    }
    /**
     * @description - this.toggleAttribute(name,force)
     * @param {string} name - attribute name to toggle
     * @param {boolean} force - attribute value (optional) (default = true)
     * @returns {HTMLElement} - return this
    */ toggleAttr(name, force = false) {
        this.forEach((node)=>toggleAttr.apply(node, [
                name,
                force
            ])
        );
        return this;
    }
    /**
     * @description - this.removeAttribute(name)
     * @param {string} name - attribute name to remove
     * @returns {HTMLElement} - return this
    */ removeAttr(name) {
        this.forEach((node)=>removeAttr.apply(node, [
                name
            ])
        );
        return this;
    }
    /**
     * @description - this.value = value
     * @param {string} value - attribute name to remove
     * @returns {string | HTMLElement} - return this.value if 0 args, or this if 1 arg
    */ val(value) {
        if (!value) {
            const m = new Map();
            this.forEach((node)=>m.set(node, val.call(node, []))
            );
            return m;
        }
        this.forEach((node)=>val.apply(node, [
                value
            ])
        );
        return this;
    }
    /**
     * @description xPosition? this.style.left = xPosition : this.offsetLeft
     * @param {number} xPosition (optional)
    * @returns {number | HTMLElement} returns number if no arg provided
    */ x(xPosition) {
        if (!xPosition) {
            const m = new Map();
            this.forEach((node)=>m.set(node, node.offsetLeft)
            );
            return m;
        }
        this.forEach((node)=>x.apply(node, [
                xPosition
            ])
        );
        return this;
    }
    /**
     * @description yPosition? this.style.top = yPosition : this.offsetTop
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */ y(yPosition) {
        if (!yPosition) {
            const m = new Map();
            this.forEach((node)=>m.set(node, node.offsetTop)
            );
            return m;
        }
        this.forEach((node)=>y.apply(node, [
                yPosition
            ])
        );
        return this;
    }
    /**
     * @description height? this.style.height = height : this.offsetHeight
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */ height(height2) {
        if (!height2) {
            const m = new Map();
            this.forEach((node)=>m.set(node, node.offsetHeight)
            );
            return m;
        }
        this.forEach((node)=>height2.apply(node, [
                height2
            ])
        );
        return this;
    }
    /**
     * @description height? this.style.width = width : this.offsetWidth
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */ width(width2) {
        if (!width2) {
            const m = new Map();
            this.forEach((node)=>m.set(node, node.offsetWidth)
            );
            return m;
        }
        this.forEach((node)=>width2.apply(node, [
                width2
            ])
        );
        return this;
    }
    /**
     * @description height? this.style.height = height : this.offsetHeight
     * @param {number} yPosition (optional)
     * @returns {number | HTMLElement} returns number if no arg provided
    */ offset() {
        const m = new Map();
        this.forEach((node)=>m.set(node, offset.apply(node, []))
        );
        return m;
    }
    /**
     * @description wrapper for this.querySelector
     * @param {string} selectorString
     * @returns {Query}
    */ find(selectorString) {
        const m = new Map();
        this.forEach((node)=>{
            m.set(node, find.apply(node, [
                selectorString
            ]));
        });
        return this;
    }
    /**
     * @description wrapper for this.querySelectorAll
     * @param {string} selectorString
     * @param {function} filter filter for returned nodes
     * @returns {Query}
    */ findAll(selectorString, filter = (a)=>true
    ) {
        const m = new Map();
        this.forEach((node)=>{
            m.set(node, findAll.apply(node, [
                selectorString,
                filter
            ]));
        });
        return this;
    }
    /**
     * @description wrapper for this.parentNode
     * @returns {HTMLElement}
    */ parent() {
        const m = new Map();
        this.forEach((node)=>m.set(node, parent.apply(node, []))
        );
        return m;
    }
    /**
     * @description array of ancestors up till :root
     * @param {function | string} filter filter for array, if string, filter is (str=str) => this.matches(str)
     * @returns {HTMLElement}
    */ ancestors(filter = (a)=>true
    ) {
        const m = new Map();
        this.forEach((node)=>m.set(node, ancestors.apply(node, [
                filter
            ]))
        );
        return m;
    }
    /**
     * @description array of children
     * @param {function | string} filter filter for children array , if string, filter is (str=str) => child.matches(str)
     * @returns {HTMLElement}
    */ childs(options) {
        options = {
            filter: (node)=>true
            ,
            textNode: false,
            ...options
        };
        const m = new Map();
        this.forEach((node)=>m.set(node, childs.apply(node, [
                options
            ]))
        );
        return m;
    }
    /**
     * @description returns boolean indicating whether this is in the visible window
     * @returns {boolean}
    */ inView() {
        const m = new Map();
        this.forEach((node)=>m.set(node, inView.apply(node, []))
        );
        return m;
    }
    /**
     * @description returns boolean indicating whether this is in the visible window
     * @returns {boolean}
    */ animations() {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getAnimations.apply(node, []))
        );
        return m;
    }
    /** ******  EXTENSIONS *********** */ /*
    const m = new Map()
    this.forEach(node => m.set(node, node..apply(node,[...args])));
    return m;
*/ closest(filter = (a)=>true
    ) {
        const m = new Map();
        this.forEach((node)=>{
            console.log(node.closest);
            m.set(node, node.closest.apply(node, [
                filter
            ]));
        });
        return m;
    }
    matches(selectorString) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.matches.apply(node, [
                selectorString
            ]))
        );
        return m;
    }
    scroll(...args) {
        this.forEach((node)=>node.scroll.apply(node, [
                ...args
            ])
        );
        return this;
    }
    scrollBy(...args) {
        this.forEach((node)=>node.scrollBy.apply(node, [
                ...args
            ])
        );
        return this;
    }
    scrollIntoView(...args) {
        this.forEach((node)=>node.scrollIntoView.apply(node, [
                ...args
            ])
        );
        return this;
    }
    scrollIntoViewIfNeeded(...args) {
        this.forEach((node)=>node.scrollIntoViewIfNeeded.apply(node, [
                ...args
            ])
        );
        return this;
    }
    scrollTo(...args) {
        this.forEach((node)=>node.scrollTo.apply(node, [
                ...args
            ])
        );
        return this;
    }
    animate(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.animate.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    attachShadow(...args) {
        this.forEach((node)=>node.attachShadow.apply(node, [
                ...args
            ])
        );
        return this;
    }
    computedStyleMap(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.computedStyleMap.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    createShadowRoot(...args) {
        this.forEach((node)=>node.createShadowRoot.apply(node, [
                ...args
            ])
        );
        return this;
    }
    getAnimations(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getAnimations.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    getAttribute(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getAttribute.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    getAttributeNames(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getAttributeNames.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    getAttributeNode(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getAttributeNode.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    getAttributeNodeNS(...args) {
        this.forEach((node)=>node.getAttributeNodeNS.apply(node, [
                ...args
            ])
        );
        return this;
    }
    getAttributeNS(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getAttributeNS.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    getBoundingClientRect(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getBoundingClientRect.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    getClientRects(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getClientRects.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    getElementsByClassName(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getElementsByClassName.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    getElementsByTagName(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getElementsByTagName.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    getElementsByTagNameNS(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.getElementsByTagNameNS.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    hasAttribute(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.hasAttributes.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    hasAttributeNS(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.hasAttributeNS.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    hasAttributes(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.hasAttributes.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    hasPointerCapture(...args) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.hasPointerCapture.apply(node, [
                ...args
            ]))
        );
        return m;
    }
    insertAdjacentElement(...args) {
        this.forEach((node)=>node.insertAdjacentElement.apply(node, [
                ...args
            ])
        );
        return this;
    }
    insertAdjacentHTML(...args) {
        this.forEach((node)=>node.insertAdjacentHTML.apply(node, [
                ...args
            ])
        );
        return this;
    }
    insertAdjacentText(...args) {
        this.forEach((node)=>node.insertAdjacentText.apply(node, [
                ...args
            ])
        );
        return this;
    }
    msZoomTo(...args) {
        this.forEach((node)=>node.msZoomTo.apply(node, [
                ...args
            ])
        );
        return this;
    }
    querySelector(query) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.querySelector.apply(node, [
                query
            ]))
        );
        return m;
    }
    querySelectorAll(query) {
        const m = new Map();
        this.forEach((node)=>m.set(node, node.querySelectorAll.apply(node, [
                query
            ]))
        );
        return m;
    }
    releasePointerCapture(...args) {
        this.forEach((node)=>node.releasePointerCapture.apply(node, [
                ...args
            ])
        );
        return this;
    }
    removeAttribute(...args) {
        this.forEach((node)=>node.removeAttribute.apply(node, [
                ...args
            ])
        );
        return this;
    }
    removeAttributeNode(...args) {
        this.forEach((node)=>node.removeAttributeNode.apply(node, [
                ...args
            ])
        );
        return this;
    }
    removeAttributeNS(...args) {
        this.forEach((node)=>node.removeAttributeNS.apply(node, [
                ...args
            ])
        );
        return this;
    }
    replaceChildren(...args) {
        this.forEach((node)=>node.replaceChildren.apply(node, [
                ...args
            ])
        );
        return this;
    }
    replaceWith(...args) {
        this.forEach((node)=>node.replaceWith.apply(node, [
                ...args
            ])
        );
        return this;
    }
    requestFullscreen(...args) {
        this.forEach((node)=>node.requestFullscreen.apply(node, [
                ...args
            ])
        );
        return this;
    }
    requestPointerLock(...args) {
        this.forEach((node)=>node.requestPointerLock.apply(node, [
                ...args
            ])
        );
        return this;
    }
    setAttribute(...args) {
        this.forEach((node)=>node.setAttribute.apply(node, [
                ...args
            ])
        );
        return this;
    }
    setAttributeNode(...args) {
        this.forEach((node)=>node.setAttributeNode.apply(node, [
                ...args
            ])
        );
        return this;
    }
    setAttributeNodeNS(...args) {
        this.forEach((node)=>node.setAttributeNodeNS.apply(node, [
                ...args
            ])
        );
        return this;
    }
    setAttributeNS(...args) {
        this.forEach((node)=>node.setAttributeNS.apply(node, [
                ...args
            ])
        );
        return this;
    }
    setCapture(...args) {
        this.forEach((node)=>node.setCapture.apply(node, [
                ...args
            ])
        );
        return this;
    }
    setHTML(...args) {
        this.forEach((node)=>node.setHTML.apply(node, [
                ...args
            ])
        );
        return this;
    }
    setPointerCapture(...args) {
        this.forEach((node)=>node.setPointerCapture.apply(node, [
                ...args
            ])
        );
        return this;
    }
    toggleAttribute(...args) {
        this.forEach((node)=>node.toggleAttribute.apply(node, [
                ...args
            ])
        );
        return this;
    }
}
function $(query, position) {
    return new Query(query, position);
}
$.head = Query.head;
$.body = Query.body;
$.exists = Query.exists;
exports.default = $;

},{"../../utils/utils.mjs":"dPNBH","../css.mjs":"4KkEW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1xSZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @typedef {(HTMLElement|DOMString)} Html
 * @typedef {(array|function|Html)} Subtree
 */ /**
 * Creates HTMLElement < a >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "A", ()=>A
);
/**
 * Creates HTMLElement < abbr >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "ABBR", ()=>ABBR
);
/**
 * Creates HTMLElement < acronym >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "ACRONYM", ()=>ACRONYM
);
/**
 * Creates HTMLElement < address >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "ADDRESS", ()=>ADDRESS
);
/**
 * Creates HTMLElement < applet >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "APPLET", ()=>APPLET
);
/**
 * Creates HTMLElement < area >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "AREA", ()=>AREA
);
/**
 * Creates HTMLElement < article >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "ARTICLE", ()=>ARTICLE
);
/**
 * Creates HTMLElement < aside >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "ASIDE", ()=>ASIDE
);
/**
 * Creates HTMLElement < audio >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "AUDIO", ()=>AUDIO
);
/**
 * Creates HTMLElement < b >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "B", ()=>B
);
/**
 * Creates HTMLElement < base >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "BASE", ()=>BASE
);
/**
 * Creates HTMLElement < basefont >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "BASEFONT", ()=>BASEFONT
);
/**
 * Creates HTMLElement < bdi >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "BDI", ()=>BDI
);
/**
 * Creates HTMLElement < bdo >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "BDO", ()=>BDO
);
/**
 * Creates HTMLElement < big >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "BIG", ()=>BIG
);
/**
 * Creates HTMLElement < blockquote >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "BLOCKQUOTE", ()=>BLOCKQUOTE
);
/**
 * Creates HTMLElement < body >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "BODY", ()=>BODY
);
/**
 * Creates HTMLElement < br >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "BR", ()=>BR
);
/**
 * Creates HTMLElement < button >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "BUTTON", ()=>BUTTON
);
/**
 * Creates HTMLElement < canvas >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "CANVAS", ()=>CANVAS
);
/**
 * Creates HTMLElement < caption >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "CAPTION", ()=>CAPTION
);
/**
 * Creates HTMLElement < center >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "CENTER", ()=>CENTER
);
/**
 * Creates HTMLElement < cite >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "CITE", ()=>CITE
);
/**
 * Creates HTMLElement < code >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "CODE", ()=>CODE
);
/**
 * Creates HTMLElement < col >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "COL", ()=>COL
);
/**
 * Creates HTMLElement < colgroup >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "COLGROUP", ()=>COLGROUP
);
/**
 * Creates HTMLElement < data >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DATA", ()=>DATA
);
/**
 * Creates HTMLElement < datalist >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DATALIST", ()=>DATALIST
);
/**
 * Creates HTMLElement < dd >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DD", ()=>DD
);
/**
 * Creates HTMLElement < del >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DEL", ()=>DEL
);
/**
 * Creates HTMLElement < details >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DETAILS", ()=>DETAILS
);
/**
 * Creates HTMLElement < dfn >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DFN", ()=>DFN
);
/**
 * Creates HTMLElement < dialog >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DIALOG", ()=>DIALOG
);
/**
 * Creates HTMLElement < dir >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DIR", ()=>DIR
);
/**
 * Creates HTMLElement < div >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DIV", ()=>DIV
);
/**
 * Creates HTMLElement < dl >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DL", ()=>DL
);
/**
 * Creates HTMLElement < dt >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "DT", ()=>DT
);
/**
 * Creates HTMLElement < em >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "EM", ()=>EM
);
/**
 * Creates HTMLElement < embed >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "EMBED", ()=>EMBED
);
/**
 * Creates HTMLElement < fieldset >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "FIELDSET", ()=>FIELDSET
);
/**
 * Creates HTMLElement < figcaption >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "FIGCAPTION", ()=>FIGCAPTION
);
/**
 * Creates HTMLElement < figure >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "FIGURE", ()=>FIGURE
);
/**
 * Creates HTMLElement < font >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "FONT", ()=>FONT
);
/**
 * Creates HTMLElement < footer >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "FOOTER", ()=>FOOTER
);
/**
 * Creates HTMLElement < form >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "FORM", ()=>FORM
);
/**
 * Creates HTMLElement < frame >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "FRAME", ()=>FRAME
);
/**
 * Creates HTMLElement < frameset >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "FRAMESET", ()=>FRAMESET
);
/**
 * Creates HTMLElement < h1 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "H1", ()=>H1
);
/**
 * Creates HTMLElement < h2 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "H2", ()=>H2
);
/**
 * Creates HTMLElement < h3 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "H3", ()=>H3
);
/**
 * Creates HTMLElement < h4 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "H4", ()=>H4
);
/**
 * Creates HTMLElement < h5 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "H5", ()=>H5
);
/**
 * Creates HTMLElement < h6 >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "H6", ()=>H6
);
/**
 * Creates HTMLElement < head >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "HEAD", ()=>HEAD
);
/**
 * Creates HTMLElement < header >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "HEADER", ()=>HEADER
);
/**
 * Creates HTMLElement < hr >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "HR", ()=>HR
);
/**
 * Creates HTMLElement < html >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "HTML", ()=>HTML
);
/**
 * Creates HTMLElement < i >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "I", ()=>I
);
/**
 * Creates HTMLElement < iframe >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "IFRAME", ()=>IFRAME
);
/**
 * Creates HTMLElement < img >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "IMG", ()=>IMG
);
/**
 * Creates HTMLElement < input >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "INPUT", ()=>INPUT
);
/**
 * Creates HTMLElement < ins >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "INS", ()=>INS
);
/**
 * Creates HTMLElement < kbd >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "KBD", ()=>KBD
);
/**
 * Creates HTMLElement < label >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "LABEL", ()=>LABEL
);
/**
 * Creates HTMLElement < legend >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "LEGEND", ()=>LEGEND
);
/**
 * Creates HTMLElement < li >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "LI", ()=>LI
);
/**
 * Creates HTMLElement < link >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "LINK", ()=>LINK
);
/**
 * Creates HTMLElement < main >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "MAIN", ()=>MAIN
);
/**
 * Creates HTMLElement < map >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "MAP", ()=>MAP
);
/**
 * Creates HTMLElement < main >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "MARK", ()=>MARK
);
/**
 * Creates HTMLElement < meta >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "META", ()=>META
);
/**
 * Creates HTMLElement < meter >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "METER", ()=>METER
);
/**
 * Creates HTMLElement < nav >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "NAV", ()=>NAV
);
/**
 * Creates HTMLElement < noframes >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "NOFRAMES", ()=>NOFRAMES
);
/**
 * Creates HTMLElement < noscript >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "NOSCRIPT", ()=>NOSCRIPT
);
/**
 * Creates HTMLElement < object >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "OBJECT", ()=>OBJECT
);
/**
 * Creates HTMLElement < ol >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "OL", ()=>OL
);
/**
 * Creates HTMLElement < optgroup >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "OPTGROUP", ()=>OPTGROUP
);
/**
 * Creates HTMLElement < option >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "OPTION", ()=>OPTION
);
/**
 * Creates HTMLElement < output >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "OUTPUT", ()=>OUTPUT
);
/**
 * Creates HTMLElement < p >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "P", ()=>P
);
/**
 * Creates HTMLElement < param >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "PARAM", ()=>PARAM
);
/**
 * Creates HTMLElement < picture >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "PICTURE", ()=>PICTURE
);
/**
 * Creates HTMLElement < pre >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "PRE", ()=>PRE
);
/**
 * Creates HTMLElement < progress >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "PROGRESS", ()=>PROGRESS
);
/**
 * Creates HTMLElement < q >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "Q", ()=>Q
);
/**
 * Creates HTMLElement < rp >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "RP", ()=>RP
);
/**
 * Creates HTMLElement < rt >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "RT", ()=>RT
);
/**
 * Creates HTMLElement < ruby >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "RUBY", ()=>RUBY
);
/**
 * Creates HTMLElement < s >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "S", ()=>S
);
/**
 * Creates HTMLElement < samp >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SAMP", ()=>SAMP
);
/**
 * Creates HTMLElement < script >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SCRIPT", ()=>SCRIPT
);
/**
 * Creates HTMLElement < section >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SECTION", ()=>SECTION
);
/**
 * Creates HTMLElement < select >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SELECT", ()=>SELECT
);
/**
 * Creates HTMLElement < small >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SMALL", ()=>SMALL
);
/**
 * Creates HTMLElement < source >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SOURCE", ()=>SOURCE
);
/**
 * Creates HTMLElement < span >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SPAN", ()=>SPAN
);
/**
 * Creates HTMLElement < strike >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "STRIKE", ()=>STRIKE
);
/**
 * Creates HTMLElement < strong >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "STRONG", ()=>STRONG
);
/**
 * Creates HTMLElement < style >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "STYLE", ()=>STYLE
);
/**
 * Creates HTMLElement < sub >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SUB", ()=>SUB
);
/**
 * Creates HTMLElement < summary >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SUMMARY", ()=>SUMMARY
);
/**
 * Creates HTMLElement < sup >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SUP", ()=>SUP
);
/**
 * Creates HTMLElement < svg >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "SVG", ()=>SVG
);
/**
 * Creates HTMLElement < table >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TABLE", ()=>TABLE
);
/**
 * Creates HTMLElement < tbody >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TBODY", ()=>TBODY
);
/**
 * Creates HTMLElement < td >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TD", ()=>TD
);
/**
 * Creates HTMLElement < template >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TEMPLATE", ()=>TEMPLATE
);
/**
 * Creates HTMLElement < textarea >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TEXTAREA", ()=>TEXTAREA
);
/**
 * Creates HTMLElement < tfoot >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TFOOT", ()=>TFOOT
);
/**
 * Creates HTMLElement < th >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TH", ()=>TH
);
/**
 * Creates HTMLElement < thead >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "THEAD", ()=>THEAD
);
/**
 * Creates HTMLElement < time >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TIME", ()=>TIME
);
/**
 * Creates HTMLElement < title >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TITLE", ()=>TITLE
);
/**
 * Creates HTMLElement < tr >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TR", ()=>TR
);
/**
 * Creates HTMLElement < track >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TRACK", ()=>TRACK
);
/**
 * Creates HTMLElement < tt >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "TT", ()=>TT
);
/**
 * Creates HTMLElement < u >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "U", ()=>U
);
/**
 * Creates HTMLElement < ul >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "UL", ()=>UL
);
/**
 * Creates HTMLElement < var >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "VAR", ()=>VAR
);
/**
 * Creates HTMLElement < video >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "VIDEO", ()=>VIDEO
);
/**
 * Creates HTMLElement < wbr >
 * @class
 * @param {object} props Node properties
 * @param {Subtree} subtree Node Descendant(s) to inherit props
 * @global
*/ parcelHelpers.export(exports, "WBR", ()=>WBR
) // export {
 // export {A,ABBR,ACRONYM,ADDRESS,APPLET,AREA,ARTICLE,ASIDE,AUDIO,B,BASE,BASEFONT,BDI,BDO,BIG,BLOCKQUOTE,BODY,BR,BUTTON,CANVAS,CAPTION,CENTER,CITE,CODE,COL,COLGROUP,DATA,DATALIST,DD,DEL,DETAILS,DFN,DIALOG,DIR,DIV,DL,DT,EM,EMBED,FIELDSET,FIGCAPTION,FIGURE,FONT,FOOTER,FORM,FRAME,FRAMESET,H1,H2,H3,H4,H5,H6,HEAD,HEADER,HR,HTML,I,IFRAME,IMG,INPUT,INS,KBD,LABEL,LEGEND,LI,LINK,MAIN,MAP,MARK,META,METER,NAV,NOFRAMES,NOSCRIPT,OBJECT,OL,OPTGROUP,OPTION,OUTPUT,P,PARAM,PICTURE,PRE,PROGRESS,Q,RP,RT,RUBY,S,SAMP,SCRIPT,SECTION,SELECT,SMALL,SOURCE,SPAN,STRIKE,STRONG,STYLE,SUB,SUMMARY,SUP,SVG,TABLE,TBODY,TD,TEMPLATE,TEXTAREA,TFOOT,TH,THEAD,TIME,TITLE,TR,TRACK,TT,U,UL,VAR,VIDEO,WBR}
 /**
 * ["A","Abbr","Acronym","Address","Applet","Area","Article","Aside","Audio","B","Base","Basefont","Bdi","Bdo","Big","Blockquote","Body","Br","Button","Canvas","Caption","Center","Cite","Code","Col","Colgroup","Data","Datalist","Dd","Del","Details","Dfn","Dialog","Dir","Div","Dl","Dt","Em","Embed","Fieldset","Figcaption","Figure","Font","Footer","Form","Frame","Frameset","H1","H2","H3","H4","H5","H6","Head","Header","Hr","Html","I","Iframe","Img","Input","Ins","Kbd","Label","Legend","Li","Link","Main","Map","Mark","Meta","Meter","Nav","Noframes","Noscript","Object","Ol","Optgroup","Option","Output","P","Param","Picture","Pre","Progress","Q","Rp","Rt","Ruby","S","Samp","Script","Section","Select","Small","Source","Span","Strike","Strong","Style","Sub","Summary","Sup","Svg","Table","Tbody","Td","Template","Textarea","Tfoot","Th","Thead","Time","Title","Tr","Track","Tt","U","Ul","Var","Video","Wbr"]
 */ ;
var _utilsMjs = require("../utils/utils.mjs");
var _cssMjs = require("./css.mjs");
var _cssMjsDefault = parcelHelpers.interopDefault(_cssMjs);
var _htmlMjs = require("./html.mjs");
var _htmlMjsDefault = parcelHelpers.interopDefault(_htmlMjs);
const $create = _htmlMjsDefault.default.create;
const $createExt = function(tagname, props, $ubtree) {
    const subtree = this.render ? this.render.call(this, props) : [];
    const node = _htmlMjsDefault.default.create(tagname, props, subtree);
    if (this.render) node.render = this.render;
    if ($ubtree) node.renderSubtree($ubtree);
    _utilsMjs.methods(this).filter((i)=>![
            'constructor',
            'render'
        ].includes(i)
    ).forEach((method)=>{
        node[method] = this[method];
    });
    if (this.css) {
        const styles = this.css.sheet ? this.css : _cssMjsDefault.default(this.css);
        styles.sheet.adopt(true);
    }
    return node;
};
class A {
    constructor(props = {}, subtree = []){
        const tagname = "a";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class ABBR {
    constructor(props, subtree){
        const tagname = "abbr";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class ACRONYM {
    constructor(props, subtree){
        const tagname = "acronym";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class ADDRESS {
    constructor(props, subtree){
        const tagname = "address";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class APPLET {
    constructor(props, subtree){
        const tagname = "applet";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class AREA {
    constructor(props, subtree){
        const tagname = "area";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class ARTICLE {
    constructor(props, subtree){
        const tagname = "article";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class ASIDE {
    constructor(props, subtree){
        const tagname = "aside";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class AUDIO {
    constructor(props, subtree){
        const tagname = "audio";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class B {
    constructor(props, subtree){
        const tagname = "b";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class BASE {
    constructor(props, subtree){
        const tagname = "base";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class BASEFONT {
    constructor(props, subtree){
        const tagname = "basefont";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class BDI {
    constructor(props, subtree){
        const tagname = "bdi";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class BDO {
    constructor(props, subtree){
        const tagname = "bdo";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class BIG {
    constructor(props, subtree){
        const tagname = "big";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class BLOCKQUOTE {
    constructor(props, subtree){
        const tagname = "blockquote";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class BODY {
    constructor(props, subtree){
        const tagname = "body";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class BR {
    constructor(props, subtree){
        const tagname = "br";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class BUTTON {
    constructor(props, subtree){
        const tagname = "button";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class CANVAS {
    constructor(props, subtree){
        const tagname = "canvas";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class CAPTION {
    constructor(props, subtree){
        const tagname = "caption";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class CENTER {
    constructor(props, subtree){
        const tagname = "center";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class CITE {
    constructor(props, subtree){
        const tagname = "cite";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class CODE {
    constructor(props, subtree){
        const tagname = "code";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class COL {
    constructor(props, subtree){
        const tagname = "col";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class COLGROUP {
    constructor(props, subtree){
        const tagname = "colgroup";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DATA {
    constructor(props, subtree){
        const tagname = "data";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DATALIST {
    constructor(props, subtree){
        const tagname = "datalist";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DD {
    constructor(props, subtree){
        const tagname = "dd";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DEL {
    constructor(props, subtree){
        const tagname = "del";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DETAILS {
    constructor(props, subtree){
        const tagname = "details";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DFN {
    constructor(props, subtree){
        const tagname = "dfn";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DIALOG {
    constructor(props, subtree){
        const tagname = "dialog";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DIR {
    constructor(props, subtree){
        const tagname = "dir";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DIV {
    constructor(props, subtree){
        const tagname = "div";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DL {
    constructor(props, subtree){
        const tagname = "dl";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class DT {
    constructor(props, subtree){
        const tagname = "dt";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class EM {
    constructor(props, subtree){
        const tagname = "em";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class EMBED {
    constructor(props, subtree){
        const tagname = "embed";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class FIELDSET {
    constructor(props, subtree){
        const tagname = "fieldset";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class FIGCAPTION {
    constructor(props, subtree){
        const tagname = "figcaption";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class FIGURE {
    constructor(props, subtree){
        const tagname = "figure";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class FONT {
    constructor(props, subtree){
        const tagname = "font";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class FOOTER {
    constructor(props, subtree){
        const tagname = "footer";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class FORM {
    constructor(props, subtree){
        const tagname = "form";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class FRAME {
    constructor(props, subtree){
        const tagname = "frame";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class FRAMESET {
    constructor(props, subtree){
        const tagname = "frameset";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class H1 {
    constructor(props, subtree){
        const tagname = "h1";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class H2 {
    constructor(props, subtree){
        const tagname = "h2";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class H3 {
    constructor(props, subtree){
        const tagname = "h3";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class H4 {
    constructor(props, subtree){
        const tagname = "h4";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class H5 {
    constructor(props, subtree){
        const tagname = "h5";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class H6 {
    constructor(props, subtree){
        const tagname = "h6";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class HEAD {
    constructor(props, subtree){
        const tagname = "head";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class HEADER {
    constructor(props, subtree){
        const tagname = "header";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class HR {
    constructor(props, subtree){
        const tagname = "hr";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class HTML {
    constructor(props, subtree){
        const tagname = "html";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class I {
    constructor(props, subtree){
        const tagname = "i";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class IFRAME {
    constructor(props, subtree){
        const tagname = "iframe";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class IMG {
    constructor(props, subtree){
        const tagname = "img";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class INPUT {
    constructor(props, subtree){
        const tagname = "input";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class INS {
    constructor(props, subtree){
        const tagname = "ins";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class KBD {
    constructor(props, subtree){
        const tagname = "kbd";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class LABEL {
    constructor(props, subtree){
        const tagname = "label";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class LEGEND {
    constructor(props, subtree){
        const tagname = "legend";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class LI {
    constructor(props, subtree){
        const tagname = "li";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class LINK {
    constructor(props, subtree){
        const tagname = "link";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class MAIN {
    constructor(props, subtree){
        const tagname = "main";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class MAP {
    constructor(props, subtree){
        const tagname = "map";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class MARK {
    constructor(props, subtree){
        const tagname = "mark";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class META {
    constructor(props, subtree){
        const tagname = "meta";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class METER {
    constructor(props, subtree){
        const tagname = "meter";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class NAV {
    constructor(props, subtree){
        const tagname = "nav";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class NOFRAMES {
    constructor(props, subtree){
        const tagname = "noframes";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class NOSCRIPT {
    constructor(props, subtree){
        const tagname = "noscript";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class OBJECT {
    constructor(props, subtree){
        const tagname = "object";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class OL {
    constructor(props, subtree){
        const tagname = "ol";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class OPTGROUP {
    constructor(props, subtree){
        const tagname = "optgroup";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class OPTION {
    constructor(props, subtree){
        const tagname = "option";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class OUTPUT {
    constructor(props, subtree){
        const tagname = "output";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class P {
    constructor(props, subtree){
        const tagname = "p";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class PARAM {
    constructor(props, subtree){
        const tagname = "param";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class PICTURE {
    constructor(props, subtree){
        const tagname = "picture";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class PRE {
    constructor(props, subtree){
        const tagname = "pre";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class PROGRESS {
    constructor(props, subtree){
        const tagname = "progress";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class Q {
    constructor(props, subtree){
        const tagname = "q";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class RP {
    constructor(props, subtree){
        const tagname = "rp";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class RT {
    constructor(props, subtree){
        const tagname = "rt";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class RUBY {
    constructor(props, subtree){
        const tagname = "ruby";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class S {
    constructor(props, subtree){
        const tagname = "s";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class SAMP {
    constructor(props, subtree){
        const tagname = "samp";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class SCRIPT {
    constructor(props, subtree){
        const tagname = "script";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class SECTION {
    constructor(props, subtree){
        const tagname = "section";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class SELECT {
    constructor(props, subtree){
        const tagname = "select";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class SMALL {
    constructor(props, subtree){
        const tagname = "small";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class SOURCE {
    constructor(props, subtree){
        const tagname = "source";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class SPAN {
    constructor(props, subtree){
        const tagname = "span";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class STRIKE {
    constructor(props, subtree){
        const tagname = "strike";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class STRONG {
    constructor(props, subtree){
        const tagname = "strong";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class STYLE {
    constructor(cssRules){
        const node = document.createElement('style');
        let ruleArray = null;
        if (cssRules instanceof _cssMjsDefault.default.RuleList) ruleArray = cssRules;
        else ruleArray = _cssMjsDefault.default(cssRules);
        node.ruleArray = ruleArray;
        function render() {
            document.head.append(this);
            this.ruleArray.forEach((rule)=>{
                try {
                    this.sheet.insertRule(rule.toString());
                } catch (e) {}
            });
        }
        node.render = render.bind(node);
        return node;
    }
}
class SUB {
    constructor(props, subtree){
        const tagname = "sub";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class SUMMARY {
    constructor(props, subtree){
        const tagname = "summary";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class SUP {
    constructor(props, subtree){
        const tagname = "sup";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class SVG {
    constructor(props, subtree){
        const tagname = "svg";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TABLE {
    constructor(props, subtree){
        const tagname = "table";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TBODY {
    constructor(props, subtree){
        const tagname = "tbody";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TD {
    constructor(props, subtree){
        const tagname = "td";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TEMPLATE {
    constructor(props, subtree){
        const tagname = "template";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TEXTAREA {
    constructor(props, subtree){
        const tagname = "textarea";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TFOOT {
    constructor(props, subtree){
        const tagname = "tfoot";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TH {
    constructor(props, subtree){
        const tagname = "th";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class THEAD {
    constructor(props, subtree){
        const tagname = "thead";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TIME {
    constructor(props, subtree){
        const tagname = "time";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TITLE {
    constructor(props, subtree){
        const tagname = "title";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TR {
    constructor(props, subtree){
        const tagname = "tr";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TRACK {
    constructor(props, subtree){
        const tagname = "track";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class TT {
    constructor(props, subtree){
        const tagname = "tt";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class U {
    constructor(props, subtree){
        const tagname = "u";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class UL {
    constructor(props, subtree){
        const tagname = "ul";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class VAR {
    constructor(props, subtree){
        const tagname = "var";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class VIDEO {
    constructor(props, subtree){
        const tagname = "video";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}
class WBR {
    constructor(props, subtree){
        const tagname = "wbr";
        if (this.constructor.name === tagname.toUpperCase()) {
            const node = $create(tagname, props, subtree);
            return node;
        } else {
            const node = $createExt.call(this, tagname, props, subtree);
            return node;
        }
    }
}

},{"../utils/utils.mjs":"dPNBH","./css.mjs":"4KkEW","./html.mjs":"WIeNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ihQFB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Component", ()=>Component
);
var _utilsMjs = require("../utils/utils.mjs");
var _configMjs = require("./config.mjs");
var _configMjsDefault = parcelHelpers.interopDefault(_configMjs);
var _cssMjs = require("./css.mjs");
var _cssMjsDefault = parcelHelpers.interopDefault(_cssMjs);
var _htmlMjs = require("./html.mjs");
var _htmlMjsDefault = parcelHelpers.interopDefault(_htmlMjs);
class Component {
    constructor(props = {}){
        this.props = props;
        let name = _configMjsDefault.default.component.isTagConstructor ? _cssMjsDefault.default.toDashed(this.constructor.name) : _cssMjsDefault.default.toDashed(_configMjsDefault.default.component.tagName);
        name = name.startsWith("-") ? name.slice(1) : name;
        const node = _htmlMjsDefault.default.create(name, props);
        _utilsMjs.methods(this).filter((i)=>![
                'constructor',
                'render'
            ].includes(i)
        ).forEach((method)=>{
            node[method] = this[method].bind(node);
        });
        const subtree = this.render ? this.render.bind(node) : [];
        node.subtree = subtree;
        if (this.render) node.render = this.render.bind(node);
        if (this.css) {
            const styles = this.css.sheet ? this.css : _cssMjsDefault.default(this.css);
            styles.sheet.adopt(true);
        }
        const customMethods = {
            onconnected: this.onconnect ? this.onconnect : this.connectedCallback ? this.connectedCallback : ()=>{},
            ondisconnect: this.ondisconnect ? this.ondisconnect : this.disconnectedCallback ? this.disconnectedCallback : ()=>{},
            onAttributeChange: this.onAttributeChange ? this.onAttributeChange : this.attributeChangeCallback ? this.attributeChangeCallback : ()=>{},
            observedAttributes: this.observedAttributes ? this.observedAttributes : []
        };
        if (customElements.get(name) === undefined) try {
            customElements.define(name, class extends HTMLElement {
                constructor(){
                    super();
                }
                connectedCallback() {
                    customMethods.onconnected.call(this);
                }
                disconnectedCallback() {
                    customMethods.ondisconnect.call(this);
                }
                static get observedAttributes() {
                    return customMethods.observedAttributes;
                }
                onAttributeChange(attribute) {
                    customMethods.onAttributeChange.call(this, attribute);
                }
                get __isOxidizerComponent__() {
                    return true;
                }
            });
        } catch (e) {
            console.warn(e);
        }
        return node;
    }
    static [Symbol.hasInstance](instance) {
        return instance.__isOxidizerComponent__ === true;
    }
}
exports.default = Component; /*
function handleName () {
    const name = (config.component.isTagConstructor)
        ? css.toDashed(this.constructor.name)
        : css.toDashed(config.component.tagName);
    return (name.startsWith("-")) ? name.slice(1) : name;
}

function createNode () {
    const name = this.tagname;
    const props = this.props;
    const subtree = (this.render)
        ? this.render.call(this, props)
        : [];
    const node = html.create(name, props, subtree);
    if (this.render) node.render = this.render;

    return node;
}

function handleMethods () {
    const node = this.node;

    methods(this).filter(i => !(['constructor', 'render']).includes(i)).forEach(method => {
        node[method] = this[method].bind(node);
    });

    return node;
}

function handleCSS () {
    if (this.css) {
        const styles = (this.css.sheet)
            ? this.css
            : css(this.css);
        styles.sheet.adopt(true);
    }
}

function defineCustomElement (tagname) {
    const name = tagname;
    const defaults = {
        connect: (this.onConnected)
            ? this.onConnected
            : (this.connectedCallback)
                ? this.connectedCallback
                : (this.onconnect)
                    ? this.onconnect
                    : () => {},
        disconnect: (this.onDisconnected)
            ? this.onDisconnected
            : (this.disconnectedCallback)
                ? this.disconnectedCallback
                : (this.ondisconnect)
                    ? this.ondisconnect
                    : () => {},
        atttributeChange: (this.onAttrChange)
            ? this.onAttrChange
            : (this.onAttributeChange)
                ? this.onAttributeChange
                : (this.onAttributeChangeCallback)
                    ? this.onAttributeChangeCallback
                    : () => {},
        observedAttributes: (this.observedAttributes)
            ? this.observedAttributes
            : []
    };
    if (customElements.get(name) === undefined) {
        try {
            customElements.define(name, class extends HTMLElement {
                constructor () {
                    super()
                }

                connectedCallback () {
                    defaults.connect.call(this);
                }

                disconnectedCallback () {
                    defaults.disconnect.call(this)
                }

                static get observedAttributes () {
                    return defaults.observedAttributes;
                }

                onAttributeChange (attribute) {
                    defaults.atttributeChange.call(this, attribute)
                }

                get __isOxidizerComponent__ () {
                    return true;
                }
            })
        }
        catch (e) {
            console.warn(e)
        }
    }
}
*/ 

},{"../utils/utils.mjs":"dPNBH","./config.mjs":"8LnqG","./css.mjs":"4KkEW","./html.mjs":"WIeNu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPJ3m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Root", ()=>Root
);
var _utilsMjs = require("../utils/utils.mjs");
class Root {
    constructor(query){
        this.element = _utilsMjs.analyzer.type(query, HTMLElement) ? query : document.querySelector(query);
    }
    render(nodes) {
        this.clear();
        this.append(nodes);
    }
    clear() {
        this.element.innerHTML = '';
        return this;
    }
    append(nodes) {
        nodes = _utilsMjs.arrConverter(nodes);
        nodes.forEach((node)=>this.element.append(node)
        );
        return this;
    }
    prepend(nodes) {
        nodes = _utilsMjs.arrConverter(nodes);
        nodes.forEach((node)=>this.element.prepend(node)
        );
        return this;
    }
    before(nodes) {
        nodes = _utilsMjs.arrConverter(nodes);
        nodes.forEach((node)=>this.element.before(node)
        );
        return this;
    }
    after(nodes) {
        nodes = _utilsMjs.arrConverter(nodes);
        nodes.forEach((node)=>this.element.after(node)
        );
        return this;
    }
}
exports.default = Root;

},{"../utils/utils.mjs":"dPNBH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kpOhz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavBar", ()=>_navBarMjsDefault.default
);
parcelHelpers.export(exports, "PageRouter", ()=>_pageRouterMjsDefault.default
);
var _navBarMjs = require("./components/navBar.mjs");
var _navBarMjsDefault = parcelHelpers.interopDefault(_navBarMjs);
var _pageRouterMjs = require("./components/pageRouter.mjs");
var _pageRouterMjsDefault = parcelHelpers.interopDefault(_pageRouterMjs);
var _homePageMjs = require("./components/pages/homePage.mjs");
var _homePageMjsDefault = parcelHelpers.interopDefault(_homePageMjs);

},{"./components/navBar.mjs":"er6hn","./components/pageRouter.mjs":"5W0Bq","./components/pages/homePage.mjs":"5IHHI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"er6hn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oxidizer = require("oxidizer");
class NavBar extends _oxidizer.Component {
    get css() {
        return _oxidizer.css`
            nav-bar {
                position:fixed;
                background: rgb(0,0,0,.5);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                height:100px;
                width:100%;
                display:flex;
                flex-flow: row wrap;
                border-radius: 0px 0px 15px 15px;
                align-items: center;
            }
            nav-bar div {
                flex : 1 1 auto;
                display:flex;
                flex-flow: row nowrap;
                justify-content: center;
            }
            nav-bar div.brand {
                color:white;
                font-size: 1.3em;
                justify-content: left !important;
                flex : 0 1 auto;
                padding : 0px 50px 0px 10px;
            }
            nav-bar div.brand i {
                font-size: 3em;
                padding-right: 20px;
            }
            nav-bar .nav-button {
                background: transparent;
                padding: 10px;
                font-size: 1.2em;
                border-radius: 5px;
                border: 1px solid white;
                color:white;
                font-family: inherit;
                transition: 200ms;
            }
            nav-bar .nav-button:hover {
                /* background-color: rgba(255, 255, 255, 0.6);
                color:black; */
                transform: scale(1.1);
            }
            nav-bar .nav-button.active {
                background: white;
                color: black;
            }
        `;
    }
    switchPage(page) {
        this.querySelectorAll('.nav-button').forEach((node)=>{
            if (node.getAttribute('route-id') !== page) node.classList.remove('active');
            else node.classList.add('active');
        });
        const router = _oxidizer.$('page-router')[0];
        router.switch(page);
    }
    render(props) {
        const links = [
            "Home",
            "Resources",
            "About",
            "Quiz"
        ];
        const navbar = this;
        return [
            new _oxidizer.DIV({
                class: 'brand'
            }, [
                new _oxidizer.I({
                    class: 'bi bi-asterisk'
                }),
                "Valiants for",
                new _oxidizer.BR(),
                "Inclusive",
                new _oxidizer.BR(),
                "Sex Ed."
            ]),
            new _oxidizer.DIV({
                class: 'links'
            }, [
                ...links.map((link)=>new _oxidizer.DIV([
                        new _oxidizer.BUTTON({
                            class: `nav-button ${link === "Home" ? " active" : ""}`,
                            id: link.toLowerCase(),
                            textContent: link,
                            'route-id': link.toLowerCase(),
                            onclick () {
                                navbar.switchPage(this.getAttribute('route-id'));
                            }
                        }), 
                    ])
                )
            ])
        ];
    }
}
exports.default = NavBar;

},{"oxidizer":"4sMFI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5W0Bq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oxidizer = require("oxidizer");
var _homePageMjs = require("./pages/homePage.mjs");
var _homePageMjsDefault = parcelHelpers.interopDefault(_homePageMjs);
var _resourcesPageMjs = require("./pages/resourcesPage.mjs");
var _resourcesPageMjsDefault = parcelHelpers.interopDefault(_resourcesPageMjs);
var _quizPageMjs = require("./pages/quizPage.mjs");
var _quizPageMjsDefault = parcelHelpers.interopDefault(_quizPageMjs);
var _aboutPageMjs = require("./pages/aboutPage.mjs");
var _aboutPageMjsDefault = parcelHelpers.interopDefault(_aboutPageMjs);
var _dataMjs = require("../data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
class PageRouter extends _oxidizer.Component {
    get css() {
        return _oxidizer.css`
        
        `;
    }
    getRoute(route) {
        const routes = {
            "home": ()=>new _homePageMjsDefault.default()
            ,
            "resources": ()=>new _resourcesPageMjsDefault.default()
            ,
            "about": ()=>new _aboutPageMjsDefault.default()
            ,
            "quiz": ()=>new _quizPageMjsDefault.default({
                    questions: _dataMjsDefault.default.questions
                })
        };
        if (route in routes) return routes[route];
        else {
            console.warn('404: /' + route + ' not found');
            return routes.home;
        }
    }
    switch(route) {
        this.props.route = route;
    }
    render(props) {
        window.scrollTo({
            top: 0
        });
        const route = this.getRoute(props.route);
        return [
            route.call(this)
        ];
    }
}
exports.default = PageRouter;

},{"oxidizer":"4sMFI","./pages/homePage.mjs":"5IHHI","./pages/resourcesPage.mjs":"0g88K","./pages/quizPage.mjs":"f9ykw","./pages/aboutPage.mjs":"9WHJi","../data.mjs":"fxPPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5IHHI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oxidizer = require("oxidizer");
var _cardMjs = require("../card.mjs");
var _cardMjsDefault = parcelHelpers.interopDefault(_cardMjs);
class HomePage extends _oxidizer.Component {
    get css() {
        return _oxidizer.css`
            home-page {
                margin: 20px;
                margin-top:50px !important;
            }

            header {
                margin-top:  130px;
            }

            h1.title {
                text-align: center;
                font-size: 3em;
                margin:0;
                /* text-decoration: underline; */
            }

            hr {
                height: 1px;
                background: rgb(0,0,0,.3);
                border: 0px;
                margin: 20px auto;
                width:90%;
            }

            section.subtitle {
                /* padding-top: 15px; */
                font-size: 1.7em;
                text-align: center;
                width:75%;
                margin:auto;
            }

            section.statistics {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                margin: 50px 20px 20px 20px;
            }

            section.statistics .stat-card {
                /* flex : 1 0 auto; */
                text-align: center;
                font-size: 1.2em;
                max-width:230px;

            }

            section.statistics .stat-card h3 {
                font-size: 2em;
                margin:0px;
                
            }

            section.more-section {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            }
        `;
    }
    render(props) {
        const cards = [
            {
                title: 'Want to help?',
                text: `Get access to resources, activist organizations, and more.`,
                button: {
                    textContent: 'Learn More',
                    onclick () {
                        const navbar = _oxidizer.$('nav-bar')[0];
                        navbar.switchPage('resources');
                    }
                }
            },
            {
                title: 'Where do you stand?',
                text: `Take our quiz to find out where you stand on the issues.`,
                button: {
                    textContent: 'Go to Quiz',
                    onclick () {
                        const navbar = _oxidizer.$('nav-bar')[0];
                        navbar.switchPage('quiz');
                    }
                }
            }
        ];
        return [
            new _oxidizer.HEADER([
                new _oxidizer.H1({
                    class: 'title'
                }, "End New York's Sexual Education Injustices Now")
            ]),
            new _oxidizer.HR(),
            new _oxidizer.SECTION({
                class: 'subtitle'
            }, [
                new _oxidizer.I({
                    textContent: "Hundreds of thousands "
                }),
                `of New Yorkers
                are silently suffering as a result of the State's
                refusal to provide our youth with the
                inclusive and holistic sexual education
                that they need and deserve.`
            ]),
            new _oxidizer.SECTION({
                class: "statistics"
            }, [
                new _oxidizer.DIV({
                    class: "stat-card"
                }, [
                    new _oxidizer.H3([
                        "1/2"
                    ]),
                    "of all NY pregnancies are unplanned."
                ]),
                new _oxidizer.DIV({
                    class: "stat-card"
                }, [
                    new _oxidizer.H3([
                        "5.8%"
                    ]),
                    "of all teens",
                    new _oxidizer.BR(),
                    "will get pregnant."
                ]),
                new _oxidizer.DIV({
                    class: "stat-card"
                }, [
                    new _oxidizer.H3([
                        "69,500"
                    ]),
                    "young people will contract an STD this year."
                ]), 
            ]),
            new _oxidizer.SECTION({
                class: "card-container"
            }, [
                ...cards.map((card)=>new _cardMjsDefault.default(card)
                )
            ]),
            new _oxidizer.SECTION({
                class: "card-container"
            }, [
                new _cardMjsDefault.default({
                    title: 'Get involved!',
                    text: `Help our cause and sign the petition to pass N.Y. State Senate Bill S2584A.`,
                    button: {
                        textContent: 'Sign Petition',
                        onclick () {
                            window.location = "https://www.change.org/p/state-senator-samra-g-brouk-pass-n-y-state-senate-bill-s2584a-to-require-comprehensive-sex-education-in-our-schools-b84e88cf-6e99-4b93-af2f-d1b65e3783a4";
                        }
                    }
                })
            ]), 
        ];
    }
}
exports.default = HomePage;

},{"oxidizer":"4sMFI","../card.mjs":"4gIPS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gIPS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oxidizer = require("oxidizer");
class Card extends _oxidizer.DIV {
    constructor(props){
        props = {
            class: 'card',
            ...props
        };
        super(props);
    }
    get css() {
        return _oxidizer.css`

            .card-container {
                display:flex;
                flex-flow: row nowrap;
                align-items:center;
                justify-content:space-evenly;
                margin:50px 15px;

            }

            .card {
                margin:15px;
                background: rgb(0,0,0,.5);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                padding: 5px;
                border-radius: 15px;
                color:white;
                flex: 1 1 0;
            }

            .card-header {
                display:flex;
                flex-flow:column nowrap;
                align-items:center;
                margin:5px;
            }

            .card-section {
                text-align:center;
                margin:5px;
                font-size:1.2em;
            }

            .card-footer {
                display:flex;
                justify-content:center;
                margin:15px;
            }

            .card-button {
                font-size:1.2em;
            }

            .card-container hr {
                background-color:lightgray;
                margin:10px;
            }
        `;
    }
    render(props) {
        return [
            new _oxidizer.DIV({
                class: "card-header"
            }, [
                new _oxidizer.H2({
                    class: 'card-title'
                }, [
                    props.title
                ])
            ]),
            new _oxidizer.HR(),
            new _oxidizer.DIV({
                class: 'card-section'
            }, [
                new _oxidizer.H4({
                    class: 'card-section-text'
                }, [
                    props.text
                ])
            ]),
            new _oxidizer.DIV({
                class: 'card-footer'
            }, [
                new _oxidizer.BUTTON({
                    class: 'card-button btn active',
                    ...props.button
                })
            ])
        ];
    }
}
exports.default = Card;

},{"oxidizer":"4sMFI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0g88K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Resource", ()=>Resource
);
parcelHelpers.export(exports, "ResourceGroup", ()=>ResourceGroup
);
var _oxidizer = require("oxidizer");
var _dataMjs = require("../../data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
class Resource extends _oxidizer.DIV {
    constructor(props){
        props.class = "resource-group";
        super(props);
    }
    get css() {
        return _oxidizer.css`
            
        `;
    }
    render(props) {
        const { name , description , link  } = props;
        return [
            new _oxidizer.H3({
                class: 'resource-name'
            }, [
                new _oxidizer.A({
                    href: link
                }, [
                    name
                ])
            ]),
            new _oxidizer.P({
                class: 'resource-description'
            }, [
                description
            ])
        ];
    }
}
class ResourceGroup extends _oxidizer.Component {
    get css() {
        return _oxidizer.css`
            
        `;
    }
    render(props) {
        const { title , resources  } = props;
        console.log(props);
        return [
            new _oxidizer.H3({
                class: 'resource-title'
            }, [
                title
            ]),
            ...resources.map((res)=>new Resource(res)
            )
        ];
    }
}
class ResourcesPage extends _oxidizer.Component {
    get css() {
        return _oxidizer.css`
            resources-page {
                display:flex;
                padding:30px;
                padding-top:140px;
                
                height:100%;
                width:100%;
                flex-flow: column nowrap;
                align-items: center;
            }
            .resources-header {
                font-size:2.5em;
            }
            .resource-name {
                font-size: 1.2em;
                margin-left: 10px !important;
            }
            .resource-description {
                font-size: 1.2em;
                margin: 10px 20px;
                margin-bottom: 30px;
                width:90%;
            }
            .resource-group {
                display:flex;
                flex-flow: column nowrap;
                height:100%;
                width:100%;
                flex: 0 0 0;
            }
            .resource-title {
                font-size:1.5em;
                margin-bottom: 10px;
                text-decoration: underline;
            }
        `;
    }
    render(props) {
        const resources = Object.entries(_dataMjsDefault.default.resources);
        console.log(resources);
        return _oxidizer.html`
            <h1 class="resources-header">Resources</h1>
            <div class="resource-group"> 
                <h3 class="resource-title"> Advocacy Groups </h3>

                <h3 class="resource-name"> 
                    <a href="https://www.equalityny.org/policy/comprehensive-sex-ed/"> Equity New York </a>
                </h3>
                <p class="resource-description">
                    Equity New York is a statewide advocacy and non-profit organization working to advance equality and justice for LGBTQI New Yorkers and their families. Equity New York is also dedicated to supporting candidates or public office in New York State who are committed to the civil rights and needs of the LGBTQI community. Equity NY promotes comprehensive sex education in schools
                </p>

                <h3 class="resource-name"> 
                    <a href="https://www.ahrcnyc.org/news/sex-ed-is-not-just-about-sex/"> AHRC New York </a>
                </h3>
                <p class="resource-description">
                    AHRC NY is an organization that has helped over 15,000 individuals with intellectual and developmental disabilities. They provide free aids and services to communicate effectively, and provide free language services to people whose primary language is not English. AHRC NY advocates for sex education in general, but also specifically with students with disabilities. 
                </p>

                <h3 class="resource-name"> 
                    <a href="http://sexedallianceofnyc.blogspot.com/"> SEANYC </a>
                </h3>
                <p class="resource-description">
                    The Sex Education Alliance of New York City (SEANYC) is a coalition comprised of students, parents, teachers, advocates, and community-based organizations that are working to improve comprehensive sexuality and health education in the New York City public schools.
                </p>

                <h3 class="resource-name"> 
                    <a href="https://www.plannedparenthood.org/planned-parenthood-greater-new-york/learn/sex-education"> Planned Parenthood </a>
                </h3>
                <p class="resource-description">
                    Planned Parenthood is the nations largest provider of sex education. They’re dedicated to providing non-judgemental, up-to-date, medically accurate information on sexual and reproductive health for adults, teens, and parents.
                </p>

                <h3 class="resource-title"> Bills </h3>

                <h3 class="resource-name"> 
                    <a href="https://www.equalityny.org/policy/comprehensive-sex-ed/"> S2584A </a>
                </h3>
                <p class="resource-description">
                    Requires comprehensive sexuality instruction for students in grades K-12 which includes a model curricula for comprehensive sexuality education and at a minimum conforms to the content and scope of national sexuality education standards.
                </p>
            </div>
        `;
    // return [
    //     new H1({class: 'resources-header'}, [
    //         "Resources"
    //     ]),
    //     ...resources.map(res => (
    //         new ResourceGroup({title:res[0], resources:res[1]})
    //     ))
    // ]
    }
}
exports.default = ResourcesPage;

},{"oxidizer":"4sMFI","../../data.mjs":"fxPPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxPPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const data = {
    "home": {
        "title": "End New York's Sexual Education Injustices Now",
        "subtitle": "Hundreds of thousands of New Yorkers are silently suffering as a result of the State's refusal to provide our youth with the inclusive and holistic sexual education that they need and deserve.",
        "statistics": [
            {
                "stat": "1/2",
                "rest": "of all NY pregnancies are unplanned."
            },
            {
                "stat": "5.8%",
                "rest": "of teens will get pregnant."
            },
            {
                "stat": "69,500",
                "rest": "young people will contract an STD this year."
            }
        ]
    },
    "questions": [
        {
            "type": "multi-choice",
            "question": "Which level(s) of schooling should provide sexual education? (check all that apply)",
            "answers": [
                "Elementary school",
                "Middle school",
                "High school",
                "College"
            ],
            "correct": [
                0,
                1,
                2,
                3
            ],
            "explanation": "Kids of all ages should be learning about sex education. It is important for people at any age to have  knowledge on healthy relationships, being able to make informed decisions on sex, and become more empathetic and caring individuals."
        },
        {
            "type": "single-choice",
            "question": "How do you think your kids should learn about sex education?",
            "answers": [
                "Through their friends/family",
                "Through church/religious institutions",
                "Through certified educators in school",
                "Through film/media"
            ],
            "correct": [
                2
            ],
            "explanation": "The correct answer is through certified educators. Most kids get their information on topics in sexual education from their uneducated peers and videos online."
        },
        {
            "type": "multi-choice",
            "question": "What topic(s) you think New York schools currently teach in terms of sex education today? (check all that apply)",
            "answers": [
                "Disability representation",
                "Consent",
                "Sexual assault",
                "STD’s and STI’s",
                "Abstinence",
                "Teen pregnancy",
                "Healthy relationships",
                "LGBTQ+ representation"
            ],
            "correct": [
                3,
                4,
                5
            ],
            "explanation": "Most schools only require topics in Std’s and sti’s, abstinence, teen pregnancy."
        },
        {
            "type": "multi-choice",
            "question": "Which topic(s) do you think New York schools SHOULD include in terms of sex education? (check all that apply)",
            "answers": [
                "Disability representation",
                "Consent",
                "Sexual assault",
                "STD’s and STI’s",
                "Abstinence",
                "Teen pregnancy",
                "Healthy relationships",
                "LGBTQ+ representation"
            ],
            "correct": [
                0,
                1,
                2,
                3,
                5,
                6,
                7
            ],
            "explanation": "All the other options are things children should be learning about in their sex ed classes. Many children learn that abstinence is the only way to prevent unwanted pregnancies and STI’s and STDs"
        },
        {
            "type": "single-choice",
            "question": "Should children learn how to form healthy and meaningful relationships with others?",
            "answers": [
                "Yes",
                "No"
            ],
            "correct": [
                0
            ],
            "explanation": "Yes, romantic or platonic, children should be learning how to form healthy relationships with others. It is a skill that they will use for the rest of their lives."
        },
        {
            "type": "multi-choice",
            "question": "Which of these are good forms of STI Preventatives? (check all that apply)",
            "answers": [
                "External condom (traditional condom)",
                "Internal Condom (female condom)",
                "Abstinence",
                "Birth control",
                "Dental Dams",
                "Plan B"
            ],
            "correct": [
                0,
                1,
                3,
                4,
                5
            ],
            "explanation": "Everything except 'C' is correct. Studies show that abstinence only education does NOT prevent STI's"
        }
    ],
    "resources": {
        "Advocacy Groups": [
            {
                "name": "Equity New York",
                "description": "Equity New York is a statewide advocacy and non-profit organization working to advance equality and justice for LGBTQI New Yorkers and their families. Equity New York is also dedicated to supporting candidates or public office in New York State who are committed to the civil rights and needs of the LGBTQI community. Equity NY promotes comprehensive sex education in schools",
                "link": "https://www.equalityny.org/policy/comprehensive-sex-ed/"
            },
            {
                "name": "AHRC New York",
                "description": "AHRC NY is an organization that has helped over 15,000 individuals with intellectual and developmental disabilities. They provide free aids and services to communicate effectively, and provide free language services to people whose primary language is not English. AHRC NY advocates for sex education in general, but also specifically with students with disabilities.",
                "link": "https://www.ahrcnyc.org/news/sex-ed-is-not-just-about-sex/"
            },
            {
                "name": "Sex Education Alliance of New York City",
                "description": "The Sex Education Alliance of New York City (SEANYC) is a coalition comprised of students, parents, teachers, advocates, and community-based organizations that are working to improve comprehensive sexuality and health education in the New York City public schools.",
                "link": "http://sexedallianceofnyc.blogspot.com/"
            },
            {
                "name": "https://www.plannedparenthood.org/planned-parenthood-greater-new-york/learn/sex-education",
                "description": "Planned Parenthood is the nations largest provider of sex education. They’re dedicated to providing non-judgemental, up-to-date, medically accurate information on sexual and reproductive health for adults, teens, and parents.",
                "link": "https://www.plannedparenthood.org/planned-parenthood-greater-new-york/learn/sex-education"
            }
        ],
        "Bills": [
            {
                "name": "S2584A",
                "description": "Requires comprehensive sexuality instruction for students in grades K-12 which includes a model curricula for comprehensive sexuality education and at a minimum conforms to the content and scope of national sexuality education standards.",
                "link": "https://www.nysenate.gov/legislation/bills/2021/S2584"
            }
        ]
    },
    "bootstrap": {
        "icons": {
            "123": "123",
            "activity": "activity",
            "alarm": "alarm",
            "alarmFill": "alarm-fill",
            "alignBottom": "align-bottom",
            "alignCenter": "align-center",
            "alignEnd": "align-end",
            "alignMiddle": "align-middle",
            "alignStart": "align-start",
            "alignTop": "align-top",
            "alt": "alt",
            "app": "app",
            "appIndicator": "app-indicator",
            "apple": "apple",
            "archive": "archive",
            "archiveFill": "archive-fill",
            "arrow90degDown": "arrow-90deg-down",
            "arrow90degLeft": "arrow-90deg-left",
            "arrow90degRight": "arrow-90deg-right",
            "arrow90degUp": "arrow-90deg-up",
            "arrowBarDown": "arrow-bar-down",
            "arrowBarLeft": "arrow-bar-left",
            "arrowBarRight": "arrow-bar-right",
            "arrowBarUp": "arrow-bar-up",
            "arrowClockwise": "arrow-clockwise",
            "arrowCounterclockwise": "arrow-counterclockwise",
            "arrowDown": "arrow-down",
            "arrowDownCircle": "arrow-down-circle",
            "arrowDownCircleFill": "arrow-down-circle-fill",
            "arrowDownLeftCircle": "arrow-down-left-circle",
            "arrowDownLeftCircleFill": "arrow-down-left-circle-fill",
            "arrowDownLeftSquare": "arrow-down-left-square",
            "arrowDownLeftSquareFill": "arrow-down-left-square-fill",
            "arrowDownRightCircle": "arrow-down-right-circle",
            "arrowDownRightCircleFill": "arrow-down-right-circle-fill",
            "arrowDownRightSquare": "arrow-down-right-square",
            "arrowDownRightSquareFill": "arrow-down-right-square-fill",
            "arrowDownSquare": "arrow-down-square",
            "arrowDownSquareFill": "arrow-down-square-fill",
            "arrowDownLeft": "arrow-down-left",
            "arrowDownRight": "arrow-down-right",
            "arrowDownShort": "arrow-down-short",
            "arrowDownUp": "arrow-down-up",
            "arrowLeft": "arrow-left",
            "arrowLeftCircle": "arrow-left-circle",
            "arrowLeftCircleFill": "arrow-left-circle-fill",
            "arrowLeftSquare": "arrow-left-square",
            "arrowLeftSquareFill": "arrow-left-square-fill",
            "arrowLeftRight": "arrow-left-right",
            "arrowLeftShort": "arrow-left-short",
            "arrowRepeat": "arrow-repeat",
            "arrowReturnLeft": "arrow-return-left",
            "arrowReturnRight": "arrow-return-right",
            "arrowRight": "arrow-right",
            "arrowRightCircle": "arrow-right-circle",
            "arrowRightCircleFill": "arrow-right-circle-fill",
            "arrowRightSquare": "arrow-right-square",
            "arrowRightSquareFill": "arrow-right-square-fill",
            "arrowRightShort": "arrow-right-short",
            "arrowThroughHeart": "arrow-through-heart",
            "arrowThroughHeartFill": "arrow-through-heart-fill",
            "arrowUp": "arrow-up",
            "arrowUpCircle": "arrow-up-circle",
            "arrowUpCircleFill": "arrow-up-circle-fill",
            "arrowUpLeftCircle": "arrow-up-left-circle",
            "arrowUpLeftCircleFill": "arrow-up-left-circle-fill",
            "arrowUpLeftSquare": "arrow-up-left-square",
            "arrowUpLeftSquareFill": "arrow-up-left-square-fill",
            "arrowUpRightCircle": "arrow-up-right-circle",
            "arrowUpRightCircleFill": "arrow-up-right-circle-fill",
            "arrowUpRightSquare": "arrow-up-right-square",
            "arrowUpRightSquareFill": "arrow-up-right-square-fill",
            "arrowUpSquare": "arrow-up-square",
            "arrowUpSquareFill": "arrow-up-square-fill",
            "arrowUpLeft": "arrow-up-left",
            "arrowUpRight": "arrow-up-right",
            "arrowUpShort": "arrow-up-short",
            "arrowsAngleContract": "arrows-angle-contract",
            "arrowsAngleExpand": "arrows-angle-expand",
            "arrowsCollapse": "arrows-collapse",
            "arrowsExpand": "arrows-expand",
            "arrowsFullscreen": "arrows-fullscreen",
            "arrowsMove": "arrows-move",
            "aspectRatio": "aspect-ratio",
            "aspectRatioFill": "aspect-ratio-fill",
            "asterisk": "asterisk",
            "at": "at",
            "award": "award",
            "awardFill": "award-fill",
            "back": "back",
            "backspace": "backspace",
            "backspaceFill": "backspace-fill",
            "backspaceReverse": "backspace-reverse",
            "backspaceReverseFill": "backspace-reverse-fill",
            "badge3d": "badge-3d",
            "badge3dFill": "badge-3d-fill",
            "badge4k": "badge-4k",
            "badge4kFill": "badge-4k-fill",
            "badge8k": "badge-8k",
            "badge8kFill": "badge-8k-fill",
            "badgeAd": "badge-ad",
            "badgeAdFill": "badge-ad-fill",
            "badgeAr": "badge-ar",
            "badgeArFill": "badge-ar-fill",
            "badgeCc": "badge-cc",
            "badgeCcFill": "badge-cc-fill",
            "badgeHd": "badge-hd",
            "badgeHdFill": "badge-hd-fill",
            "badgeSd": "badge-sd",
            "badgeSdFill": "badge-sd-fill",
            "badgeTm": "badge-tm",
            "badgeTmFill": "badge-tm-fill",
            "badgeVo": "badge-vo",
            "badgeVoFill": "badge-vo-fill",
            "badgeVr": "badge-vr",
            "badgeVrFill": "badge-vr-fill",
            "badgeWc": "badge-wc",
            "badgeWcFill": "badge-wc-fill",
            "bag": "bag",
            "bagCheck": "bag-check",
            "bagCheckFill": "bag-check-fill",
            "bagDash": "bag-dash",
            "bagDashFill": "bag-dash-fill",
            "bagFill": "bag-fill",
            "bagHeart": "bag-heart",
            "bagHeartFill": "bag-heart-fill",
            "bagPlus": "bag-plus",
            "bagPlusFill": "bag-plus-fill",
            "bagX": "bag-x",
            "bagXFill": "bag-x-fill",
            "balloon": "balloon",
            "balloonFill": "balloon-fill",
            "balloonHeart": "balloon-heart",
            "balloonHeartFill": "balloon-heart-fill",
            "bandaid": "bandaid",
            "bandaidFill": "bandaid-fill",
            "bank": "bank",
            "bank2": "bank2",
            "barChart": "bar-chart",
            "barChartFill": "bar-chart-fill",
            "barChartLine": "bar-chart-line",
            "barChartLineFill": "bar-chart-line-fill",
            "barChartSteps": "bar-chart-steps",
            "basket": "basket",
            "basketFill": "basket-fill",
            "basket2": "basket2",
            "basket2Fill": "basket2-fill",
            "basket3": "basket3",
            "basket3Fill": "basket3-fill",
            "battery": "battery",
            "batteryCharging": "battery-charging",
            "batteryFull": "battery-full",
            "batteryHalf": "battery-half",
            "behance": "behance",
            "bell": "bell",
            "bellFill": "bell-fill",
            "bellSlash": "bell-slash",
            "bellSlashFill": "bell-slash-fill",
            "bezier": "bezier",
            "bezier2": "bezier2",
            "bicycle": "bicycle",
            "binoculars": "binoculars",
            "binocularsFill": "binoculars-fill",
            "blockquoteLeft": "blockquote-left",
            "blockquoteRight": "blockquote-right",
            "bluetooth": "bluetooth",
            "bodyText": "body-text",
            "book": "book",
            "bookFill": "book-fill",
            "bookHalf": "book-half",
            "bookmark": "bookmark",
            "bookmarkCheck": "bookmark-check",
            "bookmarkCheckFill": "bookmark-check-fill",
            "bookmarkDash": "bookmark-dash",
            "bookmarkDashFill": "bookmark-dash-fill",
            "bookmarkFill": "bookmark-fill",
            "bookmarkHeart": "bookmark-heart",
            "bookmarkHeartFill": "bookmark-heart-fill",
            "bookmarkPlus": "bookmark-plus",
            "bookmarkPlusFill": "bookmark-plus-fill",
            "bookmarkStar": "bookmark-star",
            "bookmarkStarFill": "bookmark-star-fill",
            "bookmarkX": "bookmark-x",
            "bookmarkXFill": "bookmark-x-fill",
            "bookmarks": "bookmarks",
            "bookmarksFill": "bookmarks-fill",
            "bookshelf": "bookshelf",
            "boombox": "boombox",
            "boomboxFill": "boombox-fill",
            "bootstrap": "bootstrap",
            "bootstrapFill": "bootstrap-fill",
            "bootstrapReboot": "bootstrap-reboot",
            "border": "border",
            "borderAll": "border-all",
            "borderBottom": "border-bottom",
            "borderCenter": "border-center",
            "borderInner": "border-inner",
            "borderLeft": "border-left",
            "borderMiddle": "border-middle",
            "borderOuter": "border-outer",
            "borderRight": "border-right",
            "borderStyle": "border-style",
            "borderTop": "border-top",
            "borderWidth": "border-width",
            "boundingBox": "bounding-box",
            "boundingBoxCircles": "bounding-box-circles",
            "box": "box",
            "boxArrowDownLeft": "box-arrow-down-left",
            "boxArrowDownRight": "box-arrow-down-right",
            "boxArrowDown": "box-arrow-down",
            "boxArrowInDown": "box-arrow-in-down",
            "boxArrowInDownLeft": "box-arrow-in-down-left",
            "boxArrowInDownRight": "box-arrow-in-down-right",
            "boxArrowInLeft": "box-arrow-in-left",
            "boxArrowInRight": "box-arrow-in-right",
            "boxArrowInUp": "box-arrow-in-up",
            "boxArrowInUpLeft": "box-arrow-in-up-left",
            "boxArrowInUpRight": "box-arrow-in-up-right",
            "boxArrowLeft": "box-arrow-left",
            "boxArrowRight": "box-arrow-right",
            "boxArrowUp": "box-arrow-up",
            "boxArrowUpLeft": "box-arrow-up-left",
            "boxArrowUpRight": "box-arrow-up-right",
            "boxSeam": "box-seam",
            "box2": "box2",
            "box2Fill": "box2-fill",
            "box2Heart": "box2-heart",
            "box2HeartFill": "box2-heart-fill",
            "boxes": "boxes",
            "braces": "braces",
            "bracesAsterisk": "braces-asterisk",
            "bricks": "bricks",
            "briefcase": "briefcase",
            "briefcaseFill": "briefcase-fill",
            "brightnessAltHigh": "brightness-alt-high",
            "brightnessAltHighFill": "brightness-alt-high-fill",
            "brightnessAltLow": "brightness-alt-low",
            "brightnessAltLowFill": "brightness-alt-low-fill",
            "brightnessHigh": "brightness-high",
            "brightnessHighFill": "brightness-high-fill",
            "brightnessLow": "brightness-low",
            "brightnessLowFill": "brightness-low-fill",
            "broadcast": "broadcast",
            "broadcastPin": "broadcast-pin",
            "brush": "brush",
            "brushFill": "brush-fill",
            "bucket": "bucket",
            "bucketFill": "bucket-fill",
            "bug": "bug",
            "bugFill": "bug-fill",
            "building": "building",
            "bullseye": "bullseye",
            "calculator": "calculator",
            "calculatorFill": "calculator-fill",
            "calendar": "calendar",
            "calendarCheck": "calendar-check",
            "calendarCheckFill": "calendar-check-fill",
            "calendarDate": "calendar-date",
            "calendarDateFill": "calendar-date-fill",
            "calendarDay": "calendar-day",
            "calendarDayFill": "calendar-day-fill",
            "calendarEvent": "calendar-event",
            "calendarEventFill": "calendar-event-fill",
            "calendarFill": "calendar-fill",
            "calendarHeart": "calendar-heart",
            "calendarHeartFill": "calendar-heart-fill",
            "calendarMinus": "calendar-minus",
            "calendarMinusFill": "calendar-minus-fill",
            "calendarMonth": "calendar-month",
            "calendarMonthFill": "calendar-month-fill",
            "calendarPlus": "calendar-plus",
            "calendarPlusFill": "calendar-plus-fill",
            "calendarRange": "calendar-range",
            "calendarRangeFill": "calendar-range-fill",
            "calendarWeek": "calendar-week",
            "calendarWeekFill": "calendar-week-fill",
            "calendarX": "calendar-x",
            "calendarXFill": "calendar-x-fill",
            "calendar2": "calendar2",
            "calendar2Check": "calendar2-check",
            "calendar2CheckFill": "calendar2-check-fill",
            "calendar2Date": "calendar2-date",
            "calendar2DateFill": "calendar2-date-fill",
            "calendar2Day": "calendar2-day",
            "calendar2DayFill": "calendar2-day-fill",
            "calendar2Event": "calendar2-event",
            "calendar2EventFill": "calendar2-event-fill",
            "calendar2Fill": "calendar2-fill",
            "calendar2Heart": "calendar2-heart",
            "calendar2HeartFill": "calendar2-heart-fill",
            "calendar2Minus": "calendar2-minus",
            "calendar2MinusFill": "calendar2-minus-fill",
            "calendar2Month": "calendar2-month",
            "calendar2MonthFill": "calendar2-month-fill",
            "calendar2Plus": "calendar2-plus",
            "calendar2PlusFill": "calendar2-plus-fill",
            "calendar2Range": "calendar2-range",
            "calendar2RangeFill": "calendar2-range-fill",
            "calendar2Week": "calendar2-week",
            "calendar2WeekFill": "calendar2-week-fill",
            "calendar2X": "calendar2-x",
            "calendar2XFill": "calendar2-x-fill",
            "calendar3": "calendar3",
            "calendar3Event": "calendar3-event",
            "calendar3EventFill": "calendar3-event-fill",
            "calendar3Fill": "calendar3-fill",
            "calendar3Range": "calendar3-range",
            "calendar3RangeFill": "calendar3-range-fill",
            "calendar3Week": "calendar3-week",
            "calendar3WeekFill": "calendar3-week-fill",
            "calendar4": "calendar4",
            "calendar4Event": "calendar4-event",
            "calendar4Range": "calendar4-range",
            "calendar4Week": "calendar4-week",
            "camera": "camera",
            "camera2": "camera2",
            "cameraFill": "camera-fill",
            "cameraReels": "camera-reels",
            "cameraReelsFill": "camera-reels-fill",
            "cameraVideo": "camera-video",
            "cameraVideoFill": "camera-video-fill",
            "cameraVideoOff": "camera-video-off",
            "cameraVideoOffFill": "camera-video-off-fill",
            "capslock": "capslock",
            "capslockFill": "capslock-fill",
            "cardChecklist": "card-checklist",
            "cardHeading": "card-heading",
            "cardImage": "card-image",
            "cardList": "card-list",
            "cardText": "card-text",
            "caretDown": "caret-down",
            "caretDownFill": "caret-down-fill",
            "caretDownSquare": "caret-down-square",
            "caretDownSquareFill": "caret-down-square-fill",
            "caretLeft": "caret-left",
            "caretLeftFill": "caret-left-fill",
            "caretLeftSquare": "caret-left-square",
            "caretLeftSquareFill": "caret-left-square-fill",
            "caretRight": "caret-right",
            "caretRightFill": "caret-right-fill",
            "caretRightSquare": "caret-right-square",
            "caretRightSquareFill": "caret-right-square-fill",
            "caretUp": "caret-up",
            "caretUpFill": "caret-up-fill",
            "caretUpSquare": "caret-up-square",
            "caretUpSquareFill": "caret-up-square-fill",
            "cart": "cart",
            "cartCheck": "cart-check",
            "cartCheckFill": "cart-check-fill",
            "cartDash": "cart-dash",
            "cartDashFill": "cart-dash-fill",
            "cartFill": "cart-fill",
            "cartPlus": "cart-plus",
            "cartPlusFill": "cart-plus-fill",
            "cartX": "cart-x",
            "cartXFill": "cart-x-fill",
            "cart2": "cart2",
            "cart3": "cart3",
            "cart4": "cart4",
            "cash": "cash",
            "cashCoin": "cash-coin",
            "cashStack": "cash-stack",
            "cast": "cast",
            "chat": "chat",
            "chatDots": "chat-dots",
            "chatDotsFill": "chat-dots-fill",
            "chatFill": "chat-fill",
            "chatHeart": "chat-heart",
            "chatHeartFill": "chat-heart-fill",
            "chatLeft": "chat-left",
            "chatLeftDots": "chat-left-dots",
            "chatLeftDotsFill": "chat-left-dots-fill",
            "chatLeftFill": "chat-left-fill",
            "chatLeftHeart": "chat-left-heart",
            "chatLeftHeartFill": "chat-left-heart-fill",
            "chatLeftQuote": "chat-left-quote",
            "chatLeftQuoteFill": "chat-left-quote-fill",
            "chatLeftText": "chat-left-text",
            "chatLeftTextFill": "chat-left-text-fill",
            "chatQuote": "chat-quote",
            "chatQuoteFill": "chat-quote-fill",
            "chatRight": "chat-right",
            "chatRightDots": "chat-right-dots",
            "chatRightDotsFill": "chat-right-dots-fill",
            "chatRightFill": "chat-right-fill",
            "chatRightHeart": "chat-right-heart",
            "chatRightHeartFill": "chat-right-heart-fill",
            "chatRightQuote": "chat-right-quote",
            "chatRightQuoteFill": "chat-right-quote-fill",
            "chatRightText": "chat-right-text",
            "chatRightTextFill": "chat-right-text-fill",
            "chatSquare": "chat-square",
            "chatSquareDots": "chat-square-dots",
            "chatSquareDotsFill": "chat-square-dots-fill",
            "chatSquareFill": "chat-square-fill",
            "chatSquareHeart": "chat-square-heart",
            "chatSquareHeartFill": "chat-square-heart-fill",
            "chatSquareQuote": "chat-square-quote",
            "chatSquareQuoteFill": "chat-square-quote-fill",
            "chatSquareText": "chat-square-text",
            "chatSquareTextFill": "chat-square-text-fill",
            "chatText": "chat-text",
            "chatTextFill": "chat-text-fill",
            "check": "check",
            "checkAll": "check-all",
            "checkCircle": "check-circle",
            "checkCircleFill": "check-circle-fill",
            "checkLg": "check-lg",
            "checkSquare": "check-square",
            "checkSquareFill": "check-square-fill",
            "check2": "check2",
            "check2All": "check2-all",
            "check2Circle": "check2-circle",
            "check2Square": "check2-square",
            "chevronBarContract": "chevron-bar-contract",
            "chevronBarDown": "chevron-bar-down",
            "chevronBarExpand": "chevron-bar-expand",
            "chevronBarLeft": "chevron-bar-left",
            "chevronBarRight": "chevron-bar-right",
            "chevronBarUp": "chevron-bar-up",
            "chevronCompactDown": "chevron-compact-down",
            "chevronCompactLeft": "chevron-compact-left",
            "chevronCompactRight": "chevron-compact-right",
            "chevronCompactUp": "chevron-compact-up",
            "chevronContract": "chevron-contract",
            "chevronDoubleDown": "chevron-double-down",
            "chevronDoubleLeft": "chevron-double-left",
            "chevronDoubleRight": "chevron-double-right",
            "chevronDoubleUp": "chevron-double-up",
            "chevronDown": "chevron-down",
            "chevronExpand": "chevron-expand",
            "chevronLeft": "chevron-left",
            "chevronRight": "chevron-right",
            "chevronUp": "chevron-up",
            "circle": "circle",
            "circleFill": "circle-fill",
            "circleHalf": "circle-half",
            "slashCircle": "slash-circle",
            "circleSquare": "circle-square",
            "clipboard": "clipboard",
            "clipboardCheck": "clipboard-check",
            "clipboardCheckFill": "clipboard-check-fill",
            "clipboardData": "clipboard-data",
            "clipboardDataFill": "clipboard-data-fill",
            "clipboardFill": "clipboard-fill",
            "clipboardHeart": "clipboard-heart",
            "clipboardHeartFill": "clipboard-heart-fill",
            "clipboardMinus": "clipboard-minus",
            "clipboardMinusFill": "clipboard-minus-fill",
            "clipboardPlus": "clipboard-plus",
            "clipboardPlusFill": "clipboard-plus-fill",
            "clipboardPulse": "clipboard-pulse",
            "clipboardX": "clipboard-x",
            "clipboardXFill": "clipboard-x-fill",
            "clipboard2": "clipboard2",
            "clipboard2Check": "clipboard2-check",
            "clipboard2CheckFill": "clipboard2-check-fill",
            "clipboard2Data": "clipboard2-data",
            "clipboard2DataFill": "clipboard2-data-fill",
            "clipboard2Fill": "clipboard2-fill",
            "clipboard2Heart": "clipboard2-heart",
            "clipboard2HeartFill": "clipboard2-heart-fill",
            "clipboard2Minus": "clipboard2-minus",
            "clipboard2MinusFill": "clipboard2-minus-fill",
            "clipboard2Plus": "clipboard2-plus",
            "clipboard2PlusFill": "clipboard2-plus-fill",
            "clipboard2Pulse": "clipboard2-pulse",
            "clipboard2PulseFill": "clipboard2-pulse-fill",
            "clipboard2X": "clipboard2-x",
            "clipboard2XFill": "clipboard2-x-fill",
            "clock": "clock",
            "clockFill": "clock-fill",
            "clockHistory": "clock-history",
            "cloud": "cloud",
            "cloudArrowDown": "cloud-arrow-down",
            "cloudArrowDownFill": "cloud-arrow-down-fill",
            "cloudArrowUp": "cloud-arrow-up",
            "cloudArrowUpFill": "cloud-arrow-up-fill",
            "cloudCheck": "cloud-check",
            "cloudCheckFill": "cloud-check-fill",
            "cloudDownload": "cloud-download",
            "cloudDownloadFill": "cloud-download-fill",
            "cloudDrizzle": "cloud-drizzle",
            "cloudDrizzleFill": "cloud-drizzle-fill",
            "cloudFill": "cloud-fill",
            "cloudFog": "cloud-fog",
            "cloudFogFill": "cloud-fog-fill",
            "cloudFog2": "cloud-fog2",
            "cloudFog2Fill": "cloud-fog2-fill",
            "cloudHail": "cloud-hail",
            "cloudHailFill": "cloud-hail-fill",
            "cloudHaze": "cloud-haze",
            "cloudHazeFill": "cloud-haze-fill",
            "cloudHaze2": "cloud-haze2",
            "cloudHaze2Fill": "cloud-haze2-fill",
            "cloudLightning": "cloud-lightning",
            "cloudLightningFill": "cloud-lightning-fill",
            "cloudLightningRain": "cloud-lightning-rain",
            "cloudLightningRainFill": "cloud-lightning-rain-fill",
            "cloudMinus": "cloud-minus",
            "cloudMinusFill": "cloud-minus-fill",
            "cloudMoon": "cloud-moon",
            "cloudMoonFill": "cloud-moon-fill",
            "cloudPlus": "cloud-plus",
            "cloudPlusFill": "cloud-plus-fill",
            "cloudRain": "cloud-rain",
            "cloudRainFill": "cloud-rain-fill",
            "cloudRainHeavy": "cloud-rain-heavy",
            "cloudRainHeavyFill": "cloud-rain-heavy-fill",
            "cloudSlash": "cloud-slash",
            "cloudSlashFill": "cloud-slash-fill",
            "cloudSleet": "cloud-sleet",
            "cloudSleetFill": "cloud-sleet-fill",
            "cloudSnow": "cloud-snow",
            "cloudSnowFill": "cloud-snow-fill",
            "cloudSun": "cloud-sun",
            "cloudSunFill": "cloud-sun-fill",
            "cloudUpload": "cloud-upload",
            "cloudUploadFill": "cloud-upload-fill",
            "clouds": "clouds",
            "cloudsFill": "clouds-fill",
            "cloudy": "cloudy",
            "cloudyFill": "cloudy-fill",
            "code": "code",
            "codeSlash": "code-slash",
            "codeSquare": "code-square",
            "coin": "coin",
            "collection": "collection",
            "collectionFill": "collection-fill",
            "collectionPlay": "collection-play",
            "collectionPlayFill": "collection-play-fill",
            "columns": "columns",
            "columnsGap": "columns-gap",
            "command": "command",
            "compass": "compass",
            "compassFill": "compass-fill",
            "cone": "cone",
            "coneStriped": "cone-striped",
            "controller": "controller",
            "cpu": "cpu",
            "cpuFill": "cpu-fill",
            "creditCard": "credit-card",
            "creditCard2Back": "credit-card-2-back",
            "creditCard2BackFill": "credit-card-2-back-fill",
            "creditCard2Front": "credit-card-2-front",
            "creditCard2FrontFill": "credit-card-2-front-fill",
            "creditCardFill": "credit-card-fill",
            "crop": "crop",
            "cup": "cup",
            "cupFill": "cup-fill",
            "cupStraw": "cup-straw",
            "currencyBitcoin": "currency-bitcoin",
            "currencyDollar": "currency-dollar",
            "currencyEuro": "currency-euro",
            "currencyExchange": "currency-exchange",
            "currencyPound": "currency-pound",
            "currencyYen": "currency-yen",
            "cursor": "cursor",
            "cursorFill": "cursor-fill",
            "cursorText": "cursor-text",
            "dash": "dash",
            "dashCircle": "dash-circle",
            "dashCircleDotted": "dash-circle-dotted",
            "dashCircleFill": "dash-circle-fill",
            "dashLg": "dash-lg",
            "dashSquare": "dash-square",
            "dashSquareDotted": "dash-square-dotted",
            "dashSquareFill": "dash-square-fill",
            "deviceHdd": "device-hdd",
            "deviceHddFill": "device-hdd-fill",
            "deviceSsd": "device-ssd",
            "deviceSsdFill": "device-ssd-fill",
            "diagram2": "diagram-2",
            "diagram2Fill": "diagram-2-fill",
            "diagram3": "diagram-3",
            "diagram3Fill": "diagram-3-fill",
            "diamond": "diamond",
            "diamondFill": "diamond-fill",
            "diamondHalf": "diamond-half",
            "dice1": "dice-1",
            "dice1Fill": "dice-1-fill",
            "dice2": "dice-2",
            "dice2Fill": "dice-2-fill",
            "dice3": "dice-3",
            "dice3Fill": "dice-3-fill",
            "dice4": "dice-4",
            "dice4Fill": "dice-4-fill",
            "dice5": "dice-5",
            "dice5Fill": "dice-5-fill",
            "dice6": "dice-6",
            "dice6Fill": "dice-6-fill",
            "disc": "disc",
            "discFill": "disc-fill",
            "discord": "discord",
            "display": "display",
            "displayFill": "display-fill",
            "displayport": "displayport",
            "displayportFill": "displayport-fill",
            "distributeHorizontal": "distribute-horizontal",
            "distributeVertical": "distribute-vertical",
            "doorClosed": "door-closed",
            "doorClosedFill": "door-closed-fill",
            "doorOpen": "door-open",
            "doorOpenFill": "door-open-fill",
            "dot": "dot",
            "download": "download",
            "dpad": "dpad",
            "dpadFill": "dpad-fill",
            "dribbble": "dribbble",
            "droplet": "droplet",
            "dropletFill": "droplet-fill",
            "dropletHalf": "droplet-half",
            "ear": "ear",
            "earFill": "ear-fill",
            "earbuds": "earbuds",
            "easel": "easel",
            "easelFill": "easel-fill",
            "easel2": "easel2",
            "easel2Fill": "easel2-fill",
            "easel3": "easel3",
            "easel3Fill": "easel3-fill",
            "egg": "egg",
            "eggFill": "egg-fill",
            "eggFried": "egg-fried",
            "eject": "eject",
            "ejectFill": "eject-fill",
            "emojiAngry": "emoji-angry",
            "emojiAngryFill": "emoji-angry-fill",
            "emojiDizzy": "emoji-dizzy",
            "emojiDizzyFill": "emoji-dizzy-fill",
            "emojiExpressionless": "emoji-expressionless",
            "emojiExpressionlessFill": "emoji-expressionless-fill",
            "emojiFrown": "emoji-frown",
            "emojiFrownFill": "emoji-frown-fill",
            "emojiHeartEyes": "emoji-heart-eyes",
            "emojiHeartEyesFill": "emoji-heart-eyes-fill",
            "emojiKiss": "emoji-kiss",
            "emojiKissFill": "emoji-kiss-fill",
            "emojiLaughing": "emoji-laughing",
            "emojiLaughingFill": "emoji-laughing-fill",
            "emojiNeutral": "emoji-neutral",
            "emojiNeutralFill": "emoji-neutral-fill",
            "emojiSmile": "emoji-smile",
            "emojiSmileFill": "emoji-smile-fill",
            "emojiSmileUpsideDown": "emoji-smile-upside-down",
            "emojiSmileUpsideDownFill": "emoji-smile-upside-down-fill",
            "emojiSunglasses": "emoji-sunglasses",
            "emojiSunglassesFill": "emoji-sunglasses-fill",
            "emojiWink": "emoji-wink",
            "emojiWinkFill": "emoji-wink-fill",
            "envelope": "envelope",
            "envelopeCheck": "envelope-check",
            "envelopeCheckFill": "envelope-check-fill",
            "envelopeDash": "envelope-dash",
            "envelopeDashFill": "envelope-dash-fill",
            "envelopeExclamation": "envelope-exclamation",
            "envelopeExclamationFill": "envelope-exclamation-fill",
            "envelopeFill": "envelope-fill",
            "envelopeHeart": "envelope-heart",
            "envelopeHeartFill": "envelope-heart-fill",
            "envelopeOpen": "envelope-open",
            "envelopeOpenFill": "envelope-open-fill",
            "envelopeOpenHeart": "envelope-open-heart",
            "envelopeOpenHeartFill": "envelope-open-heart-fill",
            "envelopePaper": "envelope-paper",
            "envelopePaperFill": "envelope-paper-fill",
            "envelopePaperHeart": "envelope-paper-heart",
            "envelopePaperHeartFill": "envelope-paper-heart-fill",
            "envelopePlus": "envelope-plus",
            "envelopePlusFill": "envelope-plus-fill",
            "envelopeSlash": "envelope-slash",
            "envelopeSlashFill": "envelope-slash-fill",
            "envelopeX": "envelope-x",
            "envelopeXFill": "envelope-x-fill",
            "eraser": "eraser",
            "eraserFill": "eraser-fill",
            "ethernet": "ethernet",
            "exclamation": "exclamation",
            "exclamationCircle": "exclamation-circle",
            "exclamationCircleFill": "exclamation-circle-fill",
            "exclamationDiamond": "exclamation-diamond",
            "exclamationDiamondFill": "exclamation-diamond-fill",
            "exclamationLg": "exclamation-lg",
            "exclamationOctagon": "exclamation-octagon",
            "exclamationOctagonFill": "exclamation-octagon-fill",
            "exclamationSquare": "exclamation-square",
            "exclamationSquareFill": "exclamation-square-fill",
            "exclamationTriangle": "exclamation-triangle",
            "exclamationTriangleFill": "exclamation-triangle-fill",
            "exclude": "exclude",
            "explicit": "explicit",
            "explicitFill": "explicit-fill",
            "eye": "eye",
            "eyeFill": "eye-fill",
            "eyeSlash": "eye-slash",
            "eyeSlashFill": "eye-slash-fill",
            "eyedropper": "eyedropper",
            "eyeglasses": "eyeglasses",
            "facebook": "facebook",
            "fan": "fan",
            "file": "file",
            "fileArrowDown": "file-arrow-down",
            "fileArrowDownFill": "file-arrow-down-fill",
            "fileArrowUp": "file-arrow-up",
            "fileArrowUpFill": "file-arrow-up-fill",
            "fileBarGraph": "file-bar-graph",
            "fileBarGraphFill": "file-bar-graph-fill",
            "fileBinary": "file-binary",
            "fileBinaryFill": "file-binary-fill",
            "fileBreak": "file-break",
            "fileBreakFill": "file-break-fill",
            "fileCheck": "file-check",
            "fileCheckFill": "file-check-fill",
            "fileCode": "file-code",
            "fileCodeFill": "file-code-fill",
            "fileDiff": "file-diff",
            "fileDiffFill": "file-diff-fill",
            "fileEarmark": "file-earmark",
            "fileEarmarkArrowDown": "file-earmark-arrow-down",
            "fileEarmarkArrowDownFill": "file-earmark-arrow-down-fill",
            "fileEarmarkArrowUp": "file-earmark-arrow-up",
            "fileEarmarkArrowUpFill": "file-earmark-arrow-up-fill",
            "fileEarmarkBarGraph": "file-earmark-bar-graph",
            "fileEarmarkBarGraphFill": "file-earmark-bar-graph-fill",
            "fileEarmarkBinary": "file-earmark-binary",
            "fileEarmarkBinaryFill": "file-earmark-binary-fill",
            "fileEarmarkBreak": "file-earmark-break",
            "fileEarmarkBreakFill": "file-earmark-break-fill",
            "fileEarmarkCheck": "file-earmark-check",
            "fileEarmarkCheckFill": "file-earmark-check-fill",
            "fileEarmarkCode": "file-earmark-code",
            "fileEarmarkCodeFill": "file-earmark-code-fill",
            "fileEarmarkDiff": "file-earmark-diff",
            "fileEarmarkDiffFill": "file-earmark-diff-fill",
            "fileEarmarkEasel": "file-earmark-easel",
            "fileEarmarkEaselFill": "file-earmark-easel-fill",
            "fileEarmarkExcel": "file-earmark-excel",
            "fileEarmarkExcelFill": "file-earmark-excel-fill",
            "fileEarmarkFill": "file-earmark-fill",
            "fileEarmarkFont": "file-earmark-font",
            "fileEarmarkFontFill": "file-earmark-font-fill",
            "fileEarmarkImage": "file-earmark-image",
            "fileEarmarkImageFill": "file-earmark-image-fill",
            "fileEarmarkLock": "file-earmark-lock",
            "fileEarmarkLockFill": "file-earmark-lock-fill",
            "fileEarmarkLock2": "file-earmark-lock2",
            "fileEarmarkLock2Fill": "file-earmark-lock2-fill",
            "fileEarmarkMedical": "file-earmark-medical",
            "fileEarmarkMedicalFill": "file-earmark-medical-fill",
            "fileEarmarkMinus": "file-earmark-minus",
            "fileEarmarkMinusFill": "file-earmark-minus-fill",
            "fileEarmarkMusic": "file-earmark-music",
            "fileEarmarkMusicFill": "file-earmark-music-fill",
            "fileEarmarkPdf": "file-earmark-pdf",
            "fileEarmarkPdfFill": "file-earmark-pdf-fill",
            "fileEarmarkPerson": "file-earmark-person",
            "fileEarmarkPersonFill": "file-earmark-person-fill",
            "fileEarmarkPlay": "file-earmark-play",
            "fileEarmarkPlayFill": "file-earmark-play-fill",
            "fileEarmarkPlus": "file-earmark-plus",
            "fileEarmarkPlusFill": "file-earmark-plus-fill",
            "fileEarmarkPost": "file-earmark-post",
            "fileEarmarkPostFill": "file-earmark-post-fill",
            "fileEarmarkPpt": "file-earmark-ppt",
            "fileEarmarkPptFill": "file-earmark-ppt-fill",
            "fileEarmarkRichtext": "file-earmark-richtext",
            "fileEarmarkRichtextFill": "file-earmark-richtext-fill",
            "fileEarmarkRuled": "file-earmark-ruled",
            "fileEarmarkRuledFill": "file-earmark-ruled-fill",
            "fileEarmarkSlides": "file-earmark-slides",
            "fileEarmarkSlidesFill": "file-earmark-slides-fill",
            "fileEarmarkSpreadsheet": "file-earmark-spreadsheet",
            "fileEarmarkSpreadsheetFill": "file-earmark-spreadsheet-fill",
            "fileEarmarkText": "file-earmark-text",
            "fileEarmarkTextFill": "file-earmark-text-fill",
            "fileEarmarkWord": "file-earmark-word",
            "fileEarmarkWordFill": "file-earmark-word-fill",
            "fileEarmarkX": "file-earmark-x",
            "fileEarmarkXFill": "file-earmark-x-fill",
            "fileEarmarkZip": "file-earmark-zip",
            "fileEarmarkZipFill": "file-earmark-zip-fill",
            "fileEasel": "file-easel",
            "fileEaselFill": "file-easel-fill",
            "fileExcel": "file-excel",
            "fileExcelFill": "file-excel-fill",
            "fileFill": "file-fill",
            "fileFont": "file-font",
            "fileFontFill": "file-font-fill",
            "fileImage": "file-image",
            "fileImageFill": "file-image-fill",
            "fileLock": "file-lock",
            "fileLockFill": "file-lock-fill",
            "fileLock2": "file-lock2",
            "fileLock2Fill": "file-lock2-fill",
            "fileMedical": "file-medical",
            "fileMedicalFill": "file-medical-fill",
            "fileMinus": "file-minus",
            "fileMinusFill": "file-minus-fill",
            "fileMusic": "file-music",
            "fileMusicFill": "file-music-fill",
            "filePdf": "file-pdf",
            "filePdfFill": "file-pdf-fill",
            "filePerson": "file-person",
            "filePersonFill": "file-person-fill",
            "filePlay": "file-play",
            "filePlayFill": "file-play-fill",
            "filePlus": "file-plus",
            "filePlusFill": "file-plus-fill",
            "filePost": "file-post",
            "filePostFill": "file-post-fill",
            "filePpt": "file-ppt",
            "filePptFill": "file-ppt-fill",
            "fileRichtext": "file-richtext",
            "fileRichtextFill": "file-richtext-fill",
            "fileRuled": "file-ruled",
            "fileRuledFill": "file-ruled-fill",
            "fileSlides": "file-slides",
            "fileSlidesFill": "file-slides-fill",
            "fileSpreadsheet": "file-spreadsheet",
            "fileSpreadsheetFill": "file-spreadsheet-fill",
            "fileText": "file-text",
            "fileTextFill": "file-text-fill",
            "fileWord": "file-word",
            "fileWordFill": "file-word-fill",
            "fileX": "file-x",
            "fileXFill": "file-x-fill",
            "fileZip": "file-zip",
            "fileZipFill": "file-zip-fill",
            "files": "files",
            "filesAlt": "files-alt",
            "filetypeAac": "filetype-aac",
            "filetypeAi": "filetype-ai",
            "filetypeBmp": "filetype-bmp",
            "filetypeCs": "filetype-cs",
            "filetypeCss": "filetype-css",
            "filetypeCsv": "filetype-csv",
            "filetypeDoc": "filetype-doc",
            "filetypeDocx": "filetype-docx",
            "filetypeExe": "filetype-exe",
            "filetypeGif": "filetype-gif",
            "filetypeHeic": "filetype-heic",
            "filetypeHtml": "filetype-html",
            "filetypeJava": "filetype-java",
            "filetypeJpg": "filetype-jpg",
            "filetypeJs": "filetype-js",
            "filetypeJson": "filetype-json",
            "filetypeJsx": "filetype-jsx",
            "filetypeKey": "filetype-key",
            "filetypeM4p": "filetype-m4p",
            "filetypeMd": "filetype-md",
            "filetypeMdx": "filetype-mdx",
            "filetypeMov": "filetype-mov",
            "filetypeMp3": "filetype-mp3",
            "filetypeMp4": "filetype-mp4",
            "filetypeOtf": "filetype-otf",
            "filetypePdf": "filetype-pdf",
            "filetypePhp": "filetype-php",
            "filetypePng": "filetype-png",
            "filetypePpt": "filetype-ppt",
            "filetypePptx": "filetype-pptx",
            "filetypePsd": "filetype-psd",
            "filetypePy": "filetype-py",
            "filetypeRaw": "filetype-raw",
            "filetypeRb": "filetype-rb",
            "filetypeSass": "filetype-sass",
            "filetypeScss": "filetype-scss",
            "filetypeSh": "filetype-sh",
            "filetypeSvg": "filetype-svg",
            "filetypeTiff": "filetype-tiff",
            "filetypeTsx": "filetype-tsx",
            "filetypeTtf": "filetype-ttf",
            "filetypeTxt": "filetype-txt",
            "filetypeWav": "filetype-wav",
            "filetypeWoff": "filetype-woff",
            "filetypeXls": "filetype-xls",
            "filetypeXlsx": "filetype-xlsx",
            "filetypeXml": "filetype-xml",
            "filetypeYml": "filetype-yml",
            "film": "film",
            "filter": "filter",
            "filterCircle": "filter-circle",
            "filterCircleFill": "filter-circle-fill",
            "filterLeft": "filter-left",
            "filterRight": "filter-right",
            "filterSquare": "filter-square",
            "filterSquareFill": "filter-square-fill",
            "fingerprint": "fingerprint",
            "flag": "flag",
            "flagFill": "flag-fill",
            "flower1": "flower1",
            "flower2": "flower2",
            "flower3": "flower3",
            "folder": "folder",
            "folderCheck": "folder-check",
            "folderFill": "folder-fill",
            "folderMinus": "folder-minus",
            "folderPlus": "folder-plus",
            "folderSymlink": "folder-symlink",
            "folderSymlinkFill": "folder-symlink-fill",
            "folderX": "folder-x",
            "folder2": "folder2",
            "folder2Open": "folder2-open",
            "fonts": "fonts",
            "forward": "forward",
            "forwardFill": "forward-fill",
            "front": "front",
            "fullscreen": "fullscreen",
            "fullscreenExit": "fullscreen-exit",
            "funnel": "funnel",
            "funnelFill": "funnel-fill",
            "gear": "gear",
            "gearFill": "gear-fill",
            "gearWide": "gear-wide",
            "gearWideConnected": "gear-wide-connected",
            "gem": "gem",
            "genderAmbiguous": "gender-ambiguous",
            "genderFemale": "gender-female",
            "genderMale": "gender-male",
            "genderTrans": "gender-trans",
            "geo": "geo",
            "geoAlt": "geo-alt",
            "geoAltFill": "geo-alt-fill",
            "geoFill": "geo-fill",
            "gift": "gift",
            "giftFill": "gift-fill",
            "git": "git",
            "github": "github",
            "globe": "globe",
            "globe2": "globe2",
            "google": "google",
            "gpuCard": "gpu-card",
            "graphDown": "graph-down",
            "graphDownArrow": "graph-down-arrow",
            "graphUp": "graph-up",
            "graphUpArrow": "graph-up-arrow",
            "grid": "grid",
            "grid1x2": "grid-1x2",
            "grid1x2Fill": "grid-1x2-fill",
            "grid3x2": "grid-3x2",
            "grid3x2Gap": "grid-3x2-gap",
            "grid3x2GapFill": "grid-3x2-gap-fill",
            "grid3x3": "grid-3x3",
            "grid3x3Gap": "grid-3x3-gap",
            "grid3x3GapFill": "grid-3x3-gap-fill",
            "gridFill": "grid-fill",
            "gripHorizontal": "grip-horizontal",
            "gripVertical": "grip-vertical",
            "hammer": "hammer",
            "handIndex": "hand-index",
            "handIndexFill": "hand-index-fill",
            "handIndexThumb": "hand-index-thumb",
            "handIndexThumbFill": "hand-index-thumb-fill",
            "handThumbsDown": "hand-thumbs-down",
            "handThumbsDownFill": "hand-thumbs-down-fill",
            "handThumbsUp": "hand-thumbs-up",
            "handThumbsUpFill": "hand-thumbs-up-fill",
            "handbag": "handbag",
            "handbagFill": "handbag-fill",
            "hash": "hash",
            "hdd": "hdd",
            "hddFill": "hdd-fill",
            "hddNetwork": "hdd-network",
            "hddNetworkFill": "hdd-network-fill",
            "hddRack": "hdd-rack",
            "hddRackFill": "hdd-rack-fill",
            "hddStack": "hdd-stack",
            "hddStackFill": "hdd-stack-fill",
            "hdmi": "hdmi",
            "hdmiFill": "hdmi-fill",
            "headphones": "headphones",
            "headset": "headset",
            "headsetVr": "headset-vr",
            "heart": "heart",
            "heartArrow": "heart-arrow",
            "heartFill": "heart-fill",
            "heartHalf": "heart-half",
            "heartPulse": "heart-pulse",
            "heartPulseFill": "heart-pulse-fill",
            "heartbreak": "heartbreak",
            "heartbreakFill": "heartbreak-fill",
            "hearts": "hearts",
            "heptagon": "heptagon",
            "heptagonFill": "heptagon-fill",
            "heptagonHalf": "heptagon-half",
            "hexagon": "hexagon",
            "hexagonFill": "hexagon-fill",
            "hexagonHalf": "hexagon-half",
            "hospital": "hospital",
            "hospitalFill": "hospital-fill",
            "hourglass": "hourglass",
            "hourglassBottom": "hourglass-bottom",
            "hourglassSplit": "hourglass-split",
            "hourglassTop": "hourglass-top",
            "house": "house",
            "houseDoor": "house-door",
            "houseDoorFill": "house-door-fill",
            "houseFill": "house-fill",
            "houseHeart": "house-heart",
            "houseHeartFill": "house-heart-fill",
            "hr": "hr",
            "hurricane": "hurricane",
            "hypnotize": "hypnotize",
            "image": "image",
            "imageAlt": "image-alt",
            "imageFill": "image-fill",
            "images": "images",
            "inbox": "inbox",
            "inboxFill": "inbox-fill",
            "inboxesFill": "inboxes-fill",
            "inboxes": "inboxes",
            "incognito": "incognito",
            "infinity": "infinity",
            "info": "info",
            "infoCircle": "info-circle",
            "infoCircleFill": "info-circle-fill",
            "infoLg": "info-lg",
            "infoSquare": "info-square",
            "infoSquareFill": "info-square-fill",
            "inputCursor": "input-cursor",
            "inputCursorText": "input-cursor-text",
            "instagram": "instagram",
            "intersect": "intersect",
            "journal": "journal",
            "journalAlbum": "journal-album",
            "journalArrowDown": "journal-arrow-down",
            "journalArrowUp": "journal-arrow-up",
            "journalBookmark": "journal-bookmark",
            "journalBookmarkFill": "journal-bookmark-fill",
            "journalCheck": "journal-check",
            "journalCode": "journal-code",
            "journalMedical": "journal-medical",
            "journalMinus": "journal-minus",
            "journalPlus": "journal-plus",
            "journalRichtext": "journal-richtext",
            "journalText": "journal-text",
            "journalX": "journal-x",
            "journals": "journals",
            "joystick": "joystick",
            "justify": "justify",
            "justifyLeft": "justify-left",
            "justifyRight": "justify-right",
            "kanban": "kanban",
            "kanbanFill": "kanban-fill",
            "key": "key",
            "keyFill": "key-fill",
            "keyboard": "keyboard",
            "keyboardFill": "keyboard-fill",
            "ladder": "ladder",
            "lamp": "lamp",
            "lampFill": "lamp-fill",
            "laptop": "laptop",
            "laptopFill": "laptop-fill",
            "layerBackward": "layer-backward",
            "layerForward": "layer-forward",
            "layers": "layers",
            "layersFill": "layers-fill",
            "layersHalf": "layers-half",
            "layoutSidebar": "layout-sidebar",
            "layoutSidebarInsetReverse": "layout-sidebar-inset-reverse",
            "layoutSidebarInset": "layout-sidebar-inset",
            "layoutSidebarReverse": "layout-sidebar-reverse",
            "layoutSplit": "layout-split",
            "layoutTextSidebar": "layout-text-sidebar",
            "layoutTextSidebarReverse": "layout-text-sidebar-reverse",
            "layoutTextWindow": "layout-text-window",
            "layoutTextWindowReverse": "layout-text-window-reverse",
            "layoutThreeColumns": "layout-three-columns",
            "layoutWtf": "layout-wtf",
            "lifePreserver": "life-preserver",
            "lightbulb": "lightbulb",
            "lightbulbFill": "lightbulb-fill",
            "lightbulbOff": "lightbulb-off",
            "lightbulbOffFill": "lightbulb-off-fill",
            "lightning": "lightning",
            "lightningCharge": "lightning-charge",
            "lightningChargeFill": "lightning-charge-fill",
            "lightningFill": "lightning-fill",
            "line": "line",
            "link": "link",
            "link45deg": "link-45deg",
            "linkedin": "linkedin",
            "list": "list",
            "listCheck": "list-check",
            "listColumns": "list-columns",
            "listColumnsReverse": "list-columns-reverse",
            "listNested": "list-nested",
            "listOl": "list-ol",
            "listStars": "list-stars",
            "listTask": "list-task",
            "listUl": "list-ul",
            "lock": "lock",
            "lockFill": "lock-fill",
            "magic": "magic",
            "magnet": "magnet",
            "magnetFill": "magnet-fill",
            "mailbox": "mailbox",
            "mailbox2": "mailbox2",
            "map": "map",
            "mapFill": "map-fill",
            "markdown": "markdown",
            "markdownFill": "markdown-fill",
            "mask": "mask",
            "mastodon": "mastodon",
            "medium": "medium",
            "megaphone": "megaphone",
            "megaphoneFill": "megaphone-fill",
            "memory": "memory",
            "menuApp": "menu-app",
            "menuAppFill": "menu-app-fill",
            "menuButton": "menu-button",
            "menuButtonFill": "menu-button-fill",
            "menuButtonWide": "menu-button-wide",
            "menuButtonWideFill": "menu-button-wide-fill",
            "menuDown": "menu-down",
            "menuUp": "menu-up",
            "messenger": "messenger",
            "meta": "meta",
            "mic": "mic",
            "micFill": "mic-fill",
            "micMute": "mic-mute",
            "micMuteFill": "mic-mute-fill",
            "microsoft": "microsoft",
            "minecart": "minecart",
            "minecartLoaded": "minecart-loaded",
            "modem": "modem",
            "modemFill": "modem-fill",
            "moisture": "moisture",
            "moon": "moon",
            "moonFill": "moon-fill",
            "moonStars": "moon-stars",
            "moonStarsFill": "moon-stars-fill",
            "mortarboard": "mortarboard",
            "mortarboardFill": "mortarboard-fill",
            "motherboard": "motherboard",
            "motherboardFill": "motherboard-fill",
            "mouse": "mouse",
            "mouseFill": "mouse-fill",
            "mouse2": "mouse2",
            "mouse2Fill": "mouse2-fill",
            "mouse3": "mouse3",
            "mouse3Fill": "mouse3-fill",
            "musicNote": "music-note",
            "musicNoteBeamed": "music-note-beamed",
            "musicNoteList": "music-note-list",
            "musicPlayer": "music-player",
            "musicPlayerFill": "music-player-fill",
            "newspaper": "newspaper",
            "nintendoSwitch": "nintendo-switch",
            "nodeMinus": "node-minus",
            "nodeMinusFill": "node-minus-fill",
            "nodePlus": "node-plus",
            "nodePlusFill": "node-plus-fill",
            "nut": "nut",
            "nutFill": "nut-fill",
            "octagon": "octagon",
            "octagonFill": "octagon-fill",
            "octagonHalf": "octagon-half",
            "opticalAudio": "optical-audio",
            "opticalAudioFill": "optical-audio-fill",
            "option": "option",
            "outlet": "outlet",
            "paintBucket": "paint-bucket",
            "palette": "palette",
            "paletteFill": "palette-fill",
            "palette2": "palette2",
            "paperclip": "paperclip",
            "paragraph": "paragraph",
            "patchCheck": "patch-check",
            "patchCheckFill": "patch-check-fill",
            "patchExclamation": "patch-exclamation",
            "patchExclamationFill": "patch-exclamation-fill",
            "patchMinus": "patch-minus",
            "patchMinusFill": "patch-minus-fill",
            "patchPlus": "patch-plus",
            "patchPlusFill": "patch-plus-fill",
            "patchQuestion": "patch-question",
            "patchQuestionFill": "patch-question-fill",
            "pause": "pause",
            "pauseBtn": "pause-btn",
            "pauseBtnFill": "pause-btn-fill",
            "pauseCircle": "pause-circle",
            "pauseCircleFill": "pause-circle-fill",
            "pauseFill": "pause-fill",
            "paypal": "paypal",
            "pc": "pc",
            "pcDisplay": "pc-display",
            "pcDisplayHorizontal": "pc-display-horizontal",
            "pcHorizontal": "pc-horizontal",
            "pciCard": "pci-card",
            "peace": "peace",
            "peaceFill": "peace-fill",
            "pen": "pen",
            "penFill": "pen-fill",
            "pencil": "pencil",
            "pencilFill": "pencil-fill",
            "pencilSquare": "pencil-square",
            "pentagon": "pentagon",
            "pentagonFill": "pentagon-fill",
            "pentagonHalf": "pentagon-half",
            "people": "people",
            "personCircle": "person-circle",
            "peopleFill": "people-fill",
            "percent": "percent",
            "person": "person",
            "personBadge": "person-badge",
            "personBadgeFill": "person-badge-fill",
            "personBoundingBox": "person-bounding-box",
            "personCheck": "person-check",
            "personCheckFill": "person-check-fill",
            "personDash": "person-dash",
            "personDashFill": "person-dash-fill",
            "personFill": "person-fill",
            "personHeart": "person-heart",
            "personHearts": "person-hearts",
            "personLinesFill": "person-lines-fill",
            "personPlus": "person-plus",
            "personPlusFill": "person-plus-fill",
            "personRolodex": "person-rolodex",
            "personSquare": "person-square",
            "personVideo": "person-video",
            "personVideo2": "person-video2",
            "personVideo3": "person-video3",
            "personWorkspace": "person-workspace",
            "personX": "person-x",
            "personXFill": "person-x-fill",
            "phone": "phone",
            "phoneFill": "phone-fill",
            "phoneFlip": "phone-flip",
            "phoneLandscape": "phone-landscape",
            "phoneLandscapeFill": "phone-landscape-fill",
            "phoneVibrate": "phone-vibrate",
            "phoneVibrateFill": "phone-vibrate-fill",
            "pieChart": "pie-chart",
            "pieChartFill": "pie-chart-fill",
            "piggyBank": "piggy-bank",
            "piggyBankFill": "piggy-bank-fill",
            "pin": "pin",
            "pinAngle": "pin-angle",
            "pinAngleFill": "pin-angle-fill",
            "pinFill": "pin-fill",
            "pinMap": "pin-map",
            "pinMapFill": "pin-map-fill",
            "pinterest": "pinterest",
            "pip": "pip",
            "pipFill": "pip-fill",
            "play": "play",
            "playBtn": "play-btn",
            "playBtnFill": "play-btn-fill",
            "playCircle": "play-circle",
            "playCircleFill": "play-circle-fill",
            "playFill": "play-fill",
            "playstation": "playstation",
            "plug": "plug",
            "plugFill": "plug-fill",
            "plugin": "plugin",
            "plus": "plus",
            "plusCircle": "plus-circle",
            "plusCircleDotted": "plus-circle-dotted",
            "plusCircleFill": "plus-circle-fill",
            "plusLg": "plus-lg",
            "plusSlashMinus": "plus-slash-minus",
            "plusSquare": "plus-square",
            "plusSquareDotted": "plus-square-dotted",
            "plusSquareFill": "plus-square-fill",
            "postage": "postage",
            "postageFill": "postage-fill",
            "postageHeart": "postage-heart",
            "postageHeartFill": "postage-heart-fill",
            "postcard": "postcard",
            "postcardFill": "postcard-fill",
            "postcardHeart": "postcard-heart",
            "postcardHeartFill": "postcard-heart-fill",
            "power": "power",
            "printer": "printer",
            "printerFill": "printer-fill",
            "projector": "projector",
            "projectorFill": "projector-fill",
            "puzzle": "puzzle",
            "puzzleFill": "puzzle-fill",
            "qrCode": "qr-code",
            "qrCodeScan": "qr-code-scan",
            "question": "question",
            "questionCircle": "question-circle",
            "questionDiamond": "question-diamond",
            "questionDiamondFill": "question-diamond-fill",
            "questionCircleFill": "question-circle-fill",
            "questionLg": "question-lg",
            "questionOctagon": "question-octagon",
            "questionOctagonFill": "question-octagon-fill",
            "questionSquare": "question-square",
            "questionSquareFill": "question-square-fill",
            "quora": "quora",
            "quote": "quote",
            "radioactive": "radioactive",
            "rainbow": "rainbow",
            "receipt": "receipt",
            "receiptCutoff": "receipt-cutoff",
            "reception0": "reception-0",
            "reception1": "reception-1",
            "reception2": "reception-2",
            "reception3": "reception-3",
            "reception4": "reception-4",
            "record": "record",
            "recordBtn": "record-btn",
            "recordBtnFill": "record-btn-fill",
            "recordCircle": "record-circle",
            "recordCircleFill": "record-circle-fill",
            "recordFill": "record-fill",
            "record2": "record2",
            "record2Fill": "record2-fill",
            "recycle": "recycle",
            "reddit": "reddit",
            "reply": "reply",
            "replyAll": "reply-all",
            "replyAllFill": "reply-all-fill",
            "replyFill": "reply-fill",
            "robot": "robot",
            "router": "router",
            "routerFill": "router-fill",
            "rss": "rss",
            "rssFill": "rss-fill",
            "rulers": "rulers",
            "safe": "safe",
            "safeFill": "safe-fill",
            "safe2": "safe2",
            "safe2Fill": "safe2-fill",
            "save": "save",
            "saveFill": "save-fill",
            "save2": "save2",
            "save2Fill": "save2-fill",
            "scissors": "scissors",
            "screwdriver": "screwdriver",
            "sdCard": "sd-card",
            "sdCardFill": "sd-card-fill",
            "search": "search",
            "searchHeart": "search-heart",
            "searchHeartFill": "search-heart-fill",
            "segmentedNav": "segmented-nav",
            "send": "send",
            "sendCheck": "send-check",
            "sendCheckFill": "send-check-fill",
            "sendDash": "send-dash",
            "sendDashFill": "send-dash-fill",
            "sendExclamation": "send-exclamation",
            "sendExclamationFill": "send-exclamation-fill",
            "sendFill": "send-fill",
            "sendPlus": "send-plus",
            "sendPlusFill": "send-plus-fill",
            "sendSlash": "send-slash",
            "sendSlashFill": "send-slash-fill",
            "sendX": "send-x",
            "sendXFill": "send-x-fill",
            "server": "server",
            "share": "share",
            "shareFill": "share-fill",
            "shield": "shield",
            "shieldCheck": "shield-check",
            "shieldExclamation": "shield-exclamation",
            "shieldFill": "shield-fill",
            "shieldFillCheck": "shield-fill-check",
            "shieldFillExclamation": "shield-fill-exclamation",
            "shieldFillMinus": "shield-fill-minus",
            "shieldFillPlus": "shield-fill-plus",
            "shieldFillX": "shield-fill-x",
            "shieldLock": "shield-lock",
            "shieldLockFill": "shield-lock-fill",
            "shieldMinus": "shield-minus",
            "shieldPlus": "shield-plus",
            "shieldShaded": "shield-shaded",
            "shieldSlash": "shield-slash",
            "shieldSlashFill": "shield-slash-fill",
            "shieldX": "shield-x",
            "shift": "shift",
            "shiftFill": "shift-fill",
            "shop": "shop",
            "shopWindow": "shop-window",
            "shuffle": "shuffle",
            "signal": "signal",
            "signpost": "signpost",
            "signpost2": "signpost-2",
            "signpost2Fill": "signpost-2-fill",
            "signpostFill": "signpost-fill",
            "signpostSplit": "signpost-split",
            "signpostSplitFill": "signpost-split-fill",
            "sim": "sim",
            "simFill": "sim-fill",
            "skipBackward": "skip-backward",
            "skipBackwardBtn": "skip-backward-btn",
            "skipBackwardBtnFill": "skip-backward-btn-fill",
            "skipBackwardCircle": "skip-backward-circle",
            "skipBackwardCircleFill": "skip-backward-circle-fill",
            "skipBackwardFill": "skip-backward-fill",
            "skipEnd": "skip-end",
            "skipEndBtn": "skip-end-btn",
            "skipEndBtnFill": "skip-end-btn-fill",
            "skipEndCircle": "skip-end-circle",
            "skipEndCircleFill": "skip-end-circle-fill",
            "skipEndFill": "skip-end-fill",
            "skipForward": "skip-forward",
            "skipForwardBtn": "skip-forward-btn",
            "skipForwardBtnFill": "skip-forward-btn-fill",
            "skipForwardCircle": "skip-forward-circle",
            "skipForwardCircleFill": "skip-forward-circle-fill",
            "skipForwardFill": "skip-forward-fill",
            "skipStart": "skip-start",
            "skipStartBtn": "skip-start-btn",
            "skipStartBtnFill": "skip-start-btn-fill",
            "skipStartCircle": "skip-start-circle",
            "skipStartCircleFill": "skip-start-circle-fill",
            "skipStartFill": "skip-start-fill",
            "skype": "skype",
            "slack": "slack",
            "slash": "slash",
            "slashCircleFill": "slash-circle-fill",
            "slashLg": "slash-lg",
            "slashSquare": "slash-square",
            "slashSquareFill": "slash-square-fill",
            "sliders": "sliders",
            "sliders2": "sliders2",
            "sliders2Vertical": "sliders2-vertical",
            "smartwatch": "smartwatch",
            "snapchat": "snapchat",
            "snow": "snow",
            "snow2": "snow2",
            "snow3": "snow3",
            "sortAlphaDown": "sort-alpha-down",
            "sortAlphaDownAlt": "sort-alpha-down-alt",
            "sortAlphaUp": "sort-alpha-up",
            "sortAlphaUpAlt": "sort-alpha-up-alt",
            "sortDown": "sort-down",
            "sortDownAlt": "sort-down-alt",
            "sortNumericDown": "sort-numeric-down",
            "sortNumericDownAlt": "sort-numeric-down-alt",
            "sortNumericUp": "sort-numeric-up",
            "sortNumericUpAlt": "sort-numeric-up-alt",
            "sortUp": "sort-up",
            "sortUpAlt": "sort-up-alt",
            "soundwave": "soundwave",
            "speaker": "speaker",
            "speakerFill": "speaker-fill",
            "speedometer": "speedometer",
            "speedometer2": "speedometer2",
            "spellcheck": "spellcheck",
            "spotify": "spotify",
            "square": "square",
            "squareFill": "square-fill",
            "squareHalf": "square-half",
            "stack": "stack",
            "stackOverflow": "stack-overflow",
            "star": "star",
            "starFill": "star-fill",
            "starHalf": "star-half",
            "stars": "stars",
            "steam": "steam",
            "stickies": "stickies",
            "stickiesFill": "stickies-fill",
            "sticky": "sticky",
            "stickyFill": "sticky-fill",
            "stop": "stop",
            "stopBtn": "stop-btn",
            "stopBtnFill": "stop-btn-fill",
            "stopCircle": "stop-circle",
            "stopCircleFill": "stop-circle-fill",
            "stopFill": "stop-fill",
            "stoplights": "stoplights",
            "stoplightsFill": "stoplights-fill",
            "stopwatch": "stopwatch",
            "stopwatchFill": "stopwatch-fill",
            "strava": "strava",
            "subtract": "subtract",
            "suitClub": "suit-club",
            "suitClubFill": "suit-club-fill",
            "suitDiamond": "suit-diamond",
            "suitDiamondFill": "suit-diamond-fill",
            "suitHeart": "suit-heart",
            "suitHeartFill": "suit-heart-fill",
            "suitSpade": "suit-spade",
            "suitSpadeFill": "suit-spade-fill",
            "sun": "sun",
            "sunFill": "sun-fill",
            "sunglasses": "sunglasses",
            "sunrise": "sunrise",
            "sunriseFill": "sunrise-fill",
            "sunset": "sunset",
            "sunsetFill": "sunset-fill",
            "symmetryHorizontal": "symmetry-horizontal",
            "symmetryVertical": "symmetry-vertical",
            "table": "table",
            "tablet": "tablet",
            "tabletFill": "tablet-fill",
            "tabletLandscape": "tablet-landscape",
            "tabletLandscapeFill": "tablet-landscape-fill",
            "tag": "tag",
            "tagFill": "tag-fill",
            "tags": "tags",
            "tagsFill": "tags-fill",
            "telegram": "telegram",
            "telephone": "telephone",
            "telephoneFill": "telephone-fill",
            "telephoneForward": "telephone-forward",
            "telephoneForwardFill": "telephone-forward-fill",
            "telephoneInbound": "telephone-inbound",
            "telephoneInboundFill": "telephone-inbound-fill",
            "telephoneMinus": "telephone-minus",
            "telephoneMinusFill": "telephone-minus-fill",
            "telephoneOutbound": "telephone-outbound",
            "telephoneOutboundFill": "telephone-outbound-fill",
            "telephonePlus": "telephone-plus",
            "telephonePlusFill": "telephone-plus-fill",
            "telephoneX": "telephone-x",
            "telephoneXFill": "telephone-x-fill",
            "terminal": "terminal",
            "terminalDash": "terminal-dash",
            "terminalFill": "terminal-fill",
            "terminalPlus": "terminal-plus",
            "terminalSplit": "terminal-split",
            "terminalX": "terminal-x",
            "textCenter": "text-center",
            "textIndentLeft": "text-indent-left",
            "textIndentRight": "text-indent-right",
            "textLeft": "text-left",
            "textParagraph": "text-paragraph",
            "textRight": "text-right",
            "textarea": "textarea",
            "textareaResize": "textarea-resize",
            "textareaT": "textarea-t",
            "thermometer": "thermometer",
            "thermometerHalf": "thermometer-half",
            "thermometerHigh": "thermometer-high",
            "thermometerLow": "thermometer-low",
            "thermometerSnow": "thermometer-snow",
            "thermometerSun": "thermometer-sun",
            "threeDots": "three-dots",
            "threeDotsVertical": "three-dots-vertical",
            "thunderbolt": "thunderbolt",
            "thunderboltFill": "thunderbolt-fill",
            "ticket": "ticket",
            "ticketDetailed": "ticket-detailed",
            "ticketDetailedFill": "ticket-detailed-fill",
            "ticketFill": "ticket-fill",
            "ticketPerforated": "ticket-perforated",
            "ticketPerforatedFill": "ticket-perforated-fill",
            "tiktok": "tiktok",
            "toggleOff": "toggle-off",
            "toggleOn": "toggle-on",
            "toggle2Off": "toggle2-off",
            "toggle2On": "toggle2-on",
            "toggles": "toggles",
            "toggles2": "toggles2",
            "tools": "tools",
            "tornado": "tornado",
            "translate": "translate",
            "trash": "trash",
            "trashFill": "trash-fill",
            "trash2": "trash2",
            "trash2Fill": "trash2-fill",
            "trash3": "trash3",
            "trash3Fill": "trash3-fill",
            "tree": "tree",
            "treeFill": "tree-fill",
            "triangle": "triangle",
            "triangleFill": "triangle-fill",
            "triangleHalf": "triangle-half",
            "trophy": "trophy",
            "trophyFill": "trophy-fill",
            "tropicalStorm": "tropical-storm",
            "truck": "truck",
            "truckFlatbed": "truck-flatbed",
            "tsunami": "tsunami",
            "tv": "tv",
            "tvFill": "tv-fill",
            "twitch": "twitch",
            "twitter": "twitter",
            "type": "type",
            "typeBold": "type-bold",
            "typeH1": "type-h1",
            "typeH2": "type-h2",
            "typeH3": "type-h3",
            "typeItalic": "type-italic",
            "typeStrikethrough": "type-strikethrough",
            "typeUnderline": "type-underline",
            "uiChecks": "ui-checks",
            "uiChecksGrid": "ui-checks-grid",
            "uiRadios": "ui-radios",
            "uiRadiosGrid": "ui-radios-grid",
            "umbrella": "umbrella",
            "umbrellaFill": "umbrella-fill",
            "union": "union",
            "unlock": "unlock",
            "unlockFill": "unlock-fill",
            "upc": "upc",
            "upcScan": "upc-scan",
            "upload": "upload",
            "usb": "usb",
            "usbC": "usb-c",
            "usbCFill": "usb-c-fill",
            "usbDrive": "usb-drive",
            "usbDriveFill": "usb-drive-fill",
            "usbFill": "usb-fill",
            "usbMicro": "usb-micro",
            "usbMicroFill": "usb-micro-fill",
            "usbMini": "usb-mini",
            "usbMiniFill": "usb-mini-fill",
            "usbPlug": "usb-plug",
            "usbPlugFill": "usb-plug-fill",
            "usbSymbol": "usb-symbol",
            "valentine": "valentine",
            "valentine2": "valentine2",
            "vectorPen": "vector-pen",
            "viewList": "view-list",
            "viewStacked": "view-stacked",
            "vimeo": "vimeo",
            "vinyl": "vinyl",
            "vinylFill": "vinyl-fill",
            "voicemail": "voicemail",
            "volumeDown": "volume-down",
            "volumeDownFill": "volume-down-fill",
            "volumeMute": "volume-mute",
            "volumeMuteFill": "volume-mute-fill",
            "volumeOff": "volume-off",
            "volumeOffFill": "volume-off-fill",
            "volumeUp": "volume-up",
            "volumeUpFill": "volume-up-fill",
            "vr": "vr",
            "wallet": "wallet",
            "walletFill": "wallet-fill",
            "wallet2": "wallet2",
            "watch": "watch",
            "water": "water",
            "webcam": "webcam",
            "webcamFill": "webcam-fill",
            "whatsapp": "whatsapp",
            "wifi": "wifi",
            "wifi1": "wifi-1",
            "wifi2": "wifi-2",
            "wifiOff": "wifi-off",
            "wind": "wind",
            "window": "window",
            "windowDash": "window-dash",
            "windowDesktop": "window-desktop",
            "windowDock": "window-dock",
            "windowFullscreen": "window-fullscreen",
            "windowPlus": "window-plus",
            "windowSidebar": "window-sidebar",
            "windowSplit": "window-split",
            "windowStack": "window-stack",
            "windowX": "window-x",
            "windows": "windows",
            "wordpress": "wordpress",
            "wrench": "wrench",
            "wrenchAdjustable": "wrench-adjustable",
            "wrenchAdjustableCircle": "wrench-adjustable-circle",
            "wrenchAdjustableCircleFill": "wrench-adjustable-circle-fill",
            "x": "x",
            "xCircle": "x-circle",
            "xCircleFill": "x-circle-fill",
            "xDiamond": "x-diamond",
            "xDiamondFill": "x-diamond-fill",
            "xLg": "x-lg",
            "xOctagon": "x-octagon",
            "xOctagonFill": "x-octagon-fill",
            "xSquare": "x-square",
            "xSquareFill": "x-square-fill",
            "xbox": "xbox",
            "yinYang": "yin-yang",
            "youtube": "youtube",
            "zoomIn": "zoom-in",
            "zoomOut": "zoom-out"
        },
        "iconsImportUrl": "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css",
        "colors": {
            "primary": "#007bff",
            "secondary": "#6c757d",
            "success": "#28a745",
            "danger": "#dc3545",
            "warning": "#ffc107",
            "info": "#17a2b8",
            "light": "#f8f9fa",
            "dark": "#343a40"
        }
    }
};
exports.default = data;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9ykw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuizQuestion", ()=>QuizQuestion
);
parcelHelpers.export(exports, "QuestionsContainer", ()=>QuestionsContainer
);
var _oxidizer = require("oxidizer");
var _dataMjs = require("../../data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
const bsclrs = _dataMjsDefault.default.bootstrap.colors;
class QuizQuestion extends _oxidizer.Component {
    get css() {
        return _oxidizer.css`
            @keyframes show-button {
                0% {
                    opacity:0;
                }
                100%{
                    opacity:1;
                }
            }
            @keyframes hide-button {
                100% {

                }
                0%{
                    
                }
            }

            button {
                font-family:inherit;
            }

            quiz-question {
                display:flex;
                flex-flow: column nowrap;
                position:fixed;
                transform:translateX(150vw);
                height:100%; 
            }
            .question-head {
                margin:10px;
            }
            .question-title {
                text-align:center;
            }
            .question-body {
                display:flex;
                flex-flow:column nowrap;
                align-items:center;
                justify-content:center;
            }

            .quiz-btn {
                width:100%;
                margin: 10px;
                padding: 15px;
                max-width: 50vw;
                border: 1px solid black;
                text-align: center;
                font-size: 1.7em;
                transition: 200ms;
            }
            .question-answer-container {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items:center;
            }
            .question-answer {
                border-radius: 30px;
                background: transparent;
                color: black;
            }
            .question-answer:hover {
                color:black;
                box-shadow: 1px 1px 5px rgb(0,0,0);
                transform:translateX(10px)
            }
            .question-answer.clicked {
                border:1px solid rgb(0,55,255);
                box-shadow: 1px 1px 5px rgb(0,55,255);
                color:rgb(0,55,255);
            }
            .question-answer.clicked:hover {
                background: transparent;
                transform:translateX(0px)
            }

            .quiz-action-btn {
                margin-top:30px;
                opacity:0;
                color:white;
                width:25% !important;
                border-radius:15px !important;
            }

            .quiz-action-btn:hover {
                box-shadow: 2px 2px 7px rgb(0,0,0,.3)
            }

            .submit-button {
                cursor:pointer;
                background-color:${bsclrs.success};
                margin-top:80px;
                color:white;
                border:0px;
                border-bottom:1px solid black;
            }
            .submit-button:hover {
                box-shadow: 2px 2px 5px black;
                background-color:rgb(35 141 59)
            }

            .next-button {
                background-color:${bsclrs.primary};
                animation: 250ms show-button ease-in;
                animation-fill-mode: forwards;
            }

            .quiz-action-btn.show {
                opacity:1 !important;
            }

            .show-correct {
                border:1px solid ${bsclrs.success} !important;
                box-shadow: 1px 1px 5px ${bsclrs.success} !important;
                background-color:${bsclrs.success} !important;
                color:black !important;
            }

            .show-incorrect {
                color:black !important;
                opacity:.3;
            }
            .show-incorrect.clicked {
                border:1px solid ${bsclrs.danger} !important;
                box-shadow: 1px 1px 5px ${bsclrs.danger} !important;
                background-color:${bsclrs.danger} !important;
            }

            .qc {
                font-size:2.5em !important;
            }

            .bi-check-lg {
                color:transparent;
                transition:200ms;
            }
            .bi-x-lg {
                color:transparent;
                transition:200ms;
            }
            .bi-check-lg.show {
                color:${bsclrs.success} !important;
            }
            .bi-x-lg.show {
                color:${bsclrs.danger} !important;
                transition:200ms;
            }

            .explanation {
                font-size: 1.5em;
                margin: 30px;
                text-align: center;
            }
        `;
    }
    showNextButton() {
        _oxidizer.$('.submit-button')[0].replaceWith(new _oxidizer.BUTTON({
            class: 'quiz-btn next-button quiz-action-btn',
            textContent: 'Next Question',
            onclick () {
                this.parentElement.parentElement.parentElement.nextQuestion();
            }
        }));
    }
    showCorrect() {
        const n = this.props.question.correct.length;
        let i = 0;
        this.querySelectorAll('.question-answer-container').forEach((node, index)=>{
            if (node.children[1].classList.contains('clicked')) node.children[0].classList.add('show');
            if (this.props.question.correct.includes(index)) {
                if (node.children[1].classList.contains('clicked')) i++;
                node.children[1].classList.add('show-correct');
            } else node.children[1].classList.add('show-incorrect');
            this.querySelector('.explanation').textContent = this.props.question.explanation;
        });
        if (n === i) _oxidizer.$('quiz-page')[0].numCorrect += 1;
        this.showNextButton();
    }
    showExplanation() {}
    /** 
     * @render 
    */ render(props) {
        const { type , question , answers , correct , explanation  } = props.question;
        const submitQuestionBtn = new _oxidizer.BUTTON({
            class: 'quiz-btn submit-button quiz-action-btn',
            textContent: 'Submit',
            onclick () {
                this.parentElement.parentElement.showCorrect();
            }
        }, [
            new _oxidizer.I({
                class: 'bi'
            })
        ]);
        return [
            new _oxidizer.DIV({
                class: 'question-head'
            }, [
                new _oxidizer.H1({
                    class: 'question-title',
                    textContent: question
                }), 
            ]),
            new _oxidizer.DIV({
                class: 'question-body'
            }, [
                ...answers.map((a, qindex)=>new _oxidizer.DIV({
                        class: 'question-answer-container'
                    }, [
                        new _oxidizer.I({
                            class: `qc bi bi-${correct.includes(qindex) ? "check-lg" : "x-lg"}`
                        }),
                        new _oxidizer.BUTTON({
                            class: 'quiz-btn question-answer',
                            textContent: a,
                            qindex,
                            onclick () {
                                if (type === "single-choice") this.parentElement.parentElement.querySelectorAll('.question-answer').forEach((node)=>node.classList.remove('clicked')
                                );
                                this.classList.toggle('clicked');
                                submitQuestionBtn.classList.add('show');
                            }
                        }), 
                    ])
                ),
                submitQuestionBtn,
                new _oxidizer.H6({
                    class: "explanation",
                    textContent: ""
                })
            ])
        ];
    }
}
class QuestionsContainer extends _oxidizer.Component {
    get css() {
        return _oxidizer.css`
            questions-container {
                display:flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items:center;
            }
            .start-quiz {
                margin-top:40px;
                width:100%;
                border-radius:15px;
                border:1px solid black;
                background:rgb(0,0,0,.5);
                color:white;
                text-align:center;
            }
            .start-quiz:hover {
                background:inherit;
                color:black;
                box-shadow: 1px 1px 10px rgb(0,0,0,.7);
            }
            

            .consent-div {
                margin-top:60px;
                display:flex;
                flex-flow:row;
                align-items:center;
            }



            .consent-button {
                background-color:transparent;
                margin:0px 10px;
                padding:0px;
                border:1px solid black;
                border-radius:15px;
                height:26px;
                width:26px;
            }
            .consent-button.clicked {
                background-color:black !important;
            }

            .bi-check-lg {
                font-size:1.75em;
                color:transparent;
                transition:200ms;
            }
            .bi-check-lg.clicked {
                color:white;
                border-radius:15px;
                height:24px !important;
                width:24px !important;
            }

            .consent-label {
                font-size:1.2em;
            }
        `;
    }
    getQuestion(index) {
        return _oxidizer.$('quiz-question')[index];
    }
    nextQuestion() {
        const childqs = _oxidizer.$('quiz-question');
        const outNode = childqs[this.questionIndex];
        const inNode = childqs[this.questionIndex + 1];
        if (outNode) {
            outNode.classList.remove('question-in');
            outNode.classList.add('question-out');
        }
        if (inNode) inNode.classList.add('question-in');
        this.questionIndex += 1;
        if (this.questionIndex > 5) this.innerHTML = `
            <h2 class="ending-message">
                You scored a ${_oxidizer.$('quiz-page')[0].numCorrect} out of 6 on the test.
                <br><br>
                Based on the answers you provided, you might support bill <b>S25824A</b> which <i> 
                <br><br> 
                "Requires comprehensive sexuality instruction for students in grades K-12 which includes a model curricula for comprehensive sexuality education and at a minimum conforms to the content and scope of national sexuality education standards."</i>
                <br><br>

                <a href="https://www.nysenate.gov/legislation/bills/2021/S2584"> Click here to learn more,</a> or <a href="https://www.change.org/p/state-senator-samra-g-brouk-pass-n-y-state-senate-bill-s2584a-to-require-comprehensive-sex-education-in-our-schools-b84e88cf-6e99-4b93-af2f-d1b65e3783a4"> sign the petition! </a>
            </h2>`;
    }
    render(props) {
        this.questionIndex = -1;
        return [
            new _oxidizer.BUTTON({
                class: 'quiz-btn start-quiz active',
                textContent: 'Start Quiz',
                onclick () {
                    _oxidizer.$('.quiz-bgn').addClass('question-out');
                    this.classList.add('question-out');
                    this.parentElement.nextQuestion();
                }
            }),
            new _oxidizer.DIV({
                class: 'consent-div quiz-bgn'
            }, [
                new _oxidizer.BUTTON({
                    class: 'consent-button clicked'
                }, [
                    new _oxidizer.I({
                        class: 'bi bi-check-lg clicked',
                        onclick () {
                            this.classList.toggle('clicked');
                            this.parentElement.classList.toggle('clicked');
                        }
                    })
                ]),
                new _oxidizer.LABEL({
                    class: 'consent-label',
                    textContent: 'I hereby allow my answers to the following questions to be recorded.'
                })
            ]),
            ...props.questions.map((question)=>new QuizQuestion({
                    question
                })
            )
        ];
    }
}
class QuizPage extends _oxidizer.Component {
    get css() {
        return _oxidizer.css`
            @keyframes question-out {
                0% {
                    transform:translateX(0vw);
                }
                100% {
                    transform:translateX(-150vw);
                }
            }
            @keyframes question-in {
            
                100% {
                    transform:translateX(0vw);
                }
            }

            quiz-page {
                display:flex;
                flex-flow:column nowrap;
                height:100%;
                justify-content:center;
                padding-top:100px;
            }
            .quiz-title {
                text-align:center;
                font-size:2.5em;
            }
            .quiz-subtitle {
                text-align:center;
                font-size:1.5em;
            }
            .question-out {
                animation: question-out .5s ease-in-out;
                animation-fill-mode: forwards;
            }
            .question-in {
                animation: question-in .5s ease-in-out;
                animation-fill-mode: forwards;
            }

            .ending-message {
                animation: show-button .3s ease-in-out;
                animation-fill-mode:forwards;
                margin:30px;
                text-align:center;
                font-size:1.8em;

            }
        `;
    }
    render(props) {
        this.numCorrect = 0;
        const questions = props.questions;
        return [
            new _oxidizer.DIV([
                new _oxidizer.H1({
                    class: 'quiz-bgn quiz-title',
                    textContent: 'Sex Education Policy Quiz'
                }),
                new _oxidizer.HR({
                    class: 'quiz-bgn'
                }),
                new _oxidizer.H3({
                    class: 'quiz-bgn quiz-subtitle',
                    textContent: 'Find out where you stand on Sexual Education policy with our quiz.'
                })
            ]),
            new QuestionsContainer({
                questions
            })
        ];
    }
}
exports.default = QuizPage;

},{"oxidizer":"4sMFI","../../data.mjs":"fxPPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9WHJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _oxidizer = require("oxidizer");
class AboutPage extends _oxidizer.Component {
    get css() {
        return _oxidizer.css`
            about-page {
                display:flex;
                padding-top:180px;
                height:100%;
                width:100%;
                flex-flow: column nowrap;
                align-items: center;                
            }
            .about-p {
                margin:30px;
                font-size: 1.5em;
            }
        `;
    }
    render(props) {
        return [
            new _oxidizer.H1({
                class: 'about-head'
            }, [
                "About Us"
            ]),
            new _oxidizer.DIV({
                class: 'about-body'
            }, [
                new _oxidizer.P({
                    class: 'about-p'
                }, [
                    `We are students from Manhattanville College advocating for inclusive sex education for all. We believe inclusive sex education needs to include people with disabilities and people in the LGBTQ+ community. We also believe sex education needs to include topics of consent and sexual assault, and forming healthy relationships instead of unhealthy relationships that lead to abuse.`
                ])
            ]), 
        ];
    }
}
exports.default = AboutPage;

},{"oxidizer":"4sMFI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFuFL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styles", ()=>styles
);
var _oxidizer = require("oxidizer");
var _dataMjs = require("./data.mjs");
var _dataMjsDefault = parcelHelpers.interopDefault(_dataMjs);
const props = {
    bgDuration: 500,
    //bg : 'top, #f86b6b 0%,#fefa81 16%,#8afc8a 32%,#98fffd 50%,#a5a8ff 66%,#ff89fd 82%,#ff8181 100%',
    bg: 'top, #f86b6b 0%,#fefa81 16%,#8afc8a 32%,#ff89fd 82%,#ff8181 100%',
    font: "'Raleway', sans-serif"
};
const bsColors = _dataMjsDefault.default.bootstrap.colors;
const styles = _oxidizer.css`

    /* W3C */
    @keyframes fun-time-awesome {
        0% {background-position: left top;}
        100% {background-position: left bottom;}

    }

    /* Firefox */
    @-moz-keyframes fun-time-awesome {
        0% {background-position: left top;}
        100% {background-position: left bottom;}
    }

    /* Chrome, Safari */
    @-webkit-keyframes fun-time-awesome {
        0% {background-position: left top;}
        100% {background-position: left bottom;}
    }

    :root {
        font-family: ${props.font};
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: ${props.font};
    }

    body {
        font-family: ${props.font};

        /* W3C */
        background: linear-gradient(${props.bg});

        /* Firefox */
        background: -moz-linear-gradient(${props.bg});

        /* Chrome,Safari4+ */
        background: -webkit-gradient(${props.bg});

        /* Chrome10+,Safari5.1+ */
        background: -webkit-linear-gradient(${props.bg});

        background-size: 1000%;
        -moz-background-size: 1000%;
        -webkit-background-size: 1000%;	

        /* W3C */
        animation-name: fun-time-awesome;
        animation-duration: ${props.bgDuration}s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-play-state: running;

    }

    hr {
        width:90%;
        background: black;
        height: 1px;
        border: 0px;
    }


    .flxrow {
        display:flex;
        flex-flow: row nowrap;
    }
    .flxcol {
        display:flex;
        flex-flow: column nowrap;
    }

    button {
        cursor: pointer;
    }

    h1,h2,h3,h4,h5,h6 {
        margin:0px;
    }

    .btn {
        background: transparent;
        color:white;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid white;
        font-family: inherit;
        transition: all 200ms ease 0s;
    }

    .btn.active {
        background: white;
        color:black;
    }

    .btn:hover {
        transform:scale(1.05);
        opacity:.9;
    }

    /* ::-webkit-scrollbar {
        width:0px;
        transition:300ms;
    } */
`;

},{"oxidizer":"4sMFI","./data.mjs":"fxPPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d5kvp","igcvL"], "igcvL", "parcelRequirea121")

//# sourceMappingURL=index.5baa4167.js.map
