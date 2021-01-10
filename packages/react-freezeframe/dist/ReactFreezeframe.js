"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createSuper"));

var _react = _interopRequireWildcard(require("react"));

var _freezeframe = _interopRequireDefault(require("freezeframe"));

var ReactFreezeframe = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ReactFreezeframe, _Component);

  var _super = (0, _createSuper2.default)(ReactFreezeframe);

  function ReactFreezeframe(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ReactFreezeframe);
    _this = _super.call(this, props);
    _this.$freezeframe = void 0;
    _this.props = void 0;
    _this.freeze = /*#__PURE__*/(0, _react.createRef)();
    _this.state = {
      isPlaying: false
    };
    _this.props = props;
    return _this;
  }

  (0, _createClass2.default)(ReactFreezeframe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.freeze.current === null) {
        throw new ReferenceError('You must provide a valid ref');
      }

      this.$freezeframe = new _freezeframe.default(this.freeze.current, this.props.options);
      this.$freezeframe.on('toggle', function (items, isPlaying) {
        if (isPlaying) {
          if (_this2.props.onStart) {
            _this2.props.onStart(items, isPlaying);
          }
        } else {
          if (_this2.props.onStop) {
            _this2.props.onStop(items, isPlaying);
          }
        }

        if (_this2.props.onToggle) {
          _this2.props.onToggle(items, isPlaying);
        }
      });
    }
  }, {
    key: "componenWillUnmount",
    value: function componenWillUnmount() {
      if (this.$freezeframe) {
        this.$freezeframe.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          alt = _this$props.alt,
          src = _this$props.src;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "react-freezeframe"
      }, children ? /*#__PURE__*/_react.default.createElement("div", {
        ref: this.freeze
      }, children) : /*#__PURE__*/_react.default.createElement("img", {
        ref: this.freeze,
        alt: alt,
        src: src
      }));
    }
  }, {
    key: "start",
    value: function start() {
      var _this$$freezeframe;

      (_this$$freezeframe = this.$freezeframe) === null || _this$$freezeframe === void 0 ? void 0 : _this$$freezeframe.start();
      this.setState({
        isPlaying: true
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this$$freezeframe2;

      (_this$$freezeframe2 = this.$freezeframe) === null || _this$$freezeframe2 === void 0 ? void 0 : _this$$freezeframe2.stop();
      this.setState({
        isPlaying: false
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.state.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
    }
  }]);
  return ReactFreezeframe;
}(_react.Component);

var _default = ReactFreezeframe;
exports.default = _default;