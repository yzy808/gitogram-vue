import logo from './logo.vue'

export default {
  title: 'logo',
  component: logo
}

const template = (args) => ({
  components: { logo },
  setup () {
    return { args }
  },
  template: '<logo />'
})

export const Default = template.bind({})
