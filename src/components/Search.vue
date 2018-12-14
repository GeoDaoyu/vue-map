<template>
  <el-input placeholder="搜地点/查天气/找乐子" v-model="input" @keyup.enter.native="search">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="天气" value="weather"></el-option>
      <el-option label="留坑" value="keng"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
  </el-input>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { juheKey } from '@/config/index'

@Component
export default class Login extends Vue {
  input: string = ''
  select: string = 'weather'
  search () {
    // let url = 'http://v.juhe.cn/weather/index?'
    // const params = {
    //   cityname: encodeURI(this.input),
    //   key: juheKey
    // }
    // url += `cityname=${params.cityname}&key=${params.key}`
    // this.$http.get(url).then((r) => {
    //   console.log(r)
    // })
  }
}
</script>

<style scoped>
  .el-input {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 400px;
  }
  .el-select {
    width: 100px;
  }
</style>
