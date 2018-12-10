<template>
  <el-container>
    <el-header>
      <h1>Login</h1>
    </el-header>
    <el-main>
      <el-card class="box-card">
        <el-form ref="form" :model="form">
          <el-form-item prop="name">
            <el-input v-model="form.name" ref="name" placeholder="手机号/用户名/邮箱" @keyup.enter.native="logIn">
              <template slot="prepend">
                <i class="el-icon-time"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="form.pass" placeholder="密码" autocomplete="on" @keyup.enter.native="logIn">
              <template slot="prepend">
                <i class="el-icon-time"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="auto">
            <el-row>
              <el-col :span="12">
                <el-checkbox-group v-model="form.auto">
                  <el-checkbox label="自动登录" name="auto"></el-checkbox>
                </el-checkbox-group>
              </el-col>
              <el-col :span="12" class="right-align"><a href="javascript:void(0)" class="forget-pwd">忘记密码？</a></el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain @click="logIn">登录</el-button>
          </el-form-item>
          <p>
            还没有账号？
            <a href="javascript:void(0)">免费注册</a>
          </p>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  form = {
    name: '',
    pass: ''
  }
  logIn () {
    this.$router.push({ path: '/mapview' })
  }
}
</script>

<style scoped lang="scss">
  $tip-color: #409EFF;
  h1 {
    color: $tip-color;
    font-size: 26px;
    font-weight: 700;
  }
  a {
    color: $tip-color;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  i {
    font-size: 1.5em;
  }
  .el-header {
    text-align: center;
    line-height: 60px;
  }
  .box-card {
    max-width: 500px;
    margin: 20px auto;
  }
  .forget-pwd {
    line-height: 40px;
  }
  .el-button {
    width: 100%;
  }
  .right-align {
    text-align: right;
  }
  p {
    line-height: 40px;
    font-size: 14px;
    margin: -15px auto;
  }
</style>
