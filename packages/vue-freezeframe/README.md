# vue-freezeframe

[![npm version](https://badge.fury.io/js/vue-freezeframe.svg)](https://badge.fury.io/js/vue-freezeframe)
![Size](https://img.shields.io/github/size/ctrl-freaks/freezeframe.js/packages/vue-freezeframe/dist/freezeframe.umd.min.js.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Examples

GH Pages:

http://ctrl-freaks.github.io/freezeframe.js/vue.html

Codesandbox:

https://codesandbox.io/s/vue-freezeframe-demo-jibmp

## Project setup

```bash
npm install freezeframe vue-freezeframe
```

## Install globally

```js
// main.js

import Vue from 'vue';
import VueFreezeframe from 'vue-freezeframe';

Vue.use(VueFreezeframe);
```

```html
<!-- any component -->
<template>
  <vue-freezeframe src="./something.gif" />
</template>
```

## Local-only usage

```html
<template>
  <vue-freezeframe src="./something.gif" />
</template>

<script>
import { VueFreezeframe } from 'vue-freezeframe';

export default {
  components: {
    VueFreezeframe,
  }
};
</script>
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

## Contributing

Assuming you have already read the [instructions](../../#contributing) in the project root:

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
