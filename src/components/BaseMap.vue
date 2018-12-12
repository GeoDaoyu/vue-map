<template>
  <div id="viewDiv"></div>
</template>

<script>
import { createMap } from './tdtmap'
export default {
  data () {
    return {
    }
  },
  async mounted () {
    const map = await createMap()
    this.$store.commit('init', map)
  }
}
</script>
<style scoped>
  @import url('https://js.arcgis.com/4.9/esri/themes/light/main.css');
  #viewDiv {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
