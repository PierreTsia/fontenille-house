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
      <Carousel class="carouselBlock" :images="carousselImages" />
    </div>
    <div class="detailsBlock">
      <HouseDetails :content="houseDetails" />
    </div>
    <div class="mapBlock">
      <HouseMapText :content="localisation" class="houseMapTextBlock" />
      <HouseMap class="houseMapBlock" />
    </div>
    <div class="footerBlock">
      <div class="footerBlock__header white--text display-1 font-weight-bold">
        <v-icon color="accent" size="48">perm_phone_msg</v-icon>
        Contact
      </div>
      <ContactDetails :content="contactDetails" class="contactDetailsBlock" />
      <ContactForm class="contactFormBlock" />
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import contentful from '@/plugins/contentful.js'
import { mapGetters } from 'vuex'
import InfoCard from '@/components/InfoCard'
import Carousel from '@/components/Carousel'
import MainDescription from '@/components/MainDescription'
import HouseDetails from '../components/HouseDetails'
import HouseMap from '../components/HouseMap'
import HouseMapText from '../components/HouseMapText'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'

export default {
  components: {
    HouseDetails,
    InfoCard,
    Carousel,
    MainDescription,
    HouseMap,
    HouseMapText,
    ContactForm,
    ContactDetails
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
    contactDetails() {
      return marked(this.fields.contactDetails)
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
    .mainDescriptionBlock, .carouselBlock
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
  .footerBlock
      grid-column span 12
      min-height 300px
      background-color black
      color white
      display grid
      grid-template-columns repeat(12, 1fr)
      .footerBlock__header
        grid-column span 12
        text-align center
        padding 20px
      .contactDetailsBlock, .contactFormBlock
        grid-column span 12
        min-height 300px
      .contactDetailsBlock
        position relative
        min-height 200px
        &:after
          content ''
          position absolute
          top 25%
          right 0
          height 50%
          width 100%
          border-right 0.5px solid rgba(white, 0.6)
       .contactFormBlock
          display flex
          flex-direction column
          justify-content center
@media screen and (min-width 700px)
  .homePage
    .photoBlock
      .mainDescriptionBlock, .carouselBlock
        grid-column span 6
      .carouselBlock
        padding 50px 0
    .mapBlock
      .houseMapTextBlock
        grid-column span 4
      .houseMapBlock
        grid-column span 8
    .footerBlock
      .contactDetailsBlock, .contactFormBlock
        grid-column span 6
</style>
