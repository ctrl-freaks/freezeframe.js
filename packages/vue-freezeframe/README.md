# vue-freezeframe

[![npm version](https://badge.fury.io/js/vue-freezeframe.svg)](https://badge.fury.io/js/vue-freezeframe)
![Size](https://img.shields.io/github/size/ctrl-freaks/freezeframe.js/packages/vue-freezeframe/dist/vue-freezeframe.umd.min.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Examples

GH Pages:

http://ctrl-freaks.github.io/freezeframe.js/vue

Codesandbox:

https://codesandbox.io/s/vue-freezeframe-demo-jibmp

## TypeScript

`vue-freezeframe` is now written in TypeScript! The library will still support usage in JavaScript, but if your project uses TypeScript, you'll have access to Freezeframe's type definitions, improved input validation, and depending on your IDE/text editor, autocompletion/intellisense.

For advanced use cases, take a look at the [demo source](./src/App.vue), or take a look at the [types exported from Freezeframe](../freezeframe/types).

## Project setup

```bash
npm install vue-freezeframe
```

## Install globally

```js
// main.ts / main.js

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

TypeScript:

```html
<template>
  <vue-freezeframe src="./something.gif" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VueFreezeframe } from 'vue-freezeframe'

@Component({
  components: {
    VueFreezeframe,
  },
})
export default class App extends Vue {}
</script>
```

JavaScript:

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

## Options

The `options` prop accepts all options allowed by [freezeframe core](../freezeframe#options)

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

Assuming you have already read the [instructions](../../README.md#contributing) in the project root:

- First, `cd` into the appropriate package directory

```bash
# start webpack dev server
yarn start # of npm start
```

```bash
# lint and fix issues with eslint
yarn lint # or npm run lint
```

```bash
# build the project and examples for gh-pages
yarn build # or npm run build
```

Then commit your changes and submit your PR for review.

## License

`vue-freezeframe` is released under the terms of the MIT License.
