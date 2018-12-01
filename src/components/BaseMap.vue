<template>
  <div id="viewDiv"></div>
</template>

<script>
import * as esriLoader from 'esri-loader'
import { createMap } from './esrimap'
export default {
  data () {
    return {
      mapTitle: 'Create Map'
    }
  },
  methods: {
  },
  mounted () {
    createMap()
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
