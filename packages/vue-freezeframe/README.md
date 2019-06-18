# vue-freezeframe

[![npm version](https://badge.fury.io/js/vue-freezeframe.svg)](https://badge.fury.io/js/vue-freezeframe)
![Size](https://img.shields.io/github/size/ctrl-freaks/freezeframe.js/packages/vue-freezeframe/dist/freezeframe.umd.min.js.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Examples

http://ctrl-freaks.github.io/freezeframe.js/vue.html

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

<!-- 
### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

### Run your unit tests

```bash
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/). -->
