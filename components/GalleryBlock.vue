<template>
  <div class="galleryBlock">
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
  display grid
  padding 20px 0
  grid-template-columns repeat(12, 1fr)
  .carousel
    grid-column span 12
  .description
    grid-column span 12
</style>
