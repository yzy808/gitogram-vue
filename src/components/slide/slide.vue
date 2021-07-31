<template>
    <div class="slide">
        <progressComp />
        <user
            :profileImg="profileImg"
            :profile="profile">
        </user>
        <div class="text"/>
        <buttonComp />
    </div>
</template>

<script>
import { user } from '../user'
import { progressComp } from '../progress'
import { buttonComp } from '../button'

export default {
  name: 'slide',
  components: {
    user,
    progressComp,
    buttonComp
  },
  data () {
    return {
      profileImg: 'https://avatars.githubusercontent.com/u/50759463?v=4',
      profile: 'fncolon'
    }
  }
}
</script>

<style lang="scss" src="./slide.scss" scoped></style>
