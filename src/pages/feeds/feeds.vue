<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="header">
                    <logo />
                    <actionPanel />
                </div>
            </template>
             <template #content class="post-frame">
                 <ul class="stories">
                    <li class="stories-item" v-for="story in items" :key="story.id">
                        <storyUserItem class="story-user-item"
                            :avatar="story.owner.avatar_url"
                            :username="story.owner.login"
                            @onPress="handlePress(story.id)"
                        />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="post-feed">
        <div class="frame">
            <ul class="posts">
                <li v-for="item in items" :key="item.id">
                    <div id='list-wrapper' class="list-wrapper"><!--v-if="post.theme.length > 0"-->
                        <post
                              :profileImg="item.owner.avatar_url"
                              :profile="item.owner.login"
                              :theme="item.name"
                              :postText="item.description">
                        </post>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import { post } from '../../components/post'
import { logo } from '../../components/logo'
import { actionPanel } from '../../components/actionPanel'
import * as api from '../../api'
import stories from './data.json'

export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    post,
    logo,
    actionPanel
  },
  data () {
    return {
      stories,
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
