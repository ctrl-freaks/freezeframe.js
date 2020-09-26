<template>
  <div class="vue-freezeframe">
    <slot v-if="$slots.default" />
    <img v-else-if="src" ref="img" :src="src" />
  </div>
</template>

<script lang="ts">
import Freezeframe from 'freezeframe'
import { Component, Vue } from 'vue-property-decorator'
import { FreezeframeOptions, Freeze } from 'freezeframe/types'

@Component({
  props: {
    src: {
      type: [String, Object],
      default: null,
    },
    options: Object,
  },
})
export default class VueFreezeframe extends Vue {
  // props
  src?: string
  options?: FreezeframeOptions

  // data
  isPlaying = false
  $freezeframe?: Freezeframe

  $refs!: {
    img: HTMLImageElement
    // $freezeframe: Freezeframe
  }

  mounted() {
    if (this.$slots.default) {
      this.$freezeframe = new Freezeframe(this.$el, this.options)
    } else if (this.src) {
      this.$freezeframe = new Freezeframe(this.$refs.img, this.options)
    }
    this.addEventListeners()
  }

  addEventListeners() {
    if (this.$freezeframe) {
      this.$freezeframe.on('toggle', (items: Freeze[], isPlaying: boolean) => {
        const event = isPlaying ? 'start' : 'stop'
        this.$emit(event, items, isPlaying)
        this.$emit('toggle', items, isPlaying)
      })
    }
  }

  start() {
    if (this.$freezeframe) {
      this.$freezeframe.start()
      this.isPlaying = true
    }
  }

  stop() {
    if (this.$freezeframe) {
      this.$freezeframe?.stop()
      this.isPlaying = false
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop()
    } else {
      this.start()
    }
  }
}
</script>
