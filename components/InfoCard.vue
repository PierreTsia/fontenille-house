<template>
  <div :class="['infoCard']">
    <h1 class="mainTitle font-weight-bold white--text">
      MAISON A VENDRE
    </h1>
    <h2 class="subTitle font-weight-thin white--text">Fontenille, Charente</h2>
    <div class="summary" v-html="summary"></div>
    <div class="callToAction">
      <v-btn color="accent" class="white--text">Contact</v-btn>
      <v-btn outline color="accent">Voir plus</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InfoCard',
  props: ['summary'],
  computed: {
    ...mapGetters(['isMobile', 'isTablet'])
  }
}
</script>

<style lang="stylus">
.infoCard
  background rgba(black, .6)
  height 100%
  width 100%
  display flex
  flex-direction column
  justify-content center
  .mainTitle
    text-align center
    font-size 45px
    padding-top 30px
  .subTitle
    text-align center
  .summary
    color white
    padding 30px
    flex-grow 1
    display flex
    flex-direction column
    justify-content center
    strong
      &:before
        content:"\003e"
        font-size 20px
        margin-right 10px
        color #F66D3B
  .callToAction
    width 100%
    flex-grow 1
    display flex
    justify-content center
    align-items center

@media screen and (min-width: 600px)
 .infoCard
   width 40%
   height 80%
   margin-left 50px
   max-width 570px
   min-width 280px
   border-radius 10px
   .callToAction
     padding 10px
</style>
