import actionPanel from './actionPanel.vue'

export default {
  title: 'actionPanel',
  component: actionPanel
}

const template = (args) => ({
  components: { actionPanel },
  setup () {
    return { ...args }
  },
  template: '<actionPanel v-bind="args"/>'
})

export const Default = template.bind({})
