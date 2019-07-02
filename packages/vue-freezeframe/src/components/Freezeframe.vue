<template>
  <div class="vue-freezeframe">
    <slot v-if="$slots.default" />
    <img
      v-else-if="src"
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
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    if (this.$slots.default) {
      this.$freezeframe = new Freezeframe(this.$el, this.options);
    } else if (this.src) {
      this.$freezeframe = new Freezeframe(this.$refs.img, this.options);
    }
    this.addEventListeners();
  },
  methods: {
    start() {
      this.$freezeframe.start();
    },
    stop() {
      this.$freezeframe.stop();
    },
    addEventListeners() {
      if (this.$freezeframe) {
        this.$freezeframe.on('toggle', (items, isPlaying) => {
          const event = isPlaying ? 'start' : 'stop';
          this.$emit(event, items);
          this.$emit('toggle', isPlaying);
        });
      }
    },
  },
};
</script>
