<template>
  <q-page class="column justify-center dBd" :style="$q.screen.gt.sm?'margin-top:-50px':'margin-top:0px'">
    <Main />
    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="gt-sm">
      <q-btn fab icon="ion-chatbubbles" color="primary" type="a"  :href="'mailto:sirlawattah@gmail.com?subject=Paylidate%20Customer%20Support%20'" target="__blank" />
    </q-page-sticky>
</q-page>

</template>

<style>
</style>

<script>
import Main from 'components/pages/Index'
export default {
  name: 'HelloWorld',
  components: {
    Main
  },
  data() {
    return {
      url:'../statics/paylidate-mobile.png'
    }
  }
}
</script>
<style>
.dBd {
  background-image:  url('../statics/paylidate.webp') ;
  height: 100vh;
  background-position:  center ;
  background-repeat: no-repeat;
  background-size:  cover ;
  /* opacity: 0.8; */
}
</style>
