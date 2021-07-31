import slide from './slide.vue'

export default {
  title: 'slide',
  component: slide
}

const template = (args) => ({
  components: { slide },
  setup () {
    return { args }
  },
  template: '<slide v-bind="args"/>'
})

export const Default = template.bind({})
