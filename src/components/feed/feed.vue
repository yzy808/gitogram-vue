<template>
    <div class="c-feed">
        <toggler @onToggle="toggle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments-item" > <!-- v-for="n in 5" :key="n" -->
                    <comment text="Enable performance measuring in production, at the user's request" username="joshua_l" />
                    <comment text="It's Impossible to Rename an Inherited Slot" username="Camille" />
                    <comment text="transition-group with flex parent causes removed items to fly" username="Marselle" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { comment } from '../comment'
import { toggler } from '../toggler'

export default {
  name: 'feed-item',
  components: {
    comment,
    toggler
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss"></style>
