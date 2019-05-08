<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <el-carousel indicator-position="outside" :interval="5000">
    <el-carousel-item
      v-for="(image, index) in images"
      :key="index"
      @click.native="handleImageClick(image)"
    >
      <v-img
        :src="image.url"
        :lazy-src="image.url"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
      <span class="imageDescription caption">{{ image.description }}</span>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleImageClick(url) {
      // eslint-disable-next-line
      console.log(url)
    }
  }
}
</script>
<style lang="stylus">
.el-carousel__item
.imageDescription
  width calc(100% - 10px)
  position absolute
  bottom 5px
  padding 5px
  background-color rgba(#323837, 0.6)
  color white
@media screen and (min-width: 1200px)
  .el-carousel__container
    height 600px
@media screen and (min-width: 1600px)
  .el-carousel__container
    height 800px
</style>
