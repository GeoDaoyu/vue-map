<template>
  <div>
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

@Component({
  components: {
    BaseMap,
    MapGallary,
    Search
  }
})
export default class MapView extends Vue {}
</script>
