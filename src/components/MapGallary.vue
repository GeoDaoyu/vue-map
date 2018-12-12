<template>
  <el-button @click="changeV">切换</el-button>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    baseMap () {
      return this.$store.state.map
    }
  },
  methods: {
    changeV () {
      console.log(this.$store.state.map.basemap.baseLayers.items[1].visible)

      this.baseMap.basemap.baseLayers.items[0].visible = false
      this.baseMap.basemap.baseLayers.items[1].visible = false
      console.log(this.$store.state.map.basemap.baseLayers.items[1].visible)

      // this.$store.commit('layserVisible', this.baseMap) 
    }
    
  }
}
</script>
<style scoped>
  .el-button {
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    right: 20px;
  }
</style>
