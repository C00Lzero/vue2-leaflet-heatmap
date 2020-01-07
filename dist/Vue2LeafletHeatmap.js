(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("leaflet"), require("leaflet.heat"), require("vue2-leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["leaflet", "leaflet.heat", "vue2-leaflet"], factory);
	else if(typeof exports === 'object')
		exports["Vue2LeafletHeatmap"] = factory(require("leaflet"), require("leaflet.heat"), require("vue2-leaflet"));
	else
		root["Vue2LeafletHeatmap"] = factory(root["leaflet"], root["leaflet.heat"], root["vue2-leaflet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(1)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(4),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_leaflet__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_heat__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet_heat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet_heat__);
//
//
//
//
//
//




const props = {
  latLng: {
    type: Array,
    default: () => [],
    custom: false
  },
  minOpacity: {
    type: Number,
    custom: true,
    default: 0.05
  },
  maxZoom: {
    type: Number,
    custom: true,
    default: 18
  },
  radius: {
    type: Number,
    custom: true,
    default: 25
  },
  blur: {
    type: Number,
    custom: true,
    default: 15
  },
  max: {
    type: Number,
    custom: true,
    default: 1.0
  },
  visible: {
    type: Boolean,
    custom: true,
    default: true
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LHeatmap",
  props,
  data() {
    return {
      ready: false
    };
  },
  mounted() {
    const options = {};
    if (this.minOpacity) {
      options.minOpacity = this.minOpacity;
    }
    if (this.maxZoom) {
      options.maxZoom = this.maxZoom;
    }
    if (this.radius) {
      options.radius = this.radius;
    }
    if (this.blur) {
      options.blur = this.blur;
    }
    if (this.max) {
      options.max = this.max;
    }
    this.mapObject = L.heatLayer(this.latLng, options);
    __WEBPACK_IMPORTED_MODULE_1_leaflet__["DomEvent"].on(this.mapObject, this.$listeners);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vue2_leaflet__["propsBinder"])(this, this.mapObject, props);
    this.ready = true;
    this.parentContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vue2_leaflet__["findRealParent"])(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
  },
  beforeDestroy() {
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setMinOpacity(newVal) {
      this.mapObject.setOptions({ minOpacity: newVal });
    },
    setMaxZoom(newVal) {
      this.mapObject.setOptions({ maxZoom: newVal });
    },
    setRadius(newVal) {
      this.mapObject.setOptions({ radius: newVal });
    },
    setBlur(newVal) {
      this.mapObject.setOptions({ blur: newVal });
    },
    setMax(newVal) {
      this.mapObject.setOptions({ max: newVal });
    },
    setVisible(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (newVal) {
        this.parentContainer.addLayer(this);
      } else {
        this.parentContainer.removeLayer(this);
      }
    },
    addLatLng(value) {
      this.mapObject.addLatLng(value);
    }
  }
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "display": "none"
    }
  }, [(_vm.ready) ? _vm._t("default") : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("leaflet.heat");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue2-leaflet");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});
//# sourceMappingURL=Vue2LeafletHeatmap.js.map