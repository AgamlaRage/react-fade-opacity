(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types")) : factory(root["react"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

var Fade = function (_React$Component) {
  _inherits(Fade, _React$Component);

  function Fade(props) {
    _classCallCheck(this, Fade);

    var _this = _possibleConstructorReturn(this, (Fade.__proto__ || Object.getPrototypeOf(Fade)).call(this, props));

    _this.state = {
      opacity: _this.props.in ? 0 : 1
    };

    _this.fade = function () {
      var opacity = _this.state.opacity;
      var _this$props = _this.props,
          interval = _this$props.interval,
          onFadeComplete = _this$props.onFadeComplete;


      var timer = setInterval(function () {
        if (opacity <= 0.1) {
          _this.setState({ opacity: 0 });
          clearInterval(timer);
          if (onFadeComplete) {
            // custom callback
            onFadeComplete();
          }
        } else {
          opacity -= opacity * 0.1;
          _this.setState({ opacity: opacity });
        }
      }, interval);
    };

    _this.unfade = function () {
      var opacity = _this.state.opacity;
      var _this$props2 = _this.props,
          interval = _this$props2.interval,
          onFadeComplete = _this$props2.onFadeComplete;


      var timer = setInterval(function () {
        if (opacity >= 1) {
          _this.setState({ opacity: 1 });
          clearInterval(timer);
          if (onFadeComplete) {
            // custom callback
            onFadeComplete();
          }
        } else {
          if (opacity === 0) {
            opacity = 0.1;
          }
          opacity += opacity * 0.1;
          _this.setState({ opacity: opacity });
        }
      }, interval);
    };
    return _this;
  }

  _createClass(Fade, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var delay = this.props.delay;


      sleep(delay).then(function () {
        // wait the delay before starting animation
        if (_this2.props.in) {
          _this2.unfade();
        } else {
          _this2.fade();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var opacity = this.state.opacity;
      var children = this.props.children;


      return _react2.default.cloneElement(children, {
        style: { opacity: opacity }
      });
    }
  }]);

  return Fade;
}(_react2.default.Component);

Fade.propTypes = {
  in: _propTypes2.default.bool,
  interval: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  chidlren: _propTypes2.default.node,
  onFadeComplete: _propTypes2.default.func
};

Fade.defaultProps = {
  in: false,
  interval: 50,
  delay: 6000
};

module.exports = Fade;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});