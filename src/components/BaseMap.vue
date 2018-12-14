<template>
  <div id="viewDiv"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import createMap from '@/modules/tdtMap'

@Component
export default class Login extends Vue {
  mounted () {
    createMap('viewDiv')
  }
}
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
