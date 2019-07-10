import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import Freezeframe from 'freezeframe';

var ReactFreezeframe =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactFreezeframe, _React$Component);

  function ReactFreezeframe(props) {
    var _this;

    _classCallCheck(this, ReactFreezeframe);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactFreezeframe).call(this, props));
    _this.state = {
      isPlaying: false
    };
    _this.freeze = React.createRef();
    return _this;
  }

  _createClass(ReactFreezeframe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.$freezeframe = new Freezeframe(this.freeze.current, this.props.options);
      this.$freezeframe.on('toggle', function (items, isPlaying) {
        var event = isPlaying ? 'Start' : 'Stop';

        if (_this2.props["on".concat(event)] instanceof Function) {
          _this2.props["on".concat(event)](items, isPlaying);
        }

        if (_this2.props.onToggle instanceof Function) {
          _this2.props.onToggle(items, isPlaying);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          alt = _this$props.alt,
          src = _this$props.src;
      return React.createElement("div", {
        className: "react-freezeframe"
      }, children ? React.createElement("div", {
        ref: this.freeze
      }, children) : React.createElement("img", {
        ref: this.freeze,
        alt: alt,
        src: src
      }));
    }
  }, {
    key: "start",
    value: function start() {
      this.$freezeframe.start();
      this.setState({
        isPlaying: true
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.$freezeframe.stop();
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
}(React.Component);

export default ReactFreezeframe;