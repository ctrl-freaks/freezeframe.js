import { shallowMount } from '@vue/test-utils'
import VueFreezeframe from '@/components/VueFreezeframe.vue'

const src = 'http://localhost:8080/foo.gif'

describe('VueFreezeframe.vue', () => {
  it('renders image when url is passed into src prop', () => {
    const wrapper = shallowMount(VueFreezeframe, {
      propsData: { src },
    })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toEqual(src)
    expect(wrapper.classes()).toContain('vue-freezeframe')
  })

  it('renders image when img is passed into default slot', () => {
    const wrapper = shallowMount(VueFreezeframe, {
      slots: {
        default: [`<img src="${src}" />`],
      },
    })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toEqual(src)
    expect(wrapper.classes()).toContain('vue-freezeframe')
  })

  it('renders images when multiple imgs are passed into default slot', () => {
    const wrapper = shallowMount(VueFreezeframe, {
      slots: {
        default: [`<img src="${src}" /><img src="${src}" /><img src="${src}" />`],
      },
    })
    const imgs = wrapper.findAll('img')
    expect(imgs.length).toBe(3)
    expect(imgs.at(0).attributes('src')).toEqual(src)
    expect(wrapper.classes()).toContain('vue-freezeframe')
  })
})
