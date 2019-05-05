<template>
  <div :class="['fluid', 'homePage', { isMobile: initialSize < 400 }]">
    <div
      class="jumbotron"
      :style="{ backgroundImage: `url('${jumbotronImage.url}')` }"
    >
      <InfoCard :summary="summary" />
    </div>
    <div class="photoBlock"></div>
  </div>
</template>

<script>
import marked from 'marked'
import contentful from '~/plugins/contentful.js'
import { mapGetters } from 'vuex'
import InfoCard from '@/components/InfoCard'
export default {
  components: {
    InfoCard
  },
  mounted() {
    this.initialSize = window.innerWidth
  },
  data() {
    return {
      initialSize: null
    }
  },
  computed: {
    ...mapGetters(['isMobile', 'isTablet', 'isDesktop', 'isWideScreen']),
    test() {
      return window.innerWidth
    },
    jumbotronImage() {
      return this.fields.imageAccueil.fields.file
    },
    mainTitle() {
      return this.fields.titrePrincipal
    },
    mainDescription() {
      return marked(this.fields.descriptionPrincipale)
    },
    summary() {
      return marked(this.fields.encadre)
    },
    carousselImages() {
      return this.fields.caroussel.map(field => {
        return field.fields.file.url
      })
    }
  },
  async asyncData({ params }) {
    const results = await contentful.getEntry('4RnLCru9GQ1JcSVHvjY1J0')
    const { fields } = results
    // eslint-disable-next-line
    return { fields }
  }
}
</script>
<style lang="stylus">
.homePage
  padding 0
  .jumbotron
    width 100%
    height calc(100vh - 65px)
    position relative
    background-size cover
    background-position bottom
    display flex
    align-items center
    &:not(.isMobile)
      background-position center
  .photoBlock
    height 900px
    background-color #323837
</style>
