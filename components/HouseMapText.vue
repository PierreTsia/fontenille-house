<template>
  <div class="houseMapText">
    <h2 class="white--text display-1 font-weight-bold">
      <v-icon color="accent" size="48">place</v-icon>
      Localisation
    </h2>
    <div v-html="content" class="houseMapText__content"></div>
  </div>
</template>

<script>
export default {
  name: 'HouseMapText',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selected: []
    }
  }
}
</script>

<style lang="stylus">
.houseMapText
  width 100%
  height 100%
  padding 0
  padding-top 20px
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  justify-content center
  position relative
  h2
    position absolute
    top 30px
    left 0
    width 100%
    text-align center
  .houseMapText__content
    width 100%
    padding 50px
    text-align center
    color white
    display flex
    flex-direction column
    align-items center
    justify-content center
    h3
      color rgba(#F66D3B, 0.8)
      font-size 1.2em
      font-weight 900
      margin-bottom 20px
    ul
      flex-grow 1
      display flex
      flex-direction column
      align-items center
      justify-content center
</style>
