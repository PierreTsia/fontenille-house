<template>
  <div class="houseDetails">
    <HouseDetailsMenu />
  </div>
</template>
<script>
import HouseDetailsMenu from '@/components/HouseDetailsMenu'
export default {
  name: 'HouseDetails',
  components: {
    HouseDetailsMenu
  }
}
</script>
<style lang="stylus">
.houseDetails
  height 600px
</style>
