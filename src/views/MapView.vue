<template>
  <div>
    <base-map></base-map>
    <map-gallary></map-gallary>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseMap from '@/components/BaseMap.vue'
import MapGallary from '@/components/MapGallary.vue'

@Component({
  components: {
    BaseMap,
    MapGallary
  }
})
export default class MapView extends Vue {}
</script>
