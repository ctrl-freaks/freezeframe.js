<template>
  <div id="app">
    <freezeframe src="http://static1.squarespace.com/static/51c748abe4b0c275d0aa86bf/56141631e4b0095d43132f02/5614164be4b018c0454fd619/1444744841735/pool980.gif" />
  </div>
</template>

<script>
import Freezeframe from './components/Freezeframe';

export default {
  name: 'app',
  components: {
    Freezeframe
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
  margin-top: 60px;
}
</style>
