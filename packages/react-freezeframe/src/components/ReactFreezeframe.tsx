import React, { Component, createRef } from 'react';
import Freezeframe from 'freezeframe';
import { FreezeframeOptions, Freeze } from 'freezeframe/types'

export type Props = {
  src?: string
  options?: FreezeframeOptions
  onStart?: (items: Freeze[], isPlaying: boolean) => void
  onStop?: (items: Freeze[], isPlaying: boolean) => void
  onToggle?: (items: Freeze[], isPlaying: boolean) => void
} & React.ImgHTMLAttributes<HTMLElement>

export type State = {
  isPlaying: boolean
}

class ReactFreezeframe extends Component<Props, State> {
  $freezeframe?: Freezeframe
  props: Props

  private freeze = createRef<HTMLDivElement & HTMLImageElement>();

  constructor(props: Props) {
    super(props);
    this.state = {
      isPlaying: false
    };
    this.props = props
  }

  componentDidMount() {
    if (this.freeze.current === null) {
      throw new ReferenceError('You must provide a valid ref')
    }
    this.$freezeframe = new Freezeframe(this.freeze.current, this.props.options);
    this.$freezeframe.on('toggle', (items: Freeze[], isPlaying: boolean) => {
      if (isPlaying) {
        if (this.props.onStart) {
          this.props.onStart(items, isPlaying)
        }
      } else {
        if (this.props.onStop) {
          this.props.onStop(items, isPlaying)
        }
      }
      if (this.props.onToggle) {
        this.props.onToggle(items, isPlaying)
      }
    });
  }

  componenWillUnmount() {
    if (this.$freezeframe) {
      this.$freezeframe.destroy();
    }
  }

  render() {
    const { children, alt, src } = this.props;
    return (
      <div className="react-freezeframe">
        { children
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

  start(): void {
    this.$freezeframe?.start();
    this.setState({
      isPlaying: true
    });
  }

  stop(): void {
    this.$freezeframe?.stop();
    this.setState({
      isPlaying: false
    });
  }

  toggle(): void {
    if (this.state.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }
}

export default ReactFreezeframe;
