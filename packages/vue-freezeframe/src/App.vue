<template>
  <div id="app">
    <p class="bold title">vue-freezeframe</p>

    <div class="section">
      <p>basic,<br />animate on hover.</p>

      <vue-freezeframe
        src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e9ccec212d9451d56ff9/1519814094696/Lincoln_Cinemagraph_615.gif?format=1000w"
        @toggle="(e, items, isPlaying) => logEvent('toggle', e, items, isPlaying)"
        @start="(e, items, isPlaying) => logEvent('start', e, items, isPlaying)"
        @stop="(e, items, isPlaying) => logEvent('stop', e, items, isPlaying)"
      />
    </div>

    <div class="section">
      <p>start/stop manually, with overlay</p>

      <button @click="start">Start</button>
      <button @click="stop">Stop</button>
      <button @click="toggle">Toggle</button>

      <vue-freezeframe
        src="http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/55f96e21e4b0f86680e762dc/56aa551b8b38d446e39e933b/1454003533097/.gif"
        ref="freeze"
        :options="{
          trigger: false,
          overlay: true,
        }"
        @toggle="(e, items, isPlaying) => logEvent('toggle', e, items, isPlaying)"
        @start="(e, items, isPlaying) => logEvent('start', e, items, isPlaying)"
        @stop="(e, items, isPlaying) => logEvent('stop', e, items, isPlaying)"
      />
    </div>

    <div class="section">
      <p>using slot & overlay</p>

      <vue-freezeframe class="grid" :options="{ overlay: true }">
        <div class="cell">
          <img
            src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e801085229b264ca29fc/1519577337605/download.gif?format=1000w"
          />
        </div>
        <div class="cell">
          <img
            src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e904c830257a34734ff5/1519577373504/Armani-Central-Park-6151.gif?format=1000w"
          />
        </div>
        <div class="cell">
          <img
            src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a95c231419202eb9a763970/1519814094692/tumblr_nfro6qnt591qzcq51o1_500.gif?format=750w"
          />
        </div>
        <div class="cell">
          <img
            src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a93f42471c10b0d656d1562/1519814094495/dirk-980.gif?format=1000w"
          />
        </div>
      </vue-freezeframe>
    </div>

    <div class="section">
      <p>updating props</p>

      <button @click="toggleSrc">Change src prop</button>

      <vue-freezeframe
        :src="currentSrc"
        @toggle="(e, items, isPlaying) => logEvent('toggle', e, items, isPlaying)"
        @start="(e, items, isPlaying) => logEvent('start', e, items, isPlaying)"
        @stop="(e, items, isPlaying) => logEvent('stop', e, items, isPlaying)"
      />
    </div>

    <div class="section">
      <p>destroy, remove event listeners</p>

      <button @click="visible = false">Destroy</button>

      <vue-freezeframe
        v-if="visible"
        src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e9ccec212d9451d56ff9/1519814094696/Lincoln_Cinemagraph_615.gif?format=1000w"
        @toggle="(e, items, isPlaying) => logEvent('toggle', e, items, isPlaying)"
        @start="(e, items, isPlaying) => logEvent('start', e, items, isPlaying)"
        @stop="(e, items, isPlaying) => logEvent('stop', e, items, isPlaying)"
      />
    </div>

    <p>cinemagraphs by <a href="http://www.cinemagraphs.com/">cinemagraphs.com</a></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Freeze, FreezeframeEvent } from 'freezeframe/types'
import VueFreezeframe from './components/VueFreezeframe.vue'

const TOGGLE_SRCS = [
  'https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e9ccec212d9451d56ff9/1519814094696/Lincoln_Cinemagraph_615.gif?format=1000w',
  'https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a93f42471c10b0d656d1562/1519814094495/dirk-980.gif?format=1000w',
]

@Component({
  components: {
    VueFreezeframe,
  },
})
export default class App extends Vue {
  visible = true

  currentSrcIndex = 0

  $refs!: {
    freeze: VueFreezeframe
  }

  get currentSrc() {
    return TOGGLE_SRCS[this.currentSrcIndex]
  }

  toggle() {
    this.$refs.freeze.toggle()
  }

  start() {
    this.$refs.freeze.start()
  }

  stop() {
    this.$refs.freeze.stop()
  }

  toggleSrc() {
    this.currentSrcIndex = Number(!this.currentSrcIndex)
  }

  logEvent(event: FreezeframeEvent, items: Freeze[], isPlaying: boolean) {
    console.log('Event emitted:', event, items, isPlaying); // eslint-disable-line
  }
}
</script>

<style lang="scss">
body {
  max-width: 1000px;
  margin: 0px auto;
  padding: 20px;
  font-size: 13px;
  text-align: center;
  color: #202020;
}
</style>

<style lang="scss" scoped>
a {
  color: #202020;
}

p {
  padding: 10px 0px;
  text-align: center;
  font-family: monospace;
}

button {
  width: 100px;
  margin: 0px 10px 10px 0px;
  padding: 5px 0px;
  border: 1px solid #000;
  background: #fff;
  outline: none;
  font-family: monospace;
  text-align: center;
}

button:active {
  background: #000;
  color: #fff;
}

.bold {
  font-weight: 700;
}

.italic {
  font-style: italic;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;

  .cell {
    width: calc(50% - 24px);
    height: auto;
    padding: 12px;
  }
}
</style>
