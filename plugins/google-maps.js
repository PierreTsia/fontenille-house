import Vue from 'vue'

import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'
require('dotenv').config()

const options = {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  }
}

Vue.use(VueGoogleMaps, options)
