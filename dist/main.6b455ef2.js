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
})({"QaPd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dialog;
function Dialog() {
  var dialogs = document.querySelectorAll(".showDialog");
  var closeDialogs = document.querySelectorAll(".close-widnowBtn");
  var window = document.querySelector("body");
  var dialogBox;
  dialogs.forEach(function (dialog) {
    dialog.addEventListener("click", function (e) {
      var dialogBox = document.querySelector(".".concat(e.target.closest(".showDialog").dataset.id));
      dialogBox.show();
    });
  });
  closeDialogs.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.target.closest(".myDialog").close();
    });
  });
  window.addEventListener("click", function (e) {
    if (e.target.closest(".showDialog") == null) {
      dialogBox.close();
    } else {
      dialogBox = document.querySelector(".".concat(e.target.closest(".showDialog").dataset.id));
    }
  });
}
},{}],"Ol8I":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HideMenu;
function HideMenu() {
  var headerNavBtn = document.querySelector(".menu-btn");
  var crossbtn = document.querySelector(".make-hide");
  var headerMenu = document.querySelector(".position-absolute");
  headerNavBtn.addEventListener("click", function () {
    headerMenu.classList.add("display-flex");
  });
  crossbtn.addEventListener("click", function () {
    headerMenu.classList.remove("display-flex");
  });
}
},{}],"v8cP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StickyHeader;
function StickyHeader() {
  var brandSection = document.querySelector(".brand-section");
  var heroSection = document.querySelector(".hero-section");
  var header = document.querySelector(".header");
  var options = {
    root: null,
    threshold: 0.1
  };
  function callBackFunction(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        header.classList.add("header-box");
      }
    });
  }
  function callBackFunction2(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        header.classList.remove("header-box");
      }
    });
  }
  var obeserver = new IntersectionObserver(callBackFunction, options);
  var obeserver2 = new IntersectionObserver(callBackFunction2, options);
  obeserver.observe(brandSection);
  obeserver2.observe(heroSection);
}
},{}],"Gmwt":[function(require,module,exports) {
"use strict";

var _dialog = _interopRequireDefault(require("./dialog.js"));
var _menu = _interopRequireDefault(require("./menu.js"));
var _stickyMenu = _interopRequireDefault(require("./stickyMenu.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// console.log(heroSection);

// this function call is for work of dialog open and close module
(0, _dialog.default)();

// this function will add the functionality to hide or unhide the menu on small screen
(0, _menu.default)();

// this function will add the functionality to the header to become fixed when we scroll
(0, _stickyMenu.default)();
},{"./dialog.js":"QaPd","./menu.js":"Ol8I","./stickyMenu.js":"v8cP"}]},{},["Gmwt"], null)
//# sourceMappingURL=/main.6b455ef2.js.map