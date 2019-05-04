<template>
  <v-container class="homePage">
    <h1>{{ mainTitle }}</h1>
    <v-carousel
      delimiter-icon="stop"
      prev-icon="mdi-arrow-left"
      next-icon="mdi-arrow-right"
      height="950"
    >
      <v-carousel-item
        v-for="(item, i) in carousselImages"
        :key="i"
        :src="item"
        reverse-transition="fade"
        transition="fade"
      ></v-carousel-item>
    </v-carousel>
    <div class="mainDescription">
      <span v-html="mainDescription"></span>
    </div>

    <div class="seeMore">
      <span>
        <nuxt-link to="/details">Voir plus </nuxt-link>
        <v-icon color="blue">arrow_right_alt</v-icon>
      </span>
    </div>
    ￼

    <div class="summary">
      <span v-html="summary"></span>
    </div>
  </v-container>
</template>

<script>
import marked from 'marked'
import contentful from '~/plugins/contentful.js'
export default {
  components: {},
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  },
  computed: {
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
.mainDescription
  margin-top 50px
  padding 20px

.seeMore
  width 100%
  display flex
  align-items center
  justify-content flex-end
  span
    display flex
    align-items center
    .v-icon
      margin-left 5px

.summary
  background-color rgba(lightgray, 0.2)
  padding 10px
  margin-top 20px
  ul
    list-style-type square
</style>
