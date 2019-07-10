import React from "react";
import Freezeframe from "freezeframe";

class ReactFreezeframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    }
    this.freeze = React.createRef();
  }
  componentDidMount() {
    this.$freezeframe = new Freezeframe(this.freeze.current, this.props.options)
    this.$freezeframe.on("toggle", (items, isPlaying) => {
      const event = isPlaying ? 'Start' : 'Stop';
      if (this.props[`on${event}`] instanceof Function) {
        this.props[`on${event}`](items, isPlaying);
      }
      if (this.props.onToggle instanceof Function) {
        this.props.onToggle(items, isPlaying);
      }
    });
  }
  render() {
    const { children, alt, src } = this.props;
    return (
      <div className="react-freezeframe">
        {
          children
            ? <div ref={this.freeze}>
              {children}
            </div>
          : <img
            ref={this.freeze}
            alt={alt}
            src={src}
          />
        }
      </div>
    );
  }
  start() {
    this.$freezeframe.start();
    this.setState({
      isPlaying: true
    });
  }
  stop() {
    this.$freezeframe.stop();
    this.setState({
      isPlaying: false
    });
  }
  toggle() {
    if (this.state.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }
}

export default ReactFreezeframe;
