<template>
    <div class="post">
        <header class="header">
            <div class="post-item">
                <slot name="postItem">
                    <div class="theme">{{ theme }}</div>
                    <div class="post-text">{{ postText }}</div>
                    <div class="buttons">
                        <icon name="btnCount" class="btwWithCount" />
                        <icon name="fork" class="fork" />
                    </div>
                </slot>
            </div>
        </header>
        <footer>
            <feed />
        </footer>
    </div>
</template>

<script>
import { feed } from '../feed'
import { icon } from '../../icons'

export default {
  props: {
    postText: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  components: {
    feed,
    icon
  }
}
</script>

<style lang="scss" scoped src="./post.scss"></style>
