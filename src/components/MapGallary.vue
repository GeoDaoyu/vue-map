<template>
  <el-radio-group v-model="activeName" @change="changeBaseLayersVisible">
    <el-radio-button label="地图"></el-radio-button>
    <el-radio-button label="影像"></el-radio-button>
  </el-radio-group>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MapStore from '@/modules/MapStore'

@Component
export default class MapGallary extends Vue {
  activeName = '地图'
  changeBaseLayersVisible (label: string) {
    const mapstore: MapStore = MapStore.getMapStore()
    let map = mapstore.getMap()
    switch (label) {
      case '地图':
        map.basemap.baseLayers.items[0].visible = true
        map.basemap.baseLayers.items[1].visible = false
        break
      case '影像':
        map.basemap.baseLayers.items[0].visible = false
        map.basemap.baseLayers.items[1].visible = true
        break
    }
  }
}
</script>

<style scoped>
  .el-radio-group {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
</style>
