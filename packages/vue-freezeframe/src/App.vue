<template>
  <div id="app">
    <p class="bold title">vue-freezeframe</p>

    <div class="section">
      <p>natural width,<br />animate on hover.</p>

      <freezeframe src="http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/56141631e4b0095d43132f02/5614164be4b018c0454fd619/1444744841735/pool980.gif" />
    </div>
    
    <div class="section">
      <p>start/stop manually</p>

      <button @click="start">Start</button>
      <button @click="stop">Stop</button>
      <button @click="toggle">Toggle</button>

      <freezeframe src="http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/55f96e21e4b0f86680e762dc/56aa551b8b38d446e39e933b/1454003533097/.gif" ref="freeze" />
    </div>
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
</style>
