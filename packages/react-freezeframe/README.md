# react-freezeframe

[![npm version](https://badge.fury.io/js/react-freezeframe.svg)](https://badge.fury.io/js/react-freezeframe)
![Size](https://img.shields.io/github/size/ctrl-freaks/freezeframe.js/packages/react-freezeframe/dist/freezeframe.umd.min.js.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Examples

GH Pages:

http://ctrl-freaks.github.io/freezeframe.js/react.html

## Project setup

```bash
npm install react-freezeframe
```

## Basic usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import { ReactFreezeframe } from 'react-freezeframe';

const app = () => {
  return (
    <ReactFreezeframe src="foo.gif" />
  );
});

render(<App />, document.getElementById('root'));
```

## Advanced usage

```jsx
import React from 'react';
import { render } from 'react-dom';
import { ReactFreezeframe } from 'react-freezeframe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.freeze = React.createRef();
  }
  render() {
    return (
      <div className="app">
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.toggle()}>Toggle</button>
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
}
```

## Options

The `options` prop accepts all options allowed by [freezeframe core](../freezeframe)

```html
<template>
  <vue-freezeframe
    src="./something.gif"
    :options="{
      trigger: false
    }"
  />
</template>
```

## Slot

Using the default slot, you can freeze any .gifs inside, while safely including other content too.

```html
<template>
  <vue-freezeframe
    :options="{
      trigger: 'click'
    }"
  >
    <h1>Images</h1>
    <img src="./1.gif">
    <img src="./2.gif">
    <p>
      Other content here
    </p>
  </vue-freezeframe>
</template>
```

## Events

All freezeframe events are emitted from the freezeframe component:

- start
- stop
- toggle

```html
<template>
  <vue-freezeframe
    src="./something.gif"
    @start="onStart"
    @stop="onStop"
    @toggle="onToggle"
  />
</template>
```

## Contributing

Assuming you have already read the [instructions](../../README.md) in the project root:

- First, `cd` into the appropriate package directory

```bash
# start webpack dev server
npm start
```

```bash
# build the project and examples for gh-pages
npm run build
```

Then commit your changes and submit your PR for review.

## License

vue-freezeframe.js is released under the terms of the MIT License.
