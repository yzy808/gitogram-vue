import toggler from './toggler.vue'

export default {
  title: 'toggler',
  component: toggler
}

const template = (args) => ({
  components: { toggler },
  setup () {
    return { ...args }
  },
  template: '<toggler />'
})

export const Default = template.bind({})
