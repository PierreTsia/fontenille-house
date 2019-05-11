<template>
  <v-app>
    <v-toolbar color="secondary" flat>
      <Burger />
    </v-toolbar>
    <nuxt />
  </v-app>
</template>

<script>
import Burger from '@/components/base/Burger'
import { mapMutations } from 'vuex'
export default {
  components: {
    Burger
  },
  data() {
    return {
      windowSize: ''
    }
  },
  watch: {
    windowSize: {
      immediate: true,
      handler(size) {
        if (size) {
          // eslint-disable-next-line
          console.log('size', size)
          let format
          if (size < 400) {
            format = 's'
          } else if (size < 700) {
            format = 'm'
          } else if (size < 1400) {
            format = 'l'
          } else {
            format = 'xl'
          }

          this.setFormat(format)
        }
      }
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
    }
  },
  methods: {
    ...mapMutations(['setFormat']),
    handleResize() {
      this.windowSize = document.documentElement.clientWidth
    }
  }
}
</script>
