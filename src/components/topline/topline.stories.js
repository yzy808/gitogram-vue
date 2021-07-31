import topline from './topline.vue'

export default {
  title: 'topline',
  component: topline
}

const template = (args) => ({
  components: { topline },
  setup () {
    return { args }
  },
  template: '<topline v-bind="args"/>'
})

export const Default = template.bind({})
