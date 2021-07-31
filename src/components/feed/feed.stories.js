import feed from './feed.vue'

export default {
  title: 'feed',
  component: feed
}

const template = (args) => ({
  components: { feed },
  setup () {
    return { args }
  },
  template: '<feed v-bind="args"/>'
})

export const Default = template.bind({})
