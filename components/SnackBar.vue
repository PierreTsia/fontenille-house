<template>
  <v-snackbar v-model="isShown" :color="content.color" :timeout="6000">
    {{ content.message }}
    <v-btn dark flat @click="$emit('onClose')">
      Close
    </v-btn>
  </v-snackbar>
</template>
<script>
export default {
  name: 'SnackBar',
  props: {
    snackbar: {
      type: Boolean,
      default: false
    },
    content: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    snackbar: {
      immediate: true,
      handler(state) {
        this.isShown = state
      }
    }
  },
  data() {
    return {
      isShown: false
    }
  }
}
</script>
<style lang="stylus"></style>
