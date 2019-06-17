<template>
  <div id="app">
    <freezeframe src="http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/56141631e4b0095d43132f02/5614164be4b018c0454fd619/1444744841735/pool980.gif" />
  </div>
</template>

<script>
import Freezeframe from './components/Freezeframe.vue';

export default {
  name: 'app',
  components: {
    Freezeframe,
  },
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
