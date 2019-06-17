<template>
  <div id="app">
    <freezeframe src="http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/56141631e4b0095d43132f02/5614164be4b018c0454fd619/1444744841735/pool980.gif" />
    <freezeframe src="http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/55f96e21e4b0f86680e762dc/56aa551b8b38d446e39e933b/1454003533097/.gif" ref="manual" />
    <button @click="toggle">Toggle</button>
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
        this.$refs.manual.stop();
      } else {
        this.$refs.manual.start();
      }
      this.isPlaying = !this.isPlaying;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 800px;
  max-width: 100%;
  margin: 60px auto;
}
</style>
