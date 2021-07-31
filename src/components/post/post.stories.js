import post from './post.vue'

export default {
  title: 'post',
  component: post
}

const template = (args) => ({
  components: { post },
  setup () {
    return { args }
  },
  template: '<post v-bind="args"/>'
})

export const Default = template.bind({})

Default.args = {
  profile: 'Rails',
  postText: 'Use ESM with importmap to manage modern JavaScript in Rails without transpiling or bundling.',
  theme: 'importmap-rails',
  profileImg: 'https://avatars.githubusercontent.com/u/44240293?v=4'
}
