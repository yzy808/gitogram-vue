<template>
    <div class="post">
        <header class="header">
            <div class="profile">
                <img :src="profileImg" class="profile-img" alt="username avatar" />
                <div class="profile-name">{{ profile }}</div>
            </div>
            <div name="postItem" class="post-item">
                <div class="theme">{{ theme }}</div>
                <div class="post-text">{{ postText }}</div>
            </div>
        </header>
        <footer>
            <feed />
        </footer>
    </div>
</template>

<script>
import { feed } from '../feed'
export default {
  props: {
    profile: {
      type: String,
      required: true
    },
    postText: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    },
    profileImg: {
      type: String,
      required: true
    }
  },
  components: {
    feed
  }
}
</script>

<style lang="scss" scoped src="./post.scss"></style>
