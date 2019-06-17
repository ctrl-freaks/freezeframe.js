# vue-freezeframe

[![npm version](https://badge.fury.io/js/vue-freezeframe.svg)](https://badge.fury.io/js/vue-freezeframe)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Project setup

```bash
npm install vue-freezeframe
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
