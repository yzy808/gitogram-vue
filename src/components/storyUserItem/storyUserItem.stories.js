import storyUserItem from './storyUserItem.vue'

export default {
  title: 'storyUserItem',
  component: storyUserItem
}

const template = (args) => ({
  components: { storyUserItem },
  setup () {
    return { args }
  },
  template: '<storyUserItem v-bind="args"/>'
})

export const Default = template.bind({})

Default.args = {
  avatar: 'https://avatars.githubusercontent.com/u/44240293?v=4',
  username: 'Rails'
}
