import { PluginObject, VueConstructor } from 'vue'
import VueFreezeframe from './components/VueFreezeframe.vue'

const plugin: PluginObject<void> = {
  name: 'vue-freezeframe',
  install(Vue: VueConstructor) {
    Vue.component(this.name, VueFreezeframe)
  },
}

export default plugin

export { VueFreezeframe }
