<template>
  <div class="houseDetails__menu">
    <div
      :class="[
        'houseDetails__menu__section',
        'background',
        { '--inside': isActive('inside'), '--outside': isActive('outside') }
      ]"
    >
      <template>
        <h1 class="menu">
          <div
            :class="['menu__item', { '--isActive': isActive('outside') }]"
            @click="setActiveMenu('outside')"
          >
            Extérieur
          </div>
          <span class="menu__separator accent--text">
            /
          </span>
          <div
            :class="['menu__item', { '--isActive': isActive('inside') }]"
            @click="setActiveMenu('inside')"
          >
            Intérieur
          </div>
        </h1>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HouseDetailsMenu',
  data() {
    return {
      activeMenu: 'inside'
    }
  },
  methods: {
    isActive(option) {
      return this.activeMenu === option
    },
    setActiveMenu(option) {
      this.activeMenu = option
    }
  }
}
</script>
<style lang="stylus">
.houseDetails__menu
  .menu
    display flex
    align-items center
    .menu__item
      font-weight 900
      cursor pointer
      color white
      opacity 0.6
      transition font-size 0.2s
      display flex
      justify-content center
      align-items center
      &.--isActive
        opacity 1
        font-size 1.1em
      &:hover
        color #F66D3B
        opacity 1
        font-size 1.1em
    .menu__separator
      font-size 2em
      font-weight 900
      margin 0 10px
@media screen and (max-width:900px)
  .houseDetails__menu
    position relative
    .houseDetails__menu__section.background
      width 100%
      height 15vh
      position relative
      display flex
      align-items center
      justify-content center
      & > *
        z-index:200
        position relative
      &:before
        content ""
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background-size cover
        background-position 50% 50%
      &:after
        background-color black
        content ""
        opacity 0.8
        top 0
        left 0
        width 100%
        height 100%
        position absolute
        z-index 11
      &.--outside
        &:before
          background-image url('../static/bg_outside.jpg')
      &.--inside
        &:before
          background-image url('../static/bg_inside.jpg')

@media screen and (min-width: 901px)
  .houseDetails__menu
    position relative
    .houseDetails__menu__section.background
      width 50%
      height 600px
      float left
      left 0
      position relative
      display flex
      justify-content center
      align-items center
      & > *
        z-index:200
        position relative
      &:before
        content ""
        background-size cover
        background-position 50% 50%
        transform skewX(-9deg)
        position absolute
        top -2px
        left -50px
        bottom 0
        right 0
        z-index 10
      &:after
        background-color black
        content ""
        opacity 0.8
        transform skewX(-9deg)
        position absolute
        top -2px
        left -70px
        bottom 0
        right 0
        z-index 11
      &.--outside
        &:before
          background-image url('../static/bg_outside.jpg')
      &.--inside
        &:before
          background-image url('../static/bg_inside.jpg')
</style>
