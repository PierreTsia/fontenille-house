<template>
  <v-snackbar v-model="snackbar" color="green" :timeout="6000">
    Votre message a bien été envoyé !
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
  }
}
</script>
<style lang="stylus"></style>
