<template>
  <div class="vue-freezeframe" v-if="ready">
    <slot v-if="$slots.default" />
    <img v-else-if="src" ref="img" :src="src" />
  </div>
</template>

<script lang="ts">
import Freezeframe from 'freezeframe'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { FreezeframeOptions, Freeze } from 'freezeframe/types'

@Component({
  props: {
    src: [String, Object],
    options: Object,
  },
})
export default class VueFreezeframe extends Vue {
  // props
  src?: string
  options?: FreezeframeOptions

  // data
  ready = false
  isPlaying = false
  $freezeframe?: Freezeframe

  $refs!: {
    img: HTMLImageElement
  }

  @Watch('src')
  onSrcChanged() {
    this.reset()
  }

  @Watch('options')
  onOptionsChanged() {
    this.reset()
  }

  mounted() {
    this.init()
  }

  beforeDestroy() {
    this.removeEventListeners()
  }

  async init() {
    this.ready = true
    await this.$nextTick()
    if (this.$slots.default) {
      this.$freezeframe = new Freezeframe(this.$el, this.options)
    } else if (this.src) {
      this.$freezeframe = new Freezeframe(this.$refs.img, this.options)
    }
    this.addEventListeners()
  }

  async reset() {
    this.ready = false
    this.removeEventListeners()
    await this.$nextTick()
    this.init()
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

  removeEventListeners() {
    if (this.$freezeframe) {
      this.$freezeframe.destroy()
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
