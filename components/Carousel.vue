<template>
  <el-carousel indicator-position="outside" :interval="5000">
    <el-carousel-item
      v-for="(image, index) in images"
      :key="index"
      @click.native="handleImageClick(image)"
    >
      <el-image :src="image.url" :alt="image.title" style="height:100%;">
      </el-image>
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
@media screen and (min-width: 1400px)
  .el-carousel__container
    border 1px solid red
    height 400px
@media screen and (min-width: 1600px)
  .el-carousel__container
    border 1px solid red
    height 600px
</style>
