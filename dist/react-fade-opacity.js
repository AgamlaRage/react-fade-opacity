'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sleep = exports.sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

var Fade = function (_React$Component) {
  _inherits(Fade, _React$Component);

  function Fade(props) {
    _classCallCheck(this, Fade);

    var _this2 = _possibleConstructorReturn(this, (Fade.__proto__ || Object.getPrototypeOf(Fade)).call(this, props));

    _this2.state = {
      opacity: _this2.props.in ? 0 : 1
    };

    _this2.fade = function () {
      var _this = _this2;
      var op = _this2.state.opacity;
      var timer = setInterval(function () {
        if (op <= 0.1) {
          _this.setState({ opacity: 0 });
          clearInterval(timer);
          if (typeof props.onFadeComplete === 'function') {
            props.onFadeComplete(); // custom callback
          }
        } else {
          op -= op * 0.1;
          _this.setState({ opacity: op });
        }
      }, _this2.props.interval);
    };
    _this2.unfade = function () {
      var _this = _this2;
      var op = _this2.state.opacity;
      var timer = setInterval(function () {
        if (op >= 1) {
          _this.setState({ opacity: 1 });
          clearInterval(timer);
          if (typeof props.onFadeComplete === 'function') {
            props.onFadeComplete(); // custom callback
          }
        } else {
          if (op === 0) {
            op = 0.1;
          }
          op += op * 0.1;
          _this.setState({ opacity: op });
        }
      }, _this2.props.interval);
    };
    return _this2;
  }

  _createClass(Fade, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      sleep(this.props.delay).then(function () {
        // wait the delay before starting animation
        if (_this3.props.in) {
          _this3.unfade();
        } else {
          _this3.fade();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.cloneElement(children, {
        style: { opacity: this.state.opacity }
      });
    }
  }]);

  return Fade;
}(_react2.default.Component);

Fade.propTypes = {
  in: _react2.default.PropTypes.bool,
  interval: _react2.default.PropTypes.number,
  delay: _react2.default.PropTypes.number
};
Fade.defaultProps = {
  in: false,
  interval: 50,
  delay: 6000
};


module.exports = Fade;
