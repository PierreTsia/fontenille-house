<template>
  <div class="galleryBlock container">
    <div class="description">
      description
    </div>
    <Carousel class="carousel" :images="images" />
  </div>
</template>

<script>
import Carousel from './Carousel'

export default {
  name: 'GalleryBlock',
  components: { Carousel },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="stylus">
.galleryBlock
  width 100%
  padding 20px
  display grid
  grid-template-columns repeat(12, 1fr)
  .carousel
    grid-column span 12
  .description
    grid-column span 12

@media screen and (min-width: 600px)
  .galleryBlock
    .carousel
      grid-column span 6
    .description
      grid-column span 6

@media screen and (min-width: 900px)
  .galleryBlock
    .carousel
      grid-column span 6
    .description
      grid-column span 6
</style>
