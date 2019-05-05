<template>
  <div>
    <a
      id="hamburger-icon"
      ref="hamburgerIcon"
      :class="{ active: isActive }"
      title="Menu"
      @click="isActive = !isActive"
    >
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Burger',
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    if (this.$refs && this.$refs.hamburgerIcon) {
    }
  }
}
</script>

<style scoped lang="stylus">
#hamburger-icon
  width 30px
  height 15px
  position relative
  display block
  cursor pointer
  margin auto 0
  .line
    display block
    background #ecf0f1
    width 30px
    height 3px
    position absolute
    left 0
    border-radius (3px / 2)
    transition all 0.4s
    -webkit-transition all 0.4s
    -moz-transition all 0.4s

    &.line-1
      top -1px

    &.line-2
      top 50%

    &.line-3
      top 100%


  &hover,
  &focus
    .line-1
      transform translateY(1.5px * -1)
      -webkit-transform translateY(1.5px * -1)
      -moz-transform translateY(1.5px * -1)

    .line-3
      transform translateY(1.5px)
      -webkit-transform translateY(1.5px)
      -moz-transform translateY(1.5px)


  &.active
    .line-1
      transform translateY(7.5px) translateX(0)rotate(45deg)
      -webkit-transform translateY(7.5px) translateX(0) rotate(45deg)
      -moz-transform translateY(7.5px) translateX(0) rotate(45deg)

    .line-2
      opacity 0

    .line-3
      transform translateY(7.5px * -1) translateX(0) rotate(45deg * -1)
      -webkit-transform translateY(7.5px * -1) translateX(0) rotate(45deg * -1)
      -moz-transform translateY(7.5px * -1) translateX(0) rotate(45deg * -1)




h1
  text-transform uppercase

a
  text-decoration none
  color #95a5a6
  margin 0.5em 1.5em
  display inline-block
  &hover,
  &focus
    color #ecf0f1
</style>
