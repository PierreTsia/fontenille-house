<template>
  <div :class="['fluid', 'homePage', { isMobile: initialSize < 400 }]">
    <div
      class="jumbotron"
      :style="{ backgroundImage: `url('${jumbotronImage.url}')` }"
    >
      <InfoCard :summary="summary" />
    </div>
    <div class="photoBlock">
      <MainDescription
        class="mainDescriptionBlock"
        :content="mainDescription"
      />
      <GalleryBlock class="galleryBlock" :images="carousselImages" />
    </div>
    <div class="detailsBlock">
      <HouseDetails :content="houseDetails" />
    </div>
    <div class="mapBlock">
      <HouseMapText :content="localisation" class="houseMapTextBlock" />
      <HouseMap class="houseMapBlock" />
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import contentful from '@/plugins/contentful.js'
import { mapGetters } from 'vuex'
import InfoCard from '@/components/InfoCard'
import GalleryBlock from '@/components/GalleryBlock'
import MainDescription from '@/components/MainDescription'
import HouseDetails from '../components/HouseDetails'
import HouseMap from '../components/HouseMap'
import HouseMapText from '../components/HouseMapText'

export default {
  components: {
    HouseDetails,
    InfoCard,
    GalleryBlock,
    MainDescription,
    HouseMap,
    HouseMapText
  },
  data() {
    return {
      initialSize: null
    }
  },
  computed: {
    ...mapGetters(['isMobile', 'isTablet', 'isDesktop', 'isWideScreen']),
    localisation() {
      return marked(this.fields.localisation)
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
    houseDetails() {
      return {
        inside: marked(this.fields.interieur),
        outside: marked(this.fields.exterieur)
      }
    },
    carousselImages() {
      return this.fields.caroussel.map(field => {
        return {
          url: field.fields.file.url,
          title: field.fields.title,
          description: field.fields.description
        }
      })
    }
  },
  async asyncData() {
    const results = await contentful.getEntry('4RnLCru9GQ1JcSVHvjY1J0')
    const { fields } = results
    return { fields }
  },
  mounted() {
    this.initialSize = window.innerWidth
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
    background-color #323837
    display grid
    grid-template-columns repeat(12, 1fr)
    .mainDescriptionBlock, .galleryBlock
      grid-column span 12
  .detailsBlock
    overflow hidden
  .mapBlock
    background-color #323837
    min-height 500px
    display grid
    grid-template-columns repeat(12, 1fr)
    .houseMapBlock, .houseMapTextBlock
      grid-column span 12
    .houseMapBlock
      min-height 500px
    .houseMapTextBlock
      min-height 300px

@media screen and (min-width 700px)
  .homePage
    .photoBlock
      .mainDescriptionBlock, .galleryBlock
        grid-column span 6
    .mapBlock
      .houseMapTextBlock
        grid-column span 4
      .houseMapBlock
        grid-column span 8
</style>
