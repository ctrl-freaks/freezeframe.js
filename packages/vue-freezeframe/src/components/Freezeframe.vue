<template>
  <div class="vue-freezeframe">
    <img
      ref="img"
      :src="src"
    >
  </div>
</template>

<script>
import Freezeframe from 'freezeframe';

const FF = require('freezeframe');

console.log(Freezeframe, FF);

export default {
  name: 'freezeframe',
  props: {
    src: {
      type: String,
      default: null
    }
  },
  mounted() {

  }
};
</script>
