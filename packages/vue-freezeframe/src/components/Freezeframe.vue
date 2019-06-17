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

export default {
  name: 'freezeframe',
  props: {
    src: {
      type: String,
      default: null,
    },
  },
  mounted() {
    this.$freezeframe = new Freezeframe(this.$refs.img);
  },
  methods: {
    start() {
      this.$freezeframe.start();
    },
    stop() {
      this.$freezeframe.stop();
    },
  },
};
</script>
