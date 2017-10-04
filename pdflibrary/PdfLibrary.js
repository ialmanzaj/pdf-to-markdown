(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PdfLibrary", [], factory);
	else if(typeof exports === 'object')
		exports["PdfLibrary"] = factory();
	else
		root["PdfLibrary"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Converter = undefined;
	
	var _Converter = __webpack_require__(1);
	
	var _Converter2 = _interopRequireDefault(_Converter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Converter = _Converter2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _AppState = __webpack_require__(22);
	
	var _AppState2 = _interopRequireDefault(_AppState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Converter = function () {
		function Converter() {
			(0, _classCallCheck3.default)(this, Converter);
	
			this.appState = new _AppState2.default();
			this._txt = "";
		}
	
		(0, _createClass3.default)(Converter, [{
			key: "hello",
			value: function hello() {
				return "hello world";
			}
		}, {
			key: "uploadFile",
			value: function uploadFile(fileBuffer) {
				this.appState.storeFileBuffer = fileBuffer;
			}
		}, {
			key: "convert",
			value: function convert() {
				var loading = new Loading(appState.fileBuffer);
	
				//parse pdf
				loading.parsePdf();
	
				//store pages 
				appState.storePdfPagesFunction = loading.getPages();
	
				//convert pages to markdown
				this._txt = new Result(appState.pages, appState.transformations).convertToMarkdown();
			}
		}, {
			key: "text",
			get: function get() {
				return this._txt;
			}
		}]);
		return Converter;
	}();
	
	exports.default = Converter;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(4);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	var $Object = __webpack_require__(9).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(17), 'Object', { defineProperty: __webpack_require__(13).f });


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8);
	var core = __webpack_require__(9);
	var ctx = __webpack_require__(10);
	var hide = __webpack_require__(12);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(13);
	var createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(14);
	var IE8_DOM_DEFINE = __webpack_require__(16);
	var toPrimitive = __webpack_require__(20);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function () {
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	var document = __webpack_require__(8).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.View = undefined;
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _enumify = __webpack_require__(88);
	
	var _CalculateGlobalStats = __webpack_require__(89);
	
	var _CalculateGlobalStats2 = _interopRequireDefault(_CalculateGlobalStats);
	
	var _CompactLines = __webpack_require__(181);
	
	var _CompactLines2 = _interopRequireDefault(_CompactLines);
	
	var _RemoveRepetitiveElements = __webpack_require__(207);
	
	var _RemoveRepetitiveElements2 = _interopRequireDefault(_RemoveRepetitiveElements);
	
	var _VerticalToHorizontal = __webpack_require__(208);
	
	var _VerticalToHorizontal2 = _interopRequireDefault(_VerticalToHorizontal);
	
	var _DetectTOC = __webpack_require__(209);
	
	var _DetectTOC2 = _interopRequireDefault(_DetectTOC);
	
	var _DetectListItems = __webpack_require__(218);
	
	var _DetectListItems2 = _interopRequireDefault(_DetectListItems);
	
	var _DetectHeaders = __webpack_require__(219);
	
	var _DetectHeaders2 = _interopRequireDefault(_DetectHeaders);
	
	var _GatherBlocks = __webpack_require__(220);
	
	var _GatherBlocks2 = _interopRequireDefault(_GatherBlocks);
	
	var _DetectCodeQuoteBlocks = __webpack_require__(223);
	
	var _DetectCodeQuoteBlocks2 = _interopRequireDefault(_DetectCodeQuoteBlocks);
	
	var _DetectListLevels = __webpack_require__(224);
	
	var _DetectListLevels2 = _interopRequireDefault(_DetectListLevels);
	
	var _ToTextBlocks = __webpack_require__(225);
	
	var _ToTextBlocks2 = _interopRequireDefault(_ToTextBlocks);
	
	var _ToMarkdown = __webpack_require__(227);
	
	var _ToMarkdown2 = _interopRequireDefault(_ToMarkdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Holds the state of the Application
	var AppState = function () {
	    function AppState() {
	        (0, _classCallCheck3.default)(this, AppState);
	
	        this.mainView = View.UPLOAD;
	        this.fileBuffer;
	        this.metadata;
	        this.pages = [];
	        this.transformations;
	
	        //bind functions
	        this.storeFileBuffer = this.storeFileBuffer.bind(this);
	        this.storePdfPages = this.storePdfPages.bind(this);
	        this.switchMainView = this.switchMainView.bind(this);
	    }
	
	    // the uploaded pdf as file buffer
	
	
	    (0, _createClass3.default)(AppState, [{
	        key: 'storeFileBuffer',
	        value: function storeFileBuffer(fileBuffer) {
	            this.fileBuffer = fileBuffer;
	            this.mainView = View.LOADING;
	        }
	    }, {
	        key: 'storePdfPages',
	        value: function storePdfPages(metadata, fontMap, pages) {
	            this.metadata = metadata;
	            this.pages = pages;
	            this.fileBuffer = null;
	            this.mainView = View.RESULT;
	
	            this.transformations = [new _CalculateGlobalStats2.default(fontMap), new _CompactLines2.default(), new _RemoveRepetitiveElements2.default(), new _VerticalToHorizontal2.default(), new _DetectTOC2.default(), new _DetectHeaders2.default(), new _DetectListItems2.default(), new _GatherBlocks2.default(), new _DetectCodeQuoteBlocks2.default(), new _DetectListLevels2.default(), new _ToTextBlocks2.default(), new _ToMarkdown2.default()];
	        }
	    }, {
	        key: 'switchMainView',
	        value: function switchMainView(view) {
	            this.mainView = view;
	        }
	    }]);
	    return AppState;
	}();
	
	exports.default = AppState;
	
	var View = exports.View = function (_Enum) {
	    (0, _inherits3.default)(View, _Enum);
	
	    function View() {
	        (0, _classCallCheck3.default)(this, View);
	        return (0, _possibleConstructorReturn3.default)(this, (View.__proto__ || (0, _getPrototypeOf2.default)(View)).apply(this, arguments));
	    }
	
	    return View;
	}(_enumify.Enum);
	
	View.initEnum(['UPLOAD', 'LOADING', 'RESULT', 'DEBUG']);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(9).Object.getPrototypeOf;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(26);
	var $getPrototypeOf = __webpack_require__(28);
	
	__webpack_require__(33)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(29);
	var toObject = __webpack_require__(26);
	var IE_PROTO = __webpack_require__(30)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(31)('keys');
	var uid = __webpack_require__(32);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(7);
	var core = __webpack_require__(9);
	var fails = __webpack_require__(18);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(35);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(36);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(65);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(38);
	__webpack_require__(60);
	module.exports = __webpack_require__(64).f('iterator');


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(39)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(41)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40);
	var defined = __webpack_require__(27);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(42);
	var $export = __webpack_require__(7);
	var redefine = __webpack_require__(43);
	var hide = __webpack_require__(12);
	var has = __webpack_require__(29);
	var Iterators = __webpack_require__(44);
	var $iterCreate = __webpack_require__(45);
	var setToStringTag = __webpack_require__(58);
	var getPrototypeOf = __webpack_require__(28);
	var ITERATOR = __webpack_require__(59)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(46);
	var descriptor = __webpack_require__(21);
	var setToStringTag = __webpack_require__(58);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(59)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(14);
	var dPs = __webpack_require__(47);
	var enumBugKeys = __webpack_require__(56);
	var IE_PROTO = __webpack_require__(30)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(57).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(13);
	var anObject = __webpack_require__(14);
	var getKeys = __webpack_require__(48);
	
	module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(49);
	var enumBugKeys = __webpack_require__(56);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(29);
	var toIObject = __webpack_require__(50);
	var arrayIndexOf = __webpack_require__(53)(false);
	var IE_PROTO = __webpack_require__(30)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(51);
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(52);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(50);
	var toLength = __webpack_require__(54);
	var toAbsoluteIndex = __webpack_require__(55);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(40);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(8).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(13).f;
	var has = __webpack_require__(29);
	var TAG = __webpack_require__(59)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(31)('wks');
	var uid = __webpack_require__(32);
	var Symbol = __webpack_require__(8).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	var global = __webpack_require__(8);
	var hide = __webpack_require__(12);
	var Iterators = __webpack_require__(44);
	var TO_STRING_TAG = __webpack_require__(59)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(62);
	var step = __webpack_require__(63);
	var Iterators = __webpack_require__(44);
	var toIObject = __webpack_require__(50);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(41)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(59);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	module.exports = __webpack_require__(9).Symbol;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(8);
	var has = __webpack_require__(29);
	var DESCRIPTORS = __webpack_require__(17);
	var $export = __webpack_require__(7);
	var redefine = __webpack_require__(43);
	var META = __webpack_require__(68).KEY;
	var $fails = __webpack_require__(18);
	var shared = __webpack_require__(31);
	var setToStringTag = __webpack_require__(58);
	var uid = __webpack_require__(32);
	var wks = __webpack_require__(59);
	var wksExt = __webpack_require__(64);
	var wksDefine = __webpack_require__(69);
	var enumKeys = __webpack_require__(70);
	var isArray = __webpack_require__(73);
	var anObject = __webpack_require__(14);
	var toIObject = __webpack_require__(50);
	var toPrimitive = __webpack_require__(20);
	var createDesc = __webpack_require__(21);
	var _create = __webpack_require__(46);
	var gOPNExt = __webpack_require__(74);
	var $GOPD = __webpack_require__(76);
	var $DP = __webpack_require__(13);
	var $keys = __webpack_require__(48);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(72).f = $propertyIsEnumerable;
	  __webpack_require__(71).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(42)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(32)('meta');
	var isObject = __webpack_require__(15);
	var has = __webpack_require__(29);
	var setDesc = __webpack_require__(13).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(18)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8);
	var core = __webpack_require__(9);
	var LIBRARY = __webpack_require__(42);
	var wksExt = __webpack_require__(64);
	var defineProperty = __webpack_require__(13).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(48);
	var gOPS = __webpack_require__(71);
	var pIE = __webpack_require__(72);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(52);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(50);
	var gOPN = __webpack_require__(75).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(49);
	var hiddenKeys = __webpack_require__(56).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(72);
	var createDesc = __webpack_require__(21);
	var toIObject = __webpack_require__(50);
	var toPrimitive = __webpack_require__(20);
	var has = __webpack_require__(29);
	var IE8_DOM_DEFINE = __webpack_require__(16);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(17) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 77 */
/***/ (function(module, exports) {



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(69)('asyncIterator');


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(69)('observable');


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(81);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(85);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(35);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	module.exports = __webpack_require__(9).Object.setPrototypeOf;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(7);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(84).set });


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(15);
	var anObject = __webpack_require__(14);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(10)(Function.call, __webpack_require__(76).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	var $Object = __webpack_require__(9).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(7);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(46) });


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.copyProperties = copyProperties;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var INITIALIZED = Symbol();
	
	/**
	 * This is an abstract class that is not intended to be
	 * used directly. Extend it to turn your class into an enum
	 * (initialization is performed via `MyClass.initEnum()`).
	 */
	
	var Enum = exports.Enum = function () {
	    /**
	     * `initEnum()` closes the class. Then calling this constructor
	     * throws an exception.
	     * 
	     * If your subclass has a constructor then you can control
	     * what properties are added to `this` via the argument you
	     * pass to `super()`. No arguments are fine, too.
	     */
	
	    function Enum() {
	        var instanceProperties = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
	
	        _classCallCheck(this, Enum);
	
	        // new.target would be better than this.constructor,
	        // but isn’t supported by Babel
	        if ({}.hasOwnProperty.call(this.constructor, INITIALIZED)) {
	            throw new Error('Enum classes can’t be instantiated');
	        }
	        if ((typeof instanceProperties === 'undefined' ? 'undefined' : _typeof(instanceProperties)) === 'object' && instanceProperties !== null) {
	            copyProperties(this, instanceProperties);
	        }
	    }
	    /**
	     * Set up the enum, close the class.
	     * 
	     * @param arg Either an object whose properties provide the names
	     * and values (which must be mutable objects) of the enum constants.
	     * Or an Array whose elements are used as the names of the enum constants
	     * The values are create by instantiating the current class.
	     */
	
	    _createClass(Enum, [{
	        key: 'toString',
	
	        /**
	         * Default `toString()` method for enum constant.
	         */
	        value: function toString() {
	            return this.constructor.name + '.' + this.name;
	        }
	    }], [{
	        key: 'initEnum',
	        value: function initEnum(arg) {
	            Object.defineProperty(this, 'enumValues', {
	                value: [],
	                configurable: false,
	                writable: false,
	                enumerable: true
	            });
	            if (Array.isArray(arg)) {
	                this._enumValuesFromArray(arg);
	            } else {
	                this._enumValuesFromObject(arg);
	            }
	            Object.freeze(this.enumValues);
	            this[INITIALIZED] = true;
	            return this;
	        }
	    }, {
	        key: '_enumValuesFromArray',
	        value: function _enumValuesFromArray(arr) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var key = _step.value;
	
	                    this._pushEnumValue(new this(), key);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_enumValuesFromObject',
	        value: function _enumValuesFromObject(obj) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = Object.keys(obj)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var key = _step2.value;
	
	                    var value = new this(obj[key]);
	                    this._pushEnumValue(value, key);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_pushEnumValue',
	        value: function _pushEnumValue(enumValue, name) {
	            enumValue.name = name;
	            enumValue.ordinal = this.enumValues.length;
	            Object.defineProperty(this, name, {
	                value: enumValue,
	                configurable: false,
	                writable: false,
	                enumerable: true
	            });
	            this.enumValues.push(enumValue);
	        }
	
	        /**
	         * Given the name of an enum constant, return its value.
	         */
	
	    }, {
	        key: 'enumValueOf',
	        value: function enumValueOf(name) {
	            return this.enumValues.find(function (x) {
	                return x.name === name;
	            });
	        }
	
	        /**
	         * Make enum classes iterable
	         */
	
	    }, {
	        key: Symbol.iterator,
	        value: function value() {
	            return this.enumValues[Symbol.iterator]();
	        }
	    }]);
	
	    return Enum;
	}();
	
	function copyProperties(target, source) {
	    // Ideally, we’d use Reflect.ownKeys() here,
	    // but I don’t want to depend on a polyfill
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;
	
	    try {
	        for (var _iterator3 = Object.getOwnPropertyNames(source)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var key = _step3.value;
	
	            var desc = Object.getOwnPropertyDescriptor(source, key);
	            Object.defineProperty(target, key, desc);
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }
	
	    return target;
	}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _keys = __webpack_require__(90);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _stringify = __webpack_require__(93);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _map = __webpack_require__(100);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ToTextItemTransformation = __webpack_require__(124);
	
	var _ToTextItemTransformation2 = _interopRequireDefault(_ToTextItemTransformation);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _WordFormat = __webpack_require__(180);
	
	var _WordFormat2 = _interopRequireDefault(_WordFormat);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CalculateGlobalStats = function (_ToTextItemTransforma) {
	    (0, _inherits3.default)(CalculateGlobalStats, _ToTextItemTransforma);
	
	    function CalculateGlobalStats(fontMap) {
	        (0, _classCallCheck3.default)(this, CalculateGlobalStats);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (CalculateGlobalStats.__proto__ || (0, _getPrototypeOf2.default)(CalculateGlobalStats)).call(this, "Calculate Statistics"));
	
	        _this.fontMap = fontMap;
	        return _this;
	    }
	
	    (0, _createClass3.default)(CalculateGlobalStats, [{
	        key: 'transform',
	        value: function transform(parseResult) {
	            // Parse heights
	            var heightToOccurrence = {};
	            var fontToOccurrence = {};
	            var maxHeight = 0;
	            var maxHeightFont;
	            parseResult.pages.forEach(function (page) {
	                page.items.forEach(function (item) {
	                    heightToOccurrence[item.height] = heightToOccurrence[item.height] ? heightToOccurrence[item.height] + 1 : 1;
	                    fontToOccurrence[item.font] = fontToOccurrence[item.font] ? fontToOccurrence[item.font] + 1 : 1;
	                    if (item.height > maxHeight) {
	                        maxHeight = item.height;
	                        maxHeightFont = item.font;
	                    }
	                });
	            });
	            var mostUsedHeight = parseInt(getMostUsedKey(heightToOccurrence));
	            var mostUsedFont = getMostUsedKey(fontToOccurrence);
	
	            // Parse line distances
	            var distanceToOccurrence = {};
	            parseResult.pages.forEach(function (page) {
	                var lastItemOfMostUsedHeight;
	                page.items.forEach(function (item) {
	                    if (item.height == mostUsedHeight && item.text.trim().length > 0) {
	                        if (lastItemOfMostUsedHeight && item.y != lastItemOfMostUsedHeight.y) {
	                            var distance = lastItemOfMostUsedHeight.y - item.y;
	                            if (distance > 0) {
	                                distanceToOccurrence[distance] = distanceToOccurrence[distance] ? distanceToOccurrence[distance] + 1 : 1;
	                            }
	                        }
	                        lastItemOfMostUsedHeight = item;
	                    } else {
	                        lastItemOfMostUsedHeight = null;
	                    }
	                });
	            });
	            var mostUsedDistance = parseInt(getMostUsedKey(distanceToOccurrence));
	
	            var fontIdToName = [];
	            var fontToFormats = new _map2.default();
	            this.fontMap.forEach(function (value, key) {
	                fontIdToName.push(key + " = " + value.name);
	                var fontName = value.name.toLowerCase();
	                var format;
	                if (key == mostUsedFont) {
	                    format = null;
	                } else if (fontName.includes('bold') && (fontName.includes('oblique') || fontName.includes('italic'))) {
	                    format = _WordFormat2.default.BOLD_OBLIQUE;
	                } else if (fontName.includes('bold')) {
	                    format = _WordFormat2.default.BOLD;
	                } else if (fontName.includes('oblique') || fontName.includes('italic')) {
	                    format = _WordFormat2.default.OBLIQUE;
	                } else if (fontName === maxHeightFont) {
	                    format = _WordFormat2.default.BOLD;
	                }
	                if (format) {
	                    fontToFormats.set(key, format.name);
	                }
	            });
	            fontIdToName.sort();
	
	            //Make a copy of the originals so all following transformation don't modify them
	            var newPages = parseResult.pages.map(function (page) {
	                return (0, _extends3.default)({}, page, {
	                    items: page.items.map(function (textItem) {
	                        return (0, _extends3.default)({}, textItem);
	                    })
	                });
	            });
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult, {
	                pages: newPages,
	                globals: {
	                    mostUsedHeight: mostUsedHeight,
	                    mostUsedFont: mostUsedFont,
	                    mostUsedDistance: mostUsedDistance,
	                    maxHeight: maxHeight,
	                    maxHeightFont: maxHeightFont,
	                    fontToFormats: fontToFormats
	                },
	                messages: ['Items per height: ' + (0, _stringify2.default)(heightToOccurrence), 'Items per font: ' + (0, _stringify2.default)(fontToOccurrence), 'Items per distance: ' + (0, _stringify2.default)(distanceToOccurrence), 'Fonts:' + (0, _stringify2.default)(fontIdToName)]
	            }));
	        }
	    }]);
	    return CalculateGlobalStats;
	}(_ToTextItemTransformation2.default);
	
	exports.default = CalculateGlobalStats;
	
	
	function getMostUsedKey(keyToOccurrence) {
	    var maxOccurence = 0;
	    var maxKey;
	    (0, _keys2.default)(keyToOccurrence).map(function (element) {
	        if (!maxKey || keyToOccurrence[element] > maxOccurence) {
	            maxOccurence = keyToOccurrence[element];
	            maxKey = element;
	        }
	    });
	    return maxKey;
	}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(92);
	module.exports = __webpack_require__(9).Object.keys;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(26);
	var $keys = __webpack_require__(48);
	
	__webpack_require__(33)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(9);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(96);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(98);
	module.exports = __webpack_require__(9).Object.assign;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(7);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(99) });


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(48);
	var gOPS = __webpack_require__(71);
	var pIE = __webpack_require__(72);
	var toObject = __webpack_require__(26);
	var IObject = __webpack_require__(51);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(18)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(77);
	__webpack_require__(38);
	__webpack_require__(60);
	__webpack_require__(102);
	__webpack_require__(117);
	__webpack_require__(120);
	__webpack_require__(122);
	module.exports = __webpack_require__(9).Map;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(103);
	var validate = __webpack_require__(112);
	var MAP = 'Map';
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(113)(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, strong, true);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP = __webpack_require__(13).f;
	var create = __webpack_require__(46);
	var redefineAll = __webpack_require__(104);
	var ctx = __webpack_require__(10);
	var anInstance = __webpack_require__(105);
	var forOf = __webpack_require__(106);
	var $iterDefine = __webpack_require__(41);
	var step = __webpack_require__(63);
	var setSpecies = __webpack_require__(111);
	var DESCRIPTORS = __webpack_require__(17);
	var fastKey = __webpack_require__(68).fastKey;
	var validate = __webpack_require__(112);
	var SIZE = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function () {
	        return validate(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(12);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(10);
	var call = __webpack_require__(107);
	var isArrayIter = __webpack_require__(108);
	var anObject = __webpack_require__(14);
	var toLength = __webpack_require__(54);
	var getIterFn = __webpack_require__(109);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(44);
	var ITERATOR = __webpack_require__(59)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(110);
	var ITERATOR = __webpack_require__(59)('iterator');
	var Iterators = __webpack_require__(44);
	module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(52);
	var TAG = __webpack_require__(59)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(8);
	var core = __webpack_require__(9);
	var dP = __webpack_require__(13);
	var DESCRIPTORS = __webpack_require__(17);
	var SPECIES = __webpack_require__(59)('species');
	
	module.exports = function (KEY) {
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(8);
	var $export = __webpack_require__(7);
	var meta = __webpack_require__(68);
	var fails = __webpack_require__(18);
	var hide = __webpack_require__(12);
	var redefineAll = __webpack_require__(104);
	var forOf = __webpack_require__(106);
	var anInstance = __webpack_require__(105);
	var isObject = __webpack_require__(15);
	var setToStringTag = __webpack_require__(58);
	var dP = __webpack_require__(13).f;
	var each = __webpack_require__(114)(0);
	var DESCRIPTORS = __webpack_require__(17);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function (target, iterable) {
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base();
	      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
	        anInstance(this, C, KEY);
	        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    IS_WEAK || dP(C.prototype, 'size', {
	      get: function () {
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(10);
	var IObject = __webpack_require__(51);
	var toObject = __webpack_require__(26);
	var toLength = __webpack_require__(54);
	var asc = __webpack_require__(115);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this);
	    var self = IObject(O);
	    var f = ctx(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(116);
	
	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	var isArray = __webpack_require__(73);
	var SPECIES = __webpack_require__(59)('species');
	
	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(7);
	
	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(118)('Map') });


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(110);
	var from = __webpack_require__(119);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(106);
	
	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	__webpack_require__(121)('Map');


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(7);
	
	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { of: function of() {
	    var length = arguments.length;
	    var A = Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
	};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	__webpack_require__(123)('Map');


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(7);
	var aFunction = __webpack_require__(11);
	var ctx = __webpack_require__(10);
	var forOf = __webpack_require__(106);
	
	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    var mapFn = arguments[1];
	    var mapping, A, n, cb;
	    aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = ctx(mapFn, arguments[2], 2);
	      forOf(source, false, function (nextItem) {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
	};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Transformation2 = __webpack_require__(161);
	
	var _Transformation3 = _interopRequireDefault(_Transformation2);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _TextItem = __webpack_require__(163);
	
	var _TextItem2 = _interopRequireDefault(_TextItem);
	
	var _TextItemPageView = __webpack_require__(165);
	
	var _TextItemPageView2 = _interopRequireDefault(_TextItemPageView);
	
	var _Annotation = __webpack_require__(179);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Abstract class for transformations producing TextItem(s) to be shown in the TextItemPageView
	var ToTextItemTransformation = function (_Transformation) {
	    (0, _inherits3.default)(ToTextItemTransformation, _Transformation);
	
	    function ToTextItemTransformation(name) {
	        (0, _classCallCheck3.default)(this, ToTextItemTransformation);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (ToTextItemTransformation.__proto__ || (0, _getPrototypeOf2.default)(ToTextItemTransformation)).call(this, name, _TextItem2.default.name));
	
	        if (_this.constructor === ToTextItemTransformation) {
	            throw new TypeError("Can not construct abstract class.");
	        }
	        _this.showWhitespaces = false;
	        return _this;
	    }
	
	    (0, _createClass3.default)(ToTextItemTransformation, [{
	        key: 'showModificationCheckbox',
	        value: function showModificationCheckbox() {
	            return true;
	        }
	    }, {
	        key: 'createPageView',
	        value: function createPageView(page, modificationsOnly) {
	            return _react2.default.createElement(_TextItemPageView2.default, {
	                key: page.index,
	                page: page,
	                modificationsOnly: modificationsOnly,
	                showWhitespaces: this.showWhitespaces });
	        }
	    }, {
	        key: 'completeTransform',
	        value: function completeTransform(parseResult) {
	            // The usual cleanup
	            parseResult.messages = [];
	            parseResult.pages.forEach(function (page) {
	                page.items = page.items.filter(function (item) {
	                    return !item.annotation || item.annotation !== _Annotation.REMOVED_ANNOTATION;
	                });
	                page.items.forEach(function (item) {
	                    return item.annotation = null;
	                });
	            });
	            return parseResult;
	        }
	    }]);
	    return ToTextItemTransformation;
	}(_Transformation3.default);
	
	exports.default = ToTextItemTransformation;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(126);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(127);
	
	var ReactBaseClasses = __webpack_require__(128);
	var ReactChildren = __webpack_require__(137);
	var ReactDOMFactories = __webpack_require__(145);
	var ReactElement = __webpack_require__(139);
	var ReactPropTypes = __webpack_require__(152);
	var ReactVersion = __webpack_require__(157);
	
	var createReactClass = __webpack_require__(158);
	var onlyChild = __webpack_require__(160);
	
	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;
	
	if (true) {
	  var lowPriorityWarning = __webpack_require__(136);
	  var canDefineProperty = __webpack_require__(133);
	  var ReactElementValidator = __webpack_require__(146);
	  var didWarnPropTypesDeprecated = false;
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}
	
	var __spread = _assign;
	var createMixin = function (mixin) {
	  return mixin;
	};
	
	if (true) {
	  var warnedForSpread = false;
	  var warnedForCreateMixin = false;
	  __spread = function () {
	    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
	    warnedForSpread = true;
	    return _assign.apply(null, arguments);
	  };
	
	  createMixin = function (mixin) {
	    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
	    warnedForCreateMixin = true;
	    return mixin;
	  };
	}
	
	var React = {
	  // Modern
	
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },
	
	  Component: ReactBaseClasses.Component,
	  PureComponent: ReactBaseClasses.PureComponent,
	
	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,
	
	  // Classic
	
	  PropTypes: ReactPropTypes,
	  createClass: createReactClass,
	  createFactory: createFactory,
	  createMixin: createMixin,
	
	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,
	
	  version: ReactVersion,
	
	  // Deprecated hook for JSX spread, don't use this for anything.
	  __spread: __spread
	};
	
	if (true) {
	  var warnedForCreateClass = false;
	  if (canDefineProperty) {
	    Object.defineProperty(React, 'PropTypes', {
	      get: function () {
	        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
	        didWarnPropTypesDeprecated = true;
	        return ReactPropTypes;
	      }
	    });
	
	    Object.defineProperty(React, 'createClass', {
	      get: function () {
	        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
	        warnedForCreateClass = true;
	        return createReactClass;
	      }
	    });
	  }
	
	  // React.DOM factories are deprecated. Wrap these methods so that
	  // invocations of the React.DOM namespace and alert users to switch
	  // to the `react-dom-factories` package.
	  React.DOM = {};
	  var warnedForFactories = false;
	  Object.keys(ReactDOMFactories).forEach(function (factory) {
	    React.DOM[factory] = function () {
	      if (!warnedForFactories) {
	        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
	        warnedForFactories = true;
	      }
	      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
	    };
	  });
	}
	
	module.exports = React;

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(129),
	    _assign = __webpack_require__(127);
	
	var ReactNoopUpdateQueue = __webpack_require__(130);
	
	var canDefineProperty = __webpack_require__(133);
	var emptyObject = __webpack_require__(134);
	var invariant = __webpack_require__(135);
	var lowPriorityWarning = __webpack_require__(136);
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	ReactComponent.prototype.isReactComponent = {};
	
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ?  true ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'setState');
	  }
	};
	
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback, 'forceUpdate');
	  }
	};
	
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (true) {
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactPureComponent(props, context, updater) {
	  // Duplicated from ReactComponent.
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	function ComponentDummy() {}
	ComponentDummy.prototype = ReactComponent.prototype;
	ReactPureComponent.prototype = new ComponentDummy();
	ReactPureComponent.prototype.constructor = ReactPureComponent;
	// Avoid an extra prototype jump for these methods.
	_assign(ReactPureComponent.prototype, ReactComponent.prototype);
	ReactPureComponent.prototype.isPureReactComponent = true;
	
	module.exports = {
	  Component: ReactComponent,
	  PureComponent: ReactPureComponent
	};

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	'use strict';
	
	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */
	
	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;
	
	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;
	
	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }
	
	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';
	
	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame
	
	  throw error;
	}
	
	module.exports = reactProdInvariant;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var warning = __webpack_require__(131);
	
	function warnNoop(publicInstance, callerName) {
	  if (true) {
	    var constructor = publicInstance.constructor;
	     true ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
	  }
	}
	
	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },
	
	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnNoop(publicInstance, 'replaceState');
	  },
	
	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnNoop(publicInstance, 'setState');
	  }
	};
	
	module.exports = ReactNoopUpdateQueue;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(132);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (true) {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var canDefineProperty = false;
	if (true) {
	  try {
	    // $FlowFixMe https://github.com/facebook/flow/issues/285
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}
	
	module.exports = canDefineProperty;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (true) {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var lowPriorityWarning = function () {};
	
	if (true) {
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	module.exports = lowPriorityWarning;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(138);
	var ReactElement = __webpack_require__(139);
	
	var emptyFunction = __webpack_require__(132);
	var traverseAllChildren = __webpack_require__(142);
	
	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;
	
	var userProvidedKeyEscapeRegex = /\/+/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
	
	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func,
	      context = bookKeeping.context;
	
	  func.call(context, child, bookKeeping.count++);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result,
	      keyPrefix = bookKeeping.keyPrefix,
	      func = bookKeeping.func,
	      context = bookKeeping.context;
	
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}
	
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	
	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}
	
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}
	
	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};
	
	module.exports = ReactChildren;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(129);
	
	var invariant = __webpack_require__(135);
	
	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};
	
	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};
	
	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};
	
	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};
	
	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ?  true ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};
	
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	
	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances.
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  // Casting as any so that flow ignores the actual implementation and trusts
	  // it to match the type we declared
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};
	
	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler
	};
	
	module.exports = PooledClass;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(127);
	
	var ReactCurrentOwner = __webpack_require__(140);
	
	var warning = __webpack_require__(131);
	var canDefineProperty = __webpack_require__(133);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	var REACT_ELEMENT_TYPE = __webpack_require__(141);
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	
	var specialPropKeyWarningShown, specialPropRefWarningShown;
	
	function hasValidRef(config) {
	  if (true) {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.ref !== undefined;
	}
	
	function hasValidKey(config) {
	  if (true) {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }
	  return config.key !== undefined;
	}
	
	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    if (!specialPropKeyWarningShown) {
	      specialPropKeyWarningShown = true;
	       true ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}
	
	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    if (!specialPropRefWarningShown) {
	      specialPropRefWarningShown = true;
	       true ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
	    }
	  };
	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}
	
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, no instanceof check
	 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	
	  if (true) {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }
	
	  return element;
	};
	
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
	 */
	ReactElement.createElement = function (type, config, children) {
	  var propName;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;
	
	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    if (true) {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	  if (true) {
	    if (key || ref) {
	      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
	        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
	        if (key) {
	          defineKeyPropWarningGetter(props, displayName);
	        }
	        if (ref) {
	          defineRefPropWarningGetter(props, displayName);
	        }
	      }
	    }
	  }
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};
	
	/**
	 * Return a function that produces ReactElements of a given type.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
	 */
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};
	
	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	
	  return newElement;
	};
	
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
	 */
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;
	
	  // Original props are copied
	  var props = _assign({}, element.props);
	
	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;
	
	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;
	
	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (hasValidKey(config)) {
	      key = '' + config.key;
	    }
	
	    // Remaining properties override existing props
	    var defaultProps;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};
	
	/**
	 * Verifies the object is a ReactElement.
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};
	
	module.exports = ReactElement;

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};
	
	module.exports = ReactCurrentOwner;

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
	
	module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(129);
	
	var ReactCurrentOwner = __webpack_require__(140);
	var REACT_ELEMENT_TYPE = __webpack_require__(141);
	
	var getIteratorFn = __webpack_require__(143);
	var invariant = __webpack_require__(135);
	var KeyEscapeUtils = __webpack_require__(144);
	var warning = __webpack_require__(131);
	
	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	
	/**
	 * This is inlined from ReactElement since this file is shared between
	 * isomorphic and renderers. We could extract this to a
	 *
	 */
	
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */
	
	var didWarnAboutMaps = false;
	
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (component && typeof component === 'object' && component.key != null) {
	    // Explicit key
	    return KeyEscapeUtils.escape(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;
	
	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }
	
	  if (children === null || type === 'string' || type === 'number' ||
	  // The following is inlined from ReactElement. This means we can optimize
	  // some checks. React Fiber also inlines this logic for similar purposes.
	  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }
	
	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (true) {
	          var mapsAsChildrenAddendum = '';
	          if (ReactCurrentOwner.current) {
	            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
	            if (mapsAsChildrenOwnerName) {
	              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
	            }
	          }
	           true ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (true) {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ?  true ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
	    }
	  }
	
	  return subtreeCount;
	}
	
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	
	module.exports = traverseAllChildren;

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	/* global Symbol */
	
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}
	
	module.exports = getIteratorFn;

/***/ }),
/* 144 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */
	
	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = ('' + key).replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	
	  return '$' + escapedString;
	}
	
	/**
	 * Unescape and unwrap key for human-readable display
	 *
	 * @param {string} key to unescape.
	 * @return {string} the unescaped key.
	 */
	function unescape(key) {
	  var unescapeRegex = /(=0|=2)/g;
	  var unescaperLookup = {
	    '=0': '=',
	    '=2': ':'
	  };
	  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
	
	  return ('' + keySubstring).replace(unescapeRegex, function (match) {
	    return unescaperLookup[match];
	  });
	}
	
	var KeyEscapeUtils = {
	  escape: escape,
	  unescape: unescape
	};
	
	module.exports = KeyEscapeUtils;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(139);
	
	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @private
	 */
	var createDOMFactory = ReactElement.createFactory;
	if (true) {
	  var ReactElementValidator = __webpack_require__(146);
	  createDOMFactory = ReactElementValidator.createFactory;
	}
	
	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 *
	 * @public
	 */
	var ReactDOMFactories = {
	  a: createDOMFactory('a'),
	  abbr: createDOMFactory('abbr'),
	  address: createDOMFactory('address'),
	  area: createDOMFactory('area'),
	  article: createDOMFactory('article'),
	  aside: createDOMFactory('aside'),
	  audio: createDOMFactory('audio'),
	  b: createDOMFactory('b'),
	  base: createDOMFactory('base'),
	  bdi: createDOMFactory('bdi'),
	  bdo: createDOMFactory('bdo'),
	  big: createDOMFactory('big'),
	  blockquote: createDOMFactory('blockquote'),
	  body: createDOMFactory('body'),
	  br: createDOMFactory('br'),
	  button: createDOMFactory('button'),
	  canvas: createDOMFactory('canvas'),
	  caption: createDOMFactory('caption'),
	  cite: createDOMFactory('cite'),
	  code: createDOMFactory('code'),
	  col: createDOMFactory('col'),
	  colgroup: createDOMFactory('colgroup'),
	  data: createDOMFactory('data'),
	  datalist: createDOMFactory('datalist'),
	  dd: createDOMFactory('dd'),
	  del: createDOMFactory('del'),
	  details: createDOMFactory('details'),
	  dfn: createDOMFactory('dfn'),
	  dialog: createDOMFactory('dialog'),
	  div: createDOMFactory('div'),
	  dl: createDOMFactory('dl'),
	  dt: createDOMFactory('dt'),
	  em: createDOMFactory('em'),
	  embed: createDOMFactory('embed'),
	  fieldset: createDOMFactory('fieldset'),
	  figcaption: createDOMFactory('figcaption'),
	  figure: createDOMFactory('figure'),
	  footer: createDOMFactory('footer'),
	  form: createDOMFactory('form'),
	  h1: createDOMFactory('h1'),
	  h2: createDOMFactory('h2'),
	  h3: createDOMFactory('h3'),
	  h4: createDOMFactory('h4'),
	  h5: createDOMFactory('h5'),
	  h6: createDOMFactory('h6'),
	  head: createDOMFactory('head'),
	  header: createDOMFactory('header'),
	  hgroup: createDOMFactory('hgroup'),
	  hr: createDOMFactory('hr'),
	  html: createDOMFactory('html'),
	  i: createDOMFactory('i'),
	  iframe: createDOMFactory('iframe'),
	  img: createDOMFactory('img'),
	  input: createDOMFactory('input'),
	  ins: createDOMFactory('ins'),
	  kbd: createDOMFactory('kbd'),
	  keygen: createDOMFactory('keygen'),
	  label: createDOMFactory('label'),
	  legend: createDOMFactory('legend'),
	  li: createDOMFactory('li'),
	  link: createDOMFactory('link'),
	  main: createDOMFactory('main'),
	  map: createDOMFactory('map'),
	  mark: createDOMFactory('mark'),
	  menu: createDOMFactory('menu'),
	  menuitem: createDOMFactory('menuitem'),
	  meta: createDOMFactory('meta'),
	  meter: createDOMFactory('meter'),
	  nav: createDOMFactory('nav'),
	  noscript: createDOMFactory('noscript'),
	  object: createDOMFactory('object'),
	  ol: createDOMFactory('ol'),
	  optgroup: createDOMFactory('optgroup'),
	  option: createDOMFactory('option'),
	  output: createDOMFactory('output'),
	  p: createDOMFactory('p'),
	  param: createDOMFactory('param'),
	  picture: createDOMFactory('picture'),
	  pre: createDOMFactory('pre'),
	  progress: createDOMFactory('progress'),
	  q: createDOMFactory('q'),
	  rp: createDOMFactory('rp'),
	  rt: createDOMFactory('rt'),
	  ruby: createDOMFactory('ruby'),
	  s: createDOMFactory('s'),
	  samp: createDOMFactory('samp'),
	  script: createDOMFactory('script'),
	  section: createDOMFactory('section'),
	  select: createDOMFactory('select'),
	  small: createDOMFactory('small'),
	  source: createDOMFactory('source'),
	  span: createDOMFactory('span'),
	  strong: createDOMFactory('strong'),
	  style: createDOMFactory('style'),
	  sub: createDOMFactory('sub'),
	  summary: createDOMFactory('summary'),
	  sup: createDOMFactory('sup'),
	  table: createDOMFactory('table'),
	  tbody: createDOMFactory('tbody'),
	  td: createDOMFactory('td'),
	  textarea: createDOMFactory('textarea'),
	  tfoot: createDOMFactory('tfoot'),
	  th: createDOMFactory('th'),
	  thead: createDOMFactory('thead'),
	  time: createDOMFactory('time'),
	  title: createDOMFactory('title'),
	  tr: createDOMFactory('tr'),
	  track: createDOMFactory('track'),
	  u: createDOMFactory('u'),
	  ul: createDOMFactory('ul'),
	  'var': createDOMFactory('var'),
	  video: createDOMFactory('video'),
	  wbr: createDOMFactory('wbr'),
	
	  // SVG
	  circle: createDOMFactory('circle'),
	  clipPath: createDOMFactory('clipPath'),
	  defs: createDOMFactory('defs'),
	  ellipse: createDOMFactory('ellipse'),
	  g: createDOMFactory('g'),
	  image: createDOMFactory('image'),
	  line: createDOMFactory('line'),
	  linearGradient: createDOMFactory('linearGradient'),
	  mask: createDOMFactory('mask'),
	  path: createDOMFactory('path'),
	  pattern: createDOMFactory('pattern'),
	  polygon: createDOMFactory('polygon'),
	  polyline: createDOMFactory('polyline'),
	  radialGradient: createDOMFactory('radialGradient'),
	  rect: createDOMFactory('rect'),
	  stop: createDOMFactory('stop'),
	  svg: createDOMFactory('svg'),
	  text: createDOMFactory('text'),
	  tspan: createDOMFactory('tspan')
	};
	
	module.exports = ReactDOMFactories;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(140);
	var ReactComponentTreeHook = __webpack_require__(147);
	var ReactElement = __webpack_require__(139);
	
	var checkReactTypeSpec = __webpack_require__(148);
	
	var canDefineProperty = __webpack_require__(133);
	var getIteratorFn = __webpack_require__(143);
	var warning = __webpack_require__(131);
	var lowPriorityWarning = __webpack_require__(136);
	
	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	function getSourceInfoErrorAddendum(elementProps) {
	  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
	    var source = elementProps.__source;
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
	  }
	  return '';
	}
	
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};
	
	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();
	
	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      info = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	  return info;
	}
	
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;
	
	  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});
	
	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
	  if (memoizer[currentComponentErrorInfo]) {
	    return;
	  }
	  memoizer[currentComponentErrorInfo] = true;
	
	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  var childOwner = '';
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }
	
	   true ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
	}
	
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	     true ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
	  }
	}
	
	var ReactElementValidator = {
	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    if (!validType) {
	      if (typeof type !== 'function' && typeof type !== 'string') {
	        var info = '';
	        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
	        }
	
	        var sourceInfo = getSourceInfoErrorAddendum(props);
	        if (sourceInfo) {
	          info += sourceInfo;
	        } else {
	          info += getDeclarationErrorAddendum();
	        }
	
	        info += ReactComponentTreeHook.getCurrentStackAddendum();
	
	        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
	        ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
	         true ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
	        ReactComponentTreeHook.popNonStandardWarningStack();
	      }
	    }
	
	    var element = ReactElement.createElement.apply(this, arguments);
	
	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }
	
	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }
	
	    validatePropTypes(element);
	
	    return element;
	  },
	
	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;
	
	    if (true) {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }
	
	    return validatedFactory;
	  },
	
	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }
	};
	
	module.exports = ReactElementValidator;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(129);
	
	var ReactCurrentOwner = __webpack_require__(140);
	
	var invariant = __webpack_require__(135);
	var warning = __webpack_require__(131);
	
	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty
	  // Strip regex characters so we can use it for regex
	  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
	  // Remove hasOwnProperty from the template to make it generic
	  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}
	
	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);
	
	var setItem;
	var getItem;
	var removeItem;
	var getItemIDs;
	var addRoot;
	var removeRoot;
	var getRootIDs;
	
	if (canUseCollections) {
	  var itemMap = new Map();
	  var rootIDSet = new Set();
	
	  setItem = function (id, item) {
	    itemMap.set(id, item);
	  };
	  getItem = function (id) {
	    return itemMap.get(id);
	  };
	  removeItem = function (id) {
	    itemMap['delete'](id);
	  };
	  getItemIDs = function () {
	    return Array.from(itemMap.keys());
	  };
	
	  addRoot = function (id) {
	    rootIDSet.add(id);
	  };
	  removeRoot = function (id) {
	    rootIDSet['delete'](id);
	  };
	  getRootIDs = function () {
	    return Array.from(rootIDSet.keys());
	  };
	} else {
	  var itemByKey = {};
	  var rootByKey = {};
	
	  // Use non-numeric keys to prevent V8 performance issues:
	  // https://github.com/facebook/react/pull/7232
	  var getKeyFromID = function (id) {
	    return '.' + id;
	  };
	  var getIDFromKey = function (key) {
	    return parseInt(key.substr(1), 10);
	  };
	
	  setItem = function (id, item) {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  };
	  getItem = function (id) {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  };
	  removeItem = function (id) {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  };
	  getItemIDs = function () {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  };
	
	  addRoot = function (id) {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  };
	  removeRoot = function (id) {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  };
	  getRootIDs = function () {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  };
	}
	
	var unmountedIDs = [];
	
	function purgeDeep(id) {
	  var item = getItem(id);
	  if (item) {
	    var childIDs = item.childIDs;
	
	    removeItem(id);
	    childIDs.forEach(purgeDeep);
	  }
	}
	
	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}
	
	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}
	
	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	   true ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}
	
	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = getItem(id);
	    !item ?  true ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.childIDs = nextChildIDs;
	
	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = getItem(nextChildID);
	      !nextChild ?  true ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ?  true ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ?  true ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent id is missing.
	      }
	      !(nextChild.parentID === id) ?  true ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    var item = {
	      element: element,
	      parentID: parentID,
	      text: null,
	      childIDs: [],
	      isMounted: false,
	      updateCount: 0
	    };
	    setItem(id, item);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = getItem(id);
	    !item ?  true ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = getItem(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = getItem(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }
	
	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = getItem(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var name = getDisplayName(topElement);
	      var owner = topElement._owner;
	      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
	    }
	
	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;
	
	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = getItem(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = getItem(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = getItem(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = getItem(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = getItem(id);
	    return item ? item.updateCount : 0;
	  },
	
	
	  getRootIDs: getRootIDs,
	  getRegisteredIDs: getItemIDs,
	
	  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
	    if (typeof console.reactStack !== 'function') {
	      return;
	    }
	
	    var stack = [];
	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;
	
	    try {
	      if (isCreatingElement) {
	        stack.push({
	          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
	          fileName: currentSource ? currentSource.fileName : null,
	          lineNumber: currentSource ? currentSource.lineNumber : null
	        });
	      }
	
	      while (id) {
	        var element = ReactComponentTreeHook.getElement(id);
	        var parentID = ReactComponentTreeHook.getParentID(id);
	        var ownerID = ReactComponentTreeHook.getOwnerID(id);
	        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
	        var source = element && element._source;
	        stack.push({
	          name: ownerName,
	          fileName: source ? source.fileName : null,
	          lineNumber: source ? source.lineNumber : null
	        });
	        id = parentID;
	      }
	    } catch (err) {
	      // Internal state is messed up.
	      // Stop building the stack (it's just a nice to have).
	    }
	
	    console.reactStack(stack);
	  },
	  popNonStandardWarningStack: function () {
	    if (typeof console.reactStackEnd !== 'function') {
	      return;
	    }
	    console.reactStackEnd();
	  }
	};
	
	module.exports = ReactComponentTreeHook;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(129);
	
	var ReactPropTypeLocationNames = __webpack_require__(150);
	var ReactPropTypesSecret = __webpack_require__(151);
	
	var invariant = __webpack_require__(135);
	var warning = __webpack_require__(131);
	
	var ReactComponentTreeHook;
	
	if (typeof process !== 'undefined' && ({"version":"0.1.1","NODE_ENV":"development"}) && ("development") === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(147);
	}
	
	var loggedTypeFailures = {};
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?object} element The React element that is being type-checked
	 * @param {?number} debugID The React component instance that is being type-checked
	 * @private
	 */
	function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
	  for (var typeSpecName in typeSpecs) {
	    if (typeSpecs.hasOwnProperty(typeSpecName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof typeSpecs[typeSpecName] === 'function') ?  true ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
	        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	      } catch (ex) {
	        error = ex;
	      }
	       true ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	
	        var componentStackInfo = '';
	
	        if (true) {
	          if (!ReactComponentTreeHook) {
	            ReactComponentTreeHook = __webpack_require__(147);
	          }
	          if (debugID !== null) {
	            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
	          } else if (element !== null) {
	            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
	          }
	        }
	
	         true ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
	      }
	    }
	  }
	}
	
	module.exports = checkReactTypeSpec;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(149)))

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var ReactPropTypeLocationNames = {};
	
	if (true) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}
	
	module.exports = ReactPropTypeLocationNames;

/***/ }),
/* 151 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _require = __webpack_require__(139),
	    isValidElement = _require.isValidElement;
	
	var factory = __webpack_require__(153);
	
	module.exports = factory(isValidElement);

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	// React 15.5 references this module, and assumes PropTypes are still callable in production.
	// Therefore we re-export development-only version with all the PropTypes checks here.
	// However if one is migrating to the `prop-types` npm library, they will go through the
	// `index.js` entry point, and it will branch depending on the environment.
	var factory = __webpack_require__(154);
	module.exports = function(isValidElement) {
	  // It is still allowed in 15.5.
	  var throwOnDirectAccess = false;
	  return factory(isValidElement, throwOnDirectAccess);
	};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(132);
	var invariant = __webpack_require__(135);
	var warning = __webpack_require__(131);
	
	var ReactPropTypesSecret = __webpack_require__(155);
	var checkPropTypes = __webpack_require__(156);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 155 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	if (true) {
	  var invariant = __webpack_require__(135);
	  var warning = __webpack_require__(131);
	  var ReactPropTypesSecret = __webpack_require__(155);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	module.exports = '15.6.1';

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _require = __webpack_require__(128),
	    Component = _require.Component;
	
	var _require2 = __webpack_require__(139),
	    isValidElement = _require2.isValidElement;
	
	var ReactNoopUpdateQueue = __webpack_require__(130);
	var factory = __webpack_require__(159);
	
	module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(127);
	
	var emptyObject = __webpack_require__(134);
	var _invariant = __webpack_require__(135);
	
	if (true) {
	  var warning = __webpack_require__(131);
	}
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (true) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (true) {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (true) {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (true) {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (true) {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (true) {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (true) {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (true) {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (true) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (true) {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (true) {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (true) {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (true) {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (true) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (true) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (true) {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	'use strict';
	
	var _prodInvariant = __webpack_require__(129);
	
	var ReactElement = __webpack_require__(139);
	
	var invariant = __webpack_require__(135);
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ?  true ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
	  return children;
	}
	
	module.exports = onlyChild;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// A transformation from an PdfPage to an PdfPage
	var Transformation = function () {
	    function Transformation(name, itemType) {
	        (0, _classCallCheck3.default)(this, Transformation);
	
	        if (this.constructor === Transformation) {
	            throw new TypeError("Can not construct abstract class.");
	        }
	        if (this.transform === Transformation.prototype.transform) {
	            throw new TypeError("Please implement abstract method 'transform()'.");
	        }
	        this.name = name;
	        this.itemType = itemType;
	    }
	
	    (0, _createClass3.default)(Transformation, [{
	        key: "showModificationCheckbox",
	        value: function showModificationCheckbox() {
	            return false;
	        }
	    }, {
	        key: "createPageView",
	        value: function createPageView(page, modificationsOnly) {
	            // eslint-disable-line no-unused-vars
	            throw new TypeError("Do not call abstract method foo from child.");
	        }
	
	        // Transform an incoming ParseResult into an outgoing ParseResult
	
	    }, {
	        key: "transform",
	        value: function transform(parseResult) {
	            // eslint-disable-line no-unused-vars
	            throw new TypeError("Do not call abstract method foo from child.");
	        }
	
	        // Sometimes the transform() does only visualize a change. 
	        //This methods then does the actual change.
	
	    }, {
	        key: "completeTransform",
	        value: function completeTransform(parseResult) {
	            // eslint-disable-line no-unused-vars
	            parseResult.messages = [];
	            return parseResult;
	        }
	    }]);
	    return Transformation;
	}();
	
	exports.default = Transformation;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// The result of a PDF parse respectively a Transformation
	var ParseResult = function ParseResult(options) {
	    (0, _classCallCheck3.default)(this, ParseResult);
	
	    // like Page[]
	    this.pages = options.pages;
	    // properties accasable for all the following transformations in debug mode
	    this.globals = options.globals;
	    // something to show only for the transformation in debug mode
	    this.messages = options.messages;
	};
	
	exports.default = ParseResult;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _PageItem2 = __webpack_require__(164);
	
	var _PageItem3 = _interopRequireDefault(_PageItem2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//A text item, i.e. a line or a word within a page
	var TextItem = function (_PageItem) {
	    (0, _inherits3.default)(TextItem, _PageItem);
	
	    function TextItem(options) {
	        (0, _classCallCheck3.default)(this, TextItem);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (TextItem.__proto__ || (0, _getPrototypeOf2.default)(TextItem)).call(this, options));
	
	        _this.x = options.x;
	        _this.y = options.y;
	        _this.width = options.width;
	        _this.height = options.height;
	        _this.text = options.text;
	        _this.font = options.font;
	
	        _this.lineFormat = options.lineFormat;
	        _this.unopenedFormat = options.unopenedFormat;
	        _this.unclosedFormat = options.unclosedFormat;
	        return _this;
	    }
	
	    return TextItem;
	}(_PageItem3.default);
	
	exports.default = TextItem;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ParsedElements = undefined;
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// A abstract PageItem class, can be TextItem, LineItem or LineItemBlock
	var PageItem = function PageItem(options) {
	    (0, _classCallCheck3.default)(this, PageItem);
	
	    if (this.constructor === PageItem) {
	        throw new TypeError("Can not construct abstract class.");
	    }
	    this.type = options.type;
	    this.annotation = options.annotation;
	    this.parsedElements = options.parsedElements;
	};
	
	exports.default = PageItem;
	
	var ParsedElements = exports.ParsedElements = function () {
	    function ParsedElements(options) {
	        (0, _classCallCheck3.default)(this, ParsedElements);
	
	        this.footnoteLinks = options.footnoteLinks || [];
	        this.footnotes = options.footnotes || [];
	        this.containLinks = options.containLinks;
	        this.formattedWords = options.formattedWords;
	    }
	
	    (0, _createClass3.default)(ParsedElements, [{
	        key: "add",
	        value: function add(parsedElements) {
	            this.footnoteLinks = this.footnoteLinks.concat(parsedElements.footnoteLinks);
	            this.footnotes = this.footnotes.concat(parsedElements.footnotes);
	            this.containLinks = this.containLinks || parsedElements.containLinks;
	            this.formattedWords += parsedElements.formattedWords;
	        }
	    }]);
	    return ParsedElements;
	}();

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PageView2 = __webpack_require__(166);
	
	var _PageView3 = _interopRequireDefault(_PageView2);
	
	var _TextItemTable = __webpack_require__(167);
	
	var _TextItemTable2 = _interopRequireDefault(_TextItemTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// View for a Page which items are of kind TextItem
	var TextItemPageView = function (_PageView) {
	    (0, _inherits3.default)(TextItemPageView, _PageView);
	
	    function TextItemPageView() {
	        (0, _classCallCheck3.default)(this, TextItemPageView);
	        return (0, _possibleConstructorReturn3.default)(this, (TextItemPageView.__proto__ || (0, _getPrototypeOf2.default)(TextItemPageView)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(TextItemPageView, [{
	        key: 'createItemViews',
	        value: function createItemViews(items, showWhitespaces) {
	            return _react2.default.createElement(_TextItemTable2.default, { textItems: items, showWhitespaces: showWhitespaces });
	        }
	    }]);
	    return TextItemPageView;
	}(_PageView3.default);
	
	exports.default = TextItemPageView;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Abstract view for a Page
	var PageView = function (_React$Component) {
	    (0, _inherits3.default)(PageView, _React$Component);
	
	    function PageView() {
	        (0, _classCallCheck3.default)(this, PageView);
	        return (0, _possibleConstructorReturn3.default)(this, (PageView.__proto__ || (0, _getPrototypeOf2.default)(PageView)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(PageView, [{
	        key: "createItemViews",
	        value: function createItemViews(items, showWhitespaces) {
	            // eslint-disable-line no-unused-vars
	            throw new TypeError("Do not call abstract method foo from child.");
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _props = this.props,
	                page = _props.page,
	                modificationsOnly = _props.modificationsOnly,
	                showWhitespaces = _props.showWhitespaces;
	
	
	            var items = page.items;
	            if (modificationsOnly) {
	                items = items.filter(function (block) {
	                    return block.annotation;
	                });
	            }
	
	            var content;
	            if (items.length == 0 && modificationsOnly) {
	                content = _react2.default.createElement("div", null);
	            } else {
	                var itemViews = this.createItemViews(items, showWhitespaces);
	                var header = "Page " + (page.index + 1);
	                content = _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(
	                        "h2",
	                        { id: header },
	                        header
	                    ),
	                    _react2.default.createElement("hr", null),
	                    itemViews
	                );
	            }
	            return content;
	        }
	    }]);
	    return PageView;
	}(_react2.default.Component);
	
	PageView.propTypes = {
	    page: _react2.default.PropTypes.object.isRequired,
	    modificationsOnly: _react2.default.PropTypes.bool,
	    showWhitespaces: _react2.default.PropTypes.bool
	};
	exports.default = PageView;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(168);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Displays an array of TextItem as a table
	var TextItemTable = function (_React$Component) {
	  (0, _inherits3.default)(TextItemTable, _React$Component);
	
	  function TextItemTable() {
	    (0, _classCallCheck3.default)(this, TextItemTable);
	    return (0, _possibleConstructorReturn3.default)(this, (TextItemTable.__proto__ || (0, _getPrototypeOf2.default)(TextItemTable)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(TextItemTable, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          showWhitespaces = _props.showWhitespaces,
	          textItems = _props.textItems;
	
	      var tableHeader = _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'th',
	            null,
	            '#'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Text'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'X'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Y'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Width'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Height'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Font'
	          )
	        )
	      );
	
	      var textItemRows = textItems.map(function (textItem, i) {
	        return _react2.default.createElement(
	          'tr',
	          { key: i, style: textItem.annotation ? {
	              color: textItem.annotation.color
	            } : null },
	          _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement(
	              'div',
	              { style: { textAlign: 'center' } },
	              i
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: { textAlign: 'center' } },
	              textItem.annotation ? textItem.annotation.category : ''
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: { textAlign: 'center', color: 'brown' } },
	              textItem.type ? textItem.type.name : ''
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: { textAlign: 'center', color: 'orange' } },
	              textItem.parsedElements && textItem.parsedElements.footnoteLinks.length > 0 ? _react2.default.createElement(
	                'div',
	                null,
	                'Footnote-Link'
	              ) : '',
	              textItem.parsedElements && textItem.parsedElements.containLinks ? _react2.default.createElement(
	                'div',
	                null,
	                'Link'
	              ) : '',
	              textItem.lineFormat ? _react2.default.createElement(
	                'div',
	                null,
	                textItem.lineFormat.name
	              ) : '',
	              textItem.unopenedFormat ? _react2.default.createElement(
	                'div',
	                null,
	                'Unopened',
	                ' ' + textItem.unopenedFormat.name
	              ) : '',
	              textItem.parsedElements && textItem.parsedElements.inlineFormats > 0 ? _react2.default.createElement(
	                'div',
	                null,
	                textItem.parsedElements.inlineFormats + 'x Bold/Italic'
	              ) : '',
	              textItem.unclosedFormat ? _react2.default.createElement(
	                'div',
	                null,
	                'Unclosed',
	                ' ' + textItem.unclosedFormat.name
	              ) : ''
	            )
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            showWhitespaces ? _react2.default.createElement(
	              'pre',
	              { style: textItem.annotation ? {
	                  color: textItem.annotation.color,
	                  display: 'inline-block'
	                } : {
	                  display: 'inline-block'
	                } },
	              textItem.text
	            ) : textItem.text
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            textItem.x
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            textItem.y
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            textItem.width
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            textItem.height
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            textItem.font
	          )
	        );
	      });
	
	      return _react2.default.createElement(
	        _Table2.default,
	        { responsive: true, condensed: true, bordered: true },
	        tableHeader,
	        _react2.default.createElement(
	          'tbody',
	          null,
	          textItemRows
	        )
	      );
	    }
	  }]);
	  return TextItemTable;
	}(_react2.default.Component);
	
	TextItemTable.propTypes = {
	  textItems: _react2.default.PropTypes.array.isRequired,
	  showWhitespaces: _react2.default.PropTypes.bool
	};
	exports.default = TextItemTable;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends3 = __webpack_require__(95);
	
	var _extends4 = _interopRequireDefault(_extends3);
	
	var _objectWithoutProperties2 = __webpack_require__(169);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(170);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(171);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _bootstrapUtils = __webpack_require__(172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var propTypes = {
	  striped: _propTypes2['default'].bool,
	  bordered: _propTypes2['default'].bool,
	  condensed: _propTypes2['default'].bool,
	  hover: _propTypes2['default'].bool,
	  responsive: _propTypes2['default'].bool
	};
	
	var defaultProps = {
	  bordered: false,
	  condensed: false,
	  hover: false,
	  responsive: false,
	  striped: false
	};
	
	var Table = function (_React$Component) {
	  (0, _inherits3['default'])(Table, _React$Component);
	
	  function Table() {
	    (0, _classCallCheck3['default'])(this, Table);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  Table.prototype.render = function render() {
	    var _extends2;
	
	    var _props = this.props,
	        striped = _props.striped,
	        bordered = _props.bordered,
	        condensed = _props.condensed,
	        hover = _props.hover,
	        responsive = _props.responsive,
	        className = _props.className,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['striped', 'bordered', 'condensed', 'hover', 'responsive', 'className']);
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'striped')] = striped, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'bordered')] = bordered, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'condensed')] = condensed, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'hover')] = hover, _extends2));
	
	    var table = _react2['default'].createElement('table', (0, _extends4['default'])({}, elementProps, {
	      className: (0, _classnames2['default'])(className, classes)
	    }));
	
	    if (responsive) {
	      return _react2['default'].createElement(
	        'div',
	        { className: (0, _bootstrapUtils.prefix)(bsProps, 'responsive') },
	        table
	      );
	    }
	
	    return table;
	  };
	
	  return Table;
	}(_react2['default'].Component);
	
	Table.propTypes = propTypes;
	Table.defaultProps = defaultProps;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('table', Table);
	module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(154)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports._curry = exports.bsSizes = exports.bsStyles = exports.bsClass = undefined;
	
	var _entries = __webpack_require__(173);
	
	var _entries2 = _interopRequireDefault(_entries);
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.prefix = prefix;
	exports.getClassSet = getClassSet;
	exports.splitBsProps = splitBsProps;
	exports.splitBsPropsAndOmit = splitBsPropsAndOmit;
	exports.addStyle = addStyle;
	
	var _invariant = __webpack_require__(177);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _propTypes = __webpack_require__(171);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _StyleConfig = __webpack_require__(178);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function curry(fn) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var last = args[args.length - 1];
	    if (typeof last === 'function') {
	      return fn.apply(undefined, args);
	    }
	    return function (Component) {
	      return fn.apply(undefined, args.concat([Component]));
	    };
	  };
	} // TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.
	
	function prefix(props, variant) {
	  !(props.bsClass != null) ?  true ? (0, _invariant2['default'])(false, 'A `bsClass` prop is required for this component') : (0, _invariant2['default'])(false) : void 0;
	  return props.bsClass + (variant ? '-' + variant : '');
	}
	
	var bsClass = exports.bsClass = curry(function (defaultClass, Component) {
	  var propTypes = Component.propTypes || (Component.propTypes = {});
	  var defaultProps = Component.defaultProps || (Component.defaultProps = {});
	
	  propTypes.bsClass = _propTypes2['default'].string;
	  defaultProps.bsClass = defaultClass;
	
	  return Component;
	});
	
	var bsStyles = exports.bsStyles = curry(function (styles, defaultStyle, Component) {
	  if (typeof defaultStyle !== 'string') {
	    Component = defaultStyle;
	    defaultStyle = undefined;
	  }
	
	  var existing = Component.STYLES || [];
	  var propTypes = Component.propTypes || {};
	
	  styles.forEach(function (style) {
	    if (existing.indexOf(style) === -1) {
	      existing.push(style);
	    }
	  });
	
	  var propType = _propTypes2['default'].oneOf(existing);
	
	  // expose the values on the propType function for documentation
	  Component.STYLES = propType._values = existing;
	
	  Component.propTypes = (0, _extends3['default'])({}, propTypes, {
	    bsStyle: propType
	  });
	
	  if (defaultStyle !== undefined) {
	    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
	    defaultProps.bsStyle = defaultStyle;
	  }
	
	  return Component;
	});
	
	var bsSizes = exports.bsSizes = curry(function (sizes, defaultSize, Component) {
	  if (typeof defaultSize !== 'string') {
	    Component = defaultSize;
	    defaultSize = undefined;
	  }
	
	  var existing = Component.SIZES || [];
	  var propTypes = Component.propTypes || {};
	
	  sizes.forEach(function (size) {
	    if (existing.indexOf(size) === -1) {
	      existing.push(size);
	    }
	  });
	
	  var values = [];
	  existing.forEach(function (size) {
	    var mappedSize = _StyleConfig.SIZE_MAP[size];
	    if (mappedSize && mappedSize !== size) {
	      values.push(mappedSize);
	    }
	
	    values.push(size);
	  });
	
	  var propType = _propTypes2['default'].oneOf(values);
	  propType._values = values;
	
	  // expose the values on the propType function for documentation
	  Component.SIZES = existing;
	
	  Component.propTypes = (0, _extends3['default'])({}, propTypes, {
	    bsSize: propType
	  });
	
	  if (defaultSize !== undefined) {
	    if (!Component.defaultProps) {
	      Component.defaultProps = {};
	    }
	    Component.defaultProps.bsSize = defaultSize;
	  }
	
	  return Component;
	});
	
	function getClassSet(props) {
	  var _classes;
	
	  var classes = (_classes = {}, _classes[prefix(props)] = true, _classes);
	
	  if (props.bsSize) {
	    var bsSize = _StyleConfig.SIZE_MAP[props.bsSize] || props.bsSize;
	    classes[prefix(props, bsSize)] = true;
	  }
	
	  if (props.bsStyle) {
	    classes[prefix(props, props.bsStyle)] = true;
	  }
	
	  return classes;
	}
	
	function getBsProps(props) {
	  return {
	    bsClass: props.bsClass,
	    bsSize: props.bsSize,
	    bsStyle: props.bsStyle,
	    bsRole: props.bsRole
	  };
	}
	
	function isBsProp(propName) {
	  return propName === 'bsClass' || propName === 'bsSize' || propName === 'bsStyle' || propName === 'bsRole';
	}
	
	function splitBsProps(props) {
	  var elementProps = {};
	  (0, _entries2['default'])(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];
	
	    if (!isBsProp(propName)) {
	      elementProps[propName] = propValue;
	    }
	  });
	
	  return [getBsProps(props), elementProps];
	}
	
	function splitBsPropsAndOmit(props, omittedPropNames) {
	  var isOmittedProp = {};
	  omittedPropNames.forEach(function (propName) {
	    isOmittedProp[propName] = true;
	  });
	
	  var elementProps = {};
	  (0, _entries2['default'])(props).forEach(function (_ref2) {
	    var propName = _ref2[0],
	        propValue = _ref2[1];
	
	    if (!isBsProp(propName) && !isOmittedProp[propName]) {
	      elementProps[propName] = propValue;
	    }
	  });
	
	  return [getBsProps(props), elementProps];
	}
	
	/**
	 * Add a style variant to a Component. Mutates the propTypes of the component
	 * in order to validate the new variant.
	 */
	function addStyle(Component) {
	  for (var _len2 = arguments.length, styleVariant = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    styleVariant[_key2 - 1] = arguments[_key2];
	  }
	
	  bsStyles(styleVariant, Component);
	}
	
	var _curry = exports._curry = curry;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(174), __esModule: true };

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(175);
	module.exports = __webpack_require__(9).Object.entries;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(7);
	var $entries = __webpack_require__(176)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(48);
	var toIObject = __webpack_require__(50);
	var isEnum = __webpack_require__(72).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var Size = exports.Size = {
	  LARGE: 'large',
	  SMALL: 'small',
	  XSMALL: 'xsmall'
	};
	
	var SIZE_MAP = exports.SIZE_MAP = {
	  large: 'lg',
	  medium: 'md',
	  small: 'sm',
	  xsmall: 'xs',
	  lg: 'lg',
	  md: 'md',
	  sm: 'sm',
	  xs: 'xs'
	};
	
	var DEVICE_SIZES = exports.DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];
	
	var State = exports.State = {
	  SUCCESS: 'success',
	  WARNING: 'warning',
	  DANGER: 'danger',
	  INFO: 'info'
	};
	
	var Style = exports.Style = {
	  DEFAULT: 'default',
	  PRIMARY: 'primary',
	  LINK: 'link',
	  INVERSE: 'inverse'
	};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MODIFIED_ANNOTATION = exports.DETECTED_ANNOTATION = exports.UNCHANGED_ANNOTATION = exports.REMOVED_ANNOTATION = exports.ADDED_ANNOTATION = undefined;
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Annotation for a text item
	var Annotation = function Annotation(options) {
	    (0, _classCallCheck3.default)(this, Annotation);
	
	    this.category = options.category;
	    this.color = options.color;
	};
	
	exports.default = Annotation;
	var ADDED_ANNOTATION = exports.ADDED_ANNOTATION = new Annotation({
	    category: 'Added',
	    color: 'green'
	});
	
	var REMOVED_ANNOTATION = exports.REMOVED_ANNOTATION = new Annotation({
	    category: 'Removed',
	    color: 'red'
	});
	
	var UNCHANGED_ANNOTATION = exports.UNCHANGED_ANNOTATION = new Annotation({
	    category: 'Unchanged',
	    color: 'brown'
	});
	
	var DETECTED_ANNOTATION = exports.DETECTED_ANNOTATION = new Annotation({
	    category: 'Detected',
	    color: 'green'
	});
	
	var MODIFIED_ANNOTATION = exports.MODIFIED_ANNOTATION = new Annotation({
	    category: 'Modified',
	    color: 'green'
	});

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _enumify = __webpack_require__(88);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// The format of a word element
	var WordFormat = function (_Enum) {
	    (0, _inherits3.default)(WordFormat, _Enum);
	
	    function WordFormat() {
	        (0, _classCallCheck3.default)(this, WordFormat);
	        return (0, _possibleConstructorReturn3.default)(this, (WordFormat.__proto__ || (0, _getPrototypeOf2.default)(WordFormat)).apply(this, arguments));
	    }
	
	    return WordFormat;
	}(_enumify.Enum);
	
	exports.default = WordFormat;
	
	
	WordFormat.initEnum({
	    BOLD: {
	        startSymbol: '**',
	        endSymbol: '**'
	    },
	    OBLIQUE: {
	        startSymbol: '*',
	        endSymbol: '*'
	    },
	    BOLD_OBLIQUE: {
	        startSymbol: '**_',
	        endSymbol: '_**'
	    }
	});

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ToLineItemTransformation = __webpack_require__(182);
	
	var _ToLineItemTransformation2 = _interopRequireDefault(_ToLineItemTransformation);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _LineItem = __webpack_require__(183);
	
	var _LineItem2 = _interopRequireDefault(_LineItem);
	
	var _TextItemLineGrouper = __webpack_require__(187);
	
	var _TextItemLineGrouper2 = _interopRequireDefault(_TextItemLineGrouper);
	
	var _LineConverter = __webpack_require__(190);
	
	var _LineConverter2 = _interopRequireDefault(_LineConverter);
	
	var _BlockType = __webpack_require__(206);
	
	var _BlockType2 = _interopRequireDefault(_BlockType);
	
	var _Annotation = __webpack_require__(179);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// gathers text items on the same y line to one line item
	var CompactLines = function (_ToLineItemTransforma) {
	    (0, _inherits3.default)(CompactLines, _ToLineItemTransforma);
	
	    function CompactLines() {
	        (0, _classCallCheck3.default)(this, CompactLines);
	        return (0, _possibleConstructorReturn3.default)(this, (CompactLines.__proto__ || (0, _getPrototypeOf2.default)(CompactLines)).call(this, "Compact To Lines"));
	    }
	
	    (0, _createClass3.default)(CompactLines, [{
	        key: 'transform',
	        value: function transform(parseResult) {
	            var _parseResult$globals = parseResult.globals,
	                mostUsedDistance = _parseResult$globals.mostUsedDistance,
	                fontToFormats = _parseResult$globals.fontToFormats;
	
	            var foundFootnotes = [];
	            var foundFootnoteLinks = [];
	            var linkCount = 0;
	            var formattedWords = 0;
	
	            var lineGrouper = new _TextItemLineGrouper2.default({
	                mostUsedDistance: mostUsedDistance
	            });
	            var lineCompactor = new _LineConverter2.default(fontToFormats);
	
	            parseResult.pages.forEach(function (page) {
	                if (page.items.length > 0) {
	                    var lineItems = [];
	                    var textItemsGroupedByLine = lineGrouper.group(page.items);
	                    textItemsGroupedByLine.forEach(function (lineTextItems) {
	                        var lineItem = lineCompactor.compact(lineTextItems);
	                        if (lineTextItems.length > 1) {
	                            lineItem.annotation = _Annotation.ADDED_ANNOTATION;
	                            lineTextItems.forEach(function (item) {
	                                item.annotation = _Annotation.REMOVED_ANNOTATION;
	                                lineItems.push(new _LineItem2.default((0, _extends3.default)({}, item)));
	                            });
	                        }
	                        if (lineItem.words.length == 0) {
	                            lineItem.annotation = _Annotation.REMOVED_ANNOTATION;
	                        }
	                        lineItems.push(lineItem);
	
	                        if (lineItem.parsedElements.formattedWords) {
	                            formattedWords += lineItem.parsedElements.formattedWords;
	                        }
	                        if (lineItem.parsedElements.containLinks > 0) {
	                            linkCount++;
	                        }
	                        if (lineItem.parsedElements.footnoteLinks.length > 0) {
	                            var footnoteLinks = lineItem.parsedElements.footnoteLinks.map(function (footnoteLink) {
	                                return _react2.default.createElement(
	                                    'span',
	                                    { key: footnoteLink },
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: "#Page " + (page.index + 1) },
	                                        footnoteLink
	                                    ),
	                                    ','
	                                );
	                            });
	                            foundFootnoteLinks.push.apply(foundFootnoteLinks, footnoteLinks);
	                        }
	                        if (lineItem.parsedElements.footnotes.length > 0) {
	                            lineItem.type = _BlockType2.default.FOOTNOTES;
	                            var footnotes = lineItem.parsedElements.footnotes.map(function (footnote) {
	                                return _react2.default.createElement(
	                                    'span',
	                                    { key: footnote },
	                                    _react2.default.createElement(
	                                        'a',
	                                        { href: "#Page " + (page.index + 1) },
	                                        footnote
	                                    ),
	                                    ','
	                                );
	                            });
	                            foundFootnotes.push.apply(foundFootnotes, footnotes);
	                        }
	                    });
	                    page.items = lineItems;
	                }
	            });
	
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult, {
	                messages: ['Detected ' + formattedWords + ' formatted words', 'Found ' + linkCount + ' links', _react2.default.createElement(
	                    'span',
	                    null,
	                    'Detected ',
	                    foundFootnoteLinks.length,
	                    ' footnotes links: [',
	                    foundFootnoteLinks,
	                    ']'
	                ), _react2.default.createElement(
	                    'span',
	                    null,
	                    'Detected ',
	                    foundFootnotes.length,
	                    ' footnotes: [',
	                    foundFootnotes,
	                    ']'
	                )]
	            }));
	        }
	    }]);
	    return CompactLines;
	}(_ToLineItemTransformation2.default);
	
	exports.default = CompactLines;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Transformation2 = __webpack_require__(161);
	
	var _Transformation3 = _interopRequireDefault(_Transformation2);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _LineItem = __webpack_require__(183);
	
	var _LineItem2 = _interopRequireDefault(_LineItem);
	
	var _LineItemPageView = __webpack_require__(185);
	
	var _LineItemPageView2 = _interopRequireDefault(_LineItemPageView);
	
	var _Annotation = __webpack_require__(179);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Abstract class for transformations producing LineItem(s) to be shown in the LineItemPageView
	var ToLineItemTransformation = function (_Transformation) {
	    (0, _inherits3.default)(ToLineItemTransformation, _Transformation);
	
	    function ToLineItemTransformation(name) {
	        (0, _classCallCheck3.default)(this, ToLineItemTransformation);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (ToLineItemTransformation.__proto__ || (0, _getPrototypeOf2.default)(ToLineItemTransformation)).call(this, name, _LineItem2.default.name));
	
	        if (_this.constructor === ToLineItemTransformation) {
	            throw new TypeError("Can not construct abstract class.");
	        }
	        _this.showWhitespaces = false;
	        return _this;
	    }
	
	    (0, _createClass3.default)(ToLineItemTransformation, [{
	        key: 'showModificationCheckbox',
	        value: function showModificationCheckbox() {
	            return true;
	        }
	    }, {
	        key: 'createPageView',
	        value: function createPageView(page, modificationsOnly) {
	            return _react2.default.createElement(_LineItemPageView2.default, {
	                key: page.index,
	                page: page,
	                modificationsOnly: modificationsOnly,
	                showWhitespaces: this.showWhitespaces });
	        }
	    }, {
	        key: 'completeTransform',
	        value: function completeTransform(parseResult) {
	            // The usual cleanup
	            parseResult.messages = [];
	            parseResult.pages.forEach(function (page) {
	                page.items = page.items.filter(function (item) {
	                    return !item.annotation || item.annotation !== _Annotation.REMOVED_ANNOTATION;
	                });
	                page.items.forEach(function (item) {
	                    return item.annotation = null;
	                });
	            });
	            return parseResult;
	        }
	    }]);
	    return ToLineItemTransformation;
	}(_Transformation3.default);
	
	exports.default = ToLineItemTransformation;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _PageItem2 = __webpack_require__(164);
	
	var _PageItem3 = _interopRequireDefault(_PageItem2);
	
	var _Word = __webpack_require__(184);
	
	var _Word2 = _interopRequireDefault(_Word);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//A line within a page
	var LineItem = function (_PageItem) {
	    (0, _inherits3.default)(LineItem, _PageItem);
	
	    function LineItem(options) {
	        (0, _classCallCheck3.default)(this, LineItem);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (LineItem.__proto__ || (0, _getPrototypeOf2.default)(LineItem)).call(this, options));
	
	        _this.x = options.x;
	        _this.y = options.y;
	        _this.width = options.width;
	        _this.height = options.height;
	        _this.words = options.words || [];
	        if (options.text && !options.words) {
	            _this.words = options.text.split(" ").filter(function (string) {
	                return string.trim().length > 0;
	            }).map(function (wordAsString) {
	                return new _Word2.default({
	                    string: wordAsString
	                });
	            });
	        }
	        return _this;
	    }
	
	    (0, _createClass3.default)(LineItem, [{
	        key: 'text',
	        value: function text() {
	            return this.wordStrings().join(" ");
	        }
	    }, {
	        key: 'wordStrings',
	        value: function wordStrings() {
	            return this.words.map(function (word) {
	                return word.string;
	            });
	        }
	    }]);
	    return LineItem;
	}(_PageItem3.default);
	
	exports.default = LineItem;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Word = function Word(options) {
	    (0, _classCallCheck3.default)(this, Word);
	
	    this.string = options.string;
	    this.type = options.type; // WordType
	    this.format = options.format; // WordFormat
	};
	
	exports.default = Word;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PageView2 = __webpack_require__(166);
	
	var _PageView3 = _interopRequireDefault(_PageView2);
	
	var _LineItemTable = __webpack_require__(186);
	
	var _LineItemTable2 = _interopRequireDefault(_LineItemTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// View for a Page which items are of kind LineItem
	var LineItemPageView = function (_PageView) {
	    (0, _inherits3.default)(LineItemPageView, _PageView);
	
	    function LineItemPageView() {
	        (0, _classCallCheck3.default)(this, LineItemPageView);
	        return (0, _possibleConstructorReturn3.default)(this, (LineItemPageView.__proto__ || (0, _getPrototypeOf2.default)(LineItemPageView)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(LineItemPageView, [{
	        key: 'createItemViews',
	        value: function createItemViews(items, showWhitespaces) {
	            return _react2.default.createElement(_LineItemTable2.default, { items: items, showWhitespaces: showWhitespaces });
	        }
	    }]);
	    return LineItemPageView;
	}(_PageView3.default);
	
	exports.default = LineItemPageView;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Table = __webpack_require__(168);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Displays an array of LineItem as a table
	var LineItemTable = function (_React$Component) {
	  (0, _inherits3.default)(LineItemTable, _React$Component);
	
	  function LineItemTable() {
	    (0, _classCallCheck3.default)(this, LineItemTable);
	    return (0, _possibleConstructorReturn3.default)(this, (LineItemTable.__proto__ || (0, _getPrototypeOf2.default)(LineItemTable)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(LineItemTable, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          showWhitespaces = _props.showWhitespaces,
	          items = _props.items;
	
	      var tableHeader = _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'th',
	            null,
	            '#'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Text'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'X'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Y'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Width'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Height'
	          )
	        )
	      );
	
	      var itemRows = items.map(function (item, i) {
	        return _react2.default.createElement(
	          'tr',
	          { key: i, style: item.annotation ? {
	              color: item.annotation.color
	            } : null },
	          _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement(
	              'div',
	              { style: { textAlign: 'center' } },
	              i
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: { textAlign: 'center' } },
	              item.annotation ? item.annotation.category : ''
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: { textAlign: 'center', color: 'brown' } },
	              item.type ? item.type.name : ''
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: { textAlign: 'center', color: 'orange' } },
	              item.parsedElements && item.parsedElements.footnoteLinks.length > 0 ? _react2.default.createElement(
	                'div',
	                null,
	                'Footnote-Link'
	              ) : '',
	              item.parsedElements && item.parsedElements.containLinks ? _react2.default.createElement(
	                'div',
	                null,
	                'Link'
	              ) : '',
	              item.lineFormat ? _react2.default.createElement(
	                'div',
	                null,
	                item.lineFormat.name
	              ) : '',
	              item.unopenedFormat ? _react2.default.createElement(
	                'div',
	                null,
	                'Unopened',
	                ' ' + item.unopenedFormat.name
	              ) : '',
	              item.parsedElements && item.parsedElements.inlineFormats > 0 ? _react2.default.createElement(
	                'div',
	                null,
	                item.parsedElements.inlineFormats + 'x Bold/Italic'
	              ) : '',
	              item.unclosedFormat ? _react2.default.createElement(
	                'div',
	                null,
	                'Unclosed',
	                ' ' + item.unclosedFormat.name
	              ) : ''
	            )
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            showWhitespaces ? _react2.default.createElement(
	              'pre',
	              { style: item.annotation ? {
	                  color: item.annotation.color,
	                  display: 'inline-block'
	                } : {
	                  display: 'inline-block'
	                } },
	              item.text()
	            ) : item.text()
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            item.x
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            item.y
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            item.width
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            item.height
	          )
	        );
	      });
	
	      return _react2.default.createElement(
	        _Table2.default,
	        { responsive: true, condensed: true, bordered: true },
	        tableHeader,
	        _react2.default.createElement(
	          'tbody',
	          null,
	          itemRows
	        )
	      );
	    }
	  }]);
	  return LineItemTable;
	}(_react2.default.Component);
	
	LineItemTable.propTypes = {
	  items: _react2.default.PropTypes.array.isRequired,
	  showWhitespaces: _react2.default.PropTypes.bool
	};
	exports.default = LineItemTable;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _TextItem = __webpack_require__(163);
	
	var _TextItem2 = _interopRequireDefault(_TextItem);
	
	var _pageItemFunctions = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Groups all text items which are on the same y line
	var TextItemLineGrouper = function () {
	    function TextItemLineGrouper(options) {
	        (0, _classCallCheck3.default)(this, TextItemLineGrouper);
	
	        this.mostUsedDistance = options.mostUsedDistance || 12;
	    }
	
	    // returns a CombineResult 
	
	
	    (0, _createClass3.default)(TextItemLineGrouper, [{
	        key: 'group',
	        value: function group(textItems) {
	            return this.groupItemsByLine(textItems);
	        }
	    }, {
	        key: 'groupItemsByLine',
	        value: function groupItemsByLine(textItems) {
	            var _this = this;
	
	            var lines = [];
	            var currentLine = [];
	            textItems.forEach(function (item) {
	                if (currentLine.length > 0 && Math.abs(currentLine[0].y - item.y) >= _this.mostUsedDistance / 2) {
	                    lines.push(currentLine);
	                    currentLine = [];
	                }
	                currentLine.push(item);
	            });
	            lines.push(currentLine);
	
	            lines.forEach(function (lineItems) {
	                // we can't trust order of occurence, esp. footnoteLinks like to come last
	                (0, _pageItemFunctions.sortByX)(lineItems);
	            });
	            return lines;
	        }
	    }]);
	    return TextItemLineGrouper;
	}();
	
	exports.default = TextItemLineGrouper;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.minXFromBlocks = minXFromBlocks;
	exports.minXFromPageItems = minXFromPageItems;
	exports.sortByX = sortByX;
	exports.sortCopyByX = sortCopyByX;
	
	var _PageItem = __webpack_require__(164);
	
	var _PageItem2 = _interopRequireDefault(_PageItem);
	
	var _LineItemBlock = __webpack_require__(189);
	
	var _LineItemBlock2 = _interopRequireDefault(_LineItemBlock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function minXFromBlocks(blocks) {
	    var minX = 999;
	    blocks.forEach(function (block) {
	        block.items.forEach(function (item) {
	            minX = Math.min(minX, item.x);
	        });
	    });
	    if (minX == 999) {
	        return null;
	    }
	    return minX;
	}
	
	function minXFromPageItems(items) {
	    var minX = 999;
	    items.forEach(function (item) {
	        minX = Math.min(minX, item.x);
	    });
	    if (minX == 999) {
	        return null;
	    }
	    return minX;
	}
	
	function sortByX(items) {
	    items.sort(function (a, b) {
	        return a.x - b.x;
	    });
	}
	
	function sortCopyByX(items) {
	    var copy = items.concat();
	    sortByX(copy);
	    return copy;
	}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _PageItem2 = __webpack_require__(164);
	
	var _PageItem3 = _interopRequireDefault(_PageItem2);
	
	var _LineItem = __webpack_require__(183);
	
	var _LineItem2 = _interopRequireDefault(_LineItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// A block of LineItem[] within a Page
	var LineItemBlock = function (_PageItem) {
	    (0, _inherits3.default)(LineItemBlock, _PageItem);
	
	    function LineItemBlock(options) {
	        (0, _classCallCheck3.default)(this, LineItemBlock);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (LineItemBlock.__proto__ || (0, _getPrototypeOf2.default)(LineItemBlock)).call(this, options));
	
	        _this.items = [];
	        if (options.items) {
	            options.items.forEach(function (item) {
	                return _this.addItem(item);
	            });
	        }
	        return _this;
	    }
	
	    (0, _createClass3.default)(LineItemBlock, [{
	        key: 'addItem',
	        value: function addItem(item) {
	            if (this.type && item.type && this.type !== item.type) {
	                throw 'Adding item of type ' + item.type + ' to block of type ' + this.type;
	            }
	
	            if (!this.type) {
	                this.type = item.type;
	            }
	            if (item.parsedElements) {
	                if (this.parsedElements) {
	                    this.parsedElements.add(item.parsedElements);
	                } else {
	                    this.parsedElements = item.parsedElements;
	                }
	            }
	            var copiedItem = new _LineItem2.default((0, _extends3.default)({}, item));
	            copiedItem.type = null;
	            this.items.push(copiedItem);
	        }
	    }]);
	    return LineItemBlock;
	}(_PageItem3.default);
	
	exports.default = LineItemBlock;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(191);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _TextItem = __webpack_require__(163);
	
	var _TextItem2 = _interopRequireDefault(_TextItem);
	
	var _Word = __webpack_require__(184);
	
	var _Word2 = _interopRequireDefault(_Word);
	
	var _WordType = __webpack_require__(197);
	
	var _WordType2 = _interopRequireDefault(_WordType);
	
	var _WordFormat = __webpack_require__(180);
	
	var _WordFormat2 = _interopRequireDefault(_WordFormat);
	
	var _LineItem = __webpack_require__(183);
	
	var _LineItem2 = _interopRequireDefault(_LineItem);
	
	var _StashingStream2 = __webpack_require__(198);
	
	var _StashingStream3 = _interopRequireDefault(_StashingStream2);
	
	var _PageItem = __webpack_require__(164);
	
	var _stringFunctions = __webpack_require__(199);
	
	var _pageItemFunctions = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Converts text items which have been grouped to a line (through TextItemLineGrouper) to a single LineItem doing inline transformations like 
	//'whitespace removal', bold/emphasis annotation, link-detection, etc..
	var LineConverter = function () {
	    function LineConverter(fontToFormats) {
	        (0, _classCallCheck3.default)(this, LineConverter);
	
	        this.fontToFormats = fontToFormats;
	    }
	
	    // returns a CombineResult 
	
	
	    (0, _createClass3.default)(LineConverter, [{
	        key: 'compact',
	        value: function compact(textItems) {
	            // we can't trust order of occurence, esp. footnoteLinks like to come last
	            (0, _pageItemFunctions.sortByX)(textItems);
	
	            var wordStream = new WordDetectionStream(this.fontToFormats);
	            wordStream.consumeAll(textItems.map(function (item) {
	                return new _TextItem2.default((0, _extends3.default)({}, item));
	            }));
	            var words = wordStream.complete();
	
	            var maxHeight = 0;
	            var widthSum = 0;
	            textItems.forEach(function (item) {
	                maxHeight = Math.max(maxHeight, item.height);
	                widthSum += item.width;
	            });
	            return new _LineItem2.default({
	                x: textItems[0].x,
	                y: textItems[0].y,
	                height: maxHeight,
	                width: widthSum,
	                words: words,
	                parsedElements: new _PageItem.ParsedElements({
	                    footnoteLinks: wordStream.footnoteLinks,
	                    footnotes: wordStream.footnotes,
	                    containLinks: wordStream.containLinks,
	                    formattedWords: wordStream.formattedWords
	                })
	            });
	        }
	    }]);
	    return LineConverter;
	}();
	
	exports.default = LineConverter;
	
	var WordDetectionStream = function (_StashingStream) {
	    (0, _inherits3.default)(WordDetectionStream, _StashingStream);
	
	    function WordDetectionStream(fontToFormats) {
	        (0, _classCallCheck3.default)(this, WordDetectionStream);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (WordDetectionStream.__proto__ || (0, _getPrototypeOf2.default)(WordDetectionStream)).call(this));
	
	        _this.fontToFormats = fontToFormats;
	        _this.footnoteLinks = [];
	        _this.footnotes = [];
	        _this.formattedWords = 0;
	        _this.containLinks = false;
	
	        _this.firstY;
	        _this.stashedNumber = false;
	        _this.currentItem;
	        return _this;
	    }
	
	    (0, _createClass3.default)(WordDetectionStream, [{
	        key: 'shouldStash',
	        value: function shouldStash(item) {
	            // eslint-disable-line no-unused-vars
	            if (!this.firstY) {
	                this.firstY = item.y;
	            }
	            this.currentItem = item;
	            return true;
	        }
	    }, {
	        key: 'onPushOnStash',
	        value: function onPushOnStash(item) {
	            // eslint-disable-line no-unused-vars
	            this.stashedNumber = (0, _stringFunctions.isNumber)(item.text.trim());
	        }
	    }, {
	        key: 'doMatchesStash',
	        value: function doMatchesStash(lastItem, item) {
	            var lastItemFormat = this.fontToFormats.get(lastItem.font);
	            var itemFormat = this.fontToFormats.get(item.font);
	            if (lastItemFormat !== itemFormat) {
	                return false;
	            }
	            var itemIsANumber = (0, _stringFunctions.isNumber)(item.text.trim());
	            return this.stashedNumber == itemIsANumber;
	        }
	    }, {
	        key: 'doFlushStash',
	        value: function doFlushStash(stash, results) {
	            if (this.stashedNumber) {
	                var joinedNumber = stash.map(function (item) {
	                    return item.text;
	                }).join('').trim();
	                if (stash[0].y > this.firstY) {
	                    // footnote link
	                    results.push(new _Word2.default({
	                        string: '' + joinedNumber,
	                        type: _WordType2.default.FOOTNOTE_LINK
	                    }));
	                    this.footnoteLinks.push(parseInt(joinedNumber));
	                } else if (this.currentItem && this.currentItem.y < stash[0].y) {
	                    // footnote
	                    results.push(new _Word2.default({
	                        string: '' + joinedNumber,
	                        type: _WordType2.default.FOOTNOTE
	                    }));
	                    this.footnotes.push(joinedNumber);
	                } else {
	                    this.copyStashItemsAsText(stash, results);
	                }
	            } else {
	                this.copyStashItemsAsText(stash, results);
	            }
	        }
	    }, {
	        key: 'copyStashItemsAsText',
	        value: function copyStashItemsAsText(stash, results) {
	            var format = this.fontToFormats.get(stash[0].font);
	            results.push.apply(results, (0, _toConsumableArray3.default)(this.itemsToWords(stash, format)));
	        }
	    }, {
	        key: 'itemsToWords',
	        value: function itemsToWords(items, formatName) {
	            var _this2 = this;
	
	            var combinedText = combineText(items);
	            var words = combinedText.split(' ');
	            var format = formatName ? _WordFormat2.default.enumValueOf(formatName) : null;
	            return words.filter(function (w) {
	                return w.trim().length > 0;
	            }).map(function (word) {
	                var type = null;
	                if (word.startsWith('http:')) {
	                    _this2.containLinks = true;
	                    type = _WordType2.default.LINK;
	                } else if (word.startsWith('www.')) {
	                    _this2.containLinks = true;
	                    word = 'http://' + word;
	                    type = _WordType2.default.LINK;
	                }
	
	                if (format) {
	                    _this2.formattedWords++;
	                }
	                return new _Word2.default({
	                    string: word,
	                    type: type,
	                    format: format
	                });
	            });
	        }
	    }]);
	    return WordDetectionStream;
	}(_StashingStream3.default);
	
	function combineText(textItems) {
	    var text = '';
	    var lastItem;
	    textItems.forEach(function (textItem) {
	        var textToAdd = textItem.text;
	        if (!text.endsWith(' ') && !textToAdd.startsWith(' ')) {
	            if (lastItem) {
	                var xDistance = textItem.x - lastItem.x - lastItem.width;
	                if (xDistance > 5) {
	                    text += ' ';
	                }
	            } else {
	                if ((0, _stringFunctions.isListItemCharacter)(textItem.text)) {
	                    textToAdd += ' ';
	                }
	            }
	        }
	        text += textToAdd;
	        lastItem = textItem;
	    });
	    return text;
	}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(192);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(193), __esModule: true };

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(38);
	__webpack_require__(194);
	module.exports = __webpack_require__(9).Array.from;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(10);
	var $export = __webpack_require__(7);
	var toObject = __webpack_require__(26);
	var call = __webpack_require__(107);
	var isArrayIter = __webpack_require__(108);
	var toLength = __webpack_require__(54);
	var createProperty = __webpack_require__(195);
	var getIterFn = __webpack_require__(109);
	
	$export($export.S + $export.F * !__webpack_require__(196)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(13);
	var createDesc = __webpack_require__(21);
	
	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(59)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	exports.linesToText = linesToText;
	
	var _enumify = __webpack_require__(88);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// An Markdown word element
	var WordType = function (_Enum) {
	    (0, _inherits3.default)(WordType, _Enum);
	
	    function WordType() {
	        (0, _classCallCheck3.default)(this, WordType);
	        return (0, _possibleConstructorReturn3.default)(this, (WordType.__proto__ || (0, _getPrototypeOf2.default)(WordType)).apply(this, arguments));
	    }
	
	    return WordType;
	}(_enumify.Enum);
	
	exports.default = WordType;
	
	
	WordType.initEnum({
	    LINK: {
	        toText: function toText(string) {
	            return '[' + string + '](' + string + ')';
	        }
	    }
	});
	
	function linesToText(lineItems, disableInlineFormats) {
	    var text = '';
	    var openFormat;
	
	    var closeFormat = function closeFormat() {
	        text += openFormat.endSymbol;
	        openFormat = null;
	    };
	
	    lineItems.forEach(function (line, lineIndex) {
	        line.words.forEach(function (word, i) {
	            var wordType = word.type;
	            var wordFormat = word.format;
	            if (openFormat && (!wordFormat || wordFormat !== openFormat)) {
	                closeFormat();
	            }
	
	            if (i > 0 && !(wordType && wordType.attachWithoutWhitespace) && !isPunctationCharacter(word.string)) {
	                text += ' ';
	            }
	
	            if (wordFormat && !openFormat && !disableInlineFormats) {
	                openFormat = wordFormat;
	                text += openFormat.startSymbol;
	            }
	
	            if (wordType && (!disableInlineFormats || wordType.plainTextFormat)) {
	                text += wordType.toText(word.string);
	            } else {
	                text += word.string;
	            }
	        });
	        if (openFormat && (lineIndex == lineItems.length - 1 || firstFormat(lineItems[lineIndex + 1]) !== openFormat)) {
	            closeFormat();
	        }
	        text += '\n';
	    });
	    return text;
	}
	
	function firstFormat(lineItem) {
	    if (lineItem.words.length == 0) {
	        return null;
	    }
	    return lineItem.words[0].format;
	}
	
	function isPunctationCharacter(string) {
	    if (string.length != 1) {
	        return false;
	    }
	    return string[0] === '.' || string[0] === '!' || string[0] === '?';
	}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Abstract stream which allows stash items temporarily
	var StashingStream = function () {
	    function StashingStream() {
	        (0, _classCallCheck3.default)(this, StashingStream);
	
	        if (this.constructor === StashingStream) {
	            throw new TypeError("Can not construct abstract class.");
	        }
	        this.results = [];
	        this.stash = [];
	    }
	
	    (0, _createClass3.default)(StashingStream, [{
	        key: "consumeAll",
	        value: function consumeAll(items) {
	            var _this = this;
	
	            items.forEach(function (item) {
	                return _this.consume(item);
	            });
	        }
	    }, {
	        key: "consume",
	        value: function consume(item) {
	            if (this.shouldStash(item)) {
	                if (!this.matchesStash(item)) {
	                    this.flushStash();
	                }
	                this.pushOnStash(item);
	            } else {
	                if (this.stash.length > 0) {
	                    this.flushStash();
	                }
	                this.results.push(item);
	            }
	        }
	    }, {
	        key: "pushOnStash",
	        value: function pushOnStash(item) {
	            this.onPushOnStash(item);
	            this.stash.push(item);
	        }
	    }, {
	        key: "complete",
	        value: function complete() {
	            if (this.stash.length > 0) {
	                this.flushStash();
	            }
	            return this.results;
	        }
	
	        // return true if the item matches the items of the stack
	
	    }, {
	        key: "matchesStash",
	        value: function matchesStash(item) {
	            if (this.stash.length == 0) {
	                return true;
	            }
	            var lastItem = this.stash[this.stash.length - 1];
	            return this.doMatchesStash(lastItem, item);
	        }
	    }, {
	        key: "flushStash",
	        value: function flushStash() {
	            if (this.stash.length > 0) {
	                this.doFlushStash(this.stash, this.results);
	                this.stash = [];
	            }
	        }
	    }, {
	        key: "onPushOnStash",
	        value: function onPushOnStash(item) {// eslint-disable-line no-unused-vars
	            //sub-classes may override
	        }
	    }, {
	        key: "shouldStash",
	        value: function shouldStash(item) {
	            throw new TypeError("Do not call abstract method foo from child." + item);
	        }
	    }, {
	        key: "doMatchesStash",
	        value: function doMatchesStash(lastItem, item) {
	            throw new TypeError("Do not call abstract method foo from child." + lastItem + item);
	        }
	    }, {
	        key: "doFlushStash",
	        value: function doFlushStash(stash, results) {
	            throw new TypeError("Do not call abstract method foo from child." + stash + results);
	        }
	    }]);
	    return StashingStream;
	}();
	
	exports.default = StashingStream;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(191);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _set = __webpack_require__(200);
	
	var _set2 = _interopRequireDefault(_set);
	
	exports.isDigit = isDigit;
	exports.isNumber = isNumber;
	exports.hasOnly = hasOnly;
	exports.hasUpperCaseCharacterInMiddleOfWord = hasUpperCaseCharacterInMiddleOfWord;
	exports.normalizedCharCodeArray = normalizedCharCodeArray;
	exports.charCodeArray = charCodeArray;
	exports.removeLeadingWhitespaces = removeLeadingWhitespaces;
	exports.removeTrailingWhitespaces = removeTrailingWhitespaces;
	exports.prefixAfterWhitespace = prefixAfterWhitespace;
	exports.suffixBeforeWhitespace = suffixBeforeWhitespace;
	exports.isListItemCharacter = isListItemCharacter;
	exports.isListItem = isListItem;
	exports.isNumberedListItem = isNumberedListItem;
	exports.wordMatch = wordMatch;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MIN_DIGIT_CHAR_CODE = 48;
	var MAX_DIGIT_CHAR_CODE = 57;
	var WHITESPACE_CHAR_CODE = 32;
	var TAB_CHAR_CODE = 9;
	var DOT_CHAR_CODE = 46;
	
	function isDigit(charCode) {
	    return charCode >= MIN_DIGIT_CHAR_CODE && charCode <= MAX_DIGIT_CHAR_CODE;
	}
	
	function isNumber(string) {
	    for (var i = 0; i < string.length; i++) {
	        var charCode = string.charCodeAt(i);
	        if (!isDigit(charCode)) {
	            return false;
	        }
	    }
	    return true;
	}
	
	function hasOnly(string, char) {
	    var charCode = char.charCodeAt(0);
	    for (var i = 0; i < string.length; i++) {
	        var aCharCode = string.charCodeAt(i);
	        if (aCharCode != charCode) {
	            return false;
	        }
	    }
	    return true;
	}
	
	function hasUpperCaseCharacterInMiddleOfWord(text) {
	    var beginningOfWord = true;
	    for (var i = 0; i < text.length; i++) {
	        var character = text.charAt(i);
	        if (character === ' ') {
	            beginningOfWord = true;
	        } else {
	            if (!beginningOfWord && isNaN(character * 1) && character == character.toUpperCase() && character.toUpperCase() != character.toLowerCase()) {
	                return true;
	            }
	            beginningOfWord = false;
	        }
	    }
	    return false;
	}
	
	// Remove whitespace/dots + to uppercase
	function normalizedCharCodeArray(string) {
	    string = string.toUpperCase();
	    return charCodeArray(string).filter(function (charCode) {
	        return charCode != WHITESPACE_CHAR_CODE && charCode != TAB_CHAR_CODE && charCode != DOT_CHAR_CODE;
	    });
	}
	
	function charCodeArray(string) {
	    var charCodes = [];
	    for (var i = 0; i < string.length; i++) {
	        charCodes.push(string.charCodeAt(i));
	    }
	    return charCodes;
	}
	
	function removeLeadingWhitespaces(string) {
	    while (string.charCodeAt(0) === WHITESPACE_CHAR_CODE) {
	        string = string.substring(1, string.length);
	    }
	    return string;
	}
	
	function removeTrailingWhitespaces(string) {
	    while (string.charCodeAt(string.length - 1) === WHITESPACE_CHAR_CODE) {
	        string = string.substring(0, string.length - 1);
	    }
	    return string;
	}
	
	function prefixAfterWhitespace(prefix, string) {
	    if (string.charCodeAt(0) == WHITESPACE_CHAR_CODE) {
	        string = removeLeadingWhitespaces(string);
	        return ' ' + prefix + string;
	    } else {
	        return prefix + string;
	    }
	}
	
	function suffixBeforeWhitespace(string, suffix) {
	    if (string.charCodeAt(string.length - 1) == WHITESPACE_CHAR_CODE) {
	        string = removeTrailingWhitespaces(string);
	        return string + suffix + ' ';
	    } else {
	        return string + suffix;
	    }
	}
	
	function isListItemCharacter(string) {
	    if (string.length > 1) {
	        return false;
	    }
	    var char = string.charAt(0);
	    return char === '-' || char === '•' || char === '–';
	}
	
	function isListItem(string) {
	    return (/^[\s]*[-•–][\s].*$/g.test(string)
	    );
	}
	
	function isNumberedListItem(string) {
	    return (/^[\s]*[\d]{1,4}[a-z][\)].*$/g.test(string)
	    );
	}
	
	function wordMatch(string1, string2) {
	    var words1 = new _set2.default(string1.toUpperCase().split(' '));
	    var words2 = new _set2.default(string2.toUpperCase().split(' '));
	    var intersection = new _set2.default([].concat((0, _toConsumableArray3.default)(words1)).filter(function (x) {
	        return words2.has(x);
	    }));
	    return intersection.size / Math.max(words1.size, words2.size);
	}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(201), __esModule: true };

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(77);
	__webpack_require__(38);
	__webpack_require__(60);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	module.exports = __webpack_require__(9).Set;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(103);
	var validate = __webpack_require__(112);
	var SET = 'Set';
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(113)(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, strong);


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(7);
	
	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(118)('Set') });


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	__webpack_require__(121)('Set');


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	__webpack_require__(123)('Set');


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	exports.isHeadline = isHeadline;
	exports.blockToText = blockToText;
	exports.headlineByLevel = headlineByLevel;
	
	var _enumify = __webpack_require__(88);
	
	var _WordType = __webpack_require__(197);
	
	var _LineItemBlock = __webpack_require__(189);
	
	var _LineItemBlock2 = _interopRequireDefault(_LineItemBlock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// An Markdown block
	var BlockType = function (_Enum) {
	    (0, _inherits3.default)(BlockType, _Enum);
	
	    function BlockType() {
	        (0, _classCallCheck3.default)(this, BlockType);
	        return (0, _possibleConstructorReturn3.default)(this, (BlockType.__proto__ || (0, _getPrototypeOf2.default)(BlockType)).apply(this, arguments));
	    }
	
	    return BlockType;
	}(_enumify.Enum);
	
	//TODO rename to BlockType
	
	exports.default = BlockType;
	BlockType.initEnum({
	    H1: {
	        headline: true,
	        headlineLevel: 1,
	        toText: function toText(block) {
	            return '# ' + (0, _WordType.linesToText)(block.items, true);
	        }
	    },
	    H2: {
	        headline: true,
	        headlineLevel: 2,
	        toText: function toText(block) {
	            return '## ' + (0, _WordType.linesToText)(block.items, true);
	        }
	    },
	    H3: {
	        headline: true,
	        headlineLevel: 3,
	        toText: function toText(block) {
	            return '### ' + (0, _WordType.linesToText)(block.items, true);
	        }
	    },
	    H4: {
	        headline: true,
	        headlineLevel: 4,
	        toText: function toText(block) {
	            return '#### ' + (0, _WordType.linesToText)(block.items, true);
	        }
	    },
	    H5: {
	        headline: true,
	        headlineLevel: 5,
	        toText: function toText(block) {
	            return '##### ' + (0, _WordType.linesToText)(block.items, true);
	        }
	    },
	    H6: {
	        headline: true,
	        headlineLevel: 6,
	        toText: function toText(block) {
	            return '###### ' + (0, _WordType.linesToText)(block.items, true);
	        }
	    },
	    TOC: {
	        mergeToBlock: true,
	        toText: function toText(block) {
	            return (0, _WordType.linesToText)(block.items, true);
	        }
	    },
	    FOOTNOTES: {
	        mergeToBlock: true,
	        mergeFollowingNonTypedItems: true,
	        toText: function toText(block) {
	            return (0, _WordType.linesToText)(block.items, false);
	        }
	    },
	    LIST: {
	        mergeToBlock: true,
	        mergeFollowingNonTypedItemsWithSmallDistance: true,
	        toText: function toText(block) {
	            return (0, _WordType.linesToText)(block.items, false);
	        }
	    },
	    PARAGRAPH: {
	        toText: function toText(block) {
	            return (0, _WordType.linesToText)(block.items, false);
	        }
	    }
	});
	
	function isHeadline(type) {
	    return type && type.name.length == 2 && type.name[0] === 'H';
	}
	
	function blockToText(block) {
	    if (!block.type) {
	        return (0, _WordType.linesToText)(block.items, false);
	    }
	    return block.type.toText(block);
	}
	
	function headlineByLevel(level) {
	    if (level == 1) {
	        return BlockType.H1;
	    } else if (level == 2) {
	        return BlockType.H2;
	    } else if (level == 3) {
	        return BlockType.H3;
	    } else if (level == 4) {
	        return BlockType.H4;
	    } else if (level == 5) {
	        return BlockType.H5;
	    } else if (level == 6) {
	        return BlockType.H6;
	    }
	    throw "Unsupported headline level: " + level + " (supported are 1-6)";
	}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ToLineItemTransformation = __webpack_require__(182);
	
	var _ToLineItemTransformation2 = _interopRequireDefault(_ToLineItemTransformation);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _Annotation = __webpack_require__(179);
	
	var _stringFunctions = __webpack_require__(199);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function hashCodeIgnoringSpacesAndNumbers(string) {
	    var hash = 0;
	    if (string.trim().length === 0) return hash;
	    for (var i = 0; i < string.length; i++) {
	        var charCode = string.charCodeAt(i);
	        if (!(0, _stringFunctions.isDigit)(charCode) && charCode != 32 && charCode != 160) {
	            hash = (hash << 5) - hash + charCode;
	            hash |= 0; // Convert to 32bit integer
	        }
	    }
	    return hash;
	}
	
	// Remove elements with similar content on same page positions, like page numbers, licenes information, etc...
	
	var RemoveRepetitiveElements = function (_ToLineItemTransforma) {
	    (0, _inherits3.default)(RemoveRepetitiveElements, _ToLineItemTransforma);
	
	    function RemoveRepetitiveElements() {
	        (0, _classCallCheck3.default)(this, RemoveRepetitiveElements);
	        return (0, _possibleConstructorReturn3.default)(this, (RemoveRepetitiveElements.__proto__ || (0, _getPrototypeOf2.default)(RemoveRepetitiveElements)).call(this, "Remove Repetitive Elements"));
	    }
	
	    // The idea is the following:
	    // - For each page, collect all items of the first, and all items of the last line
	    // - Calculate how often these items occur accros all pages (hash ignoring numbers, whitespace, upper/lowercase)
	    // - Delete items occuring on more then 2/3 of all pages
	
	
	    (0, _createClass3.default)(RemoveRepetitiveElements, [{
	        key: 'transform',
	        value: function transform(parseResult) {
	
	            // find first and last lines per page
	            var pageStore = [];
	            var minLineHashRepetitions = {};
	            var maxLineHashRepetitions = {};
	            parseResult.pages.forEach(function (page) {
	                var minMaxItems = page.items.reduce(function (itemStore, item) {
	                    if (item.y < itemStore.minY) {
	                        itemStore.minElements = [item];
	                        itemStore.minY = item.y;
	                    } else if (item.y == itemStore.minY) {
	                        itemStore.minElements.push(item);
	                    }
	                    if (item.y > itemStore.maxY) {
	                        itemStore.maxElements = [item];
	                        itemStore.maxY = item.y;
	                    } else if (item.y == itemStore.maxY) {
	                        itemStore.maxElements.push(item);
	                    }
	                    return itemStore;
	                }, {
	                    minY: 999,
	                    maxY: 0,
	                    minElements: [],
	                    maxElements: []
	                });
	
	                var minLineHash = hashCodeIgnoringSpacesAndNumbers(minMaxItems.minElements.reduce(function (combinedString, item) {
	                    return combinedString + item.text().toUpperCase();
	                }, ''));
	                var maxLineHash = hashCodeIgnoringSpacesAndNumbers(minMaxItems.maxElements.reduce(function (combinedString, item) {
	                    return combinedString + item.text().toUpperCase();
	                }, ''));
	                pageStore.push({
	                    minElements: minMaxItems.minElements,
	                    maxElements: minMaxItems.maxElements,
	                    minLineHash: minLineHash,
	                    maxLineHash: maxLineHash
	                });
	                minLineHashRepetitions[minLineHash] = minLineHashRepetitions[minLineHash] ? minLineHashRepetitions[minLineHash] + 1 : 1;
	                maxLineHashRepetitions[maxLineHash] = maxLineHashRepetitions[maxLineHash] ? maxLineHashRepetitions[maxLineHash] + 1 : 1;
	            });
	
	            // now annoate all removed items
	            var removedHeader = 0;
	            var removedFooter = 0;
	            parseResult.pages.forEach(function (page, i) {
	                if (minLineHashRepetitions[pageStore[i].minLineHash] >= Math.max(3, parseResult.pages.length * 2 / 3)) {
	                    pageStore[i].minElements.forEach(function (item) {
	                        item.annotation = _Annotation.REMOVED_ANNOTATION;
	                    });
	                    removedFooter++;
	                }
	                if (maxLineHashRepetitions[pageStore[i].maxLineHash] >= Math.max(3, parseResult.pages.length * 2 / 3)) {
	                    pageStore[i].maxElements.forEach(function (item) {
	                        item.annotation = _Annotation.REMOVED_ANNOTATION;
	                    });
	                    removedHeader++;
	                }
	            });
	
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult, {
	                messages: ['Removed Header: ' + removedHeader, 'Removed Footers: ' + removedFooter]
	            }));
	        }
	    }]);
	    return RemoveRepetitiveElements;
	}(_ToLineItemTransformation2.default);
	
	exports.default = RemoveRepetitiveElements;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(191);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ToLineItemTransformation = __webpack_require__(182);
	
	var _ToLineItemTransformation2 = _interopRequireDefault(_ToLineItemTransformation);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _LineItem = __webpack_require__(183);
	
	var _LineItem2 = _interopRequireDefault(_LineItem);
	
	var _StashingStream2 = __webpack_require__(198);
	
	var _StashingStream3 = _interopRequireDefault(_StashingStream2);
	
	var _Annotation = __webpack_require__(179);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Converts vertical text to horizontal
	var VerticalToHorizontal = function (_ToLineItemTransforma) {
	    (0, _inherits3.default)(VerticalToHorizontal, _ToLineItemTransforma);
	
	    function VerticalToHorizontal() {
	        (0, _classCallCheck3.default)(this, VerticalToHorizontal);
	        return (0, _possibleConstructorReturn3.default)(this, (VerticalToHorizontal.__proto__ || (0, _getPrototypeOf2.default)(VerticalToHorizontal)).call(this, "Vertical to Horizontal Text"));
	    }
	
	    (0, _createClass3.default)(VerticalToHorizontal, [{
	        key: 'transform',
	        value: function transform(parseResult) {
	            var foundVerticals = 0;
	            parseResult.pages.forEach(function (page) {
	                var stream = new VerticalsStream();
	                stream.consumeAll(page.items);
	                page.items = stream.complete();
	                foundVerticals += stream.foundVerticals;
	            });
	
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult, {
	                messages: ["Converted " + foundVerticals + " verticals"]
	            }));
	        }
	    }]);
	    return VerticalToHorizontal;
	}(_ToLineItemTransformation2.default);
	
	exports.default = VerticalToHorizontal;
	
	var VerticalsStream = function (_StashingStream) {
	    (0, _inherits3.default)(VerticalsStream, _StashingStream);
	
	    function VerticalsStream() {
	        (0, _classCallCheck3.default)(this, VerticalsStream);
	
	        var _this2 = (0, _possibleConstructorReturn3.default)(this, (VerticalsStream.__proto__ || (0, _getPrototypeOf2.default)(VerticalsStream)).call(this));
	
	        _this2.foundVerticals = 0;
	        return _this2;
	    }
	
	    (0, _createClass3.default)(VerticalsStream, [{
	        key: 'shouldStash',
	        value: function shouldStash(item) {
	            return item.words.length == 1 && item.words[0].string.length == 1;
	        }
	    }, {
	        key: 'doMatchesStash',
	        value: function doMatchesStash(lastItem, item) {
	            return lastItem.y - item.y > 5 && lastItem.words[0].type === item.words[0].type;
	        }
	    }, {
	        key: 'doFlushStash',
	        value: function doFlushStash(stash, results) {
	            if (stash.length > 5) {
	                // unite
	                var combinedWords = [];
	                var minX = 999;
	                var maxY = 0;
	                var sumWidth = 0;
	                var maxHeight = 0;
	                stash.forEach(function (oneCharacterLine) {
	                    oneCharacterLine.annotation = _Annotation.REMOVED_ANNOTATION;
	                    results.push(oneCharacterLine);
	                    combinedWords.push(oneCharacterLine.words[0]);
	                    minX = Math.min(minX, oneCharacterLine.x);
	                    maxY = Math.max(maxY, oneCharacterLine.y);
	                    sumWidth += oneCharacterLine.width;
	                    maxHeight = Math.max(maxHeight, oneCharacterLine.height);
	                });
	                results.push(new _LineItem2.default((0, _extends3.default)({}, stash[0], {
	                    x: minX,
	                    y: maxY,
	                    width: sumWidth,
	                    height: maxHeight,
	                    words: combinedWords,
	                    annotation: _Annotation.ADDED_ANNOTATION
	                })));
	                this.foundVerticals++;
	            } else {
	                //add as singles
	                results.push.apply(results, (0, _toConsumableArray3.default)(stash));
	            }
	        }
	    }]);
	    return VerticalsStream;
	}(_StashingStream3.default);

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getIterator2 = __webpack_require__(210);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _stringify = __webpack_require__(93);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _slicedToArray2 = __webpack_require__(213);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _toConsumableArray2 = __webpack_require__(191);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _set = __webpack_require__(200);
	
	var _set2 = _interopRequireDefault(_set);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ToLineItemTransformation = __webpack_require__(182);
	
	var _ToLineItemTransformation2 = _interopRequireDefault(_ToLineItemTransformation);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _LineItem = __webpack_require__(183);
	
	var _LineItem2 = _interopRequireDefault(_LineItem);
	
	var _Word = __webpack_require__(184);
	
	var _Word2 = _interopRequireDefault(_Word);
	
	var _HeadlineFinder = __webpack_require__(217);
	
	var _HeadlineFinder2 = _interopRequireDefault(_HeadlineFinder);
	
	var _Annotation = __webpack_require__(179);
	
	var _BlockType = __webpack_require__(206);
	
	var _BlockType2 = _interopRequireDefault(_BlockType);
	
	var _stringFunctions = __webpack_require__(199);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Detect table of contents pages plus linked headlines
	var DetectTOC = function (_ToLineItemTransforma) {
	    (0, _inherits3.default)(DetectTOC, _ToLineItemTransforma);
	
	    function DetectTOC() {
	        (0, _classCallCheck3.default)(this, DetectTOC);
	        return (0, _possibleConstructorReturn3.default)(this, (DetectTOC.__proto__ || (0, _getPrototypeOf2.default)(DetectTOC)).call(this, "Detect TOC"));
	    }
	
	    (0, _createClass3.default)(DetectTOC, [{
	        key: 'transform',
	        value: function transform(parseResult) {
	            var tocPages = [];
	            var maxPagesToEvaluate = Math.min(20, parseResult.pages.length);
	            var linkLeveler = new LinkLeveler();
	
	            var tocLinks = [];
	            var lastTocPage;
	            var headlineItem;
	            parseResult.pages.slice(0, maxPagesToEvaluate).forEach(function (page) {
	                var lineItemsWithDigits = 0;
	                var unknownLines = new _set2.default();
	                var pageTocLinks = [];
	                var lastWordsWithoutNumber;
	                var lastLine;
	                //find lines ending with a number per page
	                page.items.forEach(function (line) {
	                    var words = line.words.filter(function (word) {
	                        return !(0, _stringFunctions.hasOnly)(word.string, '.');
	                    });
	                    var digits = [];
	                    while (words.length > 0 && (0, _stringFunctions.isNumber)(words[words.length - 1].string)) {
	                        var lastWord = words.pop();
	                        digits.unshift(lastWord.string);
	                    }
	
	                    if (digits.length == 0 && words.length > 0) {
	                        var _lastWord = words[words.length - 1];
	                        while ((0, _stringFunctions.isDigit)(_lastWord.string.charCodeAt(_lastWord.string.length - 1))) {
	                            digits.unshift(_lastWord.string.charAt(_lastWord.string.length - 1));
	                            _lastWord.string = _lastWord.string.substring(0, _lastWord.string.length - 1);
	                        }
	                    }
	                    var endsWithDigit = digits.length > 0;
	                    if (endsWithDigit) {
	                        endsWithDigit = true;
	                        if (lastWordsWithoutNumber) {
	                            // 2-line item ?
	                            words.push.apply(words, (0, _toConsumableArray3.default)(lastWordsWithoutNumber));
	                            lastWordsWithoutNumber = null;
	                        }
	                        pageTocLinks.push(new TocLink({
	                            pageNumber: parseInt(digits.join('')),
	                            lineItem: new _LineItem2.default((0, _extends3.default)({}, line, {
	                                words: words
	                            }))
	                        }));
	                        lineItemsWithDigits++;
	                    } else {
	                        if (!headlineItem) {
	                            headlineItem = line;
	                        } else {
	                            if (lastWordsWithoutNumber) {
	                                unknownLines.add(lastLine);
	                            }
	                            lastWordsWithoutNumber = words;
	                            lastLine = line;
	                        }
	                    }
	                });
	
	                // page has been processed
	                if (lineItemsWithDigits * 100 / page.items.length > 75) {
	                    tocPages.push(page.index + 1);
	                    lastTocPage = page;
	                    linkLeveler.levelPageItems(pageTocLinks);
	                    tocLinks.push.apply(tocLinks, pageTocLinks);
	
	                    var newBlocks = [];
	                    page.items.forEach(function (line) {
	                        if (!unknownLines.has(line)) {
	                            line.annotation = _Annotation.REMOVED_ANNOTATION;
	                        }
	                        newBlocks.push(line);
	                        if (line === headlineItem) {
	                            newBlocks.push(new _LineItem2.default((0, _extends3.default)({}, line, {
	                                type: _BlockType2.default.H2,
	                                annotation: _Annotation.ADDED_ANNOTATION
	                            })));
	                        }
	                    });
	                    page.items = newBlocks;
	                } else {
	                    headlineItem = null;
	                }
	            });
	
	            //all  pages have been processed
	            var foundHeadlines = tocLinks.length;
	            var notFoundHeadlines = [];
	            var foundBySize = [];
	            var headlineTypeToHeightRange = {}; //H1={min:23, max:25}
	
	            if (tocPages.length > 0) {
	                // Add TOC items
	                tocLinks.forEach(function (tocLink) {
	                    lastTocPage.items.push(new _LineItem2.default({
	                        words: [new _Word2.default({
	                            string: ' '.repeat(tocLink.level * 3) + '-'
	                        })].concat(tocLink.lineItem.words),
	                        type: _BlockType2.default.TOC,
	                        annotation: _Annotation.ADDED_ANNOTATION
	                    }));
	                });
	
	                // Add linked headers
	                var pageMapping = detectPageMappingNumber(parseResult.pages.filter(function (page) {
	                    return page.index > lastTocPage.index;
	                }), tocLinks);
	                tocLinks.forEach(function (tocLink) {
	                    var linkedPage = parseResult.pages[tocLink.pageNumber + pageMapping];
	                    var foundHealineItems;
	                    if (linkedPage) {
	                        foundHealineItems = findHeadlineItems(linkedPage, tocLink.lineItem.text());
	                        if (!foundHealineItems) {
	                            // pages are off by 1 ?
	                            linkedPage = parseResult.pages[tocLink.pageNumber + pageMapping + 1];
	                            if (linkedPage) {
	                                foundHealineItems = findHeadlineItems(linkedPage, tocLink.lineItem.text());
	                            }
	                        }
	                    }
	                    if (foundHealineItems) {
	                        addHeadlineItems(linkedPage, tocLink, foundHealineItems, headlineTypeToHeightRange);
	                    } else {
	                        notFoundHeadlines.push(tocLink);
	                    }
	                });
	
	                // Try to find linked headers by height
	                var fromPage = lastTocPage.index + 2;
	                var lastNotFound = [];
	                var rollupLastNotFound = function rollupLastNotFound(currentPageNumber) {
	                    if (lastNotFound.length > 0) {
	                        lastNotFound.forEach(function (notFoundTocLink) {
	                            var headlineType = (0, _BlockType.headlineByLevel)(notFoundTocLink.level + 2);
	                            var heightRange = headlineTypeToHeightRange[headlineType.name];
	                            if (heightRange) {
	                                var _findPageAndLineFromH = findPageAndLineFromHeadline(parseResult.pages, notFoundTocLink, heightRange, fromPage, currentPageNumber),
	                                    _findPageAndLineFromH2 = (0, _slicedToArray3.default)(_findPageAndLineFromH, 2),
	                                    pageIndex = _findPageAndLineFromH2[0],
	                                    lineIndex = _findPageAndLineFromH2[1];
	
	                                if (lineIndex > -1) {
	                                    var page = parseResult.pages[pageIndex];
	                                    page.items[lineIndex].annotation = _Annotation.REMOVED_ANNOTATION;
	                                    page.items.splice(lineIndex + 1, 0, new _LineItem2.default((0, _extends3.default)({}, notFoundTocLink.lineItem, {
	                                        type: headlineType,
	                                        annotation: _Annotation.ADDED_ANNOTATION
	                                    })));
	                                    foundBySize.push(notFoundTocLink);
	                                }
	                            }
	                        });
	                        lastNotFound = [];
	                    }
	                };
	                if (notFoundHeadlines.length > 0) {
	                    tocLinks.forEach(function (tocLink) {
	                        if (notFoundHeadlines.includes(tocLink)) {
	                            lastNotFound.push(tocLink);
	                        } else {
	                            rollupLastNotFound(tocLink.pageNumber);
	                            fromPage = tocLink.pageNumber;
	                        }
	                    });
	                    if (lastNotFound.length > 0) {
	                        rollupLastNotFound(parseResult.pages.length);
	                    }
	                }
	            }
	
	            var messages = [];
	            messages.push('Detected ' + tocPages.length + ' table of content pages');
	            if (tocPages.length > 0) {
	                messages.push('TOC headline heights: ' + (0, _stringify2.default)(headlineTypeToHeightRange));
	                messages.push('Found TOC headlines: ' + (foundHeadlines - notFoundHeadlines.length + foundBySize.length) + '/' + foundHeadlines);
	            }
	            if (notFoundHeadlines.length > 0) {
	                messages.push('Found TOC headlines (by size): ' + foundBySize.map(function (tocLink) {
	                    return tocLink.lineItem.text();
	                }));
	                messages.push('Missing TOC headlines: ' + notFoundHeadlines.filter(function (fTocLink) {
	                    return !foundBySize.includes(fTocLink);
	                }).map(function (tocLink) {
	                    return tocLink.lineItem.text() + '=>' + tocLink.pageNumber;
	                }));
	            }
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult, {
	                globals: (0, _extends3.default)({}, parseResult.globals, {
	                    tocPages: tocPages,
	                    headlineTypeToHeightRange: headlineTypeToHeightRange
	                }),
	                messages: messages
	            }));
	        }
	    }]);
	    return DetectTOC;
	}(_ToLineItemTransformation2.default);
	
	//Find out how the TOC page link actualy translates to the page.index
	
	
	exports.default = DetectTOC;
	function detectPageMappingNumber(pages, tocLinks) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = (0, _getIterator3.default)(tocLinks), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var tocLink = _step.value;
	
	            var page = findPageWithHeadline(pages, tocLink.lineItem.text());
	            if (page) {
	                return page.index - tocLink.pageNumber;
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return null;
	}
	
	function findPageWithHeadline(pages, headline) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	        for (var _iterator2 = (0, _getIterator3.default)(pages), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var page = _step2.value;
	
	            if (findHeadlineItems(page, headline)) {
	                return page;
	            }
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	
	    return null;
	}
	
	function findHeadlineItems(page, headline) {
	    var headlineFinder = new _HeadlineFinder2.default({
	        headline: headline
	    });
	    var lineIndex = 0;
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;
	
	    try {
	        for (var _iterator3 = (0, _getIterator3.default)(page.items), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var line = _step3.value;
	
	            var headlineItems = headlineFinder.consume(line);
	            if (headlineItems) {
	                return {
	                    lineIndex: lineIndex,
	                    headlineItems: headlineItems
	                };
	            }
	            lineIndex++;
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }
	
	    return null;
	}
	
	function addHeadlineItems(page, tocLink, foundItems, headlineTypeToHeightRange) {
	    foundItems.headlineItems.forEach(function (item) {
	        return item.annotation = _Annotation.REMOVED_ANNOTATION;
	    });
	    var headlineType = (0, _BlockType.headlineByLevel)(tocLink.level + 2);
	    var headlineHeight = foundItems.headlineItems.reduce(function (max, item) {
	        return Math.max(max, item.height);
	    }, 0);
	    page.items.splice(foundItems.lineIndex + 1, 0, new _LineItem2.default((0, _extends3.default)({}, foundItems.headlineItems[0], {
	        words: tocLink.lineItem.words,
	        height: headlineHeight,
	        type: headlineType,
	        annotation: _Annotation.ADDED_ANNOTATION
	    })));
	    var range = headlineTypeToHeightRange[headlineType.name];
	    if (range) {
	        range.min = Math.min(range.min, headlineHeight);
	        range.max = Math.max(range.max, headlineHeight);
	    } else {
	        range = {
	            min: headlineHeight,
	            max: headlineHeight
	        };
	        headlineTypeToHeightRange[headlineType.name] = range;
	    }
	}
	
	function findPageAndLineFromHeadline(pages, tocLink, heightRange, fromPage, toPage) {
	    var linkText = tocLink.lineItem.text().toUpperCase();
	    for (var i = fromPage; i <= toPage; i++) {
	        var page = pages[i - 1];
	        var lineIndex = page.items.findIndex(function (line) {
	            if (!line.type && !line.annotation && line.height >= heightRange.min && line.height <= heightRange.max) {
	                var match = (0, _stringFunctions.wordMatch)(linkText, line.text());
	                return match >= 0.5;
	            }
	            return false;
	        });
	        if (lineIndex > -1) return [i - 1, lineIndex];
	    }
	    return [-1, -1];
	}
	
	var LinkLeveler = function () {
	    function LinkLeveler() {
	        (0, _classCallCheck3.default)(this, LinkLeveler);
	
	        this.levelByMethod = null;
	        this.uniqueFonts = [];
	    }
	
	    (0, _createClass3.default)(LinkLeveler, [{
	        key: 'levelPageItems',
	        value: function levelPageItems(tocLinks) {
	            if (!this.levelByMethod) {
	                var uniqueX = this.calculateUniqueX(tocLinks);
	                if (uniqueX.length > 1) {
	                    this.levelByMethod = this.levelByXDiff;
	                } else {
	                    var uniqueFonts = this.calculateUniqueFonts(tocLinks);
	                    if (uniqueFonts.length > 1) {
	                        this.uniqueFonts = uniqueFonts;
	                        this.levelByMethod = this.levelByFont;
	                    } else {
	                        this.levelByMethod = this.levelToZero;
	                    }
	                }
	            }
	            this.levelByMethod(tocLinks);
	        }
	    }, {
	        key: 'levelByXDiff',
	        value: function levelByXDiff(tocLinks) {
	            var uniqueX = this.calculateUniqueX(tocLinks);
	            tocLinks.forEach(function (link) {
	                link.level = uniqueX.indexOf(link.lineItem.x);
	            });
	        }
	    }, {
	        key: 'levelByFont',
	        value: function levelByFont(tocLinks) {
	            var _this2 = this;
	
	            tocLinks.forEach(function (link) {
	                link.level = _this2.uniqueFonts.indexOf(link.lineItem.font);
	            });
	        }
	    }, {
	        key: 'levelToZero',
	        value: function levelToZero(tocLinks) {
	            tocLinks.forEach(function (link) {
	                link.level = 0;
	            });
	        }
	    }, {
	        key: 'calculateUniqueX',
	        value: function calculateUniqueX(tocLinks) {
	            var uniqueX = tocLinks.reduce(function (uniquesArray, link) {
	                if (uniquesArray.indexOf(link.lineItem.x) < 0) uniquesArray.push(link.lineItem.x);
	                return uniquesArray;
	            }, []);
	
	            uniqueX.sort(function (a, b) {
	                return a - b;
	            });
	
	            return uniqueX;
	        }
	    }, {
	        key: 'calculateUniqueFonts',
	        value: function calculateUniqueFonts(tocLinks) {
	            var uniqueFont = tocLinks.reduce(function (uniquesArray, link) {
	                if (uniquesArray.indexOf(link.lineItem.font) < 0) uniquesArray.push(link.lineItem.font);
	                return uniquesArray;
	            }, []);
	
	            return uniqueFont;
	        }
	    }]);
	    return LinkLeveler;
	}();
	
	var TocLink = function TocLink(options) {
	    (0, _classCallCheck3.default)(this, TocLink);
	
	    this.lineItem = options.lineItem;
	    this.pageNumber = options.pageNumber;
	    this.level = 0;
	};

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(211), __esModule: true };

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	__webpack_require__(38);
	module.exports = __webpack_require__(212);


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(14);
	var get = __webpack_require__(109);
	module.exports = __webpack_require__(9).getIterator = function (it) {
	  var iterFn = get(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(214);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(210);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(215), __esModule: true };

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(60);
	__webpack_require__(38);
	module.exports = __webpack_require__(216);


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(110);
	var ITERATOR = __webpack_require__(59)('iterator');
	var Iterators = __webpack_require__(44);
	module.exports = __webpack_require__(9).isIterable = function (it) {
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    // eslint-disable-next-line no-prototype-builtins
	    || Iterators.hasOwnProperty(classof(O));
	};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _stringFunctions = __webpack_require__(199);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HeadlineFinder = function () {
	    function HeadlineFinder(options) {
	        (0, _classCallCheck3.default)(this, HeadlineFinder);
	
	        this.headlineCharCodes = (0, _stringFunctions.normalizedCharCodeArray)(options.headline);
	        this.stackedLineItems = [];
	        this.stackedChars = 0;
	    }
	
	    (0, _createClass3.default)(HeadlineFinder, [{
	        key: 'consume',
	        value: function consume(lineItem) {
	            //TODO avoid join
	            var normalizedCharCodes = (0, _stringFunctions.normalizedCharCodeArray)(lineItem.text());
	            var matchAll = this.matchAll(normalizedCharCodes);
	            if (matchAll) {
	                this.stackedLineItems.push(lineItem);
	                this.stackedChars += normalizedCharCodes.length;
	                if (this.stackedChars == this.headlineCharCodes.length) {
	                    return this.stackedLineItems;
	                }
	            } else {
	                if (this.stackedChars > 0) {
	                    this.stackedChars = 0;
	                    this.stackedLineItems = [];
	                    this.consume(lineItem); // test again without stack
	                }
	            }
	            return null;
	        }
	    }, {
	        key: 'matchAll',
	        value: function matchAll(normalizedCharCodes) {
	            for (var i = 0; i < normalizedCharCodes.length; i++) {
	                var headlineChar = this.headlineCharCodes[this.stackedChars + i];
	                var textItemChar = normalizedCharCodes[i];
	                if (textItemChar != headlineChar) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }]);
	    return HeadlineFinder;
	}();
	
	exports.default = HeadlineFinder;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ToLineItemTransformation = __webpack_require__(182);
	
	var _ToLineItemTransformation2 = _interopRequireDefault(_ToLineItemTransformation);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _LineItem = __webpack_require__(183);
	
	var _LineItem2 = _interopRequireDefault(_LineItem);
	
	var _Word = __webpack_require__(184);
	
	var _Word2 = _interopRequireDefault(_Word);
	
	var _Annotation = __webpack_require__(179);
	
	var _BlockType = __webpack_require__(206);
	
	var _BlockType2 = _interopRequireDefault(_BlockType);
	
	var _stringFunctions = __webpack_require__(199);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Detect items starting with -, •, etc...
	var DetectListItems = function (_ToLineItemTransforma) {
	    (0, _inherits3.default)(DetectListItems, _ToLineItemTransforma);
	
	    function DetectListItems() {
	        (0, _classCallCheck3.default)(this, DetectListItems);
	        return (0, _possibleConstructorReturn3.default)(this, (DetectListItems.__proto__ || (0, _getPrototypeOf2.default)(DetectListItems)).call(this, "Detect List Items"));
	    }
	
	    (0, _createClass3.default)(DetectListItems, [{
	        key: 'transform',
	        value: function transform(parseResult) {
	            var foundListItems = 0;
	            var foundNumberedItems = 0;
	
	            parseResult.pages.forEach(function (page) {
	                var newItems = [];
	                page.items.forEach(function (item) {
	                    newItems.push(item);
	                    if (!item.type) {
	                        var text = item.text();
	
	                        if ((0, _stringFunctions.isListItemCharacter)(item.words[0].string)) {
	                            foundListItems++;
	                            if (item.words[0].string === '-') {
	                                item.annotation = _Annotation.DETECTED_ANNOTATION;
	                                item.type = _BlockType2.default.LIST;
	                            } else {
	                                item.annotation = _Annotation.REMOVED_ANNOTATION;
	                                var newWords = item.words.map(function (word) {
	                                    return new _Word2.default((0, _extends3.default)({}, word));
	                                });
	                                newWords[0].string = '-';
	                                newItems.push(new _LineItem2.default((0, _extends3.default)({}, item, {
	                                    words: newWords,
	                                    annotation: _Annotation.ADDED_ANNOTATION,
	                                    type: _BlockType2.default.LIST
	                                })));
	                            }
	                        } else if ((0, _stringFunctions.isNumberedListItem)(text)) {
	                            //TODO check that starts with 1 (kala chakra)
	                            foundNumberedItems++;
	                            item.annotation = _Annotation.DETECTED_ANNOTATION;
	                            item.type = _BlockType2.default.LIST;
	                        }
	                    }
	                });
	                page.items = newItems;
	            });
	
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult, {
	                messages: ['Detected ' + foundListItems + ' plain list items.', 'Detected ' + foundNumberedItems + ' numbered list items.']
	            }));
	        }
	    }]);
	    return DetectListItems;
	}(_ToLineItemTransformation2.default);
	
	exports.default = DetectListItems;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _set = __webpack_require__(200);
	
	var _set2 = _interopRequireDefault(_set);
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(90);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ToLineItemTransformation = __webpack_require__(182);
	
	var _ToLineItemTransformation2 = _interopRequireDefault(_ToLineItemTransformation);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _Annotation = __webpack_require__(179);
	
	var _BlockType = __webpack_require__(206);
	
	var _BlockType2 = _interopRequireDefault(_BlockType);
	
	var _stringFunctions = __webpack_require__(199);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Detect headlines based on heights
	var DetectHeaders = function (_ToLineItemTransforma) {
	    (0, _inherits3.default)(DetectHeaders, _ToLineItemTransforma);
	
	    function DetectHeaders() {
	        (0, _classCallCheck3.default)(this, DetectHeaders);
	        return (0, _possibleConstructorReturn3.default)(this, (DetectHeaders.__proto__ || (0, _getPrototypeOf2.default)(DetectHeaders)).call(this, "Detect Headers"));
	    }
	
	    (0, _createClass3.default)(DetectHeaders, [{
	        key: 'transform',
	        value: function transform(parseResult) {
	            var _parseResult$globals = parseResult.globals,
	                tocPages = _parseResult$globals.tocPages,
	                headlineTypeToHeightRange = _parseResult$globals.headlineTypeToHeightRange,
	                mostUsedHeight = _parseResult$globals.mostUsedHeight,
	                mostUsedDistance = _parseResult$globals.mostUsedDistance,
	                mostUsedFont = _parseResult$globals.mostUsedFont,
	                maxHeight = _parseResult$globals.maxHeight;
	
	            var hasToc = tocPages.length > 0;
	            var detectedHeaders = 0;
	
	            // Handle title pages
	            var pagesWithMaxHeight = findPagesWithMaxHeight(parseResult.pages, maxHeight);
	            var min2ndLevelHeaderHeigthOnMaxPage = mostUsedHeight + (maxHeight - mostUsedHeight) / 4;
	            pagesWithMaxHeight.forEach(function (titlePage) {
	                titlePage.items.forEach(function (item) {
	                    var height = item.height;
	                    if (!item.type && height > min2ndLevelHeaderHeigthOnMaxPage) {
	                        if (height == maxHeight) {
	                            item.type = _BlockType2.default.H1;
	                        } else {
	                            item.type = _BlockType2.default.H2;
	                        }
	                        item.annotation = _Annotation.DETECTED_ANNOTATION;
	                        detectedHeaders++;
	                    }
	                });
	            });
	
	            if (hasToc) {
	                //Use existing headline heights to find additional headlines
	                var headlineTypes = (0, _keys2.default)(headlineTypeToHeightRange);
	                headlineTypes.forEach(function (headlineType) {
	                    var range = headlineTypeToHeightRange[headlineType];
	                    if (range.max > mostUsedHeight) {
	                        //use only very clear headlines, only use max
	                        parseResult.pages.forEach(function (page) {
	                            page.items.forEach(function (item) {
	                                if (!item.type && item.height == range.max) {
	                                    item.annotation = _Annotation.DETECTED_ANNOTATION;
	                                    item.type = _BlockType2.default.enumValueOf(headlineType);
	                                    detectedHeaders++;
	                                }
	                            });
	                        });
	                    }
	                });
	            } else {
	                //Categorize headlines by the text heights
	                var heights = [];
	                var lastHeight;
	                parseResult.pages.forEach(function (page) {
	                    page.items.forEach(function (item) {
	                        if (!item.type && item.height > mostUsedHeight && !(0, _stringFunctions.isListItem)(item.text())) {
	                            if (!heights.includes(item.height) && (!lastHeight || lastHeight > item.height)) {
	                                heights.push(item.height);
	                            }
	                        }
	                    });
	                });
	                heights.sort(function (a, b) {
	                    return b - a;
	                });
	
	                heights.forEach(function (height, i) {
	                    var headlineLevel = i + 2;
	                    if (headlineLevel <= 6) {
	                        var headlineType = (0, _BlockType.headlineByLevel)(2 + i);
	                        parseResult.pages.forEach(function (page) {
	                            page.items.forEach(function (item) {
	                                if (!item.type && item.height == height && !(0, _stringFunctions.isListItem)(item.text())) {
	                                    detectedHeaders++;
	                                    item.annotation = _Annotation.DETECTED_ANNOTATION;
	                                    item.type = headlineType;
	                                }
	                            });
	                        });
	                    }
	                });
	            }
	
	            //find headlines which have paragraph height
	            var smallesHeadlineLevel = 1;
	            parseResult.pages.forEach(function (page) {
	                page.items.forEach(function (item) {
	                    if (item.type && item.type.headline) {
	                        smallesHeadlineLevel = Math.max(smallesHeadlineLevel, item.type.headlineLevel);
	                    }
	                });
	            });
	            if (smallesHeadlineLevel < 6) {
	                var nextHeadlineType = (0, _BlockType.headlineByLevel)(smallesHeadlineLevel + 1);
	                parseResult.pages.forEach(function (page) {
	                    var lastItem;
	                    page.items.forEach(function (item) {
	                        if (!item.type && item.height == mostUsedHeight && item.font !== mostUsedFont && (!lastItem || lastItem.y < item.y || lastItem.type && lastItem.type.headline || lastItem.y - item.y > mostUsedDistance * 2) && item.text() === item.text().toUpperCase()) {
	                            detectedHeaders++;
	                            item.annotation = _Annotation.DETECTED_ANNOTATION;
	                            item.type = nextHeadlineType;
	                        }
	                        lastItem = item;
	                    });
	                });
	            }
	
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult, {
	                messages: ['Detected ' + detectedHeaders + ' headlines.']
	            }));
	        }
	    }]);
	    return DetectHeaders;
	}(_ToLineItemTransformation2.default);
	
	exports.default = DetectHeaders;
	
	
	function findPagesWithMaxHeight(pages, maxHeight) {
	    var maxHeaderPagesSet = new _set2.default();
	    pages.forEach(function (page) {
	        page.items.forEach(function (item) {
	            if (!item.type && item.height == maxHeight) {
	                maxHeaderPagesSet.add(page);
	            }
	        });
	    });
	    return maxHeaderPagesSet;
	}

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ToLineItemBlockTransformation = __webpack_require__(221);
	
	var _ToLineItemBlockTransformation2 = _interopRequireDefault(_ToLineItemBlockTransformation);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _LineItemBlock = __webpack_require__(189);
	
	var _LineItemBlock2 = _interopRequireDefault(_LineItemBlock);
	
	var _Annotation = __webpack_require__(179);
	
	var _pageItemFunctions = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Gathers lines to blocks
	var GatherBlocks = function (_ToLineItemBlockTrans) {
	    (0, _inherits3.default)(GatherBlocks, _ToLineItemBlockTrans);
	
	    function GatherBlocks() {
	        (0, _classCallCheck3.default)(this, GatherBlocks);
	        return (0, _possibleConstructorReturn3.default)(this, (GatherBlocks.__proto__ || (0, _getPrototypeOf2.default)(GatherBlocks)).call(this, "Gather Blocks"));
	    }
	
	    (0, _createClass3.default)(GatherBlocks, [{
	        key: 'transform',
	        value: function transform(parseResult) {
	            var mostUsedDistance = parseResult.globals.mostUsedDistance;
	
	            var createdBlocks = 0;
	            var lineItemCount = 0;
	            parseResult.pages.map(function (page) {
	                lineItemCount += page.items.length;
	                var blocks = [];
	                var stashedBlock = new _LineItemBlock2.default({});
	                var flushStashedItems = function flushStashedItems() {
	                    if (stashedBlock.items.length > 1) {
	                        stashedBlock.annotation = _Annotation.DETECTED_ANNOTATION;
	                    }
	
	                    blocks.push(stashedBlock);
	                    stashedBlock = new _LineItemBlock2.default({});
	                    createdBlocks++;
	                };
	
	                var minX = (0, _pageItemFunctions.minXFromPageItems)(page.items);
	                page.items.forEach(function (item) {
	                    if (stashedBlock.items.length > 0 && shouldFlushBlock(stashedBlock, item, minX, mostUsedDistance)) {
	                        flushStashedItems();
	                    }
	                    stashedBlock.addItem(item);
	                });
	                if (stashedBlock.items.length > 0) {
	                    flushStashedItems();
	                }
	                page.items = blocks;
	            });
	
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult, {
	                messages: ['Gathered ' + createdBlocks + ' blocks out of ' + lineItemCount + ' line items']
	            }));
	        }
	    }]);
	    return GatherBlocks;
	}(_ToLineItemBlockTransformation2.default);
	
	exports.default = GatherBlocks;
	
	
	function shouldFlushBlock(stashedBlock, item, minX, mostUsedDistance) {
	    if (stashedBlock.type && stashedBlock.type.mergeFollowingNonTypedItems && !item.type) {
	        return false;
	    }
	    var lastItem = stashedBlock.items[stashedBlock.items.length - 1];
	    var hasBigDistance = bigDistance(lastItem, item, minX, mostUsedDistance);
	    if (stashedBlock.type && stashedBlock.type.mergeFollowingNonTypedItemsWithSmallDistance && !item.type && !hasBigDistance) {
	        return false;
	    }
	    if (item.type !== stashedBlock.type) {
	        return true;
	    }
	    if (item.type) {
	        return !item.type.mergeToBlock;
	    } else {
	        return hasBigDistance;
	    }
	}
	
	function bigDistance(lastItem, item, minX, mostUsedDistance) {
	    var distance = lastItem.y - item.y;
	    if (distance < 0 - mostUsedDistance / 2) {
	        //distance is negative - and not only a bit
	        return true;
	    }
	    var allowedDisctance = mostUsedDistance + 1;
	    if (lastItem.x > minX && item.x > minX) {
	        //intended elements like lists often have greater spacing
	        allowedDisctance = mostUsedDistance + mostUsedDistance / 2;
	    }
	    if (distance > allowedDisctance) {
	        return true;
	    }
	    return false;
	}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Transformation2 = __webpack_require__(161);
	
	var _Transformation3 = _interopRequireDefault(_Transformation2);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _LineItemBlock = __webpack_require__(189);
	
	var _LineItemBlock2 = _interopRequireDefault(_LineItemBlock);
	
	var _LineItemBlockPageView = __webpack_require__(222);
	
	var _LineItemBlockPageView2 = _interopRequireDefault(_LineItemBlockPageView);
	
	var _Annotation = __webpack_require__(179);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Abstract class for transformations producing LineItemBlock(s) to be shown in the LineItemBlockPageView
	var ToLineItemBlockTransformation = function (_Transformation) {
	    (0, _inherits3.default)(ToLineItemBlockTransformation, _Transformation);
	
	    function ToLineItemBlockTransformation(name) {
	        (0, _classCallCheck3.default)(this, ToLineItemBlockTransformation);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (ToLineItemBlockTransformation.__proto__ || (0, _getPrototypeOf2.default)(ToLineItemBlockTransformation)).call(this, name, _LineItemBlock2.default.name));
	
	        if (_this.constructor === ToLineItemBlockTransformation) {
	            throw new TypeError("Can not construct abstract class.");
	        }
	        _this.showWhitespaces = false;
	        return _this;
	    }
	
	    (0, _createClass3.default)(ToLineItemBlockTransformation, [{
	        key: 'showModificationCheckbox',
	        value: function showModificationCheckbox() {
	            return true;
	        }
	    }, {
	        key: 'createPageView',
	        value: function createPageView(page, modificationsOnly) {
	            return _react2.default.createElement(_LineItemBlockPageView2.default, {
	                key: page.index,
	                page: page,
	                modificationsOnly: modificationsOnly,
	                showWhitespaces: this.showWhitespaces });
	        }
	    }, {
	        key: 'completeTransform',
	        value: function completeTransform(parseResult) {
	            // The usual cleanup
	            parseResult.messages = [];
	            parseResult.pages.forEach(function (page) {
	                page.items = page.items.filter(function (item) {
	                    return !item.annotation || item.annotation !== _Annotation.REMOVED_ANNOTATION;
	                });
	                page.items.forEach(function (item) {
	                    return item.annotation = null;
	                });
	            });
	            return parseResult;
	        }
	    }]);
	    return ToLineItemBlockTransformation;
	}(_Transformation3.default);
	
	exports.default = ToLineItemBlockTransformation;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PageView2 = __webpack_require__(166);
	
	var _PageView3 = _interopRequireDefault(_PageView2);
	
	var _LineItemTable = __webpack_require__(186);
	
	var _LineItemTable2 = _interopRequireDefault(_LineItemTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// View for a Page which items are of kind LineItemBlock
	var LineItemBlockPageView = function (_PageView) {
	    (0, _inherits3.default)(LineItemBlockPageView, _PageView);
	
	    function LineItemBlockPageView() {
	        (0, _classCallCheck3.default)(this, LineItemBlockPageView);
	        return (0, _possibleConstructorReturn3.default)(this, (LineItemBlockPageView.__proto__ || (0, _getPrototypeOf2.default)(LineItemBlockPageView)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(LineItemBlockPageView, [{
	        key: 'createItemViews',
	        value: function createItemViews(items, showWhitespaces) {
	            var blockTables = items.map(function (block, i) {
	                var blockType = block.type ? ' - ' + block.type.name : null;
	                var blockAnnotation = block.annotation ? _react2.default.createElement(
	                    'span',
	                    null,
	                    ' - ' + block.annotation.category
	                ) : null;
	                var borderStyle = block.annotation ? {
	                    marginBottom: "20px",
	                    border: "solid thin " + block.annotation.color
	                } : null;
	                var colorStyle = block.annotation ? {
	                    color: block.annotation.color
	                } : null;
	                var footnoteLinks;
	                var footnotes;
	                if (block.parsedElements) {
	                    if (block.parsedElements.footnoteLinks.length > 0) {
	                        footnoteLinks = _react2.default.createElement(
	                            'div',
	                            null,
	                            'Footnote-Links: ' + block.parsedElements.footnoteLinks
	                        );
	                    }
	                    if (block.parsedElements.footnotes.length > 0) {
	                        footnotes = _react2.default.createElement(
	                            'div',
	                            null,
	                            'Footnotes: ' + block.parsedElements.footnotes
	                        );
	                    }
	                }
	
	                return _react2.default.createElement(
	                    'div',
	                    { key: i },
	                    _react2.default.createElement(
	                        'div',
	                        { style: colorStyle },
	                        _react2.default.createElement(
	                            'b',
	                            null,
	                            'Block ',
	                            i + 1
	                        ),
	                        _react2.default.createElement(
	                            'i',
	                            null,
	                            blockType,
	                            ' ',
	                            blockAnnotation
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { style: borderStyle },
	                        _react2.default.createElement(_LineItemTable2.default, { items: block.items, showWhitespaces: showWhitespaces }),
	                        footnoteLinks,
	                        footnotes
	                    )
	                );
	            });
	            return blockTables;
	        }
	    }]);
	    return LineItemBlockPageView;
	}(_PageView3.default);
	
	exports.default = LineItemBlockPageView;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getIterator2 = __webpack_require__(210);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ToLineItemBlockTransformation = __webpack_require__(221);
	
	var _ToLineItemBlockTransformation2 = _interopRequireDefault(_ToLineItemBlockTransformation);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _Annotation = __webpack_require__(179);
	
	var _BlockType = __webpack_require__(206);
	
	var _BlockType2 = _interopRequireDefault(_BlockType);
	
	var _pageItemFunctions = __webpack_require__(188);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Detect items which are code/quote blocks
	var DetectCodeQuoteBlocks = function (_ToLineItemBlockTrans) {
	    (0, _inherits3.default)(DetectCodeQuoteBlocks, _ToLineItemBlockTrans);
	
	    function DetectCodeQuoteBlocks() {
	        (0, _classCallCheck3.default)(this, DetectCodeQuoteBlocks);
	        return (0, _possibleConstructorReturn3.default)(this, (DetectCodeQuoteBlocks.__proto__ || (0, _getPrototypeOf2.default)(DetectCodeQuoteBlocks)).call(this, "Detect Code/Quote Blocks"));
	    }
	
	    (0, _createClass3.default)(DetectCodeQuoteBlocks, [{
	        key: 'transform',
	        value: function transform(parseResult) {
	            var mostUsedHeight = parseResult.globals.mostUsedHeight;
	
	            var foundCodeItems = 0;
	            parseResult.pages.forEach(function (page) {
	                var minX = (0, _pageItemFunctions.minXFromBlocks)(page.items);
	                page.items.forEach(function (block) {
	                    if (!block.type && looksLikeCodeBlock(minX, block.items, mostUsedHeight)) {
	                        block.annotation = _Annotation.DETECTED_ANNOTATION;
	                        block.type = _BlockType2.default.CODE;
	                        foundCodeItems++;
	                    }
	                });
	            });
	
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult, {
	                messages: ['Detected ' + foundCodeItems + ' code/quote items.']
	            }));
	        }
	    }]);
	    return DetectCodeQuoteBlocks;
	}(_ToLineItemBlockTransformation2.default);
	
	exports.default = DetectCodeQuoteBlocks;
	
	
	function looksLikeCodeBlock(minX, items, mostUsedHeight) {
	    if (items.length == 0) {
	        return false;
	    }
	    if (items.length == 1) {
	        return items[0].x > minX && items[0].height <= mostUsedHeight + 1;
	    }
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = (0, _getIterator3.default)(items), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var item = _step.value;
	
	            if (item.x == minX) {
	                return false;
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return true;
	}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _ToLineItemBlockTransformation = __webpack_require__(221);
	
	var _ToLineItemBlockTransformation2 = _interopRequireDefault(_ToLineItemBlockTransformation);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _Word = __webpack_require__(184);
	
	var _Word2 = _interopRequireDefault(_Word);
	
	var _Annotation = __webpack_require__(179);
	
	var _BlockType = __webpack_require__(206);
	
	var _BlockType2 = _interopRequireDefault(_BlockType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Cares for proper sub-item spacing/leveling
	var DetectListLevels = function (_ToLineItemBlockTrans) {
	    (0, _inherits3.default)(DetectListLevels, _ToLineItemBlockTrans);
	
	    function DetectListLevels() {
	        (0, _classCallCheck3.default)(this, DetectListLevels);
	
	        var _this = (0, _possibleConstructorReturn3.default)(this, (DetectListLevels.__proto__ || (0, _getPrototypeOf2.default)(DetectListLevels)).call(this, "Level Lists"));
	
	        _this.showWhitespaces = true;
	        return _this;
	    }
	
	    (0, _createClass3.default)(DetectListLevels, [{
	        key: 'transform',
	        value: function transform(parseResult) {
	            var listBlocks = 0;
	            var modifiedBlocks = 0;
	            parseResult.pages.forEach(function (page) {
	
	                page.items.filter(function (block) {
	                    return block.type === _BlockType2.default.LIST;
	                }).forEach(function (listBlock) {
	                    var lastItemX;
	                    var currentLevel = 0;
	                    var xByLevel = {};
	                    var modifiedBlock = false;
	                    listBlock.items.forEach(function (item) {
	                        var isListItem = true;
	                        if (lastItemX && isListItem) {
	                            if (item.x > lastItemX) {
	                                currentLevel++;
	                                xByLevel[item.x] = currentLevel;
	                            } else if (item.x < lastItemX) {
	                                currentLevel = xByLevel[item.x];
	                            }
	                        } else {
	                            xByLevel[item.x] = 0;
	                        }
	                        if (currentLevel > 0) {
	                            item.words = [new _Word2.default({
	                                string: ' '.repeat(currentLevel * 3)
	                            })].concat(item.words);
	                            modifiedBlock = true;
	                        }
	                        lastItemX = item.x;
	                    });
	                    listBlocks++;
	                    if (modifiedBlock) {
	                        modifiedBlocks++;
	                        listBlock.annotation = _Annotation.MODIFIED_ANNOTATION;
	                    } else {
	                        listBlock.annotation = _Annotation.UNCHANGED_ANNOTATION;
	                    }
	                });
	            });
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult, {
	                messages: ['Modified ' + modifiedBlocks + ' / ' + listBlocks + ' list blocks.']
	            }));
	        }
	    }]);
	    return DetectListLevels;
	}(_ToLineItemBlockTransformation2.default);
	
	exports.default = DetectListLevels;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Transformation2 = __webpack_require__(161);
	
	var _Transformation3 = _interopRequireDefault(_Transformation2);
	
	var _TextPageView = __webpack_require__(226);
	
	var _TextPageView2 = _interopRequireDefault(_TextPageView);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	var _BlockType = __webpack_require__(206);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ToTextBlocks = function (_Transformation) {
	    (0, _inherits3.default)(ToTextBlocks, _Transformation);
	
	    function ToTextBlocks() {
	        (0, _classCallCheck3.default)(this, ToTextBlocks);
	        return (0, _possibleConstructorReturn3.default)(this, (ToTextBlocks.__proto__ || (0, _getPrototypeOf2.default)(ToTextBlocks)).call(this, "To Text Blocks", "TextBlock"));
	    }
	
	    (0, _createClass3.default)(ToTextBlocks, [{
	        key: 'createPageView',
	        value: function createPageView(page, modificationsOnly) {
	            // eslint-disable-line no-unused-vars
	            return _react2.default.createElement(_TextPageView2.default, { key: page.index, page: page });
	        }
	    }, {
	        key: 'transform',
	        value: function transform(parseResult) {
	            parseResult.pages.forEach(function (page) {
	                var textItems = [];
	                page.items.forEach(function (block) {
	                    //TODO category to type (before have no unknowns, have paragraph)
	                    var category = block.type ? block.type.name : 'Unknown';
	                    textItems.push({
	                        category: category,
	                        text: (0, _BlockType.blockToText)(block)
	                    });
	                });
	                page.items = textItems;
	            });
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult));
	        }
	    }]);
	    return ToTextBlocks;
	}(_Transformation3.default);
	
	exports.default = ToTextBlocks;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PageView2 = __webpack_require__(166);
	
	var _PageView3 = _interopRequireDefault(_PageView2);
	
	var _Table = __webpack_require__(168);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TextPageView = function (_PageView) {
	  (0, _inherits3.default)(TextPageView, _PageView);
	
	  function TextPageView() {
	    (0, _classCallCheck3.default)(this, TextPageView);
	    return (0, _possibleConstructorReturn3.default)(this, (TextPageView.__proto__ || (0, _getPrototypeOf2.default)(TextPageView)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(TextPageView, [{
	    key: 'createItemViews',
	    value: function createItemViews(items, showWhitespaces) {
	      // eslint-disable-line no-unused-vars
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Table2.default,
	          { responsive: true },
	          _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                'th',
	                null,
	                '#'
	              ),
	              _react2.default.createElement(
	                'th',
	                null,
	                'Category'
	              ),
	              _react2.default.createElement(
	                'th',
	                null,
	                'Text'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'tbody',
	            null,
	            items.map(function (block, i) {
	              return _react2.default.createElement(
	                'tr',
	                { key: i },
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  i
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  block.category
	                ),
	                _react2.default.createElement(
	                  'td',
	                  null,
	                  _react2.default.createElement(
	                    'pre',
	                    { style: { display: 'inline-block' } },
	                    block.text
	                  )
	                )
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);
	  return TextPageView;
	}(_PageView3.default);
	
	exports.default = TextPageView;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(95);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MarkdownPageView = __webpack_require__(228);
	
	var _MarkdownPageView2 = _interopRequireDefault(_MarkdownPageView);
	
	var _Transformation2 = __webpack_require__(161);
	
	var _Transformation3 = _interopRequireDefault(_Transformation2);
	
	var _ParseResult = __webpack_require__(162);
	
	var _ParseResult2 = _interopRequireDefault(_ParseResult);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ToMarkdown = function (_Transformation) {
	    (0, _inherits3.default)(ToMarkdown, _Transformation);
	
	    function ToMarkdown() {
	        (0, _classCallCheck3.default)(this, ToMarkdown);
	        return (0, _possibleConstructorReturn3.default)(this, (ToMarkdown.__proto__ || (0, _getPrototypeOf2.default)(ToMarkdown)).call(this, "To Markdown", "String"));
	    }
	
	    (0, _createClass3.default)(ToMarkdown, [{
	        key: 'createPageView',
	        value: function createPageView(page, modificationsOnly) {
	            // eslint-disable-line no-unused-vars
	            return _react2.default.createElement(_MarkdownPageView2.default, { key: page.index, page: page });
	        }
	    }, {
	        key: 'transform',
	        value: function transform(parseResult) {
	            parseResult.pages.forEach(function (page) {
	                var text = '';
	                page.items.forEach(function (block) {
	                    text += block.text + '\n';
	                });
	                page.items = [text];
	            });
	            return new _ParseResult2.default((0, _extends3.default)({}, parseResult));
	        }
	    }]);
	    return ToMarkdown;
	}(_Transformation3.default);
	
	exports.default = ToMarkdown;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getPrototypeOf = __webpack_require__(23);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(3);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(34);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(80);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(125);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PageView2 = __webpack_require__(166);
	
	var _PageView3 = _interopRequireDefault(_PageView2);
	
	var _remarkable = __webpack_require__(229);
	
	var _remarkable2 = _interopRequireDefault(_remarkable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MarkdownPageView = function (_PageView) {
	    (0, _inherits3.default)(MarkdownPageView, _PageView);
	
	    function MarkdownPageView() {
	        (0, _classCallCheck3.default)(this, MarkdownPageView);
	        return (0, _possibleConstructorReturn3.default)(this, (MarkdownPageView.__proto__ || (0, _getPrototypeOf2.default)(MarkdownPageView)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(MarkdownPageView, [{
	        key: 'createItemViews',
	        value: function createItemViews(items, showWhitespaces) {
	            // eslint-disable-line no-unused-vars
	            var remarkable = new _remarkable2.default({
	                breaks: true
	            });
	            var html = remarkable.render(items[0]);
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html } })
	            );
	        }
	    }]);
	    return MarkdownPageView;
	}(_PageView3.default);
	
	exports.default = MarkdownPageView;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(230);


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var assign       = __webpack_require__(231).assign;
	var Renderer     = __webpack_require__(233);
	var ParserCore   = __webpack_require__(235);
	var ParserBlock  = __webpack_require__(253);
	var ParserInline = __webpack_require__(268);
	var Ruler        = __webpack_require__(236);
	
	/**
	 * Preset configs
	 */
	
	var config = {
	  'default':    __webpack_require__(287),
	  'full':       __webpack_require__(288),
	  'commonmark': __webpack_require__(289)
	};
	
	/**
	 * The `StateCore` class manages state.
	 *
	 * @param {Object} `instance` Remarkable instance
	 * @param {String} `str` Markdown string
	 * @param {Object} `env`
	 */
	
	function StateCore(instance, str, env) {
	  this.src = str;
	  this.env = env;
	  this.options = instance.options;
	  this.tokens = [];
	  this.inlineMode = false;
	
	  this.inline = instance.inline;
	  this.block = instance.block;
	  this.renderer = instance.renderer;
	  this.typographer = instance.typographer;
	}
	
	/**
	 * The main `Remarkable` class. Create an instance of
	 * `Remarkable` with a `preset` and/or `options`.
	 *
	 * @param {String} `preset` If no preset is given, `default` is used.
	 * @param {Object} `options`
	 */
	
	function Remarkable(preset, options) {
	  if (typeof preset !== 'string') {
	    options = preset;
	    preset = 'default';
	  }
	
	  this.inline   = new ParserInline();
	  this.block    = new ParserBlock();
	  this.core     = new ParserCore();
	  this.renderer = new Renderer();
	  this.ruler    = new Ruler();
	
	  this.options  = {};
	  this.configure(config[preset]);
	  this.set(options || {});
	}
	
	/**
	 * Set options as an alternative to passing them
	 * to the constructor.
	 *
	 * ```js
	 * md.set({typographer: true});
	 * ```
	 * @param {Object} `options`
	 * @api public
	 */
	
	Remarkable.prototype.set = function (options) {
	  assign(this.options, options);
	};
	
	/**
	 * Batch loader for components rules states, and options
	 *
	 * @param  {Object} `presets`
	 */
	
	Remarkable.prototype.configure = function (presets) {
	  var self = this;
	
	  if (!presets) { throw new Error('Wrong `remarkable` preset, check name/content'); }
	  if (presets.options) { self.set(presets.options); }
	  if (presets.components) {
	    Object.keys(presets.components).forEach(function (name) {
	      if (presets.components[name].rules) {
	        self[name].ruler.enable(presets.components[name].rules, true);
	      }
	    });
	  }
	};
	
	/**
	 * Use a plugin.
	 *
	 * ```js
	 * var md = new Remarkable();
	 *
	 * md.use(plugin1)
	 *   .use(plugin2, opts)
	 *   .use(plugin3);
	 * ```
	 *
	 * @param  {Function} `plugin`
	 * @param  {Object} `options`
	 * @return {Object} `Remarkable` for chaining
	 */
	
	Remarkable.prototype.use = function (plugin, options) {
	  plugin(this, options);
	  return this;
	};
	
	
	/**
	 * Parse the input `string` and return a tokens array.
	 * Modifies `env` with definitions data.
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {Array} Array of tokens
	 */
	
	Remarkable.prototype.parse = function (str, env) {
	  var state = new StateCore(this, str, env);
	  this.core.process(state);
	  return state.tokens;
	};
	
	/**
	 * The main `.render()` method that does all the magic :)
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {String} Rendered HTML.
	 */
	
	Remarkable.prototype.render = function (str, env) {
	  env = env || {};
	  return this.renderer.render(this.parse(str, env), this.options, env);
	};
	
	/**
	 * Parse the given content `string` as a single string.
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {Array} Array of tokens
	 */
	
	Remarkable.prototype.parseInline = function (str, env) {
	  var state = new StateCore(this, str, env);
	  state.inlineMode = true;
	  this.core.process(state);
	  return state.tokens;
	};
	
	/**
	 * Render a single content `string`, without wrapping it
	 * to paragraphs
	 *
	 * @param  {String} `str`
	 * @param  {Object} `env`
	 * @return {String}
	 */
	
	Remarkable.prototype.renderInline = function (str, env) {
	  env = env || {};
	  return this.renderer.render(this.parseInline(str, env), this.options, env);
	};
	
	/**
	 * Expose `Remarkable`
	 */
	
	module.exports = Remarkable;
	
	/**
	 * Expose `utils`, Useful helper functions for custom
	 * rendering.
	 */
	
	module.exports.utils = __webpack_require__(231);


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Utility functions
	 */
	
	function typeOf(obj) {
	  return Object.prototype.toString.call(obj);
	}
	
	function isString(obj) {
	  return typeOf(obj) === '[object String]';
	}
	
	var hasOwn = Object.prototype.hasOwnProperty;
	
	function has(object, key) {
	  return object
	    ? hasOwn.call(object, key)
	    : false;
	}
	
	// Extend objects
	//
	function assign(obj /*from1, from2, from3, ...*/) {
	  var sources = [].slice.call(arguments, 1);
	
	  sources.forEach(function (source) {
	    if (!source) { return; }
	
	    if (typeof source !== 'object') {
	      throw new TypeError(source + 'must be object');
	    }
	
	    Object.keys(source).forEach(function (key) {
	      obj[key] = source[key];
	    });
	  });
	
	  return obj;
	}
	
	////////////////////////////////////////////////////////////////////////////////
	
	var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
	
	function unescapeMd(str) {
	  if (str.indexOf('\\') < 0) { return str; }
	  return str.replace(UNESCAPE_MD_RE, '$1');
	}
	
	////////////////////////////////////////////////////////////////////////////////
	
	function isValidEntityCode(c) {
	  /*eslint no-bitwise:0*/
	  // broken sequence
	  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
	  // never used
	  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
	  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
	  // control codes
	  if (c >= 0x00 && c <= 0x08) { return false; }
	  if (c === 0x0B) { return false; }
	  if (c >= 0x0E && c <= 0x1F) { return false; }
	  if (c >= 0x7F && c <= 0x9F) { return false; }
	  // out of range
	  if (c > 0x10FFFF) { return false; }
	  return true;
	}
	
	function fromCodePoint(c) {
	  /*eslint no-bitwise:0*/
	  if (c > 0xffff) {
	    c -= 0x10000;
	    var surrogate1 = 0xd800 + (c >> 10),
	        surrogate2 = 0xdc00 + (c & 0x3ff);
	
	    return String.fromCharCode(surrogate1, surrogate2);
	  }
	  return String.fromCharCode(c);
	}
	
	var NAMED_ENTITY_RE   = /&([a-z#][a-z0-9]{1,31});/gi;
	var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
	var entities = __webpack_require__(232);
	
	function replaceEntityPattern(match, name) {
	  var code = 0;
	
	  if (has(entities, name)) {
	    return entities[name];
	  } else if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
	    code = name[1].toLowerCase() === 'x' ?
	      parseInt(name.slice(2), 16)
	    :
	      parseInt(name.slice(1), 10);
	    if (isValidEntityCode(code)) {
	      return fromCodePoint(code);
	    }
	  }
	  return match;
	}
	
	function replaceEntities(str) {
	  if (str.indexOf('&') < 0) { return str; }
	
	  return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
	}
	
	////////////////////////////////////////////////////////////////////////////////
	
	var HTML_ESCAPE_TEST_RE = /[&<>"]/;
	var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
	var HTML_REPLACEMENTS = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	
	function replaceUnsafeChar(ch) {
	  return HTML_REPLACEMENTS[ch];
	}
	
	function escapeHtml(str) {
	  if (HTML_ESCAPE_TEST_RE.test(str)) {
	    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
	  }
	  return str;
	}
	
	////////////////////////////////////////////////////////////////////////////////
	
	exports.assign            = assign;
	exports.isString          = isString;
	exports.has               = has;
	exports.unescapeMd        = unescapeMd;
	exports.isValidEntityCode = isValidEntityCode;
	exports.fromCodePoint     = fromCodePoint;
	exports.replaceEntities   = replaceEntities;
	exports.escapeHtml        = escapeHtml;


/***/ }),
/* 232 */
/***/ (function(module, exports) {

	// List of valid entities
	//
	// Generate with ./support/entities.js script
	//
	'use strict';
	
	/*eslint quotes:0*/
	module.exports = {
	  "Aacute":"\u00C1",
	  "aacute":"\u00E1",
	  "Abreve":"\u0102",
	  "abreve":"\u0103",
	  "ac":"\u223E",
	  "acd":"\u223F",
	  "acE":"\u223E\u0333",
	  "Acirc":"\u00C2",
	  "acirc":"\u00E2",
	  "acute":"\u00B4",
	  "Acy":"\u0410",
	  "acy":"\u0430",
	  "AElig":"\u00C6",
	  "aelig":"\u00E6",
	  "af":"\u2061",
	  "Afr":"\uD835\uDD04",
	  "afr":"\uD835\uDD1E",
	  "Agrave":"\u00C0",
	  "agrave":"\u00E0",
	  "alefsym":"\u2135",
	  "aleph":"\u2135",
	  "Alpha":"\u0391",
	  "alpha":"\u03B1",
	  "Amacr":"\u0100",
	  "amacr":"\u0101",
	  "amalg":"\u2A3F",
	  "AMP":"\u0026",
	  "amp":"\u0026",
	  "And":"\u2A53",
	  "and":"\u2227",
	  "andand":"\u2A55",
	  "andd":"\u2A5C",
	  "andslope":"\u2A58",
	  "andv":"\u2A5A",
	  "ang":"\u2220",
	  "ange":"\u29A4",
	  "angle":"\u2220",
	  "angmsd":"\u2221",
	  "angmsdaa":"\u29A8",
	  "angmsdab":"\u29A9",
	  "angmsdac":"\u29AA",
	  "angmsdad":"\u29AB",
	  "angmsdae":"\u29AC",
	  "angmsdaf":"\u29AD",
	  "angmsdag":"\u29AE",
	  "angmsdah":"\u29AF",
	  "angrt":"\u221F",
	  "angrtvb":"\u22BE",
	  "angrtvbd":"\u299D",
	  "angsph":"\u2222",
	  "angst":"\u00C5",
	  "angzarr":"\u237C",
	  "Aogon":"\u0104",
	  "aogon":"\u0105",
	  "Aopf":"\uD835\uDD38",
	  "aopf":"\uD835\uDD52",
	  "ap":"\u2248",
	  "apacir":"\u2A6F",
	  "apE":"\u2A70",
	  "ape":"\u224A",
	  "apid":"\u224B",
	  "apos":"\u0027",
	  "ApplyFunction":"\u2061",
	  "approx":"\u2248",
	  "approxeq":"\u224A",
	  "Aring":"\u00C5",
	  "aring":"\u00E5",
	  "Ascr":"\uD835\uDC9C",
	  "ascr":"\uD835\uDCB6",
	  "Assign":"\u2254",
	  "ast":"\u002A",
	  "asymp":"\u2248",
	  "asympeq":"\u224D",
	  "Atilde":"\u00C3",
	  "atilde":"\u00E3",
	  "Auml":"\u00C4",
	  "auml":"\u00E4",
	  "awconint":"\u2233",
	  "awint":"\u2A11",
	  "backcong":"\u224C",
	  "backepsilon":"\u03F6",
	  "backprime":"\u2035",
	  "backsim":"\u223D",
	  "backsimeq":"\u22CD",
	  "Backslash":"\u2216",
	  "Barv":"\u2AE7",
	  "barvee":"\u22BD",
	  "Barwed":"\u2306",
	  "barwed":"\u2305",
	  "barwedge":"\u2305",
	  "bbrk":"\u23B5",
	  "bbrktbrk":"\u23B6",
	  "bcong":"\u224C",
	  "Bcy":"\u0411",
	  "bcy":"\u0431",
	  "bdquo":"\u201E",
	  "becaus":"\u2235",
	  "Because":"\u2235",
	  "because":"\u2235",
	  "bemptyv":"\u29B0",
	  "bepsi":"\u03F6",
	  "bernou":"\u212C",
	  "Bernoullis":"\u212C",
	  "Beta":"\u0392",
	  "beta":"\u03B2",
	  "beth":"\u2136",
	  "between":"\u226C",
	  "Bfr":"\uD835\uDD05",
	  "bfr":"\uD835\uDD1F",
	  "bigcap":"\u22C2",
	  "bigcirc":"\u25EF",
	  "bigcup":"\u22C3",
	  "bigodot":"\u2A00",
	  "bigoplus":"\u2A01",
	  "bigotimes":"\u2A02",
	  "bigsqcup":"\u2A06",
	  "bigstar":"\u2605",
	  "bigtriangledown":"\u25BD",
	  "bigtriangleup":"\u25B3",
	  "biguplus":"\u2A04",
	  "bigvee":"\u22C1",
	  "bigwedge":"\u22C0",
	  "bkarow":"\u290D",
	  "blacklozenge":"\u29EB",
	  "blacksquare":"\u25AA",
	  "blacktriangle":"\u25B4",
	  "blacktriangledown":"\u25BE",
	  "blacktriangleleft":"\u25C2",
	  "blacktriangleright":"\u25B8",
	  "blank":"\u2423",
	  "blk12":"\u2592",
	  "blk14":"\u2591",
	  "blk34":"\u2593",
	  "block":"\u2588",
	  "bne":"\u003D\u20E5",
	  "bnequiv":"\u2261\u20E5",
	  "bNot":"\u2AED",
	  "bnot":"\u2310",
	  "Bopf":"\uD835\uDD39",
	  "bopf":"\uD835\uDD53",
	  "bot":"\u22A5",
	  "bottom":"\u22A5",
	  "bowtie":"\u22C8",
	  "boxbox":"\u29C9",
	  "boxDL":"\u2557",
	  "boxDl":"\u2556",
	  "boxdL":"\u2555",
	  "boxdl":"\u2510",
	  "boxDR":"\u2554",
	  "boxDr":"\u2553",
	  "boxdR":"\u2552",
	  "boxdr":"\u250C",
	  "boxH":"\u2550",
	  "boxh":"\u2500",
	  "boxHD":"\u2566",
	  "boxHd":"\u2564",
	  "boxhD":"\u2565",
	  "boxhd":"\u252C",
	  "boxHU":"\u2569",
	  "boxHu":"\u2567",
	  "boxhU":"\u2568",
	  "boxhu":"\u2534",
	  "boxminus":"\u229F",
	  "boxplus":"\u229E",
	  "boxtimes":"\u22A0",
	  "boxUL":"\u255D",
	  "boxUl":"\u255C",
	  "boxuL":"\u255B",
	  "boxul":"\u2518",
	  "boxUR":"\u255A",
	  "boxUr":"\u2559",
	  "boxuR":"\u2558",
	  "boxur":"\u2514",
	  "boxV":"\u2551",
	  "boxv":"\u2502",
	  "boxVH":"\u256C",
	  "boxVh":"\u256B",
	  "boxvH":"\u256A",
	  "boxvh":"\u253C",
	  "boxVL":"\u2563",
	  "boxVl":"\u2562",
	  "boxvL":"\u2561",
	  "boxvl":"\u2524",
	  "boxVR":"\u2560",
	  "boxVr":"\u255F",
	  "boxvR":"\u255E",
	  "boxvr":"\u251C",
	  "bprime":"\u2035",
	  "Breve":"\u02D8",
	  "breve":"\u02D8",
	  "brvbar":"\u00A6",
	  "Bscr":"\u212C",
	  "bscr":"\uD835\uDCB7",
	  "bsemi":"\u204F",
	  "bsim":"\u223D",
	  "bsime":"\u22CD",
	  "bsol":"\u005C",
	  "bsolb":"\u29C5",
	  "bsolhsub":"\u27C8",
	  "bull":"\u2022",
	  "bullet":"\u2022",
	  "bump":"\u224E",
	  "bumpE":"\u2AAE",
	  "bumpe":"\u224F",
	  "Bumpeq":"\u224E",
	  "bumpeq":"\u224F",
	  "Cacute":"\u0106",
	  "cacute":"\u0107",
	  "Cap":"\u22D2",
	  "cap":"\u2229",
	  "capand":"\u2A44",
	  "capbrcup":"\u2A49",
	  "capcap":"\u2A4B",
	  "capcup":"\u2A47",
	  "capdot":"\u2A40",
	  "CapitalDifferentialD":"\u2145",
	  "caps":"\u2229\uFE00",
	  "caret":"\u2041",
	  "caron":"\u02C7",
	  "Cayleys":"\u212D",
	  "ccaps":"\u2A4D",
	  "Ccaron":"\u010C",
	  "ccaron":"\u010D",
	  "Ccedil":"\u00C7",
	  "ccedil":"\u00E7",
	  "Ccirc":"\u0108",
	  "ccirc":"\u0109",
	  "Cconint":"\u2230",
	  "ccups":"\u2A4C",
	  "ccupssm":"\u2A50",
	  "Cdot":"\u010A",
	  "cdot":"\u010B",
	  "cedil":"\u00B8",
	  "Cedilla":"\u00B8",
	  "cemptyv":"\u29B2",
	  "cent":"\u00A2",
	  "CenterDot":"\u00B7",
	  "centerdot":"\u00B7",
	  "Cfr":"\u212D",
	  "cfr":"\uD835\uDD20",
	  "CHcy":"\u0427",
	  "chcy":"\u0447",
	  "check":"\u2713",
	  "checkmark":"\u2713",
	  "Chi":"\u03A7",
	  "chi":"\u03C7",
	  "cir":"\u25CB",
	  "circ":"\u02C6",
	  "circeq":"\u2257",
	  "circlearrowleft":"\u21BA",
	  "circlearrowright":"\u21BB",
	  "circledast":"\u229B",
	  "circledcirc":"\u229A",
	  "circleddash":"\u229D",
	  "CircleDot":"\u2299",
	  "circledR":"\u00AE",
	  "circledS":"\u24C8",
	  "CircleMinus":"\u2296",
	  "CirclePlus":"\u2295",
	  "CircleTimes":"\u2297",
	  "cirE":"\u29C3",
	  "cire":"\u2257",
	  "cirfnint":"\u2A10",
	  "cirmid":"\u2AEF",
	  "cirscir":"\u29C2",
	  "ClockwiseContourIntegral":"\u2232",
	  "CloseCurlyDoubleQuote":"\u201D",
	  "CloseCurlyQuote":"\u2019",
	  "clubs":"\u2663",
	  "clubsuit":"\u2663",
	  "Colon":"\u2237",
	  "colon":"\u003A",
	  "Colone":"\u2A74",
	  "colone":"\u2254",
	  "coloneq":"\u2254",
	  "comma":"\u002C",
	  "commat":"\u0040",
	  "comp":"\u2201",
	  "compfn":"\u2218",
	  "complement":"\u2201",
	  "complexes":"\u2102",
	  "cong":"\u2245",
	  "congdot":"\u2A6D",
	  "Congruent":"\u2261",
	  "Conint":"\u222F",
	  "conint":"\u222E",
	  "ContourIntegral":"\u222E",
	  "Copf":"\u2102",
	  "copf":"\uD835\uDD54",
	  "coprod":"\u2210",
	  "Coproduct":"\u2210",
	  "COPY":"\u00A9",
	  "copy":"\u00A9",
	  "copysr":"\u2117",
	  "CounterClockwiseContourIntegral":"\u2233",
	  "crarr":"\u21B5",
	  "Cross":"\u2A2F",
	  "cross":"\u2717",
	  "Cscr":"\uD835\uDC9E",
	  "cscr":"\uD835\uDCB8",
	  "csub":"\u2ACF",
	  "csube":"\u2AD1",
	  "csup":"\u2AD0",
	  "csupe":"\u2AD2",
	  "ctdot":"\u22EF",
	  "cudarrl":"\u2938",
	  "cudarrr":"\u2935",
	  "cuepr":"\u22DE",
	  "cuesc":"\u22DF",
	  "cularr":"\u21B6",
	  "cularrp":"\u293D",
	  "Cup":"\u22D3",
	  "cup":"\u222A",
	  "cupbrcap":"\u2A48",
	  "CupCap":"\u224D",
	  "cupcap":"\u2A46",
	  "cupcup":"\u2A4A",
	  "cupdot":"\u228D",
	  "cupor":"\u2A45",
	  "cups":"\u222A\uFE00",
	  "curarr":"\u21B7",
	  "curarrm":"\u293C",
	  "curlyeqprec":"\u22DE",
	  "curlyeqsucc":"\u22DF",
	  "curlyvee":"\u22CE",
	  "curlywedge":"\u22CF",
	  "curren":"\u00A4",
	  "curvearrowleft":"\u21B6",
	  "curvearrowright":"\u21B7",
	  "cuvee":"\u22CE",
	  "cuwed":"\u22CF",
	  "cwconint":"\u2232",
	  "cwint":"\u2231",
	  "cylcty":"\u232D",
	  "Dagger":"\u2021",
	  "dagger":"\u2020",
	  "daleth":"\u2138",
	  "Darr":"\u21A1",
	  "dArr":"\u21D3",
	  "darr":"\u2193",
	  "dash":"\u2010",
	  "Dashv":"\u2AE4",
	  "dashv":"\u22A3",
	  "dbkarow":"\u290F",
	  "dblac":"\u02DD",
	  "Dcaron":"\u010E",
	  "dcaron":"\u010F",
	  "Dcy":"\u0414",
	  "dcy":"\u0434",
	  "DD":"\u2145",
	  "dd":"\u2146",
	  "ddagger":"\u2021",
	  "ddarr":"\u21CA",
	  "DDotrahd":"\u2911",
	  "ddotseq":"\u2A77",
	  "deg":"\u00B0",
	  "Del":"\u2207",
	  "Delta":"\u0394",
	  "delta":"\u03B4",
	  "demptyv":"\u29B1",
	  "dfisht":"\u297F",
	  "Dfr":"\uD835\uDD07",
	  "dfr":"\uD835\uDD21",
	  "dHar":"\u2965",
	  "dharl":"\u21C3",
	  "dharr":"\u21C2",
	  "DiacriticalAcute":"\u00B4",
	  "DiacriticalDot":"\u02D9",
	  "DiacriticalDoubleAcute":"\u02DD",
	  "DiacriticalGrave":"\u0060",
	  "DiacriticalTilde":"\u02DC",
	  "diam":"\u22C4",
	  "Diamond":"\u22C4",
	  "diamond":"\u22C4",
	  "diamondsuit":"\u2666",
	  "diams":"\u2666",
	  "die":"\u00A8",
	  "DifferentialD":"\u2146",
	  "digamma":"\u03DD",
	  "disin":"\u22F2",
	  "div":"\u00F7",
	  "divide":"\u00F7",
	  "divideontimes":"\u22C7",
	  "divonx":"\u22C7",
	  "DJcy":"\u0402",
	  "djcy":"\u0452",
	  "dlcorn":"\u231E",
	  "dlcrop":"\u230D",
	  "dollar":"\u0024",
	  "Dopf":"\uD835\uDD3B",
	  "dopf":"\uD835\uDD55",
	  "Dot":"\u00A8",
	  "dot":"\u02D9",
	  "DotDot":"\u20DC",
	  "doteq":"\u2250",
	  "doteqdot":"\u2251",
	  "DotEqual":"\u2250",
	  "dotminus":"\u2238",
	  "dotplus":"\u2214",
	  "dotsquare":"\u22A1",
	  "doublebarwedge":"\u2306",
	  "DoubleContourIntegral":"\u222F",
	  "DoubleDot":"\u00A8",
	  "DoubleDownArrow":"\u21D3",
	  "DoubleLeftArrow":"\u21D0",
	  "DoubleLeftRightArrow":"\u21D4",
	  "DoubleLeftTee":"\u2AE4",
	  "DoubleLongLeftArrow":"\u27F8",
	  "DoubleLongLeftRightArrow":"\u27FA",
	  "DoubleLongRightArrow":"\u27F9",
	  "DoubleRightArrow":"\u21D2",
	  "DoubleRightTee":"\u22A8",
	  "DoubleUpArrow":"\u21D1",
	  "DoubleUpDownArrow":"\u21D5",
	  "DoubleVerticalBar":"\u2225",
	  "DownArrow":"\u2193",
	  "Downarrow":"\u21D3",
	  "downarrow":"\u2193",
	  "DownArrowBar":"\u2913",
	  "DownArrowUpArrow":"\u21F5",
	  "DownBreve":"\u0311",
	  "downdownarrows":"\u21CA",
	  "downharpoonleft":"\u21C3",
	  "downharpoonright":"\u21C2",
	  "DownLeftRightVector":"\u2950",
	  "DownLeftTeeVector":"\u295E",
	  "DownLeftVector":"\u21BD",
	  "DownLeftVectorBar":"\u2956",
	  "DownRightTeeVector":"\u295F",
	  "DownRightVector":"\u21C1",
	  "DownRightVectorBar":"\u2957",
	  "DownTee":"\u22A4",
	  "DownTeeArrow":"\u21A7",
	  "drbkarow":"\u2910",
	  "drcorn":"\u231F",
	  "drcrop":"\u230C",
	  "Dscr":"\uD835\uDC9F",
	  "dscr":"\uD835\uDCB9",
	  "DScy":"\u0405",
	  "dscy":"\u0455",
	  "dsol":"\u29F6",
	  "Dstrok":"\u0110",
	  "dstrok":"\u0111",
	  "dtdot":"\u22F1",
	  "dtri":"\u25BF",
	  "dtrif":"\u25BE",
	  "duarr":"\u21F5",
	  "duhar":"\u296F",
	  "dwangle":"\u29A6",
	  "DZcy":"\u040F",
	  "dzcy":"\u045F",
	  "dzigrarr":"\u27FF",
	  "Eacute":"\u00C9",
	  "eacute":"\u00E9",
	  "easter":"\u2A6E",
	  "Ecaron":"\u011A",
	  "ecaron":"\u011B",
	  "ecir":"\u2256",
	  "Ecirc":"\u00CA",
	  "ecirc":"\u00EA",
	  "ecolon":"\u2255",
	  "Ecy":"\u042D",
	  "ecy":"\u044D",
	  "eDDot":"\u2A77",
	  "Edot":"\u0116",
	  "eDot":"\u2251",
	  "edot":"\u0117",
	  "ee":"\u2147",
	  "efDot":"\u2252",
	  "Efr":"\uD835\uDD08",
	  "efr":"\uD835\uDD22",
	  "eg":"\u2A9A",
	  "Egrave":"\u00C8",
	  "egrave":"\u00E8",
	  "egs":"\u2A96",
	  "egsdot":"\u2A98",
	  "el":"\u2A99",
	  "Element":"\u2208",
	  "elinters":"\u23E7",
	  "ell":"\u2113",
	  "els":"\u2A95",
	  "elsdot":"\u2A97",
	  "Emacr":"\u0112",
	  "emacr":"\u0113",
	  "empty":"\u2205",
	  "emptyset":"\u2205",
	  "EmptySmallSquare":"\u25FB",
	  "emptyv":"\u2205",
	  "EmptyVerySmallSquare":"\u25AB",
	  "emsp":"\u2003",
	  "emsp13":"\u2004",
	  "emsp14":"\u2005",
	  "ENG":"\u014A",
	  "eng":"\u014B",
	  "ensp":"\u2002",
	  "Eogon":"\u0118",
	  "eogon":"\u0119",
	  "Eopf":"\uD835\uDD3C",
	  "eopf":"\uD835\uDD56",
	  "epar":"\u22D5",
	  "eparsl":"\u29E3",
	  "eplus":"\u2A71",
	  "epsi":"\u03B5",
	  "Epsilon":"\u0395",
	  "epsilon":"\u03B5",
	  "epsiv":"\u03F5",
	  "eqcirc":"\u2256",
	  "eqcolon":"\u2255",
	  "eqsim":"\u2242",
	  "eqslantgtr":"\u2A96",
	  "eqslantless":"\u2A95",
	  "Equal":"\u2A75",
	  "equals":"\u003D",
	  "EqualTilde":"\u2242",
	  "equest":"\u225F",
	  "Equilibrium":"\u21CC",
	  "equiv":"\u2261",
	  "equivDD":"\u2A78",
	  "eqvparsl":"\u29E5",
	  "erarr":"\u2971",
	  "erDot":"\u2253",
	  "Escr":"\u2130",
	  "escr":"\u212F",
	  "esdot":"\u2250",
	  "Esim":"\u2A73",
	  "esim":"\u2242",
	  "Eta":"\u0397",
	  "eta":"\u03B7",
	  "ETH":"\u00D0",
	  "eth":"\u00F0",
	  "Euml":"\u00CB",
	  "euml":"\u00EB",
	  "euro":"\u20AC",
	  "excl":"\u0021",
	  "exist":"\u2203",
	  "Exists":"\u2203",
	  "expectation":"\u2130",
	  "ExponentialE":"\u2147",
	  "exponentiale":"\u2147",
	  "fallingdotseq":"\u2252",
	  "Fcy":"\u0424",
	  "fcy":"\u0444",
	  "female":"\u2640",
	  "ffilig":"\uFB03",
	  "fflig":"\uFB00",
	  "ffllig":"\uFB04",
	  "Ffr":"\uD835\uDD09",
	  "ffr":"\uD835\uDD23",
	  "filig":"\uFB01",
	  "FilledSmallSquare":"\u25FC",
	  "FilledVerySmallSquare":"\u25AA",
	  "fjlig":"\u0066\u006A",
	  "flat":"\u266D",
	  "fllig":"\uFB02",
	  "fltns":"\u25B1",
	  "fnof":"\u0192",
	  "Fopf":"\uD835\uDD3D",
	  "fopf":"\uD835\uDD57",
	  "ForAll":"\u2200",
	  "forall":"\u2200",
	  "fork":"\u22D4",
	  "forkv":"\u2AD9",
	  "Fouriertrf":"\u2131",
	  "fpartint":"\u2A0D",
	  "frac12":"\u00BD",
	  "frac13":"\u2153",
	  "frac14":"\u00BC",
	  "frac15":"\u2155",
	  "frac16":"\u2159",
	  "frac18":"\u215B",
	  "frac23":"\u2154",
	  "frac25":"\u2156",
	  "frac34":"\u00BE",
	  "frac35":"\u2157",
	  "frac38":"\u215C",
	  "frac45":"\u2158",
	  "frac56":"\u215A",
	  "frac58":"\u215D",
	  "frac78":"\u215E",
	  "frasl":"\u2044",
	  "frown":"\u2322",
	  "Fscr":"\u2131",
	  "fscr":"\uD835\uDCBB",
	  "gacute":"\u01F5",
	  "Gamma":"\u0393",
	  "gamma":"\u03B3",
	  "Gammad":"\u03DC",
	  "gammad":"\u03DD",
	  "gap":"\u2A86",
	  "Gbreve":"\u011E",
	  "gbreve":"\u011F",
	  "Gcedil":"\u0122",
	  "Gcirc":"\u011C",
	  "gcirc":"\u011D",
	  "Gcy":"\u0413",
	  "gcy":"\u0433",
	  "Gdot":"\u0120",
	  "gdot":"\u0121",
	  "gE":"\u2267",
	  "ge":"\u2265",
	  "gEl":"\u2A8C",
	  "gel":"\u22DB",
	  "geq":"\u2265",
	  "geqq":"\u2267",
	  "geqslant":"\u2A7E",
	  "ges":"\u2A7E",
	  "gescc":"\u2AA9",
	  "gesdot":"\u2A80",
	  "gesdoto":"\u2A82",
	  "gesdotol":"\u2A84",
	  "gesl":"\u22DB\uFE00",
	  "gesles":"\u2A94",
	  "Gfr":"\uD835\uDD0A",
	  "gfr":"\uD835\uDD24",
	  "Gg":"\u22D9",
	  "gg":"\u226B",
	  "ggg":"\u22D9",
	  "gimel":"\u2137",
	  "GJcy":"\u0403",
	  "gjcy":"\u0453",
	  "gl":"\u2277",
	  "gla":"\u2AA5",
	  "glE":"\u2A92",
	  "glj":"\u2AA4",
	  "gnap":"\u2A8A",
	  "gnapprox":"\u2A8A",
	  "gnE":"\u2269",
	  "gne":"\u2A88",
	  "gneq":"\u2A88",
	  "gneqq":"\u2269",
	  "gnsim":"\u22E7",
	  "Gopf":"\uD835\uDD3E",
	  "gopf":"\uD835\uDD58",
	  "grave":"\u0060",
	  "GreaterEqual":"\u2265",
	  "GreaterEqualLess":"\u22DB",
	  "GreaterFullEqual":"\u2267",
	  "GreaterGreater":"\u2AA2",
	  "GreaterLess":"\u2277",
	  "GreaterSlantEqual":"\u2A7E",
	  "GreaterTilde":"\u2273",
	  "Gscr":"\uD835\uDCA2",
	  "gscr":"\u210A",
	  "gsim":"\u2273",
	  "gsime":"\u2A8E",
	  "gsiml":"\u2A90",
	  "GT":"\u003E",
	  "Gt":"\u226B",
	  "gt":"\u003E",
	  "gtcc":"\u2AA7",
	  "gtcir":"\u2A7A",
	  "gtdot":"\u22D7",
	  "gtlPar":"\u2995",
	  "gtquest":"\u2A7C",
	  "gtrapprox":"\u2A86",
	  "gtrarr":"\u2978",
	  "gtrdot":"\u22D7",
	  "gtreqless":"\u22DB",
	  "gtreqqless":"\u2A8C",
	  "gtrless":"\u2277",
	  "gtrsim":"\u2273",
	  "gvertneqq":"\u2269\uFE00",
	  "gvnE":"\u2269\uFE00",
	  "Hacek":"\u02C7",
	  "hairsp":"\u200A",
	  "half":"\u00BD",
	  "hamilt":"\u210B",
	  "HARDcy":"\u042A",
	  "hardcy":"\u044A",
	  "hArr":"\u21D4",
	  "harr":"\u2194",
	  "harrcir":"\u2948",
	  "harrw":"\u21AD",
	  "Hat":"\u005E",
	  "hbar":"\u210F",
	  "Hcirc":"\u0124",
	  "hcirc":"\u0125",
	  "hearts":"\u2665",
	  "heartsuit":"\u2665",
	  "hellip":"\u2026",
	  "hercon":"\u22B9",
	  "Hfr":"\u210C",
	  "hfr":"\uD835\uDD25",
	  "HilbertSpace":"\u210B",
	  "hksearow":"\u2925",
	  "hkswarow":"\u2926",
	  "hoarr":"\u21FF",
	  "homtht":"\u223B",
	  "hookleftarrow":"\u21A9",
	  "hookrightarrow":"\u21AA",
	  "Hopf":"\u210D",
	  "hopf":"\uD835\uDD59",
	  "horbar":"\u2015",
	  "HorizontalLine":"\u2500",
	  "Hscr":"\u210B",
	  "hscr":"\uD835\uDCBD",
	  "hslash":"\u210F",
	  "Hstrok":"\u0126",
	  "hstrok":"\u0127",
	  "HumpDownHump":"\u224E",
	  "HumpEqual":"\u224F",
	  "hybull":"\u2043",
	  "hyphen":"\u2010",
	  "Iacute":"\u00CD",
	  "iacute":"\u00ED",
	  "ic":"\u2063",
	  "Icirc":"\u00CE",
	  "icirc":"\u00EE",
	  "Icy":"\u0418",
	  "icy":"\u0438",
	  "Idot":"\u0130",
	  "IEcy":"\u0415",
	  "iecy":"\u0435",
	  "iexcl":"\u00A1",
	  "iff":"\u21D4",
	  "Ifr":"\u2111",
	  "ifr":"\uD835\uDD26",
	  "Igrave":"\u00CC",
	  "igrave":"\u00EC",
	  "ii":"\u2148",
	  "iiiint":"\u2A0C",
	  "iiint":"\u222D",
	  "iinfin":"\u29DC",
	  "iiota":"\u2129",
	  "IJlig":"\u0132",
	  "ijlig":"\u0133",
	  "Im":"\u2111",
	  "Imacr":"\u012A",
	  "imacr":"\u012B",
	  "image":"\u2111",
	  "ImaginaryI":"\u2148",
	  "imagline":"\u2110",
	  "imagpart":"\u2111",
	  "imath":"\u0131",
	  "imof":"\u22B7",
	  "imped":"\u01B5",
	  "Implies":"\u21D2",
	  "in":"\u2208",
	  "incare":"\u2105",
	  "infin":"\u221E",
	  "infintie":"\u29DD",
	  "inodot":"\u0131",
	  "Int":"\u222C",
	  "int":"\u222B",
	  "intcal":"\u22BA",
	  "integers":"\u2124",
	  "Integral":"\u222B",
	  "intercal":"\u22BA",
	  "Intersection":"\u22C2",
	  "intlarhk":"\u2A17",
	  "intprod":"\u2A3C",
	  "InvisibleComma":"\u2063",
	  "InvisibleTimes":"\u2062",
	  "IOcy":"\u0401",
	  "iocy":"\u0451",
	  "Iogon":"\u012E",
	  "iogon":"\u012F",
	  "Iopf":"\uD835\uDD40",
	  "iopf":"\uD835\uDD5A",
	  "Iota":"\u0399",
	  "iota":"\u03B9",
	  "iprod":"\u2A3C",
	  "iquest":"\u00BF",
	  "Iscr":"\u2110",
	  "iscr":"\uD835\uDCBE",
	  "isin":"\u2208",
	  "isindot":"\u22F5",
	  "isinE":"\u22F9",
	  "isins":"\u22F4",
	  "isinsv":"\u22F3",
	  "isinv":"\u2208",
	  "it":"\u2062",
	  "Itilde":"\u0128",
	  "itilde":"\u0129",
	  "Iukcy":"\u0406",
	  "iukcy":"\u0456",
	  "Iuml":"\u00CF",
	  "iuml":"\u00EF",
	  "Jcirc":"\u0134",
	  "jcirc":"\u0135",
	  "Jcy":"\u0419",
	  "jcy":"\u0439",
	  "Jfr":"\uD835\uDD0D",
	  "jfr":"\uD835\uDD27",
	  "jmath":"\u0237",
	  "Jopf":"\uD835\uDD41",
	  "jopf":"\uD835\uDD5B",
	  "Jscr":"\uD835\uDCA5",
	  "jscr":"\uD835\uDCBF",
	  "Jsercy":"\u0408",
	  "jsercy":"\u0458",
	  "Jukcy":"\u0404",
	  "jukcy":"\u0454",
	  "Kappa":"\u039A",
	  "kappa":"\u03BA",
	  "kappav":"\u03F0",
	  "Kcedil":"\u0136",
	  "kcedil":"\u0137",
	  "Kcy":"\u041A",
	  "kcy":"\u043A",
	  "Kfr":"\uD835\uDD0E",
	  "kfr":"\uD835\uDD28",
	  "kgreen":"\u0138",
	  "KHcy":"\u0425",
	  "khcy":"\u0445",
	  "KJcy":"\u040C",
	  "kjcy":"\u045C",
	  "Kopf":"\uD835\uDD42",
	  "kopf":"\uD835\uDD5C",
	  "Kscr":"\uD835\uDCA6",
	  "kscr":"\uD835\uDCC0",
	  "lAarr":"\u21DA",
	  "Lacute":"\u0139",
	  "lacute":"\u013A",
	  "laemptyv":"\u29B4",
	  "lagran":"\u2112",
	  "Lambda":"\u039B",
	  "lambda":"\u03BB",
	  "Lang":"\u27EA",
	  "lang":"\u27E8",
	  "langd":"\u2991",
	  "langle":"\u27E8",
	  "lap":"\u2A85",
	  "Laplacetrf":"\u2112",
	  "laquo":"\u00AB",
	  "Larr":"\u219E",
	  "lArr":"\u21D0",
	  "larr":"\u2190",
	  "larrb":"\u21E4",
	  "larrbfs":"\u291F",
	  "larrfs":"\u291D",
	  "larrhk":"\u21A9",
	  "larrlp":"\u21AB",
	  "larrpl":"\u2939",
	  "larrsim":"\u2973",
	  "larrtl":"\u21A2",
	  "lat":"\u2AAB",
	  "lAtail":"\u291B",
	  "latail":"\u2919",
	  "late":"\u2AAD",
	  "lates":"\u2AAD\uFE00",
	  "lBarr":"\u290E",
	  "lbarr":"\u290C",
	  "lbbrk":"\u2772",
	  "lbrace":"\u007B",
	  "lbrack":"\u005B",
	  "lbrke":"\u298B",
	  "lbrksld":"\u298F",
	  "lbrkslu":"\u298D",
	  "Lcaron":"\u013D",
	  "lcaron":"\u013E",
	  "Lcedil":"\u013B",
	  "lcedil":"\u013C",
	  "lceil":"\u2308",
	  "lcub":"\u007B",
	  "Lcy":"\u041B",
	  "lcy":"\u043B",
	  "ldca":"\u2936",
	  "ldquo":"\u201C",
	  "ldquor":"\u201E",
	  "ldrdhar":"\u2967",
	  "ldrushar":"\u294B",
	  "ldsh":"\u21B2",
	  "lE":"\u2266",
	  "le":"\u2264",
	  "LeftAngleBracket":"\u27E8",
	  "LeftArrow":"\u2190",
	  "Leftarrow":"\u21D0",
	  "leftarrow":"\u2190",
	  "LeftArrowBar":"\u21E4",
	  "LeftArrowRightArrow":"\u21C6",
	  "leftarrowtail":"\u21A2",
	  "LeftCeiling":"\u2308",
	  "LeftDoubleBracket":"\u27E6",
	  "LeftDownTeeVector":"\u2961",
	  "LeftDownVector":"\u21C3",
	  "LeftDownVectorBar":"\u2959",
	  "LeftFloor":"\u230A",
	  "leftharpoondown":"\u21BD",
	  "leftharpoonup":"\u21BC",
	  "leftleftarrows":"\u21C7",
	  "LeftRightArrow":"\u2194",
	  "Leftrightarrow":"\u21D4",
	  "leftrightarrow":"\u2194",
	  "leftrightarrows":"\u21C6",
	  "leftrightharpoons":"\u21CB",
	  "leftrightsquigarrow":"\u21AD",
	  "LeftRightVector":"\u294E",
	  "LeftTee":"\u22A3",
	  "LeftTeeArrow":"\u21A4",
	  "LeftTeeVector":"\u295A",
	  "leftthreetimes":"\u22CB",
	  "LeftTriangle":"\u22B2",
	  "LeftTriangleBar":"\u29CF",
	  "LeftTriangleEqual":"\u22B4",
	  "LeftUpDownVector":"\u2951",
	  "LeftUpTeeVector":"\u2960",
	  "LeftUpVector":"\u21BF",
	  "LeftUpVectorBar":"\u2958",
	  "LeftVector":"\u21BC",
	  "LeftVectorBar":"\u2952",
	  "lEg":"\u2A8B",
	  "leg":"\u22DA",
	  "leq":"\u2264",
	  "leqq":"\u2266",
	  "leqslant":"\u2A7D",
	  "les":"\u2A7D",
	  "lescc":"\u2AA8",
	  "lesdot":"\u2A7F",
	  "lesdoto":"\u2A81",
	  "lesdotor":"\u2A83",
	  "lesg":"\u22DA\uFE00",
	  "lesges":"\u2A93",
	  "lessapprox":"\u2A85",
	  "lessdot":"\u22D6",
	  "lesseqgtr":"\u22DA",
	  "lesseqqgtr":"\u2A8B",
	  "LessEqualGreater":"\u22DA",
	  "LessFullEqual":"\u2266",
	  "LessGreater":"\u2276",
	  "lessgtr":"\u2276",
	  "LessLess":"\u2AA1",
	  "lesssim":"\u2272",
	  "LessSlantEqual":"\u2A7D",
	  "LessTilde":"\u2272",
	  "lfisht":"\u297C",
	  "lfloor":"\u230A",
	  "Lfr":"\uD835\uDD0F",
	  "lfr":"\uD835\uDD29",
	  "lg":"\u2276",
	  "lgE":"\u2A91",
	  "lHar":"\u2962",
	  "lhard":"\u21BD",
	  "lharu":"\u21BC",
	  "lharul":"\u296A",
	  "lhblk":"\u2584",
	  "LJcy":"\u0409",
	  "ljcy":"\u0459",
	  "Ll":"\u22D8",
	  "ll":"\u226A",
	  "llarr":"\u21C7",
	  "llcorner":"\u231E",
	  "Lleftarrow":"\u21DA",
	  "llhard":"\u296B",
	  "lltri":"\u25FA",
	  "Lmidot":"\u013F",
	  "lmidot":"\u0140",
	  "lmoust":"\u23B0",
	  "lmoustache":"\u23B0",
	  "lnap":"\u2A89",
	  "lnapprox":"\u2A89",
	  "lnE":"\u2268",
	  "lne":"\u2A87",
	  "lneq":"\u2A87",
	  "lneqq":"\u2268",
	  "lnsim":"\u22E6",
	  "loang":"\u27EC",
	  "loarr":"\u21FD",
	  "lobrk":"\u27E6",
	  "LongLeftArrow":"\u27F5",
	  "Longleftarrow":"\u27F8",
	  "longleftarrow":"\u27F5",
	  "LongLeftRightArrow":"\u27F7",
	  "Longleftrightarrow":"\u27FA",
	  "longleftrightarrow":"\u27F7",
	  "longmapsto":"\u27FC",
	  "LongRightArrow":"\u27F6",
	  "Longrightarrow":"\u27F9",
	  "longrightarrow":"\u27F6",
	  "looparrowleft":"\u21AB",
	  "looparrowright":"\u21AC",
	  "lopar":"\u2985",
	  "Lopf":"\uD835\uDD43",
	  "lopf":"\uD835\uDD5D",
	  "loplus":"\u2A2D",
	  "lotimes":"\u2A34",
	  "lowast":"\u2217",
	  "lowbar":"\u005F",
	  "LowerLeftArrow":"\u2199",
	  "LowerRightArrow":"\u2198",
	  "loz":"\u25CA",
	  "lozenge":"\u25CA",
	  "lozf":"\u29EB",
	  "lpar":"\u0028",
	  "lparlt":"\u2993",
	  "lrarr":"\u21C6",
	  "lrcorner":"\u231F",
	  "lrhar":"\u21CB",
	  "lrhard":"\u296D",
	  "lrm":"\u200E",
	  "lrtri":"\u22BF",
	  "lsaquo":"\u2039",
	  "Lscr":"\u2112",
	  "lscr":"\uD835\uDCC1",
	  "Lsh":"\u21B0",
	  "lsh":"\u21B0",
	  "lsim":"\u2272",
	  "lsime":"\u2A8D",
	  "lsimg":"\u2A8F",
	  "lsqb":"\u005B",
	  "lsquo":"\u2018",
	  "lsquor":"\u201A",
	  "Lstrok":"\u0141",
	  "lstrok":"\u0142",
	  "LT":"\u003C",
	  "Lt":"\u226A",
	  "lt":"\u003C",
	  "ltcc":"\u2AA6",
	  "ltcir":"\u2A79",
	  "ltdot":"\u22D6",
	  "lthree":"\u22CB",
	  "ltimes":"\u22C9",
	  "ltlarr":"\u2976",
	  "ltquest":"\u2A7B",
	  "ltri":"\u25C3",
	  "ltrie":"\u22B4",
	  "ltrif":"\u25C2",
	  "ltrPar":"\u2996",
	  "lurdshar":"\u294A",
	  "luruhar":"\u2966",
	  "lvertneqq":"\u2268\uFE00",
	  "lvnE":"\u2268\uFE00",
	  "macr":"\u00AF",
	  "male":"\u2642",
	  "malt":"\u2720",
	  "maltese":"\u2720",
	  "Map":"\u2905",
	  "map":"\u21A6",
	  "mapsto":"\u21A6",
	  "mapstodown":"\u21A7",
	  "mapstoleft":"\u21A4",
	  "mapstoup":"\u21A5",
	  "marker":"\u25AE",
	  "mcomma":"\u2A29",
	  "Mcy":"\u041C",
	  "mcy":"\u043C",
	  "mdash":"\u2014",
	  "mDDot":"\u223A",
	  "measuredangle":"\u2221",
	  "MediumSpace":"\u205F",
	  "Mellintrf":"\u2133",
	  "Mfr":"\uD835\uDD10",
	  "mfr":"\uD835\uDD2A",
	  "mho":"\u2127",
	  "micro":"\u00B5",
	  "mid":"\u2223",
	  "midast":"\u002A",
	  "midcir":"\u2AF0",
	  "middot":"\u00B7",
	  "minus":"\u2212",
	  "minusb":"\u229F",
	  "minusd":"\u2238",
	  "minusdu":"\u2A2A",
	  "MinusPlus":"\u2213",
	  "mlcp":"\u2ADB",
	  "mldr":"\u2026",
	  "mnplus":"\u2213",
	  "models":"\u22A7",
	  "Mopf":"\uD835\uDD44",
	  "mopf":"\uD835\uDD5E",
	  "mp":"\u2213",
	  "Mscr":"\u2133",
	  "mscr":"\uD835\uDCC2",
	  "mstpos":"\u223E",
	  "Mu":"\u039C",
	  "mu":"\u03BC",
	  "multimap":"\u22B8",
	  "mumap":"\u22B8",
	  "nabla":"\u2207",
	  "Nacute":"\u0143",
	  "nacute":"\u0144",
	  "nang":"\u2220\u20D2",
	  "nap":"\u2249",
	  "napE":"\u2A70\u0338",
	  "napid":"\u224B\u0338",
	  "napos":"\u0149",
	  "napprox":"\u2249",
	  "natur":"\u266E",
	  "natural":"\u266E",
	  "naturals":"\u2115",
	  "nbsp":"\u00A0",
	  "nbump":"\u224E\u0338",
	  "nbumpe":"\u224F\u0338",
	  "ncap":"\u2A43",
	  "Ncaron":"\u0147",
	  "ncaron":"\u0148",
	  "Ncedil":"\u0145",
	  "ncedil":"\u0146",
	  "ncong":"\u2247",
	  "ncongdot":"\u2A6D\u0338",
	  "ncup":"\u2A42",
	  "Ncy":"\u041D",
	  "ncy":"\u043D",
	  "ndash":"\u2013",
	  "ne":"\u2260",
	  "nearhk":"\u2924",
	  "neArr":"\u21D7",
	  "nearr":"\u2197",
	  "nearrow":"\u2197",
	  "nedot":"\u2250\u0338",
	  "NegativeMediumSpace":"\u200B",
	  "NegativeThickSpace":"\u200B",
	  "NegativeThinSpace":"\u200B",
	  "NegativeVeryThinSpace":"\u200B",
	  "nequiv":"\u2262",
	  "nesear":"\u2928",
	  "nesim":"\u2242\u0338",
	  "NestedGreaterGreater":"\u226B",
	  "NestedLessLess":"\u226A",
	  "NewLine":"\u000A",
	  "nexist":"\u2204",
	  "nexists":"\u2204",
	  "Nfr":"\uD835\uDD11",
	  "nfr":"\uD835\uDD2B",
	  "ngE":"\u2267\u0338",
	  "nge":"\u2271",
	  "ngeq":"\u2271",
	  "ngeqq":"\u2267\u0338",
	  "ngeqslant":"\u2A7E\u0338",
	  "nges":"\u2A7E\u0338",
	  "nGg":"\u22D9\u0338",
	  "ngsim":"\u2275",
	  "nGt":"\u226B\u20D2",
	  "ngt":"\u226F",
	  "ngtr":"\u226F",
	  "nGtv":"\u226B\u0338",
	  "nhArr":"\u21CE",
	  "nharr":"\u21AE",
	  "nhpar":"\u2AF2",
	  "ni":"\u220B",
	  "nis":"\u22FC",
	  "nisd":"\u22FA",
	  "niv":"\u220B",
	  "NJcy":"\u040A",
	  "njcy":"\u045A",
	  "nlArr":"\u21CD",
	  "nlarr":"\u219A",
	  "nldr":"\u2025",
	  "nlE":"\u2266\u0338",
	  "nle":"\u2270",
	  "nLeftarrow":"\u21CD",
	  "nleftarrow":"\u219A",
	  "nLeftrightarrow":"\u21CE",
	  "nleftrightarrow":"\u21AE",
	  "nleq":"\u2270",
	  "nleqq":"\u2266\u0338",
	  "nleqslant":"\u2A7D\u0338",
	  "nles":"\u2A7D\u0338",
	  "nless":"\u226E",
	  "nLl":"\u22D8\u0338",
	  "nlsim":"\u2274",
	  "nLt":"\u226A\u20D2",
	  "nlt":"\u226E",
	  "nltri":"\u22EA",
	  "nltrie":"\u22EC",
	  "nLtv":"\u226A\u0338",
	  "nmid":"\u2224",
	  "NoBreak":"\u2060",
	  "NonBreakingSpace":"\u00A0",
	  "Nopf":"\u2115",
	  "nopf":"\uD835\uDD5F",
	  "Not":"\u2AEC",
	  "not":"\u00AC",
	  "NotCongruent":"\u2262",
	  "NotCupCap":"\u226D",
	  "NotDoubleVerticalBar":"\u2226",
	  "NotElement":"\u2209",
	  "NotEqual":"\u2260",
	  "NotEqualTilde":"\u2242\u0338",
	  "NotExists":"\u2204",
	  "NotGreater":"\u226F",
	  "NotGreaterEqual":"\u2271",
	  "NotGreaterFullEqual":"\u2267\u0338",
	  "NotGreaterGreater":"\u226B\u0338",
	  "NotGreaterLess":"\u2279",
	  "NotGreaterSlantEqual":"\u2A7E\u0338",
	  "NotGreaterTilde":"\u2275",
	  "NotHumpDownHump":"\u224E\u0338",
	  "NotHumpEqual":"\u224F\u0338",
	  "notin":"\u2209",
	  "notindot":"\u22F5\u0338",
	  "notinE":"\u22F9\u0338",
	  "notinva":"\u2209",
	  "notinvb":"\u22F7",
	  "notinvc":"\u22F6",
	  "NotLeftTriangle":"\u22EA",
	  "NotLeftTriangleBar":"\u29CF\u0338",
	  "NotLeftTriangleEqual":"\u22EC",
	  "NotLess":"\u226E",
	  "NotLessEqual":"\u2270",
	  "NotLessGreater":"\u2278",
	  "NotLessLess":"\u226A\u0338",
	  "NotLessSlantEqual":"\u2A7D\u0338",
	  "NotLessTilde":"\u2274",
	  "NotNestedGreaterGreater":"\u2AA2\u0338",
	  "NotNestedLessLess":"\u2AA1\u0338",
	  "notni":"\u220C",
	  "notniva":"\u220C",
	  "notnivb":"\u22FE",
	  "notnivc":"\u22FD",
	  "NotPrecedes":"\u2280",
	  "NotPrecedesEqual":"\u2AAF\u0338",
	  "NotPrecedesSlantEqual":"\u22E0",
	  "NotReverseElement":"\u220C",
	  "NotRightTriangle":"\u22EB",
	  "NotRightTriangleBar":"\u29D0\u0338",
	  "NotRightTriangleEqual":"\u22ED",
	  "NotSquareSubset":"\u228F\u0338",
	  "NotSquareSubsetEqual":"\u22E2",
	  "NotSquareSuperset":"\u2290\u0338",
	  "NotSquareSupersetEqual":"\u22E3",
	  "NotSubset":"\u2282\u20D2",
	  "NotSubsetEqual":"\u2288",
	  "NotSucceeds":"\u2281",
	  "NotSucceedsEqual":"\u2AB0\u0338",
	  "NotSucceedsSlantEqual":"\u22E1",
	  "NotSucceedsTilde":"\u227F\u0338",
	  "NotSuperset":"\u2283\u20D2",
	  "NotSupersetEqual":"\u2289",
	  "NotTilde":"\u2241",
	  "NotTildeEqual":"\u2244",
	  "NotTildeFullEqual":"\u2247",
	  "NotTildeTilde":"\u2249",
	  "NotVerticalBar":"\u2224",
	  "npar":"\u2226",
	  "nparallel":"\u2226",
	  "nparsl":"\u2AFD\u20E5",
	  "npart":"\u2202\u0338",
	  "npolint":"\u2A14",
	  "npr":"\u2280",
	  "nprcue":"\u22E0",
	  "npre":"\u2AAF\u0338",
	  "nprec":"\u2280",
	  "npreceq":"\u2AAF\u0338",
	  "nrArr":"\u21CF",
	  "nrarr":"\u219B",
	  "nrarrc":"\u2933\u0338",
	  "nrarrw":"\u219D\u0338",
	  "nRightarrow":"\u21CF",
	  "nrightarrow":"\u219B",
	  "nrtri":"\u22EB",
	  "nrtrie":"\u22ED",
	  "nsc":"\u2281",
	  "nsccue":"\u22E1",
	  "nsce":"\u2AB0\u0338",
	  "Nscr":"\uD835\uDCA9",
	  "nscr":"\uD835\uDCC3",
	  "nshortmid":"\u2224",
	  "nshortparallel":"\u2226",
	  "nsim":"\u2241",
	  "nsime":"\u2244",
	  "nsimeq":"\u2244",
	  "nsmid":"\u2224",
	  "nspar":"\u2226",
	  "nsqsube":"\u22E2",
	  "nsqsupe":"\u22E3",
	  "nsub":"\u2284",
	  "nsubE":"\u2AC5\u0338",
	  "nsube":"\u2288",
	  "nsubset":"\u2282\u20D2",
	  "nsubseteq":"\u2288",
	  "nsubseteqq":"\u2AC5\u0338",
	  "nsucc":"\u2281",
	  "nsucceq":"\u2AB0\u0338",
	  "nsup":"\u2285",
	  "nsupE":"\u2AC6\u0338",
	  "nsupe":"\u2289",
	  "nsupset":"\u2283\u20D2",
	  "nsupseteq":"\u2289",
	  "nsupseteqq":"\u2AC6\u0338",
	  "ntgl":"\u2279",
	  "Ntilde":"\u00D1",
	  "ntilde":"\u00F1",
	  "ntlg":"\u2278",
	  "ntriangleleft":"\u22EA",
	  "ntrianglelefteq":"\u22EC",
	  "ntriangleright":"\u22EB",
	  "ntrianglerighteq":"\u22ED",
	  "Nu":"\u039D",
	  "nu":"\u03BD",
	  "num":"\u0023",
	  "numero":"\u2116",
	  "numsp":"\u2007",
	  "nvap":"\u224D\u20D2",
	  "nVDash":"\u22AF",
	  "nVdash":"\u22AE",
	  "nvDash":"\u22AD",
	  "nvdash":"\u22AC",
	  "nvge":"\u2265\u20D2",
	  "nvgt":"\u003E\u20D2",
	  "nvHarr":"\u2904",
	  "nvinfin":"\u29DE",
	  "nvlArr":"\u2902",
	  "nvle":"\u2264\u20D2",
	  "nvlt":"\u003C\u20D2",
	  "nvltrie":"\u22B4\u20D2",
	  "nvrArr":"\u2903",
	  "nvrtrie":"\u22B5\u20D2",
	  "nvsim":"\u223C\u20D2",
	  "nwarhk":"\u2923",
	  "nwArr":"\u21D6",
	  "nwarr":"\u2196",
	  "nwarrow":"\u2196",
	  "nwnear":"\u2927",
	  "Oacute":"\u00D3",
	  "oacute":"\u00F3",
	  "oast":"\u229B",
	  "ocir":"\u229A",
	  "Ocirc":"\u00D4",
	  "ocirc":"\u00F4",
	  "Ocy":"\u041E",
	  "ocy":"\u043E",
	  "odash":"\u229D",
	  "Odblac":"\u0150",
	  "odblac":"\u0151",
	  "odiv":"\u2A38",
	  "odot":"\u2299",
	  "odsold":"\u29BC",
	  "OElig":"\u0152",
	  "oelig":"\u0153",
	  "ofcir":"\u29BF",
	  "Ofr":"\uD835\uDD12",
	  "ofr":"\uD835\uDD2C",
	  "ogon":"\u02DB",
	  "Ograve":"\u00D2",
	  "ograve":"\u00F2",
	  "ogt":"\u29C1",
	  "ohbar":"\u29B5",
	  "ohm":"\u03A9",
	  "oint":"\u222E",
	  "olarr":"\u21BA",
	  "olcir":"\u29BE",
	  "olcross":"\u29BB",
	  "oline":"\u203E",
	  "olt":"\u29C0",
	  "Omacr":"\u014C",
	  "omacr":"\u014D",
	  "Omega":"\u03A9",
	  "omega":"\u03C9",
	  "Omicron":"\u039F",
	  "omicron":"\u03BF",
	  "omid":"\u29B6",
	  "ominus":"\u2296",
	  "Oopf":"\uD835\uDD46",
	  "oopf":"\uD835\uDD60",
	  "opar":"\u29B7",
	  "OpenCurlyDoubleQuote":"\u201C",
	  "OpenCurlyQuote":"\u2018",
	  "operp":"\u29B9",
	  "oplus":"\u2295",
	  "Or":"\u2A54",
	  "or":"\u2228",
	  "orarr":"\u21BB",
	  "ord":"\u2A5D",
	  "order":"\u2134",
	  "orderof":"\u2134",
	  "ordf":"\u00AA",
	  "ordm":"\u00BA",
	  "origof":"\u22B6",
	  "oror":"\u2A56",
	  "orslope":"\u2A57",
	  "orv":"\u2A5B",
	  "oS":"\u24C8",
	  "Oscr":"\uD835\uDCAA",
	  "oscr":"\u2134",
	  "Oslash":"\u00D8",
	  "oslash":"\u00F8",
	  "osol":"\u2298",
	  "Otilde":"\u00D5",
	  "otilde":"\u00F5",
	  "Otimes":"\u2A37",
	  "otimes":"\u2297",
	  "otimesas":"\u2A36",
	  "Ouml":"\u00D6",
	  "ouml":"\u00F6",
	  "ovbar":"\u233D",
	  "OverBar":"\u203E",
	  "OverBrace":"\u23DE",
	  "OverBracket":"\u23B4",
	  "OverParenthesis":"\u23DC",
	  "par":"\u2225",
	  "para":"\u00B6",
	  "parallel":"\u2225",
	  "parsim":"\u2AF3",
	  "parsl":"\u2AFD",
	  "part":"\u2202",
	  "PartialD":"\u2202",
	  "Pcy":"\u041F",
	  "pcy":"\u043F",
	  "percnt":"\u0025",
	  "period":"\u002E",
	  "permil":"\u2030",
	  "perp":"\u22A5",
	  "pertenk":"\u2031",
	  "Pfr":"\uD835\uDD13",
	  "pfr":"\uD835\uDD2D",
	  "Phi":"\u03A6",
	  "phi":"\u03C6",
	  "phiv":"\u03D5",
	  "phmmat":"\u2133",
	  "phone":"\u260E",
	  "Pi":"\u03A0",
	  "pi":"\u03C0",
	  "pitchfork":"\u22D4",
	  "piv":"\u03D6",
	  "planck":"\u210F",
	  "planckh":"\u210E",
	  "plankv":"\u210F",
	  "plus":"\u002B",
	  "plusacir":"\u2A23",
	  "plusb":"\u229E",
	  "pluscir":"\u2A22",
	  "plusdo":"\u2214",
	  "plusdu":"\u2A25",
	  "pluse":"\u2A72",
	  "PlusMinus":"\u00B1",
	  "plusmn":"\u00B1",
	  "plussim":"\u2A26",
	  "plustwo":"\u2A27",
	  "pm":"\u00B1",
	  "Poincareplane":"\u210C",
	  "pointint":"\u2A15",
	  "Popf":"\u2119",
	  "popf":"\uD835\uDD61",
	  "pound":"\u00A3",
	  "Pr":"\u2ABB",
	  "pr":"\u227A",
	  "prap":"\u2AB7",
	  "prcue":"\u227C",
	  "prE":"\u2AB3",
	  "pre":"\u2AAF",
	  "prec":"\u227A",
	  "precapprox":"\u2AB7",
	  "preccurlyeq":"\u227C",
	  "Precedes":"\u227A",
	  "PrecedesEqual":"\u2AAF",
	  "PrecedesSlantEqual":"\u227C",
	  "PrecedesTilde":"\u227E",
	  "preceq":"\u2AAF",
	  "precnapprox":"\u2AB9",
	  "precneqq":"\u2AB5",
	  "precnsim":"\u22E8",
	  "precsim":"\u227E",
	  "Prime":"\u2033",
	  "prime":"\u2032",
	  "primes":"\u2119",
	  "prnap":"\u2AB9",
	  "prnE":"\u2AB5",
	  "prnsim":"\u22E8",
	  "prod":"\u220F",
	  "Product":"\u220F",
	  "profalar":"\u232E",
	  "profline":"\u2312",
	  "profsurf":"\u2313",
	  "prop":"\u221D",
	  "Proportion":"\u2237",
	  "Proportional":"\u221D",
	  "propto":"\u221D",
	  "prsim":"\u227E",
	  "prurel":"\u22B0",
	  "Pscr":"\uD835\uDCAB",
	  "pscr":"\uD835\uDCC5",
	  "Psi":"\u03A8",
	  "psi":"\u03C8",
	  "puncsp":"\u2008",
	  "Qfr":"\uD835\uDD14",
	  "qfr":"\uD835\uDD2E",
	  "qint":"\u2A0C",
	  "Qopf":"\u211A",
	  "qopf":"\uD835\uDD62",
	  "qprime":"\u2057",
	  "Qscr":"\uD835\uDCAC",
	  "qscr":"\uD835\uDCC6",
	  "quaternions":"\u210D",
	  "quatint":"\u2A16",
	  "quest":"\u003F",
	  "questeq":"\u225F",
	  "QUOT":"\u0022",
	  "quot":"\u0022",
	  "rAarr":"\u21DB",
	  "race":"\u223D\u0331",
	  "Racute":"\u0154",
	  "racute":"\u0155",
	  "radic":"\u221A",
	  "raemptyv":"\u29B3",
	  "Rang":"\u27EB",
	  "rang":"\u27E9",
	  "rangd":"\u2992",
	  "range":"\u29A5",
	  "rangle":"\u27E9",
	  "raquo":"\u00BB",
	  "Rarr":"\u21A0",
	  "rArr":"\u21D2",
	  "rarr":"\u2192",
	  "rarrap":"\u2975",
	  "rarrb":"\u21E5",
	  "rarrbfs":"\u2920",
	  "rarrc":"\u2933",
	  "rarrfs":"\u291E",
	  "rarrhk":"\u21AA",
	  "rarrlp":"\u21AC",
	  "rarrpl":"\u2945",
	  "rarrsim":"\u2974",
	  "Rarrtl":"\u2916",
	  "rarrtl":"\u21A3",
	  "rarrw":"\u219D",
	  "rAtail":"\u291C",
	  "ratail":"\u291A",
	  "ratio":"\u2236",
	  "rationals":"\u211A",
	  "RBarr":"\u2910",
	  "rBarr":"\u290F",
	  "rbarr":"\u290D",
	  "rbbrk":"\u2773",
	  "rbrace":"\u007D",
	  "rbrack":"\u005D",
	  "rbrke":"\u298C",
	  "rbrksld":"\u298E",
	  "rbrkslu":"\u2990",
	  "Rcaron":"\u0158",
	  "rcaron":"\u0159",
	  "Rcedil":"\u0156",
	  "rcedil":"\u0157",
	  "rceil":"\u2309",
	  "rcub":"\u007D",
	  "Rcy":"\u0420",
	  "rcy":"\u0440",
	  "rdca":"\u2937",
	  "rdldhar":"\u2969",
	  "rdquo":"\u201D",
	  "rdquor":"\u201D",
	  "rdsh":"\u21B3",
	  "Re":"\u211C",
	  "real":"\u211C",
	  "realine":"\u211B",
	  "realpart":"\u211C",
	  "reals":"\u211D",
	  "rect":"\u25AD",
	  "REG":"\u00AE",
	  "reg":"\u00AE",
	  "ReverseElement":"\u220B",
	  "ReverseEquilibrium":"\u21CB",
	  "ReverseUpEquilibrium":"\u296F",
	  "rfisht":"\u297D",
	  "rfloor":"\u230B",
	  "Rfr":"\u211C",
	  "rfr":"\uD835\uDD2F",
	  "rHar":"\u2964",
	  "rhard":"\u21C1",
	  "rharu":"\u21C0",
	  "rharul":"\u296C",
	  "Rho":"\u03A1",
	  "rho":"\u03C1",
	  "rhov":"\u03F1",
	  "RightAngleBracket":"\u27E9",
	  "RightArrow":"\u2192",
	  "Rightarrow":"\u21D2",
	  "rightarrow":"\u2192",
	  "RightArrowBar":"\u21E5",
	  "RightArrowLeftArrow":"\u21C4",
	  "rightarrowtail":"\u21A3",
	  "RightCeiling":"\u2309",
	  "RightDoubleBracket":"\u27E7",
	  "RightDownTeeVector":"\u295D",
	  "RightDownVector":"\u21C2",
	  "RightDownVectorBar":"\u2955",
	  "RightFloor":"\u230B",
	  "rightharpoondown":"\u21C1",
	  "rightharpoonup":"\u21C0",
	  "rightleftarrows":"\u21C4",
	  "rightleftharpoons":"\u21CC",
	  "rightrightarrows":"\u21C9",
	  "rightsquigarrow":"\u219D",
	  "RightTee":"\u22A2",
	  "RightTeeArrow":"\u21A6",
	  "RightTeeVector":"\u295B",
	  "rightthreetimes":"\u22CC",
	  "RightTriangle":"\u22B3",
	  "RightTriangleBar":"\u29D0",
	  "RightTriangleEqual":"\u22B5",
	  "RightUpDownVector":"\u294F",
	  "RightUpTeeVector":"\u295C",
	  "RightUpVector":"\u21BE",
	  "RightUpVectorBar":"\u2954",
	  "RightVector":"\u21C0",
	  "RightVectorBar":"\u2953",
	  "ring":"\u02DA",
	  "risingdotseq":"\u2253",
	  "rlarr":"\u21C4",
	  "rlhar":"\u21CC",
	  "rlm":"\u200F",
	  "rmoust":"\u23B1",
	  "rmoustache":"\u23B1",
	  "rnmid":"\u2AEE",
	  "roang":"\u27ED",
	  "roarr":"\u21FE",
	  "robrk":"\u27E7",
	  "ropar":"\u2986",
	  "Ropf":"\u211D",
	  "ropf":"\uD835\uDD63",
	  "roplus":"\u2A2E",
	  "rotimes":"\u2A35",
	  "RoundImplies":"\u2970",
	  "rpar":"\u0029",
	  "rpargt":"\u2994",
	  "rppolint":"\u2A12",
	  "rrarr":"\u21C9",
	  "Rrightarrow":"\u21DB",
	  "rsaquo":"\u203A",
	  "Rscr":"\u211B",
	  "rscr":"\uD835\uDCC7",
	  "Rsh":"\u21B1",
	  "rsh":"\u21B1",
	  "rsqb":"\u005D",
	  "rsquo":"\u2019",
	  "rsquor":"\u2019",
	  "rthree":"\u22CC",
	  "rtimes":"\u22CA",
	  "rtri":"\u25B9",
	  "rtrie":"\u22B5",
	  "rtrif":"\u25B8",
	  "rtriltri":"\u29CE",
	  "RuleDelayed":"\u29F4",
	  "ruluhar":"\u2968",
	  "rx":"\u211E",
	  "Sacute":"\u015A",
	  "sacute":"\u015B",
	  "sbquo":"\u201A",
	  "Sc":"\u2ABC",
	  "sc":"\u227B",
	  "scap":"\u2AB8",
	  "Scaron":"\u0160",
	  "scaron":"\u0161",
	  "sccue":"\u227D",
	  "scE":"\u2AB4",
	  "sce":"\u2AB0",
	  "Scedil":"\u015E",
	  "scedil":"\u015F",
	  "Scirc":"\u015C",
	  "scirc":"\u015D",
	  "scnap":"\u2ABA",
	  "scnE":"\u2AB6",
	  "scnsim":"\u22E9",
	  "scpolint":"\u2A13",
	  "scsim":"\u227F",
	  "Scy":"\u0421",
	  "scy":"\u0441",
	  "sdot":"\u22C5",
	  "sdotb":"\u22A1",
	  "sdote":"\u2A66",
	  "searhk":"\u2925",
	  "seArr":"\u21D8",
	  "searr":"\u2198",
	  "searrow":"\u2198",
	  "sect":"\u00A7",
	  "semi":"\u003B",
	  "seswar":"\u2929",
	  "setminus":"\u2216",
	  "setmn":"\u2216",
	  "sext":"\u2736",
	  "Sfr":"\uD835\uDD16",
	  "sfr":"\uD835\uDD30",
	  "sfrown":"\u2322",
	  "sharp":"\u266F",
	  "SHCHcy":"\u0429",
	  "shchcy":"\u0449",
	  "SHcy":"\u0428",
	  "shcy":"\u0448",
	  "ShortDownArrow":"\u2193",
	  "ShortLeftArrow":"\u2190",
	  "shortmid":"\u2223",
	  "shortparallel":"\u2225",
	  "ShortRightArrow":"\u2192",
	  "ShortUpArrow":"\u2191",
	  "shy":"\u00AD",
	  "Sigma":"\u03A3",
	  "sigma":"\u03C3",
	  "sigmaf":"\u03C2",
	  "sigmav":"\u03C2",
	  "sim":"\u223C",
	  "simdot":"\u2A6A",
	  "sime":"\u2243",
	  "simeq":"\u2243",
	  "simg":"\u2A9E",
	  "simgE":"\u2AA0",
	  "siml":"\u2A9D",
	  "simlE":"\u2A9F",
	  "simne":"\u2246",
	  "simplus":"\u2A24",
	  "simrarr":"\u2972",
	  "slarr":"\u2190",
	  "SmallCircle":"\u2218",
	  "smallsetminus":"\u2216",
	  "smashp":"\u2A33",
	  "smeparsl":"\u29E4",
	  "smid":"\u2223",
	  "smile":"\u2323",
	  "smt":"\u2AAA",
	  "smte":"\u2AAC",
	  "smtes":"\u2AAC\uFE00",
	  "SOFTcy":"\u042C",
	  "softcy":"\u044C",
	  "sol":"\u002F",
	  "solb":"\u29C4",
	  "solbar":"\u233F",
	  "Sopf":"\uD835\uDD4A",
	  "sopf":"\uD835\uDD64",
	  "spades":"\u2660",
	  "spadesuit":"\u2660",
	  "spar":"\u2225",
	  "sqcap":"\u2293",
	  "sqcaps":"\u2293\uFE00",
	  "sqcup":"\u2294",
	  "sqcups":"\u2294\uFE00",
	  "Sqrt":"\u221A",
	  "sqsub":"\u228F",
	  "sqsube":"\u2291",
	  "sqsubset":"\u228F",
	  "sqsubseteq":"\u2291",
	  "sqsup":"\u2290",
	  "sqsupe":"\u2292",
	  "sqsupset":"\u2290",
	  "sqsupseteq":"\u2292",
	  "squ":"\u25A1",
	  "Square":"\u25A1",
	  "square":"\u25A1",
	  "SquareIntersection":"\u2293",
	  "SquareSubset":"\u228F",
	  "SquareSubsetEqual":"\u2291",
	  "SquareSuperset":"\u2290",
	  "SquareSupersetEqual":"\u2292",
	  "SquareUnion":"\u2294",
	  "squarf":"\u25AA",
	  "squf":"\u25AA",
	  "srarr":"\u2192",
	  "Sscr":"\uD835\uDCAE",
	  "sscr":"\uD835\uDCC8",
	  "ssetmn":"\u2216",
	  "ssmile":"\u2323",
	  "sstarf":"\u22C6",
	  "Star":"\u22C6",
	  "star":"\u2606",
	  "starf":"\u2605",
	  "straightepsilon":"\u03F5",
	  "straightphi":"\u03D5",
	  "strns":"\u00AF",
	  "Sub":"\u22D0",
	  "sub":"\u2282",
	  "subdot":"\u2ABD",
	  "subE":"\u2AC5",
	  "sube":"\u2286",
	  "subedot":"\u2AC3",
	  "submult":"\u2AC1",
	  "subnE":"\u2ACB",
	  "subne":"\u228A",
	  "subplus":"\u2ABF",
	  "subrarr":"\u2979",
	  "Subset":"\u22D0",
	  "subset":"\u2282",
	  "subseteq":"\u2286",
	  "subseteqq":"\u2AC5",
	  "SubsetEqual":"\u2286",
	  "subsetneq":"\u228A",
	  "subsetneqq":"\u2ACB",
	  "subsim":"\u2AC7",
	  "subsub":"\u2AD5",
	  "subsup":"\u2AD3",
	  "succ":"\u227B",
	  "succapprox":"\u2AB8",
	  "succcurlyeq":"\u227D",
	  "Succeeds":"\u227B",
	  "SucceedsEqual":"\u2AB0",
	  "SucceedsSlantEqual":"\u227D",
	  "SucceedsTilde":"\u227F",
	  "succeq":"\u2AB0",
	  "succnapprox":"\u2ABA",
	  "succneqq":"\u2AB6",
	  "succnsim":"\u22E9",
	  "succsim":"\u227F",
	  "SuchThat":"\u220B",
	  "Sum":"\u2211",
	  "sum":"\u2211",
	  "sung":"\u266A",
	  "Sup":"\u22D1",
	  "sup":"\u2283",
	  "sup1":"\u00B9",
	  "sup2":"\u00B2",
	  "sup3":"\u00B3",
	  "supdot":"\u2ABE",
	  "supdsub":"\u2AD8",
	  "supE":"\u2AC6",
	  "supe":"\u2287",
	  "supedot":"\u2AC4",
	  "Superset":"\u2283",
	  "SupersetEqual":"\u2287",
	  "suphsol":"\u27C9",
	  "suphsub":"\u2AD7",
	  "suplarr":"\u297B",
	  "supmult":"\u2AC2",
	  "supnE":"\u2ACC",
	  "supne":"\u228B",
	  "supplus":"\u2AC0",
	  "Supset":"\u22D1",
	  "supset":"\u2283",
	  "supseteq":"\u2287",
	  "supseteqq":"\u2AC6",
	  "supsetneq":"\u228B",
	  "supsetneqq":"\u2ACC",
	  "supsim":"\u2AC8",
	  "supsub":"\u2AD4",
	  "supsup":"\u2AD6",
	  "swarhk":"\u2926",
	  "swArr":"\u21D9",
	  "swarr":"\u2199",
	  "swarrow":"\u2199",
	  "swnwar":"\u292A",
	  "szlig":"\u00DF",
	  "Tab":"\u0009",
	  "target":"\u2316",
	  "Tau":"\u03A4",
	  "tau":"\u03C4",
	  "tbrk":"\u23B4",
	  "Tcaron":"\u0164",
	  "tcaron":"\u0165",
	  "Tcedil":"\u0162",
	  "tcedil":"\u0163",
	  "Tcy":"\u0422",
	  "tcy":"\u0442",
	  "tdot":"\u20DB",
	  "telrec":"\u2315",
	  "Tfr":"\uD835\uDD17",
	  "tfr":"\uD835\uDD31",
	  "there4":"\u2234",
	  "Therefore":"\u2234",
	  "therefore":"\u2234",
	  "Theta":"\u0398",
	  "theta":"\u03B8",
	  "thetasym":"\u03D1",
	  "thetav":"\u03D1",
	  "thickapprox":"\u2248",
	  "thicksim":"\u223C",
	  "ThickSpace":"\u205F\u200A",
	  "thinsp":"\u2009",
	  "ThinSpace":"\u2009",
	  "thkap":"\u2248",
	  "thksim":"\u223C",
	  "THORN":"\u00DE",
	  "thorn":"\u00FE",
	  "Tilde":"\u223C",
	  "tilde":"\u02DC",
	  "TildeEqual":"\u2243",
	  "TildeFullEqual":"\u2245",
	  "TildeTilde":"\u2248",
	  "times":"\u00D7",
	  "timesb":"\u22A0",
	  "timesbar":"\u2A31",
	  "timesd":"\u2A30",
	  "tint":"\u222D",
	  "toea":"\u2928",
	  "top":"\u22A4",
	  "topbot":"\u2336",
	  "topcir":"\u2AF1",
	  "Topf":"\uD835\uDD4B",
	  "topf":"\uD835\uDD65",
	  "topfork":"\u2ADA",
	  "tosa":"\u2929",
	  "tprime":"\u2034",
	  "TRADE":"\u2122",
	  "trade":"\u2122",
	  "triangle":"\u25B5",
	  "triangledown":"\u25BF",
	  "triangleleft":"\u25C3",
	  "trianglelefteq":"\u22B4",
	  "triangleq":"\u225C",
	  "triangleright":"\u25B9",
	  "trianglerighteq":"\u22B5",
	  "tridot":"\u25EC",
	  "trie":"\u225C",
	  "triminus":"\u2A3A",
	  "TripleDot":"\u20DB",
	  "triplus":"\u2A39",
	  "trisb":"\u29CD",
	  "tritime":"\u2A3B",
	  "trpezium":"\u23E2",
	  "Tscr":"\uD835\uDCAF",
	  "tscr":"\uD835\uDCC9",
	  "TScy":"\u0426",
	  "tscy":"\u0446",
	  "TSHcy":"\u040B",
	  "tshcy":"\u045B",
	  "Tstrok":"\u0166",
	  "tstrok":"\u0167",
	  "twixt":"\u226C",
	  "twoheadleftarrow":"\u219E",
	  "twoheadrightarrow":"\u21A0",
	  "Uacute":"\u00DA",
	  "uacute":"\u00FA",
	  "Uarr":"\u219F",
	  "uArr":"\u21D1",
	  "uarr":"\u2191",
	  "Uarrocir":"\u2949",
	  "Ubrcy":"\u040E",
	  "ubrcy":"\u045E",
	  "Ubreve":"\u016C",
	  "ubreve":"\u016D",
	  "Ucirc":"\u00DB",
	  "ucirc":"\u00FB",
	  "Ucy":"\u0423",
	  "ucy":"\u0443",
	  "udarr":"\u21C5",
	  "Udblac":"\u0170",
	  "udblac":"\u0171",
	  "udhar":"\u296E",
	  "ufisht":"\u297E",
	  "Ufr":"\uD835\uDD18",
	  "ufr":"\uD835\uDD32",
	  "Ugrave":"\u00D9",
	  "ugrave":"\u00F9",
	  "uHar":"\u2963",
	  "uharl":"\u21BF",
	  "uharr":"\u21BE",
	  "uhblk":"\u2580",
	  "ulcorn":"\u231C",
	  "ulcorner":"\u231C",
	  "ulcrop":"\u230F",
	  "ultri":"\u25F8",
	  "Umacr":"\u016A",
	  "umacr":"\u016B",
	  "uml":"\u00A8",
	  "UnderBar":"\u005F",
	  "UnderBrace":"\u23DF",
	  "UnderBracket":"\u23B5",
	  "UnderParenthesis":"\u23DD",
	  "Union":"\u22C3",
	  "UnionPlus":"\u228E",
	  "Uogon":"\u0172",
	  "uogon":"\u0173",
	  "Uopf":"\uD835\uDD4C",
	  "uopf":"\uD835\uDD66",
	  "UpArrow":"\u2191",
	  "Uparrow":"\u21D1",
	  "uparrow":"\u2191",
	  "UpArrowBar":"\u2912",
	  "UpArrowDownArrow":"\u21C5",
	  "UpDownArrow":"\u2195",
	  "Updownarrow":"\u21D5",
	  "updownarrow":"\u2195",
	  "UpEquilibrium":"\u296E",
	  "upharpoonleft":"\u21BF",
	  "upharpoonright":"\u21BE",
	  "uplus":"\u228E",
	  "UpperLeftArrow":"\u2196",
	  "UpperRightArrow":"\u2197",
	  "Upsi":"\u03D2",
	  "upsi":"\u03C5",
	  "upsih":"\u03D2",
	  "Upsilon":"\u03A5",
	  "upsilon":"\u03C5",
	  "UpTee":"\u22A5",
	  "UpTeeArrow":"\u21A5",
	  "upuparrows":"\u21C8",
	  "urcorn":"\u231D",
	  "urcorner":"\u231D",
	  "urcrop":"\u230E",
	  "Uring":"\u016E",
	  "uring":"\u016F",
	  "urtri":"\u25F9",
	  "Uscr":"\uD835\uDCB0",
	  "uscr":"\uD835\uDCCA",
	  "utdot":"\u22F0",
	  "Utilde":"\u0168",
	  "utilde":"\u0169",
	  "utri":"\u25B5",
	  "utrif":"\u25B4",
	  "uuarr":"\u21C8",
	  "Uuml":"\u00DC",
	  "uuml":"\u00FC",
	  "uwangle":"\u29A7",
	  "vangrt":"\u299C",
	  "varepsilon":"\u03F5",
	  "varkappa":"\u03F0",
	  "varnothing":"\u2205",
	  "varphi":"\u03D5",
	  "varpi":"\u03D6",
	  "varpropto":"\u221D",
	  "vArr":"\u21D5",
	  "varr":"\u2195",
	  "varrho":"\u03F1",
	  "varsigma":"\u03C2",
	  "varsubsetneq":"\u228A\uFE00",
	  "varsubsetneqq":"\u2ACB\uFE00",
	  "varsupsetneq":"\u228B\uFE00",
	  "varsupsetneqq":"\u2ACC\uFE00",
	  "vartheta":"\u03D1",
	  "vartriangleleft":"\u22B2",
	  "vartriangleright":"\u22B3",
	  "Vbar":"\u2AEB",
	  "vBar":"\u2AE8",
	  "vBarv":"\u2AE9",
	  "Vcy":"\u0412",
	  "vcy":"\u0432",
	  "VDash":"\u22AB",
	  "Vdash":"\u22A9",
	  "vDash":"\u22A8",
	  "vdash":"\u22A2",
	  "Vdashl":"\u2AE6",
	  "Vee":"\u22C1",
	  "vee":"\u2228",
	  "veebar":"\u22BB",
	  "veeeq":"\u225A",
	  "vellip":"\u22EE",
	  "Verbar":"\u2016",
	  "verbar":"\u007C",
	  "Vert":"\u2016",
	  "vert":"\u007C",
	  "VerticalBar":"\u2223",
	  "VerticalLine":"\u007C",
	  "VerticalSeparator":"\u2758",
	  "VerticalTilde":"\u2240",
	  "VeryThinSpace":"\u200A",
	  "Vfr":"\uD835\uDD19",
	  "vfr":"\uD835\uDD33",
	  "vltri":"\u22B2",
	  "vnsub":"\u2282\u20D2",
	  "vnsup":"\u2283\u20D2",
	  "Vopf":"\uD835\uDD4D",
	  "vopf":"\uD835\uDD67",
	  "vprop":"\u221D",
	  "vrtri":"\u22B3",
	  "Vscr":"\uD835\uDCB1",
	  "vscr":"\uD835\uDCCB",
	  "vsubnE":"\u2ACB\uFE00",
	  "vsubne":"\u228A\uFE00",
	  "vsupnE":"\u2ACC\uFE00",
	  "vsupne":"\u228B\uFE00",
	  "Vvdash":"\u22AA",
	  "vzigzag":"\u299A",
	  "Wcirc":"\u0174",
	  "wcirc":"\u0175",
	  "wedbar":"\u2A5F",
	  "Wedge":"\u22C0",
	  "wedge":"\u2227",
	  "wedgeq":"\u2259",
	  "weierp":"\u2118",
	  "Wfr":"\uD835\uDD1A",
	  "wfr":"\uD835\uDD34",
	  "Wopf":"\uD835\uDD4E",
	  "wopf":"\uD835\uDD68",
	  "wp":"\u2118",
	  "wr":"\u2240",
	  "wreath":"\u2240",
	  "Wscr":"\uD835\uDCB2",
	  "wscr":"\uD835\uDCCC",
	  "xcap":"\u22C2",
	  "xcirc":"\u25EF",
	  "xcup":"\u22C3",
	  "xdtri":"\u25BD",
	  "Xfr":"\uD835\uDD1B",
	  "xfr":"\uD835\uDD35",
	  "xhArr":"\u27FA",
	  "xharr":"\u27F7",
	  "Xi":"\u039E",
	  "xi":"\u03BE",
	  "xlArr":"\u27F8",
	  "xlarr":"\u27F5",
	  "xmap":"\u27FC",
	  "xnis":"\u22FB",
	  "xodot":"\u2A00",
	  "Xopf":"\uD835\uDD4F",
	  "xopf":"\uD835\uDD69",
	  "xoplus":"\u2A01",
	  "xotime":"\u2A02",
	  "xrArr":"\u27F9",
	  "xrarr":"\u27F6",
	  "Xscr":"\uD835\uDCB3",
	  "xscr":"\uD835\uDCCD",
	  "xsqcup":"\u2A06",
	  "xuplus":"\u2A04",
	  "xutri":"\u25B3",
	  "xvee":"\u22C1",
	  "xwedge":"\u22C0",
	  "Yacute":"\u00DD",
	  "yacute":"\u00FD",
	  "YAcy":"\u042F",
	  "yacy":"\u044F",
	  "Ycirc":"\u0176",
	  "ycirc":"\u0177",
	  "Ycy":"\u042B",
	  "ycy":"\u044B",
	  "yen":"\u00A5",
	  "Yfr":"\uD835\uDD1C",
	  "yfr":"\uD835\uDD36",
	  "YIcy":"\u0407",
	  "yicy":"\u0457",
	  "Yopf":"\uD835\uDD50",
	  "yopf":"\uD835\uDD6A",
	  "Yscr":"\uD835\uDCB4",
	  "yscr":"\uD835\uDCCE",
	  "YUcy":"\u042E",
	  "yucy":"\u044E",
	  "Yuml":"\u0178",
	  "yuml":"\u00FF",
	  "Zacute":"\u0179",
	  "zacute":"\u017A",
	  "Zcaron":"\u017D",
	  "zcaron":"\u017E",
	  "Zcy":"\u0417",
	  "zcy":"\u0437",
	  "Zdot":"\u017B",
	  "zdot":"\u017C",
	  "zeetrf":"\u2128",
	  "ZeroWidthSpace":"\u200B",
	  "Zeta":"\u0396",
	  "zeta":"\u03B6",
	  "Zfr":"\u2128",
	  "zfr":"\uD835\uDD37",
	  "ZHcy":"\u0416",
	  "zhcy":"\u0436",
	  "zigrarr":"\u21DD",
	  "Zopf":"\u2124",
	  "zopf":"\uD835\uDD6B",
	  "Zscr":"\uD835\uDCB5",
	  "zscr":"\uD835\uDCCF",
	  "zwj":"\u200D",
	  "zwnj":"\u200C"
	};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var utils = __webpack_require__(231);
	var rules = __webpack_require__(234);
	
	/**
	 * Expose `Renderer`
	 */
	
	module.exports = Renderer;
	
	/**
	 * Renderer class. Renders HTML and exposes `rules` to allow
	 * local modifications.
	 */
	
	function Renderer() {
	  this.rules = utils.assign({}, rules);
	
	  // exported helper, for custom rules only
	  this.getBreak = rules.getBreak;
	}
	
	/**
	 * Render a string of inline HTML with the given `tokens` and
	 * `options`.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @return {String}
	 * @api public
	 */
	
	Renderer.prototype.renderInline = function (tokens, options, env) {
	  var _rules = this.rules;
	  var len = tokens.length, i = 0;
	  var result = '';
	
	  while (len--) {
	    result += _rules[tokens[i].type](tokens, i++, options, env, this);
	  }
	
	  return result;
	};
	
	/**
	 * Render a string of HTML with the given `tokens` and
	 * `options`.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @return {String}
	 * @api public
	 */
	
	Renderer.prototype.render = function (tokens, options, env) {
	  var _rules = this.rules;
	  var len = tokens.length, i = -1;
	  var result = '';
	
	  while (++i < len) {
	    if (tokens[i].type === 'inline') {
	      result += this.renderInline(tokens[i].children, options, env);
	    } else {
	      result += _rules[tokens[i].type](tokens, i, options, env, this);
	    }
	  }
	  return result;
	};


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var has             = __webpack_require__(231).has;
	var unescapeMd      = __webpack_require__(231).unescapeMd;
	var replaceEntities = __webpack_require__(231).replaceEntities;
	var escapeHtml      = __webpack_require__(231).escapeHtml;
	
	/**
	 * Renderer rules cache
	 */
	
	var rules = {};
	
	/**
	 * Blockquotes
	 */
	
	rules.blockquote_open = function(/* tokens, idx, options, env */) {
	  return '<blockquote>\n';
	};
	
	rules.blockquote_close = function(tokens, idx /*, options, env */) {
	  return '</blockquote>' + getBreak(tokens, idx);
	};
	
	/**
	 * Code
	 */
	
	rules.code = function(tokens, idx /*, options, env */) {
	  if (tokens[idx].block) {
	    return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>' + getBreak(tokens, idx);
	  }
	  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
	};
	
	/**
	 * Fenced code blocks
	 */
	
	rules.fence = function(tokens, idx, options, env, instance) {
	  var token = tokens[idx];
	  var langClass = '';
	  var langPrefix = options.langPrefix;
	  var langName = '', fences, fenceName;
	  var highlighted;
	
	  if (token.params) {
	
	    //
	    // ```foo bar
	    //
	    // Try custom renderer "foo" first. That will simplify overwrite
	    // for diagrams, latex, and any other fenced block with custom look
	    //
	
	    fences = token.params.split(/\s+/g);
	    fenceName = fences.join(' ');
	
	    if (has(instance.rules.fence_custom, fences[0])) {
	      return instance.rules.fence_custom[fences[0]](tokens, idx, options, env, instance);
	    }
	
	    langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
	    langClass = ' class="' + langPrefix + langName + '"';
	  }
	
	  if (options.highlight) {
	    highlighted = options.highlight.apply(options.highlight, [ token.content ].concat(fences))
	      || escapeHtml(token.content);
	  } else {
	    highlighted = escapeHtml(token.content);
	  }
	
	  return '<pre><code' + langClass + '>'
	        + highlighted
	        + '</code></pre>'
	        + getBreak(tokens, idx);
	};
	
	rules.fence_custom = {};
	
	/**
	 * Headings
	 */
	
	rules.heading_open = function(tokens, idx /*, options, env */) {
	  return '<h' + tokens[idx].hLevel + '>';
	};
	rules.heading_close = function(tokens, idx /*, options, env */) {
	  return '</h' + tokens[idx].hLevel + '>\n';
	};
	
	/**
	 * Horizontal rules
	 */
	
	rules.hr = function(tokens, idx, options /*, env */) {
	  return (options.xhtmlOut ? '<hr />' : '<hr>') + getBreak(tokens, idx);
	};
	
	/**
	 * Bullets
	 */
	
	rules.bullet_list_open = function(/* tokens, idx, options, env */) {
	  return '<ul>\n';
	};
	rules.bullet_list_close = function(tokens, idx /*, options, env */) {
	  return '</ul>' + getBreak(tokens, idx);
	};
	
	/**
	 * List items
	 */
	
	rules.list_item_open = function(/* tokens, idx, options, env */) {
	  return '<li>';
	};
	rules.list_item_close = function(/* tokens, idx, options, env */) {
	  return '</li>\n';
	};
	
	/**
	 * Ordered list items
	 */
	
	rules.ordered_list_open = function(tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  var order = token.order > 1 ? ' start="' + token.order + '"' : '';
	  return '<ol' + order + '>\n';
	};
	rules.ordered_list_close = function(tokens, idx /*, options, env */) {
	  return '</ol>' + getBreak(tokens, idx);
	};
	
	/**
	 * Paragraphs
	 */
	
	rules.paragraph_open = function(tokens, idx /*, options, env */) {
	  return tokens[idx].tight ? '' : '<p>';
	};
	rules.paragraph_close = function(tokens, idx /*, options, env */) {
	  var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === 'inline' && !tokens[idx - 1].content);
	  return (tokens[idx].tight ? '' : '</p>') + (addBreak ? getBreak(tokens, idx) : '');
	};
	
	/**
	 * Links
	 */
	
	rules.link_open = function(tokens, idx, options /* env */) {
	  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
	  var target = options.linkTarget ? (' target="' + options.linkTarget + '"') : '';
	  return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + target + '>';
	};
	rules.link_close = function(/* tokens, idx, options, env */) {
	  return '</a>';
	};
	
	/**
	 * Images
	 */
	
	rules.image = function(tokens, idx, options /*, env */) {
	  var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
	  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
	  var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(unescapeMd(tokens[idx].alt))) : '') + '"';
	  var suffix = options.xhtmlOut ? ' /' : '';
	  return '<img' + src + alt + title + suffix + '>';
	};
	
	/**
	 * Tables
	 */
	
	rules.table_open = function(/* tokens, idx, options, env */) {
	  return '<table>\n';
	};
	rules.table_close = function(/* tokens, idx, options, env */) {
	  return '</table>\n';
	};
	rules.thead_open = function(/* tokens, idx, options, env */) {
	  return '<thead>\n';
	};
	rules.thead_close = function(/* tokens, idx, options, env */) {
	  return '</thead>\n';
	};
	rules.tbody_open = function(/* tokens, idx, options, env */) {
	  return '<tbody>\n';
	};
	rules.tbody_close = function(/* tokens, idx, options, env */) {
	  return '</tbody>\n';
	};
	rules.tr_open = function(/* tokens, idx, options, env */) {
	  return '<tr>';
	};
	rules.tr_close = function(/* tokens, idx, options, env */) {
	  return '</tr>\n';
	};
	rules.th_open = function(tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  return '<th'
	    + (token.align ? ' style="text-align:' + token.align + '"' : '')
	    + '>';
	};
	rules.th_close = function(/* tokens, idx, options, env */) {
	  return '</th>';
	};
	rules.td_open = function(tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  return '<td'
	    + (token.align ? ' style="text-align:' + token.align + '"' : '')
	    + '>';
	};
	rules.td_close = function(/* tokens, idx, options, env */) {
	  return '</td>';
	};
	
	/**
	 * Bold
	 */
	
	rules.strong_open = function(/* tokens, idx, options, env */) {
	  return '<strong>';
	};
	rules.strong_close = function(/* tokens, idx, options, env */) {
	  return '</strong>';
	};
	
	/**
	 * Italicize
	 */
	
	rules.em_open = function(/* tokens, idx, options, env */) {
	  return '<em>';
	};
	rules.em_close = function(/* tokens, idx, options, env */) {
	  return '</em>';
	};
	
	/**
	 * Strikethrough
	 */
	
	rules.del_open = function(/* tokens, idx, options, env */) {
	  return '<del>';
	};
	rules.del_close = function(/* tokens, idx, options, env */) {
	  return '</del>';
	};
	
	/**
	 * Insert
	 */
	
	rules.ins_open = function(/* tokens, idx, options, env */) {
	  return '<ins>';
	};
	rules.ins_close = function(/* tokens, idx, options, env */) {
	  return '</ins>';
	};
	
	/**
	 * Highlight
	 */
	
	rules.mark_open = function(/* tokens, idx, options, env */) {
	  return '<mark>';
	};
	rules.mark_close = function(/* tokens, idx, options, env */) {
	  return '</mark>';
	};
	
	/**
	 * Super- and sub-script
	 */
	
	rules.sub = function(tokens, idx /*, options, env */) {
	  return '<sub>' + escapeHtml(tokens[idx].content) + '</sub>';
	};
	rules.sup = function(tokens, idx /*, options, env */) {
	  return '<sup>' + escapeHtml(tokens[idx].content) + '</sup>';
	};
	
	/**
	 * Breaks
	 */
	
	rules.hardbreak = function(tokens, idx, options /*, env */) {
	  return options.xhtmlOut ? '<br />\n' : '<br>\n';
	};
	rules.softbreak = function(tokens, idx, options /*, env */) {
	  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
	};
	
	/**
	 * Text
	 */
	
	rules.text = function(tokens, idx /*, options, env */) {
	  return escapeHtml(tokens[idx].content);
	};
	
	/**
	 * Content
	 */
	
	rules.htmlblock = function(tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};
	rules.htmltag = function(tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};
	
	/**
	 * Abbreviations, initialism
	 */
	
	rules.abbr_open = function(tokens, idx /*, options, env */) {
	  return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
	};
	rules.abbr_close = function(/* tokens, idx, options, env */) {
	  return '</abbr>';
	};
	
	/**
	 * Footnotes
	 */
	
	rules.footnote_ref = function(tokens, idx) {
	  var n = Number(tokens[idx].id + 1).toString();
	  var id = 'fnref' + n;
	  if (tokens[idx].subId > 0) {
	    id += ':' + tokens[idx].subId;
	  }
	  return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
	};
	rules.footnote_block_open = function(tokens, idx, options) {
	  var hr = options.xhtmlOut
	    ? '<hr class="footnotes-sep" />\n'
	    : '<hr class="footnotes-sep">\n';
	  return hr + '<section class="footnotes">\n<ol class="footnotes-list">\n';
	};
	rules.footnote_block_close = function() {
	  return '</ol>\n</section>\n';
	};
	rules.footnote_open = function(tokens, idx) {
	  var id = Number(tokens[idx].id + 1).toString();
	  return '<li id="fn' + id + '"  class="footnote-item">';
	};
	rules.footnote_close = function() {
	  return '</li>\n';
	};
	rules.footnote_anchor = function(tokens, idx) {
	  var n = Number(tokens[idx].id + 1).toString();
	  var id = 'fnref' + n;
	  if (tokens[idx].subId > 0) {
	    id += ':' + tokens[idx].subId;
	  }
	  return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
	};
	
	/**
	 * Definition lists
	 */
	
	rules.dl_open = function() {
	  return '<dl>\n';
	};
	rules.dt_open = function() {
	  return '<dt>';
	};
	rules.dd_open = function() {
	  return '<dd>';
	};
	rules.dl_close = function() {
	  return '</dl>\n';
	};
	rules.dt_close = function() {
	  return '</dt>\n';
	};
	rules.dd_close = function() {
	  return '</dd>\n';
	};
	
	/**
	 * Helper functions
	 */
	
	function nextToken(tokens, idx) {
	  if (++idx >= tokens.length - 2) {
	    return idx;
	  }
	  if ((tokens[idx].type === 'paragraph_open' && tokens[idx].tight) &&
	      (tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0) &&
	      (tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight)) {
	    return nextToken(tokens, idx + 2);
	  }
	  return idx;
	}
	
	/**
	 * Check to see if `\n` is needed before the next token.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Number} `idx`
	 * @return {String} Empty string or newline
	 * @api private
	 */
	
	var getBreak = rules.getBreak = function getBreak(tokens, idx) {
	  idx = nextToken(tokens, idx);
	  if (idx < tokens.length && tokens[idx].type === 'list_item_close') {
	    return '';
	  }
	  return '\n';
	};
	
	/**
	 * Expose `rules`
	 */
	
	module.exports = rules;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var Ruler = __webpack_require__(236);
	
	/**
	 * Core parser `rules`
	 */
	
	var _rules = [
	  [ 'block',          __webpack_require__(237)          ],
	  [ 'abbr',           __webpack_require__(238)           ],
	  [ 'references',     __webpack_require__(241)     ],
	  [ 'inline',         __webpack_require__(246)         ],
	  [ 'footnote_tail',  __webpack_require__(247)  ],
	  [ 'abbr2',          __webpack_require__(248)          ],
	  [ 'replacements',   __webpack_require__(249)   ],
	  [ 'smartquotes',    __webpack_require__(250)    ],
	  [ 'linkify',        __webpack_require__(251)        ]
	];
	
	/**
	 * Class for top level (`core`) parser rules
	 *
	 * @api private
	 */
	
	function Core() {
	  this.options = {};
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }
	}
	
	/**
	 * Process rules with the given `state`
	 *
	 * @param  {Object} `state`
	 * @api private
	 */
	
	Core.prototype.process = function (state) {
	  var i, l, rules;
	  rules = this.ruler.getRules('');
	  for (i = 0, l = rules.length; i < l; i++) {
	    rules[i](state);
	  }
	};
	
	/**
	 * Expose `Core`
	 */
	
	module.exports = Core;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Ruler is a helper class for building responsibility chains from
	 * parse rules. It allows:
	 *
	 *   - easy stack rules chains
	 *   - getting main chain and named chains content (as arrays of functions)
	 *
	 * Helper methods, should not be used directly.
	 * @api private
	 */
	
	function Ruler() {
	  // List of added rules. Each element is:
	  //
	  // { name: XXX,
	  //   enabled: Boolean,
	  //   fn: Function(),
	  //   alt: [ name2, name3 ] }
	  //
	  this.__rules__ = [];
	
	  // Cached rule chains.
	  //
	  // First level - chain name, '' for default.
	  // Second level - digital anchor for fast filtering by charcodes.
	  //
	  this.__cache__ = null;
	}
	
	/**
	 * Find the index of a rule by `name`.
	 *
	 * @param  {String} `name`
	 * @return {Number} Index of the given `name`
	 * @api private
	 */
	
	Ruler.prototype.__find__ = function (name) {
	  var len = this.__rules__.length;
	  var i = -1;
	
	  while (len--) {
	    if (this.__rules__[++i].name === name) {
	      return i;
	    }
	  }
	  return -1;
	};
	
	/**
	 * Build the rules lookup cache
	 *
	 * @api private
	 */
	
	Ruler.prototype.__compile__ = function () {
	  var self = this;
	  var chains = [ '' ];
	
	  // collect unique names
	  self.__rules__.forEach(function (rule) {
	    if (!rule.enabled) {
	      return;
	    }
	
	    rule.alt.forEach(function (altName) {
	      if (chains.indexOf(altName) < 0) {
	        chains.push(altName);
	      }
	    });
	  });
	
	  self.__cache__ = {};
	
	  chains.forEach(function (chain) {
	    self.__cache__[chain] = [];
	    self.__rules__.forEach(function (rule) {
	      if (!rule.enabled) {
	        return;
	      }
	
	      if (chain && rule.alt.indexOf(chain) < 0) {
	        return;
	      }
	      self.__cache__[chain].push(rule.fn);
	    });
	  });
	};
	
	/**
	 * Ruler public methods
	 * ------------------------------------------------
	 */
	
	/**
	 * Replace rule function
	 *
	 * @param  {String} `name` Rule name
	 * @param  {Function `fn`
	 * @param  {Object} `options`
	 * @api private
	 */
	
	Ruler.prototype.at = function (name, fn, options) {
	  var idx = this.__find__(name);
	  var opt = options || {};
	
	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + name);
	  }
	
	  this.__rules__[idx].fn = fn;
	  this.__rules__[idx].alt = opt.alt || [];
	  this.__cache__ = null;
	};
	
	/**
	 * Add a rule to the chain before given the `ruleName`.
	 *
	 * @param  {String}   `beforeName`
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @api private
	 */
	
	Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
	  var idx = this.__find__(beforeName);
	  var opt = options || {};
	
	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + beforeName);
	  }
	
	  this.__rules__.splice(idx, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });
	
	  this.__cache__ = null;
	};
	
	/**
	 * Add a rule to the chain after the given `ruleName`.
	 *
	 * @param  {String}   `afterName`
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @api private
	 */
	
	Ruler.prototype.after = function (afterName, ruleName, fn, options) {
	  var idx = this.__find__(afterName);
	  var opt = options || {};
	
	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + afterName);
	  }
	
	  this.__rules__.splice(idx + 1, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });
	
	  this.__cache__ = null;
	};
	
	/**
	 * Add a rule to the end of chain.
	 *
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @return {String}
	 */
	
	Ruler.prototype.push = function (ruleName, fn, options) {
	  var opt = options || {};
	
	  this.__rules__.push({
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });
	
	  this.__cache__ = null;
	};
	
	/**
	 * Enable a rule or list of rules.
	 *
	 * @param  {String|Array} `list` Name or array of rule names to enable
	 * @param  {Boolean} `strict` If `true`, all non listed rules will be disabled.
	 * @api private
	 */
	
	Ruler.prototype.enable = function (list, strict) {
	  list = !Array.isArray(list)
	    ? [ list ]
	    : list;
	
	  // In strict mode disable all existing rules first
	  if (strict) {
	    this.__rules__.forEach(function (rule) {
	      rule.enabled = false;
	    });
	  }
	
	  // Search by name and enable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);
	    if (idx < 0) {
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = true;
	  }, this);
	
	  this.__cache__ = null;
	};
	
	
	/**
	 * Disable a rule or list of rules.
	 *
	 * @param  {String|Array} `list` Name or array of rule names to disable
	 * @api private
	 */
	
	Ruler.prototype.disable = function (list) {
	  list = !Array.isArray(list)
	    ? [ list ]
	    : list;
	
	  // Search by name and disable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);
	    if (idx < 0) {
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = false;
	  }, this);
	
	  this.__cache__ = null;
	};
	
	/**
	 * Get a rules list as an array of functions.
	 *
	 * @param  {String} `chainName`
	 * @return {Object}
	 * @api private
	 */
	
	Ruler.prototype.getRules = function (chainName) {
	  if (this.__cache__ === null) {
	    this.__compile__();
	  }
	  return this.__cache__[chainName] || [];
	};
	
	/**
	 * Expose `Ruler`
	 */
	
	module.exports = Ruler;


/***/ }),
/* 237 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function block(state) {
	
	  if (state.inlineMode) {
	    state.tokens.push({
	      type: 'inline',
	      content: state.src.replace(/\n/g, ' ').trim(),
	      level: 0,
	      lines: [ 0, 1 ],
	      children: []
	    });
	
	  } else {
	    state.block.parse(state.src, state.options, state.env, state.tokens);
	  }
	};


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	// Parse abbreviation definitions, i.e. `*[abbr]: description`
	//
	
	'use strict';
	
	
	var StateInline    = __webpack_require__(239);
	var parseLinkLabel = __webpack_require__(240);
	
	
	function parseAbbr(str, parserInline, options, env) {
	  var state, labelEnd, pos, max, label, title;
	
	  if (str.charCodeAt(0) !== 0x2A/* * */) { return -1; }
	  if (str.charCodeAt(1) !== 0x5B/* [ */) { return -1; }
	
	  if (str.indexOf(']:') === -1) { return -1; }
	
	  state = new StateInline(str, parserInline, options, env, []);
	  labelEnd = parseLinkLabel(state, 1);
	
	  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }
	
	  max = state.posMax;
	
	  // abbr title is always one line, so looking for ending "\n" here
	  for (pos = labelEnd + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x0A) { break; }
	  }
	
	  label = str.slice(2, labelEnd);
	  title = str.slice(labelEnd + 2, pos).trim();
	  if (title.length === 0) { return -1; }
	  if (!env.abbreviations) { env.abbreviations = {}; }
	  // prepend ':' to avoid conflict with Object.prototype members
	  if (typeof env.abbreviations[':' + label] === 'undefined') {
	    env.abbreviations[':' + label] = title;
	  }
	
	  return pos;
	}
	
	module.exports = function abbr(state) {
	  var tokens = state.tokens, i, l, content, pos;
	
	  if (state.inlineMode) {
	    return;
	  }
	
	  // Parse inlines
	  for (i = 1, l = tokens.length - 1; i < l; i++) {
	    if (tokens[i - 1].type === 'paragraph_open' &&
	        tokens[i].type === 'inline' &&
	        tokens[i + 1].type === 'paragraph_close') {
	
	      content = tokens[i].content;
	      while (content.length) {
	        pos = parseAbbr(content, state.inline, state.options, state.env);
	        if (pos < 0) { break; }
	        content = content.slice(pos).trim();
	      }
	
	      tokens[i].content = content;
	      if (!content.length) {
	        tokens[i - 1].tight = true;
	        tokens[i + 1].tight = true;
	      }
	    }
	  }
	};


/***/ }),
/* 239 */
/***/ (function(module, exports) {

	// Inline parser state
	
	'use strict';
	
	function StateInline(src, parserInline, options, env, outTokens) {
	  this.src = src;
	  this.env = env;
	  this.options = options;
	  this.parser = parserInline;
	  this.tokens = outTokens;
	  this.pos = 0;
	  this.posMax = this.src.length;
	  this.level = 0;
	  this.pending = '';
	  this.pendingLevel = 0;
	
	  this.cache = [];        // Stores { start: end } pairs. Useful for backtrack
	                          // optimization of pairs parse (emphasis, strikes).
	
	  // Link parser state vars
	
	  this.isInLabel = false; // Set true when seek link label - we should disable
	                          // "paired" rules (emphasis, strikes) to not skip
	                          // tailing `]`
	
	  this.linkLevel = 0;     // Increment for each nesting link. Used to prevent
	                          // nesting in definitions
	
	  this.linkContent = '';  // Temporary storage for link url
	
	  this.labelUnmatchedScopes = 0; // Track unpaired `[` for link labels
	                                 // (backtrack optimization)
	}
	
	// Flush pending text
	//
	StateInline.prototype.pushPending = function () {
	  this.tokens.push({
	    type: 'text',
	    content: this.pending,
	    level: this.pendingLevel
	  });
	  this.pending = '';
	};
	
	// Push new token to "stream".
	// If pending text exists - flush it as text token
	//
	StateInline.prototype.push = function (token) {
	  if (this.pending) {
	    this.pushPending();
	  }
	
	  this.tokens.push(token);
	  this.pendingLevel = this.level;
	};
	
	// Store value to cache.
	// !!! Implementation has parser-specific optimizations
	// !!! keys MUST be integer, >= 0; values MUST be integer, > 0
	//
	StateInline.prototype.cacheSet = function (key, val) {
	  for (var i = this.cache.length; i <= key; i++) {
	    this.cache.push(0);
	  }
	
	  this.cache[key] = val;
	};
	
	// Get cache value
	//
	StateInline.prototype.cacheGet = function (key) {
	  return key < this.cache.length ? this.cache[key] : 0;
	};
	
	module.exports = StateInline;


/***/ }),
/* 240 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Parse link labels
	 *
	 * This function assumes that first character (`[`) already matches;
	 * returns the end of the label.
	 *
	 * @param  {Object} state
	 * @param  {Number} start
	 * @api private
	 */
	
	module.exports = function parseLinkLabel(state, start) {
	  var level, found, marker,
	      labelEnd = -1,
	      max = state.posMax,
	      oldPos = state.pos,
	      oldFlag = state.isInLabel;
	
	  if (state.isInLabel) { return -1; }
	
	  if (state.labelUnmatchedScopes) {
	    state.labelUnmatchedScopes--;
	    return -1;
	  }
	
	  state.pos = start + 1;
	  state.isInLabel = true;
	  level = 1;
	
	  while (state.pos < max) {
	    marker = state.src.charCodeAt(state.pos);
	    if (marker === 0x5B /* [ */) {
	      level++;
	    } else if (marker === 0x5D /* ] */) {
	      level--;
	      if (level === 0) {
	        found = true;
	        break;
	      }
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (found) {
	    labelEnd = state.pos;
	    state.labelUnmatchedScopes = 0;
	  } else {
	    state.labelUnmatchedScopes = level - 1;
	  }
	
	  // restore old state
	  state.pos = oldPos;
	  state.isInLabel = oldFlag;
	
	  return labelEnd;
	};


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	
	var StateInline          = __webpack_require__(239);
	var parseLinkLabel       = __webpack_require__(240);
	var parseLinkDestination = __webpack_require__(242);
	var parseLinkTitle       = __webpack_require__(244);
	var normalizeReference   = __webpack_require__(245);
	
	
	function parseReference(str, parser, options, env) {
	  var state, labelEnd, pos, max, code, start, href, title, label;
	
	  if (str.charCodeAt(0) !== 0x5B/* [ */) { return -1; }
	
	  if (str.indexOf(']:') === -1) { return -1; }
	
	  state = new StateInline(str, parser, options, env, []);
	  labelEnd = parseLinkLabel(state, 0);
	
	  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }
	
	  max = state.posMax;
	
	  // [label]:   destination   'title'
	  //         ^^^ skip optional whitespace here
	  for (pos = labelEnd + 2; pos < max; pos++) {
	    code = state.src.charCodeAt(pos);
	    if (code !== 0x20 && code !== 0x0A) { break; }
	  }
	
	  // [label]:   destination   'title'
	  //            ^^^^^^^^^^^ parse this
	  if (!parseLinkDestination(state, pos)) { return -1; }
	  href = state.linkContent;
	  pos = state.pos;
	
	  // [label]:   destination   'title'
	  //                       ^^^ skipping those spaces
	  start = pos;
	  for (pos = pos + 1; pos < max; pos++) {
	    code = state.src.charCodeAt(pos);
	    if (code !== 0x20 && code !== 0x0A) { break; }
	  }
	
	  // [label]:   destination   'title'
	  //                          ^^^^^^^ parse this
	  if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
	    title = state.linkContent;
	    pos = state.pos;
	  } else {
	    title = '';
	    pos = start;
	  }
	
	  // ensure that the end of the line is empty
	  while (pos < max && state.src.charCodeAt(pos) === 0x20/* space */) { pos++; }
	  if (pos < max && state.src.charCodeAt(pos) !== 0x0A) { return -1; }
	
	  label = normalizeReference(str.slice(1, labelEnd));
	  if (typeof env.references[label] === 'undefined') {
	    env.references[label] = { title: title, href: href };
	  }
	
	  return pos;
	}
	
	
	module.exports = function references(state) {
	  var tokens = state.tokens, i, l, content, pos;
	
	  state.env.references = state.env.references || {};
	
	  if (state.inlineMode) {
	    return;
	  }
	
	  // Scan definitions in paragraph inlines
	  for (i = 1, l = tokens.length - 1; i < l; i++) {
	    if (tokens[i].type === 'inline' &&
	        tokens[i - 1].type === 'paragraph_open' &&
	        tokens[i + 1].type === 'paragraph_close') {
	
	      content = tokens[i].content;
	      while (content.length) {
	        pos = parseReference(content, state.inline, state.options, state.env);
	        if (pos < 0) { break; }
	        content = content.slice(pos).trim();
	      }
	
	      tokens[i].content = content;
	      if (!content.length) {
	        tokens[i - 1].tight = true;
	        tokens[i + 1].tight = true;
	      }
	    }
	  }
	};


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	
	var normalizeLink = __webpack_require__(243);
	var unescapeMd    = __webpack_require__(231).unescapeMd;
	
	/**
	 * Parse link destination
	 *
	 *   - on success it returns a string and updates state.pos;
	 *   - on failure it returns null
	 *
	 * @param  {Object} state
	 * @param  {Number} pos
	 * @api private
	 */
	
	module.exports = function parseLinkDestination(state, pos) {
	  var code, level, link,
	      start = pos,
	      max = state.posMax;
	
	  if (state.src.charCodeAt(pos) === 0x3C /* < */) {
	    pos++;
	    while (pos < max) {
	      code = state.src.charCodeAt(pos);
	      if (code === 0x0A /* \n */) { return false; }
	      if (code === 0x3E /* > */) {
	        link = normalizeLink(unescapeMd(state.src.slice(start + 1, pos)));
	        if (!state.parser.validateLink(link)) { return false; }
	        state.pos = pos + 1;
	        state.linkContent = link;
	        return true;
	      }
	      if (code === 0x5C /* \ */ && pos + 1 < max) {
	        pos += 2;
	        continue;
	      }
	
	      pos++;
	    }
	
	    // no closing '>'
	    return false;
	  }
	
	  // this should be ... } else { ... branch
	
	  level = 0;
	  while (pos < max) {
	    code = state.src.charCodeAt(pos);
	
	    if (code === 0x20) { break; }
	
	    if (code > 0x08 && code < 0x0e) { break; }
	
	    if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos += 2;
	      continue;
	    }
	
	    if (code === 0x28 /* ( */) {
	      level++;
	      if (level > 1) { break; }
	    }
	
	    if (code === 0x29 /* ) */) {
	      level--;
	      if (level < 0) { break; }
	    }
	
	    pos++;
	  }
	
	  if (start === pos) { return false; }
	
	  link = unescapeMd(state.src.slice(start, pos));
	  if (!state.parser.validateLink(link)) { return false; }
	
	  state.linkContent = link;
	  state.pos = pos;
	  return true;
	};


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var replaceEntities = __webpack_require__(231).replaceEntities;
	
	module.exports = function normalizeLink(url) {
	  var normalized = replaceEntities(url);
	  // We shouldn't care about the result of malformed URIs,
	  // and should not throw an exception.
	  try {
	    normalized = decodeURI(normalized);
	  } catch (err) {}
	  return encodeURI(normalized);
	};


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	
	var unescapeMd = __webpack_require__(231).unescapeMd;
	
	/**
	 * Parse link title
	 *
	 *   - on success it returns a string and updates state.pos;
	 *   - on failure it returns null
	 *
	 * @param  {Object} state
	 * @param  {Number} pos
	 * @api private
	 */
	
	module.exports = function parseLinkTitle(state, pos) {
	  var code,
	      start = pos,
	      max = state.posMax,
	      marker = state.src.charCodeAt(pos);
	
	  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return false; }
	
	  pos++;
	
	  // if opening marker is "(", switch it to closing marker ")"
	  if (marker === 0x28) { marker = 0x29; }
	
	  while (pos < max) {
	    code = state.src.charCodeAt(pos);
	    if (code === marker) {
	      state.pos = pos + 1;
	      state.linkContent = unescapeMd(state.src.slice(start + 1, pos));
	      return true;
	    }
	    if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos += 2;
	      continue;
	    }
	
	    pos++;
	  }
	
	  return false;
	};


/***/ }),
/* 245 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function normalizeReference(str) {
	  // use .toUpperCase() instead of .toLowerCase()
	  // here to avoid a conflict with Object.prototype
	  // members (most notably, `__proto__`)
	  return str.trim().replace(/\s+/g, ' ').toUpperCase();
	};


/***/ }),
/* 246 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function inline(state) {
	  var tokens = state.tokens, tok, i, l;
	
	  // Parse inlines
	  for (i = 0, l = tokens.length; i < l; i++) {
	    tok = tokens[i];
	    if (tok.type === 'inline') {
	      state.inline.parse(tok.content, state.options, state.env, tok.children);
	    }
	  }
	};


/***/ }),
/* 247 */
/***/ (function(module, exports) {

	'use strict';
	
	
	module.exports = function footnote_block(state) {
	  var i, l, j, t, lastParagraph, list, tokens, current, currentLabel,
	      level = 0,
	      insideRef = false,
	      refTokens = {};
	
	  if (!state.env.footnotes) { return; }
	
	  state.tokens = state.tokens.filter(function(tok) {
	    if (tok.type === 'footnote_reference_open') {
	      insideRef = true;
	      current = [];
	      currentLabel = tok.label;
	      return false;
	    }
	    if (tok.type === 'footnote_reference_close') {
	      insideRef = false;
	      // prepend ':' to avoid conflict with Object.prototype members
	      refTokens[':' + currentLabel] = current;
	      return false;
	    }
	    if (insideRef) { current.push(tok); }
	    return !insideRef;
	  });
	
	  if (!state.env.footnotes.list) { return; }
	  list = state.env.footnotes.list;
	
	  state.tokens.push({
	    type: 'footnote_block_open',
	    level: level++
	  });
	  for (i = 0, l = list.length; i < l; i++) {
	    state.tokens.push({
	      type: 'footnote_open',
	      id: i,
	      level: level++
	    });
	
	    if (list[i].tokens) {
	      tokens = [];
	      tokens.push({
	        type: 'paragraph_open',
	        tight: false,
	        level: level++
	      });
	      tokens.push({
	        type: 'inline',
	        content: '',
	        level: level,
	        children: list[i].tokens
	      });
	      tokens.push({
	        type: 'paragraph_close',
	        tight: false,
	        level: --level
	      });
	    } else if (list[i].label) {
	      tokens = refTokens[':' + list[i].label];
	    }
	
	    state.tokens = state.tokens.concat(tokens);
	    if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
	      lastParagraph = state.tokens.pop();
	    } else {
	      lastParagraph = null;
	    }
	
	    t = list[i].count > 0 ? list[i].count : 1;
	    for (j = 0; j < t; j++) {
	      state.tokens.push({
	        type: 'footnote_anchor',
	        id: i,
	        subId: j,
	        level: level
	      });
	    }
	
	    if (lastParagraph) {
	      state.tokens.push(lastParagraph);
	    }
	
	    state.tokens.push({
	      type: 'footnote_close',
	      level: --level
	    });
	  }
	  state.tokens.push({
	    type: 'footnote_block_close',
	    level: --level
	  });
	};


/***/ }),
/* 248 */
/***/ (function(module, exports) {

	// Enclose abbreviations in <abbr> tags
	//
	'use strict';
	
	
	var PUNCT_CHARS = ' \n()[]\'".,!?-';
	
	
	// from Google closure library
	// http://closure-library.googlecode.com/git-history/docs/local_closure_goog_string_string.js.source.html#line1021
	function regEscape(s) {
	  return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
	}
	
	
	module.exports = function abbr2(state) {
	  var i, j, l, tokens, token, text, nodes, pos, level, reg, m, regText,
	      blockTokens = state.tokens;
	
	  if (!state.env.abbreviations) { return; }
	  if (!state.env.abbrRegExp) {
	    regText = '(^|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])'
	            + '(' + Object.keys(state.env.abbreviations).map(function (x) {
	                      return x.substr(1);
	                    }).sort(function (a, b) {
	                      return b.length - a.length;
	                    }).map(regEscape).join('|') + ')'
	            + '($|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])';
	    state.env.abbrRegExp = new RegExp(regText, 'g');
	  }
	  reg = state.env.abbrRegExp;
	
	  for (j = 0, l = blockTokens.length; j < l; j++) {
	    if (blockTokens[j].type !== 'inline') { continue; }
	    tokens = blockTokens[j].children;
	
	    // We scan from the end, to keep position when new tags added.
	    for (i = tokens.length - 1; i >= 0; i--) {
	      token = tokens[i];
	      if (token.type !== 'text') { continue; }
	
	      pos = 0;
	      text = token.content;
	      reg.lastIndex = 0;
	      level = token.level;
	      nodes = [];
	
	      while ((m = reg.exec(text))) {
	        if (reg.lastIndex > pos) {
	          nodes.push({
	            type: 'text',
	            content: text.slice(pos, m.index + m[1].length),
	            level: level
	          });
	        }
	
	        nodes.push({
	          type: 'abbr_open',
	          title: state.env.abbreviations[':' + m[2]],
	          level: level++
	        });
	        nodes.push({
	          type: 'text',
	          content: m[2],
	          level: level
	        });
	        nodes.push({
	          type: 'abbr_close',
	          level: --level
	        });
	        pos = reg.lastIndex - m[3].length;
	      }
	
	      if (!nodes.length) { continue; }
	
	      if (pos < text.length) {
	        nodes.push({
	          type: 'text',
	          content: text.slice(pos),
	          level: level
	        });
	      }
	
	      // replace current node
	      blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
	    }
	  }
	};


/***/ }),
/* 249 */
/***/ (function(module, exports) {

	// Simple typographical replacements
	//
	'use strict';
	
	// TODO:
	// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
	// - miltiplication 2 x 4 -> 2 × 4
	
	var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
	
	var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
	var SCOPED_ABBR = {
	  'c': '©',
	  'r': '®',
	  'p': '§',
	  'tm': '™'
	};
	
	function replaceScopedAbbr(str) {
	  if (str.indexOf('(') < 0) { return str; }
	
	  return str.replace(SCOPED_ABBR_RE, function(match, name) {
	    return SCOPED_ABBR[name.toLowerCase()];
	  });
	}
	
	
	module.exports = function replace(state) {
	  var i, token, text, inlineTokens, blkIdx;
	
	  if (!state.options.typographer) { return; }
	
	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
	
	    if (state.tokens[blkIdx].type !== 'inline') { continue; }
	
	    inlineTokens = state.tokens[blkIdx].children;
	
	    for (i = inlineTokens.length - 1; i >= 0; i--) {
	      token = inlineTokens[i];
	      if (token.type === 'text') {
	        text = token.content;
	
	        text = replaceScopedAbbr(text);
	
	        if (RARE_RE.test(text)) {
	          text = text
	            .replace(/\+-/g, '±')
	            // .., ..., ....... -> …
	            // but ?..... & !..... -> ?.. & !..
	            .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
	            .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
	            // em-dash
	            .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
	            // en-dash
	            .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
	            .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
	        }
	
	        token.content = text;
	      }
	    }
	  }
	};


/***/ }),
/* 250 */
/***/ (function(module, exports) {

	// Convert straight quotation marks to typographic ones
	//
	'use strict';
	
	
	var QUOTE_TEST_RE = /['"]/;
	var QUOTE_RE = /['"]/g;
	var PUNCT_RE = /[-\s()\[\]]/;
	var APOSTROPHE = '’';
	
	// This function returns true if the character at `pos`
	// could be inside a word.
	function isLetter(str, pos) {
	  if (pos < 0 || pos >= str.length) { return false; }
	  return !PUNCT_RE.test(str[pos]);
	}
	
	
	function replaceAt(str, index, ch) {
	  return str.substr(0, index) + ch + str.substr(index + 1);
	}
	
	
	module.exports = function smartquotes(state) {
	  /*eslint max-depth:0*/
	  var i, token, text, t, pos, max, thisLevel, lastSpace, nextSpace, item,
	      canOpen, canClose, j, isSingle, blkIdx, tokens,
	      stack;
	
	  if (!state.options.typographer) { return; }
	
	  stack = [];
	
	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
	
	    if (state.tokens[blkIdx].type !== 'inline') { continue; }
	
	    tokens = state.tokens[blkIdx].children;
	    stack.length = 0;
	
	    for (i = 0; i < tokens.length; i++) {
	      token = tokens[i];
	
	      if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) { continue; }
	
	      thisLevel = tokens[i].level;
	
	      for (j = stack.length - 1; j >= 0; j--) {
	        if (stack[j].level <= thisLevel) { break; }
	      }
	      stack.length = j + 1;
	
	      text = token.content;
	      pos = 0;
	      max = text.length;
	
	      /*eslint no-labels:0,block-scoped-var:0*/
	      OUTER:
	      while (pos < max) {
	        QUOTE_RE.lastIndex = pos;
	        t = QUOTE_RE.exec(text);
	        if (!t) { break; }
	
	        lastSpace = !isLetter(text, t.index - 1);
	        pos = t.index + 1;
	        isSingle = (t[0] === "'");
	        nextSpace = !isLetter(text, pos);
	
	        if (!nextSpace && !lastSpace) {
	          // middle of word
	          if (isSingle) {
	            token.content = replaceAt(token.content, t.index, APOSTROPHE);
	          }
	          continue;
	        }
	
	        canOpen = !nextSpace;
	        canClose = !lastSpace;
	
	        if (canClose) {
	          // this could be a closing quote, rewind the stack to get a match
	          for (j = stack.length - 1; j >= 0; j--) {
	            item = stack[j];
	            if (stack[j].level < thisLevel) { break; }
	            if (item.single === isSingle && stack[j].level === thisLevel) {
	              item = stack[j];
	              if (isSingle) {
	                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]);
	                token.content = replaceAt(token.content, t.index, state.options.quotes[3]);
	              } else {
	                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]);
	                token.content = replaceAt(token.content, t.index, state.options.quotes[1]);
	              }
	              stack.length = j;
	              continue OUTER;
	            }
	          }
	        }
	
	        if (canOpen) {
	          stack.push({
	            token: i,
	            pos: t.index,
	            single: isSingle,
	            level: thisLevel
	          });
	        } else if (canClose && isSingle) {
	          token.content = replaceAt(token.content, t.index, APOSTROPHE);
	        }
	      }
	    }
	  }
	};


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	// Replace link-like texts with link nodes.
	//
	// Currently restricted by `inline.validateLink()` to http/https/ftp
	//
	'use strict';
	
	
	var Autolinker = __webpack_require__(252);
	
	
	var LINK_SCAN_RE = /www|@|\:\/\//;
	
	
	function isLinkOpen(str) {
	  return /^<a[>\s]/i.test(str);
	}
	function isLinkClose(str) {
	  return /^<\/a\s*>/i.test(str);
	}
	
	// Stupid fabric to avoid singletons, for thread safety.
	// Required for engines like Nashorn.
	//
	function createLinkifier() {
	  var links = [];
	  var autolinker = new Autolinker({
	    stripPrefix: false,
	    url: true,
	    email: true,
	    twitter: false,
	    replaceFn: function (linker, match) {
	      // Only collect matched strings but don't change anything.
	      switch (match.getType()) {
	        /*eslint default-case:0*/
	        case 'url':
	          links.push({
	            text: match.matchedText,
	            url: match.getUrl()
	          });
	          break;
	        case 'email':
	          links.push({
	            text: match.matchedText,
	            // normalize email protocol
	            url: 'mailto:' + match.getEmail().replace(/^mailto:/i, '')
	          });
	          break;
	      }
	      return false;
	    }
	  });
	
	  return {
	    links: links,
	    autolinker: autolinker
	  };
	}
	
	
	module.exports = function linkify(state) {
	  var i, j, l, tokens, token, text, nodes, ln, pos, level, htmlLinkLevel,
	      blockTokens = state.tokens,
	      linkifier = null, links, autolinker;
	
	  if (!state.options.linkify) { return; }
	
	  for (j = 0, l = blockTokens.length; j < l; j++) {
	    if (blockTokens[j].type !== 'inline') { continue; }
	    tokens = blockTokens[j].children;
	
	    htmlLinkLevel = 0;
	
	    // We scan from the end, to keep position when new tags added.
	    // Use reversed logic in links start/end match
	    for (i = tokens.length - 1; i >= 0; i--) {
	      token = tokens[i];
	
	      // Skip content of markdown links
	      if (token.type === 'link_close') {
	        i--;
	        while (tokens[i].level !== token.level && tokens[i].type !== 'link_open') {
	          i--;
	        }
	        continue;
	      }
	
	      // Skip content of html tag links
	      if (token.type === 'htmltag') {
	        if (isLinkOpen(token.content) && htmlLinkLevel > 0) {
	          htmlLinkLevel--;
	        }
	        if (isLinkClose(token.content)) {
	          htmlLinkLevel++;
	        }
	      }
	      if (htmlLinkLevel > 0) { continue; }
	
	      if (token.type === 'text' && LINK_SCAN_RE.test(token.content)) {
	
	        // Init linkifier in lazy manner, only if required.
	        if (!linkifier) {
	          linkifier = createLinkifier();
	          links = linkifier.links;
	          autolinker = linkifier.autolinker;
	        }
	
	        text = token.content;
	        links.length = 0;
	        autolinker.link(text);
	
	        if (!links.length) { continue; }
	
	        // Now split string to nodes
	        nodes = [];
	        level = token.level;
	
	        for (ln = 0; ln < links.length; ln++) {
	
	          if (!state.inline.validateLink(links[ln].url)) { continue; }
	
	          pos = text.indexOf(links[ln].text);
	
	          if (pos) {
	            level = level;
	            nodes.push({
	              type: 'text',
	              content: text.slice(0, pos),
	              level: level
	            });
	          }
	          nodes.push({
	            type: 'link_open',
	            href: links[ln].url,
	            title: '',
	            level: level++
	          });
	          nodes.push({
	            type: 'text',
	            content: links[ln].text,
	            level: level
	          });
	          nodes.push({
	            type: 'link_close',
	            level: --level
	          });
	          text = text.slice(pos + links[ln].text.length);
	        }
	        if (text.length) {
	          nodes.push({
	            type: 'text',
	            content: text,
	            level: level
	          });
	        }
	
	        // replace current node
	        blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
	      }
	    }
	  }
	};


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return (root['Autolinker'] = factory());
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    root['Autolinker'] = factory();
	  }
	}(this, function () {
	
	/*!
	 * Autolinker.js
	 * 0.15.3
	 *
	 * Copyright(c) 2015 Gregory Jacobs <greg@greg-jacobs.com>
	 * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
	 *
	 * https://github.com/gregjacobs/Autolinker.js
	 */
	/**
	 * @class Autolinker
	 * @extends Object
	 * 
	 * Utility class used to process a given string of text, and wrap the URLs, email addresses, and Twitter handles in 
	 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
	 * 
	 * Any of the configuration options may be provided in an Object (map) provided to the Autolinker constructor, which
	 * will configure how the {@link #link link()} method will process the links.
	 * 
	 * For example:
	 * 
	 *     var autolinker = new Autolinker( {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     
	 *     var html = autolinker.link( "Joe went to www.yahoo.com" );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * The {@link #static-link static link()} method may also be used to inline options into a single call, which may
	 * be more convenient for one-off uses. For example:
	 * 
	 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * ## Custom Replacements of Links
	 * 
	 * If the configuration options do not provide enough flexibility, a {@link #replaceFn} may be provided to fully customize
	 * the output of Autolinker. This function is called once for each URL/Email/Twitter handle match that is encountered.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
	 *                         var tag = autolinker.getTagBuilder().build( match );  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
	 *                         tag.setAttr( 'rel', 'nofollow' );
	 *                         tag.addClass( 'external-link' );
	 *                         
	 *                         return tag;
	 *                         
	 *                     } else {
	 *                         return true;  // let Autolinker perform its normal anchor tag replacement
	 *                     }
	 *                     
	 *                 case 'email' :
	 *                     var email = match.getEmail();
	 *                     console.log( "email: ", email );
	 *                     
	 *                     if( email === "my@own.address" ) {
	 *                         return false;  // don't auto-link this particular email address; leave as-is
	 *                     } else {
	 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
	 *                     }
	 *                 
	 *                 case 'twitter' :
	 *                     var twitterHandle = match.getTwitterHandle();
	 *                     console.log( twitterHandle );
	 *                     
	 *                     return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
	 *             }
	 *         }
	 *     } );
	 * 
	 * 
	 * The function may return the following values:
	 * 
	 * - `true` (Boolean): Allow Autolinker to replace the match as it normally would.
	 * - `false` (Boolean): Do not replace the current match at all - leave as-is.
	 * - Any String: If a string is returned from the function, the string will be used directly as the replacement HTML for
	 *   the match.
	 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify an HTML tag before writing out its HTML text.
	 * 
	 * @constructor
	 * @param {Object} [config] The configuration options for the Autolinker instance, specified in an Object (map).
	 */
	var Autolinker = function( cfg ) {
		Autolinker.Util.assign( this, cfg );  // assign the properties of `cfg` onto the Autolinker instance. Prototype properties will be used for missing configs.
	};
	
	
	Autolinker.prototype = {
		constructor : Autolinker,  // fix constructor property
		
		/**
		 * @cfg {Boolean} urls
		 * 
		 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
		 */
		urls : true,
		
		/**
		 * @cfg {Boolean} email
		 * 
		 * `true` if email addresses should be automatically linked, `false` if they should not be.
		 */
		email : true,
		
		/**
		 * @cfg {Boolean} twitter
		 * 
		 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
		 */
		twitter : true,
		
		/**
		 * @cfg {Boolean} newWindow
		 * 
		 * `true` if the links should open in a new window, `false` otherwise.
		 */
		newWindow : true,
		
		/**
		 * @cfg {Boolean} stripPrefix
		 * 
		 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text, 
		 * `false` otherwise.
		 */
		stripPrefix : true,
		
		/**
		 * @cfg {Number} truncate
		 * 
		 * A number for how many characters long URLs/emails/twitter handles should be truncated to inside the text of 
		 * a link. If the URL/email/twitter is over this number of characters, it will be truncated to this length by 
		 * adding a two period ellipsis ('..') to the end of the string.
		 * 
		 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file' truncated to 25 characters might look
		 * something like this: 'yahoo.com/some/long/pat..'
		 */
		truncate : undefined,
		
		/**
		 * @cfg {String} className
		 * 
		 * A CSS class name to add to the generated links. This class will be added to all links, as well as this class
		 * plus url/email/twitter suffixes for styling url/email/twitter links differently.
		 * 
		 * For example, if this config is provided as "myLink", then:
		 * 
		 * - URL links will have the CSS classes: "myLink myLink-url"
		 * - Email links will have the CSS classes: "myLink myLink-email", and
		 * - Twitter links will have the CSS classes: "myLink myLink-twitter"
		 */
		className : "",
		
		/**
		 * @cfg {Function} replaceFn
		 * 
		 * A function to individually process each URL/Email/Twitter match found in the input string.
		 * 
		 * See the class's description for usage.
		 * 
		 * This function is called with the following parameters:
		 * 
		 * @cfg {Autolinker} replaceFn.autolinker The Autolinker instance, which may be used to retrieve child objects from (such
		 *   as the instance's {@link #getTagBuilder tag builder}).
		 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which can be used to retrieve information about the
		 *   {@link Autolinker.match.Url URL}/{@link Autolinker.match.Email email}/{@link Autolinker.match.Twitter Twitter}
		 *   match that the `replaceFn` is currently processing.
		 */
		
		
		/**
		 * @private
		 * @property {Autolinker.htmlParser.HtmlParser} htmlParser
		 * 
		 * The HtmlParser instance used to skip over HTML tags, while finding text nodes to process. This is lazily instantiated
		 * in the {@link #getHtmlParser} method.
		 */
		htmlParser : undefined,
		
		/**
		 * @private
		 * @property {Autolinker.matchParser.MatchParser} matchParser
		 * 
		 * The MatchParser instance used to find URL/email/Twitter matches in the text nodes of an input string passed to
		 * {@link #link}. This is lazily instantiated in the {@link #getMatchParser} method.
		 */
		matchParser : undefined,
		
		/**
		 * @private
		 * @property {Autolinker.AnchorTagBuilder} tagBuilder
		 * 
		 * The AnchorTagBuilder instance used to build the URL/email/Twitter replacement anchor tags. This is lazily instantiated
		 * in the {@link #getTagBuilder} method.
		 */
		tagBuilder : undefined,
		
		
		/**
		 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
		 * Does not link URLs found within HTML tags.
		 * 
		 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
		 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
		 * 
		 * This method finds the text around any HTML elements in the input `textOrHtml`, which will be the text that is processed.
		 * Any original HTML elements will be left as-is, as well as the text that is already wrapped in anchor (&lt;a&gt;) tags.
		 * 
		 * @param {String} textOrHtml The HTML or text to link URLs, email addresses, and Twitter handles within (depending on if
		 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
		 * @return {String} The HTML, with URLs/emails/Twitter handles automatically linked.
		 */
		link : function( textOrHtml ) {
			var htmlParser = this.getHtmlParser(),
			    htmlNodes = htmlParser.parse( textOrHtml ),
			    anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have
			    resultHtml = [];
			
			for( var i = 0, len = htmlNodes.length; i < len; i++ ) {
				var node = htmlNodes[ i ],
				    nodeType = node.getType(),
				    nodeText = node.getText();
				
				if( nodeType === 'element' ) {
					// Process HTML nodes in the input `textOrHtml`
					if( node.getTagName() === 'a' ) {
						if( !node.isClosing() ) {  // it's the start <a> tag
							anchorTagStackCount++;
						} else {   // it's the end </a> tag
							anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
						}
					}
					resultHtml.push( nodeText );  // now add the text of the tag itself verbatim
					
				} else if( nodeType === 'entity' ) {
					resultHtml.push( nodeText );  // append HTML entity nodes (such as '&nbsp;') verbatim
					
				} else {
					// Process text nodes in the input `textOrHtml`
					if( anchorTagStackCount === 0 ) {
						// If we're not within an <a> tag, process the text node to linkify
						var linkifiedStr = this.linkifyStr( nodeText );
						resultHtml.push( linkifiedStr );
						
					} else {
						// `text` is within an <a> tag, simply append the text - we do not want to autolink anything 
						// already within an <a>...</a> tag
						resultHtml.push( nodeText );
					}
				}
			}
			
			return resultHtml.join( "" );
		},
		
		
		/**
		 * Process the text that lies in between HTML tags, performing the anchor tag replacements for matched 
		 * URLs/emails/Twitter handles, and returns the string with the replacements made. 
		 * 
		 * This method does the actual wrapping of URLs/emails/Twitter handles with anchor tags.
		 * 
		 * @private
		 * @param {String} str The string of text to auto-link.
		 * @return {String} The text with anchor tags auto-filled.
		 */
		linkifyStr : function( str ) {
			return this.getMatchParser().replace( str, this.createMatchReturnVal, this );
		},
		
		
		/**
		 * Creates the return string value for a given match in the input string, for the {@link #processTextNode} method.
		 * 
		 * This method handles the {@link #replaceFn}, if one was provided.
		 * 
		 * @private
		 * @param {Autolinker.match.Match} match The Match object that represents the match.
		 * @return {String} The string that the `match` should be replaced with. This is usually the anchor tag string, but
		 *   may be the `matchStr` itself if the match is not to be replaced.
		 */
		createMatchReturnVal : function( match ) {
			// Handle a custom `replaceFn` being provided
			var replaceFnResult;
			if( this.replaceFn ) {
				replaceFnResult = this.replaceFn.call( this, this, match );  // Autolinker instance is the context, and the first arg
			}
			
			if( typeof replaceFnResult === 'string' ) {
				return replaceFnResult;  // `replaceFn` returned a string, use that
				
			} else if( replaceFnResult === false ) {
				return match.getMatchedText();  // no replacement for the match
				
			} else if( replaceFnResult instanceof Autolinker.HtmlTag ) {
				return replaceFnResult.toString();
			
			} else {  // replaceFnResult === true, or no/unknown return value from function
				// Perform Autolinker's default anchor tag generation
				var tagBuilder = this.getTagBuilder(),
				    anchorTag = tagBuilder.build( match );  // returns an Autolinker.HtmlTag instance
				
				return anchorTag.toString();
			}
		},
		
		
		/**
		 * Lazily instantiates and returns the {@link #htmlParser} instance for this Autolinker instance.
		 * 
		 * @protected
		 * @return {Autolinker.htmlParser.HtmlParser}
		 */
		getHtmlParser : function() {
			var htmlParser = this.htmlParser;
			
			if( !htmlParser ) {
				htmlParser = this.htmlParser = new Autolinker.htmlParser.HtmlParser();
			}
			
			return htmlParser;
		},
		
		
		/**
		 * Lazily instantiates and returns the {@link #matchParser} instance for this Autolinker instance.
		 * 
		 * @protected
		 * @return {Autolinker.matchParser.MatchParser}
		 */
		getMatchParser : function() {
			var matchParser = this.matchParser;
			
			if( !matchParser ) {
				matchParser = this.matchParser = new Autolinker.matchParser.MatchParser( {
					urls : this.urls,
					email : this.email,
					twitter : this.twitter,
					stripPrefix : this.stripPrefix
				} );
			}
			
			return matchParser;
		},
		
		
		/**
		 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
		 * if it does not yet exist.
		 * 
		 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that 
		 * Autolinker would normally generate, and then allow for modifications before returning it. For example:
		 * 
		 *     var html = Autolinker.link( "Test google.com", {
		 *         replaceFn : function( autolinker, match ) {
		 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
		 *             tag.setAttr( 'rel', 'nofollow' );
		 *             
		 *             return tag;
		 *         }
		 *     } );
		 *     
		 *     // generated html:
		 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
		 * 
		 * @return {Autolinker.AnchorTagBuilder}
		 */
		getTagBuilder : function() {
			var tagBuilder = this.tagBuilder;
			
			if( !tagBuilder ) {
				tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {
					newWindow   : this.newWindow,
					truncate    : this.truncate,
					className   : this.className
				} );
			}
			
			return tagBuilder;
		}
	
	};
	
	
	/**
	 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
	 * Does not link URLs found within HTML tags.
	 * 
	 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
	 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
	 * 
	 * Example:
	 * 
	 *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
	 *     // Produces: "Go to <a href="http://google.com">google.com</a>"
	 * 
	 * @static
	 * @param {String} textOrHtml The HTML or text to find URLs, email addresses, and Twitter handles within (depending on if
	 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
	 * @param {Object} [options] Any of the configuration options for the Autolinker class, specified in an Object (map).
	 *   See the class description for an example call.
	 * @return {String} The HTML text, with URLs automatically linked
	 */
	Autolinker.link = function( textOrHtml, options ) {
		var autolinker = new Autolinker( options );
		return autolinker.link( textOrHtml );
	};
	
	
	// Autolinker Namespaces
	Autolinker.match = {};
	Autolinker.htmlParser = {};
	Autolinker.matchParser = {};
	/*global Autolinker */
	/*jshint eqnull:true, boss:true */
	/**
	 * @class Autolinker.Util
	 * @singleton
	 * 
	 * A few utility methods for Autolinker.
	 */
	Autolinker.Util = {
		
		/**
		 * @property {Function} abstractMethod
		 * 
		 * A function object which represents an abstract method.
		 */
		abstractMethod : function() { throw "abstract"; },
		
		
		/**
		 * Assigns (shallow copies) the properties of `src` onto `dest`.
		 * 
		 * @param {Object} dest The destination object.
		 * @param {Object} src The source object.
		 * @return {Object} The destination object (`dest`)
		 */
		assign : function( dest, src ) {
			for( var prop in src ) {
				if( src.hasOwnProperty( prop ) ) {
					dest[ prop ] = src[ prop ];
				}
			}
			
			return dest;
		},
		
		
		/**
		 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
		 * 
		 * @param {Function} superclass The constructor function for the superclass.
		 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
		 *   special property `constructor`, which will be used as the new subclass's constructor function.
		 * @return {Function} The new subclass function.
		 */
		extend : function( superclass, protoProps ) {
			var superclassProto = superclass.prototype;
			
			var F = function() {};
			F.prototype = superclassProto;
			
			var subclass;
			if( protoProps.hasOwnProperty( 'constructor' ) ) {
				subclass = protoProps.constructor;
			} else {
				subclass = function() { superclassProto.constructor.apply( this, arguments ); };
			}
			
			var subclassProto = subclass.prototype = new F();  // set up prototype chain
			subclassProto.constructor = subclass;  // fix constructor property
			subclassProto.superclass = superclassProto;
			
			delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
			Autolinker.Util.assign( subclassProto, protoProps );
			
			return subclass;
		},
		
		
		/**
		 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
		 * end of the string (by default, two periods: '..'). If the `str` length does not exceed 
		 * `len`, the string will be returned unchanged.
		 * 
		 * @param {String} str The string to truncate and add an ellipsis to.
		 * @param {Number} truncateLen The length to truncate the string at.
		 * @param {String} [ellipsisChars=..] The ellipsis character(s) to add to the end of `str`
		 *   when truncated. Defaults to '..'
		 */
		ellipsis : function( str, truncateLen, ellipsisChars ) {
			if( str.length > truncateLen ) {
				ellipsisChars = ( ellipsisChars == null ) ? '..' : ellipsisChars;
				str = str.substring( 0, truncateLen - ellipsisChars.length ) + ellipsisChars;
			}
			return str;
		},
		
		
		/**
		 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
		 * 
		 * @param {Array} arr The array to find an element of.
		 * @param {*} element The element to find in the array, and return the index of.
		 * @return {Number} The index of the `element`, or -1 if it was not found.
		 */
		indexOf : function( arr, element ) {
			if( Array.prototype.indexOf ) {
				return arr.indexOf( element );
				
			} else {
				for( var i = 0, len = arr.length; i < len; i++ ) {
					if( arr[ i ] === element ) return i;
				}
				return -1;
			}
		},
		
		
		
		/**
		 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
		 * with a regular expression that contains capturing parenthesis.
		 * 
		 * For example:
		 * 
		 *     // Modern browsers: 
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
		 *     
		 *     // Old IE (including IE8):
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
		 *     
		 * This method emulates the functionality of modern browsers for the old IE case.
		 * 
		 * @param {String} str The string to split.
		 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
		 *   character(s) will be spliced into the array, as in the "modern browsers" example in the 
		 *   description of this method. 
		 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
		 *   Note #2: for simplicity's sake, the regular expression does not need 
		 *   to contain capturing parenthesis - it will be assumed that any match has them.
		 * @return {String[]} The split array of strings, with the splitting character(s) included.
		 */
		splitAndCapture : function( str, splitRegex ) {
			if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );
			
			var result = [],
			    lastIdx = 0,
			    match;
			
			while( match = splitRegex.exec( str ) ) {
				result.push( str.substring( lastIdx, match.index ) );
				result.push( match[ 0 ] );  // push the splitting char(s)
				
				lastIdx = match.index + match[ 0 ].length;
			}
			result.push( str.substring( lastIdx ) );
			
			return result;
		}
		
	};
	/*global Autolinker */
	/*jshint boss:true */
	/**
	 * @class Autolinker.HtmlTag
	 * @extends Object
	 * 
	 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
	 * 
	 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
	 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
	 * 
	 * ## Examples
	 * 
	 * Example instantiation:
	 * 
	 *     var tag = new Autolinker.HtmlTag( {
	 *         tagName : 'a',
	 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
	 *         innerHtml : 'Google'
	 *     } );
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 *     // Individual accessor methods
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 * 
	 * 
	 * Using mutator methods (which may be used in combination with instantiation config properties):
	 * 
	 *     var tag = new Autolinker.HtmlTag();
	 *     tag.setTagName( 'a' );
	 *     tag.setAttr( 'href', 'http://google.com' );
	 *     tag.addClass( 'external-link' );
	 *     tag.setInnerHtml( 'Google' );
	 *     
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 * 
	 * ## Example use within a {@link Autolinker#replaceFn replaceFn}
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 *     
	 *     
	 * ## Example use with a new tag for the replacement
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = new Autolinker.HtmlTag( {
	 *                 tagName : 'button',
	 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
	 *                 innerHtml : 'Load URL: ' + match.getAnchorText()
	 *             } );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
	 */
	Autolinker.HtmlTag = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} tagName
		 * 
		 * The tag name. Ex: 'a', 'button', etc.
		 * 
		 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toString}
		 * is executed.
		 */
		
		/**
		 * @cfg {Object.<String, String>} attrs
		 * 
		 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
		 * values are the attribute values.
		 */
		
		/**
		 * @cfg {String} innerHtml
		 * 
		 * The inner HTML for the tag. 
		 * 
		 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym 
		 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
		 * if you prefer, but this one is recommended.
		 */
		
		/**
		 * @cfg {String} innerHTML
		 * 
		 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
		 * for acronym names.
		 */
		
		
		/**
		 * @protected
		 * @property {RegExp} whitespaceRegex
		 * 
		 * Regular expression used to match whitespace in a string of CSS classes.
		 */
		whitespaceRegex : /\s+/,
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
			
			this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
		},
		
		
		/**
		 * Sets the tag name that will be used to generate the tag with.
		 * 
		 * @param {String} tagName
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setTagName : function( tagName ) {
			this.tagName = tagName;
			return this;
		},
		
		
		/**
		 * Retrieves the tag name.
		 * 
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName || "";
		},
		
		
		/**
		 * Sets an attribute on the HtmlTag.
		 * 
		 * @param {String} attrName The attribute name to set.
		 * @param {String} attrValue The attribute value to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttr : function( attrName, attrValue ) {
			var tagAttrs = this.getAttrs();
			tagAttrs[ attrName ] = attrValue;
			
			return this;
		},
		
		
		/**
		 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
		 * 
		 * @param {String} name The attribute name to retrieve.
		 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
		 */
		getAttr : function( attrName ) {
			return this.getAttrs()[ attrName ];
		},
		
		
		/**
		 * Sets one or more attributes on the HtmlTag.
		 * 
		 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttrs : function( attrs ) {
			var tagAttrs = this.getAttrs();
			Autolinker.Util.assign( tagAttrs, attrs );
			
			return this;
		},
		
		
		/**
		 * Retrieves the attributes Object (map) for the HtmlTag.
		 * 
		 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
		 */
		getAttrs : function() {
			return this.attrs || ( this.attrs = {} );
		},
		
		
		/**
		 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setClass : function( cssClass ) {
			return this.setAttr( 'class', cssClass );
		},
		
		
		/**
		 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to add.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		addClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    newClasses = cssClass.split( whitespaceRegex ),
			    newClass;
			
			while( newClass = newClasses.shift() ) {
				if( indexOf( classes, newClass ) === -1 ) {
					classes.push( newClass );
				}
			}
			
			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},
		
		
		/**
		 * Convenience method to remove one or more CSS classes from the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to remove.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		removeClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    removeClasses = cssClass.split( whitespaceRegex ),
			    removeClass;
			
			while( classes.length && ( removeClass = removeClasses.shift() ) ) {
				var idx = indexOf( classes, removeClass );
				if( idx !== -1 ) {
					classes.splice( idx, 1 );
				}
			}
			
			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},
		
		
		/**
		 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
		 * there are multiple.
		 * 
		 * @return {String}
		 */
		getClass : function() {
			return this.getAttrs()[ 'class' ] || "";
		},
		
		
		/**
		 * Convenience method to check if the tag has a CSS class or not.
		 * 
		 * @param {String} cssClass The CSS class to check for.
		 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
		 */
		hasClass : function( cssClass ) {
			return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;
		},
		
		
		/**
		 * Sets the inner HTML for the tag.
		 * 
		 * @param {String} html The inner HTML to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setInnerHtml : function( html ) {
			this.innerHtml = html;
			
			return this;
		},
		
		
		/**
		 * Retrieves the inner HTML for the tag.
		 * 
		 * @return {String}
		 */
		getInnerHtml : function() {
			return this.innerHtml || "";
		},
		
		
		/**
		 * Override of superclass method used to generate the HTML string for the tag.
		 * 
		 * @return {String}
		 */
		toString : function() {
			var tagName = this.getTagName(),
			    attrsStr = this.buildAttrsStr();
			
			attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes
			
			return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );
		},
		
		
		/**
		 * Support method for {@link #toString}, returns the string space-separated key="value" pairs, used to populate 
		 * the stringified HtmlTag.
		 * 
		 * @protected
		 * @return {String} Example return: `attr1="value1" attr2="value2"`
		 */
		buildAttrsStr : function() {
			if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string
			
			var attrs = this.getAttrs(),
			    attrsArr = [];
			
			for( var prop in attrs ) {
				if( attrs.hasOwnProperty( prop ) ) {
					attrsArr.push( prop + '="' + attrs[ prop ] + '"' );
				}
			}
			return attrsArr.join( " " );
		}
		
	} );
	/*global Autolinker */
	/*jshint sub:true */
	/**
	 * @protected
	 * @class Autolinker.AnchorTagBuilder
	 * @extends Object
	 * 
	 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found.
	 * 
	 * Normally this class is instantiated, configured, and used internally by an {@link Autolinker} instance, but may 
	 * actually be retrieved in a {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag} instances
	 * which may be modified before returning from the {@link Autolinker#replaceFn replaceFn}. For example:
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 */
	Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {Boolean} newWindow
		 * @inheritdoc Autolinker#newWindow
		 */
		
		/**
		 * @cfg {Number} truncate
		 * @inheritdoc Autolinker#truncate
		 */
		
		/**
		 * @cfg {String} className
		 * @inheritdoc Autolinker#className
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},
		
		
		/**
		 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the matched URL/email/Twitter text,
		 * via its `match` object.
		 * 
		 * @param {Autolinker.match.Match} match The Match instance to generate an anchor tag from.
		 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
		 */
		build : function( match ) {
			var tag = new Autolinker.HtmlTag( {
				tagName   : 'a',
				attrs     : this.createAttrs( match.getType(), match.getAnchorHref() ),
				innerHtml : this.processAnchorText( match.getAnchorText() )
			} );
			
			return tag;
		},
		
		
		/**
		 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;) tag being generated.
		 * 
		 * @protected
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @param {String} href The href for the anchor tag.
		 * @return {Object} A key/value Object (map) of the anchor tag's attributes. 
		 */
		createAttrs : function( matchType, anchorHref ) {
			var attrs = {
				'href' : anchorHref  // we'll always have the `href` attribute
			};
			
			var cssClass = this.createCssClass( matchType );
			if( cssClass ) {
				attrs[ 'class' ] = cssClass;
			}
			if( this.newWindow ) {
				attrs[ 'target' ] = "_blank";
			}
			
			return attrs;
		},
		
		
		/**
		 * Creates the CSS class that will be used for a given anchor tag, based on the `matchType` and the {@link #className}
		 * config.
		 * 
		 * @private
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @return {String} The CSS class string for the link. Example return: "myLink myLink-url". If no {@link #className}
		 *   was configured, returns an empty string.
		 */
		createCssClass : function( matchType ) {
			var className = this.className;
			
			if( !className ) 
				return "";
			else
				return className + " " + className + "-" + matchType;  // ex: "myLink myLink-url", "myLink myLink-email", or "myLink myLink-twitter"
		},
		
		
		/**
		 * Processes the `anchorText` by truncating the text according to the {@link #truncate} config.
		 * 
		 * @private
		 * @param {String} anchorText The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The processed `anchorText`.
		 */
		processAnchorText : function( anchorText ) {
			anchorText = this.doTruncate( anchorText );
			
			return anchorText;
		},
		
		
		/**
		 * Performs the truncation of the `anchorText`, if the `anchorText` is longer than the {@link #truncate} option.
		 * Truncates the text to 2 characters fewer than the {@link #truncate} option, and adds ".." to the end.
		 * 
		 * @private
		 * @param {String} text The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The truncated anchor text.
		 */
		doTruncate : function( anchorText ) {
			return Autolinker.Util.ellipsis( anchorText, this.truncate || Number.POSITIVE_INFINITY );
		}
		
	} );
	/*global Autolinker */
	/**
	 * @private
	 * @class Autolinker.htmlParser.HtmlParser
	 * @extends Object
	 * 
	 * An HTML parser implementation which simply walks an HTML string and returns an array of 
	 * {@link Autolinker.htmlParser.HtmlNode HtmlNodes} that represent the basic HTML structure of the input string.
	 * 
	 * Autolinker uses this to only link URLs/emails/Twitter handles within text nodes, effectively ignoring / "walking
	 * around" HTML tags.
	 */
	Autolinker.htmlParser.HtmlParser = Autolinker.Util.extend( Object, {
		
		/**
		 * @private
		 * @property {RegExp} htmlRegex
		 * 
		 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
		 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
		 * 
		 * Capturing groups:
		 * 
		 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
		 * 2. If it is an end tag, this group will have the '/'.
		 * 3. The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)
		 */
		htmlRegex : (function() {
			var tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
			    attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
			    attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
			    nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'
			
			return new RegExp( [
				// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
				'(?:',
					'<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag
						
						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',  // one or more whitespace chars before an attribute
							
							// Either:
							// A. attr="value", or 
							// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
							'(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',
						')*',
					'>',
				')',
				
				'|',
				
				// All other HTML tags (i.e. tags that are not <!DOCTYPE>)
				'(?:',
					'<(/)?',  // Beginning of a tag. Either '<' for a start tag, or '</' for an end tag. 
					          // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.
				
						// *** Capturing Group 3 - The tag name
						'(' + tagNameRegex.source + ')',
						
						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',                // one or more whitespace chars before an attribute
							nameEqualsValueRegex,  // attr="value" (with optional ="value" part)
						')*',
						
						'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'
					'>',
				')'
			].join( "" ), 'gi' );
		} )(),
		
		/**
		 * @private
		 * @property {RegExp} htmlCharacterEntitiesRegex
		 *
		 * The regular expression that matches common HTML character entities.
		 * 
		 * Ignoring &amp; as it could be part of a query string -- handling it separately.
		 */
		htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
		
		
		/**
		 * Parses an HTML string and returns a simple array of {@link Autolinker.htmlParser.HtmlNode HtmlNodes} to represent
		 * the HTML structure of the input string. 
		 * 
		 * @param {String} html The HTML to parse.
		 * @return {Autolinker.htmlParser.HtmlNode[]}
		 */
		parse : function( html ) {
			var htmlRegex = this.htmlRegex,
			    currentResult,
			    lastIndex = 0,
			    textAndEntityNodes,
			    nodes = [];  // will be the result of the method
			
			while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {
				var tagText = currentResult[ 0 ],
				    tagName = currentResult[ 1 ] || currentResult[ 3 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a" or "img") 
				    isClosingTag = !!currentResult[ 2 ],
				    inBetweenTagsText = html.substring( lastIndex, currentResult.index );
				
				// Push TextNodes and EntityNodes for any text found between tags
				if( inBetweenTagsText ) {
					textAndEntityNodes = this.parseTextAndEntityNodes( inBetweenTagsText );
					nodes.push.apply( nodes, textAndEntityNodes );
				}
				
				// Push the ElementNode
				nodes.push( this.createElementNode( tagText, tagName, isClosingTag ) );
				
				lastIndex = currentResult.index + tagText.length;
			}
			
			// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
			if( lastIndex < html.length ) {
				var text = html.substring( lastIndex );
				
				// Push TextNodes and EntityNodes for any text found between tags
				if( text ) {
					textAndEntityNodes = this.parseTextAndEntityNodes( text );
					nodes.push.apply( nodes, textAndEntityNodes );
				}
			}
			
			return nodes;
		},
		
		
		/**
		 * Parses text and HTML entity nodes from a given string. The input string should not have any HTML tags (elements)
		 * within it.
		 * 
		 * @private
		 * @param {String} text The text to parse.
		 * @return {Autolinker.htmlParser.HtmlNode[]} An array of HtmlNodes to represent the 
		 *   {@link Autolinker.htmlParser.TextNode TextNodes} and {@link Autolinker.htmlParser.EntityNode EntityNodes} found.
		 */
		parseTextAndEntityNodes : function( text ) {
			var nodes = [],
			    textAndEntityTokens = Autolinker.Util.splitAndCapture( text, this.htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array
			
			// Every even numbered token is a TextNode, and every odd numbered token is an EntityNode
			// For example: an input `text` of "Test &quot;this&quot; today" would turn into the 
			//   `textAndEntityTokens`: [ 'Test ', '&quot;', 'this', '&quot;', ' today' ]
			for( var i = 0, len = textAndEntityTokens.length; i < len; i += 2 ) {
				var textToken = textAndEntityTokens[ i ],
				    entityToken = textAndEntityTokens[ i + 1 ];
				
				if( textToken ) nodes.push( this.createTextNode( textToken ) );
				if( entityToken ) nodes.push( this.createEntityNode( entityToken ) );
			}
			return nodes;
		},
		
		
		/**
		 * Factory method to create an {@link Autolinker.htmlParser.ElementNode ElementNode}.
		 * 
		 * @private
		 * @param {String} tagText The full text of the tag (element) that was matched, including its attributes.
		 * @param {String} tagName The name of the tag. Ex: An &lt;img&gt; tag would be passed to this method as "img".
		 * @param {Boolean} isClosingTag `true` if it's a closing tag, false otherwise.
		 * @return {Autolinker.htmlParser.ElementNode}
		 */
		createElementNode : function( tagText, tagName, isClosingTag ) {
			return new Autolinker.htmlParser.ElementNode( {
				text    : tagText,
				tagName : tagName.toLowerCase(),
				closing : isClosingTag
			} );
		},
		
		
		/**
		 * Factory method to create a {@link Autolinker.htmlParser.EntityNode EntityNode}.
		 * 
		 * @private
		 * @param {String} text The text that was matched for the HTML entity (such as '&amp;nbsp;').
		 * @return {Autolinker.htmlParser.EntityNode}
		 */
		createEntityNode : function( text ) {
			return new Autolinker.htmlParser.EntityNode( { text: text } );
		},
		
		
		/**
		 * Factory method to create a {@link Autolinker.htmlParser.TextNode TextNode}.
		 * 
		 * @private
		 * @param {String} text The text that was matched.
		 * @return {Autolinker.htmlParser.TextNode}
		 */
		createTextNode : function( text ) {
			return new Autolinker.htmlParser.TextNode( { text: text } );
		}
		
	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents an HTML node found in an input string. An HTML node is one of the following:
	 * 
	 * 1. An {@link Autolinker.htmlParser.ElementNode ElementNode}, which represents HTML tags.
	 * 2. A {@link Autolinker.htmlParser.TextNode TextNode}, which represents text outside or within HTML tags.
	 * 3. A {@link Autolinker.htmlParser.EntityNode EntityNode}, which represents one of the known HTML
	 *    entities that Autolinker looks for. This includes common ones such as &amp;quot; and &amp;nbsp;
	 */
	Autolinker.htmlParser.HtmlNode = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} text (required)
		 * 
		 * The original text that was matched for the HtmlNode. 
		 * 
		 * - In the case of an {@link Autolinker.htmlParser.ElementNode ElementNode}, this will be the tag's
		 *   text.
		 * - In the case of a {@link Autolinker.htmlParser.TextNode TextNode}, this will be the text itself.
		 * - In the case of a {@link Autolinker.htmlParser.EntityNode EntityNode}, this will be the text of
		 *   the HTML entity.
		 */
		text : "",
		
		
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},
	
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Retrieves the {@link #text} for the HtmlNode.
		 * 
		 * @return {String}
		 */
		getText : function() {
			return this.text;
		}
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.ElementNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents an HTML element node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.ElementNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * @cfg {String} tagName (required)
		 * 
		 * The name of the tag that was matched.
		 */
		tagName : '',
		
		/**
		 * @cfg {Boolean} closing (required)
		 * 
		 * `true` if the element (tag) is a closing tag, `false` if its an opening tag.
		 */
		closing : false,
	
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'element';
		},
		
	
		/**
		 * Returns the HTML element's (tag's) name. Ex: for an &lt;img&gt; tag, returns "img".
		 * 
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName;
		},
		
		
		/**
		 * Determines if the HTML element (tag) is a closing tag. Ex: &lt;div&gt; returns
		 * `false`, while &lt;/div&gt; returns `true`.
		 * 
		 * @return {Boolean}
		 */
		isClosing : function() {
			return this.closing;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.EntityNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents a known HTML entity node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * Ex: '&amp;nbsp;', or '&amp#160;' (which will be retrievable from the {@link #getText} method.
	 * 
	 * Note that this class will only be returned from the HtmlParser for the set of checked HTML entity nodes 
	 * defined by the {@link Autolinker.htmlParser.HtmlParser#htmlCharacterEntitiesRegex}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.EntityNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'entity';
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.TextNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents a text node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.TextNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'text';
		}
		
	} );
	/*global Autolinker */
	/**
	 * @private
	 * @class Autolinker.matchParser.MatchParser
	 * @extends Object
	 * 
	 * Used by Autolinker to parse {@link #urls URLs}, {@link #emails email addresses}, and {@link #twitter Twitter handles}, 
	 * given an input string of text.
	 * 
	 * The MatchParser is fed a non-HTML string in order to search out URLs, email addresses and Twitter handles. Autolinker
	 * first uses the {@link HtmlParser} to "walk around" HTML tags, and then the text around the HTML tags is passed into
	 * the MatchParser in order to find the actual matches.
	 */
	Autolinker.matchParser.MatchParser = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {Boolean} urls
		 * 
		 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
		 */
		urls : true,
		
		/**
		 * @cfg {Boolean} email
		 * 
		 * `true` if email addresses should be automatically linked, `false` if they should not be.
		 */
		email : true,
		
		/**
		 * @cfg {Boolean} twitter
		 * 
		 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
		 */
		twitter : true,
		
		/**
		 * @cfg {Boolean} stripPrefix
		 * 
		 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text
		 * in {@link Autolinker.match.Url URL matches}, `false` otherwise.
		 * 
		 * TODO: Handle this before a URL Match object is instantiated.
		 */
		stripPrefix : true,
		
		
		/**
		 * @private
		 * @property {RegExp} matcherRegex
		 * 
		 * The regular expression that matches URLs, email addresses, and Twitter handles.
		 * 
		 * This regular expression has the following capturing groups:
		 * 
		 * 1. Group that is used to determine if there is a Twitter handle match (i.e. \@someTwitterUser). Simply check for its 
		 *    existence to determine if there is a Twitter handle match. The next couple of capturing groups give information 
		 *    about the Twitter handle match.
		 * 2. The whitespace character before the \@sign in a Twitter handle. This is needed because there are no lookbehinds in
		 *    JS regular expressions, and can be used to reconstruct the original string in a replace().
		 * 3. The Twitter handle itself in a Twitter match. If the match is '@someTwitterUser', the handle is 'someTwitterUser'.
		 * 4. Group that matches an email address. Used to determine if the match is an email address, as well as holding the full 
		 *    address. Ex: 'me@my.com'
		 * 5. Group that matches a URL in the input text. Ex: 'http://google.com', 'www.google.com', or just 'google.com'.
		 *    This also includes a path, url parameters, or hash anchors. Ex: google.com/path/to/file?q1=1&q2=2#myAnchor
		 * 6. Group that matches a protocol URL (i.e. 'http://google.com'). This is used to match protocol URLs with just a single
		 *    word, like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * 7. A protocol-relative ('//') match for the case of a 'www.' prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. We need to know the character before the '//' in order to determine if it is a valid match
		 *    or the // was in a string we don't want to auto-link.
		 * 8. A protocol-relative ('//') match for the case of a known TLD prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. See #6 for more info. 
		 */
		matcherRegex : (function() {
			var twitterRegex = /(^|[^\w])@(\w{1,15})/,              // For matching a twitter handle. Ex: @gregory_jacobs
			    
			    emailRegex = /(?:[\-;:&=\+\$,\w\.]+@)/,             // something@ for email addresses (a.k.a. local-part)
			    
			    protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
			    wwwRegex = /(?:www\.)/,                             // starting with 'www.'
			    domainNameRegex = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,  // anything looking at all like a domain, non-unicode domains, not ending in a period
			    tldRegex = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,   // match our known top level domains (TLDs)
			    
			    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
			    // http://blog.codinghorror.com/the-problem-with-urls/
			    urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
			
			return new RegExp( [
				'(',  // *** Capturing group $1, which can be used to check for a twitter handle match. Use group $3 for the actual twitter handle though. $2 may be used to reconstruct the original string in a replace() 
					// *** Capturing group $2, which matches the whitespace character before the '@' sign (needed because of no lookbehinds), and 
					// *** Capturing group $3, which matches the actual twitter handle
					twitterRegex.source,
				')',
				
				'|',
				
				'(',  // *** Capturing group $4, which is used to determine an email match
					emailRegex.source,
					domainNameRegex.source,
					tldRegex.source,
				')',
				
				'|',
				
				'(',  // *** Capturing group $5, which is used to match a URL
					'(?:', // parens to cover match for protocol (optional), and domain
						'(',  // *** Capturing group $6, for a protocol-prefixed url (ex: http://google.com)
							protocolRegex.source,
							domainNameRegex.source,
						')',
						
						'|',
						
						'(?:',  // non-capturing paren for a 'www.' prefixed url (ex: www.google.com)
							'(.?//)?',  // *** Capturing group $7 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							wwwRegex.source,
							domainNameRegex.source,
						')',
						
						'|',
						
						'(?:',  // non-capturing paren for known a TLD url (ex: google.com)
							'(.?//)?',  // *** Capturing group $8 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							domainNameRegex.source,
							tldRegex.source,
						')',
					')',
					
					'(?:' + urlSuffixRegex.source + ')?',  // match for path, query string, and/or hash anchor - optional
				')'
			].join( "" ), 'gi' );
		} )(),
		
		/**
		 * @private
		 * @property {RegExp} charBeforeProtocolRelMatchRegex
		 * 
		 * The regular expression used to retrieve the character before a protocol-relative URL match.
		 * 
		 * This is used in conjunction with the {@link #matcherRegex}, which needs to grab the character before a protocol-relative
		 * '//' due to the lack of a negative look-behind in JavaScript regular expressions. The character before the match is stripped
		 * from the URL.
		 */
		charBeforeProtocolRelMatchRegex : /^(.)?\/\//,
		
		/**
		 * @private
		 * @property {Autolinker.MatchValidator} matchValidator
		 * 
		 * The MatchValidator object, used to filter out any false positives from the {@link #matcherRegex}. See
		 * {@link Autolinker.MatchValidator} for details.
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		
			this.matchValidator = new Autolinker.MatchValidator();
		},
		
		
		/**
		 * Parses the input `text` to search for URLs/emails/Twitter handles, and calls the `replaceFn`
		 * to allow replacements of the matches. Returns the `text` with matches replaced.
		 * 
		 * @param {String} text The text to search and repace matches in.
		 * @param {Function} replaceFn The iterator function to handle the replacements. The function takes a
		 *   single argument, a {@link Autolinker.match.Match} object, and should return the text that should
		 *   make the replacement.
		 * @param {Object} [contextObj=window] The context object ("scope") to run the `replaceFn` in.
		 * @return {String}
		 */
		replace : function( text, replaceFn, contextObj ) {
			var me = this;  // for closure
			
			return text.replace( this.matcherRegex, function( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 ) {
				var matchDescObj = me.processCandidateMatch( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 );  // "match description" object
				
				// Return out with no changes for match types that are disabled (url, email, twitter), or for matches that are 
				// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
				if( !matchDescObj ) {
					return matchStr;
					
				} else {
					// Generate replacement text for the match from the `replaceFn`
					var replaceStr = replaceFn.call( contextObj, matchDescObj.match );
					return matchDescObj.prefixStr + replaceStr + matchDescObj.suffixStr;
				}
			} );
		},
		
		
		/**
		 * Processes a candidate match from the {@link #matcherRegex}. 
		 * 
		 * Not all matches found by the regex are actual URL/email/Twitter matches, as determined by the {@link #matchValidator}. In
		 * this case, the method returns `null`. Otherwise, a valid Object with `prefixStr`, `match`, and `suffixStr` is returned.
		 * 
		 * @private
		 * @param {String} matchStr The full match that was found by the {@link #matcherRegex}.
		 * @param {String} twitterMatch The matched text of a Twitter handle, if the match is a Twitter match.
		 * @param {String} twitterHandlePrefixWhitespaceChar The whitespace char before the @ sign in a Twitter handle match. This 
		 *   is needed because of no lookbehinds in JS regexes, and is need to re-include the character for the anchor tag replacement.
		 * @param {String} twitterHandle The actual Twitter user (i.e the word after the @ sign in a Twitter match).
		 * @param {String} emailAddressMatch The matched email address for an email address match.
		 * @param {String} urlMatch The matched URL string for a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} wwwProtocolRelativeMatch The '//' for a protocol-relative match from a 'www' url, with the character that 
		 *   comes before the '//'.
		 * @param {String} tldProtocolRelativeMatch The '//' for a protocol-relative match from a TLD (top level domain) match, with 
		 *   the character that comes before the '//'.
		 *   
		 * @return {Object} A "match description object". This will be `null` if the match was invalid, or if a match type is disabled.
		 *   Otherwise, this will be an Object (map) with the following properties:
		 * @return {String} return.prefixStr The char(s) that should be prepended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {String} return.suffixStr The char(s) that should be appended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {Autolinker.match.Match} return.match The Match object that represents the match that was found.
		 */
		processCandidateMatch : function( 
			matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle, 
			emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch, tldProtocolRelativeMatch
		) {
			// Note: The `matchStr` variable wil be fixed up to remove characters that are no longer needed (which will 
			// be added to `prefixStr` and `suffixStr`).
			
			var protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
			    match,  // Will be an Autolinker.match.Match object
			    
			    prefixStr = "",       // A string to use to prefix the anchor tag that is created. This is needed for the Twitter handle match
			    suffixStr = "";       // A string to suffix the anchor tag that is created. This is used if there is a trailing parenthesis that should not be auto-linked.
			    
			
			// Return out with `null` for match types that are disabled (url, email, twitter), or for matches that are 
			// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
			if(
				( twitterMatch && !this.twitter ) || ( emailAddressMatch && !this.email ) || ( urlMatch && !this.urls ) ||
				!this.matchValidator.isValidMatch( urlMatch, protocolUrlMatch, protocolRelativeMatch ) 
			) {
				return null;
			}
			
			// Handle a closing parenthesis at the end of the match, and exclude it if there is not a matching open parenthesis
			// in the match itself. 
			if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
				matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
				suffixStr = ")";  // this will be added after the generated <a> tag
			}
			
			
			if( emailAddressMatch ) {
				match = new Autolinker.match.Email( { matchedText: matchStr, email: emailAddressMatch } );
				
			} else if( twitterMatch ) {
				// fix up the `matchStr` if there was a preceding whitespace char, which was needed to determine the match 
				// itself (since there are no look-behinds in JS regexes)
				if( twitterHandlePrefixWhitespaceChar ) {
					prefixStr = twitterHandlePrefixWhitespaceChar;
					matchStr = matchStr.slice( 1 );  // remove the prefixed whitespace char from the match
				}
				match = new Autolinker.match.Twitter( { matchedText: matchStr, twitterHandle: twitterHandle } );
				
			} else {  // url match
				// If it's a protocol-relative '//' match, remove the character before the '//' (which the matcherRegex needed
				// to match due to the lack of a negative look-behind in JavaScript regular expressions)
				if( protocolRelativeMatch ) {
					var charBeforeMatch = protocolRelativeMatch.match( this.charBeforeProtocolRelMatchRegex )[ 1 ] || "";
					
					if( charBeforeMatch ) {  // fix up the `matchStr` if there was a preceding char before a protocol-relative match, which was needed to determine the match itself (since there are no look-behinds in JS regexes)
						prefixStr = charBeforeMatch;
						matchStr = matchStr.slice( 1 );  // remove the prefixed char from the match
					}
				}
				
				match = new Autolinker.match.Url( {
					matchedText : matchStr,
					url : matchStr,
					protocolUrlMatch : !!protocolUrlMatch,
					protocolRelativeMatch : !!protocolRelativeMatch,
					stripPrefix : this.stripPrefix
				} );
			}
			
			return {
				prefixStr : prefixStr,
				suffixStr : suffixStr,
				match     : match
			};
		},
		
		
		/**
		 * Determines if a match found has an unmatched closing parenthesis. If so, this parenthesis will be removed
		 * from the match itself, and appended after the generated anchor tag in {@link #processTextNode}.
		 * 
		 * A match may have an extra closing parenthesis at the end of the match because the regular expression must include parenthesis
		 * for URLs such as "wikipedia.com/something_(disambiguation)", which should be auto-linked. 
		 * 
		 * However, an extra parenthesis *will* be included when the URL itself is wrapped in parenthesis, such as in the case of
		 * "(wikipedia.com/something_(disambiguation))". In this case, the last closing parenthesis should *not* be part of the URL 
		 * itself, and this method will return `true`.
		 * 
		 * @private
		 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
		 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at the end of the `matchStr`, `false` otherwise.
		 */
		matchHasUnbalancedClosingParen : function( matchStr ) {
			var lastChar = matchStr.charAt( matchStr.length - 1 );
			
			if( lastChar === ')' ) {
				var openParensMatch = matchStr.match( /\(/g ),
				    closeParensMatch = matchStr.match( /\)/g ),
				    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
				    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;
				
				if( numOpenParens < numCloseParens ) {
					return true;
				}
			}
			
			return false;
		}
		
	} );
	/*global Autolinker */
	/*jshint scripturl:true */
	/**
	 * @private
	 * @class Autolinker.MatchValidator
	 * @extends Object
	 * 
	 * Used by Autolinker to filter out false positives from the {@link Autolinker#matcherRegex}.
	 * 
	 * Due to the limitations of regular expressions (including the missing feature of look-behinds in JS regular expressions),
	 * we cannot always determine the validity of a given match. This class applies a bit of additional logic to filter out any
	 * false positives that have been matched by the {@link Autolinker#matcherRegex}.
	 */
	Autolinker.MatchValidator = Autolinker.Util.extend( Object, {
		
		/**
		 * @private
		 * @property {RegExp} invalidProtocolRelMatchRegex
		 * 
		 * The regular expression used to check a potential protocol-relative URL match, coming from the 
		 * {@link Autolinker#matcherRegex}. A protocol-relative URL is, for example, "//yahoo.com"
		 * 
		 * This regular expression checks to see if there is a word character before the '//' match in order to determine if 
		 * we should actually autolink a protocol-relative URL. This is needed because there is no negative look-behind in 
		 * JavaScript regular expressions. 
		 * 
		 * For instance, we want to autolink something like "Go to: //google.com", but we don't want to autolink something 
		 * like "abc//google.com"
		 */
		invalidProtocolRelMatchRegex : /^[\w]\/\//,
		
		/**
		 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
		 * 
		 * @private
		 * @property {RegExp} hasFullProtocolRegex
		 */
		hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
		
		/**
		 * Regex to find the URI scheme, such as 'mailto:'.
		 * 
		 * This is used to filter out 'javascript:' and 'vbscript:' schemes.
		 * 
		 * @private
		 * @property {RegExp} uriSchemeRegex
		 */
		uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]+:/,
		
		/**
		 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
		 * 
		 * @private
		 * @property {RegExp} hasWordCharAfterProtocolRegex
		 */
		hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z]/,
		
		
		/**
		 * Determines if a given match found by {@link Autolinker#processTextNode} is valid. Will return `false` for:
		 * 
		 * 1) URL matches which do not have at least have one period ('.') in the domain name (effectively skipping over 
		 *    matches like "abc:def"). However, URL matches with a protocol will be allowed (ex: 'http://localhost')
		 * 2) URL matches which do not have at least one word character in the domain name (effectively skipping over
		 *    matches like "git:1.0").
		 * 3) A protocol-relative url match (a URL beginning with '//') whose previous character is a word character 
		 *    (effectively skipping over strings like "abc//google.com")
		 * 
		 * Otherwise, returns `true`.
		 * 
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if the match given is valid and should be processed, or `false` if the match is invalid and/or 
		 *   should just not be processed.
		 */
		isValidMatch : function( urlMatch, protocolUrlMatch, protocolRelativeMatch ) {
			if(
				( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||
				this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||       // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
				this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) ||  // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
				this.isInvalidProtocolRelativeMatch( protocolRelativeMatch )                 // A protocol-relative match which has a word character in front of it (so we can skip something like "abc//google.com")
			) {
				return false;
			}
			
			return true;
		},
		
		
		/**
		 * Determines if the URI scheme is a valid scheme to be autolinked. Returns `false` if the scheme is 
		 * 'javascript:' or 'vbscript:'
		 * 
		 * @private
		 * @param {String} uriSchemeMatch The match URL string for a full URI scheme match. Ex: 'http://yahoo.com' 
		 *   or 'mailto:a@a.com'.
		 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
		 */
		isValidUriScheme : function( uriSchemeMatch ) {
			var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ].toLowerCase();
			
			return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );
		},
		
		
		/**
		 * Determines if a URL match does not have either:
		 * 
		 * a) a full protocol (i.e. 'http://'), or
		 * b) at least one dot ('.') in the domain name (for a non-full-protocol match).
		 * 
		 * Either situation is considered an invalid URL (ex: 'git:d' does not have either the '://' part, or at least one dot
		 * in the domain name. If the match was 'git:abc.com', we would consider this valid.)
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @return {Boolean} `true` if the URL match does not have a full protocol, or at least one dot ('.') in a non-full-protocol
		 *   match.
		 */
		urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {
			return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
		},
		
		
		/**
		 * Determines if a URL match does not have at least one word character after the protocol (i.e. in the domain name).
		 * 
		 * At least one letter character must exist in the domain name after a protocol match. Ex: skip over something 
		 * like "git:1.0"
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to
		 *   know whether or not we have a protocol in the URL string, in order to check for a word character after the protocol
		 *   separator (':').
		 * @return {Boolean} `true` if the URL match does not have at least one word character in it after the protocol, `false`
		 *   otherwise.
		 */
		urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {
			if( urlMatch && protocolUrlMatch ) {
				return !this.hasWordCharAfterProtocolRegex.test( urlMatch );
			} else {
				return false;
			}
		},
		
		
		/**
		 * Determines if a protocol-relative match is an invalid one. This method returns `true` if there is a `protocolRelativeMatch`,
		 * and that match contains a word character before the '//' (i.e. it must contain whitespace or nothing before the '//' in
		 * order to be considered valid).
		 * 
		 * @private
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if it is an invalid protocol-relative match, `false` otherwise.
		 */
		isInvalidProtocolRelativeMatch : function( protocolRelativeMatch ) {
			return ( !!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test( protocolRelativeMatch ) );
		}
	
	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.match.Match
	 * 
	 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a 
	 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                 case 'email' :
	 *                     console.log( "email: ", match.getEmail() );
	 *                     
	 *                 case 'twitter' :
	 *                     console.log( "twitter: ", match.getTwitterHandle() );
	 *             }
	 *         }
	 *     } );
	 *     
	 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
	 */
	Autolinker.match.Match = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} matchedText (required)
		 * 
		 * The original text that was matched.
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},
	
		
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Returns the original text that was matched.
		 * 
		 * @return {String}
		 */
		getMatchedText : function() {
			return this.matchedText;
		},
		
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorHref : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorText : Autolinker.Util.abstractMethod
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Email
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Email match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} email (required)
		 * 
		 * The email address that was matched.
		 */
		
	
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'email';
		},
		
		
		/**
		 * Returns the email address that was matched.
		 * 
		 * @return {String}
		 */
		getEmail : function() {
			return this.email;
		},
		
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'mailto:' + this.email;
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return this.email;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Twitter
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Twitter match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Twitter = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} twitterHandle (required)
		 * 
		 * The Twitter handle that was matched.
		 */
		
	
		/**
		 * Returns the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'twitter';
		},
		
		
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getTwitterHandle : function() {
			return this.twitterHandle;
		},
		
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'https://twitter.com/' + this.twitterHandle;
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return '@' + this.twitterHandle;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Url
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Url match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} url (required)
		 * 
		 * The url that was matched.
		 */
		
		/**
		 * @cfg {Boolean} protocolUrlMatch (required)
		 * 
		 * `true` if the URL is a match which already has a protocol (i.e. 'http://'), `false` if the match was from a 'www' or
		 * known TLD match.
		 */
		
		/**
		 * @cfg {Boolean} protocolRelativeMatch (required)
		 * 
		 * `true` if the URL is a protocol-relative match. A protocol-relative match is a URL that starts with '//',
		 * and will be either http:// or https:// based on the protocol that the site is loaded under.
		 */
		
		/**
		 * @cfg {Boolean} stripPrefix (required)
		 * @inheritdoc Autolinker#stripPrefix
		 */
		
	
		/**
		 * @private
		 * @property {RegExp} urlPrefixRegex
		 * 
		 * A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs.
		 */
		urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
		
		/**
		 * @private
		 * @property {RegExp} protocolRelativeRegex
		 * 
		 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
		 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
		 */
		protocolRelativeRegex : /^\/\//,
		
		/**
		 * @private
		 * @property {Boolean} protocolPrepended
		 * 
		 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
		 * {@link #url} did not have a protocol)
		 */
		protocolPrepended : false,
		
	
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'url';
		},
		
		
		/**
		 * Returns the url that was matched, assuming the protocol to be 'http://' if the original
		 * match was missing a protocol.
		 * 
		 * @return {String}
		 */
		getUrl : function() {
			var url = this.url;
			
			// if the url string doesn't begin with a protocol, assume 'http://'
			if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {
				url = this.url = 'http://' + url;
				
				this.protocolPrepended = true;
			}
			
			return url;
		},
		
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			var url = this.getUrl();
			
			return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html 
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			var anchorText = this.getUrl();
			
			if( this.protocolRelativeMatch ) {
				// Strip off any protocol-relative '//' from the anchor text
				anchorText = this.stripProtocolRelativePrefix( anchorText );
			}
			if( this.stripPrefix ) {
				anchorText = this.stripUrlPrefix( anchorText );
			}
			anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one
			
			return anchorText;
		},
		
		
		// ---------------------------------------
		
		// Utility Functionality
		
		/**
		 * Strips the URL prefix (such as "http://" or "https://") from the given text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   url prefix (such as stripping off "http://")
		 * @return {String} The `anchorText`, with the prefix stripped.
		 */
		stripUrlPrefix : function( text ) {
			return text.replace( this.urlPrefixRegex, '' );
		},
		
		
		/**
		 * Strips any protocol-relative '//' from the anchor text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   protocol-relative prefix (such as stripping off "//")
		 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
		 */
		stripProtocolRelativePrefix : function( text ) {
			return text.replace( this.protocolRelativeRegex, '' );
		},
		
		
		/**
		 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
		 * 
		 * @private
		 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
		 *   slash ('/') that may exist.
		 * @return {String} The `anchorText`, with the trailing slash removed.
		 */
		removeTrailingSlash : function( anchorText ) {
			if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {
				anchorText = anchorText.slice( 0, -1 );
			}
			return anchorText;
		}
		
	} );
	return Autolinker;
	
	}));


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var Ruler      = __webpack_require__(236);
	var StateBlock = __webpack_require__(254);
	
	/**
	 * Parser rules
	 */
	
	var _rules = [
	  [ 'code',       __webpack_require__(255) ],
	  [ 'fences',     __webpack_require__(256),     [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'blockquote', __webpack_require__(257), [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'hr',         __webpack_require__(258),         [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'list',       __webpack_require__(259),       [ 'paragraph', 'blockquote' ] ],
	  [ 'footnote',   __webpack_require__(260),   [ 'paragraph' ] ],
	  [ 'heading',    __webpack_require__(261),    [ 'paragraph', 'blockquote' ] ],
	  [ 'lheading',   __webpack_require__(262) ],
	  [ 'htmlblock',  __webpack_require__(263),  [ 'paragraph', 'blockquote' ] ],
	  [ 'table',      __webpack_require__(265),      [ 'paragraph' ] ],
	  [ 'deflist',    __webpack_require__(266),    [ 'paragraph' ] ],
	  [ 'paragraph',  __webpack_require__(267) ]
	];
	
	/**
	 * Block Parser class
	 *
	 * @api private
	 */
	
	function ParserBlock() {
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1], {
	      alt: (_rules[i][2] || []).slice()
	    });
	  }
	}
	
	/**
	 * Generate tokens for the given input range.
	 *
	 * @param  {Object} `state` Has properties like `src`, `parser`, `options` etc
	 * @param  {Number} `startLine`
	 * @param  {Number} `endLine`
	 * @api private
	 */
	
	ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var line = startLine;
	  var hasEmptyLines = false;
	  var ok, i;
	
	  while (line < endLine) {
	    state.line = line = state.skipEmptyLines(line);
	    if (line >= endLine) {
	      break;
	    }
	
	    // Termination condition for nested calls.
	    // Nested calls currently used for blockquotes & lists
	    if (state.tShift[line] < state.blkIndent) {
	      break;
	    }
	
	    // Try all possible rules.
	    // On success, rule should:
	    //
	    // - update `state.line`
	    // - update `state.tokens`
	    // - return true
	
	    for (i = 0; i < len; i++) {
	      ok = rules[i](state, line, endLine, false);
	      if (ok) {
	        break;
	      }
	    }
	
	    // set state.tight iff we had an empty line before current tag
	    // i.e. latest empty line should not count
	    state.tight = !hasEmptyLines;
	
	    // paragraph might "eat" one newline after it in nested lists
	    if (state.isEmpty(state.line - 1)) {
	      hasEmptyLines = true;
	    }
	
	    line = state.line;
	
	    if (line < endLine && state.isEmpty(line)) {
	      hasEmptyLines = true;
	      line++;
	
	      // two empty lines should stop the parser in list mode
	      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
	      state.line = line;
	    }
	  }
	};
	
	var TABS_SCAN_RE = /[\n\t]/g;
	var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
	var SPACES_RE    = /\u00a0/g;
	
	/**
	 * Tokenize the given `str`.
	 *
	 * @param  {String} `str` Source string
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @param  {Array} `outTokens`
	 * @api private
	 */
	
	ParserBlock.prototype.parse = function (str, options, env, outTokens) {
	  var state, lineStart = 0, lastTabPos = 0;
	  if (!str) { return []; }
	
	  // Normalize spaces
	  str = str.replace(SPACES_RE, ' ');
	
	  // Normalize newlines
	  str = str.replace(NEWLINES_RE, '\n');
	
	  // Replace tabs with proper number of spaces (1..4)
	  if (str.indexOf('\t') >= 0) {
	    str = str.replace(TABS_SCAN_RE, function (match, offset) {
	      var result;
	      if (str.charCodeAt(offset) === 0x0A) {
	        lineStart = offset + 1;
	        lastTabPos = 0;
	        return match;
	      }
	      result = '    '.slice((offset - lineStart - lastTabPos) % 4);
	      lastTabPos = offset - lineStart + 1;
	      return result;
	    });
	  }
	
	  state = new StateBlock(str, this, options, env, outTokens);
	  this.tokenize(state, state.line, state.lineMax);
	};
	
	/**
	 * Expose `ParserBlock`
	 */
	
	module.exports = ParserBlock;


/***/ }),
/* 254 */
/***/ (function(module, exports) {

	// Parser state class
	
	'use strict';
	
	
	function StateBlock(src, parser, options, env, tokens) {
	  var ch, s, start, pos, len, indent, indent_found;
	
	  this.src = src;
	
	  // Shortcuts to simplify nested calls
	  this.parser = parser;
	
	  this.options = options;
	
	  this.env = env;
	
	  //
	  // Internal state vartiables
	  //
	
	  this.tokens = tokens;
	
	  this.bMarks = [];  // line begin offsets for fast jumps
	  this.eMarks = [];  // line end offsets for fast jumps
	  this.tShift = [];  // indent for each line
	
	  // block parser variables
	  this.blkIndent  = 0; // required block content indent
	                       // (for example, if we are in list)
	  this.line       = 0; // line index in src
	  this.lineMax    = 0; // lines count
	  this.tight      = false;  // loose/tight mode for lists
	  this.parentType = 'root'; // if `list`, block parser stops on two newlines
	  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)
	
	  this.level = 0;
	
	  // renderer
	  this.result = '';
	
	  // Create caches
	  // Generate markers.
	  s = this.src;
	  indent = 0;
	  indent_found = false;
	
	  for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
	    ch = s.charCodeAt(pos);
	
	    if (!indent_found) {
	      if (ch === 0x20/* space */) {
	        indent++;
	        continue;
	      } else {
	        indent_found = true;
	      }
	    }
	
	    if (ch === 0x0A || pos === len - 1) {
	      if (ch !== 0x0A) { pos++; }
	      this.bMarks.push(start);
	      this.eMarks.push(pos);
	      this.tShift.push(indent);
	
	      indent_found = false;
	      indent = 0;
	      start = pos + 1;
	    }
	  }
	
	  // Push fake entry to simplify cache bounds checks
	  this.bMarks.push(s.length);
	  this.eMarks.push(s.length);
	  this.tShift.push(0);
	
	  this.lineMax = this.bMarks.length - 1; // don't count last fake line
	}
	
	StateBlock.prototype.isEmpty = function isEmpty(line) {
	  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
	};
	
	StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
	  for (var max = this.lineMax; from < max; from++) {
	    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
	      break;
	    }
	  }
	  return from;
	};
	
	// Skip spaces from given position.
	StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== 0x20/* space */) { break; }
	  }
	  return pos;
	};
	
	// Skip char codes from given position
	StateBlock.prototype.skipChars = function skipChars(pos, code) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== code) { break; }
	  }
	  return pos;
	};
	
	// Skip char codes reverse from given position - 1
	StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
	  if (pos <= min) { return pos; }
	
	  while (pos > min) {
	    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
	  }
	  return pos;
	};
	
	// cut lines range from source.
	StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
	  var i, first, last, queue, shift,
	      line = begin;
	
	  if (begin >= end) {
	    return '';
	  }
	
	  // Opt: don't use push queue for single line;
	  if (line + 1 === end) {
	    first = this.bMarks[line] + Math.min(this.tShift[line], indent);
	    last = keepLastLF ? this.eMarks[line] + 1 : this.eMarks[line];
	    return this.src.slice(first, last);
	  }
	
	  queue = new Array(end - begin);
	
	  for (i = 0; line < end; line++, i++) {
	    shift = this.tShift[line];
	    if (shift > indent) { shift = indent; }
	    if (shift < 0) { shift = 0; }
	
	    first = this.bMarks[line] + shift;
	
	    if (line + 1 < end || keepLastLF) {
	      // No need for bounds check because we have fake entry on tail.
	      last = this.eMarks[line] + 1;
	    } else {
	      last = this.eMarks[line];
	    }
	
	    queue[i] = this.src.slice(first, last);
	  }
	
	  return queue.join('');
	};
	
	
	module.exports = StateBlock;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

	// Code block (4 spaces padded)
	
	'use strict';
	
	
	module.exports = function code(state, startLine, endLine/*, silent*/) {
	  var nextLine, last;
	
	  if (state.tShift[startLine] - state.blkIndent < 4) { return false; }
	
	  last = nextLine = startLine + 1;
	
	  while (nextLine < endLine) {
	    if (state.isEmpty(nextLine)) {
	      nextLine++;
	      continue;
	    }
	    if (state.tShift[nextLine] - state.blkIndent >= 4) {
	      nextLine++;
	      last = nextLine;
	      continue;
	    }
	    break;
	  }
	
	  state.line = nextLine;
	  state.tokens.push({
	    type: 'code',
	    content: state.getLines(startLine, last, 4 + state.blkIndent, true),
	    block: true,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	
	  return true;
	};


/***/ }),
/* 256 */
/***/ (function(module, exports) {

	// fences (``` lang, ~~~ lang)
	
	'use strict';
	
	
	module.exports = function fences(state, startLine, endLine, silent) {
	  var marker, len, params, nextLine, mem,
	      haveEndMarker = false,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];
	
	  if (pos + 3 > max) { return false; }
	
	  marker = state.src.charCodeAt(pos);
	
	  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
	    return false;
	  }
	
	  // scan marker length
	  mem = pos;
	  pos = state.skipChars(pos, marker);
	
	  len = pos - mem;
	
	  if (len < 3) { return false; }
	
	  params = state.src.slice(pos, max).trim();
	
	  if (params.indexOf('`') >= 0) { return false; }
	
	  // Since start is found, we can report success here in validation mode
	  if (silent) { return true; }
	
	  // search end of block
	  nextLine = startLine;
	
	  for (;;) {
	    nextLine++;
	    if (nextLine >= endLine) {
	      // unclosed block should be autoclosed by end of document.
	      // also block seems to be autoclosed by end of parent
	      break;
	    }
	
	    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];
	
	    if (pos < max && state.tShift[nextLine] < state.blkIndent) {
	      // non-empty line with negative indent should stop the list:
	      // - ```
	      //  test
	      break;
	    }
	
	    if (state.src.charCodeAt(pos) !== marker) { continue; }
	
	    if (state.tShift[nextLine] - state.blkIndent >= 4) {
	      // closing fence should be indented less than 4 spaces
	      continue;
	    }
	
	    pos = state.skipChars(pos, marker);
	
	    // closing code fence must be at least as long as the opening one
	    if (pos - mem < len) { continue; }
	
	    // make sure tail has spaces only
	    pos = state.skipSpaces(pos);
	
	    if (pos < max) { continue; }
	
	    haveEndMarker = true;
	    // found!
	    break;
	  }
	
	  // If a fence has heading spaces, they should be removed from its inner block
	  len = state.tShift[startLine];
	
	  state.line = nextLine + (haveEndMarker ? 1 : 0);
	  state.tokens.push({
	    type: 'fence',
	    params: params,
	    content: state.getLines(startLine + 1, nextLine, len, true),
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	
	  return true;
	};


/***/ }),
/* 257 */
/***/ (function(module, exports) {

	// Block quotes
	
	'use strict';
	
	
	module.exports = function blockquote(state, startLine, endLine, silent) {
	  var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines,
	      terminatorRules,
	      i, l, terminate,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];
	
	  if (pos > max) { return false; }
	
	  // check the block quote marker
	  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }
	
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  // we know that it's going to be a valid blockquote,
	  // so no point trying to find the end of it in silent mode
	  if (silent) { return true; }
	
	  // skip one optional space after '>'
	  if (state.src.charCodeAt(pos) === 0x20) { pos++; }
	
	  oldIndent = state.blkIndent;
	  state.blkIndent = 0;
	
	  oldBMarks = [ state.bMarks[startLine] ];
	  state.bMarks[startLine] = pos;
	
	  // check if we have an empty blockquote
	  pos = pos < max ? state.skipSpaces(pos) : pos;
	  lastLineEmpty = pos >= max;
	
	  oldTShift = [ state.tShift[startLine] ];
	  state.tShift[startLine] = pos - state.bMarks[startLine];
	
	  terminatorRules = state.parser.ruler.getRules('blockquote');
	
	  // Search the end of the block
	  //
	  // Block ends with either:
	  //  1. an empty line outside:
	  //     ```
	  //     > test
	  //
	  //     ```
	  //  2. an empty line inside:
	  //     ```
	  //     >
	  //     test
	  //     ```
	  //  3. another tag
	  //     ```
	  //     > test
	  //      - - -
	  //     ```
	  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
	    pos = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];
	
	    if (pos >= max) {
	      // Case 1: line is not inside the blockquote, and this line is empty.
	      break;
	    }
	
	    if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
	      // This line is inside the blockquote.
	
	      // skip one optional space after '>'
	      if (state.src.charCodeAt(pos) === 0x20) { pos++; }
	
	      oldBMarks.push(state.bMarks[nextLine]);
	      state.bMarks[nextLine] = pos;
	
	      pos = pos < max ? state.skipSpaces(pos) : pos;
	      lastLineEmpty = pos >= max;
	
	      oldTShift.push(state.tShift[nextLine]);
	      state.tShift[nextLine] = pos - state.bMarks[nextLine];
	      continue;
	    }
	
	    // Case 2: line is not inside the blockquote, and the last line was empty.
	    if (lastLineEmpty) { break; }
	
	    // Case 3: another tag found.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }
	
	    oldBMarks.push(state.bMarks[nextLine]);
	    oldTShift.push(state.tShift[nextLine]);
	
	    // A negative number means that this is a paragraph continuation;
	    //
	    // Any negative number will do the job here, but it's better for it
	    // to be large enough to make any bugs obvious.
	    state.tShift[nextLine] = -1337;
	  }
	
	  oldParentType = state.parentType;
	  state.parentType = 'blockquote';
	  state.tokens.push({
	    type: 'blockquote_open',
	    lines: lines = [ startLine, 0 ],
	    level: state.level++
	  });
	  state.parser.tokenize(state, startLine, nextLine);
	  state.tokens.push({
	    type: 'blockquote_close',
	    level: --state.level
	  });
	  state.parentType = oldParentType;
	  lines[1] = state.line;
	
	  // Restore original tShift; this might not be necessary since the parser
	  // has already been here, but just to make sure we can do that.
	  for (i = 0; i < oldTShift.length; i++) {
	    state.bMarks[i + startLine] = oldBMarks[i];
	    state.tShift[i + startLine] = oldTShift[i];
	  }
	  state.blkIndent = oldIndent;
	
	  return true;
	};


/***/ }),
/* 258 */
/***/ (function(module, exports) {

	// Horizontal rule
	
	'use strict';
	
	
	module.exports = function hr(state, startLine, endLine, silent) {
	  var marker, cnt, ch,
	      pos = state.bMarks[startLine],
	      max = state.eMarks[startLine];
	
	  pos += state.tShift[startLine];
	
	  if (pos > max) { return false; }
	
	  marker = state.src.charCodeAt(pos++);
	
	  // Check hr marker
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x5F/* _ */) {
	    return false;
	  }
	
	  // markers can be mixed with spaces, but there should be at least 3 one
	
	  cnt = 1;
	  while (pos < max) {
	    ch = state.src.charCodeAt(pos++);
	    if (ch !== marker && ch !== 0x20/* space */) { return false; }
	    if (ch === marker) { cnt++; }
	  }
	
	  if (cnt < 3) { return false; }
	
	  if (silent) { return true; }
	
	  state.line = startLine + 1;
	  state.tokens.push({
	    type: 'hr',
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	
	  return true;
	};


/***/ }),
/* 259 */
/***/ (function(module, exports) {

	// Lists
	
	'use strict';
	
	
	// Search `[-+*][\n ]`, returns next pos arter marker on success
	// or -1 on fail.
	function skipBulletListMarker(state, startLine) {
	  var marker, pos, max;
	
	  pos = state.bMarks[startLine] + state.tShift[startLine];
	  max = state.eMarks[startLine];
	
	  if (pos >= max) { return -1; }
	
	  marker = state.src.charCodeAt(pos++);
	  // Check bullet
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x2B/* + */) {
	    return -1;
	  }
	
	  if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
	    // " 1.test " - is not a list item
	    return -1;
	  }
	
	  return pos;
	}
	
	// Search `\d+[.)][\n ]`, returns next pos arter marker on success
	// or -1 on fail.
	function skipOrderedListMarker(state, startLine) {
	  var ch,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];
	
	  if (pos + 1 >= max) { return -1; }
	
	  ch = state.src.charCodeAt(pos++);
	
	  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }
	
	  for (;;) {
	    // EOL -> fail
	    if (pos >= max) { return -1; }
	
	    ch = state.src.charCodeAt(pos++);
	
	    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {
	      continue;
	    }
	
	    // found valid marker
	    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
	      break;
	    }
	
	    return -1;
	  }
	
	
	  if (pos < max && state.src.charCodeAt(pos) !== 0x20/* space */) {
	    // " 1.test " - is not a list item
	    return -1;
	  }
	  return pos;
	}
	
	function markTightParagraphs(state, idx) {
	  var i, l,
	      level = state.level + 2;
	
	  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
	    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
	      state.tokens[i + 2].tight = true;
	      state.tokens[i].tight = true;
	      i += 2;
	    }
	  }
	}
	
	
	module.exports = function list(state, startLine, endLine, silent) {
	  var nextLine,
	      indent,
	      oldTShift,
	      oldIndent,
	      oldTight,
	      oldParentType,
	      start,
	      posAfterMarker,
	      max,
	      indentAfterMarker,
	      markerValue,
	      markerCharCode,
	      isOrdered,
	      contentStart,
	      listTokIdx,
	      prevEmptyEnd,
	      listLines,
	      itemLines,
	      tight = true,
	      terminatorRules,
	      i, l, terminate;
	
	  // Detect list type and position after marker
	  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
	    isOrdered = true;
	  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
	    isOrdered = false;
	  } else {
	    return false;
	  }
	
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  // We should terminate list on style change. Remember first one to compare.
	  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
	
	  // For validation mode we can terminate immediately
	  if (silent) { return true; }
	
	  // Start list
	  listTokIdx = state.tokens.length;
	
	  if (isOrdered) {
	    start = state.bMarks[startLine] + state.tShift[startLine];
	    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));
	
	    state.tokens.push({
	      type: 'ordered_list_open',
	      order: markerValue,
	      lines: listLines = [ startLine, 0 ],
	      level: state.level++
	    });
	
	  } else {
	    state.tokens.push({
	      type: 'bullet_list_open',
	      lines: listLines = [ startLine, 0 ],
	      level: state.level++
	    });
	  }
	
	  //
	  // Iterate list items
	  //
	
	  nextLine = startLine;
	  prevEmptyEnd = false;
	  terminatorRules = state.parser.ruler.getRules('list');
	
	  while (nextLine < endLine) {
	    contentStart = state.skipSpaces(posAfterMarker);
	    max = state.eMarks[nextLine];
	
	    if (contentStart >= max) {
	      // trimming space in "-    \n  3" case, indent is 1 here
	      indentAfterMarker = 1;
	    } else {
	      indentAfterMarker = contentStart - posAfterMarker;
	    }
	
	    // If we have more than 4 spaces, the indent is 1
	    // (the rest is just indented code block)
	    if (indentAfterMarker > 4) { indentAfterMarker = 1; }
	
	    // If indent is less than 1, assume that it's one, example:
	    //  "-\n  test"
	    if (indentAfterMarker < 1) { indentAfterMarker = 1; }
	
	    // "  -  test"
	    //  ^^^^^ - calculating total length of this thing
	    indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;
	
	    // Run subparser & write tokens
	    state.tokens.push({
	      type: 'list_item_open',
	      lines: itemLines = [ startLine, 0 ],
	      level: state.level++
	    });
	
	    oldIndent = state.blkIndent;
	    oldTight = state.tight;
	    oldTShift = state.tShift[startLine];
	    oldParentType = state.parentType;
	    state.tShift[startLine] = contentStart - state.bMarks[startLine];
	    state.blkIndent = indent;
	    state.tight = true;
	    state.parentType = 'list';
	
	    state.parser.tokenize(state, startLine, endLine, true);
	
	    // If any of list item is tight, mark list as tight
	    if (!state.tight || prevEmptyEnd) {
	      tight = false;
	    }
	    // Item become loose if finish with empty line,
	    // but we should filter last element, because it means list finish
	    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);
	
	    state.blkIndent = oldIndent;
	    state.tShift[startLine] = oldTShift;
	    state.tight = oldTight;
	    state.parentType = oldParentType;
	
	    state.tokens.push({
	      type: 'list_item_close',
	      level: --state.level
	    });
	
	    nextLine = startLine = state.line;
	    itemLines[1] = nextLine;
	    contentStart = state.bMarks[startLine];
	
	    if (nextLine >= endLine) { break; }
	
	    if (state.isEmpty(nextLine)) {
	      break;
	    }
	
	    //
	    // Try to check if list is terminated or continued.
	    //
	    if (state.tShift[nextLine] < state.blkIndent) { break; }
	
	    // fail if terminating block found
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }
	
	    // fail if list has another type
	    if (isOrdered) {
	      posAfterMarker = skipOrderedListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    } else {
	      posAfterMarker = skipBulletListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    }
	
	    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
	  }
	
	  // Finilize list
	  state.tokens.push({
	    type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
	    level: --state.level
	  });
	  listLines[1] = nextLine;
	
	  state.line = nextLine;
	
	  // mark paragraphs tight if needed
	  if (tight) {
	    markTightParagraphs(state, listTokIdx);
	  }
	
	  return true;
	};


/***/ }),
/* 260 */
/***/ (function(module, exports) {

	// Process footnote reference list
	
	'use strict';
	
	
	module.exports = function footnote(state, startLine, endLine, silent) {
	  var oldBMark, oldTShift, oldParentType, pos, label,
	      start = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];
	
	  // line should be at least 5 chars - "[^x]:"
	  if (start + 4 > max) { return false; }
	
	  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  for (pos = start + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x20) { return false; }
	    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
	      break;
	    }
	  }
	
	  if (pos === start + 2) { return false; } // no empty footnote labels
	  if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
	  if (silent) { return true; }
	  pos++;
	
	  if (!state.env.footnotes) { state.env.footnotes = {}; }
	  if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
	  label = state.src.slice(start + 2, pos - 2);
	  state.env.footnotes.refs[':' + label] = -1;
	
	  state.tokens.push({
	    type: 'footnote_reference_open',
	    label: label,
	    level: state.level++
	  });
	
	  oldBMark = state.bMarks[startLine];
	  oldTShift = state.tShift[startLine];
	  oldParentType = state.parentType;
	  state.tShift[startLine] = state.skipSpaces(pos) - pos;
	  state.bMarks[startLine] = pos;
	  state.blkIndent += 4;
	  state.parentType = 'footnote';
	
	  if (state.tShift[startLine] < state.blkIndent) {
	    state.tShift[startLine] += state.blkIndent;
	    state.bMarks[startLine] -= state.blkIndent;
	  }
	
	  state.parser.tokenize(state, startLine, endLine, true);
	
	  state.parentType = oldParentType;
	  state.blkIndent -= 4;
	  state.tShift[startLine] = oldTShift;
	  state.bMarks[startLine] = oldBMark;
	
	  state.tokens.push({
	    type: 'footnote_reference_close',
	    level: --state.level
	  });
	
	  return true;
	};


/***/ }),
/* 261 */
/***/ (function(module, exports) {

	// heading (#, ##, ...)
	
	'use strict';
	
	
	module.exports = function heading(state, startLine, endLine, silent) {
	  var ch, level, tmp,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];
	
	  if (pos >= max) { return false; }
	
	  ch  = state.src.charCodeAt(pos);
	
	  if (ch !== 0x23/* # */ || pos >= max) { return false; }
	
	  // count heading level
	  level = 1;
	  ch = state.src.charCodeAt(++pos);
	  while (ch === 0x23/* # */ && pos < max && level <= 6) {
	    level++;
	    ch = state.src.charCodeAt(++pos);
	  }
	
	  if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }
	
	  if (silent) { return true; }
	
	  // Let's cut tails like '    ###  ' from the end of string
	
	  max = state.skipCharsBack(max, 0x20, pos); // space
	  tmp = state.skipCharsBack(max, 0x23, pos); // #
	  if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20/* space */) {
	    max = tmp;
	  }
	
	  state.line = startLine + 1;
	
	  state.tokens.push({ type: 'heading_open',
	    hLevel: level,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	
	  // only if header is not empty
	  if (pos < max) {
	    state.tokens.push({
	      type: 'inline',
	      content: state.src.slice(pos, max).trim(),
	      level: state.level + 1,
	      lines: [ startLine, state.line ],
	      children: []
	    });
	  }
	  state.tokens.push({ type: 'heading_close', hLevel: level, level: state.level });
	
	  return true;
	};


/***/ }),
/* 262 */
/***/ (function(module, exports) {

	// lheading (---, ===)
	
	'use strict';
	
	
	module.exports = function lheading(state, startLine, endLine/*, silent*/) {
	  var marker, pos, max,
	      next = startLine + 1;
	
	  if (next >= endLine) { return false; }
	  if (state.tShift[next] < state.blkIndent) { return false; }
	
	  // Scan next line
	
	  if (state.tShift[next] - state.blkIndent > 3) { return false; }
	
	  pos = state.bMarks[next] + state.tShift[next];
	  max = state.eMarks[next];
	
	  if (pos >= max) { return false; }
	
	  marker = state.src.charCodeAt(pos);
	
	  if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }
	
	  pos = state.skipChars(pos, marker);
	
	  pos = state.skipSpaces(pos);
	
	  if (pos < max) { return false; }
	
	  pos = state.bMarks[startLine] + state.tShift[startLine];
	
	  state.line = next + 1;
	  state.tokens.push({
	    type: 'heading_open',
	    hLevel: marker === 0x3D/* = */ ? 1 : 2,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	  state.tokens.push({
	    type: 'inline',
	    content: state.src.slice(pos, state.eMarks[startLine]).trim(),
	    level: state.level + 1,
	    lines: [ startLine, state.line - 1 ],
	    children: []
	  });
	  state.tokens.push({
	    type: 'heading_close',
	    hLevel: marker === 0x3D/* = */ ? 1 : 2,
	    level: state.level
	  });
	
	  return true;
	};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	// HTML block
	
	'use strict';
	
	
	var block_names = __webpack_require__(264);
	
	
	var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
	var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;
	
	function isLetter(ch) {
	  /*eslint no-bitwise:0*/
	  var lc = ch | 0x20; // to lower case
	  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
	}
	
	module.exports = function htmlblock(state, startLine, endLine, silent) {
	  var ch, match, nextLine,
	      pos = state.bMarks[startLine],
	      max = state.eMarks[startLine],
	      shift = state.tShift[startLine];
	
	  pos += shift;
	
	  if (!state.options.html) { return false; }
	
	  if (shift > 3 || pos + 2 >= max) { return false; }
	
	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }
	
	  ch = state.src.charCodeAt(pos + 1);
	
	  if (ch === 0x21/* ! */ || ch === 0x3F/* ? */) {
	    // Directive start / comment start / processing instruction start
	    if (silent) { return true; }
	
	  } else if (ch === 0x2F/* / */ || isLetter(ch)) {
	
	    // Probably start or end of tag
	    if (ch === 0x2F/* \ */) {
	      // closing tag
	      match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
	      if (!match) { return false; }
	    } else {
	      // opening tag
	      match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
	      if (!match) { return false; }
	    }
	    // Make sure tag name is valid
	    if (block_names[match[1].toLowerCase()] !== true) { return false; }
	    if (silent) { return true; }
	
	  } else {
	    return false;
	  }
	
	  // If we are here - we detected HTML block.
	  // Let's roll down till empty line (block end).
	  nextLine = startLine + 1;
	  while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
	    nextLine++;
	  }
	
	  state.line = nextLine;
	  state.tokens.push({
	    type: 'htmlblock',
	    level: state.level,
	    lines: [ startLine, state.line ],
	    content: state.getLines(startLine, nextLine, 0, true)
	  });
	
	  return true;
	};


/***/ }),
/* 264 */
/***/ (function(module, exports) {

	// List of valid html blocks names, accorting to commonmark spec
	// http://jgm.github.io/CommonMark/spec.html#html-blocks
	
	'use strict';
	
	var html_blocks = {};
	
	[
	  'article',
	  'aside',
	  'button',
	  'blockquote',
	  'body',
	  'canvas',
	  'caption',
	  'col',
	  'colgroup',
	  'dd',
	  'div',
	  'dl',
	  'dt',
	  'embed',
	  'fieldset',
	  'figcaption',
	  'figure',
	  'footer',
	  'form',
	  'h1',
	  'h2',
	  'h3',
	  'h4',
	  'h5',
	  'h6',
	  'header',
	  'hgroup',
	  'hr',
	  'iframe',
	  'li',
	  'map',
	  'object',
	  'ol',
	  'output',
	  'p',
	  'pre',
	  'progress',
	  'script',
	  'section',
	  'style',
	  'table',
	  'tbody',
	  'td',
	  'textarea',
	  'tfoot',
	  'th',
	  'tr',
	  'thead',
	  'ul',
	  'video'
	].forEach(function (name) { html_blocks[name] = true; });
	
	
	module.exports = html_blocks;


/***/ }),
/* 265 */
/***/ (function(module, exports) {

	// GFM table, non-standard
	
	'use strict';
	
	
	function getLine(state, line) {
	  var pos = state.bMarks[line] + state.blkIndent,
	      max = state.eMarks[line];
	
	  return state.src.substr(pos, max - pos);
	}
	
	module.exports = function table(state, startLine, endLine, silent) {
	  var ch, lineText, pos, i, nextLine, rows, cell,
	      aligns, t, tableLines, tbodyLines;
	
	  // should have at least three lines
	  if (startLine + 2 > endLine) { return false; }
	
	  nextLine = startLine + 1;
	
	  if (state.tShift[nextLine] < state.blkIndent) { return false; }
	
	  // first character of the second line should be '|' or '-'
	
	  pos = state.bMarks[nextLine] + state.tShift[nextLine];
	  if (pos >= state.eMarks[nextLine]) { return false; }
	
	  ch = state.src.charCodeAt(pos);
	  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }
	
	  lineText = getLine(state, startLine + 1);
	  if (!/^[-:| ]+$/.test(lineText)) { return false; }
	
	  rows = lineText.split('|');
	  if (rows <= 2) { return false; }
	  aligns = [];
	  for (i = 0; i < rows.length; i++) {
	    t = rows[i].trim();
	    if (!t) {
	      // allow empty columns before and after table, but not in between columns;
	      // e.g. allow ` |---| `, disallow ` ---||--- `
	      if (i === 0 || i === rows.length - 1) {
	        continue;
	      } else {
	        return false;
	      }
	    }
	
	    if (!/^:?-+:?$/.test(t)) { return false; }
	    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
	      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
	    } else if (t.charCodeAt(0) === 0x3A/* : */) {
	      aligns.push('left');
	    } else {
	      aligns.push('');
	    }
	  }
	
	  lineText = getLine(state, startLine).trim();
	  if (lineText.indexOf('|') === -1) { return false; }
	  rows = lineText.replace(/^\||\|$/g, '').split('|');
	  if (aligns.length !== rows.length) { return false; }
	  if (silent) { return true; }
	
	  state.tokens.push({
	    type: 'table_open',
	    lines: tableLines = [ startLine, 0 ],
	    level: state.level++
	  });
	  state.tokens.push({
	    type: 'thead_open',
	    lines: [ startLine, startLine + 1 ],
	    level: state.level++
	  });
	
	  state.tokens.push({
	    type: 'tr_open',
	    lines: [ startLine, startLine + 1 ],
	    level: state.level++
	  });
	  for (i = 0; i < rows.length; i++) {
	    state.tokens.push({
	      type: 'th_open',
	      align: aligns[i],
	      lines: [ startLine, startLine + 1 ],
	      level: state.level++
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: rows[i].trim(),
	      lines: [ startLine, startLine + 1 ],
	      level: state.level,
	      children: []
	    });
	    state.tokens.push({ type: 'th_close', level: --state.level });
	  }
	  state.tokens.push({ type: 'tr_close', level: --state.level });
	  state.tokens.push({ type: 'thead_close', level: --state.level });
	
	  state.tokens.push({
	    type: 'tbody_open',
	    lines: tbodyLines = [ startLine + 2, 0 ],
	    level: state.level++
	  });
	
	  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
	    if (state.tShift[nextLine] < state.blkIndent) { break; }
	
	    lineText = getLine(state, nextLine).trim();
	    if (lineText.indexOf('|') === -1) { break; }
	    rows = lineText.replace(/^\||\|$/g, '').split('|');
	
	    state.tokens.push({ type: 'tr_open', level: state.level++ });
	    for (i = 0; i < rows.length; i++) {
	      state.tokens.push({ type: 'td_open', align: aligns[i], level: state.level++ });
	      // 0x7c === '|'
	      cell = rows[i].substring(
	          rows[i].charCodeAt(0) === 0x7c ? 1 : 0,
	          rows[i].charCodeAt(rows[i].length - 1) === 0x7c ? rows[i].length - 1 : rows[i].length
	      ).trim();
	      state.tokens.push({
	        type: 'inline',
	        content: cell,
	        level: state.level,
	        children: []
	      });
	      state.tokens.push({ type: 'td_close', level: --state.level });
	    }
	    state.tokens.push({ type: 'tr_close', level: --state.level });
	  }
	  state.tokens.push({ type: 'tbody_close', level: --state.level });
	  state.tokens.push({ type: 'table_close', level: --state.level });
	
	  tableLines[1] = tbodyLines[1] = nextLine;
	  state.line = nextLine;
	  return true;
	};


/***/ }),
/* 266 */
/***/ (function(module, exports) {

	// Definition lists
	
	'use strict';
	
	
	// Search `[:~][\n ]`, returns next pos after marker on success
	// or -1 on fail.
	function skipMarker(state, line) {
	  var pos, marker,
	      start = state.bMarks[line] + state.tShift[line],
	      max = state.eMarks[line];
	
	  if (start >= max) { return -1; }
	
	  // Check bullet
	  marker = state.src.charCodeAt(start++);
	  if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }
	
	  pos = state.skipSpaces(start);
	
	  // require space after ":"
	  if (start === pos) { return -1; }
	
	  // no empty definitions, e.g. "  : "
	  if (pos >= max) { return -1; }
	
	  return pos;
	}
	
	function markTightParagraphs(state, idx) {
	  var i, l,
	      level = state.level + 2;
	
	  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
	    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
	      state.tokens[i + 2].tight = true;
	      state.tokens[i].tight = true;
	      i += 2;
	    }
	  }
	}
	
	module.exports = function deflist(state, startLine, endLine, silent) {
	  var contentStart,
	      ddLine,
	      dtLine,
	      itemLines,
	      listLines,
	      listTokIdx,
	      nextLine,
	      oldIndent,
	      oldDDIndent,
	      oldParentType,
	      oldTShift,
	      oldTight,
	      prevEmptyEnd,
	      tight;
	
	  if (silent) {
	    // quirk: validation mode validates a dd block only, not a whole deflist
	    if (state.ddIndent < 0) { return false; }
	    return skipMarker(state, startLine) >= 0;
	  }
	
	  nextLine = startLine + 1;
	  if (state.isEmpty(nextLine)) {
	    if (++nextLine > endLine) { return false; }
	  }
	
	  if (state.tShift[nextLine] < state.blkIndent) { return false; }
	  contentStart = skipMarker(state, nextLine);
	  if (contentStart < 0) { return false; }
	
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  // Start list
	  listTokIdx = state.tokens.length;
	
	  state.tokens.push({
	    type: 'dl_open',
	    lines: listLines = [ startLine, 0 ],
	    level: state.level++
	  });
	
	  //
	  // Iterate list items
	  //
	
	  dtLine = startLine;
	  ddLine = nextLine;
	
	  // One definition list can contain multiple DTs,
	  // and one DT can be followed by multiple DDs.
	  //
	  // Thus, there is two loops here, and label is
	  // needed to break out of the second one
	  //
	  /*eslint no-labels:0,block-scoped-var:0*/
	  OUTER:
	  for (;;) {
	    tight = true;
	    prevEmptyEnd = false;
	
	    state.tokens.push({
	      type: 'dt_open',
	      lines: [ dtLine, dtLine ],
	      level: state.level++
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim(),
	      level: state.level + 1,
	      lines: [ dtLine, dtLine ],
	      children: []
	    });
	    state.tokens.push({
	      type: 'dt_close',
	      level: --state.level
	    });
	
	    for (;;) {
	      state.tokens.push({
	        type: 'dd_open',
	        lines: itemLines = [ nextLine, 0 ],
	        level: state.level++
	      });
	
	      oldTight = state.tight;
	      oldDDIndent = state.ddIndent;
	      oldIndent = state.blkIndent;
	      oldTShift = state.tShift[ddLine];
	      oldParentType = state.parentType;
	      state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2;
	      state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
	      state.tight = true;
	      state.parentType = 'deflist';
	
	      state.parser.tokenize(state, ddLine, endLine, true);
	
	      // If any of list item is tight, mark list as tight
	      if (!state.tight || prevEmptyEnd) {
	        tight = false;
	      }
	      // Item become loose if finish with empty line,
	      // but we should filter last element, because it means list finish
	      prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);
	
	      state.tShift[ddLine] = oldTShift;
	      state.tight = oldTight;
	      state.parentType = oldParentType;
	      state.blkIndent = oldIndent;
	      state.ddIndent = oldDDIndent;
	
	      state.tokens.push({
	        type: 'dd_close',
	        level: --state.level
	      });
	
	      itemLines[1] = nextLine = state.line;
	
	      if (nextLine >= endLine) { break OUTER; }
	
	      if (state.tShift[nextLine] < state.blkIndent) { break OUTER; }
	      contentStart = skipMarker(state, nextLine);
	      if (contentStart < 0) { break; }
	
	      ddLine = nextLine;
	
	      // go to the next loop iteration:
	      // insert DD tag and repeat checking
	    }
	
	    if (nextLine >= endLine) { break; }
	    dtLine = nextLine;
	
	    if (state.isEmpty(dtLine)) { break; }
	    if (state.tShift[dtLine] < state.blkIndent) { break; }
	
	    ddLine = dtLine + 1;
	    if (ddLine >= endLine) { break; }
	    if (state.isEmpty(ddLine)) { ddLine++; }
	    if (ddLine >= endLine) { break; }
	
	    if (state.tShift[ddLine] < state.blkIndent) { break; }
	    contentStart = skipMarker(state, ddLine);
	    if (contentStart < 0) { break; }
	
	    // go to the next loop iteration:
	    // insert DT and DD tags and repeat checking
	  }
	
	  // Finilize list
	  state.tokens.push({
	    type: 'dl_close',
	    level: --state.level
	  });
	  listLines[1] = nextLine;
	
	  state.line = nextLine;
	
	  // mark paragraphs tight if needed
	  if (tight) {
	    markTightParagraphs(state, listTokIdx);
	  }
	
	  return true;
	};


/***/ }),
/* 267 */
/***/ (function(module, exports) {

	// Paragraph
	
	'use strict';
	
	
	module.exports = function paragraph(state, startLine/*, endLine*/) {
	  var endLine, content, terminate, i, l,
	      nextLine = startLine + 1,
	      terminatorRules;
	
	  endLine = state.lineMax;
	
	  // jump line-by-line until empty one or EOF
	  if (nextLine < endLine && !state.isEmpty(nextLine)) {
	    terminatorRules = state.parser.ruler.getRules('paragraph');
	
	    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
	      // this would be a code block normally, but after paragraph
	      // it's considered a lazy continuation regardless of what's there
	      if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }
	
	      // Some tags can terminate paragraph without empty line.
	      terminate = false;
	      for (i = 0, l = terminatorRules.length; i < l; i++) {
	        if (terminatorRules[i](state, nextLine, endLine, true)) {
	          terminate = true;
	          break;
	        }
	      }
	      if (terminate) { break; }
	    }
	  }
	
	  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
	
	  state.line = nextLine;
	  if (content.length) {
	    state.tokens.push({
	      type: 'paragraph_open',
	      tight: false,
	      lines: [ startLine, state.line ],
	      level: state.level
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: content,
	      level: state.level + 1,
	      lines: [ startLine, state.line ],
	      children: []
	    });
	    state.tokens.push({
	      type: 'paragraph_close',
	      tight: false,
	      level: state.level
	    });
	  }
	
	  return true;
	};


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var Ruler       = __webpack_require__(236);
	var StateInline = __webpack_require__(239);
	var utils       = __webpack_require__(231);
	
	/**
	 * Inline Parser `rules`
	 */
	
	var _rules = [
	  [ 'text',            __webpack_require__(269) ],
	  [ 'newline',         __webpack_require__(270) ],
	  [ 'escape',          __webpack_require__(271) ],
	  [ 'backticks',       __webpack_require__(272) ],
	  [ 'del',             __webpack_require__(273) ],
	  [ 'ins',             __webpack_require__(274) ],
	  [ 'mark',            __webpack_require__(275) ],
	  [ 'emphasis',        __webpack_require__(276) ],
	  [ 'sub',             __webpack_require__(277) ],
	  [ 'sup',             __webpack_require__(278) ],
	  [ 'links',           __webpack_require__(279) ],
	  [ 'footnote_inline', __webpack_require__(280) ],
	  [ 'footnote_ref',    __webpack_require__(281) ],
	  [ 'autolink',        __webpack_require__(282) ],
	  [ 'htmltag',         __webpack_require__(284) ],
	  [ 'entity',          __webpack_require__(286) ]
	];
	
	/**
	 * Inline Parser class. Note that link validation is stricter
	 * in Remarkable than what is specified by CommonMark. If you
	 * want to change this you can use a custom validator.
	 *
	 * @api private
	 */
	
	function ParserInline() {
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }
	
	  // Can be overridden with a custom validator
	  this.validateLink = validateLink;
	}
	
	/**
	 * Skip a single token by running all rules in validation mode.
	 * Returns `true` if any rule reports success.
	 *
	 * @param  {Object} `state`
	 * @api privage
	 */
	
	ParserInline.prototype.skipToken = function (state) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var pos = state.pos;
	  var i, cached_pos;
	
	  if ((cached_pos = state.cacheGet(pos)) > 0) {
	    state.pos = cached_pos;
	    return;
	  }
	
	  for (i = 0; i < len; i++) {
	    if (rules[i](state, true)) {
	      state.cacheSet(pos, state.pos);
	      return;
	    }
	  }
	
	  state.pos++;
	  state.cacheSet(pos, state.pos);
	};
	
	/**
	 * Generate tokens for the given input range.
	 *
	 * @param  {Object} `state`
	 * @api private
	 */
	
	ParserInline.prototype.tokenize = function (state) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var end = state.posMax;
	  var ok, i;
	
	  while (state.pos < end) {
	
	    // Try all possible rules.
	    // On success, the rule should:
	    //
	    // - update `state.pos`
	    // - update `state.tokens`
	    // - return true
	    for (i = 0; i < len; i++) {
	      ok = rules[i](state, false);
	
	      if (ok) {
	        break;
	      }
	    }
	
	    if (ok) {
	      if (state.pos >= end) { break; }
	      continue;
	    }
	
	    state.pending += state.src[state.pos++];
	  }
	
	  if (state.pending) {
	    state.pushPending();
	  }
	};
	
	/**
	 * Parse the given input string.
	 *
	 * @param  {String} `str`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @param  {Array} `outTokens`
	 * @api private
	 */
	
	ParserInline.prototype.parse = function (str, options, env, outTokens) {
	  var state = new StateInline(str, this, options, env, outTokens);
	  this.tokenize(state);
	};
	
	/**
	 * Validate the given `url` by checking for bad protocols.
	 *
	 * @param  {String} `url`
	 * @return {Boolean}
	 */
	
	function validateLink(url) {
	  var BAD_PROTOCOLS = [ 'vbscript', 'javascript', 'file', 'data' ];
	  var str = url.trim().toLowerCase();
	  // Care about digital entities "javascript&#x3A;alert(1)"
	  str = utils.replaceEntities(str);
	  if (str.indexOf(':') !== -1 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) !== -1) {
	    return false;
	  }
	  return true;
	}
	
	/**
	 * Expose `ParserInline`
	 */
	
	module.exports = ParserInline;


/***/ }),
/* 269 */
/***/ (function(module, exports) {

	// Skip text characters for text token, place those to pending buffer
	// and increment current pos
	
	'use strict';
	
	// Rule to skip pure text
	// '{}$%@~+=:' reserved for extentions
	
	function isTerminatorChar(ch) {
	  switch (ch) {
	    case 0x0A/* \n */:
	    case 0x5C/* \ */:
	    case 0x60/* ` */:
	    case 0x2A/* * */:
	    case 0x5F/* _ */:
	    case 0x5E/* ^ */:
	    case 0x5B/* [ */:
	    case 0x5D/* ] */:
	    case 0x21/* ! */:
	    case 0x26/* & */:
	    case 0x3C/* < */:
	    case 0x3E/* > */:
	    case 0x7B/* { */:
	    case 0x7D/* } */:
	    case 0x24/* $ */:
	    case 0x25/* % */:
	    case 0x40/* @ */:
	    case 0x7E/* ~ */:
	    case 0x2B/* + */:
	    case 0x3D/* = */:
	    case 0x3A/* : */:
	      return true;
	    default:
	      return false;
	  }
	}
	
	module.exports = function text(state, silent) {
	  var pos = state.pos;
	
	  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
	    pos++;
	  }
	
	  if (pos === state.pos) { return false; }
	
	  if (!silent) { state.pending += state.src.slice(state.pos, pos); }
	
	  state.pos = pos;
	
	  return true;
	};


/***/ }),
/* 270 */
/***/ (function(module, exports) {

	// Proceess '\n'
	
	'use strict';
	
	module.exports = function newline(state, silent) {
	  var pmax, max, pos = state.pos;
	
	  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }
	
	  pmax = state.pending.length - 1;
	  max = state.posMax;
	
	  // '  \n' -> hardbreak
	  // Lookup in pending chars is bad practice! Don't copy to other rules!
	  // Pending string is stored in concat mode, indexed lookups will cause
	  // convertion to flat mode.
	  if (!silent) {
	    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
	      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
	        // Strip out all trailing spaces on this line.
	        for (var i = pmax - 2; i >= 0; i--) {
	          if (state.pending.charCodeAt(i) !== 0x20) {
	            state.pending = state.pending.substring(0, i + 1);
	            break;
	          }
	        }
	        state.push({
	          type: 'hardbreak',
	          level: state.level
	        });
	      } else {
	        state.pending = state.pending.slice(0, -1);
	        state.push({
	          type: 'softbreak',
	          level: state.level
	        });
	      }
	
	    } else {
	      state.push({
	        type: 'softbreak',
	        level: state.level
	      });
	    }
	  }
	
	  pos++;
	
	  // skip heading spaces for next line
	  while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }
	
	  state.pos = pos;
	  return true;
	};


/***/ }),
/* 271 */
/***/ (function(module, exports) {

	// Proceess escaped chars and hardbreaks
	
	'use strict';
	
	var ESCAPED = [];
	
	for (var i = 0; i < 256; i++) { ESCAPED.push(0); }
	
	'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
	  .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });
	
	
	module.exports = function escape(state, silent) {
	  var ch, pos = state.pos, max = state.posMax;
	
	  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }
	
	  pos++;
	
	  if (pos < max) {
	    ch = state.src.charCodeAt(pos);
	
	    if (ch < 256 && ESCAPED[ch] !== 0) {
	      if (!silent) { state.pending += state.src[pos]; }
	      state.pos += 2;
	      return true;
	    }
	
	    if (ch === 0x0A) {
	      if (!silent) {
	        state.push({
	          type: 'hardbreak',
	          level: state.level
	        });
	      }
	
	      pos++;
	      // skip leading whitespaces from next line
	      while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }
	
	      state.pos = pos;
	      return true;
	    }
	  }
	
	  if (!silent) { state.pending += '\\'; }
	  state.pos++;
	  return true;
	};


/***/ }),
/* 272 */
/***/ (function(module, exports) {

	// Parse backticks
	
	'use strict';
	
	module.exports = function backticks(state, silent) {
	  var start, max, marker, matchStart, matchEnd,
	      pos = state.pos,
	      ch = state.src.charCodeAt(pos);
	
	  if (ch !== 0x60/* ` */) { return false; }
	
	  start = pos;
	  pos++;
	  max = state.posMax;
	
	  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }
	
	  marker = state.src.slice(start, pos);
	
	  matchStart = matchEnd = pos;
	
	  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
	    matchEnd = matchStart + 1;
	
	    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }
	
	    if (matchEnd - matchStart === marker.length) {
	      if (!silent) {
	        state.push({
	          type: 'code',
	          content: state.src.slice(pos, matchStart)
	                              .replace(/[ \n]+/g, ' ')
	                              .trim(),
	          block: false,
	          level: state.level
	        });
	      }
	      state.pos = matchEnd;
	      return true;
	    }
	  }
	
	  if (!silent) { state.pending += marker; }
	  state.pos += marker.length;
	  return true;
	};


/***/ }),
/* 273 */
/***/ (function(module, exports) {

	// Process ~~deleted text~~
	
	'use strict';
	
	module.exports = function del(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;
	
	  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x7E/* ~ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);
	
	  if (lastChar === 0x7E/* ~ */) { return false; }
	  if (nextChar === 0x7E/* ~ */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }
	
	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x7E/* ~ */) { pos++; }
	  if (pos > start + 3) {
	    // sequence of 4+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }
	
	  state.pos = start + 2;
	  stack = 1;
	
	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x7E/* ~ */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x7E/* ~ */ && lastChar !== 0x7E/* ~ */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '~~'
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '~~'
	            stack++;
	          } // else {
	            //  // standalone ' ~~ ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;
	
	  if (!silent) {
	    state.push({ type: 'del_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'del_close', level: --state.level });
	  }
	
	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ }),
/* 274 */
/***/ (function(module, exports) {

	// Process ++inserted text++
	
	'use strict';
	
	module.exports = function ins(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;
	
	  if (state.src.charCodeAt(start) !== 0x2B/* + */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x2B/* + */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);
	
	  if (lastChar === 0x2B/* + */) { return false; }
	  if (nextChar === 0x2B/* + */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }
	
	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x2B/* + */) { pos++; }
	  if (pos !== start + 2) {
	    // sequence of 3+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }
	
	  state.pos = start + 2;
	  stack = 1;
	
	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x2B/* + */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x2B/* + */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x2B/* + */ && lastChar !== 0x2B/* + */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '++'
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '++'
	            stack++;
	          } // else {
	            //  // standalone ' ++ ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;
	
	  if (!silent) {
	    state.push({ type: 'ins_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'ins_close', level: --state.level });
	  }
	
	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ }),
/* 275 */
/***/ (function(module, exports) {

	// Process ==highlighted text==
	
	'use strict';
	
	module.exports = function del(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;
	
	  if (state.src.charCodeAt(start) !== 0x3D/* = */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x3D/* = */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);
	
	  if (lastChar === 0x3D/* = */) { return false; }
	  if (nextChar === 0x3D/* = */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }
	
	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x3D/* = */) { pos++; }
	  if (pos !== start + 2) {
	    // sequence of 3+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }
	
	  state.pos = start + 2;
	  stack = 1;
	
	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x3D/* = */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x3D/* = */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x3D/* = */ && lastChar !== 0x3D/* = */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '=='
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '=='
	            stack++;
	          } // else {
	            //  // standalone ' == ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;
	
	  if (!silent) {
	    state.push({ type: 'mark_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'mark_close', level: --state.level });
	  }
	
	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ }),
/* 276 */
/***/ (function(module, exports) {

	// Process *this* and _that_
	
	'use strict';
	
	
	function isAlphaNum(code) {
	  return (code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) ||
	         (code >= 0x41 /* A */ && code <= 0x5A /* Z */) ||
	         (code >= 0x61 /* a */ && code <= 0x7A /* z */);
	}
	
	// parse sequence of emphasis markers,
	// "start" should point at a valid marker
	function scanDelims(state, start) {
	  var pos = start, lastChar, nextChar, count,
	      can_open = true,
	      can_close = true,
	      max = state.posMax,
	      marker = state.src.charCodeAt(start);
	
	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	
	  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }
	  if (pos >= max) { can_open = false; }
	  count = pos - start;
	
	  if (count >= 4) {
	    // sequence of four or more unescaped markers can't start/end an emphasis
	    can_open = can_close = false;
	  } else {
	    nextChar = pos < max ? state.src.charCodeAt(pos) : -1;
	
	    // check whitespace conditions
	    if (nextChar === 0x20 || nextChar === 0x0A) { can_open = false; }
	    if (lastChar === 0x20 || lastChar === 0x0A) { can_close = false; }
	
	    if (marker === 0x5F /* _ */) {
	      // check if we aren't inside the word
	      if (isAlphaNum(lastChar)) { can_open = false; }
	      if (isAlphaNum(nextChar)) { can_close = false; }
	    }
	  }
	
	  return {
	    can_open: can_open,
	    can_close: can_close,
	    delims: count
	  };
	}
	
	module.exports = function emphasis(state, silent) {
	  var startCount,
	      count,
	      found,
	      oldCount,
	      newCount,
	      stack,
	      res,
	      max = state.posMax,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);
	
	  if (marker !== 0x5F/* _ */ && marker !== 0x2A /* * */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	
	  res = scanDelims(state, start);
	  startCount = res.delims;
	  if (!res.can_open) {
	    state.pos += startCount;
	    if (!silent) { state.pending += state.src.slice(start, state.pos); }
	    return true;
	  }
	
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  state.pos = start + startCount;
	  stack = [ startCount ];
	
	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === marker) {
	      res = scanDelims(state, state.pos);
	      count = res.delims;
	      if (res.can_close) {
	        oldCount = stack.pop();
	        newCount = count;
	
	        while (oldCount !== newCount) {
	          if (newCount < oldCount) {
	            stack.push(oldCount - newCount);
	            break;
	          }
	
	          // assert(newCount > oldCount)
	          newCount -= oldCount;
	
	          if (stack.length === 0) { break; }
	          state.pos += oldCount;
	          oldCount = stack.pop();
	        }
	
	        if (stack.length === 0) {
	          startCount = oldCount;
	          found = true;
	          break;
	        }
	        state.pos += count;
	        continue;
	      }
	
	      if (res.can_open) { stack.push(count); }
	      state.pos += count;
	      continue;
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + startCount;
	
	  if (!silent) {
	    if (startCount === 2 || startCount === 3) {
	      state.push({ type: 'strong_open', level: state.level++ });
	    }
	    if (startCount === 1 || startCount === 3) {
	      state.push({ type: 'em_open', level: state.level++ });
	    }
	
	    state.parser.tokenize(state);
	
	    if (startCount === 1 || startCount === 3) {
	      state.push({ type: 'em_close', level: --state.level });
	    }
	    if (startCount === 2 || startCount === 3) {
	      state.push({ type: 'strong_close', level: --state.level });
	    }
	  }
	
	  state.pos = state.posMax + startCount;
	  state.posMax = max;
	  return true;
	};


/***/ }),
/* 277 */
/***/ (function(module, exports) {

	// Process ~subscript~
	
	'use strict';
	
	// same as UNESCAPE_MD_RE plus a space
	var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
	
	module.exports = function sub(state, silent) {
	  var found,
	      content,
	      max = state.posMax,
	      start = state.pos;
	
	  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 2 >= max) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  state.pos = start + 1;
	
	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
	      found = true;
	      break;
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found || start + 1 === state.pos) {
	    state.pos = start;
	    return false;
	  }
	
	  content = state.src.slice(start + 1, state.pos);
	
	  // don't allow unescaped spaces/newlines inside
	  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 1;
	
	  if (!silent) {
	    state.push({
	      type: 'sub',
	      level: state.level,
	      content: content.replace(UNESCAPE_RE, '$1')
	    });
	  }
	
	  state.pos = state.posMax + 1;
	  state.posMax = max;
	  return true;
	};


/***/ }),
/* 278 */
/***/ (function(module, exports) {

	// Process ^superscript^
	
	'use strict';
	
	// same as UNESCAPE_MD_RE plus a space
	var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
	
	module.exports = function sup(state, silent) {
	  var found,
	      content,
	      max = state.posMax,
	      start = state.pos;
	
	  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 2 >= max) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  state.pos = start + 1;
	
	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === 0x5E/* ^ */) {
	      found = true;
	      break;
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found || start + 1 === state.pos) {
	    state.pos = start;
	    return false;
	  }
	
	  content = state.src.slice(start + 1, state.pos);
	
	  // don't allow unescaped spaces/newlines inside
	  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 1;
	
	  if (!silent) {
	    state.push({
	      type: 'sup',
	      level: state.level,
	      content: content.replace(UNESCAPE_RE, '$1')
	    });
	  }
	
	  state.pos = state.posMax + 1;
	  state.posMax = max;
	  return true;
	};


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	// Process [links](<to> "stuff")
	
	'use strict';
	
	var parseLinkLabel       = __webpack_require__(240);
	var parseLinkDestination = __webpack_require__(242);
	var parseLinkTitle       = __webpack_require__(244);
	var normalizeReference   = __webpack_require__(245);
	
	
	module.exports = function links(state, silent) {
	  var labelStart,
	      labelEnd,
	      label,
	      href,
	      title,
	      pos,
	      ref,
	      code,
	      isImage = false,
	      oldPos = state.pos,
	      max = state.posMax,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);
	
	  if (marker === 0x21/* ! */) {
	    isImage = true;
	    marker = state.src.charCodeAt(++start);
	  }
	
	  if (marker !== 0x5B/* [ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  labelStart = start + 1;
	  labelEnd = parseLinkLabel(state, start);
	
	  // parser failed to find ']', so it's not a valid link
	  if (labelEnd < 0) { return false; }
	
	  pos = labelEnd + 1;
	  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
	    //
	    // Inline link
	    //
	
	    // [link](  <href>  "title"  )
	    //        ^^ skipping these spaces
	    pos++;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }
	    if (pos >= max) { return false; }
	
	    // [link](  <href>  "title"  )
	    //          ^^^^^^ parsing link destination
	    start = pos;
	    if (parseLinkDestination(state, pos)) {
	      href = state.linkContent;
	      pos = state.pos;
	    } else {
	      href = '';
	    }
	
	    // [link](  <href>  "title"  )
	    //                ^^ skipping these spaces
	    start = pos;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }
	
	    // [link](  <href>  "title"  )
	    //                  ^^^^^^^ parsing link title
	    if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
	      title = state.linkContent;
	      pos = state.pos;
	
	      // [link](  <href>  "title"  )
	      //                         ^^ skipping these spaces
	      for (; pos < max; pos++) {
	        code = state.src.charCodeAt(pos);
	        if (code !== 0x20 && code !== 0x0A) { break; }
	      }
	    } else {
	      title = '';
	    }
	
	    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
	      state.pos = oldPos;
	      return false;
	    }
	    pos++;
	  } else {
	    //
	    // Link reference
	    //
	
	    // do not allow nested reference links
	    if (state.linkLevel > 0) { return false; }
	
	    // [foo]  [bar]
	    //      ^^ optional whitespace (can include newlines)
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }
	
	    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
	      start = pos + 1;
	      pos = parseLinkLabel(state, pos);
	      if (pos >= 0) {
	        label = state.src.slice(start, pos++);
	      } else {
	        pos = start - 1;
	      }
	    }
	
	    // covers label === '' and label === undefined
	    // (collapsed reference link and shortcut reference link respectively)
	    if (!label) {
	      if (typeof label === 'undefined') {
	        pos = labelEnd + 1;
	      }
	      label = state.src.slice(labelStart, labelEnd);
	    }
	
	    ref = state.env.references[normalizeReference(label)];
	    if (!ref) {
	      state.pos = oldPos;
	      return false;
	    }
	    href = ref.href;
	    title = ref.title;
	  }
	
	  //
	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    state.pos = labelStart;
	    state.posMax = labelEnd;
	
	    if (isImage) {
	      state.push({
	        type: 'image',
	        src: href,
	        title: title,
	        alt: state.src.substr(labelStart, labelEnd - labelStart),
	        level: state.level
	      });
	    } else {
	      state.push({
	        type: 'link_open',
	        href: href,
	        title: title,
	        level: state.level++
	      });
	      state.linkLevel++;
	      state.parser.tokenize(state);
	      state.linkLevel--;
	      state.push({ type: 'link_close', level: --state.level });
	    }
	  }
	
	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	// Process inline footnotes (^[...])
	
	'use strict';
	
	var parseLinkLabel = __webpack_require__(240);
	
	
	module.exports = function footnote_inline(state, silent) {
	  var labelStart,
	      labelEnd,
	      footnoteId,
	      oldLength,
	      max = state.posMax,
	      start = state.pos;
	
	  if (start + 2 >= max) { return false; }
	  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  labelStart = start + 2;
	  labelEnd = parseLinkLabel(state, start + 1);
	
	  // parser failed to find ']', so it's not a valid note
	  if (labelEnd < 0) { return false; }
	
	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    if (!state.env.footnotes) { state.env.footnotes = {}; }
	    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
	    footnoteId = state.env.footnotes.list.length;
	
	    state.pos = labelStart;
	    state.posMax = labelEnd;
	
	    state.push({
	      type: 'footnote_ref',
	      id: footnoteId,
	      level: state.level
	    });
	    state.linkLevel++;
	    oldLength = state.tokens.length;
	    state.parser.tokenize(state);
	    state.env.footnotes.list[footnoteId] = { tokens: state.tokens.splice(oldLength) };
	    state.linkLevel--;
	  }
	
	  state.pos = labelEnd + 1;
	  state.posMax = max;
	  return true;
	};


/***/ }),
/* 281 */
/***/ (function(module, exports) {

	// Process footnote references ([^...])
	
	'use strict';
	
	
	module.exports = function footnote_ref(state, silent) {
	  var label,
	      pos,
	      footnoteId,
	      footnoteSubId,
	      max = state.posMax,
	      start = state.pos;
	
	  // should be at least 4 chars - "[^x]"
	  if (start + 3 > max) { return false; }
	
	  if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
	  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  for (pos = start + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x20) { return false; }
	    if (state.src.charCodeAt(pos) === 0x0A) { return false; }
	    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
	      break;
	    }
	  }
	
	  if (pos === start + 2) { return false; } // no empty footnote labels
	  if (pos >= max) { return false; }
	  pos++;
	
	  label = state.src.slice(start + 2, pos - 1);
	  if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }
	
	  if (!silent) {
	    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
	
	    if (state.env.footnotes.refs[':' + label] < 0) {
	      footnoteId = state.env.footnotes.list.length;
	      state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
	      state.env.footnotes.refs[':' + label] = footnoteId;
	    } else {
	      footnoteId = state.env.footnotes.refs[':' + label];
	    }
	
	    footnoteSubId = state.env.footnotes.list[footnoteId].count;
	    state.env.footnotes.list[footnoteId].count++;
	
	    state.push({
	      type: 'footnote_ref',
	      id: footnoteId,
	      subId: footnoteSubId,
	      level: state.level
	    });
	  }
	
	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	// Process autolinks '<protocol:...>'
	
	'use strict';
	
	var url_schemas   = __webpack_require__(283);
	var normalizeLink = __webpack_require__(243);
	
	
	/*eslint max-len:0*/
	var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
	var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
	
	
	module.exports = function autolink(state, silent) {
	  var tail, linkMatch, emailMatch, url, fullUrl, pos = state.pos;
	
	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }
	
	  tail = state.src.slice(pos);
	
	  if (tail.indexOf('>') < 0) { return false; }
	
	  linkMatch = tail.match(AUTOLINK_RE);
	
	  if (linkMatch) {
	    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }
	
	    url = linkMatch[0].slice(1, -1);
	    fullUrl = normalizeLink(url);
	    if (!state.parser.validateLink(url)) { return false; }
	
	    if (!silent) {
	      state.push({
	        type: 'link_open',
	        href: fullUrl,
	        level: state.level
	      });
	      state.push({
	        type: 'text',
	        content: url,
	        level: state.level + 1
	      });
	      state.push({ type: 'link_close', level: state.level });
	    }
	
	    state.pos += linkMatch[0].length;
	    return true;
	  }
	
	  emailMatch = tail.match(EMAIL_RE);
	
	  if (emailMatch) {
	
	    url = emailMatch[0].slice(1, -1);
	
	    fullUrl = normalizeLink('mailto:' + url);
	    if (!state.parser.validateLink(fullUrl)) { return false; }
	
	    if (!silent) {
	      state.push({
	        type: 'link_open',
	        href: fullUrl,
	        level: state.level
	      });
	      state.push({
	        type: 'text',
	        content: url,
	        level: state.level + 1
	      });
	      state.push({ type: 'link_close', level: state.level });
	    }
	
	    state.pos += emailMatch[0].length;
	    return true;
	  }
	
	  return false;
	};


/***/ }),
/* 283 */
/***/ (function(module, exports) {

	// List of valid url schemas, accorting to commonmark spec
	// http://jgm.github.io/CommonMark/spec.html#autolinks
	
	'use strict';
	
	
	module.exports = [
	  'coap',
	  'doi',
	  'javascript',
	  'aaa',
	  'aaas',
	  'about',
	  'acap',
	  'cap',
	  'cid',
	  'crid',
	  'data',
	  'dav',
	  'dict',
	  'dns',
	  'file',
	  'ftp',
	  'geo',
	  'go',
	  'gopher',
	  'h323',
	  'http',
	  'https',
	  'iax',
	  'icap',
	  'im',
	  'imap',
	  'info',
	  'ipp',
	  'iris',
	  'iris.beep',
	  'iris.xpc',
	  'iris.xpcs',
	  'iris.lwz',
	  'ldap',
	  'mailto',
	  'mid',
	  'msrp',
	  'msrps',
	  'mtqp',
	  'mupdate',
	  'news',
	  'nfs',
	  'ni',
	  'nih',
	  'nntp',
	  'opaquelocktoken',
	  'pop',
	  'pres',
	  'rtsp',
	  'service',
	  'session',
	  'shttp',
	  'sieve',
	  'sip',
	  'sips',
	  'sms',
	  'snmp',
	  'soap.beep',
	  'soap.beeps',
	  'tag',
	  'tel',
	  'telnet',
	  'tftp',
	  'thismessage',
	  'tn3270',
	  'tip',
	  'tv',
	  'urn',
	  'vemmi',
	  'ws',
	  'wss',
	  'xcon',
	  'xcon-userid',
	  'xmlrpc.beep',
	  'xmlrpc.beeps',
	  'xmpp',
	  'z39.50r',
	  'z39.50s',
	  'adiumxtra',
	  'afp',
	  'afs',
	  'aim',
	  'apt',
	  'attachment',
	  'aw',
	  'beshare',
	  'bitcoin',
	  'bolo',
	  'callto',
	  'chrome',
	  'chrome-extension',
	  'com-eventbrite-attendee',
	  'content',
	  'cvs',
	  'dlna-playsingle',
	  'dlna-playcontainer',
	  'dtn',
	  'dvb',
	  'ed2k',
	  'facetime',
	  'feed',
	  'finger',
	  'fish',
	  'gg',
	  'git',
	  'gizmoproject',
	  'gtalk',
	  'hcp',
	  'icon',
	  'ipn',
	  'irc',
	  'irc6',
	  'ircs',
	  'itms',
	  'jar',
	  'jms',
	  'keyparc',
	  'lastfm',
	  'ldaps',
	  'magnet',
	  'maps',
	  'market',
	  'message',
	  'mms',
	  'ms-help',
	  'msnim',
	  'mumble',
	  'mvn',
	  'notes',
	  'oid',
	  'palm',
	  'paparazzi',
	  'platform',
	  'proxy',
	  'psyc',
	  'query',
	  'res',
	  'resource',
	  'rmi',
	  'rsync',
	  'rtmp',
	  'secondlife',
	  'sftp',
	  'sgn',
	  'skype',
	  'smb',
	  'soldat',
	  'spotify',
	  'ssh',
	  'steam',
	  'svn',
	  'teamspeak',
	  'things',
	  'udp',
	  'unreal',
	  'ut2004',
	  'ventrilo',
	  'view-source',
	  'webcal',
	  'wtai',
	  'wyciwyg',
	  'xfire',
	  'xri',
	  'ymsgr'
	];


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	// Process html tags
	
	'use strict';
	
	
	var HTML_TAG_RE = __webpack_require__(285).HTML_TAG_RE;
	
	
	function isLetter(ch) {
	  /*eslint no-bitwise:0*/
	  var lc = ch | 0x20; // to lower case
	  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
	}
	
	
	module.exports = function htmltag(state, silent) {
	  var ch, match, max, pos = state.pos;
	
	  if (!state.options.html) { return false; }
	
	  // Check start
	  max = state.posMax;
	  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
	      pos + 2 >= max) {
	    return false;
	  }
	
	  // Quick fail on second char
	  ch = state.src.charCodeAt(pos + 1);
	  if (ch !== 0x21/* ! */ &&
	      ch !== 0x3F/* ? */ &&
	      ch !== 0x2F/* / */ &&
	      !isLetter(ch)) {
	    return false;
	  }
	
	  match = state.src.slice(pos).match(HTML_TAG_RE);
	  if (!match) { return false; }
	
	  if (!silent) {
	    state.push({
	      type: 'htmltag',
	      content: state.src.slice(pos, pos + match[0].length),
	      level: state.level
	    });
	  }
	  state.pos += match[0].length;
	  return true;
	};


/***/ }),
/* 285 */
/***/ (function(module, exports) {

	// Regexps to match html elements
	
	'use strict';
	
	
	function replace(regex, options) {
	  regex = regex.source;
	  options = options || '';
	
	  return function self(name, val) {
	    if (!name) {
	      return new RegExp(regex, options);
	    }
	    val = val.source || val;
	    regex = regex.replace(name, val);
	    return self;
	  };
	}
	
	
	var attr_name     = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;
	
	var unquoted      = /[^"'=<>`\x00-\x20]+/;
	var single_quoted = /'[^']*'/;
	var double_quoted = /"[^"]*"/;
	
	/*eslint no-spaced-func:0*/
	var attr_value  = replace(/(?:unquoted|single_quoted|double_quoted)/)
	                    ('unquoted', unquoted)
	                    ('single_quoted', single_quoted)
	                    ('double_quoted', double_quoted)
	                    ();
	
	var attribute   = replace(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)
	                    ('attr_name', attr_name)
	                    ('attr_value', attr_value)
	                    ();
	
	var open_tag    = replace(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)
	                    ('attribute', attribute)
	                    ();
	
	var close_tag   = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
	var comment     = /<!--([^-]+|[-][^-]+)*-->/;
	var processing  = /<[?].*?[?]>/;
	var declaration = /<![A-Z]+\s+[^>]*>/;
	var cdata       = /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/;
	
	var HTML_TAG_RE = replace(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)
	  ('open_tag', open_tag)
	  ('close_tag', close_tag)
	  ('comment', comment)
	  ('processing', processing)
	  ('declaration', declaration)
	  ('cdata', cdata)
	  ();
	
	
	module.exports.HTML_TAG_RE = HTML_TAG_RE;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	// Process html entity - &#123;, &#xAF;, &quot;, ...
	
	'use strict';
	
	var entities          = __webpack_require__(232);
	var has               = __webpack_require__(231).has;
	var isValidEntityCode = __webpack_require__(231).isValidEntityCode;
	var fromCodePoint     = __webpack_require__(231).fromCodePoint;
	
	
	var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
	var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;
	
	
	module.exports = function entity(state, silent) {
	  var ch, code, match, pos = state.pos, max = state.posMax;
	
	  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }
	
	  if (pos + 1 < max) {
	    ch = state.src.charCodeAt(pos + 1);
	
	    if (ch === 0x23 /* # */) {
	      match = state.src.slice(pos).match(DIGITAL_RE);
	      if (match) {
	        if (!silent) {
	          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
	          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
	        }
	        state.pos += match[0].length;
	        return true;
	      }
	    } else {
	      match = state.src.slice(pos).match(NAMED_RE);
	      if (match) {
	        if (has(entities, match[1])) {
	          if (!silent) { state.pending += entities[match[1]]; }
	          state.pos += match[0].length;
	          return true;
	        }
	      }
	    }
	  }
	
	  if (!silent) { state.pending += '&'; }
	  state.pos++;
	  return true;
	};


/***/ }),
/* 287 */
/***/ (function(module, exports) {

	// Remarkable default options
	
	'use strict';
	
	
	module.exports = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links
	    linkTarget:   '',           // set target to open link in
	
	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,
	
	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes: '“”‘’',
	
	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,
	
	    maxNesting:   20            // Internal protection, recursion limit
	  },
	
	  components: {
	
	    core: {
	      rules: [
	        'block',
	        'inline',
	        'references',
	        'replacements',
	        'linkify',
	        'smartquotes',
	        'references',
	        'abbr2',
	        'footnote_tail'
	      ]
	    },
	
	    block: {
	      rules: [
	        'blockquote',
	        'code',
	        'fences',
	        'footnote',
	        'heading',
	        'hr',
	        'htmlblock',
	        'lheading',
	        'list',
	        'paragraph',
	        'table'
	      ]
	    },
	
	    inline: {
	      rules: [
	        'autolink',
	        'backticks',
	        'del',
	        'emphasis',
	        'entity',
	        'escape',
	        'footnote_ref',
	        'htmltag',
	        'links',
	        'newline',
	        'text'
	      ]
	    }
	  }
	};


/***/ }),
/* 288 */
/***/ (function(module, exports) {

	// Remarkable default options
	
	'use strict';
	
	
	module.exports = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links
	    linkTarget:   '',           // set target to open link in
	
	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,
	
	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes:       '“”‘’',
	
	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight:     null,
	
	    maxNesting:    20            // Internal protection, recursion limit
	  },
	
	  components: {
	    // Don't restrict core/block/inline rules
	    core: {},
	    block: {},
	    inline: {}
	  }
	};


/***/ }),
/* 289 */
/***/ (function(module, exports) {

	// Commonmark default options
	
	'use strict';
	
	
	module.exports = {
	  options: {
	    html:         true,         // Enable HTML tags in source
	    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links
	    linkTarget:   '',           // set target to open link in
	
	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,
	
	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes: '“”‘’',
	
	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,
	
	    maxNesting:   20            // Internal protection, recursion limit
	  },
	
	  components: {
	
	    core: {
	      rules: [
	        'block',
	        'inline',
	        'references',
	        'abbr2'
	      ]
	    },
	
	    block: {
	      rules: [
	        'blockquote',
	        'code',
	        'fences',
	        'heading',
	        'hr',
	        'htmlblock',
	        'lheading',
	        'list',
	        'paragraph'
	      ]
	    },
	
	    inline: {
	      rules: [
	        'autolink',
	        'backticks',
	        'emphasis',
	        'entity',
	        'escape',
	        'htmltag',
	        'links',
	        'newline',
	        'text'
	      ]
	    }
	  }
	};


/***/ })
/******/ ])
});
;
//# sourceMappingURL=PdfLibrary.js.map