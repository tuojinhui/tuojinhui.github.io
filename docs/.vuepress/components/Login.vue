<template>
  <div class="login-form">
    <div class="form-header"></div>
    <div>
      <input type="text" class="form-control" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="form-header"></div>
    <div>
      <input type="password" class="form-control" placeholder="请输入密码" v-model="password">
    </div>

    <div class="btn-row">
      <button class="btn" @click="login">
        OK
      </button>
    </div>
  </div>
</template>

<script>
import {STORAGE_KEY} from './helper'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      var canLogin = this.username && this.password;
      if (!canLogin) {
        this.$dlg.alert('用户名或密码不能为空', {
          messageType: 'warning'
        })
        return;
      }

      var loginSuccess = (this.username == 'admin') && (this.password = 'admin');
      if(!loginSuccess){
        this.$dlg.alert('用户名或密码不正确', {
          messageType: 'warning'
        })
        return;
      }

      const data = JSON.stringify({
        name: this.username,
        time: new Date().getTime()
      })
      window.localStorage.setItem(STORAGE_KEY, data)
      this.$emit('close', true)
    }
  }
}
</script>

<style lang="stylus">
.login-form
  padding: 1rem
  display flex
  flex-direction column
  box-sizing border-box

  .btn-row
    margin-top 1rem

  .btn
    padding 0.6rem 2rem
    outline none
    background-color #60C084
    color white
    border 0

  .form-header
    color #666
    margin-bottom 0.5rem

  .form-control
    padding 0.6rem
    border 2px solid #ddd
    width 100%
    margin-bottom 0.5rem
    box-sizing border-box
    outline none
    transition border 0.2s ease

    &:focus
      border 2px solid #aaa
</style>