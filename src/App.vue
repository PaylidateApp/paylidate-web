<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'App',

  // theauth(){
  //     let myroute = this.$route.name;
  //     if(
  //       myroute == 'login' || myroute == 'register' || myroute == 'forgot'
  //       || myroute == 'view' || myroute == 'checkout' || myroute == 'success'
  //       || myroute == 'details' || myroute == 'integration' || myroute == 'finish'
  //       || myroute == 'platform' || myroute == 'install' || myroute == 'bank' || myroute == 'product'
  //       ){
  //       return false
  //     }else{
  //       return true
  //     }
  //   },

  // preFetch ({ store, redirect }) {
  //    if (store.state.auth.token) {
  //       store.dispatch("auth/user");
  //       store.dispatch("auth/account");
  //       store.dispatch("card/cards");
  //       // store.dispatch("auth/unread_notification");
  //     }else{
  //       let myroute = this.$route.name;

  //       myroute == 'login' || myroute == 'register' || myroute == 'product'
  //       if (!myroute)redirect({ path: '/' })
  //     }
  // },

}
</script>
