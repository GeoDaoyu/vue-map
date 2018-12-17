<template>
  <div id="viewDiv">
    <base-map></base-map>
    <map-gallary></map-gallary>
    <search></search>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseMap from '@/components/BaseMap.vue'
import MapGallary from '@/components/MapGallary.vue'
import Search from '@/components/Search.vue'
import MapStore from '@/modules/MapStore'

@Component({
  components: {
    BaseMap,
    MapGallary,
    Search
  },
  created () {
    console.log("mapview.vue created")
    MapStore
  }
})
export default class MapView extends Vue {}
</script>

<style scoped>
  @import url('https://js.arcgis.com/4.10/esri/themes/light/main.css');
  #viewDiv {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>