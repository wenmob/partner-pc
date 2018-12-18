<template>
  <div id="app" v-cloak v-if="showApp">
    <router-view></router-view>
  </div>
</template>

<script>
import { getToken, setXToken } from '@/utils/auth'
import { mapActions } from 'vuex';
import { customLogin } from '@/api/partnerList';
export default {
  name: 'App',
  data() {
    return {
      showApp: false
    }
  },
  beforeMount () {
    this.getCustomLogin();
  },
  methods: {
    // 注册方法
    ...mapActions(['changePartnerPermission']),
    /**
     * 获取合伙人权限
     */
    getCustomLogin() {
       customLogin({token: getToken()}).then(res => {
         this.changePartnerPermission(res);
         setXToken(res.X_Token);
         this.showApp = true;
       })
    }
  }
}
</script>

<style>
[v-cloak] {display: none;}
</style>
