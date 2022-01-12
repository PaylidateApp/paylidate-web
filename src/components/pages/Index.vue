<template>
  <q-page :class="$q.screen.gt.sm?'text-primary row':'text-primary row reverse'">
    <div class="col-sm-12 col-xs-12 column flex-center lt-md">
      <img src="../../statics/paylidate-mobile.png" spinner-color="white" style="max-height: 100vh; max-width: 80vw" />
    </div>
    <div class="col-md-6 col-sm-12 col-xs-12 column justify-center q-pa-lg q-gutter-md">
      <div :class="$q.screen.gt.sm?'text-h2 theFont':'text-h4 theFont'">
      Pay with Paylidate
    </div>
    <div class=" text-bold">
      Keep your money within your reach even after making payment
    </div>

    <div class="text-caption">
      The customer pays with <strong>Paylidate</strong> <br>
      The seller delivers on agreement <br>
      Customer confirms delivery and money is paid into sellers account
    </div>

     <q-btn :style="$q.screen.gt.sm?'max-width:50%':''" unelevated color="secondary" no-caps label="Start using Paylidate" :to="{name: 'register'}" />
    </div>
    <div class="col-md-6 column flex-center gt-sm">
      <img src="../../statics/paylidate-mobile.png" spinner-color="white" style="max-height: 100vh; max-width: 60vw" />
    </div>

    <div class="fixed-bottom-left q-pa-lg gt-sm">
      <div class="row">
        <q-btn round flat icon="ion-logo-twitter" type="a" :href="'https://twitter.com/paylidate'" target="_blank" />
        <q-btn round flat icon="fab fa-facebook-f" type="a" :href="'https://web.facebook.com/paylidate'" target="__blank" />
        <!-- <q-btn round flat icon="ion-logo-linkedin" type="a" :href="'https://www.linkedin.com/company/ourpasskey'" target="_blank" /> -->
        <q-btn round flat icon="fab fa-instagram" type="a" :href="'https://www.instagram.com/paylidate/?hl=en'" target="_blank" class="q-mr-xs"/>
      </div>
      <div class="text-caption text-bold" style=""><a class="text-primary" href="tel:+2348066984101" style="text-decorations:none">+2348066984101</a></div>
      <div class="text-caption">© 2020 lotusfort technologies. All Rights Reserved</div>
    </div>





  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'HomePage',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
