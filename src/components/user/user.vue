<template>
    <div class="profile">
        <img :src="profileImg" class="profile-img"/>
        <div class="profile-name">{{ profile }}</div>
    </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: String,
      required: true
    },
    profileImg: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./user.scss"></style>
