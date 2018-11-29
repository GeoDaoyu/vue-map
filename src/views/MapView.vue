<template>
  <base-map></base-map>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseMap from '@/components/BaseMap.vue' // @ is an alias to /src

@Component({
  components: {
  BaseMap,
  },
  })
export default class MapView extends Vue {}
</script>
