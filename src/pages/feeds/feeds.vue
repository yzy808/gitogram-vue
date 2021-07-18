<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="header">
                    <div class="icon">
                        <icon name="logo" class="logo" />
                        <icon name="home" />
                        <icon name="profilePicture" />
                        <icon name="singout" />
                    </div>
                </div>
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <storyUserItem class="story-user-item"
                            :avatar="story.avatar"
                            :username="story.username"
                            @onPress="handlePress(story.id)"
                        />
                    </li>
                </ul>
            </template>
             <template #content class="post-frame">
                 <div class="frame">
                    <ul>
                        <li v-for="post in stories" :key="post.id"> <!-- v-if="post.post != undefined"    -->
                            <div id='list-wrapper' v-if="post.theme.length > 0">
                                <post
                                    :profileImg="post.avatar"
                                    :profile="post.username"
                                    :theme="post.theme"
                                    :post-text="post.post">
                                </post>
                            </div>
                        </li>
                    </ul>
                 </div>
            </template>
        </topline>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { post } from '../../components/post'
import stories from './data.json'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    post
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
