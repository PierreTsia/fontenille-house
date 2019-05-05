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
export default {
  components: {
    Burger
  },
  data() {
    return {}
  }
}
</script>
