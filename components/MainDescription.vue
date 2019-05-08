<template>
  <div class="mainDescription">
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: 'MainDescription',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
.mainDescription
  width 100%
  height 100%
  padding 20px
  display flex
  align-items center
  .content
    padding 0 20px
    text-align center
    color white
    strong
      color #F66D3B
      font-size 1.1em

 @media screen and (min-width: 1024px)
    .mainDescription
      .content
        font-size 18px

 @media screen and (min-width: 1440px)
   .mainDescription
     .content
       font-size 24px
</style>
