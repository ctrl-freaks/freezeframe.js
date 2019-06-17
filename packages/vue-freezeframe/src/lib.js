import VueFreezeframe from './components/Freezeframe.vue';

export default {
  name: 'vue-freezeframe',
  install(Vue) {
    Vue.component(this.name, VueFreezeframe);
  },
};

export { VueFreezeframe };
