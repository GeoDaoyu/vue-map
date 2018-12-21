<template>
  <div id="viewDiv">
    <map-gallary></map-gallary>
    <search></search>
    <coordinate />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MapGallary from '@/components/MapGallary.vue'
import Search from '@/components/Search.vue'
import Coordinate from '@/components/Coordinate.vue'
import MapStore from '@/modules/MapStore'

@Component({
  components: {
  MapGallary,
  Search,
  Coordinate
  },
  created () {
  const mapStore = MapStore.getMapStore()
  }
  })

export default class MapView extends Vue {}
</script>

<style scoped>
  @import url('http://127.0.0.1:8080/jsapi/4.10/esri/themes/light/main.css');
  #viewDiv {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
