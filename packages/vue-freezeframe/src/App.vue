<template>
  <div id="app">
    <p class="bold title">vue-freezeframe</p>

    <div class="section">
      <p>natural width,<br />animate on hover.</p>

      <freezeframe src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e9ccec212d9451d56ff9/1519814094696/Lincoln_Cinemagraph_615.gif?format=1000w" />
    </div>

    <div class="section">
      <p>start/stop manually, with overlay</p>

      <button @click="start">Start</button>
      <button @click="stop">Stop</button>
      <button @click="toggle">Toggle</button>

      <freezeframe
        src="http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/55f96e21e4b0f86680e762dc/56aa551b8b38d446e39e933b/1454003533097/.gif"
        ref="freeze"
        :options="{
          trigger: false,
          overlay: true
        }"
      />
    </div>

    <div class="section">
      <p>using slot</p>

      <freezeframe class="grid">
        <div class="cell">
          <img src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e801085229b264ca29fc/1519577337605/download.gif?format=1000w">
        </div>
        <div class="cell">
          <img src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a92e904c830257a34734ff5/1519577373504/Armani-Central-Park-6151.gif?format=1000w">
        </div>
        <div class="cell">
          <img src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a95c231419202eb9a763970/1519814094692/tumblr_nfro6qnt591qzcq51o1_500.gif?format=750w">
        </div>
        <div class="cell">
          <img src="https://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/5a9298a1c830257a3467a8de/5a93f42471c10b0d656d1562/1519814094495/dirk-980.gif?format=1000w">
        </div>
      </freezeframe>
    </div>
    <p>cinemagraphs by <a href="http://www.cinemagraphs.com/">cinemagraphs.com</a></p>
  </div>
</template>

<script>
import Freezeframe from './components/Freezeframe.vue';

export default {
  name: 'app',
  data() {
    return {
      isPlaying: false,
    };
  },
  components: {
    Freezeframe,
  },
  methods: {
    toggle() {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
      this.isPlaying = !this.isPlaying;
    },
    start() {
      this.$refs.freeze.start();
    },
    stop() {
      this.$refs.freeze.stop();
    },
  },
};
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
