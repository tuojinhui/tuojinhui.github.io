<template>



  <div class="login-form">
    <div class="form-header"></div>


    <div>
      <input type="text" class="form-control" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="form-header"></div>
    <div>
      <input type="password" class="form-control" placeholder="请输入密码" v-model="password" @keyup.enter="keyupEnter">
    </div>

    <div class="btn-row">
      <button class="btn-cancel" @click="cancel">
        取消
      </button>
      <button class="btn-login" @click="login">
        登录
      </button>
    </div>
  </div>
</template>

<script>
import auth from './auth'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },

  created() {
    this.keyupEnter();
  },

  methods: {
    login() {
      const validateSucess = (this.username && this.password);
      if (!validateSucess) {
        this.$dlg.alert('用户名或密码不能为空', {
          messageType: 'warning'
        })
        return;
      }

      const loginSuccess = (this.username === 'admin') && (this.password === 'admin');
      if (!loginSuccess) {
        this.$dlg.alert('用户名或密码不正确', {
          messageType: 'warning'
        })
        return;
      }

      const data = {
        name: this.username,
        time: new Date().getTime()
      }

      auth.addAuth(data);
      this.$emit('close', true)
    },

    cancel() {
      this.$emit('close', true)
    },

    keyupEnter() {
      document.onkeydown = e => {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {
          this.login();
        }
      }
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

  .btn-login
    margin-left: 10px;
    margin-right: 10px;
    padding 0.6rem 2rem
    outline none
    background-color #60C084
    color white
    border 0

  .btn-cancel
    margin-left: 10px;
    margin-right: 10px;
    padding 0.6rem 2rem
    outline none
    background-color #DCDCDC
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

    .close
      position: absolute;
      right: 32px;
      top: 32px;
      width: 32px;
      height: 32px;

    .close:before
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: #333;

    .close:after
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: #333;

    .close:before
      transform: rotate(45deg);

    .close:after
      transform: rotate(-45deg);

</style>