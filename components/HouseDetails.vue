<template>
  <div class="houseDetails">
    <HouseDetailsMenu class="houseDetails__menuBlock" />
    <HouseDetailsText :content="content" class="houseDetails__textBlock" />
  </div>
</template>
<script>
import HouseDetailsMenu from '@/components/HouseDetailsMenu'
import HouseDetailsText from './HouseDetailsText'

export default {
  name: 'HouseDetails',
  components: {
    HouseDetailsText,
    HouseDetailsMenu
  },
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="stylus">
.houseDetails
  position relative
  min-height 600px
  .houseDetails__textBlock
    min-height 100%
    padding 50px
    display flex
    justify-content center
    align-items center
    min-height 600px

@media screen and (min-width 900px)
  .houseDetails
    .houseDetails__textBlock
      position absolute
      width 55%
      height 100%
      right 0
      top 0
      padding 20px 20px 10px 150px
</style>
