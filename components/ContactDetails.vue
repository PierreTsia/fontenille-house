<template>
  <div class="contactDetails">
    <div
      v-html="content"
      class="white--text headline contactDetails__content"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetails',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
.contactDetails
  display flex
  flex-direction column
  justify-content center
  align-items center
  .contactDetails__content
    font-size 24
    text-align center
    strong
      color #F66D3B
      font-size 0.8em
</style>
