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
  data() {
    return {
      isPlaying: false,
    };
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
      this.isPlaying = true;
    },
    stop() {
      this.$freezeframe.stop();
      this.isPlaying = false;
    },
    toggle() {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
    },
    addEventListeners() {
      if (this.$freezeframe) {
        this.$freezeframe.on('toggle', (items, isPlaying) => {
          const event = isPlaying ? 'start' : 'stop';
          this.$emit(event, items, isPlaying);
          this.$emit('toggle', items, isPlaying);
        });
      }
    },
  },
};
</script>
