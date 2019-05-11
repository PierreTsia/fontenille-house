<template>
  <div class="houseMapComponent">
    <div class="houseMapComponent__options">
      <h6 class="subheading accent--text">Afficher :</h6>
      <div class="houseMapComponent__options__checkbox">
        <v-checkbox
          v-for="location in markers.slice(1)"
          :key="location.position.lat"
          color="accent"
          v-model="selectedBox"
          :label="capitalize(location.label)"
          :value="location.label"
          dark
          class="white--text"
        ></v-checkbox>
      </div>
    </div>
    <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="dynamicZoom">
      <GmapMarker
        v-for="item in selectedMarkers"
        :key="item.label"
        :position="item.position"
        @click="center = item.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'HouseMap',
  data() {
    return {
      center: { lat: 45.913981, lng: 0.172198 },
      selectedBox: [],
      mapTypeId: 'roadmap',
      dynamicZoom: 12,
      markers: [
        { label: 'fontenille', position: { lat: 45.913981, lng: 0.172198 } },
        { label: 'mansles', position: { lat: 45.876603, lng: 0.178324 } },
        { label: 'ruffec', position: { lat: 46.027466, lng: 0.200691 } },
        { label: 'angouleme', position: { lat: 45.648156, lng: 0.156371 } },
        { label: 'poitiers', position: { lat: 46.580027, lng: 0.340226 } }
      ]
    }
  },
  computed: {
    selectedMarkers() {
      return [].concat(this.markers[0], this.getMarkers(this.selectedBox))
    }
  },
  watch: {
    selectedBox: {
      immediate: true,
      handler(selected) {
        if (selected.length) {
          if (selected.includes('poitiers')) {
            this.dynamicZoom = 8
          } else if (selected.includes('angouleme')) {
            this.dynamicZoom = 9
          } else if (selected.includes('ruffec')) {
            this.dynamicZoom = 10
          } else if (selected.includes('mansles')) {
            this.dynamicZoom = 12
          }
        }
      }
    }
  },
  methods: {
    capitalize(str) {
      return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase()
    },
    getMarkers(labels) {
      return this.markers.filter(m => labels.includes(m.label))
    }
  }
}
</script>

<style scoped lang="stylus">
.houseMapComponent
  display flex
  align-items center
  flex-direction column-reverse
  .houseMapComponent__options
    padding 10px
    width 100%
    .houseMapComponent__options__checkbox
      display flex
      flex-wrap wrap
    h6
      text-align center
  .vue-map-container
    height 450px
    max-width 992px
    width 100%
    margin-right auto
@media screen and (min-width 900px)
  .houseMapComponent
    flex-direction row
    .houseMapComponent__options
      width 20%
      .houseMapComponent__options__checkbox
        flex-direction column
@media screen and (min-width 700px)
  .houseMapComponent
    padding 20px
</style>
