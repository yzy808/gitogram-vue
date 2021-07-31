import comment from './comment.vue'

export default {
  title: 'comment',
  component: comment
}

const template = (args) => ({
  components: { comment },
  setup () {
    return { args }
  },
  template: '<comment v-bind="args"/>'
})

export const Default = template.bind({})

Default.args = {
  username: 'joshua_l',
  text: 'Enable performance measuring in production, at the users request'
}
