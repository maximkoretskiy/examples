(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jssIsolate"] = factory();
	else
		root["jssIsolate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var sheet = void 0;
	  var resetRule = void 0;
	  var selectors = [];
	  return function (rule) {
	    var options = rule.options;

	    if (options.sheet.options.isolate === false) return;
	    if (options.sheet === sheet) return;
	    if (rule.type !== 'regular') return;
	    if (options.parent && options.parent.type === 'keyframe') return;
	    if (rule.style && rule.style.isolate === false) {
	      delete rule.style.isolate;
	      return;
	    }
	    if (!sheet && options.jss) {
	      sheet = options.jss.createStyleSheet({}, { link: true });
	      resetRule = sheet.createRule('reset', _reset2.default);
	      sheet.attach();
	    }
	    if (selectors.indexOf(rule.selector) === -1) {
	      selectors.push(rule.selector);
	    }
	    setSelector(resetRule, selectors);
	  };
	};

	var _reset = __webpack_require__(1);

	var _reset2 = _interopRequireDefault(_reset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var debounce = function debounce(fn) {
	  var timeoutId = void 0;
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    clearTimeout(timeoutId);
	    timeoutId = setTimeout(function () {
	      return fn.apply(undefined, args);
	    });
	  };
	};

	var setSelector = debounce(function (rule, selectors) {
	  return rule.selector = selectors.join(',\n');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'border-collapse': 'separate',
	  'border-spacing': '0',
	  'caption-side': 'top',
	  'cursor': 'auto',
	  'direction': 'ltr',
	  'empty-cells': 'show',
	  'font-family': 'serif',
	  'font-size': 'medium',
	  'font-style': 'normal',
	  'font-variant': 'normal',
	  'font-weight': 'normal',
	  'font-stretch': 'normal',
	  'line-height': 'normal',
	  'hyphens': 'none',
	  'letter-spacing': 'normal',
	  'list-style': 'disc outside none',
	  'tab-size': '8',
	  'text-align': 'left',
	  'text-align-last': 'auto',
	  'text-indent': '0',
	  'text-shadow': 'none',
	  'text-transform': 'none',
	  'visibility': 'visible',
	  'white-space': 'normal',
	  'widows': '2',
	  'word-spacing': 'normal',
	  isolate: false
	};

/***/ }
/******/ ])
});
;