<template>
  <div class="actionPanel">
    <icon name="home" />
    <icon name="profilePicture" />
    <icon name="singout" />
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'actionPanel',
  components: {
    icon
  }
}
</script>

<style lang="scss" src="./actionPanel.scss" scoped></style>
