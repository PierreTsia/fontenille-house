<template>
  <div class="houseDetailsText">
    <div
      v-if="houseDetailsActiveMenu === 'outside'"
      v-html="content.outside"
      class="houseDetailsText__content"
    ></div>
    <div v-else v-html="content.inside" class="houseDetailsText__content"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HouseDetailsText',
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters(['houseDetailsActiveMenu'])
  }
}
</script>
<style lang="stylus">
.houseDetailsText
 .houseDetailsText__content
   ul
    li
      margin-bottom 20px
      font-size 18px
     p
      line-height 1.3
     strong
      color #F66D3B
      font-size 1.2em

@media screen and (min-width 900px)
  .houseDetailsText
    .houseDetailsText__content
      ul
        li
          margin-bottom 10px
          font-size 14px
        p
          line-height 1.2
        strong
          color #F66D3B
          font-size 1.2em
</style>
