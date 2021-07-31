import user from './user.vue'

export default {
  title: 'user',
  component: user
}

const template = (args) => ({
  components: { user },
  setup () {
    return { args }
  },
  template: '<user v-bind="args"/>'
})

export const Default = template.bind({})

Default.args = {
  profile: 'fncolon',
  profileImg: 'https://avatars.githubusercontent.com/u/50759463?v=4'
}
