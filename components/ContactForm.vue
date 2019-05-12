<template>
  <div class="contactForm">
    <v-form ref="form" v-model="valid" dark lazy-validation>
      <v-text-field
        v-model="name"
        dark
        :counter="10"
        :rules="nameRules"
        label="Nom"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        dark
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-textarea
        v-model="message"
        dark
        :rules="messageRules"
        label="Votre message"
        required
      ></v-textarea>

      <v-btn
        dark
        :loading="isLoading"
        :disabled="!valid"
        color="accent"
        @click="validate"
      >
        <v-icon class="mr-2" dark>mail_outline</v-icon>
        Envoyer
      </v-btn>

      <v-btn outline color="accent" @click="reset">
        Annuler
      </v-btn>
    </v-form>

    <SnackBar
      @onClose="snackbar = !snackbar"
      :content="snackContent"
      :snackbar="snackbar"
    />
  </div>
</template>

<script>
import axios from 'axios'
import SnackBar from '@/components/SnackBar'

export default {
  name: 'ContactForm',
  components: { SnackBar },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Ce champ est requis',
      v =>
        (v && v.length <= 10 && v.length > 3) ||
        'Votre nom doit compter entre 3 et 10 lettres'
    ],
    email: '',
    emailRules: [
      v => !!v || 'Ce champ est requis',
      v => /.+@.+/.test(v) || "Ceci n'est pas une adresse mail valide"
    ],
    messageRules: [
      v => !!v || 'Ce Champ est requis',
      v =>
        (v && v.length > 10) || 'Votre message doit compter au moins 10 lettres'
    ],
    message: '',
    checkbox: false,
    contactFormUrl:
      'https://us-central1-fontenille-house-1557583570069.cloudfunctions.net/submit',
    isLoading: false,
    snackbar: false,
    snackContent: {},
    snackOptions: {
      error: {
        message: '😭😭 Oups, il y a eu un problème...',
        color: 'red'
      },
      success: {
        message: '🚀🚀 Votre message a bien été envoyé ! ',
        color: 'green'
      }
    }
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.isLoading = true
        axios
          .post(this.contactFormUrl, {
            name: this.name,
            email: this.email,
            message: this.message
          })
          .then(({ data }) => {
            const { success } = data

            if (success) {
              this.snackContent = this.snackOptions.success
              this.reset()
            }
          })
          .catch(e => {
            this.snackContent = this.snackOptions.error
          })
          .finally(() => {
            this.isLoading = false
            this.snackbar = true
          })
      }
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang="stylus">
.contactForm
  padding 50px
  width 100%
  margin auto
  max-width 600px

@media screen and (min-width: 900px)
  .contactForm
    width 80%
    margin auto
</style>
