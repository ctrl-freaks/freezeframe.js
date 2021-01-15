# react-freezeframe

[![npm version](https://badge.fury.io/js/react-freezeframe.svg)](https://badge.fury.io/js/react-freezeframe)
![Size](https://img.shields.io/github/size/ctrl-freaks/freezeframe.js/packages/react-freezeframe/dist/ReactFreezeframe.js.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Examples

GH Pages:

http://ctrl-freaks.github.io/freezeframe.js/react

## Project setup

```bash
npm install freezeframe react-freezeframe
```

## Basic usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import ReactFreezeframe from 'react-freezeframe';

const App = () => {
  return (
    <ReactFreezeframe src="foo.gif" />
  );
};

render(<App />, document.getElementById('root'));
```

## Advanced usage

Here's an example of passing custom options, and binding to a ref so we can manually trigger playback.

```jsx
import React { Component, createRef } from 'react';
import ReactFreezeframe from 'react-freezeframe';

class App extends Component {
  constructor(props) {
    super(props);
    this.freeze = createRef();
  }
  render() {
    return (
      <div>
        <ReactFreezeframe
          src="foo.gif"
          ref={this.freeze}
          options={{
            trigger: false,
            overlay: true
          }}
          onToggle={(items, isPlaying) => this.logEvent('toggle', items, isPlaying)}
          onStart={(items) => this.logEvent('start', items)}
          onStop={(items) => this.logEvent('stop', items)}
        />
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.toggle()}>Toggle</button>
      </div>
    );
  }
  start() {
    this.freeze.current.start();
  }
  stop() {
    this.freeze.current.stop();
  }
  toggle() {
    this.freeze.current.toggle();
  }
  logEvent(event, items, isPlaying) {
    console.log(event, items, isPlaying);
  }
}

export default App;
```

## TypeScript

Here's the same example, in TypeScript.

```tsx
import React, { Component, createRef } from 'react';
import ReactFreezeframe from 'react-freezeframe';
import { Freeze } from 'freezeframe/types'

class App extends Component {
  private freeze = createRef<ReactFreezeframe>();

  render() {
    return (
      <div>
        <ReactFreezeframe
          src="foo.gif"
          ref={this.freeze}
          options={{
            trigger: false,
            overlay: true
          }}
          onToggle={(items, isPlaying) => this.logEvent('toggle', items, isPlaying)}
          onStart={(items, isPlaying) => this.logEvent('start', items, isPlaying)}
          onStop={(items, isPlaying) => this.logEvent('stop', items, isPlaying)}
        />
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.toggle()}>Toggle</button>
      </div>
    );
  }
  start(): void {
    this.freeze.current?.start();
  }
  stop(): void {
    this.freeze.current?.stop();
  }
  toggle(): void {
    this.freeze.current?.toggle();
  }
  logEvent(event: string, items: Freeze[], isPlaying: boolean): void {
    console.log(event, items, isPlaying);
  }
}

export default App;
```

## Children

You can also pass gifs as children, they will all inherit the any options passed to the parent component.

```jsx
<ReactFreezeframe
  options={{
    trigger: 'click'
  }}
>
  <img src="foo1.gif" />
  <img src="foo2.gif" />
  <img src="foo3.gif" />
</ReactFreezeframe>
```

## Props

### Options

The `options` prop accepts all options allowed by [freezeframe core](../freezeframe#options)

```jsx
<ReactFreezeframe
  src="foo.gif"
  options={{
    overlay: true,
    trigger: 'click'
  }}
/>
```

### Callbacks

The following callback props will fire when freezeframe emits the corresponding events:

- onStart - 'start'
- onStop - 'stop'
- onToggle - 'toggle'

```jsx
<ReactFreezeframe
  src="./something.gif"
  onStart={(items) => this.onStart(items)}
  onStop={(items) => this.onStop(items)}
  onToggle={(items, isPlaying) => this.onToggle(items, isPlaying)}
/>
```

## Contributing

Assuming you have already read the [instructions](../../README.md#contributing) in the project root:

- First, `cd` into the appropriate package directory

```bash
# start webpack dev server
npm start
```

```bash
# lint and fix issues with eslint
npm run lint -- --fix
```

```bash
# build the project and examples for gh-pages
npm run build
```

Then commit your changes and submit your PR for review.

## License

react-freezeframe.js is released under the terms of the MIT License.
